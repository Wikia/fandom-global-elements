import { EVENTS as HEADER_EVENTS } from './components/header/events.es6';
import FandomGlobalHeader from './components/header/FandomGlobalHeader.es6';
import FandomGlobalFooter from './components/footer/FandomGlobalFooter.es6';

export const EVENTS = {
    HEADER: HEADER_EVENTS
};

export default () => {
    customElements.define('fandom-global-header', FandomGlobalHeader);
    customElements.define('fandom-global-footer', FandomGlobalFooter);
};
