type UpdatePositionTarget = 'from' | 'to' | 'unspecified';

type UpdatePositions = (target: UpdatePositionTarget, newPosition: number) => void;

type PassNewValue = UpdatePositions;

type BasicViewSettings = {
  double: boolean;
  sideMenu: boolean | string;
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

type ValuesToPass = HandlePositions;

type TargetsForViewUpdate = {
  double?: boolean;
  handlesValues?: boolean;
  vertical?: boolean;
  valueScale?: boolean;
  sideMenu: boolean | string;
  integer: boolean;
};

type DataFromModel = {
  value: string;
  target: 'from' | 'to' | 'min' | 'max';
  isToFixed: boolean;
  totalValues: number;
  minValue: number;
};

type NewHandlesData = {
  target: 'from' | 'to' | 'min' | 'max';
  value: string;
  isToFixed: boolean;
  position: string;
};

type DataRequestValue = {
  name: string;
  value: string;
};

type ViewRequestsData = {
  needDataForScale: DataRequestValue;
  needDataForStartPosition: DataRequestValue;
  needStepWidth: DataRequestValue;
  needApplyValueFromScale: DataRequestValue;
  needApplyNewValue: DataRequestValue;
  needChangeSliderValuesRange: DataRequestValue;
};
export {
  BasicViewSettings,
  TargetsForViewUpdate,
  DataFromModel,
  ViewRequestsData,
  DataRequestValue,
  HandlePositions,
  NewHandlesData,
  UpdatePositions,
  UpdatePositionTarget,
  PassNewValue,
  ValuesToPass,
};
