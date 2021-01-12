interface TarnsferedSettings {
  'min': string;
  'max': string;
  'current-min': string;
  'current-max': string;
}

export interface getStartHandelsPosition {
  'minimum': string, 
  'min': string,
  'max': string, 
  'positions': string
}

export interface IData {
  'min': string;
  'max': string;
  'current-min': string;
  'current-max': string;
}

export class Model {

  data: IData;
  
  constructor( settings: TarnsferedSettings ) { 
    this.data = Object.assign({}, settings);
  }

  getCurrentData(): getStartHandelsPosition {
    return {'minimum': this.data.min, 'min': this.data['current-min'], 'max': this.data['current-max'], 'positions': `${+this.data.max - +this.data.min}`}
  }
}