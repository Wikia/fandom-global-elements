import throttle from 'throttle-debounce/throttle';
import FandomGlobalHeaderDesktop from './FandomGlobalHeaderDesktop.es6';
import FandomGlobalHeaderMobile from './FandomGlobalHeaderMobile.es6';
import AttributeHelper, { ATTRIBUTES } from '../../helpers/AttributeHelper.es6';
import { EVENTS } from './events.es6';
import { BREAKPOINTS } from '../../breakpoints.es6';
import { fromNavResponse } from './userData.es6';
import { requestNavInfo } from './services.es6';
import getOrCreateTemplate from '../../getOrCreateTemplate.es6';
import mobileStyle from './styles/mobile/styles-mobile.scss';
import desktopStyle from './styles-desktop.scss';
import designSystemStyle from 'design-system/dist/css/styles.css';

export default class FandomGlobalHeader extends HTMLElement {
    connectedCallback() {
        this.atts = new AttributeHelper(this);
        this.rootElement = this.attachShadow({ mode: 'open' });
        this.mwData = null;
        this.userData = null;

        this._bindEvents();

        requestNavInfo(this.atts.mwBase, this.atts.langCode)
            .then((mwData) => {
                this.mwData = mwData;
                this.userData = fromNavResponse(mwData);

                this._createDesktopHeader();
                this._createMobileHeader();
                this._draw();
            })
    }

    triggerEvent(name, detail = {}) {
        return this.dispatchEvent(new CustomEvent(name, { detail, cancelable: true }));
    }

    onEvent(name, callback) {
        return this.addEventListener(name, (...args) => callback(...args));
    }

    refreshUserData() {
        return requestNavInfo(this.atts.mwBase, this.atts.langCode)
            .then(json => {
                this.userData = fromNavResponse(json);
                this.mwData.user = this.userData;
                this.triggerEvent(EVENTS.USER_DATA_REFRESHED)
            });
    }

    isSearchHidden() {
        return this.atts.getAsBool(this.atts[ATTRIBUTES.HIDE_SEARCH]);
    }

    isVisible() {
        return this.mobileHeader.isVisible() || this.desktopHeader.isVisible();
    }

    _bindEvents() {
        this.onEvent(EVENTS.AUTH_SUCCESS, () => this.refreshUserData());
        this.onEvent(EVENTS.LOGOUT_SUCCESS, () => this.refreshUserData());
    }

    _createDesktopHeader() {
        const element = document.createElement('div');
        element.id = 'fandom-global-header-desktop';
        this.desktopHeader = new FandomGlobalHeaderDesktop(element, this);
    }

    _createMobileHeader() {
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

        this.rootElement.appendChild(this.desktopHeader.draw());
        this.rootElement.appendChild(this.mobileHeader.draw());

        this.desktopHeader.init();
        this.mobileHeader.init();

        this._initActiveBreakpoint();
    }

    _initActiveBreakpoint() {
        const getViewportSize = () => {
            return window.innerWidth < this.atts.desktopBreakpoint ? BREAKPOINTS.MOBILE : BREAKPOINTS.DESKTOP;
        };
        let viewportSize = getViewportSize();
        this.triggerEvent(EVENTS.BREAKPOINT_CHANGED, {size: viewportSize});

        window.addEventListener('resize', throttle(100, () => {
            let newViewportSize = getViewportSize();
            if (newViewportSize !== viewportSize) {
                viewportSize = newViewportSize;
                this.triggerEvent(EVENTS.BREAKPOINT_CHANGED, {size: newViewportSize});
            }
        }));
    }
}
