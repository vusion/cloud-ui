const path = require('path');
const iterator = require('markdown-it-for-inline');

const theme = 'theme-' + process.argv[process.argv.length - 1];
const themePath = theme === 'theme-default' ? 'src' : theme;

module.exports = {
    type: 'app',
    // version: '>=0.6.1',
    libraryPath: `./${themePath}`,
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
            alias: {
                library$: path.resolve(__dirname, `../${themePath}/index.js`),
            },
        },
        module: {
            rules: [{
                test: /\.md$/,
                use: [{
                    loader: 'vue-loader',
                    options: {
                        preserveWhitespace: false,
                    },
                }, {
                    loader: '@vusion/md-vue-loader',
                    options: {
                        wrapper: 'u-article',
                        plugins: [
                            [iterator, 'link_converter', 'link_open', (tokens, idx) => tokens[idx].tag = 'u-link'],
                            [iterator, 'link_converter', 'link_close', (tokens, idx) => tokens[idx].tag = 'u-link'],
                        ],
                        showCodeLineCount: 5,
                        codeProcess(live, code, content, lang) {
                            const relativePath = path.relative(process.cwd(), this.loader.resourcePath).replace(/\\/g, '/').replace(/^(\.\.\/)+/, '');

                            if (live) {
                                const lineCount = content.split('\n').length;
                                return `<u-code-example
                :show-code="${lineCount <= this.options.showCodeLineCount}"
                :show-detail="${lang === 'vue'}"
                file-path="${relativePath}">
                <div>${live}</div>
                <div slot="code">${code}</div>
            </u-code-example>\n\n`;
                            } else
                                return code;
                        },
                    },
                }],
            }],
        },
    },
    webpackDevServer: {
        contentBase: [path.resolve(__dirname, '../cloud-ui'), path.resolve(__dirname, '../')],
        // host: '0.0.0.0',
    },
};
