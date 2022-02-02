import { SliderOptions } from '../plugin/types';

const gobyDefaults: SliderOptions = {
  'side-menu': true,
  min: '0',
  max: '100',
  double: false,
  handlesValues: false,
  vertical: false,
  step: false,
  valueScale: true,
  from: '0',
  to: '100',
  integer: true,
};

function passDefaultSettings(options: SliderOptions): SliderOptions {
  if (!options.from) options.from = options.min;
  if (!options.to) options.to = options.max;

  return $.extend({}, gobyDefaults, options);
}

export { passDefaultSettings };
