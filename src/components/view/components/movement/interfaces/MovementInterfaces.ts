import { BasicViewSettings } from "../../../interfaces/ViewInterfaces";
import { SelectedInterval } from "../../selectedInterval/selectedInterval";
import { HandelsPosition } from "./HandelsPosition";

export interface MovementSettings {
  slider: HTMLDivElement;
  fromHandel: HTMLSpanElement;
  toHandel: HTMLSpanElement;
  basicSettings: BasicViewSettings;
  interval: HTMLDivElement;
  positions?: HandelsPosition;
  stepWidth?: string | boolean;
}