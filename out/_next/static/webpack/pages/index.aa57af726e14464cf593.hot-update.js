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
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 9
    }
  })));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvcHJpY2UtY2FyZC5qcyJdLCJuYW1lcyI6WyJQcmljZUNhcmQiLCJkYXRhIiwiaGVhZGVyIiwibmFtZSIsImRlc2NyaXB0aW9uIiwicHJpY2VXaXRoVW5pdCIsImJ1dHRvblRleHQiLCJhbm90aGVyT3B0aW9uIiwicG9pbnRzIiwic3R5bGVzIiwicHJpY2luZ0JveCIsInByaWNpbmdIZWFkZXIiLCJib3JkZXJSYWRpdXMiLCJwb3NpdGlvbiIsInRyYW5zaXRpb24iLCJwIiwid2lkdGgiLCJtYiIsIm10IiwibXgiLCJjb250ZW50IiwidG9wIiwibGVmdCIsImhlaWdodCIsImJvcmRlciIsInpJbmRleCIsImJveFNoYWRvdyIsIm9wYWNpdHkiLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250V2VpZ2h0IiwiZm9udFNpemUiLCJsaW5lSGVpZ2h0IiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwibGV0dGVyU3BhY2luZyIsInB4IiwibWFyZ2luQm90dG9tIiwicHJpY2UiLCJwdCIsInBsIiwibGlzdEl0ZW0iLCJmb250RmFtaWx5IiwiZm9udFN0eWxlIiwiYnV0dG9uIiwiYnV0dG9uR3JvdXAiLCJ0ZXh0QWxpZ24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVlLFNBQVNBLFNBQVQsT0FVWjtBQUFBLHVCQVREQyxJQVNDO0FBQUEsTUFSQ0MsTUFRRCxhQVJDQSxNQVFEO0FBQUEsTUFQQ0MsSUFPRCxhQVBDQSxJQU9EO0FBQUEsTUFOQ0MsV0FNRCxhQU5DQSxXQU1EO0FBQUEsTUFMQ0MsYUFLRCxhQUxDQSxhQUtEO0FBQUEsdUNBSkNDLFVBSUQ7QUFBQSxNQUpDQSxVQUlELHFDQUpjLGtCQUlkO0FBQUEsTUFIQ0MsYUFHRCxhQUhDQSxhQUdEO0FBQUEsTUFGQ0MsTUFFRCxhQUZDQSxNQUVEO0FBQ0QsU0FDRSxNQUFDLDZDQUFE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QU0sRUFBRTtBQUNOVixhQUFLLEVBQUU7QUFERDtBQUZFO0FBVEosR0E3RUc7QUE2RmJXLGFBQVcsRUFBRTtBQUNYQyxhQUFTLEVBQUUsUUFEQTtBQUVYN0IsTUFBRSxFQUFFLENBQUMsTUFBRCxFQUFTLElBQVQsRUFBZSxJQUFmLEVBQXFCLElBQXJCLEVBQTJCLE1BQTNCLENBRk87QUFHWCxvQkFBZ0I7QUFDZGlCLFdBQUssRUFBRSxXQURPO0FBRWRuQixXQUFLLEVBQUUsTUFGTztBQUdka0Isb0JBQWMsRUFBRSxRQUhGO0FBSWRMLGdCQUFVLEVBQUUsR0FKRTtBQUtkQyxjQUFRLEVBQUUsQ0FBQyxNQUFELEVBQVMsQ0FBVCxDQUxJO0FBTWRmLE9BQUMsRUFBRTtBQU5XO0FBSEw7QUE3RkEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hYTU3YWY3MjZlMTQ0NjRjZjU5My5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQm94LCBDYXJkLCBUZXh0LCBIZWFkaW5nLCBCdXR0b24gfSBmcm9tIFwidGhlbWUtdWlcIjtcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaXN0IGZyb20gXCIuL2xpc3RcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJpY2VDYXJkKHtcbiAgZGF0YToge1xuICAgIGhlYWRlcixcbiAgICBuYW1lLFxuICAgIGRlc2NyaXB0aW9uLFxuICAgIHByaWNlV2l0aFVuaXQsXG4gICAgYnV0dG9uVGV4dCA9IFwiU3RhcnQgRnJlZSBUcmlhbFwiLFxuICAgIGFub3RoZXJPcHRpb24sXG4gICAgcG9pbnRzLFxuICB9LFxufSkge1xuICByZXR1cm4gKFxuICAgIDxDYXJkXG4gICAgICBjbGFzc05hbWU9e2hlYWRlciA/IFwicGFja2FnZV9fY2FyZCBhY3RpdmVcIiA6IFwicGFja2FnZV9fY2FyZFwifVxuICAgICAgc3g9e3N0eWxlcy5wcmljaW5nQm94fVxuICAgID5cbiAgICAgIHtoZWFkZXIgJiYgPFRleHQgc3g9e3N0eWxlcy5oZWFkZXJ9PntoZWFkZXJ9PC9UZXh0Pn1cbiAgICAgIDxCb3g+XG4gICAgICAgIDxCb3ggY2xhc3NOYW1lPVwicGFja2FnZV9faGVhZGVyXCIgc3g9e3N0eWxlcy5wcmljaW5nSGVhZGVyfT5cbiAgICAgICAgICA8SGVhZGluZyBjbGFzc05hbWU9XCJwYWNrYWdlX19uYW1lXCIgdmFyaWFudD1cInRpdGxlXCI+XG4gICAgICAgICAgICB7bmFtZX1cbiAgICAgICAgICA8L0hlYWRpbmc+XG4gICAgICAgICAgPFRleHQgYXM9XCJwXCI+e2Rlc2NyaXB0aW9ufTwvVGV4dD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICAgIDxMaXN0IC8+XG4gICAgICA8L0JveD5cbiAgICA8L0NhcmQ+XG4gICk7XG59XG5cbmNvbnN0IHN0eWxlcyA9IHtcbiAgcHJpY2luZ0JveDoge1xuICAgIGJvcmRlclJhZGl1czogMjAsXG4gICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICB0cmFuc2l0aW9uOiBcImFsbCAwLjNzXCIsXG4gICAgcDogW1wiMzVweCAyNXB4XCIsIG51bGwsIG51bGwsIFwiNDBweFwiXSxcbiAgICB3aWR0aDogW1wiMTAwJVwiLCBcIjc1JVwiLCBcIjEwMCVcIl0sXG4gICAgbWI6IFwiNDBweFwiLFxuICAgIG10OiBcIjQwcHhcIixcbiAgICBteDogWzAsIFwiYXV0b1wiLCAwXSxcbiAgICBcIiY6YmVmb3JlXCI6IHtcbiAgICAgIHBvc2l0aW9uOiBcImFic29sdXRlXCIsXG4gICAgICBjb250ZW50OiBcIicnXCIsXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICB0b3A6IDAsXG4gICAgICBsZWZ0OiAwLFxuICAgICAgaGVpZ2h0OiBcIjEwMCVcIixcbiAgICAgIGJvcmRlcjogXCIxcHggc29saWQgcmdiYSgzOCwgNzgsIDExOCwgMC4xKVwiLFxuICAgICAgYm9yZGVyUmFkaXVzOiBcImluaGVyaXRcIixcbiAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuM3NcIixcbiAgICAgIHpJbmRleDogLTEsXG4gICAgfSxcbiAgICBcIiY6aG92ZXJcIjoge1xuICAgICAgYm94U2hhZG93OiBcIjBweCA0cHggMjVweCByZ2JhKDM4LCA3OCwgMTE4LCAwLjEpICFpbXBvcnRhbnRcIixcbiAgICAgIFwiJjpiZWZvcmVcIjoge1xuICAgICAgICBvcGFjaXR5OiAwLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICBoZWFkZXI6IHtcbiAgICBoZWlnaHQ6IFtcIjI4cHhcIiwgbnVsbCwgbnVsbCwgXCIzMnB4XCJdLFxuICAgIGJhY2tncm91bmRDb2xvcjogXCJ5ZWxsb3dcIixcbiAgICBib3JkZXJSYWRpdXM6IFwiNXB4XCIsXG4gICAgZm9udFdlaWdodDogXCJib2xkXCIsXG4gICAgZm9udFNpemU6IDEsXG4gICAgbGluZUhlaWdodDogMS4yLFxuICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgY29sb3I6IFwid2hpdGVcIixcbiAgICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICAgIHRvcDogXCItMTdweFwiLFxuICAgIGxldHRlclNwYWNpbmc6IFwiLS4xNHB4XCIsXG4gICAgcHg6IFwiMTJweFwiLFxuICB9LFxuICBwcmljaW5nSGVhZGVyOiB7XG4gICAganVzdGlmeUNvbnRlbnQ6IFwic3BhY2UtYmV0d2VlblwiLFxuICAgIGFsaWduSXRlbXM6IFwiZmxleC1zdGFydFwiLFxuICAgIG1iOiBbXCIzMHB4XCIsIG51bGwsIG51bGwsIG51bGwsIFwiNDBweFwiXSxcbiAgICBwOiB7XG4gICAgICBmb250U2l6ZTogWzEsIDJdLFxuICAgICAgY29sb3I6IFwidGV4dFwiLFxuICAgICAgbGluZUhlaWdodDogXCJoZWFkaW5nXCIsXG4gICAgfSxcbiAgICBcIi5wYWNrYWdlX19uYW1lXCI6IHtcbiAgICAgIG1hcmdpbkJvdHRvbTogWzEsIG51bGwsIDJdLFxuICAgIH0sXG4gIH0sXG4gIHByaWNlOiB7XG4gICAgZm9udFdlaWdodDogNTAwLFxuICAgIGZvbnRTaXplOiBbNCwgbnVsbCwgNSwgbnVsbCwgXCIzMHB4XCJdLFxuICAgIGxpbmVIZWlnaHQ6IDEsXG4gICAgbGV0dGVyU3BhY2luZzogXCItMC41NXB4XCIsXG4gICAgY29sb3I6IFwidGV4dFwiLFxuICAgIG1hcmdpbkJvdHRvbTogMixcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxuICAgIHB0OiBbNCwgNl0sXG4gICAgXCI+IHNwYW5cIjoge1xuICAgICAgcG9zaXRpb246IFwicmVsYXRpdmVcIixcbiAgICAgIHBsOiBcIjNweFwiLFxuICAgICAgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIixcbiAgICAgIGZvbnRTaXplOiBbMSwgMl0sXG4gICAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgIH0sXG4gIH0sXG4gIGxpc3RJdGVtOiB7XG4gICAgZm9udEZhbWlseTogXCJETSBTYW5zXCIsXG4gICAgZm9udFN0eWxlOiBcIm5vcm1hbFwiLFxuICAgIGZvbnRXZWlnaHQ6IFwibm9ybWFsXCIsXG4gICAgZm9udFNpemU6IFsxLCAyXSxcbiAgICBsaW5lSGVpZ2h0OiBbMS43NSwgMS42XSxcbiAgICBtYjogMyxcbiAgICBhbGlnbkl0ZW1zOiBcImZsZXgtc3RhcnRcIixcbiAgICBjb2xvcjogXCJ0ZXh0XCIsXG4gICAgXCImLmNsb3NlZFwiOiB7XG4gICAgICBvcGFjaXR5OiAwLjU1LFxuICAgICAgYnV0dG9uOiB7XG4gICAgICAgIGNvbG9yOiBcIiM3ODhGQjVcIixcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcbiAgYnV0dG9uR3JvdXA6IHtcbiAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgbXQ6IFtcIjMwcHhcIiwgbnVsbCwgbnVsbCwgbnVsbCwgXCIzNXB4XCJdLFxuICAgIFwiLmZyZWVfX3RyYWlsXCI6IHtcbiAgICAgIGNvbG9yOiBcInNlY29uZGFyeVwiLFxuICAgICAgd2lkdGg6IFwiMTAwJVwiLFxuICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICBmb250V2VpZ2h0OiA3MDAsXG4gICAgICBmb250U2l6ZTogW1wiMTRweFwiLCAxXSxcbiAgICAgIHA6IFwiMjBweCAwIDBcIixcbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=