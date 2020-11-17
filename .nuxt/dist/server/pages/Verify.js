exports.ids = [8];
exports.modules = {

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(URL) {//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["a"] = ({
  layout: "OnlyNav",
  name: "Characters",
  props: {
    type: String
  },

  data() {
    return {
      user: {
        email: "",
        password: "",
        username: "",
        flag: "",
        notifications: {
          placeholder: true
        }
      }
    };
  },

  mounted() {
    var url = new URL(window.location.href);
    var token = url.searchParams.get("token");
    var obj = {
      action: "verifySignupLong",
      value: token
    };
    this.$axios(undefined + "authmanagement", {
      method: "post",
      headers: new Headers({
        "content-type": "application/json"
      }),
      data: obj
    }).then(function (response) {
      return response.data;
    }).then(response => {
      if (response.code !== undefined) {
        this.$buefy.snackbar.open(response.message);
      } else {}
    }).catch(error => {
      if (error.response) {
        this.$buefy.snackbar.open({
          message: error.response.message,
          duration: 5000
        });
      }
    });
  },

  methods: {
    signup() {
      if (this.user.password.length < 5) {
        this.$buefy.snackbar.open({
          message: "Password has to be atleast 5 characters long!",
          duration: 5000
        });
      } else if (this.user.flag === "") {
        this.$buefy.snackbar.open({
          message: "Please choose a flag!",
          duration: 5000
        });
      } else {
        this.$axios(undefined + "users", {
          method: "post",
          headers: new Headers({
            "content-type": "application/json"
          }),
          data: this.user
        }).then(function (response) {
          return response.data;
        }).then(response => {
          if (response.code !== undefined) {
            this.$buefy.snackbar.open(response.message);
          } else {
            this.$buefy.snackbar.open({
              message: "Please check email and spam for verification code!",
              duration: 15000
            });
            this.$router.push({
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
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(59)["URL"]))

/***/ }),

/***/ 109:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(181);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("22d8793b", content, true, context)
};

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_style_index_0_id_4eba8afe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(109);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_style_index_0_id_4eba8afe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_style_index_0_id_4eba8afe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_style_index_0_id_4eba8afe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_style_index_0_id_4eba8afe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Verify_vue_vue_type_style_index_0_id_4eba8afe_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 181:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".type-button[data-v-4eba8afe]{width:150px}.button[data-v-4eba8afe]{margin-top:20px;margin-bottom:20px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/Verify.vue?vue&type=template&id=4eba8afe&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_vm._ssrNode("<h1 style=\"font-size:50px;margin-bottom:20px\" data-v-4eba8afe>Thanks for verifying Please login!</h1>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Verify.vue?vue&type=template&id=4eba8afe&scoped=true&

// EXTERNAL MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Verify.vue?vue&type=script&lang=js&
var Verifyvue_type_script_lang_js_ = __webpack_require__(108);

// CONCATENATED MODULE: ./pages/Verify.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Verifyvue_type_script_lang_js_ = (Verifyvue_type_script_lang_js_["a" /* default */]); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/Verify.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(180)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Verifyvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4eba8afe",
  "fdb6b486"
  
)

/* harmony default export */ var Verify = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=Verify.js.map