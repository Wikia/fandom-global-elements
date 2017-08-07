function escapeHtml(unsafe) {
    return unsafe
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function licenseLink(model) {
    return `<a href="${escapeHtml(model.params.license.href)}" data-tracking-label="${escapeHtml(model.params.license.tracking_label)}">
        ${escapeHtml(model.params.license.title.value)}
    </a>`;
}

/**
 * Generates the license string at the very bottom of the footer. This string is important in that
 * it contains information used by comscore to place the community.
 *
 * The communityName and vertical allow for overrides. This is required for the FC since not all
 * FC communities are tied to MM communities. The API provides the name and vertical for MW communities.
 *
 * @param model
 * @param communityName override (optional)
 * @param vertical override (optional)
 */
export default function license(model, communityName, vertical) {
    const siteName = escapeHtml(communityName === null ? model.params.sitename.value : communityName);
    const verticalName = escapeHtml(vertical === null ? this.i18n[model.params.vertical.key] : vertical);

    return this.i18n[model.key].replace('__sitename__', siteName)
        .replace('__vertical__', verticalName)
        .replace('__license__', licenseLink(model));
}
