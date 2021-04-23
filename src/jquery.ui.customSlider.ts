import { BasicModelSettings } from "./components/model/interfaces/ModelInterfaces";
import { BasicViewSettings } from "./components/view/interfaces/ViewInterfaces";
import { Model } from "./components/model/model";
import { View } from "./components/view/view"; 
import { Presenter } from "./components/presenter/presenter";

declare global {
  interface JQuery {
    customSlider( options: SliderOptions):void;
  }
};

interface SliderOptions {
  [key: string]: boolean | string
};

export interface Settings {
  "min": string,
  "max": string,
  "double": boolean,
  "side-menu": boolean | string,
  "handelsValues": boolean,
  "vertical": boolean,
  "step": boolean | number,
  "valueScale": boolean,
  "from"?: string,
  "to"?: string
}

(function( $ ) {
  $.fn.customSlider = function( options: SliderOptions ) {

    let settings: Settings = $.extend( {
      "min": "0",
      "max": "10",
      "double": false,
      "handelsValues": false,
      "vertical": false,
      "step": false,
      "valueScale": false,
      "side-menu": false
    }, options);

    const modelSettings: BasicModelSettings = {
      min: settings.min,
      max: settings.max,
      from: "",
      to: ""
    };
  
    const viewSettings: BasicViewSettings = {
      "double": settings.double,
      "side-menu": settings["side-menu"],
      "handelsValues": settings.handelsValues,
      "vertical": settings.vertical,
      "step": Number(settings.step),
      "valueScale": settings.valueScale,
    };

    settings.from ? modelSettings.from = settings.from : modelSettings.from = settings.min;
    settings.to ? modelSettings.to = settings.to : modelSettings.to = settings.max;

    const that: HTMLElement = this;

    const model: Model = new Model(modelSettings);
    const view: View = new View(viewSettings, that);
    const presenter: Presenter = new Presenter(view, model);

    presenter.bindProxyToView();
    presenter.bindProxyToModel();
    view.bindMovementOnHandels();
    view.prepareSliderForUse();
    view.bindEventListeners();
  };
})(jQuery);