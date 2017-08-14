import 'whatwg-fetch';
import Headroom from 'headroom.js';
import headerTemplate from './templates/header.handlebars';
import anonUserMenu from './templates/anon.handlebars';
import userMenu from './templates/user.handlebars';
import userLink from './templates/userLink.handlebars';
import userMenuLogout from './templates/userMenuLogout.handlebars';
import AttributeHelper from '../helpers/AttributeHelper.es6';
import SvgHelper from '../helpers/svg/SvgHelper.es6';
import PopupHelper  from '../helpers/PopupHelper.es6';
import getStrings from '../getStrings.es6';
import { fromNavResponse, validateUserData } from './userData.es6';
import getOrCreateTemplate from '../getOrCreateTemplate.es6';
import designSystemStyle from 'design-system/dist/css/styles.css';
import style from './style.scss';

const headroomElementSelector = 'header.wds-global-navigation';

const CSS_CLASSES = {
    HEADROOM_PINNED: 'headroom--pinned',
    HEADROOM_UNPINNED: 'headroom--unpinned',
    HIDDEN: 'hidden',
    SEARCH_ACTIVE: 'wds-search-is-active',
    USER_LOGGED_IN: 'wds-user-is-logged-in'
};

const ATTRIBUTES = {
    HIDE_SEARCH: 'hide-search',
    USER_DATA: 'user-data'
};

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

export const EVENTS = {
    AUTH_SUCCESS: 'auth-success',
    CLICK_CREATE_WIKI: 'click-create-wiki',
    CLICK_LOGO: 'click-logo',
    CLICK_REGISTER: 'click-register',
    CLICK_SIGN_IN: 'click-sign-in',
    CLICK_VERTICAL_GAMES: 'click-vertical-games',
    CLICK_VERTICAL_MOVIES: 'click-vertical-movies',
    CLICK_VERTICAL_TV: 'click-vertical-tv',
    CLICK_MESSAGE_WALL: 'click-message-wall',
    CLICK_WIKIS_CENTRAL: 'click-wikis-central',
    CLICK_WIKIS_EXPLORE: 'click-wikis-explore',
    CLICK_WIKIS_UNIVERSITY: 'click-wikis-university',
    PIN_HEADROOM: 'pin-headroom',
    SUBMIT_LOGOUT: 'submit-logout',
    SUBMIT_SEARCH: 'submit-search',
    UNPIN_HEADROOM: 'unpin-headroom'
};

function _fetch(url, options) {
    return fetch(url, Object.assign({}, { credentials: 'include' }, options));
}

export default class FandomGlobalHeader extends HTMLElement {
    connectedCallback() {
        this.rootElement = this.attachShadow({ mode: 'open' });
        this.atts = new AttributeHelper(this);
        this.svgs = new SvgHelper(this.rootElement);
        this.popup = new PopupHelper((e) => this._onMessage(e));
        this.strings = getStrings(this.atts.langCode);
        this.headroom = null;

        this._draw();
        this.headroom = new Headroom(this.rootElement.querySelector(headroomElementSelector), this._buildHeadroomOptions());
        const userData = validateUserData(this.atts.getAsJson(ATTRIBUTES.USER_DATA));
        this._updateUserData(userData);
        this._bindSearchActions();

        this._fetchNavInfo()
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
        this._fetchNavInfo().then(json => this._updateUserData(fromNavResponse(json)));
    }

    isVisible() {
        return !this.rootElement.querySelector(headroomElementSelector).classList.contains(CSS_CLASSES.HEADROOM_UNPINNED);
    }

    _dispatchEvent(name, detail = {}) {
        this.dispatchEvent(new CustomEvent(name, { detail }));
    }

    _fetchNavInfo() {
        return _fetch(`${this.atts.mwBase}/api/v1/design-system/fandoms/2/${this.atts.langCode}/global-navigation`)
            .then(response => response.json());
    }

    _doLogout() {
        return _fetch(`${this.atts.mwBase}/logout?redirect=${window.location.href}`, { method: 'POST' })
            .catch(() => Promise.resolve(null)); // even if the fetch fails the cookie might still have been cleared, so treat as success
    }

    _draw() {
        const content = headerTemplate({
            strings: this.strings,
            classes: {
                searchForm: this.atts.getAsBool(ATTRIBUTES.HIDE_SEARCH) ? CSS_CLASSES.HIDDEN : ''
            }
        });

        const css = `<style>${designSystemStyle.toString()} ${style.toString()}</style>`;
        const template = getOrCreateTemplate('fandomGlobalHeader', css + content);

        ShadyCSS.prepareTemplate(template, 'fandom-global-header');
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
                this._doLogout()
                    .then(() => this.refreshUserData());
            })
    }

    _bindSearchActions() {
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
        this._updateLink('a.wds-global-navigation__start-a-wiki-button', json.create_wiki.header.href, EVENTS.CLICK_CREATE_WIKI);
        this._updateLink('a.wds-global-navigation__logo', json.logo.header.href, EVENTS.CLICK_LOGO);
        this._updateLink('a.wds-global-navigation__link.wds-is-games', json.fandom_overview.links[0].href, EVENTS.CLICK_VERTICAL_GAMES);
        this._updateLink('a.wds-global-navigation__link.wds-is-movies', json.fandom_overview.links[1].href, EVENTS.CLICK_VERTICAL_MOVIES);
        this._updateLink('a.wds-global-navigation__link.wds-is-tv', json.fandom_overview.links[2].href, EVENTS.CLICK_VERTICAL_TV);
        this._updateLink('.wds-global-navigation__wikis-menu .wds-dropdown__content a.explore-link', json.wikis.links[0].href, EVENTS.CLICK_WIKIS_EXPLORE);
        this._updateLink('.wds-global-navigation__wikis-menu .wds-dropdown__content a.central-link', json.wikis.links[1].href, EVENTS.CLICK_WIKIS_CENTRAL);
        this._updateLink('.wds-global-navigation__wikis-menu .wds-dropdown__content a.university-link', json.wikis.links[2].href, EVENTS.CLICK_WIKIS_UNIVERSITY);
    }

    _updateLink(selectorOrComponent, href, eventName) {
        const component = typeof selectorOrComponent === 'string' ?
            this.rootElement.querySelector(selectorOrComponent) :
            selectorOrComponent;

        if (component) {
            if (href) {
                component.setAttribute('href', href);
            }

            component.addEventListener('click', (e) => {
                this._dispatchEvent(eventName, { href, originalEvent: e});
            })
        }
    }

    _onMessage(event) {
        // this is kinda janky, but we have to try and guess what the message type is based on its data
        if (event.data && event.data.isUserAuthorized === true) { // login event
            this._onLoginSuccess();
        }
    }

    _onLoginSuccess() {
        this._dispatchEvent(EVENTS.AUTH_SUCCESS);
        this.refreshUserData();
        this.popup.close();
    }
}
