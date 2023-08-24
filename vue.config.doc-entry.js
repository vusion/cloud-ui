const chainCSSOneOfs = require('vue-cli-plugin-vusion/webpack/chainCSSOneOfs');

module.exports = {
    outputDir: 'dist-doc-entry',
    chainWebpack(config) {
        config.entryPoints.clear();
        config.entry('index')
            .add(require.resolve('vue-cli-plugin-vusion/scenes/doc/views/docEntry.js'));

        config.output.filename('[name].js')
            .library('doc-entry')
            .libraryTarget('window');

        config.externals({
            vue: 'Vue',
            'cloud-ui.vusion': 'CloudUI',
        });

        if (config.plugins.has('extract-css')) { // Build mode
            chainCSSOneOfs(config, (oneOf, modules) => {
                oneOf.use('extract-css-loader')
                    .options({
                        publicPath: './',
                        hmr: false,
                    });
            });

            config.plugin('extract-css').tap(([options]) => {
                options.filename = '[name].css';
                return [options];
                // themeFilename: 'css/[name]-theme-[theme].css',
                // themes: Object.keys(vusionConfig.theme),
            });
        }

        if (config.plugins.has('icon-font-plugin')) { // && !vueConfig.publicPath) {
            config.plugin('icon-font-plugin')
                .tap(([options]) => {
                    options.publicPath = './fonts'; // @TODO: this option is weird
                    return [options];
                });
        }

        // 关掉 url(./img/xxx) -> url(img/xxx) 的处理
        config.plugin('optimize-css').tap(([options]) => {
            if (!options.cssnanoOptions.preset[1])
                options.cssnanoOptions.preset[1] = {};
            options.cssnanoOptions.preset[1].normalizeUrl = false;
            options.cssnanoOptions.preset[1].calc = false;
            return [options];
        });
        config.optimization.splitChunks({
            cacheGroups: {
                vendors: false,
                default: false,
            },
        });
    },
};
