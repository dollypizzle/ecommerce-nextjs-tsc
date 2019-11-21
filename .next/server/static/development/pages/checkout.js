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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/checkout.tsx":
/*!****************************!*\
  !*** ./pages/checkout.tsx ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Form_Checkout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Form/Checkout */ "./src/components/Form/Checkout.tsx");
/* harmony import */ var _src_lib_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/lib/auth */ "./src/lib/auth.ts");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const CheckoutPage = () => {
  return __jsx(_src_components_Form_Checkout__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};

CheckoutPage.getInitialProps = Object(_src_lib_auth__WEBPACK_IMPORTED_MODULE_2__["authInitialProps"])(true, "/login");
/* harmony default export */ __webpack_exports__["default"] = (CheckoutPage);

/***/ }),

/***/ "./src/components/Form/Checkout.tsx":
/*!******************************************!*\
  !*** ./src/components/Form/Checkout.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mdbreact */ "mdbreact");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_3__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const CheckOut = props => {
  const cart = props.cart;
  const ProductTable = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBTable"])`
    td {
      vertical-align: middle;
    }
  `;
  const {
    0: column
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([{
    label: 'Product',
    field: 'product'
  }, {
    label: 'QTY',
    field: 'qty'
  }, {
    label: 'AMT',
    field: 'amount'
  }]);
  const rows = [];
  cart.addedItems.map(item => {
    return rows.push({
      product: [__jsx("h5", {
        className: "mt-3"
      }, __jsx("strong", null, item.name))],
      qty: `${item.quantity}`,
      amount: __jsx("strong", null, "\u20A6", (item.quantity * item.price).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))
    });
  });
  return __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBContainer"], null, __jsx("div", null), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBRow"], null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBCol"], {
    md: "6",
    className: "card mt-4 px-2"
  }, __jsx("h4", {
    className: "text-center mt-1"
  }, "Checkout"), __jsx("form", null, __jsx("div", {
    className: "grey-text"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBInput"], {
    label: "First Name",
    icon: "user",
    group: true,
    type: "text",
    validate: true,
    error: "wrong",
    success: "right"
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBInput"], {
    label: "Last Name",
    icon: "user",
    group: true,
    type: "text",
    validate: true,
    error: "wrong",
    success: "right"
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBInput"], {
    label: "Email",
    icon: "envelope",
    group: true,
    type: "email",
    validate: true,
    error: "wrong",
    success: "right"
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBInput"], {
    label: "Shipping Address",
    icon: "tag",
    group: true,
    type: "text",
    validate: true,
    error: "wrong",
    success: "right"
  })))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBCol"], {
    md: "6"
  }, __jsx("h4", {
    className: "text-center mt-4"
  }, "Your Order Summary"), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBCardBody"], null, __jsx(ProductTable, {
    className: "product-table",
    responsive: true
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBTableHead"], {
    className: "font-weight-bold",
    color: "mdb-color lighten-5",
    columns: column
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBTableBody"], {
    rows: rows
  })), __jsx("div", null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_3__["MDBBtn"], {
    color: "success"
  }, __jsx("a", {
    href: "/pay",
    className: "text-reset"
  }, "Pay: \u20A6", cart.total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'))))))));
};

const mapStateToProps = state => {
  return {
    cart: state.cart
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, null)(CheckOut));

/***/ }),

/***/ "./src/lib/auth.ts":
/*!*************************!*\
  !*** ./src/lib/auth.ts ***!
  \*************************/
/*! exports provided: authInitialProps, checkIfAuthenticated, getUserFromCookie */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authInitialProps", function() { return authInitialProps; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "checkIfAuthenticated", function() { return checkIfAuthenticated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserFromCookie", function() { return getUserFromCookie; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_1__);


const authInitialProps = (isProtectedRoute, path) => ({
  res
}) => {
  const isAuthenticated = checkIfAuthenticated();

  if (isProtectedRoute && !isAuthenticated) {
    return redirectUser(res, path);
  }

  return {
    isAuthenticated
  };
};
const checkIfAuthenticated = () => {
  const auth = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('jwtToken');
  return auth ? true : false;
};
const getUserFromCookie = () => {
  const authUser = js_cookie__WEBPACK_IMPORTED_MODULE_1___default.a.get('jwtToken');
  return authUser ? JSON.parse(authUser) : null;
};

const redirectUser = (res, path) => {
  if (res) {
    res.redirect(302, path);
  }

  next_router__WEBPACK_IMPORTED_MODULE_0___default.a.replace(path);
};

/***/ }),

/***/ 5:
/*!**********************************!*\
  !*** multi ./pages/checkout.tsx ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dolapo/ecommerce-nextjs-t/pages/checkout.tsx */"./pages/checkout.tsx");


/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

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

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=checkout.js.map