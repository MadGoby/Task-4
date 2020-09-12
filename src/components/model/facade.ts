import {Model} from './model.ts'

interface MyDataObject {
  [key: string]: string
};

export class Facade {
  private model;

  constructor (model) {
    this.model = model
  }

  startHandelsPosition():object {
    return this.model.getCurrentData();
  };
  
  refreshModelData(data: object, prop: string): object {
    if (prop === 'min') {
      this.model.data['current-min'] = Math.round(this.model.data['min'] + (data['min'] / (+data['sliderWidth'] / (this.model.data['max'] - this.model.data['min']))));
      return { 'min': this.model.data['current-min'] }
    } else {
      this.model.data['current-max'] = Math.round(this.model.data['min'] + (data['max'] / (+data['sliderWidth'] / (this.model.data['max'] - this.model.data['min']))));
      return { 'max': this.model.data['current-max'] }
    };
  };

  getModelData(): object {
    return { 'min': this.model.data['current-min'], 'max': this.model.data['current-max']}
  };

  getMaxData(): number {
    return this.model.data['max']
  };

  getPossibleRange(): object {
    return {'max':this.model.data.max, 'min': this.model.data.min};
  };

  getPositionsAmount(): object {
    return {'positions': this.model.data.max - this.model.data.min, 'minimum': this.model.data.min};
  }
};