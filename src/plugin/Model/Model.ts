import { DataForAdjustPosition, DataForAdjustPositionBasic } from '../View/Handles/types';
import {
  BasicModelSettings,
  CalculationData,
  DataForPrepareValue,
  DataForRefreshingModel,
  DataForValueScale,
  StepCalculateData,
  StepDataFromModel,
  ValuesRangeData,
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

  private writeDataToModel(data: DataForRefreshingModel): void {
    this.values[data.target] = data.value;
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

    this.writeDataToModel({ target: settings.target, value: calculateValue(settings) });
  }

  public calculateDataForValueScale(): DataForValueScale {
    const calculatePosition = (ratio: number) => (
      ((Number(this.values.max) - Number(this.values.min)) * ratio) + Number(this.values.min)
    );

    return {
      min: Model.truncateNumbersAfterDot(Number(this.values.min)),
      max: Model.truncateNumbersAfterDot(Number(this.values.max)),
      20: Model.truncateNumbersAfterDot(calculatePosition(0.2)),
      40: Model.truncateNumbersAfterDot(calculatePosition(0.4)),
      60: Model.truncateNumbersAfterDot(calculatePosition(0.6)),
      80: Model.truncateNumbersAfterDot(calculatePosition(0.8)),
    };
  }

  public assignValueFromScale(value: string, isDouble: boolean): DataForAdjustPosition {
    const fromDifference: number = Math.abs(Number(this.values.from) - Number(value));
    const toDifference: number = Math.abs(Number(this.values.to) - Number(value));
    const isFromDifferenceLess: boolean = fromDifference < toDifference || !isDouble;
    const adjustPositionData: DataForAdjustPositionBasic = isFromDifferenceLess
      ? { target: 'from', value }
      : { target: 'to', value };

    this.writeDataToModel(adjustPositionData);
    return {
      target: adjustPositionData.target,
      value: adjustPositionData.value,
      totalValues: Number(this.values.max) - Number(this.values.min),
      minValue: this.values.min,
    };
  }

  public calculateStepWidth(settings: StepCalculateData): StepDataFromModel {
    const { sliderWidth, handleWidth } = settings;
    const minStep: number = 0.01;
    const { step } = settings;

    const newStep: number = step < minStep ? minStep : step;
    const stepWidth: number = (
      (sliderWidth - handleWidth) / (Number(this.values.max) - Number(this.values.min))
    ) * Number(newStep);

    return { minStep, stepWidth: String(stepWidth), step: newStep };
  }

  private checkIsValueSmallerThanMin(value: string): boolean {
    return Number(value) < Number(this.values.min);
  }

  private checkIsValueBiggerThanMax(value: string): boolean {
    return Number(value) > Number(this.values.max);
  }

  private checkIsFromValueBiggerThanTo(name: string, value: string): boolean {
    return (name === 'from') && (Number(value) > Number(this.values.to));
  }

  private checkIsToValueSmallerThanFrom(name: string, value: string): boolean {
    return (name === 'to') && (Number(value) < Number(this.values.from));
  }

  private fixWrongValues(target: string): string {
    switch (target) {
      case 'to':
        return String(Model.truncateNumbersAfterDot(Number(this.values.to)));
      case 'from':
        return String(Model.truncateNumbersAfterDot(Number(this.values.from)));
      default:
        return '';
    }
  }

  private fixDoubleValues(settings: DataForPrepareValue): string {
    const isFromValueBiggerThanTo: boolean = this.checkIsFromValueBiggerThanTo(settings.name, settings.value);
    const isToValueSmallerThanFrom: boolean = this.checkIsToValueSmallerThanFrom(settings.name, settings.value);

    switch (true) {
      case isFromValueBiggerThanTo:
        return this.fixWrongValues('to');
      case isToValueSmallerThanFrom:
        return this.fixWrongValues('from');
      default:
        return settings.value;
    }
  }

  public prepareInputValueForRecord(settings: DataForPrepareValue): DataForAdjustPosition {
    if (this.checkIsValueSmallerThanMin(settings.value)) settings.value = this.values.min;
    if (this.checkIsValueBiggerThanMax(settings.value)) settings.value = this.values.max;
    if (settings.isDouble) settings.value = this.fixDoubleValues(settings);

    this.writeDataToModel({ target: settings.name, value: settings.value });
    return {
      target: settings.name,
      value: settings.value,
      totalValues: Number(this.values.max) - Number(this.values.min),
      minValue: this.values.min,
    };
  }

  private fixValueBiggerThanMax(value: string): string {
    const isValueBiggerThenMax: boolean = value >= this.values.max;

    return isValueBiggerThenMax ? String(Number(this.values.max) - 1) : value;
  }

  private fixValueLessThanMin(value: string): string {
    const isValueLessThenMin: boolean = value <= this.values.min;

    return isValueLessThenMin ? String(Number(this.values.min) + 1) : value;
  }

  public changeSliderRangeValues(settings: ValuesRangeData) {
    const { name, value } = settings;

    switch (name) {
      case 'min':
        this.values.min = Model.truncateNumbersAfterDot(Number(
          this.fixValueBiggerThanMax(value),
        ));
        break;
      case 'max':
        this.values.max = Model.truncateNumbersAfterDot(Number(
          this.fixValueLessThanMin(value),
        ));
        break;
      default:
        break;
    }

    if (Number(this.values.from) < Number(this.values.min)) this.values.from = this.values.min;
    if (Number(this.values.to) > Number(this.values.max)) this.values.to = this.values.max;
  }
}

export { Model };
