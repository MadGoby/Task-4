import { IData } from '../src/components/model/dataInterface.ts';

import { Model } from '../src/components/model/model.ts';

describe('Model', function() {
  let modelData: IData = {
    min: -10,
    max: 10,
    'current-min': -5,
    'current-max': 5
  };

  let model: Model = new Model(modelData);

  it(' can be create ', function() {
    expect(model).not.toBeNull();
  });

  it(' the transmitted data is saved correctly ', function() {
    expect(model.data).toEqual(modelData);
  });

  it(' getCurrentData() returns an object with correct data', function() {
    expect(model.getCurrentData()).toEqual({'minimum': -10, 'min': -5, 'max': 5, 'positions': `20`})
  });
});
