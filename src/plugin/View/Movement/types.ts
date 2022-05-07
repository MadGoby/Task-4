import {
  BasicViewSettings,
  HandlePositions,
  UpdatePositions,
} from '../types';
import { Handles } from '../Handles/Handles';
import { SelectedInterval } from '../SelectedInterval/SelectedInterval';

type MovementSettings = {
  slider: HTMLDivElement;
  handles: Handles;
  interval: SelectedInterval;
  basicSettings: BasicViewSettings;
  updatePositions: UpdatePositions;
};

type MovementEvent = {
  readonly target: EventTarget,
  readonly x: number,
  readonly y: number
};

type HandleClickData = {
  target: HTMLSpanElement,
  distanceToCursor: Number,
};

export {
  HandlePositions,
  MovementSettings,
  MovementEvent,
  HandleClickData,
};
