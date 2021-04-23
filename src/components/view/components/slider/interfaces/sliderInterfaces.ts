import { ValuesScale } from "../../valuesScale/valuesScale";

export interface SliderAssemblerSettings {
  readonly from: HTMLSpanElement;
  readonly to: HTMLSpanElement;
  readonly interval: HTMLDivElement;
  readonly valueScale: ValuesScale;
}