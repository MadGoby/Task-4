/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/jquery.ui.customSlider.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/components/model/Model.ts":
/*!***************************************!*\
  !*** ./src/components/model/Model.ts ***!
  \***************************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Model", function() { return Model; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Model = /*#__PURE__*/function () {
  function Model(settings) {
    _classCallCheck(this, Model);

    _defineProperty(this, "data", void 0);

    this.data = Object.assign({}, settings);
  }

  _createClass(Model, [{
    key: "getCurrentData",
    value: function getCurrentData() {
      return {
        'minimum': this.data.min,
        'min': this.data['current-min'],
        'max': this.data['current-max'],
        'positions': "".concat(this.data.max - this.data.min)
      };
    }
  }]);

  return Model;
}();

/***/ }),

/***/ "./src/components/model/facade.ts":
/*!****************************************!*\
  !*** ./src/components/model/facade.ts ***!
  \****************************************/
/*! exports provided: Facade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Facade", function() { return Facade; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

;
var Facade = /*#__PURE__*/function () {
  function Facade(model) {
    _classCallCheck(this, Facade);

    _defineProperty(this, "model", void 0);

    this.model = model;
  }

  _createClass(Facade, [{
    key: "startHandelsPosition",
    value: function startHandelsPosition() {
      return this.model.getCurrentData();
    }
  }, {
    key: "refreshModelData",
    value: function refreshModelData(data, prop) {
      if (prop === 'min') {
        this.model.data['current-min'] = Math.round(this.model.data['min'] + data['min'] / (+data['sliderWidth'] / (this.model.data['max'] - this.model.data['min'])));
        return {
          'min': this.model.data['current-min']
        };
      } else {
        this.model.data['current-max'] = Math.round(this.model.data['min'] + data['max'] / (+data['sliderWidth'] / (this.model.data['max'] - this.model.data['min'])));
        return {
          'max': this.model.data['current-max']
        };
      }

      ;
    }
  }, {
    key: "getModelData",
    value: function getModelData() {
      return {
        'min': this.model.data['current-min'],
        'max': this.model.data['current-max']
      };
    }
  }, {
    key: "getMaxData",
    value: function getMaxData() {
      return this.model.data['max'];
    }
  }, {
    key: "getPossibleRange",
    value: function getPossibleRange() {
      return {
        'max': this.model.data.max,
        'min': this.model.data.min
      };
    }
  }, {
    key: "getPositionsAmount",
    value: function getPositionsAmount() {
      return {
        'positions': this.model.data.max - this.model.data.min,
        'minimum': this.model.data.min
      };
    }
  }]);

  return Facade;
}();
;

/***/ }),

/***/ "./src/components/presenter/presenter.ts":
/*!***********************************************!*\
  !*** ./src/components/presenter/presenter.ts ***!
  \***********************************************/
/*! exports provided: Presenter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Presenter", function() { return Presenter; });
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Presenter = /*#__PURE__*/function () {
  function Presenter(view, facade) {
    _classCallCheck(this, Presenter);

    _defineProperty(this, "viewLink", void 0);

    _defineProperty(this, "facadeLink", void 0);

    this.viewLink = view;
    this.facadeLink = facade;
  }

  _createClass(Presenter, [{
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var view = this.viewLink;
      var facade = this.facadeLink;
      this.viewLink.displayElements();
      this.trackingRecordInMyData();
      this.recordingThePositionsValuesForView();
      this.bindListenerForMin();
      this.bindListenerForMax();

      if (this.viewLink.settings['side-menu'] !== false) {
        this.viewLink.handelLabelToggle.addEventListener('change', this.makeBindListenerForLabelToggle(view));
      }

      ;

      if (this.viewLink.settings['side-menu'] !== false) {
        this.viewLink.handelToggle.addEventListener('change', this.makeBindListenerForDoubleHandels(view, facade));
      }

      ;

      if (this.viewLink.settings['side-menu'] !== false) {
        this.viewLink.planeToggle.addEventListener('change', this.makeBindListenerForPlaneToggle(view));
      }

      ;
      this.viewLink.minValue.addEventListener('click', this.makeBindListenerForSelectionMinValue(view));
      this.viewLink.maxValue.addEventListener('click', this.makeBindListenerForSelectionMaxValue(view));

      if (this.viewLink.settings['side-menu'] !== false) {
        this.viewLink.minInput.addEventListener('change', this.makeBindListenerForMinInput(view, facade));
      }

      ;

      if (this.viewLink.settings['side-menu'] !== false) {
        this.viewLink.maxInput.addEventListener('change', this.makeBindListenerForMaxInput(view, facade));
      }

      ;
      this.possibleRangeForView();
      this.settingStartingPositions();
    }
  }, {
    key: "trackingRecordInMyData",
    value: function trackingRecordInMyData() {
      var view = this.viewLink;
      var facade = this.facadeLink;
      view.sliderMovement.myData = new Proxy(view.sliderMovement.myData, {
        set: function set(target, prop, val) {
          if (_typeof(val) === 'object') {
            target[prop] = val;
            var modelResult = facade.refreshModelData(val, prop);
            view.refreshCurrentValues(modelResult);
            return true;
          } else {
            return false;
          }

          ;
        }
      });
    }
  }, {
    key: "recordingThePositionsValuesForView",
    value: function recordingThePositionsValuesForView() {
      if (this.viewLink.sliderMovement.step !== false) {
        var stepAmount = this.facadeLink.getPositionsAmount();
        this.viewLink.sliderMovement.stepAmount = stepAmount['positions'];
      }

      ;
    }
  }, {
    key: "bindListenerForMin",
    value: function bindListenerForMin() {
      var view = this.viewLink;

      view.minHandel.onmousedown = function (event) {
        view.sliderMovement.minHandelListener(event);
      };
    }
  }, {
    key: "bindListenerForMax",
    value: function bindListenerForMax() {
      var view = this.viewLink;

      view.maxHandel.onmousedown = function (event) {
        view.sliderMovement.maxHandelListener(event);
      };
    }
  }, {
    key: "makeBindListenerForLabelToggle",
    value: function makeBindListenerForLabelToggle(selfView) {
      var view = selfView;
      return function () {
        view.callHandelLabelToggleChanger(view);
      };
    }
  }, {
    key: "makeBindListenerForDoubleHandels",
    value: function makeBindListenerForDoubleHandels(selfView, selfFacade) {
      var view = selfView;
      var facade = selfFacade;
      return function () {
        view.callMaxHandelToggleChanger(view);

        if (view.handelToggle.checked === true) {
          var result = facade.getMaxData();
          view.refreshMaxSideMenuData(result);
        }

        ;
      };
    }
  }, {
    key: "makeBindListenerForPlaneToggle",
    value: function makeBindListenerForPlaneToggle(selfView) {
      var view = selfView;
      return function () {
        view.sliderMovement.changePlane(view.planeToggle, view.sliderContainer, view.minValue, view.maxValue);
      };
    }
  }, {
    key: "makeBindListenerForSelectionMinValue",
    value: function makeBindListenerForSelectionMinValue(selfView) {
      var view = selfView;
      return function () {
        view.sliderMovement.selectionOfPreparedValue('min');
      };
    }
  }, {
    key: "makeBindListenerForSelectionMaxValue",
    value: function makeBindListenerForSelectionMaxValue(selfView) {
      var view = selfView;
      return function () {
        view.sliderMovement.selectionOfPreparedValue('max');
      };
    }
  }, {
    key: "makeBindListenerForMinInput",
    value: function makeBindListenerForMinInput(selfView, selfFacade) {
      var view = selfView;
      var facade = selfFacade;
      return function () {
        var positions = facade.getPositionsAmount();
        view.sliderMovement.sideMenuInputsValuesValidationChecker('min', view.minInput.value, positions['positions'], positions['minimum']);
      };
    }
  }, {
    key: "makeBindListenerForMaxInput",
    value: function makeBindListenerForMaxInput(selfView, selfFacade) {
      var view = selfView;
      var facade = selfFacade;
      return function () {
        var positions = facade.getPositionsAmount();
        view.sliderMovement.sideMenuInputsValuesValidationChecker('max', view.maxInput.value, positions['positions'], positions['minimum']);
      };
    }
  }, {
    key: "possibleRangeForView",
    value: function possibleRangeForView() {
      if (this.viewLink.settings['side-menu'] !== false) {
        var possibleRange = this.facadeLink.getPossibleRange();
        this.viewLink.inputsPossibleRange(possibleRange, this.viewLink.minInput, this.viewLink.maxInput);
      }

      ;
    }
  }, {
    key: "settingStartingPositions",
    value: function settingStartingPositions() {
      var startPositions = this.facadeLink.startHandelsPosition();
      this.viewLink.sliderMovement.startHandlersPositions(startPositions);
      this.viewLink.refreshCurrentValues(startPositions);
    }
  }]);

  return Presenter;
}();
;

/***/ }),

/***/ "./src/components/view/components/handels-labels.ts":
/*!**********************************************************!*\
  !*** ./src/components/view/components/handels-labels.ts ***!
  \**********************************************************/
/*! exports provided: HandelsLabels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HandelsLabels", function() { return HandelsLabels; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HandelsLabels = /*#__PURE__*/function () {
  function HandelsLabels() {
    _classCallCheck(this, HandelsLabels);

    _defineProperty(this, "minLabel", void 0);

    _defineProperty(this, "maxLabel", void 0);

    _defineProperty(this, "labelInput", void 0);

    var min = document.createElement('label');
    var max = document.createElement('label');
    min.classList.add('minSliderHandelLabel');
    max.classList.add('maxSliderHandelLabel');
    this.minLabel = min;
    this.maxLabel = max;
  }

  _createClass(HandelsLabels, [{
    key: "getElements",
    value: function getElements() {
      return {
        'min': this.minLabel,
        'max': this.maxLabel
      };
    }
  }, {
    key: "displayController",
    value: function displayController(toggle, min, max) {
      if (toggle.checked === true) {
        min.style.display = 'inline';
        max.style.display = 'inline';
      } else {
        min.style.display = 'none';
        max.style.display = 'none';
      }
    }
  }, {
    key: "centeringRelativeToHandles",
    value: function centeringRelativeToHandles(minHandelWidth, maxHandelWidth, minLabelWidth, maxLabelWidth, minLabel, maxLabel) {
      minLabel.style.left = (minHandelWidth - minLabelWidth) / 2 + 'px';
      maxLabel.style.left = (maxHandelWidth - maxLabelWidth) / 2 + 'px';
    }
  }]);

  return HandelsLabels;
}();

/***/ }),

/***/ "./src/components/view/components/handels.ts":
/*!***************************************************!*\
  !*** ./src/components/view/components/handels.ts ***!
  \***************************************************/
/*! exports provided: Handels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Handels", function() { return Handels; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Handels = /*#__PURE__*/function () {
  function Handels() {
    _classCallCheck(this, Handels);

    _defineProperty(this, "minHandel", void 0);

    _defineProperty(this, "maxHandel", void 0);

    var min = document.createElement('span');
    var max = document.createElement('span');
    min.classList.add('minSliderHandel');
    max.classList.add('maxSliderHandel');
    this.minHandel = min;
    this.maxHandel = max;
  }

  _createClass(Handels, [{
    key: "getElements",
    value: function getElements() {
      return {
        min: this.minHandel,
        max: this.maxHandel
      };
    }
  }, {
    key: "displayController",
    value: function displayController(toggle, max) {
      if (toggle.checked === true) {
        max.style.display = 'block';
      } else {
        max.style.display = 'none';
      }

      ;
    }
  }]);

  return Handels;
}();
;

/***/ }),

/***/ "./src/components/view/components/selected-range.ts":
/*!**********************************************************!*\
  !*** ./src/components/view/components/selected-range.ts ***!
  \**********************************************************/
/*! exports provided: SelectedRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectedRange", function() { return SelectedRange; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SelectedRange = /*#__PURE__*/function () {
  function SelectedRange() {
    _classCallCheck(this, SelectedRange);

    _defineProperty(this, "interval", void 0);

    var interval = document.createElement('div');
    interval.classList.add('mainInterval');
    this.interval = interval;
  }

  _createClass(SelectedRange, [{
    key: "getElements",
    value: function getElements() {
      return this.interval;
    }
  }]);

  return SelectedRange;
}();

/***/ }),

/***/ "./src/components/view/components/side-menu.ts":
/*!*****************************************************!*\
  !*** ./src/components/view/components/side-menu.ts ***!
  \*****************************************************/
/*! exports provided: SideMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideMenu", function() { return SideMenu; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SideMenu = /*#__PURE__*/function () {
  function SideMenu() {
    _classCallCheck(this, SideMenu);

    _defineProperty(this, "customSliderMenuContainer", void 0);

    _defineProperty(this, "handelToggle", void 0);

    _defineProperty(this, "handelLabelToggle", void 0);

    _defineProperty(this, "planeToggle", void 0);

    _defineProperty(this, "minInput", void 0);

    _defineProperty(this, "maxInput", void 0);

    var sliderValueP = document.createElement('p');
    sliderValueP.classList.add('customSliderParagVal');
    sliderValueP.innerText = 'Текущее занчение: ';
    var minSliderValueOutput = document.createElement('output');
    minSliderValueOutput.classList.add('sliderValue');
    minSliderValueOutput.id = 'minSliderValue';
    var maxSliderValueOutput = document.createElement('output');
    maxSliderValueOutput.classList.add('sliderValue');
    maxSliderValueOutput.id = 'maxSliderValue';
    var sliderToggleP = document.createElement('p');
    sliderToggleP.classList.add('customSliderParag');
    sliderToggleP.innerText = 'Включить второй ползунок: ';
    var sliderToggleLabel = document.createElement('label');
    sliderToggleLabel.classList.add('customSliderToggle');
    var maxSliderHandelToggle = document.createElement('input');
    maxSliderHandelToggle.classList.add('maxSliderHandelToggle');
    maxSliderHandelToggle.id = 'maxSliderHandelToggle';
    maxSliderHandelToggle.setAttribute('type', 'checkbox');
    var customSliderBorder = document.createElement('span');
    customSliderBorder.classList.add('customToggleSliderBorder');
    var customSliderInputs = document.createElement('div');
    customSliderInputs.classList.add('customSliderInputs');
    var customSliderInputsP = document.createElement('p');
    customSliderInputsP.innerText = 'Изменить значение: ';
    customSliderInputsP.classList.add('customSliderParag');
    var customSliderInputsMinLabel = document.createElement('label');
    customSliderInputsMinLabel.classList.add('customSliderInputlabel');
    customSliderInputsMinLabel.setAttribute('for', 'customSliderMinInput');
    customSliderInputsMinLabel.innerText = 'Min: ';
    var customSliderInputsMaxLabel = document.createElement('label');
    customSliderInputsMaxLabel.classList.add('customSliderInputlabel');
    customSliderInputsMaxLabel.setAttribute('for', 'customSliderMaxInput');
    customSliderInputsMaxLabel.innerText = 'Max: ';
    var customSliderInputsMin = document.createElement('input');
    customSliderInputsMin.classList.add('customSliderMinInput');
    customSliderInputsMin.id = 'customSliderMinInput';
    customSliderInputsMin.setAttribute('type', 'number');
    var customSliderInputsMax = document.createElement('input');
    customSliderInputsMax.classList.add('customSliderMaxInput');
    customSliderInputsMax.id = 'customSliderMaxInput';
    customSliderInputsMax.setAttribute('type', 'number');
    var toggleForValuesContainer = document.createElement('div');
    var toggleForValuesP = document.createElement('p');
    toggleForValuesP.classList.add('customSliderParag');
    toggleForValuesP.innerText = 'Включить значения под ползунками: ';
    var toggleForValuesLabel = document.createElement('label');
    toggleForValuesLabel.classList.add('customSliderToggle');
    var toggleForValuesInput = document.createElement('input');
    toggleForValuesInput.setAttribute('type', 'checkbox');
    toggleForValuesInput.classList.add('showValueToggle');
    toggleForValuesInput.id = 'showValueToggle';
    var toggleForValuesSpan = document.createElement('span');
    toggleForValuesSpan.classList.add('customToggleSliderBorder');
    var toggleForPlaneContainer = document.createElement('div');
    var toggleForPlaneP = document.createElement('p');
    toggleForPlaneP.classList.add('customSliderParag');
    toggleForPlaneP.innerText = 'Изменить плоскость: ';
    var toggleForPlaneLabel = document.createElement('label');
    toggleForPlaneLabel.classList.add('customSliderToggle');
    var toggleForPlaneInput = document.createElement('input');
    toggleForPlaneInput.setAttribute('type', 'checkbox');
    toggleForPlaneInput.classList.add('planeToggle');
    toggleForPlaneInput.id = 'planeToggle';
    var toggleForPlaneSpan = document.createElement('span');
    toggleForPlaneSpan.classList.add('customToggleSliderBorder');
    var mainSliderContainer = document.createElement('div');
    mainSliderContainer.classList.add('sliderMenuContainer');
    mainSliderContainer.append(sliderValueP);
    sliderValueP.append(minSliderValueOutput);
    sliderValueP.append(maxSliderValueOutput);
    mainSliderContainer.append(sliderToggleP);
    mainSliderContainer.append(sliderToggleLabel);
    sliderToggleLabel.append(maxSliderHandelToggle, customSliderBorder);
    customSliderInputs.append(customSliderInputsP, customSliderInputsMinLabel, customSliderInputsMin, customSliderInputsMaxLabel, customSliderInputsMax);
    mainSliderContainer.append(customSliderInputs);
    toggleForValuesContainer.append(toggleForValuesP, toggleForValuesLabel);
    toggleForValuesLabel.append(toggleForValuesInput, toggleForValuesSpan);
    mainSliderContainer.append(toggleForValuesContainer);
    toggleForPlaneContainer.append(toggleForPlaneP, toggleForPlaneLabel);
    toggleForPlaneLabel.append(toggleForPlaneInput, toggleForPlaneSpan);
    mainSliderContainer.append(toggleForPlaneContainer);
    this.customSliderMenuContainer = mainSliderContainer;
    this.handelToggle = maxSliderHandelToggle;
    this.handelLabelToggle = toggleForValuesInput;
    this.planeToggle = toggleForPlaneInput;
    this.minInput = customSliderInputsMin;
    this.maxInput = customSliderInputsMax;
  }

  _createClass(SideMenu, [{
    key: "getElements",
    value: function getElements() {
      return {
        menu: this.customSliderMenuContainer,
        handelToggle: this.handelToggle,
        handelLabelToggle: this.handelLabelToggle,
        planeToggle: this.planeToggle,
        minInput: this.minInput,
        maxInput: this.maxInput
      };
    }
  }]);

  return SideMenu;
}();
;

/***/ }),

/***/ "./src/components/view/components/slider-movement.ts":
/*!***********************************************************!*\
  !*** ./src/components/view/components/slider-movement.ts ***!
  \***********************************************************/
/*! exports provided: SliderMovement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderMovement", function() { return SliderMovement; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SliderMovement = /*#__PURE__*/function () {
  function SliderMovement(handels) {
    _classCallCheck(this, SliderMovement);

    _defineProperty(this, "min", void 0);

    _defineProperty(this, "max", void 0);

    _defineProperty(this, "minLabel", void 0);

    _defineProperty(this, "maxLabel", void 0);

    _defineProperty(this, "sliderRange", void 0);

    _defineProperty(this, "handelsToggle", void 0);

    _defineProperty(this, "planeToggle", void 0);

    _defineProperty(this, "interval", void 0);

    _defineProperty(this, "step", void 0);

    _defineProperty(this, "stepAmount", void 0);

    _defineProperty(this, "myData", {
      'min': {},
      'max': {}
    });

    this.min = handels.min;
    this.max = handels.max;
    this.minLabel = handels.minLabel;
    this.maxLabel = handels.maxLabel;
    this.sliderRange = handels.sliderRange;
    this.handelsToggle = handels.handelsToggle;
    this.planeToggle = handels.planeToggle;
    this.interval = handels.interval;
    this.step = handels.step;
  }

  _createClass(SliderMovement, [{
    key: "startHandlersPositions",
    value: function startHandlersPositions(positionValues) {
      var min = (this.sliderRange.offsetWidth - this.min.offsetWidth) / +positionValues.positions * (+positionValues['min'] - +positionValues['minimum']) + '';
      var max = (this.sliderRange.offsetWidth - this.min.offsetWidth) / +positionValues.positions * (+positionValues['max'] - +positionValues['minimum']) + '';
      this.myData.min.min = min;
      this.myData.max.max = max;
      this.min.style.left = min + 'px';
      this.max.style.left = max + 'px';
      this.interval.style.left = +min + this.min.offsetWidth / 2 + 'px';
      this.interval.style.right = this.sliderRange.offsetWidth - +max - this.min.offsetWidth / 2 + 'px';
    }
  }, {
    key: "minHandelListener",
    value: function minHandelListener(event, test) {
      var min = this.min;
      var max = this.max;
      var minLabel = this.minLabel;
      var sliderRange = this.sliderRange;
      var that = this;
      var shift;
      var doubleHandels;
      var vertical;

      if (typeof this.handelsToggle === 'boolean' && typeof this.planeToggle === 'boolean') {
        doubleHandels = this.handelsToggle;
        vertical = this.planeToggle;
      } else {
        doubleHandels = this.handelsToggle.checked;
        vertical = this.planeToggle.checked;
      }

      ;
      var interval = this.interval;
      var step;

      if (this.step !== false) {
        step = (sliderRange.offsetWidth - min.offsetWidth) / this.stepAmount * +this.step;
      }

      if (vertical) {
        shift = event.clientY - min.getBoundingClientRect().top - min.offsetWidth;
      } else {
        shift = event.clientX - min.getBoundingClientRect().left;
      }

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      if (test !== undefined) {
        onMouseMove(test);
      }

      ;

      function onMouseMove(event) {
        var newLeft;

        if (vertical) {
          newLeft = sliderRange.offsetWidth - (event.clientY - shift - sliderRange.getBoundingClientRect().top);
        } else {
          newLeft = event.clientX - shift - sliderRange.getBoundingClientRect().left;
        }

        ;
        var rightEdge = sliderRange.offsetWidth - min.offsetWidth;

        if (that.step !== false) {
          if (newLeft >= +that.myData.min.min + step || newLeft <= +that.myData.min.min - step) {
            newLeft >= +that.myData.min.min + step ? newLeft = +that.myData.min.min + step : false;
            newLeft <= +that.myData.min.min - step ? newLeft = +that.myData.min.min - step : false;
            renewalOfPosition();
          }
        } else {
          renewalOfPosition();
        }

        ;

        function renewalOfPosition() {
          if (newLeft < 0) {
            newLeft = 0;
          }

          ;

          if (doubleHandels) {
            if (newLeft >= +that.myData.max['max'] - max.offsetWidth) {
              newLeft = +that.myData.max['max'] - max.offsetWidth;
            }

            ;
          } else {
            if (newLeft > rightEdge) {
              newLeft = rightEdge;
            }

            ;
          }

          ;
          min.style.left = newLeft + 'px';
          interval.style.left = newLeft + min.offsetWidth / 2 + 'px';

          if (newLeft !== undefined || rightEdge !== undefined) {
            that.myData['min'] = {
              'min': "".concat(newLeft),
              'sliderWidth': "".concat(sliderRange.offsetWidth - min.offsetWidth)
            };
          }

          ;
          minLabel.style.left = (min.offsetWidth - minLabel.offsetWidth - 1) / 2 + 'px';
        }
      }

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }
    }
  }, {
    key: "maxHandelListener",
    value: function maxHandelListener(event, test) {
      var max = this.max;
      var min = this.min;
      var sliderRange = this.sliderRange;
      var shift;
      var maxLabel = this.maxLabel;
      var that = this;
      var doubleHandels;
      var vertical;

      if (typeof this.handelsToggle === 'boolean' && typeof this.planeToggle === 'boolean') {
        doubleHandels = this.handelsToggle;
        vertical = this.planeToggle;
      } else {
        doubleHandels = this.handelsToggle.checked;
        vertical = this.planeToggle.checked;
      }

      ;
      var interval = this.interval;
      var step;

      if (this.step !== false) {
        step = (sliderRange.offsetWidth - min.offsetWidth) / this.stepAmount * +this.step;
      }

      if (vertical) {
        shift = event.clientY - max.getBoundingClientRect().top - max.offsetWidth;
      } else {
        shift = event.clientX - max.getBoundingClientRect().left;
      }

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      if (test !== undefined) {
        onMouseMove(test);
      }

      ;

      function onMouseMove(event) {
        var newLeft;

        if (vertical) {
          newLeft = sliderRange.offsetWidth - (event.clientY - shift - sliderRange.getBoundingClientRect().top);
        } else {
          newLeft = event.clientX - shift - sliderRange.getBoundingClientRect().left;
        }

        var rightEdge = sliderRange.offsetWidth - max.offsetWidth;

        if (that.step !== false) {
          if (newLeft >= +that.myData.max.max + step || newLeft <= +that.myData.max.max - step) {
            newLeft >= +that.myData.max.max + step ? newLeft = +that.myData.max.max + step : false;
            newLeft <= +that.myData.max.max - step ? newLeft = +that.myData.max.max - step : false;
            renewalOfPosition();
          }
        } else {
          renewalOfPosition();
        }

        ;

        function renewalOfPosition() {
          if (newLeft < 0) {
            newLeft = 0;
          }

          ;

          if (newLeft > rightEdge) {
            newLeft = rightEdge;
          }

          ;

          if (newLeft <= +that.myData.min['min'] + min.offsetWidth) {
            newLeft = +that.myData.min['min'] + min.offsetWidth;
          }

          ;
          max.style.left = newLeft + 'px';
          interval.style.right = sliderRange.offsetWidth - newLeft - max.offsetWidth / 2 + 'px';

          if (newLeft !== undefined || rightEdge !== undefined) {
            that.myData['max'] = {
              'max': "".concat(newLeft),
              'sliderWidth': "".concat(sliderRange.offsetWidth - max.offsetWidth)
            };
          }

          ;
          maxLabel.style.left = (max.offsetWidth - maxLabel.offsetWidth - 1) / 2 + 'px';
        }

        ;
      }

      ;

      function onMouseUp() {
        document.removeEventListener('mouseup', onMouseUp);
        document.removeEventListener('mousemove', onMouseMove);
      }
    }
  }, {
    key: "changePlane",
    value: function changePlane(toggle, body, minValue, maxValue) {
      if (toggle.checked || toggle === true) {
        body.style.height = body.offsetWidth + 'px';
        this.sliderRange.style.transform = 'rotate(-90deg)';
        this.sliderRange.style.top = body.offsetWidth / 2 + 'px';
        this.minLabel.classList.remove('minSliderHandelLabel');
        this.maxLabel.classList.remove('maxSliderHandelLabel');
        this.minLabel.classList.add('minSliderHandelLabelVertical');
        this.maxLabel.classList.add('maxSliderHandelLabelVertical');
        minValue.classList.remove('minSliderPoint');
        maxValue.classList.remove('maxSliderPoint');
        minValue.classList.add('minSliderPointVertical');
        maxValue.classList.add('maxSliderPointVertical');
      } else {
        body.style.height = '';
        this.sliderRange.style.transform = 'rotate(0deg)';
        this.sliderRange.style.top = '';
        this.minLabel.classList.remove('minSliderHandelLabelVertical');
        this.maxLabel.classList.remove('maxSliderHandelLabelVertical');
        this.minLabel.classList.add('minSliderHandelLabel');
        this.maxLabel.classList.add('maxSliderHandelLabel');
        minValue.classList.remove('minSliderPointVertical');
        maxValue.classList.remove('maxSliderPointVertical');
        minValue.classList.add('minSliderPoint');
        maxValue.classList.add('maxSliderPoint');
      }

      ;
    }
  }, {
    key: "selectionOfPreparedValue",
    value: function selectionOfPreparedValue(target) {
      if (target === 'min') {
        this.myData['min'] = {
          'min': '0',
          'sliderWidth': "".concat(this.sliderRange.offsetWidth - this.min.offsetWidth)
        };
        this.min.style.left = '0px';
        this.interval.style.left = 0 + this.min.offsetWidth / 2 + 'px';
      } else {
        if (this.handelsToggle.checked === true || this.handelsToggle === true) {
          this.myData['max'] = {
            'max': "".concat(this.sliderRange.offsetWidth - this.min.offsetWidth),
            'sliderWidth': "".concat(this.sliderRange.offsetWidth - this.min.offsetWidth)
          };
          this.max.style.left = this.sliderRange.offsetWidth - this.min.offsetWidth + 'px';
          this.interval.style.right = this.sliderRange.offsetWidth - this.sliderRange.offsetWidth + this.min.offsetWidth / 2 + 'px';
        } else {
          this.myData['min'] = {
            'min': "".concat(this.sliderRange.offsetWidth - this.min.offsetWidth),
            'sliderWidth': "".concat(this.sliderRange.offsetWidth - this.min.offsetWidth)
          };
          this.min.style.left = this.sliderRange.offsetWidth - this.min.offsetWidth + 'px';
          this.interval.style.left = this.sliderRange.offsetWidth - this.min.offsetWidth + this.min.offsetWidth / 2 + 'px';
        }
      }
    }
  }, {
    key: "sideMenuInputsValuesValidationChecker",
    value: function sideMenuInputsValuesValidationChecker(target, value, positions, minimum) {
      if (target === 'min' && this.handelsToggle.checked) {
        var min = (this.sliderRange.offsetWidth - this.min.offsetWidth) / positions * (value - minimum) + '';

        if (+min >= +this.myData.max.max - this.min.offsetWidth) {
          min = +this.myData.max.max - this.min.offsetWidth + '';
        } else if (+min < 0) {
          min = '0';
        }

        ;
        this.myData['min'] = {
          'min': min,
          'sliderWidth': "".concat(this.sliderRange.offsetWidth - this.min.offsetWidth)
        };
        this.min.style.left = min + 'px';
        this.interval.style.left = +min + this.min.offsetWidth / 2 + 'px';
      } else if (target === 'min') {
        var _min = (this.sliderRange.offsetWidth - this.min.offsetWidth) / positions * (value - minimum) + '';

        if (+_min < 0) {
          _min = '0';
        } else if (+_min > this.sliderRange.offsetWidth - this.min.offsetWidth) {
          _min = this.sliderRange.offsetWidth - this.min.offsetWidth + '';
        }

        ;
        this.myData['min'] = {
          'min': _min,
          'sliderWidth': "".concat(this.sliderRange.offsetWidth - this.min.offsetWidth)
        };
        this.min.style.left = _min + 'px';
        this.interval.style.left = +_min + this.min.offsetWidth / 2 + 'px';
      } else if (target === 'max') {
        var max = (this.sliderRange.offsetWidth - this.max.offsetWidth) / positions * (value - minimum) + '';

        if (+max <= +this.myData.min.min + this.min.offsetWidth) {
          max = +this.myData.min.min + this.max.offsetWidth + '';
        } else if (+max > this.sliderRange.offsetWidth - this.min.offsetWidth) {
          max = this.sliderRange.offsetWidth - this.min.offsetWidth + '';
        }

        ;
        this.myData['max'] = {
          'max': max,
          'sliderWidth': "".concat(this.sliderRange.offsetWidth - this.max.offsetWidth)
        };
        this.max.style.left = max + 'px';
        this.interval.style.right = this.sliderRange.offsetWidth - +max - this.min.offsetWidth / 2 + 'px';
      }
    }
  }]);

  return SliderMovement;
}();
;

/***/ }),

/***/ "./src/components/view/components/slider-range.ts":
/*!********************************************************!*\
  !*** ./src/components/view/components/slider-range.ts ***!
  \********************************************************/
/*! exports provided: SliderRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SliderRange", function() { return SliderRange; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SliderRange = /*#__PURE__*/function () {
  function SliderRange() {
    _classCallCheck(this, SliderRange);

    _defineProperty(this, "range", void 0);

    var elem = document.createElement('div');
    elem.classList.add('sliderRange');
    this.range = elem;
  }

  _createClass(SliderRange, [{
    key: "getElements",
    value: function getElements() {
      return this.range;
    }
  }]);

  return SliderRange;
}();
;

/***/ }),

/***/ "./src/components/view/components/valueRange.ts":
/*!******************************************************!*\
  !*** ./src/components/view/components/valueRange.ts ***!
  \******************************************************/
/*! exports provided: ValueRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueRange", function() { return ValueRange; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ValueRange = /*#__PURE__*/function () {
  function ValueRange(values) {
    _classCallCheck(this, ValueRange);

    _defineProperty(this, "minValue", void 0);

    _defineProperty(this, "maxValue", void 0);

    var min = document.createElement('p');
    var max = document.createElement('p');
    min.innerText = values.min;
    max.innerText = values.max;
    min.classList.add('minSliderPoint');
    max.classList.add('maxSliderPoint');
    this.minValue = min;
    this.maxValue = max;
  }

  _createClass(ValueRange, [{
    key: "getElements",
    value: function getElements() {
      return {
        min: this.minValue,
        max: this.maxValue
      };
    }
  }]);

  return ValueRange;
}();

/***/ }),

/***/ "./src/components/view/view.ts":
/*!*************************************!*\
  !*** ./src/components/view/view.ts ***!
  \*************************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View", function() { return View; });
/* harmony import */ var _components_slider_range_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/slider-range.ts */ "./src/components/view/components/slider-range.ts");
/* harmony import */ var _components_handels_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/handels.ts */ "./src/components/view/components/handels.ts");
/* harmony import */ var _components_slider_movement_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/slider-movement.ts */ "./src/components/view/components/slider-movement.ts");
/* harmony import */ var _components_side_menu_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/side-menu.ts */ "./src/components/view/components/side-menu.ts");
/* harmony import */ var _components_valueRange_ts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/valueRange.ts */ "./src/components/view/components/valueRange.ts");
/* harmony import */ var _components_handels_labels_ts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/handels-labels.ts */ "./src/components/view/components/handels-labels.ts");
/* harmony import */ var _components_selected_range_ts__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/selected-range.ts */ "./src/components/view/components/selected-range.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }








;
;
;
var View = /*#__PURE__*/function () {
  function View(target, settings) {
    _classCallCheck(this, View);

    _defineProperty(this, "that", void 0);

    _defineProperty(this, "settings", void 0);

    _defineProperty(this, "sliderRange", void 0);

    _defineProperty(this, "sliderContainer", void 0);

    _defineProperty(this, "minHandel", void 0);

    _defineProperty(this, "maxHandel", void 0);

    _defineProperty(this, "sliderMovement", void 0);

    _defineProperty(this, "sideMenu", void 0);

    _defineProperty(this, "sideMenuContainer", void 0);

    _defineProperty(this, "minValue", void 0);

    _defineProperty(this, "maxValue", void 0);

    _defineProperty(this, "minLabel", void 0);

    _defineProperty(this, "maxLabel", void 0);

    _defineProperty(this, "handelToggle", void 0);

    _defineProperty(this, "handelLabelToggle", void 0);

    _defineProperty(this, "planeToggle", void 0);

    _defineProperty(this, "minInput", void 0);

    _defineProperty(this, "maxInput", void 0);

    _defineProperty(this, "interval", void 0);

    this.settings = settings;
    this.that = target;
    this.sliderRange = new _components_slider_range_ts__WEBPACK_IMPORTED_MODULE_0__["SliderRange"]().getElements();
    this.minHandel = new _components_handels_ts__WEBPACK_IMPORTED_MODULE_1__["Handels"]().getElements().min;
    this.maxHandel = new _components_handels_ts__WEBPACK_IMPORTED_MODULE_1__["Handels"]().getElements().max;
    this.minValue = new _components_valueRange_ts__WEBPACK_IMPORTED_MODULE_4__["ValueRange"]({
      'min': this.settings['min'],
      'max': this.settings['max']
    }).getElements().min;
    this.maxValue = new _components_valueRange_ts__WEBPACK_IMPORTED_MODULE_4__["ValueRange"]({
      'min': this.settings['min'],
      'max': this.settings['max']
    }).getElements().max;

    if (settings['side-menu'] === true) {
      var sideMenuElements = new _components_side_menu_ts__WEBPACK_IMPORTED_MODULE_3__["SideMenu"]().getElements();
      this.sideMenu = sideMenuElements.menu;
      this.handelToggle = sideMenuElements.handelToggle;
      this.handelLabelToggle = sideMenuElements.handelLabelToggle;
      this.planeToggle = sideMenuElements.planeToggle;
      this.minInput = sideMenuElements.minInput;
      this.maxInput = sideMenuElements.maxInput;
    }

    ;
    this.sideMenuContainer = settings.sideMenuContainer;
    this.minLabel = new _components_handels_labels_ts__WEBPACK_IMPORTED_MODULE_5__["HandelsLabels"]().getElements().min;
    this.maxLabel = new _components_handels_labels_ts__WEBPACK_IMPORTED_MODULE_5__["HandelsLabels"]().getElements().max;
    this.interval = new _components_selected_range_ts__WEBPACK_IMPORTED_MODULE_6__["SelectedRange"]().getElements();

    if (this.settings['side-menu'] !== false) {
      this.sliderMovement = new _components_slider_movement_ts__WEBPACK_IMPORTED_MODULE_2__["SliderMovement"]({
        'min': this.minHandel,
        'max': this.maxHandel,
        'minLabel': this.minLabel,
        'maxLabel': this.maxLabel,
        'sliderRange': this.sliderRange,
        'planeToggle': this.planeToggle,
        'handelsToggle': this.handelToggle,
        'interval': this.interval,
        'step': this.settings.step
      });
    } else {
      this.sliderMovement = new _components_slider_movement_ts__WEBPACK_IMPORTED_MODULE_2__["SliderMovement"]({
        'min': this.minHandel,
        'max': this.maxHandel,
        'minLabel': this.minLabel,
        'maxLabel': this.maxLabel,
        'sliderRange': this.sliderRange,
        'planeToggle': this.settings.vertical,
        'handelsToggle': this.settings.range,
        'interval': this.interval,
        'step': this.settings.step
      });
    }

    ;
  }

  _createClass(View, [{
    key: "displayElements",
    value: function displayElements() {
      var container = document.createElement('div');
      this.sliderContainer = container;
      container.classList.add('sliderBody');
      container.append(this.sliderRange);
      this.that.append(container);
      this.sliderRange.append(this.minHandel);
      this.sliderRange.append(this.maxHandel);
      this.sliderRange.append(this.minValue);
      this.sliderRange.append(this.maxValue);
      this.interval.style.height = this.sliderRange.offsetHeight + 'px';
      this.sliderRange.append(this.interval);
      this.minHandel.append(this.minLabel);
      this.maxHandel.append(this.maxLabel);

      if (this.settings['handelsLabel'] === false) {
        this.minLabel.style.display = 'none';
        this.maxLabel.style.display = 'none';
      } else {
        if (this.settings['side-menu'] !== false) {
          this.handelLabelToggle.checked = true;
        }

        ;
      }

      ;

      if (this.settings['side-menu'] !== false) {
        if (this.sideMenuContainer !== 'false') {
          document.querySelector(this.sideMenuContainer).append(this.sideMenu);
        } else {
          this.that.append(this.sideMenu);
        }

        ;
      }

      ;

      if (this.settings["range"] === true) {
        this.maxHandel.style.display = 'block';
        this.interval.style.display = 'block';

        if (this.settings['side-menu'] !== false) {
          this.handelToggle.checked = true;
          this.maxInput.style.opacity = '1';
        }

        ;
      }

      ;

      if (this.settings['vertical'] === true) {
        if (this.settings['side-menu'] !== false) {
          this.planeToggle.checked = true;
          this.sliderMovement.changePlane(this.planeToggle, this.sliderContainer, this.minValue, this.maxValue);
        } else {
          this.sliderMovement.changePlane(true, this.sliderContainer, this.minValue, this.maxValue);
        }

        ;
      }

      ;

      if (this.settings.step !== false && this.settings['side-menu'] !== false) {
        this.maxInput.setAttribute('step', this.settings.step + "");
        this.minInput.setAttribute('step', this.settings.step + "");
      }

      ;
    }
  }, {
    key: "refreshCurrentValues",
    value: function refreshCurrentValues(newData) {
      var sett = this.settings['range'];

      function refreshCurrentValuesMultiCheck(settings) {
        return 'min' in newData && 'max' in newData && settings === true;
      }

      if (refreshCurrentValuesMultiCheck(sett)) {
        if (this.settings['side-menu'] !== false && this.handelToggle.checked === true) {
          this.sideMenu.querySelector('#minSliderValue').textContent = newData.min;
          this.sideMenu.querySelector('#maxSliderValue').textContent = " - ".concat(newData.max);
          this.sideMenu.querySelector('.customSliderMinInput').value = newData.min;
          this.sideMenu.querySelector('.customSliderMaxInput').value = newData.max;
        }

        ;
        this.minLabel.textContent = newData.min;
        this.maxLabel.textContent = newData.max;
      } else if ('min' in newData) {
        this.minLabel.textContent = newData.min;

        if (this.settings['side-menu'] !== false) {
          this.sideMenu.querySelector('#minSliderValue').textContent = newData.min;
          ;
          this.sideMenu.querySelector('.customSliderMinInput').value = newData.min;
        }

        ;
      } else {
        this.maxLabel.textContent = newData.max;

        if (this.settings['side-menu'] !== false) {
          this.sideMenu.querySelector('#maxSliderValue').textContent = " - ".concat(newData.max);
          this.sideMenu.querySelector('.customSliderMaxInput').value = newData.max;
        }

        ;
      }

      ;
      new _components_handels_labels_ts__WEBPACK_IMPORTED_MODULE_5__["HandelsLabels"]().centeringRelativeToHandles(this.minHandel.offsetWidth, this.maxHandel.offsetWidth, this.minLabel.offsetWidth, this.maxLabel.offsetWidth, this.minLabel, this.maxLabel);
    }
  }, {
    key: "callHandelLabelToggleChanger",
    value: function callHandelLabelToggleChanger(target) {
      new _components_handels_labels_ts__WEBPACK_IMPORTED_MODULE_5__["HandelsLabels"]().displayController(target.handelLabelToggle, this.minLabel, this.maxLabel);

      if (target.handelLabelToggle.checked === true) {
        new _components_handels_labels_ts__WEBPACK_IMPORTED_MODULE_5__["HandelsLabels"]().centeringRelativeToHandles(this.minHandel.offsetWidth, this.maxHandel.offsetWidth, this.minLabel.offsetWidth, this.maxLabel.offsetWidth, this.minLabel, this.maxLabel);
      }

      ;
    }
  }, {
    key: "callMaxHandelToggleChanger",
    value: function callMaxHandelToggleChanger(target) {
      if (target.handelToggle.checked === false) {
        this.sliderMovement.myData['max'] = {
          'max': "".concat(this.sliderRange.offsetWidth - this.minHandel.offsetWidth),
          'sliderWidth': "".concat(this.sliderRange.offsetWidth - this.minHandel.offsetWidth)
        };
        this.maxHandel.style.left = "".concat(this.sliderRange.offsetWidth - this.minHandel.offsetWidth, "px");
        this.sideMenu.querySelector('#maxSliderValue').textContent = '';
        this.maxInput.setAttribute('readonly', '');
        this.maxInput.value = '';
        this.maxInput.style.opacity = '0.3';
        this.interval.style.display = 'none';
      }

      ;
      new _components_handels_ts__WEBPACK_IMPORTED_MODULE_1__["Handels"]().displayController(target.handelToggle, this.maxHandel);

      if (target.handelToggle.checked === true) {
        this.maxInput.removeAttribute('readonly');
        this.interval.style.display = 'block';
        this.interval.style.right = this.sliderRange.offsetWidth - (this.sliderRange.offsetWidth - this.minHandel.offsetWidth / 2) + 'px';

        if (this.sliderMovement.myData.min['min'] >= this.sliderRange.offsetWidth - this.maxHandel.offsetWidth - this.minHandel.offsetWidth) {
          this.sliderMovement.myData['min'] = {
            'min': "".concat(this.sliderRange.offsetWidth - this.maxHandel.offsetWidth - this.minHandel.offsetWidth),
            'sliderWidth': "".concat(this.sliderRange.offsetWidth - this.maxHandel.offsetWidth)
          };
          this.minHandel.style.left = "".concat(this.sliderRange.offsetWidth - this.maxHandel.offsetWidth - this.minHandel.offsetWidth, "px");
        }

        ;
      }

      ;
    }
  }, {
    key: "refreshMaxSideMenuData",
    value: function refreshMaxSideMenuData(data) {
      this.sideMenu.querySelector('#maxSliderValue').textContent = " - ".concat(data);
      this.maxInput.style.opacity = '1';
      this.maxInput.value = "".concat(data);
    }
  }, {
    key: "inputsPossibleRange",
    value: function inputsPossibleRange(data, min, max) {
      min.setAttribute('max', data.max);
      min.setAttribute('min', data.min);
      max.setAttribute('max', data.max);
    }
  }]);

  return View;
}();
;

/***/ }),

/***/ "./src/jquery.ui.customSlider.ts":
/*!***************************************!*\
  !*** ./src/jquery.ui.customSlider.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_view_view_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/view/view.ts */ "./src/components/view/view.ts");
/* harmony import */ var _components_model_Model_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/model/Model.ts */ "./src/components/model/Model.ts");
/* harmony import */ var _components_model_facade_ts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/model/facade.ts */ "./src/components/model/facade.ts");
/* harmony import */ var _components_presenter_presenter_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/presenter/presenter.ts */ "./src/components/presenter/presenter.ts");





(function ($) {
  $.fn.testSlider = function (options) {
    var settings = $.extend({
      'min': '0',
      'max': '10',
      'range': false,
      'side-menu': false,
      'handelsLabel': false,
      'vertical': false,
      'step': false,
      'sideMenuContainer': 'false'
    }, options);
    var that = this;
    var model;

    if ('current-min' in settings && 'current-max' in settings) {
      model = new _components_model_Model_ts__WEBPACK_IMPORTED_MODULE_1__["Model"]({
        'min': settings['min'],
        max: settings['max'],
        'current-min': settings['current-min'],
        'current-max': settings['current-max']
      });
    } else if ('current-min' in settings) {
      model = new _components_model_Model_ts__WEBPACK_IMPORTED_MODULE_1__["Model"]({
        'min': settings['min'],
        max: settings['max'],
        'current-min': settings['current-min'],
        'current-max': settings['max']
      });
    } else if ('current-max' in settings) {
      model = new _components_model_Model_ts__WEBPACK_IMPORTED_MODULE_1__["Model"]({
        'min': settings['min'],
        max: settings['max'],
        'current-min': settings['min'],
        'current-max': settings['current-max']
      });
    } else {
      model = new _components_model_Model_ts__WEBPACK_IMPORTED_MODULE_1__["Model"]({
        'min': settings['min'],
        max: settings['max'],
        'current-min': settings['min'],
        'current-max': settings['max']
      });
    }

    var view = new _components_view_view_ts__WEBPACK_IMPORTED_MODULE_0__["View"](that, settings);
    var facade = new _components_model_facade_ts__WEBPACK_IMPORTED_MODULE_2__["Facade"](model);
    var presenter = new _components_presenter_presenter_ts__WEBPACK_IMPORTED_MODULE_3__["Presenter"](view, facade);
    presenter.bindEventListeners();
  };
})(jQuery);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwvTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwvZmFjYWRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRlci9wcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL2hhbmRlbHMtbGFiZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9oYW5kZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9zZWxlY3RlZC1yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NvbXBvbmVudHMvc2lkZS1tZW51LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9zbGlkZXItbW92ZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL3NsaWRlci1yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NvbXBvbmVudHMvdmFsdWVSYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L3ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pxdWVyeS51aS5jdXN0b21TbGlkZXIudHMiXSwibmFtZXMiOlsiTW9kZWwiLCJzZXR0aW5ncyIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJtaW4iLCJtYXgiLCJGYWNhZGUiLCJtb2RlbCIsImdldEN1cnJlbnREYXRhIiwicHJvcCIsIk1hdGgiLCJyb3VuZCIsIlByZXNlbnRlciIsInZpZXciLCJmYWNhZGUiLCJ2aWV3TGluayIsImZhY2FkZUxpbmsiLCJkaXNwbGF5RWxlbWVudHMiLCJ0cmFja2luZ1JlY29yZEluTXlEYXRhIiwicmVjb3JkaW5nVGhlUG9zaXRpb25zVmFsdWVzRm9yVmlldyIsImJpbmRMaXN0ZW5lckZvck1pbiIsImJpbmRMaXN0ZW5lckZvck1heCIsImhhbmRlbExhYmVsVG9nZ2xlIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1ha2VCaW5kTGlzdGVuZXJGb3JMYWJlbFRvZ2dsZSIsImhhbmRlbFRvZ2dsZSIsIm1ha2VCaW5kTGlzdGVuZXJGb3JEb3VibGVIYW5kZWxzIiwicGxhbmVUb2dnbGUiLCJtYWtlQmluZExpc3RlbmVyRm9yUGxhbmVUb2dnbGUiLCJtaW5WYWx1ZSIsIm1ha2VCaW5kTGlzdGVuZXJGb3JTZWxlY3Rpb25NaW5WYWx1ZSIsIm1heFZhbHVlIiwibWFrZUJpbmRMaXN0ZW5lckZvclNlbGVjdGlvbk1heFZhbHVlIiwibWluSW5wdXQiLCJtYWtlQmluZExpc3RlbmVyRm9yTWluSW5wdXQiLCJtYXhJbnB1dCIsIm1ha2VCaW5kTGlzdGVuZXJGb3JNYXhJbnB1dCIsInBvc3NpYmxlUmFuZ2VGb3JWaWV3Iiwic2V0dGluZ1N0YXJ0aW5nUG9zaXRpb25zIiwic2xpZGVyTW92ZW1lbnQiLCJteURhdGEiLCJQcm94eSIsInNldCIsInRhcmdldCIsInZhbCIsIm1vZGVsUmVzdWx0IiwicmVmcmVzaE1vZGVsRGF0YSIsInJlZnJlc2hDdXJyZW50VmFsdWVzIiwic3RlcCIsInN0ZXBBbW91bnQiLCJnZXRQb3NpdGlvbnNBbW91bnQiLCJtaW5IYW5kZWwiLCJvbm1vdXNlZG93biIsImV2ZW50IiwibWluSGFuZGVsTGlzdGVuZXIiLCJtYXhIYW5kZWwiLCJtYXhIYW5kZWxMaXN0ZW5lciIsInNlbGZWaWV3IiwiY2FsbEhhbmRlbExhYmVsVG9nZ2xlQ2hhbmdlciIsInNlbGZGYWNhZGUiLCJjYWxsTWF4SGFuZGVsVG9nZ2xlQ2hhbmdlciIsImNoZWNrZWQiLCJyZXN1bHQiLCJnZXRNYXhEYXRhIiwicmVmcmVzaE1heFNpZGVNZW51RGF0YSIsImNoYW5nZVBsYW5lIiwic2xpZGVyQ29udGFpbmVyIiwic2VsZWN0aW9uT2ZQcmVwYXJlZFZhbHVlIiwicG9zaXRpb25zIiwic2lkZU1lbnVJbnB1dHNWYWx1ZXNWYWxpZGF0aW9uQ2hlY2tlciIsInZhbHVlIiwicG9zc2libGVSYW5nZSIsImdldFBvc3NpYmxlUmFuZ2UiLCJpbnB1dHNQb3NzaWJsZVJhbmdlIiwic3RhcnRQb3NpdGlvbnMiLCJzdGFydEhhbmRlbHNQb3NpdGlvbiIsInN0YXJ0SGFuZGxlcnNQb3NpdGlvbnMiLCJIYW5kZWxzTGFiZWxzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibWluTGFiZWwiLCJtYXhMYWJlbCIsInRvZ2dsZSIsInN0eWxlIiwiZGlzcGxheSIsIm1pbkhhbmRlbFdpZHRoIiwibWF4SGFuZGVsV2lkdGgiLCJtaW5MYWJlbFdpZHRoIiwibWF4TGFiZWxXaWR0aCIsImxlZnQiLCJIYW5kZWxzIiwiU2VsZWN0ZWRSYW5nZSIsImludGVydmFsIiwiU2lkZU1lbnUiLCJzbGlkZXJWYWx1ZVAiLCJpbm5lclRleHQiLCJtaW5TbGlkZXJWYWx1ZU91dHB1dCIsImlkIiwibWF4U2xpZGVyVmFsdWVPdXRwdXQiLCJzbGlkZXJUb2dnbGVQIiwic2xpZGVyVG9nZ2xlTGFiZWwiLCJtYXhTbGlkZXJIYW5kZWxUb2dnbGUiLCJzZXRBdHRyaWJ1dGUiLCJjdXN0b21TbGlkZXJCb3JkZXIiLCJjdXN0b21TbGlkZXJJbnB1dHMiLCJjdXN0b21TbGlkZXJJbnB1dHNQIiwiY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWwiLCJjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbCIsImN1c3RvbVNsaWRlcklucHV0c01pbiIsImN1c3RvbVNsaWRlcklucHV0c01heCIsInRvZ2dsZUZvclZhbHVlc0NvbnRhaW5lciIsInRvZ2dsZUZvclZhbHVlc1AiLCJ0b2dnbGVGb3JWYWx1ZXNMYWJlbCIsInRvZ2dsZUZvclZhbHVlc0lucHV0IiwidG9nZ2xlRm9yVmFsdWVzU3BhbiIsInRvZ2dsZUZvclBsYW5lQ29udGFpbmVyIiwidG9nZ2xlRm9yUGxhbmVQIiwidG9nZ2xlRm9yUGxhbmVMYWJlbCIsInRvZ2dsZUZvclBsYW5lSW5wdXQiLCJ0b2dnbGVGb3JQbGFuZVNwYW4iLCJtYWluU2xpZGVyQ29udGFpbmVyIiwiYXBwZW5kIiwiY3VzdG9tU2xpZGVyTWVudUNvbnRhaW5lciIsIm1lbnUiLCJTbGlkZXJNb3ZlbWVudCIsImhhbmRlbHMiLCJzbGlkZXJSYW5nZSIsImhhbmRlbHNUb2dnbGUiLCJwb3NpdGlvblZhbHVlcyIsIm9mZnNldFdpZHRoIiwicmlnaHQiLCJ0ZXN0IiwidGhhdCIsInNoaWZ0IiwiZG91YmxlSGFuZGVscyIsInZlcnRpY2FsIiwiY2xpZW50WSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImNsaWVudFgiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsInVuZGVmaW5lZCIsIm5ld0xlZnQiLCJyaWdodEVkZ2UiLCJyZW5ld2FsT2ZQb3NpdGlvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJib2R5IiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwicmVtb3ZlIiwibWluaW11bSIsIlNsaWRlclJhbmdlIiwiZWxlbSIsInJhbmdlIiwiVmFsdWVSYW5nZSIsInZhbHVlcyIsIlZpZXciLCJnZXRFbGVtZW50cyIsInNpZGVNZW51RWxlbWVudHMiLCJzaWRlTWVudSIsInNpZGVNZW51Q29udGFpbmVyIiwiY29udGFpbmVyIiwib2Zmc2V0SGVpZ2h0IiwicXVlcnlTZWxlY3RvciIsIm9wYWNpdHkiLCJuZXdEYXRhIiwic2V0dCIsInJlZnJlc2hDdXJyZW50VmFsdWVzTXVsdGlDaGVjayIsInRleHRDb250ZW50IiwiY2VudGVyaW5nUmVsYXRpdmVUb0hhbmRsZXMiLCJkaXNwbGF5Q29udHJvbGxlciIsInJlbW92ZUF0dHJpYnV0ZSIsIiQiLCJmbiIsInRlc3RTbGlkZXIiLCJvcHRpb25zIiwiZXh0ZW5kIiwicHJlc2VudGVyIiwiYmluZEV2ZW50TGlzdGVuZXJz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R0MsTUFsQ0gsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanF1ZXJ5LnVpLmN1c3RvbVNsaWRlci50c1wiKTtcbiIsImltcG9ydCB7IElEYXRhIH0gZnJvbSAnLi9kYXRhSW50ZXJmYWNlLnRzJztcclxuXHJcbmludGVyZmFjZSBTZXR0aW5ncyB7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW9kZWwge1xyXG5cclxuICBkYXRhOiBJRGF0YTtcclxuICBcclxuICBjb25zdHJ1Y3Rvciggc2V0dGluZ3M6IFNldHRpbmdzICkgeyBcclxuICAgIHRoaXMuZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHNldHRpbmdzKTtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnREYXRhKCk6IG9iamVjdCB7XHJcbiAgICByZXR1cm4geydtaW5pbXVtJzogdGhpcy5kYXRhLm1pbiwgJ21pbic6IHRoaXMuZGF0YVsnY3VycmVudC1taW4nXSwgJ21heCc6IHRoaXMuZGF0YVsnY3VycmVudC1tYXgnXSwgJ3Bvc2l0aW9ucyc6IGAke3RoaXMuZGF0YS5tYXggLSB0aGlzLmRhdGEubWlufWB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi9tb2RlbC50cydcclxuXHJcbmludGVyZmFjZSBNeURhdGFPYmplY3Qge1xyXG4gIFtrZXk6IHN0cmluZ106IHN0cmluZ1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2FkZSB7XHJcbiAgcHJpdmF0ZSBtb2RlbDtcclxuXHJcbiAgY29uc3RydWN0b3IgKG1vZGVsKSB7XHJcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XHJcbiAgfTtcclxuXHJcbiAgc3RhcnRIYW5kZWxzUG9zaXRpb24oKTpvYmplY3Qge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZ2V0Q3VycmVudERhdGEoKTtcclxuICB9O1xyXG4gIFxyXG4gIHJlZnJlc2hNb2RlbERhdGEoZGF0YTogb2JqZWN0LCBwcm9wOiBzdHJpbmcpOiBvYmplY3Qge1xyXG4gICAgaWYgKHByb3AgPT09ICdtaW4nKSB7XHJcbiAgICAgIHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1taW4nXSA9IE1hdGgucm91bmQodGhpcy5tb2RlbC5kYXRhWydtaW4nXSArIChkYXRhWydtaW4nXSAvICgrZGF0YVsnc2xpZGVyV2lkdGgnXSAvICh0aGlzLm1vZGVsLmRhdGFbJ21heCddIC0gdGhpcy5tb2RlbC5kYXRhWydtaW4nXSkpKSk7XHJcbiAgICAgIHJldHVybiB7ICdtaW4nOiB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWluJ10gfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1heCddID0gTWF0aC5yb3VuZCh0aGlzLm1vZGVsLmRhdGFbJ21pbiddICsgKGRhdGFbJ21heCddIC8gKCtkYXRhWydzbGlkZXJXaWR0aCddIC8gKHRoaXMubW9kZWwuZGF0YVsnbWF4J10gLSB0aGlzLm1vZGVsLmRhdGFbJ21pbiddKSkpKTtcclxuICAgICAgcmV0dXJuIHsgJ21heCc6IHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1tYXgnXSB9XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGdldE1vZGVsRGF0YSgpOiBvYmplY3Qge1xyXG4gICAgcmV0dXJuIHsgJ21pbic6IHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1taW4nXSwgJ21heCc6IHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1tYXgnXX1cclxuICB9O1xyXG5cclxuICBnZXRNYXhEYXRhKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5kYXRhWydtYXgnXVxyXG4gIH07XHJcblxyXG4gIGdldFBvc3NpYmxlUmFuZ2UoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7J21heCc6dGhpcy5tb2RlbC5kYXRhLm1heCwgJ21pbic6IHRoaXMubW9kZWwuZGF0YS5taW59O1xyXG4gIH07XHJcblxyXG4gIGdldFBvc2l0aW9uc0Ftb3VudCgpOiBvYmplY3Qge1xyXG4gICAgcmV0dXJuIHsncG9zaXRpb25zJzogdGhpcy5tb2RlbC5kYXRhLm1heCAtIHRoaXMubW9kZWwuZGF0YS5taW4sICdtaW5pbXVtJzogdGhpcy5tb2RlbC5kYXRhLm1pbn07XHJcbiAgfVxyXG59OyIsImV4cG9ydCBjbGFzcyBQcmVzZW50ZXIge1xyXG5cclxuICBwcml2YXRlIHZpZXdMaW5rO1xyXG4gIHByaXZhdGUgZmFjYWRlTGluaztcclxuXHJcbiAgY29uc3RydWN0b3IgKHZpZXcsIGZhY2FkZSkge1xyXG4gICAgdGhpcy52aWV3TGluayA9IHZpZXc7XHJcbiAgICB0aGlzLmZhY2FkZUxpbmsgPSBmYWNhZGU7XHJcbiAgfTtcclxuXHJcbiAgYmluZEV2ZW50TGlzdGVuZXJzKCk6IHZvaWQge1xyXG4gICAgbGV0IHZpZXcgPSB0aGlzLnZpZXdMaW5rO1xyXG4gICAgbGV0IGZhY2FkZSA9IHRoaXMuZmFjYWRlTGluaztcclxuICAgIHRoaXMudmlld0xpbmsuZGlzcGxheUVsZW1lbnRzKCk7XHJcbiAgICB0aGlzLnRyYWNraW5nUmVjb3JkSW5NeURhdGEoKTtcclxuICAgIHRoaXMucmVjb3JkaW5nVGhlUG9zaXRpb25zVmFsdWVzRm9yVmlldygpO1xyXG4gICAgdGhpcy5iaW5kTGlzdGVuZXJGb3JNaW4oKTtcclxuICAgIHRoaXMuYmluZExpc3RlbmVyRm9yTWF4KCk7XHJcbiAgICBpZiAodGhpcy52aWV3TGluay5zZXR0aW5nc1snc2lkZS1tZW51J10gIT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMudmlld0xpbmsuaGFuZGVsTGFiZWxUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5tYWtlQmluZExpc3RlbmVyRm9yTGFiZWxUb2dnbGUodmlldykpO1xyXG4gICAgfTtcclxuICAgIGlmICh0aGlzLnZpZXdMaW5rLnNldHRpbmdzWydzaWRlLW1lbnUnXSAhPT0gZmFsc2UpIHtcclxuICAgICAgdGhpcy52aWV3TGluay5oYW5kZWxUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5tYWtlQmluZExpc3RlbmVyRm9yRG91YmxlSGFuZGVscyh2aWV3LCBmYWNhZGUpKTtcclxuICAgIH07XHJcbiAgICBpZiAodGhpcy52aWV3TGluay5zZXR0aW5nc1snc2lkZS1tZW51J10gIT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMudmlld0xpbmsucGxhbmVUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5tYWtlQmluZExpc3RlbmVyRm9yUGxhbmVUb2dnbGUodmlldykpO1xyXG4gICAgfTtcclxuICAgIHRoaXMudmlld0xpbmsubWluVmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm1ha2VCaW5kTGlzdGVuZXJGb3JTZWxlY3Rpb25NaW5WYWx1ZSh2aWV3KSk7XHJcbiAgICB0aGlzLnZpZXdMaW5rLm1heFZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tYWtlQmluZExpc3RlbmVyRm9yU2VsZWN0aW9uTWF4VmFsdWUodmlldykpO1xyXG4gICAgaWYgKHRoaXMudmlld0xpbmsuc2V0dGluZ3NbJ3NpZGUtbWVudSddICE9PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLnZpZXdMaW5rLm1pbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMubWFrZUJpbmRMaXN0ZW5lckZvck1pbklucHV0KHZpZXcsIGZhY2FkZSkpO1xyXG4gICAgfTtcclxuICAgIGlmICh0aGlzLnZpZXdMaW5rLnNldHRpbmdzWydzaWRlLW1lbnUnXSAhPT0gZmFsc2UpIHtcclxuICAgICAgdGhpcy52aWV3TGluay5tYXhJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm1ha2VCaW5kTGlzdGVuZXJGb3JNYXhJbnB1dCh2aWV3LCBmYWNhZGUpKTtcclxuICAgIH07XHJcbiAgICB0aGlzLnBvc3NpYmxlUmFuZ2VGb3JWaWV3KCk7XHJcbiAgICB0aGlzLnNldHRpbmdTdGFydGluZ1Bvc2l0aW9ucygpO1xyXG4gIH07XHJcblxyXG4gIHRyYWNraW5nUmVjb3JkSW5NeURhdGEoKTogdm9pZCB7XHJcbiAgICBsZXQgdmlldyA9IHRoaXMudmlld0xpbms7XHJcbiAgICBsZXQgZmFjYWRlID0gdGhpcy5mYWNhZGVMaW5rO1xyXG4gICAgdmlldy5zbGlkZXJNb3ZlbWVudC5teURhdGEgPSBuZXcgUHJveHkodmlldy5zbGlkZXJNb3ZlbWVudC5teURhdGEsIHtcclxuICAgICAgc2V0KHRhcmdldCwgcHJvcCwgdmFsKSB7XHJcbiAgICAgICAgaWYodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgICAgICAgIGxldCBtb2RlbFJlc3VsdCA9IGZhY2FkZS5yZWZyZXNoTW9kZWxEYXRhKHZhbCwgcHJvcCk7XHJcbiAgICAgICAgICB2aWV3LnJlZnJlc2hDdXJyZW50VmFsdWVzKG1vZGVsUmVzdWx0KTtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgcmVjb3JkaW5nVGhlUG9zaXRpb25zVmFsdWVzRm9yVmlldygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnZpZXdMaW5rLnNsaWRlck1vdmVtZW50LnN0ZXAgIT09IGZhbHNlKSB7XHJcbiAgICAgIGxldCBzdGVwQW1vdW50OiBvYmplY3QgPSB0aGlzLmZhY2FkZUxpbmsuZ2V0UG9zaXRpb25zQW1vdW50KCk7XHJcbiAgICAgIHRoaXMudmlld0xpbmsuc2xpZGVyTW92ZW1lbnQuc3RlcEFtb3VudCA9IHN0ZXBBbW91bnRbJ3Bvc2l0aW9ucyddO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBiaW5kTGlzdGVuZXJGb3JNaW4oKTogdm9pZCB7XHJcbiAgICBsZXQgdmlldyA9IHRoaXMudmlld0xpbms7XHJcbiAgICB2aWV3Lm1pbkhhbmRlbC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKCBldmVudCApOiB2b2lkIHtcclxuICAgICAgdmlldy5zbGlkZXJNb3ZlbWVudC5taW5IYW5kZWxMaXN0ZW5lciggZXZlbnQgKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgYmluZExpc3RlbmVyRm9yTWF4KCk6IHZvaWQge1xyXG4gICAgbGV0IHZpZXcgPSB0aGlzLnZpZXdMaW5rO1xyXG4gICAgdmlldy5tYXhIYW5kZWwub25tb3VzZWRvd24gPSBmdW5jdGlvbihldmVudCk6IHZvaWQge1xyXG4gICAgICB2aWV3LnNsaWRlck1vdmVtZW50Lm1heEhhbmRlbExpc3RlbmVyKCBldmVudCApO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBtYWtlQmluZExpc3RlbmVyRm9yTGFiZWxUb2dnbGUoc2VsZlZpZXcpOiBGdW5jdGlvbiB7XHJcbiAgICBsZXQgdmlldyA9IHNlbGZWaWV3O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmlldy5jYWxsSGFuZGVsTGFiZWxUb2dnbGVDaGFuZ2VyKHZpZXcpIFxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBtYWtlQmluZExpc3RlbmVyRm9yRG91YmxlSGFuZGVscyhzZWxmVmlldywgc2VsZkZhY2FkZSk6IEZ1bmN0aW9uIHtcclxuICAgIGxldCB2aWV3ID0gc2VsZlZpZXc7XHJcbiAgICBsZXQgZmFjYWRlID0gc2VsZkZhY2FkZTtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHZpZXcuY2FsbE1heEhhbmRlbFRvZ2dsZUNoYW5nZXIodmlldylcclxuICAgICAgaWYgKHZpZXcuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICBsZXQgcmVzdWx0OiBudW1iZXIgPSBmYWNhZGUuZ2V0TWF4RGF0YSgpO1xyXG4gICAgICAgIHZpZXcucmVmcmVzaE1heFNpZGVNZW51RGF0YShyZXN1bHQpO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBtYWtlQmluZExpc3RlbmVyRm9yUGxhbmVUb2dnbGUoc2VsZlZpZXcpOiBGdW5jdGlvbiB7XHJcbiAgICBsZXQgdmlldyA9IHNlbGZWaWV3O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmlldy5zbGlkZXJNb3ZlbWVudC5jaGFuZ2VQbGFuZSh2aWV3LnBsYW5lVG9nZ2xlLCB2aWV3LnNsaWRlckNvbnRhaW5lciwgdmlldy5taW5WYWx1ZSwgdmlldy5tYXhWYWx1ZSk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIG1ha2VCaW5kTGlzdGVuZXJGb3JTZWxlY3Rpb25NaW5WYWx1ZSAoc2VsZlZpZXcpOiBGdW5jdGlvbiB7XHJcbiAgICBsZXQgdmlldyA9IHNlbGZWaWV3O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmlldy5zbGlkZXJNb3ZlbWVudC5zZWxlY3Rpb25PZlByZXBhcmVkVmFsdWUoJ21pbicpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBtYWtlQmluZExpc3RlbmVyRm9yU2VsZWN0aW9uTWF4VmFsdWUoc2VsZlZpZXcpOiBGdW5jdGlvbiB7XHJcbiAgICBsZXQgdmlldyA9IHNlbGZWaWV3O1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdmlldy5zbGlkZXJNb3ZlbWVudC5zZWxlY3Rpb25PZlByZXBhcmVkVmFsdWUoJ21heCcpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBtYWtlQmluZExpc3RlbmVyRm9yTWluSW5wdXQoc2VsZlZpZXcsIHNlbGZGYWNhZGUpOiBGdW5jdGlvbiB7XHJcbiAgICBsZXQgdmlldyA9IHNlbGZWaWV3O1xyXG4gICAgbGV0IGZhY2FkZSA9IHNlbGZGYWNhZGU7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICBsZXQgcG9zaXRpb25zOiBvYmplY3QgPSBmYWNhZGUuZ2V0UG9zaXRpb25zQW1vdW50KCk7XHJcbiAgICAgIHZpZXcuc2xpZGVyTW92ZW1lbnQuc2lkZU1lbnVJbnB1dHNWYWx1ZXNWYWxpZGF0aW9uQ2hlY2tlcignbWluJywgdmlldy5taW5JbnB1dC52YWx1ZSwgcG9zaXRpb25zWydwb3NpdGlvbnMnXSwgcG9zaXRpb25zWydtaW5pbXVtJ10pO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBtYWtlQmluZExpc3RlbmVyRm9yTWF4SW5wdXQoc2VsZlZpZXcsIHNlbGZGYWNhZGUpOiBGdW5jdGlvbiB7XHJcbiAgICBsZXQgdmlldyA9IHNlbGZWaWV3O1xyXG4gICAgbGV0IGZhY2FkZSA9IHNlbGZGYWNhZGU7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XHJcbiAgICAgIGxldCBwb3NpdGlvbnM6IG9iamVjdCA9IGZhY2FkZS5nZXRQb3NpdGlvbnNBbW91bnQoKTtcclxuICAgICAgdmlldy5zbGlkZXJNb3ZlbWVudC5zaWRlTWVudUlucHV0c1ZhbHVlc1ZhbGlkYXRpb25DaGVja2VyKCdtYXgnLCB2aWV3Lm1heElucHV0LnZhbHVlLCBwb3NpdGlvbnNbJ3Bvc2l0aW9ucyddLCBwb3NpdGlvbnNbJ21pbmltdW0nXSk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHBvc3NpYmxlUmFuZ2VGb3JWaWV3KCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMudmlld0xpbmsuc2V0dGluZ3NbJ3NpZGUtbWVudSddICE9PSBmYWxzZSkge1xyXG4gICAgICBsZXQgcG9zc2libGVSYW5nZTogb2JqZWN0ID0gdGhpcy5mYWNhZGVMaW5rLmdldFBvc3NpYmxlUmFuZ2UoKTtcclxuICAgICAgdGhpcy52aWV3TGluay5pbnB1dHNQb3NzaWJsZVJhbmdlKHBvc3NpYmxlUmFuZ2UsIHRoaXMudmlld0xpbmsubWluSW5wdXQsIHRoaXMudmlld0xpbmsubWF4SW5wdXQpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBzZXR0aW5nU3RhcnRpbmdQb3NpdGlvbnMoKTogdm9pZCB7XHJcbiAgICBsZXQgc3RhcnRQb3NpdGlvbnM6IG9iamVjdCA9IHRoaXMuZmFjYWRlTGluay5zdGFydEhhbmRlbHNQb3NpdGlvbigpO1xyXG4gICAgdGhpcy52aWV3TGluay5zbGlkZXJNb3ZlbWVudC5zdGFydEhhbmRsZXJzUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zKTtcclxuICAgIHRoaXMudmlld0xpbmsucmVmcmVzaEN1cnJlbnRWYWx1ZXMoc3RhcnRQb3NpdGlvbnMpO1xyXG4gIH07XHJcbn07IiwiZXhwb3J0IGNsYXNzIEhhbmRlbHNMYWJlbHMge1xyXG4gIG1pbkxhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIG1heExhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIGxhYmVsSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgbGV0IG1pbjpIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxldCBtYXg6SFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBtaW4uY2xhc3NMaXN0LmFkZCgnbWluU2xpZGVySGFuZGVsTGFiZWwnKTtcclxuICAgIG1heC5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJIYW5kZWxMYWJlbCcpO1xyXG4gICAgdGhpcy5taW5MYWJlbCA9IG1pbjtcclxuICAgIHRoaXMubWF4TGFiZWwgPSBtYXg7XHJcbiAgfTtcclxuICBcclxuICBnZXRFbGVtZW50cygpOiBvYmplY3Qge1xyXG4gICAgcmV0dXJuIHsnbWluJzogdGhpcy5taW5MYWJlbCwgJ21heCc6IHRoaXMubWF4TGFiZWx9O1xyXG4gIH07XHJcblxyXG4gIGRpc3BsYXlDb250cm9sbGVyKHRvZ2dsZTogSFRNTElucHV0RWxlbWVudCwgbWluOiBIVE1MTGFiZWxFbGVtZW50LCBtYXg6IEhUTUxMYWJlbEVsZW1lbnQpIHtcclxuICAgIGlmICh0b2dnbGUuY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBtaW4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gICAgICBtYXguc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWluLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIG1heC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2VudGVyaW5nUmVsYXRpdmVUb0hhbmRsZXMobWluSGFuZGVsV2lkdGg6IG51bWJlciwgbWF4SGFuZGVsV2lkdGg6IG51bWJlciwgbWluTGFiZWxXaWR0aDogbnVtYmVyLCBtYXhMYWJlbFdpZHRoOiBudW1iZXIsIG1pbkxhYmVsOiBIVE1MTGFiZWxFbGVtZW50LCBtYXhMYWJlbDogSFRNTExhYmVsRWxlbWVudCk6IHZvaWQge1xyXG4gICAgbWluTGFiZWwuc3R5bGUubGVmdCA9IChtaW5IYW5kZWxXaWR0aCAtIG1pbkxhYmVsV2lkdGgpIC8gMiArICdweCc7XHJcbiAgICBtYXhMYWJlbC5zdHlsZS5sZWZ0ID0gKG1heEhhbmRlbFdpZHRoIC0gbWF4TGFiZWxXaWR0aCkgLyAyICsgJ3B4JztcclxuICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgSGFuZGVscyB7XHJcblxyXG4gIHByaXZhdGUgbWluSGFuZGVsOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBtYXhIYW5kZWw6IEhUTUxTcGFuRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsZXQgbWluOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBsZXQgbWF4OiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBtaW4uY2xhc3NMaXN0LmFkZCgnbWluU2xpZGVySGFuZGVsJyk7XHJcbiAgICBtYXguY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVySGFuZGVsJyk7XHJcbiAgICB0aGlzLm1pbkhhbmRlbCA9IG1pbjtcclxuICAgIHRoaXMubWF4SGFuZGVsID0gbWF4O1xyXG4gIH07XHJcblxyXG4gIGdldEVsZW1lbnRzKCk6IG9iamVjdCB7XHJcbiAgICByZXR1cm4ge21pbjogdGhpcy5taW5IYW5kZWwsIG1heDogdGhpcy5tYXhIYW5kZWx9O1xyXG4gIH07XHJcblxyXG4gIGRpc3BsYXlDb250cm9sbGVyKHRvZ2dsZTogSFRNTElucHV0RWxlbWVudCwgbWF4OiBIVE1MU3BhbkVsZW1lbnQpIHtcclxuICAgIGlmICh0b2dnbGUuY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBtYXguc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtYXguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbn07IiwiZXhwb3J0IGNsYXNzIFNlbGVjdGVkUmFuZ2Uge1xyXG5cclxuICBwcml2YXRlIGludGVydmFsOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsZXQgaW50ZXJ2YWw6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbnRlcnZhbC5jbGFzc0xpc3QuYWRkKCdtYWluSW50ZXJ2YWwnKTtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnRzKCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmludGVydmFsO1xyXG4gIH1cclxufSIsImV4cG9ydCBjbGFzcyBTaWRlTWVudSB7XHJcblxyXG4gIGN1c3RvbVNsaWRlck1lbnVDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gIGhhbmRlbFRvZ2dsZTogSFRNTElucHV0RWxlbWVudDtcclxuICBoYW5kZWxMYWJlbFRvZ2dsZTogSFRNTElucHV0RWxlbWVudDtcclxuICBwbGFuZVRvZ2dsZTogSFRNTElucHV0RWxlbWVudDtcclxuICBtaW5JbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICBtYXhJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsZXQgc2xpZGVyVmFsdWVQOkhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgc2xpZGVyVmFsdWVQLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclBhcmFnVmFsJyk7XHJcbiAgICBzbGlkZXJWYWx1ZVAuaW5uZXJUZXh0ID0gJ9Ci0LXQutGD0YnQtdC1INC30LDQvdGH0LXQvdC40LU6ICc7XHJcbiAgICBcclxuICAgIGxldCBtaW5TbGlkZXJWYWx1ZU91dHB1dDpIVE1MT3V0cHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ291dHB1dCcpO1xyXG4gICAgbWluU2xpZGVyVmFsdWVPdXRwdXQuY2xhc3NMaXN0LmFkZCgnc2xpZGVyVmFsdWUnKTtcclxuICAgIG1pblNsaWRlclZhbHVlT3V0cHV0LmlkID0gJ21pblNsaWRlclZhbHVlJztcclxuICAgIGxldCBtYXhTbGlkZXJWYWx1ZU91dHB1dDpIVE1MT3V0cHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ291dHB1dCcpO1xyXG4gICAgbWF4U2xpZGVyVmFsdWVPdXRwdXQuY2xhc3NMaXN0LmFkZCgnc2xpZGVyVmFsdWUnKTtcclxuICAgIG1heFNsaWRlclZhbHVlT3V0cHV0LmlkID0gJ21heFNsaWRlclZhbHVlJztcclxuICAgIFxyXG4gICAgbGV0IHNsaWRlclRvZ2dsZVA6SFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBzbGlkZXJUb2dnbGVQLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclBhcmFnJyk7XHJcbiAgICBzbGlkZXJUb2dnbGVQLmlubmVyVGV4dCA9ICfQktC60LvRjtGH0LjRgtGMINCy0YLQvtGA0L7QuSDQv9C+0LvQt9GD0L3QvtC6OiAnO1xyXG4gICAgXHJcbiAgICBsZXQgc2xpZGVyVG9nZ2xlTGFiZWw6SFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBzbGlkZXJUb2dnbGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJUb2dnbGUnKTtcclxuXHJcbiAgICBsZXQgbWF4U2xpZGVySGFuZGVsVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIG1heFNsaWRlckhhbmRlbFRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJIYW5kZWxUb2dnbGUnKTtcclxuICAgIG1heFNsaWRlckhhbmRlbFRvZ2dsZS5pZCA9ICdtYXhTbGlkZXJIYW5kZWxUb2dnbGUnO1xyXG4gICAgbWF4U2xpZGVySGFuZGVsVG9nZ2xlLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXHJcblxyXG4gICAgbGV0IGN1c3RvbVNsaWRlckJvcmRlcjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY3VzdG9tU2xpZGVyQm9yZGVyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVRvZ2dsZVNsaWRlckJvcmRlcicpO1xyXG5cclxuICAgIGxldCBjdXN0b21TbGlkZXJJbnB1dHM6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHMuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVySW5wdXRzJyk7XHJcbiAgICBcclxuICAgIGxldCBjdXN0b21TbGlkZXJJbnB1dHNQOiBIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c1AuaW5uZXJUZXh0ID0gJ9CY0LfQvNC10L3QuNGC0Ywg0LfQvdCw0YfQtdC90LjQtTogJztcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c1AuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyUGFyYWcnKTtcclxuXHJcbiAgICBsZXQgY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWwuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVySW5wdXRsYWJlbCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY3VzdG9tU2xpZGVyTWluSW5wdXQnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01pbkxhYmVsLmlubmVyVGV4dCA9ICdNaW46ICc7XHJcbiAgICBcclxuICAgIGxldCBjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJJbnB1dGxhYmVsJyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjdXN0b21TbGlkZXJNYXhJbnB1dCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWF4TGFiZWwuaW5uZXJUZXh0ID0gJ01heDogJztcclxuXHJcbiAgICBsZXQgY3VzdG9tU2xpZGVySW5wdXRzTWluOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01pbi5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJNaW5JbnB1dCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluLmlkID0gJ2N1c3RvbVNsaWRlck1pbklucHV0JztcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01pbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XHJcblxyXG4gICAgbGV0IGN1c3RvbVNsaWRlcklucHV0c01heDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXguY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyTWF4SW5wdXQnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01heC5pZCA9ICdjdXN0b21TbGlkZXJNYXhJbnB1dCc7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXguc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JWYWx1ZXNDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclZhbHVlc1A6IEhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzUC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJQYXJhZycpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzUC5pbm5lclRleHQgPSAn0JLQutC70Y7Rh9C40YLRjCDQt9C90LDRh9C10L3QuNGPINC/0L7QtCDQv9C+0LvQt9GD0L3QutCw0LzQuDogJztcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yVmFsdWVzTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzTGFiZWwuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyVG9nZ2xlJyk7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclZhbHVlc0lucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzSW5wdXQuY2xhc3NMaXN0LmFkZCgnc2hvd1ZhbHVlVG9nZ2xlJyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNJbnB1dC5pZCA9ICdzaG93VmFsdWVUb2dnbGUnO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JWYWx1ZXNTcGFuOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNTcGFuLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVRvZ2dsZVNsaWRlckJvcmRlcicpO1xyXG4gICAgXHJcbiAgICBsZXQgdG9nZ2xlRm9yUGxhbmVDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclBsYW5lUDogSFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZVAuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyUGFyYWcnKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lUC5pbm5lclRleHQgPSAn0JjQt9C80LXQvdC40YLRjCDQv9C70L7RgdC60L7RgdGC0Yw6ICc7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclBsYW5lTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgdG9nZ2xlRm9yUGxhbmVMYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJUb2dnbGUnKTtcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yUGxhbmVJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgdG9nZ2xlRm9yUGxhbmVJbnB1dC5jbGFzc0xpc3QuYWRkKCdwbGFuZVRvZ2dsZScpO1xyXG4gICAgdG9nZ2xlRm9yUGxhbmVJbnB1dC5pZCA9ICdwbGFuZVRvZ2dsZSc7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclBsYW5lU3BhbjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdG9nZ2xlRm9yUGxhbmVTcGFuLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVRvZ2dsZVNsaWRlckJvcmRlcicpO1xyXG5cclxuXHJcbiAgICBsZXQgbWFpblNsaWRlckNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlck1lbnVDb250YWluZXInKTtcclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuYXBwZW5kKHNsaWRlclZhbHVlUCk7XHJcbiAgICBzbGlkZXJWYWx1ZVAuYXBwZW5kKG1pblNsaWRlclZhbHVlT3V0cHV0KTtcclxuICAgIHNsaWRlclZhbHVlUC5hcHBlbmQobWF4U2xpZGVyVmFsdWVPdXRwdXQpO1xyXG4gICAgbWFpblNsaWRlckNvbnRhaW5lci5hcHBlbmQoc2xpZGVyVG9nZ2xlUCk7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZChzbGlkZXJUb2dnbGVMYWJlbCk7XHJcbiAgICBzbGlkZXJUb2dnbGVMYWJlbC5hcHBlbmQobWF4U2xpZGVySGFuZGVsVG9nZ2xlLCBjdXN0b21TbGlkZXJCb3JkZXIpO1xyXG5cclxuICAgIGN1c3RvbVNsaWRlcklucHV0cy5hcHBlbmQoY3VzdG9tU2xpZGVySW5wdXRzUCwgY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWwsIGN1c3RvbVNsaWRlcklucHV0c01pbiwgY3VzdG9tU2xpZGVySW5wdXRzTWF4TGFiZWwsIGN1c3RvbVNsaWRlcklucHV0c01heCk7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZChjdXN0b21TbGlkZXJJbnB1dHMpO1xyXG5cclxuICAgIHRvZ2dsZUZvclZhbHVlc0NvbnRhaW5lci5hcHBlbmQodG9nZ2xlRm9yVmFsdWVzUCwgdG9nZ2xlRm9yVmFsdWVzTGFiZWwpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzTGFiZWwuYXBwZW5kKHRvZ2dsZUZvclZhbHVlc0lucHV0LCB0b2dnbGVGb3JWYWx1ZXNTcGFuKTtcclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuYXBwZW5kKHRvZ2dsZUZvclZhbHVlc0NvbnRhaW5lcik7XHJcblxyXG4gICAgdG9nZ2xlRm9yUGxhbmVDb250YWluZXIuYXBwZW5kKHRvZ2dsZUZvclBsYW5lUCwgdG9nZ2xlRm9yUGxhbmVMYWJlbCk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZUxhYmVsLmFwcGVuZCh0b2dnbGVGb3JQbGFuZUlucHV0LCB0b2dnbGVGb3JQbGFuZVNwYW4pO1xyXG4gICAgbWFpblNsaWRlckNvbnRhaW5lci5hcHBlbmQodG9nZ2xlRm9yUGxhbmVDb250YWluZXIpO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tU2xpZGVyTWVudUNvbnRhaW5lciA9IG1haW5TbGlkZXJDb250YWluZXI7XHJcbiAgICB0aGlzLmhhbmRlbFRvZ2dsZSA9IG1heFNsaWRlckhhbmRlbFRvZ2dsZTtcclxuICAgIHRoaXMuaGFuZGVsTGFiZWxUb2dnbGUgPSB0b2dnbGVGb3JWYWx1ZXNJbnB1dDtcclxuICAgIHRoaXMucGxhbmVUb2dnbGUgPSB0b2dnbGVGb3JQbGFuZUlucHV0O1xyXG4gICAgdGhpcy5taW5JbnB1dCA9IGN1c3RvbVNsaWRlcklucHV0c01pbjtcclxuICAgIHRoaXMubWF4SW5wdXQgPSBjdXN0b21TbGlkZXJJbnB1dHNNYXg7XHJcbiAgfTtcclxuXHJcbiAgZ2V0RWxlbWVudHMoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1lbnU6IHRoaXMuY3VzdG9tU2xpZGVyTWVudUNvbnRhaW5lcixcclxuICAgICAgaGFuZGVsVG9nZ2xlOiB0aGlzLmhhbmRlbFRvZ2dsZSxcclxuICAgICAgaGFuZGVsTGFiZWxUb2dnbGU6IHRoaXMuaGFuZGVsTGFiZWxUb2dnbGUsXHJcbiAgICAgIHBsYW5lVG9nZ2xlOiB0aGlzLnBsYW5lVG9nZ2xlLFxyXG4gICAgICBtaW5JbnB1dDogdGhpcy5taW5JbnB1dCxcclxuICAgICAgbWF4SW5wdXQ6IHRoaXMubWF4SW5wdXRcclxuICAgIH07XHJcbiAgfTtcclxufTsiLCJpbnRlcmZhY2UgSGFuZGVscyB7XHJcbiAgW2tleTogc3RyaW5nXTogSFRNTExhYmVsRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MRGl2RWxlbWVudDtcclxufVxyXG5pbnRlcmZhY2UgTXlEYXRhT2JqZWN0IHtcclxuICBba2V5OiBzdHJpbmddOiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcclxuICB9O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhcnRIYW5kZWxzUG9zaXRpb25zRGF0YSB7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTbGlkZXJNb3ZlbWVudCB7XHJcbiAgcHJpdmF0ZSBtaW46IEhUTUxTcGFuRWxlbWVudDtcclxuICBwcml2YXRlIG1heDogSFRNTFNwYW5FbGVtZW50O1xyXG4gIHByaXZhdGUgbWluTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBtYXhMYWJlbDogSFRNTExhYmVsRWxlbWVudDtcclxuICBwcml2YXRlIHNsaWRlclJhbmdlOiBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIGhhbmRlbHNUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQgfCBib29sZWFuO1xyXG4gIHByaXZhdGUgcGxhbmVUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQgfCBib29sZWFuO1xyXG4gIHByaXZhdGUgaW50ZXJ2YWw6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHByaXZhdGUgc3RlcDogbnVtYmVyIHwgc3RyaW5nIHwgYm9vbGVhbjtcclxuICBwcml2YXRlIHN0ZXBBbW91bnQ6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoIGhhbmRlbHM6IEhhbmRlbHMpIHtcclxuICAgIHRoaXMubWluID0gaGFuZGVscy5taW47XHJcbiAgICB0aGlzLm1heCA9IGhhbmRlbHMubWF4O1xyXG4gICAgdGhpcy5taW5MYWJlbCA9IGhhbmRlbHMubWluTGFiZWw7XHJcbiAgICB0aGlzLm1heExhYmVsPSBoYW5kZWxzLm1heExhYmVsO1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZSA9IGhhbmRlbHMuc2xpZGVyUmFuZ2U7XHJcbiAgICB0aGlzLmhhbmRlbHNUb2dnbGUgPSBoYW5kZWxzLmhhbmRlbHNUb2dnbGU7XHJcbiAgICB0aGlzLnBsYW5lVG9nZ2xlID0gaGFuZGVscy5wbGFuZVRvZ2dsZTtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBoYW5kZWxzLmludGVydmFsO1xyXG4gICAgdGhpcy5zdGVwID0gaGFuZGVscy5zdGVwO1xyXG4gIH1cclxuXHJcbiAgbXlEYXRhOiBNeURhdGFPYmplY3QgPSB7XHJcbiAgICAnbWluJzoge30sXHJcbiAgICAnbWF4Jzoge31cclxuICB9XHJcblxyXG4gIHN0YXJ0SGFuZGxlcnNQb3NpdGlvbnMocG9zaXRpb25WYWx1ZXM6IFN0YXJ0SGFuZGVsc1Bvc2l0aW9uc0RhdGEgKSB7XHJcbiAgICBsZXQgbWluOiBzdHJpbmcgPSAoKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkgLyArcG9zaXRpb25WYWx1ZXMucG9zaXRpb25zKSAqICgrcG9zaXRpb25WYWx1ZXNbJ21pbiddIC0gK3Bvc2l0aW9uVmFsdWVzWydtaW5pbXVtJ10pICsgJyc7XHJcbiAgICBsZXQgbWF4OiBzdHJpbmcgPSAoKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkgLyArcG9zaXRpb25WYWx1ZXMucG9zaXRpb25zKSAqICgrcG9zaXRpb25WYWx1ZXNbJ21heCddIC0gK3Bvc2l0aW9uVmFsdWVzWydtaW5pbXVtJ10pICsgJyc7XHJcbiAgICBcclxuICAgIHRoaXMubXlEYXRhLm1pbi5taW4gPSBtaW47XHJcbiAgICB0aGlzLm15RGF0YS5tYXgubWF4ID0gbWF4O1xyXG4gICAgXHJcbiAgICB0aGlzLm1pbi5zdHlsZS5sZWZ0ID0gbWluICsgJ3B4JztcclxuICAgIHRoaXMubWF4LnN0eWxlLmxlZnQgPSBtYXggKyAncHgnO1xyXG4gICAgXHJcbiAgICB0aGlzLmludGVydmFsLnN0eWxlLmxlZnQgPSArbWluICsgdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUucmlnaHQgPSAodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtICttYXgpIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICB9XHJcblxyXG4gIG1pbkhhbmRlbExpc3RlbmVyKCBldmVudCwgdGVzdDpvYmplY3QgKSB7XHJcbiAgICBsZXQgbWluID0gdGhpcy5taW47XHJcbiAgICBsZXQgbWF4ID0gdGhpcy5tYXg7XHJcbiAgICBsZXQgbWluTGFiZWwgPSB0aGlzLm1pbkxhYmVsO1xyXG4gICAgbGV0IHNsaWRlclJhbmdlID0gdGhpcy5zbGlkZXJSYW5nZTtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIGxldCBzaGlmdDogbnVtYmVyO1xyXG4gICAgbGV0IGRvdWJsZUhhbmRlbHM6IGJvb2xlYW47XHJcbiAgICBsZXQgdmVydGljYWw6IGJvb2xlYW47XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuaGFuZGVsc1RvZ2dsZSA9PT0gJ2Jvb2xlYW4nICYmIHR5cGVvZiB0aGlzLnBsYW5lVG9nZ2xlID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgZG91YmxlSGFuZGVscyA9IHRoaXMuaGFuZGVsc1RvZ2dsZTtcclxuICAgICAgdmVydGljYWwgPSB0aGlzLnBsYW5lVG9nZ2xlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG91YmxlSGFuZGVscyA9IHRoaXMuaGFuZGVsc1RvZ2dsZS5jaGVja2VkO1xyXG4gICAgICB2ZXJ0aWNhbCA9IHRoaXMucGxhbmVUb2dnbGUuY2hlY2tlZDtcclxuICAgIH07XHJcbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmludGVydmFsO1xyXG4gICAgbGV0IHN0ZXA6IG51bWJlcjtcclxuICAgIGlmICh0aGlzLnN0ZXAgIT09IGZhbHNlKSB7XHJcbiAgICAgIHN0ZXAgPSAoc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSBtaW4ub2Zmc2V0V2lkdGgpIC8gdGhpcy5zdGVwQW1vdW50ICogK3RoaXMuc3RlcDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgc2hpZnQgPSBldmVudC5jbGllbnRZIC0gbWluLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIG1pbi5vZmZzZXRXaWR0aDtcclxuICAgIH0gZWxzZSB7ICBcclxuICAgICAgc2hpZnQgPSBldmVudC5jbGllbnRYIC0gbWluLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG4gICAgXHJcbiAgICBpZiggdGVzdCAhPT0gdW5kZWZpbmVkICkge1xyXG4gICAgICBvbk1vdXNlTW92ZSggdGVzdCApXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCBldmVudCApIHtcclxuICAgICAgbGV0IG5ld0xlZnQ6IG51bWJlcjtcclxuXHJcbiAgICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICAgIG5ld0xlZnQgPSBzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIChldmVudC5jbGllbnRZIC0gc2hpZnQgLSBzbGlkZXJSYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld0xlZnQgPSBldmVudC5jbGllbnRYIC0gc2hpZnQgLSBzbGlkZXJSYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgbGV0IHJpZ2h0RWRnZSA9IHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gbWluLm9mZnNldFdpZHRoO1xyXG4gICAgICBcclxuICAgICAgaWYgKHRoYXQuc3RlcCAhPT0gZmFsc2UpIHtcclxuICAgICAgICBpZiAobmV3TGVmdCA+PSArdGhhdC5teURhdGEubWluLm1pbiArIHN0ZXAgfHwgbmV3TGVmdCA8PSArdGhhdC5teURhdGEubWluLm1pbiAtIHN0ZXApIHtcclxuICAgICAgICAgIG5ld0xlZnQgPj0gK3RoYXQubXlEYXRhLm1pbi5taW4gKyBzdGVwID8gbmV3TGVmdCA9ICt0aGF0Lm15RGF0YS5taW4ubWluICsgc3RlcCA6IGZhbHNlO1xyXG4gICAgICAgICAgbmV3TGVmdCA8PSArdGhhdC5teURhdGEubWluLm1pbiAtIHN0ZXAgPyBuZXdMZWZ0ID0gK3RoYXQubXlEYXRhLm1pbi5taW4gLSBzdGVwIDogZmFsc2U7XHJcbiAgICAgICAgICByZW5ld2FsT2ZQb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZW5ld2FsT2ZQb3NpdGlvbigpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgZnVuY3Rpb24gcmVuZXdhbE9mUG9zaXRpb24oKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmIChuZXdMZWZ0IDwgMCkge1xyXG4gICAgICAgICAgbmV3TGVmdCA9IDA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZG91YmxlSGFuZGVscykgeyBcclxuICAgICAgICAgIGlmIChuZXdMZWZ0ID49ICt0aGF0Lm15RGF0YS5tYXhbJ21heCddIC0gbWF4Lm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgICAgIG5ld0xlZnQgPSArdGhhdC5teURhdGEubWF4WydtYXgnXSAtIG1heC5vZmZzZXRXaWR0aFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKG5ld0xlZnQgPiByaWdodEVkZ2UpIHtcclxuICAgICAgICAgICAgbmV3TGVmdCA9IHJpZ2h0RWRnZTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbWluLnN0eWxlLmxlZnQgPSBuZXdMZWZ0ICsgJ3B4JztcclxuICAgICAgICBpbnRlcnZhbC5zdHlsZS5sZWZ0ID0gbmV3TGVmdCArIG1pbi5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChuZXdMZWZ0ICE9PSB1bmRlZmluZWQgfHwgcmlnaHRFZGdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoYXQubXlEYXRhWydtaW4nXSA9IHsnbWluJzogYCR7bmV3TGVmdH1gLCAnc2xpZGVyV2lkdGgnOiBgJHtzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG1pbi5vZmZzZXRXaWR0aH1gfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWluTGFiZWwuc3R5bGUubGVmdCA9ICgobWluLm9mZnNldFdpZHRoIC0gbWluTGFiZWwub2Zmc2V0V2lkdGgpIC0gMSkgLyAyICsgJ3B4JztcclxuICAgICAgfSAgXHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZVVwKCkge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWF4SGFuZGVsTGlzdGVuZXIoIGV2ZW50LCB0ZXN0Om9iamVjdCApIHtcclxuICAgIGxldCBtYXggPSB0aGlzLm1heDtcclxuICAgIGxldCBtaW4gPSB0aGlzLm1pbjtcclxuICAgIGxldCBzbGlkZXJSYW5nZSA9IHRoaXMuc2xpZGVyUmFuZ2U7XHJcbiAgICBsZXQgc2hpZnQ6IG51bWJlcjtcclxuICAgIGxldCBtYXhMYWJlbCA9IHRoaXMubWF4TGFiZWw7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICBsZXQgZG91YmxlSGFuZGVsczogYm9vbGVhbjtcclxuICAgIGxldCB2ZXJ0aWNhbDogYm9vbGVhbjtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5oYW5kZWxzVG9nZ2xlID09PSAnYm9vbGVhbicgJiYgdHlwZW9mIHRoaXMucGxhbmVUb2dnbGUgPT09ICdib29sZWFuJykge1xyXG4gICAgICBkb3VibGVIYW5kZWxzID0gdGhpcy5oYW5kZWxzVG9nZ2xlO1xyXG4gICAgICB2ZXJ0aWNhbCA9IHRoaXMucGxhbmVUb2dnbGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb3VibGVIYW5kZWxzID0gdGhpcy5oYW5kZWxzVG9nZ2xlLmNoZWNrZWQ7XHJcbiAgICAgIHZlcnRpY2FsID0gdGhpcy5wbGFuZVRvZ2dsZS5jaGVja2VkO1xyXG4gICAgfTtcclxuICAgIGxldCBpbnRlcnZhbCA9IHRoaXMuaW50ZXJ2YWw7XHJcbiAgICBcclxuICAgIGxldCBzdGVwOiBudW1iZXI7XHJcbiAgICBpZiAodGhpcy5zdGVwICE9PSBmYWxzZSkge1xyXG4gICAgICBzdGVwID0gKHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gbWluLm9mZnNldFdpZHRoKSAvIHRoaXMuc3RlcEFtb3VudCAqICt0aGlzLnN0ZXA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgIHNoaWZ0ID0gZXZlbnQuY2xpZW50WSAtIG1heC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBtYXgub2Zmc2V0V2lkdGg7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBzaGlmdCA9IGV2ZW50LmNsaWVudFggLSBtYXguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblxyXG4gICAgaWYoIHRlc3QgIT09IHVuZGVmaW5lZCApIHtcclxuICAgICAgb25Nb3VzZU1vdmUoIHRlc3QgKVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XHJcbiAgICAgIGxldCBuZXdMZWZ0OiBudW1iZXI7XHJcbiAgICAgIFxyXG4gICAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgICBuZXdMZWZ0ID0gc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSAoZXZlbnQuY2xpZW50WSAtIHNoaWZ0IC0gc2xpZGVyUmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdMZWZ0ID0gZXZlbnQuY2xpZW50WCAtIHNoaWZ0IC0gc2xpZGVyUmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHJpZ2h0RWRnZSA9IHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gbWF4Lm9mZnNldFdpZHRoO1xyXG5cclxuICAgICAgaWYgKHRoYXQuc3RlcCAhPT0gZmFsc2UpIHtcclxuICAgICAgICBpZiAobmV3TGVmdCA+PSArdGhhdC5teURhdGEubWF4Lm1heCArIHN0ZXAgfHwgbmV3TGVmdCA8PSArdGhhdC5teURhdGEubWF4Lm1heCAtIHN0ZXApIHtcclxuICAgICAgICAgIG5ld0xlZnQgPj0gK3RoYXQubXlEYXRhLm1heC5tYXggKyBzdGVwID8gbmV3TGVmdCA9ICt0aGF0Lm15RGF0YS5tYXgubWF4ICsgc3RlcCA6IGZhbHNlO1xyXG4gICAgICAgICAgbmV3TGVmdCA8PSArdGhhdC5teURhdGEubWF4Lm1heCAtIHN0ZXAgPyBuZXdMZWZ0ID0gK3RoYXQubXlEYXRhLm1heC5tYXggLSBzdGVwIDogZmFsc2U7XHJcbiAgICAgICAgICByZW5ld2FsT2ZQb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZW5ld2FsT2ZQb3NpdGlvbigpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgZnVuY3Rpb24gcmVuZXdhbE9mUG9zaXRpb24oKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmIChuZXdMZWZ0IDwgMCkge1xyXG4gICAgICAgICAgbmV3TGVmdCA9IDA7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKG5ld0xlZnQgPiByaWdodEVkZ2UpIHtcclxuICAgICAgICAgIG5ld0xlZnQgPSByaWdodEVkZ2U7XHJcbiAgICAgICAgfTtcclxuICBcclxuICAgICAgICBpZiAobmV3TGVmdCA8PSArdGhhdC5teURhdGEubWluWydtaW4nXSArIG1pbi5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgICAgbmV3TGVmdCA9ICt0aGF0Lm15RGF0YS5taW5bJ21pbiddICsgbWluLm9mZnNldFdpZHRoXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBtYXguc3R5bGUubGVmdCA9IG5ld0xlZnQgKyAncHgnO1xyXG4gICAgICAgIGludGVydmFsLnN0eWxlLnJpZ2h0ID0gKHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gbmV3TGVmdCkgLSBtYXgub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICBcclxuICAgICAgICBpZiAobmV3TGVmdCAhPT0gdW5kZWZpbmVkIHx8IHJpZ2h0RWRnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGF0Lm15RGF0YVsnbWF4J10gPSB7J21heCc6IGAke25ld0xlZnR9YCwgJ3NsaWRlcldpZHRoJzogYCR7c2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSBtYXgub2Zmc2V0V2lkdGh9YH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1heExhYmVsLnN0eWxlLmxlZnQgPSAoKG1heC5vZmZzZXRXaWR0aCAtIG1heExhYmVsLm9mZnNldFdpZHRoKSAtIDEpIC8gMiArICdweCc7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlVXAoKSB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQbGFuZSggdG9nZ2xlOkhUTUxJbnB1dEVsZW1lbnQgfCBib29sZWFuLCBib2R5OiBIVE1MRGl2RWxlbWVudCwgbWluVmFsdWU6IEhUTUxQYXJhZ3JhcGhFbGVtZW50LCBtYXhWYWx1ZTogSFRNTFBhcmFncmFwaEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmICh0b2dnbGUuY2hlY2tlZCB8fCB0b2dnbGUgPT09IHRydWUpIHtcclxuICAgICAgYm9keS5zdHlsZS5oZWlnaHQgPSBib2R5Lm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgdGhpcy5zbGlkZXJSYW5nZS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC05MGRlZyknO1xyXG4gICAgICB0aGlzLnNsaWRlclJhbmdlLnN0eWxlLnRvcCA9IGJvZHkub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgICAgdGhpcy5taW5MYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCdtaW5TbGlkZXJIYW5kZWxMYWJlbCcpO1xyXG4gICAgICB0aGlzLm1heExhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ21heFNsaWRlckhhbmRlbExhYmVsJyk7XHJcbiAgICAgIHRoaXMubWluTGFiZWwuY2xhc3NMaXN0LmFkZCgnbWluU2xpZGVySGFuZGVsTGFiZWxWZXJ0aWNhbCcpO1xyXG4gICAgICB0aGlzLm1heExhYmVsLmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlckhhbmRlbExhYmVsVmVydGljYWwnKTtcclxuICAgICAgbWluVmFsdWUuY2xhc3NMaXN0LnJlbW92ZSgnbWluU2xpZGVyUG9pbnQnKTtcclxuICAgICAgbWF4VmFsdWUuY2xhc3NMaXN0LnJlbW92ZSgnbWF4U2xpZGVyUG9pbnQnKTtcclxuICAgICAgbWluVmFsdWUuY2xhc3NMaXN0LmFkZCgnbWluU2xpZGVyUG9pbnRWZXJ0aWNhbCcpO1xyXG4gICAgICBtYXhWYWx1ZS5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJQb2ludFZlcnRpY2FsJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBib2R5LnN0eWxlLmhlaWdodCA9ICcnO1xyXG4gICAgICB0aGlzLnNsaWRlclJhbmdlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xyXG4gICAgICB0aGlzLnNsaWRlclJhbmdlLnN0eWxlLnRvcCA9ICcnO1xyXG4gICAgICB0aGlzLm1pbkxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ21pblNsaWRlckhhbmRlbExhYmVsVmVydGljYWwnKTtcclxuICAgICAgdGhpcy5tYXhMYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCdtYXhTbGlkZXJIYW5kZWxMYWJlbFZlcnRpY2FsJyk7XHJcbiAgICAgIHRoaXMubWluTGFiZWwuY2xhc3NMaXN0LmFkZCgnbWluU2xpZGVySGFuZGVsTGFiZWwnKTtcclxuICAgICAgdGhpcy5tYXhMYWJlbC5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJIYW5kZWxMYWJlbCcpO1xyXG4gICAgICBtaW5WYWx1ZS5jbGFzc0xpc3QucmVtb3ZlKCdtaW5TbGlkZXJQb2ludFZlcnRpY2FsJyk7XHJcbiAgICAgIG1heFZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ21heFNsaWRlclBvaW50VmVydGljYWwnKTtcclxuICAgICAgbWluVmFsdWUuY2xhc3NMaXN0LmFkZCgnbWluU2xpZGVyUG9pbnQnKTtcclxuICAgICAgbWF4VmFsdWUuY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVyUG9pbnQnKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgc2VsZWN0aW9uT2ZQcmVwYXJlZFZhbHVlKHRhcmdldDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAodGFyZ2V0ID09PSAnbWluJykge1xyXG4gICAgICB0aGlzLm15RGF0YVsnbWluJ10gPSB7J21pbic6ICcwJywgJ3NsaWRlcldpZHRoJzpgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGh9YH1cclxuICAgICAgdGhpcy5taW4uc3R5bGUubGVmdCA9ICcwcHgnXHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUubGVmdCA9IDAgKyB0aGlzLm1pbi5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRoaXMuaGFuZGVsc1RvZ2dsZS5jaGVja2VkID09PSB0cnVlIHx8IHRoaXMuaGFuZGVsc1RvZ2dsZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMubXlEYXRhWydtYXgnXSA9IHsnbWF4JzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWAsICdzbGlkZXJXaWR0aCc6YCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWB9O1xyXG4gICAgICAgIHRoaXMubWF4LnN0eWxlLmxlZnQgPSB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUucmlnaHQgPSAodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGgpICsgdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm15RGF0YVsnbWluJ10gPSB7J21pbic6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gLCAnc2xpZGVyV2lkdGgnOmAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gfTtcclxuICAgICAgICB0aGlzLm1pbi5zdHlsZS5sZWZ0ID0gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgICB0aGlzLmludGVydmFsLnN0eWxlLmxlZnQgPSAodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSArIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArJ3B4JztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2lkZU1lbnVJbnB1dHNWYWx1ZXNWYWxpZGF0aW9uQ2hlY2tlcih0YXJnZXQ6IHN0cmluZywgdmFsdWU6IG51bWJlciwgcG9zaXRpb25zOiBudW1iZXIsIG1pbmltdW06IG51bWJlcik6IHZvaWQge1xyXG4gIFxyXG4gICAgaWYgKHRhcmdldCA9PT0gJ21pbicgJiYgdGhpcy5oYW5kZWxzVG9nZ2xlLmNoZWNrZWQpIHtcclxuICAgICAgbGV0IG1pbjogc3RyaW5nID0gKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpIC8gcG9zaXRpb25zKSAqICh2YWx1ZSAtIG1pbmltdW0pICsgJyc7XHJcblxyXG4gICAgICBpZiAoK21pbiA+PSArdGhpcy5teURhdGEubWF4Lm1heCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgbWluID0gK3RoaXMubXlEYXRhLm1heC5tYXggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCArICcnO1xyXG4gICAgICB9IGVsc2UgaWYoK21pbiA8IDApIHtcclxuICAgICAgICBtaW4gPSAnMCc7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLm15RGF0YVsnbWluJ10gPSB7J21pbic6IG1pbiwgJ3NsaWRlcldpZHRoJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWB9O1xyXG4gICAgICB0aGlzLm1pbi5zdHlsZS5sZWZ0ID0gbWluICsgJ3B4JztcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5sZWZ0ID0gK21pbiArIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gJ21pbicpIHtcclxuICAgICAgbGV0IG1pbjogc3RyaW5nID0gKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpIC8gcG9zaXRpb25zKSAqICh2YWx1ZSAtIG1pbmltdW0pICsgJyc7XHJcblxyXG4gICAgICBpZigrbWluIDwgMCkge1xyXG4gICAgICAgIG1pbiA9ICcwJztcclxuICAgICAgfSBlbHNlIGlmICgrbWluID4gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgbWluID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkgKyAnJztcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMubXlEYXRhWydtaW4nXSA9IHsnbWluJzogbWluLCAnc2xpZGVyV2lkdGgnOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGh9YH07XHJcbiAgICAgIHRoaXMubWluLnN0eWxlLmxlZnQgPSBtaW4gKyAncHgnO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLmxlZnQgPSArbWluICsgdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSAnbWF4Jykge1xyXG4gICAgICBsZXQgbWF4OiBzdHJpbmcgPSAoKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1heC5vZmZzZXRXaWR0aCkgLyBwb3NpdGlvbnMpICogKHZhbHVlIC0gbWluaW11bSkgKyAnJztcclxuXHJcbiAgICAgIGlmICgrbWF4IDw9ICt0aGlzLm15RGF0YS5taW4ubWluICsgdGhpcy5taW4ub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICBtYXggPSArdGhpcy5teURhdGEubWluLm1pbiArIHRoaXMubWF4Lm9mZnNldFdpZHRoICsgJyc7XHJcbiAgICAgIH0gZWxzZSBpZigrbWF4ID4gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKXtcclxuICAgICAgICBtYXggPSAodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSArICcnO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5teURhdGFbJ21heCddID0geydtYXgnOiBtYXgsICdzbGlkZXJXaWR0aCc6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1heC5vZmZzZXRXaWR0aH1gfTtcclxuICAgICAgdGhpcy5tYXguc3R5bGUubGVmdCA9IG1heCArICdweCc7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUucmlnaHQgPSAodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtICttYXgpIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgIH1cclxuICB9O1xyXG59OyIsImV4cG9ydCBjbGFzcyBTbGlkZXJSYW5nZSB7XHJcblxyXG4gIHJhbmdlOiBIVE1MRGl2RWxlbWVudDtcclxuICBcclxuICBjb25zdHJ1Y3RvciAoKSB7XHJcbiAgICBsZXQgZWxlbTogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGVsZW0uY2xhc3NMaXN0LmFkZCgnc2xpZGVyUmFuZ2UnKTtcclxuICAgIHRoaXMucmFuZ2UgPSBlbGVtO1xyXG4gIH07XHJcblxyXG4gIGdldEVsZW1lbnRzKCk6IEhUTUxEaXZFbGVtZW50e1xyXG4gICAgcmV0dXJuIHRoaXMucmFuZ2U7XHJcbiAgfTtcclxuXHJcbn07IiwiZXhwb3J0IGNsYXNzIFZhbHVlUmFuZ2Uge1xyXG4gIG1pblZhbHVlOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICBtYXhWYWx1ZTogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yICh2YWx1ZXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9KSB7XHJcbiAgICBsZXQgbWluOkhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IG1heDpIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG1pbi5pbm5lclRleHQgPSB2YWx1ZXMubWluO1xyXG4gICAgbWF4LmlubmVyVGV4dCA9IHZhbHVlcy5tYXg7XHJcbiAgICBtaW4uY2xhc3NMaXN0LmFkZCgnbWluU2xpZGVyUG9pbnQnKTtcclxuICAgIG1heC5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJQb2ludCcpO1xyXG4gICAgdGhpcy5taW5WYWx1ZSA9IG1pbjtcclxuICAgIHRoaXMubWF4VmFsdWUgPSBtYXg7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50cygpOiBvYmplY3Qge1xyXG4gICAgcmV0dXJuIHttaW46IHRoaXMubWluVmFsdWUsIG1heDogdGhpcy5tYXhWYWx1ZX1cclxuICB9XHJcbn0iLCJpbXBvcnQge1NsaWRlclJhbmdlfSBmcm9tICcuL2NvbXBvbmVudHMvc2xpZGVyLXJhbmdlLnRzJztcclxuaW1wb3J0IHtIYW5kZWxzfSBmcm9tICcuL2NvbXBvbmVudHMvaGFuZGVscy50cyc7XHJcbmltcG9ydCB7U2xpZGVyTW92ZW1lbnR9IGZyb20gJy4vY29tcG9uZW50cy9zbGlkZXItbW92ZW1lbnQudHMnO1xyXG5pbXBvcnQge1NpZGVNZW51fSBmcm9tICcuL2NvbXBvbmVudHMvc2lkZS1tZW51LnRzJztcclxuaW1wb3J0IHtWYWx1ZVJhbmdlfSBmcm9tICcuL2NvbXBvbmVudHMvdmFsdWVSYW5nZS50cyc7XHJcbmltcG9ydCB7SGFuZGVsc0xhYmVsc30gZnJvbSAnLi9jb21wb25lbnRzL2hhbmRlbHMtbGFiZWxzLnRzJztcclxuaW1wb3J0IHtTZWxlY3RlZFJhbmdlfSBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0ZWQtcmFuZ2UudHMnO1xyXG5cclxuaW50ZXJmYWNlIFNldHRpbmdzIHtcclxuICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBib29sZWFuXHJcbn07XHJcblxyXG5pbnRlcmZhY2UgU2lkZU1lbnVFbGVtZW50cyB7XHJcbiAgW2tleTogc3RyaW5nXTogSFRNTERpdkVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50O1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIERhdGFPZlZhbHVlUmVmcmVzaCB7XHJcbiAgJ21pbic/OiBzdHJpbmc7XHJcbiAgJ21heCc/OiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgVmlldyB7XHJcbiAgcHJpdmF0ZSB0aGF0OiBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5ncztcclxuICBwcml2YXRlIHNsaWRlclJhbmdlOiBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIHNsaWRlckNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBtaW5IYW5kZWw6IEhUTUxTcGFuRWxlbWVudDtcclxuICBwcml2YXRlIG1heEhhbmRlbDogSFRNTFNwYW5FbGVtZW50O1xyXG4gIHByaXZhdGUgc2xpZGVyTW92ZW1lbnQ6IE9iamVjdDtcclxuICBwcml2YXRlIHNpZGVNZW51OiBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIHNpZGVNZW51Q29udGFpbmVyOiBTdHJpbmcgfCBCb29sZWFuO1xyXG4gIHByaXZhdGUgbWluVmFsdWU6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gIHByaXZhdGUgbWF4VmFsdWU6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gIHByaXZhdGUgbWluTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBtYXhMYWJlbDogSFRNTExhYmVsRWxlbWVudDtcclxuICBwcml2YXRlIGhhbmRlbFRvZ2dsZTogSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIGhhbmRlbExhYmVsVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHByaXZhdGUgcGxhbmVUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBtaW5JbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIG1heElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHByaXZhdGUgaW50ZXJ2YWw6IEhUTUxEaXZFbGVtZW50O1xyXG4gIFxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IodGFyZ2V0OiBIVE1MRGl2RWxlbWVudCwgc2V0dGluZ3M6IFNldHRpbmdzKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICB0aGlzLnRoYXQgPSB0YXJnZXQ7XHJcbiAgICB0aGlzLnNsaWRlclJhbmdlID0gbmV3IFNsaWRlclJhbmdlKCkuZ2V0RWxlbWVudHMoKTtcclxuICAgIHRoaXMubWluSGFuZGVsID0gbmV3IEhhbmRlbHMoKS5nZXRFbGVtZW50cygpLm1pbjtcclxuICAgIHRoaXMubWF4SGFuZGVsID0gbmV3IEhhbmRlbHMoKS5nZXRFbGVtZW50cygpLm1heDtcclxuICAgIHRoaXMubWluVmFsdWUgPSBuZXcgVmFsdWVSYW5nZSh7J21pbic6IHRoaXMuc2V0dGluZ3NbJ21pbiddLCAnbWF4JzogdGhpcy5zZXR0aW5nc1snbWF4J119KS5nZXRFbGVtZW50cygpLm1pbjtcclxuICAgIHRoaXMubWF4VmFsdWUgPSBuZXcgVmFsdWVSYW5nZSh7J21pbic6IHRoaXMuc2V0dGluZ3NbJ21pbiddLCAnbWF4JzogdGhpcy5zZXR0aW5nc1snbWF4J119KS5nZXRFbGVtZW50cygpLm1heDtcclxuICAgIGlmIChzZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUpIHtcclxuICAgICAgbGV0IHNpZGVNZW51RWxlbWVudHM6IFNpZGVNZW51RWxlbWVudHMgPSBuZXcgU2lkZU1lbnUoKS5nZXRFbGVtZW50cygpO1xyXG4gICAgICB0aGlzLnNpZGVNZW51ID0gc2lkZU1lbnVFbGVtZW50cy5tZW51O1xyXG4gICAgICB0aGlzLmhhbmRlbFRvZ2dsZSA9IHNpZGVNZW51RWxlbWVudHMuaGFuZGVsVG9nZ2xlO1xyXG4gICAgICB0aGlzLmhhbmRlbExhYmVsVG9nZ2xlID0gc2lkZU1lbnVFbGVtZW50cy5oYW5kZWxMYWJlbFRvZ2dsZTtcclxuICAgICAgdGhpcy5wbGFuZVRvZ2dsZSA9IHNpZGVNZW51RWxlbWVudHMucGxhbmVUb2dnbGU7XHJcbiAgICAgIHRoaXMubWluSW5wdXQgPSBzaWRlTWVudUVsZW1lbnRzLm1pbklucHV0O1xyXG4gICAgICB0aGlzLm1heElucHV0ID0gc2lkZU1lbnVFbGVtZW50cy5tYXhJbnB1dDtcclxuICAgIH07XHJcbiAgICB0aGlzLnNpZGVNZW51Q29udGFpbmVyID0gc2V0dGluZ3Muc2lkZU1lbnVDb250YWluZXI7XHJcbiAgICB0aGlzLm1pbkxhYmVsID0gbmV3IEhhbmRlbHNMYWJlbHMoKS5nZXRFbGVtZW50cygpLm1pbjtcclxuICAgIHRoaXMubWF4TGFiZWwgPSBuZXcgSGFuZGVsc0xhYmVscygpLmdldEVsZW1lbnRzKCkubWF4O1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IG5ldyBTZWxlY3RlZFJhbmdlKCkuZ2V0RWxlbWVudHMoKTtcclxuICAgIGlmKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddICE9PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLnNsaWRlck1vdmVtZW50ID0gbmV3IFNsaWRlck1vdmVtZW50KHsnbWluJzogdGhpcy5taW5IYW5kZWwsICdtYXgnOiB0aGlzLm1heEhhbmRlbCwnbWluTGFiZWwnOiB0aGlzLm1pbkxhYmVsLCAnbWF4TGFiZWwnOiB0aGlzLm1heExhYmVsICwnc2xpZGVyUmFuZ2UnOiB0aGlzLnNsaWRlclJhbmdlLCAncGxhbmVUb2dnbGUnOiB0aGlzLnBsYW5lVG9nZ2xlLCAnaGFuZGVsc1RvZ2dsZSc6IHRoaXMuaGFuZGVsVG9nZ2xlLCAnaW50ZXJ2YWwnOiB0aGlzLmludGVydmFsLCAnc3RlcCc6IHRoaXMuc2V0dGluZ3Muc3RlcH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zbGlkZXJNb3ZlbWVudCA9IG5ldyBTbGlkZXJNb3ZlbWVudCh7J21pbic6IHRoaXMubWluSGFuZGVsLCAnbWF4JzogdGhpcy5tYXhIYW5kZWwsJ21pbkxhYmVsJzogdGhpcy5taW5MYWJlbCwgJ21heExhYmVsJzogdGhpcy5tYXhMYWJlbCAsJ3NsaWRlclJhbmdlJzogdGhpcy5zbGlkZXJSYW5nZSwgJ3BsYW5lVG9nZ2xlJzogdGhpcy5zZXR0aW5ncy52ZXJ0aWNhbCwgJ2hhbmRlbHNUb2dnbGUnOiB0aGlzLnNldHRpbmdzLnJhbmdlLCAnaW50ZXJ2YWwnOiB0aGlzLmludGVydmFsLCAnc3RlcCc6IHRoaXMuc2V0dGluZ3Muc3RlcH0pO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBkaXNwbGF5RWxlbWVudHMoKTogdm9pZCB7XHJcbiAgICBsZXQgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5zbGlkZXJDb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2xpZGVyQm9keScpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZCh0aGlzLnNsaWRlclJhbmdlKTtcclxuICAgIHRoaXMudGhhdC5hcHBlbmQoY29udGFpbmVyKTtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMubWluSGFuZGVsKTtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMubWF4SGFuZGVsKTtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMubWluVmFsdWUpO1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZS5hcHBlbmQodGhpcy5tYXhWYWx1ZSk7XHJcbiAgICB0aGlzLmludGVydmFsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgdGhpcy5taW5IYW5kZWwuYXBwZW5kKHRoaXMubWluTGFiZWwpO1xyXG4gICAgdGhpcy5tYXhIYW5kZWwuYXBwZW5kKHRoaXMubWF4TGFiZWwpO1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1snaGFuZGVsc0xhYmVsJ10gPT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMubWluTGFiZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdGhpcy5tYXhMYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gIT09IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kZWxMYWJlbFRvZ2dsZS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgaWYodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gIT09IGZhbHNlKSB7XHJcbiAgICAgIGlmICh0aGlzLnNpZGVNZW51Q29udGFpbmVyICE9PSAnZmFsc2UnKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNpZGVNZW51Q29udGFpbmVyKS5hcHBlbmQodGhpcy5zaWRlTWVudSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRoYXQuYXBwZW5kKHRoaXMuc2lkZU1lbnUpXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1tcInJhbmdlXCJdID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMubWF4SGFuZGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBpZih0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSAhPT0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLmhhbmRlbFRvZ2dsZS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1heElucHV0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLnNldHRpbmdzWyd2ZXJ0aWNhbCddID09PSB0cnVlKSB7XHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddICE9PSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMucGxhbmVUb2dnbGUuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJNb3ZlbWVudC5jaGFuZ2VQbGFuZSh0aGlzLnBsYW5lVG9nZ2xlLCB0aGlzLnNsaWRlckNvbnRhaW5lciwgdGhpcy5taW5WYWx1ZSwgdGhpcy5tYXhWYWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJNb3ZlbWVudC5jaGFuZ2VQbGFuZSh0cnVlLCB0aGlzLnNsaWRlckNvbnRhaW5lciwgdGhpcy5taW5WYWx1ZSwgdGhpcy5tYXhWYWx1ZSk7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLnNldHRpbmdzLnN0ZXAgIT09IGZhbHNlICYmIHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddICE9PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLm1heElucHV0LnNldEF0dHJpYnV0ZSgnc3RlcCcsIHRoaXMuc2V0dGluZ3Muc3RlcCArIFwiXCIpO1xyXG4gICAgICB0aGlzLm1pbklucHV0LnNldEF0dHJpYnV0ZSgnc3RlcCcsIHRoaXMuc2V0dGluZ3Muc3RlcCArIFwiXCIpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZWZyZXNoQ3VycmVudFZhbHVlcyhuZXdEYXRhOiBEYXRhT2ZWYWx1ZVJlZnJlc2gpOiB2b2lkIHtcclxuICAgIGxldCBzZXR0OiBib29sZWFuIHwgc3RyaW5nID0gdGhpcy5zZXR0aW5nc1sncmFuZ2UnXTtcclxuICAgIGZ1bmN0aW9uIHJlZnJlc2hDdXJyZW50VmFsdWVzTXVsdGlDaGVjayhzZXR0aW5nczogYm9vbGVhbiB8IHN0cmluZykge1xyXG4gICAgICByZXR1cm4gJ21pbicgaW4gbmV3RGF0YSAmJiAnbWF4JyBpbiBuZXdEYXRhICYmIHNldHRpbmdzID09PSB0cnVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAocmVmcmVzaEN1cnJlbnRWYWx1ZXNNdWx0aUNoZWNrKHNldHQpKSB7XHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddICE9PSBmYWxzZSAmJiB0aGlzLmhhbmRlbFRvZ2dsZS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5zaWRlTWVudS5xdWVyeVNlbGVjdG9yKCcjbWluU2xpZGVyVmFsdWUnKS50ZXh0Q29udGVudCA9IG5ld0RhdGEubWluO1xyXG4gICAgICAgIHRoaXMuc2lkZU1lbnUucXVlcnlTZWxlY3RvcignI21heFNsaWRlclZhbHVlJykudGV4dENvbnRlbnQgPSBgIC0gJHtuZXdEYXRhLm1heH1gO1xyXG4gICAgICAgIHRoaXMuc2lkZU1lbnUucXVlcnlTZWxlY3RvcignLmN1c3RvbVNsaWRlck1pbklucHV0JykudmFsdWUgPSBuZXdEYXRhLm1pbjtcclxuICAgICAgICB0aGlzLnNpZGVNZW51LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b21TbGlkZXJNYXhJbnB1dCcpLnZhbHVlID0gbmV3RGF0YS5tYXg7XHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMubWluTGFiZWwudGV4dENvbnRlbnQgPSBuZXdEYXRhLm1pbjtcclxuICAgICAgdGhpcy5tYXhMYWJlbC50ZXh0Q29udGVudCA9IG5ld0RhdGEubWF4O1xyXG4gICAgfSBlbHNlIGlmICgnbWluJyBpbiBuZXdEYXRhKSB7XHJcbiAgICAgIHRoaXMubWluTGFiZWwudGV4dENvbnRlbnQgPSBuZXdEYXRhLm1pbjtcclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddICE9PSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuc2lkZU1lbnUucXVlcnlTZWxlY3RvcignI21pblNsaWRlclZhbHVlJykudGV4dENvbnRlbnQgPSBuZXdEYXRhLm1pbjs7XHJcbiAgICAgICAgdGhpcy5zaWRlTWVudS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tU2xpZGVyTWluSW5wdXQnKS52YWx1ZSA9IG5ld0RhdGEubWluO1xyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tYXhMYWJlbC50ZXh0Q29udGVudCA9IG5ld0RhdGEubWF4O1xyXG4gICAgICBpZiAodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gIT09IGZhbHNlKSB7XHJcbiAgICAgICAgdGhpcy5zaWRlTWVudS5xdWVyeVNlbGVjdG9yKCcjbWF4U2xpZGVyVmFsdWUnKS50ZXh0Q29udGVudCA9IGAgLSAke25ld0RhdGEubWF4fWA7XHJcbiAgICAgICAgdGhpcy5zaWRlTWVudS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tU2xpZGVyTWF4SW5wdXQnKS52YWx1ZSA9IG5ld0RhdGEubWF4O1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICAgIG5ldyBIYW5kZWxzTGFiZWxzKCkuY2VudGVyaW5nUmVsYXRpdmVUb0hhbmRsZXModGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGgsIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRoLCB0aGlzLm1pbkxhYmVsLm9mZnNldFdpZHRoLCB0aGlzLm1heExhYmVsLm9mZnNldFdpZHRoLCB0aGlzLm1pbkxhYmVsLCB0aGlzLm1heExhYmVsKTtcclxuICB9O1xyXG5cclxuICBjYWxsSGFuZGVsTGFiZWxUb2dnbGVDaGFuZ2VyKHRhcmdldDogVmlldyk6IHZvaWQge1xyXG4gICAgbmV3IEhhbmRlbHNMYWJlbHMoKS5kaXNwbGF5Q29udHJvbGxlcih0YXJnZXQuaGFuZGVsTGFiZWxUb2dnbGUsIHRoaXMubWluTGFiZWwsIHRoaXMubWF4TGFiZWwpO1xyXG4gICAgaWYgKHRhcmdldC5oYW5kZWxMYWJlbFRvZ2dsZS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgIG5ldyBIYW5kZWxzTGFiZWxzKCkuY2VudGVyaW5nUmVsYXRpdmVUb0hhbmRsZXModGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGgsIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRoLCB0aGlzLm1pbkxhYmVsLm9mZnNldFdpZHRoLCB0aGlzLm1heExhYmVsLm9mZnNldFdpZHRoLCB0aGlzLm1pbkxhYmVsLCB0aGlzLm1heExhYmVsKVxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjYWxsTWF4SGFuZGVsVG9nZ2xlQ2hhbmdlcih0YXJnZXQ6IFZpZXcpOiB2b2lkIHtcclxuICAgIGlmICh0YXJnZXQuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMuc2xpZGVyTW92ZW1lbnQubXlEYXRhWydtYXgnXSA9IHsnbWF4JzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRofWAsICdzbGlkZXJXaWR0aCc6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbkhhbmRlbC5vZmZzZXRXaWR0aH1gfVxyXG4gICAgICB0aGlzLm1heEhhbmRlbC5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRofXB4YDtcclxuICAgICAgdGhpcy5zaWRlTWVudS5xdWVyeVNlbGVjdG9yKCcjbWF4U2xpZGVyVmFsdWUnKS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICB0aGlzLm1heElucHV0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgdGhpcy5tYXhJbnB1dC5zdHlsZS5vcGFjaXR5ID0gJzAuMyc7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH07XHJcbiAgICBcclxuICAgIG5ldyBIYW5kZWxzKCkuZGlzcGxheUNvbnRyb2xsZXIodGFyZ2V0LmhhbmRlbFRvZ2dsZSwgdGhpcy5tYXhIYW5kZWwpO1xyXG5cclxuICAgIGlmICh0YXJnZXQuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5tYXhJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUucmlnaHQgPSB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbkhhbmRlbC5vZmZzZXRXaWR0aCAvIDIgKSArICdweCc7XHJcbiAgICAgIGlmICh0aGlzLnNsaWRlck1vdmVtZW50Lm15RGF0YS5taW5bJ21pbiddID49IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1heEhhbmRlbC5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJNb3ZlbWVudC5teURhdGFbJ21pbiddID0geydtaW4nOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXhIYW5kZWwub2Zmc2V0V2lkdGggLSB0aGlzLm1pbkhhbmRlbC5vZmZzZXRXaWR0aH1gLCAnc2xpZGVyV2lkdGgnOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXhIYW5kZWwub2Zmc2V0V2lkdGh9YH1cclxuICAgICAgICB0aGlzLm1pbkhhbmRlbC5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRoIC0gdGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGh9cHhgO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZWZyZXNoTWF4U2lkZU1lbnVEYXRhKGRhdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5zaWRlTWVudS5xdWVyeVNlbGVjdG9yKCcjbWF4U2xpZGVyVmFsdWUnKS50ZXh0Q29udGVudCA9IGAgLSAke2RhdGF9YDtcclxuICAgIHRoaXMubWF4SW5wdXQuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgIHRoaXMubWF4SW5wdXQudmFsdWUgPSBgJHtkYXRhfWA7XHJcbiAgfTtcclxuXHJcbiAgaW5wdXRzUG9zc2libGVSYW5nZSggZGF0YTogb2JqZWN0LCBtaW46IEhUTUxJbnB1dEVsZW1lbnQsIG1heDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xyXG4gICAgbWluLnNldEF0dHJpYnV0ZSgnbWF4JywgZGF0YS5tYXgpO1xyXG4gICAgbWluLnNldEF0dHJpYnV0ZSgnbWluJywgZGF0YS5taW4pO1xyXG4gICAgbWF4LnNldEF0dHJpYnV0ZSgnbWF4JywgZGF0YS5tYXgpO1xyXG4gIH07XHJcbiAgICBcclxufTtcclxuIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vY29tcG9uZW50cy92aWV3L3ZpZXcudHMnO1xyXG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RlbC9Nb2RlbC50cyc7XHJcbmltcG9ydCB7IEZhY2FkZSB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RlbC9mYWNhZGUudHMnO1xyXG5pbXBvcnQgeyBQcmVzZW50ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJlc2VudGVyL3ByZXNlbnRlci50cyc7XHJcblxyXG4oZnVuY3Rpb24oICQgKSB7XHJcbiAgJC5mbi50ZXN0U2xpZGVyID0gZnVuY3Rpb24oIG9wdGlvbnMgKSB7XHJcblxyXG4gICAgdmFyIHNldHRpbmdzID0gJC5leHRlbmQoIHtcclxuICAgICAgJ21pbic6ICcwJyxcclxuICAgICAgJ21heCc6ICcxMCcsXHJcbiAgICAgICdyYW5nZSc6IGZhbHNlLFxyXG4gICAgICAnc2lkZS1tZW51JzogZmFsc2UsXHJcbiAgICAgICdoYW5kZWxzTGFiZWwnOiBmYWxzZSxcclxuICAgICAgJ3ZlcnRpY2FsJzogZmFsc2UsXHJcbiAgICAgICdzdGVwJzogZmFsc2UsXHJcbiAgICAgICdzaWRlTWVudUNvbnRhaW5lcic6ICdmYWxzZSdcclxuICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgIGxldCB0aGF0OiBIVE1MRGl2RWxlbWVudCA9IHRoaXM7XHJcbiAgICBcclxuICAgIGxldCBtb2RlbDtcclxuICAgIGlmICgnY3VycmVudC1taW4nIGluIHNldHRpbmdzICYmICdjdXJyZW50LW1heCcgaW4gc2V0dGluZ3MpIHtcclxuICAgICAgbW9kZWwgPSBuZXcgTW9kZWwoeydtaW4nOiBzZXR0aW5nc1snbWluJ10sIG1heDogc2V0dGluZ3NbJ21heCddLCAnY3VycmVudC1taW4nOiBzZXR0aW5nc1snY3VycmVudC1taW4nXSwgJ2N1cnJlbnQtbWF4Jzogc2V0dGluZ3NbJ2N1cnJlbnQtbWF4J119KTtcclxuICAgIH0gZWxzZSBpZiAoJ2N1cnJlbnQtbWluJyBpbiBzZXR0aW5ncykge1xyXG4gICAgICBtb2RlbCA9IG5ldyBNb2RlbCh7J21pbic6IHNldHRpbmdzWydtaW4nXSwgbWF4OiBzZXR0aW5nc1snbWF4J10sICdjdXJyZW50LW1pbic6IHNldHRpbmdzWydjdXJyZW50LW1pbiddLCAnY3VycmVudC1tYXgnOiBzZXR0aW5nc1snbWF4J119KTtcclxuICAgIH0gZWxzZSBpZiAoJ2N1cnJlbnQtbWF4JyBpbiBzZXR0aW5ncykge1xyXG4gICAgICBtb2RlbCA9IG5ldyBNb2RlbCh7J21pbic6IHNldHRpbmdzWydtaW4nXSwgbWF4OiBzZXR0aW5nc1snbWF4J10sICdjdXJyZW50LW1pbic6IHNldHRpbmdzWydtaW4nXSwgJ2N1cnJlbnQtbWF4Jzogc2V0dGluZ3NbJ2N1cnJlbnQtbWF4J119KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1vZGVsID0gbmV3IE1vZGVsKHsnbWluJzogc2V0dGluZ3NbJ21pbiddLCBtYXg6IHNldHRpbmdzWydtYXgnXSwgJ2N1cnJlbnQtbWluJzogc2V0dGluZ3NbJ21pbiddLCAnY3VycmVudC1tYXgnOiBzZXR0aW5nc1snbWF4J119KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHZpZXcgPSBuZXcgVmlldyh0aGF0LCBzZXR0aW5ncyk7XHJcbiAgICBcclxuICAgIGxldCBmYWNhZGUgPSBuZXcgRmFjYWRlKG1vZGVsKVxyXG4gICAgXHJcbiAgICBsZXQgcHJlc2VudGVyID0gbmV3IFByZXNlbnRlcih2aWV3LCBmYWNhZGUpO1xyXG4gICAgcHJlc2VudGVyLmJpbmRFdmVudExpc3RlbmVycygpO1xyXG4gIH07XHJcbn0pKGpRdWVyeSk7Il0sInNvdXJjZVJvb3QiOiIifQ==