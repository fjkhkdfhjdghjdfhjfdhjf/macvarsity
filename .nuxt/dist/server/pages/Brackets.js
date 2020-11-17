exports.ids = [3];
exports.modules = {

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/Brackets.vue?vue&type=template&id=051cf34e&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('div',{staticStyle:{"cursor":"pointer"},attrs:{"id":"bracket"}})])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Brackets.vue?vue&type=template&id=051cf34e&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Brackets.vue?vue&type=script&lang=js&
//
//
//
//
//
//

/* harmony default export */ var Bracketsvue_type_script_lang_js_ = ({
  props: {
    playoffData: Object,
    eventId: String,
    isAdmin: Boolean
  },

  mounted() {
    let isAdmin = false;
    let auth;

    if (false) { var authEnc; }

    let saveData = this.playoffData;
    let event_id = this.eventId;

    function saveFn(data, userData) {
      $("#saveOutput").text("POST " + userData + " " + data);
      let apiData = {
        playoffs: data
      };
      external_axios_default()(undefined + `api/events/${event_id}`, {
        method: "patch",
        data: apiData,
        headers: {
          "Authorization": `Bearer ${auth.accessToken}`
        }
      }).then(function (response) {
        return response.data;
      }).then(response => {});
    }

    function onclick(data) {
      if (data === undefined) {
        return;
      }

      window.open(`https://valorantify.com/matches/${data}/match`, "_blank");
    }

    let bracketData = {
      init: saveData,
      teamWidth: 120,
      skipConsolationRound: true
    };

    if (isAdmin) {
      bracketData.save = saveFn;
    }

    if (!isAdmin) {
      bracketData.onMatchClick = onclick;
    }

    $(function () {
      var container = $("#bracket");
      container.bracket(bracketData);
      /* You can also inquiry the current data */

      var data = container.bracket("data");
      $("#dataOutput").text(data);
    });
  }

});
// CONCATENATED MODULE: ./pages/Brackets.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Bracketsvue_type_script_lang_js_ = (Bracketsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/Brackets.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(91)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Bracketsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "6a65720f"
  
)

/* harmony default export */ var Brackets = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(92);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("44b57ebb", content, true, context)
};

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Brackets_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(64);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Brackets_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Brackets_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Brackets_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Brackets_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Brackets_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 92:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.jQBracket .team.lose{background-color:#171e29}div.jQBracket .team.lose div.label{opacity:.6}div.jQBracket .team.lose div.score{background-color:#7e1e00;color:#fff}div.jQBracket .team.win div.score{background-color:#007e37;color:#fff}div.jQBracket .team.win{color:#000}div.jQBracket .team,div.jQBracket .team.win{background-color:#171e29}", ""]);
// Exports
module.exports = exports;


/***/ })

};;
//# sourceMappingURL=Brackets.js.map