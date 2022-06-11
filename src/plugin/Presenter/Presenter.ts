import autobind from 'autobind-decorator';
import {
  BasicModelSettings,
  CalculationData,
  DataForValueScale,
  ModelValues,
} from '../Model/types';
import { Model } from '../Model/Model';
import { View } from '../View/View';
import {
  UpdatePositions,
  UpdatePositionsData,
} from '../View/types';
import {
  SliderOptions,
  Update,
  UserSliderOptions,
} from '../types';
import { BasicPresenterSettings } from './types';
import { IPlugin } from '../interfaces';

@autobind
export class Presenter {
  private readonly view: View;

  private readonly model: Model;

  private readonly updateEnvironment: IPlugin;

  private readonly getOptions: () => SliderOptions;

  constructor(settings: BasicPresenterSettings) {
    this.view = settings.viewLink;
    this.model = settings.modelLink;
    this.updateEnvironment = settings.environment;
    this.getOptions = settings.getOptions;
  }

  public initialize(): void {
    const { view, model } = this;

    view.updatePositions = this.bindProxyToUpdatePositions();
    view.passNewValue = this.bindProxyToPassNewValue();
    view.callViewUpdate = this.bindProxyToCallViewUpdate();
    model.values = this.bindProxyToModelValues();

    const options: SliderOptions = this.getOptions();
    if (options.onStart) options.onStart(options);

    this.updateEnvironment.update = this.bindProxyToUpdate();
  }

  private bindProxyToUpdatePositions(): UpdatePositions {
    const that: Presenter = this;

    return new Proxy(this.view.updatePositions, {
      apply(environment: UpdatePositions, thisArgs: View, argArray: [UpdatePositionsData]): boolean {
        const { target, newPosition } = argArray[0];

        const settings: CalculationData = {
          position: newPosition,
          target,
          sliderWidth: that.view.slider.slider.offsetWidth - that.view.handles.fromHandle.offsetWidth,
          isDouble: that.getOptions().isDouble,
        };

        that.model.writeValueFromPosition(settings);

        return true;
      },
    });
  }

  private bindProxyToPassNewValue() {
    const that: Presenter = this;

    return new Proxy(this.view.passNewValue, {
      apply(environment: UpdatePositions, thisArgs: View, argArray: [UpdatePositionsData]): boolean {
        const { target, newPosition } = argArray[0];

        that.model.writeValue({
          value: newPosition,
          target,
          sliderWidth: that.view.slider.slider.offsetWidth - that.view.handles.fromHandle.offsetWidth,
          isDouble: that.getOptions().isDouble,
        });

        return true;
      },
    });
  }

  private updateValueScale(): void {
    const values: DataForValueScale = this.model.calculateDataForValueScale();
    this.view.refreshValueScale(values);
  }

  private updateAllViewValues(): void {
    const options: SliderOptions = this.getOptions();

    this.view.refreshHandleValues({
      value: this.model.values.from,
      target: 'from',
      isToFixed: options.isInteger,
      totalValues: this.model.getTotalValues(),
      minValue: Number(this.model.values.min),
    });

    this.view.refreshHandleValues({
      value: this.model.values.to,
      target: 'to',
      isToFixed: options.isInteger,
      totalValues: this.model.getTotalValues(),
      minValue: Number(this.model.values.min),
    });

    this.updateValueScale();
  }

  private bindProxyToModelValues(): BasicModelSettings {
    const that: Presenter = this;

    return new Proxy(this.model.values, {
      set(target: BasicModelSettings, property: ModelValues, value: number): boolean {
        target[property] = value;
        that.updateEnvironment.options = ({ ...that.updateEnvironment.options, ...that.model.values });

        if (property !== 'step') that.updateAllViewValues();

        const options: SliderOptions = that.getOptions();
        if (options.onChange) options.onChange(options);

        return true;
      },
    });
  }

  private bindProxyToCallViewUpdate(): (target: string) => string {
    const that: Presenter = this;

    return new Proxy(this.view.callViewUpdate, {
      apply(): boolean {
        that.updateAllViewValues();

        return true;
      },
    });
  }

  private fixStepFromUpdate(userValues: UserSliderOptions): UserSliderOptions {
    const minStep: number = 0.01;
    const isStep = userValues.isStep === true;
    const isStepLessThenMin: boolean = typeof userValues.step === 'number'
      && userValues.step < minStep;

    if (isStep) this.model.fixValuesAfterStepChange();
    if (isStepLessThenMin) userValues.step = minStep;
    return userValues;
  }

  private bindProxyToUpdate(): Update {
    const that: Presenter = this;

    return new Proxy(this.updateEnvironment.update, {
      apply(environment: Update, thisArgs: IPlugin, argArray: [UserSliderOptions]): boolean {
        const userValues: UserSliderOptions = that.fixStepFromUpdate(argArray[0]);

        thisArgs.options = ({ ...thisArgs.options, ...that.model.values, ...userValues });
        that.view.updateView();
        that.model.updateValues();

        return true;
      },
    });
  }
}
