import { IData } from '../src/components/model/dataInterface.ts';

import { Model } from '../src/components/model/model.ts';
import { Facade } from '../src/components/model/facade.ts';

describe('Model', function() {

  let modelData: IData = {
    min: -10,
    max: 10,
    'current-min': -5,
    'current-max': 5
  };

  let model: Model;

  beforeEach(function(){
    model = new Model(modelData);
  });
    
  it(' Model can be create ', function() {
    expect(model).not.toBeUndefined();
  });

  it(' the transmitted data is saved correctly ', function() {
    expect(model.data).toEqual(modelData);
  });

  it(' getCurrentData() returns an object with correct data ', function() {
    expect(model.getCurrentData()).toEqual({'minimum': -10, 'min': -5, 'max': 5, 'positions': `20`});
  });

  describe('Facade', function() {

    let facade: Facade;

    beforeEach(function(){
      facade = new Facade(model);
    });

    it(' Facade can be create ', function() {
      expect(facade).not.toBeUndefined();
    });

    it(' the Facade variable refers to Model ', function() {
      expect(facade.model).toBe(model);
    });

    it(' startHandelsPosition() returns an object transmitted by getCurrentData() ', function() {
      expect(facade.startHandelsPosition()).toEqual(model.getCurrentData());
    });

    it(' refreshModelData() calculates the new Min value correctly and overwrites the model ', function() {
      facade.refreshModelData({min: "25", sliderWidth: "100"}, "min");
      expect(facade.model.data['current-min']).toEqual(-5)
    });

    it(' refreshModelData() returns an object with a Min value after overwrites ', function() {
      expect(facade.refreshModelData({min: "25", sliderWidth: "100"}, "min")).toEqual({'min': -5})
    });

    it(' refreshModelData() calculates the new Max value correctly and overwrites the model ', function() {
      facade.refreshModelData({max: "75", sliderWidth: "100"}, "max");
      expect(facade.model.data['current-max']).toEqual(5)
    });

    it(' refreshModelData() returns an object with a Max value after overwrites ', function() {
      expect(facade.refreshModelData({max: "75", sliderWidth: "100"}, "max")).toEqual({'max': 5})
    });

  });
});
