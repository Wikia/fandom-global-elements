import headerTemplate from './templates/mobile.handlebars';
import SvgHelper from '../helpers/svg/SvgHelper.es6';
import getOrCreateTemplate from '../getOrCreateTemplate.es6';
import style from './styles-mobile.scss';
import designSystemStyle from 'design-system/dist/css/styles.css';

export default class FandomGlobalHeaderMobile extends HTMLElement {
    connectedCallback() {
        this.rootElement = this.attachShadow({ mode: 'open' });
        this.svgs = new SvgHelper(this.rootElement);
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
        this.svgs.addSvgs();
        this.svgs.overwrite();
    }
}
