webpackHotUpdate("static/development/pages/edit.js",{

/***/ "./src/components/Products/Edit.tsx":
/*!******************************************!*\
  !*** ./src/components/Products/Edit.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _axios_order__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../axios-order */ "./src/axios-order.ts");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var mdbreact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! mdbreact */ "./node_modules/mdbreact/dist/mdbreact.esm.js");


var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;
// import React, { useState, useEffect, FormEvent, SyntheticEvent } from 'react';
// import axios from '../../axios-order';
// import {
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBBtn,
//   MDBIcon,
//   MDBInput,
// } from 'mdbreact';
// import Router from 'next/router';
// import cookie from 'js-cookie';
// type EditProps = {
//   id: string;
// };
// export const Edit = ({ id }: EditProps): JSX.Element => {
//   const [name, setName] = useState('');
//   const [brand, setBrand] = useState('');
//   const [price, setPrice] = useState('');
//   const [image, setImage] = useState('');
//   const [description, setDescription] = useState('');
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(`/products/${id}`);
//         setName(response.data.name);
//         setBrand(response.data.brand);
//         setPrice(response.data.price);
//         setImage(response.data.image);
//         setDescription(response.data.description);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);
//   const handleSubmit = async (event: SyntheticEvent) => {
//     event.preventDefault();
//     const obj = {
//       name: name,
//       brand: brand,
//       price: price,
//       image: image,
//       description: description,
//     };
//     const token = cookie.get('jwtToken');
//     await axios.patch(`/products/${id}`, obj, {
//       headers: {
//         Authorization: `Bearer ${token}`,
//       },
//     });
//     Router.push(`/product/${id}`);
//   };
// export default Edit;






var Edit = function Edit(_ref) {
  var id = _ref.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      brand = _useState2[0],
      setBrand = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      price = _useState3[0],
      setPrice = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      image = _useState4[0],
      setImage = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(""),
      description = _useState5[0],
      setDescription = _useState5[1];

  var handleNameChange = function handleNameChange(event) {
    return setName(event.currentTarget.value);
  };

  var handleBrandChange = function handleBrandChange(event) {
    return setBrand(event.currentTarget.value);
  };

  var handlePriceChange = function handlePriceChange(event) {
    return setPrice(event.currentTarget.value);
  };

  var handleImageChange = function handleImageChange(event) {
    return setImage(event.currentTarget.value);
  };

  var handleDescriptionChange = function handleDescriptionChange(event) {
    return setDescription(event.currentTarget.value);
  };

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var fetchData =
    /*#__PURE__*/
    function () {
      var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var response;
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return _axios_order__WEBPACK_IMPORTED_MODULE_3__["default"].get("/product/".concat(id));

              case 3:
                response = _context.sent;
                setName(response.data.name);
                setBrand(response.data.brand);
                setPrice(response.data.price);
                setImage(response.data.image);
                setDescription(response.data.description);
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](0);
                console.log(_context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[0, 11]]);
      }));

      return function fetchData() {
        return _ref2.apply(this, arguments);
      };
    }();

    fetchData();
  }, []);

  var onSubmit =
  /*#__PURE__*/
  function () {
    var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(event) {
      var obj, token;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              event.preventDefault();
              obj = {
                name: name,
                brand: brand,
                price: price,
                image: image,
                description: description
              };
              token = js_cookie__WEBPACK_IMPORTED_MODULE_4___default.a.get("jwtToken");
              _context2.next = 5;
              return _axios_order__WEBPACK_IMPORTED_MODULE_3__["default"].patch("/product/".concat(id), obj, {
                headers: {
                  Authorization: "Bearer ".concat(token)
                }
              });

            case 5:
              next_router__WEBPACK_IMPORTED_MODULE_5___default.a.push("/product/".concat(id));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function onSubmit(_x) {
      return _ref3.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBContainer"], {
    className: "px-5"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBRow"], {
    className: "d-flex justify-content-center"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBCol"], {
    className: "card mt-5",
    xl: "6"
  }, __jsx("form", {
    onSubmit: onSubmit
  }, __jsx("p", {
    className: "h5 text-center mt-4 mb-4"
  }, "Edit Product"), __jsx("div", {
    className: "grey-text"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBInput"], {
    required: true,
    label: "Name",
    value: name,
    icon: "user",
    group: true,
    type: "text",
    validate: true,
    error: "wrong",
    success: "right",
    onChange: handleNameChange
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBInput"], {
    required: true,
    label: "Brand",
    value: brand,
    icon: "clone",
    group: true,
    type: "text",
    validate: true,
    error: "wrong",
    success: "right",
    onChange: handleBrandChange
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBInput"], {
    required: true,
    label: "Price",
    value: price,
    icon: "coins",
    group: true,
    type: "number",
    validate: true,
    error: "wrong",
    success: "right",
    onChange: handlePriceChange
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBInput"], {
    required: true,
    label: "image",
    value: image,
    icon: "image",
    group: true,
    type: "text",
    validate: true,
    error: "wrong",
    success: "right",
    onChange: handleImageChange
  }), __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBInput"], {
    required: true,
    label: "description",
    value: description,
    icon: "info",
    group: true,
    type: "text",
    validate: true,
    error: "wrong",
    success: "right",
    onChange: handleDescriptionChange
  })), __jsx("div", {
    className: "text-center"
  }, __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBBtn"], {
    className: "btn btn-outline-black  my-4",
    type: "submit"
  }, "Submit", __jsx(mdbreact__WEBPACK_IMPORTED_MODULE_6__["MDBIcon"], {
    far: true,
    icon: "paper-plane",
    className: "ml-2"
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ })

})
//# sourceMappingURL=edit.js.d7ebce200a67d2efd17b.hot-update.js.map