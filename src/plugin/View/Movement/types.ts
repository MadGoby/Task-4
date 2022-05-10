import {
  BasicViewSettings,
  HandlePositions,
  UpdatePositions,
} from '../types';
import { Handles } from '../Handles/Handles';

type MovementSettings = {
  slider: HTMLDivElement;
  handles: Handles;
  getOptions: () => BasicViewSettings;
  environmentLink: { updatePositions: UpdatePositions };
};

type MovementCalculateData = {
  x: number,
  y: number,
  distanceToCursor: number,
};

type MovementEvent = {
  readonly target: EventTarget,
  readonly x: number,
  readonly y: number
};

type HandleClickData = {
  target: HTMLSpanElement,
  distanceToCursor: number,
};

export {
  HandlePositions,
  MovementSettings,
  MovementEvent,
  HandleClickData,
  MovementCalculateData,
};
