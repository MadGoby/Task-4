type IntervalDisplayData = {
  isDouble: boolean,
  handleWidth: number
};

type NewIntervalData = {
  target: 'from' | 'to' | 'min' | 'max';
  position: string;
  sliderWidth: number;
  handleWidth: number;
};

export {
  NewIntervalData,
  IntervalDisplayData,
};
