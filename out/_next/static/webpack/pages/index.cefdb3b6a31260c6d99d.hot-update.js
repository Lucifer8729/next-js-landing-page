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
      item: item.review,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3NlY3Rpb25zL3Rlc3RpbW9uaWFsLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJhdmF0YXIiLCJBdmF0YXIxIiwibmFtZSIsImRlc2lnbmF0aW9uIiwicmV2aWV3IiwiQXZhdGFyMiIsIkF2YXRhcjMiLCJBdmF0YXI0IiwicmVzcG9uc2l2ZSIsImRlc2t0b3AiLCJicmVha3BvaW50IiwibWF4IiwibWluIiwiaXRlbXMiLCJzbGlkZXNUb1NsaWRlIiwibGFwdG9wIiwidGFibGV0IiwibW9iaWxlIiwiY2Fyb3VzZWxQYXJhbXMiLCJhZGRpdGlvbmFsVHJhbnNmcm9tIiwiYXJyb3dzIiwiYXV0b1BsYXlTcGVlZCIsImNlbnRlck1vZGUiLCJjbGFzc05hbWUiLCJjb250YWluZXJDbGFzcyIsImN1c3RvbUJ1dHRvbkdyb3VwIiwiZG90TGlzdENsYXNzIiwiZHJhZ2dhYmxlIiwiZm9jdXNPblNlbGVjdCIsImluZmluaXRlIiwiaXRlbUNsYXNzIiwia2V5Qm9hcmRDb250cm9sIiwibWluaW11bVRvdWNoRHJhZyIsInJlbmRlckJ1dHRvbkdyb3VwT3V0c2lkZSIsInJlbmRlckRvdHNPdXRzaWRlIiwic2hvd0RvdHMiLCJzbGlkZXJDbGFzcyIsIlRlc3RpbW9uaWFsQ2FyZCIsInZhcmlhbnQiLCJ0ZXh0QWxpZ24iLCJzdHlsZU1lZGlhIiwiY2Fyb3VzZWxXcmFwcGVyIiwibWFwIiwiaXRlbSIsInN0eWxlcyIsInJldmlld0NhcmQiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsIm10IiwicHgiLCJ3aWR0aCIsIm1heFdpZHRoIiwibXIiLCJtbCIsInRyYW5zaXRpb24iLCJvcGFjaXR5IiwiYm94U2hhZG93IiwiYm9yZGVyUmFkaXVzIiwicCIsImJnIiwibSIsIm1iIiwidWwiLCJwbCIsImxpc3RTdHlsZSIsInN2ZyIsIm1hcmdpblJpZ2h0IiwiY29sb3IiLCJtYXJnaW5Ub3AiLCJmbGV4U2hyaW5rIiwiaW1nIiwiaGVpZ2h0Iiwib2JqZWN0Rml0IiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwibGluZUhlaWdodCIsImhlYWRpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNYO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSwrQkFGVDtBQUdFQyxhQUFXLEVBQ1QseUpBSko7QUFLRUMsUUFBTSxFQUFFQyxxRUFMVjtBQU1FQyxNQUFJLEVBQUUsaUJBTlI7QUFPRUMsYUFBVyxFQUFFLFlBUGY7QUFRRUMsUUFBTSxFQUFFO0FBUlYsQ0FEVyxFQVdYO0FBQ0VQLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSw4QkFGVDtBQUdFQyxhQUFXLEVBQ1QseUpBSko7QUFLRUMsUUFBTSxFQUFFSyxxRUFMVjtBQU1FSCxNQUFJLEVBQUUsaUJBTlI7QUFPRUMsYUFBVyxFQUFFLFlBUGY7QUFRRUMsUUFBTSxFQUFFO0FBUlYsQ0FYVyxFQXFCWDtBQUNFUCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxPQUFLLEVBQUUsNkJBRlQ7QUFHRUMsYUFBVyxFQUNULHlKQUpKO0FBS0VDLFFBQU0sRUFBRU0scUVBTFY7QUFNRUosTUFBSSxFQUFFLGlCQU5SO0FBT0VDLGFBQVcsRUFBRSxZQVBmO0FBUUVDLFFBQU0sRUFBRTtBQVJWLENBckJXLEVBK0JYO0FBQ0VQLElBQUUsRUFBRSxDQUROO0FBRUVDLE9BQUssRUFBRSwrQkFGVDtBQUdFQyxhQUFXLEVBQ1QseUpBSko7QUFLRUMsUUFBTSxFQUFFTyxzRUFMVjtBQU1FTCxNQUFJLEVBQUUsaUJBTlI7QUFPRUMsYUFBVyxFQUFFLFlBUGY7QUFRRUMsUUFBTSxFQUFFO0FBUlYsQ0EvQlcsQ0FBYjtBQTJDQSxJQUFNSSxV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WUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FETDtBQUVMQyxjQUFVLEVBQUUsR0FGUDtBQUdMYixNQUFFLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsTUFBaEIsQ0FIQztBQUlMTSxTQUFLLEVBQUUsTUFKRjtBQUtMUSxjQUFVLEVBQUU7QUFMUCxHQWpHTTtBQXdHYjlFLGFBQVcsRUFBRTtBQUNYNEUsWUFBUSxFQUFFLENBQUMsQ0FBRCxFQUFJLElBQUosRUFBVSxJQUFWLEVBQWdCLENBQWhCLENBREM7QUFFWEMsY0FBVSxFQUFFLFFBRkQ7QUFHWFAsU0FBSyxFQUFFLE1BSEk7QUFJWFEsY0FBVSxFQUFFLENBQUMsSUFBRCxFQUFPLElBQVAsRUFBYSxDQUFiO0FBSkQsR0F4R0E7QUE4R2JDLFNBQU8sRUFBRTtBQUNQSCxZQUFRLEVBQUUsQ0FBQyxDQUFELEVBQUksSUFBSixFQUFVLElBQVYsRUFBZ0IsQ0FBaEIsQ0FESDtBQUVQQyxjQUFVLEVBQUUsR0FGTDtBQUdQYixNQUFFLEVBQUUsS0FIRztBQUlQTSxTQUFLLEVBQUUsTUFKQTtBQUtQUSxjQUFVLEVBQUU7QUFMTCxHQTlHSTtBQXFIYjFFLGFBQVcsRUFBRTtBQUNYa0UsU0FBSyxFQUFFLFNBREk7QUFFWE8sY0FBVSxFQUFFLEtBRkQ7QUFHWEQsWUFBUSxFQUFFLENBSEM7QUFJWEUsY0FBVSxFQUFFO0FBSkQ7QUFySEEsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jZWZkYjNiNmEzMTI2MGM2ZDk5ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqIEBqc3gganN4ICovXG5pbXBvcnQgeyBqc3gsIENvbnRhaW5lciwgSGVhZGluZywgVGV4dCwgQm94LCBJbWFnZSB9IGZyb20gXCJ0aGVtZS11aVwiO1xuaW1wb3J0IFNlY3Rpb25IZWFkZXIgZnJvbSBcImNvbXBvbmVudHMvc2VjdGlvbi1oZWFkZXJcIjtcbmltcG9ydCBSYXRpbmcgZnJvbSBcImNvbXBvbmVudHMvcmF0aW5nXCI7XG5pbXBvcnQgQnV0dG9uR3JvdXAgZnJvbSBcImNvbXBvbmVudHMvYnV0dG9uLWdyb3VwXCI7XG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSBcInJlYWN0LW11bHRpLWNhcm91c2VsXCI7XG5cbmltcG9ydCBBdmF0YXIxIGZyb20gXCJhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMS5wbmdcIjtcbmltcG9ydCBBdmF0YXIyIGZyb20gXCJhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMi5wbmdcIjtcbmltcG9ydCBBdmF0YXIzIGZyb20gXCJhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyMy5wbmdcIjtcbmltcG9ydCBBdmF0YXI0IGZyb20gXCJhc3NldHMvdGVzdGltb25pYWwvYXZhdGFyNC5wbmdcIjtcblxuY29uc3QgZGF0YSA9IFtcbiAge1xuICAgIGlkOiAxLFxuICAgIHRpdGxlOiBcIk1vZGVybiBsb29rICYgdHJlbmRpbmcgZGVzaWduXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkdldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci5cIixcbiAgICBhdmF0YXI6IEF2YXRhcjEsXG4gICAgbmFtZTogXCJEZW5ueSBIaWxndXN0b25cIixcbiAgICBkZXNpZ25hdGlvbjogXCJAZGVubnkuaGlsXCIsXG4gICAgcmV2aWV3OiA0LFxuICB9LFxuICB7XG4gICAgaWQ6IDIsXG4gICAgdGl0bGU6IFwiRGVzaWduIFF1YWxpdHkgJiBwZXJmb3JtYW5jZVwiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJHZXQgd29ya2luZyBleHBlcmllbmNlIHRvIHdvcmsgd2l0aCB0aGlzIGFtYXppbmcgdGVhbSAmIGluIGZ1dHVyZSB3YW50IHRvIHdvcmsgdG9nZXRoZXIgZm9yIGJyaWdodCBmdXR1cmUgcHJvamVjdHMgYW5kIGFsc28gbWFrZSBkZXBvc2l0IHRvIGZyZWVsYW5jZXIuXCIsXG4gICAgYXZhdGFyOiBBdmF0YXIyLFxuICAgIG5hbWU6IFwiRGVubnkgSGlsZ3VzdG9uXCIsXG4gICAgZGVzaWduYXRpb246IFwiQGRlbm55LmhpbFwiLFxuICAgIHJldmlldzogNSxcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIHRpdGxlOiBcIkxheW91dCBhbmQgb3JnYW5pemVkIGxheWVyc1wiLFxuICAgIGRlc2NyaXB0aW9uOlxuICAgICAgXCJHZXQgd29ya2luZyBleHBlcmllbmNlIHRvIHdvcmsgd2l0aCB0aGlzIGFtYXppbmcgdGVhbSAmIGluIGZ1dHVyZSB3YW50IHRvIHdvcmsgdG9nZXRoZXIgZm9yIGJyaWdodCBmdXR1cmUgcHJvamVjdHMgYW5kIGFsc28gbWFrZSBkZXBvc2l0IHRvIGZyZWVsYW5jZXIuXCIsXG4gICAgYXZhdGFyOiBBdmF0YXIzLFxuICAgIG5hbWU6IFwiRGVubnkgSGlsZ3VzdG9uXCIsXG4gICAgZGVzaWduYXRpb246IFwiQGRlbm55LmhpbFwiLFxuICAgIHJldmlldzogNSxcbiAgfSxcbiAge1xuICAgIGlkOiA0LFxuICAgIHRpdGxlOiBcIk1vZGVybiBsb29rICYgdHJlbmRpbmcgZGVzaWduXCIsXG4gICAgZGVzY3JpcHRpb246XG4gICAgICBcIkdldCB3b3JraW5nIGV4cGVyaWVuY2UgdG8gd29yayB3aXRoIHRoaXMgYW1hemluZyB0ZWFtICYgaW4gZnV0dXJlIHdhbnQgdG8gd29yayB0b2dldGhlciBmb3IgYnJpZ2h0IGZ1dHVyZSBwcm9qZWN0cyBhbmQgYWxzbyBtYWtlIGRlcG9zaXQgdG8gZnJlZWxhbmNlci5cIixcbiAgICBhdmF0YXI6IEF2YXRhcjQsXG4gICAgbmFtZTogXCJEZW5ueSBIaWxndXN0b25cIixcbiAgICBkZXNpZ25hdGlvbjogXCJAZGVubnkuaGlsXCIsXG4gICAgcmV2aWV3OiA0LFxuICB9LFxuXTtcblxuY29uc3QgcmVzcG9uc2l2ZSA9IHtcbiAgZGVza3RvcDoge1xuICAgIGJyZWFrcG9pbnQ6IHsgbWF4OiAzMDAwLCBtaW46IDE2MTkgfSxcbiAgICBpdGVtczogNCxcbiAgICBzbGlkZXNUb1NsaWRlOiA0LCAvLyBvcHRpb25hbCwgZGVmYXVsdCB0byAxLlxuICB9LFxuICBsYXB0b3A6IHtcbiAgICBicmVha3BvaW50OiB7IG1heDogMTYxOSwgbWluOiAxMDI0IH0sXG4gICAgaXRlbXM6IDMsXG4gICAgc2xpZGVzVG9TbGlkZTogMywgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cbiAgfSxcbiAgdGFibGV0OiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDEwMjQsIG1pbjogNjQwIH0sXG4gICAgaXRlbXM6IDIsXG4gICAgc2xpZGVzVG9TbGlkZTogMiwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cbiAgfSxcbiAgbW9iaWxlOiB7XG4gICAgYnJlYWtwb2ludDogeyBtYXg6IDYzOSwgbWluOiAwIH0sXG4gICAgaXRlbXM6IDEsXG4gICAgc2xpZGVzVG9TbGlkZTogMSwgLy8gb3B0aW9uYWwsIGRlZmF1bHQgdG8gMS5cbiAgfSxcbn07XG5cbmNvbnN0IGNhcm91c2VsUGFyYW1zID0ge1xuICBhZGRpdGlvbmFsVHJhbnNmcm9tOiAwLFxuICBhcnJvd3M6IGZhbHNlLFxuICBhdXRvUGxheVNwZWVkOiAzMDAwLFxuICBjZW50ZXJNb2RlOiBmYWxzZSxcbiAgY2xhc3NOYW1lOiBcIlwiLFxuICBjb250YWluZXJDbGFzczogXCJjYXJvdXNlbC1jb250YWluZXJcIixcbiAgY3VzdG9tQnV0dG9uR3JvdXA6IDxCdXR0b25Hcm91cCAvPixcbiAgZG90TGlzdENsYXNzOiBcIlwiLFxuICBkcmFnZ2FibGU6IHRydWUsXG4gIGZvY3VzT25TZWxlY3Q6IGZhbHNlLFxuICBpbmZpbml0ZTogdHJ1ZSxcbiAgaXRlbUNsYXNzOiBcIlwiLFxuICBrZXlCb2FyZENvbnRyb2w6IHRydWUsXG4gIG1pbmltdW1Ub3VjaERyYWc6IDgwLFxuICByZW5kZXJCdXR0b25Hcm91cE91dHNpZGU6IHRydWUsXG4gIHJlbmRlckRvdHNPdXRzaWRlOiBmYWxzZSxcbiAgcmVzcG9uc2l2ZTogcmVzcG9uc2l2ZSxcbiAgc2hvd0RvdHM6IGZhbHNlLFxuICBzbGlkZXJDbGFzczogXCJcIixcbiAgc2xpZGVzVG9TbGlkZTogMSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFRlc3RpbW9uaWFsQ2FyZCgpIHtcbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBpZD1cInRlc3RpbW9uaWFsXCIgc3g9e3sgdmFyaWFudDogXCJzZWN0aW9uLnRlc3RpbW9uaWFsXCIgfX0+XG4gICAgICA8Q29udGFpbmVyIGNzcz17eyB0ZXh0QWxpZ246IFwiY2VudGVyXCIgfX0+XG4gICAgICAgIDxTZWN0aW9uSGVhZGVyIHNsb2dhbj1cIlRlc3RpbW9uaWFsXCIgdGl0bGU9XCJNZWV0IENsaWVudCBTYXRpc2ZhY3Rpb25cIiAvPlxuICAgICAgPC9Db250YWluZXI+XG4gICAgICA8Qm94IHN4PXtzdHlsZU1lZGlhLmNhcm91c2VsV3JhcHBlcn0+XG4gICAgICAgIDxDYXJvdXNlbCB7Li4uY2Fyb3VzZWxQYXJhbXN9PlxuICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICAgICAgPEJveCBzeD17c3R5bGVzLnJldmlld0NhcmR9IGtleT17aXRlbS5zbGlkZXJDbGFzc30+XG4gICAgICAgICAgICAgIDxSYXRpbmcgaXRlbT17aXRlbS5yZXZpZXd9IC8+XG4gICAgICAgICAgICA8L0JveD5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9DYXJvdXNlbD5cbiAgICAgIDwvQm94PlxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn1cblxuY29uc3Qgc3R5bGVzID0ge1xuICBjYXJvdXNlbFdyYXBwZXI6IHtcbiAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICBqdXN0aWZ5Q29udGVudDogXCJmbGV4LWVuZFwiLFxuICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXG4gICAgYWxpZ25JdGVtczogXCJmbGV4LWVuZFwiLFxuICAgIG10OiBcIi0zMHB4XCIsXG4gICAgcHg6IFwiMTVweFwiLFxuICAgIFwiLmNhcm91c2VsLWNvbnRhaW5lclwiOiB7XG4gICAgICB3aWR0aDogXCIxMDAlXCIsXG4gICAgICBtYXhXaWR0aDogW1xuICAgICAgICBcIjEwMCVcIixcbiAgICAgICAgbnVsbCxcbiAgICAgICAgbnVsbCxcbiAgICAgICAgXCI3NTBweFwiLFxuICAgICAgICBcIjEwMDBweFwiLFxuICAgICAgICBcIjExODBweFwiLFxuICAgICAgICBudWxsLFxuICAgICAgICBcImNhbGMoNTAlICsgODY1cHgpXCIsXG4gICAgICBdLFxuICAgICAgbXI6IFtcImF1dG9cIiwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgbnVsbCwgXCItMjIwcHhcIl0sXG4gICAgICBtbDogXCJhdXRvXCIsXG4gICAgICBcIi5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtXCI6IHtcbiAgICAgICAgdHJhbnNpdGlvbjogXCJhbGwgMC4yNXNcIixcbiAgICAgIH0sXG4gICAgICBcIi5yZWFjdC1tdWx0aS1jYXJvdXNlbC1pdGVtLS1hY3RpdmU6bnRoLW9mLXR5cGUoNG4pXCI6IHtcbiAgICAgICAgb3BhY2l0eTogXCIwLjVcIixcbiAgICAgICAgXCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNjIwcHgpXCI6IHtcbiAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICByZXZpZXdDYXJkOiB7XG4gICAgYm94U2hhZG93OiBcIjBweCAwcHggMXB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMzUpXCIsXG4gICAgdHJhbnNpdGlvbjogXCJhbGwgMC4zc1wiLFxuICAgIGJvcmRlclJhZGl1czogXCI2cHhcIixcbiAgICBwOiBbXG4gICAgICBcIjMwcHggMjBweCAzNXB4XCIsXG4gICAgICBcIjMwcHggMjVweCAzNXB4XCIsXG4gICAgICBcIjMwcHggMjBweCAzNXB4XCIsXG4gICAgICBcIjM1cHggMzBweCA0MHB4IDQwcHhcIixcbiAgICAgIFwiMzBweCAzMHB4IDM1cHhcIixcbiAgICAgIFwiMzVweCAzMHB4IDQwcHggNDBweFwiLFxuICAgIF0sXG4gICAgYmc6IFwid2hpdGVcIixcbiAgICB0ZXh0QWxpZ246IFwibGVmdFwiLFxuICAgIG06IFtcbiAgICAgIFwiMjhweCA1cHggMzBweCA1cHhcIixcbiAgICAgIFwiMjhweCAyMHB4IDMwcHggMjBweFwiLFxuICAgICAgXCIyOHB4IDE1cHggMzBweCAxNXB4XCIsXG4gICAgICBcIjI4cHggMTVweCAzMHB4IDE1cHhcIixcbiAgICAgIFwiMzBweCAyMHB4IDQwcHhcIixcbiAgICBdLFxuICAgIFwiJjpob3ZlclwiOiB7XG4gICAgICBib3hTaGFkb3c6IFwiMHB4IDZweCAzMHB4IHJnYmEoMzgsIDc4LCAxMTgsIDAuMSlcIixcbiAgICB9LFxuICAgIFwiLnJhdGluZ1wiOiB7XG4gICAgICBtYjogWzEsIG51bGwsIG51bGwsIDJdLFxuICAgICAgdWw6IHtcbiAgICAgICAgcGw6IDAsXG4gICAgICAgIGxpc3RTdHlsZTogXCJub25lXCIsXG4gICAgICAgIG1iOiAwLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgIH0sXG4gICAgICBzdmc6IHtcbiAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMnB4XCIsXG4gICAgICAgIFwiJjpsYXN0LW9mLXR5cGVcIjoge1xuICAgICAgICAgIG1hcmdpblJpZ2h0OiAwLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIFwiLnN0YXJcIjoge1xuICAgICAgICBjb2xvcjogXCJwcmltYXJ5XCIsXG4gICAgICAgIG1yOiBcIjFweFwiLFxuICAgICAgfSxcbiAgICAgIFwiLnN0YXItb1wiOiB7XG4gICAgICAgIGNvbG9yOiBcIiNkZGRcIixcbiAgICAgICAgbXI6IFwiMXB4XCIsXG4gICAgICB9LFxuICAgIH0sXG4gICAgXCIuY2FyZC1mb290ZXJcIjoge1xuICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgbWFyZ2luVG9wOiBbNSwgbnVsbCwgbnVsbCwgXCIzM3B4XCJdLFxuICAgICAgXCIuaW1hZ2VcIjoge1xuICAgICAgICBmbGV4U2hyaW5rOiAwLFxuICAgICAgICBtcjogWzMsIG51bGwsIG51bGwsIDRdLFxuICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgaW1nOiB7XG4gICAgICAgICAgd2lkdGg6IFwiNTVweFwiLFxuICAgICAgICAgIGhlaWdodDogXCI1NXB4XCIsXG4gICAgICAgICAgYm9yZGVyUmFkaXVzOiBcIjUwJVwiLFxuICAgICAgICAgIG9iamVjdEZpdDogXCJjb3ZlclwiLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuICB0aXRsZToge1xuICAgIGZvbnRTaXplOiBbMSwgMl0sXG4gICAgZm9udFdlaWdodDogNzAwLFxuICAgIG1iOiBbMywgbnVsbCwgbnVsbCwgXCIyMnB4XCJdLFxuICAgIGNvbG9yOiBcInRleHRcIixcbiAgICBsaW5lSGVpZ2h0OiAxLjYsXG4gIH0sXG4gIGRlc2NyaXB0aW9uOiB7XG4gICAgZm9udFNpemU6IFsxLCBudWxsLCBudWxsLCAyXSxcbiAgICBmb250V2VpZ2h0OiBcIm5vcm1hbFwiLFxuICAgIGNvbG9yOiBcInRleHRcIixcbiAgICBsaW5lSGVpZ2h0OiBbMS44NSwgbnVsbCwgMl0sXG4gIH0sXG4gIGhlYWRpbmc6IHtcbiAgICBmb250U2l6ZTogWzEsIG51bGwsIG51bGwsIDJdLFxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcbiAgICBtYjogXCIzcHhcIixcbiAgICBjb2xvcjogXCJ0ZXh0XCIsXG4gICAgbGluZUhlaWdodDogMS4zLFxuICB9LFxuICBkZXNpZ25hdGlvbjoge1xuICAgIGNvbG9yOiBcInByaW1hcnlcIixcbiAgICBmb250V2VpZ2h0OiBcIjUwMFwiLFxuICAgIGZvbnRTaXplOiAxLFxuICAgIGxpbmVIZWlnaHQ6IDEuNCxcbiAgfSxcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9