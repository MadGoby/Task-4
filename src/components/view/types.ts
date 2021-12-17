type BasicViewSettings = {
  'double': boolean,
  'side-menu': boolean | string,
  'handlesValues': boolean,
  'vertical': boolean,
  'step': boolean | number,
  'valueScale': boolean,
};

type TargetsForViewUpdate = {
  double?: boolean;
  handlesValues?: boolean;
  vertical?: boolean;
  valueScale?: boolean;
  sideMenu: boolean | string;
};

type RefreshData = {
  value: string;
  target: 'from' | 'to' | 'min' | 'max';
};

type DataRequestValue = { 'name': string, 'value': string };

type DataRequestToModel = {
  needDataForScale: DataRequestValue;
  needDataForStartPosition: DataRequestValue;
  needStepWidth: DataRequestValue;
  needApplyValueFromScale: DataRequestValue;
  needApplyNewValue: DataRequestValue,
  needChangeSliderValuesRange: DataRequestValue,
};
export {
  BasicViewSettings,
  TargetsForViewUpdate,
  RefreshData,
  DataRequestToModel,
  DataRequestValue,
};
