import { IValuesScale } from '../ValuesScale/interfaces';
import { ViewRequestsData } from '../types';

type SliderAssemblerSettings = {
  readonly from: HTMLSpanElement;
  readonly to: HTMLSpanElement;
  readonly interval: HTMLDivElement;
  readonly valueScale: IValuesScale;
};

type SliderPlaneSettings = {
  isVertical: boolean;
  requests: ViewRequestsData;
  isStep: boolean;
};

export {
  SliderAssemblerSettings,
  SliderPlaneSettings,
};
