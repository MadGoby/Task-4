type UpdatePositionTarget = 'from' | 'to' | 'unspecified';

type UpdatePositions = (target: UpdatePositionTarget, newPosition: number) => void;

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

type ViewRequests = {
  needDataForViewUpdate: boolean;
};

type ValuesToPass = HandlePositions;

type TargetsForViewUpdate = {
  double?: boolean;
  handlesValues?: boolean;
  vertical?: boolean;
  valueScale?: boolean;
  integer: boolean;
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
  TargetsForViewUpdate,
  DataFromModel,
  HandlePositions,
  NewHandlesData,
  UpdatePositions,
  UpdatePositionTarget,
  PassNewValue,
  ValuesToPass,
  ViewRequests,
};
