import headerTemplate from './templates/mobile/mobile.handlebars';
import anonHeader from './templates/mobile/anon-header.handlebars';
import userHeader from './templates/mobile/user-header.handlebars';
import navMenuItem from './templates/mobile/nav-menu-item.handlebars';
import SvgHelper from '../../helpers/svg/SvgHelper.es6';
import { getProfileLink } from './userData.es6';
import getStrings from '../../getStrings.es6';
import { BREAKPOINTS } from '../../helpers/breakpoints.es6';
import { request } from './services.es6';
import { EVENTS } from './events.es6';

export default class FandomGlobalHeaderMobile {
    constructor(el, parent) {
        this.el = el;
        this.parent = parent;
        this.atts = this.parent.atts;
        this.strings = getStrings(this.atts.langCode);
        this.svgs = new SvgHelper(this.el);
        this.isActive = false;
    }

    draw() {
        this.el.innerHTML = headerTemplate({
            searchHidden: this.parent.isSearchHidden(),
            wikiaHomepage: this.parent.mwData.logo.header.href
        });

        this.svgs.addSvgs();
        this.svgs.overwrite();

        return this.el;
    }

    init() {
        this.el.querySelector('.site-logo a, .site-head-fandom-bar a')
            .addEventListener('click', () => this.parent.triggerEvent(EVENTS.CLICK_LOGO));

        this.parent.onEvent(EVENTS.BREAKPOINT_CHANGED, (event) => {
            if (event.detail.size && event.detail.size === BREAKPOINTS.MOBILE) {
                this._setAsActive();
            } else {
                this._setAsInactive()
            }
        });

        this._initNavDrawer();
    }

    _setAsActive() {
        this.isActive = true;
        this.el.classList.remove('is-hidden');
    }

    _setAsInactive() {
        this.isActive = false;
        this.el.classList.add('is-hidden');
    }

    _updateUserState() {
        if (this.parent.userData) {
            this._initUser();
        } else {
            this._initAnon();
        }
    }

    _initAnon() {
        const container = this.el.querySelector('.wikia-nav__header');

        container.innerHTML = anonHeader({
            loginText: this.strings['global-navigation-anon-sign-in'],
            registerText: this.strings['global-navigation-anon-register']
        });

        container.querySelector('.wikia-nav__join').addEventListener('click', () => {
            if (this.parent.triggerEvent(EVENTS.CLICK_JOIN)) {
                window.location.href = `${this.atts.mwBase}/join?redirect=${encodeURIComponent(window.location.href)}`
            }
        });

        this.svgs.overwrite();
    }

    _initUser() {
        const userLinks = this.parent.mwData.user && this.parent.mwData.user.links;
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
        navIconWrapper.addEventListener('click', (event) => {
            event.preventDefault();

            if (this.parent.triggerEvent(EVENTS.MOBILE_NAV_TOGGLE)) {
                this.el.querySelector('.side-nav-drawer').classList.toggle('collapsed');
                navIconWrapper.querySelectorAll('svg').forEach((svg) => {
                    svg.classList.toggle('is-hidden');
                })
            }
        });

        this._updateNavDrawerContent();
    }

    _updateNavDrawerContent() {
        this._updateUserState();

        const container = this.el.querySelector('.nav-menu');

        container.innerHTML = `${this._getFandomNavLinks()} ${this._getWikisNavLink()}`;
        this._bindNavClickEvents(container);

        container.querySelector('.nav-menu--explore').addEventListener('click', () => {
            if (this.parent.triggerEvent(EVENTS.MOBILE_SUBNAV_OPEN)) {
                this._initSubNav(this.strings['global-navigation-wikis-header'], this.parent.mwData.wikis.links)
            }
        });
    }

    _getFandomNavLinks(force = false) {
        if (this.fandomNavLinks && !force) {
            return this.fandomNavLinks;
        }

        const fandomLinks = this.parent.mwData.fandom_overview.links;
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

    _bindNavClickEvents(container) {
        const linkMap = {
            'nav-menu--games': EVENTS.CLICK_VERTICAL_GAMES,
            'nav-menu--movies': EVENTS.CLICK_VERTICAL_MOVIES,
            'nav-menu--tv': EVENTS.CLICK_VERTICAL_TV,
            'nav-menu--link-explore': EVENTS.CLICK_WIKIS_EXPLORE,
            'nav-menu--link-community-central': EVENTS.CLICK_WIKIS_CENTRAL,
            'nav-menu--link-fandom-university': EVENTS.CLICK_WIKIS_UNIVERSITY
        };

        container.querySelectorAll('a').forEach((anchor) => {
            anchor.addEventListener('click', () => {
                const classes = anchor.parentElement.className.split(' ');
                classes.find((name) => {
                    if (linkMap[name]) {
                        this.parent.triggerEvent(linkMap[name]);
                        return true;
                    }
                })
            });
        });

    }

    _getWikisNavLink(force = false) {
        if (this.wikisNavLink && !force) {
            return this.wikisNavLink;
        }

        const wikisLink = this.parent.mwData.wikis.header;
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
                className: `nav-menu--${link.tracking_label.replace(/\./g, '-')}`,
                href: link.href,
                name: this.strings[link.title.key]
            });
        });

        nav.innerHTML = linkTemplates.join('');
        this._bindNavClickEvents(nav);

        header.classList.add('wikia-nav__back');
        header.innerHTML = headerText;

        const killSubNav = () => {
            if (this.parent.triggerEvent(EVENTS.MOBILE_SUBNAV_CLOSE)) {
                header.removeEventListener('click', killSubNav);
                header.classList.remove('wikia-nav__back');
                this._updateNavDrawerContent();
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
        return request(`${this.atts.mwBase}/logout`, { method: 'POST', mode: 'no-cors' })
            .then(() => {
                this.parent.triggerEvent(EVENTS.LOGOUT_SUCCESS);
            });
    }
}
