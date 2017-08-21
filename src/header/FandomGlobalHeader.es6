import FandomGlobalHeaderDesktop from './FandomGlobalHeaderDesktop.es6';
import FandomGlobalHeaderMobile from './FandomGlobalHeaderMobile.es6';

export default class FandomGlobalHeader extends HTMLElement {
    connectedCallback() {
        customElements.define('fandom-global-header-desktop', FandomGlobalHeaderDesktop);
        customElements.define('fandom-global-header-mobile', FandomGlobalHeaderMobile);
        this.rootElement = this.attachShadow({ mode: 'open' });
        this._draw();
    }

    _draw() {
        this.rootElement.appendChild(new FandomGlobalHeaderDesktop());
        this.rootElement.appendChild(new FandomGlobalHeaderMobile());
    }
}
