import { IData } from '../src/components/model/model';
import { Model } from '../src/components/model/model';
import { Facade } from '../src/components/model/facade';
import { View } from '../src/components/view/view';
import { HandelsLabels } from '../src/components/view/components/handels-labels';
import { Handels } from '../src/components/view/components/handels';
import { SelectedRange } from '../src/components/view/components/selected-range';
import { SideMenu } from '../src/components/view/components/side-menu';
import { SliderMovement } from '../src/components/view/components/slider-movement';
import { SliderRange } from '../src/components/view/components/slider-range';
import { ValueRange } from '../src/components/view/components/valueRange';
import { Settings } from 'jquery.ui.customSlider';

let settings = {
  'min': '-10',
  'max': '10',
  'range': false,
  'side-menu': false,
  'handelsLabel': false,
  'vertical': false,
  'step': false,
};

let modelData: IData = {
  'min': '-10',
  'max': '10',
  'current-min': '-5',
  'current-max': '5'
};

let model: Model;
let facade: Facade;
let view: View;

describe('Model', function() {

  beforeEach(function(){
    model = new Model({'min': modelData['min'], 'max': modelData['max'], 'current-min': modelData['current-min'] ? modelData['current-min'] : '', 'current-max': modelData['current-max'] ? modelData['current-max'] : ''});
  });
    
  it(' Model can be create ', function() {
    expect(model).not.toBeUndefined();
  });

  it(' the transmitted data is saved correctly ', function() {
    expect(model.data).toEqual(modelData);
  });

  it(' getCurrentData() returns an object with correct data ', function() {
    expect(model.getCurrentData()).toEqual({'minimum': '-10', 'min': '-5', 'max': '5', 'positions': `20`});
  });

});

describe('Facade', function() {

  beforeEach( function(){
    model = new Model({'min': modelData['min'], 'max': modelData['max'], 'current-min': modelData['current-min'] ? modelData['current-min'] : '', 'current-max': modelData['current-max'] ? modelData['current-max'] : ''});
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
    facade.refreshModelData({min: "35", sliderWidth: "100", max : ''}, "min");
    expect(facade.model.data['current-min']).toEqual('-3');
  });

  it(' refreshModelData() returns an object with a Min value after overwrites ', function() {
    expect(facade.refreshModelData({min: "35", sliderWidth: "100", 'max': ''}, "min")).toEqual({'min': '-3'});
  });

  it(' refreshModelData() calculates the new Max value correctly and overwrites the model ', function() {
    facade.refreshModelData({max: "65", sliderWidth: "100", 'min': ''}, "max");
    expect(facade.model.data['current-max']).toEqual('3');
  });

  it(' refreshModelData() returns an object with a Max value after overwrites ', function() {
    expect(facade.refreshModelData({max: "65", sliderWidth: "100", min: ''}, "max")).toEqual({'max': '3'});
  });

  it(' getModelData() returns the selected values ', function() {
    expect(facade.getModelData()).toEqual({'max': '5', 'min': '-5'});
  });

  it(' getMaxData() returns the maximum possible value ', function() {
    expect(facade.getMaxData()).toEqual(10);
  });

  it(' getPossibleRange() returns a range of possible values ', function() {
    expect(facade.getPossibleRange()).toEqual({'max': '10', 'min': '-10'});
  });

  it(' getPositionsAmount() returns the number of positions and the minimum possible value', function() {
    expect(facade.getPositionsAmount()).toEqual({'positions': '20', 'minimum': '-10'});
  });

});

describe(' View ', function() {
  let view: View;
  let shell = (<HTMLDivElement>$('<div class="MainShell" ></div>')[0]);
  let sideMenuShell = $('<div id="sideMenuShell" ></div>')[0];
  document.body.append(shell);
  shell.append(sideMenuShell);

  let settings: Settings = {
    'min': '-10',
    'max': '10',
    'range': true,
    'side-menu': true,
    'handelsLabel': true,
    'vertical': false,
    'step': '2',
    'sideMenuContainer': '#sideMenuShell'
  };

  beforeEach( function() {
    view = new View(shell, settings);
  });

  it(' refreshCurrentValues() correctly updates View for Min value ', function() {
    view.refreshCurrentValues({'min': '5'});
    expect(view.minLabel.textContent).toEqual('5');
    view.minSliderValueOutput ? expect(view.minSliderValueOutput.textContent).toEqual('5') : false;
    view.minInput ? expect(view.minInput.value).toEqual('5') : false;
  });

  it(' refreshCurrentValues() correctly updates View for Max value ', function() {
    view.refreshCurrentValues({'max': '5'});
    expect(view.maxLabel.textContent).toEqual('5');
    view.maxSliderValueOutput ? expect(view.maxSliderValueOutput.textContent).toEqual(' - 5') : false;
    view.maxInput ? expect(view.maxInput.value).toEqual('5') : false;
  });

  it(' refreshCurrentValues() correctly updates View for Max and Min value ', function() {
    view.handelToggle ? view.handelToggle.checked = true : false;
    view.refreshCurrentValues({'min': '-5' ,'max': '5'});
    expect(view.minLabel.textContent).toEqual('-5');
    expect(view.maxLabel.textContent).toEqual('5');
    view.minSliderValueOutput ? expect(view.minSliderValueOutput.textContent).toEqual('-5') : false;
    view.maxSliderValueOutput ? expect(view.maxSliderValueOutput.textContent).toEqual(' - 5') : false;
    view.minInput ? expect(view.minInput.value).toEqual('-5') : false;
    view.maxInput ? expect(view.maxInput.value).toEqual('5') : false;
  });

  it(' callMaxHandelToggleChanger() modifies elements correctly when turning off the second Handel ', function() {
    view.sliderRange.style.width = '120px';
    view.minHandel.style.width = '20px';
    view.minHandel.style.display = 'block';
    if (view.sideMenu && view.maxInput) {
      document.body.append(view.sliderRange, view.maxHandel, view.minHandel, view.interval,  view.sideMenu, view.maxInput)
    }
    view.handelToggle ? view.handelToggle.checked = false : false;
    view.callMaxHandelToggleChanger();
    expect(view.sliderMovement.currentHandelsPositions.max.max).toEqual('100');
    expect(view.maxHandel.style.left).toEqual('100px');
    view.maxSliderValueOutput ? expect(view.maxSliderValueOutput.textContent).toEqual('') : false;
    if (view.maxInput) {
      expect(view.maxInput.value).toEqual('');
      expect(view.maxInput.hasAttribute('readonly')).toEqual(true);
      expect(view.maxInput.style.opacity).toEqual('0.3');
    };
    expect(view.interval.style.display).toEqual('none');
    expect(view.maxHandel.style.display).toEqual('none');
  });

  it(' callMaxHandelToggleChanger() modifies elements correctly when turning on the second Handel ', function() {
    view.sliderRange.style.width = '120px';
    view.minHandel.style.width = '20px';
    view.minHandel.style.display = 'block';
    view.maxHandel.style.width = '20px';
    view.maxHandel.style.display = 'block';
    if (view.sideMenu && view.maxInput) {
      document.body.append(view.sliderRange, view.maxHandel, view.minHandel, view.sideMenu, view.maxInput, view.interval)
    };
    view.handelToggle ? view.handelToggle.checked = true : false;
    view.sliderMovement.currentHandelsPositions.min.min = '100';
    view.callMaxHandelToggleChanger();
    view.maxInput ? expect(view.maxInput.hasAttribute('readonly')).toEqual(false) : false;
    view.handelToggle ? view.handelToggle.checked = false : false;
    expect(view.interval.style.display).toEqual('block');
    expect(view.interval.style.right).toEqual('10px');
    expect(view.maxHandel.style.display).toEqual('block');
    expect(view.sliderMovement.currentHandelsPositions.min.min).toEqual('80');
    expect(view.minHandel.style.left).toEqual('80px');
  });

  it(' refreshMaxSideMenuData() updates the side menu correctly ', function() {
    if (view.sideMenu && view.maxInput) {
      document.body.append(view.sideMenu, view.maxInput);
      view.refreshMaxSideMenuData(7);
      view.maxSliderValueOutput ? expect(view.maxSliderValueOutput.textContent).toEqual(' - 7') : false;
      expect(view.maxInput.value).toEqual('7');
      expect(view.maxInput.style.opacity).toEqual('1');
    };
  });

  it(' inputsPossibleRange() set the maximum and minimum values for the side menu inputs correctly ', function() {
    if(view.maxInput && view.minInput) {
      document.body.append(view.maxInput, view.minInput);
      view.inputsPossibleRange({'min': settings.min, 'max': settings.max}, view.minInput, view.maxInput);
      expect(view.minInput.getAttribute('max')).toEqual('10');
      expect(view.minInput.getAttribute('min')).toEqual('-10');
      expect(view.maxInput.getAttribute('max')).toEqual('10');
    };
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
      expect(handelsLabel.minLabel).toEqual((<HTMLLabelElement>$('<label class="minSliderHandelLabel">')[0]))
    });

    it(' MaxLabel matches pattern ', function() {
      expect(handelsLabel.maxLabel).toEqual(<HTMLLabelElement>($('<label class="maxSliderHandelLabel">')[0]))
    });

    it(' getElements() returns elements ', function() {
      expect(handelsLabel.getElements()).toEqual({
        'min': $('<label class="minSliderHandelLabel">')[0], 
        'max': $('<label class="maxSliderHandelLabel">')[0]
      })
    });

    it(' displayController(ON) change display state of element depending on input ', function() {
      let toggleON = (<HTMLInputElement>$('<input type="checkbox" checked>')[0]);
      handelsLabel.displayController(toggleON, handelsLabel.minLabel, handelsLabel.maxLabel);
      expect(handelsLabel.minLabel.style.display == 'inline' && handelsLabel.maxLabel.style.display == 'inline').toBeTrue();
    });

    it(' displayController(OFF) change display state of element depending on input ', function() {
      let toggleON = (<HTMLInputElement>$('<input type="checkbox">')[0]);
      handelsLabel.displayController(toggleON, handelsLabel.minLabel, handelsLabel.maxLabel);
      expect(handelsLabel.minLabel.style.display == 'none' && handelsLabel.maxLabel.style.display == 'none').toBeTrue();
    });

    it(' centeringRelativeToHandles() centered MinLabel relatively MinHandel based on the width of the text', function() {
      let minLabel = handelsLabel.minLabel;
      let maxLabel = handelsLabel.maxLabel;
      handelsLabel.centeringRelativeToHandles(20, 10, 10, 30, minLabel, maxLabel)
      expect(minLabel.style.left).toEqual('5px');
    });

    it(' centeringRelativeToHandles() centered MaxLabel relatively MaxHandel based on the width of the text', function() {
      let minLabel = handelsLabel.minLabel;
      let maxLabel = handelsLabel.maxLabel;
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
      let toggle = (<HTMLInputElement>$('<input type="checkbox" checked>')[0]);
      handels.displayController(toggle, handels.maxHandel);
      expect(handels.maxHandel.style.display).toEqual('block');
    });

    it(' displayController(none) change display state of maxHandel ', function() {
      let toggle = (<HTMLInputElement>$('<input type="checkbox">')[0]);
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
      expect(selectedRange.interval).toEqual((<HTMLDivElement>$('<div class="mainInterval"></div>')[0]));
    });

    it(' getElements() returns elements ', function() {
      expect(selectedRange.getElements()).toEqual((<HTMLDivElement>$('<div class="mainInterval"></div>')[0]));
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
      expect(sliderRange.range).toEqual((<HTMLDivElement>$('<div class="sliderRange"></div>')[0]));
    });

    it(' getElements() returns elements ', function() {
      expect(sliderRange.getElements()).toEqual((<HTMLDivElement>$('<div class="sliderRange"></div>')[0]));
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
      expect(valueRange.minValue).toEqual((<HTMLParagraphElement>$('<p class="minSliderPoint">-10</p>')[0]));
    });

    it(' maxValue matches pattern ', function() {
      expect(valueRange.maxValue).toEqual((<HTMLParagraphElement>$('<p class="maxSliderPoint">10</p>')[0]));
    });

    it(' getElements() returns elements ', function() {
      let min = $('<p class="minSliderPoint">-10</p>')[0];
      let max = $('<p class="maxSliderPoint">10</p>')[0];
      expect(valueRange.getElements()).toEqual({min: min, max: max});
    });
  });

  describe(' SideMenu ', function() {
    let sideMenu: SideMenu;
    let customSliderMenuContainerPattern = (<HTMLDivElement>$('<div class="sliderMenuContainer"><p class="customSliderParagVal">Текущее занчение: <output class="sliderValue" id="minSliderValue"></output><output class="sliderValue" id="maxSliderValue"></output></p><p class="customSliderParag">Включить второй ползунок: </p><label class="customSliderToggle"><input class="maxSliderHandelToggle" id="maxSliderHandelToggle" type="checkbox"><span class="customToggleSliderBorder"></span></label><div class="customSliderInputs"><p class="customSliderParag">Изменить значение: </p><label class="customSliderInputlabel" for="customSliderMinInput">Min: </label><input class="customSliderMinInput" id="customSliderMinInput" type="number"><label class="customSliderInputlabel" for="customSliderMaxInput">Max: </label><input class="customSliderMaxInput" id="customSliderMaxInput" type="number"></div><div><p class="customSliderParag">Включить значения под ползунками: </p><label class="customSliderToggle"><input type="checkbox" class="showValueToggle" id="showValueToggle"><span class="customToggleSliderBorder"></span></label></div><div><p class="customSliderParag">Изменить плоскость: </p><label class="customSliderToggle"><input type="checkbox" class="planeToggle" id="planeToggle"><span class="customToggleSliderBorder"></span></label></div></div>')[0]);
    let handelTogglePattern = (<HTMLInputElement>$('<input class="maxSliderHandelToggle" id="maxSliderHandelToggle" type="checkbox">')[0]);
    let handelLabelTogglePattern = (<HTMLInputElement>$('<input type="checkbox" class="showValueToggle" id="showValueToggle">')[0]);
    let planeTogglePattern = (<HTMLInputElement>$('<input type="checkbox" class="planeToggle" id="planeToggle">')[0]);
    let minInputPattern = (<HTMLInputElement>$('<input class="customSliderMinInput" id="customSliderMinInput" type="number">')[0]);
    let maxInputPattern = (<HTMLInputElement>$('<input class="customSliderMaxInput" id="customSliderMaxInput" type="number">')[0]);

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
  });

  describe(' SliderMovement ', function() {

    let sliderMovement: SliderMovement;
    let minHandel:HTMLSpanElement = (<HTMLSpanElement>$('<span class="minSliderHandel" style="width: 20px; display: block;">')[0]);
    let maxHandel:HTMLSpanElement = (<HTMLSpanElement>$('<span class="maxSliderHandel" style="width: 20px; display: block;">')[0]);
    let minLabel: HTMLLabelElement = (<HTMLLabelElement>$('<label class="minSliderHandelLabel">')[0]);
    let maxLabel: HTMLLabelElement = (<HTMLLabelElement>$('<label class="maxSliderHandelLabel">')[0]);
    let sliderRange:HTMLDivElement = (<HTMLDivElement>$('<div class="sliderRange" style="width: 120px; position: absolute; left: 100px;"></div>')[0]);
    let planeToggle: HTMLInputElement = (<HTMLInputElement>$('<input type="checkbox" class="planeToggle" id="planeToggle">')[0]);
    let handelToggle: HTMLInputElement = (<HTMLInputElement>$('<input class="maxSliderHandelToggle" id="maxSliderHandelToggle" type="checkbox">')[0]);
    let interval:HTMLDivElement = (<HTMLDivElement>$('<div class="mainInterval"></div>')[0]);
    let container:HTMLDivElement = (<HTMLDivElement>$('<div></div>')[0]);
    let minValue: HTMLParagraphElement = (<HTMLParagraphElement>$('<p class="minSliderPoint"></p>')[0]);
    let maxValue: HTMLParagraphElement = (<HTMLParagraphElement>$('<p class="maxSliderPoint"></p>')[0]);

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

    it(' currentHandelsPositions matches pattern ', function() {
      expect(sliderMovement.currentHandelsPositions).toEqual({'min': {}, 'max': {}});
    });

    it(' startHandlersPositions () calculates the starting position for MinHandel correctly ', function() {
      document.body.append(sliderMovement.sliderRange, sliderMovement.min);

      sliderMovement.startHandlersPositions({'minimum': settings.min, 'min': modelData['current-min'] ? modelData['current-min']: '', 'max': modelData['current-max'] ? modelData['current-max'] : '', 'positions': `20`})
      expect(sliderMovement.currentHandelsPositions.min.min).toEqual('25');
    });

    it(' startHandlersPositions () calculates the starting position for MaxHandel correctly ', function() {
      document.body.append(sliderMovement.sliderRange, sliderMovement.min);

      sliderMovement.startHandlersPositions({'minimum': settings.min, 'min': modelData['current-min'] ? modelData['current-min'] : '', 'max': modelData['current-max'] ? modelData['current-max'] : '', 'positions': `20`})
      expect(sliderMovement.currentHandelsPositions.max.max).toEqual('75');
    });

    it(' minHandelListener() set the position to 30px relative to the scale', function() {
      sliderMovement.currentHandelsPositions.min.min = '0';
      sliderMovement.currentHandelsPositions.max.max = '100';
      document.body.append(sliderRange);
      sliderRange.append(minHandel);

      sliderMovement.minHandelListener({clientX: 0, clientY : 0} , {clientX: 30, clientY: 0} );

      expect(sliderMovement.currentHandelsPositions.min.min).toEqual('30');    
    });

    it(' minHandelListener() when a value goes outside the scale range with a negative value, the position will be equal to the minimum possible ', function() {
      sliderMovement.currentHandelsPositions.min.min = '0';
      sliderMovement.currentHandelsPositions.max.max = '100';
      document.body.append(sliderRange);
      sliderRange.append(minHandel);

      sliderMovement.minHandelListener( {clientX: 100, clientY: 0}, {clientX: 70, clientY: 0} );

      expect(sliderMovement.currentHandelsPositions.min.min).toEqual('0');    
    });

    it(' minHandelListener() when a value goes out of the scale range with a value greater than the maximum, the position is equal to the maximum possible ', function() {
      sliderMovement.currentHandelsPositions.min.min = '0';
      sliderMovement.currentHandelsPositions.max.max = '100';
      document.body.append(sliderRange);
      sliderRange.append(minHandel);

      sliderMovement.minHandelListener( {clientX: 100, clientY: 0}, {clientX: 250, clientY: 0} );

      expect(sliderMovement.currentHandelsPositions.min.min).toEqual('100');    
    });

    it(' minHandelListener() the second Handel prevents the first one from entering it ', function() {
      sliderMovement.currentHandelsPositions.min.min = '0';
      sliderMovement.currentHandelsPositions.max.max = '50';
      document.body.append(sliderRange, handelToggle);
      sliderRange.append(minHandel, maxHandel);
      handelToggle.checked = true;

      sliderMovement.minHandelListener( {clientX: 100, clientY: 0}, {clientX: 170, clientY: 0} );

      expect(sliderMovement.currentHandelsPositions.min.min).toEqual('30');

      handelToggle.checked = false;
    });

    it(' maxHandelListener() the second Handel cannot go beyond the slider ', function() {
      sliderMovement.currentHandelsPositions.min.min = '0';
      sliderMovement.currentHandelsPositions.max.max = '50';
      document.body.append(sliderRange, handelToggle);
      sliderRange.append(minHandel, maxHandel);
      handelToggle.checked = true;

      sliderMovement.maxHandelListener( {clientX: 100, clientY: 0}, {clientX: 270 , clientY: 0} );

      expect(sliderMovement.currentHandelsPositions.max.max).toEqual('100');

      handelToggle.checked = false;
    });

    it(' maxHandelListener() the first Handel does not skip the second ', function() {
      sliderMovement.currentHandelsPositions.min.min = '50';
      sliderMovement.currentHandelsPositions.max.max = '100';
      document.body.append(sliderRange, handelToggle);
      sliderRange.append(minHandel, maxHandel);
      handelToggle.checked = true;

      sliderMovement.maxHandelListener( {clientX: 100, clientY: 0}, {clientX: 120, clientY: 0} );

      expect(sliderMovement.currentHandelsPositions.max.max).toEqual('70');

      handelToggle.checked = false;
    });

    it(' changePlane() reassigns classes correctly ', function() {
      planeToggle.checked = true;
      sliderMovement.changePlane(planeToggle, container, minValue, maxValue);
      expect(minLabel).toHaveClass('minSliderHandelLabelVertical');
      expect(maxLabel).toHaveClass('maxSliderHandelLabelVertical');
      expect(minValue).toHaveClass('minSliderPointVertical');
      expect(maxValue).toHaveClass('maxSliderPointVertical');
      planeToggle.checked = false;
      sliderMovement.changePlane(planeToggle, container, minValue, maxValue);
      expect(minLabel).toHaveClass('minSliderHandelLabel');
      expect(maxLabel).toHaveClass('maxSliderHandelLabel');
      expect(minValue).toHaveClass('minSliderPoint');
      expect(maxValue).toHaveClass('maxSliderPoint');
   });

    it(' selectionOfPreparedValue() if target min ', function() {
      document.body.append(sliderRange, minHandel, interval);
      sliderMovement.selectionOfPreparedValue('min');
      expect(sliderMovement.currentHandelsPositions.min).toEqual({'min': '0', 'sliderWidth': `100`});
      expect(minHandel.style.left).toEqual('0px');
      expect(interval.style.left).toEqual('10px');
    });

    it(' selectionOfPreparedValue() if target max, double handel ', function() {
      document.body.append(sliderRange, maxHandel, minHandel, interval, handelToggle);
      handelToggle.checked = true;
      sliderMovement.selectionOfPreparedValue('max');
      expect(sliderMovement.currentHandelsPositions.max).toEqual({'max': `100`, 'sliderWidth': `100`});
      expect(maxHandel.style.left).toEqual('100px');
      expect(interval.style.right).toEqual('10px');
      handelToggle.checked = false;
    });

    it(' selectionOfPreparedValue() if target max, one handel ', function() {
      document.body.append(sliderRange, minHandel, interval, handelToggle);
      sliderMovement.selectionOfPreparedValue('max');
      expect(sliderMovement.currentHandelsPositions.min).toEqual({'min': `100`, 'sliderWidth': `100`});
      expect(minHandel.style.left).toEqual('100px');
      expect(interval.style.left).toEqual('110px');
    });
    
    it(' sideMenuInputsValuesValidationChecker() correctly calculates the position for Min when the second handel is Off', function() {
      document.body.append(sliderRange, minHandel, maxHandel, interval);
      sliderMovement.sideMenuInputsValuesValidationChecker('min', 0, 20, -10);
      expect(sliderMovement.currentHandelsPositions.min.min).toEqual('50');
      expect(minHandel.style.left).toEqual('50px');
      expect(interval.style.left).toEqual('60px');
      sliderMovement.sideMenuInputsValuesValidationChecker('min', -20, 20, -10);
      expect(sliderMovement.currentHandelsPositions.min.min).toEqual('0');
      sliderMovement.sideMenuInputsValuesValidationChecker('min', 20, 20, -10);
      expect(sliderMovement.currentHandelsPositions.min.min).toEqual('100');
    });

    it(' sideMenuInputsValuesValidationChecker() correctly calculates the position for Min when the second handel is On', function() {
      document.body.append(sliderRange, minHandel, maxHandel, interval);
      handelToggle.checked = true;
      sliderMovement.sideMenuInputsValuesValidationChecker('min', 0, 20, -10);
      expect(sliderMovement.currentHandelsPositions.min.min).toEqual('50');
      expect(minHandel.style.left).toEqual('50px');
      expect(interval.style.left).toEqual('60px');
      sliderMovement.sideMenuInputsValuesValidationChecker('min', -20, 20, -10);
      expect(sliderMovement.currentHandelsPositions.min.min).toEqual('0');
      sliderMovement.sideMenuInputsValuesValidationChecker('max', 5, 20, -10);
      sliderMovement.sideMenuInputsValuesValidationChecker('min', 10, 20, -10);
      expect(sliderMovement.currentHandelsPositions.min.min).toEqual('55');
      handelToggle.checked = false;
    });

    it(' sideMenuInputsValuesValidationChecker() correctly calculates the position for Max', function() {
      document.body.append(sliderRange, minHandel, maxHandel, interval);
      handelToggle.checked = true;
      sliderMovement.sideMenuInputsValuesValidationChecker('min', -5, 20, -10);
      sliderMovement.sideMenuInputsValuesValidationChecker('max', 5, 20, -10);
      expect(sliderMovement.currentHandelsPositions.max.max).toEqual('75');
      expect(maxHandel.style.left).toEqual('75px');
      expect(interval.style.right).toEqual('35px');
      sliderMovement.sideMenuInputsValuesValidationChecker('max', 30, 20, -10);
      expect(sliderMovement.currentHandelsPositions.max.max).toEqual('100');
      sliderMovement.sideMenuInputsValuesValidationChecker('max', -15, 20, -10);
      expect(sliderMovement.currentHandelsPositions.max.max).toEqual('45');
      handelToggle.checked = false;
    });

  });
});
