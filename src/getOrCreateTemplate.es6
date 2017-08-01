export default function getOrCreateTemplate(id, content) {
    const existingTemplate = document.querySelector(`template#${id}`);
    if (existingTemplate) {
        return existingTemplate;
    }

    const template = document.createElement('template');
    template.id = id;
    template.innerHTML = content;
    document.body.appendChild(template);

    return template;
}
