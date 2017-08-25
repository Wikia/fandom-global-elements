import Headroom from 'headroom.js';
import headerTemplate from './templates/desktop/header.handlebars';
import anonUserMenu from './templates/desktop/anon.handlebars';
import userMenu from './templates/desktop/user.handlebars';
import userLink from './templates/desktop/userLink.handlebars';
import userMenuLogout from './templates/desktop/userMenuLogout.handlebars';
import SvgHelper from '../../helpers/svg/SvgHelper.es6';
import PopupHelper  from '../../helpers/PopupHelper.es6';
import getStrings from '../../getStrings.es6';
import { EVENTS } from './events.es6';
import { request } from './services.es6';

const headroomElementSelector = 'header.wds-global-navigation';

// desktop
const CSS_CLASSES = {
    HEADROOM_PINNED: 'headroom--pinned',
    HEADROOM_UNPINNED: 'headroom--unpinned',
    SEARCH_ACTIVE: 'wds-search-is-active',
    USER_LOGGED_IN: 'wds-user-is-logged-in'
};

// desktop (will need mobile separately)
const HEADROOM_OPTIONS = {
    offset: 0,
    tolerance: {
        up: 5,
        down: 0
    },
    classes: {
        pinned: CSS_CLASSES.HEADROOM_PINNED,
        unpinned: CSS_CLASSES.HEADROOM_UNPINNED
    }
};

export default class FandomGlobalHeader {
    constructor(el, parent) {
        this.el = el;
        this.parent = parent;
        this.atts = this.parent.atts;
        this.popup = new PopupHelper((e) => this._onMessage(e));
        this.strings = getStrings(this.atts.langCode);
        this.headroom = null;
        this.svgs = new SvgHelper(this.el);
    }

    init() {
        this._draw();
        this.headroom = new Headroom(
            this.el.querySelector(headroomElementSelector),
            this._buildHeadroomOptions()
        );

        this._updateUserState();
        this._updateNavLinks();

        this._bindSearchActions();

        this.parent.onEvent(EVENTS.USER_DATA_REFRESHED, () => this._updateUserState());

        return this;
    }

    isVisible() {
        return !this.el.querySelector(headroomElementSelector).classList.contains(CSS_CLASSES.HEADROOM_UNPINNED);
    }

    _doLogout() {
        return request(`${this.atts.mwBase}/logout`, { method: 'POST', mode: 'no-cors' })
            .then(() => {
                this.parent.triggerEvent(EVENTS.LOGOUT_SUCCESS);
            });
    }

    _draw() {
        this.el.innerHTML = headerTemplate({
            strings: this.strings,
            searchHidden: this.parent.isSearchHidden()
        });

        this.svgs.addSvgs();
        this.svgs.overwrite();
    }

    _buildHeadroomOptions() {
        const headerHeight = this.el.querySelector('.wds-global-navigation').offsetHeight;
        this.el.querySelector('.wds-global-navigation__wrapper').style.height = `${headerHeight}px`;

        return Object.assign({}, HEADROOM_OPTIONS, {
            offset: headerHeight,
            onUnpin: () => {
                const activeSearch = this.el.querySelector(`.${CSS_CLASSES.SEARCH_ACTIVE}`);
                if (activeSearch) {
                    const classes = this.el.querySelector(headroomElementSelector).classList;
                    classes.add(CSS_CLASSES.HEADROOM_PINNED);
                    classes.remove(CSS_CLASSES.HEADROOM_UNPINNED);
                } else {
                    this.parent.triggerEvent(EVENTS.UNPIN_HEADROOM);
                }
            },
            onPin: () => {
                this.parent.triggerEvent(EVENTS.PIN_HEADROOM);
            }
        })
    }

    _bindAnonActions() {
        this.el.querySelector('.wds-global-navigation__account-menu .anon-sign-in').addEventListener('click', () => {
            if (this.parent.triggerEvent(EVENTS.CLICK_SIGN_IN)) {
                this.popup.open(`${this.atts.mwBase}/signin`, {
                    modal: 1,
                    redirect: window.location.href
                });
            }
        });

        this.el.querySelector('.wds-global-navigation__account-menu .anon-register').addEventListener('click', () => {
            if (this.parent.triggerEvent(EVENTS.CLICK_REGISTER)) {
                this.popup.open(`${this.atts.mwBase}/register`, {
                    modal: 1,
                    redirect: window.location.href
                });
            }
        });
    }

    _bindUserActions() {
        const userLinks = (this.parent.userData && this.parent.userData.links) || [];

        const children = [];

        for (const link of userLinks) {
            if (link.tracking_label === 'account.sign-out') {
                continue;
            }

            children.push(userLink({
                'link-target': link.href,
                'link-action': link.tracking_label,
                'link-text': this.strings[link.title.key]
            }));
        }

        children.push(userMenuLogout({
            'button-text': this.strings['global-navigation-user-sign-out']
        }));

        const menu = this.el.querySelector('.wds-global-navigation__user-menu .wds-global-navigation__dropdown-content .wds-list');
        menu.innerHTML = children.join('');

        for (const link of Array.from(menu.querySelectorAll('a'))) {
            this._updateLink(link, link.getAttribute('href'), `click-user-${link.getAttribute('data-action')}`);
        }

        this.el
            .querySelector('.wds-global-navigation__user-menu .global-navigation-user-sign-out form')
            .addEventListener('submit', (e) => {
                if (this.parent.triggerEvent(EVENTS.SUBMIT_LOGOUT)) {
                    e.preventDefault();
                    this._doLogout();
                }
            })
    }

    _bindSearchActions() {
        if (this.parent.isSearchHidden()) {
            return;
        }

        const container = this.el.querySelector('.wds-global-navigation');
        const searchForm = this.el.querySelector('.wds-global-navigation__search');
        const input = searchForm.querySelector('input[name=query]');
        const keypressWrapper = (e) => {
            if (e.key === 'Escape') {
                container.classList.remove(CSS_CLASSES.SEARCH_ACTIVE);
                input.blur();
            }
        };

        searchForm.addEventListener('submit', (e) => {
            if (this.parent.triggerEvent(EVENTS.SUBMIT_SEARCH, { query: input.value })) {
                e.preventDefault();
            }
        });

        input.addEventListener('focus', () => {
            container.classList.add(CSS_CLASSES.SEARCH_ACTIVE);
            document.addEventListener('keyup', keypressWrapper);
        });

        input.addEventListener('blur', () => {
            container.classList.remove(CSS_CLASSES.SEARCH_ACTIVE);
            document.removeEventListener('keyup', keypressWrapper);
        });
    }

    _updateUserState() {
        const menu = this.el.querySelector('.user-menu');
        const startWiki = this.el.querySelector('.wds-global-navigation__start-a-wiki');

        if (this.parent.userData === null) {
            menu.innerHTML = anonUserMenu({ strings: this.strings });
            startWiki.classList.remove(CSS_CLASSES.USER_LOGGED_IN);
            this._bindAnonActions();
            this.headroom.destroy();
        } else {
            menu.innerHTML = userMenu({ strings: this.strings, user: this.parent.userData });
            startWiki.classList.add(CSS_CLASSES.USER_LOGGED_IN);
            this._bindUserActions();
            this.headroom.init();
        }

        this.svgs.overwrite();
    }

    _updateNavLinks() {
        const json = this.parent.mwData;

        this._updateLink(
            'a.wds-global-navigation__start-a-wiki-button',
            json.create_wiki.header.href,
            EVENTS.CLICK_CREATE_WIKI
        );
        this._updateLink(
            'a.wds-global-navigation__logo',
            json.logo.header.href,
            EVENTS.CLICK_LOGO
        );
        this._updateLink(
            'a.wds-global-navigation__link.wds-is-games',
            json.fandom_overview.links[0].href,
            EVENTS.CLICK_VERTICAL_GAMES
        );
        this._updateLink(
            'a.wds-global-navigation__link.wds-is-movies',
            json.fandom_overview.links[1].href,
            EVENTS.CLICK_VERTICAL_MOVIES
        );
        this._updateLink(
            'a.wds-global-navigation__link.wds-is-tv',
            json.fandom_overview.links[2].href,
            EVENTS.CLICK_VERTICAL_TV
        );
        this._updateLink(
            '.wds-global-navigation__wikis-menu .wds-dropdown__content a.explore-link',
            json.wikis.links[0].href,
            EVENTS.CLICK_WIKIS_EXPLORE
        );
        this._updateLink(
            '.wds-global-navigation__wikis-menu .wds-dropdown__content a.central-link',
            json.wikis.links[1].href,
            EVENTS.CLICK_WIKIS_CENTRAL
        );
        this._updateLink(
            '.wds-global-navigation__wikis-menu .wds-dropdown__content a.university-link',
            json.wikis.links[2].href,
            EVENTS.CLICK_WIKIS_UNIVERSITY
        );
    }

    _updateLink(selectorOrElement, href, eventName) {
        const element = typeof selectorOrElement === 'string' ?
            this.el.querySelector(selectorOrElement) :
            selectorOrElement;

        if (element) {
            if (href) {
                element.setAttribute('href', href);
            }

            element.addEventListener('click', (e) => {
                this.parent.triggerEvent(eventName, { href, originalEvent: e});
            })
        }
    }

    _onMessage(event) {
        // this is kinda janky, but we have to try and guess what the message type is based on its data
        if (event.data && event.data.isUserAuthorized === true) { // login/register event
            this._onAuthSuccess();
        }
    }

    _onAuthSuccess() {
        if (this.parent.triggerEvent(EVENTS.AUTH_SUCCESS)) {
            this.popup.close();
        }
    }
}
