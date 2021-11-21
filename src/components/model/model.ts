'use strict';

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

export class Model {
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
    if (data.target === 'from') this.values.from = data.value;
    if (data.target === 'to') this.values.to = data.value;
  }

  public calculateValuesByPosition(settings: CalculationData): void {
    let that = this;

    function calculateValues(calculationData: CalculationData): string {
      return String(Math.round(+that.values.min + (+calculationData.position / (
          +calculationData.sliderWidth / (+that.values.max - +that.values.min))
      )));
    }

    this.writeDataToModel({ target: settings.target, value: calculateValues(settings) });
  }

  public calculateDataForValueScale(): DataForValueScale {
    return {
      min: this.values.min,
      max: this.values.max,
      20: String(Math.round((+this.values.max - +this.values.min) * 0.2) + +this.values.min),
      40: String(Math.round((+this.values.max - +this.values.min) * 0.4) + +this.values.min),
      60: String(Math.round((+this.values.max - +this.values.min) * 0.6) + +this.values.min),
      80: String(Math.round((+this.values.max - +this.values.min) * 0.8) + +this.values.min),
    };
  }

  public assignValueFromScale(value: string, isDouble: boolean): DataForAdjustPosition {
    const fromDifference = Math.abs(Number(this.values.from) - Number(value));
    const toDifference = Math.abs(Number(this.values.to) - Number(value)) || !isDouble;
    const isFromDifferenceLess = fromDifference < toDifference;
    let result: DataForRefreshingModel;

    if (isFromDifferenceLess) {
      result = { target: 'from', value: value };
    } else {
      result = { target: 'to', value: value };
    }

    this.writeDataToModel(result);
    return {
      target: result.target,
      value: result.value,
      totalValues: +this.values.max - +this.values.min,
      minValue: this.values.min,
    };
  }

  public calculateStepWidth(settings: StepCalculateData): StepInfoFromModel {
    const { sliderWidth, handelWidth } = settings;
    let { step } = settings;
    let minStep: number = Math.round((+this.values.max - +this.values.min) / (sliderWidth - handelWidth));

    if (minStep < 1) minStep = 1;
    if (step < minStep) step = minStep;

    const stepWidth: number = ((sliderWidth - handelWidth) / (+this.values.max - +this.values.min)) * +step;

    return { stepWidth: String(stepWidth), step: step };
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
    const data = settings;

    if (this.isValueSmallerThanMin(data.value)) data.value = this.values.min;
    if (this.isValueBiggerThanMax(data.value)) data.value = this.values.max;
    if (data.isDouble) {
      let step: StepInfoFromModel = this.calculateStepWidth({
        step: 1,
        sliderWidth: data.sliderWidth,
        handelWidth: data.handelWidth,
      });

      if (this.isFromValueBiggerThanTo(data.name, data.value, step.stepWidth, data.handelWidth)) {
        data.value = String(Math.round(Number(this.values.to) - (data.handelWidth / Number(step.stepWidth))));
      }

      if (this.isToValueSmallerThanFrom(data.name, data.value, step.stepWidth, data.handelWidth)) {
        data.value = String(Math.round(Number(this.values.from) + (data.handelWidth / Number(step.stepWidth))));
      }
    }

    this.writeDataToModel({ target: data.name, value: data.value });
    return {
      target: data.name,
      value: data.value,
      totalValues: +this.values.max - +this.values.min,
      minValue: this.values.min,
    };
  }

  public changeSliderValuesRange(settings: ValuesRangeData) {
    const { name } = settings;
    let { value } = settings;

    if (name === 'min') {
      if (value >= this.values.max) value = String(+this.values.max - 1);
      this.values.min = value;
    }
    if (name === 'max') {
      if (value <= this.values.min) value = String(+this.values.min + 1);
      this.values.max = value;
    }
    if (+this.values.from < +this.values.min) this.values.from = this.values.min;
    if (+this.values.to > +this.values.max) this.values.to = this.values.max;
  }
}
