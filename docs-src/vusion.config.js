const path = require('path');
const hljs = require('highlight.js');
const iterator = require('markdown-it-for-inline');

const theme = 'theme-' + process.argv[process.argv.length - 1];
const themePath = theme === 'theme-default' ? 'src' : theme;

module.exports = {
    type: 'app',
    version: '>=0.6.1',
    globalCSSPath: `./${themePath}/base/global.css`,
    extractCSS: true,
    uglifyJS: true,
    webpack: {
        entry: {
            docs: ['babel-polyfill', path.resolve(__dirname, `./index.js`)],
        },
        output: {
            path: path.resolve(__dirname, '../cloud-ui/' + theme),
            publicPath: `/cloud-ui/${theme}/`,
            filename: '[name].js',
            chunkFilename: 'chunk.[name].[chunkhash:16].js',
        },
        resolve: {
            EXTENDS: true,
            alias: {
                EXTENDS: true,
                library$: path.resolve(__dirname, `../${themePath}/index.js`),
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
                        loader: 'vue-markdown-html-loader',
                        options: {
                            wrapper: 'u-article',
                            // livePattern: {
                            //     exec: (content) => [content, 'anonymous-' + hashSum(content)],
                            // },
                            // liveTemplateProcessor(template) {
                            //     // Remove whitespace between tags
                            //     template = template.trim().replace(/>\s+</g, '><');
                            //     return `<div class="u-example">${template}</div>`;
                            // },
                            markdownIt: {
                                langPrefix: 'lang-',
                                html: true,
                                highlight(str, rawLang) {
                                    let lang = rawLang;
                                    if (rawLang === 'vue')
                                        lang = 'html';

                                    if (lang && hljs.getLanguage(lang)) {
                                        try {
                                            const result = hljs.highlight(lang, str).value;
                                            return `<pre class="hljs ${this.langPrefix}${rawLang}"><code>${result}</code></pre>`;
                                        } catch (e) {}
                                    }

                                    return '';
                                    // const result = this.utils.escapeHtml(str);
                                    // return `<pre class="hljs"><code>${result}</code></pre>`;
                                },
                            },
                            markdownItPlugins: [
                                [iterator, 'link_converter', 'link_open', (tokens, idx) => tokens[idx].tag = 'u-link'],
                                [iterator, 'link_converter', 'link_close', (tokens, idx) => tokens[idx].tag = 'u-link'],
                            ],
                        },
                    }],
                },
            ],
        },
    },
    webpackDevServer: {
        contentBase: path.resolve(__dirname, '../cloud-ui'),
    },
};
