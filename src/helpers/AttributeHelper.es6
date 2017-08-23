const defaultMwBase = 'http://www.wikia.com';
const defaultServicesBase = 'https://services.wikia.com';
const defaultLangCode = 'en';
const defaultCityId = 177;
const defaultVertical = 'Entertainment';

export const ATTRIBUTES = {
    HIDE_SEARCH: 'hide-search',
    USER_DATA: 'user-data',
    MW_DATA: 'mw-data'
};


export default class AttributeHelper {
    constructor(el) {
        this.el = el;
    }

    setAttribute = (attribute, value) => {
        this.el.setAttribute(attribute, value);
    };

    setAttributes = (attributes) => {
        for (let attr in attributes) {
            if (attributes.hasOwnProperty(attr)) {
                this.setAttribute(attr, attributes[attr]);
            }
        }
    };

    getAttribute = (attribute, defaultValue) => (
        this.el.hasAttribute(attribute) ? this.el.getAttribute(attribute) : defaultValue
    );

    getAllAttributes() {
        const attrObj = {};
        Array.prototype.forEach.call(this.el.attributes, (value, index, namedNodeMap) => {
            let attr = namedNodeMap.item(index);
            attrObj[attr.name] = attr.value;
        });

        return attrObj;
    }

    getAsBool = (attribute, defaultValue = false) => (
        this.getAttribute(attribute, defaultValue.toString()).toLowerCase() === 'true'
    );

    getAsJson = (attribute, defaultValue = null) => {
        if (!this.el.hasAttribute(attribute)) {
            return defaultValue;
        }

        try {
            return JSON.parse(this.el.getAttribute(attribute));
        } catch (e) {
            return defaultValue;
        }
    };

    get mwBase() {
        return this.getAttribute('mw-base', defaultMwBase);
    }

    get servicesBase() {
        return this.getAttribute('services-base', defaultServicesBase);
    }

    get langCode() {
        return this.getAttribute('lang-code', defaultLangCode);
    }

    get cityId() {
        return this.getAttribute('city-id', defaultCityId);
    }

    get communityName() {
        return this.getAttribute('community-name', null);
    }

    get vertical() {
        return this.getAttribute('vertical', defaultVertical)
    }
}
