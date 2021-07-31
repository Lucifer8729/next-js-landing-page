webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/price-card.js":
/*!**************************************!*\
  !*** ./src/components/price-card.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PriceCard; });
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./list */ "./src/components/list.js");
var _jsxFileName = "C:\\Users\\saura\\OneDrive\\Desktop\\To_do\\FullStack Devloper\\Frontend\\ReactJS\\nextjs_landing_page\\src\\components\\price-card.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



function PriceCard(_ref) {
  var _ref$data = _ref.data,
      header = _ref$data.header,
      name = _ref$data.name,
      description = _ref$data.description,
      priceWithUnit = _ref$data.priceWithUnit,
      _ref$data$buttonText = _ref$data.buttonText,
      buttonText = _ref$data$buttonText === void 0 ? "Start Free Trial" : _ref$data$buttonText,
      anotherOption = _ref$data.anotherOption,
      points = _ref$data.points;
  return __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Card"], {
    className: header ? "package__card active" : "package__card",
    sx: styles.pricingBox,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 5
    }
  }, header && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    sx: styles.header,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 18
    }
  }, header), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    className: "package__header",
    sx: styles.pricingHeader,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Heading"], {
    className: "package__name",
    variant: "title",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 11
    }
  }, name), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    as: "p",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 11
    }
  }, description)), __jsx(_list__WEBPACK_IMPORTED_MODULE_2__["default"], {
    items: points,
    childStyle: styles.listItem,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  }), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Text"], {
    className: "package__price",
    sx: styles.price,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 9
    }
  }, priceWithUnit, __jsx("span", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 11
    }
  }, "/Monthly")), __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Box"], {
    sx: styles.buttonGroup,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 9
    }
  }, __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: "primary",
    "aria-label": buttonText,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 11
    }
  }, buttonText), anotherOption && __jsx(theme_ui__WEBPACK_IMPORTED_MODULE_0__["Button"], {
    variant: "textButton",
    className: "free__trial",
    "aria-label": anotherOption,
    sx: {
      color: "black"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  }, anotherOption))));
}
_c = PriceCard;
var styles = {
  pricingBox: {
    borderRadius: 20,
    position: "relative",
    transition: "all 0.3s",
    p: ["35px 25px", null, null, "40px"],
    width: ["100%", "75%", "100%"],
    mb: "40px",
    mt: "40px",
    mx: [0, "auto", 0],
    "&:before": {
      position: "absolute",
      content: "''",
      width: "100%",
      top: 0,
      left: 0,
      height: "100%",
      border: "1px solid rgba(38, 78, 118, 0.1)",
      borderRadius: "inherit",
      transition: "all 0.3s",
      zIndex: -1
    },
    "&:hover": {
      boxShadow: "0px 4px 25px rgba(38, 78, 118, 0.1) !important",
      "&:before": {
        opacity: 0
      }
    }
  },
  header: {
    height: ["28px", null, null, "32px"],
    backgroundColor: "yellow",
    borderRadius: "5px",
    fontWeight: "bold",
    fontSize: 1,
    lineHeight: 1.2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    position: "absolute",
    top: "-17px",
    letterSpacing: "-.14px",
    px: "12px"
  },
  pricingHeader: {
    justifyContent: "space-between",
    alignItems: "flex-start",
    mb: ["30px", null, null, null, "40px"],
    p: {
      fontSize: [1, 2],
      color: "text",
      lineHeight: "heading"
    },
    ".package__name": {
      marginBottom: [1, null, 2]
    }
  },
  price: {
    fontWeight: 500,
    fontSize: [4, null, 5, null, "30px"],
    lineHeight: 1,
    letterSpacing: "-0.55px",
    color: "text",
    marginBottom: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    pt: [4, 6],
    "> span": {
      position: "relative",
      pl: "3px",
      display: "inline-block",
      fontSize: [1, 2],
      fontWeight: "normal"
    }
  },
  listItem: {
    fontFamily: "DM Sans",
    fontStyle: "normal",
    fontWeight: "normal",
    fontSize: [1, 2],
    lineHeight: [1.75, 1.6],
    mb: 3,
    alignItems: "flex-start",
    color: "text",
    "&.closed": {
      opacity: 0.55,
      button: {
        color: "#788FB5"
      }
    }
  },
  buttonGroup: {
    textAlign: "center",
    mt: ["30px", null, null, null, "35px"],
    ".free__trail": {
      color: "secondary",
      width: "100%",
      justifyContent: "center",
      fontWeight: 700,
      fontSize: ["14px", 1],
      p: "20px 0 0"
    }
  }
};

var _c;

$RefreshReg$(_c, "PriceCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJpY2UtY2FyZC5qcyJdLCJuYW1lcyI6WyJQcmljZUNhcmQiLCJkYXRhIiwiaGVhZGVyIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2VXaXRoVW5pdCIsImJ1dHRvblRleHQiLCJhbm90aGVyT3B0aW9uIiwicG9pbnRzIiwic3R5bGVzIiwicHJpY2luZ0JveCIsInByaWNpbmdIZWFkZXIiLCJsaXN0SXRlbSIsInByaWNlIiwiYnV0dG9uR3JvdXAiLCJjb2xvciIsImJvcmRlclJhZGl1cyIsInBvc2l0aW9uIiwidHJhbnNpdGlvbiIsInAiLCJ3aWR0aCIsIm1iIiwibXQiLCJteCIsImNvbnRlbnQiLCJ0b3AiLCJsZWZ0IiwiaGVpZ2h0IiwiYm9yZGVyIiwiekluZGV4IiwiYm94U2hhZG93Iiwib3BhY2l0eSIsImJhY2tncm91bmRDb2xvciIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsImxpbmVIZWlnaHQiLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibGV0dGVyU3BhY2luZyIsInB4IiwibWFyZ2luQm90dG9tIiwicHQiLCJwbCIsImZvbnRGYW1pbHkiLCJmb250U3R5bGUiLCJidXR0b24iLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsT0FVWjtBQUFBLHVCQVREQyxJQVNDO0FBQUEsTUFSQ0MsTUFRRCxhQVJDQSxNQVFEO0FBQUEsTUFQQ0MsSUFPRCxhQVBDQSxJQU9EO0FBQUEsTUFOQ0MsV0FNRCxhQU5DQSxXQU1EO0FBQUEsTUFMQ0MsYUFLRCxhQUxDQSxhQUtEO0FBQUEsdUNBSkNDLFVBSUQ7QUFBQSxNQUpDQSxVQUlELHFDQUpjLGtCQUlkO0FBQUEsTUFIQ0MsYUFHRCxhQUhDQSxhQUdEO0FBQUEsTUFGQ0MsTUFFRCxhQUZDQSxNQUVEO0FBQ0QsU0FDRSxNQUFDLDZDQUFE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LENBTEk7QUFNZGYsT0FBQyxFQUFFO0FBTlc7QUFITDtBQTdGQSxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZkNzExOGI1NGY3ZmM4NmVkYzRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCb3gsIENhcmQsIFRleHQsIEhlYWRpbmcsIEJ1dHRvbiB9IGZyb20gXCJ0aGVtZS11aVwiO1xuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IExpc3QgZnJvbSBcIi4vbGlzdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcmljZUNhcmQoe1xuICBkYXRhOiB7XG4gICAgaGVhZGVyLFxuICAgIG5hbWUsXG4gICAgZGVzY3JpcHRpb24sXG4gICAgcHJpY2VXaXRoVW5pdCxcbiAgICBidXR0b25UZXh0ID0gXCJTdGFydCBGcmVlIFRyaWFsXCIsXG4gICAgYW5vdGhlck9wdGlvbixcbiAgICBwb2ludHMsXG4gIH0sXG59KSB7XG4gIHJldHVybiAoXG4gICAgPENhcmRcbiAgICAgIGNsYXNzTmFtZT17aGVhZGVyID8gXCJwYWNrYWdlX19jYXJkIGFjdGl2ZVwiIDogXCJwYWNrYWdlX19jYXJkXCJ9XG4gICAgICBzeD17c3R5bGVzLnByaWNpbmdCb3h9XG4gICAgPlxuICAgICAge2hlYWRlciAmJiA8VGV4dCBzeD17c3R5bGVzLmhlYWRlcn0+e2hlYWRlcn08L1RleHQ+fVxuICAgICAgPEJveD5cbiAgICAgICAgPEJveCBjbGFzc05hbWU9XCJwYWNrYWdlX19oZWFkZXJcIiBzeD17c3R5bGVzLnByaWNpbmdIZWFkZXJ9PlxuICAgICAgICAgIDxIZWFkaW5nIGNsYXNzTmFtZT1cInBhY2thZ2VfX25hbWVcIiB2YXJpYW50PVwidGl0bGVcIj5cbiAgICAgICAgICAgIHtuYW1lfVxuICAgICAgICAgIDwvSGVhZGluZz5cbiAgICAgICAgICA8VGV4dCBhcz1cInBcIj57ZGVzY3JpcHRpb259PC9UZXh0PlxuICAgICAgICA8L0JveD5cbiAgICAgICAgPExpc3QgaXRlbXM9e3BvaW50c30gY2hpbGRTdHlsZT17c3R5bGVzLmxpc3RJdGVtfSAvPlxuICAgICAgICA8VGV4dCBjbGFzc05hbWU9XCJwYWNrYWdlX19wcmljZVwiIHN4PXtzdHlsZXMucHJpY2V9PlxuICAgICAgICAgIHtwcmljZVdpdGhVbml0fVxuICAgICAgICAgIDxzcGFuPi9Nb250aGx5PC9zcGFuPlxuICAgICAgICA8L1RleHQ+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5idXR0b25Hcm91cH0+XG4gICAgICAgICAgPEJ1dHRvbiB2YXJpYW50PVwicHJpbWFyeVwiIGFyaWEtbGFiZWw9e2J1dHRvblRleHR9PlxuICAgICAgICAgICAge2J1dHRvblRleHR9XG4gICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAge2Fub3RoZXJPcHRpb24gJiYgKFxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB2YXJpYW50PVwidGV4dEJ1dHRvblwiXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZyZWVfX3RyaWFsXCJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD17YW5vdGhlck9wdGlvbn1cbiAgICAgICAgICAgICAgc3g9e3sgY29sb3I6IFwiYmxhY2tcIiB9fVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICB7YW5vdGhlck9wdGlvbn1cbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICl9XG4gICAgICAgIDwvQm94PlxuICAgICAgPC9Cb3g+XG4gICAgPC9DYXJkPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIHByaWNpbmdCb3g6IHtcbiAgICBib3JkZXJSYWRpdXM6IDIwLFxuICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMC4zc1wiLFxuICAgIHA6IFtcIjM1cHggMjVweFwiLCBudWxsLCBudWxsLCBcIjQwcHhcIl0sXG4gICAgd2lkdGg6IFtcIjEwMCVcIiwgXCI3NSVcIiwgXCIxMDAlXCJdLFxuICAgIG1iOiBcIjQwcHhcIixcbiAgICBtdDogXCI0MHB4XCIsXG4gICAgbXg6IFswLCBcImF1dG9cIiwgMF0sXG4gICAgXCImOmJlZm9yZVwiOiB7XG4gICAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgICAgY29udGVudDogXCInJ1wiLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAgdG9wOiAwLFxuICAgICAgbGVmdDogMCxcbiAgICAgIGhlaWdodDogXCIxMDAlXCIsXG4gICAgICBib3JkZXI6IFwiMXB4IHNvbGlkIHJnYmEoMzgsIDc4LCAxMTgsIDAuMSlcIixcbiAgICAgIGJvcmRlclJhZGl1czogXCJpbmhlcml0XCIsXG4gICAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzXCIsXG4gICAgICB6SW5kZXg6IC0xLFxuICAgIH0sXG4gICAgXCImOmhvdmVyXCI6IHtcbiAgICAgIGJveFNoYWRvdzogXCIwcHggNHB4IDI1cHggcmdiYSgzOCwgNzgsIDExOCwgMC4xKSAhaW1wb3J0YW50XCIsXG4gICAgICBcIiY6YmVmb3JlXCI6IHtcbiAgICAgICAgb3BhY2l0eTogMCxcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgaGVhZGVyOiB7XG4gICAgaGVpZ2h0OiBbXCIyOHB4XCIsIG51bGwsIG51bGwsIFwiMzJweFwiXSxcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwieWVsbG93XCIsXG4gICAgYm9yZGVyUmFkaXVzOiBcIjVweFwiLFxuICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxuICAgIGZvbnRTaXplOiAxLFxuICAgIGxpbmVIZWlnaHQ6IDEuMixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIGNvbG9yOiBcIndoaXRlXCIsXG4gICAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgICB0b3A6IFwiLTE3cHhcIixcbiAgICBsZXR0ZXJTcGFjaW5nOiBcIi0uMTRweFwiLFxuICAgIHB4OiBcIjEycHhcIixcbiAgfSxcbiAgcHJpY2luZ0hlYWRlcjoge1xuICAgIGp1c3RpZnlDb250ZW50OiBcInNwYWNlLWJldHdlZW5cIixcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICBtYjogW1wiMzBweFwiLCBudWxsLCBudWxsLCBudWxsLCBcIjQwcHhcIl0sXG4gICAgcDoge1xuICAgICAgZm9udFNpemU6IFsxLCAyXSxcbiAgICAgIGNvbG9yOiBcInRleHRcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFwiaGVhZGluZ1wiLFxuICAgIH0sXG4gICAgXCIucGFja2FnZV9fbmFtZVwiOiB7XG4gICAgICBtYXJnaW5Cb3R0b206IFsxLCBudWxsLCAyXSxcbiAgICB9LFxuICB9LFxuICBwcmljZToge1xuICAgIGZvbnRXZWlnaHQ6IDUwMCxcbiAgICBmb250U2l6ZTogWzQsIG51bGwsIDUsIG51bGwsIFwiMzBweFwiXSxcbiAgICBsaW5lSGVpZ2h0OiAxLFxuICAgIGxldHRlclNwYWNpbmc6IFwiLTAuNTVweFwiLFxuICAgIGNvbG9yOiBcInRleHRcIixcbiAgICBtYXJnaW5Cb3R0b206IDIsXG4gICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICBwdDogWzQsIDZdLFxuICAgIFwiPiBzcGFuXCI6IHtcbiAgICAgIHBvc2l0aW9uOiBcInJlbGF0aXZlXCIsXG4gICAgICBwbDogXCIzcHhcIixcbiAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG4gICAgICBmb250U2l6ZTogWzEsIDJdLFxuICAgICAgZm9udFdlaWdodDogXCJub3JtYWxcIixcbiAgICB9LFxuICB9LFxuICBsaXN0SXRlbToge1xuICAgIGZvbnRGYW1pbHk6IFwiRE0gU2Fuc1wiLFxuICAgIGZvbnRTdHlsZTogXCJub3JtYWxcIixcbiAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgIGZvbnRTaXplOiBbMSwgMl0sXG4gICAgbGluZUhlaWdodDogWzEuNzUsIDEuNl0sXG4gICAgbWI6IDMsXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LXN0YXJ0XCIsXG4gICAgY29sb3I6IFwidGV4dFwiLFxuICAgIFwiJi5jbG9zZWRcIjoge1xuICAgICAgb3BhY2l0eTogMC41NSxcbiAgICAgIGJ1dHRvbjoge1xuICAgICAgICBjb2xvcjogXCIjNzg4RkI1XCIsXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG4gIGJ1dHRvbkdyb3VwOiB7XG4gICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgIG10OiBbXCIzMHB4XCIsIG51bGwsIG51bGwsIG51bGwsIFwiMzVweFwiXSxcbiAgICBcIi5mcmVlX190cmFpbFwiOiB7XG4gICAgICBjb2xvcjogXCJzZWNvbmRhcnlcIixcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgICAgZm9udFdlaWdodDogNzAwLFxuICAgICAgZm9udFNpemU6IFtcIjE0cHhcIiwgMV0sXG4gICAgICBwOiBcIjIwcHggMCAwXCIsXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9