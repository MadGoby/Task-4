'use strict';

export interface DataForAdjustPosition {
  target: string;
  value: string;
  totalValues: number;
  minValue: string;
}

export interface HandlesElementsInfo {
  cssClasses: Array<string>,
  attr?: { name: string, value: string }
}
