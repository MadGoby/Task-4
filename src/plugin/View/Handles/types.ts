import { HandlePositions } from '../types';

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
  positions: HandlePositions,
  sliderWidth: number
};

type RefreshHandlesData = {
  value: string;
  target: 'from' | 'to';
};

type DataToHandlesMove = {
  targetPosition: number,
  positions: HandlePositions,
  isDouble: boolean,
};

type NewPositionData = {
  target: HTMLSpanElement,
  value: number,
  positions: HandlePositions,
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
