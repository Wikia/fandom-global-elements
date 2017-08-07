const webpack = require('webpack');

module.exports = {
    name: 'browser',
    target: 'web',
    context: `${__dirname}/`,
    output: {
        path: process.env.NODE_ENV === 'production' ? `${__dirname}/../dist` : `${__dirname}/../build/dev`,
        filename: '[name].js',
        library: 'FandomGlobalElements',
        libraryTarget: 'umd'
    },
    plugins: [
        new webpack.NoEmitOnErrorsPlugin(),
    ],
    entry: {
        'fandom-elements': [
            'whatwg-fetch',
            './../src/index.es6'
        ]
    },
    module: {
        rules: [
            {
                test: /\.(js|es6)$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        cacheDirectory: '../build/dev/babel_cache',
                        presets: ['es2015'],
                        plugins: ['transform-object-rest-spread', 'babel-plugin-transform-class-properties']
                    }
                }]
            },
            {
                test: /\.handlebars$/,
                use: [{
                    // There's a conflict somewhere in our build that includes another handlebars. Referencing
                    // the loader and runtime directly fixes it.
                    loader: __dirname + '/../node_modules/handlebars-loader/index.js',
                    options: {
                        runtime: __dirname + '/../node_modules/handlebars/dist/handlebars.runtime.js',
                        helperDirs: [`${__dirname}/../src/helpers/handlebars`]
                    }
                }]
            },
            {
                test: /\.css$/,
                use: [{
                    loader: 'css-loader',
                    options: {
                        minimize: true
                    }
                }]
            },
            {
                test: /\.scss$/,
                use: [{
                    loader: 'css-loader'
                }, {
                    loader: 'sass-loader'
                }]
            },
            {
                test: /\.svg$/,
                use: [{
                    loader: 'raw-loader'
                }]
            },
            {
                test: /\.html/,
                use: [{
                    loader: 'raw-loader'
                }]
            }
        ]
    }
};
