'use strict';

import { BasicViewSettings } from '../../types';

type EventInfo = {
  readonly target: EventTarget,
  readonly x: number,
  readonly y: number
};

type HandlesPosition = {
  from: number;
  to: number;
};

type MovementSettings = {
  slider: HTMLDivElement;
  fromHandel: HTMLSpanElement;
  toHandel: HTMLSpanElement;
  basicSettings: BasicViewSettings;
  interval: HTMLDivElement;
  positions?: HandlesPosition;
  stepWidth?: string | boolean;
};

type TestMouseEvent = {
  clientX: number,
  clientY: number,
};

type MovementEvent = {
  eventInfo: EventInfo,
  test?: {
    x: number,
    y: number,
  },
};

export {
  EventInfo,
  HandlesPosition,
  MovementSettings,
  TestMouseEvent,
  MovementEvent,
};
