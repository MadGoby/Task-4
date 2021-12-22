import { DataForValueScale } from '../../../model/types';

interface IValuesScale {
  minValue: HTMLSpanElement;
  maxValue: HTMLSpanElement;
  20: HTMLSpanElement;
  40: HTMLSpanElement;
  60: HTMLSpanElement;
  80: HTMLSpanElement;
  refreshValueScale: (values: DataForValueScale) => void;
  centersValues: (sliderWidth: number, handleWidth: number) => void;
  changePlane: (isVertical: boolean) => void;
  hideValueScale: (isValueScale: boolean) => void;
}

export { IValuesScale };
