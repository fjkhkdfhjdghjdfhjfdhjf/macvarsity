exports.ids = [19];
exports.modules = {

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(212);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("201e66a3", content, true, context)
};

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5aeef0ae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(125);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5aeef0ae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5aeef0ae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5aeef0ae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5aeef0ae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_5aeef0ae_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
var ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(213);
var ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(214);
exports = ___CSS_LOADER_API_IMPORT___(false);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
exports.push([module.i, "@font-face{font-family:Azonix;src:url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")}.type-button[data-v-5aeef0ae]{width:150px}.button[data-v-5aeef0ae]{margin-top:20px;margin-bottom:20px}.char-card[data-v-5aeef0ae]{cursor:pointer;padding:10px}.box[data-v-5aeef0ae]{width:220px;height:266px}@media screen and (max-width:640px){.main[data-v-5aeef0ae]{height:100%}.hide-img[data-v-5aeef0ae]{display:none}}@media screen and (min-width:640px){.main[data-v-5aeef0ae]{height:100vh}}.subtitle[data-v-5aeef0ae]{margin-bottom:5px;font-size:16px}.loser[data-v-5aeef0ae]{opacity:.4}.winner-live[data-v-5aeef0ae]{color:#90ee90}.loser-live[data-v-5aeef0ae]{color:#ff4500}.regular[data-v-5aeef0ae]{color:#fff}@media screen and (min-width:640px){.main[data-v-5aeef0ae]{justify-content:center;align-items:center;height:100vh}}@media screen and (max-width:640px){.main[data-v-5aeef0ae]{justify-content:center;align-items:center;height:100%}}@media screen and (max-width:769px){.ordered-mobile[data-v-5aeef0ae]{display:flex;flex-flow:column}.ordered-mobile .fl-1[data-v-5aeef0ae]{order:1}.ordered-mobile .fl-2[data-v-5aeef0ae]{order:2}.ordered-mobile .fl-3[data-v-5aeef0ae]{order:3}}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 213:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    // eslint-disable-next-line no-param-reassign
    options = {};
  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign


  url = url && url.__esModule ? url.default : url;

  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    // eslint-disable-next-line no-param-reassign
    url = url.slice(1, -1);
  }

  if (options.hash) {
    // eslint-disable-next-line no-param-reassign
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, '\\n'), "\"");
  }

  return url;
};

/***/ }),

/***/ 214:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "fonts/Azonix.cdfe47b.otf";

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=5aeef0ae&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main"},[_vm._ssrNode(((!_vm.$device.isMobile)?("<div class=\"columns is-centered\" data-v-5aeef0ae><div class=\"column is-narrow\" style=\"width:1300px;padding-top: 17px;padding-bottom: 0\" data-v-5aeef0ae><div class=\"container\" style=\"display:flex\" data-v-5aeef0ae><h1 style=\"font-family: Azonix; font-size:27px; color:#FF4654;margin-left:10px;margin-top:5px\" data-v-5aeef0ae>MacVarsity</h1></div> "+((_vm.$device.isMobile)?("<div data-id=\"5ed90390a624ae2e71257f75\" class=\"vm-placement\" data-v-5aeef0ae></div>"):"<!---->")+"</div></div>"):"<!---->")+" <div class=\"columns is-centered ordered-mobile\" data-v-5aeef0ae><div class=\"column is-narrow fl-1\" data-v-5aeef0ae><div"+(_vm._ssrStyle(null,{width:!_vm.$device.isMobile?'800px':'' }, null))+" data-v-5aeef0ae>"+((!_vm.$device.isMobile)?("<div class=\"subtitle\" style=\"text-align:left\" data-v-5aeef0ae>Latest Articles</div>"):("<div class=\"subtitle\" style=\"text-align:left; margin-top:15px\" data-v-5aeef0ae>Latest Articles</div>"))+"</div></div></div>")])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=5aeef0ae&scoped=true&

// EXTERNAL MODULE: external "vue-markdown"
var external_vue_markdown_ = __webpack_require__(53);
var external_vue_markdown_default = /*#__PURE__*/__webpack_require__.n(external_vue_markdown_);

// EXTERNAL MODULE: external "vue-country-flag"
var external_vue_country_flag_ = __webpack_require__(55);
var external_vue_country_flag_default = /*#__PURE__*/__webpack_require__.n(external_vue_country_flag_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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


/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  name: "Characters",
  props: {
    type: String
  },

  asyncData() {
    return external_axios_default.a.all([external_axios_default.a.get(undefined + "api/news?$sort[date]=-1&$limit=12"), external_axios_default.a.get(undefined + `api/matches?$sort[dateTime]=1&$limit=10&$skip=0&active=true&teamsDecided=true&populatemapsonly=true`, {
      headers: {
        "content-type": "application/json"
      }
    }), external_axios_default.a.get(undefined + `api/matches?$sort[dateTime]=-1&$limit=5&$skip=0&active=false&teamsDecided=true&populatemapsonly=true`, {
      headers: {
        "content-type": "application/json"
      }
    })]).then(external_axios_default.a.spread((news, matches, activeMatches) => {
      let oldMatches = [];
      let liveMatches = [];
      let matchData = matches.data.data;

      for (let i = 0; i < matchData.length; i++) {
        if (moment(new Date()).diff(moment(matchData[i].dateTime)) <= 0) {
          oldMatches.push(matchData[i]);
        } else {
          liveMatches.push(matchData[i]);
        }
      }

      return {
        news: news.data.data,
        matches: [...oldMatches],
        liveMatches: [...liveMatches],
        finishedMatches: [...activeMatches.data.data]
      };
    })).catch(err => {
      console.log(err);
    });
  },

  methods: {
    navEventDetails(id) {
      this.$router.push({
        path: `/events/${id}`
      });
    },

    navMatch(id, slug) {
      this.$router.push({
        path: `/matches/${id}/${slug}`
      });
    },

    navNews(id, slug) {
      this.$router.push({
        path: `/news/${id}/${slug}`
      });
    },

    getImgUrl(img) {
      return undefined + `api/uploads/news/${img}`;
    },

    getDay(dateTime) {
      const utc = moment.utc(dateTime);
      var localDate = utc.local();
      return moment(localDate).format("MMM DD");
    },

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
    },

    getTeamImgUrl(teamId) {
      return undefined + `api/uploads/teams/${teamId}`;
    },

    getLastMapScore(maps) {
      let details = {};

      for (let i = 0; i < maps.length; i++) {
        if (parseInt(maps[i].teamOneScore) !== 13 && parseInt(maps[i].teamTwoScore) !== 13) {
          return {
            teamOneScore: maps[i].teamOneScore,
            teamTwoScore: maps[i].teamTwoScore
          };
        }
      }

      return {
        teamOneScore: 0,
        teamTwoScore: 0
      };
    },

    getWinnerDetails(match) {
      let maps = match.maps;
      const details = {};

      if (maps.length === 1) {
        details.teamOneScore = maps[0].teamOneScore;
        details.teamTwoScore = maps[0].teamTwoScore;

        if (parseInt(details.teamOneScore) > parseInt(details.teamTwoScore)) {
          details.winner = 0;
        } else if (parseInt(details.teamOneScore) < parseInt(details.teamTwoScore)) {
          details.winner = 1;
        }
      } else {
        let oneCount = 0;
        let twoCount = 0;

        for (let i = 0; i < maps.length; i++) {
          if (parseInt(maps[i].teamOneScore) > parseInt(maps[i].teamTwoScore) && parseInt(maps[i].teamOneScore) === 13) {
            oneCount += 1;
          } else if (parseInt(maps[i].teamOneScore) < parseInt(maps[i].teamTwoScore) && parseInt(maps[i].teamTwoScore) === 13) {
            twoCount += 1;
          }
        }

        details.teamOneScore = oneCount;
        details.teamTwoScore = twoCount;

        if (match && match.defaultWin) {
          details.teamOneScore += match.defaultWin.teamOneScore;
          details.teamTwoScore += match.defaultWin.teamTwoScore;
        }

        if (oneCount > twoCount) {
          details.winner = 0;
        } else if (oneCount < twoCount) {
          details.winner = 1;
        }
      }

      return details;
    },

    getOutcomeClass(winner) {
      if (!winner) {
        return "loser";
      } else {
        return "winner";
      }
    },

    getOutcomeClassLive(winner) {
      if (!winner) {
        return "loser-live";
      } else {
        return "winner-live";
      }
    },

    getMapClass(scoreOne, scoreTwo) {
      if (scoreOne > scoreTwo) {
        return "regular";
      } else if (scoreTwo > scoreOne) {
        return "regular";
      } else {
        return "regular";
      }
    },

    formatDateEvent(dateTime) {
      const utc = moment.utc(dateTime);
      var localDate = utc.local();
      return moment(localDate).format("MMMM DD, YYYY");
    }

  },
  components: {
    VueMarkdown: external_vue_markdown_default.a,
    CountryFlag: external_vue_country_flag_default.a
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(211)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "5aeef0ae",
  "2cf61dde"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map