import FandomGlobalHeaderDesktop from './FandomGlobalHeaderDesktop.es6';
import FandomGlobalHeaderMobile from './FandomGlobalHeaderMobile.es6';
import AttributeHelper, { ATTRIBUTES } from '../../helpers/AttributeHelper.es6';
import { EVENTS } from './events.es6';
import { fromNavResponse } from './userData.es6';
import { requestNavInfo } from './services.es6';
import getOrCreateTemplate from '../../getOrCreateTemplate.es6';
import mobileStyle from './styles/mobile/styles-mobile.scss';
import desktopStyle from './styles-desktop.scss';
import designSystemStyle from 'design-system/dist/css/styles.css';

export default class FandomGlobalHeader extends HTMLElement {
    connectedCallback() {
        this.atts = new AttributeHelper(this).getAllAttributes();
        this.rootElement = this.attachShadow({ mode: 'open' });
        this.data = null;
        this.userData = null;

        this.onEvent(EVENTS.AUTH_SUCCESS, () => this.refreshUserData());
        this.onEvent(EVENTS.LOGOUT_SUCCESS, () => this.refreshUserData());

        requestNavInfo(this.atts['mw-base'], this.atts['lang-code'])
            .then((mwData) => {
                this.data = Object.assign({}, {
                    mwData,
                    attributes: this.atts
                });

                this.userData = fromNavResponse(mwData);
                this._createDesktopHeader();
                this._createMobileHeader();
                this._draw();
            })
    }

    triggerEvent(name, detail = {}) {
        return this.dispatchEvent(new CustomEvent(name, { detail }));
    }

    onEvent(name, callback) {
        return this.addEventListener(name, () => callback());
    }

    refreshUserData() {
        return requestNavInfo(this.atts['mw-base'], this.atts['lang-code'])
            .then(json => {
                this.userData = fromNavResponse(json);
                this.data.mwData.user = this.userData;
                this.triggerEvent(EVENTS.USER_DATA_REFRESHED)
            });
    }

    _createDesktopHeader() {
        const element = document.createElement('div');
        element.id = 'fandom-global-header-desktop';
        this.desktopHeader = new FandomGlobalHeaderDesktop(element, this);
    }

    _createMobileHeader(data) {
        const element = document.createElement('div');
        element.id = 'fandom-global-header-mobile';
        this.mobileHeader = new FandomGlobalHeaderMobile(element, this);
    }

    _draw() {
        const css = `<style>${designSystemStyle.toString()} ${mobileStyle.toString()} ${desktopStyle.toString()}</style>`;
        const template = getOrCreateTemplate('fandomGlobalHeader', css);

        ShadyCSS.prepareTemplate(template, 'fandom-global-header');
        ShadyCSS.styleElement(this);
        this.rootElement.appendChild(document.importNode(template.content, true));

        this.rootElement.appendChild(this.desktopHeader.init().el);
        this.rootElement.appendChild(this.mobileHeader.init().el);
    }
}
