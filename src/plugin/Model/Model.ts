import {
  BasicModelSettings,
  CalculationData,
  DataForRefreshingModel,
  DataForValueScale,
  UnspecifiedValueTarget, ValueData,
  ValueTarget,
} from './types';

class Model {
  public values: BasicModelSettings;

  constructor(settings: BasicModelSettings) {
    this.values = {
      min: Model.truncateNumbersAfterDot(Number(settings.min)),
      max: Model.truncateNumbersAfterDot(Number(settings.max)),
      from: Model.truncateNumbersAfterDot(Number(settings.from)),
      to: Model.truncateNumbersAfterDot(Number(settings.to)),
      step: Model.truncateNumbersAfterDot(Number(settings.step)),
    };
  }

  private fixIncorrectValue(data: DataForRefreshingModel): number {
    let fixedValue: number = Number(data.value);
    if (fixedValue > Number(this.values.max)) fixedValue = Number(this.values.max);
    if (fixedValue < Number(this.values.min)) fixedValue = Number(this.values.min);

    const isDoubleAndFromTarget: boolean = data.isDouble && data.target === 'from';
    const isDoubleAndToTarget: boolean = data.isDouble && data.target === 'to';
    const isFromBiggerThenTo: boolean = isDoubleAndFromTarget && Number(data.value) > Number(this.values.to);
    const isToLessThenFrom: boolean = isDoubleAndToTarget && Number(data.value) < Number(this.values.from);

    if (isFromBiggerThenTo) fixedValue = Number(this.values.to);
    if (isToLessThenFrom) fixedValue = Number(this.values.from);

    return fixedValue;
  }

  private writeDataToModel(data: DataForRefreshingModel): void {
    this.values[data.target] = this.fixIncorrectValue(data);
  }

  public getTotalValues(): number {
    return Number(this.values.max) - Number(this.values.min);
  }

  public static truncateNumbersAfterDot(value: number): number {
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
    return Model.truncateNumbersAfterDot(newValue);
  }

  private calculateOutStepRangeValue(value: number, target: 'from' | 'to'): number | false {
    const lessStepValue: number = Math.floor(this.values[target] / Number(this.values.step)) * Number(this.values.step);
    const biggerStepValue: number = Math.ceil(this.values[target] / Number(this.values.step)) * Number(this.values.step);

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
      ? this.values[target] - Number(this.values.step)
      : this.values[target] + Number(this.values.step);
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
    const newValue: number | false = !Number.isInteger(this.values[target])
      ? this.calculateOutStepRangeValue(value, target)
      : this.calculateStepValue(value, target);

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
      min: String(Model.truncateNumbersAfterDot(Number(this.values.min))),
      max: String(Model.truncateNumbersAfterDot(Number(this.values.max))),
      20: String(Model.truncateNumbersAfterDot(calculateValue(0.2))),
      40: String(Model.truncateNumbersAfterDot(calculateValue(0.4))),
      60: String(Model.truncateNumbersAfterDot(calculateValue(0.6))),
      80: String(Model.truncateNumbersAfterDot(calculateValue(0.8))),
    };
  }
}

export { Model };
