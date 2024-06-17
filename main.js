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
  --bg-color: #0891b2;
}

* {
  margin: 0;
  padding: 0;
}

body {
  font-family: Roboto, serif;
  display: flex;
  flex-direction: column;
}

h1,
h2,
h3 {
  font-family: Playfair Display, serif;
  font-weight: 400;
}

h2 {
  text-align: center;
  font-size: 2rem;
  margin: 1rem 0rem;
}

a {
  color: inherit;
  text-decoration: none;
}

main,
.about {
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

header div {
  position: relative;
  transform: translate(-1rem, -1rem);
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
  transform: translate(-50%, -100%);
  color: white;
  min-width: min-content;
  text-shadow: 1px 2px 5px rgb(100, 100, 100);
  font-size: 14vw;
  letter-spacing: 0.2rem;
}

/* About Me */
.about > p,
header section p {
  color: #565656;
}

.about div:last-of-type {
  width: max-content;
  margin: 1rem auto;
}

.about a > img,
footer a > img {
  width: 2.5rem;
  height: 2.5rem;
  margin: 0 1rem;
}

header div:last-child {
  display: none;
  width: 1rem;
  height: 1rem;
}

header div:last-child img {
  width: 1.5rem;
  height: 1.5rem;
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

.project-link {
  float: right;
}

.project-link img {
  width: 1rem;
  height: 1rem;
  margin: 0px 0.1rem;
}

.work > div {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(190.2px, 1fr));
  gap: 2rem;
}

.project-content {
  padding: 1rem 1rem 2rem 1rem;
  box-shadow: 3px 3px 10px rgba(128, 128, 128, 0.5);
  font-size: 0.8rem;
}
.project-img {
  min-width: 190.2px;
  height: 200px;
  position: relative;
}

.project-img span {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-60%, -60%);
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
  align-items: start;
}

.contact > address > div {
  margin: 2rem 0rem;
  font-size: 0.8rem;
}

footer > section > p {
  font-size: 1rem;
  max-width: 80vw;
}

footer img {
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

address > div:last-child img {
  width: 1.5rem;
  height: 1.5rem;
}

@media screen and (min-width: 480px) {
  /* Header */
  header div img {
    width: 32vw;
    height: 40vw;
  }

  header img {
    object-fit: cover;
    float: left;
  }

  header h1 {
    position: absolute;
    top: 0%;
    left: 0%;
    font-size: 2rem;
    width: max-content;
    letter-spacing: 0;
    transform: translate(35vw, 50%);
  }

  .about {
    display: none;
  }

  .work h2 {
    text-align: start;
  }

  /* Footer */
  footer {
    padding: 1rem 0rem;
  }
  footer h2 {
    margin-top: 0;
    text-align: start;
  }

  .contact {
    width: 50vw;
  }

  footer img {
    width: 30vw;
    height: auto;
    margin: 2rem 0;
    margin: auto 0;
  }

  .contact address div:nth-child(2) img {
    display: inline-block;
    margin-right: 0.1rem;
  }
}

@media screen and (min-width: 720px) {
  .contact {
    width: 32vw;
  }

  footer img {
    width: 45vw;
    max-height: 18rem;
  }

  header div:last-child {
    float: right;
    padding-top: 1rem;
    padding-bottom: 1rem;
    gap: 1rem;
    margin-right: 2rem;
    display: flex;
    justify-content: center;
  }

  header h1 {
    position: absolute;
    font-size: 1.8rem;
    width: max-content;
    letter-spacing: 0;
    display: inline-block;
    --x-offset: calc(16vw - 100px);
    --y-offset: calc(40vw - 100%);
    transform: translate(var(--x-offset), var(--y-offset));
  }
}
`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["/* Import Roboto */\r\n@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\r\n\r\n/* Import Playfair Display */\r\n@import url(\"https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap\");\r\n\r\n:root {\r\n  --bg-color: #0891b2;\r\n}\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\nbody {\r\n  font-family: Roboto, serif;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\nh1,\r\nh2,\r\nh3 {\r\n  font-family: Playfair Display, serif;\r\n  font-weight: 400;\r\n}\r\n\r\nh2 {\r\n  text-align: center;\r\n  font-size: 2rem;\r\n  margin: 1rem 0rem;\r\n}\r\n\r\na {\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\nmain,\r\n.about {\r\n  padding: 2vh 8vw;\r\n}\r\n\r\n/* Header */\r\n\r\nheader {\r\n  padding: 8vw 8vw;\r\n  background: linear-gradient(150deg, var(--bg-color) 55%, white 55%);\r\n}\r\n\r\nheader img {\r\n  width: 100%;\r\n  height: auto;\r\n}\r\n\r\nheader div {\r\n  position: relative;\r\n  transform: translate(-1rem, -1rem);\r\n}\r\n\r\nheader section {\r\n  margin-top: 5rem;\r\n  background-color: white;\r\n  box-shadow: 3px 3px 10px rgba(128, 128, 128, 0.5);\r\n  padding: 2rem 1rem;\r\n}\r\n\r\nh1 {\r\n  position: absolute;\r\n  top: 100%;\r\n  left: 50%;\r\n  transform: translate(-50%, -100%);\r\n  color: white;\r\n  min-width: min-content;\r\n  text-shadow: 1px 2px 5px rgb(100, 100, 100);\r\n  font-size: 14vw;\r\n  letter-spacing: 0.2rem;\r\n}\r\n\r\n/* About Me */\r\n.about > p,\r\nheader section p {\r\n  color: #565656;\r\n}\r\n\r\n.about div:last-of-type {\r\n  width: max-content;\r\n  margin: 1rem auto;\r\n}\r\n\r\n.about a > img,\r\nfooter a > img {\r\n  width: 2.5rem;\r\n  height: 2.5rem;\r\n  margin: 0 1rem;\r\n}\r\n\r\nheader div:last-child {\r\n  display: none;\r\n  width: 1rem;\r\n  height: 1rem;\r\n}\r\n\r\nheader div:last-child img {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n}\r\n\r\n/* My Work */\r\n.project-img img {\r\n  display: none;\r\n}\r\n\r\n.work article h3 {\r\n  display: inline-block;\r\n  font-size: 1rem;\r\n  font-weight: 500;\r\n  margin-left: 1rem;\r\n  margin-bottom: 0.5rem;\r\n}\r\n\r\n.project-link {\r\n  float: right;\r\n}\r\n\r\n.project-link img {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  margin: 0px 0.1rem;\r\n}\r\n\r\n.work > div {\r\n  display: grid;\r\n  grid-template-columns: repeat(auto-fill, minmax(190.2px, 1fr));\r\n  gap: 2rem;\r\n}\r\n\r\n.project-content {\r\n  padding: 1rem 1rem 2rem 1rem;\r\n  box-shadow: 3px 3px 10px rgba(128, 128, 128, 0.5);\r\n  font-size: 0.8rem;\r\n}\r\n.project-img {\r\n  min-width: 190.2px;\r\n  height: 200px;\r\n  position: relative;\r\n}\r\n\r\n.project-img span {\r\n  position: absolute;\r\n  top: 50%;\r\n  left: 50%;\r\n  transform: translate(-60%, -60%);\r\n  color: white;\r\n  font-size: 1.5rem;\r\n  letter-spacing: 0.1rem;\r\n  font-family: Playfair Display;\r\n  font-weight: 500;\r\n}\r\n\r\n/* Footer */\r\nfooter {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-evenly;\r\n  background-color: var(--bg-color);\r\n  color: white;\r\n  margin-top: 4rem;\r\n  align-items: start;\r\n}\r\n\r\n.contact > address > div {\r\n  margin: 2rem 0rem;\r\n  font-size: 0.8rem;\r\n}\r\n\r\nfooter > section > p {\r\n  font-size: 1rem;\r\n  max-width: 80vw;\r\n}\r\n\r\nfooter img {\r\n  width: 100%;\r\n  height: auto;\r\n  object-fit: cover;\r\n  object-position: 50% 30%;\r\n}\r\n\r\n.contact address div:nth-child(2) img {\r\n  display: none;\r\n  width: 1rem;\r\n  height: 1rem;\r\n}\r\n\r\naddress > div:last-child {\r\n  width: max-content;\r\n  margin: 1rem auto;\r\n}\r\n\r\naddress > div:last-child img {\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n}\r\n\r\n@media screen and (min-width: 480px) {\r\n  /* Header */\r\n  header div img {\r\n    width: 32vw;\r\n    height: 40vw;\r\n  }\r\n\r\n  header img {\r\n    object-fit: cover;\r\n    float: left;\r\n  }\r\n\r\n  header h1 {\r\n    position: absolute;\r\n    top: 0%;\r\n    left: 0%;\r\n    font-size: 2rem;\r\n    width: max-content;\r\n    letter-spacing: 0;\r\n    transform: translate(35vw, 50%);\r\n  }\r\n\r\n  .about {\r\n    display: none;\r\n  }\r\n\r\n  .work h2 {\r\n    text-align: start;\r\n  }\r\n\r\n  /* Footer */\r\n  footer {\r\n    padding: 1rem 0rem;\r\n  }\r\n  footer h2 {\r\n    margin-top: 0;\r\n    text-align: start;\r\n  }\r\n\r\n  .contact {\r\n    width: 50vw;\r\n  }\r\n\r\n  footer img {\r\n    width: 30vw;\r\n    height: auto;\r\n    margin: 2rem 0;\r\n    margin: auto 0;\r\n  }\r\n\r\n  .contact address div:nth-child(2) img {\r\n    display: inline-block;\r\n    margin-right: 0.1rem;\r\n  }\r\n}\r\n\r\n@media screen and (min-width: 720px) {\r\n  .contact {\r\n    width: 32vw;\r\n  }\r\n\r\n  footer img {\r\n    width: 45vw;\r\n    max-height: 18rem;\r\n  }\r\n\r\n  header div:last-child {\r\n    float: right;\r\n    padding-top: 1rem;\r\n    padding-bottom: 1rem;\r\n    gap: 1rem;\r\n    margin-right: 2rem;\r\n    display: flex;\r\n    justify-content: center;\r\n  }\r\n\r\n  header h1 {\r\n    position: absolute;\r\n    font-size: 1.8rem;\r\n    width: max-content;\r\n    letter-spacing: 0;\r\n    display: inline-block;\r\n    --x-offset: calc(16vw - 100px);\r\n    --y-offset: calc(40vw - 100%);\r\n    transform: translate(var(--x-offset), var(--y-offset));\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
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
var code = "<!DOCTYPE html>\r\n<html lang=\"en\">\r\n  <head>\r\n    <meta charset=\"UTF-8\" />\r\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\r\n    <link rel=\"stylesheet\" href=\"" + ___HTML_LOADER_REPLACEMENT_0___ + "\" />\r\n    <title>Homepage</title>\r\n  </head>\r\n\r\n  <body>\r\n    <header>\r\n      <div>\r\n        <img src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"test\" />\r\n        <h1>Ashley Williams</h1>\r\n      </div>\r\n      <section>\r\n        <h2>About Me</h2>\r\n        <p>\r\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae\r\n          dolore necessitatibus laudantium asperiores aliquid ullam doloremque\r\n          itaque dicta suscipit eius obcaecati ex atque, saepe aliquam soluta in\r\n          ad voluptatem possimus, officia quas quos. Aliquid ut nihil rerum\r\n          beatae harum quod modi sed? Magni non expedita quam nostrum nam\r\n          assumenda ipsa! Lorem, ipsum dolor sit amet consectetur adipisicing\r\n          elit. Harum iure ipsa excepturi, pariatur possimus dolores deserunt\r\n          officia voluptas aperiam. Cupiditate deserunt tenetur dolores\r\n          officiis, laboriosam sequi maiores incidunt? Accusamus, corporis!\r\n        </p>\r\n        <div>\r\n          <a href=\"\"\r\n            ><img\r\n              src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\"\r\n          /></a>\r\n          <a href=\"\"\r\n            ><img\r\n              src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg\"\r\n          /></a>\r\n          <a href=\"\"\r\n            ><img\r\n              src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg\"\r\n          /></a>\r\n        </div>\r\n      </section>\r\n    </header>\r\n    <main>\r\n      <section class=\"about\">\r\n        <h2>About Me</h2>\r\n        <p>\r\n          Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae\r\n          dolore necessitatibus laudantium asperiores aliquid ullam doloremque\r\n          itaque dicta suscipit eius obcaecati ex atque, saepe aliquam soluta in\r\n          ad voluptatem possimus, officia quas quos. Aliquid ut nihil rerum\r\n          beatae harum quod modi sed? Magni non expedita quam nostrum nam\r\n          assumenda ipsa!\r\n        </p>\r\n        <div>\r\n          <a href=\"\"\r\n            ><img\r\n              src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\"\r\n          /></a>\r\n          <a href=\"\"\r\n            ><img\r\n              src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg\"\r\n          /></a>\r\n          <a href=\"\"\r\n            ><img\r\n              src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg\"\r\n          /></a>\r\n        </div>\r\n      </section>\r\n      <section class=\"work\">\r\n        <h2>My Work</h2>\r\n        <div>\r\n          <article>\r\n            <div class=\"project-img\" style=\"background-color: tomato\">\r\n              <span>screenshot of project</span\r\n              ><img alt=\"Screenshot of a project\" />\r\n            </div>\r\n            <div class=\"project-content\">\r\n              <h3>Project Name</h3>\r\n              <div class=\"project-link\">\r\n                <a href=\"\"\r\n                  ><img\r\n                    src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\"\r\n                /></a>\r\n                <a href=\"\"\r\n                  ><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"open in new tab\"\r\n                /></a>\r\n              </div>\r\n              <p>\r\n                Short description of the project. Just a couple of sentences\r\n                will do\r\n              </p>\r\n            </div>\r\n          </article>\r\n          <article>\r\n            <div class=\"project-img\" style=\"background-color: mediumpurple\">\r\n              <span>screenshot of project</span\r\n              ><img alt=\"Screenshot of a project\" />\r\n            </div>\r\n            <div class=\"project-content\">\r\n              <h3>Project Name</h3>\r\n              <div class=\"project-link\">\r\n                <a href=\"\"\r\n                  ><img\r\n                    src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\"\r\n                /></a>\r\n                <a href=\"\"\r\n                  ><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"open in new tab\"\r\n                /></a>\r\n              </div>\r\n              <p>\r\n                Short description of the project. Just a couple of sentences\r\n                will do\r\n              </p>\r\n            </div>\r\n          </article>\r\n          <article>\r\n            <div class=\"project-img\" style=\"background-color: orange\">\r\n              <span>screenshot of project</span\r\n              ><img alt=\"Screenshot of a project\" />\r\n            </div>\r\n            <div class=\"project-content\">\r\n              <h3>Project Name</h3>\r\n              <div class=\"project-link\">\r\n                <a href=\"\"\r\n                  ><img\r\n                    src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\"\r\n                /></a>\r\n                <a href=\"\"\r\n                  ><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"open in new tab\"\r\n                /></a>\r\n              </div>\r\n              <p>\r\n                Short description of the project. Just a couple of sentences\r\n                will do\r\n              </p>\r\n            </div>\r\n          </article>\r\n          <article>\r\n            <div class=\"project-img\" style=\"background-color: palevioletred\">\r\n              <span>screenshot of project</span\r\n              ><img alt=\"Screenshot of a project\" />\r\n            </div>\r\n            <div class=\"project-content\">\r\n              <h3>Project Name</h3>\r\n              <div class=\"project-link\">\r\n                <a href=\"\"\r\n                  ><img\r\n                    src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\"\r\n                /></a>\r\n                <a href=\"\"\r\n                  ><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"open in new tab\"\r\n                /></a>\r\n              </div>\r\n              <p>\r\n                Short description of the project. Just a couple of sentences\r\n                will do\r\n              </p>\r\n            </div>\r\n          </article>\r\n          <article>\r\n            <div class=\"project-img\" style=\"background-color: cornflowerblue\">\r\n              <span>screenshot of project</span\r\n              ><img alt=\"Screenshot of a project\" />\r\n            </div>\r\n            <div class=\"project-content\">\r\n              <h3>Project Name</h3>\r\n              <div class=\"project-link\">\r\n                <a href=\"\"\r\n                  ><img\r\n                    src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\"\r\n                /></a>\r\n                <a href=\"\"\r\n                  ><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"open in new tab\"\r\n                /></a>\r\n              </div>\r\n              <p>\r\n                Short description of the project. Just a couple of sentences\r\n                will do\r\n              </p>\r\n            </div>\r\n          </article>\r\n          <article>\r\n            <div class=\"project-img\" style=\"background-color: seagreen\">\r\n              <span>screenshot of project</span\r\n              ><img alt=\"Screenshot of a project\" />\r\n            </div>\r\n            <div class=\"project-content\">\r\n              <h3>Project Name</h3>\r\n              <div class=\"project-link\">\r\n                <a href=\"\"\r\n                  ><img\r\n                    src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\"\r\n                /></a>\r\n                <a href=\"\"\r\n                  ><img src=\"" + ___HTML_LOADER_REPLACEMENT_2___ + "\" alt=\"open in new tab\"\r\n                /></a>\r\n              </div>\r\n              <p>\r\n                Short description of the project. Just a couple of sentences\r\n                will do\r\n              </p>\r\n            </div>\r\n          </article>\r\n        </div>\r\n      </section>\r\n    </main>\r\n    <footer>\r\n      <section class=\"contact\">\r\n        <h2>Contact Me</h2>\r\n        <p>\r\n          Please get in touch if you think our work could be mutually\r\n          beneficial!\r\n        </p>\r\n        <address>\r\n          <div>\r\n            1234 Random Road <br />\r\n            Random Town, California 12345\r\n          </div>\r\n          <div>\r\n            <div>\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_3___ + "\" alt=\"\" /><a href=\"tel:+555555555\"\r\n                >555-555-555</a\r\n              >\r\n            </div>\r\n            <div>\r\n              <img src=\"" + ___HTML_LOADER_REPLACEMENT_4___ + "\" alt=\"\" /><a\r\n                href=\"mailto:ashleywilliams.is.not.real@gmail.com\"\r\n                >ashleywilliams.is.not.real@gmail.com</a\r\n              >\r\n            </div>\r\n          </div>\r\n          <div>\r\n            <a href=\"\"\r\n              ><img\r\n                src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg\"\r\n            /></a>\r\n            <a href=\"\"\r\n              ><img\r\n                src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-original.svg\"\r\n            /></a>\r\n            <a href=\"\"\r\n              ><img\r\n                src=\"https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/twitter/twitter-original.svg\"\r\n            /></a>\r\n          </div>\r\n        </address>\r\n      </section>\r\n      <img class=\"footer-img\" src=\"" + ___HTML_LOADER_REPLACEMENT_1___ + "\" alt=\"\" />\r\n    </footer>\r\n  </body>\r\n</html>\r\n";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQzBHO0FBQ2pCO0FBQ3pGLDhCQUE4QixtRkFBMkIsQ0FBQyw0RkFBcUM7QUFDL0Ysc0hBQXNILE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sTUFBTSxNQUFNLE1BQU0sb0JBQW9CO0FBQ3RNLHFJQUFxSSx5QkFBeUI7QUFDOUo7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyx3RkFBd0YsY0FBYyxNQUFNLFlBQVksT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxPQUFPLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxPQUFPLFdBQVcsS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLFdBQVcsWUFBWSxPQUFPLFVBQVUsTUFBTSxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLE9BQU8sVUFBVSxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLE9BQU8sVUFBVSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxPQUFPLFVBQVUsS0FBSyxZQUFZLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsT0FBTyxLQUFL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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDbkZhOztBQUViOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQ2pDYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7O0FDVGE7O0FBRWI7QUFDQTtBQUNBLGNBQWMsS0FBd0MsR0FBRyxzQkFBaUIsR0FBRyxDQUFJO0FBQ2pGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUNUYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2JzQiIsInNvdXJjZXMiOlsid2VicGFjazovL3RlbXBsYXRlLy4vc3JjL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5odG1sIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3RlbXBsYXRlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdGVtcGxhdGUvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90ZW1wbGF0ZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UGxheWZhaXIrRGlzcGxheTppdGFsLHdnaHRAMCw0MDAuLjkwMDsxLDQwMC4uOTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogSW1wb3J0IFJvYm90byAqL1xyXG5cclxuLyogSW1wb3J0IFBsYXlmYWlyIERpc3BsYXkgKi9cclxuXHJcbjpyb290IHtcclxuICAtLWJnLWNvbG9yOiAjMDg5MWIyO1xyXG59XHJcblxyXG4qIHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuYm9keSB7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2VyaWY7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG5oMSxcclxuaDIsXHJcbmgzIHtcclxuICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheSwgc2VyaWY7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxufVxyXG5cclxuaDIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgbWFyZ2luOiAxcmVtIDByZW07XHJcbn1cclxuXHJcbmEge1xyXG4gIGNvbG9yOiBpbmhlcml0O1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxufVxyXG5cclxubWFpbixcclxuLmFib3V0IHtcclxuICBwYWRkaW5nOiAydmggOHZ3O1xyXG59XHJcblxyXG4vKiBIZWFkZXIgKi9cclxuXHJcbmhlYWRlciB7XHJcbiAgcGFkZGluZzogOHZ3IDh2dztcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoMTUwZGVnLCB2YXIoLS1iZy1jb2xvcikgNTUlLCB3aGl0ZSA1NSUpO1xyXG59XHJcblxyXG5oZWFkZXIgaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbmhlYWRlciBkaXYge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtMXJlbSwgLTFyZW0pO1xyXG59XHJcblxyXG5oZWFkZXIgc2VjdGlvbiB7XHJcbiAgbWFyZ2luLXRvcDogNXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpO1xyXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcclxufVxyXG5cclxuaDEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDEwMCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC0xMDAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcclxuICB0ZXh0LXNoYWRvdzogMXB4IDJweCA1cHggcmdiKDEwMCwgMTAwLCAxMDApO1xyXG4gIGZvbnQtc2l6ZTogMTR2dztcclxuICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xyXG59XHJcblxyXG4vKiBBYm91dCBNZSAqL1xyXG4uYWJvdXQgPiBwLFxyXG5oZWFkZXIgc2VjdGlvbiBwIHtcclxuICBjb2xvcjogIzU2NTY1NjtcclxufVxyXG5cclxuLmFib3V0IGRpdjpsYXN0LW9mLXR5cGUge1xyXG4gIHdpZHRoOiBtYXgtY29udGVudDtcclxuICBtYXJnaW46IDFyZW0gYXV0bztcclxufVxyXG5cclxuLmFib3V0IGEgPiBpbWcsXHJcbmZvb3RlciBhID4gaW1nIHtcclxuICB3aWR0aDogMi41cmVtO1xyXG4gIGhlaWdodDogMi41cmVtO1xyXG4gIG1hcmdpbjogMCAxcmVtO1xyXG59XHJcblxyXG5oZWFkZXIgZGl2Omxhc3QtY2hpbGQge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbiAgd2lkdGg6IDFyZW07XHJcbiAgaGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG5oZWFkZXIgZGl2Omxhc3QtY2hpbGQgaW1nIHtcclxuICB3aWR0aDogMS41cmVtO1xyXG4gIGhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4vKiBNeSBXb3JrICovXHJcbi5wcm9qZWN0LWltZyBpbWcge1xyXG4gIGRpc3BsYXk6IG5vbmU7XHJcbn1cclxuXHJcbi53b3JrIGFydGljbGUgaDMge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBmb250LXNpemU6IDFyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBtYXJnaW4tbGVmdDogMXJlbTtcclxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XHJcbn1cclxuXHJcbi5wcm9qZWN0LWxpbmsge1xyXG4gIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuLnByb2plY3QtbGluayBpbWcge1xyXG4gIHdpZHRoOiAxcmVtO1xyXG4gIGhlaWdodDogMXJlbTtcclxuICBtYXJnaW46IDBweCAwLjFyZW07XHJcbn1cclxuXHJcbi53b3JrID4gZGl2IHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE5MC4ycHgsIDFmcikpO1xyXG4gIGdhcDogMnJlbTtcclxufVxyXG5cclxuLnByb2plY3QtY29udGVudCB7XHJcbiAgcGFkZGluZzogMXJlbSAxcmVtIDJyZW0gMXJlbTtcclxuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcbi5wcm9qZWN0LWltZyB7XHJcbiAgbWluLXdpZHRoOiAxOTAuMnB4O1xyXG4gIGhlaWdodDogMjAwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ucHJvamVjdC1pbWcgc3BhbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNjAlLCAtNjAlKTtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMXJlbTtcclxuICBmb250LWZhbWlseTogUGxheWZhaXIgRGlzcGxheTtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG59XHJcblxyXG4vKiBGb290ZXIgKi9cclxuZm9vdGVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1jb2xvcik7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi10b3A6IDRyZW07XHJcbiAgYWxpZ24taXRlbXM6IHN0YXJ0O1xyXG59XHJcblxyXG4uY29udGFjdCA+IGFkZHJlc3MgPiBkaXYge1xyXG4gIG1hcmdpbjogMnJlbSAwcmVtO1xyXG4gIGZvbnQtc2l6ZTogMC44cmVtO1xyXG59XHJcblxyXG5mb290ZXIgPiBzZWN0aW9uID4gcCB7XHJcbiAgZm9udC1zaXplOiAxcmVtO1xyXG4gIG1heC13aWR0aDogODB2dztcclxufVxyXG5cclxuZm9vdGVyIGltZyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gIG9iamVjdC1wb3NpdGlvbjogNTAlIDMwJTtcclxufVxyXG5cclxuLmNvbnRhY3QgYWRkcmVzcyBkaXY6bnRoLWNoaWxkKDIpIGltZyB7XHJcbiAgZGlzcGxheTogbm9uZTtcclxuICB3aWR0aDogMXJlbTtcclxuICBoZWlnaHQ6IDFyZW07XHJcbn1cclxuXHJcbmFkZHJlc3MgPiBkaXY6bGFzdC1jaGlsZCB7XHJcbiAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xyXG59XHJcblxyXG5hZGRyZXNzID4gZGl2Omxhc3QtY2hpbGQgaW1nIHtcclxuICB3aWR0aDogMS41cmVtO1xyXG4gIGhlaWdodDogMS41cmVtO1xyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCkge1xyXG4gIC8qIEhlYWRlciAqL1xyXG4gIGhlYWRlciBkaXYgaW1nIHtcclxuICAgIHdpZHRoOiAzMnZ3O1xyXG4gICAgaGVpZ2h0OiA0MHZ3O1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyIGltZyB7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyIGgxIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMCU7XHJcbiAgICBsZWZ0OiAwJTtcclxuICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzV2dywgNTAlKTtcclxuICB9XHJcblxyXG4gIC5hYm91dCB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuXHJcbiAgLndvcmsgaDIge1xyXG4gICAgdGV4dC1hbGlnbjogc3RhcnQ7XHJcbiAgfVxyXG5cclxuICAvKiBGb290ZXIgKi9cclxuICBmb290ZXIge1xyXG4gICAgcGFkZGluZzogMXJlbSAwcmVtO1xyXG4gIH1cclxuICBmb290ZXIgaDIge1xyXG4gICAgbWFyZ2luLXRvcDogMDtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhY3Qge1xyXG4gICAgd2lkdGg6IDUwdnc7XHJcbiAgfVxyXG5cclxuICBmb290ZXIgaW1nIHtcclxuICAgIHdpZHRoOiAzMHZ3O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiAycmVtIDA7XHJcbiAgICBtYXJnaW46IGF1dG8gMDtcclxuICB9XHJcblxyXG4gIC5jb250YWN0IGFkZHJlc3MgZGl2Om50aC1jaGlsZCgyKSBpbWcge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjFyZW07XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3MjBweCkge1xyXG4gIC5jb250YWN0IHtcclxuICAgIHdpZHRoOiAzMnZ3O1xyXG4gIH1cclxuXHJcbiAgZm9vdGVyIGltZyB7XHJcbiAgICB3aWR0aDogNDV2dztcclxuICAgIG1heC1oZWlnaHQ6IDE4cmVtO1xyXG4gIH1cclxuXHJcbiAgaGVhZGVyIGRpdjpsYXN0LWNoaWxkIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XHJcbiAgICBnYXA6IDFyZW07XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDJyZW07XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICBoZWFkZXIgaDEge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgZm9udC1zaXplOiAxLjhyZW07XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIC0teC1vZmZzZXQ6IGNhbGMoMTZ2dyAtIDEwMHB4KTtcclxuICAgIC0teS1vZmZzZXQ6IGNhbGMoNDB2dyAtIDEwMCUpO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUodmFyKC0teC1vZmZzZXQpLCB2YXIoLS15LW9mZnNldCkpO1xyXG4gIH1cclxufVxyXG5gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsa0JBQWtCOztBQUdsQiw0QkFBNEI7O0FBRzVCO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLDBCQUEwQjtFQUMxQixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBOzs7RUFHRSxvQ0FBb0M7RUFDcEMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2QscUJBQXFCO0FBQ3ZCOztBQUVBOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQSxXQUFXOztBQUVYO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1FQUFtRTtBQUNyRTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0NBQWtDO0FBQ3BDOztBQUVBO0VBQ0Us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dXJjZXNDb250ZW50XCI6W1wiLyogSW1wb3J0IFJvYm90byAqL1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzppdGFsLHdnaHRAMCwxMDA7MCwzMDA7MCw0MDA7MCw1MDA7MCw3MDA7MCw5MDA7MSwxMDA7MSwzMDA7MSw0MDA7MSw1MDA7MSw3MDA7MSw5MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuLyogSW1wb3J0IFBsYXlmYWlyIERpc3BsYXkgKi9cXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1QbGF5ZmFpcitEaXNwbGF5Oml0YWwsd2dodEAwLDQwMC4uOTAwOzEsNDAwLi45MDAmZGlzcGxheT1zd2FwXFxcIik7XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgLS1iZy1jb2xvcjogIzA4OTFiMjtcXHJcXG59XFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNlcmlmO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxufVxcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBQbGF5ZmFpciBEaXNwbGF5LCBzZXJpZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIG1hcmdpbjogMXJlbSAwcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIGNvbG9yOiBpbmhlcml0O1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5tYWluLFxcclxcbi5hYm91dCB7XFxyXFxuICBwYWRkaW5nOiAydmggOHZ3O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIZWFkZXIgKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgcGFkZGluZzogOHZ3IDh2dztcXHJcXG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCgxNTBkZWcsIHZhcigtLWJnLWNvbG9yKSA1NSUsIHdoaXRlIDU1JSk7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBpbWcge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxufVxcclxcblxcclxcbmhlYWRlciBkaXYge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTFyZW0sIC0xcmVtKTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHNlY3Rpb24ge1xcclxcbiAgbWFyZ2luLXRvcDogNXJlbTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcclxcbiAgYm94LXNoYWRvdzogM3B4IDNweCAxMHB4IHJnYmEoMTI4LCAxMjgsIDEyOCwgMC41KTtcXHJcXG4gIHBhZGRpbmc6IDJyZW0gMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAxMDAlO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTEwMCUpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWluLXdpZHRoOiBtaW4tY29udGVudDtcXHJcXG4gIHRleHQtc2hhZG93OiAxcHggMnB4IDVweCByZ2IoMTAwLCAxMDAsIDEwMCk7XFxyXFxuICBmb250LXNpemU6IDE0dnc7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4ycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBYm91dCBNZSAqL1xcclxcbi5hYm91dCA+IHAsXFxyXFxuaGVhZGVyIHNlY3Rpb24gcCB7XFxyXFxuICBjb2xvcjogIzU2NTY1NjtcXHJcXG59XFxyXFxuXFxyXFxuLmFib3V0IGRpdjpsYXN0LW9mLXR5cGUge1xcclxcbiAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgbWFyZ2luOiAxcmVtIGF1dG87XFxyXFxufVxcclxcblxcclxcbi5hYm91dCBhID4gaW1nLFxcclxcbmZvb3RlciBhID4gaW1nIHtcXHJcXG4gIHdpZHRoOiAyLjVyZW07XFxyXFxuICBoZWlnaHQ6IDIuNXJlbTtcXHJcXG4gIG1hcmdpbjogMCAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgZGl2Omxhc3QtY2hpbGQge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG4gIHdpZHRoOiAxcmVtO1xcclxcbiAgaGVpZ2h0OiAxcmVtO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgZGl2Omxhc3QtY2hpbGQgaW1nIHtcXHJcXG4gIHdpZHRoOiAxLjVyZW07XFxyXFxuICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTXkgV29yayAqL1xcclxcbi5wcm9qZWN0LWltZyBpbWcge1xcclxcbiAgZGlzcGxheTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmsgYXJ0aWNsZSBoMyB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDFyZW07XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XFxyXFxufVxcclxcblxcclxcbi5wcm9qZWN0LWxpbmsge1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1saW5rIGltZyB7XFxyXFxuICB3aWR0aDogMXJlbTtcXHJcXG4gIGhlaWdodDogMXJlbTtcXHJcXG4gIG1hcmdpbjogMHB4IDAuMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuLndvcmsgPiBkaXYge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDE5MC4ycHgsIDFmcikpO1xcclxcbiAgZ2FwOiAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1jb250ZW50IHtcXHJcXG4gIHBhZGRpbmc6IDFyZW0gMXJlbSAycmVtIDFyZW07XFxyXFxuICBib3gtc2hhZG93OiAzcHggM3B4IDEwcHggcmdiYSgxMjgsIDEyOCwgMTI4LCAwLjUpO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxufVxcclxcbi5wcm9qZWN0LWltZyB7XFxyXFxuICBtaW4td2lkdGg6IDE5MC4ycHg7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ucHJvamVjdC1pbWcgc3BhbiB7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDUwJTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC02MCUsIC02MCUpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgZm9udC1zaXplOiAxLjVyZW07XFxyXFxuICBsZXR0ZXItc3BhY2luZzogMC4xcmVtO1xcclxcbiAgZm9udC1mYW1pbHk6IFBsYXlmYWlyIERpc3BsYXk7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGb290ZXIgKi9cXHJcXG5mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctY29sb3IpO1xcclxcbiAgY29sb3I6IHdoaXRlO1xcclxcbiAgbWFyZ2luLXRvcDogNHJlbTtcXHJcXG4gIGFsaWduLWl0ZW1zOiBzdGFydDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhY3QgPiBhZGRyZXNzID4gZGl2IHtcXHJcXG4gIG1hcmdpbjogMnJlbSAwcmVtO1xcclxcbiAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciA+IHNlY3Rpb24gPiBwIHtcXHJcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gIG1heC13aWR0aDogODB2dztcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIGltZyB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgb2JqZWN0LXBvc2l0aW9uOiA1MCUgMzAlO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdCBhZGRyZXNzIGRpdjpudGgtY2hpbGQoMikgaW1nIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB3aWR0aDogMXJlbTtcXHJcXG4gIGhlaWdodDogMXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuYWRkcmVzcyA+IGRpdjpsYXN0LWNoaWxkIHtcXHJcXG4gIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gIG1hcmdpbjogMXJlbSBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5hZGRyZXNzID4gZGl2Omxhc3QtY2hpbGQgaW1nIHtcXHJcXG4gIHdpZHRoOiAxLjVyZW07XFxyXFxuICBoZWlnaHQ6IDEuNXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNDgwcHgpIHtcXHJcXG4gIC8qIEhlYWRlciAqL1xcclxcbiAgaGVhZGVyIGRpdiBpbWcge1xcclxcbiAgICB3aWR0aDogMzJ2dztcXHJcXG4gICAgaGVpZ2h0OiA0MHZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgaGVhZGVyIGltZyB7XFxyXFxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xcclxcbiAgICBmbG9hdDogbGVmdDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBoMSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwJTtcXHJcXG4gICAgbGVmdDogMCU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogMDtcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMzV2dywgNTAlKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5hYm91dCB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAud29yayBoMiB7XFxyXFxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogRm9vdGVyICovXFxyXFxuICBmb290ZXIge1xcclxcbiAgICBwYWRkaW5nOiAxcmVtIDByZW07XFxyXFxuICB9XFxyXFxuICBmb290ZXIgaDIge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC5jb250YWN0IHtcXHJcXG4gICAgd2lkdGg6IDUwdnc7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBmb290ZXIgaW1nIHtcXHJcXG4gICAgd2lkdGg6IDMwdnc7XFxyXFxuICAgIGhlaWdodDogYXV0bztcXHJcXG4gICAgbWFyZ2luOiAycmVtIDA7XFxyXFxuICAgIG1hcmdpbjogYXV0byAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLmNvbnRhY3QgYWRkcmVzcyBkaXY6bnRoLWNoaWxkKDIpIGltZyB7XFxyXFxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiAwLjFyZW07XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDcyMHB4KSB7XFxyXFxuICAuY29udGFjdCB7XFxyXFxuICAgIHdpZHRoOiAzMnZ3O1xcclxcbiAgfVxcclxcblxcclxcbiAgZm9vdGVyIGltZyB7XFxyXFxuICAgIHdpZHRoOiA0NXZ3O1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxOHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIGhlYWRlciBkaXY6bGFzdC1jaGlsZCB7XFxyXFxuICAgIGZsb2F0OiByaWdodDtcXHJcXG4gICAgcGFkZGluZy10b3A6IDFyZW07XFxyXFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcclxcbiAgICBnYXA6IDFyZW07XFxyXFxuICAgIG1hcmdpbi1yaWdodDogMnJlbTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBoZWFkZXIgaDEge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS44cmVtO1xcclxcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwO1xcclxcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICAgIC0teC1vZmZzZXQ6IGNhbGMoMTZ2dyAtIDEwMHB4KTtcXHJcXG4gICAgLS15LW9mZnNldDogY2FsYyg0MHZ3IC0gMTAwJSk7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKHZhcigtLXgtb2Zmc2V0KSwgdmFyKC0teS1vZmZzZXQpKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2h0bWwtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL3N0eWxlLmNzc1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0hUTUxfTE9BREVSX0lNUE9SVF8xX19fID0gbmV3IFVSTChcIi4vaW1nL3BleGVscy1zaHZldHNhLXNtbC5qcGdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfMl9fXyA9IG5ldyBVUkwoXCIuL2ltZy9vcGVuLWluLW5ldy5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfM19fXyA9IG5ldyBVUkwoXCIuL2ltZy9waG9uZS5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19IVE1MX0xPQURFUl9JTVBPUlRfNF9fXyA9IG5ldyBVUkwoXCIuL2ltZy9lbWFpbC5zdmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbi8vIE1vZHVsZVxudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8wX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfMV9fXyk7XG52YXIgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyA9IF9fX0hUTUxfTE9BREVSX0dFVF9TT1VSQ0VfRlJPTV9JTVBPUlRfX18oX19fSFRNTF9MT0FERVJfSU1QT1JUXzJfX18pO1xudmFyIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzNfX18gPSBfX19IVE1MX0xPQURFUl9HRVRfU09VUkNFX0ZST01fSU1QT1JUX19fKF9fX0hUTUxfTE9BREVSX0lNUE9SVF8zX19fKTtcbnZhciBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF80X19fID0gX19fSFRNTF9MT0FERVJfR0VUX1NPVVJDRV9GUk9NX0lNUE9SVF9fXyhfX19IVE1MX0xPQURFUl9JTVBPUlRfNF9fXyk7XG52YXIgY29kZSA9IFwiPCFET0NUWVBFIGh0bWw+XFxyXFxuPGh0bWwgbGFuZz1cXFwiZW5cXFwiPlxcclxcbiAgPGhlYWQ+XFxyXFxuICAgIDxtZXRhIGNoYXJzZXQ9XFxcIlVURi04XFxcIiAvPlxcclxcbiAgICA8bWV0YSBuYW1lPVxcXCJ2aWV3cG9ydFxcXCIgY29udGVudD1cXFwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFxcXCIgLz5cXHJcXG4gICAgPGxpbmsgcmVsPVxcXCJzdHlsZXNoZWV0XFxcIiBocmVmPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcXCIgLz5cXHJcXG4gICAgPHRpdGxlPkhvbWVwYWdlPC90aXRsZT5cXHJcXG4gIDwvaGVhZD5cXHJcXG5cXHJcXG4gIDxib2R5PlxcclxcbiAgICA8aGVhZGVyPlxcclxcbiAgICAgIDxkaXY+XFxyXFxuICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8xX19fICsgXCJcXFwiIGFsdD1cXFwidGVzdFxcXCIgLz5cXHJcXG4gICAgICAgIDxoMT5Bc2hsZXkgV2lsbGlhbXM8L2gxPlxcclxcbiAgICAgIDwvZGl2PlxcclxcbiAgICAgIDxzZWN0aW9uPlxcclxcbiAgICAgICAgPGgyPkFib3V0IE1lPC9oMj5cXHJcXG4gICAgICAgIDxwPlxcclxcbiAgICAgICAgICBMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBSZWN1c2FuZGFlXFxyXFxuICAgICAgICAgIGRvbG9yZSBuZWNlc3NpdGF0aWJ1cyBsYXVkYW50aXVtIGFzcGVyaW9yZXMgYWxpcXVpZCB1bGxhbSBkb2xvcmVtcXVlXFxyXFxuICAgICAgICAgIGl0YXF1ZSBkaWN0YSBzdXNjaXBpdCBlaXVzIG9iY2FlY2F0aSBleCBhdHF1ZSwgc2FlcGUgYWxpcXVhbSBzb2x1dGEgaW5cXHJcXG4gICAgICAgICAgYWQgdm9sdXB0YXRlbSBwb3NzaW11cywgb2ZmaWNpYSBxdWFzIHF1b3MuIEFsaXF1aWQgdXQgbmloaWwgcmVydW1cXHJcXG4gICAgICAgICAgYmVhdGFlIGhhcnVtIHF1b2QgbW9kaSBzZWQ/IE1hZ25pIG5vbiBleHBlZGl0YSBxdWFtIG5vc3RydW0gbmFtXFxyXFxuICAgICAgICAgIGFzc3VtZW5kYSBpcHNhISBMb3JlbSwgaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmdcXHJcXG4gICAgICAgICAgZWxpdC4gSGFydW0gaXVyZSBpcHNhIGV4Y2VwdHVyaSwgcGFyaWF0dXIgcG9zc2ltdXMgZG9sb3JlcyBkZXNlcnVudFxcclxcbiAgICAgICAgICBvZmZpY2lhIHZvbHVwdGFzIGFwZXJpYW0uIEN1cGlkaXRhdGUgZGVzZXJ1bnQgdGVuZXR1ciBkb2xvcmVzXFxyXFxuICAgICAgICAgIG9mZmljaWlzLCBsYWJvcmlvc2FtIHNlcXVpIG1haW9yZXMgaW5jaWR1bnQ/IEFjY3VzYW11cywgY29ycG9yaXMhXFxyXFxuICAgICAgICA8L3A+XFxyXFxuICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiXFxyXFxuICAgICAgICAgICAgPjxpbWdcXHJcXG4gICAgICAgICAgICAgIHNyYz1cXFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2dpdGh1Yi9naXRodWItb3JpZ2luYWwuc3ZnXFxcIlxcclxcbiAgICAgICAgICAvPjwvYT5cXHJcXG4gICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIlxcclxcbiAgICAgICAgICAgID48aW1nXFxyXFxuICAgICAgICAgICAgICBzcmM9XFxcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9saW5rZWRpbi9saW5rZWRpbi1vcmlnaW5hbC5zdmdcXFwiXFxyXFxuICAgICAgICAgIC8+PC9hPlxcclxcbiAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiXFxyXFxuICAgICAgICAgICAgPjxpbWdcXHJcXG4gICAgICAgICAgICAgIHNyYz1cXFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL3R3aXR0ZXIvdHdpdHRlci1vcmlnaW5hbC5zdmdcXFwiXFxyXFxuICAgICAgICAgIC8+PC9hPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9zZWN0aW9uPlxcclxcbiAgICA8L2hlYWRlcj5cXHJcXG4gICAgPG1haW4+XFxyXFxuICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcImFib3V0XFxcIj5cXHJcXG4gICAgICAgIDxoMj5BYm91dCBNZTwvaDI+XFxyXFxuICAgICAgICA8cD5cXHJcXG4gICAgICAgICAgTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gUmVjdXNhbmRhZVxcclxcbiAgICAgICAgICBkb2xvcmUgbmVjZXNzaXRhdGlidXMgbGF1ZGFudGl1bSBhc3BlcmlvcmVzIGFsaXF1aWQgdWxsYW0gZG9sb3JlbXF1ZVxcclxcbiAgICAgICAgICBpdGFxdWUgZGljdGEgc3VzY2lwaXQgZWl1cyBvYmNhZWNhdGkgZXggYXRxdWUsIHNhZXBlIGFsaXF1YW0gc29sdXRhIGluXFxyXFxuICAgICAgICAgIGFkIHZvbHVwdGF0ZW0gcG9zc2ltdXMsIG9mZmljaWEgcXVhcyBxdW9zLiBBbGlxdWlkIHV0IG5paGlsIHJlcnVtXFxyXFxuICAgICAgICAgIGJlYXRhZSBoYXJ1bSBxdW9kIG1vZGkgc2VkPyBNYWduaSBub24gZXhwZWRpdGEgcXVhbSBub3N0cnVtIG5hbVxcclxcbiAgICAgICAgICBhc3N1bWVuZGEgaXBzYSFcXHJcXG4gICAgICAgIDwvcD5cXHJcXG4gICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCJcXHJcXG4gICAgICAgICAgICA+PGltZ1xcclxcbiAgICAgICAgICAgICAgc3JjPVxcXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvZ2l0aHViL2dpdGh1Yi1vcmlnaW5hbC5zdmdcXFwiXFxyXFxuICAgICAgICAgIC8+PC9hPlxcclxcbiAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiXFxyXFxuICAgICAgICAgICAgPjxpbWdcXHJcXG4gICAgICAgICAgICAgIHNyYz1cXFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2xpbmtlZGluL2xpbmtlZGluLW9yaWdpbmFsLnN2Z1xcXCJcXHJcXG4gICAgICAgICAgLz48L2E+XFxyXFxuICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCJcXHJcXG4gICAgICAgICAgICA+PGltZ1xcclxcbiAgICAgICAgICAgICAgc3JjPVxcXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvdHdpdHRlci90d2l0dGVyLW9yaWdpbmFsLnN2Z1xcXCJcXHJcXG4gICAgICAgICAgLz48L2E+XFxyXFxuICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICA8L3NlY3Rpb24+XFxyXFxuICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcIndvcmtcXFwiPlxcclxcbiAgICAgICAgPGgyPk15IFdvcms8L2gyPlxcclxcbiAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgPGFydGljbGU+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1pbWdcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiB0b21hdG9cXFwiPlxcclxcbiAgICAgICAgICAgICAgPHNwYW4+c2NyZWVuc2hvdCBvZiBwcm9qZWN0PC9zcGFuXFxyXFxuICAgICAgICAgICAgICA+PGltZyBhbHQ9XFxcIlNjcmVlbnNob3Qgb2YgYSBwcm9qZWN0XFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8aDM+UHJvamVjdCBOYW1lPC9oMz5cXHJcXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtbGlua1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA+PGltZ1xcclxcbiAgICAgICAgICAgICAgICAgICAgc3JjPVxcXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvZ2l0aHViL2dpdGh1Yi1vcmlnaW5hbC5zdmdcXFwiXFxyXFxuICAgICAgICAgICAgICAgIC8+PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgPjxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCIgYWx0PVxcXCJvcGVuIGluIG5ldyB0YWJcXFwiXFxyXFxuICAgICAgICAgICAgICAgIC8+PC9hPlxcclxcbiAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICA8cD5cXHJcXG4gICAgICAgICAgICAgICAgU2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2plY3QuIEp1c3QgYSBjb3VwbGUgb2Ygc2VudGVuY2VzXFxyXFxuICAgICAgICAgICAgICAgIHdpbGwgZG9cXHJcXG4gICAgICAgICAgICAgIDwvcD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPC9hcnRpY2xlPlxcclxcbiAgICAgICAgICA8YXJ0aWNsZT5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWltZ1xcXCIgc3R5bGU9XFxcImJhY2tncm91bmQtY29sb3I6IG1lZGl1bXB1cnBsZVxcXCI+XFxyXFxuICAgICAgICAgICAgICA8c3Bhbj5zY3JlZW5zaG90IG9mIHByb2plY3Q8L3NwYW5cXHJcXG4gICAgICAgICAgICAgID48aW1nIGFsdD1cXFwiU2NyZWVuc2hvdCBvZiBhIHByb2plY3RcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxoMz5Qcm9qZWN0IE5hbWU8L2gzPlxcclxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1saW5rXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgID48aW1nXFxyXFxuICAgICAgICAgICAgICAgICAgICBzcmM9XFxcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9naXRodWIvZ2l0aHViLW9yaWdpbmFsLnN2Z1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgLz48L2E+XFxyXFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA+PGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyArIFwiXFxcIiBhbHQ9XFxcIm9wZW4gaW4gbmV3IHRhYlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgLz48L2E+XFxyXFxuICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgIDxwPlxcclxcbiAgICAgICAgICAgICAgICBTaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdC4gSnVzdCBhIGNvdXBsZSBvZiBzZW50ZW5jZXNcXHJcXG4gICAgICAgICAgICAgICAgd2lsbCBkb1xcclxcbiAgICAgICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICA8L2FydGljbGU+XFxyXFxuICAgICAgICAgIDxhcnRpY2xlPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtaW1nXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxzcGFuPnNjcmVlbnNob3Qgb2YgcHJvamVjdDwvc3BhblxcclxcbiAgICAgICAgICAgICAgPjxpbWcgYWx0PVxcXCJTY3JlZW5zaG90IG9mIGEgcHJvamVjdFxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGgzPlByb2plY3QgTmFtZTwvaDM+XFxyXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWxpbmtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgPjxpbWdcXHJcXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cXFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2dpdGh1Yi9naXRodWItb3JpZ2luYWwuc3ZnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAvPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgID48aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fICsgXCJcXFwiIGFsdD1cXFwib3BlbiBpbiBuZXcgdGFiXFxcIlxcclxcbiAgICAgICAgICAgICAgICAvPjwvYT5cXHJcXG4gICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgPHA+XFxyXFxuICAgICAgICAgICAgICAgIFNob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9qZWN0LiBKdXN0IGEgY291cGxlIG9mIHNlbnRlbmNlc1xcclxcbiAgICAgICAgICAgICAgICB3aWxsIGRvXFxyXFxuICAgICAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDwvYXJ0aWNsZT5cXHJcXG4gICAgICAgICAgPGFydGljbGU+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1pbWdcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiBwYWxldmlvbGV0cmVkXFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxzcGFuPnNjcmVlbnNob3Qgb2YgcHJvamVjdDwvc3BhblxcclxcbiAgICAgICAgICAgICAgPjxpbWcgYWx0PVxcXCJTY3JlZW5zaG90IG9mIGEgcHJvamVjdFxcXCIgLz5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWNvbnRlbnRcXFwiPlxcclxcbiAgICAgICAgICAgICAgPGgzPlByb2plY3QgTmFtZTwvaDM+XFxyXFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJwcm9qZWN0LWxpbmtcXFwiPlxcclxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgPjxpbWdcXHJcXG4gICAgICAgICAgICAgICAgICAgIHNyYz1cXFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2dpdGh1Yi9naXRodWItb3JpZ2luYWwuc3ZnXFxcIlxcclxcbiAgICAgICAgICAgICAgICAvPjwvYT5cXHJcXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgID48aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8yX19fICsgXCJcXFwiIGFsdD1cXFwib3BlbiBpbiBuZXcgdGFiXFxcIlxcclxcbiAgICAgICAgICAgICAgICAvPjwvYT5cXHJcXG4gICAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgICAgPHA+XFxyXFxuICAgICAgICAgICAgICAgIFNob3J0IGRlc2NyaXB0aW9uIG9mIHRoZSBwcm9qZWN0LiBKdXN0IGEgY291cGxlIG9mIHNlbnRlbmNlc1xcclxcbiAgICAgICAgICAgICAgICB3aWxsIGRvXFxyXFxuICAgICAgICAgICAgICA8L3A+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDwvYXJ0aWNsZT5cXHJcXG4gICAgICAgICAgPGFydGljbGU+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1pbWdcXFwiIHN0eWxlPVxcXCJiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZVxcXCI+XFxyXFxuICAgICAgICAgICAgICA8c3Bhbj5zY3JlZW5zaG90IG9mIHByb2plY3Q8L3NwYW5cXHJcXG4gICAgICAgICAgICAgID48aW1nIGFsdD1cXFwiU2NyZWVuc2hvdCBvZiBhIHByb2plY3RcXFwiIC8+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1jb250ZW50XFxcIj5cXHJcXG4gICAgICAgICAgICAgIDxoMz5Qcm9qZWN0IE5hbWU8L2gzPlxcclxcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cXFwicHJvamVjdC1saW5rXFxcIj5cXHJcXG4gICAgICAgICAgICAgICAgPGEgaHJlZj1cXFwiXFxcIlxcclxcbiAgICAgICAgICAgICAgICAgID48aW1nXFxyXFxuICAgICAgICAgICAgICAgICAgICBzcmM9XFxcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy9naXRodWIvZ2l0aHViLW9yaWdpbmFsLnN2Z1xcXCJcXHJcXG4gICAgICAgICAgICAgICAgLz48L2E+XFxyXFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA+PGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfMl9fXyArIFwiXFxcIiBhbHQ9XFxcIm9wZW4gaW4gbmV3IHRhYlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgLz48L2E+XFxyXFxuICAgICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICAgIDxwPlxcclxcbiAgICAgICAgICAgICAgICBTaG9ydCBkZXNjcmlwdGlvbiBvZiB0aGUgcHJvamVjdC4gSnVzdCBhIGNvdXBsZSBvZiBzZW50ZW5jZXNcXHJcXG4gICAgICAgICAgICAgICAgd2lsbCBkb1xcclxcbiAgICAgICAgICAgICAgPC9wPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICA8L2FydGljbGU+XFxyXFxuICAgICAgICAgIDxhcnRpY2xlPlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtaW1nXFxcIiBzdHlsZT1cXFwiYmFja2dyb3VuZC1jb2xvcjogc2VhZ3JlZW5cXFwiPlxcclxcbiAgICAgICAgICAgICAgPHNwYW4+c2NyZWVuc2hvdCBvZiBwcm9qZWN0PC9zcGFuXFxyXFxuICAgICAgICAgICAgICA+PGltZyBhbHQ9XFxcIlNjcmVlbnNob3Qgb2YgYSBwcm9qZWN0XFxcIiAvPlxcclxcbiAgICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtY29udGVudFxcXCI+XFxyXFxuICAgICAgICAgICAgICA8aDM+UHJvamVjdCBOYW1lPC9oMz5cXHJcXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XFxcInByb2plY3QtbGlua1xcXCI+XFxyXFxuICAgICAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCJcXHJcXG4gICAgICAgICAgICAgICAgICA+PGltZ1xcclxcbiAgICAgICAgICAgICAgICAgICAgc3JjPVxcXCJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvZGV2aWNvbnMvZGV2aWNvbkBsYXRlc3QvaWNvbnMvZ2l0aHViL2dpdGh1Yi1vcmlnaW5hbC5zdmdcXFwiXFxyXFxuICAgICAgICAgICAgICAgIC8+PC9hPlxcclxcbiAgICAgICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiXFxyXFxuICAgICAgICAgICAgICAgICAgPjxpbWcgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzJfX18gKyBcIlxcXCIgYWx0PVxcXCJvcGVuIGluIG5ldyB0YWJcXFwiXFxyXFxuICAgICAgICAgICAgICAgIC8+PC9hPlxcclxcbiAgICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgICAgICA8cD5cXHJcXG4gICAgICAgICAgICAgICAgU2hvcnQgZGVzY3JpcHRpb24gb2YgdGhlIHByb2plY3QuIEp1c3QgYSBjb3VwbGUgb2Ygc2VudGVuY2VzXFxyXFxuICAgICAgICAgICAgICAgIHdpbGwgZG9cXHJcXG4gICAgICAgICAgICAgIDwvcD5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgPC9hcnRpY2xlPlxcclxcbiAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgPC9zZWN0aW9uPlxcclxcbiAgICA8L21haW4+XFxyXFxuICAgIDxmb290ZXI+XFxyXFxuICAgICAgPHNlY3Rpb24gY2xhc3M9XFxcImNvbnRhY3RcXFwiPlxcclxcbiAgICAgICAgPGgyPkNvbnRhY3QgTWU8L2gyPlxcclxcbiAgICAgICAgPHA+XFxyXFxuICAgICAgICAgIFBsZWFzZSBnZXQgaW4gdG91Y2ggaWYgeW91IHRoaW5rIG91ciB3b3JrIGNvdWxkIGJlIG11dHVhbGx5XFxyXFxuICAgICAgICAgIGJlbmVmaWNpYWwhXFxyXFxuICAgICAgICA8L3A+XFxyXFxuICAgICAgICA8YWRkcmVzcz5cXHJcXG4gICAgICAgICAgPGRpdj5cXHJcXG4gICAgICAgICAgICAxMjM0IFJhbmRvbSBSb2FkIDxiciAvPlxcclxcbiAgICAgICAgICAgIFJhbmRvbSBUb3duLCBDYWxpZm9ybmlhIDEyMzQ1XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgIDxkaXY+XFxyXFxuICAgICAgICAgICAgICA8aW1nIHNyYz1cXFwiXCIgKyBfX19IVE1MX0xPQURFUl9SRVBMQUNFTUVOVF8zX19fICsgXCJcXFwiIGFsdD1cXFwiXFxcIiAvPjxhIGhyZWY9XFxcInRlbDorNTU1NTU1NTU1XFxcIlxcclxcbiAgICAgICAgICAgICAgICA+NTU1LTU1NS01NTU8L2FcXHJcXG4gICAgICAgICAgICAgID5cXHJcXG4gICAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgICAgPGltZyBzcmM9XFxcIlwiICsgX19fSFRNTF9MT0FERVJfUkVQTEFDRU1FTlRfNF9fXyArIFwiXFxcIiBhbHQ9XFxcIlxcXCIgLz48YVxcclxcbiAgICAgICAgICAgICAgICBocmVmPVxcXCJtYWlsdG86YXNobGV5d2lsbGlhbXMuaXMubm90LnJlYWxAZ21haWwuY29tXFxcIlxcclxcbiAgICAgICAgICAgICAgICA+YXNobGV5d2lsbGlhbXMuaXMubm90LnJlYWxAZ21haWwuY29tPC9hXFxyXFxuICAgICAgICAgICAgICA+XFxyXFxuICAgICAgICAgICAgPC9kaXY+XFxyXFxuICAgICAgICAgIDwvZGl2PlxcclxcbiAgICAgICAgICA8ZGl2PlxcclxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCJcXHJcXG4gICAgICAgICAgICAgID48aW1nXFxyXFxuICAgICAgICAgICAgICAgIHNyYz1cXFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2dpdGh1Yi9naXRodWItb3JpZ2luYWwuc3ZnXFxcIlxcclxcbiAgICAgICAgICAgIC8+PC9hPlxcclxcbiAgICAgICAgICAgIDxhIGhyZWY9XFxcIlxcXCJcXHJcXG4gICAgICAgICAgICAgID48aW1nXFxyXFxuICAgICAgICAgICAgICAgIHNyYz1cXFwiaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL2Rldmljb25zL2Rldmljb25AbGF0ZXN0L2ljb25zL2xpbmtlZGluL2xpbmtlZGluLW9yaWdpbmFsLnN2Z1xcXCJcXHJcXG4gICAgICAgICAgICAvPjwvYT5cXHJcXG4gICAgICAgICAgICA8YSBocmVmPVxcXCJcXFwiXFxyXFxuICAgICAgICAgICAgICA+PGltZ1xcclxcbiAgICAgICAgICAgICAgICBzcmM9XFxcImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC9kZXZpY29ucy9kZXZpY29uQGxhdGVzdC9pY29ucy90d2l0dGVyL3R3aXR0ZXItb3JpZ2luYWwuc3ZnXFxcIlxcclxcbiAgICAgICAgICAgIC8+PC9hPlxcclxcbiAgICAgICAgICA8L2Rpdj5cXHJcXG4gICAgICAgIDwvYWRkcmVzcz5cXHJcXG4gICAgICA8L3NlY3Rpb24+XFxyXFxuICAgICAgPGltZyBjbGFzcz1cXFwiZm9vdGVyLWltZ1xcXCIgc3JjPVxcXCJcIiArIF9fX0hUTUxfTE9BREVSX1JFUExBQ0VNRU5UXzFfX18gKyBcIlxcXCIgYWx0PVxcXCJcXFwiIC8+XFxyXFxuICAgIDwvZm9vdGVyPlxcclxcbiAgPC9ib2R5PlxcclxcbjwvaHRtbD5cXHJcXG5cIjtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IGNvZGU7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVyc2NvcmUtZGFuZ2xlLCBuby1wYXJhbS1yZWFzc2lnblxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG4gIGlmIChvcHRpb25zLm1heWJlTmVlZFF1b3RlcyAmJiAvW1xcdFxcblxcZlxcciBcIic9PD5gXS8udGVzdCh1cmwpKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwsIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9pbmRleC5odG1sJztcclxuaW1wb3J0ICcuL3N0eWxlLmNzcyc7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9