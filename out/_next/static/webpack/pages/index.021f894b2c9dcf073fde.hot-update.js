webpackHotUpdate_N_E("pages/index",{

/***/ "./src/components/footer/footer.js":
/*!*****************************************!*\
  !*** ./src/components/footer/footer.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Footer; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/link */ "./src/components/link.js");
/* harmony import */ var _footer_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer.data */ "./src/components/footer/footer.data.js");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! assets/logo.svg */ "./src/assets/logo.svg");
/* harmony import */ var assets_logo_svg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(assets_logo_svg__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\saura\\OneDrive\\Desktop\\To_do\\FullStack Devloper\\Frontend\\ReactJS\\nextjs_landing_page\\src\\components\\footer\\footer.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/** @jsx jsx */




function Footer() {
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("footer", {
    sx: styles.footer,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.footerBottomArea,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 9
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
    path: "/",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: assets_logo_svg__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "Logo",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 13
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_1__["Box"], {
    sx: styles.footer.menus,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 11
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])("nav", {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 13
    }
  }, _footer_data__WEBPACK_IMPORTED_MODULE_3__["default"].map(function (item, i) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_1__["jsx"])(components_link__WEBPACK_IMPORTED_MODULE_2__["Link"], {
      key: i,
      path: item.path,
      label: item.label,
      sx: styles.footer.link,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 17
      }
    });
  }))))));
}
_c = Footer;
var styles = {
  footer: {
    footerBottomArea: {
      borderTop: "1px solid",
      borderTopColor: "border_color",
      display: "flex",
      pt: [7, null, 8],
      pb: ["40px", null, "100px"],
      textAlign: "center",
      flexDirection: "column"
    },
    menus: {
      mt: [3, 4],
      mb: 2,
      nav: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexWrap: "wrap"
      }
    },
    link: {
      fontSize: [1, "15px"],
      color: "text",
      fontWeight: "400",
      mb: 2,
      cursor: "pointer",
      transition: "all 0.35s",
      display: "block",
      textDecoration: "none",
      lineHeight: [1.5, null, 1.8],
      px: [2, null, 4],
      ":hover": {
        color: "primary"
      }
    },
    copyright: {
      fontSize: [1, "15px"],
      width: "100%"
    }
  }
};

var _c;

$RefreshReg$(_c, "Footer");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJzdHlsZXMiLCJmb290ZXIiLCJmb290ZXJCb3R0b21BcmVhIiwiRm9vdGVyTG9nbyIsIm1lbnVzIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpIiwicGF0aCIsImxhYmVsIiwibGluayIsImJvcmRlclRvcCIsImJvcmRlclRvcENvbG9yIiwiZGlzcGxheSIsInB0IiwicGIiLCJ0ZXh0QWxpZ24iLCJmbGV4RGlyZWN0aW9uIiwibXQiLCJtYiIsIm5hdiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImZsZXhXcmFwIiwiZm9udFNpemUiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJjdXJzb3IiLCJ0cmFuc2l0aW9uIiwidGV4dERlY29yYXRpb24iLCJsaW5lSGVpZ2h0IiwicHgiLCJjb3B5cmlnaHQiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUMvQixTQUNFO0FBQVEsTUFBRSxFQUFFQyxNQUFNLENBQUNDLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxnQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLG9EQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDhDQUFEO0FBQU8sT0FBRyxFQUFFQyxzREFBWjtBQUF3QixPQUFHLEVBQUMsTUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUgsTUFBTSxDQUFDQyxNQUFQLENBQWNHLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLG9EQUFJLENBQUNDLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxXQUNSLHFEQUFDLG9EQUFEO0FBQ0UsU0FBRyxFQUFFQSxDQURQO0FBRUUsVUFBSSxFQUFFRCxJQUFJLENBQUNFLElBRmI7QUFHRSxXQUFLLEVBQUVGLElBQUksQ0FBQ0csS0FIZDtBQUlFLFFBQUUsRUFBRVYsTUFBTSxDQUFDQyxNQUFQLENBQWNVLElBSnBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEUTtBQUFBLEdBQVQsQ0FESCxDQURGLENBSkYsQ0FERixDQURGLENBREY7QUF1QkQ7S0F4QnVCWixNO0FBMEJ4QixJQUFNQyxNQUFNLEdBQUc7QUFDYkMsUUFBTSxFQUFFO0FBQ05DLG9CQUFnQixFQUFFO0FBQ2hCVSxlQUFTLEVBQUUsV0FESztBQUVoQkMsb0JBQWMsRUFBRSxjQUZBO0FBR2hCQyxhQUFPLEVBQUUsTUFITztBQUloQkMsUUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxDQUFWLENBSlk7QUFLaEJDLFFBQUUsRUFBRSxDQUFDLE1BQUQsRUFBUyxJQUFULEVBQWUsT0FBZixDQUxZO0FBTWhCQyxlQUFTLEVBQUUsUUFOSztBQU9oQkMsbUJBQWEsRUFBRTtBQVBDLEtBRFo7QUFVTmQsU0FBSyxFQUFFO0FBQ0xlLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxDQUFKLENBREM7QUFFTEMsUUFBRSxFQUFFLENBRkM7QUFHTEMsU0FBRyxFQUFFO0FBQ0hQLGVBQU8sRUFBRSxNQUROO0FBRUhRLGtCQUFVLEVBQUUsUUFGVDtBQUdIQyxzQkFBYyxFQUFFLFFBSGI7QUFJSEMsZ0JBQVEsRUFBRTtBQUpQO0FBSEEsS0FWRDtBQXFCTmIsUUFBSSxFQUFFO0FBQ0pjLGNBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxNQUFKLENBRE47QUFFSkMsV0FBSyxFQUFFLE1BRkg7QUFHSkMsZ0JBQVUsRUFBRSxLQUhSO0FBSUpQLFFBQUUsRUFBRSxDQUpBO0FBS0pRLFlBQU0sRUFBRSxTQUxKO0FBTUpDLGdCQUFVLEVBQUUsV0FOUjtBQU9KZixhQUFPLEVBQUUsT0FQTDtBQVFKZ0Isb0JBQWMsRUFBRSxNQVJaO0FBU0pDLGdCQUFVLEVBQUUsQ0FBQyxHQUFELEVBQU0sSUFBTixFQUFZLEdBQVosQ0FUUjtBQVVKQyxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLENBQVYsQ0FWQTtBQVdKLGdCQUFVO0FBQ1JOLGFBQUssRUFBRTtBQURDO0FBWE4sS0FyQkE7QUFvQ05PLGFBQVMsRUFBRTtBQUNUUixjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksTUFBSixDQUREO0FBRVRTLFdBQUssRUFBRTtBQUZFO0FBcENMO0FBREssQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4wMjFmODk0YjJjOWRjZjA3M2ZkZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIEJveCwgQ29udGFpbmVyLCBJbWFnZSwgVGV4dCB9IGZyb20gXCJ0aGVtZS11aVwiO1xuaW1wb3J0IHsgTGluayB9IGZyb20gXCJjb21wb25lbnRzL2xpbmtcIjtcbmltcG9ydCBkYXRhIGZyb20gXCIuL2Zvb3Rlci5kYXRhXCI7XG5pbXBvcnQgRm9vdGVyTG9nbyBmcm9tIFwiYXNzZXRzL2xvZ28uc3ZnXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvb3RlcigpIHtcbiAgcmV0dXJuIChcbiAgICA8Zm9vdGVyIHN4PXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgIDxDb250YWluZXI+XG4gICAgICAgIDxCb3ggc3g9e3N0eWxlcy5mb290ZXIuZm9vdGVyQm90dG9tQXJlYX0+XG4gICAgICAgICAgPExpbmsgcGF0aD1cIi9cIj5cbiAgICAgICAgICAgIDxJbWFnZSBzcmM9e0Zvb3RlckxvZ299IGFsdD1cIkxvZ29cIiAvPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8Qm94IHN4PXtzdHlsZXMuZm9vdGVyLm1lbnVzfT5cbiAgICAgICAgICAgIDxuYXY+XG4gICAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICAgICAgICAgIDxMaW5rXG4gICAgICAgICAgICAgICAgICBrZXk9e2l9XG4gICAgICAgICAgICAgICAgICBwYXRoPXtpdGVtLnBhdGh9XG4gICAgICAgICAgICAgICAgICBsYWJlbD17aXRlbS5sYWJlbH1cbiAgICAgICAgICAgICAgICAgIHN4PXtzdHlsZXMuZm9vdGVyLmxpbmt9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L25hdj5cbiAgICAgICAgICA8L0JveD5cbiAgICAgICAgPC9Cb3g+XG4gICAgICA8L0NvbnRhaW5lcj5cbiAgICA8L2Zvb3Rlcj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBmb290ZXI6IHtcbiAgICBmb290ZXJCb3R0b21BcmVhOiB7XG4gICAgICBib3JkZXJUb3A6IFwiMXB4IHNvbGlkXCIsXG4gICAgICBib3JkZXJUb3BDb2xvcjogXCJib3JkZXJfY29sb3JcIixcbiAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgcHQ6IFs3LCBudWxsLCA4XSxcbiAgICAgIHBiOiBbXCI0MHB4XCIsIG51bGwsIFwiMTAwcHhcIl0sXG4gICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiLFxuICAgIH0sXG4gICAgbWVudXM6IHtcbiAgICAgIG10OiBbMywgNF0sXG4gICAgICBtYjogMixcbiAgICAgIG5hdjoge1xuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXG4gICAgICAgIGZsZXhXcmFwOiBcIndyYXBcIixcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIGxpbms6IHtcbiAgICAgIGZvbnRTaXplOiBbMSwgXCIxNXB4XCJdLFxuICAgICAgY29sb3I6IFwidGV4dFwiLFxuICAgICAgZm9udFdlaWdodDogXCI0MDBcIixcbiAgICAgIG1iOiAyLFxuICAgICAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgICAgIHRyYW5zaXRpb246IFwiYWxsIDAuMzVzXCIsXG4gICAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXG4gICAgICBsaW5lSGVpZ2h0OiBbMS41LCBudWxsLCAxLjhdLFxuICAgICAgcHg6IFsyLCBudWxsLCA0XSxcbiAgICAgIFwiOmhvdmVyXCI6IHtcbiAgICAgICAgY29sb3I6IFwicHJpbWFyeVwiLFxuICAgICAgfSxcbiAgICB9LFxuICAgIGNvcHlyaWdodDoge1xuICAgICAgZm9udFNpemU6IFsxLCBcIjE1cHhcIl0sXG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgfSxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9