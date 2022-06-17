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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css":
/*!********************************************************************!*\
  !*** ./node_modules/@fortawesome/fontawesome-free/css/all.min.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/bootstrap-css-only/css/bootstrap.min.css":
/*!***************************************************************!*\
  !*** ./node_modules/bootstrap-css-only/css/bootstrap.min.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./node_modules/mdbreact/dist/css/mdb.css":
/*!************************************************!*\
  !*** ./node_modules/mdbreact/dist/css/mdb.css ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_components_Landing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/components/Landing */ "./src/components/Landing.tsx");

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = () => {
  return __jsx(_src_components_Landing__WEBPACK_IMPORTED_MODULE_1__["default"], null);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

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

/***/ "./src/components/Landing.tsx":
/*!************************************!*\
  !*** ./src/components/Landing.tsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap-css-only/css/bootstrap.min.css */ "./node_modules/bootstrap-css-only/css/bootstrap.min.css");
/* harmony import */ var bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_css_only_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mdbreact/dist/css/mdb.css */ "./node_modules/mdbreact/dist/css/mdb.css");
/* harmony import */ var mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mdbreact_dist_css_mdb_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _axios_order__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../axios-order */ "./src/axios-order.ts");
/* harmony import */ var _Table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Table */ "./src/components/Table.tsx");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mdbreact */ "mdbreact");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_6__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








const Landing = () => {
  const {
    0: product,
    1: setProduct
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const fetchData = async () => {
      try {
        const response = await _axios_order__WEBPACK_IMPORTED_MODULE_4__["default"].get("/products");
        setProduct(response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const tabRow = () => {
    return product && product.slice(-4).map(function (object, i) {
      return __jsx(_Table__WEBPACK_IMPORTED_MODULE_5__["default"], {
        obj: object,
        key: i
      });
    });
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBAnimation"], {
    type: "bounce",
    infinite: true
  }, __jsx("img", {
    style: {
      height: "100px",
      marginTop: "35px"
    },
    className: "img-fluid",
    alt: "",
    src: "data:image/png;base64,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"
  })), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBContainer"], {
    className: "d-flex justify-content-center mb-3"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCarousel"], {
    activeItem: 1,
    length: 4,
    showControls: true,
    showIndicators: true,
    className: "z-depth-1 w-75 mt-3"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCarouselInner"], null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCarouselItem"], {
    itemId: "1"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBView"], null, __jsx("img", {
    style: {
      height: "500px"
    },
    className: "d-block w-100",
    src: "https://images.unsplash.com/photo-1566598359998-62e83aeea166?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "First slide"
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBMask"], {
    overlay: "black-light"
  })), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCarouselCaption"], null, __jsx("h3", {
    className: "h3-responsive"
  }, "Samsung S9"), __jsx("p", null, "Deal of the Day"), __jsx("p", null, "80% Discount off"))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCarouselItem"], {
    itemId: "2"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBView"], null, __jsx("img", {
    style: {
      height: "500px"
    },
    className: "d-block w-100",
    src: "https://images.unsplash.com/photo-1480694313141-fce5e697ee25?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Second slide"
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBMask"], {
    overlay: "black-strong"
  })), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCarouselCaption"], null, __jsx("h3", {
    className: "h3-responsive"
  }, "Sammu J5"), __jsx("p", null, "35% Discount off"))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCarouselItem"], {
    itemId: "3"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBView"], null, __jsx("img", {
    style: {
      height: "500px"
    },
    className: "d-block w-100",
    src: "https://images.unsplash.com/photo-1556656793-08538906a9f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Third slide"
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBMask"], {
    overlay: "black-slight"
  })), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCarouselCaption"], null, __jsx("h3", {
    className: "h3-responsive"
  }, "Oppo F11"), __jsx("p", null, "25% Discount off"))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCarouselItem"], {
    itemId: "4"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBView"], null, __jsx("img", {
    style: {
      height: "500px"
    },
    className: "d-block w-100",
    src: "https://images.unsplash.com/photo-1541735363-54a8c6dd824c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
    alt: "Third slide"
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBMask"], {
    overlay: "black-slight"
  })), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCarouselCaption"], null, __jsx("h3", {
    className: "h3-responsive"
  }, "Nokia L12"), __jsx("p", null, "25% Discounnt off")))))), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBContainer"], {
    className: "mt-3 px-3 text-center"
  }, __jsx("h3", null, "Latest Products"), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBRow"], {
    className: "mt-3"
  }, tabRow())));
};

/* harmony default export */ __webpack_exports__["default"] = (Landing);

/***/ }),

/***/ "./src/components/Table.tsx":
/*!**********************************!*\
  !*** ./src/components/Table.tsx ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! mdbreact */ "mdbreact");
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(mdbreact__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const ImgP = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.img`
  height: 240px;
  width: 100% !important;
  object-fit: cover !important;
`;

const TableImg = props => {
  return __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_1__["MDBCol"], {
    className: "mt-4",
    sm: "6",
    md: "3"
  }, __jsx(ImgP, {
    src: props.obj.image,
    alt: ""
  }), __jsx("div", {
    className: "text-center mt-2"
  }, __jsx("strong", null, props.obj.name)));
};

/* harmony default export */ __webpack_exports__["default"] = (TableImg);

/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/dolapo/codes/projects/ecommerce-nextjs-tsc/pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "mdbreact":
/*!***************************!*\
  !*** external "mdbreact" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("mdbreact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

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
//# sourceMappingURL=index.js.map