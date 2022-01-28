const path = require('path');
const webpackConfig = require('./webpack.config');

delete webpackConfig.entry;

module.exports = (config) => {
  config.set({
    browsers: ['Chrome'],
    frameworks: ['jasmine', 'webpack'],
    reporters: ['spec', 'coverage-istanbul'],
    files: [
      'src/tools/index.test.ts',
    ],
    preprocessors: {
      'src/tools/index.test.ts': ['webpack'],
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx'],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true,
    },
    coverageIstanbulReporter: {
      reports: ['html', 'text-summary', 'lcovonly'],
      dir: path.join(__dirname, 'dist/coverage'),
      fixWebpackSourcePaths: true,
      'report-config': {
        html: { outdir: 'html' },
      },
    },
  });
};
