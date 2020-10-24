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

function Presenter(view, facade) {
  view.displayElements();
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
    }
  });

  if (view.sliderMovement.step !== false) {
    var stepAmount = facade.getPositionsAmount();
    view.sliderMovement.stepAmount = stepAmount['positions'];
  }

  view.minHandel.onmousedown = function (event) {
    view.sliderMovement.minHandelListener(event);
  };

  view.maxHandel.onmousedown = function (event) {
    view.sliderMovement.maxHandelListener(event);
  };

  if (view.settings['side-menu'] !== false) {
    view.handelLabelToggle.addEventListener('change', function () {
      view.callHandelLabelToggleChanger(view);
    });
  }

  ;

  if (view.settings['side-menu'] !== false) {
    view.handelToggle.addEventListener('change', function () {
      view.callMaxHandelToggleChanger(view);

      if (view.handelToggle.checked === true) {
        var result = facade.getMaxData();
        view.refreshMaxSideMenuData(result);
      }

      ;
    });
  }

  ;

  if (view.settings['side-menu'] !== false) {
    view.planeToggle.addEventListener('change', function () {
      view.sliderMovement.changePlane(view.planeToggle, view.sliderContainer, view.minValue, view.maxValue);
    });
  }

  ;
  view.minValue.addEventListener('click', function () {
    view.sliderMovement.selectionOfPreparedValue('min');
  });
  view.maxValue.addEventListener('click', function () {
    view.sliderMovement.selectionOfPreparedValue('max');
  });

  if (view.settings['side-menu'] !== false) {
    view.minInput.addEventListener('change', function () {
      var positions = facade.getPositionsAmount();
      view.sliderMovement.sideMenuInputsValuesValidationChecker('min', view.minInput.value, positions['positions'], positions['minimum']);
    });
  }

  ;

  if (view.settings['side-menu'] !== false) {
    view.maxInput.addEventListener('change', function () {
      var positions = facade.getPositionsAmount();
      view.sliderMovement.sideMenuInputsValuesValidationChecker('max', view.maxInput.value, positions['positions'], positions['minimum']);
    });
  }

  ;

  if (view.settings['side-menu'] !== false) {
    var possibleRange = facade.getPossibleRange();
    view.inputsPossibleRange(possibleRange, view.minInput, view.maxInput);
  }

  ;
  var startPositions = facade.startHandelsPosition();
  view.sliderMovement.startHandlersPositions(startPositions);
  view.refreshCurrentValues(startPositions);
}
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
      this.sliderContainer = container;

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

      if (this.sideMenuContainer !== 'false') {
        document.querySelector(this.sideMenuContainer).append(this.sideMenu);
      } else {
        this.that.append(this.sideMenu);
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
      if ('min' in newData && 'max' in newData && this.settings['range'] === true) {
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
    var presenter = Object(_components_presenter_presenter_ts__WEBPACK_IMPORTED_MODULE_3__["Presenter"])(view, facade);
  };
})(jQuery);

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwvTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwvZmFjYWRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRlci9wcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL2hhbmRlbHMtbGFiZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9oYW5kZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9zZWxlY3RlZC1yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NvbXBvbmVudHMvc2lkZS1tZW51LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9zbGlkZXItbW92ZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL3NsaWRlci1yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NvbXBvbmVudHMvdmFsdWVSYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L3ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pxdWVyeS51aS5jdXN0b21TbGlkZXIudHMiXSwibmFtZXMiOlsiTW9kZWwiLCJzZXR0aW5ncyIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJtaW4iLCJtYXgiLCJGYWNhZGUiLCJtb2RlbCIsImdldEN1cnJlbnREYXRhIiwicHJvcCIsIk1hdGgiLCJyb3VuZCIsIlByZXNlbnRlciIsInZpZXciLCJmYWNhZGUiLCJkaXNwbGF5RWxlbWVudHMiLCJzbGlkZXJNb3ZlbWVudCIsIm15RGF0YSIsIlByb3h5Iiwic2V0IiwidGFyZ2V0IiwidmFsIiwibW9kZWxSZXN1bHQiLCJyZWZyZXNoTW9kZWxEYXRhIiwicmVmcmVzaEN1cnJlbnRWYWx1ZXMiLCJzdGVwIiwic3RlcEFtb3VudCIsImdldFBvc2l0aW9uc0Ftb3VudCIsIm1pbkhhbmRlbCIsIm9ubW91c2Vkb3duIiwiZXZlbnQiLCJtaW5IYW5kZWxMaXN0ZW5lciIsIm1heEhhbmRlbCIsIm1heEhhbmRlbExpc3RlbmVyIiwiaGFuZGVsTGFiZWxUb2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FsbEhhbmRlbExhYmVsVG9nZ2xlQ2hhbmdlciIsImhhbmRlbFRvZ2dsZSIsImNhbGxNYXhIYW5kZWxUb2dnbGVDaGFuZ2VyIiwiY2hlY2tlZCIsInJlc3VsdCIsImdldE1heERhdGEiLCJyZWZyZXNoTWF4U2lkZU1lbnVEYXRhIiwicGxhbmVUb2dnbGUiLCJjaGFuZ2VQbGFuZSIsInNsaWRlckNvbnRhaW5lciIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJzZWxlY3Rpb25PZlByZXBhcmVkVmFsdWUiLCJtaW5JbnB1dCIsInBvc2l0aW9ucyIsInNpZGVNZW51SW5wdXRzVmFsdWVzVmFsaWRhdGlvbkNoZWNrZXIiLCJ2YWx1ZSIsIm1heElucHV0IiwicG9zc2libGVSYW5nZSIsImdldFBvc3NpYmxlUmFuZ2UiLCJpbnB1dHNQb3NzaWJsZVJhbmdlIiwic3RhcnRQb3NpdGlvbnMiLCJzdGFydEhhbmRlbHNQb3NpdGlvbiIsInN0YXJ0SGFuZGxlcnNQb3NpdGlvbnMiLCJIYW5kZWxzTGFiZWxzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibWluTGFiZWwiLCJtYXhMYWJlbCIsInRvZ2dsZSIsInN0eWxlIiwiZGlzcGxheSIsIm1pbkhhbmRlbFdpZHRoIiwibWF4SGFuZGVsV2lkdGgiLCJtaW5MYWJlbFdpZHRoIiwibWF4TGFiZWxXaWR0aCIsImxlZnQiLCJIYW5kZWxzIiwiU2VsZWN0ZWRSYW5nZSIsImludGVydmFsIiwiU2lkZU1lbnUiLCJzbGlkZXJWYWx1ZVAiLCJpbm5lclRleHQiLCJtaW5TbGlkZXJWYWx1ZU91dHB1dCIsImlkIiwibWF4U2xpZGVyVmFsdWVPdXRwdXQiLCJzbGlkZXJUb2dnbGVQIiwic2xpZGVyVG9nZ2xlTGFiZWwiLCJtYXhTbGlkZXJIYW5kZWxUb2dnbGUiLCJzZXRBdHRyaWJ1dGUiLCJjdXN0b21TbGlkZXJCb3JkZXIiLCJjdXN0b21TbGlkZXJJbnB1dHMiLCJjdXN0b21TbGlkZXJJbnB1dHNQIiwiY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWwiLCJjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbCIsImN1c3RvbVNsaWRlcklucHV0c01pbiIsImN1c3RvbVNsaWRlcklucHV0c01heCIsInRvZ2dsZUZvclZhbHVlc0NvbnRhaW5lciIsInRvZ2dsZUZvclZhbHVlc1AiLCJ0b2dnbGVGb3JWYWx1ZXNMYWJlbCIsInRvZ2dsZUZvclZhbHVlc0lucHV0IiwidG9nZ2xlRm9yVmFsdWVzU3BhbiIsInRvZ2dsZUZvclBsYW5lQ29udGFpbmVyIiwidG9nZ2xlRm9yUGxhbmVQIiwidG9nZ2xlRm9yUGxhbmVMYWJlbCIsInRvZ2dsZUZvclBsYW5lSW5wdXQiLCJ0b2dnbGVGb3JQbGFuZVNwYW4iLCJtYWluU2xpZGVyQ29udGFpbmVyIiwiYXBwZW5kIiwiY3VzdG9tU2xpZGVyTWVudUNvbnRhaW5lciIsIm1lbnUiLCJTbGlkZXJNb3ZlbWVudCIsImhhbmRlbHMiLCJzbGlkZXJSYW5nZSIsImhhbmRlbHNUb2dnbGUiLCJwb3NpdGlvblZhbHVlcyIsIm9mZnNldFdpZHRoIiwicmlnaHQiLCJ0ZXN0IiwidGhhdCIsInNoaWZ0IiwiZG91YmxlSGFuZGVscyIsInZlcnRpY2FsIiwiY2xpZW50WSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImNsaWVudFgiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsInVuZGVmaW5lZCIsIm5ld0xlZnQiLCJyaWdodEVkZ2UiLCJyZW5ld2FsT2ZQb3NpdGlvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJib2R5IiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwicmVtb3ZlIiwibWluaW11bSIsIlNsaWRlclJhbmdlIiwiZWxlbSIsInJhbmdlIiwiVmFsdWVSYW5nZSIsInZhbHVlcyIsIlZpZXciLCJnZXRFbGVtZW50cyIsInNpZGVNZW51RWxlbWVudHMiLCJzaWRlTWVudSIsInNpZGVNZW51Q29udGFpbmVyIiwiY29udGFpbmVyIiwib2Zmc2V0SGVpZ2h0IiwicXVlcnlTZWxlY3RvciIsIm9wYWNpdHkiLCJuZXdEYXRhIiwidGV4dENvbnRlbnQiLCJjZW50ZXJpbmdSZWxhdGl2ZVRvSGFuZGxlcyIsImRpc3BsYXlDb250cm9sbGVyIiwicmVtb3ZlQXR0cmlidXRlIiwiJCIsImZuIiwidGVzdFNsaWRlciIsIm9wdGlvbnMiLCJleHRlbmQiLCJwcmVzZW50ZXIiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7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LEVBQWVySCxRQUFmLENBQVg7QUFFQSxRQUFJYyxNQUFNLEdBQUcsSUFBSVIsa0VBQUosQ0FBV0MsS0FBWCxDQUFiO0FBRUEsUUFBSTBKLFNBQVMsR0FBR3JKLG9GQUFTLENBQUNDLElBQUQsRUFBT0MsTUFBUCxDQUF6QjtBQUNELEdBL0JEO0FBZ0NELENBakNELEVBaUNHb0osTUFqQ0gsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanF1ZXJ5LnVpLmN1c3RvbVNsaWRlci50c1wiKTtcbiIsImltcG9ydCB7IElEYXRhIH0gZnJvbSAnLi9kYXRhSW50ZXJmYWNlLnRzJztcclxuXHJcbmludGVyZmFjZSBTZXR0aW5ncyB7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW9kZWwge1xyXG5cclxuICBkYXRhOiBJRGF0YTtcclxuICBcclxuICBjb25zdHJ1Y3Rvciggc2V0dGluZ3M6IFNldHRpbmdzICkgeyBcclxuICAgIHRoaXMuZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHNldHRpbmdzKTtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnREYXRhKCk6IG9iamVjdCB7XHJcbiAgICByZXR1cm4geydtaW5pbXVtJzogdGhpcy5kYXRhLm1pbiwgJ21pbic6IHRoaXMuZGF0YVsnY3VycmVudC1taW4nXSwgJ21heCc6IHRoaXMuZGF0YVsnY3VycmVudC1tYXgnXSwgJ3Bvc2l0aW9ucyc6IGAke3RoaXMuZGF0YS5tYXggLSB0aGlzLmRhdGEubWlufWB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi9tb2RlbC50cydcclxuXHJcbmludGVyZmFjZSBNeURhdGFPYmplY3Qge1xyXG4gIFtrZXk6IHN0cmluZ106IHN0cmluZ1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2FkZSB7XHJcbiAgcHJpdmF0ZSBtb2RlbDtcclxuXHJcbiAgY29uc3RydWN0b3IgKG1vZGVsKSB7XHJcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcclxuICB9XHJcblxyXG4gIHN0YXJ0SGFuZGVsc1Bvc2l0aW9uKCk6b2JqZWN0IHtcclxuICAgIHJldHVybiB0aGlzLm1vZGVsLmdldEN1cnJlbnREYXRhKCk7XHJcbiAgfTtcclxuICBcclxuICByZWZyZXNoTW9kZWxEYXRhKGRhdGE6IG9iamVjdCwgcHJvcDogc3RyaW5nKTogb2JqZWN0IHtcclxuICAgIGlmIChwcm9wID09PSAnbWluJykge1xyXG4gICAgICB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWluJ10gPSBNYXRoLnJvdW5kKHRoaXMubW9kZWwuZGF0YVsnbWluJ10gKyAoZGF0YVsnbWluJ10gLyAoK2RhdGFbJ3NsaWRlcldpZHRoJ10gLyAodGhpcy5tb2RlbC5kYXRhWydtYXgnXSAtIHRoaXMubW9kZWwuZGF0YVsnbWluJ10pKSkpO1xyXG4gICAgICByZXR1cm4geyAnbWluJzogdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1pbiddIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1tYXgnXSA9IE1hdGgucm91bmQodGhpcy5tb2RlbC5kYXRhWydtaW4nXSArIChkYXRhWydtYXgnXSAvICgrZGF0YVsnc2xpZGVyV2lkdGgnXSAvICh0aGlzLm1vZGVsLmRhdGFbJ21heCddIC0gdGhpcy5tb2RlbC5kYXRhWydtaW4nXSkpKSk7XHJcbiAgICAgIHJldHVybiB7ICdtYXgnOiB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWF4J10gfVxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBnZXRNb2RlbERhdGEoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7ICdtaW4nOiB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWluJ10sICdtYXgnOiB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWF4J119XHJcbiAgfTtcclxuXHJcbiAgZ2V0TWF4RGF0YSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZGF0YVsnbWF4J11cclxuICB9O1xyXG5cclxuICBnZXRQb3NzaWJsZVJhbmdlKCk6IG9iamVjdCB7XHJcbiAgICByZXR1cm4geydtYXgnOnRoaXMubW9kZWwuZGF0YS5tYXgsICdtaW4nOiB0aGlzLm1vZGVsLmRhdGEubWlufTtcclxuICB9O1xyXG5cclxuICBnZXRQb3NpdGlvbnNBbW91bnQoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7J3Bvc2l0aW9ucyc6IHRoaXMubW9kZWwuZGF0YS5tYXggLSB0aGlzLm1vZGVsLmRhdGEubWluLCAnbWluaW11bSc6IHRoaXMubW9kZWwuZGF0YS5taW59O1xyXG4gIH1cclxufTsiLCJpbXBvcnQgeyBTbGlkZXJNb3ZlbWVudCB9IGZyb20gXCIuLi92aWV3L2NvbXBvbmVudHMvc2xpZGVyLW1vdmVtZW50LnRzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJlc2VudGVyICh2aWV3LCBmYWNhZGUpOiB2b2lkIHtcclxuICBcclxuICB2aWV3LmRpc3BsYXlFbGVtZW50cygpO1xyXG4gIFxyXG4gIHZpZXcuc2xpZGVyTW92ZW1lbnQubXlEYXRhID0gbmV3IFByb3h5KHZpZXcuc2xpZGVyTW92ZW1lbnQubXlEYXRhLCB7XHJcbiAgICBzZXQodGFyZ2V0LCBwcm9wLCB2YWwpIHtcclxuICAgICAgaWYodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWw7XHJcbiAgICAgICAgbGV0IG1vZGVsUmVzdWx0ID0gZmFjYWRlLnJlZnJlc2hNb2RlbERhdGEodmFsLCBwcm9wKTtcclxuICAgICAgICB2aWV3LnJlZnJlc2hDdXJyZW50VmFsdWVzKG1vZGVsUmVzdWx0KVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG5cclxuICBpZiAodmlldy5zbGlkZXJNb3ZlbWVudC5zdGVwICE9PSBmYWxzZSkge1xyXG4gICAgbGV0IHN0ZXBBbW91bnQ6IG9iamVjdCA9IGZhY2FkZS5nZXRQb3NpdGlvbnNBbW91bnQoKTtcclxuICAgIHZpZXcuc2xpZGVyTW92ZW1lbnQuc3RlcEFtb3VudCA9IHN0ZXBBbW91bnRbJ3Bvc2l0aW9ucyddO1xyXG4gIH1cclxuICBcclxuXHJcbiAgdmlldy5taW5IYW5kZWwub25tb3VzZWRvd24gPSBmdW5jdGlvbiggZXZlbnQgKTogdm9pZCB7XHJcbiAgICB2aWV3LnNsaWRlck1vdmVtZW50Lm1pbkhhbmRlbExpc3RlbmVyKCBldmVudCApO1xyXG4gIH07XHJcblxyXG4gIHZpZXcubWF4SGFuZGVsLm9ubW91c2Vkb3duID0gZnVuY3Rpb24oZXZlbnQpOiB2b2lkIHtcclxuICAgIHZpZXcuc2xpZGVyTW92ZW1lbnQubWF4SGFuZGVsTGlzdGVuZXIoIGV2ZW50ICk7XHJcbiAgfTtcclxuXHJcbiAgaWYgKHZpZXcuc2V0dGluZ3NbJ3NpZGUtbWVudSddICE9PSBmYWxzZSkge1xyXG4gICAgdmlldy5oYW5kZWxMYWJlbFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgdmlldy5jYWxsSGFuZGVsTGFiZWxUb2dnbGVDaGFuZ2VyKHZpZXcpXHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBpZiAodmlldy5zZXR0aW5nc1snc2lkZS1tZW51J10gIT09IGZhbHNlKSB7XHJcbiAgICB2aWV3LmhhbmRlbFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgdmlldy5jYWxsTWF4SGFuZGVsVG9nZ2xlQ2hhbmdlcih2aWV3KVxyXG4gICAgICBpZiAodmlldy5oYW5kZWxUb2dnbGUuY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIGxldCByZXN1bHQ6IG51bWJlciA9IGZhY2FkZS5nZXRNYXhEYXRhKCk7XHJcbiAgICAgICAgdmlldy5yZWZyZXNoTWF4U2lkZU1lbnVEYXRhKHJlc3VsdClcclxuICAgICAgfTtcclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGlmICh2aWV3LnNldHRpbmdzWydzaWRlLW1lbnUnXSAhPT0gZmFsc2UpIHtcclxuICAgIHZpZXcucGxhbmVUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICAgIHZpZXcuc2xpZGVyTW92ZW1lbnQuY2hhbmdlUGxhbmUodmlldy5wbGFuZVRvZ2dsZSwgdmlldy5zbGlkZXJDb250YWluZXIsIHZpZXcubWluVmFsdWUsIHZpZXcubWF4VmFsdWUpO1xyXG4gICAgfSk7XHJcbiAgfTtcclxuICBcclxuICB2aWV3Lm1pblZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICB2aWV3LnNsaWRlck1vdmVtZW50LnNlbGVjdGlvbk9mUHJlcGFyZWRWYWx1ZSgnbWluJyk7XHJcbiAgfSk7XHJcblxyXG4gIHZpZXcubWF4VmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIHZpZXcuc2xpZGVyTW92ZW1lbnQuc2VsZWN0aW9uT2ZQcmVwYXJlZFZhbHVlKCdtYXgnKTtcclxuICB9KTtcclxuXHJcbiAgaWYgKHZpZXcuc2V0dGluZ3NbJ3NpZGUtbWVudSddICE9PSBmYWxzZSkge1xyXG4gICAgdmlldy5taW5JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IHBvc2l0aW9uczogb2JqZWN0ID0gZmFjYWRlLmdldFBvc2l0aW9uc0Ftb3VudCgpO1xyXG4gICAgICB2aWV3LnNsaWRlck1vdmVtZW50LnNpZGVNZW51SW5wdXRzVmFsdWVzVmFsaWRhdGlvbkNoZWNrZXIoJ21pbicsIHZpZXcubWluSW5wdXQudmFsdWUsIHBvc2l0aW9uc1sncG9zaXRpb25zJ10sIHBvc2l0aW9uc1snbWluaW11bSddKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgXHJcbiAgaWYgKHZpZXcuc2V0dGluZ3NbJ3NpZGUtbWVudSddICE9PSBmYWxzZSkge1xyXG4gICAgdmlldy5tYXhJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgICAgbGV0IHBvc2l0aW9uczogb2JqZWN0ID0gZmFjYWRlLmdldFBvc2l0aW9uc0Ftb3VudCgpO1xyXG4gICAgICB2aWV3LnNsaWRlck1vdmVtZW50LnNpZGVNZW51SW5wdXRzVmFsdWVzVmFsaWRhdGlvbkNoZWNrZXIoJ21heCcsIHZpZXcubWF4SW5wdXQudmFsdWUsIHBvc2l0aW9uc1sncG9zaXRpb25zJ10sIHBvc2l0aW9uc1snbWluaW11bSddKTtcclxuICAgIH0pO1xyXG4gIH07XHJcbiAgXHJcbiAgaWYgKHZpZXcuc2V0dGluZ3NbJ3NpZGUtbWVudSddICE9PSBmYWxzZSkge1xyXG4gICAgbGV0IHBvc3NpYmxlUmFuZ2U6IG9iamVjdCA9IGZhY2FkZS5nZXRQb3NzaWJsZVJhbmdlKCk7XHJcbiAgICB2aWV3LmlucHV0c1Bvc3NpYmxlUmFuZ2UocG9zc2libGVSYW5nZSwgdmlldy5taW5JbnB1dCwgdmlldy5tYXhJbnB1dCk7XHJcbiAgfTtcclxuICBcclxuXHJcbiAgbGV0IHN0YXJ0UG9zaXRpb25zOiBvYmplY3QgPSBmYWNhZGUuc3RhcnRIYW5kZWxzUG9zaXRpb24oKTtcclxuICB2aWV3LnNsaWRlck1vdmVtZW50LnN0YXJ0SGFuZGxlcnNQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMpO1xyXG4gIHZpZXcucmVmcmVzaEN1cnJlbnRWYWx1ZXMoc3RhcnRQb3NpdGlvbnMpO1xyXG59O1xyXG5cclxuXHJcbiIsImV4cG9ydCBjbGFzcyBIYW5kZWxzTGFiZWxzIHtcclxuICBtaW5MYWJlbDogSFRNTExhYmVsRWxlbWVudDtcclxuICBtYXhMYWJlbDogSFRNTExhYmVsRWxlbWVudDtcclxuICBsYWJlbElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGxldCBtaW46SFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsZXQgbWF4OkhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbWluLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlckhhbmRlbExhYmVsJyk7XHJcbiAgICBtYXguY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVySGFuZGVsTGFiZWwnKTtcclxuICAgIHRoaXMubWluTGFiZWwgPSBtaW47XHJcbiAgICB0aGlzLm1heExhYmVsID0gbWF4O1xyXG4gIH07XHJcbiAgXHJcbiAgZ2V0RWxlbWVudHMoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7J21pbic6IHRoaXMubWluTGFiZWwsICdtYXgnOiB0aGlzLm1heExhYmVsfTtcclxuICB9O1xyXG5cclxuICBkaXNwbGF5Q29udHJvbGxlcih0b2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQsIG1pbjogSFRNTExhYmVsRWxlbWVudCwgbWF4OiBIVE1MTGFiZWxFbGVtZW50KSB7XHJcbiAgICBpZiAodG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgbWluLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcclxuICAgICAgbWF4LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1pbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBtYXguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNlbnRlcmluZ1JlbGF0aXZlVG9IYW5kbGVzKG1pbkhhbmRlbFdpZHRoOiBudW1iZXIsIG1heEhhbmRlbFdpZHRoOiBudW1iZXIsIG1pbkxhYmVsV2lkdGg6IG51bWJlciwgbWF4TGFiZWxXaWR0aDogbnVtYmVyLCBtaW5MYWJlbDogSFRNTExhYmVsRWxlbWVudCwgbWF4TGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIG1pbkxhYmVsLnN0eWxlLmxlZnQgPSAobWluSGFuZGVsV2lkdGggLSBtaW5MYWJlbFdpZHRoKSAvIDIgKyAncHgnO1xyXG4gICAgbWF4TGFiZWwuc3R5bGUubGVmdCA9IChtYXhIYW5kZWxXaWR0aCAtIG1heExhYmVsV2lkdGgpIC8gMiArICdweCc7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEhhbmRlbHMge1xyXG5cclxuICBwcml2YXRlIG1pbkhhbmRlbDogSFRNTFNwYW5FbGVtZW50O1xyXG4gIHByaXZhdGUgbWF4SGFuZGVsOiBIVE1MU3BhbkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgbGV0IG1pbjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgbGV0IG1heDogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgbWluLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlckhhbmRlbCcpO1xyXG4gICAgbWF4LmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlckhhbmRlbCcpO1xyXG4gICAgdGhpcy5taW5IYW5kZWwgPSBtaW47XHJcbiAgICB0aGlzLm1heEhhbmRlbCA9IG1heDtcclxuICB9O1xyXG5cclxuICBnZXRFbGVtZW50cygpOiBvYmplY3Qge1xyXG4gICAgcmV0dXJuIHttaW46IHRoaXMubWluSGFuZGVsLCBtYXg6IHRoaXMubWF4SGFuZGVsfTtcclxuICB9O1xyXG5cclxuICBkaXNwbGF5Q29udHJvbGxlcih0b2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQsIG1heDogSFRNTFNwYW5FbGVtZW50KSB7XHJcbiAgICBpZiAodG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgbWF4LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWF4LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG59OyIsImV4cG9ydCBjbGFzcyBTZWxlY3RlZFJhbmdlIHtcclxuXHJcbiAgcHJpdmF0ZSBpbnRlcnZhbDogSFRNTERpdkVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgbGV0IGludGVydmFsOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgaW50ZXJ2YWwuY2xhc3NMaXN0LmFkZCgnbWFpbkludGVydmFsJyk7XHJcbiAgICB0aGlzLmludGVydmFsID0gaW50ZXJ2YWw7XHJcbiAgfVxyXG5cclxuICBnZXRFbGVtZW50cygpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICByZXR1cm4gdGhpcy5pbnRlcnZhbDtcclxuICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgU2lkZU1lbnUge1xyXG5cclxuICBjdXN0b21TbGlkZXJNZW51Q29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICBoYW5kZWxUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgaGFuZGVsTGFiZWxUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgcGxhbmVUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgbWluSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgbWF4SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgbGV0IHNsaWRlclZhbHVlUDpIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHNsaWRlclZhbHVlUC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJQYXJhZ1ZhbCcpO1xyXG4gICAgc2xpZGVyVmFsdWVQLmlubmVyVGV4dCA9ICfQotC10LrRg9GJ0LXQtSDQt9Cw0L3Rh9C10L3QuNC1OiAnO1xyXG4gICAgXHJcbiAgICBsZXQgbWluU2xpZGVyVmFsdWVPdXRwdXQ6SFRNTE91dHB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvdXRwdXQnKTtcclxuICAgIG1pblNsaWRlclZhbHVlT3V0cHV0LmNsYXNzTGlzdC5hZGQoJ3NsaWRlclZhbHVlJyk7XHJcbiAgICBtaW5TbGlkZXJWYWx1ZU91dHB1dC5pZCA9ICdtaW5TbGlkZXJWYWx1ZSc7XHJcbiAgICBsZXQgbWF4U2xpZGVyVmFsdWVPdXRwdXQ6SFRNTE91dHB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvdXRwdXQnKTtcclxuICAgIG1heFNsaWRlclZhbHVlT3V0cHV0LmNsYXNzTGlzdC5hZGQoJ3NsaWRlclZhbHVlJyk7XHJcbiAgICBtYXhTbGlkZXJWYWx1ZU91dHB1dC5pZCA9ICdtYXhTbGlkZXJWYWx1ZSc7XHJcbiAgICBcclxuICAgIGxldCBzbGlkZXJUb2dnbGVQOkhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgc2xpZGVyVG9nZ2xlUC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJQYXJhZycpO1xyXG4gICAgc2xpZGVyVG9nZ2xlUC5pbm5lclRleHQgPSAn0JLQutC70Y7Rh9C40YLRjCDQstGC0L7RgNC+0Lkg0L/QvtC70LfRg9C90L7QujogJztcclxuICAgIFxyXG4gICAgbGV0IHNsaWRlclRvZ2dsZUxhYmVsOkhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgc2xpZGVyVG9nZ2xlTGFiZWwuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyVG9nZ2xlJyk7XHJcblxyXG4gICAgbGV0IG1heFNsaWRlckhhbmRlbFRvZ2dsZTogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBtYXhTbGlkZXJIYW5kZWxUb2dnbGUuY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVySGFuZGVsVG9nZ2xlJyk7XHJcbiAgICBtYXhTbGlkZXJIYW5kZWxUb2dnbGUuaWQgPSAnbWF4U2xpZGVySGFuZGVsVG9nZ2xlJztcclxuICAgIG1heFNsaWRlckhhbmRlbFRvZ2dsZS5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKVxyXG5cclxuICAgIGxldCBjdXN0b21TbGlkZXJCb3JkZXI6IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGN1c3RvbVNsaWRlckJvcmRlci5jbGFzc0xpc3QuYWRkKCdjdXN0b21Ub2dnbGVTbGlkZXJCb3JkZXInKTtcclxuXHJcbiAgICBsZXQgY3VzdG9tU2xpZGVySW5wdXRzOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlcklucHV0cycpO1xyXG4gICAgXHJcbiAgICBsZXQgY3VzdG9tU2xpZGVySW5wdXRzUDogSFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNQLmlubmVyVGV4dCA9ICfQmNC30LzQtdC90LjRgtGMINC30L3QsNGH0LXQvdC40LU6ICc7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNQLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclBhcmFnJyk7XHJcblxyXG4gICAgbGV0IGN1c3RvbVNsaWRlcklucHV0c01pbkxhYmVsOiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01pbkxhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlcklucHV0bGFiZWwnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01pbkxhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2N1c3RvbVNsaWRlck1pbklucHV0Jyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNaW5MYWJlbC5pbm5lclRleHQgPSAnTWluOiAnO1xyXG4gICAgXHJcbiAgICBsZXQgY3VzdG9tU2xpZGVySW5wdXRzTWF4TGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWF4TGFiZWwuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVySW5wdXRsYWJlbCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWF4TGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY3VzdG9tU2xpZGVyTWF4SW5wdXQnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01heExhYmVsLmlubmVyVGV4dCA9ICdNYXg6ICc7XHJcblxyXG4gICAgbGV0IGN1c3RvbVNsaWRlcklucHV0c01pbjogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNaW4uY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyTWluSW5wdXQnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01pbi5pZCA9ICdjdXN0b21TbGlkZXJNaW5JbnB1dCc7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNaW4uc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xyXG5cclxuICAgIGxldCBjdXN0b21TbGlkZXJJbnB1dHNNYXg6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWF4LmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlck1heElucHV0Jyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXguaWQgPSAnY3VzdG9tU2xpZGVyTWF4SW5wdXQnO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWF4LnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yVmFsdWVzQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JWYWx1ZXNQOiBIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc1AuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyUGFyYWcnKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc1AuaW5uZXJUZXh0ID0gJ9CS0LrQu9GO0YfQuNGC0Ywg0LfQvdCw0YfQtdC90LjRjyDQv9C+0LQg0L/QvtC70LfRg9C90LrQsNC80Lg6ICc7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclZhbHVlc0xhYmVsOiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc0xhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclRvZ2dsZScpO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JWYWx1ZXNJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc0lucHV0LmNsYXNzTGlzdC5hZGQoJ3Nob3dWYWx1ZVRvZ2dsZScpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzSW5wdXQuaWQgPSAnc2hvd1ZhbHVlVG9nZ2xlJztcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yVmFsdWVzU3BhbjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzU3Bhbi5jbGFzc0xpc3QuYWRkKCdjdXN0b21Ub2dnbGVTbGlkZXJCb3JkZXInKTtcclxuICAgIFxyXG4gICAgbGV0IHRvZ2dsZUZvclBsYW5lQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JQbGFuZVA6IEhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdG9nZ2xlRm9yUGxhbmVQLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclBhcmFnJyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZVAuaW5uZXJUZXh0ID0gJ9CY0LfQvNC10L3QuNGC0Ywg0L/Qu9C+0YHQutC+0YHRgtGMOiAnO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JQbGFuZUxhYmVsOiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lTGFiZWwuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyVG9nZ2xlJyk7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclBsYW5lSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdG9nZ2xlRm9yUGxhbmVJbnB1dC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnY2hlY2tib3gnKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lSW5wdXQuY2xhc3NMaXN0LmFkZCgncGxhbmVUb2dnbGUnKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lSW5wdXQuaWQgPSAncGxhbmVUb2dnbGUnO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JQbGFuZVNwYW46IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lU3Bhbi5jbGFzc0xpc3QuYWRkKCdjdXN0b21Ub2dnbGVTbGlkZXJCb3JkZXInKTtcclxuXHJcblxyXG4gICAgbGV0IG1haW5TbGlkZXJDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgbWFpblNsaWRlckNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzbGlkZXJNZW51Q29udGFpbmVyJyk7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZChzbGlkZXJWYWx1ZVApO1xyXG4gICAgc2xpZGVyVmFsdWVQLmFwcGVuZChtaW5TbGlkZXJWYWx1ZU91dHB1dCk7XHJcbiAgICBzbGlkZXJWYWx1ZVAuYXBwZW5kKG1heFNsaWRlclZhbHVlT3V0cHV0KTtcclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuYXBwZW5kKHNsaWRlclRvZ2dsZVApO1xyXG4gICAgbWFpblNsaWRlckNvbnRhaW5lci5hcHBlbmQoc2xpZGVyVG9nZ2xlTGFiZWwpO1xyXG4gICAgc2xpZGVyVG9nZ2xlTGFiZWwuYXBwZW5kKG1heFNsaWRlckhhbmRlbFRvZ2dsZSwgY3VzdG9tU2xpZGVyQm9yZGVyKTtcclxuXHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHMuYXBwZW5kKGN1c3RvbVNsaWRlcklucHV0c1AsIGN1c3RvbVNsaWRlcklucHV0c01pbkxhYmVsLCBjdXN0b21TbGlkZXJJbnB1dHNNaW4sIGN1c3RvbVNsaWRlcklucHV0c01heExhYmVsLCBjdXN0b21TbGlkZXJJbnB1dHNNYXgpO1xyXG4gICAgbWFpblNsaWRlckNvbnRhaW5lci5hcHBlbmQoY3VzdG9tU2xpZGVySW5wdXRzKTtcclxuXHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNDb250YWluZXIuYXBwZW5kKHRvZ2dsZUZvclZhbHVlc1AsIHRvZ2dsZUZvclZhbHVlc0xhYmVsKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc0xhYmVsLmFwcGVuZCh0b2dnbGVGb3JWYWx1ZXNJbnB1dCwgdG9nZ2xlRm9yVmFsdWVzU3Bhbik7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZCh0b2dnbGVGb3JWYWx1ZXNDb250YWluZXIpO1xyXG5cclxuICAgIHRvZ2dsZUZvclBsYW5lQ29udGFpbmVyLmFwcGVuZCh0b2dnbGVGb3JQbGFuZVAsIHRvZ2dsZUZvclBsYW5lTGFiZWwpO1xyXG4gICAgdG9nZ2xlRm9yUGxhbmVMYWJlbC5hcHBlbmQodG9nZ2xlRm9yUGxhbmVJbnB1dCwgdG9nZ2xlRm9yUGxhbmVTcGFuKTtcclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuYXBwZW5kKHRvZ2dsZUZvclBsYW5lQ29udGFpbmVyKTtcclxuXHJcbiAgICB0aGlzLmN1c3RvbVNsaWRlck1lbnVDb250YWluZXIgPSBtYWluU2xpZGVyQ29udGFpbmVyO1xyXG4gICAgdGhpcy5oYW5kZWxUb2dnbGUgPSBtYXhTbGlkZXJIYW5kZWxUb2dnbGU7XHJcbiAgICB0aGlzLmhhbmRlbExhYmVsVG9nZ2xlID0gdG9nZ2xlRm9yVmFsdWVzSW5wdXQ7XHJcbiAgICB0aGlzLnBsYW5lVG9nZ2xlID0gdG9nZ2xlRm9yUGxhbmVJbnB1dDtcclxuICAgIHRoaXMubWluSW5wdXQgPSBjdXN0b21TbGlkZXJJbnB1dHNNaW47XHJcbiAgICB0aGlzLm1heElucHV0ID0gY3VzdG9tU2xpZGVySW5wdXRzTWF4O1xyXG4gIH07XHJcblxyXG4gIGdldEVsZW1lbnRzKCk6IG9iamVjdCB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBtZW51OiB0aGlzLmN1c3RvbVNsaWRlck1lbnVDb250YWluZXIsXHJcbiAgICAgIGhhbmRlbFRvZ2dsZTogdGhpcy5oYW5kZWxUb2dnbGUsXHJcbiAgICAgIGhhbmRlbExhYmVsVG9nZ2xlOiB0aGlzLmhhbmRlbExhYmVsVG9nZ2xlLFxyXG4gICAgICBwbGFuZVRvZ2dsZTogdGhpcy5wbGFuZVRvZ2dsZSxcclxuICAgICAgbWluSW5wdXQ6IHRoaXMubWluSW5wdXQsXHJcbiAgICAgIG1heElucHV0OiB0aGlzLm1heElucHV0XHJcbiAgICB9O1xyXG4gIH07XHJcbn07IiwiaW50ZXJmYWNlIEhhbmRlbHMge1xyXG4gIFtrZXk6IHN0cmluZ106IEhUTUxMYWJlbEVsZW1lbnQgfCBIVE1MSW5wdXRFbGVtZW50IHwgSFRNTERpdkVsZW1lbnQ7XHJcbn1cclxuaW50ZXJmYWNlIE15RGF0YU9iamVjdCB7XHJcbiAgW2tleTogc3RyaW5nXToge1xyXG4gICAgW2tleTogc3RyaW5nXTogc3RyaW5nXHJcbiAgfTtcclxufVxyXG5cclxuaW50ZXJmYWNlIFN0YXJ0SGFuZGVsc1Bvc2l0aW9uc0RhdGEge1xyXG4gIFtrZXk6IHN0cmluZ106IHN0cmluZ1xyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgU2xpZGVyTW92ZW1lbnQge1xyXG4gIHByaXZhdGUgbWluOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBtYXg6IEhUTUxTcGFuRWxlbWVudDtcclxuICBwcml2YXRlIG1pbkxhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIHByaXZhdGUgbWF4TGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBzbGlkZXJSYW5nZTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBoYW5kZWxzVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50IHwgYm9vbGVhbjtcclxuICBwcml2YXRlIHBsYW5lVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50IHwgYm9vbGVhbjtcclxuICBwcml2YXRlIGludGVydmFsOiBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIHN0ZXA6IG51bWJlciB8IHN0cmluZyB8IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBzdGVwQW1vdW50OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCBoYW5kZWxzOiBIYW5kZWxzKSB7XHJcbiAgICB0aGlzLm1pbiA9IGhhbmRlbHMubWluO1xyXG4gICAgdGhpcy5tYXggPSBoYW5kZWxzLm1heDtcclxuICAgIHRoaXMubWluTGFiZWwgPSBoYW5kZWxzLm1pbkxhYmVsO1xyXG4gICAgdGhpcy5tYXhMYWJlbD0gaGFuZGVscy5tYXhMYWJlbDtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UgPSBoYW5kZWxzLnNsaWRlclJhbmdlO1xyXG4gICAgdGhpcy5oYW5kZWxzVG9nZ2xlID0gaGFuZGVscy5oYW5kZWxzVG9nZ2xlO1xyXG4gICAgdGhpcy5wbGFuZVRvZ2dsZSA9IGhhbmRlbHMucGxhbmVUb2dnbGU7XHJcbiAgICB0aGlzLmludGVydmFsID0gaGFuZGVscy5pbnRlcnZhbDtcclxuICAgIHRoaXMuc3RlcCA9IGhhbmRlbHMuc3RlcDtcclxuICB9XHJcblxyXG4gIG15RGF0YTogTXlEYXRhT2JqZWN0ID0ge1xyXG4gICAgJ21pbic6IHt9LFxyXG4gICAgJ21heCc6IHt9XHJcbiAgfVxyXG5cclxuICBzdGFydEhhbmRsZXJzUG9zaXRpb25zKHBvc2l0aW9uVmFsdWVzOiBTdGFydEhhbmRlbHNQb3NpdGlvbnNEYXRhICkge1xyXG4gICAgbGV0IG1pbjogc3RyaW5nID0gKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpIC8gK3Bvc2l0aW9uVmFsdWVzLnBvc2l0aW9ucykgKiAoK3Bvc2l0aW9uVmFsdWVzWydtaW4nXSAtICtwb3NpdGlvblZhbHVlc1snbWluaW11bSddKSArICcnO1xyXG4gICAgbGV0IG1heDogc3RyaW5nID0gKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpIC8gK3Bvc2l0aW9uVmFsdWVzLnBvc2l0aW9ucykgKiAoK3Bvc2l0aW9uVmFsdWVzWydtYXgnXSAtICtwb3NpdGlvblZhbHVlc1snbWluaW11bSddKSArICcnO1xyXG4gICAgXHJcbiAgICB0aGlzLm15RGF0YS5taW4ubWluID0gbWluO1xyXG4gICAgdGhpcy5teURhdGEubWF4Lm1heCA9IG1heDtcclxuICAgIFxyXG4gICAgdGhpcy5taW4uc3R5bGUubGVmdCA9IG1pbiArICdweCc7XHJcbiAgICB0aGlzLm1heC5zdHlsZS5sZWZ0ID0gbWF4ICsgJ3B4JztcclxuICAgIFxyXG4gICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5sZWZ0ID0gK21pbiArIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICB0aGlzLmludGVydmFsLnN0eWxlLnJpZ2h0ID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSArbWF4KSAtIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgfVxyXG5cclxuICBtaW5IYW5kZWxMaXN0ZW5lciggZXZlbnQsIHRlc3Q6b2JqZWN0ICkge1xyXG4gICAgbGV0IG1pbiA9IHRoaXMubWluO1xyXG4gICAgbGV0IG1heCA9IHRoaXMubWF4O1xyXG4gICAgbGV0IG1pbkxhYmVsID0gdGhpcy5taW5MYWJlbDtcclxuICAgIGxldCBzbGlkZXJSYW5nZSA9IHRoaXMuc2xpZGVyUmFuZ2U7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICBsZXQgc2hpZnQ6IG51bWJlcjtcclxuICAgIGxldCBkb3VibGVIYW5kZWxzOiBib29sZWFuO1xyXG4gICAgbGV0IHZlcnRpY2FsOiBib29sZWFuO1xyXG4gICAgaWYgKHR5cGVvZiB0aGlzLmhhbmRlbHNUb2dnbGUgPT09ICdib29sZWFuJyAmJiB0eXBlb2YgdGhpcy5wbGFuZVRvZ2dsZSA9PT0gJ2Jvb2xlYW4nKSB7XHJcbiAgICAgIGRvdWJsZUhhbmRlbHMgPSB0aGlzLmhhbmRlbHNUb2dnbGU7XHJcbiAgICAgIHZlcnRpY2FsID0gdGhpcy5wbGFuZVRvZ2dsZTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGRvdWJsZUhhbmRlbHMgPSB0aGlzLmhhbmRlbHNUb2dnbGUuY2hlY2tlZDtcclxuICAgICAgdmVydGljYWwgPSB0aGlzLnBsYW5lVG9nZ2xlLmNoZWNrZWQ7XHJcbiAgICB9O1xyXG4gICAgbGV0IGludGVydmFsID0gdGhpcy5pbnRlcnZhbDtcclxuICAgIGxldCBzdGVwOiBudW1iZXI7XHJcbiAgICBpZiAodGhpcy5zdGVwICE9PSBmYWxzZSkge1xyXG4gICAgICBzdGVwID0gKHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gbWluLm9mZnNldFdpZHRoKSAvIHRoaXMuc3RlcEFtb3VudCAqICt0aGlzLnN0ZXA7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgIHNoaWZ0ID0gZXZlbnQuY2xpZW50WSAtIG1pbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBtaW4ub2Zmc2V0V2lkdGg7XHJcbiAgICB9IGVsc2UgeyAgXHJcbiAgICAgIHNoaWZ0ID0gZXZlbnQuY2xpZW50WCAtIG1pbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuICAgIFxyXG4gICAgaWYoIHRlc3QgIT09IHVuZGVmaW5lZCApIHtcclxuICAgICAgb25Nb3VzZU1vdmUoIHRlc3QgKVxyXG4gICAgfTtcclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XHJcbiAgICAgIGxldCBuZXdMZWZ0OiBudW1iZXI7XHJcblxyXG4gICAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgICBuZXdMZWZ0ID0gc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSAoZXZlbnQuY2xpZW50WSAtIHNoaWZ0IC0gc2xpZGVyUmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdMZWZ0ID0gZXZlbnQuY2xpZW50WCAtIHNoaWZ0IC0gc2xpZGVyUmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGxldCByaWdodEVkZ2UgPSBzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG1pbi5vZmZzZXRXaWR0aDtcclxuICAgICAgXHJcbiAgICAgIGlmICh0aGF0LnN0ZXAgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKG5ld0xlZnQgPj0gK3RoYXQubXlEYXRhLm1pbi5taW4gKyBzdGVwIHx8IG5ld0xlZnQgPD0gK3RoYXQubXlEYXRhLm1pbi5taW4gLSBzdGVwKSB7XHJcbiAgICAgICAgICBuZXdMZWZ0ID49ICt0aGF0Lm15RGF0YS5taW4ubWluICsgc3RlcCA/IG5ld0xlZnQgPSArdGhhdC5teURhdGEubWluLm1pbiArIHN0ZXAgOiBmYWxzZTtcclxuICAgICAgICAgIG5ld0xlZnQgPD0gK3RoYXQubXlEYXRhLm1pbi5taW4gLSBzdGVwID8gbmV3TGVmdCA9ICt0aGF0Lm15RGF0YS5taW4ubWluIC0gc3RlcCA6IGZhbHNlO1xyXG4gICAgICAgICAgcmVuZXdhbE9mUG9zaXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVuZXdhbE9mUG9zaXRpb24oKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHJlbmV3YWxPZlBvc2l0aW9uKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAobmV3TGVmdCA8IDApIHtcclxuICAgICAgICAgIG5ld0xlZnQgPSAwO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGRvdWJsZUhhbmRlbHMpIHsgXHJcbiAgICAgICAgICBpZiAobmV3TGVmdCA+PSArdGhhdC5teURhdGEubWF4WydtYXgnXSAtIG1heC5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgICAgICBuZXdMZWZ0ID0gK3RoYXQubXlEYXRhLm1heFsnbWF4J10gLSBtYXgub2Zmc2V0V2lkdGhcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChuZXdMZWZ0ID4gcmlnaHRFZGdlKSB7XHJcbiAgICAgICAgICAgIG5ld0xlZnQgPSByaWdodEVkZ2U7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1pbi5zdHlsZS5sZWZ0ID0gbmV3TGVmdCArICdweCc7XHJcbiAgICAgICAgaW50ZXJ2YWwuc3R5bGUubGVmdCA9IG5ld0xlZnQgKyBtaW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgICAgICBcclxuICAgICAgICBpZiAobmV3TGVmdCAhPT0gdW5kZWZpbmVkIHx8IHJpZ2h0RWRnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGF0Lm15RGF0YVsnbWluJ10gPSB7J21pbic6IGAke25ld0xlZnR9YCwgJ3NsaWRlcldpZHRoJzogYCR7c2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSBtaW4ub2Zmc2V0V2lkdGh9YH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1pbkxhYmVsLnN0eWxlLmxlZnQgPSAoKG1pbi5vZmZzZXRXaWR0aCAtIG1pbkxhYmVsLm9mZnNldFdpZHRoKSAtIDEpIC8gMiArICdweCc7XHJcbiAgICAgIH0gIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTW91c2VVcCgpIHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1heEhhbmRlbExpc3RlbmVyKCBldmVudCwgdGVzdDpvYmplY3QgKSB7XHJcbiAgICBsZXQgbWF4ID0gdGhpcy5tYXg7XHJcbiAgICBsZXQgbWluID0gdGhpcy5taW47XHJcbiAgICBsZXQgc2xpZGVyUmFuZ2UgPSB0aGlzLnNsaWRlclJhbmdlO1xyXG4gICAgbGV0IHNoaWZ0OiBudW1iZXI7XHJcbiAgICBsZXQgbWF4TGFiZWwgPSB0aGlzLm1heExhYmVsO1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgbGV0IGRvdWJsZUhhbmRlbHM6IGJvb2xlYW47XHJcbiAgICBsZXQgdmVydGljYWw6IGJvb2xlYW47XHJcbiAgICBpZiAodHlwZW9mIHRoaXMuaGFuZGVsc1RvZ2dsZSA9PT0gJ2Jvb2xlYW4nICYmIHR5cGVvZiB0aGlzLnBsYW5lVG9nZ2xlID09PSAnYm9vbGVhbicpIHtcclxuICAgICAgZG91YmxlSGFuZGVscyA9IHRoaXMuaGFuZGVsc1RvZ2dsZTtcclxuICAgICAgdmVydGljYWwgPSB0aGlzLnBsYW5lVG9nZ2xlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZG91YmxlSGFuZGVscyA9IHRoaXMuaGFuZGVsc1RvZ2dsZS5jaGVja2VkO1xyXG4gICAgICB2ZXJ0aWNhbCA9IHRoaXMucGxhbmVUb2dnbGUuY2hlY2tlZDtcclxuICAgIH07XHJcbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmludGVydmFsO1xyXG4gICAgXHJcbiAgICBsZXQgc3RlcDogbnVtYmVyO1xyXG4gICAgaWYgKHRoaXMuc3RlcCAhPT0gZmFsc2UpIHtcclxuICAgICAgc3RlcCA9IChzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG1pbi5vZmZzZXRXaWR0aCkgLyB0aGlzLnN0ZXBBbW91bnQgKiArdGhpcy5zdGVwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICBzaGlmdCA9IGV2ZW50LmNsaWVudFkgLSBtYXguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gbWF4Lm9mZnNldFdpZHRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hpZnQgPSBldmVudC5jbGllbnRYIC0gbWF4LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cclxuICAgIGlmKCB0ZXN0ICE9PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgIG9uTW91c2VNb3ZlKCB0ZXN0IClcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50ICkge1xyXG4gICAgICBsZXQgbmV3TGVmdDogbnVtYmVyO1xyXG4gICAgICBcclxuICAgICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgICAgbmV3TGVmdCA9IHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gKGV2ZW50LmNsaWVudFkgLSBzaGlmdCAtIHNsaWRlclJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3TGVmdCA9IGV2ZW50LmNsaWVudFggLSBzaGlmdCAtIHNsaWRlclJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCByaWdodEVkZ2UgPSBzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG1heC5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAgIGlmICh0aGF0LnN0ZXAgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKG5ld0xlZnQgPj0gK3RoYXQubXlEYXRhLm1heC5tYXggKyBzdGVwIHx8IG5ld0xlZnQgPD0gK3RoYXQubXlEYXRhLm1heC5tYXggLSBzdGVwKSB7XHJcbiAgICAgICAgICBuZXdMZWZ0ID49ICt0aGF0Lm15RGF0YS5tYXgubWF4ICsgc3RlcCA/IG5ld0xlZnQgPSArdGhhdC5teURhdGEubWF4Lm1heCArIHN0ZXAgOiBmYWxzZTtcclxuICAgICAgICAgIG5ld0xlZnQgPD0gK3RoYXQubXlEYXRhLm1heC5tYXggLSBzdGVwID8gbmV3TGVmdCA9ICt0aGF0Lm15RGF0YS5tYXgubWF4IC0gc3RlcCA6IGZhbHNlO1xyXG4gICAgICAgICAgcmVuZXdhbE9mUG9zaXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVuZXdhbE9mUG9zaXRpb24oKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHJlbmV3YWxPZlBvc2l0aW9uKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAobmV3TGVmdCA8IDApIHtcclxuICAgICAgICAgIG5ld0xlZnQgPSAwO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChuZXdMZWZ0ID4gcmlnaHRFZGdlKSB7XHJcbiAgICAgICAgICBuZXdMZWZ0ID0gcmlnaHRFZGdlO1xyXG4gICAgICAgIH07XHJcbiAgXHJcbiAgICAgICAgaWYgKG5ld0xlZnQgPD0gK3RoYXQubXlEYXRhLm1pblsnbWluJ10gKyBtaW4ub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICAgIG5ld0xlZnQgPSArdGhhdC5teURhdGEubWluWydtaW4nXSArIG1pbi5vZmZzZXRXaWR0aFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWF4LnN0eWxlLmxlZnQgPSBuZXdMZWZ0ICsgJ3B4JztcclxuICAgICAgICBpbnRlcnZhbC5zdHlsZS5yaWdodCA9IChzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG5ld0xlZnQpIC0gbWF4Lm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgXHJcbiAgICAgICAgaWYgKG5ld0xlZnQgIT09IHVuZGVmaW5lZCB8fCByaWdodEVkZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdGhhdC5teURhdGFbJ21heCddID0geydtYXgnOiBgJHtuZXdMZWZ0fWAsICdzbGlkZXJXaWR0aCc6IGAke3NsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gbWF4Lm9mZnNldFdpZHRofWB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBtYXhMYWJlbC5zdHlsZS5sZWZ0ID0gKChtYXgub2Zmc2V0V2lkdGggLSBtYXhMYWJlbC5vZmZzZXRXaWR0aCkgLSAxKSAvIDIgKyAncHgnO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZVVwKCkge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGxhbmUoIHRvZ2dsZTpIVE1MSW5wdXRFbGVtZW50IHwgYm9vbGVhbiwgYm9keTogSFRNTERpdkVsZW1lbnQsIG1pblZhbHVlOiBIVE1MUGFyYWdyYXBoRWxlbWVudCwgbWF4VmFsdWU6IEhUTUxQYXJhZ3JhcGhFbGVtZW50KTogdm9pZCB7XHJcbiAgICBpZiAodG9nZ2xlLmNoZWNrZWQgfHwgdG9nZ2xlID09PSB0cnVlKSB7XHJcbiAgICAgIGJvZHkuc3R5bGUuaGVpZ2h0ID0gYm9keS5vZmZzZXRXaWR0aCArICdweCc7XHJcbiAgICAgIHRoaXMuc2xpZGVyUmFuZ2Uuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgtOTBkZWcpJztcclxuICAgICAgdGhpcy5zbGlkZXJSYW5nZS5zdHlsZS50b3AgPSBib2R5Lm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICAgIHRoaXMubWluTGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnbWluU2xpZGVySGFuZGVsTGFiZWwnKTtcclxuICAgICAgdGhpcy5tYXhMYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCdtYXhTbGlkZXJIYW5kZWxMYWJlbCcpO1xyXG4gICAgICB0aGlzLm1pbkxhYmVsLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlckhhbmRlbExhYmVsVmVydGljYWwnKTtcclxuICAgICAgdGhpcy5tYXhMYWJlbC5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJIYW5kZWxMYWJlbFZlcnRpY2FsJyk7XHJcbiAgICAgIG1pblZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ21pblNsaWRlclBvaW50Jyk7XHJcbiAgICAgIG1heFZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ21heFNsaWRlclBvaW50Jyk7XHJcbiAgICAgIG1pblZhbHVlLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlclBvaW50VmVydGljYWwnKTtcclxuICAgICAgbWF4VmFsdWUuY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVyUG9pbnRWZXJ0aWNhbCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm9keS5zdHlsZS5oZWlnaHQgPSAnJztcclxuICAgICAgdGhpcy5zbGlkZXJSYW5nZS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcclxuICAgICAgdGhpcy5zbGlkZXJSYW5nZS5zdHlsZS50b3AgPSAnJztcclxuICAgICAgdGhpcy5taW5MYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCdtaW5TbGlkZXJIYW5kZWxMYWJlbFZlcnRpY2FsJyk7XHJcbiAgICAgIHRoaXMubWF4TGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnbWF4U2xpZGVySGFuZGVsTGFiZWxWZXJ0aWNhbCcpO1xyXG4gICAgICB0aGlzLm1pbkxhYmVsLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlckhhbmRlbExhYmVsJyk7XHJcbiAgICAgIHRoaXMubWF4TGFiZWwuY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVySGFuZGVsTGFiZWwnKTtcclxuICAgICAgbWluVmFsdWUuY2xhc3NMaXN0LnJlbW92ZSgnbWluU2xpZGVyUG9pbnRWZXJ0aWNhbCcpO1xyXG4gICAgICBtYXhWYWx1ZS5jbGFzc0xpc3QucmVtb3ZlKCdtYXhTbGlkZXJQb2ludFZlcnRpY2FsJyk7XHJcbiAgICAgIG1pblZhbHVlLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlclBvaW50Jyk7XHJcbiAgICAgIG1heFZhbHVlLmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlclBvaW50Jyk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHNlbGVjdGlvbk9mUHJlcGFyZWRWYWx1ZSh0YXJnZXQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHRhcmdldCA9PT0gJ21pbicpIHtcclxuICAgICAgdGhpcy5teURhdGFbJ21pbiddID0geydtaW4nOiAnMCcsICdzbGlkZXJXaWR0aCc6YCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWB9XHJcbiAgICAgIHRoaXMubWluLnN0eWxlLmxlZnQgPSAnMHB4J1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLmxlZnQgPSAwICsgdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLmhhbmRlbHNUb2dnbGUuY2hlY2tlZCA9PT0gdHJ1ZSB8fCB0aGlzLmhhbmRlbHNUb2dnbGUgPT09IHRydWUpIHtcclxuICAgICAgICB0aGlzLm15RGF0YVsnbWF4J10gPSB7J21heCc6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gLCAnc2xpZGVyV2lkdGgnOmAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gfTtcclxuICAgICAgICB0aGlzLm1heC5zdHlsZS5sZWZ0ID0gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgICB0aGlzLmludGVydmFsLnN0eWxlLnJpZ2h0ID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoKSArIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5teURhdGFbJ21pbiddID0geydtaW4nOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGh9YCwgJ3NsaWRlcldpZHRoJzpgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGh9YH07XHJcbiAgICAgICAgdGhpcy5taW4uc3R5bGUubGVmdCA9IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCArICdweCc7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5sZWZ0ID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkgKyB0aGlzLm1pbi5vZmZzZXRXaWR0aCAvIDIgKydweCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNpZGVNZW51SW5wdXRzVmFsdWVzVmFsaWRhdGlvbkNoZWNrZXIodGFyZ2V0OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIsIHBvc2l0aW9uczogbnVtYmVyLCBtaW5pbXVtOiBudW1iZXIpOiB2b2lkIHtcclxuICBcclxuICAgIGlmICh0YXJnZXQgPT09ICdtaW4nICYmIHRoaXMuaGFuZGVsc1RvZ2dsZS5jaGVja2VkKSB7XHJcbiAgICAgIGxldCBtaW46IHN0cmluZyA9ICgodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSAvIHBvc2l0aW9ucykgKiAodmFsdWUgLSBtaW5pbXVtKSArICcnO1xyXG5cclxuICAgICAgaWYgKCttaW4gPj0gK3RoaXMubXlEYXRhLm1heC5tYXggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgIG1pbiA9ICt0aGlzLm15RGF0YS5tYXgubWF4IC0gdGhpcy5taW4ub2Zmc2V0V2lkdGggKyAnJztcclxuICAgICAgfSBlbHNlIGlmKCttaW4gPCAwKSB7XHJcbiAgICAgICAgbWluID0gJzAnO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5teURhdGFbJ21pbiddID0geydtaW4nOiBtaW4sICdzbGlkZXJXaWR0aCc6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gfTtcclxuICAgICAgdGhpcy5taW4uc3R5bGUubGVmdCA9IG1pbiArICdweCc7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUubGVmdCA9ICttaW4gKyB0aGlzLm1pbi5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gICAgfSBlbHNlIGlmICh0YXJnZXQgPT09ICdtaW4nKSB7XHJcbiAgICAgIGxldCBtaW46IHN0cmluZyA9ICgodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSAvIHBvc2l0aW9ucykgKiAodmFsdWUgLSBtaW5pbXVtKSArICcnO1xyXG5cclxuICAgICAgaWYoK21pbiA8IDApIHtcclxuICAgICAgICBtaW4gPSAnMCc7XHJcbiAgICAgIH0gZWxzZSBpZiAoK21pbiA+IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgIG1pbiA9ICh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpICsgJyc7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLm15RGF0YVsnbWluJ10gPSB7J21pbic6IG1pbiwgJ3NsaWRlcldpZHRoJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWB9O1xyXG4gICAgICB0aGlzLm1pbi5zdHlsZS5sZWZ0ID0gbWluICsgJ3B4JztcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5sZWZ0ID0gK21pbiArIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gJ21heCcpIHtcclxuICAgICAgbGV0IG1heDogc3RyaW5nID0gKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXgub2Zmc2V0V2lkdGgpIC8gcG9zaXRpb25zKSAqICh2YWx1ZSAtIG1pbmltdW0pICsgJyc7XHJcblxyXG4gICAgICBpZiAoK21heCA8PSArdGhpcy5teURhdGEubWluLm1pbiArIHRoaXMubWluLm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgbWF4ID0gK3RoaXMubXlEYXRhLm1pbi5taW4gKyB0aGlzLm1heC5vZmZzZXRXaWR0aCArICcnO1xyXG4gICAgICB9IGVsc2UgaWYoK21heCA+IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCl7XHJcbiAgICAgICAgbWF4ID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkgKyAnJztcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMubXlEYXRhWydtYXgnXSA9IHsnbWF4JzogbWF4LCAnc2xpZGVyV2lkdGgnOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXgub2Zmc2V0V2lkdGh9YH07XHJcbiAgICAgIHRoaXMubWF4LnN0eWxlLmxlZnQgPSBtYXggKyAncHgnO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLnJpZ2h0ID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSArbWF4KSAtIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICB9XHJcbiAgfTtcclxufTsiLCJleHBvcnQgY2xhc3MgU2xpZGVyUmFuZ2Uge1xyXG5cclxuICByYW5nZTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgbGV0IGVsZW06IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ3NsaWRlclJhbmdlJyk7XHJcbiAgICB0aGlzLnJhbmdlID0gZWxlbTtcclxuICB9O1xyXG5cclxuICBnZXRFbGVtZW50cygpOiBIVE1MRGl2RWxlbWVudHtcclxuICAgIHJldHVybiB0aGlzLnJhbmdlO1xyXG4gIH07XHJcblxyXG59OyIsImV4cG9ydCBjbGFzcyBWYWx1ZVJhbmdlIHtcclxuICBtaW5WYWx1ZTogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgbWF4VmFsdWU6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvciAodmFsdWVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSkge1xyXG4gICAgbGV0IG1pbjpIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBtYXg6SFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBtaW4uaW5uZXJUZXh0ID0gdmFsdWVzLm1pbjtcclxuICAgIG1heC5pbm5lclRleHQgPSB2YWx1ZXMubWF4O1xyXG4gICAgbWluLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlclBvaW50Jyk7XHJcbiAgICBtYXguY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVyUG9pbnQnKTtcclxuICAgIHRoaXMubWluVmFsdWUgPSBtaW47XHJcbiAgICB0aGlzLm1heFZhbHVlID0gbWF4O1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudHMoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7bWluOiB0aGlzLm1pblZhbHVlLCBtYXg6IHRoaXMubWF4VmFsdWV9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtTbGlkZXJSYW5nZX0gZnJvbSAnLi9jb21wb25lbnRzL3NsaWRlci1yYW5nZS50cyc7XHJcbmltcG9ydCB7SGFuZGVsc30gZnJvbSAnLi9jb21wb25lbnRzL2hhbmRlbHMudHMnO1xyXG5pbXBvcnQge1NsaWRlck1vdmVtZW50fSBmcm9tICcuL2NvbXBvbmVudHMvc2xpZGVyLW1vdmVtZW50LnRzJztcclxuaW1wb3J0IHtTaWRlTWVudX0gZnJvbSAnLi9jb21wb25lbnRzL3NpZGUtbWVudS50cyc7XHJcbmltcG9ydCB7VmFsdWVSYW5nZX0gZnJvbSAnLi9jb21wb25lbnRzL3ZhbHVlUmFuZ2UudHMnO1xyXG5pbXBvcnQge0hhbmRlbHNMYWJlbHN9IGZyb20gJy4vY29tcG9uZW50cy9oYW5kZWxzLWxhYmVscy50cyc7XHJcbmltcG9ydCB7U2VsZWN0ZWRSYW5nZX0gZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdGVkLXJhbmdlLnRzJztcclxuXHJcbmludGVyZmFjZSBTZXR0aW5ncyB7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgYm9vbGVhblxyXG59O1xyXG5cclxuaW50ZXJmYWNlIFNpZGVNZW51RWxlbWVudHMge1xyXG4gIFtrZXk6IHN0cmluZ106IEhUTUxEaXZFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudDtcclxufTtcclxuXHJcbmludGVyZmFjZSBEYXRhT2ZWYWx1ZVJlZnJlc2gge1xyXG4gICdtaW4nPzogc3RyaW5nO1xyXG4gICdtYXgnPzogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXcge1xyXG4gIHByaXZhdGUgdGhhdDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3M7XHJcbiAgcHJpdmF0ZSBzbGlkZXJSYW5nZTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBzbGlkZXJDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHByaXZhdGUgbWluSGFuZGVsOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBtYXhIYW5kZWw6IEhUTUxTcGFuRWxlbWVudDtcclxuICBwcml2YXRlIHNsaWRlck1vdmVtZW50OiBPYmplY3Q7XHJcbiAgcHJpdmF0ZSBzaWRlTWVudTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBzaWRlTWVudUNvbnRhaW5lcjogU3RyaW5nIHwgQm9vbGVhbjtcclxuICBwcml2YXRlIG1pblZhbHVlOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICBwcml2YXRlIG1heFZhbHVlOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICBwcml2YXRlIG1pbkxhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIHByaXZhdGUgbWF4TGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBoYW5kZWxUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBoYW5kZWxMYWJlbFRvZ2dsZTogSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIHBsYW5lVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHByaXZhdGUgbWluSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBtYXhJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIGludGVydmFsOiBIVE1MRGl2RWxlbWVudDtcclxuICBcclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHRhcmdldDogSFRNTERpdkVsZW1lbnQsIHNldHRpbmdzOiBTZXR0aW5ncykge1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG4gICAgdGhpcy50aGF0ID0gdGFyZ2V0O1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZSA9IG5ldyBTbGlkZXJSYW5nZSgpLmdldEVsZW1lbnRzKCk7XHJcbiAgICB0aGlzLm1pbkhhbmRlbCA9IG5ldyBIYW5kZWxzKCkuZ2V0RWxlbWVudHMoKS5taW47XHJcbiAgICB0aGlzLm1heEhhbmRlbCA9IG5ldyBIYW5kZWxzKCkuZ2V0RWxlbWVudHMoKS5tYXg7XHJcbiAgICB0aGlzLm1pblZhbHVlID0gbmV3IFZhbHVlUmFuZ2UoeydtaW4nOiB0aGlzLnNldHRpbmdzWydtaW4nXSwgJ21heCc6IHRoaXMuc2V0dGluZ3NbJ21heCddfSkuZ2V0RWxlbWVudHMoKS5taW47XHJcbiAgICB0aGlzLm1heFZhbHVlID0gbmV3IFZhbHVlUmFuZ2UoeydtaW4nOiB0aGlzLnNldHRpbmdzWydtaW4nXSwgJ21heCc6IHRoaXMuc2V0dGluZ3NbJ21heCddfSkuZ2V0RWxlbWVudHMoKS5tYXg7XHJcbiAgICBpZiAoc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlKSB7XHJcbiAgICAgIGxldCBzaWRlTWVudUVsZW1lbnRzOiBTaWRlTWVudUVsZW1lbnRzID0gbmV3IFNpZGVNZW51KCkuZ2V0RWxlbWVudHMoKTtcclxuICAgICAgdGhpcy5zaWRlTWVudSA9IHNpZGVNZW51RWxlbWVudHMubWVudTtcclxuICAgICAgdGhpcy5oYW5kZWxUb2dnbGUgPSBzaWRlTWVudUVsZW1lbnRzLmhhbmRlbFRvZ2dsZTtcclxuICAgICAgdGhpcy5oYW5kZWxMYWJlbFRvZ2dsZSA9IHNpZGVNZW51RWxlbWVudHMuaGFuZGVsTGFiZWxUb2dnbGU7XHJcbiAgICAgIHRoaXMucGxhbmVUb2dnbGUgPSBzaWRlTWVudUVsZW1lbnRzLnBsYW5lVG9nZ2xlO1xyXG4gICAgICB0aGlzLm1pbklucHV0ID0gc2lkZU1lbnVFbGVtZW50cy5taW5JbnB1dDtcclxuICAgICAgdGhpcy5tYXhJbnB1dCA9IHNpZGVNZW51RWxlbWVudHMubWF4SW5wdXQ7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5zaWRlTWVudUNvbnRhaW5lciA9IHNldHRpbmdzLnNpZGVNZW51Q29udGFpbmVyO1xyXG4gICAgdGhpcy5taW5MYWJlbCA9IG5ldyBIYW5kZWxzTGFiZWxzKCkuZ2V0RWxlbWVudHMoKS5taW47XHJcbiAgICB0aGlzLm1heExhYmVsID0gbmV3IEhhbmRlbHNMYWJlbHMoKS5nZXRFbGVtZW50cygpLm1heDtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBuZXcgU2VsZWN0ZWRSYW5nZSgpLmdldEVsZW1lbnRzKCk7XHJcbiAgICBpZih0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSAhPT0gZmFsc2UpIHtcclxuICAgICAgdGhpcy5zbGlkZXJNb3ZlbWVudCA9IG5ldyBTbGlkZXJNb3ZlbWVudCh7J21pbic6IHRoaXMubWluSGFuZGVsLCAnbWF4JzogdGhpcy5tYXhIYW5kZWwsJ21pbkxhYmVsJzogdGhpcy5taW5MYWJlbCwgJ21heExhYmVsJzogdGhpcy5tYXhMYWJlbCAsJ3NsaWRlclJhbmdlJzogdGhpcy5zbGlkZXJSYW5nZSwgJ3BsYW5lVG9nZ2xlJzogdGhpcy5wbGFuZVRvZ2dsZSwgJ2hhbmRlbHNUb2dnbGUnOiB0aGlzLmhhbmRlbFRvZ2dsZSwgJ2ludGVydmFsJzogdGhpcy5pbnRlcnZhbCwgJ3N0ZXAnOiB0aGlzLnNldHRpbmdzLnN0ZXB9KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2xpZGVyTW92ZW1lbnQgPSBuZXcgU2xpZGVyTW92ZW1lbnQoeydtaW4nOiB0aGlzLm1pbkhhbmRlbCwgJ21heCc6IHRoaXMubWF4SGFuZGVsLCdtaW5MYWJlbCc6IHRoaXMubWluTGFiZWwsICdtYXhMYWJlbCc6IHRoaXMubWF4TGFiZWwgLCdzbGlkZXJSYW5nZSc6IHRoaXMuc2xpZGVyUmFuZ2UsICdwbGFuZVRvZ2dsZSc6IHRoaXMuc2V0dGluZ3MudmVydGljYWwsICdoYW5kZWxzVG9nZ2xlJzogdGhpcy5zZXR0aW5ncy5yYW5nZSwgJ2ludGVydmFsJzogdGhpcy5pbnRlcnZhbCwgJ3N0ZXAnOiB0aGlzLnNldHRpbmdzLnN0ZXB9KTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgZGlzcGxheUVsZW1lbnRzKCk6IHZvaWQge1xyXG4gICAgbGV0IGNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdzbGlkZXJCb2R5Jyk7XHJcbiAgICBjb250YWluZXIuYXBwZW5kKHRoaXMuc2xpZGVyUmFuZ2UpO1xyXG4gICAgdGhpcy50aGF0LmFwcGVuZChjb250YWluZXIpO1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZS5hcHBlbmQodGhpcy5taW5IYW5kZWwpO1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZS5hcHBlbmQodGhpcy5tYXhIYW5kZWwpO1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZS5hcHBlbmQodGhpcy5taW5WYWx1ZSk7XHJcbiAgICB0aGlzLnNsaWRlclJhbmdlLmFwcGVuZCh0aGlzLm1heFZhbHVlKTtcclxuICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUuaGVpZ2h0ID0gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZS5hcHBlbmQodGhpcy5pbnRlcnZhbCk7XHJcbiAgICB0aGlzLm1pbkhhbmRlbC5hcHBlbmQodGhpcy5taW5MYWJlbCk7XHJcbiAgICB0aGlzLm1heEhhbmRlbC5hcHBlbmQodGhpcy5tYXhMYWJlbCk7XHJcbiAgICB0aGlzLnNsaWRlckNvbnRhaW5lciA9IGNvbnRhaW5lcjtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3NbJ2hhbmRlbHNMYWJlbCddID09PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLm1pbkxhYmVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIHRoaXMubWF4TGFiZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddICE9PSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuaGFuZGVsTGFiZWxUb2dnbGUuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLnNpZGVNZW51Q29udGFpbmVyICE9PSAnZmFsc2UnKSB7XHJcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGhpcy5zaWRlTWVudUNvbnRhaW5lcikuYXBwZW5kKHRoaXMuc2lkZU1lbnUpXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnRoYXQuYXBwZW5kKHRoaXMuc2lkZU1lbnUpXHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1tcInJhbmdlXCJdID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMubWF4SGFuZGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICBpZih0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSAhPT0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLmhhbmRlbFRvZ2dsZS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLm1heElucHV0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLnNldHRpbmdzWyd2ZXJ0aWNhbCddID09PSB0cnVlKSB7XHJcbiAgICAgIGlmKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddICE9PSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMucGxhbmVUb2dnbGUuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJNb3ZlbWVudC5jaGFuZ2VQbGFuZSh0aGlzLnBsYW5lVG9nZ2xlLCB0aGlzLnNsaWRlckNvbnRhaW5lciwgdGhpcy5taW5WYWx1ZSwgdGhpcy5tYXhWYWx1ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJNb3ZlbWVudC5jaGFuZ2VQbGFuZSh0cnVlLCB0aGlzLnNsaWRlckNvbnRhaW5lciwgdGhpcy5taW5WYWx1ZSwgdGhpcy5tYXhWYWx1ZSk7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLnNldHRpbmdzLnN0ZXAgIT09IGZhbHNlICYmIHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddICE9PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLm1heElucHV0LnNldEF0dHJpYnV0ZSgnc3RlcCcsIHRoaXMuc2V0dGluZ3Muc3RlcCArIFwiXCIpO1xyXG4gICAgICB0aGlzLm1pbklucHV0LnNldEF0dHJpYnV0ZSgnc3RlcCcsIHRoaXMuc2V0dGluZ3Muc3RlcCArIFwiXCIpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZWZyZXNoQ3VycmVudFZhbHVlcyhuZXdEYXRhOiBEYXRhT2ZWYWx1ZVJlZnJlc2gpOiB2b2lkIHtcclxuICAgIGlmICgnbWluJyBpbiBuZXdEYXRhICYmICdtYXgnIGluIG5ld0RhdGEgJiYgdGhpcy5zZXR0aW5nc1sncmFuZ2UnXSA9PT0gdHJ1ZSkge1xyXG4gICAgICBpZih0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSAhPT0gZmFsc2UgJiYgdGhpcy5oYW5kZWxUb2dnbGUuY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMuc2lkZU1lbnUucXVlcnlTZWxlY3RvcignI21pblNsaWRlclZhbHVlJykudGV4dENvbnRlbnQgPSBuZXdEYXRhLm1pbjtcclxuICAgICAgICB0aGlzLnNpZGVNZW51LnF1ZXJ5U2VsZWN0b3IoJyNtYXhTbGlkZXJWYWx1ZScpLnRleHRDb250ZW50ID0gYCAtICR7bmV3RGF0YS5tYXh9YDtcclxuICAgICAgICB0aGlzLnNpZGVNZW51LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b21TbGlkZXJNaW5JbnB1dCcpLnZhbHVlID0gbmV3RGF0YS5taW47XHJcbiAgICAgICAgdGhpcy5zaWRlTWVudS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tU2xpZGVyTWF4SW5wdXQnKS52YWx1ZSA9IG5ld0RhdGEubWF4O1xyXG4gICAgICB9O1xyXG4gICAgICB0aGlzLm1pbkxhYmVsLnRleHRDb250ZW50ID0gbmV3RGF0YS5taW47XHJcbiAgICAgIHRoaXMubWF4TGFiZWwudGV4dENvbnRlbnQgPSBuZXdEYXRhLm1heDtcclxuICAgIH0gZWxzZSBpZiAoJ21pbicgaW4gbmV3RGF0YSkge1xyXG4gICAgICB0aGlzLm1pbkxhYmVsLnRleHRDb250ZW50ID0gbmV3RGF0YS5taW47XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzWydzaWRlLW1lbnUnXSAhPT0gZmFsc2UpIHtcclxuICAgICAgICB0aGlzLnNpZGVNZW51LnF1ZXJ5U2VsZWN0b3IoJyNtaW5TbGlkZXJWYWx1ZScpLnRleHRDb250ZW50ID0gbmV3RGF0YS5taW47O1xyXG4gICAgICAgIHRoaXMuc2lkZU1lbnUucXVlcnlTZWxlY3RvcignLmN1c3RvbVNsaWRlck1pbklucHV0JykudmFsdWUgPSBuZXdEYXRhLm1pbjtcclxuICAgICAgfTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubWF4TGFiZWwudGV4dENvbnRlbnQgPSBuZXdEYXRhLm1heDtcclxuICAgICAgaWYgKHRoaXMuc2V0dGluZ3NbJ3NpZGUtbWVudSddICE9PSBmYWxzZSkge1xyXG4gICAgICAgIHRoaXMuc2lkZU1lbnUucXVlcnlTZWxlY3RvcignI21heFNsaWRlclZhbHVlJykudGV4dENvbnRlbnQgPSBgIC0gJHtuZXdEYXRhLm1heH1gO1xyXG4gICAgICAgIHRoaXMuc2lkZU1lbnUucXVlcnlTZWxlY3RvcignLmN1c3RvbVNsaWRlck1heElucHV0JykudmFsdWUgPSBuZXdEYXRhLm1heDtcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgICBuZXcgSGFuZGVsc0xhYmVscygpLmNlbnRlcmluZ1JlbGF0aXZlVG9IYW5kbGVzKHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRoLCB0aGlzLm1heEhhbmRlbC5vZmZzZXRXaWR0aCwgdGhpcy5taW5MYWJlbC5vZmZzZXRXaWR0aCwgdGhpcy5tYXhMYWJlbC5vZmZzZXRXaWR0aCwgdGhpcy5taW5MYWJlbCwgdGhpcy5tYXhMYWJlbCk7XHJcbiAgfTtcclxuXHJcbiAgY2FsbEhhbmRlbExhYmVsVG9nZ2xlQ2hhbmdlcih0YXJnZXQ6IFZpZXcpOiB2b2lkIHtcclxuICAgIG5ldyBIYW5kZWxzTGFiZWxzKCkuZGlzcGxheUNvbnRyb2xsZXIodGFyZ2V0LmhhbmRlbExhYmVsVG9nZ2xlLCB0aGlzLm1pbkxhYmVsLCB0aGlzLm1heExhYmVsKTtcclxuICAgIGlmICh0YXJnZXQuaGFuZGVsTGFiZWxUb2dnbGUuY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBuZXcgSGFuZGVsc0xhYmVscygpLmNlbnRlcmluZ1JlbGF0aXZlVG9IYW5kbGVzKHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRoLCB0aGlzLm1heEhhbmRlbC5vZmZzZXRXaWR0aCwgdGhpcy5taW5MYWJlbC5vZmZzZXRXaWR0aCwgdGhpcy5tYXhMYWJlbC5vZmZzZXRXaWR0aCwgdGhpcy5taW5MYWJlbCwgdGhpcy5tYXhMYWJlbClcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgY2FsbE1heEhhbmRlbFRvZ2dsZUNoYW5nZXIodGFyZ2V0OiBWaWV3KTogdm9pZCB7XHJcbiAgICBpZiAodGFyZ2V0LmhhbmRlbFRvZ2dsZS5jaGVja2VkID09PSBmYWxzZSkge1xyXG4gICAgICB0aGlzLnNsaWRlck1vdmVtZW50Lm15RGF0YVsnbWF4J10gPSB7J21heCc6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbkhhbmRlbC5vZmZzZXRXaWR0aH1gLCAnc2xpZGVyV2lkdGgnOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGh9YH1cclxuICAgICAgdGhpcy5tYXhIYW5kZWwuc3R5bGUubGVmdCA9IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbkhhbmRlbC5vZmZzZXRXaWR0aH1weGA7XHJcbiAgICAgIHRoaXMuc2lkZU1lbnUucXVlcnlTZWxlY3RvcignI21heFNsaWRlclZhbHVlJykudGV4dENvbnRlbnQgPSAnJztcclxuICAgICAgdGhpcy5tYXhJbnB1dC5zZXRBdHRyaWJ1dGUoJ3JlYWRvbmx5JywgJycpO1xyXG4gICAgICB0aGlzLm1heElucHV0LnZhbHVlID0gJyc7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQuc3R5bGUub3BhY2l0eSA9ICcwLjMnO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBuZXcgSGFuZGVscygpLmRpc3BsYXlDb250cm9sbGVyKHRhcmdldC5oYW5kZWxUb2dnbGUsIHRoaXMubWF4SGFuZGVsKTtcclxuXHJcbiAgICBpZiAodGFyZ2V0LmhhbmRlbFRvZ2dsZS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQucmVtb3ZlQXR0cmlidXRlKCdyZWFkb25seScpO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLnJpZ2h0ID0gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtICh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGggLyAyICkgKyAncHgnO1xyXG4gICAgICBpZiAodGhpcy5zbGlkZXJNb3ZlbWVudC5teURhdGEubWluWydtaW4nXSA+PSB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXhIYW5kZWwub2Zmc2V0V2lkdGggLSB0aGlzLm1pbkhhbmRlbC5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgIHRoaXMuc2xpZGVyTW92ZW1lbnQubXlEYXRhWydtaW4nXSA9IHsnbWluJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRoIC0gdGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGh9YCwgJ3NsaWRlcldpZHRoJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRofWB9XHJcbiAgICAgICAgdGhpcy5taW5IYW5kZWwuc3R5bGUubGVmdCA9IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1heEhhbmRlbC5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRofXB4YDtcclxuICAgICAgfTtcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbiAgcmVmcmVzaE1heFNpZGVNZW51RGF0YShkYXRhOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHRoaXMuc2lkZU1lbnUucXVlcnlTZWxlY3RvcignI21heFNsaWRlclZhbHVlJykudGV4dENvbnRlbnQgPSBgIC0gJHtkYXRhfWA7XHJcbiAgICB0aGlzLm1heElucHV0LnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgICB0aGlzLm1heElucHV0LnZhbHVlID0gYCR7ZGF0YX1gO1xyXG4gIH07XHJcblxyXG4gIGlucHV0c1Bvc3NpYmxlUmFuZ2UoIGRhdGE6IG9iamVjdCwgbWluOiBIVE1MSW5wdXRFbGVtZW50LCBtYXg6IEhUTUxJbnB1dEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIG1pbi5zZXRBdHRyaWJ1dGUoJ21heCcsIGRhdGEubWF4KTtcclxuICAgIG1pbi5zZXRBdHRyaWJ1dGUoJ21pbicsIGRhdGEubWluKTtcclxuICAgIG1heC5zZXRBdHRyaWJ1dGUoJ21heCcsIGRhdGEubWF4KTtcclxuICB9O1xyXG4gICAgXHJcbn07XHJcbiIsImltcG9ydCB7IFZpZXcgfSBmcm9tICcuL2NvbXBvbmVudHMvdmlldy92aWV3LnRzJztcclxuaW1wb3J0IHsgTW9kZWwgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kZWwvTW9kZWwudHMnO1xyXG5pbXBvcnQgeyBGYWNhZGUgfSBmcm9tICcuL2NvbXBvbmVudHMvbW9kZWwvZmFjYWRlLnRzJztcclxuaW1wb3J0IHsgUHJlc2VudGVyIH0gZnJvbSAnLi9jb21wb25lbnRzL3ByZXNlbnRlci9wcmVzZW50ZXIudHMnO1xyXG5cclxuKGZ1bmN0aW9uKCAkICkge1xyXG4gICQuZm4udGVzdFNsaWRlciA9IGZ1bmN0aW9uKCBvcHRpb25zICkge1xyXG5cclxuICAgIHZhciBzZXR0aW5ncyA9ICQuZXh0ZW5kKCB7XHJcbiAgICAgICdtaW4nOiAnMCcsXHJcbiAgICAgICdtYXgnOiAnMTAnLFxyXG4gICAgICAncmFuZ2UnOiBmYWxzZSxcclxuICAgICAgJ3NpZGUtbWVudSc6IGZhbHNlLFxyXG4gICAgICAnaGFuZGVsc0xhYmVsJzogZmFsc2UsXHJcbiAgICAgICd2ZXJ0aWNhbCc6IGZhbHNlLFxyXG4gICAgICAnc3RlcCc6IGZhbHNlLFxyXG4gICAgICAnc2lkZU1lbnVDb250YWluZXInOiAnZmFsc2UnXHJcbiAgICB9LCBvcHRpb25zKTtcclxuXHJcbiAgICBsZXQgdGhhdDogSFRNTERpdkVsZW1lbnQgPSB0aGlzO1xyXG4gICAgXHJcbiAgICBsZXQgbW9kZWw7XHJcbiAgICBpZiAoJ2N1cnJlbnQtbWluJyBpbiBzZXR0aW5ncyAmJiAnY3VycmVudC1tYXgnIGluIHNldHRpbmdzKSB7XHJcbiAgICAgIG1vZGVsID0gbmV3IE1vZGVsKHsnbWluJzogc2V0dGluZ3NbJ21pbiddLCBtYXg6IHNldHRpbmdzWydtYXgnXSwgJ2N1cnJlbnQtbWluJzogc2V0dGluZ3NbJ2N1cnJlbnQtbWluJ10sICdjdXJyZW50LW1heCc6IHNldHRpbmdzWydjdXJyZW50LW1heCddfSk7XHJcbiAgICB9IGVsc2UgaWYgKCdjdXJyZW50LW1pbicgaW4gc2V0dGluZ3MpIHtcclxuICAgICAgbW9kZWwgPSBuZXcgTW9kZWwoeydtaW4nOiBzZXR0aW5nc1snbWluJ10sIG1heDogc2V0dGluZ3NbJ21heCddLCAnY3VycmVudC1taW4nOiBzZXR0aW5nc1snY3VycmVudC1taW4nXSwgJ2N1cnJlbnQtbWF4Jzogc2V0dGluZ3NbJ21heCddfSk7XHJcbiAgICB9IGVsc2UgaWYgKCdjdXJyZW50LW1heCcgaW4gc2V0dGluZ3MpIHtcclxuICAgICAgbW9kZWwgPSBuZXcgTW9kZWwoeydtaW4nOiBzZXR0aW5nc1snbWluJ10sIG1heDogc2V0dGluZ3NbJ21heCddLCAnY3VycmVudC1taW4nOiBzZXR0aW5nc1snbWluJ10sICdjdXJyZW50LW1heCc6IHNldHRpbmdzWydjdXJyZW50LW1heCddfSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtb2RlbCA9IG5ldyBNb2RlbCh7J21pbic6IHNldHRpbmdzWydtaW4nXSwgbWF4OiBzZXR0aW5nc1snbWF4J10sICdjdXJyZW50LW1pbic6IHNldHRpbmdzWydtaW4nXSwgJ2N1cnJlbnQtbWF4Jzogc2V0dGluZ3NbJ21heCddfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGxldCB2aWV3ID0gbmV3IFZpZXcodGhhdCwgc2V0dGluZ3MpO1xyXG4gICAgXHJcbiAgICBsZXQgZmFjYWRlID0gbmV3IEZhY2FkZShtb2RlbClcclxuICAgIFxyXG4gICAgbGV0IHByZXNlbnRlciA9IFByZXNlbnRlcih2aWV3LCBmYWNhZGUpO1xyXG4gIH07XHJcbn0pKGpRdWVyeSk7Il0sInNvdXJjZVJvb3QiOiIifQ==