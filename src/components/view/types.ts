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
  target: string;
};

type DataRequestFromModel = {
  needDataForScale: boolean;
  needDataForStartPosition: Boolean;
  needStepWidth: boolean;
  needApplyValueFromScale: string;
  needApplyNewValue: {
    name: string,
    value: string
  },
  needChangeSliderValuesRange: {
    name: string,
    value: string
  },
};

export {
  BasicViewSettings,
  TargetsForViewUpdate,
  RefreshData,
  DataRequestFromModel,
};
