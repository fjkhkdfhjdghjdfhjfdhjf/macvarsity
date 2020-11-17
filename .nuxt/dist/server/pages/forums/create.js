exports.ids = [17];
exports.modules = {

/***/ 111:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(185);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("b1b314a8", content, true, context)
};

/***/ }),

/***/ 184:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(111);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_create_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".textarea{resize:none!important}@media screen and (max-width:640px){.comment-mobile{text-align:left}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/forums/create.vue?vue&type=template&id=15e20e2d&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_vm._ssrNode("<div class=\"columns is-centered\" style=\"margin-top:10px; \">","</div>",[_vm._ssrNode("<div class=\"column is-narrow\">","</div>",[_vm._ssrNode("<div"+(_vm._ssrStyle(null,{width:!_vm.$device.isMobile?'800px':'' }, null))+">","</div>",[_vm._ssrNode("<div class=\"card\">","</div>",[_vm._ssrNode("<div class=\"card-content\">","</div>",[_vm._ssrNode("<div class=\"title\">Create Discussion</div> "+((_vm.auth == undefined)?("<div style=\"text-align:right; padding:0px\"><span style=\"cursor:pointer;color:#ff726f\">LOGIN</span> or\n              <span style=\"cursor:pointer;color:#ff726f\">REGISTER</span> to post!\n            </div>"):"<!---->")+" "),(_vm.auth != undefined)?_vm._ssrNode("<div class=\"columns is-centered\">","</div>",[_vm._ssrNode("<div class=\"column\" style=\"text-align:left\">","</div>",[_c('b-field',{attrs:{"label":"Topic"}},[_c('b-select',{attrs:{"expanded":"","placeholder":"Select a topic"},model:{value:(_vm.forum.type),callback:function ($$v) {_vm.$set(_vm.forum, "type", $$v)},expression:"forum.type"}},[_c('option',{staticStyle:{"color":"white"},attrs:{"value":"valorant"}},[_vm._v("Valorant Related")]),_vm._v(" "),_c('option',{staticStyle:{"color":"white"},attrs:{"value":"offTopic"}},[_vm._v("Off Topic")]),_vm._v(" "),_c('option',{staticStyle:{"color":"white"},attrs:{"value":"feedback"}},[_vm._v("Valorantify Feedback")])])],1),_vm._ssrNode(" "),_c('b-field',{attrs:{"label":"Title"}},[_c('b-input',{attrs:{"placeholder":"Title","maxlength":"100"},model:{value:(_vm.forum.title),callback:function ($$v) {_vm.$set(_vm.forum, "title", $$v)},expression:"forum.title"}})],1),_vm._ssrNode(" "),_c('b-field',{staticStyle:{"padding-bottom":"0px"},attrs:{"label":"Body"}},[_c('b-input',{staticStyle:{"resize":"none","white-space":"pre-wrap","word-wrap":"break-word"},attrs:{"maxlength":"1000","type":"textarea","icon-right":"emoticon-outline","icon-right-clickable":""},on:{"icon-right-click":_vm.toogleDialogEmoji},model:{value:(_vm.forum.body),callback:function ($$v) {_vm.$set(_vm.forum, "body", $$v)},expression:"forum.body"}})],1),_vm._ssrNode(" "),_c('VEmojiPicker',{directives:[{name:"show",rawName:"v-show",value:(_vm.showDialog),expression:"showDialog"}],staticStyle:{"background-color":"#273142","position":"absolute","right":"0","display":"block","margin-top":"-150px","z-index":"1000"},on:{"select":_vm.selectEmoji}}),_vm._ssrNode(" "),_vm._ssrNode("<div style=\"text-align:right\">","</div>",[_c('b-button',{staticStyle:{"background-color":"#ff726f"},on:{"click":_vm.createForum}},[_vm._v("Create")])],1),_vm._ssrNode(" <div>"+((_vm.showUnacceptablePostMssg)?("<p style=\"color:red;text-align:right\">Sorry this post is not allowed.</p>"):"<!---->")+"</div>")],2)]):_vm._e()],2)])])])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/forums/create.vue?vue&type=template&id=15e20e2d&

// EXTERNAL MODULE: external "v-emoji-picker"
var external_v_emoji_picker_ = __webpack_require__(54);
var external_v_emoji_picker_default = /*#__PURE__*/__webpack_require__.n(external_v_emoji_picker_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/forums/create.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/* harmony default export */ var createvue_type_script_lang_js_ = ({
  name: "Forums",
  props: {
    id: String
  },

  data() {
    return {
      auth: undefined,
      forum: {
        type: undefined,
        title: undefined,
        body: ""
      },
      showUnacceptablePostMssg: false,
      isBanned: false,
      showDialog: false
    };
  },

  created() {
    if (false) { var authEnc; }
  },

  methods: {
    toogleDialogEmoji() {
      this.showDialog = !this.showDialog;
    },

    selectEmoji(emoji) {
      this.forum.body += emoji.data;
    },

    formatDate(dateTime) {
      const utc = moment.utc(dateTime);
      var localDate = utc.local();
      return moment(localDate).format("DD/MM/YY h:mm a");
    },

    createForum() {
      this.showDialog = false;

      if (this.isBanned) {
        this.$buefy.snackbar.open("You have been banned from posting. Contact via email to appeal.");
        return;
      }

      this.forum.comments = [];
      this.forum.dateTime = new Date();
      this.forum.userId = this.auth.user._id;
      this.forum.title = this.filterBadwords(this.forum.title);
      this.forum.body = this.filterBadwords(this.forum.body);
      let notAllowed = true;

      for (let i = 0; i < this.forum.title.length; i++) {
        if (this.forum.title[i] !== "*" && this.forum.title[i] !== " " && this.forum.title[i] !== "\n") {
          notAllowed = false;
        }
      }

      for (let i = 0; i < this.forum.body.length; i++) {
        if (this.forum.body[i] !== "*" && this.forum.body[i] !== " " && this.forum.body[i] !== "\n") {
          notAllowed = false;
        }
      }

      if (!notAllowed) {
        this.$axios(undefined + `api/forums?$sort[updatedAt]=-1&$limit=2&userId=${this.auth.user._id}`, {
          method: "get",
          headers: {
            "content-type": "application/json"
          }
        }).then(function (response) {
          return response.data;
        }).then(response => {
          const forums = response.data;
          let count = 0;

          for (let i = 0; i < forums.length; i++) {
            const yesterday = moment().subtract(1, "d");
            const date = moment(forums[i].createdAt);

            if (!date.isBefore(yesterday)) {
              count += 1;
            }

            if (count >= 2) {
              this.$buefy.snackbar.open("You have reached your post limit for today!");
              return;
            }
          }

          this.$axios(undefined + "api/forums", {
            method: "post",
            data: this.forum
          }).then(function (response) {
            return response.data;
          }).then(response => {
            if (response.code !== undefined) {
              this.$buefy.snackbar.open(response.message);
            } else {
              this.$buefy.snackbar.open("Creation successful!");
              this.$router.push({
                path: `/forums/${response._id}/${response.slug}`
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
        });
      } else {
        this.showUnacceptablePostMssg = true;
      }
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
    }

  },
  components: {
    VEmojiPicker: external_v_emoji_picker_default.a
  }
});
// CONCATENATED MODULE: ./pages/forums/create.vue?vue&type=script&lang=js&
 /* harmony default export */ var forums_createvue_type_script_lang_js_ = (createvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/forums/create.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(184)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  forums_createvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "035327b2"
  
)

/* harmony default export */ var create = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=create.js.map