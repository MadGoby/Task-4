import { IData } from '../src/components/model/dataInterface.ts';

import { Model } from '../src/components/model/model.ts';
import { Facade } from '../src/components/model/facade.ts';
import { View } from '../src/components/view/view.ts';
import { HandelsLabels } from '../src/components/view/components/handels-labels.ts';
import { Handels } from '../src/components/view/components/handels.ts';
import { SelectedRange } from '../src/components/view/components/selected-range.ts';
import { SideMenu } from '../src/components/view/components/side-menu.ts';
import { SliderMovement } from '../src/components/view/components/slider-movement.ts';
import { SliderRange } from '../src/components/view/components/slider-range.ts';
import { ValueRange } from '../src/components/view/components/valueRange.ts';
import { event } from 'jquery';

let settings = {
  'min': '-10',
  'max': '10',
  'range': false,
  'side-menu': false,
  'handelsLabel': false,
  'vertical': false,
  'step': false,
  'sideMenuContainer': 'false'
};

let modelData: IData = {
  min: -10,
  max: 10,
  'current-min': -5,
  'current-max': 5
};

let model: Model;
let facade: Facade;
let view: View;

describe('Model', function() {

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

});

describe('Facade', function() {

  beforeEach( function(){
    model = new Model(modelData);
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
    facade.refreshModelData({min: "35", sliderWidth: "100"}, "min");
    expect(facade.model.data['current-min']).toEqual(-3);
  });

  it(' refreshModelData() returns an object with a Min value after overwrites ', function() {
    expect(facade.refreshModelData({min: "35", sliderWidth: "100"}, "min")).toEqual({'min': -3});
  });

  it(' refreshModelData() calculates the new Max value correctly and overwrites the model ', function() {
    facade.refreshModelData({max: "65", sliderWidth: "100"}, "max");
    expect(facade.model.data['current-max']).toEqual(3);
  });

  it(' refreshModelData() returns an object with a Max value after overwrites ', function() {
    expect(facade.refreshModelData({max: "65", sliderWidth: "100"}, "max")).toEqual({'max': 3});
  });

  it(' getModelData() returns the selected values ', function() {
    expect(facade.getModelData()).toEqual({'max': 5, 'min': -5});
  });

  it(' getMaxData() returns the maximum possible value ', function() {
    expect(facade.getMaxData()).toEqual(10);
  });

  it(' getPossibleRange() returns a range of possible values ', function() {
    expect(facade.getPossibleRange()).toEqual({'max': 10, 'min': -10});
  });

  it(' getPositionsAmount() returns the number of positions and the minimum possible value', function() {
    expect(facade.getPositionsAmount()).toEqual({'positions': 20, 'minimum': -10});
  });

});

describe(' View ', function() {

  beforeEach( function() {
    view = new View();
  });

});

describe(' View Components ', function() {
  
  describe(' HandelsLabels ', function() {
    
    let handelsLabel: HandelsLabels;

    beforeEach( function() {
      handelsLabel = new HandelsLabels();
    })

    it(' handelsLabel can be create ', function() {
      expect(handelsLabel).not.toBeUndefined();
    });

    it(' MinLabel matches pattern ', function() {
      expect(handelsLabel.minLabel).toEqual($('<label class="minSliderHandelLabel">')[0])
    });

    it(' MaxLabel matches pattern ', function() {
      expect(handelsLabel.maxLabel).toEqual($('<label class="maxSliderHandelLabel">')[0])
    });

    it(' getElements() returns elements ', function() {
      expect(handelsLabel.getElements()).toEqual({
        'min': $('<label class="minSliderHandelLabel">')[0], 
        'max': $('<label class="maxSliderHandelLabel">')[0]
      })
    });

    it(' displayController(ON) change display state of element depending on input ', function() {
      let toggleON = $('<input type="checkbox" checked>')[0];
      handelsLabel.displayController(toggleON, handelsLabel.minLabel, handelsLabel.maxLabel);
      expect(handelsLabel.minLabel.style.display == 'inline' && handelsLabel.maxLabel.style.display == 'inline').toBeTrue();
    });

    it(' displayController(OFF) change display state of element depending on input ', function() {
      let toggleON = $('<input type="checkbox">')[0];
      handelsLabel.displayController(toggleON, handelsLabel.minLabel, handelsLabel.maxLabel);
      expect(handelsLabel.minLabel.style.display == 'none' && handelsLabel.maxLabel.style.display == 'none').toBeTrue();
    });

    it(' centeringRelativeToHandles() centered MinLabel relatively MinHandel based on the width of the text', function() {
      let minLabel = handelsLabel.getElements().min;
      let maxLabel = handelsLabel.getElements().max;
      handelsLabel.centeringRelativeToHandles(20, 10, 10, 30, minLabel, maxLabel)
      expect(minLabel.style.left).toEqual('5px');
    });

    it(' centeringRelativeToHandles() centered MaxLabel relatively MaxHandel based on the width of the text', function() {
      let minLabel = handelsLabel.getElements().min;
      let maxLabel = handelsLabel.getElements().max;
      handelsLabel.centeringRelativeToHandles(20, 10, 10, 30, minLabel, maxLabel)
      expect(maxLabel.style.left).toEqual('-10px');
    });
  });
  
  describe(' Handels ', function() {
    let handels: Handels;

    beforeEach( function() {
      handels = new Handels();
    });

    it(' handels can be create ', function() {
      expect(handels).not.toBeUndefined();
    });

    it(' MinHandel matches pattern ', function() {
      expect(handels.minHandel).toEqual($('<span class="minSliderHandel">')[0]);
    });

    it(' MaxHandel matches pattern ', function() {
      expect(handels.maxHandel).toEqual($('<span class="maxSliderHandel">')[0]);
    });

    it(' getElements() returns elements ', function() {
      expect(handels.getElements()).toEqual({min: $('<span class="minSliderHandel">')[0], max: $('<span class="maxSliderHandel">')[0]})
    });

    it(' displayController(block) change display state of maxHandel ', function() {
      let toggle = $('<input type="checkbox" checked>')[0];
      handels.displayController(toggle, handels.maxHandel);
      expect(handels.maxHandel.style.display).toEqual('block');
    });

    it(' displayController(none) change display state of maxHandel ', function() {
      let toggle = $('<input type="checkbox">')[0];
      handels.displayController(toggle, handels.maxHandel);
      expect(handels.maxHandel.style.display).toEqual('none');
    });
  });
  
  describe(' SelectRange ', function() {
    
    let selectedRange: SelectedRange;

    beforeEach(function() { 
      selectedRange = new SelectedRange();
    });

    it(' selectRange can be create ', function() {
      expect(selectedRange).toBeDefined();
    });

    it(' interval matches pattern ', function() {
      expect(selectedRange.interval).toEqual($('<div class="mainInterval"></div>')[0]);
    });

    it(' getElements() returns elements ', function() {
      expect(selectedRange.getElements()).toEqual($('<div class="mainInterval"></div>')[0]);
    });
  });

  describe(' SliderRange ', function() {
    let sliderRange: SliderRange;

    beforeEach( function() {
      sliderRange = new SliderRange();
    });

    it(' sliderRange can be create ', function() {
      expect(sliderRange).toBeDefined();
    });

    it(' range matches pattern ', function() {
      expect(sliderRange.range).toEqual($('<div class="sliderRange"></div>')[0]);
    });

    it(' getElements() returns elements ', function() {
      expect(sliderRange.getElements()).toEqual($('<div class="sliderRange"></div>')[0]);
    });
  });

  describe(' ValueRange ', function() {
    let valueRange: ValueRange;

    beforeEach( function() {
      valueRange = new ValueRange({'min': settings['min'], 'max': settings['max']});
    });

    it(' valueRange can be create ', function() {
      expect(valueRange).toBeDefined();
    });

    it(' minValue matches pattern ', function() {
      expect(valueRange.minValue).toEqual($('<p class="minSliderPoint">-10</p>')[0]);
    });

    it(' maxValue matches pattern ', function() {
      expect(valueRange.maxValue).toEqual($('<p class="maxSliderPoint">10</p>')[0]);
    });

    it(' getElements() returns elements ', function() {
      let min = $('<p class="minSliderPoint">-10</p>')[0];
      let max = $('<p class="maxSliderPoint">10</p>')[0];
      expect(valueRange.getElements()).toEqual({min: min, max: max});
    });
  });

  describe(' SideMenu ', function() {
    let sideMenu: SideMenu;
    let customSliderMenuContainerPattern = $('<div class="sliderMenuContainer"><p class="customSliderParagVal">Текущее занчение: <output class="sliderValue" id="minSliderValue"></output><output class="sliderValue" id="maxSliderValue"></output></p><p class="customSliderParag">Включить второй ползунок: </p><label class="customSliderToggle"><input class="maxSliderHandelToggle" id="maxSliderHandelToggle" type="checkbox"><span class="customToggleSliderBorder"></span></label><div class="customSliderInputs"><p class="customSliderParag">Изменить значение: </p><label class="customSliderInputlabel" for="customSliderMinInput">Min: </label><input class="customSliderMinInput" id="customSliderMinInput" type="number"><label class="customSliderInputlabel" for="customSliderMaxInput">Max: </label><input class="customSliderMaxInput" id="customSliderMaxInput" type="number"></div><div><p class="customSliderParag">Включить значения под ползунками: </p><label class="customSliderToggle"><input type="checkbox" class="showValueToggle" id="showValueToggle"><span class="customToggleSliderBorder"></span></label></div><div><p class="customSliderParag">Изменить плоскость: </p><label class="customSliderToggle"><input type="checkbox" class="planeToggle" id="planeToggle"><span class="customToggleSliderBorder"></span></label></div></div>')[0];
    let handelTogglePattern = $('<input class="maxSliderHandelToggle" id="maxSliderHandelToggle" type="checkbox">')[0];
    let handelLabelTogglePattern = $('<input type="checkbox" class="showValueToggle" id="showValueToggle">')[0];
    let planeTogglePattern = $('<input type="checkbox" class="planeToggle" id="planeToggle">')[0];
    let minInputPattern = $('<input class="customSliderMinInput" id="customSliderMinInput" type="number">')[0];
    let maxInputPattern = $('<input class="customSliderMaxInput" id="customSliderMaxInput" type="number">')[0];

    beforeEach( function() {
      sideMenu = new SideMenu();
    });

    it(' sideMenu can be create ', function() {
      expect(sideMenu).toBeDefined();
    });

    it(' handelToggle matches pattern ', function() {
      expect(sideMenu.handelToggle).toEqual(handelTogglePattern);
    });

    it(' handelLabelToggle matches pattern ', function() {
      expect(sideMenu.handelLabelToggle).toEqual(handelLabelTogglePattern);
    });

    it(' planeToggle matches pattern ', function() {
      expect(sideMenu.planeToggle).toEqual(planeTogglePattern);
    });

    it(' minInput matches pattern ', function() {
      expect(sideMenu.minInput).toEqual(minInputPattern);
    });

    it(' maxInput matches pattern ', function() {
      expect(sideMenu.maxInput).toEqual(maxInputPattern);
    });

    it(' customSliderMenuContainer matches pattern ', function() {
      expect(sideMenu.customSliderMenuContainer).toEqual(customSliderMenuContainerPattern);
    });

    it(' getElements() returns elements ', function() {
      expect(sideMenu.getElements()).toEqual({
          menu: customSliderMenuContainerPattern,
          handelToggle: handelTogglePattern,
          handelLabelToggle: handelLabelTogglePattern,
          planeToggle: planeTogglePattern,
          minInput: minInputPattern,
          maxInput: maxInputPattern
      });
    });
  });

  describe(' SliderMovement ', function() {

    let sliderMovement: SliderMovement;
    let minHandel = $('<span class="minSliderHandel" style="width: 20px; display: block;">')[0];
    let maxHandel = $('<span class="maxSliderHandel" style="width: 20px; display: block;">')[0];
    let minLabel = $('<label class="minSliderHandelLabel">')[0];
    let maxLabel = $('<label class="maxSliderHandelLabel">')[0];
    let sliderRange = $('<div class="sliderRange" style="width: 120px; position: absolute; left: 100px;"></div>')[0];
    let planeToggle = $('<input type="checkbox" class="planeToggle" id="planeToggle">')[0];
    let handelToggle = $('<input class="maxSliderHandelToggle" id="maxSliderHandelToggle" type="checkbox">')[0];
    let interval = $('<div class="mainInterval"></div>')[0];
    
    beforeEach( function() {
      sliderMovement = new SliderMovement({
        'min': minHandel,
        'max': maxHandel,
        'minLabel': minLabel,
        'maxLabel': maxLabel,
        'sliderRange': sliderRange,
        'planeToggle': planeToggle,
        'handelsToggle': handelToggle,
        'interval': interval,
        'step': settings.step
      });
    });

    it(' sliderMovement can be create ', function() {
      expect(sliderMovement).toBeDefined();
    });

    it(' min matches pattern ', function() {
      expect(sliderMovement.min).toEqual(minHandel);
    });

    it(' max matches pattern ', function() {
      expect(sliderMovement.max).toEqual(maxHandel);
    });

    it(' minLabel matches pattern ', function() {
      expect(sliderMovement.maxLabel).toEqual(maxLabel);
    });

    it(' maxLabel matches pattern ', function() {
      expect(sliderMovement.maxLabel).toEqual(maxLabel);
    });

    it(' sliderRange matches pattern ', function() {
      expect(sliderMovement.sliderRange).toEqual(sliderRange);
    });

    it(' handelsToggle matches pattern ', function() {
      expect(sliderMovement.handelsToggle).toEqual(handelToggle);
    });

    it(' planeToggle matches pattern ', function() {
      expect(sliderMovement.planeToggle).toEqual(planeToggle);
    });

    it(' interval matches pattern ', function() {
      expect(sliderMovement.interval).toEqual(interval);
    });

    it(' stepAmount matches pattern ', function() {
      expect(sliderMovement.step).toEqual(settings.step);
    });

    it(' myData matches pattern ', function() {
      expect(sliderMovement.myData).toEqual({'min': {}, 'max': {}});
    });

    it(' startHandlersPositions () calculates the starting position for MinHandel correctly ', function() {
      document.body.append(sliderMovement.sliderRange, sliderMovement.min);

      sliderMovement.startHandlersPositions({'minimum': settings.min, 'min': modelData['current-min'], 'max': modelData['current-max'], 'positions': `20`})
      expect(sliderMovement.myData.min.min).toEqual('25');
    });

    it(' startHandlersPositions () calculates the starting position for MaxHandel correctly ', function() {
      document.body.append(sliderMovement.sliderRange, sliderMovement.min);

      sliderMovement.startHandlersPositions({'minimum': settings.min, 'min': modelData['current-min'], 'max': modelData['current-max'], 'positions': `20`})
      expect(sliderMovement.myData.max.max).toEqual('75');
    });

    it(' minHandelListener() set the position to 30px relative to the scale', function() {
      sliderMovement.myData.min.min = '0';
      sliderMovement.myData.max.max = '100';
      document.body.append(sliderRange);
      sliderRange.append(minHandel);

      sliderMovement.minHandelListener( {clientX: '100'}, {clientX: '130'} );

      expect(sliderMovement.myData.min.min).toEqual('30');    
    });

    it(' minHandelListener() when a value goes outside the scale range with a negative value, the position will be equal to the minimum possible ', function() {
      sliderMovement.myData.min.min = '0';
      sliderMovement.myData.max.max = '100';
      document.body.append(sliderRange);
      sliderRange.append(minHandel);

      sliderMovement.minHandelListener( {clientX: '100'}, {clientX: '70'} );

      expect(sliderMovement.myData.min.min).toEqual('0');    
    });

    it(' minHandelListener () when a value goes out of the scale range with a value greater than the maximum, the position is equal to the maximum possible ', function() {
      sliderMovement.myData.min.min = '0';
      sliderMovement.myData.max.max = '100';
      document.body.append(sliderRange);
      sliderRange.append(minHandel);

      sliderMovement.minHandelListener( {clientX: '100'}, {clientX: '250'} );

      expect(sliderMovement.myData.min.min).toEqual('100');    
    });
  });
});
