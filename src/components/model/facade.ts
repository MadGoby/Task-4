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
      this.model.data['current-min'] = Math.round(data['min'] / (+data['sliderWidth'] / (this.model.data['max'] - this.model.data['min'])));
      return { 'min': this.model.data['current-min'] }
    } else {
      this.model.data['current-max'] = Math.round(data['max'] / (+data['sliderWidth'] / (this.model.data['max'] - this.model.data['min'])));
      return { 'max': this.model.data['current-max'] }
    };
  };

  getModelData(): object {
    return { 'min': this.model.data['current-min'], 'max': this.model.data['current-max']}
  };

  getMaxData(): number {
    return this.model.data['max']
  };

  getPositionsAmount(): number {
    return this.model.data.max - this.model.data.min;
  }
};