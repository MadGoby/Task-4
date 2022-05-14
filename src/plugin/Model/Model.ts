import {
  BasicModelSettings,
  CalculationData,
  DataForRefreshingModel,
  DataForValueScale,
  UnspecifiedValueTarget, ValueData,
  ValueTarget,
} from './types';
import { SliderOptions } from '../types';

class Model {
  public values: BasicModelSettings;

  private readonly getOptions: () => SliderOptions;

  constructor(getOptions: () => SliderOptions) {
    this.getOptions = getOptions;
    const options: SliderOptions = this.getOptions();

    const from: number = options.from ? options.from : options.min;
    const to: number = options.to ? options.to : options.max;
    this.getOptions().from = from;
    this.getOptions().to = to;

    this.values = {
      min: Model.convertFractional(options.min),
      max: Model.convertFractional(options.max),
      from: Model.convertFractional(from),
      to: Model.convertFractional(to),
      step: Model.convertFractional(Number(options.step)),
    };
  }

  public updateValues(): void {
    const options: SliderOptions = this.getOptions();
    const modelValues: Array<ValueTarget> = ['min', 'max', 'from', 'to'];

    modelValues.forEach((key: ValueTarget) => {
      const value: number = options[key] as number;

      this.writeDataToModel({
        target: key,
        value: Model.convertFractional(value),
        isDouble: options.double,
      });
    });

    this.values.step = options.step;
  }

  private fixIncorrectValue(data: DataForRefreshingModel): number {
    let fixedValue: number = Number(data.value);
    const isHandleTarget: boolean = data.target === 'from' || data.target === 'to';
    const isRangeTarget: boolean = data.target === 'min' || data.target === 'max';

    const fixRangeValues: () => void = () => {
      const isMinBiggerThenMax: boolean = data.target === 'min' && data.value >= this.values.max;
      const isMaxLessThenMin: boolean = data.target === 'max' && data.value <= this.values.min;

      if (isMinBiggerThenMax) fixedValue -= 0.01;
      if (isMaxLessThenMin) fixedValue += 0.01;
    };

    const fixHandlesValues: () => void = () => {
      if (fixedValue > Number(this.values.max)) fixedValue = Number(this.values.max);
      if (fixedValue < Number(this.values.min)) fixedValue = Number(this.values.min);

      const isDoubleAndFromTarget: boolean = data.isDouble && data.target === 'from';
      const isNotDoubleAndFromTarget: boolean = !data.isDouble && data.target === 'from';
      const isDoubleAndToTarget: boolean = data.isDouble && data.target === 'to';
      const isFromBiggerThenTo: boolean = isDoubleAndFromTarget && Number(data.value) > Number(this.values.to);
      const isToLessThenFrom: boolean = isDoubleAndToTarget && Number(data.value) < Number(this.values.from);

      if (isFromBiggerThenTo) {
        fixedValue = Number(this.values.to);
      } else if (isNotDoubleAndFromTarget) {
        this.values.to = fixedValue;
      }
      if (isToLessThenFrom) fixedValue = Number(this.values.from);
    };

    if (isHandleTarget) fixHandlesValues();
    if (isRangeTarget) fixRangeValues();

    return fixedValue;
  }

  public writeDataToModel(data: DataForRefreshingModel): void {
    this.values[data.target] = this.fixIncorrectValue(data);
  }

  public getTotalValues(): number {
    return Number(this.values.max) - Number(this.values.min);
  }

  public static convertFractional(value: number): number {
    const isLastZero: boolean = !Number.isInteger(value) && `${value.toFixed(2)}`.slice(-1) === '0';
    const areLastTwoZero: boolean = `${value.toFixed(2)}`.slice(-2) === '00';
    const isInteger: boolean = Number.isInteger(value) || areLastTwoZero;

    switch (true) {
      case isInteger:
        return Number(value.toFixed(0));
      case isLastZero:
        return Number(value.toFixed(1));
      default:
        return Number(value.toFixed(2));
    }
  }

  private determineValueTarget(value: number, target: UnspecifiedValueTarget): ValueTarget {
    if (target !== 'unspecified') return target;

    const fromDifference: number = Math.abs(Number(this.values.from) - Number(value));
    const toDifference: number = Math.abs(Number(this.values.to) - Number(value));
    const isFromEqualTo: boolean = Number(this.values.from) === Number(this.values.to);
    const isValueLessThenEqual: boolean = isFromEqualTo && Number(value) < Number(this.values.from);
    const isValueBiggerThenEqual: boolean = isFromEqualTo && Number(value) > Number(this.values.to);

    if (isValueLessThenEqual) return 'from';
    if (isValueBiggerThenEqual) return 'to';
    return fromDifference <= toDifference ? 'from' : 'to';
  }

  private calculateValue(calculationData: CalculationData): number {
    const newValue: number = (Number(this.values.min) + (Number(calculationData.position) / (
      Number(calculationData.sliderWidth) / (Number(this.values.max) - Number(this.values.min)))
    ));
    return Model.convertFractional(newValue);
  }

  private calculateOutStepRangeValue(value: number, target: 'from' | 'to'): number | false {
    const lessStepValue: number = Model.convertFractional(Math.floor(
      this.values[target] / Number(this.values.step),
    ) * Number(this.values.step));
    const biggerStepValue: number = Model.convertFractional(Math.ceil(
      this.values[target] / Number(this.values.step),
    ) * Number(this.values.step));

    switch (true) {
      case value <= lessStepValue:
        return lessStepValue;
      case value >= biggerStepValue:
        return biggerStepValue;
      default:
        return false;
    }
  }

  private calculateStepValue(value: number, target: 'from' | 'to'): number | false {
    const valueDifference: number = Math.abs(value - this.values[target]);

    if (valueDifference < this.values.step) return false;

    return value < this.values[target]
      ? Model.convertFractional(this.values[target] - Number(this.values.step))
      : Model.convertFractional(this.values[target] + Number(this.values.step));
  }

  public writeValueFromPosition(settings: CalculationData): void {
    const value: number = this.calculateValue(settings);
    const isStepTarget = (settings.target === 'from' || settings.target === 'to')
      && this.values.step !== 0;

    if (!isStepTarget) {
      this.writeValue({
        value,
        target: settings.target,
        isDouble: settings.isDouble,
        sliderWidth: settings.sliderWidth,
      });
      return;
    }

    const target: 'from' | 'to' = settings.target === 'from' ? 'from' : 'to';
    const isInRange: boolean = Number.isInteger(Model.convertFractional(this.values[target] / Number(this.values.step)));
    const newValue: number | false = isInRange
      ? this.calculateStepValue(value, target)
      : this.calculateOutStepRangeValue(value, target);
    if (newValue === false) return;
    this.writeDataToModel({
      target,
      value: newValue,
      isDouble: settings.isDouble,
    });
  }

  public writeValue(settings: ValueData): void {
    const target: ValueTarget = this.determineValueTarget(settings.value, settings.target);

    this.writeDataToModel({
      target,
      value: settings.value,
      isDouble: settings.isDouble,
    });
  }

  public calculateDataForValueScale(): DataForValueScale {
    const calculateValue = (ratio: number) => (
      ((Number(this.values.max) - Number(this.values.min)) * ratio) + Number(this.values.min)
    );

    return {
      min: String(Model.convertFractional(Number(this.values.min))),
      max: String(Model.convertFractional(Number(this.values.max))),
      20: String(Model.convertFractional(calculateValue(0.2))),
      40: String(Model.convertFractional(calculateValue(0.4))),
      60: String(Model.convertFractional(calculateValue(0.6))),
      80: String(Model.convertFractional(calculateValue(0.8))),
    };
  }
}

export { Model };
