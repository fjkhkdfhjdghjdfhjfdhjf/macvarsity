exports.ids = [27];
exports.modules = {

/***/ 117:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(195);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("255298d7", content, true, context)
};

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_168c296c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(117);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_168c296c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_168c296c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_168c296c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_168c296c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_168c296c_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".type-button[data-v-168c296c]{width:150px}.button[data-v-168c296c]{margin-top:20px;margin-bottom:20px}@media screen and (max-width:640px){.standings-card[data-v-168c296c]{margin-left:5%}}.selected[data-v-168c296c]{color:#bd3734}.unSelected[data-v-168c296c]{color:#ff726f}.loser[data-v-168c296c]{opacity:.4}.dark-bkg[data-v-168c296c],.light-bkg[data-v-168c296c]{background-color:#1a212e}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/skins/_id.vue?vue&type=template&id=168c296c&scoped=true&style=height%3A100%25&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.skinBundle)?_c('div',{staticClass:"hello",staticStyle:{"height":"100%"}},[_vm._ssrNode("<h1 style=\"font-size:50px;margin-bottom:20px\" data-v-168c296c>"+_vm._ssrEscape(_vm._s(_vm.skinBundle.name)+" Bundle")+"</h1> "),_vm._ssrNode("<div class=\"columns is-centered\" data-v-168c296c>","</div>",[_vm._ssrNode("<div class=\"column is-narrow\" data-v-168c296c>","</div>",[_vm._ssrNode("<div"+(_vm._ssrStyle(null,{width:!_vm.$device.isMobile?'800px':'' }, null))+" data-v-168c296c>","</div>",[_vm._ssrNode("<div class=\"card\" data-v-168c296c><div class=\"card-content\" data-v-168c296c><div class=\"columns is-centered\" data-v-168c296c><div class=\"column is-6\" data-v-168c296c><img"+(_vm._ssrAttr("src",_vm.getImgUrl()))+" width=\"500px\" data-v-168c296c></div> <div class=\"column is-6\" style=\"text-align: left\" data-v-168c296c><div data-v-168c296c><span data-v-168c296c><p style=\"display: inline-block;\" data-v-168c296c>"+_vm._ssrEscape(_vm._s(_vm.skinBundle.description))+"</p></span></div> <br data-v-168c296c> <div data-v-168c296c><span data-v-168c296c><p class=\"title\" style=\"display: inline-block;color:#ff726f; text-align: left;font-size:25px\" data-v-168c296c>Price:</p> <p class=\"title\" style=\"display: inline-block;font-size:25px\" data-v-168c296c>"+_vm._ssrEscape(_vm._s(_vm.skinBundle.price))+"</p></span></div></div></div></div></div> <br data-v-168c296c> <p class=\"title\" style=\"text-align:left\" data-v-168c296c>Bundle skins</p> "),(_vm.skinWeapons)?_vm._ssrNode("<div data-v-168c296c>","</div>",[_vm._ssrNode((_vm._ssrList((_vm.skinWeapons),function(skinWeapon){return ("<div class=\"card team-card\" style=\"cursor:pointer;display:inline-block;width:250px;height:290px;margin-top:30px;margin-right:10px\" data-v-168c296c><div class=\"card-content;padding:10px\" data-v-168c296c><p class=\"title\" style=\"display: inline-block;font-size:25px;margin-top:10px\" data-v-168c296c>"+_vm._ssrEscape(_vm._s(skinWeapon.name))+"</p> <br data-v-168c296c> <p class=\"title\" style=\"display: inline-block;color:#ff726f; text-align: left;font-size:20px\" data-v-168c296c>Price:</p> <p class=\"title\" style=\"display: inline-block;font-size:20px\" data-v-168c296c>"+_vm._ssrEscape("\n                "+_vm._s(skinWeapon.price)+"\n                ")+"<img"+(_vm._ssrAttr("src",_vm.pointsImage))+" style=\"align:right;width:15px;height:15px;\" data-v-168c296c></p> <div style=\"width:200px;height:100px;overflow: hidden;margin-top:10px;display:inline-block\" data-v-168c296c><img"+(_vm._ssrAttr("src",_vm.getSkinImgUrl(skinWeapon)))+" data-v-168c296c></div> <div style=\"height:35px;\" data-v-168c296c>"+((skinWeapon.imgs.length > 0)?("<div"+(_vm._ssrStyle({"display":"inline-block"},{'visibility':skinWeapon.imgs.length==1?'hidden':''}, null))+" data-v-168c296c>"+(_vm._ssrList((skinWeapon.imgs),function(skinLevel){return ("<div class=\"button\" style=\"width:55px;height:35px;margin-right:5px;margin-bottom:20px;background-color:#171e29;border-color:black\" data-v-168c296c>"+_vm._ssrEscape("Level "+_vm._s(skinWeapon.imgs.indexOf(skinLevel) + 1))+"</div>")}))+" <br data-v-168c296c></div>"):"<!---->")+"</div></div></div>")}))+" "),_c('LightBox',{ref:"lightbox",attrs:{"media":this.media,"show-caption":false,"show-light-box":false}})],2):_vm._e()],2)])])],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/skins/_id.vue?vue&type=template&id=168c296c&scoped=true&style=height%3A100%25&

// EXTERNAL MODULE: external "vue-image-lightbox"
var external_vue_image_lightbox_ = __webpack_require__(60);
var external_vue_image_lightbox_default = /*#__PURE__*/__webpack_require__.n(external_vue_image_lightbox_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/skins/_id.vue?vue&type=script&lang=js&
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

 //import media from './media'

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  name: "skinBundle",
  props: {
    type: String
  },
  components: {
    LightBox: external_vue_image_lightbox_default.a
  },

  data() {
    return {
      media: [],
      skinBundle: [],
      skinWeapons: [],
      pointsImage: undefined + "api/uploads/skins/points.png"
    };
  },

  asyncData({
    params
  }) {
    return external_axios_default.a.all([external_axios_default.a.get(undefined + "api/skinBundles/" + params.id), external_axios_default.a.get(undefined + "api/skinWeapons/")]).then(external_axios_default.a.spread((skinBundleResult, skinWeaponResult) => {
      skinWeaponResult.data.data.forEach(element => {
        element.currentLevel = 0;
      });
      return {
        skinBundle: skinBundleResult.data,
        skinWeapons: skinWeaponResult.data.data.filter(weapon => skinBundleResult.data.skinWeaponIds.includes(weapon._id)),
        media: [{
          thumb: undefined + `api/uploads/skins/${skinBundleResult.data.img}`,
          src: undefined + `api/uploads/skins/${skinBundleResult.data.img}`
        }]
      };
    })).catch(err => console.log(err));
  },

  methods: {
    getImgUrl() {
      console.log(undefined + `api/uploads/skins/${this.skinBundle.img}`);
      return undefined + `api/uploads/skins/${this.skinBundle.img}`;
    },

    getSkinImgUrl(weapon) {
      console.log(undefined + `api/uploads/skins/${weapon.imgs[weapon.currentLevel]}`);
      return undefined + `api/uploads/skins/${weapon.imgs[weapon.currentLevel]}`;
    },

    navBundle(_id) {
      this.$router.push({
        path: `/skins/weapons/${_id}`
      });
    },

    changeLevel(weapon, index) {
      weapon.currentLevel = index;
    },

    openGallery(index) {
      console.log(this.$refs.lightbox.media);
      this.$refs.lightbox.showImage(index);
    }

  }
});
// CONCATENATED MODULE: ./pages/skins/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var skins_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/skins/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(194)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  skins_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "168c296c",
  "0feccd80"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map