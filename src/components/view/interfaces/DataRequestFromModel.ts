export interface DataRequestFromModel {
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
}