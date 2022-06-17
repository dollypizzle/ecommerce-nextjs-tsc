module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/login.tsx":
/*!*************************!*\
  !*** ./pages/login.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Form_Login__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Form/Login */ "./src/components/Form/Login.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Signin = () => {
  return __jsx(_src_components_Form_Login__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Signin);

/***/ }),

/***/ "./src/axios-order.ts":
/*!****************************!*\
  !*** ./src/axios-order.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

const instance = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: "https://dollyp-ecommerce-api-tsc.herokuapp.com/"
}); // const instance = axios.create({
//   baseURL: "http://localhost:6000",
// });

/* harmony default export */ __webpack_exports__["default"] = (instance);

/***/ }),

/***/ "./src/components/Form/Login.tsx":
/*!***************************************!*\
  !*** ./src/components/Form/Login.tsx ***!
  \***************************************/
/*! exports provided: Login, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _store_actions_authActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/authActions */ "./src/store/actions/authActions.ts");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mdbreact */ "mdbreact");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;







const Login = props => {
  const {
    0: email,
    1: setEmail
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');

  const handleEmailChange = event => setEmail(event.currentTarget.value);

  const handlePasswordChange = event => setPassword(event.currentTarget.value);

  const handleSubmit = async event => {
    event.preventDefault();
    const data = {
      email,
      password
    };

    try {
      await props.login(data);
      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/products');
    } catch (error) {
      console.log(error);
    }
  };

  if (js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get('jwtToken')) {
    next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/products');
  }

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBContainer"], {
    className: "px-5",
    style: {
      marginTop: '58px',
      marginBottom: '55px'
    }
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBRow"], {
    className: "d-flex justify-content-center"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCol"], {
    className: "card mt-3",
    sm: "12",
    md: "8",
    lg: "6"
  }, __jsx("form", {
    onSubmit: handleSubmit
  }, __jsx("p", {
    className: "h5 text-center mt-4 mb-4"
  }, "Login"), __jsx("div", {
    className: "grey-text"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBInput"], {
    required: true,
    label: "Your email",
    icon: "envelope",
    group: true,
    type: "email",
    validate: true,
    error: "wrong",
    success: "right",
    onChange: handleEmailChange
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBInput"], {
    required: true,
    label: "Your password",
    icon: "lock",
    group: true,
    type: "password",
    validate: true,
    onChange: handlePasswordChange
  })), __jsx("div", {
    className: "text-center py-4 mt-3"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBBtn"], {
    className: "btn btn-outline-black",
    type: "submit"
  }, "Submit", __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBIcon"], {
    far: true,
    icon: "paper-plane",
    className: "ml-2"
  }))))))));
};
Login.propTypes = {
  login: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.func.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_3__["connect"])(null, {
  login: _store_actions_authActions__WEBPACK_IMPORTED_MODULE_5__["login"]
})(Login));

/***/ }),

/***/ "./src/store/actions/actionTypes.ts":
/*!******************************************!*\
  !*** ./src/store/actions/actionTypes.ts ***!
  \******************************************/
/*! exports provided: SET_CURRENT_USER, ADD_TO_CART, SUB_QUANTITY, REMOVE_ITEM, ADD_QUANTITY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SET_CURRENT_USER", function() { return SET_CURRENT_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TO_CART", function() { return ADD_TO_CART; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUB_QUANTITY", function() { return SUB_QUANTITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REMOVE_ITEM", function() { return REMOVE_ITEM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_QUANTITY", function() { return ADD_QUANTITY; });
const SET_CURRENT_USER = 'SET_CURRENT_USER';
const ADD_TO_CART = 'ADD_TO_CART';
const SUB_QUANTITY = 'SUB_QUANTITY';
const REMOVE_ITEM = 'REMOVE_ITEM';
const ADD_QUANTITY = 'ADD_QUANTITY';

/***/ }),

/***/ "./src/store/actions/authActions.ts":
/*!******************************************!*\
  !*** ./src/store/actions/authActions.ts ***!
  \******************************************/
/*! exports provided: setCurrentUser, login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentUser", function() { return setCurrentUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony import */ var _axios_order__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../axios-order */ "./src/axios-order.ts");
/* harmony import */ var _utils_setAuthorizationToken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/setAuthorizationToken */ "./src/utils/setAuthorizationToken.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jwt-decode */ "jwt-decode");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actionTypes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./actionTypes */ "./src/store/actions/actionTypes.ts");





function setCurrentUser(user) {
  return {
    type: _actionTypes__WEBPACK_IMPORTED_MODULE_4__["SET_CURRENT_USER"],
    user
  };
}
function login(data) {
  return dispatch => {
    return _axios_order__WEBPACK_IMPORTED_MODULE_0__["default"].post('/login', data).then(res => {
      const token = res.data.token;
      const user = res.data.user;
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('jwtToken', token);
      js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('user', user);
      Object(_utils_setAuthorizationToken__WEBPACK_IMPORTED_MODULE_1__["default"])(token);
      dispatch(setCurrentUser(jwt_decode__WEBPACK_IMPORTED_MODULE_3___default()(token)));
    });
  };
}

/***/ }),

/***/ "./src/utils/setAuthorizationToken.ts":
/*!********************************************!*\
  !*** ./src/utils/setAuthorizationToken.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return setAuthorizationToken; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

function setAuthorizationToken(token) {
  if (token) {
    axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios__WEBPACK_IMPORTED_MODULE_0___default.a.defaults.headers.common['Authorization'];
  }
}

/***/ }),

/***/ 8:
/*!*******************************!*\
  !*** multi ./pages/login.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dolapo/ecommerce-nextjs-t/pages/login.tsx */"./pages/login.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "jwt-decode":
/*!*****************************!*\
  !*** external "jwt-decode" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jwt-decode");

/***/ }),

/***/ "mdbreact":
/*!***************************!*\
  !*** external "mdbreact" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mdbreact");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=login.js.map