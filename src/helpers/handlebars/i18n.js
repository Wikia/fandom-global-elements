export default function i18n(key) {
    if (key in this.i18n) {
        return this.i18n[key];
    } else {
        return key;
    }
}