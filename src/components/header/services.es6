import 'whatwg-fetch';

export function request(url, options) {
    return fetch(url, Object.assign({}, { credentials: 'include' }, options));
}

export function requestNavInfo(baseUrl, lang) {
    return request(`${baseUrl}/api/v1/DesignSystem/Navigation?product=fandoms&id=2&lang=${lang}`)
        .then(response => response.json());
}
