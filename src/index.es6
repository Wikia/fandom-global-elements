import FandomGlobalHeader, { EVENTS as HEADER_EVENTS } from './header/events.es6';
import FandomGlobalFooter from './footer/FandomGlobalFooter.es6';

export const EVENTS = {
    HEADER: HEADER_EVENTS
};

export default () => {
    customElements.define('fandom-global-header', FandomGlobalHeader);
    customElements.define('fandom-global-footer', FandomGlobalFooter);
};
