import { BasicModelSettings } from '../model/types';
import { Model } from '../model/Model';
import { Presenter } from './Presenter';
import { BasicViewSettings } from '../view/types';
import { View } from '../view/View';

describe('Presenter', () => {
  let presenter: Presenter;
  let view: View;
  let model: Model;
  const viewSettings: BasicViewSettings = {
    'side-menu': true,
    double: true,
    handlesValues: true,
    step: 10,
    valueScale: true,
    vertical: true,
    integer: true,
  };
  const viewTarget: HTMLDivElement = document.createElement('div');
  const modelSettings: BasicModelSettings = {
    min: '0',
    max: '100',
    from: '30',
    to: '70',
  };
  beforeEach(() => {
    model = new Model(modelSettings);
    view = new View(viewSettings, viewTarget);
    presenter = new Presenter(view, model);

    document.querySelector('body')?.append(view.slider.slider, view.handles.fromHandle, view.handles.toHandle);
    view.slider.slider.style.width = '120px';
    view.handles.fromHandle.style.width = '20px';
    view.handles.toHandle.style.width = '20px';

    presenter.initialize();
    view.prepareSliderForUse();
    view.bindEventListeners();
  });

  it('Presenter can be create', () => {
    expect(presenter).toBeTruthy();
  });

  it('needApplyValueFromScale() choose from value', () => {
    view.basicSettings.double = true;
    view.valuesScale[20].dispatchEvent(new Event('click'));
    expect(model.values.from).toEqual('20');
  });

  it('needApplyValueFromScale() choose to value', () => {
    view.basicSettings.double = true;
    view.valuesScale[80].dispatchEvent(new Event('click'));
    expect(model.values.to).toEqual('80');
  });

  it('needDataForScale() fill value scale with correct values', () => {
    view.dataRequestToModel.needDataForScale = { name: '', value: 'true' };
    expect(view.valuesScale.minValue.innerText).toEqual('0');
    expect(view.valuesScale[20].innerText).toEqual('20');
    expect(view.valuesScale[40].innerText).toEqual('40');
    expect(view.valuesScale[60].innerText).toEqual('60');
    expect(view.valuesScale[80].innerText).toEqual('80');
    expect(view.valuesScale.maxValue.innerText).toEqual('100');
  });

  it('needDataForStartPosition() set correct positions', () => {
    view.dataRequestToModel.needDataForStartPosition = { name: '', value: 'true' };
    expect(view.movement.positions.from).toEqual(30);
    expect(view.movement.positions.to).toEqual(70);
  });

  it('needStepWidth() set correct stepWidth', () => {
    view.basicSettings.step = 10;
    view.dataRequestToModel.needStepWidth = { name: '', value: 'true' };
    expect(view.movement.stepWidth).toEqual('10');
  });

  it('needApplyNewValue() apply new value for from correctly', () => {
    view.dataRequestToModel.needApplyNewValue = { name: 'from', value: '40' };
    expect(view.movement.positions.from).toEqual(40);
    expect(model.values.from).toEqual('40');
  });

  it('needApplyNewValue() apply new value for to correctly', () => {
    view.dataRequestToModel.needApplyNewValue = { name: 'to', value: '60' };
    expect(view.movement.positions.to).toEqual(60);
    expect(model.values.to).toEqual('60');
  });

  it('needApplyValueFromScale() apply value from scale correctly', () => {
    view.dataRequestToModel.needApplyValueFromScale = { name: '', value: '20' };
    expect(model.values.from).toEqual('20');
    view.dataRequestToModel.needApplyValueFromScale = { name: '', value: '40' };
    expect(model.values.from).toEqual('40');
    view.dataRequestToModel.needApplyValueFromScale = { name: '', value: '80' };
    expect(model.values.to).toEqual('80');
    view.dataRequestToModel.needApplyValueFromScale = { name: '', value: '60' };
    expect(model.values.to).toEqual('60');
  });
});
