import { BasicViewSettings } from './types';
import { View } from './View';

require('jasmine-jquery');

describe('View', () => {
  let view: View;
  const settings: BasicViewSettings = {
    isDouble: true,
    isHandlesValues: true,
    isStep: true,
    isValueScale: true,
    isVertical: true,
    isInteger: true,
  };
  const target: HTMLDivElement = document.createElement('div');

  beforeEach(() => {
    view = new View(() => settings, target);
  });

  it('View can be create', () => {
    expect(view).toBeTruthy();
  });

  it('updateSliderView() call plane changers to make vertical', () => {
    view.updateView();
    expect(view.slider.slider).toHaveClass('goby-slider__body_state_vertical');
    expect(view.handles.fromValue).toHaveClass('goby-slider__handle-value_state_vertical');
    expect(view.handles.toValue).toHaveClass('goby-slider__handle-value_state_vertical');
    expect(view.valuesScale.minValue).toHaveClass('goby-slider__value_state_vertical');
  });

  it('refreshValueScale() work correctly', () => {
    view.refreshValueScale({
      min: '0', max: '10', 20: '2', 40: '4', 60: '6', 80: '8',
    });
    expect(view.valuesScale.minValue).toHaveText('0');
    expect(view.valuesScale.twentyPercentValue).toHaveText('2');
    expect(view.valuesScale.fortyPercentValue).toHaveText('4');
    expect(view.valuesScale.sixtyPercentValue).toHaveText('6');
    expect(view.valuesScale.eightyPercentValue).toHaveText('8');
    expect(view.valuesScale.maxValue).toHaveText('10');
  });

  it('refreshHandleValues() refresh from correctly', () => {
    document.body.append(view.slider.slider);
    view.slider.slider.style.width = '100px';

    view.refreshHandleValues({
      value: 4,
      minValue: 0,
      target: 'from',
      isToFixed: true,
      totalValues: 10,
    });

    expect(view.handles.fromHandle.style.left).toEqual('40px');
  });
});
