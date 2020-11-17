exports.ids = [28];
exports.modules = {

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(177);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("013f2686", content, true, context)
};

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_47928a9b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_47928a9b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_47928a9b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_47928a9b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_47928a9b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_47928a9b_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 177:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".main[data-v-47928a9b]{justify-content:center;align-items:center}.type-button[data-v-47928a9b]{width:150px}.button[data-v-47928a9b]{margin-top:20px;margin-bottom:20px}.char-card[data-v-47928a9b]{cursor:pointer;padding:10px}.box[data-v-47928a9b]{width:220px;height:266px}.title[data-v-47928a9b]{font-size:31px}@media screen and (max-width:640px){.char-card[data-v-47928a9b]{margin-left:22%}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 232:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/skins/index.vue?vue&type=template&id=47928a9b&scoped=true&style=height%3A100%25&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main",staticStyle:{"height":"100%"}},[_vm._ssrNode("<h1 style=\"font-size:50px;margin-bottom:20px\" data-v-47928a9b>Valorant Skins</h1> <div class=\"columns is-centered\" data-v-47928a9b><div class=\"column is-narrow\" data-v-47928a9b>"+(_vm._ssrList((_vm.skinBundles),function(skinBundle){return ("<div class=\"card team-card\" style=\"cursor:pointer;display:inline-block;padding:0px;margin-top:30px;margin-right:20px\" data-v-47928a9b><div class=\"card-content;padding:0px\" data-v-47928a9b><div"+(_vm._ssrStyle({"overflow":"hidden","padding":"0px"},{width:!_vm.$device.isMobile?'400px': ''}, null))+" data-v-47928a9b><img"+(_vm._ssrAttr("src",_vm.getImgUrl(skinBundle)))+" data-v-47928a9b></div> <div class=\"columns is-mobile\" data-v-47928a9b><div class=\"column is-narrow\" data-v-47928a9b><p class=\"subtitle\" style=\"text-align:left;font-size:30px;padding-bottom:10px;margin-left:10px\" data-v-47928a9b>"+_vm._ssrEscape(_vm._s(skinBundle.name)+" Bundle")+"</p></div> <div class=\"column\" data-v-47928a9b><p class=\"subtitle\" style=\"text-align:right;font-size:20px;margin-top:10px;margin-right:10px;opacity:0.8\" data-v-47928a9b>"+_vm._ssrEscape("\n                Price: "+_vm._s(skinBundle.price)+"\n                ")+"<img"+(_vm._ssrAttr("src",_vm.pointsImage))+" style=\"align:right;width:10px;height:10px;\" data-v-47928a9b></p></div></div></div></div>")}))+"</div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/skins/index.vue?vue&type=template&id=47928a9b&scoped=true&style=height%3A100%25&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/skins/index.vue?vue&type=script&lang=js&
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
/* harmony default export */ var skinsvue_type_script_lang_js_ = ({
  name: "Skins",
  props: {
    type: String
  },

  data() {
    return {
      pointsImage: undefined + "api/uploads/skins/points.png"
    };
  },

  asyncData({
    $axios
  }) {
    return $axios.get(undefined + "api/skinBundles").then(response => {
      return {
        skinBundles: response.data.data
      };
    });
  },

  methods: {
    getImgUrl(skinBUndle) {
      return undefined + `api/uploads/skins/${skinBUndle.img}`;
    },

    navBundle(_id) {
      this.$router.push({
        path: `/skins/${_id}`
      });
    }

  },
  components: {}
});
// CONCATENATED MODULE: ./pages/skins/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_skinsvue_type_script_lang_js_ = (skinsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/skins/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(176)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_skinsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "47928a9b",
  "104f35d0"
  
)

/* harmony default export */ var skins = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map