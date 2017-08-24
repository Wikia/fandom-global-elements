import headerTemplate from './templates/mobile/mobile.handlebars';
import anonHeader from './templates/mobile/anon-header.handlebars';
import userHeader from './templates/mobile/user-header.handlebars';
import navMenuItem from './templates/mobile/nav-menu-item.handlebars';
import SvgHelper from '../../helpers/svg/SvgHelper.es6';
import { fromNavResponse, validateUserData, getProfileLink } from './userData.es6';
import getStrings from '../../getStrings.es6';
import { request } from './services.es6';
import { ATTRIBUTES } from '../../helpers/AttributeHelper.es6';
import { EVENTS } from './events.es6';

export default class FandomGlobalHeaderMobile {
    constructor(el, parent, data) {
        this.el = el;
        this.parent = parent;
        this.mwData = data.mwData;
        this.atts = data.attributes;
        this.strings = getStrings(this.atts['lang-code']);
        this.svgs = new SvgHelper(this.el);
    }

    init() {
        this.userData = validateUserData(this.atts[ATTRIBUTES.USER_DATA]) ||
            fromNavResponse(this.mwData);
        this._draw();
        return this;
    }

    _draw() {
        this.el.innerHTML = headerTemplate();

        this._initNavDrawer();

        this.svgs.addSvgs();
        this.svgs.overwrite();
    }

    _initAnon() {
        const container = this.el.querySelector('.wikia-nav__header');

        const onJoinClick = () => {
            if (this._dispatchEvent(EVENTS.CLICK_JOIN)) {
                window.location.href = `${this.atts['mw-base']}/join?redirect=${encodeURIComponent(window.location.href)}`
            }
        };
        container.addEventListener('click', onJoinClick);

        this._onEvent(EVENTS.MOBILE_SUBNAV_OPEN, () => {
            container.removeEventListener('click', onJoinClick);
        });

        container.innerHTML = anonHeader({
            loginText: this.strings['global-navigation-anon-sign-in'],
            registerText: this.strings['global-navigation-anon-register']
        });

        this.svgs.overwrite();
    }

    // TODO: init user when desktop successfully logs you in
    _initUser() {
        const userLinks = this.mwData.user && this.mwData.user.links;
        const container = this.el.querySelector('.wikia-nav__header'); // TODO: make constant
        const profileLink = getProfileLink(userLinks);

        container.innerHTML = userHeader({
            unreadCount: 0,
            strings: this.strings,
            currentUser: this.userData,
            profileLink: profileLink ? profileLink.href : '#',
            logoutText: this.strings['global-navigation-user-sign-out']
        });

        this._bindLogout();

        // TODO: add event
    }

    _initNavDrawer() {
        const navIconWrapper = this.el.querySelector('.site-head-icon-nav');
        navIconWrapper.addEventListener('click', () => {
            // TODO: Add event
            this.el.querySelector('.side-nav-drawer').classList.toggle('collapsed');
            navIconWrapper.querySelectorAll('svg').forEach((svg) => {
                svg.classList.toggle('is-hidden');
            })
        });

        this._initNavDrawerContent();
    }

    _initNavDrawerContent() {
        if (this.userData) {
            this._initUser();
        } else {
            this._initAnon();
        }

        const container = this.el.querySelector('.nav-menu');
        const fandomLinks = this.mwData.fandom_overview.links; // TODO: turn MWData into it's own model?
        const wikisLink = this.mwData.wikis.header;

        // TODO: cache these templates once they are rendered
        const fandomTemplates = fandomLinks.map((link) => {
            return navMenuItem({
                className: `nav-menu--external nav-menu--${link.brand}`,
                href: link.href,
                name: this.strings[link.title.key]
            });
        });

        // TODO: cache these templates once they are rendered
        const wikisTemplate = navMenuItem({
            className: 'nav-menu--root nav-menu--explore',
            name: this.strings[wikisLink.title.key]
        });

        container.innerHTML = `${fandomTemplates.join('')} ${wikisTemplate}`;

        container.querySelector('.nav-menu--explore').addEventListener('click', () => {
            this._initSubNav(this.strings['global-navigation-wikis-header'], this.mwData.wikis.links)
        });

        // TODO: add event
    }

    _initSubNav(headerText, links) {
        if (!this._dispatchEvent(EVENTS.MOBILE_SUBNAV_OPEN)) {
            return;
        }
        const header = this.el.querySelector('.wikia-nav__header'); // TODO: cache element
        const nav = this.el.querySelector('.nav-menu');

        const linkTemplates = links.map((link) => {
            return navMenuItem({
                className: '',
                href: link.href,
                name: this.strings[link.title.key]
            });
        });

        nav.innerHTML = linkTemplates.join('');

        header.classList.add('wikia-nav__back');
        header.innerHTML = headerText;

        const killSubNav = () => {
            if (this._dispatchEvent(EVENTS.MOBILE_SUBNAV_CLOSE)) {
                header.removeEventListener('click', killSubNav);
                header.classList.remove('wikia-nav__back');
                this._initNavDrawerContent();
            }
        };
        header.addEventListener('click', killSubNav);

    }

    _bindLogout() {
        this.el
            .querySelector('.wikia-nav--logout form')
            .addEventListener('submit', (e) => {
                if (this._dispatchEvent(EVENTS.SUBMIT_LOGOUT)) {
                    e.preventDefault();
                    this._doLogout();
                }
            })
    }

    _doLogout() {
        return request(`${this.atts['mw-base']}/logout`, { method: 'POST', mode: 'no-cors' })
            .then(() => {
                if (this._dispatchEvent(EVENTS.LOGOUT_SUCCESS)) {
                    this._initAnon();
                }
            });
    }

    // TODO: this duplicates desktop version
    _dispatchEvent(name, detail = {}) {
        return this.parent.dispatchEvent(new CustomEvent(name, { detail }));
    }

    // TODO: this duplicates desktop version
    _onEvent(name, callback) {
        return this.parent.addEventListener(name, callback);
    }

    _bindUserActions() {

    }

    _bindAnonActions() {

    }
}
