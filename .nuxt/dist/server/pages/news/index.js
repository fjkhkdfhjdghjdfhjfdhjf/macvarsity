exports.ids = [25];
exports.modules = {

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(171);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("2ef428b0", content, true, context)
};

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e3c258ea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(103);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e3c258ea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e3c258ea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e3c258ea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e3c258ea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_e3c258ea_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 171:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".type-button[data-v-e3c258ea]{width:150px}.button[data-v-e3c258ea]{margin-top:20px;margin-bottom:20px}.dark-bkg[data-v-e3c258ea]{background-color:#1a212e}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/news/index.vue?vue&type=template&id=e3c258ea&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_vm._ssrNode("<h1 style=\"font-size:50px;margin-bottom:20px\" data-v-e3c258ea>News &amp; Articles</h1> "),_vm._ssrNode("<div class=\"columns is-centered\" data-v-e3c258ea>","</div>",[_vm._ssrNode("<div class=\"column is-narrow\" data-v-e3c258ea>","</div>",[_vm._ssrNode("<div"+(_vm._ssrStyle(null,{width:!_vm.$device.isMobile?'800px':'' }, null))+" data-v-e3c258ea>","</div>",[_vm._ssrNode("<div class=\"subtitle\" style=\"text-align:left\" data-v-e3c258ea>Latest Articles</div> "),_vm._l((_vm.news),function(article,index){return _vm._ssrNode("<div data-v-e3c258ea>","</div>",[_c('nuxt-link',{staticStyle:{"padding":"0px"},attrs:{"to":("/news/" + (article._id) + "/" + (article.slug))}},[_c('div',{staticClass:"card",class:_vm.getBkg(index%2===0),staticStyle:{"margin-bottom":"10px","cursor":"pointer"},on:{"click":function($event){return _vm.navNews(article._id, article.slug)}}},[_c('div',{staticClass:"card-content",staticStyle:{"padding-top":"0.5rem","padding-bottom":"0.5rem"}},[_c('div',{staticClass:"columns is-centered is-vcentered is-mobile"},[_c('div',{staticClass:"column is-1"},[(_vm.$device.isMobile)?_c('div',[_c('CountryFlag',{key:article.flag,staticStyle:{"vertical-align":"-13.5px","margin-left":"-20px","margin-right":"-15px"},attrs:{"country":article.flag,"size":"small"}})],1):_vm._e(),_vm._v(" "),(!_vm.$device.isMobile)?_c('div',[_c('CountryFlag',{staticStyle:{"vertical-align":"-13.5px","margin-left":"-20px","margin-right":"-15px"},attrs:{"country":article.flag,"size":"normal"}})],1):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"column is-8",staticStyle:{"text-align":"left","vertical-align":"middle"}},[_vm._v(_vm._s(article.title))]),_vm._v(" "),_c('div',{staticClass:"column is-3",staticStyle:{"text-align":"right"}},[_c('p',{staticStyle:{"display":"inline-block","color":"#ff4653"}},[_vm._v(_vm._s(article.numComments))]),_vm._v(" "),_c('p',{staticStyle:{"display":"inline-block","opacity":"0.6"}},[_vm._v("comments")]),_vm._v(" "),_c('p',{staticStyle:{"opacity":"0.6"}},[_vm._v(_vm._s(_vm.formatDate(article.date)))])])])])])])],1)})],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/news/index.vue?vue&type=template&id=e3c258ea&scoped=true&

// EXTERNAL MODULE: external "vue-country-flag"
var external_vue_country_flag_ = __webpack_require__(55);
var external_vue_country_flag_default = /*#__PURE__*/__webpack_require__.n(external_vue_country_flag_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/news/index.vue?vue&type=script&lang=js&
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


const moment = __webpack_require__(8);

/* harmony default export */ var newsvue_type_script_lang_js_ = ({
  name: "Characters",
  props: {
    type: String
  },

  asyncData({
    $axios
  }) {
    return $axios.get(undefined + "api/news?$sort[date]=-1").then(function (response) {
      return response.data;
    }).then(response => {
      if (response.code !== undefined) {
        this.$buefy.snackbar.open(response.message);
      } else {
        return {
          news: response.data
        };
      }
    });
  },

  methods: {
    navNews(id, slug) {
      this.$router.push({
        path: `/news/${id}/${slug}`
      });
    },

    formatDate(dateTime) {
      const utc = moment.utc(dateTime);
      var localDate = utc.local();

      if (this.$device.isMobile) {
        return moment(localDate).format("MMMM DD");
      } else {
        return moment(localDate).format("MMMM DD, YYYY");
      }
    },

    getBkg(type) {
      if (type) {
        return "light-bkg";
      } else {
        return "dark-bkg";
      }
    }

  },
  components: {
    CountryFlag: external_vue_country_flag_default.a
  }
});
// CONCATENATED MODULE: ./pages/news/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_newsvue_type_script_lang_js_ = (newsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/news/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(170)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_newsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "e3c258ea",
  "2ca394a6"
  
)

/* harmony default export */ var news = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map