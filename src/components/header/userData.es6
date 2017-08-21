export function fromNavResponse(json) {
    const data = json.user;
    if (!data) {
        return null;
    }

    const name = data.header.username.value;

    return {
        name,
        avatar: data.header.url
    }
}

export function validateUserData(data) {
    return data && data.name && data.avatar ? data : null;
}
