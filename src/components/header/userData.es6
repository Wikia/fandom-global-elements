export function fromNavResponse(json) {
    const data = json.user;
    if (!data) {
        return null;
    }

    const name = data.header.username.value;

    return {
        name,
        avatar: data.header.url,
        links: data.links
    }
}

export function validateUserData(data) {
    return data && data.name && data.avatar ? data : null;
}

export function getProfileLink(userLinks = null) {
    let profileLinkData = null;

    if (userLinks) {
        profileLinkData = userLinks.find((link) => {
            if (link.tracking_label == 'account.profile') {
                return link;
            }
        })
    }

    return profileLinkData;
}
