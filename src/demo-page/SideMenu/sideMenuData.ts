import {
  SideMenuData,
} from './types';

const sideMenuData: SideMenuData = {
  elements: [
    {
      key: 'currentValuesWrapper',
      name: 'div',
      cssClasses: ['goby-slider__outputs'],
    },
    {
      key: 'currentValuesObjective',
      name: 'span',
      cssClasses: ['goby-slider__output-objective'],
      text: 'Текущее занчение:',
    },
    {
      key: 'fromOutput',
      name: 'output',
      cssClasses: ['goby-slider__output-value', 'goby-slider__output-value_type_from'],
    },
    {
      key: 'toOutput',
      name: 'output',
      cssClasses: ['goby-slider__output-value', 'goby-slider__output-value_type_to'],
    },
    {
      key: 'outputsWrapper',
      name: 'div',
      cssClasses: ['goby-slider__outputs-wrapper'],
    },
    {
      key: 'toWrapper',
      name: 'div',
      cssClasses: ['goby-slider__toggle-item'],
    },
    {
      key: 'doubleToggleWrapper',
      name: 'label',
      cssClasses: ['goby-slider__toggle-wrapper'],
    },
    {
      key: 'inputWrapper',
      name: 'div',
      cssClasses: ['goby-slider__inputs'],
    },
    {
      key: 'fromInputWrapper',
      name: 'label',
      cssClasses: ['goby-slider__input-wrapper'],
    },
    {
      key: 'fromInputDescription',
      name: 'span',
      cssClasses: ['goby-slider__input-description'],
      text: 'От:',
    },
    {
      key: 'stepInputWrapper',
      name: 'label',
      cssClasses: ['goby-slider__input-wrapper'],
    },
    {
      key: 'stepInputDescription',
      name: 'span',
      cssClasses: ['goby-slider__input-description'],
      text: 'Шаг:',
    },
    {
      key: 'minInputWrapper',
      name: 'label',
      cssClasses: ['goby-slider__input-wrapper'],
    },
    {
      key: 'minInputDescription',
      name: 'span',
      cssClasses: ['goby-slider__input-description'],
      text: 'Мин:',
    },
    {
      key: 'maxInputWrapper',
      name: 'label',
      cssClasses: ['goby-slider__input-wrapper'],
    },
    {
      key: 'maxInputDescription',
      name: 'span',
      cssClasses: ['goby-slider__input-description'],
      text: 'Макс:',
    },
    {
      key: 'toInputWrapper',
      name: 'label',
      cssClasses: ['goby-slider__input-wrapper'],
    },
    {
      key: 'toInputDescription',
      name: 'span',
      cssClasses: ['goby-slider__input-description'],
      text: 'До:',
    },
    {
      key: 'handlesValuesWrapper',
      name: 'div',
      cssClasses: ['goby-slider__toggle-item'],
    },
    {
      key: 'stepWrapper',
      name: 'div',
      cssClasses: ['goby-slider__toggle-item'],
    },
    {
      key: 'valueScaleWrapper',
      name: 'div',
      cssClasses: ['goby-slider__toggle-item'],
    },
    {
      key: 'verticalWrapper',
      name: 'div',
      cssClasses: ['goby-slider__toggle-item'],
    },
    {
      key: 'integerWrapper',
      name: 'div',
      cssClasses: ['goby-slider__toggle-item'],
    },
    {
      key: 'inputObjective',
      name: 'span',
      cssClasses: ['goby-slider__item-objective'],
      text: 'Изменить значение: ',
    },
    {
      key: 'fromInput',
      name: 'input',
      cssClasses: ['goby-slider__input'],
      attr: { name: 'type', value: 'number' },
    },
    {
      key: 'toInput',
      name: 'input',
      cssClasses: ['goby-slider__input'],
      attr: { name: 'type', value: 'number' },
    },
    {
      key: 'stepInput',
      name: 'input',
      cssClasses: ['goby-slider__input'],
      attr: { name: 'type', value: 'number' },
    },
    {
      key: 'minInput',
      name: 'input',
      cssClasses: ['goby-slider__input'],
      attr: { name: 'type', value: 'number' },
    },
    {
      key: 'maxInput',
      name: 'input',
      cssClasses: ['goby-slider__input'],
      attr: { name: 'type', value: 'number' },
    },
    {
      key: 'doubleToggleObjective',
      name: 'span',
      cssClasses: ['goby-slider__toggle-description'],
      text: 'Включить второй ползунок: ',
    },
    {
      key: 'stepToggleObjective',
      name: 'span',
      cssClasses: ['goby-slider__toggle-description'],
      text: 'Включить шаг: ',
    },
    {
      key: 'doubleToggle',
      name: 'input',
      cssClasses: ['goby-slider__toggle'],
      attr: { name: 'type', value: 'checkbox' },
    },
    {
      key: 'stepToggle',
      name: 'input',
      cssClasses: ['goby-slider__toggle'],
      attr: { name: 'type', value: 'checkbox' },
    },
    {
      key: 'doubleToggleBorder',
      name: 'span',
      cssClasses: ['goby-slider__toggle-border'],
    },
    {
      key: 'handlesValuesToggleBorder',
      name: 'span',
      cssClasses: ['goby-slider__toggle-border'],
    },
    {
      key: 'valueScaleToggleBorder',
      name: 'span',
      cssClasses: ['goby-slider__toggle-border'],
    },
    {
      key: 'integerToggleBorder',
      name: 'span',
      cssClasses: ['goby-slider__toggle-border'],
    },
    {
      key: 'verticalToggle',
      name: 'input',
      cssClasses: ['goby-slider__toggle'],
      attr: { name: 'type', value: 'checkbox' },
    },
    {
      key: 'verticalToggleBorder',
      name: 'span',
      cssClasses: ['goby-slider__toggle-border'],
    },
    {
      key: 'stepToggleBorder',
      name: 'span',
      cssClasses: ['goby-slider__toggle-border'],
    },
    {
      key: 'handlesValuesObjective',
      name: 'span',
      cssClasses: ['goby-slider__toggle-description'],
      text: 'Включить значения под ползунками: ',
    },
    {
      key: 'valueScaleObjective',
      name: 'span',
      cssClasses: ['goby-slider__toggle-description'],
      text: 'Включить шкалу значений: ',
    },
    {
      key: 'verticalObjective',
      name: 'span',
      cssClasses: ['goby-slider__toggle-description'],
      text: 'Изменить плоскость: ',
    },
    {
      key: 'integerObjective',
      name: 'span',
      cssClasses: ['goby-slider__toggle-description'],
      text: 'Только целые числа: ',
    },
    {
      key: 'sideMenuContainer',
      name: 'div',
      cssClasses: ['goby-slider__side-menu'],
    },
  ],
  appendList: {
    currentValuesWrapper: ['currentValuesObjective', 'outputsWrapper'],
    outputsWrapper: ['fromOutput', 'toOutput'],
    fromInputWrapper: ['fromInputDescription', 'fromInput'],
    toInputWrapper: ['toInputDescription', 'toInput'],
    stepInputWrapper: ['stepInputDescription', 'stepInput'],
    minInputWrapper: ['minInputDescription', 'minInput'],
    maxInputWrapper: ['maxInputDescription', 'maxInput'],
    inputWrapper: ['inputObjective', 'fromInputWrapper', 'toInputWrapper', 'stepInputWrapper',
      'minInputWrapper', 'maxInputWrapper'],
    doubleToggleWrapper: ['doubleToggle', 'doubleToggleObjective', 'doubleToggleBorder'],
    toWrapper: ['doubleToggleWrapper'],
    stepToggleWrapper: ['stepToggle', 'stepToggleObjective', 'stepToggleBorder'],
    stepWrapper: ['stepToggleWrapper'],
    handlesValuesToggleWrapper: ['handlesValuesToggle', 'handlesValuesObjective', 'handlesValuesToggleBorder'],
    handlesValuesWrapper: ['handlesValuesToggleWrapper'],
    valueScaleToggleWrapper: ['valueScaleToggle', 'valueScaleObjective', 'valueScaleToggleBorder'],
    valueScaleWrapper: ['valueScaleToggleWrapper'],
    verticalToggleWrapper: ['verticalToggle', 'verticalObjective', 'verticalToggleBorder'],
    verticalWrapper: ['verticalToggleWrapper'],
    integerToggleWrapper: ['integerToggle', 'integerObjective', 'integerToggleBorder'],
    integerWrapper: ['integerToggleWrapper'],
    sideMenuContainer: ['currentValuesWrapper', 'inputWrapper', 'stepWrapper', 'toWrapper', 'handlesValuesWrapper',
      'valueScaleWrapper', 'verticalWrapper', 'integerWrapper'],
  },
  cloneList: {
    doubleToggle: ['handlesValuesToggle', 'valueScaleToggle', 'integerToggle'],
    doubleToggleWrapper: ['handlesValuesToggleWrapper', 'valueScaleToggleWrapper',
      'verticalToggleWrapper', 'integerToggleWrapper', 'stepToggleWrapper'],
  },
};

export {
  sideMenuData,
};
