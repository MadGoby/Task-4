import { IData } from './dataInterface.ts'

interface Settings {
  [key: string]: string | boolean
}

export class Model {

  data: IData;
  
  constructor( settings: Settings ) { 
    this.data = Object.assign({}, settings);
    console.log(this.data)
  }
}