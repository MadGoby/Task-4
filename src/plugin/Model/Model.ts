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
    const stepRatio: number = 40;
    const step: number = options.step ? options.step : (options.max - options.min) / stepRatio;
    const totalValues = options.max - options.min;
    this.getOptions().from = from;
    this.getOptions().to = to;
    this.getOptions().step = step > totalValues / 2 ? totalValues / 2 : step;

    this.values = {
      min: Model.convertFractional(options.min),
      max: Model.convertFractional(options.max),
      from: Model.convertFractional(from),
      to: Model.convertFractional(to),
      step: Model.convertFractional(step),
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
        isDouble: options.isDouble,
      });
    });

    if (options.step) {
      const totalValues = options.max - options.min;
      const step = options.step > totalValues / 2 ? totalValues / 2 : options.step;
      this.values.step = Model.convertFractional(step);
    }
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

  public writeValueFromPosition(settings: CalculationData): void {
    const value: number = this.calculateValue(settings);
    const target: ValueTarget = settings.target !== 'unspecified'
      ? settings.target
      : this.determineValueTarget(value, settings.target);
    const isStepTarget = this.getOptions().isStep;

    if (!isStepTarget) {
      this.writeValue({
        value,
        target,
        isDouble: settings.isDouble,
        sliderWidth: settings.sliderWidth,
      });
      return;
    }

    const newValue = this.calculateStepValue(value);

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

  public fixValuesAfterStepChange(): void {
    this.values.from = this.calculateStepValue(this.values.from);
    this.values.to = this.calculateStepValue(this.values.to);
  }

  private fixRangeValues(data: DataForRefreshingModel, value: number): number {
    const isMinBiggerThenMax: boolean = data.target === 'min' && data.value >= this.values.max;
    const isMaxLessThenMin: boolean = data.target === 'max' && data.value <= this.values.min;
    const minStep: number = 0.01;

    if (isMinBiggerThenMax) return value - minStep;
    if (isMaxLessThenMin) return value + minStep;

    return value;
  }

  private fixHandlesValues(data: DataForRefreshingModel, value: number): number {
    if (value > Number(this.values.max)) value = Number(this.values.max);
    if (value < Number(this.values.min)) value = Number(this.values.min);

    const isDoubleAndFromTarget: boolean = data.isDouble && data.target === 'from';
    const isNotDoubleAndFromTarget: boolean = !data.isDouble && data.target === 'from';
    const isDoubleAndToTarget: boolean = data.isDouble && data.target === 'to';
    const isFromBiggerThenTo: boolean = isDoubleAndFromTarget && Number(data.value) > Number(this.values.to);
    const isToLessThenFrom: boolean = isDoubleAndToTarget && Number(data.value) < Number(this.values.from);

    if (isFromBiggerThenTo) return Number(this.values.to);
    if (isNotDoubleAndFromTarget) this.values.to = value;
    if (isToLessThenFrom) return Number(this.values.from);

    return value;
  }

  private fixIncorrectValue(data: DataForRefreshingModel): number {
    const isHandleTarget: boolean = data.target === 'from' || data.target === 'to';
    const isRangeTarget: boolean = data.target === 'min' || data.target === 'max';

    if (isHandleTarget) return this.fixHandlesValues(data, data.value);
    if (isRangeTarget) return this.fixRangeValues(data, data.value);
    return data.value;
  }

  private determineValueTarget(value: number, target: UnspecifiedValueTarget): ValueTarget {
    if (target !== 'unspecified') return target;
    if (!this.getOptions().isDouble) return 'from';

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

  private calculateStepValue(value: number): number {
    return Model.convertFractional(Math.round(
      value / Number(this.values.step),
    ) * Number(this.values.step));
  }
}

export { Model };
