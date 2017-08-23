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

        const userData = validateUserData(this.atts.getAsJson(ATTRIBUTES.USER_DATA)) ||
            fromNavResponse(this.mwData);
        const userLinks = this.mwData.user && this.mwData.user.links;


        if (userData) {
            // TODO: init user when desktop successfully logs you in
            this._initUser(userData, userLinks);
            this._bindLogout();
        } else {
            this._initAnon();
        }

        this._initNavMenu();

        this.svgs.addSvgs();
        this.svgs.overwrite();
    }

    _initAnon() {
        const children = [];
        const container = this.rootElement.querySelector('.wikia-nav__header');

        children.push(anonHeader({
            strings: this.strings
        }));

        container.innerHTML = children.join('');
    }

    _initUser(userData, userLinks) {
        const children = [];
        const container = this.rootElement.querySelector('.wikia-nav__header'); // TODO: make constant
        const profileLink = getProfileLink(userLinks);

        children.push(userHeader({
            unreadCount: 0,
            strings: this.strings,
            currentUser: userData,
            profileLink: profileLink ? profileLink.href : '#',
            logoutText: this.strings['global-navigation-user-sign-out']
        }));

        container.innerHTML = children.join('');
    }

    _initNavMenu() {
        const container = this.rootElement.querySelector('.nav-menu');
        const fandomLinks = this.mwData.fandom_overview.links; // TODO: turn MWData into it's own model?

        const brandedLinks = fandomLinks.map((link) => {
            return navMenuItem({
                className: `nav-menu--external nav-menu--${link.brand}`,
                href: link.href,
                name: this.strings[link.title.key]
            });
        });

        container.innerHTML = brandedLinks.join('');
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
