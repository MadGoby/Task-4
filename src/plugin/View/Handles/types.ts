import { HandlesPosition } from '../Movement/types';

type DataForAdjustPositionBasic = {
  target: 'from' | 'to';
  value: string;
};

type DataForAdjustPosition = DataForAdjustPositionBasic & {
  totalValues: number;
  minValue: string;
};

type HandlesElementsInfo = {
  cssClasses: Array<string>,
};

type HandleHideData = {
  isDouble: boolean,
  positions: HandlesPosition,
  sliderWidth: number
};

type RefreshHandlesData = {
  value: string;
  target: 'from' | 'to';
};

type DataToHandlesMove = {
  targetPosition: number,
  positions: HandlesPosition,
  isDouble: boolean,
};

type NewPositionData = {
  target: HTMLSpanElement,
  value: number,
  positions: HandlesPosition,
};

type StaticElementsDescription = Array<HandlesElementsInfo>;

export {
  DataForAdjustPosition,
  HandlesElementsInfo,
  StaticElementsDescription,
  HandleHideData,
  DataForAdjustPositionBasic,
  RefreshHandlesData,
  DataToHandlesMove,
  NewPositionData,
};
