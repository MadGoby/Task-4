export interface DataForPrepareValue {
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