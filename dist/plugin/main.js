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

  view.handelLabelToggle.addEventListener('change', function () {
    view.callHandelLabelToggleChanger(view);
  });
  view.handelToggle.addEventListener('change', function () {
    view.callMaxHandelToggleChanger(view);

    if (view.handelToggle.checked === true) {
      var result = facade.getMaxData();
      view.refreshMaxSideMenuData(result);
    }

    ;
  });
  view.planeToggle.addEventListener('change', function () {
    view.sliderMovement.changePlane(view.planeToggle, view.sliderContainer, view.minValue, view.maxValue);
  });
  view.minValue.addEventListener('click', function () {
    view.sliderMovement.selectionOfPreparedValue('min');
  });
  view.maxValue.addEventListener('click', function () {
    view.sliderMovement.selectionOfPreparedValue('max');
  });
  view.minInput.addEventListener('change', function () {
    var positions = facade.getPositionsAmount();
    view.sliderMovement.sideMenuInputsValuesValidationChecker('min', view.minInput.value, positions['positions'], positions['minimum']);
  });
  view.maxInput.addEventListener('change', function () {
    var positions = facade.getPositionsAmount();
    view.sliderMovement.sideMenuInputsValuesValidationChecker('max', view.maxInput.value, positions['positions'], positions['minimum']);
  });
  var possibleRange = facade.getPossibleRange();
  view.inputsPossibleRange(possibleRange, view.minInput, view.maxInput);
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
      var doubleHandels = this.handelsToggle.checked;
      var vertical = this.planeToggle.checked;
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
      var doubleHandels = this.handelsToggle.checked;
      var vertical = this.planeToggle.checked;
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
      if (toggle.checked) {
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
        if (this.handelsToggle.checked === true) {
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
        this.handelLabelToggle.checked = true;
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
        this.handelToggle.checked = true;
        this.interval.style.display = 'block';
        this.maxInput.style.opacity = '1';
      }

      ;

      if (this.settings['vertical'] === true) {
        this.planeToggle.checked = true;
        this.sliderMovement.changePlane(this.planeToggle, this.sliderContainer, this.minValue, this.maxValue);
      }

      ;

      if (this.settings.step !== false && this.settings.sideMenu !== false) {
        this.maxInput.setAttribute('step', this.settings.step + "");
        this.minInput.setAttribute('step', this.settings.step + "");
      }

      ;
    }
  }, {
    key: "refreshCurrentValues",
    value: function refreshCurrentValues(newData) {
      if ('min' in newData && 'max' in newData && this.settings['range'] === true && this.handelToggle.checked === true) {
        this.sideMenu.querySelector('#minSliderValue').textContent = newData.min;
        this.sideMenu.querySelector('#maxSliderValue').textContent = " - ".concat(newData.max);
        this.sideMenu.querySelector('.customSliderMinInput').value = newData.min;
        this.sideMenu.querySelector('.customSliderMaxInput').value = newData.max;
        this.minLabel.textContent = newData.min;
        this.maxLabel.textContent = newData.max;
      } else if ('min' in newData) {
        if (this.settings['range'] === true && this.handelToggle.checked === true) {
          this.sideMenu.querySelector('#minSliderValue').textContent = newData.min;
          ;
        } else {
          this.sideMenu.querySelector('#minSliderValue').textContent = newData.min;
          ;
        }

        ;
        this.sideMenu.querySelector('.customSliderMinInput').value = newData.min;
        this.minLabel.textContent = newData.min;
      } else {
        this.sideMenu.querySelector('#maxSliderValue').textContent = " - ".concat(newData.max);
        this.sideMenu.querySelector('.customSliderMaxInput').value = newData.max;
        this.maxLabel.textContent = newData.max;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwvTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwvZmFjYWRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRlci9wcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL2hhbmRlbHMtbGFiZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9oYW5kZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9zZWxlY3RlZC1yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NvbXBvbmVudHMvc2lkZS1tZW51LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9zbGlkZXItbW92ZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL3NsaWRlci1yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NvbXBvbmVudHMvdmFsdWVSYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L3ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pxdWVyeS51aS5jdXN0b21TbGlkZXIudHMiXSwibmFtZXMiOlsiTW9kZWwiLCJzZXR0aW5ncyIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJtaW4iLCJtYXgiLCJGYWNhZGUiLCJtb2RlbCIsImdldEN1cnJlbnREYXRhIiwicHJvcCIsIk1hdGgiLCJyb3VuZCIsIlByZXNlbnRlciIsInZpZXciLCJmYWNhZGUiLCJkaXNwbGF5RWxlbWVudHMiLCJzbGlkZXJNb3ZlbWVudCIsIm15RGF0YSIsIlByb3h5Iiwic2V0IiwidGFyZ2V0IiwidmFsIiwibW9kZWxSZXN1bHQiLCJyZWZyZXNoTW9kZWxEYXRhIiwicmVmcmVzaEN1cnJlbnRWYWx1ZXMiLCJzdGVwIiwic3RlcEFtb3VudCIsImdldFBvc2l0aW9uc0Ftb3VudCIsIm1pbkhhbmRlbCIsIm9ubW91c2Vkb3duIiwiZXZlbnQiLCJtaW5IYW5kZWxMaXN0ZW5lciIsIm1heEhhbmRlbCIsIm1heEhhbmRlbExpc3RlbmVyIiwiaGFuZGVsTGFiZWxUb2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FsbEhhbmRlbExhYmVsVG9nZ2xlQ2hhbmdlciIsImhhbmRlbFRvZ2dsZSIsImNhbGxNYXhIYW5kZWxUb2dnbGVDaGFuZ2VyIiwiY2hlY2tlZCIsInJlc3VsdCIsImdldE1heERhdGEiLCJyZWZyZXNoTWF4U2lkZU1lbnVEYXRhIiwicGxhbmVUb2dnbGUiLCJjaGFuZ2VQbGFuZSIsInNsaWRlckNvbnRhaW5lciIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJzZWxlY3Rpb25PZlByZXBhcmVkVmFsdWUiLCJtaW5JbnB1dCIsInBvc2l0aW9ucyIsInNpZGVNZW51SW5wdXRzVmFsdWVzVmFsaWRhdGlvbkNoZWNrZXIiLCJ2YWx1ZSIsIm1heElucHV0IiwicG9zc2libGVSYW5nZSIsImdldFBvc3NpYmxlUmFuZ2UiLCJpbnB1dHNQb3NzaWJsZVJhbmdlIiwic3RhcnRQb3NpdGlvbnMiLCJzdGFydEhhbmRlbHNQb3NpdGlvbiIsInN0YXJ0SGFuZGxlcnNQb3NpdGlvbnMiLCJIYW5kZWxzTGFiZWxzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibWluTGFiZWwiLCJtYXhMYWJlbCIsInRvZ2dsZSIsInN0eWxlIiwiZGlzcGxheSIsIm1pbkhhbmRlbFdpZHRoIiwibWF4SGFuZGVsV2lkdGgiLCJtaW5MYWJlbFdpZHRoIiwibWF4TGFiZWxXaWR0aCIsImxlZnQiLCJIYW5kZWxzIiwiU2VsZWN0ZWRSYW5nZSIsImludGVydmFsIiwiU2lkZU1lbnUiLCJzbGlkZXJWYWx1ZVAiLCJpbm5lclRleHQiLCJtaW5TbGlkZXJWYWx1ZU91dHB1dCIsImlkIiwibWF4U2xpZGVyVmFsdWVPdXRwdXQiLCJzbGlkZXJUb2dnbGVQIiwic2xpZGVyVG9nZ2xlTGFiZWwiLCJtYXhTbGlkZXJIYW5kZWxUb2dnbGUiLCJzZXRBdHRyaWJ1dGUiLCJjdXN0b21TbGlkZXJCb3JkZXIiLCJjdXN0b21TbGlkZXJJbnB1dHMiLCJjdXN0b21TbGlkZXJJbnB1dHNQIiwiY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWwiLCJjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbCIsImN1c3RvbVNsaWRlcklucHV0c01pbiIsImN1c3RvbVNsaWRlcklucHV0c01heCIsInRvZ2dsZUZvclZhbHVlc0NvbnRhaW5lciIsInRvZ2dsZUZvclZhbHVlc1AiLCJ0b2dnbGVGb3JWYWx1ZXNMYWJlbCIsInRvZ2dsZUZvclZhbHVlc0lucHV0IiwidG9nZ2xlRm9yVmFsdWVzU3BhbiIsInRvZ2dsZUZvclBsYW5lQ29udGFpbmVyIiwidG9nZ2xlRm9yUGxhbmVQIiwidG9nZ2xlRm9yUGxhbmVMYWJlbCIsInRvZ2dsZUZvclBsYW5lSW5wdXQiLCJ0b2dnbGVGb3JQbGFuZVNwYW4iLCJtYWluU2xpZGVyQ29udGFpbmVyIiwiYXBwZW5kIiwiY3VzdG9tU2xpZGVyTWVudUNvbnRhaW5lciIsIm1lbnUiLCJTbGlkZXJNb3ZlbWVudCIsImhhbmRlbHMiLCJzbGlkZXJSYW5nZSIsImhhbmRlbHNUb2dnbGUiLCJwb3NpdGlvblZhbHVlcyIsIm9mZnNldFdpZHRoIiwicmlnaHQiLCJ0ZXN0IiwidGhhdCIsInNoaWZ0IiwiZG91YmxlSGFuZGVscyIsInZlcnRpY2FsIiwiY2xpZW50WSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImNsaWVudFgiLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsInVuZGVmaW5lZCIsIm5ld0xlZnQiLCJyaWdodEVkZ2UiLCJyZW5ld2FsT2ZQb3NpdGlvbiIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJib2R5IiwiaGVpZ2h0IiwidHJhbnNmb3JtIiwicmVtb3ZlIiwibWluaW11bSIsIlNsaWRlclJhbmdlIiwiZWxlbSIsInJhbmdlIiwiVmFsdWVSYW5nZSIsInZhbHVlcyIsIlZpZXciLCJnZXRFbGVtZW50cyIsInNpZGVNZW51RWxlbWVudHMiLCJzaWRlTWVudSIsInNpZGVNZW51Q29udGFpbmVyIiwiY29udGFpbmVyIiwib2Zmc2V0SGVpZ2h0IiwicXVlcnlTZWxlY3RvciIsIm9wYWNpdHkiLCJuZXdEYXRhIiwidGV4dENvbnRlbnQiLCJjZW50ZXJpbmdSZWxhdGl2ZVRvSGFuZGxlcyIsImRpc3BsYXlDb250cm9sbGVyIiwicmVtb3ZlQXR0cmlidXRlIiwiJCIsImZuIiwidGVzdFNsaWRlciIsIm9wdGlvbnMiLCJleHRlbmQiLCJwcmVzZW50ZXIiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7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QUErRSx1QkFBZUEsUUFBUSxDQUFDLGFBQUQ7QUFBdEcsT0FBVixDQUFSO0FBQ0QsS0FGTSxNQUVBO0FBQ0xPLFdBQUssR0FBRyxJQUFJUixnRUFBSixDQUFVO0FBQUMsZUFBT0MsUUFBUSxDQUFDLEtBQUQsQ0FBaEI7QUFBeUJLLFdBQUcsRUFBRUwsUUFBUSxDQUFDLEtBQUQsQ0FBdEM7QUFBK0MsdUJBQWVBLFFBQVEsQ0FBQyxLQUFELENBQXRFO0FBQStFLHVCQUFlQSxRQUFRLENBQUMsS0FBRDtBQUF0RyxPQUFWLENBQVI7QUFDRDs7QUFFRCxRQUFJYSxJQUFJLEdBQUcsSUFBSWlJLDZEQUFKLENBQVN6QixJQUFULEVBQWVySCxRQUFmLENBQVg7QUFFQSxRQUFJYyxNQUFNLEdBQUcsSUFBSVIsa0VBQUosQ0FBV0MsS0FBWCxDQUFiO0FBRUEsUUFBSTBKLFNBQVMsR0FBR3JKLG9GQUFTLENBQUNDLElBQUQsRUFBT0MsTUFBUCxDQUF6QjtBQUNELEdBL0JEO0FBZ0NELENBakNELEVBaUNHb0osTUFqQ0gsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanF1ZXJ5LnVpLmN1c3RvbVNsaWRlci50c1wiKTtcbiIsImltcG9ydCB7IElEYXRhIH0gZnJvbSAnLi9kYXRhSW50ZXJmYWNlLnRzJztcclxuXHJcbmludGVyZmFjZSBTZXR0aW5ncyB7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW9kZWwge1xyXG5cclxuICBkYXRhOiBJRGF0YTtcclxuICBcclxuICBjb25zdHJ1Y3Rvciggc2V0dGluZ3M6IFNldHRpbmdzICkgeyBcclxuICAgIHRoaXMuZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHNldHRpbmdzKTtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnREYXRhKCk6IG9iamVjdCB7XHJcbiAgICByZXR1cm4geydtaW5pbXVtJzogdGhpcy5kYXRhLm1pbiwgJ21pbic6IHRoaXMuZGF0YVsnY3VycmVudC1taW4nXSwgJ21heCc6IHRoaXMuZGF0YVsnY3VycmVudC1tYXgnXSwgJ3Bvc2l0aW9ucyc6IGAke3RoaXMuZGF0YS5tYXggLSB0aGlzLmRhdGEubWlufWB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi9tb2RlbC50cydcclxuXHJcbmludGVyZmFjZSBNeURhdGFPYmplY3Qge1xyXG4gIFtrZXk6IHN0cmluZ106IHN0cmluZ1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2FkZSB7XHJcbiAgcHJpdmF0ZSBtb2RlbDtcclxuXHJcbiAgY29uc3RydWN0b3IgKG1vZGVsKSB7XHJcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcclxuICB9XHJcblxyXG4gIHN0YXJ0SGFuZGVsc1Bvc2l0aW9uKCk6b2JqZWN0IHtcclxuICAgIHJldHVybiB0aGlzLm1vZGVsLmdldEN1cnJlbnREYXRhKCk7XHJcbiAgfTtcclxuICBcclxuICByZWZyZXNoTW9kZWxEYXRhKGRhdGE6IG9iamVjdCwgcHJvcDogc3RyaW5nKTogb2JqZWN0IHtcclxuICAgIGlmIChwcm9wID09PSAnbWluJykge1xyXG4gICAgICB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWluJ10gPSBNYXRoLnJvdW5kKHRoaXMubW9kZWwuZGF0YVsnbWluJ10gKyAoZGF0YVsnbWluJ10gLyAoK2RhdGFbJ3NsaWRlcldpZHRoJ10gLyAodGhpcy5tb2RlbC5kYXRhWydtYXgnXSAtIHRoaXMubW9kZWwuZGF0YVsnbWluJ10pKSkpO1xyXG4gICAgICByZXR1cm4geyAnbWluJzogdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1pbiddIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1tYXgnXSA9IE1hdGgucm91bmQodGhpcy5tb2RlbC5kYXRhWydtaW4nXSArIChkYXRhWydtYXgnXSAvICgrZGF0YVsnc2xpZGVyV2lkdGgnXSAvICh0aGlzLm1vZGVsLmRhdGFbJ21heCddIC0gdGhpcy5tb2RlbC5kYXRhWydtaW4nXSkpKSk7XHJcbiAgICAgIHJldHVybiB7ICdtYXgnOiB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWF4J10gfVxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBnZXRNb2RlbERhdGEoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7ICdtaW4nOiB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWluJ10sICdtYXgnOiB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWF4J119XHJcbiAgfTtcclxuXHJcbiAgZ2V0TWF4RGF0YSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZGF0YVsnbWF4J11cclxuICB9O1xyXG5cclxuICBnZXRQb3NzaWJsZVJhbmdlKCk6IG9iamVjdCB7XHJcbiAgICByZXR1cm4geydtYXgnOnRoaXMubW9kZWwuZGF0YS5tYXgsICdtaW4nOiB0aGlzLm1vZGVsLmRhdGEubWlufTtcclxuICB9O1xyXG5cclxuICBnZXRQb3NpdGlvbnNBbW91bnQoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7J3Bvc2l0aW9ucyc6IHRoaXMubW9kZWwuZGF0YS5tYXggLSB0aGlzLm1vZGVsLmRhdGEubWluLCAnbWluaW11bSc6IHRoaXMubW9kZWwuZGF0YS5taW59O1xyXG4gIH1cclxufTsiLCJpbXBvcnQgeyBTbGlkZXJNb3ZlbWVudCB9IGZyb20gXCIuLi92aWV3L2NvbXBvbmVudHMvc2xpZGVyLW1vdmVtZW50LnRzXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gUHJlc2VudGVyICh2aWV3LCBmYWNhZGUpOiB2b2lkIHtcclxuICBcclxuICB2aWV3LmRpc3BsYXlFbGVtZW50cygpO1xyXG4gIFxyXG4gIHZpZXcuc2xpZGVyTW92ZW1lbnQubXlEYXRhID0gbmV3IFByb3h5KHZpZXcuc2xpZGVyTW92ZW1lbnQubXlEYXRhLCB7XHJcbiAgICBzZXQodGFyZ2V0LCBwcm9wLCB2YWwpIHtcclxuICAgICAgaWYodHlwZW9mIHZhbCA9PT0gJ29iamVjdCcpIHtcclxuICAgICAgICB0YXJnZXRbcHJvcF0gPSB2YWw7XHJcbiAgICAgICAgbGV0IG1vZGVsUmVzdWx0ID0gZmFjYWRlLnJlZnJlc2hNb2RlbERhdGEodmFsLCBwcm9wKTtcclxuICAgICAgICB2aWV3LnJlZnJlc2hDdXJyZW50VmFsdWVzKG1vZGVsUmVzdWx0KVxyXG4gICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9KVxyXG5cclxuICBpZiAodmlldy5zbGlkZXJNb3ZlbWVudC5zdGVwICE9PSBmYWxzZSkge1xyXG4gICAgbGV0IHN0ZXBBbW91bnQ6IG9iamVjdCA9IGZhY2FkZS5nZXRQb3NpdGlvbnNBbW91bnQoKTtcclxuICAgIHZpZXcuc2xpZGVyTW92ZW1lbnQuc3RlcEFtb3VudCA9IHN0ZXBBbW91bnRbJ3Bvc2l0aW9ucyddO1xyXG4gIH1cclxuICBcclxuXHJcbiAgdmlldy5taW5IYW5kZWwub25tb3VzZWRvd24gPSBmdW5jdGlvbiggZXZlbnQgKTogdm9pZCB7XHJcbiAgICB2aWV3LnNsaWRlck1vdmVtZW50Lm1pbkhhbmRlbExpc3RlbmVyKCBldmVudCApO1xyXG4gIH07XHJcblxyXG4gIHZpZXcubWF4SGFuZGVsLm9ubW91c2Vkb3duID0gZnVuY3Rpb24oZXZlbnQpOiB2b2lkIHtcclxuICAgIHZpZXcuc2xpZGVyTW92ZW1lbnQubWF4SGFuZGVsTGlzdGVuZXIoIGV2ZW50ICk7XHJcbiAgfTtcclxuICBcclxuICB2aWV3LmhhbmRlbExhYmVsVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmlldy5jYWxsSGFuZGVsTGFiZWxUb2dnbGVDaGFuZ2VyKHZpZXcpXHJcbiAgfSk7XHJcblxyXG4gIHZpZXcuaGFuZGVsVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmlldy5jYWxsTWF4SGFuZGVsVG9nZ2xlQ2hhbmdlcih2aWV3KVxyXG4gICAgaWYgKHZpZXcuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgbGV0IHJlc3VsdDogbnVtYmVyID0gZmFjYWRlLmdldE1heERhdGEoKTtcclxuICAgICAgdmlldy5yZWZyZXNoTWF4U2lkZU1lbnVEYXRhKHJlc3VsdClcclxuICAgIH07XHJcbiAgfSk7XHJcblxyXG4gIHZpZXcucGxhbmVUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICB2aWV3LnNsaWRlck1vdmVtZW50LmNoYW5nZVBsYW5lKHZpZXcucGxhbmVUb2dnbGUsIHZpZXcuc2xpZGVyQ29udGFpbmVyLCB2aWV3Lm1pblZhbHVlLCB2aWV3Lm1heFZhbHVlKTtcclxuICB9KTtcclxuXHJcbiAgdmlldy5taW5WYWx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmlldy5zbGlkZXJNb3ZlbWVudC5zZWxlY3Rpb25PZlByZXBhcmVkVmFsdWUoJ21pbicpO1xyXG4gIH0pO1xyXG5cclxuICB2aWV3Lm1heFZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICB2aWV3LnNsaWRlck1vdmVtZW50LnNlbGVjdGlvbk9mUHJlcGFyZWRWYWx1ZSgnbWF4Jyk7XHJcbiAgfSk7XHJcblxyXG4gIHZpZXcubWluSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgcG9zaXRpb25zOiBvYmplY3QgPSBmYWNhZGUuZ2V0UG9zaXRpb25zQW1vdW50KCk7XHJcbiAgICB2aWV3LnNsaWRlck1vdmVtZW50LnNpZGVNZW51SW5wdXRzVmFsdWVzVmFsaWRhdGlvbkNoZWNrZXIoJ21pbicsIHZpZXcubWluSW5wdXQudmFsdWUsIHBvc2l0aW9uc1sncG9zaXRpb25zJ10sIHBvc2l0aW9uc1snbWluaW11bSddKTtcclxuICB9KTtcclxuXHJcbiAgdmlldy5tYXhJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBwb3NpdGlvbnM6IG9iamVjdCA9IGZhY2FkZS5nZXRQb3NpdGlvbnNBbW91bnQoKTtcclxuICAgIHZpZXcuc2xpZGVyTW92ZW1lbnQuc2lkZU1lbnVJbnB1dHNWYWx1ZXNWYWxpZGF0aW9uQ2hlY2tlcignbWF4Jywgdmlldy5tYXhJbnB1dC52YWx1ZSwgcG9zaXRpb25zWydwb3NpdGlvbnMnXSwgcG9zaXRpb25zWydtaW5pbXVtJ10pO1xyXG4gIH0pO1xyXG5cclxuICBsZXQgcG9zc2libGVSYW5nZTogb2JqZWN0ID0gZmFjYWRlLmdldFBvc3NpYmxlUmFuZ2UoKTtcclxuICB2aWV3LmlucHV0c1Bvc3NpYmxlUmFuZ2UocG9zc2libGVSYW5nZSwgdmlldy5taW5JbnB1dCwgdmlldy5tYXhJbnB1dClcclxuXHJcbiAgbGV0IHN0YXJ0UG9zaXRpb25zOiBvYmplY3QgPSBmYWNhZGUuc3RhcnRIYW5kZWxzUG9zaXRpb24oKTtcclxuICB2aWV3LnNsaWRlck1vdmVtZW50LnN0YXJ0SGFuZGxlcnNQb3NpdGlvbnMoc3RhcnRQb3NpdGlvbnMpO1xyXG4gIHZpZXcucmVmcmVzaEN1cnJlbnRWYWx1ZXMoc3RhcnRQb3NpdGlvbnMpXHJcbn07XHJcblxyXG5cclxuIiwiZXhwb3J0IGNsYXNzIEhhbmRlbHNMYWJlbHMge1xyXG4gIG1pbkxhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIG1heExhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIGxhYmVsSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgbGV0IG1pbjpIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGxldCBtYXg6SFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBtaW4uY2xhc3NMaXN0LmFkZCgnbWluU2xpZGVySGFuZGVsTGFiZWwnKTtcclxuICAgIG1heC5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJIYW5kZWxMYWJlbCcpO1xyXG4gICAgdGhpcy5taW5MYWJlbCA9IG1pbjtcclxuICAgIHRoaXMubWF4TGFiZWwgPSBtYXg7XHJcbiAgfTtcclxuICBcclxuICBnZXRFbGVtZW50cygpOiBvYmplY3Qge1xyXG4gICAgcmV0dXJuIHsnbWluJzogdGhpcy5taW5MYWJlbCwgJ21heCc6IHRoaXMubWF4TGFiZWx9O1xyXG4gIH07XHJcblxyXG4gIGRpc3BsYXlDb250cm9sbGVyKHRvZ2dsZTogSFRNTElucHV0RWxlbWVudCwgbWluOiBIVE1MTGFiZWxFbGVtZW50LCBtYXg6IEhUTUxMYWJlbEVsZW1lbnQpIHtcclxuICAgIGlmICh0b2dnbGUuY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBtaW4uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gICAgICBtYXguc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbWluLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgIG1heC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2VudGVyaW5nUmVsYXRpdmVUb0hhbmRsZXMobWluSGFuZGVsV2lkdGg6IG51bWJlciwgbWF4SGFuZGVsV2lkdGg6IG51bWJlciwgbWluTGFiZWxXaWR0aDogbnVtYmVyLCBtYXhMYWJlbFdpZHRoOiBudW1iZXIsIG1pbkxhYmVsOiBIVE1MTGFiZWxFbGVtZW50LCBtYXhMYWJlbDogSFRNTExhYmVsRWxlbWVudCk6IHZvaWQge1xyXG4gICAgbWluTGFiZWwuc3R5bGUubGVmdCA9IChtaW5IYW5kZWxXaWR0aCAtIG1pbkxhYmVsV2lkdGgpIC8gMiArICdweCc7XHJcbiAgICBtYXhMYWJlbC5zdHlsZS5sZWZ0ID0gKG1heEhhbmRlbFdpZHRoIC0gbWF4TGFiZWxXaWR0aCkgLyAyICsgJ3B4JztcclxuICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgSGFuZGVscyB7XHJcblxyXG4gIHByaXZhdGUgbWluSGFuZGVsOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBtYXhIYW5kZWw6IEhUTUxTcGFuRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsZXQgbWluOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBsZXQgbWF4OiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBtaW4uY2xhc3NMaXN0LmFkZCgnbWluU2xpZGVySGFuZGVsJyk7XHJcbiAgICBtYXguY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVySGFuZGVsJyk7XHJcbiAgICB0aGlzLm1pbkhhbmRlbCA9IG1pbjtcclxuICAgIHRoaXMubWF4SGFuZGVsID0gbWF4O1xyXG4gIH07XHJcblxyXG4gIGdldEVsZW1lbnRzKCk6IG9iamVjdCB7XHJcbiAgICByZXR1cm4ge21pbjogdGhpcy5taW5IYW5kZWwsIG1heDogdGhpcy5tYXhIYW5kZWx9O1xyXG4gIH07XHJcblxyXG4gIGRpc3BsYXlDb250cm9sbGVyKHRvZ2dsZTogSFRNTElucHV0RWxlbWVudCwgbWF4OiBIVE1MU3BhbkVsZW1lbnQpIHtcclxuICAgIGlmICh0b2dnbGUuY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBtYXguc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtYXguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH07XHJcbiAgfTtcclxuXHJcbn07IiwiZXhwb3J0IGNsYXNzIFNlbGVjdGVkUmFuZ2Uge1xyXG5cclxuICBwcml2YXRlIGludGVydmFsOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsZXQgaW50ZXJ2YWw6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbnRlcnZhbC5jbGFzc0xpc3QuYWRkKCdtYWluSW50ZXJ2YWwnKTtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnRzKCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmludGVydmFsO1xyXG4gIH1cclxufSIsImV4cG9ydCBjbGFzcyBTaWRlTWVudSB7XHJcblxyXG4gIGN1c3RvbVNsaWRlck1lbnVDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gIGhhbmRlbFRvZ2dsZTogSFRNTElucHV0RWxlbWVudDtcclxuICBoYW5kZWxMYWJlbFRvZ2dsZTogSFRNTElucHV0RWxlbWVudDtcclxuICBwbGFuZVRvZ2dsZTogSFRNTElucHV0RWxlbWVudDtcclxuICBtaW5JbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICBtYXhJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsZXQgc2xpZGVyVmFsdWVQOkhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgc2xpZGVyVmFsdWVQLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclBhcmFnVmFsJyk7XHJcbiAgICBzbGlkZXJWYWx1ZVAuaW5uZXJUZXh0ID0gJ9Ci0LXQutGD0YnQtdC1INC30LDQvdGH0LXQvdC40LU6ICc7XHJcbiAgICBcclxuICAgIGxldCBtaW5TbGlkZXJWYWx1ZU91dHB1dDpIVE1MT3V0cHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ291dHB1dCcpO1xyXG4gICAgbWluU2xpZGVyVmFsdWVPdXRwdXQuY2xhc3NMaXN0LmFkZCgnc2xpZGVyVmFsdWUnKTtcclxuICAgIG1pblNsaWRlclZhbHVlT3V0cHV0LmlkID0gJ21pblNsaWRlclZhbHVlJztcclxuICAgIGxldCBtYXhTbGlkZXJWYWx1ZU91dHB1dDpIVE1MT3V0cHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ291dHB1dCcpO1xyXG4gICAgbWF4U2xpZGVyVmFsdWVPdXRwdXQuY2xhc3NMaXN0LmFkZCgnc2xpZGVyVmFsdWUnKTtcclxuICAgIG1heFNsaWRlclZhbHVlT3V0cHV0LmlkID0gJ21heFNsaWRlclZhbHVlJztcclxuICAgIFxyXG4gICAgbGV0IHNsaWRlclRvZ2dsZVA6SFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBzbGlkZXJUb2dnbGVQLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclBhcmFnJyk7XHJcbiAgICBzbGlkZXJUb2dnbGVQLmlubmVyVGV4dCA9ICfQktC60LvRjtGH0LjRgtGMINCy0YLQvtGA0L7QuSDQv9C+0LvQt9GD0L3QvtC6OiAnO1xyXG4gICAgXHJcbiAgICBsZXQgc2xpZGVyVG9nZ2xlTGFiZWw6SFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBzbGlkZXJUb2dnbGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJUb2dnbGUnKTtcclxuXHJcbiAgICBsZXQgbWF4U2xpZGVySGFuZGVsVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIG1heFNsaWRlckhhbmRlbFRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJIYW5kZWxUb2dnbGUnKTtcclxuICAgIG1heFNsaWRlckhhbmRlbFRvZ2dsZS5pZCA9ICdtYXhTbGlkZXJIYW5kZWxUb2dnbGUnO1xyXG4gICAgbWF4U2xpZGVySGFuZGVsVG9nZ2xlLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXHJcblxyXG4gICAgbGV0IGN1c3RvbVNsaWRlckJvcmRlcjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY3VzdG9tU2xpZGVyQm9yZGVyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVRvZ2dsZVNsaWRlckJvcmRlcicpO1xyXG5cclxuICAgIGxldCBjdXN0b21TbGlkZXJJbnB1dHM6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHMuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVySW5wdXRzJyk7XHJcbiAgICBcclxuICAgIGxldCBjdXN0b21TbGlkZXJJbnB1dHNQOiBIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c1AuaW5uZXJUZXh0ID0gJ9CY0LfQvNC10L3QuNGC0Ywg0LfQvdCw0YfQtdC90LjQtTogJztcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c1AuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyUGFyYWcnKTtcclxuXHJcbiAgICBsZXQgY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWwuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVySW5wdXRsYWJlbCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY3VzdG9tU2xpZGVyTWluSW5wdXQnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01pbkxhYmVsLmlubmVyVGV4dCA9ICdNaW46ICc7XHJcbiAgICBcclxuICAgIGxldCBjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJJbnB1dGxhYmVsJyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjdXN0b21TbGlkZXJNYXhJbnB1dCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWF4TGFiZWwuaW5uZXJUZXh0ID0gJ01heDogJztcclxuXHJcbiAgICBsZXQgY3VzdG9tU2xpZGVySW5wdXRzTWluOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01pbi5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJNaW5JbnB1dCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluLmlkID0gJ2N1c3RvbVNsaWRlck1pbklucHV0JztcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01pbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XHJcblxyXG4gICAgbGV0IGN1c3RvbVNsaWRlcklucHV0c01heDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXguY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyTWF4SW5wdXQnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01heC5pZCA9ICdjdXN0b21TbGlkZXJNYXhJbnB1dCc7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXguc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JWYWx1ZXNDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclZhbHVlc1A6IEhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzUC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJQYXJhZycpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzUC5pbm5lclRleHQgPSAn0JLQutC70Y7Rh9C40YLRjCDQt9C90LDRh9C10L3QuNGPINC/0L7QtCDQv9C+0LvQt9GD0L3QutCw0LzQuDogJztcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yVmFsdWVzTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzTGFiZWwuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyVG9nZ2xlJyk7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclZhbHVlc0lucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzSW5wdXQuY2xhc3NMaXN0LmFkZCgnc2hvd1ZhbHVlVG9nZ2xlJyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNJbnB1dC5pZCA9ICdzaG93VmFsdWVUb2dnbGUnO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JWYWx1ZXNTcGFuOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNTcGFuLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVRvZ2dsZVNsaWRlckJvcmRlcicpO1xyXG4gICAgXHJcbiAgICBsZXQgdG9nZ2xlRm9yUGxhbmVDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclBsYW5lUDogSFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZVAuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyUGFyYWcnKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lUC5pbm5lclRleHQgPSAn0JjQt9C80LXQvdC40YLRjCDQv9C70L7RgdC60L7RgdGC0Yw6ICc7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclBsYW5lTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgdG9nZ2xlRm9yUGxhbmVMYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJUb2dnbGUnKTtcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yUGxhbmVJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgdG9nZ2xlRm9yUGxhbmVJbnB1dC5jbGFzc0xpc3QuYWRkKCdwbGFuZVRvZ2dsZScpO1xyXG4gICAgdG9nZ2xlRm9yUGxhbmVJbnB1dC5pZCA9ICdwbGFuZVRvZ2dsZSc7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclBsYW5lU3BhbjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdG9nZ2xlRm9yUGxhbmVTcGFuLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVRvZ2dsZVNsaWRlckJvcmRlcicpO1xyXG5cclxuXHJcbiAgICBsZXQgbWFpblNsaWRlckNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlck1lbnVDb250YWluZXInKTtcclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuYXBwZW5kKHNsaWRlclZhbHVlUCk7XHJcbiAgICBzbGlkZXJWYWx1ZVAuYXBwZW5kKG1pblNsaWRlclZhbHVlT3V0cHV0KTtcclxuICAgIHNsaWRlclZhbHVlUC5hcHBlbmQobWF4U2xpZGVyVmFsdWVPdXRwdXQpO1xyXG4gICAgbWFpblNsaWRlckNvbnRhaW5lci5hcHBlbmQoc2xpZGVyVG9nZ2xlUCk7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZChzbGlkZXJUb2dnbGVMYWJlbCk7XHJcbiAgICBzbGlkZXJUb2dnbGVMYWJlbC5hcHBlbmQobWF4U2xpZGVySGFuZGVsVG9nZ2xlLCBjdXN0b21TbGlkZXJCb3JkZXIpO1xyXG5cclxuICAgIGN1c3RvbVNsaWRlcklucHV0cy5hcHBlbmQoY3VzdG9tU2xpZGVySW5wdXRzUCwgY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWwsIGN1c3RvbVNsaWRlcklucHV0c01pbiwgY3VzdG9tU2xpZGVySW5wdXRzTWF4TGFiZWwsIGN1c3RvbVNsaWRlcklucHV0c01heCk7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZChjdXN0b21TbGlkZXJJbnB1dHMpO1xyXG5cclxuICAgIHRvZ2dsZUZvclZhbHVlc0NvbnRhaW5lci5hcHBlbmQodG9nZ2xlRm9yVmFsdWVzUCwgdG9nZ2xlRm9yVmFsdWVzTGFiZWwpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzTGFiZWwuYXBwZW5kKHRvZ2dsZUZvclZhbHVlc0lucHV0LCB0b2dnbGVGb3JWYWx1ZXNTcGFuKTtcclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuYXBwZW5kKHRvZ2dsZUZvclZhbHVlc0NvbnRhaW5lcik7XHJcblxyXG4gICAgdG9nZ2xlRm9yUGxhbmVDb250YWluZXIuYXBwZW5kKHRvZ2dsZUZvclBsYW5lUCwgdG9nZ2xlRm9yUGxhbmVMYWJlbCk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZUxhYmVsLmFwcGVuZCh0b2dnbGVGb3JQbGFuZUlucHV0LCB0b2dnbGVGb3JQbGFuZVNwYW4pO1xyXG4gICAgbWFpblNsaWRlckNvbnRhaW5lci5hcHBlbmQodG9nZ2xlRm9yUGxhbmVDb250YWluZXIpO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tU2xpZGVyTWVudUNvbnRhaW5lciA9IG1haW5TbGlkZXJDb250YWluZXI7XHJcbiAgICB0aGlzLmhhbmRlbFRvZ2dsZSA9IG1heFNsaWRlckhhbmRlbFRvZ2dsZTtcclxuICAgIHRoaXMuaGFuZGVsTGFiZWxUb2dnbGUgPSB0b2dnbGVGb3JWYWx1ZXNJbnB1dDtcclxuICAgIHRoaXMucGxhbmVUb2dnbGUgPSB0b2dnbGVGb3JQbGFuZUlucHV0O1xyXG4gICAgdGhpcy5taW5JbnB1dCA9IGN1c3RvbVNsaWRlcklucHV0c01pbjtcclxuICAgIHRoaXMubWF4SW5wdXQgPSBjdXN0b21TbGlkZXJJbnB1dHNNYXg7XHJcbiAgfTtcclxuXHJcbiAgZ2V0RWxlbWVudHMoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1lbnU6IHRoaXMuY3VzdG9tU2xpZGVyTWVudUNvbnRhaW5lcixcclxuICAgICAgaGFuZGVsVG9nZ2xlOiB0aGlzLmhhbmRlbFRvZ2dsZSxcclxuICAgICAgaGFuZGVsTGFiZWxUb2dnbGU6IHRoaXMuaGFuZGVsTGFiZWxUb2dnbGUsXHJcbiAgICAgIHBsYW5lVG9nZ2xlOiB0aGlzLnBsYW5lVG9nZ2xlLFxyXG4gICAgICBtaW5JbnB1dDogdGhpcy5taW5JbnB1dCxcclxuICAgICAgbWF4SW5wdXQ6IHRoaXMubWF4SW5wdXRcclxuICAgIH07XHJcbiAgfTtcclxufTsiLCJpbnRlcmZhY2UgSGFuZGVscyB7XHJcbiAgW2tleTogc3RyaW5nXTogSFRNTExhYmVsRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MRGl2RWxlbWVudDtcclxufVxyXG5pbnRlcmZhY2UgTXlEYXRhT2JqZWN0IHtcclxuICBba2V5OiBzdHJpbmddOiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcclxuICB9O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhcnRIYW5kZWxzUG9zaXRpb25zRGF0YSB7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTbGlkZXJNb3ZlbWVudCB7XHJcbiAgcHJpdmF0ZSBtaW46IEhUTUxTcGFuRWxlbWVudDtcclxuICBwcml2YXRlIG1heDogSFRNTFNwYW5FbGVtZW50O1xyXG4gIHByaXZhdGUgbWluTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBtYXhMYWJlbDogSFRNTExhYmVsRWxlbWVudDtcclxuICBwcml2YXRlIHNsaWRlclJhbmdlOiBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIGhhbmRlbHNUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBwbGFuZVRvZ2dsZTogSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIGludGVydmFsOiBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIHN0ZXA6IG51bWJlciB8IHN0cmluZyB8IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBzdGVwQW1vdW50OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCBoYW5kZWxzOiBIYW5kZWxzKSB7XHJcbiAgICB0aGlzLm1pbiA9IGhhbmRlbHMubWluO1xyXG4gICAgdGhpcy5tYXggPSBoYW5kZWxzLm1heDtcclxuICAgIHRoaXMubWluTGFiZWwgPSBoYW5kZWxzLm1pbkxhYmVsO1xyXG4gICAgdGhpcy5tYXhMYWJlbD0gaGFuZGVscy5tYXhMYWJlbDtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UgPSBoYW5kZWxzLnNsaWRlclJhbmdlO1xyXG4gICAgdGhpcy5oYW5kZWxzVG9nZ2xlID0gaGFuZGVscy5oYW5kZWxzVG9nZ2xlO1xyXG4gICAgdGhpcy5wbGFuZVRvZ2dsZSA9IGhhbmRlbHMucGxhbmVUb2dnbGU7XHJcbiAgICB0aGlzLmludGVydmFsID0gaGFuZGVscy5pbnRlcnZhbDtcclxuICAgIHRoaXMuc3RlcCA9IGhhbmRlbHMuc3RlcDtcclxuICB9XHJcblxyXG4gIG15RGF0YTogTXlEYXRhT2JqZWN0ID0ge1xyXG4gICAgJ21pbic6IHt9LFxyXG4gICAgJ21heCc6IHt9XHJcbiAgfVxyXG5cclxuICBzdGFydEhhbmRsZXJzUG9zaXRpb25zKHBvc2l0aW9uVmFsdWVzOiBTdGFydEhhbmRlbHNQb3NpdGlvbnNEYXRhICkge1xyXG4gICAgbGV0IG1pbjogc3RyaW5nID0gKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpIC8gK3Bvc2l0aW9uVmFsdWVzLnBvc2l0aW9ucykgKiAoK3Bvc2l0aW9uVmFsdWVzWydtaW4nXSAtICtwb3NpdGlvblZhbHVlc1snbWluaW11bSddKSArICcnO1xyXG4gICAgbGV0IG1heDogc3RyaW5nID0gKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpIC8gK3Bvc2l0aW9uVmFsdWVzLnBvc2l0aW9ucykgKiAoK3Bvc2l0aW9uVmFsdWVzWydtYXgnXSAtICtwb3NpdGlvblZhbHVlc1snbWluaW11bSddKSArICcnO1xyXG4gICAgXHJcbiAgICB0aGlzLm15RGF0YS5taW4ubWluID0gbWluO1xyXG4gICAgdGhpcy5teURhdGEubWF4Lm1heCA9IG1heDtcclxuICAgIFxyXG4gICAgdGhpcy5taW4uc3R5bGUubGVmdCA9IG1pbiArICdweCc7XHJcbiAgICB0aGlzLm1heC5zdHlsZS5sZWZ0ID0gbWF4ICsgJ3B4JztcclxuICAgIFxyXG4gICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5sZWZ0ID0gK21pbiArIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICB0aGlzLmludGVydmFsLnN0eWxlLnJpZ2h0ID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSArbWF4KSAtIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgfVxyXG5cclxuICBtaW5IYW5kZWxMaXN0ZW5lciggZXZlbnQsIHRlc3Q6b2JqZWN0ICkge1xyXG4gICAgbGV0IG1pbiA9IHRoaXMubWluO1xyXG4gICAgbGV0IG1heCA9IHRoaXMubWF4O1xyXG4gICAgbGV0IG1pbkxhYmVsID0gdGhpcy5taW5MYWJlbDtcclxuICAgIGxldCBzbGlkZXJSYW5nZSA9IHRoaXMuc2xpZGVyUmFuZ2U7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICBsZXQgc2hpZnQ6IG51bWJlcjtcclxuICAgIGxldCBkb3VibGVIYW5kZWxzID0gdGhpcy5oYW5kZWxzVG9nZ2xlLmNoZWNrZWQ7XHJcbiAgICBsZXQgdmVydGljYWwgPSB0aGlzLnBsYW5lVG9nZ2xlLmNoZWNrZWQ7XHJcbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmludGVydmFsO1xyXG4gICAgbGV0IHN0ZXA7XHJcblxyXG4gICAgaWYgKHRoaXMuc3RlcCAhPT0gZmFsc2UpIHtcclxuICAgICAgc3RlcCA9IChzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG1pbi5vZmZzZXRXaWR0aCkgLyB0aGlzLnN0ZXBBbW91bnQgKiArdGhpcy5zdGVwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICBzaGlmdCA9IGV2ZW50LmNsaWVudFkgLSBtaW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gbWluLm9mZnNldFdpZHRoO1xyXG4gICAgfSBlbHNlIHsgIFxyXG4gICAgICBzaGlmdCA9IGV2ZW50LmNsaWVudFggLSBtaW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgIH1cclxuICAgIFxyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcbiAgICBcclxuICAgIGlmKCB0ZXN0ICE9PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgIG9uTW91c2VNb3ZlKCB0ZXN0IClcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50ICkge1xyXG4gICAgICBsZXQgbmV3TGVmdDogbnVtYmVyO1xyXG5cclxuICAgICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgICAgbmV3TGVmdCA9IHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gKGV2ZW50LmNsaWVudFkgLSBzaGlmdCAtIHNsaWRlclJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3TGVmdCA9IGV2ZW50LmNsaWVudFggLSBzaGlmdCAtIHNsaWRlclJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBsZXQgcmlnaHRFZGdlID0gc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSBtaW4ub2Zmc2V0V2lkdGg7XHJcbiAgICAgIFxyXG4gICAgICBpZiAodGhhdC5zdGVwICE9PSBmYWxzZSkge1xyXG4gICAgICAgIGlmIChuZXdMZWZ0ID49ICt0aGF0Lm15RGF0YS5taW4ubWluICsgc3RlcCB8fCBuZXdMZWZ0IDw9ICt0aGF0Lm15RGF0YS5taW4ubWluIC0gc3RlcCkge1xyXG4gICAgICAgICAgbmV3TGVmdCA+PSArdGhhdC5teURhdGEubWluLm1pbiArIHN0ZXAgPyBuZXdMZWZ0ID0gK3RoYXQubXlEYXRhLm1pbi5taW4gKyBzdGVwIDogZmFsc2U7XHJcbiAgICAgICAgICBuZXdMZWZ0IDw9ICt0aGF0Lm15RGF0YS5taW4ubWluIC0gc3RlcCA/IG5ld0xlZnQgPSArdGhhdC5teURhdGEubWluLm1pbiAtIHN0ZXAgOiBmYWxzZTtcclxuICAgICAgICAgIHJlbmV3YWxPZlBvc2l0aW9uKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJlbmV3YWxPZlBvc2l0aW9uKCk7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICBmdW5jdGlvbiByZW5ld2FsT2ZQb3NpdGlvbigpOiB2b2lkIHtcclxuXHJcbiAgICAgICAgaWYgKG5ld0xlZnQgPCAwKSB7XHJcbiAgICAgICAgICBuZXdMZWZ0ID0gMDtcclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChkb3VibGVIYW5kZWxzKSB7IFxyXG4gICAgICAgICAgaWYgKG5ld0xlZnQgPj0gK3RoYXQubXlEYXRhLm1heFsnbWF4J10gLSBtYXgub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICAgICAgbmV3TGVmdCA9ICt0aGF0Lm15RGF0YS5tYXhbJ21heCddIC0gbWF4Lm9mZnNldFdpZHRoXHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBpZiAobmV3TGVmdCA+IHJpZ2h0RWRnZSkge1xyXG4gICAgICAgICAgICBuZXdMZWZ0ID0gcmlnaHRFZGdlO1xyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBtaW4uc3R5bGUubGVmdCA9IG5ld0xlZnQgKyAncHgnO1xyXG4gICAgICAgIGludGVydmFsLnN0eWxlLmxlZnQgPSBuZXdMZWZ0ICsgbWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKG5ld0xlZnQgIT09IHVuZGVmaW5lZCB8fCByaWdodEVkZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdGhhdC5teURhdGFbJ21pbiddID0geydtaW4nOiBgJHtuZXdMZWZ0fWAsICdzbGlkZXJXaWR0aCc6IGAke3NsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gbWluLm9mZnNldFdpZHRofWB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBtaW5MYWJlbC5zdHlsZS5sZWZ0ID0gKChtaW4ub2Zmc2V0V2lkdGggLSBtaW5MYWJlbC5vZmZzZXRXaWR0aCkgLSAxKSAvIDIgKyAncHgnO1xyXG4gICAgICB9ICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlVXAoKSB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYXhIYW5kZWxMaXN0ZW5lciggZXZlbnQsIHRlc3Q6b2JqZWN0ICkge1xyXG4gICAgbGV0IG1heCA9IHRoaXMubWF4O1xyXG4gICAgbGV0IG1pbiA9IHRoaXMubWluO1xyXG4gICAgbGV0IHNsaWRlclJhbmdlID0gdGhpcy5zbGlkZXJSYW5nZTtcclxuICAgIGxldCBzaGlmdDogbnVtYmVyO1xyXG4gICAgbGV0IG1heExhYmVsID0gdGhpcy5tYXhMYWJlbDtcclxuICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIGxldCBkb3VibGVIYW5kZWxzID0gdGhpcy5oYW5kZWxzVG9nZ2xlLmNoZWNrZWQ7XHJcbiAgICBsZXQgdmVydGljYWwgPSB0aGlzLnBsYW5lVG9nZ2xlLmNoZWNrZWQ7XHJcbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmludGVydmFsO1xyXG4gICAgbGV0IHN0ZXA7XHJcblxyXG4gICAgaWYgKHRoaXMuc3RlcCAhPT0gZmFsc2UpIHtcclxuICAgICAgc3RlcCA9IChzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG1pbi5vZmZzZXRXaWR0aCkgLyB0aGlzLnN0ZXBBbW91bnQgKiArdGhpcy5zdGVwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICBzaGlmdCA9IGV2ZW50LmNsaWVudFkgLSBtYXguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gbWF4Lm9mZnNldFdpZHRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hpZnQgPSBldmVudC5jbGllbnRYIC0gbWF4LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG5cclxuICAgIGlmKCB0ZXN0ICE9PSB1bmRlZmluZWQgKSB7XHJcbiAgICAgIG9uTW91c2VNb3ZlKCB0ZXN0IClcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50ICkge1xyXG4gICAgICBsZXQgbmV3TGVmdDogbnVtYmVyO1xyXG4gICAgICBcclxuICAgICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgICAgbmV3TGVmdCA9IHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gKGV2ZW50LmNsaWVudFkgLSBzaGlmdCAtIHNsaWRlclJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3TGVmdCA9IGV2ZW50LmNsaWVudFggLSBzaGlmdCAtIHNsaWRlclJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCByaWdodEVkZ2UgPSBzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG1heC5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAgIGlmICh0aGF0LnN0ZXAgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKG5ld0xlZnQgPj0gK3RoYXQubXlEYXRhLm1heC5tYXggKyBzdGVwIHx8IG5ld0xlZnQgPD0gK3RoYXQubXlEYXRhLm1heC5tYXggLSBzdGVwKSB7XHJcbiAgICAgICAgICBuZXdMZWZ0ID49ICt0aGF0Lm15RGF0YS5tYXgubWF4ICsgc3RlcCA/IG5ld0xlZnQgPSArdGhhdC5teURhdGEubWF4Lm1heCArIHN0ZXAgOiBmYWxzZTtcclxuICAgICAgICAgIG5ld0xlZnQgPD0gK3RoYXQubXlEYXRhLm1heC5tYXggLSBzdGVwID8gbmV3TGVmdCA9ICt0aGF0Lm15RGF0YS5tYXgubWF4IC0gc3RlcCA6IGZhbHNlO1xyXG4gICAgICAgICAgcmVuZXdhbE9mUG9zaXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVuZXdhbE9mUG9zaXRpb24oKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHJlbmV3YWxPZlBvc2l0aW9uKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAobmV3TGVmdCA8IDApIHtcclxuICAgICAgICAgIG5ld0xlZnQgPSAwO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChuZXdMZWZ0ID4gcmlnaHRFZGdlKSB7XHJcbiAgICAgICAgICBuZXdMZWZ0ID0gcmlnaHRFZGdlO1xyXG4gICAgICAgIH07XHJcbiAgXHJcbiAgICAgICAgaWYgKG5ld0xlZnQgPD0gK3RoYXQubXlEYXRhLm1pblsnbWluJ10gKyBtaW4ub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICAgIG5ld0xlZnQgPSArdGhhdC5teURhdGEubWluWydtaW4nXSArIG1pbi5vZmZzZXRXaWR0aFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWF4LnN0eWxlLmxlZnQgPSBuZXdMZWZ0ICsgJ3B4JztcclxuICAgICAgICBpbnRlcnZhbC5zdHlsZS5yaWdodCA9IChzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG5ld0xlZnQpIC0gbWF4Lm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgXHJcbiAgICAgICAgaWYgKG5ld0xlZnQgIT09IHVuZGVmaW5lZCB8fCByaWdodEVkZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdGhhdC5teURhdGFbJ21heCddID0geydtYXgnOiBgJHtuZXdMZWZ0fWAsICdzbGlkZXJXaWR0aCc6IGAke3NsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gbWF4Lm9mZnNldFdpZHRofWB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBtYXhMYWJlbC5zdHlsZS5sZWZ0ID0gKChtYXgub2Zmc2V0V2lkdGggLSBtYXhMYWJlbC5vZmZzZXRXaWR0aCkgLSAxKSAvIDIgKyAncHgnO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZVVwKCkge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGxhbmUoIHRvZ2dsZTpIVE1MSW5wdXRFbGVtZW50LCBib2R5OiBIVE1MRGl2RWxlbWVudCwgbWluVmFsdWU6IEhUTUxQYXJhZ3JhcGhFbGVtZW50LCBtYXhWYWx1ZTogSFRNTFBhcmFncmFwaEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmICh0b2dnbGUuY2hlY2tlZCkge1xyXG4gICAgICBib2R5LnN0eWxlLmhlaWdodCA9IGJvZHkub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgICB0aGlzLnNsaWRlclJhbmdlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLTkwZGVnKSc7XHJcbiAgICAgIHRoaXMuc2xpZGVyUmFuZ2Uuc3R5bGUudG9wID0gYm9keS5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gICAgICB0aGlzLm1pbkxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ21pblNsaWRlckhhbmRlbExhYmVsJyk7XHJcbiAgICAgIHRoaXMubWF4TGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnbWF4U2xpZGVySGFuZGVsTGFiZWwnKTtcclxuICAgICAgdGhpcy5taW5MYWJlbC5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJIYW5kZWxMYWJlbFZlcnRpY2FsJyk7XHJcbiAgICAgIHRoaXMubWF4TGFiZWwuY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVySGFuZGVsTGFiZWxWZXJ0aWNhbCcpO1xyXG4gICAgICBtaW5WYWx1ZS5jbGFzc0xpc3QucmVtb3ZlKCdtaW5TbGlkZXJQb2ludCcpO1xyXG4gICAgICBtYXhWYWx1ZS5jbGFzc0xpc3QucmVtb3ZlKCdtYXhTbGlkZXJQb2ludCcpO1xyXG4gICAgICBtaW5WYWx1ZS5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJQb2ludFZlcnRpY2FsJyk7XHJcbiAgICAgIG1heFZhbHVlLmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlclBvaW50VmVydGljYWwnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJvZHkuc3R5bGUuaGVpZ2h0ID0gJyc7XHJcbiAgICAgIHRoaXMuc2xpZGVyUmFuZ2Uuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XHJcbiAgICAgIHRoaXMuc2xpZGVyUmFuZ2Uuc3R5bGUudG9wID0gJyc7XHJcbiAgICAgIHRoaXMubWluTGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnbWluU2xpZGVySGFuZGVsTGFiZWxWZXJ0aWNhbCcpO1xyXG4gICAgICB0aGlzLm1heExhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ21heFNsaWRlckhhbmRlbExhYmVsVmVydGljYWwnKTtcclxuICAgICAgdGhpcy5taW5MYWJlbC5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJIYW5kZWxMYWJlbCcpO1xyXG4gICAgICB0aGlzLm1heExhYmVsLmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlckhhbmRlbExhYmVsJyk7XHJcbiAgICAgIG1pblZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ21pblNsaWRlclBvaW50VmVydGljYWwnKTtcclxuICAgICAgbWF4VmFsdWUuY2xhc3NMaXN0LnJlbW92ZSgnbWF4U2xpZGVyUG9pbnRWZXJ0aWNhbCcpO1xyXG4gICAgICBtaW5WYWx1ZS5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJQb2ludCcpO1xyXG4gICAgICBtYXhWYWx1ZS5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJQb2ludCcpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBzZWxlY3Rpb25PZlByZXBhcmVkVmFsdWUodGFyZ2V0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0YXJnZXQgPT09ICdtaW4nKSB7XHJcbiAgICAgIHRoaXMubXlEYXRhWydtaW4nXSA9IHsnbWluJzogJzAnLCAnc2xpZGVyV2lkdGgnOmAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gfVxyXG4gICAgICB0aGlzLm1pbi5zdHlsZS5sZWZ0ID0gJzBweCdcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5sZWZ0ID0gMCArIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5oYW5kZWxzVG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICB0aGlzLm15RGF0YVsnbWF4J10gPSB7J21heCc6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gLCAnc2xpZGVyV2lkdGgnOmAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gfTtcclxuICAgICAgICB0aGlzLm1heC5zdHlsZS5sZWZ0ID0gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgICB0aGlzLmludGVydmFsLnN0eWxlLnJpZ2h0ID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoKSArIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5teURhdGFbJ21pbiddID0geydtaW4nOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGh9YCwgJ3NsaWRlcldpZHRoJzpgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGh9YH07XHJcbiAgICAgICAgdGhpcy5taW4uc3R5bGUubGVmdCA9IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCArICdweCc7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5sZWZ0ID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkgKyB0aGlzLm1pbi5vZmZzZXRXaWR0aCAvIDIgKydweCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNpZGVNZW51SW5wdXRzVmFsdWVzVmFsaWRhdGlvbkNoZWNrZXIodGFyZ2V0OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIsIHBvc2l0aW9uczogbnVtYmVyLCBtaW5pbXVtOiBudW1iZXIpOiB2b2lkIHtcclxuICBcclxuICAgIGlmICh0YXJnZXQgPT09ICdtaW4nICYmIHRoaXMuaGFuZGVsc1RvZ2dsZS5jaGVja2VkKSB7XHJcbiAgICAgIGxldCBtaW46IHN0cmluZyA9ICgodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSAvIHBvc2l0aW9ucykgKiAodmFsdWUgLSBtaW5pbXVtKSArICcnO1xyXG5cclxuICAgICAgaWYgKCttaW4gPj0gK3RoaXMubXlEYXRhLm1heC5tYXggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgIG1pbiA9ICt0aGlzLm15RGF0YS5tYXgubWF4IC0gdGhpcy5taW4ub2Zmc2V0V2lkdGggKyAnJztcclxuICAgICAgfSBlbHNlIGlmKCttaW4gPCAwKSB7XHJcbiAgICAgICAgbWluID0gJzAnO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgdGhpcy5teURhdGFbJ21pbiddID0geydtaW4nOiBtaW4sICdzbGlkZXJXaWR0aCc6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gfTtcclxuICAgICAgdGhpcy5taW4uc3R5bGUubGVmdCA9IG1pbiArICdweCc7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUubGVmdCA9ICttaW4gKyB0aGlzLm1pbi5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gICAgfSBlbHNlIGlmICh0YXJnZXQgPT09ICdtaW4nKSB7XHJcbiAgICAgIGxldCBtaW46IHN0cmluZyA9ICgodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSAvIHBvc2l0aW9ucykgKiAodmFsdWUgLSBtaW5pbXVtKSArICcnO1xyXG5cclxuICAgICAgaWYoK21pbiA8IDApIHtcclxuICAgICAgICBtaW4gPSAnMCc7XHJcbiAgICAgIH0gZWxzZSBpZiAoK21pbiA+IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgIG1pbiA9ICh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpICsgJyc7XHJcbiAgICAgIH07XHJcblxyXG4gICAgICB0aGlzLm15RGF0YVsnbWluJ10gPSB7J21pbic6IG1pbiwgJ3NsaWRlcldpZHRoJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWB9O1xyXG4gICAgICB0aGlzLm1pbi5zdHlsZS5sZWZ0ID0gbWluICsgJ3B4JztcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5sZWZ0ID0gK21pbiArIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gJ21heCcpIHtcclxuICAgICAgbGV0IG1heDogc3RyaW5nID0gKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXgub2Zmc2V0V2lkdGgpIC8gcG9zaXRpb25zKSAqICh2YWx1ZSAtIG1pbmltdW0pICsgJyc7XHJcblxyXG4gICAgICBpZiAoK21heCA8PSArdGhpcy5teURhdGEubWluLm1pbiArIHRoaXMubWluLm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgbWF4ID0gK3RoaXMubXlEYXRhLm1pbi5taW4gKyB0aGlzLm1heC5vZmZzZXRXaWR0aCArICcnO1xyXG4gICAgICB9IGVsc2UgaWYoK21heCA+IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCl7XHJcbiAgICAgICAgbWF4ID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkgKyAnJztcclxuICAgICAgfTtcclxuXHJcbiAgICAgIHRoaXMubXlEYXRhWydtYXgnXSA9IHsnbWF4JzogbWF4LCAnc2xpZGVyV2lkdGgnOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXgub2Zmc2V0V2lkdGh9YH07XHJcbiAgICAgIHRoaXMubWF4LnN0eWxlLmxlZnQgPSBtYXggKyAncHgnO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLnJpZ2h0ID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSArbWF4KSAtIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICB9XHJcbiAgfTtcclxufTsiLCJleHBvcnQgY2xhc3MgU2xpZGVyUmFuZ2Uge1xyXG5cclxuICByYW5nZTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgbGV0IGVsZW06IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ3NsaWRlclJhbmdlJyk7XHJcbiAgICB0aGlzLnJhbmdlID0gZWxlbTtcclxuICB9O1xyXG5cclxuICBnZXRFbGVtZW50cygpOiBIVE1MRGl2RWxlbWVudHtcclxuICAgIHJldHVybiB0aGlzLnJhbmdlO1xyXG4gIH07XHJcblxyXG59OyIsImV4cG9ydCBjbGFzcyBWYWx1ZVJhbmdlIHtcclxuICBtaW5WYWx1ZTogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgbWF4VmFsdWU6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvciAodmFsdWVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSkge1xyXG4gICAgbGV0IG1pbjpIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBtYXg6SFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBtaW4uaW5uZXJUZXh0ID0gdmFsdWVzLm1pbjtcclxuICAgIG1heC5pbm5lclRleHQgPSB2YWx1ZXMubWF4O1xyXG4gICAgbWluLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlclBvaW50Jyk7XHJcbiAgICBtYXguY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVyUG9pbnQnKTtcclxuICAgIHRoaXMubWluVmFsdWUgPSBtaW47XHJcbiAgICB0aGlzLm1heFZhbHVlID0gbWF4O1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudHMoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7bWluOiB0aGlzLm1pblZhbHVlLCBtYXg6IHRoaXMubWF4VmFsdWV9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtTbGlkZXJSYW5nZX0gZnJvbSAnLi9jb21wb25lbnRzL3NsaWRlci1yYW5nZS50cyc7XHJcbmltcG9ydCB7SGFuZGVsc30gZnJvbSAnLi9jb21wb25lbnRzL2hhbmRlbHMudHMnO1xyXG5pbXBvcnQge1NsaWRlck1vdmVtZW50fSBmcm9tICcuL2NvbXBvbmVudHMvc2xpZGVyLW1vdmVtZW50LnRzJztcclxuaW1wb3J0IHtTaWRlTWVudX0gZnJvbSAnLi9jb21wb25lbnRzL3NpZGUtbWVudS50cyc7XHJcbmltcG9ydCB7VmFsdWVSYW5nZX0gZnJvbSAnLi9jb21wb25lbnRzL3ZhbHVlUmFuZ2UudHMnO1xyXG5pbXBvcnQge0hhbmRlbHNMYWJlbHN9IGZyb20gJy4vY29tcG9uZW50cy9oYW5kZWxzLWxhYmVscy50cyc7XHJcbmltcG9ydCB7U2VsZWN0ZWRSYW5nZX0gZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdGVkLXJhbmdlLnRzJztcclxuXHJcbmludGVyZmFjZSBTZXR0aW5ncyB7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgYm9vbGVhblxyXG59O1xyXG5cclxuaW50ZXJmYWNlIFNpZGVNZW51RWxlbWVudHMge1xyXG4gIFtrZXk6IHN0cmluZ106IEhUTUxEaXZFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudDtcclxufTtcclxuXHJcbmludGVyZmFjZSBEYXRhT2ZWYWx1ZVJlZnJlc2gge1xyXG4gICdtaW4nPzogc3RyaW5nO1xyXG4gICdtYXgnPzogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXcge1xyXG4gIHByaXZhdGUgdGhhdDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3M7XHJcbiAgcHJpdmF0ZSBzbGlkZXJSYW5nZTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBzbGlkZXJDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHByaXZhdGUgbWluSGFuZGVsOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBtYXhIYW5kZWw6IEhUTUxTcGFuRWxlbWVudDtcclxuICBwcml2YXRlIHNsaWRlck1vdmVtZW50OiBPYmplY3Q7XHJcbiAgcHJpdmF0ZSBzaWRlTWVudTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBzaWRlTWVudUNvbnRhaW5lcjogU3RyaW5nIHwgQm9vbGVhbjtcclxuICBwcml2YXRlIG1pblZhbHVlOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICBwcml2YXRlIG1heFZhbHVlOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICBwcml2YXRlIG1pbkxhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIHByaXZhdGUgbWF4TGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBoYW5kZWxUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBoYW5kZWxMYWJlbFRvZ2dsZTogSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIHBsYW5lVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHByaXZhdGUgbWluSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBtYXhJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIGludGVydmFsOiBIVE1MRGl2RWxlbWVudDtcclxuICBcclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHRhcmdldDogSFRNTERpdkVsZW1lbnQsIHNldHRpbmdzOiBTZXR0aW5ncykge1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG4gICAgdGhpcy50aGF0ID0gdGFyZ2V0O1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZSA9IG5ldyBTbGlkZXJSYW5nZSgpLmdldEVsZW1lbnRzKCk7XHJcbiAgICB0aGlzLm1pbkhhbmRlbCA9IG5ldyBIYW5kZWxzKCkuZ2V0RWxlbWVudHMoKS5taW47XHJcbiAgICB0aGlzLm1heEhhbmRlbCA9IG5ldyBIYW5kZWxzKCkuZ2V0RWxlbWVudHMoKS5tYXg7XHJcbiAgICB0aGlzLm1pblZhbHVlID0gbmV3IFZhbHVlUmFuZ2UoeydtaW4nOiB0aGlzLnNldHRpbmdzWydtaW4nXSwgJ21heCc6IHRoaXMuc2V0dGluZ3NbJ21heCddfSkuZ2V0RWxlbWVudHMoKS5taW47XHJcbiAgICB0aGlzLm1heFZhbHVlID0gbmV3IFZhbHVlUmFuZ2UoeydtaW4nOiB0aGlzLnNldHRpbmdzWydtaW4nXSwgJ21heCc6IHRoaXMuc2V0dGluZ3NbJ21heCddfSkuZ2V0RWxlbWVudHMoKS5tYXg7XHJcbiAgICBpZiAoc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlKSB7XHJcbiAgICAgIGxldCBzaWRlTWVudUVsZW1lbnRzOiBTaWRlTWVudUVsZW1lbnRzID0gbmV3IFNpZGVNZW51KCkuZ2V0RWxlbWVudHMoKTtcclxuICAgICAgdGhpcy5zaWRlTWVudSA9IHNpZGVNZW51RWxlbWVudHMubWVudTtcclxuICAgICAgdGhpcy5oYW5kZWxUb2dnbGUgPSBzaWRlTWVudUVsZW1lbnRzLmhhbmRlbFRvZ2dsZTtcclxuICAgICAgdGhpcy5oYW5kZWxMYWJlbFRvZ2dsZSA9IHNpZGVNZW51RWxlbWVudHMuaGFuZGVsTGFiZWxUb2dnbGU7XHJcbiAgICAgIHRoaXMucGxhbmVUb2dnbGUgPSBzaWRlTWVudUVsZW1lbnRzLnBsYW5lVG9nZ2xlO1xyXG4gICAgICB0aGlzLm1pbklucHV0ID0gc2lkZU1lbnVFbGVtZW50cy5taW5JbnB1dDtcclxuICAgICAgdGhpcy5tYXhJbnB1dCA9IHNpZGVNZW51RWxlbWVudHMubWF4SW5wdXQ7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5zaWRlTWVudUNvbnRhaW5lciA9IHNldHRpbmdzLnNpZGVNZW51Q29udGFpbmVyO1xyXG4gICAgdGhpcy5taW5MYWJlbCA9IG5ldyBIYW5kZWxzTGFiZWxzKCkuZ2V0RWxlbWVudHMoKS5taW47XHJcbiAgICB0aGlzLm1heExhYmVsID0gbmV3IEhhbmRlbHNMYWJlbHMoKS5nZXRFbGVtZW50cygpLm1heDtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBuZXcgU2VsZWN0ZWRSYW5nZSgpLmdldEVsZW1lbnRzKCk7XHJcbiAgICB0aGlzLnNsaWRlck1vdmVtZW50ID0gbmV3IFNsaWRlck1vdmVtZW50KHsnbWluJzogdGhpcy5taW5IYW5kZWwsICdtYXgnOiB0aGlzLm1heEhhbmRlbCwnbWluTGFiZWwnOiB0aGlzLm1pbkxhYmVsLCAnbWF4TGFiZWwnOiB0aGlzLm1heExhYmVsICwnc2xpZGVyUmFuZ2UnOiB0aGlzLnNsaWRlclJhbmdlLCAncGxhbmVUb2dnbGUnOiB0aGlzLnBsYW5lVG9nZ2xlLCAnaGFuZGVsc1RvZ2dsZSc6IHRoaXMuaGFuZGVsVG9nZ2xlLCAnaW50ZXJ2YWwnOiB0aGlzLmludGVydmFsLCAnc3RlcCc6IHRoaXMuc2V0dGluZ3Muc3RlcH0pXHJcbiAgfVxyXG5cclxuICBkaXNwbGF5RWxlbWVudHMoKTogdm9pZCB7XHJcbiAgICBsZXQgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5zbGlkZXJDb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2xpZGVyQm9keScpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZCh0aGlzLnNsaWRlclJhbmdlKTtcclxuICAgIHRoaXMudGhhdC5hcHBlbmQoY29udGFpbmVyKTtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMubWluSGFuZGVsKTtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMubWF4SGFuZGVsKTtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMubWluVmFsdWUpO1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZS5hcHBlbmQodGhpcy5tYXhWYWx1ZSk7XHJcbiAgICB0aGlzLmludGVydmFsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgdGhpcy5taW5IYW5kZWwuYXBwZW5kKHRoaXMubWluTGFiZWwpO1xyXG4gICAgdGhpcy5tYXhIYW5kZWwuYXBwZW5kKHRoaXMubWF4TGFiZWwpO1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1snaGFuZGVsc0xhYmVsJ10gPT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMubWluTGFiZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdGhpcy5tYXhMYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYW5kZWxMYWJlbFRvZ2dsZS5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuc2lkZU1lbnVDb250YWluZXIgIT09ICdmYWxzZScpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNpZGVNZW51Q29udGFpbmVyKS5hcHBlbmQodGhpcy5zaWRlTWVudSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudGhhdC5hcHBlbmQodGhpcy5zaWRlTWVudSlcclxuICAgIH07XHJcbiAgICBcclxuICAgIGlmICh0aGlzLnNldHRpbmdzW1wicmFuZ2VcIl0gPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5tYXhIYW5kZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgICAgdGhpcy5oYW5kZWxUb2dnbGUuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3NbJ3ZlcnRpY2FsJ10gPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5wbGFuZVRvZ2dsZS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zbGlkZXJNb3ZlbWVudC5jaGFuZ2VQbGFuZSh0aGlzLnBsYW5lVG9nZ2xlLCB0aGlzLnNsaWRlckNvbnRhaW5lciwgdGhpcy5taW5WYWx1ZSwgdGhpcy5tYXhWYWx1ZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGlmICh0aGlzLnNldHRpbmdzLnN0ZXAgIT09IGZhbHNlICYmIHRoaXMuc2V0dGluZ3Muc2lkZU1lbnUgIT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQuc2V0QXR0cmlidXRlKCdzdGVwJywgdGhpcy5zZXR0aW5ncy5zdGVwICsgXCJcIik7XHJcbiAgICAgIHRoaXMubWluSW5wdXQuc2V0QXR0cmlidXRlKCdzdGVwJywgdGhpcy5zZXR0aW5ncy5zdGVwICsgXCJcIik7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHJlZnJlc2hDdXJyZW50VmFsdWVzKG5ld0RhdGE6IERhdGFPZlZhbHVlUmVmcmVzaCk6IHZvaWQge1xyXG4gICAgaWYgKCdtaW4nIGluIG5ld0RhdGEgJiYgJ21heCcgaW4gbmV3RGF0YSAmJiB0aGlzLnNldHRpbmdzWydyYW5nZSddID09PSB0cnVlICYmIHRoaXMuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5zaWRlTWVudS5xdWVyeVNlbGVjdG9yKCcjbWluU2xpZGVyVmFsdWUnKS50ZXh0Q29udGVudCA9IG5ld0RhdGEubWluO1xyXG4gICAgICB0aGlzLnNpZGVNZW51LnF1ZXJ5U2VsZWN0b3IoJyNtYXhTbGlkZXJWYWx1ZScpLnRleHRDb250ZW50ID0gYCAtICR7bmV3RGF0YS5tYXh9YDtcclxuICAgICAgdGhpcy5zaWRlTWVudS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tU2xpZGVyTWluSW5wdXQnKS52YWx1ZSA9IG5ld0RhdGEubWluO1xyXG4gICAgICB0aGlzLnNpZGVNZW51LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b21TbGlkZXJNYXhJbnB1dCcpLnZhbHVlID0gbmV3RGF0YS5tYXg7XHJcbiAgICAgIHRoaXMubWluTGFiZWwudGV4dENvbnRlbnQgPSBuZXdEYXRhLm1pbjtcclxuICAgICAgdGhpcy5tYXhMYWJlbC50ZXh0Q29udGVudCA9IG5ld0RhdGEubWF4O1xyXG4gICAgfSBlbHNlIGlmICgnbWluJyBpbiBuZXdEYXRhKSB7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzWydyYW5nZSddID09PSB0cnVlICYmIHRoaXMuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICB0aGlzLnNpZGVNZW51LnF1ZXJ5U2VsZWN0b3IoJyNtaW5TbGlkZXJWYWx1ZScpLnRleHRDb250ZW50ID0gbmV3RGF0YS5taW47O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2lkZU1lbnUucXVlcnlTZWxlY3RvcignI21pblNsaWRlclZhbHVlJykudGV4dENvbnRlbnQgPSBuZXdEYXRhLm1pbjs7XHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuc2lkZU1lbnUucXVlcnlTZWxlY3RvcignLmN1c3RvbVNsaWRlck1pbklucHV0JykudmFsdWUgPSBuZXdEYXRhLm1pbjtcclxuICAgICAgdGhpcy5taW5MYWJlbC50ZXh0Q29udGVudCA9IG5ld0RhdGEubWluO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaWRlTWVudS5xdWVyeVNlbGVjdG9yKCcjbWF4U2xpZGVyVmFsdWUnKS50ZXh0Q29udGVudCA9IGAgLSAke25ld0RhdGEubWF4fWA7XHJcbiAgICAgIHRoaXMuc2lkZU1lbnUucXVlcnlTZWxlY3RvcignLmN1c3RvbVNsaWRlck1heElucHV0JykudmFsdWUgPSBuZXdEYXRhLm1heDtcclxuICAgICAgdGhpcy5tYXhMYWJlbC50ZXh0Q29udGVudCA9IG5ld0RhdGEubWF4O1xyXG4gICAgfTtcclxuICAgIG5ldyBIYW5kZWxzTGFiZWxzKCkuY2VudGVyaW5nUmVsYXRpdmVUb0hhbmRsZXModGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGgsIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRoLCB0aGlzLm1pbkxhYmVsLm9mZnNldFdpZHRoLCB0aGlzLm1heExhYmVsLm9mZnNldFdpZHRoLCB0aGlzLm1pbkxhYmVsLCB0aGlzLm1heExhYmVsKTtcclxuICB9O1xyXG5cclxuICBjYWxsSGFuZGVsTGFiZWxUb2dnbGVDaGFuZ2VyKHRhcmdldDogVmlldyk6IHZvaWQge1xyXG4gICAgbmV3IEhhbmRlbHNMYWJlbHMoKS5kaXNwbGF5Q29udHJvbGxlcih0YXJnZXQuaGFuZGVsTGFiZWxUb2dnbGUsIHRoaXMubWluTGFiZWwsIHRoaXMubWF4TGFiZWwpO1xyXG4gICAgaWYgKHRhcmdldC5oYW5kZWxMYWJlbFRvZ2dsZS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgIG5ldyBIYW5kZWxzTGFiZWxzKCkuY2VudGVyaW5nUmVsYXRpdmVUb0hhbmRsZXModGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGgsIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRoLCB0aGlzLm1pbkxhYmVsLm9mZnNldFdpZHRoLCB0aGlzLm1heExhYmVsLm9mZnNldFdpZHRoLCB0aGlzLm1pbkxhYmVsLCB0aGlzLm1heExhYmVsKVxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjYWxsTWF4SGFuZGVsVG9nZ2xlQ2hhbmdlcih0YXJnZXQ6IFZpZXcpOiB2b2lkIHtcclxuICAgIGlmICh0YXJnZXQuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMuc2xpZGVyTW92ZW1lbnQubXlEYXRhWydtYXgnXSA9IHsnbWF4JzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRofWAsICdzbGlkZXJXaWR0aCc6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbkhhbmRlbC5vZmZzZXRXaWR0aH1gfVxyXG4gICAgICB0aGlzLm1heEhhbmRlbC5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRofXB4YDtcclxuICAgICAgdGhpcy5zaWRlTWVudS5xdWVyeVNlbGVjdG9yKCcjbWF4U2xpZGVyVmFsdWUnKS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICB0aGlzLm1heElucHV0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgdGhpcy5tYXhJbnB1dC5zdHlsZS5vcGFjaXR5ID0gJzAuMyc7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH07XHJcbiAgICBcclxuICAgIG5ldyBIYW5kZWxzKCkuZGlzcGxheUNvbnRyb2xsZXIodGFyZ2V0LmhhbmRlbFRvZ2dsZSwgdGhpcy5tYXhIYW5kZWwpO1xyXG5cclxuICAgIGlmICh0YXJnZXQuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5tYXhJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUucmlnaHQgPSB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbkhhbmRlbC5vZmZzZXRXaWR0aCAvIDIgKSArICdweCc7XHJcbiAgICAgIGlmICh0aGlzLnNsaWRlck1vdmVtZW50Lm15RGF0YS5taW5bJ21pbiddID49IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1heEhhbmRlbC5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJNb3ZlbWVudC5teURhdGFbJ21pbiddID0geydtaW4nOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXhIYW5kZWwub2Zmc2V0V2lkdGggLSB0aGlzLm1pbkhhbmRlbC5vZmZzZXRXaWR0aH1gLCAnc2xpZGVyV2lkdGgnOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXhIYW5kZWwub2Zmc2V0V2lkdGh9YH1cclxuICAgICAgICB0aGlzLm1pbkhhbmRlbC5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRoIC0gdGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGh9cHhgO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZWZyZXNoTWF4U2lkZU1lbnVEYXRhKGRhdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5zaWRlTWVudS5xdWVyeVNlbGVjdG9yKCcjbWF4U2xpZGVyVmFsdWUnKS50ZXh0Q29udGVudCA9IGAgLSAke2RhdGF9YDtcclxuICAgIHRoaXMubWF4SW5wdXQuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgIHRoaXMubWF4SW5wdXQudmFsdWUgPSBgJHtkYXRhfWA7XHJcbiAgfTtcclxuXHJcbiAgaW5wdXRzUG9zc2libGVSYW5nZSggZGF0YTogb2JqZWN0LCBtaW46IEhUTUxJbnB1dEVsZW1lbnQsIG1heDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xyXG4gICAgbWluLnNldEF0dHJpYnV0ZSgnbWF4JywgZGF0YS5tYXgpO1xyXG4gICAgbWluLnNldEF0dHJpYnV0ZSgnbWluJywgZGF0YS5taW4pO1xyXG4gICAgbWF4LnNldEF0dHJpYnV0ZSgnbWF4JywgZGF0YS5tYXgpO1xyXG4gIH07XHJcbiAgICBcclxufTtcclxuIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vY29tcG9uZW50cy92aWV3L3ZpZXcudHMnO1xyXG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RlbC9Nb2RlbC50cyc7XHJcbmltcG9ydCB7IEZhY2FkZSB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RlbC9mYWNhZGUudHMnO1xyXG5pbXBvcnQgeyBQcmVzZW50ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJlc2VudGVyL3ByZXNlbnRlci50cyc7XHJcblxyXG4oZnVuY3Rpb24oICQgKSB7XHJcbiAgJC5mbi50ZXN0U2xpZGVyID0gZnVuY3Rpb24oIG9wdGlvbnMgKSB7XHJcblxyXG4gICAgdmFyIHNldHRpbmdzID0gJC5leHRlbmQoIHtcclxuICAgICAgJ21pbic6ICcwJyxcclxuICAgICAgJ21heCc6ICcxMCcsXHJcbiAgICAgICdyYW5nZSc6IGZhbHNlLFxyXG4gICAgICAnc2lkZS1tZW51JzogZmFsc2UsXHJcbiAgICAgICdoYW5kZWxzTGFiZWwnOiBmYWxzZSxcclxuICAgICAgJ3ZlcnRpY2FsJzogZmFsc2UsXHJcbiAgICAgICdzdGVwJzogZmFsc2UsXHJcbiAgICAgICdzaWRlTWVudUNvbnRhaW5lcic6ICdmYWxzZSdcclxuICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgIGxldCB0aGF0OiBIVE1MRGl2RWxlbWVudCA9IHRoaXM7XHJcbiAgICBcclxuICAgIGxldCBtb2RlbDtcclxuICAgIGlmICgnY3VycmVudC1taW4nIGluIHNldHRpbmdzICYmICdjdXJyZW50LW1heCcgaW4gc2V0dGluZ3MpIHtcclxuICAgICAgbW9kZWwgPSBuZXcgTW9kZWwoeydtaW4nOiBzZXR0aW5nc1snbWluJ10sIG1heDogc2V0dGluZ3NbJ21heCddLCAnY3VycmVudC1taW4nOiBzZXR0aW5nc1snY3VycmVudC1taW4nXSwgJ2N1cnJlbnQtbWF4Jzogc2V0dGluZ3NbJ2N1cnJlbnQtbWF4J119KTtcclxuICAgIH0gZWxzZSBpZiAoJ2N1cnJlbnQtbWluJyBpbiBzZXR0aW5ncykge1xyXG4gICAgICBtb2RlbCA9IG5ldyBNb2RlbCh7J21pbic6IHNldHRpbmdzWydtaW4nXSwgbWF4OiBzZXR0aW5nc1snbWF4J10sICdjdXJyZW50LW1pbic6IHNldHRpbmdzWydjdXJyZW50LW1pbiddLCAnY3VycmVudC1tYXgnOiBzZXR0aW5nc1snbWF4J119KTtcclxuICAgIH0gZWxzZSBpZiAoJ2N1cnJlbnQtbWF4JyBpbiBzZXR0aW5ncykge1xyXG4gICAgICBtb2RlbCA9IG5ldyBNb2RlbCh7J21pbic6IHNldHRpbmdzWydtaW4nXSwgbWF4OiBzZXR0aW5nc1snbWF4J10sICdjdXJyZW50LW1pbic6IHNldHRpbmdzWydtaW4nXSwgJ2N1cnJlbnQtbWF4Jzogc2V0dGluZ3NbJ2N1cnJlbnQtbWF4J119KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1vZGVsID0gbmV3IE1vZGVsKHsnbWluJzogc2V0dGluZ3NbJ21pbiddLCBtYXg6IHNldHRpbmdzWydtYXgnXSwgJ2N1cnJlbnQtbWluJzogc2V0dGluZ3NbJ21pbiddLCAnY3VycmVudC1tYXgnOiBzZXR0aW5nc1snbWF4J119KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHZpZXcgPSBuZXcgVmlldyh0aGF0LCBzZXR0aW5ncyk7XHJcbiAgICBcclxuICAgIGxldCBmYWNhZGUgPSBuZXcgRmFjYWRlKG1vZGVsKVxyXG4gICAgXHJcbiAgICBsZXQgcHJlc2VudGVyID0gUHJlc2VudGVyKHZpZXcsIGZhY2FkZSk7XHJcbiAgfTtcclxufSkoalF1ZXJ5KTsiXSwic291cmNlUm9vdCI6IiJ9