import { ValuesScale } from './ValuesScale';

describe('ValueScale', () => {
  let valuesScale: ValuesScale;

  beforeEach(() => {
    valuesScale = new ValuesScale();
  });

  it('ValueScale can be create', () => {
    expect(valuesScale).toBeTruthy();
  });

  it('refreshValueScale() refresh scale correctly', () => {
    valuesScale.refreshValueScale({
      min: '0', max: '100', 20: '20', 40: '40', 60: '60', 80: '80',
    });
    expect(valuesScale.minValue.innerText).toEqual('0');
    expect(valuesScale.maxValue.innerText).toEqual('100');
    expect(valuesScale.twentyPercentValue.innerText).toEqual('20');
    expect(valuesScale.fortyPercentValue.innerText).toEqual('40');
    expect(valuesScale.sixtyPercentValue.innerText).toEqual('60');
    expect(valuesScale.eightyPercentValue.innerText).toEqual('80');
  });

  it('centersValues() calculate correctly', () => {
    valuesScale.centerValues(100, 20);
    expect(valuesScale.minValue.style.left).toEqual('10px');
    expect(valuesScale.maxValue.style.right).toEqual('10px');
    expect(valuesScale.twentyPercentValue.style.left).toEqual('30px');
    expect(valuesScale.fortyPercentValue.style.left).toEqual('50px');
    expect(valuesScale.sixtyPercentValue.style.left).toEqual('70px');
    expect(valuesScale.eightyPercentValue.style.left).toEqual('90px');
  });

  it('changePlane() operates the plane function correctly', () => {
    valuesScale.changePlane(true);
    expect(valuesScale.minValue).toHaveClass('goby-slider__value_state_vertical');
    expect(valuesScale.maxValue).toHaveClass('goby-slider__value_state_vertical');
    expect(valuesScale.twentyPercentValue).toHaveClass('goby-slider__value_state_vertical');
    expect(valuesScale.fortyPercentValue).toHaveClass('goby-slider__value_state_vertical');
    expect(valuesScale.sixtyPercentValue).toHaveClass('goby-slider__value_state_vertical');
    expect(valuesScale.eightyPercentValue).toHaveClass('goby-slider__value_state_vertical');
    valuesScale.changePlane(false);
    expect(valuesScale.minValue).not.toHaveClass('goby-slider__value_state_vertical');
    expect(valuesScale.maxValue).not.toHaveClass('goby-slider__value_state_vertical');
    expect(valuesScale.twentyPercentValue).not.toHaveClass('goby-slider__value_state_vertical');
    expect(valuesScale.fortyPercentValue).not.toHaveClass('goby-slider__value_state_vertical');
    expect(valuesScale.sixtyPercentValue).not.toHaveClass('goby-slider__value_state_vertical');
    expect(valuesScale.eightyPercentValue).not.toHaveClass('goby-slider__value_state_vertical');
  });

  it('hideValueScale() operates the display function correctly', () => {
    valuesScale.changeValueScaleDisplay(false);
    expect(valuesScale.minValue.style.display).toEqual('none');
    expect(valuesScale.maxValue.style.display).toEqual('none');
    expect(valuesScale.twentyPercentValue.style.display).toEqual('none');
    expect(valuesScale.fortyPercentValue.style.display).toEqual('none');
    expect(valuesScale.sixtyPercentValue.style.display).toEqual('none');
    expect(valuesScale.eightyPercentValue.style.display).toEqual('none');
    valuesScale.changeValueScaleDisplay(true);
    expect(valuesScale.minValue.style.display).toEqual('inline-block');
    expect(valuesScale.maxValue.style.display).toEqual('inline-block');
    expect(valuesScale.twentyPercentValue.style.display).toEqual('inline-block');
    expect(valuesScale.fortyPercentValue.style.display).toEqual('inline-block');
    expect(valuesScale.sixtyPercentValue.style.display).toEqual('inline-block');
    expect(valuesScale.eightyPercentValue.style.display).toEqual('inline-block');
  });
});
