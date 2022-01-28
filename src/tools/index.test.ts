const modelTest = require.context('../model', true, /test.ts$/);
const presenterTests = require.context('../presenter', true, /test.ts$/);
const viewTests = require.context('../view', true, /test.ts$/);

modelTest.keys().forEach(modelTest);
presenterTests.keys().forEach(presenterTests);
viewTests.keys().forEach(viewTests);

const modelComponents = require.context('../model', true, /.ts$/);
const presenterComponents = require.context('../presenter', true, /.ts$/);
const viewComponents = require.context('../view', true, /.ts$/);

modelComponents.keys().forEach(modelComponents);
presenterComponents.keys().forEach(presenterComponents);
viewComponents.keys().forEach(viewComponents);
