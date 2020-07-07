import {Model} from './model.ts'

export class Facade {
  private model

  constructor (model) {
    this.model = model
  }
  
  refreshModelData(str: string): void {
    let data = str.split(':')
    this.model.data['current-min'] = Math.round(Number(data[0]) / (Number(data[1]) / (this.model.data['max'] - this.model.data['min'])))
  }
}