let counter = 0;

function getNextPopupName() {
    return `popup_${++counter}`;
}

export default class PopupHelper {
    constructor(maxHeight = 670, maxWidth = 768) {
        this.name = getNextPopupName();
        this.maxHeight = maxHeight;
        this.maxWidth = maxWidth;
        this.popup = null;
    }

    isEventFromPopup = event => this.popup && event.source && event.source === this.popup;

    open = (popupUrl, queryParams = {}) => {
        let url = popupUrl;
        if (Object.keys(queryParams).length > 0) {
            url += '?'+Object.keys(queryParams).map(param => `${param}=${encodeURIComponent(queryParams[param])}`).join('&');
        }

        const spec = this._getPopupSizeAndPosition();
        const features = Object.keys(spec).map(param => `${param}=${spec[param]}`).join(',');
        this.popup = window.open(url, this.name, features);
    };

    close = () => {
        if (this.popup) {
            this.popup.close();
        }

        this.popup = null;
    };

    _getPopupSizeAndPosition = () => {
        const width = window.innerWidth < this.maxWidth ? window.innerWidth : this.maxWidth;
        const height = this.maxHeight;
        const left = window.screenX + (window.innerWidth / 2) - (width / 2);
        const top = window.screenY + (window.innerHeight / 2) - (height / 2);

        return { width, height, left, top };
    };
}
