const sass = require('node-sass');
const purifycss = require('purify-css');
const glob  = require('glob');
const fs = require('fs');

const cssFileType = /\.css$/;
const generatedName = 'generated-styles.css';
const designSystemStyle = readFile(`${__dirname}/../node_modules/design-system/dist/css/styles.css`);

function readFile(file) {
    return fs.readFileSync(file).toString();
}

function generateCss(rootDir, purifyOptions = {}) {
    let combinedStyles = [designSystemStyle];

    for (const fileName of glob.sync(`${rootDir}/**/*.?(s)css`)) {
        const parts = fileName.split('/');
        if (parts[parts.length - 1] === generatedName) {
            continue;
        }

        const fileContents = readFile(fileName);

        if (cssFileType.test(fileName)) {
            combinedStyles.push(fileContents);
        } else {
            combinedStyles.push(sass.renderSync({
                data: fileContents
            }).css.toString());
        }
    }

    purifycss(
        [`${rootDir}/**/*.handlebars`],
        combinedStyles.join('\n'),
        Object.assign({}, {
            minify: true,
            output: `${rootDir}/${generatedName}`
        }, purifyOptions)
    );
}

generateCss(`${__dirname}/../src/header`, { whitelist: ['*headroom*'] });
