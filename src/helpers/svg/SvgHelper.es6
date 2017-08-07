import svg from './svg-dictionary.html';

let idCounter = 0;

const generateDefId = () => `fandom-global-elements-def-${++idCounter}`;

const getSvgId = (elem) => {
    if (!elem.hasAttribute('xlink:href')) {
        return null;
    }

    const href = elem.getAttribute('xlink:href');
    if (href[0] !== '#') {
        return null;
    }

    return href.split('#')[1];
};

// this is kinda crappy, but FF needs the ids to be unique within the entire dom since it doesn't truly support shadow dom
// once it does, we can probably remove this entire function. the triple for loop isn't too bad since only a few
// elements use defs
const updateDefs = (svg) => {
    const defs = svg.querySelector('defs');

    if (!defs) {
        return;
    }

    const map = {};

    for (const def of defs.childNodes) {
        const originalId = def.getAttribute('id');
        const newId = generateDefId();
        def.setAttribute('id', newId);
        map[originalId] = newId;
    }

    const checkAttributes = ['clip-path', 'fill'];

    for (const child of Array.from(svg.querySelectorAll(checkAttributes.map(att => `*[${att}^=url]`).join(',')))) {
        for (const att of checkAttributes) {
            if (child.hasAttribute(att)) {
                for (const originalId of Object.keys(map)) {
                    child.setAttribute(att, child.getAttribute(att).replace(originalId, map[originalId]));
                }
            }
        }
    }
};

// this is needed because in Safari the svg symbol lookup does not work when in a shadow dom
export default class SvgHelper {
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    addSvgs() {
        const container = document.createElement('div');
        container.classList.add('svg-dictionary');
        container.style.display = 'none';
        container.innerHTML = svg;
        this.rootElement.appendChild(container);
    }

    overwrite() {
        for (const use of Array.from(this.rootElement.querySelectorAll('svg use'))) {
            const existingSvg = use.parentNode;
            const svgId = getSvgId(use);
            const dictionarySvg = this.rootElement.querySelector(`.svg-dictionary svg.${svgId}`);

            if (dictionarySvg) {
                const newSvg = dictionarySvg.cloneNode(true);
                newSvg.classList.remove(svgId);
                existingSvg.classList.forEach(c => newSvg.classList.add(c));
                updateDefs(newSvg);
                existingSvg.parentNode.replaceChild(newSvg, existingSvg);
            }
        }
    }
}
