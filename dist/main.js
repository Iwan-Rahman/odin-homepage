"use strict";
(self["webpackChunktemplate"] = self["webpackChunktemplate"] || []).push([["main"],{

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
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Import Roboto */

/* Import Playfair Display */

:root {
  --bg-color: #0891B2;
}

*{
  margin: 0;
  padding: 0;

}

body {
  font-family: Roboto,serif;
  display: flex;
  flex-direction: column;
}

h1, h2, h3{
  font-family: Playfair Display,serif;
  font-weight: 400;
}

h2 {
  text-align: center;
  font-size: 2rem;
  margin: 1rem 0rem;
}
main, .about {
  padding: 2vh 5vw;
}

/* Header */

header {
  padding: 5vw 5vw;
  background: linear-gradient(150deg, var(--bg-color) 55%, white 55%);
}

header img {
  width: 100%;
  height: auto;
}

header  div {
  position: relative;
  transform: translate(-1rem,-1rem);
}

header section {
  margin-top: 5rem;
  background-color: white;
  box-shadow: 3px 3px 10px rgba(128, 128, 128, 0.5);
  padding: 2rem 1rem;
}

h1 {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%,-100%);
  color: white;
  min-width: min-content;
  text-shadow: 1px 2px 5px rgb(100,100,100);
  font-size: 14vw;
  letter-spacing: 0.2rem;
}

/* About Me */
.about > p, header section p{
  color: #565656;
}

.about div:last-of-type{
  width: max-content;
  margin: 1rem auto;
}

.about a > img, footer a > img {
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 1rem;
}

/* My Work */
.project-img img {
  display: none;
}

.work article h3 {
  display: inline-block;
  font-size: 1rem;
  font-weight: 500;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
}

article p {
  font-size: 0.8rem;
}

.project-link {
  float: right;
}

.project-link img {
  width: 1rem;
  height: 1rem;
  margin: 0px 0.1rem;
}

.work > div{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190.8px, 1fr));
  gap: 2rem;
}

.project-content {
  padding: 0.5rem 0.5rem 1rem 0.5rem;
  box-shadow: 3px 3px 10px rgba(128, 128, 128, 0.5);
}
.project-img {
  height: 150px;
  position: relative;
}

.project-img span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-60%,-60%);
  color: white;
  font-size: 1.5rem;
  letter-spacing: 0.1rem;
  font-family: Playfair Display;
  font-weight: 500;
}

/* Footer */
footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  background-color: var(--bg-color);
  color: white;
  margin-top: 4rem;
  gap: 2rem;
  align-items: start;
}

.contact > address > div {
  margin: 2rem 0rem;
}

.contact {
  margin-left: 5vw;
}

footer > section > p {
  font-size: 1.2rem;
  max-width: 80vw;
}


footer img{
  width: 100%;
  height: auto;
  object-fit: cover;
  object-position: 50% 30%;
}


.contact address div:nth-child(2) img {
  display: none;
  width: 1rem;
  height: 1rem;
}
 
address > div:last-child {
  width: max-content;
  margin: 1rem auto;
}


@media screen and (min-width: 480px) {
  /* Header */
  header img {
    width: 40vw;
    height: 60vw;
    object-fit: cover;
    float: left;
  }

  header h1{
    top: 0%;
    font-size: 2.2rem;
    width: max-content;
    letter-spacing: 0;
    transform: translate(-13%,0%);
  }

  .about {
    display: none;
  }

  /* Footer */
  footer h2 {
    text-align: start;
  }
  
  .contact {
    width: 50vw;
    padding: 2rem 0rem;
    box-sizing: border-box;
  }

  footer img {
    width: 30vw;
    height: auto;
    margin: 2rem 0;
    margin: auto 0;
  }

  .contact address div:nth-child(2) img {
    visibility: visible;
  }
}

@media screen and (min-width: 72px) {
  /* Footer */
  .contact {
    max-width: 50vw;
  }

  footer img {
    
  }

}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,kBAAkB;;AAGlB,4BAA4B;;AAG5B;EACE,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,UAAU;;AAEZ;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,mCAAmC;EACnC,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,gBAAgB;AAClB;;AAEA,WAAW;;AAEX;EACE,gBAAgB;EAChB,mEAAmE;AACrE;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,iCAAiC;AACnC;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,iDAAiD;EACjD,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,SAAS;EACT,gCAAgC;EAChC,YAAY;EACZ,sBAAsB;EACtB,yCAAyC;EACzC,eAAe;EACf,sBAAsB;AACxB;;AAEA,aAAa;AACb;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,cAAc;AAChB;;AAEA,YAAY;AACZ;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,8DAA8D;EAC9D,SAAS;AACX;;AAEA;EACE,kCAAkC;EAClC,iDAAiD;AACnD;AACA;EACE,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,+BAA+B;EAC/B,YAAY;EACZ,iBAAiB;EACjB,sBAAsB;EACtB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA,WAAW;AACX;EACE,aAAa;EACb,eAAe;EACf,6BAA6B;EAC7B,iCAAiC;EACjC,YAAY;EACZ,gBAAgB;EAChB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;;AAGA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,wBAAwB;AAC1B;;;AAGA;EACE,aAAa;EACb,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;;AAGA;EACE,WAAW;EACX;IACE,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,WAAW;EACb;;EAEA;IACE,OAAO;IACP,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,6BAA6B;EAC/B;;EAEA;IACE,aAAa;EACf;;EAEA,WAAW;EACX;IACE,iBAAiB;EACnB;;EAEA;IACE,WAAW;IACX,kBAAkB;IAClB,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,cAAc;IACd,cAAc;EAChB;;EAEA;IACE,mBAAmB;EACrB;AACF;;AAEA;EACE,WAAW;EACX;IACE,eAAe;EACjB;;EAEA;;EAEA;;AAEF","sourcesContent":["/* Import Roboto */\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\n\r\n/* Import Playfair Display */\r\n@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');\r\n\r\n:root {\r\n  --bg-color: #0891B2;\r\n}\r\n\r\n*{\r\n  margin: 0;\r\n  padding: 0;\r\n\r\n}\r\n\r\nbody {\r\n  font-family: Roboto,serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nh1, h2, h3{\r\n  font-family: Playfair Display,serif;\r\n  font-weight: 400;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  margin: 1rem 0rem;\r\n}\r\nmain, .about {\r\n  padding: 2vh 5vw;\r\n}\r\n\r\n/* Header */\r\n\r\nheader {\r\n  padding: 5vw 5vw;\r\n  background: linear-gradient(150deg, var(--bg-color) 55%, white 55%);\r\n}\r\n\r\nheader img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\nheader  div {\r\n  position: relative;\r\n  transform: translate(-1rem,-1rem);\r\n}\r\n\r\nheader section {\r\n  margin-top: 5rem;\r\n  background-color: white;\r\n  box-shadow: 3px 3px 10px rgba(128, 128, 128, 0.5);\r\n  padding: 2rem 1rem;\r\n}\r\n\r\nh1 {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 50%;\r\n  transform: translate(-50%,-100%);\r\n  color: white;\r\n  min-width: min-content;\r\n  text-shadow: 1px 2px 5px rgb(100,100,100);\r\n  font-size: 14vw;\r\n  letter-spacing: 0.2rem;\r\n}\r\n\r\n/* About Me */\r\n.about > p, header section p{\r\n  color: #565656;\r\n}\r\n\r\n.about div:last-of-type{\r\n  width: max-content;\r\n  margin: 1rem auto;\r\n}\r\n\r\n.about a > img, footer a > img {\r\n  width: 2.5rem;\r\n  height: 2.5rem;\r\n  margin: 0 1rem;\r\n}\r\n\r\n/* My Work */\r\n.project-img img {\r\n  display: none;\r\n}\r\n\r\n.work article h3 {\r\n  display: inline-block;\r\n  font-size: 1rem;\r\n  font-weight: 500;\r\n  margin-left: 1rem;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\narticle p {\r\n  font-size: 0.8rem;\r\n}\r\n\r\n.project-link {\r\n  float: right;\r\n}\r\n\r\n.project-link img {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  margin: 0px 0.1rem;\r\n}\r\n\r\n.work > div{\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(190.8px, 1fr));\r\n  gap: 2rem;\r\n}\r\n\r\n.project-content {\r\n  padding: 0.5rem 0.5rem 1rem 0.5rem;\r\n  box-shadow: 3px 3px 10px rgba(128, 128, 128, 0.5);\r\n}\r\n.project-img {\r\n  height: 150px;\r\n  position: relative;\r\n}\r\n\r\n.project-img span {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-60%,-60%);\r\n  color: white;\r\n  font-size: 1.5rem;\r\n  letter-spacing: 0.1rem;\r\n  font-family: Playfair Display;\r\n  font-weight: 500;\r\n}\r\n\r\n/* Footer */\r\nfooter {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-evenly;\r\n  background-color: var(--bg-color);\r\n  color: white;\r\n  margin-top: 4rem;\r\n  gap: 2rem;\r\n  align-items: start;\r\n}\r\n\r\n.contact > address > div {\r\n  margin: 2rem 0rem;\r\n}\r\n\r\n.contact {\r\n  margin-left: 5vw;\r\n}\r\n\r\nfooter > section > p {\r\n  font-size: 1.2rem;\r\n  max-width: 80vw;\r\n}\r\n\r\n\r\nfooter img{\r\n  width: 100%;\r\n  height: auto;\r\n  object-fit: cover;\r\n  object-position: 50% 30%;\r\n}\r\n\r\n\r\n.contact address div:nth-child(2) img {\r\n  display: none;\r\n  width: 1rem;\r\n  height: 1rem;\r\n}\r\n \r\naddress > div:last-child {\r\n  width: max-content;\r\n  margin: 1rem auto;\r\n}\r\n\r\n\r\n@media screen and (min-width: 480px) {\r\n  /* Header */\r\n  header img {\r\n    width: 40vw;\r\n    height: 60vw;\r\n    object-fit: cover;\r\n    float: left;\r\n  }\r\n\r\n  header h1{\r\n    top: 0%;\r\n    font-size: 2.2rem;\r\n    width: max-content;\r\n    letter-spacing: 0;\r\n    transform: translate(-13%,0%);\r\n  }\r\n\r\n  .about {\r\n    display: none;\r\n  }\r\n\r\n  /* Footer */\r\n  footer h2 {\r\n    text-align: start;\r\n  }\r\n  \r\n  .contact {\r\n    width: 50vw;\r\n    padding: 2rem 0rem;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  footer img {\r\n    width: 30vw;\r\n    height: auto;\r\n    margin: 2rem 0;\r\n    margin: auto 0;\r\n  }\r\n\r\n  .contact address div:nth-child(2) img {\r\n    visibility: visible;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 72px) {\r\n  /* Footer */\r\n  .contact {\r\n    max-width: 50vw;\r\n  }\r\n\r\n  footer img {\r\n    \r\n  }\r\n\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/index.html":
/*!************************!*\
  !*** ./src/index.html ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/html-loader/dist/runtime/getUrl.js */ "./node_modules/html-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___HTML_LOADER_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./style.css */ "./src/style.css?1315"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./img/pexels-shvetsa-sml.jpg */ "./src/img/pexels-shvetsa-sml.jpg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./img/open-in-new.svg */ "./src/img/open-in-new.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ./img/phone.svg */ "./src/img/phone.svg"), __webpack_require__.b);
var ___HTML_LOADER_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ./img/email.svg */ "./src/img/email.svg"), __webpack_require__.b);
// Module
var ___HTML_LOADER_REPLACEMENT_0___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_0___);
var ___HTML_LOADER_REPLACEMENT_1___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_1___);
var ___HTML_LOADER_REPLACEMENT_2___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_2___);
var ___HTML_LOADER_REPLACEMENT_3___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_3___);
var ___HTML_LOADER_REPLACEMENT_4___ = _node_modules_html_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_0___default()(___HTML_LOADER_IMPORT_4___);
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n  <title>Homepage</title>\r\n</head>\r\n<body>\r\n  <header>\r\n    <div>\r\n      <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"test\">\r\n      <h1>Ashley Williams</h1>\r\n    </div>\r\n    <section>\r\n      <h2>About Me</h2>\r\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolore necessitatibus laudantium asperiores\r\n        aliquid ullam doloremque itaque dicta suscipit eius obcaecati ex atque, saepe aliquam soluta in ad voluptatem\r\n        possimus, officia quas quos. Aliquid ut nihil rerum beatae harum quod modi sed? Magni non expedita quam nostrum nam\r\n        assumenda ipsa!</p>\r\n    </section>\r\n  </header>\r\n  <main>\r\n    <section class=\"about\">\r\n      <h2>About Me</h2>\r\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolore necessitatibus laudantium asperiores\r\n        aliquid ullam doloremque itaque dicta suscipit eius obcaecati ex atque, saepe aliquam soluta in ad voluptatem\r\n        possimus, officia quas quos. Aliquid ut nihil rerum beatae harum quod modi sed? Magni non expedita quam nostrum nam\r\n        assumenda ipsa!</p>\r\n        <div>\r\n          <a href=\"\"><img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\" /></a>\r\n          <a href=\"\"><img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg\" /></a>\r\n          <a href=\"\"><img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg\" /></a>\r\n        </div>\r\n    </section>\r\n    <section class=\"work\">\r\n      <h2>My Work</h2>\r\n      <div>\r\n        <article>\r\n          <div class=\"project-img\" style=\"background-color:tomato;\"><span>screenshot of project</span><img  alt=\"Screenshot of a project\"></div>\r\n          <div class=\"project-content\">\r\n            <h3>Project Name</h3>\r\n            <div class=\"project-link\">\r\n              <a href=\"\"><img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\" /></a>\r\n              <a href=\"\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"open in new tab\"></a>\r\n            </div>\r\n            <p>Short description of the project. Just a couple of sentences will do</p>\r\n          </div>\r\n        </article>\r\n        <article>\r\n          <div class=\"project-img\" style=\"background-color:mediumpurple;\"><span>screenshot of project</span><img alt=\"Screenshot of a project\"></div>\r\n          <div class=\"project-content\">\r\n            <h3>Project Name</h3>\r\n            <div class=\"project-link\">\r\n              <a href=\"\"><img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\" /></a>\r\n              <a href=\"\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"open in new tab\"></a>\r\n            </div>\r\n            <p>Short description of the project. Just a couple of sentences will do</p>\r\n          </div>\r\n        </article>\r\n        <article>\r\n          <div class=\"project-img\" style=\"background-color:orange;\"><span>screenshot of project</span><img alt=\"Screenshot of a project\"></div>\r\n          <div class=\"project-content\">\r\n            <h3>Project Name</h3>\r\n            <div class=\"project-link\">\r\n              <a href=\"\"><img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\" /></a>\r\n              <a href=\"\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"open in new tab\"></a>\r\n            </div>\r\n            <p>Short description of the project. Just a couple of sentences will do</p>\r\n          </div>\r\n        </article>\r\n        <article>\r\n          <div class=\"project-img\" style=\"background-color:palevioletred;\"><span>screenshot of project</span><img alt=\"Screenshot of a project\"></div>\r\n          <div class=\"project-content\">\r\n            <h3>Project Name</h3>\r\n            <div class=\"project-link\">\r\n              <a href=\"\"><img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\" /></a>\r\n              <a href=\"\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"open in new tab\"></a>\r\n            </div>\r\n            <p>Short description of the project. Just a couple of sentences will do</p>\r\n          </div>\r\n        </article>\r\n        <article>\r\n          <div class=\"project-img\" style=\"background-color:cornflowerblue;\"><span>screenshot of project</span><img alt=\"Screenshot of a project\"></div>\r\n          <div class=\"project-content\">\r\n            <h3>Project Name</h3>\r\n            <div class=\"project-link\">\r\n              <a href=\"\"><img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\" /></a>\r\n              <a href=\"\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"open in new tab\"></a>\r\n            </div>\r\n            <p>Short description of the project. Just a couple of sentences will do</p>\r\n          </div>\r\n        </article>\r\n        <article>\r\n          <div class=\"project-img\" style=\"background-color:seagreen;\"><span>screenshot of project</span><img alt=\"Screenshot of a project\"></div>\r\n          <div class=\"project-content\">\r\n            <h3>Project Name</h3>\r\n            <div class=\"project-link\">\r\n              <a href=\"\"><img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\" /></a>\r\n              <a href=\"\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"open in new tab\"></a>\r\n            </div>\r\n            <p>Short description of the project. Just a couple of sentences will do</p>\r\n          </div>\r\n        </article>\r\n      </div>\r\n    </section>\r\n  </main>\r\n  <footer>\r\n    <section class=\"contact\">\r\n      <h2>Contact Me</h2>\r\n      <p>Please get in touch if you think our work could be mutually beneficial!</p>\r\n      <address>\r\n        <div>\r\n          1234 Random Road <br>\r\n          Random Town, California 12345\r\n        </div>\r\n        <div>\r\n          <div><img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\">555-555-555</div>\r\n          <div><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\"><a src=\"mailto:ashleywilliams.is.not.real@gmail.com\">ashleywilliams.is.not.real@gmail.com</a></div>\r\n        </div>\r\n        <div>\r\n          <a href=\"\"><img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\" /></a>\r\n          <a href=\"\"><img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg\" /></a>\r\n          <a href=\"\"><img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg\" /></a>\r\n        </div>\r\n      </address>\r\n    </section>\r\n    <img class=\"footer-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">\r\n  </footer>\r\n</body>\r\n</html>";
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (code);

/***/ }),

/***/ "./node_modules/html-loader/dist/runtime/getUrl.js":
/*!*********************************************************!*\
  !*** ./node_modules/html-loader/dist/runtime/getUrl.js ***!
  \*********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  }
  if (!url) {
    return url;
  }

  // eslint-disable-next-line no-underscore-dangle, no-param-reassign
  url = String(url.__esModule ? url.default : url);
  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  }
  if (options.maybeNeedQuotes && /[\t\n\f\r "'=<>`]/.test(url)) {
    return "\"".concat(url, "\"");
  }
  return url;
};

/***/ }),

/***/ "./src/style.css?7163":
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.html */ "./src/index.html");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./src/style.css?7163");



/***/ }),

/***/ "./src/style.css?1315":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "57011448dc08b9372b5e.css";

/***/ }),

/***/ "./src/img/email.svg":
/*!***************************!*\
  !*** ./src/img/email.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c7a364af28c1fc7cbb30.svg";

/***/ }),

/***/ "./src/img/open-in-new.svg":
/*!*********************************!*\
  !*** ./src/img/open-in-new.svg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ede19ed228086e87d89.svg";

/***/ }),

/***/ "./src/img/pexels-shvetsa-sml.jpg":
/*!****************************************!*\
  !*** ./src/img/pexels-shvetsa-sml.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6289c5ebc4eb73d03b27.jpg";

/***/ }),

/***/ "./src/img/phone.svg":
/*!***************************!*\
  !*** ./src/img/phone.svg ***!
  \***************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0b454d6aeda1578fa2ba.svg";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysc0hBQXNILE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0JBQW9CO0FBQ3RNLHFJQUFxSSx5QkFBeUI7QUFDOUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sd0ZBQXdGLGNBQWMsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxVQUFVLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFX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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2JzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheTppdGFsLHdnaHRAMCw0MDAuLjkwMDsxLDQwMC4uOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogSW1wb3J0IFJvYm90byAqL1xyXG5cclxuLyogSW1wb3J0IFBsYXlmYWlyIERpc3BsYXkgKi9cclxuXHJcbjpyb290IHtcclxuICAtLWJnLWNvbG9yOiAjMDg5MUIyO1xyXG59XHJcblxyXG4qe1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOiAwO1xyXG5cclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90byxzZXJpZjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuXHJcbmgxLCBoMiwgaDN7XHJcbiAgZm9udC1mYW1pbHk6IFBsYXlmYWlyIERpc3BsYXksc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbWFyZ2luOiAxcmVtIDByZW07XHJcbn1cclxubWFpbiwgLmFib3V0IHtcclxuICBwYWRkaW5nOiAydmggNXZ3O1xyXG59XHJcblxyXG4vKiBIZWFkZXIgKi9cclxuXHJcbmhlYWRlciB7XHJcbiAgcGFkZGluZzogNXZ3IDV2dztcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTUwZGVnLCB2YXIoLS1iZy1jb2xvcikgNTUlLCB3aGl0ZSA1NSUpO1xyXG59XHJcblxyXG5oZWFkZXIgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmhlYWRlciAgZGl2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFyZW0sLTFyZW0pO1xyXG59XHJcblxyXG5oZWFkZXIgc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpO1xyXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcclxufVxyXG5cclxuaDEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwMCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTEwMCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xyXG4gIHRleHQtc2hhZG93OiAxcHggMnB4IDVweCByZ2IoMTAwLDEwMCwxMDApO1xyXG4gIGZvbnQtc2l6ZTogMTR2dztcclxuICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xyXG59XHJcblxyXG4vKiBBYm91dCBNZSAqL1xyXG4uYWJvdXQgPiBwLCBoZWFkZXIgc2VjdGlvbiBwe1xyXG4gIGNvbG9yOiAjNTY1NjU2O1xyXG59XHJcblxyXG4uYWJvdXQgZGl2Omxhc3Qtb2YtdHlwZXtcclxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgbWFyZ2luOiAxcmVtIGF1dG87XHJcbn1cclxuXHJcbi5hYm91dCBhID4gaW1nLCBmb290ZXIgYSA+IGltZyB7XHJcbiAgd2lkdGg6IDIuNXJlbTtcclxuICBoZWlnaHQ6IDIuNXJlbTtcclxuICBtYXJnaW46IDAgMXJlbTtcclxufVxyXG5cclxuLyogTXkgV29yayAqL1xyXG4ucHJvamVjdC1pbWcgaW1nIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG4ud29yayBhcnRpY2xlIGgzIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG5hcnRpY2xlIHAge1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1saW5rIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpbmsgaW1nIHtcclxuICB3aWR0aDogMXJlbTtcclxuICBoZWlnaHQ6IDFyZW07XHJcbiAgbWFyZ2luOiAwcHggMC4xcmVtO1xyXG59XHJcblxyXG4ud29yayA+IGRpdntcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE5MC44cHgsIDFmcikpO1xyXG4gIGdhcDogMnJlbTtcclxufVxyXG5cclxuLnByb2plY3QtY29udGVudCB7XHJcbiAgcGFkZGluZzogMC41cmVtIDAuNXJlbSAxcmVtIDAuNXJlbTtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpO1xyXG59XHJcbi5wcm9qZWN0LWltZyB7XHJcbiAgaGVpZ2h0OiAxNTBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWltZyBzcGFuIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC02MCUsLTYwJSk7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XHJcbiAgZm9udC1mYW1pbHk6IFBsYXlmYWlyIERpc3BsYXk7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxufVxyXG5cclxuLyogRm9vdGVyICovXHJcbmZvb3RlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tdG9wOiA0cmVtO1xyXG4gIGdhcDogMnJlbTtcclxuICBhbGlnbi1pdGVtczogc3RhcnQ7XHJcbn1cclxuXHJcbi5jb250YWN0ID4gYWRkcmVzcyA+IGRpdiB7XHJcbiAgbWFyZ2luOiAycmVtIDByZW07XHJcbn1cclxuXHJcbi5jb250YWN0IHtcclxuICBtYXJnaW4tbGVmdDogNXZ3O1xyXG59XHJcblxyXG5mb290ZXIgPiBzZWN0aW9uID4gcCB7XHJcbiAgZm9udC1zaXplOiAxLjJyZW07XHJcbiAgbWF4LXdpZHRoOiA4MHZ3O1xyXG59XHJcblxyXG5cclxuZm9vdGVyIGltZ3tcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgMzAlO1xyXG59XHJcblxyXG5cclxuLmNvbnRhY3QgYWRkcmVzcyBkaXY6bnRoLWNoaWxkKDIpIGltZyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogMXJlbTtcclxuICBoZWlnaHQ6IDFyZW07XHJcbn1cclxuIFxyXG5hZGRyZXNzID4gZGl2Omxhc3QtY2hpbGQge1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuICBtYXJnaW46IDFyZW0gYXV0bztcclxufVxyXG5cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XHJcbiAgLyogSGVhZGVyICovXHJcbiAgaGVhZGVyIGltZyB7XHJcbiAgICB3aWR0aDogNDB2dztcclxuICAgIGhlaWdodDogNjB2dztcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIgaDF7XHJcbiAgICB0b3A6IDAlO1xyXG4gICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xMyUsMCUpO1xyXG4gIH1cclxuXHJcbiAgLmFib3V0IHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgfVxyXG5cclxuICAvKiBGb290ZXIgKi9cclxuICBmb290ZXIgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5jb250YWN0IHtcclxuICAgIHdpZHRoOiA1MHZ3O1xyXG4gICAgcGFkZGluZzogMnJlbSAwcmVtO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICB9XHJcblxyXG4gIGZvb3RlciBpbWcge1xyXG4gICAgd2lkdGg6IDMwdnc7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBtYXJnaW46IDJyZW0gMDtcclxuICAgIG1hcmdpbjogYXV0byAwO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3QgYWRkcmVzcyBkaXY6bnRoLWNoaWxkKDIpIGltZyB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzJweCkge1xyXG4gIC8qIEZvb3RlciAqL1xyXG4gIC5jb250YWN0IHtcclxuICAgIG1heC13aWR0aDogNTB2dztcclxuICB9XHJcblxyXG4gIGZvb3RlciBpbWcge1xyXG4gICAgXHJcbiAgfVxyXG5cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxrQkFBa0I7O0FBR2xCLDRCQUE0Qjs7QUFHNUI7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsVUFBVTs7QUFFWjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUEsV0FBVzs7QUFFWDtFQUNFLGdCQUFnQjtFQUNoQixtRUFBbUU7QUFDckU7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQix1QkFBdUI7RUFDdkIsaURBQWlEO0VBQ2pELGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsU0FBUztFQUNULGdDQUFnQztFQUNoQyxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2Ysc0JBQXNCO0FBQ3hCOztBQUVBLGFBQWE7QUFDYjtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBLFlBQVk7QUFDWjtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGFBQWE7RUFDYiw4REFBOEQ7RUFDOUQsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLGlEQUFpRDtBQUNuRDtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULCtCQUErQjtFQUMvQixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBLFdBQVc7QUFDWDtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COzs7QUFHQTtFQUNFLFdBQVc7RUFDWDtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLE9BQU87SUFDUCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw2QkFBNkI7RUFDL0I7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7O0VBRUEsV0FBVztFQUNYO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxjQUFjO0VBQ2hCOztFQUVBO0lBQ0UsbUJBQW1CO0VBQ3JCO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1g7SUFDRSxlQUFlO0VBQ2pCOztFQUVBOztFQUVBOztBQUVGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEltcG9ydCBSb2JvdG8gKi9cXHJcXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbi8qIEltcG9ydCBQbGF5ZmFpciBEaXNwbGF5ICovXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheTppdGFsLHdnaHRAMCw0MDAuLjkwMDsxLDQwMC4uOTAwJmRpc3BsYXk9c3dhcCcpO1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIC0tYmctY29sb3I6ICMwODkxQjI7XFxyXFxufVxcclxcblxcclxcbip7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sc2VyaWY7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG59XFxyXFxuXFxyXFxuaDEsIGgyLCBoM3tcXHJcXG4gIGZvbnQtZmFtaWx5OiBQbGF5ZmFpciBEaXNwbGF5LHNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG59XFxyXFxuXFxyXFxuaDIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgbWFyZ2luOiAxcmVtIDByZW07XFxyXFxufVxcclxcbm1haW4sIC5hYm91dCB7XFxyXFxuICBwYWRkaW5nOiAydmggNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWFkZXIgKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgcGFkZGluZzogNXZ3IDV2dztcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTBkZWcsIHZhcigtLWJnLWNvbG9yKSA1NSUsIHdoaXRlIDU1JSk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAgZGl2IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcmVtLC0xcmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHNlY3Rpb24ge1xcclxcbiAgbWFyZ2luLXRvcDogNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41KTtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxMDAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtMTAwJSk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xcclxcbiAgdGV4dC1zaGFkb3c6IDFweCAycHggNXB4IHJnYigxMDAsMTAwLDEwMCk7XFxyXFxuICBmb250LXNpemU6IDE0dnc7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBYm91dCBNZSAqL1xcclxcbi5hYm91dCA+IHAsIGhlYWRlciBzZWN0aW9uIHB7XFxyXFxuICBjb2xvcjogIzU2NTY1NjtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IGRpdjpsYXN0LW9mLXR5cGV7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICBtYXJnaW46IDFyZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IGEgPiBpbWcsIGZvb3RlciBhID4gaW1nIHtcXHJcXG4gIHdpZHRoOiAyLjVyZW07XFxyXFxuICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gIG1hcmdpbjogMCAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNeSBXb3JrICovXFxyXFxuLnByb2plY3QtaW1nIGltZyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yayBhcnRpY2xlIGgzIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYXJ0aWNsZSBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saW5rIHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGluayBpbWcge1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxuICBtYXJnaW46IDBweCAwLjFyZW07XFxyXFxufVxcclxcblxcclxcbi53b3JrID4gZGl2e1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE5MC44cHgsIDFmcikpO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jb250ZW50IHtcXHJcXG4gIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMXJlbSAwLjVyZW07XFxyXFxuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpO1xcclxcbn1cXHJcXG4ucHJvamVjdC1pbWcge1xcclxcbiAgaGVpZ2h0OiAxNTBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaW1nIHNwYW4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNjAlLC02MCUpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IFBsYXlmYWlyIERpc3BsYXk7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb290ZXIgKi9cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLXRvcDogNHJlbTtcXHJcXG4gIGdhcDogMnJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QgPiBhZGRyZXNzID4gZGl2IHtcXHJcXG4gIG1hcmdpbjogMnJlbSAwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCB7XFxyXFxuICBtYXJnaW4tbGVmdDogNXZ3O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgPiBzZWN0aW9uID4gcCB7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIG1heC13aWR0aDogODB2dztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuZm9vdGVyIGltZ3tcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICBvYmplY3QtcG9zaXRpb246IDUwJSAzMCU7XFxyXFxufVxcclxcblxcclxcblxcclxcbi5jb250YWN0IGFkZHJlc3MgZGl2Om50aC1jaGlsZCgyKSBpbWcge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHdpZHRoOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG4gXFxyXFxuYWRkcmVzcyA+IGRpdjpsYXN0LWNoaWxkIHtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xcclxcbiAgLyogSGVhZGVyICovXFxyXFxuICBoZWFkZXIgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDQwdnc7XFxyXFxuICAgIGhlaWdodDogNjB2dztcXHJcXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICAgIGZsb2F0OiBsZWZ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIGgxe1xcclxcbiAgICB0b3A6IDAlO1xcclxcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEzJSwwJSk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuYWJvdXQge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogRm9vdGVyICovXFxyXFxuICBmb290ZXIgaDIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgLmNvbnRhY3Qge1xcclxcbiAgICB3aWR0aDogNTB2dztcXHJcXG4gICAgcGFkZGluZzogMnJlbSAwcmVtO1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9vdGVyIGltZyB7XFxyXFxuICAgIHdpZHRoOiAzMHZ3O1xcclxcbiAgICBoZWlnaHQ6IGF1dG87XFxyXFxuICAgIG1hcmdpbjogMnJlbSAwO1xcclxcbiAgICBtYXJnaW46IGF1dG8gMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWN0IGFkZHJlc3MgZGl2Om50aC1jaGlsZCgyKSBpbWcge1xcclxcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MnB4KSB7XFxyXFxuICAvKiBGb290ZXIgKi9cXHJcXG4gIC5jb250YWN0IHtcXHJcXG4gICAgbWF4LXdpZHRoOiA1MHZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9vdGVyIGltZyB7XFxyXFxuICAgIFxcclxcbiAgfVxcclxcblxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vc3R5bGUuY3NzXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9pbWcvcGV4ZWxzLXNodmV0c2Etc21sLmpwZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fID0gbmV3IFVSTChcIi4vaW1nL29wZW4taW4tbmV3LnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fID0gbmV3IFVSTChcIi4vaW1nL3Bob25lLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF80X19fID0gbmV3IFVSTChcIi4vaW1nL2VtYWlsLnN2Z1wiLCBpbXBvcnQubWV0YS51cmwpO1xuLy8gTW9kdWxlXG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzNfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzRfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF80X19fKTtcbnZhciBjb2RlID0gXCI8IURPQ1RZUEUgaHRtbD5cXHJcXG48aHRtbCBsYW5nPVxcXCJlblxcXCI+XFxyXFxuPGhlYWQ+XFxyXFxuICA8bWV0YSBjaGFyc2V0PVxcXCJVVEYtOFxcXCI+XFxyXFxuICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCI+XFxyXFxuICA8bGluayByZWw9XFxcInN0eWxlc2hlZXRcXFwiIGhyZWY9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxcIj5cXHJcXG4gIDx0aXRsZT5Ib21lcGFnZTwvdGl0bGU+XFxyXFxuPC9oZWFkPlxcclxcbjxib2R5PlxcclxcbiAgPGhlYWRlcj5cXHJcXG4gICAgPGRpdj5cXHJcXG4gICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiIGFsdD1cXFwidGVzdFxcXCI+XFxyXFxuICAgICAgPGgxPkFzaGxleSBXaWxsaWFtczwvaDE+XFxyXFxuICAgIDwvZGl2PlxcclxcbiAgICA8c2VjdGlvbj5cXHJcXG4gICAgICA8aDI+QWJvdXQgTWU8L2gyPlxcclxcbiAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlY3VzYW5kYWUgZG9sb3JlIG5lY2Vzc2l0YXRpYnVzIGxhdWRhbnRpdW0gYXNwZXJpb3Jlc1xcclxcbiAgICAgICAgYWxpcXVpZCB1bGxhbSBkb2xvcmVtcXVlIGl0YXF1ZSBkaWN0YSBzdXNjaXBpdCBlaXVzIG9iY2FlY2F0aSBleCBhdHF1ZSwgc2FlcGUgYWxpcXVhbSBzb2x1dGEgaW4gYWQgdm9sdXB0YXRlbVxcclxcbiAgICAgICAgcG9zc2ltdXMsIG9mZmljaWEgcXVhcyBxdW9zLiBBbGlxdWlkIHV0IG5paGlsIHJlcnVtIGJlYXRhZSBoYXJ1bSBxdW9kIG1vZGkgc2VkPyBNYWduaSBub24gZXhwZWRpdGEgcXVhbSBub3N0cnVtIG5hbVxcclxcbiAgICAgICAgYXNzdW1lbmRhIGlwc2EhPC9wPlxcclxcbiAgICA8L3NlY3Rpb24+XFxyXFxuICA8L2hlYWRlcj5cXHJcXG4gIDxtYWluPlxcclxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiYWJvdXRcXFwiPlxcclxcbiAgICAgIDxoMj5BYm91dCBNZTwvaDI+XFxyXFxuICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmVjdXNhbmRhZSBkb2xvcmUgbmVjZXNzaXRhdGlidXMgbGF1ZGFudGl1bSBhc3BlcmlvcmVzXFxyXFxuICAgICAgICBhbGlxdWlkIHVsbGFtIGRvbG9yZW1xdWUgaXRhcXVlIGRpY3RhIHN1c2NpcGl0IGVpdXMgb2JjYWVjYXRpIGV4IGF0cXVlLCBzYWVwZSBhbGlxdWFtIHNvbHV0YSBpbiBhZCB2b2x1cHRhdGVtXFxyXFxuICAgICAgICBwb3NzaW11cywgb2ZmaWNpYSBxdWFzIHF1b3MuIEFsaXF1aWQgdXQgbmloaWwgcmVydW0gYmVhdGFlIGhhcnVtIHF1b2QgbW9kaSBzZWQ/IE1hZ25pIG5vbiBleHBlZGl0YSBxdWFtIG5vc3RydW0gbmFtXFxyXFxuICAgICAgICBhc3N1bWVuZGEgaXBzYSE8L3A+XFxyXFxuICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiPjxpbWcgc3JjPVxcXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvZ2l0aHViL2dpdGh1Yi1vcmlnaW5hbC5zdmdcXFwiIC8+PC9hPlxcclxcbiAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiPjxpbWcgc3JjPVxcXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvbGlua2VkaW4vbGlua2VkaW4tb3JpZ2luYWwuc3ZnXFxcIiAvPjwvYT5cXHJcXG4gICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIj48aW1nIHNyYz1cXFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL3R3aXR0ZXIvdHdpdHRlci1vcmlnaW5hbC5zdmdcXFwiIC8+PC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgIDwvc2VjdGlvbj5cXHJcXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcIndvcmtcXFwiPlxcclxcbiAgICAgIDxoMj5NeSBXb3JrPC9oMj5cXHJcXG4gICAgICA8ZGl2PlxcclxcbiAgICAgICAgPGFydGljbGU+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtaW1nXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjp0b21hdG87XFxcIj48c3Bhbj5zY3JlZW5zaG90IG9mIHByb2plY3Q8L3NwYW4+PGltZyAgYWx0PVxcXCJTY3JlZW5zaG90IG9mIGEgcHJvamVjdFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGgzPlByb2plY3QgTmFtZTwvaDM+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1saW5rXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCI+PGltZyBzcmM9XFxcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9naXRodWIvZ2l0aHViLW9yaWdpbmFsLnN2Z1xcXCIgLz48L2E+XFxyXFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiPjxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCIgYWx0PVxcXCJvcGVuIGluIG5ldyB0YWJcXFwiPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8cD5TaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdC4gSnVzdCBhIGNvdXBsZSBvZiBzZW50ZW5jZXMgd2lsbCBkbzwvcD5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2FydGljbGU+XFxyXFxuICAgICAgICA8YXJ0aWNsZT5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1pbWdcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOm1lZGl1bXB1cnBsZTtcXFwiPjxzcGFuPnNjcmVlbnNob3Qgb2YgcHJvamVjdDwvc3Bhbj48aW1nIGFsdD1cXFwiU2NyZWVuc2hvdCBvZiBhIHByb2plY3RcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxoMz5Qcm9qZWN0IE5hbWU8L2gzPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtbGlua1xcXCI+XFxyXFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiPjxpbWcgc3JjPVxcXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvZ2l0aHViL2dpdGh1Yi1vcmlnaW5hbC5zdmdcXFwiIC8+PC9hPlxcclxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIj48aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fICsgXCJcXFwiIGFsdD1cXFwib3BlbiBpbiBuZXcgdGFiXFxcIj48L2E+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPHA+U2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2plY3QuIEp1c3QgYSBjb3VwbGUgb2Ygc2VudGVuY2VzIHdpbGwgZG88L3A+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9hcnRpY2xlPlxcclxcbiAgICAgICAgPGFydGljbGU+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtaW1nXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjpvcmFuZ2U7XFxcIj48c3Bhbj5zY3JlZW5zaG90IG9mIHByb2plY3Q8L3NwYW4+PGltZyBhbHQ9XFxcIlNjcmVlbnNob3Qgb2YgYSBwcm9qZWN0XFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8aDM+UHJvamVjdCBOYW1lPC9oMz5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWxpbmtcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIj48aW1nIHNyYz1cXFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2dpdGh1Yi9naXRodWItb3JpZ2luYWwuc3ZnXFxcIiAvPjwvYT5cXHJcXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCI+PGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyArIFwiXFxcIiBhbHQ9XFxcIm9wZW4gaW4gbmV3IHRhYlxcXCI+PC9hPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxwPlNob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9qZWN0LiBKdXN0IGEgY291cGxlIG9mIHNlbnRlbmNlcyB3aWxsIGRvPC9wPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvYXJ0aWNsZT5cXHJcXG4gICAgICAgIDxhcnRpY2xlPlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWltZ1xcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6cGFsZXZpb2xldHJlZDtcXFwiPjxzcGFuPnNjcmVlbnNob3Qgb2YgcHJvamVjdDwvc3Bhbj48aW1nIGFsdD1cXFwiU2NyZWVuc2hvdCBvZiBhIHByb2plY3RcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxoMz5Qcm9qZWN0IE5hbWU8L2gzPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtbGlua1xcXCI+XFxyXFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiPjxpbWcgc3JjPVxcXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvZ2l0aHViL2dpdGh1Yi1vcmlnaW5hbC5zdmdcXFwiIC8+PC9hPlxcclxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIj48aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fICsgXCJcXFwiIGFsdD1cXFwib3BlbiBpbiBuZXcgdGFiXFxcIj48L2E+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPHA+U2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2plY3QuIEp1c3QgYSBjb3VwbGUgb2Ygc2VudGVuY2VzIHdpbGwgZG88L3A+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9hcnRpY2xlPlxcclxcbiAgICAgICAgPGFydGljbGU+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtaW1nXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjpjb3JuZmxvd2VyYmx1ZTtcXFwiPjxzcGFuPnNjcmVlbnNob3Qgb2YgcHJvamVjdDwvc3Bhbj48aW1nIGFsdD1cXFwiU2NyZWVuc2hvdCBvZiBhIHByb2plY3RcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxoMz5Qcm9qZWN0IE5hbWU8L2gzPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtbGlua1xcXCI+XFxyXFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiPjxpbWcgc3JjPVxcXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvZ2l0aHViL2dpdGh1Yi1vcmlnaW5hbC5zdmdcXFwiIC8+PC9hPlxcclxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIj48aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fICsgXCJcXFwiIGFsdD1cXFwib3BlbiBpbiBuZXcgdGFiXFxcIj48L2E+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPHA+U2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2plY3QuIEp1c3QgYSBjb3VwbGUgb2Ygc2VudGVuY2VzIHdpbGwgZG88L3A+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9hcnRpY2xlPlxcclxcbiAgICAgICAgPGFydGljbGU+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtaW1nXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjpzZWFncmVlbjtcXFwiPjxzcGFuPnNjcmVlbnNob3Qgb2YgcHJvamVjdDwvc3Bhbj48aW1nIGFsdD1cXFwiU2NyZWVuc2hvdCBvZiBhIHByb2plY3RcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxoMz5Qcm9qZWN0IE5hbWU8L2gzPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtbGlua1xcXCI+XFxyXFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiPjxpbWcgc3JjPVxcXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvZ2l0aHViL2dpdGh1Yi1vcmlnaW5hbC5zdmdcXFwiIC8+PC9hPlxcclxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIj48aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fICsgXCJcXFwiIGFsdD1cXFwib3BlbiBpbiBuZXcgdGFiXFxcIj48L2E+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPHA+U2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2plY3QuIEp1c3QgYSBjb3VwbGUgb2Ygc2VudGVuY2VzIHdpbGwgZG88L3A+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9hcnRpY2xlPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICA8L3NlY3Rpb24+XFxyXFxuICA8L21haW4+XFxyXFxuICA8Zm9vdGVyPlxcclxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwiY29udGFjdFxcXCI+XFxyXFxuICAgICAgPGgyPkNvbnRhY3QgTWU8L2gyPlxcclxcbiAgICAgIDxwPlBsZWFzZSBnZXQgaW4gdG91Y2ggaWYgeW91IHRoaW5rIG91ciB3b3JrIGNvdWxkIGJlIG11dHVhbGx5IGJlbmVmaWNpYWwhPC9wPlxcclxcbiAgICAgIDxhZGRyZXNzPlxcclxcbiAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgMTIzNCBSYW5kb20gUm9hZCA8YnI+XFxyXFxuICAgICAgICAgIFJhbmRvbSBUb3duLCBDYWxpZm9ybmlhIDEyMzQ1XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgIDxkaXY+PGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfM19fXyArIFwiXFxcIiBhbHQ9XFxcIlxcXCI+NTU1LTU1NS01NTU8L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdj48aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80X19fICsgXCJcXFwiIGFsdD1cXFwiXFxcIj48YSBzcmM9XFxcIm1haWx0bzphc2hsZXl3aWxsaWFtcy5pcy5ub3QucmVhbEBnbWFpbC5jb21cXFwiPmFzaGxleXdpbGxpYW1zLmlzLm5vdC5yZWFsQGdtYWlsLmNvbTwvYT48L2Rpdj5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIj48aW1nIHNyYz1cXFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2dpdGh1Yi9naXRodWItb3JpZ2luYWwuc3ZnXFxcIiAvPjwvYT5cXHJcXG4gICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIj48aW1nIHNyYz1cXFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2xpbmtlZGluL2xpbmtlZGluLW9yaWdpbmFsLnN2Z1xcXCIgLz48L2E+XFxyXFxuICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCI+PGltZyBzcmM9XFxcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy90d2l0dGVyL3R3aXR0ZXItb3JpZ2luYWwuc3ZnXFxcIiAvPjwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgIDwvYWRkcmVzcz5cXHJcXG4gICAgPC9zZWN0aW9uPlxcclxcbiAgICA8aW1nIGNsYXNzPVxcXCJmb290ZXItaW1nXFxcIiBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIiBhbHQ9XFxcIlxcXCI+XFxyXFxuICA8L2Zvb3Rlcj5cXHJcXG48L2JvZHk+XFxyXFxuPC9odG1sPlwiO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgY29kZTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cblxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZXJzY29yZS1kYW5nbGUsIG5vLXBhcmFtLXJlYXNzaWduXG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cbiAgaWYgKG9wdGlvbnMubWF5YmVOZWVkUXVvdGVzICYmIC9bXFx0XFxuXFxmXFxyIFwiJz08PmBdLy50ZXN0KHVybCkpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybCwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiaW1wb3J0ICcuL2luZGV4Lmh0bWwnO1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJzsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=