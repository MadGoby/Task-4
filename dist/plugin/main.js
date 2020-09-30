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
    value: function centeringRelativeToHandles(minHandel, maxHandel, minLabel, maxLabel) {
      minLabel.style.left = (minHandel.offsetWidth - minLabel.offsetWidth - 1) / 2 + 'px';
      maxLabel.style.left = (maxHandel.offsetWidth - maxLabel.offsetWidth - 1) / 2 + 'px';
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
    }
  }]);

  return Handels;
}();

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
    value: function minHandelListener(event) {
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
      console.log(positions);

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

    _defineProperty(this, "element", void 0);

    var elem = document.createElement('div');
    elem.classList.add('sliderRange');
    this.element = elem;
  }

  _createClass(SliderRange, [{
    key: "getElement",
    value: function getElement() {
      return this.element;
    }
  }]);

  return SliderRange;
}();

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
    this.sliderRange = new _components_slider_range_ts__WEBPACK_IMPORTED_MODULE_0__["SliderRange"]().getElement();
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
      new _components_handels_labels_ts__WEBPACK_IMPORTED_MODULE_5__["HandelsLabels"]().centeringRelativeToHandles(this.minHandel, this.maxHandel, this.minLabel, this.maxLabel);
    }
  }, {
    key: "callHandelLabelToggleChanger",
    value: function callHandelLabelToggleChanger(target) {
      new _components_handels_labels_ts__WEBPACK_IMPORTED_MODULE_5__["HandelsLabels"]().displayController(target.handelLabelToggle, this.minLabel, this.maxLabel);

      if (target.handelLabelToggle.checked === true) {
        new _components_handels_labels_ts__WEBPACK_IMPORTED_MODULE_5__["HandelsLabels"]().centeringRelativeToHandles(this.minHandel, this.maxHandel, this.minLabel, this.maxLabel);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwvTW9kZWwudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvbW9kZWwvZmFjYWRlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ByZXNlbnRlci9wcmVzZW50ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL2hhbmRlbHMtbGFiZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9oYW5kZWxzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9zZWxlY3RlZC1yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NvbXBvbmVudHMvc2lkZS1tZW51LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL3ZpZXcvY29tcG9uZW50cy9zbGlkZXItbW92ZW1lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL3NsaWRlci1yYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NvbXBvbmVudHMvdmFsdWVSYW5nZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L3ZpZXcudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pxdWVyeS51aS5jdXN0b21TbGlkZXIudHMiXSwibmFtZXMiOlsiTW9kZWwiLCJzZXR0aW5ncyIsImRhdGEiLCJPYmplY3QiLCJhc3NpZ24iLCJtaW4iLCJtYXgiLCJGYWNhZGUiLCJtb2RlbCIsImdldEN1cnJlbnREYXRhIiwicHJvcCIsIk1hdGgiLCJyb3VuZCIsIlByZXNlbnRlciIsInZpZXciLCJmYWNhZGUiLCJkaXNwbGF5RWxlbWVudHMiLCJzbGlkZXJNb3ZlbWVudCIsIm15RGF0YSIsIlByb3h5Iiwic2V0IiwidGFyZ2V0IiwidmFsIiwibW9kZWxSZXN1bHQiLCJyZWZyZXNoTW9kZWxEYXRhIiwicmVmcmVzaEN1cnJlbnRWYWx1ZXMiLCJzdGVwIiwic3RlcEFtb3VudCIsImdldFBvc2l0aW9uc0Ftb3VudCIsIm1pbkhhbmRlbCIsIm9ubW91c2Vkb3duIiwiZXZlbnQiLCJtaW5IYW5kZWxMaXN0ZW5lciIsIm1heEhhbmRlbCIsIm1heEhhbmRlbExpc3RlbmVyIiwiaGFuZGVsTGFiZWxUb2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiY2FsbEhhbmRlbExhYmVsVG9nZ2xlQ2hhbmdlciIsImhhbmRlbFRvZ2dsZSIsImNhbGxNYXhIYW5kZWxUb2dnbGVDaGFuZ2VyIiwiY2hlY2tlZCIsInJlc3VsdCIsImdldE1heERhdGEiLCJyZWZyZXNoTWF4U2lkZU1lbnVEYXRhIiwicGxhbmVUb2dnbGUiLCJjaGFuZ2VQbGFuZSIsInNsaWRlckNvbnRhaW5lciIsIm1pblZhbHVlIiwibWF4VmFsdWUiLCJzZWxlY3Rpb25PZlByZXBhcmVkVmFsdWUiLCJtaW5JbnB1dCIsInBvc2l0aW9ucyIsInNpZGVNZW51SW5wdXRzVmFsdWVzVmFsaWRhdGlvbkNoZWNrZXIiLCJ2YWx1ZSIsIm1heElucHV0IiwicG9zc2libGVSYW5nZSIsImdldFBvc3NpYmxlUmFuZ2UiLCJpbnB1dHNQb3NzaWJsZVJhbmdlIiwic3RhcnRQb3NpdGlvbnMiLCJzdGFydEhhbmRlbHNQb3NpdGlvbiIsInN0YXJ0SGFuZGxlcnNQb3NpdGlvbnMiLCJIYW5kZWxzTGFiZWxzIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwibWluTGFiZWwiLCJtYXhMYWJlbCIsInRvZ2dsZSIsInN0eWxlIiwiZGlzcGxheSIsImxlZnQiLCJvZmZzZXRXaWR0aCIsIkhhbmRlbHMiLCJTZWxlY3RlZFJhbmdlIiwiaW50ZXJ2YWwiLCJTaWRlTWVudSIsInNsaWRlclZhbHVlUCIsImlubmVyVGV4dCIsIm1pblNsaWRlclZhbHVlT3V0cHV0IiwiaWQiLCJtYXhTbGlkZXJWYWx1ZU91dHB1dCIsInNsaWRlclRvZ2dsZVAiLCJzbGlkZXJUb2dnbGVMYWJlbCIsIm1heFNsaWRlckhhbmRlbFRvZ2dsZSIsInNldEF0dHJpYnV0ZSIsImN1c3RvbVNsaWRlckJvcmRlciIsImN1c3RvbVNsaWRlcklucHV0cyIsImN1c3RvbVNsaWRlcklucHV0c1AiLCJjdXN0b21TbGlkZXJJbnB1dHNNaW5MYWJlbCIsImN1c3RvbVNsaWRlcklucHV0c01heExhYmVsIiwiY3VzdG9tU2xpZGVySW5wdXRzTWluIiwiY3VzdG9tU2xpZGVySW5wdXRzTWF4IiwidG9nZ2xlRm9yVmFsdWVzQ29udGFpbmVyIiwidG9nZ2xlRm9yVmFsdWVzUCIsInRvZ2dsZUZvclZhbHVlc0xhYmVsIiwidG9nZ2xlRm9yVmFsdWVzSW5wdXQiLCJ0b2dnbGVGb3JWYWx1ZXNTcGFuIiwidG9nZ2xlRm9yUGxhbmVDb250YWluZXIiLCJ0b2dnbGVGb3JQbGFuZVAiLCJ0b2dnbGVGb3JQbGFuZUxhYmVsIiwidG9nZ2xlRm9yUGxhbmVJbnB1dCIsInRvZ2dsZUZvclBsYW5lU3BhbiIsIm1haW5TbGlkZXJDb250YWluZXIiLCJhcHBlbmQiLCJjdXN0b21TbGlkZXJNZW51Q29udGFpbmVyIiwibWVudSIsIlNsaWRlck1vdmVtZW50IiwiaGFuZGVscyIsInNsaWRlclJhbmdlIiwiaGFuZGVsc1RvZ2dsZSIsInBvc2l0aW9uVmFsdWVzIiwicmlnaHQiLCJ0aGF0Iiwic2hpZnQiLCJkb3VibGVIYW5kZWxzIiwidmVydGljYWwiLCJjbGllbnRZIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwidG9wIiwiY2xpZW50WCIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwibmV3TGVmdCIsInJpZ2h0RWRnZSIsInJlbmV3YWxPZlBvc2l0aW9uIiwidW5kZWZpbmVkIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImJvZHkiLCJoZWlnaHQiLCJ0cmFuc2Zvcm0iLCJyZW1vdmUiLCJtaW5pbXVtIiwiY29uc29sZSIsImxvZyIsIlNsaWRlclJhbmdlIiwiZWxlbSIsImVsZW1lbnQiLCJWYWx1ZVJhbmdlIiwidmFsdWVzIiwiVmlldyIsImdldEVsZW1lbnQiLCJnZXRFbGVtZW50cyIsInNpZGVNZW51RWxlbWVudHMiLCJzaWRlTWVudSIsInNpZGVNZW51Q29udGFpbmVyIiwiY29udGFpbmVyIiwib2Zmc2V0SGVpZ2h0IiwicXVlcnlTZWxlY3RvciIsIm9wYWNpdHkiLCJuZXdEYXRhIiwidGV4dENvbnRlbnQiLCJjZW50ZXJpbmdSZWxhdGl2ZVRvSGFuZGxlcyIsImRpc3BsYXlDb250cm9sbGVyIiwicmVtb3ZlQXR0cmlidXRlIiwiJCIsImZuIiwidGVzdFNsaWRlciIsIm9wdGlvbnMiLCJleHRlbmQiLCJwcmVzZW50ZXIiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVPLElBQU1BLEtBQWI7QUFJ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O0FBQStFLHVCQUFlQSxRQUFRLENBQUMsS0FBRDtBQUF0RyxPQUFWLENBQVI7QUFDRDs7QUFFRCxRQUFJYSxJQUFJLEdBQUcsSUFBSThILDZEQUFKLENBQVMzQixJQUFULEVBQWVoSCxRQUFmLENBQVg7QUFFQSxRQUFJYyxNQUFNLEdBQUcsSUFBSVIsa0VBQUosQ0FBV0MsS0FBWCxDQUFiO0FBRUEsUUFBSXdKLFNBQVMsR0FBR25KLG9GQUFTLENBQUNDLElBQUQsRUFBT0MsTUFBUCxDQUF6QjtBQUNELEdBL0JEO0FBZ0NELENBakNELEVBaUNHa0osTUFqQ0gsRSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvanF1ZXJ5LnVpLmN1c3RvbVNsaWRlci50c1wiKTtcbiIsImltcG9ydCB7IElEYXRhIH0gZnJvbSAnLi9kYXRhSW50ZXJmYWNlLnRzJztcclxuXHJcbmludGVyZmFjZSBTZXR0aW5ncyB7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW9kZWwge1xyXG5cclxuICBkYXRhOiBJRGF0YTtcclxuICBcclxuICBjb25zdHJ1Y3Rvciggc2V0dGluZ3M6IFNldHRpbmdzICkgeyBcclxuICAgIHRoaXMuZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHNldHRpbmdzKTtcclxuICB9XHJcblxyXG4gIGdldEN1cnJlbnREYXRhKCk6IG9iamVjdCB7XHJcbiAgICByZXR1cm4geydtaW5pbXVtJzogdGhpcy5kYXRhLm1pbiwgJ21pbic6IHRoaXMuZGF0YVsnY3VycmVudC1taW4nXSwgJ21heCc6IHRoaXMuZGF0YVsnY3VycmVudC1tYXgnXSwgJ3Bvc2l0aW9ucyc6IGAke3RoaXMuZGF0YS5tYXggLSB0aGlzLmRhdGEubWlufWB9XHJcbiAgfVxyXG59IiwiaW1wb3J0IHtNb2RlbH0gZnJvbSAnLi9tb2RlbC50cydcclxuXHJcbmludGVyZmFjZSBNeURhdGFPYmplY3Qge1xyXG4gIFtrZXk6IHN0cmluZ106IHN0cmluZ1xyXG59O1xyXG5cclxuZXhwb3J0IGNsYXNzIEZhY2FkZSB7XHJcbiAgcHJpdmF0ZSBtb2RlbDtcclxuXHJcbiAgY29uc3RydWN0b3IgKG1vZGVsKSB7XHJcbiAgICB0aGlzLm1vZGVsID0gbW9kZWxcclxuICB9XHJcblxyXG4gIHN0YXJ0SGFuZGVsc1Bvc2l0aW9uKCk6b2JqZWN0IHtcclxuICAgIHJldHVybiB0aGlzLm1vZGVsLmdldEN1cnJlbnREYXRhKCk7XHJcbiAgfTtcclxuICBcclxuICByZWZyZXNoTW9kZWxEYXRhKGRhdGE6IG9iamVjdCwgcHJvcDogc3RyaW5nKTogb2JqZWN0IHtcclxuICAgIGlmIChwcm9wID09PSAnbWluJykge1xyXG4gICAgICB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWluJ10gPSBNYXRoLnJvdW5kKHRoaXMubW9kZWwuZGF0YVsnbWluJ10gKyAoZGF0YVsnbWluJ10gLyAoK2RhdGFbJ3NsaWRlcldpZHRoJ10gLyAodGhpcy5tb2RlbC5kYXRhWydtYXgnXSAtIHRoaXMubW9kZWwuZGF0YVsnbWluJ10pKSkpO1xyXG4gICAgICByZXR1cm4geyAnbWluJzogdGhpcy5tb2RlbC5kYXRhWydjdXJyZW50LW1pbiddIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMubW9kZWwuZGF0YVsnY3VycmVudC1tYXgnXSA9IE1hdGgucm91bmQodGhpcy5tb2RlbC5kYXRhWydtaW4nXSArIChkYXRhWydtYXgnXSAvICgrZGF0YVsnc2xpZGVyV2lkdGgnXSAvICh0aGlzLm1vZGVsLmRhdGFbJ21heCddIC0gdGhpcy5tb2RlbC5kYXRhWydtaW4nXSkpKSk7XHJcbiAgICAgIHJldHVybiB7ICdtYXgnOiB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWF4J10gfVxyXG4gICAgfTtcclxuICB9O1xyXG5cclxuICBnZXRNb2RlbERhdGEoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7ICdtaW4nOiB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWluJ10sICdtYXgnOiB0aGlzLm1vZGVsLmRhdGFbJ2N1cnJlbnQtbWF4J119XHJcbiAgfTtcclxuXHJcbiAgZ2V0TWF4RGF0YSgpOiBudW1iZXIge1xyXG4gICAgcmV0dXJuIHRoaXMubW9kZWwuZGF0YVsnbWF4J11cclxuICB9O1xyXG5cclxuICBnZXRQb3NzaWJsZVJhbmdlKCk6IG9iamVjdCB7XHJcbiAgICByZXR1cm4geydtYXgnOnRoaXMubW9kZWwuZGF0YS5tYXgsICdtaW4nOiB0aGlzLm1vZGVsLmRhdGEubWlufTtcclxuICB9O1xyXG5cclxuICBnZXRQb3NpdGlvbnNBbW91bnQoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7J3Bvc2l0aW9ucyc6IHRoaXMubW9kZWwuZGF0YS5tYXggLSB0aGlzLm1vZGVsLmRhdGEubWluLCAnbWluaW11bSc6IHRoaXMubW9kZWwuZGF0YS5taW59O1xyXG4gIH1cclxufTsiLCJpbXBvcnQgeyBTbGlkZXJNb3ZlbWVudCB9IGZyb20gXCIuLi92aWV3L2NvbXBvbmVudHMvc2xpZGVyLW1vdmVtZW50LnRzXCI7XHJcblxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFByZXNlbnRlciAodmlldywgZmFjYWRlKTogdm9pZCB7XHJcbiAgXHJcbiAgdmlldy5kaXNwbGF5RWxlbWVudHMoKTtcclxuICBcclxuICB2aWV3LnNsaWRlck1vdmVtZW50Lm15RGF0YSA9IG5ldyBQcm94eSh2aWV3LnNsaWRlck1vdmVtZW50Lm15RGF0YSwge1xyXG4gICAgc2V0KHRhcmdldCwgcHJvcCwgdmFsKSB7XHJcbiAgICAgIGlmKHR5cGVvZiB2YWwgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdGFyZ2V0W3Byb3BdID0gdmFsO1xyXG4gICAgICAgIGxldCBtb2RlbFJlc3VsdCA9IGZhY2FkZS5yZWZyZXNoTW9kZWxEYXRhKHZhbCwgcHJvcCk7XHJcbiAgICAgICAgdmlldy5yZWZyZXNoQ3VycmVudFZhbHVlcyhtb2RlbFJlc3VsdClcclxuICAgICAgICByZXR1cm4gdHJ1ZVxyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSlcclxuXHJcbiAgaWYgKHZpZXcuc2xpZGVyTW92ZW1lbnQuc3RlcCAhPT0gZmFsc2UpIHtcclxuICAgIGxldCBzdGVwQW1vdW50OiBvYmplY3QgPSBmYWNhZGUuZ2V0UG9zaXRpb25zQW1vdW50KCk7XHJcbiAgICB2aWV3LnNsaWRlck1vdmVtZW50LnN0ZXBBbW91bnQgPSBzdGVwQW1vdW50Wydwb3NpdGlvbnMnXTtcclxuICB9XHJcbiAgXHJcblxyXG4gIHZpZXcubWluSGFuZGVsLm9ubW91c2Vkb3duID0gZnVuY3Rpb24oIGV2ZW50ICk6IHZvaWQge1xyXG4gICAgdmlldy5zbGlkZXJNb3ZlbWVudC5taW5IYW5kZWxMaXN0ZW5lciggZXZlbnQgKTtcclxuICB9O1xyXG5cclxuICB2aWV3Lm1heEhhbmRlbC5vbm1vdXNlZG93biA9IGZ1bmN0aW9uKGV2ZW50KTogdm9pZCB7XHJcbiAgICB2aWV3LnNsaWRlck1vdmVtZW50Lm1heEhhbmRlbExpc3RlbmVyKCBldmVudCApO1xyXG4gIH07XHJcbiAgXHJcbiAgdmlldy5oYW5kZWxMYWJlbFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgIHZpZXcuY2FsbEhhbmRlbExhYmVsVG9nZ2xlQ2hhbmdlcih2aWV3KVxyXG4gIH0pO1xyXG5cclxuICB2aWV3LmhhbmRlbFRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBmdW5jdGlvbigpIHtcclxuICAgIHZpZXcuY2FsbE1heEhhbmRlbFRvZ2dsZUNoYW5nZXIodmlldylcclxuICAgIGlmICh2aWV3LmhhbmRlbFRvZ2dsZS5jaGVja2VkID09PSB0cnVlKSB7XHJcbiAgICAgIGxldCByZXN1bHQ6IG51bWJlciA9IGZhY2FkZS5nZXRNYXhEYXRhKCk7XHJcbiAgICAgIHZpZXcucmVmcmVzaE1heFNpZGVNZW51RGF0YShyZXN1bHQpXHJcbiAgICB9O1xyXG4gIH0pO1xyXG5cclxuICB2aWV3LnBsYW5lVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmlldy5zbGlkZXJNb3ZlbWVudC5jaGFuZ2VQbGFuZSh2aWV3LnBsYW5lVG9nZ2xlLCB2aWV3LnNsaWRlckNvbnRhaW5lciwgdmlldy5taW5WYWx1ZSwgdmlldy5tYXhWYWx1ZSk7XHJcbiAgfSk7XHJcblxyXG4gIHZpZXcubWluVmFsdWUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcclxuICAgIHZpZXcuc2xpZGVyTW92ZW1lbnQuc2VsZWN0aW9uT2ZQcmVwYXJlZFZhbHVlKCdtaW4nKTtcclxuICB9KTtcclxuXHJcbiAgdmlldy5tYXhWYWx1ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xyXG4gICAgdmlldy5zbGlkZXJNb3ZlbWVudC5zZWxlY3Rpb25PZlByZXBhcmVkVmFsdWUoJ21heCcpO1xyXG4gIH0pO1xyXG5cclxuICB2aWV3Lm1pbklucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGZ1bmN0aW9uKCkge1xyXG4gICAgbGV0IHBvc2l0aW9uczogbnVtYmVyID0gZmFjYWRlLmdldFBvc2l0aW9uc0Ftb3VudCgpO1xyXG4gICAgdmlldy5zbGlkZXJNb3ZlbWVudC5zaWRlTWVudUlucHV0c1ZhbHVlc1ZhbGlkYXRpb25DaGVja2VyKCdtaW4nLCB2aWV3Lm1pbklucHV0LnZhbHVlLCBwb3NpdGlvbnNbJ3Bvc2l0aW9ucyddLCBwb3NpdGlvbnNbJ21pbmltdW0nXSk7XHJcbiAgfSk7XHJcblxyXG4gIHZpZXcubWF4SW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgcG9zaXRpb25zOiBudW1iZXIgPSBmYWNhZGUuZ2V0UG9zaXRpb25zQW1vdW50KCk7XHJcbiAgICB2aWV3LnNsaWRlck1vdmVtZW50LnNpZGVNZW51SW5wdXRzVmFsdWVzVmFsaWRhdGlvbkNoZWNrZXIoJ21heCcsIHZpZXcubWF4SW5wdXQudmFsdWUsIHBvc2l0aW9uc1sncG9zaXRpb25zJ10sIHBvc2l0aW9uc1snbWluaW11bSddKTtcclxuICB9KTtcclxuXHJcbiAgbGV0IHBvc3NpYmxlUmFuZ2U6IG9iamVjdCA9IGZhY2FkZS5nZXRQb3NzaWJsZVJhbmdlKCk7XHJcbiAgdmlldy5pbnB1dHNQb3NzaWJsZVJhbmdlKHBvc3NpYmxlUmFuZ2UsIHZpZXcubWluSW5wdXQsIHZpZXcubWF4SW5wdXQpXHJcblxyXG4gIGxldCBzdGFydFBvc2l0aW9uczogb2JqZWN0ID0gZmFjYWRlLnN0YXJ0SGFuZGVsc1Bvc2l0aW9uKCk7XHJcbiAgdmlldy5zbGlkZXJNb3ZlbWVudC5zdGFydEhhbmRsZXJzUG9zaXRpb25zKHN0YXJ0UG9zaXRpb25zKTtcclxuICB2aWV3LnJlZnJlc2hDdXJyZW50VmFsdWVzKHN0YXJ0UG9zaXRpb25zKVxyXG59O1xyXG5cclxuXHJcbiIsImV4cG9ydCBjbGFzcyBIYW5kZWxzTGFiZWxzIHtcclxuICBtaW5MYWJlbDogSFRNTExhYmVsRWxlbWVudDtcclxuICBtYXhMYWJlbDogSFRNTExhYmVsRWxlbWVudDtcclxuICBsYWJlbElucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIGxldCBtaW46SFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBsZXQgbWF4OkhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgbWluLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlckhhbmRlbExhYmVsJyk7XHJcbiAgICBtYXguY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVySGFuZGVsTGFiZWwnKTtcclxuICAgIHRoaXMubWluTGFiZWwgPSBtaW47XHJcbiAgICB0aGlzLm1heExhYmVsID0gbWF4O1xyXG4gIH07XHJcbiAgXHJcbiAgZ2V0RWxlbWVudHMoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7J21pbic6IHRoaXMubWluTGFiZWwsICdtYXgnOiB0aGlzLm1heExhYmVsfTtcclxuICB9O1xyXG5cclxuICBkaXNwbGF5Q29udHJvbGxlcih0b2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQsIG1pbjogSFRNTExhYmVsRWxlbWVudCwgbWF4OiBIVE1MTGFiZWxFbGVtZW50KSB7XHJcbiAgICBpZiAodG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgbWluLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcclxuICAgICAgbWF4LnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lJztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1pbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICBtYXguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNlbnRlcmluZ1JlbGF0aXZlVG9IYW5kbGVzKG1pbkhhbmRlbDogSFRNTFNwYW5FbGVtZW50LCBtYXhIYW5kZWw6IEhUTUxTcGFuRWxlbWVudCwgbWluTGFiZWw6SFRNTExhYmVsRWxlbWVudCwgbWF4TGFiZWw6SFRNTExhYmVsRWxlbWVudCk6IHZvaWQge1xyXG4gICAgbWluTGFiZWwuc3R5bGUubGVmdCA9ICgobWluSGFuZGVsLm9mZnNldFdpZHRoIC0gbWluTGFiZWwub2Zmc2V0V2lkdGgpIC0gMSkgLyAyICsgJ3B4JztcclxuICAgIG1heExhYmVsLnN0eWxlLmxlZnQgPSAoKG1heEhhbmRlbC5vZmZzZXRXaWR0aCAtIG1heExhYmVsLm9mZnNldFdpZHRoKSAtIDEpIC8gMiArICdweCc7XHJcbiAgfVxyXG59IiwiZXhwb3J0IGNsYXNzIEhhbmRlbHMge1xyXG4gIG1pbkhhbmRlbDogSFRNTFNwYW5FbGVtZW50O1xyXG4gIG1heEhhbmRlbDogSFRNTFNwYW5FbGVtZW50O1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgbGV0IG1pbjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpXHJcbiAgICBsZXQgbWF4OiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgIG1pbi5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJIYW5kZWwnKVxyXG4gICAgbWF4LmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlckhhbmRlbCcpXHJcbiAgICB0aGlzLm1pbkhhbmRlbCA9IG1pbjtcclxuICAgIHRoaXMubWF4SGFuZGVsID0gbWF4O1xyXG4gIH1cclxuXHJcbiAgZ2V0RWxlbWVudHMoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7bWluOiB0aGlzLm1pbkhhbmRlbCwgbWF4OiB0aGlzLm1heEhhbmRlbH1cclxuICB9XHJcblxyXG4gIGRpc3BsYXlDb250cm9sbGVyKHRvZ2dsZTogSFRNTElucHV0RWxlbWVudCwgbWF4OiBIVE1MU3BhbkVsZW1lbnQpIHtcclxuICAgIGlmICh0b2dnbGUuY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICBtYXguc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBtYXguc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgIH1cclxuICB9XHJcblxyXG59IiwiZXhwb3J0IGNsYXNzIFNlbGVjdGVkUmFuZ2Uge1xyXG5cclxuICBwcml2YXRlIGludGVydmFsOiBIVE1MRGl2RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsZXQgaW50ZXJ2YWw6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBpbnRlcnZhbC5jbGFzc0xpc3QuYWRkKCdtYWluSW50ZXJ2YWwnKTtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBpbnRlcnZhbDtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnRzKCk6IEhUTUxEaXZFbGVtZW50IHtcclxuICAgIHJldHVybiB0aGlzLmludGVydmFsO1xyXG4gIH1cclxufSIsImV4cG9ydCBjbGFzcyBTaWRlTWVudSB7XHJcblxyXG4gIGN1c3RvbVNsaWRlck1lbnVDb250YWluZXI6IEhUTUxEaXZFbGVtZW50O1xyXG4gIGhhbmRlbFRvZ2dsZTogSFRNTElucHV0RWxlbWVudDtcclxuICBoYW5kZWxMYWJlbFRvZ2dsZTogSFRNTElucHV0RWxlbWVudDtcclxuICBwbGFuZVRvZ2dsZTogSFRNTElucHV0RWxlbWVudDtcclxuICBtaW5JbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuICBtYXhJbnB1dDogSFRNTElucHV0RWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsZXQgc2xpZGVyVmFsdWVQOkhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgc2xpZGVyVmFsdWVQLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclBhcmFnVmFsJyk7XHJcbiAgICBzbGlkZXJWYWx1ZVAuaW5uZXJUZXh0ID0gJ9Ci0LXQutGD0YnQtdC1INC30LDQvdGH0LXQvdC40LU6ICc7XHJcbiAgICBcclxuICAgIGxldCBtaW5TbGlkZXJWYWx1ZU91dHB1dDpIVE1MT3V0cHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ291dHB1dCcpO1xyXG4gICAgbWluU2xpZGVyVmFsdWVPdXRwdXQuY2xhc3NMaXN0LmFkZCgnc2xpZGVyVmFsdWUnKTtcclxuICAgIG1pblNsaWRlclZhbHVlT3V0cHV0LmlkID0gJ21pblNsaWRlclZhbHVlJztcclxuICAgIGxldCBtYXhTbGlkZXJWYWx1ZU91dHB1dDpIVE1MT3V0cHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ291dHB1dCcpO1xyXG4gICAgbWF4U2xpZGVyVmFsdWVPdXRwdXQuY2xhc3NMaXN0LmFkZCgnc2xpZGVyVmFsdWUnKTtcclxuICAgIG1heFNsaWRlclZhbHVlT3V0cHV0LmlkID0gJ21heFNsaWRlclZhbHVlJztcclxuICAgIFxyXG4gICAgbGV0IHNsaWRlclRvZ2dsZVA6SFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBzbGlkZXJUb2dnbGVQLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVNsaWRlclBhcmFnJyk7XHJcbiAgICBzbGlkZXJUb2dnbGVQLmlubmVyVGV4dCA9ICfQktC60LvRjtGH0LjRgtGMINCy0YLQvtGA0L7QuSDQv9C+0LvQt9GD0L3QvtC6OiAnO1xyXG4gICAgXHJcbiAgICBsZXQgc2xpZGVyVG9nZ2xlTGFiZWw6SFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBzbGlkZXJUb2dnbGVMYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJUb2dnbGUnKTtcclxuXHJcbiAgICBsZXQgbWF4U2xpZGVySGFuZGVsVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIG1heFNsaWRlckhhbmRlbFRvZ2dsZS5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJIYW5kZWxUb2dnbGUnKTtcclxuICAgIG1heFNsaWRlckhhbmRlbFRvZ2dsZS5pZCA9ICdtYXhTbGlkZXJIYW5kZWxUb2dnbGUnO1xyXG4gICAgbWF4U2xpZGVySGFuZGVsVG9nZ2xlLnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpXHJcblxyXG4gICAgbGV0IGN1c3RvbVNsaWRlckJvcmRlcjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgY3VzdG9tU2xpZGVyQm9yZGVyLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVRvZ2dsZVNsaWRlckJvcmRlcicpO1xyXG5cclxuICAgIGxldCBjdXN0b21TbGlkZXJJbnB1dHM6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHMuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVySW5wdXRzJyk7XHJcbiAgICBcclxuICAgIGxldCBjdXN0b21TbGlkZXJJbnB1dHNQOiBIVE1MUGFyYWdyYXBoRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c1AuaW5uZXJUZXh0ID0gJ9CY0LfQvNC10L3QuNGC0Ywg0LfQvdCw0YfQtdC90LjQtTogJztcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c1AuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyUGFyYWcnKTtcclxuXHJcbiAgICBsZXQgY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWwuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVySW5wdXRsYWJlbCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWwuc2V0QXR0cmlidXRlKCdmb3InLCAnY3VzdG9tU2xpZGVyTWluSW5wdXQnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01pbkxhYmVsLmlubmVyVGV4dCA9ICdNaW46ICc7XHJcbiAgICBcclxuICAgIGxldCBjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbDogSFRNTExhYmVsRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJJbnB1dGxhYmVsJyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXhMYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsICdjdXN0b21TbGlkZXJNYXhJbnB1dCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWF4TGFiZWwuaW5uZXJUZXh0ID0gJ01heDogJztcclxuXHJcbiAgICBsZXQgY3VzdG9tU2xpZGVySW5wdXRzTWluOiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01pbi5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJNaW5JbnB1dCcpO1xyXG4gICAgY3VzdG9tU2xpZGVySW5wdXRzTWluLmlkID0gJ2N1c3RvbVNsaWRlck1pbklucHV0JztcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01pbi5zZXRBdHRyaWJ1dGUoJ3R5cGUnLCAnbnVtYmVyJyk7XHJcblxyXG4gICAgbGV0IGN1c3RvbVNsaWRlcklucHV0c01heDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXguY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyTWF4SW5wdXQnKTtcclxuICAgIGN1c3RvbVNsaWRlcklucHV0c01heC5pZCA9ICdjdXN0b21TbGlkZXJNYXhJbnB1dCc7XHJcbiAgICBjdXN0b21TbGlkZXJJbnB1dHNNYXguc2V0QXR0cmlidXRlKCd0eXBlJywgJ251bWJlcicpO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JWYWx1ZXNDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclZhbHVlc1A6IEhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzUC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJQYXJhZycpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzUC5pbm5lclRleHQgPSAn0JLQutC70Y7Rh9C40YLRjCDQt9C90LDRh9C10L3QuNGPINC/0L7QtCDQv9C+0LvQt9GD0L3QutCw0LzQuDogJztcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yVmFsdWVzTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzTGFiZWwuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyVG9nZ2xlJyk7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclZhbHVlc0lucHV0OiBIVE1MSW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgIHRvZ2dsZUZvclZhbHVlc0lucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzSW5wdXQuY2xhc3NMaXN0LmFkZCgnc2hvd1ZhbHVlVG9nZ2xlJyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNJbnB1dC5pZCA9ICdzaG93VmFsdWVUb2dnbGUnO1xyXG5cclxuICAgIGxldCB0b2dnbGVGb3JWYWx1ZXNTcGFuOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICB0b2dnbGVGb3JWYWx1ZXNTcGFuLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVRvZ2dsZVNsaWRlckJvcmRlcicpO1xyXG4gICAgXHJcbiAgICBsZXQgdG9nZ2xlRm9yUGxhbmVDb250YWluZXI6IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclBsYW5lUDogSFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZVAuY2xhc3NMaXN0LmFkZCgnY3VzdG9tU2xpZGVyUGFyYWcnKTtcclxuICAgIHRvZ2dsZUZvclBsYW5lUC5pbm5lclRleHQgPSAn0JjQt9C80LXQvdC40YLRjCDQv9C70L7RgdC60L7RgdGC0Yw6ICc7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclBsYW5lTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xyXG4gICAgdG9nZ2xlRm9yUGxhbmVMYWJlbC5jbGFzc0xpc3QuYWRkKCdjdXN0b21TbGlkZXJUb2dnbGUnKTtcclxuXHJcbiAgICBsZXQgdG9nZ2xlRm9yUGxhbmVJbnB1dDogSFRNTElucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZUlucHV0LnNldEF0dHJpYnV0ZSgndHlwZScsICdjaGVja2JveCcpO1xyXG4gICAgdG9nZ2xlRm9yUGxhbmVJbnB1dC5jbGFzc0xpc3QuYWRkKCdwbGFuZVRvZ2dsZScpO1xyXG4gICAgdG9nZ2xlRm9yUGxhbmVJbnB1dC5pZCA9ICdwbGFuZVRvZ2dsZSc7XHJcblxyXG4gICAgbGV0IHRvZ2dsZUZvclBsYW5lU3BhbjogSFRNTFNwYW5FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgdG9nZ2xlRm9yUGxhbmVTcGFuLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbVRvZ2dsZVNsaWRlckJvcmRlcicpO1xyXG5cclxuXHJcbiAgICBsZXQgbWFpblNsaWRlckNvbnRhaW5lcjogSFRNTERpdkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlck1lbnVDb250YWluZXInKTtcclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuYXBwZW5kKHNsaWRlclZhbHVlUCk7XHJcbiAgICBzbGlkZXJWYWx1ZVAuYXBwZW5kKG1pblNsaWRlclZhbHVlT3V0cHV0KTtcclxuICAgIHNsaWRlclZhbHVlUC5hcHBlbmQobWF4U2xpZGVyVmFsdWVPdXRwdXQpO1xyXG4gICAgbWFpblNsaWRlckNvbnRhaW5lci5hcHBlbmQoc2xpZGVyVG9nZ2xlUCk7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZChzbGlkZXJUb2dnbGVMYWJlbCk7XHJcbiAgICBzbGlkZXJUb2dnbGVMYWJlbC5hcHBlbmQobWF4U2xpZGVySGFuZGVsVG9nZ2xlLCBjdXN0b21TbGlkZXJCb3JkZXIpO1xyXG5cclxuICAgIGN1c3RvbVNsaWRlcklucHV0cy5hcHBlbmQoY3VzdG9tU2xpZGVySW5wdXRzUCwgY3VzdG9tU2xpZGVySW5wdXRzTWluTGFiZWwsIGN1c3RvbVNsaWRlcklucHV0c01pbiwgY3VzdG9tU2xpZGVySW5wdXRzTWF4TGFiZWwsIGN1c3RvbVNsaWRlcklucHV0c01heCk7XHJcbiAgICBtYWluU2xpZGVyQ29udGFpbmVyLmFwcGVuZChjdXN0b21TbGlkZXJJbnB1dHMpO1xyXG5cclxuICAgIHRvZ2dsZUZvclZhbHVlc0NvbnRhaW5lci5hcHBlbmQodG9nZ2xlRm9yVmFsdWVzUCwgdG9nZ2xlRm9yVmFsdWVzTGFiZWwpO1xyXG4gICAgdG9nZ2xlRm9yVmFsdWVzTGFiZWwuYXBwZW5kKHRvZ2dsZUZvclZhbHVlc0lucHV0LCB0b2dnbGVGb3JWYWx1ZXNTcGFuKTtcclxuICAgIG1haW5TbGlkZXJDb250YWluZXIuYXBwZW5kKHRvZ2dsZUZvclZhbHVlc0NvbnRhaW5lcik7XHJcblxyXG4gICAgdG9nZ2xlRm9yUGxhbmVDb250YWluZXIuYXBwZW5kKHRvZ2dsZUZvclBsYW5lUCwgdG9nZ2xlRm9yUGxhbmVMYWJlbCk7XHJcbiAgICB0b2dnbGVGb3JQbGFuZUxhYmVsLmFwcGVuZCh0b2dnbGVGb3JQbGFuZUlucHV0LCB0b2dnbGVGb3JQbGFuZVNwYW4pO1xyXG4gICAgbWFpblNsaWRlckNvbnRhaW5lci5hcHBlbmQodG9nZ2xlRm9yUGxhbmVDb250YWluZXIpO1xyXG5cclxuICAgIHRoaXMuY3VzdG9tU2xpZGVyTWVudUNvbnRhaW5lciA9IG1haW5TbGlkZXJDb250YWluZXI7XHJcbiAgICB0aGlzLmhhbmRlbFRvZ2dsZSA9IG1heFNsaWRlckhhbmRlbFRvZ2dsZTtcclxuICAgIHRoaXMuaGFuZGVsTGFiZWxUb2dnbGUgPSB0b2dnbGVGb3JWYWx1ZXNJbnB1dDtcclxuICAgIHRoaXMucGxhbmVUb2dnbGUgPSB0b2dnbGVGb3JQbGFuZUlucHV0O1xyXG4gICAgdGhpcy5taW5JbnB1dCA9IGN1c3RvbVNsaWRlcklucHV0c01pbjtcclxuICAgIHRoaXMubWF4SW5wdXQgPSBjdXN0b21TbGlkZXJJbnB1dHNNYXg7XHJcbiAgfTtcclxuXHJcbiAgZ2V0RWxlbWVudHMoKTogb2JqZWN0IHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIG1lbnU6IHRoaXMuY3VzdG9tU2xpZGVyTWVudUNvbnRhaW5lcixcclxuICAgICAgaGFuZGVsVG9nZ2xlOiB0aGlzLmhhbmRlbFRvZ2dsZSxcclxuICAgICAgaGFuZGVsTGFiZWxUb2dnbGU6IHRoaXMuaGFuZGVsTGFiZWxUb2dnbGUsXHJcbiAgICAgIHBsYW5lVG9nZ2xlOiB0aGlzLnBsYW5lVG9nZ2xlLFxyXG4gICAgICBtaW5JbnB1dDogdGhpcy5taW5JbnB1dCxcclxuICAgICAgbWF4SW5wdXQ6IHRoaXMubWF4SW5wdXRcclxuICAgIH07XHJcbiAgfTtcclxufTsiLCJpbnRlcmZhY2UgSGFuZGVscyB7XHJcbiAgW2tleTogc3RyaW5nXTogSFRNTExhYmVsRWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQgfCBIVE1MRGl2RWxlbWVudDtcclxufVxyXG5pbnRlcmZhY2UgTXlEYXRhT2JqZWN0IHtcclxuICBba2V5OiBzdHJpbmddOiB7XHJcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcclxuICB9O1xyXG59XHJcblxyXG5pbnRlcmZhY2UgU3RhcnRIYW5kZWxzUG9zaXRpb25zRGF0YSB7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBTbGlkZXJNb3ZlbWVudCB7XHJcbiAgcHJpdmF0ZSBtaW46IEhUTUxTcGFuRWxlbWVudDtcclxuICBwcml2YXRlIG1heDogSFRNTFNwYW5FbGVtZW50O1xyXG4gIHByaXZhdGUgbWluTGFiZWw6IEhUTUxMYWJlbEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBtYXhMYWJlbDogSFRNTExhYmVsRWxlbWVudDtcclxuICBwcml2YXRlIHNsaWRlclJhbmdlOiBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIGhhbmRlbHNUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBwbGFuZVRvZ2dsZTogSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIGludGVydmFsOiBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIHN0ZXA6IG51bWJlciB8IHN0cmluZyB8IGJvb2xlYW47XHJcbiAgcHJpdmF0ZSBzdGVwQW1vdW50OiBudW1iZXI7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCBoYW5kZWxzOiBIYW5kZWxzKSB7XHJcbiAgICB0aGlzLm1pbiA9IGhhbmRlbHMubWluO1xyXG4gICAgdGhpcy5tYXggPSBoYW5kZWxzLm1heDtcclxuICAgIHRoaXMubWluTGFiZWwgPSBoYW5kZWxzLm1pbkxhYmVsO1xyXG4gICAgdGhpcy5tYXhMYWJlbD0gaGFuZGVscy5tYXhMYWJlbDtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UgPSBoYW5kZWxzLnNsaWRlclJhbmdlO1xyXG4gICAgdGhpcy5oYW5kZWxzVG9nZ2xlID0gaGFuZGVscy5oYW5kZWxzVG9nZ2xlO1xyXG4gICAgdGhpcy5wbGFuZVRvZ2dsZSA9IGhhbmRlbHMucGxhbmVUb2dnbGU7XHJcbiAgICB0aGlzLmludGVydmFsID0gaGFuZGVscy5pbnRlcnZhbDtcclxuICAgIHRoaXMuc3RlcCA9IGhhbmRlbHMuc3RlcDtcclxuICB9XHJcblxyXG4gIG15RGF0YTogTXlEYXRhT2JqZWN0ID0ge1xyXG4gICAgJ21pbic6IHt9LFxyXG4gICAgJ21heCc6IHt9XHJcbiAgfVxyXG5cclxuICBzdGFydEhhbmRsZXJzUG9zaXRpb25zKHBvc2l0aW9uVmFsdWVzOiBTdGFydEhhbmRlbHNQb3NpdGlvbnNEYXRhICkge1xyXG4gICAgbGV0IG1pbjogc3RyaW5nID0gKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpIC8gK3Bvc2l0aW9uVmFsdWVzLnBvc2l0aW9ucykgKiAoK3Bvc2l0aW9uVmFsdWVzWydtaW4nXSAtICtwb3NpdGlvblZhbHVlc1snbWluaW11bSddKSArICcnO1xyXG4gICAgbGV0IG1heDogc3RyaW5nID0gKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpIC8gK3Bvc2l0aW9uVmFsdWVzLnBvc2l0aW9ucykgKiAoK3Bvc2l0aW9uVmFsdWVzWydtYXgnXSAtICtwb3NpdGlvblZhbHVlc1snbWluaW11bSddKSArICcnO1xyXG4gICAgXHJcbiAgICB0aGlzLm15RGF0YS5taW4ubWluID0gbWluO1xyXG4gICAgdGhpcy5teURhdGEubWF4Lm1heCA9IG1heDtcclxuICAgIFxyXG4gICAgdGhpcy5taW4uc3R5bGUubGVmdCA9IG1pbiArICdweCc7XHJcbiAgICB0aGlzLm1heC5zdHlsZS5sZWZ0ID0gbWF4ICsgJ3B4JztcclxuICAgIFxyXG4gICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5sZWZ0ID0gK21pbiArIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICB0aGlzLmludGVydmFsLnN0eWxlLnJpZ2h0ID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSArbWF4KSAtIHRoaXMubWluLm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcblxyXG4gIH1cclxuXHJcbiAgbWluSGFuZGVsTGlzdGVuZXIoIGV2ZW50ICkge1xyXG4gICAgbGV0IG1pbiA9IHRoaXMubWluO1xyXG4gICAgbGV0IG1heCA9IHRoaXMubWF4O1xyXG4gICAgbGV0IG1pbkxhYmVsID0gdGhpcy5taW5MYWJlbDtcclxuICAgIGxldCBzbGlkZXJSYW5nZSA9IHRoaXMuc2xpZGVyUmFuZ2U7XHJcbiAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICBsZXQgc2hpZnQ6IG51bWJlcjtcclxuICAgIGxldCBkb3VibGVIYW5kZWxzID0gdGhpcy5oYW5kZWxzVG9nZ2xlLmNoZWNrZWQ7XHJcbiAgICBsZXQgdmVydGljYWwgPSB0aGlzLnBsYW5lVG9nZ2xlLmNoZWNrZWQ7XHJcbiAgICBsZXQgaW50ZXJ2YWwgPSB0aGlzLmludGVydmFsO1xyXG4gICAgbGV0IHN0ZXA7XHJcbiAgICBcclxuICAgIGlmICh0aGlzLnN0ZXAgIT09IGZhbHNlKSB7XHJcbiAgICAgIHN0ZXAgPSAoc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSBtaW4ub2Zmc2V0V2lkdGgpIC8gdGhpcy5zdGVwQW1vdW50ICogK3RoaXMuc3RlcDtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgc2hpZnQgPSBldmVudC5jbGllbnRZIC0gbWluLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIG1pbi5vZmZzZXRXaWR0aDtcclxuICAgIH0gZWxzZSB7ICBcclxuICAgICAgc2hpZnQgPSBldmVudC5jbGllbnRYIC0gbWluLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XHJcbiAgICAgXHJcbiAgICAgIGxldCBuZXdMZWZ0OiBudW1iZXI7XHJcbiAgICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICAgIG5ld0xlZnQgPSBzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIChldmVudC5jbGllbnRZIC0gc2hpZnQgLSBzbGlkZXJSYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3ApO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIG5ld0xlZnQgPSBldmVudC5jbGllbnRYIC0gc2hpZnQgLSBzbGlkZXJSYW5nZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5sZWZ0O1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgbGV0IHJpZ2h0RWRnZSA9IHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gbWluLm9mZnNldFdpZHRoO1xyXG5cclxuICAgICAgaWYgKHRoYXQuc3RlcCAhPT0gZmFsc2UpIHtcclxuICAgICAgICBpZiAobmV3TGVmdCA+PSArdGhhdC5teURhdGEubWluLm1pbiArIHN0ZXAgfHwgbmV3TGVmdCA8PSArdGhhdC5teURhdGEubWluLm1pbiAtIHN0ZXApIHtcclxuICAgICAgICAgIG5ld0xlZnQgPj0gK3RoYXQubXlEYXRhLm1pbi5taW4gKyBzdGVwID8gbmV3TGVmdCA9ICt0aGF0Lm15RGF0YS5taW4ubWluICsgc3RlcCA6IGZhbHNlO1xyXG4gICAgICAgICAgbmV3TGVmdCA8PSArdGhhdC5teURhdGEubWluLm1pbiAtIHN0ZXAgPyBuZXdMZWZ0ID0gK3RoYXQubXlEYXRhLm1pbi5taW4gLSBzdGVwIDogZmFsc2U7XHJcbiAgICAgICAgICByZW5ld2FsT2ZQb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZW5ld2FsT2ZQb3NpdGlvbigpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgZnVuY3Rpb24gcmVuZXdhbE9mUG9zaXRpb24oKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmIChuZXdMZWZ0IDwgMCkge1xyXG4gICAgICAgICAgbmV3TGVmdCA9IDA7XHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBpZiAoZG91YmxlSGFuZGVscykgeyBcclxuICAgICAgICAgIGlmIChuZXdMZWZ0ID49ICt0aGF0Lm15RGF0YS5tYXhbJ21heCddIC0gbWF4Lm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgICAgIG5ld0xlZnQgPSArdGhhdC5teURhdGEubWF4WydtYXgnXSAtIG1heC5vZmZzZXRXaWR0aFxyXG4gICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgaWYgKG5ld0xlZnQgPiByaWdodEVkZ2UpIHtcclxuICAgICAgICAgICAgbmV3TGVmdCA9IHJpZ2h0RWRnZTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgbWluLnN0eWxlLmxlZnQgPSBuZXdMZWZ0ICsgJ3B4JztcclxuICAgICAgICBpbnRlcnZhbC5zdHlsZS5sZWZ0ID0gbmV3TGVmdCArIG1pbi5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChuZXdMZWZ0ICE9PSB1bmRlZmluZWQgfHwgcmlnaHRFZGdlICE9PSB1bmRlZmluZWQpIHtcclxuICAgICAgICAgIHRoYXQubXlEYXRhWydtaW4nXSA9IHsnbWluJzogYCR7bmV3TGVmdH1gLCAnc2xpZGVyV2lkdGgnOiBgJHtzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG1pbi5vZmZzZXRXaWR0aH1gfVxyXG4gICAgICAgIH07XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWluTGFiZWwuc3R5bGUubGVmdCA9ICgobWluLm9mZnNldFdpZHRoIC0gbWluTGFiZWwub2Zmc2V0V2lkdGgpIC0gMSkgLyAyICsgJ3B4JztcclxuICAgICAgfVxyXG4gICAgICBcclxuICAgIH1cclxuXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlVXAoKSB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtYXhIYW5kZWxMaXN0ZW5lciggZXZlbnQgKSB7XHJcbiAgICBsZXQgbWF4ID0gdGhpcy5tYXg7XHJcbiAgICBsZXQgbWluID0gdGhpcy5taW47XHJcbiAgICBsZXQgc2xpZGVyUmFuZ2UgPSB0aGlzLnNsaWRlclJhbmdlO1xyXG4gICAgbGV0IHNoaWZ0OiBudW1iZXI7XHJcbiAgICBsZXQgbWF4TGFiZWwgPSB0aGlzLm1heExhYmVsO1xyXG4gICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgbGV0IGRvdWJsZUhhbmRlbHMgPSB0aGlzLmhhbmRlbHNUb2dnbGUuY2hlY2tlZDtcclxuICAgIGxldCB2ZXJ0aWNhbCA9IHRoaXMucGxhbmVUb2dnbGUuY2hlY2tlZDtcclxuICAgIGxldCBpbnRlcnZhbCA9IHRoaXMuaW50ZXJ2YWw7XHJcbiAgICBsZXQgc3RlcDtcclxuICAgIFxyXG4gICAgaWYgKHRoaXMuc3RlcCAhPT0gZmFsc2UpIHtcclxuICAgICAgc3RlcCA9IChzbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIG1pbi5vZmZzZXRXaWR0aCkgLyB0aGlzLnN0ZXBBbW91bnQgKiArdGhpcy5zdGVwO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh2ZXJ0aWNhbCkge1xyXG4gICAgICBzaGlmdCA9IGV2ZW50LmNsaWVudFkgLSBtYXguZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gbWF4Lm9mZnNldFdpZHRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgc2hpZnQgPSBldmVudC5jbGllbnRYIC0gbWF4LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIG9uTW91c2VNb3ZlKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlTW92ZSggZXZlbnQgKSB7XHJcbiAgICAgIGxldCBuZXdMZWZ0OiBudW1iZXI7XHJcbiAgICAgIFxyXG4gICAgICBpZiAodmVydGljYWwpIHtcclxuICAgICAgICBuZXdMZWZ0ID0gc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSAoZXZlbnQuY2xpZW50WSAtIHNoaWZ0IC0gc2xpZGVyUmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBuZXdMZWZ0ID0gZXZlbnQuY2xpZW50WCAtIHNoaWZ0IC0gc2xpZGVyUmFuZ2UuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkubGVmdDtcclxuICAgICAgfVxyXG5cclxuICAgICAgbGV0IHJpZ2h0RWRnZSA9IHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gbWF4Lm9mZnNldFdpZHRoO1xyXG5cclxuICAgICAgaWYgKHRoYXQuc3RlcCAhPT0gZmFsc2UpIHtcclxuICAgICAgICBpZiAobmV3TGVmdCA+PSArdGhhdC5teURhdGEubWF4Lm1heCArIHN0ZXAgfHwgbmV3TGVmdCA8PSArdGhhdC5teURhdGEubWF4Lm1heCAtIHN0ZXApIHtcclxuICAgICAgICAgIG5ld0xlZnQgPj0gK3RoYXQubXlEYXRhLm1heC5tYXggKyBzdGVwID8gbmV3TGVmdCA9ICt0aGF0Lm15RGF0YS5tYXgubWF4ICsgc3RlcCA6IGZhbHNlO1xyXG4gICAgICAgICAgbmV3TGVmdCA8PSArdGhhdC5teURhdGEubWF4Lm1heCAtIHN0ZXAgPyBuZXdMZWZ0ID0gK3RoYXQubXlEYXRhLm1heC5tYXggLSBzdGVwIDogZmFsc2U7XHJcbiAgICAgICAgICByZW5ld2FsT2ZQb3NpdGlvbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZW5ld2FsT2ZQb3NpdGlvbigpO1xyXG4gICAgICB9O1xyXG5cclxuICAgICAgZnVuY3Rpb24gcmVuZXdhbE9mUG9zaXRpb24oKTogdm9pZCB7XHJcblxyXG4gICAgICAgIGlmIChuZXdMZWZ0IDwgMCkge1xyXG4gICAgICAgICAgbmV3TGVmdCA9IDA7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgaWYgKG5ld0xlZnQgPiByaWdodEVkZ2UpIHtcclxuICAgICAgICAgIG5ld0xlZnQgPSByaWdodEVkZ2U7XHJcbiAgICAgICAgfTtcclxuICBcclxuICAgICAgICBpZiAobmV3TGVmdCA8PSArdGhhdC5teURhdGEubWluWydtaW4nXSArIG1pbi5vZmZzZXRXaWR0aCkge1xyXG4gICAgICAgICAgbmV3TGVmdCA9ICt0aGF0Lm15RGF0YS5taW5bJ21pbiddICsgbWluLm9mZnNldFdpZHRoXHJcbiAgICAgICAgfTtcclxuICAgICAgICBcclxuICAgICAgICBtYXguc3R5bGUubGVmdCA9IG5ld0xlZnQgKyAncHgnO1xyXG4gICAgICAgIGludGVydmFsLnN0eWxlLnJpZ2h0ID0gKHNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gbmV3TGVmdCkgLSBtYXgub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICBcclxuICAgICAgICBpZiAobmV3TGVmdCAhPT0gdW5kZWZpbmVkIHx8IHJpZ2h0RWRnZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICB0aGF0Lm15RGF0YVsnbWF4J10gPSB7J21heCc6IGAke25ld0xlZnR9YCwgJ3NsaWRlcldpZHRoJzogYCR7c2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSBtYXgub2Zmc2V0V2lkdGh9YH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIFxyXG4gICAgICAgIG1heExhYmVsLnN0eWxlLmxlZnQgPSAoKG1heC5vZmZzZXRXaWR0aCAtIG1heExhYmVsLm9mZnNldFdpZHRoKSAtIDEpIC8gMiArICdweCc7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gICAgXHJcbiAgICBmdW5jdGlvbiBvbk1vdXNlVXAoKSB7XHJcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xyXG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlTW92ZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGFuZ2VQbGFuZSggdG9nZ2xlOkhUTUxJbnB1dEVsZW1lbnQsIGJvZHk6IEhUTUxEaXZFbGVtZW50LCBtaW5WYWx1ZTogSFRNTFBhcmFncmFwaEVsZW1lbnQsIG1heFZhbHVlOiBIVE1MUGFyYWdyYXBoRWxlbWVudCk6IHZvaWQge1xyXG4gICAgaWYgKHRvZ2dsZS5jaGVja2VkKSB7XHJcbiAgICAgIGJvZHkuc3R5bGUuaGVpZ2h0ID0gYm9keS5vZmZzZXRXaWR0aCArICdweCc7XHJcbiAgICAgIHRoaXMuc2xpZGVyUmFuZ2Uuc3R5bGUudHJhbnNmb3JtID0gJ3JvdGF0ZSgtOTBkZWcpJztcclxuICAgICAgdGhpcy5zbGlkZXJSYW5nZS5zdHlsZS50b3AgPSBib2R5Lm9mZnNldFdpZHRoIC8gMiArICdweCc7XHJcbiAgICAgIHRoaXMubWluTGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnbWluU2xpZGVySGFuZGVsTGFiZWwnKTtcclxuICAgICAgdGhpcy5tYXhMYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCdtYXhTbGlkZXJIYW5kZWxMYWJlbCcpO1xyXG4gICAgICB0aGlzLm1pbkxhYmVsLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlckhhbmRlbExhYmVsVmVydGljYWwnKTtcclxuICAgICAgdGhpcy5tYXhMYWJlbC5jbGFzc0xpc3QuYWRkKCdtYXhTbGlkZXJIYW5kZWxMYWJlbFZlcnRpY2FsJyk7XHJcbiAgICAgIG1pblZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ21pblNsaWRlclBvaW50Jyk7XHJcbiAgICAgIG1heFZhbHVlLmNsYXNzTGlzdC5yZW1vdmUoJ21heFNsaWRlclBvaW50Jyk7XHJcbiAgICAgIG1pblZhbHVlLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlclBvaW50VmVydGljYWwnKTtcclxuICAgICAgbWF4VmFsdWUuY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVyUG9pbnRWZXJ0aWNhbCcpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgYm9keS5zdHlsZS5oZWlnaHQgPSAnJztcclxuICAgICAgdGhpcy5zbGlkZXJSYW5nZS5zdHlsZS50cmFuc2Zvcm0gPSAncm90YXRlKDBkZWcpJztcclxuICAgICAgdGhpcy5zbGlkZXJSYW5nZS5zdHlsZS50b3AgPSAnJztcclxuICAgICAgdGhpcy5taW5MYWJlbC5jbGFzc0xpc3QucmVtb3ZlKCdtaW5TbGlkZXJIYW5kZWxMYWJlbFZlcnRpY2FsJyk7XHJcbiAgICAgIHRoaXMubWF4TGFiZWwuY2xhc3NMaXN0LnJlbW92ZSgnbWF4U2xpZGVySGFuZGVsTGFiZWxWZXJ0aWNhbCcpO1xyXG4gICAgICB0aGlzLm1pbkxhYmVsLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlckhhbmRlbExhYmVsJyk7XHJcbiAgICAgIHRoaXMubWF4TGFiZWwuY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVySGFuZGVsTGFiZWwnKTtcclxuICAgICAgbWluVmFsdWUuY2xhc3NMaXN0LnJlbW92ZSgnbWluU2xpZGVyUG9pbnRWZXJ0aWNhbCcpO1xyXG4gICAgICBtYXhWYWx1ZS5jbGFzc0xpc3QucmVtb3ZlKCdtYXhTbGlkZXJQb2ludFZlcnRpY2FsJyk7XHJcbiAgICAgIG1pblZhbHVlLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlclBvaW50Jyk7XHJcbiAgICAgIG1heFZhbHVlLmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlclBvaW50Jyk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHNlbGVjdGlvbk9mUHJlcGFyZWRWYWx1ZSh0YXJnZXQ6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgaWYgKHRhcmdldCA9PT0gJ21pbicpIHtcclxuICAgICAgdGhpcy5teURhdGFbJ21pbiddID0geydtaW4nOiAnMCcsICdzbGlkZXJXaWR0aCc6YCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWB9XHJcbiAgICAgIHRoaXMubWluLnN0eWxlLmxlZnQgPSAnMHB4J1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLmxlZnQgPSAwICsgdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGlmICh0aGlzLmhhbmRlbHNUb2dnbGUuY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICAgIHRoaXMubXlEYXRhWydtYXgnXSA9IHsnbWF4JzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWAsICdzbGlkZXJXaWR0aCc6YCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWB9XHJcbiAgICAgICAgdGhpcy5tYXguc3R5bGUubGVmdCA9IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCArICdweCc7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5yaWdodCA9ICh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCkgKyB0aGlzLm1pbi5vZmZzZXRXaWR0aCAvIDIgKyAncHgnO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMubXlEYXRhWydtaW4nXSA9IHsnbWluJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWAsICdzbGlkZXJXaWR0aCc6YCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRofWB9XHJcbiAgICAgICAgdGhpcy5taW4uc3R5bGUubGVmdCA9IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCArICdweCc7XHJcbiAgICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5sZWZ0ID0gKHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCkgKyB0aGlzLm1pbi5vZmZzZXRXaWR0aCAvIDIgKydweCc7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcblxyXG4gIHNpZGVNZW51SW5wdXRzVmFsdWVzVmFsaWRhdGlvbkNoZWNrZXIodGFyZ2V0OiBzdHJpbmcsIHZhbHVlOiBudW1iZXIsIHBvc2l0aW9uczogbnVtYmVyLCBtaW5pbXVtOiBudW1iZXIpOiB2b2lkIHtcclxuICAgIGNvbnNvbGUubG9nKHBvc2l0aW9ucylcclxuICAgIGlmICh0YXJnZXQgPT09ICdtaW4nICYmIHRoaXMuaGFuZGVsc1RvZ2dsZS5jaGVja2VkKSB7XHJcbiAgICAgIGxldCBtaW46IHN0cmluZyA9ICgodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSAvIHBvc2l0aW9ucykgKiAodmFsdWUgLSBtaW5pbXVtKSArICcnO1xyXG4gICAgICBpZiAoK21pbiA+PSArdGhpcy5teURhdGEubWF4Lm1heCAtIHRoaXMubWluLm9mZnNldFdpZHRoKSB7XHJcbiAgICAgICAgbWluID0gK3RoaXMubXlEYXRhLm1heC5tYXggLSB0aGlzLm1pbi5vZmZzZXRXaWR0aCArICcnO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMubXlEYXRhWydtaW4nXSA9IHsnbWluJzogbWluLCAnc2xpZGVyV2lkdGgnOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGh9YH07XHJcbiAgICAgIHRoaXMubWluLnN0eWxlLmxlZnQgPSBtaW4gKyAncHgnO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLmxlZnQgPSBtaW4gKyB0aGlzLm1pbi5vZmZzZXRXaWR0aCAvIDIgKydweCc7XHJcbiAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gJ21pbicpIHtcclxuICAgICAgbGV0IG1pbjogc3RyaW5nID0gKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGgpIC8gcG9zaXRpb25zKSAqICh2YWx1ZSAtIG1pbmltdW0pICsgJyc7XHJcbiAgICAgIHRoaXMubXlEYXRhWydtaW4nXSA9IHsnbWluJzogbWluLCAnc2xpZGVyV2lkdGgnOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGh9YH07XHJcbiAgICAgIHRoaXMubWluLnN0eWxlLmxlZnQgPSBtaW4gKyAncHgnO1xyXG4gICAgICB0aGlzLmludGVydmFsLnN0eWxlLmxlZnQgPSBtaW4gKyB0aGlzLm1pbi5vZmZzZXRXaWR0aCAvIDIgKydweCc7XHJcbiAgICB9IGVsc2UgaWYgKHRhcmdldCA9PT0gJ21heCcpIHtcclxuICAgICAgbGV0IG1heDogc3RyaW5nID0gKCh0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXgub2Zmc2V0V2lkdGgpIC8gcG9zaXRpb25zKSAqICh2YWx1ZSAtIG1pbmltdW0pICsgJyc7XHJcbiAgICAgIGlmICgrbWF4IDw9ICt0aGlzLm15RGF0YS5taW4ubWluICsgdGhpcy5taW4ub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICBtYXggPSArdGhpcy5teURhdGEubWluLm1pbiArIHRoaXMubWF4Lm9mZnNldFdpZHRoICsgJyc7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy5teURhdGFbJ21heCddID0geydtYXgnOiBtYXgsICdzbGlkZXJXaWR0aCc6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1heC5vZmZzZXRXaWR0aH1gfTtcclxuICAgICAgdGhpcy5tYXguc3R5bGUubGVmdCA9IG1heCArICdweCc7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUucmlnaHQgPSAodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtICttYXgpIC0gdGhpcy5taW4ub2Zmc2V0V2lkdGggLyAyICsgJ3B4JztcclxuICAgIH1cclxuICB9O1xyXG59OyIsImV4cG9ydCBjbGFzcyBTbGlkZXJSYW5nZSB7XHJcbiAgZWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgbGV0IGVsZW06IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ3NsaWRlclJhbmdlJyk7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtO1xyXG4gIH1cclxuICBnZXRFbGVtZW50KCk6IEhUTUxEaXZFbGVtZW50e1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICB9XHJcbn0iLCJleHBvcnQgY2xhc3MgVmFsdWVSYW5nZSB7XHJcbiAgbWluVmFsdWU6IEhUTUxQYXJhZ3JhcGhFbGVtZW50O1xyXG4gIG1heFZhbHVlOiBIVE1MUGFyYWdyYXBoRWxlbWVudDtcclxuXHJcbiAgY29uc3RydWN0b3IgKHZhbHVlczoge1trZXk6IHN0cmluZ106IHN0cmluZ30pIHtcclxuICAgIGxldCBtaW46SFRNTFBhcmFncmFwaEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XHJcbiAgICBsZXQgbWF4OkhUTUxQYXJhZ3JhcGhFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xyXG4gICAgbWluLmlubmVyVGV4dCA9IHZhbHVlcy5taW47XHJcbiAgICBtYXguaW5uZXJUZXh0ID0gdmFsdWVzLm1heDtcclxuICAgIG1pbi5jbGFzc0xpc3QuYWRkKCdtaW5TbGlkZXJQb2ludCcpO1xyXG4gICAgbWF4LmNsYXNzTGlzdC5hZGQoJ21heFNsaWRlclBvaW50Jyk7XHJcbiAgICB0aGlzLm1pblZhbHVlID0gbWluO1xyXG4gICAgdGhpcy5tYXhWYWx1ZSA9IG1heDtcclxuICB9XHJcblxyXG4gIGdldEVsZW1lbnRzKCk6IG9iamVjdCB7XHJcbiAgICByZXR1cm4ge21pbjogdGhpcy5taW5WYWx1ZSwgbWF4OiB0aGlzLm1heFZhbHVlfVxyXG4gIH1cclxufSIsImltcG9ydCB7U2xpZGVyUmFuZ2V9IGZyb20gJy4vY29tcG9uZW50cy9zbGlkZXItcmFuZ2UudHMnO1xyXG5pbXBvcnQge0hhbmRlbHN9IGZyb20gJy4vY29tcG9uZW50cy9oYW5kZWxzLnRzJztcclxuaW1wb3J0IHtTbGlkZXJNb3ZlbWVudH0gZnJvbSAnLi9jb21wb25lbnRzL3NsaWRlci1tb3ZlbWVudC50cyc7XHJcbmltcG9ydCB7U2lkZU1lbnV9IGZyb20gJy4vY29tcG9uZW50cy9zaWRlLW1lbnUudHMnO1xyXG5pbXBvcnQge1ZhbHVlUmFuZ2V9IGZyb20gJy4vY29tcG9uZW50cy92YWx1ZVJhbmdlLnRzJztcclxuaW1wb3J0IHtIYW5kZWxzTGFiZWxzfSBmcm9tICcuL2NvbXBvbmVudHMvaGFuZGVscy1sYWJlbHMudHMnO1xyXG5pbXBvcnQge1NlbGVjdGVkUmFuZ2V9IGZyb20gJy4vY29tcG9uZW50cy9zZWxlY3RlZC1yYW5nZS50cyc7XHJcblxyXG5pbnRlcmZhY2UgU2V0dGluZ3Mge1xyXG4gIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IGJvb2xlYW5cclxufTtcclxuXHJcbmludGVyZmFjZSBTaWRlTWVudUVsZW1lbnRzIHtcclxuICBba2V5OiBzdHJpbmddOiBIVE1MRGl2RWxlbWVudCB8IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbn07XHJcblxyXG5pbnRlcmZhY2UgRGF0YU9mVmFsdWVSZWZyZXNoIHtcclxuICAnbWluJz86IHN0cmluZztcclxuICAnbWF4Jz86IHN0cmluZztcclxufTtcclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3IHtcclxuICBwcml2YXRlIHRoYXQ6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzO1xyXG4gIHByaXZhdGUgc2xpZGVyUmFuZ2U6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHByaXZhdGUgc2xpZGVyQ29udGFpbmVyOiBIVE1MRGl2RWxlbWVudDtcclxuICBwcml2YXRlIG1pbkhhbmRlbDogSFRNTFNwYW5FbGVtZW50O1xyXG4gIHByaXZhdGUgbWF4SGFuZGVsOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBzbGlkZXJNb3ZlbWVudDogT2JqZWN0O1xyXG4gIHByaXZhdGUgc2lkZU1lbnU6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHByaXZhdGUgc2lkZU1lbnVDb250YWluZXI6IFN0cmluZyB8IEJvb2xlYW47XHJcbiAgcHJpdmF0ZSBtaW5WYWx1ZTogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBtYXhWYWx1ZTogSFRNTFBhcmFncmFwaEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBtaW5MYWJlbDogSFRNTExhYmVsRWxlbWVudDtcclxuICBwcml2YXRlIG1heExhYmVsOiBIVE1MTGFiZWxFbGVtZW50O1xyXG4gIHByaXZhdGUgaGFuZGVsVG9nZ2xlOiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHByaXZhdGUgaGFuZGVsTGFiZWxUb2dnbGU6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBwbGFuZVRvZ2dsZTogSFRNTElucHV0RWxlbWVudDtcclxuICBwcml2YXRlIG1pbklucHV0OiBIVE1MSW5wdXRFbGVtZW50O1xyXG4gIHByaXZhdGUgbWF4SW5wdXQ6IEhUTUxJbnB1dEVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBpbnRlcnZhbDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgXHJcbiAgcHJpdmF0ZSBjb25zdHJ1Y3Rvcih0YXJnZXQ6IEhUTUxEaXZFbGVtZW50LCBzZXR0aW5nczogU2V0dGluZ3MpIHtcclxuICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcclxuICAgIHRoaXMudGhhdCA9IHRhcmdldDtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UgPSBuZXcgU2xpZGVyUmFuZ2UoKS5nZXRFbGVtZW50KCk7XHJcbiAgICB0aGlzLm1pbkhhbmRlbCA9IG5ldyBIYW5kZWxzKCkuZ2V0RWxlbWVudHMoKS5taW47XHJcbiAgICB0aGlzLm1heEhhbmRlbCA9IG5ldyBIYW5kZWxzKCkuZ2V0RWxlbWVudHMoKS5tYXg7XHJcbiAgICB0aGlzLm1pblZhbHVlID0gbmV3IFZhbHVlUmFuZ2UoeydtaW4nOiB0aGlzLnNldHRpbmdzWydtaW4nXSwgJ21heCc6IHRoaXMuc2V0dGluZ3NbJ21heCddfSkuZ2V0RWxlbWVudHMoKS5taW47XHJcbiAgICB0aGlzLm1heFZhbHVlID0gbmV3IFZhbHVlUmFuZ2UoeydtaW4nOiB0aGlzLnNldHRpbmdzWydtaW4nXSwgJ21heCc6IHRoaXMuc2V0dGluZ3NbJ21heCddfSkuZ2V0RWxlbWVudHMoKS5tYXg7XHJcbiAgICBpZiAoc2V0dGluZ3NbJ3NpZGUtbWVudSddID09PSB0cnVlKSB7XHJcbiAgICAgIGxldCBzaWRlTWVudUVsZW1lbnRzOiBTaWRlTWVudUVsZW1lbnRzID0gbmV3IFNpZGVNZW51KCkuZ2V0RWxlbWVudHMoKTtcclxuICAgICAgdGhpcy5zaWRlTWVudSA9IHNpZGVNZW51RWxlbWVudHMubWVudTtcclxuICAgICAgdGhpcy5oYW5kZWxUb2dnbGUgPSBzaWRlTWVudUVsZW1lbnRzLmhhbmRlbFRvZ2dsZTtcclxuICAgICAgdGhpcy5oYW5kZWxMYWJlbFRvZ2dsZSA9IHNpZGVNZW51RWxlbWVudHMuaGFuZGVsTGFiZWxUb2dnbGU7XHJcbiAgICAgIHRoaXMucGxhbmVUb2dnbGUgPSBzaWRlTWVudUVsZW1lbnRzLnBsYW5lVG9nZ2xlO1xyXG4gICAgICB0aGlzLm1pbklucHV0ID0gc2lkZU1lbnVFbGVtZW50cy5taW5JbnB1dDtcclxuICAgICAgdGhpcy5tYXhJbnB1dCA9IHNpZGVNZW51RWxlbWVudHMubWF4SW5wdXQ7XHJcbiAgICB9O1xyXG4gICAgdGhpcy5zaWRlTWVudUNvbnRhaW5lciA9IHNldHRpbmdzLnNpZGVNZW51Q29udGFpbmVyO1xyXG4gICAgdGhpcy5taW5MYWJlbCA9IG5ldyBIYW5kZWxzTGFiZWxzKCkuZ2V0RWxlbWVudHMoKS5taW47XHJcbiAgICB0aGlzLm1heExhYmVsID0gbmV3IEhhbmRlbHNMYWJlbHMoKS5nZXRFbGVtZW50cygpLm1heDtcclxuICAgIHRoaXMuaW50ZXJ2YWwgPSBuZXcgU2VsZWN0ZWRSYW5nZSgpLmdldEVsZW1lbnRzKCk7XHJcbiAgICB0aGlzLnNsaWRlck1vdmVtZW50ID0gbmV3IFNsaWRlck1vdmVtZW50KHsnbWluJzogdGhpcy5taW5IYW5kZWwsICdtYXgnOiB0aGlzLm1heEhhbmRlbCwnbWluTGFiZWwnOiB0aGlzLm1pbkxhYmVsLCAnbWF4TGFiZWwnOiB0aGlzLm1heExhYmVsICwnc2xpZGVyUmFuZ2UnOiB0aGlzLnNsaWRlclJhbmdlLCAncGxhbmVUb2dnbGUnOiB0aGlzLnBsYW5lVG9nZ2xlLCAnaGFuZGVsc1RvZ2dsZSc6IHRoaXMuaGFuZGVsVG9nZ2xlLCAnaW50ZXJ2YWwnOiB0aGlzLmludGVydmFsLCAnc3RlcCc6IHRoaXMuc2V0dGluZ3Muc3RlcH0pXHJcbiAgfVxyXG5cclxuICBkaXNwbGF5RWxlbWVudHMoKTogdm9pZCB7XHJcbiAgICBsZXQgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgdGhpcy5zbGlkZXJDb250YWluZXIgPSBjb250YWluZXI7XHJcbiAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgnc2xpZGVyQm9keScpO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZCh0aGlzLnNsaWRlclJhbmdlKTtcclxuICAgIHRoaXMudGhhdC5hcHBlbmQoY29udGFpbmVyKTtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMubWluSGFuZGVsKTtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMubWF4SGFuZGVsKTtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMubWluVmFsdWUpO1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZS5hcHBlbmQodGhpcy5tYXhWYWx1ZSk7XHJcbiAgICB0aGlzLmludGVydmFsLnN0eWxlLmhlaWdodCA9IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0SGVpZ2h0ICsgJ3B4JztcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UuYXBwZW5kKHRoaXMuaW50ZXJ2YWwpO1xyXG4gICAgdGhpcy5taW5IYW5kZWwuYXBwZW5kKHRoaXMubWluTGFiZWwpO1xyXG4gICAgdGhpcy5tYXhIYW5kZWwuYXBwZW5kKHRoaXMubWF4TGFiZWwpO1xyXG4gICAgXHJcbiAgICBpZiAodGhpcy5zZXR0aW5nc1snaGFuZGVsc0xhYmVsJ10gPT09IGZhbHNlKSB7XHJcbiAgICAgIHRoaXMubWluTGFiZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgdGhpcy5tYXhMYWJlbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5oYW5kZWxMYWJlbFRvZ2dsZS5jaGVja2VkID0gdHJ1ZTtcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuc2lkZU1lbnVDb250YWluZXIgIT09ICdmYWxzZScpIHtcclxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0aGlzLnNpZGVNZW51Q29udGFpbmVyKS5hcHBlbmQodGhpcy5zaWRlTWVudSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMudGhhdC5hcHBlbmQodGhpcy5zaWRlTWVudSlcclxuICAgIH07XHJcbiAgICBcclxuICAgIGlmICh0aGlzLnNldHRpbmdzW1wicmFuZ2VcIl0gPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5tYXhIYW5kZWwuc3R5bGUuZGlzcGxheSA9ICdibG9jaydcclxuICAgICAgdGhpcy5oYW5kZWxUb2dnbGUuY2hlY2tlZCA9IHRydWU7XHJcbiAgICAgIHRoaXMuaW50ZXJ2YWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICAgIH07XHJcblxyXG4gICAgaWYgKHRoaXMuc2V0dGluZ3NbJ3ZlcnRpY2FsJ10gPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5wbGFuZVRvZ2dsZS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgdGhpcy5zbGlkZXJNb3ZlbWVudC5jaGFuZ2VQbGFuZSh0aGlzLnBsYW5lVG9nZ2xlLCB0aGlzLnNsaWRlckNvbnRhaW5lciwgdGhpcy5taW5WYWx1ZSwgdGhpcy5tYXhWYWx1ZSk7XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHJlZnJlc2hDdXJyZW50VmFsdWVzKG5ld0RhdGE6IERhdGFPZlZhbHVlUmVmcmVzaCk6IHZvaWQge1xyXG4gICAgaWYgKCdtaW4nIGluIG5ld0RhdGEgJiYgJ21heCcgaW4gbmV3RGF0YSAmJiB0aGlzLnNldHRpbmdzWydyYW5nZSddID09PSB0cnVlICYmIHRoaXMuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgdGhpcy5zaWRlTWVudS5xdWVyeVNlbGVjdG9yKCcjbWluU2xpZGVyVmFsdWUnKS50ZXh0Q29udGVudCA9IG5ld0RhdGEubWluO1xyXG4gICAgICB0aGlzLnNpZGVNZW51LnF1ZXJ5U2VsZWN0b3IoJyNtYXhTbGlkZXJWYWx1ZScpLnRleHRDb250ZW50ID0gYCAtICR7bmV3RGF0YS5tYXh9YDtcclxuICAgICAgdGhpcy5zaWRlTWVudS5xdWVyeVNlbGVjdG9yKCcuY3VzdG9tU2xpZGVyTWluSW5wdXQnKS52YWx1ZSA9IG5ld0RhdGEubWluO1xyXG4gICAgICB0aGlzLnNpZGVNZW51LnF1ZXJ5U2VsZWN0b3IoJy5jdXN0b21TbGlkZXJNYXhJbnB1dCcpLnZhbHVlID0gbmV3RGF0YS5tYXg7XHJcbiAgICAgIHRoaXMubWluTGFiZWwudGV4dENvbnRlbnQgPSBuZXdEYXRhLm1pbjtcclxuICAgICAgdGhpcy5tYXhMYWJlbC50ZXh0Q29udGVudCA9IG5ld0RhdGEubWF4O1xyXG4gICAgfSBlbHNlIGlmICgnbWluJyBpbiBuZXdEYXRhKSB7XHJcbiAgICAgIGlmICh0aGlzLnNldHRpbmdzWydyYW5nZSddID09PSB0cnVlICYmIHRoaXMuaGFuZGVsVG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgICB0aGlzLnNpZGVNZW51LnF1ZXJ5U2VsZWN0b3IoJyNtaW5TbGlkZXJWYWx1ZScpLnRleHRDb250ZW50ID0gbmV3RGF0YS5taW47O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMuc2lkZU1lbnUucXVlcnlTZWxlY3RvcignI21pblNsaWRlclZhbHVlJykudGV4dENvbnRlbnQgPSBuZXdEYXRhLm1pbjs7XHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMuc2lkZU1lbnUucXVlcnlTZWxlY3RvcignLmN1c3RvbVNsaWRlck1pbklucHV0JykudmFsdWUgPSBuZXdEYXRhLm1pbjtcclxuICAgICAgdGhpcy5taW5MYWJlbC50ZXh0Q29udGVudCA9IG5ld0RhdGEubWluO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5zaWRlTWVudS5xdWVyeVNlbGVjdG9yKCcjbWF4U2xpZGVyVmFsdWUnKS50ZXh0Q29udGVudCA9IGAgLSAke25ld0RhdGEubWF4fWA7XHJcbiAgICAgIHRoaXMuc2lkZU1lbnUucXVlcnlTZWxlY3RvcignLmN1c3RvbVNsaWRlck1heElucHV0JykudmFsdWUgPSBuZXdEYXRhLm1heDtcclxuICAgICAgdGhpcy5tYXhMYWJlbC50ZXh0Q29udGVudCA9IG5ld0RhdGEubWF4O1xyXG4gICAgfTtcclxuICAgIG5ldyBIYW5kZWxzTGFiZWxzKCkuY2VudGVyaW5nUmVsYXRpdmVUb0hhbmRsZXModGhpcy5taW5IYW5kZWwsIHRoaXMubWF4SGFuZGVsLCB0aGlzLm1pbkxhYmVsLCB0aGlzLm1heExhYmVsKVxyXG4gIH07XHJcblxyXG4gIGNhbGxIYW5kZWxMYWJlbFRvZ2dsZUNoYW5nZXIodGFyZ2V0OiBWaWV3KTogdm9pZCB7XHJcbiAgICBuZXcgSGFuZGVsc0xhYmVscygpLmRpc3BsYXlDb250cm9sbGVyKHRhcmdldC5oYW5kZWxMYWJlbFRvZ2dsZSwgdGhpcy5taW5MYWJlbCwgdGhpcy5tYXhMYWJlbCk7XHJcbiAgICBpZiAodGFyZ2V0LmhhbmRlbExhYmVsVG9nZ2xlLmNoZWNrZWQgPT09IHRydWUpIHtcclxuICAgICAgbmV3IEhhbmRlbHNMYWJlbHMoKS5jZW50ZXJpbmdSZWxhdGl2ZVRvSGFuZGxlcyh0aGlzLm1pbkhhbmRlbCwgdGhpcy5tYXhIYW5kZWwsIHRoaXMubWluTGFiZWwsIHRoaXMubWF4TGFiZWwpXHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIGNhbGxNYXhIYW5kZWxUb2dnbGVDaGFuZ2VyKHRhcmdldDogVmlldyk6IHZvaWQge1xyXG4gICAgaWYgKHRhcmdldC5oYW5kZWxUb2dnbGUuY2hlY2tlZCA9PT0gZmFsc2UpIHtcclxuICAgICAgdGhpcy5zbGlkZXJNb3ZlbWVudC5teURhdGFbJ21heCddID0geydtYXgnOiBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGh9YCwgJ3NsaWRlcldpZHRoJzogYCR7dGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRofWB9XHJcbiAgICAgIHRoaXMubWF4SGFuZGVsLnN0eWxlLmxlZnQgPSBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGh9cHhgO1xyXG4gICAgICB0aGlzLnNpZGVNZW51LnF1ZXJ5U2VsZWN0b3IoJyNtYXhTbGlkZXJWYWx1ZScpLnRleHRDb250ZW50ID0gJyc7XHJcbiAgICAgIHRoaXMubWF4SW5wdXQuc2V0QXR0cmlidXRlKCdyZWFkb25seScsICcnKTtcclxuICAgICAgdGhpcy5tYXhJbnB1dC52YWx1ZSA9ICcnO1xyXG4gICAgICB0aGlzLm1heElucHV0LnN0eWxlLm9wYWNpdHkgPSAnMC4zJztcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgfTtcclxuICAgIFxyXG4gICAgbmV3IEhhbmRlbHMoKS5kaXNwbGF5Q29udHJvbGxlcih0YXJnZXQuaGFuZGVsVG9nZ2xlLCB0aGlzLm1heEhhbmRlbCk7XHJcblxyXG4gICAgaWYgKHRhcmdldC5oYW5kZWxUb2dnbGUuY2hlY2tlZCA9PT0gdHJ1ZSkge1xyXG4gICAgICB0aGlzLm1heElucHV0LnJlbW92ZUF0dHJpYnV0ZSgncmVhZG9ubHknKTtcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICAgICAgdGhpcy5pbnRlcnZhbC5zdHlsZS5yaWdodCA9IHRoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSAodGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRoIC8gMiApICsgJ3B4JztcclxuICAgICAgaWYgKHRoaXMuc2xpZGVyTW92ZW1lbnQubXlEYXRhLm1pblsnbWluJ10gPj0gdGhpcy5zbGlkZXJSYW5nZS5vZmZzZXRXaWR0aCAtIHRoaXMubWF4SGFuZGVsLm9mZnNldFdpZHRoIC0gdGhpcy5taW5IYW5kZWwub2Zmc2V0V2lkdGgpIHtcclxuICAgICAgICB0aGlzLnNsaWRlck1vdmVtZW50Lm15RGF0YVsnbWluJ10gPSB7J21pbic6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1heEhhbmRlbC5vZmZzZXRXaWR0aCAtIHRoaXMubWluSGFuZGVsLm9mZnNldFdpZHRofWAsICdzbGlkZXJXaWR0aCc6IGAke3RoaXMuc2xpZGVyUmFuZ2Uub2Zmc2V0V2lkdGggLSB0aGlzLm1heEhhbmRlbC5vZmZzZXRXaWR0aH1gfVxyXG4gICAgICAgIHRoaXMubWluSGFuZGVsLnN0eWxlLmxlZnQgPSBgJHt0aGlzLnNsaWRlclJhbmdlLm9mZnNldFdpZHRoIC0gdGhpcy5tYXhIYW5kZWwub2Zmc2V0V2lkdGggLSB0aGlzLm1pbkhhbmRlbC5vZmZzZXRXaWR0aH1weGA7XHJcbiAgICAgIH07XHJcbiAgICB9O1xyXG4gIH07XHJcblxyXG4gIHJlZnJlc2hNYXhTaWRlTWVudURhdGEoZGF0YTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICB0aGlzLnNpZGVNZW51LnF1ZXJ5U2VsZWN0b3IoJyNtYXhTbGlkZXJWYWx1ZScpLnRleHRDb250ZW50ID0gYCAtICR7ZGF0YX1gO1xyXG4gICAgdGhpcy5tYXhJbnB1dC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gICAgdGhpcy5tYXhJbnB1dC52YWx1ZSA9IGAke2RhdGF9YDtcclxuICB9O1xyXG5cclxuICBpbnB1dHNQb3NzaWJsZVJhbmdlKCBkYXRhOiBvYmplY3QsIG1pbjogSFRNTElucHV0RWxlbWVudCwgbWF4OiBIVE1MSW5wdXRFbGVtZW50KTogdm9pZCB7XHJcbiAgICBtaW4uc2V0QXR0cmlidXRlKCdtYXgnLCBkYXRhLm1heCk7XHJcbiAgICBtaW4uc2V0QXR0cmlidXRlKCdtaW4nLCBkYXRhLm1pbik7XHJcbiAgICBtYXguc2V0QXR0cmlidXRlKCdtYXgnLCBkYXRhLm1heCk7XHJcbiAgfTtcclxuICAgIFxyXG59O1xyXG4iLCJpbXBvcnQgeyBWaWV3IH0gZnJvbSAnLi9jb21wb25lbnRzL3ZpZXcvdmlldy50cyc7XHJcbmltcG9ydCB7IE1vZGVsIH0gZnJvbSAnLi9jb21wb25lbnRzL21vZGVsL01vZGVsLnRzJztcclxuaW1wb3J0IHsgRmFjYWRlIH0gZnJvbSAnLi9jb21wb25lbnRzL21vZGVsL2ZhY2FkZS50cyc7XHJcbmltcG9ydCB7IFByZXNlbnRlciB9IGZyb20gJy4vY29tcG9uZW50cy9wcmVzZW50ZXIvcHJlc2VudGVyLnRzJztcclxuXHJcbihmdW5jdGlvbiggJCApIHtcclxuICAkLmZuLnRlc3RTbGlkZXIgPSBmdW5jdGlvbiggb3B0aW9ucyApIHtcclxuXHJcbiAgICB2YXIgc2V0dGluZ3MgPSAkLmV4dGVuZCgge1xyXG4gICAgICAnbWluJzogJzAnLFxyXG4gICAgICAnbWF4JzogJzEwJyxcclxuICAgICAgJ3JhbmdlJzogZmFsc2UsXHJcbiAgICAgICdzaWRlLW1lbnUnOiBmYWxzZSxcclxuICAgICAgJ2hhbmRlbHNMYWJlbCc6IGZhbHNlLFxyXG4gICAgICAndmVydGljYWwnOiBmYWxzZSxcclxuICAgICAgJ3N0ZXAnOiBmYWxzZSxcclxuICAgICAgJ3NpZGVNZW51Q29udGFpbmVyJzogJ2ZhbHNlJ1xyXG4gICAgfSwgb3B0aW9ucyk7XHJcblxyXG4gICAgbGV0IHRoYXQ6IEhUTUxEaXZFbGVtZW50ID0gdGhpcztcclxuICAgIFxyXG4gICAgbGV0IG1vZGVsO1xyXG4gICAgaWYgKCdjdXJyZW50LW1pbicgaW4gc2V0dGluZ3MgJiYgJ2N1cnJlbnQtbWF4JyBpbiBzZXR0aW5ncykge1xyXG4gICAgICBtb2RlbCA9IG5ldyBNb2RlbCh7J21pbic6IHNldHRpbmdzWydtaW4nXSwgbWF4OiBzZXR0aW5nc1snbWF4J10sICdjdXJyZW50LW1pbic6IHNldHRpbmdzWydjdXJyZW50LW1pbiddLCAnY3VycmVudC1tYXgnOiBzZXR0aW5nc1snY3VycmVudC1tYXgnXX0pO1xyXG4gICAgfSBlbHNlIGlmICgnY3VycmVudC1taW4nIGluIHNldHRpbmdzKSB7XHJcbiAgICAgIG1vZGVsID0gbmV3IE1vZGVsKHsnbWluJzogc2V0dGluZ3NbJ21pbiddLCBtYXg6IHNldHRpbmdzWydtYXgnXSwgJ2N1cnJlbnQtbWluJzogc2V0dGluZ3NbJ2N1cnJlbnQtbWluJ10sICdjdXJyZW50LW1heCc6IHNldHRpbmdzWydtYXgnXX0pO1xyXG4gICAgfSBlbHNlIGlmICgnY3VycmVudC1tYXgnIGluIHNldHRpbmdzKSB7XHJcbiAgICAgIG1vZGVsID0gbmV3IE1vZGVsKHsnbWluJzogc2V0dGluZ3NbJ21pbiddLCBtYXg6IHNldHRpbmdzWydtYXgnXSwgJ2N1cnJlbnQtbWluJzogc2V0dGluZ3NbJ21pbiddLCAnY3VycmVudC1tYXgnOiBzZXR0aW5nc1snY3VycmVudC1tYXgnXX0pO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgbW9kZWwgPSBuZXcgTW9kZWwoeydtaW4nOiBzZXR0aW5nc1snbWluJ10sIG1heDogc2V0dGluZ3NbJ21heCddLCAnY3VycmVudC1taW4nOiBzZXR0aW5nc1snbWluJ10sICdjdXJyZW50LW1heCc6IHNldHRpbmdzWydtYXgnXX0pO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICBsZXQgdmlldyA9IG5ldyBWaWV3KHRoYXQsIHNldHRpbmdzKTtcclxuICAgIFxyXG4gICAgbGV0IGZhY2FkZSA9IG5ldyBGYWNhZGUobW9kZWwpXHJcbiAgICBcclxuICAgIGxldCBwcmVzZW50ZXIgPSBQcmVzZW50ZXIodmlldywgZmFjYWRlKTtcclxuICB9O1xyXG59KShqUXVlcnkpOyJdLCJzb3VyY2VSb290IjoiIn0=