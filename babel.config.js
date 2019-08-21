module.exports = {
    presets: [
        ['env', {
            modules: false,
            targets: {
                browsers: ['> 1%', 'last 2 versions', 'ie >= 9'],
            },
        }],
    ],
    plugins: ['syntax-dynamic-import'],
    env: {
        test: {
            presets: ['env', 'stage-2'],
            plugins: ['istanbul'],
        },
    },
};
