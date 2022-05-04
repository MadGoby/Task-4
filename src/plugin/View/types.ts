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
};

type TargetsForViewUpdate = {
  double?: boolean;
  handlesValues?: boolean;
  vertical?: boolean;
  valueScale?: boolean;
  sideMenu: boolean | string;
  integer: boolean;
};

type RefreshData = {
  value: string;
  target: 'from' | 'to' | 'min' | 'max';
  isToFixed: boolean;
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
  RefreshData,
  ViewRequestsData,
  DataRequestValue,
  HandlePositions,
};
