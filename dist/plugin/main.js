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
        this.model.data['current-min'] = String(Math.round(+this.model.data['min'] + +data['min'] / (+data['sliderWidth'] / (+this.model.data['max'] - +this.model.data['min']))));
        return {
          'min': this.model.data['current-min']
        };
      } else {
        this.model.data['current-max'] = String(Math.round(+this.model.data['min'] + +data['max'] / (+data['sliderWidth'] / (+this.model.data['max'] - +this.model.data['min']))));
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
      return +this.model.data['max'];
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
        'positions': String(+this.model.data.max - +this.model.data.min),
        'minimum': this.model.data.min
      };
    }
  }]);

  return Facade;
}();
;

/***/ }),

/***/ "./src/components/model/model.ts":
/*!***************************************!*\
  !*** ./src/components/model/model.ts ***!
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
        'positions': "".concat(+this.data.max - +this.data.min)
      };
    }
  }]);

  return Model;
}();

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
    key: "startViewMonitoring",
    value: function startViewMonitoring() {
      this.monitorsCurrentHandelsPositions();
      this.monitorsViewRequests();
    }
  }, {
    key: "monitorsCurrentHandelsPositions",
    value: function monitorsCurrentHandelsPositions() {
      var view = this.viewLink;
      var facade = this.facadeLink;
      view.sliderMovement.currentHandelsPositions = new Proxy(view.sliderMovement.currentHandelsPositions, {
        set: function set(target, prop, val) {
          if (_typeof(val) === 'object') {
            target[String(prop)] = val;
            var modelResult = facade.refreshModelData(val, String(prop));
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
    key: "monitorsViewRequests",
    value: function monitorsViewRequests() {
      var view = this.viewLink;
      var facade = this.facadeLink;
      view.dataRequestStatus = new Proxy(view.dataRequestStatus, {
        set: function set(target, prop, val) {
          if (typeof val === 'boolean' && val === true) {
            if (prop === 'getMaxData') {
              var result = facade.getMaxData();
              view.refreshMaxSideMenuData(result);
            }

            ;

            if (prop === 'getMinPositionsAmount') {
              var positions = facade.getPositionsAmount();
              view.minInput ? view.sliderMovement.sideMenuInputsValuesValidationChecker('min', +view.minInput.value, +positions['positions'], +positions['minimum']) : false;
            }

            ;

            if (prop === 'getMaxPositionsAmount') {
              var _positions = facade.getPositionsAmount();

              view.maxInput ? view.sliderMovement.sideMenuInputsValuesValidationChecker('max', +view.maxInput.value, +_positions['positions'], +_positions['minimum']) : false;
            }

            ;

            if (prop === 'getPossibleRange') {
              var possibleRange = facade.getPossibleRange();
              view.minInput && view.maxInput ? view.inputsPossibleRange(possibleRange, view.minInput, view.maxInput) : false;
            }

            ;

            if (prop === 'startHandelsPosition') {
              var startPositions = facade.startHandelsPosition();
              view.sliderMovement.startHandlersPositions(startPositions);
              view.refreshCurrentValues(startPositions);
            }

            if (prop === 'getStepPositionsAmount') {
              var stepAmount = facade.getPositionsAmount();
              view.sliderMovement.stepAmount = +stepAmount['positions'];
            }

            return true;
          } else {
            return false;
          }

          ;
        }
      });
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var SideMenu = function SideMenu() {
  _classCallCheck(this, SideMenu);

  _defineProperty(this, "customSliderMenuContainer", void 0);

  _defineProperty(this, "handelToggle", void 0);

  _defineProperty(this, "handelLabelToggle", void 0);

  _defineProperty(this, "planeToggle", void 0);

  _defineProperty(this, "minInput", void 0);

  _defineProperty(this, "maxInput", void 0);

  _defineProperty(this, "minSliderValueOutput", void 0);

  _defineProperty(this, "maxSliderValueOutput", void 0);

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
  this.minSliderValueOutput = minSliderValueOutput;
  this.maxSliderValueOutput = maxSliderValueOutput;
};
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

;
;
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

    _defineProperty(this, "currentHandelsPositions", {
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
      this.currentHandelsPositions.min.min = min;
      this.currentHandelsPositions.max.max = max;
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
      var interval = this.interval;
      var step;
      var vertical;
      var doubleHandels;

      function checkCurrentSliderSettings() {
        typeof that.handelsToggle !== 'boolean' ? doubleHandels = that.handelsToggle.checked : doubleHandels = that.handelsToggle;
        ;
        typeof that.planeToggle !== 'boolean' ? vertical = that.planeToggle.checked : that.planeToggle;

        if (vertical) {
          shift = event.clientY - min.getBoundingClientRect().top - min.offsetWidth;
        } else {
          shift = event.clientX - min.getBoundingClientRect().left;
        }

        ;
      }

      ;
      checkCurrentSliderSettings();

      if (this.stepAmount && this.step !== false) {
        step = (sliderRange.offsetWidth - min.offsetWidth) / this.stepAmount * +this.step;
      }

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      if (test) {
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
          if (newLeft >= +that.currentHandelsPositions.min.min + step || newLeft <= +that.currentHandelsPositions.min.min - step) {
            newLeft >= +that.currentHandelsPositions.min.min + step ? newLeft = +that.currentHandelsPositions.min.min + step : false;
            newLeft <= +that.currentHandelsPositions.min.min - step ? newLeft = +that.currentHandelsPositions.min.min - step : false;
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
            if (newLeft >= +that.currentHandelsPositions.max['max'] - max.offsetWidth) {
              newLeft = +that.currentHandelsPositions.max['max'] - max.offsetWidth;
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
            that.currentHandelsPositions['min'] = {
              'min': "".concat(newLeft),
              'sliderWidth': "".concat(sliderRange.offsetWidth - min.offsetWidth)
            };
          }

          ;
          minLabel.style.left = (min.offsetWidth - minLabel.offsetWidth - 1) / 2 + 'px';
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
    key: "maxHandelListener",
    value: function maxHandelListener(event, test) {
      var max = this.max;
      var min = this.min;
      var sliderRange = this.sliderRange;
      var shift;
      var maxLabel = this.maxLabel;
      var that = this;
      var interval = this.interval;
      var step;
      var doubleHandels;
      var vertical;

      if (this.stepAmount && this.step !== false) {
        step = (sliderRange.offsetWidth - min.offsetWidth) / this.stepAmount * +this.step;
      }

      function checkCurrentSliderSettings() {
        typeof that.handelsToggle !== 'boolean' ? doubleHandels = that.handelsToggle.checked : doubleHandels = that.handelsToggle;
        ;
        typeof that.planeToggle !== 'boolean' ? vertical = that.planeToggle.checked : that.planeToggle;

        if (vertical) {
          shift = event.clientY - max.getBoundingClientRect().top - max.offsetWidth;
        } else {
          shift = event.clientX - max.getBoundingClientRect().left;
        }
      }

      ;
      checkCurrentSliderSettings();
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
          if (newLeft >= +that.currentHandelsPositions.max.max + step || newLeft <= +that.currentHandelsPositions.max.max - step) {
            newLeft >= +that.currentHandelsPositions.max.max + step ? newLeft = +that.currentHandelsPositions.max.max + step : false;
            newLeft <= +that.currentHandelsPositions.max.max - step ? newLeft = +that.currentHandelsPositions.max.max - step : false;
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

          if (newLeft <= +that.currentHandelsPositions.min['min'] + min.offsetWidth) {
            newLeft = +that.currentHandelsPositions.min['min'] + min.offsetWidth;
          }

          ;
          max.style.left = newLeft + 'px';
          interval.style.right = sliderRange.offsetWidth - newLeft - max.offsetWidth / 2 + 'px';

          if (newLeft !== undefined || rightEdge !== undefined) {
            that.currentHandelsPositions['max'] = {
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
      var toggleResult;
      typeof toggle === 'boolean' ? toggleResult = toggle : toggleResult = toggle.checked;

      if (toggleResult) {
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
      var toggleResult;
      typeof this.handelsToggle === 'boolean' ? toggleResult = this.handelsToggle : toggleResult = this.handelsToggle.checked;

      if (target === 'min') {
        this.currentHandelsPositions['min'] = {
          'min': '0',
          'sliderWidth': "".concat(this.sliderRange.offsetWidth - this.min.offsetWidth)
        };
        this.min.style.left = '0px';
        this.interval.style.left = 0 + this.min.offsetWidth / 2 + 'px';
      } else {
        if (toggleResult) {
          this.currentHandelsPositions['max'] = {
            'max': "".concat(this.sliderRange.offsetWidth - this.min.offsetWidth),
            'sliderWidth': "".concat(this.sliderRange.offsetWidth - this.min.offsetWidth)
          };
          this.max.style.left = this.sliderRange.offsetWidth - this.min.offsetWidth + 'px';
          this.interval.style.right = this.sliderRange.offsetWidth - this.sliderRange.offsetWidth + this.min.offsetWidth / 2 + 'px';
        } else {
          this.currentHandelsPositions['min'] = {
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
      var toggleResult;
      typeof this.handelsToggle === 'boolean' ? toggleResult = this.handelsToggle : toggleResult = this.handelsToggle.checked;

      if (target === 'min' && toggleResult) {
        var min = (this.sliderRange.offsetWidth - this.min.offsetWidth) / positions * (value - minimum) + '';

        if (+min >= +this.currentHandelsPositions.max.max - this.min.offsetWidth) {
          min = +this.currentHandelsPositions.max.max - this.min.offsetWidth + '';
        } else if (+min < 0) {
          min = '0';
        }

        ;
        this.currentHandelsPositions['min'] = {
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
        this.currentHandelsPositions['min'] = {
          'min': _min,
          'sliderWidth': "".concat(this.sliderRange.offsetWidth - this.min.offsetWidth)
        };
        this.min.style.left = _min + 'px';
        this.interval.style.left = +_min + this.min.offsetWidth / 2 + 'px';
      } else if (target === 'max') {
        var max = (this.sliderRange.offsetWidth - this.max.offsetWidth) / positions * (value - minimum) + '';

        if (+max <= +this.currentHandelsPositions.min.min + this.min.offsetWidth) {
          max = +this.currentHandelsPositions.min.min + this.max.offsetWidth + '';
        } else if (+max > this.sliderRange.offsetWidth - this.min.offsetWidth) {
          max = this.sliderRange.offsetWidth - this.min.offsetWidth + '';
        }

        ;
        this.currentHandelsPositions['max'] = {
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
/* harmony import */ var _components_slider_range__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/slider-range */ "./src/components/view/components/slider-range.ts");
/* harmony import */ var _components_handels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/handels */ "./src/components/view/components/handels.ts");
/* harmony import */ var _components_slider_movement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/slider-movement */ "./src/components/view/components/slider-movement.ts");
/* harmony import */ var _components_side_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/side-menu */ "./src/components/view/components/side-menu.ts");
/* harmony import */ var _components_valueRange__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/valueRange */ "./src/components/view/components/valueRange.ts");
/* harmony import */ var _components_handels_labels__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/handels-labels */ "./src/components/view/components/handels-labels.ts");
/* harmony import */ var _components_selected_range__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/selected-range */ "./src/components/view/components/selected-range.ts");
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

    _defineProperty(this, "sideMenuContainer", void 0);

    _defineProperty(this, "minValue", void 0);

    _defineProperty(this, "maxValue", void 0);

    _defineProperty(this, "minLabel", void 0);

    _defineProperty(this, "maxLabel", void 0);

    _defineProperty(this, "interval", void 0);

    _defineProperty(this, "sideMenu", void 0);

    _defineProperty(this, "handelToggle", void 0);

    _defineProperty(this, "handelLabelToggle", void 0);

    _defineProperty(this, "planeToggle", void 0);

    _defineProperty(this, "minInput", void 0);

    _defineProperty(this, "maxInput", void 0);

    _defineProperty(this, "minSliderValueOutput", void 0);

    _defineProperty(this, "maxSliderValueOutput", void 0);

    _defineProperty(this, "dataRequestStatus", {
      "getMaxData": false,
      "getMinPositionsAmount": false,
      "getMaxPositionsAmount": false,
      "getPossibleRange": false,
      "getStepPositionsAmount": false
    });

    this.settings = settings;
    this.that = target;
    this.sliderRange = new _components_slider_range__WEBPACK_IMPORTED_MODULE_0__["SliderRange"]().getElements();
    var handels = new _components_handels__WEBPACK_IMPORTED_MODULE_1__["Handels"]();
    this.minHandel = handels.minHandel;
    this.maxHandel = handels.maxHandel;
    var valueRange = new _components_valueRange__WEBPACK_IMPORTED_MODULE_4__["ValueRange"]({
      'min': this.settings['min'],
      'max': this.settings['max']
    });
    this.minValue = valueRange.minValue;
    this.maxValue = valueRange.maxValue;

    if (settings['side-menu'] === true) {
      var sideMenu = new _components_side_menu__WEBPACK_IMPORTED_MODULE_3__["SideMenu"]();
      this.sideMenu = sideMenu.customSliderMenuContainer;
      this.handelToggle = sideMenu.handelToggle;
      this.handelLabelToggle = sideMenu.handelLabelToggle;
      this.planeToggle = sideMenu.planeToggle;
      this.minInput = sideMenu.minInput;
      this.maxInput = sideMenu.maxInput;
      this.minSliderValueOutput = sideMenu.minSliderValueOutput;
      this.maxSliderValueOutput = sideMenu.maxSliderValueOutput;
    }

    ;
    this.sideMenuContainer = settings.sideMenuContainer;
    var handelsLabels = new _components_handels_labels__WEBPACK_IMPORTED_MODULE_5__["HandelsLabels"]();
    this.minLabel = handelsLabels.minLabel;
    this.maxLabel = handelsLabels.maxLabel;
    this.interval = new _components_selected_range__WEBPACK_IMPORTED_MODULE_6__["SelectedRange"]().getElements();

    if (this.settings['side-menu'] === true) {
      this.sliderMovement = new _components_slider_movement__WEBPACK_IMPORTED_MODULE_2__["SliderMovement"]({
        'min': this.minHandel,
        'max': this.maxHandel,
        'minLabel': this.minLabel,
        'maxLabel': this.maxLabel,
        'sliderRange': this.sliderRange,
        'planeToggle': this.planeToggle ? this.planeToggle : this.settings.vertical,
        'handelsToggle': this.handelToggle ? this.handelToggle : this.settings.range,
        'interval': this.interval,
        'step': this.settings.step
      });
    } else {
      this.sliderMovement = new _components_slider_movement__WEBPACK_IMPORTED_MODULE_2__["SliderMovement"]({
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
    this.sliderContainer = document.createElement('div');
  }

  _createClass(View, [{
    key: "displayElements",
    value: function displayElements() {
      this.sliderContainer.classList.add('sliderBody');
      this.sliderContainer.append(this.sliderRange);
      this.that.append(this.sliderContainer);
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
        if (this.settings['side-menu'] === true && this.handelLabelToggle) {
          this.handelLabelToggle.checked = true;
        }

        ;
      }

      ;

      if (this.settings['side-menu'] === true && this.sideMenu) {
        this.dataRequestStatus["getPossibleRange"] = true;

        if (this.sideMenuContainer !== 'false' && typeof this.sideMenuContainer === 'string') {
          document.querySelectorAll(this.sideMenuContainer)[0].append(this.sideMenu);
        } else {
          this.that.append(this.sideMenu);
        }

        ;
      }

      ;

      if (this.settings["range"] === true) {
        this.maxHandel.style.display = 'block';
        this.interval.style.display = 'block';

        if (this.settings['side-menu'] === true) {
          this.handelToggle ? this.handelToggle.checked = true : false;
          this.maxInput ? this.maxInput.style.opacity = '1' : false;
        }

        ;
      }

      ;

      if (this.settings['vertical'] === true) {
        if (this.settings['side-menu'] === true && this.planeToggle) {
          this.planeToggle ? this.planeToggle.checked = true : false;
          this.sliderMovement.changePlane(this.planeToggle, this.sliderContainer, this.minValue, this.maxValue);
        } else {
          this.sliderMovement.changePlane(true, this.sliderContainer, this.minValue, this.maxValue);
        }

        ;
      }

      ;

      if (this.settings.step === true && this.settings['side-menu'] === true) {
        this.maxInput ? this.maxInput.setAttribute('step', this.settings.step + "") : false;
        this.minInput ? this.minInput.setAttribute('step', this.settings.step + "") : false;
      }

      ;

      if (this.settings.step) {
        this.dataRequestStatus["getStepPositionsAmount"] = true;
      }

      this.dataRequestStatus["startHandelsPosition"] = true;
    }
  }, {
    key: "bindEventListeners",
    value: function bindEventListeners() {
      if (this.settings['side-menu'] === true && this.handelLabelToggle) {
        this.handelLabelToggle.addEventListener('change', this.makeBindLabelToggle.bind(this));
      }

      ;

      if (this.settings['side-menu'] === true && this.handelToggle) {
        this.handelToggle.addEventListener('change', this.makeBindHandelToggle.bind(this));
      }

      ;

      if (this.settings['side-menu'] === true && this.planeToggle) {
        this.planeToggle.addEventListener('change', this.makeBindForPlaneToggle.bind(this));
      }

      ;
      this.minValue.addEventListener('click', this.makeBindForSelectionMinValue.bind(this));
      this.maxValue.addEventListener('click', this.makeBindForSelectionMaxValue.bind(this));

      if (this.settings['side-menu'] === true && this.minInput) {
        this.minInput.addEventListener('change', this.makeBindForMinInput.bind(this));
      }

      ;

      if (this.settings['side-menu'] === true && this.maxInput) {
        this.maxInput.addEventListener('change', this.makeBindForMaxInput.bind(this));
      }

      ;
    }
  }, {
    key: "bindEventHandelsMovement",
    value: function bindEventHandelsMovement() {
      this.bindForMin();
      this.bindForMax();
    }
  }, {
    key: "refreshCurrentValues",
    value: function refreshCurrentValues(newData) {
      function checkUndefinedStrings(value) {
        return value === undefined ? null : value;
      }

      ;

      if ('min' in newData && 'max' in newData) {
        if (this.settings['side-menu'] === true && this.sideMenu) {
          this.minSliderValueOutput ? this.minSliderValueOutput.textContent = checkUndefinedStrings(newData.min) : false;
          this.minInput ? this.minInput.value = "".concat(newData.min) : false;

          if (this.handelToggle && this.handelToggle.checked === true) {
            this.maxSliderValueOutput ? this.maxSliderValueOutput.textContent = " - ".concat(checkUndefinedStrings(newData.max)) : false;
            this.maxInput ? this.maxInput.value = "".concat(newData.max) : false;
          }

          ;
        }

        ;
        this.minLabel.textContent = checkUndefinedStrings(newData.min);
        this.maxLabel.textContent = checkUndefinedStrings(newData.max);
      } else if ('min' in newData) {
        this.minLabel.textContent = checkUndefinedStrings(newData.min);

        if (this.settings['side-menu'] === true) {
          this.minSliderValueOutput ? this.minSliderValueOutput.textContent = checkUndefinedStrings(newData.min) : false;
          this.minInput ? this.minInput.value = "".concat(newData.min) : false;
        }

        ;
      } else {
        this.maxLabel.textContent = checkUndefinedStrings(newData.max);

        if (this.settings['side-menu'] === true) {
          this.maxSliderValueOutput ? this.maxSliderValueOutput.textContent = " - ".concat(checkUndefinedStrings(newData.max)) : false;
          this.maxInput ? this.maxInput.value = "".concat(newData.max) : false;
        }

        ;
      }

      ;
      new _components_handels_labels__WEBPACK_IMPORTED_MODULE_5__["HandelsLabels"]().centeringRelativeToHandles(this.minHandel.offsetWidth, this.maxHandel.offsetWidth, this.minLabel.offsetWidth, this.maxLabel.offsetWidth, this.minLabel, this.maxLabel);
    }
  }, {
    key: "callHandelLabelToggleChanger",
    value: function callHandelLabelToggleChanger() {
      this.handelLabelToggle ? new _components_handels_labels__WEBPACK_IMPORTED_MODULE_5__["HandelsLabels"]().displayController(this.handelLabelToggle, this.minLabel, this.maxLabel) : false;

      if (this.handelLabelToggle && this.handelLabelToggle.checked === true) {
        new _components_handels_labels__WEBPACK_IMPORTED_MODULE_5__["HandelsLabels"]().centeringRelativeToHandles(this.minHandel.offsetWidth, this.maxHandel.offsetWidth, this.minLabel.offsetWidth, this.maxLabel.offsetWidth, this.minLabel, this.maxLabel);
      }

      ;
    }
  }, {
    key: "callMaxHandelToggleChanger",
    value: function callMaxHandelToggleChanger() {
      if (this.handelToggle && this.handelToggle.checked === false) {
        this.sliderMovement.currentHandelsPositions['max'] = {
          'max': "".concat(this.sliderRange.offsetWidth - this.minHandel.offsetWidth),
          'sliderWidth': "".concat(this.sliderRange.offsetWidth - this.minHandel.offsetWidth)
        };
        this.maxHandel.style.left = "".concat(this.sliderRange.offsetWidth - this.minHandel.offsetWidth, "px");
        this.maxSliderValueOutput ? this.maxSliderValueOutput.textContent = '' : false;
        this.maxInput ? this.maxInput.setAttribute('readonly', '') : false;
        this.maxInput ? this.maxInput.value = '' : false;
        this.maxInput ? this.maxInput.style.opacity = '0.3' : false;
        this.interval.style.display = 'none';
      }

      ;
      this.handelToggle ? new _components_handels__WEBPACK_IMPORTED_MODULE_1__["Handels"]().displayController(this.handelToggle, this.maxHandel) : false;

      if (this.handelToggle && this.handelToggle.checked === true) {
        this.dataRequestStatus["getMaxData"] = true;
        this.maxInput ? this.maxInput.removeAttribute('readonly') : false;
        this.interval.style.display = 'block';
        this.interval.style.right = this.sliderRange.offsetWidth - (this.sliderRange.offsetWidth - this.minHandel.offsetWidth / 2) + 'px';

        if (+this.sliderMovement.currentHandelsPositions.min['min'] >= this.sliderRange.offsetWidth - this.maxHandel.offsetWidth - this.minHandel.offsetWidth) {
          this.sliderMovement.currentHandelsPositions['min'] = {
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
      this.maxSliderValueOutput ? this.maxSliderValueOutput.textContent = " - ".concat(data) : false;

      if (this.maxInput) {
        this.maxInput.style.opacity = '1';
        this.maxInput.value = "".concat(data);
      }

      ;
    }
  }, {
    key: "inputsPossibleRange",
    value: function inputsPossibleRange(data, min, max) {
      min.setAttribute('max', data.max);
      min.setAttribute('min', data.min);
      max.setAttribute('max', data.max);
    }
  }, {
    key: "bindForMin",
    value: function bindForMin() {
      var that = this;

      that.minHandel.onmousedown = function (event) {
        that.sliderMovement.minHandelListener(event, undefined);
      };
    }
  }, {
    key: "bindForMax",
    value: function bindForMax() {
      var that = this;

      that.maxHandel.onmousedown = function (event) {
        that.sliderMovement.maxHandelListener(event, undefined);
      };
    }
  }, {
    key: "makeBindLabelToggle",
    value: function makeBindLabelToggle() {
      this.callHandelLabelToggleChanger();
    }
  }, {
    key: "makeBindHandelToggle",
    value: function makeBindHandelToggle() {
      this.callMaxHandelToggleChanger();
    }
  }, {
    key: "makeBindForPlaneToggle",
    value: function makeBindForPlaneToggle() {
      this.planeToggle ? this.sliderMovement.changePlane(this.planeToggle, this.sliderContainer, this.minValue, this.maxValue) : false;
    }
  }, {
    key: "makeBindForSelectionMinValue",
    value: function makeBindForSelectionMinValue() {
      this.sliderMovement.selectionOfPreparedValue('min');
    }
  }, {
    key: "makeBindForSelectionMaxValue",
    value: function makeBindForSelectionMaxValue() {
      this.sliderMovement.selectionOfPreparedValue('max');
    }
  }, {
    key: "makeBindForMinInput",
    value: function makeBindForMinInput() {
      this.dataRequestStatus["getMinPositionsAmount"] = true;
    }
  }, {
    key: "makeBindForMaxInput",
    value: function makeBindForMaxInput() {
      this.dataRequestStatus["getMaxPositionsAmount"] = true;
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
/* harmony import */ var _components_view_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/view/view */ "./src/components/view/view.ts");
/* harmony import */ var _components_model_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/model/model */ "./src/components/model/model.ts");
/* harmony import */ var _components_model_facade__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/model/facade */ "./src/components/model/facade.ts");
/* harmony import */ var _components_presenter_presenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/presenter/presenter */ "./src/components/presenter/presenter.ts");




;
;

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
      model = new _components_model_model__WEBPACK_IMPORTED_MODULE_1__["Model"]({
        'min': settings['min'],
        max: settings['max'],
        'current-min': settings['current-min'] ? settings['current-min'] : '',
        'current-max': settings['current-max'] ? settings['current-max'] : ''
      });
    } else if ('current-min' in settings) {
      model = new _components_model_model__WEBPACK_IMPORTED_MODULE_1__["Model"]({
        'min': settings['min'],
        max: settings['max'],
        'current-min': settings['current-min'] ? settings['current-min'] : '',
        'current-max': settings['max']
      });
    } else if ('current-max' in settings) {
      model = new _components_model_model__WEBPACK_IMPORTED_MODULE_1__["Model"]({
        'min': settings['min'],
        max: settings['max'],
        'current-min': settings['min'],
        'current-max': settings['current-max'] ? settings['current-max'] : ''
      });
    } else {
      model = new _components_model_model__WEBPACK_IMPORTED_MODULE_1__["Model"]({
        'min': settings['min'],
        max: settings['max'],
        'current-min': settings['min'],
        'current-max': settings['max']
      });
    }

    var view = new _components_view_view__WEBPACK_IMPORTED_MODULE_0__["View"](that, settings);
    var facade = new _components_model_facade__WEBPACK_IMPORTED_MODULE_2__["Facade"](model);
    var presenter = new _components_presenter_presenter__WEBPACK_IMPORTED_MODULE_3__["Presenter"](view, facade);
    presenter.startViewMonitoring();
    view.displayElements();
    view.bindEventListeners();
    view.bindEventHandelsMovement();
  };
})(jQuery);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwvZmFjYWRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGVsL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRlci9wcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL2hhbmRlbHMtbGFiZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9oYW5kZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9zZWxlY3RlZC1yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NvbXBvbmVudHMvc2lkZS1tZW51LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9zbGlkZXItbW92ZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL3NsaWRlci1yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NvbXBvbmVudHMvdmFsdWVSYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L3ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pxdWVyeS51aS5jdXN0b21TbGlkZXIudHMiXSwibmFtZXMiOlsiRmFjYWRlIiwibW9kZWwiLCJnZXRDdXJyZW50RGF0YSIsImRhdGEiLCJwcm9wIiwiU3RyaW5nIiwiTWF0aCIsInJvdW5kIiwibWF4IiwibWluIiwiTW9kZWwiLCJzZXR0aW5ncyIsIk9iamVjdCIsImFzc2lnbiIsIlByZXNlbnRlciIsInZpZXciLCJmYWNhZGUiLCJ2aWV3TGluayIsImZhY2FkZUxpbmsiLCJtb25pdG9yc0N1cnJlbnRIYW5kZWxzUG9zaXRpb25zIiwibW9uaXRvcnNWaWV3UmVxdWVzdHMiLCJzbGlkZXJNb3ZlbWVudCIsImN1cnJlbnRIYW5kZWxzUG9zaXRpb25zIiwiUHJveHkiLCJzZXQiLCJ0YXJnZXQiLCJ2YWwiLCJtb2RlbFJlc3VsdCIsInJlZnJlc2hNb2RlbERhdGEiLCJyZWZyZXNoQ3VycmVudFZhbHVlcyIsImRhdGFSZXF1ZXN0U3RhdHVzIiwicmVzdWx0IiwiZ2V0TWF4RGF0YSIsInJlZnJlc2hNYXhTaWRlTWVudURhdGEiLCJwb3NpdGlvbnMiLCJnZXRQb3NpdGlvbnNBbW91bnQiLCJtaW5JbnB1dCIsInNpZGVNZW51SW5wdXRzVmFsdWVzVmFsaWRhdGlvbkNoZWNrZXIiLCJ2YWx1ZSIsIm1heElucHV0IiwicG9zc2libGVSYW5nZSIsImdldFBvc3NpYmxlUmFuZ2UiLCJpbnB1dHNQb3NzaWJsZVJhbmdlIiwic3RhcnRQb3NpdGlvbnMiLCJzdGFydEhhbmRlbHNQb3NpdGlvbiIsInN0YXJ0SGFuZGxlcnNQb3NpdGlvbnMiLCJzdGVwQW1vdW50IiwiSGFuZGVsc0xhYmVscyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIm1pbkxhYmVsIiwibWF4TGFiZWwiLCJ0b2dnbGUiLCJjaGVja2VkIiwic3R5bGUiLCJkaXNwbGF5IiwibWluSGFuZGVsV2lkdGgiLCJtYXhIYW5kZWxXaWR0aCIsIm1pbkxhYmVsV2lkdGgiLCJtYXhMYWJlbFdpZHRoIiwibGVmdCIsIkhhbmRlbHMiLCJtaW5IYW5kZWwiLCJtYXhIYW5kZWwiLCJTZWxlY3RlZFJhbmdlIiwiaW50ZXJ2YWwiLCJTaWRlTWVudSIsInNsaWRlclZhbHVlUCIsImlubmVyVGV4dCIsIm1pblNsaWRlclZhbHVlT3V0cHV0IiwiaWQiLCJtYXhTbGlkZXJWYWx1ZU91dHB1dCIsInNsaWRlclRvZ2dsZVAiLCJzbGlkZXJUb2dnbGVMYWJlbCIsIm1heFNsaWRlckhhbmRlbFRvZ2dsZSIsInNldEF0dHJpYnV0ZSIsImN1c3RvbVNsaWRlckJvcmRlciIsImN1c3RvbVNsaWRlcklucHV0cyIsImN1c3RvbVNsaWRlcklucHV0c1AiLCJjdXN0b21TbGlkZXJJbnB1dHNNaW5MYWJlbCIsImN1c3RvbVNsaWRlcklucHV0c01heExhYmVsIiwiY3VzdG9tU2xpZGVySW5wdXRzTWluIiwiY3VzdG9tU2xpZGVySW5wdXRzTWF4IiwidG9nZ2xlRm9yVmFsdWVzQ29udGFpbmVyIiwidG9nZ2xlRm9yVmFsdWVzUCIsInRvZ2dsZUZvclZhbHVlc0xhYmVsIiwidG9nZ2xlRm9yVmFsdWVzSW5wdXQiLCJ0b2dnbGVGb3JWYWx1ZXNTcGFuIiwidG9nZ2xlRm9yUGxhbmVDb250YWluZXIiLCJ0b2dnbGVGb3JQbGFuZVAiLCJ0b2dnbGVGb3JQbGFuZUxhYmVsIiwidG9nZ2xlRm9yUGxhbmVJbnB1dCIsInRvZ2dsZUZvclBsYW5lU3BhbiIsIm1haW5TbGlkZXJDb250YWluZXIiLCJhcHBlbmQiLCJjdXN0b21TbGlkZXJNZW51Q29udGFpbmVyIiwiaGFuZGVsVG9nZ2xlIiwiaGFuZGVsTGFiZWxUb2dnbGUiLCJwbGFuZVRvZ2dsZSIsIlNsaWRlck1vdmVtZW50IiwiaGFuZGVscyIsInNsaWRlclJhbmdlIiwiaGFuZGVsc1RvZ2dsZSIsInN0ZXAiLCJwb3NpdGlvblZhbHVlcyIsIm9mZnNldFdpZHRoIiwicmlnaHQiLCJldmVudCIsInRlc3QiLCJ0aGF0Iiwic2hpZnQiLCJ2ZXJ0aWNhbCIsImRvdWJsZUhhbmRlbHMiLCJjaGVja0N1cnJlbnRTbGlkZXJTZXR0aW5ncyIsImNsaWVudFkiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJjbGllbnRYIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwibmV3TGVmdCIsInJpZ2h0RWRnZSIsInJlbmV3YWxPZlBvc2l0aW9uIiwidW5kZWZpbmVkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJvZHkiLCJtaW5WYWx1ZSIsIm1heFZhbHVlIiwidG9nZ2xlUmVzdWx0IiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwicmVtb3ZlIiwibWluaW11bSIsIlNsaWRlclJhbmdlIiwiZWxlbSIsInJhbmdlIiwiVmFsdWVSYW5nZSIsInZhbHVlcyIsIlZpZXciLCJnZXRFbGVtZW50cyIsInZhbHVlUmFuZ2UiLCJzaWRlTWVudSIsInNpZGVNZW51Q29udGFpbmVyIiwiaGFuZGVsc0xhYmVscyIsInNsaWRlckNvbnRhaW5lciIsIm9mZnNldEhlaWdodCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvcGFjaXR5IiwiY2hhbmdlUGxhbmUiLCJtYWtlQmluZExhYmVsVG9nZ2xlIiwiYmluZCIsIm1ha2VCaW5kSGFuZGVsVG9nZ2xlIiwibWFrZUJpbmRGb3JQbGFuZVRvZ2dsZSIsIm1ha2VCaW5kRm9yU2VsZWN0aW9uTWluVmFsdWUiLCJtYWtlQmluZEZvclNlbGVjdGlvbk1heFZhbHVlIiwibWFrZUJpbmRGb3JNaW5JbnB1dCIsIm1ha2VCaW5kRm9yTWF4SW5wdXQiLCJiaW5kRm9yTWluIiwiYmluZEZvck1heCIsIm5ld0RhdGEiLCJjaGVja1VuZGVmaW5lZFN0cmluZ3MiLCJ0ZXh0Q29udGVudCIsImNlbnRlcmluZ1JlbGF0aXZlVG9IYW5kbGVzIiwiZGlzcGxheUNvbnRyb2xsZXIiLCJyZW1vdmVBdHRyaWJ1dGUiLCJvbm1vdXNlZG93biIsIm1pbkhhbmRlbExpc3RlbmVyIiwibWF4SGFuZGVsTGlzdGVuZXIiLCJjYWxsSGFuZGVsTGFiZWxUb2dnbGVDaGFuZ2VyIiwiY2FsbE1heEhhbmRlbFRvZ2dsZUNoYW5nZXIiLCJzZWxlY3Rpb25PZlByZXBhcmVkVmFsdWUiLCIkIiwiZm4iLCJ0ZXN0U2xpZGVyIiwib3B0aW9ucyIsImV4dGVuZCIsInByZXNlbnRlciIsInN0YXJ0Vmlld01vbml0b3JpbmciLCJkaXNwbGF5RWxlbWVudHMiLCJiaW5kRXZlbnRMaXN0ZW5lcnMiLCJiaW5kRXZlbnRIYW5kZWxzTW92ZW1lbnQiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNB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LFFBQVEsQ0FBQyxLQUFELENBQWhCO0FBQXlCSCxXQUFHLEVBQUVHLFFBQVEsQ0FBQyxLQUFELENBQXRDO0FBQStDLHVCQUFlQSxRQUFRLENBQUMsS0FBRCxDQUF0RTtBQUErRSx1QkFBZUEsUUFBUSxDQUFDLGFBQUQsQ0FBUixHQUEwQkEsUUFBUSxDQUFDLGFBQUQsQ0FBbEMsR0FBb0Q7QUFBbEosT0FBVixDQUFSO0FBQ0QsS0FGTSxNQUVBO0FBQ0xWLFdBQUssR0FBRyxJQUFJUyw2REFBSixDQUFVO0FBQUMsZUFBT0MsUUFBUSxDQUFDLEtBQUQsQ0FBaEI7QUFBeUJILFdBQUcsRUFBRUcsUUFBUSxDQUFDLEtBQUQsQ0FBdEM7QUFBK0MsdUJBQWVBLFFBQVEsQ0FBQyxLQUFELENBQXRFO0FBQStFLHVCQUFlQSxRQUFRLENBQUMsS0FBRDtBQUF0RyxPQUFWLENBQVI7QUFDRDs7QUFFRCxRQUFJSSxJQUFVLEdBQUcsSUFBSThILDBEQUFKLENBQVM5QixJQUFULEVBQWVwRyxRQUFmLENBQWpCO0FBRUEsUUFBSUssTUFBYyxHQUFHLElBQUloQiwrREFBSixDQUFXQyxLQUFYLENBQXJCO0FBRUEsUUFBSWtMLFNBQW9CLEdBQUcsSUFBSXJLLHlFQUFKLENBQWNDLElBQWQsRUFBb0JDLE1BQXBCLENBQTNCO0FBRUFtSyxhQUFTLENBQUNDLG1CQUFWO0FBQ0FySyxRQUFJLENBQUNzSyxlQUFMO0FBQ0F0SyxRQUFJLENBQUN1SyxrQkFBTDtBQUNBdkssUUFBSSxDQUFDd0ssd0JBQUw7QUFDRCxHQXBDRDtBQXFDRCxDQXRDRCxFQXNDR0MsTUF0Q0gsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanF1ZXJ5LnVpLmN1c3RvbVNsaWRlci50c1wiKTtcbiIsImltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi9tb2RlbCc7XHJcbmltcG9ydCB7IFN0YXJ0SGFuZGVsc1Bvc2l0aW9uIH0gZnJvbSAnLi9tb2RlbCc7XHJcblxyXG5pbnRlcmZhY2UgTmV3UG9zaXRpb24ge1xyXG4gICdtaW4nOiBzdHJpbmc7XHJcbiAgJ21heCc6IHN0cmluZztcclxuICAnc2xpZGVyV2lkdGgnOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdldFBvc2l0aW9uc0Ftb3VudCB7XHJcbiAgJ3Bvc2l0aW9ucyc6IHN0cmluZztcclxuICAnbWluaW11bSc6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHZXRQb3NzaWJsZVJhbmdlIHtcclxuICAnbWluJzogc3RyaW5nO1xyXG4gICdtYXgnOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNhZGUge1xyXG4gIHJlYWRvbmx5IG1vZGVsOiBNb2RlbDtcclxuXHJcbiAgY29uc3RydWN0b3IgKG1vZGVsOiBNb2RlbCkge1xyXG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG4gIH07XHJcblxyXG4gIHN0YXJ0SGFuZGVsc1Bvc2l0aW9uKCk6IFN0YXJ0SGFuZGVsc1Bvc2l0aW9uIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGVsLmdldEN1cnJlbnREYXRhKCk7XHJcbiAgfTtcclxuICBcclxuICByZWZyZXNoTW9kZWxEYXRhKGRhdGE6IE5ld1Bvc2l0aW9uLCBwcm9wOiBzdHJpbmcpOiBvYmplY3Qge1xyXG4gICAgaWYgKHByb3AgPT09ICdtaW4nKSB7XHJcbiAgICAgIHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1taW4nXSA9IFN0cmluZyhNYXRoLnJvdW5kKCt0aGlzLm1vZGVsLmRhdGFbJ21pbiddICsgKCtkYXRhWydtaW4nXSAvICgrZGF0YVsnc2xpZGVyV2lkdGgnXSAvICgrdGhpcy5tb2RlbC5kYXRhWydtYXgnXSAtICt0aGlzLm1vZGVsLmRhdGFbJ21pbiddKSkpKSk7XHJcbiAgICAgIHJldHVybiB7ICdtaW4nOiB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWluJ10gfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1heCddID0gU3RyaW5nKE1hdGgucm91bmQoK3RoaXMubW9kZWwuZGF0YVsnbWluJ10gKyAoK2RhdGFbJ21heCddIC8gKCtkYXRhWydzbGlkZXJXaWR0aCddIC8gKCt0aGlzLm1vZGVsLmRhdGFbJ21heCddIC0gK3RoaXMubW9kZWwuZGF0YVsnbWluJ10pKSkpKTtcclxuICAgICAgcmV0dXJuIHsgJ21heCc6IHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1tYXgnXSB9XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGdldE1vZGVsRGF0YSgpOiBvYmplY3Qge1xyXG4gICAgcmV0dXJuIHsgJ21pbic6IHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1taW4nXSwgJ21heCc6IHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1tYXgnXX1cclxuICB9O1xyXG5cclxuICBnZXRNYXhEYXRhKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gK3RoaXMubW9kZWwuZGF0YVsnbWF4J11cclxuICB9O1xyXG5cclxuICBnZXRQb3NzaWJsZVJhbmdlKCk6IEdldFBvc3NpYmxlUmFuZ2Uge1xyXG4gICAgcmV0dXJuIHsnbWF4Jzp0aGlzLm1vZGVsLmRhdGEubWF4LCAnbWluJzogdGhpcy5tb2RlbC5kYXRhLm1pbn07XHJcbiAgfTtcclxuXHJcbiAgZ2V0UG9zaXRpb25zQW1vdW50KCk6IEdldFBvc2l0aW9uc0Ftb3VudCB7XHJcbiAgICByZXR1cm4geydwb3NpdGlvbnMnOiBTdHJpbmcoK3RoaXMubW9kZWwuZGF0YS5tYXggLSArdGhpcy5tb2RlbC5kYXRhLm1pbiksICdtaW5pbXVtJzogdGhpcy5tb2RlbC5kYXRhLm1pbn07XHJcbiAgfVxyXG59OyIsImludGVyZmFjZSBUYXJuc2ZlcmVkU2V0dGluZ3Mge1xyXG4gICdtaW4nOiBzdHJpbmc7XHJcbiAgJ21heCc6IHN0cmluZztcclxuICAnY3VycmVudC1taW4nOiBzdHJpbmc7XHJcbiAgJ2N1cnJlbnQtbWF4Jzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXJ0SGFuZGVsc1Bvc2l0aW9uIHtcclxuICAnbWluaW11bSc6IHN0cmluZywgXHJcbiAgJ21pbic6IHN0cmluZyxcclxuICAnbWF4Jzogc3RyaW5nLCBcclxuICAncG9zaXRpb25zJzogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURhdGEge1xyXG4gICdtaW4nOiBzdHJpbmc7XHJcbiAgJ21heCc6IHN0cmluZztcclxuICAnY3VycmVudC1taW4nOiBzdHJpbmc7XHJcbiAgJ2N1cnJlbnQtbWF4Jzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW9kZWwge1xyXG5cclxuICBkYXRhOiBJRGF0YTtcclxuICBcclxuICBjb25zdHJ1Y3Rvciggc2V0dGluZ3M6IFRhcm5zZmVyZWRTZXR0aW5ncyApIHsgXHJcbiAgICB0aGlzLmRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBzZXR0aW5ncyk7XHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50RGF0YSgpOiBTdGFydEhhbmRlbHNQb3NpdGlvbiB7XHJcbiAgICByZXR1cm4geydtaW5pbXVtJzogdGhpcy5kYXRhLm1pbiwgJ21pbic6IHRoaXMuZGF0YVsnY3VycmVudC1taW4nXSwgJ21heCc6IHRoaXMuZGF0YVsnY3VycmVudC1tYXgnXSwgJ3Bvc2l0aW9ucyc6IGAkeyt0aGlzLmRhdGEubWF4IC0gK3RoaXMuZGF0YS5taW59YH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBGYWNhZGUgfSBmcm9tICcuLi9tb2RlbC9mYWNhZGUnO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi4vdmlldy92aWV3JztcclxuaW1wb3J0IHsgR2V0UG9zaXRpb25zQW1vdW50IH0gZnJvbSAnLi4vbW9kZWwvZmFjYWRlJztcclxuaW1wb3J0IHsgR2V0UG9zc2libGVSYW5nZSB9IGZyb20gJy4uL21vZGVsL2ZhY2FkZSc7XHJcbmltcG9ydCB7IFN0YXJ0SGFuZGVsc1Bvc2l0aW9uIH0gZnJvbSAnLi4vbW9kZWwvbW9kZWwnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByZXNlbnRlciB7XHJcblxyXG4gIHByaXZhdGUgdmlld0xpbms7XHJcbiAgcHJpdmF0ZSBmYWNhZGVMaW5rO1xyXG5cclxuICBjb25zdHJ1Y3RvciAodmlldzogVmlldywgZmFjYWRlOiBGYWNhZGUpIHtcclxuICAgIHRoaXMudmlld0xpbmsgPSB2aWV3O1xyXG4gICAgdGhpcy5mYWNhZGVMaW5rID0gZmFjYWRlO1xyXG4gIH07XHJcblxyXG4gIHN0YXJ0Vmlld01vbml0b3JpbmcoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vbml0b3JzQ3VycmVudEhhbmRlbHNQb3NpdGlvbnMoKTtcclxuICAgIHRoaXMubW9uaXRvcnNWaWV3UmVxdWVzdHMoKTtcclxuICB9O1xyXG5cclxuICBtb25pdG9yc0N1cnJlbnRIYW5kZWxzUG9zaXRpb25zKCk6IHZvaWQge1xyXG4gICAgbGV0IHZpZXcgPSB0aGlzLnZpZXdMaW5rO1xyXG4gICAgbGV0IGZhY2FkZSA9IHRoaXMuZmFjYWRlTGluaztcclxuXHJcbiAgICB2aWV3LnNsaWRlck1vdmVtZW50LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zID0gbmV3IFByb3h5KHZpZXcuc2xpZGVyTW92ZW1lbnQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMsIHtcclxuICAgICAgc2V0KHRhcmdldCwgcHJvcCwgdmFsKSB7XHJcbiAgICAgICAgaWYodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgIHRhcmdldFtTdHJpbmcocHJvcCldID0gdmFsO1xyXG4gICAgICAgICAgbGV0IG1vZGVsUmVzdWx0ID0gZmFjYWRlLnJlZnJlc2hNb2RlbERhdGEodmFsLCBTdHJpbmcocHJvcCkpO1xyXG4gICAgICAgICAgdmlldy5yZWZyZXNoQ3VycmVudFZhbHVlcyhtb2RlbFJlc3VsdCk7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9O1xyXG5cclxuICBtb25pdG9yc1ZpZXdSZXF1ZXN0cygpOiB2b2lkIHtcclxuICAgIGxldCB2aWV3ID0gdGhpcy52aWV3TGluaztcclxuICAgIGxldCBmYWNhZGUgPSB0aGlzLmZhY2FkZUxpbms7XHJcblxyXG4gICAgdmlldy5kYXRhUmVxdWVzdFN0YXR1cyA9IG5ldyBQcm94eSh2aWV3LmRhdGFSZXF1ZXN0U3RhdHVzLCB7XHJcbiAgICAgIHNldCh0YXJnZXQsIHByb3AsIHZhbCkge1xyXG4gICAgICAgIGlmKHR5cGVvZiB2YWwgPT09ICdib29sZWFuJyAmJiB2YWwgPT09IHRydWUpIHtcclxuXHJcbiAgICAgICAgICBpZihwcm9wID09PSAnZ2V0TWF4RGF0YScpIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDogbnVtYmVyID0gZmFjYWRlLmdldE1heERhdGEoKTtcclxuICAgICAgICAgICAgdmlldy5yZWZyZXNoTWF4U2lkZU1lbnVEYXRhKHJlc3VsdCk7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGlmKHByb3AgPT09ICdnZXRNaW5Qb3NpdGlvbnNBbW91bnQnKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbnM6IEdldFBvc2l0aW9uc0Ftb3VudCA9IGZhY2FkZS5nZXRQb3NpdGlvbnNBbW91bnQoKTtcclxuXHJcbiAgICAgICAgICAgIHZpZXcubWluSW5wdXQgPyB2aWV3LnNsaWRlck1vdmVtZW50LnNpZGVNZW51SW5wdXRzVmFsdWVzVmFsaWRhdGlvbkNoZWNrZXIoJ21pbicsICt2aWV3Lm1pbklucHV0LnZhbHVlLCArcG9zaXRpb25zWydwb3NpdGlvbnMnXSwgK3Bvc2l0aW9uc1snbWluaW11bSddKSA6IGZhbHNlO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBpZihwcm9wID09PSAnZ2V0TWF4UG9zaXRpb25zQW1vdW50Jykge1xyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb25zOiBHZXRQb3NpdGlvbnNBbW91bnQgPSBmYWNhZGUuZ2V0UG9zaXRpb25zQW1vdW50KCk7XHJcbiAgICAgICAgICAgIHZpZXcubWF4SW5wdXQgPyB2aWV3LnNsaWRlck1vdmVtZW50LnNpZGVNZW51SW5wdXRzVmFsdWVzVmFsaWRhdGlvbkNoZWNrZXIoJ21heCcsICt2aWV3Lm1heElucHV0LnZhbHVlLCArcG9zaXRpb25zWydwb3NpdGlvbnMnXSwgK3Bvc2l0aW9uc1snbWluaW11bSddKSA6IGZhbHNlO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBpZihwcm9wID09PSAnZ2V0UG9zc2libGVSYW5nZScpIHtcclxuICAgICAgICAgICAgbGV0IHBvc3NpYmxlUmFuZ2U6IEdldFBvc3NpYmxlUmFuZ2UgPSBmYWNhZGUuZ2V0UG9zc2libGVSYW5nZSgpO1xyXG4gICAgICAgICAgICB2aWV3Lm1pbklucHV0ICYmIHZpZXcubWF4SW5wdXQ/IHZpZXcuaW5wdXRzUG9zc2libGVSYW5nZShwb3NzaWJsZVJhbmdlLCB2aWV3Lm1pbklucHV0LCB2aWV3Lm1heElucHV0ICk6IGZhbHNlO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBpZihwcm9wID09PSAnc3RhcnRIYW5kZWxzUG9zaXRpb24nKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGFydFBvc2l0aW9uczogU3RhcnRIYW5kZWxzUG9zaXRpb24gPSBmYWNhZGUuc3RhcnRIYW5kZWxzUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgdmlldy5zbGlkZXJNb3ZlbWVudC5zdGFydEhhbmRsZXJzUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zKTtcclxuICAgICAgICAgICAgdmlldy5yZWZyZXNoQ3VycmVudFZhbHVlcyhzdGFydFBvc2l0aW9ucyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYocHJvcCA9PT0gJ2dldFN0ZXBQb3NpdGlvbnNBbW91bnQnKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGVwQW1vdW50OiBHZXRQb3NpdGlvbnNBbW91bnQgPSBmYWNhZGUuZ2V0UG9zaXRpb25zQW1vdW50KCk7XHJcbiAgICAgICAgICAgIHZpZXcuc2xpZGVyTW92ZW1lbnQuc3RlcEFtb3VudCA9ICtzdGVwQW1vdW50Wydwb3NpdGlvbnMnXTtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxufTsiLCJleHBvcnQgY2xhc3MgSGFuZGVsc0xhYmVscyB7XHJcbiAgbWluTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgbWF4TGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgbGV0IG1pbjpIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxldCBtYXg6SFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBtaW4uY2xhc3NMaXN0LmFkZCgnbWluU2xpZGVySGFuZGVsTGFiZWwnKTtcclxuICAgIG1heC5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJIYW5kZWxMYWJlbCcpO1xyXG4gICAgdGhpcy5taW5MYWJlbCA9IG1pbjtcclxuICAgIHRoaXMubWF4TGFiZWwgPSBtYXg7XHJcbiAgfTtcclxuICBcclxuICBnZXRFbGVtZW50cygpOiBvYmplY3Qge1xyXG4gICAgcmV0dXJuIHsnbWluJzogdGhpcy5taW5MYWJlbCwgJ21heCc6IHRoaXMubWF4TGFiZWx9O1xyXG4gIH07XHJcblxyXG4gIGRpc3BsYXlDb250cm9sbGVyKHRvZ2dsZTogSFRNTElucHV0RWxlbWVudCwgbWluOiBIVE1MTGFiZWxFbGVtZW50LCBtYXg6IEhUTUxMYWJlbEVsZW1lbnQpIHtcclxuICAgIGlmICh0b2dnbGUuY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBtaW4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gICAgICBtYXguc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWluLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIG1heC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2VudGVyaW5nUmVsYXRpdmVUb0hhbmRsZXMobWluSGFuZGVsV2lkdGg6IG51bWJlciwgbWF4SGFuZGVsV2lkdGg6IG51bWJlciwgbWluTGFiZWxXaWR0aDogbnVtYmVyLCBtYXhMYWJlbFdpZHRoOiBudW1iZXIsIG1pbkxhYmVsOiBIVE1MTGFiZWxFbGVtZW50LCBtYXhMYWJlbDogSFRNTExhYmVsRWxlbWVudCk6IHZvaWQge1xyXG4gICAgbWluTGFiZWwuc3R5bGUubGVmdCA9IChtaW5IYW5kZWxXaWR0aCAtIG1pbkxhYmVsV2lkdGgpIC8gMiArICdweCc7XHJcbiAgICBtYXhMYWJlbC5zdHlsZS5sZWZ0ID0gKG1heEhhbmRlbFdpZHRoIC0gbWF4TGFiZWxXaWR0aCkgLyAyICsgJ3B4JztcclxuICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgSGFuZGVscyB7XHJcblxyXG4gIHJlYWRvbmx5IG1pbkhhbmRlbDogSFRNTFNwYW5FbGVtZW50O1xyXG4gIHJlYWRvbmx5IG1heEhhbmRlbDogSFRNTFNwYW5FbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGxldCBtaW46IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGxldCBtYXg6IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIG1pbi5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJIYW5kZWwnKTtcclxuICAgIG1heC5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJIYW5kZWwnKTtcclxuICAgIHRoaXMubWluSGFuZGVsID0gbWluO1xyXG4gICAgdGhpcy5tYXhIYW5kZWwgPSBtYXg7XHJcbiAgfTtcclxuXHJcbiAgZ2V0RWxlbWVudHMoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7bWluOiB0aGlzLm1pbkhhbmRlbCwgbWF4OiB0aGlzLm1heEhhbmRlbH07XHJcbiAgfTtcclxuXHJcbiAgZGlzcGxheUNvbnRyb2xsZXIodG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50LCBtYXg6IEhUTUxTcGFuRWxlbWVudCkge1xyXG4gICAgaWYgKHRvZ2dsZS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgIG1heC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1heC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxufTsiLCJleHBvcnQgY2xhc3MgU2VsZWN0ZWRSYW5nZSB7XHJcblxyXG4gIHJlYWRvbmx5IGludGVydmFsOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsZXQgaW50ZXJ2YWw6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbnRlcnZhbC5jbGFzc0xpc3QuYWRkKCdtYWluSW50ZXJ2YWwnKTtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnRzKCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmludGVydmFsO1xyXG4gIH1cclxufSIsImV4cG9ydCBjbGFzcyBTaWRlTWVudSB7XHJcbiAgY3VzdG9tU2xpZGVyTWVudUNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgaGFuZGVsVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIGhhbmRlbExhYmVsVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHBsYW5lVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIG1pbklucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIG1heElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIG1pblNsaWRlclZhbHVlT3V0cHV0OiBIVE1MT3V0cHV0RWxlbWVudDtcclxuICBtYXhTbGlkZXJWYWx1ZU91dHB1dDogSFRNTE91dHB1dEVsZW1lbnQ7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsZXQgc2xpZGVyVmFsdWVQOkhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgc2xpZGVyVmFsdWVQLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclBhcmFnVmFsJyk7XHJcbiAgICBzbGlkZXJWYWx1ZVAuaW5uZXJUZXh0ID0gJ9Ci0LXQutGD0YnQtdC1INC30LDQvdGH0LXQvdC40LU6ICc7XHJcbiAgICBcclxuICAgIGxldCBtaW5TbGlkZXJWYWx1ZU91dHB1dDogSFRNTE91dHB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvdXRwdXQnKTtcclxuICAgIG1pblNsaWRlclZhbHVlT3V0cHV0LmNsYXNzTGlzdC5hZGQoJ3NsaWRlclZhbHVlJyk7XHJcbiAgICBtaW5TbGlkZXJWYWx1ZU91dHB1dC5pZCA9ICdtaW5TbGlkZXJWYWx1ZSc7XHJcbiAgICBsZXQgbWF4U2xpZGVyVmFsdWVPdXRwdXQ6IEhUTUxPdXRwdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3V0cHV0Jyk7XHJcbiAgICBtYXhTbGlkZXJWYWx1ZU91dHB1dC5jbGFzc0xpc3QuYWRkKCdzbGlkZXJWYWx1ZScpO1xyXG4gICAgbWF4U2xpZGVyVmFsdWVPdXRwdXQuaWQgPSAnbWF4U2xpZGVyVmFsdWUnO1xyXG4gICAgXHJcbiAgICBsZXQgc2xpZGVyVG9nZ2xlUDpIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHNsaWRlclRvZ2dsZVAuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyUGFyYWcnKTtcclxuICAgIHNsaWRlclRvZ2dsZVAuaW5uZXJUZXh0ID0gJ9CS0LrQu9GO0YfQuNGC0Ywg0LLRgtC+0YDQvtC5INC/0L7Qu9C30YPQvdC+0Lo6ICc7XHJcbiAgICBcclxuICAgIGxldCBzbGlkZXJUb2dnbGVMYWJlbDpIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHNsaWRlclRvZ2dsZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclRvZ2dsZScpO1xyXG5cclxuICAgIGxldCBtYXhTbGlkZXJIYW5kZWxUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbWF4U2xpZGVySGFuZGVsVG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlckhhbmRlbFRvZ2dsZScpO1xyXG4gICAgbWF4U2xpZGVySGFuZGVsVG9nZ2xlLmlkID0gJ21heFNsaWRlckhhbmRlbFRvZ2dsZSc7XHJcbiAgICBtYXhTbGlkZXJIYW5kZWxUb2dnbGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcclxuXHJcbiAgICBsZXQgY3VzdG9tU2xpZGVyQm9yZGVyOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjdXN0b21TbGlkZXJCb3JkZXIuY2xhc3NMaXN0LmFkZCgnY3VzdG9tVG9nZ2xlU2xpZGVyQm9yZGVyJyk7XHJcblxyXG4gICAgbGV0IGN1c3RvbVNsaWRlcklucHV0czogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0cy5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJJbnB1dHMnKTtcclxuICAgIFxyXG4gICAgbGV0IGN1c3RvbVNsaWRlcklucHV0c1A6IEhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzUC5pbm5lclRleHQgPSAn0JjQt9C80LXQvdC40YLRjCDQt9C90LDRh9C10L3QuNC1OiAnO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzUC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJQYXJhZycpO1xyXG5cclxuICAgIGxldCBjdXN0b21TbGlkZXJJbnB1dHNNaW5MYWJlbDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNaW5MYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJJbnB1dGxhYmVsJyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNaW5MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjdXN0b21TbGlkZXJNaW5JbnB1dCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWwuaW5uZXJUZXh0ID0gJ01pbjogJztcclxuICAgIFxyXG4gICAgbGV0IGN1c3RvbVNsaWRlcklucHV0c01heExhYmVsOiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01heExhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlcklucHV0bGFiZWwnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01heExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2N1c3RvbVNsaWRlck1heElucHV0Jyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbC5pbm5lclRleHQgPSAnTWF4OiAnO1xyXG5cclxuICAgIGxldCBjdXN0b21TbGlkZXJJbnB1dHNNaW46IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlck1pbklucHV0Jyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNaW4uaWQgPSAnY3VzdG9tU2xpZGVyTWluSW5wdXQnO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluLnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcclxuXHJcbiAgICBsZXQgY3VzdG9tU2xpZGVySW5wdXRzTWF4OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01heC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJNYXhJbnB1dCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWF4LmlkID0gJ2N1c3RvbVNsaWRlck1heElucHV0JztcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01heC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclZhbHVlc0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yVmFsdWVzUDogSFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNQLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclBhcmFnJyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNQLmlubmVyVGV4dCA9ICfQktC60LvRjtGH0LjRgtGMINC30L3QsNGH0LXQvdC40Y8g0L/QvtC0INC/0L7Qu9C30YPQvdC60LDQvNC4OiAnO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JWYWx1ZXNMYWJlbDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNMYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJUb2dnbGUnKTtcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yVmFsdWVzSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNJbnB1dC5jbGFzc0xpc3QuYWRkKCdzaG93VmFsdWVUb2dnbGUnKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc0lucHV0LmlkID0gJ3Nob3dWYWx1ZVRvZ2dsZSc7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclZhbHVlc1NwYW46IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc1NwYW4uY2xhc3NMaXN0LmFkZCgnY3VzdG9tVG9nZ2xlU2xpZGVyQm9yZGVyJyk7XHJcbiAgICBcclxuICAgIGxldCB0b2dnbGVGb3JQbGFuZUNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yUGxhbmVQOiBIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lUC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJQYXJhZycpO1xyXG4gICAgdG9nZ2xlRm9yUGxhbmVQLmlubmVyVGV4dCA9ICfQmNC30LzQtdC90LjRgtGMINC/0LvQvtGB0LrQvtGB0YLRjDogJztcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yUGxhbmVMYWJlbDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclRvZ2dsZScpO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JQbGFuZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3BsYW5lVG9nZ2xlJyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZUlucHV0LmlkID0gJ3BsYW5lVG9nZ2xlJztcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yUGxhbmVTcGFuOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZVNwYW4uY2xhc3NMaXN0LmFkZCgnY3VzdG9tVG9nZ2xlU2xpZGVyQm9yZGVyJyk7XHJcblxyXG5cclxuICAgIGxldCBtYWluU2xpZGVyQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2xpZGVyTWVudUNvbnRhaW5lcicpO1xyXG4gICAgbWFpblNsaWRlckNvbnRhaW5lci5hcHBlbmQoc2xpZGVyVmFsdWVQKTtcclxuICAgIHNsaWRlclZhbHVlUC5hcHBlbmQobWluU2xpZGVyVmFsdWVPdXRwdXQpO1xyXG4gICAgc2xpZGVyVmFsdWVQLmFwcGVuZChtYXhTbGlkZXJWYWx1ZU91dHB1dCk7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZChzbGlkZXJUb2dnbGVQKTtcclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuYXBwZW5kKHNsaWRlclRvZ2dsZUxhYmVsKTtcclxuICAgIHNsaWRlclRvZ2dsZUxhYmVsLmFwcGVuZChtYXhTbGlkZXJIYW5kZWxUb2dnbGUsIGN1c3RvbVNsaWRlckJvcmRlcik7XHJcblxyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzLmFwcGVuZChjdXN0b21TbGlkZXJJbnB1dHNQLCBjdXN0b21TbGlkZXJJbnB1dHNNaW5MYWJlbCwgY3VzdG9tU2xpZGVySW5wdXRzTWluLCBjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbCwgY3VzdG9tU2xpZGVySW5wdXRzTWF4KTtcclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuYXBwZW5kKGN1c3RvbVNsaWRlcklucHV0cyk7XHJcblxyXG4gICAgdG9nZ2xlRm9yVmFsdWVzQ29udGFpbmVyLmFwcGVuZCh0b2dnbGVGb3JWYWx1ZXNQLCB0b2dnbGVGb3JWYWx1ZXNMYWJlbCk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNMYWJlbC5hcHBlbmQodG9nZ2xlRm9yVmFsdWVzSW5wdXQsIHRvZ2dsZUZvclZhbHVlc1NwYW4pO1xyXG4gICAgbWFpblNsaWRlckNvbnRhaW5lci5hcHBlbmQodG9nZ2xlRm9yVmFsdWVzQ29udGFpbmVyKTtcclxuXHJcbiAgICB0b2dnbGVGb3JQbGFuZUNvbnRhaW5lci5hcHBlbmQodG9nZ2xlRm9yUGxhbmVQLCB0b2dnbGVGb3JQbGFuZUxhYmVsKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lTGFiZWwuYXBwZW5kKHRvZ2dsZUZvclBsYW5lSW5wdXQsIHRvZ2dsZUZvclBsYW5lU3Bhbik7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZCh0b2dnbGVGb3JQbGFuZUNvbnRhaW5lcik7XHJcblxyXG4gICAgdGhpcy5jdXN0b21TbGlkZXJNZW51Q29udGFpbmVyID0gbWFpblNsaWRlckNvbnRhaW5lcjtcclxuICAgIHRoaXMuaGFuZGVsVG9nZ2xlID0gbWF4U2xpZGVySGFuZGVsVG9nZ2xlO1xyXG4gICAgdGhpcy5oYW5kZWxMYWJlbFRvZ2dsZSA9IHRvZ2dsZUZvclZhbHVlc0lucHV0O1xyXG4gICAgdGhpcy5wbGFuZVRvZ2dsZSA9IHRvZ2dsZUZvclBsYW5lSW5wdXQ7XHJcbiAgICB0aGlzLm1pbklucHV0ID0gY3VzdG9tU2xpZGVySW5wdXRzTWluO1xyXG4gICAgdGhpcy5tYXhJbnB1dCA9IGN1c3RvbVNsaWRlcklucHV0c01heDtcclxuICAgIHRoaXMubWluU2xpZGVyVmFsdWVPdXRwdXQgPSBtaW5TbGlkZXJWYWx1ZU91dHB1dDtcclxuICAgIHRoaXMubWF4U2xpZGVyVmFsdWVPdXRwdXQgPSBtYXhTbGlkZXJWYWx1ZU91dHB1dDtcclxuICB9O1xyXG59OyIsImltcG9ydCB7IFN0YXJ0SGFuZGVsc1Bvc2l0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWwvbW9kZWwnO1xyXG5cclxuaW50ZXJmYWNlIEhhbmRlbHMge1xyXG4gIG1pbjogSFRNTFNwYW5FbGVtZW50O1xyXG4gIG1heDogSFRNTFNwYW5FbGVtZW50O1xyXG4gIG1pbkxhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIG1heExhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIHNsaWRlclJhbmdlOiBIVE1MRGl2RWxlbWVudDtcclxuICBoYW5kZWxzVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50IHwgYm9vbGVhbjtcclxuICBwbGFuZVRvZ2dsZTogSFRNTElucHV0RWxlbWVudCB8IGJvb2xlYW47XHJcbiAgaW50ZXJ2YWw6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHN0ZXA6IG51bWJlciB8IHN0cmluZyB8IGJvb2xlYW47XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgVGVzdE1vdXNlRXZlbnQge1xyXG4gIGNsaWVudFg6IG51bWJlcjtcclxuICBjbGllbnRZOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDdXJyZW50SGFuZGVsc1Bvc2l0aW9ucyB7XHJcbiAgW2tleTogc3RyaW5nXToge1xyXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgU2xpZGVyTW92ZW1lbnQge1xyXG4gIG1pbjogSFRNTFNwYW5FbGVtZW50O1xyXG4gIG1heDogSFRNTFNwYW5FbGVtZW50O1xyXG4gIG1pbkxhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIG1heExhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIHNsaWRlclJhbmdlOiBIVE1MRGl2RWxlbWVudDtcclxuICBoYW5kZWxzVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50IHwgYm9vbGVhbjtcclxuICBwbGFuZVRvZ2dsZTogSFRNTElucHV0RWxlbWVudCB8IGJvb2xlYW47XHJcbiAgaW50ZXJ2YWw6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHN0ZXA6IG51bWJlciB8IHN0cmluZyB8IGJvb2xlYW47XHJcbiAgc3RlcEFtb3VudDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvciggaGFuZGVsczogSGFuZGVscykge1xyXG4gICAgdGhpcy5taW4gPSBoYW5kZWxzLm1pbjtcclxuICAgIHRoaXMubWF4ID0gaGFuZGVscy5tYXg7XHJcbiAgICB0aGlzLm1pbkxhYmVsID0gaGFuZGVscy5taW5MYWJlbDtcclxuICAgIHRoaXMubWF4TGFiZWw9IGhhbmRlbHMubWF4TGFiZWw7XHJcbiAgICB0aGlzLnNsaWRlclJhbmdlID0gaGFuZGVscy5zbGlkZXJSYW5nZTtcclxuICAgIHRoaXMuaGFuZGVsc1RvZ2dsZSA9IGhhbmRlbHMuaGFuZGVsc1RvZ2dsZTtcclxuICAgIHRoaXMucGxhbmVUb2dnbGUgPSBoYW5kZWxzLnBsYW5lVG9nZ2xlO1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IGhhbmRlbHMuaW50ZXJ2YWw7XHJcbiAgICB0aGlzLnN0ZXAgPSBoYW5kZWxzLnN0ZXA7XHJcbiAgfVxyXG5cclxuICBjdXJyZW50SGFuZGVsc1Bvc2l0aW9uczogQ3VycmVudEhhbmRlbHNQb3NpdGlvbnMgPSB7XHJcbiAgICAnbWluJzoge30sXHJcbiAgICAnbWF4Jzoge31cclxuICB9XHJcblxyXG4gIHN0YXJ0SGFuZGxlcnNQb3NpdGlvbnMocG9zaXRpb25WYWx1ZXM6IFN0YXJ0SGFuZGVsc1Bvc2l0aW9uICk6IHZvaWQge1xyXG4gICAgbGV0IG1pbjogc3RyaW5nID0gKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpIC8gK3Bvc2l0aW9uVmFsdWVzLnBvc2l0aW9ucykgKiAoK3Bvc2l0aW9uVmFsdWVzWydtaW4nXSAtICtwb3NpdGlvblZhbHVlc1snbWluaW11bSddKSArICcnO1xyXG4gICAgbGV0IG1heDogc3RyaW5nID0gKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpIC8gK3Bvc2l0aW9uVmFsdWVzLnBvc2l0aW9ucykgKiAoK3Bvc2l0aW9uVmFsdWVzWydtYXgnXSAtICtwb3NpdGlvblZhbHVlc1snbWluaW11bSddKSArICcnO1xyXG4gICAgXHJcbiAgICB0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pbi5taW4gPSBtaW47XHJcbiAgICB0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1heC5tYXggPSBtYXg7XHJcbiAgICBcclxuICAgIHRoaXMubWluLnN0eWxlLmxlZnQgPSBtaW4gKyAncHgnO1xyXG4gICAgdGhpcy5tYXguc3R5bGUubGVmdCA9IG1heCArICdweCc7XHJcbiAgICBcclxuICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUubGVmdCA9ICttaW4gKyB0aGlzLm1pbi5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5yaWdodCA9ICh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gK21heCkgLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gIH1cclxuXHJcbiAgbWluSGFuZGVsTGlzdGVuZXIoIGV2ZW50OiBUZXN0TW91c2VFdmVudCwgdGVzdDogVGVzdE1vdXNlRXZlbnQgfCB1bmRlZmluZWQgKTogdm9pZCB7XHJcbiAgICBsZXQgbWluID0gdGhpcy5taW47XHJcbiAgICBsZXQgbWF4ID0gdGhpcy5tYXg7XHJcbiAgICBsZXQgbWluTGFiZWwgPSB0aGlzLm1pbkxhYmVsO1xyXG4gICAgbGV0IHNsaWRlclJhbmdlID0gdGhpcy5zbGlkZXJSYW5nZTtcclxuICAgIGxldCB0aGF0OiB0aGlzID0gdGhpcztcclxuICAgIGxldCBzaGlmdDogbnVtYmVyO1xyXG4gICAgbGV0IGludGVydmFsID0gdGhpcy5pbnRlcnZhbDtcclxuICAgIGxldCBzdGVwOiBudW1iZXI7XHJcbiAgICBsZXQgdmVydGljYWw6IGJvb2xlYW47XHJcbiAgICBsZXQgZG91YmxlSGFuZGVsczogYm9vbGVhbjtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0N1cnJlbnRTbGlkZXJTZXR0aW5ncygpOnZvaWQge1xyXG4gICAgICB0eXBlb2YgdGhhdC5oYW5kZWxzVG9nZ2xlICE9PSAnYm9vbGVhbicgPyBkb3VibGVIYW5kZWxzID0gdGhhdC5oYW5kZWxzVG9nZ2xlLmNoZWNrZWQgOiBkb3VibGVIYW5kZWxzID0gdGhhdC5oYW5kZWxzVG9nZ2xlOztcclxuICAgICAgdHlwZW9mIHRoYXQucGxhbmVUb2dnbGUgIT09ICdib29sZWFuJyA/IHZlcnRpY2FsID0gdGhhdC5wbGFuZVRvZ2dsZS5jaGVja2VkIDogdGhhdC5wbGFuZVRvZ2dsZTtcclxuICAgICAgXHJcbiAgICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICAgIHNoaWZ0ID0gZXZlbnQuY2xpZW50WSAtIG1pbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBtaW4ub2Zmc2V0V2lkdGg7XHJcbiAgICAgIH0gZWxzZSB7ICBcclxuICAgICAgICBzaGlmdCA9IGV2ZW50LmNsaWVudFggLSBtaW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNoZWNrQ3VycmVudFNsaWRlclNldHRpbmdzKCk7XHJcbiAgICBcclxuICAgIGlmICh0aGlzLnN0ZXBBbW91bnQgICYmIHRoaXMuc3RlcCAhPT0gZmFsc2UpIHtcclxuICAgICAgc3RlcCA9IChzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG1pbi5vZmZzZXRXaWR0aCkgLyB0aGlzLnN0ZXBBbW91bnQgKiArdGhpcy5zdGVwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuICAgIFxyXG4gICAgaWYoIHRlc3QgKSB7XHJcbiAgICAgIG9uTW91c2VNb3ZlKCB0ZXN0IClcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50OiBUZXN0TW91c2VFdmVudCApIHtcclxuICAgICAgbGV0IG5ld0xlZnQ6IG51bWJlcjtcclxuXHJcbiAgICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICAgIG5ld0xlZnQgPSBzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIChldmVudC5jbGllbnRZIC0gc2hpZnQgLSBzbGlkZXJSYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld0xlZnQgPSBldmVudC5jbGllbnRYIC0gc2hpZnQgLSBzbGlkZXJSYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgbGV0IHJpZ2h0RWRnZSA9IHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gbWluLm9mZnNldFdpZHRoO1xyXG4gICAgICBcclxuICAgICAgaWYgKHRoYXQuc3RlcCAhPT0gZmFsc2UpIHtcclxuICAgICAgICBpZiAobmV3TGVmdCA+PSArdGhhdC5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5taW4ubWluICsgc3RlcCB8fCBuZXdMZWZ0IDw9ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pbi5taW4gLSBzdGVwKSB7XHJcbiAgICAgICAgICBuZXdMZWZ0ID49ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pbi5taW4gKyBzdGVwID8gbmV3TGVmdCA9ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pbi5taW4gKyBzdGVwIDogZmFsc2U7XHJcbiAgICAgICAgICBuZXdMZWZ0IDw9ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pbi5taW4gLSBzdGVwID8gbmV3TGVmdCA9ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pbi5taW4gLSBzdGVwIDogZmFsc2U7XHJcbiAgICAgICAgICByZW5ld2FsT2ZQb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZW5ld2FsT2ZQb3NpdGlvbigpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgZnVuY3Rpb24gcmVuZXdhbE9mUG9zaXRpb24oKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmIChuZXdMZWZ0IDwgMCkge1xyXG4gICAgICAgICAgbmV3TGVmdCA9IDA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZG91YmxlSGFuZGVscykgeyBcclxuICAgICAgICAgIGlmIChuZXdMZWZ0ID49ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1heFsnbWF4J10gLSBtYXgub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICAgICAgbmV3TGVmdCA9ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1heFsnbWF4J10gLSBtYXgub2Zmc2V0V2lkdGhcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChuZXdMZWZ0ID4gcmlnaHRFZGdlKSB7XHJcbiAgICAgICAgICAgIG5ld0xlZnQgPSByaWdodEVkZ2U7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1pbi5zdHlsZS5sZWZ0ID0gbmV3TGVmdCArICdweCc7XHJcbiAgICAgICAgaW50ZXJ2YWwuc3R5bGUubGVmdCA9IG5ld0xlZnQgKyBtaW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgICAgICBcclxuICAgICAgICBpZiAobmV3TGVmdCAhPT0gdW5kZWZpbmVkIHx8IHJpZ2h0RWRnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtaW4nXSA9IHsnbWluJzogYCR7bmV3TGVmdH1gLCAnc2xpZGVyV2lkdGgnOiBgJHtzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG1pbi5vZmZzZXRXaWR0aH1gfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWluTGFiZWwuc3R5bGUubGVmdCA9ICgobWluLm9mZnNldFdpZHRoIC0gbWluTGFiZWwub2Zmc2V0V2lkdGgpIC0gMSkgLyAyICsgJ3B4JztcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZVVwKCkge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWF4SGFuZGVsTGlzdGVuZXIoIGV2ZW50OiBUZXN0TW91c2VFdmVudCwgdGVzdDogVGVzdE1vdXNlRXZlbnQgfCB1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGxldCBtYXggPSB0aGlzLm1heDtcclxuICAgIGxldCBtaW4gPSB0aGlzLm1pbjtcclxuICAgIGxldCBzbGlkZXJSYW5nZSA9IHRoaXMuc2xpZGVyUmFuZ2U7XHJcbiAgICBsZXQgc2hpZnQ6IG51bWJlcjtcclxuICAgIGxldCBtYXhMYWJlbCA9IHRoaXMubWF4TGFiZWw7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmludGVydmFsO1xyXG4gICAgbGV0IHN0ZXA6IG51bWJlcjtcclxuICAgIGxldCBkb3VibGVIYW5kZWxzOiBib29sZWFuO1xyXG4gICAgbGV0IHZlcnRpY2FsOiBib29sZWFuO1xyXG5cclxuICAgIGlmICh0aGlzLnN0ZXBBbW91bnQgJiYgdGhpcy5zdGVwICE9PSBmYWxzZSkge1xyXG4gICAgICBzdGVwID0gKHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gbWluLm9mZnNldFdpZHRoKSAvIHRoaXMuc3RlcEFtb3VudCAqICt0aGlzLnN0ZXA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tDdXJyZW50U2xpZGVyU2V0dGluZ3MoKTp2b2lkIHtcclxuICAgICAgdHlwZW9mIHRoYXQuaGFuZGVsc1RvZ2dsZSAhPT0gJ2Jvb2xlYW4nID8gZG91YmxlSGFuZGVscyA9IHRoYXQuaGFuZGVsc1RvZ2dsZS5jaGVja2VkIDogZG91YmxlSGFuZGVscyA9IHRoYXQuaGFuZGVsc1RvZ2dsZTs7XHJcbiAgICAgIHR5cGVvZiB0aGF0LnBsYW5lVG9nZ2xlICE9PSAnYm9vbGVhbicgPyB2ZXJ0aWNhbCA9IHRoYXQucGxhbmVUb2dnbGUuY2hlY2tlZCA6IHRoYXQucGxhbmVUb2dnbGU7XHJcblxyXG4gICAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgICBzaGlmdCA9IGV2ZW50LmNsaWVudFkgLSBtYXguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gbWF4Lm9mZnNldFdpZHRoO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNoaWZ0ID0gZXZlbnQuY2xpZW50WCAtIG1heC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjaGVja0N1cnJlbnRTbGlkZXJTZXR0aW5ncygpO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cclxuICAgIGlmKCB0ZXN0ICE9PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgIG9uTW91c2VNb3ZlKCB0ZXN0IClcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50OiBUZXN0TW91c2VFdmVudCApIHtcclxuICAgICAgbGV0IG5ld0xlZnQ6IG51bWJlcjtcclxuICAgICAgXHJcbiAgICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICAgIG5ld0xlZnQgPSBzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIChldmVudC5jbGllbnRZIC0gc2hpZnQgLSBzbGlkZXJSYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld0xlZnQgPSBldmVudC5jbGllbnRYIC0gc2hpZnQgLSBzbGlkZXJSYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgcmlnaHRFZGdlID0gc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSBtYXgub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgICBpZiAodGhhdC5zdGVwICE9PSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChuZXdMZWZ0ID49ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1heC5tYXggKyBzdGVwIHx8IG5ld0xlZnQgPD0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWF4Lm1heCAtIHN0ZXApIHtcclxuICAgICAgICAgIG5ld0xlZnQgPj0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWF4Lm1heCArIHN0ZXAgPyBuZXdMZWZ0ID0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWF4Lm1heCArIHN0ZXAgOiBmYWxzZTtcclxuICAgICAgICAgIG5ld0xlZnQgPD0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWF4Lm1heCAtIHN0ZXAgPyBuZXdMZWZ0ID0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWF4Lm1heCAtIHN0ZXAgOiBmYWxzZTtcclxuICAgICAgICAgIHJlbmV3YWxPZlBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlbmV3YWxPZlBvc2l0aW9uKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBmdW5jdGlvbiByZW5ld2FsT2ZQb3NpdGlvbigpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKG5ld0xlZnQgPCAwKSB7XHJcbiAgICAgICAgICBuZXdMZWZ0ID0gMDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAobmV3TGVmdCA+IHJpZ2h0RWRnZSkge1xyXG4gICAgICAgICAgbmV3TGVmdCA9IHJpZ2h0RWRnZTtcclxuICAgICAgICB9O1xyXG4gIFxyXG4gICAgICAgIGlmIChuZXdMZWZ0IDw9ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pblsnbWluJ10gKyBtaW4ub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICAgIG5ld0xlZnQgPSArdGhhdC5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5taW5bJ21pbiddICsgbWluLm9mZnNldFdpZHRoXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBtYXguc3R5bGUubGVmdCA9IG5ld0xlZnQgKyAncHgnO1xyXG4gICAgICAgIGludGVydmFsLnN0eWxlLnJpZ2h0ID0gKHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gbmV3TGVmdCkgLSBtYXgub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICBcclxuICAgICAgICBpZiAobmV3TGVmdCAhPT0gdW5kZWZpbmVkIHx8IHJpZ2h0RWRnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtYXgnXSA9IHsnbWF4JzogYCR7bmV3TGVmdH1gLCAnc2xpZGVyV2lkdGgnOiBgJHtzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG1heC5vZmZzZXRXaWR0aH1gfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWF4TGFiZWwuc3R5bGUubGVmdCA9ICgobWF4Lm9mZnNldFdpZHRoIC0gbWF4TGFiZWwub2Zmc2V0V2lkdGgpIC0gMSkgLyAyICsgJ3B4JztcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlVXAoKSB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQbGFuZSggdG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50IHwgYm9vbGVhbiwgYm9keTogSFRNTERpdkVsZW1lbnQsIG1pblZhbHVlOiBIVE1MUGFyYWdyYXBoRWxlbWVudCwgbWF4VmFsdWU6IEhUTUxQYXJhZ3JhcGhFbGVtZW50KTogdm9pZCB7XHJcbiAgICBsZXQgdG9nZ2xlUmVzdWx0OiBib29sZWFuO1xyXG4gICAgdHlwZW9mIHRvZ2dsZSA9PT0gJ2Jvb2xlYW4nID8gIHRvZ2dsZVJlc3VsdCA9IHRvZ2dsZSA6IHRvZ2dsZVJlc3VsdCA9IHRvZ2dsZS5jaGVja2VkO1xyXG4gICAgaWYgKHRvZ2dsZVJlc3VsdCkge1xyXG4gICAgICBib2R5LnN0eWxlLmhlaWdodCA9IGJvZHkub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgICB0aGlzLnNsaWRlclJhbmdlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLTkwZGVnKSc7XHJcbiAgICAgIHRoaXMuc2xpZGVyUmFuZ2Uuc3R5bGUudG9wID0gYm9keS5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gICAgICB0aGlzLm1pbkxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ21pblNsaWRlckhhbmRlbExhYmVsJyk7XHJcbiAgICAgIHRoaXMubWF4TGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnbWF4U2xpZGVySGFuZGVsTGFiZWwnKTtcclxuICAgICAgdGhpcy5taW5MYWJlbC5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJIYW5kZWxMYWJlbFZlcnRpY2FsJyk7XHJcbiAgICAgIHRoaXMubWF4TGFiZWwuY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVySGFuZGVsTGFiZWxWZXJ0aWNhbCcpO1xyXG4gICAgICBtaW5WYWx1ZS5jbGFzc0xpc3QucmVtb3ZlKCdtaW5TbGlkZXJQb2ludCcpO1xyXG4gICAgICBtYXhWYWx1ZS5jbGFzc0xpc3QucmVtb3ZlKCdtYXhTbGlkZXJQb2ludCcpO1xyXG4gICAgICBtaW5WYWx1ZS5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJQb2ludFZlcnRpY2FsJyk7XHJcbiAgICAgIG1heFZhbHVlLmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlclBvaW50VmVydGljYWwnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJvZHkuc3R5bGUuaGVpZ2h0ID0gJyc7XHJcbiAgICAgIHRoaXMuc2xpZGVyUmFuZ2Uuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XHJcbiAgICAgIHRoaXMuc2xpZGVyUmFuZ2Uuc3R5bGUudG9wID0gJyc7XHJcbiAgICAgIHRoaXMubWluTGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnbWluU2xpZGVySGFuZGVsTGFiZWxWZXJ0aWNhbCcpO1xyXG4gICAgICB0aGlzLm1heExhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ21heFNsaWRlckhhbmRlbExhYmVsVmVydGljYWwnKTtcclxuICAgICAgdGhpcy5taW5MYWJlbC5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJIYW5kZWxMYWJlbCcpO1xyXG4gICAgICB0aGlzLm1heExhYmVsLmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlckhhbmRlbExhYmVsJyk7XHJcbiAgICAgIG1pblZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ21pblNsaWRlclBvaW50VmVydGljYWwnKTtcclxuICAgICAgbWF4VmFsdWUuY2xhc3NMaXN0LnJlbW92ZSgnbWF4U2xpZGVyUG9pbnRWZXJ0aWNhbCcpO1xyXG4gICAgICBtaW5WYWx1ZS5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJQb2ludCcpO1xyXG4gICAgICBtYXhWYWx1ZS5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJQb2ludCcpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBzZWxlY3Rpb25PZlByZXBhcmVkVmFsdWUodGFyZ2V0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGxldCB0b2dnbGVSZXN1bHQ6IGJvb2xlYW47XHJcbiAgICB0eXBlb2YgdGhpcy5oYW5kZWxzVG9nZ2xlID09PSAnYm9vbGVhbicgPyAgdG9nZ2xlUmVzdWx0ID0gdGhpcy5oYW5kZWxzVG9nZ2xlIDogdG9nZ2xlUmVzdWx0ID0gdGhpcy5oYW5kZWxzVG9nZ2xlLmNoZWNrZWQ7XHJcbiAgICBpZiAodGFyZ2V0ID09PSAnbWluJykge1xyXG4gICAgICB0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtaW4nXSA9IHsnbWluJzogJzAnLCAnc2xpZGVyV2lkdGgnOmAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gfVxyXG4gICAgICB0aGlzLm1pbi5zdHlsZS5sZWZ0ID0gJzBweCdcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5sZWZ0ID0gMCArIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodG9nZ2xlUmVzdWx0KSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SGFuZGVsc1Bvc2l0aW9uc1snbWF4J10gPSB7J21heCc6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gLCAnc2xpZGVyV2lkdGgnOmAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gfTtcclxuICAgICAgICB0aGlzLm1heC5zdHlsZS5sZWZ0ID0gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgICB0aGlzLmludGVydmFsLnN0eWxlLnJpZ2h0ID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoKSArIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SGFuZGVsc1Bvc2l0aW9uc1snbWluJ10gPSB7J21pbic6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gLCAnc2xpZGVyV2lkdGgnOmAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gfTtcclxuICAgICAgICB0aGlzLm1pbi5zdHlsZS5sZWZ0ID0gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgICB0aGlzLmludGVydmFsLnN0eWxlLmxlZnQgPSAodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSArIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArJ3B4JztcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgc2lkZU1lbnVJbnB1dHNWYWx1ZXNWYWxpZGF0aW9uQ2hlY2tlcih0YXJnZXQ6IHN0cmluZywgdmFsdWU6IG51bWJlciwgcG9zaXRpb25zOiBudW1iZXIsIG1pbmltdW06IG51bWJlcik6IHZvaWQge1xyXG4gICAgbGV0IHRvZ2dsZVJlc3VsdDogYm9vbGVhbjtcclxuICAgIHR5cGVvZiB0aGlzLmhhbmRlbHNUb2dnbGUgPT09ICdib29sZWFuJyA/ICB0b2dnbGVSZXN1bHQgPSB0aGlzLmhhbmRlbHNUb2dnbGUgOiB0b2dnbGVSZXN1bHQgPSB0aGlzLmhhbmRlbHNUb2dnbGUuY2hlY2tlZDtcclxuICAgIGlmICh0YXJnZXQgPT09ICdtaW4nICYmIHRvZ2dsZVJlc3VsdCkge1xyXG4gICAgICBsZXQgbWluOiBzdHJpbmcgPSAoKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkgLyBwb3NpdGlvbnMpICogKHZhbHVlIC0gbWluaW11bSkgKyAnJztcclxuXHJcbiAgICAgIGlmICgrbWluID49ICt0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1heC5tYXggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgIG1pbiA9ICt0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1heC5tYXggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCArICcnO1xyXG4gICAgICB9IGVsc2UgaWYoK21pbiA8IDApIHtcclxuICAgICAgICBtaW4gPSAnMCc7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtaW4nXSA9IHsnbWluJzogbWluLCAnc2xpZGVyV2lkdGgnOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGh9YH07XHJcbiAgICAgIHRoaXMubWluLnN0eWxlLmxlZnQgPSBtaW4gKyAncHgnO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLmxlZnQgPSArbWluICsgdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSAnbWluJykge1xyXG4gICAgICBsZXQgbWluOiBzdHJpbmcgPSAoKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkgLyBwb3NpdGlvbnMpICogKHZhbHVlIC0gbWluaW11bSkgKyAnJztcclxuXHJcbiAgICAgIGlmKCttaW4gPCAwKSB7XHJcbiAgICAgICAgbWluID0gJzAnO1xyXG4gICAgICB9IGVsc2UgaWYgKCttaW4gPiB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICBtaW4gPSAodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSArICcnO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5jdXJyZW50SGFuZGVsc1Bvc2l0aW9uc1snbWluJ10gPSB7J21pbic6IG1pbiwgJ3NsaWRlcldpZHRoJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWB9O1xyXG4gICAgICB0aGlzLm1pbi5zdHlsZS5sZWZ0ID0gbWluICsgJ3B4JztcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5sZWZ0ID0gK21pbiArIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gJ21heCcpIHtcclxuICAgICAgbGV0IG1heDogc3RyaW5nID0gKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXgub2Zmc2V0V2lkdGgpIC8gcG9zaXRpb25zKSAqICh2YWx1ZSAtIG1pbmltdW0pICsgJyc7XHJcblxyXG4gICAgICBpZiAoK21heCA8PSArdGhpcy5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5taW4ubWluICsgdGhpcy5taW4ub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICBtYXggPSArdGhpcy5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5taW4ubWluICsgdGhpcy5tYXgub2Zmc2V0V2lkdGggKyAnJztcclxuICAgICAgfSBlbHNlIGlmKCttYXggPiB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpe1xyXG4gICAgICAgIG1heCA9ICh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpICsgJyc7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtYXgnXSA9IHsnbWF4JzogbWF4LCAnc2xpZGVyV2lkdGgnOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXgub2Zmc2V0V2lkdGh9YH07XHJcbiAgICAgIHRoaXMubWF4LnN0eWxlLmxlZnQgPSBtYXggKyAncHgnO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLnJpZ2h0ID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSArbWF4KSAtIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICB9XHJcbiAgfTtcclxufTsiLCJleHBvcnQgY2xhc3MgU2xpZGVyUmFuZ2Uge1xyXG5cclxuICByYW5nZTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgbGV0IGVsZW06IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ3NsaWRlclJhbmdlJyk7XHJcbiAgICB0aGlzLnJhbmdlID0gZWxlbTtcclxuICB9O1xyXG5cclxuICBnZXRFbGVtZW50cygpOiBIVE1MRGl2RWxlbWVudHtcclxuICAgIHJldHVybiB0aGlzLnJhbmdlO1xyXG4gIH07XHJcblxyXG59OyIsImV4cG9ydCBjbGFzcyBWYWx1ZVJhbmdlIHtcclxuICBtaW5WYWx1ZTogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgbWF4VmFsdWU6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvciAodmFsdWVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSkge1xyXG4gICAgbGV0IG1pbjpIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBtYXg6SFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBtaW4uaW5uZXJUZXh0ID0gdmFsdWVzLm1pbjtcclxuICAgIG1heC5pbm5lclRleHQgPSB2YWx1ZXMubWF4O1xyXG4gICAgbWluLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlclBvaW50Jyk7XHJcbiAgICBtYXguY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVyUG9pbnQnKTtcclxuICAgIHRoaXMubWluVmFsdWUgPSBtaW47XHJcbiAgICB0aGlzLm1heFZhbHVlID0gbWF4O1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudHMoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7bWluOiB0aGlzLm1pblZhbHVlLCBtYXg6IHRoaXMubWF4VmFsdWV9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtTbGlkZXJSYW5nZX0gZnJvbSAnLi9jb21wb25lbnRzL3NsaWRlci1yYW5nZSc7XHJcbmltcG9ydCB7SGFuZGVsc30gZnJvbSAnLi9jb21wb25lbnRzL2hhbmRlbHMnO1xyXG5pbXBvcnQge1NsaWRlck1vdmVtZW50fSBmcm9tICcuL2NvbXBvbmVudHMvc2xpZGVyLW1vdmVtZW50JztcclxuaW1wb3J0IHtTaWRlTWVudX0gZnJvbSAnLi9jb21wb25lbnRzL3NpZGUtbWVudSc7XHJcbmltcG9ydCB7VmFsdWVSYW5nZX0gZnJvbSAnLi9jb21wb25lbnRzL3ZhbHVlUmFuZ2UnO1xyXG5pbXBvcnQge0hhbmRlbHNMYWJlbHN9IGZyb20gJy4vY29tcG9uZW50cy9oYW5kZWxzLWxhYmVscyc7XHJcbmltcG9ydCB7U2VsZWN0ZWRSYW5nZX0gZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdGVkLXJhbmdlJztcclxuaW1wb3J0IHtTZXR0aW5nc30gZnJvbSAnLi4vLi4vanF1ZXJ5LnVpLmN1c3RvbVNsaWRlcic7XHJcblxyXG5pbnRlcmZhY2UgUG9zc2libGVSYW5nZSB7XHJcbiAgbWluOiBzdHJpbmc7XHJcbiAgbWF4OiBzdHJpbmc7XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgRGF0YU9mVmFsdWVSZWZyZXNoIHtcclxuICAnbWluJz86IHN0cmluZztcclxuICAnbWF4Jz86IHN0cmluZztcclxufTtcclxuXHJcbmludGVyZmFjZSBEYXRhUmVxdWVzdFN0YXR1cyB7XHJcbiAgW2tleTogc3RyaW5nXTogYm9vbGVhblxyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXcge1xyXG4gIHByaXZhdGUgdGhhdDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3M7XHJcbiAgcmVhZG9ubHkgc2xpZGVyUmFuZ2U6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHByaXZhdGUgc2xpZGVyQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICByZWFkb25seSBtaW5IYW5kZWw6IEhUTUxTcGFuRWxlbWVudDtcclxuICByZWFkb25seSBtYXhIYW5kZWw6IEhUTUxTcGFuRWxlbWVudDtcclxuICByZWFkb25seSBzbGlkZXJNb3ZlbWVudDogU2xpZGVyTW92ZW1lbnQ7XHJcbiAgcHJpdmF0ZSBzaWRlTWVudUNvbnRhaW5lcjogU3RyaW5nIHwgQm9vbGVhbjtcclxuICBwcml2YXRlIG1pblZhbHVlOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICBwcml2YXRlIG1heFZhbHVlOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICByZWFkb25seSBtaW5MYWJlbDogSFRNTExhYmVsRWxlbWVudDtcclxuICByZWFkb25seSBtYXhMYWJlbDogSFRNTExhYmVsRWxlbWVudDtcclxuICByZWFkb25seSBpbnRlcnZhbDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcmVhZG9ubHkgc2lkZU1lbnU6IEhUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG4gIHJlYWRvbmx5IGhhbmRlbFRvZ2dsZTogSFRNTElucHV0RWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIGhhbmRlbExhYmVsVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50fCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBwbGFuZVRvZ2dsZTogSFRNTElucHV0RWxlbWVudHwgdW5kZWZpbmVkO1xyXG4gIHJlYWRvbmx5IG1pbklucHV0OiBIVE1MSW5wdXRFbGVtZW50fCB1bmRlZmluZWQ7XHJcbiAgcmVhZG9ubHkgbWF4SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnR8IHVuZGVmaW5lZDtcclxuICByZWFkb25seSBtaW5TbGlkZXJWYWx1ZU91dHB1dDogSFRNTE91dHB1dEVsZW1lbnQgfCB1bmRlZmluZWQ7XHJcbiAgcmVhZG9ubHkgbWF4U2xpZGVyVmFsdWVPdXRwdXQ6IEhUTUxPdXRwdXRFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHRhcmdldDogSFRNTERpdkVsZW1lbnQsIHNldHRpbmdzOiBTZXR0aW5ncykge1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG4gICAgdGhpcy50aGF0ID0gdGFyZ2V0O1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZSA9IG5ldyBTbGlkZXJSYW5nZSgpLmdldEVsZW1lbnRzKCk7XHJcblxyXG4gICAgbGV0IGhhbmRlbHM6IEhhbmRlbHMgPSBuZXcgSGFuZGVscygpO1xyXG4gICAgdGhpcy5taW5IYW5kZWwgPSBoYW5kZWxzLm1pbkhhbmRlbDtcclxuICAgIHRoaXMubWF4SGFuZGVsID0gaGFuZGVscy5tYXhIYW5kZWw7XHJcblxyXG4gICAgbGV0IHZhbHVlUmFuZ2U6IFZhbHVlUmFuZ2UgPSBuZXcgVmFsdWVSYW5nZSh7J21pbic6IHRoaXMuc2V0dGluZ3NbJ21pbiddLCAnbWF4JzogdGhpcy5zZXR0aW5nc1snbWF4J119KTtcclxuICAgIHRoaXMubWluVmFsdWUgPSB2YWx1ZVJhbmdlLm1pblZhbHVlO1xyXG4gICAgdGhpcy5tYXhWYWx1ZSA9IHZhbHVlUmFuZ2UubWF4VmFsdWU7XHJcblxyXG4gICAgaWYgKHNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSkge1xyXG4gICAgICBsZXQgc2lkZU1lbnUgPSBuZXcgU2lkZU1lbnUoKTtcclxuICAgICAgdGhpcy5zaWRlTWVudSA9IHNpZGVNZW51LmN1c3RvbVNsaWRlck1lbnVDb250YWluZXI7XHJcbiAgICAgIHRoaXMuaGFuZGVsVG9nZ2xlID0gc2lkZU1lbnUuaGFuZGVsVG9nZ2xlO1xyXG4gICAgICB0aGlzLmhhbmRlbExhYmVsVG9nZ2xlID0gc2lkZU1lbnUuaGFuZGVsTGFiZWxUb2dnbGU7XHJcbiAgICAgIHRoaXMucGxhbmVUb2dnbGUgPSBzaWRlTWVudS5wbGFuZVRvZ2dsZTtcclxuICAgICAgdGhpcy5taW5JbnB1dCA9IHNpZGVNZW51Lm1pbklucHV0O1xyXG4gICAgICB0aGlzLm1heElucHV0ID0gc2lkZU1lbnUubWF4SW5wdXQ7XHJcbiAgICAgIHRoaXMubWluU2xpZGVyVmFsdWVPdXRwdXQgPSBzaWRlTWVudS5taW5TbGlkZXJWYWx1ZU91dHB1dDtcclxuICAgICAgdGhpcy5tYXhTbGlkZXJWYWx1ZU91dHB1dCA9IHNpZGVNZW51Lm1heFNsaWRlclZhbHVlT3V0cHV0O1xyXG4gICAgfTtcclxuICAgIHRoaXMuc2lkZU1lbnVDb250YWluZXIgPSBzZXR0aW5ncy5zaWRlTWVudUNvbnRhaW5lcjtcclxuXHJcbiAgICBsZXQgaGFuZGVsc0xhYmVsczogSGFuZGVsc0xhYmVscyA9IG5ldyBIYW5kZWxzTGFiZWxzKCk7XHJcbiAgICB0aGlzLm1pbkxhYmVsID0gaGFuZGVsc0xhYmVscy5taW5MYWJlbDtcclxuICAgIHRoaXMubWF4TGFiZWwgPSBoYW5kZWxzTGFiZWxzLm1heExhYmVsO1xyXG5cclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBuZXcgU2VsZWN0ZWRSYW5nZSgpLmdldEVsZW1lbnRzKCk7XHJcbiAgICBcclxuICAgIGlmKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMuc2xpZGVyTW92ZW1lbnQgPSBuZXcgU2xpZGVyTW92ZW1lbnQoeydtaW4nOiB0aGlzLm1pbkhhbmRlbCwgJ21heCc6IHRoaXMubWF4SGFuZGVsLCdtaW5MYWJlbCc6IHRoaXMubWluTGFiZWwsICdtYXhMYWJlbCc6IHRoaXMubWF4TGFiZWwgLCdzbGlkZXJSYW5nZSc6IHRoaXMuc2xpZGVyUmFuZ2UsICdwbGFuZVRvZ2dsZSc6IHRoaXMucGxhbmVUb2dnbGUgPyB0aGlzLnBsYW5lVG9nZ2xlIDogdGhpcy5zZXR0aW5ncy52ZXJ0aWNhbCwgJ2hhbmRlbHNUb2dnbGUnOiB0aGlzLmhhbmRlbFRvZ2dsZSA/IHRoaXMuaGFuZGVsVG9nZ2xlIDogdGhpcy5zZXR0aW5ncy5yYW5nZSwgJ2ludGVydmFsJzogdGhpcy5pbnRlcnZhbCwgJ3N0ZXAnOiB0aGlzLnNldHRpbmdzLnN0ZXB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2xpZGVyTW92ZW1lbnQgPSBuZXcgU2xpZGVyTW92ZW1lbnQoeydtaW4nOiB0aGlzLm1pbkhhbmRlbCwgJ21heCc6IHRoaXMubWF4SGFuZGVsLCdtaW5MYWJlbCc6IHRoaXMubWluTGFiZWwsICdtYXhMYWJlbCc6IHRoaXMubWF4TGFiZWwgLCdzbGlkZXJSYW5nZSc6IHRoaXMuc2xpZGVyUmFuZ2UsICdwbGFuZVRvZ2dsZSc6IHRoaXMuc2V0dGluZ3MudmVydGljYWwsICdoYW5kZWxzVG9nZ2xlJzogdGhpcy5zZXR0aW5ncy5yYW5nZSwgJ2ludGVydmFsJzogdGhpcy5pbnRlcnZhbCwgJ3N0ZXAnOiB0aGlzLnNldHRpbmdzLnN0ZXB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5zbGlkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB9O1xyXG5cclxuICBkYXRhUmVxdWVzdFN0YXR1czogRGF0YVJlcXVlc3RTdGF0dXMgPSB7XHJcbiAgICBcImdldE1heERhdGFcIjogZmFsc2UsXHJcbiAgICBcImdldE1pblBvc2l0aW9uc0Ftb3VudFwiOiBmYWxzZSxcclxuICAgIFwiZ2V0TWF4UG9zaXRpb25zQW1vdW50XCI6IGZhbHNlLFxyXG4gICAgXCJnZXRQb3NzaWJsZVJhbmdlXCI6IGZhbHNlLFxyXG4gICAgXCJnZXRTdGVwUG9zaXRpb25zQW1vdW50XCI6IGZhbHNlXHJcbiAgfTtcclxuXHJcbiAgZGlzcGxheUVsZW1lbnRzKCk6IHZvaWQge1xyXG4gICAgXHJcbiAgICB0aGlzLnNsaWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzbGlkZXJCb2R5Jyk7XHJcbiAgICB0aGlzLnNsaWRlckNvbnRhaW5lci5hcHBlbmQodGhpcy5zbGlkZXJSYW5nZSk7XHJcbiAgICB0aGlzLnRoYXQuYXBwZW5kKHRoaXMuc2xpZGVyQ29udGFpbmVyKTtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMubWluSGFuZGVsKTtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMubWF4SGFuZGVsKTtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMubWluVmFsdWUpO1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZS5hcHBlbmQodGhpcy5tYXhWYWx1ZSk7XHJcbiAgICB0aGlzLmludGVydmFsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgdGhpcy5taW5IYW5kZWwuYXBwZW5kKHRoaXMubWluTGFiZWwpO1xyXG4gICAgdGhpcy5tYXhIYW5kZWwuYXBwZW5kKHRoaXMubWF4TGFiZWwpO1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1snaGFuZGVsc0xhYmVsJ10gPT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMubWluTGFiZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdGhpcy5tYXhMYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUgJiYgdGhpcy5oYW5kZWxMYWJlbFRvZ2dsZSkge1xyXG4gICAgICAgIHRoaXMuaGFuZGVsTGFiZWxUb2dnbGUuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGlmKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlICYmIHRoaXMuc2lkZU1lbnUpIHtcclxuICAgICAgdGhpcy5kYXRhUmVxdWVzdFN0YXR1c1tcImdldFBvc3NpYmxlUmFuZ2VcIl0gPSB0cnVlO1xyXG4gICAgICBpZiAodGhpcy5zaWRlTWVudUNvbnRhaW5lciAhPT0gJ2ZhbHNlJyAmJiB0eXBlb2YgdGhpcy5zaWRlTWVudUNvbnRhaW5lciA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2lkZU1lbnVDb250YWluZXIpWzBdLmFwcGVuZCh0aGlzLnNpZGVNZW51KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRoYXQuYXBwZW5kKHRoaXMuc2lkZU1lbnUpXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1tcInJhbmdlXCJdID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMubWF4SGFuZGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBpZih0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuaGFuZGVsVG9nZ2xlID8gdGhpcy5oYW5kZWxUb2dnbGUuY2hlY2tlZCA9IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLm1heElucHV0ID8gdGhpcy5tYXhJbnB1dC5zdHlsZS5vcGFjaXR5ID0gJzEnIDogZmFsc2U7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLnNldHRpbmdzWyd2ZXJ0aWNhbCddID09PSB0cnVlKSB7XHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlICYmIHRoaXMucGxhbmVUb2dnbGUpIHtcclxuICAgICAgICB0aGlzLnBsYW5lVG9nZ2xlID8gdGhpcy5wbGFuZVRvZ2dsZS5jaGVja2VkID0gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyTW92ZW1lbnQuY2hhbmdlUGxhbmUodGhpcy5wbGFuZVRvZ2dsZSwgdGhpcy5zbGlkZXJDb250YWluZXIsIHRoaXMubWluVmFsdWUsIHRoaXMubWF4VmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2xpZGVyTW92ZW1lbnQuY2hhbmdlUGxhbmUodHJ1ZSwgdGhpcy5zbGlkZXJDb250YWluZXIsIHRoaXMubWluVmFsdWUsIHRoaXMubWF4VmFsdWUpO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5zdGVwID09PSB0cnVlICYmIHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQgPyB0aGlzLm1heElucHV0LnNldEF0dHJpYnV0ZSgnc3RlcCcsIHRoaXMuc2V0dGluZ3Muc3RlcCArIFwiXCIpIDogZmFsc2U7XHJcbiAgICAgIHRoaXMubWluSW5wdXQgPyB0aGlzLm1pbklucHV0LnNldEF0dHJpYnV0ZSgnc3RlcCcsIHRoaXMuc2V0dGluZ3Muc3RlcCArIFwiXCIpIDogZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpZih0aGlzLnNldHRpbmdzLnN0ZXApIHtcclxuICAgICAgdGhpcy5kYXRhUmVxdWVzdFN0YXR1c1tcImdldFN0ZXBQb3NpdGlvbnNBbW91bnRcIl0gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGF0YVJlcXVlc3RTdGF0dXNbXCJzdGFydEhhbmRlbHNQb3NpdGlvblwiXSA9IHRydWU7XHJcbiAgfTtcclxuXHJcbiAgYmluZEV2ZW50TGlzdGVuZXJzKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlICYmIHRoaXMuaGFuZGVsTGFiZWxUb2dnbGUpIHtcclxuICAgICAgdGhpcy5oYW5kZWxMYWJlbFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm1ha2VCaW5kTGFiZWxUb2dnbGUuYmluZCh0aGlzKSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlICYmIHRoaXMuaGFuZGVsVG9nZ2xlKSB7XHJcbiAgICAgIHRoaXMuaGFuZGVsVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMubWFrZUJpbmRIYW5kZWxUb2dnbGUuYmluZCh0aGlzKSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlICYmIHRoaXMucGxhbmVUb2dnbGUpIHtcclxuICAgICAgdGhpcy5wbGFuZVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm1ha2VCaW5kRm9yUGxhbmVUb2dnbGUuYmluZCh0aGlzKSk7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5taW5WYWx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFrZUJpbmRGb3JTZWxlY3Rpb25NaW5WYWx1ZS5iaW5kKHRoaXMpKTtcclxuICAgIHRoaXMubWF4VmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm1ha2VCaW5kRm9yU2VsZWN0aW9uTWF4VmFsdWUuYmluZCh0aGlzKSk7XHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUgJiYgdGhpcy5taW5JbnB1dCkge1xyXG4gICAgICB0aGlzLm1pbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMubWFrZUJpbmRGb3JNaW5JbnB1dC5iaW5kKHRoaXMpKTtcclxuICAgIH07XHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUgJiYgdGhpcy5tYXhJbnB1dCkge1xyXG4gICAgICB0aGlzLm1heElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMubWFrZUJpbmRGb3JNYXhJbnB1dC5iaW5kKHRoaXMpKTtcclxuICAgIH07XHJcbiAgfTtcclxuICBcclxuICBiaW5kRXZlbnRIYW5kZWxzTW92ZW1lbnQoKTp2b2lkIHtcclxuICAgIHRoaXMuYmluZEZvck1pbigpO1xyXG4gICAgdGhpcy5iaW5kRm9yTWF4KCk7XHJcbiAgfTtcclxuXHJcbiAgcmVmcmVzaEN1cnJlbnRWYWx1ZXMobmV3RGF0YTogRGF0YU9mVmFsdWVSZWZyZXNoKTogdm9pZCB7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tVbmRlZmluZWRTdHJpbmdzKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBudWxsIHwgc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBudWxsIDogdmFsdWU7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICgnbWluJyBpbiBuZXdEYXRhICYmICdtYXgnIGluIG5ld0RhdGEpIHtcclxuICAgICAgaWYodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUgJiYgdGhpcy5zaWRlTWVudSkge1xyXG4gICAgICAgIHRoaXMubWluU2xpZGVyVmFsdWVPdXRwdXQgPyB0aGlzLm1pblNsaWRlclZhbHVlT3V0cHV0LnRleHRDb250ZW50ID0gY2hlY2tVbmRlZmluZWRTdHJpbmdzKG5ld0RhdGEubWluKSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWluSW5wdXQgPyB0aGlzLm1pbklucHV0LnZhbHVlID0gYCR7bmV3RGF0YS5taW59YCA6IGZhbHNlO1xyXG4gICAgICAgIGlmKHRoaXMuaGFuZGVsVG9nZ2xlICYmIHRoaXMuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPT09IHRydWUgKSB7XHJcbiAgICAgICAgICB0aGlzLm1heFNsaWRlclZhbHVlT3V0cHV0ID8gdGhpcy5tYXhTbGlkZXJWYWx1ZU91dHB1dC50ZXh0Q29udGVudCA9IGAgLSAke2NoZWNrVW5kZWZpbmVkU3RyaW5ncyhuZXdEYXRhLm1heCl9YCA6IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5tYXhJbnB1dCA/IHRoaXMubWF4SW5wdXQudmFsdWUgPSBgJHtuZXdEYXRhLm1heH1gIDogZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMubWluTGFiZWwudGV4dENvbnRlbnQgPSBjaGVja1VuZGVmaW5lZFN0cmluZ3MobmV3RGF0YS5taW4pO1xyXG4gICAgICB0aGlzLm1heExhYmVsLnRleHRDb250ZW50ID0gY2hlY2tVbmRlZmluZWRTdHJpbmdzKG5ld0RhdGEubWF4KTtcclxuICAgICAgXHJcbiAgICB9IGVsc2UgaWYgKCdtaW4nIGluIG5ld0RhdGEpIHtcclxuICAgICAgdGhpcy5taW5MYWJlbC50ZXh0Q29udGVudCA9IGNoZWNrVW5kZWZpbmVkU3RyaW5ncyhuZXdEYXRhLm1pbik7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMubWluU2xpZGVyVmFsdWVPdXRwdXQgPyB0aGlzLm1pblNsaWRlclZhbHVlT3V0cHV0LnRleHRDb250ZW50ID0gY2hlY2tVbmRlZmluZWRTdHJpbmdzKG5ld0RhdGEubWluKSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWluSW5wdXQgPyB0aGlzLm1pbklucHV0LnZhbHVlID0gYCR7bmV3RGF0YS5taW59YCA6IGZhbHNlO1xyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tYXhMYWJlbC50ZXh0Q29udGVudCA9IGNoZWNrVW5kZWZpbmVkU3RyaW5ncyhuZXdEYXRhLm1heCk7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMubWF4U2xpZGVyVmFsdWVPdXRwdXQgPyB0aGlzLm1heFNsaWRlclZhbHVlT3V0cHV0LnRleHRDb250ZW50ID0gYCAtICR7Y2hlY2tVbmRlZmluZWRTdHJpbmdzKG5ld0RhdGEubWF4KX1gIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tYXhJbnB1dCA/IHRoaXMubWF4SW5wdXQudmFsdWUgPSBgJHtuZXdEYXRhLm1heH1gIDogZmFsc2U7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgbmV3IEhhbmRlbHNMYWJlbHMoKS5jZW50ZXJpbmdSZWxhdGl2ZVRvSGFuZGxlcyh0aGlzLm1pbkhhbmRlbC5vZmZzZXRXaWR0aCwgdGhpcy5tYXhIYW5kZWwub2Zmc2V0V2lkdGgsIHRoaXMubWluTGFiZWwub2Zmc2V0V2lkdGgsIHRoaXMubWF4TGFiZWwub2Zmc2V0V2lkdGgsIHRoaXMubWluTGFiZWwsIHRoaXMubWF4TGFiZWwpO1xyXG4gIH07XHJcblxyXG4gIGNhbGxIYW5kZWxMYWJlbFRvZ2dsZUNoYW5nZXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhbmRlbExhYmVsVG9nZ2xlID8gbmV3IEhhbmRlbHNMYWJlbHMoKS5kaXNwbGF5Q29udHJvbGxlcih0aGlzLmhhbmRlbExhYmVsVG9nZ2xlLCB0aGlzLm1pbkxhYmVsLCB0aGlzLm1heExhYmVsKSA6IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuaGFuZGVsTGFiZWxUb2dnbGUgJiYgdGhpcy5oYW5kZWxMYWJlbFRvZ2dsZS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgIG5ldyBIYW5kZWxzTGFiZWxzKCkuY2VudGVyaW5nUmVsYXRpdmVUb0hhbmRsZXModGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGgsIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRoLCB0aGlzLm1pbkxhYmVsLm9mZnNldFdpZHRoLCB0aGlzLm1heExhYmVsLm9mZnNldFdpZHRoLCB0aGlzLm1pbkxhYmVsLCB0aGlzLm1heExhYmVsKVxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjYWxsTWF4SGFuZGVsVG9nZ2xlQ2hhbmdlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmhhbmRlbFRvZ2dsZSAmJiB0aGlzLmhhbmRlbFRvZ2dsZS5jaGVja2VkID09PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLnNsaWRlck1vdmVtZW50LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtYXgnXSA9IHsnbWF4JzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRofWAsICdzbGlkZXJXaWR0aCc6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbkhhbmRlbC5vZmZzZXRXaWR0aH1gfVxyXG4gICAgICB0aGlzLm1heEhhbmRlbC5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRofXB4YDtcclxuICAgICAgdGhpcy5tYXhTbGlkZXJWYWx1ZU91dHB1dCA/IHRoaXMubWF4U2xpZGVyVmFsdWVPdXRwdXQudGV4dENvbnRlbnQgPSAnJyA6IGZhbHNlO1xyXG4gICAgICB0aGlzLm1heElucHV0ID8gdGhpcy5tYXhJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpIDogZmFsc2U7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQgPyB0aGlzLm1heElucHV0LnZhbHVlID0gJycgOiBmYWxzZTtcclxuICAgICAgdGhpcy5tYXhJbnB1dCA/IHRoaXMubWF4SW5wdXQuc3R5bGUub3BhY2l0eSA9ICcwLjMnIDogZmFsc2U7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5oYW5kZWxUb2dnbGUgPyBuZXcgSGFuZGVscygpLmRpc3BsYXlDb250cm9sbGVyKHRoaXMuaGFuZGVsVG9nZ2xlLCB0aGlzLm1heEhhbmRlbCkgOiBmYWxzZSA7XHJcblxyXG4gICAgaWYgKHRoaXMuaGFuZGVsVG9nZ2xlICYmIHRoaXMuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5kYXRhUmVxdWVzdFN0YXR1c1tcImdldE1heERhdGFcIl0gPSB0cnVlO1xyXG4gICAgICB0aGlzLm1heElucHV0ID8gdGhpcy5tYXhJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5JykgOiBmYWxzZTtcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5yaWdodCA9IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSAodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRoIC8gMiApICsgJ3B4JztcclxuICAgICAgaWYgKCt0aGlzLnNsaWRlck1vdmVtZW50LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pblsnbWluJ10gPj0gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRoIC0gdGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICB0aGlzLnNsaWRlck1vdmVtZW50LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtaW4nXSA9IHsnbWluJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRoIC0gdGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGh9YCwgJ3NsaWRlcldpZHRoJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRofWB9XHJcbiAgICAgICAgdGhpcy5taW5IYW5kZWwuc3R5bGUubGVmdCA9IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1heEhhbmRlbC5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRofXB4YDtcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmVmcmVzaE1heFNpZGVNZW51RGF0YShkYXRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMubWF4U2xpZGVyVmFsdWVPdXRwdXQgPyB0aGlzLm1heFNsaWRlclZhbHVlT3V0cHV0LnRleHRDb250ZW50ID0gYCAtICR7ZGF0YX1gIDogZmFsc2U7XHJcbiAgICBpZiAodGhpcy5tYXhJbnB1dCkge1xyXG4gICAgICB0aGlzLm1heElucHV0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQudmFsdWUgPSBgJHtkYXRhfWA7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGlucHV0c1Bvc3NpYmxlUmFuZ2UoIGRhdGE6IFBvc3NpYmxlUmFuZ2UsIG1pbjogSFRNTElucHV0RWxlbWVudCwgbWF4OiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XHJcbiAgICBtaW4uc2V0QXR0cmlidXRlKCdtYXgnLCBkYXRhLm1heCk7XHJcbiAgICBtaW4uc2V0QXR0cmlidXRlKCdtaW4nLCBkYXRhLm1pbik7XHJcbiAgICBtYXguc2V0QXR0cmlidXRlKCdtYXgnLCBkYXRhLm1heCk7XHJcbiAgfTtcclxuXHJcbiAgYmluZEZvck1pbigpOiB2b2lkIHtcclxuICAgIGxldCB0aGF0ID0gdGhpczsgXHJcbiAgICB0aGF0Lm1pbkhhbmRlbC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKCBldmVudCApOiB2b2lkIHtcclxuICAgICAgdGhhdC5zbGlkZXJNb3ZlbWVudC5taW5IYW5kZWxMaXN0ZW5lciggZXZlbnQsIHVuZGVmaW5lZCk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGJpbmRGb3JNYXgoKTogdm9pZCB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7IFxyXG4gICAgdGhhdC5tYXhIYW5kZWwub25tb3VzZWRvd24gPSBmdW5jdGlvbihldmVudCk6IHZvaWQge1xyXG4gICAgICB0aGF0LnNsaWRlck1vdmVtZW50Lm1heEhhbmRlbExpc3RlbmVyKCBldmVudCwgdW5kZWZpbmVkKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgbWFrZUJpbmRMYWJlbFRvZ2dsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FsbEhhbmRlbExhYmVsVG9nZ2xlQ2hhbmdlcigpO1xyXG4gIH07XHJcblxyXG4gIG1ha2VCaW5kSGFuZGVsVG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jYWxsTWF4SGFuZGVsVG9nZ2xlQ2hhbmdlcigpO1xyXG4gIH07XHJcblxyXG4gIG1ha2VCaW5kRm9yUGxhbmVUb2dnbGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnBsYW5lVG9nZ2xlID8gdGhpcy5zbGlkZXJNb3ZlbWVudC5jaGFuZ2VQbGFuZSh0aGlzLnBsYW5lVG9nZ2xlLCB0aGlzLnNsaWRlckNvbnRhaW5lciwgdGhpcy5taW5WYWx1ZSwgdGhpcy5tYXhWYWx1ZSkgOiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBtYWtlQmluZEZvclNlbGVjdGlvbk1pblZhbHVlICgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2xpZGVyTW92ZW1lbnQuc2VsZWN0aW9uT2ZQcmVwYXJlZFZhbHVlKCdtaW4nKTtcclxuICB9O1xyXG5cclxuICBtYWtlQmluZEZvclNlbGVjdGlvbk1heFZhbHVlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zbGlkZXJNb3ZlbWVudC5zZWxlY3Rpb25PZlByZXBhcmVkVmFsdWUoJ21heCcpO1xyXG4gIH07XHJcblxyXG4gIG1ha2VCaW5kRm9yTWluSW5wdXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGFSZXF1ZXN0U3RhdHVzW1wiZ2V0TWluUG9zaXRpb25zQW1vdW50XCJdID0gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBtYWtlQmluZEZvck1heElucHV0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRhUmVxdWVzdFN0YXR1c1tcImdldE1heFBvc2l0aW9uc0Ftb3VudFwiXSA9IHRydWU7XHJcbiAgfTtcclxufTtcclxuIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vY29tcG9uZW50cy92aWV3L3ZpZXcnO1xyXG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RlbC9tb2RlbCc7XHJcbmltcG9ydCB7IEZhY2FkZSB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RlbC9mYWNhZGUnO1xyXG5pbXBvcnQgeyBQcmVzZW50ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJlc2VudGVyL3ByZXNlbnRlcic7XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIEpRdWVyeSB7XHJcbiAgICB0ZXN0U2xpZGVyKCBvcHRpb25zOiBTbGlkZXJPcHRpb25zKTp2b2lkO1xyXG4gIH1cclxufTtcclxuXHJcbmludGVyZmFjZSBTbGlkZXJPcHRpb25zIHtcclxuICBba2V5OiBzdHJpbmddOiBib29sZWFuIHwgc3RyaW5nXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNldHRpbmdzIHtcclxuICAnbWluJzogc3RyaW5nO1xyXG4gICdtYXgnOiBzdHJpbmc7XHJcbiAgJ3JhbmdlJzogYm9vbGVhbjtcclxuICAnc2lkZS1tZW51JzogYm9vbGVhbjtcclxuICAnaGFuZGVsc0xhYmVsJzogYm9vbGVhbjtcclxuICAndmVydGljYWwnOiBib29sZWFuO1xyXG4gICdzdGVwJzogYm9vbGVhbiB8IHN0cmluZztcclxuICAnc2lkZU1lbnVDb250YWluZXInOiBzdHJpbmc7XHJcbiAgJ2N1cnJlbnQtbWluJz86IHN0cmluZztcclxuICAnY3VycmVudC1tYXgnPzogc3RyaW5nO1xyXG59XHJcblxyXG4oZnVuY3Rpb24oICQgKSB7XHJcbiAgJC5mbi50ZXN0U2xpZGVyID0gZnVuY3Rpb24oIG9wdGlvbnM6IFNsaWRlck9wdGlvbnMgKSB7XHJcblxyXG4gICAgbGV0IHNldHRpbmdzOiBTZXR0aW5ncyA9ICQuZXh0ZW5kKCB7XHJcbiAgICAgICdtaW4nOiAnMCcsXHJcbiAgICAgICdtYXgnOiAnMTAnLFxyXG4gICAgICAncmFuZ2UnOiBmYWxzZSxcclxuICAgICAgJ3NpZGUtbWVudSc6IGZhbHNlLFxyXG4gICAgICAnaGFuZGVsc0xhYmVsJzogZmFsc2UsXHJcbiAgICAgICd2ZXJ0aWNhbCc6IGZhbHNlLFxyXG4gICAgICAnc3RlcCc6IGZhbHNlLFxyXG4gICAgICAnc2lkZU1lbnVDb250YWluZXInOiAnZmFsc2UnXHJcbiAgICB9LCBvcHRpb25zKTtcclxuXHJcbiAgICBsZXQgdGhhdDogSFRNTERpdkVsZW1lbnQgPSB0aGlzO1xyXG4gICAgXHJcbiAgICBsZXQgbW9kZWw6IE1vZGVsO1xyXG4gICAgaWYgKCdjdXJyZW50LW1pbicgaW4gc2V0dGluZ3MgJiYgJ2N1cnJlbnQtbWF4JyBpbiBzZXR0aW5ncykge1xyXG4gICAgICBtb2RlbCA9IG5ldyBNb2RlbCh7J21pbic6IHNldHRpbmdzWydtaW4nXSwgbWF4OiBzZXR0aW5nc1snbWF4J10sICdjdXJyZW50LW1pbic6IHNldHRpbmdzWydjdXJyZW50LW1pbiddID8gc2V0dGluZ3NbJ2N1cnJlbnQtbWluJ10gOiAnJywgJ2N1cnJlbnQtbWF4Jzogc2V0dGluZ3NbJ2N1cnJlbnQtbWF4J10gPyBzZXR0aW5nc1snY3VycmVudC1tYXgnXSA6ICcnfSk7XHJcbiAgICB9IGVsc2UgaWYgKCdjdXJyZW50LW1pbicgaW4gc2V0dGluZ3MpIHtcclxuICAgICAgbW9kZWwgPSBuZXcgTW9kZWwoeydtaW4nOiBzZXR0aW5nc1snbWluJ10sIG1heDogc2V0dGluZ3NbJ21heCddLCAnY3VycmVudC1taW4nOiBzZXR0aW5nc1snY3VycmVudC1taW4nXSA/IHNldHRpbmdzWydjdXJyZW50LW1pbiddIDogJycsICdjdXJyZW50LW1heCc6IHNldHRpbmdzWydtYXgnXX0pO1xyXG4gICAgfSBlbHNlIGlmICgnY3VycmVudC1tYXgnIGluIHNldHRpbmdzKSB7XHJcbiAgICAgIG1vZGVsID0gbmV3IE1vZGVsKHsnbWluJzogc2V0dGluZ3NbJ21pbiddLCBtYXg6IHNldHRpbmdzWydtYXgnXSwgJ2N1cnJlbnQtbWluJzogc2V0dGluZ3NbJ21pbiddLCAnY3VycmVudC1tYXgnOiBzZXR0aW5nc1snY3VycmVudC1tYXgnXSA/IHNldHRpbmdzWydjdXJyZW50LW1heCddIDogJyd9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1vZGVsID0gbmV3IE1vZGVsKHsnbWluJzogc2V0dGluZ3NbJ21pbiddLCBtYXg6IHNldHRpbmdzWydtYXgnXSwgJ2N1cnJlbnQtbWluJzogc2V0dGluZ3NbJ21pbiddLCAnY3VycmVudC1tYXgnOiBzZXR0aW5nc1snbWF4J119KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHZpZXc6IFZpZXcgPSBuZXcgVmlldyh0aGF0LCBzZXR0aW5ncyk7XHJcbiAgICBcclxuICAgIGxldCBmYWNhZGU6IEZhY2FkZSA9IG5ldyBGYWNhZGUobW9kZWwpXHJcbiAgICBcclxuICAgIGxldCBwcmVzZW50ZXI6IFByZXNlbnRlciA9IG5ldyBQcmVzZW50ZXIodmlldywgZmFjYWRlKTtcclxuXHJcbiAgICBwcmVzZW50ZXIuc3RhcnRWaWV3TW9uaXRvcmluZygpO1xyXG4gICAgdmlldy5kaXNwbGF5RWxlbWVudHMoKTtcclxuICAgIHZpZXcuYmluZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB2aWV3LmJpbmRFdmVudEhhbmRlbHNNb3ZlbWVudCgpO1xyXG4gIH07XHJcbn0pKGpRdWVyeSk7Il0sInNvdXJjZVJvb3QiOiIifQ==