import svgDictionary from './svg-dictionary.html';

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

export default class SvgHelper {
    constructor(rootElement) {
        this.rootElement = rootElement;
    }

    addSvgs() {
        const container = document.createElement('div');
        container.classList.add('svg-dictionary');
        container.style.display = 'none';
        container.innerHTML = svgDictionary;
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
                existingSvg.parentNode.replaceChild(newSvg, existingSvg);
            }
        }
    }
}
