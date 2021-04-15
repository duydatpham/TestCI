(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "646d4543822158abdb74":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LoginPage; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8af190b70a6bc55c6f1b");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("fc43733ec9d3f066c334");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9b138a15514959aa8913");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("8113359511cd270e25e9");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("85b71a27cbcf93ff4854");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("d7f9c90bb9eec3ae4c76");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("1b4947d16bbaf85cb8db");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("043737a9f76d0e1c02ad");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("8fc0c6ca761d160560c9");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("73c491490691b18f8f8a");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("a11eacdcf2a3861858dc");
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("776f7b15d44f70e7504d");
/* harmony import */ var _images_logo_svg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_logo_svg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _common_AppStyle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("23fe7c4c131f6fb8bfb8");
/* harmony import */ var _common_AppColor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("d2b2b5e875bbe9306ec9");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("767229687deaf722fc6b");
/* harmony import */ var _material_ui_icons__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("0dd0d4c406f3d424ca7a");
/* harmony import */ var _material_ui_core_Input__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("e3a54599fd664b8f46cc");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("42993e61ed154f509e4c");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(function (theme) {
  return {
    root: {
      margin: 'auto',
      padding: 0
    },
    imgLogo: {
      display: 'flex',
      paddingTop: 60
    },
    dflex: {
      display: 'flex'
    },
    loginMain: {
      backgroundColor: _common_AppColor__WEBPACK_IMPORTED_MODULE_13__[/* default */ "a"].mainColor,
      padding: '16px 0px',
      marginTop: '20px'
    },
    btnLogin: {
      margin: 'auto',
      padding: '8px 22px',
      marginTop: 40
    },
    account: {
      display: 'flex',
      padding: '30px 25px 0px 25px',
      justifyContent: 'space-around'
    },
    flex1: {
      flex: 1
    },
    footer: {
      position: 'absolute',
      bottom: 0,
      width: '100%',
      left: 0,
      textAlign: 'center'
    }
  };
});
function LoginPage() {
  var classes = useStyles();
  var classesApp = Object(_common_AppStyle__WEBPACK_IMPORTED_MODULE_12__[/* default */ "a"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__["useState"]({
    showPassword: false,
    password: ''
  }),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      values = _React$useState2[0],
      setValues = _React$useState2[1];

  var handleChange = function handleChange(prop) {
    return function (event) {
      setValues(Object.assign(Object.assign({}, values), _defineProperty({}, prop, event.target.value)));
    };
  };

  var handleClickShowPassword = function handleClickShowPassword() {
    setValues(Object.assign(Object.assign({}, values), {
      showPassword: !values.showPassword
    }));
  };

  var handleMouseDownPassword = function handleMouseDownPassword(event) {
    event.preventDefault();
  };

  return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    className: classes.root
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    className: classes.imgLogo
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("img", {
    src: _images_logo_svg__WEBPACK_IMPORTED_MODULE_11___default.a,
    className: classesApp.mrAuto
  })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    className: classes.loginMain
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    align: "center",
    className: classesApp.whiteText16
  }, "\u30ED\u30B0\u30A4\u30F3")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    style: {
      padding: '20px 15px 0px 15px'
    }
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], {
    id: "standard-helperText",
    label: "ID",
    defaultValue: "",
    fullWidth: true
  }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("br", null), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    fullWidth: true
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    htmlFor: "standard-adornment-password"
  }, "\u30D1\u30B9\u30EF\u30FC\u30C9"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core_Input__WEBPACK_IMPORTED_MODULE_16__[/* default */ "a"], {
    id: "standard-adornment-password",
    type: values.showPassword ? 'text' : 'password',
    value: values.password,
    onChange: handleChange('password'),
    endAdornment: react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_8__[/* default */ "a"], {
      position: "end"
    }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_9__[/* default */ "a"], {
      "aria-label": "toggle password visibility",
      onClick: handleClickShowPassword,
      onMouseDown: handleMouseDownPassword
    }, values.showPassword ? react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons__WEBPACK_IMPORTED_MODULE_14__[/* default */ "a"], null) : react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_icons__WEBPACK_IMPORTED_MODULE_15__[/* default */ "a"], null)))
  }))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    className: classes.dflex
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_17__[/* Link */ "a"], {
    to: '/policy',
    className: classes.btnLogin
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_10__[/* default */ "a"], {
    variant: "contained",
    color: 'primary'
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    align: "center",
    className: classesApp.whiteText16
  }, "\u30ED\u30B0\u30A4\u30F3")))), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
    className: classes.account
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_17__[/* Link */ "a"], {
    to: '/register'
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    className: classesApp.grayText12
  }, "\u65B0\u898F\u767B\u9332\u306F\u3053\u3061\u3089")), react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react_router_dom__WEBPACK_IMPORTED_MODULE_17__[/* Link */ "a"], {
    to: '/forgot-password'
  }, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_material_ui_core__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"], {
    className: classesApp.grayText12
  }, "ID\u3084\u30D1\u30B9\u30EF\u30FC\u30C9\u3092\u5FD8\u308C\u305F\u65B9")))));
}

/***/ })

}]);