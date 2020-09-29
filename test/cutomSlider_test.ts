import { IData } from '../src/components/model/dataInterface.ts';

import { Model } from '../src/components/model/model.ts';

describe('Model', function() {
  let modelData: IData = {
    min: '0',
    max: '10',
    currentMin: '3',
    currentMax: '7'
  };

  let model: Model = new Model({ modelData});

  it(' can be create ', function() {
    expect(model).not.toBeNull();
  });

  it(' the transmitted data is saved correctly ', function() {
    expect(model).not.toBeNull();
  });


});
