import headerTemplate from './templates/mobile/mobile.handlebars';
import anonHeader from './templates/mobile/anon-header.handlebars';
import userHeader from './templates/mobile/user-header.handlebars';
import navMenuItem from './templates/mobile/nav-menu-item.handlebars';
import SvgHelper from '../../helpers/svg/SvgHelper.es6';
import { fromNavResponse, validateUserData, getProfileLink } from './userData.es6';
import getStrings from '../../getStrings.es6';
import { request, requestNavInfo } from './services.es6';
import { ATTRIBUTES } from '../../helpers/AttributeHelper.es6';
import { EVENTS } from './events.es6';

export default class FandomGlobalHeaderMobile {
    constructor(el, parent) {
        this.el = el;
        this.parent = parent;
        this.atts = this.parent.data.attributes;
        this.strings = getStrings(this.atts['lang-code']);
        this.svgs = new SvgHelper(this.el);
    }

    init() {
        this._draw();

        this.parent.onEvent(EVENTS.USER_DATA_REFRESHED, () => this._updateUserState());

        return this;
    }

    _updateUserState() {
        if (this.parent.userData) {
            this._initUser();
        } else {
            this._initAnon();
        }
    }

    _draw() {
        this.el.innerHTML = headerTemplate({
            searchHidden: this.parent.isSearchHidden()
        });

        this._initNavDrawer();

        this.svgs.addSvgs();
        this.svgs.overwrite();
    }

    _initAnon() {
        const container = this.el.querySelector('.wikia-nav__header');

        container.innerHTML = anonHeader({
            loginText: this.strings['global-navigation-anon-sign-in'],
            registerText: this.strings['global-navigation-anon-register']
        });

        container.querySelector('.wikia-nav__join').addEventListener('click', () => {
            if (this.parent.triggerEvent(EVENTS.CLICK_JOIN)) {
                window.location.href = `${this.atts['mw-base']}/join?redirect=${encodeURIComponent(window.location.href)}`
            }
        });

        this.svgs.overwrite();
    }

    _initUser() {
        const userLinks = this.parent.data.mwData.user && this.parent.data.mwData.user.links;
        const container = this.el.querySelector('.wikia-nav__header');
        const profileLink = getProfileLink(userLinks);

        container.innerHTML = userHeader({
            unreadCount: 0,
            strings: this.strings,
            currentUser: this.parent.userData,
            profileLink: profileLink ? profileLink.href : '#',
            logoutText: this.strings['global-navigation-user-sign-out']
        });

        this._bindLogout();
    }

    _initNavDrawer() {
        const navIconWrapper = this.el.querySelector('.site-head-icon-nav');
        navIconWrapper.addEventListener('click', () => {
            if (this.parent.triggerEvent(EVENTS.MOBILE_NAV_TOGGLE)) {
                this.el.querySelector('.side-nav-drawer').classList.toggle('collapsed');
                navIconWrapper.querySelectorAll('svg').forEach((svg) => {
                    svg.classList.toggle('is-hidden');
                })
            }
        });

        this._initNavDrawerContent();
    }

    _initNavDrawerContent() {
        this._updateUserState();

        const container = this.el.querySelector('.nav-menu');

        container.innerHTML = `${this._getFandomNavLinks()} ${this._getWikisNavLink()}`;

        container.querySelector('.nav-menu--explore').addEventListener('click', () => {
            if (this.parent.triggerEvent(EVENTS.MOBILE_SUBNAV_OPEN)) {
                this._initSubNav(this.strings['global-navigation-wikis-header'], this.parent.data.mwData.wikis.links)
            }
        });
    }

    _getFandomNavLinks(force = false) {
        if (this.fandomNavLinks && !force) {
            return this.fandomNavLinks;
        }

        const fandomLinks = this.parent.data.mwData.fandom_overview.links;
        const fandomTemplates = fandomLinks.map((link) => {
            return navMenuItem({
                className: `nav-menu--external nav-menu--${link.brand}`,
                href: link.href,
                name: this.strings[link.title.key]
            });
        });

        this.fandomNavLinks = fandomTemplates.join('');

        return this.fandomNavLinks;
    }

    _getWikisNavLink(force = false) {
        if (this.wikisNavLink && !force) {
            return this.wikisNavLink;
        }

        const wikisLink = this.parent.data.mwData.wikis.header;
        this.wikisNavLink = navMenuItem({
            className: 'nav-menu--root nav-menu--explore',
            name: this.strings[wikisLink.title.key]
        });

        return this.wikisNavLink;
    }

    _initSubNav(headerText, links) {
        const header = this.el.querySelector('.wikia-nav__header');
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
            if (this.parent.triggerEvent(EVENTS.MOBILE_SUBNAV_CLOSE)) {
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
                if (this.parent.triggerEvent(EVENTS.SUBMIT_LOGOUT)) {
                    e.preventDefault();
                    this._doLogout();
                }
            })
    }

    _doLogout() {
        return request(`${this.atts['mw-base']}/logout`, { method: 'POST', mode: 'no-cors' })
            .then(() => {
                this.parent.triggerEvent(EVENTS.LOGOUT_SUCCESS);
            });
    }
}
