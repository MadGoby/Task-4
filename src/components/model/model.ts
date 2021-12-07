import { DataForAdjustPosition } from '../view/components/handels/types';
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

  private writeDataToModel(data: DataForRefreshingModel): void {
    this.values[data.target] = data.value;
  }

  public calculateValuesByPosition(settings: CalculationData): void {
    const calculateValues = (calculationData: CalculationData): string => `${
      Math.round(Number(this.values.min) + (Number(calculationData.position) / (
        Number(calculationData.sliderWidth) / (Number(this.values.max) - Number(this.values.min)))
      ))}`;

    this.writeDataToModel({ target: settings.target, value: calculateValues(settings) });
  }

  public calculateDataForValueScale(): DataForValueScale {
    const calculatePosition = (ratio: number) => String(
      Math.round((
        Number(this.values.max) - Number(this.values.min)) * ratio) + Number(this.values.min),
    );
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
    const toDifference = Math.abs(Number(this.values.to) - Number(value)) || !isDouble;
    const isFromDifferenceLess = fromDifference < toDifference;
    let result: DataForRefreshingModel;

    if (isFromDifferenceLess) {
      result = { target: 'from', value };
    } else {
      result = { target: 'to', value };
    }

    this.writeDataToModel(result);
    return {
      target: result.target,
      value: result.value,
      totalValues: Number(this.values.max) - Number(this.values.min),
      minValue: this.values.min,
    };
  }

  public calculateStepWidth(settings: StepCalculateData): StepInfoFromModel {
    const { sliderWidth, handelWidth } = settings;
    let { step } = settings;
    let minStep: number = Math.round(
      (Number(this.values.max) - Number(this.values.min)) / (sliderWidth - handelWidth),
    );

    if (minStep < 1) minStep = 1;
    if (step < minStep) step = minStep;

    const stepWidth: number = (
      (sliderWidth - handelWidth) / (Number(this.values.max) - Number(this.values.min))
    ) * Number(step);

    return { stepWidth: String(stepWidth), step };
  }

  private isValueSmallerThanMin(value: string): boolean {
    return Number(value) < Number(this.values.min);
  }

  private isValueBiggerThanMax(value: string): boolean {
    return Number(value) > Number(this.values.max);
  }

  private isFromValueBiggerThanTo(name: string, value: string, step: string, handelWidth: number): boolean {
    return (name === 'from') && (Number(value) > Number(this.values.to) - (handelWidth / Number(step)));
  }

  private isToValueSmallerThanFrom(name: string, value: string, step: string, handelWidth: number): boolean {
    return (name === 'to') && (Number(value) < Number(this.values.from) + (handelWidth / Number(step)));
  }

  public prepareInputValueForRecord(settings: DataForPrepareValue): DataForAdjustPosition {
    if (this.isValueSmallerThanMin(settings.value)) settings.value = this.values.min;
    if (this.isValueBiggerThanMax(settings.value)) settings.value = this.values.max;
    if (settings.isDouble) {
      const step: StepInfoFromModel = this.calculateStepWidth({
        step: 1,
        sliderWidth: settings.sliderWidth,
        handelWidth: settings.handelWidth,
      });

      if (this.isFromValueBiggerThanTo(settings.name, settings.value, step.stepWidth, settings.handelWidth)) {
        settings.value = String(
          Math.round(Number(this.values.to) - (settings.handelWidth / Number(step.stepWidth))),
        );
      }

      if (this.isToValueSmallerThanFrom(settings.name, settings.value, step.stepWidth, settings.handelWidth)) {
        settings.value = String(
          Math.round(Number(this.values.from) + (settings.handelWidth / Number(step.stepWidth))),
        );
      }
    }

    this.writeDataToModel({ target: settings.name, value: settings.value });
    return {
      target: settings.name,
      value: settings.value,
      totalValues: Number(this.values.max) - Number(this.values.min),
      minValue: this.values.min,
    };
  }

  public changeSliderValuesRange(settings: ValuesRangeData) {
    const { name } = settings;
    let { value } = settings;

    if (name === 'min') {
      if (value >= this.values.max) value = String(Number(this.values.max) - 1);
      this.values.min = value;
    }
    if (name === 'max') {
      if (value <= this.values.min) value = String(Number(this.values.min) + 1);
      this.values.max = value;
    }
    if (Number(this.values.from) < Number(this.values.min)) this.values.from = this.values.min;
    if (Number(this.values.to) > Number(this.values.max)) this.values.to = this.values.max;
  }
}

export { Model };
