import { ValuesScale } from '../../src/components/view/components/valuesScale/valuesScale';

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
    expect(valuesScale[20].innerText).toEqual('20');
    expect(valuesScale[40].innerText).toEqual('40');
    expect(valuesScale[60].innerText).toEqual('60');
    expect(valuesScale[80].innerText).toEqual('80');
  });

  it('centersValues() calculate correctly', () => {
    valuesScale.centersValues(100, 20);
    expect(valuesScale.minValue.style.left).toEqual('10px');
    expect(valuesScale.maxValue.style.right).toEqual('10px');
    expect(valuesScale[20].style.left).toEqual('30px');
    expect(valuesScale[40].style.left).toEqual('50px');
    expect(valuesScale[60].style.left).toEqual('70px');
    expect(valuesScale[80].style.left).toEqual('90px');
  });

  it('changePlane() operates the plane function correctly', () => {
    valuesScale.changePlane(true);
    expect(valuesScale.minValue).toHaveClass('cs-slider__value_vertical');
    expect(valuesScale.maxValue).toHaveClass('cs-slider__value_vertical');
    expect(valuesScale[20]).toHaveClass('cs-slider__value_vertical');
    expect(valuesScale[40]).toHaveClass('cs-slider__value_vertical');
    expect(valuesScale[60]).toHaveClass('cs-slider__value_vertical');
    expect(valuesScale[80]).toHaveClass('cs-slider__value_vertical');
    valuesScale.changePlane(false);
    expect(valuesScale.minValue).not.toHaveClass('cs-slider__value_vertical');
    expect(valuesScale.maxValue).not.toHaveClass('cs-slider__value_vertical');
    expect(valuesScale[20]).not.toHaveClass('cs-slider__value_vertical');
    expect(valuesScale[40]).not.toHaveClass('cs-slider__value_vertical');
    expect(valuesScale[60]).not.toHaveClass('cs-slider__value_vertical');
    expect(valuesScale[80]).not.toHaveClass('cs-slider__value_vertical');
  });

  it('hideValueScale() operates the display function correctly', () => {
    valuesScale.hideValueScale(false);
    expect(valuesScale.minValue.style.display).toEqual('none');
    expect(valuesScale.maxValue.style.display).toEqual('none');
    expect(valuesScale[20].style.display).toEqual('none');
    expect(valuesScale[40].style.display).toEqual('none');
    expect(valuesScale[60].style.display).toEqual('none');
    expect(valuesScale[80].style.display).toEqual('none');
    valuesScale.hideValueScale(true);
    expect(valuesScale.minValue.style.display).toEqual('inline-block');
    expect(valuesScale.maxValue.style.display).toEqual('inline-block');
    expect(valuesScale[20].style.display).toEqual('inline-block');
    expect(valuesScale[40].style.display).toEqual('inline-block');
    expect(valuesScale[60].style.display).toEqual('inline-block');
    expect(valuesScale[80].style.display).toEqual('inline-block');
  });
});
