import { Model } from '../Model/Model';
import { Presenter } from './Presenter';
import { View } from '../View/View';
import { SliderOptions } from '../types';
import { IPlugin } from '../interfaces';

describe('Presenter', () => {
  let presenter: Presenter;
  let view: View;
  let model: Model;
  const sliderOptions: SliderOptions = {
    min: 0,
    max: 10,
    double: true,
    handlesValues: true,
    vertical: false,
    step: false,
    valueScale: true,
    integer: true,
  };
  const target: HTMLDivElement = document.createElement('div');

  const plugin: IPlugin = {
    element: target,
    options: sliderOptions,
    update: (data) => data,
  };

  beforeEach(() => {
    model = new Model(() => sliderOptions);
    view = new View(() => sliderOptions, target);
    presenter = new Presenter({
      viewLink: view,
      modelLink: model,
      environment: plugin,
      getOptions: () => sliderOptions,
    });
    document.body.append(view.slider.slider, view.handles.fromHandle);
    view.slider.slider.style.width = '108px';
    presenter.initialize();
  });

  it('bindProxyToUpdatePositions() work correctly', () => {
    view.updatePositions({
      target: 'from',
      newPosition: 30,
    });

    expect(model.values.from).toEqual(3);
  });
});
