
// TODO: make keys into constants or do some other conversion so we don't have to access atts with dashes
const defaultAttributes = {
    'mw-base': 'http://www.wikia.com',
    'services-base': 'https://services.wikia.com',
    'lang-code': 'en',
    'city-id': 177,
    'vertical': 'Entertainment',
    'community-name': null,
    'hide-search': false
};

export const ATTRIBUTES = {
    HIDE_SEARCH: 'hide-search',
    USER_DATA: 'user-data',
};

export default class AttributeHelper {
    constructor(el) {
        this.el = el;
    }

    getAttribute = (attribute, defaultValue) => (
        this.el.hasAttribute(attribute) ? this.el.getAttribute(attribute) : defaultValue
    );

    getAllAttributes() {
        const attrObj = {};
        Array.prototype.forEach.call(this.el.attributes, (value, index, namedNodeMap) => {
            let attr = namedNodeMap.item(index);
            attrObj[attr.name] = attr.value;
        });

        return Object.assign({}, defaultAttributes, attrObj);
    }
}
