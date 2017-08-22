import FandomGlobalHeaderDesktop from './FandomGlobalHeaderDesktop.es6';
import FandomGlobalHeaderMobile from './FandomGlobalHeaderMobile.es6';
import AttributeHelper from '../../helpers/AttributeHelper.es6';

export default class FandomGlobalHeader extends HTMLElement {
    connectedCallback() {
        customElements.define('fandom-global-header-desktop', FandomGlobalHeaderDesktop);
        customElements.define('fandom-global-header-mobile', FandomGlobalHeaderMobile);

        this.desktopHeader = new FandomGlobalHeaderDesktop();
        this.mobileHeader = new FandomGlobalHeaderMobile();
        this.atts = new AttributeHelper(this);
        this.rootElement = this.attachShadow({ mode: 'open' });

        this.applyAttributes();
        this._draw();
    }

    applyAttributes() {
        const attributes = this.atts.getAllAttributes();

        this.desktopHeader.atts.setAttributes(attributes);
        this.mobileHeader.atts.setAttributes(attributes);
    }

    _draw() {
        this.rootElement.appendChild(this.desktopHeader);
        this.rootElement.appendChild(this.mobileHeader);
    }
}
