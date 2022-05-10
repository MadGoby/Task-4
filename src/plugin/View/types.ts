type UpdatePositionTarget = 'from' | 'to' | 'unspecified';

type UpdatePositionsData = {
  target: UpdatePositionTarget;
  newPosition: number;
};

type UpdatePositions = (data: UpdatePositionsData) => UpdatePositionsData;

type PassNewValue = UpdatePositions;

type BasicViewSettings = {
  double: boolean;
  handlesValues: boolean;
  vertical: boolean;
  step: boolean | number;
  valueScale: boolean;
  integer: boolean;
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
