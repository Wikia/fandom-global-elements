import 'whatwg-fetch';
import getStrings from '../../getStrings.es6';
import getOrCreateTemplate from '../../getOrCreateTemplate.es6';
import footerTemplate from './templates/footer.handlebars';
import AttributeHelper from '../../helpers/AttributeHelper.es6';
import SvgHelper from '../../helpers/svg/SvgHelper.es6';
import footerStyle from './style.scss';

// FIXME: Can this be included globally or reduced?
import designSystemStyle from 'design-system/dist/css/styles.css';

export default class FandomGlobalFooter extends HTMLElement {
    connectedCallback() {
        this.rootElement = this.attachShadow({ mode: 'open' });
        this.atts = new AttributeHelper(this).getAllAttributes();
        this.svgs = new SvgHelper(this.rootElement);
        this.strings = getStrings(this.atts['lang-code']);

        fetch(`${this.atts['mw-base']}/api/v1/design-system/wikis/${this.atts['city-id']}/${this.atts['lang-code']}/global-footer`, { credentials: 'include' })
            .then((response) => response.json())
            .then((footer) => this._draw(footer))
            .catch((error) => console.log('error fetching footer ', error));
    }

    _getCSS() {
        return `<style>${designSystemStyle.toString()} ${footerStyle.toString()}</style>`;
    }

    _draw(footer) {
        const content = footerTemplate({
            i18n: this.strings,
            model: footer,
            communityName: this.atts['community-name'],
            vertical: this.atts.vertical
        });

        const template = getOrCreateTemplate('fandomGlobalFooter', this._getCSS() + content);

        ShadyCSS.prepareTemplate(template, 'fandom-global-footer');
        ShadyCSS.styleElement(this);
        this.rootElement.appendChild(document.importNode(template.content, true));
        this.svgs.addSvgs();
        this.svgs.overwrite();
    }
}
