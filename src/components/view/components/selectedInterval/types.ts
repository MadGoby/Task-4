type RefreshIntervalPositions = {
  target: 'from' | 'to';
  position: string;
  sliderWidth: number;
  handleWidth: number;
};

type IntervalDisplayData = {
  isDouble: boolean,
  handleWidth: number
};

export {
  RefreshIntervalPositions,
  IntervalDisplayData,
};
