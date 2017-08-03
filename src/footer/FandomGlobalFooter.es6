import 'whatwg-fetch';
import getStrings from '../getStrings.es6';
import getOrCreateTemplate from '../getOrCreateTemplate.es6';
import footerTemplate from './templates/footer.handlebars';
import AttributeHelper from '../AttributeHelper.es6';
import footerStyle from './style.scss';

// FIXME: Can this be included globally or reduced?
import svg from 'design-system/dist/svg/sprite.svg';
import designSystemStyle from 'design-system/dist/css/styles.css';

export default class FandomGlobalFooter extends HTMLElement {
    connectedCallback() {
        this.rootElement = this.attachShadow({ mode: 'open' });
        this.atts = new AttributeHelper(this);
        this.strings = getStrings(this.atts.langCode);

        fetch(`${this.atts.mwBase}/api/v1/design-system/wikis/${this.atts.cityId}/${this.atts.langCode}/global-footer`, { credentials: 'include' })
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
            communityName: this.atts.communityName,
            vertical: this.atts.vertical
        });

        const template = getOrCreateTemplate('fandomGlobalFooter', this._getCSS() + svg + content);

        ShadyCSS.prepareTemplate(template, 'fandom-global-footer');
        ShadyCSS.styleElement(this);
        this.rootElement.appendChild(document.importNode(template.content, true));
    }
}
