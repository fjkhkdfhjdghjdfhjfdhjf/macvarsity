exports.ids = [7];
exports.modules = {

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(175);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("0ee5d672", content, true, context)
};

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_style_index_0_id_4413ec26_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(105);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_style_index_0_id_4413ec26_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_style_index_0_id_4413ec26_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_style_index_0_id_4413ec26_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_style_index_0_id_4413ec26_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Signup_vue_vue_type_style_index_0_id_4413ec26_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 175:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".type-button[data-v-4413ec26]{width:150px}.button[data-v-4413ec26]{margin-top:20px;margin-bottom:20px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 231:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/Signup.vue?vue&type=template&id=4413ec26&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_vm._ssrNode("<h1 style=\"font-size:50px;margin-bottom:20px\" data-v-4413ec26>Signup</h1> "),_vm._ssrNode("<div class=\"columns is-centered\" data-v-4413ec26>","</div>",[_vm._ssrNode("<div class=\"column is-one-fifth\" data-v-4413ec26>","</div>",[_vm._ssrNode("<div class=\"card\" data-v-4413ec26>","</div>",[_vm._ssrNode("<div class=\"card-content\" data-v-4413ec26>","</div>",[_vm._ssrNode("<div style=\"text-align:left\" data-v-4413ec26>","</div>",[_c('b-field',{attrs:{"label":"Email"}},[_c('b-input',{attrs:{"placeholder":"Email...","type":"email"},model:{value:(_vm.user.email),callback:function ($$v) {_vm.$set(_vm.user, "email", $$v)},expression:"user.email"}})],1),_vm._ssrNode(" "),_c('b-field',{attrs:{"label":"Username"}},[_c('b-input',{attrs:{"placeholder":"Username...","maxlength":"50"},model:{value:(_vm.user.username),callback:function ($$v) {_vm.$set(_vm.user, "username", $$v)},expression:"user.username"}})],1),_vm._ssrNode(" "),_c('b-field',{attrs:{"label":"Password"}},[_c('b-input',{attrs:{"placeholder":"Password...","type":"password"},model:{value:(_vm.user.password),callback:function ($$v) {_vm.$set(_vm.user, "password", $$v)},expression:"user.password"}})],1),_vm._ssrNode(" "),_c('b-field',{attrs:{"label":"Flag"}},[_c('b-select',{attrs:{"expanded":"","placeholder":"Select Flag"},model:{value:(_vm.user.flag),callback:function ($$v) {_vm.$set(_vm.user, "flag", $$v)},expression:"user.flag"}},_vm._l((_vm.flagOptions),function(option){return _c('option',{key:option.value,domProps:{"value":option.value}},[_vm._v(_vm._s(option.text))])}),0)],1)],2)]),_vm._ssrNode(" "),_vm._ssrNode("<footer class=\"card-footer\" style=\"height:60px;\" data-v-4413ec26>","</footer>",[_vm._ssrNode("<span class=\"card-footer-item\" data-v-4413ec26>","</span>",[_c('b-button',{staticStyle:{"background-color":"#ff726f"},on:{"click":_vm.signup}},[_vm._v("Submit")])],1)])],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/Signup.vue?vue&type=template&id=4413ec26&scoped=true&

// EXTERNAL MODULE: ./assets/flags/flags.json
var flags = __webpack_require__(63);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/Signup.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var Signupvue_type_script_lang_js_ = ({
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
      },
      flagOptions: flags
    };
  },

  mounted() {},

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
            // this.$buefy.snackbar.open({
            //   message: "Please check email and spam for verification code!",
            //   duration: 15000
            // });
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
// CONCATENATED MODULE: ./pages/Signup.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Signupvue_type_script_lang_js_ = (Signupvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/Signup.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(174)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Signupvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "4413ec26",
  "bf73b248"
  
)

/* harmony default export */ var Signup = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 63:
/***/ (function(module) {

module.exports = JSON.parse("[{\"text\":\"Afghanistan\",\"value\":\"af\"},{\"text\":\"Åland Islands\",\"value\":\"ax\"},{\"text\":\"Albania\",\"value\":\"al\"},{\"text\":\"Algeria\",\"value\":\"dz\"},{\"text\":\"American Samoa\",\"value\":\"as\"},{\"text\":\"Andorra\",\"value\":\"ad\"},{\"text\":\"Angola\",\"value\":\"ao\"},{\"text\":\"Anguilla\",\"value\":\"ai\"},{\"text\":\"Antarctica\",\"value\":\"aq\"},{\"text\":\"Antigua and Barbuda\",\"value\":\"ag\"},{\"text\":\"Argentina\",\"value\":\"ar\"},{\"text\":\"Armenia\",\"value\":\"am\"},{\"text\":\"Aruba\",\"value\":\"aw\"},{\"text\":\"Australia\",\"value\":\"au\"},{\"text\":\"Austria\",\"value\":\"at\"},{\"text\":\"Azerbaijan\",\"value\":\"az\"},{\"text\":\"Bahamas\",\"value\":\"bs\"},{\"text\":\"Bahrain\",\"value\":\"bh\"},{\"text\":\"Bangladesh\",\"value\":\"bd\"},{\"text\":\"Barbados\",\"value\":\"bb\"},{\"text\":\"Belarus\",\"value\":\"by\"},{\"text\":\"Belgium\",\"value\":\"be\"},{\"text\":\"Belize\",\"value\":\"bz\"},{\"text\":\"Benin\",\"value\":\"bj\"},{\"text\":\"Bermuda\",\"value\":\"bm\"},{\"text\":\"Bhutan\",\"value\":\"bt\"},{\"text\":\"Bolivia\",\"value\":\"bo\"},{\"text\":\"Bonaire, Sint Eustatius and Saba\",\"value\":\"bq\"},{\"text\":\"Bosnia and Herzegovina\",\"value\":\"ba\"},{\"text\":\"Botswana\",\"value\":\"bw\"},{\"text\":\"Bouvet Island\",\"value\":\"bv\"},{\"text\":\"Brazil\",\"value\":\"br\"},{\"text\":\"Virgin Islands (British)\",\"value\":\"vg\"},{\"text\":\"British Indian Ocean Territory\",\"value\":\"io\"},{\"text\":\"Brunei Darussalam\",\"value\":\"bn\"},{\"text\":\"Bulgaria\",\"value\":\"bg\"},{\"text\":\"Burkina Faso\",\"value\":\"bf\"},{\"text\":\"Burundi\",\"value\":\"bi\"},{\"text\":\"Cambodia\",\"value\":\"kh\"},{\"text\":\"Cameroon\",\"value\":\"cm\"},{\"text\":\"Canada\",\"value\":\"ca\"},{\"text\":\"Cabo Verde\",\"value\":\"cv\"},{\"text\":\"Cayman Islands\",\"value\":\"ky\"},{\"text\":\"Central African Republic\",\"value\":\"cf\"},{\"text\":\"Chad\",\"value\":\"td\"},{\"text\":\"Chile\",\"value\":\"cl\"},{\"text\":\"China\",\"value\":\"cn\"},{\"text\":\"Christmas Island\",\"value\":\"cx\"},{\"text\":\"Cocos (Keeling) Islands\",\"value\":\"cc\"},{\"text\":\"Colombia\",\"value\":\"co\"},{\"text\":\"Comoros\",\"value\":\"km\"},{\"text\":\"Congo\",\"value\":\"cg\"},{\"text\":\"Congo, Democratic Republic of the\",\"value\":\"cd\"},{\"text\":\"Cook Islands\",\"value\":\"ck\"},{\"text\":\"Costa Rica\",\"value\":\"cr\"},{\"text\":\"Côte d'Ivoire\",\"value\":\"ci\"},{\"text\":\"Croatia\",\"value\":\"hr\"},{\"text\":\"Cuba\",\"value\":\"cu\"},{\"text\":\"Curaçao\",\"value\":\"cw\"},{\"text\":\"Cyprus\",\"value\":\"cy\"},{\"text\":\"Czechia\",\"value\":\"cz\"},{\"text\":\"Denmark\",\"value\":\"dk\"},{\"text\":\"Djibouti\",\"value\":\"dj\"},{\"text\":\"Dominica\",\"value\":\"dm\"},{\"text\":\"Dominican Republic\",\"value\":\"do\"},{\"text\":\"Ecuador\",\"value\":\"ec\"},{\"text\":\"Egypt\",\"value\":\"eg\"},{\"text\":\"El Salvador\",\"value\":\"sv\"},{\"text\":\"Equatorial Guinea\",\"value\":\"gq\"},{\"text\":\"Eritrea\",\"value\":\"er\"},{\"text\":\"Estonia\",\"value\":\"ee\"},{\"text\":\"Ethiopia\",\"value\":\"et\"},{\"text\":\"Falkland Islands (Malvinas)\",\"value\":\"fk\"},{\"text\":\"Faroe Islands\",\"value\":\"fo\"},{\"text\":\"Fiji\",\"value\":\"fj\"},{\"text\":\"Finland\",\"value\":\"fi\"},{\"text\":\"France\",\"value\":\"fr\"},{\"text\":\"French Guiana\",\"value\":\"gf\"},{\"text\":\"French Polynesia\",\"value\":\"pf\"},{\"text\":\"French Southern Territories\",\"value\":\"tf\"},{\"text\":\"Gabon\",\"value\":\"ga\"},{\"text\":\"Gambia\",\"value\":\"gm\"},{\"text\":\"Georgia\",\"value\":\"ge\"},{\"text\":\"Germany\",\"value\":\"de\"},{\"text\":\"Ghana\",\"value\":\"gh\"},{\"text\":\"Gibraltar\",\"value\":\"gi\"},{\"text\":\"Greece\",\"value\":\"gr\"},{\"text\":\"Greenland\",\"value\":\"gl\"},{\"text\":\"Grenada\",\"value\":\"gd\"},{\"text\":\"Guadeloupe\",\"value\":\"gp\"},{\"text\":\"Guam\",\"value\":\"gu\"},{\"text\":\"Guatemala\",\"value\":\"gt\"},{\"text\":\"Guernsey\",\"value\":\"gg\"},{\"text\":\"Guinea\",\"value\":\"gn\"},{\"text\":\"Guinea-Bissau\",\"value\":\"gw\"},{\"text\":\"Guyana\",\"value\":\"gy\"},{\"text\":\"Haiti\",\"value\":\"ht\"},{\"text\":\"Holy See\",\"value\":\"va\"},{\"text\":\"Honduras\",\"value\":\"hn\"},{\"text\":\"Hong Kong\",\"value\":\"hk\"},{\"text\":\"Hungary\",\"value\":\"hu\"},{\"text\":\"Iceland\",\"value\":\"is\"},{\"text\":\"India\",\"value\":\"in\"},{\"text\":\"Indonesia\",\"value\":\"id\"},{\"text\":\"Iran (Islamic Republic of)\",\"value\":\"ir\"},{\"text\":\"Iraq\",\"value\":\"iq\"},{\"text\":\"Ireland\",\"value\":\"ie\"},{\"text\":\"Isle of Man\",\"value\":\"im\"},{\"text\":\"Israel\",\"value\":\"il\"},{\"text\":\"Italy\",\"value\":\"it\"},{\"text\":\"Jamaica\",\"value\":\"jm\"},{\"text\":\"Japan\",\"value\":\"jp\"},{\"text\":\"Jersey\",\"value\":\"je\"},{\"text\":\"Jordan\",\"value\":\"jo\"},{\"text\":\"Kazakhstan\",\"value\":\"kz\"},{\"text\":\"Kenya\",\"value\":\"ki\"},{\"text\":\"Korea (Democratic People's Republic of)\",\"value\":\"kp\"},{\"text\":\"Korea, Republic of\",\"value\":\"kr\"},{\"text\":\"Kuwait\",\"value\":\"kw\"},{\"text\":\"Kyrgyzstan\",\"value\":\"kg\"},{\"text\":\"Lao People's Democratic Republic\",\"value\":\"la\"},{\"text\":\"Latvia\",\"value\":\"lv\"},{\"text\":\"Lebanon\",\"value\":\"lb\"},{\"text\":\"Lesotho\",\"value\":\"ls\"},{\"text\":\"Liberia\",\"value\":\"lr\"},{\"text\":\"Libya\",\"value\":\"ly\"},{\"text\":\"Liechtenstein\",\"value\":\"li\"},{\"text\":\"Lithuania\",\"value\":\"lt\"},{\"text\":\"Luxembourg\",\"value\":\"lu\"},{\"text\":\"North Macedonia\",\"value\":\"mk\"},{\"text\":\"Macao\",\"value\":\"mo\"},{\"text\":\"Madagascar\",\"value\":\"mg\"},{\"text\":\"Malawi\",\"value\":\"mw\"},{\"text\":\"Malaysia\",\"value\":\"my\"},{\"text\":\"Maldives\",\"value\":\"mv\"},{\"text\":\"Mali\",\"value\":\"ml\"},{\"text\":\"Malta\",\"value\":\"mt\"},{\"text\":\"Marshall Islands\",\"value\":\"mh\"},{\"text\":\"Martinique\",\"value\":\"mq\"},{\"text\":\"Mauritania\",\"value\":\"mr\"},{\"text\":\"Mauritius\",\"value\":\"mu\"},{\"text\":\"Mexico\",\"value\":\"mx\"},{\"text\":\"Micronesia (Federated States of)\",\"value\":\"fm\"},{\"text\":\"Moldova, Republic of\",\"value\":\"md\"},{\"text\":\"Monaco\",\"value\":\"mc\"},{\"text\":\"Mongolia\",\"value\":\"mn\"},{\"text\":\"Montenegro\",\"value\":\"me\"},{\"text\":\"Montserrat\",\"value\":\"ms\"},{\"text\":\"Morocco\",\"value\":\"ma\"},{\"text\":\"Mozambique\",\"value\":\"mz\"},{\"text\":\"Myanmar\",\"value\":\"mm\"},{\"text\":\"Namibia\",\"value\":\"na\"},{\"text\":\"Nauru\",\"value\":\"nr\"},{\"text\":\"Nepal\",\"value\":\"np\"},{\"text\":\"Netherlands\",\"value\":\"nl\"},{\"text\":\"New Caledonia\",\"value\":\"nc\"},{\"text\":\"New Zealand\",\"value\":\"nz\"},{\"text\":\"Nicaragua\",\"value\":\"ni\"},{\"text\":\"Niger\",\"value\":\"ne\"},{\"text\":\"Nigeria\",\"value\":\"ng\"},{\"text\":\"Niue\",\"value\":\"nu\"},{\"text\":\"Norway\",\"value\":\"no\"},{\"text\":\"Oman\",\"value\":\"om\"},{\"text\":\"Pakistan\",\"value\":\"pk\"},{\"text\":\"Palau\",\"value\":\"pw\"},{\"text\":\"Palestine, State of\",\"value\":\"ps\"},{\"text\":\"Panama\",\"value\":\"pa\"},{\"text\":\"Papua New Guinea\",\"value\":\"pg\"},{\"text\":\"Paraguay\",\"value\":\"py\"},{\"text\":\"Peru\",\"value\":\"pe\"},{\"text\":\"Philippines\",\"value\":\"ph\"},{\"text\":\"Poland\",\"value\":\"pl\"},{\"text\":\"Portugal\",\"value\":\"pt\"},{\"text\":\"Puerto Rico\",\"value\":\"pr\"},{\"text\":\"Qatar\",\"value\":\"qa\"},{\"text\":\"Réunion\",\"value\":\"re\"},{\"text\":\"Romania\",\"value\":\"ro\"},{\"text\":\"Russia\",\"value\":\"ru\"},{\"text\":\"Rwanda\",\"value\":\"rw\"},{\"text\":\"Saint Helena, Ascension and Tristan da Cunha\",\"value\":\"sh\"},{\"text\":\"Saint Kitts and Nevis\",\"value\":\"kn\"},{\"text\":\"Saint Lucia\",\"value\":\"lc\"},{\"text\":\"Saint Pierre and Miquelon\",\"value\":\"pm\"},{\"text\":\"Saint Vincent and the Grenadines\",\"value\":\"vc\"},{\"text\":\"Samoa\",\"value\":\"ws\"},{\"text\":\"San Marino\",\"value\":\"sm\"},{\"text\":\"Sao Tome and Principe\",\"value\":\"st\"},{\"text\":\"Saudi Arabia\",\"value\":\"sa\"},{\"text\":\"Senegal\",\"value\":\"sn\"},{\"text\":\"Serbia\",\"value\":\"se\"},{\"text\":\"Seychelles\",\"value\":\"sc\"},{\"text\":\"Sierra Leone\",\"value\":\"sl\"},{\"text\":\"Singapore\",\"value\":\"sg\"},{\"text\":\"Slovakia\",\"value\":\"sk\"},{\"text\":\"Slovenia\",\"value\":\"si\"},{\"text\":\"Solomon Islands\",\"value\":\"sb\"},{\"text\":\"Somalia\",\"value\":\"so\"},{\"text\":\"South Africa\",\"value\":\"za\"},{\"text\":\"South Georgia and the South Sandwich Islands\",\"value\":\"gs\"},{\"text\":\"South Sudan\",\"value\":\"ss\"},{\"text\":\"Spain\",\"value\":\"es\"},{\"text\":\"Sri Lanka\",\"value\":\"lk\"},{\"text\":\"Sudan\",\"value\":\"sd\"},{\"text\":\"Suriname\",\"value\":\"sr\"},{\"text\":\"Eswatini\",\"value\":\"sz\"},{\"text\":\"Sweden\",\"value\":\"se\"},{\"text\":\"Switzerland\",\"value\":\"ch\"},{\"text\":\"Syria\",\"value\":\"sy\"},{\"text\":\"Taiwan\",\"value\":\"tw\"},{\"text\":\"Tajikistan\",\"value\":\"tj\"},{\"text\":\"Tanzania\",\"value\":\"th\"},{\"text\":\"Timor-Leste\",\"value\":\"tl\"},{\"text\":\"Togo\",\"value\":\"tg\"},{\"text\":\"Tonga\",\"value\":\"to\"},{\"text\":\"Trinidad and Tobago\",\"value\":\"tt\"},{\"text\":\"Tunisia\",\"value\":\"tn\"},{\"text\":\"Turkey\",\"value\":\"tr\"},{\"text\":\"Turkmenistan\",\"value\":\"tm\"},{\"text\":\"Tuvalu\",\"value\":\"tv\"},{\"text\":\"Uganda\",\"value\":\"ug\"},{\"text\":\"Ukraine\",\"value\":\"ua\"},{\"text\":\"United Arab Emirates\",\"value\":\"ae\"},{\"text\":\"United Kingdom\",\"value\":\"gb\"},{\"text\":\"United States of America\",\"value\":\"us\"},{\"text\":\"Uruguay\",\"value\":\"uy\"},{\"text\":\"Uzbekistan\",\"value\":\"uz\"},{\"text\":\"Vanuatu\",\"value\":\"vu\"},{\"text\":\"Venezuela\",\"value\":\"gm\"},{\"text\":\"Vietnam\",\"value\":\"vn\"},{\"text\":\"Virgin Islands (U.S.)\",\"value\":\"vi\"},{\"text\":\"Yemen\",\"value\":\"ye\"},{\"text\":\"Zambia\",\"value\":\"zm\"},{\"text\":\"Zimbabwe\",\"value\":\"zw\"},{\"text\":\"International\",\"value\":\"un\"}]");

/***/ })

};;
//# sourceMappingURL=Signup.js.map