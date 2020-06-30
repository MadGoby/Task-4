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

/***/ "./src/components/model/model.ts":
/*!***************************************!*\
  !*** ./src/components/model/model.ts ***!
  \***************************************/
/*! exports provided: Model */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Model\", function() { return Model; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Model = function Model(settings) {\n  _classCallCheck(this, Model);\n\n  _defineProperty(this, \"data\", void 0);\n\n  this.data = Object.assign({}, settings);\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9tb2RlbC9tb2RlbC50cz8yYTMyIl0sIm5hbWVzIjpbIk1vZGVsIiwic2V0dGluZ3MiLCJkYXRhIiwiT2JqZWN0IiwiYXNzaWduIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFNTyxJQUFNQSxLQUFiLEdBSUUsZUFBYUMsUUFBYixFQUFrQztBQUFBOztBQUFBOztBQUNoQyxPQUFLQyxJQUFMLEdBQVlDLE1BQU0sQ0FBQ0MsTUFBUCxDQUFjLEVBQWQsRUFBa0JILFFBQWxCLENBQVo7QUFDRCxDQU5IIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvbW9kZWwvbW9kZWwudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRGF0YSB9IGZyb20gJy4vZGF0YUludGVyZmFjZS50cydcclxuXHJcbmludGVyZmFjZSBTZXR0aW5ncyB7XHJcbiAgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgYm9vbGVhblxyXG59XHJcblxyXG5leHBvcnQgY2xhc3MgTW9kZWwge1xyXG5cclxuICBkYXRhOiBJRGF0YTtcclxuICBcclxuICBjb25zdHJ1Y3Rvciggc2V0dGluZ3M6IFNldHRpbmdzICkgeyBcclxuICAgIHRoaXMuZGF0YSA9IE9iamVjdC5hc3NpZ24oe30sIHNldHRpbmdzKTtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/model/model.ts\n");

/***/ }),

/***/ "./src/components/view/components/handels.ts":
/*!***************************************************!*\
  !*** ./src/components/view/components/handels.ts ***!
  \***************************************************/
/*! exports provided: Handels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Handels\", function() { return Handels; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar Handels = /*#__PURE__*/function () {\n  function Handels() {\n    _classCallCheck(this, Handels);\n\n    _defineProperty(this, \"minHandel\", void 0);\n\n    _defineProperty(this, \"maxHandel\", void 0);\n\n    var min = document.createElement('span');\n    var max = document.createElement('span');\n    min.classList.add('minSliderHandel');\n    max.classList.add('maxSliderHandel');\n    this.minHandel = min;\n    this.maxHandel = max;\n  }\n\n  _createClass(Handels, [{\n    key: \"getElements\",\n    value: function getElements() {\n      return {\n        min: this.minHandel,\n        max: this.maxHandel\n      };\n    }\n  }]);\n\n  return Handels;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NvbXBvbmVudHMvaGFuZGVscy50cz8wNTc2Il0sIm5hbWVzIjpbIkhhbmRlbHMiLCJtaW4iLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJtYXgiLCJjbGFzc0xpc3QiLCJhZGQiLCJtaW5IYW5kZWwiLCJtYXhIYW5kZWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxPQUFiO0FBR0UscUJBQWM7QUFBQTs7QUFBQTs7QUFBQTs7QUFDWixRQUFJQyxHQUFvQixHQUFHQyxRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBM0I7QUFDQSxRQUFJQyxHQUFvQixHQUFHRixRQUFRLENBQUNDLGFBQVQsQ0FBdUIsTUFBdkIsQ0FBM0I7QUFDQUYsT0FBRyxDQUFDSSxTQUFKLENBQWNDLEdBQWQsQ0FBa0IsaUJBQWxCO0FBQ0FGLE9BQUcsQ0FBQ0MsU0FBSixDQUFjQyxHQUFkLENBQWtCLGlCQUFsQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUJOLEdBQWpCO0FBQ0EsU0FBS08sU0FBTCxHQUFpQkosR0FBakI7QUFDRDs7QUFWSDtBQUFBO0FBQUEsa0NBV3dCO0FBQ3BCLGFBQU87QUFBQ0gsV0FBRyxFQUFFLEtBQUtNLFNBQVg7QUFBc0JILFdBQUcsRUFBRSxLQUFLSTtBQUFoQyxPQUFQO0FBQ0Q7QUFiSDs7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL2hhbmRlbHMudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgSGFuZGVscyB7XHJcbiAgbWluSGFuZGVsOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgbWF4SGFuZGVsOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBsZXQgbWluOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgIGxldCBtYXg6IEhUTUxTcGFuRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgbWluLmNsYXNzTGlzdC5hZGQoJ21pblNsaWRlckhhbmRlbCcpXHJcbiAgICBtYXguY2xhc3NMaXN0LmFkZCgnbWF4U2xpZGVySGFuZGVsJylcclxuICAgIHRoaXMubWluSGFuZGVsID0gbWluO1xyXG4gICAgdGhpcy5tYXhIYW5kZWwgPSBtYXg7XHJcbiAgfVxyXG4gIGdldEVsZW1lbnRzKCk6IG9iamVjdCB7XHJcbiAgICByZXR1cm4ge21pbjogdGhpcy5taW5IYW5kZWwsIG1heDogdGhpcy5tYXhIYW5kZWx9XHJcbiAgfVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/view/components/handels.ts\n");

/***/ }),

/***/ "./src/components/view/components/slider-range.ts":
/*!********************************************************!*\
  !*** ./src/components/view/components/slider-range.ts ***!
  \********************************************************/
/*! exports provided: SliderRange */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SliderRange\", function() { return SliderRange; });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar SliderRange = /*#__PURE__*/function () {\n  function SliderRange() {\n    _classCallCheck(this, SliderRange);\n\n    _defineProperty(this, \"element\", void 0);\n\n    var elem = document.createElement('div');\n    elem.classList.add('sliderRange');\n    this.element = elem;\n  }\n\n  _createClass(SliderRange, [{\n    key: \"getElement\",\n    value: function getElement() {\n      return this.element;\n    }\n  }]);\n\n  return SliderRange;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L2NvbXBvbmVudHMvc2xpZGVyLXJhbmdlLnRzPzE2NmUiXSwibmFtZXMiOlsiU2xpZGVyUmFuZ2UiLCJlbGVtIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiZWxlbWVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFPLElBQU1BLFdBQWI7QUFFRSx5QkFBZTtBQUFBOztBQUFBOztBQUNiLFFBQUlDLElBQW9CLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUEzQjtBQUNBRixRQUFJLENBQUNHLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixhQUFuQjtBQUNBLFNBQUtDLE9BQUwsR0FBZUwsSUFBZjtBQUNEOztBQU5IO0FBQUE7QUFBQSxpQ0FPOEI7QUFDMUIsYUFBTyxLQUFLSyxPQUFaO0FBQ0Q7QUFUSDs7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvdmlldy9jb21wb25lbnRzL3NsaWRlci1yYW5nZS50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBTbGlkZXJSYW5nZSB7XHJcbiAgZWxlbWVudDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgY29uc3RydWN0b3IgKCkge1xyXG4gICAgbGV0IGVsZW06IEhUTUxEaXZFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBlbGVtLmNsYXNzTGlzdC5hZGQoJ3NsaWRlclJhbmdlJyk7XHJcbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtO1xyXG4gIH1cclxuICBnZXRFbGVtZW50KCk6IEhUTUxEaXZFbGVtZW50e1xyXG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcclxuICB9XHJcbn0iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/view/components/slider-range.ts\n");

/***/ }),

/***/ "./src/components/view/view.ts":
/*!*************************************!*\
  !*** ./src/components/view/view.ts ***!
  \*************************************/
/*! exports provided: View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"View\", function() { return View; });\n/* harmony import */ var _components_slider_range_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/slider-range.ts */ \"./src/components/view/components/slider-range.ts\");\n/* harmony import */ var _components_handels_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/handels.ts */ \"./src/components/view/components/handels.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar View = /*#__PURE__*/function () {\n  function View(target, settings) {\n    _classCallCheck(this, View);\n\n    _defineProperty(this, \"that\", void 0);\n\n    _defineProperty(this, \"settings\", void 0);\n\n    _defineProperty(this, \"sliderRange\", void 0);\n\n    _defineProperty(this, \"minHandel\", void 0);\n\n    _defineProperty(this, \"maxHandel\", void 0);\n\n    this.sliderRange = new _components_slider_range_ts__WEBPACK_IMPORTED_MODULE_0__[\"SliderRange\"]().getElement();\n    this.minHandel = new _components_handels_ts__WEBPACK_IMPORTED_MODULE_1__[\"Handels\"]().getElements().min;\n    this.maxHandel = new _components_handels_ts__WEBPACK_IMPORTED_MODULE_1__[\"Handels\"]().getElements().max;\n    this.settings = settings;\n    this.that = target;\n  }\n\n  _createClass(View, [{\n    key: \"displayElements\",\n    value: function displayElements() {\n      var container = document.createElement('div');\n      container.classList.add('sliderBody');\n      container.append(this.sliderRange);\n      this.that.append(container);\n      this.sliderRange.append(this.minHandel);\n      this.sliderRange.append(this.maxHandel);\n\n      if (this.settings[\"range\"] === true || 'true') {\n        this.maxHandel.style.display = 'block';\n      }\n\n      ;\n    }\n  }]);\n\n  return View;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L3ZpZXcudHM/ZjlmYyJdLCJuYW1lcyI6WyJWaWV3IiwidGFyZ2V0Iiwic2V0dGluZ3MiLCJzbGlkZXJSYW5nZSIsIlNsaWRlclJhbmdlIiwiZ2V0RWxlbWVudCIsIm1pbkhhbmRlbCIsIkhhbmRlbHMiLCJnZXRFbGVtZW50cyIsIm1pbiIsIm1heEhhbmRlbCIsIm1heCIsInRoYXQiLCJjb250YWluZXIiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc0xpc3QiLCJhZGQiLCJhcHBlbmQiLCJzdHlsZSIsImRpc3BsYXkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFNTyxJQUFNQSxJQUFiO0FBT0UsZ0JBQW9CQyxNQUFwQixFQUE0Q0MsUUFBNUMsRUFBZ0U7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFDOUQsU0FBS0MsV0FBTCxHQUFtQixJQUFJQyx1RUFBSixHQUFrQkMsVUFBbEIsRUFBbkI7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLElBQUlDLDhEQUFKLEdBQWNDLFdBQWQsR0FBNEJDLEdBQTdDO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixJQUFJSCw4REFBSixHQUFjQyxXQUFkLEdBQTRCRyxHQUE3QztBQUVBLFNBQUtULFFBQUwsR0FBZ0JBLFFBQWhCO0FBQ0EsU0FBS1UsSUFBTCxHQUFZWCxNQUFaO0FBQ0Q7O0FBZEg7QUFBQTtBQUFBLHNDQWdCMEI7QUFDdEIsVUFBSVksU0FBeUIsR0FBR0MsUUFBUSxDQUFDQyxhQUFULENBQXVCLEtBQXZCLENBQWhDO0FBQ0FGLGVBQVMsQ0FBQ0csU0FBVixDQUFvQkMsR0FBcEIsQ0FBd0IsWUFBeEI7QUFDQUosZUFBUyxDQUFDSyxNQUFWLENBQWlCLEtBQUtmLFdBQXRCO0FBQ0EsV0FBS1MsSUFBTCxDQUFVTSxNQUFWLENBQWlCTCxTQUFqQjtBQUNBLFdBQUtWLFdBQUwsQ0FBaUJlLE1BQWpCLENBQXdCLEtBQUtaLFNBQTdCO0FBQ0EsV0FBS0gsV0FBTCxDQUFpQmUsTUFBakIsQ0FBd0IsS0FBS1IsU0FBN0I7O0FBRUEsVUFBSSxLQUFLUixRQUFMLENBQWMsT0FBZCxNQUEyQixJQUEzQixJQUFtQyxNQUF2QyxFQUErQztBQUM3QyxhQUFLUSxTQUFMLENBQWVTLEtBQWYsQ0FBcUJDLE9BQXJCLEdBQStCLE9BQS9CO0FBQ0Q7O0FBQUE7QUFDRjtBQTNCSDs7QUFBQTtBQUFBIiwiZmlsZSI6Ii4vc3JjL2NvbXBvbmVudHMvdmlldy92aWV3LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtTbGlkZXJSYW5nZX0gZnJvbSAnLi9jb21wb25lbnRzL3NsaWRlci1yYW5nZS50cyc7XHJcbmltcG9ydCB7SGFuZGVsc30gZnJvbSAnLi9jb21wb25lbnRzL2hhbmRlbHMudHMnO1xyXG5cclxuaW50ZXJmYWNlIFNldHRpbmdzIHtcclxuICBba2V5OiBzdHJpbmddOiBzdHJpbmcgfCBib29sZWFuXHJcbn1cclxuXHJcbmV4cG9ydCBjbGFzcyBWaWV3IHtcclxuICBwcml2YXRlIHRoYXQ6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHByaXZhdGUgc2V0dGluZ3M6IFNldHRpbmdzO1xyXG4gIHByaXZhdGUgc2xpZGVyUmFuZ2U6IEhUTUxEaXZFbGVtZW50O1xyXG4gIHByaXZhdGUgbWluSGFuZGVsOiBIVE1MU3BhbkVsZW1lbnQ7XHJcbiAgcHJpdmF0ZSBtYXhIYW5kZWw6IEhUTUxTcGFuRWxlbWVudDtcclxuICBcclxuICBwcml2YXRlIGNvbnN0cnVjdG9yKHRhcmdldDogSFRNTERpdkVsZW1lbnQsIHNldHRpbmdzOiBTZXR0aW5ncykge1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZSA9IG5ldyBTbGlkZXJSYW5nZSgpLmdldEVsZW1lbnQoKTtcclxuICAgIHRoaXMubWluSGFuZGVsID0gbmV3IEhhbmRlbHMoKS5nZXRFbGVtZW50cygpLm1pbjtcclxuICAgIHRoaXMubWF4SGFuZGVsID0gbmV3IEhhbmRlbHMoKS5nZXRFbGVtZW50cygpLm1heDtcclxuXHJcbiAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XHJcbiAgICB0aGlzLnRoYXQgPSB0YXJnZXQ7XHJcbiAgfVxyXG5cclxuICBkaXNwbGF5RWxlbWVudHMoKTogdm9pZCB7XHJcbiAgICBsZXQgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlckJvZHknKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQodGhpcy5zbGlkZXJSYW5nZSk7XHJcbiAgICB0aGlzLnRoYXQuYXBwZW5kKGNvbnRhaW5lcik7XHJcbiAgICB0aGlzLnNsaWRlclJhbmdlLmFwcGVuZCh0aGlzLm1pbkhhbmRlbCk7XHJcbiAgICB0aGlzLnNsaWRlclJhbmdlLmFwcGVuZCh0aGlzLm1heEhhbmRlbCk7XHJcbiAgICBcclxuICAgIGlmICh0aGlzLnNldHRpbmdzW1wicmFuZ2VcIl0gPT09IHRydWUgfHwgJ3RydWUnKSB7XHJcbiAgICAgIHRoaXMubWF4SGFuZGVsLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snXHJcbiAgICB9O1xyXG4gIH0gXHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/view/view.ts\n");

/***/ }),

/***/ "./src/jquery.ui.customSlider.ts":
/*!***************************************!*\
  !*** ./src/jquery.ui.customSlider.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_view_view_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/view/view.ts */ \"./src/components/view/view.ts\");\n/* harmony import */ var _components_model_model_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/model/model.ts */ \"./src/components/model/model.ts\");\n\n\n\n(function ($) {\n  $.fn.testSlider = function (options) {\n    var settings = $.extend({\n      'min': '0',\n      'max': '10',\n      'range': false\n    }, options);\n    var that = this; // Model\n\n    {\n      var model = new _components_model_model_ts__WEBPACK_IMPORTED_MODULE_1__[\"Model\"]({\n        'min': settings.min,\n        'max': settings.max\n      });\n      Object.observe(obj, function (changes) {\n        console.log(changes);\n      });\n    } // View\n\n    {\n      var view = new _components_view_view_ts__WEBPACK_IMPORTED_MODULE_0__[\"View\"](that, settings);\n      view.displayElements();\n    } // Presenter\n\n    {}\n  };\n})(jQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanF1ZXJ5LnVpLmN1c3RvbVNsaWRlci50cz9hN2FiIl0sIm5hbWVzIjpbIiQiLCJmbiIsInRlc3RTbGlkZXIiLCJvcHRpb25zIiwic2V0dGluZ3MiLCJleHRlbmQiLCJ0aGF0IiwibW9kZWwiLCJNb2RlbCIsIm1pbiIsIm1heCIsIk9iamVjdCIsIm9ic2VydmUiLCJvYmoiLCJjaGFuZ2VzIiwiY29uc29sZSIsImxvZyIsInZpZXciLCJWaWV3IiwiZGlzcGxheUVsZW1lbnRzIiwialF1ZXJ5Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBOztBQUVBLENBQUMsVUFBVUEsQ0FBVixFQUFjO0FBQ2JBLEdBQUMsQ0FBQ0MsRUFBRixDQUFLQyxVQUFMLEdBQWtCLFVBQVVDLE9BQVYsRUFBb0I7QUFFcEMsUUFBSUMsUUFBUSxHQUFHSixDQUFDLENBQUNLLE1BQUYsQ0FBVTtBQUN2QixhQUFPLEdBRGdCO0FBRXZCLGFBQU8sSUFGZ0I7QUFHdkIsZUFBUztBQUhjLEtBQVYsRUFJWkYsT0FKWSxDQUFmO0FBS0EsUUFBSUcsSUFBbUIsR0FBRyxJQUExQixDQVBvQyxDQVNwQzs7QUFDQTtBQUNFLFVBQUlDLEtBQUssR0FBRyxJQUFJQyxnRUFBSixDQUFVO0FBQUMsZUFBT0osUUFBUSxDQUFDSyxHQUFqQjtBQUFzQixlQUFPTCxRQUFRLENBQUNNO0FBQXRDLE9BQVYsQ0FBWjtBQUVBQyxZQUFNLENBQUNDLE9BQVAsQ0FBZUMsR0FBZixFQUFvQixVQUFTQyxPQUFULEVBQWtCO0FBQ3BDQyxlQUFPLENBQUNDLEdBQVIsQ0FBWUYsT0FBWjtBQUNELE9BRkQ7QUFHRCxLQWhCbUMsQ0FrQnBDOztBQUNBO0FBQ0UsVUFBSUcsSUFBSSxHQUFHLElBQUlDLDZEQUFKLENBQVNaLElBQVQsRUFBZUYsUUFBZixDQUFYO0FBQ0FhLFVBQUksQ0FBQ0UsZUFBTDtBQUNELEtBdEJtQyxDQXdCcEM7O0FBQ0EsS0FFQztBQUVGLEdBN0JEO0FBOEJELENBL0JELEVBK0JHQyxNQS9CSCIsImZpbGUiOiIuL3NyYy9qcXVlcnkudWkuY3VzdG9tU2xpZGVyLnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vY29tcG9uZW50cy92aWV3L3ZpZXcudHMnO1xyXG5pbXBvcnQgeyBNb2RlbCB9IGZyb20gJy4vY29tcG9uZW50cy9tb2RlbC9tb2RlbC50cyc7XHJcblxyXG4oZnVuY3Rpb24oICQgKSB7XHJcbiAgJC5mbi50ZXN0U2xpZGVyID0gZnVuY3Rpb24oIG9wdGlvbnMgKSB7XHJcblxyXG4gICAgdmFyIHNldHRpbmdzID0gJC5leHRlbmQoIHtcclxuICAgICAgJ21pbic6ICcwJyxcclxuICAgICAgJ21heCc6ICcxMCcsXHJcbiAgICAgICdyYW5nZSc6IGZhbHNlLFxyXG4gICAgfSwgb3B0aW9ucyk7XHJcbiAgICBsZXQgdGhhdDpIVE1MRGl2RWxlbWVudCA9IHRoaXM7XHJcbiAgICBcclxuICAgIC8vIE1vZGVsXHJcbiAgICB7XHJcbiAgICAgIGxldCBtb2RlbCA9IG5ldyBNb2RlbCh7J21pbic6IHNldHRpbmdzLm1pbiwgJ21heCc6IHNldHRpbmdzLm1heH0pXHJcbiAgICAgIFxyXG4gICAgICBPYmplY3Qub2JzZXJ2ZShvYmosIGZ1bmN0aW9uKGNoYW5nZXMpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhjaGFuZ2VzKTtcclxuICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gVmlld1xyXG4gICAge1xyXG4gICAgICBsZXQgdmlldyA9IG5ldyBWaWV3KHRoYXQsIHNldHRpbmdzKTtcclxuICAgICAgdmlldy5kaXNwbGF5RWxlbWVudHMoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBQcmVzZW50ZXJcclxuICAgIHtcclxuXHJcbiAgICB9XHJcbiAgICBcclxuICB9O1xyXG59KShqUXVlcnkpOyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/jquery.ui.customSlider.ts\n");

/***/ })

/******/ });