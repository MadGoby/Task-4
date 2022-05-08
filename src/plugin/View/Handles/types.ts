import { HandlePositions } from '../types';

type HandlesElementsInfo = {
  cssClasses: Array<string>,
};

type HandleHideData = {
  isDouble: boolean,
  positions: HandlePositions,
  sliderWidth: number
};

type DataToHandlesMove = {
  targetPosition: number,
  positions: HandlePositions,
  isDouble: boolean,
};

type StaticElementsDescription = Array<HandlesElementsInfo>;

export {
  HandlesElementsInfo,
  StaticElementsDescription,
  HandleHideData,
  DataToHandlesMove,
};
