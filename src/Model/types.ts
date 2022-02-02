type CalculationData = {
  target: 'from' | 'to' | 'min' | 'max';
  position: string;
  sliderWidth: number;
};

type DataForPrepareValue = {
  name: 'from' | 'to';
  value: string;
  isDouble: boolean;
  positions: {
    from: number;
    to: number;
  };
  handleWidth: number;
  sliderWidth: number;
  step: boolean | number;
};

type DataForRefreshingModel = {
  target: 'from' | 'to' | 'min' | 'max';
  value: string;
};

type DataForValueScale = {
  min: string;
  max: string;
  20: string;
  40: string;
  60: string;
  80: string;
};

type BasicModelSettings = {
  min: string,
  max: string,
  from: string,
  to: string
};

type StepInfoFromModel = {
  minStep: number;
  stepWidth: string;
  step: number;
};

type StepCalculateData = {
  step: number,
  sliderWidth: number,
  handleWidth: number,
};

type ValuesRangeData = {
  name: string,
  value: string,
};

export {
  CalculationData,
  DataForPrepareValue,
  DataForRefreshingModel,
  DataForValueScale,
  BasicModelSettings,
  StepInfoFromModel,
  StepCalculateData,
  ValuesRangeData,
};
