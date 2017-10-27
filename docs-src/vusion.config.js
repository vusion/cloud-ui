const path = require('path');
const hljs = require('highlight.js');

const hashSum = require('hash-sum');
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
                        options: {
                            preserveWhitespace: false,
                        },
                    }, {
                        loader: 'vue-md-loader',
                        options: {
                            wrapper: 'u-article',
                            livePattern: {
                                exec: (content) => [content, 'anonymous-' + hashSum(content)],
                            },
                            liveTemplateProcessor(template) {
                                // Remove whitespace between tags
                                template = template.trim().replace(/>\s+</g, '><');
                                return `<div class="u-example">${template}</div>`;
                            },
                            markdown: {
                                langPrefix: 'lang-',
                                html: true,
                                highlight(str, lang) {
                                    if (lang && hljs.getLanguage(lang)) {
                                        try {
                                            return hljs.highlight(lang, str).value;
                                        } catch (__) {}
                                    }
                                    return '';
                                },
                            },
                            plugins: [
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
