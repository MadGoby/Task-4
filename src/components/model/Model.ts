import {
  DataForAdjustPosition,
  DataForAdjustPositionBasic,
} from '../view/components/handles/types';
import {
  CalculationData,
  DataForPrepareValue,
  DataForRefreshingModel,
  DataForValueScale,
  BasicModelSettings,
  StepInfoFromModel,
  StepCalculateData,
  ValuesRangeData,
} from './types';
import { switchCase } from "@babel/types";

class Model {
  public values: BasicModelSettings;

  constructor(settings: BasicModelSettings) {
    this.values = {
      min: settings.min,
      max: settings.max,
      from: settings.from,
      to: settings.to,
    };
  }

  private writesDataToModel(data: DataForRefreshingModel): void {
    this.values[data.target] = data.value;
  }

  private truncatesNumbersAfterDot(value: number): string {
    if (!Number.isInteger(value)) return value.toFixed(2);
    return String(value);
  }

  public calculateValuesByPosition(settings: CalculationData): void {
    const calculateValues = (calculationData: CalculationData): string => {
      const value: number = (Number(this.values.min) + (Number(calculationData.position) / (
        Number(calculationData.sliderWidth) / (Number(this.values.max) - Number(this.values.min)))
      ));
      return this.truncatesNumbersAfterDot(value);
    };

    this.writesDataToModel({ target: settings.target, value: calculateValues(settings) });
  }

  private calculateDifferenceBetweenMinAndMax(): number {
    return Math.abs(
      Math.abs(Number(this.values.min)) - Math.abs(Number(this.values.max)),
    );
  }

  public calculateDataForValueScale(): DataForValueScale {
    const differenceBetweenFromAndTo: number = this.calculateDifferenceBetweenMinAndMax();

    const calculatePosition = (ratio: number) => {
      let value: string = (
        ((Number(this.values.max) - Number(this.values.min)) * ratio) + Number(this.values.min)
      ).toFixed(2);

      if (differenceBetweenFromAndTo >= 5) {
        value = String(Math.round(Number(value)));
      }

      console.log(differenceBetweenFromAndTo);

      return String(value);
    };

    return {
      min: this.values.min,
      max: this.values.max,
      20: calculatePosition(0.2),
      40: calculatePosition(0.4),
      60: calculatePosition(0.6),
      80: calculatePosition(0.8),
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
    let minStep: number = Math.round(
      (Number(this.values.max) - Number(this.values.min)) / (sliderWidth - handleWidth),
    );

    if (minStep <= 0) minStep = 0.1;
    if (step < minStep) step = minStep;

    const stepWidth: number = (
      (sliderWidth - handleWidth) / (Number(this.values.max) - Number(this.values.min))
    ) * Number(step);

    return { stepWidth: String(stepWidth), step };
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

  private correctsDoubleValues(settings: DataForPrepareValue): string {
    const step: StepInfoFromModel = this.calculateStepWidth({
      step: 1,
      sliderWidth: settings.sliderWidth,
      handleWidth: settings.handleWidth,
    });
    let { value } = settings;

    if (this.checkIsFromValueBiggerThanTo(settings.name, settings.value, step.stepWidth, settings.handleWidth)) {
      value = String(
        Math.round(Number(this.values.to) - (settings.handleWidth / Number(step.stepWidth))),
      );
    }

    if (this.checkIsToValueSmallerThanFrom(settings.name, settings.value, step.stepWidth, settings.handleWidth)) {
      value = String(
        Math.round(Number(this.values.from) + (settings.handleWidth / Number(step.stepWidth))),
      );
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
        value = this.correctsValueBiggerThanMax(value);
        this.values.min = value;
        break;
      case 'max':
        value = this.correctsValueLessThanMin(value);
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
