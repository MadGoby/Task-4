import { HandlesPosition } from '../movement/types';

type DataForAdjustPosition = {
  target: 'from' | 'to';
  value: string;
  totalValues: number;
  minValue: string;
};

type HandlesElementsInfo = {
  cssClasses: Array<string>,
  name: string,
  value: string
};

type HandleHideData = {
  isDouble: boolean,
  positions: HandlesPosition,
  sliderWidth: number
};

type StaticElementsDescription = Array<HandlesElementsInfo>;

export {
  DataForAdjustPosition,
  HandlesElementsInfo,
  StaticElementsDescription,
  HandleHideData,
};
