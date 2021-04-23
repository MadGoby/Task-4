// requires all tests in `project/test/src/components/**/index.js`
const tests = require.context("./spec/", true, /.ts$/);
 
tests.keys().forEach(tests);
 
// requires all components in `project/src/components/**/index.js`
const components = require.context("../src/components/", true, /.ts$/);
 
components.keys().forEach(components)