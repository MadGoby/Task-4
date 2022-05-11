import { Handles } from '../Handles/Handles';
import { SelectedInterval } from '../SelectedInterval/SelectedInterval';
import { SliderAssemblerSettings } from './types';
import { Slider } from './Slider';
import { ValuesScale } from '../ValuesScale/ValuesScale';
import { UpdatePositionsData } from '../types';

describe('Slider', () => {
  let slider: Slider;

  beforeEach(() => {
    slider = new Slider();
  });

  it('Slider can be create', () => {
    expect(slider).toBeTruthy();
  });

  it('createHTMLElements() create elements', () => {
    const settings: SliderAssemblerSettings = {
      from: new Handles().fromHandle,
      to: new Handles().toHandle,
      interval: new SelectedInterval().interval,
      valueScale: new ValuesScale({ passNewValue: (data: UpdatePositionsData) => data }),
    };
    slider.initializeSliderElements(settings);
    expect(slider.slider).toBeTruthy();
  });

  it('changePlane() operates the display function correctly', () => {
    slider.changePlane(true);
    expect(slider.slider).toHaveClass('goby-slider__body_state_vertical');
    expect(slider.sliderWrapper).toHaveClass('goby-slider__slider_state_vertical');

    slider.changePlane(false);
    expect(slider.slider).not.toHaveClass('goby-slider__body_state_vertical');
    expect(slider.sliderWrapper).not.toHaveClass('goby-slider__slider_state_vertical');
  });
});
