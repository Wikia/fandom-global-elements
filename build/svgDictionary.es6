const fs = require('fs-extra');
const JSDOM = require('jsdom').JSDOM;
const xml2js = require('xml2js');

const svgRoot = `${__dirname}/../node_modules/design-system/dist/svg`;
const spriteSvgContents = readFile(`${svgRoot}/sprite.svg`);
const targetFile = `${__dirname}/../src/helpers/svg/svg-dictionary.html`;

function readFile(file) {
    return fs.readFileSync(file).toString();
}

function stripXmlns(xmlString) {
    return xmlString.replace(/ xmlns="[^"]?"/g, '');
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
        .then((rawSvgData) => {
            const promises = [];

            for (const svgData of rawSvgData) {
                const promise = new Promise((resolve, reject) => {
                    xml2js.parseString(svgData.content, (err, xml) => {
                        if (err) {
                            reject(err);
                        }

                        resolve({ xml, name: svgData.name});
                    });
                });
                promises.push(promise);
            }

            return Promise.all(promises);
        })
        .then((xmlSvgData) => {
            const content = [];
            const builder = new xml2js.Builder({
                headless: true,
                renderOpts: {
                    pretty: false
                }
            });

            for (const svgData of xmlSvgData) {
                svgData.xml.svg.$.class = svgData.name;
                svgData.xml.svg.$.xmlns = '';
                const xml = builder.buildObject(svgData.xml);
                content.push(stripXmlns(xml));
            }

            return content.join('');
        })
        .then(dictionary => fs.writeFile(targetFile, dictionary));
}

generateSvgDictionary();