import { SliderOptions } from '../types';

import { gobyDefaults } from '../common/defaultSettings';

class Validator {
  public readonly options: SliderOptions;

  private readonly errorTemplate = 'Некорректный тип данных! Будет задано значение по умолчанию:';

  constructor(options: SliderOptions) {
    this.options = options;
    this.validateMinValue();
    this.validateMaxValue();
    this.validateFromValue();
    this.validateToValue();
    this.validateStepValue();
  }

  private static checkIsUncorrectedType(value: number | undefined) {
    return (typeof value !== 'number' && typeof value !== 'undefined')
      || Number.isNaN(value);
  }

  private validateMinValue() {
    try {
      if (Validator.checkIsUncorrectedType(this.options.min)) {
        this.options.min = gobyDefaults.min;
        throw new SyntaxError(`${this.errorTemplate} ${gobyDefaults.min}`);
      }
    } catch (e) {
      console.log(e);
    }
  }

  private validateMaxValue() {
    try {
      if (Validator.checkIsUncorrectedType(this.options.max)) {
        this.options.max = gobyDefaults.max;
        throw new SyntaxError(`${this.errorTemplate} ${gobyDefaults.max}`);
      }
    } catch (e) {
      console.log(e);
    }
  }

  private validateFromValue() {
    try {
      if (Validator.checkIsUncorrectedType(this.options.from)) {
        this.options.from = gobyDefaults.min;
        throw new SyntaxError(`${this.errorTemplate} ${gobyDefaults.min}`);
      }
    } catch (e) {
      console.log(e);
    }
  }

  private validateToValue() {
    try {
      if (Validator.checkIsUncorrectedType(this.options.to)) {
        this.options.to = gobyDefaults.max;
        throw new SyntaxError(`${this.errorTemplate} ${gobyDefaults.max}`);
      }
    } catch (e) {
      console.log(e);
    }
  }

  private validateStepValue() {
    try {
      if (Validator.checkIsUncorrectedType(this.options.step)) {
        const stepRatio: number = 40;
        this.options.step = (this.options.max - this.options.min) / stepRatio;
        throw new SyntaxError(`${this.errorTemplate} ${this.options.step}`);
      }
    } catch (e) {
      console.log(e);
    }
  }
}

export { Validator };
