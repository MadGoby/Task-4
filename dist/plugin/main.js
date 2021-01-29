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
    key: "getStartHandelsPosition",
    value: function (_getStartHandelsPosition) {
      function getStartHandelsPosition() {
        return _getStartHandelsPosition.apply(this, arguments);
      }

      getStartHandelsPosition.toString = function () {
        return _getStartHandelsPosition.toString();
      };

      return getStartHandelsPosition;
    }(function () {
      return this.model.getCurrentData();
    })
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

            if (prop === 'getStartHandelsPosition') {
              var startPositions = facade.getStartHandelsPosition();
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
      "getStartHandelsPosition": false,
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
      this.dataRequestStatus["getStartHandelsPosition"] = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwvZmFjYWRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21vZGVsL21vZGVsLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRlci9wcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL2hhbmRlbHMtbGFiZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9oYW5kZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9zZWxlY3RlZC1yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NvbXBvbmVudHMvc2lkZS1tZW51LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9zbGlkZXItbW92ZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL3NsaWRlci1yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NvbXBvbmVudHMvdmFsdWUtc2NhbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL3ZhbHVlUmFuZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy92aWV3LnRzIiwid2VicGFjazovLy8uL3NyYy9qcXVlcnkudWkuY3VzdG9tU2xpZGVyLnRzIl0sIm5hbWVzIjpbIkZhY2FkZSIsIm1vZGVsIiwiZ2V0Q3VycmVudERhdGEiLCJkYXRhIiwicHJvcCIsIlN0cmluZyIsIk1hdGgiLCJyb3VuZCIsIm1heCIsIm1pbiIsInZhbHVlIiwiZG91YmxlVG9nZ2xlIiwibWluRGlmZmVyZW5jZSIsIm1heERpZmZlcmVuY2UiLCJNb2RlbCIsInNldHRpbmdzIiwiT2JqZWN0IiwiYXNzaWduIiwiUHJlc2VudGVyIiwidmlldyIsImZhY2FkZSIsInZpZXdMaW5rIiwiZmFjYWRlTGluayIsIm1vbml0b3JzQ3VycmVudEhhbmRlbHNQb3NpdGlvbnMiLCJtb25pdG9yc1ZpZXdSZXF1ZXN0cyIsInNsaWRlck1vdmVtZW50IiwiY3VycmVudEhhbmRlbHNQb3NpdGlvbnMiLCJQcm94eSIsInNldCIsInRhcmdldCIsInZhbCIsIm1vZGVsUmVzdWx0IiwicmVmcmVzaE1vZGVsRGF0YSIsInJlZnJlc2hDdXJyZW50VmFsdWVzIiwiZGF0YVJlcXVlc3RTdGF0dXMiLCJyZXN1bHQiLCJnZXRNYXhEYXRhIiwicmVmcmVzaE1heFNpZGVNZW51RGF0YSIsInBvc2l0aW9ucyIsImdldFBvc2l0aW9uc0Ftb3VudCIsIm1pbklucHV0Iiwic2lkZU1lbnVJbnB1dHNWYWx1ZXNWYWxpZGF0aW9uQ2hlY2tlciIsIm1heElucHV0IiwicG9zc2libGVSYW5nZSIsImdldFBvc3NpYmxlUmFuZ2UiLCJpbnB1dHNQb3NzaWJsZVJhbmdlIiwic3RhcnRQb3NpdGlvbnMiLCJnZXRTdGFydEhhbmRlbHNQb3NpdGlvbiIsInN0YXJ0SGFuZGxlcnNQb3NpdGlvbnMiLCJzdGVwQW1vdW50IiwidmFsdWVTY2FsZVZhbHVlcyIsImdldFZhbHVlc0ZvclZhbHVlU2NhbGUiLCJ2YWx1ZVNjYWxlIiwicmVmcmVzaFZhbHVlcyIsImNlbnRlcnNWYWx1ZXNQb3NpdGlvbnMiLCJzbGlkZXJSYW5nZSIsIm1pbkhhbmRlbCIsImNoZWNrRG91YmxlaGFuZGVscyIsImRvdWJsZSIsInNlbGVjdGVkSGFuZGVsIiwic2VsZWN0SGFuZGxlRm9yVmFsdWVTY2FsZSIsImNlbnRlcmVkSGFuZGVsQnlWYWx1ZVNjYWxlIiwiYWRhcHRlZE9iamVjdEZvclJlZnJlc2giLCJoYW5kZWxUb2dnbGUiLCJjaGVja2VkIiwicmFuZ2UiLCJzdGVwSW5wdXQiLCJjaGVja1ZhbGlkaXR5T2ZDaGFuZ2VkU3RlcCIsIkhhbmRlbHNMYWJlbHMiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJtaW5MYWJlbCIsIm1heExhYmVsIiwidG9nZ2xlIiwic3R5bGUiLCJkaXNwbGF5IiwibWluSGFuZGVsV2lkdGgiLCJtYXhIYW5kZWxXaWR0aCIsIm1pbkxhYmVsV2lkdGgiLCJtYXhMYWJlbFdpZHRoIiwibGVmdCIsIkhhbmRlbHMiLCJtYXhIYW5kZWwiLCJTZWxlY3RlZFJhbmdlIiwiaW50ZXJ2YWwiLCJTaWRlTWVudSIsInNsaWRlclZhbHVlUCIsImlubmVyVGV4dCIsIm1pblNsaWRlclZhbHVlT3V0cHV0IiwiaWQiLCJtYXhTbGlkZXJWYWx1ZU91dHB1dCIsInNsaWRlclRvZ2dsZVAiLCJzbGlkZXJUb2dnbGVMYWJlbCIsIm1heFNsaWRlckhhbmRlbFRvZ2dsZSIsInNldEF0dHJpYnV0ZSIsImN1c3RvbVNsaWRlckJvcmRlciIsImN1c3RvbVNsaWRlcklucHV0cyIsImN1c3RvbVNsaWRlcklucHV0c1AiLCJjdXN0b21TbGlkZXJJbnB1dHNNaW5MYWJlbCIsImN1c3RvbVNsaWRlcklucHV0c01heExhYmVsIiwiY3VzdG9tU2xpZGVySW5wdXRzTWluIiwiY3VzdG9tU2xpZGVySW5wdXRzTWF4IiwidG9nZ2xlRm9yVmFsdWVzQ29udGFpbmVyIiwidG9nZ2xlRm9yVmFsdWVzUCIsInRvZ2dsZUZvclZhbHVlc0xhYmVsIiwidG9nZ2xlRm9yVmFsdWVzSW5wdXQiLCJ0b2dnbGVGb3JWYWx1ZXNTcGFuIiwic3RlcENvbnRhaW5lciIsInN0ZXBJbnB1dFAiLCJmb3JTdGVwSW5wdXRMYWJlbCIsInZhbHVlU2NhbGVDb250YWluZXIiLCJ0b2dnbGVGb3JWYWx1ZVNjYWxlUCIsInRvZ2dsZUZvclZhbHVlU2NhbGVMYWJlbCIsInRvZ2dsZUZvclZhbHVlU2NhbGVJbnB1dCIsInRvZ2dsZUZvclZhbHVlU2NhbGVTcGFuIiwidG9nZ2xlRm9yUGxhbmVDb250YWluZXIiLCJ0b2dnbGVGb3JQbGFuZVAiLCJ0b2dnbGVGb3JQbGFuZUxhYmVsIiwidG9nZ2xlRm9yUGxhbmVJbnB1dCIsInRvZ2dsZUZvclBsYW5lU3BhbiIsIm1haW5TbGlkZXJDb250YWluZXIiLCJhcHBlbmQiLCJjdXN0b21TbGlkZXJNZW51Q29udGFpbmVyIiwiaGFuZGVsTGFiZWxUb2dnbGUiLCJwbGFuZVRvZ2dsZSIsInZhbHVlU2NhbGVUb2dnbGUiLCJTbGlkZXJNb3ZlbWVudCIsImhhbmRlbHMiLCJoYW5kZWxzVG9nZ2xlIiwic3RlcCIsInBvc2l0aW9uVmFsdWVzIiwib2Zmc2V0V2lkdGgiLCJyaWdodCIsImV2ZW50IiwidGVzdCIsInRoYXQiLCJzaGlmdCIsInZlcnRpY2FsIiwiZG91YmxlSGFuZGVscyIsImNoZWNrQ3VycmVudFNsaWRlclNldHRpbmdzIiwiY2xpZW50WSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImNsaWVudFgiLCJhZGRFdmVudExpc3RlbmVyIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJuZXdMZWZ0IiwicmlnaHRFZGdlIiwicmVuZXdhbE9mUG9zaXRpb24iLCJ1bmRlZmluZWQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYm9keSIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJ0b2dnbGVSZXN1bHQiLCJoZWlnaHQiLCJ0cmFuc2Zvcm0iLCJyZW1vdmUiLCJtaW5pbXVtIiwiY29uc29sZSIsImxvZyIsImlucHV0IiwicGl4ZWxzUGVyVW5pdCIsIm1pblN0ZXAiLCJTbGlkZXJSYW5nZSIsImVsZW0iLCJWYWx1ZVNjYWxlIiwidmFsdWUxNSIsInZhbHVlMzAiLCJ2YWx1ZTUwIiwidmFsdWU3MCIsInZhbHVlODUiLCJ2YWx1ZVNjYWxlMTUiLCJ2YWx1ZVNjYWxlMzAiLCJ2YWx1ZVNjYWxlNTAiLCJ2YWx1ZVNjYWxlNzAiLCJ2YWx1ZVNjYWxlODUiLCJ2YWx1ZXMiLCJzbGlkZXIiLCJoYW5kZWwiLCJWYWx1ZVJhbmdlIiwiVmlldyIsImdldEVsZW1lbnRzIiwidmFsdWVSYW5nZSIsInNpZGVNZW51Iiwic2lkZU1lbnVDb250YWluZXIiLCJoYW5kZWxzTGFiZWxzIiwic2xpZGVyQ29udGFpbmVyIiwib2Zmc2V0SGVpZ2h0IiwicXVlcnlTZWxlY3RvckFsbCIsIm9wYWNpdHkiLCJjaGFuZ2VQbGFuZSIsInJlcG9zaXRpb25zQWZ0ZXJDaGFuZ2VQbGFuZSIsImRpc3BsYXlDb250cm9sbGVyIiwibWFrZUJpbmRMYWJlbFRvZ2dsZSIsImJpbmQiLCJtYWtlQmluZEhhbmRlbFRvZ2dsZSIsIm1ha2VCaW5kRm9yUGxhbmVUb2dnbGUiLCJtYWtlQmluZEZvclNlbGVjdGlvbk1pblZhbHVlIiwibWFrZUJpbmRGb3JTZWxlY3Rpb25NYXhWYWx1ZSIsIm1ha2VCaW5kRm9yTWluSW5wdXQiLCJtYWtlQmluZEZvck1heElucHV0IiwibWFrZUJpbmRGb3JWYWx1ZVNjYWxlVG9nZ2xlIiwibWFrZUJpbmRTdGVwSW5wdXQiLCJtYWtlQmluZEZvclZhbHVlU2NhbGUiLCJiaW5kRm9yTWluIiwiYmluZEZvck1heCIsIm5ld0RhdGEiLCJjaGVja1VuZGVmaW5lZFN0cmluZ3MiLCJ0ZXh0Q29udGVudCIsImNlbnRlcmluZ1JlbGF0aXZlVG9IYW5kbGVzIiwicmVtb3ZlQXR0cmlidXRlIiwib25tb3VzZWRvd24iLCJtaW5IYW5kZWxMaXN0ZW5lciIsIm1heEhhbmRlbExpc3RlbmVyIiwiY2FsbEhhbmRlbExhYmVsVG9nZ2xlQ2hhbmdlciIsImNhbGxNYXhIYW5kZWxUb2dnbGVDaGFuZ2VyIiwic2VsZWN0aW9uT2ZQcmVwYXJlZFZhbHVlIiwiZWxlbWVudCIsIiQiLCJmbiIsInRlc3RTbGlkZXIiLCJvcHRpb25zIiwiZXh0ZW5kIiwicHJlc2VudGVyIiwic3RhcnRWaWV3TW9uaXRvcmluZyIsImJpbmRFdmVudExpc3RlbmVycyIsImRpc3BsYXlFbGVtZW50cyIsImJpbmRFdmVudEhhbmRlbHNNb3ZlbWVudCIsImpRdWVyeSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7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RUQsUUFBSUksSUFBVSxHQUFHLElBQUlxSywwREFBSixDQUFTL0MsSUFBVCxFQUFlMUgsUUFBZixDQUFqQjtBQUVBLFFBQUlLLE1BQWMsR0FBRyxJQUFJcEIsK0RBQUosQ0FBV0MsS0FBWCxDQUFyQjtBQUVBLFFBQUlrTyxTQUFvQixHQUFHLElBQUlqTix5RUFBSixDQUFjQyxJQUFkLEVBQW9CQyxNQUFwQixDQUEzQjtBQUVBK00sYUFBUyxDQUFDQyxtQkFBVjtBQUNBak4sUUFBSSxDQUFDa04sa0JBQUw7QUFDQWxOLFFBQUksQ0FBQ21OLGVBQUw7QUFDQW5OLFFBQUksQ0FBQ29OLHdCQUFMO0FBRUQsR0F0Q0Q7QUF1Q0QsQ0F4Q0QsRUF3Q0dDLE1BeENILEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2pxdWVyeS51aS5jdXN0b21TbGlkZXIudHNcIik7XG4iLCJpbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vbW9kZWwnO1xyXG5pbXBvcnQgeyBnZXRTdGFydEhhbmRlbHNQb3NpdGlvbiB9IGZyb20gJy4vbW9kZWwnO1xyXG5cclxuaW50ZXJmYWNlIE5ld1Bvc2l0aW9uIHtcclxuICAnbWluJzogc3RyaW5nO1xyXG4gICdtYXgnOiBzdHJpbmc7XHJcbiAgJ3NsaWRlcldpZHRoJzogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWxlY3RIYW5kbGVGb3JWYWx1ZVNjYWxlIHtcclxuICAndGFyZ2V0Jzogc3RyaW5nO1xyXG4gICd2YWx1ZSc6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2V0VmFsdWVzRm9yVmFsdWVTY2FsZSB7XHJcbiAgJzE1Jzogc3RyaW5nO1xyXG4gICczMCc6IHN0cmluZztcclxuICAnNTAnOiBzdHJpbmc7XHJcbiAgJzcwJzogc3RyaW5nO1xyXG4gICc4NSc6IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgR2V0UG9zaXRpb25zQW1vdW50IHtcclxuICAncG9zaXRpb25zJzogc3RyaW5nO1xyXG4gICdtaW5pbXVtJzogc3RyaW5nO1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIEdldFBvc3NpYmxlUmFuZ2Uge1xyXG4gICdtaW4nOiBzdHJpbmc7XHJcbiAgJ21heCc6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2FkZSB7XHJcbiAgcmVhZG9ubHkgbW9kZWw6IE1vZGVsO1xyXG5cclxuICBjb25zdHJ1Y3RvciAobW9kZWw6IE1vZGVsKSB7XHJcbiAgICB0aGlzLm1vZGVsID0gbW9kZWw7XHJcbiAgfTtcclxuXHJcbiAgZ2V0U3RhcnRIYW5kZWxzUG9zaXRpb24oKTogZ2V0U3RhcnRIYW5kZWxzUG9zaXRpb24ge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZ2V0Q3VycmVudERhdGEoKTtcclxuICB9O1xyXG4gIFxyXG4gIHJlZnJlc2hNb2RlbERhdGEoZGF0YTogTmV3UG9zaXRpb24sIHByb3A6IHN0cmluZyk6IG9iamVjdCB7XHJcbiAgICBpZiAocHJvcCA9PT0gJ21pbicpIHtcclxuICAgICAgdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1pbiddID0gU3RyaW5nKE1hdGgucm91bmQoK3RoaXMubW9kZWwuZGF0YVsnbWluJ10gKyAoK2RhdGFbJ21pbiddIC8gKCtkYXRhWydzbGlkZXJXaWR0aCddIC8gKCt0aGlzLm1vZGVsLmRhdGFbJ21heCddIC0gK3RoaXMubW9kZWwuZGF0YVsnbWluJ10pKSkpKTtcclxuICAgICAgcmV0dXJuIHsgJ21pbic6IHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1taW4nXSB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWF4J10gPSBTdHJpbmcoTWF0aC5yb3VuZCgrdGhpcy5tb2RlbC5kYXRhWydtaW4nXSArICgrZGF0YVsnbWF4J10gLyAoK2RhdGFbJ3NsaWRlcldpZHRoJ10gLyAoK3RoaXMubW9kZWwuZGF0YVsnbWF4J10gLSArdGhpcy5tb2RlbC5kYXRhWydtaW4nXSkpKSkpO1xyXG4gICAgICByZXR1cm4geyAnbWF4JzogdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1heCddIH1cclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgZ2V0TW9kZWxEYXRhKCk6IG9iamVjdCB7XHJcbiAgICByZXR1cm4geyAnbWluJzogdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1pbiddLCAnbWF4JzogdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1heCddfVxyXG4gIH07XHJcblxyXG4gIGdldE1heERhdGEoKTogbnVtYmVyIHtcclxuICAgIHJldHVybiArdGhpcy5tb2RlbC5kYXRhWydtYXgnXVxyXG4gIH07XHJcblxyXG4gIGdldFBvc3NpYmxlUmFuZ2UoKTogR2V0UG9zc2libGVSYW5nZSB7XHJcbiAgICByZXR1cm4geydtYXgnOnRoaXMubW9kZWwuZGF0YS5tYXgsICdtaW4nOiB0aGlzLm1vZGVsLmRhdGEubWlufTtcclxuICB9O1xyXG5cclxuICBnZXRQb3NpdGlvbnNBbW91bnQoKTogR2V0UG9zaXRpb25zQW1vdW50IHtcclxuICAgIHJldHVybiB7J3Bvc2l0aW9ucyc6IFN0cmluZygrdGhpcy5tb2RlbC5kYXRhLm1heCAtICt0aGlzLm1vZGVsLmRhdGEubWluKSwgJ21pbmltdW0nOiB0aGlzLm1vZGVsLmRhdGEubWlufTtcclxuICB9XHJcblxyXG4gIGdldFZhbHVlc0ZvclZhbHVlU2NhbGUoKTogR2V0VmFsdWVzRm9yVmFsdWVTY2FsZSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAnMTUnOiBTdHJpbmcoK3RoaXMubW9kZWwuZGF0YS5taW4gKyAoKCt0aGlzLm1vZGVsLmRhdGEubWF4IC0gK3RoaXMubW9kZWwuZGF0YS5taW4pICogMC4xNSkpLFxyXG4gICAgICAnMzAnOiBTdHJpbmcoK3RoaXMubW9kZWwuZGF0YS5taW4gKyAoKCt0aGlzLm1vZGVsLmRhdGEubWF4IC0gK3RoaXMubW9kZWwuZGF0YS5taW4pICogMC4zMCkpLFxyXG4gICAgICAnNTAnOiBTdHJpbmcoK3RoaXMubW9kZWwuZGF0YS5taW4gKyAoKCt0aGlzLm1vZGVsLmRhdGEubWF4IC0gK3RoaXMubW9kZWwuZGF0YS5taW4pICogMC41MCkpLFxyXG4gICAgICAnNzAnOiBTdHJpbmcoK3RoaXMubW9kZWwuZGF0YS5taW4gKyAoKCt0aGlzLm1vZGVsLmRhdGEubWF4IC0gK3RoaXMubW9kZWwuZGF0YS5taW4pICogMC43MCkpLFxyXG4gICAgICAnODUnOiBTdHJpbmcoK3RoaXMubW9kZWwuZGF0YS5taW4gKyAoKCt0aGlzLm1vZGVsLmRhdGEubWF4IC0gK3RoaXMubW9kZWwuZGF0YS5taW4pICogMC44NSkpXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHNlbGVjdEhhbmRsZUZvclZhbHVlU2NhbGUodmFsdWU6IHN0cmluZywgZG91YmxlVG9nZ2xlOiBib29sZWFuKTogU2VsZWN0SGFuZGxlRm9yVmFsdWVTY2FsZSB7XHJcbiAgICBsZXQgbWluRGlmZmVyZW5jZTogc3RyaW5nO1xyXG4gICAgbGV0IG1heERpZmZlcmVuY2U6IHN0cmluZztcclxuICAgIGlmKGRvdWJsZVRvZ2dsZSkge1xyXG4gICAgICBpZiAoK3RoaXMubW9kZWwuZGF0YVsnY3VycmVudC1taW4nXSA+ICt2YWx1ZSB8fCArdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1pbiddID09PSArdmFsdWUpIHtcclxuICAgICAgICBtaW5EaWZmZXJlbmNlID0gU3RyaW5nKCt0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWluJ10gLSArdmFsdWUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG1pbkRpZmZlcmVuY2UgPSBTdHJpbmcoK3ZhbHVlIC0gK3RoaXMubW9kZWwuZGF0YVsnY3VycmVudC1taW4nXSk7XHJcbiAgICAgIH07XHJcbiAgICAgIFxyXG4gICAgICBpZiAoK3RoaXMubW9kZWwuZGF0YVsnY3VycmVudC1tYXgnXSA+ICt2YWx1ZSB8fCArdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1heCddID09PSArdmFsdWUgKSB7XHJcbiAgICAgICAgbWF4RGlmZmVyZW5jZSA9IFN0cmluZygrdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1heCddIC0gK3ZhbHVlKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBtYXhEaWZmZXJlbmNlID0gU3RyaW5nKCt2YWx1ZSAtICt0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWF4J10pO1xyXG4gICAgICB9O1xyXG4gIFxyXG4gICAgICBpZigrbWluRGlmZmVyZW5jZSA8ICttYXhEaWZmZXJlbmNlIHx8ICttaW5EaWZmZXJlbmNlID09ICttYXhEaWZmZXJlbmNlKSB7XHJcbiAgICAgICAgdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1pbiddID0gdmFsdWU7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICd0YXJnZXQnOiAnbWluJyxcclxuICAgICAgICAgICd2YWx1ZSc6IHZhbHVlXHJcbiAgICAgICAgfTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWF4J10gPSB2YWx1ZTtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgJ3RhcmdldCc6ICdtYXgnLFxyXG4gICAgICAgICAgJ3ZhbHVlJzogdmFsdWVcclxuICAgICAgICB9O1xyXG4gICAgICB9O1xyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1taW4nXSA9IHZhbHVlO1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICd0YXJnZXQnOiAnbWluJyxcclxuICAgICAgICAndmFsdWUnOiB2YWx1ZVxyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgIH07XHJcbiAgfTtcclxufTsiLCJpbnRlcmZhY2UgVGFybnNmZXJlZFNldHRpbmdzIHtcclxuICAnbWluJzogc3RyaW5nO1xyXG4gICdtYXgnOiBzdHJpbmc7XHJcbiAgJ2N1cnJlbnQtbWluJzogc3RyaW5nO1xyXG4gICdjdXJyZW50LW1heCc6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBnZXRTdGFydEhhbmRlbHNQb3NpdGlvbiB7XHJcbiAgJ21pbmltdW0nOiBzdHJpbmcsIFxyXG4gICdtaW4nOiBzdHJpbmcsXHJcbiAgJ21heCc6IHN0cmluZywgXHJcbiAgJ3Bvc2l0aW9ucyc6IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIElEYXRhIHtcclxuICAnbWluJzogc3RyaW5nO1xyXG4gICdtYXgnOiBzdHJpbmc7XHJcbiAgJ2N1cnJlbnQtbWluJzogc3RyaW5nO1xyXG4gICdjdXJyZW50LW1heCc6IHN0cmluZztcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIE1vZGVsIHtcclxuXHJcbiAgZGF0YTogSURhdGE7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoIHNldHRpbmdzOiBUYXJuc2ZlcmVkU2V0dGluZ3MgKSB7IFxyXG4gICAgdGhpcy5kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudERhdGEoKTogZ2V0U3RhcnRIYW5kZWxzUG9zaXRpb24ge1xyXG4gICAgcmV0dXJuIHsnbWluaW11bSc6IHRoaXMuZGF0YS5taW4sICdtaW4nOiB0aGlzLmRhdGFbJ2N1cnJlbnQtbWluJ10sICdtYXgnOiB0aGlzLmRhdGFbJ2N1cnJlbnQtbWF4J10sICdwb3NpdGlvbnMnOiBgJHsrdGhpcy5kYXRhLm1heCAtICt0aGlzLmRhdGEubWlufWB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHsgRmFjYWRlIH0gZnJvbSAnLi4vbW9kZWwvZmFjYWRlJztcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gJy4uL3ZpZXcvdmlldyc7XHJcbmltcG9ydCB7IEdldFBvc2l0aW9uc0Ftb3VudCB9IGZyb20gJy4uL21vZGVsL2ZhY2FkZSc7XHJcbmltcG9ydCB7IEdldFBvc3NpYmxlUmFuZ2UgfSBmcm9tICcuLi9tb2RlbC9mYWNhZGUnO1xyXG5pbXBvcnQgeyBnZXRTdGFydEhhbmRlbHNQb3NpdGlvbiB9IGZyb20gJy4uL21vZGVsL21vZGVsJztcclxuaW1wb3J0IHsgR2V0VmFsdWVzRm9yVmFsdWVTY2FsZSB9IGZyb20gJy4uL21vZGVsL2ZhY2FkZSc7XHJcbmltcG9ydCB7IFNlbGVjdEhhbmRsZUZvclZhbHVlU2NhbGUgfSBmcm9tICcuLi9tb2RlbC9mYWNhZGUnO1xyXG5pbXBvcnQgeyBEYXRhT2ZWYWx1ZVJlZnJlc2ggfSBmcm9tICcuLi92aWV3L3ZpZXcnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFByZXNlbnRlciB7XHJcblxyXG4gIHByaXZhdGUgdmlld0xpbms7XHJcbiAgcHJpdmF0ZSBmYWNhZGVMaW5rO1xyXG5cclxuICBjb25zdHJ1Y3RvciAodmlldzogVmlldywgZmFjYWRlOiBGYWNhZGUpIHtcclxuICAgIHRoaXMudmlld0xpbmsgPSB2aWV3O1xyXG4gICAgdGhpcy5mYWNhZGVMaW5rID0gZmFjYWRlO1xyXG4gIH07XHJcblxyXG4gIHN0YXJ0Vmlld01vbml0b3JpbmcoKTogdm9pZCB7XHJcbiAgICB0aGlzLm1vbml0b3JzQ3VycmVudEhhbmRlbHNQb3NpdGlvbnMoKTtcclxuICAgIHRoaXMubW9uaXRvcnNWaWV3UmVxdWVzdHMoKTtcclxuICB9O1xyXG5cclxuICBtb25pdG9yc0N1cnJlbnRIYW5kZWxzUG9zaXRpb25zKCk6IHZvaWQge1xyXG4gICAgbGV0IHZpZXcgPSB0aGlzLnZpZXdMaW5rO1xyXG4gICAgbGV0IGZhY2FkZSA9IHRoaXMuZmFjYWRlTGluaztcclxuXHJcbiAgICB2aWV3LnNsaWRlck1vdmVtZW50LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zID0gbmV3IFByb3h5KHZpZXcuc2xpZGVyTW92ZW1lbnQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMsIHtcclxuICAgICAgc2V0KHRhcmdldCwgcHJvcCwgdmFsKSB7XHJcbiAgICAgICAgaWYodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgIHRhcmdldFtTdHJpbmcocHJvcCldID0gdmFsO1xyXG4gICAgICAgICAgbGV0IG1vZGVsUmVzdWx0ID0gZmFjYWRlLnJlZnJlc2hNb2RlbERhdGEodmFsLCBTdHJpbmcocHJvcCkpO1xyXG4gICAgICAgICAgdmlldy5yZWZyZXNoQ3VycmVudFZhbHVlcyhtb2RlbFJlc3VsdCk7XHJcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICB9O1xyXG5cclxuICBtb25pdG9yc1ZpZXdSZXF1ZXN0cygpOiB2b2lkIHtcclxuICAgIGxldCB2aWV3ID0gdGhpcy52aWV3TGluaztcclxuICAgIGxldCBmYWNhZGUgPSB0aGlzLmZhY2FkZUxpbms7XHJcblxyXG4gICAgdmlldy5kYXRhUmVxdWVzdFN0YXR1cyA9IG5ldyBQcm94eSh2aWV3LmRhdGFSZXF1ZXN0U3RhdHVzLCB7XHJcbiAgICAgIHNldCh0YXJnZXQsIHByb3AsIHZhbCkge1xyXG4gICAgICAgIGlmKHR5cGVvZiB2YWwgPT09ICdib29sZWFuJyB8fCB0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xyXG5cclxuICAgICAgICAgIGlmKHByb3AgPT09ICdnZXRNYXhEYXRhJykge1xyXG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBudW1iZXIgPSBmYWNhZGUuZ2V0TWF4RGF0YSgpO1xyXG4gICAgICAgICAgICB2aWV3LnJlZnJlc2hNYXhTaWRlTWVudURhdGEocmVzdWx0KTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgaWYocHJvcCA9PT0gJ2dldE1pblBvc2l0aW9uc0Ftb3VudCcpIHtcclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uczogR2V0UG9zaXRpb25zQW1vdW50ID0gZmFjYWRlLmdldFBvc2l0aW9uc0Ftb3VudCgpO1xyXG5cclxuICAgICAgICAgICAgdmlldy5taW5JbnB1dCA/IHZpZXcuc2xpZGVyTW92ZW1lbnQuc2lkZU1lbnVJbnB1dHNWYWx1ZXNWYWxpZGF0aW9uQ2hlY2tlcignbWluJywgK3ZpZXcubWluSW5wdXQudmFsdWUsICtwb3NpdGlvbnNbJ3Bvc2l0aW9ucyddLCArcG9zaXRpb25zWydtaW5pbXVtJ10pIDogZmFsc2U7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGlmKHByb3AgPT09ICdnZXRNYXhQb3NpdGlvbnNBbW91bnQnKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbnM6IEdldFBvc2l0aW9uc0Ftb3VudCA9IGZhY2FkZS5nZXRQb3NpdGlvbnNBbW91bnQoKTtcclxuICAgICAgICAgICAgdmlldy5tYXhJbnB1dCA/IHZpZXcuc2xpZGVyTW92ZW1lbnQuc2lkZU1lbnVJbnB1dHNWYWx1ZXNWYWxpZGF0aW9uQ2hlY2tlcignbWF4JywgK3ZpZXcubWF4SW5wdXQudmFsdWUsICtwb3NpdGlvbnNbJ3Bvc2l0aW9ucyddLCArcG9zaXRpb25zWydtaW5pbXVtJ10pIDogZmFsc2U7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGlmKHByb3AgPT09ICdnZXRQb3NzaWJsZVJhbmdlJykge1xyXG4gICAgICAgICAgICBsZXQgcG9zc2libGVSYW5nZTogR2V0UG9zc2libGVSYW5nZSA9IGZhY2FkZS5nZXRQb3NzaWJsZVJhbmdlKCk7XHJcbiAgICAgICAgICAgIHZpZXcubWluSW5wdXQgJiYgdmlldy5tYXhJbnB1dD8gdmlldy5pbnB1dHNQb3NzaWJsZVJhbmdlKHBvc3NpYmxlUmFuZ2UsIHZpZXcubWluSW5wdXQsIHZpZXcubWF4SW5wdXQgKTogZmFsc2U7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGlmKHByb3AgPT09ICdnZXRTdGFydEhhbmRlbHNQb3NpdGlvbicpIHtcclxuICAgICAgICAgICAgbGV0IHN0YXJ0UG9zaXRpb25zOiBnZXRTdGFydEhhbmRlbHNQb3NpdGlvbiA9IGZhY2FkZS5nZXRTdGFydEhhbmRlbHNQb3NpdGlvbigpO1xyXG4gICAgICAgICAgICB2aWV3LnNsaWRlck1vdmVtZW50LnN0YXJ0SGFuZGxlcnNQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMpO1xyXG4gICAgICAgICAgICB2aWV3LnJlZnJlc2hDdXJyZW50VmFsdWVzKHN0YXJ0UG9zaXRpb25zKTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgaWYocHJvcCA9PT0gJ2dldFN0ZXBQb3NpdGlvbnNBbW91bnQnKSB7XHJcbiAgICAgICAgICAgIGxldCBzdGVwQW1vdW50OiBHZXRQb3NpdGlvbnNBbW91bnQgPSBmYWNhZGUuZ2V0UG9zaXRpb25zQW1vdW50KCk7XHJcbiAgICAgICAgICAgIHZpZXcuc2xpZGVyTW92ZW1lbnQuc3RlcEFtb3VudCA9ICtzdGVwQW1vdW50Wydwb3NpdGlvbnMnXTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgaWYocHJvcCA9PT0gJ2dldFZhbHVlc0ZvclZhbHVlU2NhbGUnKSB7XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZVNjYWxlVmFsdWVzOiBHZXRWYWx1ZXNGb3JWYWx1ZVNjYWxlID0gZmFjYWRlLmdldFZhbHVlc0ZvclZhbHVlU2NhbGUoKTtcclxuICAgICAgICAgICAgdmlldy52YWx1ZVNjYWxlLnJlZnJlc2hWYWx1ZXModmFsdWVTY2FsZVZhbHVlcyk7XHJcbiAgICAgICAgICAgIHZpZXcudmFsdWVTY2FsZS5jZW50ZXJzVmFsdWVzUG9zaXRpb25zKHZpZXcuc2xpZGVyUmFuZ2UsIHZpZXcubWluSGFuZGVsKTtcclxuICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgaWYocHJvcCA9PT0gJ3NlbGVjdEhhbmRsZUZvclZhbHVlU2NhbGUnKSB7XHJcblxyXG4gICAgICAgICAgICBmdW5jdGlvbiBjaGVja0RvdWJsZWhhbmRlbHMoZG91YmxlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICAgICAgICAgICAgbGV0IHBvc2l0aW9uczogR2V0UG9zaXRpb25zQW1vdW50ID0gZmFjYWRlLmdldFBvc2l0aW9uc0Ftb3VudCgpO1xyXG4gICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgIGxldCBzZWxlY3RlZEhhbmRlbDogU2VsZWN0SGFuZGxlRm9yVmFsdWVTY2FsZSA9IGZhY2FkZS5zZWxlY3RIYW5kbGVGb3JWYWx1ZVNjYWxlKHZhbCwgZG91YmxlKTtcclxuXHJcbiAgICAgICAgICAgICAgdmlldy5zbGlkZXJNb3ZlbWVudC5jZW50ZXJlZEhhbmRlbEJ5VmFsdWVTY2FsZShzZWxlY3RlZEhhbmRlbFsndGFyZ2V0J10sIHNlbGVjdGVkSGFuZGVsWyd2YWx1ZSddLCBwb3NpdGlvbnNbJ3Bvc2l0aW9ucyddLCBwb3NpdGlvbnNbJ21pbmltdW0nXSk7XHJcbiAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgaWYgKHNlbGVjdGVkSGFuZGVsWyd0YXJnZXQnXSA9PT0gJ21pbicpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhZGFwdGVkT2JqZWN0Rm9yUmVmcmVzaDogRGF0YU9mVmFsdWVSZWZyZXNoID0ge1xyXG4gICAgICAgICAgICAgICAgICAnbWluJzogc2VsZWN0ZWRIYW5kZWxbJ3ZhbHVlJ11cclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB2aWV3LnJlZnJlc2hDdXJyZW50VmFsdWVzKGFkYXB0ZWRPYmplY3RGb3JSZWZyZXNoKTtcclxuICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgbGV0IGFkYXB0ZWRPYmplY3RGb3JSZWZyZXNoOiBEYXRhT2ZWYWx1ZVJlZnJlc2ggPSB7XHJcbiAgICAgICAgICAgICAgICAgICdtYXgnOiBzZWxlY3RlZEhhbmRlbFsndmFsdWUnXVxyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIHZpZXcucmVmcmVzaEN1cnJlbnRWYWx1ZXMoYWRhcHRlZE9iamVjdEZvclJlZnJlc2gpO1xyXG4gICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PT0gJ3N0cmluZycgJiYgdmlldy5oYW5kZWxUb2dnbGUpIHtcclxuICAgICAgICAgICAgICBjaGVja0RvdWJsZWhhbmRlbHModmlldy5oYW5kZWxUb2dnbGUuY2hlY2tlZCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgY2hlY2tEb3VibGVoYW5kZWxzKHZpZXcuc2V0dGluZ3MucmFuZ2UpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICBpZiAocHJvcCA9PT0gXCJnZXRNaW5TdGVwXCIgJiYgdmlldy5zdGVwSW5wdXQpIHtcclxuICAgICAgICAgICAgbGV0IHBvc2l0aW9uczogc3RyaW5nID0gZmFjYWRlLmdldFBvc2l0aW9uc0Ftb3VudCgpLnBvc2l0aW9ucztcclxuICAgICAgICAgICAgdmlldy5zbGlkZXJNb3ZlbWVudC5jaGVja1ZhbGlkaXR5T2ZDaGFuZ2VkU3RlcCgnbWluJywgdmlldy5zdGVwSW5wdXQsIHBvc2l0aW9ucyk7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIGlmIChwcm9wID09PSBcImNoZWNrc05ld1N0ZXBGb3JWYWxpZGl0eVwiICYmIHR5cGVvZiB2YWwgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGxldCBwb3NpdGlvbnM6IHN0cmluZyA9IGZhY2FkZS5nZXRQb3NpdGlvbnNBbW91bnQoKS5wb3NpdGlvbnM7XHJcbiAgICAgICAgICAgIHZpZXcuc3RlcElucHV0ID8gdmlldy5zbGlkZXJNb3ZlbWVudC5jaGVja1ZhbGlkaXR5T2ZDaGFuZ2VkU3RlcCh2YWwsIHZpZXcuc3RlcElucHV0LCBwb3NpdGlvbnMpIDogZmFsc2U7XHJcbiAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxufTsiLCJleHBvcnQgY2xhc3MgSGFuZGVsc0xhYmVscyB7XHJcbiAgbWluTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgbWF4TGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgbGV0IG1pbjpIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxldCBtYXg6SFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBtaW4uY2xhc3NMaXN0LmFkZCgnbWluU2xpZGVySGFuZGVsTGFiZWwnKTtcclxuICAgIG1heC5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJIYW5kZWxMYWJlbCcpO1xyXG4gICAgdGhpcy5taW5MYWJlbCA9IG1pbjtcclxuICAgIHRoaXMubWF4TGFiZWwgPSBtYXg7XHJcbiAgfTtcclxuICBcclxuICBnZXRFbGVtZW50cygpOiBvYmplY3Qge1xyXG4gICAgcmV0dXJuIHsnbWluJzogdGhpcy5taW5MYWJlbCwgJ21heCc6IHRoaXMubWF4TGFiZWx9O1xyXG4gIH07XHJcblxyXG4gIGRpc3BsYXlDb250cm9sbGVyKHRvZ2dsZTogSFRNTElucHV0RWxlbWVudCwgbWluOiBIVE1MTGFiZWxFbGVtZW50LCBtYXg6IEhUTUxMYWJlbEVsZW1lbnQpIHtcclxuICAgIGlmICh0b2dnbGUuY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBtaW4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gICAgICBtYXguc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWluLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIG1heC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2VudGVyaW5nUmVsYXRpdmVUb0hhbmRsZXMobWluSGFuZGVsV2lkdGg6IG51bWJlciwgbWF4SGFuZGVsV2lkdGg6IG51bWJlciwgbWluTGFiZWxXaWR0aDogbnVtYmVyLCBtYXhMYWJlbFdpZHRoOiBudW1iZXIsIG1pbkxhYmVsOiBIVE1MTGFiZWxFbGVtZW50LCBtYXhMYWJlbDogSFRNTExhYmVsRWxlbWVudCk6IHZvaWQge1xyXG4gICAgbWluTGFiZWwuc3R5bGUubGVmdCA9IChtaW5IYW5kZWxXaWR0aCAtIG1pbkxhYmVsV2lkdGgpIC8gMiArICdweCc7XHJcbiAgICBtYXhMYWJlbC5zdHlsZS5sZWZ0ID0gKG1heEhhbmRlbFdpZHRoIC0gbWF4TGFiZWxXaWR0aCkgLyAyICsgJ3B4JztcclxuICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgSGFuZGVscyB7XHJcblxyXG4gIHJlYWRvbmx5IG1pbkhhbmRlbDogSFRNTFNwYW5FbGVtZW50O1xyXG4gIHJlYWRvbmx5IG1heEhhbmRlbDogSFRNTFNwYW5FbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGxldCBtaW46IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGxldCBtYXg6IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIG1pbi5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJIYW5kZWwnKTtcclxuICAgIG1heC5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJIYW5kZWwnKTtcclxuICAgIHRoaXMubWluSGFuZGVsID0gbWluO1xyXG4gICAgdGhpcy5tYXhIYW5kZWwgPSBtYXg7XHJcbiAgfTtcclxuXHJcbiAgZ2V0RWxlbWVudHMoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7bWluOiB0aGlzLm1pbkhhbmRlbCwgbWF4OiB0aGlzLm1heEhhbmRlbH07XHJcbiAgfTtcclxuXHJcbiAgZGlzcGxheUNvbnRyb2xsZXIodG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50LCBtYXg6IEhUTUxTcGFuRWxlbWVudCkge1xyXG4gICAgaWYgKHRvZ2dsZS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgIG1heC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1heC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxufTsiLCJleHBvcnQgY2xhc3MgU2VsZWN0ZWRSYW5nZSB7XHJcblxyXG4gIHJlYWRvbmx5IGludGVydmFsOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsZXQgaW50ZXJ2YWw6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbnRlcnZhbC5jbGFzc0xpc3QuYWRkKCdtYWluSW50ZXJ2YWwnKTtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnRzKCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmludGVydmFsO1xyXG4gIH1cclxufSIsImV4cG9ydCBjbGFzcyBTaWRlTWVudSB7XHJcbiAgY3VzdG9tU2xpZGVyTWVudUNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgaGFuZGVsVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIGhhbmRlbExhYmVsVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHBsYW5lVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIG1pbklucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIG1heElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHN0ZXBJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICBtaW5TbGlkZXJWYWx1ZU91dHB1dDogSFRNTE91dHB1dEVsZW1lbnQ7XHJcbiAgbWF4U2xpZGVyVmFsdWVPdXRwdXQ6IEhUTUxPdXRwdXRFbGVtZW50O1xyXG4gIHZhbHVlU2NhbGVUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsZXQgc2xpZGVyVmFsdWVQOkhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgc2xpZGVyVmFsdWVQLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclBhcmFnVmFsJyk7XHJcbiAgICBzbGlkZXJWYWx1ZVAuaW5uZXJUZXh0ID0gJ9Ci0LXQutGD0YnQtdC1INC30LDQvdGH0LXQvdC40LU6ICc7XHJcbiAgICBcclxuICAgIGxldCBtaW5TbGlkZXJWYWx1ZU91dHB1dDogSFRNTE91dHB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvdXRwdXQnKTtcclxuICAgIG1pblNsaWRlclZhbHVlT3V0cHV0LmNsYXNzTGlzdC5hZGQoJ3NsaWRlclZhbHVlJyk7XHJcbiAgICBtaW5TbGlkZXJWYWx1ZU91dHB1dC5pZCA9ICdtaW5TbGlkZXJWYWx1ZSc7XHJcbiAgICBsZXQgbWF4U2xpZGVyVmFsdWVPdXRwdXQ6IEhUTUxPdXRwdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3V0cHV0Jyk7XHJcbiAgICBtYXhTbGlkZXJWYWx1ZU91dHB1dC5jbGFzc0xpc3QuYWRkKCdzbGlkZXJWYWx1ZScpO1xyXG4gICAgbWF4U2xpZGVyVmFsdWVPdXRwdXQuaWQgPSAnbWF4U2xpZGVyVmFsdWUnO1xyXG4gICAgXHJcbiAgICBsZXQgc2xpZGVyVG9nZ2xlUDpIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHNsaWRlclRvZ2dsZVAuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyUGFyYWcnKTtcclxuICAgIHNsaWRlclRvZ2dsZVAuaW5uZXJUZXh0ID0gJ9CS0LrQu9GO0YfQuNGC0Ywg0LLRgtC+0YDQvtC5INC/0L7Qu9C30YPQvdC+0Lo6ICc7XHJcbiAgICBcclxuICAgIGxldCBzbGlkZXJUb2dnbGVMYWJlbDpIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHNsaWRlclRvZ2dsZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclRvZ2dsZScpO1xyXG5cclxuICAgIGxldCBtYXhTbGlkZXJIYW5kZWxUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbWF4U2xpZGVySGFuZGVsVG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlckhhbmRlbFRvZ2dsZScpO1xyXG4gICAgbWF4U2xpZGVySGFuZGVsVG9nZ2xlLmlkID0gJ21heFNsaWRlckhhbmRlbFRvZ2dsZSc7XHJcbiAgICBtYXhTbGlkZXJIYW5kZWxUb2dnbGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcclxuXHJcbiAgICBsZXQgY3VzdG9tU2xpZGVyQm9yZGVyOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjdXN0b21TbGlkZXJCb3JkZXIuY2xhc3NMaXN0LmFkZCgnY3VzdG9tVG9nZ2xlU2xpZGVyQm9yZGVyJyk7XHJcblxyXG4gICAgbGV0IGN1c3RvbVNsaWRlcklucHV0czogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0cy5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJJbnB1dHMnKTtcclxuICAgIFxyXG4gICAgbGV0IGN1c3RvbVNsaWRlcklucHV0c1A6IEhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzUC5pbm5lclRleHQgPSAn0JjQt9C80LXQvdC40YLRjCDQt9C90LDRh9C10L3QuNC1OiAnO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzUC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJQYXJhZycpO1xyXG5cclxuICAgIGxldCBjdXN0b21TbGlkZXJJbnB1dHNNaW5MYWJlbDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNaW5MYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJJbnB1dGxhYmVsJyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNaW5MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjdXN0b21TbGlkZXJNaW5JbnB1dCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWwuaW5uZXJUZXh0ID0gJ01pbjogJztcclxuICAgIFxyXG4gICAgbGV0IGN1c3RvbVNsaWRlcklucHV0c01heExhYmVsOiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01heExhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlcklucHV0bGFiZWwnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01heExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2N1c3RvbVNsaWRlck1heElucHV0Jyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbC5pbm5lclRleHQgPSAnTWF4OiAnO1xyXG5cclxuICAgIGxldCBjdXN0b21TbGlkZXJJbnB1dHNNaW46IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlck1pbklucHV0Jyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNaW4uaWQgPSAnY3VzdG9tU2xpZGVyTWluSW5wdXQnO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluLnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcclxuXHJcbiAgICBsZXQgY3VzdG9tU2xpZGVySW5wdXRzTWF4OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01heC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJNYXhJbnB1dCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWF4LmlkID0gJ2N1c3RvbVNsaWRlck1heElucHV0JztcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01heC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XHJcbiAgICBcclxuICAgIGxldCB0b2dnbGVGb3JWYWx1ZXNDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclZhbHVlc1A6IEhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzUC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJQYXJhZycpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzUC5pbm5lclRleHQgPSAn0JLQutC70Y7Rh9C40YLRjCDQt9C90LDRh9C10L3QuNGPINC/0L7QtCDQv9C+0LvQt9GD0L3QutCw0LzQuDogJztcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yVmFsdWVzTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzTGFiZWwuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyVG9nZ2xlJyk7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclZhbHVlc0lucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzSW5wdXQuY2xhc3NMaXN0LmFkZCgnc2hvd1ZhbHVlVG9nZ2xlJyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNJbnB1dC5pZCA9ICdzaG93VmFsdWVUb2dnbGUnO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JWYWx1ZXNTcGFuOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNTcGFuLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVRvZ2dsZVNsaWRlckJvcmRlcicpO1xyXG4gICAgXHJcbiAgICBsZXQgc3RlcENvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIHN0ZXBDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyU3RlcENvbnRhaW5lcicpO1xyXG5cclxuICAgIGxldCBzdGVwSW5wdXRQOiBIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHN0ZXBJbnB1dFAuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyUGFyYWcnKTtcclxuICAgIHN0ZXBJbnB1dFAuaW5uZXJUZXh0ID0gJ9CY0LfQvNC10L3QuNGC0Ywg0YjQsNCzINC/0L7Qu9C30YPQvdC60LA6ICc7XHJcblxyXG4gICAgbGV0IGZvclN0ZXBJbnB1dExhYmVsOiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGZvclN0ZXBJbnB1dExhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlcklucHV0bGFiZWwnKTtcclxuICAgIGZvclN0ZXBJbnB1dExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2N1c3RvbVNsaWRlclN0ZXBJbnB1dCcpO1xyXG4gICAgZm9yU3RlcElucHV0TGFiZWwuaW5uZXJUZXh0ID0gJ1N0ZXA6ICc7XHJcblxyXG4gICAgbGV0IHN0ZXBJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBzdGVwSW5wdXQuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyU3RlcElucHV0Jyk7XHJcbiAgICBzdGVwSW5wdXQuaWQgPSAnY3VzdG9tU2xpZGVyU3RlcElucHV0JztcclxuICAgIHN0ZXBJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XHJcblxyXG4gICAgbGV0IHZhbHVlU2NhbGVDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclZhbHVlU2NhbGVQOiBIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlU2NhbGVQLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclBhcmFnJyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZVNjYWxlUC5pbm5lclRleHQgPSAn0JLQutC70Y7Rh9C40YLRjCDRiNC60LDQu9GDINC30L3QsNGH0LXQvdC40Lk6ICc7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclZhbHVlU2NhbGVMYWJlbDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZVNjYWxlTGFiZWwuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyVG9nZ2xlJyk7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclZhbHVlU2NhbGVJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZVNjYWxlSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZVNjYWxlSW5wdXQuY2xhc3NMaXN0LmFkZCgndmFsdWVTY2FsZVRvZ2dsZScpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVTY2FsZUlucHV0LmlkID0gJ3ZhbHVlU2NhbGVUb2dnbGUnO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JWYWx1ZVNjYWxlU3BhbjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVTY2FsZVNwYW4uY2xhc3NMaXN0LmFkZCgnY3VzdG9tVG9nZ2xlU2xpZGVyQm9yZGVyJyk7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclBsYW5lQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JQbGFuZVA6IEhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdG9nZ2xlRm9yUGxhbmVQLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclBhcmFnJyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZVAuaW5uZXJUZXh0ID0gJ9CY0LfQvNC10L3QuNGC0Ywg0L/Qu9C+0YHQutC+0YHRgtGMOiAnO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JQbGFuZUxhYmVsOiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lTGFiZWwuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyVG9nZ2xlJyk7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclBsYW5lSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdG9nZ2xlRm9yUGxhbmVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lSW5wdXQuY2xhc3NMaXN0LmFkZCgncGxhbmVUb2dnbGUnKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lSW5wdXQuaWQgPSAncGxhbmVUb2dnbGUnO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JQbGFuZVNwYW46IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lU3Bhbi5jbGFzc0xpc3QuYWRkKCdjdXN0b21Ub2dnbGVTbGlkZXJCb3JkZXInKTtcclxuXHJcbiAgICBsZXQgbWFpblNsaWRlckNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlck1lbnVDb250YWluZXInKTtcclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuYXBwZW5kKHNsaWRlclZhbHVlUCk7XHJcbiAgICBzbGlkZXJWYWx1ZVAuYXBwZW5kKG1pblNsaWRlclZhbHVlT3V0cHV0KTtcclxuICAgIHNsaWRlclZhbHVlUC5hcHBlbmQobWF4U2xpZGVyVmFsdWVPdXRwdXQpO1xyXG4gICAgbWFpblNsaWRlckNvbnRhaW5lci5hcHBlbmQoc2xpZGVyVG9nZ2xlUCk7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZChzbGlkZXJUb2dnbGVMYWJlbCk7XHJcbiAgICBcclxuICAgIHNsaWRlclRvZ2dsZUxhYmVsLmFwcGVuZChtYXhTbGlkZXJIYW5kZWxUb2dnbGUsIGN1c3RvbVNsaWRlckJvcmRlcik7XHJcblxyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzLmFwcGVuZChjdXN0b21TbGlkZXJJbnB1dHNQLCBjdXN0b21TbGlkZXJJbnB1dHNNaW5MYWJlbCwgY3VzdG9tU2xpZGVySW5wdXRzTWluLCBjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbCwgY3VzdG9tU2xpZGVySW5wdXRzTWF4KTtcclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuYXBwZW5kKGN1c3RvbVNsaWRlcklucHV0cyk7XHJcblxyXG4gICAgc3RlcENvbnRhaW5lci5hcHBlbmQoc3RlcElucHV0UCwgZm9yU3RlcElucHV0TGFiZWwsIHN0ZXBJbnB1dClcclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuYXBwZW5kKHN0ZXBDb250YWluZXIpO1xyXG5cclxuICAgIHRvZ2dsZUZvclZhbHVlc0NvbnRhaW5lci5hcHBlbmQodG9nZ2xlRm9yVmFsdWVzUCwgdG9nZ2xlRm9yVmFsdWVzTGFiZWwpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzTGFiZWwuYXBwZW5kKHRvZ2dsZUZvclZhbHVlc0lucHV0LCB0b2dnbGVGb3JWYWx1ZXNTcGFuKTtcclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuYXBwZW5kKHRvZ2dsZUZvclZhbHVlc0NvbnRhaW5lcik7XHJcbiAgICBcclxuICAgIHZhbHVlU2NhbGVDb250YWluZXIuYXBwZW5kKHRvZ2dsZUZvclZhbHVlU2NhbGVQLCB0b2dnbGVGb3JWYWx1ZVNjYWxlTGFiZWwpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVTY2FsZUxhYmVsLmFwcGVuZCh0b2dnbGVGb3JWYWx1ZVNjYWxlSW5wdXQsIHRvZ2dsZUZvclZhbHVlU2NhbGVTcGFuKTtcclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuYXBwZW5kKHZhbHVlU2NhbGVDb250YWluZXIpO1xyXG5cclxuICAgIHRvZ2dsZUZvclBsYW5lQ29udGFpbmVyLmFwcGVuZCh0b2dnbGVGb3JQbGFuZVAsIHRvZ2dsZUZvclBsYW5lTGFiZWwpO1xyXG4gICAgdG9nZ2xlRm9yUGxhbmVMYWJlbC5hcHBlbmQodG9nZ2xlRm9yUGxhbmVJbnB1dCwgdG9nZ2xlRm9yUGxhbmVTcGFuKTtcclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuYXBwZW5kKHRvZ2dsZUZvclBsYW5lQ29udGFpbmVyKTtcclxuXHJcbiAgICBzdGVwQ29udGFpbmVyLmFwcGVuZChzdGVwSW5wdXRQLCBmb3JTdGVwSW5wdXRMYWJlbCwgc3RlcElucHV0KVxyXG4gICAgbWFpblNsaWRlckNvbnRhaW5lci5hcHBlbmQoc3RlcENvbnRhaW5lcik7XHJcblxyXG5cclxuICAgIHRoaXMuY3VzdG9tU2xpZGVyTWVudUNvbnRhaW5lciA9IG1haW5TbGlkZXJDb250YWluZXI7XHJcbiAgICB0aGlzLmhhbmRlbFRvZ2dsZSA9IG1heFNsaWRlckhhbmRlbFRvZ2dsZTtcclxuICAgIHRoaXMuaGFuZGVsTGFiZWxUb2dnbGUgPSB0b2dnbGVGb3JWYWx1ZXNJbnB1dDtcclxuICAgIHRoaXMucGxhbmVUb2dnbGUgPSB0b2dnbGVGb3JQbGFuZUlucHV0O1xyXG4gICAgdGhpcy5taW5JbnB1dCA9IGN1c3RvbVNsaWRlcklucHV0c01pbjtcclxuICAgIHRoaXMubWF4SW5wdXQgPSBjdXN0b21TbGlkZXJJbnB1dHNNYXg7XHJcbiAgICB0aGlzLm1pblNsaWRlclZhbHVlT3V0cHV0ID0gbWluU2xpZGVyVmFsdWVPdXRwdXQ7XHJcbiAgICB0aGlzLm1heFNsaWRlclZhbHVlT3V0cHV0ID0gbWF4U2xpZGVyVmFsdWVPdXRwdXQ7XHJcbiAgICB0aGlzLnZhbHVlU2NhbGVUb2dnbGUgPSB0b2dnbGVGb3JWYWx1ZVNjYWxlSW5wdXQ7XHJcbiAgICB0aGlzLnN0ZXBJbnB1dCA9IHN0ZXBJbnB1dDtcclxuICB9O1xyXG59OyIsImltcG9ydCB7IGdldFN0YXJ0SGFuZGVsc1Bvc2l0aW9uIH0gZnJvbSAnLi4vLi4vbW9kZWwvbW9kZWwnO1xyXG5cclxuaW50ZXJmYWNlIEhhbmRlbHMge1xyXG4gIG1pbjogSFRNTFNwYW5FbGVtZW50O1xyXG4gIG1heDogSFRNTFNwYW5FbGVtZW50O1xyXG4gIG1pbkxhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIG1heExhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIHNsaWRlclJhbmdlOiBIVE1MRGl2RWxlbWVudDtcclxuICBoYW5kZWxzVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50IHwgYm9vbGVhbjtcclxuICBwbGFuZVRvZ2dsZTogSFRNTElucHV0RWxlbWVudCB8IGJvb2xlYW47XHJcbiAgaW50ZXJ2YWw6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHN0ZXA6IG51bWJlciB8IHN0cmluZyB8IGJvb2xlYW47XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgVGVzdE1vdXNlRXZlbnQge1xyXG4gIGNsaWVudFg6IG51bWJlcjtcclxuICBjbGllbnRZOiBudW1iZXI7XHJcbn1cclxuXHJcbmludGVyZmFjZSBDdXJyZW50SGFuZGVsc1Bvc2l0aW9ucyB7XHJcbiAgW2tleTogc3RyaW5nXToge1xyXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgU2xpZGVyTW92ZW1lbnQge1xyXG4gIG1pbjogSFRNTFNwYW5FbGVtZW50O1xyXG4gIG1heDogSFRNTFNwYW5FbGVtZW50O1xyXG4gIG1pbkxhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIG1heExhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIHNsaWRlclJhbmdlOiBIVE1MRGl2RWxlbWVudDtcclxuICBoYW5kZWxzVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50IHwgYm9vbGVhbjtcclxuICBwbGFuZVRvZ2dsZTogSFRNTElucHV0RWxlbWVudCB8IGJvb2xlYW47XHJcbiAgaW50ZXJ2YWw6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHN0ZXA6IG51bWJlciB8IHN0cmluZyB8IGJvb2xlYW47XHJcbiAgc3RlcEFtb3VudDogbnVtYmVyIHwgdW5kZWZpbmVkO1xyXG5cclxuICBjb25zdHJ1Y3RvciggaGFuZGVsczogSGFuZGVscykge1xyXG4gICAgdGhpcy5taW4gPSBoYW5kZWxzLm1pbjtcclxuICAgIHRoaXMubWF4ID0gaGFuZGVscy5tYXg7XHJcbiAgICB0aGlzLm1pbkxhYmVsID0gaGFuZGVscy5taW5MYWJlbDtcclxuICAgIHRoaXMubWF4TGFiZWw9IGhhbmRlbHMubWF4TGFiZWw7XHJcbiAgICB0aGlzLnNsaWRlclJhbmdlID0gaGFuZGVscy5zbGlkZXJSYW5nZTtcclxuICAgIHRoaXMuaGFuZGVsc1RvZ2dsZSA9IGhhbmRlbHMuaGFuZGVsc1RvZ2dsZTtcclxuICAgIHRoaXMucGxhbmVUb2dnbGUgPSBoYW5kZWxzLnBsYW5lVG9nZ2xlO1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IGhhbmRlbHMuaW50ZXJ2YWw7XHJcbiAgICB0aGlzLnN0ZXAgPSBoYW5kZWxzLnN0ZXA7XHJcbiAgfVxyXG5cclxuICBjdXJyZW50SGFuZGVsc1Bvc2l0aW9uczogQ3VycmVudEhhbmRlbHNQb3NpdGlvbnMgPSB7XHJcbiAgICAnbWluJzoge30sXHJcbiAgICAnbWF4Jzoge31cclxuICB9XHJcblxyXG4gIHN0YXJ0SGFuZGxlcnNQb3NpdGlvbnMocG9zaXRpb25WYWx1ZXM6IGdldFN0YXJ0SGFuZGVsc1Bvc2l0aW9uICk6IHZvaWQge1xyXG4gICAgbGV0IG1pbjogc3RyaW5nID0gKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpIC8gK3Bvc2l0aW9uVmFsdWVzLnBvc2l0aW9ucykgKiAoK3Bvc2l0aW9uVmFsdWVzWydtaW4nXSAtICtwb3NpdGlvblZhbHVlc1snbWluaW11bSddKSArICcnO1xyXG4gICAgbGV0IG1heDogc3RyaW5nID0gKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpIC8gK3Bvc2l0aW9uVmFsdWVzLnBvc2l0aW9ucykgKiAoK3Bvc2l0aW9uVmFsdWVzWydtYXgnXSAtICtwb3NpdGlvblZhbHVlc1snbWluaW11bSddKSArICcnO1xyXG4gICAgXHJcbiAgICB0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pbi5taW4gPSBtaW47XHJcbiAgICB0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1heC5tYXggPSBtYXg7XHJcbiAgICBcclxuICAgIHRoaXMubWluLnN0eWxlLmxlZnQgPSBtaW4gKyAncHgnO1xyXG4gICAgdGhpcy5tYXguc3R5bGUubGVmdCA9IG1heCArICdweCc7XHJcbiAgICBcclxuICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUubGVmdCA9ICttaW4gKyB0aGlzLm1pbi5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5yaWdodCA9ICh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gK21heCkgLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gIH1cclxuXHJcbiAgbWluSGFuZGVsTGlzdGVuZXIoIGV2ZW50OiBUZXN0TW91c2VFdmVudCwgdGVzdDogVGVzdE1vdXNlRXZlbnQgfCB1bmRlZmluZWQgKTogdm9pZCB7XHJcbiAgICBsZXQgbWluID0gdGhpcy5taW47XHJcbiAgICBsZXQgbWF4ID0gdGhpcy5tYXg7XHJcbiAgICBsZXQgbWluTGFiZWwgPSB0aGlzLm1pbkxhYmVsO1xyXG4gICAgbGV0IHNsaWRlclJhbmdlID0gdGhpcy5zbGlkZXJSYW5nZTtcclxuICAgIGxldCB0aGF0OiB0aGlzID0gdGhpcztcclxuICAgIGxldCBzaGlmdDogbnVtYmVyO1xyXG4gICAgbGV0IGludGVydmFsID0gdGhpcy5pbnRlcnZhbDtcclxuICAgIGxldCBzdGVwOiBudW1iZXI7XHJcbiAgICBsZXQgdmVydGljYWw6IGJvb2xlYW47XHJcbiAgICBsZXQgZG91YmxlSGFuZGVsczogYm9vbGVhbjtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja0N1cnJlbnRTbGlkZXJTZXR0aW5ncygpOnZvaWQge1xyXG4gICAgICB0eXBlb2YgdGhhdC5oYW5kZWxzVG9nZ2xlICE9PSAnYm9vbGVhbicgPyBkb3VibGVIYW5kZWxzID0gdGhhdC5oYW5kZWxzVG9nZ2xlLmNoZWNrZWQgOiBkb3VibGVIYW5kZWxzID0gdGhhdC5oYW5kZWxzVG9nZ2xlOztcclxuICAgICAgdHlwZW9mIHRoYXQucGxhbmVUb2dnbGUgIT09ICdib29sZWFuJyA/IHZlcnRpY2FsID0gdGhhdC5wbGFuZVRvZ2dsZS5jaGVja2VkIDogdGhhdC5wbGFuZVRvZ2dsZTtcclxuICAgICAgXHJcbiAgICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICAgIHNoaWZ0ID0gZXZlbnQuY2xpZW50WSAtIG1pbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBtaW4ub2Zmc2V0V2lkdGg7XHJcbiAgICAgIH0gZWxzZSB7ICBcclxuICAgICAgICBzaGlmdCA9IGV2ZW50LmNsaWVudFggLSBtaW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGNoZWNrQ3VycmVudFNsaWRlclNldHRpbmdzKCk7XHJcbiAgICBcclxuICAgIGlmICh0aGlzLnN0ZXBBbW91bnQgICYmIHRoaXMuc3RlcCAhPT0gZmFsc2UpIHtcclxuICAgICAgc3RlcCA9IChzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG1pbi5vZmZzZXRXaWR0aCkgLyB0aGlzLnN0ZXBBbW91bnQgKiArdGhpcy5zdGVwO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuICAgIFxyXG4gICAgaWYoIHRlc3QgKSB7XHJcbiAgICAgIG9uTW91c2VNb3ZlKCB0ZXN0IClcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50OiBUZXN0TW91c2VFdmVudCApIHtcclxuICAgICAgbGV0IG5ld0xlZnQ6IG51bWJlcjtcclxuXHJcbiAgICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICAgIG5ld0xlZnQgPSBzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIChldmVudC5jbGllbnRZIC0gc2hpZnQgLSBzbGlkZXJSYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld0xlZnQgPSBldmVudC5jbGllbnRYIC0gc2hpZnQgLSBzbGlkZXJSYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgbGV0IHJpZ2h0RWRnZSA9IHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gbWluLm9mZnNldFdpZHRoO1xyXG4gICAgICBcclxuICAgICAgaWYgKHRoYXQuc3RlcCAhPT0gZmFsc2UpIHtcclxuICAgICAgICBpZiAobmV3TGVmdCA+PSArdGhhdC5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5taW4ubWluICsgc3RlcCB8fCBuZXdMZWZ0IDw9ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pbi5taW4gLSBzdGVwKSB7XHJcbiAgICAgICAgICBuZXdMZWZ0ID49ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pbi5taW4gKyBzdGVwID8gbmV3TGVmdCA9ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pbi5taW4gKyBzdGVwIDogZmFsc2U7XHJcbiAgICAgICAgICBuZXdMZWZ0IDw9ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pbi5taW4gLSBzdGVwID8gbmV3TGVmdCA9ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pbi5taW4gLSBzdGVwIDogZmFsc2U7XHJcbiAgICAgICAgICByZW5ld2FsT2ZQb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZW5ld2FsT2ZQb3NpdGlvbigpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgZnVuY3Rpb24gcmVuZXdhbE9mUG9zaXRpb24oKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmIChuZXdMZWZ0IDwgMCkge1xyXG4gICAgICAgICAgbmV3TGVmdCA9IDA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZG91YmxlSGFuZGVscykgeyBcclxuICAgICAgICAgIGlmIChuZXdMZWZ0ID49ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1heFsnbWF4J10gLSBtYXgub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICAgICAgbmV3TGVmdCA9ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1heFsnbWF4J10gLSBtYXgub2Zmc2V0V2lkdGhcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChuZXdMZWZ0ID4gcmlnaHRFZGdlKSB7XHJcbiAgICAgICAgICAgIG5ld0xlZnQgPSByaWdodEVkZ2U7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1pbi5zdHlsZS5sZWZ0ID0gbmV3TGVmdCArICdweCc7XHJcbiAgICAgICAgaW50ZXJ2YWwuc3R5bGUubGVmdCA9IG5ld0xlZnQgKyBtaW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgICAgICBcclxuICAgICAgICBpZiAobmV3TGVmdCAhPT0gdW5kZWZpbmVkIHx8IHJpZ2h0RWRnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtaW4nXSA9IHsnbWluJzogYCR7bmV3TGVmdH1gLCAnc2xpZGVyV2lkdGgnOiBgJHtzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG1pbi5vZmZzZXRXaWR0aH1gfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWluTGFiZWwuc3R5bGUubGVmdCA9ICgobWluLm9mZnNldFdpZHRoIC0gbWluTGFiZWwub2Zmc2V0V2lkdGgpIC0gMSkgLyAyICsgJ3B4JztcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZVVwKCkge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbWF4SGFuZGVsTGlzdGVuZXIoIGV2ZW50OiBUZXN0TW91c2VFdmVudCwgdGVzdDogVGVzdE1vdXNlRXZlbnQgfCB1bmRlZmluZWQpOiB2b2lkIHtcclxuICAgIGxldCBtYXggPSB0aGlzLm1heDtcclxuICAgIGxldCBtaW4gPSB0aGlzLm1pbjtcclxuICAgIGxldCBzbGlkZXJSYW5nZSA9IHRoaXMuc2xpZGVyUmFuZ2U7XHJcbiAgICBsZXQgc2hpZnQ6IG51bWJlcjtcclxuICAgIGxldCBtYXhMYWJlbCA9IHRoaXMubWF4TGFiZWw7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmludGVydmFsO1xyXG4gICAgbGV0IHN0ZXA6IG51bWJlcjtcclxuICAgIGxldCBkb3VibGVIYW5kZWxzOiBib29sZWFuO1xyXG4gICAgbGV0IHZlcnRpY2FsOiBib29sZWFuO1xyXG5cclxuICAgIGlmICh0aGlzLnN0ZXBBbW91bnQgJiYgdGhpcy5zdGVwICE9PSBmYWxzZSkge1xyXG4gICAgICBzdGVwID0gKHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gbWluLm9mZnNldFdpZHRoKSAvIHRoaXMuc3RlcEFtb3VudCAqICt0aGlzLnN0ZXA7XHJcbiAgICB9XHJcblxyXG4gICAgZnVuY3Rpb24gY2hlY2tDdXJyZW50U2xpZGVyU2V0dGluZ3MoKTp2b2lkIHtcclxuICAgICAgdHlwZW9mIHRoYXQuaGFuZGVsc1RvZ2dsZSAhPT0gJ2Jvb2xlYW4nID8gZG91YmxlSGFuZGVscyA9IHRoYXQuaGFuZGVsc1RvZ2dsZS5jaGVja2VkIDogZG91YmxlSGFuZGVscyA9IHRoYXQuaGFuZGVsc1RvZ2dsZTs7XHJcbiAgICAgIHR5cGVvZiB0aGF0LnBsYW5lVG9nZ2xlICE9PSAnYm9vbGVhbicgPyB2ZXJ0aWNhbCA9IHRoYXQucGxhbmVUb2dnbGUuY2hlY2tlZCA6IHRoYXQucGxhbmVUb2dnbGU7XHJcblxyXG4gICAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgICBzaGlmdCA9IGV2ZW50LmNsaWVudFkgLSBtYXguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gbWF4Lm9mZnNldFdpZHRoO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNoaWZ0ID0gZXZlbnQuY2xpZW50WCAtIG1heC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBjaGVja0N1cnJlbnRTbGlkZXJTZXR0aW5ncygpO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cclxuICAgIGlmKCB0ZXN0ICE9PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgIG9uTW91c2VNb3ZlKCB0ZXN0IClcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50OiBUZXN0TW91c2VFdmVudCApIHtcclxuICAgICAgbGV0IG5ld0xlZnQ6IG51bWJlcjtcclxuICAgICAgXHJcbiAgICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICAgIG5ld0xlZnQgPSBzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIChldmVudC5jbGllbnRZIC0gc2hpZnQgLSBzbGlkZXJSYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld0xlZnQgPSBldmVudC5jbGllbnRYIC0gc2hpZnQgLSBzbGlkZXJSYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICBsZXQgcmlnaHRFZGdlID0gc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSBtYXgub2Zmc2V0V2lkdGg7XHJcblxyXG4gICAgICBpZiAodGhhdC5zdGVwICE9PSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChuZXdMZWZ0ID49ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1heC5tYXggKyBzdGVwIHx8IG5ld0xlZnQgPD0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWF4Lm1heCAtIHN0ZXApIHtcclxuICAgICAgICAgIG5ld0xlZnQgPj0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWF4Lm1heCArIHN0ZXAgPyBuZXdMZWZ0ID0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWF4Lm1heCArIHN0ZXAgOiBmYWxzZTtcclxuICAgICAgICAgIG5ld0xlZnQgPD0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWF4Lm1heCAtIHN0ZXAgPyBuZXdMZWZ0ID0gK3RoYXQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWF4Lm1heCAtIHN0ZXAgOiBmYWxzZTtcclxuICAgICAgICAgIHJlbmV3YWxPZlBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlbmV3YWxPZlBvc2l0aW9uKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBmdW5jdGlvbiByZW5ld2FsT2ZQb3NpdGlvbigpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKG5ld0xlZnQgPCAwKSB7XHJcbiAgICAgICAgICBuZXdMZWZ0ID0gMDtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBpZiAobmV3TGVmdCA+IHJpZ2h0RWRnZSkge1xyXG4gICAgICAgICAgbmV3TGVmdCA9IHJpZ2h0RWRnZTtcclxuICAgICAgICB9O1xyXG4gIFxyXG4gICAgICAgIGlmIChuZXdMZWZ0IDw9ICt0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pblsnbWluJ10gKyBtaW4ub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICAgIG5ld0xlZnQgPSArdGhhdC5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5taW5bJ21pbiddICsgbWluLm9mZnNldFdpZHRoXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBtYXguc3R5bGUubGVmdCA9IG5ld0xlZnQgKyAncHgnO1xyXG4gICAgICAgIGludGVydmFsLnN0eWxlLnJpZ2h0ID0gKHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gbmV3TGVmdCkgLSBtYXgub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICBcclxuICAgICAgICBpZiAobmV3TGVmdCAhPT0gdW5kZWZpbmVkIHx8IHJpZ2h0RWRnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGF0LmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtYXgnXSA9IHsnbWF4JzogYCR7bmV3TGVmdH1gLCAnc2xpZGVyV2lkdGgnOiBgJHtzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG1heC5vZmZzZXRXaWR0aH1gfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWF4TGFiZWwuc3R5bGUubGVmdCA9ICgobWF4Lm9mZnNldFdpZHRoIC0gbWF4TGFiZWwub2Zmc2V0V2lkdGgpIC0gMSkgLyAyICsgJ3B4JztcclxuICAgICAgfTtcclxuICAgICAgXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlVXAoKSB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQbGFuZSggdG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50IHwgYm9vbGVhbiwgYm9keTogSFRNTERpdkVsZW1lbnQsIG1pblZhbHVlOiBIVE1MUGFyYWdyYXBoRWxlbWVudCwgbWF4VmFsdWU6IEhUTUxQYXJhZ3JhcGhFbGVtZW50KTogdm9pZCB7XHJcbiAgICBsZXQgdG9nZ2xlUmVzdWx0OiBib29sZWFuO1xyXG4gICAgdHlwZW9mIHRvZ2dsZSA9PT0gJ2Jvb2xlYW4nID8gIHRvZ2dsZVJlc3VsdCA9IHRvZ2dsZSA6IHRvZ2dsZVJlc3VsdCA9IHRvZ2dsZS5jaGVja2VkO1xyXG4gICAgaWYgKHRvZ2dsZVJlc3VsdCkge1xyXG4gICAgICBib2R5LnN0eWxlLmhlaWdodCA9IGJvZHkub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgICB0aGlzLnNsaWRlclJhbmdlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLTkwZGVnKSc7XHJcbiAgICAgIHRoaXMuc2xpZGVyUmFuZ2Uuc3R5bGUudG9wID0gYm9keS5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gICAgICB0aGlzLm1pbkxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ21pblNsaWRlckhhbmRlbExhYmVsJyk7XHJcbiAgICAgIHRoaXMubWF4TGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnbWF4U2xpZGVySGFuZGVsTGFiZWwnKTtcclxuICAgICAgdGhpcy5taW5MYWJlbC5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJIYW5kZWxMYWJlbFZlcnRpY2FsJyk7XHJcbiAgICAgIHRoaXMubWF4TGFiZWwuY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVySGFuZGVsTGFiZWxWZXJ0aWNhbCcpO1xyXG4gICAgICBtaW5WYWx1ZS5jbGFzc0xpc3QucmVtb3ZlKCdtaW5TbGlkZXJQb2ludCcpO1xyXG4gICAgICBtYXhWYWx1ZS5jbGFzc0xpc3QucmVtb3ZlKCdtYXhTbGlkZXJQb2ludCcpO1xyXG4gICAgICBtaW5WYWx1ZS5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJQb2ludFZlcnRpY2FsJyk7XHJcbiAgICAgIG1heFZhbHVlLmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlclBvaW50VmVydGljYWwnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJvZHkuc3R5bGUuaGVpZ2h0ID0gJyc7XHJcbiAgICAgIHRoaXMuc2xpZGVyUmFuZ2Uuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XHJcbiAgICAgIHRoaXMuc2xpZGVyUmFuZ2Uuc3R5bGUudG9wID0gJyc7XHJcbiAgICAgIHRoaXMubWluTGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnbWluU2xpZGVySGFuZGVsTGFiZWxWZXJ0aWNhbCcpO1xyXG4gICAgICB0aGlzLm1heExhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ21heFNsaWRlckhhbmRlbExhYmVsVmVydGljYWwnKTtcclxuICAgICAgdGhpcy5taW5MYWJlbC5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJIYW5kZWxMYWJlbCcpO1xyXG4gICAgICB0aGlzLm1heExhYmVsLmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlckhhbmRlbExhYmVsJyk7XHJcbiAgICAgIG1pblZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ21pblNsaWRlclBvaW50VmVydGljYWwnKTtcclxuICAgICAgbWF4VmFsdWUuY2xhc3NMaXN0LnJlbW92ZSgnbWF4U2xpZGVyUG9pbnRWZXJ0aWNhbCcpO1xyXG4gICAgICBtaW5WYWx1ZS5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJQb2ludCcpO1xyXG4gICAgICBtYXhWYWx1ZS5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJQb2ludCcpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBzZWxlY3Rpb25PZlByZXBhcmVkVmFsdWUodGFyZ2V0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGxldCB0b2dnbGVSZXN1bHQ6IGJvb2xlYW47XHJcbiAgICB0eXBlb2YgdGhpcy5oYW5kZWxzVG9nZ2xlID09PSAnYm9vbGVhbicgPyAgdG9nZ2xlUmVzdWx0ID0gdGhpcy5oYW5kZWxzVG9nZ2xlIDogdG9nZ2xlUmVzdWx0ID0gdGhpcy5oYW5kZWxzVG9nZ2xlLmNoZWNrZWQ7XHJcbiAgICBpZiAodGFyZ2V0ID09PSAnbWluJykge1xyXG4gICAgICB0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtaW4nXSA9IHsnbWluJzogJzAnLCAnc2xpZGVyV2lkdGgnOmAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gfVxyXG4gICAgICB0aGlzLm1pbi5zdHlsZS5sZWZ0ID0gJzBweCdcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5sZWZ0ID0gMCArIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodG9nZ2xlUmVzdWx0KSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SGFuZGVsc1Bvc2l0aW9uc1snbWF4J10gPSB7J21heCc6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gLCAnc2xpZGVyV2lkdGgnOmAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gfTtcclxuICAgICAgICB0aGlzLm1heC5zdHlsZS5sZWZ0ID0gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgICB0aGlzLmludGVydmFsLnN0eWxlLnJpZ2h0ID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoKSArIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5jdXJyZW50SGFuZGVsc1Bvc2l0aW9uc1snbWluJ10gPSB7J21pbic6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gLCAnc2xpZGVyV2lkdGgnOmAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gfTtcclxuICAgICAgICB0aGlzLm1pbi5zdHlsZS5sZWZ0ID0gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgICB0aGlzLmludGVydmFsLnN0eWxlLmxlZnQgPSAodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSArIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArJ3B4JztcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgc2lkZU1lbnVJbnB1dHNWYWx1ZXNWYWxpZGF0aW9uQ2hlY2tlcih0YXJnZXQ6IHN0cmluZywgdmFsdWU6IG51bWJlciwgcG9zaXRpb25zOiBudW1iZXIsIG1pbmltdW06IG51bWJlcik6IHZvaWQge1xyXG4gICAgbGV0IHRvZ2dsZVJlc3VsdDogYm9vbGVhbjtcclxuICAgIHR5cGVvZiB0aGlzLmhhbmRlbHNUb2dnbGUgPT09ICdib29sZWFuJyA/ICB0b2dnbGVSZXN1bHQgPSB0aGlzLmhhbmRlbHNUb2dnbGUgOiB0b2dnbGVSZXN1bHQgPSB0aGlzLmhhbmRlbHNUb2dnbGUuY2hlY2tlZDtcclxuICAgIGlmICh0YXJnZXQgPT09ICdtaW4nICYmIHRvZ2dsZVJlc3VsdCkge1xyXG4gICAgICBsZXQgbWluOiBzdHJpbmcgPSAoKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkgLyBwb3NpdGlvbnMpICogKHZhbHVlIC0gbWluaW11bSkgKyAnJztcclxuXHJcbiAgICAgIGlmICgrbWluID49ICt0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1heC5tYXggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgIG1pbiA9ICt0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1heC5tYXggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCArICcnO1xyXG4gICAgICB9IGVsc2UgaWYoK21pbiA8IDApIHtcclxuICAgICAgICBtaW4gPSAnMCc7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtaW4nXSA9IHsnbWluJzogbWluLCAnc2xpZGVyV2lkdGgnOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGh9YH07XHJcbiAgICAgIHRoaXMubWluLnN0eWxlLmxlZnQgPSBtaW4gKyAncHgnO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLmxlZnQgPSArbWluICsgdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSAnbWluJykge1xyXG4gICAgICBsZXQgbWluOiBzdHJpbmcgPSAoKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkgLyBwb3NpdGlvbnMpICogKHZhbHVlIC0gbWluaW11bSkgKyAnJztcclxuXHJcbiAgICAgIGlmKCttaW4gPCAwKSB7XHJcbiAgICAgICAgbWluID0gJzAnO1xyXG4gICAgICB9IGVsc2UgaWYgKCttaW4gPiB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICBtaW4gPSAodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSArICcnO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5jdXJyZW50SGFuZGVsc1Bvc2l0aW9uc1snbWluJ10gPSB7J21pbic6IG1pbiwgJ3NsaWRlcldpZHRoJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWB9O1xyXG4gICAgICB0aGlzLm1pbi5zdHlsZS5sZWZ0ID0gbWluICsgJ3B4JztcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5sZWZ0ID0gK21pbiArIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gJ21heCcpIHtcclxuICAgICAgbGV0IG1heDogc3RyaW5nID0gKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXgub2Zmc2V0V2lkdGgpIC8gcG9zaXRpb25zKSAqICh2YWx1ZSAtIG1pbmltdW0pICsgJyc7XHJcblxyXG4gICAgICBpZiAoK21heCA8PSArdGhpcy5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5taW4ubWluICsgdGhpcy5taW4ub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICBtYXggPSArdGhpcy5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5taW4ubWluICsgdGhpcy5tYXgub2Zmc2V0V2lkdGggKyAnJztcclxuICAgICAgfSBlbHNlIGlmKCttYXggPiB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpe1xyXG4gICAgICAgIG1heCA9ICh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpICsgJyc7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zWydtYXgnXSA9IHsnbWF4JzogbWF4LCAnc2xpZGVyV2lkdGgnOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXgub2Zmc2V0V2lkdGh9YH07XHJcbiAgICAgIHRoaXMubWF4LnN0eWxlLmxlZnQgPSBtYXggKyAncHgnO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLnJpZ2h0ID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSArbWF4KSAtIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY2VudGVyZWRIYW5kZWxCeVZhbHVlU2NhbGUodGFyZ2V0OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIHBvc2l0aW9uczogc3RyaW5nLCBtaW5pbXVtOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKHRhcmdldCwgdmFsdWUpXHJcbiAgICBpZiAodGFyZ2V0ID09PSAnbWluJykge1xyXG4gICAgICBsZXQgbWluOiBzdHJpbmcgPSBTdHJpbmcoKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpIC8gK3Bvc2l0aW9ucykgKiAoK3ZhbHVlIC0gK21pbmltdW0pKTtcclxuXHJcbiAgICAgIGlmKCttaW4gPCAwKSB7XHJcbiAgICAgICAgbWluID0gJzAnO1xyXG4gICAgICB9IGVsc2UgaWYgKCttaW4gPiB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICBtaW4gPSBTdHJpbmcoKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5taW4uc3R5bGUubGVmdCA9IG1pbiArICdweCc7XHJcbiAgICAgIHRoaXMuY3VycmVudEhhbmRlbHNQb3NpdGlvbnNbJ21pbiddID0geydtaW4nOiBgJHttaW59YCwgJ3NsaWRlcldpZHRoJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWB9O1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLmxlZnQgPSArbWluICsgdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgIH0gZWxzZSBpZiAodGFyZ2V0ID09PSAnbWF4Jykge1xyXG4gICAgICBsZXQgbWF4OiBzdHJpbmcgPSBTdHJpbmcoKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXgub2Zmc2V0V2lkdGgpIC8gK3Bvc2l0aW9ucykgKiAoK3ZhbHVlIC0gK21pbmltdW0pKTtcclxuXHJcbiAgICAgIGlmICgrbWF4IDw9ICt0aGlzLmN1cnJlbnRIYW5kZWxzUG9zaXRpb25zLm1pbi5taW4gKyB0aGlzLm1pbi5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgIG1heCA9IFN0cmluZygrdGhpcy5jdXJyZW50SGFuZGVsc1Bvc2l0aW9ucy5taW4ubWluICsgdGhpcy5tYXgub2Zmc2V0V2lkdGgpO1xyXG4gICAgICB9IGVsc2UgaWYoK21heCA+IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCl7XHJcbiAgICAgICAgbWF4ID0gU3RyaW5nKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpKTtcclxuICAgICAgfTtcclxuICAgICAgdGhpcy5jdXJyZW50SGFuZGVsc1Bvc2l0aW9uc1snbWF4J10gPSB7J21heCc6IGAke21heH1gLCAnc2xpZGVyV2lkdGgnOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXgub2Zmc2V0V2lkdGh9YH1cclxuICAgICAgdGhpcy5tYXguc3R5bGUubGVmdCA9IG1heCArICdweCc7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUucmlnaHQgPSAodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtICttYXgpIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY2hlY2tWYWxpZGl0eU9mQ2hhbmdlZFN0ZXAodmFsdWU6IHN0cmluZywgaW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQsIHBvc2l0aW9uczogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBsZXQgcGl4ZWxzUGVyVW5pdDogbnVtYmVyID0gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAvICtwb3NpdGlvbnNcclxuICAgIGxldCBtaW5TdGVwOiBudW1iZXIgPSBNYXRoLnJvdW5kKDEgLyBwaXhlbHNQZXJVbml0KTtcclxuICAgIGlmIChtaW5TdGVwIDwgMSkge1xyXG4gICAgICBtaW5TdGVwID0gMTtcclxuICAgIH07XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21pbicsIFN0cmluZyhtaW5TdGVwKSk7XHJcbiAgICBpbnB1dC5zZXRBdHRyaWJ1dGUoJ21heCcsIFN0cmluZygrcG9zaXRpb25zIC8gMikpO1xyXG4gICAgaWYgKHZhbHVlID09PSAnbWluJykge1xyXG4gICAgICBpbnB1dC52YWx1ZSA9IFN0cmluZyhtaW5TdGVwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICgrdmFsdWUgPD0gbWluU3RlcCkge1xyXG4gICAgICAgIGlucHV0LnZhbHVlID0gU3RyaW5nKG1pblN0ZXApO1xyXG4gICAgICAgIHRoaXMuc3RlcCA9IGZhbHNlO1xyXG4gICAgICB9IGVsc2UgaWYgKCt2YWx1ZSA+ICtwb3NpdGlvbnMgLyAyKSB7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSBTdHJpbmcoK3Bvc2l0aW9ucyAvIDIpO1xyXG4gICAgICAgIHRoaXMuc3RlcCA9IFN0cmluZygrcG9zaXRpb25zIC8gMik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaW5wdXQudmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnN0ZXAgPSB2YWx1ZTtcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgfTtcclxufTsiLCJleHBvcnQgY2xhc3MgU2xpZGVyUmFuZ2Uge1xyXG5cclxuICByYW5nZTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgbGV0IGVsZW06IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ3NsaWRlclJhbmdlJyk7XHJcbiAgICB0aGlzLnJhbmdlID0gZWxlbTtcclxuICB9O1xyXG5cclxuICBnZXRFbGVtZW50cygpOiBIVE1MRGl2RWxlbWVudHtcclxuICAgIHJldHVybiB0aGlzLnJhbmdlO1xyXG4gIH07XHJcblxyXG59OyIsImltcG9ydCB7R2V0VmFsdWVzRm9yVmFsdWVTY2FsZX0gZnJvbSAnLi4vLi4vbW9kZWwvZmFjYWRlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBWYWx1ZVNjYWxlIHtcclxuICByZWFkb25seSB2YWx1ZVNjYWxlMTU6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgcmVhZG9ubHkgdmFsdWVTY2FsZTMwOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIHJlYWRvbmx5IHZhbHVlU2NhbGU1MDogSFRNTExhYmVsRWxlbWVudDtcclxuICByZWFkb25seSB2YWx1ZVNjYWxlNzA6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgcmVhZG9ubHkgdmFsdWVTY2FsZTg1OiBIVE1MTGFiZWxFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGxldCB2YWx1ZTE1OiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxldCB2YWx1ZTMwOiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxldCB2YWx1ZTUwOiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxldCB2YWx1ZTcwOiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxldCB2YWx1ZTg1OiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHZhbHVlMTUuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyX192YWx1ZVNjYWxlbGFiZWwnLCAnY3VzdG9tU2xpZGVyX192YWx1ZVNjYWxlbGFiZWxfMTUnKTtcclxuICAgIHZhbHVlMzAuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyX192YWx1ZVNjYWxlbGFiZWwnLCAnY3VzdG9tU2xpZGVyX192YWx1ZVNjYWxlbGFiZWxfMzAnKTtcclxuICAgIHZhbHVlNTAuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyX192YWx1ZVNjYWxlbGFiZWwnLCAnY3VzdG9tU2xpZGVyX192YWx1ZVNjYWxlbGFiZWxfNTAnKTtcclxuICAgIHZhbHVlNzAuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyX192YWx1ZVNjYWxlbGFiZWwnLCAnY3VzdG9tU2xpZGVyX192YWx1ZVNjYWxlbGFiZWxfNzAnKTtcclxuICAgIHZhbHVlODUuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyX192YWx1ZVNjYWxlbGFiZWwnLCAnY3VzdG9tU2xpZGVyX192YWx1ZVNjYWxlbGFiZWxfODUnKTtcclxuICAgIHRoaXMudmFsdWVTY2FsZTE1ID0gdmFsdWUxNTtcclxuICAgIHRoaXMudmFsdWVTY2FsZTMwID0gdmFsdWUzMDtcclxuICAgIHRoaXMudmFsdWVTY2FsZTUwID0gdmFsdWU1MDtcclxuICAgIHRoaXMudmFsdWVTY2FsZTcwID0gdmFsdWU3MDtcclxuICAgIHRoaXMudmFsdWVTY2FsZTg1ID0gdmFsdWU4NTtcclxuICB9O1xyXG5cclxuICByZWZyZXNoVmFsdWVzKHZhbHVlczogR2V0VmFsdWVzRm9yVmFsdWVTY2FsZSk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZVNjYWxlMTUuaW5uZXJUZXh0ID0gdmFsdWVzWycxNSddO1xyXG4gICAgdGhpcy52YWx1ZVNjYWxlMzAuaW5uZXJUZXh0ID0gdmFsdWVzWyczMCddO1xyXG4gICAgdGhpcy52YWx1ZVNjYWxlNTAuaW5uZXJUZXh0ID0gdmFsdWVzWyc1MCddO1xyXG4gICAgdGhpcy52YWx1ZVNjYWxlNzAuaW5uZXJUZXh0ID0gdmFsdWVzWyc3MCddO1xyXG4gICAgdGhpcy52YWx1ZVNjYWxlODUuaW5uZXJUZXh0ID0gdmFsdWVzWyc4NSddO1xyXG4gIH07XHJcblxyXG4gIGNlbnRlcnNWYWx1ZXNQb3NpdGlvbnMoc2xpZGVyOiBIVE1MRGl2RWxlbWVudCwgaGFuZGVsOkhUTUxTcGFuRWxlbWVudCk6IHZvaWQge1xyXG4gICAgdGhpcy52YWx1ZVNjYWxlMTUuc3R5bGUucmlnaHQgPSAoKHNsaWRlci5vZmZzZXRXaWR0aCAtIGhhbmRlbC5vZmZzZXRXaWR0aCkgKiAwLjg1KSAtICh0aGlzLnZhbHVlU2NhbGUxNS5vZmZzZXRXaWR0aCAvIDIpICsgKGhhbmRlbC5vZmZzZXRXaWR0aCAvIDIpICsgJ3B4JztcclxuICAgIHRoaXMudmFsdWVTY2FsZTg1LnN0eWxlLmxlZnQgPSAoKHNsaWRlci5vZmZzZXRXaWR0aCAtIGhhbmRlbC5vZmZzZXRXaWR0aCkgKiAwLjg1KSAtICh0aGlzLnZhbHVlU2NhbGU4NS5vZmZzZXRXaWR0aCAvIDIpICsgKGhhbmRlbC5vZmZzZXRXaWR0aCAvIDIpICsgJ3B4JztcclxuICAgIHRoaXMudmFsdWVTY2FsZTMwLnN0eWxlLnJpZ2h0ID0gKChzbGlkZXIub2Zmc2V0V2lkdGggLSBoYW5kZWwub2Zmc2V0V2lkdGgpICogMC43MCkgLSAodGhpcy52YWx1ZVNjYWxlMzAub2Zmc2V0V2lkdGggLyAyKSArIChoYW5kZWwub2Zmc2V0V2lkdGggLyAyKSArICdweCc7XHJcbiAgICB0aGlzLnZhbHVlU2NhbGU3MC5zdHlsZS5sZWZ0ID0gKChzbGlkZXIub2Zmc2V0V2lkdGggLSBoYW5kZWwub2Zmc2V0V2lkdGgpICogMC43MCkgLSAodGhpcy52YWx1ZVNjYWxlNzAub2Zmc2V0V2lkdGggLyAyKSArIChoYW5kZWwub2Zmc2V0V2lkdGggLyAyKSArICdweCc7XHJcbiAgICB0aGlzLnZhbHVlU2NhbGU1MC5zdHlsZS5sZWZ0ID0gKChzbGlkZXIub2Zmc2V0V2lkdGggLSBoYW5kZWwub2Zmc2V0V2lkdGgpICogMC41MCkgLSAodGhpcy52YWx1ZVNjYWxlNTAub2Zmc2V0V2lkdGggLyAyKSArIChoYW5kZWwub2Zmc2V0V2lkdGggLyAyKSArICdweCc7XHJcbiAgfTtcclxuXHJcbiAgZGlzcGxheUNvbnRyb2xsZXIodG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XHJcbiAgICBpZiAodG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlMTUuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gICAgICB0aGlzLnZhbHVlU2NhbGUzMC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICAgIHRoaXMudmFsdWVTY2FsZTUwLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlNzAuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gICAgICB0aGlzLnZhbHVlU2NhbGU4NS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlU2NhbGUxNS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB0aGlzLnZhbHVlU2NhbGUzMC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB0aGlzLnZhbHVlU2NhbGU1MC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB0aGlzLnZhbHVlU2NhbGU3MC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB0aGlzLnZhbHVlU2NhbGU4NS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZXBvc2l0aW9uc0FmdGVyQ2hhbmdlUGxhbmUocGxhbmVUb2dnbGU6IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGlmKHBsYW5lVG9nZ2xlID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMudmFsdWVTY2FsZTE1LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsXzE1VmVydGljYWwnKTtcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlMzAuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyX192YWx1ZVNjYWxlbGFiZWxfMzBWZXJ0aWNhbCcpO1xyXG4gICAgICB0aGlzLnZhbHVlU2NhbGU1MC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJfX3ZhbHVlU2NhbGVsYWJlbF81MFZlcnRpY2FsJyk7XHJcbiAgICAgIHRoaXMudmFsdWVTY2FsZTcwLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsXzcwVmVydGljYWwnKTtcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlODUuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyX192YWx1ZVNjYWxlbGFiZWxfODVWZXJ0aWNhbCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlMTUuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tU2xpZGVyX192YWx1ZVNjYWxlbGFiZWxfMTVWZXJ0aWNhbCcpO1xyXG4gICAgICB0aGlzLnZhbHVlU2NhbGUzMC5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b21TbGlkZXJfX3ZhbHVlU2NhbGVsYWJlbF8zMFZlcnRpY2FsJyk7XHJcbiAgICAgIHRoaXMudmFsdWVTY2FsZTUwLmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbVNsaWRlcl9fdmFsdWVTY2FsZWxhYmVsXzUwVmVydGljYWwnKTtcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlNzAuY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tU2xpZGVyX192YWx1ZVNjYWxlbGFiZWxfNzBWZXJ0aWNhbCcpO1xyXG4gICAgICB0aGlzLnZhbHVlU2NhbGU4NS5jbGFzc0xpc3QucmVtb3ZlKCdjdXN0b21TbGlkZXJfX3ZhbHVlU2NhbGVsYWJlbF84NVZlcnRpY2FsJyk7XHJcbiAgICB9O1xyXG4gIH07XHJcbn07IiwiZXhwb3J0IGNsYXNzIFZhbHVlUmFuZ2Uge1xyXG4gIG1pblZhbHVlOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICBtYXhWYWx1ZTogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yICh2YWx1ZXM6IHtba2V5OiBzdHJpbmddOiBzdHJpbmd9KSB7XHJcbiAgICBsZXQgbWluOkhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbGV0IG1heDpIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIG1pbi5pbm5lclRleHQgPSB2YWx1ZXMubWluO1xyXG4gICAgbWF4LmlubmVyVGV4dCA9IHZhbHVlcy5tYXg7XHJcbiAgICBtaW4uY2xhc3NMaXN0LmFkZCgnbWluU2xpZGVyUG9pbnQnKTtcclxuICAgIG1heC5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJQb2ludCcpO1xyXG4gICAgdGhpcy5taW5WYWx1ZSA9IG1pbjtcclxuICAgIHRoaXMubWF4VmFsdWUgPSBtYXg7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50cygpOiBvYmplY3Qge1xyXG4gICAgcmV0dXJuIHttaW46IHRoaXMubWluVmFsdWUsIG1heDogdGhpcy5tYXhWYWx1ZX1cclxuICB9XHJcbn0iLCJpbXBvcnQge1NsaWRlclJhbmdlfSBmcm9tICcuL2NvbXBvbmVudHMvc2xpZGVyLXJhbmdlJztcclxuaW1wb3J0IHtIYW5kZWxzfSBmcm9tICcuL2NvbXBvbmVudHMvaGFuZGVscyc7XHJcbmltcG9ydCB7U2xpZGVyTW92ZW1lbnR9IGZyb20gJy4vY29tcG9uZW50cy9zbGlkZXItbW92ZW1lbnQnO1xyXG5pbXBvcnQge1NpZGVNZW51fSBmcm9tICcuL2NvbXBvbmVudHMvc2lkZS1tZW51JztcclxuaW1wb3J0IHtWYWx1ZVJhbmdlfSBmcm9tICcuL2NvbXBvbmVudHMvdmFsdWVSYW5nZSc7XHJcbmltcG9ydCB7SGFuZGVsc0xhYmVsc30gZnJvbSAnLi9jb21wb25lbnRzL2hhbmRlbHMtbGFiZWxzJztcclxuaW1wb3J0IHtTZWxlY3RlZFJhbmdlfSBmcm9tICcuL2NvbXBvbmVudHMvc2VsZWN0ZWQtcmFuZ2UnO1xyXG5pbXBvcnQge1NldHRpbmdzfSBmcm9tICcuLi8uLi9qcXVlcnkudWkuY3VzdG9tU2xpZGVyJztcclxuaW1wb3J0IHtWYWx1ZVNjYWxlfSBmcm9tICcuL2NvbXBvbmVudHMvdmFsdWUtc2NhbGUnO1xyXG5cclxuaW50ZXJmYWNlIFBvc3NpYmxlUmFuZ2Uge1xyXG4gIG1pbjogc3RyaW5nO1xyXG4gIG1heDogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEYXRhT2ZWYWx1ZVJlZnJlc2gge1xyXG4gICdtaW4nPzogc3RyaW5nO1xyXG4gICdtYXgnPzogc3RyaW5nO1xyXG59O1xyXG5cclxuaW50ZXJmYWNlIERhdGFSZXF1ZXN0U3RhdHVzIHtcclxuICBcImdldFN0YXJ0SGFuZGVsc1Bvc2l0aW9uXCI6IGJvb2xlYW47XHJcbiAgXCJnZXRNYXhEYXRhXCI6IGJvb2xlYW47XHJcbiAgXCJnZXRNaW5Qb3NpdGlvbnNBbW91bnRcIjogYm9vbGVhbjtcclxuICBcImdldE1heFBvc2l0aW9uc0Ftb3VudFwiOiBib29sZWFuO1xyXG4gIFwiZ2V0UG9zc2libGVSYW5nZVwiOiBib29sZWFuO1xyXG4gIFwiZ2V0U3RlcFBvc2l0aW9uc0Ftb3VudFwiOiBib29sZWFuO1xyXG4gIFwiZ2V0VmFsdWVzRm9yVmFsdWVTY2FsZVwiOiBib29sZWFuO1xyXG4gIFwiZ2V0TWluU3RlcFwiOiBib29sZWFuO1xyXG4gIFwiY2hlY2tzTmV3U3RlcEZvclZhbGlkaXR5XCI6IHN0cmluZztcclxuICBcInNlbGVjdEhhbmRsZUZvclZhbHVlU2NhbGVcIjogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXcge1xyXG4gIHByaXZhdGUgdGhhdDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcmVhZG9ubHkgc2V0dGluZ3M6IFNldHRpbmdzO1xyXG4gIHJlYWRvbmx5IHNsaWRlclJhbmdlOiBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIHNsaWRlckNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcmVhZG9ubHkgbWluSGFuZGVsOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgcmVhZG9ubHkgbWF4SGFuZGVsOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgcmVhZG9ubHkgc2xpZGVyTW92ZW1lbnQ6IFNsaWRlck1vdmVtZW50O1xyXG4gIHByaXZhdGUgc2lkZU1lbnVDb250YWluZXI6IFN0cmluZyB8IEJvb2xlYW47XHJcbiAgcHJpdmF0ZSBtaW5WYWx1ZTogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBtYXhWYWx1ZTogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgcmVhZG9ubHkgbWluTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgcmVhZG9ubHkgbWF4TGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgcmVhZG9ubHkgaW50ZXJ2YWw6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHJlYWRvbmx5IHZhbHVlU2NhbGU6IFZhbHVlU2NhbGU7XHJcbiAgcmVhZG9ubHkgc2lkZU1lbnU6IEhUTUxEaXZFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG4gIHJlYWRvbmx5IGhhbmRlbFRvZ2dsZTogSFRNTElucHV0RWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICBwcml2YXRlIGhhbmRlbExhYmVsVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50fCB1bmRlZmluZWQ7XHJcbiAgcHJpdmF0ZSBwbGFuZVRvZ2dsZTogSFRNTElucHV0RWxlbWVudHwgdW5kZWZpbmVkO1xyXG4gIHByaXZhdGUgdmFsdWVTY2FsZVRvZ2dsZTogSFRNTElucHV0RWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICByZWFkb25seSBtaW5JbnB1dDogSFRNTElucHV0RWxlbWVudHwgdW5kZWZpbmVkO1xyXG4gIHJlYWRvbmx5IG1heElucHV0OiBIVE1MSW5wdXRFbGVtZW50fCB1bmRlZmluZWQ7XHJcbiAgcmVhZG9ubHkgc3RlcElucHV0OkhUTUxJbnB1dEVsZW1lbnQgfCB1bmRlZmluZWQ7XHJcbiAgcmVhZG9ubHkgbWluU2xpZGVyVmFsdWVPdXRwdXQ6IEhUTUxPdXRwdXRFbGVtZW50IHwgdW5kZWZpbmVkO1xyXG4gIHJlYWRvbmx5IG1heFNsaWRlclZhbHVlT3V0cHV0OiBIVE1MT3V0cHV0RWxlbWVudCB8IHVuZGVmaW5lZDtcclxuICBcclxuICBjb25zdHJ1Y3Rvcih0YXJnZXQ6IEhUTUxEaXZFbGVtZW50LCBzZXR0aW5nczogU2V0dGluZ3MpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgIHRoaXMudGhhdCA9IHRhcmdldDtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UgPSBuZXcgU2xpZGVyUmFuZ2UoKS5nZXRFbGVtZW50cygpO1xyXG5cclxuICAgIGxldCBoYW5kZWxzOiBIYW5kZWxzID0gbmV3IEhhbmRlbHMoKTtcclxuICAgIHRoaXMubWluSGFuZGVsID0gaGFuZGVscy5taW5IYW5kZWw7XHJcbiAgICB0aGlzLm1heEhhbmRlbCA9IGhhbmRlbHMubWF4SGFuZGVsO1xyXG5cclxuICAgIGxldCB2YWx1ZVJhbmdlOiBWYWx1ZVJhbmdlID0gbmV3IFZhbHVlUmFuZ2UoeydtaW4nOiB0aGlzLnNldHRpbmdzWydtaW4nXSwgJ21heCc6IHRoaXMuc2V0dGluZ3NbJ21heCddfSk7XHJcbiAgICB0aGlzLm1pblZhbHVlID0gdmFsdWVSYW5nZS5taW5WYWx1ZTtcclxuICAgIHRoaXMubWF4VmFsdWUgPSB2YWx1ZVJhbmdlLm1heFZhbHVlO1xyXG5cclxuICAgIGlmIChzZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUpIHtcclxuICAgICAgbGV0IHNpZGVNZW51ID0gbmV3IFNpZGVNZW51KCk7XHJcbiAgICAgIHRoaXMuc2lkZU1lbnUgPSBzaWRlTWVudS5jdXN0b21TbGlkZXJNZW51Q29udGFpbmVyO1xyXG4gICAgICB0aGlzLmhhbmRlbFRvZ2dsZSA9IHNpZGVNZW51LmhhbmRlbFRvZ2dsZTtcclxuICAgICAgdGhpcy5oYW5kZWxMYWJlbFRvZ2dsZSA9IHNpZGVNZW51LmhhbmRlbExhYmVsVG9nZ2xlO1xyXG4gICAgICB0aGlzLnBsYW5lVG9nZ2xlID0gc2lkZU1lbnUucGxhbmVUb2dnbGU7XHJcbiAgICAgIHRoaXMubWluSW5wdXQgPSBzaWRlTWVudS5taW5JbnB1dDtcclxuICAgICAgdGhpcy5tYXhJbnB1dCA9IHNpZGVNZW51Lm1heElucHV0O1xyXG4gICAgICB0aGlzLnN0ZXBJbnB1dCA9IHNpZGVNZW51LnN0ZXBJbnB1dDtcclxuICAgICAgdGhpcy5taW5TbGlkZXJWYWx1ZU91dHB1dCA9IHNpZGVNZW51Lm1pblNsaWRlclZhbHVlT3V0cHV0O1xyXG4gICAgICB0aGlzLm1heFNsaWRlclZhbHVlT3V0cHV0ID0gc2lkZU1lbnUubWF4U2xpZGVyVmFsdWVPdXRwdXQ7XHJcbiAgICAgIHRoaXMudmFsdWVTY2FsZVRvZ2dsZSA9IHNpZGVNZW51LnZhbHVlU2NhbGVUb2dnbGU7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5zaWRlTWVudUNvbnRhaW5lciA9IHNldHRpbmdzLnNpZGVNZW51Q29udGFpbmVyO1xyXG5cclxuICAgIGxldCBoYW5kZWxzTGFiZWxzOiBIYW5kZWxzTGFiZWxzID0gbmV3IEhhbmRlbHNMYWJlbHMoKTtcclxuICAgIHRoaXMubWluTGFiZWwgPSBoYW5kZWxzTGFiZWxzLm1pbkxhYmVsO1xyXG4gICAgdGhpcy5tYXhMYWJlbCA9IGhhbmRlbHNMYWJlbHMubWF4TGFiZWw7XHJcblxyXG4gICAgdGhpcy5pbnRlcnZhbCA9IG5ldyBTZWxlY3RlZFJhbmdlKCkuZ2V0RWxlbWVudHMoKTtcclxuICAgIFxyXG4gICAgaWYodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5zbGlkZXJNb3ZlbWVudCA9IG5ldyBTbGlkZXJNb3ZlbWVudCh7J21pbic6IHRoaXMubWluSGFuZGVsLCAnbWF4JzogdGhpcy5tYXhIYW5kZWwsJ21pbkxhYmVsJzogdGhpcy5taW5MYWJlbCwgJ21heExhYmVsJzogdGhpcy5tYXhMYWJlbCAsJ3NsaWRlclJhbmdlJzogdGhpcy5zbGlkZXJSYW5nZSwgJ3BsYW5lVG9nZ2xlJzogdGhpcy5wbGFuZVRvZ2dsZSA/IHRoaXMucGxhbmVUb2dnbGUgOiB0aGlzLnNldHRpbmdzLnZlcnRpY2FsLCAnaGFuZGVsc1RvZ2dsZSc6IHRoaXMuaGFuZGVsVG9nZ2xlID8gdGhpcy5oYW5kZWxUb2dnbGUgOiB0aGlzLnNldHRpbmdzLnJhbmdlLCAnaW50ZXJ2YWwnOiB0aGlzLmludGVydmFsLCAnc3RlcCc6IHRoaXMuc2V0dGluZ3Muc3RlcH0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zbGlkZXJNb3ZlbWVudCA9IG5ldyBTbGlkZXJNb3ZlbWVudCh7J21pbic6IHRoaXMubWluSGFuZGVsLCAnbWF4JzogdGhpcy5tYXhIYW5kZWwsJ21pbkxhYmVsJzogdGhpcy5taW5MYWJlbCwgJ21heExhYmVsJzogdGhpcy5tYXhMYWJlbCAsJ3NsaWRlclJhbmdlJzogdGhpcy5zbGlkZXJSYW5nZSwgJ3BsYW5lVG9nZ2xlJzogdGhpcy5zZXR0aW5ncy52ZXJ0aWNhbCwgJ2hhbmRlbHNUb2dnbGUnOiB0aGlzLnNldHRpbmdzLnJhbmdlLCAnaW50ZXJ2YWwnOiB0aGlzLmludGVydmFsLCAnc3RlcCc6IHRoaXMuc2V0dGluZ3Muc3RlcH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnZhbHVlU2NhbGUgPSBuZXcgVmFsdWVTY2FsZSgpO1xyXG4gICAgdGhpcy5zbGlkZXJDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICB9O1xyXG5cclxuICBkYXRhUmVxdWVzdFN0YXR1czogRGF0YVJlcXVlc3RTdGF0dXMgPSB7XHJcbiAgICBcImdldFN0YXJ0SGFuZGVsc1Bvc2l0aW9uXCI6IGZhbHNlLFxyXG4gICAgXCJnZXRNYXhEYXRhXCI6IGZhbHNlLFxyXG4gICAgXCJnZXRNaW5Qb3NpdGlvbnNBbW91bnRcIjogZmFsc2UsXHJcbiAgICBcImdldE1heFBvc2l0aW9uc0Ftb3VudFwiOiBmYWxzZSxcclxuICAgIFwiZ2V0UG9zc2libGVSYW5nZVwiOiBmYWxzZSxcclxuICAgIFwiZ2V0U3RlcFBvc2l0aW9uc0Ftb3VudFwiOiBmYWxzZSxcclxuICAgIFwiZ2V0VmFsdWVzRm9yVmFsdWVTY2FsZVwiOiBmYWxzZSxcclxuICAgIFwiZ2V0TWluU3RlcFwiOiBmYWxzZSxcclxuICAgIFwiY2hlY2tzTmV3U3RlcEZvclZhbGlkaXR5XCI6ICcnLFxyXG4gICAgXCJzZWxlY3RIYW5kbGVGb3JWYWx1ZVNjYWxlXCI6ICcnXHJcbiAgfTtcclxuXHJcbiAgZGlzcGxheUVsZW1lbnRzKCk6IHZvaWQge1xyXG4gICAgXHJcbiAgICB0aGlzLnNsaWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzbGlkZXJCb2R5Jyk7XHJcbiAgICB0aGlzLnNsaWRlckNvbnRhaW5lci5hcHBlbmQodGhpcy5zbGlkZXJSYW5nZSk7XHJcbiAgICB0aGlzLnRoYXQuYXBwZW5kKHRoaXMuc2xpZGVyQ29udGFpbmVyKTtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMubWluSGFuZGVsKTtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMubWF4SGFuZGVsKTtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMubWluVmFsdWUpO1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZS5hcHBlbmQodGhpcy5tYXhWYWx1ZSk7XHJcbiAgICB0aGlzLnNsaWRlclJhbmdlLmFwcGVuZCh0aGlzLnZhbHVlU2NhbGUudmFsdWVTY2FsZTE1LCB0aGlzLnZhbHVlU2NhbGUudmFsdWVTY2FsZTMwLCB0aGlzLnZhbHVlU2NhbGUudmFsdWVTY2FsZTUwLCB0aGlzLnZhbHVlU2NhbGUudmFsdWVTY2FsZTcwLCB0aGlzLnZhbHVlU2NhbGUudmFsdWVTY2FsZTg1KTtcclxuICAgIHRoaXMuZGF0YVJlcXVlc3RTdGF0dXNbXCJnZXRWYWx1ZXNGb3JWYWx1ZVNjYWxlXCJdID0gdHJ1ZTtcclxuICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZS5hcHBlbmQodGhpcy5pbnRlcnZhbCk7XHJcbiAgICB0aGlzLm1pbkhhbmRlbC5hcHBlbmQodGhpcy5taW5MYWJlbCk7XHJcbiAgICB0aGlzLm1heEhhbmRlbC5hcHBlbmQodGhpcy5tYXhMYWJlbCk7XHJcbiAgICBcclxuICAgIGlmICh0aGlzLnNldHRpbmdzWydoYW5kZWxzTGFiZWwnXSA9PT0gZmFsc2UpIHtcclxuICAgICAgdGhpcy5taW5MYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICB0aGlzLm1heExhYmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZih0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSAmJiB0aGlzLmhhbmRlbExhYmVsVG9nZ2xlKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kZWxMYWJlbFRvZ2dsZS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgfTtcclxuICAgIH07XHJcblxyXG4gICAgaWYodGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUgJiYgdGhpcy5zaWRlTWVudSkge1xyXG4gICAgICB0aGlzLmRhdGFSZXF1ZXN0U3RhdHVzW1wiZ2V0UG9zc2libGVSYW5nZVwiXSA9IHRydWU7XHJcbiAgICAgIGlmICh0aGlzLnNpZGVNZW51Q29udGFpbmVyICE9PSAnZmFsc2UnICYmIHR5cGVvZiB0aGlzLnNpZGVNZW51Q29udGFpbmVyID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcy5zaWRlTWVudUNvbnRhaW5lcilbMF0uYXBwZW5kKHRoaXMuc2lkZU1lbnUpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudGhhdC5hcHBlbmQodGhpcy5zaWRlTWVudSlcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGlmICh0aGlzLnNldHRpbmdzW1wicmFuZ2VcIl0gPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5tYXhIYW5kZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5oYW5kZWxUb2dnbGUgPyB0aGlzLmhhbmRlbFRvZ2dsZS5jaGVja2VkID0gdHJ1ZSA6IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubWF4SW5wdXQgPyB0aGlzLm1heElucHV0LnN0eWxlLm9wYWNpdHkgPSAnMScgOiBmYWxzZTtcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgICBcclxuXHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1sndmVydGljYWwnXSA9PT0gdHJ1ZSkge1xyXG4gICAgICBpZih0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSAmJiB0aGlzLnBsYW5lVG9nZ2xlKSB7XHJcbiAgICAgICAgdGhpcy5wbGFuZVRvZ2dsZSA/IHRoaXMucGxhbmVUb2dnbGUuY2hlY2tlZCA9IHRydWUgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLnNsaWRlck1vdmVtZW50LmNoYW5nZVBsYW5lKHRoaXMucGxhbmVUb2dnbGUsIHRoaXMuc2xpZGVyQ29udGFpbmVyLCB0aGlzLm1pblZhbHVlLCB0aGlzLm1heFZhbHVlKTtcclxuICAgICAgICB0aGlzLnZhbHVlU2NhbGUucmVwb3NpdGlvbnNBZnRlckNoYW5nZVBsYW5lKHRoaXMucGxhbmVUb2dnbGUuY2hlY2tlZCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJNb3ZlbWVudC5jaGFuZ2VQbGFuZSh0cnVlLCB0aGlzLnNsaWRlckNvbnRhaW5lciwgdGhpcy5taW5WYWx1ZSwgdGhpcy5tYXhWYWx1ZSk7XHJcbiAgICAgICAgdGhpcy52YWx1ZVNjYWxlLnJlcG9zaXRpb25zQWZ0ZXJDaGFuZ2VQbGFuZSh0cnVlKTtcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGlmICh0aGlzLnNldHRpbmdzLnN0ZXAgPT09IHRydWUgJiYgdGhpcy5zZXR0aW5nc1snc2lkZS1tZW51J10gPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5tYXhJbnB1dCA/IHRoaXMubWF4SW5wdXQuc2V0QXR0cmlidXRlKCdzdGVwJywgdGhpcy5zZXR0aW5ncy5zdGVwICsgXCJcIikgOiBmYWxzZTtcclxuICAgICAgdGhpcy5taW5JbnB1dCA/IHRoaXMubWluSW5wdXQuc2V0QXR0cmlidXRlKCdzdGVwJywgdGhpcy5zZXR0aW5ncy5zdGVwICsgXCJcIikgOiBmYWxzZTtcclxuICAgIH07XHJcbiAgICBcclxuICAgIGlmICh0aGlzLnNldHRpbmdzLnN0ZXApIHtcclxuICAgICAgdGhpcy5kYXRhUmVxdWVzdFN0YXR1c1tcImdldFN0ZXBQb3NpdGlvbnNBbW91bnRcIl0gPSB0cnVlO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBpZiAodGhpcy5zZXR0aW5ncy52YWx1ZVNjYWxlID09PSB0cnVlICYmIHRoaXMudmFsdWVTY2FsZVRvZ2dsZSkge1xyXG4gICAgICB0aGlzLnZhbHVlU2NhbGVUb2dnbGUuY2hlY2tlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnZhbHVlU2NhbGVUb2dnbGUgPyB0aGlzLnZhbHVlU2NhbGUuZGlzcGxheUNvbnRyb2xsZXIodGhpcy52YWx1ZVNjYWxlVG9nZ2xlKSA6IGZhbHNlO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZiAodGhpcy5zdGVwSW5wdXQgJiYgdHlwZW9mIHRoaXMuc2V0dGluZ3Muc3RlcCA9PT0gJ3N0cmluZycpIHtcclxuICAgICAgdGhpcy5kYXRhUmVxdWVzdFN0YXR1c1tcImNoZWNrc05ld1N0ZXBGb3JWYWxpZGl0eVwiXSA9IHRoaXMuc2V0dGluZ3Muc3RlcDtcclxuICAgIH0gZWxzZSBpZiAodGhpcy5zZXR0aW5ncy5zdGVwID09PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLmRhdGFSZXF1ZXN0U3RhdHVzW1wiZ2V0TWluU3RlcFwiXSA9IHRydWU7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICB0aGlzLmRhdGFSZXF1ZXN0U3RhdHVzW1wiZ2V0U3RhcnRIYW5kZWxzUG9zaXRpb25cIl0gPSB0cnVlO1xyXG4gIH07XHJcblxyXG4gIGJpbmRFdmVudExpc3RlbmVycygpOiB2b2lkIHtcclxuICAgIGlmICh0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSAmJiB0aGlzLmhhbmRlbExhYmVsVG9nZ2xlKSB7XHJcbiAgICAgIHRoaXMuaGFuZGVsTGFiZWxUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5tYWtlQmluZExhYmVsVG9nZ2xlLmJpbmQodGhpcykpO1xyXG4gICAgfTtcclxuICAgIGlmICh0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSAmJiB0aGlzLmhhbmRlbFRvZ2dsZSkge1xyXG4gICAgICB0aGlzLmhhbmRlbFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm1ha2VCaW5kSGFuZGVsVG9nZ2xlLmJpbmQodGhpcykpO1xyXG4gICAgfTtcclxuICAgIGlmICh0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSAmJiB0aGlzLnBsYW5lVG9nZ2xlKSB7XHJcbiAgICAgIHRoaXMucGxhbmVUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5tYWtlQmluZEZvclBsYW5lVG9nZ2xlLmJpbmQodGhpcykpO1xyXG4gICAgfTtcclxuICAgIHRoaXMubWluVmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm1ha2VCaW5kRm9yU2VsZWN0aW9uTWluVmFsdWUuYmluZCh0aGlzKSk7XHJcbiAgICB0aGlzLm1heFZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tYWtlQmluZEZvclNlbGVjdGlvbk1heFZhbHVlLmJpbmQodGhpcykpO1xyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlICYmIHRoaXMubWluSW5wdXQpIHtcclxuICAgICAgdGhpcy5taW5JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm1ha2VCaW5kRm9yTWluSW5wdXQuYmluZCh0aGlzKSk7XHJcbiAgICB9O1xyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlICYmIHRoaXMubWF4SW5wdXQpIHtcclxuICAgICAgdGhpcy5tYXhJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm1ha2VCaW5kRm9yTWF4SW5wdXQuYmluZCh0aGlzKSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSAmJiB0aGlzLnZhbHVlU2NhbGVUb2dnbGUpIHtcclxuICAgICAgdGhpcy52YWx1ZVNjYWxlVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMubWFrZUJpbmRGb3JWYWx1ZVNjYWxlVG9nZ2xlLmJpbmQodGhpcykpO1xyXG4gICAgfTtcclxuXHJcbiAgICBpZih0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSAmJiB0aGlzLnN0ZXBJbnB1dCkge1xyXG4gICAgICB0aGlzLnN0ZXBJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLm1ha2VCaW5kU3RlcElucHV0LmJpbmQodGhpcykpO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLnZhbHVlU2NhbGUudmFsdWVTY2FsZTE1LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tYWtlQmluZEZvclZhbHVlU2NhbGUuYmluZCh0aGlzLCB0aGlzLnZhbHVlU2NhbGUudmFsdWVTY2FsZTE1KSk7XHJcbiAgICB0aGlzLnZhbHVlU2NhbGUudmFsdWVTY2FsZTMwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tYWtlQmluZEZvclZhbHVlU2NhbGUuYmluZCh0aGlzLCB0aGlzLnZhbHVlU2NhbGUudmFsdWVTY2FsZTMwKSk7XHJcbiAgICB0aGlzLnZhbHVlU2NhbGUudmFsdWVTY2FsZTUwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tYWtlQmluZEZvclZhbHVlU2NhbGUuYmluZCh0aGlzLCB0aGlzLnZhbHVlU2NhbGUudmFsdWVTY2FsZTUwKSk7XHJcbiAgICB0aGlzLnZhbHVlU2NhbGUudmFsdWVTY2FsZTcwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tYWtlQmluZEZvclZhbHVlU2NhbGUuYmluZCh0aGlzLCB0aGlzLnZhbHVlU2NhbGUudmFsdWVTY2FsZTcwKSk7XHJcbiAgICB0aGlzLnZhbHVlU2NhbGUudmFsdWVTY2FsZTg1LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5tYWtlQmluZEZvclZhbHVlU2NhbGUuYmluZCh0aGlzLCB0aGlzLnZhbHVlU2NhbGUudmFsdWVTY2FsZTg1KSk7XHJcbiAgICBcclxuICB9O1xyXG4gIFxyXG4gIGJpbmRFdmVudEhhbmRlbHNNb3ZlbWVudCgpOnZvaWQge1xyXG4gICAgdGhpcy5iaW5kRm9yTWluKCk7XHJcbiAgICB0aGlzLmJpbmRGb3JNYXgoKTtcclxuICB9O1xyXG5cclxuICByZWZyZXNoQ3VycmVudFZhbHVlcyhuZXdEYXRhOiBEYXRhT2ZWYWx1ZVJlZnJlc2gpOiB2b2lkIHtcclxuXHJcbiAgICBmdW5jdGlvbiBjaGVja1VuZGVmaW5lZFN0cmluZ3ModmFsdWU6IHN0cmluZyB8IHVuZGVmaW5lZCk6IG51bGwgfCBzdHJpbmcge1xyXG4gICAgICByZXR1cm4gdmFsdWUgPT09IHVuZGVmaW5lZCA/IG51bGwgOiB2YWx1ZTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCdtaW4nIGluIG5ld0RhdGEgJiYgJ21heCcgaW4gbmV3RGF0YSkge1xyXG4gICAgICBpZih0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSA9PT0gdHJ1ZSAmJiB0aGlzLnNpZGVNZW51KSB7XHJcbiAgICAgICAgdGhpcy5taW5TbGlkZXJWYWx1ZU91dHB1dCA/IHRoaXMubWluU2xpZGVyVmFsdWVPdXRwdXQudGV4dENvbnRlbnQgPSBjaGVja1VuZGVmaW5lZFN0cmluZ3MobmV3RGF0YS5taW4pIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5taW5JbnB1dCA/IHRoaXMubWluSW5wdXQudmFsdWUgPSBgJHtuZXdEYXRhLm1pbn1gIDogZmFsc2U7XHJcbiAgICAgICAgaWYodGhpcy5oYW5kZWxUb2dnbGUgJiYgdGhpcy5oYW5kZWxUb2dnbGUuY2hlY2tlZCA9PT0gdHJ1ZSApIHtcclxuICAgICAgICAgIHRoaXMubWF4U2xpZGVyVmFsdWVPdXRwdXQgPyB0aGlzLm1heFNsaWRlclZhbHVlT3V0cHV0LnRleHRDb250ZW50ID0gYCAtICR7Y2hlY2tVbmRlZmluZWRTdHJpbmdzKG5ld0RhdGEubWF4KX1gIDogZmFsc2U7XHJcbiAgICAgICAgICB0aGlzLm1heElucHV0ID8gdGhpcy5tYXhJbnB1dC52YWx1ZSA9IGAke25ld0RhdGEubWF4fWAgOiBmYWxzZTtcclxuICAgICAgICB9O1xyXG4gICAgICB9O1xyXG4gICAgICBcclxuICAgICAgdGhpcy5taW5MYWJlbC50ZXh0Q29udGVudCA9IGNoZWNrVW5kZWZpbmVkU3RyaW5ncyhuZXdEYXRhLm1pbik7XHJcbiAgICAgIHRoaXMubWF4TGFiZWwudGV4dENvbnRlbnQgPSBjaGVja1VuZGVmaW5lZFN0cmluZ3MobmV3RGF0YS5tYXgpO1xyXG4gICAgICBcclxuICAgIH0gZWxzZSBpZiAoJ21pbicgaW4gbmV3RGF0YSkge1xyXG4gICAgICB0aGlzLm1pbkxhYmVsLnRleHRDb250ZW50ID0gY2hlY2tVbmRlZmluZWRTdHJpbmdzKG5ld0RhdGEubWluKTtcclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5taW5TbGlkZXJWYWx1ZU91dHB1dCA/IHRoaXMubWluU2xpZGVyVmFsdWVPdXRwdXQudGV4dENvbnRlbnQgPSBjaGVja1VuZGVmaW5lZFN0cmluZ3MobmV3RGF0YS5taW4pIDogZmFsc2U7XHJcbiAgICAgICAgdGhpcy5taW5JbnB1dCA/IHRoaXMubWluSW5wdXQudmFsdWUgPSBgJHtuZXdEYXRhLm1pbn1gIDogZmFsc2U7XHJcbiAgICAgIH07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm1heExhYmVsLnRleHRDb250ZW50ID0gY2hlY2tVbmRlZmluZWRTdHJpbmdzKG5ld0RhdGEubWF4KTtcclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlKSB7XHJcbiAgICAgICAgdGhpcy5tYXhTbGlkZXJWYWx1ZU91dHB1dCA/IHRoaXMubWF4U2xpZGVyVmFsdWVPdXRwdXQudGV4dENvbnRlbnQgPSBgIC0gJHtjaGVja1VuZGVmaW5lZFN0cmluZ3MobmV3RGF0YS5tYXgpfWAgOiBmYWxzZTtcclxuICAgICAgICB0aGlzLm1heElucHV0ID8gdGhpcy5tYXhJbnB1dC52YWx1ZSA9IGAke25ld0RhdGEubWF4fWAgOiBmYWxzZTtcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgICBuZXcgSGFuZGVsc0xhYmVscygpLmNlbnRlcmluZ1JlbGF0aXZlVG9IYW5kbGVzKHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRoLCB0aGlzLm1heEhhbmRlbC5vZmZzZXRXaWR0aCwgdGhpcy5taW5MYWJlbC5vZmZzZXRXaWR0aCwgdGhpcy5tYXhMYWJlbC5vZmZzZXRXaWR0aCwgdGhpcy5taW5MYWJlbCwgdGhpcy5tYXhMYWJlbCk7XHJcbiAgfTtcclxuXHJcbiAgY2FsbEhhbmRlbExhYmVsVG9nZ2xlQ2hhbmdlcigpOiB2b2lkIHtcclxuICAgIHRoaXMuaGFuZGVsTGFiZWxUb2dnbGUgPyBuZXcgSGFuZGVsc0xhYmVscygpLmRpc3BsYXlDb250cm9sbGVyKHRoaXMuaGFuZGVsTGFiZWxUb2dnbGUsIHRoaXMubWluTGFiZWwsIHRoaXMubWF4TGFiZWwpIDogZmFsc2U7XHJcbiAgICBpZiAodGhpcy5oYW5kZWxMYWJlbFRvZ2dsZSAmJiB0aGlzLmhhbmRlbExhYmVsVG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgbmV3IEhhbmRlbHNMYWJlbHMoKS5jZW50ZXJpbmdSZWxhdGl2ZVRvSGFuZGxlcyh0aGlzLm1pbkhhbmRlbC5vZmZzZXRXaWR0aCwgdGhpcy5tYXhIYW5kZWwub2Zmc2V0V2lkdGgsIHRoaXMubWluTGFiZWwub2Zmc2V0V2lkdGgsIHRoaXMubWF4TGFiZWwub2Zmc2V0V2lkdGgsIHRoaXMubWluTGFiZWwsIHRoaXMubWF4TGFiZWwpXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNhbGxNYXhIYW5kZWxUb2dnbGVDaGFuZ2VyKCk6IHZvaWQge1xyXG4gICAgaWYgKHRoaXMuaGFuZGVsVG9nZ2xlICYmIHRoaXMuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMuc2xpZGVyTW92ZW1lbnQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnNbJ21heCddID0geydtYXgnOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGh9YCwgJ3NsaWRlcldpZHRoJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRofWB9XHJcbiAgICAgIHRoaXMubWF4SGFuZGVsLnN0eWxlLmxlZnQgPSBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGh9cHhgO1xyXG4gICAgICB0aGlzLm1heFNsaWRlclZhbHVlT3V0cHV0ID8gdGhpcy5tYXhTbGlkZXJWYWx1ZU91dHB1dC50ZXh0Q29udGVudCA9ICcnIDogZmFsc2U7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQgPyB0aGlzLm1heElucHV0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJykgOiBmYWxzZTtcclxuICAgICAgdGhpcy5tYXhJbnB1dCA/IHRoaXMubWF4SW5wdXQudmFsdWUgPSAnJyA6IGZhbHNlO1xyXG4gICAgICB0aGlzLm1heElucHV0ID8gdGhpcy5tYXhJbnB1dC5zdHlsZS5vcGFjaXR5ID0gJzAuMycgOiBmYWxzZTtcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfTtcclxuXHJcbiAgICB0aGlzLmhhbmRlbFRvZ2dsZSA/IG5ldyBIYW5kZWxzKCkuZGlzcGxheUNvbnRyb2xsZXIodGhpcy5oYW5kZWxUb2dnbGUsIHRoaXMubWF4SGFuZGVsKSA6IGZhbHNlIDtcclxuXHJcbiAgICBpZiAodGhpcy5oYW5kZWxUb2dnbGUgJiYgdGhpcy5oYW5kZWxUb2dnbGUuY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLmRhdGFSZXF1ZXN0U3RhdHVzW1wiZ2V0TWF4RGF0YVwiXSA9IHRydWU7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQgPyB0aGlzLm1heElucHV0LnJlbW92ZUF0dHJpYnV0ZSgncmVhZG9ubHknKSA6IGZhbHNlO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLnJpZ2h0ID0gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtICh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGggLyAyICkgKyAncHgnO1xyXG4gICAgICBpZiAoK3RoaXMuc2xpZGVyTW92ZW1lbnQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnMubWluWydtaW4nXSA+PSB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXhIYW5kZWwub2Zmc2V0V2lkdGggLSB0aGlzLm1pbkhhbmRlbC5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgIHRoaXMuc2xpZGVyTW92ZW1lbnQuY3VycmVudEhhbmRlbHNQb3NpdGlvbnNbJ21pbiddID0geydtaW4nOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXhIYW5kZWwub2Zmc2V0V2lkdGggLSB0aGlzLm1pbkhhbmRlbC5vZmZzZXRXaWR0aH1gLCAnc2xpZGVyV2lkdGgnOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXhIYW5kZWwub2Zmc2V0V2lkdGh9YH1cclxuICAgICAgICB0aGlzLm1pbkhhbmRlbC5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRoIC0gdGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGh9cHhgO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZWZyZXNoTWF4U2lkZU1lbnVEYXRhKGRhdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5tYXhTbGlkZXJWYWx1ZU91dHB1dCA/IHRoaXMubWF4U2xpZGVyVmFsdWVPdXRwdXQudGV4dENvbnRlbnQgPSBgIC0gJHtkYXRhfWAgOiBmYWxzZTtcclxuICAgIGlmICh0aGlzLm1heElucHV0KSB7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgICAgdGhpcy5tYXhJbnB1dC52YWx1ZSA9IGAke2RhdGF9YDtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgaW5wdXRzUG9zc2libGVSYW5nZSggZGF0YTogUG9zc2libGVSYW5nZSwgbWluOiBIVE1MSW5wdXRFbGVtZW50LCBtYXg6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIG1pbi5zZXRBdHRyaWJ1dGUoJ21heCcsIGRhdGEubWF4KTtcclxuICAgIG1pbi5zZXRBdHRyaWJ1dGUoJ21pbicsIGRhdGEubWluKTtcclxuICAgIG1heC5zZXRBdHRyaWJ1dGUoJ21heCcsIGRhdGEubWF4KTtcclxuICB9O1xyXG5cclxuICBiaW5kRm9yTWluKCk6IHZvaWQge1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzOyBcclxuICAgIHRoYXQubWluSGFuZGVsLm9ubW91c2Vkb3duID0gZnVuY3Rpb24oIGV2ZW50ICk6IHZvaWQge1xyXG4gICAgICB0aGF0LnNsaWRlck1vdmVtZW50Lm1pbkhhbmRlbExpc3RlbmVyKCBldmVudCwgdW5kZWZpbmVkKTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgYmluZEZvck1heCgpOiB2b2lkIHtcclxuICAgIGxldCB0aGF0ID0gdGhpczsgXHJcbiAgICB0aGF0Lm1heEhhbmRlbC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKGV2ZW50KTogdm9pZCB7XHJcbiAgICAgIHRoYXQuc2xpZGVyTW92ZW1lbnQubWF4SGFuZGVsTGlzdGVuZXIoIGV2ZW50LCB1bmRlZmluZWQpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBtYWtlQmluZExhYmVsVG9nZ2xlKCk6IHZvaWQge1xyXG4gICAgdGhpcy5jYWxsSGFuZGVsTGFiZWxUb2dnbGVDaGFuZ2VyKCk7XHJcbiAgfTtcclxuXHJcbiAgbWFrZUJpbmRIYW5kZWxUb2dnbGUoKTogdm9pZCB7XHJcbiAgICB0aGlzLmNhbGxNYXhIYW5kZWxUb2dnbGVDaGFuZ2VyKCk7XHJcbiAgfTtcclxuXHJcbiAgbWFrZUJpbmRTdGVwSW5wdXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLnN0ZXBJbnB1dCA/IHRoaXMuZGF0YVJlcXVlc3RTdGF0dXNbJ2NoZWNrc05ld1N0ZXBGb3JWYWxpZGl0eSddID0gdGhpcy5zdGVwSW5wdXQudmFsdWUgOiBmYWxzZTtcclxuICB9O1xyXG4gIFxyXG4gIG1ha2VCaW5kRm9yVmFsdWVTY2FsZVRvZ2dsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMudmFsdWVTY2FsZVRvZ2dsZSA/IHRoaXMudmFsdWVTY2FsZS5kaXNwbGF5Q29udHJvbGxlcih0aGlzLnZhbHVlU2NhbGVUb2dnbGUpIDogZmFsc2U7XHJcbiAgfTtcclxuXHJcbiAgbWFrZUJpbmRGb3JQbGFuZVRvZ2dsZSgpOiB2b2lkIHtcclxuICAgIHRoaXMucGxhbmVUb2dnbGUgPyB0aGlzLnNsaWRlck1vdmVtZW50LmNoYW5nZVBsYW5lKHRoaXMucGxhbmVUb2dnbGUsIHRoaXMuc2xpZGVyQ29udGFpbmVyLCB0aGlzLm1pblZhbHVlLCB0aGlzLm1heFZhbHVlKSA6IGZhbHNlO1xyXG4gICAgdGhpcy5wbGFuZVRvZ2dsZSA/IHRoaXMudmFsdWVTY2FsZS5yZXBvc2l0aW9uc0FmdGVyQ2hhbmdlUGxhbmUodGhpcy5wbGFuZVRvZ2dsZS5jaGVja2VkKSA6IGZhbHNlO1xyXG4gIH07XHJcblxyXG4gIG1ha2VCaW5kRm9yU2VsZWN0aW9uTWluVmFsdWUgKCk6IHZvaWQge1xyXG4gICAgdGhpcy5zbGlkZXJNb3ZlbWVudC5zZWxlY3Rpb25PZlByZXBhcmVkVmFsdWUoJ21pbicpO1xyXG4gIH07XHJcblxyXG4gIG1ha2VCaW5kRm9yVmFsdWVTY2FsZShlbGVtZW50OiBIVE1MTGFiZWxFbGVtZW50KTogdm9pZCB7XHJcbiAgICBpZiAoZWxlbWVudC50ZXh0Q29udGVudCkge1xyXG4gICAgICBsZXQgdmFsOiBzdHJpbmcgPSBlbGVtZW50LnRleHRDb250ZW50O1xyXG4gICAgICB0aGlzLmRhdGFSZXF1ZXN0U3RhdHVzWydzZWxlY3RIYW5kbGVGb3JWYWx1ZVNjYWxlJ10gPSB2YWw7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIG1ha2VCaW5kRm9yU2VsZWN0aW9uTWF4VmFsdWUoKTogdm9pZCB7XHJcbiAgICB0aGlzLnNsaWRlck1vdmVtZW50LnNlbGVjdGlvbk9mUHJlcGFyZWRWYWx1ZSgnbWF4Jyk7XHJcbiAgfTtcclxuXHJcbiAgbWFrZUJpbmRGb3JNaW5JbnB1dCgpOiB2b2lkIHtcclxuICAgIHRoaXMuZGF0YVJlcXVlc3RTdGF0dXNbXCJnZXRNaW5Qb3NpdGlvbnNBbW91bnRcIl0gPSB0cnVlO1xyXG4gIH07XHJcblxyXG4gIG1ha2VCaW5kRm9yTWF4SW5wdXQoKTogdm9pZCB7XHJcbiAgICB0aGlzLmRhdGFSZXF1ZXN0U3RhdHVzW1wiZ2V0TWF4UG9zaXRpb25zQW1vdW50XCJdID0gdHJ1ZTtcclxuICB9O1xyXG59O1xyXG4iLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi9jb21wb25lbnRzL3ZpZXcvdmlldyc7XHJcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi9jb21wb25lbnRzL21vZGVsL21vZGVsJztcclxuaW1wb3J0IHsgRmFjYWRlIH0gZnJvbSAnLi9jb21wb25lbnRzL21vZGVsL2ZhY2FkZSc7XHJcbmltcG9ydCB7IFByZXNlbnRlciB9IGZyb20gJy4vY29tcG9uZW50cy9wcmVzZW50ZXIvcHJlc2VudGVyJztcclxuXHJcbmRlY2xhcmUgZ2xvYmFsIHtcclxuICBpbnRlcmZhY2UgSlF1ZXJ5IHtcclxuICAgIHRlc3RTbGlkZXIoIG9wdGlvbnM6IFNsaWRlck9wdGlvbnMpOnZvaWQ7XHJcbiAgfVxyXG59O1xyXG5cclxuaW50ZXJmYWNlIFNsaWRlck9wdGlvbnMge1xyXG4gIFtrZXk6IHN0cmluZ106IGJvb2xlYW4gfCBzdHJpbmdcclxufTtcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2V0dGluZ3Mge1xyXG4gICdtaW4nOiBzdHJpbmc7XHJcbiAgJ21heCc6IHN0cmluZztcclxuICAncmFuZ2UnOiBib29sZWFuO1xyXG4gICdzaWRlLW1lbnUnOiBib29sZWFuO1xyXG4gICdoYW5kZWxzTGFiZWwnOiBib29sZWFuO1xyXG4gICd2ZXJ0aWNhbCc6IGJvb2xlYW47XHJcbiAgJ3N0ZXAnOiBib29sZWFuIHwgc3RyaW5nO1xyXG4gICdzaWRlTWVudUNvbnRhaW5lcic6IHN0cmluZztcclxuICAndmFsdWVTY2FsZSc6IGJvb2xlYW47XHJcbiAgJ2N1cnJlbnQtbWluJz86IHN0cmluZztcclxuICAnY3VycmVudC1tYXgnPzogc3RyaW5nO1xyXG59XHJcblxyXG4oZnVuY3Rpb24oICQgKSB7XHJcbiAgJC5mbi50ZXN0U2xpZGVyID0gZnVuY3Rpb24oIG9wdGlvbnM6IFNsaWRlck9wdGlvbnMgKSB7XHJcblxyXG4gICAgbGV0IHNldHRpbmdzOiBTZXR0aW5ncyA9ICQuZXh0ZW5kKCB7XHJcbiAgICAgICdtaW4nOiAnMCcsXHJcbiAgICAgICdtYXgnOiAnMTAnLFxyXG4gICAgICAncmFuZ2UnOiBmYWxzZSxcclxuICAgICAgJ3NpZGUtbWVudSc6IGZhbHNlLFxyXG4gICAgICAnaGFuZGVsc0xhYmVsJzogZmFsc2UsXHJcbiAgICAgICd2ZXJ0aWNhbCc6IGZhbHNlLFxyXG4gICAgICAnc3RlcCc6IGZhbHNlLFxyXG4gICAgICAndmFsdWVTY2FsZSc6IGZhbHNlLFxyXG4gICAgICAnc2lkZU1lbnVDb250YWluZXInOiAnZmFsc2UnXHJcbiAgICB9LCBvcHRpb25zKTtcclxuXHJcbiAgICBsZXQgdGhhdDogSFRNTERpdkVsZW1lbnQgPSB0aGlzO1xyXG4gICAgXHJcbiAgICBsZXQgbW9kZWw6IE1vZGVsO1xyXG4gICAgaWYgKCdjdXJyZW50LW1pbicgaW4gc2V0dGluZ3MgJiYgJ2N1cnJlbnQtbWF4JyBpbiBzZXR0aW5ncykge1xyXG4gICAgICBtb2RlbCA9IG5ldyBNb2RlbCh7J21pbic6IHNldHRpbmdzWydtaW4nXSwgbWF4OiBzZXR0aW5nc1snbWF4J10sICdjdXJyZW50LW1pbic6IHNldHRpbmdzWydjdXJyZW50LW1pbiddID8gc2V0dGluZ3NbJ2N1cnJlbnQtbWluJ10gOiAnJywgJ2N1cnJlbnQtbWF4Jzogc2V0dGluZ3NbJ2N1cnJlbnQtbWF4J10gPyBzZXR0aW5nc1snY3VycmVudC1tYXgnXSA6ICcnfSk7XHJcbiAgICB9IGVsc2UgaWYgKCdjdXJyZW50LW1pbicgaW4gc2V0dGluZ3MpIHtcclxuICAgICAgbW9kZWwgPSBuZXcgTW9kZWwoeydtaW4nOiBzZXR0aW5nc1snbWluJ10sIG1heDogc2V0dGluZ3NbJ21heCddLCAnY3VycmVudC1taW4nOiBzZXR0aW5nc1snY3VycmVudC1taW4nXSA/IHNldHRpbmdzWydjdXJyZW50LW1pbiddIDogJycsICdjdXJyZW50LW1heCc6IHNldHRpbmdzWydtYXgnXX0pO1xyXG4gICAgfSBlbHNlIGlmICgnY3VycmVudC1tYXgnIGluIHNldHRpbmdzKSB7XHJcbiAgICAgIG1vZGVsID0gbmV3IE1vZGVsKHsnbWluJzogc2V0dGluZ3NbJ21pbiddLCBtYXg6IHNldHRpbmdzWydtYXgnXSwgJ2N1cnJlbnQtbWluJzogc2V0dGluZ3NbJ21pbiddLCAnY3VycmVudC1tYXgnOiBzZXR0aW5nc1snY3VycmVudC1tYXgnXSA/IHNldHRpbmdzWydjdXJyZW50LW1heCddIDogJyd9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1vZGVsID0gbmV3IE1vZGVsKHsnbWluJzogc2V0dGluZ3NbJ21pbiddLCBtYXg6IHNldHRpbmdzWydtYXgnXSwgJ2N1cnJlbnQtbWluJzogc2V0dGluZ3NbJ21pbiddLCAnY3VycmVudC1tYXgnOiBzZXR0aW5nc1snbWF4J119KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHZpZXc6IFZpZXcgPSBuZXcgVmlldyh0aGF0LCBzZXR0aW5ncyk7XHJcbiAgICBcclxuICAgIGxldCBmYWNhZGU6IEZhY2FkZSA9IG5ldyBGYWNhZGUobW9kZWwpXHJcbiAgICBcclxuICAgIGxldCBwcmVzZW50ZXI6IFByZXNlbnRlciA9IG5ldyBQcmVzZW50ZXIodmlldywgZmFjYWRlKTtcclxuXHJcbiAgICBwcmVzZW50ZXIuc3RhcnRWaWV3TW9uaXRvcmluZygpO1xyXG4gICAgdmlldy5iaW5kRXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIHZpZXcuZGlzcGxheUVsZW1lbnRzKCk7XHJcbiAgICB2aWV3LmJpbmRFdmVudEhhbmRlbHNNb3ZlbWVudCgpO1xyXG4gICAgXHJcbiAgfTtcclxufSkoalF1ZXJ5KTsiXSwic291cmNlUm9vdCI6IiJ9