exports.ids = [16];
exports.modules = {

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(204);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("cce22a18", content, true, context)
};

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(121);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".textarea{resize:none!important}@media screen and (max-width:640px){.comment-mobile{text-align:left}}.admin{color:#90ee90}.moderator{color:#87ceeb}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/forums/_id/_slug.vue?vue&type=template&id=11f721fc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_vm._ssrNode("<div class=\"columns is-centered\" style=\"margin-top:10px; \">","</div>",[_vm._ssrNode("<div class=\"column is-narrow\">","</div>",[_vm._ssrNode("<div"+(_vm._ssrStyle(null,{width:!_vm.$device.isMobile?'800px':'' }, null))+">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-content\">","</div>",[_vm._ssrNode("<h1 class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.forum.title))+"</h1> <div>"+_vm._ssrEscape(_vm._s(_vm.formatDate(_vm.forum.updatedAt)))+"</div> "),(_vm.forum.user)?_vm._ssrNode("<div"+(_vm._ssrClass(null,_vm.isAdmin(_vm.forum.user)))+" style=\"font-weight:bold;cursor:pointer\">","</div>",[(_vm.forum.user.hasOwnProperty('flag') && _vm.forum.user.flag !== '')?_vm._ssrNode("<span>","</span>",[_c('country-flag',{staticStyle:{"vertical-align":"-15px","margin-left":"-20px","margin-right":"-15px"},attrs:{"country":_vm.forum.user.flag,"size":"normal"}})],1):_vm._e(),_vm._ssrNode(" "),(!_vm.forum.user.hasOwnProperty('flag') || _vm.forum.user.flag === '')?_vm._ssrNode("<span>","</span>",[_c('country-flag',{staticStyle:{"vertical-align":"-15px","margin-left":"-20px","margin-right":"-15px"},attrs:{"country":"un","size":"normal"}})],1):_vm._e(),_vm._ssrNode(_vm._ssrEscape("\n              "+_vm._s(_vm.forum.user.username)+"\n            "))],2):_vm._e(),_vm._ssrNode(" "),(_vm.forum.body)?_vm._ssrNode("<div style=\"margin-top:20px; padding:10px; overflow-wrap: break-word\">","</div>",[_c('vue-markdown',{staticStyle:{"text-align":"left"},attrs:{"html":false}},[_vm._v(_vm._s(_vm.forum.body))])],1):_vm._e(),_vm._ssrNode(" "),(_vm.auth)?_vm._ssrNode("<div style=\"margin-top:50px\">","</div>",[(_vm.auth.user.permissions.includes('moderator'))?_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"columns\" style=\"text-align:left\">","</div>",[_vm._ssrNode("<div style=\"padding-right:0px;text-align:left\">","</div>",[_c('b-field',[_c('b-select',{staticStyle:{"text-align":"right"},attrs:{"placeholder":"Select a character"},model:{value:(_vm.forumTopic),callback:function ($$v) {_vm.forumTopic=$$v},expression:"forumTopic"}},[_c('option',{staticStyle:{"color":"white"},attrs:{"value":"valorant"}},[_vm._v("Valorant Discussions")]),_vm._v(" "),_c('option',{staticStyle:{"color":"white"},attrs:{"value":"feedback"}},[_vm._v("Valorantify Feedback")]),_vm._v(" "),_c('option',{staticStyle:{"color":"white"},attrs:{"value":"offTopic"}},[_vm._v("Off-Topic")])])],1)],1),_vm._ssrNode(" "),_vm._ssrNode("<div style=\"text-align:left;padding-right:0px;margin-left:30px\">","</div>",[_c('b-button',{staticStyle:{"margin-left":"0px"},on:{"click":function($event){return _vm.movePost()}}},[_vm._v("Move post")])],1),_vm._ssrNode(" "),_vm._ssrNode("<div style=\"text-align:left;margin-left:80px\">","</div>",[_c('b-button',{staticStyle:{"margin-left":"0px"},on:{"click":function($event){return _vm.deletePost()}}},[_vm._v("Delete post")])],1)],2)]):_vm._e()]):_vm._e()],2)]),_vm._ssrNode(" "),_c('client-only',[_c('div',{staticClass:"columns is-centered",staticStyle:{"margin-top":"10px"}},[_c('div',{staticClass:"column is-narrow"},[_c('div',{style:({width:!_vm.$device.isMobile?'800px':'' })},[_c('Comments',{attrs:{"id":_vm.$route.params.id,"type":"forums","commentsArray":_vm.forum.comments,"pageData":_vm.forum}})],1)])])])],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/forums/_id/_slug.vue?vue&type=template&id=11f721fc&

// EXTERNAL MODULE: ./components/Comments/Comments.vue + 10 modules
var Comments = __webpack_require__(81);

// EXTERNAL MODULE: external "vue-markdown"
var external_vue_markdown_ = __webpack_require__(53);
var external_vue_markdown_default = /*#__PURE__*/__webpack_require__.n(external_vue_markdown_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/forums/_id/_slug.vue?vue&type=script&lang=js&
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



const moment = __webpack_require__(8);

/* harmony default export */ var _slugvue_type_script_lang_js_ = ({
  name: "Forums",
  props: {
    id: String
  },

  data() {
    return {
      forumsSkip: 0,
      forumsTotal: 0,
      forumTopic: "",
      auth: ""
    };
  },

  head() {
    return {
      title: "Forum | " + this.forum.title
    };
  },

  asyncData({
    params,
    $axios
  }) {
    return $axios.get(undefined + `api/forums/${params.id}?&populatecomments=true&populateuser=true`).then(response => {
      return {
        forum: response.data
      };
    }).catch(err => console.log(err));
  },

  mounted() {
    let auth = undefined;

    if (false) { var authEnc; }

    if (auth) {
      this.auth = auth;
    }
  },

  methods: {
    formatDate(dateTime) {
      const utc = moment.utc(dateTime);
      var localDate = utc.local();
      return moment(localDate).format("DD/MM/YY h:mm a");
    },

    navUser(id) {
      this.$router.push({
        path: `/user/${id}`
      });
    },

    isAdmin(user) {
      if (user.permissions.length > 0 && user.permissions[0] === "admin") {
        return "admin";
      } else if (user && user.permissions.length > 0 && user.permissions.includes("moderator")) {
        return "moderator";
      }

      return "user";
    },

    deletePost() {
      this.$buefy.dialog.confirm({
        message: "Are you sure you want to delete this post?",
        type: "is-dark",
        onConfirm: () => {
          this.$axios(undefined + `api/forums/${this.$route.params.id}`, {
            method: "delete",
            headers: new Headers({
              "content-type": "application/json"
            })
          }).then(function (response) {
            return response.data;
          }).then(response => {
            this.navToForumsHome();
          });
        }
      });
    },

    navToForumsHome() {
      this.$router.push({
        path: `/forums/`
      });
    },

    movePost() {
      if (this.forumTopic !== "") {
        this.$buefy.dialog.confirm({
          message: "Are you sure you want to move this post to " + this.forumTopic + "?",
          type: "is-dark",
          onConfirm: () => {
            this.$axios(undefined + `api/forums/${this.$route.params.id}`, {
              method: "patch",
              headers: {
                "content-type": "application/json"
              },
              data: {
                type: this.forumTopic
              }
            }).then(function (response) {
              return response.data;
            }).then(response => {
              this.navToForumsHome();
            });
          }
        });
      }
    }

  },
  components: {
    Comments: Comments["a" /* default */],
    VueMarkdown: external_vue_markdown_default.a
  }
});
// CONCATENATED MODULE: ./pages/forums/_id/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var _id_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/forums/_id/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(203)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _id_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "3bc42abc"
  
)

/* harmony default export */ var _slug = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(78);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("40dc02dd", content, true, context)
};

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(80);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6e88058f", content, true, context)
};

/***/ }),

/***/ 77:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentTree_vue_vue_type_style_index_0_id_b65923e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(61);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentTree_vue_vue_type_style_index_0_id_b65923e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentTree_vue_vue_type_style_index_0_id_b65923e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentTree_vue_vue_type_style_index_0_id_b65923e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentTree_vue_vue_type_style_index_0_id_b65923e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_CommentTree_vue_vue_type_style_index_0_id_b65923e2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".table thead[data-v-b65923e2]{display:none}.table td[data-v-b65923e2],.table th[data-v-b65923e2]{border-bottom:1px solid #ff726f!important;border-width:0 0 1px}@media screen and (max-width:640px){.comment-mobile[data-v-b65923e2]{text-align:left}.icon-comment[data-v-b65923e2]{margin-right:10px}}.admin[data-v-b65923e2]{color:#90ee90}.moderator[data-v-b65923e2]{color:#87ceeb}.input-box[data-v-b65923e2]{display:flex;align-items:center;justify-content:center}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_579851e6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(62);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_579851e6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_579851e6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_579851e6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_579851e6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Comments_vue_vue_type_style_index_0_id_579851e6_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".textarea[data-v-579851e6]{resize:none!important}@media screen and (max-width:640px){.comment-mobile[data-v-579851e6]{text-align:left}.word-mobile[data-v-579851e6]{width:350px}}.admin[data-v-579851e6]{color:green}.bkg-highlight[data-v-579851e6]{background-color:#171e29;border:1px solid #8c67ef!important}.table thead[data-v-579851e6]{display:none}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Comments/Comments.vue?vue&type=template&id=579851e6&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.loading)?_c('div',{staticClass:"card",staticStyle:{"padding":"0px"}},[_vm._ssrNode("<div class=\"card-content\" style=\"padding:0px\" data-v-579851e6>","</div>",[_vm._ssrNode("<p style=\"text-align:left;padding:15px;font-size:18px;padding-bottom:0px\" data-v-579851e6>","</p>",[_c('vue-markdown',[_vm._v("Comments")])],1),_vm._ssrNode(" "),_c('CommentTree',{attrs:{"comment":_vm.commentsArray,"depth":0,"parent":_vm.commentsArray,"id":_vm.id,"type":_vm.type,"pageData":_vm.pageData,"newUser":_vm.newUser}}),_vm._ssrNode(" "),(_vm.auth)?_vm._ssrNode("<div data-v-579851e6>","</div>",[_vm._ssrNode(((_vm.replyComment)?("<div style=\"text-align:left;margin-left:20px;\" data-v-579851e6>\n        You are replying to:\n        <span style=\"font-weight:bold\" data-v-579851e6>"+_vm._ssrEscape(_vm._s(_vm.replyComment.user.username)+" - "+_vm._s(_vm.replyComment._id.slice(-2).toUpperCase()))+"</span> <i class=\"fas fa-times\" style=\"color:red; margin-left:20px;cursor:pointer\" data-v-579851e6></i></div>"):"<!---->")+" "),_c('b-field',{staticStyle:{"padding":"10px"},attrs:{"label":"Leave a Comment"}},[_c('b-input',{staticStyle:{"resize":"none","white-space":"pre-wrap","word-wrap":"break-word"},attrs:{"maxlength":"1500","type":"textarea","icon-right":"emoticon-outline","icon-right-clickable":""},on:{"icon-right-click":_vm.toogleDialogEmoji},model:{value:(_vm.comment.text),callback:function ($$v) {_vm.$set(_vm.comment, "text", $$v)},expression:"comment.text"}})],1),_vm._ssrNode(" "),_c('VEmojiPicker',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDialog),expression:"showDialog"}],staticStyle:{"background-color":"#273142","position":"absolute","right":"0","display":"block","margin-top":"-100px","z-index":"1000"},on:{"select":_vm.selectEmoji}}),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-579851e6>","</div>",[_c('b-button',{staticStyle:{"background-color":"#ff726f","margin-top":"-30px"},attrs:{"id":"test","disabled":_vm.buttonDisabled},on:{"click":_vm.submitComment}},[_vm._v("Submit")])],1),_vm._ssrNode(" <div data-v-579851e6>"+((_vm.showUnacceptableCommentMssg)?("<p style=\"color:red\" data-v-579851e6>Sorry this message is not allowed.</p>"):"<!---->")+"</div>")],2):_vm._e(),_vm._ssrNode(" "+((!_vm.auth)?("<div style=\"margin-top:20px;font-weight:bold\" data-v-579851e6><span style=\"cursor:pointer;color:#ff726f\" data-v-579851e6>LOGIN</span> or\n      <span style=\"cursor:pointer;color:#ff726f\" data-v-579851e6>REGISTER</span> to comment!\n    </div>"):"<!---->"))],2)]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/Comments/Comments.vue?vue&type=template&id=579851e6&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Comments/CommentTree.vue?vue&type=template&id=b65923e2&scoped=true&
var CommentTreevue_type_template_id_b65923e2_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (!_vm.loading)?_c('div',{key:_vm.inc},[(!_vm.comment)?_vm._ssrNode("<div style=\"text-align:left;padding:20px\" data-v-b65923e2>","</div>",[_c('b-skeleton',{attrs:{"width":"20%","animated":true}}),_vm._ssrNode(" "),_c('b-skeleton',{attrs:{"width":"40%","animated":true}}),_vm._ssrNode(" "),_c('b-skeleton',{attrs:{"width":"80%","animated":true}}),_vm._ssrNode(" "),_c('b-skeleton',{attrs:{"animated":true}})],2):_vm._e(),_vm._ssrNode(" "),(_vm.comment)?_c('b-table',{staticStyle:{"padding-top":"0px","border":"0px solid #dbdbdb"},attrs:{"mobile-cards":false,"data":_vm.comment,"striped":true,"hoverable":false},scopedSlots:_vm._u([{key:"default",fn:function(props){return [_c('div',{staticStyle:{"margin-top":"5px"}}),_vm._v(" "),_c('b-table-column',{staticStyle:{"display":"block","padding-top":"0px","background-color":"#202836"},style:({'margin-left':_vm.depth*20 + 'px',width:'100%'-500+'px','margin-top':_vm.depth==0?'0px':'-16px'}),attrs:{"field":"id"}},[(props.row.type)?_c('div',{staticStyle:{"width":"100%"},attrs:{"id":"newComment"}},[_c('div',{staticStyle:{"padding":"10px"}},[_c('b-input',{staticStyle:{"resize":"none","white-space":"pre-wrap","word-wrap":"break-word","height":"150px"},attrs:{"maxlength":"1500","type":"textarea","icon-right":"emoticon-outline","icon-right-clickable":""},on:{"icon-right-click":_vm.toogleDialogEmoji},model:{value:(_vm.newComment.text),callback:function ($$v) {_vm.$set(_vm.newComment, "text", $$v)},expression:"newComment.text"}})],1),_vm._v(" "),_c('VEmojiPicker',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDialog),expression:"showDialog"}],staticStyle:{"background-color":"#273142","position":"absolute","right":"0","display":"block","margin-top":"-100px","z-index":"1000"},on:{"select":_vm.selectEmoji}}),_vm._v(" "),_c('div',{staticStyle:{"margin-left":"20px"}},[_c('b-button',{staticStyle:{"background-color":"#ff726f","margin-top":"-100px+"},attrs:{"id":"test","disabled":_vm.buttonDisabled},on:{"click":_vm.submitComment}},[_vm._v("Reply")])],1),_vm._v(" "),_c('div',[(_vm.showUnacceptableCommentMssg)?_c('p',{staticStyle:{"color":"red"}},[_vm._v("Sorry this message is not allowed.")]):_vm._e()])],1):_vm._e(),_vm._v(" "),(props.row.type === undefined)?_c('div',[_c('div',{staticClass:"comment-mobile"},[(props.row.user && props.row.user.flag !== '')?_c('span',[_c('country-flag',{staticStyle:{"vertical-align":"-15px","margin-left":"-20px","margin-right":"-5px"},attrs:{"country":props.row.user.flag,"size":"normal"}})],1):_vm._e(),_vm._v(" "),(!props.row.user || props.row.user.flag === '')?_c('span',[_c('country-flag',{staticStyle:{"vertical-align":"-15px","margin-left":"-20px","margin-right":"-5px"},attrs:{"country":"un","size":"normal"}})],1):_vm._e(),_vm._v(" "),_c('b',{class:_vm.isAdmin(props.row.user),staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.navUser(props.row.user._id)}}},[_vm._v(_vm._s(props.row.user.username))]),_vm._v(" "),(props.row.user.favPlayer && props.row.user.favPlayer.name)?_c('span',{staticStyle:{"margin-left":"5px"}},[_vm._v("\n              |\n              "),_c('span',{staticStyle:{"opacity":"0.8"}},[_c('b-icon',{staticStyle:{"color":"#ff726f"},attrs:{"icon":"heart","size":"is-small"}}),_vm._v("\n                "+_vm._s(props.row.user.favPlayer.name)+"\n              ")],1)]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"word-mobile",staticStyle:{"word-wrap":"break-word"}},[(props.row.replyComment)?_c('span',{staticStyle:{"color":"#8c67ef","cursor":"pointer","max-width":"200px","word-wrap":"break-word"},on:{"click":function($event){_vm.selectedReply = props.row.replyComment;_vm.clickAt(props.row.replyComment)}}},[_vm._v("@"+_vm._s(_vm.getComment(props.row.replyComment).user.username))]):_vm._e(),_vm._v(" "),(props.row.isRemoved && props.row.isRemoved===true)?_c('div',[_c('p',{staticStyle:{"color":"red"}},[_c('i',[_vm._v("This comment has been deleted")])])]):_vm._e(),_vm._v(" "),(props.row.isRemoved == undefined || props.row.isRemoved!==true)?_c('div',[_c('vue-markdown',{attrs:{"html":false}},[_vm._v(_vm._s(props.row.text))])],1):_vm._e()]),_vm._v(" "),(_vm.newUser)?_c('div',{staticStyle:{"margin-right":"12px"}},[(_vm.newUser.permissions.includes('moderator') && (props.row.isRemoved == undefined || props.row.isRemoved!==true) )?_c('div',{staticStyle:{"text-align":"right"}},[_c('b-icon',{staticStyle:{"cursor":"pointer"},attrs:{"icon":"delete","size":"is-primary"},nativeOn:{"click":function($event){return _vm.deleteComment(props.row)}}})],1):_vm._e()]):_vm._e(),_vm._v(" "),(props.row.isRemoved == undefined || props.row.isRemoved!==true)?_c('div',[_c('div',{staticClass:"icon-comment",staticStyle:{"font-size":"11px","text-align":"right","cursor":"pointer"},on:{"click":function($event){return _vm.reply(props.row,_vm.depth)}}},[_c('b-icon',{attrs:{"icon":"message-reply-text"}}),_vm._v(" "),_c('div',[_vm._v(_vm._s(_vm.formatDate(props.row.createdAt)))])],1)]):_vm._e(),_vm._v(" "),(props.row.isRemoved && props.row.isRemoved===true)?_c('div',{staticStyle:{"font-size":"11px","text-align":"right"}},[_vm._v(_vm._s(_vm.formatDate(props.row.createdAt)))]):_vm._e()]):_vm._e()]),_vm._v(" "),(props.row.replies && props.row.replies.length)?_c('div',_vm._l((props.row.replies),function(childComment,index){return _c('node',{key:index,attrs:{"comment":[childComment],"parent":_vm.comment,"index":index,"depth":_vm.depth+1,"pageData":_vm.pageData,"type":_vm.type,"id":_vm.id,"newUser":_vm.newUser}})}),1):_vm._e(),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"3px"}})]}}],null,false,868206482)}):_vm._e()],2):_vm._e()}
var CommentTreevue_type_template_id_b65923e2_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Comments/CommentTree.vue?vue&type=template&id=b65923e2&scoped=true&

// EXTERNAL MODULE: external "vue-markdown"
var external_vue_markdown_ = __webpack_require__(53);
var external_vue_markdown_default = /*#__PURE__*/__webpack_require__.n(external_vue_markdown_);

// EXTERNAL MODULE: external "v-emoji-picker"
var external_v_emoji_picker_ = __webpack_require__(54);
var external_v_emoji_picker_default = /*#__PURE__*/__webpack_require__.n(external_v_emoji_picker_);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "vuex"
var external_vuex_ = __webpack_require__(57);
var external_vuex_default = /*#__PURE__*/__webpack_require__.n(external_vuex_);

// CONCATENATED MODULE: ./store.js
/* eslint-disable */


external_vue_default.a.use(external_vuex_default.a);
/* harmony default export */ var store = (new external_vuex_default.a.Store({
  state: {
    auth:  false || '',
    user: {},
    comment: {}
  },
  mutations: {
    auth_success(state, auth) {
      state.auth = auth;
      state.user = auth.user;
    },

    logout(state) {
      state.auth = '';
      state.user = '';
    },

    changeComment(state, comment) {
      state.comment = comment;
    }

  },
  actions: {
    ChangeComment({
      commit
    }, comment) {
      commit('changeComment', comment);
    }

  },
  getters: {
    getComment: state => state.comment,
    userRole: state => {
      if (state.auth == '') {
        return null;
      }

      if (state.auth.user.permissions === 0) {
        return "user";
      }

      if (state.auth.user.permissions[0] === "admin") {
        return "admin";
      }
    }
  }
}));
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Comments/CommentTree.vue?vue&type=script&lang=js&
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




const moment = __webpack_require__(8);

/* harmony default export */ var CommentTreevue_type_script_lang_js_ = ({
  name: "node",
  props: {
    comment: Array,
    depth: Number,
    parent: Array,
    index: Number,
    id: String,
    type: String,
    pageData: Object,
    newUser: Object
  },

  data() {
    return {
      inc: 0,
      prevReply: "",
      buttonDisabled: false,
      showUnacceptableCommentMssg: false,
      auth: undefined,
      newComment: {
        text: ""
      },
      isBanned: false,
      isReady: false,
      loading: true,
      showDialog: false
    };
  },

  created() {
    this.$nextTick(function () {
      this.loading = false;
    });
  },

  mounted() {
    if (this.comment && this.comment[0]) {
      this.isReady = true;
    }

    let auth = undefined;

    if (false) { var authEnc; }

    if (this.newUser) {
      this.auth = this.newUser;
      this.newComment.userId = auth.user._id;
    }
  },

  methods: {
    toogleDialogEmoji() {
      this.showDialog = !this.showDialog;
    },

    selectEmoji(emoji) {
      this.newComment.text += emoji.data;
    },

    getComment(id) {
      for (let i = 0; i < this.comment.length; i++) {
        if (this.comment[i]._id === id) {
          return this.comment[i];
        }
      }
    },

    formatDate(dateTime) {
      const utc = moment.utc(dateTime);
      var localDate = utc.local();
      return moment(localDate).format("DD-MM-YYYY h:mm a");
    },

    reply(row, depth) {
      this.showDialog = false;

      if (this.newUser.isBanned) {
        this.$buefy.snackbar.open("You have been banned from posting");
        return;
      }

      if (depth === 7) {
        this.$buefy.snackbar.open("Comment depth limit reached");
        return;
      }

      const prevComment = store.getters.getComment;

      if (prevComment.replies) {
        prevComment.replies.pop();
      }

      store.dispatch("ChangeComment", row);

      if (!row.replies) {
        row.replies = [];
      }

      row.replies.push({
        type: "reply",
        userId: "5e97c24346719d261d32c912",
        text: "yess",
        replies: [],
        dateTime: "2020-05-09T19:50:00.927Z",
        createdAt: {
          $date: "2020-05-09T19:50:00.935Z"
        },
        updatedAt: {
          $date: "2020-05-09T19:50:00.935Z"
        },
        __v: 0
      });
      this.inc += 1;
      setTimeout(function () {
        document.getElementById("newComment").scrollIntoView();
        window.scrollBy(0, -400);
      }, 0);
    },

    isAdmin(user) {
      if (user && user.permissions.length > 0 && user.permissions[0] === "admin") {
        return "admin";
      } else if (user && user.permissions.length > 0 && user.permissions.includes("moderator")) {
        return "moderator";
      }

      return "user";
    },

    submitComment() {
      this.showDialog = false;
      this.buttonDisabled = true;

      if (this.newUser.isBanned) {
        this.buttonDisabled = false;
        this.$buefy.snackbar.open("You have been banned from posting. Contact via email to appeal.");
        return;
      }

      const parentComment = store.getters.getComment;
      this.newComment.dateTime = new Date();
      this.$axios(undefined + `api/comments`, {
        method: "post",
        data: this.newComment
      }).then(function (response) {
        return response.data;
      }).then(response => {
        if (!parentComment.repliesId) {
          parentComment.repliesId = [];
        }

        parentComment.repliesId.push(response._id);
        this.$axios(undefined + `api/comments/` + parentComment._id, {
          method: "patch",
          data: parentComment
        }).then(function (response) {
          return response.data;
        }).then(response => {
          if (this.pageData.numComments) {
            this.pageData.numComments += 1;
          } else {
            this.pageData.numComments = this.pageData.commentIds.length;
          }

          this.$axios(undefined + `api/${this.type}/${this.id}`, {
            method: "patch",
            headers: new Headers({
              "content-type": "application/json"
            }),
            data: this.pageData
          }).then(function (response) {
            return response.data;
          }).then(response => {});

          if (this.type === "forums") {
            this.sendAtMsgNotif(response);
          }

          if (this.type === "matches") {
            this.sendAtMsgNotifMatches(response);
          }

          if (this.type === "news") {
            this.sendAtMsgNotifNews(response);
          }

          window.location.reload();
        });
      });
    },

    sendAtMsgNotifNews(news) {
      // Send notif to guy who got @d
      const prevComment = store.getters.getComment;

      if (prevComment.user.notifications[this.id]) {
        prevComment.user.notifications[this.id].dateTime = this.pageData.updatedAt;
      } else {
        prevComment.user.notifications[this.id] = {
          type: this.type,
          dateTime: this.pageData.updatedAt,
          text: "Someone has replied to you on a news post!",
          slug: this.pageData.slug
        };
      }

      this.$axios(undefined + `users/${prevComment.user._id}`, {
        method: "patch",
        headers: new Headers({
          "content-type": "application/json"
        }),
        data: prevComment.user
      }).then(function (response) {
        return response.data;
      }).then(response => {});
    },

    sendAtMsgNotifMatches(match) {
      // Send notif to guy who got @d
      const prevComment = store.getters.getComment;

      if (prevComment.user.notifications[this.id]) {
        prevComment.user.notifications[this.id].dateTime = this.pageData.updatedAt;
      } else {
        prevComment.user.notifications[this.id] = {
          type: this.type,
          dateTime: this.pageData.updatedAt,
          text: "Someone has replied to you on a match post!",
          slug: this.pageData.slug
        };
      }

      this.$axios(undefined + `users/${prevComment.user._id}`, {
        method: "patch",
        headers: new Headers({
          "content-type": "application/json"
        }),
        data: prevComment.user
      }).then(function (response) {
        return response.data;
      }).then(response => {});
    },

    sendAtMsgNotif(forum) {
      const prevComment = store.getters.getComment; // Send notif to guy who got @d

      if (prevComment.user.notifications[this.id]) {
        prevComment.user.notifications[this.id].dateTime = this.pageData.updatedAt;
      } else {
        prevComment.user.notifications[this.id] = {
          type: this.type,
          dateTime: this.pageData.updatedAt,
          text: "Someone has replied to you on a forum post!",
          slug: this.pageData.slug
        };
      }

      this.$axios(undefined + `users/${prevComment.user._id}`, {
        method: "patch",
        headers: new Headers({
          "content-type": "application/json"
        }),
        data: prevComment.user
      }).then(function (response) {
        return response.data;
      }).then(response => {});
    },

    deleteComment(comment) {
      this.$buefy.dialog.confirm({
        message: "Are you sure you want to delete this comment?",
        type: "is-dark",
        onConfirm: () => {
          this.$axios(undefined + `api/comments/${comment._id}`, {
            method: "patch",
            headers: {
              "content-type": "application/json"
            },
            data: {
              isRemoved: true
            }
          }).then(function (response) {
            return response.data;
          }).then(response => {
            window.location.reload();
          });
        }
      });
    },

    navUser(id) {
      this.$router.push({
        path: `/user/${id}`
      });
    }

  },
  components: {
    VueMarkdown: external_vue_markdown_default.a,
    VEmojiPicker: external_v_emoji_picker_default.a
  }
});
// CONCATENATED MODULE: ./components/Comments/CommentTree.vue?vue&type=script&lang=js&
 /* harmony default export */ var Comments_CommentTreevue_type_script_lang_js_ = (CommentTreevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Comments/CommentTree.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(77)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Comments_CommentTreevue_type_script_lang_js_,
  CommentTreevue_type_template_id_b65923e2_scoped_true_render,
  CommentTreevue_type_template_id_b65923e2_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "b65923e2",
  "08af725f"
  
)

/* harmony default export */ var CommentTree = (component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Comments/Comments.vue?vue&type=script&lang=js&
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




const Commentsvue_type_script_lang_js_moment = __webpack_require__(8);

/* harmony default export */ var Commentsvue_type_script_lang_js_ = ({
  name: "Characters",
  props: {
    id: String,
    type: String,
    commentsArray: Array,
    pageData: Object
  },

  data() {
    return {
      auth: undefined,
      comment: {
        text: ""
      },
      data: [],
      users: {},
      buttonDisabled: false,
      showUnacceptableCommentMssg: false,
      isBanned: false,
      replyComment: undefined,
      selectedReply: undefined,
      commentsObj: {},
      inc: 0,
      forum: undefined,
      match: undefined,
      newUser: undefined,
      loading: true,
      showDialog: false
    };
  },

  created() {
    this.$nextTick(function () {
      this.loading = false;
    });
  },

  mounted() {
    if (false) { var authEnc; }
  },

  methods: {
    toogleDialogEmoji() {
      this.showDialog = !this.showDialog;
    },

    selectEmoji(emoji) {
      this.comment.text += emoji.data;
    },

    getComment(id) {
      for (let i = 0; i < this.commentsArray.length; i++) {
        if (this.commentsArray[i]._id === id) {
          return this.commentsArray[i];
        }
      }
    },

    isAdmin(user) {
      if (user.permissions.length > 0 && user.permissions[0] === "admin") {
        return "admin";
      }

      return "user";
    },

    formatDate(dateTime) {
      const utc = Commentsvue_type_script_lang_js_moment.utc(dateTime);
      var localDate = utc.local();
      return Commentsvue_type_script_lang_js_moment(localDate).format("DD-MM-YYYY h:mm a");
    },

    navLogin() {
      this.$router.push({
        path: `/login`
      });
    },

    navRegister() {
      this.$router.push({
        path: `/signup`
      });
    },

    navUser(id) {
      this.$router.push({
        path: `/user/${id}`
      });
    },

    submitComment() {
      this.showDialog = false;

      if (this.isBanned) {
        this.$buefy.snackbar.open("You have been banned from posting. Contact via email to appeal.");
        return;
      }

      this.buttonDisabled = true;
      this.comment.dateTime = new Date();
      let newCommentId = "";
      this.comment.text = this.filterBadwords(this.comment.text);
      let notAllowed = true;

      for (let i = 0; i < this.comment.text.length; i++) {
        if (this.comment.text[i] !== "*" && this.comment.text[i] !== " " && this.comment.text[i] !== "\n") {
          notAllowed = false;
        }
      }

      if (!notAllowed) {
        this.comment.replyComment = this.replyComment;
        this.comment.repliesId = [];
        this.$axios(undefined + `api/comments`, {
          method: "post",
          data: this.comment
        }).then(function (response) {
          return response.data;
        }).then(response => {
          if (response.code !== undefined) {
            this.$buefy.snackbar.open(response.message);
            this.buttonDisabled = true;
          } else {
            newCommentId = response._id;
            this.$axios(undefined + `api/${this.type}/${this.id}?&populateuser=true`, {
              method: "get",
              headers: {
                "content-type": "application/json"
              }
            }).then(function (response) {
              return response.data;
            }).then(response => {
              if (response.code !== undefined) {
                this.buttonDisabled = true;
                this.$buefy.snackbar.open(response.message);
              } else {
                if (this.type === "forums") {
                  this.forum = response;
                }

                if (this.type === "matches") {
                  this.match = response;
                }

                const newData = response;
                newData.commentIds.push(newCommentId);

                if (newData.numComments) {
                  newData.numComments += 1;
                } else {
                  newData.numComments = newData.commentIds.length;
                }

                this.$axios(undefined + `api/${this.type}/${this.id}`, {
                  method: "patch",
                  headers: new Headers({
                    "content-type": "application/json"
                  }),
                  data: newData
                }).then(function (response) {
                  return response.data;
                }).then(response => {
                  this.buttonDisabled = true;

                  if (response.code !== undefined) {
                    this.$buefy.snackbar.open(response.message);
                    this.buttonDisabled = false;
                  } else {
                    if (this.type === "forums") {
                      this.sendForumNotif(response);

                      if (this.replyComment !== undefined) {
                        this.sendAtMsgNotif(response);
                      }
                    }

                    if (this.type === "matches") {
                      if (this.replyComment !== undefined) {
                        this.sendAtMsgNotifMatches(response);
                      }
                    }

                    if (this.type === "news") {
                      if (this.replyComment !== undefined) {
                        this.sendAtMsgNotifNews(response);
                      }
                    }

                    window.location.reload();
                  }
                });
              }
            });
          }
        }).catch(error => {
          if (error.response) {
            if (error.response.data.message === "jwt expired") {
              if (false) {}

              window.location.reload();
            }
          }
        });
      } else {
        this.showUnacceptableCommentMssg = true;
        this.buttonDisabled = false;
      }
    },

    sendAtMsgNotifNews(news) {
      // Send notif to guy who got @d
      if (this.replyComment.user.notifications[this.id]) {
        this.replyComment.user.notifications[this.id].dateTime = news.updatedAt;
      } else {
        this.replyComment.user.notifications[this.id] = {
          type: this.type,
          dateTime: news.updatedAt,
          text: "Someone has replied to you on a news post!",
          slug: news.slug
        };
      }

      this.$axios(undefined + `users/${this.replyComment.user._id}`, {
        method: "patch",
        headers: new Headers({
          "content-type": "application/json"
        }),
        data: this.replyComment.user
      }).then(function (response) {
        return response.data;
      }).then(response => {});
    },

    sendAtMsgNotifMatches(match) {
      // Send notif to guy who got @d
      if (this.replyComment.user.notifications[this.id]) {
        this.replyComment.user.notifications[this.id].dateTime = match.updatedAt;
      } else {
        this.replyComment.user.notifications[this.id] = {
          type: this.type,
          dateTime: match.updatedAt,
          text: "Someone has replied to you on a match post!",
          slug: match.slug
        };
      }

      this.$axios(undefined + `users/${this.replyComment.user._id}`, {
        method: "patch",
        headers: new Headers({
          "content-type": "application/json"
        }),
        data: this.replyComment.user
      }).then(function (response) {
        return response.data;
      }).then(response => {});
    },

    sendAtMsgNotif(forum) {
      if (this.forum.user._id === this.replyComment.user._id) {
        return;
      } // Send notif to guy who got @d


      if (this.replyComment.user.notifications[this.id]) {
        this.replyComment.user.notifications[this.id].dateTime = forum.updatedAt;
      } else {
        this.replyComment.user.notifications[this.id] = {
          type: this.type,
          dateTime: forum.updatedAt,
          text: "Someone has replied to you on a forum post!",
          slug: forum.slug
        };
      }

      this.$axios(undefined + `users/${this.replyComment.user._id}`, {
        method: "patch",
        headers: new Headers({
          "content-type": "application/json"
        }),
        data: this.replyComment.user
      }).then(function (response) {
        return response.data;
      }).then(response => {});
    },

    sendForumNotif(forum) {
      if (this.forum.user._id === this.comment.userId) {
        return;
      } // Send notification to forum poster


      if (this.forum.user.notifications[this.id]) {
        this.forum.user.notifications[this.id].dateTime = forum.updatedAt;
      } else {
        this.forum.user.notifications[this.id] = {
          type: this.type,
          dateTime: forum.updatedAt,
          text: "Someone has commented on a forum post you created!"
        };
      }

      this.$axios(undefined + `users/${this.forum.user._id}`, {
        method: "patch",
        headers: new Headers({
          "content-type": "application/json"
        }),
        data: this.forum.user
      }).then(function (response) {
        return response.data;
      }).then(response => {});
    },

    filterBadwords(text) {
      const badWords = new Set(["nigger", "nigar", "niggar", "niger", "n1ger", "n1gger", "n1ggar", "nigga", "negar", "neggar", "faggot", "faggit", "fagot", "nigerr", "nigarr", "fagott", "faggit"]);
      text = text.trim().split(" ");

      for (let i = 0; i < text.length; i++) {
        if (badWords.has(text[i].toLowerCase())) {
          text[i] = "******";
        }
      }

      text = text.join(" ");
      return text;
    },

    reply() {},

    shouldHighlight(id) {
      setTimeout(() => {
        this.selectedReply = undefined;
      }, 4000);

      if (this.selectedReply && id === this.selectedReply) {
        return "bkg-highlight";
      }

      return "";
    },

    clickAt(id) {
      document.getElementById(id).scrollIntoView();
      window.scrollBy(0, -100);
    },

    scrollBottom() {
      window.scrollTo(0, document.body.scrollHeight);
    }

  },
  components: {
    VueMarkdown: external_vue_markdown_default.a,
    CommentTree: CommentTree,
    VEmojiPicker: external_v_emoji_picker_default.a
  }
});
// CONCATENATED MODULE: ./components/Comments/Comments.vue?vue&type=script&lang=js&
 /* harmony default export */ var Comments_Commentsvue_type_script_lang_js_ = (Commentsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Comments/Comments.vue



function Comments_injectStyles (context) {
  
  var style0 = __webpack_require__(79)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var Comments_component = Object(componentNormalizer["a" /* default */])(
  Comments_Commentsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  Comments_injectStyles,
  "579851e6",
  "3e47df22"
  
)

/* harmony default export */ var Comments = __webpack_exports__["a"] = (Comments_component.exports);

/***/ })

};;
//# sourceMappingURL=_slug.js.map