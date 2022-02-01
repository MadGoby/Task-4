const modelTest = require.context('../Model', true, /test.ts$/);
const presenterTests = require.context('../Presenter', true, /test.ts$/);
const viewTests = require.context('../View', true, /test.ts$/);

modelTest.keys().forEach(modelTest);
presenterTests.keys().forEach(presenterTests);
viewTests.keys().forEach(viewTests);

const modelComponents = require.context('../Model', true, /.ts$/);
const presenterComponents = require.context('../Presenter', true, /.ts$/);
const viewComponents = require.context('../View', true, /.ts$/);

modelComponents.keys().forEach(modelComponents);
presenterComponents.keys().forEach(presenterComponents);
viewComponents.keys().forEach(viewComponents);
