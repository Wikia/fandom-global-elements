import FandomGlobalHeaderDesktop from './FandomGlobalHeaderDesktop.es6';
import FandomGlobalHeaderMobile from './FandomGlobalHeaderMobile.es6';
import AttributeHelper, { ATTRIBUTES } from '../../helpers/AttributeHelper.es6';
import { requestNavInfo } from './services.es6';
import getOrCreateTemplate from '../../getOrCreateTemplate.es6';
import mobileStyle from './styles/mobile/styles-mobile.scss';
import desktopStyle from './styles-desktop.scss';
import designSystemStyle from 'design-system/dist/css/styles.css';

export default class FandomGlobalHeader extends HTMLElement {
    connectedCallback() {
        this.atts = new AttributeHelper(this).getAllAttributes();
        this.rootElement = this.attachShadow({ mode: 'open' });

        requestNavInfo(this.atts['mw-base'], this.atts['lang-code'])
            .then((mwData) => {
                const data = Object.assign({}, {
                    mwData,
                    attributes: this.atts
                });
                this._createDesktopHeader(data);
                this._createMobileHeader(data);

                this._draw();
            })
    }

    _createDesktopHeader(data) {
        const element = document.createElement('div');
        element.id = 'fandom-global-header-desktop';
        this.desktopHeader = new FandomGlobalHeaderDesktop(element, this, data);
    }

    _createMobileHeader(data) {
        const element = document.createElement('div');
        element.id = 'fandom-global-header-mobile';
        this.mobileHeader = new FandomGlobalHeaderMobile(element, this, data);
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
