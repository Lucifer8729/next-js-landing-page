webpackHotUpdate_N_E("pages/index",{

/***/ "./src/sections/testimonial.js":
/*!*************************************!*\
  !*** ./src/sections/testimonial.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TestimonialCard; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! theme-ui */ "./node_modules/theme-ui/dist/index.esm.js");
/* harmony import */ var components_section_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! components/section-header */ "./src/components/section-header.js");
/* harmony import */ var components_rating__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/rating */ "./src/components/rating.js");
/* harmony import */ var components_button_group__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/button-group */ "./src/components/button-group.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-multi-carousel */ "./node_modules/react-multi-carousel/index.js");
/* harmony import */ var react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! assets/testimonial/avatar1.png */ "./src/assets/testimonial/avatar1.png");
/* harmony import */ var assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! assets/testimonial/avatar2.png */ "./src/assets/testimonial/avatar2.png");
/* harmony import */ var assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! assets/testimonial/avatar3.png */ "./src/assets/testimonial/avatar3.png");
/* harmony import */ var assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! assets/testimonial/avatar4.png */ "./src/assets/testimonial/avatar4.png");
/* harmony import */ var assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10__);

var _jsxFileName = "C:\\Users\\saura\\OneDrive\\Desktop\\To_do\\FullStack Devloper\\Frontend\\ReactJS\\nextjs_landing_page\\src\\sections\\testimonial.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

/** @jsx jsx */









var data = [{
  id: 1,
  title: "Modern look & trending design",
  description: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
  avatar: assets_testimonial_avatar1_png__WEBPACK_IMPORTED_MODULE_7___default.a,
  name: "Denny Hilguston",
  designation: "@denny.hil",
  review: 4
}, {
  id: 2,
  title: "Design Quality & performance",
  description: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
  avatar: assets_testimonial_avatar2_png__WEBPACK_IMPORTED_MODULE_8___default.a,
  name: "Denny Hilguston",
  designation: "@denny.hil",
  review: 5
}, {
  id: 3,
  title: "Layout and organized layers",
  description: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
  avatar: assets_testimonial_avatar3_png__WEBPACK_IMPORTED_MODULE_9___default.a,
  name: "Denny Hilguston",
  designation: "@denny.hil",
  review: 5
}, {
  id: 4,
  title: "Modern look & trending design",
  description: "Get working experience to work with this amazing team & in future want to work together for bright future projects and also make deposit to freelancer.",
  avatar: assets_testimonial_avatar4_png__WEBPACK_IMPORTED_MODULE_10___default.a,
  name: "Denny Hilguston",
  designation: "@denny.hil",
  review: 4
}];
var responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1619
    },
    items: 4,
    slidesToSlide: 4 // optional, default to 1.

  },
  laptop: {
    breakpoint: {
      max: 1619,
      min: 1024
    },
    items: 3,
    slidesToSlide: 3 // optional, default to 1.

  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 640
    },
    items: 2,
    slidesToSlide: 2 // optional, default to 1.

  },
  mobile: {
    breakpoint: {
      max: 639,
      min: 0
    },
    items: 1,
    slidesToSlide: 1 // optional, default to 1.

  }
};
var carouselParams = {
  additionalTransfrom: 0,
  arrows: false,
  autoPlaySpeed: 3000,
  centerMode: false,
  className: "",
  containerClass: "carousel-container",
  customButtonGroup: Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_button_group__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 22
    }
  }),
  dotListClass: "",
  draggable: true,
  focusOnSelect: false,
  infinite: true,
  itemClass: "",
  keyBoardControl: true,
  minimumTouchDrag: 80,
  renderButtonGroupOutside: true,
  renderDotsOutside: false,
  responsive: responsive,
  showDots: false,
  sliderClass: "",
  slidesToSlide: 1
};
function TestimonialCard() {
  var _this = this;

  return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])("section", {
    id: "testimonial",
    sx: {
      variant: "section.testimonial"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 5
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Container"], {
    css: {
      textAlign: "center"
    },
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_section_header__WEBPACK_IMPORTED_MODULE_3__["default"], {
    slogan: "Testimonial",
    title: "Meet Client Satisfaction",
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 9
    }
  })), Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    sx: styleMedia.carouselWrapper,
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }
  }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(react_multi_carousel__WEBPACK_IMPORTED_MODULE_6___default.a, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, carouselParams, {
    __self: this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 9
    }
  }), data.map(function (item) {
    return Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(theme_ui__WEBPACK_IMPORTED_MODULE_2__["Box"], {
      sx: styles.reviewCard,
      key: item.sliderClass,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 111,
        columnNumber: 13
      }
    }, Object(theme_ui__WEBPACK_IMPORTED_MODULE_2__["jsx"])(components_rating__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 15
      }
    }));
  }))));
}
_c = TestimonialCard;
var styles = {
  carouselWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "column",
    alignItems: "flex-end",
    mt: "-30px",
    px: "15px",
    ".carousel-container": {
      width: "100%",
      maxWidth: ["100%", null, null, "750px", "1000px", "1180px", null, "calc(50% + 865px)"],
      mr: ["auto", null, null, null, null, null, null, "-220px"],
      ml: "auto",
      ".react-multi-carousel-item": {
        transition: "all 0.25s"
      },
      ".react-multi-carousel-item--active:nth-of-type(4n)": {
        opacity: "0.5",
        "@media screen and (max-width: 1620px)": {
          opacity: 1
        }
      }
    }
  },
  reviewCard: {
    boxShadow: "0px 0px 1px rgba(38, 78, 118, 0.35)",
    transition: "all 0.3s",
    borderRadius: "6px",
    p: ["30px 20px 35px", "30px 25px 35px", "30px 20px 35px", "35px 30px 40px 40px", "30px 30px 35px", "35px 30px 40px 40px"],
    bg: "white",
    textAlign: "left",
    m: ["28px 5px 30px 5px", "28px 20px 30px 20px", "28px 15px 30px 15px", "28px 15px 30px 15px", "30px 20px 40px"],
    "&:hover": {
      boxShadow: "0px 6px 30px rgba(38, 78, 118, 0.1)"
    },
    ".rating": {
      mb: [1, null, null, 2],
      ul: {
        pl: 0,
        listStyle: "none",
        mb: 0,
        display: "flex"
      },
      svg: {
        marginRight: "2px",
        "&:last-of-type": {
          marginRight: 0
        }
      },
      ".star": {
        color: "primary",
        mr: "1px"
      },
      ".star-o": {
        color: "#ddd",
        mr: "1px"
      }
    },
    ".card-footer": {
      display: "flex",
      alignItems: "center",
      marginTop: [5, null, null, "33px"],
      ".image": {
        flexShrink: 0,
        mr: [3, null, null, 4],
        display: "flex",
        img: {
          width: "55px",
          height: "55px",
          borderRadius: "50%",
          objectFit: "cover"
        }
      }
    }
  },
  title: {
    fontSize: [1, 2],
    fontWeight: 700,
    mb: [3, null, null, "22px"],
    color: "text",
    lineHeight: 1.6
  },
  description: {
    fontSize: [1, null, null, 2],
    fontWeight: "normal",
    color: "text",
    lineHeight: [1.85, null, 2]
  },
  heading: {
    fontSize: [1, null, null, 2],
    fontWeight: 700,
    mb: "3px",
    color: "text",
    lineHeight: 1.3
  },
  designation: {
    color: "primary",
    fontWeight: "500",
    fontSize: 1,
    lineHeight: 1.4
  }
};

var _c;

$RefreshReg$(_c, "TestimonialCard");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFsLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhdmF0YXIiLCJBdmF0YXIxIiwibmFtZSIsImRlc2lnbmF0aW9uIiwicmV2aWV3IiwiQXZhdGFyMiIsIkF2YXRhcjMiLCJBdmF0YXI0IiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJzbGlkZXNUb1NsaWRlIiwibGFwdG9wIiwidGFibGV0IiwibW9iaWxlIiwiY2Fyb3VzZWxQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJjb250YWluZXJDbGFzcyIsImN1c3RvbUJ1dHRvbkdyb3VwIiwiZG90TGlzdENsYXNzIiwiZHJhZ2dhYmxlIiwiZm9jdXNPblNlbGVjdCIsImluZmluaXRlIiwiaXRlbUNsYXNzIiwia2V5Qm9hcmRDb250cm9sIiwibWluaW11bVRvdWNoRHJhZyIsInJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZSIsInJlbmRlckRvdHNPdXRzaWRlIiwic2hvd0RvdHMiLCJzbGlkZXJDbGFzcyIsIlRlc3RpbW9uaWFsQ2FyZCIsInZhcmlhbnQiLCJ0ZXh0QWxpZ24iLCJzdHlsZU1lZGlhIiwiY2Fyb3VzZWxXcmFwcGVyIiwibWFwIiwiaXRlbSIsInN0eWxlcyIsInJldmlld0NhcmQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm10IiwicHgiLCJ3aWR0aCIsIm1heFdpZHRoIiwibXIiLCJtbCIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwicCIsImJnIiwibSIsIm1iIiwidWwiLCJwbCIsImxpc3RTdHlsZSIsInN2ZyIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJmbGV4U2hyaW5rIiwiaW1nIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsImhlYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNYO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSwrQkFGVDtBQUdFQyxhQUFXLEVBQ1QseUpBSko7QUFLRUMsUUFBTSxFQUFFQyxxRUFMVjtBQU1FQyxNQUFJLEVBQUUsaUJBTlI7QUFPRUMsYUFBVyxFQUFFLFlBUGY7QUFRRUMsUUFBTSxFQUFFO0FBUlYsQ0FEVyxFQVdYO0FBQ0VQLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSw4QkFGVDtBQUdFQyxhQUFXLEVBQ1QseUpBSko7QUFLRUMsUUFBTSxFQUFFSyxxRUFMVjtBQU1FSCxNQUFJLEVBQUUsaUJBTlI7QUFPRUMsYUFBVyxFQUFFLFlBUGY7QUFRRUMsUUFBTSxFQUFFO0FBUlYsQ0FYVyxFQXFCWDtBQUNFUCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsNkJBRlQ7QUFHRUMsYUFBVyxFQUNULHlKQUpKO0FBS0VDLFFBQU0sRUFBRU0scUVBTFY7QUFNRUosTUFBSSxFQUFFLGlCQU5SO0FBT0VDLGFBQVcsRUFBRSxZQVBmO0FBUUVDLFFBQU0sRUFBRTtBQVJWLENBckJXLEVBK0JYO0FBQ0VQLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSwrQkFGVDtBQUdFQyxhQUFXLEVBQ1QseUpBSko7QUFLRUMsUUFBTSxFQUFFTyxzRUFMVjtBQU1FTCxNQUFJLEVBQUUsaUJBTlI7QUFPRUMsYUFBVyxFQUFFLFlBUGY7QUFRRUMsUUFBTSxFQUFFO0FBUlYsQ0EvQlcsQ0FBYjtBQTJDQSxJQUFNSSxV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QUFFTEMsY0FBVSxFQUFFLEdBRlA7QUFHTGIsTUFBRSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLE1BQWhCLENBSEM7QUFJTE0sU0FBSyxFQUFFLE1BSkY7QUFLTFEsY0FBVSxFQUFFO0FBTFAsR0FqR007QUF3R2I5RSxhQUFXLEVBQUU7QUFDWDRFLFlBQVEsRUFBRSxDQUFDLENBQUQsRUFBSSxJQUFKLEVBQVUsSUFBVixFQUFnQixDQUFoQixDQURDO0FBRVhDLGNBQVUsRUFBRSxRQUZEO0FBR1hQLFNBQUssRUFBRSxNQUhJO0FBSVhRLGNBQVUsRUFBRSxDQUFDLElBQUQsRUFBTyxJQUFQLEVBQWEsQ0FBYjtBQUpELEdBeEdBO0FBOEdiQyxTQUFPLEVBQUU7QUFDUEgsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLENBQWhCLENBREg7QUFFUEMsY0FBVSxFQUFFLEdBRkw7QUFHUGIsTUFBRSxFQUFFLEtBSEc7QUFJUE0sU0FBSyxFQUFFLE1BSkE7QUFLUFEsY0FBVSxFQUFFO0FBTEwsR0E5R0k7QUFxSGIxRSxhQUFXLEVBQUU7QUFDWGtFLFNBQUssRUFBRSxTQURJO0FBRVhPLGNBQVUsRUFBRSxLQUZEO0FBR1hELFlBQVEsRUFBRSxDQUhDO0FBSVhFLGNBQVUsRUFBRTtBQUpEO0FBckhBLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjQ1ZmI3N2FlOWU3N2Q4ZTk5MTguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4IGpzeCAqL1xuaW1wb3J0IHsganN4LCBDb250YWluZXIsIEhlYWRpbmcsIFRleHQsIEJveCwgSW1hZ2UgfSBmcm9tIFwidGhlbWUtdWlcIjtcbmltcG9ydCBTZWN0aW9uSGVhZGVyIGZyb20gXCJjb21wb25lbnRzL3NlY3Rpb24taGVhZGVyXCI7XG5pbXBvcnQgUmF0aW5nIGZyb20gXCJjb21wb25lbnRzL3JhdGluZ1wiO1xuaW1wb3J0IEJ1dHRvbkdyb3VwIGZyb20gXCJjb21wb25lbnRzL2J1dHRvbi1ncm91cFwiO1xuaW1wb3J0IENhcm91c2VsIGZyb20gXCJyZWFjdC1tdWx0aS1jYXJvdXNlbFwiO1xuXG5pbXBvcnQgQXZhdGFyMSBmcm9tIFwiYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjEucG5nXCI7XG5pbXBvcnQgQXZhdGFyMiBmcm9tIFwiYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjIucG5nXCI7XG5pbXBvcnQgQXZhdGFyMyBmcm9tIFwiYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjMucG5nXCI7XG5pbXBvcnQgQXZhdGFyNCBmcm9tIFwiYXNzZXRzL3Rlc3RpbW9uaWFsL2F2YXRhcjQucG5nXCI7XG5cbmNvbnN0IGRhdGEgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICB0aXRsZTogXCJNb2Rlcm4gbG9vayAmIHRyZW5kaW5nIGRlc2lnblwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJHZXQgd29ya2luZyBleHBlcmllbmNlIHRvIHdvcmsgd2l0aCB0aGlzIGFtYXppbmcgdGVhbSAmIGluIGZ1dHVyZSB3YW50IHRvIHdvcmsgdG9nZXRoZXIgZm9yIGJyaWdodCBmdXR1cmUgcHJvamVjdHMgYW5kIGFsc28gbWFrZSBkZXBvc2l0IHRvIGZyZWVsYW5jZXIuXCIsXG4gICAgYXZhdGFyOiBBdmF0YXIxLFxuICAgIG5hbWU6IFwiRGVubnkgSGlsZ3VzdG9uXCIsXG4gICAgZGVzaWduYXRpb246IFwiQGRlbm55LmhpbFwiLFxuICAgIHJldmlldzogNCxcbiAgfSxcbiAge1xuICAgIGlkOiAyLFxuICAgIHRpdGxlOiBcIkRlc2lnbiBRdWFsaXR5ICYgcGVyZm9ybWFuY2VcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiR2V0IHdvcmtpbmcgZXhwZXJpZW5jZSB0byB3b3JrIHdpdGggdGhpcyBhbWF6aW5nIHRlYW0gJiBpbiBmdXR1cmUgd2FudCB0byB3b3JrIHRvZ2V0aGVyIGZvciBicmlnaHQgZnV0dXJlIHByb2plY3RzIGFuZCBhbHNvIG1ha2UgZGVwb3NpdCB0byBmcmVlbGFuY2VyLlwiLFxuICAgIGF2YXRhcjogQXZhdGFyMixcbiAgICBuYW1lOiBcIkRlbm55IEhpbGd1c3RvblwiLFxuICAgIGRlc2lnbmF0aW9uOiBcIkBkZW5ueS5oaWxcIixcbiAgICByZXZpZXc6IDUsXG4gIH0sXG4gIHtcbiAgICBpZDogMyxcbiAgICB0aXRsZTogXCJMYXlvdXQgYW5kIG9yZ2FuaXplZCBsYXllcnNcIixcbiAgICBkZXNjcmlwdGlvbjpcbiAgICAgIFwiR2V0IHdvcmtpbmcgZXhwZXJpZW5jZSB0byB3b3JrIHdpdGggdGhpcyBhbWF6aW5nIHRlYW0gJiBpbiBmdXR1cmUgd2FudCB0byB3b3JrIHRvZ2V0aGVyIGZvciBicmlnaHQgZnV0dXJlIHByb2plY3RzIGFuZCBhbHNvIG1ha2UgZGVwb3NpdCB0byBmcmVlbGFuY2VyLlwiLFxuICAgIGF2YXRhcjogQXZhdGFyMyxcbiAgICBuYW1lOiBcIkRlbm55IEhpbGd1c3RvblwiLFxuICAgIGRlc2lnbmF0aW9uOiBcIkBkZW5ueS5oaWxcIixcbiAgICByZXZpZXc6IDUsXG4gIH0sXG4gIHtcbiAgICBpZDogNCxcbiAgICB0aXRsZTogXCJNb2Rlcm4gbG9vayAmIHRyZW5kaW5nIGRlc2lnblwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJHZXQgd29ya2luZyBleHBlcmllbmNlIHRvIHdvcmsgd2l0aCB0aGlzIGFtYXppbmcgdGVhbSAmIGluIGZ1dHVyZSB3YW50IHRvIHdvcmsgdG9nZXRoZXIgZm9yIGJyaWdodCBmdXR1cmUgcHJvamVjdHMgYW5kIGFsc28gbWFrZSBkZXBvc2l0IHRvIGZyZWVsYW5jZXIuXCIsXG4gICAgYXZhdGFyOiBBdmF0YXI0LFxuICAgIG5hbWU6IFwiRGVubnkgSGlsZ3VzdG9uXCIsXG4gICAgZGVzaWduYXRpb246IFwiQGRlbm55LmhpbFwiLFxuICAgIHJldmlldzogNCxcbiAgfSxcbl07XG5cbmNvbnN0IHJlc3BvbnNpdmUgPSB7XG4gIGRlc2t0b3A6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogMzAwMCwgbWluOiAxNjE5IH0sXG4gICAgaXRlbXM6IDQsXG4gICAgc2xpZGVzVG9TbGlkZTogNCwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cbiAgfSxcbiAgbGFwdG9wOiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDE2MTksIG1pbjogMTAyNCB9LFxuICAgIGl0ZW1zOiAzLFxuICAgIHNsaWRlc1RvU2xpZGU6IDMsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gIH0sXG4gIHRhYmxldDoge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAxMDI0LCBtaW46IDY0MCB9LFxuICAgIGl0ZW1zOiAyLFxuICAgIHNsaWRlc1RvU2xpZGU6IDIsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gIH0sXG4gIG1vYmlsZToge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiA2MzksIG1pbjogMCB9LFxuICAgIGl0ZW1zOiAxLFxuICAgIHNsaWRlc1RvU2xpZGU6IDEsIC8vIG9wdGlvbmFsLCBkZWZhdWx0IHRvIDEuXG4gIH0sXG59O1xuXG5jb25zdCBjYXJvdXNlbFBhcmFtcyA9IHtcbiAgYWRkaXRpb25hbFRyYW5zZnJvbTogMCxcbiAgYXJyb3dzOiBmYWxzZSxcbiAgYXV0b1BsYXlTcGVlZDogMzAwMCxcbiAgY2VudGVyTW9kZTogZmFsc2UsXG4gIGNsYXNzTmFtZTogXCJcIixcbiAgY29udGFpbmVyQ2xhc3M6IFwiY2Fyb3VzZWwtY29udGFpbmVyXCIsXG4gIGN1c3RvbUJ1dHRvbkdyb3VwOiA8QnV0dG9uR3JvdXAgLz4sXG4gIGRvdExpc3RDbGFzczogXCJcIixcbiAgZHJhZ2dhYmxlOiB0cnVlLFxuICBmb2N1c09uU2VsZWN0OiBmYWxzZSxcbiAgaW5maW5pdGU6IHRydWUsXG4gIGl0ZW1DbGFzczogXCJcIixcbiAga2V5Qm9hcmRDb250cm9sOiB0cnVlLFxuICBtaW5pbXVtVG91Y2hEcmFnOiA4MCxcbiAgcmVuZGVyQnV0dG9uR3JvdXBPdXRzaWRlOiB0cnVlLFxuICByZW5kZXJEb3RzT3V0c2lkZTogZmFsc2UsXG4gIHJlc3BvbnNpdmU6IHJlc3BvbnNpdmUsXG4gIHNob3dEb3RzOiBmYWxzZSxcbiAgc2xpZGVyQ2xhc3M6IFwiXCIsXG4gIHNsaWRlc1RvU2xpZGU6IDEsXG59O1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZXN0aW1vbmlhbENhcmQoKSB7XG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gaWQ9XCJ0ZXN0aW1vbmlhbFwiIHN4PXt7IHZhcmlhbnQ6IFwic2VjdGlvbi50ZXN0aW1vbmlhbFwiIH19PlxuICAgICAgPENvbnRhaW5lciBjc3M9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiIH19PlxuICAgICAgICA8U2VjdGlvbkhlYWRlciBzbG9nYW49XCJUZXN0aW1vbmlhbFwiIHRpdGxlPVwiTWVldCBDbGllbnQgU2F0aXNmYWN0aW9uXCIgLz5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPEJveCBzeD17c3R5bGVNZWRpYS5jYXJvdXNlbFdyYXBwZXJ9PlxuICAgICAgICA8Q2Fyb3VzZWwgey4uLmNhcm91c2VsUGFyYW1zfT5cbiAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0pID0+IChcbiAgICAgICAgICAgIDxCb3ggc3g9e3N0eWxlcy5yZXZpZXdDYXJkfSBrZXk9e2l0ZW0uc2xpZGVyQ2xhc3N9PlxuICAgICAgICAgICAgICA8UmF0aW5nIC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgIDwvQm94PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBjYXJvdXNlbFdyYXBwZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LWVuZFwiLFxuICAgIG10OiBcIi0zMHB4XCIsXG4gICAgcHg6IFwiMTVweFwiLFxuICAgIFwiLmNhcm91c2VsLWNvbnRhaW5lclwiOiB7XG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBtYXhXaWR0aDogW1xuICAgICAgICBcIjEwMCVcIixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgXCI3NTBweFwiLFxuICAgICAgICBcIjEwMDBweFwiLFxuICAgICAgICBcIjExODBweFwiLFxuICAgICAgICBudWxsLFxuICAgICAgICBcImNhbGMoNTAlICsgODY1cHgpXCIsXG4gICAgICBdLFxuICAgICAgbXI6IFtcImF1dG9cIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgXCItMjIwcHhcIl0sXG4gICAgICBtbDogXCJhdXRvXCIsXG4gICAgICBcIi5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtXCI6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4yNXNcIixcbiAgICAgIH0sXG4gICAgICBcIi5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoNG4pXCI6IHtcbiAgICAgICAgb3BhY2l0eTogXCIwLjVcIixcbiAgICAgICAgXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjIwcHgpXCI6IHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICByZXZpZXdDYXJkOiB7XG4gICAgYm94U2hhZG93OiBcIjBweCAwcHggMXB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMzUpXCIsXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMC4zc1wiLFxuICAgIGJvcmRlclJhZGl1czogXCI2cHhcIixcbiAgICBwOiBbXG4gICAgICBcIjMwcHggMjBweCAzNXB4XCIsXG4gICAgICBcIjMwcHggMjVweCAzNXB4XCIsXG4gICAgICBcIjMwcHggMjBweCAzNXB4XCIsXG4gICAgICBcIjM1cHggMzBweCA0MHB4IDQwcHhcIixcbiAgICAgIFwiMzBweCAzMHB4IDM1cHhcIixcbiAgICAgIFwiMzVweCAzMHB4IDQwcHggNDBweFwiLFxuICAgIF0sXG4gICAgYmc6IFwid2hpdGVcIixcbiAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgIG06IFtcbiAgICAgIFwiMjhweCA1cHggMzBweCA1cHhcIixcbiAgICAgIFwiMjhweCAyMHB4IDMwcHggMjBweFwiLFxuICAgICAgXCIyOHB4IDE1cHggMzBweCAxNXB4XCIsXG4gICAgICBcIjI4cHggMTVweCAzMHB4IDE1cHhcIixcbiAgICAgIFwiMzBweCAyMHB4IDQwcHhcIixcbiAgICBdLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBib3hTaGFkb3c6IFwiMHB4IDZweCAzMHB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSlcIixcbiAgICB9LFxuICAgIFwiLnJhdGluZ1wiOiB7XG4gICAgICBtYjogWzEsIG51bGwsIG51bGwsIDJdLFxuICAgICAgdWw6IHtcbiAgICAgICAgcGw6IDAsXG4gICAgICAgIGxpc3RTdHlsZTogXCJub25lXCIsXG4gICAgICAgIG1iOiAwLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIH0sXG4gICAgICBzdmc6IHtcbiAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMnB4XCIsXG4gICAgICAgIFwiJjpsYXN0LW9mLXR5cGVcIjoge1xuICAgICAgICAgIG1hcmdpblJpZ2h0OiAwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFwiLnN0YXJcIjoge1xuICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICAgIG1yOiBcIjFweFwiLFxuICAgICAgfSxcbiAgICAgIFwiLnN0YXItb1wiOiB7XG4gICAgICAgIGNvbG9yOiBcIiNkZGRcIixcbiAgICAgICAgbXI6IFwiMXB4XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCIuY2FyZC1mb290ZXJcIjoge1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgbWFyZ2luVG9wOiBbNSwgbnVsbCwgbnVsbCwgXCIzM3B4XCJdLFxuICAgICAgXCIuaW1hZ2VcIjoge1xuICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICBtcjogWzMsIG51bGwsIG51bGwsIDRdLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgd2lkdGg6IFwiNTVweFwiLFxuICAgICAgICAgIGhlaWdodDogXCI1NXB4XCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiBbMSwgMl0sXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIG1iOiBbMywgbnVsbCwgbnVsbCwgXCIyMnB4XCJdLFxuICAgIGNvbG9yOiBcInRleHRcIixcbiAgICBsaW5lSGVpZ2h0OiAxLjYsXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcbiAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgIGNvbG9yOiBcInRleHRcIixcbiAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgMl0sXG4gIH0sXG4gIGhlYWRpbmc6IHtcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBtYjogXCIzcHhcIixcbiAgICBjb2xvcjogXCJ0ZXh0XCIsXG4gICAgbGluZUhlaWdodDogMS4zLFxuICB9LFxuICBkZXNpZ25hdGlvbjoge1xuICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgIGZvbnRTaXplOiAxLFxuICAgIGxpbmVIZWlnaHQ6IDEuNCxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9