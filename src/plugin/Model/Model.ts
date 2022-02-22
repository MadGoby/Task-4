import { DataForAdjustPosition, DataForAdjustPositionBasic } from '../View/Handles/types';
import {
  BasicModelSettings,
  CalculationData,
  DataForPrepareValue,
  DataForRefreshingModel,
  DataForValueScale,
  StepCalculateData,
  StepInfoFromModel,
  ValuesRangeData,
} from './types';

class Model {
  public values: BasicModelSettings;

  constructor(settings: BasicModelSettings) {
    this.values = {
      min: Model.truncatesNumbersAfterDot(Number(settings.min)),
      max: Model.truncatesNumbersAfterDot(Number(settings.max)),
      from: Model.truncatesNumbersAfterDot(Number(settings.from)),
      to: Model.truncatesNumbersAfterDot(Number(settings.to)),
    };
  }

  private writesDataToModel(data: DataForRefreshingModel): void {
    this.values[data.target] = data.value;
  }

  public static truncatesNumbersAfterDot(value: number): string {
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

  public calculateValuesByPosition(settings: CalculationData): void {
    const calculateValues = (calculationData: CalculationData): string => {
      const value: number = (Number(this.values.min) + (Number(calculationData.position) / (
        Number(calculationData.sliderWidth) / (Number(this.values.max) - Number(this.values.min)))
      ));
      return Model.truncatesNumbersAfterDot(value);
    };

    this.writesDataToModel({ target: settings.target, value: calculateValues(settings) });
  }

  public calculateDataForValueScale(): DataForValueScale {
    const calculatePosition = (ratio: number) => (
      ((Number(this.values.max) - Number(this.values.min)) * ratio) + Number(this.values.min)
    );

    return {
      min: Model.truncatesNumbersAfterDot(Number(this.values.min)),
      max: Model.truncatesNumbersAfterDot(Number(this.values.max)),
      20: Model.truncatesNumbersAfterDot(calculatePosition(0.2)),
      40: Model.truncatesNumbersAfterDot(calculatePosition(0.4)),
      60: Model.truncatesNumbersAfterDot(calculatePosition(0.6)),
      80: Model.truncatesNumbersAfterDot(calculatePosition(0.8)),
    };
  }

  public assignValueFromScale(value: string, isDouble: boolean): DataForAdjustPosition {
    const fromDifference = Math.abs(Number(this.values.from) - Number(value));
    const toDifference = Math.abs(Number(this.values.to) - Number(value));
    const isFromDifferenceLess = fromDifference < toDifference || !isDouble;
    let result: DataForAdjustPositionBasic;

    if (isFromDifferenceLess) {
      result = { target: 'from', value };
    } else {
      result = { target: 'to', value };
    }

    this.writesDataToModel(result);
    return {
      target: result.target,
      value: result.value,
      totalValues: Number(this.values.max) - Number(this.values.min),
      minValue: this.values.min,
    };
  }

  public calculateStepWidth(settings: StepCalculateData): StepInfoFromModel {
    const { sliderWidth, handleWidth } = settings;
    let { step } = settings;

    if (step < 0.01) step = 0.01;

    const stepWidth: number = (
      (sliderWidth - handleWidth) / (Number(this.values.max) - Number(this.values.min))
    ) * Number(step);

    return { minStep: 0.01, stepWidth: String(stepWidth), step };
  }

  private checkIsValueSmallerThanMin(value: string): boolean {
    return Number(value) < Number(this.values.min);
  }

  private checkIsValueBiggerThanMax(value: string): boolean {
    return Number(value) > Number(this.values.max);
  }

  private checkIsFromValueBiggerThanTo(name: string, value: string, step: string, handleWidth: number): boolean {
    return (name === 'from') && (Number(value) > Number(this.values.to) - (handleWidth / Number(step)));
  }

  private checkIsToValueSmallerThanFrom(name: string, value: string, step: string, handleWidth: number): boolean {
    return (name === 'to') && (Number(value) < Number(this.values.from) + (handleWidth / Number(step)));
  }

  private correctFromBiggerThenTo(settings: DataForPrepareValue, step: StepInfoFromModel, target: string): string {
    const adjustOffset: number = ((Number(this.values.max) - Number(this.values.min))
      / (settings.sliderWidth - settings.handleWidth)) * settings.handleWidth;

    let newHandleValue: string = '';

    if (target === 'to') {
      newHandleValue = String(Model.truncatesNumbersAfterDot(Number(this.values.to) - adjustOffset));
    } else if (target === 'from') {
      newHandleValue = String(Model.truncatesNumbersAfterDot(Number(this.values.from) + adjustOffset));
    }

    return newHandleValue;
  }

  private correctsDoubleValues(settings: DataForPrepareValue): string {
    const step: StepInfoFromModel = this.calculateStepWidth({
      step: 1,
      sliderWidth: settings.sliderWidth,
      handleWidth: settings.handleWidth,
    });
    let { value } = settings;

    if (this.checkIsFromValueBiggerThanTo(settings.name, settings.value, step.stepWidth, settings.handleWidth)) {
      value = this.correctFromBiggerThenTo(settings, step, 'to');
    }

    if (this.checkIsToValueSmallerThanFrom(settings.name, settings.value, step.stepWidth, settings.handleWidth)) {
      value = this.correctFromBiggerThenTo(settings, step, 'from');
    }

    return value;
  }

  public prepareInputValueForRecord(settings: DataForPrepareValue): DataForAdjustPosition {
    if (this.checkIsValueSmallerThanMin(settings.value)) settings.value = this.values.min;
    if (this.checkIsValueBiggerThanMax(settings.value)) settings.value = this.values.max;
    if (settings.isDouble) settings.value = this.correctsDoubleValues(settings);

    this.writesDataToModel({ target: settings.name, value: settings.value });
    return {
      target: settings.name,
      value: settings.value,
      totalValues: Number(this.values.max) - Number(this.values.min),
      minValue: this.values.min,
    };
  }

  private correctsValueBiggerThanMax(value: string): string {
    if (value >= this.values.max) value = String(Number(this.values.max) - 1);
    return value;
  }

  private correctsValueLessThanMin(value: string): string {
    if (value <= this.values.min) value = String(Number(this.values.min) + 1);
    return value;
  }

  public changeSliderValuesRange(settings: ValuesRangeData) {
    const { name } = settings;
    let { value } = settings;

    switch (name) {
      case 'min':
        value = Model.truncatesNumbersAfterDot(Number(
          this.correctsValueBiggerThanMax(value),
        ));
        this.values.min = value;
        break;
      case 'max':
        value = Model.truncatesNumbersAfterDot(Number(
          this.correctsValueLessThanMin(value),
        ));
        this.values.max = value;
        break;
      default:
        break;
    }

    if (Number(this.values.from) < Number(this.values.min)) this.values.from = this.values.min;
    if (Number(this.values.to) > Number(this.values.max)) this.values.to = this.values.max;
  }
}

export { Model };
