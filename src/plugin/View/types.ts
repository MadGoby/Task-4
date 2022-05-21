type UpdatePositionTarget = 'from' | 'to' | 'unspecified';

type UpdatePositionsData = {
  target: UpdatePositionTarget;
  newPosition: number;
};

type UpdatePositions = (data: UpdatePositionsData) => UpdatePositionsData;

type PassNewValue = UpdatePositions;

type BasicViewSettings = {
  isDouble: boolean;
  isHandlesValues: boolean;
  isVertical: boolean;
  isStep: boolean | number;
  isValueScale: boolean;
  isInteger: boolean;
};

type HandlePositions = {
  from: number;
  to: number;
  unspecified: number
};

type DataFromModel = {
  value: number;
  target: 'from' | 'to' | 'min' | 'max';
  isToFixed: boolean;
  totalValues: number;
  minValue: number;
};

type NewHandlesData = {
  target: 'from' | 'to' | 'min' | 'max';
  value: number;
  isToFixed: boolean;
  position: string;
};

export {
  BasicViewSettings,
  DataFromModel,
  HandlePositions,
  NewHandlesData,
  UpdatePositions,
  UpdatePositionTarget,
  PassNewValue,
  UpdatePositionsData,
};
