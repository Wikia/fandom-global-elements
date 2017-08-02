const defaultMwBase = 'http://www.wikia.com';
const defaultServicesBase = 'https://services.wikia.com';
const defaultLangCode = 'en';
const defaultCityId = 177;

export default class AttributeHelper {
    constructor(el) {
        this.el = el;
    }

    getAttribute = (attribute, defaultValue) => (this.el.hasAttribute(attribute) ? this.el.getAttribute(attribute) : defaultValue);
    getAsBool = (attribute, defaultValue = false) => this.getAttribute(attribute, defaultValue.toString()).toLowerCase() === 'true';
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
}
