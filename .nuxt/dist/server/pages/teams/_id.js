exports.ids = [34];
exports.modules = {

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(197);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("245664b2", content, true, context)
};

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/EventCard.vue?vue&type=template&id=927ea728&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card",staticStyle:{"cursor":"pointer","display":"inline-block","width":"280px"},on:{"click":function($event){return _vm.navEventDetails(_vm.event._id, _vm.event.slug)}}},[_vm._ssrNode("<div class=\"card-content is-flex\""+(_vm._ssrStyle(null,{'height': '150px', 'padding': 0, 'align-items': 'flex-end', 'background': ("linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 90%), url(" + (_vm.getEventImgUrl(_vm.event)) + ") no-repeat center center"), 'background-size': 'cover'}, null))+">","</div>",[_vm._ssrNode("<div style=\"position: absolute; top: 0.5em; right: 0.5em\">","</div>",[(_vm.getStatus(_vm.event) === 'live')?_c('b-tag',{staticStyle:{"background-color":"green"},attrs:{"rounded":""}},[_vm._v("Live")]):_vm._e(),_vm._ssrNode(" "),(_vm.getStatus(_vm.event) === 'coming')?_c('b-tag',{staticStyle:{"background-color":"blue"},attrs:{"rounded":""}},[_vm._v("Upcoming")]):_vm._e(),_vm._ssrNode(" "),(_vm.getStatus(_vm.event) === 'prev')?_c('b-tag',{staticStyle:{"background-color":"black"},attrs:{"rounded":""}},[_vm._v("Finished")]):_vm._e()],2),_vm._ssrNode(" <div style=\"width: 100%\"><p style=\"padding-bottom: 0.5em\">"+_vm._ssrEscape(_vm._s(_vm.event.name))+"</p></div>")],2),_vm._ssrNode(" <footer class=\"card-footer\"><p class=\"card-footer-item\" style=\"color:#ff726f\">"+_vm._ssrEscape(_vm._s(_vm.formatDateEvent(_vm.event.date.from)))+"</p></footer>")],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./components/EventCard.vue?vue&type=template&id=927ea728&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/EventCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/* harmony default export */ var EventCardvue_type_script_lang_js_ = ({
  props: ['event'],
  methods: {
    getEventImgUrl(event) {
      return undefined + `api/uploads/events/${event.img}`;
    },

    formatDateEvent(dateTime) {
      const utc = moment.utc(dateTime);
      var localDate = utc.local();
      return moment(localDate).format("MMMM DD, YYYY");
    },

    getStatus(event) {
      if (moment(new Date()).isBetween(moment(event.date.from), moment(event.date.to))) {
        return 'live';
      } else if (moment(new Date()).diff(moment(event.date.to)) <= 0) {
        return 'coming';
      } else {
        return 'prev';
      }
    },

    navEventDetails(id, slug) {
      this.$router.push({
        path: `/events/${id}/${slug}`
      });
    }

  }
});
// CONCATENATED MODULE: ./components/EventCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_EventCardvue_type_script_lang_js_ = (EventCardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/EventCard.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_EventCardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "22067ff0"
  
)

/* harmony default export */ var EventCard = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_2e066a05_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(118);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_2e066a05_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_2e066a05_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_2e066a05_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_2e066a05_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_2e066a05_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 197:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".type-button[data-v-2e066a05]{width:150px}.button[data-v-2e066a05]{margin-top:20px;margin-bottom:20px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/teams/_id.vue?vue&type=template&id=2e066a05&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_vm._ssrNode("<div"+(_vm._ssrStyle(null,{width:!_vm.$device.isMobile?'800px':'' }, null))+" data-v-2e066a05>","</div>",[_vm._ssrNode("<div class=\"card\" data-v-2e066a05>","</div>",[_vm._ssrNode("<div class=\"card-content\" data-v-2e066a05>","</div>",[_vm._ssrNode("<div class=\"media\" data-v-2e066a05>","</div>",[_vm._ssrNode("<div class=\"media-left\" data-v-2e066a05><figure class=\"image is-128x128\" data-v-2e066a05><img"+(_vm._ssrAttr("src",_vm.getImgUrl()))+" style=\"border-radius: 50%;\" data-v-2e066a05></figure></div> <div class=\"media-content\" data-v-2e066a05><div class=\"content\" data-v-2e066a05><p class=\"title\" data-v-2e066a05>"+_vm._ssrEscape(_vm._s(_vm.team.name))+"</p> <p data-v-2e066a05>"+_vm._ssrEscape("Latest match: "+_vm._s(_vm.matchHistory[0] ? _vm.timeDiff(_vm.matchHistory[0].dateTime) : 'N/A')+" ago")+"</p></div></div> "),_vm._ssrNode("<div class=\"media-right\" data-v-2e066a05>","</div>",[_c('CountryFlag',{attrs:{"country":_vm.team.flag != null ? _vm.team.flag : 'UN',"size":"big"}})],1)],2),_vm._ssrNode(" "),(_vm.isPageReady)?_c('b-tabs',{attrs:{"type":"is-boxed"}},[_c('b-tab-item',{attrs:{"label":"Overview"}},[_c('div',{staticClass:"columns "},_vm._l((_vm.team.activePlayers),function(player){return _c('div',{key:player._id,staticClass:"column is-one-fifth"},[_c('nuxt-link',{attrs:{"to":("/players/" + (player._id))}},[_c('div',{staticClass:"card",style:({height:!_vm.$device.isMobile?'175px':'105px','cursor':'pointer'})},[_c('div',{style:({height:!_vm.$device.isMobile?'125px':'70px','width':'100%','display':'flex','overflow':'hidden','justify-content':'center'})},[_c('img',{staticStyle:{"max-height":"100%"},attrs:{"src":_vm.getPlayerImgUrl(player.img)}}),_vm._v(" "),_c('div',{staticStyle:{"position":"absolute","z-index":"1","top":"0px","right":"-8px"}},[(player.flag !== undefined)?_c('CountryFlag',{attrs:{"country":player.flag,"size":"medium"}}):_vm._e(),_vm._v(" "),(player.flag === undefined)?_c('CountryFlag',{staticStyle:{"visibility":"hidden","margin-right":"-20px"},attrs:{"country":"us","size":"small"}}):_vm._e()],1)]),_vm._v(" "),_c('footer',{staticClass:"card-footer"},[_c('div',{staticClass:"card-footer-item"},[_c('p',[_vm._v(_vm._s(player.name))])])])])])],1)}),0),_vm._v(" "),_c('div',{staticStyle:{"text-align":"left","font-size":"14px","margin-top":"40px"}},[_vm._v("Last 3 Matches")]),_vm._v(" "),_c('div',[_vm._v("Quarter Stats Winrate")]),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"20px"}},_vm._l((_vm.mapHistory),function(map){return _c('div',{key:map._id,staticClass:"box",staticStyle:{"background-color":"#273142","margin-top":"0.5em","margin-bottom":"0.5em"}},[_c('div',{staticClass:"media"},[_c('div',{staticClass:"media-left has-text-centered"},[_c('img',{staticStyle:{"width":"100px","border-radius":"10%"},attrs:{"src":_vm.getMapImg(map.img)}}),_vm._v(" "),_c('p',[_vm._v(_vm._s(map.name))])]),_vm._v(" "),_c('div',{staticClass:"media-content"},[_c('div',{staticClass:"content has-text-centered"},[(_vm.mapHistory[0].stats !== undefined)?_c('div',[_c('strong',{staticClass:"title is-4",staticStyle:{"color":"white"}},[_vm._v(_vm._s(map.stats ? (map.stats['Win %'].toFixed(2) * 100) : 'N/A')+"%")]),_vm._v(" "),_c('p',[_vm._v(_vm._s(map.stats ? map.stats['Maps Played'] : 'N/A')+" games")])]):_c('strong',{staticClass:"title is-4"},[_vm._v(_vm._s(Math.floor(Math.random() *100))+"%")])])])])])}),0)]),_vm._v(" "),_c('b-tab-item',{attrs:{"label":"Matches"}},[_vm._l((_vm.matchHistoryFinal.slice(0, 3)),function(match,index){return _c('div',{key:index,staticStyle:{"margin-top":"0.5em","margin-bottom":"0.5em"}},[_c('div',{staticClass:"box",staticStyle:{"background-color":"#273142"}},[_c('div',{staticClass:"media"},[_c('div',{staticClass:"media-left"},[_c('figure',{staticClass:"image is-64x64"},[_c('img',{staticStyle:{"border-radius":"50%"},attrs:{"src":_vm.getTeamImg(match.opponent.img),"alt":"Avatar"}})])]),_vm._v(" "),_c('div',{staticClass:"media-content",staticStyle:{"padding":"10px","cursor":"pointer"},on:{"click":function($event){return _vm.navMatch(match._id)}}},[_c('p',[_c('strong',{staticStyle:{"color":"white"}},[_vm._v(_vm._s(match.opponent.name))])]),_vm._v(" "),(match.isWinner)?_c('div',{staticStyle:{"color":"green"}},[_vm._v("WON")]):_c('div',{staticStyle:{"color":"red"}},[_vm._v("LOST")]),_vm._v(" "),_c('div',{staticClass:"is-flex",staticStyle:{"flex-wrap":"wrap"}},_vm._l((match.playedMaps),function(playedMap){return _c('div',{key:playedMap.mapId,staticClass:"has-text-centered",staticStyle:{"margin":"0.5em"}},[_c('p',[_vm._v(_vm._s(playedMap.map.name))]),_vm._v(" "),_c('p',[_vm._v(_vm._s(playedMap.teamOneScore)+" - "+_vm._s(playedMap.teamTwoScore))])])}),0)]),_vm._v(" "),_c('div',{staticClass:"media-right"},[(match.playedMaps.length == 1)?_c('strong',{staticStyle:{"color":"white"}},[_vm._v("Bo1")]):_vm._e(),_vm._v(" "),(match.playedMaps.length > 1 && match.playedMaps.length < 3)?_c('strong',{staticStyle:{"color":"white"}},[_vm._v("Bo3")]):_vm._e()])])])])}),_vm._v(" "),_c('b-table',{staticStyle:{"color":"white"},attrs:{"mobile-cards":false,"data":_vm.matchHistoryFinal.slice(3),"striped":true,"hoverable":true,"paginated":true,"per-page":5,"selectable":""},on:{"select":_vm.selected},scopedSlots:_vm._u([{key:"default",fn:function(props){return [_c('b-table-column',{attrs:{"label":"Team","field":"name"}},[_c('img',{staticStyle:{"border-radius":"50%","width":"25px","height":"25px"},attrs:{"src":_vm.getTeamImg(props.row.opponent.img),"alt":"Opponent Image"}}),_vm._v(" "),_c('span',{staticStyle:{"vertical-align":"top"}},[_vm._v(_vm._s(props.row.opponent.name))])]),_vm._v(" "),_c('b-table-column',{attrs:{"label":"Outcome","field":"outcome"}},[(props.row.isWinner)?_c('div',{staticStyle:{"color":"green"}},[_vm._v("WON")]):_c('div',{staticStyle:{"color":"red"}},[_vm._v("LOST")])]),_vm._v(" "),_c('b-table-column',{attrs:{"label":"Maps","field":"maps"}},[_c('div',{staticStyle:{}},_vm._l((props.row.playedMaps),function(playedMap){return _c('div',{key:playedMap.mapId},[_c('p',[_vm._v(_vm._s(playedMap.map.name)+": "+_vm._s(playedMap.teamOneScore)+" - "+_vm._s(playedMap.teamTwoScore))])])}),0)])]}}],null,false,2241922267)})],2),_vm._v(" "),_c('b-tab-item',{attrs:{"label":"Players"}},[_c('p',{staticClass:"title is-4"},[_vm._v("Current Roster")]),_vm._v(" "),(_vm.team.activePlayers !== undefined && _vm.team.activePlayers.length > 0)?_c('div',{staticClass:"columns"},_vm._l((_vm.team.activePlayers),function(player){return _c('div',{key:player._id,staticClass:"column is-one-fifth"},[_c('nuxt-link',{attrs:{"to":("/players/" + (player._id))}},[_c('div',{staticClass:"card",style:({height:!_vm.$device.isMobile?'175px':'105px','cursor':'pointer'})},[_c('div',{style:({height:!_vm.$device.isMobile?'125px':'70px','width':'100%','display':'flex','overflow':'hidden','justify-content':'center'})},[_c('img',{staticStyle:{"max-height":"100%"},attrs:{"src":_vm.getPlayerImgUrl(player.img)}}),_vm._v(" "),_c('div',{staticStyle:{"position":"absolute","z-index":"1","top":"0px","right":"-8px"}},[(player.flag !== undefined)?_c('CountryFlag',{attrs:{"country":player.flag,"size":"medium"}}):_vm._e(),_vm._v(" "),(player.flag === undefined)?_c('CountryFlag',{staticStyle:{"visibility":"hidden","margin-right":"-20px"},attrs:{"country":"us","size":"small"}}):_vm._e()],1)]),_vm._v(" "),_c('footer',{staticClass:"card-footer"},[_c('div',{staticClass:"card-footer-item"},[_c('p',[_vm._v(_vm._s(player.name))])])])])])],1)}),0):_vm._e(),_vm._v(" "),(_vm.team.activePlayers === undefined || _vm.team.activePlayers.length === 0)?_c('p',{staticClass:"title is-5"},[_vm._v("Data Unavailable")]):_vm._e(),_vm._v(" "),_c('p',{staticClass:"title is-4"},[_vm._v("All Players")]),_vm._v(" "),(_vm.team.players !== undefined && _vm.team.players.length > 0)?_c('div',{staticClass:"columns is-multiline"},_vm._l((_vm.team.players),function(player){return _c('div',{key:player._id,staticClass:"column is-one-fifth"},[_c('nuxt-link',{attrs:{"to":("/players/" + (player._id))}},[_c('div',{staticClass:"card",style:({height:!_vm.$device.isMobile?'175px':'105px','cursor':'pointer'})},[_c('div',{style:({height:!_vm.$device.isMobile?'125px':'70px','width':'100%','display':'flex','overflow':'hidden','justify-content':'center'})},[_c('img',{staticStyle:{"max-height":"100%"},attrs:{"src":_vm.getPlayerImgUrl(player.img)}}),_vm._v(" "),_c('div',{staticStyle:{"position":"absolute","z-index":"1","top":"0px","right":"-8px"}},[(player.flag !== undefined)?_c('CountryFlag',{attrs:{"country":player.flag,"size":"medium"}}):_vm._e(),_vm._v(" "),(player.flag === undefined)?_c('CountryFlag',{staticStyle:{"visibility":"hidden","margin-right":"-20px"},attrs:{"country":"us","size":"small"}}):_vm._e()],1)]),_vm._v(" "),_c('footer',{staticClass:"card-footer"},[_c('div',{staticClass:"card-footer-item"},[_c('p',[_vm._v(_vm._s(player.name))])])])])])],1)}),0):_vm._e(),_vm._v(" "),(_vm.team.players === undefined || _vm.team.players.length === 0)?_c('p',{staticClass:"title is-5"},[_vm._v("Data Unavailable")]):_vm._e()])],1):_vm._e()],2)])])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/teams/_id.vue?vue&type=template&id=2e066a05&scoped=true&

// EXTERNAL MODULE: ./components/EventCard.vue + 4 modules
var EventCard = __webpack_require__(126);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "vue-country-flag"
var external_vue_country_flag_ = __webpack_require__(55);
var external_vue_country_flag_default = /*#__PURE__*/__webpack_require__.n(external_vue_country_flag_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/teams/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Characters",
  props: {
    type: String
  },

  data() {
    return {
      matchHistoryFinal: [],
      agentStatsFilter: 0,
      isPageReady: false,
      allAgentStats: undefined,
      agentStatsMapIndex: [{
        id: 0,
        map: 'All'
      }, {
        id: 1,
        map: 'Haven'
      }, {
        id: 2,
        map: 'Bind'
      }, {
        id: 3,
        map: 'Split'
      }, {
        id: 4,
        map: 'Ascent'
      }]
    };
  },

  asyncData({
    params
  }) {
    return external_axios_default.a.all([external_axios_default.a.get(undefined + `api/teams/${params.id}`), external_axios_default.a.get(undefined + "api/events?$sort[date.to]=-1", {
      params: {
        teamIds: params.id
      }
    }), external_axios_default.a.get(undefined + `api/gamemaps`), external_axios_default.a.get(undefined + `api/matches?active=false&$or[0][teamOneId][$in]=${params.id}&$or[1][teamTwoId][$in]=${params.id}&$sort[dateTime]=-1&populatemapsonly=true`)]).then(external_axios_default.a.spread(async (teamRaw, eventsRaw, gamemapsRaw, matchHistoryRaw) => {
      let team = teamRaw.data;
      console.log('team ', team);
      let teamEvents = eventsRaw.data.data;
      let mapHistory = gamemapsRaw.data.data;
      let matchHistory = matchHistoryRaw.data.data; // let mapIds = mapHistory.map(map => {
      //   return map._id
      // })
      // let mapRequests = [];
      // for (let i = 0; i < mapIds.length; i++) {
      //   let newRequest = axios({method: 'post', url: process.env.baseUrl + `api/db/teamstats`, data: { filters: `team_oids=>'{${params.id}}',gamemap_oids=>'{${mapIds[i]}}'` } })
      //   mapRequests.push(newRequest);
      // }
      // let data = await axios.all([
      //   // axios.post(process.env.baseUrl + `api/db/playerstats`, { filters: `team_oids=>'{${params.id}}'` }),
      //   axios.get(process.env.baseUrl +
      //       `api/matches?active=false&$or[0][teamOneId][$in]=${params.id}&$or[1][teamTwoId][$in]=${params.id}&$sort[dateTime]=-1&populatemapsonly=true`),
      //   // ...mapRequests
      // ]).then(axios.spread((matchHistoryRaw) => {
      //   // let mapStats = mapResponses.map(res => res.data[0]);
      //   // for(let i = 0; i < mapHistory.length; i++) {
      //   //   mapHistory[i].stats = mapStats[i];
      //   // }
      //   return { matchHistory: matchHistoryRaw.data.data }
      // }))

      return {
        team,
        teamEvents,
        mapHistory,
        matchHistory
      };
    }));
  },

  created() {
    // // pulling agent stats
    // let agentRequests = [];
    // let mapIds = this.mapHistory.map(map => {
    //   return map._id
    // })
    // agentRequests.push(axios({method: 'post', url: process.env.baseUrl + `api/db/agentstats`, data: { filters: `team_oids=>'{${this.$route.params.id}}'` } }))
    // for (let i = 0; i < mapIds.length; i++) {
    //   let newRequest = axios({method: 'post', url: process.env.baseUrl + `api/db/agentstats`, data: { filters: `team_oids=>'{${this.$route.params.id}}',gamemap_oids=>'{${mapIds[i]}}'` } })
    //   agentRequests.push(newRequest);
    // }
    // axios.all(agentRequests).then(axios.spread((...agentStatsResponses) => {
    //   this.allAgentStats = agentStatsResponses.map(res => res.data);
    // }))
    this.processMatchHistory(this.matchHistory);
    setTimeout(() => {
      this.isPageReady = true;
    }, 1000);
  },

  methods: {
    getAgent(img) {
      if (img) {
        return undefined + `api/uploads/agents/${img}.png`;
      } else {
        return undefined + `api/uploads/agents/unknown.png`;
      }
    },

    timeDiff(matchTime) {
      let now = moment(moment.now());
      let then = moment(matchTime);
      var ms = now.diff(then);
      var d = moment.duration(ms).humanize();
      return d;
    },

    getImgUrl() {
      return undefined + `api/uploads/teams/${this.team.img}`;
    },

    getTeamImg(img) {
      return undefined + `api/uploads/teams/${img}`;
    },

    getPlayerImgUrl(playerId) {
      return undefined + `api/uploads/players/${playerId}`;
    },

    getMapImg(name) {
      return undefined + `api/uploads/maps/${name}`;
    },

    navPlayer(id, slug) {
      this.$router.push({
        path: `/players/${id}/${slug}`
      });
    },

    navMatch(id, slug) {
      this.$router.push({
        path: `/matches/${id}/${slug}`
      });
    },

    processMatchHistory(matches) {
      for (let i = 0; i < matches.length; i++) {
        const data = {};
        data._id = matches[i]._id;
        data.slug = matches[i].slug;

        if (matches[i].teamOneId === this.$route.params.id) {
          data.opponent = matches[i].teamTwo;
          data.isWinner = this.getWinnerDetails(matches[i].maps).winner === 0;
          data.playedMaps = matches[i].maps;
        } else {
          data.opponent = matches[i].teamOne;
          data.isWinner = this.getWinnerDetails(matches[i].maps).winner === 1;
          data.playedMaps = matches[i].maps;
        }

        this.matchHistoryFinal.push(data);
      }
    },

    getWinnerDetails(maps) {
      const details = {};

      if (maps.length === 1) {
        details.teamOneScore = maps[0].teamOneScore;
        details.teamTwoScore = maps[0].teamTwoScore;

        if (parseInt(details.teamOneScore) > parseInt(details.teamTwoScore)) {
          details.winner = 0;
        } else if (parseInt(details.teamOneScore) < parseInt(details.teamTwoScore)) {
          details.winner = 1;
        } else {
          details.winner = -1;
        }
      } else {
        let oneCount = 0;
        let twoCount = 0;

        for (let i = 0; i < maps.length; i++) {
          if (parseInt(maps[i].teamOneScore) > parseInt(maps[i].teamTwoScore)) {
            oneCount += 1;
          }

          if (parseInt(maps[i].teamOneScore) < parseInt(maps[i].teamTwoScore)) {
            twoCount += 1;
          }
        }

        details.teamOneScore = oneCount;
        details.teamTwoScore = twoCount;

        if (oneCount > twoCount) {
          details.winner = 0;
        } else if (oneCount < twoCount) {
          details.winner = 1;
        } else {
          details.winner = -1;
        }
      }

      return details;
    },

    selected(item) {
      console.log(item);
      this.$router.push({
        path: `/matches/${item._id}/${item.slug}`
      });
    }

  },
  components: {
    EventCard: EventCard["a" /* default */],
    CountryFlag: external_vue_country_flag_default.a
  }
});
// CONCATENATED MODULE: ./pages/teams/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var teams_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/teams/_id.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(196)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  teams_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "2e066a05",
  "34d6eca0"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=_id.js.map