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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9vdGVyL2Zvb3Rlci5qcyJdLCJuYW1lcyI6WyJGb290ZXIiLCJzdHlsZXMiLCJmb290ZXIiLCJmb290ZXJCb3R0b21BcmVhIiwiRm9vdGVyTG9nbyIsIm1lbnVzIiwiZGF0YSIsIm1hcCIsIml0ZW0iLCJpIiwicGF0aCIsImxhYmVsIiwiYm9yZGVyVG9wIiwiYm9yZGVyVG9wQ29sb3IiLCJkaXNwbGF5IiwicHQiLCJwYiIsInRleHRBbGlnbiIsImZsZXhEaXJlY3Rpb24iLCJtdCIsIm1iIiwibmF2IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiZmxleFdyYXAiLCJsaW5rIiwiZm9udFNpemUiLCJjb2xvciIsImZvbnRXZWlnaHQiLCJjdXJzb3IiLCJ0cmFuc2l0aW9uIiwidGV4dERlY29yYXRpb24iLCJsaW5lSGVpZ2h0IiwicHgiLCJjb3B5cmlnaHQiLCJ3aWR0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRWUsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUMvQixTQUNFO0FBQVEsTUFBRSxFQUFFQyxNQUFNLENBQUNDLE1BQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRSxxREFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0UscURBQUMsNENBQUQ7QUFBSyxNQUFFLEVBQUVELE1BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxnQkFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLG9EQUFEO0FBQU0sUUFBSSxFQUFDLEdBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFLHFEQUFDLDhDQUFEO0FBQU8sT0FBRyxFQUFFQyxzREFBWjtBQUF3QixPQUFHLEVBQUMsTUFBNUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURGLENBREYsRUFJRSxxREFBQyw0Q0FBRDtBQUFLLE1BQUUsRUFBRUgsTUFBTSxDQUFDQyxNQUFQLENBQWNHLEtBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0dDLG9EQUFJLENBQUNDLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSxXQUNSLHFEQUFDLG9EQUFEO0FBQU0sU0FBRyxFQUFFQSxDQUFYO0FBQWMsVUFBSSxFQUFFRCxJQUFJLENBQUNFLElBQXpCO0FBQStCLFdBQUssRUFBRUYsSUFBSSxDQUFDRyxLQUEzQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRFE7QUFBQSxHQUFULENBREgsQ0FERixDQUpGLENBREYsQ0FERixDQURGO0FBa0JEO0tBbkJ1QlgsTTtBQXFCeEIsSUFBTUMsTUFBTSxHQUFHO0FBQ2JDLFFBQU0sRUFBRTtBQUNOQyxvQkFBZ0IsRUFBRTtBQUNoQlMsZUFBUyxFQUFFLFdBREs7QUFFaEJDLG9CQUFjLEVBQUUsY0FGQTtBQUdoQkMsYUFBTyxFQUFFLE1BSE87QUFJaEJDLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixDQUpZO0FBS2hCQyxRQUFFLEVBQUUsQ0FBQyxNQUFELEVBQVMsSUFBVCxFQUFlLE9BQWYsQ0FMWTtBQU1oQkMsZUFBUyxFQUFFLFFBTks7QUFPaEJDLG1CQUFhLEVBQUU7QUFQQyxLQURaO0FBVU5iLFNBQUssRUFBRTtBQUNMYyxRQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksQ0FBSixDQURDO0FBRUxDLFFBQUUsRUFBRSxDQUZDO0FBR0xDLFNBQUcsRUFBRTtBQUNIUCxlQUFPLEVBQUUsTUFETjtBQUVIUSxrQkFBVSxFQUFFLFFBRlQ7QUFHSEMsc0JBQWMsRUFBRSxRQUhiO0FBSUhDLGdCQUFRLEVBQUU7QUFKUDtBQUhBLEtBVkQ7QUFxQk5DLFFBQUksRUFBRTtBQUNKQyxjQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksTUFBSixDQUROO0FBRUpDLFdBQUssRUFBRSxNQUZIO0FBR0pDLGdCQUFVLEVBQUUsS0FIUjtBQUlKUixRQUFFLEVBQUUsQ0FKQTtBQUtKUyxZQUFNLEVBQUUsU0FMSjtBQU1KQyxnQkFBVSxFQUFFLFdBTlI7QUFPSmhCLGFBQU8sRUFBRSxPQVBMO0FBUUppQixvQkFBYyxFQUFFLE1BUlo7QUFTSkMsZ0JBQVUsRUFBRSxDQUFDLEdBQUQsRUFBTSxJQUFOLEVBQVksR0FBWixDQVRSO0FBVUpDLFFBQUUsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsQ0FBVixDQVZBO0FBV0osZ0JBQVU7QUFDUk4sYUFBSyxFQUFFO0FBREM7QUFYTixLQXJCQTtBQW9DTk8sYUFBUyxFQUFFO0FBQ1RSLGNBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxNQUFKLENBREQ7QUFFVFMsV0FBSyxFQUFFO0FBRkU7QUFwQ0w7QUFESyxDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjA0ODA4MzcxNWM5YWM2MGUzZmM1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiogQGpzeCBqc3ggKi9cbmltcG9ydCB7IGpzeCwgQm94LCBDb250YWluZXIsIEltYWdlLCBUZXh0IH0gZnJvbSBcInRoZW1lLXVpXCI7XG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcImNvbXBvbmVudHMvbGlua1wiO1xuaW1wb3J0IGRhdGEgZnJvbSBcIi4vZm9vdGVyLmRhdGFcIjtcbmltcG9ydCBGb290ZXJMb2dvIGZyb20gXCJhc3NldHMvbG9nby5zdmdcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9vdGVyKCkge1xuICByZXR1cm4gKFxuICAgIDxmb290ZXIgc3g9e3N0eWxlcy5mb290ZXJ9PlxuICAgICAgPENvbnRhaW5lcj5cbiAgICAgICAgPEJveCBzeD17c3R5bGVzLmZvb3Rlci5mb290ZXJCb3R0b21BcmVhfT5cbiAgICAgICAgICA8TGluayBwYXRoPVwiL1wiPlxuICAgICAgICAgICAgPEltYWdlIHNyYz17Rm9vdGVyTG9nb30gYWx0PVwiTG9nb1wiIC8+XG4gICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5mb290ZXIubWVudXN9PlxuICAgICAgICAgICAgPG5hdj5cbiAgICAgICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpKSA9PiAoXG4gICAgICAgICAgICAgICAgPExpbmsga2V5PXtpfSBwYXRoPXtpdGVtLnBhdGh9IGxhYmVsPXtpdGVtLmxhYmVsfSAvPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvbmF2PlxuICAgICAgICAgIDwvQm94PlxuICAgICAgICA8L0JveD5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgIDwvZm9vdGVyPlxuICApO1xufVxuXG5jb25zdCBzdHlsZXMgPSB7XG4gIGZvb3Rlcjoge1xuICAgIGZvb3RlckJvdHRvbUFyZWE6IHtcbiAgICAgIGJvcmRlclRvcDogXCIxcHggc29saWRcIixcbiAgICAgIGJvcmRlclRvcENvbG9yOiBcImJvcmRlcl9jb2xvclwiLFxuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBwdDogWzcsIG51bGwsIDhdLFxuICAgICAgcGI6IFtcIjQwcHhcIiwgbnVsbCwgXCIxMDBweFwiXSxcbiAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcbiAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgfSxcbiAgICBtZW51czoge1xuICAgICAgbXQ6IFszLCA0XSxcbiAgICAgIG1iOiAyLFxuICAgICAgbmF2OiB7XG4gICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcbiAgICAgICAgZmxleFdyYXA6IFwid3JhcFwiLFxuICAgICAgfSxcbiAgICB9LFxuXG4gICAgbGluazoge1xuICAgICAgZm9udFNpemU6IFsxLCBcIjE1cHhcIl0sXG4gICAgICBjb2xvcjogXCJ0ZXh0XCIsXG4gICAgICBmb250V2VpZ2h0OiBcIjQwMFwiLFxuICAgICAgbWI6IDIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4zNXNcIixcbiAgICAgIGRpc3BsYXk6IFwiYmxvY2tcIixcbiAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcbiAgICAgIGxpbmVIZWlnaHQ6IFsxLjUsIG51bGwsIDEuOF0sXG4gICAgICBweDogWzIsIG51bGwsIDRdLFxuICAgICAgXCI6aG92ZXJcIjoge1xuICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgY29weXJpZ2h0OiB7XG4gICAgICBmb250U2l6ZTogWzEsIFwiMTVweFwiXSxcbiAgICAgIHdpZHRoOiBcIjEwMCVcIixcbiAgICB9LFxuICB9LFxufTtcbiJdLCJzb3VyY2VSb290IjoiIn0=