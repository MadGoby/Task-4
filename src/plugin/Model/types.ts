type ValueTarget = 'from' | 'to' | 'min' | 'max';

type ModelValues = ValueTarget | 'step';

type UnspecifiedValueTarget = ValueTarget | 'unspecified';

type CalculationData = {
  target: UnspecifiedValueTarget;
  position: number;
  sliderWidth: number;
  isDouble: boolean;
};

type ValueData = Omit<CalculationData, 'position'> & {
  value: number;
};

type DataForRefreshingModel = {
  target: ValueTarget;
  value: number;
  isDouble: boolean;
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
  min: number,
  max: number,
  from: number,
  to: number,
  step: number,
};

export {
  CalculationData,
  ValueTarget,
  DataForRefreshingModel,
  DataForValueScale,
  BasicModelSettings,
  UnspecifiedValueTarget,
  ValueData,
  ModelValues,
};
