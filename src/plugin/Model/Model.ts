import {
  BasicModelSettings,
  CalculationData,
  DataForRefreshingModel,
  DataForValueScale,
} from './types';

class Model {
  public values: BasicModelSettings;

  constructor(settings: BasicModelSettings) {
    this.values = {
      min: Model.truncateNumbersAfterDot(Number(settings.min)),
      max: Model.truncateNumbersAfterDot(Number(settings.max)),
      from: Model.truncateNumbersAfterDot(Number(settings.from)),
      to: Model.truncateNumbersAfterDot(Number(settings.to)),
    };
  }

  private fixIncorrectValue(data: DataForRefreshingModel): string {
    let fixedValue: number = Number(data.value);
    if (fixedValue > Number(this.values.max)) fixedValue = Number(this.values.max);
    if (fixedValue < Number(this.values.min)) fixedValue = Number(this.values.min);

    const isDoubleAndFromTarget: boolean = data.isDouble && data.target === 'from';
    const isDoubleAndToTarget: boolean = data.isDouble && data.target === 'to';
    const isFromBiggerThenTo: boolean = isDoubleAndFromTarget && Number(data.value) > Number(this.values.to);
    const isToLessThenFrom: boolean = isDoubleAndToTarget && Number(data.value) < Number(this.values.from);

    if (isFromBiggerThenTo) fixedValue = Number(this.values.to);
    if (isToLessThenFrom) fixedValue = Number(this.values.from);

    return String(fixedValue);
  }

  private writeDataToModel(data: DataForRefreshingModel): void {
    this.values[data.target] = this.fixIncorrectValue(data);
  }

  public getTotalValues(): number {
    return Number(this.values.max) - Number(this.values.min);
  }

  public static truncateNumbersAfterDot(value: number): string {
    const isLastZero: boolean = !Number.isInteger(value) && `${value.toFixed(2)}`.slice(-1) === '0';
    const areLastTwoZero: boolean = `${value.toFixed(2)}`.slice(-2) === '00';
    const isInteger: boolean = Number.isInteger(value) || areLastTwoZero;

    switch (true) {
      case isInteger:
        return value.toFixed(0);
      case isLastZero:
        return value.toFixed(1);
      default:
        return value.toFixed(2);
    }
  }

  public calculateValueByPosition(settings: CalculationData): void {
    const calculateValue = (calculationData: CalculationData): string => {
      const newValue: number = (Number(this.values.min) + (Number(calculationData.position) / (
        Number(calculationData.sliderWidth) / (Number(this.values.max) - Number(this.values.min)))
      ));
      return Model.truncateNumbersAfterDot(newValue);
    };

    this.writeDataToModel({
      target: settings.target,
      value: calculateValue(settings),
      isDouble: settings.isDouble,
    });
  }

  public calculateDataForValueScale(): DataForValueScale {
    const calculateValue = (ratio: number) => (
      ((Number(this.values.max) - Number(this.values.min)) * ratio) + Number(this.values.min)
    );

    return {
      min: Model.truncateNumbersAfterDot(Number(this.values.min)),
      max: Model.truncateNumbersAfterDot(Number(this.values.max)),
      20: Model.truncateNumbersAfterDot(calculateValue(0.2)),
      40: Model.truncateNumbersAfterDot(calculateValue(0.4)),
      60: Model.truncateNumbersAfterDot(calculateValue(0.6)),
      80: Model.truncateNumbersAfterDot(calculateValue(0.8)),
    };
  }
}

export { Model };
