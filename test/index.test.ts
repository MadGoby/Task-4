const tests = require.context('./spec/', true, /.ts$/);

tests.keys().forEach(tests);

const components = require.context('../src/components/', true, /.ts$/);

components.keys().forEach(components);
