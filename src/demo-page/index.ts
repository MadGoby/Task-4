import './index.scss';
import '../plugin/slider.scss';
import { UserSliderOptions } from '../plugin/types';
import { SideMenu } from './SideMenu/SideMenu';

const sliderSettings: Array<{ containerElement: HTMLElement, sliderOptions: UserSliderOptions }> = [
  {
    containerElement: document.querySelector('.js-slider-wrapper_number_1')!,
    sliderOptions: {
      min: -100,
      double: true,
      handlesValues: true,
      step: 5,
      integer: false,
      from: -100,
      onChange(data) {
        console.log(data);
      },
    },
  }, {
    containerElement: document.querySelector('.js-slider-wrapper_number_2')!,
    sliderOptions: {
      min: -10000,
      max: 10000,
      double: true,
      handlesValues: true,
      vertical: true,
      from: -5000,
      to: 5000,
      integer: false,
    },
  }, {
    containerElement: document.querySelector('.js-slider-wrapper_number_3')!,
    sliderOptions: {
      min: 0,
      max: 10,
      from: 5,
    },
  }, {
    containerElement: document.querySelector('.js-slider-wrapper_number_4')!,
    sliderOptions: {
      min: 0,
      max: 1000,
      valueScale: false,
      integer: false,
      from: 500,
    },
  }, {
    containerElement: document.querySelector('.js-slider-wrapper_number_5')!,
    sliderOptions: {
      min: 0,
      max: 1000,
      double: true,
      handlesValues: true,
      step: 10,
      integer: false,
      from: 0,
      to: 1000,
    },
  },
];

sliderSettings.forEach((settings: { containerElement: HTMLElement, sliderOptions: UserSliderOptions }) => {
  const { containerElement, sliderOptions } = settings;
  const container: JQuery<HTMLElement> = $(containerElement);

  container.gobySlider(sliderOptions);
  new SideMenu().appendToDom(container);
});
