const defaultHideSearch = false;
const defaultUserData = null;
const defaultMwBase = 'http://www.wikia.com';
const defaultServicesBase = 'https://services.wikia.com';
const defaultLangCode = 'en';
const defaultCityId = 177;
const defaultCommunityName = null;
const defaultVertical = 'Entertainment';

export const ATTRIBUTES = {
    HIDE_SEARCH: 'hide-search',
    USER_DATA: 'user-data',
    MW_BASE: 'mw-base',
    SERVICES_BASE: 'services-base',
    LANG_CODE: 'lang-code',
    CITY_ID: 'city-id',
    COMMUNITY_NAME: 'community-name',
    VERTICAL: 'vertical',
};

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

    get communityName() {
        return this.getAttribute('community-name', null);
    }

    get vertical() {
        return this.getAttribute('vertical', defaultVertical)
    }
}
