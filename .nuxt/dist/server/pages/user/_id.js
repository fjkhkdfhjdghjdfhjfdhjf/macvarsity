exports.ids = [36];
exports.modules = {

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(199);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("10b9dc70", content, true, context)
};

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_8c5786a2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(119);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_8c5786a2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_8c5786a2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_8c5786a2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_8c5786a2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_8c5786a2_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 199:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".type-button[data-v-8c5786a2]{width:150px}.button[data-v-8c5786a2]{margin-top:20px;margin-bottom:20px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_id.vue?vue&type=template&id=8c5786a2&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_vm._ssrNode("<div class=\"columns is-centered\" data-v-8c5786a2>","</div>",[_vm._ssrNode("<div class=\"column is-full\" data-v-8c5786a2>","</div>",[_vm._ssrNode("<div class=\"card\" style=\"margin-top:20px;\" data-v-8c5786a2>","</div>",[(_vm.user)?_vm._ssrNode("<div class=\"card-content\" data-v-8c5786a2>","</div>",[_vm._ssrNode("<p class=\"title\" data-v-8c5786a2>"+_vm._ssrEscape(_vm._s(_vm.user.username))+"</p> "),(_vm.auth && _vm.auth.user.permissions.includes('moderator') && (_vm.user.isBanned === undefined || _vm.user.isBanned === false))?_vm._ssrNode("<div data-v-8c5786a2>","</div>",[_c('b-button',{on:{"click":function($event){return _vm.banUser(_vm.user)}}},[_vm._v("Ban user")])],1):_vm._e(),_vm._ssrNode(" "),(_vm.auth && _vm.auth.user.permissions.includes('moderator') && (_vm.user.isBanned !== undefined && _vm.user.isBanned === true))?_vm._ssrNode("<div data-v-8c5786a2>","</div>",[_c('b-button',{on:{"click":function($event){return _vm.unBanUser(_vm.user)}}},[_vm._v("Unban user")])],1):_vm._e(),_vm._ssrNode(" <p class=\"subtitle\" style=\"margin-top:10px\" data-v-8c5786a2>"+_vm._ssrEscape("Joined: "+_vm._s(_vm.formatDate(_vm.user.createdAt)))+"</p> "),(_vm.auth!=undefined && _vm.auth.user._id === this.$route.params.id )?_c('b-field',{attrs:{"label":"Flag"}},[_c('b-select',{attrs:{"expanded":"","placeholder":"Select Flag"},model:{value:(_vm.user.flag),callback:function ($$v) {_vm.$set(_vm.user, "flag", $$v)},expression:"user.flag"}},_vm._l((_vm.flagOptions),function(option){return _c('option',{key:option.value,domProps:{"value":option.value}},[_vm._v(_vm._s(option.text))])}),0)],1):_vm._e(),_vm._ssrNode(" "),(_vm.auth!=undefined && _vm.auth.user._id === this.$route.params.id )?_c('b-field',{staticStyle:{"text-align":"center"},attrs:{"label":"Favorite Player"}},[_c('b-autocomplete',{attrs:{"icon":"magnify","data":_vm.playerSearchData,"placeholder":_vm.user.favPlayer && _vm.user.favPlayer.name?_vm.user.favPlayer.name:'Search player...',"field":"name","loading":_vm.fetchingPlayer},on:{"typing":_vm.getPlayerSearchResults,"select":function (option) {_vm.selected = option;}},nativeOn:{"click":function($event){return _vm.onFocus($event)}},scopedSlots:_vm._u([{key:"default",fn:function(props){return [_c('div',[_c('span',[(props.option.flag !== undefined)?_c('country-flag',{staticStyle:{"vertical-align":"-15px","margin-left":"-20px","margin-right":"-15px"},attrs:{"country":props.option.flag,"size":"small"}}):_vm._e(),_vm._v(" "),(props.option.flag === undefined)?_c('country-flag',{staticStyle:{"vertical-align":"-15px","margin-left":"-20px","margin-right":"-15px"},attrs:{"country":"un","size":"small"}}):_vm._e(),_vm._v(" "),(props.option.realName.first !== '')?_c('div',{staticStyle:{"display":"inline-block"}},[_vm._v("\n                      "+_vm._s(props.option.realName.first)+"\n                      "),_c('span',{staticStyle:{"color":"#ff726f","margin-left":"4px"}},[_vm._v("\""+_vm._s(props.option.name)+"\"")]),_vm._v(" "),_c('span',{staticStyle:{"margin-left":"4px"}},[_vm._v(_vm._s(props.option.realName.last))])]):_vm._e(),_vm._v(" "),(props.option.realName.first == '')?_c('div',{staticStyle:{"display":"inline-block"}},[_vm._v("\n                      "+_vm._s(props.option.realName.first)+"\n                      "),_c('span',{staticStyle:{"color":"#ff726f","margin-left":"4px"}},[_vm._v(_vm._s(props.option.name))]),_vm._v(" "),_c('span',{staticStyle:{"margin-left":"4px"}},[_vm._v(_vm._s(props.option.realName.last))])]):_vm._e()],1)])]}}],null,false,4252977913)},[_vm._v(" "),_c('template',{slot:"empty"},[_vm._v("No results found")])],2)],1):_vm._e(),_vm._ssrNode(" "+((_vm.auth!=undefined && _vm.auth.user._id === this.$route.params.id )?("<div style=\"cursor:pointer;\" data-v-8c5786a2>Clear Favorite Player</div>"):"<!---->")+" "),(_vm.auth!=undefined && _vm.auth.user._id === this.$route.params.id )?_c('b-button',{staticStyle:{"background-color":"#ff726f"},on:{"click":function($event){return _vm.setFlag(_vm.user.flag)}}},[_vm._v("Update")]):_vm._e(),_vm._ssrNode(" "+(((_vm.auth==undefined || _vm.auth.user._id !== this.$route.params.id )&& _vm.user.favPlayer)?("<div style=\"text-align:left\" data-v-8c5786a2><b data-v-8c5786a2>Favorite Player:</b>"+_vm._ssrEscape("\n            "+_vm._s(_vm.user.favPlayer.name)+"\n          ")+"</div>"):"<!---->"))],2):_vm._e()]),_vm._ssrNode(" "),(_vm.auth!=undefined && _vm.auth.user._id === this.$route.params.id )?_vm._ssrNode("<div class=\"card\" style=\"margin-top:20px;\" data-v-8c5786a2>","</div>",[(_vm.user)?_vm._ssrNode("<div class=\"card-content\" data-v-8c5786a2>","</div>",[_vm._ssrNode("\n          Notifications\n          <div style=\"text-align:right;color:#ff726f;cursor:pointer\" data-v-8c5786a2>Clear All</div> "),_c('b-table',{staticStyle:{"cursor":"pointer"},attrs:{"mobile-cards":false,"data":_vm.notificationsArray,"striped":true,"hoverable":true},on:{"click":function (row){ return _vm.navNotif(row); }},scopedSlots:_vm._u([{key:"default",fn:function(props){return [_c('b-table-column',{attrs:{"field":"id"}},[_c('div',[_vm._v("\n                  "+_vm._s(props.row[Object.keys(props.row)[0]].text)+"\n                  "),_c('span',{staticStyle:{"float":"right"}},[_vm._v(_vm._s(_vm.formatDate(props.row[Object.keys(props.row)[0]].dateTime)))])])])]}}],null,false,1025275072)})],2):_vm._e()]):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"card\" style=\"margin-top:20px;\" data-v-8c5786a2>","</div>",[(_vm.user)?_vm._ssrNode("<div class=\"card-content\" data-v-8c5786a2>","</div>",[_vm._ssrNode("\n          Recent Comments\n          "),_c('b-table',{attrs:{"mobile-cards":false,"data":_vm.commentsArray,"striped":true,"hoverable":true},scopedSlots:_vm._u([{key:"default",fn:function(props){return [_c('b-table-column',{attrs:{"field":"id"}},[_c('div',{staticClass:"comment-mobile"},[_c('b',[_vm._v(_vm._s(props.row.user.username))]),_vm._v(" "),_c('span',{staticStyle:{"float":"right"}},[_vm._v(_vm._s(_vm.formatDate(props.row.dateTime)))])]),_vm._v(" "),_c('div',{staticClass:"word-mobile",staticStyle:{"word-wrap":"break-word"}},[(props.row.isRemoved !== true)?_c('vue-markdown',[_vm._v(_vm._s(props.row.text))]):_c('vue-markdown',[_c('p',{staticStyle:{"color":"red"}},[_c('i',[_vm._v("This comment has been deleted")])])])],1)])]}}],null,false,2433292734)})],2):_vm._e()])],2)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/user/_id.vue?vue&type=template&id=8c5786a2&scoped=true&

// EXTERNAL MODULE: ./assets/flags/flags.json
var flags = __webpack_require__(63);

// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__(5);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/user/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  name: "User",
  props: {
    type: String
  },

  data() {
    return {
      user: undefined,
      commentsArray: [],
      notificationsArray: [],
      flagOptions: flags,
      auth: undefined,
      playerSearchData: [],
      playerSelected: null,
      fetchingPlayer: false,
      playerName: "",
      selected: null,
      loading: true
    };
  },

  mounted() {
    this.$watch(() => {
      return this.$route.params.id;
    }, (newVal, oldVal) => {
      location.reload();
    }, {
      deep: true
    });
    this.$aes.setKey("SECURE_VAL_PW");
    var authEnc = localStorage.getItem("auth");

    if (authEnc) {
      let auth = JSON.parse(this.$aes.decrypt(authEnc));
      this.auth = auth;
    }

    this.$axios(undefined + `api/comments?userId=${this.$route.params.id}&$sort[updatedAt]=-1&$limit=7`, {
      method: "get",
      headers: new Headers({
        "content-type": "application/json"
      })
    }).then(function (response) {
      return response.data;
    }).then(res => {
      this.commentsArray = res.data;
    });
    this.$axios(undefined + `users/${this.$route.params.id}`, {
      method: "get",
      headers: new Headers({
        "content-type": "application/json"
      })
    }).then(function (response) {
      return response.data;
    }).then(res => {
      this.user = res;
      this.notificationsArray = Object.entries(this.user.notifications).map(e => ({
        [e[0]]: e[1]
      }));
    });
  },

  methods: {
    navTwitter() {
      window.open("https://twitter.com/valorantify", "_blank");
    },

    formatDate(dateTime) {
      return moment(dateTime).format("MMMM DD, YYYY");
    },

    navNotif(notif) {
      const id = Object.keys(notif)[0];
      const type = notif[Object.keys(notif)[0]].type;
      const slug = notif[Object.keys(notif)[0]].slug;
      delete this.user.notifications[id];
      this.$axios(undefined + `users/${this.$route.params.id}`, {
        method: "patch",
        headers: new Headers({
          "content-type": "application/json"
        }),
        data: this.user
      }).then(function (response) {
        return response.data;
      }).then(response => {// window.location.reload();
      });
      this.$router.push({
        path: `/${type}/${id}/${slug}`
      });
    },

    clearNotifs() {
      this.user.notifications = {};
      this.$axios(undefined + `users/${this.$route.params.id}`, {
        method: "patch",
        headers: new Headers({
          "content-type": "application/json"
        }),
        data: this.user
      }).then(function (response) {
        return response.data;
      }).then(response => {
        window.location.reload();
      });
    },

    setFlag(code) {
      if (code === undefined) {
        this.$buefy.snackbar.open({
          message: "Please select a flag.",
          duration: 1000
        });
      } else {
        if (this.selected) {
          let favPlayer = {
            name: this.selected.name,
            img: this.selected.img
          };
          this.user.favPlayer = favPlayer;
        }

        this.$axios(undefined + `users/${this.$route.params.id}`, {
          method: "patch",
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
              message: "Info is updated!",
              duration: 15000
            });
          }
        });
      }
    },

    banUser(user) {
      this.$axios(undefined + `users/${this.$route.params.id}`, {
        method: "patch",
        headers: new Headers({
          "content-type": "application/json"
        }),
        data: {
          isBanned: true
        }
      }).then(function (response) {
        return response.data;
      }).then(response => {
        if (response.code !== undefined) {
          this.$buefy.snackbar.open(response.message);
        } else {
          window.location.reload();
        }
      });
    },

    unBanUser(user) {
      this.$axios(undefined + `users/${this.$route.params.id}`, {
        method: "patch",
        headers: new Headers({
          "content-type": "application/json"
        }),
        data: {
          isBanned: false
        }
      }).then(function (response) {
        return response.data;
      }).then(response => {
        if (response.code !== undefined) {
          this.$buefy.snackbar.open(response.message);
        } else {
          window.location.reload();
        }
      });
    },

    getPlayerSearchResults: debounce_default()(function (name) {
      if (!name.length) {
        this.playerSearchData = []; // this.playerPage = 1
        // this.totalPlayerPages = 1

        return;
      }

      this.fetchingPlayer = true;
      this.$axios(undefined + `api/players?name[$search]=${name}`, {
        method: "get",
        headers: {
          "content-type": "application/json"
        }
      }).then(function (response) {
        return response.data;
      }).then(response => {
        this.playerSearchData = [];
        response.data.forEach(item => this.playerSearchData.push(item));
      }).catch(error => {
        this.playerSearchData = [];
        throw error;
      }).finally(() => {
        this.fetchingPlayer = false;
      });
    }, 500),

    getPlayerImgUrl(img) {
      return undefined + `api/uploads/players/${img}`;
    },

    navPlayer(player) {
      this.selected = player;

      if (player) {
        this.$router.push({
          path: `/players/${player._id}/${player.slug}`
        });
      }
    },

    onFocus(e) {
      e.stopPropagation();
    }

  },
  components: {}
});
// CONCATENATED MODULE: ./pages/user/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var user_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/user/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(198)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  user_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "8c5786a2",
  "bcb2af66"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 63:
/***/ (function(module) {

module.exports = JSON.parse("[{\"text\":\"Afghanistan\",\"value\":\"af\"},{\"text\":\"Åland Islands\",\"value\":\"ax\"},{\"text\":\"Albania\",\"value\":\"al\"},{\"text\":\"Algeria\",\"value\":\"dz\"},{\"text\":\"American Samoa\",\"value\":\"as\"},{\"text\":\"Andorra\",\"value\":\"ad\"},{\"text\":\"Angola\",\"value\":\"ao\"},{\"text\":\"Anguilla\",\"value\":\"ai\"},{\"text\":\"Antarctica\",\"value\":\"aq\"},{\"text\":\"Antigua and Barbuda\",\"value\":\"ag\"},{\"text\":\"Argentina\",\"value\":\"ar\"},{\"text\":\"Armenia\",\"value\":\"am\"},{\"text\":\"Aruba\",\"value\":\"aw\"},{\"text\":\"Australia\",\"value\":\"au\"},{\"text\":\"Austria\",\"value\":\"at\"},{\"text\":\"Azerbaijan\",\"value\":\"az\"},{\"text\":\"Bahamas\",\"value\":\"bs\"},{\"text\":\"Bahrain\",\"value\":\"bh\"},{\"text\":\"Bangladesh\",\"value\":\"bd\"},{\"text\":\"Barbados\",\"value\":\"bb\"},{\"text\":\"Belarus\",\"value\":\"by\"},{\"text\":\"Belgium\",\"value\":\"be\"},{\"text\":\"Belize\",\"value\":\"bz\"},{\"text\":\"Benin\",\"value\":\"bj\"},{\"text\":\"Bermuda\",\"value\":\"bm\"},{\"text\":\"Bhutan\",\"value\":\"bt\"},{\"text\":\"Bolivia\",\"value\":\"bo\"},{\"text\":\"Bonaire, Sint Eustatius and Saba\",\"value\":\"bq\"},{\"text\":\"Bosnia and Herzegovina\",\"value\":\"ba\"},{\"text\":\"Botswana\",\"value\":\"bw\"},{\"text\":\"Bouvet Island\",\"value\":\"bv\"},{\"text\":\"Brazil\",\"value\":\"br\"},{\"text\":\"Virgin Islands (British)\",\"value\":\"vg\"},{\"text\":\"British Indian Ocean Territory\",\"value\":\"io\"},{\"text\":\"Brunei Darussalam\",\"value\":\"bn\"},{\"text\":\"Bulgaria\",\"value\":\"bg\"},{\"text\":\"Burkina Faso\",\"value\":\"bf\"},{\"text\":\"Burundi\",\"value\":\"bi\"},{\"text\":\"Cambodia\",\"value\":\"kh\"},{\"text\":\"Cameroon\",\"value\":\"cm\"},{\"text\":\"Canada\",\"value\":\"ca\"},{\"text\":\"Cabo Verde\",\"value\":\"cv\"},{\"text\":\"Cayman Islands\",\"value\":\"ky\"},{\"text\":\"Central African Republic\",\"value\":\"cf\"},{\"text\":\"Chad\",\"value\":\"td\"},{\"text\":\"Chile\",\"value\":\"cl\"},{\"text\":\"China\",\"value\":\"cn\"},{\"text\":\"Christmas Island\",\"value\":\"cx\"},{\"text\":\"Cocos (Keeling) Islands\",\"value\":\"cc\"},{\"text\":\"Colombia\",\"value\":\"co\"},{\"text\":\"Comoros\",\"value\":\"km\"},{\"text\":\"Congo\",\"value\":\"cg\"},{\"text\":\"Congo, Democratic Republic of the\",\"value\":\"cd\"},{\"text\":\"Cook Islands\",\"value\":\"ck\"},{\"text\":\"Costa Rica\",\"value\":\"cr\"},{\"text\":\"Côte d'Ivoire\",\"value\":\"ci\"},{\"text\":\"Croatia\",\"value\":\"hr\"},{\"text\":\"Cuba\",\"value\":\"cu\"},{\"text\":\"Curaçao\",\"value\":\"cw\"},{\"text\":\"Cyprus\",\"value\":\"cy\"},{\"text\":\"Czechia\",\"value\":\"cz\"},{\"text\":\"Denmark\",\"value\":\"dk\"},{\"text\":\"Djibouti\",\"value\":\"dj\"},{\"text\":\"Dominica\",\"value\":\"dm\"},{\"text\":\"Dominican Republic\",\"value\":\"do\"},{\"text\":\"Ecuador\",\"value\":\"ec\"},{\"text\":\"Egypt\",\"value\":\"eg\"},{\"text\":\"El Salvador\",\"value\":\"sv\"},{\"text\":\"Equatorial Guinea\",\"value\":\"gq\"},{\"text\":\"Eritrea\",\"value\":\"er\"},{\"text\":\"Estonia\",\"value\":\"ee\"},{\"text\":\"Ethiopia\",\"value\":\"et\"},{\"text\":\"Falkland Islands (Malvinas)\",\"value\":\"fk\"},{\"text\":\"Faroe Islands\",\"value\":\"fo\"},{\"text\":\"Fiji\",\"value\":\"fj\"},{\"text\":\"Finland\",\"value\":\"fi\"},{\"text\":\"France\",\"value\":\"fr\"},{\"text\":\"French Guiana\",\"value\":\"gf\"},{\"text\":\"French Polynesia\",\"value\":\"pf\"},{\"text\":\"French Southern Territories\",\"value\":\"tf\"},{\"text\":\"Gabon\",\"value\":\"ga\"},{\"text\":\"Gambia\",\"value\":\"gm\"},{\"text\":\"Georgia\",\"value\":\"ge\"},{\"text\":\"Germany\",\"value\":\"de\"},{\"text\":\"Ghana\",\"value\":\"gh\"},{\"text\":\"Gibraltar\",\"value\":\"gi\"},{\"text\":\"Greece\",\"value\":\"gr\"},{\"text\":\"Greenland\",\"value\":\"gl\"},{\"text\":\"Grenada\",\"value\":\"gd\"},{\"text\":\"Guadeloupe\",\"value\":\"gp\"},{\"text\":\"Guam\",\"value\":\"gu\"},{\"text\":\"Guatemala\",\"value\":\"gt\"},{\"text\":\"Guernsey\",\"value\":\"gg\"},{\"text\":\"Guinea\",\"value\":\"gn\"},{\"text\":\"Guinea-Bissau\",\"value\":\"gw\"},{\"text\":\"Guyana\",\"value\":\"gy\"},{\"text\":\"Haiti\",\"value\":\"ht\"},{\"text\":\"Holy See\",\"value\":\"va\"},{\"text\":\"Honduras\",\"value\":\"hn\"},{\"text\":\"Hong Kong\",\"value\":\"hk\"},{\"text\":\"Hungary\",\"value\":\"hu\"},{\"text\":\"Iceland\",\"value\":\"is\"},{\"text\":\"India\",\"value\":\"in\"},{\"text\":\"Indonesia\",\"value\":\"id\"},{\"text\":\"Iran (Islamic Republic of)\",\"value\":\"ir\"},{\"text\":\"Iraq\",\"value\":\"iq\"},{\"text\":\"Ireland\",\"value\":\"ie\"},{\"text\":\"Isle of Man\",\"value\":\"im\"},{\"text\":\"Israel\",\"value\":\"il\"},{\"text\":\"Italy\",\"value\":\"it\"},{\"text\":\"Jamaica\",\"value\":\"jm\"},{\"text\":\"Japan\",\"value\":\"jp\"},{\"text\":\"Jersey\",\"value\":\"je\"},{\"text\":\"Jordan\",\"value\":\"jo\"},{\"text\":\"Kazakhstan\",\"value\":\"kz\"},{\"text\":\"Kenya\",\"value\":\"ki\"},{\"text\":\"Korea (Democratic People's Republic of)\",\"value\":\"kp\"},{\"text\":\"Korea, Republic of\",\"value\":\"kr\"},{\"text\":\"Kuwait\",\"value\":\"kw\"},{\"text\":\"Kyrgyzstan\",\"value\":\"kg\"},{\"text\":\"Lao People's Democratic Republic\",\"value\":\"la\"},{\"text\":\"Latvia\",\"value\":\"lv\"},{\"text\":\"Lebanon\",\"value\":\"lb\"},{\"text\":\"Lesotho\",\"value\":\"ls\"},{\"text\":\"Liberia\",\"value\":\"lr\"},{\"text\":\"Libya\",\"value\":\"ly\"},{\"text\":\"Liechtenstein\",\"value\":\"li\"},{\"text\":\"Lithuania\",\"value\":\"lt\"},{\"text\":\"Luxembourg\",\"value\":\"lu\"},{\"text\":\"North Macedonia\",\"value\":\"mk\"},{\"text\":\"Macao\",\"value\":\"mo\"},{\"text\":\"Madagascar\",\"value\":\"mg\"},{\"text\":\"Malawi\",\"value\":\"mw\"},{\"text\":\"Malaysia\",\"value\":\"my\"},{\"text\":\"Maldives\",\"value\":\"mv\"},{\"text\":\"Mali\",\"value\":\"ml\"},{\"text\":\"Malta\",\"value\":\"mt\"},{\"text\":\"Marshall Islands\",\"value\":\"mh\"},{\"text\":\"Martinique\",\"value\":\"mq\"},{\"text\":\"Mauritania\",\"value\":\"mr\"},{\"text\":\"Mauritius\",\"value\":\"mu\"},{\"text\":\"Mexico\",\"value\":\"mx\"},{\"text\":\"Micronesia (Federated States of)\",\"value\":\"fm\"},{\"text\":\"Moldova, Republic of\",\"value\":\"md\"},{\"text\":\"Monaco\",\"value\":\"mc\"},{\"text\":\"Mongolia\",\"value\":\"mn\"},{\"text\":\"Montenegro\",\"value\":\"me\"},{\"text\":\"Montserrat\",\"value\":\"ms\"},{\"text\":\"Morocco\",\"value\":\"ma\"},{\"text\":\"Mozambique\",\"value\":\"mz\"},{\"text\":\"Myanmar\",\"value\":\"mm\"},{\"text\":\"Namibia\",\"value\":\"na\"},{\"text\":\"Nauru\",\"value\":\"nr\"},{\"text\":\"Nepal\",\"value\":\"np\"},{\"text\":\"Netherlands\",\"value\":\"nl\"},{\"text\":\"New Caledonia\",\"value\":\"nc\"},{\"text\":\"New Zealand\",\"value\":\"nz\"},{\"text\":\"Nicaragua\",\"value\":\"ni\"},{\"text\":\"Niger\",\"value\":\"ne\"},{\"text\":\"Nigeria\",\"value\":\"ng\"},{\"text\":\"Niue\",\"value\":\"nu\"},{\"text\":\"Norway\",\"value\":\"no\"},{\"text\":\"Oman\",\"value\":\"om\"},{\"text\":\"Pakistan\",\"value\":\"pk\"},{\"text\":\"Palau\",\"value\":\"pw\"},{\"text\":\"Palestine, State of\",\"value\":\"ps\"},{\"text\":\"Panama\",\"value\":\"pa\"},{\"text\":\"Papua New Guinea\",\"value\":\"pg\"},{\"text\":\"Paraguay\",\"value\":\"py\"},{\"text\":\"Peru\",\"value\":\"pe\"},{\"text\":\"Philippines\",\"value\":\"ph\"},{\"text\":\"Poland\",\"value\":\"pl\"},{\"text\":\"Portugal\",\"value\":\"pt\"},{\"text\":\"Puerto Rico\",\"value\":\"pr\"},{\"text\":\"Qatar\",\"value\":\"qa\"},{\"text\":\"Réunion\",\"value\":\"re\"},{\"text\":\"Romania\",\"value\":\"ro\"},{\"text\":\"Russia\",\"value\":\"ru\"},{\"text\":\"Rwanda\",\"value\":\"rw\"},{\"text\":\"Saint Helena, Ascension and Tristan da Cunha\",\"value\":\"sh\"},{\"text\":\"Saint Kitts and Nevis\",\"value\":\"kn\"},{\"text\":\"Saint Lucia\",\"value\":\"lc\"},{\"text\":\"Saint Pierre and Miquelon\",\"value\":\"pm\"},{\"text\":\"Saint Vincent and the Grenadines\",\"value\":\"vc\"},{\"text\":\"Samoa\",\"value\":\"ws\"},{\"text\":\"San Marino\",\"value\":\"sm\"},{\"text\":\"Sao Tome and Principe\",\"value\":\"st\"},{\"text\":\"Saudi Arabia\",\"value\":\"sa\"},{\"text\":\"Senegal\",\"value\":\"sn\"},{\"text\":\"Serbia\",\"value\":\"se\"},{\"text\":\"Seychelles\",\"value\":\"sc\"},{\"text\":\"Sierra Leone\",\"value\":\"sl\"},{\"text\":\"Singapore\",\"value\":\"sg\"},{\"text\":\"Slovakia\",\"value\":\"sk\"},{\"text\":\"Slovenia\",\"value\":\"si\"},{\"text\":\"Solomon Islands\",\"value\":\"sb\"},{\"text\":\"Somalia\",\"value\":\"so\"},{\"text\":\"South Africa\",\"value\":\"za\"},{\"text\":\"South Georgia and the South Sandwich Islands\",\"value\":\"gs\"},{\"text\":\"South Sudan\",\"value\":\"ss\"},{\"text\":\"Spain\",\"value\":\"es\"},{\"text\":\"Sri Lanka\",\"value\":\"lk\"},{\"text\":\"Sudan\",\"value\":\"sd\"},{\"text\":\"Suriname\",\"value\":\"sr\"},{\"text\":\"Eswatini\",\"value\":\"sz\"},{\"text\":\"Sweden\",\"value\":\"se\"},{\"text\":\"Switzerland\",\"value\":\"ch\"},{\"text\":\"Syria\",\"value\":\"sy\"},{\"text\":\"Taiwan\",\"value\":\"tw\"},{\"text\":\"Tajikistan\",\"value\":\"tj\"},{\"text\":\"Tanzania\",\"value\":\"th\"},{\"text\":\"Timor-Leste\",\"value\":\"tl\"},{\"text\":\"Togo\",\"value\":\"tg\"},{\"text\":\"Tonga\",\"value\":\"to\"},{\"text\":\"Trinidad and Tobago\",\"value\":\"tt\"},{\"text\":\"Tunisia\",\"value\":\"tn\"},{\"text\":\"Turkey\",\"value\":\"tr\"},{\"text\":\"Turkmenistan\",\"value\":\"tm\"},{\"text\":\"Tuvalu\",\"value\":\"tv\"},{\"text\":\"Uganda\",\"value\":\"ug\"},{\"text\":\"Ukraine\",\"value\":\"ua\"},{\"text\":\"United Arab Emirates\",\"value\":\"ae\"},{\"text\":\"United Kingdom\",\"value\":\"gb\"},{\"text\":\"United States of America\",\"value\":\"us\"},{\"text\":\"Uruguay\",\"value\":\"uy\"},{\"text\":\"Uzbekistan\",\"value\":\"uz\"},{\"text\":\"Vanuatu\",\"value\":\"vu\"},{\"text\":\"Venezuela\",\"value\":\"gm\"},{\"text\":\"Vietnam\",\"value\":\"vn\"},{\"text\":\"Virgin Islands (U.S.)\",\"value\":\"vi\"},{\"text\":\"Yemen\",\"value\":\"ye\"},{\"text\":\"Zambia\",\"value\":\"zm\"},{\"text\":\"Zimbabwe\",\"value\":\"zw\"},{\"text\":\"International\",\"value\":\"un\"}]");

/***/ })

};;
//# sourceMappingURL=_id.js.map