exports.ids = [30];
exports.modules = {

/***/ 115:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(189);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("0046eead", content, true, context)
};

/***/ }),

/***/ 188:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_c3e86c2c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(115);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_c3e86c2c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_c3e86c2c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_c3e86c2c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_c3e86c2c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_c3e86c2c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".type-button[data-v-c3e86c2c]{width:150px}.button[data-v-c3e86c2c]{margin-top:20px;margin-bottom:20px}@media screen and (max-width:640px){.standings-card[data-v-c3e86c2c]{margin-left:5%}}.selected[data-v-c3e86c2c]{color:#bd3734}.unSelected[data-v-c3e86c2c]{color:#ff726f}.loser[data-v-c3e86c2c]{opacity:.4}.dark-bkg[data-v-c3e86c2c],.light-bkg[data-v-c3e86c2c]{background-color:#1a212e}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/skins/weapons/_id/_slug.vue?vue&type=template&id=c3e86c2c&scoped=true&style=height%3A100%25&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.skinWeapon)?_c('div',{staticClass:"hello",staticStyle:{"height":"100%"}},[_vm._ssrNode("<h1 style=\"font-size:50px;margin-bottom:20px\" data-v-c3e86c2c>"+_vm._ssrEscape(_vm._s(_vm.skinWeapon.name))+"</h1> <div class=\"columns is-centered\" data-v-c3e86c2c><div class=\"column is-narrow\" data-v-c3e86c2c><div"+(_vm._ssrStyle(null,{width:!_vm.$device.isMobile?'800px':'' }, null))+" data-v-c3e86c2c><div class=\"card\" data-v-c3e86c2c><div class=\"card-content\" data-v-c3e86c2c><div class=\"columns is-centered\" data-v-c3e86c2c><div class=\"column is-6\" data-v-c3e86c2c><img"+(_vm._ssrAttr("src",_vm.getImgUrl(_vm.skinLevel)))+" width=\"500px\" data-v-c3e86c2c> "+(_vm._ssrList((_vm.skinWeapon.imgs),function(skinLevel){return ("<div class=\"button\" data-v-c3e86c2c>"+((_vm.skinWeapons.imgs.length > 1)?("<div data-v-c3e86c2c>"+_vm._ssrEscape("\n                  Level "+_vm._s(_vm.skinWeapon.imgs.indexOf(skinLevel))+"\n                  ")+"</div>"):"<!---->")+"</div>")}))+"</div> <div class=\"column is-6\" style=\"text-align: left\" data-v-c3e86c2c><div data-v-c3e86c2c><span data-v-c3e86c2c><p style=\"display: inline-block;\" data-v-c3e86c2c>"+_vm._ssrEscape(_vm._s(_vm.skinWeapon.description))+"</p></span></div> <br data-v-c3e86c2c> <div class=\"button\" data-v-c3e86c2c><p class=\"title\" style=\"display: inline-block;font-size:25px\" data-v-c3e86c2c>"+_vm._ssrEscape("Part of the "+_vm._s(_vm.skinBundle)+" Bundle")+"</p></div> <div data-v-c3e86c2c><span data-v-c3e86c2c><p class=\"title\" style=\"display: inline-block;color:#ff726f; text-align: left;font-size:25px\" data-v-c3e86c2c>Price:</p> <p class=\"title\" style=\"display: inline-block;font-size:25px\" data-v-c3e86c2c>"+_vm._ssrEscape(_vm._s(_vm.skinWeapon.price))+"</p></span></div></div></div></div></div> <br data-v-c3e86c2c> <p class=\"title\" style=\"text-align:left\" data-v-c3e86c2c></p></div></div></div>")]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/skins/weapons/_id/_slug.vue?vue&type=template&id=c3e86c2c&scoped=true&style=height%3A100%25&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/skins/weapons/_id/_slug.vue?vue&type=script&lang=js&
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

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  name: "skinWeapon",
  props: {
    type: String
  },

  data() {
    return {
      skinWeapon: [],
      skinBundle: [],
      skinLevel: 0
    };
  },

  asyncData({
    params
  }) {
    console.log(undefined + "api/skinWeapons/" + params.id);
    return external_axios_default.a.all([external_axios_default.a.get(undefined + "api/skinWeapons/" + params.id), external_axios_default.a.get(undefined + "api/skinBundles/")]).then(external_axios_default.a.spread((skinWeaponResult, skinBundleResult) => {
      console.log('res4', skinWeaponResult.data);
      console.log('res5', skinBundleResult.data.data);
      return {
        skinWeapon: skinWeaponResult.data,
        skinBundle: skinBundleResult.data.data.find(search => search._id === skinWeaponResult.data.bundleId).name
      };
    })).catch(err => console.log(err));
  },

  methods: {
    getImgUrl(index) {
      //console.log(process.env.baseUrl + `api/uploads/skins/${this.skinWeapon.imgs[index]}`);
      return undefined + `api/uploads/skins/${this.skinWeapon.imgs[index]}`;
    },

    navBundle(_id) {
      this.$router.push({
        path: `/skins/${this.skinWeapon.bundleId}`
      });
    },

    changeLevel(index) {
      this.skinLevel = index;
    }

  },
  components: {}
});
// CONCATENATED MODULE: ./pages/skins/weapons/_id/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var _id_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/skins/weapons/_id/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(188)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _id_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "c3e86c2c",
  "5b8359e9"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map