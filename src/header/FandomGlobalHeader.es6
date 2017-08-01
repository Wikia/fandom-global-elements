import 'whatwg-fetch';
import Headroom from 'headroom.js';
import headerTemplate from './templates/header.handlebars';
import anonUserMenu from './templates/anon.handlebars';
import userMenu from './templates/user.handlebars';
import AttributeHelper from '../AttributeHelper.es6';
import getStrings from '../getStrings.es6';
import { fromNavResponse, validateUserData } from './userData.es6';
import getOrCreateTemplate from '../getOrCreateTemplate.es6';
import svg from 'design-system/dist/svg/sprite.svg';
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
    CLICK_AUTHOR_PROFILE: 'click-author-profile',
    CLICK_CREATE_WIKI: 'click-create-wiki',
    CLICK_HELP: 'click-help',
    CLICK_LOGO: 'click-logo',
    CLICK_REGISTER: 'click-register',
    CLICK_SIGN_IN: 'click-sign-in',
    CLICK_VERTICAL_GAMES: 'click-vertical-games',
    CLICK_VERTICAL_MOVIES: 'click-vertical-movies',
    CLICK_VERTICAL_TV: 'click-vertical-tv',
    CLICK_VIEW_PROFILE: 'click-view-profile',
    CLICK_MESSAGE_WALL: 'click-message-wall',
    CLICK_MY_PREFERENCES: 'click-my-preferences',
    CLICK_MY_TALK: 'click-mytalk',
    CLICK_WIKIS_CENTRAL: 'click-wikis-central',
    CLICK_WIKIS_EXPLORE: 'click-wikis-explore',
    CLICK_WIKIS_UNIVERSITY: 'click-wikis-university',
    PIN_HEADROOM: 'pin-headroom',
    SUBMIT_LOGOUT: 'submit-logout',
    SUBMIT_SEARCH: 'submit-search',
    UNPIN_HEADROOM: 'unpin-headroom'
};

export default class FandomGlobalHeader extends HTMLElement {
    connectedCallback() {
        this.rootElement = this.attachShadow({ mode: 'open' });
        this.atts = new AttributeHelper(this);
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
                if (!userData) {
                    this._updateUserData(fromNavResponse(json));
                }
            });
    }

    refreshUserData() {
        this._fetchNavInfo().then(json => this._updateUserData(fromNavResponse(json)));
    }

    _fetchNavInfo() {
        return fetch(`${this.atts.mwBase}/api/v1/design-system/fandoms/2/${this.atts.langCode}/global-navigation`, { credentials: 'same-origin' })
            .then(response => response.json());
    }

    _draw() {
        const content = headerTemplate({
            strings: this.strings,
            classes: {
                searchForm: this.atts.getAsBool(ATTRIBUTES.HIDE_SEARCH) ? CSS_CLASSES.HIDDEN : ''
            }
        });

        const css = `<style>${designSystemStyle.toString()} ${style.toString()}</style>`;
        const template = getOrCreateTemplate('fandomGlobalHeader', css + svg + content);

        ShadyCSS.prepareTemplate(template, 'fandom-global-header');
        ShadyCSS.styleElement(this);
        this.rootElement.appendChild(document.importNode(template.content, true));
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
                    this.dispatchEvent(new CustomEvent(EVENTS.UNPIN_HEADROOM))
                }
            },
            onPin: () => {
                this.dispatchEvent(new CustomEvent(EVENTS.PIN_HEADROOM))
            }
        })
    }

    _bindAnonActions() {
        this.rootElement.querySelector('.wds-global-navigation__account-menu .anon-sign-in').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent(EVENTS.CLICK_SIGN_IN));
        });
        this.rootElement.querySelector('.wds-global-navigation__account-menu .anon-register').addEventListener('click', () => {
            this.dispatchEvent(new CustomEvent(EVENTS.CLICK_REGISTER));
        });
    }

    _bindUserActions() {
        this._updateLink('.wds-global-navigation__user-menu .profile-link', null, EVENTS.CLICK_VIEW_PROFILE);
        this._updateLink('.wds-global-navigation__user-menu .author-link', null, EVENTS.CLICK_AUTHOR_PROFILE);
        this._updateLink('.wds-global-navigation__user-menu .mytalk-link', null, EVENTS.CLICK_MY_TALK);
        this._updateLink('.wds-global-navigation__user-menu .preferences-link', null, EVENTS.CLICK_MY_PREFERENCES);
        this._updateLink('.wds-global-navigation__user-menu .help-link', null, EVENTS.CLICK_HELP);
        this.rootElement
            .querySelector('.wds-global-navigation__user-menu #global-navigation-user-sign-out form')
            .addEventListener('submit', (e) => {
                e.preventDefault();
                this.dispatchEvent(new CustomEvent(EVENTS.SUBMIT_LOGOUT));
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
            this.dispatchEvent(new CustomEvent(EVENTS.SUBMIT_SEARCH, { detail: { query: input.value } }));
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

    _updateUserData(userData = null) {
        const menu = this.rootElement.querySelector('.user-menu');
        const startWiki = this.rootElement.querySelector('.wds-global-navigation__start-a-wiki');

        if (userData === null) {
            menu.innerHTML = anonUserMenu({ strings: this.strings });
            startWiki.classList.remove(CSS_CLASSES.USER_LOGGED_IN);
            this._bindAnonActions();
            this.headroom.destroy();
            return;
        }

        menu.innerHTML = userMenu({ strings: this.strings, user: userData });
        startWiki.classList.add(CSS_CLASSES.USER_LOGGED_IN);
        this._bindUserActions();
        this.headroom.init();
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

    _updateLink(selector, href, eventName) {
        const component = this.rootElement.querySelector(selector);
        if (component) {
            if (href) {
                component.setAttribute('href', href);
            }

            component.addEventListener('click', (e) => {
                this.dispatchEvent(new CustomEvent(eventName, { detail: { href, originalEvent: e } }));
            })
        }
    }
}
