import FandomGlobalHeaderDesktop from './FandomGlobalHeaderDesktop.es6';
import FandomGlobalHeaderMobile from './FandomGlobalHeaderMobile.es6';
import AttributeHelper, { ATTRIBUTES } from '../../helpers/AttributeHelper.es6';
import { requestNavInfo } from './services.es6';

export default class FandomGlobalHeader extends HTMLElement {
    connectedCallback() {
        customElements.define('fandom-global-header-desktop', FandomGlobalHeaderDesktop);
        customElements.define('fandom-global-header-mobile', FandomGlobalHeaderMobile);

        this.desktopHeader = new FandomGlobalHeaderDesktop();
        this.mobileHeader = new FandomGlobalHeaderMobile();
        this.atts = new AttributeHelper(this);
        this.rootElement = this.attachShadow({ mode: 'open' });

        requestNavInfo(this.atts.mwBase, this.atts.langCode)
            .then((json) => {
                this._applyMediaWikiDataAttribute(json);
                this._applyPassedAttributes();
                this._draw();
            })
    }

    _applyMediaWikiDataAttribute(json) {
        const data = JSON.stringify(json);
        this.desktopHeader.atts.setAttribute(ATTRIBUTES.MW_DATA, data);
        this.mobileHeader.atts.setAttribute(ATTRIBUTES.MW_DATA, data);
    }

    _applyPassedAttributes() {
        const attributes = this.atts.getAllAttributes();

        this.desktopHeader.atts.setAttributes(attributes);
        this.mobileHeader.atts.setAttributes(attributes);
    }

    _draw() {
        this.rootElement.appendChild(this.desktopHeader);
        this.rootElement.appendChild(this.mobileHeader);
    }
}
