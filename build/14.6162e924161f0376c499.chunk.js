(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[14],{

/***/ "df852b79991469f7a807":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ NotFound; });

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__("8af190b70a6bc55c6f1b");

// EXTERNAL MODULE: ./node_modules/react-intl/lib/index.es.js + 1 modules
var index_es = __webpack_require__("ab039aecd4a1d4fedc0e");

// CONCATENATED MODULE: ./app/containers/NotFoundPage/messages.ts

var scope = 'app.containers.NotFoundPage';
/* harmony default export */ var messages = (Object(index_es["defineMessages"])({
  header: {
    id: "".concat(scope, ".header"),
    defaultMessage: 'This is the NotFoundPage container!'
  }
}));
// CONCATENATED MODULE: ./app/containers/NotFoundPage/index.tsx



function NotFound() {
  return react["createElement"]("article", null, react["createElement"]("h1", null, react["createElement"](index_es["FormattedMessage"], Object.assign({}, messages.header))));
}

/***/ })

}]);