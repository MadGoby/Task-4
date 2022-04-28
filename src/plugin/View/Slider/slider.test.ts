import { Handles } from '../Handles/Handles';
import { SelectedInterval } from '../SelectedInterval/SelectedInterval';
import { SliderAssemblerSettings } from './types';
import { Slider } from './Slider';
import { ValuesScale } from '../ValuesScale/ValuesScale';
import { DataRequestToModel } from '../types';

describe('Slider', () => {
  let slider: Slider;
  const requests: DataRequestToModel = {
    needStepWidth: { value: '', name: '' },
    needApplyNewValue: { value: '', name: '' },
    needApplyValueFromScale: { value: '', name: '' },
    needChangeSliderValuesRange: { value: '', name: '' },
    needDataForScale: { value: '', name: '' },
    needDataForStartPosition: { value: '', name: '' },
  };

  beforeEach(() => {
    slider = new Slider();
  });

  it('Slider can be create', () => {
    expect(slider).toBeTruthy();
  });

  it('collectSlider() can collect elements', () => {
    const settings: SliderAssemblerSettings = {
      from: new Handles().fromHandle,
      to: new Handles().toHandle,
      interval: new SelectedInterval().interval,
      valueScale: new ValuesScale(),
    };
    slider.initializeSliderElements(settings);
    expect(slider.slider).toBeTruthy();
  });

  it('changePlane() operates the display function correctly', () => {
    slider.changePlane({
      requests,
      isStep: false,
      isVertical: true,
    });
    expect(slider.slider).toHaveClass('goby-slider_state_vertical');

    slider.changePlane({
      requests,
      isStep: false,
      isVertical: false,
    });
    expect(slider.slider).not.toHaveClass('goby-slider_state_vertical');
  });
});
