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

export default function license(model) {
    return this.i18n[model.key].replace('__sitename__', escapeHtml(model.params.sitename.value))
        .replace('__vertical__', escapeHtml(this.i18n[model.params.vertical.key]))
        .replace('__license__', licenseLink(model));
}

// {{license model.licensing_and_vertical.description.key
// model.licensing_and_vertical.description.params.sitename.value
// model.licensing_and_vertical.description.params.vertical.key}}


