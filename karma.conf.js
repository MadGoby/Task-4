const webpackConfig = require('./webpack.config');

module.exports = function(config) {
    config.set({
        basePath: '',
        frameworks: ['jasmine'],
        files: [
            'test/*.ts',
        ],
        exclude: [],
        preprocessors: {
            'test/**/*.ts': 'webpack',
            'src/**/*.ts': 'coverage'
        },
        webpack: {
            module: webpackConfig.module,
            resolve: webpackConfig.resolve,
            mode: webpackConfig.mode,
            devtool: 'inline-source-map',
        },
        coverageReporter: {
            type : 'html',
            dir : 'test/coverage/'
        },
        reporters: ['spec', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        concurrency: Infinity,
    });
};