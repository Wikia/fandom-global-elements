import Headroom from 'headroom.js';
import headerTemplate from './templates/desktop/header.handlebars';
import anonUserMenu from './templates/desktop/anon.handlebars';
import userMenu from './templates/desktop/user.handlebars';
import userLink from './templates/desktop/userLink.handlebars';
import userMenuLogout from './templates/desktop/userMenuLogout.handlebars';
import AttributeHelper from '../helpers/AttributeHelper.es6';
import SvgHelper from '../helpers/svg/SvgHelper.es6';
import PopupHelper  from '../helpers/PopupHelper.es6';
import getStrings from '../getStrings.es6';
import { EVENTS } from './events.es6';
import { fromNavResponse, validateUserData } from './userData.es6';
import { request, requestNavInfo } from './services.es6';
import getOrCreateTemplate from '../getOrCreateTemplate.es6';
import designSystemStyle from 'design-system/dist/css/styles.css';
import style from './styles-desktop.scss';

const headroomElementSelector = 'header.wds-global-navigation';

// desktop
const CSS_CLASSES = {
    HEADROOM_PINNED: 'headroom--pinned',
    HEADROOM_UNPINNED: 'headroom--unpinned',
    SEARCH_ACTIVE: 'wds-search-is-active',
    USER_LOGGED_IN: 'wds-user-is-logged-in'
};

// both
const ATTRIBUTES = {
    HIDE_SEARCH: 'hide-search',
    USER_DATA: 'user-data'
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

export default class FandomGlobalHeader extends HTMLElement {
    connectedCallback() {
        this.rootElement = this.attachShadow({ mode: 'open' });
        this.atts = new AttributeHelper(this);
        this.svgs = new SvgHelper(this.rootElement);
        this.popup = new PopupHelper((e) => this._onMessage(e));
        this.strings = getStrings(this.atts.langCode);
        this.headroom = null;

        this._draw();
        this.headroom = new Headroom(
            this.rootElement.querySelector(headroomElementSelector),
            this._buildHeadroomOptions()
        );
        const userData = validateUserData(this.atts.getAsJson(ATTRIBUTES.USER_DATA));
        this._updateUserData(userData);
        this._bindSearchActions();

        requestNavInfo(this.atts.mwBase, this.atts.langCode)
            .then((json) => {
                this._updateNavLinks(json);
                const userLinks = json.user && json.user.links;

                if (!userData) {
                    this._updateUserData(fromNavResponse(json), userLinks);
                } else if (userLinks) {
                    this._bindUserActions(userLinks);
                }
            });
    }

    disconnectedCallback() {
        this.popup.close();
    }

    refreshUserData() {
        requestNavInfo(this.atts.mwBase, this.atts.langCode).then(json => this._updateUserData(fromNavResponse(json)));
    }

    isVisible() {
        return !this.rootElement.querySelector(headroomElementSelector).classList.contains(CSS_CLASSES.HEADROOM_UNPINNED);
    }

    _isSearchHidden() {
        return this.atts.getAsBool(ATTRIBUTES.HIDE_SEARCH);
    }

    _dispatchEvent(name, detail = {}) {
        this.dispatchEvent(new CustomEvent(name, { detail }));
    }

    _doLogout() {
        return request(`${this.atts.mwBase}/logout`, { method: 'POST', mode: 'no-cors' })
            .then(() => {
                this._dispatchEvent(EVENTS.LOGOUT_SUCCESS);
                this.refreshUserData();
            });
    }

    _draw() {
        const content = headerTemplate({
            strings: this.strings,
            searchHidden: this._isSearchHidden()
        });

        const css = `<style>${designSystemStyle.toString()} ${style.toString()}</style>`;
        const template = getOrCreateTemplate('fandomGlobalHeader', css + content);

        ShadyCSS.prepareTemplate(template, 'fandom-global-header-desktop');
        ShadyCSS.styleElement(this);
        this.rootElement.appendChild(document.importNode(template.content, true));
        this.svgs.addSvgs();
        this.svgs.overwrite();
    }

    _buildHeadroomOptions() {
        const headerHeight = this.rootElement.querySelector('.wds-global-navigation').offsetHeight;
        this.rootElement.querySelector('.wds-global-navigation__wrapper').style.height = `${headerHeight}px`;

        return Object.assign({}, HEADROOM_OPTIONS, {
            offset: headerHeight,
            onUnpin: () => {
                const activeSearch = this.rootElement.querySelector(`.${CSS_CLASSES.SEARCH_ACTIVE}`);
                if (activeSearch) {
                    const classes = this.rootElement.querySelector(headroomElementSelector).classList;
                    classes.add(CSS_CLASSES.HEADROOM_PINNED);
                    classes.remove(CSS_CLASSES.HEADROOM_UNPINNED);
                } else {
                    this._dispatchEvent(EVENTS.UNPIN_HEADROOM);
                }
            },
            onPin: () => {
                this._dispatchEvent(EVENTS.PIN_HEADROOM);
            }
        })
    }

    _bindAnonActions() {
        this.rootElement.querySelector('.wds-global-navigation__account-menu .anon-sign-in').addEventListener('click', () => {
            this._dispatchEvent(EVENTS.CLICK_SIGN_IN);
            this.popup.open(`${this.atts.mwBase}/signin`, {
                modal: 1,
                redirect: window.location.href
            });
        });

        this.rootElement.querySelector('.wds-global-navigation__account-menu .anon-register').addEventListener('click', () => {
            this._dispatchEvent(EVENTS.CLICK_REGISTER);
            this.popup.open(`${this.atts.mwBase}/register`, {
                modal: 1,
                redirect: window.location.href
            });
        });
    }

    _bindUserActions(enabledLinks) {
        const children = [];

        for (const link of enabledLinks) {
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

        const menu = this.rootElement.querySelector('.wds-global-navigation__user-menu .wds-global-navigation__dropdown-content .wds-list');
        menu.innerHTML = children.join('');

        for (const link of Array.from(menu.querySelectorAll('a'))) {
            this._updateLink(link, link.getAttribute('href'), `click-user-${link.getAttribute('data-action')}`);
        }

        this.rootElement
            .querySelector('.wds-global-navigation__user-menu .global-navigation-user-sign-out form')
            .addEventListener('submit', (e) => {
                e.preventDefault();
                this._dispatchEvent(EVENTS.SUBMIT_LOGOUT);
                this._doLogout();
            })
    }

    _bindSearchActions() {
        if (this._isSearchHidden()) {
            return;
        }

        const container = this.rootElement.querySelector('.wds-global-navigation');
        const searchForm = this.rootElement.querySelector('.wds-global-navigation__search');
        const input = searchForm.querySelector('input[name=query]');
        const keypressWrapper = (e) => {
            if (e.key === 'Escape') {
                container.classList.remove(CSS_CLASSES.SEARCH_ACTIVE);
                input.blur();
            }
        };

        searchForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this._dispatchEvent(EVENTS.SUBMIT_SEARCH, { query: input.value });
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

    _updateUserData(userData = null, enabledLinks = []) {
        const menu = this.rootElement.querySelector('.user-menu');
        const startWiki = this.rootElement.querySelector('.wds-global-navigation__start-a-wiki');

        if (userData === null) {
            menu.innerHTML = anonUserMenu({ strings: this.strings });
            startWiki.classList.remove(CSS_CLASSES.USER_LOGGED_IN);
            this._bindAnonActions();
            this.headroom.destroy();
        } else {
            menu.innerHTML = userMenu({ strings: this.strings, user: userData });
            startWiki.classList.add(CSS_CLASSES.USER_LOGGED_IN);
            this._bindUserActions(enabledLinks);
            this.headroom.init();
        }

        this.svgs.overwrite();
    }

    _updateNavLinks(json) {
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
                        this.rootElement.querySelector(selectorOrElement) :
                        selectorOrElement;

        if (element) {
            if (href) {
                element.setAttribute('href', href);
            }

            element.addEventListener('click', (e) => {
                this._dispatchEvent(eventName, { href, originalEvent: e});
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
        this._dispatchEvent(EVENTS.AUTH_SUCCESS);
        this.refreshUserData();
        this.popup.close();
    }
}
