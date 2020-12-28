import { Model } from './model';
import { StartHandelsPosition } from './model';

interface NewPosition {
  'min': string;
  'max': string;
  'sliderWidth': string;
};

export interface GetPositionsAmount {
  'positions': string;
  'minimum': string;
}

export interface GetPossibleRange {
  'min': string;
  'max': string;
}

export class Facade {
  readonly model: Model;

  constructor (model: Model) {
    this.model = model;
  };

  startHandelsPosition(): StartHandelsPosition {
    return this.model.getCurrentData();
  };
  
  refreshModelData(data: NewPosition, prop: string): object {
    if (prop === 'min') {
      this.model.data['current-min'] = String(Math.round(+this.model.data['min'] + (+data['min'] / (+data['sliderWidth'] / (+this.model.data['max'] - +this.model.data['min'])))));
      return { 'min': this.model.data['current-min'] }
    } else {
      this.model.data['current-max'] = String(Math.round(+this.model.data['min'] + (+data['max'] / (+data['sliderWidth'] / (+this.model.data['max'] - +this.model.data['min'])))));
      return { 'max': this.model.data['current-max'] }
    };
  };

  getModelData(): object {
    return { 'min': this.model.data['current-min'], 'max': this.model.data['current-max']}
  };

  getMaxData(): number {
    return +this.model.data['max']
  };

  getPossibleRange(): GetPossibleRange {
    return {'max':this.model.data.max, 'min': this.model.data.min};
  };

  getPositionsAmount(): GetPositionsAmount {
    return {'positions': String(+this.model.data.max - +this.model.data.min), 'minimum': this.model.data.min};
  }
};