import headerTemplate from './templates/mobile/mobile.handlebars';
import anonHeader from './templates/mobile/anon-header.handlebars';
import SvgHelper from '../../helpers/svg/SvgHelper.es6';
import getStrings from '../../getStrings.es6';
import AttributeHelper from '../../helpers/AttributeHelper.es6';
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
        this._draw();

        // const json = this.attrs.getAttribute('mw-data');

        this._initSideNavDrawerContent();
    }

    _draw() {
        const content = headerTemplate();

        // TODO: only include styles once (maybe with "standalone" param)
        const css = `<style>${designSystemStyle.toString()} ${style.toString()}</style>`;
        const template = getOrCreateTemplate('fandomGlobalHeaderMobile', css + content);

        ShadyCSS.prepareTemplate(template, 'fandom-global-header-mobile');
        ShadyCSS.styleElement(this);
        this.rootElement.appendChild(document.importNode(template.content, true));
        this.svgs.addSvgs();
        this.svgs.overwrite();
    }

    _initSideNavDrawerContent() {
        const children = [];
        const container = this.rootElement.querySelector('.side-nav-drawer__content');

        children.push(anonHeader({
            strings: this.strings
        }));
        container.innerHTML = children.join('');
        this.svgs.overwrite();


        // insert header element based on logged in vs anon
        // the "back" version can replace this later


    }
}
