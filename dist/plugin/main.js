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

      if (doubleToggle) {
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
              var checkDoublehandels = function checkDoublehandels(_double) {
                var positions = facade.getPositionsAmount();
                var selectedHandel = facade.selectHandleForValueScale(val, _double);
                view.sliderMovement.centeredHandelByValueScale(selectedHandel['target'], selectedHandel['value'], positions['positions'], positions['minimum']);

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
              };

              ;

              if (typeof val === 'string' && view.handelToggle) {
                checkDoublehandels(view.handelToggle.checked);
              } else {
                checkDoublehandels(view.settings.range);
              }

              ;
            }

            ;

            if (prop === "getMinStep" && view.stepInput) {
              var _positions2 = facade.getPositionsAmount().positions;
              view.sliderMovement.checkValidityOfChangedStep('min', view.stepInput, _positions2);
            }

            ;

            if (prop === "checksNewStepForValidity" && typeof val === 'string') {
              var _positions3 = facade.getPositionsAmount().positions;
              view.stepInput ? view.sliderMovement.checkValidityOfChangedStep(val, view.stepInput, _positions3) : false;
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

  _defineProperty(this, "stepInput", void 0);

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
  this.stepInput = stepInput;
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
      console.log(target, value);

      if (target === 'min') {
        var min = String((this.sliderRange.offsetWidth - this.min.offsetWidth) / +positions * (+value - +minimum));

        if (+min < 0) {
          min = '0';
        } else if (+min > this.sliderRange.offsetWidth - this.min.offsetWidth) {
          min = String(this.sliderRange.offsetWidth - this.min.offsetWidth);
        }

        ;
        this.min.style.left = min + 'px';
        this.currentHandelsPositions['min'] = {
          'min': "".concat(min),
          'sliderWidth': "".concat(this.sliderRange.offsetWidth - this.min.offsetWidth)
        };
        this.interval.style.left = +min + this.min.offsetWidth / 2 + 'px';
      } else if (target === 'max') {
        var max = String((this.sliderRange.offsetWidth - this.max.offsetWidth) / +positions * (+value - +minimum));

        if (+max <= +this.currentHandelsPositions.min.min + this.min.offsetWidth) {
          max = String(+this.currentHandelsPositions.min.min + this.max.offsetWidth);
        } else if (+max > this.sliderRange.offsetWidth - this.min.offsetWidth) {
          max = String(this.sliderRange.offsetWidth - this.min.offsetWidth);
        }

        ;
        this.currentHandelsPositions['max'] = {
          'max': "".concat(max),
          'sliderWidth': "".concat(this.sliderRange.offsetWidth - this.max.offsetWidth)
        };
        this.max.style.left = max + 'px';
        this.interval.style.right = this.sliderRange.offsetWidth - +max - this.min.offsetWidth / 2 + 'px';
      }

      ;
    }
  }, {
    key: "checkValidityOfChangedStep",
    value: function checkValidityOfChangedStep(value, input, positions) {
      var pixelsPerUnit = this.sliderRange.offsetWidth / +positions;
      var minStep = Math.round(1 / pixelsPerUnit);

      if (minStep < 1) {
        minStep = 1;
      }

      ;
      input.setAttribute('min', String(minStep));
      input.setAttribute('max', String(+positions / 2));

      if (value === 'min') {
        input.value = String(minStep);
      } else {
        if (+value <= minStep) {
          input.value = String(minStep);
          this.step = false;
        } else if (+value > +positions / 2) {
          input.value = String(+positions / 2);
          this.step = String(+positions / 2);
        } else {
          input.value = value;
          this.step = value;
        }

        ;
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

    _defineProperty(this, "stepInput", void 0);

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
      "getMinStep": false,
      "checksNewStepForValidity": '',
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
      this.stepInput = sideMenu.stepInput;
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

      if (this.stepInput && typeof this.settings.step === 'string') {
        this.dataRequestStatus["checksNewStepForValidity"] = this.settings.step;
      } else if (this.settings.step === false) {
        this.dataRequestStatus["getMinStep"] = true;
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

      if (this.settings['side-menu'] === true && this.stepInput) {
        this.stepInput.addEventListener('change', this.makeBindStepInput.bind(this));
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
    key: "makeBindStepInput",
    value: function makeBindStepInput() {
      this.stepInput ? this.dataRequestStatus['checksNewStepForValidity'] = this.stepInput.value : false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwvZmFjYWRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGVsL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRlci9wcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL2hhbmRlbHMtbGFiZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9oYW5kZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9zZWxlY3RlZC1yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NvbXBvbmVudHMvc2lkZS1tZW51LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9zbGlkZXItbW92ZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL3NsaWRlci1yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NvbXBvbmVudHMvdmFsdWUtc2NhbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL3ZhbHVlUmFuZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy92aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9qcXVlcnkudWkuY3VzdG9tU2xpZGVyLnRzIl0sIm5hbWVzIjpbIkZhY2FkZSIsIm1vZGVsIiwiZ2V0Q3VycmVudERhdGEiLCJkYXRhIiwicHJvcCIsIlN0cmluZyIsIk1hdGgiLCJyb3VuZCIsIm1heCIsIm1pbiIsInZhbHVlIiwiZG91YmxlVG9nZ2xlIiwibWluRGlmZmVyZW5jZSIsIm1heERpZmZlcmVuY2UiLCJNb2RlbCIsInNldHRpbmdzIiwiT2JqZWN0IiwiYXNzaWduIiwiUHJlc2VudGVyIiwidmlldyIsImZhY2FkZSIsInZpZXdMaW5rIiwiZmFjYWRlTGluayIsIm1vbml0b3JzQ3VycmVudEhhbmRlbHNQb3NpdGlvbnMiLCJtb25pdG9yc1ZpZXdSZXF1ZXN0cyIsInNsaWRlck1vdmVtZW50IiwiY3VycmVudEhhbmRlbHNQb3NpdGlvbnMiLCJQcm94eSIsInNldCIsInRhcmdldCIsInZhbCIsIm1vZGVsUmVzdWx0IiwicmVmcmVzaE1vZGVsRGF0YSIsInJlZnJlc2hDdXJyZW50VmFsdWVzIiwiZGF0YVJlcXVlc3RTdGF0dXMiLCJyZXN1bHQiLCJnZXRNYXhEYXRhIiwicmVmcmVzaE1heFNpZGVNZW51RGF0YSIsInBvc2l0aW9ucyIsImdldFBvc2l0aW9uc0Ftb3VudCIsIm1pbklucHV0Iiwic2lkZU1lbnVJbnB1dHNWYWx1ZXNWYWxpZGF0aW9uQ2hlY2tlciIsIm1heElucHV0IiwicG9zc2libGVSYW5nZSIsImdldFBvc3NpYmxlUmFuZ2UiLCJpbnB1dHNQb3NzaWJsZVJhbmdlIiwic3RhcnRQb3NpdGlvbnMiLCJzdGFydEhhbmRlbHNQb3NpdGlvbiIsInN0YXJ0SGFuZGxlcnNQb3NpdGlvbnMiLCJzdGVwQW1vdW50IiwidmFsdWVTY2FsZVZhbHVlcyIsImdldFZhbHVlc0ZvclZhbHVlU2NhbGUiLCJ2YWx1ZVNjYWxlIiwicmVmcmVzaFZhbHVlcyIsImNlbnRlcnNWYWx1ZXNQb3NpdGlvbnMiLCJzbGlkZXJSYW5nZSIsIm1pbkhhbmRlbCIsImNoZWNrRG91YmxlaGFuZGVscyIsImRvdWJsZSIsInNlbGVjdGVkSGFuZGVsIiwic2VsZWN0SGFuZGxlRm9yVmFsdWVTY2FsZSIsImNlbnRlcmVkSGFuZGVsQnlWYWx1ZVNjYWxlIiwiYWRhcHRlZE9iamVjdEZvclJlZnJlc2giLCJoYW5kZWxUb2dnbGUiLCJjaGVja2VkIiwicmFuZ2UiLCJzdGVwSW5wdXQiLCJjaGVja1ZhbGlkaXR5T2ZDaGFuZ2VkU3RlcCIsIkhhbmRlbHNMYWJlbHMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJtaW5MYWJlbCIsIm1heExhYmVsIiwidG9nZ2xlIiwic3R5bGUiLCJkaXNwbGF5IiwibWluSGFuZGVsV2lkdGgiLCJtYXhIYW5kZWxXaWR0aCIsIm1pbkxhYmVsV2lkdGgiLCJtYXhMYWJlbFdpZHRoIiwibGVmdCIsIkhhbmRlbHMiLCJtYXhIYW5kZWwiLCJTZWxlY3RlZFJhbmdlIiwiaW50ZXJ2YWwiLCJTaWRlTWVudSIsInNsaWRlclZhbHVlUCIsImlubmVyVGV4dCIsIm1pblNsaWRlclZhbHVlT3V0cHV0IiwiaWQiLCJtYXhTbGlkZXJWYWx1ZU91dHB1dCIsInNsaWRlclRvZ2dsZVAiLCJzbGlkZXJUb2dnbGVMYWJlbCIsIm1heFNsaWRlckhhbmRlbFRvZ2dsZSIsInNldEF0dHJpYnV0ZSIsImN1c3RvbVNsaWRlckJvcmRlciIsImN1c3RvbVNsaWRlcklucHV0cyIsImN1c3RvbVNsaWRlcklucHV0c1AiLCJjdXN0b21TbGlkZXJJbnB1dHNNaW5MYWJlbCIsImN1c3RvbVNsaWRlcklucHV0c01heExhYmVsIiwiY3VzdG9tU2xpZGVySW5wdXRzTWluIiwiY3VzdG9tU2xpZGVySW5wdXRzTWF4IiwidG9nZ2xlRm9yVmFsdWVzQ29udGFpbmVyIiwidG9nZ2xlRm9yVmFsdWVzUCIsInRvZ2dsZUZvclZhbHVlc0xhYmVsIiwidG9nZ2xlRm9yVmFsdWVzSW5wdXQiLCJ0b2dnbGVGb3JWYWx1ZXNTcGFuIiwic3RlcENvbnRhaW5lciIsInN0ZXBJbnB1dFAiLCJmb3JTdGVwSW5wdXRMYWJlbCIsInZhbHVlU2NhbGVDb250YWluZXIiLCJ0b2dnbGVGb3JWYWx1ZVNjYWxlUCIsInRvZ2dsZUZvclZhbHVlU2NhbGVMYWJlbCIsInRvZ2dsZUZvclZhbHVlU2NhbGVJbnB1dCIsInRvZ2dsZUZvclZhbHVlU2NhbGVTcGFuIiwidG9nZ2xlRm9yUGxhbmVDb250YWluZXIiLCJ0b2dnbGVGb3JQbGFuZVAiLCJ0b2dnbGVGb3JQbGFuZUxhYmVsIiwidG9nZ2xlRm9yUGxhbmVJbnB1dCIsInRvZ2dsZUZvclBsYW5lU3BhbiIsIm1haW5TbGlkZXJDb250YWluZXIiLCJhcHBlbmQiLCJjdXN0b21TbGlkZXJNZW51Q29udGFpbmVyIiwiaGFuZGVsTGFiZWxUb2dnbGUiLCJwbGFuZVRvZ2dsZSIsInZhbHVlU2NhbGVUb2dnbGUiLCJTbGlkZXJNb3ZlbWVudCIsImhhbmRlbHMiLCJoYW5kZWxzVG9nZ2xlIiwic3RlcCIsInBvc2l0aW9uVmFsdWVzIiwib2Zmc2V0V2lkdGgiLCJyaWdodCIsImV2ZW50IiwidGVzdCIsInRoYXQiLCJzaGlmdCIsInZlcnRpY2FsIiwiZG91YmxlSGFuZGVscyIsImNoZWNrQ3VycmVudFNsaWRlclNldHRpbmdzIiwiY2xpZW50WSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImNsaWVudFgiLCJhZGRFdmVudExpc3RlbmVyIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJuZXdMZWZ0IiwicmlnaHRFZGdlIiwicmVuZXdhbE9mUG9zaXRpb24iLCJ1bmRlZmluZWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYm9keSIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJ0b2dnbGVSZXN1bHQiLCJoZWlnaHQiLCJ0cmFuc2Zvcm0iLCJyZW1vdmUiLCJtaW5pbXVtIiwiY29uc29sZSIsImxvZyIsImlucHV0IiwicGl4ZWxzUGVyVW5pdCIsIm1pblN0ZXAiLCJTbGlkZXJSYW5nZSIsImVsZW0iLCJWYWx1ZVNjYWxlIiwidmFsdWUxNSIsInZhbHVlMzAiLCJ2YWx1ZTUwIiwidmFsdWU3MCIsInZhbHVlODUiLCJ2YWx1ZVNjYWxlMTUiLCJ2YWx1ZVNjYWxlMzAiLCJ2YWx1ZVNjYWxlNTAiLCJ2YWx1ZVNjYWxlNzAiLCJ2YWx1ZVNjYWxlODUiLCJ2YWx1ZXMiLCJzbGlkZXIiLCJoYW5kZWwiLCJWYWx1ZVJhbmdlIiwiVmlldyIsImdldEVsZW1lbnRzIiwidmFsdWVSYW5nZSIsInNpZGVNZW51Iiwic2lkZU1lbnVDb250YWluZXIiLCJoYW5kZWxzTGFiZWxzIiwic2xpZGVyQ29udGFpbmVyIiwib2Zmc2V0SGVpZ2h0IiwicXVlcnlTZWxlY3RvckFsbCIsIm9wYWNpdHkiLCJjaGFuZ2VQbGFuZSIsInJlcG9zaXRpb25zQWZ0ZXJDaGFuZ2VQbGFuZSIsImRpc3BsYXlDb250cm9sbGVyIiwibWFrZUJpbmRMYWJlbFRvZ2dsZSIsImJpbmQiLCJtYWtlQmluZEhhbmRlbFRvZ2dsZSIsIm1ha2VCaW5kRm9yUGxhbmVUb2dnbGUiLCJtYWtlQmluZEZvclNlbGVjdGlvbk1pblZhbHVlIiwibWFrZUJpbmRGb3JTZWxlY3Rpb25NYXhWYWx1ZSIsIm1ha2VCaW5kRm9yTWluSW5wdXQiLCJtYWtlQmluZEZvck1heElucHV0IiwibWFrZUJpbmRGb3JWYWx1ZVNjYWxlVG9nZ2xlIiwibWFrZUJpbmRTdGVwSW5wdXQiLCJtYWtlQmluZEZvclZhbHVlU2NhbGUiLCJiaW5kRm9yTWluIiwiYmluZEZvck1heCIsIm5ld0RhdGEiLCJjaGVja1VuZGVmaW5lZFN0cmluZ3MiLCJ0ZXh0Q29udGVudCIsImNlbnRlcmluZ1JlbGF0aXZlVG9IYW5kbGVzIiwicmVtb3ZlQXR0cmlidXRlIiwib25tb3VzZWRvd24iLCJtaW5IYW5kZWxMaXN0ZW5lciIsIm1heEhhbmRlbExpc3RlbmVyIiwiY2FsbEhhbmRlbExhYmVsVG9nZ2xlQ2hhbmdlciIsImNhbGxNYXhIYW5kZWxUb2dnbGVDaGFuZ2VyIiwic2VsZWN0aW9uT2ZQcmVwYXJlZFZhbHVlIiwiZWxlbWVudCIsIiQiLCJmbiIsInRlc3RTbGlkZXIiLCJvcHRpb25zIiwiZXh0ZW5kIiwicHJlc2VudGVyIiwic3RhcnRWaWV3TW9uaXRvcmluZyIsImJpbmRFdmVudExpc3RlbmVycyIsImRpc3BsYXlFbGVtZW50cyIsImJpbmRFdmVudEhhbmRlbHNNb3ZlbWVudCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRUM7QUFLQTtBQVFBO0FBWU0sSUFBTUEsTUFBYjtBQUdFLGtCQUFhQyxLQUFiLEVBQTJCO0FBQUE7O0FBQUE7O0FBQ3pCLFNBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNEOztBQUxIO0FBQUE7QUFBQSwyQ0FPK0M7QUFDM0MsYUFBTyxLQUFLQSxLQUFMLENBQVdDLGNBQVgsRUFBUDtBQUNEO0FBVEg7QUFBQTtBQUFBLHFDQVdtQkMsSUFYbkIsRUFXc0NDLElBWHRDLEVBVzREO0FBQ3hELFVBQUlBLElBQUksS0FBSyxLQUFiLEVBQW9CO0FBQ2xCLGFBQUtILEtBQUwsQ0FBV0UsSUFBWCxDQUFnQixhQUFoQixJQUFpQ0UsTUFBTSxDQUFDQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFDLEtBQUtOLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQixLQUFoQixDQUFELEdBQTJCLENBQUNBLElBQUksQ0FBQyxLQUFELENBQUwsSUFBZ0IsQ0FBQ0EsSUFBSSxDQUFDLGFBQUQsQ0FBTCxJQUF3QixDQUFDLEtBQUtGLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQixLQUFoQixDQUFELEdBQTBCLENBQUMsS0FBS0YsS0FBTCxDQUFXRSxJQUFYLENBQWdCLEtBQWhCLENBQW5ELENBQWhCLENBQXRDLENBQUQsQ0FBdkM7QUFDQSxlQUFPO0FBQUUsaUJBQU8sS0FBS0YsS0FBTCxDQUFXRSxJQUFYLENBQWdCLGFBQWhCO0FBQVQsU0FBUDtBQUNELE9BSEQsTUFHTztBQUNMLGFBQUtGLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQixhQUFoQixJQUFpQ0UsTUFBTSxDQUFDQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxDQUFDLEtBQUtOLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQixLQUFoQixDQUFELEdBQTJCLENBQUNBLElBQUksQ0FBQyxLQUFELENBQUwsSUFBZ0IsQ0FBQ0EsSUFBSSxDQUFDLGFBQUQsQ0FBTCxJQUF3QixDQUFDLEtBQUtGLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQixLQUFoQixDQUFELEdBQTBCLENBQUMsS0FBS0YsS0FBTCxDQUFXRSxJQUFYLENBQWdCLEtBQWhCLENBQW5ELENBQWhCLENBQXRDLENBQUQsQ0FBdkM7QUFDQSxlQUFPO0FBQUUsaUJBQU8sS0FBS0YsS0FBTCxDQUFXRSxJQUFYLENBQWdCLGFBQWhCO0FBQVQsU0FBUDtBQUNEOztBQUFBO0FBQ0Y7QUFuQkg7QUFBQTtBQUFBLG1DQXFCeUI7QUFDckIsYUFBTztBQUFFLGVBQU8sS0FBS0YsS0FBTCxDQUFXRSxJQUFYLENBQWdCLGFBQWhCLENBQVQ7QUFBeUMsZUFBTyxLQUFLRixLQUFMLENBQVdFLElBQVgsQ0FBZ0IsYUFBaEI7QUFBaEQsT0FBUDtBQUNEO0FBdkJIO0FBQUE7QUFBQSxpQ0F5QnVCO0FBQ25CLGFBQU8sQ0FBQyxLQUFLRixLQUFMLENBQVdFLElBQVgsQ0FBZ0IsS0FBaEIsQ0FBUjtBQUNEO0FBM0JIO0FBQUE7QUFBQSx1Q0E2QnVDO0FBQ25DLGFBQU87QUFBQyxlQUFNLEtBQUtGLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQkssR0FBdkI7QUFBNEIsZUFBTyxLQUFLUCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JNO0FBQW5ELE9BQVA7QUFDRDtBQS9CSDtBQUFBO0FBQUEseUNBaUMyQztBQUN2QyxhQUFPO0FBQUMscUJBQWFKLE1BQU0sQ0FBQyxDQUFDLEtBQUtKLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQkssR0FBakIsR0FBdUIsQ0FBQyxLQUFLUCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JNLEdBQXpDLENBQXBCO0FBQW1FLG1CQUFXLEtBQUtSLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQk07QUFBOUYsT0FBUDtBQUNEO0FBbkNIO0FBQUE7QUFBQSw2Q0FxQ21EO0FBQy9DLGFBQU87QUFDTCxjQUFNSixNQUFNLENBQUMsQ0FBQyxLQUFLSixLQUFMLENBQVdFLElBQVgsQ0FBZ0JNLEdBQWpCLEdBQXdCLENBQUMsQ0FBQyxLQUFLUixLQUFMLENBQVdFLElBQVgsQ0FBZ0JLLEdBQWpCLEdBQXVCLENBQUMsS0FBS1AsS0FBTCxDQUFXRSxJQUFYLENBQWdCTSxHQUF6QyxJQUFnRCxJQUF6RSxDQURQO0FBRUwsY0FBTUosTUFBTSxDQUFDLENBQUMsS0FBS0osS0FBTCxDQUFXRSxJQUFYLENBQWdCTSxHQUFqQixHQUF3QixDQUFDLENBQUMsS0FBS1IsS0FBTCxDQUFXRSxJQUFYLENBQWdCSyxHQUFqQixHQUF1QixDQUFDLEtBQUtQLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQk0sR0FBekMsSUFBZ0QsSUFBekUsQ0FGUDtBQUdMLGNBQU1KLE1BQU0sQ0FBQyxDQUFDLEtBQUtKLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQk0sR0FBakIsR0FBd0IsQ0FBQyxDQUFDLEtBQUtSLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQkssR0FBakIsR0FBdUIsQ0FBQyxLQUFLUCxLQUFMLENBQVdFLElBQVgsQ0FBZ0JNLEdBQXpDLElBQWdELElBQXpFLENBSFA7QUFJTCxjQUFNSixNQUFNLENBQUMsQ0FBQyxLQUFLSixLQUFMLENBQVdFLElBQVgsQ0FBZ0JNLEdBQWpCLEdBQXdCLENBQUMsQ0FBQyxLQUFLUixLQUFMLENBQVdFLElBQVgsQ0FBZ0JLLEdBQWpCLEdBQXVCLENBQUMsS0FBS1AsS0FBTCxDQUFXRSxJQUFYLENBQWdCTSxHQUF6QyxJQUFnRCxJQUF6RSxDQUpQO0FBS0wsY0FBTUosTUFBTSxDQUFDLENBQUMsS0FBS0osS0FBTCxDQUFXRSxJQUFYLENBQWdCTSxHQUFqQixHQUF3QixDQUFDLENBQUMsS0FBS1IsS0FBTCxDQUFXRSxJQUFYLENBQWdCSyxHQUFqQixHQUF1QixDQUFDLEtBQUtQLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQk0sR0FBekMsSUFBZ0QsSUFBekU7QUFMUCxPQUFQO0FBT0Q7QUE3Q0g7QUFBQTtBQUFBLDhDQStDNEJDLEtBL0M1QixFQStDMkNDLFlBL0MzQyxFQStDNkY7QUFDekYsVUFBSUMsYUFBSjtBQUNBLFVBQUlDLGFBQUo7O0FBQ0EsVUFBR0YsWUFBSCxFQUFpQjtBQUNmLFlBQUksQ0FBQyxLQUFLVixLQUFMLENBQVdFLElBQVgsQ0FBZ0IsYUFBaEIsQ0FBRCxHQUFrQyxDQUFDTyxLQUFuQyxJQUE0QyxDQUFDLEtBQUtULEtBQUwsQ0FBV0UsSUFBWCxDQUFnQixhQUFoQixDQUFELEtBQW9DLENBQUNPLEtBQXJGLEVBQTRGO0FBQzFGRSx1QkFBYSxHQUFHUCxNQUFNLENBQUMsQ0FBQyxLQUFLSixLQUFMLENBQVdFLElBQVgsQ0FBZ0IsYUFBaEIsQ0FBRCxHQUFrQyxDQUFDTyxLQUFwQyxDQUF0QjtBQUNELFNBRkQsTUFFTztBQUNMRSx1QkFBYSxHQUFHUCxNQUFNLENBQUMsQ0FBQ0ssS0FBRCxHQUFTLENBQUMsS0FBS1QsS0FBTCxDQUFXRSxJQUFYLENBQWdCLGFBQWhCLENBQVgsQ0FBdEI7QUFDRDs7QUFBQTs7QUFFRCxZQUFJLENBQUMsS0FBS0YsS0FBTCxDQUFXRSxJQUFYLENBQWdCLGFBQWhCLENBQUQsR0FBa0MsQ0FBQ08sS0FBbkMsSUFBNEMsQ0FBQyxLQUFLVCxLQUFMLENBQVdFLElBQVgsQ0FBZ0IsYUFBaEIsQ0FBRCxLQUFvQyxDQUFDTyxLQUFyRixFQUE2RjtBQUMzRkcsdUJBQWEsR0FBR1IsTUFBTSxDQUFDLENBQUMsS0FBS0osS0FBTCxDQUFXRSxJQUFYLENBQWdCLGFBQWhCLENBQUQsR0FBa0MsQ0FBQ08sS0FBcEMsQ0FBdEI7QUFDRCxTQUZELE1BRU87QUFDTEcsdUJBQWEsR0FBR1IsTUFBTSxDQUFDLENBQUNLLEtBQUQsR0FBUyxDQUFDLEtBQUtULEtBQUwsQ0FBV0UsSUFBWCxDQUFnQixhQUFoQixDQUFYLENBQXRCO0FBQ0Q7O0FBQUE7O0FBRUQsWUFBRyxDQUFDUyxhQUFELEdBQWlCLENBQUNDLGFBQWxCLElBQW1DLENBQUNELGFBQUQsSUFBa0IsQ0FBQ0MsYUFBekQsRUFBd0U7QUFDdEUsZUFBS1osS0FBTCxDQUFXRSxJQUFYLENBQWdCLGFBQWhCLElBQWlDTyxLQUFqQztBQUNBLGlCQUFPO0FBQ0wsc0JBQVUsS0FETDtBQUVMLHFCQUFTQTtBQUZKLFdBQVA7QUFJRCxTQU5ELE1BTU87QUFDTCxlQUFLVCxLQUFMLENBQVdFLElBQVgsQ0FBZ0IsYUFBaEIsSUFBaUNPLEtBQWpDO0FBQ0EsaUJBQU87QUFDTCxzQkFBVSxLQURMO0FBRUwscUJBQVNBO0FBRkosV0FBUDtBQUlEOztBQUFBO0FBQ0YsT0ExQkQsTUEwQk87QUFFTCxhQUFLVCxLQUFMLENBQVdFLElBQVgsQ0FBZ0IsYUFBaEIsSUFBaUNPLEtBQWpDO0FBQ0EsZUFBTztBQUNMLG9CQUFVLEtBREw7QUFFTCxtQkFBU0E7QUFGSixTQUFQO0FBS0Q7O0FBQUE7QUFDRjtBQXJGSDs7QUFBQTtBQUFBO0FBc0ZDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqR00sSUFBTUksS0FBYjtBQUlFLGlCQUFhQyxRQUFiLEVBQTRDO0FBQUE7O0FBQUE7O0FBQzFDLFNBQUtaLElBQUwsR0FBWWEsTUFBTSxDQUFDQyxNQUFQLENBQWMsRUFBZCxFQUFrQkYsUUFBbEIsQ0FBWjtBQUNEOztBQU5IO0FBQUE7QUFBQSxxQ0FReUM7QUFDckMsYUFBTztBQUFDLG1CQUFXLEtBQUtaLElBQUwsQ0FBVU0sR0FBdEI7QUFBMkIsZUFBTyxLQUFLTixJQUFMLENBQVUsYUFBVixDQUFsQztBQUE0RCxlQUFPLEtBQUtBLElBQUwsQ0FBVSxhQUFWLENBQW5FO0FBQTZGLCtCQUFnQixDQUFDLEtBQUtBLElBQUwsQ0FBVUssR0FBWCxHQUFpQixDQUFDLEtBQUtMLElBQUwsQ0FBVU0sR0FBNUM7QUFBN0YsT0FBUDtBQUNEO0FBVkg7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNaTyxJQUFNUyxTQUFiO0FBS0UscUJBQWFDLElBQWIsRUFBeUJDLE1BQXpCLEVBQXlDO0FBQUE7O0FBQUE7O0FBQUE7O0FBQ3ZDLFNBQUtDLFFBQUwsR0FBZ0JGLElBQWhCO0FBQ0EsU0FBS0csVUFBTCxHQUFrQkYsTUFBbEI7QUFDRDs7QUFSSDtBQUFBO0FBQUEsMENBVThCO0FBQzFCLFdBQUtHLCtCQUFMO0FBQ0EsV0FBS0Msb0JBQUw7QUFDRDtBQWJIO0FBQUE7QUFBQSxzREFlMEM7QUFDdEMsVUFBSUwsSUFBSSxHQUFHLEtBQUtFLFFBQWhCO0FBQ0EsVUFBSUQsTUFBTSxHQUFHLEtBQUtFLFVBQWxCO0FBRUFILFVBQUksQ0FBQ00sY0FBTCxDQUFvQkMsdUJBQXBCLEdBQThDLElBQUlDLEtBQUosQ0FBVVIsSUFBSSxDQUFDTSxjQUFMLENBQW9CQyx1QkFBOUIsRUFBdUQ7QUFDbkdFLFdBRG1HLGVBQy9GQyxNQUQrRixFQUN2RnpCLElBRHVGLEVBQ2pGMEIsR0FEaUYsRUFDNUU7QUFDckIsY0FBRyxRQUFPQSxHQUFQLE1BQWUsUUFBbEIsRUFBNEI7QUFDMUJELGtCQUFNLENBQUN4QixNQUFNLENBQUNELElBQUQsQ0FBUCxDQUFOLEdBQXVCMEIsR0FBdkI7QUFDQSxnQkFBSUMsV0FBVyxHQUFHWCxNQUFNLENBQUNZLGdCQUFQLENBQXdCRixHQUF4QixFQUE2QnpCLE1BQU0sQ0FBQ0QsSUFBRCxDQUFuQyxDQUFsQjtBQUNBZSxnQkFBSSxDQUFDYyxvQkFBTCxDQUEwQkYsV0FBMUI7QUFDQSxtQkFBTyxJQUFQO0FBQ0QsV0FMRCxNQUtPO0FBQ0wsbUJBQU8sS0FBUDtBQUNEOztBQUFBO0FBQ0Y7QUFWa0csT0FBdkQsQ0FBOUM7QUFhRDtBQWhDSDtBQUFBO0FBQUEsMkNBa0MrQjtBQUMzQixVQUFJWixJQUFJLEdBQUcsS0FBS0UsUUFBaEI7QUFDQSxVQUFJRCxNQUFNLEdBQUcsS0FBS0UsVUFBbEI7QUFFQUgsVUFBSSxDQUFDZSxpQkFBTCxHQUF5QixJQUFJUCxLQUFKLENBQVVSLElBQUksQ0FBQ2UsaUJBQWYsRUFBa0M7QUFDekROLFdBRHlELGVBQ3JEQyxNQURxRCxFQUM3Q3pCLElBRDZDLEVBQ3ZDMEIsR0FEdUMsRUFDbEM7QUFDckIsY0FBRyxPQUFPQSxHQUFQLEtBQWUsU0FBZixJQUE0QixPQUFPQSxHQUFQLEtBQWUsUUFBOUMsRUFBd0Q7QUFFdEQsZ0JBQUcxQixJQUFJLEtBQUssWUFBWixFQUEwQjtBQUN4QixrQkFBSStCLE1BQWMsR0FBR2YsTUFBTSxDQUFDZ0IsVUFBUCxFQUFyQjtBQUNBakIsa0JBQUksQ0FBQ2tCLHNCQUFMLENBQTRCRixNQUE1QjtBQUNEOztBQUFBOztBQUVELGdCQUFHL0IsSUFBSSxLQUFLLHVCQUFaLEVBQXFDO0FBQ25DLGtCQUFJa0MsU0FBNkIsR0FBR2xCLE1BQU0sQ0FBQ21CLGtCQUFQLEVBQXBDO0FBRUFwQixrQkFBSSxDQUFDcUIsUUFBTCxHQUFnQnJCLElBQUksQ0FBQ00sY0FBTCxDQUFvQmdCLHFDQUFwQixDQUEwRCxLQUExRCxFQUFpRSxDQUFDdEIsSUFBSSxDQUFDcUIsUUFBTCxDQUFjOUIsS0FBaEYsRUFBdUYsQ0FBQzRCLFNBQVMsQ0FBQyxXQUFELENBQWpHLEVBQWdILENBQUNBLFNBQVMsQ0FBQyxTQUFELENBQTFILENBQWhCLEdBQXlKLEtBQXpKO0FBQ0Q7O0FBQUE7O0FBRUQsZ0JBQUdsQyxJQUFJLEtBQUssdUJBQVosRUFBcUM7QUFDbkMsa0JBQUlrQyxVQUE2QixHQUFHbEIsTUFBTSxDQUFDbUIsa0JBQVAsRUFBcEM7O0FBQ0FwQixrQkFBSSxDQUFDdUIsUUFBTCxHQUFnQnZCLElBQUksQ0FBQ00sY0FBTCxDQUFvQmdCLHFDQUFwQixDQUEwRCxLQUExRCxFQUFpRSxDQUFDdEIsSUFBSSxDQUFDdUIsUUFBTCxDQUFjaEMsS0FBaEYsRUFBdUYsQ0FBQzRCLFVBQVMsQ0FBQyxXQUFELENBQWpHLEVBQWdILENBQUNBLFVBQVMsQ0FBQyxTQUFELENBQTFILENBQWhCLEdBQXlKLEtBQXpKO0FBQ0Q7O0FBQUE7O0FBRUQsZ0JBQUdsQyxJQUFJLEtBQUssa0JBQVosRUFBZ0M7QUFDOUIsa0JBQUl1QyxhQUErQixHQUFHdkIsTUFBTSxDQUFDd0IsZ0JBQVAsRUFBdEM7QUFDQXpCLGtCQUFJLENBQUNxQixRQUFMLElBQWlCckIsSUFBSSxDQUFDdUIsUUFBdEIsR0FBZ0N2QixJQUFJLENBQUMwQixtQkFBTCxDQUF5QkYsYUFBekIsRUFBd0N4QixJQUFJLENBQUNxQixRQUE3QyxFQUF1RHJCLElBQUksQ0FBQ3VCLFFBQTVELENBQWhDLEdBQXdHLEtBQXhHO0FBQ0Q7O0FBQUE7O0FBRUQsZ0JBQUd0QyxJQUFJLEtBQUssc0JBQVosRUFBb0M7QUFDbEMsa0JBQUkwQyxjQUFvQyxHQUFHMUIsTUFBTSxDQUFDMkIsb0JBQVAsRUFBM0M7QUFDQTVCLGtCQUFJLENBQUNNLGNBQUwsQ0FBb0J1QixzQkFBcEIsQ0FBMkNGLGNBQTNDO0FBQ0EzQixrQkFBSSxDQUFDYyxvQkFBTCxDQUEwQmEsY0FBMUI7QUFDRDs7QUFBQTs7QUFFRCxnQkFBRzFDLElBQUksS0FBSyx3QkFBWixFQUFzQztBQUNwQyxrQkFBSTZDLFVBQThCLEdBQUc3QixNQUFNLENBQUNtQixrQkFBUCxFQUFyQztBQUNBcEIsa0JBQUksQ0FBQ00sY0FBTCxDQUFvQndCLFVBQXBCLEdBQWlDLENBQUNBLFVBQVUsQ0FBQyxXQUFELENBQTVDO0FBQ0Q7O0FBQUE7O0FBRUQsZ0JBQUc3QyxJQUFJLEtBQUssd0JBQVosRUFBc0M7QUFDcEMsa0JBQUk4QyxnQkFBd0MsR0FBRzlCLE1BQU0sQ0FBQytCLHNCQUFQLEVBQS9DO0FBQ0FoQyxrQkFBSSxDQUFDaUMsVUFBTCxDQUFnQkMsYUFBaEIsQ0FBOEJILGdCQUE5QjtBQUNBL0Isa0JBQUksQ0FBQ2lDLFVBQUwsQ0FBZ0JFLHNCQUFoQixDQUF1Q25DLElBQUksQ0FBQ29DLFdBQTVDLEVBQXlEcEMsSUFBSSxDQUFDcUMsU0FBOUQ7QUFDRDs7QUFBQTs7QUFFRCxnQkFBR3BELElBQUksS0FBSywyQkFBWixFQUF5QztBQUFBLGtCQUU5QnFELGtCQUY4QixHQUV2QyxTQUFTQSxrQkFBVCxDQUE0QkMsT0FBNUIsRUFBbUQ7QUFDakQsb0JBQUlwQixTQUE2QixHQUFHbEIsTUFBTSxDQUFDbUIsa0JBQVAsRUFBcEM7QUFFQSxvQkFBSW9CLGNBQXlDLEdBQUd2QyxNQUFNLENBQUN3Qyx5QkFBUCxDQUFpQzlCLEdBQWpDLEVBQXNDNEIsT0FBdEMsQ0FBaEQ7QUFFQXZDLG9CQUFJLENBQUNNLGNBQUwsQ0FBb0JvQywwQkFBcEIsQ0FBK0NGLGNBQWMsQ0FBQyxRQUFELENBQTdELEVBQXlFQSxjQUFjLENBQUMsT0FBRCxDQUF2RixFQUFrR3JCLFNBQVMsQ0FBQyxXQUFELENBQTNHLEVBQTBIQSxTQUFTLENBQUMsU0FBRCxDQUFuSTs7QUFFQSxvQkFBSXFCLGNBQWMsQ0FBQyxRQUFELENBQWQsS0FBNkIsS0FBakMsRUFBd0M7QUFDdEMsc0JBQUlHLHVCQUEyQyxHQUFHO0FBQ2hELDJCQUFPSCxjQUFjLENBQUMsT0FBRDtBQUQyQixtQkFBbEQ7QUFHQXhDLHNCQUFJLENBQUNjLG9CQUFMLENBQTBCNkIsdUJBQTFCO0FBQ0QsaUJBTEQsTUFLTztBQUNMLHNCQUFJQSx3QkFBMkMsR0FBRztBQUNoRCwyQkFBT0gsY0FBYyxDQUFDLE9BQUQ7QUFEMkIsbUJBQWxEO0FBR0F4QyxzQkFBSSxDQUFDYyxvQkFBTCxDQUEwQjZCLHdCQUExQjtBQUNEOztBQUFBO0FBQ0YsZUFwQnNDOztBQW9CdEM7O0FBRUQsa0JBQUksT0FBT2hDLEdBQVAsS0FBZSxRQUFmLElBQTJCWCxJQUFJLENBQUM0QyxZQUFwQyxFQUFrRDtBQUNoRE4sa0NBQWtCLENBQUN0QyxJQUFJLENBQUM0QyxZQUFMLENBQWtCQyxPQUFuQixDQUFsQjtBQUNELGVBRkQsTUFFTztBQUNMUCxrQ0FBa0IsQ0FBQ3RDLElBQUksQ0FBQ0osUUFBTCxDQUFja0QsS0FBZixDQUFsQjtBQUNEOztBQUFBO0FBQ0Y7O0FBQUE7O0FBRUQsZ0JBQUk3RCxJQUFJLEtBQUssWUFBVCxJQUF5QmUsSUFBSSxDQUFDK0MsU0FBbEMsRUFBNkM7QUFDM0Msa0JBQUk1QixXQUFpQixHQUFHbEIsTUFBTSxDQUFDbUIsa0JBQVAsR0FBNEJELFNBQXBEO0FBQ0FuQixrQkFBSSxDQUFDTSxjQUFMLENBQW9CMEMsMEJBQXBCLENBQStDLEtBQS9DLEVBQXNEaEQsSUFBSSxDQUFDK0MsU0FBM0QsRUFBc0U1QixXQUF0RTtBQUNEOztBQUFBOztBQUVELGdCQUFJbEMsSUFBSSxLQUFLLDBCQUFULElBQXVDLE9BQU8wQixHQUFQLEtBQWUsUUFBMUQsRUFBb0U7QUFDbEUsa0JBQUlRLFdBQWlCLEdBQUdsQixNQUFNLENBQUNtQixrQkFBUCxHQUE0QkQsU0FBcEQ7QUFDQW5CLGtCQUFJLENBQUMrQyxTQUFMLEdBQWlCL0MsSUFBSSxDQUFDTSxjQUFMLENBQW9CMEMsMEJBQXBCLENBQStDckMsR0FBL0MsRUFBb0RYLElBQUksQ0FBQytDLFNBQXpELEVBQW9FNUIsV0FBcEUsQ0FBakIsR0FBa0csS0FBbEc7QUFDRDs7QUFBQTtBQUVELG1CQUFPLElBQVA7QUFDRCxXQWhGRCxNQWdGTztBQUNMLG1CQUFPLEtBQVA7QUFDRDs7QUFBQTtBQUNGO0FBckZ3RCxPQUFsQyxDQUF6QjtBQXVGRDtBQTdISDs7QUFBQTtBQUFBO0FBOEhDLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SU0sSUFBTThCLGFBQWI7QUFJRSwyQkFBYztBQUFBOztBQUFBOztBQUFBOztBQUNaLFFBQUkzRCxHQUFvQixHQUFHNEQsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQTNCO0FBQ0EsUUFBSTlELEdBQW9CLEdBQUc2RCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBM0I7QUFDQTdELE9BQUcsQ0FBQzhELFNBQUosQ0FBY0MsR0FBZCxDQUFrQixzQkFBbEI7QUFDQWhFLE9BQUcsQ0FBQytELFNBQUosQ0FBY0MsR0FBZCxDQUFrQixzQkFBbEI7QUFDQSxTQUFLQyxRQUFMLEdBQWdCaEUsR0FBaEI7QUFDQSxTQUFLaUUsUUFBTCxHQUFnQmxFLEdBQWhCO0FBQ0Q7O0FBWEg7QUFBQTtBQUFBLGtDQWF3QjtBQUNwQixhQUFPO0FBQUMsZUFBTyxLQUFLaUUsUUFBYjtBQUF1QixlQUFPLEtBQUtDO0FBQW5DLE9BQVA7QUFDRDtBQWZIO0FBQUE7QUFBQSxzQ0FpQm9CQyxNQWpCcEIsRUFpQjhDbEUsR0FqQjlDLEVBaUJxRUQsR0FqQnJFLEVBaUI0RjtBQUN4RixVQUFJbUUsTUFBTSxDQUFDWCxPQUFQLEtBQW1CLElBQXZCLEVBQTZCO0FBQzNCdkQsV0FBRyxDQUFDbUUsS0FBSixDQUFVQyxPQUFWLEdBQW9CLFFBQXBCO0FBQ0FyRSxXQUFHLENBQUNvRSxLQUFKLENBQVVDLE9BQVYsR0FBb0IsUUFBcEI7QUFDRCxPQUhELE1BR087QUFDTHBFLFdBQUcsQ0FBQ21FLEtBQUosQ0FBVUMsT0FBVixHQUFvQixNQUFwQjtBQUNBckUsV0FBRyxDQUFDb0UsS0FBSixDQUFVQyxPQUFWLEdBQW9CLE1BQXBCO0FBQ0Q7QUFDRjtBQXpCSDtBQUFBO0FBQUEsK0NBMkI2QkMsY0EzQjdCLEVBMkJxREMsY0EzQnJELEVBMkI2RUMsYUEzQjdFLEVBMkJvR0MsYUEzQnBHLEVBMkIySFIsUUEzQjNILEVBMkJ1SkMsUUEzQnZKLEVBMkJ5TDtBQUNyTEQsY0FBUSxDQUFDRyxLQUFULENBQWVNLElBQWYsR0FBc0IsQ0FBQ0osY0FBYyxHQUFHRSxhQUFsQixJQUFtQyxDQUFuQyxHQUF1QyxJQUE3RDtBQUNBTixjQUFRLENBQUNFLEtBQVQsQ0FBZU0sSUFBZixHQUFzQixDQUFDSCxjQUFjLEdBQUdFLGFBQWxCLElBQW1DLENBQW5DLEdBQXVDLElBQTdEO0FBQ0Q7QUE5Qkg7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQU8sSUFBTUUsT0FBYjtBQUtFLHFCQUFjO0FBQUE7O0FBQUE7O0FBQUE7O0FBQ1osUUFBSTFFLEdBQW9CLEdBQUc0RCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBM0I7QUFDQSxRQUFJOUQsR0FBb0IsR0FBRzZELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUEzQjtBQUNBN0QsT0FBRyxDQUFDOEQsU0FBSixDQUFjQyxHQUFkLENBQWtCLGlCQUFsQjtBQUNBaEUsT0FBRyxDQUFDK0QsU0FBSixDQUFjQyxHQUFkLENBQWtCLGlCQUFsQjtBQUNBLFNBQUtoQixTQUFMLEdBQWlCL0MsR0FBakI7QUFDQSxTQUFLMkUsU0FBTCxHQUFpQjVFLEdBQWpCO0FBQ0Q7O0FBWkg7QUFBQTtBQUFBLGtDQWN3QjtBQUNwQixhQUFPO0FBQUNDLFdBQUcsRUFBRSxLQUFLK0MsU0FBWDtBQUFzQmhELFdBQUcsRUFBRSxLQUFLNEU7QUFBaEMsT0FBUDtBQUNEO0FBaEJIO0FBQUE7QUFBQSxzQ0FrQm9CVCxNQWxCcEIsRUFrQjhDbkUsR0FsQjlDLEVBa0JvRTtBQUNoRSxVQUFJbUUsTUFBTSxDQUFDWCxPQUFQLEtBQW1CLElBQXZCLEVBQTZCO0FBQzNCeEQsV0FBRyxDQUFDb0UsS0FBSixDQUFVQyxPQUFWLEdBQW9CLE9BQXBCO0FBQ0QsT0FGRCxNQUVPO0FBQ0xyRSxXQUFHLENBQUNvRSxLQUFKLENBQVVDLE9BQVYsR0FBb0IsTUFBcEI7QUFDRDs7QUFBQTtBQUNGO0FBeEJIOztBQUFBO0FBQUE7QUEwQkMsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFCTSxJQUFNUSxhQUFiO0FBSUUsMkJBQWM7QUFBQTs7QUFBQTs7QUFDWixRQUFJQyxRQUF3QixHQUFHakIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQS9CO0FBQ0FnQixZQUFRLENBQUNmLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLGNBQXZCO0FBQ0EsU0FBS2MsUUFBTCxHQUFnQkEsUUFBaEI7QUFDRDs7QUFSSDtBQUFBO0FBQUEsa0NBVWdDO0FBQzVCLGFBQU8sS0FBS0EsUUFBWjtBQUNEO0FBWkg7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBTyxJQUFNQyxRQUFiLEdBWUUsb0JBQWM7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDWixNQUFJQyxZQUFpQyxHQUFHbkIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQXhDO0FBQ0FrQixjQUFZLENBQUNqQixTQUFiLENBQXVCQyxHQUF2QixDQUEyQixzQkFBM0I7QUFDQWdCLGNBQVksQ0FBQ0MsU0FBYixHQUF5QixvQkFBekI7QUFFQSxNQUFJQyxvQkFBdUMsR0FBR3JCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUE5QztBQUNBb0Isc0JBQW9CLENBQUNuQixTQUFyQixDQUErQkMsR0FBL0IsQ0FBbUMsYUFBbkM7QUFDQWtCLHNCQUFvQixDQUFDQyxFQUFyQixHQUEwQixnQkFBMUI7QUFDQSxNQUFJQyxvQkFBdUMsR0FBR3ZCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixRQUF2QixDQUE5QztBQUNBc0Isc0JBQW9CLENBQUNyQixTQUFyQixDQUErQkMsR0FBL0IsQ0FBbUMsYUFBbkM7QUFDQW9CLHNCQUFvQixDQUFDRCxFQUFyQixHQUEwQixnQkFBMUI7QUFFQSxNQUFJRSxhQUFrQyxHQUFHeEIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQXpDO0FBQ0F1QixlQUFhLENBQUN0QixTQUFkLENBQXdCQyxHQUF4QixDQUE0QixtQkFBNUI7QUFDQXFCLGVBQWEsQ0FBQ0osU0FBZCxHQUEwQiw0QkFBMUI7QUFFQSxNQUFJSyxpQkFBa0MsR0FBR3pCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUF6QztBQUNBd0IsbUJBQWlCLENBQUN2QixTQUFsQixDQUE0QkMsR0FBNUIsQ0FBZ0Msb0JBQWhDO0FBRUEsTUFBSXVCLHFCQUF1QyxHQUFHMUIsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQTlDO0FBQ0F5Qix1QkFBcUIsQ0FBQ3hCLFNBQXRCLENBQWdDQyxHQUFoQyxDQUFvQyx1QkFBcEM7QUFDQXVCLHVCQUFxQixDQUFDSixFQUF0QixHQUEyQix1QkFBM0I7QUFDQUksdUJBQXFCLENBQUNDLFlBQXRCLENBQW1DLE1BQW5DLEVBQTJDLFVBQTNDO0FBRUEsTUFBSUMsa0JBQW1DLEdBQUc1QixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBMUM7QUFDQTJCLG9CQUFrQixDQUFDMUIsU0FBbkIsQ0FBNkJDLEdBQTdCLENBQWlDLDBCQUFqQztBQUVBLE1BQUkwQixrQkFBa0MsR0FBRzdCLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUF6QztBQUNBNEIsb0JBQWtCLENBQUMzQixTQUFuQixDQUE2QkMsR0FBN0IsQ0FBaUMsb0JBQWpDO0FBRUEsTUFBSTJCLG1CQUF5QyxHQUFHOUIsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQWhEO0FBQ0E2QixxQkFBbUIsQ0FBQ1YsU0FBcEIsR0FBZ0MscUJBQWhDO0FBQ0FVLHFCQUFtQixDQUFDNUIsU0FBcEIsQ0FBOEJDLEdBQTlCLENBQWtDLG1CQUFsQztBQUVBLE1BQUk0QiwwQkFBNEMsR0FBRy9CLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFuRDtBQUNBOEIsNEJBQTBCLENBQUM3QixTQUEzQixDQUFxQ0MsR0FBckMsQ0FBeUMsd0JBQXpDO0FBQ0E0Qiw0QkFBMEIsQ0FBQ0osWUFBM0IsQ0FBd0MsS0FBeEMsRUFBK0Msc0JBQS9DO0FBQ0FJLDRCQUEwQixDQUFDWCxTQUEzQixHQUF1QyxPQUF2QztBQUVBLE1BQUlZLDBCQUE0QyxHQUFHaEMsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQW5EO0FBQ0ErQiw0QkFBMEIsQ0FBQzlCLFNBQTNCLENBQXFDQyxHQUFyQyxDQUF5Qyx3QkFBekM7QUFDQTZCLDRCQUEwQixDQUFDTCxZQUEzQixDQUF3QyxLQUF4QyxFQUErQyxzQkFBL0M7QUFDQUssNEJBQTBCLENBQUNaLFNBQTNCLEdBQXVDLE9BQXZDO0FBRUEsTUFBSWEscUJBQXVDLEdBQUdqQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBOUM7QUFDQWdDLHVCQUFxQixDQUFDL0IsU0FBdEIsQ0FBZ0NDLEdBQWhDLENBQW9DLHNCQUFwQztBQUNBOEIsdUJBQXFCLENBQUNYLEVBQXRCLEdBQTJCLHNCQUEzQjtBQUNBVyx1QkFBcUIsQ0FBQ04sWUFBdEIsQ0FBbUMsTUFBbkMsRUFBMkMsUUFBM0M7QUFFQSxNQUFJTyxxQkFBdUMsR0FBR2xDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUE5QztBQUNBaUMsdUJBQXFCLENBQUNoQyxTQUF0QixDQUFnQ0MsR0FBaEMsQ0FBb0Msc0JBQXBDO0FBQ0ErQix1QkFBcUIsQ0FBQ1osRUFBdEIsR0FBMkIsc0JBQTNCO0FBQ0FZLHVCQUFxQixDQUFDUCxZQUF0QixDQUFtQyxNQUFuQyxFQUEyQyxRQUEzQztBQUVBLE1BQUlRLHdCQUF3QyxHQUFHbkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQS9DO0FBRUEsTUFBSW1DLGdCQUFzQyxHQUFHcEMsUUFBUSxDQUFDQyxhQUFULENBQXVCLEdBQXZCLENBQTdDO0FBQ0FtQyxrQkFBZ0IsQ0FBQ2xDLFNBQWpCLENBQTJCQyxHQUEzQixDQUErQixtQkFBL0I7QUFDQWlDLGtCQUFnQixDQUFDaEIsU0FBakIsR0FBNkIsb0NBQTdCO0FBRUEsTUFBSWlCLG9CQUFzQyxHQUFHckMsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQTdDO0FBQ0FvQyxzQkFBb0IsQ0FBQ25DLFNBQXJCLENBQStCQyxHQUEvQixDQUFtQyxvQkFBbkM7QUFFQSxNQUFJbUMsb0JBQXNDLEdBQUd0QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBN0M7QUFDQXFDLHNCQUFvQixDQUFDWCxZQUFyQixDQUFrQyxNQUFsQyxFQUEwQyxVQUExQztBQUNBVyxzQkFBb0IsQ0FBQ3BDLFNBQXJCLENBQStCQyxHQUEvQixDQUFtQyxpQkFBbkM7QUFDQW1DLHNCQUFvQixDQUFDaEIsRUFBckIsR0FBMEIsaUJBQTFCO0FBRUEsTUFBSWlCLG1CQUFvQyxHQUFHdkMsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQTNDO0FBQ0FzQyxxQkFBbUIsQ0FBQ3JDLFNBQXBCLENBQThCQyxHQUE5QixDQUFrQywwQkFBbEM7QUFFQSxNQUFJcUMsYUFBNkIsR0FBR3hDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFwQztBQUNBdUMsZUFBYSxDQUFDdEMsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsMkJBQTVCO0FBRUEsTUFBSXNDLFVBQWdDLEdBQUd6QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBdkM7QUFDQXdDLFlBQVUsQ0FBQ3ZDLFNBQVgsQ0FBcUJDLEdBQXJCLENBQXlCLG1CQUF6QjtBQUNBc0MsWUFBVSxDQUFDckIsU0FBWCxHQUF1Qix5QkFBdkI7QUFFQSxNQUFJc0IsaUJBQW1DLEdBQUcxQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBMUM7QUFDQXlDLG1CQUFpQixDQUFDeEMsU0FBbEIsQ0FBNEJDLEdBQTVCLENBQWdDLHdCQUFoQztBQUNBdUMsbUJBQWlCLENBQUNmLFlBQWxCLENBQStCLEtBQS9CLEVBQXNDLHVCQUF0QztBQUNBZSxtQkFBaUIsQ0FBQ3RCLFNBQWxCLEdBQThCLFFBQTlCO0FBRUEsTUFBSXZCLFNBQTJCLEdBQUdHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFsQztBQUNBSixXQUFTLENBQUNLLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLHVCQUF4QjtBQUNBTixXQUFTLENBQUN5QixFQUFWLEdBQWUsdUJBQWY7QUFDQXpCLFdBQVMsQ0FBQzhCLFlBQVYsQ0FBdUIsTUFBdkIsRUFBK0IsUUFBL0I7QUFFQSxNQUFJZ0IsbUJBQW1DLEdBQUczQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBMUM7QUFFQSxNQUFJMkMsb0JBQTBDLEdBQUc1QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBakQ7QUFDQTJDLHNCQUFvQixDQUFDMUMsU0FBckIsQ0FBK0JDLEdBQS9CLENBQW1DLG1CQUFuQztBQUNBeUMsc0JBQW9CLENBQUN4QixTQUFyQixHQUFpQywyQkFBakM7QUFFQSxNQUFJeUIsd0JBQTBDLEdBQUc3QyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBakQ7QUFDQTRDLDBCQUF3QixDQUFDM0MsU0FBekIsQ0FBbUNDLEdBQW5DLENBQXVDLG9CQUF2QztBQUVBLE1BQUkyQyx3QkFBMEMsR0FBRzlDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFqRDtBQUNBNkMsMEJBQXdCLENBQUNuQixZQUF6QixDQUFzQyxNQUF0QyxFQUE4QyxVQUE5QztBQUNBbUIsMEJBQXdCLENBQUM1QyxTQUF6QixDQUFtQ0MsR0FBbkMsQ0FBdUMsa0JBQXZDO0FBQ0EyQywwQkFBd0IsQ0FBQ3hCLEVBQXpCLEdBQThCLGtCQUE5QjtBQUVBLE1BQUl5Qix1QkFBd0MsR0FBRy9DLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixNQUF2QixDQUEvQztBQUNBOEMseUJBQXVCLENBQUM3QyxTQUF4QixDQUFrQ0MsR0FBbEMsQ0FBc0MsMEJBQXRDO0FBRUEsTUFBSTZDLHVCQUF1QyxHQUFHaEQsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQTlDO0FBRUEsTUFBSWdELGVBQXFDLEdBQUdqRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBNUM7QUFDQWdELGlCQUFlLENBQUMvQyxTQUFoQixDQUEwQkMsR0FBMUIsQ0FBOEIsbUJBQTlCO0FBQ0E4QyxpQkFBZSxDQUFDN0IsU0FBaEIsR0FBNEIsc0JBQTVCO0FBRUEsTUFBSThCLG1CQUFxQyxHQUFHbEQsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQTVDO0FBQ0FpRCxxQkFBbUIsQ0FBQ2hELFNBQXBCLENBQThCQyxHQUE5QixDQUFrQyxvQkFBbEM7QUFFQSxNQUFJZ0QsbUJBQXFDLEdBQUduRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBNUM7QUFDQWtELHFCQUFtQixDQUFDeEIsWUFBcEIsQ0FBaUMsTUFBakMsRUFBeUMsVUFBekM7QUFDQXdCLHFCQUFtQixDQUFDakQsU0FBcEIsQ0FBOEJDLEdBQTlCLENBQWtDLGFBQWxDO0FBQ0FnRCxxQkFBbUIsQ0FBQzdCLEVBQXBCLEdBQXlCLGFBQXpCO0FBRUEsTUFBSThCLGtCQUFtQyxHQUFHcEQsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCLENBQTFDO0FBQ0FtRCxvQkFBa0IsQ0FBQ2xELFNBQW5CLENBQTZCQyxHQUE3QixDQUFpQywwQkFBakM7QUFFQSxNQUFJa0QsbUJBQW1DLEdBQUdyRCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsS0FBdkIsQ0FBMUM7QUFFQW9ELHFCQUFtQixDQUFDbkQsU0FBcEIsQ0FBOEJDLEdBQTlCLENBQWtDLHFCQUFsQztBQUNBa0QscUJBQW1CLENBQUNDLE1BQXBCLENBQTJCbkMsWUFBM0I7QUFDQUEsY0FBWSxDQUFDbUMsTUFBYixDQUFvQmpDLG9CQUFwQjtBQUNBRixjQUFZLENBQUNtQyxNQUFiLENBQW9CL0Isb0JBQXBCO0FBQ0E4QixxQkFBbUIsQ0FBQ0MsTUFBcEIsQ0FBMkI5QixhQUEzQjtBQUNBNkIscUJBQW1CLENBQUNDLE1BQXBCLENBQTJCN0IsaUJBQTNCO0FBRUFBLG1CQUFpQixDQUFDNkIsTUFBbEIsQ0FBeUI1QixxQkFBekIsRUFBZ0RFLGtCQUFoRDtBQUVBQyxvQkFBa0IsQ0FBQ3lCLE1BQW5CLENBQTBCeEIsbUJBQTFCLEVBQStDQywwQkFBL0MsRUFBMkVFLHFCQUEzRSxFQUFrR0QsMEJBQWxHLEVBQThIRSxxQkFBOUg7QUFDQW1CLHFCQUFtQixDQUFDQyxNQUFwQixDQUEyQnpCLGtCQUEzQjtBQUVBVyxlQUFhLENBQUNjLE1BQWQsQ0FBcUJiLFVBQXJCLEVBQWlDQyxpQkFBakMsRUFBb0Q3QyxTQUFwRDtBQUNBd0QscUJBQW1CLENBQUNDLE1BQXBCLENBQTJCZCxhQUEzQjtBQUVBTCwwQkFBd0IsQ0FBQ21CLE1BQXpCLENBQWdDbEIsZ0JBQWhDLEVBQWtEQyxvQkFBbEQ7QUFDQUEsc0JBQW9CLENBQUNpQixNQUFyQixDQUE0QmhCLG9CQUE1QixFQUFrREMsbUJBQWxEO0FBQ0FjLHFCQUFtQixDQUFDQyxNQUFwQixDQUEyQm5CLHdCQUEzQjtBQUVBUSxxQkFBbUIsQ0FBQ1csTUFBcEIsQ0FBMkJWLG9CQUEzQixFQUFpREMsd0JBQWpEO0FBQ0FBLDBCQUF3QixDQUFDUyxNQUF6QixDQUFnQ1Isd0JBQWhDLEVBQTBEQyx1QkFBMUQ7QUFDQU0scUJBQW1CLENBQUNDLE1BQXBCLENBQTJCWCxtQkFBM0I7QUFFQUsseUJBQXVCLENBQUNNLE1BQXhCLENBQStCTCxlQUEvQixFQUFnREMsbUJBQWhEO0FBQ0FBLHFCQUFtQixDQUFDSSxNQUFwQixDQUEyQkgsbUJBQTNCLEVBQWdEQyxrQkFBaEQ7QUFDQUMscUJBQW1CLENBQUNDLE1BQXBCLENBQTJCTix1QkFBM0I7QUFFQVIsZUFBYSxDQUFDYyxNQUFkLENBQXFCYixVQUFyQixFQUFpQ0MsaUJBQWpDLEVBQW9EN0MsU0FBcEQ7QUFDQXdELHFCQUFtQixDQUFDQyxNQUFwQixDQUEyQmQsYUFBM0I7QUFHQSxPQUFLZSx5QkFBTCxHQUFpQ0YsbUJBQWpDO0FBQ0EsT0FBSzNELFlBQUwsR0FBb0JnQyxxQkFBcEI7QUFDQSxPQUFLOEIsaUJBQUwsR0FBeUJsQixvQkFBekI7QUFDQSxPQUFLbUIsV0FBTCxHQUFtQk4sbUJBQW5CO0FBQ0EsT0FBS2hGLFFBQUwsR0FBZ0I4RCxxQkFBaEI7QUFDQSxPQUFLNUQsUUFBTCxHQUFnQjZELHFCQUFoQjtBQUNBLE9BQUtiLG9CQUFMLEdBQTRCQSxvQkFBNUI7QUFDQSxPQUFLRSxvQkFBTCxHQUE0QkEsb0JBQTVCO0FBQ0EsT0FBS21DLGdCQUFMLEdBQXdCWix3QkFBeEI7QUFDQSxPQUFLakQsU0FBTCxHQUFpQkEsU0FBakI7QUFDRCxDQWpMSDtBQWtMQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEtBO0FBV0E7QUFFTSxJQUFNOEQsY0FBYjtBQVlFLDBCQUFhQyxPQUFiLEVBQStCO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUEscURBWW9CO0FBQ2pELGFBQU8sRUFEMEM7QUFFakQsYUFBTztBQUYwQyxLQVpwQjs7QUFDN0IsU0FBS3hILEdBQUwsR0FBV3dILE9BQU8sQ0FBQ3hILEdBQW5CO0FBQ0EsU0FBS0QsR0FBTCxHQUFXeUgsT0FBTyxDQUFDekgsR0FBbkI7QUFDQSxTQUFLaUUsUUFBTCxHQUFnQndELE9BQU8sQ0FBQ3hELFFBQXhCO0FBQ0EsU0FBS0MsUUFBTCxHQUFldUQsT0FBTyxDQUFDdkQsUUFBdkI7QUFDQSxTQUFLbkIsV0FBTCxHQUFtQjBFLE9BQU8sQ0FBQzFFLFdBQTNCO0FBQ0EsU0FBSzJFLGFBQUwsR0FBcUJELE9BQU8sQ0FBQ0MsYUFBN0I7QUFDQSxTQUFLSixXQUFMLEdBQW1CRyxPQUFPLENBQUNILFdBQTNCO0FBQ0EsU0FBS3hDLFFBQUwsR0FBZ0IyQyxPQUFPLENBQUMzQyxRQUF4QjtBQUNBLFNBQUs2QyxJQUFMLEdBQVlGLE9BQU8sQ0FBQ0UsSUFBcEI7QUFDRDs7QUF0Qkg7QUFBQTtBQUFBLDJDQTZCeUJDLGNBN0J6QixFQTZCc0U7QUFDbEUsVUFBSTNILEdBQVcsR0FBSSxDQUFDLEtBQUs4QyxXQUFMLENBQWlCOEUsV0FBakIsR0FBK0IsS0FBSzVILEdBQUwsQ0FBUzRILFdBQXpDLElBQXdELENBQUNELGNBQWMsQ0FBQzlGLFNBQXpFLElBQXVGLENBQUM4RixjQUFjLENBQUMsS0FBRCxDQUFmLEdBQXlCLENBQUNBLGNBQWMsQ0FBQyxTQUFELENBQS9ILElBQThJLEVBQWhLO0FBQ0EsVUFBSTVILEdBQVcsR0FBSSxDQUFDLEtBQUsrQyxXQUFMLENBQWlCOEUsV0FBakIsR0FBK0IsS0FBSzVILEdBQUwsQ0FBUzRILFdBQXpDLElBQXdELENBQUNELGNBQWMsQ0FBQzlGLFNBQXpFLElBQXVGLENBQUM4RixjQUFjLENBQUMsS0FBRCxDQUFmLEdBQXlCLENBQUNBLGNBQWMsQ0FBQyxTQUFELENBQS9ILElBQThJLEVBQWhLO0FBRUEsV0FBSzFHLHVCQUFMLENBQTZCakIsR0FBN0IsQ0FBaUNBLEdBQWpDLEdBQXVDQSxHQUF2QztBQUNBLFdBQUtpQix1QkFBTCxDQUE2QmxCLEdBQTdCLENBQWlDQSxHQUFqQyxHQUF1Q0EsR0FBdkM7QUFFQSxXQUFLQyxHQUFMLENBQVNtRSxLQUFULENBQWVNLElBQWYsR0FBc0J6RSxHQUFHLEdBQUcsSUFBNUI7QUFDQSxXQUFLRCxHQUFMLENBQVNvRSxLQUFULENBQWVNLElBQWYsR0FBc0IxRSxHQUFHLEdBQUcsSUFBNUI7QUFFQSxXQUFLOEUsUUFBTCxDQUFjVixLQUFkLENBQW9CTSxJQUFwQixHQUEyQixDQUFDekUsR0FBRCxHQUFPLEtBQUtBLEdBQUwsQ0FBUzRILFdBQVQsR0FBdUIsQ0FBOUIsR0FBa0MsSUFBN0Q7QUFDQSxXQUFLL0MsUUFBTCxDQUFjVixLQUFkLENBQW9CMEQsS0FBcEIsR0FBNkIsS0FBSy9FLFdBQUwsQ0FBaUI4RSxXQUFqQixHQUErQixDQUFDN0gsR0FBakMsR0FBd0MsS0FBS0MsR0FBTCxDQUFTNEgsV0FBVCxHQUF1QixDQUEvRCxHQUFtRSxJQUEvRjtBQUNEO0FBekNIO0FBQUE7QUFBQSxzQ0EyQ3FCRSxLQTNDckIsRUEyQzRDQyxJQTNDNUMsRUEyQ3FGO0FBQ2pGLFVBQUkvSCxHQUFHLEdBQUcsS0FBS0EsR0FBZjtBQUNBLFVBQUlELEdBQUcsR0FBRyxLQUFLQSxHQUFmO0FBQ0EsVUFBSWlFLFFBQVEsR0FBRyxLQUFLQSxRQUFwQjtBQUNBLFVBQUlsQixXQUFXLEdBQUcsS0FBS0EsV0FBdkI7QUFDQSxVQUFJa0YsSUFBVSxHQUFHLElBQWpCO0FBQ0EsVUFBSUMsS0FBSjtBQUNBLFVBQUlwRCxRQUFRLEdBQUcsS0FBS0EsUUFBcEI7QUFDQSxVQUFJNkMsSUFBSjtBQUNBLFVBQUlRLFFBQUo7QUFDQSxVQUFJQyxhQUFKOztBQUVBLGVBQVNDLDBCQUFULEdBQTJDO0FBQ3pDLGVBQU9KLElBQUksQ0FBQ1AsYUFBWixLQUE4QixTQUE5QixHQUEwQ1UsYUFBYSxHQUFHSCxJQUFJLENBQUNQLGFBQUwsQ0FBbUJsRSxPQUE3RSxHQUF1RjRFLGFBQWEsR0FBR0gsSUFBSSxDQUFDUCxhQUE1RztBQUEwSDtBQUMxSCxlQUFPTyxJQUFJLENBQUNYLFdBQVosS0FBNEIsU0FBNUIsR0FBd0NhLFFBQVEsR0FBR0YsSUFBSSxDQUFDWCxXQUFMLENBQWlCOUQsT0FBcEUsR0FBOEV5RSxJQUFJLENBQUNYLFdBQW5GOztBQUVBLFlBQUlhLFFBQUosRUFBYztBQUNaRCxlQUFLLEdBQUdILEtBQUssQ0FBQ08sT0FBTixHQUFnQnJJLEdBQUcsQ0FBQ3NJLHFCQUFKLEdBQTRCQyxHQUE1QyxHQUFrRHZJLEdBQUcsQ0FBQzRILFdBQTlEO0FBQ0QsU0FGRCxNQUVPO0FBQ0xLLGVBQUssR0FBR0gsS0FBSyxDQUFDVSxPQUFOLEdBQWdCeEksR0FBRyxDQUFDc0kscUJBQUosR0FBNEI3RCxJQUFwRDtBQUNEOztBQUFBO0FBQ0Y7O0FBQUE7QUFFRDJELGdDQUEwQjs7QUFFMUIsVUFBSSxLQUFLNUYsVUFBTCxJQUFvQixLQUFLa0YsSUFBTCxLQUFjLEtBQXRDLEVBQTZDO0FBQzNDQSxZQUFJLEdBQUcsQ0FBQzVFLFdBQVcsQ0FBQzhFLFdBQVosR0FBMEI1SCxHQUFHLENBQUM0SCxXQUEvQixJQUE4QyxLQUFLcEYsVUFBbkQsR0FBZ0UsQ0FBQyxLQUFLa0YsSUFBN0U7QUFDRDs7QUFFRDlELGNBQVEsQ0FBQzZFLGdCQUFULENBQTBCLFdBQTFCLEVBQXVDQyxXQUF2QztBQUNBOUUsY0FBUSxDQUFDNkUsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUNFLFNBQXJDOztBQUVBLFVBQUlaLElBQUosRUFBVztBQUNUVyxtQkFBVyxDQUFFWCxJQUFGLENBQVg7QUFDRDs7QUFBQTs7QUFFRCxlQUFTVyxXQUFULENBQXNCWixLQUF0QixFQUE4QztBQUM1QyxZQUFJYyxPQUFKOztBQUVBLFlBQUlWLFFBQUosRUFBYztBQUNaVSxpQkFBTyxHQUFHOUYsV0FBVyxDQUFDOEUsV0FBWixJQUEyQkUsS0FBSyxDQUFDTyxPQUFOLEdBQWdCSixLQUFoQixHQUF3Qm5GLFdBQVcsQ0FBQ3dGLHFCQUFaLEdBQW9DQyxHQUF2RixDQUFWO0FBQ0QsU0FGRCxNQUVPO0FBQ0xLLGlCQUFPLEdBQUdkLEtBQUssQ0FBQ1UsT0FBTixHQUFnQlAsS0FBaEIsR0FBd0JuRixXQUFXLENBQUN3RixxQkFBWixHQUFvQzdELElBQXRFO0FBQ0Q7O0FBQUE7QUFFRCxZQUFJb0UsU0FBUyxHQUFHL0YsV0FBVyxDQUFDOEUsV0FBWixHQUEwQjVILEdBQUcsQ0FBQzRILFdBQTlDOztBQUVBLFlBQUlJLElBQUksQ0FBQ04sSUFBTCxLQUFjLEtBQWxCLEVBQXlCO0FBQ3ZCLGNBQUlrQixPQUFPLElBQUksQ0FBQ1osSUFBSSxDQUFDL0csdUJBQUwsQ0FBNkJqQixHQUE3QixDQUFpQ0EsR0FBbEMsR0FBd0MwSCxJQUFuRCxJQUEyRGtCLE9BQU8sSUFBSSxDQUFDWixJQUFJLENBQUMvRyx1QkFBTCxDQUE2QmpCLEdBQTdCLENBQWlDQSxHQUFsQyxHQUF3QzBILElBQWxILEVBQXdIO0FBQ3RIa0IsbUJBQU8sSUFBSSxDQUFDWixJQUFJLENBQUMvRyx1QkFBTCxDQUE2QmpCLEdBQTdCLENBQWlDQSxHQUFsQyxHQUF3QzBILElBQW5ELEdBQTBEa0IsT0FBTyxHQUFHLENBQUNaLElBQUksQ0FBQy9HLHVCQUFMLENBQTZCakIsR0FBN0IsQ0FBaUNBLEdBQWxDLEdBQXdDMEgsSUFBNUcsR0FBbUgsS0FBbkg7QUFDQWtCLG1CQUFPLElBQUksQ0FBQ1osSUFBSSxDQUFDL0csdUJBQUwsQ0FBNkJqQixHQUE3QixDQUFpQ0EsR0FBbEMsR0FBd0MwSCxJQUFuRCxHQUEwRGtCLE9BQU8sR0FBRyxDQUFDWixJQUFJLENBQUMvRyx1QkFBTCxDQUE2QmpCLEdBQTdCLENBQWlDQSxHQUFsQyxHQUF3QzBILElBQTVHLEdBQW1ILEtBQW5IO0FBQ0FvQiw2QkFBaUI7QUFDbEI7QUFDRixTQU5ELE1BTU87QUFDTEEsMkJBQWlCO0FBQ2xCOztBQUFBOztBQUVELGlCQUFTQSxpQkFBVCxHQUFtQztBQUVqQyxjQUFJRixPQUFPLEdBQUcsQ0FBZCxFQUFpQjtBQUNmQSxtQkFBTyxHQUFHLENBQVY7QUFDRDs7QUFBQTs7QUFFRCxjQUFJVCxhQUFKLEVBQW1CO0FBQ2pCLGdCQUFJUyxPQUFPLElBQUksQ0FBQ1osSUFBSSxDQUFDL0csdUJBQUwsQ0FBNkJsQixHQUE3QixDQUFpQyxLQUFqQyxDQUFELEdBQTJDQSxHQUFHLENBQUM2SCxXQUE5RCxFQUEyRTtBQUN6RWdCLHFCQUFPLEdBQUcsQ0FBQ1osSUFBSSxDQUFDL0csdUJBQUwsQ0FBNkJsQixHQUE3QixDQUFpQyxLQUFqQyxDQUFELEdBQTJDQSxHQUFHLENBQUM2SCxXQUF6RDtBQUNEOztBQUFBO0FBQ0YsV0FKRCxNQUlPO0FBQ0wsZ0JBQUlnQixPQUFPLEdBQUdDLFNBQWQsRUFBeUI7QUFDdkJELHFCQUFPLEdBQUdDLFNBQVY7QUFDRDs7QUFBQTtBQUNGOztBQUFBO0FBRUQ3SSxhQUFHLENBQUNtRSxLQUFKLENBQVVNLElBQVYsR0FBaUJtRSxPQUFPLEdBQUcsSUFBM0I7QUFDQS9ELGtCQUFRLENBQUNWLEtBQVQsQ0FBZU0sSUFBZixHQUFzQm1FLE9BQU8sR0FBRzVJLEdBQUcsQ0FBQzRILFdBQUosR0FBa0IsQ0FBNUIsR0FBZ0MsSUFBdEQ7O0FBRUEsY0FBSWdCLE9BQU8sS0FBS0csU0FBWixJQUF5QkYsU0FBUyxLQUFLRSxTQUEzQyxFQUFzRDtBQUNwRGYsZ0JBQUksQ0FBQy9HLHVCQUFMLENBQTZCLEtBQTdCLElBQXNDO0FBQUMsK0JBQVUySCxPQUFWLENBQUQ7QUFBc0IsdUNBQWtCOUYsV0FBVyxDQUFDOEUsV0FBWixHQUEwQjVILEdBQUcsQ0FBQzRILFdBQWhEO0FBQXRCLGFBQXRDO0FBQ0Q7O0FBQUE7QUFFRDVELGtCQUFRLENBQUNHLEtBQVQsQ0FBZU0sSUFBZixHQUFzQixDQUFFekUsR0FBRyxDQUFDNEgsV0FBSixHQUFrQjVELFFBQVEsQ0FBQzRELFdBQTVCLEdBQTJDLENBQTVDLElBQWlELENBQWpELEdBQXFELElBQTNFO0FBQ0Q7O0FBQUE7QUFDRjs7QUFBQTs7QUFFRCxlQUFTZSxTQUFULEdBQXFCO0FBQ25CL0UsZ0JBQVEsQ0FBQ29GLG1CQUFULENBQTZCLFNBQTdCLEVBQXdDTCxTQUF4QztBQUNBL0UsZ0JBQVEsQ0FBQ29GLG1CQUFULENBQTZCLFdBQTdCLEVBQTBDTixXQUExQztBQUNEO0FBQ0Y7QUFuSUg7QUFBQTtBQUFBLHNDQXFJcUJaLEtBcklyQixFQXFJNENDLElBckk1QyxFQXFJb0Y7QUFDaEYsVUFBSWhJLEdBQUcsR0FBRyxLQUFLQSxHQUFmO0FBQ0EsVUFBSUMsR0FBRyxHQUFHLEtBQUtBLEdBQWY7QUFDQSxVQUFJOEMsV0FBVyxHQUFHLEtBQUtBLFdBQXZCO0FBQ0EsVUFBSW1GLEtBQUo7QUFDQSxVQUFJaEUsUUFBUSxHQUFHLEtBQUtBLFFBQXBCO0FBQ0EsVUFBSStELElBQUksR0FBRyxJQUFYO0FBQ0EsVUFBSW5ELFFBQVEsR0FBRyxLQUFLQSxRQUFwQjtBQUNBLFVBQUk2QyxJQUFKO0FBQ0EsVUFBSVMsYUFBSjtBQUNBLFVBQUlELFFBQUo7O0FBRUEsVUFBSSxLQUFLMUYsVUFBTCxJQUFtQixLQUFLa0YsSUFBTCxLQUFjLEtBQXJDLEVBQTRDO0FBQzFDQSxZQUFJLEdBQUcsQ0FBQzVFLFdBQVcsQ0FBQzhFLFdBQVosR0FBMEI1SCxHQUFHLENBQUM0SCxXQUEvQixJQUE4QyxLQUFLcEYsVUFBbkQsR0FBZ0UsQ0FBQyxLQUFLa0YsSUFBN0U7QUFDRDs7QUFFRCxlQUFTVSwwQkFBVCxHQUEyQztBQUN6QyxlQUFPSixJQUFJLENBQUNQLGFBQVosS0FBOEIsU0FBOUIsR0FBMENVLGFBQWEsR0FBR0gsSUFBSSxDQUFDUCxhQUFMLENBQW1CbEUsT0FBN0UsR0FBdUY0RSxhQUFhLEdBQUdILElBQUksQ0FBQ1AsYUFBNUc7QUFBMEg7QUFDMUgsZUFBT08sSUFBSSxDQUFDWCxXQUFaLEtBQTRCLFNBQTVCLEdBQXdDYSxRQUFRLEdBQUdGLElBQUksQ0FBQ1gsV0FBTCxDQUFpQjlELE9BQXBFLEdBQThFeUUsSUFBSSxDQUFDWCxXQUFuRjs7QUFFQSxZQUFJYSxRQUFKLEVBQWM7QUFDWkQsZUFBSyxHQUFHSCxLQUFLLENBQUNPLE9BQU4sR0FBZ0J0SSxHQUFHLENBQUN1SSxxQkFBSixHQUE0QkMsR0FBNUMsR0FBa0R4SSxHQUFHLENBQUM2SCxXQUE5RDtBQUNELFNBRkQsTUFFTztBQUNMSyxlQUFLLEdBQUdILEtBQUssQ0FBQ1UsT0FBTixHQUFnQnpJLEdBQUcsQ0FBQ3VJLHFCQUFKLEdBQTRCN0QsSUFBcEQ7QUFDRDtBQUNGOztBQUFBO0FBRUQyRCxnQ0FBMEI7QUFFMUJ4RSxjQUFRLENBQUM2RSxnQkFBVCxDQUEwQixXQUExQixFQUF1Q0MsV0FBdkM7QUFDQTlFLGNBQVEsQ0FBQzZFLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDRSxTQUFyQzs7QUFFQSxVQUFJWixJQUFJLEtBQUtnQixTQUFiLEVBQXlCO0FBQ3ZCTCxtQkFBVyxDQUFFWCxJQUFGLENBQVg7QUFDRDs7QUFBQTs7QUFFRCxlQUFTVyxXQUFULENBQXNCWixLQUF0QixFQUE4QztBQUM1QyxZQUFJYyxPQUFKOztBQUVBLFlBQUlWLFFBQUosRUFBYztBQUNaVSxpQkFBTyxHQUFHOUYsV0FBVyxDQUFDOEUsV0FBWixJQUEyQkUsS0FBSyxDQUFDTyxPQUFOLEdBQWdCSixLQUFoQixHQUF3Qm5GLFdBQVcsQ0FBQ3dGLHFCQUFaLEdBQW9DQyxHQUF2RixDQUFWO0FBQ0QsU0FGRCxNQUVPO0FBQ0xLLGlCQUFPLEdBQUdkLEtBQUssQ0FBQ1UsT0FBTixHQUFnQlAsS0FBaEIsR0FBd0JuRixXQUFXLENBQUN3RixxQkFBWixHQUFvQzdELElBQXRFO0FBQ0Q7O0FBRUQsWUFBSW9FLFNBQVMsR0FBRy9GLFdBQVcsQ0FBQzhFLFdBQVosR0FBMEI3SCxHQUFHLENBQUM2SCxXQUE5Qzs7QUFFQSxZQUFJSSxJQUFJLENBQUNOLElBQUwsS0FBYyxLQUFsQixFQUF5QjtBQUN2QixjQUFJa0IsT0FBTyxJQUFJLENBQUNaLElBQUksQ0FBQy9HLHVCQUFMLENBQTZCbEIsR0FBN0IsQ0FBaUNBLEdBQWxDLEdBQXdDMkgsSUFBbkQsSUFBMkRrQixPQUFPLElBQUksQ0FBQ1osSUFBSSxDQUFDL0csdUJBQUwsQ0FBNkJsQixHQUE3QixDQUFpQ0EsR0FBbEMsR0FBd0MySCxJQUFsSCxFQUF3SDtBQUN0SGtCLG1CQUFPLElBQUksQ0FBQ1osSUFBSSxDQUFDL0csdUJBQUwsQ0FBNkJsQixHQUE3QixDQUFpQ0EsR0FBbEMsR0FBd0MySCxJQUFuRCxHQUEwRGtCLE9BQU8sR0FBRyxDQUFDWixJQUFJLENBQUMvRyx1QkFBTCxDQUE2QmxCLEdBQTdCLENBQWlDQSxHQUFsQyxHQUF3QzJILElBQTVHLEdBQW1ILEtBQW5IO0FBQ0FrQixtQkFBTyxJQUFJLENBQUNaLElBQUksQ0FBQy9HLHVCQUFMLENBQTZCbEIsR0FBN0IsQ0FBaUNBLEdBQWxDLEdBQXdDMkgsSUFBbkQsR0FBMERrQixPQUFPLEdBQUcsQ0FBQ1osSUFBSSxDQUFDL0csdUJBQUwsQ0FBNkJsQixHQUE3QixDQUFpQ0EsR0FBbEMsR0FBd0MySCxJQUE1RyxHQUFtSCxLQUFuSDtBQUNBb0IsNkJBQWlCO0FBQ2xCO0FBQ0YsU0FORCxNQU1PO0FBQ0xBLDJCQUFpQjtBQUNsQjs7QUFBQTs7QUFFRCxpQkFBU0EsaUJBQVQsR0FBbUM7QUFFakMsY0FBSUYsT0FBTyxHQUFHLENBQWQsRUFBaUI7QUFDZkEsbUJBQU8sR0FBRyxDQUFWO0FBQ0Q7O0FBQUE7O0FBRUQsY0FBSUEsT0FBTyxHQUFHQyxTQUFkLEVBQXlCO0FBQ3ZCRCxtQkFBTyxHQUFHQyxTQUFWO0FBQ0Q7O0FBQUE7O0FBRUQsY0FBSUQsT0FBTyxJQUFJLENBQUNaLElBQUksQ0FBQy9HLHVCQUFMLENBQTZCakIsR0FBN0IsQ0FBaUMsS0FBakMsQ0FBRCxHQUEyQ0EsR0FBRyxDQUFDNEgsV0FBOUQsRUFBMkU7QUFDekVnQixtQkFBTyxHQUFHLENBQUNaLElBQUksQ0FBQy9HLHVCQUFMLENBQTZCakIsR0FBN0IsQ0FBaUMsS0FBakMsQ0FBRCxHQUEyQ0EsR0FBRyxDQUFDNEgsV0FBekQ7QUFDRDs7QUFBQTtBQUVEN0gsYUFBRyxDQUFDb0UsS0FBSixDQUFVTSxJQUFWLEdBQWlCbUUsT0FBTyxHQUFHLElBQTNCO0FBQ0EvRCxrQkFBUSxDQUFDVixLQUFULENBQWUwRCxLQUFmLEdBQXdCL0UsV0FBVyxDQUFDOEUsV0FBWixHQUEwQmdCLE9BQTNCLEdBQXNDN0ksR0FBRyxDQUFDNkgsV0FBSixHQUFrQixDQUF4RCxHQUE0RCxJQUFuRjs7QUFFQSxjQUFJZ0IsT0FBTyxLQUFLRyxTQUFaLElBQXlCRixTQUFTLEtBQUtFLFNBQTNDLEVBQXNEO0FBQ3BEZixnQkFBSSxDQUFDL0csdUJBQUwsQ0FBNkIsS0FBN0IsSUFBc0M7QUFBQywrQkFBVTJILE9BQVYsQ0FBRDtBQUFzQix1Q0FBa0I5RixXQUFXLENBQUM4RSxXQUFaLEdBQTBCN0gsR0FBRyxDQUFDNkgsV0FBaEQ7QUFBdEIsYUFBdEM7QUFDRDs7QUFBQTtBQUVEM0Qsa0JBQVEsQ0FBQ0UsS0FBVCxDQUFlTSxJQUFmLEdBQXNCLENBQUUxRSxHQUFHLENBQUM2SCxXQUFKLEdBQWtCM0QsUUFBUSxDQUFDMkQsV0FBNUIsR0FBMkMsQ0FBNUMsSUFBaUQsQ0FBakQsR0FBcUQsSUFBM0U7QUFDRDs7QUFBQTtBQUVGOztBQUFBOztBQUVELGVBQVNlLFNBQVQsR0FBcUI7QUFDbkIvRSxnQkFBUSxDQUFDb0YsbUJBQVQsQ0FBNkIsU0FBN0IsRUFBd0NMLFNBQXhDO0FBQ0EvRSxnQkFBUSxDQUFDb0YsbUJBQVQsQ0FBNkIsV0FBN0IsRUFBMENOLFdBQTFDO0FBQ0Q7QUFDRjtBQTVOSDtBQUFBO0FBQUEsZ0NBOE5leEUsTUE5TmYsRUE4Tm1EK0UsSUE5Tm5ELEVBOE55RUMsUUE5TnpFLEVBOE55R0MsUUE5TnpHLEVBOE4rSTtBQUMzSSxVQUFJQyxZQUFKO0FBQ0EsYUFBT2xGLE1BQVAsS0FBa0IsU0FBbEIsR0FBK0JrRixZQUFZLEdBQUdsRixNQUE5QyxHQUF1RGtGLFlBQVksR0FBR2xGLE1BQU0sQ0FBQ1gsT0FBN0U7O0FBQ0EsVUFBSTZGLFlBQUosRUFBa0I7QUFDaEJILFlBQUksQ0FBQzlFLEtBQUwsQ0FBV2tGLE1BQVgsR0FBb0JKLElBQUksQ0FBQ3JCLFdBQUwsR0FBbUIsSUFBdkM7QUFDQSxhQUFLOUUsV0FBTCxDQUFpQnFCLEtBQWpCLENBQXVCbUYsU0FBdkIsR0FBbUMsZ0JBQW5DO0FBQ0EsYUFBS3hHLFdBQUwsQ0FBaUJxQixLQUFqQixDQUF1Qm9FLEdBQXZCLEdBQTZCVSxJQUFJLENBQUNyQixXQUFMLEdBQW1CLENBQW5CLEdBQXVCLElBQXBEO0FBQ0EsYUFBSzVELFFBQUwsQ0FBY0YsU0FBZCxDQUF3QnlGLE1BQXhCLENBQStCLHNCQUEvQjtBQUNBLGFBQUt0RixRQUFMLENBQWNILFNBQWQsQ0FBd0J5RixNQUF4QixDQUErQixzQkFBL0I7QUFDQSxhQUFLdkYsUUFBTCxDQUFjRixTQUFkLENBQXdCQyxHQUF4QixDQUE0Qiw4QkFBNUI7QUFDQSxhQUFLRSxRQUFMLENBQWNILFNBQWQsQ0FBd0JDLEdBQXhCLENBQTRCLDhCQUE1QjtBQUNBbUYsZ0JBQVEsQ0FBQ3BGLFNBQVQsQ0FBbUJ5RixNQUFuQixDQUEwQixnQkFBMUI7QUFDQUosZ0JBQVEsQ0FBQ3JGLFNBQVQsQ0FBbUJ5RixNQUFuQixDQUEwQixnQkFBMUI7QUFDQUwsZ0JBQVEsQ0FBQ3BGLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLHdCQUF2QjtBQUNBb0YsZ0JBQVEsQ0FBQ3JGLFNBQVQsQ0FBbUJDLEdBQW5CLENBQXVCLHdCQUF2QjtBQUNELE9BWkQsTUFZTztBQUNMa0YsWUFBSSxDQUFDOUUsS0FBTCxDQUFXa0YsTUFBWCxHQUFvQixFQUFwQjtBQUNBLGFBQUt2RyxXQUFMLENBQWlCcUIsS0FBakIsQ0FBdUJtRixTQUF2QixHQUFtQyxjQUFuQztBQUNBLGFBQUt4RyxXQUFMLENBQWlCcUIsS0FBakIsQ0FBdUJvRSxHQUF2QixHQUE2QixFQUE3QjtBQUNBLGFBQUt2RSxRQUFMLENBQWNGLFNBQWQsQ0FBd0J5RixNQUF4QixDQUErQiw4QkFBL0I7QUFDQSxhQUFLdEYsUUFBTCxDQUFjSCxTQUFkLENBQXdCeUYsTUFBeEIsQ0FBK0IsOEJBQS9CO0FBQ0EsYUFBS3ZGLFFBQUwsQ0FBY0YsU0FBZCxDQUF3QkMsR0FBeEIsQ0FBNEIsc0JBQTVCO0FBQ0EsYUFBS0UsUUFBTCxDQUFjSCxTQUFkLENBQXdCQyxHQUF4QixDQUE0QixzQkFBNUI7QUFDQW1GLGdCQUFRLENBQUNwRixTQUFULENBQW1CeUYsTUFBbkIsQ0FBMEIsd0JBQTFCO0FBQ0FKLGdCQUFRLENBQUNyRixTQUFULENBQW1CeUYsTUFBbkIsQ0FBMEIsd0JBQTFCO0FBQ0FMLGdCQUFRLENBQUNwRixTQUFULENBQW1CQyxHQUFuQixDQUF1QixnQkFBdkI7QUFDQW9GLGdCQUFRLENBQUNyRixTQUFULENBQW1CQyxHQUFuQixDQUF1QixnQkFBdkI7QUFDRDs7QUFBQTtBQUNGO0FBMVBIO0FBQUE7QUFBQSw2Q0E0UDJCM0MsTUE1UDNCLEVBNFBpRDtBQUM3QyxVQUFJZ0ksWUFBSjtBQUNBLGFBQU8sS0FBSzNCLGFBQVosS0FBOEIsU0FBOUIsR0FBMkMyQixZQUFZLEdBQUcsS0FBSzNCLGFBQS9ELEdBQStFMkIsWUFBWSxHQUFHLEtBQUszQixhQUFMLENBQW1CbEUsT0FBakg7O0FBQ0EsVUFBSW5DLE1BQU0sS0FBSyxLQUFmLEVBQXNCO0FBQ3BCLGFBQUtILHVCQUFMLENBQTZCLEtBQTdCLElBQXNDO0FBQUMsaUJBQU8sR0FBUjtBQUFhLG1DQUFpQixLQUFLNkIsV0FBTCxDQUFpQjhFLFdBQWpCLEdBQStCLEtBQUs1SCxHQUFMLENBQVM0SCxXQUF6RDtBQUFiLFNBQXRDO0FBQ0EsYUFBSzVILEdBQUwsQ0FBU21FLEtBQVQsQ0FBZU0sSUFBZixHQUFzQixLQUF0QjtBQUNBLGFBQUtJLFFBQUwsQ0FBY1YsS0FBZCxDQUFvQk0sSUFBcEIsR0FBMkIsSUFBSSxLQUFLekUsR0FBTCxDQUFTNEgsV0FBVCxHQUF1QixDQUEzQixHQUErQixJQUExRDtBQUNELE9BSkQsTUFJTztBQUNMLFlBQUl3QixZQUFKLEVBQWtCO0FBQ2hCLGVBQUtuSSx1QkFBTCxDQUE2QixLQUE3QixJQUFzQztBQUFDLDZCQUFVLEtBQUs2QixXQUFMLENBQWlCOEUsV0FBakIsR0FBK0IsS0FBSzVILEdBQUwsQ0FBUzRILFdBQWxELENBQUQ7QUFBa0UscUNBQWlCLEtBQUs5RSxXQUFMLENBQWlCOEUsV0FBakIsR0FBK0IsS0FBSzVILEdBQUwsQ0FBUzRILFdBQXpEO0FBQWxFLFdBQXRDO0FBQ0EsZUFBSzdILEdBQUwsQ0FBU29FLEtBQVQsQ0FBZU0sSUFBZixHQUFzQixLQUFLM0IsV0FBTCxDQUFpQjhFLFdBQWpCLEdBQStCLEtBQUs1SCxHQUFMLENBQVM0SCxXQUF4QyxHQUFzRCxJQUE1RTtBQUNBLGVBQUsvQyxRQUFMLENBQWNWLEtBQWQsQ0FBb0IwRCxLQUFwQixHQUE2QixLQUFLL0UsV0FBTCxDQUFpQjhFLFdBQWpCLEdBQStCLEtBQUs5RSxXQUFMLENBQWlCOEUsV0FBakQsR0FBZ0UsS0FBSzVILEdBQUwsQ0FBUzRILFdBQVQsR0FBdUIsQ0FBdkYsR0FBMkYsSUFBdkg7QUFDRCxTQUpELE1BSU87QUFDTCxlQUFLM0csdUJBQUwsQ0FBNkIsS0FBN0IsSUFBc0M7QUFBQyw2QkFBVSxLQUFLNkIsV0FBTCxDQUFpQjhFLFdBQWpCLEdBQStCLEtBQUs1SCxHQUFMLENBQVM0SCxXQUFsRCxDQUFEO0FBQWtFLHFDQUFpQixLQUFLOUUsV0FBTCxDQUFpQjhFLFdBQWpCLEdBQStCLEtBQUs1SCxHQUFMLENBQVM0SCxXQUF6RDtBQUFsRSxXQUF0QztBQUNBLGVBQUs1SCxHQUFMLENBQVNtRSxLQUFULENBQWVNLElBQWYsR0FBc0IsS0FBSzNCLFdBQUwsQ0FBaUI4RSxXQUFqQixHQUErQixLQUFLNUgsR0FBTCxDQUFTNEgsV0FBeEMsR0FBc0QsSUFBNUU7QUFDQSxlQUFLL0MsUUFBTCxDQUFjVixLQUFkLENBQW9CTSxJQUFwQixHQUE0QixLQUFLM0IsV0FBTCxDQUFpQjhFLFdBQWpCLEdBQStCLEtBQUs1SCxHQUFMLENBQVM0SCxXQUF6QyxHQUF3RCxLQUFLNUgsR0FBTCxDQUFTNEgsV0FBVCxHQUF1QixDQUEvRSxHQUFrRixJQUE3RztBQUNEOztBQUFBO0FBQ0Y7O0FBQUE7QUFDRjtBQTlRSDtBQUFBO0FBQUEsMERBZ1J3Q3hHLE1BaFJ4QyxFQWdSd0RuQixLQWhSeEQsRUFnUnVFNEIsU0FoUnZFLEVBZ1IwRjJILE9BaFIxRixFQWdSaUg7QUFDN0csVUFBSUosWUFBSjtBQUNBLGFBQU8sS0FBSzNCLGFBQVosS0FBOEIsU0FBOUIsR0FBMkMyQixZQUFZLEdBQUcsS0FBSzNCLGFBQS9ELEdBQStFMkIsWUFBWSxHQUFHLEtBQUszQixhQUFMLENBQW1CbEUsT0FBakg7O0FBQ0EsVUFBSW5DLE1BQU0sS0FBSyxLQUFYLElBQW9CZ0ksWUFBeEIsRUFBc0M7QUFDcEMsWUFBSXBKLEdBQVcsR0FBSSxDQUFDLEtBQUs4QyxXQUFMLENBQWlCOEUsV0FBakIsR0FBK0IsS0FBSzVILEdBQUwsQ0FBUzRILFdBQXpDLElBQXdEL0YsU0FBekQsSUFBdUU1QixLQUFLLEdBQUd1SixPQUEvRSxJQUEwRixFQUE1Rzs7QUFFQSxZQUFJLENBQUN4SixHQUFELElBQVEsQ0FBQyxLQUFLaUIsdUJBQUwsQ0FBNkJsQixHQUE3QixDQUFpQ0EsR0FBbEMsR0FBd0MsS0FBS0MsR0FBTCxDQUFTNEgsV0FBN0QsRUFBMEU7QUFDeEU1SCxhQUFHLEdBQUcsQ0FBQyxLQUFLaUIsdUJBQUwsQ0FBNkJsQixHQUE3QixDQUFpQ0EsR0FBbEMsR0FBd0MsS0FBS0MsR0FBTCxDQUFTNEgsV0FBakQsR0FBK0QsRUFBckU7QUFDRCxTQUZELE1BRU8sSUFBRyxDQUFDNUgsR0FBRCxHQUFPLENBQVYsRUFBYTtBQUNsQkEsYUFBRyxHQUFHLEdBQU47QUFDRDs7QUFBQTtBQUVELGFBQUtpQix1QkFBTCxDQUE2QixLQUE3QixJQUFzQztBQUFDLGlCQUFPakIsR0FBUjtBQUFhLG1DQUFrQixLQUFLOEMsV0FBTCxDQUFpQjhFLFdBQWpCLEdBQStCLEtBQUs1SCxHQUFMLENBQVM0SCxXQUExRDtBQUFiLFNBQXRDO0FBQ0EsYUFBSzVILEdBQUwsQ0FBU21FLEtBQVQsQ0FBZU0sSUFBZixHQUFzQnpFLEdBQUcsR0FBRyxJQUE1QjtBQUNBLGFBQUs2RSxRQUFMLENBQWNWLEtBQWQsQ0FBb0JNLElBQXBCLEdBQTJCLENBQUN6RSxHQUFELEdBQU8sS0FBS0EsR0FBTCxDQUFTNEgsV0FBVCxHQUF1QixDQUE5QixHQUFrQyxJQUE3RDtBQUNELE9BWkQsTUFZTyxJQUFJeEcsTUFBTSxLQUFLLEtBQWYsRUFBc0I7QUFDM0IsWUFBSXBCLElBQVcsR0FBSSxDQUFDLEtBQUs4QyxXQUFMLENBQWlCOEUsV0FBakIsR0FBK0IsS0FBSzVILEdBQUwsQ0FBUzRILFdBQXpDLElBQXdEL0YsU0FBekQsSUFBdUU1QixLQUFLLEdBQUd1SixPQUEvRSxJQUEwRixFQUE1Rzs7QUFFQSxZQUFHLENBQUN4SixJQUFELEdBQU8sQ0FBVixFQUFhO0FBQ1hBLGNBQUcsR0FBRyxHQUFOO0FBQ0QsU0FGRCxNQUVPLElBQUksQ0FBQ0EsSUFBRCxHQUFPLEtBQUs4QyxXQUFMLENBQWlCOEUsV0FBakIsR0FBK0IsS0FBSzVILEdBQUwsQ0FBUzRILFdBQW5ELEVBQWdFO0FBQ3JFNUgsY0FBRyxHQUFJLEtBQUs4QyxXQUFMLENBQWlCOEUsV0FBakIsR0FBK0IsS0FBSzVILEdBQUwsQ0FBUzRILFdBQXpDLEdBQXdELEVBQTlEO0FBQ0Q7O0FBQUE7QUFFRCxhQUFLM0csdUJBQUwsQ0FBNkIsS0FBN0IsSUFBc0M7QUFBQyxpQkFBT2pCLElBQVI7QUFBYSxtQ0FBa0IsS0FBSzhDLFdBQUwsQ0FBaUI4RSxXQUFqQixHQUErQixLQUFLNUgsR0FBTCxDQUFTNEgsV0FBMUQ7QUFBYixTQUF0QztBQUNBLGFBQUs1SCxHQUFMLENBQVNtRSxLQUFULENBQWVNLElBQWYsR0FBc0J6RSxJQUFHLEdBQUcsSUFBNUI7QUFDQSxhQUFLNkUsUUFBTCxDQUFjVixLQUFkLENBQW9CTSxJQUFwQixHQUEyQixDQUFDekUsSUFBRCxHQUFPLEtBQUtBLEdBQUwsQ0FBUzRILFdBQVQsR0FBdUIsQ0FBOUIsR0FBa0MsSUFBN0Q7QUFDRCxPQVpNLE1BWUEsSUFBSXhHLE1BQU0sS0FBSyxLQUFmLEVBQXNCO0FBQzNCLFlBQUlyQixHQUFXLEdBQUksQ0FBQyxLQUFLK0MsV0FBTCxDQUFpQjhFLFdBQWpCLEdBQStCLEtBQUs3SCxHQUFMLENBQVM2SCxXQUF6QyxJQUF3RC9GLFNBQXpELElBQXVFNUIsS0FBSyxHQUFHdUosT0FBL0UsSUFBMEYsRUFBNUc7O0FBRUEsWUFBSSxDQUFDekosR0FBRCxJQUFRLENBQUMsS0FBS2tCLHVCQUFMLENBQTZCakIsR0FBN0IsQ0FBaUNBLEdBQWxDLEdBQXdDLEtBQUtBLEdBQUwsQ0FBUzRILFdBQTdELEVBQTBFO0FBQ3hFN0gsYUFBRyxHQUFHLENBQUMsS0FBS2tCLHVCQUFMLENBQTZCakIsR0FBN0IsQ0FBaUNBLEdBQWxDLEdBQXdDLEtBQUtELEdBQUwsQ0FBUzZILFdBQWpELEdBQStELEVBQXJFO0FBQ0QsU0FGRCxNQUVPLElBQUcsQ0FBQzdILEdBQUQsR0FBTyxLQUFLK0MsV0FBTCxDQUFpQjhFLFdBQWpCLEdBQStCLEtBQUs1SCxHQUFMLENBQVM0SCxXQUFsRCxFQUE4RDtBQUNuRTdILGFBQUcsR0FBSSxLQUFLK0MsV0FBTCxDQUFpQjhFLFdBQWpCLEdBQStCLEtBQUs1SCxHQUFMLENBQVM0SCxXQUF6QyxHQUF3RCxFQUE5RDtBQUNEOztBQUFBO0FBRUQsYUFBSzNHLHVCQUFMLENBQTZCLEtBQTdCLElBQXNDO0FBQUMsaUJBQU9sQixHQUFSO0FBQWEsbUNBQWtCLEtBQUsrQyxXQUFMLENBQWlCOEUsV0FBakIsR0FBK0IsS0FBSzdILEdBQUwsQ0FBUzZILFdBQTFEO0FBQWIsU0FBdEM7QUFDQSxhQUFLN0gsR0FBTCxDQUFTb0UsS0FBVCxDQUFlTSxJQUFmLEdBQXNCMUUsR0FBRyxHQUFHLElBQTVCO0FBQ0EsYUFBSzhFLFFBQUwsQ0FBY1YsS0FBZCxDQUFvQjBELEtBQXBCLEdBQTZCLEtBQUsvRSxXQUFMLENBQWlCOEUsV0FBakIsR0FBK0IsQ0FBQzdILEdBQWpDLEdBQXdDLEtBQUtDLEdBQUwsQ0FBUzRILFdBQVQsR0FBdUIsQ0FBL0QsR0FBbUUsSUFBL0Y7QUFDRDtBQUNGO0FBeFRIO0FBQUE7QUFBQSwrQ0EwVDZCeEcsTUExVDdCLEVBMFQ2Q25CLEtBMVQ3QyxFQTBUNEQ0QixTQTFUNUQsRUEwVCtFMkgsT0ExVC9FLEVBMFRzRztBQUNsR0MsYUFBTyxDQUFDQyxHQUFSLENBQVl0SSxNQUFaLEVBQW9CbkIsS0FBcEI7O0FBQ0EsVUFBSW1CLE1BQU0sS0FBSyxLQUFmLEVBQXNCO0FBQ3BCLFlBQUlwQixHQUFXLEdBQUdKLE1BQU0sQ0FBRSxDQUFDLEtBQUtrRCxXQUFMLENBQWlCOEUsV0FBakIsR0FBK0IsS0FBSzVILEdBQUwsQ0FBUzRILFdBQXpDLElBQXdELENBQUMvRixTQUExRCxJQUF3RSxDQUFDNUIsS0FBRCxHQUFTLENBQUN1SixPQUFsRixDQUFELENBQXhCOztBQUVBLFlBQUcsQ0FBQ3hKLEdBQUQsR0FBTyxDQUFWLEVBQWE7QUFDWEEsYUFBRyxHQUFHLEdBQU47QUFDRCxTQUZELE1BRU8sSUFBSSxDQUFDQSxHQUFELEdBQU8sS0FBSzhDLFdBQUwsQ0FBaUI4RSxXQUFqQixHQUErQixLQUFLNUgsR0FBTCxDQUFTNEgsV0FBbkQsRUFBZ0U7QUFDckU1SCxhQUFHLEdBQUdKLE1BQU0sQ0FBRSxLQUFLa0QsV0FBTCxDQUFpQjhFLFdBQWpCLEdBQStCLEtBQUs1SCxHQUFMLENBQVM0SCxXQUExQyxDQUFaO0FBQ0Q7O0FBQUE7QUFFRCxhQUFLNUgsR0FBTCxDQUFTbUUsS0FBVCxDQUFlTSxJQUFmLEdBQXNCekUsR0FBRyxHQUFHLElBQTVCO0FBQ0EsYUFBS2lCLHVCQUFMLENBQTZCLEtBQTdCLElBQXNDO0FBQUMsMkJBQVVqQixHQUFWLENBQUQ7QUFBa0IsbUNBQWtCLEtBQUs4QyxXQUFMLENBQWlCOEUsV0FBakIsR0FBK0IsS0FBSzVILEdBQUwsQ0FBUzRILFdBQTFEO0FBQWxCLFNBQXRDO0FBQ0EsYUFBSy9DLFFBQUwsQ0FBY1YsS0FBZCxDQUFvQk0sSUFBcEIsR0FBMkIsQ0FBQ3pFLEdBQUQsR0FBTyxLQUFLQSxHQUFMLENBQVM0SCxXQUFULEdBQXVCLENBQTlCLEdBQWtDLElBQTdEO0FBQ0QsT0FaRCxNQVlPLElBQUl4RyxNQUFNLEtBQUssS0FBZixFQUFzQjtBQUMzQixZQUFJckIsR0FBVyxHQUFHSCxNQUFNLENBQUUsQ0FBQyxLQUFLa0QsV0FBTCxDQUFpQjhFLFdBQWpCLEdBQStCLEtBQUs3SCxHQUFMLENBQVM2SCxXQUF6QyxJQUF3RCxDQUFDL0YsU0FBMUQsSUFBd0UsQ0FBQzVCLEtBQUQsR0FBUyxDQUFDdUosT0FBbEYsQ0FBRCxDQUF4Qjs7QUFFQSxZQUFJLENBQUN6SixHQUFELElBQVEsQ0FBQyxLQUFLa0IsdUJBQUwsQ0FBNkJqQixHQUE3QixDQUFpQ0EsR0FBbEMsR0FBd0MsS0FBS0EsR0FBTCxDQUFTNEgsV0FBN0QsRUFBMEU7QUFDeEU3SCxhQUFHLEdBQUdILE1BQU0sQ0FBQyxDQUFDLEtBQUtxQix1QkFBTCxDQUE2QmpCLEdBQTdCLENBQWlDQSxHQUFsQyxHQUF3QyxLQUFLRCxHQUFMLENBQVM2SCxXQUFsRCxDQUFaO0FBQ0QsU0FGRCxNQUVPLElBQUcsQ0FBQzdILEdBQUQsR0FBTyxLQUFLK0MsV0FBTCxDQUFpQjhFLFdBQWpCLEdBQStCLEtBQUs1SCxHQUFMLENBQVM0SCxXQUFsRCxFQUE4RDtBQUNuRTdILGFBQUcsR0FBR0gsTUFBTSxDQUFFLEtBQUtrRCxXQUFMLENBQWlCOEUsV0FBakIsR0FBK0IsS0FBSzVILEdBQUwsQ0FBUzRILFdBQTFDLENBQVo7QUFDRDs7QUFBQTtBQUNELGFBQUszRyx1QkFBTCxDQUE2QixLQUE3QixJQUFzQztBQUFDLDJCQUFVbEIsR0FBVixDQUFEO0FBQWtCLG1DQUFrQixLQUFLK0MsV0FBTCxDQUFpQjhFLFdBQWpCLEdBQStCLEtBQUs3SCxHQUFMLENBQVM2SCxXQUExRDtBQUFsQixTQUF0QztBQUNBLGFBQUs3SCxHQUFMLENBQVNvRSxLQUFULENBQWVNLElBQWYsR0FBc0IxRSxHQUFHLEdBQUcsSUFBNUI7QUFDQSxhQUFLOEUsUUFBTCxDQUFjVixLQUFkLENBQW9CMEQsS0FBcEIsR0FBNkIsS0FBSy9FLFdBQUwsQ0FBaUI4RSxXQUFqQixHQUErQixDQUFDN0gsR0FBakMsR0FBd0MsS0FBS0MsR0FBTCxDQUFTNEgsV0FBVCxHQUF1QixDQUEvRCxHQUFtRSxJQUEvRjtBQUNEOztBQUFBO0FBQ0Y7QUFwVkg7QUFBQTtBQUFBLCtDQXNWNkIzSCxLQXRWN0IsRUFzVjRDMEosS0F0VjVDLEVBc1ZxRTlILFNBdFZyRSxFQXNWOEY7QUFDMUYsVUFBSStILGFBQXFCLEdBQUcsS0FBSzlHLFdBQUwsQ0FBaUI4RSxXQUFqQixHQUErQixDQUFDL0YsU0FBNUQ7QUFDQSxVQUFJZ0ksT0FBZSxHQUFHaEssSUFBSSxDQUFDQyxLQUFMLENBQVcsSUFBSThKLGFBQWYsQ0FBdEI7O0FBQ0EsVUFBSUMsT0FBTyxHQUFHLENBQWQsRUFBaUI7QUFDZkEsZUFBTyxHQUFHLENBQVY7QUFDRDs7QUFBQTtBQUNERixXQUFLLENBQUNwRSxZQUFOLENBQW1CLEtBQW5CLEVBQTBCM0YsTUFBTSxDQUFDaUssT0FBRCxDQUFoQztBQUNBRixXQUFLLENBQUNwRSxZQUFOLENBQW1CLEtBQW5CLEVBQTBCM0YsTUFBTSxDQUFDLENBQUNpQyxTQUFELEdBQWEsQ0FBZCxDQUFoQzs7QUFDQSxVQUFJNUIsS0FBSyxLQUFLLEtBQWQsRUFBcUI7QUFDbkIwSixhQUFLLENBQUMxSixLQUFOLEdBQWNMLE1BQU0sQ0FBQ2lLLE9BQUQsQ0FBcEI7QUFDRCxPQUZELE1BRU87QUFDTCxZQUFJLENBQUM1SixLQUFELElBQVU0SixPQUFkLEVBQXVCO0FBQ3JCRixlQUFLLENBQUMxSixLQUFOLEdBQWNMLE1BQU0sQ0FBQ2lLLE9BQUQsQ0FBcEI7QUFDQSxlQUFLbkMsSUFBTCxHQUFZLEtBQVo7QUFDRCxTQUhELE1BR08sSUFBSSxDQUFDekgsS0FBRCxHQUFTLENBQUM0QixTQUFELEdBQWEsQ0FBMUIsRUFBNkI7QUFDbEM4SCxlQUFLLENBQUMxSixLQUFOLEdBQWNMLE1BQU0sQ0FBQyxDQUFDaUMsU0FBRCxHQUFhLENBQWQsQ0FBcEI7QUFDQSxlQUFLNkYsSUFBTCxHQUFZOUgsTUFBTSxDQUFDLENBQUNpQyxTQUFELEdBQWEsQ0FBZCxDQUFsQjtBQUNELFNBSE0sTUFHQTtBQUNMOEgsZUFBSyxDQUFDMUosS0FBTixHQUFjQSxLQUFkO0FBQ0EsZUFBS3lILElBQUwsR0FBWXpILEtBQVo7QUFDRDs7QUFBQTtBQUNGOztBQUFBO0FBQ0Y7QUE1V0g7O0FBQUE7QUFBQTtBQTZXQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFlNLElBQU02SixXQUFiO0FBSUUseUJBQWU7QUFBQTs7QUFBQTs7QUFDYixRQUFJQyxJQUFvQixHQUFHbkcsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQTNCO0FBQ0FrRyxRQUFJLENBQUNqRyxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsYUFBbkI7QUFDQSxTQUFLUCxLQUFMLEdBQWF1RyxJQUFiO0FBQ0Q7O0FBUkg7QUFBQTtBQUFBLGtDQVUrQjtBQUMzQixhQUFPLEtBQUt2RyxLQUFaO0FBQ0Q7QUFaSDs7QUFBQTtBQUFBO0FBY0MsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pNLElBQU13RyxVQUFiO0FBT0Usd0JBQWM7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDWixRQUFJQyxPQUF5QixHQUFHckcsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWhDO0FBQ0EsUUFBSXFHLE9BQXlCLEdBQUd0RyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBaEM7QUFDQSxRQUFJc0csT0FBeUIsR0FBR3ZHLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixPQUF2QixDQUFoQztBQUNBLFFBQUl1RyxPQUF5QixHQUFHeEcsUUFBUSxDQUFDQyxhQUFULENBQXVCLE9BQXZCLENBQWhDO0FBQ0EsUUFBSXdHLE9BQXlCLEdBQUd6RyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBaEM7QUFDQW9HLFdBQU8sQ0FBQ25HLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLCtCQUF0QixFQUF1RCxrQ0FBdkQ7QUFDQW1HLFdBQU8sQ0FBQ3BHLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLCtCQUF0QixFQUF1RCxrQ0FBdkQ7QUFDQW9HLFdBQU8sQ0FBQ3JHLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLCtCQUF0QixFQUF1RCxrQ0FBdkQ7QUFDQXFHLFdBQU8sQ0FBQ3RHLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLCtCQUF0QixFQUF1RCxrQ0FBdkQ7QUFDQXNHLFdBQU8sQ0FBQ3ZHLFNBQVIsQ0FBa0JDLEdBQWxCLENBQXNCLCtCQUF0QixFQUF1RCxrQ0FBdkQ7QUFDQSxTQUFLdUcsWUFBTCxHQUFvQkwsT0FBcEI7QUFDQSxTQUFLTSxZQUFMLEdBQW9CTCxPQUFwQjtBQUNBLFNBQUtNLFlBQUwsR0FBb0JMLE9BQXBCO0FBQ0EsU0FBS00sWUFBTCxHQUFvQkwsT0FBcEI7QUFDQSxTQUFLTSxZQUFMLEdBQW9CTCxPQUFwQjtBQUNEOztBQXZCSDtBQUFBO0FBQUEsa0NBeUJnQk0sTUF6QmhCLEVBeUJzRDtBQUNsRCxXQUFLTCxZQUFMLENBQWtCdEYsU0FBbEIsR0FBOEIyRixNQUFNLENBQUMsSUFBRCxDQUFwQztBQUNBLFdBQUtKLFlBQUwsQ0FBa0J2RixTQUFsQixHQUE4QjJGLE1BQU0sQ0FBQyxJQUFELENBQXBDO0FBQ0EsV0FBS0gsWUFBTCxDQUFrQnhGLFNBQWxCLEdBQThCMkYsTUFBTSxDQUFDLElBQUQsQ0FBcEM7QUFDQSxXQUFLRixZQUFMLENBQWtCekYsU0FBbEIsR0FBOEIyRixNQUFNLENBQUMsSUFBRCxDQUFwQztBQUNBLFdBQUtELFlBQUwsQ0FBa0IxRixTQUFsQixHQUE4QjJGLE1BQU0sQ0FBQyxJQUFELENBQXBDO0FBQ0Q7QUEvQkg7QUFBQTtBQUFBLDJDQWlDeUJDLE1BakN6QixFQWlDaURDLE1BakNqRCxFQWlDK0U7QUFDM0UsV0FBS1AsWUFBTCxDQUFrQm5HLEtBQWxCLENBQXdCMEQsS0FBeEIsR0FBaUMsQ0FBQytDLE1BQU0sQ0FBQ2hELFdBQVAsR0FBcUJpRCxNQUFNLENBQUNqRCxXQUE3QixJQUE0QyxJQUE3QyxHQUFzRCxLQUFLMEMsWUFBTCxDQUFrQjFDLFdBQWxCLEdBQWdDLENBQXRGLEdBQTRGaUQsTUFBTSxDQUFDakQsV0FBUCxHQUFxQixDQUFqSCxHQUFzSCxJQUF0SjtBQUNBLFdBQUs4QyxZQUFMLENBQWtCdkcsS0FBbEIsQ0FBd0JNLElBQXhCLEdBQWdDLENBQUNtRyxNQUFNLENBQUNoRCxXQUFQLEdBQXFCaUQsTUFBTSxDQUFDakQsV0FBN0IsSUFBNEMsSUFBN0MsR0FBc0QsS0FBSzhDLFlBQUwsQ0FBa0I5QyxXQUFsQixHQUFnQyxDQUF0RixHQUE0RmlELE1BQU0sQ0FBQ2pELFdBQVAsR0FBcUIsQ0FBakgsR0FBc0gsSUFBcko7QUFDQSxXQUFLMkMsWUFBTCxDQUFrQnBHLEtBQWxCLENBQXdCMEQsS0FBeEIsR0FBaUMsQ0FBQytDLE1BQU0sQ0FBQ2hELFdBQVAsR0FBcUJpRCxNQUFNLENBQUNqRCxXQUE3QixJQUE0QyxJQUE3QyxHQUFzRCxLQUFLMkMsWUFBTCxDQUFrQjNDLFdBQWxCLEdBQWdDLENBQXRGLEdBQTRGaUQsTUFBTSxDQUFDakQsV0FBUCxHQUFxQixDQUFqSCxHQUFzSCxJQUF0SjtBQUNBLFdBQUs2QyxZQUFMLENBQWtCdEcsS0FBbEIsQ0FBd0JNLElBQXhCLEdBQWdDLENBQUNtRyxNQUFNLENBQUNoRCxXQUFQLEdBQXFCaUQsTUFBTSxDQUFDakQsV0FBN0IsSUFBNEMsSUFBN0MsR0FBc0QsS0FBSzZDLFlBQUwsQ0FBa0I3QyxXQUFsQixHQUFnQyxDQUF0RixHQUE0RmlELE1BQU0sQ0FBQ2pELFdBQVAsR0FBcUIsQ0FBakgsR0FBc0gsSUFBcko7QUFDQSxXQUFLNEMsWUFBTCxDQUFrQnJHLEtBQWxCLENBQXdCTSxJQUF4QixHQUFnQyxDQUFDbUcsTUFBTSxDQUFDaEQsV0FBUCxHQUFxQmlELE1BQU0sQ0FBQ2pELFdBQTdCLElBQTRDLElBQTdDLEdBQXNELEtBQUs0QyxZQUFMLENBQWtCNUMsV0FBbEIsR0FBZ0MsQ0FBdEYsR0FBNEZpRCxNQUFNLENBQUNqRCxXQUFQLEdBQXFCLENBQWpILEdBQXNILElBQXJKO0FBQ0Q7QUF2Q0g7QUFBQTtBQUFBLHNDQXlDb0IxRCxNQXpDcEIsRUF5Q29EO0FBQ2hELFVBQUlBLE1BQU0sQ0FBQ1gsT0FBUCxLQUFtQixJQUF2QixFQUE2QjtBQUMzQixhQUFLK0csWUFBTCxDQUFrQm5HLEtBQWxCLENBQXdCQyxPQUF4QixHQUFrQyxRQUFsQztBQUNBLGFBQUttRyxZQUFMLENBQWtCcEcsS0FBbEIsQ0FBd0JDLE9BQXhCLEdBQWtDLFFBQWxDO0FBQ0EsYUFBS29HLFlBQUwsQ0FBa0JyRyxLQUFsQixDQUF3QkMsT0FBeEIsR0FBa0MsUUFBbEM7QUFDQSxhQUFLcUcsWUFBTCxDQUFrQnRHLEtBQWxCLENBQXdCQyxPQUF4QixHQUFrQyxRQUFsQztBQUNBLGFBQUtzRyxZQUFMLENBQWtCdkcsS0FBbEIsQ0FBd0JDLE9BQXhCLEdBQWtDLFFBQWxDO0FBQ0QsT0FORCxNQU1PO0FBQ0wsYUFBS2tHLFlBQUwsQ0FBa0JuRyxLQUFsQixDQUF3QkMsT0FBeEIsR0FBa0MsTUFBbEM7QUFDQSxhQUFLbUcsWUFBTCxDQUFrQnBHLEtBQWxCLENBQXdCQyxPQUF4QixHQUFrQyxNQUFsQztBQUNBLGFBQUtvRyxZQUFMLENBQWtCckcsS0FBbEIsQ0FBd0JDLE9BQXhCLEdBQWtDLE1BQWxDO0FBQ0EsYUFBS3FHLFlBQUwsQ0FBa0J0RyxLQUFsQixDQUF3QkMsT0FBeEIsR0FBa0MsTUFBbEM7QUFDQSxhQUFLc0csWUFBTCxDQUFrQnZHLEtBQWxCLENBQXdCQyxPQUF4QixHQUFrQyxNQUFsQztBQUNEOztBQUFBO0FBQ0Y7QUF2REg7QUFBQTtBQUFBLGdEQXlEOEJpRCxXQXpEOUIsRUF5RDBEO0FBQ3RELFVBQUdBLFdBQVcsS0FBSyxJQUFuQixFQUF5QjtBQUN2QixhQUFLaUQsWUFBTCxDQUFrQnhHLFNBQWxCLENBQTRCQyxHQUE1QixDQUFnQywwQ0FBaEM7QUFDQSxhQUFLd0csWUFBTCxDQUFrQnpHLFNBQWxCLENBQTRCQyxHQUE1QixDQUFnQywwQ0FBaEM7QUFDQSxhQUFLeUcsWUFBTCxDQUFrQjFHLFNBQWxCLENBQTRCQyxHQUE1QixDQUFnQywwQ0FBaEM7QUFDQSxhQUFLMEcsWUFBTCxDQUFrQjNHLFNBQWxCLENBQTRCQyxHQUE1QixDQUFnQywwQ0FBaEM7QUFDQSxhQUFLMkcsWUFBTCxDQUFrQjVHLFNBQWxCLENBQTRCQyxHQUE1QixDQUFnQywwQ0FBaEM7QUFDRCxPQU5ELE1BTU87QUFDTCxhQUFLdUcsWUFBTCxDQUFrQnhHLFNBQWxCLENBQTRCeUYsTUFBNUIsQ0FBbUMsMENBQW5DO0FBQ0EsYUFBS2dCLFlBQUwsQ0FBa0J6RyxTQUFsQixDQUE0QnlGLE1BQTVCLENBQW1DLDBDQUFuQztBQUNBLGFBQUtpQixZQUFMLENBQWtCMUcsU0FBbEIsQ0FBNEJ5RixNQUE1QixDQUFtQywwQ0FBbkM7QUFDQSxhQUFLa0IsWUFBTCxDQUFrQjNHLFNBQWxCLENBQTRCeUYsTUFBNUIsQ0FBbUMsMENBQW5DO0FBQ0EsYUFBS21CLFlBQUwsQ0FBa0I1RyxTQUFsQixDQUE0QnlGLE1BQTVCLENBQW1DLDBDQUFuQztBQUNEOztBQUFBO0FBQ0Y7QUF2RUg7O0FBQUE7QUFBQTtBQXdFQyxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUVNLElBQU11QixVQUFiO0FBSUUsc0JBQWFILE1BQWIsRUFBOEM7QUFBQTs7QUFBQTs7QUFBQTs7QUFDNUMsUUFBSTNLLEdBQXdCLEdBQUc0RCxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsR0FBdkIsQ0FBL0I7QUFDQSxRQUFJOUQsR0FBd0IsR0FBRzZELFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixHQUF2QixDQUEvQjtBQUNBN0QsT0FBRyxDQUFDZ0YsU0FBSixHQUFnQjJGLE1BQU0sQ0FBQzNLLEdBQXZCO0FBQ0FELE9BQUcsQ0FBQ2lGLFNBQUosR0FBZ0IyRixNQUFNLENBQUM1SyxHQUF2QjtBQUNBQyxPQUFHLENBQUM4RCxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsZ0JBQWxCO0FBQ0FoRSxPQUFHLENBQUMrRCxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsZ0JBQWxCO0FBQ0EsU0FBS21GLFFBQUwsR0FBZ0JsSixHQUFoQjtBQUNBLFNBQUttSixRQUFMLEdBQWdCcEosR0FBaEI7QUFDRDs7QUFiSDtBQUFBO0FBQUEsa0NBZXdCO0FBQ3BCLGFBQU87QUFBQ0MsV0FBRyxFQUFFLEtBQUtrSixRQUFYO0FBQXFCbkosV0FBRyxFQUFFLEtBQUtvSjtBQUEvQixPQUFQO0FBQ0Q7QUFqQkg7O0FBQUE7QUFBQSxJOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0M7QUFLQTtBQWFBO0FBRU0sSUFBTTRCLElBQWI7QUEwQkUsZ0JBQVkzSixNQUFaLEVBQW9DZCxRQUFwQyxFQUF3RDtBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBOztBQUFBLCtDQTRDakI7QUFDckMsOEJBQXdCLEtBRGE7QUFFckMsb0JBQWMsS0FGdUI7QUFHckMsK0JBQXlCLEtBSFk7QUFJckMsK0JBQXlCLEtBSlk7QUFLckMsMEJBQW9CLEtBTGlCO0FBTXJDLGdDQUEwQixLQU5XO0FBT3JDLGdDQUEwQixLQVBXO0FBUXJDLG9CQUFjLEtBUnVCO0FBU3JDLGtDQUE0QixFQVRTO0FBVXJDLG1DQUE2QjtBQVZRLEtBNUNpQjs7QUFDdEQsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDQSxTQUFLMEgsSUFBTCxHQUFZNUcsTUFBWjtBQUNBLFNBQUswQixXQUFMLEdBQW1CLElBQUlnSCxvRUFBSixHQUFrQmtCLFdBQWxCLEVBQW5CO0FBRUEsUUFBSXhELE9BQWdCLEdBQUcsSUFBSTlDLDJEQUFKLEVBQXZCO0FBQ0EsU0FBSzNCLFNBQUwsR0FBaUJ5RSxPQUFPLENBQUN6RSxTQUF6QjtBQUNBLFNBQUs0QixTQUFMLEdBQWlCNkMsT0FBTyxDQUFDN0MsU0FBekI7QUFFQSxRQUFJc0csVUFBc0IsR0FBRyxJQUFJSCxpRUFBSixDQUFlO0FBQUMsYUFBTyxLQUFLeEssUUFBTCxDQUFjLEtBQWQsQ0FBUjtBQUE4QixhQUFPLEtBQUtBLFFBQUwsQ0FBYyxLQUFkO0FBQXJDLEtBQWYsQ0FBN0I7QUFDQSxTQUFLNEksUUFBTCxHQUFnQitCLFVBQVUsQ0FBQy9CLFFBQTNCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQjhCLFVBQVUsQ0FBQzlCLFFBQTNCOztBQUVBLFFBQUk3SSxRQUFRLENBQUMsV0FBRCxDQUFSLEtBQTBCLElBQTlCLEVBQW9DO0FBQ2xDLFVBQUk0SyxRQUFRLEdBQUcsSUFBSXBHLDhEQUFKLEVBQWY7QUFDQSxXQUFLb0csUUFBTCxHQUFnQkEsUUFBUSxDQUFDL0QseUJBQXpCO0FBQ0EsV0FBSzdELFlBQUwsR0FBb0I0SCxRQUFRLENBQUM1SCxZQUE3QjtBQUNBLFdBQUs4RCxpQkFBTCxHQUF5QjhELFFBQVEsQ0FBQzlELGlCQUFsQztBQUNBLFdBQUtDLFdBQUwsR0FBbUI2RCxRQUFRLENBQUM3RCxXQUE1QjtBQUNBLFdBQUt0RixRQUFMLEdBQWdCbUosUUFBUSxDQUFDbkosUUFBekI7QUFDQSxXQUFLRSxRQUFMLEdBQWdCaUosUUFBUSxDQUFDakosUUFBekI7QUFDQSxXQUFLd0IsU0FBTCxHQUFpQnlILFFBQVEsQ0FBQ3pILFNBQTFCO0FBQ0EsV0FBS3dCLG9CQUFMLEdBQTRCaUcsUUFBUSxDQUFDakcsb0JBQXJDO0FBQ0EsV0FBS0Usb0JBQUwsR0FBNEIrRixRQUFRLENBQUMvRixvQkFBckM7QUFDQSxXQUFLbUMsZ0JBQUwsR0FBd0I0RCxRQUFRLENBQUM1RCxnQkFBakM7QUFDRDs7QUFBQTtBQUNELFNBQUs2RCxpQkFBTCxHQUF5QjdLLFFBQVEsQ0FBQzZLLGlCQUFsQztBQUVBLFFBQUlDLGFBQTRCLEdBQUcsSUFBSXpILHdFQUFKLEVBQW5DO0FBQ0EsU0FBS0ssUUFBTCxHQUFnQm9ILGFBQWEsQ0FBQ3BILFFBQTlCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQm1ILGFBQWEsQ0FBQ25ILFFBQTlCO0FBRUEsU0FBS1ksUUFBTCxHQUFnQixJQUFJRCx3RUFBSixHQUFvQm9HLFdBQXBCLEVBQWhCOztBQUVBLFFBQUcsS0FBSzFLLFFBQUwsQ0FBYyxXQUFkLE1BQStCLElBQWxDLEVBQXdDO0FBQ3RDLFdBQUtVLGNBQUwsR0FBc0IsSUFBSXVHLDBFQUFKLENBQW1CO0FBQUMsZUFBTyxLQUFLeEUsU0FBYjtBQUF3QixlQUFPLEtBQUs0QixTQUFwQztBQUE4QyxvQkFBWSxLQUFLWCxRQUEvRDtBQUF5RSxvQkFBWSxLQUFLQyxRQUExRjtBQUFvRyx1QkFBZSxLQUFLbkIsV0FBeEg7QUFBcUksdUJBQWUsS0FBS3VFLFdBQUwsR0FBbUIsS0FBS0EsV0FBeEIsR0FBc0MsS0FBSy9HLFFBQUwsQ0FBYzRILFFBQXhNO0FBQWtOLHlCQUFpQixLQUFLNUUsWUFBTCxHQUFvQixLQUFLQSxZQUF6QixHQUF3QyxLQUFLaEQsUUFBTCxDQUFja0QsS0FBelI7QUFBZ1Msb0JBQVksS0FBS3FCLFFBQWpUO0FBQTJULGdCQUFRLEtBQUt2RSxRQUFMLENBQWNvSDtBQUFqVixPQUFuQixDQUF0QjtBQUNELEtBRkQsTUFFTztBQUNMLFdBQUsxRyxjQUFMLEdBQXNCLElBQUl1RywwRUFBSixDQUFtQjtBQUFDLGVBQU8sS0FBS3hFLFNBQWI7QUFBd0IsZUFBTyxLQUFLNEIsU0FBcEM7QUFBOEMsb0JBQVksS0FBS1gsUUFBL0Q7QUFBeUUsb0JBQVksS0FBS0MsUUFBMUY7QUFBb0csdUJBQWUsS0FBS25CLFdBQXhIO0FBQXFJLHVCQUFlLEtBQUt4QyxRQUFMLENBQWM0SCxRQUFsSztBQUE0Syx5QkFBaUIsS0FBSzVILFFBQUwsQ0FBY2tELEtBQTNNO0FBQWtOLG9CQUFZLEtBQUtxQixRQUFuTztBQUE2TyxnQkFBUSxLQUFLdkUsUUFBTCxDQUFjb0g7QUFBblEsT0FBbkIsQ0FBdEI7QUFDRDs7QUFBQTtBQUVELFNBQUsvRSxVQUFMLEdBQWtCLElBQUlxSCxrRUFBSixFQUFsQjtBQUNBLFNBQUtxQixlQUFMLEdBQXVCekgsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQXZCO0FBQ0Q7O0FBcEVIO0FBQUE7QUFBQSxzQ0FtRjBCO0FBRXRCLFdBQUt3SCxlQUFMLENBQXFCdkgsU0FBckIsQ0FBK0JDLEdBQS9CLENBQW1DLFlBQW5DO0FBQ0EsV0FBS3NILGVBQUwsQ0FBcUJuRSxNQUFyQixDQUE0QixLQUFLcEUsV0FBakM7QUFDQSxXQUFLa0YsSUFBTCxDQUFVZCxNQUFWLENBQWlCLEtBQUttRSxlQUF0QjtBQUNBLFdBQUt2SSxXQUFMLENBQWlCb0UsTUFBakIsQ0FBd0IsS0FBS25FLFNBQTdCO0FBQ0EsV0FBS0QsV0FBTCxDQUFpQm9FLE1BQWpCLENBQXdCLEtBQUt2QyxTQUE3QjtBQUNBLFdBQUs3QixXQUFMLENBQWlCb0UsTUFBakIsQ0FBd0IsS0FBS2dDLFFBQTdCO0FBQ0EsV0FBS3BHLFdBQUwsQ0FBaUJvRSxNQUFqQixDQUF3QixLQUFLaUMsUUFBN0I7QUFDQSxXQUFLckcsV0FBTCxDQUFpQm9FLE1BQWpCLENBQXdCLEtBQUt2RSxVQUFMLENBQWdCMkgsWUFBeEMsRUFBc0QsS0FBSzNILFVBQUwsQ0FBZ0I0SCxZQUF0RSxFQUFvRixLQUFLNUgsVUFBTCxDQUFnQjZILFlBQXBHLEVBQWtILEtBQUs3SCxVQUFMLENBQWdCOEgsWUFBbEksRUFBZ0osS0FBSzlILFVBQUwsQ0FBZ0IrSCxZQUFoSztBQUNBLFdBQUtqSixpQkFBTCxDQUF1Qix3QkFBdkIsSUFBbUQsSUFBbkQ7QUFDQSxXQUFLb0QsUUFBTCxDQUFjVixLQUFkLENBQW9Ca0YsTUFBcEIsR0FBNkIsS0FBS3ZHLFdBQUwsQ0FBaUJ3SSxZQUFqQixHQUFnQyxJQUE3RDtBQUNBLFdBQUt4SSxXQUFMLENBQWlCb0UsTUFBakIsQ0FBd0IsS0FBS3JDLFFBQTdCO0FBQ0EsV0FBSzlCLFNBQUwsQ0FBZW1FLE1BQWYsQ0FBc0IsS0FBS2xELFFBQTNCO0FBQ0EsV0FBS1csU0FBTCxDQUFldUMsTUFBZixDQUFzQixLQUFLakQsUUFBM0I7O0FBRUEsVUFBSSxLQUFLM0QsUUFBTCxDQUFjLGNBQWQsTUFBa0MsS0FBdEMsRUFBNkM7QUFDM0MsYUFBSzBELFFBQUwsQ0FBY0csS0FBZCxDQUFvQkMsT0FBcEIsR0FBOEIsTUFBOUI7QUFDQSxhQUFLSCxRQUFMLENBQWNFLEtBQWQsQ0FBb0JDLE9BQXBCLEdBQThCLE1BQTlCO0FBQ0QsT0FIRCxNQUdPO0FBQ0wsWUFBRyxLQUFLOUQsUUFBTCxDQUFjLFdBQWQsTUFBK0IsSUFBL0IsSUFBdUMsS0FBSzhHLGlCQUEvQyxFQUFrRTtBQUNoRSxlQUFLQSxpQkFBTCxDQUF1QjdELE9BQXZCLEdBQWlDLElBQWpDO0FBQ0Q7O0FBQUE7QUFDRjs7QUFBQTs7QUFFRCxVQUFHLEtBQUtqRCxRQUFMLENBQWMsV0FBZCxNQUErQixJQUEvQixJQUF1QyxLQUFLNEssUUFBL0MsRUFBeUQ7QUFDdkQsYUFBS3pKLGlCQUFMLENBQXVCLGtCQUF2QixJQUE2QyxJQUE3Qzs7QUFDQSxZQUFJLEtBQUswSixpQkFBTCxLQUEyQixPQUEzQixJQUFzQyxPQUFPLEtBQUtBLGlCQUFaLEtBQWtDLFFBQTVFLEVBQXNGO0FBQ3BGdkgsa0JBQVEsQ0FBQzJILGdCQUFULENBQTBCLEtBQUtKLGlCQUEvQixFQUFrRCxDQUFsRCxFQUFxRGpFLE1BQXJELENBQTRELEtBQUtnRSxRQUFqRTtBQUNELFNBRkQsTUFFTztBQUNMLGVBQUtsRCxJQUFMLENBQVVkLE1BQVYsQ0FBaUIsS0FBS2dFLFFBQXRCO0FBQ0Q7O0FBQUE7QUFDRjs7QUFBQTs7QUFFRCxVQUFJLEtBQUs1SyxRQUFMLENBQWMsT0FBZCxNQUEyQixJQUEvQixFQUFxQztBQUNuQyxhQUFLcUUsU0FBTCxDQUFlUixLQUFmLENBQXFCQyxPQUFyQixHQUErQixPQUEvQjtBQUNBLGFBQUtTLFFBQUwsQ0FBY1YsS0FBZCxDQUFvQkMsT0FBcEIsR0FBOEIsT0FBOUI7O0FBQ0EsWUFBRyxLQUFLOUQsUUFBTCxDQUFjLFdBQWQsTUFBK0IsSUFBbEMsRUFBd0M7QUFDdEMsZUFBS2dELFlBQUwsR0FBb0IsS0FBS0EsWUFBTCxDQUFrQkMsT0FBbEIsR0FBNEIsSUFBaEQsR0FBdUQsS0FBdkQ7QUFDQSxlQUFLdEIsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNrQyxLQUFkLENBQW9CcUgsT0FBcEIsR0FBOEIsR0FBOUMsR0FBb0QsS0FBcEQ7QUFDRDs7QUFBQTtBQUNGOztBQUFBOztBQUdELFVBQUksS0FBS2xMLFFBQUwsQ0FBYyxVQUFkLE1BQThCLElBQWxDLEVBQXdDO0FBQ3RDLFlBQUcsS0FBS0EsUUFBTCxDQUFjLFdBQWQsTUFBK0IsSUFBL0IsSUFBdUMsS0FBSytHLFdBQS9DLEVBQTREO0FBQzFELGVBQUtBLFdBQUwsR0FBbUIsS0FBS0EsV0FBTCxDQUFpQjlELE9BQWpCLEdBQTJCLElBQTlDLEdBQXFELEtBQXJEO0FBQ0EsZUFBS3ZDLGNBQUwsQ0FBb0J5SyxXQUFwQixDQUFnQyxLQUFLcEUsV0FBckMsRUFBa0QsS0FBS2dFLGVBQXZELEVBQXdFLEtBQUtuQyxRQUE3RSxFQUF1RixLQUFLQyxRQUE1RjtBQUNBLGVBQUt4RyxVQUFMLENBQWdCK0ksMkJBQWhCLENBQTRDLEtBQUtyRSxXQUFMLENBQWlCOUQsT0FBN0Q7QUFDRCxTQUpELE1BSU87QUFDTCxlQUFLdkMsY0FBTCxDQUFvQnlLLFdBQXBCLENBQWdDLElBQWhDLEVBQXNDLEtBQUtKLGVBQTNDLEVBQTRELEtBQUtuQyxRQUFqRSxFQUEyRSxLQUFLQyxRQUFoRjtBQUNBLGVBQUt4RyxVQUFMLENBQWdCK0ksMkJBQWhCLENBQTRDLElBQTVDO0FBQ0Q7O0FBQUE7QUFDRjs7QUFBQTs7QUFFRCxVQUFJLEtBQUtwTCxRQUFMLENBQWNvSCxJQUFkLEtBQXVCLElBQXZCLElBQStCLEtBQUtwSCxRQUFMLENBQWMsV0FBZCxNQUErQixJQUFsRSxFQUF3RTtBQUN0RSxhQUFLMkIsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNzRCxZQUFkLENBQTJCLE1BQTNCLEVBQW1DLEtBQUtqRixRQUFMLENBQWNvSCxJQUFkLEdBQXFCLEVBQXhELENBQWhCLEdBQThFLEtBQTlFO0FBQ0EsYUFBSzNGLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjd0QsWUFBZCxDQUEyQixNQUEzQixFQUFtQyxLQUFLakYsUUFBTCxDQUFjb0gsSUFBZCxHQUFxQixFQUF4RCxDQUFoQixHQUE4RSxLQUE5RTtBQUNEOztBQUFBOztBQUVELFVBQUksS0FBS3BILFFBQUwsQ0FBY29ILElBQWxCLEVBQXdCO0FBQ3RCLGFBQUtqRyxpQkFBTCxDQUF1Qix3QkFBdkIsSUFBbUQsSUFBbkQ7QUFDRDs7QUFFRCxVQUFJLEtBQUtuQixRQUFMLENBQWNxQyxVQUFkLEtBQTZCLElBQTdCLElBQXFDLEtBQUsyRSxnQkFBOUMsRUFBZ0U7QUFDOUQsYUFBS0EsZ0JBQUwsQ0FBc0IvRCxPQUF0QixHQUFnQyxJQUFoQztBQUNELE9BRkQsTUFFTztBQUNMLGFBQUsrRCxnQkFBTCxHQUF3QixLQUFLM0UsVUFBTCxDQUFnQmdKLGlCQUFoQixDQUFrQyxLQUFLckUsZ0JBQXZDLENBQXhCLEdBQW1GLEtBQW5GO0FBQ0Q7O0FBQUE7O0FBRUQsVUFBSSxLQUFLN0QsU0FBTCxJQUFrQixPQUFPLEtBQUtuRCxRQUFMLENBQWNvSCxJQUFyQixLQUE4QixRQUFwRCxFQUE4RDtBQUM1RCxhQUFLakcsaUJBQUwsQ0FBdUIsMEJBQXZCLElBQXFELEtBQUtuQixRQUFMLENBQWNvSCxJQUFuRTtBQUNELE9BRkQsTUFFTyxJQUFJLEtBQUtwSCxRQUFMLENBQWNvSCxJQUFkLEtBQXVCLEtBQTNCLEVBQWtDO0FBQ3ZDLGFBQUtqRyxpQkFBTCxDQUF1QixZQUF2QixJQUF1QyxJQUF2QztBQUNEOztBQUFBO0FBRUQsV0FBS0EsaUJBQUwsQ0FBdUIsc0JBQXZCLElBQWlELElBQWpEO0FBQ0Q7QUFoS0g7QUFBQTtBQUFBLHlDQWtLNkI7QUFDekIsVUFBSSxLQUFLbkIsUUFBTCxDQUFjLFdBQWQsTUFBK0IsSUFBL0IsSUFBdUMsS0FBSzhHLGlCQUFoRCxFQUFtRTtBQUNqRSxhQUFLQSxpQkFBTCxDQUF1QnFCLGdCQUF2QixDQUF3QyxRQUF4QyxFQUFrRCxLQUFLbUQsbUJBQUwsQ0FBeUJDLElBQXpCLENBQThCLElBQTlCLENBQWxEO0FBQ0Q7O0FBQUE7O0FBQ0QsVUFBSSxLQUFLdkwsUUFBTCxDQUFjLFdBQWQsTUFBK0IsSUFBL0IsSUFBdUMsS0FBS2dELFlBQWhELEVBQThEO0FBQzVELGFBQUtBLFlBQUwsQ0FBa0JtRixnQkFBbEIsQ0FBbUMsUUFBbkMsRUFBNkMsS0FBS3FELG9CQUFMLENBQTBCRCxJQUExQixDQUErQixJQUEvQixDQUE3QztBQUNEOztBQUFBOztBQUNELFVBQUksS0FBS3ZMLFFBQUwsQ0FBYyxXQUFkLE1BQStCLElBQS9CLElBQXVDLEtBQUsrRyxXQUFoRCxFQUE2RDtBQUMzRCxhQUFLQSxXQUFMLENBQWlCb0IsZ0JBQWpCLENBQWtDLFFBQWxDLEVBQTRDLEtBQUtzRCxzQkFBTCxDQUE0QkYsSUFBNUIsQ0FBaUMsSUFBakMsQ0FBNUM7QUFDRDs7QUFBQTtBQUNELFdBQUszQyxRQUFMLENBQWNULGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLEtBQUt1RCw0QkFBTCxDQUFrQ0gsSUFBbEMsQ0FBdUMsSUFBdkMsQ0FBeEM7QUFDQSxXQUFLMUMsUUFBTCxDQUFjVixnQkFBZCxDQUErQixPQUEvQixFQUF3QyxLQUFLd0QsNEJBQUwsQ0FBa0NKLElBQWxDLENBQXVDLElBQXZDLENBQXhDOztBQUNBLFVBQUksS0FBS3ZMLFFBQUwsQ0FBYyxXQUFkLE1BQStCLElBQS9CLElBQXVDLEtBQUt5QixRQUFoRCxFQUEwRDtBQUN4RCxhQUFLQSxRQUFMLENBQWMwRyxnQkFBZCxDQUErQixRQUEvQixFQUF5QyxLQUFLeUQsbUJBQUwsQ0FBeUJMLElBQXpCLENBQThCLElBQTlCLENBQXpDO0FBQ0Q7O0FBQUE7O0FBQ0QsVUFBSSxLQUFLdkwsUUFBTCxDQUFjLFdBQWQsTUFBK0IsSUFBL0IsSUFBdUMsS0FBSzJCLFFBQWhELEVBQTBEO0FBQ3hELGFBQUtBLFFBQUwsQ0FBY3dHLGdCQUFkLENBQStCLFFBQS9CLEVBQXlDLEtBQUswRCxtQkFBTCxDQUF5Qk4sSUFBekIsQ0FBOEIsSUFBOUIsQ0FBekM7QUFDRDs7QUFBQTs7QUFFRCxVQUFJLEtBQUt2TCxRQUFMLENBQWMsV0FBZCxNQUErQixJQUEvQixJQUF1QyxLQUFLZ0gsZ0JBQWhELEVBQWtFO0FBQ2hFLGFBQUtBLGdCQUFMLENBQXNCbUIsZ0JBQXRCLENBQXVDLFFBQXZDLEVBQWlELEtBQUsyRCwyQkFBTCxDQUFpQ1AsSUFBakMsQ0FBc0MsSUFBdEMsQ0FBakQ7QUFDRDs7QUFBQTs7QUFFRCxVQUFHLEtBQUt2TCxRQUFMLENBQWMsV0FBZCxNQUErQixJQUEvQixJQUF1QyxLQUFLbUQsU0FBL0MsRUFBMEQ7QUFDeEQsYUFBS0EsU0FBTCxDQUFlZ0YsZ0JBQWYsQ0FBZ0MsUUFBaEMsRUFBMEMsS0FBSzRELGlCQUFMLENBQXVCUixJQUF2QixDQUE0QixJQUE1QixDQUExQztBQUNEOztBQUFBO0FBRUQsV0FBS2xKLFVBQUwsQ0FBZ0IySCxZQUFoQixDQUE2QjdCLGdCQUE3QixDQUE4QyxPQUE5QyxFQUF1RCxLQUFLNkQscUJBQUwsQ0FBMkJULElBQTNCLENBQWdDLElBQWhDLEVBQXNDLEtBQUtsSixVQUFMLENBQWdCMkgsWUFBdEQsQ0FBdkQ7QUFDQSxXQUFLM0gsVUFBTCxDQUFnQjRILFlBQWhCLENBQTZCOUIsZ0JBQTdCLENBQThDLE9BQTlDLEVBQXVELEtBQUs2RCxxQkFBTCxDQUEyQlQsSUFBM0IsQ0FBZ0MsSUFBaEMsRUFBc0MsS0FBS2xKLFVBQUwsQ0FBZ0I0SCxZQUF0RCxDQUF2RDtBQUNBLFdBQUs1SCxVQUFMLENBQWdCNkgsWUFBaEIsQ0FBNkIvQixnQkFBN0IsQ0FBOEMsT0FBOUMsRUFBdUQsS0FBSzZELHFCQUFMLENBQTJCVCxJQUEzQixDQUFnQyxJQUFoQyxFQUFzQyxLQUFLbEosVUFBTCxDQUFnQjZILFlBQXRELENBQXZEO0FBQ0EsV0FBSzdILFVBQUwsQ0FBZ0I4SCxZQUFoQixDQUE2QmhDLGdCQUE3QixDQUE4QyxPQUE5QyxFQUF1RCxLQUFLNkQscUJBQUwsQ0FBMkJULElBQTNCLENBQWdDLElBQWhDLEVBQXNDLEtBQUtsSixVQUFMLENBQWdCOEgsWUFBdEQsQ0FBdkQ7QUFDQSxXQUFLOUgsVUFBTCxDQUFnQitILFlBQWhCLENBQTZCakMsZ0JBQTdCLENBQThDLE9BQTlDLEVBQXVELEtBQUs2RCxxQkFBTCxDQUEyQlQsSUFBM0IsQ0FBZ0MsSUFBaEMsRUFBc0MsS0FBS2xKLFVBQUwsQ0FBZ0IrSCxZQUF0RCxDQUF2RDtBQUVEO0FBbk1IO0FBQUE7QUFBQSwrQ0FxTWtDO0FBQzlCLFdBQUs2QixVQUFMO0FBQ0EsV0FBS0MsVUFBTDtBQUNEO0FBeE1IO0FBQUE7QUFBQSx5Q0EwTXVCQyxPQTFNdkIsRUEwTTBEO0FBRXRELGVBQVNDLHFCQUFULENBQStCek0sS0FBL0IsRUFBeUU7QUFDdkUsZUFBT0EsS0FBSyxLQUFLOEksU0FBVixHQUFzQixJQUF0QixHQUE2QjlJLEtBQXBDO0FBQ0Q7O0FBQUE7O0FBRUQsVUFBSSxTQUFTd00sT0FBVCxJQUFvQixTQUFTQSxPQUFqQyxFQUEwQztBQUN4QyxZQUFHLEtBQUtuTSxRQUFMLENBQWMsV0FBZCxNQUErQixJQUEvQixJQUF1QyxLQUFLNEssUUFBL0MsRUFBeUQ7QUFDdkQsZUFBS2pHLG9CQUFMLEdBQTRCLEtBQUtBLG9CQUFMLENBQTBCMEgsV0FBMUIsR0FBd0NELHFCQUFxQixDQUFDRCxPQUFPLENBQUN6TSxHQUFULENBQXpGLEdBQXlHLEtBQXpHO0FBQ0EsZUFBSytCLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjOUIsS0FBZCxhQUF5QndNLE9BQU8sQ0FBQ3pNLEdBQWpDLENBQWhCLEdBQXlELEtBQXpEOztBQUNBLGNBQUcsS0FBS3NELFlBQUwsSUFBcUIsS0FBS0EsWUFBTCxDQUFrQkMsT0FBbEIsS0FBOEIsSUFBdEQsRUFBNkQ7QUFDM0QsaUJBQUs0QixvQkFBTCxHQUE0QixLQUFLQSxvQkFBTCxDQUEwQndILFdBQTFCLGdCQUE4Q0QscUJBQXFCLENBQUNELE9BQU8sQ0FBQzFNLEdBQVQsQ0FBbkUsQ0FBNUIsR0FBaUgsS0FBakg7QUFDQSxpQkFBS2tDLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFjaEMsS0FBZCxhQUF5QndNLE9BQU8sQ0FBQzFNLEdBQWpDLENBQWhCLEdBQXlELEtBQXpEO0FBQ0Q7O0FBQUE7QUFDRjs7QUFBQTtBQUVELGFBQUtpRSxRQUFMLENBQWMySSxXQUFkLEdBQTRCRCxxQkFBcUIsQ0FBQ0QsT0FBTyxDQUFDek0sR0FBVCxDQUFqRDtBQUNBLGFBQUtpRSxRQUFMLENBQWMwSSxXQUFkLEdBQTRCRCxxQkFBcUIsQ0FBQ0QsT0FBTyxDQUFDMU0sR0FBVCxDQUFqRDtBQUVELE9BYkQsTUFhTyxJQUFJLFNBQVMwTSxPQUFiLEVBQXNCO0FBQzNCLGFBQUt6SSxRQUFMLENBQWMySSxXQUFkLEdBQTRCRCxxQkFBcUIsQ0FBQ0QsT0FBTyxDQUFDek0sR0FBVCxDQUFqRDs7QUFDQSxZQUFJLEtBQUtNLFFBQUwsQ0FBYyxXQUFkLE1BQStCLElBQW5DLEVBQXlDO0FBQ3ZDLGVBQUsyRSxvQkFBTCxHQUE0QixLQUFLQSxvQkFBTCxDQUEwQjBILFdBQTFCLEdBQXdDRCxxQkFBcUIsQ0FBQ0QsT0FBTyxDQUFDek0sR0FBVCxDQUF6RixHQUF5RyxLQUF6RztBQUNBLGVBQUsrQixRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBYzlCLEtBQWQsYUFBeUJ3TSxPQUFPLENBQUN6TSxHQUFqQyxDQUFoQixHQUF5RCxLQUF6RDtBQUNEOztBQUFBO0FBQ0YsT0FOTSxNQU1BO0FBQ0wsYUFBS2lFLFFBQUwsQ0FBYzBJLFdBQWQsR0FBNEJELHFCQUFxQixDQUFDRCxPQUFPLENBQUMxTSxHQUFULENBQWpEOztBQUNBLFlBQUksS0FBS08sUUFBTCxDQUFjLFdBQWQsTUFBK0IsSUFBbkMsRUFBeUM7QUFDdkMsZUFBSzZFLG9CQUFMLEdBQTRCLEtBQUtBLG9CQUFMLENBQTBCd0gsV0FBMUIsZ0JBQThDRCxxQkFBcUIsQ0FBQ0QsT0FBTyxDQUFDMU0sR0FBVCxDQUFuRSxDQUE1QixHQUFpSCxLQUFqSDtBQUNBLGVBQUtrQyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY2hDLEtBQWQsYUFBeUJ3TSxPQUFPLENBQUMxTSxHQUFqQyxDQUFoQixHQUF5RCxLQUF6RDtBQUNEOztBQUFBO0FBQ0Y7O0FBQUE7QUFDRCxVQUFJNEQsd0VBQUosR0FBb0JpSiwwQkFBcEIsQ0FBK0MsS0FBSzdKLFNBQUwsQ0FBZTZFLFdBQTlELEVBQTJFLEtBQUtqRCxTQUFMLENBQWVpRCxXQUExRixFQUF1RyxLQUFLNUQsUUFBTCxDQUFjNEQsV0FBckgsRUFBa0ksS0FBSzNELFFBQUwsQ0FBYzJELFdBQWhKLEVBQTZKLEtBQUs1RCxRQUFsSyxFQUE0SyxLQUFLQyxRQUFqTDtBQUNEO0FBM09IO0FBQUE7QUFBQSxtREE2T3VDO0FBQ25DLFdBQUttRCxpQkFBTCxHQUF5QixJQUFJekQsd0VBQUosR0FBb0JnSSxpQkFBcEIsQ0FBc0MsS0FBS3ZFLGlCQUEzQyxFQUE4RCxLQUFLcEQsUUFBbkUsRUFBNkUsS0FBS0MsUUFBbEYsQ0FBekIsR0FBdUgsS0FBdkg7O0FBQ0EsVUFBSSxLQUFLbUQsaUJBQUwsSUFBMEIsS0FBS0EsaUJBQUwsQ0FBdUI3RCxPQUF2QixLQUFtQyxJQUFqRSxFQUF1RTtBQUNyRSxZQUFJSSx3RUFBSixHQUFvQmlKLDBCQUFwQixDQUErQyxLQUFLN0osU0FBTCxDQUFlNkUsV0FBOUQsRUFBMkUsS0FBS2pELFNBQUwsQ0FBZWlELFdBQTFGLEVBQXVHLEtBQUs1RCxRQUFMLENBQWM0RCxXQUFySCxFQUFrSSxLQUFLM0QsUUFBTCxDQUFjMkQsV0FBaEosRUFBNkosS0FBSzVELFFBQWxLLEVBQTRLLEtBQUtDLFFBQWpMO0FBQ0Q7O0FBQUE7QUFDRjtBQWxQSDtBQUFBO0FBQUEsaURBb1BxQztBQUNqQyxVQUFJLEtBQUtYLFlBQUwsSUFBcUIsS0FBS0EsWUFBTCxDQUFrQkMsT0FBbEIsS0FBOEIsS0FBdkQsRUFBOEQ7QUFDNUQsYUFBS3ZDLGNBQUwsQ0FBb0JDLHVCQUFwQixDQUE0QyxLQUE1QyxJQUFxRDtBQUFDLDJCQUFVLEtBQUs2QixXQUFMLENBQWlCOEUsV0FBakIsR0FBK0IsS0FBSzdFLFNBQUwsQ0FBZTZFLFdBQXhELENBQUQ7QUFBd0UsbUNBQWtCLEtBQUs5RSxXQUFMLENBQWlCOEUsV0FBakIsR0FBK0IsS0FBSzdFLFNBQUwsQ0FBZTZFLFdBQWhFO0FBQXhFLFNBQXJEO0FBQ0EsYUFBS2pELFNBQUwsQ0FBZVIsS0FBZixDQUFxQk0sSUFBckIsYUFBK0IsS0FBSzNCLFdBQUwsQ0FBaUI4RSxXQUFqQixHQUErQixLQUFLN0UsU0FBTCxDQUFlNkUsV0FBN0U7QUFDQSxhQUFLekMsb0JBQUwsR0FBNEIsS0FBS0Esb0JBQUwsQ0FBMEJ3SCxXQUExQixHQUF3QyxFQUFwRSxHQUF5RSxLQUF6RTtBQUNBLGFBQUsxSyxRQUFMLEdBQWdCLEtBQUtBLFFBQUwsQ0FBY3NELFlBQWQsQ0FBMkIsVUFBM0IsRUFBdUMsRUFBdkMsQ0FBaEIsR0FBNkQsS0FBN0Q7QUFDQSxhQUFLdEQsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWNoQyxLQUFkLEdBQXNCLEVBQXRDLEdBQTJDLEtBQTNDO0FBQ0EsYUFBS2dDLFFBQUwsR0FBZ0IsS0FBS0EsUUFBTCxDQUFja0MsS0FBZCxDQUFvQnFILE9BQXBCLEdBQThCLEtBQTlDLEdBQXNELEtBQXREO0FBQ0EsYUFBSzNHLFFBQUwsQ0FBY1YsS0FBZCxDQUFvQkMsT0FBcEIsR0FBOEIsTUFBOUI7QUFDRDs7QUFBQTtBQUVELFdBQUtkLFlBQUwsR0FBb0IsSUFBSW9CLDJEQUFKLEdBQWNpSCxpQkFBZCxDQUFnQyxLQUFLckksWUFBckMsRUFBbUQsS0FBS3FCLFNBQXhELENBQXBCLEdBQXlGLEtBQXpGOztBQUVBLFVBQUksS0FBS3JCLFlBQUwsSUFBcUIsS0FBS0EsWUFBTCxDQUFrQkMsT0FBbEIsS0FBOEIsSUFBdkQsRUFBNkQ7QUFDM0QsYUFBSzlCLGlCQUFMLENBQXVCLFlBQXZCLElBQXVDLElBQXZDO0FBQ0EsYUFBS1EsUUFBTCxHQUFnQixLQUFLQSxRQUFMLENBQWM0SyxlQUFkLENBQThCLFVBQTlCLENBQWhCLEdBQTRELEtBQTVEO0FBQ0EsYUFBS2hJLFFBQUwsQ0FBY1YsS0FBZCxDQUFvQkMsT0FBcEIsR0FBOEIsT0FBOUI7QUFDQSxhQUFLUyxRQUFMLENBQWNWLEtBQWQsQ0FBb0IwRCxLQUFwQixHQUE0QixLQUFLL0UsV0FBTCxDQUFpQjhFLFdBQWpCLElBQWdDLEtBQUs5RSxXQUFMLENBQWlCOEUsV0FBakIsR0FBK0IsS0FBSzdFLFNBQUwsQ0FBZTZFLFdBQWYsR0FBNkIsQ0FBNUYsSUFBa0csSUFBOUg7O0FBQ0EsWUFBSSxDQUFDLEtBQUs1RyxjQUFMLENBQW9CQyx1QkFBcEIsQ0FBNENqQixHQUE1QyxDQUFnRCxLQUFoRCxDQUFELElBQTJELEtBQUs4QyxXQUFMLENBQWlCOEUsV0FBakIsR0FBK0IsS0FBS2pELFNBQUwsQ0FBZWlELFdBQTlDLEdBQTRELEtBQUs3RSxTQUFMLENBQWU2RSxXQUExSSxFQUF1SjtBQUNySixlQUFLNUcsY0FBTCxDQUFvQkMsdUJBQXBCLENBQTRDLEtBQTVDLElBQXFEO0FBQUMsNkJBQVUsS0FBSzZCLFdBQUwsQ0FBaUI4RSxXQUFqQixHQUErQixLQUFLakQsU0FBTCxDQUFlaUQsV0FBOUMsR0FBNEQsS0FBSzdFLFNBQUwsQ0FBZTZFLFdBQXJGLENBQUQ7QUFBcUcscUNBQWtCLEtBQUs5RSxXQUFMLENBQWlCOEUsV0FBakIsR0FBK0IsS0FBS2pELFNBQUwsQ0FBZWlELFdBQWhFO0FBQXJHLFdBQXJEO0FBQ0EsZUFBSzdFLFNBQUwsQ0FBZW9CLEtBQWYsQ0FBcUJNLElBQXJCLGFBQStCLEtBQUszQixXQUFMLENBQWlCOEUsV0FBakIsR0FBK0IsS0FBS2pELFNBQUwsQ0FBZWlELFdBQTlDLEdBQTRELEtBQUs3RSxTQUFMLENBQWU2RSxXQUExRztBQUNEOztBQUFBO0FBQ0Y7O0FBQUE7QUFDRjtBQTNRSDtBQUFBO0FBQUEsMkNBNlF5QmxJLElBN1F6QixFQTZRNkM7QUFDekMsV0FBS3lGLG9CQUFMLEdBQTRCLEtBQUtBLG9CQUFMLENBQTBCd0gsV0FBMUIsZ0JBQThDak4sSUFBOUMsQ0FBNUIsR0FBbUYsS0FBbkY7O0FBQ0EsVUFBSSxLQUFLdUMsUUFBVCxFQUFtQjtBQUNqQixhQUFLQSxRQUFMLENBQWNrQyxLQUFkLENBQW9CcUgsT0FBcEIsR0FBOEIsR0FBOUI7QUFDQSxhQUFLdkosUUFBTCxDQUFjaEMsS0FBZCxhQUF5QlAsSUFBekI7QUFDRDs7QUFBQTtBQUNGO0FBblJIO0FBQUE7QUFBQSx3Q0FxUnVCQSxJQXJSdkIsRUFxUjRDTSxHQXJSNUMsRUFxUm1FRCxHQXJSbkUsRUFxUmdHO0FBQzVGQyxTQUFHLENBQUN1RixZQUFKLENBQWlCLEtBQWpCLEVBQXdCN0YsSUFBSSxDQUFDSyxHQUE3QjtBQUNBQyxTQUFHLENBQUN1RixZQUFKLENBQWlCLEtBQWpCLEVBQXdCN0YsSUFBSSxDQUFDTSxHQUE3QjtBQUNBRCxTQUFHLENBQUN3RixZQUFKLENBQWlCLEtBQWpCLEVBQXdCN0YsSUFBSSxDQUFDSyxHQUE3QjtBQUNEO0FBelJIO0FBQUE7QUFBQSxpQ0EyUnFCO0FBQ2pCLFVBQUlpSSxJQUFJLEdBQUcsSUFBWDs7QUFDQUEsVUFBSSxDQUFDakYsU0FBTCxDQUFlK0osV0FBZixHQUE2QixVQUFVaEYsS0FBVixFQUF3QjtBQUNuREUsWUFBSSxDQUFDaEgsY0FBTCxDQUFvQitMLGlCQUFwQixDQUF1Q2pGLEtBQXZDLEVBQThDaUIsU0FBOUM7QUFDRCxPQUZEO0FBR0Q7QUFoU0g7QUFBQTtBQUFBLGlDQWtTcUI7QUFDakIsVUFBSWYsSUFBSSxHQUFHLElBQVg7O0FBQ0FBLFVBQUksQ0FBQ3JELFNBQUwsQ0FBZW1JLFdBQWYsR0FBNkIsVUFBU2hGLEtBQVQsRUFBc0I7QUFDakRFLFlBQUksQ0FBQ2hILGNBQUwsQ0FBb0JnTSxpQkFBcEIsQ0FBdUNsRixLQUF2QyxFQUE4Q2lCLFNBQTlDO0FBQ0QsT0FGRDtBQUdEO0FBdlNIO0FBQUE7QUFBQSwwQ0F5UzhCO0FBQzFCLFdBQUtrRSw0QkFBTDtBQUNEO0FBM1NIO0FBQUE7QUFBQSwyQ0E2UytCO0FBQzNCLFdBQUtDLDBCQUFMO0FBQ0Q7QUEvU0g7QUFBQTtBQUFBLHdDQWlUNEI7QUFDeEIsV0FBS3pKLFNBQUwsR0FBaUIsS0FBS2hDLGlCQUFMLENBQXVCLDBCQUF2QixJQUFxRCxLQUFLZ0MsU0FBTCxDQUFleEQsS0FBckYsR0FBNkYsS0FBN0Y7QUFDRDtBQW5USDtBQUFBO0FBQUEsa0RBcVRzQztBQUNsQyxXQUFLcUgsZ0JBQUwsR0FBd0IsS0FBSzNFLFVBQUwsQ0FBZ0JnSixpQkFBaEIsQ0FBa0MsS0FBS3JFLGdCQUF2QyxDQUF4QixHQUFtRixLQUFuRjtBQUNEO0FBdlRIO0FBQUE7QUFBQSw2Q0F5VGlDO0FBQzdCLFdBQUtELFdBQUwsR0FBbUIsS0FBS3JHLGNBQUwsQ0FBb0J5SyxXQUFwQixDQUFnQyxLQUFLcEUsV0FBckMsRUFBa0QsS0FBS2dFLGVBQXZELEVBQXdFLEtBQUtuQyxRQUE3RSxFQUF1RixLQUFLQyxRQUE1RixDQUFuQixHQUEySCxLQUEzSDtBQUNBLFdBQUs5QixXQUFMLEdBQW1CLEtBQUsxRSxVQUFMLENBQWdCK0ksMkJBQWhCLENBQTRDLEtBQUtyRSxXQUFMLENBQWlCOUQsT0FBN0QsQ0FBbkIsR0FBMkYsS0FBM0Y7QUFDRDtBQTVUSDtBQUFBO0FBQUEsbURBOFR3QztBQUNwQyxXQUFLdkMsY0FBTCxDQUFvQm1NLHdCQUFwQixDQUE2QyxLQUE3QztBQUNEO0FBaFVIO0FBQUE7QUFBQSwwQ0FrVXdCQyxPQWxVeEIsRUFrVXlEO0FBQ3JELFVBQUlBLE9BQU8sQ0FBQ1QsV0FBWixFQUF5QjtBQUN2QixZQUFJdEwsR0FBVyxHQUFHK0wsT0FBTyxDQUFDVCxXQUExQjtBQUNBLGFBQUtsTCxpQkFBTCxDQUF1QiwyQkFBdkIsSUFBc0RKLEdBQXREO0FBQ0Q7O0FBQUE7QUFDRjtBQXZVSDtBQUFBO0FBQUEsbURBeVV1QztBQUNuQyxXQUFLTCxjQUFMLENBQW9CbU0sd0JBQXBCLENBQTZDLEtBQTdDO0FBQ0Q7QUEzVUg7QUFBQTtBQUFBLDBDQTZVOEI7QUFDMUIsV0FBSzFMLGlCQUFMLENBQXVCLHVCQUF2QixJQUFrRCxJQUFsRDtBQUNEO0FBL1VIO0FBQUE7QUFBQSwwQ0FpVjhCO0FBQzFCLFdBQUtBLGlCQUFMLENBQXVCLHVCQUF2QixJQUFrRCxJQUFsRDtBQUNEO0FBblZIOztBQUFBO0FBQUE7QUFvVkMsQzs7Ozs7Ozs7Ozs7O0FDclhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQU1DO0FBSUE7O0FBZ0JELENBQUMsVUFBVTRMLENBQVYsRUFBYztBQUNiQSxHQUFDLENBQUNDLEVBQUYsQ0FBS0MsVUFBTCxHQUFrQixVQUFVQyxPQUFWLEVBQW1DO0FBRW5ELFFBQUlsTixRQUFrQixHQUFHK00sQ0FBQyxDQUFDSSxNQUFGLENBQVU7QUFDakMsYUFBTyxHQUQwQjtBQUVqQyxhQUFPLElBRjBCO0FBR2pDLGVBQVMsS0FId0I7QUFJakMsbUJBQWEsS0FKb0I7QUFLakMsc0JBQWdCLEtBTGlCO0FBTWpDLGtCQUFZLEtBTnFCO0FBT2pDLGNBQVEsS0FQeUI7QUFRakMsb0JBQWMsS0FSbUI7QUFTakMsMkJBQXFCO0FBVFksS0FBVixFQVV0QkQsT0FWc0IsQ0FBekI7QUFZQSxRQUFJeEYsSUFBb0IsR0FBRyxJQUEzQjtBQUVBLFFBQUl4SSxLQUFKOztBQUNBLFFBQUksaUJBQWlCYyxRQUFqQixJQUE2QixpQkFBaUJBLFFBQWxELEVBQTREO0FBQzFEZCxXQUFLLEdBQUcsSUFBSWEsNkRBQUosQ0FBVTtBQUFDLGVBQU9DLFFBQVEsQ0FBQyxLQUFELENBQWhCO0FBQXlCUCxXQUFHLEVBQUVPLFFBQVEsQ0FBQyxLQUFELENBQXRDO0FBQStDLHVCQUFlQSxRQUFRLENBQUMsYUFBRCxDQUFSLEdBQTBCQSxRQUFRLENBQUMsYUFBRCxDQUFsQyxHQUFvRCxFQUFsSDtBQUFzSCx1QkFBZUEsUUFBUSxDQUFDLGFBQUQsQ0FBUixHQUEwQkEsUUFBUSxDQUFDLGFBQUQsQ0FBbEMsR0FBb0Q7QUFBekwsT0FBVixDQUFSO0FBQ0QsS0FGRCxNQUVPLElBQUksaUJBQWlCQSxRQUFyQixFQUErQjtBQUNwQ2QsV0FBSyxHQUFHLElBQUlhLDZEQUFKLENBQVU7QUFBQyxlQUFPQyxRQUFRLENBQUMsS0FBRCxDQUFoQjtBQUF5QlAsV0FBRyxFQUFFTyxRQUFRLENBQUMsS0FBRCxDQUF0QztBQUErQyx1QkFBZUEsUUFBUSxDQUFDLGFBQUQsQ0FBUixHQUEwQkEsUUFBUSxDQUFDLGFBQUQsQ0FBbEMsR0FBb0QsRUFBbEg7QUFBc0gsdUJBQWVBLFFBQVEsQ0FBQyxLQUFEO0FBQTdJLE9BQVYsQ0FBUjtBQUNELEtBRk0sTUFFQSxJQUFJLGlCQUFpQkEsUUFBckIsRUFBK0I7QUFDcENkLFdBQUssR0FBRyxJQUFJYSw2REFBSixDQUFVO0FBQUMsZUFBT0MsUUFBUSxDQUFDLEtBQUQsQ0FBaEI7QUFBeUJQLFdBQUcsRUFBRU8sUUFBUSxDQUFDLEtBQUQsQ0FBdEM7QUFBK0MsdUJBQWVBLFFBQVEsQ0FBQyxLQUFELENBQXRFO0FBQStFLHVCQUFlQSxRQUFRLENBQUMsYUFBRCxDQUFSLEdBQTBCQSxRQUFRLENBQUMsYUFBRCxDQUFsQyxHQUFvRDtBQUFsSixPQUFWLENBQVI7QUFDRCxLQUZNLE1BRUE7QUFDTGQsV0FBSyxHQUFHLElBQUlhLDZEQUFKLENBQVU7QUFBQyxlQUFPQyxRQUFRLENBQUMsS0FBRCxDQUFoQjtBQUF5QlAsV0FBRyxFQUFFTyxRQUFRLENBQUMsS0FBRCxDQUF0QztBQUErQyx1QkFBZUEsUUFBUSxDQUFDLEtBQUQsQ0FBdEU7QUFBK0UsdUJBQWVBLFFBQVEsQ0FBQyxLQUFEO0FBQXRHLE9BQVYsQ0FBUjtBQUNEOztBQUVELFFBQUlJLElBQVUsR0FBRyxJQUFJcUssMERBQUosQ0FBUy9DLElBQVQsRUFBZTFILFFBQWYsQ0FBakI7QUFFQSxRQUFJSyxNQUFjLEdBQUcsSUFBSXBCLCtEQUFKLENBQVdDLEtBQVgsQ0FBckI7QUFFQSxRQUFJa08sU0FBb0IsR0FBRyxJQUFJak4seUVBQUosQ0FBY0MsSUFBZCxFQUFvQkMsTUFBcEIsQ0FBM0I7QUFFQStNLGFBQVMsQ0FBQ0MsbUJBQVY7QUFDQWpOLFFBQUksQ0FBQ2tOLGtCQUFMO0FBQ0FsTixRQUFJLENBQUNtTixlQUFMO0FBQ0FuTixRQUFJLENBQUNvTix3QkFBTDtBQUVELEdBdENEO0FBdUNELENBeENELEVBd0NHQyxNQXhDSCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcXVlcnkudWkuY3VzdG9tU2xpZGVyLnRzXCIpO1xuIiwiaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuL21vZGVsJztcclxuaW1wb3J0IHsgU3RhcnRIYW5kZWxzUG9zaXRpb24gfSBmcm9tICcuL21vZGVsJztcclxuXHJcbmludGVyZmFjZSBOZXdQb3NpdGlvbiB7XHJcbiAgJ21pbic6IHN0cmluZztcclxuICAnbWF4Jzogc3RyaW5nO1xyXG4gICdzbGlkZXJXaWR0aCc6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VsZWN0SGFuZGxlRm9yVmFsdWVTY2FsZSB7XHJcbiAgJ3RhcmdldCc6IHN0cmluZztcclxuICAndmFsdWUnOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdldFZhbHVlc0ZvclZhbHVlU2NhbGUge1xyXG4gICcxNSc6IHN0cmluZztcclxuICAnMzAnOiBzdHJpbmc7XHJcbiAgJzUwJzogc3RyaW5nO1xyXG4gICc3MCc6IHN0cmluZztcclxuICAnODUnOiBzdHJpbmc7XHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdldFBvc2l0aW9uc0Ftb3VudCB7XHJcbiAgJ3Bvc2l0aW9ucyc6IHN0cmluZztcclxuICAnbWluaW11bSc6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBHZXRQb3NzaWJsZVJhbmdlIHtcclxuICAnbWluJzogc3RyaW5nO1xyXG4gICdtYXgnOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBGYWNhZGUge1xyXG4gIHJlYWRvbmx5IG1vZGVsOiBNb2RlbDtcclxuXHJcbiAgY29uc3RydWN0b3IgKG1vZGVsOiBNb2RlbCkge1xyXG4gICAgdGhpcy5tb2RlbCA9IG1vZGVsO1xyXG4gIH07XHJcblxyXG4gIHN0YXJ0SGFuZGVsc1Bvc2l0aW9uKCk6IFN0YXJ0SGFuZGVsc1Bvc2l0aW9uIHtcclxuICAgIHJldHVybiB0aGlzLm1vZGVsLmdldEN1cnJlbnREYXRhKCk7XHJcbiAgfTtcclxuICBcclxuICByZWZyZXNoTW9kZWxEYXRhKGRhdGE6IE5ld1Bvc2l0aW9uLCBwcm9wOiBzdHJpbmcpOiBvYmplY3Qge1xyXG4gICAgaWYgKHByb3AgPT09ICdtaW4nKSB7XHJcbiAgICAgIHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1taW4nXSA9IFN0cmluZyhNYXRoLnJvdW5kKCt0aGlzLm1vZGVsLmRhdGFbJ21pbiddICsgKCtkYXRhWydtaW4nXSAvICgrZGF0YVsnc2xpZGVyV2lkdGgnXSAvICgrdGhpcy5tb2RlbC5kYXRhWydtYXgnXSAtICt0aGlzLm1vZGVsLmRhdGFbJ21pbiddKSkpKSk7XHJcbiAgICAgIHJldHVybiB7ICdtaW4nOiB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWluJ10gfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1heCddID0gU3RyaW5nKE1hdGgucm91bmQoK3RoaXMubW9kZWwuZGF0YVsnbWluJ10gKyAoK2RhdGFbJ21heCddIC8gKCtkYXRhWydzbGlkZXJXaWR0aCddIC8gKCt0aGlzLm1vZGVsLmRhdGFbJ21heCddIC0gK3RoaXMubW9kZWwuZGF0YVsnbWluJ10pKSkpKTtcclxuICAgICAgcmV0dXJuIHsgJ21heCc6IHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1tYXgnXSB9XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGdldE1vZGVsRGF0YSgpOiBvYmplY3Qge1xyXG4gICAgcmV0dXJuIHsgJ21pbic6IHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1taW4nXSwgJ21heCc6IHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1tYXgnXX1cclxuICB9O1xyXG5cclxuICBnZXRNYXhEYXRhKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gK3RoaXMubW9kZWwuZGF0YVsnbWF4J11cclxuICB9O1xyXG5cclxuICBnZXRQb3NzaWJsZVJhbmdlKCk6IEdldFBvc3NpYmxlUmFuZ2Uge1xyXG4gICAgcmV0dXJuIHsnbWF4Jzp0aGlzLm1vZGVsLmRhdGEubWF4LCAnbWluJzogdGhpcy5tb2RlbC5kYXRhLm1pbn07XHJcbiAgfTtcclxuXHJcbiAgZ2V0UG9zaXRpb25zQW1vdW50KCk6IEdldFBvc2l0aW9uc0Ftb3VudCB7XHJcbiAgICByZXR1cm4geydwb3NpdGlvbnMnOiBTdHJpbmcoK3RoaXMubW9kZWwuZGF0YS5tYXggLSArdGhpcy5tb2RlbC5kYXRhLm1pbiksICdtaW5pbXVtJzogdGhpcy5tb2RlbC5kYXRhLm1pbn07XHJcbiAgfVxyXG5cclxuICBnZXRWYWx1ZXNGb3JWYWx1ZVNjYWxlKCk6IEdldFZhbHVlc0ZvclZhbHVlU2NhbGUge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgJzE1JzogU3RyaW5nKCt0aGlzLm1vZGVsLmRhdGEubWluICsgKCgrdGhpcy5tb2RlbC5kYXRhLm1heCAtICt0aGlzLm1vZGVsLmRhdGEubWluKSAqIDAuMTUpKSxcclxuICAgICAgJzMwJzogU3RyaW5nKCt0aGlzLm1vZGVsLmRhdGEubWluICsgKCgrdGhpcy5tb2RlbC5kYXRhLm1heCAtICt0aGlzLm1vZGVsLmRhdGEubWluKSAqIDAuMzApKSxcclxuICAgICAgJzUwJzogU3RyaW5nKCt0aGlzLm1vZGVsLmRhdGEubWluICsgKCgrdGhpcy5tb2RlbC5kYXRhLm1heCAtICt0aGlzLm1vZGVsLmRhdGEubWluKSAqIDAuNTApKSxcclxuICAgICAgJzcwJzogU3RyaW5nKCt0aGlzLm1vZGVsLmRhdGEubWluICsgKCgrdGhpcy5tb2RlbC5kYXRhLm1heCAtICt0aGlzLm1vZGVsLmRhdGEubWluKSAqIDAuNzApKSxcclxuICAgICAgJzg1JzogU3RyaW5nKCt0aGlzLm1vZGVsLmRhdGEubWluICsgKCgrdGhpcy5tb2RlbC5kYXRhLm1heCAtICt0aGlzLm1vZGVsLmRhdGEubWluKSAqIDAuODUpKVxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBzZWxlY3RIYW5kbGVGb3JWYWx1ZVNjYWxlKHZhbHVlOiBzdHJpbmcsIGRvdWJsZVRvZ2dsZTogYm9vbGVhbik6IFNlbGVjdEhhbmRsZUZvclZhbHVlU2NhbGUge1xyXG4gICAgbGV0IG1pbkRpZmZlcmVuY2U6IHN0cmluZztcclxuICAgIGxldCBtYXhEaWZmZXJlbmNlOiBzdHJpbmc7XHJcbiAgICBpZihkb3VibGVUb2dnbGUpIHtcclxuICAgICAgaWYgKCt0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWluJ10gPiArdmFsdWUgfHwgK3RoaXMubW9kZWwuZGF0YVsnY3VycmVudC1taW4nXSA9PT0gK3ZhbHVlKSB7XHJcbiAgICAgICAgbWluRGlmZmVyZW5jZSA9IFN0cmluZygrdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1pbiddIC0gK3ZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtaW5EaWZmZXJlbmNlID0gU3RyaW5nKCt2YWx1ZSAtICt0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWluJ10pO1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgaWYgKCt0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWF4J10gPiArdmFsdWUgfHwgK3RoaXMubW9kZWwuZGF0YVsnY3VycmVudC1tYXgnXSA9PT0gK3ZhbHVlICkge1xyXG4gICAgICAgIG1heERpZmZlcmVuY2UgPSBTdHJpbmcoK3RoaXMubW9kZWwuZGF0YVsnY3VycmVudC1tYXgnXSAtICt2YWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWF4RGlmZmVyZW5jZSA9IFN0cmluZygrdmFsdWUgLSArdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1heCddKTtcclxuICAgICAgfTtcclxuICBcclxuICAgICAgaWYoK21pbkRpZmZlcmVuY2UgPCArbWF4RGlmZmVyZW5jZSB8fCArbWluRGlmZmVyZW5jZSA9PSArbWF4RGlmZmVyZW5jZSkge1xyXG4gICAgICAgIHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1taW4nXSA9IHZhbHVlO1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAndGFyZ2V0JzogJ21pbicsXHJcbiAgICAgICAgICAndmFsdWUnOiB2YWx1ZVxyXG4gICAgICAgIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1heCddID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICd0YXJnZXQnOiAnbWF4JyxcclxuICAgICAgICAgICd2YWx1ZSc6IHZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWluJ10gPSB2YWx1ZTtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAndGFyZ2V0JzogJ21pbicsXHJcbiAgICAgICAgJ3ZhbHVlJzogdmFsdWVcclxuICAgICAgfTtcclxuXHJcbiAgICB9O1xyXG4gIH07XHJcbn07IiwiaW50ZXJmYWNlIFRhcm5zZmVyZWRTZXR0aW5ncyB7XHJcbiAgJ21pbic6IHN0cmluZztcclxuICAnbWF4Jzogc3RyaW5nO1xyXG4gICdjdXJyZW50LW1pbic6IHN0cmluZztcclxuICAnY3VycmVudC1tYXgnOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU3RhcnRIYW5kZWxzUG9zaXRpb24ge1xyXG4gICdtaW5pbXVtJzogc3RyaW5nLCBcclxuICAnbWluJzogc3RyaW5nLFxyXG4gICdtYXgnOiBzdHJpbmcsIFxyXG4gICdwb3NpdGlvbnMnOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBJRGF0YSB7XHJcbiAgJ21pbic6IHN0cmluZztcclxuICAnbWF4Jzogc3RyaW5nO1xyXG4gICdjdXJyZW50LW1pbic6IHN0cmluZztcclxuICAnY3VycmVudC1tYXgnOiBzdHJpbmc7XHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RlbCB7XHJcblxyXG4gIGRhdGE6IElEYXRhO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCBzZXR0aW5nczogVGFybnNmZXJlZFNldHRpbmdzICkgeyBcclxuICAgIHRoaXMuZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHNldHRpbmdzKTtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnREYXRhKCk6IFN0YXJ0SGFuZGVsc1Bvc2l0aW9uIHtcclxuICAgIHJldHVybiB7J21pbmltdW0nOiB0aGlzLmRhdGEubWluLCAnbWluJzogdGhpcy5kYXRhWydjdXJyZW50LW1pbiddLCAnbWF4JzogdGhpcy5kYXRhWydjdXJyZW50LW1heCddLCAncG9zaXRpb25zJzogYCR7K3RoaXMuZGF0YS5tYXggLSArdGhpcy5kYXRhLm1pbn1gfVxyXG4gIH1cclxufSIsImltcG9ydCB7IEZhY2FkZSB9IGZyb20gJy4uL21vZGVsL2ZhY2FkZSc7XHJcbmltcG9ydCB7IFZpZXcgfSBmcm9tICcuLi92aWV3L3ZpZXcnO1xyXG5pbXBvcnQgeyBHZXRQb3NpdGlvbnNBbW91bnQgfSBmcm9tICcuLi9tb2RlbC9mYWNhZGUnO1xyXG5pbXBvcnQgeyBHZXRQb3NzaWJsZVJhbmdlIH0gZnJvbSAnLi4vbW9kZWwvZmFjYWRlJztcclxuaW1wb3J0IHsgU3RhcnRIYW5kZWxzUG9zaXRpb24gfSBmcm9tICcuLi9tb2RlbC9tb2RlbCc7XHJcbmltcG9ydCB7IEdldFZhbHVlc0ZvclZhbHVlU2NhbGUgfSBmcm9tICcuLi9tb2RlbC9mYWNhZGUnO1xyXG5pbXBvcnQgeyBTZWxlY3RIYW5kbGVGb3JWYWx1ZVNjYWxlIH0gZnJvbSAnLi4vbW9kZWwvZmFjYWRlJztcclxuaW1wb3J0IHsgRGF0YU9mVmFsdWVSZWZyZXNoIH0gZnJvbSAnLi4vdmlldy92aWV3JztcclxuXHJcbmV4cG9ydCBjbGFzcyBQcmVzZW50ZXIge1xyXG5cclxuICBwcml2YXRlIHZpZXdMaW5rO1xyXG4gIHByaXZhdGUgZmFjYWRlTGluaztcclxuXHJcbiAgY29uc3RydWN0b3IgKHZpZXc6IFZpZXcsIGZhY2FkZTogRmFjYWRlKSB7XHJcbiAgICB0aGlzLnZpZXdMaW5rID0gdmlldztcclxuICAgIHRoaXMuZmFjYWRlTGluayA9IGZhY2FkZTtcclxuICB9O1xyXG5cclxuICBzdGFydFZpZXdNb25pdG9yaW5nKCk6IHZvaWQge1xyXG4gICAgdGhpcy5tb25pdG9yc0N1cnJlbnRIYW5kZWxzUG9zaXRpb25zKCk7XHJcbiAgICB0aGlzLm1vbml0b3JzVmlld1JlcXVlc3RzKCk7XHJcbiAgfTtcclxuXHJcbiAgbW9uaXRvcnNDdXJyZW50SGFuZGVsc1Bvc2l0aW9ucygpOiB2b2lkIHtcclxuICAgIGxldCB2aWV3ID0gdGhpcy52aWV3TGluaztcclxuICAgIGxldCBmYWNhZGUgPSB0aGlzLmZhY2FkZUxpbms7XHJcblxyXG4gICAgdmlldy5zbGlkZXJNb3ZlbWVudC5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucyA9IG5ldyBQcm94eSh2aWV3LnNsaWRlck1vdmVtZW50LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLCB7XHJcbiAgICAgIHNldCh0YXJnZXQsIHByb3AsIHZhbCkge1xyXG4gICAgICAgIGlmKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICB0YXJnZXRbU3RyaW5nKHByb3ApXSA9IHZhbDtcclxuICAgICAgICAgIGxldCBtb2RlbFJlc3VsdCA9IGZhY2FkZS5yZWZyZXNoTW9kZWxEYXRhKHZhbCwgU3RyaW5nKHByb3ApKTtcclxuICAgICAgICAgIHZpZXcucmVmcmVzaEN1cnJlbnRWYWx1ZXMobW9kZWxSZXN1bHQpO1xyXG4gICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgfTtcclxuXHJcbiAgbW9uaXRvcnNWaWV3UmVxdWVzdHMoKTogdm9pZCB7XHJcbiAgICBsZXQgdmlldyA9IHRoaXMudmlld0xpbms7XHJcbiAgICBsZXQgZmFjYWRlID0gdGhpcy5mYWNhZGVMaW5rO1xyXG5cclxuICAgIHZpZXcuZGF0YVJlcXVlc3RTdGF0dXMgPSBuZXcgUHJveHkodmlldy5kYXRhUmVxdWVzdFN0YXR1cywge1xyXG4gICAgICBzZXQodGFyZ2V0LCBwcm9wLCB2YWwpIHtcclxuICAgICAgICBpZih0eXBlb2YgdmFsID09PSAnYm9vbGVhbicgfHwgdHlwZW9mIHZhbCA9PT0gJ3N0cmluZycpIHtcclxuXHJcbiAgICAgICAgICBpZihwcm9wID09PSAnZ2V0TWF4RGF0YScpIHtcclxuICAgICAgICAgICAgbGV0IHJlc3VsdDogbnVtYmVyID0gZmFjYWRlLmdldE1heERhdGEoKTtcclxuICAgICAgICAgICAgdmlldy5yZWZyZXNoTWF4U2lkZU1lbnVEYXRhKHJlc3VsdCk7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGlmKHByb3AgPT09ICdnZXRNaW5Qb3NpdGlvbnNBbW91bnQnKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbnM6IEdldFBvc2l0aW9uc0Ftb3VudCA9IGZhY2FkZS5nZXRQb3NpdGlvbnNBbW91bnQoKTtcclxuXHJcbiAgICAgICAgICAgIHZpZXcubWluSW5wdXQgPyB2aWV3LnNsaWRlck1vdmVtZW50LnNpZGVNZW51SW5wdXRzVmFsdWVzVmFsaWRhdGlvbkNoZWNrZXIoJ21pbicsICt2aWV3Lm1pbklucHV0LnZhbHVlLCArcG9zaXRpb25zWydwb3NpdGlvbnMnXSwgK3Bvc2l0aW9uc1snbWluaW11bSddKSA6IGZhbHNlO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBpZihwcm9wID09PSAnZ2V0TWF4UG9zaXRpb25zQW1vdW50Jykge1xyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb25zOiBHZXRQb3NpdGlvbnNBbW91bnQgPSBmYWNhZGUuZ2V0UG9zaXRpb25zQW1vdW50KCk7XHJcbiAgICAgICAgICAgIHZpZXcubWF4SW5wdXQgPyB2aWV3LnNsaWRlck1vdmVtZW50LnNpZGVNZW51SW5wdXRzVmFsdWVzVmFsaWRhdGlvbkNoZWNrZXIoJ21heCcsICt2aWV3Lm1heElucHV0LnZhbHVlLCArcG9zaXRpb25zWydwb3NpdGlvbnMnXSwgK3Bvc2l0aW9uc1snbWluaW11bSddKSA6IGZhbHNlO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBpZihwcm9wID09PSAnZ2V0UG9zc2libGVSYW5nZScpIHtcclxuICAgICAgICAgICAgbGV0IHBvc3NpYmxlUmFuZ2U6IEdldFBvc3NpYmxlUmFuZ2UgPSBmYWNhZGUuZ2V0UG9zc2libGVSYW5nZSgpO1xyXG4gICAgICAgICAgICB2aWV3Lm1pbklucHV0ICYmIHZpZXcubWF4SW5wdXQ/IHZpZXcuaW5wdXRzUG9zc2libGVSYW5nZShwb3NzaWJsZVJhbmdlLCB2aWV3Lm1pbklucHV0LCB2aWV3Lm1heElucHV0ICk6IGZhbHNlO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBpZihwcm9wID09PSAnc3RhcnRIYW5kZWxzUG9zaXRpb24nKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGFydFBvc2l0aW9uczogU3RhcnRIYW5kZWxzUG9zaXRpb24gPSBmYWNhZGUuc3RhcnRIYW5kZWxzUG9zaXRpb24oKTtcclxuICAgICAgICAgICAgdmlldy5zbGlkZXJNb3ZlbWVudC5zdGFydEhhbmRsZXJzUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zKTtcclxuICAgICAgICAgICAgdmlldy5yZWZyZXNoQ3VycmVudFZhbHVlcyhzdGFydFBvc2l0aW9ucyk7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGlmKHByb3AgPT09ICdnZXRTdGVwUG9zaXRpb25zQW1vdW50Jykge1xyXG4gICAgICAgICAgICBsZXQgc3RlcEFtb3VudDogR2V0UG9zaXRpb25zQW1vdW50ID0gZmFjYWRlLmdldFBvc2l0aW9uc0Ftb3VudCgpO1xyXG4gICAgICAgICAgICB2aWV3LnNsaWRlck1vdmVtZW50LnN0ZXBBbW91bnQgPSArc3RlcEFtb3VudFsncG9zaXRpb25zJ107XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGlmKHByb3AgPT09ICdnZXRWYWx1ZXNGb3JWYWx1ZVNjYWxlJykge1xyXG4gICAgICAgICAgICBsZXQgdmFsdWVTY2FsZVZhbHVlczogR2V0VmFsdWVzRm9yVmFsdWVTY2FsZSA9IGZhY2FkZS5nZXRWYWx1ZXNGb3JWYWx1ZVNjYWxlKCk7XHJcbiAgICAgICAgICAgIHZpZXcudmFsdWVTY2FsZS5yZWZyZXNoVmFsdWVzKHZhbHVlU2NhbGVWYWx1ZXMpO1xyXG4gICAgICAgICAgICB2aWV3LnZhbHVlU2NhbGUuY2VudGVyc1ZhbHVlc1Bvc2l0aW9ucyh2aWV3LnNsaWRlclJhbmdlLCB2aWV3Lm1pbkhhbmRlbCk7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGlmKHByb3AgPT09ICdzZWxlY3RIYW5kbGVGb3JWYWx1ZVNjYWxlJykge1xyXG5cclxuICAgICAgICAgICAgZnVuY3Rpb24gY2hlY2tEb3VibGVoYW5kZWxzKGRvdWJsZTogYm9vbGVhbik6IHZvaWQge1xyXG4gICAgICAgICAgICAgIGxldCBwb3NpdGlvbnM6IEdldFBvc2l0aW9uc0Ftb3VudCA9IGZhY2FkZS5nZXRQb3NpdGlvbnNBbW91bnQoKTtcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICBsZXQgc2VsZWN0ZWRIYW5kZWw6IFNlbGVjdEhhbmRsZUZvclZhbHVlU2NhbGUgPSBmYWNhZGUuc2VsZWN0SGFuZGxlRm9yVmFsdWVTY2FsZSh2YWwsIGRvdWJsZSk7XHJcblxyXG4gICAgICAgICAgICAgIHZpZXcuc2xpZGVyTW92ZW1lbnQuY2VudGVyZWRIYW5kZWxCeVZhbHVlU2NhbGUoc2VsZWN0ZWRIYW5kZWxbJ3RhcmdldCddLCBzZWxlY3RlZEhhbmRlbFsndmFsdWUnXSwgcG9zaXRpb25zWydwb3NpdGlvbnMnXSwgcG9zaXRpb25zWydtaW5pbXVtJ10pO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGlmIChzZWxlY3RlZEhhbmRlbFsndGFyZ2V0J10gPT09ICdtaW4nKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYWRhcHRlZE9iamVjdEZvclJlZnJlc2g6IERhdGFPZlZhbHVlUmVmcmVzaCA9IHtcclxuICAgICAgICAgICAgICAgICAgJ21pbic6IHNlbGVjdGVkSGFuZGVsWyd2YWx1ZSddXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgdmlldy5yZWZyZXNoQ3VycmVudFZhbHVlcyhhZGFwdGVkT2JqZWN0Rm9yUmVmcmVzaCk7XHJcbiAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGxldCBhZGFwdGVkT2JqZWN0Rm9yUmVmcmVzaDogRGF0YU9mVmFsdWVSZWZyZXNoID0ge1xyXG4gICAgICAgICAgICAgICAgICAnbWF4Jzogc2VsZWN0ZWRIYW5kZWxbJ3ZhbHVlJ11cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB2aWV3LnJlZnJlc2hDdXJyZW50VmFsdWVzKGFkYXB0ZWRPYmplY3RGb3JSZWZyZXNoKTtcclxuICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnICYmIHZpZXcuaGFuZGVsVG9nZ2xlKSB7XHJcbiAgICAgICAgICAgICAgY2hlY2tEb3VibGVoYW5kZWxzKHZpZXcuaGFuZGVsVG9nZ2xlLmNoZWNrZWQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIGNoZWNrRG91YmxlaGFuZGVscyh2aWV3LnNldHRpbmdzLnJhbmdlKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgaWYgKHByb3AgPT09IFwiZ2V0TWluU3RlcFwiICYmIHZpZXcuc3RlcElucHV0KSB7XHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbnM6IHN0cmluZyA9IGZhY2FkZS5nZXRQb3NpdGlvbnNBbW91bnQoKS5wb3NpdGlvbnM7XHJcbiAgICAgICAgICAgIHZpZXcuc2xpZGVyTW92ZW1lbnQuY2hlY2tWYWxpZGl0eU9mQ2hhbmdlZFN0ZXAoJ21pbicsIHZpZXcuc3RlcElucHV0LCBwb3NpdGlvbnMpO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBpZiAocHJvcCA9PT0gXCJjaGVja3NOZXdTdGVwRm9yVmFsaWRpdHlcIiAmJiB0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBsZXQgcG9zaXRpb25zOiBzdHJpbmcgPSBmYWNhZGUuZ2V0UG9zaXRpb25zQW1vdW50KCkucG9zaXRpb25zO1xyXG4gICAgICAgICAgICB2aWV3LnN0ZXBJbnB1dCA/IHZpZXcuc2xpZGVyTW92ZW1lbnQuY2hlY2tWYWxpZGl0eU9mQ2hhbmdlZFN0ZXAodmFsLCB2aWV3LnN0ZXBJbnB1dCwgcG9zaXRpb25zKSA6IGZhbHNlO1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbn07IiwiZXhwb3J0IGNsYXNzIEhhbmRlbHNMYWJlbHMge1xyXG4gIG1pbkxhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIG1heExhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGxldCBtaW46SFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsZXQgbWF4OkhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbWluLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlckhhbmRlbExhYmVsJyk7XHJcbiAgICBtYXguY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVySGFuZGVsTGFiZWwnKTtcclxuICAgIHRoaXMubWluTGFiZWwgPSBtaW47XHJcbiAgICB0aGlzLm1heExhYmVsID0gbWF4O1xyXG4gIH07XHJcbiAgXHJcbiAgZ2V0RWxlbWVudHMoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7J21pbic6IHRoaXMubWluTGFiZWwsICdtYXgnOiB0aGlzLm1heExhYmVsfTtcclxuICB9O1xyXG5cclxuICBkaXNwbGF5Q29udHJvbGxlcih0b2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQsIG1pbjogSFRNTExhYmVsRWxlbWVudCwgbWF4OiBIVE1MTGFiZWxFbGVtZW50KSB7XHJcbiAgICBpZiAodG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgbWluLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcclxuICAgICAgbWF4LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1pbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBtYXguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNlbnRlcmluZ1JlbGF0aXZlVG9IYW5kbGVzKG1pbkhhbmRlbFdpZHRoOiBudW1iZXIsIG1heEhhbmRlbFdpZHRoOiBudW1iZXIsIG1pbkxhYmVsV2lkdGg6IG51bWJlciwgbWF4TGFiZWxXaWR0aDogbnVtYmVyLCBtaW5MYWJlbDogSFRNTExhYmVsRWxlbWVudCwgbWF4TGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIG1pbkxhYmVsLnN0eWxlLmxlZnQgPSAobWluSGFuZGVsV2lkdGggLSBtaW5MYWJlbFdpZHRoKSAvIDIgKyAncHgnO1xyXG4gICAgbWF4TGFiZWwuc3R5bGUubGVmdCA9IChtYXhIYW5kZWxXaWR0aCAtIG1heExhYmVsV2lkdGgpIC8gMiArICdweCc7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEhhbmRlbHMge1xyXG5cclxuICByZWFkb25seSBtaW5IYW5kZWw6IEhUTUxTcGFuRWxlbWVudDtcclxuICByZWFkb25seSBtYXhIYW5kZWw6IEhUTUxTcGFuRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsZXQgbWluOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBsZXQgbWF4OiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBtaW4uY2xhc3NMaXN0LmFkZCgnbWluU2xpZGVySGFuZGVsJyk7XHJcbiAgICBtYXguY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVySGFuZGVsJyk7XHJcbiAgICB0aGlzLm1pbkhhbmRlbCA9IG1pbjtcclxuICAgIHRoaXMubWF4SGFuZGVsID0gbWF4O1xyXG4gIH07XHJcblxyXG4gIGdldEVsZW1lbnRzKCk6IG9iamVjdCB7XHJcbiAgICByZXR1cm4ge21pbjogdGhpcy5taW5IYW5kZWwsIG1heDogdGhpcy5tYXhIYW5kZWx9O1xyXG4gIH07XHJcblxyXG4gIGRpc3BsYXlDb250cm9sbGVyKHRvZ2dsZTogSFRNTElucHV0RWxlbWVudCwgbWF4OiBIVE1MU3BhbkVsZW1lbnQpIHtcclxuICAgIGlmICh0b2dnbGUuY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBtYXguc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtYXguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbn07IiwiZXhwb3J0IGNsYXNzIFNlbGVjdGVkUmFuZ2Uge1xyXG5cclxuICByZWFkb25seSBpbnRlcnZhbDogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgbGV0IGludGVydmFsOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW50ZXJ2YWwuY2xhc3NMaXN0LmFkZCgnbWFpbkludGVydmFsJyk7XHJcbiAgICB0aGlzLmludGVydmFsID0gaW50ZXJ2YWw7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50cygpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnRlcnZhbDtcclxuICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgU2lkZU1lbnUge1xyXG4gIGN1c3RvbVNsaWRlck1lbnVDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gIGhhbmRlbFRvZ2dsZTogSFRNTElucHV0RWxlbWVudDtcclxuICBoYW5kZWxMYWJlbFRvZ2dsZTogSFRNTElucHV0RWxlbWVudDtcclxuICBwbGFuZVRvZ2dsZTogSFRNTElucHV0RWxlbWVudDtcclxuICBtaW5JbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICBtYXhJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICBzdGVwSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgbWluU2xpZGVyVmFsdWVPdXRwdXQ6IEhUTUxPdXRwdXRFbGVtZW50O1xyXG4gIG1heFNsaWRlclZhbHVlT3V0cHV0OiBIVE1MT3V0cHV0RWxlbWVudDtcclxuICB2YWx1ZVNjYWxlVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgbGV0IHNsaWRlclZhbHVlUDpIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHNsaWRlclZhbHVlUC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJQYXJhZ1ZhbCcpO1xyXG4gICAgc2xpZGVyVmFsdWVQLmlubmVyVGV4dCA9ICfQotC10LrRg9GJ0LXQtSDQt9Cw0L3Rh9C10L3QuNC1OiAnO1xyXG4gICAgXHJcbiAgICBsZXQgbWluU2xpZGVyVmFsdWVPdXRwdXQ6IEhUTUxPdXRwdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3V0cHV0Jyk7XHJcbiAgICBtaW5TbGlkZXJWYWx1ZU91dHB1dC5jbGFzc0xpc3QuYWRkKCdzbGlkZXJWYWx1ZScpO1xyXG4gICAgbWluU2xpZGVyVmFsdWVPdXRwdXQuaWQgPSAnbWluU2xpZGVyVmFsdWUnO1xyXG4gICAgbGV0IG1heFNsaWRlclZhbHVlT3V0cHV0OiBIVE1MT3V0cHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ291dHB1dCcpO1xyXG4gICAgbWF4U2xpZGVyVmFsdWVPdXRwdXQuY2xhc3NMaXN0LmFkZCgnc2xpZGVyVmFsdWUnKTtcclxuICAgIG1heFNsaWRlclZhbHVlT3V0cHV0LmlkID0gJ21heFNsaWRlclZhbHVlJztcclxuICAgIFxyXG4gICAgbGV0IHNsaWRlclRvZ2dsZVA6SFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBzbGlkZXJUb2dnbGVQLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclBhcmFnJyk7XHJcbiAgICBzbGlkZXJUb2dnbGVQLmlubmVyVGV4dCA9ICfQktC60LvRjtGH0LjRgtGMINCy0YLQvtGA0L7QuSDQv9C+0LvQt9GD0L3QvtC6OiAnO1xyXG4gICAgXHJcbiAgICBsZXQgc2xpZGVyVG9nZ2xlTGFiZWw6SFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBzbGlkZXJUb2dnbGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJUb2dnbGUnKTtcclxuXHJcbiAgICBsZXQgbWF4U2xpZGVySGFuZGVsVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIG1heFNsaWRlckhhbmRlbFRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJIYW5kZWxUb2dnbGUnKTtcclxuICAgIG1heFNsaWRlckhhbmRlbFRvZ2dsZS5pZCA9ICdtYXhTbGlkZXJIYW5kZWxUb2dnbGUnO1xyXG4gICAgbWF4U2xpZGVySGFuZGVsVG9nZ2xlLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXHJcblxyXG4gICAgbGV0IGN1c3RvbVNsaWRlckJvcmRlcjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY3VzdG9tU2xpZGVyQm9yZGVyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVRvZ2dsZVNsaWRlckJvcmRlcicpO1xyXG5cclxuICAgIGxldCBjdXN0b21TbGlkZXJJbnB1dHM6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHMuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVySW5wdXRzJyk7XHJcbiAgICBcclxuICAgIGxldCBjdXN0b21TbGlkZXJJbnB1dHNQOiBIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c1AuaW5uZXJUZXh0ID0gJ9CY0LfQvNC10L3QuNGC0Ywg0LfQvdCw0YfQtdC90LjQtTogJztcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c1AuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyUGFyYWcnKTtcclxuXHJcbiAgICBsZXQgY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWwuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVySW5wdXRsYWJlbCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY3VzdG9tU2xpZGVyTWluSW5wdXQnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01pbkxhYmVsLmlubmVyVGV4dCA9ICdNaW46ICc7XHJcbiAgICBcclxuICAgIGxldCBjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJJbnB1dGxhYmVsJyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjdXN0b21TbGlkZXJNYXhJbnB1dCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWF4TGFiZWwuaW5uZXJUZXh0ID0gJ01heDogJztcclxuXHJcbiAgICBsZXQgY3VzdG9tU2xpZGVySW5wdXRzTWluOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01pbi5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJNaW5JbnB1dCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluLmlkID0gJ2N1c3RvbVNsaWRlck1pbklucHV0JztcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01pbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XHJcblxyXG4gICAgbGV0IGN1c3RvbVNsaWRlcklucHV0c01heDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXguY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyTWF4SW5wdXQnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01heC5pZCA9ICdjdXN0b21TbGlkZXJNYXhJbnB1dCc7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXguc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xyXG4gICAgXHJcbiAgICBsZXQgdG9nZ2xlRm9yVmFsdWVzQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JWYWx1ZXNQOiBIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc1AuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyUGFyYWcnKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc1AuaW5uZXJUZXh0ID0gJ9CS0LrQu9GO0YfQuNGC0Ywg0LfQvdCw0YfQtdC90LjRjyDQv9C+0LQg0L/QvtC70LfRg9C90LrQsNC80Lg6ICc7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclZhbHVlc0xhYmVsOiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc0xhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclRvZ2dsZScpO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JWYWx1ZXNJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc0lucHV0LmNsYXNzTGlzdC5hZGQoJ3Nob3dWYWx1ZVRvZ2dsZScpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzSW5wdXQuaWQgPSAnc2hvd1ZhbHVlVG9nZ2xlJztcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yVmFsdWVzU3BhbjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzU3Bhbi5jbGFzc0xpc3QuYWRkKCdjdXN0b21Ub2dnbGVTbGlkZXJCb3JkZXInKTtcclxuICAgIFxyXG4gICAgbGV0IHN0ZXBDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBzdGVwQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclN0ZXBDb250YWluZXInKTtcclxuXHJcbiAgICBsZXQgc3RlcElucHV0UDogSFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBzdGVwSW5wdXRQLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclBhcmFnJyk7XHJcbiAgICBzdGVwSW5wdXRQLmlubmVyVGV4dCA9ICfQmNC30LzQtdC90LjRgtGMINGI0LDQsyDQv9C+0LvQt9GD0L3QutCwOiAnO1xyXG5cclxuICAgIGxldCBmb3JTdGVwSW5wdXRMYWJlbDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBmb3JTdGVwSW5wdXRMYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJJbnB1dGxhYmVsJyk7XHJcbiAgICBmb3JTdGVwSW5wdXRMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjdXN0b21TbGlkZXJTdGVwSW5wdXQnKTtcclxuICAgIGZvclN0ZXBJbnB1dExhYmVsLmlubmVyVGV4dCA9ICdTdGVwOiAnO1xyXG5cclxuICAgIGxldCBzdGVwSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgc3RlcElucHV0LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclN0ZXBJbnB1dCcpO1xyXG4gICAgc3RlcElucHV0LmlkID0gJ2N1c3RvbVNsaWRlclN0ZXBJbnB1dCc7XHJcbiAgICBzdGVwSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xyXG5cclxuICAgIGxldCB2YWx1ZVNjYWxlQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JWYWx1ZVNjYWxlUDogSFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZVNjYWxlUC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJQYXJhZycpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVTY2FsZVAuaW5uZXJUZXh0ID0gJ9CS0LrQu9GO0YfQuNGC0Ywg0YjQutCw0LvRgyDQt9C90LDRh9C10L3QuNC5OiAnO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JWYWx1ZVNjYWxlTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVTY2FsZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclRvZ2dsZScpO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JWYWx1ZVNjYWxlSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVTY2FsZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVTY2FsZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3ZhbHVlU2NhbGVUb2dnbGUnKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlU2NhbGVJbnB1dC5pZCA9ICd2YWx1ZVNjYWxlVG9nZ2xlJztcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yVmFsdWVTY2FsZVNwYW46IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlU2NhbGVTcGFuLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVRvZ2dsZVNsaWRlckJvcmRlcicpO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JQbGFuZUNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yUGxhbmVQOiBIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lUC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJQYXJhZycpO1xyXG4gICAgdG9nZ2xlRm9yUGxhbmVQLmlubmVyVGV4dCA9ICfQmNC30LzQtdC90LjRgtGMINC/0LvQvtGB0LrQvtGB0YLRjDogJztcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yUGxhbmVMYWJlbDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclRvZ2dsZScpO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JQbGFuZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3BsYW5lVG9nZ2xlJyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZUlucHV0LmlkID0gJ3BsYW5lVG9nZ2xlJztcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yUGxhbmVTcGFuOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZVNwYW4uY2xhc3NMaXN0LmFkZCgnY3VzdG9tVG9nZ2xlU2xpZGVyQm9yZGVyJyk7XHJcblxyXG4gICAgbGV0IG1haW5TbGlkZXJDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgbWFpblNsaWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzbGlkZXJNZW51Q29udGFpbmVyJyk7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZChzbGlkZXJWYWx1ZVApO1xyXG4gICAgc2xpZGVyVmFsdWVQLmFwcGVuZChtaW5TbGlkZXJWYWx1ZU91dHB1dCk7XHJcbiAgICBzbGlkZXJWYWx1ZVAuYXBwZW5kKG1heFNsaWRlclZhbHVlT3V0cHV0KTtcclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuYXBwZW5kKHNsaWRlclRvZ2dsZVApO1xyXG4gICAgbWFpblNsaWRlckNvbnRhaW5lci5hcHBlbmQoc2xpZGVyVG9nZ2xlTGFiZWwpO1xyXG4gICAgXHJcbiAgICBzbGlkZXJUb2dnbGVMYWJlbC5hcHBlbmQobWF4U2xpZGVySGFuZGVsVG9nZ2xlLCBjdXN0b21TbGlkZXJCb3JkZXIpO1xyXG5cclxuICAgIGN1c3RvbVNsaWRlcklucHV0cy5hcHBlbmQoY3VzdG9tU2xpZGVySW5wdXRzUCwgY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWwsIGN1c3RvbVNsaWRlcklucHV0c01pbiwgY3VzdG9tU2xpZGVySW5wdXRzTWF4TGFiZWwsIGN1c3RvbVNsaWRlcklucHV0c01heCk7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZChjdXN0b21TbGlkZXJJbnB1dHMpO1xyXG5cclxuICAgIHN0ZXBDb250YWluZXIuYXBwZW5kKHN0ZXBJbnB1dFAsIGZvclN0ZXBJbnB1dExhYmVsLCBzdGVwSW5wdXQpXHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZChzdGVwQ29udGFpbmVyKTtcclxuXHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNDb250YWluZXIuYXBwZW5kKHRvZ2dsZUZvclZhbHVlc1AsIHRvZ2dsZUZvclZhbHVlc0xhYmVsKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc0xhYmVsLmFwcGVuZCh0b2dnbGVGb3JWYWx1ZXNJbnB1dCwgdG9nZ2xlRm9yVmFsdWVzU3Bhbik7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZCh0b2dnbGVGb3JWYWx1ZXNDb250YWluZXIpO1xyXG4gICAgXHJcbiAgICB2YWx1ZVNjYWxlQ29udGFpbmVyLmFwcGVuZCh0b2dnbGVGb3JWYWx1ZVNjYWxlUCwgdG9nZ2xlRm9yVmFsdWVTY2FsZUxhYmVsKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlU2NhbGVMYWJlbC5hcHBlbmQodG9nZ2xlRm9yVmFsdWVTY2FsZUlucHV0LCB0b2dnbGVGb3JWYWx1ZVNjYWxlU3Bhbik7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZCh2YWx1ZVNjYWxlQ29udGFpbmVyKTtcclxuXHJcbiAgICB0b2dnbGVGb3JQbGFuZUNvbnRhaW5lci5hcHBlbmQodG9nZ2xlRm9yUGxhbmVQLCB0b2dnbGVGb3JQbGFuZUxhYmVsKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lTGFiZWwuYXBwZW5kKHRvZ2dsZUZvclBsYW5lSW5wdXQsIHRvZ2dsZUZvclBsYW5lU3Bhbik7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZCh0b2dnbGVGb3JQbGFuZUNvbnRhaW5lcik7XHJcblxyXG4gICAgc3RlcENvbnRhaW5lci5hcHBlbmQoc3RlcElucHV0UCwgZm9yU3RlcElucHV0TGFiZWwsIHN0ZXBJbnB1dClcclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuYXBwZW5kKHN0ZXBDb250YWluZXIpO1xyXG5cclxuXHJcbiAgICB0aGlzLmN1c3RvbVNsaWRlck1lbnVDb250YWluZXIgPSBtYWluU2xpZGVyQ29udGFpbmVyO1xyXG4gICAgdGhpcy5oYW5kZWxUb2dnbGUgPSBtYXhTbGlkZXJIYW5kZWxUb2dnbGU7XHJcbiAgICB0aGlzLmhhbmRlbExhYmVsVG9nZ2xlID0gdG9nZ2xlRm9yVmFsdWVzSW5wdXQ7XHJcbiAgICB0aGlzLnBsYW5lVG9nZ2xlID0gdG9nZ2xlRm9yUGxhbmVJbnB1dDtcclxuICAgIHRoaXMubWluSW5wdXQgPSBjdXN0b21TbGlkZXJJbnB1dHNNaW47XHJcbiAgICB0aGlzLm1heElucHV0ID0gY3VzdG9tU2xpZGVySW5wdXRzTWF4O1xyXG4gICAgdGhpcy5taW5TbGlkZXJWYWx1ZU91dHB1dCA9IG1pblNsaWRlclZhbHVlT3V0cHV0O1xyXG4gICAgdGhpcy5tYXhTbGlkZXJWYWx1ZU91dHB1dCA9IG1heFNsaWRlclZhbHVlT3V0cHV0O1xyXG4gICAgdGhpcy52YWx1ZVNjYWxlVG9nZ2xlID0gdG9nZ2xlRm9yVmFsdWVTY2FsZUlucHV0O1xyXG4gICAgdGhpcy5zdGVwSW5wdXQgPSBzdGVwSW5wdXQ7XHJcbiAgfTtcclxufTsiLCJpbXBvcnQgeyBTdGFydEhhbmRlbHNQb3NpdGlvbiB9IGZyb20gJy4uLy4uL21vZGVsL21vZGVsJztcclxuXHJcbmludGVyZmFjZSBIYW5kZWxzIHtcclxuICBtaW46IEhUTUxTcGFuRWxlbWVudDtcclxuICBtYXg6IEhUTUxTcGFuRWxlbWVudDtcclxuICBtaW5MYWJlbDogSFRNTExhYmVsRWxlbWVudDtcclxuICBtYXhMYWJlbDogSFRNTExhYmVsRWxlbWVudDtcclxuICBzbGlkZXJSYW5nZTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgaGFuZGVsc1RvZ2dsZTogSFRNTElucHV0RWxlbWVudCB8IGJvb2xlYW47XHJcbiAgcGxhbmVUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQgfCBib29sZWFuO1xyXG4gIGludGVydmFsOiBIVE1MRGl2RWxlbWVudDtcclxuICBzdGVwOiBudW1iZXIgfCBzdHJpbmcgfCBib29sZWFuO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIFRlc3RNb3VzZUV2ZW50IHtcclxuICBjbGllbnRYOiBudW1iZXI7XHJcbiAgY2xpZW50WTogbnVtYmVyO1xyXG59XHJcblxyXG5pbnRlcmZhY2UgQ3VycmVudEhhbmRlbHNQb3NpdGlvbnMge1xyXG4gIFtrZXk6IHN0cmluZ106IHtcclxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZztcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFNsaWRlck1vdmVtZW50IHtcclxuICBtaW46IEhUTUxTcGFuRWxlbWVudDtcclxuICBtYXg6IEhUTUxTcGFuRWxlbWVudDtcclxuICBtaW5MYWJlbDogSFRNTExhYmVsRWxlbWVudDtcclxuICBtYXhMYWJlbDogSFRNTExhYmVsRWxlbWVudDtcclxuICBzbGlkZXJSYW5nZTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgaGFuZGVsc1RvZ2dsZTogSFRNTElucHV0RWxlbWVudCB8IGJvb2xlYW47XHJcbiAgcGxhbmVUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQgfCBib29sZWFuO1xyXG4gIGludGVydmFsOiBIVE1MRGl2RWxlbWVudDtcclxuICBzdGVwOiBudW1iZXIgfCBzdHJpbmcgfCBib29sZWFuO1xyXG4gIHN0ZXBBbW91bnQ6IG51bWJlciB8IHVuZGVmaW5lZDtcclxuXHJcbiAgY29uc3RydWN0b3IoIGhhbmRlbHM6IEhhbmRlbHMpIHtcclxuICAgIHRoaXMubWluID0gaGFuZGVscy5taW47XHJcbiAgICB0aGlzLm1heCA9IGhhbmRlbHMubWF4O1xyXG4gICAgdGhpcy5taW5MYWJlbCA9IGhhbmRlbHMubWluTGFiZWw7XHJcbiAgICB0aGlzLm1heExhYmVsPSBoYW5kZWxzLm1heExhYmVsO1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZSA9IGhhbmRlbHMuc2xpZGVyUmFuZ2U7XHJcbiAgICB0aGlzLmhhbmRlbHNUb2dnbGUgPSBoYW5kZWxzLmhhbmRlbHNUb2dnbGU7XHJcbiAgICB0aGlzLnBsYW5lVG9nZ2xlID0gaGFuZGVscy5wbGFuZVRvZ2dsZTtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBoYW5kZWxzLmludGVydmFsO1xyXG4gICAgdGhpcy5zdGVwID0gaGFuZGVscy5zdGVwO1xyXG4gIH1cclxuXHJcbiAgY3VycmVudEhhbmRlbHNQb3NpdGlvbnM6IEN1cnJlbnRIYW5kZWxzUG9zaXRpb25zID0ge1xyXG4gICAgJ21pbic6IHt9LFxyXG4gICAgJ21heCc6IHt9XHJcbiAgfVxyXG5cclxuICBzdGFydEhhbmRsZXJzUG9zaXRpb25zKHBvc2l0aW9uVmFsdWVzOiBTdGFydEhhbmRlbHNQb3NpdGlvbiApOiB2b2lkIHtcclxuICAgIGxldCBtaW46IHN0cmluZyA9ICgodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSAvICtwb3NpdGlvblZhbHVlcy5wb3NpdGlvbnMpICogKCtwb3NpdGlvblZhbHVlc1snbWluJ10gLSArcG9zaXRpb25WYWx1ZXNbJ21pbmltdW0nXSkgKyAnJztcclxuICAgIGxldCBtYXg6IHN0cmluZyA9ICgodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSAvICtwb3NpdGlvblZhbHVlcy5wb3NpdGlvbnMpICogKCtwb3NpdGlvblZhbHVlc1snbWF4J10gLSArcG9zaXRpb25WYWx1ZXNbJ21pbmltdW0nXSkgKyAnJztcclxuICAgIFxyXG4gICAgdGhpcy5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5taW4ubWluID0gbWluO1xyXG4gICAgdGhpcy5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5tYXgubWF4ID0gbWF4O1xyXG4gICAgXHJcbiAgICB0aGlzLm1pbi5zdHlsZS5sZWZ0ID0gbWluICsgJ3B4JztcclxuICAgIHRoaXMubWF4LnN0eWxlLmxlZnQgPSBtYXggKyAncHgnO1xyXG4gICAgXHJcbiAgICB0aGlzLmludGVydmFsLnN0eWxlLmxlZnQgPSArbWluICsgdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUucmlnaHQgPSAodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtICttYXgpIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICB9XHJcblxyXG4gIG1pbkhhbmRlbExpc3RlbmVyKCBldmVudDogVGVzdE1vdXNlRXZlbnQsIHRlc3Q6IFRlc3RNb3VzZUV2ZW50IHwgdW5kZWZpbmVkICk6IHZvaWQge1xyXG4gICAgbGV0IG1pbiA9IHRoaXMubWluO1xyXG4gICAgbGV0IG1heCA9IHRoaXMubWF4O1xyXG4gICAgbGV0IG1pbkxhYmVsID0gdGhpcy5taW5MYWJlbDtcclxuICAgIGxldCBzbGlkZXJSYW5nZSA9IHRoaXMuc2xpZGVyUmFuZ2U7XHJcbiAgICBsZXQgdGhhdDogdGhpcyA9IHRoaXM7XHJcbiAgICBsZXQgc2hpZnQ6IG51bWJlcjtcclxuICAgIGxldCBpbnRlcnZhbCA9IHRoaXMuaW50ZXJ2YWw7XHJcbiAgICBsZXQgc3RlcDogbnVtYmVyO1xyXG4gICAgbGV0IHZlcnRpY2FsOiBib29sZWFuO1xyXG4gICAgbGV0IGRvdWJsZUhhbmRlbHM6IGJvb2xlYW47XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tDdXJyZW50U2xpZGVyU2V0dGluZ3MoKTp2b2lkIHtcclxuICAgICAgdHlwZW9mIHRoYXQuaGFuZGVsc1RvZ2dsZSAhPT0gJ2Jvb2xlYW4nID8gZG91YmxlSGFuZGVscyA9IHRoYXQuaGFuZGVsc1RvZ2dsZS5jaGVja2VkIDogZG91YmxlSGFuZGVscyA9IHRoYXQuaGFuZGVsc1RvZ2dsZTs7XHJcbiAgICAgIHR5cGVvZiB0aGF0LnBsYW5lVG9nZ2xlICE9PSAnYm9vbGVhbicgPyB2ZXJ0aWNhbCA9IHRoYXQucGxhbmVUb2dnbGUuY2hlY2tlZCA6IHRoYXQucGxhbmVUb2dnbGU7XHJcbiAgICAgIFxyXG4gICAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgICBzaGlmdCA9IGV2ZW50LmNsaWVudFkgLSBtaW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gbWluLm9mZnNldFdpZHRoO1xyXG4gICAgICB9IGVsc2UgeyAgXHJcbiAgICAgICAgc2hpZnQgPSBldmVudC5jbGllbnRYIC0gbWluLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjaGVja0N1cnJlbnRTbGlkZXJTZXR0aW5ncygpO1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5zdGVwQW1vdW50ICAmJiB0aGlzLnN0ZXAgIT09IGZhbHNlKSB7XHJcbiAgICAgIHN0ZXAgPSAoc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSBtaW4ub2Zmc2V0V2lkdGgpIC8gdGhpcy5zdGVwQW1vdW50ICogK3RoaXMuc3RlcDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcbiAgICBcclxuICAgIGlmKCB0ZXN0ICkge1xyXG4gICAgICBvbk1vdXNlTW92ZSggdGVzdCApXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCBldmVudDogVGVzdE1vdXNlRXZlbnQgKSB7XHJcbiAgICAgIGxldCBuZXdMZWZ0OiBudW1iZXI7XHJcblxyXG4gICAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgICBuZXdMZWZ0ID0gc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSAoZXZlbnQuY2xpZW50WSAtIHNoaWZ0IC0gc2xpZGVyUmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdMZWZ0ID0gZXZlbnQuY2xpZW50WCAtIHNoaWZ0IC0gc2xpZGVyUmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGxldCByaWdodEVkZ2UgPSBzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG1pbi5vZmZzZXRXaWR0aDtcclxuICAgICAgXHJcbiAgICAgIGlmICh0aGF0LnN0ZXAgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKG5ld0xlZnQgPj0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWluLm1pbiArIHN0ZXAgfHwgbmV3TGVmdCA8PSArdGhhdC5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5taW4ubWluIC0gc3RlcCkge1xyXG4gICAgICAgICAgbmV3TGVmdCA+PSArdGhhdC5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5taW4ubWluICsgc3RlcCA/IG5ld0xlZnQgPSArdGhhdC5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5taW4ubWluICsgc3RlcCA6IGZhbHNlO1xyXG4gICAgICAgICAgbmV3TGVmdCA8PSArdGhhdC5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5taW4ubWluIC0gc3RlcCA/IG5ld0xlZnQgPSArdGhhdC5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5taW4ubWluIC0gc3RlcCA6IGZhbHNlO1xyXG4gICAgICAgICAgcmVuZXdhbE9mUG9zaXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVuZXdhbE9mUG9zaXRpb24oKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHJlbmV3YWxPZlBvc2l0aW9uKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAobmV3TGVmdCA8IDApIHtcclxuICAgICAgICAgIG5ld0xlZnQgPSAwO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGRvdWJsZUhhbmRlbHMpIHsgXHJcbiAgICAgICAgICBpZiAobmV3TGVmdCA+PSArdGhhdC5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5tYXhbJ21heCddIC0gbWF4Lm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgICAgIG5ld0xlZnQgPSArdGhhdC5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5tYXhbJ21heCddIC0gbWF4Lm9mZnNldFdpZHRoXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAobmV3TGVmdCA+IHJpZ2h0RWRnZSkge1xyXG4gICAgICAgICAgICBuZXdMZWZ0ID0gcmlnaHRFZGdlO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtaW4uc3R5bGUubGVmdCA9IG5ld0xlZnQgKyAncHgnO1xyXG4gICAgICAgIGludGVydmFsLnN0eWxlLmxlZnQgPSBuZXdMZWZ0ICsgbWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG5ld0xlZnQgIT09IHVuZGVmaW5lZCB8fCByaWdodEVkZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdGhhdC5jdXJyZW50SGFuZGVsc1Bvc2l0aW9uc1snbWluJ10gPSB7J21pbic6IGAke25ld0xlZnR9YCwgJ3NsaWRlcldpZHRoJzogYCR7c2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSBtaW4ub2Zmc2V0V2lkdGh9YH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1pbkxhYmVsLnN0eWxlLmxlZnQgPSAoKG1pbi5vZmZzZXRXaWR0aCAtIG1pbkxhYmVsLm9mZnNldFdpZHRoKSAtIDEpIC8gMiArICdweCc7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uTW91c2VVcCgpIHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1heEhhbmRlbExpc3RlbmVyKCBldmVudDogVGVzdE1vdXNlRXZlbnQsIHRlc3Q6IFRlc3RNb3VzZUV2ZW50IHwgdW5kZWZpbmVkKTogdm9pZCB7XHJcbiAgICBsZXQgbWF4ID0gdGhpcy5tYXg7XHJcbiAgICBsZXQgbWluID0gdGhpcy5taW47XHJcbiAgICBsZXQgc2xpZGVyUmFuZ2UgPSB0aGlzLnNsaWRlclJhbmdlO1xyXG4gICAgbGV0IHNoaWZ0OiBudW1iZXI7XHJcbiAgICBsZXQgbWF4TGFiZWwgPSB0aGlzLm1heExhYmVsO1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgbGV0IGludGVydmFsID0gdGhpcy5pbnRlcnZhbDtcclxuICAgIGxldCBzdGVwOiBudW1iZXI7XHJcbiAgICBsZXQgZG91YmxlSGFuZGVsczogYm9vbGVhbjtcclxuICAgIGxldCB2ZXJ0aWNhbDogYm9vbGVhbjtcclxuXHJcbiAgICBpZiAodGhpcy5zdGVwQW1vdW50ICYmIHRoaXMuc3RlcCAhPT0gZmFsc2UpIHtcclxuICAgICAgc3RlcCA9IChzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG1pbi5vZmZzZXRXaWR0aCkgLyB0aGlzLnN0ZXBBbW91bnQgKiArdGhpcy5zdGVwO1xyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIGNoZWNrQ3VycmVudFNsaWRlclNldHRpbmdzKCk6dm9pZCB7XHJcbiAgICAgIHR5cGVvZiB0aGF0LmhhbmRlbHNUb2dnbGUgIT09ICdib29sZWFuJyA/IGRvdWJsZUhhbmRlbHMgPSB0aGF0LmhhbmRlbHNUb2dnbGUuY2hlY2tlZCA6IGRvdWJsZUhhbmRlbHMgPSB0aGF0LmhhbmRlbHNUb2dnbGU7O1xyXG4gICAgICB0eXBlb2YgdGhhdC5wbGFuZVRvZ2dsZSAhPT0gJ2Jvb2xlYW4nID8gdmVydGljYWwgPSB0aGF0LnBsYW5lVG9nZ2xlLmNoZWNrZWQgOiB0aGF0LnBsYW5lVG9nZ2xlO1xyXG5cclxuICAgICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgICAgc2hpZnQgPSBldmVudC5jbGllbnRZIC0gbWF4LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIG1heC5vZmZzZXRXaWR0aDtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzaGlmdCA9IGV2ZW50LmNsaWVudFggLSBtYXguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgICAgfVxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgY2hlY2tDdXJyZW50U2xpZGVyU2V0dGluZ3MoKTtcclxuXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuXHJcbiAgICBpZiggdGVzdCAhPT0gdW5kZWZpbmVkICkge1xyXG4gICAgICBvbk1vdXNlTW92ZSggdGVzdCApXHJcbiAgICB9O1xyXG5cclxuICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCBldmVudDogVGVzdE1vdXNlRXZlbnQgKSB7XHJcbiAgICAgIGxldCBuZXdMZWZ0OiBudW1iZXI7XHJcbiAgICAgIFxyXG4gICAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgICBuZXdMZWZ0ID0gc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSAoZXZlbnQuY2xpZW50WSAtIHNoaWZ0IC0gc2xpZGVyUmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdMZWZ0ID0gZXZlbnQuY2xpZW50WCAtIHNoaWZ0IC0gc2xpZGVyUmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHJpZ2h0RWRnZSA9IHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gbWF4Lm9mZnNldFdpZHRoO1xyXG5cclxuICAgICAgaWYgKHRoYXQuc3RlcCAhPT0gZmFsc2UpIHtcclxuICAgICAgICBpZiAobmV3TGVmdCA+PSArdGhhdC5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5tYXgubWF4ICsgc3RlcCB8fCBuZXdMZWZ0IDw9ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1heC5tYXggLSBzdGVwKSB7XHJcbiAgICAgICAgICBuZXdMZWZ0ID49ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1heC5tYXggKyBzdGVwID8gbmV3TGVmdCA9ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1heC5tYXggKyBzdGVwIDogZmFsc2U7XHJcbiAgICAgICAgICBuZXdMZWZ0IDw9ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1heC5tYXggLSBzdGVwID8gbmV3TGVmdCA9ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1heC5tYXggLSBzdGVwIDogZmFsc2U7XHJcbiAgICAgICAgICByZW5ld2FsT2ZQb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZW5ld2FsT2ZQb3NpdGlvbigpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgZnVuY3Rpb24gcmVuZXdhbE9mUG9zaXRpb24oKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmIChuZXdMZWZ0IDwgMCkge1xyXG4gICAgICAgICAgbmV3TGVmdCA9IDA7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKG5ld0xlZnQgPiByaWdodEVkZ2UpIHtcclxuICAgICAgICAgIG5ld0xlZnQgPSByaWdodEVkZ2U7XHJcbiAgICAgICAgfTtcclxuICBcclxuICAgICAgICBpZiAobmV3TGVmdCA8PSArdGhhdC5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5taW5bJ21pbiddICsgbWluLm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgICBuZXdMZWZ0ID0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWluWydtaW4nXSArIG1pbi5vZmZzZXRXaWR0aFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWF4LnN0eWxlLmxlZnQgPSBuZXdMZWZ0ICsgJ3B4JztcclxuICAgICAgICBpbnRlcnZhbC5zdHlsZS5yaWdodCA9IChzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG5ld0xlZnQpIC0gbWF4Lm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgXHJcbiAgICAgICAgaWYgKG5ld0xlZnQgIT09IHVuZGVmaW5lZCB8fCByaWdodEVkZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdGhhdC5jdXJyZW50SGFuZGVsc1Bvc2l0aW9uc1snbWF4J10gPSB7J21heCc6IGAke25ld0xlZnR9YCwgJ3NsaWRlcldpZHRoJzogYCR7c2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSBtYXgub2Zmc2V0V2lkdGh9YH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1heExhYmVsLnN0eWxlLmxlZnQgPSAoKG1heC5vZmZzZXRXaWR0aCAtIG1heExhYmVsLm9mZnNldFdpZHRoKSAtIDEpIC8gMiArICdweCc7XHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgfTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZVVwKCkge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGxhbmUoIHRvZ2dsZTogSFRNTElucHV0RWxlbWVudCB8IGJvb2xlYW4sIGJvZHk6IEhUTUxEaXZFbGVtZW50LCBtaW5WYWx1ZTogSFRNTFBhcmFncmFwaEVsZW1lbnQsIG1heFZhbHVlOiBIVE1MUGFyYWdyYXBoRWxlbWVudCk6IHZvaWQge1xyXG4gICAgbGV0IHRvZ2dsZVJlc3VsdDogYm9vbGVhbjtcclxuICAgIHR5cGVvZiB0b2dnbGUgPT09ICdib29sZWFuJyA/ICB0b2dnbGVSZXN1bHQgPSB0b2dnbGUgOiB0b2dnbGVSZXN1bHQgPSB0b2dnbGUuY2hlY2tlZDtcclxuICAgIGlmICh0b2dnbGVSZXN1bHQpIHtcclxuICAgICAgYm9keS5zdHlsZS5oZWlnaHQgPSBib2R5Lm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgdGhpcy5zbGlkZXJSYW5nZS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKC05MGRlZyknO1xyXG4gICAgICB0aGlzLnNsaWRlclJhbmdlLnN0eWxlLnRvcCA9IGJvZHkub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgICAgdGhpcy5taW5MYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCdtaW5TbGlkZXJIYW5kZWxMYWJlbCcpO1xyXG4gICAgICB0aGlzLm1heExhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ21heFNsaWRlckhhbmRlbExhYmVsJyk7XHJcbiAgICAgIHRoaXMubWluTGFiZWwuY2xhc3NMaXN0LmFkZCgnbWluU2xpZGVySGFuZGVsTGFiZWxWZXJ0aWNhbCcpO1xyXG4gICAgICB0aGlzLm1heExhYmVsLmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlckhhbmRlbExhYmVsVmVydGljYWwnKTtcclxuICAgICAgbWluVmFsdWUuY2xhc3NMaXN0LnJlbW92ZSgnbWluU2xpZGVyUG9pbnQnKTtcclxuICAgICAgbWF4VmFsdWUuY2xhc3NMaXN0LnJlbW92ZSgnbWF4U2xpZGVyUG9pbnQnKTtcclxuICAgICAgbWluVmFsdWUuY2xhc3NMaXN0LmFkZCgnbWluU2xpZGVyUG9pbnRWZXJ0aWNhbCcpO1xyXG4gICAgICBtYXhWYWx1ZS5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJQb2ludFZlcnRpY2FsJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBib2R5LnN0eWxlLmhlaWdodCA9ICcnO1xyXG4gICAgICB0aGlzLnNsaWRlclJhbmdlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoMGRlZyknO1xyXG4gICAgICB0aGlzLnNsaWRlclJhbmdlLnN0eWxlLnRvcCA9ICcnO1xyXG4gICAgICB0aGlzLm1pbkxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ21pblNsaWRlckhhbmRlbExhYmVsVmVydGljYWwnKTtcclxuICAgICAgdGhpcy5tYXhMYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCdtYXhTbGlkZXJIYW5kZWxMYWJlbFZlcnRpY2FsJyk7XHJcbiAgICAgIHRoaXMubWluTGFiZWwuY2xhc3NMaXN0LmFkZCgnbWluU2xpZGVySGFuZGVsTGFiZWwnKTtcclxuICAgICAgdGhpcy5tYXhMYWJlbC5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJIYW5kZWxMYWJlbCcpO1xyXG4gICAgICBtaW5WYWx1ZS5jbGFzc0xpc3QucmVtb3ZlKCdtaW5TbGlkZXJQb2ludFZlcnRpY2FsJyk7XHJcbiAgICAgIG1heFZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ21heFNsaWRlclBvaW50VmVydGljYWwnKTtcclxuICAgICAgbWluVmFsdWUuY2xhc3NMaXN0LmFkZCgnbWluU2xpZGVyUG9pbnQnKTtcclxuICAgICAgbWF4VmFsdWUuY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVyUG9pbnQnKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgc2VsZWN0aW9uT2ZQcmVwYXJlZFZhbHVlKHRhcmdldDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBsZXQgdG9nZ2xlUmVzdWx0OiBib29sZWFuO1xyXG4gICAgdHlwZW9mIHRoaXMuaGFuZGVsc1RvZ2dsZSA9PT0gJ2Jvb2xlYW4nID8gIHRvZ2dsZVJlc3VsdCA9IHRoaXMuaGFuZGVsc1RvZ2dsZSA6IHRvZ2dsZVJlc3VsdCA9IHRoaXMuaGFuZGVsc1RvZ2dsZS5jaGVja2VkO1xyXG4gICAgaWYgKHRhcmdldCA9PT0gJ21pbicpIHtcclxuICAgICAgdGhpcy5jdXJyZW50SGFuZGVsc1Bvc2l0aW9uc1snbWluJ10gPSB7J21pbic6ICcwJywgJ3NsaWRlcldpZHRoJzpgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGh9YH1cclxuICAgICAgdGhpcy5taW4uc3R5bGUubGVmdCA9ICcwcHgnXHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUubGVmdCA9IDAgKyB0aGlzLm1pbi5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYgKHRvZ2dsZVJlc3VsdCkge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEhhbmRlbHNQb3NpdGlvbnNbJ21heCddID0geydtYXgnOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGh9YCwgJ3NsaWRlcldpZHRoJzpgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGh9YH07XHJcbiAgICAgICAgdGhpcy5tYXguc3R5bGUubGVmdCA9IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCArICdweCc7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5yaWdodCA9ICh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCkgKyB0aGlzLm1pbi5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuY3VycmVudEhhbmRlbHNQb3NpdGlvbnNbJ21pbiddID0geydtaW4nOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGh9YCwgJ3NsaWRlcldpZHRoJzpgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGh9YH07XHJcbiAgICAgICAgdGhpcy5taW4uc3R5bGUubGVmdCA9IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCArICdweCc7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5sZWZ0ID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkgKyB0aGlzLm1pbi5vZmZzZXRXaWR0aCAvIDIgKydweCc7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHNpZGVNZW51SW5wdXRzVmFsdWVzVmFsaWRhdGlvbkNoZWNrZXIodGFyZ2V0OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIsIHBvc2l0aW9uczogbnVtYmVyLCBtaW5pbXVtOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGxldCB0b2dnbGVSZXN1bHQ6IGJvb2xlYW47XHJcbiAgICB0eXBlb2YgdGhpcy5oYW5kZWxzVG9nZ2xlID09PSAnYm9vbGVhbicgPyAgdG9nZ2xlUmVzdWx0ID0gdGhpcy5oYW5kZWxzVG9nZ2xlIDogdG9nZ2xlUmVzdWx0ID0gdGhpcy5oYW5kZWxzVG9nZ2xlLmNoZWNrZWQ7XHJcbiAgICBpZiAodGFyZ2V0ID09PSAnbWluJyAmJiB0b2dnbGVSZXN1bHQpIHtcclxuICAgICAgbGV0IG1pbjogc3RyaW5nID0gKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpIC8gcG9zaXRpb25zKSAqICh2YWx1ZSAtIG1pbmltdW0pICsgJyc7XHJcblxyXG4gICAgICBpZiAoK21pbiA+PSArdGhpcy5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5tYXgubWF4IC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICBtaW4gPSArdGhpcy5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5tYXgubWF4IC0gdGhpcy5taW4ub2Zmc2V0V2lkdGggKyAnJztcclxuICAgICAgfSBlbHNlIGlmKCttaW4gPCAwKSB7XHJcbiAgICAgICAgbWluID0gJzAnO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5jdXJyZW50SGFuZGVsc1Bvc2l0aW9uc1snbWluJ10gPSB7J21pbic6IG1pbiwgJ3NsaWRlcldpZHRoJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWB9O1xyXG4gICAgICB0aGlzLm1pbi5zdHlsZS5sZWZ0ID0gbWluICsgJ3B4JztcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5sZWZ0ID0gK21pbiArIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gJ21pbicpIHtcclxuICAgICAgbGV0IG1pbjogc3RyaW5nID0gKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpIC8gcG9zaXRpb25zKSAqICh2YWx1ZSAtIG1pbmltdW0pICsgJyc7XHJcblxyXG4gICAgICBpZigrbWluIDwgMCkge1xyXG4gICAgICAgIG1pbiA9ICcwJztcclxuICAgICAgfSBlbHNlIGlmICgrbWluID4gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgbWluID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkgKyAnJztcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMuY3VycmVudEhhbmRlbHNQb3NpdGlvbnNbJ21pbiddID0geydtaW4nOiBtaW4sICdzbGlkZXJXaWR0aCc6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gfTtcclxuICAgICAgdGhpcy5taW4uc3R5bGUubGVmdCA9IG1pbiArICdweCc7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUubGVmdCA9ICttaW4gKyB0aGlzLm1pbi5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gICAgfSBlbHNlIGlmICh0YXJnZXQgPT09ICdtYXgnKSB7XHJcbiAgICAgIGxldCBtYXg6IHN0cmluZyA9ICgodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWF4Lm9mZnNldFdpZHRoKSAvIHBvc2l0aW9ucykgKiAodmFsdWUgLSBtaW5pbXVtKSArICcnO1xyXG5cclxuICAgICAgaWYgKCttYXggPD0gK3RoaXMuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWluLm1pbiArIHRoaXMubWluLm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgbWF4ID0gK3RoaXMuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWluLm1pbiArIHRoaXMubWF4Lm9mZnNldFdpZHRoICsgJyc7XHJcbiAgICAgIH0gZWxzZSBpZigrbWF4ID4gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKXtcclxuICAgICAgICBtYXggPSAodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSArICcnO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5jdXJyZW50SGFuZGVsc1Bvc2l0aW9uc1snbWF4J10gPSB7J21heCc6IG1heCwgJ3NsaWRlcldpZHRoJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWF4Lm9mZnNldFdpZHRofWB9O1xyXG4gICAgICB0aGlzLm1heC5zdHlsZS5sZWZ0ID0gbWF4ICsgJ3B4JztcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5yaWdodCA9ICh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gK21heCkgLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNlbnRlcmVkSGFuZGVsQnlWYWx1ZVNjYWxlKHRhcmdldDogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBwb3NpdGlvbnM6IHN0cmluZywgbWluaW11bTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBjb25zb2xlLmxvZyh0YXJnZXQsIHZhbHVlKVxyXG4gICAgaWYgKHRhcmdldCA9PT0gJ21pbicpIHtcclxuICAgICAgbGV0IG1pbjogc3RyaW5nID0gU3RyaW5nKCgodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSAvICtwb3NpdGlvbnMpICogKCt2YWx1ZSAtICttaW5pbXVtKSk7XHJcblxyXG4gICAgICBpZigrbWluIDwgMCkge1xyXG4gICAgICAgIG1pbiA9ICcwJztcclxuICAgICAgfSBlbHNlIGlmICgrbWluID4gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgbWluID0gU3RyaW5nKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMubWluLnN0eWxlLmxlZnQgPSBtaW4gKyAncHgnO1xyXG4gICAgICB0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtaW4nXSA9IHsnbWluJzogYCR7bWlufWAsICdzbGlkZXJXaWR0aCc6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gfTtcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5sZWZ0ID0gK21pbiArIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gJ21heCcpIHtcclxuICAgICAgbGV0IG1heDogc3RyaW5nID0gU3RyaW5nKCgodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWF4Lm9mZnNldFdpZHRoKSAvICtwb3NpdGlvbnMpICogKCt2YWx1ZSAtICttaW5pbXVtKSk7XHJcblxyXG4gICAgICBpZiAoK21heCA8PSArdGhpcy5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5taW4ubWluICsgdGhpcy5taW4ub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICBtYXggPSBTdHJpbmcoK3RoaXMuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWluLm1pbiArIHRoaXMubWF4Lm9mZnNldFdpZHRoKTtcclxuICAgICAgfSBlbHNlIGlmKCttYXggPiB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpe1xyXG4gICAgICAgIG1heCA9IFN0cmluZygodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSk7XHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuY3VycmVudEhhbmRlbHNQb3NpdGlvbnNbJ21heCddID0geydtYXgnOiBgJHttYXh9YCwgJ3NsaWRlcldpZHRoJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWF4Lm9mZnNldFdpZHRofWB9XHJcbiAgICAgIHRoaXMubWF4LnN0eWxlLmxlZnQgPSBtYXggKyAncHgnO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLnJpZ2h0ID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSArbWF4KSAtIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNoZWNrVmFsaWRpdHlPZkNoYW5nZWRTdGVwKHZhbHVlOiBzdHJpbmcsIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50LCBwb3NpdGlvbnM6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgbGV0IHBpeGVsc1BlclVuaXQ6IG51bWJlciA9IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLyArcG9zaXRpb25zXHJcbiAgICBsZXQgbWluU3RlcDogbnVtYmVyID0gTWF0aC5yb3VuZCgxIC8gcGl4ZWxzUGVyVW5pdCk7XHJcbiAgICBpZiAobWluU3RlcCA8IDEpIHtcclxuICAgICAgbWluU3RlcCA9IDE7XHJcbiAgICB9O1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCBTdHJpbmcobWluU3RlcCkpO1xyXG4gICAgaW5wdXQuc2V0QXR0cmlidXRlKCdtYXgnLCBTdHJpbmcoK3Bvc2l0aW9ucyAvIDIpKTtcclxuICAgIGlmICh2YWx1ZSA9PT0gJ21pbicpIHtcclxuICAgICAgaW5wdXQudmFsdWUgPSBTdHJpbmcobWluU3RlcCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAoK3ZhbHVlIDw9IG1pblN0ZXApIHtcclxuICAgICAgICBpbnB1dC52YWx1ZSA9IFN0cmluZyhtaW5TdGVwKTtcclxuICAgICAgICB0aGlzLnN0ZXAgPSBmYWxzZTtcclxuICAgICAgfSBlbHNlIGlmICgrdmFsdWUgPiArcG9zaXRpb25zIC8gMikge1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gU3RyaW5nKCtwb3NpdGlvbnMgLyAyKTtcclxuICAgICAgICB0aGlzLnN0ZXAgPSBTdHJpbmcoK3Bvc2l0aW9ucyAvIDIpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgdGhpcy5zdGVwID0gdmFsdWU7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gIH07XHJcbn07IiwiZXhwb3J0IGNsYXNzIFNsaWRlclJhbmdlIHtcclxuXHJcbiAgcmFuZ2U6IEhUTUxEaXZFbGVtZW50O1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yICgpIHtcclxuICAgIGxldCBlbGVtOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgZWxlbS5jbGFzc0xpc3QuYWRkKCdzbGlkZXJSYW5nZScpO1xyXG4gICAgdGhpcy5yYW5nZSA9IGVsZW07XHJcbiAgfTtcclxuXHJcbiAgZ2V0RWxlbWVudHMoKTogSFRNTERpdkVsZW1lbnR7XHJcbiAgICByZXR1cm4gdGhpcy5yYW5nZTtcclxuICB9O1xyXG5cclxufTsiLCJpbXBvcnQge0dldFZhbHVlc0ZvclZhbHVlU2NhbGV9IGZyb20gJy4uLy4uL21vZGVsL2ZhY2FkZSc7XHJcblxyXG5leHBvcnQgY2xhc3MgVmFsdWVTY2FsZSB7XHJcbiAgcmVhZG9ubHkgdmFsdWVTY2FsZTE1OiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIHJlYWRvbmx5IHZhbHVlU2NhbGUzMDogSFRNTExhYmVsRWxlbWVudDtcclxuICByZWFkb25seSB2YWx1ZVNjYWxlNTA6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgcmVhZG9ubHkgdmFsdWVTY2FsZTcwOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIHJlYWRvbmx5IHZhbHVlU2NhbGU4NTogSFRNTExhYmVsRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsZXQgdmFsdWUxNTogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsZXQgdmFsdWUzMDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsZXQgdmFsdWU1MDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsZXQgdmFsdWU3MDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsZXQgdmFsdWU4NTogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICB2YWx1ZTE1LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsJywgJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsXzE1Jyk7XHJcbiAgICB2YWx1ZTMwLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsJywgJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsXzMwJyk7XHJcbiAgICB2YWx1ZTUwLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsJywgJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsXzUwJyk7XHJcbiAgICB2YWx1ZTcwLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsJywgJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsXzcwJyk7XHJcbiAgICB2YWx1ZTg1LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsJywgJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsXzg1Jyk7XHJcbiAgICB0aGlzLnZhbHVlU2NhbGUxNSA9IHZhbHVlMTU7XHJcbiAgICB0aGlzLnZhbHVlU2NhbGUzMCA9IHZhbHVlMzA7XHJcbiAgICB0aGlzLnZhbHVlU2NhbGU1MCA9IHZhbHVlNTA7XHJcbiAgICB0aGlzLnZhbHVlU2NhbGU3MCA9IHZhbHVlNzA7XHJcbiAgICB0aGlzLnZhbHVlU2NhbGU4NSA9IHZhbHVlODU7XHJcbiAgfTtcclxuXHJcbiAgcmVmcmVzaFZhbHVlcyh2YWx1ZXM6IEdldFZhbHVlc0ZvclZhbHVlU2NhbGUpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWVTY2FsZTE1LmlubmVyVGV4dCA9IHZhbHVlc1snMTUnXTtcclxuICAgIHRoaXMudmFsdWVTY2FsZTMwLmlubmVyVGV4dCA9IHZhbHVlc1snMzAnXTtcclxuICAgIHRoaXMudmFsdWVTY2FsZTUwLmlubmVyVGV4dCA9IHZhbHVlc1snNTAnXTtcclxuICAgIHRoaXMudmFsdWVTY2FsZTcwLmlubmVyVGV4dCA9IHZhbHVlc1snNzAnXTtcclxuICAgIHRoaXMudmFsdWVTY2FsZTg1LmlubmVyVGV4dCA9IHZhbHVlc1snODUnXTtcclxuICB9O1xyXG5cclxuICBjZW50ZXJzVmFsdWVzUG9zaXRpb25zKHNsaWRlcjogSFRNTERpdkVsZW1lbnQsIGhhbmRlbDpIVE1MU3BhbkVsZW1lbnQpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWVTY2FsZTE1LnN0eWxlLnJpZ2h0ID0gKChzbGlkZXIub2Zmc2V0V2lkdGggLSBoYW5kZWwub2Zmc2V0V2lkdGgpICogMC44NSkgLSAodGhpcy52YWx1ZVNjYWxlMTUub2Zmc2V0V2lkdGggLyAyKSArIChoYW5kZWwub2Zmc2V0V2lkdGggLyAyKSArICdweCc7XHJcbiAgICB0aGlzLnZhbHVlU2NhbGU4NS5zdHlsZS5sZWZ0ID0gKChzbGlkZXIub2Zmc2V0V2lkdGggLSBoYW5kZWwub2Zmc2V0V2lkdGgpICogMC44NSkgLSAodGhpcy52YWx1ZVNjYWxlODUub2Zmc2V0V2lkdGggLyAyKSArIChoYW5kZWwub2Zmc2V0V2lkdGggLyAyKSArICdweCc7XHJcbiAgICB0aGlzLnZhbHVlU2NhbGUzMC5zdHlsZS5yaWdodCA9ICgoc2xpZGVyLm9mZnNldFdpZHRoIC0gaGFuZGVsLm9mZnNldFdpZHRoKSAqIDAuNzApIC0gKHRoaXMudmFsdWVTY2FsZTMwLm9mZnNldFdpZHRoIC8gMikgKyAoaGFuZGVsLm9mZnNldFdpZHRoIC8gMikgKyAncHgnO1xyXG4gICAgdGhpcy52YWx1ZVNjYWxlNzAuc3R5bGUubGVmdCA9ICgoc2xpZGVyLm9mZnNldFdpZHRoIC0gaGFuZGVsLm9mZnNldFdpZHRoKSAqIDAuNzApIC0gKHRoaXMudmFsdWVTY2FsZTcwLm9mZnNldFdpZHRoIC8gMikgKyAoaGFuZGVsLm9mZnNldFdpZHRoIC8gMikgKyAncHgnO1xyXG4gICAgdGhpcy52YWx1ZVNjYWxlNTAuc3R5bGUubGVmdCA9ICgoc2xpZGVyLm9mZnNldFdpZHRoIC0gaGFuZGVsLm9mZnNldFdpZHRoKSAqIDAuNTApIC0gKHRoaXMudmFsdWVTY2FsZTUwLm9mZnNldFdpZHRoIC8gMikgKyAoaGFuZGVsLm9mZnNldFdpZHRoIC8gMikgKyAncHgnO1xyXG4gIH07XHJcblxyXG4gIGRpc3BsYXlDb250cm9sbGVyKHRvZ2dsZTogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRvZ2dsZS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMudmFsdWVTY2FsZTE1LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlMzAuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gICAgICB0aGlzLnZhbHVlU2NhbGU1MC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICAgIHRoaXMudmFsdWVTY2FsZTcwLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlODUuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlMTUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlMzAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlNTAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlNzAuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlODUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmVwb3NpdGlvbnNBZnRlckNoYW5nZVBsYW5lKHBsYW5lVG9nZ2xlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZihwbGFuZVRvZ2dsZSA9PT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLnZhbHVlU2NhbGUxNS5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJfX3ZhbHVlU2NhbGVsYWJlbF8xNVZlcnRpY2FsJyk7XHJcbiAgICAgIHRoaXMudmFsdWVTY2FsZTMwLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsXzMwVmVydGljYWwnKTtcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlNTAuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyX192YWx1ZVNjYWxlbGFiZWxfNTBWZXJ0aWNhbCcpO1xyXG4gICAgICB0aGlzLnZhbHVlU2NhbGU3MC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJfX3ZhbHVlU2NhbGVsYWJlbF83MFZlcnRpY2FsJyk7XHJcbiAgICAgIHRoaXMudmFsdWVTY2FsZTg1LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsXzg1VmVydGljYWwnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudmFsdWVTY2FsZTE1LmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsXzE1VmVydGljYWwnKTtcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlMzAuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tU2xpZGVyX192YWx1ZVNjYWxlbGFiZWxfMzBWZXJ0aWNhbCcpO1xyXG4gICAgICB0aGlzLnZhbHVlU2NhbGU1MC5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b21TbGlkZXJfX3ZhbHVlU2NhbGVsYWJlbF81MFZlcnRpY2FsJyk7XHJcbiAgICAgIHRoaXMudmFsdWVTY2FsZTcwLmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsXzcwVmVydGljYWwnKTtcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlODUuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tU2xpZGVyX192YWx1ZVNjYWxlbGFiZWxfODVWZXJ0aWNhbCcpO1xyXG4gICAgfTtcclxuICB9O1xyXG59OyIsImV4cG9ydCBjbGFzcyBWYWx1ZVJhbmdlIHtcclxuICBtaW5WYWx1ZTogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgbWF4VmFsdWU6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvciAodmFsdWVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSkge1xyXG4gICAgbGV0IG1pbjpIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBtYXg6SFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBtaW4uaW5uZXJUZXh0ID0gdmFsdWVzLm1pbjtcclxuICAgIG1heC5pbm5lclRleHQgPSB2YWx1ZXMubWF4O1xyXG4gICAgbWluLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlclBvaW50Jyk7XHJcbiAgICBtYXguY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVyUG9pbnQnKTtcclxuICAgIHRoaXMubWluVmFsdWUgPSBtaW47XHJcbiAgICB0aGlzLm1heFZhbHVlID0gbWF4O1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudHMoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7bWluOiB0aGlzLm1pblZhbHVlLCBtYXg6IHRoaXMubWF4VmFsdWV9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtTbGlkZXJSYW5nZX0gZnJvbSAnLi9jb21wb25lbnRzL3NsaWRlci1yYW5nZSc7XHJcbmltcG9ydCB7SGFuZGVsc30gZnJvbSAnLi9jb21wb25lbnRzL2hhbmRlbHMnO1xyXG5pbXBvcnQge1NsaWRlck1vdmVtZW50fSBmcm9tICcuL2NvbXBvbmVudHMvc2xpZGVyLW1vdmVtZW50JztcclxuaW1wb3J0IHtTaWRlTWVudX0gZnJvbSAnLi9jb21wb25lbnRzL3NpZGUtbWVudSc7XHJcbmltcG9ydCB7VmFsdWVSYW5nZX0gZnJvbSAnLi9jb21wb25lbnRzL3ZhbHVlUmFuZ2UnO1xyXG5pbXBvcnQge0hhbmRlbHNMYWJlbHN9IGZyb20gJy4vY29tcG9uZW50cy9oYW5kZWxzLWxhYmVscyc7XHJcbmltcG9ydCB7U2VsZWN0ZWRSYW5nZX0gZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdGVkLXJhbmdlJztcclxuaW1wb3J0IHtTZXR0aW5nc30gZnJvbSAnLi4vLi4vanF1ZXJ5LnVpLmN1c3RvbVNsaWRlcic7XHJcbmltcG9ydCB7VmFsdWVTY2FsZX0gZnJvbSAnLi9jb21wb25lbnRzL3ZhbHVlLXNjYWxlJztcclxuXHJcbmludGVyZmFjZSBQb3NzaWJsZVJhbmdlIHtcclxuICBtaW46IHN0cmluZztcclxuICBtYXg6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgRGF0YU9mVmFsdWVSZWZyZXNoIHtcclxuICAnbWluJz86IHN0cmluZztcclxuICAnbWF4Jz86IHN0cmluZztcclxufTtcclxuXHJcbmludGVyZmFjZSBEYXRhUmVxdWVzdFN0YXR1cyB7XHJcbiAgXCJzdGFydEhhbmRlbHNQb3NpdGlvblwiOiBib29sZWFuO1xyXG4gIFwiZ2V0TWF4RGF0YVwiOiBib29sZWFuO1xyXG4gIFwiZ2V0TWluUG9zaXRpb25zQW1vdW50XCI6IGJvb2xlYW47XHJcbiAgXCJnZXRNYXhQb3NpdGlvbnNBbW91bnRcIjogYm9vbGVhbjtcclxuICBcImdldFBvc3NpYmxlUmFuZ2VcIjogYm9vbGVhbjtcclxuICBcImdldFN0ZXBQb3NpdGlvbnNBbW91bnRcIjogYm9vbGVhbjtcclxuICBcImdldFZhbHVlc0ZvclZhbHVlU2NhbGVcIjogYm9vbGVhbjtcclxuICBcImdldE1pblN0ZXBcIjogYm9vbGVhbjtcclxuICBcImNoZWNrc05ld1N0ZXBGb3JWYWxpZGl0eVwiOiBzdHJpbmc7XHJcbiAgXCJzZWxlY3RIYW5kbGVGb3JWYWx1ZVNjYWxlXCI6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3IHtcclxuICBwcml2YXRlIHRoYXQ6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHJlYWRvbmx5IHNldHRpbmdzOiBTZXR0aW5ncztcclxuICByZWFkb25seSBzbGlkZXJSYW5nZTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBzbGlkZXJDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHJlYWRvbmx5IG1pbkhhbmRlbDogSFRNTFNwYW5FbGVtZW50O1xyXG4gIHJlYWRvbmx5IG1heEhhbmRlbDogSFRNTFNwYW5FbGVtZW50O1xyXG4gIHJlYWRvbmx5IHNsaWRlck1vdmVtZW50OiBTbGlkZXJNb3ZlbWVudDtcclxuICBwcml2YXRlIHNpZGVNZW51Q29udGFpbmVyOiBTdHJpbmcgfCBCb29sZWFuO1xyXG4gIHByaXZhdGUgbWluVmFsdWU6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gIHByaXZhdGUgbWF4VmFsdWU6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gIHJlYWRvbmx5IG1pbkxhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIHJlYWRvbmx5IG1heExhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIHJlYWRvbmx5IGludGVydmFsOiBIVE1MRGl2RWxlbWVudDtcclxuICByZWFkb25seSB2YWx1ZVNjYWxlOiBWYWx1ZVNjYWxlO1xyXG4gIHJlYWRvbmx5IHNpZGVNZW51OiBIVE1MRGl2RWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICByZWFkb25seSBoYW5kZWxUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQgfCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBoYW5kZWxMYWJlbFRvZ2dsZTogSFRNTElucHV0RWxlbWVudHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgcGxhbmVUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnR8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIHZhbHVlU2NhbGVUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQgfCB1bmRlZmluZWQ7XHJcbiAgcmVhZG9ubHkgbWluSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnR8IHVuZGVmaW5lZDtcclxuICByZWFkb25seSBtYXhJbnB1dDogSFRNTElucHV0RWxlbWVudHwgdW5kZWZpbmVkO1xyXG4gIHJlYWRvbmx5IHN0ZXBJbnB1dDpIVE1MSW5wdXRFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG4gIHJlYWRvbmx5IG1pblNsaWRlclZhbHVlT3V0cHV0OiBIVE1MT3V0cHV0RWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICByZWFkb25seSBtYXhTbGlkZXJWYWx1ZU91dHB1dDogSFRNTE91dHB1dEVsZW1lbnQgfCB1bmRlZmluZWQ7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IodGFyZ2V0OiBIVE1MRGl2RWxlbWVudCwgc2V0dGluZ3M6IFNldHRpbmdzKSB7XHJcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICB0aGlzLnRoYXQgPSB0YXJnZXQ7XHJcbiAgICB0aGlzLnNsaWRlclJhbmdlID0gbmV3IFNsaWRlclJhbmdlKCkuZ2V0RWxlbWVudHMoKTtcclxuXHJcbiAgICBsZXQgaGFuZGVsczogSGFuZGVscyA9IG5ldyBIYW5kZWxzKCk7XHJcbiAgICB0aGlzLm1pbkhhbmRlbCA9IGhhbmRlbHMubWluSGFuZGVsO1xyXG4gICAgdGhpcy5tYXhIYW5kZWwgPSBoYW5kZWxzLm1heEhhbmRlbDtcclxuXHJcbiAgICBsZXQgdmFsdWVSYW5nZTogVmFsdWVSYW5nZSA9IG5ldyBWYWx1ZVJhbmdlKHsnbWluJzogdGhpcy5zZXR0aW5nc1snbWluJ10sICdtYXgnOiB0aGlzLnNldHRpbmdzWydtYXgnXX0pO1xyXG4gICAgdGhpcy5taW5WYWx1ZSA9IHZhbHVlUmFuZ2UubWluVmFsdWU7XHJcbiAgICB0aGlzLm1heFZhbHVlID0gdmFsdWVSYW5nZS5tYXhWYWx1ZTtcclxuXHJcbiAgICBpZiAoc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlKSB7XHJcbiAgICAgIGxldCBzaWRlTWVudSA9IG5ldyBTaWRlTWVudSgpO1xyXG4gICAgICB0aGlzLnNpZGVNZW51ID0gc2lkZU1lbnUuY3VzdG9tU2xpZGVyTWVudUNvbnRhaW5lcjtcclxuICAgICAgdGhpcy5oYW5kZWxUb2dnbGUgPSBzaWRlTWVudS5oYW5kZWxUb2dnbGU7XHJcbiAgICAgIHRoaXMuaGFuZGVsTGFiZWxUb2dnbGUgPSBzaWRlTWVudS5oYW5kZWxMYWJlbFRvZ2dsZTtcclxuICAgICAgdGhpcy5wbGFuZVRvZ2dsZSA9IHNpZGVNZW51LnBsYW5lVG9nZ2xlO1xyXG4gICAgICB0aGlzLm1pbklucHV0ID0gc2lkZU1lbnUubWluSW5wdXQ7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQgPSBzaWRlTWVudS5tYXhJbnB1dDtcclxuICAgICAgdGhpcy5zdGVwSW5wdXQgPSBzaWRlTWVudS5zdGVwSW5wdXQ7XHJcbiAgICAgIHRoaXMubWluU2xpZGVyVmFsdWVPdXRwdXQgPSBzaWRlTWVudS5taW5TbGlkZXJWYWx1ZU91dHB1dDtcclxuICAgICAgdGhpcy5tYXhTbGlkZXJWYWx1ZU91dHB1dCA9IHNpZGVNZW51Lm1heFNsaWRlclZhbHVlT3V0cHV0O1xyXG4gICAgICB0aGlzLnZhbHVlU2NhbGVUb2dnbGUgPSBzaWRlTWVudS52YWx1ZVNjYWxlVG9nZ2xlO1xyXG4gICAgfTtcclxuICAgIHRoaXMuc2lkZU1lbnVDb250YWluZXIgPSBzZXR0aW5ncy5zaWRlTWVudUNvbnRhaW5lcjtcclxuXHJcbiAgICBsZXQgaGFuZGVsc0xhYmVsczogSGFuZGVsc0xhYmVscyA9IG5ldyBIYW5kZWxzTGFiZWxzKCk7XHJcbiAgICB0aGlzLm1pbkxhYmVsID0gaGFuZGVsc0xhYmVscy5taW5MYWJlbDtcclxuICAgIHRoaXMubWF4TGFiZWwgPSBoYW5kZWxzTGFiZWxzLm1heExhYmVsO1xyXG5cclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBuZXcgU2VsZWN0ZWRSYW5nZSgpLmdldEVsZW1lbnRzKCk7XHJcbiAgICBcclxuICAgIGlmKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMuc2xpZGVyTW92ZW1lbnQgPSBuZXcgU2xpZGVyTW92ZW1lbnQoeydtaW4nOiB0aGlzLm1pbkhhbmRlbCwgJ21heCc6IHRoaXMubWF4SGFuZGVsLCdtaW5MYWJlbCc6IHRoaXMubWluTGFiZWwsICdtYXhMYWJlbCc6IHRoaXMubWF4TGFiZWwgLCdzbGlkZXJSYW5nZSc6IHRoaXMuc2xpZGVyUmFuZ2UsICdwbGFuZVRvZ2dsZSc6IHRoaXMucGxhbmVUb2dnbGUgPyB0aGlzLnBsYW5lVG9nZ2xlIDogdGhpcy5zZXR0aW5ncy52ZXJ0aWNhbCwgJ2hhbmRlbHNUb2dnbGUnOiB0aGlzLmhhbmRlbFRvZ2dsZSA/IHRoaXMuaGFuZGVsVG9nZ2xlIDogdGhpcy5zZXR0aW5ncy5yYW5nZSwgJ2ludGVydmFsJzogdGhpcy5pbnRlcnZhbCwgJ3N0ZXAnOiB0aGlzLnNldHRpbmdzLnN0ZXB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2xpZGVyTW92ZW1lbnQgPSBuZXcgU2xpZGVyTW92ZW1lbnQoeydtaW4nOiB0aGlzLm1pbkhhbmRlbCwgJ21heCc6IHRoaXMubWF4SGFuZGVsLCdtaW5MYWJlbCc6IHRoaXMubWluTGFiZWwsICdtYXhMYWJlbCc6IHRoaXMubWF4TGFiZWwgLCdzbGlkZXJSYW5nZSc6IHRoaXMuc2xpZGVyUmFuZ2UsICdwbGFuZVRvZ2dsZSc6IHRoaXMuc2V0dGluZ3MudmVydGljYWwsICdoYW5kZWxzVG9nZ2xlJzogdGhpcy5zZXR0aW5ncy5yYW5nZSwgJ2ludGVydmFsJzogdGhpcy5pbnRlcnZhbCwgJ3N0ZXAnOiB0aGlzLnNldHRpbmdzLnN0ZXB9KTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy52YWx1ZVNjYWxlID0gbmV3IFZhbHVlU2NhbGUoKTtcclxuICAgIHRoaXMuc2xpZGVyQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgfTtcclxuXHJcbiAgZGF0YVJlcXVlc3RTdGF0dXM6IERhdGFSZXF1ZXN0U3RhdHVzID0ge1xyXG4gICAgXCJzdGFydEhhbmRlbHNQb3NpdGlvblwiOiBmYWxzZSxcclxuICAgIFwiZ2V0TWF4RGF0YVwiOiBmYWxzZSxcclxuICAgIFwiZ2V0TWluUG9zaXRpb25zQW1vdW50XCI6IGZhbHNlLFxyXG4gICAgXCJnZXRNYXhQb3NpdGlvbnNBbW91bnRcIjogZmFsc2UsXHJcbiAgICBcImdldFBvc3NpYmxlUmFuZ2VcIjogZmFsc2UsXHJcbiAgICBcImdldFN0ZXBQb3NpdGlvbnNBbW91bnRcIjogZmFsc2UsXHJcbiAgICBcImdldFZhbHVlc0ZvclZhbHVlU2NhbGVcIjogZmFsc2UsXHJcbiAgICBcImdldE1pblN0ZXBcIjogZmFsc2UsXHJcbiAgICBcImNoZWNrc05ld1N0ZXBGb3JWYWxpZGl0eVwiOiAnJyxcclxuICAgIFwic2VsZWN0SGFuZGxlRm9yVmFsdWVTY2FsZVwiOiAnJ1xyXG4gIH07XHJcblxyXG4gIGRpc3BsYXlFbGVtZW50cygpOiB2b2lkIHtcclxuICAgIFxyXG4gICAgdGhpcy5zbGlkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2xpZGVyQm9keScpO1xyXG4gICAgdGhpcy5zbGlkZXJDb250YWluZXIuYXBwZW5kKHRoaXMuc2xpZGVyUmFuZ2UpO1xyXG4gICAgdGhpcy50aGF0LmFwcGVuZCh0aGlzLnNsaWRlckNvbnRhaW5lcik7XHJcbiAgICB0aGlzLnNsaWRlclJhbmdlLmFwcGVuZCh0aGlzLm1pbkhhbmRlbCk7XHJcbiAgICB0aGlzLnNsaWRlclJhbmdlLmFwcGVuZCh0aGlzLm1heEhhbmRlbCk7XHJcbiAgICB0aGlzLnNsaWRlclJhbmdlLmFwcGVuZCh0aGlzLm1pblZhbHVlKTtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMubWF4VmFsdWUpO1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZS5hcHBlbmQodGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGUxNSwgdGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGUzMCwgdGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGU1MCwgdGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGU3MCwgdGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGU4NSk7XHJcbiAgICB0aGlzLmRhdGFSZXF1ZXN0U3RhdHVzW1wiZ2V0VmFsdWVzRm9yVmFsdWVTY2FsZVwiXSA9IHRydWU7XHJcbiAgICB0aGlzLmludGVydmFsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgdGhpcy5taW5IYW5kZWwuYXBwZW5kKHRoaXMubWluTGFiZWwpO1xyXG4gICAgdGhpcy5tYXhIYW5kZWwuYXBwZW5kKHRoaXMubWF4TGFiZWwpO1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1snaGFuZGVsc0xhYmVsJ10gPT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMubWluTGFiZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdGhpcy5tYXhMYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgaWYodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUgJiYgdGhpcy5oYW5kZWxMYWJlbFRvZ2dsZSkge1xyXG4gICAgICAgIHRoaXMuaGFuZGVsTGFiZWxUb2dnbGUuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGlmKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlICYmIHRoaXMuc2lkZU1lbnUpIHtcclxuICAgICAgdGhpcy5kYXRhUmVxdWVzdFN0YXR1c1tcImdldFBvc3NpYmxlUmFuZ2VcIl0gPSB0cnVlO1xyXG4gICAgICBpZiAodGhpcy5zaWRlTWVudUNvbnRhaW5lciAhPT0gJ2ZhbHNlJyAmJiB0eXBlb2YgdGhpcy5zaWRlTWVudUNvbnRhaW5lciA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHRoaXMuc2lkZU1lbnVDb250YWluZXIpWzBdLmFwcGVuZCh0aGlzLnNpZGVNZW51KTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRoYXQuYXBwZW5kKHRoaXMuc2lkZU1lbnUpXHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1tcInJhbmdlXCJdID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMubWF4SGFuZGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBpZih0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuaGFuZGVsVG9nZ2xlID8gdGhpcy5oYW5kZWxUb2dnbGUuY2hlY2tlZCA9IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLm1heElucHV0ID8gdGhpcy5tYXhJbnB1dC5zdHlsZS5vcGFjaXR5ID0gJzEnIDogZmFsc2U7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgXHJcblxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3NbJ3ZlcnRpY2FsJ10gPT09IHRydWUpIHtcclxuICAgICAgaWYodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUgJiYgdGhpcy5wbGFuZVRvZ2dsZSkge1xyXG4gICAgICAgIHRoaXMucGxhbmVUb2dnbGUgPyB0aGlzLnBsYW5lVG9nZ2xlLmNoZWNrZWQgPSB0cnVlIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJNb3ZlbWVudC5jaGFuZ2VQbGFuZSh0aGlzLnBsYW5lVG9nZ2xlLCB0aGlzLnNsaWRlckNvbnRhaW5lciwgdGhpcy5taW5WYWx1ZSwgdGhpcy5tYXhWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy52YWx1ZVNjYWxlLnJlcG9zaXRpb25zQWZ0ZXJDaGFuZ2VQbGFuZSh0aGlzLnBsYW5lVG9nZ2xlLmNoZWNrZWQpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2xpZGVyTW92ZW1lbnQuY2hhbmdlUGxhbmUodHJ1ZSwgdGhpcy5zbGlkZXJDb250YWluZXIsIHRoaXMubWluVmFsdWUsIHRoaXMubWF4VmFsdWUpO1xyXG4gICAgICAgIHRoaXMudmFsdWVTY2FsZS5yZXBvc2l0aW9uc0FmdGVyQ2hhbmdlUGxhbmUodHJ1ZSk7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5zdGVwID09PSB0cnVlICYmIHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQgPyB0aGlzLm1heElucHV0LnNldEF0dHJpYnV0ZSgnc3RlcCcsIHRoaXMuc2V0dGluZ3Muc3RlcCArIFwiXCIpIDogZmFsc2U7XHJcbiAgICAgIHRoaXMubWluSW5wdXQgPyB0aGlzLm1pbklucHV0LnNldEF0dHJpYnV0ZSgnc3RlcCcsIHRoaXMuc2V0dGluZ3Muc3RlcCArIFwiXCIpIDogZmFsc2U7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy5zdGVwKSB7XHJcbiAgICAgIHRoaXMuZGF0YVJlcXVlc3RTdGF0dXNbXCJnZXRTdGVwUG9zaXRpb25zQW1vdW50XCJdID0gdHJ1ZTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3MudmFsdWVTY2FsZSA9PT0gdHJ1ZSAmJiB0aGlzLnZhbHVlU2NhbGVUb2dnbGUpIHtcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlVG9nZ2xlLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlVG9nZ2xlID8gdGhpcy52YWx1ZVNjYWxlLmRpc3BsYXlDb250cm9sbGVyKHRoaXMudmFsdWVTY2FsZVRvZ2dsZSkgOiBmYWxzZTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuc3RlcElucHV0ICYmIHR5cGVvZiB0aGlzLnNldHRpbmdzLnN0ZXAgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgIHRoaXMuZGF0YVJlcXVlc3RTdGF0dXNbXCJjaGVja3NOZXdTdGVwRm9yVmFsaWRpdHlcIl0gPSB0aGlzLnNldHRpbmdzLnN0ZXA7XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2V0dGluZ3Muc3RlcCA9PT0gZmFsc2UpIHtcclxuICAgICAgdGhpcy5kYXRhUmVxdWVzdFN0YXR1c1tcImdldE1pblN0ZXBcIl0gPSB0cnVlO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgdGhpcy5kYXRhUmVxdWVzdFN0YXR1c1tcInN0YXJ0SGFuZGVsc1Bvc2l0aW9uXCJdID0gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBiaW5kRXZlbnRMaXN0ZW5lcnMoKTogdm9pZCB7XHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUgJiYgdGhpcy5oYW5kZWxMYWJlbFRvZ2dsZSkge1xyXG4gICAgICB0aGlzLmhhbmRlbExhYmVsVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMubWFrZUJpbmRMYWJlbFRvZ2dsZS5iaW5kKHRoaXMpKTtcclxuICAgIH07XHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUgJiYgdGhpcy5oYW5kZWxUb2dnbGUpIHtcclxuICAgICAgdGhpcy5oYW5kZWxUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5tYWtlQmluZEhhbmRlbFRvZ2dsZS5iaW5kKHRoaXMpKTtcclxuICAgIH07XHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUgJiYgdGhpcy5wbGFuZVRvZ2dsZSkge1xyXG4gICAgICB0aGlzLnBsYW5lVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMubWFrZUJpbmRGb3JQbGFuZVRvZ2dsZS5iaW5kKHRoaXMpKTtcclxuICAgIH07XHJcbiAgICB0aGlzLm1pblZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tYWtlQmluZEZvclNlbGVjdGlvbk1pblZhbHVlLmJpbmQodGhpcykpO1xyXG4gICAgdGhpcy5tYXhWYWx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFrZUJpbmRGb3JTZWxlY3Rpb25NYXhWYWx1ZS5iaW5kKHRoaXMpKTtcclxuICAgIGlmICh0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSAmJiB0aGlzLm1pbklucHV0KSB7XHJcbiAgICAgIHRoaXMubWluSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5tYWtlQmluZEZvck1pbklucHV0LmJpbmQodGhpcykpO1xyXG4gICAgfTtcclxuICAgIGlmICh0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSAmJiB0aGlzLm1heElucHV0KSB7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5tYWtlQmluZEZvck1heElucHV0LmJpbmQodGhpcykpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUgJiYgdGhpcy52YWx1ZVNjYWxlVG9nZ2xlKSB7XHJcbiAgICAgIHRoaXMudmFsdWVTY2FsZVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm1ha2VCaW5kRm9yVmFsdWVTY2FsZVRvZ2dsZS5iaW5kKHRoaXMpKTtcclxuICAgIH07XHJcblxyXG4gICAgaWYodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUgJiYgdGhpcy5zdGVwSW5wdXQpIHtcclxuICAgICAgdGhpcy5zdGVwSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5tYWtlQmluZFN0ZXBJbnB1dC5iaW5kKHRoaXMpKTtcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGUxNS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFrZUJpbmRGb3JWYWx1ZVNjYWxlLmJpbmQodGhpcywgdGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGUxNSkpO1xyXG4gICAgdGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGUzMC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFrZUJpbmRGb3JWYWx1ZVNjYWxlLmJpbmQodGhpcywgdGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGUzMCkpO1xyXG4gICAgdGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGU1MC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFrZUJpbmRGb3JWYWx1ZVNjYWxlLmJpbmQodGhpcywgdGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGU1MCkpO1xyXG4gICAgdGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGU3MC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFrZUJpbmRGb3JWYWx1ZVNjYWxlLmJpbmQodGhpcywgdGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGU3MCkpO1xyXG4gICAgdGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGU4NS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMubWFrZUJpbmRGb3JWYWx1ZVNjYWxlLmJpbmQodGhpcywgdGhpcy52YWx1ZVNjYWxlLnZhbHVlU2NhbGU4NSkpO1xyXG4gICAgXHJcbiAgfTtcclxuICBcclxuICBiaW5kRXZlbnRIYW5kZWxzTW92ZW1lbnQoKTp2b2lkIHtcclxuICAgIHRoaXMuYmluZEZvck1pbigpO1xyXG4gICAgdGhpcy5iaW5kRm9yTWF4KCk7XHJcbiAgfTtcclxuXHJcbiAgcmVmcmVzaEN1cnJlbnRWYWx1ZXMobmV3RGF0YTogRGF0YU9mVmFsdWVSZWZyZXNoKTogdm9pZCB7XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tVbmRlZmluZWRTdHJpbmdzKHZhbHVlOiBzdHJpbmcgfCB1bmRlZmluZWQpOiBudWxsIHwgc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgPyBudWxsIDogdmFsdWU7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICgnbWluJyBpbiBuZXdEYXRhICYmICdtYXgnIGluIG5ld0RhdGEpIHtcclxuICAgICAgaWYodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUgJiYgdGhpcy5zaWRlTWVudSkge1xyXG4gICAgICAgIHRoaXMubWluU2xpZGVyVmFsdWVPdXRwdXQgPyB0aGlzLm1pblNsaWRlclZhbHVlT3V0cHV0LnRleHRDb250ZW50ID0gY2hlY2tVbmRlZmluZWRTdHJpbmdzKG5ld0RhdGEubWluKSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWluSW5wdXQgPyB0aGlzLm1pbklucHV0LnZhbHVlID0gYCR7bmV3RGF0YS5taW59YCA6IGZhbHNlO1xyXG4gICAgICAgIGlmKHRoaXMuaGFuZGVsVG9nZ2xlICYmIHRoaXMuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPT09IHRydWUgKSB7XHJcbiAgICAgICAgICB0aGlzLm1heFNsaWRlclZhbHVlT3V0cHV0ID8gdGhpcy5tYXhTbGlkZXJWYWx1ZU91dHB1dC50ZXh0Q29udGVudCA9IGAgLSAke2NoZWNrVW5kZWZpbmVkU3RyaW5ncyhuZXdEYXRhLm1heCl9YCA6IGZhbHNlO1xyXG4gICAgICAgICAgdGhpcy5tYXhJbnB1dCA/IHRoaXMubWF4SW5wdXQudmFsdWUgPSBgJHtuZXdEYXRhLm1heH1gIDogZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICAgIHRoaXMubWluTGFiZWwudGV4dENvbnRlbnQgPSBjaGVja1VuZGVmaW5lZFN0cmluZ3MobmV3RGF0YS5taW4pO1xyXG4gICAgICB0aGlzLm1heExhYmVsLnRleHRDb250ZW50ID0gY2hlY2tVbmRlZmluZWRTdHJpbmdzKG5ld0RhdGEubWF4KTtcclxuICAgICAgXHJcbiAgICB9IGVsc2UgaWYgKCdtaW4nIGluIG5ld0RhdGEpIHtcclxuICAgICAgdGhpcy5taW5MYWJlbC50ZXh0Q29udGVudCA9IGNoZWNrVW5kZWZpbmVkU3RyaW5ncyhuZXdEYXRhLm1pbik7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMubWluU2xpZGVyVmFsdWVPdXRwdXQgPyB0aGlzLm1pblNsaWRlclZhbHVlT3V0cHV0LnRleHRDb250ZW50ID0gY2hlY2tVbmRlZmluZWRTdHJpbmdzKG5ld0RhdGEubWluKSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWluSW5wdXQgPyB0aGlzLm1pbklucHV0LnZhbHVlID0gYCR7bmV3RGF0YS5taW59YCA6IGZhbHNlO1xyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tYXhMYWJlbC50ZXh0Q29udGVudCA9IGNoZWNrVW5kZWZpbmVkU3RyaW5ncyhuZXdEYXRhLm1heCk7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMubWF4U2xpZGVyVmFsdWVPdXRwdXQgPyB0aGlzLm1heFNsaWRlclZhbHVlT3V0cHV0LnRleHRDb250ZW50ID0gYCAtICR7Y2hlY2tVbmRlZmluZWRTdHJpbmdzKG5ld0RhdGEubWF4KX1gIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5tYXhJbnB1dCA/IHRoaXMubWF4SW5wdXQudmFsdWUgPSBgJHtuZXdEYXRhLm1heH1gIDogZmFsc2U7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgbmV3IEhhbmRlbHNMYWJlbHMoKS5jZW50ZXJpbmdSZWxhdGl2ZVRvSGFuZGxlcyh0aGlzLm1pbkhhbmRlbC5vZmZzZXRXaWR0aCwgdGhpcy5tYXhIYW5kZWwub2Zmc2V0V2lkdGgsIHRoaXMubWluTGFiZWwub2Zmc2V0V2lkdGgsIHRoaXMubWF4TGFiZWwub2Zmc2V0V2lkdGgsIHRoaXMubWluTGFiZWwsIHRoaXMubWF4TGFiZWwpO1xyXG4gIH07XHJcblxyXG4gIGNhbGxIYW5kZWxMYWJlbFRvZ2dsZUNoYW5nZXIoKTogdm9pZCB7XHJcbiAgICB0aGlzLmhhbmRlbExhYmVsVG9nZ2xlID8gbmV3IEhhbmRlbHNMYWJlbHMoKS5kaXNwbGF5Q29udHJvbGxlcih0aGlzLmhhbmRlbExhYmVsVG9nZ2xlLCB0aGlzLm1pbkxhYmVsLCB0aGlzLm1heExhYmVsKSA6IGZhbHNlO1xyXG4gICAgaWYgKHRoaXMuaGFuZGVsTGFiZWxUb2dnbGUgJiYgdGhpcy5oYW5kZWxMYWJlbFRvZ2dsZS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgIG5ldyBIYW5kZWxzTGFiZWxzKCkuY2VudGVyaW5nUmVsYXRpdmVUb0hhbmRsZXModGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGgsIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRoLCB0aGlzLm1pbkxhYmVsLm9mZnNldFdpZHRoLCB0aGlzLm1heExhYmVsLm9mZnNldFdpZHRoLCB0aGlzLm1pbkxhYmVsLCB0aGlzLm1heExhYmVsKVxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjYWxsTWF4SGFuZGVsVG9nZ2xlQ2hhbmdlcigpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLmhhbmRlbFRvZ2dsZSAmJiB0aGlzLmhhbmRlbFRvZ2dsZS5jaGVja2VkID09PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLnNsaWRlck1vdmVtZW50LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtYXgnXSA9IHsnbWF4JzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRofWAsICdzbGlkZXJXaWR0aCc6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbkhhbmRlbC5vZmZzZXRXaWR0aH1gfVxyXG4gICAgICB0aGlzLm1heEhhbmRlbC5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRofXB4YDtcclxuICAgICAgdGhpcy5tYXhTbGlkZXJWYWx1ZU91dHB1dCA/IHRoaXMubWF4U2xpZGVyVmFsdWVPdXRwdXQudGV4dENvbnRlbnQgPSAnJyA6IGZhbHNlO1xyXG4gICAgICB0aGlzLm1heElucHV0ID8gdGhpcy5tYXhJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpIDogZmFsc2U7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQgPyB0aGlzLm1heElucHV0LnZhbHVlID0gJycgOiBmYWxzZTtcclxuICAgICAgdGhpcy5tYXhJbnB1dCA/IHRoaXMubWF4SW5wdXQuc3R5bGUub3BhY2l0eSA9ICcwLjMnIDogZmFsc2U7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH07XHJcblxyXG4gICAgdGhpcy5oYW5kZWxUb2dnbGUgPyBuZXcgSGFuZGVscygpLmRpc3BsYXlDb250cm9sbGVyKHRoaXMuaGFuZGVsVG9nZ2xlLCB0aGlzLm1heEhhbmRlbCkgOiBmYWxzZSA7XHJcblxyXG4gICAgaWYgKHRoaXMuaGFuZGVsVG9nZ2xlICYmIHRoaXMuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5kYXRhUmVxdWVzdFN0YXR1c1tcImdldE1heERhdGFcIl0gPSB0cnVlO1xyXG4gICAgICB0aGlzLm1heElucHV0ID8gdGhpcy5tYXhJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5JykgOiBmYWxzZTtcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5yaWdodCA9IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSAodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRoIC8gMiApICsgJ3B4JztcclxuICAgICAgaWYgKCt0aGlzLnNsaWRlck1vdmVtZW50LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pblsnbWluJ10gPj0gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRoIC0gdGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICB0aGlzLnNsaWRlck1vdmVtZW50LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtaW4nXSA9IHsnbWluJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRoIC0gdGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGh9YCwgJ3NsaWRlcldpZHRoJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRofWB9XHJcbiAgICAgICAgdGhpcy5taW5IYW5kZWwuc3R5bGUubGVmdCA9IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1heEhhbmRlbC5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRofXB4YDtcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmVmcmVzaE1heFNpZGVNZW51RGF0YShkYXRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMubWF4U2xpZGVyVmFsdWVPdXRwdXQgPyB0aGlzLm1heFNsaWRlclZhbHVlT3V0cHV0LnRleHRDb250ZW50ID0gYCAtICR7ZGF0YX1gIDogZmFsc2U7XHJcbiAgICBpZiAodGhpcy5tYXhJbnB1dCkge1xyXG4gICAgICB0aGlzLm1heElucHV0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQudmFsdWUgPSBgJHtkYXRhfWA7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGlucHV0c1Bvc3NpYmxlUmFuZ2UoIGRhdGE6IFBvc3NpYmxlUmFuZ2UsIG1pbjogSFRNTElucHV0RWxlbWVudCwgbWF4OiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XHJcbiAgICBtaW4uc2V0QXR0cmlidXRlKCdtYXgnLCBkYXRhLm1heCk7XHJcbiAgICBtaW4uc2V0QXR0cmlidXRlKCdtaW4nLCBkYXRhLm1pbik7XHJcbiAgICBtYXguc2V0QXR0cmlidXRlKCdtYXgnLCBkYXRhLm1heCk7XHJcbiAgfTtcclxuXHJcbiAgYmluZEZvck1pbigpOiB2b2lkIHtcclxuICAgIGxldCB0aGF0ID0gdGhpczsgXHJcbiAgICB0aGF0Lm1pbkhhbmRlbC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKCBldmVudCApOiB2b2lkIHtcclxuICAgICAgdGhhdC5zbGlkZXJNb3ZlbWVudC5taW5IYW5kZWxMaXN0ZW5lciggZXZlbnQsIHVuZGVmaW5lZCk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGJpbmRGb3JNYXgoKTogdm9pZCB7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7IFxyXG4gICAgdGhhdC5tYXhIYW5kZWwub25tb3VzZWRvd24gPSBmdW5jdGlvbihldmVudCk6IHZvaWQge1xyXG4gICAgICB0aGF0LnNsaWRlck1vdmVtZW50Lm1heEhhbmRlbExpc3RlbmVyKCBldmVudCwgdW5kZWZpbmVkKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgbWFrZUJpbmRMYWJlbFRvZ2dsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMuY2FsbEhhbmRlbExhYmVsVG9nZ2xlQ2hhbmdlcigpO1xyXG4gIH07XHJcblxyXG4gIG1ha2VCaW5kSGFuZGVsVG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jYWxsTWF4SGFuZGVsVG9nZ2xlQ2hhbmdlcigpO1xyXG4gIH07XHJcblxyXG4gIG1ha2VCaW5kU3RlcElucHV0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5zdGVwSW5wdXQgPyB0aGlzLmRhdGFSZXF1ZXN0U3RhdHVzWydjaGVja3NOZXdTdGVwRm9yVmFsaWRpdHknXSA9IHRoaXMuc3RlcElucHV0LnZhbHVlIDogZmFsc2U7XHJcbiAgfTtcclxuICBcclxuICBtYWtlQmluZEZvclZhbHVlU2NhbGVUb2dnbGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnZhbHVlU2NhbGVUb2dnbGUgPyB0aGlzLnZhbHVlU2NhbGUuZGlzcGxheUNvbnRyb2xsZXIodGhpcy52YWx1ZVNjYWxlVG9nZ2xlKSA6IGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIG1ha2VCaW5kRm9yUGxhbmVUb2dnbGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnBsYW5lVG9nZ2xlID8gdGhpcy5zbGlkZXJNb3ZlbWVudC5jaGFuZ2VQbGFuZSh0aGlzLnBsYW5lVG9nZ2xlLCB0aGlzLnNsaWRlckNvbnRhaW5lciwgdGhpcy5taW5WYWx1ZSwgdGhpcy5tYXhWYWx1ZSkgOiBmYWxzZTtcclxuICAgIHRoaXMucGxhbmVUb2dnbGUgPyB0aGlzLnZhbHVlU2NhbGUucmVwb3NpdGlvbnNBZnRlckNoYW5nZVBsYW5lKHRoaXMucGxhbmVUb2dnbGUuY2hlY2tlZCkgOiBmYWxzZTtcclxuICB9O1xyXG5cclxuICBtYWtlQmluZEZvclNlbGVjdGlvbk1pblZhbHVlICgpOiB2b2lkIHtcclxuICAgIHRoaXMuc2xpZGVyTW92ZW1lbnQuc2VsZWN0aW9uT2ZQcmVwYXJlZFZhbHVlKCdtaW4nKTtcclxuICB9O1xyXG5cclxuICBtYWtlQmluZEZvclZhbHVlU2NhbGUoZWxlbWVudDogSFRNTExhYmVsRWxlbWVudCk6IHZvaWQge1xyXG4gICAgaWYgKGVsZW1lbnQudGV4dENvbnRlbnQpIHtcclxuICAgICAgbGV0IHZhbDogc3RyaW5nID0gZWxlbWVudC50ZXh0Q29udGVudDtcclxuICAgICAgdGhpcy5kYXRhUmVxdWVzdFN0YXR1c1snc2VsZWN0SGFuZGxlRm9yVmFsdWVTY2FsZSddID0gdmFsO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBtYWtlQmluZEZvclNlbGVjdGlvbk1heFZhbHVlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zbGlkZXJNb3ZlbWVudC5zZWxlY3Rpb25PZlByZXBhcmVkVmFsdWUoJ21heCcpO1xyXG4gIH07XHJcblxyXG4gIG1ha2VCaW5kRm9yTWluSW5wdXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGFSZXF1ZXN0U3RhdHVzW1wiZ2V0TWluUG9zaXRpb25zQW1vdW50XCJdID0gdHJ1ZTtcclxuICB9O1xyXG5cclxuICBtYWtlQmluZEZvck1heElucHV0KCk6IHZvaWQge1xyXG4gICAgdGhpcy5kYXRhUmVxdWVzdFN0YXR1c1tcImdldE1heFBvc2l0aW9uc0Ftb3VudFwiXSA9IHRydWU7XHJcbiAgfTtcclxufTtcclxuIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vY29tcG9uZW50cy92aWV3L3ZpZXcnO1xyXG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RlbC9tb2RlbCc7XHJcbmltcG9ydCB7IEZhY2FkZSB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RlbC9mYWNhZGUnO1xyXG5pbXBvcnQgeyBQcmVzZW50ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJlc2VudGVyL3ByZXNlbnRlcic7XHJcblxyXG5kZWNsYXJlIGdsb2JhbCB7XHJcbiAgaW50ZXJmYWNlIEpRdWVyeSB7XHJcbiAgICB0ZXN0U2xpZGVyKCBvcHRpb25zOiBTbGlkZXJPcHRpb25zKTp2b2lkO1xyXG4gIH1cclxufTtcclxuXHJcbmludGVyZmFjZSBTbGlkZXJPcHRpb25zIHtcclxuICBba2V5OiBzdHJpbmddOiBib29sZWFuIHwgc3RyaW5nXHJcbn07XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIFNldHRpbmdzIHtcclxuICAnbWluJzogc3RyaW5nO1xyXG4gICdtYXgnOiBzdHJpbmc7XHJcbiAgJ3JhbmdlJzogYm9vbGVhbjtcclxuICAnc2lkZS1tZW51JzogYm9vbGVhbjtcclxuICAnaGFuZGVsc0xhYmVsJzogYm9vbGVhbjtcclxuICAndmVydGljYWwnOiBib29sZWFuO1xyXG4gICdzdGVwJzogYm9vbGVhbiB8IHN0cmluZztcclxuICAnc2lkZU1lbnVDb250YWluZXInOiBzdHJpbmc7XHJcbiAgJ3ZhbHVlU2NhbGUnOiBib29sZWFuO1xyXG4gICdjdXJyZW50LW1pbic/OiBzdHJpbmc7XHJcbiAgJ2N1cnJlbnQtbWF4Jz86IHN0cmluZztcclxufVxyXG5cclxuKGZ1bmN0aW9uKCAkICkge1xyXG4gICQuZm4udGVzdFNsaWRlciA9IGZ1bmN0aW9uKCBvcHRpb25zOiBTbGlkZXJPcHRpb25zICkge1xyXG5cclxuICAgIGxldCBzZXR0aW5nczogU2V0dGluZ3MgPSAkLmV4dGVuZCgge1xyXG4gICAgICAnbWluJzogJzAnLFxyXG4gICAgICAnbWF4JzogJzEwJyxcclxuICAgICAgJ3JhbmdlJzogZmFsc2UsXHJcbiAgICAgICdzaWRlLW1lbnUnOiBmYWxzZSxcclxuICAgICAgJ2hhbmRlbHNMYWJlbCc6IGZhbHNlLFxyXG4gICAgICAndmVydGljYWwnOiBmYWxzZSxcclxuICAgICAgJ3N0ZXAnOiBmYWxzZSxcclxuICAgICAgJ3ZhbHVlU2NhbGUnOiBmYWxzZSxcclxuICAgICAgJ3NpZGVNZW51Q29udGFpbmVyJzogJ2ZhbHNlJ1xyXG4gICAgfSwgb3B0aW9ucyk7XHJcblxyXG4gICAgbGV0IHRoYXQ6IEhUTUxEaXZFbGVtZW50ID0gdGhpcztcclxuICAgIFxyXG4gICAgbGV0IG1vZGVsOiBNb2RlbDtcclxuICAgIGlmICgnY3VycmVudC1taW4nIGluIHNldHRpbmdzICYmICdjdXJyZW50LW1heCcgaW4gc2V0dGluZ3MpIHtcclxuICAgICAgbW9kZWwgPSBuZXcgTW9kZWwoeydtaW4nOiBzZXR0aW5nc1snbWluJ10sIG1heDogc2V0dGluZ3NbJ21heCddLCAnY3VycmVudC1taW4nOiBzZXR0aW5nc1snY3VycmVudC1taW4nXSA/IHNldHRpbmdzWydjdXJyZW50LW1pbiddIDogJycsICdjdXJyZW50LW1heCc6IHNldHRpbmdzWydjdXJyZW50LW1heCddID8gc2V0dGluZ3NbJ2N1cnJlbnQtbWF4J10gOiAnJ30pO1xyXG4gICAgfSBlbHNlIGlmICgnY3VycmVudC1taW4nIGluIHNldHRpbmdzKSB7XHJcbiAgICAgIG1vZGVsID0gbmV3IE1vZGVsKHsnbWluJzogc2V0dGluZ3NbJ21pbiddLCBtYXg6IHNldHRpbmdzWydtYXgnXSwgJ2N1cnJlbnQtbWluJzogc2V0dGluZ3NbJ2N1cnJlbnQtbWluJ10gPyBzZXR0aW5nc1snY3VycmVudC1taW4nXSA6ICcnLCAnY3VycmVudC1tYXgnOiBzZXR0aW5nc1snbWF4J119KTtcclxuICAgIH0gZWxzZSBpZiAoJ2N1cnJlbnQtbWF4JyBpbiBzZXR0aW5ncykge1xyXG4gICAgICBtb2RlbCA9IG5ldyBNb2RlbCh7J21pbic6IHNldHRpbmdzWydtaW4nXSwgbWF4OiBzZXR0aW5nc1snbWF4J10sICdjdXJyZW50LW1pbic6IHNldHRpbmdzWydtaW4nXSwgJ2N1cnJlbnQtbWF4Jzogc2V0dGluZ3NbJ2N1cnJlbnQtbWF4J10gPyBzZXR0aW5nc1snY3VycmVudC1tYXgnXSA6ICcnfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtb2RlbCA9IG5ldyBNb2RlbCh7J21pbic6IHNldHRpbmdzWydtaW4nXSwgbWF4OiBzZXR0aW5nc1snbWF4J10sICdjdXJyZW50LW1pbic6IHNldHRpbmdzWydtaW4nXSwgJ2N1cnJlbnQtbWF4Jzogc2V0dGluZ3NbJ21heCddfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCB2aWV3OiBWaWV3ID0gbmV3IFZpZXcodGhhdCwgc2V0dGluZ3MpO1xyXG4gICAgXHJcbiAgICBsZXQgZmFjYWRlOiBGYWNhZGUgPSBuZXcgRmFjYWRlKG1vZGVsKVxyXG4gICAgXHJcbiAgICBsZXQgcHJlc2VudGVyOiBQcmVzZW50ZXIgPSBuZXcgUHJlc2VudGVyKHZpZXcsIGZhY2FkZSk7XHJcblxyXG4gICAgcHJlc2VudGVyLnN0YXJ0Vmlld01vbml0b3JpbmcoKTtcclxuICAgIHZpZXcuYmluZEV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICB2aWV3LmRpc3BsYXlFbGVtZW50cygpO1xyXG4gICAgdmlldy5iaW5kRXZlbnRIYW5kZWxzTW92ZW1lbnQoKTtcclxuICAgIFxyXG4gIH07XHJcbn0pKGpRdWVyeSk7Il0sInNvdXJjZVJvb3QiOiIifQ==