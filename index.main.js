/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body{
    height: 100vh;
    margin: 0;
    overflow: hidden;
    font-family: Roboto, sans-serif;
    color: black;
    overflow-y: auto;
    overflow-x: auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 5rem 10rem 1fr;
    background-color: rgb(32, 92, 92);
    color: white;
}

.search{
    justify-self: center;
    align-self: center;
    padding: 2rem;
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
}

.overview{
    justify-self: center;
    padding: 2rem;
    display: flex;
    gap: 2rem;  
}

.overviewImage{
    width: 8rem;
    height: auto;
}

.overviewInfo{
    display: flex;
    flex-direction: column;
    gap: .5rem;  
}

.forecastDaysWrapper{
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  
    padding: 2rem;
    
}

.content{
    color: black;
}

.forecastdays{
    border: rgb(81, 10, 10) solid 20px;
    border-radius: 10px;
    background-color: rgb(81, 10, 10);
    width: 1080px;
    margin: auto;
    display: grid;
    justify-content: center;
    grid-template-columns: repeat(5, 200px);
    grid-auto-rows: 250px;
    gap: 20px;
}

.day{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .5rem;
    background-color: blanchedalmond;
    
}

.icon{
    height: 75px;
    width: auto;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,SAAS;IACT,gBAAgB;IAChB,+BAA+B;IAC/B,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,aAAa;IACb,0BAA0B;IAC1B,kCAAkC;IAClC,iCAAiC;IACjC,YAAY;AAChB;;AAEA;IACI,oBAAoB;IACpB,kBAAkB;IAClB,aAAa;IACb,aAAa;IACb,SAAS;IACT,eAAe;AACnB;;AAEA;IACI,oBAAoB;IACpB,aAAa;IACb,aAAa;IACb,SAAS;AACb;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,UAAU;AACd;;AAEA;IACI,aAAa;IACb,0BAA0B;IAC1B,uBAAuB;;IAEvB,aAAa;;AAEjB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,kCAAkC;IAClC,mBAAmB;IACnB,iCAAiC;IACjC,aAAa;IACb,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,uCAAuC;IACvC,qBAAqB;IACrB,SAAS;AACb;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;IACvB,mBAAmB;IACnB,UAAU;IACV,gCAAgC;;AAEpC;;AAEA;IACI,YAAY;IACZ,WAAW;AACf","sourcesContent":["body{\n    height: 100vh;\n    margin: 0;\n    overflow: hidden;\n    font-family: Roboto, sans-serif;\n    color: black;\n    overflow-y: auto;\n    overflow-x: auto;\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 5rem 10rem 1fr;\n    background-color: rgb(32, 92, 92);\n    color: white;\n}\n\n.search{\n    justify-self: center;\n    align-self: center;\n    padding: 2rem;\n    display: flex;\n    gap: 1rem;\n    flex-wrap: wrap;\n}\n\n.overview{\n    justify-self: center;\n    padding: 2rem;\n    display: flex;\n    gap: 2rem;  \n}\n\n.overviewImage{\n    width: 8rem;\n    height: auto;\n}\n\n.overviewInfo{\n    display: flex;\n    flex-direction: column;\n    gap: .5rem;  \n}\n\n.forecastDaysWrapper{\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr;\n  \n    padding: 2rem;\n    \n}\n\n.content{\n    color: black;\n}\n\n.forecastdays{\n    border: rgb(81, 10, 10) solid 20px;\n    border-radius: 10px;\n    background-color: rgb(81, 10, 10);\n    width: 1080px;\n    margin: auto;\n    display: grid;\n    justify-content: center;\n    grid-template-columns: repeat(5, 200px);\n    grid-auto-rows: 250px;\n    gap: 20px;\n}\n\n.day{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: .5rem;\n    background-color: blanchedalmond;\n    \n}\n\n.icon{\n    height: 75px;\n    width: auto;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/DOMgeneration.js":
/*!******************************!*\
  !*** ./src/DOMgeneration.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generate15DayDOM: () => (/* binding */ generate15DayDOM),
/* harmony export */   generateCurrentDOM: () => (/* binding */ generateCurrentDOM)
/* harmony export */ });
const generateSearch = (function(){
    const search = document.querySelector('.search');

    const searchLabel = document.createElement('label');
    searchLabel.htmlFor = 'searchLocation';
    searchLabel.textContent = 'Enter a city into the field and get that weather:';
    search.appendChild(searchLabel);
    
    const searchInput = document.createElement('input');
    searchInput.id = 'searchLocation';
    searchInput.type = 'text';
    search.appendChild(searchInput);

    const degreeSet = document.createElement('div');
    search.appendChild(degreeSet); 

    const fahrChoice = document.createElement('input');
    fahrChoice.id = 'fahr';
    fahrChoice.type = 'radio';
    fahrChoice.name = 'degree';
    fahrChoice.checked = true;
    fahrChoice.value = '°F';
    degreeSet.appendChild(fahrChoice);

    const fahr = document.createElement('label');
    fahr.htmlFor = 'fahr';
    fahr.textContent = '°F';
    degreeSet.appendChild(fahr);
    
    const celsiusChoice = document.createElement('input');
    celsiusChoice.id = 'celsius';
    celsiusChoice.type = 'radio';
    celsiusChoice.name = 'degree';
    celsiusChoice.value = '°C';
    degreeSet.appendChild(celsiusChoice);

    const celsius = document.createElement('label');
    celsius.htmlFor = 'celsius';
    celsius.textContent = '°C';
    degreeSet.appendChild(celsius);

    const searchButton = document.createElement('button');
    searchButton.classList.add('getWeather');
    searchButton.textContent = 'Get Weather';
    search.appendChild(searchButton);
})();

function generateCurrentDOM(currentAddress, currentConditions, currentTemp, currentIcon){
    const overview = document.querySelector('.overview');
    overview.innerHTML = '';

    const overviewImage = document.createElement('img');
    overviewImage.classList.add('overviewImage');
    overviewImage.src = currentIcon;
    overview.appendChild(overviewImage);
    
    const overviewInfo = document.createElement('div');
    overviewInfo.classList.add('overviewInfo');
    overview.appendChild(overviewInfo);

    const overviewTitle = document.createElement('div');
    overviewTitle.textContent = 'Current Overview:';
    overviewInfo.appendChild(overviewTitle);

    const address = document.createElement('div');
    address.textContent = currentAddress;
    overviewInfo.appendChild(address);

    const conditions = document.createElement('div');
    conditions.textContent = currentConditions;
    overviewInfo.appendChild(conditions);
    
    const temp = document.createElement('div');
    temp.textContent = currentTemp;
    overviewInfo.appendChild(temp);
}

function generate15DayDOM(forecastArray){
    const content = document.querySelector('.content');
    content.innerHTML = '';
    const forecastdays = document.createElement('div');
    forecastdays.classList.add('forecastdays');
    content.appendChild(forecastdays);

    forecastArray.forEach(forecastDay => {
        const day = document.createElement('div');
        day.classList.add('day');
        forecastdays.appendChild(day);

        const date = document.createElement('div');
        date.textContent = forecastDay.datetime.slice(5);
        day.appendChild(date);

        const icon = document.createElement('img');
        icon.classList.add('icon');
        icon.src = forecastDay.icon;
        day.appendChild(icon);

        const conditions = document.createElement('div');
        conditions.textContent = forecastDay.conditions;
        day.appendChild(conditions);

        //temp
        const temp = document.createElement('div');
        temp.textContent = forecastDay.temp;
        day.appendChild(temp);

        //min and max temp
        const minmax = document.createElement('div');
        minmax.textContent = 'Min: ' + forecastDay.tempmin + ',   Max: ' + forecastDay.tempmax;
        day.appendChild(minmax);

        //humidity
        const humidity = document.createElement('div');
        humidity.textContent = 'Humidity: ' + forecastDay.humidity;
        day.appendChild(humidity);
    });
}

//Make 15 day Forcast Now:




/***/ }),

/***/ "./src/weatherData.js":
/*!****************************!*\
  !*** ./src/weatherData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   weather: () => (/* binding */ weather)
/* harmony export */ });
/* harmony import */ var _icons_snow_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./icons/snow.svg */ "./src/icons/snow.svg");
/* harmony import */ var _icons_rain_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./icons/rain.svg */ "./src/icons/rain.svg");
/* harmony import */ var _icons_fog_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./icons/fog.svg */ "./src/icons/fog.svg");
/* harmony import */ var _icons_wind_svg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./icons/wind.svg */ "./src/icons/wind.svg");
/* harmony import */ var _icons_cloudy_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/cloudy.svg */ "./src/icons/cloudy.svg");
/* harmony import */ var _icons_partly_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./icons/partly-cloudy-day.svg */ "./src/icons/partly-cloudy-day.svg");
/* harmony import */ var _icons_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/partly-cloudy-night.svg */ "./src/icons/partly-cloudy-night.svg");
/* harmony import */ var _icons_clear_day_svg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./icons/clear-day.svg */ "./src/icons/clear-day.svg");
/* harmony import */ var _icons_clear_night_svg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./icons/clear-night.svg */ "./src/icons/clear-night.svg");










const weather = (function(){

    let currentParse = '';
    let address = '';
    let currentCondition = '';
    let currentTemp = '';
    let currentIcon = '';
    let fifteenDays = '';
    
    
    const generateCurrentParse = async function(location, degree){
        const raw = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '?key=LK4KV98AZ6RNMYP4RLDSSSUWQ', {mode: 'cors'})
        currentParse = await raw.json();
        //allocate data:
        address = currentParse.resolvedAddress;
        currentCondition = currentParse.currentConditions.conditions;
        if(degree === '°F'){currentTemp = currentParse.currentConditions.temp + '°F';}
        if(degree === '°C'){currentTemp = Math.round((currentParse.currentConditions.temp - 32) * 5/9 * 10)/10 + '°C';}
        currentIcon = convertIcon(currentParse.currentConditions.icon);
        fifteenDays = currentParse.days; 
        //translate 15-day icons:
        fifteenDays.forEach(day => {
            day.icon = convertIcon(day.icon);
        })
        //add degree and convert if needed:
        if(degree === '°F'){
            fifteenDays.forEach(day => {
                day.temp = day.temp + '°F';
                day.tempmin = day.tempmin + '°F';
                day.tempmax = day.tempmax + '°F';
            })
        }
        if(degree === '°C'){
            fifteenDays.forEach(day => {
                day.temp = Math.round((day.temp - 32) * 5/9 * 10)/10 + '°C';
                day.tempmin = Math.round((day.tempmin - 32) * 5/9 * 10)/10 + '°C';
                day.tempmax = Math.round((day.tempmax - 32) * 5/9 * 10)/10 + '°C';
            })
        }
    }
    
    const convertIcon = (icon) => {
        switch(icon){
            case 'snow':
                return _icons_snow_svg__WEBPACK_IMPORTED_MODULE_0__;
            case 'rain':
                return _icons_rain_svg__WEBPACK_IMPORTED_MODULE_1__;
            case 'fog':
                return _icons_fog_svg__WEBPACK_IMPORTED_MODULE_2__;
            case 'wind':
                return _icons_wind_svg__WEBPACK_IMPORTED_MODULE_3__;
            case 'cloudy':
                return _icons_cloudy_svg__WEBPACK_IMPORTED_MODULE_4__;
            case 'partly-cloudy-day':
                return _icons_partly_cloudy_day_svg__WEBPACK_IMPORTED_MODULE_5__;
            case 'partly-cloudy-night':
                return _icons_partly_cloudy_night_svg__WEBPACK_IMPORTED_MODULE_6__;
            case 'clear-day':
                return _icons_clear_day_svg__WEBPACK_IMPORTED_MODULE_7__;
            case 'clear-night':
                return _icons_clear_night_svg__WEBPACK_IMPORTED_MODULE_8__;
        }
    }

    const showCurrentParce = function(){
        console.log(currentParse);
    }
    
    const getaddress = () => {return address};
    const getcurrentCondition = () => {return currentCondition};
    const getcurrentTemp = () => {return currentTemp};
    const getCurrentIcon = () => {return currentIcon};
    const getFifteenDays = () => {return fifteenDays};
    
    return {generateCurrentParse, showCurrentParce, getaddress, getcurrentCondition, getcurrentTemp, getCurrentIcon, getFifteenDays}
    })();

    

/***/ }),

/***/ "./src/icons/clear-day.svg":
/*!*********************************!*\
  !*** ./src/icons/clear-day.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0ae928911d7143fe5c97.svg";

/***/ }),

/***/ "./src/icons/clear-night.svg":
/*!***********************************!*\
  !*** ./src/icons/clear-night.svg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "10da86080cdf8ab805dc.svg";

/***/ }),

/***/ "./src/icons/cloudy.svg":
/*!******************************!*\
  !*** ./src/icons/cloudy.svg ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b3bf211cc12293dba117.svg";

/***/ }),

/***/ "./src/icons/fog.svg":
/*!***************************!*\
  !*** ./src/icons/fog.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4367781d78de4b41c8ba.svg";

/***/ }),

/***/ "./src/icons/partly-cloudy-day.svg":
/*!*****************************************!*\
  !*** ./src/icons/partly-cloudy-day.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "1b7e30503cbfe9b1328f.svg";

/***/ }),

/***/ "./src/icons/partly-cloudy-night.svg":
/*!*******************************************!*\
  !*** ./src/icons/partly-cloudy-night.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f16ddc81302dd032a209.svg";

/***/ }),

/***/ "./src/icons/rain.svg":
/*!****************************!*\
  !*** ./src/icons/rain.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6e4f357e69e53710441a.svg";

/***/ }),

/***/ "./src/icons/snow.svg":
/*!****************************!*\
  !*** ./src/icons/snow.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a38ec89338af4551eb0e.svg";

/***/ }),

/***/ "./src/icons/wind.svg":
/*!****************************!*\
  !*** ./src/icons/wind.svg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f9e79d493e2fd83a55bd.svg";

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
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _DOMgeneration_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DOMgeneration.js */ "./src/DOMgeneration.js");
/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./weatherData */ "./src/weatherData.js");





const button = document.querySelector('.getWeather');
const searchLocation = document.querySelector('#searchLocation');
let searchLocationFocus = false;


button.addEventListener('click', () => {
    const degree = document.querySelector('input[name="degree"]:checked')
    _weatherData__WEBPACK_IMPORTED_MODULE_2__.weather.generateCurrentParse(searchLocation.value, degree.value)
    .then(() => {
        ;(0,_DOMgeneration_js__WEBPACK_IMPORTED_MODULE_1__.generateCurrentDOM)(_weatherData__WEBPACK_IMPORTED_MODULE_2__.weather.getaddress(), _weatherData__WEBPACK_IMPORTED_MODULE_2__.weather.getcurrentCondition(), _weatherData__WEBPACK_IMPORTED_MODULE_2__.weather.getcurrentTemp(), _weatherData__WEBPACK_IMPORTED_MODULE_2__.weather.getCurrentIcon());
        (0,_DOMgeneration_js__WEBPACK_IMPORTED_MODULE_1__.generate15DayDOM)(_weatherData__WEBPACK_IMPORTED_MODULE_2__.weather.getFifteenDays());
});
})

//Allow Enter key functionality
searchLocation.addEventListener('focus', () => {
    searchLocationFocus = true;
})

searchLocation.addEventListener('blur', () => {
    searchLocationFocus = false;
})

window.addEventListener('keydown', (e) => {
    if(e.key === 'Enter' && searchLocationFocus === true){
        const degree = document.querySelector('input[name="degree"]:checked')
        _weatherData__WEBPACK_IMPORTED_MODULE_2__.weather.generateCurrentParse(searchLocation.value, degree.value)
        .then(() => {
        ;(0,_DOMgeneration_js__WEBPACK_IMPORTED_MODULE_1__.generateCurrentDOM)(_weatherData__WEBPACK_IMPORTED_MODULE_2__.weather.getaddress(), _weatherData__WEBPACK_IMPORTED_MODULE_2__.weather.getcurrentCondition(), _weatherData__WEBPACK_IMPORTED_MODULE_2__.weather.getcurrentTemp(), _weatherData__WEBPACK_IMPORTED_MODULE_2__.weather.getCurrentIcon());
        (0,_DOMgeneration_js__WEBPACK_IMPORTED_MODULE_1__.generate15DayDOM)(_weatherData__WEBPACK_IMPORTED_MODULE_2__.weather.getFifteenDays());
        console.log(_weatherData__WEBPACK_IMPORTED_MODULE_2__.weather.getFifteenDays())
        });
    }
    
})



/*list of conditions to have an image for:
snow	                    Amount of snow is greater than zero
rain	                    Amount of rainfall is greater than zero
fog	                        Visibility is low (lower than one kilometer or mile)
wind	                    Wind speed is high (greater than 30 kph or mph)
cloudy	                    Cloud cover is greater than 90% cover
partly-cloudy-day	        Cloud cover is greater than 20% cover during day time.
partly-cloudy-night	        Cloud cover is greater than 20% cover during night time.
clear-day	                Cloud cover is less than 20% cover during day time
clear-night	                Cloud cover is less than 20% cover during night time
*/






//https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/[location]/[date1]/[date2]?key=YOUR_API_KEY 
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7Ozs7Ozs7Ozs7Ozs7QUNiQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2SG9DO0FBQ0E7QUFDRjtBQUNFO0FBQ0k7QUFDb0I7QUFDSTtBQUNuQjtBQUNJOztBQUVqRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1S0FBdUssYUFBYTtBQUNwTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1Qiw0QkFBNEI7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw0Q0FBSTtBQUMzQjtBQUNBLHVCQUF1Qiw0Q0FBSTtBQUMzQjtBQUNBLHVCQUF1QiwyQ0FBRztBQUMxQjtBQUNBLHVCQUF1Qiw0Q0FBSTtBQUMzQjtBQUNBLHVCQUF1Qiw4Q0FBTTtBQUM3QjtBQUNBLHVCQUF1Qix5REFBZTtBQUN0QztBQUNBLHVCQUF1QiwyREFBaUI7QUFDeEM7QUFDQSx1QkFBdUIsaURBQVE7QUFDL0I7QUFDQSx1QkFBdUIsbURBQVU7QUFDakM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5Qix1Q0FBdUM7QUFDdkMsa0NBQWtDO0FBQ2xDLGtDQUFrQztBQUNsQyxrQ0FBa0M7QUFDbEM7QUFDQSxZQUFZO0FBQ1osS0FBSzs7QUFFTDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDdkZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7Ozs7Ozs7Ozs7Ozs7QUNBcUI7QUFDcUQ7QUFDbEM7OztBQUd4QztBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQSxJQUFJLGlEQUFPO0FBQ1g7QUFDQSxRQUFRLHNFQUFrQixDQUFDLGlEQUFPLGVBQWUsaURBQU8sd0JBQXdCLGlEQUFPLG1CQUFtQixpREFBTztBQUNqSCxRQUFRLG1FQUFnQixDQUFDLGlEQUFPO0FBQ2hDLENBQUM7QUFDRCxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpREFBTztBQUNmO0FBQ0EsUUFBUSxzRUFBa0IsQ0FBQyxpREFBTyxlQUFlLGlEQUFPLHdCQUF3QixpREFBTyxtQkFBbUIsaURBQU87QUFDakgsUUFBUSxtRUFBZ0IsQ0FBQyxpREFBTztBQUNoQyxvQkFBb0IsaURBQU87QUFDM0IsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDOzs7O0FBSUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BLGtJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvRE9NZ2VuZXJhdGlvbi5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBib2R5e1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgbWFyZ2luOiAwO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA1cmVtIDEwcmVtIDFmcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMzIsIDkyLCA5Mik7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG4uc2VhcmNoe1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZ2FwOiAxcmVtO1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLm92ZXJ2aWV3e1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBnYXA6IDJyZW07ICBcbn1cblxuLm92ZXJ2aWV3SW1hZ2V7XG4gICAgd2lkdGg6IDhyZW07XG4gICAgaGVpZ2h0OiBhdXRvO1xufVxuXG4ub3ZlcnZpZXdJbmZve1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBnYXA6IC41cmVtOyAgXG59XG5cbi5mb3JlY2FzdERheXNXcmFwcGVye1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XG4gIFxuICAgIHBhZGRpbmc6IDJyZW07XG4gICAgXG59XG5cbi5jb250ZW50e1xuICAgIGNvbG9yOiBibGFjaztcbn1cblxuLmZvcmVjYXN0ZGF5c3tcbiAgICBib3JkZXI6IHJnYig4MSwgMTAsIDEwKSBzb2xpZCAyMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDgxLCAxMCwgMTApO1xuICAgIHdpZHRoOiAxMDgwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMjAwcHgpO1xuICAgIGdyaWQtYXV0by1yb3dzOiAyNTBweDtcbiAgICBnYXA6IDIwcHg7XG59XG5cbi5kYXl7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiAuNXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFuY2hlZGFsbW9uZDtcbiAgICBcbn1cblxuLmljb257XG4gICAgaGVpZ2h0OiA3NXB4O1xuICAgIHdpZHRoOiBhdXRvO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLGFBQWE7SUFDYixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLCtCQUErQjtJQUMvQixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNoQixhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLGtDQUFrQztJQUNsQyxpQ0FBaUM7SUFDakMsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLGFBQWE7SUFDYixTQUFTO0lBQ1QsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLG9CQUFvQjtJQUNwQixhQUFhO0lBQ2IsYUFBYTtJQUNiLFNBQVM7QUFDYjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsMEJBQTBCO0lBQzFCLHVCQUF1Qjs7SUFFdkIsYUFBYTs7QUFFakI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksa0NBQWtDO0lBQ2xDLG1CQUFtQjtJQUNuQixpQ0FBaUM7SUFDakMsYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLHVDQUF1QztJQUN2QyxxQkFBcUI7SUFDckIsU0FBUztBQUNiOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLFVBQVU7SUFDVixnQ0FBZ0M7O0FBRXBDOztBQUVBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5e1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICBtYXJnaW46IDA7XFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XFxuICAgIGNvbG9yOiBibGFjaztcXG4gICAgb3ZlcmZsb3cteTogYXV0bztcXG4gICAgb3ZlcmZsb3cteDogYXV0bztcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogNXJlbSAxMHJlbSAxZnI7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigzMiwgOTIsIDkyKTtcXG4gICAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uc2VhcmNoe1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBnYXA6IDFyZW07XFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXG59XFxuXFxuLm92ZXJ2aWV3e1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZ2FwOiAycmVtOyAgXFxufVxcblxcbi5vdmVydmlld0ltYWdle1xcbiAgICB3aWR0aDogOHJlbTtcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbn1cXG5cXG4ub3ZlcnZpZXdJbmZve1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IC41cmVtOyAgXFxufVxcblxcbi5mb3JlY2FzdERheXNXcmFwcGVye1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnI7XFxuICBcXG4gICAgcGFkZGluZzogMnJlbTtcXG4gICAgXFxufVxcblxcbi5jb250ZW50e1xcbiAgICBjb2xvcjogYmxhY2s7XFxufVxcblxcbi5mb3JlY2FzdGRheXN7XFxuICAgIGJvcmRlcjogcmdiKDgxLCAxMCwgMTApIHNvbGlkIDIwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig4MSwgMTAsIDEwKTtcXG4gICAgd2lkdGg6IDEwODBweDtcXG4gICAgbWFyZ2luOiBhdXRvO1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMjAwcHgpO1xcbiAgICBncmlkLWF1dG8tcm93czogMjUwcHg7XFxuICAgIGdhcDogMjBweDtcXG59XFxuXFxuLmRheXtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGdhcDogLjVyZW07XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYW5jaGVkYWxtb25kO1xcbiAgICBcXG59XFxuXFxuLmljb257XFxuICAgIGhlaWdodDogNzVweDtcXG4gICAgd2lkdGg6IGF1dG87XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBnZW5lcmF0ZVNlYXJjaCA9IChmdW5jdGlvbigpe1xuICAgIGNvbnN0IHNlYXJjaCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zZWFyY2gnKTtcblxuICAgIGNvbnN0IHNlYXJjaExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGFiZWwnKTtcbiAgICBzZWFyY2hMYWJlbC5odG1sRm9yID0gJ3NlYXJjaExvY2F0aW9uJztcbiAgICBzZWFyY2hMYWJlbC50ZXh0Q29udGVudCA9ICdFbnRlciBhIGNpdHkgaW50byB0aGUgZmllbGQgYW5kIGdldCB0aGF0IHdlYXRoZXI6JztcbiAgICBzZWFyY2guYXBwZW5kQ2hpbGQoc2VhcmNoTGFiZWwpO1xuICAgIFxuICAgIGNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICBzZWFyY2hJbnB1dC5pZCA9ICdzZWFyY2hMb2NhdGlvbic7XG4gICAgc2VhcmNoSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICBzZWFyY2guYXBwZW5kQ2hpbGQoc2VhcmNoSW5wdXQpO1xuXG4gICAgY29uc3QgZGVncmVlU2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgc2VhcmNoLmFwcGVuZENoaWxkKGRlZ3JlZVNldCk7IFxuXG4gICAgY29uc3QgZmFockNob2ljZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgZmFockNob2ljZS5pZCA9ICdmYWhyJztcbiAgICBmYWhyQ2hvaWNlLnR5cGUgPSAncmFkaW8nO1xuICAgIGZhaHJDaG9pY2UubmFtZSA9ICdkZWdyZWUnO1xuICAgIGZhaHJDaG9pY2UuY2hlY2tlZCA9IHRydWU7XG4gICAgZmFockNob2ljZS52YWx1ZSA9ICfCsEYnO1xuICAgIGRlZ3JlZVNldC5hcHBlbmRDaGlsZChmYWhyQ2hvaWNlKTtcblxuICAgIGNvbnN0IGZhaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsYWJlbCcpO1xuICAgIGZhaHIuaHRtbEZvciA9ICdmYWhyJztcbiAgICBmYWhyLnRleHRDb250ZW50ID0gJ8KwRic7XG4gICAgZGVncmVlU2V0LmFwcGVuZENoaWxkKGZhaHIpO1xuICAgIFxuICAgIGNvbnN0IGNlbHNpdXNDaG9pY2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGNlbHNpdXNDaG9pY2UuaWQgPSAnY2Vsc2l1cyc7XG4gICAgY2Vsc2l1c0Nob2ljZS50eXBlID0gJ3JhZGlvJztcbiAgICBjZWxzaXVzQ2hvaWNlLm5hbWUgPSAnZGVncmVlJztcbiAgICBjZWxzaXVzQ2hvaWNlLnZhbHVlID0gJ8KwQyc7XG4gICAgZGVncmVlU2V0LmFwcGVuZENoaWxkKGNlbHNpdXNDaG9pY2UpO1xuXG4gICAgY29uc3QgY2Vsc2l1cyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG4gICAgY2Vsc2l1cy5odG1sRm9yID0gJ2NlbHNpdXMnO1xuICAgIGNlbHNpdXMudGV4dENvbnRlbnQgPSAnwrBDJztcbiAgICBkZWdyZWVTZXQuYXBwZW5kQ2hpbGQoY2Vsc2l1cyk7XG5cbiAgICBjb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBzZWFyY2hCdXR0b24uY2xhc3NMaXN0LmFkZCgnZ2V0V2VhdGhlcicpO1xuICAgIHNlYXJjaEJ1dHRvbi50ZXh0Q29udGVudCA9ICdHZXQgV2VhdGhlcic7XG4gICAgc2VhcmNoLmFwcGVuZENoaWxkKHNlYXJjaEJ1dHRvbik7XG59KSgpO1xuXG5mdW5jdGlvbiBnZW5lcmF0ZUN1cnJlbnRET00oY3VycmVudEFkZHJlc3MsIGN1cnJlbnRDb25kaXRpb25zLCBjdXJyZW50VGVtcCwgY3VycmVudEljb24pe1xuICAgIGNvbnN0IG92ZXJ2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm92ZXJ2aWV3Jyk7XG4gICAgb3ZlcnZpZXcuaW5uZXJIVE1MID0gJyc7XG5cbiAgICBjb25zdCBvdmVydmlld0ltYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgb3ZlcnZpZXdJbWFnZS5jbGFzc0xpc3QuYWRkKCdvdmVydmlld0ltYWdlJyk7XG4gICAgb3ZlcnZpZXdJbWFnZS5zcmMgPSBjdXJyZW50SWNvbjtcbiAgICBvdmVydmlldy5hcHBlbmRDaGlsZChvdmVydmlld0ltYWdlKTtcbiAgICBcbiAgICBjb25zdCBvdmVydmlld0luZm8gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdmVydmlld0luZm8uY2xhc3NMaXN0LmFkZCgnb3ZlcnZpZXdJbmZvJyk7XG4gICAgb3ZlcnZpZXcuYXBwZW5kQ2hpbGQob3ZlcnZpZXdJbmZvKTtcblxuICAgIGNvbnN0IG92ZXJ2aWV3VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBvdmVydmlld1RpdGxlLnRleHRDb250ZW50ID0gJ0N1cnJlbnQgT3ZlcnZpZXc6JztcbiAgICBvdmVydmlld0luZm8uYXBwZW5kQ2hpbGQob3ZlcnZpZXdUaXRsZSk7XG5cbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9IGN1cnJlbnRBZGRyZXNzO1xuICAgIG92ZXJ2aWV3SW5mby5hcHBlbmRDaGlsZChhZGRyZXNzKTtcblxuICAgIGNvbnN0IGNvbmRpdGlvbnMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjb25kaXRpb25zLnRleHRDb250ZW50ID0gY3VycmVudENvbmRpdGlvbnM7XG4gICAgb3ZlcnZpZXdJbmZvLmFwcGVuZENoaWxkKGNvbmRpdGlvbnMpO1xuICAgIFxuICAgIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB0ZW1wLnRleHRDb250ZW50ID0gY3VycmVudFRlbXA7XG4gICAgb3ZlcnZpZXdJbmZvLmFwcGVuZENoaWxkKHRlbXApO1xufVxuXG5mdW5jdGlvbiBnZW5lcmF0ZTE1RGF5RE9NKGZvcmVjYXN0QXJyYXkpe1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY29udGVudCcpO1xuICAgIGNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgY29uc3QgZm9yZWNhc3RkYXlzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9yZWNhc3RkYXlzLmNsYXNzTGlzdC5hZGQoJ2ZvcmVjYXN0ZGF5cycpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoZm9yZWNhc3RkYXlzKTtcblxuICAgIGZvcmVjYXN0QXJyYXkuZm9yRWFjaChmb3JlY2FzdERheSA9PiB7XG4gICAgICAgIGNvbnN0IGRheSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkYXkuY2xhc3NMaXN0LmFkZCgnZGF5Jyk7XG4gICAgICAgIGZvcmVjYXN0ZGF5cy5hcHBlbmRDaGlsZChkYXkpO1xuXG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZGF0ZS50ZXh0Q29udGVudCA9IGZvcmVjYXN0RGF5LmRhdGV0aW1lLnNsaWNlKDUpO1xuICAgICAgICBkYXkuYXBwZW5kQ2hpbGQoZGF0ZSk7XG5cbiAgICAgICAgY29uc3QgaWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICBpY29uLmNsYXNzTGlzdC5hZGQoJ2ljb24nKTtcbiAgICAgICAgaWNvbi5zcmMgPSBmb3JlY2FzdERheS5pY29uO1xuICAgICAgICBkYXkuYXBwZW5kQ2hpbGQoaWNvbik7XG5cbiAgICAgICAgY29uc3QgY29uZGl0aW9ucyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBjb25kaXRpb25zLnRleHRDb250ZW50ID0gZm9yZWNhc3REYXkuY29uZGl0aW9ucztcbiAgICAgICAgZGF5LmFwcGVuZENoaWxkKGNvbmRpdGlvbnMpO1xuXG4gICAgICAgIC8vdGVtcFxuICAgICAgICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRlbXAudGV4dENvbnRlbnQgPSBmb3JlY2FzdERheS50ZW1wO1xuICAgICAgICBkYXkuYXBwZW5kQ2hpbGQodGVtcCk7XG5cbiAgICAgICAgLy9taW4gYW5kIG1heCB0ZW1wXG4gICAgICAgIGNvbnN0IG1pbm1heCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBtaW5tYXgudGV4dENvbnRlbnQgPSAnTWluOiAnICsgZm9yZWNhc3REYXkudGVtcG1pbiArICcsICAgTWF4OiAnICsgZm9yZWNhc3REYXkudGVtcG1heDtcbiAgICAgICAgZGF5LmFwcGVuZENoaWxkKG1pbm1heCk7XG5cbiAgICAgICAgLy9odW1pZGl0eVxuICAgICAgICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBodW1pZGl0eS50ZXh0Q29udGVudCA9ICdIdW1pZGl0eTogJyArIGZvcmVjYXN0RGF5Lmh1bWlkaXR5O1xuICAgICAgICBkYXkuYXBwZW5kQ2hpbGQoaHVtaWRpdHkpO1xuICAgIH0pO1xufVxuXG4vL01ha2UgMTUgZGF5IEZvcmNhc3QgTm93OlxuXG5cbmV4cG9ydCB7IGdlbmVyYXRlQ3VycmVudERPTSwgZ2VuZXJhdGUxNURheURPTSB9IiwiaW1wb3J0IHNub3cgZnJvbSAnLi9pY29ucy9zbm93LnN2Zyc7XG5pbXBvcnQgcmFpbiBmcm9tICcuL2ljb25zL3JhaW4uc3ZnJztcbmltcG9ydCBmb2cgZnJvbSAnLi9pY29ucy9mb2cuc3ZnJztcbmltcG9ydCB3aW5kIGZyb20gJy4vaWNvbnMvd2luZC5zdmcnO1xuaW1wb3J0IGNsb3VkeSBmcm9tICcuL2ljb25zL2Nsb3VkeS5zdmcnO1xuaW1wb3J0IHBhcnRseUNsb3VkeURheSBmcm9tICcuL2ljb25zL3BhcnRseS1jbG91ZHktZGF5LnN2Zyc7XG5pbXBvcnQgcGFydGx5Q2xvdWR5TmlnaHQgZnJvbSAnLi9pY29ucy9wYXJ0bHktY2xvdWR5LW5pZ2h0LnN2Zyc7XG5pbXBvcnQgY2xlYXJEYXkgZnJvbSAnLi9pY29ucy9jbGVhci1kYXkuc3ZnJztcbmltcG9ydCBjbGVhck5pZ2h0IGZyb20gJy4vaWNvbnMvY2xlYXItbmlnaHQuc3ZnJztcblxuY29uc3Qgd2VhdGhlciA9IChmdW5jdGlvbigpe1xuXG4gICAgbGV0IGN1cnJlbnRQYXJzZSA9ICcnO1xuICAgIGxldCBhZGRyZXNzID0gJyc7XG4gICAgbGV0IGN1cnJlbnRDb25kaXRpb24gPSAnJztcbiAgICBsZXQgY3VycmVudFRlbXAgPSAnJztcbiAgICBsZXQgY3VycmVudEljb24gPSAnJztcbiAgICBsZXQgZmlmdGVlbkRheXMgPSAnJztcbiAgICBcbiAgICBcbiAgICBjb25zdCBnZW5lcmF0ZUN1cnJlbnRQYXJzZSA9IGFzeW5jIGZ1bmN0aW9uKGxvY2F0aW9uLCBkZWdyZWUpe1xuICAgICAgICBjb25zdCByYXcgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvJyArIGxvY2F0aW9uICsgJz9rZXk9TEs0S1Y5OEFaNlJOTVlQNFJMRFNTU1VXUScsIHttb2RlOiAnY29ycyd9KVxuICAgICAgICBjdXJyZW50UGFyc2UgPSBhd2FpdCByYXcuanNvbigpO1xuICAgICAgICAvL2FsbG9jYXRlIGRhdGE6XG4gICAgICAgIGFkZHJlc3MgPSBjdXJyZW50UGFyc2UucmVzb2x2ZWRBZGRyZXNzO1xuICAgICAgICBjdXJyZW50Q29uZGl0aW9uID0gY3VycmVudFBhcnNlLmN1cnJlbnRDb25kaXRpb25zLmNvbmRpdGlvbnM7XG4gICAgICAgIGlmKGRlZ3JlZSA9PT0gJ8KwRicpe2N1cnJlbnRUZW1wID0gY3VycmVudFBhcnNlLmN1cnJlbnRDb25kaXRpb25zLnRlbXAgKyAnwrBGJzt9XG4gICAgICAgIGlmKGRlZ3JlZSA9PT0gJ8KwQycpe2N1cnJlbnRUZW1wID0gTWF0aC5yb3VuZCgoY3VycmVudFBhcnNlLmN1cnJlbnRDb25kaXRpb25zLnRlbXAgLSAzMikgKiA1LzkgKiAxMCkvMTAgKyAnwrBDJzt9XG4gICAgICAgIGN1cnJlbnRJY29uID0gY29udmVydEljb24oY3VycmVudFBhcnNlLmN1cnJlbnRDb25kaXRpb25zLmljb24pO1xuICAgICAgICBmaWZ0ZWVuRGF5cyA9IGN1cnJlbnRQYXJzZS5kYXlzOyBcbiAgICAgICAgLy90cmFuc2xhdGUgMTUtZGF5IGljb25zOlxuICAgICAgICBmaWZ0ZWVuRGF5cy5mb3JFYWNoKGRheSA9PiB7XG4gICAgICAgICAgICBkYXkuaWNvbiA9IGNvbnZlcnRJY29uKGRheS5pY29uKTtcbiAgICAgICAgfSlcbiAgICAgICAgLy9hZGQgZGVncmVlIGFuZCBjb252ZXJ0IGlmIG5lZWRlZDpcbiAgICAgICAgaWYoZGVncmVlID09PSAnwrBGJyl7XG4gICAgICAgICAgICBmaWZ0ZWVuRGF5cy5mb3JFYWNoKGRheSA9PiB7XG4gICAgICAgICAgICAgICAgZGF5LnRlbXAgPSBkYXkudGVtcCArICfCsEYnO1xuICAgICAgICAgICAgICAgIGRheS50ZW1wbWluID0gZGF5LnRlbXBtaW4gKyAnwrBGJztcbiAgICAgICAgICAgICAgICBkYXkudGVtcG1heCA9IGRheS50ZW1wbWF4ICsgJ8KwRic7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICAgIGlmKGRlZ3JlZSA9PT0gJ8KwQycpe1xuICAgICAgICAgICAgZmlmdGVlbkRheXMuZm9yRWFjaChkYXkgPT4ge1xuICAgICAgICAgICAgICAgIGRheS50ZW1wID0gTWF0aC5yb3VuZCgoZGF5LnRlbXAgLSAzMikgKiA1LzkgKiAxMCkvMTAgKyAnwrBDJztcbiAgICAgICAgICAgICAgICBkYXkudGVtcG1pbiA9IE1hdGgucm91bmQoKGRheS50ZW1wbWluIC0gMzIpICogNS85ICogMTApLzEwICsgJ8KwQyc7XG4gICAgICAgICAgICAgICAgZGF5LnRlbXBtYXggPSBNYXRoLnJvdW5kKChkYXkudGVtcG1heCAtIDMyKSAqIDUvOSAqIDEwKS8xMCArICfCsEMnO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBjb252ZXJ0SWNvbiA9IChpY29uKSA9PiB7XG4gICAgICAgIHN3aXRjaChpY29uKXtcbiAgICAgICAgICAgIGNhc2UgJ3Nub3cnOlxuICAgICAgICAgICAgICAgIHJldHVybiBzbm93O1xuICAgICAgICAgICAgY2FzZSAncmFpbic6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJhaW47XG4gICAgICAgICAgICBjYXNlICdmb2cnOlxuICAgICAgICAgICAgICAgIHJldHVybiBmb2c7XG4gICAgICAgICAgICBjYXNlICd3aW5kJzpcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZDtcbiAgICAgICAgICAgIGNhc2UgJ2Nsb3VkeSc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsb3VkeTtcbiAgICAgICAgICAgIGNhc2UgJ3BhcnRseS1jbG91ZHktZGF5JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gcGFydGx5Q2xvdWR5RGF5O1xuICAgICAgICAgICAgY2FzZSAncGFydGx5LWNsb3VkeS1uaWdodCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnRseUNsb3VkeU5pZ2h0O1xuICAgICAgICAgICAgY2FzZSAnY2xlYXItZGF5JzpcbiAgICAgICAgICAgICAgICByZXR1cm4gY2xlYXJEYXk7XG4gICAgICAgICAgICBjYXNlICdjbGVhci1uaWdodCc6XG4gICAgICAgICAgICAgICAgcmV0dXJuIGNsZWFyTmlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCBzaG93Q3VycmVudFBhcmNlID0gZnVuY3Rpb24oKXtcbiAgICAgICAgY29uc29sZS5sb2coY3VycmVudFBhcnNlKTtcbiAgICB9XG4gICAgXG4gICAgY29uc3QgZ2V0YWRkcmVzcyA9ICgpID0+IHtyZXR1cm4gYWRkcmVzc307XG4gICAgY29uc3QgZ2V0Y3VycmVudENvbmRpdGlvbiA9ICgpID0+IHtyZXR1cm4gY3VycmVudENvbmRpdGlvbn07XG4gICAgY29uc3QgZ2V0Y3VycmVudFRlbXAgPSAoKSA9PiB7cmV0dXJuIGN1cnJlbnRUZW1wfTtcbiAgICBjb25zdCBnZXRDdXJyZW50SWNvbiA9ICgpID0+IHtyZXR1cm4gY3VycmVudEljb259O1xuICAgIGNvbnN0IGdldEZpZnRlZW5EYXlzID0gKCkgPT4ge3JldHVybiBmaWZ0ZWVuRGF5c307XG4gICAgXG4gICAgcmV0dXJuIHtnZW5lcmF0ZUN1cnJlbnRQYXJzZSwgc2hvd0N1cnJlbnRQYXJjZSwgZ2V0YWRkcmVzcywgZ2V0Y3VycmVudENvbmRpdGlvbiwgZ2V0Y3VycmVudFRlbXAsIGdldEN1cnJlbnRJY29uLCBnZXRGaWZ0ZWVuRGF5c31cbiAgICB9KSgpO1xuXG4gICAgZXhwb3J0IHsgd2VhdGhlciB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCAnLi9zdHlsZS5jc3MnO1xuaW1wb3J0IHsgZ2VuZXJhdGVDdXJyZW50RE9NLCBnZW5lcmF0ZTE1RGF5RE9NIH0gZnJvbSAnLi9ET01nZW5lcmF0aW9uLmpzJztcbmltcG9ydCB7IHdlYXRoZXIgfSBmcm9tICcuL3dlYXRoZXJEYXRhJztcblxuXG5jb25zdCBidXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2V0V2VhdGhlcicpO1xuY29uc3Qgc2VhcmNoTG9jYXRpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoTG9jYXRpb24nKTtcbmxldCBzZWFyY2hMb2NhdGlvbkZvY3VzID0gZmFsc2U7XG5cblxuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNvbnN0IGRlZ3JlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJkZWdyZWVcIl06Y2hlY2tlZCcpXG4gICAgd2VhdGhlci5nZW5lcmF0ZUN1cnJlbnRQYXJzZShzZWFyY2hMb2NhdGlvbi52YWx1ZSwgZGVncmVlLnZhbHVlKVxuICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgZ2VuZXJhdGVDdXJyZW50RE9NKHdlYXRoZXIuZ2V0YWRkcmVzcygpLCB3ZWF0aGVyLmdldGN1cnJlbnRDb25kaXRpb24oKSwgd2VhdGhlci5nZXRjdXJyZW50VGVtcCgpLCB3ZWF0aGVyLmdldEN1cnJlbnRJY29uKCkpO1xuICAgICAgICBnZW5lcmF0ZTE1RGF5RE9NKHdlYXRoZXIuZ2V0RmlmdGVlbkRheXMoKSk7XG59KTtcbn0pXG5cbi8vQWxsb3cgRW50ZXIga2V5IGZ1bmN0aW9uYWxpdHlcbnNlYXJjaExvY2F0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgKCkgPT4ge1xuICAgIHNlYXJjaExvY2F0aW9uRm9jdXMgPSB0cnVlO1xufSlcblxuc2VhcmNoTG9jYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICBzZWFyY2hMb2NhdGlvbkZvY3VzID0gZmFsc2U7XG59KVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIChlKSA9PiB7XG4gICAgaWYoZS5rZXkgPT09ICdFbnRlcicgJiYgc2VhcmNoTG9jYXRpb25Gb2N1cyA9PT0gdHJ1ZSl7XG4gICAgICAgIGNvbnN0IGRlZ3JlZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJkZWdyZWVcIl06Y2hlY2tlZCcpXG4gICAgICAgIHdlYXRoZXIuZ2VuZXJhdGVDdXJyZW50UGFyc2Uoc2VhcmNoTG9jYXRpb24udmFsdWUsIGRlZ3JlZS52YWx1ZSlcbiAgICAgICAgLnRoZW4oKCkgPT4ge1xuICAgICAgICBnZW5lcmF0ZUN1cnJlbnRET00od2VhdGhlci5nZXRhZGRyZXNzKCksIHdlYXRoZXIuZ2V0Y3VycmVudENvbmRpdGlvbigpLCB3ZWF0aGVyLmdldGN1cnJlbnRUZW1wKCksIHdlYXRoZXIuZ2V0Q3VycmVudEljb24oKSk7XG4gICAgICAgIGdlbmVyYXRlMTVEYXlET00od2VhdGhlci5nZXRGaWZ0ZWVuRGF5cygpKTtcbiAgICAgICAgY29uc29sZS5sb2cod2VhdGhlci5nZXRGaWZ0ZWVuRGF5cygpKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgXG59KVxuXG5cblxuLypsaXN0IG9mIGNvbmRpdGlvbnMgdG8gaGF2ZSBhbiBpbWFnZSBmb3I6XG5zbm93XHQgICAgICAgICAgICAgICAgICAgIEFtb3VudCBvZiBzbm93IGlzIGdyZWF0ZXIgdGhhbiB6ZXJvXG5yYWluXHQgICAgICAgICAgICAgICAgICAgIEFtb3VudCBvZiByYWluZmFsbCBpcyBncmVhdGVyIHRoYW4gemVyb1xuZm9nXHQgICAgICAgICAgICAgICAgICAgICAgICBWaXNpYmlsaXR5IGlzIGxvdyAobG93ZXIgdGhhbiBvbmUga2lsb21ldGVyIG9yIG1pbGUpXG53aW5kXHQgICAgICAgICAgICAgICAgICAgIFdpbmQgc3BlZWQgaXMgaGlnaCAoZ3JlYXRlciB0aGFuIDMwIGtwaCBvciBtcGgpXG5jbG91ZHlcdCAgICAgICAgICAgICAgICAgICAgQ2xvdWQgY292ZXIgaXMgZ3JlYXRlciB0aGFuIDkwJSBjb3ZlclxucGFydGx5LWNsb3VkeS1kYXlcdCAgICAgICAgQ2xvdWQgY292ZXIgaXMgZ3JlYXRlciB0aGFuIDIwJSBjb3ZlciBkdXJpbmcgZGF5IHRpbWUuXG5wYXJ0bHktY2xvdWR5LW5pZ2h0XHQgICAgICAgIENsb3VkIGNvdmVyIGlzIGdyZWF0ZXIgdGhhbiAyMCUgY292ZXIgZHVyaW5nIG5pZ2h0IHRpbWUuXG5jbGVhci1kYXlcdCAgICAgICAgICAgICAgICBDbG91ZCBjb3ZlciBpcyBsZXNzIHRoYW4gMjAlIGNvdmVyIGR1cmluZyBkYXkgdGltZVxuY2xlYXItbmlnaHRcdCAgICAgICAgICAgICAgICBDbG91ZCBjb3ZlciBpcyBsZXNzIHRoYW4gMjAlIGNvdmVyIGR1cmluZyBuaWdodCB0aW1lXG4qL1xuXG5cblxuXG5cblxuLy9odHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZS9bbG9jYXRpb25dL1tkYXRlMV0vW2RhdGUyXT9rZXk9WU9VUl9BUElfS0VZICJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==