import { StepInfoFromModel, DataForValueScale } from './types';
import { Model } from './Model';
import { DataForAdjustPosition } from '../view/handles/types';

describe('Model', () => {
  let model: Model;

  beforeEach(() => {
    model = new Model({
      min: '0',
      max: '10',
      from: '3',
      to: '7',
    });
  });

  it('model can be create', () => {
    expect(model).toBeTruthy();
  });

  it('calculateValuesByPosition() calculate correct for from', () => {
    model.calculateValuesByPosition({ target: 'from', position: '50', sliderWidth: 100 });
    expect(model.values.from).toEqual('5');
  });

  it('calculateValuesByPosition() calculate correct for to', () => {
    model.calculateValuesByPosition({ target: 'to', position: '50', sliderWidth: 100 });
    expect(model.values.to).toEqual('5');
  });

  it('calculateDataForValueScale() return correct value scale', () => {
    const result:DataForValueScale = model.calculateDataForValueScale();
    expect(result).toEqual({
      min: '0', max: '10', 20: '2', 40: '4', 60: '6', 80: '8',
    });
  });

  it('assignValueFromScale() choose from handel and record result to Model', () => {
    model.assignValueFromScale('2', true);
    expect(model.values.from).toEqual('2');
  });

  it('assignValueFromScale() choose from handel and return correct settings', () => {
    const result: DataForAdjustPosition = model.assignValueFromScale('2', true);
    expect(result).toEqual({
      target: 'from', value: '2', totalValues: 10, minValue: '0',
    });
  });

  it('assignValueFromScale() choose to handel and record result to Model', () => {
    model.assignValueFromScale('8', true);
    expect(model.values.to).toEqual('8');
  });

  it('assignValueFromScale() choose to handel and return correct settings', () => {
    const result: DataForAdjustPosition = model.assignValueFromScale('8', true);
    expect(result).toEqual({
      target: 'to', value: '8', totalValues: 10, minValue: '0',
    });
  });

  it('calculateStepWidth() calculate correct step width with correct step', () => {
    const result: StepInfoFromModel = model.calculateStepWidth({
      step: 2,
      sliderWidth: 120,
      handleWidth: 20,
    });
    expect(result).toEqual({ stepWidth: '20', step: 2 });
  });

  it('calculateStepWidth() calculate correct step width with step less that minimum', () => {
    const result: StepInfoFromModel = model.calculateStepWidth({
      step: -1,
      sliderWidth: 120,
      handleWidth: 20,
    });
    expect(result).toEqual({ stepWidth: '0.1', step: 0.01 });
  });

  it('prepareInputValueForRecord() allow correct from value and return correct settings', () => {
    const result: DataForAdjustPosition = model.prepareInputValueForRecord({
      name: 'from',
      value: '2',
      isDouble: false,
      positions: { from: 30, to: 70 },
      handleWidth: 20,
      sliderWidth: 120,
    });

    expect(model.values.from).toEqual('2');
    expect(result).toEqual({
      target: 'from', value: '2', totalValues: 10, minValue: '0',
    });
  });

  it('prepareInputValueForRecord() corrects from value less than min and return correct settings', () => {
    const result: DataForAdjustPosition = model.prepareInputValueForRecord({
      name: 'from',
      value: '-5',
      isDouble: false,
      positions: { from: 30, to: 70 },
      handleWidth: 20,
      sliderWidth: 120,
    });

    expect(model.values.from).toEqual('0');
    expect(result).toEqual({
      target: 'from', value: '0', totalValues: 10, minValue: '0',
    });
  });

  it('prepareInputValueForRecord() corrects from value bigger than max and return correct settings', () => {
    const result: DataForAdjustPosition = model.prepareInputValueForRecord({
      name: 'from',
      value: '15',
      isDouble: false,
      positions: { from: 30, to: 70 },
      handleWidth: 20,
      sliderWidth: 120,
    });

    expect(model.values.from).toEqual('10');
    expect(result).toEqual({
      target: 'from', value: '10', totalValues: 10, minValue: '0',
    });
  });

  it('prepareInputValueForRecord() corrects from value when it bigger than to and return correct settings', () => {
    const result: DataForAdjustPosition = model.prepareInputValueForRecord({
      name: 'from',
      value: '15',
      isDouble: true,
      positions: { from: 30, to: 70 },
      handleWidth: 20,
      sliderWidth: 120,
    });

    expect(model.values.from).toEqual('5');
    expect(result).toEqual({
      target: 'from', value: '5', totalValues: 10, minValue: '0',
    });
  });

  it('prepareInputValueForRecord() corrects to value when it less than to and return correct settings', () => {
    const result: DataForAdjustPosition = model.prepareInputValueForRecord({
      name: 'to',
      value: '0',
      isDouble: true,
      positions: { from: 30, to: 70 },
      handleWidth: 20,
      sliderWidth: 120,
    });

    expect(model.values.to).toEqual('5');
    expect(result).toEqual({
      target: 'to', value: '5', totalValues: 10, minValue: '0',
    });
  });

  it('truncatesNumbersAfterDot() cut numbers correctly', () => {
    let result: string = Model.truncatesNumbersAfterDot(2.1222222);
    expect(result).toEqual('2.12');

    result = Model.truncatesNumbersAfterDot(2.1011111);
    expect(result).toEqual('2.1');

    result = Model.truncatesNumbersAfterDot(2.0000001);
    expect(result).toEqual('2');
  });

  it('changeSliderValuesRange() record value bigger then max correctly', () => {
    model.changeSliderValuesRange({ value: '11', name: 'min' });
    expect(model.values.min).toEqual('9');
  });

  it('changeSliderValuesRange() record value smaller then min correctly', () => {
    model.changeSliderValuesRange({ value: '-1', name: 'max' });
    expect(model.values.max).toEqual('1');
  });
});
