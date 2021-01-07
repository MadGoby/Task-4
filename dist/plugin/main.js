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
;
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
  }, {
    key: "getValuesForValueScale",
    value: function getValuesForValueScale() {
      return {
        '15': String(+this.model.data.min + (+this.model.data.max - +this.model.data.min) * 0.15),
        '30': String(+this.model.data.min + (+this.model.data.max - +this.model.data.min) * 0.30),
        '50': String(+this.model.data.min + (+this.model.data.max - +this.model.data.min) * 0.50),
        '70': String(+this.model.data.min + (+this.model.data.max - +this.model.data.min) * 0.70),
        '85': String(+this.model.data.min + (+this.model.data.max - +this.model.data.min) * 0.85)
      };
    }
  }, {
    key: "selectHandleForValueScale",
    value: function selectHandleForValueScale(value, doubleToggle) {
      var minDifference;
      var maxDifference;

      if (doubleToggle.checked) {
        if (+this.model.data['current-min'] > +value || +this.model.data['current-min'] === +value) {
          minDifference = String(+this.model.data['current-min'] - +value);
        } else {
          minDifference = String(+value - +this.model.data['current-min']);
        }

        ;

        if (+this.model.data['current-max'] > +value || +this.model.data['current-max'] === +value) {
          maxDifference = String(+this.model.data['current-max'] - +value);
        } else {
          maxDifference = String(+value - +this.model.data['current-max']);
        }

        ;

        if (+minDifference < +maxDifference || +minDifference == +maxDifference) {
          this.model.data['current-min'] = value;
          return {
            'target': 'min',
            'value': value
          };
        } else {
          this.model.data['current-max'] = value;
          return {
            'target': 'max',
            'value': value
          };
        }

        ;
      } else {
        this.model.data['current-min'] = value;
        return {
          'target': 'min',
          'value': value
        };
      }

      ;
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
          if (typeof val === 'boolean' || typeof val === 'string') {
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

            ;

            if (prop === 'getStepPositionsAmount') {
              var stepAmount = facade.getPositionsAmount();
              view.sliderMovement.stepAmount = +stepAmount['positions'];
            }

            ;

            if (prop === 'getValuesForValueScale') {
              var valueScaleValues = facade.getValuesForValueScale();
              view.valueScale.refreshValues(valueScaleValues);
              view.valueScale.centersValuesPositions(view.sliderRange, view.minHandel);
            }

            ;

            if (prop === 'selectHandleForValueScale') {
              if (typeof val === 'string') {
                var _positions2 = facade.getPositionsAmount();

                var selectedHandel = facade.selectHandleForValueScale(val, view.handelToggle);
                view.sliderMovement.centeredHandelByValueScale(selectedHandel['target'], selectedHandel['value'], _positions2['positions'], _positions2['minimum']);

                if (selectedHandel['target'] === 'min') {
                  var adaptedObjectForRefresh = {
                    'min': selectedHandel['value']
                  };
                  view.refreshCurrentValues(adaptedObjectForRefresh);
                } else {
                  var _adaptedObjectForRefresh = {
                    'max': selectedHandel['value']
                  };
                  view.refreshCurrentValues(_adaptedObjectForRefresh);
                }

                ;
              }

              ;
            }

            ;
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

  _defineProperty(this, "valueScaleToggle", void 0);

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
  var stepContainer = document.createElement('div');
  stepContainer.classList.add('customSliderStepContainer');
  var stepInputP = document.createElement('p');
  stepInputP.classList.add('customSliderParag');
  stepInputP.innerText = 'Изменить шаг ползунка: ';
  var forStepInputLabel = document.createElement('label');
  forStepInputLabel.classList.add('customSliderInputlabel');
  forStepInputLabel.setAttribute('for', 'customSliderStepInput');
  forStepInputLabel.innerText = 'Step: ';
  var stepInput = document.createElement('input');
  stepInput.classList.add('customSliderStepInput');
  stepInput.id = 'customSliderStepInput';
  stepInput.setAttribute('type', 'number');
  var valueScaleContainer = document.createElement('div');
  var toggleForValueScaleP = document.createElement('p');
  toggleForValueScaleP.classList.add('customSliderParag');
  toggleForValueScaleP.innerText = 'Включить шкалу значений: ';
  var toggleForValueScaleLabel = document.createElement('label');
  toggleForValueScaleLabel.classList.add('customSliderToggle');
  var toggleForValueScaleInput = document.createElement('input');
  toggleForValueScaleInput.setAttribute('type', 'checkbox');
  toggleForValueScaleInput.classList.add('valueScaleToggle');
  toggleForValueScaleInput.id = 'valueScaleToggle';
  var toggleForValueScaleSpan = document.createElement('span');
  toggleForValueScaleSpan.classList.add('customToggleSliderBorder');
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
  stepContainer.append(stepInputP, forStepInputLabel, stepInput);
  mainSliderContainer.append(stepContainer);
  toggleForValuesContainer.append(toggleForValuesP, toggleForValuesLabel);
  toggleForValuesLabel.append(toggleForValuesInput, toggleForValuesSpan);
  mainSliderContainer.append(toggleForValuesContainer);
  valueScaleContainer.append(toggleForValueScaleP, toggleForValueScaleLabel);
  toggleForValueScaleLabel.append(toggleForValueScaleInput, toggleForValueScaleSpan);
  mainSliderContainer.append(valueScaleContainer);
  toggleForPlaneContainer.append(toggleForPlaneP, toggleForPlaneLabel);
  toggleForPlaneLabel.append(toggleForPlaneInput, toggleForPlaneSpan);
  mainSliderContainer.append(toggleForPlaneContainer);
  stepContainer.append(stepInputP, forStepInputLabel, stepInput);
  mainSliderContainer.append(stepContainer);
  this.customSliderMenuContainer = mainSliderContainer;
  this.handelToggle = maxSliderHandelToggle;
  this.handelLabelToggle = toggleForValuesInput;
  this.planeToggle = toggleForPlaneInput;
  this.minInput = customSliderInputsMin;
  this.maxInput = customSliderInputsMax;
  this.minSliderValueOutput = minSliderValueOutput;
  this.maxSliderValueOutput = maxSliderValueOutput;
  this.valueScaleToggle = toggleForValueScaleInput;
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

        ;
      }

      ;
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
  }, {
    key: "centeredHandelByValueScale",
    value: function centeredHandelByValueScale(target, value, positions, minimum) {
      if (target === 'min') {
        var min = String((this.sliderRange.offsetWidth - this.min.offsetWidth) / +positions * (+value - +minimum));

        if (+min < 0) {
          min = '0';
        } else if (+min > this.sliderRange.offsetWidth - this.min.offsetWidth) {
          min = String(this.sliderRange.offsetWidth - this.min.offsetWidth);
        }

        ;
        this.min.style.left = min + 'px';
        this.interval.style.left = +min + this.min.offsetWidth / 2 + 'px';
      } else if (target === 'max') {
        var max = String((this.sliderRange.offsetWidth - this.max.offsetWidth) / +positions * (+value - +minimum));

        if (+max <= +this.currentHandelsPositions.min.min + this.min.offsetWidth) {
          max = String(+this.currentHandelsPositions.min.min + this.max.offsetWidth);
        } else if (+max > this.sliderRange.offsetWidth - this.min.offsetWidth) {
          max = String(this.sliderRange.offsetWidth - this.min.offsetWidth);
        }

        ;
        this.max.style.left = max + 'px';
        this.interval.style.right = this.sliderRange.offsetWidth - +max - this.min.offsetWidth / 2 + 'px';
      }

      ;
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

/***/ "./src/components/view/components/value-scale.ts":
/*!*******************************************************!*\
  !*** ./src/components/view/components/value-scale.ts ***!
  \*******************************************************/
/*! exports provided: ValueScale */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValueScale", function() { return ValueScale; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ValueScale = /*#__PURE__*/function () {
  function ValueScale() {
    _classCallCheck(this, ValueScale);

    _defineProperty(this, "valueScale15", void 0);

    _defineProperty(this, "valueScale30", void 0);

    _defineProperty(this, "valueScale50", void 0);

    _defineProperty(this, "valueScale70", void 0);

    _defineProperty(this, "valueScale85", void 0);

    var value15 = document.createElement('label');
    var value30 = document.createElement('label');
    var value50 = document.createElement('label');
    var value70 = document.createElement('label');
    var value85 = document.createElement('label');
    value15.classList.add('customSlider__valueScalelabel', 'customSlider__valueScalelabel_15');
    value30.classList.add('customSlider__valueScalelabel', 'customSlider__valueScalelabel_30');
    value50.classList.add('customSlider__valueScalelabel', 'customSlider__valueScalelabel_50');
    value70.classList.add('customSlider__valueScalelabel', 'customSlider__valueScalelabel_70');
    value85.classList.add('customSlider__valueScalelabel', 'customSlider__valueScalelabel_85');
    this.valueScale15 = value15;
    this.valueScale30 = value30;
    this.valueScale50 = value50;
    this.valueScale70 = value70;
    this.valueScale85 = value85;
  }

  _createClass(ValueScale, [{
    key: "refreshValues",
    value: function refreshValues(values) {
      this.valueScale15.innerText = values['15'];
      this.valueScale30.innerText = values['30'];
      this.valueScale50.innerText = values['50'];
      this.valueScale70.innerText = values['70'];
      this.valueScale85.innerText = values['85'];
    }
  }, {
    key: "centersValuesPositions",
    value: function centersValuesPositions(slider, handel) {
      this.valueScale15.style.right = (slider.offsetWidth - handel.offsetWidth) * 0.85 - this.valueScale15.offsetWidth / 2 + handel.offsetWidth / 2 + 'px';
      this.valueScale85.style.left = (slider.offsetWidth - handel.offsetWidth) * 0.85 - this.valueScale85.offsetWidth / 2 + handel.offsetWidth / 2 + 'px';
      this.valueScale30.style.right = (slider.offsetWidth - handel.offsetWidth) * 0.70 - this.valueScale30.offsetWidth / 2 + handel.offsetWidth / 2 + 'px';
      this.valueScale70.style.left = (slider.offsetWidth - handel.offsetWidth) * 0.70 - this.valueScale70.offsetWidth / 2 + handel.offsetWidth / 2 + 'px';
      this.valueScale50.style.left = (slider.offsetWidth - handel.offsetWidth) * 0.50 - this.valueScale50.offsetWidth / 2 + handel.offsetWidth / 2 + 'px';
    }
  }, {
    key: "displayController",
    value: function displayController(toggle) {
      if (toggle.checked === true) {
        this.valueScale15.style.display = 'inline';
        this.valueScale30.style.display = 'inline';
        this.valueScale50.style.display = 'inline';
        this.valueScale70.style.display = 'inline';
        this.valueScale85.style.display = 'inline';
      } else {
        this.valueScale15.style.display = 'none';
        this.valueScale30.style.display = 'none';
        this.valueScale50.style.display = 'none';
        this.valueScale70.style.display = 'none';
        this.valueScale85.style.display = 'none';
      }

      ;
    }
  }, {
    key: "repositionsAfterChangePlane",
    value: function repositionsAfterChangePlane(planeToggle) {
      if (planeToggle === true) {
        this.valueScale15.classList.add('customSlider__valueScalelabel_15Vertical');
        this.valueScale30.classList.add('customSlider__valueScalelabel_30Vertical');
        this.valueScale50.classList.add('customSlider__valueScalelabel_50Vertical');
        this.valueScale70.classList.add('customSlider__valueScalelabel_70Vertical');
        this.valueScale85.classList.add('customSlider__valueScalelabel_85Vertical');
      } else {
        this.valueScale15.classList.remove('customSlider__valueScalelabel_15Vertical');
        this.valueScale30.classList.remove('customSlider__valueScalelabel_30Vertical');
        this.valueScale50.classList.remove('customSlider__valueScalelabel_50Vertical');
        this.valueScale70.classList.remove('customSlider__valueScalelabel_70Vertical');
        this.valueScale85.classList.remove('customSlider__valueScalelabel_85Vertical');
      }

      ;
    }
  }]);

  return ValueScale;
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
/* harmony import */ var _components_value_scale__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/value-scale */ "./src/components/view/components/value-scale.ts");
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

    _defineProperty(this, "valueScale", void 0);

    _defineProperty(this, "sideMenu", void 0);

    _defineProperty(this, "handelToggle", void 0);

    _defineProperty(this, "handelLabelToggle", void 0);

    _defineProperty(this, "planeToggle", void 0);

    _defineProperty(this, "valueScaleToggle", void 0);

    _defineProperty(this, "minInput", void 0);

    _defineProperty(this, "maxInput", void 0);

    _defineProperty(this, "minSliderValueOutput", void 0);

    _defineProperty(this, "maxSliderValueOutput", void 0);

    _defineProperty(this, "dataRequestStatus", {
      "startHandelsPosition": false,
      "getMaxData": false,
      "getMinPositionsAmount": false,
      "getMaxPositionsAmount": false,
      "getPossibleRange": false,
      "getStepPositionsAmount": false,
      "getValuesForValueScale": false,
      "selectHandleForValueScale": ''
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
      this.valueScaleToggle = sideMenu.valueScaleToggle;
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
    this.valueScale = new _components_value_scale__WEBPACK_IMPORTED_MODULE_7__["ValueScale"]();
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
      this.sliderRange.append(this.valueScale.valueScale15, this.valueScale.valueScale30, this.valueScale.valueScale50, this.valueScale.valueScale70, this.valueScale.valueScale85);
      this.dataRequestStatus["getValuesForValueScale"] = true;
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
          this.valueScale.repositionsAfterChangePlane(this.planeToggle.checked);
        } else {
          this.sliderMovement.changePlane(true, this.sliderContainer, this.minValue, this.maxValue);
          this.valueScale.repositionsAfterChangePlane(true);
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

      if (this.settings.valueScale === true && this.valueScaleToggle) {
        this.valueScaleToggle.checked = true;
      } else {
        this.valueScaleToggle ? this.valueScale.displayController(this.valueScaleToggle) : false;
      }

      ;
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

      if (this.settings['side-menu'] === true && this.valueScaleToggle) {
        this.valueScaleToggle.addEventListener('change', this.makeBindForValueScaleToggle.bind(this));
      }

      ;
      this.valueScale.valueScale15.addEventListener('click', this.makeBindForValueScale.bind(this, this.valueScale.valueScale15));
      this.valueScale.valueScale30.addEventListener('click', this.makeBindForValueScale.bind(this, this.valueScale.valueScale30));
      this.valueScale.valueScale50.addEventListener('click', this.makeBindForValueScale.bind(this, this.valueScale.valueScale50));
      this.valueScale.valueScale70.addEventListener('click', this.makeBindForValueScale.bind(this, this.valueScale.valueScale70));
      this.valueScale.valueScale85.addEventListener('click', this.makeBindForValueScale.bind(this, this.valueScale.valueScale85));
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
    key: "makeBindForValueScaleToggle",
    value: function makeBindForValueScaleToggle() {
      this.valueScaleToggle ? this.valueScale.displayController(this.valueScaleToggle) : false;
    }
  }, {
    key: "makeBindForPlaneToggle",
    value: function makeBindForPlaneToggle() {
      this.planeToggle ? this.sliderMovement.changePlane(this.planeToggle, this.sliderContainer, this.minValue, this.maxValue) : false;
      this.planeToggle ? this.valueScale.repositionsAfterChangePlane(this.planeToggle.checked) : false;
    }
  }, {
    key: "makeBindForSelectionMinValue",
    value: function makeBindForSelectionMinValue() {
      this.sliderMovement.selectionOfPreparedValue('min');
    }
  }, {
    key: "makeBindForValueScale",
    value: function makeBindForValueScale(element) {
      if (element.textContent) {
        var val = element.textContent;
        this.dataRequestStatus['selectHandleForValueScale'] = val;
      }

      ;
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
      'valueScale': false,
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
    view.bindEventListeners();
    view.displayElements();
    view.bindEventHandelsMovement();
  };
})(jQuery);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwvZmFjYWRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGVsL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRlci9wcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL2hhbmRlbHMtbGFiZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9oYW5kZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9zZWxlY3RlZC1yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NvbXBvbmVudHMvc2lkZS1tZW51LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9zbGlkZXItbW92ZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL3NsaWRlci1yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NvbXBvbmVudHMvdmFsdWUtc2NhbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL3ZhbHVlUmFuZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy92aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9qcXVlcnkudWkuY3VzdG9tU2xpZGVyLnRzIl0sIm5hbWVzIjpbIkZhY2FkZSIsIm1vZGVsIiwiZ2V0Q3VycmVudERhdGEiLCJkYXRhIiwicHJvcCIsIlN0cmluZyIsIk1hdGgiLCJyb3VuZCIsIm1heCIsIm1pbiIsInZhbHVlIiwiZG91YmxlVG9nZ2xlIiwibWluRGlmZmVyZW5jZSIsIm1heERpZmZlcmVuY2UiLCJjaGVja2VkIiwiTW9kZWwiLCJzZXR0aW5ncyIsIk9iamVjdCIsImFzc2lnbiIsIlByZXNlbnRlciIsInZpZXciLCJmYWNhZGUiLCJ2aWV3TGluayIsImZhY2FkZUxpbmsiLCJtb25pdG9yc0N1cnJlbnRIYW5kZWxzUG9zaXRpb25zIiwibW9uaXRvcnNWaWV3UmVxdWVzdHMiLCJzbGlkZXJNb3ZlbWVudCIsImN1cnJlbnRIYW5kZWxzUG9zaXRpb25zIiwiUHJveHkiLCJzZXQiLCJ0YXJnZXQiLCJ2YWwiLCJtb2RlbFJlc3VsdCIsInJlZnJlc2hNb2RlbERhdGEiLCJyZWZyZXNoQ3VycmVudFZhbHVlcyIsImRhdGFSZXF1ZXN0U3RhdHVzIiwicmVzdWx0IiwiZ2V0TWF4RGF0YSIsInJlZnJlc2hNYXhTaWRlTWVudURhdGEiLCJwb3NpdGlvbnMiLCJnZXRQb3NpdGlvbnNBbW91bnQiLCJtaW5JbnB1dCIsInNpZGVNZW51SW5wdXRzVmFsdWVzVmFsaWRhdGlvbkNoZWNrZXIiLCJtYXhJbnB1dCIsInBvc3NpYmxlUmFuZ2UiLCJnZXRQb3NzaWJsZVJhbmdlIiwiaW5wdXRzUG9zc2libGVSYW5nZSIsInN0YXJ0UG9zaXRpb25zIiwic3RhcnRIYW5kZWxzUG9zaXRpb24iLCJzdGFydEhhbmRsZXJzUG9zaXRpb25zIiwic3RlcEFtb3VudCIsInZhbHVlU2NhbGVWYWx1ZXMiLCJnZXRWYWx1ZXNGb3JWYWx1ZVNjYWxlIiwidmFsdWVTY2FsZSIsInJlZnJlc2hWYWx1ZXMiLCJjZW50ZXJzVmFsdWVzUG9zaXRpb25zIiwic2xpZGVyUmFuZ2UiLCJtaW5IYW5kZWwiLCJzZWxlY3RlZEhhbmRlbCIsInNlbGVjdEhhbmRsZUZvclZhbHVlU2NhbGUiLCJoYW5kZWxUb2dnbGUiLCJjZW50ZXJlZEhhbmRlbEJ5VmFsdWVTY2FsZSIsImFkYXB0ZWRPYmplY3RGb3JSZWZyZXNoIiwiSGFuZGVsc0xhYmVscyIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsIm1pbkxhYmVsIiwibWF4TGFiZWwiLCJ0b2dnbGUiLCJzdHlsZSIsImRpc3BsYXkiLCJtaW5IYW5kZWxXaWR0aCIsIm1heEhhbmRlbFdpZHRoIiwibWluTGFiZWxXaWR0aCIsIm1heExhYmVsV2lkdGgiLCJsZWZ0IiwiSGFuZGVscyIsIm1heEhhbmRlbCIsIlNlbGVjdGVkUmFuZ2UiLCJpbnRlcnZhbCIsIlNpZGVNZW51Iiwic2xpZGVyVmFsdWVQIiwiaW5uZXJUZXh0IiwibWluU2xpZGVyVmFsdWVPdXRwdXQiLCJpZCIsIm1heFNsaWRlclZhbHVlT3V0cHV0Iiwic2xpZGVyVG9nZ2xlUCIsInNsaWRlclRvZ2dsZUxhYmVsIiwibWF4U2xpZGVySGFuZGVsVG9nZ2xlIiwic2V0QXR0cmlidXRlIiwiY3VzdG9tU2xpZGVyQm9yZGVyIiwiY3VzdG9tU2xpZGVySW5wdXRzIiwiY3VzdG9tU2xpZGVySW5wdXRzUCIsImN1c3RvbVNsaWRlcklucHV0c01pbkxhYmVsIiwiY3VzdG9tU2xpZGVySW5wdXRzTWF4TGFiZWwiLCJjdXN0b21TbGlkZXJJbnB1dHNNaW4iLCJjdXN0b21TbGlkZXJJbnB1dHNNYXgiLCJ0b2dnbGVGb3JWYWx1ZXNDb250YWluZXIiLCJ0b2dnbGVGb3JWYWx1ZXNQIiwidG9nZ2xlRm9yVmFsdWVzTGFiZWwiLCJ0b2dnbGVGb3JWYWx1ZXNJbnB1dCIsInRvZ2dsZUZvclZhbHVlc1NwYW4iLCJzdGVwQ29udGFpbmVyIiwic3RlcElucHV0UCIsImZvclN0ZXBJbnB1dExhYmVsIiwic3RlcElucHV0IiwidmFsdWVTY2FsZUNvbnRhaW5lciIsInRvZ2dsZUZvclZhbHVlU2NhbGVQIiwidG9nZ2xlRm9yVmFsdWVTY2FsZUxhYmVsIiwidG9nZ2xlRm9yVmFsdWVTY2FsZUlucHV0IiwidG9nZ2xlRm9yVmFsdWVTY2FsZVNwYW4iLCJ0b2dnbGVGb3JQbGFuZUNvbnRhaW5lciIsInRvZ2dsZUZvclBsYW5lUCIsInRvZ2dsZUZvclBsYW5lTGFiZWwiLCJ0b2dnbGVGb3JQbGFuZUlucHV0IiwidG9nZ2xlRm9yUGxhbmVTcGFuIiwibWFpblNsaWRlckNvbnRhaW5lciIsImFwcGVuZCIsImN1c3RvbVNsaWRlck1lbnVDb250YWluZXIiLCJoYW5kZWxMYWJlbFRvZ2dsZSIsInBsYW5lVG9nZ2xlIiwidmFsdWVTY2FsZVRvZ2dsZSIsIlNsaWRlck1vdmVtZW50IiwiaGFuZGVscyIsImhhbmRlbHNUb2dnbGUiLCJzdGVwIiwicG9zaXRpb25WYWx1ZXMiLCJvZmZzZXRXaWR0aCIsInJpZ2h0IiwiZXZlbnQiLCJ0ZXN0IiwidGhhdCIsInNoaWZ0IiwidmVydGljYWwiLCJkb3VibGVIYW5kZWxzIiwiY2hlY2tDdXJyZW50U2xpZGVyU2V0dGluZ3MiLCJjbGllbnRZIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiY2xpZW50WCIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsIm5ld0xlZnQiLCJyaWdodEVkZ2UiLCJyZW5ld2FsT2ZQb3NpdGlvbiIsInVuZGVmaW5lZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJib2R5IiwibWluVmFsdWUiLCJtYXhWYWx1ZSIsInRvZ2dsZVJlc3VsdCIsImhlaWdodCIsInRyYW5zZm9ybSIsInJlbW92ZSIsIm1pbmltdW0iLCJTbGlkZXJSYW5nZSIsImVsZW0iLCJyYW5nZSIsIlZhbHVlU2NhbGUiLCJ2YWx1ZTE1IiwidmFsdWUzMCIsInZhbHVlNTAiLCJ2YWx1ZTcwIiwidmFsdWU4NSIsInZhbHVlU2NhbGUxNSIsInZhbHVlU2NhbGUzMCIsInZhbHVlU2NhbGU1MCIsInZhbHVlU2NhbGU3MCIsInZhbHVlU2NhbGU4NSIsInZhbHVlcyIsInNsaWRlciIsImhhbmRlbCIsIlZhbHVlUmFuZ2UiLCJWaWV3IiwiZ2V0RWxlbWVudHMiLCJ2YWx1ZVJhbmdlIiwic2lkZU1lbnUiLCJzaWRlTWVudUNvbnRhaW5lciIsImhhbmRlbHNMYWJlbHMiLCJzbGlkZXJDb250YWluZXIiLCJvZmZzZXRIZWlnaHQiLCJxdWVyeVNlbGVjdG9yQWxsIiwib3BhY2l0eSIsImNoYW5nZVBsYW5lIiwicmVwb3NpdGlvbnNBZnRlckNoYW5nZVBsYW5lIiwiZGlzcGxheUNvbnRyb2xsZXIiLCJtYWtlQmluZExhYmVsVG9nZ2xlIiwiYmluZCIsIm1ha2VCaW5kSGFuZGVsVG9nZ2xlIiwibWFrZUJpbmRGb3JQbGFuZVRvZ2dsZSIsIm1ha2VCaW5kRm9yU2VsZWN0aW9uTWluVmFsdWUiLCJtYWtlQmluZEZvclNlbGVjdGlvbk1heFZhbHVlIiwibWFrZUJpbmRGb3JNaW5JbnB1dCIsIm1ha2VCaW5kRm9yTWF4SW5wdXQiLCJtYWtlQmluZEZvclZhbHVlU2NhbGVUb2dnbGUiLCJtYWtlQmluZEZvclZhbHVlU2NhbGUiLCJiaW5kRm9yTWluIiwiYmluZEZvck1heCIsIm5ld0RhdGEiLCJjaGVja1VuZGVmaW5lZFN0cmluZ3MiLCJ0ZXh0Q29udGVudCIsImNlbnRlcmluZ1JlbGF0aXZlVG9IYW5kbGVzIiwicmVtb3ZlQXR0cmlidXRlIiwib25tb3VzZWRvd24iLCJtaW5IYW5kZWxMaXN0ZW5lciIsIm1heEhhbmRlbExpc3RlbmVyIiwiY2FsbEhhbmRlbExhYmVsVG9nZ2xlQ2hhbmdlciIsImNhbGxNYXhIYW5kZWxUb2dnbGVDaGFuZ2VyIiwic2VsZWN0aW9uT2ZQcmVwYXJlZFZhbHVlIiwiZWxlbWVudCIsIiQiLCJmbiIsInRlc3RTbGlkZXIiLCJvcHRpb25zIiwiZXh0ZW5kIiwicHJlc2VudGVyIiwic3RhcnRWaWV3TW9uaXRvcmluZyIsImJpbmRFdmVudExpc3RlbmVycyIsImRpc3BsYXlFbGVtZW50cyIsImJpbmRFdmVudEhhbmRlbHNNb3ZlbWVudCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUM7QUFLQTtBQVFBO0FBWU0sSUFBTUEsTUFBYjtBQUdFLGtCQUFhQyxLQUFiLEVBQTJCO0FBQUE7O0FBQUE7O0FBQ3pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOztBQUxIO0FBQUE7QUFBQSwyQ0FPK0M7QUFDM0MsYUFBTyxLQUFLQSxLQUFMLENBQVdDLGNBQVgsRUFBUDtBQUNEO0FBVEg7QUFBQTtBQUFBLHFDQVdtQkMsSUFYbkIsRUFXc0NDLElBWHRDLEVBVzREO0FBQ3hELFVBQUlBLElBQUksS0FBSyxLQUFiLEVBQW9CO0FBQ2xCLGFBQUtILEtBQUwsQ0FBV0UsSUFBWCxDQUFnQixhQUFoQixJQUFpQ0UsTUFBTSxDQUFDQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFDLEtBQUtOLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQixLQUFoQixDQUFELEdBQTJCLENBQUNBLElBQUksQ0FBQyxLQUFELENBQUwsSUFBZ0IsQ0FBQ0EsSUFBSSxDQUFDLGFBQUQsQ0FBTCxJQUF3QixDQUFDLEtBQUtGLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQixLQUFoQixDQUFELEdBQTBCLENBQUMsS0FBS0YsS0FBTCxDQUFXRSxJQUFYLENBQWdCLEtBQWhCLENBQW5ELENBQWhCLENBQXRDLENBQUQsQ0FBdkM7QUFDQSxlQUFPO0FBQUUsaUJBQU8sS0FBS0YsS0FBTCxDQUFXRSxJQUFYLENBQWdCLGFBQWhCO0FBQVQsU0FBUDtBQUNELE9BSEQsTUFHTztBQUNMLGFBQUtGLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQixhQUFoQixJQUFpQ0UsTUFBTSxDQUFDQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFDLEtBQUtOLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQixLQUFoQixDQUFELEdBQTJCLENBQUNBLElBQUksQ0FBQyxLQUFELENBQUwsSUFBZ0IsQ0FBQ0EsSUFBSSxDQUFDLGFBQUQsQ0FBTCxJQUF3QixDQUFDLEtBQUtGLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQixLQUFoQixDQUFELEdBQTBCLENBQUMsS0FBS0YsS0FBTCxDQUFXRSxJQUFYLENBQWdCLEtBQWhCLENBQW5ELENBQWhCLENBQXRDLENBQUQsQ0FBdkM7QUFDQSxlQUFPO0FBQUUsaUJBQU8sS0FBS0YsS0FBTCxDQUFXRSxJQUFYLENBQWdCLGFBQWhCO0FBQVQsU0FBUDtBQUNEOztBQUFBO0FBQ0Y7QUFuQkg7QUFBQTtBQUFBLG1DQXFCeUI7QUFDckIsYUFBTztBQUFFLGVBQU8sS0FBS0YsS0FBTCxDQUFXRSxJQUFYLENBQWdCLGFBQWhCLENBQVQ7QUFBeUMsZUFBTyxLQUFLRixLQUFMLENBQVdFLElBQVgsQ0FBZ0IsYUFBaEI7QUFBaEQsT0FBUDtBQUNEO0FBdkJIO0FBQUE7QUFBQSxpQ0F5QnVCO0FBQ25CLGFBQU8sQ0FBQyxLQUFLRixLQUFMLENBQVdFLElBQVgsQ0FBZ0IsS0FBaEIsQ0FBUjtBQUNEO0FBM0JIO0FBQUE7QUFBQSx1Q0E2QnVDO0FBQ25DLGFBQU87QUFBQyxlQUFNLEtBQUtGLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQkssR0FBdkI7QUFBNEIsZUFBTyxLQUFLUCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JNO0FBQW5ELE9BQVA7QUFDRDtBQS9CSDtBQUFBO0FBQUEseUNBaUMyQztBQUN2QyxhQUFPO0FBQUMscUJBQWFKLE1BQU0sQ0FBQyxDQUFDLEtBQUtKLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQkssR0FBakIsR0FBdUIsQ0FBQyxLQUFLUCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JNLEdBQXpDLENBQXBCO0FBQW1FLG1CQUFXLEtBQUtSLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQk07QUFBOUYsT0FBUDtBQUNEO0FBbkNIO0FBQUE7QUFBQSw2Q0FxQ21EO0FBQy9DLGFBQU87QUFDTCxjQUFNSixNQUFNLENBQUMsQ0FBQyxLQUFLSixLQUFMLENBQVdFLElBQVgsQ0FBZ0JNLEdBQWpCLEdBQXdCLENBQUMsQ0FBQyxLQUFLUixLQUFMLENBQVdFLElBQVgsQ0FBZ0JLLEdBQWpCLEdBQXVCLENBQUMsS0FBS1AsS0FBTCxDQUFXRSxJQUFYLENBQWdCTSxHQUF6QyxJQUFnRCxJQUF6RSxDQURQO0FBRUwsY0FBTUosTUFBTSxDQUFDLENBQUMsS0FBS0osS0FBTCxDQUFXRSxJQUFYLENBQWdCTSxHQUFqQixHQUF3QixDQUFDLENBQUMsS0FBS1IsS0FBTCxDQUFXRSxJQUFYLENBQWdCSyxHQUFqQixHQUF1QixDQUFDLEtBQUtQLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQk0sR0FBekMsSUFBZ0QsSUFBekUsQ0FGUDtBQUdMLGNBQU1KLE1BQU0sQ0FBQyxDQUFDLEtBQUtKLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQk0sR0FBakIsR0FBd0IsQ0FBQyxDQUFDLEtBQUtSLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQkssR0FBakIsR0FBdUIsQ0FBQyxLQUFLUCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JNLEdBQXpDLElBQWdELElBQXpFLENBSFA7QUFJTCxjQUFNSixNQUFNLENBQUMsQ0FBQyxLQUFLSixLQUFMLENBQVdFLElBQVgsQ0FBZ0JNLEdBQWpCLEdBQXdCLENBQUMsQ0FBQyxLQUFLUixLQUFMLENBQVdFLElBQVgsQ0FBZ0JLLEdBQWpCLEdBQXVCLENBQUMsS0FBS1AsS0FBTCxDQUFXRSxJQUFYLENBQWdCTSxHQUF6QyxJQUFnRCxJQUF6RSxDQUpQO0FBS0wsY0FBTUosTUFBTSxDQUFDLENBQUMsS0FBS0osS0FBTCxDQUFXRSxJQUFYLENBQWdCTSxHQUFqQixHQUF3QixDQUFDLENBQUMsS0FBS1IsS0FBTCxDQUFXRSxJQUFYLENBQWdCSyxHQUFqQixHQUF1QixDQUFDLEtBQUtQLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQk0sR0FBekMsSUFBZ0QsSUFBekU7QUFMUCxPQUFQO0FBT0Q7QUE3Q0g7QUFBQTtBQUFBLDhDQStDNEJDLEtBL0M1QixFQStDMkNDLFlBL0MzQyxFQStDc0c7QUFDbEcsVUFBSUMsYUFBSjtBQUNBLFVBQUlDLGFBQUo7O0FBQ0EsVUFBR0YsWUFBWSxDQUFDRyxPQUFoQixFQUF5QjtBQUN2QixZQUFJLENBQUMsS0FBS2IsS0FBTCxDQUFXRSxJQUFYLENBQWdCLGFBQWhCLENBQUQsR0FBa0MsQ0FBQ08sS0FBbkMsSUFBNEMsQ0FBQyxLQUFLVCxLQUFMLENBQVdFLElBQVgsQ0FBZ0IsYUFBaEIsQ0FBRCxLQUFvQyxDQUFDTyxLQUFyRixFQUE0RjtBQUMxRkUsdUJBQWEsR0FBR1AsTUFBTSxDQUFDLENBQUMsS0FBS0osS0FBTCxDQUFXRSxJQUFYLENBQWdCLGFBQWhCLENBQUQsR0FBa0MsQ0FBQ08sS0FBcEMsQ0FBdEI7QUFDRCxTQUZELE1BRU87QUFDTEUsdUJBQWEsR0FBR1AsTUFBTSxDQUFDLENBQUNLLEtBQUQsR0FBUyxDQUFDLEtBQUtULEtBQUwsQ0FBV0UsSUFBWCxDQUFnQixhQUFoQixDQUFYLENBQXRCO0FBQ0Q7O0FBQUE7O0FBRUQsWUFBSSxDQUFDLEtBQUtGLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQixhQUFoQixDQUFELEdBQWtDLENBQUNPLEtBQW5DLElBQTRDLENBQUMsS0FBS1QsS0FBTCxDQUFXRSxJQUFYLENBQWdCLGFBQWhCLENBQUQsS0FBb0MsQ0FBQ08sS0FBckYsRUFBNkY7QUFDM0ZHLHVCQUFhLEdBQUdSLE1BQU0sQ0FBQyxDQUFDLEtBQUtKLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQixhQUFoQixDQUFELEdBQWtDLENBQUNPLEtBQXBDLENBQXRCO0FBQ0QsU0FGRCxNQUVPO0FBQ0xHLHVCQUFhLEdBQUdSLE1BQU0sQ0FBQyxDQUFDSyxLQUFELEdBQVMsQ0FBQyxLQUFLVCxLQUFMLENBQVdFLElBQVgsQ0FBZ0IsYUFBaEIsQ0FBWCxDQUF0QjtBQUNEOztBQUFBOztBQUVELFlBQUcsQ0FBQ1MsYUFBRCxHQUFpQixDQUFDQyxhQUFsQixJQUFtQyxDQUFDRCxhQUFELElBQWtCLENBQUNDLGFBQXpELEVBQXdFO0FBQ3RFLGVBQUtaLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQixhQUFoQixJQUFpQ08sS0FBakM7QUFDQSxpQkFBTztBQUNMLHNCQUFVLEtBREw7QUFFTCxxQkFBU0E7QUFGSixXQUFQO0FBSUQsU0FORCxNQU1PO0FBQ0wsZUFBS1QsS0FBTCxDQUFXRSxJQUFYLENBQWdCLGFBQWhCLElBQWlDTyxLQUFqQztBQUNBLGlCQUFPO0FBQ0wsc0JBQVUsS0FETDtBQUVMLHFCQUFTQTtBQUZKLFdBQVA7QUFJRDs7QUFBQTtBQUNGLE9BMUJELE1BMEJPO0FBRUwsYUFBS1QsS0FBTCxDQUFXRSxJQUFYLENBQWdCLGFBQWhCLElBQWlDTyxLQUFqQztBQUNBLGVBQU87QUFDTCxvQkFBVSxLQURMO0FBRUwsbUJBQVNBO0FBRkosU0FBUDtBQUtEOztBQUFBO0FBQ0Y7QUFyRkg7O0FBQUE7QUFBQTtBQXNGQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakdNLElBQU1LLEtBQWI7QUFJRSxpQkFBYUMsUUFBYixFQUE0QztBQUFBOztBQUFBOztBQUMxQyxTQUFLYixJQUFMLEdBQVljLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JGLFFBQWxCLENBQVo7QUFDRDs7QUFOSDtBQUFBO0FBQUEscUNBUXlDO0FBQ3JDLGFBQU87QUFBQyxtQkFBVyxLQUFLYixJQUFMLENBQVVNLEdBQXRCO0FBQTJCLGVBQU8sS0FBS04sSUFBTCxDQUFVLGFBQVYsQ0FBbEM7QUFBNEQsZUFBTyxLQUFLQSxJQUFMLENBQVUsYUFBVixDQUFuRTtBQUE2RiwrQkFBZ0IsQ0FBQyxLQUFLQSxJQUFMLENBQVVLLEdBQVgsR0FBaUIsQ0FBQyxLQUFLTCxJQUFMLENBQVVNLEdBQTVDO0FBQTdGLE9BQVA7QUFDRDtBQVZIOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWk8sSUFBTVUsU0FBYjtBQUtFLHFCQUFhQyxJQUFiLEVBQXlCQyxNQUF6QixFQUF5QztBQUFBOztBQUFBOztBQUFBOztBQUN2QyxTQUFLQyxRQUFMLEdBQWdCRixJQUFoQjtBQUNBLFNBQUtHLFVBQUwsR0FBa0JGLE1BQWxCO0FBQ0Q7O0FBUkg7QUFBQTtBQUFBLDBDQVU4QjtBQUMxQixXQUFLRywrQkFBTDtBQUNBLFdBQUtDLG9CQUFMO0FBQ0Q7QUFiSDtBQUFBO0FBQUEsc0RBZTBDO0FBQ3RDLFVBQUlMLElBQUksR0FBRyxLQUFLRSxRQUFoQjtBQUNBLFVBQUlELE1BQU0sR0FBRyxLQUFLRSxVQUFsQjtBQUVBSCxVQUFJLENBQUNNLGNBQUwsQ0FBb0JDLHVCQUFwQixHQUE4QyxJQUFJQyxLQUFKLENBQVVSLElBQUksQ0FBQ00sY0FBTCxDQUFvQkMsdUJBQTlCLEVBQXVEO0FBQ25HRSxXQURtRyxlQUMvRkMsTUFEK0YsRUFDdkYxQixJQUR1RixFQUNqRjJCLEdBRGlGLEVBQzVFO0FBQ3JCLGNBQUcsUUFBT0EsR0FBUCxNQUFlLFFBQWxCLEVBQTRCO0FBQzFCRCxrQkFBTSxDQUFDekIsTUFBTSxDQUFDRCxJQUFELENBQVAsQ0FBTixHQUF1QjJCLEdBQXZCO0FBQ0EsZ0JBQUlDLFdBQVcsR0FBR1gsTUFBTSxDQUFDWSxnQkFBUCxDQUF3QkYsR0FBeEIsRUFBNkIxQixNQUFNLENBQUNELElBQUQsQ0FBbkMsQ0FBbEI7QUFDQWdCLGdCQUFJLENBQUNjLG9CQUFMLENBQTBCRixXQUExQjtBQUNBLG1CQUFPLElBQVA7QUFDRCxXQUxELE1BS087QUFDTCxtQkFBTyxLQUFQO0FBQ0Q7O0FBQUE7QUFDRjtBQVZrRyxPQUF2RCxDQUE5QztBQWFEO0FBaENIO0FBQUE7QUFBQSwyQ0FrQytCO0FBQzNCLFVBQUlaLElBQUksR0FBRyxLQUFLRSxRQUFoQjtBQUNBLFVBQUlELE1BQU0sR0FBRyxLQUFLRSxVQUFsQjtBQUVBSCxVQUFJLENBQUNlLGlCQUFMLEdBQXlCLElBQUlQLEtBQUosQ0FBVVIsSUFBSSxDQUFDZSxpQkFBZixFQUFrQztBQUN6RE4sV0FEeUQsZUFDckRDLE1BRHFELEVBQzdDMUIsSUFENkMsRUFDdkMyQixHQUR1QyxFQUNsQztBQUNyQixjQUFHLE9BQU9BLEdBQVAsS0FBZSxTQUFmLElBQTRCLE9BQU9BLEdBQVAsS0FBZSxRQUE5QyxFQUF3RDtBQUV0RCxnQkFBRzNCLElBQUksS0FBSyxZQUFaLEVBQTBCO0FBQ3hCLGtCQUFJZ0MsTUFBYyxHQUFHZixNQUFNLENBQUNnQixVQUFQLEVBQXJCO0FBQ0FqQixrQkFBSSxDQUFDa0Isc0JBQUwsQ0FBNEJGLE1BQTVCO0FBQ0Q7O0FBQUE7O0FBRUQsZ0JBQUdoQyxJQUFJLEtBQUssdUJBQVosRUFBcUM7QUFDbkMsa0JBQUltQyxTQUE2QixHQUFHbEIsTUFBTSxDQUFDbUIsa0JBQVAsRUFBcEM7QUFFQXBCLGtCQUFJLENBQUNxQixRQUFMLEdBQWdCckIsSUFBSSxDQUFDTSxjQUFMLENBQW9CZ0IscUNBQXBCLENBQTBELEtBQTFELEVBQWlFLENBQUN0QixJQUFJLENBQUNxQixRQUFMLENBQWMvQixLQUFoRixFQUF1RixDQUFDNkIsU0FBUyxDQUFDLFdBQUQsQ0FBakcsRUFBZ0gsQ0FBQ0EsU0FBUyxDQUFDLFNBQUQsQ0FBMUgsQ0FBaEIsR0FBeUosS0FBeko7QUFDRDs7QUFBQTs7QUFFRCxnQkFBR25DLElBQUksS0FBSyx1QkFBWixFQUFxQztBQUNuQyxrQkFBSW1DLFVBQTZCLEdBQUdsQixNQUFNLENBQUNtQixrQkFBUCxFQUFwQzs7QUFDQXBCLGtCQUFJLENBQUN1QixRQUFMLEdBQWdCdkIsSUFBSSxDQUFDTSxjQUFMLENBQW9CZ0IscUNBQXBCLENBQTBELEtBQTFELEVBQWlFLENBQUN0QixJQUFJLENBQUN1QixRQUFMLENBQWNqQyxLQUFoRixFQUF1RixDQUFDNkIsVUFBUyxDQUFDLFdBQUQsQ0FBakcsRUFBZ0gsQ0FBQ0EsVUFBUyxDQUFDLFNBQUQsQ0FBMUgsQ0FBaEIsR0FBeUosS0FBeko7QUFDRDs7QUFBQTs7QUFFRCxnQkFBR25DLElBQUksS0FBSyxrQkFBWixFQUFnQztBQUM5QixrQkFBSXdDLGFBQStCLEdBQUd2QixNQUFNLENBQUN3QixnQkFBUCxFQUF0QztBQUNBekIsa0JBQUksQ0FBQ3FCLFFBQUwsSUFBaUJyQixJQUFJLENBQUN1QixRQUF0QixHQUFnQ3ZCLElBQUksQ0FBQzBCLG1CQUFMLENBQXlCRixhQUF6QixFQUF3Q3hCLElBQUksQ0FBQ3FCLFFBQTdDLEVBQXVEckIsSUFBSSxDQUFDdUIsUUFBNUQsQ0FBaEMsR0FBd0csS0FBeEc7QUFDRDs7QUFBQTs7QUFFRCxnQkFBR3ZDLElBQUksS0FBSyxzQkFBWixFQUFvQztBQUNsQyxrQkFBSTJDLGNBQW9DLEdBQUcxQixNQUFNLENBQUMyQixvQkFBUCxFQUEzQztBQUNBNUIsa0JBQUksQ0FBQ00sY0FBTCxDQUFvQnVCLHNCQUFwQixDQUEyQ0YsY0FBM0M7QUFDQTNCLGtCQUFJLENBQUNjLG9CQUFMLENBQTBCYSxjQUExQjtBQUNEOztBQUFBOztBQUVELGdCQUFHM0MsSUFBSSxLQUFLLHdCQUFaLEVBQXNDO0FBQ3BDLGtCQUFJOEMsVUFBOEIsR0FBRzdCLE1BQU0sQ0FBQ21CLGtCQUFQLEVBQXJDO0FBQ0FwQixrQkFBSSxDQUFDTSxjQUFMLENBQW9Cd0IsVUFBcEIsR0FBaUMsQ0FBQ0EsVUFBVSxDQUFDLFdBQUQsQ0FBNUM7QUFDRDs7QUFBQTs7QUFFRCxnQkFBRzlDLElBQUksS0FBSyx3QkFBWixFQUFzQztBQUNwQyxrQkFBSStDLGdCQUF3QyxHQUFHOUIsTUFBTSxDQUFDK0Isc0JBQVAsRUFBL0M7QUFDQWhDLGtCQUFJLENBQUNpQyxVQUFMLENBQWdCQyxhQUFoQixDQUE4QkgsZ0JBQTlCO0FBQ0EvQixrQkFBSSxDQUFDaUMsVUFBTCxDQUFnQkUsc0JBQWhCLENBQXVDbkMsSUFBSSxDQUFDb0MsV0FBNUMsRUFBeURwQyxJQUFJLENBQUNxQyxTQUE5RDtBQUNEOztBQUFBOztBQUVELGdCQUFHckQsSUFBSSxLQUFLLDJCQUFaLEVBQXlDO0FBQ3ZDLGtCQUFJLE9BQU8yQixHQUFQLEtBQWUsUUFBbkIsRUFBNkI7QUFDM0Isb0JBQUlRLFdBQTZCLEdBQUdsQixNQUFNLENBQUNtQixrQkFBUCxFQUFwQzs7QUFFQSxvQkFBSWtCLGNBQXlDLEdBQUdyQyxNQUFNLENBQUNzQyx5QkFBUCxDQUFpQzVCLEdBQWpDLEVBQXNDWCxJQUFJLENBQUN3QyxZQUEzQyxDQUFoRDtBQUVBeEMsb0JBQUksQ0FBQ00sY0FBTCxDQUFvQm1DLDBCQUFwQixDQUErQ0gsY0FBYyxDQUFDLFFBQUQsQ0FBN0QsRUFBeUVBLGNBQWMsQ0FBQyxPQUFELENBQXZGLEVBQWtHbkIsV0FBUyxDQUFDLFdBQUQsQ0FBM0csRUFBMEhBLFdBQVMsQ0FBQyxTQUFELENBQW5JOztBQUVBLG9CQUFJbUIsY0FBYyxDQUFDLFFBQUQsQ0FBZCxLQUE2QixLQUFqQyxFQUF3QztBQUN0QyxzQkFBSUksdUJBQTJDLEdBQUc7QUFDaEQsMkJBQU9KLGNBQWMsQ0FBQyxPQUFEO0FBRDJCLG1CQUFsRDtBQUdBdEMsc0JBQUksQ0FBQ2Msb0JBQUwsQ0FBMEI0Qix1QkFBMUI7QUFDRCxpQkFMRCxNQUtPO0FBQ0wsc0JBQUlBLHdCQUEyQyxHQUFHO0FBQ2hELDJCQUFPSixjQUFjLENBQUMsT0FBRDtBQUQyQixtQkFBbEQ7QUFHQXRDLHNCQUFJLENBQUNjLG9CQUFMLENBQTBCNEIsd0JBQTFCO0FBQ0Q7O0FBQUE7QUFDRjs7QUFBQTtBQUVGOztBQUFBO0FBQ0QsbUJBQU8sSUFBUDtBQUNELFdBL0RELE1BK0RPO0FBQ0wsbUJBQU8sS0FBUDtBQUNEOztBQUFBO0FBQ0Y7QUFwRXdELE9BQWxDLENBQXpCO0FBc0VEO0FBNUdIOztBQUFBO0FBQUE7QUE2R0MsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RITSxJQUFNQyxhQUFiO0FBSUUsMkJBQWM7QUFBQTs7QUFBQTs7QUFBQTs7QUFDWixRQUFJdEQsR0FBb0IsR0FBR3VELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUEzQjtBQUNBLFFBQUl6RCxHQUFvQixHQUFHd0QsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQTNCO0FBQ0F4RCxPQUFHLENBQUN5RCxTQUFKLENBQWNDLEdBQWQsQ0FBa0Isc0JBQWxCO0FBQ0EzRCxPQUFHLENBQUMwRCxTQUFKLENBQWNDLEdBQWQsQ0FBa0Isc0JBQWxCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQjNELEdBQWhCO0FBQ0EsU0FBSzRELFFBQUwsR0FBZ0I3RCxHQUFoQjtBQUNEOztBQVhIO0FBQUE7QUFBQSxrQ0Fhd0I7QUFDcEIsYUFBTztBQUFDLGVBQU8sS0FBSzRELFFBQWI7QUFBdUIsZUFBTyxLQUFLQztBQUFuQyxPQUFQO0FBQ0Q7QUFmSDtBQUFBO0FBQUEsc0NBaUJvQkMsTUFqQnBCLEVBaUI4QzdELEdBakI5QyxFQWlCcUVELEdBakJyRSxFQWlCNEY7QUFDeEYsVUFBSThELE1BQU0sQ0FBQ3hELE9BQVAsS0FBbUIsSUFBdkIsRUFBNkI7QUFDM0JMLFdBQUcsQ0FBQzhELEtBQUosQ0FBVUMsT0FBVixHQUFvQixRQUFwQjtBQUNBaEUsV0FBRyxDQUFDK0QsS0FBSixDQUFVQyxPQUFWLEdBQW9CLFFBQXBCO0FBQ0QsT0FIRCxNQUdPO0FBQ0wvRCxXQUFHLENBQUM4RCxLQUFKLENBQVVDLE9BQVYsR0FBb0IsTUFBcEI7QUFDQWhFLFdBQUcsQ0FBQytELEtBQUosQ0FBVUMsT0FBVixHQUFvQixNQUFwQjtBQUNEO0FBQ0Y7QUF6Qkg7QUFBQTtBQUFBLCtDQTJCNkJDLGNBM0I3QixFQTJCcURDLGNBM0JyRCxFQTJCNkVDLGFBM0I3RSxFQTJCb0dDLGFBM0JwRyxFQTJCMkhSLFFBM0IzSCxFQTJCdUpDLFFBM0J2SixFQTJCeUw7QUFDckxELGNBQVEsQ0FBQ0csS0FBVCxDQUFlTSxJQUFmLEdBQXNCLENBQUNKLGNBQWMsR0FBR0UsYUFBbEIsSUFBbUMsQ0FBbkMsR0FBdUMsSUFBN0Q7QUFDQU4sY0FBUSxDQUFDRSxLQUFULENBQWVNLElBQWYsR0FBc0IsQ0FBQ0gsY0FBYyxHQUFHRSxhQUFsQixJQUFtQyxDQUFuQyxHQUF1QyxJQUE3RDtBQUNEO0FBOUJIOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FPLElBQU1FLE9BQWI7QUFLRSxxQkFBYztBQUFBOztBQUFBOztBQUFBOztBQUNaLFFBQUlyRSxHQUFvQixHQUFHdUQsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQTNCO0FBQ0EsUUFBSXpELEdBQW9CLEdBQUd3RCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBM0I7QUFDQXhELE9BQUcsQ0FBQ3lELFNBQUosQ0FBY0MsR0FBZCxDQUFrQixpQkFBbEI7QUFDQTNELE9BQUcsQ0FBQzBELFNBQUosQ0FBY0MsR0FBZCxDQUFrQixpQkFBbEI7QUFDQSxTQUFLVixTQUFMLEdBQWlCaEQsR0FBakI7QUFDQSxTQUFLc0UsU0FBTCxHQUFpQnZFLEdBQWpCO0FBQ0Q7O0FBWkg7QUFBQTtBQUFBLGtDQWN3QjtBQUNwQixhQUFPO0FBQUNDLFdBQUcsRUFBRSxLQUFLZ0QsU0FBWDtBQUFzQmpELFdBQUcsRUFBRSxLQUFLdUU7QUFBaEMsT0FBUDtBQUNEO0FBaEJIO0FBQUE7QUFBQSxzQ0FrQm9CVCxNQWxCcEIsRUFrQjhDOUQsR0FsQjlDLEVBa0JvRTtBQUNoRSxVQUFJOEQsTUFBTSxDQUFDeEQsT0FBUCxLQUFtQixJQUF2QixFQUE2QjtBQUMzQk4sV0FBRyxDQUFDK0QsS0FBSixDQUFVQyxPQUFWLEdBQW9CLE9BQXBCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xoRSxXQUFHLENBQUMrRCxLQUFKLENBQVVDLE9BQVYsR0FBb0IsTUFBcEI7QUFDRDs7QUFBQTtBQUNGO0FBeEJIOztBQUFBO0FBQUE7QUEwQkMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCTSxJQUFNUSxhQUFiO0FBSUUsMkJBQWM7QUFBQTs7QUFBQTs7QUFDWixRQUFJQyxRQUF3QixHQUFHakIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQS9CO0FBQ0FnQixZQUFRLENBQUNmLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLGNBQXZCO0FBQ0EsU0FBS2MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7QUFSSDtBQUFBO0FBQUEsa0NBVWdDO0FBQzVCLGFBQU8sS0FBS0EsUUFBWjtBQUNEO0FBWkg7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTyxJQUFNQyxRQUFiLEdBV0Usb0JBQWM7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDWixNQUFJQyxZQUFpQyxHQUFHbkIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQXhDO0FBQ0FrQixjQUFZLENBQUNqQixTQUFiLENBQXVCQyxHQUF2QixDQUEyQixzQkFBM0I7QUFDQWdCLGNBQVksQ0FBQ0MsU0FBYixHQUF5QixvQkFBekI7QUFFQSxNQUFJQyxvQkFBdUMsR0FBR3JCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUE5QztBQUNBb0Isc0JBQW9CLENBQUNuQixTQUFyQixDQUErQkMsR0FBL0IsQ0FBbUMsYUFBbkM7QUFDQWtCLHNCQUFvQixDQUFDQyxFQUFyQixHQUEwQixnQkFBMUI7QUFDQSxNQUFJQyxvQkFBdUMsR0FBR3ZCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUE5QztBQUNBc0Isc0JBQW9CLENBQUNyQixTQUFyQixDQUErQkMsR0FBL0IsQ0FBbUMsYUFBbkM7QUFDQW9CLHNCQUFvQixDQUFDRCxFQUFyQixHQUEwQixnQkFBMUI7QUFFQSxNQUFJRSxhQUFrQyxHQUFHeEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQXpDO0FBQ0F1QixlQUFhLENBQUN0QixTQUFkLENBQXdCQyxHQUF4QixDQUE0QixtQkFBNUI7QUFDQXFCLGVBQWEsQ0FBQ0osU0FBZCxHQUEwQiw0QkFBMUI7QUFFQSxNQUFJSyxpQkFBa0MsR0FBR3pCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUF6QztBQUNBd0IsbUJBQWlCLENBQUN2QixTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0Msb0JBQWhDO0FBRUEsTUFBSXVCLHFCQUF1QyxHQUFHMUIsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQTlDO0FBQ0F5Qix1QkFBcUIsQ0FBQ3hCLFNBQXRCLENBQWdDQyxHQUFoQyxDQUFvQyx1QkFBcEM7QUFDQXVCLHVCQUFxQixDQUFDSixFQUF0QixHQUEyQix1QkFBM0I7QUFDQUksdUJBQXFCLENBQUNDLFlBQXRCLENBQW1DLE1BQW5DLEVBQTJDLFVBQTNDO0FBRUEsTUFBSUMsa0JBQW1DLEdBQUc1QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBMUM7QUFDQTJCLG9CQUFrQixDQUFDMUIsU0FBbkIsQ0FBNkJDLEdBQTdCLENBQWlDLDBCQUFqQztBQUVBLE1BQUkwQixrQkFBa0MsR0FBRzdCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUF6QztBQUNBNEIsb0JBQWtCLENBQUMzQixTQUFuQixDQUE2QkMsR0FBN0IsQ0FBaUMsb0JBQWpDO0FBRUEsTUFBSTJCLG1CQUF5QyxHQUFHOUIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQWhEO0FBQ0E2QixxQkFBbUIsQ0FBQ1YsU0FBcEIsR0FBZ0MscUJBQWhDO0FBQ0FVLHFCQUFtQixDQUFDNUIsU0FBcEIsQ0FBOEJDLEdBQTlCLENBQWtDLG1CQUFsQztBQUVBLE1BQUk0QiwwQkFBNEMsR0FBRy9CLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFuRDtBQUNBOEIsNEJBQTBCLENBQUM3QixTQUEzQixDQUFxQ0MsR0FBckMsQ0FBeUMsd0JBQXpDO0FBQ0E0Qiw0QkFBMEIsQ0FBQ0osWUFBM0IsQ0FBd0MsS0FBeEMsRUFBK0Msc0JBQS9DO0FBQ0FJLDRCQUEwQixDQUFDWCxTQUEzQixHQUF1QyxPQUF2QztBQUVBLE1BQUlZLDBCQUE0QyxHQUFHaEMsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQW5EO0FBQ0ErQiw0QkFBMEIsQ0FBQzlCLFNBQTNCLENBQXFDQyxHQUFyQyxDQUF5Qyx3QkFBekM7QUFDQTZCLDRCQUEwQixDQUFDTCxZQUEzQixDQUF3QyxLQUF4QyxFQUErQyxzQkFBL0M7QUFDQUssNEJBQTBCLENBQUNaLFNBQTNCLEdBQXVDLE9BQXZDO0FBRUEsTUFBSWEscUJBQXVDLEdBQUdqQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBOUM7QUFDQWdDLHVCQUFxQixDQUFDL0IsU0FBdEIsQ0FBZ0NDLEdBQWhDLENBQW9DLHNCQUFwQztBQUNBOEIsdUJBQXFCLENBQUNYLEVBQXRCLEdBQTJCLHNCQUEzQjtBQUNBVyx1QkFBcUIsQ0FBQ04sWUFBdEIsQ0FBbUMsTUFBbkMsRUFBMkMsUUFBM0M7QUFFQSxNQUFJTyxxQkFBdUMsR0FBR2xDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUE5QztBQUNBaUMsdUJBQXFCLENBQUNoQyxTQUF0QixDQUFnQ0MsR0FBaEMsQ0FBb0Msc0JBQXBDO0FBQ0ErQix1QkFBcUIsQ0FBQ1osRUFBdEIsR0FBMkIsc0JBQTNCO0FBQ0FZLHVCQUFxQixDQUFDUCxZQUF0QixDQUFtQyxNQUFuQyxFQUEyQyxRQUEzQztBQUVBLE1BQUlRLHdCQUF3QyxHQUFHbkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQS9DO0FBRUEsTUFBSW1DLGdCQUFzQyxHQUFHcEMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQTdDO0FBQ0FtQyxrQkFBZ0IsQ0FBQ2xDLFNBQWpCLENBQTJCQyxHQUEzQixDQUErQixtQkFBL0I7QUFDQWlDLGtCQUFnQixDQUFDaEIsU0FBakIsR0FBNkIsb0NBQTdCO0FBRUEsTUFBSWlCLG9CQUFzQyxHQUFHckMsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQTdDO0FBQ0FvQyxzQkFBb0IsQ0FBQ25DLFNBQXJCLENBQStCQyxHQUEvQixDQUFtQyxvQkFBbkM7QUFFQSxNQUFJbUMsb0JBQXNDLEdBQUd0QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBN0M7QUFDQXFDLHNCQUFvQixDQUFDWCxZQUFyQixDQUFrQyxNQUFsQyxFQUEwQyxVQUExQztBQUNBVyxzQkFBb0IsQ0FBQ3BDLFNBQXJCLENBQStCQyxHQUEvQixDQUFtQyxpQkFBbkM7QUFDQW1DLHNCQUFvQixDQUFDaEIsRUFBckIsR0FBMEIsaUJBQTFCO0FBRUEsTUFBSWlCLG1CQUFvQyxHQUFHdkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQTNDO0FBQ0FzQyxxQkFBbUIsQ0FBQ3JDLFNBQXBCLENBQThCQyxHQUE5QixDQUFrQywwQkFBbEM7QUFFQSxNQUFJcUMsYUFBNkIsR0FBR3hDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFwQztBQUNBdUMsZUFBYSxDQUFDdEMsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsMkJBQTVCO0FBRUEsTUFBSXNDLFVBQWdDLEdBQUd6QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBdkM7QUFDQXdDLFlBQVUsQ0FBQ3ZDLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLG1CQUF6QjtBQUNBc0MsWUFBVSxDQUFDckIsU0FBWCxHQUF1Qix5QkFBdkI7QUFFQSxNQUFJc0IsaUJBQW1DLEdBQUcxQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBMUM7QUFDQXlDLG1CQUFpQixDQUFDeEMsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLHdCQUFoQztBQUNBdUMsbUJBQWlCLENBQUNmLFlBQWxCLENBQStCLEtBQS9CLEVBQXNDLHVCQUF0QztBQUNBZSxtQkFBaUIsQ0FBQ3RCLFNBQWxCLEdBQThCLFFBQTlCO0FBRUEsTUFBSXVCLFNBQTJCLEdBQUczQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBbEM7QUFDQTBDLFdBQVMsQ0FBQ3pDLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLHVCQUF4QjtBQUNBd0MsV0FBUyxDQUFDckIsRUFBVixHQUFlLHVCQUFmO0FBQ0FxQixXQUFTLENBQUNoQixZQUFWLENBQXVCLE1BQXZCLEVBQStCLFFBQS9CO0FBRUEsTUFBSWlCLG1CQUFtQyxHQUFHNUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQTFDO0FBRUEsTUFBSTRDLG9CQUEwQyxHQUFHN0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQWpEO0FBQ0E0QyxzQkFBb0IsQ0FBQzNDLFNBQXJCLENBQStCQyxHQUEvQixDQUFtQyxtQkFBbkM7QUFDQTBDLHNCQUFvQixDQUFDekIsU0FBckIsR0FBaUMsMkJBQWpDO0FBRUEsTUFBSTBCLHdCQUEwQyxHQUFHOUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWpEO0FBQ0E2QywwQkFBd0IsQ0FBQzVDLFNBQXpCLENBQW1DQyxHQUFuQyxDQUF1QyxvQkFBdkM7QUFFQSxNQUFJNEMsd0JBQTBDLEdBQUcvQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBakQ7QUFDQThDLDBCQUF3QixDQUFDcEIsWUFBekIsQ0FBc0MsTUFBdEMsRUFBOEMsVUFBOUM7QUFDQW9CLDBCQUF3QixDQUFDN0MsU0FBekIsQ0FBbUNDLEdBQW5DLENBQXVDLGtCQUF2QztBQUNBNEMsMEJBQXdCLENBQUN6QixFQUF6QixHQUE4QixrQkFBOUI7QUFFQSxNQUFJMEIsdUJBQXdDLEdBQUdoRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBL0M7QUFDQStDLHlCQUF1QixDQUFDOUMsU0FBeEIsQ0FBa0NDLEdBQWxDLENBQXNDLDBCQUF0QztBQUVBLE1BQUk4Qyx1QkFBdUMsR0FBR2pELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUE5QztBQUVBLE1BQUlpRCxlQUFxQyxHQUFHbEQsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQTVDO0FBQ0FpRCxpQkFBZSxDQUFDaEQsU0FBaEIsQ0FBMEJDLEdBQTFCLENBQThCLG1CQUE5QjtBQUNBK0MsaUJBQWUsQ0FBQzlCLFNBQWhCLEdBQTRCLHNCQUE1QjtBQUVBLE1BQUkrQixtQkFBcUMsR0FBR25ELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUE1QztBQUNBa0QscUJBQW1CLENBQUNqRCxTQUFwQixDQUE4QkMsR0FBOUIsQ0FBa0Msb0JBQWxDO0FBRUEsTUFBSWlELG1CQUFxQyxHQUFHcEQsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQTVDO0FBQ0FtRCxxQkFBbUIsQ0FBQ3pCLFlBQXBCLENBQWlDLE1BQWpDLEVBQXlDLFVBQXpDO0FBQ0F5QixxQkFBbUIsQ0FBQ2xELFNBQXBCLENBQThCQyxHQUE5QixDQUFrQyxhQUFsQztBQUNBaUQscUJBQW1CLENBQUM5QixFQUFwQixHQUF5QixhQUF6QjtBQUVBLE1BQUkrQixrQkFBbUMsR0FBR3JELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUExQztBQUNBb0Qsb0JBQWtCLENBQUNuRCxTQUFuQixDQUE2QkMsR0FBN0IsQ0FBaUMsMEJBQWpDO0FBRUEsTUFBSW1ELG1CQUFtQyxHQUFHdEQsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQTFDO0FBRUFxRCxxQkFBbUIsQ0FBQ3BELFNBQXBCLENBQThCQyxHQUE5QixDQUFrQyxxQkFBbEM7QUFDQW1ELHFCQUFtQixDQUFDQyxNQUFwQixDQUEyQnBDLFlBQTNCO0FBQ0FBLGNBQVksQ0FBQ29DLE1BQWIsQ0FBb0JsQyxvQkFBcEI7QUFDQUYsY0FBWSxDQUFDb0MsTUFBYixDQUFvQmhDLG9CQUFwQjtBQUNBK0IscUJBQW1CLENBQUNDLE1BQXBCLENBQTJCL0IsYUFBM0I7QUFDQThCLHFCQUFtQixDQUFDQyxNQUFwQixDQUEyQjlCLGlCQUEzQjtBQUVBQSxtQkFBaUIsQ0FBQzhCLE1BQWxCLENBQXlCN0IscUJBQXpCLEVBQWdERSxrQkFBaEQ7QUFFQUMsb0JBQWtCLENBQUMwQixNQUFuQixDQUEwQnpCLG1CQUExQixFQUErQ0MsMEJBQS9DLEVBQTJFRSxxQkFBM0UsRUFBa0dELDBCQUFsRyxFQUE4SEUscUJBQTlIO0FBQ0FvQixxQkFBbUIsQ0FBQ0MsTUFBcEIsQ0FBMkIxQixrQkFBM0I7QUFFQVcsZUFBYSxDQUFDZSxNQUFkLENBQXFCZCxVQUFyQixFQUFpQ0MsaUJBQWpDLEVBQW9EQyxTQUFwRDtBQUNBVyxxQkFBbUIsQ0FBQ0MsTUFBcEIsQ0FBMkJmLGFBQTNCO0FBRUFMLDBCQUF3QixDQUFDb0IsTUFBekIsQ0FBZ0NuQixnQkFBaEMsRUFBa0RDLG9CQUFsRDtBQUNBQSxzQkFBb0IsQ0FBQ2tCLE1BQXJCLENBQTRCakIsb0JBQTVCLEVBQWtEQyxtQkFBbEQ7QUFDQWUscUJBQW1CLENBQUNDLE1BQXBCLENBQTJCcEIsd0JBQTNCO0FBRUFTLHFCQUFtQixDQUFDVyxNQUFwQixDQUEyQlYsb0JBQTNCLEVBQWlEQyx3QkFBakQ7QUFDQUEsMEJBQXdCLENBQUNTLE1BQXpCLENBQWdDUix3QkFBaEMsRUFBMERDLHVCQUExRDtBQUNBTSxxQkFBbUIsQ0FBQ0MsTUFBcEIsQ0FBMkJYLG1CQUEzQjtBQUVBSyx5QkFBdUIsQ0FBQ00sTUFBeEIsQ0FBK0JMLGVBQS9CLEVBQWdEQyxtQkFBaEQ7QUFDQUEscUJBQW1CLENBQUNJLE1BQXBCLENBQTJCSCxtQkFBM0IsRUFBZ0RDLGtCQUFoRDtBQUNBQyxxQkFBbUIsQ0FBQ0MsTUFBcEIsQ0FBMkJOLHVCQUEzQjtBQUVBVCxlQUFhLENBQUNlLE1BQWQsQ0FBcUJkLFVBQXJCLEVBQWlDQyxpQkFBakMsRUFBb0RDLFNBQXBEO0FBQ0FXLHFCQUFtQixDQUFDQyxNQUFwQixDQUEyQmYsYUFBM0I7QUFHQSxPQUFLZ0IseUJBQUwsR0FBaUNGLG1CQUFqQztBQUNBLE9BQUsxRCxZQUFMLEdBQW9COEIscUJBQXBCO0FBQ0EsT0FBSytCLGlCQUFMLEdBQXlCbkIsb0JBQXpCO0FBQ0EsT0FBS29CLFdBQUwsR0FBbUJOLG1CQUFuQjtBQUNBLE9BQUszRSxRQUFMLEdBQWdCd0QscUJBQWhCO0FBQ0EsT0FBS3RELFFBQUwsR0FBZ0J1RCxxQkFBaEI7QUFDQSxPQUFLYixvQkFBTCxHQUE0QkEsb0JBQTVCO0FBQ0EsT0FBS0Usb0JBQUwsR0FBNEJBLG9CQUE1QjtBQUNBLE9BQUtvQyxnQkFBTCxHQUF3Qlosd0JBQXhCO0FBQ0QsQ0EvS0g7QUFnTEMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BLQTtBQVdBO0FBRU0sSUFBTWEsY0FBYjtBQVlFLDBCQUFhQyxPQUFiLEVBQStCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEscURBWW9CO0FBQ2pELGFBQU8sRUFEMEM7QUFFakQsYUFBTztBQUYwQyxLQVpwQjs7QUFDN0IsU0FBS3BILEdBQUwsR0FBV29ILE9BQU8sQ0FBQ3BILEdBQW5CO0FBQ0EsU0FBS0QsR0FBTCxHQUFXcUgsT0FBTyxDQUFDckgsR0FBbkI7QUFDQSxTQUFLNEQsUUFBTCxHQUFnQnlELE9BQU8sQ0FBQ3pELFFBQXhCO0FBQ0EsU0FBS0MsUUFBTCxHQUFld0QsT0FBTyxDQUFDeEQsUUFBdkI7QUFDQSxTQUFLYixXQUFMLEdBQW1CcUUsT0FBTyxDQUFDckUsV0FBM0I7QUFDQSxTQUFLc0UsYUFBTCxHQUFxQkQsT0FBTyxDQUFDQyxhQUE3QjtBQUNBLFNBQUtKLFdBQUwsR0FBbUJHLE9BQU8sQ0FBQ0gsV0FBM0I7QUFDQSxTQUFLekMsUUFBTCxHQUFnQjRDLE9BQU8sQ0FBQzVDLFFBQXhCO0FBQ0EsU0FBSzhDLElBQUwsR0FBWUYsT0FBTyxDQUFDRSxJQUFwQjtBQUNEOztBQXRCSDtBQUFBO0FBQUEsMkNBNkJ5QkMsY0E3QnpCLEVBNkJzRTtBQUNsRSxVQUFJdkgsR0FBVyxHQUFJLENBQUMsS0FBSytDLFdBQUwsQ0FBaUJ5RSxXQUFqQixHQUErQixLQUFLeEgsR0FBTCxDQUFTd0gsV0FBekMsSUFBd0QsQ0FBQ0QsY0FBYyxDQUFDekYsU0FBekUsSUFBdUYsQ0FBQ3lGLGNBQWMsQ0FBQyxLQUFELENBQWYsR0FBeUIsQ0FBQ0EsY0FBYyxDQUFDLFNBQUQsQ0FBL0gsSUFBOEksRUFBaEs7QUFDQSxVQUFJeEgsR0FBVyxHQUFJLENBQUMsS0FBS2dELFdBQUwsQ0FBaUJ5RSxXQUFqQixHQUErQixLQUFLeEgsR0FBTCxDQUFTd0gsV0FBekMsSUFBd0QsQ0FBQ0QsY0FBYyxDQUFDekYsU0FBekUsSUFBdUYsQ0FBQ3lGLGNBQWMsQ0FBQyxLQUFELENBQWYsR0FBeUIsQ0FBQ0EsY0FBYyxDQUFDLFNBQUQsQ0FBL0gsSUFBOEksRUFBaEs7QUFFQSxXQUFLckcsdUJBQUwsQ0FBNkJsQixHQUE3QixDQUFpQ0EsR0FBakMsR0FBdUNBLEdBQXZDO0FBQ0EsV0FBS2tCLHVCQUFMLENBQTZCbkIsR0FBN0IsQ0FBaUNBLEdBQWpDLEdBQXVDQSxHQUF2QztBQUVBLFdBQUtDLEdBQUwsQ0FBUzhELEtBQVQsQ0FBZU0sSUFBZixHQUFzQnBFLEdBQUcsR0FBRyxJQUE1QjtBQUNBLFdBQUtELEdBQUwsQ0FBUytELEtBQVQsQ0FBZU0sSUFBZixHQUFzQnJFLEdBQUcsR0FBRyxJQUE1QjtBQUVBLFdBQUt5RSxRQUFMLENBQWNWLEtBQWQsQ0FBb0JNLElBQXBCLEdBQTJCLENBQUNwRSxHQUFELEdBQU8sS0FBS0EsR0FBTCxDQUFTd0gsV0FBVCxHQUF1QixDQUE5QixHQUFrQyxJQUE3RDtBQUNBLFdBQUtoRCxRQUFMLENBQWNWLEtBQWQsQ0FBb0IyRCxLQUFwQixHQUE2QixLQUFLMUUsV0FBTCxDQUFpQnlFLFdBQWpCLEdBQStCLENBQUN6SCxHQUFqQyxHQUF3QyxLQUFLQyxHQUFMLENBQVN3SCxXQUFULEdBQXVCLENBQS9ELEdBQW1FLElBQS9GO0FBQ0Q7QUF6Q0g7QUFBQTtBQUFBLHNDQTJDcUJFLEtBM0NyQixFQTJDNENDLElBM0M1QyxFQTJDcUY7QUFDakYsVUFBSTNILEdBQUcsR0FBRyxLQUFLQSxHQUFmO0FBQ0EsVUFBSUQsR0FBRyxHQUFHLEtBQUtBLEdBQWY7QUFDQSxVQUFJNEQsUUFBUSxHQUFHLEtBQUtBLFFBQXBCO0FBQ0EsVUFBSVosV0FBVyxHQUFHLEtBQUtBLFdBQXZCO0FBQ0EsVUFBSTZFLElBQVUsR0FBRyxJQUFqQjtBQUNBLFVBQUlDLEtBQUo7QUFDQSxVQUFJckQsUUFBUSxHQUFHLEtBQUtBLFFBQXBCO0FBQ0EsVUFBSThDLElBQUo7QUFDQSxVQUFJUSxRQUFKO0FBQ0EsVUFBSUMsYUFBSjs7QUFFQSxlQUFTQywwQkFBVCxHQUEyQztBQUN6QyxlQUFPSixJQUFJLENBQUNQLGFBQVosS0FBOEIsU0FBOUIsR0FBMENVLGFBQWEsR0FBR0gsSUFBSSxDQUFDUCxhQUFMLENBQW1CaEgsT0FBN0UsR0FBdUYwSCxhQUFhLEdBQUdILElBQUksQ0FBQ1AsYUFBNUc7QUFBMEg7QUFDMUgsZUFBT08sSUFBSSxDQUFDWCxXQUFaLEtBQTRCLFNBQTVCLEdBQXdDYSxRQUFRLEdBQUdGLElBQUksQ0FBQ1gsV0FBTCxDQUFpQjVHLE9BQXBFLEdBQThFdUgsSUFBSSxDQUFDWCxXQUFuRjs7QUFFQSxZQUFJYSxRQUFKLEVBQWM7QUFDWkQsZUFBSyxHQUFHSCxLQUFLLENBQUNPLE9BQU4sR0FBZ0JqSSxHQUFHLENBQUNrSSxxQkFBSixHQUE0QkMsR0FBNUMsR0FBa0RuSSxHQUFHLENBQUN3SCxXQUE5RDtBQUNELFNBRkQsTUFFTztBQUNMSyxlQUFLLEdBQUdILEtBQUssQ0FBQ1UsT0FBTixHQUFnQnBJLEdBQUcsQ0FBQ2tJLHFCQUFKLEdBQTRCOUQsSUFBcEQ7QUFDRDs7QUFBQTtBQUNGOztBQUFBO0FBRUQ0RCxnQ0FBMEI7O0FBRTFCLFVBQUksS0FBS3ZGLFVBQUwsSUFBb0IsS0FBSzZFLElBQUwsS0FBYyxLQUF0QyxFQUE2QztBQUMzQ0EsWUFBSSxHQUFHLENBQUN2RSxXQUFXLENBQUN5RSxXQUFaLEdBQTBCeEgsR0FBRyxDQUFDd0gsV0FBL0IsSUFBOEMsS0FBSy9FLFVBQW5ELEdBQWdFLENBQUMsS0FBSzZFLElBQTdFO0FBQ0Q7O0FBRUQvRCxjQUFRLENBQUM4RSxnQkFBVCxDQUEwQixXQUExQixFQUF1Q0MsV0FBdkM7QUFDQS9FLGNBQVEsQ0FBQzhFLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDRSxTQUFyQzs7QUFFQSxVQUFJWixJQUFKLEVBQVc7QUFDVFcsbUJBQVcsQ0FBRVgsSUFBRixDQUFYO0FBQ0Q7O0FBQUE7O0FBRUQsZUFBU1csV0FBVCxDQUFzQlosS0FBdEIsRUFBOEM7QUFDNUMsWUFBSWMsT0FBSjs7QUFFQSxZQUFJVixRQUFKLEVBQWM7QUFDWlUsaUJBQU8sR0FBR3pGLFdBQVcsQ0FBQ3lFLFdBQVosSUFBMkJFLEtBQUssQ0FBQ08sT0FBTixHQUFnQkosS0FBaEIsR0FBd0I5RSxXQUFXLENBQUNtRixxQkFBWixHQUFvQ0MsR0FBdkYsQ0FBVjtBQUNELFNBRkQsTUFFTztBQUNMSyxpQkFBTyxHQUFHZCxLQUFLLENBQUNVLE9BQU4sR0FBZ0JQLEtBQWhCLEdBQXdCOUUsV0FBVyxDQUFDbUYscUJBQVosR0FBb0M5RCxJQUF0RTtBQUNEOztBQUFBO0FBRUQsWUFBSXFFLFNBQVMsR0FBRzFGLFdBQVcsQ0FBQ3lFLFdBQVosR0FBMEJ4SCxHQUFHLENBQUN3SCxXQUE5Qzs7QUFFQSxZQUFJSSxJQUFJLENBQUNOLElBQUwsS0FBYyxLQUFsQixFQUF5QjtBQUN2QixjQUFJa0IsT0FBTyxJQUFJLENBQUNaLElBQUksQ0FBQzFHLHVCQUFMLENBQTZCbEIsR0FBN0IsQ0FBaUNBLEdBQWxDLEdBQXdDc0gsSUFBbkQsSUFBMkRrQixPQUFPLElBQUksQ0FBQ1osSUFBSSxDQUFDMUcsdUJBQUwsQ0FBNkJsQixHQUE3QixDQUFpQ0EsR0FBbEMsR0FBd0NzSCxJQUFsSCxFQUF3SDtBQUN0SGtCLG1CQUFPLElBQUksQ0FBQ1osSUFBSSxDQUFDMUcsdUJBQUwsQ0FBNkJsQixHQUE3QixDQUFpQ0EsR0FBbEMsR0FBd0NzSCxJQUFuRCxHQUEwRGtCLE9BQU8sR0FBRyxDQUFDWixJQUFJLENBQUMxRyx1QkFBTCxDQUE2QmxCLEdBQTdCLENBQWlDQSxHQUFsQyxHQUF3Q3NILElBQTVHLEdBQW1ILEtBQW5IO0FBQ0FrQixtQkFBTyxJQUFJLENBQUNaLElBQUksQ0FBQzFHLHVCQUFMLENBQTZCbEIsR0FBN0IsQ0FBaUNBLEdBQWxDLEdBQXdDc0gsSUFBbkQsR0FBMERrQixPQUFPLEdBQUcsQ0FBQ1osSUFBSSxDQUFDMUcsdUJBQUwsQ0FBNkJsQixHQUE3QixDQUFpQ0EsR0FBbEMsR0FBd0NzSCxJQUE1RyxHQUFtSCxLQUFuSDtBQUNBb0IsNkJBQWlCO0FBQ2xCO0FBQ0YsU0FORCxNQU1PO0FBQ0xBLDJCQUFpQjtBQUNsQjs7QUFBQTs7QUFFRCxpQkFBU0EsaUJBQVQsR0FBbUM7QUFFakMsY0FBSUYsT0FBTyxHQUFHLENBQWQsRUFBaUI7QUFDZkEsbUJBQU8sR0FBRyxDQUFWO0FBQ0Q7O0FBQUE7O0FBRUQsY0FBSVQsYUFBSixFQUFtQjtBQUNqQixnQkFBSVMsT0FBTyxJQUFJLENBQUNaLElBQUksQ0FBQzFHLHVCQUFMLENBQTZCbkIsR0FBN0IsQ0FBaUMsS0FBakMsQ0FBRCxHQUEyQ0EsR0FBRyxDQUFDeUgsV0FBOUQsRUFBMkU7QUFDekVnQixxQkFBTyxHQUFHLENBQUNaLElBQUksQ0FBQzFHLHVCQUFMLENBQTZCbkIsR0FBN0IsQ0FBaUMsS0FBakMsQ0FBRCxHQUEyQ0EsR0FBRyxDQUFDeUgsV0FBekQ7QUFDRDs7QUFBQTtBQUNGLFdBSkQsTUFJTztBQUNMLGdCQUFJZ0IsT0FBTyxHQUFHQyxTQUFkLEVBQXlCO0FBQ3ZCRCxxQkFBTyxHQUFHQyxTQUFWO0FBQ0Q7O0FBQUE7QUFDRjs7QUFBQTtBQUVEekksYUFBRyxDQUFDOEQsS0FBSixDQUFVTSxJQUFWLEdBQWlCb0UsT0FBTyxHQUFHLElBQTNCO0FBQ0FoRSxrQkFBUSxDQUFDVixLQUFULENBQWVNLElBQWYsR0FBc0JvRSxPQUFPLEdBQUd4SSxHQUFHLENBQUN3SCxXQUFKLEdBQWtCLENBQTVCLEdBQWdDLElBQXREOztBQUVBLGNBQUlnQixPQUFPLEtBQUtHLFNBQVosSUFBeUJGLFNBQVMsS0FBS0UsU0FBM0MsRUFBc0Q7QUFDcERmLGdCQUFJLENBQUMxRyx1QkFBTCxDQUE2QixLQUE3QixJQUFzQztBQUFDLCtCQUFVc0gsT0FBVixDQUFEO0FBQXNCLHVDQUFrQnpGLFdBQVcsQ0FBQ3lFLFdBQVosR0FBMEJ4SCxHQUFHLENBQUN3SCxXQUFoRDtBQUF0QixhQUF0QztBQUNEOztBQUFBO0FBRUQ3RCxrQkFBUSxDQUFDRyxLQUFULENBQWVNLElBQWYsR0FBc0IsQ0FBRXBFLEdBQUcsQ0FBQ3dILFdBQUosR0FBa0I3RCxRQUFRLENBQUM2RCxXQUE1QixHQUEyQyxDQUE1QyxJQUFpRCxDQUFqRCxHQUFxRCxJQUEzRTtBQUNEOztBQUFBO0FBQ0Y7O0FBQUE7O0FBRUQsZUFBU2UsU0FBVCxHQUFxQjtBQUNuQmhGLGdCQUFRLENBQUNxRixtQkFBVCxDQUE2QixTQUE3QixFQUF3Q0wsU0FBeEM7QUFDQWhGLGdCQUFRLENBQUNxRixtQkFBVCxDQUE2QixXQUE3QixFQUEwQ04sV0FBMUM7QUFDRDtBQUNGO0FBbklIO0FBQUE7QUFBQSxzQ0FxSXFCWixLQXJJckIsRUFxSTRDQyxJQXJJNUMsRUFxSW9GO0FBQ2hGLFVBQUk1SCxHQUFHLEdBQUcsS0FBS0EsR0FBZjtBQUNBLFVBQUlDLEdBQUcsR0FBRyxLQUFLQSxHQUFmO0FBQ0EsVUFBSStDLFdBQVcsR0FBRyxLQUFLQSxXQUF2QjtBQUNBLFVBQUk4RSxLQUFKO0FBQ0EsVUFBSWpFLFFBQVEsR0FBRyxLQUFLQSxRQUFwQjtBQUNBLFVBQUlnRSxJQUFJLEdBQUcsSUFBWDtBQUNBLFVBQUlwRCxRQUFRLEdBQUcsS0FBS0EsUUFBcEI7QUFDQSxVQUFJOEMsSUFBSjtBQUNBLFVBQUlTLGFBQUo7QUFDQSxVQUFJRCxRQUFKOztBQUVBLFVBQUksS0FBS3JGLFVBQUwsSUFBbUIsS0FBSzZFLElBQUwsS0FBYyxLQUFyQyxFQUE0QztBQUMxQ0EsWUFBSSxHQUFHLENBQUN2RSxXQUFXLENBQUN5RSxXQUFaLEdBQTBCeEgsR0FBRyxDQUFDd0gsV0FBL0IsSUFBOEMsS0FBSy9FLFVBQW5ELEdBQWdFLENBQUMsS0FBSzZFLElBQTdFO0FBQ0Q7O0FBRUQsZUFBU1UsMEJBQVQsR0FBMkM7QUFDekMsZUFBT0osSUFBSSxDQUFDUCxhQUFaLEtBQThCLFNBQTlCLEdBQTBDVSxhQUFhLEdBQUdILElBQUksQ0FBQ1AsYUFBTCxDQUFtQmhILE9BQTdFLEdBQXVGMEgsYUFBYSxHQUFHSCxJQUFJLENBQUNQLGFBQTVHO0FBQTBIO0FBQzFILGVBQU9PLElBQUksQ0FBQ1gsV0FBWixLQUE0QixTQUE1QixHQUF3Q2EsUUFBUSxHQUFHRixJQUFJLENBQUNYLFdBQUwsQ0FBaUI1RyxPQUFwRSxHQUE4RXVILElBQUksQ0FBQ1gsV0FBbkY7O0FBRUEsWUFBSWEsUUFBSixFQUFjO0FBQ1pELGVBQUssR0FBR0gsS0FBSyxDQUFDTyxPQUFOLEdBQWdCbEksR0FBRyxDQUFDbUkscUJBQUosR0FBNEJDLEdBQTVDLEdBQWtEcEksR0FBRyxDQUFDeUgsV0FBOUQ7QUFDRCxTQUZELE1BRU87QUFDTEssZUFBSyxHQUFHSCxLQUFLLENBQUNVLE9BQU4sR0FBZ0JySSxHQUFHLENBQUNtSSxxQkFBSixHQUE0QjlELElBQXBEO0FBQ0Q7QUFDRjs7QUFBQTtBQUVENEQsZ0NBQTBCO0FBRTFCekUsY0FBUSxDQUFDOEUsZ0JBQVQsQ0FBMEIsV0FBMUIsRUFBdUNDLFdBQXZDO0FBQ0EvRSxjQUFRLENBQUM4RSxnQkFBVCxDQUEwQixTQUExQixFQUFxQ0UsU0FBckM7O0FBRUEsVUFBSVosSUFBSSxLQUFLZ0IsU0FBYixFQUF5QjtBQUN2QkwsbUJBQVcsQ0FBRVgsSUFBRixDQUFYO0FBQ0Q7O0FBQUE7O0FBRUQsZUFBU1csV0FBVCxDQUFzQlosS0FBdEIsRUFBOEM7QUFDNUMsWUFBSWMsT0FBSjs7QUFFQSxZQUFJVixRQUFKLEVBQWM7QUFDWlUsaUJBQU8sR0FBR3pGLFdBQVcsQ0FBQ3lFLFdBQVosSUFBMkJFLEtBQUssQ0FBQ08sT0FBTixHQUFnQkosS0FBaEIsR0FBd0I5RSxXQUFXLENBQUNtRixxQkFBWixHQUFvQ0MsR0FBdkYsQ0FBVjtBQUNELFNBRkQsTUFFTztBQUNMSyxpQkFBTyxHQUFHZCxLQUFLLENBQUNVLE9BQU4sR0FBZ0JQLEtBQWhCLEdBQXdCOUUsV0FBVyxDQUFDbUYscUJBQVosR0FBb0M5RCxJQUF0RTtBQUNEOztBQUVELFlBQUlxRSxTQUFTLEdBQUcxRixXQUFXLENBQUN5RSxXQUFaLEdBQTBCekgsR0FBRyxDQUFDeUgsV0FBOUM7O0FBRUEsWUFBSUksSUFBSSxDQUFDTixJQUFMLEtBQWMsS0FBbEIsRUFBeUI7QUFDdkIsY0FBSWtCLE9BQU8sSUFBSSxDQUFDWixJQUFJLENBQUMxRyx1QkFBTCxDQUE2Qm5CLEdBQTdCLENBQWlDQSxHQUFsQyxHQUF3Q3VILElBQW5ELElBQTJEa0IsT0FBTyxJQUFJLENBQUNaLElBQUksQ0FBQzFHLHVCQUFMLENBQTZCbkIsR0FBN0IsQ0FBaUNBLEdBQWxDLEdBQXdDdUgsSUFBbEgsRUFBd0g7QUFDdEhrQixtQkFBTyxJQUFJLENBQUNaLElBQUksQ0FBQzFHLHVCQUFMLENBQTZCbkIsR0FBN0IsQ0FBaUNBLEdBQWxDLEdBQXdDdUgsSUFBbkQsR0FBMERrQixPQUFPLEdBQUcsQ0FBQ1osSUFBSSxDQUFDMUcsdUJBQUwsQ0FBNkJuQixHQUE3QixDQUFpQ0EsR0FBbEMsR0FBd0N1SCxJQUE1RyxHQUFtSCxLQUFuSDtBQUNBa0IsbUJBQU8sSUFBSSxDQUFDWixJQUFJLENBQUMxRyx1QkFBTCxDQUE2Qm5CLEdBQTdCLENBQWlDQSxHQUFsQyxHQUF3Q3VILElBQW5ELEdBQTBEa0IsT0FBTyxHQUFHLENBQUNaLElBQUksQ0FBQzFHLHVCQUFMLENBQTZCbkIsR0FBN0IsQ0FBaUNBLEdBQWxDLEdBQXdDdUgsSUFBNUcsR0FBbUgsS0FBbkg7QUFDQW9CLDZCQUFpQjtBQUNsQjtBQUNGLFNBTkQsTUFNTztBQUNMQSwyQkFBaUI7QUFDbEI7O0FBQUE7O0FBRUQsaUJBQVNBLGlCQUFULEdBQW1DO0FBRWpDLGNBQUlGLE9BQU8sR0FBRyxDQUFkLEVBQWlCO0FBQ2ZBLG1CQUFPLEdBQUcsQ0FBVjtBQUNEOztBQUFBOztBQUVELGNBQUlBLE9BQU8sR0FBR0MsU0FBZCxFQUF5QjtBQUN2QkQsbUJBQU8sR0FBR0MsU0FBVjtBQUNEOztBQUFBOztBQUVELGNBQUlELE9BQU8sSUFBSSxDQUFDWixJQUFJLENBQUMxRyx1QkFBTCxDQUE2QmxCLEdBQTdCLENBQWlDLEtBQWpDLENBQUQsR0FBMkNBLEdBQUcsQ0FBQ3dILFdBQTlELEVBQTJFO0FBQ3pFZ0IsbUJBQU8sR0FBRyxDQUFDWixJQUFJLENBQUMxRyx1QkFBTCxDQUE2QmxCLEdBQTdCLENBQWlDLEtBQWpDLENBQUQsR0FBMkNBLEdBQUcsQ0FBQ3dILFdBQXpEO0FBQ0Q7O0FBQUE7QUFFRHpILGFBQUcsQ0FBQytELEtBQUosQ0FBVU0sSUFBVixHQUFpQm9FLE9BQU8sR0FBRyxJQUEzQjtBQUNBaEUsa0JBQVEsQ0FBQ1YsS0FBVCxDQUFlMkQsS0FBZixHQUF3QjFFLFdBQVcsQ0FBQ3lFLFdBQVosR0FBMEJnQixPQUEzQixHQUFzQ3pJLEdBQUcsQ0FBQ3lILFdBQUosR0FBa0IsQ0FBeEQsR0FBNEQsSUFBbkY7O0FBRUEsY0FBSWdCLE9BQU8sS0FBS0csU0FBWixJQUF5QkYsU0FBUyxLQUFLRSxTQUEzQyxFQUFzRDtBQUNwRGYsZ0JBQUksQ0FBQzFHLHVCQUFMLENBQTZCLEtBQTdCLElBQXNDO0FBQUMsK0JBQVVzSCxPQUFWLENBQUQ7QUFBc0IsdUNBQWtCekYsV0FBVyxDQUFDeUUsV0FBWixHQUEwQnpILEdBQUcsQ0FBQ3lILFdBQWhEO0FBQXRCLGFBQXRDO0FBQ0Q7O0FBQUE7QUFFRDVELGtCQUFRLENBQUNFLEtBQVQsQ0FBZU0sSUFBZixHQUFzQixDQUFFckUsR0FBRyxDQUFDeUgsV0FBSixHQUFrQjVELFFBQVEsQ0FBQzRELFdBQTVCLEdBQTJDLENBQTVDLElBQWlELENBQWpELEdBQXFELElBQTNFO0FBQ0Q7O0FBQUE7QUFFRjs7QUFBQTs7QUFFRCxlQUFTZSxTQUFULEdBQXFCO0FBQ25CaEYsZ0JBQVEsQ0FBQ3FGLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDTCxTQUF4QztBQUNBaEYsZ0JBQVEsQ0FBQ3FGLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDTixXQUExQztBQUNEO0FBQ0Y7QUE1Tkg7QUFBQTtBQUFBLGdDQThOZXpFLE1BOU5mLEVBOE5tRGdGLElBOU5uRCxFQThOeUVDLFFBOU56RSxFQThOeUdDLFFBOU56RyxFQThOK0k7QUFDM0ksVUFBSUMsWUFBSjtBQUNBLGFBQU9uRixNQUFQLEtBQWtCLFNBQWxCLEdBQStCbUYsWUFBWSxHQUFHbkYsTUFBOUMsR0FBdURtRixZQUFZLEdBQUduRixNQUFNLENBQUN4RCxPQUE3RTs7QUFDQSxVQUFJMkksWUFBSixFQUFrQjtBQUNoQkgsWUFBSSxDQUFDL0UsS0FBTCxDQUFXbUYsTUFBWCxHQUFvQkosSUFBSSxDQUFDckIsV0FBTCxHQUFtQixJQUF2QztBQUNBLGFBQUt6RSxXQUFMLENBQWlCZSxLQUFqQixDQUF1Qm9GLFNBQXZCLEdBQW1DLGdCQUFuQztBQUNBLGFBQUtuRyxXQUFMLENBQWlCZSxLQUFqQixDQUF1QnFFLEdBQXZCLEdBQTZCVSxJQUFJLENBQUNyQixXQUFMLEdBQW1CLENBQW5CLEdBQXVCLElBQXBEO0FBQ0EsYUFBSzdELFFBQUwsQ0FBY0YsU0FBZCxDQUF3QjBGLE1BQXhCLENBQStCLHNCQUEvQjtBQUNBLGFBQUt2RixRQUFMLENBQWNILFNBQWQsQ0FBd0IwRixNQUF4QixDQUErQixzQkFBL0I7QUFDQSxhQUFLeEYsUUFBTCxDQUFjRixTQUFkLENBQXdCQyxHQUF4QixDQUE0Qiw4QkFBNUI7QUFDQSxhQUFLRSxRQUFMLENBQWNILFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLDhCQUE1QjtBQUNBb0YsZ0JBQVEsQ0FBQ3JGLFNBQVQsQ0FBbUIwRixNQUFuQixDQUEwQixnQkFBMUI7QUFDQUosZ0JBQVEsQ0FBQ3RGLFNBQVQsQ0FBbUIwRixNQUFuQixDQUEwQixnQkFBMUI7QUFDQUwsZ0JBQVEsQ0FBQ3JGLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLHdCQUF2QjtBQUNBcUYsZ0JBQVEsQ0FBQ3RGLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLHdCQUF2QjtBQUNELE9BWkQsTUFZTztBQUNMbUYsWUFBSSxDQUFDL0UsS0FBTCxDQUFXbUYsTUFBWCxHQUFvQixFQUFwQjtBQUNBLGFBQUtsRyxXQUFMLENBQWlCZSxLQUFqQixDQUF1Qm9GLFNBQXZCLEdBQW1DLGNBQW5DO0FBQ0EsYUFBS25HLFdBQUwsQ0FBaUJlLEtBQWpCLENBQXVCcUUsR0FBdkIsR0FBNkIsRUFBN0I7QUFDQSxhQUFLeEUsUUFBTCxDQUFjRixTQUFkLENBQXdCMEYsTUFBeEIsQ0FBK0IsOEJBQS9CO0FBQ0EsYUFBS3ZGLFFBQUwsQ0FBY0gsU0FBZCxDQUF3QjBGLE1BQXhCLENBQStCLDhCQUEvQjtBQUNBLGFBQUt4RixRQUFMLENBQWNGLFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLHNCQUE1QjtBQUNBLGFBQUtFLFFBQUwsQ0FBY0gsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsc0JBQTVCO0FBQ0FvRixnQkFBUSxDQUFDckYsU0FBVCxDQUFtQjBGLE1BQW5CLENBQTBCLHdCQUExQjtBQUNBSixnQkFBUSxDQUFDdEYsU0FBVCxDQUFtQjBGLE1BQW5CLENBQTBCLHdCQUExQjtBQUNBTCxnQkFBUSxDQUFDckYsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsZ0JBQXZCO0FBQ0FxRixnQkFBUSxDQUFDdEYsU0FBVCxDQUFtQkMsR0FBbkIsQ0FBdUIsZ0JBQXZCO0FBQ0Q7O0FBQUE7QUFDRjtBQTFQSDtBQUFBO0FBQUEsNkNBNFAyQnJDLE1BNVAzQixFQTRQaUQ7QUFDN0MsVUFBSTJILFlBQUo7QUFDQSxhQUFPLEtBQUszQixhQUFaLEtBQThCLFNBQTlCLEdBQTJDMkIsWUFBWSxHQUFHLEtBQUszQixhQUEvRCxHQUErRTJCLFlBQVksR0FBRyxLQUFLM0IsYUFBTCxDQUFtQmhILE9BQWpIOztBQUNBLFVBQUlnQixNQUFNLEtBQUssS0FBZixFQUFzQjtBQUNwQixhQUFLSCx1QkFBTCxDQUE2QixLQUE3QixJQUFzQztBQUFDLGlCQUFPLEdBQVI7QUFBYSxtQ0FBaUIsS0FBSzZCLFdBQUwsQ0FBaUJ5RSxXQUFqQixHQUErQixLQUFLeEgsR0FBTCxDQUFTd0gsV0FBekQ7QUFBYixTQUF0QztBQUNBLGFBQUt4SCxHQUFMLENBQVM4RCxLQUFULENBQWVNLElBQWYsR0FBc0IsS0FBdEI7QUFDQSxhQUFLSSxRQUFMLENBQWNWLEtBQWQsQ0FBb0JNLElBQXBCLEdBQTJCLElBQUksS0FBS3BFLEdBQUwsQ0FBU3dILFdBQVQsR0FBdUIsQ0FBM0IsR0FBK0IsSUFBMUQ7QUFDRCxPQUpELE1BSU87QUFDTCxZQUFJd0IsWUFBSixFQUFrQjtBQUNoQixlQUFLOUgsdUJBQUwsQ0FBNkIsS0FBN0IsSUFBc0M7QUFBQyw2QkFBVSxLQUFLNkIsV0FBTCxDQUFpQnlFLFdBQWpCLEdBQStCLEtBQUt4SCxHQUFMLENBQVN3SCxXQUFsRCxDQUFEO0FBQWtFLHFDQUFpQixLQUFLekUsV0FBTCxDQUFpQnlFLFdBQWpCLEdBQStCLEtBQUt4SCxHQUFMLENBQVN3SCxXQUF6RDtBQUFsRSxXQUF0QztBQUNBLGVBQUt6SCxHQUFMLENBQVMrRCxLQUFULENBQWVNLElBQWYsR0FBc0IsS0FBS3JCLFdBQUwsQ0FBaUJ5RSxXQUFqQixHQUErQixLQUFLeEgsR0FBTCxDQUFTd0gsV0FBeEMsR0FBc0QsSUFBNUU7QUFDQSxlQUFLaEQsUUFBTCxDQUFjVixLQUFkLENBQW9CMkQsS0FBcEIsR0FBNkIsS0FBSzFFLFdBQUwsQ0FBaUJ5RSxXQUFqQixHQUErQixLQUFLekUsV0FBTCxDQUFpQnlFLFdBQWpELEdBQWdFLEtBQUt4SCxHQUFMLENBQVN3SCxXQUFULEdBQXVCLENBQXZGLEdBQTJGLElBQXZIO0FBQ0QsU0FKRCxNQUlPO0FBQ0wsZUFBS3RHLHVCQUFMLENBQTZCLEtBQTdCLElBQXNDO0FBQUMsNkJBQVUsS0FBSzZCLFdBQUwsQ0FBaUJ5RSxXQUFqQixHQUErQixLQUFLeEgsR0FBTCxDQUFTd0gsV0FBbEQsQ0FBRDtBQUFrRSxxQ0FBaUIsS0FBS3pFLFdBQUwsQ0FBaUJ5RSxXQUFqQixHQUErQixLQUFLeEgsR0FBTCxDQUFTd0gsV0FBekQ7QUFBbEUsV0FBdEM7QUFDQSxlQUFLeEgsR0FBTCxDQUFTOEQsS0FBVCxDQUFlTSxJQUFmLEdBQXNCLEtBQUtyQixXQUFMLENBQWlCeUUsV0FBakIsR0FBK0IsS0FBS3hILEdBQUwsQ0FBU3dILFdBQXhDLEdBQXNELElBQTVFO0FBQ0EsZUFBS2hELFFBQUwsQ0FBY1YsS0FBZCxDQUFvQk0sSUFBcEIsR0FBNEIsS0FBS3JCLFdBQUwsQ0FBaUJ5RSxXQUFqQixHQUErQixLQUFLeEgsR0FBTCxDQUFTd0gsV0FBekMsR0FBd0QsS0FBS3hILEdBQUwsQ0FBU3dILFdBQVQsR0FBdUIsQ0FBL0UsR0FBa0YsSUFBN0c7QUFDRDs7QUFBQTtBQUNGOztBQUFBO0FBQ0Y7QUE5UUg7QUFBQTtBQUFBLDBEQWdSd0NuRyxNQWhSeEMsRUFnUndEcEIsS0FoUnhELEVBZ1J1RTZCLFNBaFJ2RSxFQWdSMEZzSCxPQWhSMUYsRUFnUmlIO0FBQzdHLFVBQUlKLFlBQUo7QUFDQSxhQUFPLEtBQUszQixhQUFaLEtBQThCLFNBQTlCLEdBQTJDMkIsWUFBWSxHQUFHLEtBQUszQixhQUEvRCxHQUErRTJCLFlBQVksR0FBRyxLQUFLM0IsYUFBTCxDQUFtQmhILE9BQWpIOztBQUNBLFVBQUlnQixNQUFNLEtBQUssS0FBWCxJQUFvQjJILFlBQXhCLEVBQXNDO0FBQ3BDLFlBQUloSixHQUFXLEdBQUksQ0FBQyxLQUFLK0MsV0FBTCxDQUFpQnlFLFdBQWpCLEdBQStCLEtBQUt4SCxHQUFMLENBQVN3SCxXQUF6QyxJQUF3RDFGLFNBQXpELElBQXVFN0IsS0FBSyxHQUFHbUosT0FBL0UsSUFBMEYsRUFBNUc7O0FBRUEsWUFBSSxDQUFDcEosR0FBRCxJQUFRLENBQUMsS0FBS2tCLHVCQUFMLENBQTZCbkIsR0FBN0IsQ0FBaUNBLEdBQWxDLEdBQXdDLEtBQUtDLEdBQUwsQ0FBU3dILFdBQTdELEVBQTBFO0FBQ3hFeEgsYUFBRyxHQUFHLENBQUMsS0FBS2tCLHVCQUFMLENBQTZCbkIsR0FBN0IsQ0FBaUNBLEdBQWxDLEdBQXdDLEtBQUtDLEdBQUwsQ0FBU3dILFdBQWpELEdBQStELEVBQXJFO0FBQ0QsU0FGRCxNQUVPLElBQUcsQ0FBQ3hILEdBQUQsR0FBTyxDQUFWLEVBQWE7QUFDbEJBLGFBQUcsR0FBRyxHQUFOO0FBQ0Q7O0FBQUE7QUFFRCxhQUFLa0IsdUJBQUwsQ0FBNkIsS0FBN0IsSUFBc0M7QUFBQyxpQkFBT2xCLEdBQVI7QUFBYSxtQ0FBa0IsS0FBSytDLFdBQUwsQ0FBaUJ5RSxXQUFqQixHQUErQixLQUFLeEgsR0FBTCxDQUFTd0gsV0FBMUQ7QUFBYixTQUF0QztBQUNBLGFBQUt4SCxHQUFMLENBQVM4RCxLQUFULENBQWVNLElBQWYsR0FBc0JwRSxHQUFHLEdBQUcsSUFBNUI7QUFDQSxhQUFLd0UsUUFBTCxDQUFjVixLQUFkLENBQW9CTSxJQUFwQixHQUEyQixDQUFDcEUsR0FBRCxHQUFPLEtBQUtBLEdBQUwsQ0FBU3dILFdBQVQsR0FBdUIsQ0FBOUIsR0FBa0MsSUFBN0Q7QUFDRCxPQVpELE1BWU8sSUFBSW5HLE1BQU0sS0FBSyxLQUFmLEVBQXNCO0FBQzNCLFlBQUlyQixJQUFXLEdBQUksQ0FBQyxLQUFLK0MsV0FBTCxDQUFpQnlFLFdBQWpCLEdBQStCLEtBQUt4SCxHQUFMLENBQVN3SCxXQUF6QyxJQUF3RDFGLFNBQXpELElBQXVFN0IsS0FBSyxHQUFHbUosT0FBL0UsSUFBMEYsRUFBNUc7O0FBRUEsWUFBRyxDQUFDcEosSUFBRCxHQUFPLENBQVYsRUFBYTtBQUNYQSxjQUFHLEdBQUcsR0FBTjtBQUNELFNBRkQsTUFFTyxJQUFJLENBQUNBLElBQUQsR0FBTyxLQUFLK0MsV0FBTCxDQUFpQnlFLFdBQWpCLEdBQStCLEtBQUt4SCxHQUFMLENBQVN3SCxXQUFuRCxFQUFnRTtBQUNyRXhILGNBQUcsR0FBSSxLQUFLK0MsV0FBTCxDQUFpQnlFLFdBQWpCLEdBQStCLEtBQUt4SCxHQUFMLENBQVN3SCxXQUF6QyxHQUF3RCxFQUE5RDtBQUNEOztBQUFBO0FBRUQsYUFBS3RHLHVCQUFMLENBQTZCLEtBQTdCLElBQXNDO0FBQUMsaUJBQU9sQixJQUFSO0FBQWEsbUNBQWtCLEtBQUsrQyxXQUFMLENBQWlCeUUsV0FBakIsR0FBK0IsS0FBS3hILEdBQUwsQ0FBU3dILFdBQTFEO0FBQWIsU0FBdEM7QUFDQSxhQUFLeEgsR0FBTCxDQUFTOEQsS0FBVCxDQUFlTSxJQUFmLEdBQXNCcEUsSUFBRyxHQUFHLElBQTVCO0FBQ0EsYUFBS3dFLFFBQUwsQ0FBY1YsS0FBZCxDQUFvQk0sSUFBcEIsR0FBMkIsQ0FBQ3BFLElBQUQsR0FBTyxLQUFLQSxHQUFMLENBQVN3SCxXQUFULEdBQXVCLENBQTlCLEdBQWtDLElBQTdEO0FBQ0QsT0FaTSxNQVlBLElBQUluRyxNQUFNLEtBQUssS0FBZixFQUFzQjtBQUMzQixZQUFJdEIsR0FBVyxHQUFJLENBQUMsS0FBS2dELFdBQUwsQ0FBaUJ5RSxXQUFqQixHQUErQixLQUFLekgsR0FBTCxDQUFTeUgsV0FBekMsSUFBd0QxRixTQUF6RCxJQUF1RTdCLEtBQUssR0FBR21KLE9BQS9FLElBQTBGLEVBQTVHOztBQUVBLFlBQUksQ0FBQ3JKLEdBQUQsSUFBUSxDQUFDLEtBQUttQix1QkFBTCxDQUE2QmxCLEdBQTdCLENBQWlDQSxHQUFsQyxHQUF3QyxLQUFLQSxHQUFMLENBQVN3SCxXQUE3RCxFQUEwRTtBQUN4RXpILGFBQUcsR0FBRyxDQUFDLEtBQUttQix1QkFBTCxDQUE2QmxCLEdBQTdCLENBQWlDQSxHQUFsQyxHQUF3QyxLQUFLRCxHQUFMLENBQVN5SCxXQUFqRCxHQUErRCxFQUFyRTtBQUNELFNBRkQsTUFFTyxJQUFHLENBQUN6SCxHQUFELEdBQU8sS0FBS2dELFdBQUwsQ0FBaUJ5RSxXQUFqQixHQUErQixLQUFLeEgsR0FBTCxDQUFTd0gsV0FBbEQsRUFBOEQ7QUFDbkV6SCxhQUFHLEdBQUksS0FBS2dELFdBQUwsQ0FBaUJ5RSxXQUFqQixHQUErQixLQUFLeEgsR0FBTCxDQUFTd0gsV0FBekMsR0FBd0QsRUFBOUQ7QUFDRDs7QUFBQTtBQUVELGFBQUt0Ryx1QkFBTCxDQUE2QixLQUE3QixJQUFzQztBQUFDLGlCQUFPbkIsR0FBUjtBQUFhLG1DQUFrQixLQUFLZ0QsV0FBTCxDQUFpQnlFLFdBQWpCLEdBQStCLEtBQUt6SCxHQUFMLENBQVN5SCxXQUExRDtBQUFiLFNBQXRDO0FBQ0EsYUFBS3pILEdBQUwsQ0FBUytELEtBQVQsQ0FBZU0sSUFBZixHQUFzQnJFLEdBQUcsR0FBRyxJQUE1QjtBQUNBLGFBQUt5RSxRQUFMLENBQWNWLEtBQWQsQ0FBb0IyRCxLQUFwQixHQUE2QixLQUFLMUUsV0FBTCxDQUFpQnlFLFdBQWpCLEdBQStCLENBQUN6SCxHQUFqQyxHQUF3QyxLQUFLQyxHQUFMLENBQVN3SCxXQUFULEdBQXVCLENBQS9ELEdBQW1FLElBQS9GO0FBQ0Q7QUFDRjtBQXhUSDtBQUFBO0FBQUEsK0NBMFQ2Qm5HLE1BMVQ3QixFQTBUNkNwQixLQTFUN0MsRUEwVDRENkIsU0ExVDVELEVBMFQrRXNILE9BMVQvRSxFQTBUc0c7QUFDbEcsVUFBSS9ILE1BQU0sS0FBSyxLQUFmLEVBQXNCO0FBQ3BCLFlBQUlyQixHQUFXLEdBQUdKLE1BQU0sQ0FBRSxDQUFDLEtBQUttRCxXQUFMLENBQWlCeUUsV0FBakIsR0FBK0IsS0FBS3hILEdBQUwsQ0FBU3dILFdBQXpDLElBQXdELENBQUMxRixTQUExRCxJQUF3RSxDQUFDN0IsS0FBRCxHQUFTLENBQUNtSixPQUFsRixDQUFELENBQXhCOztBQUVBLFlBQUcsQ0FBQ3BKLEdBQUQsR0FBTyxDQUFWLEVBQWE7QUFDWEEsYUFBRyxHQUFHLEdBQU47QUFDRCxTQUZELE1BRU8sSUFBSSxDQUFDQSxHQUFELEdBQU8sS0FBSytDLFdBQUwsQ0FBaUJ5RSxXQUFqQixHQUErQixLQUFLeEgsR0FBTCxDQUFTd0gsV0FBbkQsRUFBZ0U7QUFDckV4SCxhQUFHLEdBQUdKLE1BQU0sQ0FBRSxLQUFLbUQsV0FBTCxDQUFpQnlFLFdBQWpCLEdBQStCLEtBQUt4SCxHQUFMLENBQVN3SCxXQUExQyxDQUFaO0FBQ0Q7O0FBQUE7QUFFRCxhQUFLeEgsR0FBTCxDQUFTOEQsS0FBVCxDQUFlTSxJQUFmLEdBQXNCcEUsR0FBRyxHQUFHLElBQTVCO0FBQ0EsYUFBS3dFLFFBQUwsQ0FBY1YsS0FBZCxDQUFvQk0sSUFBcEIsR0FBMkIsQ0FBQ3BFLEdBQUQsR0FBTyxLQUFLQSxHQUFMLENBQVN3SCxXQUFULEdBQXVCLENBQTlCLEdBQWtDLElBQTdEO0FBQ0QsT0FYRCxNQVdPLElBQUluRyxNQUFNLEtBQUssS0FBZixFQUFzQjtBQUMzQixZQUFJdEIsR0FBVyxHQUFHSCxNQUFNLENBQUUsQ0FBQyxLQUFLbUQsV0FBTCxDQUFpQnlFLFdBQWpCLEdBQStCLEtBQUt6SCxHQUFMLENBQVN5SCxXQUF6QyxJQUF3RCxDQUFDMUYsU0FBMUQsSUFBd0UsQ0FBQzdCLEtBQUQsR0FBUyxDQUFDbUosT0FBbEYsQ0FBRCxDQUF4Qjs7QUFFQSxZQUFJLENBQUNySixHQUFELElBQVEsQ0FBQyxLQUFLbUIsdUJBQUwsQ0FBNkJsQixHQUE3QixDQUFpQ0EsR0FBbEMsR0FBd0MsS0FBS0EsR0FBTCxDQUFTd0gsV0FBN0QsRUFBMEU7QUFDeEV6SCxhQUFHLEdBQUdILE1BQU0sQ0FBQyxDQUFDLEtBQUtzQix1QkFBTCxDQUE2QmxCLEdBQTdCLENBQWlDQSxHQUFsQyxHQUF3QyxLQUFLRCxHQUFMLENBQVN5SCxXQUFsRCxDQUFaO0FBQ0QsU0FGRCxNQUVPLElBQUcsQ0FBQ3pILEdBQUQsR0FBTyxLQUFLZ0QsV0FBTCxDQUFpQnlFLFdBQWpCLEdBQStCLEtBQUt4SCxHQUFMLENBQVN3SCxXQUFsRCxFQUE4RDtBQUNuRXpILGFBQUcsR0FBR0gsTUFBTSxDQUFFLEtBQUttRCxXQUFMLENBQWlCeUUsV0FBakIsR0FBK0IsS0FBS3hILEdBQUwsQ0FBU3dILFdBQTFDLENBQVo7QUFDRDs7QUFBQTtBQUVELGFBQUt6SCxHQUFMLENBQVMrRCxLQUFULENBQWVNLElBQWYsR0FBc0JyRSxHQUFHLEdBQUcsSUFBNUI7QUFDQSxhQUFLeUUsUUFBTCxDQUFjVixLQUFkLENBQW9CMkQsS0FBcEIsR0FBNkIsS0FBSzFFLFdBQUwsQ0FBaUJ5RSxXQUFqQixHQUErQixDQUFDekgsR0FBakMsR0FBd0MsS0FBS0MsR0FBTCxDQUFTd0gsV0FBVCxHQUF1QixDQUEvRCxHQUFtRSxJQUEvRjtBQUNEOztBQUFBO0FBQ0Y7QUFsVkg7O0FBQUE7QUFBQTtBQW1WQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNVdNLElBQU02QixXQUFiO0FBSUUseUJBQWU7QUFBQTs7QUFBQTs7QUFDYixRQUFJQyxJQUFvQixHQUFHL0YsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQTNCO0FBQ0E4RixRQUFJLENBQUM3RixTQUFMLENBQWVDLEdBQWYsQ0FBbUIsYUFBbkI7QUFDQSxTQUFLNkYsS0FBTCxHQUFhRCxJQUFiO0FBQ0Q7O0FBUkg7QUFBQTtBQUFBLGtDQVUrQjtBQUMzQixhQUFPLEtBQUtDLEtBQVo7QUFDRDtBQVpIOztBQUFBO0FBQUE7QUFjQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDWk0sSUFBTUMsVUFBYjtBQU9FLHdCQUFjO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ1osUUFBSUMsT0FBeUIsR0FBR2xHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFoQztBQUNBLFFBQUlrRyxPQUF5QixHQUFHbkcsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWhDO0FBQ0EsUUFBSW1HLE9BQXlCLEdBQUdwRyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBaEM7QUFDQSxRQUFJb0csT0FBeUIsR0FBR3JHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFoQztBQUNBLFFBQUlxRyxPQUF5QixHQUFHdEcsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWhDO0FBQ0FpRyxXQUFPLENBQUNoRyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQiwrQkFBdEIsRUFBdUQsa0NBQXZEO0FBQ0FnRyxXQUFPLENBQUNqRyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQiwrQkFBdEIsRUFBdUQsa0NBQXZEO0FBQ0FpRyxXQUFPLENBQUNsRyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQiwrQkFBdEIsRUFBdUQsa0NBQXZEO0FBQ0FrRyxXQUFPLENBQUNuRyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQiwrQkFBdEIsRUFBdUQsa0NBQXZEO0FBQ0FtRyxXQUFPLENBQUNwRyxTQUFSLENBQWtCQyxHQUFsQixDQUFzQiwrQkFBdEIsRUFBdUQsa0NBQXZEO0FBQ0EsU0FBS29HLFlBQUwsR0FBb0JMLE9BQXBCO0FBQ0EsU0FBS00sWUFBTCxHQUFvQkwsT0FBcEI7QUFDQSxTQUFLTSxZQUFMLEdBQW9CTCxPQUFwQjtBQUNBLFNBQUtNLFlBQUwsR0FBb0JMLE9BQXBCO0FBQ0EsU0FBS00sWUFBTCxHQUFvQkwsT0FBcEI7QUFDRDs7QUF2Qkg7QUFBQTtBQUFBLGtDQXlCZ0JNLE1BekJoQixFQXlCc0Q7QUFDbEQsV0FBS0wsWUFBTCxDQUFrQm5GLFNBQWxCLEdBQThCd0YsTUFBTSxDQUFDLElBQUQsQ0FBcEM7QUFDQSxXQUFLSixZQUFMLENBQWtCcEYsU0FBbEIsR0FBOEJ3RixNQUFNLENBQUMsSUFBRCxDQUFwQztBQUNBLFdBQUtILFlBQUwsQ0FBa0JyRixTQUFsQixHQUE4QndGLE1BQU0sQ0FBQyxJQUFELENBQXBDO0FBQ0EsV0FBS0YsWUFBTCxDQUFrQnRGLFNBQWxCLEdBQThCd0YsTUFBTSxDQUFDLElBQUQsQ0FBcEM7QUFDQSxXQUFLRCxZQUFMLENBQWtCdkYsU0FBbEIsR0FBOEJ3RixNQUFNLENBQUMsSUFBRCxDQUFwQztBQUNEO0FBL0JIO0FBQUE7QUFBQSwyQ0FpQ3lCQyxNQWpDekIsRUFpQ2lEQyxNQWpDakQsRUFpQytFO0FBQzNFLFdBQUtQLFlBQUwsQ0FBa0JoRyxLQUFsQixDQUF3QjJELEtBQXhCLEdBQWlDLENBQUMyQyxNQUFNLENBQUM1QyxXQUFQLEdBQXFCNkMsTUFBTSxDQUFDN0MsV0FBN0IsSUFBNEMsSUFBN0MsR0FBc0QsS0FBS3NDLFlBQUwsQ0FBa0J0QyxXQUFsQixHQUFnQyxDQUF0RixHQUE0RjZDLE1BQU0sQ0FBQzdDLFdBQVAsR0FBcUIsQ0FBakgsR0FBc0gsSUFBdEo7QUFDQSxXQUFLMEMsWUFBTCxDQUFrQnBHLEtBQWxCLENBQXdCTSxJQUF4QixHQUFnQyxDQUFDZ0csTUFBTSxDQUFDNUMsV0FBUCxHQUFxQjZDLE1BQU0sQ0FBQzdDLFdBQTdCLElBQTRDLElBQTdDLEdBQXNELEtBQUswQyxZQUFMLENBQWtCMUMsV0FBbEIsR0FBZ0MsQ0FBdEYsR0FBNEY2QyxNQUFNLENBQUM3QyxXQUFQLEdBQXFCLENBQWpILEdBQXNILElBQXJKO0FBQ0EsV0FBS3VDLFlBQUwsQ0FBa0JqRyxLQUFsQixDQUF3QjJELEtBQXhCLEdBQWlDLENBQUMyQyxNQUFNLENBQUM1QyxXQUFQLEdBQXFCNkMsTUFBTSxDQUFDN0MsV0FBN0IsSUFBNEMsSUFBN0MsR0FBc0QsS0FBS3VDLFlBQUwsQ0FBa0J2QyxXQUFsQixHQUFnQyxDQUF0RixHQUE0RjZDLE1BQU0sQ0FBQzdDLFdBQVAsR0FBcUIsQ0FBakgsR0FBc0gsSUFBdEo7QUFDQSxXQUFLeUMsWUFBTCxDQUFrQm5HLEtBQWxCLENBQXdCTSxJQUF4QixHQUFnQyxDQUFDZ0csTUFBTSxDQUFDNUMsV0FBUCxHQUFxQjZDLE1BQU0sQ0FBQzdDLFdBQTdCLElBQTRDLElBQTdDLEdBQXNELEtBQUt5QyxZQUFMLENBQWtCekMsV0FBbEIsR0FBZ0MsQ0FBdEYsR0FBNEY2QyxNQUFNLENBQUM3QyxXQUFQLEdBQXFCLENBQWpILEdBQXNILElBQXJKO0FBQ0EsV0FBS3dDLFlBQUwsQ0FBa0JsRyxLQUFsQixDQUF3Qk0sSUFBeEIsR0FBZ0MsQ0FBQ2dHLE1BQU0sQ0FBQzVDLFdBQVAsR0FBcUI2QyxNQUFNLENBQUM3QyxXQUE3QixJQUE0QyxJQUE3QyxHQUFzRCxLQUFLd0MsWUFBTCxDQUFrQnhDLFdBQWxCLEdBQWdDLENBQXRGLEdBQTRGNkMsTUFBTSxDQUFDN0MsV0FBUCxHQUFxQixDQUFqSCxHQUFzSCxJQUFySjtBQUNEO0FBdkNIO0FBQUE7QUFBQSxzQ0F5Q29CM0QsTUF6Q3BCLEVBeUNvRDtBQUNoRCxVQUFJQSxNQUFNLENBQUN4RCxPQUFQLEtBQW1CLElBQXZCLEVBQTZCO0FBQzNCLGFBQUt5SixZQUFMLENBQWtCaEcsS0FBbEIsQ0FBd0JDLE9BQXhCLEdBQWtDLFFBQWxDO0FBQ0EsYUFBS2dHLFlBQUwsQ0FBa0JqRyxLQUFsQixDQUF3QkMsT0FBeEIsR0FBa0MsUUFBbEM7QUFDQSxhQUFLaUcsWUFBTCxDQUFrQmxHLEtBQWxCLENBQXdCQyxPQUF4QixHQUFrQyxRQUFsQztBQUNBLGFBQUtrRyxZQUFMLENBQWtCbkcsS0FBbEIsQ0FBd0JDLE9BQXhCLEdBQWtDLFFBQWxDO0FBQ0EsYUFBS21HLFlBQUwsQ0FBa0JwRyxLQUFsQixDQUF3QkMsT0FBeEIsR0FBa0MsUUFBbEM7QUFDRCxPQU5ELE1BTU87QUFDTCxhQUFLK0YsWUFBTCxDQUFrQmhHLEtBQWxCLENBQXdCQyxPQUF4QixHQUFrQyxNQUFsQztBQUNBLGFBQUtnRyxZQUFMLENBQWtCakcsS0FBbEIsQ0FBd0JDLE9BQXhCLEdBQWtDLE1BQWxDO0FBQ0EsYUFBS2lHLFlBQUwsQ0FBa0JsRyxLQUFsQixDQUF3QkMsT0FBeEIsR0FBa0MsTUFBbEM7QUFDQSxhQUFLa0csWUFBTCxDQUFrQm5HLEtBQWxCLENBQXdCQyxPQUF4QixHQUFrQyxNQUFsQztBQUNBLGFBQUttRyxZQUFMLENBQWtCcEcsS0FBbEIsQ0FBd0JDLE9BQXhCLEdBQWtDLE1BQWxDO0FBQ0Q7O0FBQUE7QUFDRjtBQXZESDtBQUFBO0FBQUEsZ0RBeUQ4QmtELFdBekQ5QixFQXlEMEQ7QUFDdEQsVUFBR0EsV0FBVyxLQUFLLElBQW5CLEVBQXlCO0FBQ3ZCLGFBQUs2QyxZQUFMLENBQWtCckcsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLDBDQUFoQztBQUNBLGFBQUtxRyxZQUFMLENBQWtCdEcsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLDBDQUFoQztBQUNBLGFBQUtzRyxZQUFMLENBQWtCdkcsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLDBDQUFoQztBQUNBLGFBQUt1RyxZQUFMLENBQWtCeEcsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLDBDQUFoQztBQUNBLGFBQUt3RyxZQUFMLENBQWtCekcsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLDBDQUFoQztBQUNELE9BTkQsTUFNTztBQUNMLGFBQUtvRyxZQUFMLENBQWtCckcsU0FBbEIsQ0FBNEIwRixNQUE1QixDQUFtQywwQ0FBbkM7QUFDQSxhQUFLWSxZQUFMLENBQWtCdEcsU0FBbEIsQ0FBNEIwRixNQUE1QixDQUFtQywwQ0FBbkM7QUFDQSxhQUFLYSxZQUFMLENBQWtCdkcsU0FBbEIsQ0FBNEIwRixNQUE1QixDQUFtQywwQ0FBbkM7QUFDQSxhQUFLYyxZQUFMLENBQWtCeEcsU0FBbEIsQ0FBNEIwRixNQUE1QixDQUFtQywwQ0FBbkM7QUFDQSxhQUFLZSxZQUFMLENBQWtCekcsU0FBbEIsQ0FBNEIwRixNQUE1QixDQUFtQywwQ0FBbkM7QUFDRDs7QUFBQTtBQUNGO0FBdkVIOztBQUFBO0FBQUE7QUF3RUMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFFTSxJQUFNbUIsVUFBYjtBQUlFLHNCQUFhSCxNQUFiLEVBQThDO0FBQUE7O0FBQUE7O0FBQUE7O0FBQzVDLFFBQUluSyxHQUF3QixHQUFHdUQsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQS9CO0FBQ0EsUUFBSXpELEdBQXdCLEdBQUd3RCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBL0I7QUFDQXhELE9BQUcsQ0FBQzJFLFNBQUosR0FBZ0J3RixNQUFNLENBQUNuSyxHQUF2QjtBQUNBRCxPQUFHLENBQUM0RSxTQUFKLEdBQWdCd0YsTUFBTSxDQUFDcEssR0FBdkI7QUFDQUMsT0FBRyxDQUFDeUQsU0FBSixDQUFjQyxHQUFkLENBQWtCLGdCQUFsQjtBQUNBM0QsT0FBRyxDQUFDMEQsU0FBSixDQUFjQyxHQUFkLENBQWtCLGdCQUFsQjtBQUNBLFNBQUtvRixRQUFMLEdBQWdCOUksR0FBaEI7QUFDQSxTQUFLK0ksUUFBTCxHQUFnQmhKLEdBQWhCO0FBQ0Q7O0FBYkg7QUFBQTtBQUFBLGtDQWV3QjtBQUNwQixhQUFPO0FBQUNDLFdBQUcsRUFBRSxLQUFLOEksUUFBWDtBQUFxQi9JLFdBQUcsRUFBRSxLQUFLZ0o7QUFBL0IsT0FBUDtBQUNEO0FBakJIOztBQUFBO0FBQUEsSTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtDO0FBS0E7QUFXQTtBQUVNLElBQU13QixJQUFiO0FBeUJFLGdCQUFZbEosTUFBWixFQUFvQ2QsUUFBcEMsRUFBd0Q7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSwrQ0EyQ2pCO0FBQ3JDLDhCQUF3QixLQURhO0FBRXJDLG9CQUFjLEtBRnVCO0FBR3JDLCtCQUF5QixLQUhZO0FBSXJDLCtCQUF5QixLQUpZO0FBS3JDLDBCQUFvQixLQUxpQjtBQU1yQyxnQ0FBMEIsS0FOVztBQU9yQyxnQ0FBMEIsS0FQVztBQVFyQyxtQ0FBNkI7QUFSUSxLQTNDaUI7O0FBQ3RELFNBQUtBLFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS3FILElBQUwsR0FBWXZHLE1BQVo7QUFDQSxTQUFLMEIsV0FBTCxHQUFtQixJQUFJc0csb0VBQUosR0FBa0JtQixXQUFsQixFQUFuQjtBQUVBLFFBQUlwRCxPQUFnQixHQUFHLElBQUkvQywyREFBSixFQUF2QjtBQUNBLFNBQUtyQixTQUFMLEdBQWlCb0UsT0FBTyxDQUFDcEUsU0FBekI7QUFDQSxTQUFLc0IsU0FBTCxHQUFpQjhDLE9BQU8sQ0FBQzlDLFNBQXpCO0FBRUEsUUFBSW1HLFVBQXNCLEdBQUcsSUFBSUgsaUVBQUosQ0FBZTtBQUFDLGFBQU8sS0FBSy9KLFFBQUwsQ0FBYyxLQUFkLENBQVI7QUFBOEIsYUFBTyxLQUFLQSxRQUFMLENBQWMsS0FBZDtBQUFyQyxLQUFmLENBQTdCO0FBQ0EsU0FBS3VJLFFBQUwsR0FBZ0IyQixVQUFVLENBQUMzQixRQUEzQjtBQUNBLFNBQUtDLFFBQUwsR0FBZ0IwQixVQUFVLENBQUMxQixRQUEzQjs7QUFFQSxRQUFJeEksUUFBUSxDQUFDLFdBQUQsQ0FBUixLQUEwQixJQUE5QixFQUFvQztBQUNsQyxVQUFJbUssUUFBUSxHQUFHLElBQUlqRyw4REFBSixFQUFmO0FBQ0EsV0FBS2lHLFFBQUwsR0FBZ0JBLFFBQVEsQ0FBQzNELHlCQUF6QjtBQUNBLFdBQUs1RCxZQUFMLEdBQW9CdUgsUUFBUSxDQUFDdkgsWUFBN0I7QUFDQSxXQUFLNkQsaUJBQUwsR0FBeUIwRCxRQUFRLENBQUMxRCxpQkFBbEM7QUFDQSxXQUFLQyxXQUFMLEdBQW1CeUQsUUFBUSxDQUFDekQsV0FBNUI7QUFDQSxXQUFLakYsUUFBTCxHQUFnQjBJLFFBQVEsQ0FBQzFJLFFBQXpCO0FBQ0EsV0FBS0UsUUFBTCxHQUFnQndJLFFBQVEsQ0FBQ3hJLFFBQXpCO0FBQ0EsV0FBSzBDLG9CQUFMLEdBQTRCOEYsUUFBUSxDQUFDOUYsb0JBQXJDO0FBQ0EsV0FBS0Usb0JBQUwsR0FBNEI0RixRQUFRLENBQUM1RixvQkFBckM7QUFDQSxXQUFLb0MsZ0JBQUwsR0FBd0J3RCxRQUFRLENBQUN4RCxnQkFBakM7QUFDRDs7QUFBQTtBQUNELFNBQUt5RCxpQkFBTCxHQUF5QnBLLFFBQVEsQ0FBQ29LLGlCQUFsQztBQUVBLFFBQUlDLGFBQTRCLEdBQUcsSUFBSXRILHdFQUFKLEVBQW5DO0FBQ0EsU0FBS0ssUUFBTCxHQUFnQmlILGFBQWEsQ0FBQ2pILFFBQTlCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQmdILGFBQWEsQ0FBQ2hILFFBQTlCO0FBRUEsU0FBS1ksUUFBTCxHQUFnQixJQUFJRCx3RUFBSixHQUFvQmlHLFdBQXBCLEVBQWhCOztBQUVBLFFBQUcsS0FBS2pLLFFBQUwsQ0FBYyxXQUFkLE1BQStCLElBQWxDLEVBQXdDO0FBQ3RDLFdBQUtVLGNBQUwsR0FBc0IsSUFBSWtHLDBFQUFKLENBQW1CO0FBQUMsZUFBTyxLQUFLbkUsU0FBYjtBQUF3QixlQUFPLEtBQUtzQixTQUFwQztBQUE4QyxvQkFBWSxLQUFLWCxRQUEvRDtBQUF5RSxvQkFBWSxLQUFLQyxRQUExRjtBQUFvRyx1QkFBZSxLQUFLYixXQUF4SDtBQUFxSSx1QkFBZSxLQUFLa0UsV0FBTCxHQUFtQixLQUFLQSxXQUF4QixHQUFzQyxLQUFLMUcsUUFBTCxDQUFjdUgsUUFBeE07QUFBa04seUJBQWlCLEtBQUszRSxZQUFMLEdBQW9CLEtBQUtBLFlBQXpCLEdBQXdDLEtBQUs1QyxRQUFMLENBQWNnSixLQUF6UjtBQUFnUyxvQkFBWSxLQUFLL0UsUUFBalQ7QUFBMlQsZ0JBQVEsS0FBS2pFLFFBQUwsQ0FBYytHO0FBQWpWLE9BQW5CLENBQXRCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsV0FBS3JHLGNBQUwsR0FBc0IsSUFBSWtHLDBFQUFKLENBQW1CO0FBQUMsZUFBTyxLQUFLbkUsU0FBYjtBQUF3QixlQUFPLEtBQUtzQixTQUFwQztBQUE4QyxvQkFBWSxLQUFLWCxRQUEvRDtBQUF5RSxvQkFBWSxLQUFLQyxRQUExRjtBQUFvRyx1QkFBZSxLQUFLYixXQUF4SDtBQUFxSSx1QkFBZSxLQUFLeEMsUUFBTCxDQUFjdUgsUUFBbEs7QUFBNEsseUJBQWlCLEtBQUt2SCxRQUFMLENBQWNnSixLQUEzTTtBQUFrTixvQkFBWSxLQUFLL0UsUUFBbk87QUFBNk8sZ0JBQVEsS0FBS2pFLFFBQUwsQ0FBYytHO0FBQW5RLE9BQW5CLENBQXRCO0FBQ0Q7O0FBQUE7QUFFRCxTQUFLMUUsVUFBTCxHQUFrQixJQUFJNEcsa0VBQUosRUFBbEI7QUFDQSxTQUFLcUIsZUFBTCxHQUF1QnRILFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUF2QjtBQUNEOztBQWxFSDtBQUFBO0FBQUEsc0NBK0UwQjtBQUV0QixXQUFLcUgsZUFBTCxDQUFxQnBILFNBQXJCLENBQStCQyxHQUEvQixDQUFtQyxZQUFuQztBQUNBLFdBQUttSCxlQUFMLENBQXFCL0QsTUFBckIsQ0FBNEIsS0FBSy9ELFdBQWpDO0FBQ0EsV0FBSzZFLElBQUwsQ0FBVWQsTUFBVixDQUFpQixLQUFLK0QsZUFBdEI7QUFDQSxXQUFLOUgsV0FBTCxDQUFpQitELE1BQWpCLENBQXdCLEtBQUs5RCxTQUE3QjtBQUNBLFdBQUtELFdBQUwsQ0FBaUIrRCxNQUFqQixDQUF3QixLQUFLeEMsU0FBN0I7QUFDQSxXQUFLdkIsV0FBTCxDQUFpQitELE1BQWpCLENBQXdCLEtBQUtnQyxRQUE3QjtBQUNBLFdBQUsvRixXQUFMLENBQWlCK0QsTUFBakIsQ0FBd0IsS0FBS2lDLFFBQTdCO0FBQ0EsV0FBS2hHLFdBQUwsQ0FBaUIrRCxNQUFqQixDQUF3QixLQUFLbEUsVUFBTCxDQUFnQmtILFlBQXhDLEVBQXNELEtBQUtsSCxVQUFMLENBQWdCbUgsWUFBdEUsRUFBb0YsS0FBS25ILFVBQUwsQ0FBZ0JvSCxZQUFwRyxFQUFrSCxLQUFLcEgsVUFBTCxDQUFnQnFILFlBQWxJLEVBQWdKLEtBQUtySCxVQUFMLENBQWdCc0gsWUFBaEs7QUFDQSxXQUFLeEksaUJBQUwsQ0FBdUIsd0JBQXZCLElBQW1ELElBQW5EO0FBQ0EsV0FBSzhDLFFBQUwsQ0FBY1YsS0FBZCxDQUFvQm1GLE1BQXBCLEdBQTZCLEtBQUtsRyxXQUFMLENBQWlCK0gsWUFBakIsR0FBZ0MsSUFBN0Q7QUFDQSxXQUFLL0gsV0FBTCxDQUFpQitELE1BQWpCLENBQXdCLEtBQUt0QyxRQUE3QjtBQUNBLFdBQUt4QixTQUFMLENBQWU4RCxNQUFmLENBQXNCLEtBQUtuRCxRQUEzQjtBQUNBLFdBQUtXLFNBQUwsQ0FBZXdDLE1BQWYsQ0FBc0IsS0FBS2xELFFBQTNCOztBQUVBLFVBQUksS0FBS3JELFFBQUwsQ0FBYyxjQUFkLE1BQWtDLEtBQXRDLEVBQTZDO0FBQzNDLGFBQUtvRCxRQUFMLENBQWNHLEtBQWQsQ0FBb0JDLE9BQXBCLEdBQThCLE1BQTlCO0FBQ0EsYUFBS0gsUUFBTCxDQUFjRSxLQUFkLENBQW9CQyxPQUFwQixHQUE4QixNQUE5QjtBQUNELE9BSEQsTUFHTztBQUNMLFlBQUcsS0FBS3hELFFBQUwsQ0FBYyxXQUFkLE1BQStCLElBQS9CLElBQXVDLEtBQUt5RyxpQkFBL0MsRUFBa0U7QUFDaEUsZUFBS0EsaUJBQUwsQ0FBdUIzRyxPQUF2QixHQUFpQyxJQUFqQztBQUNEOztBQUFBO0FBQ0Y7O0FBQUE7O0FBRUQsVUFBRyxLQUFLRSxRQUFMLENBQWMsV0FBZCxNQUErQixJQUEvQixJQUF1QyxLQUFLbUssUUFBL0MsRUFBeUQ7QUFDdkQsYUFBS2hKLGlCQUFMLENBQXVCLGtCQUF2QixJQUE2QyxJQUE3Qzs7QUFDQSxZQUFJLEtBQUtpSixpQkFBTCxLQUEyQixPQUEzQixJQUFzQyxPQUFPLEtBQUtBLGlCQUFaLEtBQWtDLFFBQTVFLEVBQXNGO0FBQ3BGcEgsa0JBQVEsQ0FBQ3dILGdCQUFULENBQTBCLEtBQUtKLGlCQUEvQixFQUFrRCxDQUFsRCxFQUFxRDdELE1BQXJELENBQTRELEtBQUs0RCxRQUFqRTtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUs5QyxJQUFMLENBQVVkLE1BQVYsQ0FBaUIsS0FBSzRELFFBQXRCO0FBQ0Q7O0FBQUE7QUFDRjs7QUFBQTs7QUFFRCxVQUFJLEtBQUtuSyxRQUFMLENBQWMsT0FBZCxNQUEyQixJQUEvQixFQUFxQztBQUNuQyxhQUFLK0QsU0FBTCxDQUFlUixLQUFmLENBQXFCQyxPQUFyQixHQUErQixPQUEvQjtBQUNBLGFBQUtTLFFBQUwsQ0FBY1YsS0FBZCxDQUFvQkMsT0FBcEIsR0FBOEIsT0FBOUI7O0FBQ0EsWUFBRyxLQUFLeEQsUUFBTCxDQUFjLFdBQWQsTUFBK0IsSUFBbEMsRUFBd0M7QUFDdEMsZUFBSzRDLFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQjlDLE9BQWxCLEdBQTRCLElBQWhELEdBQXVELEtBQXZEO0FBQ0EsZUFBSzZCLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjNEIsS0FBZCxDQUFvQmtILE9BQXBCLEdBQThCLEdBQTlDLEdBQW9ELEtBQXBEO0FBQ0Q7O0FBQUE7QUFDRjs7QUFBQTs7QUFHRCxVQUFJLEtBQUt6SyxRQUFMLENBQWMsVUFBZCxNQUE4QixJQUFsQyxFQUF3QztBQUN0QyxZQUFHLEtBQUtBLFFBQUwsQ0FBYyxXQUFkLE1BQStCLElBQS9CLElBQXVDLEtBQUswRyxXQUEvQyxFQUE0RDtBQUMxRCxlQUFLQSxXQUFMLEdBQW1CLEtBQUtBLFdBQUwsQ0FBaUI1RyxPQUFqQixHQUEyQixJQUE5QyxHQUFxRCxLQUFyRDtBQUNBLGVBQUtZLGNBQUwsQ0FBb0JnSyxXQUFwQixDQUFnQyxLQUFLaEUsV0FBckMsRUFBa0QsS0FBSzRELGVBQXZELEVBQXdFLEtBQUsvQixRQUE3RSxFQUF1RixLQUFLQyxRQUE1RjtBQUNBLGVBQUtuRyxVQUFMLENBQWdCc0ksMkJBQWhCLENBQTRDLEtBQUtqRSxXQUFMLENBQWlCNUcsT0FBN0Q7QUFDRCxTQUpELE1BSU87QUFDTCxlQUFLWSxjQUFMLENBQW9CZ0ssV0FBcEIsQ0FBZ0MsSUFBaEMsRUFBc0MsS0FBS0osZUFBM0MsRUFBNEQsS0FBSy9CLFFBQWpFLEVBQTJFLEtBQUtDLFFBQWhGO0FBQ0EsZUFBS25HLFVBQUwsQ0FBZ0JzSSwyQkFBaEIsQ0FBNEMsSUFBNUM7QUFDRDs7QUFBQTtBQUNGOztBQUFBOztBQUVELFVBQUksS0FBSzNLLFFBQUwsQ0FBYytHLElBQWQsS0FBdUIsSUFBdkIsSUFBK0IsS0FBSy9HLFFBQUwsQ0FBYyxXQUFkLE1BQStCLElBQWxFLEVBQXdFO0FBQ3RFLGFBQUsyQixRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY2dELFlBQWQsQ0FBMkIsTUFBM0IsRUFBbUMsS0FBSzNFLFFBQUwsQ0FBYytHLElBQWQsR0FBcUIsRUFBeEQsQ0FBaEIsR0FBOEUsS0FBOUU7QUFDQSxhQUFLdEYsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNrRCxZQUFkLENBQTJCLE1BQTNCLEVBQW1DLEtBQUszRSxRQUFMLENBQWMrRyxJQUFkLEdBQXFCLEVBQXhELENBQWhCLEdBQThFLEtBQTlFO0FBQ0Q7O0FBQUE7O0FBRUQsVUFBSSxLQUFLL0csUUFBTCxDQUFjK0csSUFBbEIsRUFBd0I7QUFDdEIsYUFBSzVGLGlCQUFMLENBQXVCLHdCQUF2QixJQUFtRCxJQUFuRDtBQUNEOztBQUVELFVBQUksS0FBS25CLFFBQUwsQ0FBY3FDLFVBQWQsS0FBNkIsSUFBN0IsSUFBcUMsS0FBS3NFLGdCQUE5QyxFQUFnRTtBQUM5RCxhQUFLQSxnQkFBTCxDQUFzQjdHLE9BQXRCLEdBQWdDLElBQWhDO0FBQ0QsT0FGRCxNQUVPO0FBQ0wsYUFBSzZHLGdCQUFMLEdBQXdCLEtBQUt0RSxVQUFMLENBQWdCdUksaUJBQWhCLENBQWtDLEtBQUtqRSxnQkFBdkMsQ0FBeEIsR0FBbUYsS0FBbkY7QUFDRDs7QUFBQTtBQUdELFdBQUt4RixpQkFBTCxDQUF1QixzQkFBdkIsSUFBaUQsSUFBakQ7QUFDRDtBQXZKSDtBQUFBO0FBQUEseUNBeUo2QjtBQUN6QixVQUFJLEtBQUtuQixRQUFMLENBQWMsV0FBZCxNQUErQixJQUEvQixJQUF1QyxLQUFLeUcsaUJBQWhELEVBQW1FO0FBQ2pFLGFBQUtBLGlCQUFMLENBQXVCcUIsZ0JBQXZCLENBQXdDLFFBQXhDLEVBQWtELEtBQUsrQyxtQkFBTCxDQUF5QkMsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBbEQ7QUFDRDs7QUFBQTs7QUFDRCxVQUFJLEtBQUs5SyxRQUFMLENBQWMsV0FBZCxNQUErQixJQUEvQixJQUF1QyxLQUFLNEMsWUFBaEQsRUFBOEQ7QUFDNUQsYUFBS0EsWUFBTCxDQUFrQmtGLGdCQUFsQixDQUFtQyxRQUFuQyxFQUE2QyxLQUFLaUQsb0JBQUwsQ0FBMEJELElBQTFCLENBQStCLElBQS9CLENBQTdDO0FBQ0Q7O0FBQUE7O0FBQ0QsVUFBSSxLQUFLOUssUUFBTCxDQUFjLFdBQWQsTUFBK0IsSUFBL0IsSUFBdUMsS0FBSzBHLFdBQWhELEVBQTZEO0FBQzNELGFBQUtBLFdBQUwsQ0FBaUJvQixnQkFBakIsQ0FBa0MsUUFBbEMsRUFBNEMsS0FBS2tELHNCQUFMLENBQTRCRixJQUE1QixDQUFpQyxJQUFqQyxDQUE1QztBQUNEOztBQUFBO0FBQ0QsV0FBS3ZDLFFBQUwsQ0FBY1QsZ0JBQWQsQ0FBK0IsT0FBL0IsRUFBd0MsS0FBS21ELDRCQUFMLENBQWtDSCxJQUFsQyxDQUF1QyxJQUF2QyxDQUF4QztBQUNBLFdBQUt0QyxRQUFMLENBQWNWLGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLEtBQUtvRCw0QkFBTCxDQUFrQ0osSUFBbEMsQ0FBdUMsSUFBdkMsQ0FBeEM7O0FBQ0EsVUFBSSxLQUFLOUssUUFBTCxDQUFjLFdBQWQsTUFBK0IsSUFBL0IsSUFBdUMsS0FBS3lCLFFBQWhELEVBQTBEO0FBQ3hELGFBQUtBLFFBQUwsQ0FBY3FHLGdCQUFkLENBQStCLFFBQS9CLEVBQXlDLEtBQUtxRCxtQkFBTCxDQUF5QkwsSUFBekIsQ0FBOEIsSUFBOUIsQ0FBekM7QUFDRDs7QUFBQTs7QUFDRCxVQUFJLEtBQUs5SyxRQUFMLENBQWMsV0FBZCxNQUErQixJQUEvQixJQUF1QyxLQUFLMkIsUUFBaEQsRUFBMEQ7QUFDeEQsYUFBS0EsUUFBTCxDQUFjbUcsZ0JBQWQsQ0FBK0IsUUFBL0IsRUFBeUMsS0FBS3NELG1CQUFMLENBQXlCTixJQUF6QixDQUE4QixJQUE5QixDQUF6QztBQUNEOztBQUFBOztBQUVELFVBQUksS0FBSzlLLFFBQUwsQ0FBYyxXQUFkLE1BQStCLElBQS9CLElBQXVDLEtBQUsyRyxnQkFBaEQsRUFBa0U7QUFDaEUsYUFBS0EsZ0JBQUwsQ0FBc0JtQixnQkFBdEIsQ0FBdUMsUUFBdkMsRUFBaUQsS0FBS3VELDJCQUFMLENBQWlDUCxJQUFqQyxDQUFzQyxJQUF0QyxDQUFqRDtBQUNEOztBQUFBO0FBRUQsV0FBS3pJLFVBQUwsQ0FBZ0JrSCxZQUFoQixDQUE2QnpCLGdCQUE3QixDQUE4QyxPQUE5QyxFQUF1RCxLQUFLd0QscUJBQUwsQ0FBMkJSLElBQTNCLENBQWdDLElBQWhDLEVBQXNDLEtBQUt6SSxVQUFMLENBQWdCa0gsWUFBdEQsQ0FBdkQ7QUFDQSxXQUFLbEgsVUFBTCxDQUFnQm1ILFlBQWhCLENBQTZCMUIsZ0JBQTdCLENBQThDLE9BQTlDLEVBQXVELEtBQUt3RCxxQkFBTCxDQUEyQlIsSUFBM0IsQ0FBZ0MsSUFBaEMsRUFBc0MsS0FBS3pJLFVBQUwsQ0FBZ0JtSCxZQUF0RCxDQUF2RDtBQUNBLFdBQUtuSCxVQUFMLENBQWdCb0gsWUFBaEIsQ0FBNkIzQixnQkFBN0IsQ0FBOEMsT0FBOUMsRUFBdUQsS0FBS3dELHFCQUFMLENBQTJCUixJQUEzQixDQUFnQyxJQUFoQyxFQUFzQyxLQUFLekksVUFBTCxDQUFnQm9ILFlBQXRELENBQXZEO0FBQ0EsV0FBS3BILFVBQUwsQ0FBZ0JxSCxZQUFoQixDQUE2QjVCLGdCQUE3QixDQUE4QyxPQUE5QyxFQUF1RCxLQUFLd0QscUJBQUwsQ0FBMkJSLElBQTNCLENBQWdDLElBQWhDLEVBQXNDLEtBQUt6SSxVQUFMLENBQWdCcUgsWUFBdEQsQ0FBdkQ7QUFDQSxXQUFLckgsVUFBTCxDQUFnQnNILFlBQWhCLENBQTZCN0IsZ0JBQTdCLENBQThDLE9BQTlDLEVBQXVELEtBQUt3RCxxQkFBTCxDQUEyQlIsSUFBM0IsQ0FBZ0MsSUFBaEMsRUFBc0MsS0FBS3pJLFVBQUwsQ0FBZ0JzSCxZQUF0RCxDQUF2RDtBQUVEO0FBdExIO0FBQUE7QUFBQSwrQ0F3TGtDO0FBQzlCLFdBQUs0QixVQUFMO0FBQ0EsV0FBS0MsVUFBTDtBQUNEO0FBM0xIO0FBQUE7QUFBQSx5Q0E2THVCQyxPQTdMdkIsRUE2TDBEO0FBRXRELGVBQVNDLHFCQUFULENBQStCaE0sS0FBL0IsRUFBeUU7QUFDdkUsZUFBT0EsS0FBSyxLQUFLMEksU0FBVixHQUFzQixJQUF0QixHQUE2QjFJLEtBQXBDO0FBQ0Q7O0FBQUE7O0FBRUQsVUFBSSxTQUFTK0wsT0FBVCxJQUFvQixTQUFTQSxPQUFqQyxFQUEwQztBQUN4QyxZQUFHLEtBQUt6TCxRQUFMLENBQWMsV0FBZCxNQUErQixJQUEvQixJQUF1QyxLQUFLbUssUUFBL0MsRUFBeUQ7QUFDdkQsZUFBSzlGLG9CQUFMLEdBQTRCLEtBQUtBLG9CQUFMLENBQTBCc0gsV0FBMUIsR0FBd0NELHFCQUFxQixDQUFDRCxPQUFPLENBQUNoTSxHQUFULENBQXpGLEdBQXlHLEtBQXpHO0FBQ0EsZUFBS2dDLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjL0IsS0FBZCxhQUF5QitMLE9BQU8sQ0FBQ2hNLEdBQWpDLENBQWhCLEdBQXlELEtBQXpEOztBQUNBLGNBQUcsS0FBS21ELFlBQUwsSUFBcUIsS0FBS0EsWUFBTCxDQUFrQjlDLE9BQWxCLEtBQThCLElBQXRELEVBQTZEO0FBQzNELGlCQUFLeUUsb0JBQUwsR0FBNEIsS0FBS0Esb0JBQUwsQ0FBMEJvSCxXQUExQixnQkFBOENELHFCQUFxQixDQUFDRCxPQUFPLENBQUNqTSxHQUFULENBQW5FLENBQTVCLEdBQWlILEtBQWpIO0FBQ0EsaUJBQUttQyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY2pDLEtBQWQsYUFBeUIrTCxPQUFPLENBQUNqTSxHQUFqQyxDQUFoQixHQUF5RCxLQUF6RDtBQUNEOztBQUFBO0FBQ0Y7O0FBQUE7QUFFRCxhQUFLNEQsUUFBTCxDQUFjdUksV0FBZCxHQUE0QkQscUJBQXFCLENBQUNELE9BQU8sQ0FBQ2hNLEdBQVQsQ0FBakQ7QUFDQSxhQUFLNEQsUUFBTCxDQUFjc0ksV0FBZCxHQUE0QkQscUJBQXFCLENBQUNELE9BQU8sQ0FBQ2pNLEdBQVQsQ0FBakQ7QUFFRCxPQWJELE1BYU8sSUFBSSxTQUFTaU0sT0FBYixFQUFzQjtBQUMzQixhQUFLckksUUFBTCxDQUFjdUksV0FBZCxHQUE0QkQscUJBQXFCLENBQUNELE9BQU8sQ0FBQ2hNLEdBQVQsQ0FBakQ7O0FBQ0EsWUFBSSxLQUFLTyxRQUFMLENBQWMsV0FBZCxNQUErQixJQUFuQyxFQUF5QztBQUN2QyxlQUFLcUUsb0JBQUwsR0FBNEIsS0FBS0Esb0JBQUwsQ0FBMEJzSCxXQUExQixHQUF3Q0QscUJBQXFCLENBQUNELE9BQU8sQ0FBQ2hNLEdBQVQsQ0FBekYsR0FBeUcsS0FBekc7QUFDQSxlQUFLZ0MsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWMvQixLQUFkLGFBQXlCK0wsT0FBTyxDQUFDaE0sR0FBakMsQ0FBaEIsR0FBeUQsS0FBekQ7QUFDRDs7QUFBQTtBQUNGLE9BTk0sTUFNQTtBQUNMLGFBQUs0RCxRQUFMLENBQWNzSSxXQUFkLEdBQTRCRCxxQkFBcUIsQ0FBQ0QsT0FBTyxDQUFDak0sR0FBVCxDQUFqRDs7QUFDQSxZQUFJLEtBQUtRLFFBQUwsQ0FBYyxXQUFkLE1BQStCLElBQW5DLEVBQXlDO0FBQ3ZDLGVBQUt1RSxvQkFBTCxHQUE0QixLQUFLQSxvQkFBTCxDQUEwQm9ILFdBQTFCLGdCQUE4Q0QscUJBQXFCLENBQUNELE9BQU8sQ0FBQ2pNLEdBQVQsQ0FBbkUsQ0FBNUIsR0FBaUgsS0FBakg7QUFDQSxlQUFLbUMsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNqQyxLQUFkLGFBQXlCK0wsT0FBTyxDQUFDak0sR0FBakMsQ0FBaEIsR0FBeUQsS0FBekQ7QUFDRDs7QUFBQTtBQUNGOztBQUFBO0FBQ0QsVUFBSXVELHdFQUFKLEdBQW9CNkksMEJBQXBCLENBQStDLEtBQUtuSixTQUFMLENBQWV3RSxXQUE5RCxFQUEyRSxLQUFLbEQsU0FBTCxDQUFla0QsV0FBMUYsRUFBdUcsS0FBSzdELFFBQUwsQ0FBYzZELFdBQXJILEVBQWtJLEtBQUs1RCxRQUFMLENBQWM0RCxXQUFoSixFQUE2SixLQUFLN0QsUUFBbEssRUFBNEssS0FBS0MsUUFBakw7QUFDRDtBQTlOSDtBQUFBO0FBQUEsbURBZ091QztBQUNuQyxXQUFLb0QsaUJBQUwsR0FBeUIsSUFBSTFELHdFQUFKLEdBQW9CNkgsaUJBQXBCLENBQXNDLEtBQUtuRSxpQkFBM0MsRUFBOEQsS0FBS3JELFFBQW5FLEVBQTZFLEtBQUtDLFFBQWxGLENBQXpCLEdBQXVILEtBQXZIOztBQUNBLFVBQUksS0FBS29ELGlCQUFMLElBQTBCLEtBQUtBLGlCQUFMLENBQXVCM0csT0FBdkIsS0FBbUMsSUFBakUsRUFBdUU7QUFDckUsWUFBSWlELHdFQUFKLEdBQW9CNkksMEJBQXBCLENBQStDLEtBQUtuSixTQUFMLENBQWV3RSxXQUE5RCxFQUEyRSxLQUFLbEQsU0FBTCxDQUFla0QsV0FBMUYsRUFBdUcsS0FBSzdELFFBQUwsQ0FBYzZELFdBQXJILEVBQWtJLEtBQUs1RCxRQUFMLENBQWM0RCxXQUFoSixFQUE2SixLQUFLN0QsUUFBbEssRUFBNEssS0FBS0MsUUFBakw7QUFDRDs7QUFBQTtBQUNGO0FBck9IO0FBQUE7QUFBQSxpREF1T3FDO0FBQ2pDLFVBQUksS0FBS1QsWUFBTCxJQUFxQixLQUFLQSxZQUFMLENBQWtCOUMsT0FBbEIsS0FBOEIsS0FBdkQsRUFBOEQ7QUFDNUQsYUFBS1ksY0FBTCxDQUFvQkMsdUJBQXBCLENBQTRDLEtBQTVDLElBQXFEO0FBQUMsMkJBQVUsS0FBSzZCLFdBQUwsQ0FBaUJ5RSxXQUFqQixHQUErQixLQUFLeEUsU0FBTCxDQUFld0UsV0FBeEQsQ0FBRDtBQUF3RSxtQ0FBa0IsS0FBS3pFLFdBQUwsQ0FBaUJ5RSxXQUFqQixHQUErQixLQUFLeEUsU0FBTCxDQUFld0UsV0FBaEU7QUFBeEUsU0FBckQ7QUFDQSxhQUFLbEQsU0FBTCxDQUFlUixLQUFmLENBQXFCTSxJQUFyQixhQUErQixLQUFLckIsV0FBTCxDQUFpQnlFLFdBQWpCLEdBQStCLEtBQUt4RSxTQUFMLENBQWV3RSxXQUE3RTtBQUNBLGFBQUsxQyxvQkFBTCxHQUE0QixLQUFLQSxvQkFBTCxDQUEwQm9ILFdBQTFCLEdBQXdDLEVBQXBFLEdBQXlFLEtBQXpFO0FBQ0EsYUFBS2hLLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjZ0QsWUFBZCxDQUEyQixVQUEzQixFQUF1QyxFQUF2QyxDQUFoQixHQUE2RCxLQUE3RDtBQUNBLGFBQUtoRCxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY2pDLEtBQWQsR0FBc0IsRUFBdEMsR0FBMkMsS0FBM0M7QUFDQSxhQUFLaUMsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWM0QixLQUFkLENBQW9Ca0gsT0FBcEIsR0FBOEIsS0FBOUMsR0FBc0QsS0FBdEQ7QUFDQSxhQUFLeEcsUUFBTCxDQUFjVixLQUFkLENBQW9CQyxPQUFwQixHQUE4QixNQUE5QjtBQUNEOztBQUFBO0FBRUQsV0FBS1osWUFBTCxHQUFvQixJQUFJa0IsMkRBQUosR0FBYzhHLGlCQUFkLENBQWdDLEtBQUtoSSxZQUFyQyxFQUFtRCxLQUFLbUIsU0FBeEQsQ0FBcEIsR0FBeUYsS0FBekY7O0FBRUEsVUFBSSxLQUFLbkIsWUFBTCxJQUFxQixLQUFLQSxZQUFMLENBQWtCOUMsT0FBbEIsS0FBOEIsSUFBdkQsRUFBNkQ7QUFDM0QsYUFBS3FCLGlCQUFMLENBQXVCLFlBQXZCLElBQXVDLElBQXZDO0FBQ0EsYUFBS1EsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNrSyxlQUFkLENBQThCLFVBQTlCLENBQWhCLEdBQTRELEtBQTVEO0FBQ0EsYUFBSzVILFFBQUwsQ0FBY1YsS0FBZCxDQUFvQkMsT0FBcEIsR0FBOEIsT0FBOUI7QUFDQSxhQUFLUyxRQUFMLENBQWNWLEtBQWQsQ0FBb0IyRCxLQUFwQixHQUE0QixLQUFLMUUsV0FBTCxDQUFpQnlFLFdBQWpCLElBQWdDLEtBQUt6RSxXQUFMLENBQWlCeUUsV0FBakIsR0FBK0IsS0FBS3hFLFNBQUwsQ0FBZXdFLFdBQWYsR0FBNkIsQ0FBNUYsSUFBa0csSUFBOUg7O0FBQ0EsWUFBSSxDQUFDLEtBQUt2RyxjQUFMLENBQW9CQyx1QkFBcEIsQ0FBNENsQixHQUE1QyxDQUFnRCxLQUFoRCxDQUFELElBQTJELEtBQUsrQyxXQUFMLENBQWlCeUUsV0FBakIsR0FBK0IsS0FBS2xELFNBQUwsQ0FBZWtELFdBQTlDLEdBQTRELEtBQUt4RSxTQUFMLENBQWV3RSxXQUExSSxFQUF1SjtBQUNySixlQUFLdkcsY0FBTCxDQUFvQkMsdUJBQXBCLENBQTRDLEtBQTVDLElBQXFEO0FBQUMsNkJBQVUsS0FBSzZCLFdBQUwsQ0FBaUJ5RSxXQUFqQixHQUErQixLQUFLbEQsU0FBTCxDQUFla0QsV0FBOUMsR0FBNEQsS0FBS3hFLFNBQUwsQ0FBZXdFLFdBQXJGLENBQUQ7QUFBcUcscUNBQWtCLEtBQUt6RSxXQUFMLENBQWlCeUUsV0FBakIsR0FBK0IsS0FBS2xELFNBQUwsQ0FBZWtELFdBQWhFO0FBQXJHLFdBQXJEO0FBQ0EsZUFBS3hFLFNBQUwsQ0FBZWMsS0FBZixDQUFxQk0sSUFBckIsYUFBK0IsS0FBS3JCLFdBQUwsQ0FBaUJ5RSxXQUFqQixHQUErQixLQUFLbEQsU0FBTCxDQUFla0QsV0FBOUMsR0FBNEQsS0FBS3hFLFNBQUwsQ0FBZXdFLFdBQTFHO0FBQ0Q7O0FBQUE7QUFDRjs7QUFBQTtBQUNGO0FBOVBIO0FBQUE7QUFBQSwyQ0FnUXlCOUgsSUFoUXpCLEVBZ1E2QztBQUN6QyxXQUFLb0Ysb0JBQUwsR0FBNEIsS0FBS0Esb0JBQUwsQ0FBMEJvSCxXQUExQixnQkFBOEN4TSxJQUE5QyxDQUE1QixHQUFtRixLQUFuRjs7QUFDQSxVQUFJLEtBQUt3QyxRQUFULEVBQW1CO0FBQ2pCLGFBQUtBLFFBQUwsQ0FBYzRCLEtBQWQsQ0FBb0JrSCxPQUFwQixHQUE4QixHQUE5QjtBQUNBLGFBQUs5SSxRQUFMLENBQWNqQyxLQUFkLGFBQXlCUCxJQUF6QjtBQUNEOztBQUFBO0FBQ0Y7QUF0UUg7QUFBQTtBQUFBLHdDQXdRdUJBLElBeFF2QixFQXdRNENNLEdBeFE1QyxFQXdRbUVELEdBeFFuRSxFQXdRZ0c7QUFDNUZDLFNBQUcsQ0FBQ2tGLFlBQUosQ0FBaUIsS0FBakIsRUFBd0J4RixJQUFJLENBQUNLLEdBQTdCO0FBQ0FDLFNBQUcsQ0FBQ2tGLFlBQUosQ0FBaUIsS0FBakIsRUFBd0J4RixJQUFJLENBQUNNLEdBQTdCO0FBQ0FELFNBQUcsQ0FBQ21GLFlBQUosQ0FBaUIsS0FBakIsRUFBd0J4RixJQUFJLENBQUNLLEdBQTdCO0FBQ0Q7QUE1UUg7QUFBQTtBQUFBLGlDQThRcUI7QUFDakIsVUFBSTZILElBQUksR0FBRyxJQUFYOztBQUNBQSxVQUFJLENBQUM1RSxTQUFMLENBQWVxSixXQUFmLEdBQTZCLFVBQVUzRSxLQUFWLEVBQXdCO0FBQ25ERSxZQUFJLENBQUMzRyxjQUFMLENBQW9CcUwsaUJBQXBCLENBQXVDNUUsS0FBdkMsRUFBOENpQixTQUE5QztBQUNELE9BRkQ7QUFHRDtBQW5SSDtBQUFBO0FBQUEsaUNBcVJxQjtBQUNqQixVQUFJZixJQUFJLEdBQUcsSUFBWDs7QUFDQUEsVUFBSSxDQUFDdEQsU0FBTCxDQUFlK0gsV0FBZixHQUE2QixVQUFTM0UsS0FBVCxFQUFzQjtBQUNqREUsWUFBSSxDQUFDM0csY0FBTCxDQUFvQnNMLGlCQUFwQixDQUF1QzdFLEtBQXZDLEVBQThDaUIsU0FBOUM7QUFDRCxPQUZEO0FBR0Q7QUExUkg7QUFBQTtBQUFBLDBDQTRSOEI7QUFDMUIsV0FBSzZELDRCQUFMO0FBQ0Q7QUE5Ukg7QUFBQTtBQUFBLDJDQWdTK0I7QUFDM0IsV0FBS0MsMEJBQUw7QUFDRDtBQWxTSDtBQUFBO0FBQUEsa0RBb1NzQztBQUNsQyxXQUFLdkYsZ0JBQUwsR0FBd0IsS0FBS3RFLFVBQUwsQ0FBZ0J1SSxpQkFBaEIsQ0FBa0MsS0FBS2pFLGdCQUF2QyxDQUF4QixHQUFtRixLQUFuRjtBQUNEO0FBdFNIO0FBQUE7QUFBQSw2Q0F3U2lDO0FBQzdCLFdBQUtELFdBQUwsR0FBbUIsS0FBS2hHLGNBQUwsQ0FBb0JnSyxXQUFwQixDQUFnQyxLQUFLaEUsV0FBckMsRUFBa0QsS0FBSzRELGVBQXZELEVBQXdFLEtBQUsvQixRQUE3RSxFQUF1RixLQUFLQyxRQUE1RixDQUFuQixHQUEySCxLQUEzSDtBQUNBLFdBQUs5QixXQUFMLEdBQW1CLEtBQUtyRSxVQUFMLENBQWdCc0ksMkJBQWhCLENBQTRDLEtBQUtqRSxXQUFMLENBQWlCNUcsT0FBN0QsQ0FBbkIsR0FBMkYsS0FBM0Y7QUFDRDtBQTNTSDtBQUFBO0FBQUEsbURBNlN3QztBQUNwQyxXQUFLWSxjQUFMLENBQW9CeUwsd0JBQXBCLENBQTZDLEtBQTdDO0FBQ0Q7QUEvU0g7QUFBQTtBQUFBLDBDQWlUd0JDLE9BalR4QixFQWlUeUQ7QUFDckQsVUFBSUEsT0FBTyxDQUFDVCxXQUFaLEVBQXlCO0FBQ3ZCLFlBQUk1SyxHQUFXLEdBQUdxTCxPQUFPLENBQUNULFdBQTFCO0FBQ0EsYUFBS3hLLGlCQUFMLENBQXVCLDJCQUF2QixJQUFzREosR0FBdEQ7QUFDRDs7QUFBQTtBQUNGO0FBdFRIO0FBQUE7QUFBQSxtREF3VHVDO0FBQ25DLFdBQUtMLGNBQUwsQ0FBb0J5TCx3QkFBcEIsQ0FBNkMsS0FBN0M7QUFDRDtBQTFUSDtBQUFBO0FBQUEsMENBNFQ4QjtBQUMxQixXQUFLaEwsaUJBQUwsQ0FBdUIsdUJBQXZCLElBQWtELElBQWxEO0FBQ0Q7QUE5VEg7QUFBQTtBQUFBLDBDQWdVOEI7QUFDMUIsV0FBS0EsaUJBQUwsQ0FBdUIsdUJBQXZCLElBQWtELElBQWxEO0FBQ0Q7QUFsVUg7O0FBQUE7QUFBQTtBQW1VQyxDOzs7Ozs7Ozs7Ozs7QUNsV0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBTUM7QUFJQTs7QUFnQkQsQ0FBQyxVQUFVa0wsQ0FBVixFQUFjO0FBQ2JBLEdBQUMsQ0FBQ0MsRUFBRixDQUFLQyxVQUFMLEdBQWtCLFVBQVVDLE9BQVYsRUFBbUM7QUFFbkQsUUFBSXhNLFFBQWtCLEdBQUdxTSxDQUFDLENBQUNJLE1BQUYsQ0FBVTtBQUNqQyxhQUFPLEdBRDBCO0FBRWpDLGFBQU8sSUFGMEI7QUFHakMsZUFBUyxLQUh3QjtBQUlqQyxtQkFBYSxLQUpvQjtBQUtqQyxzQkFBZ0IsS0FMaUI7QUFNakMsa0JBQVksS0FOcUI7QUFPakMsY0FBUSxLQVB5QjtBQVFqQyxvQkFBYyxLQVJtQjtBQVNqQywyQkFBcUI7QUFUWSxLQUFWLEVBVXRCRCxPQVZzQixDQUF6QjtBQVlBLFFBQUluRixJQUFvQixHQUFHLElBQTNCO0FBRUEsUUFBSXBJLEtBQUo7O0FBQ0EsUUFBSSxpQkFBaUJlLFFBQWpCLElBQTZCLGlCQUFpQkEsUUFBbEQsRUFBNEQ7QUFDMURmLFdBQUssR0FBRyxJQUFJYyw2REFBSixDQUFVO0FBQUMsZUFBT0MsUUFBUSxDQUFDLEtBQUQsQ0FBaEI7QUFBeUJSLFdBQUcsRUFBRVEsUUFBUSxDQUFDLEtBQUQsQ0FBdEM7QUFBK0MsdUJBQWVBLFFBQVEsQ0FBQyxhQUFELENBQVIsR0FBMEJBLFFBQVEsQ0FBQyxhQUFELENBQWxDLEdBQW9ELEVBQWxIO0FBQXNILHVCQUFlQSxRQUFRLENBQUMsYUFBRCxDQUFSLEdBQTBCQSxRQUFRLENBQUMsYUFBRCxDQUFsQyxHQUFvRDtBQUF6TCxPQUFWLENBQVI7QUFDRCxLQUZELE1BRU8sSUFBSSxpQkFBaUJBLFFBQXJCLEVBQStCO0FBQ3BDZixXQUFLLEdBQUcsSUFBSWMsNkRBQUosQ0FBVTtBQUFDLGVBQU9DLFFBQVEsQ0FBQyxLQUFELENBQWhCO0FBQXlCUixXQUFHLEVBQUVRLFFBQVEsQ0FBQyxLQUFELENBQXRDO0FBQStDLHVCQUFlQSxRQUFRLENBQUMsYUFBRCxDQUFSLEdBQTBCQSxRQUFRLENBQUMsYUFBRCxDQUFsQyxHQUFvRCxFQUFsSDtBQUFzSCx1QkFBZUEsUUFBUSxDQUFDLEtBQUQ7QUFBN0ksT0FBVixDQUFSO0FBQ0QsS0FGTSxNQUVBLElBQUksaUJBQWlCQSxRQUFyQixFQUErQjtBQUNwQ2YsV0FBSyxHQUFHLElBQUljLDZEQUFKLENBQVU7QUFBQyxlQUFPQyxRQUFRLENBQUMsS0FBRCxDQUFoQjtBQUF5QlIsV0FBRyxFQUFFUSxRQUFRLENBQUMsS0FBRCxDQUF0QztBQUErQyx1QkFBZUEsUUFBUSxDQUFDLEtBQUQsQ0FBdEU7QUFBK0UsdUJBQWVBLFFBQVEsQ0FBQyxhQUFELENBQVIsR0FBMEJBLFFBQVEsQ0FBQyxhQUFELENBQWxDLEdBQW9EO0FBQWxKLE9BQVYsQ0FBUjtBQUNELEtBRk0sTUFFQTtBQUNMZixXQUFLLEdBQUcsSUFBSWMsNkRBQUosQ0FBVTtBQUFDLGVBQU9DLFFBQVEsQ0FBQyxLQUFELENBQWhCO0FBQXlCUixXQUFHLEVBQUVRLFFBQVEsQ0FBQyxLQUFELENBQXRDO0FBQStDLHVCQUFlQSxRQUFRLENBQUMsS0FBRCxDQUF0RTtBQUErRSx1QkFBZUEsUUFBUSxDQUFDLEtBQUQ7QUFBdEcsT0FBVixDQUFSO0FBQ0Q7O0FBRUQsUUFBSUksSUFBVSxHQUFHLElBQUk0SiwwREFBSixDQUFTM0MsSUFBVCxFQUFlckgsUUFBZixDQUFqQjtBQUVBLFFBQUlLLE1BQWMsR0FBRyxJQUFJckIsK0RBQUosQ0FBV0MsS0FBWCxDQUFyQjtBQUVBLFFBQUl5TixTQUFvQixHQUFHLElBQUl2TSx5RUFBSixDQUFjQyxJQUFkLEVBQW9CQyxNQUFwQixDQUEzQjtBQUVBcU0sYUFBUyxDQUFDQyxtQkFBVjtBQUNBdk0sUUFBSSxDQUFDd00sa0JBQUw7QUFDQXhNLFFBQUksQ0FBQ3lNLGVBQUw7QUFDQXpNLFFBQUksQ0FBQzBNLHdCQUFMO0FBRUQsR0F0Q0Q7QUF1Q0QsQ0F4Q0QsRUF3Q0dDLE1BeENILEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pxdWVyeS51aS5jdXN0b21TbGlkZXIudHNcIik7XG4iLCJpbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vbW9kZWwnO1xyXG5pbXBvcnQgeyBTdGFydEhhbmRlbHNQb3NpdGlvbiB9IGZyb20gJy4vbW9kZWwnO1xyXG5cclxuaW50ZXJmYWNlIE5ld1Bvc2l0aW9uIHtcclxuICAnbWluJzogc3RyaW5nO1xyXG4gICdtYXgnOiBzdHJpbmc7XHJcbiAgJ3NsaWRlcldpZHRoJzogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RIYW5kbGVGb3JWYWx1ZVNjYWxlIHtcclxuICAndGFyZ2V0Jzogc3RyaW5nO1xyXG4gICd2YWx1ZSc6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2V0VmFsdWVzRm9yVmFsdWVTY2FsZSB7XHJcbiAgJzE1Jzogc3RyaW5nO1xyXG4gICczMCc6IHN0cmluZztcclxuICAnNTAnOiBzdHJpbmc7XHJcbiAgJzcwJzogc3RyaW5nO1xyXG4gICc4NSc6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2V0UG9zaXRpb25zQW1vdW50IHtcclxuICAncG9zaXRpb25zJzogc3RyaW5nO1xyXG4gICdtaW5pbXVtJzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdldFBvc3NpYmxlUmFuZ2Uge1xyXG4gICdtaW4nOiBzdHJpbmc7XHJcbiAgJ21heCc6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2FkZSB7XHJcbiAgcmVhZG9ubHkgbW9kZWw6IE1vZGVsO1xyXG5cclxuICBjb25zdHJ1Y3RvciAobW9kZWw6IE1vZGVsKSB7XHJcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XHJcbiAgfTtcclxuXHJcbiAgc3RhcnRIYW5kZWxzUG9zaXRpb24oKTogU3RhcnRIYW5kZWxzUG9zaXRpb24ge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZ2V0Q3VycmVudERhdGEoKTtcclxuICB9O1xyXG4gIFxyXG4gIHJlZnJlc2hNb2RlbERhdGEoZGF0YTogTmV3UG9zaXRpb24sIHByb3A6IHN0cmluZyk6IG9iamVjdCB7XHJcbiAgICBpZiAocHJvcCA9PT0gJ21pbicpIHtcclxuICAgICAgdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1pbiddID0gU3RyaW5nKE1hdGgucm91bmQoK3RoaXMubW9kZWwuZGF0YVsnbWluJ10gKyAoK2RhdGFbJ21pbiddIC8gKCtkYXRhWydzbGlkZXJXaWR0aCddIC8gKCt0aGlzLm1vZGVsLmRhdGFbJ21heCddIC0gK3RoaXMubW9kZWwuZGF0YVsnbWluJ10pKSkpKTtcclxuICAgICAgcmV0dXJuIHsgJ21pbic6IHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1taW4nXSB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWF4J10gPSBTdHJpbmcoTWF0aC5yb3VuZCgrdGhpcy5tb2RlbC5kYXRhWydtaW4nXSArICgrZGF0YVsnbWF4J10gLyAoK2RhdGFbJ3NsaWRlcldpZHRoJ10gLyAoK3RoaXMubW9kZWwuZGF0YVsnbWF4J10gLSArdGhpcy5tb2RlbC5kYXRhWydtaW4nXSkpKSkpO1xyXG4gICAgICByZXR1cm4geyAnbWF4JzogdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1heCddIH1cclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgZ2V0TW9kZWxEYXRhKCk6IG9iamVjdCB7XHJcbiAgICByZXR1cm4geyAnbWluJzogdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1pbiddLCAnbWF4JzogdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1heCddfVxyXG4gIH07XHJcblxyXG4gIGdldE1heERhdGEoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiArdGhpcy5tb2RlbC5kYXRhWydtYXgnXVxyXG4gIH07XHJcblxyXG4gIGdldFBvc3NpYmxlUmFuZ2UoKTogR2V0UG9zc2libGVSYW5nZSB7XHJcbiAgICByZXR1cm4geydtYXgnOnRoaXMubW9kZWwuZGF0YS5tYXgsICdtaW4nOiB0aGlzLm1vZGVsLmRhdGEubWlufTtcclxuICB9O1xyXG5cclxuICBnZXRQb3NpdGlvbnNBbW91bnQoKTogR2V0UG9zaXRpb25zQW1vdW50IHtcclxuICAgIHJldHVybiB7J3Bvc2l0aW9ucyc6IFN0cmluZygrdGhpcy5tb2RlbC5kYXRhLm1heCAtICt0aGlzLm1vZGVsLmRhdGEubWluKSwgJ21pbmltdW0nOiB0aGlzLm1vZGVsLmRhdGEubWlufTtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlc0ZvclZhbHVlU2NhbGUoKTogR2V0VmFsdWVzRm9yVmFsdWVTY2FsZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAnMTUnOiBTdHJpbmcoK3RoaXMubW9kZWwuZGF0YS5taW4gKyAoKCt0aGlzLm1vZGVsLmRhdGEubWF4IC0gK3RoaXMubW9kZWwuZGF0YS5taW4pICogMC4xNSkpLFxyXG4gICAgICAnMzAnOiBTdHJpbmcoK3RoaXMubW9kZWwuZGF0YS5taW4gKyAoKCt0aGlzLm1vZGVsLmRhdGEubWF4IC0gK3RoaXMubW9kZWwuZGF0YS5taW4pICogMC4zMCkpLFxyXG4gICAgICAnNTAnOiBTdHJpbmcoK3RoaXMubW9kZWwuZGF0YS5taW4gKyAoKCt0aGlzLm1vZGVsLmRhdGEubWF4IC0gK3RoaXMubW9kZWwuZGF0YS5taW4pICogMC41MCkpLFxyXG4gICAgICAnNzAnOiBTdHJpbmcoK3RoaXMubW9kZWwuZGF0YS5taW4gKyAoKCt0aGlzLm1vZGVsLmRhdGEubWF4IC0gK3RoaXMubW9kZWwuZGF0YS5taW4pICogMC43MCkpLFxyXG4gICAgICAnODUnOiBTdHJpbmcoK3RoaXMubW9kZWwuZGF0YS5taW4gKyAoKCt0aGlzLm1vZGVsLmRhdGEubWF4IC0gK3RoaXMubW9kZWwuZGF0YS5taW4pICogMC44NSkpXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHNlbGVjdEhhbmRsZUZvclZhbHVlU2NhbGUodmFsdWU6IHN0cmluZywgZG91YmxlVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50KTogU2VsZWN0SGFuZGxlRm9yVmFsdWVTY2FsZSB7XHJcbiAgICBsZXQgbWluRGlmZmVyZW5jZTogc3RyaW5nO1xyXG4gICAgbGV0IG1heERpZmZlcmVuY2U6IHN0cmluZztcclxuICAgIGlmKGRvdWJsZVRvZ2dsZS5jaGVja2VkKSB7XHJcbiAgICAgIGlmICgrdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1pbiddID4gK3ZhbHVlIHx8ICt0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWluJ10gPT09ICt2YWx1ZSkge1xyXG4gICAgICAgIG1pbkRpZmZlcmVuY2UgPSBTdHJpbmcoK3RoaXMubW9kZWwuZGF0YVsnY3VycmVudC1taW4nXSAtICt2YWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWluRGlmZmVyZW5jZSA9IFN0cmluZygrdmFsdWUgLSArdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1pbiddKTtcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgIGlmICgrdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1heCddID4gK3ZhbHVlIHx8ICt0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWF4J10gPT09ICt2YWx1ZSApIHtcclxuICAgICAgICBtYXhEaWZmZXJlbmNlID0gU3RyaW5nKCt0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWF4J10gLSArdmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1heERpZmZlcmVuY2UgPSBTdHJpbmcoK3ZhbHVlIC0gK3RoaXMubW9kZWwuZGF0YVsnY3VycmVudC1tYXgnXSk7XHJcbiAgICAgIH07XHJcbiAgXHJcbiAgICAgIGlmKCttaW5EaWZmZXJlbmNlIDwgK21heERpZmZlcmVuY2UgfHwgK21pbkRpZmZlcmVuY2UgPT0gK21heERpZmZlcmVuY2UpIHtcclxuICAgICAgICB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWluJ10gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgJ3RhcmdldCc6ICdtaW4nLFxyXG4gICAgICAgICAgJ3ZhbHVlJzogdmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1tYXgnXSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAndGFyZ2V0JzogJ21heCcsXHJcbiAgICAgICAgICAndmFsdWUnOiB2YWx1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG5cclxuICAgICAgdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1pbiddID0gdmFsdWU7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgJ3RhcmdldCc6ICdtaW4nLFxyXG4gICAgICAgICd2YWx1ZSc6IHZhbHVlXHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgfTtcclxuICB9O1xyXG59OyIsImludGVyZmFjZSBUYXJuc2ZlcmVkU2V0dGluZ3Mge1xyXG4gICdtaW4nOiBzdHJpbmc7XHJcbiAgJ21heCc6IHN0cmluZztcclxuICAnY3VycmVudC1taW4nOiBzdHJpbmc7XHJcbiAgJ2N1cnJlbnQtbWF4Jzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFN0YXJ0SGFuZGVsc1Bvc2l0aW9uIHtcclxuICAnbWluaW11bSc6IHN0cmluZywgXHJcbiAgJ21pbic6IHN0cmluZyxcclxuICAnbWF4Jzogc3RyaW5nLCBcclxuICAncG9zaXRpb25zJzogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgSURhdGEge1xyXG4gICdtaW4nOiBzdHJpbmc7XHJcbiAgJ21heCc6IHN0cmluZztcclxuICAnY3VycmVudC1taW4nOiBzdHJpbmc7XHJcbiAgJ2N1cnJlbnQtbWF4Jzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW9kZWwge1xyXG5cclxuICBkYXRhOiBJRGF0YTtcclxuICBcclxuICBjb25zdHJ1Y3Rvciggc2V0dGluZ3M6IFRhcm5zZmVyZWRTZXR0aW5ncyApIHsgXHJcbiAgICB0aGlzLmRhdGEgPSBPYmplY3QuYXNzaWduKHt9LCBzZXR0aW5ncyk7XHJcbiAgfVxyXG5cclxuICBnZXRDdXJyZW50RGF0YSgpOiBTdGFydEhhbmRlbHNQb3NpdGlvbiB7XHJcbiAgICByZXR1cm4geydtaW5pbXVtJzogdGhpcy5kYXRhLm1pbiwgJ21pbic6IHRoaXMuZGF0YVsnY3VycmVudC1taW4nXSwgJ21heCc6IHRoaXMuZGF0YVsnY3VycmVudC1tYXgnXSwgJ3Bvc2l0aW9ucyc6IGAkeyt0aGlzLmRhdGEubWF4IC0gK3RoaXMuZGF0YS5taW59YH1cclxuICB9XHJcbn0iLCJpbXBvcnQgeyBGYWNhZGUgfSBmcm9tICcuLi9tb2RlbC9mYWNhZGUnO1xyXG5pbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi4vdmlldy92aWV3JztcclxuaW1wb3J0IHsgR2V0UG9zaXRpb25zQW1vdW50IH0gZnJvbSAnLi4vbW9kZWwvZmFjYWRlJztcclxuaW1wb3J0IHsgR2V0UG9zc2libGVSYW5nZSB9IGZyb20gJy4uL21vZGVsL2ZhY2FkZSc7XHJcbmltcG9ydCB7IFN0YXJ0SGFuZGVsc1Bvc2l0aW9uIH0gZnJvbSAnLi4vbW9kZWwvbW9kZWwnO1xyXG5pbXBvcnQgeyBHZXRWYWx1ZXNGb3JWYWx1ZVNjYWxlIH0gZnJvbSAnLi4vbW9kZWwvZmFjYWRlJztcclxuaW1wb3J0IHsgU2VsZWN0SGFuZGxlRm9yVmFsdWVTY2FsZSB9IGZyb20gJy4uL21vZGVsL2ZhY2FkZSc7XHJcbmltcG9ydCB7IERhdGFPZlZhbHVlUmVmcmVzaCB9IGZyb20gJy4uL3ZpZXcvdmlldyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUHJlc2VudGVyIHtcclxuXHJcbiAgcHJpdmF0ZSB2aWV3TGluaztcclxuICBwcml2YXRlIGZhY2FkZUxpbms7XHJcblxyXG4gIGNvbnN0cnVjdG9yICh2aWV3OiBWaWV3LCBmYWNhZGU6IEZhY2FkZSkge1xyXG4gICAgdGhpcy52aWV3TGluayA9IHZpZXc7XHJcbiAgICB0aGlzLmZhY2FkZUxpbmsgPSBmYWNhZGU7XHJcbiAgfTtcclxuXHJcbiAgc3RhcnRWaWV3TW9uaXRvcmluZygpOiB2b2lkIHtcclxuICAgIHRoaXMubW9uaXRvcnNDdXJyZW50SGFuZGVsc1Bvc2l0aW9ucygpO1xyXG4gICAgdGhpcy5tb25pdG9yc1ZpZXdSZXF1ZXN0cygpO1xyXG4gIH07XHJcblxyXG4gIG1vbml0b3JzQ3VycmVudEhhbmRlbHNQb3NpdGlvbnMoKTogdm9pZCB7XHJcbiAgICBsZXQgdmlldyA9IHRoaXMudmlld0xpbms7XHJcbiAgICBsZXQgZmFjYWRlID0gdGhpcy5mYWNhZGVMaW5rO1xyXG5cclxuICAgIHZpZXcuc2xpZGVyTW92ZW1lbnQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMgPSBuZXcgUHJveHkodmlldy5zbGlkZXJNb3ZlbWVudC5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucywge1xyXG4gICAgICBzZXQodGFyZ2V0LCBwcm9wLCB2YWwpIHtcclxuICAgICAgICBpZih0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgICAgdGFyZ2V0W1N0cmluZyhwcm9wKV0gPSB2YWw7XHJcbiAgICAgICAgICBsZXQgbW9kZWxSZXN1bHQgPSBmYWNhZGUucmVmcmVzaE1vZGVsRGF0YSh2YWwsIFN0cmluZyhwcm9wKSk7XHJcbiAgICAgICAgICB2aWV3LnJlZnJlc2hDdXJyZW50VmFsdWVzKG1vZGVsUmVzdWx0KTtcclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gIH07XHJcblxyXG4gIG1vbml0b3JzVmlld1JlcXVlc3RzKCk6IHZvaWQge1xyXG4gICAgbGV0IHZpZXcgPSB0aGlzLnZpZXdMaW5rO1xyXG4gICAgbGV0IGZhY2FkZSA9IHRoaXMuZmFjYWRlTGluaztcclxuXHJcbiAgICB2aWV3LmRhdGFSZXF1ZXN0U3RhdHVzID0gbmV3IFByb3h5KHZpZXcuZGF0YVJlcXVlc3RTdGF0dXMsIHtcclxuICAgICAgc2V0KHRhcmdldCwgcHJvcCwgdmFsKSB7XHJcbiAgICAgICAgaWYodHlwZW9mIHZhbCA9PT0gJ2Jvb2xlYW4nIHx8IHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XHJcblxyXG4gICAgICAgICAgaWYocHJvcCA9PT0gJ2dldE1heERhdGEnKSB7XHJcbiAgICAgICAgICAgIGxldCByZXN1bHQ6IG51bWJlciA9IGZhY2FkZS5nZXRNYXhEYXRhKCk7XHJcbiAgICAgICAgICAgIHZpZXcucmVmcmVzaE1heFNpZGVNZW51RGF0YShyZXN1bHQpO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBpZihwcm9wID09PSAnZ2V0TWluUG9zaXRpb25zQW1vdW50Jykge1xyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb25zOiBHZXRQb3NpdGlvbnNBbW91bnQgPSBmYWNhZGUuZ2V0UG9zaXRpb25zQW1vdW50KCk7XHJcblxyXG4gICAgICAgICAgICB2aWV3Lm1pbklucHV0ID8gdmlldy5zbGlkZXJNb3ZlbWVudC5zaWRlTWVudUlucHV0c1ZhbHVlc1ZhbGlkYXRpb25DaGVja2VyKCdtaW4nLCArdmlldy5taW5JbnB1dC52YWx1ZSwgK3Bvc2l0aW9uc1sncG9zaXRpb25zJ10sICtwb3NpdGlvbnNbJ21pbmltdW0nXSkgOiBmYWxzZTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgaWYocHJvcCA9PT0gJ2dldE1heFBvc2l0aW9uc0Ftb3VudCcpIHtcclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uczogR2V0UG9zaXRpb25zQW1vdW50ID0gZmFjYWRlLmdldFBvc2l0aW9uc0Ftb3VudCgpO1xyXG4gICAgICAgICAgICB2aWV3Lm1heElucHV0ID8gdmlldy5zbGlkZXJNb3ZlbWVudC5zaWRlTWVudUlucHV0c1ZhbHVlc1ZhbGlkYXRpb25DaGVja2VyKCdtYXgnLCArdmlldy5tYXhJbnB1dC52YWx1ZSwgK3Bvc2l0aW9uc1sncG9zaXRpb25zJ10sICtwb3NpdGlvbnNbJ21pbmltdW0nXSkgOiBmYWxzZTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgaWYocHJvcCA9PT0gJ2dldFBvc3NpYmxlUmFuZ2UnKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3NzaWJsZVJhbmdlOiBHZXRQb3NzaWJsZVJhbmdlID0gZmFjYWRlLmdldFBvc3NpYmxlUmFuZ2UoKTtcclxuICAgICAgICAgICAgdmlldy5taW5JbnB1dCAmJiB2aWV3Lm1heElucHV0PyB2aWV3LmlucHV0c1Bvc3NpYmxlUmFuZ2UocG9zc2libGVSYW5nZSwgdmlldy5taW5JbnB1dCwgdmlldy5tYXhJbnB1dCApOiBmYWxzZTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgaWYocHJvcCA9PT0gJ3N0YXJ0SGFuZGVsc1Bvc2l0aW9uJykge1xyXG4gICAgICAgICAgICBsZXQgc3RhcnRQb3NpdGlvbnM6IFN0YXJ0SGFuZGVsc1Bvc2l0aW9uID0gZmFjYWRlLnN0YXJ0SGFuZGVsc1Bvc2l0aW9uKCk7XHJcbiAgICAgICAgICAgIHZpZXcuc2xpZGVyTW92ZW1lbnQuc3RhcnRIYW5kbGVyc1Bvc2l0aW9ucyhzdGFydFBvc2l0aW9ucyk7XHJcbiAgICAgICAgICAgIHZpZXcucmVmcmVzaEN1cnJlbnRWYWx1ZXMoc3RhcnRQb3NpdGlvbnMpO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBpZihwcm9wID09PSAnZ2V0U3RlcFBvc2l0aW9uc0Ftb3VudCcpIHtcclxuICAgICAgICAgICAgbGV0IHN0ZXBBbW91bnQ6IEdldFBvc2l0aW9uc0Ftb3VudCA9IGZhY2FkZS5nZXRQb3NpdGlvbnNBbW91bnQoKTtcclxuICAgICAgICAgICAgdmlldy5zbGlkZXJNb3ZlbWVudC5zdGVwQW1vdW50ID0gK3N0ZXBBbW91bnRbJ3Bvc2l0aW9ucyddO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBpZihwcm9wID09PSAnZ2V0VmFsdWVzRm9yVmFsdWVTY2FsZScpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlU2NhbGVWYWx1ZXM6IEdldFZhbHVlc0ZvclZhbHVlU2NhbGUgPSBmYWNhZGUuZ2V0VmFsdWVzRm9yVmFsdWVTY2FsZSgpO1xyXG4gICAgICAgICAgICB2aWV3LnZhbHVlU2NhbGUucmVmcmVzaFZhbHVlcyh2YWx1ZVNjYWxlVmFsdWVzKTtcclxuICAgICAgICAgICAgdmlldy52YWx1ZVNjYWxlLmNlbnRlcnNWYWx1ZXNQb3NpdGlvbnModmlldy5zbGlkZXJSYW5nZSwgdmlldy5taW5IYW5kZWwpO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBpZihwcm9wID09PSAnc2VsZWN0SGFuZGxlRm9yVmFsdWVTY2FsZScpIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uczogR2V0UG9zaXRpb25zQW1vdW50ID0gZmFjYWRlLmdldFBvc2l0aW9uc0Ftb3VudCgpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGxldCBzZWxlY3RlZEhhbmRlbDogU2VsZWN0SGFuZGxlRm9yVmFsdWVTY2FsZSA9IGZhY2FkZS5zZWxlY3RIYW5kbGVGb3JWYWx1ZVNjYWxlKHZhbCwgdmlldy5oYW5kZWxUb2dnbGUpO1xyXG5cclxuICAgICAgICAgICAgICB2aWV3LnNsaWRlck1vdmVtZW50LmNlbnRlcmVkSGFuZGVsQnlWYWx1ZVNjYWxlKHNlbGVjdGVkSGFuZGVsWyd0YXJnZXQnXSwgc2VsZWN0ZWRIYW5kZWxbJ3ZhbHVlJ10sIHBvc2l0aW9uc1sncG9zaXRpb25zJ10sIHBvc2l0aW9uc1snbWluaW11bSddKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBpZiAoc2VsZWN0ZWRIYW5kZWxbJ3RhcmdldCddID09PSAnbWluJykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFkYXB0ZWRPYmplY3RGb3JSZWZyZXNoOiBEYXRhT2ZWYWx1ZVJlZnJlc2ggPSB7XHJcbiAgICAgICAgICAgICAgICAgICdtaW4nOiBzZWxlY3RlZEhhbmRlbFsndmFsdWUnXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHZpZXcucmVmcmVzaEN1cnJlbnRWYWx1ZXMoYWRhcHRlZE9iamVjdEZvclJlZnJlc2gpO1xyXG4gICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWRhcHRlZE9iamVjdEZvclJlZnJlc2g6IERhdGFPZlZhbHVlUmVmcmVzaCA9IHtcclxuICAgICAgICAgICAgICAgICAgJ21heCc6IHNlbGVjdGVkSGFuZGVsWyd2YWx1ZSddXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdmlldy5yZWZyZXNoQ3VycmVudFZhbHVlcyhhZGFwdGVkT2JqZWN0Rm9yUmVmcmVzaCk7XHJcbiAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG59OyIsImV4cG9ydCBjbGFzcyBIYW5kZWxzTGFiZWxzIHtcclxuICBtaW5MYWJlbDogSFRNTExhYmVsRWxlbWVudDtcclxuICBtYXhMYWJlbDogSFRNTExhYmVsRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsZXQgbWluOkhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGV0IG1heDpIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIG1pbi5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJIYW5kZWxMYWJlbCcpO1xyXG4gICAgbWF4LmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlckhhbmRlbExhYmVsJyk7XHJcbiAgICB0aGlzLm1pbkxhYmVsID0gbWluO1xyXG4gICAgdGhpcy5tYXhMYWJlbCA9IG1heDtcclxuICB9O1xyXG4gIFxyXG4gIGdldEVsZW1lbnRzKCk6IG9iamVjdCB7XHJcbiAgICByZXR1cm4geydtaW4nOiB0aGlzLm1pbkxhYmVsLCAnbWF4JzogdGhpcy5tYXhMYWJlbH07XHJcbiAgfTtcclxuXHJcbiAgZGlzcGxheUNvbnRyb2xsZXIodG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50LCBtaW46IEhUTUxMYWJlbEVsZW1lbnQsIG1heDogSFRNTExhYmVsRWxlbWVudCkge1xyXG4gICAgaWYgKHRvZ2dsZS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgIG1pbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICAgIG1heC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtaW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgbWF4LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjZW50ZXJpbmdSZWxhdGl2ZVRvSGFuZGxlcyhtaW5IYW5kZWxXaWR0aDogbnVtYmVyLCBtYXhIYW5kZWxXaWR0aDogbnVtYmVyLCBtaW5MYWJlbFdpZHRoOiBudW1iZXIsIG1heExhYmVsV2lkdGg6IG51bWJlciwgbWluTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQsIG1heExhYmVsOiBIVE1MTGFiZWxFbGVtZW50KTogdm9pZCB7XHJcbiAgICBtaW5MYWJlbC5zdHlsZS5sZWZ0ID0gKG1pbkhhbmRlbFdpZHRoIC0gbWluTGFiZWxXaWR0aCkgLyAyICsgJ3B4JztcclxuICAgIG1heExhYmVsLnN0eWxlLmxlZnQgPSAobWF4SGFuZGVsV2lkdGggLSBtYXhMYWJlbFdpZHRoKSAvIDIgKyAncHgnO1xyXG4gIH1cclxufSIsImV4cG9ydCBjbGFzcyBIYW5kZWxzIHtcclxuXHJcbiAgcmVhZG9ubHkgbWluSGFuZGVsOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgcmVhZG9ubHkgbWF4SGFuZGVsOiBIVE1MU3BhbkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgbGV0IG1pbjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgbGV0IG1heDogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgbWluLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlckhhbmRlbCcpO1xyXG4gICAgbWF4LmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlckhhbmRlbCcpO1xyXG4gICAgdGhpcy5taW5IYW5kZWwgPSBtaW47XHJcbiAgICB0aGlzLm1heEhhbmRlbCA9IG1heDtcclxuICB9O1xyXG5cclxuICBnZXRFbGVtZW50cygpOiBvYmplY3Qge1xyXG4gICAgcmV0dXJuIHttaW46IHRoaXMubWluSGFuZGVsLCBtYXg6IHRoaXMubWF4SGFuZGVsfTtcclxuICB9O1xyXG5cclxuICBkaXNwbGF5Q29udHJvbGxlcih0b2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQsIG1heDogSFRNTFNwYW5FbGVtZW50KSB7XHJcbiAgICBpZiAodG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgbWF4LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWF4LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG59OyIsImV4cG9ydCBjbGFzcyBTZWxlY3RlZFJhbmdlIHtcclxuXHJcbiAgcmVhZG9ubHkgaW50ZXJ2YWw6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGxldCBpbnRlcnZhbDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGludGVydmFsLmNsYXNzTGlzdC5hZGQoJ21haW5JbnRlcnZhbCcpO1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IGludGVydmFsO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudHMoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJ2YWw7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNpZGVNZW51IHtcclxuICBjdXN0b21TbGlkZXJNZW51Q29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICBoYW5kZWxUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgaGFuZGVsTGFiZWxUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgcGxhbmVUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgbWluSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgbWF4SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgbWluU2xpZGVyVmFsdWVPdXRwdXQ6IEhUTUxPdXRwdXRFbGVtZW50O1xyXG4gIG1heFNsaWRlclZhbHVlT3V0cHV0OiBIVE1MT3V0cHV0RWxlbWVudDtcclxuICB2YWx1ZVNjYWxlVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgbGV0IHNsaWRlclZhbHVlUDpIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHNsaWRlclZhbHVlUC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJQYXJhZ1ZhbCcpO1xyXG4gICAgc2xpZGVyVmFsdWVQLmlubmVyVGV4dCA9ICfQotC10LrRg9GJ0LXQtSDQt9Cw0L3Rh9C10L3QuNC1OiAnO1xyXG4gICAgXHJcbiAgICBsZXQgbWluU2xpZGVyVmFsdWVPdXRwdXQ6IEhUTUxPdXRwdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3V0cHV0Jyk7XHJcbiAgICBtaW5TbGlkZXJWYWx1ZU91dHB1dC5jbGFzc0xpc3QuYWRkKCdzbGlkZXJWYWx1ZScpO1xyXG4gICAgbWluU2xpZGVyVmFsdWVPdXRwdXQuaWQgPSAnbWluU2xpZGVyVmFsdWUnO1xyXG4gICAgbGV0IG1heFNsaWRlclZhbHVlT3V0cHV0OiBIVE1MT3V0cHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ291dHB1dCcpO1xyXG4gICAgbWF4U2xpZGVyVmFsdWVPdXRwdXQuY2xhc3NMaXN0LmFkZCgnc2xpZGVyVmFsdWUnKTtcclxuICAgIG1heFNsaWRlclZhbHVlT3V0cHV0LmlkID0gJ21heFNsaWRlclZhbHVlJztcclxuICAgIFxyXG4gICAgbGV0IHNsaWRlclRvZ2dsZVA6SFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBzbGlkZXJUb2dnbGVQLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclBhcmFnJyk7XHJcbiAgICBzbGlkZXJUb2dnbGVQLmlubmVyVGV4dCA9ICfQktC60LvRjtGH0LjRgtGMINCy0YLQvtGA0L7QuSDQv9C+0LvQt9GD0L3QvtC6OiAnO1xyXG4gICAgXHJcbiAgICBsZXQgc2xpZGVyVG9nZ2xlTGFiZWw6SFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBzbGlkZXJUb2dnbGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJUb2dnbGUnKTtcclxuXHJcbiAgICBsZXQgbWF4U2xpZGVySGFuZGVsVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIG1heFNsaWRlckhhbmRlbFRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJIYW5kZWxUb2dnbGUnKTtcclxuICAgIG1heFNsaWRlckhhbmRlbFRvZ2dsZS5pZCA9ICdtYXhTbGlkZXJIYW5kZWxUb2dnbGUnO1xyXG4gICAgbWF4U2xpZGVySGFuZGVsVG9nZ2xlLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXHJcblxyXG4gICAgbGV0IGN1c3RvbVNsaWRlckJvcmRlcjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY3VzdG9tU2xpZGVyQm9yZGVyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVRvZ2dsZVNsaWRlckJvcmRlcicpO1xyXG5cclxuICAgIGxldCBjdXN0b21TbGlkZXJJbnB1dHM6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHMuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVySW5wdXRzJyk7XHJcbiAgICBcclxuICAgIGxldCBjdXN0b21TbGlkZXJJbnB1dHNQOiBIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c1AuaW5uZXJUZXh0ID0gJ9CY0LfQvNC10L3QuNGC0Ywg0LfQvdCw0YfQtdC90LjQtTogJztcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c1AuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyUGFyYWcnKTtcclxuXHJcbiAgICBsZXQgY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWwuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVySW5wdXRsYWJlbCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY3VzdG9tU2xpZGVyTWluSW5wdXQnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01pbkxhYmVsLmlubmVyVGV4dCA9ICdNaW46ICc7XHJcbiAgICBcclxuICAgIGxldCBjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJJbnB1dGxhYmVsJyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjdXN0b21TbGlkZXJNYXhJbnB1dCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWF4TGFiZWwuaW5uZXJUZXh0ID0gJ01heDogJztcclxuXHJcbiAgICBsZXQgY3VzdG9tU2xpZGVySW5wdXRzTWluOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01pbi5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJNaW5JbnB1dCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluLmlkID0gJ2N1c3RvbVNsaWRlck1pbklucHV0JztcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01pbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XHJcblxyXG4gICAgbGV0IGN1c3RvbVNsaWRlcklucHV0c01heDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXguY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyTWF4SW5wdXQnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01heC5pZCA9ICdjdXN0b21TbGlkZXJNYXhJbnB1dCc7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXguc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xyXG4gICAgXHJcbiAgICBsZXQgdG9nZ2xlRm9yVmFsdWVzQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JWYWx1ZXNQOiBIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc1AuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyUGFyYWcnKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc1AuaW5uZXJUZXh0ID0gJ9CS0LrQu9GO0YfQuNGC0Ywg0LfQvdCw0YfQtdC90LjRjyDQv9C+0LQg0L/QvtC70LfRg9C90LrQsNC80Lg6ICc7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclZhbHVlc0xhYmVsOiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc0xhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclRvZ2dsZScpO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JWYWx1ZXNJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc0lucHV0LmNsYXNzTGlzdC5hZGQoJ3Nob3dWYWx1ZVRvZ2dsZScpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzSW5wdXQuaWQgPSAnc2hvd1ZhbHVlVG9nZ2xlJztcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yVmFsdWVzU3BhbjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzU3Bhbi5jbGFzc0xpc3QuYWRkKCdjdXN0b21Ub2dnbGVTbGlkZXJCb3JkZXInKTtcclxuICAgIFxyXG4gICAgbGV0IHN0ZXBDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzdGVwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclN0ZXBDb250YWluZXInKTtcclxuXHJcbiAgICBsZXQgc3RlcElucHV0UDogSFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBzdGVwSW5wdXRQLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclBhcmFnJyk7XHJcbiAgICBzdGVwSW5wdXRQLmlubmVyVGV4dCA9ICfQmNC30LzQtdC90LjRgtGMINGI0LDQsyDQv9C+0LvQt9GD0L3QutCwOiAnO1xyXG5cclxuICAgIGxldCBmb3JTdGVwSW5wdXRMYWJlbDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBmb3JTdGVwSW5wdXRMYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJJbnB1dGxhYmVsJyk7XHJcbiAgICBmb3JTdGVwSW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjdXN0b21TbGlkZXJTdGVwSW5wdXQnKTtcclxuICAgIGZvclN0ZXBJbnB1dExhYmVsLmlubmVyVGV4dCA9ICdTdGVwOiAnO1xyXG5cclxuICAgIGxldCBzdGVwSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgc3RlcElucHV0LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclN0ZXBJbnB1dCcpO1xyXG4gICAgc3RlcElucHV0LmlkID0gJ2N1c3RvbVNsaWRlclN0ZXBJbnB1dCc7XHJcbiAgICBzdGVwSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xyXG5cclxuICAgIGxldCB2YWx1ZVNjYWxlQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JWYWx1ZVNjYWxlUDogSFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZVNjYWxlUC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJQYXJhZycpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVTY2FsZVAuaW5uZXJUZXh0ID0gJ9CS0LrQu9GO0YfQuNGC0Ywg0YjQutCw0LvRgyDQt9C90LDRh9C10L3QuNC5OiAnO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JWYWx1ZVNjYWxlTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVTY2FsZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclRvZ2dsZScpO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JWYWx1ZVNjYWxlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVTY2FsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVTY2FsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3ZhbHVlU2NhbGVUb2dnbGUnKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlU2NhbGVJbnB1dC5pZCA9ICd2YWx1ZVNjYWxlVG9nZ2xlJztcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yVmFsdWVTY2FsZVNwYW46IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlU2NhbGVTcGFuLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVRvZ2dsZVNsaWRlckJvcmRlcicpO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JQbGFuZUNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yUGxhbmVQOiBIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lUC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJQYXJhZycpO1xyXG4gICAgdG9nZ2xlRm9yUGxhbmVQLmlubmVyVGV4dCA9ICfQmNC30LzQtdC90LjRgtGMINC/0LvQvtGB0LrQvtGB0YLRjDogJztcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yUGxhbmVMYWJlbDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclRvZ2dsZScpO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JQbGFuZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3BsYW5lVG9nZ2xlJyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZUlucHV0LmlkID0gJ3BsYW5lVG9nZ2xlJztcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yUGxhbmVTcGFuOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZVNwYW4uY2xhc3NMaXN0LmFkZCgnY3VzdG9tVG9nZ2xlU2xpZGVyQm9yZGVyJyk7XHJcblxyXG4gICAgbGV0IG1haW5TbGlkZXJDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgbWFpblNsaWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzbGlkZXJNZW51Q29udGFpbmVyJyk7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZChzbGlkZXJWYWx1ZVApO1xyXG4gICAgc2xpZGVyVmFsdWVQLmFwcGVuZChtaW5TbGlkZXJWYWx1ZU91dHB1dCk7XHJcbiAgICBzbGlkZXJWYWx1ZVAuYXBwZW5kKG1heFNsaWRlclZhbHVlT3V0cHV0KTtcclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuYXBwZW5kKHNsaWRlclRvZ2dsZVApO1xyXG4gICAgbWFpblNsaWRlckNvbnRhaW5lci5hcHBlbmQoc2xpZGVyVG9nZ2xlTGFiZWwpO1xyXG4gICAgXHJcbiAgICBzbGlkZXJUb2dnbGVMYWJlbC5hcHBlbmQobWF4U2xpZGVySGFuZGVsVG9nZ2xlLCBjdXN0b21TbGlkZXJCb3JkZXIpO1xyXG5cclxuICAgIGN1c3RvbVNsaWRlcklucHV0cy5hcHBlbmQoY3VzdG9tU2xpZGVySW5wdXRzUCwgY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWwsIGN1c3RvbVNsaWRlcklucHV0c01pbiwgY3VzdG9tU2xpZGVySW5wdXRzTWF4TGFiZWwsIGN1c3RvbVNsaWRlcklucHV0c01heCk7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZChjdXN0b21TbGlkZXJJbnB1dHMpO1xyXG5cclxuICAgIHN0ZXBDb250YWluZXIuYXBwZW5kKHN0ZXBJbnB1dFAsIGZvclN0ZXBJbnB1dExhYmVsLCBzdGVwSW5wdXQpXHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZChzdGVwQ29udGFpbmVyKTtcclxuXHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNDb250YWluZXIuYXBwZW5kKHRvZ2dsZUZvclZhbHVlc1AsIHRvZ2dsZUZvclZhbHVlc0xhYmVsKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc0xhYmVsLmFwcGVuZCh0b2dnbGVGb3JWYWx1ZXNJbnB1dCwgdG9nZ2xlRm9yVmFsdWVzU3Bhbik7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZCh0b2dnbGVGb3JWYWx1ZXNDb250YWluZXIpO1xyXG4gICAgXHJcbiAgICB2YWx1ZVNjYWxlQ29udGFpbmVyLmFwcGVuZCh0b2dnbGVGb3JWYWx1ZVNjYWxlUCwgdG9nZ2xlRm9yVmFsdWVTY2FsZUxhYmVsKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlU2NhbGVMYWJlbC5hcHBlbmQodG9nZ2xlRm9yVmFsdWVTY2FsZUlucHV0LCB0b2dnbGVGb3JWYWx1ZVNjYWxlU3Bhbik7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZCh2YWx1ZVNjYWxlQ29udGFpbmVyKTtcclxuXHJcbiAgICB0b2dnbGVGb3JQbGFuZUNvbnRhaW5lci5hcHBlbmQodG9nZ2xlRm9yUGxhbmVQLCB0b2dnbGVGb3JQbGFuZUxhYmVsKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lTGFiZWwuYXBwZW5kKHRvZ2dsZUZvclBsYW5lSW5wdXQsIHRvZ2dsZUZvclBsYW5lU3Bhbik7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZCh0b2dnbGVGb3JQbGFuZUNvbnRhaW5lcik7XHJcblxyXG4gICAgc3RlcENvbnRhaW5lci5hcHBlbmQoc3RlcElucHV0UCwgZm9yU3RlcElucHV0TGFiZWwsIHN0ZXBJbnB1dClcclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuYXBwZW5kKHN0ZXBDb250YWluZXIpO1xyXG5cclxuXHJcbiAgICB0aGlzLmN1c3RvbVNsaWRlck1lbnVDb250YWluZXIgPSBtYWluU2xpZGVyQ29udGFpbmVyO1xyXG4gICAgdGhpcy5oYW5kZWxUb2dnbGUgPSBtYXhTbGlkZXJIYW5kZWxUb2dnbGU7XHJcbiAgICB0aGlzLmhhbmRlbExhYmVsVG9nZ2xlID0gdG9nZ2xlRm9yVmFsdWVzSW5wdXQ7XHJcbiAgICB0aGlzLnBsYW5lVG9nZ2xlID0gdG9nZ2xlRm9yUGxhbmVJbnB1dDtcclxuICAgIHRoaXMubWluSW5wdXQgPSBjdXN0b21TbGlkZXJJbnB1dHNNaW47XHJcbiAgICB0aGlzLm1heElucHV0ID0gY3VzdG9tU2xpZGVySW5wdXRzTWF4O1xyXG4gICAgdGhpcy5taW5TbGlkZXJWYWx1ZU91dHB1dCA9IG1pblNsaWRlclZhbHVlT3V0cHV0O1xyXG4gICAgdGhpcy5tYXhTbGlkZXJWYWx1ZU91dHB1dCA9IG1heFNsaWRlclZhbHVlT3V0cHV0O1xyXG4gICAgdGhpcy52YWx1ZVNjYWxlVG9nZ2xlID0gdG9nZ2xlRm9yVmFsdWVTY2FsZUlucHV0O1xyXG4gIH07XHJcbn07IiwiaW1wb3J0IHsgU3RhcnRIYW5kZWxzUG9zaXRpb24gfSBmcm9tICcuLi8uLi9tb2RlbC9tb2RlbCc7XHJcblxyXG5pbnRlcmZhY2UgSGFuZGVscyB7XHJcbiAgbWluOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgbWF4OiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgbWluTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgbWF4TGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgc2xpZGVyUmFuZ2U6IEhUTUxEaXZFbGVtZW50O1xyXG4gIGhhbmRlbHNUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQgfCBib29sZWFuO1xyXG4gIHBsYW5lVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50IHwgYm9vbGVhbjtcclxuICBpbnRlcnZhbDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgc3RlcDogbnVtYmVyIHwgc3RyaW5nIHwgYm9vbGVhbjtcclxufTtcclxuXHJcbmludGVyZmFjZSBUZXN0TW91c2VFdmVudCB7XHJcbiAgY2xpZW50WDogbnVtYmVyO1xyXG4gIGNsaWVudFk6IG51bWJlcjtcclxufVxyXG5cclxuaW50ZXJmYWNlIEN1cnJlbnRIYW5kZWxzUG9zaXRpb25zIHtcclxuICBba2V5OiBzdHJpbmddOiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmc7XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBTbGlkZXJNb3ZlbWVudCB7XHJcbiAgbWluOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgbWF4OiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgbWluTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgbWF4TGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgc2xpZGVyUmFuZ2U6IEhUTUxEaXZFbGVtZW50O1xyXG4gIGhhbmRlbHNUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQgfCBib29sZWFuO1xyXG4gIHBsYW5lVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50IHwgYm9vbGVhbjtcclxuICBpbnRlcnZhbDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgc3RlcDogbnVtYmVyIHwgc3RyaW5nIHwgYm9vbGVhbjtcclxuICBzdGVwQW1vdW50OiBudW1iZXIgfCB1bmRlZmluZWQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCBoYW5kZWxzOiBIYW5kZWxzKSB7XHJcbiAgICB0aGlzLm1pbiA9IGhhbmRlbHMubWluO1xyXG4gICAgdGhpcy5tYXggPSBoYW5kZWxzLm1heDtcclxuICAgIHRoaXMubWluTGFiZWwgPSBoYW5kZWxzLm1pbkxhYmVsO1xyXG4gICAgdGhpcy5tYXhMYWJlbD0gaGFuZGVscy5tYXhMYWJlbDtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UgPSBoYW5kZWxzLnNsaWRlclJhbmdlO1xyXG4gICAgdGhpcy5oYW5kZWxzVG9nZ2xlID0gaGFuZGVscy5oYW5kZWxzVG9nZ2xlO1xyXG4gICAgdGhpcy5wbGFuZVRvZ2dsZSA9IGhhbmRlbHMucGxhbmVUb2dnbGU7XHJcbiAgICB0aGlzLmludGVydmFsID0gaGFuZGVscy5pbnRlcnZhbDtcclxuICAgIHRoaXMuc3RlcCA9IGhhbmRlbHMuc3RlcDtcclxuICB9XHJcblxyXG4gIGN1cnJlbnRIYW5kZWxzUG9zaXRpb25zOiBDdXJyZW50SGFuZGVsc1Bvc2l0aW9ucyA9IHtcclxuICAgICdtaW4nOiB7fSxcclxuICAgICdtYXgnOiB7fVxyXG4gIH1cclxuXHJcbiAgc3RhcnRIYW5kbGVyc1Bvc2l0aW9ucyhwb3NpdGlvblZhbHVlczogU3RhcnRIYW5kZWxzUG9zaXRpb24gKTogdm9pZCB7XHJcbiAgICBsZXQgbWluOiBzdHJpbmcgPSAoKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkgLyArcG9zaXRpb25WYWx1ZXMucG9zaXRpb25zKSAqICgrcG9zaXRpb25WYWx1ZXNbJ21pbiddIC0gK3Bvc2l0aW9uVmFsdWVzWydtaW5pbXVtJ10pICsgJyc7XHJcbiAgICBsZXQgbWF4OiBzdHJpbmcgPSAoKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkgLyArcG9zaXRpb25WYWx1ZXMucG9zaXRpb25zKSAqICgrcG9zaXRpb25WYWx1ZXNbJ21heCddIC0gK3Bvc2l0aW9uVmFsdWVzWydtaW5pbXVtJ10pICsgJyc7XHJcbiAgICBcclxuICAgIHRoaXMuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWluLm1pbiA9IG1pbjtcclxuICAgIHRoaXMuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWF4Lm1heCA9IG1heDtcclxuICAgIFxyXG4gICAgdGhpcy5taW4uc3R5bGUubGVmdCA9IG1pbiArICdweCc7XHJcbiAgICB0aGlzLm1heC5zdHlsZS5sZWZ0ID0gbWF4ICsgJ3B4JztcclxuICAgIFxyXG4gICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5sZWZ0ID0gK21pbiArIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICB0aGlzLmludGVydmFsLnN0eWxlLnJpZ2h0ID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSArbWF4KSAtIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgfVxyXG5cclxuICBtaW5IYW5kZWxMaXN0ZW5lciggZXZlbnQ6IFRlc3RNb3VzZUV2ZW50LCB0ZXN0OiBUZXN0TW91c2VFdmVudCB8IHVuZGVmaW5lZCApOiB2b2lkIHtcclxuICAgIGxldCBtaW4gPSB0aGlzLm1pbjtcclxuICAgIGxldCBtYXggPSB0aGlzLm1heDtcclxuICAgIGxldCBtaW5MYWJlbCA9IHRoaXMubWluTGFiZWw7XHJcbiAgICBsZXQgc2xpZGVyUmFuZ2UgPSB0aGlzLnNsaWRlclJhbmdlO1xyXG4gICAgbGV0IHRoYXQ6IHRoaXMgPSB0aGlzO1xyXG4gICAgbGV0IHNoaWZ0OiBudW1iZXI7XHJcbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmludGVydmFsO1xyXG4gICAgbGV0IHN0ZXA6IG51bWJlcjtcclxuICAgIGxldCB2ZXJ0aWNhbDogYm9vbGVhbjtcclxuICAgIGxldCBkb3VibGVIYW5kZWxzOiBib29sZWFuO1xyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrQ3VycmVudFNsaWRlclNldHRpbmdzKCk6dm9pZCB7XHJcbiAgICAgIHR5cGVvZiB0aGF0LmhhbmRlbHNUb2dnbGUgIT09ICdib29sZWFuJyA/IGRvdWJsZUhhbmRlbHMgPSB0aGF0LmhhbmRlbHNUb2dnbGUuY2hlY2tlZCA6IGRvdWJsZUhhbmRlbHMgPSB0aGF0LmhhbmRlbHNUb2dnbGU7O1xyXG4gICAgICB0eXBlb2YgdGhhdC5wbGFuZVRvZ2dsZSAhPT0gJ2Jvb2xlYW4nID8gdmVydGljYWwgPSB0aGF0LnBsYW5lVG9nZ2xlLmNoZWNrZWQgOiB0aGF0LnBsYW5lVG9nZ2xlO1xyXG4gICAgICBcclxuICAgICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgICAgc2hpZnQgPSBldmVudC5jbGllbnRZIC0gbWluLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIG1pbi5vZmZzZXRXaWR0aDtcclxuICAgICAgfSBlbHNlIHsgIFxyXG4gICAgICAgIHNoaWZ0ID0gZXZlbnQuY2xpZW50WCAtIG1pbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY2hlY2tDdXJyZW50U2xpZGVyU2V0dGluZ3MoKTtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuc3RlcEFtb3VudCAgJiYgdGhpcy5zdGVwICE9PSBmYWxzZSkge1xyXG4gICAgICBzdGVwID0gKHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gbWluLm9mZnNldFdpZHRoKSAvIHRoaXMuc3RlcEFtb3VudCAqICt0aGlzLnN0ZXA7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG4gICAgXHJcbiAgICBpZiggdGVzdCApIHtcclxuICAgICAgb25Nb3VzZU1vdmUoIHRlc3QgKVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQ6IFRlc3RNb3VzZUV2ZW50ICkge1xyXG4gICAgICBsZXQgbmV3TGVmdDogbnVtYmVyO1xyXG5cclxuICAgICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgICAgbmV3TGVmdCA9IHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gKGV2ZW50LmNsaWVudFkgLSBzaGlmdCAtIHNsaWRlclJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3TGVmdCA9IGV2ZW50LmNsaWVudFggLSBzaGlmdCAtIHNsaWRlclJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBsZXQgcmlnaHRFZGdlID0gc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSBtaW4ub2Zmc2V0V2lkdGg7XHJcbiAgICAgIFxyXG4gICAgICBpZiAodGhhdC5zdGVwICE9PSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChuZXdMZWZ0ID49ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pbi5taW4gKyBzdGVwIHx8IG5ld0xlZnQgPD0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWluLm1pbiAtIHN0ZXApIHtcclxuICAgICAgICAgIG5ld0xlZnQgPj0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWluLm1pbiArIHN0ZXAgPyBuZXdMZWZ0ID0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWluLm1pbiArIHN0ZXAgOiBmYWxzZTtcclxuICAgICAgICAgIG5ld0xlZnQgPD0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWluLm1pbiAtIHN0ZXAgPyBuZXdMZWZ0ID0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWluLm1pbiAtIHN0ZXAgOiBmYWxzZTtcclxuICAgICAgICAgIHJlbmV3YWxPZlBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlbmV3YWxPZlBvc2l0aW9uKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBmdW5jdGlvbiByZW5ld2FsT2ZQb3NpdGlvbigpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKG5ld0xlZnQgPCAwKSB7XHJcbiAgICAgICAgICBuZXdMZWZ0ID0gMDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChkb3VibGVIYW5kZWxzKSB7IFxyXG4gICAgICAgICAgaWYgKG5ld0xlZnQgPj0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWF4WydtYXgnXSAtIG1heC5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgICAgICBuZXdMZWZ0ID0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWF4WydtYXgnXSAtIG1heC5vZmZzZXRXaWR0aFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKG5ld0xlZnQgPiByaWdodEVkZ2UpIHtcclxuICAgICAgICAgICAgbmV3TGVmdCA9IHJpZ2h0RWRnZTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbWluLnN0eWxlLmxlZnQgPSBuZXdMZWZ0ICsgJ3B4JztcclxuICAgICAgICBpbnRlcnZhbC5zdHlsZS5sZWZ0ID0gbmV3TGVmdCArIG1pbi5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChuZXdMZWZ0ICE9PSB1bmRlZmluZWQgfHwgcmlnaHRFZGdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnNbJ21pbiddID0geydtaW4nOiBgJHtuZXdMZWZ0fWAsICdzbGlkZXJXaWR0aCc6IGAke3NsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gbWluLm9mZnNldFdpZHRofWB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBtaW5MYWJlbC5zdHlsZS5sZWZ0ID0gKChtaW4ub2Zmc2V0V2lkdGggLSBtaW5MYWJlbC5vZmZzZXRXaWR0aCkgLSAxKSAvIDIgKyAncHgnO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlVXAoKSB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYXhIYW5kZWxMaXN0ZW5lciggZXZlbnQ6IFRlc3RNb3VzZUV2ZW50LCB0ZXN0OiBUZXN0TW91c2VFdmVudCB8IHVuZGVmaW5lZCk6IHZvaWQge1xyXG4gICAgbGV0IG1heCA9IHRoaXMubWF4O1xyXG4gICAgbGV0IG1pbiA9IHRoaXMubWluO1xyXG4gICAgbGV0IHNsaWRlclJhbmdlID0gdGhpcy5zbGlkZXJSYW5nZTtcclxuICAgIGxldCBzaGlmdDogbnVtYmVyO1xyXG4gICAgbGV0IG1heExhYmVsID0gdGhpcy5tYXhMYWJlbDtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIGxldCBpbnRlcnZhbCA9IHRoaXMuaW50ZXJ2YWw7XHJcbiAgICBsZXQgc3RlcDogbnVtYmVyO1xyXG4gICAgbGV0IGRvdWJsZUhhbmRlbHM6IGJvb2xlYW47XHJcbiAgICBsZXQgdmVydGljYWw6IGJvb2xlYW47XHJcblxyXG4gICAgaWYgKHRoaXMuc3RlcEFtb3VudCAmJiB0aGlzLnN0ZXAgIT09IGZhbHNlKSB7XHJcbiAgICAgIHN0ZXAgPSAoc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSBtaW4ub2Zmc2V0V2lkdGgpIC8gdGhpcy5zdGVwQW1vdW50ICogK3RoaXMuc3RlcDtcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0N1cnJlbnRTbGlkZXJTZXR0aW5ncygpOnZvaWQge1xyXG4gICAgICB0eXBlb2YgdGhhdC5oYW5kZWxzVG9nZ2xlICE9PSAnYm9vbGVhbicgPyBkb3VibGVIYW5kZWxzID0gdGhhdC5oYW5kZWxzVG9nZ2xlLmNoZWNrZWQgOiBkb3VibGVIYW5kZWxzID0gdGhhdC5oYW5kZWxzVG9nZ2xlOztcclxuICAgICAgdHlwZW9mIHRoYXQucGxhbmVUb2dnbGUgIT09ICdib29sZWFuJyA/IHZlcnRpY2FsID0gdGhhdC5wbGFuZVRvZ2dsZS5jaGVja2VkIDogdGhhdC5wbGFuZVRvZ2dsZTtcclxuXHJcbiAgICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICAgIHNoaWZ0ID0gZXZlbnQuY2xpZW50WSAtIG1heC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBtYXgub2Zmc2V0V2lkdGg7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2hpZnQgPSBldmVudC5jbGllbnRYIC0gbWF4LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICAgIH1cclxuICAgIH07XHJcbiAgICBcclxuICAgIGNoZWNrQ3VycmVudFNsaWRlclNldHRpbmdzKCk7XHJcblxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcblxyXG4gICAgaWYoIHRlc3QgIT09IHVuZGVmaW5lZCApIHtcclxuICAgICAgb25Nb3VzZU1vdmUoIHRlc3QgKVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQ6IFRlc3RNb3VzZUV2ZW50ICkge1xyXG4gICAgICBsZXQgbmV3TGVmdDogbnVtYmVyO1xyXG4gICAgICBcclxuICAgICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgICAgbmV3TGVmdCA9IHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gKGV2ZW50LmNsaWVudFkgLSBzaGlmdCAtIHNsaWRlclJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3TGVmdCA9IGV2ZW50LmNsaWVudFggLSBzaGlmdCAtIHNsaWRlclJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCByaWdodEVkZ2UgPSBzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG1heC5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAgIGlmICh0aGF0LnN0ZXAgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKG5ld0xlZnQgPj0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWF4Lm1heCArIHN0ZXAgfHwgbmV3TGVmdCA8PSArdGhhdC5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5tYXgubWF4IC0gc3RlcCkge1xyXG4gICAgICAgICAgbmV3TGVmdCA+PSArdGhhdC5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5tYXgubWF4ICsgc3RlcCA/IG5ld0xlZnQgPSArdGhhdC5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5tYXgubWF4ICsgc3RlcCA6IGZhbHNlO1xyXG4gICAgICAgICAgbmV3TGVmdCA8PSArdGhhdC5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5tYXgubWF4IC0gc3RlcCA/IG5ld0xlZnQgPSArdGhhdC5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5tYXgubWF4IC0gc3RlcCA6IGZhbHNlO1xyXG4gICAgICAgICAgcmVuZXdhbE9mUG9zaXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVuZXdhbE9mUG9zaXRpb24oKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHJlbmV3YWxPZlBvc2l0aW9uKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAobmV3TGVmdCA8IDApIHtcclxuICAgICAgICAgIG5ld0xlZnQgPSAwO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChuZXdMZWZ0ID4gcmlnaHRFZGdlKSB7XHJcbiAgICAgICAgICBuZXdMZWZ0ID0gcmlnaHRFZGdlO1xyXG4gICAgICAgIH07XHJcbiAgXHJcbiAgICAgICAgaWYgKG5ld0xlZnQgPD0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWluWydtaW4nXSArIG1pbi5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgICAgbmV3TGVmdCA9ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pblsnbWluJ10gKyBtaW4ub2Zmc2V0V2lkdGhcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1heC5zdHlsZS5sZWZ0ID0gbmV3TGVmdCArICdweCc7XHJcbiAgICAgICAgaW50ZXJ2YWwuc3R5bGUucmlnaHQgPSAoc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSBuZXdMZWZ0KSAtIG1heC5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gIFxyXG4gICAgICAgIGlmIChuZXdMZWZ0ICE9PSB1bmRlZmluZWQgfHwgcmlnaHRFZGdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnNbJ21heCddID0geydtYXgnOiBgJHtuZXdMZWZ0fWAsICdzbGlkZXJXaWR0aCc6IGAke3NsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gbWF4Lm9mZnNldFdpZHRofWB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBtYXhMYWJlbC5zdHlsZS5sZWZ0ID0gKChtYXgub2Zmc2V0V2lkdGggLSBtYXhMYWJlbC5vZmZzZXRXaWR0aCkgLSAxKSAvIDIgKyAncHgnO1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgIH07XHJcbiAgICBcclxuICAgIGZ1bmN0aW9uIG9uTW91c2VVcCgpIHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoYW5nZVBsYW5lKCB0b2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQgfCBib29sZWFuLCBib2R5OiBIVE1MRGl2RWxlbWVudCwgbWluVmFsdWU6IEhUTUxQYXJhZ3JhcGhFbGVtZW50LCBtYXhWYWx1ZTogSFRNTFBhcmFncmFwaEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGxldCB0b2dnbGVSZXN1bHQ6IGJvb2xlYW47XHJcbiAgICB0eXBlb2YgdG9nZ2xlID09PSAnYm9vbGVhbicgPyAgdG9nZ2xlUmVzdWx0ID0gdG9nZ2xlIDogdG9nZ2xlUmVzdWx0ID0gdG9nZ2xlLmNoZWNrZWQ7XHJcbiAgICBpZiAodG9nZ2xlUmVzdWx0KSB7XHJcbiAgICAgIGJvZHkuc3R5bGUuaGVpZ2h0ID0gYm9keS5vZmZzZXRXaWR0aCArICdweCc7XHJcbiAgICAgIHRoaXMuc2xpZGVyUmFuZ2Uuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgtOTBkZWcpJztcclxuICAgICAgdGhpcy5zbGlkZXJSYW5nZS5zdHlsZS50b3AgPSBib2R5Lm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICAgIHRoaXMubWluTGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnbWluU2xpZGVySGFuZGVsTGFiZWwnKTtcclxuICAgICAgdGhpcy5tYXhMYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCdtYXhTbGlkZXJIYW5kZWxMYWJlbCcpO1xyXG4gICAgICB0aGlzLm1pbkxhYmVsLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlckhhbmRlbExhYmVsVmVydGljYWwnKTtcclxuICAgICAgdGhpcy5tYXhMYWJlbC5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJIYW5kZWxMYWJlbFZlcnRpY2FsJyk7XHJcbiAgICAgIG1pblZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ21pblNsaWRlclBvaW50Jyk7XHJcbiAgICAgIG1heFZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ21heFNsaWRlclBvaW50Jyk7XHJcbiAgICAgIG1pblZhbHVlLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlclBvaW50VmVydGljYWwnKTtcclxuICAgICAgbWF4VmFsdWUuY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVyUG9pbnRWZXJ0aWNhbCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm9keS5zdHlsZS5oZWlnaHQgPSAnJztcclxuICAgICAgdGhpcy5zbGlkZXJSYW5nZS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcclxuICAgICAgdGhpcy5zbGlkZXJSYW5nZS5zdHlsZS50b3AgPSAnJztcclxuICAgICAgdGhpcy5taW5MYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCdtaW5TbGlkZXJIYW5kZWxMYWJlbFZlcnRpY2FsJyk7XHJcbiAgICAgIHRoaXMubWF4TGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnbWF4U2xpZGVySGFuZGVsTGFiZWxWZXJ0aWNhbCcpO1xyXG4gICAgICB0aGlzLm1pbkxhYmVsLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlckhhbmRlbExhYmVsJyk7XHJcbiAgICAgIHRoaXMubWF4TGFiZWwuY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVySGFuZGVsTGFiZWwnKTtcclxuICAgICAgbWluVmFsdWUuY2xhc3NMaXN0LnJlbW92ZSgnbWluU2xpZGVyUG9pbnRWZXJ0aWNhbCcpO1xyXG4gICAgICBtYXhWYWx1ZS5jbGFzc0xpc3QucmVtb3ZlKCdtYXhTbGlkZXJQb2ludFZlcnRpY2FsJyk7XHJcbiAgICAgIG1pblZhbHVlLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlclBvaW50Jyk7XHJcbiAgICAgIG1heFZhbHVlLmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlclBvaW50Jyk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHNlbGVjdGlvbk9mUHJlcGFyZWRWYWx1ZSh0YXJnZXQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IHRvZ2dsZVJlc3VsdDogYm9vbGVhbjtcclxuICAgIHR5cGVvZiB0aGlzLmhhbmRlbHNUb2dnbGUgPT09ICdib29sZWFuJyA/ICB0b2dnbGVSZXN1bHQgPSB0aGlzLmhhbmRlbHNUb2dnbGUgOiB0b2dnbGVSZXN1bHQgPSB0aGlzLmhhbmRlbHNUb2dnbGUuY2hlY2tlZDtcclxuICAgIGlmICh0YXJnZXQgPT09ICdtaW4nKSB7XHJcbiAgICAgIHRoaXMuY3VycmVudEhhbmRlbHNQb3NpdGlvbnNbJ21pbiddID0geydtaW4nOiAnMCcsICdzbGlkZXJXaWR0aCc6YCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWB9XHJcbiAgICAgIHRoaXMubWluLnN0eWxlLmxlZnQgPSAnMHB4J1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLmxlZnQgPSAwICsgdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0b2dnbGVSZXN1bHQpIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtYXgnXSA9IHsnbWF4JzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWAsICdzbGlkZXJXaWR0aCc6YCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWB9O1xyXG4gICAgICAgIHRoaXMubWF4LnN0eWxlLmxlZnQgPSB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUucmlnaHQgPSAodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGgpICsgdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtaW4nXSA9IHsnbWluJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWAsICdzbGlkZXJXaWR0aCc6YCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWB9O1xyXG4gICAgICAgIHRoaXMubWluLnN0eWxlLmxlZnQgPSB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUubGVmdCA9ICh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpICsgdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsncHgnO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBzaWRlTWVudUlucHV0c1ZhbHVlc1ZhbGlkYXRpb25DaGVja2VyKHRhcmdldDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyLCBwb3NpdGlvbnM6IG51bWJlciwgbWluaW11bTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICBsZXQgdG9nZ2xlUmVzdWx0OiBib29sZWFuO1xyXG4gICAgdHlwZW9mIHRoaXMuaGFuZGVsc1RvZ2dsZSA9PT0gJ2Jvb2xlYW4nID8gIHRvZ2dsZVJlc3VsdCA9IHRoaXMuaGFuZGVsc1RvZ2dsZSA6IHRvZ2dsZVJlc3VsdCA9IHRoaXMuaGFuZGVsc1RvZ2dsZS5jaGVja2VkO1xyXG4gICAgaWYgKHRhcmdldCA9PT0gJ21pbicgJiYgdG9nZ2xlUmVzdWx0KSB7XHJcbiAgICAgIGxldCBtaW46IHN0cmluZyA9ICgodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSAvIHBvc2l0aW9ucykgKiAodmFsdWUgLSBtaW5pbXVtKSArICcnO1xyXG5cclxuICAgICAgaWYgKCttaW4gPj0gK3RoaXMuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWF4Lm1heCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgbWluID0gK3RoaXMuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWF4Lm1heCAtIHRoaXMubWluLm9mZnNldFdpZHRoICsgJyc7XHJcbiAgICAgIH0gZWxzZSBpZigrbWluIDwgMCkge1xyXG4gICAgICAgIG1pbiA9ICcwJztcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuY3VycmVudEhhbmRlbHNQb3NpdGlvbnNbJ21pbiddID0geydtaW4nOiBtaW4sICdzbGlkZXJXaWR0aCc6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gfTtcclxuICAgICAgdGhpcy5taW4uc3R5bGUubGVmdCA9IG1pbiArICdweCc7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUubGVmdCA9ICttaW4gKyB0aGlzLm1pbi5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gICAgfSBlbHNlIGlmICh0YXJnZXQgPT09ICdtaW4nKSB7XHJcbiAgICAgIGxldCBtaW46IHN0cmluZyA9ICgodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSAvIHBvc2l0aW9ucykgKiAodmFsdWUgLSBtaW5pbXVtKSArICcnO1xyXG5cclxuICAgICAgaWYoK21pbiA8IDApIHtcclxuICAgICAgICBtaW4gPSAnMCc7XHJcbiAgICAgIH0gZWxzZSBpZiAoK21pbiA+IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgIG1pbiA9ICh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpICsgJyc7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtaW4nXSA9IHsnbWluJzogbWluLCAnc2xpZGVyV2lkdGgnOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGh9YH07XHJcbiAgICAgIHRoaXMubWluLnN0eWxlLmxlZnQgPSBtaW4gKyAncHgnO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLmxlZnQgPSArbWluICsgdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSAnbWF4Jykge1xyXG4gICAgICBsZXQgbWF4OiBzdHJpbmcgPSAoKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1heC5vZmZzZXRXaWR0aCkgLyBwb3NpdGlvbnMpICogKHZhbHVlIC0gbWluaW11bSkgKyAnJztcclxuXHJcbiAgICAgIGlmICgrbWF4IDw9ICt0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pbi5taW4gKyB0aGlzLm1pbi5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgIG1heCA9ICt0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pbi5taW4gKyB0aGlzLm1heC5vZmZzZXRXaWR0aCArICcnO1xyXG4gICAgICB9IGVsc2UgaWYoK21heCA+IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCl7XHJcbiAgICAgICAgbWF4ID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkgKyAnJztcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuY3VycmVudEhhbmRlbHNQb3NpdGlvbnNbJ21heCddID0geydtYXgnOiBtYXgsICdzbGlkZXJXaWR0aCc6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1heC5vZmZzZXRXaWR0aH1gfTtcclxuICAgICAgdGhpcy5tYXguc3R5bGUubGVmdCA9IG1heCArICdweCc7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUucmlnaHQgPSAodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtICttYXgpIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjZW50ZXJlZEhhbmRlbEJ5VmFsdWVTY2FsZSh0YXJnZXQ6IHN0cmluZywgdmFsdWU6IHN0cmluZywgcG9zaXRpb25zOiBzdHJpbmcsIG1pbmltdW06IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHRhcmdldCA9PT0gJ21pbicpIHtcclxuICAgICAgbGV0IG1pbjogc3RyaW5nID0gU3RyaW5nKCgodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSAvICtwb3NpdGlvbnMpICogKCt2YWx1ZSAtICttaW5pbXVtKSk7XHJcblxyXG4gICAgICBpZigrbWluIDwgMCkge1xyXG4gICAgICAgIG1pbiA9ICcwJztcclxuICAgICAgfSBlbHNlIGlmICgrbWluID4gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgbWluID0gU3RyaW5nKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMubWluLnN0eWxlLmxlZnQgPSBtaW4gKyAncHgnO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLmxlZnQgPSArbWluICsgdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSAnbWF4Jykge1xyXG4gICAgICBsZXQgbWF4OiBzdHJpbmcgPSBTdHJpbmcoKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXgub2Zmc2V0V2lkdGgpIC8gK3Bvc2l0aW9ucykgKiAoK3ZhbHVlIC0gK21pbmltdW0pKTtcclxuXHJcbiAgICAgIGlmICgrbWF4IDw9ICt0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pbi5taW4gKyB0aGlzLm1pbi5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgIG1heCA9IFN0cmluZygrdGhpcy5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5taW4ubWluICsgdGhpcy5tYXgub2Zmc2V0V2lkdGgpO1xyXG4gICAgICB9IGVsc2UgaWYoK21heCA+IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCl7XHJcbiAgICAgICAgbWF4ID0gU3RyaW5nKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMubWF4LnN0eWxlLmxlZnQgPSBtYXggKyAncHgnO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLnJpZ2h0ID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSArbWF4KSAtIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICB9O1xyXG4gIH07XHJcbn07IiwiZXhwb3J0IGNsYXNzIFNsaWRlclJhbmdlIHtcclxuXHJcbiAgcmFuZ2U6IEhUTUxEaXZFbGVtZW50O1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIGxldCBlbGVtOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdzbGlkZXJSYW5nZScpO1xyXG4gICAgdGhpcy5yYW5nZSA9IGVsZW07XHJcbiAgfTtcclxuXHJcbiAgZ2V0RWxlbWVudHMoKTogSFRNTERpdkVsZW1lbnR7XHJcbiAgICByZXR1cm4gdGhpcy5yYW5nZTtcclxuICB9O1xyXG5cclxufTsiLCJpbXBvcnQge0dldFZhbHVlc0ZvclZhbHVlU2NhbGV9IGZyb20gJy4uLy4uL21vZGVsL2ZhY2FkZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVmFsdWVTY2FsZSB7XHJcbiAgcmVhZG9ubHkgdmFsdWVTY2FsZTE1OiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIHJlYWRvbmx5IHZhbHVlU2NhbGUzMDogSFRNTExhYmVsRWxlbWVudDtcclxuICByZWFkb25seSB2YWx1ZVNjYWxlNTA6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgcmVhZG9ubHkgdmFsdWVTY2FsZTcwOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIHJlYWRvbmx5IHZhbHVlU2NhbGU4NTogSFRNTExhYmVsRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsZXQgdmFsdWUxNTogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsZXQgdmFsdWUzMDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsZXQgdmFsdWU1MDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsZXQgdmFsdWU3MDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsZXQgdmFsdWU4NTogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICB2YWx1ZTE1LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsJywgJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsXzE1Jyk7XHJcbiAgICB2YWx1ZTMwLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsJywgJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsXzMwJyk7XHJcbiAgICB2YWx1ZTUwLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsJywgJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsXzUwJyk7XHJcbiAgICB2YWx1ZTcwLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsJywgJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsXzcwJyk7XHJcbiAgICB2YWx1ZTg1LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsJywgJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsXzg1Jyk7XHJcbiAgICB0aGlzLnZhbHVlU2NhbGUxNSA9IHZhbHVlMTU7XHJcbiAgICB0aGlzLnZhbHVlU2NhbGUzMCA9IHZhbHVlMzA7XHJcbiAgICB0aGlzLnZhbHVlU2NhbGU1MCA9IHZhbHVlNTA7XHJcbiAgICB0aGlzLnZhbHVlU2NhbGU3MCA9IHZhbHVlNzA7XHJcbiAgICB0aGlzLnZhbHVlU2NhbGU4NSA9IHZhbHVlODU7XHJcbiAgfTtcclxuXHJcbiAgcmVmcmVzaFZhbHVlcyh2YWx1ZXM6IEdldFZhbHVlc0ZvclZhbHVlU2NhbGUpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWVTY2FsZTE1LmlubmVyVGV4dCA9IHZhbHVlc1snMTUnXTtcclxuICAgIHRoaXMudmFsdWVTY2FsZTMwLmlubmVyVGV4dCA9IHZhbHVlc1snMzAnXTtcclxuICAgIHRoaXMudmFsdWVTY2FsZTUwLmlubmVyVGV4dCA9IHZhbHVlc1snNTAnXTtcclxuICAgIHRoaXMudmFsdWVTY2FsZTcwLmlubmVyVGV4dCA9IHZhbHVlc1snNzAnXTtcclxuICAgIHRoaXMudmFsdWVTY2FsZTg1LmlubmVyVGV4dCA9IHZhbHVlc1snODUnXTtcclxuICB9O1xyXG5cclxuICBjZW50ZXJzVmFsdWVzUG9zaXRpb25zKHNsaWRlcjogSFRNTERpdkVsZW1lbnQsIGhhbmRlbDpIVE1MU3BhbkVsZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWVTY2FsZTE1LnN0eWxlLnJpZ2h0ID0gKChzbGlkZXIub2Zmc2V0V2lkdGggLSBoYW5kZWwub2Zmc2V0V2lkdGgpICogMC44NSkgLSAodGhpcy52YWx1ZVNjYWxlMTUub2Zmc2V0V2lkdGggLyAyKSArIChoYW5kZWwub2Zmc2V0V2lkdGggLyAyKSArICdweCc7XHJcbiAgICB0aGlzLnZhbHVlU2NhbGU4NS5zdHlsZS5sZWZ0ID0gKChzbGlkZXIub2Zmc2V0V2lkdGggLSBoYW5kZWwub2Zmc2V0V2lkdGgpICogMC44NSkgLSAodGhpcy52YWx1ZVNjYWxlODUub2Zmc2V0V2lkdGggLyAyKSArIChoYW5kZWwub2Zmc2V0V2lkdGggLyAyKSArICdweCc7XHJcbiAgICB0aGlzLnZhbHVlU2NhbGUzMC5zdHlsZS5yaWdodCA9ICgoc2xpZGVyLm9mZnNldFdpZHRoIC0gaGFuZGVsLm9mZnNldFdpZHRoKSAqIDAuNzApIC0gKHRoaXMudmFsdWVTY2FsZTMwLm9mZnNldFdpZHRoIC8gMikgKyAoaGFuZGVsLm9mZnNldFdpZHRoIC8gMikgKyAncHgnO1xyXG4gICAgdGhpcy52YWx1ZVNjYWxlNzAuc3R5bGUubGVmdCA9ICgoc2xpZGVyLm9mZnNldFdpZHRoIC0gaGFuZGVsLm9mZnNldFdpZHRoKSAqIDAuNzApIC0gKHRoaXMudmFsdWVTY2FsZTcwLm9mZnNldFdpZHRoIC8gMikgKyAoaGFuZGVsLm9mZnNldFdpZHRoIC8gMikgKyAncHgnO1xyXG4gICAgdGhpcy52YWx1ZVNjYWxlNTAuc3R5bGUubGVmdCA9ICgoc2xpZGVyLm9mZnNldFdpZHRoIC0gaGFuZGVsLm9mZnNldFdpZHRoKSAqIDAuNTApIC0gKHRoaXMudmFsdWVTY2FsZTUwLm9mZnNldFdpZHRoIC8gMikgKyAoaGFuZGVsLm9mZnNldFdpZHRoIC8gMikgKyAncHgnO1xyXG4gIH07XHJcblxyXG4gIGRpc3BsYXlDb250cm9sbGVyKHRvZ2dsZTogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRvZ2dsZS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMudmFsdWVTY2FsZTE1LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlMzAuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gICAgICB0aGlzLnZhbHVlU2NhbGU1MC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICAgIHRoaXMudmFsdWVTY2FsZTcwLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlODUuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlMTUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlMzAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlNTAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlNzAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlODUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmVwb3NpdGlvbnNBZnRlckNoYW5nZVBsYW5lKHBsYW5lVG9nZ2xlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZihwbGFuZVRvZ2dsZSA9PT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLnZhbHVlU2NhbGUxNS5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJfX3ZhbHVlU2NhbGVsYWJlbF8xNVZlcnRpY2FsJyk7XHJcbiAgICAgIHRoaXMudmFsdWVTY2FsZTMwLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsXzMwVmVydGljYWwnKTtcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlNTAuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyX192YWx1ZVNjYWxlbGFiZWxfNTBWZXJ0aWNhbCcpO1xyXG4gICAgICB0aGlzLnZhbHVlU2NhbGU3MC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJfX3ZhbHVlU2NhbGVsYWJlbF83MFZlcnRpY2FsJyk7XHJcbiAgICAgIHRoaXMudmFsdWVTY2FsZTg1LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsXzg1VmVydGljYWwnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsdWVTY2FsZTE1LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsXzE1VmVydGljYWwnKTtcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlMzAuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tU2xpZGVyX192YWx1ZVNjYWxlbGFiZWxfMzBWZXJ0aWNhbCcpO1xyXG4gICAgICB0aGlzLnZhbHVlU2NhbGU1MC5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b21TbGlkZXJfX3ZhbHVlU2NhbGVsYWJlbF81MFZlcnRpY2FsJyk7XHJcbiAgICAgIHRoaXMudmFsdWVTY2FsZTcwLmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsXzcwVmVydGljYWwnKTtcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlODUuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tU2xpZGVyX192YWx1ZVNjYWxlbGFiZWxfODVWZXJ0aWNhbCcpO1xyXG4gICAgfTtcclxuICB9O1xyXG59OyIsImV4cG9ydCBjbGFzcyBWYWx1ZVJhbmdlIHtcclxuICBtaW5WYWx1ZTogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgbWF4VmFsdWU6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvciAodmFsdWVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSkge1xyXG4gICAgbGV0IG1pbjpIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBtYXg6SFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBtaW4uaW5uZXJUZXh0ID0gdmFsdWVzLm1pbjtcclxuICAgIG1heC5pbm5lclRleHQgPSB2YWx1ZXMubWF4O1xyXG4gICAgbWluLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlclBvaW50Jyk7XHJcbiAgICBtYXguY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVyUG9pbnQnKTtcclxuICAgIHRoaXMubWluVmFsdWUgPSBtaW47XHJcbiAgICB0aGlzLm1heFZhbHVlID0gbWF4O1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudHMoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7bWluOiB0aGlzLm1pblZhbHVlLCBtYXg6IHRoaXMubWF4VmFsdWV9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtTbGlkZXJSYW5nZX0gZnJvbSAnLi9jb21wb25lbnRzL3NsaWRlci1yYW5nZSc7XHJcbmltcG9ydCB7SGFuZGVsc30gZnJvbSAnLi9jb21wb25lbnRzL2hhbmRlbHMnO1xyXG5pbXBvcnQge1NsaWRlck1vdmVtZW50fSBmcm9tICcuL2NvbXBvbmVudHMvc2xpZGVyLW1vdmVtZW50JztcclxuaW1wb3J0IHtTaWRlTWVudX0gZnJvbSAnLi9jb21wb25lbnRzL3NpZGUtbWVudSc7XHJcbmltcG9ydCB7VmFsdWVSYW5nZX0gZnJvbSAnLi9jb21wb25lbnRzL3ZhbHVlUmFuZ2UnO1xyXG5pbXBvcnQge0hhbmRlbHNMYWJlbHN9IGZyb20gJy4vY29tcG9uZW50cy9oYW5kZWxzLWxhYmVscyc7XHJcbmltcG9ydCB7U2VsZWN0ZWRSYW5nZX0gZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdGVkLXJhbmdlJztcclxuaW1wb3J0IHtTZXR0aW5nc30gZnJvbSAnLi4vLi4vanF1ZXJ5LnVpLmN1c3RvbVNsaWRlcic7XHJcbmltcG9ydCB7VmFsdWVTY2FsZX0gZnJvbSAnLi9jb21wb25lbnRzL3ZhbHVlLXNjYWxlJztcclxuXHJcbmludGVyZmFjZSBQb3NzaWJsZVJhbmdlIHtcclxuICBtaW46IHN0cmluZztcclxuICBtYXg6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YU9mVmFsdWVSZWZyZXNoIHtcclxuICAnbWluJz86IHN0cmluZztcclxuICAnbWF4Jz86IHN0cmluZztcclxufTtcclxuXHJcbmludGVyZmFjZSBEYXRhUmVxdWVzdFN0YXR1cyB7XHJcbiAgXCJzdGFydEhhbmRlbHNQb3NpdGlvblwiOiBib29sZWFuO1xyXG4gIFwiZ2V0TWF4RGF0YVwiOiBib29sZWFuO1xyXG4gIFwiZ2V0TWluUG9zaXRpb25zQW1vdW50XCI6IGJvb2xlYW47XHJcbiAgXCJnZXRNYXhQb3NpdGlvbnNBbW91bnRcIjogYm9vbGVhbjtcclxuICBcImdldFBvc3NpYmxlUmFuZ2VcIjogYm9vbGVhbjtcclxuICBcImdldFN0ZXBQb3NpdGlvbnNBbW91bnRcIjogYm9vbGVhbjtcclxuICBcImdldFZhbHVlc0ZvclZhbHVlU2NhbGVcIjogYm9vbGVhbjtcclxuICBcInNlbGVjdEhhbmRsZUZvclZhbHVlU2NhbGVcIjogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXcge1xyXG4gIHByaXZhdGUgdGhhdDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3M7XHJcbiAgcmVhZG9ubHkgc2xpZGVyUmFuZ2U6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHByaXZhdGUgc2xpZGVyQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICByZWFkb25seSBtaW5IYW5kZWw6IEhUTUxTcGFuRWxlbWVudDtcclxuICByZWFkb25seSBtYXhIYW5kZWw6IEhUTUxTcGFuRWxlbWVudDtcclxuICByZWFkb25seSBzbGlkZXJNb3ZlbWVudDogU2xpZGVyTW92ZW1lbnQ7XHJcbiAgcHJpdmF0ZSBzaWRlTWVudUNvbnRhaW5lcjogU3RyaW5nIHwgQm9vbGVhbjtcclxuICBwcml2YXRlIG1pblZhbHVlOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICBwcml2YXRlIG1heFZhbHVlOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICByZWFkb25seSBtaW5MYWJlbDogSFRNTExhYmVsRWxlbWVudDtcclxuICByZWFkb25seSBtYXhMYWJlbDogSFRNTExhYmVsRWxlbWVudDtcclxuICByZWFkb25seSBpbnRlcnZhbDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcmVhZG9ubHkgdmFsdWVTY2FsZTogVmFsdWVTY2FsZTtcclxuICByZWFkb25seSBzaWRlTWVudTogSFRNTERpdkVsZW1lbnQgfCB1bmRlZmluZWQ7XHJcbiAgcmVhZG9ubHkgaGFuZGVsVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgaGFuZGVsTGFiZWxUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnR8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIHBsYW5lVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50fCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSB2YWx1ZVNjYWxlVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG4gIHJlYWRvbmx5IG1pbklucHV0OiBIVE1MSW5wdXRFbGVtZW50fCB1bmRlZmluZWQ7XHJcbiAgcmVhZG9ubHkgbWF4SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnR8IHVuZGVmaW5lZDtcclxuICByZWFkb25seSBtaW5TbGlkZXJWYWx1ZU91dHB1dDogSFRNTE91dHB1dEVsZW1lbnQgfCB1bmRlZmluZWQ7XHJcbiAgcmVhZG9ubHkgbWF4U2xpZGVyVmFsdWVPdXRwdXQ6IEhUTUxPdXRwdXRFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKHRhcmdldDogSFRNTERpdkVsZW1lbnQsIHNldHRpbmdzOiBTZXR0aW5ncykge1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG4gICAgdGhpcy50aGF0ID0gdGFyZ2V0O1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZSA9IG5ldyBTbGlkZXJSYW5nZSgpLmdldEVsZW1lbnRzKCk7XHJcblxyXG4gICAgbGV0IGhhbmRlbHM6IEhhbmRlbHMgPSBuZXcgSGFuZGVscygpO1xyXG4gICAgdGhpcy5taW5IYW5kZWwgPSBoYW5kZWxzLm1pbkhhbmRlbDtcclxuICAgIHRoaXMubWF4SGFuZGVsID0gaGFuZGVscy5tYXhIYW5kZWw7XHJcblxyXG4gICAgbGV0IHZhbHVlUmFuZ2U6IFZhbHVlUmFuZ2UgPSBuZXcgVmFsdWVSYW5nZSh7J21pbic6IHRoaXMuc2V0dGluZ3NbJ21pbiddLCAnbWF4JzogdGhpcy5zZXR0aW5nc1snbWF4J119KTtcclxuICAgIHRoaXMubWluVmFsdWUgPSB2YWx1ZVJhbmdlLm1pblZhbHVlO1xyXG4gICAgdGhpcy5tYXhWYWx1ZSA9IHZhbHVlUmFuZ2UubWF4VmFsdWU7XHJcblxyXG4gICAgaWYgKHNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSkge1xyXG4gICAgICBsZXQgc2lkZU1lbnUgPSBuZXcgU2lkZU1lbnUoKTtcclxuICAgICAgdGhpcy5zaWRlTWVudSA9IHNpZGVNZW51LmN1c3RvbVNsaWRlck1lbnVDb250YWluZXI7XHJcbiAgICAgIHRoaXMuaGFuZGVsVG9nZ2xlID0gc2lkZU1lbnUuaGFuZGVsVG9nZ2xlO1xyXG4gICAgICB0aGlzLmhhbmRlbExhYmVsVG9nZ2xlID0gc2lkZU1lbnUuaGFuZGVsTGFiZWxUb2dnbGU7XHJcbiAgICAgIHRoaXMucGxhbmVUb2dnbGUgPSBzaWRlTWVudS5wbGFuZVRvZ2dsZTtcclxuICAgICAgdGhpcy5taW5JbnB1dCA9IHNpZGVNZW51Lm1pbklucHV0O1xyXG4gICAgICB0aGlzLm1heElucHV0ID0gc2lkZU1lbnUubWF4SW5wdXQ7XHJcbiAgICAgIHRoaXMubWluU2xpZGVyVmFsdWVPdXRwdXQgPSBzaWRlTWVudS5taW5TbGlkZXJWYWx1ZU91dHB1dDtcclxuICAgICAgdGhpcy5tYXhTbGlkZXJWYWx1ZU91dHB1dCA9IHNpZGVNZW51Lm1heFNsaWRlclZhbHVlT3V0cHV0O1xyXG4gICAgICB0aGlzLnZhbHVlU2NhbGVUb2dnbGUgPSBzaWRlTWVudS52YWx1ZVNjYWxlVG9nZ2xlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuc2lkZU1lbnVDb250YWluZXIgPSBzZXR0aW5ncy5zaWRlTWVudUNvbnRhaW5lcjtcclxuXHJcbiAgICBsZXQgaGFuZGVsc0xhYmVsczogSGFuZGVsc0xhYmVscyA9IG5ldyBIYW5kZWxzTGFiZWxzKCk7XHJcbiAgICB0aGlzLm1pbkxhYmVsID0gaGFuZGVsc0xhYmVscy5taW5MYWJlbDtcclxuICAgIHRoaXMubWF4TGFiZWwgPSBoYW5kZWxzTGFiZWxzLm1heExhYmVsO1xyXG5cclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBuZXcgU2VsZWN0ZWRSYW5nZSgpLmdldEVsZW1lbnRzKCk7XHJcbiAgICBcclxuICAgIGlmKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMuc2xpZGVyTW92ZW1lbnQgPSBuZXcgU2xpZGVyTW92ZW1lbnQoeydtaW4nOiB0aGlzLm1pbkhhbmRlbCwgJ21heCc6IHRoaXMubWF4SGFuZGVsLCdtaW5MYWJlbCc6IHRoaXMubWluTGFiZWwsICdtYXhMYWJlbCc6IHRoaXMubWF4TGFiZWwgLCdzbGlkZXJSYW5nZSc6IHRoaXMuc2xpZGVyUmFuZ2UsICdwbGFuZVRvZ2dsZSc6IHRoaXMucGxhbmVUb2dnbGUgPyB0aGlzLnBsYW5lVG9nZ2xlIDogdGhpcy5zZXR0aW5ncy52ZXJ0aWNhbCwgJ2hhbmRlbHNUb2dnbGUnOiB0aGlzLmhhbmRlbFRvZ2dsZSA/IHRoaXMuaGFuZGVsVG9nZ2xlIDogdGhpcy5zZXR0aW5ncy5yYW5nZSwgJ2ludGVydmFsJzogdGhpcy5pbnRlcnZhbCwgJ3N0ZXAnOiB0aGlzLnNldHRpbmdzLnN0ZXB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2xpZGVyTW92ZW1lbnQgPSBuZXcgU2xpZGVyTW92ZW1lbnQoeydtaW4nOiB0aGlzLm1pbkhhbmRlbCwgJ21heCc6IHRoaXMubWF4SGFuZGVsLCdtaW5MYWJlbCc6IHRoaXMubWluTGFiZWwsICdtYXhMYWJlbCc6IHRoaXMubWF4TGFiZWwgLCdzbGlkZXJSYW5nZSc6IHRoaXMuc2xpZGVyUmFuZ2UsICdwbGFuZVRvZ2dsZSc6IHRoaXMuc2V0dGluZ3MudmVydGljYWwsICdoYW5kZWxzVG9nZ2xlJzogdGhpcy5zZXR0aW5ncy5yYW5nZSwgJ2ludGVydmFsJzogdGhpcy5pbnRlcnZhbCwgJ3N0ZXAnOiB0aGlzLnNldHRpbmdzLnN0ZXB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy52YWx1ZVNjYWxlID0gbmV3IFZhbHVlU2NhbGUoKTtcclxuICAgIHRoaXMuc2xpZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgfTtcclxuXHJcbiAgZGF0YVJlcXVlc3RTdGF0dXM6IERhdGFSZXF1ZXN0U3RhdHVzID0ge1xyXG4gICAgXCJzdGFydEhhbmRlbHNQb3NpdGlvblwiOiBmYWxzZSxcclxuICAgIFwiZ2V0TWF4RGF0YVwiOiBmYWxzZSxcclxuICAgIFwiZ2V0TWluUG9zaXRpb25zQW1vdW50XCI6IGZhbHNlLFxyXG4gICAgXCJnZXRNYXhQb3NpdGlvbnNBbW91bnRcIjogZmFsc2UsXHJcbiAgICBcImdldFBvc3NpYmxlUmFuZ2VcIjogZmFsc2UsXHJcbiAgICBcImdldFN0ZXBQb3NpdGlvbnNBbW91bnRcIjogZmFsc2UsXHJcbiAgICBcImdldFZhbHVlc0ZvclZhbHVlU2NhbGVcIjogZmFsc2UsXHJcbiAgICBcInNlbGVjdEhhbmRsZUZvclZhbHVlU2NhbGVcIjogJydcclxuICB9O1xyXG5cclxuICBkaXNwbGF5RWxlbWVudHMoKTogdm9pZCB7XHJcbiAgICBcclxuICAgIHRoaXMuc2xpZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlckJvZHknKTtcclxuICAgIHRoaXMuc2xpZGVyQ29udGFpbmVyLmFwcGVuZCh0aGlzLnNsaWRlclJhbmdlKTtcclxuICAgIHRoaXMudGhhdC5hcHBlbmQodGhpcy5zbGlkZXJDb250YWluZXIpO1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZS5hcHBlbmQodGhpcy5taW5IYW5kZWwpO1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZS5hcHBlbmQodGhpcy5tYXhIYW5kZWwpO1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZS5hcHBlbmQodGhpcy5taW5WYWx1ZSk7XHJcbiAgICB0aGlzLnNsaWRlclJhbmdlLmFwcGVuZCh0aGlzLm1heFZhbHVlKTtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMudmFsdWVTY2FsZS52YWx1ZVNjYWxlMTUsIHRoaXMudmFsdWVTY2FsZS52YWx1ZVNjYWxlMzAsIHRoaXMudmFsdWVTY2FsZS52YWx1ZVNjYWxlNTAsIHRoaXMudmFsdWVTY2FsZS52YWx1ZVNjYWxlNzAsIHRoaXMudmFsdWVTY2FsZS52YWx1ZVNjYWxlODUpO1xyXG4gICAgdGhpcy5kYXRhUmVxdWVzdFN0YXR1c1tcImdldFZhbHVlc0ZvclZhbHVlU2NhbGVcIl0gPSB0cnVlO1xyXG4gICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5oZWlnaHQgPSB0aGlzLnNsaWRlclJhbmdlLm9mZnNldEhlaWdodCArICdweCc7XHJcbiAgICB0aGlzLnNsaWRlclJhbmdlLmFwcGVuZCh0aGlzLmludGVydmFsKTtcclxuICAgIHRoaXMubWluSGFuZGVsLmFwcGVuZCh0aGlzLm1pbkxhYmVsKTtcclxuICAgIHRoaXMubWF4SGFuZGVsLmFwcGVuZCh0aGlzLm1heExhYmVsKTtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3NbJ2hhbmRlbHNMYWJlbCddID09PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLm1pbkxhYmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIHRoaXMubWF4TGFiZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlICYmIHRoaXMuaGFuZGVsTGFiZWxUb2dnbGUpIHtcclxuICAgICAgICB0aGlzLmhhbmRlbExhYmVsVG9nZ2xlLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBpZih0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSAmJiB0aGlzLnNpZGVNZW51KSB7XHJcbiAgICAgIHRoaXMuZGF0YVJlcXVlc3RTdGF0dXNbXCJnZXRQb3NzaWJsZVJhbmdlXCJdID0gdHJ1ZTtcclxuICAgICAgaWYgKHRoaXMuc2lkZU1lbnVDb250YWluZXIgIT09ICdmYWxzZScgJiYgdHlwZW9mIHRoaXMuc2lkZU1lbnVDb250YWluZXIgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCh0aGlzLnNpZGVNZW51Q29udGFpbmVyKVswXS5hcHBlbmQodGhpcy5zaWRlTWVudSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50aGF0LmFwcGVuZCh0aGlzLnNpZGVNZW51KVxyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3NbXCJyYW5nZVwiXSA9PT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLm1heEhhbmRlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgaWYodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUpIHtcclxuICAgICAgICB0aGlzLmhhbmRlbFRvZ2dsZSA/IHRoaXMuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPSB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tYXhJbnB1dCA/IHRoaXMubWF4SW5wdXQuc3R5bGUub3BhY2l0eSA9ICcxJyA6IGZhbHNlO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICAgIFxyXG5cclxuICAgIGlmICh0aGlzLnNldHRpbmdzWyd2ZXJ0aWNhbCddID09PSB0cnVlKSB7XHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlICYmIHRoaXMucGxhbmVUb2dnbGUpIHtcclxuICAgICAgICB0aGlzLnBsYW5lVG9nZ2xlID8gdGhpcy5wbGFuZVRvZ2dsZS5jaGVja2VkID0gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuc2xpZGVyTW92ZW1lbnQuY2hhbmdlUGxhbmUodGhpcy5wbGFuZVRvZ2dsZSwgdGhpcy5zbGlkZXJDb250YWluZXIsIHRoaXMubWluVmFsdWUsIHRoaXMubWF4VmFsdWUpO1xyXG4gICAgICAgIHRoaXMudmFsdWVTY2FsZS5yZXBvc2l0aW9uc0FmdGVyQ2hhbmdlUGxhbmUodGhpcy5wbGFuZVRvZ2dsZS5jaGVja2VkKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnNsaWRlck1vdmVtZW50LmNoYW5nZVBsYW5lKHRydWUsIHRoaXMuc2xpZGVyQ29udGFpbmVyLCB0aGlzLm1pblZhbHVlLCB0aGlzLm1heFZhbHVlKTtcclxuICAgICAgICB0aGlzLnZhbHVlU2NhbGUucmVwb3NpdGlvbnNBZnRlckNoYW5nZVBsYW5lKHRydWUpO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3Muc3RlcCA9PT0gdHJ1ZSAmJiB0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLm1heElucHV0ID8gdGhpcy5tYXhJbnB1dC5zZXRBdHRyaWJ1dGUoJ3N0ZXAnLCB0aGlzLnNldHRpbmdzLnN0ZXAgKyBcIlwiKSA6IGZhbHNlO1xyXG4gICAgICB0aGlzLm1pbklucHV0ID8gdGhpcy5taW5JbnB1dC5zZXRBdHRyaWJ1dGUoJ3N0ZXAnLCB0aGlzLnNldHRpbmdzLnN0ZXAgKyBcIlwiKSA6IGZhbHNlO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3Muc3RlcCkge1xyXG4gICAgICB0aGlzLmRhdGFSZXF1ZXN0U3RhdHVzW1wiZ2V0U3RlcFBvc2l0aW9uc0Ftb3VudFwiXSA9IHRydWU7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGlmICh0aGlzLnNldHRpbmdzLnZhbHVlU2NhbGUgPT09IHRydWUgJiYgdGhpcy52YWx1ZVNjYWxlVG9nZ2xlKSB7XHJcbiAgICAgIHRoaXMudmFsdWVTY2FsZVRvZ2dsZS5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsdWVTY2FsZVRvZ2dsZSA/IHRoaXMudmFsdWVTY2FsZS5kaXNwbGF5Q29udHJvbGxlcih0aGlzLnZhbHVlU2NhbGVUb2dnbGUpIDogZmFsc2U7XHJcbiAgICB9O1xyXG5cclxuICAgIFxyXG4gICAgdGhpcy5kYXRhUmVxdWVzdFN0YXR1c1tcInN0YXJ0SGFuZGVsc1Bvc2l0aW9uXCJdID0gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBiaW5kRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUgJiYgdGhpcy5oYW5kZWxMYWJlbFRvZ2dsZSkge1xyXG4gICAgICB0aGlzLmhhbmRlbExhYmVsVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMubWFrZUJpbmRMYWJlbFRvZ2dsZS5iaW5kKHRoaXMpKTtcclxuICAgIH07XHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUgJiYgdGhpcy5oYW5kZWxUb2dnbGUpIHtcclxuICAgICAgdGhpcy5oYW5kZWxUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5tYWtlQmluZEhhbmRlbFRvZ2dsZS5iaW5kKHRoaXMpKTtcclxuICAgIH07XHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUgJiYgdGhpcy5wbGFuZVRvZ2dsZSkge1xyXG4gICAgICB0aGlzLnBsYW5lVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMubWFrZUJpbmRGb3JQbGFuZVRvZ2dsZS5iaW5kKHRoaXMpKTtcclxuICAgIH07XHJcbiAgICB0aGlzLm1pblZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tYWtlQmluZEZvclNlbGVjdGlvbk1pblZhbHVlLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5tYXhWYWx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFrZUJpbmRGb3JTZWxlY3Rpb25NYXhWYWx1ZS5iaW5kKHRoaXMpKTtcclxuICAgIGlmICh0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSAmJiB0aGlzLm1pbklucHV0KSB7XHJcbiAgICAgIHRoaXMubWluSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5tYWtlQmluZEZvck1pbklucHV0LmJpbmQodGhpcykpO1xyXG4gICAgfTtcclxuICAgIGlmICh0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSAmJiB0aGlzLm1heElucHV0KSB7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5tYWtlQmluZEZvck1heElucHV0LmJpbmQodGhpcykpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUgJiYgdGhpcy52YWx1ZVNjYWxlVG9nZ2xlKSB7XHJcbiAgICAgIHRoaXMudmFsdWVTY2FsZVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm1ha2VCaW5kRm9yVmFsdWVTY2FsZVRvZ2dsZS5iaW5kKHRoaXMpKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGUxNS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFrZUJpbmRGb3JWYWx1ZVNjYWxlLmJpbmQodGhpcywgdGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGUxNSkpO1xyXG4gICAgdGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGUzMC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFrZUJpbmRGb3JWYWx1ZVNjYWxlLmJpbmQodGhpcywgdGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGUzMCkpO1xyXG4gICAgdGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGU1MC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFrZUJpbmRGb3JWYWx1ZVNjYWxlLmJpbmQodGhpcywgdGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGU1MCkpO1xyXG4gICAgdGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGU3MC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFrZUJpbmRGb3JWYWx1ZVNjYWxlLmJpbmQodGhpcywgdGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGU3MCkpO1xyXG4gICAgdGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGU4NS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFrZUJpbmRGb3JWYWx1ZVNjYWxlLmJpbmQodGhpcywgdGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGU4NSkpO1xyXG4gICAgXHJcbiAgfTtcclxuICBcclxuICBiaW5kRXZlbnRIYW5kZWxzTW92ZW1lbnQoKTp2b2lkIHtcclxuICAgIHRoaXMuYmluZEZvck1pbigpO1xyXG4gICAgdGhpcy5iaW5kRm9yTWF4KCk7XHJcbiAgfTtcclxuXHJcbiAgcmVmcmVzaEN1cnJlbnRWYWx1ZXMobmV3RGF0YTogRGF0YU9mVmFsdWVSZWZyZXNoKTogdm9pZCB7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tVbmRlZmluZWRTdHJpbmdzKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBudWxsIHwgc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBudWxsIDogdmFsdWU7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICgnbWluJyBpbiBuZXdEYXRhICYmICdtYXgnIGluIG5ld0RhdGEpIHtcclxuICAgICAgaWYodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUgJiYgdGhpcy5zaWRlTWVudSkge1xyXG4gICAgICAgIHRoaXMubWluU2xpZGVyVmFsdWVPdXRwdXQgPyB0aGlzLm1pblNsaWRlclZhbHVlT3V0cHV0LnRleHRDb250ZW50ID0gY2hlY2tVbmRlZmluZWRTdHJpbmdzKG5ld0RhdGEubWluKSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWluSW5wdXQgPyB0aGlzLm1pbklucHV0LnZhbHVlID0gYCR7bmV3RGF0YS5taW59YCA6IGZhbHNlO1xyXG4gICAgICAgIGlmKHRoaXMuaGFuZGVsVG9nZ2xlICYmIHRoaXMuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPT09IHRydWUgKSB7XHJcbiAgICAgICAgICB0aGlzLm1heFNsaWRlclZhbHVlT3V0cHV0ID8gdGhpcy5tYXhTbGlkZXJWYWx1ZU91dHB1dC50ZXh0Q29udGVudCA9IGAgLSAke2NoZWNrVW5kZWZpbmVkU3RyaW5ncyhuZXdEYXRhLm1heCl9YCA6IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5tYXhJbnB1dCA/IHRoaXMubWF4SW5wdXQudmFsdWUgPSBgJHtuZXdEYXRhLm1heH1gIDogZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMubWluTGFiZWwudGV4dENvbnRlbnQgPSBjaGVja1VuZGVmaW5lZFN0cmluZ3MobmV3RGF0YS5taW4pO1xyXG4gICAgICB0aGlzLm1heExhYmVsLnRleHRDb250ZW50ID0gY2hlY2tVbmRlZmluZWRTdHJpbmdzKG5ld0RhdGEubWF4KTtcclxuICAgICAgXHJcbiAgICB9IGVsc2UgaWYgKCdtaW4nIGluIG5ld0RhdGEpIHtcclxuICAgICAgdGhpcy5taW5MYWJlbC50ZXh0Q29udGVudCA9IGNoZWNrVW5kZWZpbmVkU3RyaW5ncyhuZXdEYXRhLm1pbik7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMubWluU2xpZGVyVmFsdWVPdXRwdXQgPyB0aGlzLm1pblNsaWRlclZhbHVlT3V0cHV0LnRleHRDb250ZW50ID0gY2hlY2tVbmRlZmluZWRTdHJpbmdzKG5ld0RhdGEubWluKSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWluSW5wdXQgPyB0aGlzLm1pbklucHV0LnZhbHVlID0gYCR7bmV3RGF0YS5taW59YCA6IGZhbHNlO1xyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tYXhMYWJlbC50ZXh0Q29udGVudCA9IGNoZWNrVW5kZWZpbmVkU3RyaW5ncyhuZXdEYXRhLm1heCk7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMubWF4U2xpZGVyVmFsdWVPdXRwdXQgPyB0aGlzLm1heFNsaWRlclZhbHVlT3V0cHV0LnRleHRDb250ZW50ID0gYCAtICR7Y2hlY2tVbmRlZmluZWRTdHJpbmdzKG5ld0RhdGEubWF4KX1gIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tYXhJbnB1dCA/IHRoaXMubWF4SW5wdXQudmFsdWUgPSBgJHtuZXdEYXRhLm1heH1gIDogZmFsc2U7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgbmV3IEhhbmRlbHNMYWJlbHMoKS5jZW50ZXJpbmdSZWxhdGl2ZVRvSGFuZGxlcyh0aGlzLm1pbkhhbmRlbC5vZmZzZXRXaWR0aCwgdGhpcy5tYXhIYW5kZWwub2Zmc2V0V2lkdGgsIHRoaXMubWluTGFiZWwub2Zmc2V0V2lkdGgsIHRoaXMubWF4TGFiZWwub2Zmc2V0V2lkdGgsIHRoaXMubWluTGFiZWwsIHRoaXMubWF4TGFiZWwpO1xyXG4gIH07XHJcblxyXG4gIGNhbGxIYW5kZWxMYWJlbFRvZ2dsZUNoYW5nZXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhbmRlbExhYmVsVG9nZ2xlID8gbmV3IEhhbmRlbHNMYWJlbHMoKS5kaXNwbGF5Q29udHJvbGxlcih0aGlzLmhhbmRlbExhYmVsVG9nZ2xlLCB0aGlzLm1pbkxhYmVsLCB0aGlzLm1heExhYmVsKSA6IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuaGFuZGVsTGFiZWxUb2dnbGUgJiYgdGhpcy5oYW5kZWxMYWJlbFRvZ2dsZS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgIG5ldyBIYW5kZWxzTGFiZWxzKCkuY2VudGVyaW5nUmVsYXRpdmVUb0hhbmRsZXModGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGgsIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRoLCB0aGlzLm1pbkxhYmVsLm9mZnNldFdpZHRoLCB0aGlzLm1heExhYmVsLm9mZnNldFdpZHRoLCB0aGlzLm1pbkxhYmVsLCB0aGlzLm1heExhYmVsKVxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjYWxsTWF4SGFuZGVsVG9nZ2xlQ2hhbmdlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmhhbmRlbFRvZ2dsZSAmJiB0aGlzLmhhbmRlbFRvZ2dsZS5jaGVja2VkID09PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLnNsaWRlck1vdmVtZW50LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtYXgnXSA9IHsnbWF4JzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRofWAsICdzbGlkZXJXaWR0aCc6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbkhhbmRlbC5vZmZzZXRXaWR0aH1gfVxyXG4gICAgICB0aGlzLm1heEhhbmRlbC5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRofXB4YDtcclxuICAgICAgdGhpcy5tYXhTbGlkZXJWYWx1ZU91dHB1dCA/IHRoaXMubWF4U2xpZGVyVmFsdWVPdXRwdXQudGV4dENvbnRlbnQgPSAnJyA6IGZhbHNlO1xyXG4gICAgICB0aGlzLm1heElucHV0ID8gdGhpcy5tYXhJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpIDogZmFsc2U7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQgPyB0aGlzLm1heElucHV0LnZhbHVlID0gJycgOiBmYWxzZTtcclxuICAgICAgdGhpcy5tYXhJbnB1dCA/IHRoaXMubWF4SW5wdXQuc3R5bGUub3BhY2l0eSA9ICcwLjMnIDogZmFsc2U7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5oYW5kZWxUb2dnbGUgPyBuZXcgSGFuZGVscygpLmRpc3BsYXlDb250cm9sbGVyKHRoaXMuaGFuZGVsVG9nZ2xlLCB0aGlzLm1heEhhbmRlbCkgOiBmYWxzZSA7XHJcblxyXG4gICAgaWYgKHRoaXMuaGFuZGVsVG9nZ2xlICYmIHRoaXMuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5kYXRhUmVxdWVzdFN0YXR1c1tcImdldE1heERhdGFcIl0gPSB0cnVlO1xyXG4gICAgICB0aGlzLm1heElucHV0ID8gdGhpcy5tYXhJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5JykgOiBmYWxzZTtcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5yaWdodCA9IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSAodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRoIC8gMiApICsgJ3B4JztcclxuICAgICAgaWYgKCt0aGlzLnNsaWRlck1vdmVtZW50LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pblsnbWluJ10gPj0gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRoIC0gdGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICB0aGlzLnNsaWRlck1vdmVtZW50LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtaW4nXSA9IHsnbWluJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRoIC0gdGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGh9YCwgJ3NsaWRlcldpZHRoJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRofWB9XHJcbiAgICAgICAgdGhpcy5taW5IYW5kZWwuc3R5bGUubGVmdCA9IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1heEhhbmRlbC5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRofXB4YDtcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmVmcmVzaE1heFNpZGVNZW51RGF0YShkYXRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMubWF4U2xpZGVyVmFsdWVPdXRwdXQgPyB0aGlzLm1heFNsaWRlclZhbHVlT3V0cHV0LnRleHRDb250ZW50ID0gYCAtICR7ZGF0YX1gIDogZmFsc2U7XHJcbiAgICBpZiAodGhpcy5tYXhJbnB1dCkge1xyXG4gICAgICB0aGlzLm1heElucHV0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQudmFsdWUgPSBgJHtkYXRhfWA7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGlucHV0c1Bvc3NpYmxlUmFuZ2UoIGRhdGE6IFBvc3NpYmxlUmFuZ2UsIG1pbjogSFRNTElucHV0RWxlbWVudCwgbWF4OiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XHJcbiAgICBtaW4uc2V0QXR0cmlidXRlKCdtYXgnLCBkYXRhLm1heCk7XHJcbiAgICBtaW4uc2V0QXR0cmlidXRlKCdtaW4nLCBkYXRhLm1pbik7XHJcbiAgICBtYXguc2V0QXR0cmlidXRlKCdtYXgnLCBkYXRhLm1heCk7XHJcbiAgfTtcclxuXHJcbiAgYmluZEZvck1pbigpOiB2b2lkIHtcclxuICAgIGxldCB0aGF0ID0gdGhpczsgXHJcbiAgICB0aGF0Lm1pbkhhbmRlbC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKCBldmVudCApOiB2b2lkIHtcclxuICAgICAgdGhhdC5zbGlkZXJNb3ZlbWVudC5taW5IYW5kZWxMaXN0ZW5lciggZXZlbnQsIHVuZGVmaW5lZCk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGJpbmRGb3JNYXgoKTogdm9pZCB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7IFxyXG4gICAgdGhhdC5tYXhIYW5kZWwub25tb3VzZWRvd24gPSBmdW5jdGlvbihldmVudCk6IHZvaWQge1xyXG4gICAgICB0aGF0LnNsaWRlck1vdmVtZW50Lm1heEhhbmRlbExpc3RlbmVyKCBldmVudCwgdW5kZWZpbmVkKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgbWFrZUJpbmRMYWJlbFRvZ2dsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FsbEhhbmRlbExhYmVsVG9nZ2xlQ2hhbmdlcigpO1xyXG4gIH07XHJcblxyXG4gIG1ha2VCaW5kSGFuZGVsVG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jYWxsTWF4SGFuZGVsVG9nZ2xlQ2hhbmdlcigpO1xyXG4gIH07XHJcbiAgXHJcbiAgbWFrZUJpbmRGb3JWYWx1ZVNjYWxlVG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZVNjYWxlVG9nZ2xlID8gdGhpcy52YWx1ZVNjYWxlLmRpc3BsYXlDb250cm9sbGVyKHRoaXMudmFsdWVTY2FsZVRvZ2dsZSkgOiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBtYWtlQmluZEZvclBsYW5lVG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5wbGFuZVRvZ2dsZSA/IHRoaXMuc2xpZGVyTW92ZW1lbnQuY2hhbmdlUGxhbmUodGhpcy5wbGFuZVRvZ2dsZSwgdGhpcy5zbGlkZXJDb250YWluZXIsIHRoaXMubWluVmFsdWUsIHRoaXMubWF4VmFsdWUpIDogZmFsc2U7XHJcbiAgICB0aGlzLnBsYW5lVG9nZ2xlID8gdGhpcy52YWx1ZVNjYWxlLnJlcG9zaXRpb25zQWZ0ZXJDaGFuZ2VQbGFuZSh0aGlzLnBsYW5lVG9nZ2xlLmNoZWNrZWQpIDogZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgbWFrZUJpbmRGb3JTZWxlY3Rpb25NaW5WYWx1ZSAoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNsaWRlck1vdmVtZW50LnNlbGVjdGlvbk9mUHJlcGFyZWRWYWx1ZSgnbWluJyk7XHJcbiAgfTtcclxuXHJcbiAgbWFrZUJpbmRGb3JWYWx1ZVNjYWxlKGVsZW1lbnQ6IEhUTUxMYWJlbEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmIChlbGVtZW50LnRleHRDb250ZW50KSB7XHJcbiAgICAgIGxldCB2YWw6IHN0cmluZyA9IGVsZW1lbnQudGV4dENvbnRlbnQ7XHJcbiAgICAgIHRoaXMuZGF0YVJlcXVlc3RTdGF0dXNbJ3NlbGVjdEhhbmRsZUZvclZhbHVlU2NhbGUnXSA9IHZhbDtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgbWFrZUJpbmRGb3JTZWxlY3Rpb25NYXhWYWx1ZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2xpZGVyTW92ZW1lbnQuc2VsZWN0aW9uT2ZQcmVwYXJlZFZhbHVlKCdtYXgnKTtcclxuICB9O1xyXG5cclxuICBtYWtlQmluZEZvck1pbklucHV0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRhUmVxdWVzdFN0YXR1c1tcImdldE1pblBvc2l0aW9uc0Ftb3VudFwiXSA9IHRydWU7XHJcbiAgfTtcclxuXHJcbiAgbWFrZUJpbmRGb3JNYXhJbnB1dCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0YVJlcXVlc3RTdGF0dXNbXCJnZXRNYXhQb3NpdGlvbnNBbW91bnRcIl0gPSB0cnVlO1xyXG4gIH07XHJcbn07XHJcbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tICcuL2NvbXBvbmVudHMvdmlldy92aWV3JztcclxuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kZWwvbW9kZWwnO1xyXG5pbXBvcnQgeyBGYWNhZGUgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kZWwvZmFjYWRlJztcclxuaW1wb3J0IHsgUHJlc2VudGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL3ByZXNlbnRlci9wcmVzZW50ZXInO1xyXG5cclxuZGVjbGFyZSBnbG9iYWwge1xyXG4gIGludGVyZmFjZSBKUXVlcnkge1xyXG4gICAgdGVzdFNsaWRlciggb3B0aW9uczogU2xpZGVyT3B0aW9ucyk6dm9pZDtcclxuICB9XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgU2xpZGVyT3B0aW9ucyB7XHJcbiAgW2tleTogc3RyaW5nXTogYm9vbGVhbiB8IHN0cmluZ1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZXR0aW5ncyB7XHJcbiAgJ21pbic6IHN0cmluZztcclxuICAnbWF4Jzogc3RyaW5nO1xyXG4gICdyYW5nZSc6IGJvb2xlYW47XHJcbiAgJ3NpZGUtbWVudSc6IGJvb2xlYW47XHJcbiAgJ2hhbmRlbHNMYWJlbCc6IGJvb2xlYW47XHJcbiAgJ3ZlcnRpY2FsJzogYm9vbGVhbjtcclxuICAnc3RlcCc6IGJvb2xlYW4gfCBzdHJpbmc7XHJcbiAgJ3NpZGVNZW51Q29udGFpbmVyJzogc3RyaW5nO1xyXG4gICd2YWx1ZVNjYWxlJzogYm9vbGVhbjtcclxuICAnY3VycmVudC1taW4nPzogc3RyaW5nO1xyXG4gICdjdXJyZW50LW1heCc/OiBzdHJpbmc7XHJcbn1cclxuXHJcbihmdW5jdGlvbiggJCApIHtcclxuICAkLmZuLnRlc3RTbGlkZXIgPSBmdW5jdGlvbiggb3B0aW9uczogU2xpZGVyT3B0aW9ucyApIHtcclxuXHJcbiAgICBsZXQgc2V0dGluZ3M6IFNldHRpbmdzID0gJC5leHRlbmQoIHtcclxuICAgICAgJ21pbic6ICcwJyxcclxuICAgICAgJ21heCc6ICcxMCcsXHJcbiAgICAgICdyYW5nZSc6IGZhbHNlLFxyXG4gICAgICAnc2lkZS1tZW51JzogZmFsc2UsXHJcbiAgICAgICdoYW5kZWxzTGFiZWwnOiBmYWxzZSxcclxuICAgICAgJ3ZlcnRpY2FsJzogZmFsc2UsXHJcbiAgICAgICdzdGVwJzogZmFsc2UsXHJcbiAgICAgICd2YWx1ZVNjYWxlJzogZmFsc2UsXHJcbiAgICAgICdzaWRlTWVudUNvbnRhaW5lcic6ICdmYWxzZSdcclxuICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgIGxldCB0aGF0OiBIVE1MRGl2RWxlbWVudCA9IHRoaXM7XHJcbiAgICBcclxuICAgIGxldCBtb2RlbDogTW9kZWw7XHJcbiAgICBpZiAoJ2N1cnJlbnQtbWluJyBpbiBzZXR0aW5ncyAmJiAnY3VycmVudC1tYXgnIGluIHNldHRpbmdzKSB7XHJcbiAgICAgIG1vZGVsID0gbmV3IE1vZGVsKHsnbWluJzogc2V0dGluZ3NbJ21pbiddLCBtYXg6IHNldHRpbmdzWydtYXgnXSwgJ2N1cnJlbnQtbWluJzogc2V0dGluZ3NbJ2N1cnJlbnQtbWluJ10gPyBzZXR0aW5nc1snY3VycmVudC1taW4nXSA6ICcnLCAnY3VycmVudC1tYXgnOiBzZXR0aW5nc1snY3VycmVudC1tYXgnXSA/IHNldHRpbmdzWydjdXJyZW50LW1heCddIDogJyd9KTtcclxuICAgIH0gZWxzZSBpZiAoJ2N1cnJlbnQtbWluJyBpbiBzZXR0aW5ncykge1xyXG4gICAgICBtb2RlbCA9IG5ldyBNb2RlbCh7J21pbic6IHNldHRpbmdzWydtaW4nXSwgbWF4OiBzZXR0aW5nc1snbWF4J10sICdjdXJyZW50LW1pbic6IHNldHRpbmdzWydjdXJyZW50LW1pbiddID8gc2V0dGluZ3NbJ2N1cnJlbnQtbWluJ10gOiAnJywgJ2N1cnJlbnQtbWF4Jzogc2V0dGluZ3NbJ21heCddfSk7XHJcbiAgICB9IGVsc2UgaWYgKCdjdXJyZW50LW1heCcgaW4gc2V0dGluZ3MpIHtcclxuICAgICAgbW9kZWwgPSBuZXcgTW9kZWwoeydtaW4nOiBzZXR0aW5nc1snbWluJ10sIG1heDogc2V0dGluZ3NbJ21heCddLCAnY3VycmVudC1taW4nOiBzZXR0aW5nc1snbWluJ10sICdjdXJyZW50LW1heCc6IHNldHRpbmdzWydjdXJyZW50LW1heCddID8gc2V0dGluZ3NbJ2N1cnJlbnQtbWF4J10gOiAnJ30pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbW9kZWwgPSBuZXcgTW9kZWwoeydtaW4nOiBzZXR0aW5nc1snbWluJ10sIG1heDogc2V0dGluZ3NbJ21heCddLCAnY3VycmVudC1taW4nOiBzZXR0aW5nc1snbWluJ10sICdjdXJyZW50LW1heCc6IHNldHRpbmdzWydtYXgnXX0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgdmlldzogVmlldyA9IG5ldyBWaWV3KHRoYXQsIHNldHRpbmdzKTtcclxuICAgIFxyXG4gICAgbGV0IGZhY2FkZTogRmFjYWRlID0gbmV3IEZhY2FkZShtb2RlbClcclxuICAgIFxyXG4gICAgbGV0IHByZXNlbnRlcjogUHJlc2VudGVyID0gbmV3IFByZXNlbnRlcih2aWV3LCBmYWNhZGUpO1xyXG5cclxuICAgIHByZXNlbnRlci5zdGFydFZpZXdNb25pdG9yaW5nKCk7XHJcbiAgICB2aWV3LmJpbmRFdmVudExpc3RlbmVycygpO1xyXG4gICAgdmlldy5kaXNwbGF5RWxlbWVudHMoKTtcclxuICAgIHZpZXcuYmluZEV2ZW50SGFuZGVsc01vdmVtZW50KCk7XHJcbiAgICBcclxuICB9O1xyXG59KShqUXVlcnkpOyJdLCJzb3VyY2VSb290IjoiIn0=