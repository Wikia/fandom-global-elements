import 'whatwg-fetch';

export function request(url, options) {
    return fetch(url, Object.assign({}, { credentials: 'include' }, options));
}

export function requestNavInfo(baseUrl, lang) {
    return request(`${baseUrl}/api/v1/design-system/fandoms/2/${lang}/global-navigation`)
        .then(response => response.json());
}


