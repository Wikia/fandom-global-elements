import headerTemplate from './templates/mobile/mobile.handlebars';
import anonHeader from './templates/mobile/anon-header.handlebars';
import userHeader from './templates/mobile/user-header.handlebars';
import navMenuItem from './templates/mobile/nav-menu-item.handlebars';
import SvgHelper from '../../helpers/svg/SvgHelper.es6';
import { fromNavResponse, validateUserData, getProfileLink } from './userData.es6';
import getStrings from '../../getStrings.es6';
import { request } from './services.es6';
import AttributeHelper, { ATTRIBUTES } from '../../helpers/AttributeHelper.es6';
import { EVENTS } from './events.es6';
import getOrCreateTemplate from '../../getOrCreateTemplate.es6';
import style from './styles/mobile/styles-mobile.scss';
import designSystemStyle from 'design-system/dist/css/styles.css';

export default class FandomGlobalHeaderMobile extends HTMLElement {
    constructor(...args) {
        super(...args);
        this.atts = new AttributeHelper(this);
        this.strings = getStrings(this.atts.langCode);
    }

    connectedCallback() {
        this.rootElement = this.attachShadow({ mode: 'open' });
        this.svgs = new SvgHelper(this.rootElement);
        this.mwData = this.atts.getAsJson(ATTRIBUTES.MW_DATA);
        this.userData = validateUserData(this.atts.getAsJson(ATTRIBUTES.USER_DATA)) ||
            fromNavResponse(this.mwData);
        this._draw();
    }

    _draw() {
        const content = headerTemplate();

        // TODO: only include styles once (maybe with "standalone" param)
        const css = `<style>${designSystemStyle.toString()} ${style.toString()}</style>`;
        const template = getOrCreateTemplate('fandomGlobalHeaderMobile', css + content);

        ShadyCSS.prepareTemplate(template, 'fandom-global-header-mobile');
        ShadyCSS.styleElement(this);
        this.rootElement.appendChild(document.importNode(template.content, true));

        this._initNavDrawer();

        this.svgs.addSvgs();
        this.svgs.overwrite();
    }

    _initAnon() {
        const container = this.rootElement.querySelector('.wikia-nav__header');
        container.setAttribute('href', `${this.atts.mwBase}/join?redirect=${encodeURIComponent(window.location.href)}`);

        container.innerHTML = anonHeader({
            loginText: this.strings['global-navigation-anon-sign-in'],
            registerText: this.strings['global-navigation-anon-register']
        });

        this.svgs.overwrite();
    }

    // TODO: init user when desktop successfully logs you in
    _initUser() {
        const userLinks = this.mwData.user && this.mwData.user.links;
        const container = this.rootElement.querySelector('.wikia-nav__header'); // TODO: make constant
        const profileLink = getProfileLink(userLinks);

        container.innerHTML = userHeader({
            unreadCount: 0,
            strings: this.strings,
            currentUser: this.userData,
            profileLink: profileLink ? profileLink.href : '#',
            logoutText: this.strings['global-navigation-user-sign-out']
        });

        this._bindLogout();
    }

    _initNavDrawer() {
        if (this.userData) {
            this._initUser();
        } else {
            this._initAnon();
        }

        const container = this.rootElement.querySelector('.nav-menu');
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
    }

    _initSubNav(headerText, links) {
        const header = this.rootElement.querySelector('.wikia-nav__header'); // TODO: cache element
        const nav = this.rootElement.querySelector('.nav-menu');

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
            header.removeEventListener('click', killSubNav);
            header.classList.remove('wikia-nav__back');
            this._initNavDrawer();
        };
        header.addEventListener('click', killSubNav);
    }

    _bindLogout() {
        this.rootElement
            .querySelector('.wikia-nav--logout form')
            .addEventListener('submit', (e) => {
                e.preventDefault();
                this._dispatchEvent(EVENTS.SUBMIT_LOGOUT);
                this._doLogout();
            })
    }

    _doLogout() {
        return request(`${this.atts.mwBase}/logout`, { method: 'POST', mode: 'no-cors' })
            .then(() => {
                this._dispatchEvent(EVENTS.LOGOUT_SUCCESS);
                this._initAnon();
            });
    }

    // TODO: this duplicates desktop version
    _dispatchEvent(name, detail = {}) {
        this.dispatchEvent(new CustomEvent(name, { detail }));
    }

    _bindUserActions() {

    }

    _bindAnonActions() {

    }

    _updateUserData() {

    }
}
