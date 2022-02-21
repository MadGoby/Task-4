import { IValuesScale } from '../ValuesScale/interfaces';
import { DataRequestToModel } from '../types';

type SliderAssemblerSettings = {
  readonly from: HTMLSpanElement;
  readonly to: HTMLSpanElement;
  readonly interval: HTMLDivElement;
  readonly valueScale: IValuesScale;
};

type SliderPlaneSettings = {
  isVertical: boolean;
  requests: DataRequestToModel;
  isStep: boolean;
};

export {
  SliderAssemblerSettings,
  SliderPlaneSettings,
};
