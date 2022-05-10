import { View } from '../View/View';
import { Model } from '../Model/Model';
import {
  SliderOptions,
} from '../types';
import { IPlugin } from '../interfaces';

type BasicPresenterSettings = {
  viewLink: View;
  modelLink: Model;
  getOptions: () => SliderOptions;
  environment: IPlugin;
};

export {
  BasicPresenterSettings,
};
