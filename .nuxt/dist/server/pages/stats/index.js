exports.ids = [33];
exports.modules = {

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(179);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("6261e045", content, true, context)
};

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fc6b6606_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(107);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fc6b6606_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fc6b6606_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fc6b6606_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fc6b6606_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_fc6b6606_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 179:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".type-button[data-v-fc6b6606]{width:150px}.button[data-v-fc6b6606]{margin-top:20px;margin-bottom:20px}.table thead[data-v-fc6b6606]{display:none}.is-sticky-header[data-v-fc6b6606]{background-color:#2b384c!important}.is-sticky-header-dark[data-v-fc6b6606]{background-color:#222c3c!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/stats/index.vue?vue&type=template&id=fc6b6606&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_vm._ssrNode("<h1 style=\"font-size:50px;margin-bottom:20px\" data-v-fc6b6606>\n    Professional Valorant Stats\n  </h1> "),_vm._ssrNode("<div class=\"columns is-centered\" data-v-fc6b6606>","</div>",[_vm._ssrNode("<div class=\"column is-narrow\" data-v-fc6b6606>","</div>",[_vm._ssrNode("<div"+(_vm._ssrStyle(null,{ width: !_vm.$device.isMobile ? '800px' : '' }, null))+" data-v-fc6b6606>","</div>",[_vm._ssrNode("<div class=\"card\" data-v-fc6b6606>","</div>",[_vm._ssrNode("<div class=\"card-content\" style=\"padding-bottom:0px\" data-v-fc6b6606>","</div>",[_c('b-collapse',{attrs:{"aria-id":"filtersCollapse","animation":"slide","open":false},scopedSlots:_vm._u([{key:"trigger",fn:function(props){return _c('div',{attrs:{"role":"button","aria-controls":"contentIdForA11y2"}},[_c('p',{staticClass:"title",staticStyle:{"display":"inline-block"}},[_vm._v("\n                  Filters"),_c('a',[_c('b-icon',{attrs:{"icon":props.open ? 'menu-down' : 'menu-up'}})],1)]),_vm._v(" "),_c('br')])}}])},[_vm._v(" "),_c('div',{staticClass:"columns"},[_c('div',{staticClass:"column",staticStyle:{"margin-left":"1em","margin-right":"1em"}},[_c('b-dropdown',{attrs:{"expanded":true,"aria-role":"list","multiple":""},model:{value:(_vm.eventRegionFilter),callback:function ($$v) {_vm.eventRegionFilter=$$v},expression:"eventRegionFilter"}},[_c('button',{staticClass:"input",attrs:{"slot":"trigger","type":"button"},slot:"trigger"},[[_c('span',[_vm._v("Event Region(s):\n                          "+_vm._s(_vm.eventRegionFilter.length))])],_vm._v(" "),_c('b-icon',{attrs:{"icon":"menu-down"}})],2),_vm._v(" "),_vm._l((_vm.eventRegionList),function(data,index){return _c('b-dropdown-item',{key:index,attrs:{"value":data.id,"aria-role":"listitem"}},[_c('div',{staticClass:"media"},[_c('div',{staticClass:"media-content"},[_c('h3',[_vm._v(_vm._s(data.region))])])])])})],2)],1),_vm._v(" "),_c('div',{staticClass:"column",staticStyle:{"margin-left":"1em","margin-right":"1em"}},[_c('b-autocomplete',{attrs:{"data":_vm.eventSearch,"placeholder":"Event","field":"name"},on:{"select":function (option) { return (_vm.eventFilter = option); }},model:{value:(_vm.eventFilterSearch),callback:function ($$v) {_vm.eventFilterSearch=$$v},expression:"eventFilterSearch"}},[_c('template',{slot:"empty"},[_vm._v("No results found")])],2)],1),_vm._v(" "),_c('div',{staticClass:"column",staticStyle:{"margin-left":"1em","margin-right":"1em"}},[_c('b-dropdown',{attrs:{"expanded":true,"aria-role":"list","multiple":""},model:{value:(_vm.substageFilter),callback:function ($$v) {_vm.substageFilter=$$v},expression:"substageFilter"}},[_c('button',{staticClass:"input",attrs:{"slot":"trigger","type":"button"},slot:"trigger"},[[_c('span',[_vm._v("Selected Stage(s):\n                          "+_vm._s(_vm.substageFilter.length))])],_vm._v(" "),_c('b-icon',{attrs:{"icon":"menu-down"}})],2),_vm._v(" "),_vm._l((_vm.substageTypeList),function(data,index){return _c('b-dropdown-item',{key:index,attrs:{"value":data.id,"aria-role":"listitem"}},[_c('div',{staticClass:"media"},[_c('div',{staticClass:"media-content"},[_c('h3',[_vm._v(_vm._s(data.substage))])])])])})],2)],1)]),_vm._v(" "),_c('div',{staticClass:"columns"},[_c('div',{staticClass:"column",staticStyle:{"margin-left":"1em","margin-right":"1em"}},[_c('b-dropdown',{attrs:{"expanded":true,"aria-role":"list","multiple":""},model:{value:(_vm.teamRegionFilter),callback:function ($$v) {_vm.teamRegionFilter=$$v},expression:"teamRegionFilter"}},[_c('button',{staticClass:"input",attrs:{"slot":"trigger","type":"button"},slot:"trigger"},[[_c('span',[_vm._v("Team Region(s): "+_vm._s(_vm.teamRegionFilter.length))])],_vm._v(" "),_c('b-icon',{attrs:{"icon":"menu-down"}})],2),_vm._v(" "),_vm._l((_vm.teamRegionList),function(data,index){return _c('b-dropdown-item',{key:index,attrs:{"value":data.id,"aria-role":"listitem"}},[_c('div',{staticClass:"media"},[_c('div',{staticClass:"media-content"},[_c('h3',[_vm._v(_vm._s(data.region))])])])])})],2)],1),_vm._v(" "),_c('div',{staticClass:"column",staticStyle:{"margin-left":"1em","margin-right":"1em"}},[_c('b-autocomplete',{attrs:{"data":_vm.teamSearch,"placeholder":"Team","field":"team"},on:{"select":function (option) { return (_vm.teamFilter = option); }},model:{value:(_vm.teamFilterSearch),callback:function ($$v) {_vm.teamFilterSearch=$$v},expression:"teamFilterSearch"}},[_c('template',{slot:"empty"},[_vm._v("No results found")])],2)],1),_vm._v(" "),_c('div',{staticClass:"column",staticStyle:{"margin-left":"1em","margin-right":"1em"}},[_c('b-autocomplete',{attrs:{"data":_vm.opponentSearch,"placeholder":"Opponent","field":"team"},on:{"select":function (option) { return (_vm.opponentFilter = option); }},model:{value:(_vm.opponentFilterSearch),callback:function ($$v) {_vm.opponentFilterSearch=$$v},expression:"opponentFilterSearch"}},[_c('template',{slot:"empty"},[_vm._v("No results found")])],2)],1)]),_vm._v(" "),_c('div',{staticClass:"columns"},[(this.tabs != 1)?_c('div',{staticClass:"column",staticStyle:{"margin-left":"1em","margin-right":"1em"}},[_c('b-dropdown',{attrs:{"expanded":true,"aria-role":"list","multiple":""},model:{value:(_vm.playerRegionFilter),callback:function ($$v) {_vm.playerRegionFilter=$$v},expression:"playerRegionFilter"}},[_c('button',{staticClass:"input",attrs:{"slot":"trigger","type":"button"},slot:"trigger"},[[_c('span',[_vm._v("Player Region(s):\n                          "+_vm._s(_vm.playerRegionFilter.length))])],_vm._v(" "),_c('b-icon',{attrs:{"icon":"menu-down"}})],2),_vm._v(" "),_vm._l((_vm.playerRegionList),function(data,index){return _c('b-dropdown-item',{key:index,attrs:{"value":data.id,"aria-role":"listitem"}},[_c('div',{staticClass:"media"},[_c('div',{staticClass:"media-content"},[_c('h3',[_vm._v(_vm._s(data.region))])])])])})],2)],1):_vm._e(),_vm._v(" "),_c('div',{staticClass:"column",staticStyle:{"margin-left":"1em","margin-right":"1em"}},[_c('b-autocomplete',{attrs:{"data":_vm.playerSearch,"placeholder":"Player","field":"player"},on:{"select":function (option) { return (_vm.playerFilter = option); }},model:{value:(_vm.playerFilterSearch),callback:function ($$v) {_vm.playerFilterSearch=$$v},expression:"playerFilterSearch"}},[_c('template',{slot:"empty"},[_vm._v("No results found")])],2)],1),_vm._v(" "),_c('div',{staticClass:"column",staticStyle:{"margin-left":"1em","margin-right":"1em"}},[(this.tabs != 1)?_c('b-autocomplete',{attrs:{"data":_vm.playerCountrySearch,"placeholder":"Player Country","field":"country"},on:{"select":function (option) { return (_vm.playerCountryFilter = option); }},scopedSlots:_vm._u([{key:"default",fn:function(props){return [_c('div',{staticClass:"columns",staticStyle:{"text-align":"left","margin-top":"-7px"}},[_c('div',{staticClass:"column is-one-fifth"},[(props.option.country_code !== undefined)?_c('country-flag',{staticStyle:{"vertical-align":"-13.5px","margin-left":"-20px","margin-right":"-15px"},attrs:{"country":props.option.country_code,"size":"normal"}}):_vm._e(),_vm._v(" "),(props.option.country_code === undefined)?_c('country-flag',{staticStyle:{"vertical-align":"-13.5px","margin-left":"-20px","margin-right":"-15px"},attrs:{"country":"un","size":"normal"}}):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"column"},[_c('h3',[_vm._v(_vm._s(props.option.country))])])])]}}],null,false,4064061798),model:{value:(_vm.playerCountryFilterSearch),callback:function ($$v) {_vm.playerCountryFilterSearch=$$v},expression:"playerCountryFilterSearch"}},[_vm._v(" "),_c('template',{slot:"empty"},[_vm._v("No results found")])],2):_vm._e()],1),_vm._v(" "),(this.tabs == 1)?_c('div',{staticClass:"column"}):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"columns"},[_c('div',{staticClass:"column",staticStyle:{"margin-left":"1em","margin-right":"1em"}},[_c('b-dropdown',{attrs:{"expanded":true,"aria-role":"list","multiple":""},model:{value:(_vm.mapFilter),callback:function ($$v) {_vm.mapFilter=$$v},expression:"mapFilter"}},[_c('button',{staticClass:"input",attrs:{"slot":"trigger","type":"button"},slot:"trigger"},[[_c('span',[_vm._v("Selected Map(s): "+_vm._s(_vm.mapFilter.length))])],_vm._v(" "),_c('b-icon',{attrs:{"icon":"menu-down"}})],2),_vm._v(" "),_vm._l((_vm.mapsList),function(data,index){return _c('b-dropdown-item',{key:index,attrs:{"value":data._id,"aria-role":"listitem"}},[_c('div',{staticClass:"media"},[_c('img',{staticClass:"media-left",staticStyle:{"width":"4em"},attrs:{"src":_vm.getMap(data.img)}}),_vm._v(" "),_c('div',{staticClass:"media-content"},[_c('h3',[_vm._v(_vm._s(data.name))])])])])})],2)],1),_vm._v(" "),_c('div',{staticClass:"column",staticStyle:{"margin-left":"1em","margin-right":"1em"}},[(this.tabs != 2)?_c('b-dropdown',{attrs:{"expanded":true,"aria-role":"list","multiple":""},model:{value:(_vm.agentFilter),callback:function ($$v) {_vm.agentFilter=$$v},expression:"agentFilter"}},[_c('button',{staticClass:"input",attrs:{"slot":"trigger","type":"button"},slot:"trigger"},[[_c('span',[_vm._v("Selected Agent(s): "+_vm._s(_vm.agentFilter.length))])],_vm._v(" "),_c('b-icon',{attrs:{"icon":"menu-down"}})],2),_vm._v(" "),_vm._l((_vm.agentsList),function(data,index){return _c('b-dropdown-item',{key:index,attrs:{"value":data.oid,"aria-role":"listitem"}},[_c('div',{staticClass:"media"},[_c('img',{staticClass:"media-left",staticStyle:{"width":"2em","border-radius":"50%"},attrs:{"src":_vm.getAgent(data.agent)}}),_vm._v(" "),_c('div',{staticClass:"media-content"},[_c('h3',[_vm._v(_vm._s(data.agent))])])])])})],2):_vm._e()],1),_vm._v(" "),_c('div',{staticClass:"column",staticStyle:{"margin-left":"1em","margin-right":"1em"}})]),_vm._v(" "),_c('b-button',{on:{"click":_vm.getStats}},[_vm._v("Search")])],1)],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"card\" style=\"margin-top:20px\" data-v-fc6b6606>","</div>",[_vm._ssrNode("<div class=\"card-content\" data-v-fc6b6606>","</div>",[_c('b-tabs',{staticClass:"tabsMyStats",staticStyle:{"margin-top":"20px"},attrs:{"type":"is-boxed","position":"is-centered"},on:{"change":function($event){return _vm.changeTab()}},model:{value:(_vm.tabs),callback:function ($$v) {_vm.tabs=$$v},expression:"tabs"}},[_c('b-tab-item',{attrs:{"label":"Players"}},[_c('div',{staticClass:"has-text-right"},[_c('b-dropdown',{attrs:{"aria-role":"list","multiple":"","scrollable":true,"max-height":"350px"},model:{value:(_vm.selectedColumnsPlayers),callback:function ($$v) {_vm.selectedColumnsPlayers=$$v},expression:"selectedColumnsPlayers"}},[_c('button',{staticClass:"input",attrs:{"slot":"trigger","type":"button"},slot:"trigger"},[[_c('span',[_vm._v("Select Stats")])],_vm._v(" "),_c('b-icon',{attrs:{"icon":"menu-down"}})],2),_vm._v(" "),_vm._l((_vm.statsListPlayer),function(data,index){return _c('b-dropdown-item',{key:index,attrs:{"value":data,"aria-role":"listitem","selected":true}},[_c('div',{staticClass:"media"},[_c('div',{staticClass:"media-content"},[_c('h3',[_vm._v(_vm._s(data.name))])])])])})],2),_vm._v(" "),_c('b-button',{staticStyle:{"margin":"0"}},[_c('download-csv',{attrs:{"data":_vm.cleanJSON(),"name":"PlayerStats.csv"}},[_vm._v("\n                      Export to CSV\n                    ")])],1)],1),_vm._v(" "),_c('b-table',{staticStyle:{"color":"white","min-height":"650px"},attrs:{"paginated":true,"per-page":10,"mobile-cards":false,"data":_vm.playersData,"default-sort":"ValRating","default-sort-direction":"desc","striped":true,"hoverable":true},scopedSlots:_vm._u([{key:"default",fn:function(props){return [_c('b-table-column',{attrs:{"sortable":"","label":"#","field":"rankNum"}},[_vm._v(_vm._s(props.row.rankNum))]),_vm._v(" "),_c('b-table-column',{class:props.index % 2 != 0
                          ? 'is-sticky-header'
                          : 'is-sticky-header-dark',attrs:{"searchable":"","label":"Name","field":"Player","sticky":true}},[_c('div',{staticStyle:{"text-align":"left","margin-top":"-7px","width":"130px"}},[(props.row.country_code !== undefined)?_c('country-flag',{staticStyle:{"vertical-align":"-13.5px","margin-left":"-20px","margin-right":"-15px"},attrs:{"country":props.row.country_code,"size":"normal"}}):_vm._e(),_vm._v(" "),(props.row.country_code === undefined)?_c('country-flag',{staticStyle:{"vertical-align":"-13.5px","margin-left":"-20px","margin-right":"-15px"},attrs:{"country":"un","size":"normal"}}):_vm._e(),_vm._v(" "),_c('nuxt-link',{staticStyle:{"padding":"0px","color":"white","margin-top":"50px","position":"relative"},attrs:{"to":("/players/" + (props.row.player_oid) + "/" + (props.row.Player))}},[_c('div',{staticStyle:{"width":"90px","white-space":"nowrap","overflow":"hidden","text-overflow":"ellipsis","display":"inline-block","margin-bottom":"-5px","margin-left":"5px"}},[_vm._v("\n                            "+_vm._s(props.row["Player"])+"\n                          ")])])],1)]),_vm._v(" "),_c('b-table-column',{staticStyle:{"width":"100px"},attrs:{"label":"Agents","field":"agents","visible":_vm.isVisible('top3Agents', 'players')}},[_c('div',{staticStyle:{"width":"80px"}},_vm._l((props.row['Top 3 Agents']),function(agent){return _c('span',{key:agent,staticStyle:{"width":"100"}},[_c('span',[(agent.Agent)?_c('b-tooltip',{attrs:{"label":((agent['Maps Played']) + " Maps Played"),"position":"is-top","type":"is-dark"}},[_c('img',{staticStyle:{"border-radius":"50%","width":"25px"},attrs:{"src":_vm.getAgent(agent.Agent)}})]):_vm._e()],1)])}),0)]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Rounds","field":"Rounds Played","visible":_vm.isVisible('roundsPlayed', 'players')}},[(props.row['Rounds Played'])?_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Rounds Played"])+"\n                      ")]):_vm._e()]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Rating","field":"ValRating"}},[_c('div',{staticStyle:{"text-align":"left"},style:(props.row.ValRating.toFixed(2) > 1
                            ? 'color:limegreen'
                            : 'color:orangered')},[_vm._v("\n                        "+_vm._s(props.row["ValRating"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"ACS","field":"ACS","visible":_vm.isVisible('acs', 'players')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["ACS"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Econ","field":"Econ Rating","visible":_vm.isVisible('econRating', 'players')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Econ Rating"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"label":"Maps","field":"Maps Played","visible":_vm.isVisible('mapsPlayed', 'players')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Maps Played"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Win %","field":"Win %","visible":_vm.isVisible('win%', 'players')}},[_c('div',{staticStyle:{"text-align":"left","width":"70px"}},[_vm._v("\n                        "+_vm._s((props.row["Win %"] * 100).toFixed(2))+"%\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"K/R","field":"K/R","visible":_vm.isVisible('kpr', 'players')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["K/R"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"D/R","field":"D/R","visible":_vm.isVisible('dpr', 'players')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["D/R"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"FB/R","field":"FB/R","visible":_vm.isVisible('fbpr', 'players')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["FB/R"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Total Kills","field":"Total Kills","visible":_vm.isVisible('totalKills', 'players')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Total Kills"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Total Deaths","field":"Total Deaths","visible":_vm.isVisible('totalDeaths', 'players')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Total Deaths"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Total FB","field":"Total FB","visible":_vm.isVisible('totalFB', 'players')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Total FB"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"K/D","field":"K/D","visible":_vm.isVisible('k/d', 'players')}},[_c('div',{staticStyle:{"text-align":"center"}},[_vm._v("\n                        "+_vm._s(props.row["K/D"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"KA/D","field":"KA/D","visible":_vm.isVisible('ka/d', 'players')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["KA/D"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"A/R","field":"A/R","visible":_vm.isVisible('apr', 'players')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["A/R"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"KA/R","field":"KA/R","visible":_vm.isVisible('kapr', 'players')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["KA/R"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"K-D","field":"K-D","visible":_vm.isVisible('k-d', 'players')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["K-D"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"KA-D","field":"KA-D","visible":_vm.isVisible('ka-d', 'players')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["KA-D"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Total Plants","field":"Total Plants","visible":_vm.isVisible('totalPlants', 'players')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Total Plants"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Total Defuses","field":"Total Defuses","visible":_vm.isVisible('totalDefuses', 'players')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Total Defuses"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Plants/R","field":"Plants/R","visible":_vm.isVisible('plants/r', 'players')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Plants/R"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Defuses/R","field":"Defuses/R","visible":_vm.isVisible('defuses/r', 'players')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Defuses/R"].toFixed(2))+"\n                      ")])])]}}])})],1),_vm._v(" "),_c('b-tab-item',{attrs:{"label":"Teams"}},[_c('div',{staticClass:"has-text-right"},[_c('b-dropdown',{attrs:{"aria-role":"list","multiple":"","scrollable":true,"max-height":"350px"},model:{value:(_vm.selectedColumnsTeams),callback:function ($$v) {_vm.selectedColumnsTeams=$$v},expression:"selectedColumnsTeams"}},[_c('button',{staticClass:"input",attrs:{"slot":"trigger","type":"button"},slot:"trigger"},[[_c('span',[_vm._v("Select Stats")])],_vm._v(" "),_c('b-icon',{attrs:{"icon":"menu-down"}})],2),_vm._v(" "),_vm._l((_vm.statsListTeam),function(data,index){return _c('b-dropdown-item',{key:index,attrs:{"value":data,"aria-role":"listitem","selected":true}},[_c('div',{staticClass:"media"},[_c('div',{staticClass:"media-content"},[_c('h3',[_vm._v(_vm._s(data.name))])])])])})],2),_vm._v(" "),_c('b-button',{staticStyle:{"margin":"0"}},[_c('download-csv',{attrs:{"data":_vm.teamsData,"name":"TeamStats.csv"}},[_vm._v("\n                      Export to CSV\n                    ")])],1)],1),_vm._v(" "),_c('b-table',{staticStyle:{"color":"white","min-height":"650px"},attrs:{"paginated":true,"per-page":10,"mobile-cards":false,"data":_vm.teamsData,"striped":true,"hoverable":true},scopedSlots:_vm._u([{key:"default",fn:function(props){return [_c('b-table-column',{attrs:{"sortable":"","label":"#","field":"rankNum"}},[_vm._v("\n                      "+_vm._s(props.row["rankNum"]))]),_vm._v(" "),_c('b-table-column',{class:props.index % 2 != 0
                          ? 'is-sticky-header'
                          : 'is-sticky-header-dark',staticStyle:{"width":"200px"},attrs:{"searchable":"","label":"Team","field":"Team","sticky":true}},[_c('div',{staticStyle:{"text-align":"left","margin-top":"-7px","width":"120px"}},[_c('div',{staticStyle:{"text-align":"left","margin-top":"-7px"}},[_c('img',{staticStyle:{"vertical-align":"middle","width":"20px","height":"20px","display":"inline-block","margin-bottom":"-10px"},attrs:{"src":_vm.getTeamImg(props.row.team_img)}}),_vm._v(" "),_c('nuxt-link',{staticStyle:{"padding":"0px","color":"white","margin-top":"50px","position":"relative"},attrs:{"to":("/teams/" + (props.row.team_oid))}},[_c('div',{staticStyle:{"width":"80px","white-space":"nowrap","overflow":"hidden","text-overflow":"ellipsis","display":"inline-block","margin-bottom":"-12px","margin-left":"5px"}},[_vm._v("\n                              "+_vm._s(props.row["Team"])+"\n                            ")])])],1)])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Rating","field":"ValRating"}},[_c('div',{staticStyle:{"text-align":"left"},style:(props.row['ValRating'] > 1
                            ? 'color:limegreen'
                            : 'color:orangered')},[_vm._v("\n                        "+_vm._s(props.row["ValRating"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"ACS","field":"ACS","visible":_vm.isVisible('acs', 'teams')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["ACS"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Econ","field":"Econ Rating","visible":_vm.isVisible('econRating', 'teams')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Econ Rating"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Rounds","field":"Rounds Played","visible":_vm.isVisible('roundsPlayed', 'teams')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Rounds Played"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Maps","field":"Maps Played","visible":_vm.isVisible('mapsPlayed', 'teams')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Maps Played"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Win %","field":"win%","visible":_vm.isVisible('win%', 'teams')}},[_c('div',{staticStyle:{"text-align":"left","width":"70px"}},[_vm._v("\n                        "+_vm._s((props.row["Win %"] * 100).toFixed(2))+"%\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"K/R","field":"K/R","visible":_vm.isVisible('kpr', 'teams')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["K/R"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"D/R","field":"D/R","visible":_vm.isVisible('dpr', 'teams')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["D/R"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"FB/R","field":"FB/R","visible":_vm.isVisible('fbpr', 'teams')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["FB/R"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Total Kills","field":"Total Kills","visible":_vm.isVisible('totalKills', 'teams')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Total Kills"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Total Deaths","field":"Total Deaths","visible":_vm.isVisible('totalDeaths', 'teams')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Total Deaths"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Total FB","field":"Total FB","visible":_vm.isVisible('totalFB', 'teams')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Total FB"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"K/D","field":"K/D","visible":_vm.isVisible('k/d', 'teams')}},[_c('div',{staticStyle:{"text-align":"center"}},[_vm._v("\n                        "+_vm._s(props.row["K/D"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"KA/D","field":"KA/D","visible":_vm.isVisible('ka/d', 'teams')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["KA/D"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"A/R","field":"A/R","visible":_vm.isVisible('apr', 'teams')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["A/R"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"KA/R","field":"KA/R","visible":_vm.isVisible('kapr', 'teams')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["KA/R"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"K-D","field":"K-D","visible":_vm.isVisible('k-d', 'teams')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["K-D"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"KA-D","field":"ka-d","visible":_vm.isVisible('ka-d', 'teams')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["KA-D"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Total Plants","field":"Total Plants","visible":_vm.isVisible('totalPlants', 'teams')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Total Plants"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Total Defuses","field":"Total Defuses","visible":_vm.isVisible('totalDefuses', 'teams')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Total Defuses"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Plants/R","field":"Plants/R","visible":_vm.isVisible('plants/r', 'teams')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Plants/R"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Defuses/R","field":"Defuses/R","visible":_vm.isVisible('defuses/r', 'teams')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Defuses/R"].toFixed(2))+"\n                      ")])])]}}])})],1),_vm._v(" "),_c('b-tab-item',{attrs:{"label":"Agents"}},[_c('div',{staticClass:"has-text-right"},[_c('b-dropdown',{attrs:{"aria-role":"list","multiple":"","scrollable":true,"max-height":"350px"},model:{value:(_vm.selectedColumnsAgents),callback:function ($$v) {_vm.selectedColumnsAgents=$$v},expression:"selectedColumnsAgents"}},[_c('button',{staticClass:"input",attrs:{"slot":"trigger","type":"button"},slot:"trigger"},[[_c('span',[_vm._v("Select Stats")])],_vm._v(" "),_c('b-icon',{attrs:{"icon":"menu-down"}})],2),_vm._v(" "),_vm._l((_vm.statsListAgent),function(data,index){return _c('b-dropdown-item',{key:index,attrs:{"value":data,"aria-role":"listitem","selected":true}},[_c('div',{staticClass:"media"},[_c('div',{staticClass:"media-content"},[_c('h3',[_vm._v(_vm._s(data.name))])])])])})],2),_vm._v(" "),_c('b-button',{staticStyle:{"margin":"0"}},[_c('download-csv',{attrs:{"data":_vm.agentsData,"name":"AgentStats.csv"}},[_vm._v("\n                      Export to CSV\n                    ")])],1)],1),_vm._v(" "),_c('b-table',{staticStyle:{"color":"white","min-height":"650px"},attrs:{"mobile-cards":false,"data":_vm.agentsData,"striped":true,"hoverable":true},scopedSlots:_vm._u([{key:"default",fn:function(props){return [_c('b-table-column',{class:props.index % 2 != 0
                          ? 'is-sticky-header'
                          : 'is-sticky-header-dark',attrs:{"searchable":"","label":"Name","field":"Agent","sticky":true}},[_c('div',{staticStyle:{"text-align":"left","margin-top":"-7px","width":"120px"}},[_c('span',[_c('img',{staticStyle:{"width":"2em","vertical-align":"-13.5px","border-radius":"50%"},attrs:{"src":_vm.getAgent(props.row['Agent']),"size":"normal"}}),_vm._v(" "),_c('span',{staticStyle:{"padding":"0px","color":"white"},attrs:{"to":("/teams/" + (props.row._id))}},[_vm._v("\n                            "+_vm._s(props.row["Agent"])+"\n                          ")])])])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Rating","field":"ValRating"}},[_c('div',{staticStyle:{"text-align":"left"},style:(props.row['ValRating'] > 1
                            ? 'color:limegreen'
                            : 'color:orangered')},[_vm._v("\n                        "+_vm._s(props.row["ValRating"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"ACS","field":"ACS","visible":_vm.isVisible('acs', 'agents')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["ACS"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Econ","field":"Econ Rating","visible":_vm.isVisible('econRating', 'agents')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Econ Rating"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Rounds","field":"Rounds Played","visible":_vm.isVisible('roundsPlayed', 'agents')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Rounds Played"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Maps","field":"Maps Played","visible":_vm.isVisible('mapsPlayed', 'agents')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Maps Played"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Win %","field":"Win %","visible":_vm.isVisible('win%', 'agents')}},[_c('div',{staticStyle:{"text-align":"left","width":"70px"}},[_vm._v("\n                        "+_vm._s((props.row["Win %"] * 100).toFixed(2))+"%\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"K/R","field":"K/R","visible":_vm.isVisible('kpr', 'agents')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["K/R"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"D/R","field":"D/R","visible":_vm.isVisible('dpr', 'agents')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["D/R"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"FB/R","field":"FB/R","visible":_vm.isVisible('fbpr', 'agents')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["FB/R"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Total Kills","field":"Total Kills","visible":_vm.isVisible('totalKills', 'agents')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Total Kills"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Total Deaths","field":"Total Deaths","visible":_vm.isVisible('totalDeaths', 'agents')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Total Deaths"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Total FB","field":"Total FB","visible":_vm.isVisible('totalFB', 'agents')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Total FB"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"K/D","field":"K/D","visible":_vm.isVisible('k/d', 'agents')}},[_c('div',{staticStyle:{"text-align":"center"}},[_vm._v("\n                        "+_vm._s(props.row["K/D"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"KA/D","field":"KA/D","visible":_vm.isVisible('ka/d', 'agents')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["KA/D"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"A/R","field":"A/R","visible":_vm.isVisible('apr', 'agents')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["A/R"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"KA/R","field":"KA/R","visible":_vm.isVisible('kapr', 'agents')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["KA/R"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"K-D","field":"K-D","visible":_vm.isVisible('k-d', 'agents')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["K-D"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"KA-D","field":"ka-d","visible":_vm.isVisible('ka-d', 'agents')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["KA-D"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Total Plants","field":"Total Plants","visible":_vm.isVisible('totalPlants', 'agents')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Total Plants"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Total Defuses","field":"Total Defuses","visible":_vm.isVisible('totalDefuses', 'agents')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Total Defuses"])+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Plants/R","field":"Plants/R","visible":_vm.isVisible('plants/r', 'agents')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Plants/R"].toFixed(2))+"\n                      ")])]),_vm._v(" "),_c('b-table-column',{attrs:{"sortable":"","label":"Defuses/R","field":"Defuses/R","visible":_vm.isVisible('defuses/r', 'agents')}},[_c('div',{staticStyle:{"text-align":"left"}},[_vm._v("\n                        "+_vm._s(props.row["Defuses/R"].toFixed(2))+"\n                      ")])])]}}])})],1)],1)],1)])],2)])])],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/stats/index.vue?vue&type=template&id=fc6b6606&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(58);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/stats/index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var statsvue_type_script_lang_js_ = ({
  name: "Stats",
  props: {
    type: String
  },

  head() {
    return {
      title: "Professional Valorant Stats",
      meta: [{
        hid: "keywords",
        name: "keywords",
        content: "valorant stats, valorant statistics, valorant player stats, valorant kda, top valorant players"
      }, {
        hid: "description",
        name: "description",
        content: "Valorant professional stats and statistics including top players and teams!"
      }]
    };
  },

  data() {
    return {
      selectedColumnsPlayers: [],
      selectedColumnsTeams: [],
      selectedColumnsAgents: [],
      playersData: [],
      teamsData: [],
      agentsData: [],
      agentsList: [],
      mapsList: [],
      playerList: [],
      teamList: [],
      eventList: [],
      eventRegionList: [],
      teamRegionList: [],
      substageTypeList: [],
      playerCountryList: [],
      playerRegionList: [],
      eventFilterSearch: "",
      eventFilter: null,
      mapFilter: [],
      agentFilter: [],
      playerFilterSearch: "",
      playerFilter: null,
      teamFilterSearch: "",
      teamFilter: null,
      opponentFilterSearch: "",
      opponentFilter: null,
      eventRegionFilter: [],
      teamRegionFilter: [],
      fromDateFilter: "",
      toDateFilter: "",
      substageFilter: [],
      playerCountryFilterSearch: "",
      playerCountryFilter: null,
      playerRegionFilter: [],
      tabs: 0,
      agents: {},
      mapData: {},
      allMaps: [],
      statsListPlayer: [{
        name: "ACS",
        id: "acs",
        default: true
      }, {
        name: "Econ Rating",
        id: "econRating",
        default: true
      }, {
        name: "Top 3 Agents",
        id: "top3Agents",
        default: true
      }, {
        name: "Rounds Played",
        id: "roundsPlayed",
        default: true
      }, {
        name: "Maps Played",
        id: "mapsPlayed",
        default: false
      }, {
        name: "Win %",
        id: "win%",
        default: false
      }, {
        name: "K/R",
        id: "kpr",
        default: true
      }, {
        name: "D/R",
        id: "dpr",
        default: true
      }, {
        name: "FB/R",
        id: "fbpr"
      }, {
        name: "Total Kills",
        id: "totalKills",
        default: true
      }, {
        name: "Total Deaths",
        id: "totalDeaths",
        default: true
      }, {
        name: "Total FB",
        id: "totalFB",
        default: true
      }, {
        name: "K/D",
        id: "k/d",
        default: true
      }, {
        name: "KA/D",
        id: "ka/d",
        default: false
      }, {
        name: "A/R",
        id: "apr",
        default: false
      }, {
        name: "KA/R",
        id: "kapr",
        default: false
      }, {
        name: "K-D",
        id: "k-d",
        default: false
      }, {
        name: "KA-D",
        id: "ka-d",
        default: false
      }, {
        name: "Total Plants",
        id: "totalPlants",
        default: false
      }, {
        name: "Total Defuses",
        id: "totalDefuses",
        default: false
      }, {
        name: "Plants/R",
        id: "plants/r",
        default: false
      }, {
        name: "Defuses/R",
        id: "defuses/r",
        default: false
      }],
      statsListTeam: [{
        name: "ACS",
        id: "acs",
        default: true
      }, {
        name: "Econ Rating",
        id: "econRating",
        default: true
      }, {
        name: "Rounds Played",
        id: "roundsPlayed",
        default: false
      }, {
        name: "Maps Played",
        id: "mapsPlayed",
        default: true
      }, {
        name: "Win %",
        id: "win%",
        default: true
      }, {
        name: "K/R",
        id: "kpr",
        default: true
      }, {
        name: "D/R",
        id: "dpr",
        default: true
      }, {
        name: "FB/R",
        id: "fbpr"
      }, {
        name: "Total Kills",
        id: "totalKills",
        default: true
      }, {
        name: "Total Deaths",
        id: "totalDeaths",
        default: true
      }, {
        name: "Total FB",
        id: "totalFB",
        default: true
      }, {
        name: "K/D",
        id: "k/d",
        default: true
      }, {
        name: "KA/D",
        id: "ka/d",
        default: false
      }, {
        name: "A/R",
        id: "apr",
        default: false
      }, {
        name: "KA/R",
        id: "kapr",
        default: false
      }, {
        name: "K-D",
        id: "k-d",
        default: false
      }, {
        name: "KA-D",
        id: "ka-d",
        default: false
      }, {
        name: "Total Plants",
        id: "totalPlants",
        default: false
      }, {
        name: "Total Defuses",
        id: "totalDefuses",
        default: false
      }, {
        name: "Plants/R",
        id: "plants/r",
        default: false
      }, {
        name: "Defuses/R",
        id: "defuses/r",
        default: false
      }],
      statsListAgent: [{
        name: "ACS",
        id: "acs",
        default: true
      }, {
        name: "Econ Rating",
        id: "econRating",
        default: true
      }, {
        name: "Rounds Played",
        id: "roundsPlayed",
        default: false
      }, {
        name: "Maps Played",
        id: "mapsPlayed",
        default: true
      }, {
        name: "Win %",
        id: "win%",
        default: true
      }, {
        name: "K/R",
        id: "kpr",
        default: true
      }, {
        name: "D/R",
        id: "dpr",
        default: true
      }, {
        name: "FB/R",
        id: "fbpr"
      }, {
        name: "Total Kills",
        id: "totalKills",
        default: true
      }, {
        name: "Total Deaths",
        id: "totalDeaths",
        default: true
      }, {
        name: "Total FB",
        id: "totalFB",
        default: true
      }, {
        name: "K/D",
        id: "k/d",
        default: true
      }, {
        name: "KA/D",
        id: "ka/d",
        default: false
      }, {
        name: "A/R",
        id: "apr",
        default: false
      }, {
        name: "KA/R",
        id: "kapr",
        default: false
      }, {
        name: "K-D",
        id: "k-d",
        default: false
      }, {
        name: "KA-D",
        id: "ka-d",
        default: false
      }, {
        name: "Total Plants",
        id: "totalPlants",
        default: false
      }, {
        name: "Total Defuses",
        id: "totalDefuses",
        default: false
      }, {
        name: "Plants/R",
        id: "plants/r",
        default: false
      }, {
        name: "Defuses/R",
        id: "defuses/r",
        default: false
      }],
      isloading: false
    };
  },

  mounted() {// if (window.location.hash === "") {
    //   window.location.hash = "#players";
    // } else if (window.location.hash == "#teams") {
    //   this.tabs = 1;
    // } else if (window.location.hash == "#agents") {
    //   this.tabs = 2;
    // } else {
    //   window.location.hash = "#players"
    // }
    // this.isLoading = true;
    // this.$axios(process.env.baseUrl + "api/db/playerstats", { method: "post" })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.playersData = response;
    //     for (let i = 1; i <= this.playersData.length; i++) {
    //       this.playersData[i - 1].rankNum = i;
    //       this.playersData[i - 1]['Rounds Played'] = parseInt(this.playersData[i - 1]['Rounds Played'])
    //       this.playersData[i - 1]['Maps Played'] = parseInt(this.playersData[i - 1]['Maps Played'])
    //       this.playersData[i - 1]['Total Kills'] = parseInt(this.playersData[i - 1]['Total Kills'])
    //       this.playersData[i - 1]['Total Deaths'] = parseInt(this.playersData[i - 1]['Total Deaths'])
    //       this.playersData[i - 1]['Total FB'] = parseInt(this.playersData[i - 1]['Total FB'])
    //       this.playersData[i - 1]['Total Assists'] = parseInt(this.playersData[i - 1]['Total Assists'])
    //       this.playersData[i - 1]['K-D'] = parseInt(this.playersData[i - 1]['K-D'])
    //       this.playersData[i - 1]['KA-D'] = parseInt(this.playersData[i - 1]['KA-D'])
    //       this.playersData[i - 1]['Total Plants'] = parseInt(this.playersData[i - 1]['Total Plants'])
    //       this.playersData[i - 1]['Total Defuses'] = parseInt(this.playersData[i - 1]['Total Defuses'])
    //     }
    //   });
    // this.$axios(process.env.baseUrl + "api/db/teamstats", {
    //   method: "post"
    // })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.teamsData = response;
    //     for (let i = 1; i <= this.teamsData.length; i++) {
    //       this.teamsData[i - 1].rankNum = i;
    //       this.teamsData[i - 1]['Rounds Played'] = parseInt(this.teamsData[i - 1]['Rounds Played'])
    //       this.teamsData[i - 1]['Maps Played'] = parseInt(this.teamsData[i - 1]['Maps Played'])
    //       this.teamsData[i - 1]['Total Kills'] = parseInt(this.teamsData[i - 1]['Total Kills'])
    //       this.teamsData[i - 1]['Total Deaths'] = parseInt(this.teamsData[i - 1]['Total Deaths'])
    //       this.teamsData[i - 1]['Total FB'] = parseInt(this.teamsData[i - 1]['Total FB'])
    //       this.teamsData[i - 1]['Total Assists'] = parseInt(this.teamsData[i - 1]['Total Assists'])
    //       this.teamsData[i - 1]['K-D'] = parseInt(this.teamsData[i - 1]['K-D'])
    //       this.teamsData[i - 1]['KA-D'] = parseInt(this.teamsData[i - 1]['KA-D'])
    //       this.teamsData[i - 1]['Total Plants'] = parseInt(this.teamsData[i - 1]['Total Plants'])
    //       this.teamsData[i - 1]['Total Defuses'] = parseInt(this.teamsData[i - 1]['Total Defuses'])
    //     }
    //   });
    // this.$axios(process.env.baseUrl + "api/db/agentstats", {
    //   method: "post"
    // })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.agentsData = response;
    //     for (let i = 1; i <= this.agentsData.length; i++) {
    //       this.agentsData[i - 1]['Rounds Played'] = parseInt(this.agentsData[i - 1]['Rounds Played'])
    //       this.agentsData[i - 1]['Maps Played'] = parseInt(this.agentsData[i - 1]['Maps Played'])
    //       this.agentsData[i - 1]['Total Kills'] = parseInt(this.agentsData[i - 1]['Total Kills'])
    //       this.agentsData[i - 1]['Total Deaths'] = parseInt(this.agentsData[i - 1]['Total Deaths'])
    //       this.agentsData[i - 1]['Total FB'] = parseInt(this.agentsData[i - 1]['Total FB'])
    //       this.agentsData[i - 1]['Total Assists'] = parseInt(this.agentsData[i - 1]['Total Assists'])
    //       this.agentsData[i - 1]['K-D'] = parseInt(this.agentsData[i - 1]['K-D'])
    //       this.agentsData[i - 1]['KA-D'] = parseInt(this.agentsData[i - 1]['KA-D'])
    //       this.agentsData[i - 1]['Total Plants'] = parseInt(this.agentsData[i - 1]['Total Plants'])
    //       this.agentsData[i - 1]['Total Defuses'] = parseInt(this.agentsData[i - 1]['Total Defuses'])
    //     }
    //   });
    // this.$axios(process.env.baseUrl + "api/gameMaps", {
    //   method: "get"
    // })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.mapsList = response.data;
    //   });
    // this.$axios(process.env.baseUrl + "api/events", {
    //   method: "get"
    // })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.eventList = response.data;
    //   });
    // this.$axios(process.env.baseUrl + "api/db/agentlist", {
    //   method: "get"
    // })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.agentsList = response;
    //   });
    // this.$axios(process.env.baseUrl + "api/db/playerlist", {
    //   method: "get"
    // })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.playerList = response;
    //   });
    // this.$axios(process.env.baseUrl + "api/db/teamlist", {
    //   method: "get"
    // })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.teamList = response;
    //   });
    // this.$axios(process.env.baseUrl + "api/db/eventregionlist", {
    //   method: "get"
    // })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.eventRegionList = response;
    //   });
    // this.$axios(process.env.baseUrl + "api/db/teamregionlist", {
    //   method: "get"
    // })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.teamRegionList = response;
    //   });
    // this.$axios(process.env.baseUrl + "api/db/substagelist", {
    //   method: "get"
    // })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.substageTypeList = response;
    //   });
    // this.$axios(process.env.baseUrl + "api/db/playercountrylist", {
    //   method: "get"
    // })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.playerCountryList = response;
    //   });
    // this.$axios(process.env.baseUrl + "api/db/playerregion", {
    //   method: "get"
    // })
    //   .then(function(response) {
    //     return response.data;
    //   })
    //   .then(response => {
    //     this.playerRegionList = response;
    //   });
    // this.isLoading = false;
  },

  methods: {
    changeTab() {
      if (this.tabs === 0) {
        window.location.hash = "#players";
      } else if (this.tabs === 1) {
        window.location.hash = "#teams";
      } else if (this.tabs === 2) {
        window.location.hash = "#agents";
      }
    },

    isVisible(id, table) {
      switch (table) {
        case "players":
          if (this.selectedColumnsPlayers.length != 0) {
            for (let i = 0; i < this.selectedColumnsPlayers.length; i++) {
              if (this.selectedColumnsPlayers[i].id === id) {
                return true;
              }
            }

            return false;
          } else {
            for (let i = 0; i < this.statsListPlayer.length; i++) {
              if (this.statsListPlayer[i].id === id) {
                return this.statsListPlayer[i].default;
              }
            }

            return false;
          }

          return false;
          break;

        case "teams":
          if (this.selectedColumnsTeams.length != 0) {
            for (let i = 0; i < this.selectedColumnsTeams.length; i++) {
              if (this.selectedColumnsTeams[i].id === id) {
                return true;
              }
            }

            return false;
          } else {
            for (let i = 0; i < this.statsListTeam.length; i++) {
              if (this.statsListTeam[i].id === id) {
                return this.statsListTeam[i].default;
              }
            }

            return false;
          }

          return false;
          break;

        case "agents":
          if (this.selectedColumnsAgents.length != 0) {
            for (let i = 0; i < this.selectedColumnsAgents.length; i++) {
              if (this.selectedColumnsAgents[i].id === id) {
                return true;
              }
            }

            return false;
          } else {
            for (let i = 0; i < this.statsListAgent.length; i++) {
              if (this.statsListAgent[i].id === id) {
                return this.statsListAgent[i].default;
              }
            }

            return false;
          }

          return false;
          break;

        default:
          break;
      }
    },

    getStats() {
      switch (this.tabs) {
        case 0:
          this.getPlayerStats();
          break;

        case 1:
          this.getTeamStats();
          break;

        case 2:
          this.getAgentStats();
          break;

        default:
          break;
      }
    },

    cleanJSON() {
      var clean = external_lodash_["cloneDeep"](this.playersData);

      for (let i = 0; i < this.playersData.length; i++) {
        for (let j = 0; j < this.playersData[i]["Top 3 Agents"].length; j++) {
          clean[i]["Top 3 Agents"][j] = `${this.playersData[i]["Top 3 Agents"][j]["Agent"]}`;
        }
      }

      return clean;
    },

    getPlayerStats() {
      var filters = [];
      if (this.eventFilter != null) filters.push(`event_oids=>'{${this.eventFilter._id}}'`);
      if (this.mapFilter.length != 0) filters.push(`gamemap_oids=>'{${this.mapFilter.join()}}'`);
      if (this.agentFilter.length != 0) filters.push(`agent_oids=>'{${this.agentFilter.join()}}'`);
      if (this.playerFilter != null) filters.push(`player_oids=>'{${this.playerFilter.oid}}'`);
      if (this.teamFilter != null) filters.push(`team_oids=>'{${this.teamFilter.oid}}'`);
      if (this.opponentFilter != null) filters.push(`opponent_oids=>'{${this.opponentFilter.oid}}'`);
      if (this.eventRegionFilter.length != 0) filters.push(`event_region_ids=>'{${this.eventRegionFilter}}'`);
      if (this.teamRegionFilter.length != 0) filters.push(`team_region_ids=>'{${this.teamRegionFilter}}'`);
      if (this.substageFilter.length != 0) filters.push(`substage_ids=>'{${this.substageFilter.join()}}'`);
      if (this.playerCountryFilter != null) filters.push(`player_country_ids=>'{${this.playerCountryFilter.id}}'`);
      if (this.playerRegionFilter.length != 0) filters.push(`player_region_ids=>'{${this.playerRegionFilter}}'`);
      this.$axios(undefined + "api/db/playerstats", {
        method: "post",
        data: {
          filters: filters.join()
        }
      }).then(function (response) {
        return response.data;
      }).then(response => {
        this.playersData = response;

        for (let i = 1; i <= this.playersData.length; i++) {
          this.playersData[i - 1].rankNum = i;
        }
      });
    },

    getTeamStats() {
      var filters = [];
      if (this.eventFilter != null) filters.push(`event_oids=>'{${this.eventFilter._id}}'`);
      if (this.mapFilter.length != 0) filters.push(`gamemap_oids=>'{${this.mapFilter.join()}}'`);
      if (this.agentFilter.length != 0) filters.push(`agent_oids=>'{${this.agentFilter.join()}}'`);
      if (this.playerFilter != null) filters.push(`player_oids=>'{${this.playerFilter.oid}}'`);
      if (this.teamFilter != null) filters.push(`team_oids=>'{${this.teamFilter.oid}}'`);
      if (this.opponentFilter != null) filters.push(`opponent_oids=>'{${this.opponentFilter.oid}}'`);
      if (this.eventRegionFilter.length != 0) filters.push(`event_region_ids=>'{${this.eventRegionFilter}}'`);
      if (this.teamRegionFilter.length != 0) filters.push(`team_region_ids=>'{${this.teamRegionFilter}}'`);
      if (this.substageFilter.length != 0) filters.push(`substage_ids=>'{${this.substageFilter.join()}}'`);
      this.$axios(undefined + "api/db/teamstats", {
        method: "post",
        data: {
          filters: filters.join()
        }
      }).then(function (response) {
        return response.data;
      }).then(response => {
        this.teamsData = response;

        for (let i = 1; i <= this.teamsData.length; i++) {
          this.teamsData[i - 1].rankNum = i;
        }
      });
    },

    getAgentStats() {
      var filters = [];
      if (this.eventFilter != null) filters.push(`event_oids=>'{${this.eventFilter._id}}'`);
      if (this.mapFilter.length != 0) filters.push(`gamemap_oids=>'{${this.mapFilter.join()}}'`);
      if (this.playerFilter != null) filters.push(`player_oids=>'{${this.playerFilter.oid}}'`);
      if (this.teamFilter != null) filters.push(`team_oids=>'{${this.teamFilter.oid}}'`);
      if (this.opponentFilter != null) filters.push(`opponent_oids=>'{${this.opponentFilter.oid}}'`);
      if (this.eventRegionFilter.length != 0) filters.push(`event_region_ids=>'{${this.eventRegionFilter}}'`);
      if (this.teamRegionFilter.length != 0) filters.push(`team_region_ids=>'{${this.teamRegionFilter}}'`);
      if (this.substageFilter.length != 0) filters.push(`substage_ids=>'{${this.substageFilter.join()}}'`);
      if (this.playerCountryFilter != null) filters.push(`player_country_ids=>'{${this.playerCountryFilter.id}}'`);
      if (this.playerRegionFilter.length != 0) filters.push(`player_region_ids=>'{${this.playerRegionFilter}}'`);
      this.$axios(undefined + "api/db/agentstats", {
        method: "post",
        data: {
          filters: filters.join()
        }
      }).then(function (response) {
        return response.data;
      }).then(response => {
        this.agentsData = response;

        for (let i = 1; i <= this.agentsData.length; i++) {
          this.agentsData[i - 1].rankNum = i;
        }
      });
    },

    getTeamImg(img) {
      if (img) {
        return undefined + `api/uploads/teams/${img}`;
      } else {
        return undefined + `api/uploads/teams/unknown.png`;
      }
    },

    getMap(img) {
      return undefined + `api/uploads/maps/${img}`;
    },

    getAgent(img) {
      img = img.toLowerCase();

      if (img) {
        return undefined + `api/uploads/agents/${img}.png`;
      } else {
        return undefined + `api/uploads/agents/unknown.png`;
      }
    },

    navTwitter() {
      window.open("https://twitter.com/valorantify", "_blank");
    },

    navEventStat(id) {
      this.$router.push({
        path: `/stats/events/${id}`
      });
    },

    getImgUrl(img) {
      return undefined + `api/uploads/events/${img}`;
    },

    getPlayerImg(img) {
      return undefined + `api/uploads/players/${img}`;
    },

    navPlayer(id, slug) {
      this.$router.push({
        path: `/players/${id}`
      });
    }

  },
  computed: {
    eventSearch() {
      return this.eventList.filter(option => {
        return option.name.toString().toLowerCase().indexOf(this.eventFilterSearch.toLowerCase()) >= 0;
      });
    },

    playerSearch() {
      return this.playerList.filter(option => {
        return option.player.toString().toLowerCase().indexOf(this.playerFilterSearch.toLowerCase()) >= 0;
      });
    },

    teamSearch() {
      return this.teamList.filter(option => {
        return option.team.toString().toLowerCase().indexOf(this.teamFilterSearch.toLowerCase()) >= 0;
      });
    },

    opponentSearch() {
      return this.teamList.filter(option => {
        return option.team.toString().toLowerCase().indexOf(this.opponentFilterSearch.toLowerCase()) >= 0;
      });
    },

    playerCountrySearch() {
      return this.playerCountryList.filter(option => {
        return option.country.toString().toLowerCase().indexOf(this.playerCountryFilterSearch.toLowerCase()) >= 0;
      });
    },

    playerRegionSearch() {
      return this.playerRegionList.filter(option => {
        return option.region.toString().toLowerCase().indexOf(this.playerRegionFilterSearch.toLowerCase()) >= 0;
      });
    }

  },
  components: {}
});
// CONCATENATED MODULE: ./pages/stats/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_statsvue_type_script_lang_js_ = (statsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/stats/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(178)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_statsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "fc6b6606",
  "ba93b03e"
  
)

/* harmony default export */ var stats = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map