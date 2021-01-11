import { Model } from './model';
import { StartHandelsPosition } from './model';

interface NewPosition {
  'min': string;
  'max': string;
  'sliderWidth': string;
};

export interface SelectHandleForValueScale {
  'target': string;
  'value': string;
};

export interface GetValuesForValueScale {
  '15': string;
  '30': string;
  '50': string;
  '70': string;
  '85': string;
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

  getValuesForValueScale(): GetValuesForValueScale {
    return {
      '15': String(+this.model.data.min + ((+this.model.data.max - +this.model.data.min) * 0.15)),
      '30': String(+this.model.data.min + ((+this.model.data.max - +this.model.data.min) * 0.30)),
      '50': String(+this.model.data.min + ((+this.model.data.max - +this.model.data.min) * 0.50)),
      '70': String(+this.model.data.min + ((+this.model.data.max - +this.model.data.min) * 0.70)),
      '85': String(+this.model.data.min + ((+this.model.data.max - +this.model.data.min) * 0.85))
    };
  };

  selectHandleForValueScale(value: string, doubleToggle: boolean): SelectHandleForValueScale {
    let minDifference: string;
    let maxDifference: string;
    if(doubleToggle) {
      if (+this.model.data['current-min'] > +value || +this.model.data['current-min'] === +value) {
        minDifference = String(+this.model.data['current-min'] - +value);
      } else {
        minDifference = String(+value - +this.model.data['current-min']);
      };
      
      if (+this.model.data['current-max'] > +value || +this.model.data['current-max'] === +value ) {
        maxDifference = String(+this.model.data['current-max'] - +value);
      } else {
        maxDifference = String(+value - +this.model.data['current-max']);
      };
  
      if(+minDifference < +maxDifference || +minDifference == +maxDifference) {
        this.model.data['current-min'] = value;
        return {
          'target': 'min',
          'value': value
        };
      } else {
        this.model.data['current-max'] = value;
        return {
          'target': 'max',
          'value': value
        };
      };
    } else {

      this.model.data['current-min'] = value;
      return {
        'target': 'min',
        'value': value
      };

    };
  };
};