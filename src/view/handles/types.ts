import { HandlesPosition } from '../movement/types';

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
  name: string,
  value: string
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

type HandlesOverlaps = {
  positions: HandlesPosition,
  isDouble: boolean,
  sliderWidth: number,
};

type StaticElementsDescription = Array<HandlesElementsInfo>;

export {
  DataForAdjustPosition,
  HandlesElementsInfo,
  StaticElementsDescription,
  HandleHideData,
  DataForAdjustPositionBasic,
  RefreshHandlesData,
  HandlesOverlaps,
};
