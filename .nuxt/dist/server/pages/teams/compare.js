exports.ids = [35];
exports.modules = {

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/teams/compare.vue?vue&type=template&id=4cba43ee&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"card"},[_vm._ssrNode("<div class=\"card-content\" style=\"margin-top:20px\">","</div>",[_vm._ssrNode("<div class=\"columns is-mobile\">","</div>",[_vm._ssrNode("<div class=\"column\">","</div>",[(_vm.teamStats[0])?_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.getTeamImg(_vm.teamStats[0].team_img)))+" style=\"border-radius: 50%; max-width: 100px; max-height: 100px\"> <div><p class=\"title is-3\">"+_vm._ssrEscape(_vm._s(_vm.teamStats ? _vm.teamStats[0].Team : 'Invalid team'))+"</p><p style=\"font-weight:bold;margin-top:-30px;color:#ff4653;font-size:14px;cursor:pointer\">X</p></div>")],2):_c('TeamSearch',{on:{"selected":function($event){return _vm.fetchTeam(0, $event)}}})],1),_vm._ssrNode(" <div class=\"column is-flex\" style=\"align-items: center; justify-content: center\"><p class=\"title is-1\">VS</p></div> "),_vm._ssrNode("<div class=\"column\">","</div>",[(_vm.teamStats[1])?_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<img"+(_vm._ssrAttr("src",_vm.getTeamImg(_vm.teamStats[1].team_img)))+" style=\"border-radius: 50%; max-width: 100px; max-height: 100px\"> <div><p class=\"title is-3\">"+_vm._ssrEscape(_vm._s(_vm.teamStats ? _vm.teamStats[1].Team : 'Invalid team'))+"</p><p style=\"font-weight:bold;margin-top:-30px;color:#ff4653;font-size:14px;cursor:pointer\">X</p></div>")],2):_c('TeamSearch',{on:{"selected":function($event){return _vm.fetchTeam(1, $event)}}})],1)],2),_vm._ssrNode(" <div class=\"columns is-mobile\">"+(_vm._ssrList((_vm.teamStats),function(team){return ("<div class=\"column\" style=\"background-color: #273142;\"><div><small>ValRating</small> <div><p class=\"title is-4\">"+_vm._ssrEscape(_vm._s(team["ValRating"].toFixed(2)))+"</p></div> <small>K/D</small> <div><p class=\"title is-4\">"+_vm._ssrEscape(_vm._s(team["K/D"].toFixed(2)))+"</p></div></div></div>")}))+"</div> <div class=\"columns is-mobile\">"+((_vm.favoriteComp1 !== undefined)?("<div class=\"column has-text-left\" style=\"background-color: #273142;\"><p>Favorite Comp</p> "+(_vm._ssrList((_vm.favoriteComp1.Composition),function(agent){return ("<img"+(_vm._ssrAttr("src",_vm.getAgent(agent.agent_img)))+" alt=\"Agent Img\" style=\"width: 30px; height: 30px; border-radius: 50%;\">")}))+" <p>Pickrate</p> <p class=\"title is-3\">"+_vm._ssrEscape(_vm._s((_vm.favoriteComp1.Pickrate * 100).toFixed(2))+"%")+"</p></div>"):"<!---->")+" "+((_vm.favoriteComp1 !== undefined)?("<div class=\"column is-flex\" style=\"background-color: #273142;align-items: center; justify-content: center; flex-direction: column\"><p>Winrate</p> <p class=\"title is-3\">"+_vm._ssrEscape(_vm._s((_vm.favoriteComp1['Win %'] * 100).toFixed(1))+"%")+"</p></div>"):"<!---->")+" "+((_vm.favoriteComp2 !== undefined)?("<div class=\"column is-flex\" style=\"background-color: #273142;align-items: center; justify-content: center; flex-direction: column\"><p>Winrate</p> <p class=\"title is-3\">"+_vm._ssrEscape(_vm._s((_vm.favoriteComp2['Win %'] * 100).toFixed(1))+"%")+"</p></div>"):"<!---->")+" "+((_vm.favoriteComp2 !== undefined)?("<div class=\"column has-text-right\" style=\"background-color: #273142;\"><p>Favorite Comp</p> "+(_vm._ssrList((_vm.favoriteComp2.Composition),function(agent){return ("<img"+(_vm._ssrAttr("src",_vm.getAgent(agent.agent_img)))+" style=\"width: 30px; height: 30px; border-radius: 50%;\">")}))+" <p>Pickrate</p> <p class=\"title is-3\">"+_vm._ssrEscape(_vm._s((_vm.favoriteComp2.Pickrate * 100).toFixed(2))+"%")+"</p></div>"):"<!---->")+"</div> "),_vm._l((_vm.mapStats),function(map){return _vm._ssrNode("<div"+(_vm._ssrStyle({"min-height":"150px","width":"100%","padding-left":"0.5em","padding-right":"0.5em"},{ 'background': ("linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url(" + (_vm.getMapImg(map.image)) + ") no-repeat center center"), 'background-size': 'cover' }, null))+">","</div>",[_vm._ssrNode("<div class=\"columns is-mobile\" style=\"max-height: 100%; margin-top: 0.25em; margin-bottom: 0.25em\"><div class=\"column has-text-left\">"+((map.team1)?("<div><div class=\"columns\"><div class=\"column\"><p>ValRating</p> <p class=\"title is-5\">"+_vm._ssrEscape(_vm._s(map.team1['ValRating'].toFixed(2)))+"</p> <p>Pickrate</p> <p class=\"title is-5\" style=\"margin: 0\">"+_vm._ssrEscape(_vm._s((map.team1['Pickrate'] * 100).toFixed(2))+"%")+"</p> <small>"+_vm._ssrEscape(_vm._s(map.team1['Maps Played'])+" times played")+"</small></div> <div class=\"column is-flex\" style=\"align-items: center; justify-content: center; flex-direction: column\"><p>Winrate</p> <p class=\"title is-3\">"+_vm._ssrEscape(_vm._s((map.team1['Win %'] * 100).toFixed(1))+"%")+"</p></div></div></div>"):("<div><p class=\"title is-5\">No data</p></div>"))+"</div> <div class=\"column is-flex\" style=\"align-items: center; justify-content: center; flex-direction: column\"><p class=\"title is-4\">"+_vm._ssrEscape(_vm._s(map.name))+"</p></div> <div class=\"column has-text-right\">"+((map.team2)?("<div><div class=\"columns\"><div class=\"column is-flex\" style=\"align-items: center; justify-content: center; flex-direction: column\"><p>Winrate</p> <p class=\"title is-3\">"+_vm._ssrEscape(_vm._s((map.team2['Win %'] * 100).toFixed(1))+"%")+"</p></div> <div class=\"column\"><p>ValRating</p> <p class=\"title is-5\">"+_vm._ssrEscape(_vm._s(map.team2['ValRating'].toFixed(2)))+"</p> <p>Pickrate</p> <p class=\"title is-5\" style=\"margin: 0\">"+_vm._ssrEscape(_vm._s((map.team2['Pickrate'] * 100).toFixed(2))+"%")+"</p> <small style=\"font-size: 10pt\">"+_vm._ssrEscape(_vm._s(map.team2['Maps Played'])+" times played")+"</small></div></div></div>"):("<div><p class=\"title is-5\">No data</p></div>"))+"</div></div> "),_c('b-collapse',{attrs:{"open":false,"position":"is-bottom","aria-id":"contentIdForA11y1"},scopedSlots:_vm._u([{key:"trigger",fn:function(props){return _c('a',{attrs:{"aria-controls":"contentIdForA11y1"}},[_c('b-icon',{staticStyle:{"vertical-align":"bottom"},attrs:{"icon":!props.open ? 'menu-down' : 'menu-up'}}),_vm._v("\n                  "+_vm._s(!props.open ? 'View Details' : 'Hide Details')+"\n              ")],1)}}],null,true)},[_vm._v(" "),_c('div',{staticClass:"columns"},[(map.team1 !== undefined)?_c('div',{staticClass:"column"},[_c('p',[_vm._v("Best Player")]),_vm._v(" "),_c('nuxt-link',{attrs:{"to":("/players/" + (map.team1.bestPlayer.player_oid))}},[_c('img',{staticStyle:{"height":"100px","width":"100px","border-radius":"50%"},attrs:{"src":_vm.getPlayerImgUrl(map.team1.bestPlayer.player_img)}}),_vm._v(" "),_c('p',{staticClass:"title is-4"},[_vm._v(_vm._s(map.team1.bestPlayer.Player))])])],1):_vm._e(),_vm._v(" "),(map.team1 !== undefined)?_c('div',{staticClass:"column is-flex",staticStyle:{"align-items":"center","justify-content":"center","flex-direction":"column"}},[_c('p',[_vm._v("ValRating")]),_vm._v(" "),_c('p',{staticClass:"title is-4"},[_vm._v(_vm._s(map.team1.bestPlayer.ValRating.toFixed(2)))])]):_vm._e(),_vm._v(" "),(map.team2 !== undefined)?_c('div',{staticClass:"column is-flex",staticStyle:{"align-items":"center","justify-content":"center","flex-direction":"column"}},[_c('p',[_vm._v("ValRating")]),_vm._v(" "),_c('p',{staticClass:"title is-4"},[_vm._v(_vm._s(map.team2.bestPlayer.ValRating.toFixed(2)))])]):_vm._e(),_vm._v(" "),(map.team2 !== undefined)?_c('div',{staticClass:"column"},[_c('p',[_vm._v("Best Player")]),_vm._v(" "),_c('nuxt-link',{attrs:{"to":("/players/" + (map.team2.bestPlayer.player_oid))}},[_c('img',{staticStyle:{"height":"100px","width":"100px","border-radius":"50%"},attrs:{"src":_vm.getPlayerImgUrl(map.team2.bestPlayer.player_img)}}),_vm._v(" "),_c('p',{staticClass:"title is-4"},[_vm._v(_vm._s(map.team2.bestPlayer.Player))])])],1):_vm._e()])])],2)})],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/teams/compare.vue?vue&type=template&id=4cba43ee&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Teams/Compare/TeamSearch.vue?vue&type=template&id=cb9a17c0&
var TeamSearchvue_type_template_id_cb9a17c0_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-field',[_c('b-autocomplete',{staticStyle:{"width":"230px","border-bottom-color":"#171e29","border-bottom-height":"1px"},attrs:{"max-height":"400px","rounded":"","icon":"magnify","data":_vm.searchData,"placeholder":"Search...","field":"name","loading":_vm.fetching},on:{"typing":function (name){ return _vm.getTeamSearchResults(name); },"select":function (option) { return _vm.selectTeam(option); }},nativeOn:{"click":function($event){return _vm.onFocus($event)}},scopedSlots:_vm._u([{key:"default",fn:function(props){return [_c('div',{staticStyle:{"width":"100%","height":"50px"}},[_c('img',{staticStyle:{"vertical-align":"middle","width":"40px"},attrs:{"src":_vm.getTeamImgUrl(props.option.img)}}),_vm._v(" "),_c('span',{staticStyle:{"margin-left":"80px","color":"white"}},[_vm._v(_vm._s(props.option.name))])])]}}]),model:{value:(_vm.typingData),callback:function ($$v) {_vm.typingData=$$v},expression:"typingData"}},[_vm._v(" "),_c('template',{slot:"empty"},[_vm._v("No results found")])],2)],1)}
var TeamSearchvue_type_template_id_cb9a17c0_staticRenderFns = []


// CONCATENATED MODULE: ./components/Teams/Compare/TeamSearch.vue?vue&type=template&id=cb9a17c0&

// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__(5);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Teams/Compare/TeamSearch.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var TeamSearchvue_type_script_lang_js_ = ({
  data() {
    return {
      searchData: [],
      fetching: false,
      typingData: ""
    };
  },

  methods: {
    getTeamSearchResults: debounce_default()(function (name) {
      if (!name.length) {
        this.searchData = [];
        return;
      }

      this.fetchingPlayer = true;
      this.$axios(undefined + `api/teams?name[$search]=${name}`, {
        method: "get",
        headers: {
          "content-type": "application/json"
        }
      }).then(function (response) {
        return response.data;
      }).then(response => {
        this.searchData = [];
        response.data.forEach(item => this.searchData.push(item));
      }).catch(error => {
        this.searchData = [];
        throw error;
      }).finally(() => {
        this.fetching = false;
      });
    }, 500),

    onFocus(e) {
      e.stopPropagation();
    },

    getTeamImgUrl(img) {
      return undefined + `api/uploads/teams/${img}`;
    },

    selectTeam(option) {
      this.$emit('selected', option._id);
    }

  }
});
// CONCATENATED MODULE: ./components/Teams/Compare/TeamSearch.vue?vue&type=script&lang=js&
 /* harmony default export */ var Compare_TeamSearchvue_type_script_lang_js_ = (TeamSearchvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/Teams/Compare/TeamSearch.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  Compare_TeamSearchvue_type_script_lang_js_,
  TeamSearchvue_type_template_id_cb9a17c0_render,
  TeamSearchvue_type_template_id_cb9a17c0_staticRenderFns,
  false,
  injectStyles,
  null,
  "0e75afa8"
  
)

/* harmony default export */ var TeamSearch = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/HeadToHeadCard.vue?vue&type=template&id=4576ed8b&
var HeadToHeadCardvue_type_template_id_4576ed8b_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-collapse',{staticClass:"card",attrs:{"animation":"slide","aria-id":"contentIdForA11y3"},scopedSlots:_vm._u([{key:"trigger",fn:function(props){return _c('div',{staticClass:"card-header",attrs:{"role":"button","aria-controls":"contentIdForA11y3"}},[_c('div',{staticClass:"is-flex",staticStyle:{"flex-direction":"row"}},[_c('a',{staticClass:"card-header-icon"},[_c('b-icon',{attrs:{"icon":props.open ? 'menu-down' : 'menu-up'}})],1)])])}}])},[_vm._v(" "),_c('div',{staticClass:"card-content"},[_c('div',{staticClass:"content"},[_vm._v("\n              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.\n              "),_c('a',[_vm._v("#buefy")]),_vm._v(".\n          ")])]),_vm._v(" "),_c('footer',{staticClass:"card-footer"},[_c('a',{staticClass:"card-footer-item"},[_vm._v("Save")]),_vm._v(" "),_c('a',{staticClass:"card-footer-item"},[_vm._v("Edit")]),_vm._v(" "),_c('a',{staticClass:"card-footer-item"},[_vm._v("Delete")])])])}
var HeadToHeadCardvue_type_template_id_4576ed8b_staticRenderFns = []


// CONCATENATED MODULE: ./components/HeadToHeadCard.vue?vue&type=template&id=4576ed8b&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/HeadToHeadCard.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var HeadToHeadCardvue_type_script_lang_js_ = ({
  props: ['headToHeadData']
});
// CONCATENATED MODULE: ./components/HeadToHeadCard.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_HeadToHeadCardvue_type_script_lang_js_ = (HeadToHeadCardvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/HeadToHeadCard.vue



function HeadToHeadCard_injectStyles (context) {
  
  
}

/* normalize component */

var HeadToHeadCard_component = Object(componentNormalizer["a" /* default */])(
  components_HeadToHeadCardvue_type_script_lang_js_,
  HeadToHeadCardvue_type_template_id_4576ed8b_render,
  HeadToHeadCardvue_type_template_id_4576ed8b_staticRenderFns,
  false,
  HeadToHeadCard_injectStyles,
  null,
  "deb15216"
  
)

/* harmony default export */ var HeadToHeadCard = (HeadToHeadCard_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/teams/compare.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ var comparevue_type_script_lang_js_ = ({
  watchQuery: true,

  // asyncData( route ) {
  //     return axios.all([
  //         axios.post(process.env.baseUrl + `api/db/teamstats`,  { filters: `team_oids=>'{${route.query.team1},${route.query.team2}}'` }),
  //         axios.post(process.env.baseUrl + `api/db/mapstats`,  { filters: `team_oids=>'{${route.query.team1}}'` }),
  //         axios.post(process.env.baseUrl + `api/db/mapstats`,  { filters: `team_oids=>'{${route.query.team2}}'` }),
  //         axios.get(process.env.baseUrl + `api/gamemaps`),
  //         axios.get(
  //           // only matches of team1 vs team2 (or team2 vs team1) - head to head - with dateTime < match.dateTime
  //           process.env.baseUrl +
  //             `api/matches?active=false&$or[0][$and][0][teamOneId]=${route.query.team1}&$or[0][$and][1][teamTwoId]=${route.query.team2}&$or[0][$and][2][dateTime][$lt]=${new Date().toString()}&$or[1][$and][0][teamOneId]=${route.query.team2}&$or[1][$and][1][teamTwoId]=${route.query.team1}&$or[1][$and][2][dateTime][$lt]=${new Date().toString()}&populatemapsonly=true`
  //         ),
  //         axios.post(process.env.baseUrl + `api/db/compostats`,  { filters: `team_oids=>'{${route.query.team1}}'` }),
  //         axios.post(process.env.baseUrl + `api/db/compostats`,  { filters: `team_oids=>'{${route.query.team2}}'` }),
  //     ]).then(axios.spread(async (teamStatsRaw, mapStats1Raw, mapStats2Raw, gamemapsRaw, headToHeadRaw, compStats1Raw, compStats2Raw) => {
  //         let gamemaps = gamemapsRaw.data.data
  //         let mapStats = []
  //         let mapStats1 = mapStats1Raw.data
  //         let mapStats2 = mapStats2Raw.data
  //         let favoriteComp1 = undefined;
  //         let favoriteComp2 = undefined;
  //         compStats1Raw.data.forEach(comp => {
  //             if(favoriteComp1 === undefined) {
  //                 favoriteComp1 = comp;
  //             } else {
  //                 if (comp.Pickrate > favoriteComp1.Pickrate) {
  //                     favoriteComp1 = comp;
  //                 }
  //             }
  //         });
  //         compStats2Raw.data.forEach(comp => {
  //             if(favoriteComp2 === undefined) {
  //                 favoriteComp2 = comp;
  //             } else {
  //                 if (comp.Pickrate > favoriteComp2.Pickrate) {
  //                     favoriteComp2 = comp;
  //                 }
  //             }
  //         });
  //         let mapIds = gamemaps.map(map => {
  //             return map._id
  //         })
  //         let mapRequests = [];
  //         for (let i = 0; i < mapIds.length; i++) {
  //             let newRequest1 = axios({method: 'post', url: process.env.baseUrl + `api/db/playerstats`, data: { filters: `team_oids=>'{${route.query.team1}}',gamemap_oids=>'{${mapIds[i]}}'` } })
  //             mapRequests.push(newRequest1);
  //             let newRequest2 = axios({method: 'post', url: process.env.baseUrl + `api/db/playerstats`, data: { filters: `team_oids=>'{${route.query.team2}}',gamemap_oids=>'{${mapIds[i]}}'` } })
  //             mapRequests.push(newRequest2);
  //         }
  //         let data = await axios.all([...mapRequests]).then(axios.spread((...mapResponses) => {
  //             let mapsData = []
  //             for(let i = 0; i < mapResponses.length - 1; i += 2) {
  //                 mapsData.push({team1: mapResponses[i].data, team2: mapResponses[i + 1].data})
  //             }
  //             return mapsData;
  //         }))
  //         gamemaps.forEach((map, index) => {
  //             let team1BestPlayer = undefined;
  //             let team2BestPlayer = undefined;
  //             mapStats.push({
  //                 name: map.name,
  //                 image: map.img,
  //                 team1: mapStats1.findIndex(element => element.Map == map.name) != -1 ? mapStats1[mapStats1.findIndex(element => element.Map == map.name)] : undefined,
  //                 team2: mapStats2.findIndex(element => element.Map == map.name) != -1 ? mapStats2[mapStats2.findIndex(element => element.Map == map.name)] : undefined
  //             })
  //             if(mapStats[index].team1 !== undefined) {
  //                 data[index].team1.forEach(player => {
  //                     if(team1BestPlayer === undefined) {
  //                         team1BestPlayer = player;
  //                     } else {
  //                         if (player.ValRating > team1BestPlayer.ValRating) {
  //                             team1BestPlayer = player;
  //                         }
  //                     }
  //                 })
  //                 mapStats[index].team1.bestPlayer = team1BestPlayer;
  //             }
  //             if(mapStats[index].team2 !== undefined) {
  //                 data[index].team2.forEach(player => {
  //                     if(team2BestPlayer === undefined) {
  //                         team2BestPlayer = player;
  //                     } else {
  //                         if (player.ValRating > team2BestPlayer.ValRating) {
  //                             team2BestPlayer = player;
  //                         }
  //                     }
  //                 })
  //                 mapStats[index].team2.bestPlayer = team2BestPlayer;
  //             }
  //         })
  //         return { teamStats: teamStatsRaw.data.reverse(), mapStats, headToHeadData: headToHeadRaw.data.data, compStats1: compStats1Raw.data, compStats2: compStats2Raw.data, favoriteComp1, favoriteComp2 }
  //     }))
  //},
  created() {},

  methods: {
    getTeamImg(img) {
      return undefined + `api/uploads/teams/${img}`;
    },

    removeTeamOne() {
      if (this.teamStats.length > 1) {
        this.$router.push({
          query: { ...this.$route.query,
            team1: this.teamStats[1].team_oid,
            team2: undefined
          }
        });
        this.teamStats[0] = [this.teamStats[1]];
      } else {
        this.$router.push({
          query: { ...this.$route.query,
            team1: undefined
          }
        });
        this.teamStats = [];
      }
    },

    removeTeamTwo() {
      this.$router.push({
        query: { ...this.$route.query,
          team2: undefined
        }
      });
      this.teamStats = [this.teamStats[0]];
    },

    fetchTeam(index, option) {
      if (index === 0) {
        this.$router.push({
          query: { ...this.$route.query,
            team1: option
          }
        });
      } else {
        this.$router.push({
          query: { ...this.$route.query,
            team2: option
          }
        });
      }
    },

    getMapImg(name) {
      return undefined + `api/uploads/maps/${name}`;
    },

    getAgent(img) {
      return undefined + `api/uploads/agents/${img}`;
    },

    getPlayerImgUrl(playerId) {
      return undefined + `api/uploads/players/${playerId}`;
    }

  },
  components: {
    TeamSearch: TeamSearch,
    HeadToHeadCard: HeadToHeadCard
  }
});
// CONCATENATED MODULE: ./pages/teams/compare.vue?vue&type=script&lang=js&
 /* harmony default export */ var teams_comparevue_type_script_lang_js_ = (comparevue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/teams/compare.vue



function compare_injectStyles (context) {
  
  
}

/* normalize component */

var compare_component = Object(componentNormalizer["a" /* default */])(
  teams_comparevue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  compare_injectStyles,
  null,
  "dfb4596a"
  
)

/* harmony default export */ var compare = __webpack_exports__["default"] = (compare_component.exports);

/***/ })

};;
//# sourceMappingURL=compare.js.map