import { DataForValueScale } from '../../Model/types';

interface IValuesScale {
  minValue: HTMLSpanElement;
  maxValue: HTMLSpanElement;
  twentyPercentValue: HTMLSpanElement;
  fortyPercentValue: HTMLSpanElement;
  sixtyPercentValue: HTMLSpanElement;
  eightyPercentValue: HTMLSpanElement;
  refreshValueScale: (values: DataForValueScale) => void;
  centerValues: (sliderWidth: number, handleWidth: number) => void;
  changePlane: (isVertical: boolean) => void;
  changeValueScaleDisplay: (isValueScale: boolean) => void;
}

export { IValuesScale };
