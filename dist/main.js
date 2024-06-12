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
  box-sizing: border-box;
}

/* Header */
header > div:first-child {
  padding: 8vw 8vw;
  box-sizing: border-box;
  background: linear-gradient(145deg, var(--bg-color) 50%, white 50%);
}

header img {
  width: 100%;
  height: auto;
}

header div {
  position: relative;
}

h1 {
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translate(-50%,-125%);
  color: white;
  min-width: min-content;
  text-shadow: 5px 5px 10px rgb(15, 15, 15);
  font-size: 14vw;
  letter-spacing: 0.2rem;
}

/* About Me */
.about > p{
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
  width: min(100%,80vw);
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
  }

  header h1{
    top: 0%;
    left: 50%;
    transform: translate(-1.5%,0%);
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,kBAAkB;;AAGlB,4BAA4B;;AAG5B;EACE,mBAAmB;AACrB;;AAEA;EACE,SAAS;EACT,UAAU;;AAEZ;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,mCAAmC;EACnC,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,eAAe;EACf,iBAAiB;AACnB;AACA;EACE,gBAAgB;EAChB,sBAAsB;AACxB;;AAEA,WAAW;AACX;EACE,gBAAgB;EAChB,sBAAsB;EACtB,mEAAmE;AACrE;;AAEA;EACE,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,SAAS;EACT,gCAAgC;EAChC,YAAY;EACZ,sBAAsB;EACtB,yCAAyC;EACzC,eAAe;EACf,sBAAsB;AACxB;;AAEA,aAAa;AACb;EACE,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,cAAc;AAChB;;AAEA,YAAY;AACZ;EACE,aAAa;AACf;;AAEA;EACE,qBAAqB;EACrB,iBAAiB;EACjB,gBAAgB;EAChB,iBAAiB;EACjB,qBAAqB;AACvB;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,aAAa;EACb,cAAc;EACd,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,4DAA4D;EAC5D,SAAS;AACX;;AAEA;EACE,4BAA4B;EAC5B,iDAAiD;AACnD;AACA;EACE,gBAAgB;EAChB,aAAa;EACb,kBAAkB;AACpB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,+BAA+B;EAC/B,YAAY;EACZ,eAAe;EACf,sBAAsB;EACtB,6BAA6B;EAC7B,gBAAgB;AAClB;;AAEA,WAAW;AACX;EACE,aAAa;EACb,eAAe;EACf,6BAA6B;EAC7B,iCAAiC;EACjC,YAAY;EACZ,gBAAgB;EAChB,SAAS;EACT,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;AACnB;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,qBAAqB;AACvB;;;AAGA;EACE,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,wBAAwB;AAC1B;;;AAGA;EACE,aAAa;EACb,WAAW;EACX,YAAY;AACd;;AAEA;EACE,kBAAkB;EAClB,iBAAiB;AACnB;;;AAGA;EACE,WAAW;EACX;IACE,WAAW;IACX,YAAY;IACZ,iBAAiB;EACnB;;EAEA;IACE,OAAO;IACP,SAAS;IACT,8BAA8B;EAChC;;EAEA,WAAW;EACX;IACE,iBAAiB;EACnB;;EAEA;IACE,WAAW;IACX,kBAAkB;IAClB,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,cAAc;IACd,cAAc;EAChB;;EAEA;IACE,mBAAmB;EACrB;AACF","sourcesContent":["/* Import Roboto */\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\r\n\r\n/* Import Playfair Display */\r\n@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap');\r\n\r\n:root {\r\n  --bg-color: #0891B2;\r\n}\r\n\r\n*{\r\n  margin: 0;\r\n  padding: 0;\r\n\r\n}\r\n\r\nbody {\r\n  font-family: Roboto,serif;\r\n}\r\n\r\nh1, h2, h3{\r\n  font-family: Playfair Display,serif;\r\n  font-weight: 400;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  margin: 1rem 0rem;\r\n}\r\nmain, .about {\r\n  padding: 2vh 8vw;\r\n  box-sizing: border-box;\r\n}\r\n\r\n/* Header */\r\nheader > div:first-child {\r\n  padding: 8vw 8vw;\r\n  box-sizing: border-box;\r\n  background: linear-gradient(145deg, var(--bg-color) 50%, white 50%);\r\n}\r\n\r\nheader img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\nheader div {\r\n  position: relative;\r\n}\r\n\r\nh1 {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 50%;\r\n  transform: translate(-50%,-125%);\r\n  color: white;\r\n  min-width: min-content;\r\n  text-shadow: 5px 5px 10px rgb(15, 15, 15);\r\n  font-size: 14vw;\r\n  letter-spacing: 0.2rem;\r\n}\r\n\r\n/* About Me */\r\n.about > p{\r\n  color: #565656;\r\n}\r\n\r\n.about div:last-of-type{\r\n  width: max-content;\r\n  margin: 1rem auto;\r\n}\r\n\r\n.about a > img, footer a > img {\r\n  width: 2.5rem;\r\n  height: 2.5rem;\r\n  margin: 0 1rem;\r\n}\r\n\r\n/* My Work */\r\n.project-img img {\r\n  display: none;\r\n}\r\n\r\n.work article h3 {\r\n  display: inline-block;\r\n  font-size: 1.2rem;\r\n  font-weight: 500;\r\n  margin-left: 1rem;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.project-link {\r\n  float: right;\r\n}\r\n\r\n.project-link img {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  margin: 0px 0.1rem;\r\n}\r\n\r\n.work > div{\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));\r\n  gap: 2rem;\r\n}\r\n\r\n.project-content {\r\n  padding: 1rem 1rem 2rem 1rem;\r\n  box-shadow: 3px 3px 10px rgba(128, 128, 128, 0.5);\r\n}\r\n.project-img {\r\n  min-width: 250px;\r\n  height: 200px;\r\n  position: relative;\r\n}\r\n\r\n.project-img span {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-60%,-60%);\r\n  color: white;\r\n  font-size: 2rem;\r\n  letter-spacing: 0.1rem;\r\n  font-family: Playfair Display;\r\n  font-weight: 500;\r\n}\r\n\r\n/* Footer */\r\nfooter {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-evenly;\r\n  background-color: var(--bg-color);\r\n  color: white;\r\n  margin-top: 4rem;\r\n  gap: 2rem;\r\n  align-items: start;\r\n}\r\n\r\n.contact > address > div {\r\n  margin: 2rem 0rem;\r\n}\r\n\r\n.contact {\r\n  margin-left: 8vw;\r\n}\r\n\r\nfooter > section > p {\r\n  font-size: 1.2rem;\r\n  width: min(100%,80vw);\r\n}\r\n\r\n\r\nfooter img{\r\n  width: 100%;\r\n  height: auto;\r\n  object-fit: cover;\r\n  object-position: 50% 30%;\r\n}\r\n\r\n\r\n.contact address div:nth-child(2) img {\r\n  display: none;\r\n  width: 1rem;\r\n  height: 1rem;\r\n}\r\n \r\naddress > div:last-child {\r\n  width: max-content;\r\n  margin: 1rem auto;\r\n}\r\n\r\n\r\n@media screen and (min-width: 480px) {\r\n  /* Header */\r\n  header img {\r\n    width: 40vw;\r\n    height: 60vw;\r\n    object-fit: cover;\r\n  }\r\n\r\n  header h1{\r\n    top: 0%;\r\n    left: 50%;\r\n    transform: translate(-1.5%,0%);\r\n  }\r\n\r\n  /* Footer */\r\n  footer h2 {\r\n    text-align: start;\r\n  }\r\n  \r\n  .contact {\r\n    width: 50vw;\r\n    padding: 2rem 0rem;\r\n    box-sizing: border-box;\r\n  }\r\n\r\n  footer img {\r\n    width: 30vw;\r\n    height: auto;\r\n    margin: 2rem 0;\r\n    margin: auto 0;\r\n  }\r\n\r\n  .contact address div:nth-child(2) img {\r\n    visibility: visible;\r\n  }\r\n}"],"sourceRoot":""}]);
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
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n<head>\r\n  <meta charset=\"UTF-8\">\r\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\r\n  <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\">\r\n  <title>Homepage</title>\r\n</head>\r\n<body>\r\n  <header>\r\n    <div>\r\n      <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"test\">\r\n      <h1>Ashley Williams</h1>\r\n    </div>\r\n    <section class=\"about\">\r\n      <h2>About Me</h2>\r\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae dolore necessitatibus laudantium asperiores\r\n        aliquid ullam doloremque itaque dicta suscipit eius obcaecati ex atque, saepe aliquam soluta in ad voluptatem\r\n        possimus, officia quas quos. Aliquid ut nihil rerum beatae harum quod modi sed? Magni non expedita quam nostrum nam\r\n        assumenda ipsa!</p>\r\n        <div>\r\n          <a href=\"\"><img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\" /></a>\r\n          <a href=\"\"><img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg\" /></a>\r\n          <a href=\"\"><img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg\" /></a>\r\n        </div>\r\n    </section>\r\n \r\n  </header>\r\n  <main>\r\n      <section class=\"work\">\r\n      <h2>My Work</h2>\r\n      <div>\r\n        <article>\r\n          <div class=\"project-img\" style=\"background-color:tomato;\"><span>screenshot of project</span><img  alt=\"Screenshot of a project\"></div>\r\n          <div class=\"project-content\">\r\n            <h3>Project Name</h3>\r\n            <div class=\"project-link\">\r\n              <a href=\"\"><img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\" /></a>\r\n              <a href=\"\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"open in new tab\"></a>\r\n            </div>\r\n            <p>Short description of the project. Just a couple of sentences will do</p>\r\n          </div>\r\n        </article>\r\n        <article>\r\n          <div class=\"project-img\" style=\"background-color:mediumpurple;\"><span>screenshot of project</span><img alt=\"Screenshot of a project\"></div>\r\n          <div class=\"project-content\">\r\n            <h3>Project Name</h3>\r\n            <div class=\"project-link\">\r\n              <a href=\"\"><img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\" /></a>\r\n              <a href=\"\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"open in new tab\"></a>\r\n            </div>\r\n            <p>Short description of the project. Just a couple of sentences will do</p>\r\n          </div>\r\n        </article>\r\n        <article>\r\n          <div class=\"project-img\" style=\"background-color:orange;\"><span>screenshot of project</span><img alt=\"Screenshot of a project\"></div>\r\n          <div class=\"project-content\">\r\n            <h3>Project Name</h3>\r\n            <div class=\"project-link\">\r\n              <a href=\"\"><img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\" /></a>\r\n              <a href=\"\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"open in new tab\"></a>\r\n            </div>\r\n            <p>Short description of the project. Just a couple of sentences will do</p>\r\n          </div>\r\n        </article>\r\n        <article>\r\n          <div class=\"project-img\" style=\"background-color:palevioletred;\"><span>screenshot of project</span><img alt=\"Screenshot of a project\"></div>\r\n          <div class=\"project-content\">\r\n            <h3>Project Name</h3>\r\n            <div class=\"project-link\">\r\n              <a href=\"\"><img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\" /></a>\r\n              <a href=\"\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"open in new tab\"></a>\r\n            </div>\r\n            <p>Short description of the project. Just a couple of sentences will do</p>\r\n          </div>\r\n        </article>\r\n        <article>\r\n          <div class=\"project-img\" style=\"background-color:cornflowerblue;\"><span>screenshot of project</span><img alt=\"Screenshot of a project\"></div>\r\n          <div class=\"project-content\">\r\n            <h3>Project Name</h3>\r\n            <div class=\"project-link\">\r\n              <a href=\"\"><img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\" /></a>\r\n              <a href=\"\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"open in new tab\"></a>\r\n            </div>\r\n            <p>Short description of the project. Just a couple of sentences will do</p>\r\n          </div>\r\n        </article>\r\n        <article>\r\n          <div class=\"project-img\" style=\"background-color:seagreen;\"><span>screenshot of project</span><img alt=\"Screenshot of a project\"></div>\r\n          <div class=\"project-content\">\r\n            <h3>Project Name</h3>\r\n            <div class=\"project-link\">\r\n              <a href=\"\"><img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\" /></a>\r\n              <a href=\"\"><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"open in new tab\"></a>\r\n            </div>\r\n            <p>Short description of the project. Just a couple of sentences will do</p>\r\n          </div>\r\n        </article>\r\n      </div>\r\n    </section>\r\n  </main>\r\n  <footer>\r\n    <section class=\"contact\">\r\n      <h2>Contact Me</h2>\r\n      <p>Please get in touch if you think our work could be mutually beneficial!</p>\r\n      <address>\r\n        <div>\r\n          1234 Random Road <br>\r\n          Random Town, California 12345\r\n        </div>\r\n        <div>\r\n          <div><img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\">555-555-555</div>\r\n          <div><img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\"><a src=\"mailto:ashleywilliams.is.not.real@gmail.com\">ashleywilliams.is.not.real@gmail.com</a></div>\r\n        </div>\r\n        <div>\r\n          <a href=\"\"><img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\" /></a>\r\n          <a href=\"\"><img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg\" /></a>\r\n          <a href=\"\"><img src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg\" /></a>\r\n        </div>\r\n      </address>\r\n    </section>\r\n    <img class=\"footer-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\">\r\n  </footer>\r\n</body>\r\n</html>";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysc0hBQXNILE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0JBQW9CO0FBQ3RNLHFJQUFxSSx5QkFBeUI7QUFDOUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLHdGQUF3RixjQUFjLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxVQUFVLEtBQUssWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksT0FBTyxVQUFVLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxPQUFPLFVBQVUsS0FBSyxVQUFVLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxVQUFV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QUNBOzs7Ozs7Ozs7O0FDakNhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0EsY0FBYyxLQUF3QyxHQUFHLHNCQUFpQixHQUFHLENBQUk7QUFDakY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ1RhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsaUZBQWlGO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EseURBQXlEO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0M7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDNURhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDYnNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4Lmh0bWwiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvaHRtbC1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5Oml0YWwsd2dodEAwLDQwMC4uOTAwOzEsNDAwLi45MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiBJbXBvcnQgUm9ib3RvICovXHJcblxyXG4vKiBJbXBvcnQgUGxheWZhaXIgRGlzcGxheSAqL1xyXG5cclxuOnJvb3Qge1xyXG4gIC0tYmctY29sb3I6ICMwODkxQjI7XHJcbn1cclxuXHJcbip7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcblxyXG59XHJcblxyXG5ib2R5IHtcclxuICBmb250LWZhbWlseTogUm9ib3RvLHNlcmlmO1xyXG59XHJcblxyXG5oMSwgaDIsIGgze1xyXG4gIGZvbnQtZmFtaWx5OiBQbGF5ZmFpciBEaXNwbGF5LHNlcmlmO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuXHJcbmgyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAycmVtO1xyXG4gIG1hcmdpbjogMXJlbSAwcmVtO1xyXG59XHJcbm1haW4sIC5hYm91dCB7XHJcbiAgcGFkZGluZzogMnZoIDh2dztcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG59XHJcblxyXG4vKiBIZWFkZXIgKi9cclxuaGVhZGVyID4gZGl2OmZpcnN0LWNoaWxkIHtcclxuICBwYWRkaW5nOiA4dncgOHZ3O1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDE0NWRlZywgdmFyKC0tYmctY29sb3IpIDUwJSwgd2hpdGUgNTAlKTtcclxufVxyXG5cclxuaGVhZGVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG5oZWFkZXIgZGl2IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbmgxIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAxMDAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC0xMjUlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcclxuICB0ZXh0LXNoYWRvdzogNXB4IDVweCAxMHB4IHJnYigxNSwgMTUsIDE1KTtcclxuICBmb250LXNpemU6IDE0dnc7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMnJlbTtcclxufVxyXG5cclxuLyogQWJvdXQgTWUgKi9cclxuLmFib3V0ID4gcHtcclxuICBjb2xvcjogIzU2NTY1NjtcclxufVxyXG5cclxuLmFib3V0IGRpdjpsYXN0LW9mLXR5cGV7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xyXG59XHJcblxyXG4uYWJvdXQgYSA+IGltZywgZm9vdGVyIGEgPiBpbWcge1xyXG4gIHdpZHRoOiAyLjVyZW07XHJcbiAgaGVpZ2h0OiAyLjVyZW07XHJcbiAgbWFyZ2luOiAwIDFyZW07XHJcbn1cclxuXHJcbi8qIE15IFdvcmsgKi9cclxuLnByb2plY3QtaW1nIGltZyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxufVxyXG5cclxuLndvcmsgYXJ0aWNsZSBoMyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XHJcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1saW5rIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpbmsgaW1nIHtcclxuICB3aWR0aDogMS41cmVtO1xyXG4gIGhlaWdodDogMS41cmVtO1xyXG4gIG1hcmdpbjogMHB4IDAuMXJlbTtcclxufVxyXG5cclxuLndvcmsgPiBkaXZ7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgMWZyKSk7XHJcbiAgZ2FwOiAycmVtO1xyXG59XHJcblxyXG4ucHJvamVjdC1jb250ZW50IHtcclxuICBwYWRkaW5nOiAxcmVtIDFyZW0gMnJlbSAxcmVtO1xyXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNSk7XHJcbn1cclxuLnByb2plY3QtaW1nIHtcclxuICBtaW4td2lkdGg6IDI1MHB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJvamVjdC1pbWcgc3BhbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNjAlLC02MCUpO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKiBGb290ZXIgKi9cclxuZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgZ2FwOiAycmVtO1xyXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcclxufVxyXG5cclxuLmNvbnRhY3QgPiBhZGRyZXNzID4gZGl2IHtcclxuICBtYXJnaW46IDJyZW0gMHJlbTtcclxufVxyXG5cclxuLmNvbnRhY3Qge1xyXG4gIG1hcmdpbi1sZWZ0OiA4dnc7XHJcbn1cclxuXHJcbmZvb3RlciA+IHNlY3Rpb24gPiBwIHtcclxuICBmb250LXNpemU6IDEuMnJlbTtcclxuICB3aWR0aDogbWluKDEwMCUsODB2dyk7XHJcbn1cclxuXHJcblxyXG5mb290ZXIgaW1ne1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogYXV0bztcclxuICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICBvYmplY3QtcG9zaXRpb246IDUwJSAzMCU7XHJcbn1cclxuXHJcblxyXG4uY29udGFjdCBhZGRyZXNzIGRpdjpudGgtY2hpbGQoMikgaW1nIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHdpZHRoOiAxcmVtO1xyXG4gIGhlaWdodDogMXJlbTtcclxufVxyXG4gXHJcbmFkZHJlc3MgPiBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xyXG59XHJcblxyXG5cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcclxuICAvKiBIZWFkZXIgKi9cclxuICBoZWFkZXIgaW1nIHtcclxuICAgIHdpZHRoOiA0MHZ3O1xyXG4gICAgaGVpZ2h0OiA2MHZ3O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIgaDF7XHJcbiAgICB0b3A6IDAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEuNSUsMCUpO1xyXG4gIH1cclxuXHJcbiAgLyogRm9vdGVyICovXHJcbiAgZm9vdGVyIGgyIHtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIH1cclxuICBcclxuICAuY29udGFjdCB7XHJcbiAgICB3aWR0aDogNTB2dztcclxuICAgIHBhZGRpbmc6IDJyZW0gMHJlbTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG5cclxuICBmb290ZXIgaW1nIHtcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgICBtYXJnaW46IGF1dG8gMDtcclxuICB9XHJcblxyXG4gIC5jb250YWN0IGFkZHJlc3MgZGl2Om50aC1jaGlsZCgyKSBpbWcge1xyXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxuICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0JBQWtCOztBQUdsQiw0QkFBNEI7O0FBRzVCO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7O0FBRVo7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxtQ0FBbUM7RUFDbkMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixzQkFBc0I7QUFDeEI7O0FBRUEsV0FBVztBQUNYO0VBQ0UsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixtRUFBbUU7QUFDckU7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIseUNBQXlDO0VBQ3pDLGVBQWU7RUFDZixzQkFBc0I7QUFDeEI7O0FBRUEsYUFBYTtBQUNiO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGNBQWM7QUFDaEI7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDREQUE0RDtFQUM1RCxTQUFTO0FBQ1g7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsaURBQWlEO0FBQ25EO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixRQUFRO0VBQ1IsU0FBUztFQUNULCtCQUErQjtFQUMvQixZQUFZO0VBQ1osZUFBZTtFQUNmLHNCQUFzQjtFQUN0Qiw2QkFBNkI7RUFDN0IsZ0JBQWdCO0FBQ2xCOztBQUVBLFdBQVc7QUFDWDtFQUNFLGFBQWE7RUFDYixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLGlDQUFpQztFQUNqQyxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLFNBQVM7RUFDVCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0FBQ3ZCOzs7QUFHQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLHdCQUF3QjtBQUMxQjs7O0FBR0E7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixpQkFBaUI7QUFDbkI7OztBQUdBO0VBQ0UsV0FBVztFQUNYO0lBQ0UsV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxPQUFPO0lBQ1AsU0FBUztJQUNULDhCQUE4QjtFQUNoQzs7RUFFQSxXQUFXO0VBQ1g7SUFDRSxpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLHNCQUFzQjtFQUN4Qjs7RUFFQTtJQUNFLFdBQVc7SUFDWCxZQUFZO0lBQ1osY0FBYztJQUNkLGNBQWM7RUFDaEI7O0VBRUE7SUFDRSxtQkFBbUI7RUFDckI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBJbXBvcnQgUm9ib3RvICovXFxyXFxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOml0YWwsd2dodEAwLDEwMDswLDMwMDswLDQwMDswLDUwMDswLDcwMDswLDkwMDsxLDEwMDsxLDMwMDsxLDQwMDsxLDUwMDsxLDcwMDsxLDkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG4vKiBJbXBvcnQgUGxheWZhaXIgRGlzcGxheSAqL1xcclxcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBsYXlmYWlyK0Rpc3BsYXk6aXRhbCx3Z2h0QDAsNDAwLi45MDA7MSw0MDAuLjkwMCZkaXNwbGF5PXN3YXAnKTtcXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAtLWJnLWNvbG9yOiAjMDg5MUIyO1xcclxcbn1cXHJcXG5cXHJcXG4qe1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICBmb250LWZhbWlseTogUm9ib3RvLHNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5oMSwgaDIsIGgze1xcclxcbiAgZm9udC1mYW1pbHk6IFBsYXlmYWlyIERpc3BsYXksc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LXNpemU6IDJyZW07XFxyXFxuICBtYXJnaW46IDFyZW0gMHJlbTtcXHJcXG59XFxyXFxubWFpbiwgLmFib3V0IHtcXHJcXG4gIHBhZGRpbmc6IDJ2aCA4dnc7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWFkZXIgKi9cXHJcXG5oZWFkZXIgPiBkaXY6Zmlyc3QtY2hpbGQge1xcclxcbiAgcGFkZGluZzogOHZ3IDh2dztcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTQ1ZGVnLCB2YXIoLS1iZy1jb2xvcikgNTAlLCB3aGl0ZSA1MCUpO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgaW1nIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgZGl2IHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxMDAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtMTI1JSk7XFxyXFxuICBjb2xvcjogd2hpdGU7XFxyXFxuICBtaW4td2lkdGg6IG1pbi1jb250ZW50O1xcclxcbiAgdGV4dC1zaGFkb3c6IDVweCA1cHggMTBweCByZ2IoMTUsIDE1LCAxNSk7XFxyXFxuICBmb250LXNpemU6IDE0dnc7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBYm91dCBNZSAqL1xcclxcbi5hYm91dCA+IHB7XFxyXFxuICBjb2xvcjogIzU2NTY1NjtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IGRpdjpsYXN0LW9mLXR5cGV7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICBtYXJnaW46IDFyZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IGEgPiBpbWcsIGZvb3RlciBhID4gaW1nIHtcXHJcXG4gIHdpZHRoOiAyLjVyZW07XFxyXFxuICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gIG1hcmdpbjogMCAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNeSBXb3JrICovXFxyXFxuLnByb2plY3QtaW1nIGltZyB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yayBhcnRpY2xlIGgzIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAxcmVtO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saW5rIHtcXHJcXG4gIGZsb2F0OiByaWdodDtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtbGluayBpbWcge1xcclxcbiAgd2lkdGg6IDEuNXJlbTtcXHJcXG4gIGhlaWdodDogMS41cmVtO1xcclxcbiAgbWFyZ2luOiAwcHggMC4xcmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ud29yayA+IGRpdntcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCgyNTBweCwgMWZyKSk7XFxyXFxuICBnYXA6IDJyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWNvbnRlbnQge1xcclxcbiAgcGFkZGluZzogMXJlbSAxcmVtIDJyZW0gMXJlbTtcXHJcXG4gIGJveC1zaGFkb3c6IDNweCAzcHggMTBweCByZ2JhKDEyOCwgMTI4LCAxMjgsIDAuNSk7XFxyXFxufVxcclxcbi5wcm9qZWN0LWltZyB7XFxyXFxuICBtaW4td2lkdGg6IDI1MHB4O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLnByb2plY3QtaW1nIHNwYW4ge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiA1MCU7XFxyXFxuICBsZWZ0OiA1MCU7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNjAlLC02MCUpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQbGF5ZmFpciBEaXNwbGF5O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRm9vdGVyICovXFxyXFxuZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWNvbG9yKTtcXHJcXG4gIGNvbG9yOiB3aGl0ZTtcXHJcXG4gIG1hcmdpbi10b3A6IDRyZW07XFxyXFxuICBnYXA6IDJyZW07XFxyXFxuICBhbGlnbi1pdGVtczogc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0ID4gYWRkcmVzcyA+IGRpdiB7XFxyXFxuICBtYXJnaW46IDJyZW0gMHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3Qge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDh2dztcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyID4gc2VjdGlvbiA+IHAge1xcclxcbiAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICB3aWR0aDogbWluKDEwMCUsODB2dyk7XFxyXFxufVxcclxcblxcclxcblxcclxcbmZvb3RlciBpbWd7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgMzAlO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4uY29udGFjdCBhZGRyZXNzIGRpdjpudGgtY2hpbGQoMikgaW1nIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB3aWR0aDogMXJlbTtcXHJcXG4gIGhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuIFxcclxcbmFkZHJlc3MgPiBkaXY6bGFzdC1jaGlsZCB7XFxyXFxuICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICBtYXJnaW46IDFyZW0gYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcXHJcXG4gIC8qIEhlYWRlciAqL1xcclxcbiAgaGVhZGVyIGltZyB7XFxyXFxuICAgIHdpZHRoOiA0MHZ3O1xcclxcbiAgICBoZWlnaHQ6IDYwdnc7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIGgxe1xcclxcbiAgICB0b3A6IDAlO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC0xLjUlLDAlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIEZvb3RlciAqL1xcclxcbiAgZm9vdGVyIGgyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gIC5jb250YWN0IHtcXHJcXG4gICAgd2lkdGg6IDUwdnc7XFxyXFxuICAgIHBhZGRpbmc6IDJyZW0gMHJlbTtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGZvb3RlciBpbWcge1xcclxcbiAgICB3aWR0aDogMzB2dztcXHJcXG4gICAgaGVpZ2h0OiBhdXRvO1xcclxcbiAgICBtYXJnaW46IDJyZW0gMDtcXHJcXG4gICAgbWFyZ2luOiBhdXRvIDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAuY29udGFjdCBhZGRyZXNzIGRpdjpudGgtY2hpbGQoMikgaW1nIHtcXHJcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3N0eWxlLmNzc1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL3BleGVscy1zaHZldHNhLXNtbC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9vcGVuLWluLW5ldy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltZy9waG9uZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9lbWFpbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzNfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNF9fXyk7XG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxyXFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcclxcbjxoZWFkPlxcclxcbiAgPG1ldGEgY2hhcnNldD1cXFwiVVRGLThcXFwiPlxcclxcbiAgPG1ldGEgbmFtZT1cXFwidmlld3BvcnRcXFwiIGNvbnRlbnQ9XFxcIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjBcXFwiPlxcclxcbiAgPGxpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiBocmVmPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCI+XFxyXFxuICA8dGl0bGU+SG9tZXBhZ2U8L3RpdGxlPlxcclxcbjwvaGVhZD5cXHJcXG48Ym9keT5cXHJcXG4gIDxoZWFkZXI+XFxyXFxuICAgIDxkaXY+XFxyXFxuICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMV9fXyArIFwiXFxcIiBhbHQ9XFxcInRlc3RcXFwiPlxcclxcbiAgICAgIDxoMT5Bc2hsZXkgV2lsbGlhbXM8L2gxPlxcclxcbiAgICA8L2Rpdj5cXHJcXG4gICAgPHNlY3Rpb24gY2xhc3M9XFxcImFib3V0XFxcIj5cXHJcXG4gICAgICA8aDI+QWJvdXQgTWU8L2gyPlxcclxcbiAgICAgIDxwPkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIFJlY3VzYW5kYWUgZG9sb3JlIG5lY2Vzc2l0YXRpYnVzIGxhdWRhbnRpdW0gYXNwZXJpb3Jlc1xcclxcbiAgICAgICAgYWxpcXVpZCB1bGxhbSBkb2xvcmVtcXVlIGl0YXF1ZSBkaWN0YSBzdXNjaXBpdCBlaXVzIG9iY2FlY2F0aSBleCBhdHF1ZSwgc2FlcGUgYWxpcXVhbSBzb2x1dGEgaW4gYWQgdm9sdXB0YXRlbVxcclxcbiAgICAgICAgcG9zc2ltdXMsIG9mZmljaWEgcXVhcyBxdW9zLiBBbGlxdWlkIHV0IG5paGlsIHJlcnVtIGJlYXRhZSBoYXJ1bSBxdW9kIG1vZGkgc2VkPyBNYWduaSBub24gZXhwZWRpdGEgcXVhbSBub3N0cnVtIG5hbVxcclxcbiAgICAgICAgYXNzdW1lbmRhIGlwc2EhPC9wPlxcclxcbiAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIj48aW1nIHNyYz1cXFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2dpdGh1Yi9naXRodWItb3JpZ2luYWwuc3ZnXFxcIiAvPjwvYT5cXHJcXG4gICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIj48aW1nIHNyYz1cXFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2xpbmtlZGluL2xpbmtlZGluLW9yaWdpbmFsLnN2Z1xcXCIgLz48L2E+XFxyXFxuICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCI+PGltZyBzcmM9XFxcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy90d2l0dGVyL3R3aXR0ZXItb3JpZ2luYWwuc3ZnXFxcIiAvPjwvYT5cXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICA8L3NlY3Rpb24+XFxyXFxuIFxcclxcbiAgPC9oZWFkZXI+XFxyXFxuICA8bWFpbj5cXHJcXG4gICAgICA8c2VjdGlvbiBjbGFzcz1cXFwid29ya1xcXCI+XFxyXFxuICAgICAgPGgyPk15IFdvcms8L2gyPlxcclxcbiAgICAgIDxkaXY+XFxyXFxuICAgICAgICA8YXJ0aWNsZT5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1pbWdcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnRvbWF0bztcXFwiPjxzcGFuPnNjcmVlbnNob3Qgb2YgcHJvamVjdDwvc3Bhbj48aW1nICBhbHQ9XFxcIlNjcmVlbnNob3Qgb2YgYSBwcm9qZWN0XFxcIj48L2Rpdj5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICA8aDM+UHJvamVjdCBOYW1lPC9oMz5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWxpbmtcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIj48aW1nIHNyYz1cXFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2dpdGh1Yi9naXRodWItb3JpZ2luYWwuc3ZnXFxcIiAvPjwvYT5cXHJcXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCI+PGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyArIFwiXFxcIiBhbHQ9XFxcIm9wZW4gaW4gbmV3IHRhYlxcXCI+PC9hPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxwPlNob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9qZWN0LiBKdXN0IGEgY291cGxlIG9mIHNlbnRlbmNlcyB3aWxsIGRvPC9wPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvYXJ0aWNsZT5cXHJcXG4gICAgICAgIDxhcnRpY2xlPlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWltZ1xcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6bWVkaXVtcHVycGxlO1xcXCI+PHNwYW4+c2NyZWVuc2hvdCBvZiBwcm9qZWN0PC9zcGFuPjxpbWcgYWx0PVxcXCJTY3JlZW5zaG90IG9mIGEgcHJvamVjdFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGgzPlByb2plY3QgTmFtZTwvaDM+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1saW5rXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCI+PGltZyBzcmM9XFxcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9naXRodWIvZ2l0aHViLW9yaWdpbmFsLnN2Z1xcXCIgLz48L2E+XFxyXFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiPjxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCIgYWx0PVxcXCJvcGVuIGluIG5ldyB0YWJcXFwiPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8cD5TaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdC4gSnVzdCBhIGNvdXBsZSBvZiBzZW50ZW5jZXMgd2lsbCBkbzwvcD5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2FydGljbGU+XFxyXFxuICAgICAgICA8YXJ0aWNsZT5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1pbWdcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOm9yYW5nZTtcXFwiPjxzcGFuPnNjcmVlbnNob3Qgb2YgcHJvamVjdDwvc3Bhbj48aW1nIGFsdD1cXFwiU2NyZWVuc2hvdCBvZiBhIHByb2plY3RcXFwiPjwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgIDxoMz5Qcm9qZWN0IE5hbWU8L2gzPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtbGlua1xcXCI+XFxyXFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiPjxpbWcgc3JjPVxcXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvZ2l0aHViL2dpdGh1Yi1vcmlnaW5hbC5zdmdcXFwiIC8+PC9hPlxcclxcbiAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIj48aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fICsgXCJcXFwiIGFsdD1cXFwib3BlbiBpbiBuZXcgdGFiXFxcIj48L2E+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPHA+U2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2plY3QuIEp1c3QgYSBjb3VwbGUgb2Ygc2VudGVuY2VzIHdpbGwgZG88L3A+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPC9hcnRpY2xlPlxcclxcbiAgICAgICAgPGFydGljbGU+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtaW1nXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjpwYWxldmlvbGV0cmVkO1xcXCI+PHNwYW4+c2NyZWVuc2hvdCBvZiBwcm9qZWN0PC9zcGFuPjxpbWcgYWx0PVxcXCJTY3JlZW5zaG90IG9mIGEgcHJvamVjdFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGgzPlByb2plY3QgTmFtZTwvaDM+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1saW5rXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCI+PGltZyBzcmM9XFxcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9naXRodWIvZ2l0aHViLW9yaWdpbmFsLnN2Z1xcXCIgLz48L2E+XFxyXFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiPjxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCIgYWx0PVxcXCJvcGVuIGluIG5ldyB0YWJcXFwiPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8cD5TaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdC4gSnVzdCBhIGNvdXBsZSBvZiBzZW50ZW5jZXMgd2lsbCBkbzwvcD5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2FydGljbGU+XFxyXFxuICAgICAgICA8YXJ0aWNsZT5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1pbWdcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOmNvcm5mbG93ZXJibHVlO1xcXCI+PHNwYW4+c2NyZWVuc2hvdCBvZiBwcm9qZWN0PC9zcGFuPjxpbWcgYWx0PVxcXCJTY3JlZW5zaG90IG9mIGEgcHJvamVjdFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGgzPlByb2plY3QgTmFtZTwvaDM+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1saW5rXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCI+PGltZyBzcmM9XFxcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9naXRodWIvZ2l0aHViLW9yaWdpbmFsLnN2Z1xcXCIgLz48L2E+XFxyXFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiPjxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCIgYWx0PVxcXCJvcGVuIGluIG5ldyB0YWJcXFwiPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8cD5TaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdC4gSnVzdCBhIGNvdXBsZSBvZiBzZW50ZW5jZXMgd2lsbCBkbzwvcD5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2FydGljbGU+XFxyXFxuICAgICAgICA8YXJ0aWNsZT5cXHJcXG4gICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1pbWdcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOnNlYWdyZWVuO1xcXCI+PHNwYW4+c2NyZWVuc2hvdCBvZiBwcm9qZWN0PC9zcGFuPjxpbWcgYWx0PVxcXCJTY3JlZW5zaG90IG9mIGEgcHJvamVjdFxcXCI+PC9kaXY+XFxyXFxuICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgPGgzPlByb2plY3QgTmFtZTwvaDM+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1saW5rXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCI+PGltZyBzcmM9XFxcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9naXRodWIvZ2l0aHViLW9yaWdpbmFsLnN2Z1xcXCIgLz48L2E+XFxyXFxuICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiPjxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCIgYWx0PVxcXCJvcGVuIGluIG5ldyB0YWJcXFwiPjwvYT5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8cD5TaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdC4gSnVzdCBhIGNvdXBsZSBvZiBzZW50ZW5jZXMgd2lsbCBkbzwvcD5cXHJcXG4gICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8L2FydGljbGU+XFxyXFxuICAgICAgPC9kaXY+XFxyXFxuICAgIDwvc2VjdGlvbj5cXHJcXG4gIDwvbWFpbj5cXHJcXG4gIDxmb290ZXI+XFxyXFxuICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJjb250YWN0XFxcIj5cXHJcXG4gICAgICA8aDI+Q29udGFjdCBNZTwvaDI+XFxyXFxuICAgICAgPHA+UGxlYXNlIGdldCBpbiB0b3VjaCBpZiB5b3UgdGhpbmsgb3VyIHdvcmsgY291bGQgYmUgbXV0dWFsbHkgYmVuZWZpY2lhbCE8L3A+XFxyXFxuICAgICAgPGFkZHJlc3M+XFxyXFxuICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAxMjM0IFJhbmRvbSBSb2FkIDxicj5cXHJcXG4gICAgICAgICAgUmFuZG9tIFRvd24sIENhbGlmb3JuaWEgMTIzNDVcXHJcXG4gICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgPGRpdj48aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zX19fICsgXCJcXFwiIGFsdD1cXFwiXFxcIj41NTUtNTU1LTU1NTwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2PjxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzRfX18gKyBcIlxcXCIgYWx0PVxcXCJcXFwiPjxhIHNyYz1cXFwibWFpbHRvOmFzaGxleXdpbGxpYW1zLmlzLm5vdC5yZWFsQGdtYWlsLmNvbVxcXCI+YXNobGV5d2lsbGlhbXMuaXMubm90LnJlYWxAZ21haWwuY29tPC9hPjwvZGl2PlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiPjxpbWcgc3JjPVxcXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvZ2l0aHViL2dpdGh1Yi1vcmlnaW5hbC5zdmdcXFwiIC8+PC9hPlxcclxcbiAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiPjxpbWcgc3JjPVxcXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvbGlua2VkaW4vbGlua2VkaW4tb3JpZ2luYWwuc3ZnXFxcIiAvPjwvYT5cXHJcXG4gICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIj48aW1nIHNyYz1cXFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL3R3aXR0ZXIvdHdpdHRlci1vcmlnaW5hbC5zdmdcXFwiIC8+PC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9hZGRyZXNzPlxcclxcbiAgICA8L3NlY3Rpb24+XFxyXFxuICAgIDxpbWcgY2xhc3M9XFxcImZvb3Rlci1pbWdcXFwiIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiIGFsdD1cXFwiXFxcIj5cXHJcXG4gIDwvZm9vdGVyPlxcclxcbjwvYm9keT5cXHJcXG48L2h0bWw+XCI7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBjb2RlOyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlcnNjb3JlLWRhbmdsZSwgbm8tcGFyYW0tcmVhc3NpZ25cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuICBpZiAob3B0aW9ucy5tYXliZU5lZWRRdW90ZXMgJiYgL1tcXHRcXG5cXGZcXHIgXCInPTw+YF0vLnRlc3QodXJsKSkge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4vaW5kZXguaHRtbCc7XHJcbmltcG9ydCAnLi9zdHlsZS5jc3MnOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==