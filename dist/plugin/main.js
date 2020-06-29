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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"View\", function() { return View; });\n/* harmony import */ var _components_slider_range_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/slider-range.ts */ \"./src/components/view/components/slider-range.ts\");\n/* harmony import */ var _components_handels_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/handels.ts */ \"./src/components/view/components/handels.ts\");\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\n\n\nvar View = /*#__PURE__*/function () {\n  function View(target) {\n    _classCallCheck(this, View);\n\n    _defineProperty(this, \"that\", void 0);\n\n    _defineProperty(this, \"sliderRange\", void 0);\n\n    _defineProperty(this, \"minHandel\", void 0);\n\n    _defineProperty(this, \"maxHandel\", void 0);\n\n    this.sliderRange = new _components_slider_range_ts__WEBPACK_IMPORTED_MODULE_0__[\"SliderRange\"]().getElement();\n    this.minHandel = new _components_handels_ts__WEBPACK_IMPORTED_MODULE_1__[\"Handels\"]().getElements().min;\n    this.maxHandel = new _components_handels_ts__WEBPACK_IMPORTED_MODULE_1__[\"Handels\"]().getElements().max;\n    this.that = target;\n  }\n\n  _createClass(View, [{\n    key: \"displayElements\",\n    value: function displayElements() {\n      var container = document.createElement('div');\n      container.classList.add('sliderBody');\n      container.append(this.sliderRange);\n      this.that.append(container);\n      this.sliderRange.append(this.minHandel);\n      this.sliderRange.append(this.maxHandel);\n    }\n  }]);\n\n  return View;\n}();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy92aWV3L3ZpZXcudHM/ZjlmYyJdLCJuYW1lcyI6WyJWaWV3IiwidGFyZ2V0Iiwic2xpZGVyUmFuZ2UiLCJTbGlkZXJSYW5nZSIsImdldEVsZW1lbnQiLCJtaW5IYW5kZWwiLCJIYW5kZWxzIiwiZ2V0RWxlbWVudHMiLCJtaW4iLCJtYXhIYW5kZWwiLCJtYXgiLCJ0aGF0IiwiY29udGFpbmVyIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiYXBwZW5kIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBR08sSUFBTUEsSUFBYjtBQUtFLGdCQUFZQyxNQUFaLEVBQW9DO0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQUE7O0FBQ2xDLFNBQUtDLFdBQUwsR0FBbUIsSUFBSUMsdUVBQUosR0FBa0JDLFVBQWxCLEVBQW5CO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixJQUFJQyw4REFBSixHQUFjQyxXQUFkLEdBQTRCQyxHQUE3QztBQUNBLFNBQUtDLFNBQUwsR0FBaUIsSUFBSUgsOERBQUosR0FBY0MsV0FBZCxHQUE0QkcsR0FBN0M7QUFFQSxTQUFLQyxJQUFMLEdBQVlWLE1BQVo7QUFDRDs7QUFYSDtBQUFBO0FBQUEsc0NBWTBCO0FBQ3RCLFVBQUlXLFNBQXlCLEdBQUdDLFFBQVEsQ0FBQ0MsYUFBVCxDQUF1QixLQUF2QixDQUFoQztBQUNBRixlQUFTLENBQUNHLFNBQVYsQ0FBb0JDLEdBQXBCLENBQXdCLFlBQXhCO0FBQ0FKLGVBQVMsQ0FBQ0ssTUFBVixDQUFpQixLQUFLZixXQUF0QjtBQUVBLFdBQUtTLElBQUwsQ0FBVU0sTUFBVixDQUFpQkwsU0FBakI7QUFDQSxXQUFLVixXQUFMLENBQWlCZSxNQUFqQixDQUF3QixLQUFLWixTQUE3QjtBQUNBLFdBQUtILFdBQUwsQ0FBaUJlLE1BQWpCLENBQXdCLEtBQUtSLFNBQTdCO0FBQ0Q7QUFwQkg7O0FBQUE7QUFBQSIsImZpbGUiOiIuL3NyYy9jb21wb25lbnRzL3ZpZXcvdmlldy50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7U2xpZGVyUmFuZ2V9IGZyb20gJy4vY29tcG9uZW50cy9zbGlkZXItcmFuZ2UudHMnO1xyXG5pbXBvcnQge0hhbmRlbHN9IGZyb20gJy4vY29tcG9uZW50cy9oYW5kZWxzLnRzJztcclxuXHJcblxyXG5leHBvcnQgY2xhc3MgVmlldyB7XHJcbiAgdGhhdDogSFRNTERpdkVsZW1lbnQ7XHJcbiAgc2xpZGVyUmFuZ2U6IEhUTUxEaXZFbGVtZW50O1xyXG4gIG1pbkhhbmRlbDogSFRNTFNwYW5FbGVtZW50O1xyXG4gIG1heEhhbmRlbDogSFRNTFNwYW5FbGVtZW50O1xyXG4gIGNvbnN0cnVjdG9yKHRhcmdldDogSFRNTERpdkVsZW1lbnQpIHtcclxuICAgIHRoaXMuc2xpZGVyUmFuZ2UgPSBuZXcgU2xpZGVyUmFuZ2UoKS5nZXRFbGVtZW50KCk7XHJcbiAgICB0aGlzLm1pbkhhbmRlbCA9IG5ldyBIYW5kZWxzKCkuZ2V0RWxlbWVudHMoKS5taW47XHJcbiAgICB0aGlzLm1heEhhbmRlbCA9IG5ldyBIYW5kZWxzKCkuZ2V0RWxlbWVudHMoKS5tYXg7XHJcblxyXG4gICAgdGhpcy50aGF0ID0gdGFyZ2V0O1xyXG4gIH1cclxuICBkaXNwbGF5RWxlbWVudHMoKTogdm9pZCB7XHJcbiAgICBsZXQgY29udGFpbmVyOiBIVE1MRGl2RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgY29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NsaWRlckJvZHknKTtcclxuICAgIGNvbnRhaW5lci5hcHBlbmQodGhpcy5zbGlkZXJSYW5nZSk7XHJcblxyXG4gICAgdGhpcy50aGF0LmFwcGVuZChjb250YWluZXIpO1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZS5hcHBlbmQodGhpcy5taW5IYW5kZWwpO1xyXG4gICAgdGhpcy5zbGlkZXJSYW5nZS5hcHBlbmQodGhpcy5tYXhIYW5kZWwpO1xyXG4gIH1cclxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/view/view.ts\n");

/***/ }),

/***/ "./src/jquery.ui.customSlider.ts":
/*!***************************************!*\
  !*** ./src/jquery.ui.customSlider.ts ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_view_view_ts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/view/view.ts */ \"./src/components/view/view.ts\");\n\n\n(function ($) {\n  $.fn.testSlider = function () {\n    var that = this;\n    var view = new _components_view_view_ts__WEBPACK_IMPORTED_MODULE_0__[\"View\"](that);\n    view.displayElements();\n  };\n})(jQuery);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanF1ZXJ5LnVpLmN1c3RvbVNsaWRlci50cz9hN2FiIl0sIm5hbWVzIjpbIiQiLCJmbiIsInRlc3RTbGlkZXIiLCJ0aGF0IiwidmlldyIsIlZpZXciLCJkaXNwbGF5RWxlbWVudHMiLCJqUXVlcnkiXSwibWFwcGluZ3MiOiJBQUNBO0FBQUE7QUFBQTs7QUFDQSxDQUFDLFVBQVVBLENBQVYsRUFBYztBQUNiQSxHQUFDLENBQUNDLEVBQUYsQ0FBS0MsVUFBTCxHQUFrQixZQUFXO0FBQzNCLFFBQUlDLElBQW1CLEdBQUcsSUFBMUI7QUFFQSxRQUFJQyxJQUFJLEdBQUcsSUFBSUMsNkRBQUosQ0FBU0YsSUFBVCxDQUFYO0FBQ0FDLFFBQUksQ0FBQ0UsZUFBTDtBQUVELEdBTkQ7QUFPRCxDQVJELEVBUUdDLE1BUkgiLCJmaWxlIjoiLi9zcmMvanF1ZXJ5LnVpLmN1c3RvbVNsaWRlci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlRGl2fSBmcm9tICcuL2NvbXBvbmVudHMvdmlldy92aWV3LnRzJztcclxuaW1wb3J0IHsgVmlldyB9IGZyb20gJy4vY29tcG9uZW50cy92aWV3L3ZpZXcudHMnO1xyXG4oZnVuY3Rpb24oICQgKSB7XHJcbiAgJC5mbi50ZXN0U2xpZGVyID0gZnVuY3Rpb24oKSB7XHJcbiAgICBsZXQgdGhhdDpIVE1MRGl2RWxlbWVudCA9IHRoaXM7XHJcblxyXG4gICAgbGV0IHZpZXcgPSBuZXcgVmlldyh0aGF0KTtcclxuICAgIHZpZXcuZGlzcGxheUVsZW1lbnRzKCk7XHJcblxyXG4gIH07XHJcbn0pKGpRdWVyeSk7Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/jquery.ui.customSlider.ts\n");

/***/ })

/******/ });