exports.ids = [6];
exports.modules = {

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(173);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("607b5a59", content, true, context)
};

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_style_index_0_id_0de2da66_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(104);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_style_index_0_id_0de2da66_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_style_index_0_id_0de2da66_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_style_index_0_id_0de2da66_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_style_index_0_id_0de2da66_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Reset_vue_vue_type_style_index_0_id_0de2da66_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 173:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".type-button[data-v-0de2da66]{width:150px}.button[data-v-0de2da66]{margin-top:20px;margin-bottom:20px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 230:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/Reset.vue?vue&type=template&id=0de2da66&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_vm._ssrNode("<h1 style=\"font-size:50px;margin-bottom:20px\" data-v-0de2da66>Change Password</h1> "),_vm._ssrNode("<div class=\"columns is-centered\" data-v-0de2da66>","</div>",[_vm._ssrNode("<div class=\"column is-one-fifth\" data-v-0de2da66>","</div>",[_vm._ssrNode("<div class=\"card\" data-v-0de2da66>","</div>",[_vm._ssrNode("<div class=\"card-content\" data-v-0de2da66>","</div>",[_vm._ssrNode("<div style=\"text-align:left\" data-v-0de2da66>","</div>",[_c('b-field',{attrs:{"label":"Password"}},[_c('b-input',{attrs:{"placeholder":"Password...","type":"password"},model:{value:(_vm.value.password),callback:function ($$v) {_vm.$set(_vm.value, "password", $$v)},expression:"value.password"}})],1)],1)]),_vm._ssrNode(" "),_vm._ssrNode("<footer class=\"card-footer\" style=\"height:60px;\" data-v-0de2da66>","</footer>",[_vm._ssrNode("<span class=\"card-footer-item\" data-v-0de2da66>","</span>",[_c('b-button',{staticStyle:{"background-color":"#ff726f"},on:{"click":_vm.reset}},[_vm._v("Submit")])],1)])],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Reset.vue?vue&type=template&id=0de2da66&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Reset.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var Resetvue_type_script_lang_js_ = ({
  layout: "OnlyNav",
  name: "Characters",
  props: {
    type: String
  },

  data() {
    return {
      value: {
        token: "",
        password: ""
      }
    };
  },

  mounted() {},

  methods: {
    reset() {
      if (this.value.password.length < 5) {
        this.$buefy.snackbar.open({
          message: "Password has to be atleast 5 characters long!",
          duration: 5000
        });
      } else {
        this.value.token = window.location.search.split("?token=")[1];
        const data = {
          action: "resetPwdLong",
          value: this.value
        };
        this.$axios(undefined + "authmanagement", {
          method: "post",
          headers: new Headers({
            "content-type": "application/json"
          }),
          data: data
        }).then(function (response) {
          return response.data;
        }).then(response => {
          if (response.code !== undefined) {
            this.$buefy.snackbar.open(response.message);
          } else {
            this.$buefy.snackbar.open({
              message: "Password has been reset!",
              duration: 15000
            });
            router.push({
              path: `/login`
            });
          }
        }).catch(error => {
          if (error.response) {
            this.$buefy.snackbar.open({
              message: error.response.data.message,
              duration: 5000
            });
          }
        });
      }
    }

  },
  components: {}
});
// CONCATENATED MODULE: ./pages/Reset.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Resetvue_type_script_lang_js_ = (Resetvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/Reset.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(172)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Resetvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "0de2da66",
  "4d2aabbb"
  
)

/* harmony default export */ var Reset = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=Reset.js.map