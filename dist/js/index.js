/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/autobind-decorator/lib/esm/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/autobind-decorator/lib/esm/index.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "boundClass": () => (/* binding */ boundClass),
/* harmony export */   "boundMethod": () => (/* binding */ boundMethod),
/* harmony export */   "default": () => (/* binding */ autobind)
/* harmony export */ });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/**
 * Return a descriptor removing the value and returning a getter
 * The getter will return a .bind version of the function
 * and memoize the result against a symbol on the instance
 */
function boundMethod(target, key, descriptor) {
  var fn = descriptor.value;

  if (typeof fn !== 'function') {
    throw new TypeError("@boundMethod decorator can only be applied to methods not: ".concat(_typeof(fn)));
  } // In IE11 calling Object.defineProperty has a side-effect of evaluating the
  // getter for the property which is being replaced. This causes infinite
  // recursion and an "Out of stack space" error.


  var definingProperty = false;
  return {
    configurable: true,
    get: function get() {
      // eslint-disable-next-line no-prototype-builtins
      if (definingProperty || this === target.prototype || this.hasOwnProperty(key) || typeof fn !== 'function') {
        return fn;
      }

      var boundFn = fn.bind(this);
      definingProperty = true;
      Object.defineProperty(this, key, {
        configurable: true,
        get: function get() {
          return boundFn;
        },
        set: function set(value) {
          fn = value;
          delete this[key];
        }
      });
      definingProperty = false;
      return boundFn;
    },
    set: function set(value) {
      fn = value;
    }
  };
}
/**
 * Use boundMethod to bind all methods on the target.prototype
 */

function boundClass(target) {
  // (Using reflect to get all keys including symbols)
  var keys; // Use Reflect if exists

  if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
    keys = Reflect.ownKeys(target.prototype);
  } else {
    keys = Object.getOwnPropertyNames(target.prototype); // Use symbols if support is provided

    if (typeof Object.getOwnPropertySymbols === 'function') {
      keys = keys.concat(Object.getOwnPropertySymbols(target.prototype));
    }
  }

  keys.forEach(function (key) {
    // Ignore special case target method
    if (key === 'constructor') {
      return;
    }

    var descriptor = Object.getOwnPropertyDescriptor(target.prototype, key); // Only methods need binding

    if (typeof descriptor.value === 'function') {
      Object.defineProperty(target.prototype, key, boundMethod(target, key, descriptor));
    }
  });
  return target;
}
function autobind() {
  if (arguments.length === 1) {
    return boundClass.apply(void 0, arguments);
  }

  return boundMethod.apply(void 0, arguments);
}

/***/ }),

/***/ "./src/demo-page/SideMenu/SideMenu.ts":
/*!********************************************!*\
  !*** ./src/demo-page/SideMenu/SideMenu.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var cov_1o0o1h5bxg=function(){var path="C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\demo-page\\SideMenu\\SideMenu.ts",hash="bad365df8cfffc3c576fa2912b9d35769f8e1910",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\demo-page\\SideMenu\\SideMenu.ts",statementMap:{"0":{start:{line:2,column:17},end:{line:7,column:1}},"1":{start:{line:3,column:12},end:{line:3,column:28}},"2":{start:{line:3,column:34},end:{line:3,column:125}},"3":{start:{line:4,column:4},end:{line:5,column:150}},"4":{start:{line:4,column:79},end:{line:4,column:131}},"5":{start:{line:5,column:9},end:{line:5,column:150}},"6":{start:{line:5,column:58},end:{line:5,column:150}},"7":{start:{line:5,column:81},end:{line:5,column:150}},"8":{start:{line:6,column:4},end:{line:6,column:66}},"9":{start:{line:8,column:0},end:{line:8,column:62}},"10":{start:{line:9,column:0},end:{line:9,column:26}},"11":{start:{line:10,column:29},end:{line:10,column:58}},"12":{start:{line:11,column:23},end:{line:11,column:48}},"13":{start:{line:12,column:15},end:{line:117,column:1}},"14":{start:{line:14,column:8},end:{line:14,column:35}},"15":{start:{line:15,column:8},end:{line:15,column:42}},"16":{start:{line:16,column:8},end:{line:16,column:36}},"17":{start:{line:17,column:8},end:{line:17,column:29}},"18":{start:{line:20,column:8},end:{line:26,column:10}},"19":{start:{line:27,column:8},end:{line:34,column:10}},"20":{start:{line:37,column:8},end:{line:47,column:11}},"21":{start:{line:38,column:59},end:{line:38,column:70}},"22":{start:{line:39,column:12},end:{line:39,column:70}},"23":{start:{line:40,column:12},end:{line:42,column:15}},"24":{start:{line:41,column:16},end:{line:41,column:70}},"25":{start:{line:43,column:12},end:{line:44,column:79}},"26":{start:{line:44,column:16},end:{line:44,column:79}},"27":{start:{line:45,column:12},end:{line:46,column:62}},"28":{start:{line:46,column:16},end:{line:46,column:62}},"29":{start:{line:50,column:8},end:{line:55,column:11}},"30":{start:{line:51,column:36},end:{line:51,column:62}},"31":{start:{line:52,column:12},end:{line:54,column:15}},"32":{start:{line:53,column:16},end:{line:53,column:79}},"33":{start:{line:58,column:8},end:{line:63,column:11}},"34":{start:{line:59,column:30},end:{line:59,column:56}},"35":{start:{line:60,column:12},end:{line:62,column:15}},"36":{start:{line:61,column:16},end:{line:61,column:68}},"37":{start:{line:66,column:8},end:{line:66,column:31}},"38":{start:{line:67,column:8},end:{line:67,column:63}},"39":{start:{line:70,column:31},end:{line:71,column:100}},"40":{start:{line:72,column:31},end:{line:73,column:101}},"41":{start:{line:74,column:8},end:{line:81,column:9}},"42":{start:{line:75,column:12},end:{line:75,column:96}},"43":{start:{line:76,column:12},end:{line:76,column:103}},"44":{start:{line:78,column:13},end:{line:81,column:9}},"45":{start:{line:79,column:12},end:{line:79,column:93}},"46":{start:{line:80,column:12},end:{line:80,column:100}},"47":{start:{line:84,column:28},end:{line:84,column:29}},"48":{start:{line:85,column:31},end:{line:86,column:109}},"49":{start:{line:87,column:31},end:{line:88,column:109}},"50":{start:{line:89,column:8},end:{line:94,column:9}},"51":{start:{line:90,column:12},end:{line:90,column:105}},"52":{start:{line:92,column:13},end:{line:94,column:9}},"53":{start:{line:93,column:12},end:{line:93,column:102}},"54":{start:{line:97,column:26},end:{line:97,column:38}},"55":{start:{line:98,column:28},end:{line:98,column:29}},"56":{start:{line:99,column:8},end:{line:99,column:109}},"57":{start:{line:100,column:8},end:{line:100,column:103}},"58":{start:{line:101,column:8},end:{line:102,column:58}},"59":{start:{line:103,column:8},end:{line:103,column:98}},"60":{start:{line:104,column:8},end:{line:104,column:101}},"61":{start:{line:105,column:8},end:{line:105,column:101}},"62":{start:{line:106,column:8},end:{line:107,column:67}},"63":{start:{line:107,column:12},end:{line:107,column:67}},"64":{start:{line:108,column:8},end:{line:108,column:65}},"65":{start:{line:109,column:8},end:{line:109,column:79}},"66":{start:{line:110,column:8},end:{line:110,column:73}},"67":{start:{line:111,column:8},end:{line:111,column:69}},"68":{start:{line:112,column:8},end:{line:112,column:67}},"69":{start:{line:113,column:8},end:{line:113,column:70}},"70":{start:{line:114,column:8},end:{line:114,column:42}},"71":{start:{line:115,column:8},end:{line:115,column:42}},"72":{start:{line:118,column:0},end:{line:120,column:13}},"73":{start:{line:121,column:0},end:{line:121,column:28}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:46},end:{line:2,column:47}},loc:{start:{line:2,column:87},end:{line:7,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:13,column:4},end:{line:13,column:5}},loc:{start:{line:13,column:18},end:{line:18,column:5}},line:13},"2":{name:"(anonymous_2)",decl:{start:{line:19,column:4},end:{line:19,column:5}},loc:{start:{line:19,column:20},end:{line:35,column:5}},line:19},"3":{name:"(anonymous_3)",decl:{start:{line:36,column:4},end:{line:36,column:5}},loc:{start:{line:36,column:33},end:{line:48,column:5}},line:36},"4":{name:"(anonymous_4)",decl:{start:{line:37,column:53},end:{line:37,column:54}},loc:{start:{line:37,column:70},end:{line:47,column:9}},line:37},"5":{name:"(anonymous_5)",decl:{start:{line:40,column:31},end:{line:40,column:32}},loc:{start:{line:40,column:48},end:{line:42,column:13}},line:40},"6":{name:"(anonymous_6)",decl:{start:{line:49,column:4},end:{line:49,column:5}},loc:{start:{line:49,column:27},end:{line:56,column:5}},line:49},"7":{name:"(anonymous_7)",decl:{start:{line:50,column:67},end:{line:50,column:68}},loc:{start:{line:50,column:76},end:{line:55,column:9}},line:50},"8":{name:"(anonymous_8)",decl:{start:{line:52,column:63},end:{line:52,column:64}},loc:{start:{line:52,column:78},end:{line:54,column:13}},line:52},"9":{name:"(anonymous_9)",decl:{start:{line:57,column:4},end:{line:57,column:5}},loc:{start:{line:57,column:22},end:{line:64,column:5}},line:57},"10":{name:"(anonymous_10)",decl:{start:{line:58,column:68},end:{line:58,column:69}},loc:{start:{line:58,column:77},end:{line:63,column:9}},line:58},"11":{name:"(anonymous_11)",decl:{start:{line:60,column:64},end:{line:60,column:65}},loc:{start:{line:60,column:80},end:{line:62,column:13}},line:60},"12":{name:"(anonymous_12)",decl:{start:{line:65,column:4},end:{line:65,column:5}},loc:{start:{line:65,column:24},end:{line:68,column:5}},line:65},"13":{name:"(anonymous_13)",decl:{start:{line:69,column:4},end:{line:69,column:5}},loc:{start:{line:69,column:30},end:{line:82,column:5}},line:69},"14":{name:"(anonymous_14)",decl:{start:{line:83,column:4},end:{line:83,column:5}},loc:{start:{line:83,column:28},end:{line:95,column:5}},line:83},"15":{name:"(anonymous_15)",decl:{start:{line:96,column:4},end:{line:96,column:5}},loc:{start:{line:96,column:25},end:{line:116,column:5}},line:96}},branchMap:{"0":{loc:{start:{line:2,column:17},end:{line:7,column:1}},type:"binary-expr",locations:[{start:{line:2,column:18},end:{line:2,column:22}},{start:{line:2,column:26},end:{line:2,column:41}},{start:{line:2,column:46},end:{line:7,column:1}}],line:2},"1":{loc:{start:{line:3,column:34},end:{line:3,column:125}},type:"cond-expr",locations:[{start:{line:3,column:42},end:{line:3,column:48}},{start:{line:3,column:51},end:{line:3,column:125}}],line:3},"2":{loc:{start:{line:3,column:51},end:{line:3,column:125}},type:"cond-expr",locations:[{start:{line:3,column:67},end:{line:3,column:118}},{start:{line:3,column:121},end:{line:3,column:125}}],line:3},"3":{loc:{start:{line:4,column:4},end:{line:5,column:150}},type:"if",locations:[{start:{line:4,column:4},end:{line:5,column:150}},{start:{line:4,column:4},end:{line:5,column:150}}],line:4},"4":{loc:{start:{line:4,column:8},end:{line:4,column:77}},type:"binary-expr",locations:[{start:{line:4,column:8},end:{line:4,column:35}},{start:{line:4,column:39},end:{line:4,column:77}}],line:4},"5":{loc:{start:{line:5,column:58},end:{line:5,column:150}},type:"if",locations:[{start:{line:5,column:58},end:{line:5,column:150}},{start:{line:5,column:58},end:{line:5,column:150}}],line:5},"6":{loc:{start:{line:5,column:85},end:{line:5,column:149}},type:"binary-expr",locations:[{start:{line:5,column:86},end:{line:5,column:143}},{start:{line:5,column:148},end:{line:5,column:149}}],line:5},"7":{loc:{start:{line:5,column:86},end:{line:5,column:143}},type:"cond-expr",locations:[{start:{line:5,column:94},end:{line:5,column:98}},{start:{line:5,column:101},end:{line:5,column:143}}],line:5},"8":{loc:{start:{line:5,column:101},end:{line:5,column:143}},type:"cond-expr",locations:[{start:{line:5,column:109},end:{line:5,column:126}},{start:{line:5,column:129},end:{line:5,column:143}}],line:5},"9":{loc:{start:{line:6,column:11},end:{line:6,column:62}},type:"binary-expr",locations:[{start:{line:6,column:11},end:{line:6,column:16}},{start:{line:6,column:20},end:{line:6,column:21}},{start:{line:6,column:25},end:{line:6,column:62}}],line:6},"10":{loc:{start:{line:43,column:12},end:{line:44,column:79}},type:"if",locations:[{start:{line:43,column:12},end:{line:44,column:79}},{start:{line:43,column:12},end:{line:44,column:79}}],line:43},"11":{loc:{start:{line:45,column:12},end:{line:46,column:62}},type:"if",locations:[{start:{line:45,column:12},end:{line:46,column:62}},{start:{line:45,column:12},end:{line:46,column:62}}],line:45},"12":{loc:{start:{line:70,column:31},end:{line:71,column:100}},type:"binary-expr",locations:[{start:{line:70,column:31},end:{line:70,column:39}},{start:{line:71,column:15},end:{line:71,column:100}}],line:70},"13":{loc:{start:{line:72,column:31},end:{line:73,column:101}},type:"binary-expr",locations:[{start:{line:72,column:31},end:{line:72,column:40}},{start:{line:73,column:15},end:{line:73,column:101}}],line:72},"14":{loc:{start:{line:74,column:8},end:{line:81,column:9}},type:"if",locations:[{start:{line:74,column:8},end:{line:81,column:9}},{start:{line:74,column:8},end:{line:81,column:9}}],line:74},"15":{loc:{start:{line:78,column:13},end:{line:81,column:9}},type:"if",locations:[{start:{line:78,column:13},end:{line:81,column:9}},{start:{line:78,column:13},end:{line:81,column:9}}],line:78},"16":{loc:{start:{line:85,column:31},end:{line:86,column:109}},type:"binary-expr",locations:[{start:{line:85,column:31},end:{line:85,column:51}},{start:{line:86,column:15},end:{line:86,column:109}}],line:85},"17":{loc:{start:{line:87,column:31},end:{line:88,column:109}},type:"binary-expr",locations:[{start:{line:87,column:31},end:{line:87,column:51}},{start:{line:88,column:15},end:{line:88,column:109}}],line:87},"18":{loc:{start:{line:89,column:8},end:{line:94,column:9}},type:"if",locations:[{start:{line:89,column:8},end:{line:94,column:9}},{start:{line:89,column:8},end:{line:94,column:9}}],line:89},"19":{loc:{start:{line:92,column:13},end:{line:94,column:9}},type:"if",locations:[{start:{line:92,column:13},end:{line:94,column:9}},{start:{line:92,column:13},end:{line:94,column:9}}],line:92},"20":{loc:{start:{line:99,column:53},end:{line:99,column:108}},type:"cond-expr",locations:[{start:{line:99,column:65},end:{line:99,column:91}},{start:{line:99,column:94},end:{line:99,column:108}}],line:99},"21":{loc:{start:{line:100,column:51},end:{line:100,column:102}},type:"cond-expr",locations:[{start:{line:100,column:63},end:{line:100,column:87}},{start:{line:100,column:90},end:{line:100,column:102}}],line:100},"22":{loc:{start:{line:101,column:48},end:{line:102,column:57}},type:"cond-expr",locations:[{start:{line:102,column:14},end:{line:102,column:40}},{start:{line:102,column:43},end:{line:102,column:57}}],line:101},"23":{loc:{start:{line:103,column:46},end:{line:103,column:97}},type:"cond-expr",locations:[{start:{line:103,column:58},end:{line:103,column:82}},{start:{line:103,column:85},end:{line:103,column:97}}],line:103},"24":{loc:{start:{line:104,column:47},end:{line:104,column:100}},type:"cond-expr",locations:[{start:{line:104,column:59},end:{line:104,column:84}},{start:{line:104,column:87},end:{line:104,column:100}}],line:104},"25":{loc:{start:{line:105,column:47},end:{line:105,column:100}},type:"cond-expr",locations:[{start:{line:105,column:59},end:{line:105,column:84}},{start:{line:105,column:87},end:{line:105,column:100}}],line:105},"26":{loc:{start:{line:106,column:8},end:{line:107,column:67}},type:"if",locations:[{start:{line:106,column:8},end:{line:107,column:67}},{start:{line:106,column:8},end:{line:107,column:67}}],line:106}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0},b:{"0":[0,0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0],"20":[0,0],"21":[0,0],"22":[0,0],"23":[0,0],"24":[0,0],"25":[0,0],"26":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\demo-page\\SideMenu\\SideMenu.ts",sourceRoot:"",sources:["C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\demo-page\\SideMenu\\SideMenu.ts"],names:[],mappings:"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",sourcesContent:["import autobind from 'autobind-decorator';\nimport { sideMenuData } from './sideMenuData';\nimport {\n  SideMenuBaseData,\n  SideMenuElements,\n} from './types';\nimport { SliderOptions } from '../../plugin/types';\n\n@autobind\nexport class SideMenu {\n  readonly sideMenuElements: SideMenuElements;\n\n  public textInputs: Array<HTMLInputElement> | undefined;\n\n  public toggleInputs: Array<HTMLInputElement> | undefined;\n\n  constructor() {\n    this.sideMenuElements = {};\n    this.initializeSideMenuElements();\n    this.cloneSimilarElements();\n    this.collectInputs();\n  }\n\n  private collectInputs(): void {\n    this.textInputs = [\n      this.sideMenuElements.fromInput,\n      this.sideMenuElements.toInput,\n      this.sideMenuElements.minInput,\n      this.sideMenuElements.maxInput,\n      this.sideMenuElements.stepInput,\n    ] as Array<HTMLInputElement>;\n\n    this.toggleInputs = [\n      this.sideMenuElements.doubleToggle,\n      this.sideMenuElements.handlesValuesToggle,\n      this.sideMenuElements.valueScaleToggle,\n      this.sideMenuElements.verticalToggle,\n      this.sideMenuElements.integerToggle,\n      this.sideMenuElements.stepToggle,\n    ] as Array<HTMLInputElement>;\n  }\n\n  private initializeSideMenuElements(): void {\n    sideMenuData.elements.forEach((elementData: SideMenuBaseData): void => {\n      const {\n        key,\n        attr,\n        cssClasses,\n        name,\n        text,\n      } = elementData;\n\n      this.sideMenuElements[key] = document.createElement(name) as HTMLInputElement;\n      cssClasses.forEach((targetClass: string): void => {\n        this.sideMenuElements[key].classList.add(targetClass);\n      });\n      if (attr) this.sideMenuElements[key].setAttribute(attr.name, attr.value);\n      if (text) this.sideMenuElements[key].textContent = text;\n    });\n  }\n\n  private cloneSimilarElements():void {\n    Object.keys(sideMenuData.cloneList).forEach((key: string): void => {\n      const originalElement: HTMLElement = this.sideMenuElements[key];\n\n      sideMenuData.cloneList[key].forEach((cloneName: string): void => {\n        this.sideMenuElements[cloneName] = originalElement.cloneNode() as HTMLElement;\n      });\n    });\n  }\n\n  private collectSideMenu(): void {\n    Object.keys(sideMenuData.appendList).forEach((key: string): void => {\n      const container: HTMLElement = this.sideMenuElements[key];\n\n      sideMenuData.appendList[key].forEach((targetName: string): void => {\n        container.append(this.sideMenuElements[targetName]);\n      });\n    });\n  }\n\n  public appendToDom(target: JQuery): void {\n    this.collectSideMenu();\n    target.append(this.sideMenuElements.sideMenuContainer);\n  }\n\n  private changeToDisplay(isDouble: boolean):void {\n    const isNeedToShowTo: boolean = isDouble\n      && this.sideMenuElements.toOutput.classList.contains('goby-slider__output-value_hidden');\n    const isNeedToHideTo: boolean = !isDouble\n      && !this.sideMenuElements.toOutput.classList.contains('goby-slider__output-value_hidden');\n\n    if (isNeedToShowTo) {\n      this.sideMenuElements.toOutput.classList.remove('goby-slider__output-value_hidden');\n      this.sideMenuElements.toInputWrapper.classList.remove('goby-slider__input-wrapper_hidden');\n    } else if (isNeedToHideTo) {\n      this.sideMenuElements.toOutput.classList.add('goby-slider__output-value_hidden');\n      this.sideMenuElements.toInputWrapper.classList.add('goby-slider__input-wrapper_hidden');\n    }\n  }\n\n  private changeStepDisplay(step: boolean | number):void {\n    const withoutStep: number = 0;\n    const isNeedToShowTo: boolean = step !== withoutStep\n      && this.sideMenuElements.stepInputWrapper.classList.contains('goby-slider__input-wrapper_hidden');\n    const isNeedToHideTo: boolean = step === withoutStep\n      && !this.sideMenuElements.stepInputWrapper.classList.contains('goby-slider__output-value_hidden');\n\n    if (isNeedToShowTo) {\n      this.sideMenuElements.stepInputWrapper.classList.remove('goby-slider__input-wrapper_hidden');\n    } else if (isNeedToHideTo) {\n      this.sideMenuElements.stepInputWrapper.classList.add('goby-slider__input-wrapper_hidden');\n    }\n  }\n\n  public updateSideMenu(data: SliderOptions):void {\n    const isInteger: boolean = data.integer;\n    const withoutStep: number = 0;\n\n    this.sideMenuElements.fromOutput.innerText = isInteger ? `${Math.round(data.from!)}` : `${data.from}`;\n    this.sideMenuElements.toOutput.innerText = isInteger ? `${Math.round(data.to!)}` : `${data.to}`;\n    (this.sideMenuElements.fromInput as HTMLInputElement).value = isInteger\n      ? `${Math.round(data.from!)}` : `${data.from}`;\n    (this.sideMenuElements.toInput as HTMLInputElement).value = isInteger ? `${Math.round(data.to!)}` : `${data.to}`;\n    (this.sideMenuElements.minInput as HTMLInputElement).value = isInteger ? `${Math.round(data.min!)}` : `${data.min}`;\n    (this.sideMenuElements.maxInput as HTMLInputElement).value = isInteger ? `${Math.round(data.max!)}` : `${data.max}`;\n    if (data.step !== withoutStep) (this.sideMenuElements.stepInput as HTMLInputElement).value = `${data.step}`;\n    (this.sideMenuElements.doubleToggle as HTMLInputElement).checked = data.double;\n    (this.sideMenuElements.handlesValuesToggle as HTMLInputElement).checked = data.handlesValues;\n    (this.sideMenuElements.valueScaleToggle as HTMLInputElement).checked = data.valueScale;\n    (this.sideMenuElements.verticalToggle as HTMLInputElement).checked = data.vertical;\n    (this.sideMenuElements.integerToggle as HTMLInputElement).checked = data.integer;\n    (this.sideMenuElements.stepToggle as HTMLInputElement).checked = Boolean(data.step);\n    this.changeToDisplay(data.double);\n    this.changeStepDisplay(data.step);\n  }\n}\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __decorate=(cov_1o0o1h5bxg.s[0]++,(cov_1o0o1h5bxg.b[0][0]++,this)&&(cov_1o0o1h5bxg.b[0][1]++,this.__decorate)||(cov_1o0o1h5bxg.b[0][2]++,function(decorators,target,key,desc){cov_1o0o1h5bxg.f[0]++;var c=(cov_1o0o1h5bxg.s[1]++,arguments.length),r=(cov_1o0o1h5bxg.s[2]++,c<3?(cov_1o0o1h5bxg.b[1][0]++,target):(cov_1o0o1h5bxg.b[1][1]++,desc===null?(cov_1o0o1h5bxg.b[2][0]++,desc=Object.getOwnPropertyDescriptor(target,key)):(cov_1o0o1h5bxg.b[2][1]++,desc))),d;cov_1o0o1h5bxg.s[3]++;if((cov_1o0o1h5bxg.b[4][0]++,typeof Reflect==="object")&&(cov_1o0o1h5bxg.b[4][1]++,typeof Reflect.decorate==="function")){cov_1o0o1h5bxg.b[3][0]++;cov_1o0o1h5bxg.s[4]++;r=Reflect.decorate(decorators,target,key,desc);}else{cov_1o0o1h5bxg.b[3][1]++;cov_1o0o1h5bxg.s[5]++;for(var i=decorators.length-1;i>=0;i--){cov_1o0o1h5bxg.s[6]++;if(d=decorators[i]){cov_1o0o1h5bxg.b[5][0]++;cov_1o0o1h5bxg.s[7]++;r=(cov_1o0o1h5bxg.b[6][0]++,c<3?(cov_1o0o1h5bxg.b[7][0]++,d(r)):(cov_1o0o1h5bxg.b[7][1]++,c>3?(cov_1o0o1h5bxg.b[8][0]++,d(target,key,r)):(cov_1o0o1h5bxg.b[8][1]++,d(target,key))))||(cov_1o0o1h5bxg.b[6][1]++,r);}else{cov_1o0o1h5bxg.b[5][1]++;}}}cov_1o0o1h5bxg.s[8]++;return(cov_1o0o1h5bxg.b[9][0]++,c>3)&&(cov_1o0o1h5bxg.b[9][1]++,r)&&(cov_1o0o1h5bxg.b[9][2]++,Object.defineProperty(target,key,r)),r;}));cov_1o0o1h5bxg.s[9]++;Object.defineProperty(exports, "__esModule", ({value:true}));cov_1o0o1h5bxg.s[10]++;exports.SideMenu=void 0;const autobind_decorator_1=(cov_1o0o1h5bxg.s[11]++,__webpack_require__(/*! autobind-decorator */ "./node_modules/autobind-decorator/lib/esm/index.js"));const sideMenuData_1=(cov_1o0o1h5bxg.s[12]++,__webpack_require__(/*! ./sideMenuData */ "./src/demo-page/SideMenu/sideMenuData.ts"));cov_1o0o1h5bxg.s[13]++;let SideMenu=class SideMenu{constructor(){cov_1o0o1h5bxg.f[1]++;cov_1o0o1h5bxg.s[14]++;this.sideMenuElements={};cov_1o0o1h5bxg.s[15]++;this.initializeSideMenuElements();cov_1o0o1h5bxg.s[16]++;this.cloneSimilarElements();cov_1o0o1h5bxg.s[17]++;this.collectInputs();}collectInputs(){cov_1o0o1h5bxg.f[2]++;cov_1o0o1h5bxg.s[18]++;this.textInputs=[this.sideMenuElements.fromInput,this.sideMenuElements.toInput,this.sideMenuElements.minInput,this.sideMenuElements.maxInput,this.sideMenuElements.stepInput];cov_1o0o1h5bxg.s[19]++;this.toggleInputs=[this.sideMenuElements.doubleToggle,this.sideMenuElements.handlesValuesToggle,this.sideMenuElements.valueScaleToggle,this.sideMenuElements.verticalToggle,this.sideMenuElements.integerToggle,this.sideMenuElements.stepToggle];}initializeSideMenuElements(){cov_1o0o1h5bxg.f[3]++;cov_1o0o1h5bxg.s[20]++;sideMenuData_1.sideMenuData.elements.forEach(elementData=>{cov_1o0o1h5bxg.f[4]++;const{key,attr,cssClasses,name,text}=(cov_1o0o1h5bxg.s[21]++,elementData);cov_1o0o1h5bxg.s[22]++;this.sideMenuElements[key]=document.createElement(name);cov_1o0o1h5bxg.s[23]++;cssClasses.forEach(targetClass=>{cov_1o0o1h5bxg.f[5]++;cov_1o0o1h5bxg.s[24]++;this.sideMenuElements[key].classList.add(targetClass);});cov_1o0o1h5bxg.s[25]++;if(attr){cov_1o0o1h5bxg.b[10][0]++;cov_1o0o1h5bxg.s[26]++;this.sideMenuElements[key].setAttribute(attr.name,attr.value);}else{cov_1o0o1h5bxg.b[10][1]++;}cov_1o0o1h5bxg.s[27]++;if(text){cov_1o0o1h5bxg.b[11][0]++;cov_1o0o1h5bxg.s[28]++;this.sideMenuElements[key].textContent=text;}else{cov_1o0o1h5bxg.b[11][1]++;}});}cloneSimilarElements(){cov_1o0o1h5bxg.f[6]++;cov_1o0o1h5bxg.s[29]++;Object.keys(sideMenuData_1.sideMenuData.cloneList).forEach(key=>{cov_1o0o1h5bxg.f[7]++;const originalElement=(cov_1o0o1h5bxg.s[30]++,this.sideMenuElements[key]);cov_1o0o1h5bxg.s[31]++;sideMenuData_1.sideMenuData.cloneList[key].forEach(cloneName=>{cov_1o0o1h5bxg.f[8]++;cov_1o0o1h5bxg.s[32]++;this.sideMenuElements[cloneName]=originalElement.cloneNode();});});}collectSideMenu(){cov_1o0o1h5bxg.f[9]++;cov_1o0o1h5bxg.s[33]++;Object.keys(sideMenuData_1.sideMenuData.appendList).forEach(key=>{cov_1o0o1h5bxg.f[10]++;const container=(cov_1o0o1h5bxg.s[34]++,this.sideMenuElements[key]);cov_1o0o1h5bxg.s[35]++;sideMenuData_1.sideMenuData.appendList[key].forEach(targetName=>{cov_1o0o1h5bxg.f[11]++;cov_1o0o1h5bxg.s[36]++;container.append(this.sideMenuElements[targetName]);});});}appendToDom(target){cov_1o0o1h5bxg.f[12]++;cov_1o0o1h5bxg.s[37]++;this.collectSideMenu();cov_1o0o1h5bxg.s[38]++;target.append(this.sideMenuElements.sideMenuContainer);}changeToDisplay(isDouble){cov_1o0o1h5bxg.f[13]++;const isNeedToShowTo=(cov_1o0o1h5bxg.s[39]++,(cov_1o0o1h5bxg.b[12][0]++,isDouble)&&(cov_1o0o1h5bxg.b[12][1]++,this.sideMenuElements.toOutput.classList.contains('goby-slider__output-value_hidden')));const isNeedToHideTo=(cov_1o0o1h5bxg.s[40]++,(cov_1o0o1h5bxg.b[13][0]++,!isDouble)&&(cov_1o0o1h5bxg.b[13][1]++,!this.sideMenuElements.toOutput.classList.contains('goby-slider__output-value_hidden')));cov_1o0o1h5bxg.s[41]++;if(isNeedToShowTo){cov_1o0o1h5bxg.b[14][0]++;cov_1o0o1h5bxg.s[42]++;this.sideMenuElements.toOutput.classList.remove('goby-slider__output-value_hidden');cov_1o0o1h5bxg.s[43]++;this.sideMenuElements.toInputWrapper.classList.remove('goby-slider__input-wrapper_hidden');}else{cov_1o0o1h5bxg.b[14][1]++;cov_1o0o1h5bxg.s[44]++;if(isNeedToHideTo){cov_1o0o1h5bxg.b[15][0]++;cov_1o0o1h5bxg.s[45]++;this.sideMenuElements.toOutput.classList.add('goby-slider__output-value_hidden');cov_1o0o1h5bxg.s[46]++;this.sideMenuElements.toInputWrapper.classList.add('goby-slider__input-wrapper_hidden');}else{cov_1o0o1h5bxg.b[15][1]++;}}}changeStepDisplay(step){cov_1o0o1h5bxg.f[14]++;const withoutStep=(cov_1o0o1h5bxg.s[47]++,0);const isNeedToShowTo=(cov_1o0o1h5bxg.s[48]++,(cov_1o0o1h5bxg.b[16][0]++,step!==withoutStep)&&(cov_1o0o1h5bxg.b[16][1]++,this.sideMenuElements.stepInputWrapper.classList.contains('goby-slider__input-wrapper_hidden')));const isNeedToHideTo=(cov_1o0o1h5bxg.s[49]++,(cov_1o0o1h5bxg.b[17][0]++,step===withoutStep)&&(cov_1o0o1h5bxg.b[17][1]++,!this.sideMenuElements.stepInputWrapper.classList.contains('goby-slider__output-value_hidden')));cov_1o0o1h5bxg.s[50]++;if(isNeedToShowTo){cov_1o0o1h5bxg.b[18][0]++;cov_1o0o1h5bxg.s[51]++;this.sideMenuElements.stepInputWrapper.classList.remove('goby-slider__input-wrapper_hidden');}else{cov_1o0o1h5bxg.b[18][1]++;cov_1o0o1h5bxg.s[52]++;if(isNeedToHideTo){cov_1o0o1h5bxg.b[19][0]++;cov_1o0o1h5bxg.s[53]++;this.sideMenuElements.stepInputWrapper.classList.add('goby-slider__input-wrapper_hidden');}else{cov_1o0o1h5bxg.b[19][1]++;}}}updateSideMenu(data){cov_1o0o1h5bxg.f[15]++;const isInteger=(cov_1o0o1h5bxg.s[54]++,data.integer);const withoutStep=(cov_1o0o1h5bxg.s[55]++,0);cov_1o0o1h5bxg.s[56]++;this.sideMenuElements.fromOutput.innerText=isInteger?(cov_1o0o1h5bxg.b[20][0]++,`${Math.round(data.from)}`):(cov_1o0o1h5bxg.b[20][1]++,`${data.from}`);cov_1o0o1h5bxg.s[57]++;this.sideMenuElements.toOutput.innerText=isInteger?(cov_1o0o1h5bxg.b[21][0]++,`${Math.round(data.to)}`):(cov_1o0o1h5bxg.b[21][1]++,`${data.to}`);cov_1o0o1h5bxg.s[58]++;this.sideMenuElements.fromInput.value=isInteger?(cov_1o0o1h5bxg.b[22][0]++,`${Math.round(data.from)}`):(cov_1o0o1h5bxg.b[22][1]++,`${data.from}`);cov_1o0o1h5bxg.s[59]++;this.sideMenuElements.toInput.value=isInteger?(cov_1o0o1h5bxg.b[23][0]++,`${Math.round(data.to)}`):(cov_1o0o1h5bxg.b[23][1]++,`${data.to}`);cov_1o0o1h5bxg.s[60]++;this.sideMenuElements.minInput.value=isInteger?(cov_1o0o1h5bxg.b[24][0]++,`${Math.round(data.min)}`):(cov_1o0o1h5bxg.b[24][1]++,`${data.min}`);cov_1o0o1h5bxg.s[61]++;this.sideMenuElements.maxInput.value=isInteger?(cov_1o0o1h5bxg.b[25][0]++,`${Math.round(data.max)}`):(cov_1o0o1h5bxg.b[25][1]++,`${data.max}`);cov_1o0o1h5bxg.s[62]++;if(data.step!==withoutStep){cov_1o0o1h5bxg.b[26][0]++;cov_1o0o1h5bxg.s[63]++;this.sideMenuElements.stepInput.value=`${data.step}`;}else{cov_1o0o1h5bxg.b[26][1]++;}cov_1o0o1h5bxg.s[64]++;this.sideMenuElements.doubleToggle.checked=data.double;cov_1o0o1h5bxg.s[65]++;this.sideMenuElements.handlesValuesToggle.checked=data.handlesValues;cov_1o0o1h5bxg.s[66]++;this.sideMenuElements.valueScaleToggle.checked=data.valueScale;cov_1o0o1h5bxg.s[67]++;this.sideMenuElements.verticalToggle.checked=data.vertical;cov_1o0o1h5bxg.s[68]++;this.sideMenuElements.integerToggle.checked=data.integer;cov_1o0o1h5bxg.s[69]++;this.sideMenuElements.stepToggle.checked=Boolean(data.step);cov_1o0o1h5bxg.s[70]++;this.changeToDisplay(data.double);cov_1o0o1h5bxg.s[71]++;this.changeStepDisplay(data.step);}};cov_1o0o1h5bxg.s[72]++;SideMenu=__decorate([autobind_decorator_1.default],SideMenu);cov_1o0o1h5bxg.s[73]++;exports.SideMenu=SideMenu;

/***/ }),

/***/ "./src/demo-page/SideMenu/sideMenuData.ts":
/*!************************************************!*\
  !*** ./src/demo-page/SideMenu/sideMenuData.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var cov_26gnhcolpk=function(){var path="C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\demo-page\\SideMenu\\sideMenuData.ts",hash="d83873d7507d7df5891ed99c862cf902ab820790",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\demo-page\\SideMenu\\sideMenuData.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:0},end:{line:3,column:30}},"2":{start:{line:4,column:21},end:{line:283,column:1}},"3":{start:{line:284,column:0},end:{line:284,column:36}}},fnMap:{},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0},f:{},b:{},inputSourceMap:{version:3,file:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\demo-page\\SideMenu\\sideMenuData.ts",sourceRoot:"",sources:["C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\demo-page\\SideMenu\\sideMenuData.ts"],names:[],mappings:"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",sourcesContent:["import {\n  SideMenuData,\n} from './types';\n\nconst sideMenuData: SideMenuData = {\n  elements: [\n    {\n      key: 'currentValuesWrapper',\n      name: 'div',\n      cssClasses: ['goby-slider__outputs'],\n    },\n    {\n      key: 'currentValuesObjective',\n      name: 'span',\n      cssClasses: ['goby-slider__output-objective'],\n      text: '\u0422\u0435\u043A\u0443\u0449\u0435\u0435 \u0437\u0430\u043D\u0447\u0435\u043D\u0438\u0435:',\n    },\n    {\n      key: 'fromOutput',\n      name: 'output',\n      cssClasses: ['goby-slider__output-value', 'goby-slider__output-value_type_from'],\n    },\n    {\n      key: 'toOutput',\n      name: 'output',\n      cssClasses: ['goby-slider__output-value', 'goby-slider__output-value_type_to'],\n    },\n    {\n      key: 'outputsWrapper',\n      name: 'div',\n      cssClasses: ['goby-slider__outputs-wrapper'],\n    },\n    {\n      key: 'toWrapper',\n      name: 'div',\n      cssClasses: ['goby-slider__toggle-item'],\n    },\n    {\n      key: 'doubleToggleWrapper',\n      name: 'label',\n      cssClasses: ['goby-slider__toggle-wrapper'],\n    },\n    {\n      key: 'inputWrapper',\n      name: 'div',\n      cssClasses: ['goby-slider__inputs'],\n    },\n    {\n      key: 'fromInputWrapper',\n      name: 'label',\n      cssClasses: ['goby-slider__input-wrapper'],\n    },\n    {\n      key: 'fromInputDescription',\n      name: 'span',\n      cssClasses: ['goby-slider__input-description'],\n      text: '\u041E\u0442:',\n    },\n    {\n      key: 'stepInputWrapper',\n      name: 'label',\n      cssClasses: ['goby-slider__input-wrapper'],\n    },\n    {\n      key: 'stepInputDescription',\n      name: 'span',\n      cssClasses: ['goby-slider__input-description'],\n      text: '\u0428\u0430\u0433:',\n    },\n    {\n      key: 'minInputWrapper',\n      name: 'label',\n      cssClasses: ['goby-slider__input-wrapper'],\n    },\n    {\n      key: 'minInputDescription',\n      name: 'span',\n      cssClasses: ['goby-slider__input-description'],\n      text: '\u041C\u0438\u043D:',\n    },\n    {\n      key: 'maxInputWrapper',\n      name: 'label',\n      cssClasses: ['goby-slider__input-wrapper'],\n    },\n    {\n      key: 'maxInputDescription',\n      name: 'span',\n      cssClasses: ['goby-slider__input-description'],\n      text: '\u041C\u0430\u043A\u0441:',\n    },\n    {\n      key: 'toInputWrapper',\n      name: 'label',\n      cssClasses: ['goby-slider__input-wrapper'],\n    },\n    {\n      key: 'toInputDescription',\n      name: 'span',\n      cssClasses: ['goby-slider__input-description'],\n      text: '\u0414\u043E:',\n    },\n    {\n      key: 'handlesValuesWrapper',\n      name: 'div',\n      cssClasses: ['goby-slider__toggle-item'],\n    },\n    {\n      key: 'stepWrapper',\n      name: 'div',\n      cssClasses: ['goby-slider__toggle-item'],\n    },\n    {\n      key: 'valueScaleWrapper',\n      name: 'div',\n      cssClasses: ['goby-slider__toggle-item'],\n    },\n    {\n      key: 'verticalWrapper',\n      name: 'div',\n      cssClasses: ['goby-slider__toggle-item'],\n    },\n    {\n      key: 'integerWrapper',\n      name: 'div',\n      cssClasses: ['goby-slider__toggle-item'],\n    },\n    {\n      key: 'inputObjective',\n      name: 'span',\n      cssClasses: ['goby-slider__item-objective'],\n      text: '\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0435: ',\n    },\n    {\n      key: 'fromInput',\n      name: 'input',\n      cssClasses: ['goby-slider__input'],\n      attr: { name: 'type', value: 'number' },\n    },\n    {\n      key: 'toInput',\n      name: 'input',\n      cssClasses: ['goby-slider__input'],\n      attr: { name: 'type', value: 'number' },\n    },\n    {\n      key: 'stepInput',\n      name: 'input',\n      cssClasses: ['goby-slider__input'],\n      attr: { name: 'type', value: 'number' },\n    },\n    {\n      key: 'minInput',\n      name: 'input',\n      cssClasses: ['goby-slider__input'],\n      attr: { name: 'type', value: 'number' },\n    },\n    {\n      key: 'maxInput',\n      name: 'input',\n      cssClasses: ['goby-slider__input'],\n      attr: { name: 'type', value: 'number' },\n    },\n    {\n      key: 'doubleToggleObjective',\n      name: 'span',\n      cssClasses: ['goby-slider__toggle-description'],\n      text: '\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0432\u0442\u043E\u0440\u043E\u0439 \u043F\u043E\u043B\u0437\u0443\u043D\u043E\u043A: ',\n    },\n    {\n      key: 'stepToggleObjective',\n      name: 'span',\n      cssClasses: ['goby-slider__toggle-description'],\n      text: '\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0448\u0430\u0433: ',\n    },\n    {\n      key: 'doubleToggle',\n      name: 'input',\n      cssClasses: ['goby-slider__toggle'],\n      attr: { name: 'type', value: 'checkbox' },\n    },\n    {\n      key: 'stepToggle',\n      name: 'input',\n      cssClasses: ['goby-slider__toggle'],\n      attr: { name: 'type', value: 'checkbox' },\n    },\n    {\n      key: 'doubleToggleBorder',\n      name: 'span',\n      cssClasses: ['goby-slider__toggle-border'],\n    },\n    {\n      key: 'handlesValuesToggleBorder',\n      name: 'span',\n      cssClasses: ['goby-slider__toggle-border'],\n    },\n    {\n      key: 'valueScaleToggleBorder',\n      name: 'span',\n      cssClasses: ['goby-slider__toggle-border'],\n    },\n    {\n      key: 'integerToggleBorder',\n      name: 'span',\n      cssClasses: ['goby-slider__toggle-border'],\n    },\n    {\n      key: 'verticalToggle',\n      name: 'input',\n      cssClasses: ['goby-slider__toggle'],\n      attr: { name: 'type', value: 'checkbox' },\n    },\n    {\n      key: 'verticalToggleBorder',\n      name: 'span',\n      cssClasses: ['goby-slider__toggle-border'],\n    },\n    {\n      key: 'stepToggleBorder',\n      name: 'span',\n      cssClasses: ['goby-slider__toggle-border'],\n    },\n    {\n      key: 'handlesValuesObjective',\n      name: 'span',\n      cssClasses: ['goby-slider__toggle-description'],\n      text: '\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043F\u043E\u0434 \u043F\u043E\u043B\u0437\u0443\u043D\u043A\u0430\u043C\u0438: ',\n    },\n    {\n      key: 'valueScaleObjective',\n      name: 'span',\n      cssClasses: ['goby-slider__toggle-description'],\n      text: '\u0412\u043A\u043B\u044E\u0447\u0438\u0442\u044C \u0448\u043A\u0430\u043B\u0443 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u0439: ',\n    },\n    {\n      key: 'verticalObjective',\n      name: 'span',\n      cssClasses: ['goby-slider__toggle-description'],\n      text: '\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u043F\u043B\u043E\u0441\u043A\u043E\u0441\u0442\u044C: ',\n    },\n    {\n      key: 'integerObjective',\n      name: 'span',\n      cssClasses: ['goby-slider__toggle-description'],\n      text: '\u0422\u043E\u043B\u044C\u043A\u043E \u0446\u0435\u043B\u044B\u0435 \u0447\u0438\u0441\u043B\u0430: ',\n    },\n    {\n      key: 'sideMenuContainer',\n      name: 'div',\n      cssClasses: ['goby-slider__side-menu'],\n    },\n  ],\n  appendList: {\n    currentValuesWrapper: ['currentValuesObjective', 'outputsWrapper'],\n    outputsWrapper: ['fromOutput', 'toOutput'],\n    fromInputWrapper: ['fromInputDescription', 'fromInput'],\n    toInputWrapper: ['toInputDescription', 'toInput'],\n    stepInputWrapper: ['stepInputDescription', 'stepInput'],\n    minInputWrapper: ['minInputDescription', 'minInput'],\n    maxInputWrapper: ['maxInputDescription', 'maxInput'],\n    inputWrapper: ['inputObjective', 'fromInputWrapper', 'toInputWrapper', 'stepInputWrapper',\n      'minInputWrapper', 'maxInputWrapper'],\n    doubleToggleWrapper: ['doubleToggle', 'doubleToggleObjective', 'doubleToggleBorder'],\n    toWrapper: ['doubleToggleWrapper'],\n    stepToggleWrapper: ['stepToggle', 'stepToggleObjective', 'stepToggleBorder'],\n    stepWrapper: ['stepToggleWrapper'],\n    handlesValuesToggleWrapper: ['handlesValuesToggle', 'handlesValuesObjective', 'handlesValuesToggleBorder'],\n    handlesValuesWrapper: ['handlesValuesToggleWrapper'],\n    valueScaleToggleWrapper: ['valueScaleToggle', 'valueScaleObjective', 'valueScaleToggleBorder'],\n    valueScaleWrapper: ['valueScaleToggleWrapper'],\n    verticalToggleWrapper: ['verticalToggle', 'verticalObjective', 'verticalToggleBorder'],\n    verticalWrapper: ['verticalToggleWrapper'],\n    integerToggleWrapper: ['integerToggle', 'integerObjective', 'integerToggleBorder'],\n    integerWrapper: ['integerToggleWrapper'],\n    sideMenuContainer: ['currentValuesWrapper', 'inputWrapper', 'stepWrapper', 'toWrapper', 'handlesValuesWrapper',\n      'valueScaleWrapper', 'verticalWrapper', 'integerWrapper'],\n  },\n  cloneList: {\n    doubleToggle: ['handlesValuesToggle', 'valueScaleToggle', 'integerToggle'],\n    doubleToggleWrapper: ['handlesValuesToggleWrapper', 'valueScaleToggleWrapper',\n      'verticalToggleWrapper', 'integerToggleWrapper', 'stepToggleWrapper'],\n  },\n};\n\nexport {\n  sideMenuData,\n};\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_26gnhcolpk.s[0]++;Object.defineProperty(exports, "__esModule", ({value:true}));cov_26gnhcolpk.s[1]++;exports.sideMenuData=void 0;const sideMenuData=(cov_26gnhcolpk.s[2]++,{elements:[{key:'currentValuesWrapper',name:'div',cssClasses:['goby-slider__outputs']},{key:'currentValuesObjective',name:'span',cssClasses:['goby-slider__output-objective'],text:'Текущее занчение:'},{key:'fromOutput',name:'output',cssClasses:['goby-slider__output-value','goby-slider__output-value_type_from']},{key:'toOutput',name:'output',cssClasses:['goby-slider__output-value','goby-slider__output-value_type_to']},{key:'outputsWrapper',name:'div',cssClasses:['goby-slider__outputs-wrapper']},{key:'toWrapper',name:'div',cssClasses:['goby-slider__toggle-item']},{key:'doubleToggleWrapper',name:'label',cssClasses:['goby-slider__toggle-wrapper']},{key:'inputWrapper',name:'div',cssClasses:['goby-slider__inputs']},{key:'fromInputWrapper',name:'label',cssClasses:['goby-slider__input-wrapper']},{key:'fromInputDescription',name:'span',cssClasses:['goby-slider__input-description'],text:'От:'},{key:'stepInputWrapper',name:'label',cssClasses:['goby-slider__input-wrapper']},{key:'stepInputDescription',name:'span',cssClasses:['goby-slider__input-description'],text:'Шаг:'},{key:'minInputWrapper',name:'label',cssClasses:['goby-slider__input-wrapper']},{key:'minInputDescription',name:'span',cssClasses:['goby-slider__input-description'],text:'Мин:'},{key:'maxInputWrapper',name:'label',cssClasses:['goby-slider__input-wrapper']},{key:'maxInputDescription',name:'span',cssClasses:['goby-slider__input-description'],text:'Макс:'},{key:'toInputWrapper',name:'label',cssClasses:['goby-slider__input-wrapper']},{key:'toInputDescription',name:'span',cssClasses:['goby-slider__input-description'],text:'До:'},{key:'handlesValuesWrapper',name:'div',cssClasses:['goby-slider__toggle-item']},{key:'stepWrapper',name:'div',cssClasses:['goby-slider__toggle-item']},{key:'valueScaleWrapper',name:'div',cssClasses:['goby-slider__toggle-item']},{key:'verticalWrapper',name:'div',cssClasses:['goby-slider__toggle-item']},{key:'integerWrapper',name:'div',cssClasses:['goby-slider__toggle-item']},{key:'inputObjective',name:'span',cssClasses:['goby-slider__item-objective'],text:'Изменить значение: '},{key:'fromInput',name:'input',cssClasses:['goby-slider__input'],attr:{name:'type',value:'number'}},{key:'toInput',name:'input',cssClasses:['goby-slider__input'],attr:{name:'type',value:'number'}},{key:'stepInput',name:'input',cssClasses:['goby-slider__input'],attr:{name:'type',value:'number'}},{key:'minInput',name:'input',cssClasses:['goby-slider__input'],attr:{name:'type',value:'number'}},{key:'maxInput',name:'input',cssClasses:['goby-slider__input'],attr:{name:'type',value:'number'}},{key:'doubleToggleObjective',name:'span',cssClasses:['goby-slider__toggle-description'],text:'Включить второй ползунок: '},{key:'stepToggleObjective',name:'span',cssClasses:['goby-slider__toggle-description'],text:'Включить шаг: '},{key:'doubleToggle',name:'input',cssClasses:['goby-slider__toggle'],attr:{name:'type',value:'checkbox'}},{key:'stepToggle',name:'input',cssClasses:['goby-slider__toggle'],attr:{name:'type',value:'checkbox'}},{key:'doubleToggleBorder',name:'span',cssClasses:['goby-slider__toggle-border']},{key:'handlesValuesToggleBorder',name:'span',cssClasses:['goby-slider__toggle-border']},{key:'valueScaleToggleBorder',name:'span',cssClasses:['goby-slider__toggle-border']},{key:'integerToggleBorder',name:'span',cssClasses:['goby-slider__toggle-border']},{key:'verticalToggle',name:'input',cssClasses:['goby-slider__toggle'],attr:{name:'type',value:'checkbox'}},{key:'verticalToggleBorder',name:'span',cssClasses:['goby-slider__toggle-border']},{key:'stepToggleBorder',name:'span',cssClasses:['goby-slider__toggle-border']},{key:'handlesValuesObjective',name:'span',cssClasses:['goby-slider__toggle-description'],text:'Включить значения под ползунками: '},{key:'valueScaleObjective',name:'span',cssClasses:['goby-slider__toggle-description'],text:'Включить шкалу значений: '},{key:'verticalObjective',name:'span',cssClasses:['goby-slider__toggle-description'],text:'Изменить плоскость: '},{key:'integerObjective',name:'span',cssClasses:['goby-slider__toggle-description'],text:'Только целые числа: '},{key:'sideMenuContainer',name:'div',cssClasses:['goby-slider__side-menu']}],appendList:{currentValuesWrapper:['currentValuesObjective','outputsWrapper'],outputsWrapper:['fromOutput','toOutput'],fromInputWrapper:['fromInputDescription','fromInput'],toInputWrapper:['toInputDescription','toInput'],stepInputWrapper:['stepInputDescription','stepInput'],minInputWrapper:['minInputDescription','minInput'],maxInputWrapper:['maxInputDescription','maxInput'],inputWrapper:['inputObjective','fromInputWrapper','toInputWrapper','stepInputWrapper','minInputWrapper','maxInputWrapper'],doubleToggleWrapper:['doubleToggle','doubleToggleObjective','doubleToggleBorder'],toWrapper:['doubleToggleWrapper'],stepToggleWrapper:['stepToggle','stepToggleObjective','stepToggleBorder'],stepWrapper:['stepToggleWrapper'],handlesValuesToggleWrapper:['handlesValuesToggle','handlesValuesObjective','handlesValuesToggleBorder'],handlesValuesWrapper:['handlesValuesToggleWrapper'],valueScaleToggleWrapper:['valueScaleToggle','valueScaleObjective','valueScaleToggleBorder'],valueScaleWrapper:['valueScaleToggleWrapper'],verticalToggleWrapper:['verticalToggle','verticalObjective','verticalToggleBorder'],verticalWrapper:['verticalToggleWrapper'],integerToggleWrapper:['integerToggle','integerObjective','integerToggleBorder'],integerWrapper:['integerToggleWrapper'],sideMenuContainer:['currentValuesWrapper','inputWrapper','stepWrapper','toWrapper','handlesValuesWrapper','valueScaleWrapper','verticalWrapper','integerWrapper']},cloneList:{doubleToggle:['handlesValuesToggle','valueScaleToggle','integerToggle'],doubleToggleWrapper:['handlesValuesToggleWrapper','valueScaleToggleWrapper','verticalToggleWrapper','integerToggleWrapper','stepToggleWrapper']}});cov_26gnhcolpk.s[3]++;exports.sideMenuData=sideMenuData;

/***/ }),

/***/ "./src/demo-page/indexData.ts":
/*!************************************!*\
  !*** ./src/demo-page/indexData.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var cov_278dxdff3q=function(){var path="C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\demo-page\\indexData.ts",hash="e39738b442af24b45f018c93d9ff50939b7dbc0d",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\demo-page\\indexData.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:0},end:{line:3,column:32}},"2":{start:{line:4,column:23},end:{line:53,column:1}},"3":{start:{line:54,column:0},end:{line:54,column:40}}},fnMap:{},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0},f:{},b:{},inputSourceMap:{version:3,file:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\demo-page\\indexData.ts",sourceRoot:"",sources:["C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\demo-page\\indexData.ts"],names:[],mappings:";;;AAEA,MAAM,cAAc,GAA8B;IAChD;QACE,gBAAgB,EAAE,QAAQ,CAAC,aAAa,CAAC,6BAA6B,CAAE;QACxE,aAAa,EAAE;YACb,GAAG,EAAE,CAAC,GAAG;YACT,MAAM,EAAE,IAAI;YACZ,aAAa,EAAE,IAAI;YACnB,IAAI,EAAE,CAAC;YACP,OAAO,EAAE,KAAK;SACf;KACF,EAAE;QACD,gBAAgB,EAAE,QAAQ,CAAC,aAAa,CAAC,6BAA6B,CAAE;QACxE,aAAa,EAAE;YACb,GAAG,EAAE,CAAC,KAAK;YACX,GAAG,EAAE,KAAK;YACV,MAAM,EAAE,IAAI;YACZ,aAAa,EAAE,IAAI;YACnB,QAAQ,EAAE,IAAI;YACd,IAAI,EAAE,CAAC,IAAI;YACX,EAAE,EAAE,IAAI;YACR,OAAO,EAAE,KAAK;SACf;KACF,EAAE;QACD,gBAAgB,EAAE,QAAQ,CAAC,aAAa,CAAC,6BAA6B,CAAE;QACxE,aAAa,EAAE;YACb,GAAG,EAAE,CAAC;YACN,GAAG,EAAE,EAAE;YACP,IAAI,EAAE,CAAC;SACR;KACF,EAAE;QACD,gBAAgB,EAAE,QAAQ,CAAC,aAAa,CAAC,6BAA6B,CAAE;QACxE,aAAa,EAAE;YACb,GAAG,EAAE,CAAC;YACN,GAAG,EAAE,IAAI;YACT,UAAU,EAAE,KAAK;YACjB,OAAO,EAAE,KAAK;YACd,IAAI,EAAE,GAAG;SACV;KACF,EAAE;QACD,gBAAgB,EAAE,QAAQ,CAAC,aAAa,CAAC,6BAA6B,CAAE;QACxE,aAAa,EAAE;YACb,GAAG,EAAE,CAAC;YACN,GAAG,EAAE,IAAI;YACT,MAAM,EAAE,IAAI;YACZ,aAAa,EAAE,IAAI;YACnB,IAAI,EAAE,EAAE;YACR,OAAO,EAAE,KAAK;SACf;KACF;CACF,CAAC;AAEO,wCAAc",sourcesContent:["import { UserSliderSettings } from './types';\n\nconst sliderSettings: Array<UserSliderSettings> = [\n  {\n    containerElement: document.querySelector('.js-slider-wrapper_number_1')!,\n    sliderOptions: {\n      min: -100,\n      double: true,\n      handlesValues: true,\n      step: 5,\n      integer: false,\n    },\n  }, {\n    containerElement: document.querySelector('.js-slider-wrapper_number_2')!,\n    sliderOptions: {\n      min: -10000,\n      max: 10000,\n      double: true,\n      handlesValues: true,\n      vertical: true,\n      from: -5000,\n      to: 5000,\n      integer: false,\n    },\n  }, {\n    containerElement: document.querySelector('.js-slider-wrapper_number_3')!,\n    sliderOptions: {\n      min: 0,\n      max: 10,\n      from: 5,\n    },\n  }, {\n    containerElement: document.querySelector('.js-slider-wrapper_number_4')!,\n    sliderOptions: {\n      min: 0,\n      max: 1000,\n      valueScale: false,\n      integer: false,\n      from: 500,\n    },\n  }, {\n    containerElement: document.querySelector('.js-slider-wrapper_number_5')!,\n    sliderOptions: {\n      min: 0,\n      max: 1000,\n      double: true,\n      handlesValues: true,\n      step: 10,\n      integer: false,\n    },\n  },\n];\n\nexport { sliderSettings };\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_278dxdff3q.s[0]++;Object.defineProperty(exports, "__esModule", ({value:true}));cov_278dxdff3q.s[1]++;exports.sliderSettings=void 0;const sliderSettings=(cov_278dxdff3q.s[2]++,[{containerElement:document.querySelector('.js-slider-wrapper_number_1'),sliderOptions:{min:-100,double:true,handlesValues:true,step:5,integer:false}},{containerElement:document.querySelector('.js-slider-wrapper_number_2'),sliderOptions:{min:-10000,max:10000,double:true,handlesValues:true,vertical:true,from:-5000,to:5000,integer:false}},{containerElement:document.querySelector('.js-slider-wrapper_number_3'),sliderOptions:{min:0,max:10,from:5}},{containerElement:document.querySelector('.js-slider-wrapper_number_4'),sliderOptions:{min:0,max:1000,valueScale:false,integer:false,from:500}},{containerElement:document.querySelector('.js-slider-wrapper_number_5'),sliderOptions:{min:0,max:1000,double:true,handlesValues:true,step:10,integer:false}}]);cov_278dxdff3q.s[3]++;exports.sliderSettings=sliderSettings;

/***/ }),

/***/ "./src/plugin/Model/Model.ts":
/*!***********************************!*\
  !*** ./src/plugin/Model/Model.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var cov_2hfx14x6de=function(){var path="C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\Model\\Model.ts",hash="f88ca3c89f37ed5c2f8d9cca453177ac1570bb41",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\Model\\Model.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:0},end:{line:3,column:23}},"2":{start:{line:6,column:8},end:{line:6,column:37}},"3":{start:{line:7,column:24},end:{line:7,column:41}},"4":{start:{line:8,column:21},end:{line:8,column:62}},"5":{start:{line:9,column:19},end:{line:9,column:56}},"6":{start:{line:10,column:8},end:{line:10,column:38}},"7":{start:{line:11,column:8},end:{line:11,column:34}},"8":{start:{line:12,column:8},end:{line:18,column:10}},"9":{start:{line:21,column:24},end:{line:21,column:41}},"10":{start:{line:22,column:28},end:{line:22,column:56}},"11":{start:{line:23,column:8},end:{line:30,column:11}},"12":{start:{line:24,column:26},end:{line:24,column:38}},"13":{start:{line:25,column:12},end:{line:29,column:15}},"14":{start:{line:31,column:8},end:{line:31,column:40}},"15":{start:{line:34,column:25},end:{line:34,column:43}},"16":{start:{line:35,column:31},end:{line:35,column:77}},"17":{start:{line:36,column:30},end:{line:36,column:76}},"18":{start:{line:37,column:31},end:{line:44,column:9}},"19":{start:{line:38,column:39},end:{line:38,column:93}},"20":{start:{line:39,column:37},end:{line:39,column:91}},"21":{start:{line:40,column:12},end:{line:41,column:35}},"22":{start:{line:41,column:16},end:{line:41,column:35}},"23":{start:{line:42,column:12},end:{line:43,column:35}},"24":{start:{line:43,column:16},end:{line:43,column:35}},"25":{start:{line:45,column:33},end:{line:63,column:9}},"26":{start:{line:46,column:12},end:{line:47,column:53}},"27":{start:{line:47,column:16},end:{line:47,column:53}},"28":{start:{line:48,column:12},end:{line:49,column:53}},"29":{start:{line:49,column:16},end:{line:49,column:53}},"30":{start:{line:50,column:42},end:{line:50,column:81}},"31":{start:{line:51,column:45},end:{line:51,column:85}},"32":{start:{line:52,column:40},end:{line:52,column:77}},"33":{start:{line:53,column:39},end:{line:53,column:107}},"34":{start:{line:54,column:37},end:{line:54,column:105}},"35":{start:{line:55,column:12},end:{line:60,column:13}},"36":{start:{line:56,column:16},end:{line:56,column:52}},"37":{start:{line:58,column:17},end:{line:60,column:13}},"38":{start:{line:59,column:16},end:{line:59,column:44}},"39":{start:{line:61,column:12},end:{line:62,column:54}},"40":{start:{line:62,column:16},end:{line:62,column:54}},"41":{start:{line:64,column:8},end:{line:65,column:31}},"42":{start:{line:65,column:12},end:{line:65,column:31}},"43":{start:{line:66,column:8},end:{line:67,column:29}},"44":{start:{line:67,column:12},end:{line:67,column:29}},"45":{start:{line:68,column:8},end:{line:68,column:26}},"46":{start:{line:71,column:8},end:{line:71,column:64}},"47":{start:{line:74,column:8},end:{line:74,column:65}},"48":{start:{line:77,column:27},end:{line:77,column:94}},"49":{start:{line:78,column:31},end:{line:78,column:71}},"50":{start:{line:79,column:26},end:{line:79,column:67}},"51":{start:{line:80,column:8},end:{line:87,column:9}},"52":{start:{line:82,column:16},end:{line:82,column:48}},"53":{start:{line:84,column:16},end:{line:84,column:48}},"54":{start:{line:86,column:16},end:{line:86,column:48}},"55":{start:{line:90,column:8},end:{line:91,column:26}},"56":{start:{line:91,column:12},end:{line:91,column:26}},"57":{start:{line:92,column:31},end:{line:92,column:81}},"58":{start:{line:93,column:29},end:{line:93,column:77}},"59":{start:{line:94,column:30},end:{line:94,column:81}},"60":{start:{line:95,column:37},end:{line:95,column:94}},"61":{start:{line:96,column:39},end:{line:96,column:94}},"62":{start:{line:97,column:8},end:{line:98,column:26}},"63":{start:{line:98,column:12},end:{line:98,column:26}},"64":{start:{line:99,column:8},end:{line:100,column:24}},"65":{start:{line:100,column:12},end:{line:100,column:24}},"66":{start:{line:101,column:8},end:{line:101,column:62}},"67":{start:{line:104,column:26},end:{line:104,column:180}},"68":{start:{line:105,column:8},end:{line:105,column:49}},"69":{start:{line:108,column:30},end:{line:108,column:140}},"70":{start:{line:109,column:32},end:{line:109,column:141}},"71":{start:{line:110,column:8},end:{line:117,column:9}},"72":{start:{line:112,column:16},end:{line:112,column:37}},"73":{start:{line:114,column:16},end:{line:114,column:39}},"74":{start:{line:116,column:16},end:{line:116,column:29}},"75":{start:{line:120,column:32},end:{line:120,column:69}},"76":{start:{line:121,column:8},end:{line:122,column:25}},"77":{start:{line:122,column:12},end:{line:122,column:25}},"78":{start:{line:123,column:8},end:{line:125,column:86}},"79":{start:{line:128,column:22},end:{line:128,column:51}},"80":{start:{line:129,column:29},end:{line:130,column:37}},"81":{start:{line:131,column:8},end:{line:139,column:9}},"82":{start:{line:132,column:12},end:{line:137,column:15}},"83":{start:{line:138,column:12},end:{line:138,column:19}},"84":{start:{line:140,column:23},end:{line:140,column:65}},"85":{start:{line:141,column:26},end:{line:141,column:115}},"86":{start:{line:142,column:25},end:{line:144,column:60}},"87":{start:{line:145,column:8},end:{line:146,column:19}},"88":{start:{line:146,column:12},end:{line:146,column:19}},"89":{start:{line:147,column:8},end:{line:151,column:11}},"90":{start:{line:154,column:23},end:{line:154,column:81}},"91":{start:{line:155,column:8},end:{line:159,column:11}},"92":{start:{line:162,column:31},end:{line:162,column:131}},"93":{start:{line:162,column:43},end:{line:162,column:130}},"94":{start:{line:163,column:8},end:{line:170,column:10}},"95":{start:{line:173,column:0},end:{line:173,column:22}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:5,column:4},end:{line:5,column:5}},loc:{start:{line:5,column:28},end:{line:19,column:5}},line:5},"1":{name:"(anonymous_1)",decl:{start:{line:20,column:4},end:{line:20,column:5}},loc:{start:{line:20,column:19},end:{line:32,column:5}},line:20},"2":{name:"(anonymous_2)",decl:{start:{line:23,column:28},end:{line:23,column:29}},loc:{start:{line:23,column:37},end:{line:30,column:9}},line:23},"3":{name:"(anonymous_3)",decl:{start:{line:33,column:4},end:{line:33,column:5}},loc:{start:{line:33,column:28},end:{line:69,column:5}},line:33},"4":{name:"(anonymous_4)",decl:{start:{line:37,column:31},end:{line:37,column:32}},loc:{start:{line:37,column:37},end:{line:44,column:9}},line:37},"5":{name:"(anonymous_5)",decl:{start:{line:45,column:33},end:{line:45,column:34}},loc:{start:{line:45,column:39},end:{line:63,column:9}},line:45},"6":{name:"(anonymous_6)",decl:{start:{line:70,column:4},end:{line:70,column:5}},loc:{start:{line:70,column:27},end:{line:72,column:5}},line:70},"7":{name:"(anonymous_7)",decl:{start:{line:73,column:4},end:{line:73,column:5}},loc:{start:{line:73,column:21},end:{line:75,column:5}},line:73},"8":{name:"(anonymous_8)",decl:{start:{line:76,column:4},end:{line:76,column:5}},loc:{start:{line:76,column:36},end:{line:88,column:5}},line:76},"9":{name:"(anonymous_9)",decl:{start:{line:89,column:4},end:{line:89,column:5}},loc:{start:{line:89,column:40},end:{line:102,column:5}},line:89},"10":{name:"(anonymous_10)",decl:{start:{line:103,column:4},end:{line:103,column:5}},loc:{start:{line:103,column:36},end:{line:106,column:5}},line:103},"11":{name:"(anonymous_11)",decl:{start:{line:107,column:4},end:{line:107,column:5}},loc:{start:{line:107,column:46},end:{line:118,column:5}},line:107},"12":{name:"(anonymous_12)",decl:{start:{line:119,column:4},end:{line:119,column:5}},loc:{start:{line:119,column:38},end:{line:126,column:5}},line:119},"13":{name:"(anonymous_13)",decl:{start:{line:127,column:4},end:{line:127,column:5}},loc:{start:{line:127,column:37},end:{line:152,column:5}},line:127},"14":{name:"(anonymous_14)",decl:{start:{line:153,column:4},end:{line:153,column:5}},loc:{start:{line:153,column:25},end:{line:160,column:5}},line:153},"15":{name:"(anonymous_15)",decl:{start:{line:161,column:4},end:{line:161,column:5}},loc:{start:{line:161,column:33},end:{line:171,column:5}},line:161},"16":{name:"(anonymous_16)",decl:{start:{line:162,column:31},end:{line:162,column:32}},loc:{start:{line:162,column:43},end:{line:162,column:130}},line:162}},branchMap:{"0":{loc:{start:{line:8,column:21},end:{line:8,column:62}},type:"cond-expr",locations:[{start:{line:8,column:36},end:{line:8,column:48}},{start:{line:8,column:51},end:{line:8,column:62}}],line:8},"1":{loc:{start:{line:9,column:19},end:{line:9,column:56}},type:"cond-expr",locations:[{start:{line:9,column:32},end:{line:9,column:42}},{start:{line:9,column:45},end:{line:9,column:56}}],line:9},"2":{loc:{start:{line:35,column:31},end:{line:35,column:77}},type:"binary-expr",locations:[{start:{line:35,column:31},end:{line:35,column:53}},{start:{line:35,column:57},end:{line:35,column:77}}],line:35},"3":{loc:{start:{line:36,column:30},end:{line:36,column:76}},type:"binary-expr",locations:[{start:{line:36,column:30},end:{line:36,column:51}},{start:{line:36,column:55},end:{line:36,column:76}}],line:36},"4":{loc:{start:{line:38,column:39},end:{line:38,column:93}},type:"binary-expr",locations:[{start:{line:38,column:39},end:{line:38,column:60}},{start:{line:38,column:64},end:{line:38,column:93}}],line:38},"5":{loc:{start:{line:39,column:37},end:{line:39,column:91}},type:"binary-expr",locations:[{start:{line:39,column:37},end:{line:39,column:58}},{start:{line:39,column:62},end:{line:39,column:91}}],line:39},"6":{loc:{start:{line:40,column:12},end:{line:41,column:35}},type:"if",locations:[{start:{line:40,column:12},end:{line:41,column:35}},{start:{line:40,column:12},end:{line:41,column:35}}],line:40},"7":{loc:{start:{line:42,column:12},end:{line:43,column:35}},type:"if",locations:[{start:{line:42,column:12},end:{line:43,column:35}},{start:{line:42,column:12},end:{line:43,column:35}}],line:42},"8":{loc:{start:{line:46,column:12},end:{line:47,column:53}},type:"if",locations:[{start:{line:46,column:12},end:{line:47,column:53}},{start:{line:46,column:12},end:{line:47,column:53}}],line:46},"9":{loc:{start:{line:48,column:12},end:{line:49,column:53}},type:"if",locations:[{start:{line:48,column:12},end:{line:49,column:53}},{start:{line:48,column:12},end:{line:49,column:53}}],line:48},"10":{loc:{start:{line:50,column:42},end:{line:50,column:81}},type:"binary-expr",locations:[{start:{line:50,column:42},end:{line:50,column:55}},{start:{line:50,column:59},end:{line:50,column:81}}],line:50},"11":{loc:{start:{line:51,column:45},end:{line:51,column:85}},type:"binary-expr",locations:[{start:{line:51,column:45},end:{line:51,column:59}},{start:{line:51,column:63},end:{line:51,column:85}}],line:51},"12":{loc:{start:{line:52,column:40},end:{line:52,column:77}},type:"binary-expr",locations:[{start:{line:52,column:40},end:{line:52,column:53}},{start:{line:52,column:57},end:{line:52,column:77}}],line:52},"13":{loc:{start:{line:53,column:39},end:{line:53,column:107}},type:"binary-expr",locations:[{start:{line:53,column:39},end:{line:53,column:60}},{start:{line:53,column:64},end:{line:53,column:107}}],line:53},"14":{loc:{start:{line:54,column:37},end:{line:54,column:105}},type:"binary-expr",locations:[{start:{line:54,column:37},end:{line:54,column:56}},{start:{line:54,column:60},end:{line:54,column:105}}],line:54},"15":{loc:{start:{line:55,column:12},end:{line:60,column:13}},type:"if",locations:[{start:{line:55,column:12},end:{line:60,column:13}},{start:{line:55,column:12},end:{line:60,column:13}}],line:55},"16":{loc:{start:{line:58,column:17},end:{line:60,column:13}},type:"if",locations:[{start:{line:58,column:17},end:{line:60,column:13}},{start:{line:58,column:17},end:{line:60,column:13}}],line:58},"17":{loc:{start:{line:61,column:12},end:{line:62,column:54}},type:"if",locations:[{start:{line:61,column:12},end:{line:62,column:54}},{start:{line:61,column:12},end:{line:62,column:54}}],line:61},"18":{loc:{start:{line:64,column:8},end:{line:65,column:31}},type:"if",locations:[{start:{line:64,column:8},end:{line:65,column:31}},{start:{line:64,column:8},end:{line:65,column:31}}],line:64},"19":{loc:{start:{line:66,column:8},end:{line:67,column:29}},type:"if",locations:[{start:{line:66,column:8},end:{line:67,column:29}},{start:{line:66,column:8},end:{line:67,column:29}}],line:66},"20":{loc:{start:{line:77,column:27},end:{line:77,column:94}},type:"binary-expr",locations:[{start:{line:77,column:27},end:{line:77,column:51}},{start:{line:77,column:55},end:{line:77,column:94}}],line:77},"21":{loc:{start:{line:79,column:26},end:{line:79,column:67}},type:"binary-expr",locations:[{start:{line:79,column:26},end:{line:79,column:49}},{start:{line:79,column:53},end:{line:79,column:67}}],line:79},"22":{loc:{start:{line:80,column:8},end:{line:87,column:9}},type:"switch",locations:[{start:{line:81,column:12},end:{line:82,column:48}},{start:{line:83,column:12},end:{line:84,column:48}},{start:{line:85,column:12},end:{line:86,column:48}}],line:80},"23":{loc:{start:{line:90,column:8},end:{line:91,column:26}},type:"if",locations:[{start:{line:90,column:8},end:{line:91,column:26}},{start:{line:90,column:8},end:{line:91,column:26}}],line:90},"24":{loc:{start:{line:95,column:37},end:{line:95,column:94}},type:"binary-expr",locations:[{start:{line:95,column:37},end:{line:95,column:50}},{start:{line:95,column:54},end:{line:95,column:94}}],line:95},"25":{loc:{start:{line:96,column:39},end:{line:96,column:94}},type:"binary-expr",locations:[{start:{line:96,column:39},end:{line:96,column:52}},{start:{line:96,column:56},end:{line:96,column:94}}],line:96},"26":{loc:{start:{line:97,column:8},end:{line:98,column:26}},type:"if",locations:[{start:{line:97,column:8},end:{line:98,column:26}},{start:{line:97,column:8},end:{line:98,column:26}}],line:97},"27":{loc:{start:{line:99,column:8},end:{line:100,column:24}},type:"if",locations:[{start:{line:99,column:8},end:{line:100,column:24}},{start:{line:99,column:8},end:{line:100,column:24}}],line:99},"28":{loc:{start:{line:101,column:15},end:{line:101,column:61}},type:"cond-expr",locations:[{start:{line:101,column:48},end:{line:101,column:54}},{start:{line:101,column:57},end:{line:101,column:61}}],line:101},"29":{loc:{start:{line:110,column:8},end:{line:117,column:9}},type:"switch",locations:[{start:{line:111,column:12},end:{line:112,column:37}},{start:{line:113,column:12},end:{line:114,column:39}},{start:{line:115,column:12},end:{line:116,column:29}}],line:110},"30":{loc:{start:{line:121,column:8},end:{line:122,column:25}},type:"if",locations:[{start:{line:121,column:8},end:{line:122,column:25}},{start:{line:121,column:8},end:{line:122,column:25}}],line:121},"31":{loc:{start:{line:123,column:15},end:{line:125,column:85}},type:"cond-expr",locations:[{start:{line:124,column:14},end:{line:124,column:85}},{start:{line:125,column:14},end:{line:125,column:85}}],line:123},"32":{loc:{start:{line:129,column:29},end:{line:130,column:37}},type:"binary-expr",locations:[{start:{line:129,column:30},end:{line:129,column:56}},{start:{line:129,column:60},end:{line:129,column:84}},{start:{line:130,column:15},end:{line:130,column:37}}],line:129},"33":{loc:{start:{line:131,column:8},end:{line:139,column:9}},type:"if",locations:[{start:{line:131,column:8},end:{line:139,column:9}},{start:{line:131,column:8},end:{line:139,column:9}}],line:131},"34":{loc:{start:{line:140,column:23},end:{line:140,column:65}},type:"cond-expr",locations:[{start:{line:140,column:52},end:{line:140,column:58}},{start:{line:140,column:61},end:{line:140,column:65}}],line:140},"35":{loc:{start:{line:142,column:25},end:{line:144,column:60}},type:"cond-expr",locations:[{start:{line:143,column:14},end:{line:143,column:52}},{start:{line:144,column:14},end:{line:144,column:60}}],line:142},"36":{loc:{start:{line:145,column:8},end:{line:146,column:19}},type:"if",locations:[{start:{line:145,column:8},end:{line:146,column:19}},{start:{line:145,column:8},end:{line:146,column:19}}],line:145}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0,"74":0,"75":0,"76":0,"77":0,"78":0,"79":0,"80":0,"81":0,"82":0,"83":0,"84":0,"85":0,"86":0,"87":0,"88":0,"89":0,"90":0,"91":0,"92":0,"93":0,"94":0,"95":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0],"17":[0,0],"18":[0,0],"19":[0,0],"20":[0,0],"21":[0,0],"22":[0,0,0],"23":[0,0],"24":[0,0],"25":[0,0],"26":[0,0],"27":[0,0],"28":[0,0],"29":[0,0,0],"30":[0,0],"31":[0,0],"32":[0,0,0],"33":[0,0],"34":[0,0],"35":[0,0],"36":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\Model\\Model.ts",sourceRoot:"",sources:["C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\Model\\Model.ts"],names:[],mappings:"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",sourcesContent:["import {\n  BasicModelSettings,\n  CalculationData,\n  DataForRefreshingModel,\n  DataForValueScale,\n  UnspecifiedValueTarget, ValueData,\n  ValueTarget,\n} from './types';\nimport { SliderOptions } from '../types';\n\nclass Model {\n  public values: BasicModelSettings;\n\n  private readonly getOptions: () => SliderOptions;\n\n  constructor(getOptions: () => SliderOptions) {\n    this.getOptions = getOptions;\n    const options: SliderOptions = this.getOptions();\n\n    const from: number = options.from ? options.from : options.min;\n    const to: number = options.to ? options.to : options.max;\n    this.getOptions().from = from;\n    this.getOptions().to = to;\n\n    this.values = {\n      min: Model.convertFractional(options.min),\n      max: Model.convertFractional(options.max),\n      from: Model.convertFractional(from),\n      to: Model.convertFractional(to),\n      step: Model.convertFractional(Number(options.step)),\n    };\n  }\n\n  public updateValues(): void {\n    const options: SliderOptions = this.getOptions();\n    const modelValues: Array<ValueTarget> = ['min', 'max', 'from', 'to'];\n\n    modelValues.forEach((key: ValueTarget) => {\n      const value: number = options[key] as number;\n\n      this.writeDataToModel({\n        target: key,\n        value: Model.convertFractional(value),\n        isDouble: options.double,\n      });\n    });\n\n    this.values.step = options.step;\n  }\n\n  private fixIncorrectValue(data: DataForRefreshingModel): number {\n    let fixedValue: number = Number(data.value);\n    const isHandleTarget: boolean = data.target === 'from' || data.target === 'to';\n    const isRangeTarget: boolean = data.target === 'min' || data.target === 'max';\n\n    const fixRangeValues: () => void = () => {\n      const isMinBiggerThenMax: boolean = data.target === 'min' && data.value >= this.values.max;\n      const isMaxLessThenMin: boolean = data.target === 'max' && data.value <= this.values.min;\n\n      if (isMinBiggerThenMax) fixedValue -= 0.01;\n      if (isMaxLessThenMin) fixedValue += 0.01;\n    };\n\n    const fixHandlesValues: () => void = () => {\n      if (fixedValue > Number(this.values.max)) fixedValue = Number(this.values.max);\n      if (fixedValue < Number(this.values.min)) fixedValue = Number(this.values.min);\n\n      const isDoubleAndFromTarget: boolean = data.isDouble && data.target === 'from';\n      const isNotDoubleAndFromTarget: boolean = !data.isDouble && data.target === 'from';\n      const isDoubleAndToTarget: boolean = data.isDouble && data.target === 'to';\n      const isFromBiggerThenTo: boolean = isDoubleAndFromTarget && Number(data.value) > Number(this.values.to);\n      const isToLessThenFrom: boolean = isDoubleAndToTarget && Number(data.value) < Number(this.values.from);\n\n      if (isFromBiggerThenTo) {\n        fixedValue = Number(this.values.to);\n      } else if (isNotDoubleAndFromTarget) {\n        this.values.to = fixedValue;\n      }\n      if (isToLessThenFrom) fixedValue = Number(this.values.from);\n    };\n\n    if (isHandleTarget) fixHandlesValues();\n    if (isRangeTarget) fixRangeValues();\n\n    return fixedValue;\n  }\n\n  public writeDataToModel(data: DataForRefreshingModel): void {\n    this.values[data.target] = this.fixIncorrectValue(data);\n  }\n\n  public getTotalValues(): number {\n    return Number(this.values.max) - Number(this.values.min);\n  }\n\n  public static convertFractional(value: number): number {\n    const isLastZero: boolean = !Number.isInteger(value) && `${value.toFixed(2)}`.slice(-1) === '0';\n    const areLastTwoZero: boolean = `${value.toFixed(2)}`.slice(-2) === '00';\n    const isInteger: boolean = Number.isInteger(value) || areLastTwoZero;\n\n    switch (true) {\n      case isInteger:\n        return Number(value.toFixed(0));\n      case isLastZero:\n        return Number(value.toFixed(1));\n      default:\n        return Number(value.toFixed(2));\n    }\n  }\n\n  private determineValueTarget(value: number, target: UnspecifiedValueTarget): ValueTarget {\n    if (target !== 'unspecified') return target;\n\n    const fromDifference: number = Math.abs(Number(this.values.from) - Number(value));\n    const toDifference: number = Math.abs(Number(this.values.to) - Number(value));\n    const isFromEqualTo: boolean = Number(this.values.from) === Number(this.values.to);\n    const isValueLessThenEqual: boolean = isFromEqualTo && Number(value) < Number(this.values.from);\n    const isValueBiggerThenEqual: boolean = isFromEqualTo && Number(value) > Number(this.values.to);\n\n    if (isValueLessThenEqual) return 'from';\n    if (isValueBiggerThenEqual) return 'to';\n    return fromDifference <= toDifference ? 'from' : 'to';\n  }\n\n  private calculateValue(calculationData: CalculationData): number {\n    const newValue: number = (Number(this.values.min) + (Number(calculationData.position) / (\n      Number(calculationData.sliderWidth) / (Number(this.values.max) - Number(this.values.min)))\n    ));\n    return Model.convertFractional(newValue);\n  }\n\n  private calculateOutStepRangeValue(value: number, target: 'from' | 'to'): number | false {\n    const lessStepValue: number = Model.convertFractional(Math.floor(\n      this.values[target] / Number(this.values.step),\n    ) * Number(this.values.step));\n    const biggerStepValue: number = Model.convertFractional(Math.ceil(\n      this.values[target] / Number(this.values.step),\n    ) * Number(this.values.step));\n\n    switch (true) {\n      case value <= lessStepValue:\n        return lessStepValue;\n      case value >= biggerStepValue:\n        return biggerStepValue;\n      default:\n        return false;\n    }\n  }\n\n  private calculateStepValue(value: number, target: 'from' | 'to'): number | false {\n    const valueDifference: number = Math.abs(value - this.values[target]);\n\n    if (valueDifference < this.values.step) return false;\n\n    return value < this.values[target]\n      ? Model.convertFractional(this.values[target] - Number(this.values.step))\n      : Model.convertFractional(this.values[target] + Number(this.values.step));\n  }\n\n  public writeValueFromPosition(settings: CalculationData): void {\n    const value: number = this.calculateValue(settings);\n    const isStepTarget = (settings.target === 'from' || settings.target === 'to')\n      && this.values.step !== 0;\n\n    if (!isStepTarget) {\n      this.writeValue({\n        value,\n        target: settings.target,\n        isDouble: settings.isDouble,\n        sliderWidth: settings.sliderWidth,\n      });\n      return;\n    }\n\n    const target: 'from' | 'to' = settings.target === 'from' ? 'from' : 'to';\n    const isInRange: boolean = Number.isInteger(Model.convertFractional(this.values[target] / Number(this.values.step)));\n    const newValue: number | false = isInRange\n      ? this.calculateStepValue(value, target)\n      : this.calculateOutStepRangeValue(value, target);\n    if (newValue === false) return;\n    this.writeDataToModel({\n      target,\n      value: newValue,\n      isDouble: settings.isDouble,\n    });\n  }\n\n  public writeValue(settings: ValueData): void {\n    const target: ValueTarget = this.determineValueTarget(settings.value, settings.target);\n\n    this.writeDataToModel({\n      target,\n      value: settings.value,\n      isDouble: settings.isDouble,\n    });\n  }\n\n  public calculateDataForValueScale(): DataForValueScale {\n    const calculateValue = (ratio: number) => (\n      ((Number(this.values.max) - Number(this.values.min)) * ratio) + Number(this.values.min)\n    );\n\n    return {\n      min: String(Model.convertFractional(Number(this.values.min))),\n      max: String(Model.convertFractional(Number(this.values.max))),\n      20: String(Model.convertFractional(calculateValue(0.2))),\n      40: String(Model.convertFractional(calculateValue(0.4))),\n      60: String(Model.convertFractional(calculateValue(0.6))),\n      80: String(Model.convertFractional(calculateValue(0.8))),\n    };\n  }\n}\n\nexport { Model };\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_2hfx14x6de.s[0]++;Object.defineProperty(exports, "__esModule", ({value:true}));cov_2hfx14x6de.s[1]++;exports.Model=void 0;class Model{constructor(getOptions){cov_2hfx14x6de.f[0]++;cov_2hfx14x6de.s[2]++;this.getOptions=getOptions;const options=(cov_2hfx14x6de.s[3]++,this.getOptions());const from=(cov_2hfx14x6de.s[4]++,options.from?(cov_2hfx14x6de.b[0][0]++,options.from):(cov_2hfx14x6de.b[0][1]++,options.min));const to=(cov_2hfx14x6de.s[5]++,options.to?(cov_2hfx14x6de.b[1][0]++,options.to):(cov_2hfx14x6de.b[1][1]++,options.max));cov_2hfx14x6de.s[6]++;this.getOptions().from=from;cov_2hfx14x6de.s[7]++;this.getOptions().to=to;cov_2hfx14x6de.s[8]++;this.values={min:Model.convertFractional(options.min),max:Model.convertFractional(options.max),from:Model.convertFractional(from),to:Model.convertFractional(to),step:Model.convertFractional(Number(options.step))};}updateValues(){cov_2hfx14x6de.f[1]++;const options=(cov_2hfx14x6de.s[9]++,this.getOptions());const modelValues=(cov_2hfx14x6de.s[10]++,['min','max','from','to']);cov_2hfx14x6de.s[11]++;modelValues.forEach(key=>{cov_2hfx14x6de.f[2]++;const value=(cov_2hfx14x6de.s[12]++,options[key]);cov_2hfx14x6de.s[13]++;this.writeDataToModel({target:key,value:Model.convertFractional(value),isDouble:options.double});});cov_2hfx14x6de.s[14]++;this.values.step=options.step;}fixIncorrectValue(data){cov_2hfx14x6de.f[3]++;let fixedValue=(cov_2hfx14x6de.s[15]++,Number(data.value));const isHandleTarget=(cov_2hfx14x6de.s[16]++,(cov_2hfx14x6de.b[2][0]++,data.target==='from')||(cov_2hfx14x6de.b[2][1]++,data.target==='to'));const isRangeTarget=(cov_2hfx14x6de.s[17]++,(cov_2hfx14x6de.b[3][0]++,data.target==='min')||(cov_2hfx14x6de.b[3][1]++,data.target==='max'));cov_2hfx14x6de.s[18]++;const fixRangeValues=()=>{cov_2hfx14x6de.f[4]++;const isMinBiggerThenMax=(cov_2hfx14x6de.s[19]++,(cov_2hfx14x6de.b[4][0]++,data.target==='min')&&(cov_2hfx14x6de.b[4][1]++,data.value>=this.values.max));const isMaxLessThenMin=(cov_2hfx14x6de.s[20]++,(cov_2hfx14x6de.b[5][0]++,data.target==='max')&&(cov_2hfx14x6de.b[5][1]++,data.value<=this.values.min));cov_2hfx14x6de.s[21]++;if(isMinBiggerThenMax){cov_2hfx14x6de.b[6][0]++;cov_2hfx14x6de.s[22]++;fixedValue-=0.01;}else{cov_2hfx14x6de.b[6][1]++;}cov_2hfx14x6de.s[23]++;if(isMaxLessThenMin){cov_2hfx14x6de.b[7][0]++;cov_2hfx14x6de.s[24]++;fixedValue+=0.01;}else{cov_2hfx14x6de.b[7][1]++;}};cov_2hfx14x6de.s[25]++;const fixHandlesValues=()=>{cov_2hfx14x6de.f[5]++;cov_2hfx14x6de.s[26]++;if(fixedValue>Number(this.values.max)){cov_2hfx14x6de.b[8][0]++;cov_2hfx14x6de.s[27]++;fixedValue=Number(this.values.max);}else{cov_2hfx14x6de.b[8][1]++;}cov_2hfx14x6de.s[28]++;if(fixedValue<Number(this.values.min)){cov_2hfx14x6de.b[9][0]++;cov_2hfx14x6de.s[29]++;fixedValue=Number(this.values.min);}else{cov_2hfx14x6de.b[9][1]++;}const isDoubleAndFromTarget=(cov_2hfx14x6de.s[30]++,(cov_2hfx14x6de.b[10][0]++,data.isDouble)&&(cov_2hfx14x6de.b[10][1]++,data.target==='from'));const isNotDoubleAndFromTarget=(cov_2hfx14x6de.s[31]++,(cov_2hfx14x6de.b[11][0]++,!data.isDouble)&&(cov_2hfx14x6de.b[11][1]++,data.target==='from'));const isDoubleAndToTarget=(cov_2hfx14x6de.s[32]++,(cov_2hfx14x6de.b[12][0]++,data.isDouble)&&(cov_2hfx14x6de.b[12][1]++,data.target==='to'));const isFromBiggerThenTo=(cov_2hfx14x6de.s[33]++,(cov_2hfx14x6de.b[13][0]++,isDoubleAndFromTarget)&&(cov_2hfx14x6de.b[13][1]++,Number(data.value)>Number(this.values.to)));const isToLessThenFrom=(cov_2hfx14x6de.s[34]++,(cov_2hfx14x6de.b[14][0]++,isDoubleAndToTarget)&&(cov_2hfx14x6de.b[14][1]++,Number(data.value)<Number(this.values.from)));cov_2hfx14x6de.s[35]++;if(isFromBiggerThenTo){cov_2hfx14x6de.b[15][0]++;cov_2hfx14x6de.s[36]++;fixedValue=Number(this.values.to);}else{cov_2hfx14x6de.b[15][1]++;cov_2hfx14x6de.s[37]++;if(isNotDoubleAndFromTarget){cov_2hfx14x6de.b[16][0]++;cov_2hfx14x6de.s[38]++;this.values.to=fixedValue;}else{cov_2hfx14x6de.b[16][1]++;}}cov_2hfx14x6de.s[39]++;if(isToLessThenFrom){cov_2hfx14x6de.b[17][0]++;cov_2hfx14x6de.s[40]++;fixedValue=Number(this.values.from);}else{cov_2hfx14x6de.b[17][1]++;}};cov_2hfx14x6de.s[41]++;if(isHandleTarget){cov_2hfx14x6de.b[18][0]++;cov_2hfx14x6de.s[42]++;fixHandlesValues();}else{cov_2hfx14x6de.b[18][1]++;}cov_2hfx14x6de.s[43]++;if(isRangeTarget){cov_2hfx14x6de.b[19][0]++;cov_2hfx14x6de.s[44]++;fixRangeValues();}else{cov_2hfx14x6de.b[19][1]++;}cov_2hfx14x6de.s[45]++;return fixedValue;}writeDataToModel(data){cov_2hfx14x6de.f[6]++;cov_2hfx14x6de.s[46]++;this.values[data.target]=this.fixIncorrectValue(data);}getTotalValues(){cov_2hfx14x6de.f[7]++;cov_2hfx14x6de.s[47]++;return Number(this.values.max)-Number(this.values.min);}static convertFractional(value){cov_2hfx14x6de.f[8]++;const isLastZero=(cov_2hfx14x6de.s[48]++,(cov_2hfx14x6de.b[20][0]++,!Number.isInteger(value))&&(cov_2hfx14x6de.b[20][1]++,`${value.toFixed(2)}`.slice(-1)==='0'));const areLastTwoZero=(cov_2hfx14x6de.s[49]++,`${value.toFixed(2)}`.slice(-2)==='00');const isInteger=(cov_2hfx14x6de.s[50]++,(cov_2hfx14x6de.b[21][0]++,Number.isInteger(value))||(cov_2hfx14x6de.b[21][1]++,areLastTwoZero));cov_2hfx14x6de.s[51]++;switch(true){case isInteger:cov_2hfx14x6de.b[22][0]++;cov_2hfx14x6de.s[52]++;return Number(value.toFixed(0));case isLastZero:cov_2hfx14x6de.b[22][1]++;cov_2hfx14x6de.s[53]++;return Number(value.toFixed(1));default:cov_2hfx14x6de.b[22][2]++;cov_2hfx14x6de.s[54]++;return Number(value.toFixed(2));}}determineValueTarget(value,target){cov_2hfx14x6de.f[9]++;cov_2hfx14x6de.s[55]++;if(target!=='unspecified'){cov_2hfx14x6de.b[23][0]++;cov_2hfx14x6de.s[56]++;return target;}else{cov_2hfx14x6de.b[23][1]++;}const fromDifference=(cov_2hfx14x6de.s[57]++,Math.abs(Number(this.values.from)-Number(value)));const toDifference=(cov_2hfx14x6de.s[58]++,Math.abs(Number(this.values.to)-Number(value)));const isFromEqualTo=(cov_2hfx14x6de.s[59]++,Number(this.values.from)===Number(this.values.to));const isValueLessThenEqual=(cov_2hfx14x6de.s[60]++,(cov_2hfx14x6de.b[24][0]++,isFromEqualTo)&&(cov_2hfx14x6de.b[24][1]++,Number(value)<Number(this.values.from)));const isValueBiggerThenEqual=(cov_2hfx14x6de.s[61]++,(cov_2hfx14x6de.b[25][0]++,isFromEqualTo)&&(cov_2hfx14x6de.b[25][1]++,Number(value)>Number(this.values.to)));cov_2hfx14x6de.s[62]++;if(isValueLessThenEqual){cov_2hfx14x6de.b[26][0]++;cov_2hfx14x6de.s[63]++;return'from';}else{cov_2hfx14x6de.b[26][1]++;}cov_2hfx14x6de.s[64]++;if(isValueBiggerThenEqual){cov_2hfx14x6de.b[27][0]++;cov_2hfx14x6de.s[65]++;return'to';}else{cov_2hfx14x6de.b[27][1]++;}cov_2hfx14x6de.s[66]++;return fromDifference<=toDifference?(cov_2hfx14x6de.b[28][0]++,'from'):(cov_2hfx14x6de.b[28][1]++,'to');}calculateValue(calculationData){cov_2hfx14x6de.f[10]++;const newValue=(cov_2hfx14x6de.s[67]++,Number(this.values.min)+Number(calculationData.position)/(Number(calculationData.sliderWidth)/(Number(this.values.max)-Number(this.values.min))));cov_2hfx14x6de.s[68]++;return Model.convertFractional(newValue);}calculateOutStepRangeValue(value,target){cov_2hfx14x6de.f[11]++;const lessStepValue=(cov_2hfx14x6de.s[69]++,Model.convertFractional(Math.floor(this.values[target]/Number(this.values.step))*Number(this.values.step)));const biggerStepValue=(cov_2hfx14x6de.s[70]++,Model.convertFractional(Math.ceil(this.values[target]/Number(this.values.step))*Number(this.values.step)));cov_2hfx14x6de.s[71]++;switch(true){case value<=lessStepValue:cov_2hfx14x6de.b[29][0]++;cov_2hfx14x6de.s[72]++;return lessStepValue;case value>=biggerStepValue:cov_2hfx14x6de.b[29][1]++;cov_2hfx14x6de.s[73]++;return biggerStepValue;default:cov_2hfx14x6de.b[29][2]++;cov_2hfx14x6de.s[74]++;return false;}}calculateStepValue(value,target){cov_2hfx14x6de.f[12]++;const valueDifference=(cov_2hfx14x6de.s[75]++,Math.abs(value-this.values[target]));cov_2hfx14x6de.s[76]++;if(valueDifference<this.values.step){cov_2hfx14x6de.b[30][0]++;cov_2hfx14x6de.s[77]++;return false;}else{cov_2hfx14x6de.b[30][1]++;}cov_2hfx14x6de.s[78]++;return value<this.values[target]?(cov_2hfx14x6de.b[31][0]++,Model.convertFractional(this.values[target]-Number(this.values.step))):(cov_2hfx14x6de.b[31][1]++,Model.convertFractional(this.values[target]+Number(this.values.step)));}writeValueFromPosition(settings){cov_2hfx14x6de.f[13]++;const value=(cov_2hfx14x6de.s[79]++,this.calculateValue(settings));const isStepTarget=(cov_2hfx14x6de.s[80]++,((cov_2hfx14x6de.b[32][0]++,settings.target==='from')||(cov_2hfx14x6de.b[32][1]++,settings.target==='to'))&&(cov_2hfx14x6de.b[32][2]++,this.values.step!==0));cov_2hfx14x6de.s[81]++;if(!isStepTarget){cov_2hfx14x6de.b[33][0]++;cov_2hfx14x6de.s[82]++;this.writeValue({value,target:settings.target,isDouble:settings.isDouble,sliderWidth:settings.sliderWidth});cov_2hfx14x6de.s[83]++;return;}else{cov_2hfx14x6de.b[33][1]++;}const target=(cov_2hfx14x6de.s[84]++,settings.target==='from'?(cov_2hfx14x6de.b[34][0]++,'from'):(cov_2hfx14x6de.b[34][1]++,'to'));const isInRange=(cov_2hfx14x6de.s[85]++,Number.isInteger(Model.convertFractional(this.values[target]/Number(this.values.step))));const newValue=(cov_2hfx14x6de.s[86]++,isInRange?(cov_2hfx14x6de.b[35][0]++,this.calculateStepValue(value,target)):(cov_2hfx14x6de.b[35][1]++,this.calculateOutStepRangeValue(value,target)));cov_2hfx14x6de.s[87]++;if(newValue===false){cov_2hfx14x6de.b[36][0]++;cov_2hfx14x6de.s[88]++;return;}else{cov_2hfx14x6de.b[36][1]++;}cov_2hfx14x6de.s[89]++;this.writeDataToModel({target,value:newValue,isDouble:settings.isDouble});}writeValue(settings){cov_2hfx14x6de.f[14]++;const target=(cov_2hfx14x6de.s[90]++,this.determineValueTarget(settings.value,settings.target));cov_2hfx14x6de.s[91]++;this.writeDataToModel({target,value:settings.value,isDouble:settings.isDouble});}calculateDataForValueScale(){cov_2hfx14x6de.f[15]++;cov_2hfx14x6de.s[92]++;const calculateValue=ratio=>{cov_2hfx14x6de.f[16]++;cov_2hfx14x6de.s[93]++;return(Number(this.values.max)-Number(this.values.min))*ratio+Number(this.values.min);};cov_2hfx14x6de.s[94]++;return{min:String(Model.convertFractional(Number(this.values.min))),max:String(Model.convertFractional(Number(this.values.max))),20:String(Model.convertFractional(calculateValue(0.2))),40:String(Model.convertFractional(calculateValue(0.4))),60:String(Model.convertFractional(calculateValue(0.6))),80:String(Model.convertFractional(calculateValue(0.8)))};}}cov_2hfx14x6de.s[95]++;exports.Model=Model;

/***/ }),

/***/ "./src/plugin/Presenter/Presenter.ts":
/*!*******************************************!*\
  !*** ./src/plugin/Presenter/Presenter.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var cov_ga8vaoea2=function(){var path="C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\Presenter\\Presenter.ts",hash="6964faa2b462dd8f5bb8ae8422165db8c72ec4e7",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\Presenter\\Presenter.ts",statementMap:{"0":{start:{line:2,column:17},end:{line:7,column:1}},"1":{start:{line:3,column:12},end:{line:3,column:28}},"2":{start:{line:3,column:34},end:{line:3,column:125}},"3":{start:{line:4,column:4},end:{line:5,column:150}},"4":{start:{line:4,column:79},end:{line:4,column:131}},"5":{start:{line:5,column:9},end:{line:5,column:150}},"6":{start:{line:5,column:58},end:{line:5,column:150}},"7":{start:{line:5,column:81},end:{line:5,column:150}},"8":{start:{line:6,column:4},end:{line:6,column:66}},"9":{start:{line:9,column:0},end:{line:9,column:62}},"10":{start:{line:10,column:0},end:{line:10,column:27}},"11":{start:{line:11,column:29},end:{line:11,column:58}},"12":{start:{line:12,column:16},end:{line:129,column:1}},"13":{start:{line:14,column:8},end:{line:14,column:38}},"14":{start:{line:15,column:8},end:{line:15,column:40}},"15":{start:{line:16,column:8},end:{line:16,column:54}},"16":{start:{line:17,column:8},end:{line:17,column:46}},"17":{start:{line:20,column:21},end:{line:20,column:25}},"18":{start:{line:21,column:8},end:{line:33,column:11}},"19":{start:{line:23,column:48},end:{line:23,column:59}},"20":{start:{line:24,column:33},end:{line:29,column:17}},"21":{start:{line:30,column:16},end:{line:30,column:60}},"22":{start:{line:31,column:16},end:{line:31,column:28}},"23":{start:{line:36,column:21},end:{line:36,column:25}},"24":{start:{line:37,column:8},end:{line:48,column:11}},"25":{start:{line:39,column:48},end:{line:39,column:59}},"26":{start:{line:40,column:16},end:{line:45,column:19}},"27":{start:{line:46,column:16},end:{line:46,column:28}},"28":{start:{line:51,column:23},end:{line:51,column:62}},"29":{start:{line:52,column:8},end:{line:52,column:44}},"30":{start:{line:55,column:24},end:{line:55,column:41}},"31":{start:{line:56,column:8},end:{line:62,column:11}},"32":{start:{line:63,column:8},end:{line:69,column:11}},"33":{start:{line:70,column:8},end:{line:70,column:32}},"34":{start:{line:73,column:21},end:{line:73,column:25}},"35":{start:{line:74,column:8},end:{line:85,column:11}},"36":{start:{line:76,column:16},end:{line:76,column:41}},"37":{start:{line:77,column:16},end:{line:77,column:135}},"38":{start:{line:78,column:16},end:{line:79,column:47}},"39":{start:{line:79,column:20},end:{line:79,column:47}},"40":{start:{line:80,column:32},end:{line:80,column:49}},"41":{start:{line:81,column:16},end:{line:82,column:46}},"42":{start:{line:82,column:20},end:{line:82,column:46}},"43":{start:{line:83,column:16},end:{line:83,column:28}},"44":{start:{line:88,column:21},end:{line:88,column:25}},"45":{start:{line:89,column:8},end:{line:94,column:11}},"46":{start:{line:91,column:16},end:{line:91,column:43}},"47":{start:{line:92,column:16},end:{line:92,column:28}},"48":{start:{line:97,column:24},end:{line:97,column:28}},"49":{start:{line:98,column:28},end:{line:98,column:29}},"50":{start:{line:99,column:36},end:{line:99,column:104}},"51":{start:{line:100,column:8},end:{line:101,column:42}},"52":{start:{line:101,column:12},end:{line:101,column:42}},"53":{start:{line:102,column:8},end:{line:103,column:38}},"54":{start:{line:103,column:12},end:{line:103,column:38}},"55":{start:{line:104,column:8},end:{line:104,column:26}},"56":{start:{line:107,column:21},end:{line:107,column:25}},"57":{start:{line:108,column:8},end:{line:116,column:11}},"58":{start:{line:110,column:35},end:{line:110,column:77}},"59":{start:{line:111,column:16},end:{line:111,column:134}},"60":{start:{line:112,column:16},end:{line:112,column:39}},"61":{start:{line:113,column:16},end:{line:113,column:42}},"62":{start:{line:114,column:16},end:{line:114,column:28}},"63":{start:{line:119,column:32},end:{line:119,column:36}},"64":{start:{line:120,column:8},end:{line:120,column:65}},"65":{start:{line:121,column:8},end:{line:121,column:59}},"66":{start:{line:122,column:8},end:{line:122,column:63}},"67":{start:{line:123,column:8},end:{line:123,column:53}},"68":{start:{line:124,column:24},end:{line:124,column:41}},"69":{start:{line:125,column:8},end:{line:126,column:37}},"70":{start:{line:126,column:12},end:{line:126,column:37}},"71":{start:{line:127,column:8},end:{line:127,column:65}},"72":{start:{line:130,column:0},end:{line:132,column:14}},"73":{start:{line:133,column:0},end:{line:133,column:30}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:46},end:{line:2,column:47}},loc:{start:{line:2,column:87},end:{line:7,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:13,column:4},end:{line:13,column:5}},loc:{start:{line:13,column:26},end:{line:18,column:5}},line:13},"2":{name:"(anonymous_2)",decl:{start:{line:19,column:4},end:{line:19,column:5}},loc:{start:{line:19,column:33},end:{line:34,column:5}},line:19},"3":{name:"(anonymous_3)",decl:{start:{line:35,column:4},end:{line:35,column:5}},loc:{start:{line:35,column:30},end:{line:49,column:5}},line:35},"4":{name:"(anonymous_4)",decl:{start:{line:50,column:4},end:{line:50,column:5}},loc:{start:{line:50,column:23},end:{line:53,column:5}},line:50},"5":{name:"(anonymous_5)",decl:{start:{line:54,column:4},end:{line:54,column:5}},loc:{start:{line:54,column:26},end:{line:71,column:5}},line:54},"6":{name:"(anonymous_6)",decl:{start:{line:72,column:4},end:{line:72,column:5}},loc:{start:{line:72,column:29},end:{line:86,column:5}},line:72},"7":{name:"(anonymous_7)",decl:{start:{line:87,column:4},end:{line:87,column:5}},loc:{start:{line:87,column:32},end:{line:95,column:5}},line:87},"8":{name:"(anonymous_8)",decl:{start:{line:96,column:4},end:{line:96,column:5}},loc:{start:{line:96,column:41},end:{line:105,column:5}},line:96},"9":{name:"(anonymous_9)",decl:{start:{line:106,column:4},end:{line:106,column:5}},loc:{start:{line:106,column:24},end:{line:117,column:5}},line:106},"10":{name:"(anonymous_10)",decl:{start:{line:118,column:4},end:{line:118,column:5}},loc:{start:{line:118,column:17},end:{line:128,column:5}},line:118}},branchMap:{"0":{loc:{start:{line:2,column:17},end:{line:7,column:1}},type:"binary-expr",locations:[{start:{line:2,column:18},end:{line:2,column:22}},{start:{line:2,column:26},end:{line:2,column:41}},{start:{line:2,column:46},end:{line:7,column:1}}],line:2},"1":{loc:{start:{line:3,column:34},end:{line:3,column:125}},type:"cond-expr",locations:[{start:{line:3,column:42},end:{line:3,column:48}},{start:{line:3,column:51},end:{line:3,column:125}}],line:3},"2":{loc:{start:{line:3,column:51},end:{line:3,column:125}},type:"cond-expr",locations:[{start:{line:3,column:67},end:{line:3,column:118}},{start:{line:3,column:121},end:{line:3,column:125}}],line:3},"3":{loc:{start:{line:4,column:4},end:{line:5,column:150}},type:"if",locations:[{start:{line:4,column:4},end:{line:5,column:150}},{start:{line:4,column:4},end:{line:5,column:150}}],line:4},"4":{loc:{start:{line:4,column:8},end:{line:4,column:77}},type:"binary-expr",locations:[{start:{line:4,column:8},end:{line:4,column:35}},{start:{line:4,column:39},end:{line:4,column:77}}],line:4},"5":{loc:{start:{line:5,column:58},end:{line:5,column:150}},type:"if",locations:[{start:{line:5,column:58},end:{line:5,column:150}},{start:{line:5,column:58},end:{line:5,column:150}}],line:5},"6":{loc:{start:{line:5,column:85},end:{line:5,column:149}},type:"binary-expr",locations:[{start:{line:5,column:86},end:{line:5,column:143}},{start:{line:5,column:148},end:{line:5,column:149}}],line:5},"7":{loc:{start:{line:5,column:86},end:{line:5,column:143}},type:"cond-expr",locations:[{start:{line:5,column:94},end:{line:5,column:98}},{start:{line:5,column:101},end:{line:5,column:143}}],line:5},"8":{loc:{start:{line:5,column:101},end:{line:5,column:143}},type:"cond-expr",locations:[{start:{line:5,column:109},end:{line:5,column:126}},{start:{line:5,column:129},end:{line:5,column:143}}],line:5},"9":{loc:{start:{line:6,column:11},end:{line:6,column:62}},type:"binary-expr",locations:[{start:{line:6,column:11},end:{line:6,column:16}},{start:{line:6,column:20},end:{line:6,column:21}},{start:{line:6,column:25},end:{line:6,column:62}}],line:6},"10":{loc:{start:{line:78,column:16},end:{line:79,column:47}},type:"if",locations:[{start:{line:78,column:16},end:{line:79,column:47}},{start:{line:78,column:16},end:{line:79,column:47}}],line:78},"11":{loc:{start:{line:81,column:16},end:{line:82,column:46}},type:"if",locations:[{start:{line:81,column:16},end:{line:82,column:46}},{start:{line:81,column:16},end:{line:82,column:46}}],line:81},"12":{loc:{start:{line:99,column:36},end:{line:99,column:104}},type:"binary-expr",locations:[{start:{line:99,column:36},end:{line:99,column:67}},{start:{line:99,column:71},end:{line:99,column:104}}],line:99},"13":{loc:{start:{line:100,column:8},end:{line:101,column:42}},type:"if",locations:[{start:{line:100,column:8},end:{line:101,column:42}},{start:{line:100,column:8},end:{line:101,column:42}}],line:100},"14":{loc:{start:{line:102,column:8},end:{line:103,column:38}},type:"if",locations:[{start:{line:102,column:8},end:{line:103,column:38}},{start:{line:102,column:8},end:{line:103,column:38}}],line:102},"15":{loc:{start:{line:125,column:8},end:{line:126,column:37}},type:"if",locations:[{start:{line:125,column:8},end:{line:126,column:37}},{start:{line:125,column:8},end:{line:126,column:37}}],line:125}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0,"68":0,"69":0,"70":0,"71":0,"72":0,"73":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},b:{"0":[0,0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\Presenter\\Presenter.ts",sourceRoot:"",sources:["C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\Presenter\\Presenter.ts"],names:[],mappings:"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",sourcesContent:["import autobind from 'autobind-decorator';\nimport {\n  BasicModelSettings,\n  CalculationData,\n  DataForValueScale,\n  ModelValues,\n} from '../Model/types';\nimport { Model } from '../Model/Model';\nimport { View } from '../View/View';\nimport {\n  UpdatePositions,\n  UpdatePositionsData,\n} from '../View/types';\nimport {\n  SliderOptions,\n  Update,\n  UserSliderOptions,\n} from '../types';\nimport { BasicPresenterSettings } from './types';\nimport { IPlugin } from '../interfaces';\n\n@autobind\nexport class Presenter {\n  private readonly view: View;\n\n  private readonly model: Model;\n\n  private readonly getOptions: () => SliderOptions;\n\n  private readonly updateEnvironment: IPlugin;\n\n  constructor(settings: BasicPresenterSettings) {\n    this.view = settings.viewLink;\n    this.model = settings.modelLink;\n    this.updateEnvironment = settings.environment;\n    this.getOptions = settings.getOptions;\n  }\n\n  private bindProxyToUpdatePositions(): UpdatePositions {\n    const that: Presenter = this;\n\n    return new Proxy(this.view.updatePositions, {\n      apply(environment: UpdatePositions, thisArgs: View, argArray: [UpdatePositionsData]): boolean {\n        const { target, newPosition } = argArray[0];\n\n        const settings: CalculationData = {\n          position: newPosition,\n          target,\n          sliderWidth: that.view.slider.slider.offsetWidth - that.view.handles.fromHandle.offsetWidth,\n          isDouble: that.getOptions().double,\n        };\n\n        that.model.writeValueFromPosition(settings);\n\n        return true;\n      },\n    });\n  }\n\n  private bindProxyToPassNewValue() {\n    const that: Presenter = this;\n\n    return new Proxy(this.view.passNewValue, {\n      apply(environment: UpdatePositions, thisArgs: View, argArray: [UpdatePositionsData]): boolean {\n        const { target, newPosition } = argArray[0];\n\n        that.model.writeValue({\n          value: newPosition,\n          target,\n          sliderWidth: that.view.slider.slider.offsetWidth - that.view.handles.fromHandle.offsetWidth,\n          isDouble: that.getOptions().double,\n        });\n\n        return true;\n      },\n    });\n  }\n\n  private updateValueScale(): void {\n    const values: DataForValueScale = this.model.calculateDataForValueScale();\n    this.view.refreshValueScale(values);\n  }\n\n  private updateAllViewValues(): void {\n    const options: SliderOptions = this.getOptions();\n\n    this.view.refreshHandleValues({\n      value: this.model.values.from,\n      target: 'from',\n      isToFixed: options.integer,\n      totalValues: this.model.getTotalValues(),\n      minValue: Number(this.model.values.min),\n    });\n\n    this.view.refreshHandleValues({\n      value: this.model.values.to,\n      target: 'to',\n      isToFixed: options.integer,\n      totalValues: this.model.getTotalValues(),\n      minValue: Number(this.model.values.min),\n    });\n\n    this.updateValueScale();\n  }\n\n  private bindProxyToModelValues(): BasicModelSettings {\n    const that: Presenter = this;\n\n    return new Proxy(this.model.values, {\n      set(target: BasicModelSettings, property: ModelValues, value: number): boolean {\n        target[property] = value;\n        that.updateEnvironment.options = ({ ...that.updateEnvironment.options, ...that.model.values });\n\n        if (property !== 'step') that.updateAllViewValues();\n\n        const options: SliderOptions = that.getOptions();\n        if (options.onChange) options.onChange(options);\n\n        return true;\n      },\n    });\n  }\n\n  private bindProxyToCallViewUpdate(): (target: string) => string {\n    const that: Presenter = this;\n\n    return new Proxy(this.view.callViewUpdate, {\n      apply(): boolean {\n        that.updateAllViewValues();\n\n        return true;\n      },\n    });\n  }\n\n  private static fixStepFromUpdate(userValues: UserSliderOptions): UserSliderOptions {\n    const minStep: number = 0.01;\n    const withoutStep: number = 0;\n    const isStepNeedBeRemoved = userValues.step === withoutStep || Number(userValues.step) < minStep;\n\n    if (isStepNeedBeRemoved) userValues.step = withoutStep;\n    if (userValues.step === true) userValues.step = minStep;\n    return userValues;\n  }\n\n  private bindProxyToUpdate(): Update {\n    const that: Presenter = this;\n\n    return new Proxy(this.updateEnvironment.update, {\n      apply(environment: Update, thisArgs: IPlugin, argArray: [UserSliderOptions]): boolean {\n        const userValues: UserSliderOptions = Presenter.fixStepFromUpdate(argArray[0]);\n\n        thisArgs.options = ({ ...thisArgs.options, ...that.model.values, ...userValues });\n        that.view.updateView();\n        that.model.updateValues();\n\n        return true;\n      },\n    });\n  }\n\n  public initialize(): void {\n    const { view, model } = this;\n\n    view.updatePositions = this.bindProxyToUpdatePositions();\n    view.passNewValue = this.bindProxyToPassNewValue();\n    view.callViewUpdate = this.bindProxyToCallViewUpdate();\n    model.values = this.bindProxyToModelValues();\n\n    const options: SliderOptions = this.getOptions();\n    if (options.onStart) options.onStart(options);\n\n    this.updateEnvironment.update = this.bindProxyToUpdate();\n  }\n}\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __decorate=(cov_ga8vaoea2.s[0]++,(cov_ga8vaoea2.b[0][0]++,this)&&(cov_ga8vaoea2.b[0][1]++,this.__decorate)||(cov_ga8vaoea2.b[0][2]++,function(decorators,target,key,desc){cov_ga8vaoea2.f[0]++;var c=(cov_ga8vaoea2.s[1]++,arguments.length),r=(cov_ga8vaoea2.s[2]++,c<3?(cov_ga8vaoea2.b[1][0]++,target):(cov_ga8vaoea2.b[1][1]++,desc===null?(cov_ga8vaoea2.b[2][0]++,desc=Object.getOwnPropertyDescriptor(target,key)):(cov_ga8vaoea2.b[2][1]++,desc))),d;cov_ga8vaoea2.s[3]++;if((cov_ga8vaoea2.b[4][0]++,typeof Reflect==="object")&&(cov_ga8vaoea2.b[4][1]++,typeof Reflect.decorate==="function")){cov_ga8vaoea2.b[3][0]++;cov_ga8vaoea2.s[4]++;r=Reflect.decorate(decorators,target,key,desc);}else{cov_ga8vaoea2.b[3][1]++;cov_ga8vaoea2.s[5]++;for(var i=decorators.length-1;i>=0;i--){cov_ga8vaoea2.s[6]++;if(d=decorators[i]){cov_ga8vaoea2.b[5][0]++;cov_ga8vaoea2.s[7]++;r=(cov_ga8vaoea2.b[6][0]++,c<3?(cov_ga8vaoea2.b[7][0]++,d(r)):(cov_ga8vaoea2.b[7][1]++,c>3?(cov_ga8vaoea2.b[8][0]++,d(target,key,r)):(cov_ga8vaoea2.b[8][1]++,d(target,key))))||(cov_ga8vaoea2.b[6][1]++,r);}else{cov_ga8vaoea2.b[5][1]++;}}}cov_ga8vaoea2.s[8]++;return(cov_ga8vaoea2.b[9][0]++,c>3)&&(cov_ga8vaoea2.b[9][1]++,r)&&(cov_ga8vaoea2.b[9][2]++,Object.defineProperty(target,key,r)),r;}));var Presenter_1;cov_ga8vaoea2.s[9]++;Object.defineProperty(exports, "__esModule", ({value:true}));cov_ga8vaoea2.s[10]++;exports.Presenter=void 0;const autobind_decorator_1=(cov_ga8vaoea2.s[11]++,__webpack_require__(/*! autobind-decorator */ "./node_modules/autobind-decorator/lib/esm/index.js"));let Presenter=(cov_ga8vaoea2.s[12]++,Presenter_1=class Presenter{constructor(settings){cov_ga8vaoea2.f[1]++;cov_ga8vaoea2.s[13]++;this.view=settings.viewLink;cov_ga8vaoea2.s[14]++;this.model=settings.modelLink;cov_ga8vaoea2.s[15]++;this.updateEnvironment=settings.environment;cov_ga8vaoea2.s[16]++;this.getOptions=settings.getOptions;}bindProxyToUpdatePositions(){cov_ga8vaoea2.f[2]++;const that=(cov_ga8vaoea2.s[17]++,this);cov_ga8vaoea2.s[18]++;return new Proxy(this.view.updatePositions,{apply(environment,thisArgs,argArray){const{target,newPosition}=(cov_ga8vaoea2.s[19]++,argArray[0]);const settings=(cov_ga8vaoea2.s[20]++,{position:newPosition,target,sliderWidth:that.view.slider.slider.offsetWidth-that.view.handles.fromHandle.offsetWidth,isDouble:that.getOptions().double});cov_ga8vaoea2.s[21]++;that.model.writeValueFromPosition(settings);cov_ga8vaoea2.s[22]++;return true;}});}bindProxyToPassNewValue(){cov_ga8vaoea2.f[3]++;const that=(cov_ga8vaoea2.s[23]++,this);cov_ga8vaoea2.s[24]++;return new Proxy(this.view.passNewValue,{apply(environment,thisArgs,argArray){const{target,newPosition}=(cov_ga8vaoea2.s[25]++,argArray[0]);cov_ga8vaoea2.s[26]++;that.model.writeValue({value:newPosition,target,sliderWidth:that.view.slider.slider.offsetWidth-that.view.handles.fromHandle.offsetWidth,isDouble:that.getOptions().double});cov_ga8vaoea2.s[27]++;return true;}});}updateValueScale(){cov_ga8vaoea2.f[4]++;const values=(cov_ga8vaoea2.s[28]++,this.model.calculateDataForValueScale());cov_ga8vaoea2.s[29]++;this.view.refreshValueScale(values);}updateAllViewValues(){cov_ga8vaoea2.f[5]++;const options=(cov_ga8vaoea2.s[30]++,this.getOptions());cov_ga8vaoea2.s[31]++;this.view.refreshHandleValues({value:this.model.values.from,target:'from',isToFixed:options.integer,totalValues:this.model.getTotalValues(),minValue:Number(this.model.values.min)});cov_ga8vaoea2.s[32]++;this.view.refreshHandleValues({value:this.model.values.to,target:'to',isToFixed:options.integer,totalValues:this.model.getTotalValues(),minValue:Number(this.model.values.min)});cov_ga8vaoea2.s[33]++;this.updateValueScale();}bindProxyToModelValues(){cov_ga8vaoea2.f[6]++;const that=(cov_ga8vaoea2.s[34]++,this);cov_ga8vaoea2.s[35]++;return new Proxy(this.model.values,{set(target,property,value){cov_ga8vaoea2.s[36]++;target[property]=value;cov_ga8vaoea2.s[37]++;that.updateEnvironment.options=Object.assign(Object.assign({},that.updateEnvironment.options),that.model.values);cov_ga8vaoea2.s[38]++;if(property!=='step'){cov_ga8vaoea2.b[10][0]++;cov_ga8vaoea2.s[39]++;that.updateAllViewValues();}else{cov_ga8vaoea2.b[10][1]++;}const options=(cov_ga8vaoea2.s[40]++,that.getOptions());cov_ga8vaoea2.s[41]++;if(options.onChange){cov_ga8vaoea2.b[11][0]++;cov_ga8vaoea2.s[42]++;options.onChange(options);}else{cov_ga8vaoea2.b[11][1]++;}cov_ga8vaoea2.s[43]++;return true;}});}bindProxyToCallViewUpdate(){cov_ga8vaoea2.f[7]++;const that=(cov_ga8vaoea2.s[44]++,this);cov_ga8vaoea2.s[45]++;return new Proxy(this.view.callViewUpdate,{apply(){cov_ga8vaoea2.s[46]++;that.updateAllViewValues();cov_ga8vaoea2.s[47]++;return true;}});}static fixStepFromUpdate(userValues){cov_ga8vaoea2.f[8]++;const minStep=(cov_ga8vaoea2.s[48]++,0.01);const withoutStep=(cov_ga8vaoea2.s[49]++,0);const isStepNeedBeRemoved=(cov_ga8vaoea2.s[50]++,(cov_ga8vaoea2.b[12][0]++,userValues.step===withoutStep)||(cov_ga8vaoea2.b[12][1]++,Number(userValues.step)<minStep));cov_ga8vaoea2.s[51]++;if(isStepNeedBeRemoved){cov_ga8vaoea2.b[13][0]++;cov_ga8vaoea2.s[52]++;userValues.step=withoutStep;}else{cov_ga8vaoea2.b[13][1]++;}cov_ga8vaoea2.s[53]++;if(userValues.step===true){cov_ga8vaoea2.b[14][0]++;cov_ga8vaoea2.s[54]++;userValues.step=minStep;}else{cov_ga8vaoea2.b[14][1]++;}cov_ga8vaoea2.s[55]++;return userValues;}bindProxyToUpdate(){cov_ga8vaoea2.f[9]++;const that=(cov_ga8vaoea2.s[56]++,this);cov_ga8vaoea2.s[57]++;return new Proxy(this.updateEnvironment.update,{apply(environment,thisArgs,argArray){const userValues=(cov_ga8vaoea2.s[58]++,Presenter_1.fixStepFromUpdate(argArray[0]));cov_ga8vaoea2.s[59]++;thisArgs.options=Object.assign(Object.assign(Object.assign({},thisArgs.options),that.model.values),userValues);cov_ga8vaoea2.s[60]++;that.view.updateView();cov_ga8vaoea2.s[61]++;that.model.updateValues();cov_ga8vaoea2.s[62]++;return true;}});}initialize(){cov_ga8vaoea2.f[10]++;const{view,model}=(cov_ga8vaoea2.s[63]++,this);cov_ga8vaoea2.s[64]++;view.updatePositions=this.bindProxyToUpdatePositions();cov_ga8vaoea2.s[65]++;view.passNewValue=this.bindProxyToPassNewValue();cov_ga8vaoea2.s[66]++;view.callViewUpdate=this.bindProxyToCallViewUpdate();cov_ga8vaoea2.s[67]++;model.values=this.bindProxyToModelValues();const options=(cov_ga8vaoea2.s[68]++,this.getOptions());cov_ga8vaoea2.s[69]++;if(options.onStart){cov_ga8vaoea2.b[15][0]++;cov_ga8vaoea2.s[70]++;options.onStart(options);}else{cov_ga8vaoea2.b[15][1]++;}cov_ga8vaoea2.s[71]++;this.updateEnvironment.update=this.bindProxyToUpdate();}});cov_ga8vaoea2.s[72]++;Presenter=Presenter_1=__decorate([autobind_decorator_1.default],Presenter);cov_ga8vaoea2.s[73]++;exports.Presenter=Presenter;

/***/ }),

/***/ "./src/plugin/View/Handles/Handles.ts":
/*!********************************************!*\
  !*** ./src/plugin/View/Handles/Handles.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var cov_qdmxu4oi9=function(){var path="C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\View\\Handles\\Handles.ts",hash="e49a012fdc560df232ea7c24f5406a403c7f94be",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\View\\Handles\\Handles.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:0},end:{line:3,column:25}},"2":{start:{line:6,column:8},end:{line:6,column:49}},"3":{start:{line:7,column:8},end:{line:7,column:60}},"4":{start:{line:8,column:8},end:{line:21,column:10}},"5":{start:{line:22,column:8},end:{line:22,column:83}},"6":{start:{line:23,column:8},end:{line:23,column:81}},"7":{start:{line:24,column:8},end:{line:24,column:82}},"8":{start:{line:25,column:8},end:{line:25,column:80}},"9":{start:{line:26,column:8},end:{line:26,column:36}},"10":{start:{line:29,column:8},end:{line:29,column:47}},"11":{start:{line:30,column:8},end:{line:30,column:43}},"12":{start:{line:36,column:15},end:{line:36,column:23}},"13":{start:{line:37,column:24},end:{line:37,column:54}},"14":{start:{line:38,column:8},end:{line:40,column:11}},"15":{start:{line:39,column:12},end:{line:39,column:44}},"16":{start:{line:41,column:8},end:{line:41,column:23}},"17":{start:{line:44,column:56},end:{line:44,column:60}},"18":{start:{line:45,column:8},end:{line:46,column:19}},"19":{start:{line:46,column:12},end:{line:46,column:19}},"20":{start:{line:47,column:32},end:{line:47,column:48}},"21":{start:{line:48,column:8},end:{line:48,column:101}},"22":{start:{line:49,column:8},end:{line:49,column:60}},"23":{start:{line:52,column:33},end:{line:52,column:50}},"24":{start:{line:53,column:8},end:{line:53,column:68}},"25":{start:{line:54,column:27},end:{line:54,column:77}},"26":{start:{line:55,column:29},end:{line:55,column:81}},"27":{start:{line:56,column:8},end:{line:57,column:54}},"28":{start:{line:57,column:12},end:{line:57,column:54}},"29":{start:{line:58,column:8},end:{line:59,column:56}},"30":{start:{line:59,column:12},end:{line:59,column:56}},"31":{start:{line:62,column:8},end:{line:63,column:109}},"32":{start:{line:66,column:8},end:{line:67,column:109}},"33":{start:{line:70,column:8},end:{line:70,column:96}},"34":{start:{line:73,column:8},end:{line:73,column:94}},"35":{start:{line:76,column:36},end:{line:79,column:9}},"36":{start:{line:77,column:12},end:{line:77,column:77}},"37":{start:{line:78,column:12},end:{line:78,column:75}},"38":{start:{line:80,column:8},end:{line:89,column:9}},"39":{start:{line:82,column:16},end:{line:82,column:66}},"40":{start:{line:83,column:16},end:{line:83,column:22}},"41":{start:{line:85,column:16},end:{line:85,column:66}},"42":{start:{line:86,column:16},end:{line:86,column:22}},"43":{start:{line:88,column:16},end:{line:88,column:22}},"44":{start:{line:92,column:29},end:{line:92,column:37}},"45":{start:{line:93,column:8},end:{line:98,column:9}},"46":{start:{line:94,column:12},end:{line:94,column:70}},"47":{start:{line:96,column:13},end:{line:98,column:9}},"48":{start:{line:97,column:12},end:{line:97,column:73}},"49":{start:{line:101,column:8},end:{line:108,column:9}},"50":{start:{line:102,column:12},end:{line:102,column:74}},"51":{start:{line:103,column:12},end:{line:103,column:76}},"52":{start:{line:106,column:12},end:{line:106,column:77}},"53":{start:{line:107,column:12},end:{line:107,column:79}},"54":{start:{line:111,column:26},end:{line:111,column:57}},"55":{start:{line:112,column:8},end:{line:113,column:56}},"56":{start:{line:113,column:12},end:{line:113,column:56}},"57":{start:{line:114,column:8},end:{line:115,column:54}},"58":{start:{line:115,column:12},end:{line:115,column:54}},"59":{start:{line:116,column:8},end:{line:116,column:46}},"60":{start:{line:119,column:0},end:{line:119,column:26}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:5,column:4},end:{line:5,column:5}},loc:{start:{line:5,column:18},end:{line:27,column:5}},line:5},"1":{name:"(anonymous_1)",decl:{start:{line:28,column:4},end:{line:28,column:5}},loc:{start:{line:28,column:27},end:{line:31,column:5}},line:28},"2":{name:"(anonymous_2)",decl:{start:{line:32,column:4},end:{line:32,column:5}},loc:{start:{line:32,column:35},end:{line:42,column:5}},line:32},"3":{name:"(anonymous_3)",decl:{start:{line:38,column:27},end:{line:38,column:28}},loc:{start:{line:38,column:41},end:{line:40,column:9}},line:38},"4":{name:"(anonymous_4)",decl:{start:{line:43,column:4},end:{line:43,column:5}},loc:{start:{line:43,column:37},end:{line:50,column:5}},line:43},"5":{name:"(anonymous_5)",decl:{start:{line:51,column:4},end:{line:51,column:5}},loc:{start:{line:51,column:51},end:{line:60,column:5}},line:51},"6":{name:"(anonymous_6)",decl:{start:{line:61,column:4},end:{line:61,column:5}},loc:{start:{line:61,column:42},end:{line:64,column:5}},line:61},"7":{name:"(anonymous_7)",decl:{start:{line:65,column:4},end:{line:65,column:5}},loc:{start:{line:65,column:46},end:{line:68,column:5}},line:65},"8":{name:"(anonymous_8)",decl:{start:{line:69,column:4},end:{line:69,column:5}},loc:{start:{line:69,column:32},end:{line:71,column:5}},line:69},"9":{name:"(anonymous_9)",decl:{start:{line:72,column:4},end:{line:72,column:5}},loc:{start:{line:72,column:32},end:{line:74,column:5}},line:72},"10":{name:"(anonymous_10)",decl:{start:{line:75,column:4},end:{line:75,column:5}},loc:{start:{line:75,column:28},end:{line:90,column:5}},line:75},"11":{name:"(anonymous_11)",decl:{start:{line:76,column:36},end:{line:76,column:37}},loc:{start:{line:76,column:50},end:{line:79,column:9}},line:76},"12":{name:"(anonymous_12)",decl:{start:{line:91,column:4},end:{line:91,column:5}},loc:{start:{line:91,column:35},end:{line:99,column:5}},line:91},"13":{name:"(anonymous_13)",decl:{start:{line:100,column:4},end:{line:100,column:5}},loc:{start:{line:100,column:48},end:{line:109,column:5}},line:100},"14":{name:"(anonymous_14)",decl:{start:{line:110,column:4},end:{line:110,column:5}},loc:{start:{line:110,column:40},end:{line:117,column:5}},line:110}},branchMap:{"0":{loc:{start:{line:33,column:16},end:{line:36,column:9}},type:"default-arg",locations:[{start:{line:33,column:29},end:{line:36,column:9}}],line:33},"1":{loc:{start:{line:45,column:8},end:{line:46,column:19}},type:"if",locations:[{start:{line:45,column:8},end:{line:46,column:19}},{start:{line:45,column:8},end:{line:46,column:19}}],line:45},"2":{loc:{start:{line:45,column:12},end:{line:45,column:48}},type:"binary-expr",locations:[{start:{line:45,column:12},end:{line:45,column:28}},{start:{line:45,column:32},end:{line:45,column:48}}],line:45},"3":{loc:{start:{line:48,column:42},end:{line:48,column:100}},type:"cond-expr",locations:[{start:{line:48,column:54},end:{line:48,column:84}},{start:{line:48,column:87},end:{line:48,column:100}}],line:48},"4":{loc:{start:{line:56,column:8},end:{line:57,column:54}},type:"if",locations:[{start:{line:56,column:8},end:{line:57,column:54}},{start:{line:56,column:8},end:{line:57,column:54}}],line:56},"5":{loc:{start:{line:58,column:8},end:{line:59,column:56}},type:"if",locations:[{start:{line:58,column:8},end:{line:59,column:56}},{start:{line:58,column:8},end:{line:59,column:56}}],line:58},"6":{loc:{start:{line:62,column:15},end:{line:63,column:108}},type:"binary-expr",locations:[{start:{line:62,column:16},end:{line:62,column:93}},{start:{line:63,column:16},end:{line:63,column:91}},{start:{line:63,column:97},end:{line:63,column:107}}],line:62},"7":{loc:{start:{line:66,column:15},end:{line:67,column:108}},type:"binary-expr",locations:[{start:{line:66,column:16},end:{line:66,column:92}},{start:{line:67,column:16},end:{line:67,column:90}},{start:{line:67,column:96},end:{line:67,column:107}}],line:66},"8":{loc:{start:{line:70,column:15},end:{line:70,column:95}},type:"binary-expr",locations:[{start:{line:70,column:16},end:{line:70,column:25}},{start:{line:70,column:31},end:{line:70,column:94}}],line:70},"9":{loc:{start:{line:73,column:15},end:{line:73,column:93}},type:"binary-expr",locations:[{start:{line:73,column:16},end:{line:73,column:24}},{start:{line:73,column:30},end:{line:73,column:92}}],line:73},"10":{loc:{start:{line:80,column:8},end:{line:89,column:9}},type:"switch",locations:[{start:{line:81,column:12},end:{line:83,column:22}},{start:{line:84,column:12},end:{line:86,column:22}},{start:{line:87,column:12},end:{line:88,column:22}}],line:80},"11":{loc:{start:{line:93,column:8},end:{line:98,column:9}},type:"if",locations:[{start:{line:93,column:8},end:{line:98,column:9}},{start:{line:93,column:8},end:{line:98,column:9}}],line:93},"12":{loc:{start:{line:96,column:13},end:{line:98,column:9}},type:"if",locations:[{start:{line:96,column:13},end:{line:98,column:9}},{start:{line:96,column:13},end:{line:98,column:9}}],line:96},"13":{loc:{start:{line:101,column:8},end:{line:108,column:9}},type:"if",locations:[{start:{line:101,column:8},end:{line:108,column:9}},{start:{line:101,column:8},end:{line:108,column:9}}],line:101},"14":{loc:{start:{line:112,column:8},end:{line:113,column:56}},type:"if",locations:[{start:{line:112,column:8},end:{line:113,column:56}},{start:{line:112,column:8},end:{line:113,column:56}}],line:112},"15":{loc:{start:{line:114,column:8},end:{line:115,column:54}},type:"if",locations:[{start:{line:114,column:8},end:{line:115,column:54}},{start:{line:114,column:8},end:{line:115,column:54}}],line:114}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0},b:{"0":[0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0,0],"7":[0,0,0],"8":[0,0],"9":[0,0],"10":[0,0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\View\\Handles\\Handles.ts",sourceRoot:"",sources:["C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\View\\Handles\\Handles.ts"],names:[],mappings:"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",sourcesContent:["import {\n  HandlesElementsInfo,\n  StaticElementsDescription,\n  HandleHideData,\n} from './types';\nimport { NewHandlesData } from '../types';\n\nexport class Handles {\n  readonly fromHandle: HTMLSpanElement;\n\n  readonly toHandle: HTMLSpanElement;\n\n  readonly fromValue: HTMLSpanElement;\n\n  readonly toValue: HTMLSpanElement;\n\n  private readonly handleClass: string = 'goby-slider__handle';\n\n  private readonly handleValueClass: string = 'goby-slider__handle-value';\n\n  readonly staticElementsDescription: StaticElementsDescription = [\n    {\n      cssClasses: [this.handleClass, `${this.handleClass}_type_from`],\n    },\n    {\n      cssClasses: [this.handleClass, `${this.handleClass}_type_to`],\n    },\n    {\n      cssClasses: [this.handleValueClass, `${this.handleValueClass}_type_from`],\n    },\n    {\n      cssClasses: [this.handleValueClass, `${this.handleValueClass}_type_to`],\n    },\n  ];\n\n  constructor() {\n    this.fromHandle = Handles.createElement(this.staticElementsDescription[0]);\n    this.toHandle = Handles.createElement(this.staticElementsDescription[1]);\n    this.fromValue = Handles.createElement(this.staticElementsDescription[2]);\n    this.toValue = Handles.createElement(this.staticElementsDescription[3]);\n\n    this.collectClassElements();\n  }\n\n  private collectClassElements(): void {\n    this.fromHandle.append(this.fromValue);\n    this.toHandle.append(this.toValue);\n  }\n\n  static createElement(settings: HandlesElementsInfo): HTMLSpanElement {\n    const {\n      cssClasses = [\n        'for-change',\n        'for-change',\n      ],\n    } = settings;\n    const element: HTMLSpanElement = document.createElement('span');\n\n    cssClasses.forEach((cssClass: string) => {\n      element.classList.add(cssClass);\n    });\n\n    return element;\n  }\n\n  public refreshValues(data: NewHandlesData, sliderWidth: number): void {\n    const {\n      target,\n      value,\n      isToFixed,\n      position,\n    } = data;\n    if (target === 'min' || target === 'max') return;\n    const valueTargetName: 'fromValue' | 'toValue' = `${target}Value`;\n\n    this[valueTargetName].innerText = isToFixed ? `${Math.round(Number(value))}` : String(value);\n    this.refreshPosition(target, position, sliderWidth);\n  }\n\n  private refreshPosition(target: 'from' | 'to', position: string, sliderWidth: number):void {\n    const handleTargetName: 'fromHandle' | 'toHandle' = `${target}Handle`;\n    this[handleTargetName].style.left = `${Number(position)}px`;\n    const toPosition: number = Number(this.toHandle.style.left.replace('px', ''));\n    const fromPosition: number = Number(this.fromHandle.style.left.replace('px', ''));\n\n    if (toPosition <= (this.toHandle.offsetWidth * 2)) this.updateMainHandleClass(this.toHandle);\n    if (fromPosition >= (sliderWidth - this.toHandle.offsetWidth * 2)) this.updateMainHandleClass(this.fromHandle);\n  }\n\n  private checkIsNeedToMakeVertical(isVertical: boolean): boolean {\n    return (!this.fromValue.classList.contains(`${this.handleValueClass}_state_vertical`))\n      && (!this.toValue.classList.contains(`${this.handleValueClass}_state_vertical`)) && (isVertical);\n  }\n\n  private checkIsNeedToMakeHorizontally(isVertical: boolean): boolean {\n    return (this.fromValue.classList.contains(`${this.handleValueClass}_state_vertical`))\n      && (this.toValue.classList.contains(`${this.handleValueClass}_state_vertical`)) && (!isVertical);\n  }\n\n  private checkIsToNeedHide(isDouble: boolean): boolean {\n    return (!isDouble) && (!this.toHandle.classList.contains(`${this.handleClass}_hidden`));\n  }\n\n  private checkIsToNeedShow(isDouble: boolean): boolean {\n    return (isDouble) && (this.toHandle.classList.contains(`${this.handleClass}_hidden`));\n  }\n\n  public changePlane(isVertical: boolean): void {\n    const changeVerticalClass = (from: HTMLSpanElement, to: HTMLSpanElement): void => {\n      from.classList.toggle(`${this.handleValueClass}_state_vertical`);\n      to.classList.toggle(`${this.handleValueClass}_state_vertical`);\n    };\n\n    switch (true) {\n      case this.checkIsNeedToMakeVertical(isVertical):\n        changeVerticalClass(this.fromValue, this.toValue);\n        break;\n      case this.checkIsNeedToMakeHorizontally(isVertical):\n        changeVerticalClass(this.fromValue, this.toValue);\n        break;\n      default:\n        break;\n    }\n  }\n\n  public changeHandlesDisplay(settings: HandleHideData): void {\n    const { isDouble } = settings;\n\n    if (this.checkIsToNeedHide(isDouble)) {\n      this.toHandle.classList.add(`${this.handleClass}_hidden`);\n    } else if (this.checkIsToNeedShow(isDouble)) {\n      this.toHandle.classList.remove(`${this.handleClass}_hidden`);\n    }\n  }\n\n  public changeHandlesValuesDisplay(isHandlesValues: boolean): void {\n    if (!isHandlesValues) {\n      this.toValue.classList.add(`${this.handleValueClass}_hidden`);\n      this.fromValue.classList.add(`${this.handleValueClass}_hidden`);\n    } else {\n      this.toValue.classList.remove(`${this.handleValueClass}_hidden`);\n      this.fromValue.classList.remove(`${this.handleValueClass}_hidden`);\n    }\n  }\n\n  updateMainHandleClass(targetHandle: HTMLSpanElement) {\n    const className: string = `${this.handleClass}_type_main`;\n\n    if (this.fromHandle.classList.contains(className)) this.fromHandle.classList.remove(className);\n    if (this.toHandle.classList.contains(className)) this.toHandle.classList.remove(className);\n    targetHandle.classList.add(className);\n  }\n}\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_qdmxu4oi9.s[0]++;Object.defineProperty(exports, "__esModule", ({value:true}));cov_qdmxu4oi9.s[1]++;exports.Handles=void 0;class Handles{constructor(){cov_qdmxu4oi9.f[0]++;cov_qdmxu4oi9.s[2]++;this.handleClass='goby-slider__handle';cov_qdmxu4oi9.s[3]++;this.handleValueClass='goby-slider__handle-value';cov_qdmxu4oi9.s[4]++;this.staticElementsDescription=[{cssClasses:[this.handleClass,`${this.handleClass}_type_from`]},{cssClasses:[this.handleClass,`${this.handleClass}_type_to`]},{cssClasses:[this.handleValueClass,`${this.handleValueClass}_type_from`]},{cssClasses:[this.handleValueClass,`${this.handleValueClass}_type_to`]}];cov_qdmxu4oi9.s[5]++;this.fromHandle=Handles.createElement(this.staticElementsDescription[0]);cov_qdmxu4oi9.s[6]++;this.toHandle=Handles.createElement(this.staticElementsDescription[1]);cov_qdmxu4oi9.s[7]++;this.fromValue=Handles.createElement(this.staticElementsDescription[2]);cov_qdmxu4oi9.s[8]++;this.toValue=Handles.createElement(this.staticElementsDescription[3]);cov_qdmxu4oi9.s[9]++;this.collectClassElements();}collectClassElements(){cov_qdmxu4oi9.f[1]++;cov_qdmxu4oi9.s[10]++;this.fromHandle.append(this.fromValue);cov_qdmxu4oi9.s[11]++;this.toHandle.append(this.toValue);}static createElement(settings){cov_qdmxu4oi9.f[2]++;const{cssClasses=(cov_qdmxu4oi9.b[0][0]++,['for-change','for-change'])}=(cov_qdmxu4oi9.s[12]++,settings);const element=(cov_qdmxu4oi9.s[13]++,document.createElement('span'));cov_qdmxu4oi9.s[14]++;cssClasses.forEach(cssClass=>{cov_qdmxu4oi9.f[3]++;cov_qdmxu4oi9.s[15]++;element.classList.add(cssClass);});cov_qdmxu4oi9.s[16]++;return element;}refreshValues(data,sliderWidth){cov_qdmxu4oi9.f[4]++;const{target,value,isToFixed,position}=(cov_qdmxu4oi9.s[17]++,data);cov_qdmxu4oi9.s[18]++;if((cov_qdmxu4oi9.b[2][0]++,target==='min')||(cov_qdmxu4oi9.b[2][1]++,target==='max')){cov_qdmxu4oi9.b[1][0]++;cov_qdmxu4oi9.s[19]++;return;}else{cov_qdmxu4oi9.b[1][1]++;}const valueTargetName=(cov_qdmxu4oi9.s[20]++,`${target}Value`);cov_qdmxu4oi9.s[21]++;this[valueTargetName].innerText=isToFixed?(cov_qdmxu4oi9.b[3][0]++,`${Math.round(Number(value))}`):(cov_qdmxu4oi9.b[3][1]++,String(value));cov_qdmxu4oi9.s[22]++;this.refreshPosition(target,position,sliderWidth);}refreshPosition(target,position,sliderWidth){cov_qdmxu4oi9.f[5]++;const handleTargetName=(cov_qdmxu4oi9.s[23]++,`${target}Handle`);cov_qdmxu4oi9.s[24]++;this[handleTargetName].style.left=`${Number(position)}px`;const toPosition=(cov_qdmxu4oi9.s[25]++,Number(this.toHandle.style.left.replace('px','')));const fromPosition=(cov_qdmxu4oi9.s[26]++,Number(this.fromHandle.style.left.replace('px','')));cov_qdmxu4oi9.s[27]++;if(toPosition<=this.toHandle.offsetWidth*2){cov_qdmxu4oi9.b[4][0]++;cov_qdmxu4oi9.s[28]++;this.updateMainHandleClass(this.toHandle);}else{cov_qdmxu4oi9.b[4][1]++;}cov_qdmxu4oi9.s[29]++;if(fromPosition>=sliderWidth-this.toHandle.offsetWidth*2){cov_qdmxu4oi9.b[5][0]++;cov_qdmxu4oi9.s[30]++;this.updateMainHandleClass(this.fromHandle);}else{cov_qdmxu4oi9.b[5][1]++;}}checkIsNeedToMakeVertical(isVertical){cov_qdmxu4oi9.f[6]++;cov_qdmxu4oi9.s[31]++;return(cov_qdmxu4oi9.b[6][0]++,!this.fromValue.classList.contains(`${this.handleValueClass}_state_vertical`))&&(cov_qdmxu4oi9.b[6][1]++,!this.toValue.classList.contains(`${this.handleValueClass}_state_vertical`))&&(cov_qdmxu4oi9.b[6][2]++,isVertical);}checkIsNeedToMakeHorizontally(isVertical){cov_qdmxu4oi9.f[7]++;cov_qdmxu4oi9.s[32]++;return(cov_qdmxu4oi9.b[7][0]++,this.fromValue.classList.contains(`${this.handleValueClass}_state_vertical`))&&(cov_qdmxu4oi9.b[7][1]++,this.toValue.classList.contains(`${this.handleValueClass}_state_vertical`))&&(cov_qdmxu4oi9.b[7][2]++,!isVertical);}checkIsToNeedHide(isDouble){cov_qdmxu4oi9.f[8]++;cov_qdmxu4oi9.s[33]++;return(cov_qdmxu4oi9.b[8][0]++,!isDouble)&&(cov_qdmxu4oi9.b[8][1]++,!this.toHandle.classList.contains(`${this.handleClass}_hidden`));}checkIsToNeedShow(isDouble){cov_qdmxu4oi9.f[9]++;cov_qdmxu4oi9.s[34]++;return(cov_qdmxu4oi9.b[9][0]++,isDouble)&&(cov_qdmxu4oi9.b[9][1]++,this.toHandle.classList.contains(`${this.handleClass}_hidden`));}changePlane(isVertical){cov_qdmxu4oi9.f[10]++;cov_qdmxu4oi9.s[35]++;const changeVerticalClass=(from,to)=>{cov_qdmxu4oi9.f[11]++;cov_qdmxu4oi9.s[36]++;from.classList.toggle(`${this.handleValueClass}_state_vertical`);cov_qdmxu4oi9.s[37]++;to.classList.toggle(`${this.handleValueClass}_state_vertical`);};cov_qdmxu4oi9.s[38]++;switch(true){case this.checkIsNeedToMakeVertical(isVertical):cov_qdmxu4oi9.b[10][0]++;cov_qdmxu4oi9.s[39]++;changeVerticalClass(this.fromValue,this.toValue);cov_qdmxu4oi9.s[40]++;break;case this.checkIsNeedToMakeHorizontally(isVertical):cov_qdmxu4oi9.b[10][1]++;cov_qdmxu4oi9.s[41]++;changeVerticalClass(this.fromValue,this.toValue);cov_qdmxu4oi9.s[42]++;break;default:cov_qdmxu4oi9.b[10][2]++;cov_qdmxu4oi9.s[43]++;break;}}changeHandlesDisplay(settings){cov_qdmxu4oi9.f[12]++;const{isDouble}=(cov_qdmxu4oi9.s[44]++,settings);cov_qdmxu4oi9.s[45]++;if(this.checkIsToNeedHide(isDouble)){cov_qdmxu4oi9.b[11][0]++;cov_qdmxu4oi9.s[46]++;this.toHandle.classList.add(`${this.handleClass}_hidden`);}else{cov_qdmxu4oi9.b[11][1]++;cov_qdmxu4oi9.s[47]++;if(this.checkIsToNeedShow(isDouble)){cov_qdmxu4oi9.b[12][0]++;cov_qdmxu4oi9.s[48]++;this.toHandle.classList.remove(`${this.handleClass}_hidden`);}else{cov_qdmxu4oi9.b[12][1]++;}}}changeHandlesValuesDisplay(isHandlesValues){cov_qdmxu4oi9.f[13]++;cov_qdmxu4oi9.s[49]++;if(!isHandlesValues){cov_qdmxu4oi9.b[13][0]++;cov_qdmxu4oi9.s[50]++;this.toValue.classList.add(`${this.handleValueClass}_hidden`);cov_qdmxu4oi9.s[51]++;this.fromValue.classList.add(`${this.handleValueClass}_hidden`);}else{cov_qdmxu4oi9.b[13][1]++;cov_qdmxu4oi9.s[52]++;this.toValue.classList.remove(`${this.handleValueClass}_hidden`);cov_qdmxu4oi9.s[53]++;this.fromValue.classList.remove(`${this.handleValueClass}_hidden`);}}updateMainHandleClass(targetHandle){cov_qdmxu4oi9.f[14]++;const className=(cov_qdmxu4oi9.s[54]++,`${this.handleClass}_type_main`);cov_qdmxu4oi9.s[55]++;if(this.fromHandle.classList.contains(className)){cov_qdmxu4oi9.b[14][0]++;cov_qdmxu4oi9.s[56]++;this.fromHandle.classList.remove(className);}else{cov_qdmxu4oi9.b[14][1]++;}cov_qdmxu4oi9.s[57]++;if(this.toHandle.classList.contains(className)){cov_qdmxu4oi9.b[15][0]++;cov_qdmxu4oi9.s[58]++;this.toHandle.classList.remove(className);}else{cov_qdmxu4oi9.b[15][1]++;}cov_qdmxu4oi9.s[59]++;targetHandle.classList.add(className);}}cov_qdmxu4oi9.s[60]++;exports.Handles=Handles;

/***/ }),

/***/ "./src/plugin/View/Movement/Movement.ts":
/*!**********************************************!*\
  !*** ./src/plugin/View/Movement/Movement.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var cov_1invwyemn1=function(){var path="C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\View\\Movement\\Movement.ts",hash="5eaacdad8baf6fb3cea2e2beea9c31f6726bfaaa",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\View\\Movement\\Movement.ts",statementMap:{"0":{start:{line:2,column:17},end:{line:7,column:1}},"1":{start:{line:3,column:12},end:{line:3,column:28}},"2":{start:{line:3,column:34},end:{line:3,column:125}},"3":{start:{line:4,column:4},end:{line:5,column:150}},"4":{start:{line:4,column:79},end:{line:4,column:131}},"5":{start:{line:5,column:9},end:{line:5,column:150}},"6":{start:{line:5,column:58},end:{line:5,column:150}},"7":{start:{line:5,column:81},end:{line:5,column:150}},"8":{start:{line:6,column:4},end:{line:6,column:66}},"9":{start:{line:8,column:0},end:{line:8,column:62}},"10":{start:{line:9,column:0},end:{line:9,column:26}},"11":{start:{line:10,column:29},end:{line:10,column:58}},"12":{start:{line:11,column:15},end:{line:68,column:1}},"13":{start:{line:13,column:8},end:{line:13,column:38}},"14":{start:{line:14,column:8},end:{line:14,column:40}},"15":{start:{line:15,column:8},end:{line:15,column:46}},"16":{start:{line:16,column:8},end:{line:16,column:41}},"17":{start:{line:17,column:8},end:{line:20,column:10}},"18":{start:{line:23,column:44},end:{line:23,column:52}},"19":{start:{line:24,column:8},end:{line:26,column:86}},"20":{start:{line:29,column:18},end:{line:29,column:31}},"21":{start:{line:30,column:18},end:{line:30,column:31}},"22":{start:{line:31,column:28},end:{line:35,column:10}},"23":{start:{line:36,column:29},end:{line:36,column:84}},"24":{start:{line:37,column:23},end:{line:37,column:51}},"25":{start:{line:38,column:8},end:{line:41,column:11}},"26":{start:{line:44,column:50},end:{line:44,column:57}},"27":{start:{line:45,column:29},end:{line:45,column:63}},"28":{start:{line:46,column:29},end:{line:46,column:91}},"29":{start:{line:47,column:33},end:{line:49,column:59}},"30":{start:{line:50,column:8},end:{line:53,column:10}},"31":{start:{line:54,column:8},end:{line:54,column:57}},"32":{start:{line:55,column:8},end:{line:55,column:42}},"33":{start:{line:58,column:8},end:{line:58,column:80}},"34":{start:{line:59,column:8},end:{line:59,column:76}},"35":{start:{line:62,column:8},end:{line:62,column:44}},"36":{start:{line:65,column:8},end:{line:65,column:77}},"37":{start:{line:66,column:8},end:{line:66,column:73}},"38":{start:{line:69,column:0},end:{line:71,column:13}},"39":{start:{line:72,column:0},end:{line:72,column:28}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:46},end:{line:2,column:47}},loc:{start:{line:2,column:87},end:{line:7,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:12,column:4},end:{line:12,column:5}},loc:{start:{line:12,column:26},end:{line:21,column:5}},line:12},"2":{name:"(anonymous_2)",decl:{start:{line:22,column:4},end:{line:22,column:5}},loc:{start:{line:22,column:35},end:{line:27,column:5}},line:22},"3":{name:"(anonymous_3)",decl:{start:{line:28,column:4},end:{line:28,column:5}},loc:{start:{line:28,column:35},end:{line:42,column:5}},line:28},"4":{name:"(anonymous_4)",decl:{start:{line:43,column:4},end:{line:43,column:5}},loc:{start:{line:43,column:28},end:{line:56,column:5}},line:43},"5":{name:"(anonymous_5)",decl:{start:{line:57,column:4},end:{line:57,column:5}},loc:{start:{line:57,column:35},end:{line:60,column:5}},line:57},"6":{name:"(anonymous_6)",decl:{start:{line:61,column:4},end:{line:61,column:5}},loc:{start:{line:61,column:28},end:{line:63,column:5}},line:61},"7":{name:"(anonymous_7)",decl:{start:{line:64,column:4},end:{line:64,column:5}},loc:{start:{line:64,column:33},end:{line:67,column:5}},line:64}},branchMap:{"0":{loc:{start:{line:2,column:17},end:{line:7,column:1}},type:"binary-expr",locations:[{start:{line:2,column:18},end:{line:2,column:22}},{start:{line:2,column:26},end:{line:2,column:41}},{start:{line:2,column:46},end:{line:7,column:1}}],line:2},"1":{loc:{start:{line:3,column:34},end:{line:3,column:125}},type:"cond-expr",locations:[{start:{line:3,column:42},end:{line:3,column:48}},{start:{line:3,column:51},end:{line:3,column:125}}],line:3},"2":{loc:{start:{line:3,column:51},end:{line:3,column:125}},type:"cond-expr",locations:[{start:{line:3,column:67},end:{line:3,column:118}},{start:{line:3,column:121},end:{line:3,column:125}}],line:3},"3":{loc:{start:{line:4,column:4},end:{line:5,column:150}},type:"if",locations:[{start:{line:4,column:4},end:{line:5,column:150}},{start:{line:4,column:4},end:{line:5,column:150}}],line:4},"4":{loc:{start:{line:4,column:8},end:{line:4,column:77}},type:"binary-expr",locations:[{start:{line:4,column:8},end:{line:4,column:35}},{start:{line:4,column:39},end:{line:4,column:77}}],line:4},"5":{loc:{start:{line:5,column:58},end:{line:5,column:150}},type:"if",locations:[{start:{line:5,column:58},end:{line:5,column:150}},{start:{line:5,column:58},end:{line:5,column:150}}],line:5},"6":{loc:{start:{line:5,column:85},end:{line:5,column:149}},type:"binary-expr",locations:[{start:{line:5,column:86},end:{line:5,column:143}},{start:{line:5,column:148},end:{line:5,column:149}}],line:5},"7":{loc:{start:{line:5,column:86},end:{line:5,column:143}},type:"cond-expr",locations:[{start:{line:5,column:94},end:{line:5,column:98}},{start:{line:5,column:101},end:{line:5,column:143}}],line:5},"8":{loc:{start:{line:5,column:101},end:{line:5,column:143}},type:"cond-expr",locations:[{start:{line:5,column:109},end:{line:5,column:126}},{start:{line:5,column:129},end:{line:5,column:143}}],line:5},"9":{loc:{start:{line:6,column:11},end:{line:6,column:62}},type:"binary-expr",locations:[{start:{line:6,column:11},end:{line:6,column:16}},{start:{line:6,column:20},end:{line:6,column:21}},{start:{line:6,column:25},end:{line:6,column:62}}],line:6},"10":{loc:{start:{line:24,column:15},end:{line:26,column:85}},type:"cond-expr",locations:[{start:{line:25,column:14},end:{line:25,column:112}},{start:{line:26,column:14},end:{line:26,column:85}}],line:24},"11":{loc:{start:{line:37,column:23},end:{line:37,column:51}},type:"cond-expr",locations:[{start:{line:37,column:38},end:{line:37,column:44}},{start:{line:37,column:47},end:{line:37,column:51}}],line:37},"12":{loc:{start:{line:44,column:16},end:{line:44,column:21}},type:"default-arg",locations:[{start:{line:44,column:20},end:{line:44,column:21}}],line:44},"13":{loc:{start:{line:44,column:23},end:{line:44,column:28}},type:"default-arg",locations:[{start:{line:44,column:27},end:{line:44,column:28}}],line:44},"14":{loc:{start:{line:44,column:30},end:{line:44,column:44}},type:"default-arg",locations:[{start:{line:44,column:39},end:{line:44,column:44}}],line:44},"15":{loc:{start:{line:46,column:29},end:{line:46,column:91}},type:"cond-expr",locations:[{start:{line:46,column:44},end:{line:46,column:67}},{start:{line:46,column:70},end:{line:46,column:91}}],line:46},"16":{loc:{start:{line:47,column:33},end:{line:49,column:59}},type:"cond-expr",locations:[{start:{line:48,column:14},end:{line:48,column:87}},{start:{line:49,column:14},end:{line:49,column:59}}],line:47}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0},b:{"0":[0,0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0,0],"10":[0,0],"11":[0,0],"12":[0],"13":[0],"14":[0],"15":[0,0],"16":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\View\\Movement\\Movement.ts",sourceRoot:"",sources:["C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\View\\Movement\\Movement.ts"],names:[],mappings:";;;;;;;;;AAAA,2DAA0C;AAY1C,IAAa,QAAQ,GAArB,MAAa,QAAQ;IAWnB,YAAY,QAA0B;QACpC,IAAI,CAAC,MAAM,GAAG,QAAQ,CAAC,MAAM,CAAC;QAC9B,IAAI,CAAC,OAAO,GAAG,QAAQ,CAAC,OAAO,CAAC;QAChC,IAAI,CAAC,UAAU,GAAG,QAAQ,CAAC,UAAU,CAAC;QACtC,IAAI,CAAC,gBAAgB,GAAG,QAAQ,CAAC;QACjC,IAAI,CAAC,eAAe,GAAG;YACrB,MAAM,EAAE,IAAI,CAAC,OAAO,CAAC,UAAU;YAC/B,gBAAgB,EAAE,CAAC;SACpB,CAAC;IACJ,CAAC;IAEM,oBAAoB,CAAC,QAA+B;QACzD,MAAM,EACJ,CAAC,EACD,CAAC,EACD,gBAAgB,GACjB,GAAG,QAAQ,CAAC;QAEb,OAAO,IAAI,CAAC,UAAU,EAAE,CAAC,QAAQ;YAC/B,CAAC,CAAC,IAAI,CAAC,MAAM,CAAC,WAAW,GAAG,CAC1B,CAAC,GAAG,MAAM,CAAC,gBAAgB,CAAC,GAAG,IAAI,CAAC,MAAM,CAAC,qBAAqB,EAAE,CAAC,GAAG,CAAC;YACzE,CAAC,CAAC,CAAC,GAAG,MAAM,CAAC,gBAAgB,CAAC,GAAG,IAAI,CAAC,MAAM,CAAC,qBAAqB,EAAE,CAAC,IAAI,CAAC;IAC9E,CAAC;IAEO,uBAAuB,CAAC,KAAiB;QAC/C,MAAM,CAAC,GAAW,KAAK,CAAC,OAAO,CAAC;QAChC,MAAM,CAAC,GAAW,KAAK,CAAC,OAAO,CAAC;QAChC,MAAM,WAAW,GAAW,IAAI,CAAC,oBAAoB,CAAC;YACpD,CAAC;YACD,CAAC;YACD,gBAAgB,EAAE,IAAI,CAAC,eAAe,CAAC,gBAAgB;SACxD,CAAC,CAAC;QACH,MAAM,YAAY,GAAY,IAAI,CAAC,eAAe,CAAC,MAAM,KAAK,IAAI,CAAC,OAAO,CAAC,UAAU,CAAC;QACtF,MAAM,MAAM,GAAG,YAAY,CAAC,CAAC,CAAC,MAAM,CAAC,CAAC,CAAC,IAAI,CAAC;QAE5C,IAAI,CAAC,gBAAgB,CAAC,eAAe,CAAC,eAAe,CAAC;YACpD,MAAM;YACN,WAAW;SACZ,CAAC,CAAC;IACL,CAAC;IAEM,cAAc,CAAC,OAAsB;QAC1C,MAAM,EACJ,CAAC,GAAG,CAAC,EACL,CAAC,GAAG,CAAC,EACL,MAAM,GAAG,KAAK,GACf,GAAG,OAAO,CAAC;QACZ,MAAM,YAAY,GAAY,MAAM,KAAK,IAAI,CAAC,OAAO,CAAC,UAAU,CAAC;QACjE,MAAM,YAAY,GAAoB,YAAY,CAAC,CAAC,CAAC,IAAI,CAAC,OAAO,CAAC,UAAU,CAAC,CAAC,CAAC,IAAI,CAAC,OAAO,CAAC,QAAQ,CAAC;QACrG,MAAM,gBAAgB,GAAW,IAAI,CAAC,UAAU,EAAE,CAAC,QAAQ;YACzD,CAAC,CAAC,CAAC,GAAG,YAAY,CAAC,qBAAqB,EAAE,CAAC,GAAG,GAAG,CAAC,YAAY,CAAC,WAAW,CAAC;YAC3E,CAAC,CAAC,CAAC,GAAG,YAAY,CAAC,qBAAqB,EAAE,CAAC,IAAI,CAAC;QAClD,IAAI,CAAC,eAAe,GAAG;YACrB,MAAM,EAAE,YAAY;YACpB,gBAAgB;SACjB,CAAC;QAEF,IAAI,CAAC,OAAO,CAAC,qBAAqB,CAAC,YAAY,CAAC,CAAC;QAEjD,IAAI,CAAC,0BAA0B,EAAE,CAAC;IACpC,CAAC;IAEO,4BAA4B;QAClC,QAAQ,CAAC,mBAAmB,CAAC,WAAW,EAAE,IAAI,CAAC,uBAAuB,CAAC,CAAC;QACxE,QAAQ,CAAC,mBAAmB,CAAC,SAAS,EAAE,IAAI,CAAC,qBAAqB,CAAC,CAAC;IACtE,CAAC;IAEO,qBAAqB;QAC3B,IAAI,CAAC,4BAA4B,EAAE,CAAC;IACtC,CAAC;IAEO,0BAA0B;QAChC,QAAQ,CAAC,gBAAgB,CAAC,WAAW,EAAE,IAAI,CAAC,uBAAuB,CAAC,CAAC;QACrE,QAAQ,CAAC,gBAAgB,CAAC,SAAS,EAAE,IAAI,CAAC,qBAAqB,CAAC,CAAC;IACnE,CAAC;CACF,CAAA;AAtFY,QAAQ;IADpB,4BAAQ;GACI,QAAQ,CAsFpB;AAtFY,4BAAQ",sourcesContent:["import autobind from 'autobind-decorator';\nimport {\n  BasicViewSettings,\n} from '../types';\nimport {\n  HandleClickData, MovementCalculateData,\n  MovementEvent,\n  MovementSettings,\n} from './types';\nimport { Handles } from '../Handles/Handles';\n\n@autobind\nexport class Movement {\n  readonly slider: HTMLDivElement;\n\n  private readonly handles: Handles;\n\n  readonly getOptions: () => BasicViewSettings;\n\n  private handleClickData: HandleClickData;\n\n  public movementSettings: MovementSettings;\n\n  constructor(settings: MovementSettings) {\n    this.slider = settings.slider;\n    this.handles = settings.handles;\n    this.getOptions = settings.getOptions;\n    this.movementSettings = settings;\n    this.handleClickData = {\n      target: this.handles.fromHandle,\n      distanceToCursor: 0,\n    };\n  }\n\n  public calculateNewPosition(settings: MovementCalculateData): number {\n    const {\n      x,\n      y,\n      distanceToCursor,\n    } = settings;\n\n    return this.getOptions().vertical\n      ? this.slider.offsetWidth - (\n        y - Number(distanceToCursor) - this.slider.getBoundingClientRect().top)\n      : x - Number(distanceToCursor) - this.slider.getBoundingClientRect().left;\n  }\n\n  private handleDocumentMouseMove(event: MouseEvent): void {\n    const x: number = event.clientX;\n    const y: number = event.clientY;\n    const newPosition: number = this.calculateNewPosition({\n      x,\n      y,\n      distanceToCursor: this.handleClickData.distanceToCursor,\n    });\n    const isTargetFrom: boolean = this.handleClickData.target === this.handles.fromHandle;\n    const target = isTargetFrom ? 'from' : 'to';\n\n    this.movementSettings.environmentLink.updatePositions({\n      target,\n      newPosition,\n    });\n  }\n\n  public handleListener(setting: MovementEvent): void {\n    const {\n      x = 0,\n      y = 0,\n      target = false,\n    } = setting;\n    const isFromHandle: boolean = target === this.handles.fromHandle;\n    const targetHandle: HTMLSpanElement = isFromHandle ? this.handles.fromHandle : this.handles.toHandle;\n    const distanceToCursor: number = this.getOptions().vertical\n      ? y - targetHandle.getBoundingClientRect().top - (targetHandle.offsetWidth)\n      : x - targetHandle.getBoundingClientRect().left;\n    this.handleClickData = {\n      target: targetHandle,\n      distanceToCursor,\n    };\n\n    this.handles.updateMainHandleClass(targetHandle);\n\n    this.bindDocumentEventListeners();\n  }\n\n  private removeDocumentEventListeners(): void {\n    document.removeEventListener('mousemove', this.handleDocumentMouseMove);\n    document.removeEventListener('mouseup', this.handleDocumentMouseUp);\n  }\n\n  private handleDocumentMouseUp(): void {\n    this.removeDocumentEventListeners();\n  }\n\n  private bindDocumentEventListeners(): void {\n    document.addEventListener('mousemove', this.handleDocumentMouseMove);\n    document.addEventListener('mouseup', this.handleDocumentMouseUp);\n  }\n}\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __decorate=(cov_1invwyemn1.s[0]++,(cov_1invwyemn1.b[0][0]++,this)&&(cov_1invwyemn1.b[0][1]++,this.__decorate)||(cov_1invwyemn1.b[0][2]++,function(decorators,target,key,desc){cov_1invwyemn1.f[0]++;var c=(cov_1invwyemn1.s[1]++,arguments.length),r=(cov_1invwyemn1.s[2]++,c<3?(cov_1invwyemn1.b[1][0]++,target):(cov_1invwyemn1.b[1][1]++,desc===null?(cov_1invwyemn1.b[2][0]++,desc=Object.getOwnPropertyDescriptor(target,key)):(cov_1invwyemn1.b[2][1]++,desc))),d;cov_1invwyemn1.s[3]++;if((cov_1invwyemn1.b[4][0]++,typeof Reflect==="object")&&(cov_1invwyemn1.b[4][1]++,typeof Reflect.decorate==="function")){cov_1invwyemn1.b[3][0]++;cov_1invwyemn1.s[4]++;r=Reflect.decorate(decorators,target,key,desc);}else{cov_1invwyemn1.b[3][1]++;cov_1invwyemn1.s[5]++;for(var i=decorators.length-1;i>=0;i--){cov_1invwyemn1.s[6]++;if(d=decorators[i]){cov_1invwyemn1.b[5][0]++;cov_1invwyemn1.s[7]++;r=(cov_1invwyemn1.b[6][0]++,c<3?(cov_1invwyemn1.b[7][0]++,d(r)):(cov_1invwyemn1.b[7][1]++,c>3?(cov_1invwyemn1.b[8][0]++,d(target,key,r)):(cov_1invwyemn1.b[8][1]++,d(target,key))))||(cov_1invwyemn1.b[6][1]++,r);}else{cov_1invwyemn1.b[5][1]++;}}}cov_1invwyemn1.s[8]++;return(cov_1invwyemn1.b[9][0]++,c>3)&&(cov_1invwyemn1.b[9][1]++,r)&&(cov_1invwyemn1.b[9][2]++,Object.defineProperty(target,key,r)),r;}));cov_1invwyemn1.s[9]++;Object.defineProperty(exports, "__esModule", ({value:true}));cov_1invwyemn1.s[10]++;exports.Movement=void 0;const autobind_decorator_1=(cov_1invwyemn1.s[11]++,__webpack_require__(/*! autobind-decorator */ "./node_modules/autobind-decorator/lib/esm/index.js"));cov_1invwyemn1.s[12]++;let Movement=class Movement{constructor(settings){cov_1invwyemn1.f[1]++;cov_1invwyemn1.s[13]++;this.slider=settings.slider;cov_1invwyemn1.s[14]++;this.handles=settings.handles;cov_1invwyemn1.s[15]++;this.getOptions=settings.getOptions;cov_1invwyemn1.s[16]++;this.movementSettings=settings;cov_1invwyemn1.s[17]++;this.handleClickData={target:this.handles.fromHandle,distanceToCursor:0};}calculateNewPosition(settings){cov_1invwyemn1.f[2]++;const{x,y,distanceToCursor}=(cov_1invwyemn1.s[18]++,settings);cov_1invwyemn1.s[19]++;return this.getOptions().vertical?(cov_1invwyemn1.b[10][0]++,this.slider.offsetWidth-(y-Number(distanceToCursor)-this.slider.getBoundingClientRect().top)):(cov_1invwyemn1.b[10][1]++,x-Number(distanceToCursor)-this.slider.getBoundingClientRect().left);}handleDocumentMouseMove(event){cov_1invwyemn1.f[3]++;const x=(cov_1invwyemn1.s[20]++,event.clientX);const y=(cov_1invwyemn1.s[21]++,event.clientY);const newPosition=(cov_1invwyemn1.s[22]++,this.calculateNewPosition({x,y,distanceToCursor:this.handleClickData.distanceToCursor}));const isTargetFrom=(cov_1invwyemn1.s[23]++,this.handleClickData.target===this.handles.fromHandle);const target=(cov_1invwyemn1.s[24]++,isTargetFrom?(cov_1invwyemn1.b[11][0]++,'from'):(cov_1invwyemn1.b[11][1]++,'to'));cov_1invwyemn1.s[25]++;this.movementSettings.environmentLink.updatePositions({target,newPosition});}handleListener(setting){cov_1invwyemn1.f[4]++;const{x=(cov_1invwyemn1.b[12][0]++,0),y=(cov_1invwyemn1.b[13][0]++,0),target=(cov_1invwyemn1.b[14][0]++,false)}=(cov_1invwyemn1.s[26]++,setting);const isFromHandle=(cov_1invwyemn1.s[27]++,target===this.handles.fromHandle);const targetHandle=(cov_1invwyemn1.s[28]++,isFromHandle?(cov_1invwyemn1.b[15][0]++,this.handles.fromHandle):(cov_1invwyemn1.b[15][1]++,this.handles.toHandle));const distanceToCursor=(cov_1invwyemn1.s[29]++,this.getOptions().vertical?(cov_1invwyemn1.b[16][0]++,y-targetHandle.getBoundingClientRect().top-targetHandle.offsetWidth):(cov_1invwyemn1.b[16][1]++,x-targetHandle.getBoundingClientRect().left));cov_1invwyemn1.s[30]++;this.handleClickData={target:targetHandle,distanceToCursor};cov_1invwyemn1.s[31]++;this.handles.updateMainHandleClass(targetHandle);cov_1invwyemn1.s[32]++;this.bindDocumentEventListeners();}removeDocumentEventListeners(){cov_1invwyemn1.f[5]++;cov_1invwyemn1.s[33]++;document.removeEventListener('mousemove',this.handleDocumentMouseMove);cov_1invwyemn1.s[34]++;document.removeEventListener('mouseup',this.handleDocumentMouseUp);}handleDocumentMouseUp(){cov_1invwyemn1.f[6]++;cov_1invwyemn1.s[35]++;this.removeDocumentEventListeners();}bindDocumentEventListeners(){cov_1invwyemn1.f[7]++;cov_1invwyemn1.s[36]++;document.addEventListener('mousemove',this.handleDocumentMouseMove);cov_1invwyemn1.s[37]++;document.addEventListener('mouseup',this.handleDocumentMouseUp);}};cov_1invwyemn1.s[38]++;Movement=__decorate([autobind_decorator_1.default],Movement);cov_1invwyemn1.s[39]++;exports.Movement=Movement;

/***/ }),

/***/ "./src/plugin/View/SelectedInterval/SelectedInterval.ts":
/*!**************************************************************!*\
  !*** ./src/plugin/View/SelectedInterval/SelectedInterval.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var cov_29vsjshb27=function(){var path="C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\View\\SelectedInterval\\SelectedInterval.ts",hash="acad2ab05e67a298ac8256f8abd367017b261f08",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\View\\SelectedInterval\\SelectedInterval.ts",statementMap:{"0":{start:{line:2,column:17},end:{line:7,column:1}},"1":{start:{line:3,column:12},end:{line:3,column:28}},"2":{start:{line:3,column:34},end:{line:3,column:125}},"3":{start:{line:4,column:4},end:{line:5,column:150}},"4":{start:{line:4,column:79},end:{line:4,column:131}},"5":{start:{line:5,column:9},end:{line:5,column:150}},"6":{start:{line:5,column:58},end:{line:5,column:150}},"7":{start:{line:5,column:81},end:{line:5,column:150}},"8":{start:{line:6,column:4},end:{line:6,column:66}},"9":{start:{line:8,column:0},end:{line:8,column:62}},"10":{start:{line:9,column:0},end:{line:9,column:34}},"11":{start:{line:10,column:29},end:{line:10,column:58}},"12":{start:{line:11,column:23},end:{line:47,column:1}},"13":{start:{line:13,column:8},end:{line:13,column:53}},"14":{start:{line:14,column:8},end:{line:14,column:54}},"15":{start:{line:15,column:8},end:{line:15,column:37}},"16":{start:{line:18,column:64},end:{line:18,column:72}},"17":{start:{line:19,column:8},end:{line:24,column:9}},"18":{start:{line:20,column:12},end:{line:20,column:83}},"19":{start:{line:22,column:13},end:{line:24,column:9}},"20":{start:{line:23,column:12},end:{line:23,column:100}},"21":{start:{line:27,column:8},end:{line:27,column:56}},"22":{start:{line:30,column:8},end:{line:30,column:98}},"23":{start:{line:33,column:8},end:{line:33,column:96}},"24":{start:{line:36,column:8},end:{line:45,column:9}},"25":{start:{line:38,column:16},end:{line:38,column:76}},"26":{start:{line:39,column:16},end:{line:39,column:22}},"27":{start:{line:41,column:16},end:{line:41,column:79}},"28":{start:{line:42,column:16},end:{line:42,column:22}},"29":{start:{line:44,column:16},end:{line:44,column:22}},"30":{start:{line:48,column:0},end:{line:50,column:21}},"31":{start:{line:51,column:0},end:{line:51,column:44}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:46},end:{line:2,column:47}},loc:{start:{line:2,column:87},end:{line:7,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:12,column:4},end:{line:12,column:5}},loc:{start:{line:12,column:18},end:{line:16,column:5}},line:12},"2":{name:"(anonymous_2)",decl:{start:{line:17,column:4},end:{line:17,column:5}},loc:{start:{line:17,column:39},end:{line:25,column:5}},line:17},"3":{name:"(anonymous_3)",decl:{start:{line:26,column:4},end:{line:26,column:5}},loc:{start:{line:26,column:28},end:{line:28,column:5}},line:26},"4":{name:"(anonymous_4)",decl:{start:{line:29,column:4},end:{line:29,column:5}},loc:{start:{line:29,column:43},end:{line:31,column:5}},line:29},"5":{name:"(anonymous_5)",decl:{start:{line:32,column:4},end:{line:32,column:5}},loc:{start:{line:32,column:43},end:{line:34,column:5}},line:32},"6":{name:"(anonymous_6)",decl:{start:{line:35,column:4},end:{line:35,column:5}},loc:{start:{line:35,column:36},end:{line:46,column:5}},line:35}},branchMap:{"0":{loc:{start:{line:2,column:17},end:{line:7,column:1}},type:"binary-expr",locations:[{start:{line:2,column:18},end:{line:2,column:22}},{start:{line:2,column:26},end:{line:2,column:41}},{start:{line:2,column:46},end:{line:7,column:1}}],line:2},"1":{loc:{start:{line:3,column:34},end:{line:3,column:125}},type:"cond-expr",locations:[{start:{line:3,column:42},end:{line:3,column:48}},{start:{line:3,column:51},end:{line:3,column:125}}],line:3},"2":{loc:{start:{line:3,column:51},end:{line:3,column:125}},type:"cond-expr",locations:[{start:{line:3,column:67},end:{line:3,column:118}},{start:{line:3,column:121},end:{line:3,column:125}}],line:3},"3":{loc:{start:{line:4,column:4},end:{line:5,column:150}},type:"if",locations:[{start:{line:4,column:4},end:{line:5,column:150}},{start:{line:4,column:4},end:{line:5,column:150}}],line:4},"4":{loc:{start:{line:4,column:8},end:{line:4,column:77}},type:"binary-expr",locations:[{start:{line:4,column:8},end:{line:4,column:35}},{start:{line:4,column:39},end:{line:4,column:77}}],line:4},"5":{loc:{start:{line:5,column:58},end:{line:5,column:150}},type:"if",locations:[{start:{line:5,column:58},end:{line:5,column:150}},{start:{line:5,column:58},end:{line:5,column:150}}],line:5},"6":{loc:{start:{line:5,column:85},end:{line:5,column:149}},type:"binary-expr",locations:[{start:{line:5,column:86},end:{line:5,column:143}},{start:{line:5,column:148},end:{line:5,column:149}}],line:5},"7":{loc:{start:{line:5,column:86},end:{line:5,column:143}},type:"cond-expr",locations:[{start:{line:5,column:94},end:{line:5,column:98}},{start:{line:5,column:101},end:{line:5,column:143}}],line:5},"8":{loc:{start:{line:5,column:101},end:{line:5,column:143}},type:"cond-expr",locations:[{start:{line:5,column:109},end:{line:5,column:126}},{start:{line:5,column:129},end:{line:5,column:143}}],line:5},"9":{loc:{start:{line:6,column:11},end:{line:6,column:62}},type:"binary-expr",locations:[{start:{line:6,column:11},end:{line:6,column:16}},{start:{line:6,column:20},end:{line:6,column:21}},{start:{line:6,column:25},end:{line:6,column:62}}],line:6},"10":{loc:{start:{line:19,column:8},end:{line:24,column:9}},type:"if",locations:[{start:{line:19,column:8},end:{line:24,column:9}},{start:{line:19,column:8},end:{line:24,column:9}}],line:19},"11":{loc:{start:{line:22,column:13},end:{line:24,column:9}},type:"if",locations:[{start:{line:22,column:13},end:{line:24,column:9}},{start:{line:22,column:13},end:{line:24,column:9}}],line:22},"12":{loc:{start:{line:30,column:15},end:{line:30,column:97}},type:"binary-expr",locations:[{start:{line:30,column:16},end:{line:30,column:25}},{start:{line:30,column:31},end:{line:30,column:96}}],line:30},"13":{loc:{start:{line:33,column:15},end:{line:33,column:95}},type:"binary-expr",locations:[{start:{line:33,column:16},end:{line:33,column:24}},{start:{line:33,column:30},end:{line:33,column:94}}],line:33},"14":{loc:{start:{line:36,column:8},end:{line:45,column:9}},type:"switch",locations:[{start:{line:37,column:12},end:{line:39,column:22}},{start:{line:40,column:12},end:{line:42,column:22}},{start:{line:43,column:12},end:{line:44,column:22}}],line:36}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},b:{"0":[0,0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0,0]},inputSourceMap:{version:3,file:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\View\\SelectedInterval\\SelectedInterval.ts",sourceRoot:"",sources:["C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\View\\SelectedInterval\\SelectedInterval.ts"],names:[],mappings:";;;;;;;;;AAAA,2DAA0C;AAI1C,IAAa,gBAAgB,GAA7B,MAAa,gBAAgB;IAK3B;QAFiB,kBAAa,GAAW,uBAAuB,CAAC;QAG/D,IAAI,CAAC,QAAQ,GAAG,QAAQ,CAAC,aAAa,CAAC,KAAK,CAAC,CAAC;QAC9C,IAAI,CAAC,qBAAqB,EAAE,CAAC;IAC/B,CAAC;IAEM,wBAAwB,CAAC,QAAyB;QACvD,MAAM,EACJ,MAAM,EACN,QAAQ,EACR,WAAW,EACX,WAAW,GACZ,GAAG,QAAQ,CAAC;QAEb,IAAI,MAAM,KAAK,MAAM,EAAE;YACrB,IAAI,CAAC,QAAQ,CAAC,KAAK,CAAC,IAAI,GAAG,GAAG,MAAM,CAAC,QAAQ,CAAC,GAAG,CAAC,WAAW,GAAG,CAAC,CAAC,IAAI,CAAC;SACxE;aAAM,IAAI,MAAM,KAAK,IAAI,EAAE;YAC1B,IAAI,CAAC,QAAQ,CAAC,KAAK,CAAC,KAAK,GAAG,GAAG,CAAC,WAAW,GAAG,MAAM,CAAC,QAAQ,CAAC,CAAC,GAAG,CAAC,WAAW,GAAG,CAAC,CAAC,IAAI,CAAC;SACzF;IACH,CAAC;IAEO,qBAAqB;QAC3B,IAAI,CAAC,QAAQ,CAAC,SAAS,CAAC,GAAG,CAAC,IAAI,CAAC,aAAa,CAAC,CAAC;IAClD,CAAC;IAEO,4BAA4B,CAAC,QAAiB;QACpD,OAAO,CAAC,CAAC,QAAQ,CAAC,IAAI,CAAC,CAAC,IAAI,CAAC,QAAQ,CAAC,SAAS,CAAC,QAAQ,CAAC,GAAG,IAAI,CAAC,aAAa,SAAS,CAAC,CAAC,CAAC;IAC5F,CAAC;IAEO,4BAA4B,CAAC,QAAiB;QACpD,OAAO,CAAC,QAAQ,CAAC,IAAI,CAAC,IAAI,CAAC,QAAQ,CAAC,SAAS,CAAC,QAAQ,CAAC,GAAG,IAAI,CAAC,aAAa,SAAS,CAAC,CAAC,CAAC;IAC1F,CAAC;IAEM,qBAAqB,CAAC,QAAiB;QAC5C,QAAQ,IAAI,EAAE;YACZ,KAAK,IAAI,CAAC,4BAA4B,CAAC,QAAQ,CAAC;gBAC9C,IAAI,CAAC,QAAQ,CAAC,SAAS,CAAC,GAAG,CAAC,GAAG,IAAI,CAAC,aAAa,SAAS,CAAC,CAAC;gBAC5D,MAAM;YACR,KAAK,IAAI,CAAC,4BAA4B,CAAC,QAAQ,CAAC;gBAC9C,IAAI,CAAC,QAAQ,CAAC,SAAS,CAAC,MAAM,CAAC,GAAG,IAAI,CAAC,aAAa,SAAS,CAAC,CAAC;gBAC/D,MAAM;YACR;gBACE,MAAM;SACT;IACH,CAAC;CACF,CAAA;AAjDY,gBAAgB;IAD5B,4BAAQ;GACI,gBAAgB,CAiD5B;AAjDY,4CAAgB",sourcesContent:["import autobind from 'autobind-decorator';\nimport { NewIntervalData } from './types';\n\n@autobind\nexport class SelectedInterval {\n  readonly interval: HTMLDivElement;\n\n  private readonly intervalClass: string = 'goby-slider__interval';\n\n  constructor() {\n    this.interval = document.createElement('div');\n    this.initializeHTMLElement();\n  }\n\n  public refreshIntervalPositions(settings: NewIntervalData):void {\n    const {\n      target,\n      position,\n      sliderWidth,\n      handleWidth,\n    } = settings;\n\n    if (target === 'from') {\n      this.interval.style.left = `${Number(position) + (handleWidth / 2)}px`;\n    } else if (target === 'to') {\n      this.interval.style.right = `${(sliderWidth - Number(position)) - (handleWidth / 2)}px`;\n    }\n  }\n\n  private initializeHTMLElement(): void {\n    this.interval.classList.add(this.intervalClass);\n  }\n\n  private checkIsIntervalShouldBeHided(isDouble: boolean): boolean {\n    return (!isDouble) && (!this.interval.classList.contains(`${this.intervalClass}_hidden`));\n  }\n\n  private checkIsIntervalShouldBeShown(isDouble: boolean): boolean {\n    return (isDouble) && (this.interval.classList.contains(`${this.intervalClass}_hidden`));\n  }\n\n  public changeIntervalDisplay(isDouble: boolean): void {\n    switch (true) {\n      case this.checkIsIntervalShouldBeHided(isDouble):\n        this.interval.classList.add(`${this.intervalClass}_hidden`);\n        break;\n      case this.checkIsIntervalShouldBeShown(isDouble):\n        this.interval.classList.remove(`${this.intervalClass}_hidden`);\n        break;\n      default:\n        break;\n    }\n  }\n}\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __decorate=(cov_29vsjshb27.s[0]++,(cov_29vsjshb27.b[0][0]++,this)&&(cov_29vsjshb27.b[0][1]++,this.__decorate)||(cov_29vsjshb27.b[0][2]++,function(decorators,target,key,desc){cov_29vsjshb27.f[0]++;var c=(cov_29vsjshb27.s[1]++,arguments.length),r=(cov_29vsjshb27.s[2]++,c<3?(cov_29vsjshb27.b[1][0]++,target):(cov_29vsjshb27.b[1][1]++,desc===null?(cov_29vsjshb27.b[2][0]++,desc=Object.getOwnPropertyDescriptor(target,key)):(cov_29vsjshb27.b[2][1]++,desc))),d;cov_29vsjshb27.s[3]++;if((cov_29vsjshb27.b[4][0]++,typeof Reflect==="object")&&(cov_29vsjshb27.b[4][1]++,typeof Reflect.decorate==="function")){cov_29vsjshb27.b[3][0]++;cov_29vsjshb27.s[4]++;r=Reflect.decorate(decorators,target,key,desc);}else{cov_29vsjshb27.b[3][1]++;cov_29vsjshb27.s[5]++;for(var i=decorators.length-1;i>=0;i--){cov_29vsjshb27.s[6]++;if(d=decorators[i]){cov_29vsjshb27.b[5][0]++;cov_29vsjshb27.s[7]++;r=(cov_29vsjshb27.b[6][0]++,c<3?(cov_29vsjshb27.b[7][0]++,d(r)):(cov_29vsjshb27.b[7][1]++,c>3?(cov_29vsjshb27.b[8][0]++,d(target,key,r)):(cov_29vsjshb27.b[8][1]++,d(target,key))))||(cov_29vsjshb27.b[6][1]++,r);}else{cov_29vsjshb27.b[5][1]++;}}}cov_29vsjshb27.s[8]++;return(cov_29vsjshb27.b[9][0]++,c>3)&&(cov_29vsjshb27.b[9][1]++,r)&&(cov_29vsjshb27.b[9][2]++,Object.defineProperty(target,key,r)),r;}));cov_29vsjshb27.s[9]++;Object.defineProperty(exports, "__esModule", ({value:true}));cov_29vsjshb27.s[10]++;exports.SelectedInterval=void 0;const autobind_decorator_1=(cov_29vsjshb27.s[11]++,__webpack_require__(/*! autobind-decorator */ "./node_modules/autobind-decorator/lib/esm/index.js"));cov_29vsjshb27.s[12]++;let SelectedInterval=class SelectedInterval{constructor(){cov_29vsjshb27.f[1]++;cov_29vsjshb27.s[13]++;this.intervalClass='goby-slider__interval';cov_29vsjshb27.s[14]++;this.interval=document.createElement('div');cov_29vsjshb27.s[15]++;this.initializeHTMLElement();}refreshIntervalPositions(settings){cov_29vsjshb27.f[2]++;const{target,position,sliderWidth,handleWidth}=(cov_29vsjshb27.s[16]++,settings);cov_29vsjshb27.s[17]++;if(target==='from'){cov_29vsjshb27.b[10][0]++;cov_29vsjshb27.s[18]++;this.interval.style.left=`${Number(position)+handleWidth/2}px`;}else{cov_29vsjshb27.b[10][1]++;cov_29vsjshb27.s[19]++;if(target==='to'){cov_29vsjshb27.b[11][0]++;cov_29vsjshb27.s[20]++;this.interval.style.right=`${sliderWidth-Number(position)-handleWidth/2}px`;}else{cov_29vsjshb27.b[11][1]++;}}}initializeHTMLElement(){cov_29vsjshb27.f[3]++;cov_29vsjshb27.s[21]++;this.interval.classList.add(this.intervalClass);}checkIsIntervalShouldBeHided(isDouble){cov_29vsjshb27.f[4]++;cov_29vsjshb27.s[22]++;return(cov_29vsjshb27.b[12][0]++,!isDouble)&&(cov_29vsjshb27.b[12][1]++,!this.interval.classList.contains(`${this.intervalClass}_hidden`));}checkIsIntervalShouldBeShown(isDouble){cov_29vsjshb27.f[5]++;cov_29vsjshb27.s[23]++;return(cov_29vsjshb27.b[13][0]++,isDouble)&&(cov_29vsjshb27.b[13][1]++,this.interval.classList.contains(`${this.intervalClass}_hidden`));}changeIntervalDisplay(isDouble){cov_29vsjshb27.f[6]++;cov_29vsjshb27.s[24]++;switch(true){case this.checkIsIntervalShouldBeHided(isDouble):cov_29vsjshb27.b[14][0]++;cov_29vsjshb27.s[25]++;this.interval.classList.add(`${this.intervalClass}_hidden`);cov_29vsjshb27.s[26]++;break;case this.checkIsIntervalShouldBeShown(isDouble):cov_29vsjshb27.b[14][1]++;cov_29vsjshb27.s[27]++;this.interval.classList.remove(`${this.intervalClass}_hidden`);cov_29vsjshb27.s[28]++;break;default:cov_29vsjshb27.b[14][2]++;cov_29vsjshb27.s[29]++;break;}}};cov_29vsjshb27.s[30]++;SelectedInterval=__decorate([autobind_decorator_1.default],SelectedInterval);cov_29vsjshb27.s[31]++;exports.SelectedInterval=SelectedInterval;

/***/ }),

/***/ "./src/plugin/View/Slider/Slider.ts":
/*!******************************************!*\
  !*** ./src/plugin/View/Slider/Slider.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var cov_2m6ikcmzxw=function(){var path="C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\View\\Slider\\Slider.ts",hash="e300c2a5e233ec28eebdbb42b0dedc7fac69e6c1",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\View\\Slider\\Slider.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:0},end:{line:3,column:24}},"2":{start:{line:6,column:8},end:{line:6,column:57}},"3":{start:{line:7,column:8},end:{line:7,column:52}},"4":{start:{line:8,column:8},end:{line:8,column:59}},"5":{start:{line:9,column:8},end:{line:9,column:34}},"6":{start:{line:12,column:8},end:{line:12,column:55}},"7":{start:{line:13,column:8},end:{line:13,column:64}},"8":{start:{line:14,column:8},end:{line:14,column:54}},"9":{start:{line:15,column:8},end:{line:15,column:47}},"10":{start:{line:16,column:8},end:{line:16,column:52}},"11":{start:{line:19,column:8},end:{line:19,column:292}},"12":{start:{line:22,column:8},end:{line:22,column:103}},"13":{start:{line:25,column:8},end:{line:25,column:103}},"14":{start:{line:28,column:8},end:{line:39,column:9}},"15":{start:{line:30,column:16},end:{line:30,column:81}},"16":{start:{line:31,column:16},end:{line:31,column:90}},"17":{start:{line:32,column:16},end:{line:32,column:22}},"18":{start:{line:34,column:16},end:{line:34,column:81}},"19":{start:{line:35,column:16},end:{line:35,column:90}},"20":{start:{line:36,column:16},end:{line:36,column:22}},"21":{start:{line:38,column:16},end:{line:38,column:22}},"22":{start:{line:42,column:0},end:{line:42,column:24}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:5,column:4},end:{line:5,column:5}},loc:{start:{line:5,column:18},end:{line:10,column:5}},line:5},"1":{name:"(anonymous_1)",decl:{start:{line:11,column:4},end:{line:11,column:5}},loc:{start:{line:11,column:25},end:{line:17,column:5}},line:11},"2":{name:"(anonymous_2)",decl:{start:{line:18,column:4},end:{line:18,column:5}},loc:{start:{line:18,column:39},end:{line:20,column:5}},line:18},"3":{name:"(anonymous_3)",decl:{start:{line:21,column:4},end:{line:21,column:5}},loc:{start:{line:21,column:49},end:{line:23,column:5}},line:21},"4":{name:"(anonymous_4)",decl:{start:{line:24,column:4},end:{line:24,column:5}},loc:{start:{line:24,column:45},end:{line:26,column:5}},line:24},"5":{name:"(anonymous_5)",decl:{start:{line:27,column:4},end:{line:27,column:5}},loc:{start:{line:27,column:28},end:{line:40,column:5}},line:27}},branchMap:{"0":{loc:{start:{line:22,column:16},end:{line:22,column:101}},type:"binary-expr",locations:[{start:{line:22,column:17},end:{line:22,column:83}},{start:{line:22,column:89},end:{line:22,column:100}}],line:22},"1":{loc:{start:{line:25,column:16},end:{line:25,column:101}},type:"binary-expr",locations:[{start:{line:25,column:17},end:{line:25,column:84}},{start:{line:25,column:90},end:{line:25,column:100}}],line:25},"2":{loc:{start:{line:28,column:8},end:{line:39,column:9}},type:"switch",locations:[{start:{line:29,column:12},end:{line:32,column:22}},{start:{line:33,column:12},end:{line:36,column:22}},{start:{line:37,column:12},end:{line:38,column:22}}],line:28}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0},b:{"0":[0,0],"1":[0,0],"2":[0,0,0]},inputSourceMap:{version:3,file:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\View\\Slider\\Slider.ts",sourceRoot:"",sources:["C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\View\\Slider\\Slider.ts"],names:[],mappings:";;;AAEA,MAAa,MAAM;IAOjB;QACE,IAAI,CAAC,WAAW,GAAG,QAAQ,CAAC,aAAa,CAAC,KAAK,CAAC,CAAC;QACjD,IAAI,CAAC,MAAM,GAAG,QAAQ,CAAC,aAAa,CAAC,KAAK,CAAC,CAAC;QAC5C,IAAI,CAAC,aAAa,GAAG,QAAQ,CAAC,aAAa,CAAC,KAAK,CAAC,CAAC;QAEnD,IAAI,CAAC,kBAAkB,EAAE,CAAC;IAC5B,CAAC;IAEO,kBAAkB;QACxB,IAAI,CAAC,MAAM,CAAC,SAAS,CAAC,GAAG,CAAC,mBAAmB,CAAC,CAAC;QAC/C,IAAI,CAAC,aAAa,CAAC,SAAS,CAAC,GAAG,CAAC,qBAAqB,CAAC,CAAC;QACxD,IAAI,CAAC,WAAW,CAAC,SAAS,CAAC,GAAG,CAAC,aAAa,CAAC,CAAC;QAC9C,IAAI,CAAC,aAAa,CAAC,MAAM,CAAC,IAAI,CAAC,MAAM,CAAC,CAAC;QACvC,IAAI,CAAC,WAAW,CAAC,MAAM,CAAC,IAAI,CAAC,aAAa,CAAC,CAAC;IAC9C,CAAC;IAEM,wBAAwB,CAAC,QAAiC;QAC/D,IAAI,CAAC,MAAM,CAAC,MAAM,CAChB,QAAQ,CAAC,IAAI,EACb,QAAQ,CAAC,EAAE,EACX,QAAQ,CAAC,QAAQ,EACjB,QAAQ,CAAC,UAAU,CAAC,QAAQ,EAC5B,QAAQ,CAAC,UAAU,CAAC,QAAQ,EAC5B,QAAQ,CAAC,UAAU,CAAC,kBAAkB,EACtC,QAAQ,CAAC,UAAU,CAAC,iBAAiB,EACrC,QAAQ,CAAC,UAAU,CAAC,iBAAiB,EACrC,QAAQ,CAAC,UAAU,CAAC,kBAAkB,CACvC,CAAC;IACJ,CAAC;IAEO,gCAAgC,CAAC,UAAmB;QAC1D,OAAO,CAAC,CAAC,IAAI,CAAC,MAAM,CAAC,SAAS,CAAC,QAAQ,CAAC,kCAAkC,CAAC,CAAC,IAAI,CAAC,CAAC,UAAU,CAAC,CAAC,CAAC;IACjG,CAAC;IAEO,4BAA4B,CAAC,UAAmB;QACtD,OAAO,CAAC,CAAC,CAAC,IAAI,CAAC,MAAM,CAAC,SAAS,CAAC,QAAQ,CAAC,kCAAkC,CAAC,CAAC,IAAI,CAAC,UAAU,CAAC,CAAC,CAAC;IACjG,CAAC;IAEM,WAAW,CAAC,UAAmB;QACpC,QAAQ,IAAI,EAAE;YACZ,KAAK,IAAI,CAAC,4BAA4B,CAAC,UAAU,CAAC;gBAChD,IAAI,CAAC,MAAM,CAAC,SAAS,CAAC,MAAM,CAAC,kCAAkC,CAAC,CAAC;gBACjE,IAAI,CAAC,aAAa,CAAC,SAAS,CAAC,MAAM,CAAC,oCAAoC,CAAC,CAAC;gBAC1E,MAAM;YACR,KAAK,IAAI,CAAC,gCAAgC,CAAC,UAAU,CAAC;gBACpD,IAAI,CAAC,MAAM,CAAC,SAAS,CAAC,MAAM,CAAC,kCAAkC,CAAC,CAAC;gBACjE,IAAI,CAAC,aAAa,CAAC,SAAS,CAAC,MAAM,CAAC,oCAAoC,CAAC,CAAC;gBAC1E,MAAM;YACR;gBACE,MAAM;SACT;IACH,CAAC;CACF;AA3DD,wBA2DC",sourcesContent:["import { SliderAssemblerSettings } from './types';\n\nexport class Slider {\n  readonly slider: HTMLDivElement;\n\n  readonly sliderWrapper: HTMLDivElement;\n\n  readonly mainWrapper: HTMLDivElement;\n\n  constructor() {\n    this.mainWrapper = document.createElement('div');\n    this.slider = document.createElement('div');\n    this.sliderWrapper = document.createElement('div');\n\n    this.createHTMLElements();\n  }\n\n  private createHTMLElements(): void {\n    this.slider.classList.add('goby-slider__body');\n    this.sliderWrapper.classList.add('goby-slider__slider');\n    this.mainWrapper.classList.add('goby-slider');\n    this.sliderWrapper.append(this.slider);\n    this.mainWrapper.append(this.sliderWrapper);\n  }\n\n  public initializeSliderElements(settings: SliderAssemblerSettings): void {\n    this.slider.append(\n      settings.from,\n      settings.to,\n      settings.interval,\n      settings.valueScale.minValue,\n      settings.valueScale.maxValue,\n      settings.valueScale.twentyPercentValue,\n      settings.valueScale.fortyPercentValue,\n      settings.valueScale.sixtyPercentValue,\n      settings.valueScale.eightyPercentValue,\n    );\n  }\n\n  private checkIsNeedToDisplayHorizontally(isVertical: boolean): boolean {\n    return ((this.slider.classList.contains('goby-slider__body_state_vertical')) && (!isVertical));\n  }\n\n  private checkIsNeedToDisplayVertical(isVertical: boolean): boolean {\n    return ((!this.slider.classList.contains('goby-slider__body_state_vertical')) && (isVertical));\n  }\n\n  public changePlane(isVertical: boolean): void {\n    switch (true) {\n      case this.checkIsNeedToDisplayVertical(isVertical):\n        this.slider.classList.toggle('goby-slider__body_state_vertical');\n        this.sliderWrapper.classList.toggle('goby-slider__slider_state_vertical');\n        break;\n      case this.checkIsNeedToDisplayHorizontally(isVertical):\n        this.slider.classList.toggle('goby-slider__body_state_vertical');\n        this.sliderWrapper.classList.toggle('goby-slider__slider_state_vertical');\n        break;\n      default:\n        break;\n    }\n  }\n}\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_2m6ikcmzxw.s[0]++;Object.defineProperty(exports, "__esModule", ({value:true}));cov_2m6ikcmzxw.s[1]++;exports.Slider=void 0;class Slider{constructor(){cov_2m6ikcmzxw.f[0]++;cov_2m6ikcmzxw.s[2]++;this.mainWrapper=document.createElement('div');cov_2m6ikcmzxw.s[3]++;this.slider=document.createElement('div');cov_2m6ikcmzxw.s[4]++;this.sliderWrapper=document.createElement('div');cov_2m6ikcmzxw.s[5]++;this.createHTMLElements();}createHTMLElements(){cov_2m6ikcmzxw.f[1]++;cov_2m6ikcmzxw.s[6]++;this.slider.classList.add('goby-slider__body');cov_2m6ikcmzxw.s[7]++;this.sliderWrapper.classList.add('goby-slider__slider');cov_2m6ikcmzxw.s[8]++;this.mainWrapper.classList.add('goby-slider');cov_2m6ikcmzxw.s[9]++;this.sliderWrapper.append(this.slider);cov_2m6ikcmzxw.s[10]++;this.mainWrapper.append(this.sliderWrapper);}initializeSliderElements(settings){cov_2m6ikcmzxw.f[2]++;cov_2m6ikcmzxw.s[11]++;this.slider.append(settings.from,settings.to,settings.interval,settings.valueScale.minValue,settings.valueScale.maxValue,settings.valueScale.twentyPercentValue,settings.valueScale.fortyPercentValue,settings.valueScale.sixtyPercentValue,settings.valueScale.eightyPercentValue);}checkIsNeedToDisplayHorizontally(isVertical){cov_2m6ikcmzxw.f[3]++;cov_2m6ikcmzxw.s[12]++;return(cov_2m6ikcmzxw.b[0][0]++,this.slider.classList.contains('goby-slider__body_state_vertical'))&&(cov_2m6ikcmzxw.b[0][1]++,!isVertical);}checkIsNeedToDisplayVertical(isVertical){cov_2m6ikcmzxw.f[4]++;cov_2m6ikcmzxw.s[13]++;return(cov_2m6ikcmzxw.b[1][0]++,!this.slider.classList.contains('goby-slider__body_state_vertical'))&&(cov_2m6ikcmzxw.b[1][1]++,isVertical);}changePlane(isVertical){cov_2m6ikcmzxw.f[5]++;cov_2m6ikcmzxw.s[14]++;switch(true){case this.checkIsNeedToDisplayVertical(isVertical):cov_2m6ikcmzxw.b[2][0]++;cov_2m6ikcmzxw.s[15]++;this.slider.classList.toggle('goby-slider__body_state_vertical');cov_2m6ikcmzxw.s[16]++;this.sliderWrapper.classList.toggle('goby-slider__slider_state_vertical');cov_2m6ikcmzxw.s[17]++;break;case this.checkIsNeedToDisplayHorizontally(isVertical):cov_2m6ikcmzxw.b[2][1]++;cov_2m6ikcmzxw.s[18]++;this.slider.classList.toggle('goby-slider__body_state_vertical');cov_2m6ikcmzxw.s[19]++;this.sliderWrapper.classList.toggle('goby-slider__slider_state_vertical');cov_2m6ikcmzxw.s[20]++;break;default:cov_2m6ikcmzxw.b[2][2]++;cov_2m6ikcmzxw.s[21]++;break;}}}cov_2m6ikcmzxw.s[22]++;exports.Slider=Slider;

/***/ }),

/***/ "./src/plugin/View/ValuesScale/ValuesScale.ts":
/*!****************************************************!*\
  !*** ./src/plugin/View/ValuesScale/ValuesScale.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var cov_2fk0jnpbhn=function(){var path="C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\View\\ValuesScale\\ValuesScale.ts",hash="655eedd781c9581a13b2467ccf753f2353f2199c",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\View\\ValuesScale\\ValuesScale.ts",statementMap:{"0":{start:{line:2,column:17},end:{line:7,column:1}},"1":{start:{line:3,column:12},end:{line:3,column:28}},"2":{start:{line:3,column:34},end:{line:3,column:125}},"3":{start:{line:4,column:4},end:{line:5,column:150}},"4":{start:{line:4,column:79},end:{line:4,column:131}},"5":{start:{line:5,column:9},end:{line:5,column:150}},"6":{start:{line:5,column:58},end:{line:5,column:150}},"7":{start:{line:5,column:81},end:{line:5,column:150}},"8":{start:{line:6,column:4},end:{line:6,column:66}},"9":{start:{line:8,column:0},end:{line:8,column:62}},"10":{start:{line:9,column:0},end:{line:9,column:29}},"11":{start:{line:10,column:29},end:{line:10,column:58}},"12":{start:{line:11,column:18},end:{line:105,column:1}},"13":{start:{line:13,column:8},end:{line:13,column:47}},"14":{start:{line:14,column:8},end:{line:14,column:55}},"15":{start:{line:15,column:8},end:{line:15,column:55}},"16":{start:{line:16,column:8},end:{line:16,column:67}},"17":{start:{line:17,column:8},end:{line:17,column:66}},"18":{start:{line:18,column:8},end:{line:18,column:66}},"19":{start:{line:19,column:8},end:{line:19,column:67}},"20":{start:{line:20,column:8},end:{line:20,column:47}},"21":{start:{line:21,column:8},end:{line:28,column:10}},"22":{start:{line:29,column:8},end:{line:29,column:73}},"23":{start:{line:29,column:39},end:{line:29,column:71}},"24":{start:{line:32,column:24},end:{line:32,column:54}},"25":{start:{line:33,column:8},end:{line:33,column:86}},"26":{start:{line:34,column:8},end:{line:34,column:23}},"27":{start:{line:37,column:8},end:{line:44,column:20}},"28":{start:{line:47,column:46},end:{line:47,column:111}},"29":{start:{line:47,column:59},end:{line:47,column:111}},"30":{start:{line:48,column:39},end:{line:48,column:141}},"31":{start:{line:48,column:65},end:{line:48,column:141}},"32":{start:{line:49,column:8},end:{line:49,column:80}},"33":{start:{line:50,column:8},end:{line:50,column:81}},"34":{start:{line:51,column:8},end:{line:51,column:98}},"35":{start:{line:52,column:8},end:{line:52,column:96}},"36":{start:{line:53,column:8},end:{line:53,column:96}},"37":{start:{line:54,column:8},end:{line:54,column:98}},"38":{start:{line:57,column:8},end:{line:62,column:97}},"39":{start:{line:65,column:8},end:{line:65,column:65}},"40":{start:{line:68,column:8},end:{line:68,column:65}},"41":{start:{line:71,column:30},end:{line:75,column:9}},"42":{start:{line:72,column:12},end:{line:74,column:15}},"43":{start:{line:73,column:16},end:{line:73,column:78}},"44":{start:{line:76,column:38},end:{line:77,column:64}},"45":{start:{line:78,column:8},end:{line:79,column:28}},"46":{start:{line:79,column:12},end:{line:79,column:28}},"47":{start:{line:82,column:8},end:{line:91,column:9}},"48":{start:{line:83,column:12},end:{line:85,column:15}},"49":{start:{line:84,column:16},end:{line:84,column:67}},"50":{start:{line:88,column:12},end:{line:90,column:15}},"51":{start:{line:89,column:16},end:{line:89,column:70}},"52":{start:{line:94,column:8},end:{line:95,column:19}},"53":{start:{line:95,column:12},end:{line:95,column:19}},"54":{start:{line:96,column:28},end:{line:96,column:40}},"55":{start:{line:97,column:8},end:{line:100,column:11}},"56":{start:{line:103,column:8},end:{line:103,column:63}},"57":{start:{line:106,column:0},end:{line:108,column:16}},"58":{start:{line:109,column:0},end:{line:109,column:34}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:46},end:{line:2,column:47}},loc:{start:{line:2,column:87},end:{line:7,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:12,column:4},end:{line:12,column:5}},loc:{start:{line:12,column:33},end:{line:30,column:5}},line:12},"2":{name:"(anonymous_2)",decl:{start:{line:29,column:28},end:{line:29,column:29}},loc:{start:{line:29,column:39},end:{line:29,column:71}},line:29},"3":{name:"(anonymous_3)",decl:{start:{line:31,column:4},end:{line:31,column:5}},loc:{start:{line:31,column:33},end:{line:35,column:5}},line:31},"4":{name:"(anonymous_4)",decl:{start:{line:36,column:4},end:{line:36,column:5}},loc:{start:{line:36,column:30},end:{line:45,column:5}},line:36},"5":{name:"(anonymous_5)",decl:{start:{line:46,column:4},end:{line:46,column:5}},loc:{start:{line:46,column:43},end:{line:55,column:5}},line:46},"6":{name:"(anonymous_6)",decl:{start:{line:47,column:46},end:{line:47,column:47}},loc:{start:{line:47,column:59},end:{line:47,column:111}},line:47},"7":{name:"(anonymous_7)",decl:{start:{line:48,column:39},end:{line:48,column:40}},loc:{start:{line:48,column:65},end:{line:48,column:141}},line:48},"8":{name:"(anonymous_8)",decl:{start:{line:56,column:4},end:{line:56,column:5}},loc:{start:{line:56,column:34},end:{line:63,column:5}},line:56},"9":{name:"(anonymous_9)",decl:{start:{line:64,column:4},end:{line:64,column:5}},loc:{start:{line:64,column:49},end:{line:66,column:5}},line:64},"10":{name:"(anonymous_10)",decl:{start:{line:67,column:4},end:{line:67,column:5}},loc:{start:{line:67,column:45},end:{line:69,column:5}},line:67},"11":{name:"(anonymous_11)",decl:{start:{line:70,column:4},end:{line:70,column:5}},loc:{start:{line:70,column:28},end:{line:80,column:5}},line:70},"12":{name:"(anonymous_12)",decl:{start:{line:71,column:30},end:{line:71,column:31}},loc:{start:{line:71,column:36},end:{line:75,column:9}},line:71},"13":{name:"(anonymous_13)",decl:{start:{line:72,column:32},end:{line:72,column:33}},loc:{start:{line:72,column:45},end:{line:74,column:13}},line:72},"14":{name:"(anonymous_14)",decl:{start:{line:81,column:4},end:{line:81,column:5}},loc:{start:{line:81,column:42},end:{line:92,column:5}},line:81},"15":{name:"(anonymous_15)",decl:{start:{line:83,column:32},end:{line:83,column:33}},loc:{start:{line:83,column:45},end:{line:85,column:13}},line:83},"16":{name:"(anonymous_16)",decl:{start:{line:88,column:32},end:{line:88,column:33}},loc:{start:{line:88,column:45},end:{line:90,column:13}},line:88},"17":{name:"(anonymous_17)",decl:{start:{line:93,column:4},end:{line:93,column:5}},loc:{start:{line:93,column:28},end:{line:101,column:5}},line:93},"18":{name:"(anonymous_18)",decl:{start:{line:102,column:4},end:{line:102,column:5}},loc:{start:{line:102,column:32},end:{line:104,column:5}},line:102}},branchMap:{"0":{loc:{start:{line:2,column:17},end:{line:7,column:1}},type:"binary-expr",locations:[{start:{line:2,column:18},end:{line:2,column:22}},{start:{line:2,column:26},end:{line:2,column:41}},{start:{line:2,column:46},end:{line:7,column:1}}],line:2},"1":{loc:{start:{line:3,column:34},end:{line:3,column:125}},type:"cond-expr",locations:[{start:{line:3,column:42},end:{line:3,column:48}},{start:{line:3,column:51},end:{line:3,column:125}}],line:3},"2":{loc:{start:{line:3,column:51},end:{line:3,column:125}},type:"cond-expr",locations:[{start:{line:3,column:67},end:{line:3,column:118}},{start:{line:3,column:121},end:{line:3,column:125}}],line:3},"3":{loc:{start:{line:4,column:4},end:{line:5,column:150}},type:"if",locations:[{start:{line:4,column:4},end:{line:5,column:150}},{start:{line:4,column:4},end:{line:5,column:150}}],line:4},"4":{loc:{start:{line:4,column:8},end:{line:4,column:77}},type:"binary-expr",locations:[{start:{line:4,column:8},end:{line:4,column:35}},{start:{line:4,column:39},end:{line:4,column:77}}],line:4},"5":{loc:{start:{line:5,column:58},end:{line:5,column:150}},type:"if",locations:[{start:{line:5,column:58},end:{line:5,column:150}},{start:{line:5,column:58},end:{line:5,column:150}}],line:5},"6":{loc:{start:{line:5,column:85},end:{line:5,column:149}},type:"binary-expr",locations:[{start:{line:5,column:86},end:{line:5,column:143}},{start:{line:5,column:148},end:{line:5,column:149}}],line:5},"7":{loc:{start:{line:5,column:86},end:{line:5,column:143}},type:"cond-expr",locations:[{start:{line:5,column:94},end:{line:5,column:98}},{start:{line:5,column:101},end:{line:5,column:143}}],line:5},"8":{loc:{start:{line:5,column:101},end:{line:5,column:143}},type:"cond-expr",locations:[{start:{line:5,column:109},end:{line:5,column:126}},{start:{line:5,column:129},end:{line:5,column:143}}],line:5},"9":{loc:{start:{line:6,column:11},end:{line:6,column:62}},type:"binary-expr",locations:[{start:{line:6,column:11},end:{line:6,column:16}},{start:{line:6,column:20},end:{line:6,column:21}},{start:{line:6,column:25},end:{line:6,column:62}}],line:6},"10":{loc:{start:{line:57,column:15},end:{line:62,column:96}},type:"binary-expr",locations:[{start:{line:57,column:16},end:{line:57,column:85}},{start:{line:58,column:16},end:{line:58,column:85}},{start:{line:59,column:16},end:{line:59,column:95}},{start:{line:60,column:16},end:{line:60,column:94}},{start:{line:61,column:16},end:{line:61,column:94}},{start:{line:62,column:16},end:{line:62,column:95}}],line:57},"11":{loc:{start:{line:65,column:15},end:{line:65,column:64}},type:"binary-expr",locations:[{start:{line:65,column:15},end:{line:65,column:49}},{start:{line:65,column:53},end:{line:65,column:64}}],line:65},"12":{loc:{start:{line:68,column:15},end:{line:68,column:64}},type:"binary-expr",locations:[{start:{line:68,column:15},end:{line:68,column:50}},{start:{line:68,column:54},end:{line:68,column:64}}],line:68},"13":{loc:{start:{line:76,column:38},end:{line:77,column:64}},type:"binary-expr",locations:[{start:{line:76,column:38},end:{line:76,column:83}},{start:{line:77,column:15},end:{line:77,column:64}}],line:76},"14":{loc:{start:{line:78,column:8},end:{line:79,column:28}},type:"if",locations:[{start:{line:78,column:8},end:{line:79,column:28}},{start:{line:78,column:8},end:{line:79,column:28}}],line:78},"15":{loc:{start:{line:82,column:8},end:{line:91,column:9}},type:"if",locations:[{start:{line:82,column:8},end:{line:91,column:9}},{start:{line:82,column:8},end:{line:91,column:9}}],line:82},"16":{loc:{start:{line:94,column:8},end:{line:95,column:19}},type:"if",locations:[{start:{line:94,column:8},end:{line:95,column:19}},{start:{line:94,column:8},end:{line:95,column:19}}],line:94}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0},b:{"0":[0,0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0,0],"10":[0,0,0,0,0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0],"15":[0,0],"16":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\View\\ValuesScale\\ValuesScale.ts",sourceRoot:"",sources:["C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\View\\ValuesScale\\ValuesScale.ts"],names:[],mappings:"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",sourcesContent:["import autobind from 'autobind-decorator';\nimport { DataForValueScale } from '../../Model/types';\nimport { IValuesScale } from './interfaces';\nimport { PassNewValue } from '../types';\n\n@autobind\nexport class ValuesScale implements IValuesScale {\n  readonly minValue: HTMLSpanElement;\n\n  readonly maxValue: HTMLSpanElement;\n\n  readonly twentyPercentValue: HTMLSpanElement;\n\n  readonly fortyPercentValue: HTMLSpanElement;\n\n  readonly sixtyPercentValue: HTMLSpanElement;\n\n  readonly eightyPercentValue: HTMLSpanElement;\n\n  readonly valueClass: string = 'goby-slider__value';\n\n  readonly values: Array<HTMLSpanElement>;\n\n  private readonly environmentLink: { passNewValue: PassNewValue };\n\n  constructor(environmentLink: { passNewValue: PassNewValue }) {\n    this.minValue = this.createElement('type_min');\n    this.maxValue = this.createElement('type_max');\n    this.twentyPercentValue = this.createElement('percent_20');\n    this.fortyPercentValue = this.createElement('percent_40');\n    this.sixtyPercentValue = this.createElement('percent_60');\n    this.eightyPercentValue = this.createElement('percent_80');\n    this.environmentLink = environmentLink;\n\n    this.values = [\n      this.minValue,\n      this.maxValue,\n      this.twentyPercentValue,\n      this.fortyPercentValue,\n      this.sixtyPercentValue,\n      this.eightyPercentValue,\n    ];\n    this.values.forEach((value) => this.bindHandleValueClick(value));\n  }\n\n  private createElement(classModifier: string): HTMLSpanElement {\n    const element: HTMLSpanElement = document.createElement('span');\n\n    element.classList.add(this.valueClass, `${this.valueClass}_${classModifier}`);\n\n    return element;\n  }\n\n  public refreshValueScale(values: DataForValueScale): void {\n    ({\n      min: this.minValue.innerText,\n      max: this.maxValue.innerText,\n      20: this.twentyPercentValue.innerText,\n      40: this.fortyPercentValue.innerText,\n      60: this.sixtyPercentValue.innerText,\n      80: this.eightyPercentValue.innerText,\n    } = values);\n  }\n\n  public centerValues(sliderWidth: number, handleWidth: number): void {\n    const calculateExtremeValuePosition = (element: HTMLSpanElement): string => `${\n      0 - ((element.offsetWidth - handleWidth) / 2)\n    }px`;\n    const calculateValuePosition = (coefficient: number, element: HTMLSpanElement): string => `${\n      sliderWidth * coefficient - ((element.offsetWidth - handleWidth) / 2)\n    }px`;\n\n    this.minValue.style.left = calculateExtremeValuePosition(this.minValue);\n    this.maxValue.style.right = calculateExtremeValuePosition(this.maxValue);\n    this.twentyPercentValue.style.left = calculateValuePosition(0.2, this.twentyPercentValue);\n    this.fortyPercentValue.style.left = calculateValuePosition(0.4, this.fortyPercentValue);\n    this.sixtyPercentValue.style.left = calculateValuePosition(0.6, this.sixtyPercentValue);\n    this.eightyPercentValue.style.left = calculateValuePosition(0.8, this.eightyPercentValue);\n  }\n\n  private checkIsContainVerticalClass(): boolean {\n    return (this.minValue.classList.contains(`${this.valueClass}_state_vertical`))\n      && (this.maxValue.classList.contains(`${this.valueClass}_state_vertical`))\n      && (this.twentyPercentValue.classList.contains(`${this.valueClass}_state_vertical`))\n      && (this.fortyPercentValue.classList.contains(`${this.valueClass}_state_vertical`))\n      && (this.sixtyPercentValue.classList.contains(`${this.valueClass}_state_vertical`))\n      && (this.eightyPercentValue.classList.contains(`${this.valueClass}_state_vertical`));\n  }\n\n  private checkIsNeedToDisplayHorizontally(isVertical: boolean): boolean {\n    return this.checkIsContainVerticalClass() && !isVertical;\n  }\n\n  private checkIsNeedToDisplayVertical(isVertical: boolean): boolean {\n    return !this.checkIsContainVerticalClass() && isVertical;\n  }\n\n  public changePlane(isVertical: boolean): void {\n    const changeClasses = (): void => {\n      this.values.forEach((element: HTMLSpanElement): void => {\n        element.classList.toggle(`${this.valueClass}_state_vertical`);\n      });\n    };\n\n    const isNeedToChangeClasses = this.checkIsNeedToDisplayVertical(isVertical)\n      || this.checkIsNeedToDisplayHorizontally(isVertical);\n\n    if (isNeedToChangeClasses) changeClasses();\n  }\n\n  public changeValueScaleDisplay(isValueScale: boolean): void {\n    if (!isValueScale) {\n      this.values.forEach((element: HTMLSpanElement): void => {\n        element.classList.add(`${this.valueClass}_hidden`);\n      });\n    } else {\n      this.values.forEach((element: HTMLSpanElement): void => {\n        element.classList.remove(`${this.valueClass}_hidden`);\n      });\n    }\n  }\n\n  private handleValueClick(event: Event): void {\n    if (!event.target) return;\n    const eventTarget: HTMLSpanElement = event.target as HTMLSpanElement;\n\n    this.environmentLink.passNewValue({\n      target: 'unspecified',\n      newPosition: Number(eventTarget.innerText),\n    });\n  }\n\n  private bindHandleValueClick(value: HTMLSpanElement):void {\n    value.addEventListener('click', this.handleValueClick);\n  }\n}\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __decorate=(cov_2fk0jnpbhn.s[0]++,(cov_2fk0jnpbhn.b[0][0]++,this)&&(cov_2fk0jnpbhn.b[0][1]++,this.__decorate)||(cov_2fk0jnpbhn.b[0][2]++,function(decorators,target,key,desc){cov_2fk0jnpbhn.f[0]++;var c=(cov_2fk0jnpbhn.s[1]++,arguments.length),r=(cov_2fk0jnpbhn.s[2]++,c<3?(cov_2fk0jnpbhn.b[1][0]++,target):(cov_2fk0jnpbhn.b[1][1]++,desc===null?(cov_2fk0jnpbhn.b[2][0]++,desc=Object.getOwnPropertyDescriptor(target,key)):(cov_2fk0jnpbhn.b[2][1]++,desc))),d;cov_2fk0jnpbhn.s[3]++;if((cov_2fk0jnpbhn.b[4][0]++,typeof Reflect==="object")&&(cov_2fk0jnpbhn.b[4][1]++,typeof Reflect.decorate==="function")){cov_2fk0jnpbhn.b[3][0]++;cov_2fk0jnpbhn.s[4]++;r=Reflect.decorate(decorators,target,key,desc);}else{cov_2fk0jnpbhn.b[3][1]++;cov_2fk0jnpbhn.s[5]++;for(var i=decorators.length-1;i>=0;i--){cov_2fk0jnpbhn.s[6]++;if(d=decorators[i]){cov_2fk0jnpbhn.b[5][0]++;cov_2fk0jnpbhn.s[7]++;r=(cov_2fk0jnpbhn.b[6][0]++,c<3?(cov_2fk0jnpbhn.b[7][0]++,d(r)):(cov_2fk0jnpbhn.b[7][1]++,c>3?(cov_2fk0jnpbhn.b[8][0]++,d(target,key,r)):(cov_2fk0jnpbhn.b[8][1]++,d(target,key))))||(cov_2fk0jnpbhn.b[6][1]++,r);}else{cov_2fk0jnpbhn.b[5][1]++;}}}cov_2fk0jnpbhn.s[8]++;return(cov_2fk0jnpbhn.b[9][0]++,c>3)&&(cov_2fk0jnpbhn.b[9][1]++,r)&&(cov_2fk0jnpbhn.b[9][2]++,Object.defineProperty(target,key,r)),r;}));cov_2fk0jnpbhn.s[9]++;Object.defineProperty(exports, "__esModule", ({value:true}));cov_2fk0jnpbhn.s[10]++;exports.ValuesScale=void 0;const autobind_decorator_1=(cov_2fk0jnpbhn.s[11]++,__webpack_require__(/*! autobind-decorator */ "./node_modules/autobind-decorator/lib/esm/index.js"));cov_2fk0jnpbhn.s[12]++;let ValuesScale=class ValuesScale{constructor(environmentLink){cov_2fk0jnpbhn.f[1]++;cov_2fk0jnpbhn.s[13]++;this.valueClass='goby-slider__value';cov_2fk0jnpbhn.s[14]++;this.minValue=this.createElement('type_min');cov_2fk0jnpbhn.s[15]++;this.maxValue=this.createElement('type_max');cov_2fk0jnpbhn.s[16]++;this.twentyPercentValue=this.createElement('percent_20');cov_2fk0jnpbhn.s[17]++;this.fortyPercentValue=this.createElement('percent_40');cov_2fk0jnpbhn.s[18]++;this.sixtyPercentValue=this.createElement('percent_60');cov_2fk0jnpbhn.s[19]++;this.eightyPercentValue=this.createElement('percent_80');cov_2fk0jnpbhn.s[20]++;this.environmentLink=environmentLink;cov_2fk0jnpbhn.s[21]++;this.values=[this.minValue,this.maxValue,this.twentyPercentValue,this.fortyPercentValue,this.sixtyPercentValue,this.eightyPercentValue];cov_2fk0jnpbhn.s[22]++;this.values.forEach(value=>{cov_2fk0jnpbhn.f[2]++;cov_2fk0jnpbhn.s[23]++;return this.bindHandleValueClick(value);});}createElement(classModifier){cov_2fk0jnpbhn.f[3]++;const element=(cov_2fk0jnpbhn.s[24]++,document.createElement('span'));cov_2fk0jnpbhn.s[25]++;element.classList.add(this.valueClass,`${this.valueClass}_${classModifier}`);cov_2fk0jnpbhn.s[26]++;return element;}refreshValueScale(values){cov_2fk0jnpbhn.f[4]++;cov_2fk0jnpbhn.s[27]++;({min:this.minValue.innerText,max:this.maxValue.innerText,20:this.twentyPercentValue.innerText,40:this.fortyPercentValue.innerText,60:this.sixtyPercentValue.innerText,80:this.eightyPercentValue.innerText}=values);}centerValues(sliderWidth,handleWidth){cov_2fk0jnpbhn.f[5]++;cov_2fk0jnpbhn.s[28]++;const calculateExtremeValuePosition=element=>{cov_2fk0jnpbhn.f[6]++;cov_2fk0jnpbhn.s[29]++;return`${0-(element.offsetWidth-handleWidth)/2}px`;};cov_2fk0jnpbhn.s[30]++;const calculateValuePosition=(coefficient,element)=>{cov_2fk0jnpbhn.f[7]++;cov_2fk0jnpbhn.s[31]++;return`${sliderWidth*coefficient-(element.offsetWidth-handleWidth)/2}px`;};cov_2fk0jnpbhn.s[32]++;this.minValue.style.left=calculateExtremeValuePosition(this.minValue);cov_2fk0jnpbhn.s[33]++;this.maxValue.style.right=calculateExtremeValuePosition(this.maxValue);cov_2fk0jnpbhn.s[34]++;this.twentyPercentValue.style.left=calculateValuePosition(0.2,this.twentyPercentValue);cov_2fk0jnpbhn.s[35]++;this.fortyPercentValue.style.left=calculateValuePosition(0.4,this.fortyPercentValue);cov_2fk0jnpbhn.s[36]++;this.sixtyPercentValue.style.left=calculateValuePosition(0.6,this.sixtyPercentValue);cov_2fk0jnpbhn.s[37]++;this.eightyPercentValue.style.left=calculateValuePosition(0.8,this.eightyPercentValue);}checkIsContainVerticalClass(){cov_2fk0jnpbhn.f[8]++;cov_2fk0jnpbhn.s[38]++;return(cov_2fk0jnpbhn.b[10][0]++,this.minValue.classList.contains(`${this.valueClass}_state_vertical`))&&(cov_2fk0jnpbhn.b[10][1]++,this.maxValue.classList.contains(`${this.valueClass}_state_vertical`))&&(cov_2fk0jnpbhn.b[10][2]++,this.twentyPercentValue.classList.contains(`${this.valueClass}_state_vertical`))&&(cov_2fk0jnpbhn.b[10][3]++,this.fortyPercentValue.classList.contains(`${this.valueClass}_state_vertical`))&&(cov_2fk0jnpbhn.b[10][4]++,this.sixtyPercentValue.classList.contains(`${this.valueClass}_state_vertical`))&&(cov_2fk0jnpbhn.b[10][5]++,this.eightyPercentValue.classList.contains(`${this.valueClass}_state_vertical`));}checkIsNeedToDisplayHorizontally(isVertical){cov_2fk0jnpbhn.f[9]++;cov_2fk0jnpbhn.s[39]++;return(cov_2fk0jnpbhn.b[11][0]++,this.checkIsContainVerticalClass())&&(cov_2fk0jnpbhn.b[11][1]++,!isVertical);}checkIsNeedToDisplayVertical(isVertical){cov_2fk0jnpbhn.f[10]++;cov_2fk0jnpbhn.s[40]++;return(cov_2fk0jnpbhn.b[12][0]++,!this.checkIsContainVerticalClass())&&(cov_2fk0jnpbhn.b[12][1]++,isVertical);}changePlane(isVertical){cov_2fk0jnpbhn.f[11]++;cov_2fk0jnpbhn.s[41]++;const changeClasses=()=>{cov_2fk0jnpbhn.f[12]++;cov_2fk0jnpbhn.s[42]++;this.values.forEach(element=>{cov_2fk0jnpbhn.f[13]++;cov_2fk0jnpbhn.s[43]++;element.classList.toggle(`${this.valueClass}_state_vertical`);});};const isNeedToChangeClasses=(cov_2fk0jnpbhn.s[44]++,(cov_2fk0jnpbhn.b[13][0]++,this.checkIsNeedToDisplayVertical(isVertical))||(cov_2fk0jnpbhn.b[13][1]++,this.checkIsNeedToDisplayHorizontally(isVertical)));cov_2fk0jnpbhn.s[45]++;if(isNeedToChangeClasses){cov_2fk0jnpbhn.b[14][0]++;cov_2fk0jnpbhn.s[46]++;changeClasses();}else{cov_2fk0jnpbhn.b[14][1]++;}}changeValueScaleDisplay(isValueScale){cov_2fk0jnpbhn.f[14]++;cov_2fk0jnpbhn.s[47]++;if(!isValueScale){cov_2fk0jnpbhn.b[15][0]++;cov_2fk0jnpbhn.s[48]++;this.values.forEach(element=>{cov_2fk0jnpbhn.f[15]++;cov_2fk0jnpbhn.s[49]++;element.classList.add(`${this.valueClass}_hidden`);});}else{cov_2fk0jnpbhn.b[15][1]++;cov_2fk0jnpbhn.s[50]++;this.values.forEach(element=>{cov_2fk0jnpbhn.f[16]++;cov_2fk0jnpbhn.s[51]++;element.classList.remove(`${this.valueClass}_hidden`);});}}handleValueClick(event){cov_2fk0jnpbhn.f[17]++;cov_2fk0jnpbhn.s[52]++;if(!event.target){cov_2fk0jnpbhn.b[16][0]++;cov_2fk0jnpbhn.s[53]++;return;}else{cov_2fk0jnpbhn.b[16][1]++;}const eventTarget=(cov_2fk0jnpbhn.s[54]++,event.target);cov_2fk0jnpbhn.s[55]++;this.environmentLink.passNewValue({target:'unspecified',newPosition:Number(eventTarget.innerText)});}bindHandleValueClick(value){cov_2fk0jnpbhn.f[18]++;cov_2fk0jnpbhn.s[56]++;value.addEventListener('click',this.handleValueClick);}};cov_2fk0jnpbhn.s[57]++;ValuesScale=__decorate([autobind_decorator_1.default],ValuesScale);cov_2fk0jnpbhn.s[58]++;exports.ValuesScale=ValuesScale;

/***/ }),

/***/ "./src/plugin/View/View.ts":
/*!*********************************!*\
  !*** ./src/plugin/View/View.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var cov_1duwu9qi6x=function(){var path="C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\View\\View.ts",hash="50076845bcffe5534647537fc50fffa9df3495f8",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\View\\View.ts",statementMap:{"0":{start:{line:2,column:17},end:{line:7,column:1}},"1":{start:{line:3,column:12},end:{line:3,column:28}},"2":{start:{line:3,column:34},end:{line:3,column:125}},"3":{start:{line:4,column:4},end:{line:5,column:150}},"4":{start:{line:4,column:79},end:{line:4,column:131}},"5":{start:{line:5,column:9},end:{line:5,column:150}},"6":{start:{line:5,column:58},end:{line:5,column:150}},"7":{start:{line:5,column:81},end:{line:5,column:150}},"8":{start:{line:6,column:4},end:{line:6,column:66}},"9":{start:{line:8,column:0},end:{line:8,column:62}},"10":{start:{line:9,column:0},end:{line:9,column:22}},"11":{start:{line:10,column:29},end:{line:10,column:58}},"12":{start:{line:11,column:17},end:{line:11,column:43}},"13":{start:{line:12,column:18},end:{line:12,column:46}},"14":{start:{line:13,column:19},end:{line:13,column:49}},"15":{start:{line:14,column:27},end:{line:14,column:73}},"16":{start:{line:15,column:22},end:{line:15,column:58}},"17":{start:{line:16,column:11},end:{line:120,column:1}},"18":{start:{line:18,column:8},end:{line:18,column:43}},"19":{start:{line:18,column:38},end:{line:18,column:42}},"20":{start:{line:19,column:8},end:{line:19,column:46}},"21":{start:{line:19,column:41},end:{line:19,column:45}},"22":{start:{line:20,column:8},end:{line:20,column:49}},"23":{start:{line:20,column:42},end:{line:20,column:48}},"24":{start:{line:21,column:8},end:{line:21,column:32}},"25":{start:{line:22,column:8},end:{line:22,column:44}},"26":{start:{line:23,column:8},end:{line:23,column:47}},"27":{start:{line:24,column:8},end:{line:24,column:66}},"28":{start:{line:25,column:8},end:{line:25,column:63}},"29":{start:{line:26,column:8},end:{line:26,column:37}},"30":{start:{line:27,column:8},end:{line:32,column:11}},"31":{start:{line:35,column:8},end:{line:40,column:11}},"32":{start:{line:41,column:8},end:{line:41,column:55}},"33":{start:{line:44,column:8},end:{line:44,column:34}},"34":{start:{line:45,column:8},end:{line:45,column:30}},"35":{start:{line:46,column:8},end:{line:46,column:26}},"36":{start:{line:47,column:8},end:{line:47,column:37}},"37":{start:{line:50,column:24},end:{line:50,column:41}},"38":{start:{line:51,column:8},end:{line:51,column:50}},"39":{start:{line:52,column:8},end:{line:52,column:51}},"40":{start:{line:53,column:8},end:{line:53,column:55}},"41":{start:{line:54,column:8},end:{line:57,column:11}},"42":{start:{line:58,column:8},end:{line:58,column:60}},"43":{start:{line:59,column:8},end:{line:59,column:69}},"44":{start:{line:60,column:8},end:{line:60,column:71}},"45":{start:{line:63,column:49},end:{line:63,column:57}},"46":{start:{line:64,column:26},end:{line:64,column:56}},"47":{start:{line:65,column:28},end:{line:65,column:63}},"48":{start:{line:66,column:8},end:{line:67,column:50}},"49":{start:{line:70,column:8},end:{line:70,column:51}},"50":{start:{line:71,column:8},end:{line:71,column:145}},"51":{start:{line:74,column:31},end:{line:79,column:9}},"52":{start:{line:80,column:8},end:{line:80,column:83}},"53":{start:{line:81,column:8},end:{line:86,column:11}},"54":{start:{line:89,column:8},end:{line:91,column:11}},"55":{start:{line:90,column:12},end:{line:90,column:77}},"56":{start:{line:92,column:8},end:{line:92,column:85}},"57":{start:{line:93,column:8},end:{line:93,column:67}},"58":{start:{line:96,column:23},end:{line:96,column:35}},"59":{start:{line:97,column:8},end:{line:101,column:11}},"60":{start:{line:104,column:32},end:{line:104,column:110}},"61":{start:{line:105,column:8},end:{line:106,column:19}},"62":{start:{line:106,column:12},end:{line:106,column:19}},"63":{start:{line:107,column:32},end:{line:107,column:71}},"64":{start:{line:108,column:8},end:{line:115,column:11}},"65":{start:{line:118,column:8},end:{line:118,column:38}},"66":{start:{line:121,column:0},end:{line:123,column:9}},"67":{start:{line:124,column:0},end:{line:124,column:20}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:46},end:{line:2,column:47}},loc:{start:{line:2,column:87},end:{line:7,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:17,column:4},end:{line:17,column:5}},loc:{start:{line:17,column:36},end:{line:33,column:5}},line:17},"2":{name:"(anonymous_2)",decl:{start:{line:18,column:28},end:{line:18,column:29}},loc:{start:{line:18,column:38},end:{line:18,column:42}},line:18},"3":{name:"(anonymous_3)",decl:{start:{line:19,column:31},end:{line:19,column:32}},loc:{start:{line:19,column:41},end:{line:19,column:45}},line:19},"4":{name:"(anonymous_4)",decl:{start:{line:20,column:30},end:{line:20,column:31}},loc:{start:{line:20,column:42},end:{line:20,column:48}},line:20},"5":{name:"(anonymous_5)",decl:{start:{line:34,column:4},end:{line:34,column:5}},loc:{start:{line:34,column:21},end:{line:42,column:5}},line:34},"6":{name:"(anonymous_6)",decl:{start:{line:43,column:4},end:{line:43,column:5}},loc:{start:{line:43,column:17},end:{line:48,column:5}},line:43},"7":{name:"(anonymous_7)",decl:{start:{line:49,column:4},end:{line:49,column:5}},loc:{start:{line:49,column:17},end:{line:61,column:5}},line:49},"8":{name:"(anonymous_8)",decl:{start:{line:62,column:4},end:{line:62,column:5}},loc:{start:{line:62,column:37},end:{line:68,column:5}},line:62},"9":{name:"(anonymous_9)",decl:{start:{line:69,column:4},end:{line:69,column:5}},loc:{start:{line:69,column:30},end:{line:72,column:5}},line:69},"10":{name:"(anonymous_10)",decl:{start:{line:73,column:4},end:{line:73,column:5}},loc:{start:{line:73,column:34},end:{line:87,column:5}},line:73},"11":{name:"(anonymous_11)",decl:{start:{line:88,column:4},end:{line:88,column:5}},loc:{start:{line:88,column:25},end:{line:94,column:5}},line:88},"12":{name:"(anonymous_12)",decl:{start:{line:89,column:65},end:{line:89,column:66}},loc:{start:{line:89,column:77},end:{line:91,column:9}},line:89},"13":{name:"(anonymous_13)",decl:{start:{line:95,column:4},end:{line:95,column:5}},loc:{start:{line:95,column:33},end:{line:102,column:5}},line:95},"14":{name:"(anonymous_14)",decl:{start:{line:103,column:4},end:{line:103,column:5}},loc:{start:{line:103,column:33},end:{line:116,column:5}},line:103},"15":{name:"(anonymous_15)",decl:{start:{line:117,column:4},end:{line:117,column:5}},loc:{start:{line:117,column:25},end:{line:119,column:5}},line:117}},branchMap:{"0":{loc:{start:{line:2,column:17},end:{line:7,column:1}},type:"binary-expr",locations:[{start:{line:2,column:18},end:{line:2,column:22}},{start:{line:2,column:26},end:{line:2,column:41}},{start:{line:2,column:46},end:{line:7,column:1}}],line:2},"1":{loc:{start:{line:3,column:34},end:{line:3,column:125}},type:"cond-expr",locations:[{start:{line:3,column:42},end:{line:3,column:48}},{start:{line:3,column:51},end:{line:3,column:125}}],line:3},"2":{loc:{start:{line:3,column:51},end:{line:3,column:125}},type:"cond-expr",locations:[{start:{line:3,column:67},end:{line:3,column:118}},{start:{line:3,column:121},end:{line:3,column:125}}],line:3},"3":{loc:{start:{line:4,column:4},end:{line:5,column:150}},type:"if",locations:[{start:{line:4,column:4},end:{line:5,column:150}},{start:{line:4,column:4},end:{line:5,column:150}}],line:4},"4":{loc:{start:{line:4,column:8},end:{line:4,column:77}},type:"binary-expr",locations:[{start:{line:4,column:8},end:{line:4,column:35}},{start:{line:4,column:39},end:{line:4,column:77}}],line:4},"5":{loc:{start:{line:5,column:58},end:{line:5,column:150}},type:"if",locations:[{start:{line:5,column:58},end:{line:5,column:150}},{start:{line:5,column:58},end:{line:5,column:150}}],line:5},"6":{loc:{start:{line:5,column:85},end:{line:5,column:149}},type:"binary-expr",locations:[{start:{line:5,column:86},end:{line:5,column:143}},{start:{line:5,column:148},end:{line:5,column:149}}],line:5},"7":{loc:{start:{line:5,column:86},end:{line:5,column:143}},type:"cond-expr",locations:[{start:{line:5,column:94},end:{line:5,column:98}},{start:{line:5,column:101},end:{line:5,column:143}}],line:5},"8":{loc:{start:{line:5,column:101},end:{line:5,column:143}},type:"cond-expr",locations:[{start:{line:5,column:109},end:{line:5,column:126}},{start:{line:5,column:129},end:{line:5,column:143}}],line:5},"9":{loc:{start:{line:6,column:11},end:{line:6,column:62}},type:"binary-expr",locations:[{start:{line:6,column:11},end:{line:6,column:16}},{start:{line:6,column:20},end:{line:6,column:21}},{start:{line:6,column:25},end:{line:6,column:62}}],line:6},"10":{loc:{start:{line:104,column:32},end:{line:104,column:110}},type:"binary-expr",locations:[{start:{line:104,column:32},end:{line:104,column:71}},{start:{line:104,column:75},end:{line:104,column:110}}],line:104},"11":{loc:{start:{line:105,column:8},end:{line:106,column:19}},type:"if",locations:[{start:{line:105,column:8},end:{line:106,column:19}},{start:{line:105,column:8},end:{line:106,column:19}}],line:105}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0,"59":0,"60":0,"61":0,"62":0,"63":0,"64":0,"65":0,"66":0,"67":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0},b:{"0":[0,0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0,0],"10":[0,0],"11":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\View\\View.ts",sourceRoot:"",sources:["C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\View\\View.ts"],names:[],mappings:"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",sourcesContent:["import autobind from 'autobind-decorator';\nimport { Slider } from './Slider/Slider';\nimport { Handles } from './Handles/Handles';\nimport { Movement } from './Movement/Movement';\nimport { SelectedInterval } from './SelectedInterval/SelectedInterval';\nimport { ValuesScale } from './ValuesScale/ValuesScale';\nimport {\n  DataFromModel,\n  BasicViewSettings,\n  NewHandlesData,\n  UpdatePositionsData,\n  PassNewValue,\n} from './types';\nimport { DataForValueScale } from '../Model/types';\n\n@autobind\nexport class View {\n  readonly container: HTMLElement;\n\n  readonly slider: Slider;\n\n  readonly handles: Handles;\n\n  readonly movement: Movement;\n\n  readonly interval: SelectedInterval;\n\n  readonly valuesScale: ValuesScale;\n\n  public getOptions: () => BasicViewSettings;\n\n  public passNewValue: PassNewValue = (data: UpdatePositionsData) => data;\n\n  public updatePositions: PassNewValue = (data: UpdatePositionsData) => data;\n\n  public callViewUpdate: (target: string) => string = (target) => target;\n\n  constructor(getOptions: () => BasicViewSettings, target: HTMLElement) {\n    this.container = target;\n    this.slider = new Slider();\n    this.handles = new Handles();\n    this.interval = new SelectedInterval();\n    this.valuesScale = new ValuesScale(this);\n    this.getOptions = getOptions;\n    this.movement = new Movement({\n      slider: this.slider.slider,\n      handles: this.handles,\n      environmentLink: this,\n      getOptions: this.getOptions,\n    });\n  }\n\n  private addSliderToDOM(): void {\n    this.slider.initializeSliderElements({\n      from: this.handles.fromHandle,\n      to: this.handles.toHandle,\n      interval: this.interval.interval,\n      valueScale: this.valuesScale,\n    });\n    this.container.append(this.slider.mainWrapper);\n  }\n\n  public initialize(): void {\n    this.bindEventListeners();\n    this.addSliderToDOM();\n    this.updateView();\n    this.callViewUpdate('start');\n  }\n\n  public updateView(): void {\n    const options: BasicViewSettings = this.getOptions();\n\n    this.slider.changePlane(options.vertical);\n    this.handles.changePlane(options.vertical);\n    this.valuesScale.changePlane(options.vertical);\n    this.handles.changeHandlesDisplay({\n      isDouble: options.double,\n      sliderWidth: this.slider.slider.offsetWidth,\n    });\n    this.interval.changeIntervalDisplay(options.double);\n    this.valuesScale.changeValueScaleDisplay(options.valueScale);\n    this.handles.changeHandlesValuesDisplay(options.handlesValues);\n  }\n\n  private convertValueToPosition(settings: DataFromModel):string {\n    const { totalValues, minValue, value } = settings;\n    const workRange: number = this.slider.slider.offsetWidth;\n    const handleWidth: number = this.handles.fromHandle.offsetWidth;\n\n    return String(((workRange - handleWidth) / totalValues)\n        * (Number(value) - Number(minValue)));\n  }\n\n  public refreshValueScale(values: DataForValueScale): void {\n    this.valuesScale.refreshValueScale(values);\n    this.valuesScale.centerValues(\n      this.slider.slider.offsetWidth - this.handles.fromHandle.offsetWidth,\n      this.handles.fromHandle.offsetWidth,\n    );\n  }\n\n  public refreshHandleValues(settings: DataFromModel): void {\n    const newHandlesData: NewHandlesData = {\n      target: settings.target,\n      value: settings.value,\n      isToFixed: settings.isToFixed,\n      position: this.convertValueToPosition(settings),\n    };\n\n    this.handles.refreshValues(newHandlesData, this.slider.slider.offsetWidth);\n    this.interval.refreshIntervalPositions({\n      target: settings.target,\n      position: newHandlesData.position,\n      handleWidth: this.handles.fromHandle.offsetWidth,\n      sliderWidth: this.slider.slider.offsetWidth,\n    });\n  }\n\n  private bindEventListeners(): void {\n    [this.handles.fromHandle, this.handles.toHandle].forEach((handle: HTMLSpanElement):void => {\n      handle.addEventListener('mousedown', this.handleHandleMouseDown);\n    });\n    this.slider.slider.addEventListener('mousedown', this.handleSliderMouseDown);\n    window.addEventListener('resize', this.handleWindowResize);\n  }\n\n  private handleHandleMouseDown(event: MouseEvent): void {\n    const target: HTMLSpanElement = event.target as HTMLSpanElement;\n    this.movement.handleListener({\n      target,\n      x: event.clientX,\n      y: event.clientY,\n    });\n  }\n\n  private handleSliderMouseDown(event: MouseEvent): void {\n    const isNotSliderBody = event.target !== this.interval.interval && event.target !== this.slider.slider;\n    if (isNotSliderBody) return;\n\n    const halfHandleWidth: number = this.handles.fromHandle.offsetWidth / 2;\n    this.updatePositions({\n      target: 'unspecified',\n      newPosition: this.movement.calculateNewPosition({\n        x: event.clientX,\n        y: event.clientY,\n        distanceToCursor: halfHandleWidth,\n      }),\n    });\n  }\n\n  public handleWindowResize(): void {\n    this.callViewUpdate('resize');\n  }\n}\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __decorate=(cov_1duwu9qi6x.s[0]++,(cov_1duwu9qi6x.b[0][0]++,this)&&(cov_1duwu9qi6x.b[0][1]++,this.__decorate)||(cov_1duwu9qi6x.b[0][2]++,function(decorators,target,key,desc){cov_1duwu9qi6x.f[0]++;var c=(cov_1duwu9qi6x.s[1]++,arguments.length),r=(cov_1duwu9qi6x.s[2]++,c<3?(cov_1duwu9qi6x.b[1][0]++,target):(cov_1duwu9qi6x.b[1][1]++,desc===null?(cov_1duwu9qi6x.b[2][0]++,desc=Object.getOwnPropertyDescriptor(target,key)):(cov_1duwu9qi6x.b[2][1]++,desc))),d;cov_1duwu9qi6x.s[3]++;if((cov_1duwu9qi6x.b[4][0]++,typeof Reflect==="object")&&(cov_1duwu9qi6x.b[4][1]++,typeof Reflect.decorate==="function")){cov_1duwu9qi6x.b[3][0]++;cov_1duwu9qi6x.s[4]++;r=Reflect.decorate(decorators,target,key,desc);}else{cov_1duwu9qi6x.b[3][1]++;cov_1duwu9qi6x.s[5]++;for(var i=decorators.length-1;i>=0;i--){cov_1duwu9qi6x.s[6]++;if(d=decorators[i]){cov_1duwu9qi6x.b[5][0]++;cov_1duwu9qi6x.s[7]++;r=(cov_1duwu9qi6x.b[6][0]++,c<3?(cov_1duwu9qi6x.b[7][0]++,d(r)):(cov_1duwu9qi6x.b[7][1]++,c>3?(cov_1duwu9qi6x.b[8][0]++,d(target,key,r)):(cov_1duwu9qi6x.b[8][1]++,d(target,key))))||(cov_1duwu9qi6x.b[6][1]++,r);}else{cov_1duwu9qi6x.b[5][1]++;}}}cov_1duwu9qi6x.s[8]++;return(cov_1duwu9qi6x.b[9][0]++,c>3)&&(cov_1duwu9qi6x.b[9][1]++,r)&&(cov_1duwu9qi6x.b[9][2]++,Object.defineProperty(target,key,r)),r;}));cov_1duwu9qi6x.s[9]++;Object.defineProperty(exports, "__esModule", ({value:true}));cov_1duwu9qi6x.s[10]++;exports.View=void 0;const autobind_decorator_1=(cov_1duwu9qi6x.s[11]++,__webpack_require__(/*! autobind-decorator */ "./node_modules/autobind-decorator/lib/esm/index.js"));const Slider_1=(cov_1duwu9qi6x.s[12]++,__webpack_require__(/*! ./Slider/Slider */ "./src/plugin/View/Slider/Slider.ts"));const Handles_1=(cov_1duwu9qi6x.s[13]++,__webpack_require__(/*! ./Handles/Handles */ "./src/plugin/View/Handles/Handles.ts"));const Movement_1=(cov_1duwu9qi6x.s[14]++,__webpack_require__(/*! ./Movement/Movement */ "./src/plugin/View/Movement/Movement.ts"));const SelectedInterval_1=(cov_1duwu9qi6x.s[15]++,__webpack_require__(/*! ./SelectedInterval/SelectedInterval */ "./src/plugin/View/SelectedInterval/SelectedInterval.ts"));const ValuesScale_1=(cov_1duwu9qi6x.s[16]++,__webpack_require__(/*! ./ValuesScale/ValuesScale */ "./src/plugin/View/ValuesScale/ValuesScale.ts"));cov_1duwu9qi6x.s[17]++;let View=class View{constructor(getOptions,target){cov_1duwu9qi6x.f[1]++;cov_1duwu9qi6x.s[18]++;this.passNewValue=data=>{cov_1duwu9qi6x.f[2]++;cov_1duwu9qi6x.s[19]++;return data;};cov_1duwu9qi6x.s[20]++;this.updatePositions=data=>{cov_1duwu9qi6x.f[3]++;cov_1duwu9qi6x.s[21]++;return data;};cov_1duwu9qi6x.s[22]++;this.callViewUpdate=target=>{cov_1duwu9qi6x.f[4]++;cov_1duwu9qi6x.s[23]++;return target;};cov_1duwu9qi6x.s[24]++;this.container=target;cov_1duwu9qi6x.s[25]++;this.slider=new Slider_1.Slider();cov_1duwu9qi6x.s[26]++;this.handles=new Handles_1.Handles();cov_1duwu9qi6x.s[27]++;this.interval=new SelectedInterval_1.SelectedInterval();cov_1duwu9qi6x.s[28]++;this.valuesScale=new ValuesScale_1.ValuesScale(this);cov_1duwu9qi6x.s[29]++;this.getOptions=getOptions;cov_1duwu9qi6x.s[30]++;this.movement=new Movement_1.Movement({slider:this.slider.slider,handles:this.handles,environmentLink:this,getOptions:this.getOptions});}addSliderToDOM(){cov_1duwu9qi6x.f[5]++;cov_1duwu9qi6x.s[31]++;this.slider.initializeSliderElements({from:this.handles.fromHandle,to:this.handles.toHandle,interval:this.interval.interval,valueScale:this.valuesScale});cov_1duwu9qi6x.s[32]++;this.container.append(this.slider.mainWrapper);}initialize(){cov_1duwu9qi6x.f[6]++;cov_1duwu9qi6x.s[33]++;this.bindEventListeners();cov_1duwu9qi6x.s[34]++;this.addSliderToDOM();cov_1duwu9qi6x.s[35]++;this.updateView();cov_1duwu9qi6x.s[36]++;this.callViewUpdate('start');}updateView(){cov_1duwu9qi6x.f[7]++;const options=(cov_1duwu9qi6x.s[37]++,this.getOptions());cov_1duwu9qi6x.s[38]++;this.slider.changePlane(options.vertical);cov_1duwu9qi6x.s[39]++;this.handles.changePlane(options.vertical);cov_1duwu9qi6x.s[40]++;this.valuesScale.changePlane(options.vertical);cov_1duwu9qi6x.s[41]++;this.handles.changeHandlesDisplay({isDouble:options.double,sliderWidth:this.slider.slider.offsetWidth});cov_1duwu9qi6x.s[42]++;this.interval.changeIntervalDisplay(options.double);cov_1duwu9qi6x.s[43]++;this.valuesScale.changeValueScaleDisplay(options.valueScale);cov_1duwu9qi6x.s[44]++;this.handles.changeHandlesValuesDisplay(options.handlesValues);}convertValueToPosition(settings){cov_1duwu9qi6x.f[8]++;const{totalValues,minValue,value}=(cov_1duwu9qi6x.s[45]++,settings);const workRange=(cov_1duwu9qi6x.s[46]++,this.slider.slider.offsetWidth);const handleWidth=(cov_1duwu9qi6x.s[47]++,this.handles.fromHandle.offsetWidth);cov_1duwu9qi6x.s[48]++;return String((workRange-handleWidth)/totalValues*(Number(value)-Number(minValue)));}refreshValueScale(values){cov_1duwu9qi6x.f[9]++;cov_1duwu9qi6x.s[49]++;this.valuesScale.refreshValueScale(values);cov_1duwu9qi6x.s[50]++;this.valuesScale.centerValues(this.slider.slider.offsetWidth-this.handles.fromHandle.offsetWidth,this.handles.fromHandle.offsetWidth);}refreshHandleValues(settings){cov_1duwu9qi6x.f[10]++;const newHandlesData=(cov_1duwu9qi6x.s[51]++,{target:settings.target,value:settings.value,isToFixed:settings.isToFixed,position:this.convertValueToPosition(settings)});cov_1duwu9qi6x.s[52]++;this.handles.refreshValues(newHandlesData,this.slider.slider.offsetWidth);cov_1duwu9qi6x.s[53]++;this.interval.refreshIntervalPositions({target:settings.target,position:newHandlesData.position,handleWidth:this.handles.fromHandle.offsetWidth,sliderWidth:this.slider.slider.offsetWidth});}bindEventListeners(){cov_1duwu9qi6x.f[11]++;cov_1duwu9qi6x.s[54]++;[this.handles.fromHandle,this.handles.toHandle].forEach(handle=>{cov_1duwu9qi6x.f[12]++;cov_1duwu9qi6x.s[55]++;handle.addEventListener('mousedown',this.handleHandleMouseDown);});cov_1duwu9qi6x.s[56]++;this.slider.slider.addEventListener('mousedown',this.handleSliderMouseDown);cov_1duwu9qi6x.s[57]++;window.addEventListener('resize',this.handleWindowResize);}handleHandleMouseDown(event){cov_1duwu9qi6x.f[13]++;const target=(cov_1duwu9qi6x.s[58]++,event.target);cov_1duwu9qi6x.s[59]++;this.movement.handleListener({target,x:event.clientX,y:event.clientY});}handleSliderMouseDown(event){cov_1duwu9qi6x.f[14]++;const isNotSliderBody=(cov_1duwu9qi6x.s[60]++,(cov_1duwu9qi6x.b[10][0]++,event.target!==this.interval.interval)&&(cov_1duwu9qi6x.b[10][1]++,event.target!==this.slider.slider));cov_1duwu9qi6x.s[61]++;if(isNotSliderBody){cov_1duwu9qi6x.b[11][0]++;cov_1duwu9qi6x.s[62]++;return;}else{cov_1duwu9qi6x.b[11][1]++;}const halfHandleWidth=(cov_1duwu9qi6x.s[63]++,this.handles.fromHandle.offsetWidth/2);cov_1duwu9qi6x.s[64]++;this.updatePositions({target:'unspecified',newPosition:this.movement.calculateNewPosition({x:event.clientX,y:event.clientY,distanceToCursor:halfHandleWidth})});}handleWindowResize(){cov_1duwu9qi6x.f[15]++;cov_1duwu9qi6x.s[65]++;this.callViewUpdate('resize');}};cov_1duwu9qi6x.s[66]++;View=__decorate([autobind_decorator_1.default],View);cov_1duwu9qi6x.s[67]++;exports.View=View;

/***/ }),

/***/ "./src/plugin/common/defaultSettings.ts":
/*!**********************************************!*\
  !*** ./src/plugin/common/defaultSettings.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var cov_29psl5zpxc=function(){var path="C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\common\\defaultSettings.ts",hash="33f152109937e4691f3c26cb9e846d825c0e94dd",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\common\\defaultSettings.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:0},end:{line:3,column:30}},"2":{start:{line:4,column:21},end:{line:13,column:1}},"3":{start:{line:14,column:0},end:{line:14,column:36}}},fnMap:{},branchMap:{},s:{"0":0,"1":0,"2":0,"3":0},f:{},b:{},inputSourceMap:{version:3,file:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\common\\defaultSettings.ts",sourceRoot:"",sources:["C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\common\\defaultSettings.ts"],names:[],mappings:";;;AAIA,MAAM,YAAY,GAAkB;IAClC,GAAG,EAAE,CAAC;IACN,GAAG,EAAE,GAAG;IACR,MAAM,EAAE,KAAK;IACb,aAAa,EAAE,KAAK;IACpB,QAAQ,EAAE,KAAK;IACf,IAAI,EAAE,KAAK;IACX,UAAU,EAAE,IAAI;IAChB,OAAO,EAAE,IAAI;CACd,CAAC;AAEO,oCAAY",sourcesContent:["import {\n  SliderOptions,\n} from '../types';\n\nconst gobyDefaults: SliderOptions = {\n  min: 0,\n  max: 100,\n  double: false,\n  handlesValues: false,\n  vertical: false,\n  step: false,\n  valueScale: true,\n  integer: true,\n};\n\nexport { gobyDefaults };\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_29psl5zpxc.s[0]++;Object.defineProperty(exports, "__esModule", ({value:true}));cov_29psl5zpxc.s[1]++;exports.gobyDefaults=void 0;const gobyDefaults=(cov_29psl5zpxc.s[2]++,{min:0,max:100,double:false,handlesValues:false,vertical:false,step:false,valueScale:true,integer:true});cov_29psl5zpxc.s[3]++;exports.gobyDefaults=gobyDefaults;

/***/ }),

/***/ "./src/plugin/slider.ts":
/*!******************************!*\
  !*** ./src/plugin/slider.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var cov_235us2742z=function(){var path="C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\slider.ts",hash="bb4cef34fe341731d749659aab9d57b8ad06281e",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\slider.ts",statementMap:{"0":{start:{line:2,column:17},end:{line:7,column:1}},"1":{start:{line:3,column:12},end:{line:3,column:28}},"2":{start:{line:3,column:34},end:{line:3,column:125}},"3":{start:{line:4,column:4},end:{line:5,column:150}},"4":{start:{line:4,column:79},end:{line:4,column:131}},"5":{start:{line:5,column:9},end:{line:5,column:150}},"6":{start:{line:5,column:58},end:{line:5,column:150}},"7":{start:{line:5,column:81},end:{line:5,column:150}},"8":{start:{line:6,column:4},end:{line:6,column:66}},"9":{start:{line:8,column:0},end:{line:8,column:62}},"10":{start:{line:9,column:29},end:{line:9,column:58}},"11":{start:{line:10,column:16},end:{line:10,column:40}},"12":{start:{line:11,column:15},end:{line:11,column:37}},"13":{start:{line:12,column:20},end:{line:12,column:52}},"14":{start:{line:13,column:26},end:{line:13,column:61}},"15":{start:{line:14,column:13},end:{line:36,column:1}},"16":{start:{line:16,column:8},end:{line:16,column:37}},"17":{start:{line:16,column:32},end:{line:16,column:36}},"18":{start:{line:17,column:8},end:{line:17,column:31}},"19":{start:{line:18,column:8},end:{line:18,column:77}},"20":{start:{line:19,column:8},end:{line:19,column:55}},"21":{start:{line:22,column:22},end:{line:22,column:51}},"22":{start:{line:23,column:21},end:{line:23,column:57}},"23":{start:{line:24,column:26},end:{line:29,column:10}},"24":{start:{line:30,column:8},end:{line:30,column:31}},"25":{start:{line:31,column:8},end:{line:31,column:26}},"26":{start:{line:34,column:8},end:{line:34,column:28}},"27":{start:{line:37,column:0},end:{line:39,column:11}},"28":{start:{line:40,column:0},end:{line:44,column:2}},"29":{start:{line:41,column:4},end:{line:43,column:7}},"30":{start:{line:42,column:8},end:{line:42,column:76}}},fnMap:{"0":{name:"(anonymous_0)",decl:{start:{line:2,column:46},end:{line:2,column:47}},loc:{start:{line:2,column:87},end:{line:7,column:1}},line:2},"1":{name:"(anonymous_1)",decl:{start:{line:15,column:4},end:{line:15,column:5}},loc:{start:{line:15,column:34},end:{line:20,column:5}},line:15},"2":{name:"(anonymous_2)",decl:{start:{line:16,column:22},end:{line:16,column:23}},loc:{start:{line:16,column:32},end:{line:16,column:36}},line:16},"3":{name:"(anonymous_3)",decl:{start:{line:21,column:4},end:{line:21,column:5}},loc:{start:{line:21,column:36},end:{line:32,column:5}},line:21},"4":{name:"(anonymous_4)",decl:{start:{line:33,column:4},end:{line:33,column:5}},loc:{start:{line:33,column:17},end:{line:35,column:5}},line:33},"5":{name:"initializeGobySlider",decl:{start:{line:40,column:27},end:{line:40,column:47}},loc:{start:{line:40,column:64},end:{line:44,column:1}},line:40},"6":{name:"returnGobySliderData",decl:{start:{line:41,column:30},end:{line:41,column:50}},loc:{start:{line:41,column:53},end:{line:43,column:5}},line:41}},branchMap:{"0":{loc:{start:{line:2,column:17},end:{line:7,column:1}},type:"binary-expr",locations:[{start:{line:2,column:18},end:{line:2,column:22}},{start:{line:2,column:26},end:{line:2,column:41}},{start:{line:2,column:46},end:{line:7,column:1}}],line:2},"1":{loc:{start:{line:3,column:34},end:{line:3,column:125}},type:"cond-expr",locations:[{start:{line:3,column:42},end:{line:3,column:48}},{start:{line:3,column:51},end:{line:3,column:125}}],line:3},"2":{loc:{start:{line:3,column:51},end:{line:3,column:125}},type:"cond-expr",locations:[{start:{line:3,column:67},end:{line:3,column:118}},{start:{line:3,column:121},end:{line:3,column:125}}],line:3},"3":{loc:{start:{line:4,column:4},end:{line:5,column:150}},type:"if",locations:[{start:{line:4,column:4},end:{line:5,column:150}},{start:{line:4,column:4},end:{line:5,column:150}}],line:4},"4":{loc:{start:{line:4,column:8},end:{line:4,column:77}},type:"binary-expr",locations:[{start:{line:4,column:8},end:{line:4,column:35}},{start:{line:4,column:39},end:{line:4,column:77}}],line:4},"5":{loc:{start:{line:5,column:58},end:{line:5,column:150}},type:"if",locations:[{start:{line:5,column:58},end:{line:5,column:150}},{start:{line:5,column:58},end:{line:5,column:150}}],line:5},"6":{loc:{start:{line:5,column:85},end:{line:5,column:149}},type:"binary-expr",locations:[{start:{line:5,column:86},end:{line:5,column:143}},{start:{line:5,column:148},end:{line:5,column:149}}],line:5},"7":{loc:{start:{line:5,column:86},end:{line:5,column:143}},type:"cond-expr",locations:[{start:{line:5,column:94},end:{line:5,column:98}},{start:{line:5,column:101},end:{line:5,column:143}}],line:5},"8":{loc:{start:{line:5,column:101},end:{line:5,column:143}},type:"cond-expr",locations:[{start:{line:5,column:109},end:{line:5,column:126}},{start:{line:5,column:129},end:{line:5,column:143}}],line:5},"9":{loc:{start:{line:6,column:11},end:{line:6,column:62}},type:"binary-expr",locations:[{start:{line:6,column:11},end:{line:6,column:16}},{start:{line:6,column:20},end:{line:6,column:21}},{start:{line:6,column:25},end:{line:6,column:62}}],line:6}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0},b:{"0":[0,0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0,0]},inputSourceMap:{version:3,file:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\slider.ts",sourceRoot:"",sources:["C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\plugin\\slider.ts"],names:[],mappings:";;;;;;;;AAAA,2DAA0C;AAC1C,yCAAsC;AACtC,sCAAmC;AACnC,qDAAkD;AAQlD,8DAAwD;AAGxD,IAAM,MAAM,GAAZ,MAAM,MAAM;IAOV,YAAY,OAAoB,EAAE,OAA0B;QAFrD,WAAM,GAAW,CAAC,IAAuB,EAAE,EAAE,CAAC,IAAI,CAAC;QAGxD,IAAI,CAAC,OAAO,GAAG,OAAO,CAAC;QACvB,IAAI,CAAC,OAAO,GAAG,CAAC,CAAC,MAAM,CAAC,EAAE,EAAE,8BAAY,EAAE,OAAO,CAAC,CAAC;QACnD,IAAI,CAAC,UAAU,CAAC,IAAI,CAAC,OAAO,EAAE,IAAI,CAAC,UAAU,CAAC,CAAC;IACjD,CAAC;IAEO,UAAU,CAAC,OAAoB,EAAE,UAA+B;QACtE,MAAM,KAAK,GAAU,IAAI,aAAK,CAAC,UAAU,CAAC,CAAC;QAC3C,MAAM,IAAI,GAAS,IAAI,WAAI,CAAC,UAAU,EAAE,OAAO,CAAC,CAAC;QACjD,MAAM,SAAS,GAAc,IAAI,qBAAS,CAAC;YACzC,QAAQ,EAAE,IAAI;YACd,SAAS,EAAE,KAAK;YAChB,UAAU;YACV,WAAW,EAAE,IAAI;SAClB,CAAC,CAAC;QAEH,SAAS,CAAC,UAAU,EAAE,CAAC;QACvB,IAAI,CAAC,UAAU,EAAE,CAAC;IACpB,CAAC;IAEO,UAAU;QAChB,OAAO,IAAI,CAAC,OAAO,CAAC;IACtB,CAAC;CACF,CAAA;AA9BK,MAAM;IADX,4BAAQ;GACH,MAAM,CA8BX;AAED,CAAC,CAAC,EAAE,CAAC,UAAU,GAAG,SAAS,oBAAoB,CAAC,cAA6B;IAC3E,OAAO,IAAI,CAAC,IAAI,CAAC,SAAS,oBAAoB;QAC5C,CAAC,CAAC,IAAI,CAAC,IAAI,EAAE,mBAAmB,EAAE,IAAI,MAAM,CAAC,IAAI,EAAE,cAAc,CAAC,CAAC,CAAC;IACtE,CAAC,CAAC,CAAC;AACL,CAAC,CAAC",sourcesContent:["import autobind from 'autobind-decorator';\nimport { Model } from './Model/Model';\nimport { View } from './View/View';\nimport { Presenter } from './Presenter/Presenter';\nimport {\n  PluginInfo,\n  SliderOptions,\n  Update,\n  UserSliderOptions,\n} from './types';\nimport { IPlugin } from './interfaces';\nimport { gobyDefaults } from './common/defaultSettings';\n\n@autobind\nclass Plugin implements IPlugin {\n  readonly element: HTMLElement;\n\n  public options: SliderOptions;\n\n  public update: Update = (data: UserSliderOptions) => data;\n\n  constructor(element: HTMLElement, options: UserSliderOptions) {\n    this.element = element;\n    this.options = $.extend({}, gobyDefaults, options);\n    this.initialize(this.element, this.getOptions);\n  }\n\n  private initialize(element: HTMLElement, getOptions: () => SliderOptions): void {\n    const model: Model = new Model(getOptions);\n    const view: View = new View(getOptions, element);\n    const presenter: Presenter = new Presenter({\n      viewLink: view,\n      modelLink: model,\n      getOptions,\n      environment: this,\n    });\n\n    presenter.initialize();\n    view.initialize();\n  }\n\n  private getOptions(): SliderOptions {\n    return this.options;\n  }\n}\n\n$.fn.gobySlider = function initializeGobySlider(sliderSettings: SliderOptions): PluginInfo {\n  return this.each(function returnGobySliderData() {\n    $.data(this, 'plugin_gobySlider', new Plugin(this, sliderSettings));\n  });\n};\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();var __decorate=(cov_235us2742z.s[0]++,(cov_235us2742z.b[0][0]++,this)&&(cov_235us2742z.b[0][1]++,this.__decorate)||(cov_235us2742z.b[0][2]++,function(decorators,target,key,desc){cov_235us2742z.f[0]++;var c=(cov_235us2742z.s[1]++,arguments.length),r=(cov_235us2742z.s[2]++,c<3?(cov_235us2742z.b[1][0]++,target):(cov_235us2742z.b[1][1]++,desc===null?(cov_235us2742z.b[2][0]++,desc=Object.getOwnPropertyDescriptor(target,key)):(cov_235us2742z.b[2][1]++,desc))),d;cov_235us2742z.s[3]++;if((cov_235us2742z.b[4][0]++,typeof Reflect==="object")&&(cov_235us2742z.b[4][1]++,typeof Reflect.decorate==="function")){cov_235us2742z.b[3][0]++;cov_235us2742z.s[4]++;r=Reflect.decorate(decorators,target,key,desc);}else{cov_235us2742z.b[3][1]++;cov_235us2742z.s[5]++;for(var i=decorators.length-1;i>=0;i--){cov_235us2742z.s[6]++;if(d=decorators[i]){cov_235us2742z.b[5][0]++;cov_235us2742z.s[7]++;r=(cov_235us2742z.b[6][0]++,c<3?(cov_235us2742z.b[7][0]++,d(r)):(cov_235us2742z.b[7][1]++,c>3?(cov_235us2742z.b[8][0]++,d(target,key,r)):(cov_235us2742z.b[8][1]++,d(target,key))))||(cov_235us2742z.b[6][1]++,r);}else{cov_235us2742z.b[5][1]++;}}}cov_235us2742z.s[8]++;return(cov_235us2742z.b[9][0]++,c>3)&&(cov_235us2742z.b[9][1]++,r)&&(cov_235us2742z.b[9][2]++,Object.defineProperty(target,key,r)),r;}));cov_235us2742z.s[9]++;Object.defineProperty(exports, "__esModule", ({value:true}));const autobind_decorator_1=(cov_235us2742z.s[10]++,__webpack_require__(/*! autobind-decorator */ "./node_modules/autobind-decorator/lib/esm/index.js"));const Model_1=(cov_235us2742z.s[11]++,__webpack_require__(/*! ./Model/Model */ "./src/plugin/Model/Model.ts"));const View_1=(cov_235us2742z.s[12]++,__webpack_require__(/*! ./View/View */ "./src/plugin/View/View.ts"));const Presenter_1=(cov_235us2742z.s[13]++,__webpack_require__(/*! ./Presenter/Presenter */ "./src/plugin/Presenter/Presenter.ts"));const defaultSettings_1=(cov_235us2742z.s[14]++,__webpack_require__(/*! ./common/defaultSettings */ "./src/plugin/common/defaultSettings.ts"));cov_235us2742z.s[15]++;let Plugin=class Plugin{constructor(element,options){cov_235us2742z.f[1]++;cov_235us2742z.s[16]++;this.update=data=>{cov_235us2742z.f[2]++;cov_235us2742z.s[17]++;return data;};cov_235us2742z.s[18]++;this.element=element;cov_235us2742z.s[19]++;this.options=$.extend({},defaultSettings_1.gobyDefaults,options);cov_235us2742z.s[20]++;this.initialize(this.element,this.getOptions);}initialize(element,getOptions){cov_235us2742z.f[3]++;const model=(cov_235us2742z.s[21]++,new Model_1.Model(getOptions));const view=(cov_235us2742z.s[22]++,new View_1.View(getOptions,element));const presenter=(cov_235us2742z.s[23]++,new Presenter_1.Presenter({viewLink:view,modelLink:model,getOptions,environment:this}));cov_235us2742z.s[24]++;presenter.initialize();cov_235us2742z.s[25]++;view.initialize();}getOptions(){cov_235us2742z.f[4]++;cov_235us2742z.s[26]++;return this.options;}};cov_235us2742z.s[27]++;Plugin=__decorate([autobind_decorator_1.default],Plugin);cov_235us2742z.s[28]++;$.fn.gobySlider=function initializeGobySlider(sliderSettings){cov_235us2742z.f[5]++;cov_235us2742z.s[29]++;return this.each(function returnGobySliderData(){cov_235us2742z.f[6]++;cov_235us2742z.s[30]++;$.data(this,'plugin_gobySlider',new Plugin(this,sliderSettings));});};

/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.6.0
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright OpenJS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2021-03-02T17:08Z
 */
( function( global, factory ) {

	"use strict";

	if (  true && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var flat = arr.flat ? function( array ) {
	return arr.flat.call( array );
} : function( array ) {
	return arr.concat.apply( [], array );
};


var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

		// Support: Chrome <=57, Firefox <=52
		// In some browsers, typeof returns "function" for HTML <object> elements
		// (i.e., `typeof document.createElement( "object" ) === "function"`).
		// We don't want to classify *any* DOM node as a function.
		// Support: QtWeb <=3.8.5, WebKit <=534.34, wkhtmltopdf tool <=0.12.5
		// Plus for old WebKit, typeof returns "function" for HTML collections
		// (e.g., `typeof document.getElementsByTagName("div") === "function"`). (gh-4756)
		return typeof obj === "function" && typeof obj.nodeType !== "number" &&
			typeof obj.item !== "function";
	};


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};


var document = window.document;



	var preservedScriptAttributes = {
		type: true,
		src: true,
		nonce: true,
		noModule: true
	};

	function DOMEval( code, node, doc ) {
		doc = doc || document;

		var i, val,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {

				// Support: Firefox 64+, Edge 18+
				// Some browsers don't support the "nonce" property on scripts.
				// On the other hand, just using `getAttribute` is not enough as
				// the `nonce` attribute is reset to an empty string whenever it
				// becomes browsing-context connected.
				// See https://github.com/whatwg/html/issues/2369
				// See https://html.spec.whatwg.org/#nonce-attributes
				// The `node.getAttribute` check was added for the sake of
				// `jQuery.globalEval` so that it can fake a nonce-containing node
				// via an object.
				val = node[ i ] || node.getAttribute && node.getAttribute( i );
				if ( val ) {
					script.setAttribute( i, val );
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.6.0",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	even: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return ( i + 1 ) % 2;
		} ) );
	},

	odd: function() {
		return this.pushStack( jQuery.grep( this, function( _elem, i ) {
			return i % 2;
		} ) );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				copy = options[ name ];

				// Prevent Object.prototype pollution
				// Prevent never-ending loop
				if ( name === "__proto__" || target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {
					src = target[ name ];

					// Ensure proper type for the source value
					if ( copyIsArray && !Array.isArray( src ) ) {
						clone = [];
					} else if ( !copyIsArray && !jQuery.isPlainObject( src ) ) {
						clone = {};
					} else {
						clone = src;
					}
					copyIsArray = false;

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a provided context; falls back to the global one
	// if not specified.
	globalEval: function( code, options, doc ) {
		DOMEval( code, { nonce: options && options.nonce }, doc );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
						[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return flat( ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( _i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.6
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://js.foundation/
 *
 * Date: 2021-02-16
 */
( function( window ) {
var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	nonnativeSelectorCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ( {} ).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	pushNative = arr.push,
	push = arr.push,
	slice = arr.slice,

	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[ i ] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|" +
		"ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// https://www.w3.org/TR/css-syntax-3/#ident-token-diagram
	identifier = "(?:\\\\[\\da-fA-F]{1,6}" + whitespace +
		"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +

		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +

		// "Attribute values must be CSS identifiers [capture 5]
		// or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" +
		whitespace + "*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +

		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +

		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +

		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" +
		whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace +
		"*" ),
	rdescend = new RegExp( whitespace + "|>" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
			whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" +
			whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),

		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace +
			"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace +
			"*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rhtml = /HTML$/i,
	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\[\\da-fA-F]{1,6}" + whitespace + "?|\\\\([^\\r\\n\\f])", "g" ),
	funescape = function( escape, nonHex ) {
		var high = "0x" + escape.slice( 1 ) - 0x10000;

		return nonHex ?

			// Strip the backslash prefix from a non-hex escape sequence
			nonHex :

			// Replace a hexadecimal escape sequence with the encoded Unicode code point
			// Support: IE <=11+
			// For values outside the Basic Multilingual Plane (BMP), manually construct a
			// surrogate pair
			high < 0 ?
				String.fromCharCode( high + 0x10000 ) :
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" +
				ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	inDisabledFieldset = addCombinator(
		function( elem ) {
			return elem.disabled === true && elem.nodeName.toLowerCase() === "fieldset";
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		( arr = slice.call( preferredDoc.childNodes ) ),
		preferredDoc.childNodes
	);

	// Support: Android<4.0
	// Detect silently failing push.apply
	// eslint-disable-next-line no-unused-expressions
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			pushNative.apply( target, slice.call( els ) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;

			// Can't trust NodeList.length
			while ( ( target[ j++ ] = els[ i++ ] ) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {
		setDocument( context );
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && ( match = rquickExpr.exec( selector ) ) ) {

				// ID selector
				if ( ( m = match[ 1 ] ) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( ( elem = context.getElementById( m ) ) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && ( elem = newContext.getElementById( m ) ) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[ 2 ] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( ( m = match[ 3 ] ) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!nonnativeSelectorCache[ selector + " " ] &&
				( !rbuggyQSA || !rbuggyQSA.test( selector ) ) &&

				// Support: IE 8 only
				// Exclude object elements
				( nodeType !== 1 || context.nodeName.toLowerCase() !== "object" ) ) {

				newSelector = selector;
				newContext = context;

				// qSA considers elements outside a scoping root when evaluating child or
				// descendant combinators, which is not what we want.
				// In such cases, we work around the behavior by prefixing every selector in the
				// list with an ID selector referencing the scope context.
				// The technique has to be used as well when a leading combinator is used
				// as such selectors are not recognized by querySelectorAll.
				// Thanks to Andrew Dupont for this technique.
				if ( nodeType === 1 &&
					( rdescend.test( selector ) || rcombinators.test( selector ) ) ) {

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;

					// We can use :scope instead of the ID hack if the browser
					// supports it & if we're not changing the context.
					if ( newContext !== context || !support.scope ) {

						// Capture the context ID, setting it first if necessary
						if ( ( nid = context.getAttribute( "id" ) ) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", ( nid = expando ) );
						}
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[ i ] = ( nid ? "#" + nid : ":scope" ) + " " +
							toSelector( groups[ i ] );
					}
					newSelector = groups.join( "," );
				}

				try {
					push.apply( results,
						newContext.querySelectorAll( newSelector )
					);
					return results;
				} catch ( qsaError ) {
					nonnativeSelectorCache( selector, true );
				} finally {
					if ( nid === expando ) {
						context.removeAttribute( "id" );
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {

		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {

			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return ( cache[ key + " " ] = value );
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement( "fieldset" );

	try {
		return !!fn( el );
	} catch ( e ) {
		return false;
	} finally {

		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}

		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split( "|" ),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[ i ] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( ( cur = cur.nextSibling ) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return ( name === "input" || name === "button" ) && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
					inDisabledFieldset( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction( function( argument ) {
		argument = +argument;
		return markFunction( function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ ( j = matchIndexes[ i ] ) ] ) {
					seed[ j ] = !( matches[ j ] = seed[ j ] );
				}
			}
		} );
	} );
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	var namespace = elem && elem.namespaceURI,
		docElem = elem && ( elem.ownerDocument || elem ).documentElement;

	// Support: IE <=8
	// Assume HTML when documentElement doesn't yet exist, such as inside loading iframes
	// https://bugs.jquery.com/ticket/4833
	return !rhtml.test( namespace || docElem && docElem.nodeName || "HTML" );
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( doc == document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9 - 11+, Edge 12 - 18+
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( preferredDoc != document &&
		( subWindow = document.defaultView ) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	// Support: IE 8 - 11+, Edge 12 - 18+, Chrome <=16 - 25 only, Firefox <=3.6 - 31 only,
	// Safari 4 - 5 only, Opera <=11.6 - 12.x only
	// IE/Edge & older browsers don't support the :scope pseudo-class.
	// Support: Safari 6.0 only
	// Safari 6.0 supports :scope but it's an alias of :root there.
	support.scope = assert( function( el ) {
		docElem.appendChild( el ).appendChild( document.createElement( "div" ) );
		return typeof el.querySelectorAll !== "undefined" &&
			!el.querySelectorAll( ":scope fieldset div" ).length;
	} );

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert( function( el ) {
		el.className = "i";
		return !el.getAttribute( "className" );
	} );

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert( function( el ) {
		el.appendChild( document.createComment( "" ) );
		return !el.getElementsByTagName( "*" ).length;
	} );

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert( function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	} );

	// ID filter and find
	if ( support.getById ) {
		Expr.filter[ "ID" ] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute( "id" ) === attrId;
			};
		};
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter[ "ID" ] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode( "id" );
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find[ "ID" ] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode( "id" );
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( ( elem = elems[ i++ ] ) ) {
						node = elem.getAttributeNode( "id" );
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find[ "TAG" ] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( ( elem = results[ i++ ] ) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find[ "CLASS" ] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( ( support.qsa = rnative.test( document.querySelectorAll ) ) ) {

		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert( function( el ) {

			var input;

			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll( "[msallowcapture^='']" ).length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll( "[selected]" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push( "~=" );
			}

			// Support: IE 11+, Edge 15 - 18+
			// IE 11/Edge don't find elements on a `[name='']` query in some cases.
			// Adding a temporary attribute to the document before the selection works
			// around the issue.
			// Interestingly, IE 10 & older don't seem to have the issue.
			input = document.createElement( "input" );
			input.setAttribute( "name", "" );
			el.appendChild( input );
			if ( !el.querySelectorAll( "[name='']" ).length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*name" + whitespace + "*=" +
					whitespace + "*(?:''|\"\")" );
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll( ":checked" ).length ) {
				rbuggyQSA.push( ":checked" );
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push( ".#.+[+~]" );
			}

			// Support: Firefox <=3.6 - 5 only
			// Old Firefox doesn't throw on a badly-escaped identifier.
			el.querySelectorAll( "\\\f" );
			rbuggyQSA.push( "[\\r\\n\\f]" );
		} );

		assert( function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement( "input" );
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll( "[name=d]" ).length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll( ":enabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll( ":disabled" ).length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: Opera 10 - 11 only
			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll( "*,:x" );
			rbuggyQSA.push( ",.*:" );
		} );
	}

	if ( ( support.matchesSelector = rnative.test( ( matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector ) ) ) ) {

		assert( function( el ) {

			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		} );
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join( "|" ) );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join( "|" ) );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			) );
		} :
		function( a, b ) {
			if ( b ) {
				while ( ( b = b.parentNode ) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		// Support: IE 11+, Edge 17 - 18+
		// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
		// two documents; shallow comparisons work.
		// eslint-disable-next-line eqeqeq
		compare = ( a.ownerDocument || a ) == ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			( !support.sortDetached && b.compareDocumentPosition( a ) === compare ) ) {

			// Choose the first element that is related to our preferred document
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( a == document || a.ownerDocument == preferredDoc &&
				contains( preferredDoc, a ) ) {
				return -1;
			}

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			// eslint-disable-next-line eqeqeq
			if ( b == document || b.ownerDocument == preferredDoc &&
				contains( preferredDoc, b ) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {

		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {

			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			return a == document ? -1 :
				b == document ? 1 :
				/* eslint-enable eqeqeq */
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( ( cur = cur.parentNode ) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( ( cur = cur.parentNode ) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[ i ] === bp[ i ] ) {
			i++;
		}

		return i ?

			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[ i ], bp[ i ] ) :

			// Otherwise nodes in our document sort first
			// Support: IE 11+, Edge 17 - 18+
			// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
			// two documents; shallow comparisons work.
			/* eslint-disable eqeqeq */
			ap[ i ] == preferredDoc ? -1 :
			bp[ i ] == preferredDoc ? 1 :
			/* eslint-enable eqeqeq */
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	setDocument( elem );

	if ( support.matchesSelector && documentIsHTML &&
		!nonnativeSelectorCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||

				// As well, disconnected nodes are said to be in a document
				// fragment in IE 9
				elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch ( e ) {
			nonnativeSelectorCache( expr, true );
		}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( context.ownerDocument || context ) != document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {

	// Set document vars if needed
	// Support: IE 11+, Edge 17 - 18+
	// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
	// two documents; shallow comparisons work.
	// eslint-disable-next-line eqeqeq
	if ( ( elem.ownerDocument || elem ) != document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],

		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			( val = elem.getAttributeNode( name ) ) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return ( sel + "" ).replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( ( elem = results[ i++ ] ) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {

		// If no nodeType, this is expected to be an array
		while ( ( node = elem[ i++ ] ) ) {

			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {

		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {

			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}

	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[ 1 ] = match[ 1 ].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[ 3 ] = ( match[ 3 ] || match[ 4 ] ||
				match[ 5 ] || "" ).replace( runescape, funescape );

			if ( match[ 2 ] === "~=" ) {
				match[ 3 ] = " " + match[ 3 ] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {

			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[ 1 ] = match[ 1 ].toLowerCase();

			if ( match[ 1 ].slice( 0, 3 ) === "nth" ) {

				// nth-* requires argument
				if ( !match[ 3 ] ) {
					Sizzle.error( match[ 0 ] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[ 4 ] = +( match[ 4 ] ?
					match[ 5 ] + ( match[ 6 ] || 1 ) :
					2 * ( match[ 3 ] === "even" || match[ 3 ] === "odd" ) );
				match[ 5 ] = +( ( match[ 7 ] + match[ 8 ] ) || match[ 3 ] === "odd" );

				// other types prohibit arguments
			} else if ( match[ 3 ] ) {
				Sizzle.error( match[ 0 ] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[ 6 ] && match[ 2 ];

			if ( matchExpr[ "CHILD" ].test( match[ 0 ] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[ 3 ] ) {
				match[ 2 ] = match[ 4 ] || match[ 5 ] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&

				// Get excess from tokenize (recursively)
				( excess = tokenize( unquoted, true ) ) &&

				// advance to the next closing parenthesis
				( excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length ) ) {

				// excess is a negative index
				match[ 0 ] = match[ 0 ].slice( 0, excess );
				match[ 2 ] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() {
					return true;
				} :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				( pattern = new RegExp( "(^|" + whitespace +
					")" + className + "(" + whitespace + "|$)" ) ) && classCache(
						className, function( elem ) {
							return pattern.test(
								typeof elem.className === "string" && elem.className ||
								typeof elem.getAttribute !== "undefined" &&
									elem.getAttribute( "class" ) ||
								""
							);
				} );
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				/* eslint-disable max-len */

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
				/* eslint-enable max-len */

			};
		},

		"CHILD": function( type, what, _argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, _context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( ( node = node[ dir ] ) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}

								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || ( node[ expando ] = {} );

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								( outerCache[ node.uniqueID ] = {} );

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( ( node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								( diff = nodeIndex = 0 ) || start.pop() ) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {

							// Use previously-cached element index if available
							if ( useCache ) {

								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || ( node[ expando ] = {} );

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									( outerCache[ node.uniqueID ] = {} );

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {

								// Use the same loop as above to seek `elem` from the start
								while ( ( node = ++nodeIndex && node && node[ dir ] ||
									( diff = nodeIndex = 0 ) || start.pop() ) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] ||
												( node[ expando ] = {} );

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												( outerCache[ node.uniqueID ] = {} );

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {

			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction( function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[ i ] );
							seed[ idx ] = !( matches[ idx ] = matched[ i ] );
						}
					} ) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {

		// Potentially complex pseudos
		"not": markFunction( function( selector ) {

			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction( function( seed, matches, _context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( ( elem = unmatched[ i ] ) ) {
							seed[ i ] = !( matches[ i ] = elem );
						}
					}
				} ) :
				function( elem, _context, xml ) {
					input[ 0 ] = elem;
					matcher( input, null, xml, results );

					// Don't keep the element (issue #299)
					input[ 0 ] = null;
					return !results.pop();
				};
		} ),

		"has": markFunction( function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		} ),

		"contains": markFunction( function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || getText( elem ) ).indexOf( text ) > -1;
			};
		} ),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {

			// lang value must be a valid identifier
			if ( !ridentifier.test( lang || "" ) ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( ( elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute( "xml:lang" ) || elem.getAttribute( "lang" ) ) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( ( elem = elem.parentNode ) && elem.nodeType === 1 );
				return false;
			};
		} ),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement &&
				( !document.hasFocus || document.hasFocus() ) &&
				!!( elem.type || elem.href || ~elem.tabIndex );
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {

			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return ( nodeName === "input" && !!elem.checked ) ||
				( nodeName === "option" && !!elem.selected );
		},

		"selected": function( elem ) {

			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				// eslint-disable-next-line no-unused-expressions
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {

			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos[ "empty" ]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( ( attr = elem.getAttribute( "type" ) ) == null ||
					attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo( function() {
			return [ 0 ];
		} ),

		"last": createPositionalPseudo( function( _matchIndexes, length ) {
			return [ length - 1 ];
		} ),

		"eq": createPositionalPseudo( function( _matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		} ),

		"even": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"odd": createPositionalPseudo( function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"lt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ?
				argument + length :
				argument > length ?
					length :
					argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} ),

		"gt": createPositionalPseudo( function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		} )
	}
};

Expr.pseudos[ "nth" ] = Expr.pseudos[ "eq" ];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || ( match = rcomma.exec( soFar ) ) ) {
			if ( match ) {

				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[ 0 ].length ) || soFar;
			}
			groups.push( ( tokens = [] ) );
		}

		matched = false;

		// Combinators
		if ( ( match = rcombinators.exec( soFar ) ) ) {
			matched = match.shift();
			tokens.push( {
				value: matched,

				// Cast descendant combinators to space
				type: match[ 0 ].replace( rtrim, " " )
			} );
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( ( match = matchExpr[ type ].exec( soFar ) ) && ( !preFilters[ type ] ||
				( match = preFilters[ type ]( match ) ) ) ) {
				matched = match.shift();
				tokens.push( {
					value: matched,
					type: type,
					matches: match
				} );
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :

			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[ i ].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?

		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( ( elem = elem[ dir ] ) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( ( elem = elem[ dir ] ) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || ( elem[ expando ] = {} );

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] ||
							( outerCache[ elem.uniqueID ] = {} );

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( ( oldCache = uniqueCache[ key ] ) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return ( newCache[ 2 ] = oldCache[ 2 ] );
						} else {

							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( ( newCache[ 2 ] = matcher( elem, context, xml ) ) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[ i ]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[ 0 ];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[ i ], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( ( elem = unmatched[ i ] ) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction( function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts(
				selector || "*",
				context.nodeType ? [ context ] : context,
				[]
			),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?

				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( ( elem = temp[ i ] ) ) {
					matcherOut[ postMap[ i ] ] = !( matcherIn[ postMap[ i ] ] = elem );
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {

					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( ( elem = matcherOut[ i ] ) ) {

							// Restore matcherIn since elem is not yet a final match
							temp.push( ( matcherIn[ i ] = elem ) );
						}
					}
					postFinder( null, ( matcherOut = [] ), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( ( elem = matcherOut[ i ] ) &&
						( temp = postFinder ? indexOf( seed, elem ) : preMap[ i ] ) > -1 ) {

						seed[ temp ] = !( results[ temp ] = elem );
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	} );
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[ 0 ].type ],
		implicitRelative = leadingRelative || Expr.relative[ " " ],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				( checkContext = context ).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );

			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( ( matcher = Expr.relative[ tokens[ i ].type ] ) ) {
			matchers = [ addCombinator( elementMatcher( matchers ), matcher ) ];
		} else {
			matcher = Expr.filter[ tokens[ i ].type ].apply( null, tokens[ i ].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {

				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[ j ].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(

					// If the preceding token was a descendant combinator, insert an implicit any-element `*`
					tokens
						.slice( 0, i - 1 )
						.concat( { value: tokens[ i - 2 ].type === " " ? "*" : "" } )
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( ( tokens = tokens.slice( j ) ) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find[ "TAG" ]( "*", outermost ),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = ( dirruns += contextBackup == null ? 1 : Math.random() || 0.1 ),
				len = elems.length;

			if ( outermost ) {

				// Support: IE 11+, Edge 17 - 18+
				// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
				// two documents; shallow comparisons work.
				// eslint-disable-next-line eqeqeq
				outermostContext = context == document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && ( elem = elems[ i ] ) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;

					// Support: IE 11+, Edge 17 - 18+
					// IE/Edge sometimes throw a "Permission denied" error when strict-comparing
					// two documents; shallow comparisons work.
					// eslint-disable-next-line eqeqeq
					if ( !context && elem.ownerDocument != document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( ( matcher = elementMatchers[ j++ ] ) ) {
						if ( matcher( elem, context || document, xml ) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {

					// They will have gone through all possible matchers
					if ( ( elem = !matcher && elem ) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( ( matcher = setMatchers[ j++ ] ) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {

					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !( unmatched[ i ] || setMatched[ i ] ) ) {
								setMatched[ i ] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {

		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[ i ] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache(
			selector,
			matcherFromGroupMatchers( elementMatchers, setMatchers )
		);

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( ( selector = compiled.selector || selector ) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[ 0 ] = match[ 0 ].slice( 0 );
		if ( tokens.length > 2 && ( token = tokens[ 0 ] ).type === "ID" &&
			context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[ 1 ].type ] ) {

			context = ( Expr.find[ "ID" ]( token.matches[ 0 ]
				.replace( runescape, funescape ), context ) || [] )[ 0 ];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr[ "needsContext" ].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[ i ];

			// Abort if we hit a combinator
			if ( Expr.relative[ ( type = token.type ) ] ) {
				break;
			}
			if ( ( find = Expr.find[ type ] ) ) {

				// Search, expanding context for leading sibling combinators
				if ( ( seed = find(
					token.matches[ 0 ].replace( runescape, funescape ),
					rsibling.test( tokens[ 0 ].type ) && testContext( context.parentNode ) ||
						context
				) ) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split( "" ).sort( sortOrder ).join( "" ) === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert( function( el ) {

	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement( "fieldset" ) ) & 1;
} );

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert( function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute( "href" ) === "#";
} ) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	} );
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert( function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
} ) ) {
	addHandle( "value", function( elem, _name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	} );
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert( function( el ) {
	return el.getAttribute( "disabled" ) == null;
} ) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
				( val = elem.getAttributeNode( name ) ) && val.specified ?
					val.value :
					null;
		}
	} );
}

return Sizzle;

} )( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

	return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

}
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, _i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, _i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, _i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		if ( elem.contentDocument != null &&

			// Support: IE 11+
			// <object> elements with no `data` attribute has an object
			// `contentDocument` with a `null` prototype.
			getProto( elem.contentDocument ) ) {

			return elem.contentDocument;
		}

		// Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
		// Treat the template element as a regular one in browsers that
		// don't support it.
		if ( nodeName( elem, "template" ) ) {
			elem = elem.content || elem;
		}

		return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( _i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the primary Deferred
			primary = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						primary.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, primary.done( updateFunc( i ) ).resolve, primary.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( primary.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return primary.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), primary.reject );
		}

		return primary.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, _key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( _all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var documentElement = document.documentElement;



	var isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem );
		},
		composed = { composed: true };

	// Support: IE 9 - 11+, Edge 12 - 18+, iOS 10.0 - 10.2 only
	// Check attachment across shadow DOM boundaries when possible (gh-3504)
	// Support: iOS 10.0-10.2 only
	// Early iOS 10 versions support `attachShadow` but not `getRootNode`,
	// leading to errors. We need to check for `getRootNode`.
	if ( documentElement.getRootNode ) {
		isAttached = function( elem ) {
			return jQuery.contains( elem.ownerDocument, elem ) ||
				elem.getRootNode( composed ) === elem.ownerDocument;
		};
	}
var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			isAttached( elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = elem.nodeType &&
			( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]*)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// Support: IE <=9 only
	// IE <=9 replaces <option> tags with their contents when inserted outside of
	// the select element.
	div.innerHTML = "<option></option>";
	support.option = !!div.lastChild;
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;

// Support: IE <=9 only
if ( !support.option ) {
	wrapMap.optgroup = wrapMap.option = [ 1, "<select multiple='multiple'>", "</select>" ];
}


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, attached, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		attached = isAttached( elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( attached ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


var rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 - 11+
// focus() and blur() are asynchronous, except when they are no-op.
// So expect focus to be synchronous when the element is already active,
// and blur to be synchronous when the element is not already active.
// (focus and blur are always synchronous in other supported browsers,
// this just defines when we can count on it).
function expectSync( elem, type ) {
	return ( elem === safeActiveElement() ) === ( type === "focus" );
}

// Support: IE <=9 only
// Accessing document.activeElement can throw unexpectedly
// https://bugs.jquery.com/ticket/13393
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Only attach events to objects that accept data
		if ( !acceptData( elem ) ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = Object.create( null );
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix( nativeEvent ),

			handlers = (
				dataPriv.get( this, "events" ) || Object.create( null )
			)[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// If the event is namespaced, then each handler is only invoked if it is
				// specially universal or its namespaces are a superset of the event's.
				if ( !event.rnamespace || handleObj.namespace === false ||
					event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
						return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
						return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		click: {

			// Utilize native event to ensure correct state for checkable inputs
			setup: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Claim the first handler
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					// dataPriv.set( el, "click", ... )
					leverageNative( el, "click", returnTrue );
				}

				// Return false to allow normal processing in the caller
				return false;
			},
			trigger: function( data ) {

				// For mutual compressibility with _default, replace `this` access with a local var.
				// `|| data` is dead code meant only to preserve the variable through minification.
				var el = this || data;

				// Force setup before triggering a click
				if ( rcheckableType.test( el.type ) &&
					el.click && nodeName( el, "input" ) ) {

					leverageNative( el, "click" );
				}

				// Return non-false to allow normal event-path propagation
				return true;
			},

			// For cross-browser consistency, suppress native .click() on links
			// Also prevent it if we're currently inside a leveraged native-event stack
			_default: function( event ) {
				var target = event.target;
				return rcheckableType.test( target.type ) &&
					target.click && nodeName( target, "input" ) &&
					dataPriv.get( target, "click" ) ||
					nodeName( target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

// Ensure the presence of an event listener that handles manually-triggered
// synthetic events by interrupting progress until reinvoked in response to
// *native* events that it fires directly, ensuring that state changes have
// already occurred before other listeners are invoked.
function leverageNative( el, type, expectSync ) {

	// Missing expectSync indicates a trigger call, which must force setup through jQuery.event.add
	if ( !expectSync ) {
		if ( dataPriv.get( el, type ) === undefined ) {
			jQuery.event.add( el, type, returnTrue );
		}
		return;
	}

	// Register the controller as a special universal handler for all event namespaces
	dataPriv.set( el, type, false );
	jQuery.event.add( el, type, {
		namespace: false,
		handler: function( event ) {
			var notAsync, result,
				saved = dataPriv.get( this, type );

			if ( ( event.isTrigger & 1 ) && this[ type ] ) {

				// Interrupt processing of the outer synthetic .trigger()ed event
				// Saved data should be false in such cases, but might be a leftover capture object
				// from an async native handler (gh-4350)
				if ( !saved.length ) {

					// Store arguments for use when handling the inner native event
					// There will always be at least one argument (an event object), so this array
					// will not be confused with a leftover capture object.
					saved = slice.call( arguments );
					dataPriv.set( this, type, saved );

					// Trigger the native event and capture its result
					// Support: IE <=9 - 11+
					// focus() and blur() are asynchronous
					notAsync = expectSync( this, type );
					this[ type ]();
					result = dataPriv.get( this, type );
					if ( saved !== result || notAsync ) {
						dataPriv.set( this, type, false );
					} else {
						result = {};
					}
					if ( saved !== result ) {

						// Cancel the outer synthetic event
						event.stopImmediatePropagation();
						event.preventDefault();

						// Support: Chrome 86+
						// In Chrome, if an element having a focusout handler is blurred by
						// clicking outside of it, it invokes the handler synchronously. If
						// that handler calls `.remove()` on the element, the data is cleared,
						// leaving `result` undefined. We need to guard against this.
						return result && result.value;
					}

				// If this is an inner synthetic event for an event with a bubbling surrogate
				// (focus or blur), assume that the surrogate already propagated from triggering the
				// native event and prevent that from happening again here.
				// This technically gets the ordering wrong w.r.t. to `.trigger()` (in which the
				// bubbling surrogate propagates *after* the non-bubbling base), but that seems
				// less bad than duplication.
				} else if ( ( jQuery.event.special[ type ] || {} ).delegateType ) {
					event.stopPropagation();
				}

			// If this is a native event triggered above, everything is now in order
			// Fire an inner synthetic event with the original arguments
			} else if ( saved.length ) {

				// ...and capture the result
				dataPriv.set( this, type, {
					value: jQuery.event.trigger(

						// Support: IE <=9 - 11+
						// Extend with the prototype to reset the above stopImmediatePropagation()
						jQuery.extend( saved[ 0 ], jQuery.Event.prototype ),
						saved.slice( 1 ),
						this
					)
				} );

				// Abort handling of the native event
				event.stopImmediatePropagation();
			}
		}
	} );
}

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	code: true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,
	which: true
}, jQuery.event.addProp );

jQuery.each( { focus: "focusin", blur: "focusout" }, function( type, delegateType ) {
	jQuery.event.special[ type ] = {

		// Utilize native event if possible so blur/focus sequence is correct
		setup: function() {

			// Claim the first handler
			// dataPriv.set( this, "focus", ... )
			// dataPriv.set( this, "blur", ... )
			leverageNative( this, type, expectSync );

			// Return false to allow normal processing in the caller
			return false;
		},
		trigger: function() {

			// Force setup before trigger
			leverageNative( this, type );

			// Return non-false to allow normal event-path propagation
			return true;
		},

		// Suppress native focus or blur as it's already being fired
		// in leverageNative.
		_default: function() {
			return true;
		},

		delegateType: delegateType
	};
} );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.get( src );
		events = pdataOld.events;

		if ( events ) {
			dataPriv.remove( dest, "handle events" );

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = flat( args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl && !node.noModule ) {
								jQuery._evalUrl( node.src, {
									nonce: node.nonce || node.getAttribute( "nonce" )
								}, doc );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), node, doc );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && isAttached( node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html;
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = isAttached( elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var swap = function( elem, options, callback ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.call( elem );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		// Support: Chrome <=64
		// Don't get tricked when zoom affects offsetWidth (gh-4029)
		div.style.position = "absolute";
		scrollboxSizeVal = roundPixelMeasures( div.offsetWidth / 3 ) === 12;

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableTrDimensionsVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		},

		// Support: IE 9 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Behavior in IE 9 is more subtle than in newer versions & it passes
		// some versions of this test; make sure not to make it pass there!
		//
		// Support: Firefox 70+
		// Only Firefox includes border widths
		// in computed dimensions. (gh-4529)
		reliableTrDimensions: function() {
			var table, tr, trChild, trStyle;
			if ( reliableTrDimensionsVal == null ) {
				table = document.createElement( "table" );
				tr = document.createElement( "tr" );
				trChild = document.createElement( "div" );

				table.style.cssText = "position:absolute;left:-11111px;border-collapse:separate";
				tr.style.cssText = "border:1px solid";

				// Support: Chrome 86+
				// Height set through cssText does not get applied.
				// Computed height then comes back as 0.
				tr.style.height = "1px";
				trChild.style.height = "9px";

				// Support: Android 8 Chrome 86+
				// In our bodyBackground.html iframe,
				// display for all div elements is set to "inline",
				// which causes a problem only in Android 8 Chrome 86.
				// Ensuring the div is display: block
				// gets around this issue.
				trChild.style.display = "block";

				documentElement
					.appendChild( table )
					.appendChild( tr )
					.appendChild( trChild );

				trStyle = window.getComputedStyle( tr );
				reliableTrDimensionsVal = ( parseInt( trStyle.height, 10 ) +
					parseInt( trStyle.borderTopWidth, 10 ) +
					parseInt( trStyle.borderBottomWidth, 10 ) ) === tr.offsetHeight;

				documentElement.removeChild( table );
			}
			return reliableTrDimensionsVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !isAttached( elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style,
	vendorProps = {};

// Return a vendor-prefixed property or undefined
function vendorPropName( name ) {

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a potentially-mapped jQuery.cssProps or vendor prefixed property
function finalPropName( name ) {
	var final = jQuery.cssProps[ name ] || vendorProps[ name ];

	if ( final ) {
		return final;
	}
	if ( name in emptyStyle ) {
		return name;
	}
	return vendorProps[ name ] = vendorPropName( name ) || name;
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	};

function setPositiveNumber( _elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5

		// If offsetWidth/offsetHeight is unknown, then we can't determine content-box scroll gutter
		// Use an explicit zero to avoid NaN (gh-3964)
		) ) || 0;
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),

		// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-4322).
		// Fake content-box until we know it's needed to know the true value.
		boxSizingNeeded = !support.boxSizingReliable() || extra,
		isBorderBox = boxSizingNeeded &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox,

		val = curCSS( elem, dimension, styles ),
		offsetProp = "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 );

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}


	// Support: IE 9 - 11 only
	// Use offsetWidth/offsetHeight for when box sizing is unreliable.
	// In those cases, the computed value can be trusted to be border-box.
	if ( ( !support.boxSizingReliable() && isBorderBox ||

		// Support: IE 10 - 11+, Edge 15 - 18+
		// IE/Edge misreport `getComputedStyle` of table rows with width/height
		// set in CSS while `offset*` properties report correct values.
		// Interestingly, in some cases IE 9 doesn't suffer from this issue.
		!support.reliableTrDimensions() && nodeName( elem, "tr" ) ||

		// Fall back to offsetWidth/offsetHeight when value is "auto"
		// This happens for inline elements with no explicit setting (gh-3571)
		val === "auto" ||

		// Support: Android <=4.1 - 4.3 only
		// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) &&

		// Make sure the element is visible & connected
		elem.getClientRects().length ) {

		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Where available, offsetWidth/offsetHeight approximate border box dimensions.
		// Where not available (e.g., SVG), assume unreliable box-sizing and interpret the
		// retrieved value as a content box dimension.
		valueIsBorderBox = offsetProp in elem;
		if ( valueIsBorderBox ) {
			val = elem[ offsetProp ];
		}
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"gridArea": true,
		"gridColumn": true,
		"gridColumnEnd": true,
		"gridColumnStart": true,
		"gridRow": true,
		"gridRowEnd": true,
		"gridRowStart": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			// The isCustomProp check can be removed in jQuery 4.0 when we only auto-append
			// "px" to a few hardcoded values.
			if ( type === "number" && !isCustomProp ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( _i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
					swap( elem, cssShow, function() {
						return getWidthOrHeight( elem, dimension, extra );
					} ) :
					getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),

				// Only read styles.position if the test has a chance to fail
				// to avoid forcing a reflow.
				scrollboxSizeBuggy = !support.scrollboxSize() &&
					styles.position === "absolute",

				// To avoid forcing a reflow, only fetch boxSizing if we need it (gh-3991)
				boxSizingNeeded = scrollboxSizeBuggy || extra,
				isBorderBox = boxSizingNeeded &&
					jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra ?
					boxModelAdjustment(
						elem,
						dimension,
						extra,
						isBorderBox,
						styles
					) :
					0;

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && scrollboxSizeBuggy ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 && (
				jQuery.cssHooks[ tween.prop ] ||
					tween.elem.style[ finalPropName( tween.prop ) ] != null ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

				/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
					animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};

		doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( _i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( _i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
				return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || Object.create( null ) )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {

				// Handle: regular nodes (via `this.ownerDocument`), window
				// (via `this.document`) & document (via `this`).
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this.document || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = { guid: Date.now() };

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, parserErrorElem;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {}

	parserErrorElem = xml && xml.getElementsByTagName( "parsererror" )[ 0 ];
	if ( !xml || parserErrorElem ) {
		jQuery.error( "Invalid XML: " + (
			parserErrorElem ?
				jQuery.map( parserErrorElem.childNodes, function( el ) {
					return el.textContent;
				} ).join( "\n" ) :
				data
		) );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	if ( a == null ) {
		return "";
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} ).filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} ).map( function( _i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );

originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
				jQuery( callbackContext ) :
				jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() + " " ] =
									( responseHeaders[ match[ 1 ].toLowerCase() + " " ] || [] )
										.concat( match[ 2 ] );
							}
						}
						match = responseHeaders[ key.toLowerCase() + " " ];
					}
					return match == null ? null : match.join( ", " );
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce.guid++ ) +
					uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Use a noop converter for missing script but not if jsonp
			if ( !isSuccess &&
				jQuery.inArray( "script", s.dataTypes ) > -1 &&
				jQuery.inArray( "json", s.dataTypes ) < 0 ) {
				s.converters[ "text script" ] = function() {};
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( _i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );

jQuery.ajaxPrefilter( function( s ) {
	var i;
	for ( i in s.headers ) {
		if ( i.toLowerCase() === "content-type" ) {
			s.contentType = s.headers[ i ] || "";
		}
	}
} );


jQuery._evalUrl = function( url, options, doc ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,

		// Only evaluate the response if it is successful (gh-4126)
		// dataFilter is not invoked for failure responses, so using it instead
		// of the default converter is kludgy but it works.
		converters: {
			"text script": function() {}
		},
		dataFilter: function( response ) {
			jQuery.globalEval( response, options, doc );
		}
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain or forced-by-attrs requests
	if ( s.crossDomain || s.scriptAttrs ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" )
					.attr( s.scriptAttrs || {} )
					.prop( { charset: s.scriptCharset, src: s.url } )
					.on( "load error", callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					} );

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce.guid++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( _i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( {
		padding: "inner" + name,
		content: type,
		"": "outer" + name
	}, function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( _i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	},

	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );

jQuery.each(
	( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( _i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	}
);




// Support: Android <=4.0 only
// Make sure we trim BOM and NBSP
var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};

jQuery.trim = function( text ) {
	return text == null ?
		"" :
		( text + "" ).replace( rtrim, "" );
};



// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( typeof noGlobal === "undefined" ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./src/demo-page/index.scss":
/*!**********************************!*\
  !*** ./src/demo-page/index.scss ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/plugin/slider.scss":
/*!********************************!*\
  !*** ./src/plugin/slider.scss ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var exports = __webpack_exports__;
/*!********************************!*\
  !*** ./src/demo-page/index.ts ***!
  \********************************/
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
var cov_t83a1k7gw=function(){var path="C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\demo-page\\index.ts",hash="66791ecbb86d149a6c1b4ff99cc91d1abd1b664e",Function=function(){}.constructor,global=new Function('return this')(),gcv="__coverage__",coverageData={path:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\demo-page\\index.ts",statementMap:{"0":{start:{line:2,column:0},end:{line:2,column:62}},"1":{start:{line:3,column:0},end:{line:3,column:24}},"2":{start:{line:4,column:0},end:{line:4,column:33}},"3":{start:{line:5,column:0},end:{line:5,column:28}},"4":{start:{line:6,column:19},end:{line:6,column:49}},"5":{start:{line:7,column:20},end:{line:7,column:42}},"6":{start:{line:9,column:19},end:{line:9,column:31}},"7":{start:{line:10,column:22},end:{line:23,column:5}},"8":{start:{line:11,column:27},end:{line:11,column:51}},"9":{start:{line:12,column:23},end:{line:12,column:53}},"10":{start:{line:13,column:8},end:{line:14,column:58}},"11":{start:{line:14,column:12},end:{line:14,column:58}},"12":{start:{line:15,column:8},end:{line:16,column:56}},"13":{start:{line:16,column:12},end:{line:16,column:56}},"14":{start:{line:17,column:8},end:{line:18,column:57}},"15":{start:{line:18,column:12},end:{line:18,column:57}},"16":{start:{line:19,column:8},end:{line:20,column:57}},"17":{start:{line:20,column:12},end:{line:20,column:57}},"18":{start:{line:21,column:8},end:{line:22,column:58}},"19":{start:{line:22,column:12},end:{line:22,column:58}},"20":{start:{line:24,column:4},end:{line:27,column:7}},"21":{start:{line:25,column:8},end:{line:26,column:27}},"22":{start:{line:26,column:12},end:{line:26,column:27}},"23":{start:{line:30,column:19},end:{line:30,column:31}},"24":{start:{line:31,column:22},end:{line:46,column:5}},"25":{start:{line:32,column:27},end:{line:32,column:52}},"26":{start:{line:33,column:23},end:{line:33,column:53}},"27":{start:{line:34,column:8},end:{line:35,column:54}},"28":{start:{line:35,column:12},end:{line:35,column:54}},"29":{start:{line:36,column:8},end:{line:37,column:61}},"30":{start:{line:37,column:12},end:{line:37,column:61}},"31":{start:{line:38,column:8},end:{line:39,column:58}},"32":{start:{line:39,column:12},end:{line:39,column:58}},"33":{start:{line:40,column:8},end:{line:41,column:56}},"34":{start:{line:41,column:12},end:{line:41,column:56}},"35":{start:{line:42,column:8},end:{line:43,column:55}},"36":{start:{line:43,column:12},end:{line:43,column:55}},"37":{start:{line:44,column:8},end:{line:45,column:52}},"38":{start:{line:45,column:12},end:{line:45,column:52}},"39":{start:{line:47,column:4},end:{line:50,column:7}},"40":{start:{line:48,column:8},end:{line:49,column:27}},"41":{start:{line:49,column:12},end:{line:49,column:27}},"42":{start:{line:53,column:4},end:{line:53,column:92}},"43":{start:{line:56,column:4},end:{line:56,column:88}},"44":{start:{line:59,column:4},end:{line:64,column:7}},"45":{start:{line:60,column:8},end:{line:61,column:68}},"46":{start:{line:61,column:12},end:{line:61,column:68}},"47":{start:{line:62,column:8},end:{line:63,column:70}},"48":{start:{line:63,column:12},end:{line:63,column:70}},"49":{start:{line:66,column:0},end:{line:76,column:3}},"50":{start:{line:67,column:48},end:{line:67,column:56}},"51":{start:{line:68,column:22},end:{line:68,column:41}},"52":{start:{line:69,column:21},end:{line:69,column:46}},"53":{start:{line:70,column:4},end:{line:70,column:53}},"54":{start:{line:71,column:4},end:{line:71,column:52}},"55":{start:{line:72,column:4},end:{line:72,column:40}},"56":{start:{line:73,column:4},end:{line:73,column:36}},"57":{start:{line:74,column:4},end:{line:74,column:71}},"58":{start:{line:75,column:4},end:{line:75,column:73}}},fnMap:{"0":{name:"handleTextInputChange",decl:{start:{line:8,column:9},end:{line:8,column:30}},loc:{start:{line:8,column:48},end:{line:28,column:1}},line:8},"1":{name:"(anonymous_1)",decl:{start:{line:10,column:22},end:{line:10,column:23}},loc:{start:{line:10,column:31},end:{line:23,column:5}},line:10},"2":{name:"(anonymous_2)",decl:{start:{line:24,column:51},end:{line:24,column:52}},loc:{start:{line:24,column:60},end:{line:27,column:5}},line:24},"3":{name:"handleToggleInputChange",decl:{start:{line:29,column:9},end:{line:29,column:32}},loc:{start:{line:29,column:50},end:{line:51,column:1}},line:29},"4":{name:"(anonymous_4)",decl:{start:{line:31,column:22},end:{line:31,column:23}},loc:{start:{line:31,column:31},end:{line:46,column:5}},line:31},"5":{name:"(anonymous_5)",decl:{start:{line:47,column:51},end:{line:47,column:52}},loc:{start:{line:47,column:60},end:{line:50,column:5}},line:47},"6":{name:"bindHandleToggleInputChange",decl:{start:{line:52,column:9},end:{line:52,column:36}},loc:{start:{line:52,column:69},end:{line:54,column:1}},line:52},"7":{name:"bindHandleTextInputChange",decl:{start:{line:55,column:9},end:{line:55,column:34}},loc:{start:{line:55,column:65},end:{line:57,column:1}},line:55},"8":{name:"initializeEventListeners",decl:{start:{line:58,column:9},end:{line:58,column:33}},loc:{start:{line:58,column:61},end:{line:65,column:1}},line:58},"9":{name:"(anonymous_9)",decl:{start:{line:59,column:19},end:{line:59,column:20}},loc:{start:{line:59,column:34},end:{line:64,column:5}},line:59},"10":{name:"(anonymous_10)",decl:{start:{line:66,column:35},end:{line:66,column:36}},loc:{start:{line:66,column:49},end:{line:76,column:1}},line:66}},branchMap:{"0":{loc:{start:{line:13,column:8},end:{line:14,column:58}},type:"if",locations:[{start:{line:13,column:8},end:{line:14,column:58}},{start:{line:13,column:8},end:{line:14,column:58}}],line:13},"1":{loc:{start:{line:15,column:8},end:{line:16,column:56}},type:"if",locations:[{start:{line:15,column:8},end:{line:16,column:56}},{start:{line:15,column:8},end:{line:16,column:56}}],line:15},"2":{loc:{start:{line:17,column:8},end:{line:18,column:57}},type:"if",locations:[{start:{line:17,column:8},end:{line:18,column:57}},{start:{line:17,column:8},end:{line:18,column:57}}],line:17},"3":{loc:{start:{line:19,column:8},end:{line:20,column:57}},type:"if",locations:[{start:{line:19,column:8},end:{line:20,column:57}},{start:{line:19,column:8},end:{line:20,column:57}}],line:19},"4":{loc:{start:{line:21,column:8},end:{line:22,column:58}},type:"if",locations:[{start:{line:21,column:8},end:{line:22,column:58}},{start:{line:21,column:8},end:{line:22,column:58}}],line:21},"5":{loc:{start:{line:25,column:8},end:{line:26,column:27}},type:"if",locations:[{start:{line:25,column:8},end:{line:26,column:27}},{start:{line:25,column:8},end:{line:26,column:27}}],line:25},"6":{loc:{start:{line:34,column:8},end:{line:35,column:54}},type:"if",locations:[{start:{line:34,column:8},end:{line:35,column:54}},{start:{line:34,column:8},end:{line:35,column:54}}],line:34},"7":{loc:{start:{line:36,column:8},end:{line:37,column:61}},type:"if",locations:[{start:{line:36,column:8},end:{line:37,column:61}},{start:{line:36,column:8},end:{line:37,column:61}}],line:36},"8":{loc:{start:{line:38,column:8},end:{line:39,column:58}},type:"if",locations:[{start:{line:38,column:8},end:{line:39,column:58}},{start:{line:38,column:8},end:{line:39,column:58}}],line:38},"9":{loc:{start:{line:40,column:8},end:{line:41,column:56}},type:"if",locations:[{start:{line:40,column:8},end:{line:41,column:56}},{start:{line:40,column:8},end:{line:41,column:56}}],line:40},"10":{loc:{start:{line:42,column:8},end:{line:43,column:55}},type:"if",locations:[{start:{line:42,column:8},end:{line:43,column:55}},{start:{line:42,column:8},end:{line:43,column:55}}],line:42},"11":{loc:{start:{line:44,column:8},end:{line:45,column:52}},type:"if",locations:[{start:{line:44,column:8},end:{line:45,column:52}},{start:{line:44,column:8},end:{line:45,column:52}}],line:44},"12":{loc:{start:{line:48,column:8},end:{line:49,column:27}},type:"if",locations:[{start:{line:48,column:8},end:{line:49,column:27}},{start:{line:48,column:8},end:{line:49,column:27}}],line:48},"13":{loc:{start:{line:60,column:8},end:{line:61,column:68}},type:"if",locations:[{start:{line:60,column:8},end:{line:61,column:68}},{start:{line:60,column:8},end:{line:61,column:68}}],line:60},"14":{loc:{start:{line:62,column:8},end:{line:63,column:70}},type:"if",locations:[{start:{line:62,column:8},end:{line:63,column:70}},{start:{line:62,column:8},end:{line:63,column:70}}],line:62}},s:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0,"25":0,"26":0,"27":0,"28":0,"29":0,"30":0,"31":0,"32":0,"33":0,"34":0,"35":0,"36":0,"37":0,"38":0,"39":0,"40":0,"41":0,"42":0,"43":0,"44":0,"45":0,"46":0,"47":0,"48":0,"49":0,"50":0,"51":0,"52":0,"53":0,"54":0,"55":0,"56":0,"57":0,"58":0},f:{"0":0,"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0},b:{"0":[0,0],"1":[0,0],"2":[0,0],"3":[0,0],"4":[0,0],"5":[0,0],"6":[0,0],"7":[0,0],"8":[0,0],"9":[0,0],"10":[0,0],"11":[0,0],"12":[0,0],"13":[0,0],"14":[0,0]},inputSourceMap:{version:3,file:"C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\demo-page\\index.ts",sourceRoot:"",sources:["C:\\Users\\stasf\\Desktop\\Front\\Task-4\\src\\demo-page\\index.ts"],names:[],mappings:"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",sourcesContent:["import './index.scss';\nimport '../plugin/slider.scss';\nimport '../plugin/slider';\nimport { UserSliderSettings } from './types';\nimport { SideMenu } from './SideMenu/SideMenu';\nimport { sliderSettings } from './indexData';\nimport { IPlugin } from '../plugin/interfaces';\n\nfunction handleTextInputChange(sideMenu: SideMenu, event: Event) {\n  const target: HTMLInputElement = event.target as HTMLInputElement;\n\n  const passValue = (key: string) => {\n    const correctKey: string = key.replace('Input', '');\n    const slider: IPlugin = this.data('plugin_gobySlider');\n\n    if (correctKey === 'from') slider.update({ from: Number(target.value) });\n    if (correctKey === 'to') slider.update({ to: Number(target.value) });\n    if (correctKey === 'min') slider.update({ min: Number(target.value) });\n    if (correctKey === 'max') slider.update({ max: Number(target.value) });\n    if (correctKey === 'step') slider.update({ step: Number(target.value) });\n  };\n\n  Object.keys(sideMenu.sideMenuElements).forEach((key: string): void => {\n    if (sideMenu.sideMenuElements[key] === target) passValue(key);\n  });\n}\n\nfunction handleToggleInputChange(sideMenu: SideMenu, event: Event): void {\n  const target: HTMLInputElement = event.target as HTMLInputElement;\n\n  const passValue = (key: string) => {\n    const optionsKey: string = key.replace('Toggle', '');\n    const slider: IPlugin = this.data('plugin_gobySlider');\n\n    if (optionsKey === 'double') slider.update({ double: target.checked });\n    if (optionsKey === 'handlesValues') slider.update({ handlesValues: target.checked });\n    if (optionsKey === 'valueScale') slider.update({ valueScale: target.checked });\n    if (optionsKey === 'vertical') slider.update({ vertical: target.checked });\n    if (optionsKey === 'integer') slider.update({ integer: target.checked });\n    if (optionsKey === 'step') slider.update({ step: target.checked });\n  };\n\n  Object.keys(sideMenu.sideMenuElements).forEach((key: string): void => {\n    if (sideMenu.sideMenuElements[key] === target) passValue(key);\n  });\n}\n\nfunction bindHandleToggleInputChange(\n  toggleInput: HTMLInputElement, element: JQuery<HTMLElement>, sideMenu: SideMenu,\n): void {\n  toggleInput.addEventListener('change', handleToggleInputChange.bind(element, sideMenu));\n}\n\nfunction bindHandleTextInputChange(\n  textInput: HTMLInputElement, element: JQuery<HTMLElement>, sideMenu: SideMenu,\n): void {\n  textInput.addEventListener('change', handleTextInputChange.bind(element, sideMenu));\n}\n\nfunction initializeEventListeners(inputs: Array<HTMLInputElement>,\n  element: JQuery<HTMLElement>, sideMenu: SideMenu): void {\n  inputs.forEach((textInput: HTMLInputElement) => {\n    if (inputs === sideMenu.textInputs) bindHandleTextInputChange(textInput, element, sideMenu);\n    if (inputs === sideMenu.toggleInputs) bindHandleToggleInputChange(textInput, element, sideMenu);\n  });\n}\n\nsliderSettings.forEach((settings: UserSliderSettings) => {\n  const { containerElement, sliderOptions } = settings;\n  const container: JQuery<HTMLElement> = $(containerElement);\n\n  const sideMenu: SideMenu = new SideMenu();\n  sliderOptions.onChange = sideMenu.updateSideMenu;\n  sliderOptions.onStart = sideMenu.updateSideMenu;\n\n  container.gobySlider(sliderOptions);\n  sideMenu.appendToDom(container);\n  initializeEventListeners(sideMenu.textInputs!, container, sideMenu);\n  initializeEventListeners(sideMenu.toggleInputs!, container, sideMenu);\n});\n"]},_coverageSchema:"332fd63041d2c1bcb487cc26dd0d5f7d97098a6c"},coverage=global[gcv]||(global[gcv]={});if(coverage[path]&&coverage[path].hash===hash){return coverage[path];}coverageData.hash=hash;return coverage[path]=coverageData;}();cov_t83a1k7gw.s[0]++;Object.defineProperty(exports, "__esModule", ({value:true}));cov_t83a1k7gw.s[1]++;__webpack_require__(/*! ./index.scss */ "./src/demo-page/index.scss");cov_t83a1k7gw.s[2]++;__webpack_require__(/*! ../plugin/slider.scss */ "./src/plugin/slider.scss");cov_t83a1k7gw.s[3]++;__webpack_require__(/*! ../plugin/slider */ "./src/plugin/slider.ts");const SideMenu_1=(cov_t83a1k7gw.s[4]++,__webpack_require__(/*! ./SideMenu/SideMenu */ "./src/demo-page/SideMenu/SideMenu.ts"));const indexData_1=(cov_t83a1k7gw.s[5]++,__webpack_require__(/*! ./indexData */ "./src/demo-page/indexData.ts"));function handleTextInputChange(sideMenu,event){cov_t83a1k7gw.f[0]++;const target=(cov_t83a1k7gw.s[6]++,event.target);cov_t83a1k7gw.s[7]++;const passValue=key=>{cov_t83a1k7gw.f[1]++;const correctKey=(cov_t83a1k7gw.s[8]++,key.replace('Input',''));const slider=(cov_t83a1k7gw.s[9]++,this.data('plugin_gobySlider'));cov_t83a1k7gw.s[10]++;if(correctKey==='from'){cov_t83a1k7gw.b[0][0]++;cov_t83a1k7gw.s[11]++;slider.update({from:Number(target.value)});}else{cov_t83a1k7gw.b[0][1]++;}cov_t83a1k7gw.s[12]++;if(correctKey==='to'){cov_t83a1k7gw.b[1][0]++;cov_t83a1k7gw.s[13]++;slider.update({to:Number(target.value)});}else{cov_t83a1k7gw.b[1][1]++;}cov_t83a1k7gw.s[14]++;if(correctKey==='min'){cov_t83a1k7gw.b[2][0]++;cov_t83a1k7gw.s[15]++;slider.update({min:Number(target.value)});}else{cov_t83a1k7gw.b[2][1]++;}cov_t83a1k7gw.s[16]++;if(correctKey==='max'){cov_t83a1k7gw.b[3][0]++;cov_t83a1k7gw.s[17]++;slider.update({max:Number(target.value)});}else{cov_t83a1k7gw.b[3][1]++;}cov_t83a1k7gw.s[18]++;if(correctKey==='step'){cov_t83a1k7gw.b[4][0]++;cov_t83a1k7gw.s[19]++;slider.update({step:Number(target.value)});}else{cov_t83a1k7gw.b[4][1]++;}};cov_t83a1k7gw.s[20]++;Object.keys(sideMenu.sideMenuElements).forEach(key=>{cov_t83a1k7gw.f[2]++;cov_t83a1k7gw.s[21]++;if(sideMenu.sideMenuElements[key]===target){cov_t83a1k7gw.b[5][0]++;cov_t83a1k7gw.s[22]++;passValue(key);}else{cov_t83a1k7gw.b[5][1]++;}});}function handleToggleInputChange(sideMenu,event){cov_t83a1k7gw.f[3]++;const target=(cov_t83a1k7gw.s[23]++,event.target);cov_t83a1k7gw.s[24]++;const passValue=key=>{cov_t83a1k7gw.f[4]++;const optionsKey=(cov_t83a1k7gw.s[25]++,key.replace('Toggle',''));const slider=(cov_t83a1k7gw.s[26]++,this.data('plugin_gobySlider'));cov_t83a1k7gw.s[27]++;if(optionsKey==='double'){cov_t83a1k7gw.b[6][0]++;cov_t83a1k7gw.s[28]++;slider.update({double:target.checked});}else{cov_t83a1k7gw.b[6][1]++;}cov_t83a1k7gw.s[29]++;if(optionsKey==='handlesValues'){cov_t83a1k7gw.b[7][0]++;cov_t83a1k7gw.s[30]++;slider.update({handlesValues:target.checked});}else{cov_t83a1k7gw.b[7][1]++;}cov_t83a1k7gw.s[31]++;if(optionsKey==='valueScale'){cov_t83a1k7gw.b[8][0]++;cov_t83a1k7gw.s[32]++;slider.update({valueScale:target.checked});}else{cov_t83a1k7gw.b[8][1]++;}cov_t83a1k7gw.s[33]++;if(optionsKey==='vertical'){cov_t83a1k7gw.b[9][0]++;cov_t83a1k7gw.s[34]++;slider.update({vertical:target.checked});}else{cov_t83a1k7gw.b[9][1]++;}cov_t83a1k7gw.s[35]++;if(optionsKey==='integer'){cov_t83a1k7gw.b[10][0]++;cov_t83a1k7gw.s[36]++;slider.update({integer:target.checked});}else{cov_t83a1k7gw.b[10][1]++;}cov_t83a1k7gw.s[37]++;if(optionsKey==='step'){cov_t83a1k7gw.b[11][0]++;cov_t83a1k7gw.s[38]++;slider.update({step:target.checked});}else{cov_t83a1k7gw.b[11][1]++;}};cov_t83a1k7gw.s[39]++;Object.keys(sideMenu.sideMenuElements).forEach(key=>{cov_t83a1k7gw.f[5]++;cov_t83a1k7gw.s[40]++;if(sideMenu.sideMenuElements[key]===target){cov_t83a1k7gw.b[12][0]++;cov_t83a1k7gw.s[41]++;passValue(key);}else{cov_t83a1k7gw.b[12][1]++;}});}function bindHandleToggleInputChange(toggleInput,element,sideMenu){cov_t83a1k7gw.f[6]++;cov_t83a1k7gw.s[42]++;toggleInput.addEventListener('change',handleToggleInputChange.bind(element,sideMenu));}function bindHandleTextInputChange(textInput,element,sideMenu){cov_t83a1k7gw.f[7]++;cov_t83a1k7gw.s[43]++;textInput.addEventListener('change',handleTextInputChange.bind(element,sideMenu));}function initializeEventListeners(inputs,element,sideMenu){cov_t83a1k7gw.f[8]++;cov_t83a1k7gw.s[44]++;inputs.forEach(textInput=>{cov_t83a1k7gw.f[9]++;cov_t83a1k7gw.s[45]++;if(inputs===sideMenu.textInputs){cov_t83a1k7gw.b[13][0]++;cov_t83a1k7gw.s[46]++;bindHandleTextInputChange(textInput,element,sideMenu);}else{cov_t83a1k7gw.b[13][1]++;}cov_t83a1k7gw.s[47]++;if(inputs===sideMenu.toggleInputs){cov_t83a1k7gw.b[14][0]++;cov_t83a1k7gw.s[48]++;bindHandleToggleInputChange(textInput,element,sideMenu);}else{cov_t83a1k7gw.b[14][1]++;}});}cov_t83a1k7gw.s[49]++;indexData_1.sliderSettings.forEach(settings=>{cov_t83a1k7gw.f[10]++;const{containerElement,sliderOptions}=(cov_t83a1k7gw.s[50]++,settings);const container=(cov_t83a1k7gw.s[51]++,$(containerElement));const sideMenu=(cov_t83a1k7gw.s[52]++,new SideMenu_1.SideMenu());cov_t83a1k7gw.s[53]++;sliderOptions.onChange=sideMenu.updateSideMenu;cov_t83a1k7gw.s[54]++;sliderOptions.onStart=sideMenu.updateSideMenu;cov_t83a1k7gw.s[55]++;container.gobySlider(sliderOptions);cov_t83a1k7gw.s[56]++;sideMenu.appendToDom(container);cov_t83a1k7gw.s[57]++;initializeEventListeners(sideMenu.textInputs,container,sideMenu);cov_t83a1k7gw.s[58]++;initializeEventListeners(sideMenu.toggleInputs,container,sideMenu);});
})();

/******/ })()
;