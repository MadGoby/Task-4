import { DataForValueScale } from './types';
import { Model } from './Model';
import { SliderOptions } from '../types';
import {Slider} from "src/plugin/View/Slider/Slider";

describe('Model', () => {
  let model: Model;

  const sliderOptions: SliderOptions = {
    min: 0,
    max: 10,
    isDouble: true,
    isHandlesValues: true,
    isVertical: false,
    isStep: false,
    isValueScale: true,
    isInteger: true,
  };

  beforeEach(() => {
    model = new Model(() => sliderOptions);
  });

  it('model can be create', () => {
    expect(model).toBeTruthy();
  });

  it('updateValues() correct update values', () => {
    expect(model.values.from).toEqual(0);
    expect(model.values.to).toEqual(10);

    sliderOptions.from = 3;
    sliderOptions.to = 7;

    model.updateValues();

    expect(model.values.from).toEqual(3);
    expect(model.values.to).toEqual(7);
  });

  it('getTotalValues() pass correct total value', () => {
    expect(model.getTotalValues()).toEqual(10);
  });

  it('writeValueFromPosition() calculate from position', () => {
    model.writeValueFromPosition({
      target: 'from',
      position: 30,
      isDouble: false,
      sliderWidth: 100,
    });

    expect(model.values.from).toEqual(3);
  });

  it('writeValueFromPosition() calculate to position', () => {
    model.writeValueFromPosition({
      target: 'to',
      position: 70,
      isDouble: true,
      sliderWidth: 100,
    });

    expect(model.values.to).toEqual(7);
  });

  it('writeValueFromPosition() from less then min', () => {
    model.writeValueFromPosition({
      target: 'from',
      position: -10,
      isDouble: true,
      sliderWidth: 100,
    });

    expect(model.values.from).toEqual(model.values.min);
  });

  it('writeValueFromPosition() to bigger then max', () => {
    model.writeValueFromPosition({
      target: 'to',
      position: 110,
      isDouble: true,
      sliderWidth: 100,
    });

    expect(model.values.to).toEqual(model.values.max);
  });

  it('writeValueFromPosition() correct when double', () => {
    model.values.to = 7;
    model.writeValueFromPosition({
      target: 'from',
      position: 80,
      isDouble: true,
      sliderWidth: 100,
    });

    expect(model.values.from).toEqual(model.values.to);
    model.values.from = 3;

    model.writeValueFromPosition({
      target: 'to',
      position: 20,
      isDouble: true,
      sliderWidth: 100,
    });

    expect(model.values.to).toEqual(model.values.from);
  });

  it('writeValueFromPosition() step if step not passed', () => {
    model.values.step = 2;
    sliderOptions.isStep = true;

    model.writeValueFromPosition({
      target: 'from',
      position: 10,
      isDouble: false,
      sliderWidth: 100,
    });

    expect(model.values.from).toEqual(2);
  });

  it('writeValueFromPosition() step if passed', () => {
    model.values.step = 2;
    sliderOptions.isStep = true;

    model.writeValueFromPosition({
      target: 'from',
      position: 25,
      isDouble: false,
      sliderWidth: 100,
    });

    expect(model.values.from).toEqual(2);
  });

  it('determineValueTarget() choose value correctly', () => {
    model.writeValueFromPosition({
      target: 'unspecified',
      position: 35,
      isDouble: false,
      sliderWidth: 100,
    });

    expect(model.values.from).toEqual(3.5);
  });

  it('determineValueTarget() choose from when from equal to and new value is less', () => {
    model.values.from = 5;
    model.values.to = 5;

    model.writeValueFromPosition({
      target: 'unspecified',
      position: 35,
      isDouble: false,
      sliderWidth: 100,
    });

    expect(model.values.from).toEqual(3.5);
  });

  it('determineValueTarget() choose to when from equal to and new value is bigger', () => {
    model.values.from = 5;
    model.values.to = 5;

    model.writeValueFromPosition({
      target: 'unspecified',
      position: 75,
      isDouble: false,
      sliderWidth: 100,
    });

    expect(model.values.to).toEqual(7.5);
  });

  it('calculateDataForValueScale() calculate correct valueScale data', () => {
    const result: DataForValueScale = model.calculateDataForValueScale();

    expect(result).toEqual({
      min: '0',
      max: '10',
      20: '2',
      40: '4',
      60: '6',
      80: '8',
    });
  });
});
