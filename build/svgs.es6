const fs = require('fs-extra');
const glob = require('glob');
const JSDOM = require('jsdom').JSDOM;

const svgRoot = `${__dirname}/../node_modules/design-system/dist/svg`;
const iconSvgRegex = /xlink:href="#(wds-[^"]+)"/g;
const spriteSvgContents = readFile(`${svgRoot}/sprite.svg`);
const generatedName = 'generated-svg.svg';
const { document } = new JSDOM().window;

function readFile(file) {
    return fs.readFileSync(file).toString();
}

function generateSvg(rootDir) {
    const spriteSvg = JSDOM.fragment(spriteSvgContents);
    const svgNames = [];
    let match;

    for (const templateFile of glob.sync(`${rootDir}/**/*.handlebars`)) {
        const contents = readFile(templateFile);
        while (match = iconSvgRegex.exec(contents)) {
            if (svgNames.indexOf(match[1]) === -1) {
                svgNames.push(match[1]);
            }
        }
    }

    const readPromises = [];
    for (const svgName of svgNames) {
        const file = `${svgRoot}/${svgName}.svg`;
        readPromises.push(
            fs.readFile(file)
                .then(buffer => Promise.resolve({
                    content: buffer.toString(),
                    svgName,
                    file
                }))
        );
    }

    Promise.all(readPromises)
        .then((allSvgData) => {
            const usedSymbols = [];

            for (const svgData of allSvgData) {
                const fragment = JSDOM.fragment(svgData.content);
                const svg = fragment.firstChild;
                const symbol = document.createElement('symbol');
                symbol.id = svgData.svgName;
                symbol.setAttribute('viewBox', svg.getAttribute('viewBox'));
                while (svg.hasChildNodes()) {
                    symbol.appendChild(svg.removeChild(svg.firstChild));
                }
                fragment.replaceChild(symbol, svg);
                usedSymbols.push(fragment.firstChild);
            }

            return usedSymbols;
        })
        .then((usedSymbols) => {
            const existingSymbols = spriteSvg.firstChild.querySelectorAll('symbol');
            for (const symbol of existingSymbols) {
                spriteSvg.firstChild.removeChild(symbol);
            }

            for (const symbol of usedSymbols) {
                spriteSvg.firstChild.appendChild(symbol);
            }

            return spriteSvg.firstChild.outerHTML;
        })
        .then((newSvg) => {
            return fs.writeFile(`${rootDir}/${generatedName}`, newSvg);
        });
}

generateSvg(`${__dirname}/../src/header`);
