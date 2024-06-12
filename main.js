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
  padding: 2vh 8vw;
}

/* Header */

header {
  padding: 8vw 8vw;
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
  font-size: 1.2rem;
  font-weight: 500;
  margin-left: 1rem;
  margin-bottom: 0.5rem;
}

.project-link {
  float: right;
}

.project-link img {
  width: 1.5rem;
  height: 1.5rem;
  margin: 0px 0.1rem;
}

.work > div{
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
}

.project-content {
  padding: 1rem 1rem 2rem 1rem;
  box-shadow: 3px 3px 10px rgba(128, 128, 128, 0.5);
}
.project-img {
  min-width: 250px;
  height: 200px;
  position: relative;
}

.project-img span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-60%,-60%);
  color: white;
  font-size: 2rem;
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
  margin-left: 8vw;
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

  header section {
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,kBAAkB;;AAGlB,4BAA4B;;AAG5B;EACE,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,UAAU;;AAEZ;;AAEA;EACE,yBAAyB;EACzB,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,mCAAmC;EACnC,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,gBAAgB;AAClB;;AAEA,WAAW;;AAEX;EACE,gBAAgB;EAChB,mEAAmE;AACrE;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,iCAAiC;AACnC;;AAEA;EACE,gBAAgB;EAChB,uBAAuB;EACvB,iDAAiD;EACjD,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,SAAS;EACT,gCAAgC;EAChC,YAAY;EACZ,sBAAsB;EACtB,yCAAyC;EACzC,eAAe;EACf,sBAAsB;AACxB;;AAEA,aAAa;AACb;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,cAAc;AAChB;;AAEA,YAAY;AACZ;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,4DAA4D;EAC5D,SAAS;AACX;;AAEA;EACE,4BAA4B;EAC5B,iDAAiD;AACnD;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,+BAA+B;EAC/B,YAAY;EACZ,eAAe;EACf,sBAAsB;EACtB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA,WAAW;AACX;EACE,aAAa;EACb,eAAe;EACf,6BAA6B;EAC7B,iCAAiC;EACjC,YAAY;EACZ,gBAAgB;EAChB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,eAAe;AACjB;;;AAGA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,wBAAwB;AAC1B;;;AAGA;EACE,aAAa;EACb,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;;AAGA;EACE,WAAW;EACX;IACE,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,WAAW;EACb;;EAEA;IACE,OAAO;IACP,iBAAiB;IACjB,kBAAkB;IAClB,iBAAiB;IACjB,6BAA6B;EAC/B;;EAEA;EACA;;EAEA;IACE,aAAa;EACf;;EAEA,WAAW;EACX;IACE,iBAAiB;EACnB;;EAEA;IACE,WAAW;IACX,kBAAkB;IAClB,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,cAAc;IACd,cAAc;EAChB;;EAEA;IACE,mBAAmB;EACrB;AACF","sourcesContent":["/* Import Roboto */\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\n\r\n/* Import Playfair Display */\r\n@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');\r\n\r\n:root {\r\n  --bg-color: #0891B2;\r\n}\r\n\r\n*{\r\n  margin: 0;\r\n  padding: 0;\r\n\r\n}\r\n\r\nbody {\r\n  font-family: Roboto,serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nh1, h2, h3{\r\n  font-family: Playfair Display,serif;\r\n  font-weight: 400;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  margin: 1rem 0rem;\r\n}\r\nmain, .about {\r\n  padding: 2vh 8vw;\r\n}\r\n\r\n/* Header */\r\n\r\nheader {\r\n  padding: 8vw 8vw;\r\n  background: linear-gradient(150deg, var(--bg-color) 55%, white 55%);\r\n}\r\n\r\nheader img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\nheader  div {\r\n  position: relative;\r\n  transform: translate(-1rem,-1rem);\r\n}\r\n\r\nheader section {\r\n  margin-top: 5rem;\r\n  background-color: white;\r\n  box-shadow: 3px 3px 10px rgba(128, 128, 128, 0.5);\r\n  padding: 2rem 1rem;\r\n}\r\n\r\nh1 {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 50%;\r\n  transform: translate(-50%,-100%);\r\n  color: white;\r\n  min-width: min-content;\r\n  text-shadow: 1px 2px 5px rgb(100,100,100);\r\n  font-size: 14vw;\r\n  letter-spacing: 0.2rem;\r\n}\r\n\r\n/* About Me */\r\n.about > p, header section p{\r\n  color: #565656;\r\n}\r\n\r\n.about div:last-of-type{\r\n  width: max-content;\r\n  margin: 1rem auto;\r\n}\r\n\r\n.about a > img, footer a > img {\r\n  width: 2.5rem;\r\n  height: 2.5rem;\r\n  margin: 0 1rem;\r\n}\r\n\r\n/* My Work */\r\n.project-img img {\r\n  display: none;\r\n}\r\n\r\n.work article h3 {\r\n  display: inline-block;\r\n  font-size: 1.2rem;\r\n  font-weight: 500;\r\n  margin-left: 1rem;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.project-link {\r\n  float: right;\r\n}\r\n\r\n.project-link img {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  margin: 0px 0.1rem;\r\n}\r\n\r\n.work > div{\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\r\n  gap: 2rem;\r\n}\r\n\r\n.project-content {\r\n  padding: 1rem 1rem 2rem 1rem;\r\n  box-shadow: 3px 3px 10px rgba(128, 128, 128, 0.5);\r\n}\r\n.project-img {\r\n  min-width: 250px;\r\n  height: 200px;\r\n  position: relative;\r\n}\r\n\r\n.project-img span {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-60%,-60%);\r\n  color: white;\r\n  font-size: 2rem;\r\n  letter-spacing: 0.1rem;\r\n  font-family: Playfair Display;\r\n  font-weight: 500;\r\n}\r\n\r\n/* Footer */\r\nfooter {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-evenly;\r\n  background-color: var(--bg-color);\r\n  color: white;\r\n  margin-top: 4rem;\r\n  gap: 2rem;\r\n  align-items: start;\r\n}\r\n\r\n.contact > address > div {\r\n  margin: 2rem 0rem;\r\n}\r\n\r\n.contact {\r\n  margin-left: 8vw;\r\n}\r\n\r\nfooter > section > p {\r\n  font-size: 1.2rem;\r\n  max-width: 80vw;\r\n}\r\n\r\n\r\nfooter img{\r\n  width: 100%;\r\n  height: auto;\r\n  object-fit: cover;\r\n  object-position: 50% 30%;\r\n}\r\n\r\n\r\n.contact address div:nth-child(2) img {\r\n  display: none;\r\n  width: 1rem;\r\n  height: 1rem;\r\n}\r\n \r\naddress > div:last-child {\r\n  width: max-content;\r\n  margin: 1rem auto;\r\n}\r\n\r\n\r\n@media screen and (min-width: 480px) {\r\n  /* Header */\r\n  header img {\r\n    width: 40vw;\r\n    height: 60vw;\r\n    object-fit: cover;\r\n    float: left;\r\n  }\r\n\r\n  header h1{\r\n    top: 0%;\r\n    font-size: 2.2rem;\r\n    width: max-content;\r\n    letter-spacing: 0;\r\n    transform: translate(-13%,0%);\r\n  }\r\n\r\n  header section {\r\n  }\r\n\r\n  .about {\r\n    display: none;\r\n  }\r\n\r\n  /* Footer */\r\n  footer h2 {\r\n    text-align: start;\r\n  }\r\n  \r\n  .contact {\r\n    width: 50vw;\r\n    padding: 2rem 0rem;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  footer img {\r\n    width: 30vw;\r\n    height: auto;\r\n    margin: 2rem 0;\r\n    margin: auto 0;\r\n  }\r\n\r\n  .contact address div:nth-child(2) img {\r\n    visibility: visible;\r\n  }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysc0hBQXNILE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0JBQW9CO0FBQ3RNLHFJQUFxSSx5QkFBeUI7QUFDOUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sd0ZBQXdGLGNBQWMsTUFBTSxZQUFZLE9BQU8sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLE9BQU8sV0FBVyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLE9BQU8sVUFBVSxLQUFLLFVBQVUsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLFVBQVUsT0FBTyxVQUFVLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFP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Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguaHRtbCIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcz83MTYzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG86aXRhbCx3Z2h0QDAsMTAwOzAsMzAwOzAsNDAwOzAsNTAwOzAsNzAwOzAsOTAwOzEsMTAwOzEsMzAwOzEsNDAwOzEsNTAwOzEsNzAwOzEsOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6aXRhbCx3Z2h0QDAsNDAwLi45MDA7MSw0MDAuLjkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEltcG9ydCBSb2JvdG8gKi9cclxuXHJcbi8qIEltcG9ydCBQbGF5ZmFpciBEaXNwbGF5ICovXHJcblxyXG46cm9vdCB7XHJcbiAgLS1iZy1jb2xvcjogIzA4OTFCMjtcclxufVxyXG5cclxuKntcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxuXHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sc2VyaWY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5oMSwgaDIsIGgze1xyXG4gIGZvbnQtZmFtaWx5OiBQbGF5ZmFpciBEaXNwbGF5LHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIG1hcmdpbjogMXJlbSAwcmVtO1xyXG59XHJcbm1haW4sIC5hYm91dCB7XHJcbiAgcGFkZGluZzogMnZoIDh2dztcclxufVxyXG5cclxuLyogSGVhZGVyICovXHJcblxyXG5oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDh2dyA4dnc7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE1MGRlZywgdmFyKC0tYmctY29sb3IpIDU1JSwgd2hpdGUgNTUlKTtcclxufVxyXG5cclxuaGVhZGVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5oZWFkZXIgIGRpdiB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xcmVtLC0xcmVtKTtcclxufVxyXG5cclxuaGVhZGVyIHNlY3Rpb24ge1xyXG4gIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41KTtcclxuICBwYWRkaW5nOiAycmVtIDFyZW07XHJcbn1cclxuXHJcbmgxIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC0xMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDJweCA1cHggcmdiKDEwMCwxMDAsMTAwKTtcclxuICBmb250LXNpemU6IDE0dnc7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcclxufVxyXG5cclxuLyogQWJvdXQgTWUgKi9cclxuLmFib3V0ID4gcCwgaGVhZGVyIHNlY3Rpb24gcHtcclxuICBjb2xvcjogIzU2NTY1NjtcclxufVxyXG5cclxuLmFib3V0IGRpdjpsYXN0LW9mLXR5cGV7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xyXG59XHJcblxyXG4uYWJvdXQgYSA+IGltZywgZm9vdGVyIGEgPiBpbWcge1xyXG4gIHdpZHRoOiAyLjVyZW07XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgbWFyZ2luOiAwIDFyZW07XHJcbn1cclxuXHJcbi8qIE15IFdvcmsgKi9cclxuLnByb2plY3QtaW1nIGltZyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLndvcmsgYXJ0aWNsZSBoMyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1saW5rIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpbmsgaW1nIHtcclxuICB3aWR0aDogMS41cmVtO1xyXG4gIGhlaWdodDogMS41cmVtO1xyXG4gIG1hcmdpbjogMHB4IDAuMXJlbTtcclxufVxyXG5cclxuLndvcmsgPiBkaXZ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxcmVtIDFyZW0gMnJlbSAxcmVtO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNSk7XHJcbn1cclxuLnByb2plY3QtaW1nIHtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJvamVjdC1pbWcgc3BhbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNjAlLC02MCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKiBGb290ZXIgKi9cclxuZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgZ2FwOiAycmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxufVxyXG5cclxuLmNvbnRhY3QgPiBhZGRyZXNzID4gZGl2IHtcclxuICBtYXJnaW46IDJyZW0gMHJlbTtcclxufVxyXG5cclxuLmNvbnRhY3Qge1xyXG4gIG1hcmdpbi1sZWZ0OiA4dnc7XHJcbn1cclxuXHJcbmZvb3RlciA+IHNlY3Rpb24gPiBwIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICBtYXgtd2lkdGg6IDgwdnc7XHJcbn1cclxuXHJcblxyXG5mb290ZXIgaW1ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBvYmplY3QtcG9zaXRpb246IDUwJSAzMCU7XHJcbn1cclxuXHJcblxyXG4uY29udGFjdCBhZGRyZXNzIGRpdjpudGgtY2hpbGQoMikgaW1nIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHdpZHRoOiAxcmVtO1xyXG4gIGhlaWdodDogMXJlbTtcclxufVxyXG4gXHJcbmFkZHJlc3MgPiBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuICAvKiBIZWFkZXIgKi9cclxuICBoZWFkZXIgaW1nIHtcclxuICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgaGVpZ2h0OiA2MHZ3O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICB9XHJcblxyXG4gIGhlYWRlciBoMXtcclxuICAgIHRvcDogMCU7XHJcbiAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEzJSwwJSk7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIgc2VjdGlvbiB7XHJcbiAgfVxyXG5cclxuICAuYWJvdXQge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcblxyXG4gIC8qIEZvb3RlciAqL1xyXG4gIGZvb3RlciBoMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhY3Qge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgICBwYWRkaW5nOiAycmVtIDByZW07XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIGltZyB7XHJcbiAgICB3aWR0aDogMzB2dztcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogMnJlbSAwO1xyXG4gICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgfVxyXG5cclxuICAuY29udGFjdCBhZGRyZXNzIGRpdjpudGgtY2hpbGQoMikgaW1nIHtcclxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbiAgfVxyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBLGtCQUFrQjs7QUFHbEIsNEJBQTRCOztBQUc1QjtFQUNFLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFNBQVM7RUFDVCxVQUFVOztBQUVaOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1FQUFtRTtBQUNyRTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixpREFBaUQ7RUFDakQsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUEsYUFBYTtBQUNiO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDREQUE0RDtFQUM1RCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsaURBQWlEO0FBQ25EO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULCtCQUErQjtFQUMvQixZQUFZO0VBQ1osZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBLFdBQVc7QUFDWDtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQix3QkFBd0I7QUFDMUI7OztBQUdBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0FBQ25COzs7QUFHQTtFQUNFLFdBQVc7RUFDWDtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLFdBQVc7RUFDYjs7RUFFQTtJQUNFLE9BQU87SUFDUCxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQiw2QkFBNkI7RUFDL0I7O0VBRUE7RUFDQTs7RUFFQTtJQUNFLGFBQWE7RUFDZjs7RUFFQSxXQUFXO0VBQ1g7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBJbXBvcnQgUm9ib3RvICovXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4vKiBJbXBvcnQgUGxheWZhaXIgRGlzcGxheSAqL1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6aXRhbCx3Z2h0QDAsNDAwLi45MDA7MSw0MDAuLjkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWJnLWNvbG9yOiAjMDg5MUIyO1xcclxcbn1cXHJcXG5cXHJcXG4qe1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogUm9ib3RvLHNlcmlmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbmgxLCBoMiwgaDN7XFxyXFxuICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheSxzZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIG1hcmdpbjogMXJlbSAwcmVtO1xcclxcbn1cXHJcXG5tYWluLCAuYWJvdXQge1xcclxcbiAgcGFkZGluZzogMnZoIDh2dztcXHJcXG59XFxyXFxuXFxyXFxuLyogSGVhZGVyICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gIHBhZGRpbmc6IDh2dyA4dnc7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTUwZGVnLCB2YXIoLS1iZy1jb2xvcikgNTUlLCB3aGl0ZSA1NSUpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgIGRpdiB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXJlbSwtMXJlbSk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBzZWN0aW9uIHtcXHJcXG4gIG1hcmdpbi10b3A6IDVyZW07XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNSk7XFxyXFxuICBwYWRkaW5nOiAycmVtIDFyZW07XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMTAwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTEwMCUpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcXHJcXG4gIHRleHQtc2hhZG93OiAxcHggMnB4IDVweCByZ2IoMTAwLDEwMCwxMDApO1xcclxcbiAgZm9udC1zaXplOiAxNHZ3O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQWJvdXQgTWUgKi9cXHJcXG4uYWJvdXQgPiBwLCBoZWFkZXIgc2VjdGlvbiBwe1xcclxcbiAgY29sb3I6ICM1NjU2NTY7XFxyXFxufVxcclxcblxcclxcbi5hYm91dCBkaXY6bGFzdC1vZi10eXBle1xcclxcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5hYm91dCBhID4gaW1nLCBmb290ZXIgYSA+IGltZyB7XFxyXFxuICB3aWR0aDogMi41cmVtO1xcclxcbiAgaGVpZ2h0OiAyLjVyZW07XFxyXFxuICBtYXJnaW46IDAgMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTXkgV29yayAqL1xcclxcbi5wcm9qZWN0LWltZyBpbWcge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmsgYXJ0aWNsZSBoMyB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDEuMnJlbTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGluayB7XFxyXFxuICBmbG9hdDogcmlnaHQ7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpbmsgaW1nIHtcXHJcXG4gIHdpZHRoOiAxLjVyZW07XFxyXFxuICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG4gIG1hcmdpbjogMHB4IDAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmsgPiBkaXZ7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjUwcHgsIDFmcikpO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jb250ZW50IHtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAycmVtIDFyZW07XFxyXFxuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpO1xcclxcbn1cXHJcXG4ucHJvamVjdC1pbWcge1xcclxcbiAgbWluLXdpZHRoOiAyNTBweDtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWltZyBzcGFuIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTYwJSwtNjAlKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjFyZW07XFxyXFxuICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxufVxcclxcblxcclxcbi8qIEZvb3RlciAqL1xcclxcbmZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtYXJnaW4tdG9wOiA0cmVtO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCA+IGFkZHJlc3MgPiBkaXYge1xcclxcbiAgbWFyZ2luOiAycmVtIDByZW07XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0IHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA4dnc7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciA+IHNlY3Rpb24gPiBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgbWF4LXdpZHRoOiA4MHZ3O1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5mb290ZXIgaW1ne1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIG9iamVjdC1wb3NpdGlvbjogNTAlIDMwJTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLmNvbnRhY3QgYWRkcmVzcyBkaXY6bnRoLWNoaWxkKDIpIGltZyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbiAgd2lkdGg6IDFyZW07XFxyXFxuICBoZWlnaHQ6IDFyZW07XFxyXFxufVxcclxcbiBcXHJcXG5hZGRyZXNzID4gZGl2Omxhc3QtY2hpbGQge1xcclxcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDQ4MHB4KSB7XFxyXFxuICAvKiBIZWFkZXIgKi9cXHJcXG4gIGhlYWRlciBpbWcge1xcclxcbiAgICB3aWR0aDogNDB2dztcXHJcXG4gICAgaGVpZ2h0OiA2MHZ3O1xcclxcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gICAgZmxvYXQ6IGxlZnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgaDF7XFxyXFxuICAgIHRvcDogMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcclxcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMTMlLDAlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBzZWN0aW9uIHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBGb290ZXIgKi9cXHJcXG4gIGZvb3RlciBoMiB7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAuY29udGFjdCB7XFxyXFxuICAgIHdpZHRoOiA1MHZ3O1xcclxcbiAgICBwYWRkaW5nOiAycmVtIDByZW07XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb290ZXIgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDMwdnc7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgbWFyZ2luOiAycmVtIDA7XFxyXFxuICAgIG1hcmdpbjogYXV0byAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3QgYWRkcmVzcyBkaXY6bnRoLWNoaWxkKDIpIGltZyB7XFxyXFxuICAgIHZpc2liaWxpdHk6IHZpc2libGU7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9odG1sLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9zdHlsZS5jc3NcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL2ltZy9wZXhlbHMtc2h2ZXRzYS1zbWwuanBnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18gPSBuZXcgVVJMKFwiLi9pbWcvb3Blbi1pbi1uZXcuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzNfX18gPSBuZXcgVVJMKFwiLi9pbWcvcGhvbmUuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fSFRNTF9MT0FERVJfSU1QT1JUXzRfX18gPSBuZXcgVVJMKFwiLi9pbWcvZW1haWwuc3ZnXCIsIGltcG9ydC5tZXRhLnVybCk7XG4vLyBNb2R1bGVcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzFfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8yX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfM19fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNF9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzRfX18pO1xudmFyIGNvZGUgPSBcIjwhRE9DVFlQRSBodG1sPlxcclxcbjxodG1sIGxhbmc9XFxcImVuXFxcIj5cXHJcXG48aGVhZD5cXHJcXG4gIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIj5cXHJcXG4gIDxtZXRhIG5hbWU9XFxcInZpZXdwb3J0XFxcIiBjb250ZW50PVxcXCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MS4wXFxcIj5cXHJcXG4gIDxsaW5rIHJlbD1cXFwic3R5bGVzaGVldFxcXCIgaHJlZj1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8wX19fICsgXCJcXFwiPlxcclxcbiAgPHRpdGxlPkhvbWVwYWdlPC90aXRsZT5cXHJcXG48L2hlYWQ+XFxyXFxuPGJvZHk+XFxyXFxuICA8aGVhZGVyPlxcclxcbiAgICA8ZGl2PlxcclxcbiAgICAgIDxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCIgYWx0PVxcXCJ0ZXN0XFxcIj5cXHJcXG4gICAgICA8aDE+QXNobGV5IFdpbGxpYW1zPC9oMT5cXHJcXG4gICAgPC9kaXY+XFxyXFxuICAgIDxzZWN0aW9uPlxcclxcbiAgICAgIDxoMj5BYm91dCBNZTwvaDI+XFxyXFxuICAgICAgPHA+TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmVjdXNhbmRhZSBkb2xvcmUgbmVjZXNzaXRhdGlidXMgbGF1ZGFudGl1bSBhc3BlcmlvcmVzXFxyXFxuICAgICAgICBhbGlxdWlkIHVsbGFtIGRvbG9yZW1xdWUgaXRhcXVlIGRpY3RhIHN1c2NpcGl0IGVpdXMgb2JjYWVjYXRpIGV4IGF0cXVlLCBzYWVwZSBhbGlxdWFtIHNvbHV0YSBpbiBhZCB2b2x1cHRhdGVtXFxyXFxuICAgICAgICBwb3NzaW11cywgb2ZmaWNpYSBxdWFzIHF1b3MuIEFsaXF1aWQgdXQgbmloaWwgcmVydW0gYmVhdGFlIGhhcnVtIHF1b2QgbW9kaSBzZWQ/IE1hZ25pIG5vbiBleHBlZGl0YSBxdWFtIG5vc3RydW0gbmFtXFxyXFxuICAgICAgICBhc3N1bWVuZGEgaXBzYSE8L3A+XFxyXFxuICAgIDwvc2VjdGlvbj5cXHJcXG4gIDwvaGVhZGVyPlxcclxcbiAgPG1haW4+XFxyXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJhYm91dFxcXCI+XFxyXFxuICAgICAgPGgyPkFib3V0IE1lPC9oMj5cXHJcXG4gICAgICA8cD5Mb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSZWN1c2FuZGFlIGRvbG9yZSBuZWNlc3NpdGF0aWJ1cyBsYXVkYW50aXVtIGFzcGVyaW9yZXNcXHJcXG4gICAgICAgIGFsaXF1aWQgdWxsYW0gZG9sb3JlbXF1ZSBpdGFxdWUgZGljdGEgc3VzY2lwaXQgZWl1cyBvYmNhZWNhdGkgZXggYXRxdWUsIHNhZXBlIGFsaXF1YW0gc29sdXRhIGluIGFkIHZvbHVwdGF0ZW1cXHJcXG4gICAgICAgIHBvc3NpbXVzLCBvZmZpY2lhIHF1YXMgcXVvcy4gQWxpcXVpZCB1dCBuaWhpbCByZXJ1bSBiZWF0YWUgaGFydW0gcXVvZCBtb2RpIHNlZD8gTWFnbmkgbm9uIGV4cGVkaXRhIHF1YW0gbm9zdHJ1bSBuYW1cXHJcXG4gICAgICAgIGFzc3VtZW5kYSBpcHNhITwvcD5cXHJcXG4gICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCI+PGltZyBzcmM9XFxcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9naXRodWIvZ2l0aHViLW9yaWdpbmFsLnN2Z1xcXCIgLz48L2E+XFxyXFxuICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCI+PGltZyBzcmM9XFxcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9saW5rZWRpbi9saW5rZWRpbi1vcmlnaW5hbC5zdmdcXFwiIC8+PC9hPlxcclxcbiAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiPjxpbWcgc3JjPVxcXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvdHdpdHRlci90d2l0dGVyLW9yaWdpbmFsLnN2Z1xcXCIgLz48L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgPC9zZWN0aW9uPlxcclxcbiAgICA8c2VjdGlvbiBjbGFzcz1cXFwid29ya1xcXCI+XFxyXFxuICAgICAgPGgyPk15IFdvcms8L2gyPlxcclxcbiAgICAgIDxkaXY+XFxyXFxuICAgICAgICA8YXJ0aWNsZT5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1pbWdcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnRvbWF0bztcXFwiPjxzcGFuPnNjcmVlbnNob3Qgb2YgcHJvamVjdDwvc3Bhbj48aW1nICBhbHQ9XFxcIlNjcmVlbnNob3Qgb2YgYSBwcm9qZWN0XFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8aDM+UHJvamVjdCBOYW1lPC9oMz5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWxpbmtcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIj48aW1nIHNyYz1cXFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2dpdGh1Yi9naXRodWItb3JpZ2luYWwuc3ZnXFxcIiAvPjwvYT5cXHJcXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCI+PGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyArIFwiXFxcIiBhbHQ9XFxcIm9wZW4gaW4gbmV3IHRhYlxcXCI+PC9hPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxwPlNob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9qZWN0LiBKdXN0IGEgY291cGxlIG9mIHNlbnRlbmNlcyB3aWxsIGRvPC9wPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvYXJ0aWNsZT5cXHJcXG4gICAgICAgIDxhcnRpY2xlPlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWltZ1xcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6bWVkaXVtcHVycGxlO1xcXCI+PHNwYW4+c2NyZWVuc2hvdCBvZiBwcm9qZWN0PC9zcGFuPjxpbWcgYWx0PVxcXCJTY3JlZW5zaG90IG9mIGEgcHJvamVjdFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGgzPlByb2plY3QgTmFtZTwvaDM+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1saW5rXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCI+PGltZyBzcmM9XFxcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9naXRodWIvZ2l0aHViLW9yaWdpbmFsLnN2Z1xcXCIgLz48L2E+XFxyXFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiPjxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCIgYWx0PVxcXCJvcGVuIGluIG5ldyB0YWJcXFwiPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8cD5TaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdC4gSnVzdCBhIGNvdXBsZSBvZiBzZW50ZW5jZXMgd2lsbCBkbzwvcD5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2FydGljbGU+XFxyXFxuICAgICAgICA8YXJ0aWNsZT5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1pbWdcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOm9yYW5nZTtcXFwiPjxzcGFuPnNjcmVlbnNob3Qgb2YgcHJvamVjdDwvc3Bhbj48aW1nIGFsdD1cXFwiU2NyZWVuc2hvdCBvZiBhIHByb2plY3RcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxoMz5Qcm9qZWN0IE5hbWU8L2gzPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtbGlua1xcXCI+XFxyXFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiPjxpbWcgc3JjPVxcXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvZ2l0aHViL2dpdGh1Yi1vcmlnaW5hbC5zdmdcXFwiIC8+PC9hPlxcclxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIj48aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fICsgXCJcXFwiIGFsdD1cXFwib3BlbiBpbiBuZXcgdGFiXFxcIj48L2E+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPHA+U2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2plY3QuIEp1c3QgYSBjb3VwbGUgb2Ygc2VudGVuY2VzIHdpbGwgZG88L3A+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9hcnRpY2xlPlxcclxcbiAgICAgICAgPGFydGljbGU+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtaW1nXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjpwYWxldmlvbGV0cmVkO1xcXCI+PHNwYW4+c2NyZWVuc2hvdCBvZiBwcm9qZWN0PC9zcGFuPjxpbWcgYWx0PVxcXCJTY3JlZW5zaG90IG9mIGEgcHJvamVjdFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGgzPlByb2plY3QgTmFtZTwvaDM+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1saW5rXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCI+PGltZyBzcmM9XFxcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9naXRodWIvZ2l0aHViLW9yaWdpbmFsLnN2Z1xcXCIgLz48L2E+XFxyXFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiPjxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCIgYWx0PVxcXCJvcGVuIGluIG5ldyB0YWJcXFwiPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8cD5TaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdC4gSnVzdCBhIGNvdXBsZSBvZiBzZW50ZW5jZXMgd2lsbCBkbzwvcD5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2FydGljbGU+XFxyXFxuICAgICAgICA8YXJ0aWNsZT5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1pbWdcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOmNvcm5mbG93ZXJibHVlO1xcXCI+PHNwYW4+c2NyZWVuc2hvdCBvZiBwcm9qZWN0PC9zcGFuPjxpbWcgYWx0PVxcXCJTY3JlZW5zaG90IG9mIGEgcHJvamVjdFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGgzPlByb2plY3QgTmFtZTwvaDM+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1saW5rXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCI+PGltZyBzcmM9XFxcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9naXRodWIvZ2l0aHViLW9yaWdpbmFsLnN2Z1xcXCIgLz48L2E+XFxyXFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiPjxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCIgYWx0PVxcXCJvcGVuIGluIG5ldyB0YWJcXFwiPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8cD5TaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdC4gSnVzdCBhIGNvdXBsZSBvZiBzZW50ZW5jZXMgd2lsbCBkbzwvcD5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2FydGljbGU+XFxyXFxuICAgICAgICA8YXJ0aWNsZT5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1pbWdcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnNlYWdyZWVuO1xcXCI+PHNwYW4+c2NyZWVuc2hvdCBvZiBwcm9qZWN0PC9zcGFuPjxpbWcgYWx0PVxcXCJTY3JlZW5zaG90IG9mIGEgcHJvamVjdFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGgzPlByb2plY3QgTmFtZTwvaDM+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1saW5rXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCI+PGltZyBzcmM9XFxcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9naXRodWIvZ2l0aHViLW9yaWdpbmFsLnN2Z1xcXCIgLz48L2E+XFxyXFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiPjxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCIgYWx0PVxcXCJvcGVuIGluIG5ldyB0YWJcXFwiPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8cD5TaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdC4gSnVzdCBhIGNvdXBsZSBvZiBzZW50ZW5jZXMgd2lsbCBkbzwvcD5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2FydGljbGU+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvc2VjdGlvbj5cXHJcXG4gIDwvbWFpbj5cXHJcXG4gIDxmb290ZXI+XFxyXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJjb250YWN0XFxcIj5cXHJcXG4gICAgICA8aDI+Q29udGFjdCBNZTwvaDI+XFxyXFxuICAgICAgPHA+UGxlYXNlIGdldCBpbiB0b3VjaCBpZiB5b3UgdGhpbmsgb3VyIHdvcmsgY291bGQgYmUgbXV0dWFsbHkgYmVuZWZpY2lhbCE8L3A+XFxyXFxuICAgICAgPGFkZHJlc3M+XFxyXFxuICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAxMjM0IFJhbmRvbSBSb2FkIDxicj5cXHJcXG4gICAgICAgICAgUmFuZG9tIFRvd24sIENhbGlmb3JuaWEgMTIzNDVcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgPGRpdj48aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zX19fICsgXCJcXFwiIGFsdD1cXFwiXFxcIj41NTUtNTU1LTU1NTwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2PjxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzRfX18gKyBcIlxcXCIgYWx0PVxcXCJcXFwiPjxhIHNyYz1cXFwibWFpbHRvOmFzaGxleXdpbGxpYW1zLmlzLm5vdC5yZWFsQGdtYWlsLmNvbVxcXCI+YXNobGV5d2lsbGlhbXMuaXMubm90LnJlYWxAZ21haWwuY29tPC9hPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiPjxpbWcgc3JjPVxcXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvZ2l0aHViL2dpdGh1Yi1vcmlnaW5hbC5zdmdcXFwiIC8+PC9hPlxcclxcbiAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiPjxpbWcgc3JjPVxcXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvbGlua2VkaW4vbGlua2VkaW4tb3JpZ2luYWwuc3ZnXFxcIiAvPjwvYT5cXHJcXG4gICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIj48aW1nIHNyYz1cXFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL3R3aXR0ZXIvdHdpdHRlci1vcmlnaW5hbC5zdmdcXFwiIC8+PC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9hZGRyZXNzPlxcclxcbiAgICA8L3NlY3Rpb24+XFxyXFxuICAgIDxpbWcgY2xhc3M9XFxcImZvb3Rlci1pbWdcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiIGFsdD1cXFwiXFxcIj5cXHJcXG4gIDwvZm9vdGVyPlxcclxcbjwvYm9keT5cXHJcXG48L2h0bWw+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuICBpZiAob3B0aW9ucy5tYXliZU5lZWRRdW90ZXMgJiYgL1tcXHRcXG5cXGZcXHIgXCInPTw+YF0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vaW5kZXguaHRtbCc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==