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

      console.log("Shift:".concat(shift, ", clientX:").concat(event.clientX, ", min.getRect(): ").concat(min.getBoundingClientRect().left));
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);

      if (test !== undefined) {
        onMouseMove(event);
      }

      function onMouseMove(event) {
        var newLeft;

        if (vertical) {
          newLeft = sliderRange.offsetWidth - (event.clientY - shift - sliderRange.getBoundingClientRect().top);
        } else {
          newLeft = event.clientX - shift - sliderRange.getBoundingClientRect().left;
        }

        ;
        var rightEdge = sliderRange.offsetWidth - min.offsetWidth;
        console.log("newLeft:".concat(newLeft, ", shift:").concat(shift, ", sliderRange.getRect(): ").concat(sliderRange.getBoundingClientRect().left));

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
    value: function maxHandelListener(event) {
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
        }

        this.myData['min'] = {
          'min': min,
          'sliderWidth': "".concat(this.sliderRange.offsetWidth - this.min.offsetWidth)
        };
        this.min.style.left = min + 'px';
        this.interval.style.left = min + this.min.offsetWidth / 2 + 'px';
      } else if (target === 'min') {
        var _min = (this.sliderRange.offsetWidth - this.min.offsetWidth) / positions * (value - minimum) + '';

        this.myData['min'] = {
          'min': _min,
          'sliderWidth': "".concat(this.sliderRange.offsetWidth - this.min.offsetWidth)
        };
        this.min.style.left = _min + 'px';
        this.interval.style.left = _min + this.min.offsetWidth / 2 + 'px';
      } else if (target === 'max') {
        var max = (this.sliderRange.offsetWidth - this.max.offsetWidth) / positions * (value - minimum) + '';

        if (+max <= +this.myData.min.min + this.min.offsetWidth) {
          max = +this.myData.min.min + this.max.offsetWidth + '';
        }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwvTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwvZmFjYWRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRlci9wcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL2hhbmRlbHMtbGFiZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9oYW5kZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9zZWxlY3RlZC1yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NvbXBvbmVudHMvc2lkZS1tZW51LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9zbGlkZXItbW92ZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL3NsaWRlci1yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NvbXBvbmVudHMvdmFsdWVSYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L3ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pxdWVyeS51aS5jdXN0b21TbGlkZXIudHMiXSwibmFtZXMiOlsiTW9kZWwiLCJzZXR0aW5ncyIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJtaW4iLCJtYXgiLCJGYWNhZGUiLCJtb2RlbCIsImdldEN1cnJlbnREYXRhIiwicHJvcCIsIk1hdGgiLCJyb3VuZCIsIlByZXNlbnRlciIsInZpZXciLCJmYWNhZGUiLCJkaXNwbGF5RWxlbWVudHMiLCJzbGlkZXJNb3ZlbWVudCIsIm15RGF0YSIsIlByb3h5Iiwic2V0IiwidGFyZ2V0IiwidmFsIiwibW9kZWxSZXN1bHQiLCJyZWZyZXNoTW9kZWxEYXRhIiwicmVmcmVzaEN1cnJlbnRWYWx1ZXMiLCJzdGVwIiwic3RlcEFtb3VudCIsImdldFBvc2l0aW9uc0Ftb3VudCIsIm1pbkhhbmRlbCIsIm9ubW91c2Vkb3duIiwiZXZlbnQiLCJtaW5IYW5kZWxMaXN0ZW5lciIsIm1heEhhbmRlbCIsIm1heEhhbmRlbExpc3RlbmVyIiwiaGFuZGVsTGFiZWxUb2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FsbEhhbmRlbExhYmVsVG9nZ2xlQ2hhbmdlciIsImhhbmRlbFRvZ2dsZSIsImNhbGxNYXhIYW5kZWxUb2dnbGVDaGFuZ2VyIiwiY2hlY2tlZCIsInJlc3VsdCIsImdldE1heERhdGEiLCJyZWZyZXNoTWF4U2lkZU1lbnVEYXRhIiwicGxhbmVUb2dnbGUiLCJjaGFuZ2VQbGFuZSIsInNsaWRlckNvbnRhaW5lciIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJzZWxlY3Rpb25PZlByZXBhcmVkVmFsdWUiLCJtaW5JbnB1dCIsInBvc2l0aW9ucyIsInNpZGVNZW51SW5wdXRzVmFsdWVzVmFsaWRhdGlvbkNoZWNrZXIiLCJ2YWx1ZSIsIm1heElucHV0IiwicG9zc2libGVSYW5nZSIsImdldFBvc3NpYmxlUmFuZ2UiLCJpbnB1dHNQb3NzaWJsZVJhbmdlIiwic3RhcnRQb3NpdGlvbnMiLCJzdGFydEhhbmRlbHNQb3NpdGlvbiIsInN0YXJ0SGFuZGxlcnNQb3NpdGlvbnMiLCJIYW5kZWxzTGFiZWxzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibWluTGFiZWwiLCJtYXhMYWJlbCIsInRvZ2dsZSIsInN0eWxlIiwiZGlzcGxheSIsIm1pbkhhbmRlbFdpZHRoIiwibWF4SGFuZGVsV2lkdGgiLCJtaW5MYWJlbFdpZHRoIiwibWF4TGFiZWxXaWR0aCIsImxlZnQiLCJIYW5kZWxzIiwiU2VsZWN0ZWRSYW5nZSIsImludGVydmFsIiwiU2lkZU1lbnUiLCJzbGlkZXJWYWx1ZVAiLCJpbm5lclRleHQiLCJtaW5TbGlkZXJWYWx1ZU91dHB1dCIsImlkIiwibWF4U2xpZGVyVmFsdWVPdXRwdXQiLCJzbGlkZXJUb2dnbGVQIiwic2xpZGVyVG9nZ2xlTGFiZWwiLCJtYXhTbGlkZXJIYW5kZWxUb2dnbGUiLCJzZXRBdHRyaWJ1dGUiLCJjdXN0b21TbGlkZXJCb3JkZXIiLCJjdXN0b21TbGlkZXJJbnB1dHMiLCJjdXN0b21TbGlkZXJJbnB1dHNQIiwiY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWwiLCJjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbCIsImN1c3RvbVNsaWRlcklucHV0c01pbiIsImN1c3RvbVNsaWRlcklucHV0c01heCIsInRvZ2dsZUZvclZhbHVlc0NvbnRhaW5lciIsInRvZ2dsZUZvclZhbHVlc1AiLCJ0b2dnbGVGb3JWYWx1ZXNMYWJlbCIsInRvZ2dsZUZvclZhbHVlc0lucHV0IiwidG9nZ2xlRm9yVmFsdWVzU3BhbiIsInRvZ2dsZUZvclBsYW5lQ29udGFpbmVyIiwidG9nZ2xlRm9yUGxhbmVQIiwidG9nZ2xlRm9yUGxhbmVMYWJlbCIsInRvZ2dsZUZvclBsYW5lSW5wdXQiLCJ0b2dnbGVGb3JQbGFuZVNwYW4iLCJtYWluU2xpZGVyQ29udGFpbmVyIiwiYXBwZW5kIiwiY3VzdG9tU2xpZGVyTWVudUNvbnRhaW5lciIsIm1lbnUiLCJTbGlkZXJNb3ZlbWVudCIsImhhbmRlbHMiLCJzbGlkZXJSYW5nZSIsImhhbmRlbHNUb2dnbGUiLCJwb3NpdGlvblZhbHVlcyIsIm9mZnNldFdpZHRoIiwicmlnaHQiLCJ0ZXN0IiwidGhhdCIsInNoaWZ0IiwiZG91YmxlSGFuZGVscyIsInZlcnRpY2FsIiwiY2xpZW50WSIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImNsaWVudFgiLCJjb25zb2xlIiwibG9nIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJ1bmRlZmluZWQiLCJuZXdMZWZ0IiwicmlnaHRFZGdlIiwicmVuZXdhbE9mUG9zaXRpb24iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiYm9keSIsImhlaWdodCIsInRyYW5zZm9ybSIsInJlbW92ZSIsIm1pbmltdW0iLCJTbGlkZXJSYW5nZSIsImVsZW0iLCJyYW5nZSIsIlZhbHVlUmFuZ2UiLCJ2YWx1ZXMiLCJWaWV3IiwiZ2V0RWxlbWVudHMiLCJzaWRlTWVudUVsZW1lbnRzIiwic2lkZU1lbnUiLCJzaWRlTWVudUNvbnRhaW5lciIsImNvbnRhaW5lciIsIm9mZnNldEhlaWdodCIsInF1ZXJ5U2VsZWN0b3IiLCJvcGFjaXR5IiwibmV3RGF0YSIsInRleHRDb250ZW50IiwiY2VudGVyaW5nUmVsYXRpdmVUb0hhbmRsZXMiLCJkaXNwbGF5Q29udHJvbGxlciIsInJlbW92ZUF0dHJpYnV0ZSIsIiQiLCJmbiIsInRlc3RTbGlkZXIiLCJvcHRpb25zIiwiZXh0ZW5kIiwicHJlc2VudGVyIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtR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QUFBdUYsdUJBQWVBLFFBQVEsQ0FBQyxLQUFEO0FBQTlHLE9BQVYsQ0FBUjtBQUNELEtBRk0sTUFFQSxJQUFJLGlCQUFpQkEsUUFBckIsRUFBK0I7QUFDcENPLFdBQUssR0FBRyxJQUFJUixnRUFBSixDQUFVO0FBQUMsZUFBT0MsUUFBUSxDQUFDLEtBQUQsQ0FBaEI7QUFBeUJLLFdBQUcsRUFBRUwsUUFBUSxDQUFDLEtBQUQsQ0FBdEM7QUFBK0MsdUJBQWVBLFFBQVEsQ0FBQyxLQUFELENBQXRFO0FBQStFLHVCQUFlQSxRQUFRLENBQUMsYUFBRDtBQUF0RyxPQUFWLENBQVI7QUFDRCxLQUZNLE1BRUE7QUFDTE8sV0FBSyxHQUFHLElBQUlSLGdFQUFKLENBQVU7QUFBQyxlQUFPQyxRQUFRLENBQUMsS0FBRCxDQUFoQjtBQUF5QkssV0FBRyxFQUFFTCxRQUFRLENBQUMsS0FBRCxDQUF0QztBQUErQyx1QkFBZUEsUUFBUSxDQUFDLEtBQUQsQ0FBdEU7QUFBK0UsdUJBQWVBLFFBQVEsQ0FBQyxLQUFEO0FBQXRHLE9BQVYsQ0FBUjtBQUNEOztBQUVELFFBQUlhLElBQUksR0FBRyxJQUFJbUksNkRBQUosQ0FBUzNCLElBQVQsRUFBZXJILFFBQWYsQ0FBWDtBQUVBLFFBQUljLE1BQU0sR0FBRyxJQUFJUixrRUFBSixDQUFXQyxLQUFYLENBQWI7QUFFQSxRQUFJNEosU0FBUyxHQUFHdkosb0ZBQVMsQ0FBQ0MsSUFBRCxFQUFPQyxNQUFQLENBQXpCO0FBQ0QsR0EvQkQ7QUFnQ0QsQ0FqQ0QsRUFpQ0dzSixNQWpDSCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcXVlcnkudWkuY3VzdG9tU2xpZGVyLnRzXCIpO1xuIiwiaW1wb3J0IHsgSURhdGEgfSBmcm9tICcuL2RhdGFJbnRlcmZhY2UudHMnO1xyXG5cclxuaW50ZXJmYWNlIFNldHRpbmdzIHtcclxuICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBNb2RlbCB7XHJcblxyXG4gIGRhdGE6IElEYXRhO1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCBzZXR0aW5nczogU2V0dGluZ3MgKSB7IFxyXG4gICAgdGhpcy5kYXRhID0gT2JqZWN0LmFzc2lnbih7fSwgc2V0dGluZ3MpO1xyXG4gIH1cclxuXHJcbiAgZ2V0Q3VycmVudERhdGEoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7J21pbmltdW0nOiB0aGlzLmRhdGEubWluLCAnbWluJzogdGhpcy5kYXRhWydjdXJyZW50LW1pbiddLCAnbWF4JzogdGhpcy5kYXRhWydjdXJyZW50LW1heCddLCAncG9zaXRpb25zJzogYCR7dGhpcy5kYXRhLm1heCAtIHRoaXMuZGF0YS5taW59YH1cclxuICB9XHJcbn0iLCJpbXBvcnQge01vZGVsfSBmcm9tICcuL21vZGVsLnRzJ1xyXG5cclxuaW50ZXJmYWNlIE15RGF0YU9iamVjdCB7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nXHJcbn07XHJcblxyXG5leHBvcnQgY2xhc3MgRmFjYWRlIHtcclxuICBwcml2YXRlIG1vZGVsO1xyXG5cclxuICBjb25zdHJ1Y3RvciAobW9kZWwpIHtcclxuICAgIHRoaXMubW9kZWwgPSBtb2RlbFxyXG4gIH1cclxuXHJcbiAgc3RhcnRIYW5kZWxzUG9zaXRpb24oKTpvYmplY3Qge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZ2V0Q3VycmVudERhdGEoKTtcclxuICB9O1xyXG4gIFxyXG4gIHJlZnJlc2hNb2RlbERhdGEoZGF0YTogb2JqZWN0LCBwcm9wOiBzdHJpbmcpOiBvYmplY3Qge1xyXG4gICAgaWYgKHByb3AgPT09ICdtaW4nKSB7XHJcbiAgICAgIHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1taW4nXSA9IE1hdGgucm91bmQodGhpcy5tb2RlbC5kYXRhWydtaW4nXSArIChkYXRhWydtaW4nXSAvICgrZGF0YVsnc2xpZGVyV2lkdGgnXSAvICh0aGlzLm1vZGVsLmRhdGFbJ21heCddIC0gdGhpcy5tb2RlbC5kYXRhWydtaW4nXSkpKSk7XHJcbiAgICAgIHJldHVybiB7ICdtaW4nOiB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWluJ10gfVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1heCddID0gTWF0aC5yb3VuZCh0aGlzLm1vZGVsLmRhdGFbJ21pbiddICsgKGRhdGFbJ21heCddIC8gKCtkYXRhWydzbGlkZXJXaWR0aCddIC8gKHRoaXMubW9kZWwuZGF0YVsnbWF4J10gLSB0aGlzLm1vZGVsLmRhdGFbJ21pbiddKSkpKTtcclxuICAgICAgcmV0dXJuIHsgJ21heCc6IHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1tYXgnXSB9XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGdldE1vZGVsRGF0YSgpOiBvYmplY3Qge1xyXG4gICAgcmV0dXJuIHsgJ21pbic6IHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1taW4nXSwgJ21heCc6IHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1tYXgnXX1cclxuICB9O1xyXG5cclxuICBnZXRNYXhEYXRhKCk6IG51bWJlciB7XHJcbiAgICByZXR1cm4gdGhpcy5tb2RlbC5kYXRhWydtYXgnXVxyXG4gIH07XHJcblxyXG4gIGdldFBvc3NpYmxlUmFuZ2UoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7J21heCc6dGhpcy5tb2RlbC5kYXRhLm1heCwgJ21pbic6IHRoaXMubW9kZWwuZGF0YS5taW59O1xyXG4gIH07XHJcblxyXG4gIGdldFBvc2l0aW9uc0Ftb3VudCgpOiBvYmplY3Qge1xyXG4gICAgcmV0dXJuIHsncG9zaXRpb25zJzogdGhpcy5tb2RlbC5kYXRhLm1heCAtIHRoaXMubW9kZWwuZGF0YS5taW4sICdtaW5pbXVtJzogdGhpcy5tb2RlbC5kYXRhLm1pbn07XHJcbiAgfVxyXG59OyIsImltcG9ydCB7IFNsaWRlck1vdmVtZW50IH0gZnJvbSBcIi4uL3ZpZXcvY29tcG9uZW50cy9zbGlkZXItbW92ZW1lbnQudHNcIjtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBQcmVzZW50ZXIgKHZpZXcsIGZhY2FkZSk6IHZvaWQge1xyXG4gIFxyXG4gIHZpZXcuZGlzcGxheUVsZW1lbnRzKCk7XHJcbiAgXHJcbiAgdmlldy5zbGlkZXJNb3ZlbWVudC5teURhdGEgPSBuZXcgUHJveHkodmlldy5zbGlkZXJNb3ZlbWVudC5teURhdGEsIHtcclxuICAgIHNldCh0YXJnZXQsIHByb3AsIHZhbCkge1xyXG4gICAgICBpZih0eXBlb2YgdmFsID09PSAnb2JqZWN0Jykge1xyXG4gICAgICAgIHRhcmdldFtwcm9wXSA9IHZhbDtcclxuICAgICAgICBsZXQgbW9kZWxSZXN1bHQgPSBmYWNhZGUucmVmcmVzaE1vZGVsRGF0YSh2YWwsIHByb3ApO1xyXG4gICAgICAgIHZpZXcucmVmcmVzaEN1cnJlbnRWYWx1ZXMobW9kZWxSZXN1bHQpXHJcbiAgICAgICAgcmV0dXJuIHRydWVcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZmFsc2VcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH0pXHJcblxyXG4gIGlmICh2aWV3LnNsaWRlck1vdmVtZW50LnN0ZXAgIT09IGZhbHNlKSB7XHJcbiAgICBsZXQgc3RlcEFtb3VudDogb2JqZWN0ID0gZmFjYWRlLmdldFBvc2l0aW9uc0Ftb3VudCgpO1xyXG4gICAgdmlldy5zbGlkZXJNb3ZlbWVudC5zdGVwQW1vdW50ID0gc3RlcEFtb3VudFsncG9zaXRpb25zJ107XHJcbiAgfVxyXG4gIFxyXG5cclxuICB2aWV3Lm1pbkhhbmRlbC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKCBldmVudCApOiB2b2lkIHtcclxuICAgIHZpZXcuc2xpZGVyTW92ZW1lbnQubWluSGFuZGVsTGlzdGVuZXIoIGV2ZW50ICk7XHJcbiAgfTtcclxuXHJcbiAgdmlldy5tYXhIYW5kZWwub25tb3VzZWRvd24gPSBmdW5jdGlvbihldmVudCk6IHZvaWQge1xyXG4gICAgdmlldy5zbGlkZXJNb3ZlbWVudC5tYXhIYW5kZWxMaXN0ZW5lciggZXZlbnQgKTtcclxuICB9O1xyXG4gIFxyXG4gIHZpZXcuaGFuZGVsTGFiZWxUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICB2aWV3LmNhbGxIYW5kZWxMYWJlbFRvZ2dsZUNoYW5nZXIodmlldylcclxuICB9KTtcclxuXHJcbiAgdmlldy5oYW5kZWxUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICB2aWV3LmNhbGxNYXhIYW5kZWxUb2dnbGVDaGFuZ2VyKHZpZXcpXHJcbiAgICBpZiAodmlldy5oYW5kZWxUb2dnbGUuY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBsZXQgcmVzdWx0OiBudW1iZXIgPSBmYWNhZGUuZ2V0TWF4RGF0YSgpO1xyXG4gICAgICB2aWV3LnJlZnJlc2hNYXhTaWRlTWVudURhdGEocmVzdWx0KVxyXG4gICAgfTtcclxuICB9KTtcclxuXHJcbiAgdmlldy5wbGFuZVRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgIHZpZXcuc2xpZGVyTW92ZW1lbnQuY2hhbmdlUGxhbmUodmlldy5wbGFuZVRvZ2dsZSwgdmlldy5zbGlkZXJDb250YWluZXIsIHZpZXcubWluVmFsdWUsIHZpZXcubWF4VmFsdWUpO1xyXG4gIH0pO1xyXG5cclxuICB2aWV3Lm1pblZhbHVlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XHJcbiAgICB2aWV3LnNsaWRlck1vdmVtZW50LnNlbGVjdGlvbk9mUHJlcGFyZWRWYWx1ZSgnbWluJyk7XHJcbiAgfSk7XHJcblxyXG4gIHZpZXcubWF4VmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIHZpZXcuc2xpZGVyTW92ZW1lbnQuc2VsZWN0aW9uT2ZQcmVwYXJlZFZhbHVlKCdtYXgnKTtcclxuICB9KTtcclxuXHJcbiAgdmlldy5taW5JbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgIGxldCBwb3NpdGlvbnM6IG51bWJlciA9IGZhY2FkZS5nZXRQb3NpdGlvbnNBbW91bnQoKTtcclxuICAgIHZpZXcuc2xpZGVyTW92ZW1lbnQuc2lkZU1lbnVJbnB1dHNWYWx1ZXNWYWxpZGF0aW9uQ2hlY2tlcignbWluJywgdmlldy5taW5JbnB1dC52YWx1ZSwgcG9zaXRpb25zWydwb3NpdGlvbnMnXSwgcG9zaXRpb25zWydtaW5pbXVtJ10pO1xyXG4gIH0pO1xyXG5cclxuICB2aWV3Lm1heElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHBvc2l0aW9uczogbnVtYmVyID0gZmFjYWRlLmdldFBvc2l0aW9uc0Ftb3VudCgpO1xyXG4gICAgdmlldy5zbGlkZXJNb3ZlbWVudC5zaWRlTWVudUlucHV0c1ZhbHVlc1ZhbGlkYXRpb25DaGVja2VyKCdtYXgnLCB2aWV3Lm1heElucHV0LnZhbHVlLCBwb3NpdGlvbnNbJ3Bvc2l0aW9ucyddLCBwb3NpdGlvbnNbJ21pbmltdW0nXSk7XHJcbiAgfSk7XHJcblxyXG4gIGxldCBwb3NzaWJsZVJhbmdlOiBvYmplY3QgPSBmYWNhZGUuZ2V0UG9zc2libGVSYW5nZSgpO1xyXG4gIHZpZXcuaW5wdXRzUG9zc2libGVSYW5nZShwb3NzaWJsZVJhbmdlLCB2aWV3Lm1pbklucHV0LCB2aWV3Lm1heElucHV0KVxyXG5cclxuICBsZXQgc3RhcnRQb3NpdGlvbnM6IG9iamVjdCA9IGZhY2FkZS5zdGFydEhhbmRlbHNQb3NpdGlvbigpO1xyXG4gIHZpZXcuc2xpZGVyTW92ZW1lbnQuc3RhcnRIYW5kbGVyc1Bvc2l0aW9ucyhzdGFydFBvc2l0aW9ucyk7XHJcbiAgdmlldy5yZWZyZXNoQ3VycmVudFZhbHVlcyhzdGFydFBvc2l0aW9ucylcclxufTtcclxuXHJcblxyXG4iLCJleHBvcnQgY2xhc3MgSGFuZGVsc0xhYmVscyB7XHJcbiAgbWluTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgbWF4TGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgbGFiZWxJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsZXQgbWluOkhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbGV0IG1heDpIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIG1pbi5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJIYW5kZWxMYWJlbCcpO1xyXG4gICAgbWF4LmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlckhhbmRlbExhYmVsJyk7XHJcbiAgICB0aGlzLm1pbkxhYmVsID0gbWluO1xyXG4gICAgdGhpcy5tYXhMYWJlbCA9IG1heDtcclxuICB9O1xyXG4gIFxyXG4gIGdldEVsZW1lbnRzKCk6IG9iamVjdCB7XHJcbiAgICByZXR1cm4geydtaW4nOiB0aGlzLm1pbkxhYmVsLCAnbWF4JzogdGhpcy5tYXhMYWJlbH07XHJcbiAgfTtcclxuXHJcbiAgZGlzcGxheUNvbnRyb2xsZXIodG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50LCBtaW46IEhUTUxMYWJlbEVsZW1lbnQsIG1heDogSFRNTExhYmVsRWxlbWVudCkge1xyXG4gICAgaWYgKHRvZ2dsZS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgIG1pbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICAgIG1heC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtaW4uc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgbWF4LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjZW50ZXJpbmdSZWxhdGl2ZVRvSGFuZGxlcyhtaW5IYW5kZWxXaWR0aDogbnVtYmVyLCBtYXhIYW5kZWxXaWR0aDogbnVtYmVyLCBtaW5MYWJlbFdpZHRoOiBudW1iZXIsIG1heExhYmVsV2lkdGg6IG51bWJlciwgbWluTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQsIG1heExhYmVsOiBIVE1MTGFiZWxFbGVtZW50KTogdm9pZCB7XHJcbiAgICBtaW5MYWJlbC5zdHlsZS5sZWZ0ID0gKG1pbkhhbmRlbFdpZHRoIC0gbWluTGFiZWxXaWR0aCkgLyAyICsgJ3B4JztcclxuICAgIG1heExhYmVsLnN0eWxlLmxlZnQgPSAobWF4SGFuZGVsV2lkdGggLSBtYXhMYWJlbFdpZHRoKSAvIDIgKyAncHgnO1xyXG4gIH1cclxufSIsImV4cG9ydCBjbGFzcyBIYW5kZWxzIHtcclxuXHJcbiAgcHJpdmF0ZSBtaW5IYW5kZWw6IEhUTUxTcGFuRWxlbWVudDtcclxuICBwcml2YXRlIG1heEhhbmRlbDogSFRNTFNwYW5FbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGxldCBtaW46IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIGxldCBtYXg6IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIG1pbi5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJIYW5kZWwnKTtcclxuICAgIG1heC5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJIYW5kZWwnKTtcclxuICAgIHRoaXMubWluSGFuZGVsID0gbWluO1xyXG4gICAgdGhpcy5tYXhIYW5kZWwgPSBtYXg7XHJcbiAgfTtcclxuXHJcbiAgZ2V0RWxlbWVudHMoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7bWluOiB0aGlzLm1pbkhhbmRlbCwgbWF4OiB0aGlzLm1heEhhbmRlbH07XHJcbiAgfTtcclxuXHJcbiAgZGlzcGxheUNvbnRyb2xsZXIodG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50LCBtYXg6IEhUTUxTcGFuRWxlbWVudCkge1xyXG4gICAgaWYgKHRvZ2dsZS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgIG1heC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1heC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxufTsiLCJleHBvcnQgY2xhc3MgU2VsZWN0ZWRSYW5nZSB7XHJcblxyXG4gIHByaXZhdGUgaW50ZXJ2YWw6IEhUTUxEaXZFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGxldCBpbnRlcnZhbDogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGludGVydmFsLmNsYXNzTGlzdC5hZGQoJ21haW5JbnRlcnZhbCcpO1xyXG4gICAgdGhpcy5pbnRlcnZhbCA9IGludGVydmFsO1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudHMoKTogSFRNTERpdkVsZW1lbnQge1xyXG4gICAgcmV0dXJuIHRoaXMuaW50ZXJ2YWw7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIFNpZGVNZW51IHtcclxuXHJcbiAgY3VzdG9tU2xpZGVyTWVudUNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQ7XHJcbiAgaGFuZGVsVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIGhhbmRlbExhYmVsVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHBsYW5lVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIG1pbklucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIG1heElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGxldCBzbGlkZXJWYWx1ZVA6SFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBzbGlkZXJWYWx1ZVAuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyUGFyYWdWYWwnKTtcclxuICAgIHNsaWRlclZhbHVlUC5pbm5lclRleHQgPSAn0KLQtdC60YPRidC10LUg0LfQsNC90YfQtdC90LjQtTogJztcclxuICAgIFxyXG4gICAgbGV0IG1pblNsaWRlclZhbHVlT3V0cHV0OkhUTUxPdXRwdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3V0cHV0Jyk7XHJcbiAgICBtaW5TbGlkZXJWYWx1ZU91dHB1dC5jbGFzc0xpc3QuYWRkKCdzbGlkZXJWYWx1ZScpO1xyXG4gICAgbWluU2xpZGVyVmFsdWVPdXRwdXQuaWQgPSAnbWluU2xpZGVyVmFsdWUnO1xyXG4gICAgbGV0IG1heFNsaWRlclZhbHVlT3V0cHV0OkhUTUxPdXRwdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3V0cHV0Jyk7XHJcbiAgICBtYXhTbGlkZXJWYWx1ZU91dHB1dC5jbGFzc0xpc3QuYWRkKCdzbGlkZXJWYWx1ZScpO1xyXG4gICAgbWF4U2xpZGVyVmFsdWVPdXRwdXQuaWQgPSAnbWF4U2xpZGVyVmFsdWUnO1xyXG4gICAgXHJcbiAgICBsZXQgc2xpZGVyVG9nZ2xlUDpIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHNsaWRlclRvZ2dsZVAuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyUGFyYWcnKTtcclxuICAgIHNsaWRlclRvZ2dsZVAuaW5uZXJUZXh0ID0gJ9CS0LrQu9GO0YfQuNGC0Ywg0LLRgtC+0YDQvtC5INC/0L7Qu9C30YPQvdC+0Lo6ICc7XHJcbiAgICBcclxuICAgIGxldCBzbGlkZXJUb2dnbGVMYWJlbDpIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIHNsaWRlclRvZ2dsZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclRvZ2dsZScpO1xyXG5cclxuICAgIGxldCBtYXhTbGlkZXJIYW5kZWxUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgbWF4U2xpZGVySGFuZGVsVG9nZ2xlLmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlckhhbmRlbFRvZ2dsZScpO1xyXG4gICAgbWF4U2xpZGVySGFuZGVsVG9nZ2xlLmlkID0gJ21heFNsaWRlckhhbmRlbFRvZ2dsZSc7XHJcbiAgICBtYXhTbGlkZXJIYW5kZWxUb2dnbGUuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94JylcclxuXHJcbiAgICBsZXQgY3VzdG9tU2xpZGVyQm9yZGVyOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICBjdXN0b21TbGlkZXJCb3JkZXIuY2xhc3NMaXN0LmFkZCgnY3VzdG9tVG9nZ2xlU2xpZGVyQm9yZGVyJyk7XHJcblxyXG4gICAgbGV0IGN1c3RvbVNsaWRlcklucHV0czogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0cy5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJJbnB1dHMnKTtcclxuICAgIFxyXG4gICAgbGV0IGN1c3RvbVNsaWRlcklucHV0c1A6IEhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzUC5pbm5lclRleHQgPSAn0JjQt9C80LXQvdC40YLRjCDQt9C90LDRh9C10L3QuNC1OiAnO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzUC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJQYXJhZycpO1xyXG5cclxuICAgIGxldCBjdXN0b21TbGlkZXJJbnB1dHNNaW5MYWJlbDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNaW5MYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJJbnB1dGxhYmVsJyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNaW5MYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjdXN0b21TbGlkZXJNaW5JbnB1dCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWwuaW5uZXJUZXh0ID0gJ01pbjogJztcclxuICAgIFxyXG4gICAgbGV0IGN1c3RvbVNsaWRlcklucHV0c01heExhYmVsOiBIVE1MTGFiZWxFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01heExhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlcklucHV0bGFiZWwnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01heExhYmVsLnNldEF0dHJpYnV0ZSgnZm9yJywgJ2N1c3RvbVNsaWRlck1heElucHV0Jyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbC5pbm5lclRleHQgPSAnTWF4OiAnO1xyXG5cclxuICAgIGxldCBjdXN0b21TbGlkZXJJbnB1dHNNaW46IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlck1pbklucHV0Jyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNaW4uaWQgPSAnY3VzdG9tU2xpZGVyTWluSW5wdXQnO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluLnNldEF0dHJpYnV0ZSgndHlwZScsICdudW1iZXInKTtcclxuXHJcbiAgICBsZXQgY3VzdG9tU2xpZGVySW5wdXRzTWF4OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01heC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJNYXhJbnB1dCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWF4LmlkID0gJ2N1c3RvbVNsaWRlck1heElucHV0JztcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01heC5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclZhbHVlc0NvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yVmFsdWVzUDogSFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNQLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclBhcmFnJyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNQLmlubmVyVGV4dCA9ICfQktC60LvRjtGH0LjRgtGMINC30L3QsNGH0LXQvdC40Y8g0L/QvtC0INC/0L7Qu9C30YPQvdC60LDQvNC4OiAnO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JWYWx1ZXNMYWJlbDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNMYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJUb2dnbGUnKTtcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yVmFsdWVzSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNJbnB1dC5jbGFzc0xpc3QuYWRkKCdzaG93VmFsdWVUb2dnbGUnKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc0lucHV0LmlkID0gJ3Nob3dWYWx1ZVRvZ2dsZSc7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclZhbHVlc1NwYW46IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc1NwYW4uY2xhc3NMaXN0LmFkZCgnY3VzdG9tVG9nZ2xlU2xpZGVyQm9yZGVyJyk7XHJcbiAgICBcclxuICAgIGxldCB0b2dnbGVGb3JQbGFuZUNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yUGxhbmVQOiBIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lUC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJQYXJhZycpO1xyXG4gICAgdG9nZ2xlRm9yUGxhbmVQLmlubmVyVGV4dCA9ICfQmNC30LzQtdC90LjRgtGMINC/0LvQvtGB0LrQvtGB0YLRjDogJztcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yUGxhbmVMYWJlbDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZUxhYmVsLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclRvZ2dsZScpO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JQbGFuZUlucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lSW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZUlucHV0LmNsYXNzTGlzdC5hZGQoJ3BsYW5lVG9nZ2xlJyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZUlucHV0LmlkID0gJ3BsYW5lVG9nZ2xlJztcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yUGxhbmVTcGFuOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZVNwYW4uY2xhc3NMaXN0LmFkZCgnY3VzdG9tVG9nZ2xlU2xpZGVyQm9yZGVyJyk7XHJcblxyXG5cclxuICAgIGxldCBtYWluU2xpZGVyQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5cclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2xpZGVyTWVudUNvbnRhaW5lcicpO1xyXG4gICAgbWFpblNsaWRlckNvbnRhaW5lci5hcHBlbmQoc2xpZGVyVmFsdWVQKTtcclxuICAgIHNsaWRlclZhbHVlUC5hcHBlbmQobWluU2xpZGVyVmFsdWVPdXRwdXQpO1xyXG4gICAgc2xpZGVyVmFsdWVQLmFwcGVuZChtYXhTbGlkZXJWYWx1ZU91dHB1dCk7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZChzbGlkZXJUb2dnbGVQKTtcclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuYXBwZW5kKHNsaWRlclRvZ2dsZUxhYmVsKTtcclxuICAgIHNsaWRlclRvZ2dsZUxhYmVsLmFwcGVuZChtYXhTbGlkZXJIYW5kZWxUb2dnbGUsIGN1c3RvbVNsaWRlckJvcmRlcik7XHJcblxyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzLmFwcGVuZChjdXN0b21TbGlkZXJJbnB1dHNQLCBjdXN0b21TbGlkZXJJbnB1dHNNaW5MYWJlbCwgY3VzdG9tU2xpZGVySW5wdXRzTWluLCBjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbCwgY3VzdG9tU2xpZGVySW5wdXRzTWF4KTtcclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuYXBwZW5kKGN1c3RvbVNsaWRlcklucHV0cyk7XHJcblxyXG4gICAgdG9nZ2xlRm9yVmFsdWVzQ29udGFpbmVyLmFwcGVuZCh0b2dnbGVGb3JWYWx1ZXNQLCB0b2dnbGVGb3JWYWx1ZXNMYWJlbCk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNMYWJlbC5hcHBlbmQodG9nZ2xlRm9yVmFsdWVzSW5wdXQsIHRvZ2dsZUZvclZhbHVlc1NwYW4pO1xyXG4gICAgbWFpblNsaWRlckNvbnRhaW5lci5hcHBlbmQodG9nZ2xlRm9yVmFsdWVzQ29udGFpbmVyKTtcclxuXHJcbiAgICB0b2dnbGVGb3JQbGFuZUNvbnRhaW5lci5hcHBlbmQodG9nZ2xlRm9yUGxhbmVQLCB0b2dnbGVGb3JQbGFuZUxhYmVsKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lTGFiZWwuYXBwZW5kKHRvZ2dsZUZvclBsYW5lSW5wdXQsIHRvZ2dsZUZvclBsYW5lU3Bhbik7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZCh0b2dnbGVGb3JQbGFuZUNvbnRhaW5lcik7XHJcblxyXG4gICAgdGhpcy5jdXN0b21TbGlkZXJNZW51Q29udGFpbmVyID0gbWFpblNsaWRlckNvbnRhaW5lcjtcclxuICAgIHRoaXMuaGFuZGVsVG9nZ2xlID0gbWF4U2xpZGVySGFuZGVsVG9nZ2xlO1xyXG4gICAgdGhpcy5oYW5kZWxMYWJlbFRvZ2dsZSA9IHRvZ2dsZUZvclZhbHVlc0lucHV0O1xyXG4gICAgdGhpcy5wbGFuZVRvZ2dsZSA9IHRvZ2dsZUZvclBsYW5lSW5wdXQ7XHJcbiAgICB0aGlzLm1pbklucHV0ID0gY3VzdG9tU2xpZGVySW5wdXRzTWluO1xyXG4gICAgdGhpcy5tYXhJbnB1dCA9IGN1c3RvbVNsaWRlcklucHV0c01heDtcclxuICB9O1xyXG5cclxuICBnZXRFbGVtZW50cygpOiBvYmplY3Qge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgbWVudTogdGhpcy5jdXN0b21TbGlkZXJNZW51Q29udGFpbmVyLFxyXG4gICAgICBoYW5kZWxUb2dnbGU6IHRoaXMuaGFuZGVsVG9nZ2xlLFxyXG4gICAgICBoYW5kZWxMYWJlbFRvZ2dsZTogdGhpcy5oYW5kZWxMYWJlbFRvZ2dsZSxcclxuICAgICAgcGxhbmVUb2dnbGU6IHRoaXMucGxhbmVUb2dnbGUsXHJcbiAgICAgIG1pbklucHV0OiB0aGlzLm1pbklucHV0LFxyXG4gICAgICBtYXhJbnB1dDogdGhpcy5tYXhJbnB1dFxyXG4gICAgfTtcclxuICB9O1xyXG59OyIsImludGVyZmFjZSBIYW5kZWxzIHtcclxuICBba2V5OiBzdHJpbmddOiBIVE1MTGFiZWxFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudCB8IEhUTUxEaXZFbGVtZW50O1xyXG59XHJcbmludGVyZmFjZSBNeURhdGFPYmplY3Qge1xyXG4gIFtrZXk6IHN0cmluZ106IHtcclxuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZ1xyXG4gIH07XHJcbn1cclxuXHJcbmludGVyZmFjZSBTdGFydEhhbmRlbHNQb3NpdGlvbnNEYXRhIHtcclxuICBba2V5OiBzdHJpbmddOiBzdHJpbmdcclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIFNsaWRlck1vdmVtZW50IHtcclxuICBwcml2YXRlIG1pbjogSFRNTFNwYW5FbGVtZW50O1xyXG4gIHByaXZhdGUgbWF4OiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBtaW5MYWJlbDogSFRNTExhYmVsRWxlbWVudDtcclxuICBwcml2YXRlIG1heExhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIHByaXZhdGUgc2xpZGVyUmFuZ2U6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHByaXZhdGUgaGFuZGVsc1RvZ2dsZTogSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIHBsYW5lVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHByaXZhdGUgaW50ZXJ2YWw6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHByaXZhdGUgc3RlcDogbnVtYmVyIHwgc3RyaW5nIHwgYm9vbGVhbjtcclxuICBwcml2YXRlIHN0ZXBBbW91bnQ6IG51bWJlcjtcclxuXHJcbiAgY29uc3RydWN0b3IoIGhhbmRlbHM6IEhhbmRlbHMpIHtcclxuICAgIHRoaXMubWluID0gaGFuZGVscy5taW47XHJcbiAgICB0aGlzLm1heCA9IGhhbmRlbHMubWF4O1xyXG4gICAgdGhpcy5taW5MYWJlbCA9IGhhbmRlbHMubWluTGFiZWw7XHJcbiAgICB0aGlzLm1heExhYmVsPSBoYW5kZWxzLm1heExhYmVsO1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZSA9IGhhbmRlbHMuc2xpZGVyUmFuZ2U7XHJcbiAgICB0aGlzLmhhbmRlbHNUb2dnbGUgPSBoYW5kZWxzLmhhbmRlbHNUb2dnbGU7XHJcbiAgICB0aGlzLnBsYW5lVG9nZ2xlID0gaGFuZGVscy5wbGFuZVRvZ2dsZTtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBoYW5kZWxzLmludGVydmFsO1xyXG4gICAgdGhpcy5zdGVwID0gaGFuZGVscy5zdGVwO1xyXG4gIH1cclxuXHJcbiAgbXlEYXRhOiBNeURhdGFPYmplY3QgPSB7XHJcbiAgICAnbWluJzoge30sXHJcbiAgICAnbWF4Jzoge31cclxuICB9XHJcblxyXG4gIHN0YXJ0SGFuZGxlcnNQb3NpdGlvbnMocG9zaXRpb25WYWx1ZXM6IFN0YXJ0SGFuZGVsc1Bvc2l0aW9uc0RhdGEgKSB7XHJcbiAgICBsZXQgbWluOiBzdHJpbmcgPSAoKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkgLyArcG9zaXRpb25WYWx1ZXMucG9zaXRpb25zKSAqICgrcG9zaXRpb25WYWx1ZXNbJ21pbiddIC0gK3Bvc2l0aW9uVmFsdWVzWydtaW5pbXVtJ10pICsgJyc7XHJcbiAgICBsZXQgbWF4OiBzdHJpbmcgPSAoKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkgLyArcG9zaXRpb25WYWx1ZXMucG9zaXRpb25zKSAqICgrcG9zaXRpb25WYWx1ZXNbJ21heCddIC0gK3Bvc2l0aW9uVmFsdWVzWydtaW5pbXVtJ10pICsgJyc7XHJcbiAgICBcclxuICAgIHRoaXMubXlEYXRhLm1pbi5taW4gPSBtaW47XHJcbiAgICB0aGlzLm15RGF0YS5tYXgubWF4ID0gbWF4O1xyXG4gICAgXHJcbiAgICB0aGlzLm1pbi5zdHlsZS5sZWZ0ID0gbWluICsgJ3B4JztcclxuICAgIHRoaXMubWF4LnN0eWxlLmxlZnQgPSBtYXggKyAncHgnO1xyXG4gICAgXHJcbiAgICB0aGlzLmludGVydmFsLnN0eWxlLmxlZnQgPSArbWluICsgdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUucmlnaHQgPSAodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtICttYXgpIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICB9XHJcblxyXG4gIG1pbkhhbmRlbExpc3RlbmVyKCBldmVudCwgdGVzdCApIHtcclxuICAgIGxldCBtaW4gPSB0aGlzLm1pbjtcclxuICAgIGxldCBtYXggPSB0aGlzLm1heDtcclxuICAgIGxldCBtaW5MYWJlbCA9IHRoaXMubWluTGFiZWw7XHJcbiAgICBsZXQgc2xpZGVyUmFuZ2UgPSB0aGlzLnNsaWRlclJhbmdlO1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgbGV0IHNoaWZ0OiBudW1iZXI7XHJcbiAgICBsZXQgZG91YmxlSGFuZGVscyA9IHRoaXMuaGFuZGVsc1RvZ2dsZS5jaGVja2VkO1xyXG4gICAgbGV0IHZlcnRpY2FsID0gdGhpcy5wbGFuZVRvZ2dsZS5jaGVja2VkO1xyXG4gICAgbGV0IGludGVydmFsID0gdGhpcy5pbnRlcnZhbDtcclxuICAgIGxldCBzdGVwO1xyXG4gICAgaWYgKHRoaXMuc3RlcCAhPT0gZmFsc2UpIHtcclxuICAgICAgc3RlcCA9IChzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG1pbi5vZmZzZXRXaWR0aCkgLyB0aGlzLnN0ZXBBbW91bnQgKiArdGhpcy5zdGVwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICBzaGlmdCA9IGV2ZW50LmNsaWVudFkgLSBtaW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gbWluLm9mZnNldFdpZHRoO1xyXG4gICAgfSBlbHNlIHsgIFxyXG4gICAgICBzaGlmdCA9IGV2ZW50LmNsaWVudFggLSBtaW4uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKGBTaGlmdDoke3NoaWZ0fSwgY2xpZW50WDoke2V2ZW50LmNsaWVudFh9LCBtaW4uZ2V0UmVjdCgpOiAke21pbi5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0fWApXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuICAgIFxyXG4gICAgaWYodGVzdCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgIG9uTW91c2VNb3ZlKGV2ZW50KVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTW91c2VNb3ZlKCBldmVudCApIHtcclxuICAgICAgbGV0IG5ld0xlZnQ6IG51bWJlcjtcclxuICAgICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgICAgbmV3TGVmdCA9IHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gKGV2ZW50LmNsaWVudFkgLSBzaGlmdCAtIHNsaWRlclJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3TGVmdCA9IGV2ZW50LmNsaWVudFggLSBzaGlmdCAtIHNsaWRlclJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICAgIH07XHJcbiAgICAgIGxldCByaWdodEVkZ2UgPSBzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG1pbi5vZmZzZXRXaWR0aDtcclxuICAgICAgY29uc29sZS5sb2coYG5ld0xlZnQ6JHtuZXdMZWZ0fSwgc2hpZnQ6JHtzaGlmdH0sIHNsaWRlclJhbmdlLmdldFJlY3QoKTogJHtzbGlkZXJSYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0fWApXHJcbiAgICAgIGlmICh0aGF0LnN0ZXAgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKG5ld0xlZnQgPj0gK3RoYXQubXlEYXRhLm1pbi5taW4gKyBzdGVwIHx8IG5ld0xlZnQgPD0gK3RoYXQubXlEYXRhLm1pbi5taW4gLSBzdGVwKSB7XHJcbiAgICAgICAgICBuZXdMZWZ0ID49ICt0aGF0Lm15RGF0YS5taW4ubWluICsgc3RlcCA/IG5ld0xlZnQgPSArdGhhdC5teURhdGEubWluLm1pbiArIHN0ZXAgOiBmYWxzZTtcclxuICAgICAgICAgIG5ld0xlZnQgPD0gK3RoYXQubXlEYXRhLm1pbi5taW4gLSBzdGVwID8gbmV3TGVmdCA9ICt0aGF0Lm15RGF0YS5taW4ubWluIC0gc3RlcCA6IGZhbHNlO1xyXG4gICAgICAgICAgcmVuZXdhbE9mUG9zaXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVuZXdhbE9mUG9zaXRpb24oKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHJlbmV3YWxPZlBvc2l0aW9uKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAobmV3TGVmdCA8IDApIHtcclxuICAgICAgICAgIG5ld0xlZnQgPSAwO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgaWYgKGRvdWJsZUhhbmRlbHMpIHsgXHJcbiAgICAgICAgICBpZiAobmV3TGVmdCA+PSArdGhhdC5teURhdGEubWF4WydtYXgnXSAtIG1heC5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgICAgICBuZXdMZWZ0ID0gK3RoYXQubXlEYXRhLm1heFsnbWF4J10gLSBtYXgub2Zmc2V0V2lkdGhcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGlmIChuZXdMZWZ0ID4gcmlnaHRFZGdlKSB7XHJcbiAgICAgICAgICAgIG5ld0xlZnQgPSByaWdodEVkZ2U7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1pbi5zdHlsZS5sZWZ0ID0gbmV3TGVmdCArICdweCc7XHJcbiAgICAgICAgaW50ZXJ2YWwuc3R5bGUubGVmdCA9IG5ld0xlZnQgKyBtaW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgICAgICBcclxuICAgICAgICBpZiAobmV3TGVmdCAhPT0gdW5kZWZpbmVkIHx8IHJpZ2h0RWRnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGF0Lm15RGF0YVsnbWluJ10gPSB7J21pbic6IGAke25ld0xlZnR9YCwgJ3NsaWRlcldpZHRoJzogYCR7c2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSBtaW4ub2Zmc2V0V2lkdGh9YH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1pbkxhYmVsLnN0eWxlLmxlZnQgPSAoKG1pbi5vZmZzZXRXaWR0aCAtIG1pbkxhYmVsLm9mZnNldFdpZHRoKSAtIDEpIC8gMiArICdweCc7XHJcbiAgICAgIH0gIFxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIG9uTW91c2VVcCgpIHtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG9uTW91c2VVcCk7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIG1heEhhbmRlbExpc3RlbmVyKCBldmVudCApIHtcclxuICAgIGxldCBtYXggPSB0aGlzLm1heDtcclxuICAgIGxldCBtaW4gPSB0aGlzLm1pbjtcclxuICAgIGxldCBzbGlkZXJSYW5nZSA9IHRoaXMuc2xpZGVyUmFuZ2U7XHJcbiAgICBsZXQgc2hpZnQ6IG51bWJlcjtcclxuICAgIGxldCBtYXhMYWJlbCA9IHRoaXMubWF4TGFiZWw7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICBsZXQgZG91YmxlSGFuZGVscyA9IHRoaXMuaGFuZGVsc1RvZ2dsZS5jaGVja2VkO1xyXG4gICAgbGV0IHZlcnRpY2FsID0gdGhpcy5wbGFuZVRvZ2dsZS5jaGVja2VkO1xyXG4gICAgbGV0IGludGVydmFsID0gdGhpcy5pbnRlcnZhbDtcclxuICAgIGxldCBzdGVwO1xyXG5cclxuICAgIGlmICh0aGlzLnN0ZXAgIT09IGZhbHNlKSB7XHJcbiAgICAgIHN0ZXAgPSAoc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSBtaW4ub2Zmc2V0V2lkdGgpIC8gdGhpcy5zdGVwQW1vdW50ICogK3RoaXMuc3RlcDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgc2hpZnQgPSBldmVudC5jbGllbnRZIC0gbWF4LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIG1heC5vZmZzZXRXaWR0aDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHNoaWZ0ID0gZXZlbnQuY2xpZW50WCAtIG1heC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZU1vdmUoIGV2ZW50ICkge1xyXG4gICAgICBsZXQgbmV3TGVmdDogbnVtYmVyO1xyXG4gICAgICBcclxuICAgICAgaWYgKHZlcnRpY2FsKSB7XHJcbiAgICAgICAgbmV3TGVmdCA9IHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gKGV2ZW50LmNsaWVudFkgLSBzaGlmdCAtIHNsaWRlclJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbmV3TGVmdCA9IGV2ZW50LmNsaWVudFggLSBzaGlmdCAtIHNsaWRlclJhbmdlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGxldCByaWdodEVkZ2UgPSBzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG1heC5vZmZzZXRXaWR0aDtcclxuXHJcbiAgICAgIGlmICh0aGF0LnN0ZXAgIT09IGZhbHNlKSB7XHJcbiAgICAgICAgaWYgKG5ld0xlZnQgPj0gK3RoYXQubXlEYXRhLm1heC5tYXggKyBzdGVwIHx8IG5ld0xlZnQgPD0gK3RoYXQubXlEYXRhLm1heC5tYXggLSBzdGVwKSB7XHJcbiAgICAgICAgICBuZXdMZWZ0ID49ICt0aGF0Lm15RGF0YS5tYXgubWF4ICsgc3RlcCA/IG5ld0xlZnQgPSArdGhhdC5teURhdGEubWF4Lm1heCArIHN0ZXAgOiBmYWxzZTtcclxuICAgICAgICAgIG5ld0xlZnQgPD0gK3RoYXQubXlEYXRhLm1heC5tYXggLSBzdGVwID8gbmV3TGVmdCA9ICt0aGF0Lm15RGF0YS5tYXgubWF4IC0gc3RlcCA6IGZhbHNlO1xyXG4gICAgICAgICAgcmVuZXdhbE9mUG9zaXRpb24oKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmVuZXdhbE9mUG9zaXRpb24oKTtcclxuICAgICAgfTtcclxuXHJcbiAgICAgIGZ1bmN0aW9uIHJlbmV3YWxPZlBvc2l0aW9uKCk6IHZvaWQge1xyXG5cclxuICAgICAgICBpZiAobmV3TGVmdCA8IDApIHtcclxuICAgICAgICAgIG5ld0xlZnQgPSAwO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmIChuZXdMZWZ0ID4gcmlnaHRFZGdlKSB7XHJcbiAgICAgICAgICBuZXdMZWZ0ID0gcmlnaHRFZGdlO1xyXG4gICAgICAgIH07XHJcbiAgXHJcbiAgICAgICAgaWYgKG5ld0xlZnQgPD0gK3RoYXQubXlEYXRhLm1pblsnbWluJ10gKyBtaW4ub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICAgIG5ld0xlZnQgPSArdGhhdC5teURhdGEubWluWydtaW4nXSArIG1pbi5vZmZzZXRXaWR0aFxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWF4LnN0eWxlLmxlZnQgPSBuZXdMZWZ0ICsgJ3B4JztcclxuICAgICAgICBpbnRlcnZhbC5zdHlsZS5yaWdodCA9IChzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG5ld0xlZnQpIC0gbWF4Lm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgXHJcbiAgICAgICAgaWYgKG5ld0xlZnQgIT09IHVuZGVmaW5lZCB8fCByaWdodEVkZ2UgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgICAgdGhhdC5teURhdGFbJ21heCddID0geydtYXgnOiBgJHtuZXdMZWZ0fWAsICdzbGlkZXJXaWR0aCc6IGAke3NsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gbWF4Lm9mZnNldFdpZHRofWB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBtYXhMYWJlbC5zdHlsZS5sZWZ0ID0gKChtYXgub2Zmc2V0V2lkdGggLSBtYXhMYWJlbC5vZmZzZXRXaWR0aCkgLSAxKSAvIDIgKyAncHgnO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgZnVuY3Rpb24gb25Nb3VzZVVwKCkge1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgb25Nb3VzZVVwKTtcclxuICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU1vdmUpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2hhbmdlUGxhbmUoIHRvZ2dsZTpIVE1MSW5wdXRFbGVtZW50LCBib2R5OiBIVE1MRGl2RWxlbWVudCwgbWluVmFsdWU6IEhUTUxQYXJhZ3JhcGhFbGVtZW50LCBtYXhWYWx1ZTogSFRNTFBhcmFncmFwaEVsZW1lbnQpOiB2b2lkIHtcclxuICAgIGlmICh0b2dnbGUuY2hlY2tlZCkge1xyXG4gICAgICBib2R5LnN0eWxlLmhlaWdodCA9IGJvZHkub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgICB0aGlzLnNsaWRlclJhbmdlLnN0eWxlLnRyYW5zZm9ybSA9ICdyb3RhdGUoLTkwZGVnKSc7XHJcbiAgICAgIHRoaXMuc2xpZGVyUmFuZ2Uuc3R5bGUudG9wID0gYm9keS5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gICAgICB0aGlzLm1pbkxhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ21pblNsaWRlckhhbmRlbExhYmVsJyk7XHJcbiAgICAgIHRoaXMubWF4TGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnbWF4U2xpZGVySGFuZGVsTGFiZWwnKTtcclxuICAgICAgdGhpcy5taW5MYWJlbC5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJIYW5kZWxMYWJlbFZlcnRpY2FsJyk7XHJcbiAgICAgIHRoaXMubWF4TGFiZWwuY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVySGFuZGVsTGFiZWxWZXJ0aWNhbCcpO1xyXG4gICAgICBtaW5WYWx1ZS5jbGFzc0xpc3QucmVtb3ZlKCdtaW5TbGlkZXJQb2ludCcpO1xyXG4gICAgICBtYXhWYWx1ZS5jbGFzc0xpc3QucmVtb3ZlKCdtYXhTbGlkZXJQb2ludCcpO1xyXG4gICAgICBtaW5WYWx1ZS5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJQb2ludFZlcnRpY2FsJyk7XHJcbiAgICAgIG1heFZhbHVlLmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlclBvaW50VmVydGljYWwnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGJvZHkuc3R5bGUuaGVpZ2h0ID0gJyc7XHJcbiAgICAgIHRoaXMuc2xpZGVyUmFuZ2Uuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgwZGVnKSc7XHJcbiAgICAgIHRoaXMuc2xpZGVyUmFuZ2Uuc3R5bGUudG9wID0gJyc7XHJcbiAgICAgIHRoaXMubWluTGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnbWluU2xpZGVySGFuZGVsTGFiZWxWZXJ0aWNhbCcpO1xyXG4gICAgICB0aGlzLm1heExhYmVsLmNsYXNzTGlzdC5yZW1vdmUoJ21heFNsaWRlckhhbmRlbExhYmVsVmVydGljYWwnKTtcclxuICAgICAgdGhpcy5taW5MYWJlbC5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJIYW5kZWxMYWJlbCcpO1xyXG4gICAgICB0aGlzLm1heExhYmVsLmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlckhhbmRlbExhYmVsJyk7XHJcbiAgICAgIG1pblZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ21pblNsaWRlclBvaW50VmVydGljYWwnKTtcclxuICAgICAgbWF4VmFsdWUuY2xhc3NMaXN0LnJlbW92ZSgnbWF4U2xpZGVyUG9pbnRWZXJ0aWNhbCcpO1xyXG4gICAgICBtaW5WYWx1ZS5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJQb2ludCcpO1xyXG4gICAgICBtYXhWYWx1ZS5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJQb2ludCcpO1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBzZWxlY3Rpb25PZlByZXBhcmVkVmFsdWUodGFyZ2V0OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGlmICh0YXJnZXQgPT09ICdtaW4nKSB7XHJcbiAgICAgIHRoaXMubXlEYXRhWydtaW4nXSA9IHsnbWluJzogJzAnLCAnc2xpZGVyV2lkdGgnOmAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gfVxyXG4gICAgICB0aGlzLm1pbi5zdHlsZS5sZWZ0ID0gJzBweCdcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5sZWZ0ID0gMCArIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5oYW5kZWxzVG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICB0aGlzLm15RGF0YVsnbWF4J10gPSB7J21heCc6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gLCAnc2xpZGVyV2lkdGgnOmAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gfVxyXG4gICAgICAgIHRoaXMubWF4LnN0eWxlLmxlZnQgPSB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUucmlnaHQgPSAodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGgpICsgdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLm15RGF0YVsnbWluJ10gPSB7J21pbic6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gLCAnc2xpZGVyV2lkdGgnOmAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aH1gfVxyXG4gICAgICAgIHRoaXMubWluLnN0eWxlLmxlZnQgPSB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGggKyAncHgnO1xyXG4gICAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUubGVmdCA9ICh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpICsgdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsncHgnO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzaWRlTWVudUlucHV0c1ZhbHVlc1ZhbGlkYXRpb25DaGVja2VyKHRhcmdldDogc3RyaW5nLCB2YWx1ZTogbnVtYmVyLCBwb3NpdGlvbnM6IG51bWJlciwgbWluaW11bTogbnVtYmVyKTogdm9pZCB7XHJcbiAgXHJcbiAgICBpZiAodGFyZ2V0ID09PSAnbWluJyAmJiB0aGlzLmhhbmRlbHNUb2dnbGUuY2hlY2tlZCkge1xyXG4gICAgICBsZXQgbWluOiBzdHJpbmcgPSAoKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkgLyBwb3NpdGlvbnMpICogKHZhbHVlIC0gbWluaW11bSkgKyAnJztcclxuICAgICAgaWYgKCttaW4gPj0gK3RoaXMubXlEYXRhLm1heC5tYXggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgIG1pbiA9ICt0aGlzLm15RGF0YS5tYXgubWF4IC0gdGhpcy5taW4ub2Zmc2V0V2lkdGggKyAnJztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLm15RGF0YVsnbWluJ10gPSB7J21pbic6IG1pbiwgJ3NsaWRlcldpZHRoJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWB9O1xyXG4gICAgICB0aGlzLm1pbi5zdHlsZS5sZWZ0ID0gbWluICsgJ3B4JztcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5sZWZ0ID0gbWluICsgdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsncHgnO1xyXG4gICAgfSBlbHNlIGlmICh0YXJnZXQgPT09ICdtaW4nKSB7XHJcbiAgICAgIGxldCBtaW46IHN0cmluZyA9ICgodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSAvIHBvc2l0aW9ucykgKiAodmFsdWUgLSBtaW5pbXVtKSArICcnO1xyXG4gICAgICB0aGlzLm15RGF0YVsnbWluJ10gPSB7J21pbic6IG1pbiwgJ3NsaWRlcldpZHRoJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWB9O1xyXG4gICAgICB0aGlzLm1pbi5zdHlsZS5sZWZ0ID0gbWluICsgJ3B4JztcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5sZWZ0ID0gbWluICsgdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsncHgnO1xyXG4gICAgfSBlbHNlIGlmICh0YXJnZXQgPT09ICdtYXgnKSB7XHJcbiAgICAgIGxldCBtYXg6IHN0cmluZyA9ICgodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWF4Lm9mZnNldFdpZHRoKSAvIHBvc2l0aW9ucykgKiAodmFsdWUgLSBtaW5pbXVtKSArICcnO1xyXG4gICAgICBpZiAoK21heCA8PSArdGhpcy5teURhdGEubWluLm1pbiArIHRoaXMubWluLm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgbWF4ID0gK3RoaXMubXlEYXRhLm1pbi5taW4gKyB0aGlzLm1heC5vZmZzZXRXaWR0aCArICcnO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubXlEYXRhWydtYXgnXSA9IHsnbWF4JzogbWF4LCAnc2xpZGVyV2lkdGgnOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXgub2Zmc2V0V2lkdGh9YH07XHJcbiAgICAgIHRoaXMubWF4LnN0eWxlLmxlZnQgPSBtYXggKyAncHgnO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLnJpZ2h0ID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSArbWF4KSAtIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICB9XHJcbiAgfTtcclxufTsiLCJleHBvcnQgY2xhc3MgU2xpZGVyUmFuZ2Uge1xyXG5cclxuICByYW5nZTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgbGV0IGVsZW06IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ3NsaWRlclJhbmdlJyk7XHJcbiAgICB0aGlzLnJhbmdlID0gZWxlbTtcclxuICB9O1xyXG5cclxuICBnZXRFbGVtZW50cygpOiBIVE1MRGl2RWxlbWVudHtcclxuICAgIHJldHVybiB0aGlzLnJhbmdlO1xyXG4gIH07XHJcblxyXG59OyIsImV4cG9ydCBjbGFzcyBWYWx1ZVJhbmdlIHtcclxuICBtaW5WYWx1ZTogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgbWF4VmFsdWU6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvciAodmFsdWVzOiB7W2tleTogc3RyaW5nXTogc3RyaW5nfSkge1xyXG4gICAgbGV0IG1pbjpIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGxldCBtYXg6SFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBtaW4uaW5uZXJUZXh0ID0gdmFsdWVzLm1pbjtcclxuICAgIG1heC5pbm5lclRleHQgPSB2YWx1ZXMubWF4O1xyXG4gICAgbWluLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlclBvaW50Jyk7XHJcbiAgICBtYXguY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVyUG9pbnQnKTtcclxuICAgIHRoaXMubWluVmFsdWUgPSBtaW47XHJcbiAgICB0aGlzLm1heFZhbHVlID0gbWF4O1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudHMoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7bWluOiB0aGlzLm1pblZhbHVlLCBtYXg6IHRoaXMubWF4VmFsdWV9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtTbGlkZXJSYW5nZX0gZnJvbSAnLi9jb21wb25lbnRzL3NsaWRlci1yYW5nZS50cyc7XHJcbmltcG9ydCB7SGFuZGVsc30gZnJvbSAnLi9jb21wb25lbnRzL2hhbmRlbHMudHMnO1xyXG5pbXBvcnQge1NsaWRlck1vdmVtZW50fSBmcm9tICcuL2NvbXBvbmVudHMvc2xpZGVyLW1vdmVtZW50LnRzJztcclxuaW1wb3J0IHtTaWRlTWVudX0gZnJvbSAnLi9jb21wb25lbnRzL3NpZGUtbWVudS50cyc7XHJcbmltcG9ydCB7VmFsdWVSYW5nZX0gZnJvbSAnLi9jb21wb25lbnRzL3ZhbHVlUmFuZ2UudHMnO1xyXG5pbXBvcnQge0hhbmRlbHNMYWJlbHN9IGZyb20gJy4vY29tcG9uZW50cy9oYW5kZWxzLWxhYmVscy50cyc7XHJcbmltcG9ydCB7U2VsZWN0ZWRSYW5nZX0gZnJvbSAnLi9jb21wb25lbnRzL3NlbGVjdGVkLXJhbmdlLnRzJztcclxuXHJcbmludGVyZmFjZSBTZXR0aW5ncyB7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgYm9vbGVhblxyXG59O1xyXG5cclxuaW50ZXJmYWNlIFNpZGVNZW51RWxlbWVudHMge1xyXG4gIFtrZXk6IHN0cmluZ106IEhUTUxEaXZFbGVtZW50IHwgSFRNTElucHV0RWxlbWVudDtcclxufTtcclxuXHJcbmludGVyZmFjZSBEYXRhT2ZWYWx1ZVJlZnJlc2gge1xyXG4gICdtaW4nPzogc3RyaW5nO1xyXG4gICdtYXgnPzogc3RyaW5nO1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIFZpZXcge1xyXG4gIHByaXZhdGUgdGhhdDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBzZXR0aW5nczogU2V0dGluZ3M7XHJcbiAgcHJpdmF0ZSBzbGlkZXJSYW5nZTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBzbGlkZXJDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHByaXZhdGUgbWluSGFuZGVsOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBtYXhIYW5kZWw6IEhUTUxTcGFuRWxlbWVudDtcclxuICBwcml2YXRlIHNsaWRlck1vdmVtZW50OiBPYmplY3Q7XHJcbiAgcHJpdmF0ZSBzaWRlTWVudTogSFRNTERpdkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBzaWRlTWVudUNvbnRhaW5lcjogU3RyaW5nIHwgQm9vbGVhbjtcclxuICBwcml2YXRlIG1pblZhbHVlOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICBwcml2YXRlIG1heFZhbHVlOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuICBwcml2YXRlIG1pbkxhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIHByaXZhdGUgbWF4TGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBoYW5kZWxUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBoYW5kZWxMYWJlbFRvZ2dsZTogSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIHBsYW5lVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHByaXZhdGUgbWluSW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBtYXhJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIGludGVydmFsOiBIVE1MRGl2RWxlbWVudDtcclxuICBcclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHRhcmdldDogSFRNTERpdkVsZW1lbnQsIHNldHRpbmdzOiBTZXR0aW5ncykge1xyXG4gICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xyXG4gICAgdGhpcy50aGF0ID0gdGFyZ2V0O1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZSA9IG5ldyBTbGlkZXJSYW5nZSgpLmdldEVsZW1lbnRzKCk7XHJcbiAgICB0aGlzLm1pbkhhbmRlbCA9IG5ldyBIYW5kZWxzKCkuZ2V0RWxlbWVudHMoKS5taW47XHJcbiAgICB0aGlzLm1heEhhbmRlbCA9IG5ldyBIYW5kZWxzKCkuZ2V0RWxlbWVudHMoKS5tYXg7XHJcbiAgICB0aGlzLm1pblZhbHVlID0gbmV3IFZhbHVlUmFuZ2UoeydtaW4nOiB0aGlzLnNldHRpbmdzWydtaW4nXSwgJ21heCc6IHRoaXMuc2V0dGluZ3NbJ21heCddfSkuZ2V0RWxlbWVudHMoKS5taW47XHJcbiAgICB0aGlzLm1heFZhbHVlID0gbmV3IFZhbHVlUmFuZ2UoeydtaW4nOiB0aGlzLnNldHRpbmdzWydtaW4nXSwgJ21heCc6IHRoaXMuc2V0dGluZ3NbJ21heCddfSkuZ2V0RWxlbWVudHMoKS5tYXg7XHJcbiAgICBpZiAoc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlKSB7XHJcbiAgICAgIGxldCBzaWRlTWVudUVsZW1lbnRzOiBTaWRlTWVudUVsZW1lbnRzID0gbmV3IFNpZGVNZW51KCkuZ2V0RWxlbWVudHMoKTtcclxuICAgICAgdGhpcy5zaWRlTWVudSA9IHNpZGVNZW51RWxlbWVudHMubWVudTtcclxuICAgICAgdGhpcy5oYW5kZWxUb2dnbGUgPSBzaWRlTWVudUVsZW1lbnRzLmhhbmRlbFRvZ2dsZTtcclxuICAgICAgdGhpcy5oYW5kZWxMYWJlbFRvZ2dsZSA9IHNpZGVNZW51RWxlbWVudHMuaGFuZGVsTGFiZWxUb2dnbGU7XHJcbiAgICAgIHRoaXMucGxhbmVUb2dnbGUgPSBzaWRlTWVudUVsZW1lbnRzLnBsYW5lVG9nZ2xlO1xyXG4gICAgICB0aGlzLm1pbklucHV0ID0gc2lkZU1lbnVFbGVtZW50cy5taW5JbnB1dDtcclxuICAgICAgdGhpcy5tYXhJbnB1dCA9IHNpZGVNZW51RWxlbWVudHMubWF4SW5wdXQ7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5zaWRlTWVudUNvbnRhaW5lciA9IHNldHRpbmdzLnNpZGVNZW51Q29udGFpbmVyO1xyXG4gICAgdGhpcy5taW5MYWJlbCA9IG5ldyBIYW5kZWxzTGFiZWxzKCkuZ2V0RWxlbWVudHMoKS5taW47XHJcbiAgICB0aGlzLm1heExhYmVsID0gbmV3IEhhbmRlbHNMYWJlbHMoKS5nZXRFbGVtZW50cygpLm1heDtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBuZXcgU2VsZWN0ZWRSYW5nZSgpLmdldEVsZW1lbnRzKCk7XHJcbiAgICB0aGlzLnNsaWRlck1vdmVtZW50ID0gbmV3IFNsaWRlck1vdmVtZW50KHsnbWluJzogdGhpcy5taW5IYW5kZWwsICdtYXgnOiB0aGlzLm1heEhhbmRlbCwnbWluTGFiZWwnOiB0aGlzLm1pbkxhYmVsLCAnbWF4TGFiZWwnOiB0aGlzLm1heExhYmVsICwnc2xpZGVyUmFuZ2UnOiB0aGlzLnNsaWRlclJhbmdlLCAncGxhbmVUb2dnbGUnOiB0aGlzLnBsYW5lVG9nZ2xlLCAnaGFuZGVsc1RvZ2dsZSc6IHRoaXMuaGFuZGVsVG9nZ2xlLCAnaW50ZXJ2YWwnOiB0aGlzLmludGVydmFsLCAnc3RlcCc6IHRoaXMuc2V0dGluZ3Muc3RlcH0pXHJcbiAgfVxyXG5cclxuICBkaXNwbGF5RWxlbWVudHMoKTogdm9pZCB7XHJcbiAgICBsZXQgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5zbGlkZXJDb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2xpZGVyQm9keScpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZCh0aGlzLnNsaWRlclJhbmdlKTtcclxuICAgIHRoaXMudGhhdC5hcHBlbmQoY29udGFpbmVyKTtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMubWluSGFuZGVsKTtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMubWF4SGFuZGVsKTtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMubWluVmFsdWUpO1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZS5hcHBlbmQodGhpcy5tYXhWYWx1ZSk7XHJcbiAgICB0aGlzLmludGVydmFsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgdGhpcy5taW5IYW5kZWwuYXBwZW5kKHRoaXMubWluTGFiZWwpO1xyXG4gICAgdGhpcy5tYXhIYW5kZWwuYXBwZW5kKHRoaXMubWF4TGFiZWwpO1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1snaGFuZGVsc0xhYmVsJ10gPT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMubWluTGFiZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdGhpcy5tYXhMYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYW5kZWxMYWJlbFRvZ2dsZS5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuc2lkZU1lbnVDb250YWluZXIgIT09ICdmYWxzZScpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNpZGVNZW51Q29udGFpbmVyKS5hcHBlbmQodGhpcy5zaWRlTWVudSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudGhhdC5hcHBlbmQodGhpcy5zaWRlTWVudSlcclxuICAgIH07XHJcbiAgICBcclxuICAgIGlmICh0aGlzLnNldHRpbmdzW1wicmFuZ2VcIl0gPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5tYXhIYW5kZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgICAgdGhpcy5oYW5kZWxUb2dnbGUuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3NbJ3ZlcnRpY2FsJ10gPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5wbGFuZVRvZ2dsZS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zbGlkZXJNb3ZlbWVudC5jaGFuZ2VQbGFuZSh0aGlzLnBsYW5lVG9nZ2xlLCB0aGlzLnNsaWRlckNvbnRhaW5lciwgdGhpcy5taW5WYWx1ZSwgdGhpcy5tYXhWYWx1ZSk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHJlZnJlc2hDdXJyZW50VmFsdWVzKG5ld0RhdGE6IERhdGFPZlZhbHVlUmVmcmVzaCk6IHZvaWQge1xyXG4gICAgaWYgKCdtaW4nIGluIG5ld0RhdGEgJiYgJ21heCcgaW4gbmV3RGF0YSAmJiB0aGlzLnNldHRpbmdzWydyYW5nZSddID09PSB0cnVlICYmIHRoaXMuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5zaWRlTWVudS5xdWVyeVNlbGVjdG9yKCcjbWluU2xpZGVyVmFsdWUnKS50ZXh0Q29udGVudCA9IG5ld0RhdGEubWluO1xyXG4gICAgICB0aGlzLnNpZGVNZW51LnF1ZXJ5U2VsZWN0b3IoJyNtYXhTbGlkZXJWYWx1ZScpLnRleHRDb250ZW50ID0gYCAtICR7bmV3RGF0YS5tYXh9YDtcclxuICAgICAgdGhpcy5zaWRlTWVudS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tU2xpZGVyTWluSW5wdXQnKS52YWx1ZSA9IG5ld0RhdGEubWluO1xyXG4gICAgICB0aGlzLnNpZGVNZW51LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b21TbGlkZXJNYXhJbnB1dCcpLnZhbHVlID0gbmV3RGF0YS5tYXg7XHJcbiAgICAgIHRoaXMubWluTGFiZWwudGV4dENvbnRlbnQgPSBuZXdEYXRhLm1pbjtcclxuICAgICAgdGhpcy5tYXhMYWJlbC50ZXh0Q29udGVudCA9IG5ld0RhdGEubWF4O1xyXG4gICAgfSBlbHNlIGlmICgnbWluJyBpbiBuZXdEYXRhKSB7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzWydyYW5nZSddID09PSB0cnVlICYmIHRoaXMuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICB0aGlzLnNpZGVNZW51LnF1ZXJ5U2VsZWN0b3IoJyNtaW5TbGlkZXJWYWx1ZScpLnRleHRDb250ZW50ID0gbmV3RGF0YS5taW47O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2lkZU1lbnUucXVlcnlTZWxlY3RvcignI21pblNsaWRlclZhbHVlJykudGV4dENvbnRlbnQgPSBuZXdEYXRhLm1pbjs7XHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuc2lkZU1lbnUucXVlcnlTZWxlY3RvcignLmN1c3RvbVNsaWRlck1pbklucHV0JykudmFsdWUgPSBuZXdEYXRhLm1pbjtcclxuICAgICAgdGhpcy5taW5MYWJlbC50ZXh0Q29udGVudCA9IG5ld0RhdGEubWluO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaWRlTWVudS5xdWVyeVNlbGVjdG9yKCcjbWF4U2xpZGVyVmFsdWUnKS50ZXh0Q29udGVudCA9IGAgLSAke25ld0RhdGEubWF4fWA7XHJcbiAgICAgIHRoaXMuc2lkZU1lbnUucXVlcnlTZWxlY3RvcignLmN1c3RvbVNsaWRlck1heElucHV0JykudmFsdWUgPSBuZXdEYXRhLm1heDtcclxuICAgICAgdGhpcy5tYXhMYWJlbC50ZXh0Q29udGVudCA9IG5ld0RhdGEubWF4O1xyXG4gICAgfTtcclxuICAgIG5ldyBIYW5kZWxzTGFiZWxzKCkuY2VudGVyaW5nUmVsYXRpdmVUb0hhbmRsZXModGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGgsIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRoLCB0aGlzLm1pbkxhYmVsLm9mZnNldFdpZHRoLCB0aGlzLm1heExhYmVsLm9mZnNldFdpZHRoLCB0aGlzLm1pbkxhYmVsLCB0aGlzLm1heExhYmVsKTtcclxuICB9O1xyXG5cclxuICBjYWxsSGFuZGVsTGFiZWxUb2dnbGVDaGFuZ2VyKHRhcmdldDogVmlldyk6IHZvaWQge1xyXG4gICAgbmV3IEhhbmRlbHNMYWJlbHMoKS5kaXNwbGF5Q29udHJvbGxlcih0YXJnZXQuaGFuZGVsTGFiZWxUb2dnbGUsIHRoaXMubWluTGFiZWwsIHRoaXMubWF4TGFiZWwpO1xyXG4gICAgaWYgKHRhcmdldC5oYW5kZWxMYWJlbFRvZ2dsZS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgIG5ldyBIYW5kZWxzTGFiZWxzKCkuY2VudGVyaW5nUmVsYXRpdmVUb0hhbmRsZXModGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGgsIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRoLCB0aGlzLm1pbkxhYmVsLm9mZnNldFdpZHRoLCB0aGlzLm1heExhYmVsLm9mZnNldFdpZHRoLCB0aGlzLm1pbkxhYmVsLCB0aGlzLm1heExhYmVsKVxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBjYWxsTWF4SGFuZGVsVG9nZ2xlQ2hhbmdlcih0YXJnZXQ6IFZpZXcpOiB2b2lkIHtcclxuICAgIGlmICh0YXJnZXQuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMuc2xpZGVyTW92ZW1lbnQubXlEYXRhWydtYXgnXSA9IHsnbWF4JzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRofWAsICdzbGlkZXJXaWR0aCc6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbkhhbmRlbC5vZmZzZXRXaWR0aH1gfVxyXG4gICAgICB0aGlzLm1heEhhbmRlbC5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRofXB4YDtcclxuICAgICAgdGhpcy5zaWRlTWVudS5xdWVyeVNlbGVjdG9yKCcjbWF4U2xpZGVyVmFsdWUnKS50ZXh0Q29udGVudCA9ICcnO1xyXG4gICAgICB0aGlzLm1heElucHV0LnNldEF0dHJpYnV0ZSgncmVhZG9ubHknLCAnJyk7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQudmFsdWUgPSAnJztcclxuICAgICAgdGhpcy5tYXhJbnB1dC5zdHlsZS5vcGFjaXR5ID0gJzAuMyc7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH07XHJcbiAgICBcclxuICAgIG5ldyBIYW5kZWxzKCkuZGlzcGxheUNvbnRyb2xsZXIodGFyZ2V0LmhhbmRlbFRvZ2dsZSwgdGhpcy5tYXhIYW5kZWwpO1xyXG5cclxuICAgIGlmICh0YXJnZXQuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5tYXhJbnB1dC5yZW1vdmVBdHRyaWJ1dGUoJ3JlYWRvbmx5Jyk7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUucmlnaHQgPSB0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbkhhbmRlbC5vZmZzZXRXaWR0aCAvIDIgKSArICdweCc7XHJcbiAgICAgIGlmICh0aGlzLnNsaWRlck1vdmVtZW50Lm15RGF0YS5taW5bJ21pbiddID49IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1heEhhbmRlbC5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgdGhpcy5zbGlkZXJNb3ZlbWVudC5teURhdGFbJ21pbiddID0geydtaW4nOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXhIYW5kZWwub2Zmc2V0V2lkdGggLSB0aGlzLm1pbkhhbmRlbC5vZmZzZXRXaWR0aH1gLCAnc2xpZGVyV2lkdGgnOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXhIYW5kZWwub2Zmc2V0V2lkdGh9YH1cclxuICAgICAgICB0aGlzLm1pbkhhbmRlbC5zdHlsZS5sZWZ0ID0gYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRoIC0gdGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGh9cHhgO1xyXG4gICAgICB9O1xyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICByZWZyZXNoTWF4U2lkZU1lbnVEYXRhKGRhdGE6IG51bWJlcik6IHZvaWQge1xyXG4gICAgdGhpcy5zaWRlTWVudS5xdWVyeVNlbGVjdG9yKCcjbWF4U2xpZGVyVmFsdWUnKS50ZXh0Q29udGVudCA9IGAgLSAke2RhdGF9YDtcclxuICAgIHRoaXMubWF4SW5wdXQuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgIHRoaXMubWF4SW5wdXQudmFsdWUgPSBgJHtkYXRhfWA7XHJcbiAgfTtcclxuXHJcbiAgaW5wdXRzUG9zc2libGVSYW5nZSggZGF0YTogb2JqZWN0LCBtaW46IEhUTUxJbnB1dEVsZW1lbnQsIG1heDogSFRNTElucHV0RWxlbWVudCk6IHZvaWQge1xyXG4gICAgbWluLnNldEF0dHJpYnV0ZSgnbWF4JywgZGF0YS5tYXgpO1xyXG4gICAgbWluLnNldEF0dHJpYnV0ZSgnbWluJywgZGF0YS5taW4pO1xyXG4gICAgbWF4LnNldEF0dHJpYnV0ZSgnbWF4JywgZGF0YS5tYXgpO1xyXG4gIH07XHJcbiAgICBcclxufTtcclxuIiwiaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vY29tcG9uZW50cy92aWV3L3ZpZXcudHMnO1xyXG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RlbC9Nb2RlbC50cyc7XHJcbmltcG9ydCB7IEZhY2FkZSB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RlbC9mYWNhZGUudHMnO1xyXG5pbXBvcnQgeyBQcmVzZW50ZXIgfSBmcm9tICcuL2NvbXBvbmVudHMvcHJlc2VudGVyL3ByZXNlbnRlci50cyc7XHJcblxyXG4oZnVuY3Rpb24oICQgKSB7XHJcbiAgJC5mbi50ZXN0U2xpZGVyID0gZnVuY3Rpb24oIG9wdGlvbnMgKSB7XHJcblxyXG4gICAgdmFyIHNldHRpbmdzID0gJC5leHRlbmQoIHtcclxuICAgICAgJ21pbic6ICcwJyxcclxuICAgICAgJ21heCc6ICcxMCcsXHJcbiAgICAgICdyYW5nZSc6IGZhbHNlLFxyXG4gICAgICAnc2lkZS1tZW51JzogZmFsc2UsXHJcbiAgICAgICdoYW5kZWxzTGFiZWwnOiBmYWxzZSxcclxuICAgICAgJ3ZlcnRpY2FsJzogZmFsc2UsXHJcbiAgICAgICdzdGVwJzogZmFsc2UsXHJcbiAgICAgICdzaWRlTWVudUNvbnRhaW5lcic6ICdmYWxzZSdcclxuICAgIH0sIG9wdGlvbnMpO1xyXG5cclxuICAgIGxldCB0aGF0OiBIVE1MRGl2RWxlbWVudCA9IHRoaXM7XHJcbiAgICBcclxuICAgIGxldCBtb2RlbDtcclxuICAgIGlmICgnY3VycmVudC1taW4nIGluIHNldHRpbmdzICYmICdjdXJyZW50LW1heCcgaW4gc2V0dGluZ3MpIHtcclxuICAgICAgbW9kZWwgPSBuZXcgTW9kZWwoeydtaW4nOiBzZXR0aW5nc1snbWluJ10sIG1heDogc2V0dGluZ3NbJ21heCddLCAnY3VycmVudC1taW4nOiBzZXR0aW5nc1snY3VycmVudC1taW4nXSwgJ2N1cnJlbnQtbWF4Jzogc2V0dGluZ3NbJ2N1cnJlbnQtbWF4J119KTtcclxuICAgIH0gZWxzZSBpZiAoJ2N1cnJlbnQtbWluJyBpbiBzZXR0aW5ncykge1xyXG4gICAgICBtb2RlbCA9IG5ldyBNb2RlbCh7J21pbic6IHNldHRpbmdzWydtaW4nXSwgbWF4OiBzZXR0aW5nc1snbWF4J10sICdjdXJyZW50LW1pbic6IHNldHRpbmdzWydjdXJyZW50LW1pbiddLCAnY3VycmVudC1tYXgnOiBzZXR0aW5nc1snbWF4J119KTtcclxuICAgIH0gZWxzZSBpZiAoJ2N1cnJlbnQtbWF4JyBpbiBzZXR0aW5ncykge1xyXG4gICAgICBtb2RlbCA9IG5ldyBNb2RlbCh7J21pbic6IHNldHRpbmdzWydtaW4nXSwgbWF4OiBzZXR0aW5nc1snbWF4J10sICdjdXJyZW50LW1pbic6IHNldHRpbmdzWydtaW4nXSwgJ2N1cnJlbnQtbWF4Jzogc2V0dGluZ3NbJ2N1cnJlbnQtbWF4J119KTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1vZGVsID0gbmV3IE1vZGVsKHsnbWluJzogc2V0dGluZ3NbJ21pbiddLCBtYXg6IHNldHRpbmdzWydtYXgnXSwgJ2N1cnJlbnQtbWluJzogc2V0dGluZ3NbJ21pbiddLCAnY3VycmVudC1tYXgnOiBzZXR0aW5nc1snbWF4J119KTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgbGV0IHZpZXcgPSBuZXcgVmlldyh0aGF0LCBzZXR0aW5ncyk7XHJcbiAgICBcclxuICAgIGxldCBmYWNhZGUgPSBuZXcgRmFjYWRlKG1vZGVsKVxyXG4gICAgXHJcbiAgICBsZXQgcHJlc2VudGVyID0gUHJlc2VudGVyKHZpZXcsIGZhY2FkZSk7XHJcbiAgfTtcclxufSkoalF1ZXJ5KTsiXSwic291cmNlUm9vdCI6IiJ9