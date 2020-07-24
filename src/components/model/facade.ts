import {Model} from './model.ts'

export class Facade {
  private model

  constructor (model) {
    this.model = model
  }
  
  refreshModelData(data: object, prop: string): object {
    if (prop === 'min') {
      this.model.data['current-min'] = Math.round(data['min'] / (+data['sliderWidth'] / (this.model.data['max'] - this.model.data['min'])));
      return { 'min': this.model.data['current-min'] }
    } else {
      this.model.data['current-max'] = Math.round(data['max'] / (+data['sliderWidth'] / (this.model.data['max'] - this.model.data['min'])));
      return { 'max': this.model.data['current-max'] }
    }
  }
  getModelData(): object {
    console.log(this.model.data)
    return { 'min': this.model.data['current-min'], 'max': this.model.data['current-max']}
  }
}