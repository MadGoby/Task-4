const webpackConfig = require("./webpack.config");
const path = require('path');

delete webpackConfig.entry

module.exports = (config) => {
  config.set({
    browsers: ["ChromeHeadless"],
    frameworks: ["jasmine", "webpack"],
    reporters: ["spec", 'coverage-istanbul'],
    files: [
      "test/indexSpec.ts"
    ],
    preprocessors: {
      "test/indexSpec.ts": ["webpack"]
    },
    mime: {
      "text/x-typescript": ["ts", "tsx"],
    },
    webpack: webpackConfig,
    webpackMiddleware: {
      noInfo: true
    },
    coverageIstanbulReporter: {
      reports: [ 'html', 'text-summary', 'lcovonly' ],
      dir: path.join(__dirname, 'test/coverage'),
      fixWebpackSourcePaths: true,
      'report-config': {
        html: { outdir: 'html' }
      }
    }
  })
};
