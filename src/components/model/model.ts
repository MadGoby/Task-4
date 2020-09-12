import { IData } from './dataInterface.ts'

interface Settings {
  [key: string]: string | boolean
}

export class Model {

  data: IData;
  
  constructor( settings: Settings ) { 
    this.data = Object.assign({}, settings);
  }

  getCurrentData(): object {
    return {'minimum': this.data.min, 'min': this.data['current-min'], 'max': this.data['current-max'], 'positions': `${this.data.max - this.data.min}`}
  }
}