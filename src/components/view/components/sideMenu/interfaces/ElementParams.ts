export interface ElementParams {
  name: string;
  cssClases: Array<string>;
  text?: string;
  attr?: {
    name: string,
    value: string
  };
};