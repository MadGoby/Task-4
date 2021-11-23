type CalculationData = {
  target: string;
  position: string;
  sliderWidth: number;
};

type DataForPrepareValue = {
  name: string;
  value: string;
  isDouble: boolean;
  positions: {
    from: number;
    to: number;
  };
  handelWidth: number;
  sliderWidth: number;
};

type DataForRefreshingModel = {
  target: string;
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
  stepWidth: string;
  step: number;
};

type StepCalculateData = {
  step: number,
  sliderWidth: number,
  handelWidth: number,
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
