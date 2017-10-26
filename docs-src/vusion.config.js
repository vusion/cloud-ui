const path = require('path');
const iterator = require('markdown-it-for-inline');

let theme = path.basename(process.cwd());
if (theme === 'src')
    theme = 'theme-default';

module.exports = {
    type: 'app',
    webpack: {
        entry: {
            docs: path.resolve(__dirname, './index.js'),
        },
        output: {
            path: path.resolve(__dirname, '../public/' + theme),
            publicPath: process.env.NODE_ENV === 'development' ? `/${theme}/` : `/cloud-ui/${theme}/`,
            filename: '[name].js',
            chunkFilename: 'chunk.[name].[chunkhash:16].js',
        },
        resolve: {
            EXTENDS: true,
            alias: {
                EXTENDS: true,
                library$: path.resolve(process.cwd(), 'index.js'),
            },
        },
        module: {
            EXTENDS: true,
            rules: [
                'EXTENDS',
                {
                    test: /\.md$/,
                    use: [{
                        loader: 'vue-loader',
                    },
                    {
                        loader: 'vue-markdown-html-loader',
                        options: {
                            cacheDir: path.resolve(__dirname, './cache'),
                            langPrefix: 'lang-',
                            html: true,
                            wrapper: 'u-article',
                            use: [
                                [iterator, 'link_converter', 'link_open', (tokens, idx) => tokens[idx].tag = 'u-link'],
                                [iterator, 'link_converter', 'link_close', (tokens, idx) => tokens[idx].tag = 'u-link'],
                            ],
                        },
                    },
                    ],
                },
            ],
        },
    },
    webpackDevServer: {
        contentBase: path.resolve(__dirname, '../public'),
    },
};
