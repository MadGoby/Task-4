import { IValuesScale } from '../valuesScale/interfaces';

type SliderAssemblerSettings = {
  readonly from: HTMLSpanElement;
  readonly to: HTMLSpanElement;
  readonly interval: HTMLDivElement;
  readonly valueScale: IValuesScale;
};

export { SliderAssemblerSettings };
