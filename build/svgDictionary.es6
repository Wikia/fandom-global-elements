const fs = require('fs-extra');
const JSDOM = require('jsdom').JSDOM;

const svgRoot = `${__dirname}/../node_modules/design-system/dist/svg`;
const spriteSvgContents = readFile(`${svgRoot}/sprite.svg`);
const targetFile = `${__dirname}/../src/helpers/svg/svg-dictionary.html`;

function readFile(file) {
    return fs.readFileSync(file).toString();
}

function generateSvgDictionary() {
    const spriteSvg = JSDOM.fragment(spriteSvgContents);
    const svgLoadPromises = [];

    for (const symbol of spriteSvg.firstChild.querySelectorAll('symbol')) {
        const svgId = symbol.getAttribute('id');
        const svgFile = `${svgRoot}/${svgId}.svg`;
        svgLoadPromises.push(
            fs.readFile(svgFile)
                .then(buffer => Promise.resolve({
                    content: buffer.toString(),
                    name: svgId
                }))
        );
    }

    Promise.all(svgLoadPromises)
        .then((allSvgData) => {
            const output = [];

            for (const svgData of allSvgData) {
                output.push(`<div class="${svgData.name}">${svgData.content}</div>`);
            }

            return output.join('');
        })
        .then(dictionary => fs.writeFile(targetFile, dictionary));
}

generateSvgDictionary();