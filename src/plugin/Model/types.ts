type ValueTarget = 'from' | 'to' | 'min' | 'max';
type UnspecifiedValueTarget = ValueTarget | 'unspecified';

type CalculationData = {
  target: UnspecifiedValueTarget;
  position: string;
  sliderWidth: number;
  isDouble: boolean;
};

type ValueData = Omit<CalculationData, 'position'> & {
  value: string;
};

type DataForRefreshingModel = {
  target: ValueTarget;
  value: string;
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
  min: string,
  max: string,
  from: string,
  to: string
};

export {
  CalculationData,
  ValueTarget,
  DataForRefreshingModel,
  DataForValueScale,
  BasicModelSettings,
  UnspecifiedValueTarget,
  ValueData,
};
