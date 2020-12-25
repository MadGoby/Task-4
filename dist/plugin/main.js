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
              view.sliderMovement.sideMenuInputsValuesValidationChecker('min', view.minInput.value, positions['positions'], positions['minimum']);
            }

            ;

            if (prop === 'getMaxPositionsAmount') {
              var _positions = facade.getPositionsAmount();

              view.sliderMovement.sideMenuInputsValuesValidationChecker('max', view.maxInput.value, _positions['positions'], _positions['minimum']);
            }

            ;

            if (prop === 'getPossibleRange') {
              var possibleRange = facade.getPossibleRange();
              view.inputsPossibleRange(possibleRange, view.minInput, view.maxInput);
            }

            ;

            if (prop === 'startHandelsPosition') {
              var startPositions = facade.startHandelsPosition();
              view.sliderMovement.startHandlersPositions(startPositions);
              view.refreshCurrentValues(startPositions);
            }

            if (prop === 'getStepPositionsAmount') {
              var stepAmount = facade.getPositionsAmount();
              view.sliderMovement.stepAmount = stepAmount['positions'];
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
        this.currentHandelsPositions['min'] = {
          'min': '0',
          'sliderWidth': "".concat(this.sliderRange.offsetWidth - this.min.offsetWidth)
        };
        this.min.style.left = '0px';
        this.interval.style.left = 0 + this.min.offsetWidth / 2 + 'px';
      } else {
        if (this.handelsToggle.checked === true || this.handelsToggle === true) {
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
      if (target === 'min' && this.handelsToggle.checked) {
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

    _defineProperty(this, "dataRequestStatus", {
      "getMaxData": false,
      "getMinPositionsAmount": false,
      "getMaxPositionsAmount": false,
      "getPossibleRange": false,
      "getStepPositionsAmount": false
    });

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

    if (this.settings['side-menu'] === true) {
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
        if (this.settings['side-menu'] === true) {
          this.handelLabelToggle.checked = true;
        }

        ;
      }

      ;

      if (this.settings['side-menu'] === true) {
        this.dataRequestStatus["getPossibleRange"] = true;

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

        if (this.settings['side-menu'] === true) {
          this.handelToggle.checked = true;
          this.maxInput.style.opacity = '1';
        }

        ;
      }

      ;

      if (this.settings['vertical'] === true) {
        if (this.settings['side-menu'] === true) {
          this.planeToggle.checked = true;
          this.sliderMovement.changePlane(this.planeToggle, this.sliderContainer, this.minValue, this.maxValue);
        } else {
          this.sliderMovement.changePlane(true, this.sliderContainer, this.minValue, this.maxValue);
        }

        ;
      }

      ;

      if (this.settings.step === true && this.settings['side-menu'] === true) {
        this.maxInput.setAttribute('step', this.settings.step + "");
        this.minInput.setAttribute('step', this.settings.step + "");
      }

      ;

      if (this.settings.step === true) {
        this.dataRequestStatus["getStepPositionsAmount"] = true;
      }

      this.dataRequestStatus["startHandelsPosition"] = true;
    }
  }, {
    key: "bindEventListeners",
    value: function bindEventListeners() {
      var that = this;

      if (this.settings['side-menu'] === true) {
        this.handelLabelToggle.addEventListener('change', this.makeBindLabelToggle(that));
      }

      ;

      if (this.settings['side-menu'] === true) {
        this.handelToggle.addEventListener('change', this.makeBindHandelToggle(that));
      }

      ;

      if (this.settings['side-menu'] === true) {
        this.planeToggle.addEventListener('change', this.makeBindForPlaneToggle(that));
      }

      ;
      this.minValue.addEventListener('click', this.makeBindForSelectionMinValue(that));
      this.maxValue.addEventListener('click', this.makeBindForSelectionMaxValue(that));

      if (this.settings['side-menu'] === true) {
        this.minInput.addEventListener('change', this.makeBindForMinInput(that));
      }

      ;

      if (this.settings['side-menu'] === true) {
        this.maxInput.addEventListener('change', this.makeBindForMaxInput(that));
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
      var sett = this.settings['range'];

      function refreshCurrentValuesMultiCheck(settings) {
        return 'min' in newData && 'max' in newData && settings === true;
      }

      if (refreshCurrentValuesMultiCheck(sett)) {
        if (this.settings['side-menu'] === true && this.handelToggle.checked === true) {
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

        if (this.settings['side-menu'] === true) {
          this.sideMenu.querySelector('#minSliderValue').textContent = newData.min;
          ;
          this.sideMenu.querySelector('.customSliderMinInput').value = newData.min;
        }

        ;
      } else {
        this.maxLabel.textContent = newData.max;

        if (this.settings['side-menu'] === true) {
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
    value: function callHandelLabelToggleChanger() {
      new _components_handels_labels_ts__WEBPACK_IMPORTED_MODULE_5__["HandelsLabels"]().displayController(this.handelLabelToggle, this.minLabel, this.maxLabel);

      if (this.handelLabelToggle.checked === true) {
        new _components_handels_labels_ts__WEBPACK_IMPORTED_MODULE_5__["HandelsLabels"]().centeringRelativeToHandles(this.minHandel.offsetWidth, this.maxHandel.offsetWidth, this.minLabel.offsetWidth, this.maxLabel.offsetWidth, this.minLabel, this.maxLabel);
      }

      ;
    }
  }, {
    key: "callMaxHandelToggleChanger",
    value: function callMaxHandelToggleChanger() {
      if (this.handelToggle.checked === false) {
        this.sliderMovement.currentHandelsPositions['max'] = {
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
      new _components_handels_ts__WEBPACK_IMPORTED_MODULE_1__["Handels"]().displayController(this.handelToggle, this.maxHandel);

      if (this.handelToggle.checked === true) {
        this.dataRequestStatus["getMaxData"] = true;
        this.maxInput.removeAttribute('readonly');
        this.interval.style.display = 'block';
        this.interval.style.right = this.sliderRange.offsetWidth - (this.sliderRange.offsetWidth - this.minHandel.offsetWidth / 2) + 'px';

        if (this.sliderMovement.currentHandelsPositions.min['min'] >= this.sliderRange.offsetWidth - this.maxHandel.offsetWidth - this.minHandel.offsetWidth) {
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
  }, {
    key: "bindForMin",
    value: function bindForMin() {
      var that = this;

      that.minHandel.onmousedown = function (event) {
        that.sliderMovement.minHandelListener(event);
      };
    }
  }, {
    key: "bindForMax",
    value: function bindForMax() {
      var that = this;

      that.maxHandel.onmousedown = function (event) {
        that.sliderMovement.maxHandelListener(event);
      };
    }
  }, {
    key: "makeBindLabelToggle",
    value: function makeBindLabelToggle(that) {
      return function () {
        that.callHandelLabelToggleChanger;
      };
    }
  }, {
    key: "makeBindHandelToggle",
    value: function makeBindHandelToggle(that) {
      return function () {
        that.callMaxHandelToggleChanger();
      };
    }
  }, {
    key: "makeBindForPlaneToggle",
    value: function makeBindForPlaneToggle(that) {
      return function () {
        that.sliderMovement.changePlane(that.planeToggle, that.sliderContainer, that.minValue, that.maxValue);
      };
    }
  }, {
    key: "makeBindForSelectionMinValue",
    value: function makeBindForSelectionMinValue(that) {
      return function () {
        that.sliderMovement.selectionOfPreparedValue('min');
      };
    }
  }, {
    key: "makeBindForSelectionMaxValue",
    value: function makeBindForSelectionMaxValue(that) {
      return function () {
        that.sliderMovement.selectionOfPreparedValue('max');
      };
    }
  }, {
    key: "makeBindForMinInput",
    value: function makeBindForMinInput(that) {
      return function () {
        that.dataRequestStatus["getMinPositionsAmount"] = true;
      };
    }
  }, {
    key: "makeBindForMaxInput",
    value: function makeBindForMaxInput(that) {
      return function () {
        that.dataRequestStatus["getMaxPositionsAmount"] = true;
      };
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
    presenter.startViewMonitoring();
    view.displayElements();
    view.bindEventListeners();
    view.bindEventHandelsMovement();
  };
})(jQuery);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwvTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwvZmFjYWRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRlci9wcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL2hhbmRlbHMtbGFiZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9oYW5kZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9zZWxlY3RlZC1yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NvbXBvbmVudHMvc2lkZS1tZW51LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9zbGlkZXItbW92ZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL3NsaWRlci1yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NvbXBvbmVudHMvdmFsdWVSYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L3ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pxdWVyeS51aS5jdXN0b21TbGlkZXIudHMiXSwibmFtZXMiOlsiTW9kZWwiLCJzZXR0aW5ncyIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJtaW4iLCJtYXgiLCJGYWNhZGUiLCJtb2RlbCIsImdldEN1cnJlbnREYXRhIiwicHJvcCIsIk1hdGgiLCJyb3VuZCIsIlByZXNlbnRlciIsInZpZXciLCJmYWNhZGUiLCJ2aWV3TGluayIsImZhY2FkZUxpbmsiLCJtb25pdG9yc0N1cnJlbnRIYW5kZWxzUG9zaXRpb25zIiwibW9uaXRvcnNWaWV3UmVxdWVzdHMiLCJzbGlkZXJNb3ZlbWVudCIsImN1cnJlbnRIYW5kZWxzUG9zaXRpb25zIiwiUHJveHkiLCJzZXQiLCJ0YXJnZXQiLCJ2YWwiLCJtb2RlbFJlc3VsdCIsInJlZnJlc2hNb2RlbERhdGEiLCJyZWZyZXNoQ3VycmVudFZhbHVlcyIsImRhdGFSZXF1ZXN0U3RhdHVzIiwicmVzdWx0IiwiZ2V0TWF4RGF0YSIsInJlZnJlc2hNYXhTaWRlTWVudURhdGEiLCJwb3NpdGlvbnMiLCJnZXRQb3NpdGlvbnNBbW91bnQiLCJzaWRlTWVudUlucHV0c1ZhbHVlc1ZhbGlkYXRpb25DaGVja2VyIiwibWluSW5wdXQiLCJ2YWx1ZSIsIm1heElucHV0IiwicG9zc2libGVSYW5nZSIsImdldFBvc3NpYmxlUmFuZ2UiLCJpbnB1dHNQb3NzaWJsZVJhbmdlIiwic3RhcnRQb3NpdGlvbnMiLCJzdGFydEhhbmRlbHNQb3NpdGlvbiIsInN0YXJ0SGFuZGxlcnNQb3NpdGlvbnMiLCJzdGVwQW1vdW50IiwiSGFuZGVsc0xhYmVscyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIm1pbkxhYmVsIiwibWF4TGFiZWwiLCJ0b2dnbGUiLCJjaGVja2VkIiwic3R5bGUiLCJkaXNwbGF5IiwibWluSGFuZGVsV2lkdGgiLCJtYXhIYW5kZWxXaWR0aCIsIm1pbkxhYmVsV2lkdGgiLCJtYXhMYWJlbFdpZHRoIiwibGVmdCIsIkhhbmRlbHMiLCJtaW5IYW5kZWwiLCJtYXhIYW5kZWwiLCJTZWxlY3RlZFJhbmdlIiwiaW50ZXJ2YWwiLCJTaWRlTWVudSIsInNsaWRlclZhbHVlUCIsImlubmVyVGV4dCIsIm1pblNsaWRlclZhbHVlT3V0cHV0IiwiaWQiLCJtYXhTbGlkZXJWYWx1ZU91dHB1dCIsInNsaWRlclRvZ2dsZVAiLCJzbGlkZXJUb2dnbGVMYWJlbCIsIm1heFNsaWRlckhhbmRlbFRvZ2dsZSIsInNldEF0dHJpYnV0ZSIsImN1c3RvbVNsaWRlckJvcmRlciIsImN1c3RvbVNsaWRlcklucHV0cyIsImN1c3RvbVNsaWRlcklucHV0c1AiLCJjdXN0b21TbGlkZXJJbnB1dHNNaW5MYWJlbCIsImN1c3RvbVNsaWRlcklucHV0c01heExhYmVsIiwiY3VzdG9tU2xpZGVySW5wdXRzTWluIiwiY3VzdG9tU2xpZGVySW5wdXRzTWF4IiwidG9nZ2xlRm9yVmFsdWVzQ29udGFpbmVyIiwidG9nZ2xlRm9yVmFsdWVzUCIsInRvZ2dsZUZvclZhbHVlc0xhYmVsIiwidG9nZ2xlRm9yVmFsdWVzSW5wdXQiLCJ0b2dnbGVGb3JWYWx1ZXNTcGFuIiwidG9nZ2xlRm9yUGxhbmVDb250YWluZXIiLCJ0b2dnbGVGb3JQbGFuZVAiLCJ0b2dnbGVGb3JQbGFuZUxhYmVsIiwidG9nZ2xlRm9yUGxhbmVJbnB1dCIsInRvZ2dsZUZvclBsYW5lU3BhbiIsIm1haW5TbGlkZXJDb250YWluZXIiLCJhcHBlbmQiLCJjdXN0b21TbGlkZXJNZW51Q29udGFpbmVyIiwiaGFuZGVsVG9nZ2xlIiwiaGFuZGVsTGFiZWxUb2dnbGUiLCJwbGFuZVRvZ2dsZSIsIm1lbnUiLCJTbGlkZXJNb3ZlbWVudCIsImhhbmRlbHMiLCJzbGlkZXJSYW5nZSIsImhhbmRlbHNUb2dnbGUiLCJzdGVwIiwicG9zaXRpb25WYWx1ZXMiLCJvZmZzZXRXaWR0aCIsInJpZ2h0IiwiZXZlbnQiLCJ0ZXN0IiwidGhhdCIsInNoaWZ0IiwiZG91YmxlSGFuZGVscyIsInZlcnRpY2FsIiwiY2xpZW50WSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImNsaWVudFgiLCJhZGRFdmVudExpc3RlbmVyIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJ1bmRlZmluZWQiLCJuZXdMZWZ0IiwicmlnaHRFZGdlIiwicmVuZXdhbE9mUG9zaXRpb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYm9keSIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJoZWlnaHQiLCJ0cmFuc2Zvcm0iLCJyZW1vdmUiLCJtaW5pbXVtIiwiU2xpZGVyUmFuZ2UiLCJlbGVtIiwicmFuZ2UiLCJWYWx1ZVJhbmdlIiwidmFsdWVzIiwiVmlldyIsImdldEVsZW1lbnRzIiwic2lkZU1lbnVFbGVtZW50cyIsInNpZGVNZW51Iiwic2lkZU1lbnVDb250YWluZXIiLCJjb250YWluZXIiLCJzbGlkZXJDb250YWluZXIiLCJvZmZzZXRIZWlnaHQiLCJxdWVyeVNlbGVjdG9yIiwib3BhY2l0eSIsImNoYW5nZVBsYW5lIiwibWFrZUJpbmRMYWJlbFRvZ2dsZSIsIm1ha2VCaW5kSGFuZGVsVG9nZ2xlIiwibWFrZUJpbmRGb3JQbGFuZVRvZ2dsZSIsIm1ha2VCaW5kRm9yU2VsZWN0aW9uTWluVmFsdWUiLCJtYWtlQmluZEZvclNlbGVjdGlvbk1heFZhbHVlIiwibWFrZUJpbmRGb3JNaW5JbnB1dCIsIm1ha2VCaW5kRm9yTWF4SW5wdXQiLCJiaW5kRm9yTWluIiwiYmluZEZvck1heCIsIm5ld0RhdGEiLCJzZXR0IiwicmVmcmVzaEN1cnJlbnRWYWx1ZXNNdWx0aUNoZWNrIiwidGV4dENvbnRlbnQiLCJjZW50ZXJpbmdSZWxhdGl2ZVRvSGFuZGxlcyIsImRpc3BsYXlDb250cm9sbGVyIiwicmVtb3ZlQXR0cmlidXRlIiwib25tb3VzZWRvd24iLCJtaW5IYW5kZWxMaXN0ZW5lciIsIm1heEhhbmRlbExpc3RlbmVyIiwiY2FsbEhhbmRlbExhYmVsVG9nZ2xlQ2hhbmdlciIsImNhbGxNYXhIYW5kZWxUb2dnbGVDaGFuZ2VyIiwic2VsZWN0aW9uT2ZQcmVwYXJlZFZhbHVlIiwiJCIsImZuIiwidGVzdFNsaWRlciIsIm9wdGlvbnMiLCJleHRlbmQiLCJwcmVzZW50ZXIiLCJzdGFydFZpZXdNb25pdG9yaW5nIiwiZGlzcGxheUVsZW1lbnRzIiwiYmluZEV2ZW50TGlzdGVuZXJzIiwiYmluZEV2ZW50SGFuZGVsc01vdmVtZW50IiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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LENBQUNxSyxlQUFMO0FBQ0FySyxRQUFJLENBQUNzSyxrQkFBTDtBQUNBdEssUUFBSSxDQUFDdUssd0JBQUw7QUFFRCxHQXJDRDtBQXNDRCxDQXZDRCxFQXVDR0MsTUF2Q0gsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanF1ZXJ5LnVpLmN1c3RvbVNsaWRlci50c1wiKTtcbiIsImltcG9ydCB7IElEYXRhIH0gZnJvbSAnLi9kYXRhSW50ZXJmYWNlLnRzJztcclxuXHJcbmludGVyZmFjZSBTZXR0aW5ncyB7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW9kZWwge1xyXG5cclxuICBkYXRhOiBJRGF0YTtcclxuICBcclxuICBjb25zdHJ1Y3Rvciggc2V0dGluZ3M6IFNldHRpbmdzICkgeyBcclxuICAgIHRoaXMuZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHNldHRpbmdzKTtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnREYXRhKCk6IG9iamVjdCB7XHJcbiAgICByZXR1cm4geydtaW5pbXVtJzogdGhpcy5kYXRhLm1pbiwgJ21pbic6IHRoaXMuZGF0YVsnY3VycmVudC1taW4nXSwgJ21heCc6IHRoaXMuZGF0YVsnY3VycmVudC1tYXgnXSwgJ3Bvc2l0aW9ucyc6IGAke3RoaXMuZGF0YS5tYXggLSB0aGlzLmRhdGEubWlufWB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi9tb2RlbC50cydcclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNhZGUge1xyXG4gIHByaXZhdGUgbW9kZWw7XHJcblxyXG4gIGNvbnN0cnVjdG9yIChtb2RlbCkge1xyXG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG4gIH07XHJcblxyXG4gIHN0YXJ0SGFuZGVsc1Bvc2l0aW9uKCk6b2JqZWN0IHtcclxuICAgIHJldHVybiB0aGlzLm1vZGVsLmdldEN1cnJlbnREYXRhKCk7XHJcbiAgfTtcclxuICBcclxuICByZWZyZXNoTW9kZWxEYXRhKGRhdGE6IG9iamVjdCwgcHJvcDogc3RyaW5nKTogb2JqZWN0IHtcclxuICAgIGlmIChwcm9wID09PSAnbWluJykge1xyXG4gICAgICB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWluJ10gPSBNYXRoLnJvdW5kKHRoaXMubW9kZWwuZGF0YVsnbWluJ10gKyAoZGF0YVsnbWluJ10gLyAoK2RhdGFbJ3NsaWRlcldpZHRoJ10gLyAodGhpcy5tb2RlbC5kYXRhWydtYXgnXSAtIHRoaXMubW9kZWwuZGF0YVsnbWluJ10pKSkpO1xyXG4gICAgICByZXR1cm4geyAnbWluJzogdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1pbiddIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1tYXgnXSA9IE1hdGgucm91bmQodGhpcy5tb2RlbC5kYXRhWydtaW4nXSArIChkYXRhWydtYXgnXSAvICgrZGF0YVsnc2xpZGVyV2lkdGgnXSAvICh0aGlzLm1vZGVsLmRhdGFbJ21heCddIC0gdGhpcy5tb2RlbC5kYXRhWydtaW4nXSkpKSk7XHJcbiAgICAgIHJldHVybiB7ICdtYXgnOiB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWF4J10gfVxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBnZXRNb2RlbERhdGEoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7ICdtaW4nOiB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWluJ10sICdtYXgnOiB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWF4J119XHJcbiAgfTtcclxuXHJcbiAgZ2V0TWF4RGF0YSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZGF0YVsnbWF4J11cclxuICB9O1xyXG5cclxuICBnZXRQb3NzaWJsZVJhbmdlKCk6IG9iamVjdCB7XHJcbiAgICByZXR1cm4geydtYXgnOnRoaXMubW9kZWwuZGF0YS5tYXgsICdtaW4nOiB0aGlzLm1vZGVsLmRhdGEubWlufTtcclxuICB9O1xyXG5cclxuICBnZXRQb3NpdGlvbnNBbW91bnQoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7J3Bvc2l0aW9ucyc6IHRoaXMubW9kZWwuZGF0YS5tYXggLSB0aGlzLm1vZGVsLmRhdGEubWluLCAnbWluaW11bSc6IHRoaXMubW9kZWwuZGF0YS5taW59O1xyXG4gIH1cclxufTsiLCJleHBvcnQgY2xhc3MgUHJlc2VudGVyIHtcclxuXHJcbiAgcHJpdmF0ZSB2aWV3TGluaztcclxuICBwcml2YXRlIGZhY2FkZUxpbms7XHJcblxyXG4gIGNvbnN0cnVjdG9yICh2aWV3LCBmYWNhZGUpIHtcclxuICAgIHRoaXMudmlld0xpbmsgPSB2aWV3O1xyXG4gICAgdGhpcy5mYWNhZGVMaW5rID0gZmFjYWRlO1xyXG4gIH07XHJcblxyXG4gIHN0YXJ0Vmlld01vbml0b3JpbmcoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vbml0b3JzQ3VycmVudEhhbmRlbHNQb3NpdGlvbnMoKTtcclxuICAgIHRoaXMubW9uaXRvcnNWaWV3UmVxdWVzdHMoKTtcclxuICB9O1xyXG5cclxuICBtb25pdG9yc0N1cnJlbnRIYW5kZWxzUG9zaXRpb25zKCk6IHZvaWQge1xyXG4gICAgbGV0IHZpZXcgPSB0aGlzLnZpZXdMaW5rO1xyXG4gICAgbGV0IGZhY2FkZSA9IHRoaXMuZmFjYWRlTGluaztcclxuXHJcbiAgICB2aWV3LnNsaWRlck1vdmVtZW50LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zID0gbmV3IFByb3h5KHZpZXcuc2xpZGVyTW92ZW1lbnQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMsIHtcclxuICAgICAgc2V0KHRhcmdldCwgcHJvcCwgdmFsKSB7XHJcbiAgICAgICAgaWYodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgICAgICAgIGxldCBtb2RlbFJlc3VsdCA9IGZhY2FkZS5yZWZyZXNoTW9kZWxEYXRhKHZhbCwgcHJvcCk7XHJcbiAgICAgICAgICB2aWV3LnJlZnJlc2hDdXJyZW50VmFsdWVzKG1vZGVsUmVzdWx0KTtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH07XHJcblxyXG4gIG1vbml0b3JzVmlld1JlcXVlc3RzKCk6IHZvaWQge1xyXG4gICAgbGV0IHZpZXcgPSB0aGlzLnZpZXdMaW5rO1xyXG4gICAgbGV0IGZhY2FkZSA9IHRoaXMuZmFjYWRlTGluaztcclxuXHJcbiAgICB2aWV3LmRhdGFSZXF1ZXN0U3RhdHVzID0gbmV3IFByb3h5KHZpZXcuZGF0YVJlcXVlc3RTdGF0dXMsIHtcclxuICAgICAgc2V0KHRhcmdldCwgcHJvcCwgdmFsKSB7XHJcbiAgICAgICAgaWYodHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nICYmIHZhbCA9PT0gdHJ1ZSkge1xyXG5cclxuICAgICAgICAgIGlmKHByb3AgPT09ICdnZXRNYXhEYXRhJykge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBudW1iZXIgPSBmYWNhZGUuZ2V0TWF4RGF0YSgpO1xyXG4gICAgICAgICAgICB2aWV3LnJlZnJlc2hNYXhTaWRlTWVudURhdGEocmVzdWx0KTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgaWYocHJvcCA9PT0gJ2dldE1pblBvc2l0aW9uc0Ftb3VudCcpIHtcclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uczogb2JqZWN0ID0gZmFjYWRlLmdldFBvc2l0aW9uc0Ftb3VudCgpO1xyXG4gICAgICAgICAgICB2aWV3LnNsaWRlck1vdmVtZW50LnNpZGVNZW51SW5wdXRzVmFsdWVzVmFsaWRhdGlvbkNoZWNrZXIoJ21pbicsIHZpZXcubWluSW5wdXQudmFsdWUsIHBvc2l0aW9uc1sncG9zaXRpb25zJ10sIHBvc2l0aW9uc1snbWluaW11bSddKTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgaWYocHJvcCA9PT0gJ2dldE1heFBvc2l0aW9uc0Ftb3VudCcpIHtcclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uczogb2JqZWN0ID0gZmFjYWRlLmdldFBvc2l0aW9uc0Ftb3VudCgpO1xyXG4gICAgICAgICAgICB2aWV3LnNsaWRlck1vdmVtZW50LnNpZGVNZW51SW5wdXRzVmFsdWVzVmFsaWRhdGlvbkNoZWNrZXIoJ21heCcsIHZpZXcubWF4SW5wdXQudmFsdWUsIHBvc2l0aW9uc1sncG9zaXRpb25zJ10sIHBvc2l0aW9uc1snbWluaW11bSddKTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgaWYocHJvcCA9PT0gJ2dldFBvc3NpYmxlUmFuZ2UnKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3NzaWJsZVJhbmdlOiBvYmplY3QgPSBmYWNhZGUuZ2V0UG9zc2libGVSYW5nZSgpO1xyXG4gICAgICAgICAgICB2aWV3LmlucHV0c1Bvc3NpYmxlUmFuZ2UocG9zc2libGVSYW5nZSwgdmlldy5taW5JbnB1dCwgdmlldy5tYXhJbnB1dCk7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGlmKHByb3AgPT09ICdzdGFydEhhbmRlbHNQb3NpdGlvbicpIHtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0UG9zaXRpb25zOiBvYmplY3QgPSBmYWNhZGUuc3RhcnRIYW5kZWxzUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgdmlldy5zbGlkZXJNb3ZlbWVudC5zdGFydEhhbmRsZXJzUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zKTtcclxuICAgICAgICAgICAgdmlldy5yZWZyZXNoQ3VycmVudFZhbHVlcyhzdGFydFBvc2l0aW9ucyk7XHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgaWYocHJvcCA9PT0gJ2dldFN0ZXBQb3NpdGlvbnNBbW91bnQnKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGVwQW1vdW50OiBvYmplY3QgPSBmYWNhZGUuZ2V0UG9zaXRpb25zQW1vdW50KCk7XHJcbiAgICAgICAgICAgIHZpZXcuc2xpZGVyTW92ZW1lbnQuc3RlcEFtb3VudCA9IHN0ZXBBbW91bnRbJ3Bvc2l0aW9ucyddO1xyXG4gICAgICAgICAgfVxyXG5cclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxufTsiLCJleHBvcnQgY2xhc3MgSGFuZGVsc0xhYmVscyB7XHJcbiAgbWluTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgbWF4TGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgbGFiZWxJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsZXQgbWluOkhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGV0IG1heDpIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIG1pbi5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJIYW5kZWxMYWJlbCcpO1xyXG4gICAgbWF4LmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlckhhbmRlbExhYmVsJyk7XHJcbiAgICB0aGlzLm1pbkxhYmVsID0gbWluO1xyXG4gICAgdGhpcy5tYXhMYWJlbCA9IG1heDtcclxuICB9O1xyXG4gIFxyXG4gIGdldEVsZW1lbnRzKCk6IG9iamVjdCB7XHJcbiAgICByZXR1cm4geydtaW4nOiB0aGlzLm1pbkxhYmVsLCAnbWF4JzogdGhpcy5tYXhMYWJlbH07XHJcbiAgfTtcclxuXHJcbiAgZGlzcGxheUNvbnRyb2xsZXIodG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50LCBtaW46IEhUTUxMYWJlbEVsZW1lbnQsIG1heDogSFRNTExhYmVsRWxlbWVudCkge1xyXG4gICAgaWYgKHRvZ2dsZS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgIG1pbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICAgIG1heC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtaW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgbWF4LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjZW50ZXJpbmdSZWxhdGl2ZVRvSGFuZGxlcyhtaW5IYW5kZWxXaWR0aDogbnVtYmVyLCBtYXhIYW5kZWxXaWR0aDogbnVtYmVyLCBtaW5MYWJlbFdpZHRoOiBudW1iZXIsIG1heExhYmVsV2lkdGg6IG51bWJlciwgbWluTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQsIG1heExhYmVsOiBIVE1MTGFiZWxFbGVtZW50KTogdm9pZCB7XHJcbiAgICBtaW5MYWJlbC5zdHlsZS5sZWZ0ID0gKG1pbkhhbmRlbFdpZHRoIC0gbWluTGFiZWxXaWR0aCkgLyAyICsgJ3B4JztcclxuICAgIG1heExhYmVsLnN0eWxlLmxlZnQgPSAobWF4SGFuZGVsV2lkdGggLSBtYXhMYWJlbFdpZHRoKSAvIDIgKyAncHgnO1xyXG4gIH1cclxufSIsImV4cG9ydCBjbGFzcyBIYW5kZWxzIHtcclxuXHJcbiAgcHJpdmF0ZSBtaW5IYW5kZWw6IEhUTUxTcGFuRWxlbWVudDtcclxuICBwcml2YXRlIG1heEhhbmRlbDogSFRNTFNwYW5FbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGxldCBtaW46IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGxldCBtYXg6IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIG1pbi5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJIYW5kZWwnKTtcclxuICAgIG1heC5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJIYW5kZWwnKTtcclxuICAgIHRoaXMubWluSGFuZGVsID0gbWluO1xyXG4gICAgdGhpcy5tYXhIYW5kZWwgPSBtYXg7XHJcbiAgfTtcclxuXHJcbiAgZ2V0RWxlbWVudHMoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7bWluOiB0aGlzLm1pbkhhbmRlbCwgbWF4OiB0aGlzLm1heEhhbmRlbH07XHJcbiAgfTtcclxuXHJcbiAgZGlzcGxheUNvbnRyb2xsZXIodG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50LCBtYXg6IEhUTUxTcGFuRWxlbWVudCkge1xyXG4gICAgaWYgKHRvZ2dsZS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgIG1heC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1heC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxufTsiLCJleHBvcnQgY2xhc3MgU2VsZWN0ZWRSYW5nZSB7XHJcblxyXG4gIHByaXZhdGUgaW50ZXJ2YWw6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGxldCBpbnRlcnZhbDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGludGVydmFsLmNsYXNzTGlzdC5hZGQoJ21haW5JbnRlcnZhbCcpO1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IGludGVydmFsO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudHMoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJ2YWw7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNpZGVNZW51IHtcclxuXHJcbiAgY3VzdG9tU2xpZGVyTWVudUNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgaGFuZGVsVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIGhhbmRlbExhYmVsVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHBsYW5lVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIG1pbklucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIG1heElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGxldCBzbGlkZXJWYWx1ZVA6SFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBzbGlkZXJWYWx1ZVAuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyUGFyYWdWYWwnKTtcclxuICAgIHNsaWRlclZhbHVlUC5pbm5lclRleHQgPSAn0KLQtdC60YPRidC10LUg0LfQsNC90YfQtdC90LjQtTogJztcclxuICAgIFxyXG4gICAgbGV0IG1pblNsaWRlclZhbHVlT3V0cHV0OkhUTUxPdXRwdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3V0cHV0Jyk7XHJcbiAgICBtaW5TbGlkZXJWYWx1ZU91dHB1dC5jbGFzc0xpc3QuYWRkKCdzbGlkZXJWYWx1ZScpO1xyXG4gICAgbWluU2xpZGVyVmFsdWVPdXRwdXQuaWQgPSAnbWluU2xpZGVyVmFsdWUnO1xyXG4gICAgbGV0IG1heFNsaWRlclZhbHVlT3V0cHV0OkhUTUxPdXRwdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3V0cHV0Jyk7XHJcbiAgICBtYXhTbGlkZXJWYWx1ZU91dHB1dC5jbGFzc0xpc3QuYWRkKCdzbGlkZXJWYWx1ZScpO1xyXG4gICAgbWF4U2xpZGVyVmFsdWVPdXRwdXQuaWQgPSAnbWF4U2xpZGVyVmFsdWUnO1xyXG4gICAgXHJcbiAgICBsZXQgc2xpZGVyVG9nZ2xlUDpIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHNsaWRlclRvZ2dsZVAuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyUGFyYWcnKTtcclxuICAgIHNsaWRlclRvZ2dsZVAuaW5uZXJUZXh0ID0gJ9CS0LrQu9GO0YfQuNGC0Ywg0LLRgtC+0YDQvtC5INC/0L7Qu9C30YPQvdC+0Lo6ICc7XHJcbiAgICBcclxuICAgIGxldCBzbGlkZXJUb2dnbGVMYWJlbDpIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHNsaWRlclRvZ2dsZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclRvZ2dsZScpO1xyXG5cclxuICAgIGxldCBtYXhTbGlkZXJIYW5kZWxUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbWF4U2xpZGVySGFuZGVsVG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlckhhbmRlbFRvZ2dsZScpO1xyXG4gICAgbWF4U2xpZGVySGFuZGVsVG9nZ2xlLmlkID0gJ21heFNsaWRlckhhbmRlbFRvZ2dsZSc7XHJcbiAgICBtYXhTbGlkZXJIYW5kZWxUb2dnbGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcclxuXHJcbiAgICBsZXQgY3VzdG9tU2xpZGVyQm9yZGVyOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjdXN0b21TbGlkZXJCb3JkZXIuY2xhc3NMaXN0LmFkZCgnY3VzdG9tVG9nZ2xlU2xpZGVyQm9yZGVyJyk7XHJcblxyXG4gICAgbGV0IGN1c3RvbVNsaWRlcklucHV0czogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0cy5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJJbnB1dHMnKTtcclxuICAgIFxyXG4gICAgbGV0IGN1c3RvbVNsaWRlcklucHV0c1A6IEhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzUC5pbm5lclRleHQgPSAn0JjQt9C80LXQvdC40YLRjCDQt9C90LDRh9C10L3QuNC1OiAnO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzUC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJQYXJhZycpO1xyXG5cclxuICAgIGxldCBjdXN0b21TbGlkZXJJbnB1dHNNaW5MYWJlbDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNaW5MYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJJbnB1dGxhYmVsJyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNaW5MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjdXN0b21TbGlkZXJNaW5JbnB1dCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWwuaW5uZXJUZXh0ID0gJ01pbjogJztcclxuICAgIFxyXG4gICAgbGV0IGN1c3RvbVNsaWRlcklucHV0c01heExhYmVsOiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01heExhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlcklucHV0bGFiZWwnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01heExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2N1c3RvbVNsaWRlck1heElucHV0Jyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbC5pbm5lclRleHQgPSAnTWF4OiAnO1xyXG5cclxuICAgIGxldCBjdXN0b21TbGlkZXJJbnB1dHNNaW46IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlck1pbklucHV0Jyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNaW4uaWQgPSAnY3VzdG9tU2xpZGVyTWluSW5wdXQnO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluLnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcclxuXHJcbiAgICBsZXQgY3VzdG9tU2xpZGVySW5wdXRzTWF4OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01heC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJNYXhJbnB1dCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWF4LmlkID0gJ2N1c3RvbVNsaWRlck1heElucHV0JztcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01heC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclZhbHVlc0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yVmFsdWVzUDogSFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNQLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclBhcmFnJyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNQLmlubmVyVGV4dCA9ICfQktC60LvRjtGH0LjRgtGMINC30L3QsNGH0LXQvdC40Y8g0L/QvtC0INC/0L7Qu9C30YPQvdC60LDQvNC4OiAnO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JWYWx1ZXNMYWJlbDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNMYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJUb2dnbGUnKTtcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yVmFsdWVzSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNJbnB1dC5jbGFzc0xpc3QuYWRkKCdzaG93VmFsdWVUb2dnbGUnKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc0lucHV0LmlkID0gJ3Nob3dWYWx1ZVRvZ2dsZSc7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclZhbHVlc1NwYW46IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc1NwYW4uY2xhc3NMaXN0LmFkZCgnY3VzdG9tVG9nZ2xlU2xpZGVyQm9yZGVyJyk7XHJcbiAgICBcclxuICAgIGxldCB0b2dnbGVGb3JQbGFuZUNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yUGxhbmVQOiBIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lUC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJQYXJhZycpO1xyXG4gICAgdG9nZ2xlRm9yUGxhbmVQLmlubmVyVGV4dCA9ICfQmNC30LzQtdC90LjRgtGMINC/0LvQvtGB0LrQvtGB0YLRjDogJztcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yUGxhbmVMYWJlbDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclRvZ2dsZScpO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JQbGFuZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3BsYW5lVG9nZ2xlJyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZUlucHV0LmlkID0gJ3BsYW5lVG9nZ2xlJztcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yUGxhbmVTcGFuOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZVNwYW4uY2xhc3NMaXN0LmFkZCgnY3VzdG9tVG9nZ2xlU2xpZGVyQm9yZGVyJyk7XHJcblxyXG5cclxuICAgIGxldCBtYWluU2xpZGVyQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2xpZGVyTWVudUNvbnRhaW5lcicpO1xyXG4gICAgbWFpblNsaWRlckNvbnRhaW5lci5hcHBlbmQoc2xpZGVyVmFsdWVQKTtcclxuICAgIHNsaWRlclZhbHVlUC5hcHBlbmQobWluU2xpZGVyVmFsdWVPdXRwdXQpO1xyXG4gICAgc2xpZGVyVmFsdWVQLmFwcGVuZChtYXhTbGlkZXJWYWx1ZU91dHB1dCk7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZChzbGlkZXJUb2dnbGVQKTtcclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuYXBwZW5kKHNsaWRlclRvZ2dsZUxhYmVsKTtcclxuICAgIHNsaWRlclRvZ2dsZUxhYmVsLmFwcGVuZChtYXhTbGlkZXJIYW5kZWxUb2dnbGUsIGN1c3RvbVNsaWRlckJvcmRlcik7XHJcblxyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzLmFwcGVuZChjdXN0b21TbGlkZXJJbnB1dHNQLCBjdXN0b21TbGlkZXJJbnB1dHNNaW5MYWJlbCwgY3VzdG9tU2xpZGVySW5wdXRzTWluLCBjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbCwgY3VzdG9tU2xpZGVySW5wdXRzTWF4KTtcclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuYXBwZW5kKGN1c3RvbVNsaWRlcklucHV0cyk7XHJcblxyXG4gICAgdG9nZ2xlRm9yVmFsdWVzQ29udGFpbmVyLmFwcGVuZCh0b2dnbGVGb3JWYWx1ZXNQLCB0b2dnbGVGb3JWYWx1ZXNMYWJlbCk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNMYWJlbC5hcHBlbmQodG9nZ2xlRm9yVmFsdWVzSW5wdXQsIHRvZ2dsZUZvclZhbHVlc1NwYW4pO1xyXG4gICAgbWFpblNsaWRlckNvbnRhaW5lci5hcHBlbmQodG9nZ2xlRm9yVmFsdWVzQ29udGFpbmVyKTtcclxuXHJcbiAgICB0b2dnbGVGb3JQbGFuZUNvbnRhaW5lci5hcHBlbmQodG9nZ2xlRm9yUGxhbmVQLCB0b2dnbGVGb3JQbGFuZUxhYmVsKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lTGFiZWwuYXBwZW5kKHRvZ2dsZUZvclBsYW5lSW5wdXQsIHRvZ2dsZUZvclBsYW5lU3Bhbik7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZCh0b2dnbGVGb3JQbGFuZUNvbnRhaW5lcik7XHJcblxyXG4gICAgdGhpcy5jdXN0b21TbGlkZXJNZW51Q29udGFpbmVyID0gbWFpblNsaWRlckNvbnRhaW5lcjtcclxuICAgIHRoaXMuaGFuZGVsVG9nZ2xlID0gbWF4U2xpZGVySGFuZGVsVG9nZ2xlO1xyXG4gICAgdGhpcy5oYW5kZWxMYWJlbFRvZ2dsZSA9IHRvZ2dsZUZvclZhbHVlc0lucHV0O1xyXG4gICAgdGhpcy5wbGFuZVRvZ2dsZSA9IHRvZ2dsZUZvclBsYW5lSW5wdXQ7XHJcbiAgICB0aGlzLm1pbklucHV0ID0gY3VzdG9tU2xpZGVySW5wdXRzTWluO1xyXG4gICAgdGhpcy5tYXhJbnB1dCA9IGN1c3RvbVNsaWRlcklucHV0c01heDtcclxuICB9O1xyXG5cclxuICBnZXRFbGVtZW50cygpOiBvYmplY3Qge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbWVudTogdGhpcy5jdXN0b21TbGlkZXJNZW51Q29udGFpbmVyLFxyXG4gICAgICBoYW5kZWxUb2dnbGU6IHRoaXMuaGFuZGVsVG9nZ2xlLFxyXG4gICAgICBoYW5kZWxMYWJlbFRvZ2dsZTogdGhpcy5oYW5kZWxMYWJlbFRvZ2dsZSxcclxuICAgICAgcGxhbmVUb2dnbGU6IHRoaXMucGxhbmVUb2dnbGUsXHJcbiAgICAgIG1pbklucHV0OiB0aGlzLm1pbklucHV0LFxyXG4gICAgICBtYXhJbnB1dDogdGhpcy5tYXhJbnB1dFxyXG4gICAgfTtcclxuICB9O1xyXG59OyIsImludGVyZmFjZSBIYW5kZWxzIHtcclxuICBba2V5OiBzdHJpbmddOiBIVE1MTGFiZWxFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudCB8IEhUTUxEaXZFbGVtZW50O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ3VycmVudEhhbmRlbHNQb3NpdGlvbnMge1xyXG4gIFtrZXk6IHN0cmluZ106IHtcclxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xyXG4gIH07XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgU3RhcnRIYW5kZWxzUG9zaXRpb25zRGF0YSB7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTbGlkZXJNb3ZlbWVudCB7XHJcbiAgcHJpdmF0ZSBtaW46IEhUTUxTcGFuRWxlbWVudDtcclxuICBwcml2YXRlIG1heDogSFRNTFNwYW5FbGVtZW50O1xyXG4gIHByaXZhdGUgbWluTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBtYXhMYWJlbDogSFRNTExhYmVsRWxlbWVudDtcclxuICBwcml2YXRlIHNsaWRlclJhbmdlOiBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIGhhbmRlbHNUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQgfCBib29sZWFuO1xyXG4gIHByaXZhdGUgcGxhbmVUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQgfCBib29sZWFuO1xyXG4gIHByaXZhdGUgaW50ZXJ2YWw6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHByaXZhdGUgc3RlcDogbnVtYmVyIHwgc3RyaW5nIHwgYm9vbGVhbjtcclxuICBwcml2YXRlIHN0ZXBBbW91bnQ6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoIGhhbmRlbHM6IEhhbmRlbHMpIHtcclxuICAgIHRoaXMubWluID0gaGFuZGVscy5taW47XHJcbiAgICB0aGlzLm1heCA9IGhhbmRlbHMubWF4O1xyXG4gICAgdGhpcy5taW5MYWJlbCA9IGhhbmRlbHMubWluTGFiZWw7XHJcbiAgICB0aGlzLm1heExhYmVsPSBoYW5kZWxzLm1heExhYmVsO1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZSA9IGhhbmRlbHMuc2xpZGVyUmFuZ2U7XHJcbiAgICB0aGlzLmhhbmRlbHNUb2dnbGUgPSBoYW5kZWxzLmhhbmRlbHNUb2dnbGU7XHJcbiAgICB0aGlzLnBsYW5lVG9nZ2xlID0gaGFuZGVscy5wbGFuZVRvZ2dsZTtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBoYW5kZWxzLmludGVydmFsO1xyXG4gICAgdGhpcy5zdGVwID0gaGFuZGVscy5zdGVwO1xyXG4gIH1cclxuXHJcbiAgY3VycmVudEhhbmRlbHNQb3NpdGlvbnM6IEN1cnJlbnRIYW5kZWxzUG9zaXRpb25zID0ge1xyXG4gICAgJ21pbic6IHt9LFxyXG4gICAgJ21heCc6IHt9XHJcbiAgfVxyXG5cclxuICBzdGFydEhhbmRsZXJzUG9zaXRpb25zKHBvc2l0aW9uVmFsdWVzOiBTdGFydEhhbmRlbHNQb3NpdGlvbnNEYXRhICkge1xyXG4gICAgbGV0IG1pbjogc3RyaW5nID0gKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpIC8gK3Bvc2l0aW9uVmFsdWVzLnBvc2l0aW9ucykgKiAoK3Bvc2l0aW9uVmFsdWVzWydtaW4nXSAtICtwb3NpdGlvblZhbHVlc1snbWluaW11bSddKSArICcnO1xyXG4gICAgbGV0IG1heDogc3RyaW5nID0gKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpIC8gK3Bvc2l0aW9uVmFsdWVzLnBvc2l0aW9ucykgKiAoK3Bvc2l0aW9uVmFsdWVzWydtYXgnXSAtICtwb3NpdGlvblZhbHVlc1snbWluaW11bSddKSArICcnO1xyXG4gICAgXHJcbiAgICB0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pbi5taW4gPSBtaW47XHJcbiAgICB0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1heC5tYXggPSBtYXg7XHJcbiAgICBcclxuICAgIHRoaXMubWluLnN0eWxlLmxlZnQgPSBtaW4gKyAncHgnO1xyXG4gICAgdGhpcy5tYXguc3R5bGUubGVmdCA9IG1heCArICdweCc7XHJcbiAgICBcclxuICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUubGVmdCA9ICttaW4gKyB0aGlzLm1pbi5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5yaWdodCA9ICh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gK21heCkgLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gIH1cclxuXHJcbiAgbWluSGFuZGVsTGlzdGVuZXIoIGV2ZW50LCB0ZXN0Om9iamVjdCApIHtcclxuICAgIGxldCBtaW4gPSB0aGlzLm1pbjtcclxuICAgIGxldCBtYXggPSB0aGlzLm1heDtcclxuICAgIGxldCBtaW5MYWJlbCA9IHRoaXMubWluTGFiZWw7XHJcbiAgICBsZXQgc2xpZGVyUmFuZ2UgPSB0aGlzLnNsaWRlclJhbmdlO1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgbGV0IHNoaWZ0OiBudW1iZXI7XHJcbiAgICBsZXQgZG91YmxlSGFuZGVsczogYm9vbGVhbjtcclxuICAgIGxldCB2ZXJ0aWNhbDogYm9vbGVhbjtcclxuICAgIGlmICh0eXBlb2YgdGhpcy5oYW5kZWxzVG9nZ2xlID09PSAnYm9vbGVhbicgJiYgdHlwZW9mIHRoaXMucGxhbmVUb2dnbGUgPT09ICdib29sZWFuJykge1xyXG4gICAgICBkb3VibGVIYW5kZWxzID0gdGhpcy5oYW5kZWxzVG9nZ2xlO1xyXG4gICAgICB2ZXJ0aWNhbCA9IHRoaXMucGxhbmVUb2dnbGU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBkb3VibGVIYW5kZWxzID0gdGhpcy5oYW5kZWxzVG9nZ2xlLmNoZWNrZWQ7XHJcbiAgICAgIHZlcnRpY2FsID0gdGhpcy5wbGFuZVRvZ2dsZS5jaGVja2VkO1xyXG4gICAgfTtcclxuICAgIGxldCBpbnRlcnZhbCA9IHRoaXMuaW50ZXJ2YWw7XHJcbiAgICBsZXQgc3RlcDogbnVtYmVyO1xyXG4gICAgaWYgKHRoaXMuc3RlcCAhPT0gZmFsc2UpIHtcclxuICAgICAgc3RlcCA9IChzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG1pbi5vZmZzZXRXaWR0aCkgLyB0aGlzLnN0ZXBBbW91bnQgKiArdGhpcy5zdGVwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICBzaGlmdCA9IGV2ZW50LmNsaWVudFkgLSBtaW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gbWluLm9mZnNldFdpZHRoO1xyXG4gICAgfSBlbHNlIHsgIFxyXG4gICAgICBzaGlmdCA9IGV2ZW50LmNsaWVudFggLSBtaW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcbiAgICBcclxuICAgIGlmKCB0ZXN0ICE9PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgIG9uTW91c2VNb3ZlKCB0ZXN0IClcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50ICkge1xyXG4gICAgICBsZXQgbmV3TGVmdDogbnVtYmVyO1xyXG5cclxuICAgICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgICAgbmV3TGVmdCA9IHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gKGV2ZW50LmNsaWVudFkgLSBzaGlmdCAtIHNsaWRlclJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3TGVmdCA9IGV2ZW50LmNsaWVudFggLSBzaGlmdCAtIHNsaWRlclJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBsZXQgcmlnaHRFZGdlID0gc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSBtaW4ub2Zmc2V0V2lkdGg7XHJcbiAgICAgIFxyXG4gICAgICBpZiAodGhhdC5zdGVwICE9PSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChuZXdMZWZ0ID49ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pbi5taW4gKyBzdGVwIHx8IG5ld0xlZnQgPD0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWluLm1pbiAtIHN0ZXApIHtcclxuICAgICAgICAgIG5ld0xlZnQgPj0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWluLm1pbiArIHN0ZXAgPyBuZXdMZWZ0ID0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWluLm1pbiArIHN0ZXAgOiBmYWxzZTtcclxuICAgICAgICAgIG5ld0xlZnQgPD0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWluLm1pbiAtIHN0ZXAgPyBuZXdMZWZ0ID0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWluLm1pbiAtIHN0ZXAgOiBmYWxzZTtcclxuICAgICAgICAgIHJlbmV3YWxPZlBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlbmV3YWxPZlBvc2l0aW9uKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBmdW5jdGlvbiByZW5ld2FsT2ZQb3NpdGlvbigpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKG5ld0xlZnQgPCAwKSB7XHJcbiAgICAgICAgICBuZXdMZWZ0ID0gMDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChkb3VibGVIYW5kZWxzKSB7IFxyXG4gICAgICAgICAgaWYgKG5ld0xlZnQgPj0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWF4WydtYXgnXSAtIG1heC5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgICAgICBuZXdMZWZ0ID0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWF4WydtYXgnXSAtIG1heC5vZmZzZXRXaWR0aFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKG5ld0xlZnQgPiByaWdodEVkZ2UpIHtcclxuICAgICAgICAgICAgbmV3TGVmdCA9IHJpZ2h0RWRnZTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbWluLnN0eWxlLmxlZnQgPSBuZXdMZWZ0ICsgJ3B4JztcclxuICAgICAgICBpbnRlcnZhbC5zdHlsZS5sZWZ0ID0gbmV3TGVmdCArIG1pbi5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChuZXdMZWZ0ICE9PSB1bmRlZmluZWQgfHwgcmlnaHRFZGdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnNbJ21pbiddID0geydtaW4nOiBgJHtuZXdMZWZ0fWAsICdzbGlkZXJXaWR0aCc6IGAke3NsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gbWluLm9mZnNldFdpZHRofWB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBtaW5MYWJlbC5zdHlsZS5sZWZ0ID0gKChtaW4ub2Zmc2V0V2lkdGggLSBtaW5MYWJlbC5vZmZzZXRXaWR0aCkgLSAxKSAvIDIgKyAncHgnO1xyXG4gICAgICB9ICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlVXAoKSB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYXhIYW5kZWxMaXN0ZW5lciggZXZlbnQsIHRlc3Q6b2JqZWN0ICkge1xyXG4gICAgbGV0IG1heCA9IHRoaXMubWF4O1xyXG4gICAgbGV0IG1pbiA9IHRoaXMubWluO1xyXG4gICAgbGV0IHNsaWRlclJhbmdlID0gdGhpcy5zbGlkZXJSYW5nZTtcclxuICAgIGxldCBzaGlmdDogbnVtYmVyO1xyXG4gICAgbGV0IG1heExhYmVsID0gdGhpcy5tYXhMYWJlbDtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIGxldCBkb3VibGVIYW5kZWxzOiBib29sZWFuO1xyXG4gICAgbGV0IHZlcnRpY2FsOiBib29sZWFuO1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmhhbmRlbHNUb2dnbGUgPT09ICdib29sZWFuJyAmJiB0eXBlb2YgdGhpcy5wbGFuZVRvZ2dsZSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgIGRvdWJsZUhhbmRlbHMgPSB0aGlzLmhhbmRlbHNUb2dnbGU7XHJcbiAgICAgIHZlcnRpY2FsID0gdGhpcy5wbGFuZVRvZ2dsZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvdWJsZUhhbmRlbHMgPSB0aGlzLmhhbmRlbHNUb2dnbGUuY2hlY2tlZDtcclxuICAgICAgdmVydGljYWwgPSB0aGlzLnBsYW5lVG9nZ2xlLmNoZWNrZWQ7XHJcbiAgICB9O1xyXG4gICAgbGV0IGludGVydmFsID0gdGhpcy5pbnRlcnZhbDtcclxuICAgIFxyXG4gICAgbGV0IHN0ZXA6IG51bWJlcjtcclxuICAgIGlmICh0aGlzLnN0ZXAgIT09IGZhbHNlKSB7XHJcbiAgICAgIHN0ZXAgPSAoc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSBtaW4ub2Zmc2V0V2lkdGgpIC8gdGhpcy5zdGVwQW1vdW50ICogK3RoaXMuc3RlcDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgc2hpZnQgPSBldmVudC5jbGllbnRZIC0gbWF4LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIG1heC5vZmZzZXRXaWR0aDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNoaWZ0ID0gZXZlbnQuY2xpZW50WCAtIG1heC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuXHJcbiAgICBpZiggdGVzdCAhPT0gdW5kZWZpbmVkICkge1xyXG4gICAgICBvbk1vdXNlTW92ZSggdGVzdCApXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCBldmVudCApIHtcclxuICAgICAgbGV0IG5ld0xlZnQ6IG51bWJlcjtcclxuICAgICAgXHJcbiAgICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICAgIG5ld0xlZnQgPSBzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIChldmVudC5jbGllbnRZIC0gc2hpZnQgLSBzbGlkZXJSYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld0xlZnQgPSBldmVudC5jbGllbnRYIC0gc2hpZnQgLSBzbGlkZXJSYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgcmlnaHRFZGdlID0gc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSBtYXgub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgICBpZiAodGhhdC5zdGVwICE9PSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChuZXdMZWZ0ID49ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1heC5tYXggKyBzdGVwIHx8IG5ld0xlZnQgPD0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWF4Lm1heCAtIHN0ZXApIHtcclxuICAgICAgICAgIG5ld0xlZnQgPj0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWF4Lm1heCArIHN0ZXAgPyBuZXdMZWZ0ID0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWF4Lm1heCArIHN0ZXAgOiBmYWxzZTtcclxuICAgICAgICAgIG5ld0xlZnQgPD0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWF4Lm1heCAtIHN0ZXAgPyBuZXdMZWZ0ID0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWF4Lm1heCAtIHN0ZXAgOiBmYWxzZTtcclxuICAgICAgICAgIHJlbmV3YWxPZlBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlbmV3YWxPZlBvc2l0aW9uKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBmdW5jdGlvbiByZW5ld2FsT2ZQb3NpdGlvbigpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKG5ld0xlZnQgPCAwKSB7XHJcbiAgICAgICAgICBuZXdMZWZ0ID0gMDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAobmV3TGVmdCA+IHJpZ2h0RWRnZSkge1xyXG4gICAgICAgICAgbmV3TGVmdCA9IHJpZ2h0RWRnZTtcclxuICAgICAgICB9O1xyXG4gIFxyXG4gICAgICAgIGlmIChuZXdMZWZ0IDw9ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pblsnbWluJ10gKyBtaW4ub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICAgIG5ld0xlZnQgPSArdGhhdC5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5taW5bJ21pbiddICsgbWluLm9mZnNldFdpZHRoXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBtYXguc3R5bGUubGVmdCA9IG5ld0xlZnQgKyAncHgnO1xyXG4gICAgICAgIGludGVydmFsLnN0eWxlLnJpZ2h0ID0gKHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gbmV3TGVmdCkgLSBtYXgub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICBcclxuICAgICAgICBpZiAobmV3TGVmdCAhPT0gdW5kZWZpbmVkIHx8IHJpZ2h0RWRnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtYXgnXSA9IHsnbWF4JzogYCR7bmV3TGVmdH1gLCAnc2xpZGVyV2lkdGgnOiBgJHtzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG1heC5vZmZzZXRXaWR0aH1gfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWF4TGFiZWwuc3R5bGUubGVmdCA9ICgobWF4Lm9mZnNldFdpZHRoIC0gbWF4TGFiZWwub2Zmc2V0V2lkdGgpIC0gMSkgLyAyICsgJ3B4JztcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIG9uTW91c2VVcCgpIHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZVBsYW5lKCB0b2dnbGU6SFRNTElucHV0RWxlbWVudCB8IGJvb2xlYW4sIGJvZHk6IEhUTUxEaXZFbGVtZW50LCBtaW5WYWx1ZTogSFRNTFBhcmFncmFwaEVsZW1lbnQsIG1heFZhbHVlOiBIVE1MUGFyYWdyYXBoRWxlbWVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRvZ2dsZS5jaGVja2VkIHx8IHRvZ2dsZSA9PT0gdHJ1ZSkge1xyXG4gICAgICBib2R5LnN0eWxlLmhlaWdodCA9IGJvZHkub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgICB0aGlzLnNsaWRlclJhbmdlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLTkwZGVnKSc7XHJcbiAgICAgIHRoaXMuc2xpZGVyUmFuZ2Uuc3R5bGUudG9wID0gYm9keS5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gICAgICB0aGlzLm1pbkxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ21pblNsaWRlckhhbmRlbExhYmVsJyk7XHJcbiAgICAgIHRoaXMubWF4TGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnbWF4U2xpZGVySGFuZGVsTGFiZWwnKTtcclxuICAgICAgdGhpcy5taW5MYWJlbC5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJIYW5kZWxMYWJlbFZlcnRpY2FsJyk7XHJcbiAgICAgIHRoaXMubWF4TGFiZWwuY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVySGFuZGVsTGFiZWxWZXJ0aWNhbCcpO1xyXG4gICAgICBtaW5WYWx1ZS5jbGFzc0xpc3QucmVtb3ZlKCdtaW5TbGlkZXJQb2ludCcpO1xyXG4gICAgICBtYXhWYWx1ZS5jbGFzc0xpc3QucmVtb3ZlKCdtYXhTbGlkZXJQb2ludCcpO1xyXG4gICAgICBtaW5WYWx1ZS5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJQb2ludFZlcnRpY2FsJyk7XHJcbiAgICAgIG1heFZhbHVlLmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlclBvaW50VmVydGljYWwnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJvZHkuc3R5bGUuaGVpZ2h0ID0gJyc7XHJcbiAgICAgIHRoaXMuc2xpZGVyUmFuZ2Uuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XHJcbiAgICAgIHRoaXMuc2xpZGVyUmFuZ2Uuc3R5bGUudG9wID0gJyc7XHJcbiAgICAgIHRoaXMubWluTGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnbWluU2xpZGVySGFuZGVsTGFiZWxWZXJ0aWNhbCcpO1xyXG4gICAgICB0aGlzLm1heExhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ21heFNsaWRlckhhbmRlbExhYmVsVmVydGljYWwnKTtcclxuICAgICAgdGhpcy5taW5MYWJlbC5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJIYW5kZWxMYWJlbCcpO1xyXG4gICAgICB0aGlzLm1heExhYmVsLmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlckhhbmRlbExhYmVsJyk7XHJcbiAgICAgIG1pblZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ21pblNsaWRlclBvaW50VmVydGljYWwnKTtcclxuICAgICAgbWF4VmFsdWUuY2xhc3NMaXN0LnJlbW92ZSgnbWF4U2xpZGVyUG9pbnRWZXJ0aWNhbCcpO1xyXG4gICAgICBtaW5WYWx1ZS5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJQb2ludCcpO1xyXG4gICAgICBtYXhWYWx1ZS5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJQb2ludCcpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBzZWxlY3Rpb25PZlByZXBhcmVkVmFsdWUodGFyZ2V0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0YXJnZXQgPT09ICdtaW4nKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudEhhbmRlbHNQb3NpdGlvbnNbJ21pbiddID0geydtaW4nOiAnMCcsICdzbGlkZXJXaWR0aCc6YCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWB9XHJcbiAgICAgIHRoaXMubWluLnN0eWxlLmxlZnQgPSAnMHB4J1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLmxlZnQgPSAwICsgdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLmhhbmRlbHNUb2dnbGUuY2hlY2tlZCA9PT0gdHJ1ZSB8fCB0aGlzLmhhbmRlbHNUb2dnbGUgPT09IHRydWUpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtYXgnXSA9IHsnbWF4JzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWAsICdzbGlkZXJXaWR0aCc6YCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWB9O1xyXG4gICAgICAgIHRoaXMubWF4LnN0eWxlLmxlZnQgPSB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUucmlnaHQgPSAodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGgpICsgdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtaW4nXSA9IHsnbWluJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWAsICdzbGlkZXJXaWR0aCc6YCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWB9O1xyXG4gICAgICAgIHRoaXMubWluLnN0eWxlLmxlZnQgPSB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUubGVmdCA9ICh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpICsgdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsncHgnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaWRlTWVudUlucHV0c1ZhbHVlc1ZhbGlkYXRpb25DaGVja2VyKHRhcmdldDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyLCBwb3NpdGlvbnM6IG51bWJlciwgbWluaW11bTogbnVtYmVyKTogdm9pZCB7XHJcbiAgXHJcbiAgICBpZiAodGFyZ2V0ID09PSAnbWluJyAmJiB0aGlzLmhhbmRlbHNUb2dnbGUuY2hlY2tlZCkge1xyXG4gICAgICBsZXQgbWluOiBzdHJpbmcgPSAoKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkgLyBwb3NpdGlvbnMpICogKHZhbHVlIC0gbWluaW11bSkgKyAnJztcclxuXHJcbiAgICAgIGlmICgrbWluID49ICt0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1heC5tYXggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgIG1pbiA9ICt0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1heC5tYXggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCArICcnO1xyXG4gICAgICB9IGVsc2UgaWYoK21pbiA8IDApIHtcclxuICAgICAgICBtaW4gPSAnMCc7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtaW4nXSA9IHsnbWluJzogbWluLCAnc2xpZGVyV2lkdGgnOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGh9YH07XHJcbiAgICAgIHRoaXMubWluLnN0eWxlLmxlZnQgPSBtaW4gKyAncHgnO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLmxlZnQgPSArbWluICsgdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSAnbWluJykge1xyXG4gICAgICBsZXQgbWluOiBzdHJpbmcgPSAoKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkgLyBwb3NpdGlvbnMpICogKHZhbHVlIC0gbWluaW11bSkgKyAnJztcclxuXHJcbiAgICAgIGlmKCttaW4gPCAwKSB7XHJcbiAgICAgICAgbWluID0gJzAnO1xyXG4gICAgICB9IGVsc2UgaWYgKCttaW4gPiB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICBtaW4gPSAodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSArICcnO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5jdXJyZW50SGFuZGVsc1Bvc2l0aW9uc1snbWluJ10gPSB7J21pbic6IG1pbiwgJ3NsaWRlcldpZHRoJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWB9O1xyXG4gICAgICB0aGlzLm1pbi5zdHlsZS5sZWZ0ID0gbWluICsgJ3B4JztcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5sZWZ0ID0gK21pbiArIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gJ21heCcpIHtcclxuICAgICAgbGV0IG1heDogc3RyaW5nID0gKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXgub2Zmc2V0V2lkdGgpIC8gcG9zaXRpb25zKSAqICh2YWx1ZSAtIG1pbmltdW0pICsgJyc7XHJcblxyXG4gICAgICBpZiAoK21heCA8PSArdGhpcy5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5taW4ubWluICsgdGhpcy5taW4ub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICBtYXggPSArdGhpcy5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5taW4ubWluICsgdGhpcy5tYXgub2Zmc2V0V2lkdGggKyAnJztcclxuICAgICAgfSBlbHNlIGlmKCttYXggPiB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpe1xyXG4gICAgICAgIG1heCA9ICh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpICsgJyc7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtYXgnXSA9IHsnbWF4JzogbWF4LCAnc2xpZGVyV2lkdGgnOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXgub2Zmc2V0V2lkdGh9YH07XHJcbiAgICAgIHRoaXMubWF4LnN0eWxlLmxlZnQgPSBtYXggKyAncHgnO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLnJpZ2h0ID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSArbWF4KSAtIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICB9XHJcbiAgfTtcclxufTsiLCJleHBvcnQgY2xhc3MgU2xpZGVyUmFuZ2Uge1xyXG5cclxuICByYW5nZTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgbGV0IGVsZW06IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ3NsaWRlclJhbmdlJyk7XHJcbiAgICB0aGlzLnJhbmdlID0gZWxlbTtcclxuICB9O1xyXG5cclxuICBnZXRFbGVtZW50cygpOiBIVE1MRGl2RWxlbWVudHtcclxuICAgIHJldHVybiB0aGlzLnJhbmdlO1xyXG4gIH07XHJcblxyXG59OyIsImV4cG9ydCBjbGFzcyBWYWx1ZVJhbmdlIHtcclxuICBtaW5WYWx1ZTogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgbWF4VmFsdWU6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvciAodmFsdWVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSkge1xyXG4gICAgbGV0IG1pbjpIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBtYXg6SFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBtaW4uaW5uZXJUZXh0ID0gdmFsdWVzLm1pbjtcclxuICAgIG1heC5pbm5lclRleHQgPSB2YWx1ZXMubWF4O1xyXG4gICAgbWluLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlclBvaW50Jyk7XHJcbiAgICBtYXguY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVyUG9pbnQnKTtcclxuICAgIHRoaXMubWluVmFsdWUgPSBtaW47XHJcbiAgICB0aGlzLm1heFZhbHVlID0gbWF4O1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudHMoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7bWluOiB0aGlzLm1pblZhbHVlLCBtYXg6IHRoaXMubWF4VmFsdWV9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtTbGlkZXJSYW5nZX0gZnJvbSAnLi9jb21wb25lbnRzL3NsaWRlci1yYW5nZS50cyc7XHJcbmltcG9ydCB7SGFuZGVsc30gZnJvbSAnLi9jb21wb25lbnRzL2hhbmRlbHMudHMnO1xyXG5pbXBvcnQge1NsaWRlck1vdmVtZW50fSBmcm9tICcuL2NvbXBvbmVudHMvc2xpZGVyLW1vdmVtZW50LnRzJztcclxuaW1wb3J0IHtTaWRlTWVudX0gZnJvbSAnLi9jb21wb25lbnRzL3NpZGUtbWVudS50cyc7XHJcbmltcG9ydCB7VmFsdWVSYW5nZX0gZnJvbSAnLi9jb21wb25lbnRzL3ZhbHVlUmFuZ2UudHMnO1xyXG5pbXBvcnQge0hhbmRlbHNMYWJlbHN9IGZyb20gJy4vY29tcG9uZW50cy9oYW5kZWxzLWxhYmVscy50cyc7XHJcbmltcG9ydCB7U2VsZWN0ZWRSYW5nZX0gZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdGVkLXJhbmdlLnRzJztcclxuXHJcbmludGVyZmFjZSBTZXR0aW5ncyB7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgYm9vbGVhblxyXG59O1xyXG5cclxuaW50ZXJmYWNlIFNpZGVNZW51RWxlbWVudHMge1xyXG4gIFtrZXk6IHN0cmluZ106IEhUTUxEaXZFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudDtcclxufTtcclxuXHJcbmludGVyZmFjZSBEYXRhT2ZWYWx1ZVJlZnJlc2gge1xyXG4gICdtaW4nPzogc3RyaW5nO1xyXG4gICdtYXgnPzogc3RyaW5nO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIERhdGFSZXF1ZXN0U3RhdHVzIHtcclxuICBba2V5OiBzdHJpbmddOiBib29sZWFuXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgVmlldyB7XHJcbiAgcHJpdmF0ZSB0aGF0OiBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIHNldHRpbmdzOiBTZXR0aW5ncztcclxuICBwcml2YXRlIHNsaWRlclJhbmdlOiBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIHNsaWRlckNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBtaW5IYW5kZWw6IEhUTUxTcGFuRWxlbWVudDtcclxuICBwcml2YXRlIG1heEhhbmRlbDogSFRNTFNwYW5FbGVtZW50O1xyXG4gIHByaXZhdGUgc2xpZGVyTW92ZW1lbnQ6IE9iamVjdDtcclxuICBwcml2YXRlIHNpZGVNZW51OiBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIHNpZGVNZW51Q29udGFpbmVyOiBTdHJpbmcgfCBCb29sZWFuO1xyXG4gIHByaXZhdGUgbWluVmFsdWU6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gIHByaXZhdGUgbWF4VmFsdWU6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gIHByaXZhdGUgbWluTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBtYXhMYWJlbDogSFRNTExhYmVsRWxlbWVudDtcclxuICBwcml2YXRlIGhhbmRlbFRvZ2dsZTogSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIGhhbmRlbExhYmVsVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHByaXZhdGUgcGxhbmVUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBtaW5JbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIG1heElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHByaXZhdGUgaW50ZXJ2YWw6IEhUTUxEaXZFbGVtZW50O1xyXG4gIFxyXG4gIHByaXZhdGUgY29uc3RydWN0b3IodGFyZ2V0OiBIVE1MRGl2RWxlbWVudCwgc2V0dGluZ3M6IFNldHRpbmdzKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICB0aGlzLnRoYXQgPSB0YXJnZXQ7XHJcbiAgICB0aGlzLnNsaWRlclJhbmdlID0gbmV3IFNsaWRlclJhbmdlKCkuZ2V0RWxlbWVudHMoKTtcclxuICAgIHRoaXMubWluSGFuZGVsID0gbmV3IEhhbmRlbHMoKS5nZXRFbGVtZW50cygpLm1pbjtcclxuICAgIHRoaXMubWF4SGFuZGVsID0gbmV3IEhhbmRlbHMoKS5nZXRFbGVtZW50cygpLm1heDtcclxuICAgIHRoaXMubWluVmFsdWUgPSBuZXcgVmFsdWVSYW5nZSh7J21pbic6IHRoaXMuc2V0dGluZ3NbJ21pbiddLCAnbWF4JzogdGhpcy5zZXR0aW5nc1snbWF4J119KS5nZXRFbGVtZW50cygpLm1pbjtcclxuICAgIHRoaXMubWF4VmFsdWUgPSBuZXcgVmFsdWVSYW5nZSh7J21pbic6IHRoaXMuc2V0dGluZ3NbJ21pbiddLCAnbWF4JzogdGhpcy5zZXR0aW5nc1snbWF4J119KS5nZXRFbGVtZW50cygpLm1heDtcclxuICAgIGlmIChzZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUpIHtcclxuICAgICAgbGV0IHNpZGVNZW51RWxlbWVudHM6IFNpZGVNZW51RWxlbWVudHMgPSBuZXcgU2lkZU1lbnUoKS5nZXRFbGVtZW50cygpO1xyXG4gICAgICB0aGlzLnNpZGVNZW51ID0gc2lkZU1lbnVFbGVtZW50cy5tZW51O1xyXG4gICAgICB0aGlzLmhhbmRlbFRvZ2dsZSA9IHNpZGVNZW51RWxlbWVudHMuaGFuZGVsVG9nZ2xlO1xyXG4gICAgICB0aGlzLmhhbmRlbExhYmVsVG9nZ2xlID0gc2lkZU1lbnVFbGVtZW50cy5oYW5kZWxMYWJlbFRvZ2dsZTtcclxuICAgICAgdGhpcy5wbGFuZVRvZ2dsZSA9IHNpZGVNZW51RWxlbWVudHMucGxhbmVUb2dnbGU7XHJcbiAgICAgIHRoaXMubWluSW5wdXQgPSBzaWRlTWVudUVsZW1lbnRzLm1pbklucHV0O1xyXG4gICAgICB0aGlzLm1heElucHV0ID0gc2lkZU1lbnVFbGVtZW50cy5tYXhJbnB1dDtcclxuICAgIH07XHJcbiAgICB0aGlzLnNpZGVNZW51Q29udGFpbmVyID0gc2V0dGluZ3Muc2lkZU1lbnVDb250YWluZXI7XHJcbiAgICB0aGlzLm1pbkxhYmVsID0gbmV3IEhhbmRlbHNMYWJlbHMoKS5nZXRFbGVtZW50cygpLm1pbjtcclxuICAgIHRoaXMubWF4TGFiZWwgPSBuZXcgSGFuZGVsc0xhYmVscygpLmdldEVsZW1lbnRzKCkubWF4O1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IG5ldyBTZWxlY3RlZFJhbmdlKCkuZ2V0RWxlbWVudHMoKTtcclxuICAgIGlmKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMuc2xpZGVyTW92ZW1lbnQgPSBuZXcgU2xpZGVyTW92ZW1lbnQoeydtaW4nOiB0aGlzLm1pbkhhbmRlbCwgJ21heCc6IHRoaXMubWF4SGFuZGVsLCdtaW5MYWJlbCc6IHRoaXMubWluTGFiZWwsICdtYXhMYWJlbCc6IHRoaXMubWF4TGFiZWwgLCdzbGlkZXJSYW5nZSc6IHRoaXMuc2xpZGVyUmFuZ2UsICdwbGFuZVRvZ2dsZSc6IHRoaXMucGxhbmVUb2dnbGUsICdoYW5kZWxzVG9nZ2xlJzogdGhpcy5oYW5kZWxUb2dnbGUsICdpbnRlcnZhbCc6IHRoaXMuaW50ZXJ2YWwsICdzdGVwJzogdGhpcy5zZXR0aW5ncy5zdGVwfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNsaWRlck1vdmVtZW50ID0gbmV3IFNsaWRlck1vdmVtZW50KHsnbWluJzogdGhpcy5taW5IYW5kZWwsICdtYXgnOiB0aGlzLm1heEhhbmRlbCwnbWluTGFiZWwnOiB0aGlzLm1pbkxhYmVsLCAnbWF4TGFiZWwnOiB0aGlzLm1heExhYmVsICwnc2xpZGVyUmFuZ2UnOiB0aGlzLnNsaWRlclJhbmdlLCAncGxhbmVUb2dnbGUnOiB0aGlzLnNldHRpbmdzLnZlcnRpY2FsLCAnaGFuZGVsc1RvZ2dsZSc6IHRoaXMuc2V0dGluZ3MucmFuZ2UsICdpbnRlcnZhbCc6IHRoaXMuaW50ZXJ2YWwsICdzdGVwJzogdGhpcy5zZXR0aW5ncy5zdGVwfSk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGRhdGFSZXF1ZXN0U3RhdHVzOiBEYXRhUmVxdWVzdFN0YXR1cyA9IHtcclxuICAgIFwiZ2V0TWF4RGF0YVwiOiBmYWxzZSxcclxuICAgIFwiZ2V0TWluUG9zaXRpb25zQW1vdW50XCI6IGZhbHNlLFxyXG4gICAgXCJnZXRNYXhQb3NpdGlvbnNBbW91bnRcIjogZmFsc2UsXHJcbiAgICBcImdldFBvc3NpYmxlUmFuZ2VcIjogZmFsc2UsXHJcbiAgICBcImdldFN0ZXBQb3NpdGlvbnNBbW91bnRcIjogZmFsc2VcclxuICB9O1xyXG5cclxuICBkaXNwbGF5RWxlbWVudHMoKTogdm9pZCB7XHJcbiAgICBsZXQgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5zbGlkZXJDb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2xpZGVyQm9keScpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZCh0aGlzLnNsaWRlclJhbmdlKTtcclxuICAgIHRoaXMudGhhdC5hcHBlbmQoY29udGFpbmVyKTtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMubWluSGFuZGVsKTtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMubWF4SGFuZGVsKTtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMubWluVmFsdWUpO1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZS5hcHBlbmQodGhpcy5tYXhWYWx1ZSk7XHJcbiAgICB0aGlzLmludGVydmFsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgdGhpcy5taW5IYW5kZWwuYXBwZW5kKHRoaXMubWluTGFiZWwpO1xyXG4gICAgdGhpcy5tYXhIYW5kZWwuYXBwZW5kKHRoaXMubWF4TGFiZWwpO1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1snaGFuZGVsc0xhYmVsJ10gPT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMubWluTGFiZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdGhpcy5tYXhMYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUpIHtcclxuICAgICAgICB0aGlzLmhhbmRlbExhYmVsVG9nZ2xlLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBpZih0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLmRhdGFSZXF1ZXN0U3RhdHVzW1wiZ2V0UG9zc2libGVSYW5nZVwiXSA9IHRydWU7XHJcbiAgICAgIGlmICh0aGlzLnNpZGVNZW51Q29udGFpbmVyICE9PSAnZmFsc2UnKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNpZGVNZW51Q29udGFpbmVyKS5hcHBlbmQodGhpcy5zaWRlTWVudSlcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRoYXQuYXBwZW5kKHRoaXMuc2lkZU1lbnUpXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1tcInJhbmdlXCJdID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMubWF4SGFuZGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBpZih0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMubWF4SW5wdXQuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3NbJ3ZlcnRpY2FsJ10gPT09IHRydWUpIHtcclxuICAgICAgaWYodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUpIHtcclxuICAgICAgICB0aGlzLnBsYW5lVG9nZ2xlLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyTW92ZW1lbnQuY2hhbmdlUGxhbmUodGhpcy5wbGFuZVRvZ2dsZSwgdGhpcy5zbGlkZXJDb250YWluZXIsIHRoaXMubWluVmFsdWUsIHRoaXMubWF4VmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2xpZGVyTW92ZW1lbnQuY2hhbmdlUGxhbmUodHJ1ZSwgdGhpcy5zbGlkZXJDb250YWluZXIsIHRoaXMubWluVmFsdWUsIHRoaXMubWF4VmFsdWUpO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5zdGVwID09PSB0cnVlICYmIHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQuc2V0QXR0cmlidXRlKCdzdGVwJywgdGhpcy5zZXR0aW5ncy5zdGVwICsgXCJcIik7XHJcbiAgICAgIHRoaXMubWluSW5wdXQuc2V0QXR0cmlidXRlKCdzdGVwJywgdGhpcy5zZXR0aW5ncy5zdGVwICsgXCJcIik7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpZih0aGlzLnNldHRpbmdzLnN0ZXAgPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5kYXRhUmVxdWVzdFN0YXR1c1tcImdldFN0ZXBQb3NpdGlvbnNBbW91bnRcIl0gPSB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZGF0YVJlcXVlc3RTdGF0dXNbXCJzdGFydEhhbmRlbHNQb3NpdGlvblwiXSA9IHRydWU7XHJcbiAgfTtcclxuXHJcbiAgYmluZEV2ZW50TGlzdGVuZXJzKCk6IHZvaWQge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5oYW5kZWxMYWJlbFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm1ha2VCaW5kTGFiZWxUb2dnbGUodGhhdCkpO1xyXG4gICAgfTtcclxuICAgIGlmICh0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLmhhbmRlbFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm1ha2VCaW5kSGFuZGVsVG9nZ2xlKHRoYXQpKTtcclxuICAgIH07XHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5wbGFuZVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm1ha2VCaW5kRm9yUGxhbmVUb2dnbGUodGhhdCkpO1xyXG4gICAgfTtcclxuICAgIHRoaXMubWluVmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm1ha2VCaW5kRm9yU2VsZWN0aW9uTWluVmFsdWUodGhhdCkpO1xyXG4gICAgdGhpcy5tYXhWYWx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFrZUJpbmRGb3JTZWxlY3Rpb25NYXhWYWx1ZSh0aGF0KSk7XHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5taW5JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm1ha2VCaW5kRm9yTWluSW5wdXQodGhhdCkpO1xyXG4gICAgfTtcclxuICAgIGlmICh0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLm1heElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMubWFrZUJpbmRGb3JNYXhJbnB1dCh0aGF0KSk7XHJcbiAgICB9O1xyXG4gIH07XHJcbiAgXHJcbiAgYmluZEV2ZW50SGFuZGVsc01vdmVtZW50KCk6dm9pZCB7XHJcbiAgICB0aGlzLmJpbmRGb3JNaW4oKTtcclxuICAgIHRoaXMuYmluZEZvck1heCgpO1xyXG4gIH07XHJcblxyXG4gIHJlZnJlc2hDdXJyZW50VmFsdWVzKG5ld0RhdGE6IERhdGFPZlZhbHVlUmVmcmVzaCk6IHZvaWQge1xyXG4gICAgbGV0IHNldHQ6IGJvb2xlYW4gfCBzdHJpbmcgPSB0aGlzLnNldHRpbmdzWydyYW5nZSddO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiByZWZyZXNoQ3VycmVudFZhbHVlc011bHRpQ2hlY2soc2V0dGluZ3M6IGJvb2xlYW4gfCBzdHJpbmcpIHtcclxuICAgICAgcmV0dXJuICdtaW4nIGluIG5ld0RhdGEgJiYgJ21heCcgaW4gbmV3RGF0YSAmJiBzZXR0aW5ncyA9PT0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAocmVmcmVzaEN1cnJlbnRWYWx1ZXNNdWx0aUNoZWNrKHNldHQpKSB7XHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlICYmIHRoaXMuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICB0aGlzLnNpZGVNZW51LnF1ZXJ5U2VsZWN0b3IoJyNtaW5TbGlkZXJWYWx1ZScpLnRleHRDb250ZW50ID0gbmV3RGF0YS5taW47XHJcbiAgICAgICAgdGhpcy5zaWRlTWVudS5xdWVyeVNlbGVjdG9yKCcjbWF4U2xpZGVyVmFsdWUnKS50ZXh0Q29udGVudCA9IGAgLSAke25ld0RhdGEubWF4fWA7XHJcbiAgICAgICAgdGhpcy5zaWRlTWVudS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tU2xpZGVyTWluSW5wdXQnKS52YWx1ZSA9IG5ld0RhdGEubWluO1xyXG4gICAgICAgIHRoaXMuc2lkZU1lbnUucXVlcnlTZWxlY3RvcignLmN1c3RvbVNsaWRlck1heElucHV0JykudmFsdWUgPSBuZXdEYXRhLm1heDtcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5taW5MYWJlbC50ZXh0Q29udGVudCA9IG5ld0RhdGEubWluO1xyXG4gICAgICB0aGlzLm1heExhYmVsLnRleHRDb250ZW50ID0gbmV3RGF0YS5tYXg7XHJcbiAgICB9IGVsc2UgaWYgKCdtaW4nIGluIG5ld0RhdGEpIHtcclxuICAgICAgdGhpcy5taW5MYWJlbC50ZXh0Q29udGVudCA9IG5ld0RhdGEubWluO1xyXG4gICAgICBpZiAodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUpIHtcclxuICAgICAgICB0aGlzLnNpZGVNZW51LnF1ZXJ5U2VsZWN0b3IoJyNtaW5TbGlkZXJWYWx1ZScpLnRleHRDb250ZW50ID0gbmV3RGF0YS5taW47O1xyXG4gICAgICAgIHRoaXMuc2lkZU1lbnUucXVlcnlTZWxlY3RvcignLmN1c3RvbVNsaWRlck1pbklucHV0JykudmFsdWUgPSBuZXdEYXRhLm1pbjtcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubWF4TGFiZWwudGV4dENvbnRlbnQgPSBuZXdEYXRhLm1heDtcclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5zaWRlTWVudS5xdWVyeVNlbGVjdG9yKCcjbWF4U2xpZGVyVmFsdWUnKS50ZXh0Q29udGVudCA9IGAgLSAke25ld0RhdGEubWF4fWA7XHJcbiAgICAgICAgdGhpcy5zaWRlTWVudS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tU2xpZGVyTWF4SW5wdXQnKS52YWx1ZSA9IG5ld0RhdGEubWF4O1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICAgIG5ldyBIYW5kZWxzTGFiZWxzKCkuY2VudGVyaW5nUmVsYXRpdmVUb0hhbmRsZXModGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGgsIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRoLCB0aGlzLm1pbkxhYmVsLm9mZnNldFdpZHRoLCB0aGlzLm1heExhYmVsLm9mZnNldFdpZHRoLCB0aGlzLm1pbkxhYmVsLCB0aGlzLm1heExhYmVsKTtcclxuICB9O1xyXG5cclxuICBjYWxsSGFuZGVsTGFiZWxUb2dnbGVDaGFuZ2VyKCk6IHZvaWQge1xyXG4gICAgbmV3IEhhbmRlbHNMYWJlbHMoKS5kaXNwbGF5Q29udHJvbGxlcih0aGlzLmhhbmRlbExhYmVsVG9nZ2xlLCB0aGlzLm1pbkxhYmVsLCB0aGlzLm1heExhYmVsKTtcclxuICAgIGlmICh0aGlzLmhhbmRlbExhYmVsVG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgbmV3IEhhbmRlbHNMYWJlbHMoKS5jZW50ZXJpbmdSZWxhdGl2ZVRvSGFuZGxlcyh0aGlzLm1pbkhhbmRlbC5vZmZzZXRXaWR0aCwgdGhpcy5tYXhIYW5kZWwub2Zmc2V0V2lkdGgsIHRoaXMubWluTGFiZWwub2Zmc2V0V2lkdGgsIHRoaXMubWF4TGFiZWwub2Zmc2V0V2lkdGgsIHRoaXMubWluTGFiZWwsIHRoaXMubWF4TGFiZWwpXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNhbGxNYXhIYW5kZWxUb2dnbGVDaGFuZ2VyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMuc2xpZGVyTW92ZW1lbnQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnNbJ21heCddID0geydtYXgnOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGh9YCwgJ3NsaWRlcldpZHRoJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRofWB9XHJcbiAgICAgIHRoaXMubWF4SGFuZGVsLnN0eWxlLmxlZnQgPSBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGh9cHhgO1xyXG4gICAgICB0aGlzLnNpZGVNZW51LnF1ZXJ5U2VsZWN0b3IoJyNtYXhTbGlkZXJWYWx1ZScpLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKTtcclxuICAgICAgdGhpcy5tYXhJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICB0aGlzLm1heElucHV0LnN0eWxlLm9wYWNpdHkgPSAnMC4zJztcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgbmV3IEhhbmRlbHMoKS5kaXNwbGF5Q29udHJvbGxlcih0aGlzLmhhbmRlbFRvZ2dsZSwgdGhpcy5tYXhIYW5kZWwpO1xyXG5cclxuICAgIGlmICh0aGlzLmhhbmRlbFRvZ2dsZS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMuZGF0YVJlcXVlc3RTdGF0dXNbXCJnZXRNYXhEYXRhXCJdID0gdHJ1ZTtcclxuICAgICAgdGhpcy5tYXhJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUucmlnaHQgPSB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbkhhbmRlbC5vZmZzZXRXaWR0aCAvIDIgKSArICdweCc7XHJcbiAgICAgIGlmICh0aGlzLnNsaWRlck1vdmVtZW50LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pblsnbWluJ10gPj0gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRoIC0gdGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICB0aGlzLnNsaWRlck1vdmVtZW50LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtaW4nXSA9IHsnbWluJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRoIC0gdGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGh9YCwgJ3NsaWRlcldpZHRoJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRofWB9XHJcbiAgICAgICAgdGhpcy5taW5IYW5kZWwuc3R5bGUubGVmdCA9IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1heEhhbmRlbC5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRofXB4YDtcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmVmcmVzaE1heFNpZGVNZW51RGF0YShkYXRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuc2lkZU1lbnUucXVlcnlTZWxlY3RvcignI21heFNsaWRlclZhbHVlJykudGV4dENvbnRlbnQgPSBgIC0gJHtkYXRhfWA7XHJcbiAgICB0aGlzLm1heElucHV0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICB0aGlzLm1heElucHV0LnZhbHVlID0gYCR7ZGF0YX1gO1xyXG4gIH07XHJcblxyXG4gIGlucHV0c1Bvc3NpYmxlUmFuZ2UoIGRhdGE6IG9iamVjdCwgbWluOiBIVE1MSW5wdXRFbGVtZW50LCBtYXg6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIG1pbi5zZXRBdHRyaWJ1dGUoJ21heCcsIGRhdGEubWF4KTtcclxuICAgIG1pbi5zZXRBdHRyaWJ1dGUoJ21pbicsIGRhdGEubWluKTtcclxuICAgIG1heC5zZXRBdHRyaWJ1dGUoJ21heCcsIGRhdGEubWF4KTtcclxuICB9O1xyXG5cclxuICBiaW5kRm9yTWluKCk6IHZvaWQge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzOyBcclxuICAgIHRoYXQubWluSGFuZGVsLm9ubW91c2Vkb3duID0gZnVuY3Rpb24oIGV2ZW50ICk6IHZvaWQge1xyXG4gICAgICB0aGF0LnNsaWRlck1vdmVtZW50Lm1pbkhhbmRlbExpc3RlbmVyKCBldmVudCApO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBiaW5kRm9yTWF4KCk6IHZvaWQge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzOyBcclxuICAgIHRoYXQubWF4SGFuZGVsLm9ubW91c2Vkb3duID0gZnVuY3Rpb24oZXZlbnQpOiB2b2lkIHtcclxuICAgICAgdGhhdC5zbGlkZXJNb3ZlbWVudC5tYXhIYW5kZWxMaXN0ZW5lciggZXZlbnQgKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgbWFrZUJpbmRMYWJlbFRvZ2dsZSh0aGF0KTogRnVuY3Rpb24ge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhhdC5jYWxsSGFuZGVsTGFiZWxUb2dnbGVDaGFuZ2VyO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBtYWtlQmluZEhhbmRlbFRvZ2dsZSh0aGF0KTogRnVuY3Rpb24ge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhhdC5jYWxsTWF4SGFuZGVsVG9nZ2xlQ2hhbmdlcigpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBtYWtlQmluZEZvclBsYW5lVG9nZ2xlKHRoYXQpOiBGdW5jdGlvbiB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGF0LnNsaWRlck1vdmVtZW50LmNoYW5nZVBsYW5lKHRoYXQucGxhbmVUb2dnbGUsIHRoYXQuc2xpZGVyQ29udGFpbmVyLCB0aGF0Lm1pblZhbHVlLCB0aGF0Lm1heFZhbHVlKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgbWFrZUJpbmRGb3JTZWxlY3Rpb25NaW5WYWx1ZSAodGhhdCk6IEZ1bmN0aW9uIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgIHRoYXQuc2xpZGVyTW92ZW1lbnQuc2VsZWN0aW9uT2ZQcmVwYXJlZFZhbHVlKCdtaW4nKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgbWFrZUJpbmRGb3JTZWxlY3Rpb25NYXhWYWx1ZSh0aGF0KTogRnVuY3Rpb24ge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcclxuICAgICAgdGhhdC5zbGlkZXJNb3ZlbWVudC5zZWxlY3Rpb25PZlByZXBhcmVkVmFsdWUoJ21heCcpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBtYWtlQmluZEZvck1pbklucHV0KHRoYXQpOiBGdW5jdGlvbiB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xyXG4gICAgICB0aGF0LmRhdGFSZXF1ZXN0U3RhdHVzW1wiZ2V0TWluUG9zaXRpb25zQW1vdW50XCJdID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgbWFrZUJpbmRGb3JNYXhJbnB1dCh0aGF0KTogRnVuY3Rpb24ge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICB0aGF0LmRhdGFSZXF1ZXN0U3RhdHVzW1wiZ2V0TWF4UG9zaXRpb25zQW1vdW50XCJdID0gdHJ1ZTtcclxuICAgIH07XHJcbiAgfTtcclxufTtcclxuIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vY29tcG9uZW50cy92aWV3L3ZpZXcudHMnO1xyXG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RlbC9Nb2RlbC50cyc7XHJcbmltcG9ydCB7IEZhY2FkZSB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RlbC9mYWNhZGUudHMnO1xyXG5pbXBvcnQgeyBQcmVzZW50ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJlc2VudGVyL3ByZXNlbnRlci50cyc7XHJcblxyXG4oZnVuY3Rpb24oICQgKSB7XHJcbiAgJC5mbi50ZXN0U2xpZGVyID0gZnVuY3Rpb24oIG9wdGlvbnMgKSB7XHJcblxyXG4gICAgdmFyIHNldHRpbmdzID0gJC5leHRlbmQoIHtcclxuICAgICAgJ21pbic6ICcwJyxcclxuICAgICAgJ21heCc6ICcxMCcsXHJcbiAgICAgICdyYW5nZSc6IGZhbHNlLFxyXG4gICAgICAnc2lkZS1tZW51JzogZmFsc2UsXHJcbiAgICAgICdoYW5kZWxzTGFiZWwnOiBmYWxzZSxcclxuICAgICAgJ3ZlcnRpY2FsJzogZmFsc2UsXHJcbiAgICAgICdzdGVwJzogZmFsc2UsXHJcbiAgICAgICdzaWRlTWVudUNvbnRhaW5lcic6ICdmYWxzZSdcclxuICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgIGxldCB0aGF0OiBIVE1MRGl2RWxlbWVudCA9IHRoaXM7XHJcbiAgICBcclxuICAgIGxldCBtb2RlbDtcclxuICAgIGlmICgnY3VycmVudC1taW4nIGluIHNldHRpbmdzICYmICdjdXJyZW50LW1heCcgaW4gc2V0dGluZ3MpIHtcclxuICAgICAgbW9kZWwgPSBuZXcgTW9kZWwoeydtaW4nOiBzZXR0aW5nc1snbWluJ10sIG1heDogc2V0dGluZ3NbJ21heCddLCAnY3VycmVudC1taW4nOiBzZXR0aW5nc1snY3VycmVudC1taW4nXSwgJ2N1cnJlbnQtbWF4Jzogc2V0dGluZ3NbJ2N1cnJlbnQtbWF4J119KTtcclxuICAgIH0gZWxzZSBpZiAoJ2N1cnJlbnQtbWluJyBpbiBzZXR0aW5ncykge1xyXG4gICAgICBtb2RlbCA9IG5ldyBNb2RlbCh7J21pbic6IHNldHRpbmdzWydtaW4nXSwgbWF4OiBzZXR0aW5nc1snbWF4J10sICdjdXJyZW50LW1pbic6IHNldHRpbmdzWydjdXJyZW50LW1pbiddLCAnY3VycmVudC1tYXgnOiBzZXR0aW5nc1snbWF4J119KTtcclxuICAgIH0gZWxzZSBpZiAoJ2N1cnJlbnQtbWF4JyBpbiBzZXR0aW5ncykge1xyXG4gICAgICBtb2RlbCA9IG5ldyBNb2RlbCh7J21pbic6IHNldHRpbmdzWydtaW4nXSwgbWF4OiBzZXR0aW5nc1snbWF4J10sICdjdXJyZW50LW1pbic6IHNldHRpbmdzWydtaW4nXSwgJ2N1cnJlbnQtbWF4Jzogc2V0dGluZ3NbJ2N1cnJlbnQtbWF4J119KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1vZGVsID0gbmV3IE1vZGVsKHsnbWluJzogc2V0dGluZ3NbJ21pbiddLCBtYXg6IHNldHRpbmdzWydtYXgnXSwgJ2N1cnJlbnQtbWluJzogc2V0dGluZ3NbJ21pbiddLCAnY3VycmVudC1tYXgnOiBzZXR0aW5nc1snbWF4J119KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHZpZXcgPSBuZXcgVmlldyh0aGF0LCBzZXR0aW5ncyk7XHJcbiAgICBcclxuICAgIGxldCBmYWNhZGUgPSBuZXcgRmFjYWRlKG1vZGVsKVxyXG4gICAgXHJcbiAgICBsZXQgcHJlc2VudGVyID0gbmV3IFByZXNlbnRlcih2aWV3LCBmYWNhZGUpO1xyXG5cclxuICAgIHByZXNlbnRlci5zdGFydFZpZXdNb25pdG9yaW5nKCk7XHJcbiAgICB2aWV3LmRpc3BsYXlFbGVtZW50cygpO1xyXG4gICAgdmlldy5iaW5kRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHZpZXcuYmluZEV2ZW50SGFuZGVsc01vdmVtZW50KCk7XHJcblxyXG4gIH07XHJcbn0pKGpRdWVyeSk7Il0sInNvdXJjZVJvb3QiOiIifQ==