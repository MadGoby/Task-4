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
  get from(): string {
    if (!this.fromPosition) return this.min;
    return this.fromPosition;
  },
  set from(value: string) {
    this.fromPosition = value;
  },
  get to(): string {
    if (!this.toPosition) return this.max;
    return this.toPosition;
  },
  set to(value: string) {
    this.toPosition = value;
  },
  integer: true,
};

export { gobyDefaults };
