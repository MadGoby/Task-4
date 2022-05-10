import { View } from '../View/View';
import { Model } from '../Model/Model';
import {
  SliderOptions,
  Update,
} from '../types';

type BasicPresenterSettings = {
  viewLink: View;
  modelLink: Model;
  getOptions: () => SliderOptions;
  environment: { update: Update };
};

export {
  BasicPresenterSettings,
};
