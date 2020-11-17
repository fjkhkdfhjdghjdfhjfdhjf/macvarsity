exports.ids = [20];
exports.modules = {

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(206);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("3aee4b64", content, true, context)
};

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_25b39971_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(122);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_25b39971_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_25b39971_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_25b39971_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_25b39971_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_slug_vue_vue_type_style_index_0_id_25b39971_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 206:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".type-button[data-v-25b39971]{width:150px}.button[data-v-25b39971]{margin-top:20px;margin-bottom:20px}@media screen and (min-width:640px){.hello[data-v-25b39971]{height:100vh}.comment-mobile[data-v-25b39971]{visibility:hidden;display:none}}@media screen and (max-width:640px){.hello[data-v-25b39971]{height:100%}.comment-desktop[data-v-25b39971]{visibility:hidden;display:none}}.winner[data-v-25b39971]{color:#32cd32}.loser[data-v-25b39971]{color:#ff4500}.map-loser[data-v-25b39971]{opacity:.4}.centered[data-v-25b39971]{position:absolute;top:50%;left:50%;font-weight:700;transform:translate(-50%,-65%)}.container-img[data-v-25b39971]{position:relative;text-align:center;color:#fff}.dark-bkg[data-v-25b39971]{background-color:#1a212e}table[data-v-25b39971]{table-layout:fixed;width:100px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/matches/_id/_slug.vue?vue&type=template&id=25b39971&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.match)?_c('div',{key:_vm.counter,staticClass:"hello"},[_vm._ssrNode("<div class=\"columns is-centered\" style=\"margin-top:20px\" data-v-25b39971>","</div>",[_vm._ssrNode("<div class=\"column is-narrow\" data-v-25b39971>","</div>",[_vm._ssrNode("<div class=\"column is-narrow\" style=\"padding:0px\" data-v-25b39971>","</div>",[_vm._ssrNode("<div"+(_vm._ssrStyle(null,{width:!_vm.$device.isMobile?'800px':'' }, null))+" data-v-25b39971>","</div>",[_vm._ssrNode("<div class=\"card\" style=\"width:800px\" data-v-25b39971>","</div>",[_vm._ssrNode("<div class=\"card-content\" data-v-25b39971>","</div>",[_vm._ssrNode("<div class=\"columns is-mobile\" data-v-25b39971>","</div>",[_vm._ssrNode("<div class=\"column is-one-third\" data-v-25b39971>","</div>",[_c('nuxt-link',{attrs:{"to":("/teams/" + (_vm.match.teamOne._id))}},[_c('div',{staticStyle:{"width":"60px","height":"60px","overflow":"hidden","display":"inline-block"}},[_c('img',{staticStyle:{"border-radius":"50%","clear":"both"},attrs:{"src":_vm.getImgUrl(_vm.match.teamOne.img)}})]),_vm._v(" "),_c('h1',{staticClass:"subtitle",staticStyle:{"font-weight":"bold","font-size":"18px"}},[_vm._v(_vm._s(_vm.match.teamOne.name))]),_vm._v(" "),_c('div',[_c('p',{staticClass:"subtitle",class:_vm.getOutcomeClass(_vm.getWinnerDetails(_vm.match.maps).winner === 0),staticStyle:{"font-weight":"bold","font-size":"23px"}},[_vm._v(_vm._s(_vm.getWinnerDetails(_vm.match.maps).teamOneScore))])])]),_vm._ssrNode(" <span data-v-25b39971></span>")],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column is-one-third\" style=\"margin-top:30px\" data-v-25b39971>","</div>",[_vm._ssrNode("<p style=\"font-size:14px\" data-v-25b39971>"+_vm._ssrEscape(_vm._s(_vm.formatDate(_vm.match.dateTime)))+"</p> "),(_vm.matchEvent)?_vm._ssrNode("<div style=\"opacity:50%\" data-v-25b39971>","</div>",[_c('nuxt-link',{staticStyle:{"padding":"0px","color":"white"},attrs:{"to":("/events/" + (_vm.matchEvent._id) + "/" + (_vm.matchEvent.slug))}},[_vm._v(_vm._s(_vm.matchEvent.name))])],1):_vm._e(),_vm._ssrNode(" "+((_vm.match.type)?("<p data-v-25b39971>"+_vm._ssrEscape(_vm._s(_vm.match.type))+"</p>"):"<!---->"))],2),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column is-one-third\" data-v-25b39971>","</div>",[_vm._ssrNode("<div data-v-25b39971>","</div>",[_vm._ssrNode("<span data-v-25b39971>","</span>",[_c('nuxt-link',{attrs:{"to":("/teams/" + (_vm.match.teamTwo._id))}},[_c('div',{staticStyle:{"width":"60px","height":"60px","overflow":"hidden","display":"inline-block"}},[_c('img',{staticStyle:{"border-radius":"50%","clear":"both"},attrs:{"src":_vm.getImgUrl(_vm.match.teamTwo.img)}})]),_vm._v(" "),_c('h1',{staticClass:"subtitle",staticStyle:{"font-weight":"bold","font-size":"18px"}},[_vm._v(_vm._s(_vm.match.teamTwo.name))]),_vm._v(" "),_c('div',[_c('p',{staticClass:"subtitle",class:_vm.getOutcomeClass(_vm.getWinnerDetails(_vm.match.maps).winner === 1),staticStyle:{"font-weight":"bold","font-size":"23px"}},[_vm._v(_vm._s(_vm.getWinnerDetails(_vm.match.maps).teamTwoScore))])])])],1)])])],2)])])])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"columns is-centered\" style=\"margin-top:10px\" data-v-25b39971>","</div>",[_vm._ssrNode("<div class=\"column is-narrow\" data-v-25b39971>","</div>",[_vm._ssrNode("<div"+(_vm._ssrStyle(null,{width:!_vm.$device.isMobile?'800px':'400px'}, null))+" data-v-25b39971>","</div>",[_vm._ssrNode("<div class=\"columns is-centered\" data-v-25b39971>","</div>",[_vm._ssrNode("<div class=\"column is-half-desktop is-full-mobile\""+(_vm._ssrStyle(null,{width:_vm.$device.isMobile?'430px':'' }, null))+" data-v-25b39971>"+((_vm.match.defaultWin)?("<div style=\"padding:0px;background-color:#222c3c;margin-bottom:10px\" data-v-25b39971><div class=\"container-img\" style=\"margin-left:0px;\" data-v-25b39971><div style=\"width:100%;height:30px;overflow: hidden;display:inline-block;text-align:left;background-color:#191919\" data-v-25b39971></div> <div class=\"centered\" data-v-25b39971>Default</div></div></div>"):"<!---->")+" "+(_vm._ssrList((_vm.match.maps),function(map,index){return ("<div"+(_vm._ssrStyle({"text-align":"center","padding":"0px","background-color":"#222c3c"},{'margin-top':index!=0?'10px':''}, null))+" data-v-25b39971><div style=\"padding:0px\" data-v-25b39971><div class=\"container-img\" style=\"margin-left:0px;\" data-v-25b39971><div style=\"width:100%;height:25px;overflow: hidden;display:inline-block;text-align:left\" data-v-25b39971>"+((map.tba === undefined || map.tba === false)?("<img"+(_vm._ssrAttr("src",_vm.getMapImg(map.map.img)))+" style=\"opacity:40%;\" data-v-25b39971>"):"<!---->")+" "+((map.tba !== undefined && map.tba === true)?("<img"+(_vm._ssrAttr("src",_vm.getMapImg('TBA.png')))+" style=\"opacity:40%;\" data-v-25b39971>"):"<!---->")+"</div> "+((map.tba === undefined || map.tba === false)?("<div class=\"centered\" data-v-25b39971>"+_vm._ssrEscape(_vm._s(map.map.name))+"</div>"):"<!---->")+" "+((map.tba !== undefined && map.tba === true)?("<div class=\"centered\" data-v-25b39971>TBA</div>"):"<!---->")+"</div> <div style=\"font-weight:bold;\" data-v-25b39971><p"+(_vm._ssrClass(null,_vm.getLiveOutcomeClass(map.teamOneScore, map.teamTwoScore)))+" style=\"font-size:15px;display:inline-block\" data-v-25b39971>"+_vm._ssrEscape(_vm._s(map.teamOneScore))+"</p> <span style=\"margin-left:3px;margin-right:3px\" data-v-25b39971>-</span> <p"+(_vm._ssrClass(null,_vm.getLiveOutcomeClass(map.teamTwoScore, map.teamOneScore)))+" style=\"font-size:15px;display:inline-block\" data-v-25b39971>"+_vm._ssrEscape(_vm._s(map.teamTwoScore))+"</p></div></div></div>")}))+"</div> "),_vm._ssrNode("<div class=\"column is-half-desktop is-full-mobile\""+(_vm._ssrStyle(null,{width:_vm.$device.isMobile?'430px':'' }, null))+" data-v-25b39971>","</div>",[_c('b-menu',{staticStyle:{"background-color":"#222c3c"}},_vm._l((_vm.match.streams),function(stream,index){return _c('b-menu-list',{key:index,staticStyle:{"text-align":"center"}},[_c('div',[_c('b-menu-item',{staticStyle:{"text-align":"center","overflow":"hidden","text-overflow":"ellipsis","border-bottom-color":"#171e29","border-bottom-height":"1px","border-bottom-style":"solid"},on:{"click":function($event){_vm.streamIndex = index}}},[_c('template',{slot:"label"},[_c('p',{staticStyle:{"cursor":"pointer","text-align":"left"}},[_c('span',{staticStyle:{"color":"#ff726f","display":"inline-block"}},[_c('i',{staticClass:"fab fa-youtube",staticStyle:{"color":"#ff726f"},attrs:{"href":"https://www.youtube.com/watch?v=UcLio5W3osY"}})]),_vm._v(" "),_c('span',{staticStyle:{"display":"inline-block","margin-left":"20px"}},[_vm._v(_vm._s(stream))])])])],2)],1)])}),1)],1)],2)])])]),_vm._ssrNode(" "+((_vm.showTwitch)?("<div class=\"columns is-centered\" data-v-25b39971><div class=\"column is-narrow\" data-v-25b39971><div class=\"card\" style=\"width:800px\" data-v-25b39971><div class=\"card-content\" data-v-25b39971><iframe"+(_vm._ssrAttr("src",_vm.getStream()))+" width=\"100%\" frameborder=\"5\" scrolling=\"no\" allowfullscreen=\"allowfullscreen\" style=\"height:400px\" data-v-25b39971></iframe></div></div></div></div>"):"<!---->")+" "),(_vm.match.maps[0].playerStatIds.length != 0)?_vm._ssrNode("<div class=\"columns is-centered\" style=\"margin-top:-20px\" data-v-25b39971>","</div>",[_vm._ssrNode("<div class=\"column is-narrow\" style=\"text-align:left\" data-v-25b39971>","</div>",[(_vm.match.maps.length>1)?_c('b-button',{staticStyle:{"background-color":"#222c3c","margin-right":"0px","width":"70px","padding":"0px","border-radius":"0px"},style:({'color':_vm.viewMap === -1?'white':'','border-color':_vm.viewMap === -1?'#ff4653':'#222c3c','font-weight':_vm.viewMap === -1?'bold':''}),on:{"click":function($event){_vm.setMap(-1);_vm.viewMap=-1}}},[_vm._v("All")]):_vm._e(),_vm._ssrNode(" "),_vm._l((_vm.match.maps),function(map,index){return _vm._ssrNode("<span style=\"padding:0px\" data-v-25b39971>","</span>",[_vm._ssrNode("<span style=\"margin-left:-1px\" data-v-25b39971>","</span>",[(map.tba === undefined || map.tba === false)?_c('b-button',{staticStyle:{"background-color":"#222c3c","margin-right":"2px","width":"70px","border-radius":"0px"},style:({'color':_vm.viewMap === index?'white':'','border-color':_vm.viewMap === index?'#ff4653':'#222c3c','font-weight':_vm.viewMap === index?'bold':''}),on:{"click":function($event){_vm.setMap(index);_vm.viewMap=index;}}},[_vm._v(_vm._s(map.map.name))]):_c('b-button',{staticStyle:{"background-color":"#222c3c","margin-right":"2px","width":"70px","border-radius":"0px"},style:({'color':_vm.viewMap === index?'white':'','border-color':_vm.viewMap === index?'#ff4653':'#222c3c','font-weight':_vm.viewMap === index?'bold':''}),on:{"click":function($event){_vm.setMap(index);_vm.viewMap=index;}}},[_vm._v("TBA")])],1)])}),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"card\" style=\"width:800px;margin-top:-20px\" data-v-25b39971>","</div>",[_vm._ssrNode("<div class=\"card-content\" data-v-25b39971>","</div>",[_vm._ssrNode("<div data-v-25b39971>","</div>",[_vm._ssrNode("<p class=\"subtitle\" style=\"font-weight:bold;margin-left:10px;margin-bottom:0.5rem\" data-v-25b39971>"+_vm._ssrEscape(_vm._s(_vm.match.teamOne.name))+"</p> "),_c('b-table',{key:_vm.viewMap,staticStyle:{"font-size":"14px","cursor":"pointer"},attrs:{"data":_vm.filterTeamPlayers(_vm.map.playerStats,1),"bordered":false,"striped":true,"hoverable":true,"mobile-cards":false,"default-sort":"rating","default-sort-direction":"desc"},on:{"click":_vm.navPlayer},scopedSlots:_vm._u([{key:"default",fn:function(props){return [(_vm.players[props.row.playerId])?_c('b-table-column',{attrs:{"field":"PlayerId","label":"Player"}},[_vm._v("\n                      Player\n                      ")]):_vm._e(),_vm._v(" "),_c('b-table-column',{attrs:{"field":"avgCombatScore","label":"Points","sortable":""}},[_vm._v(_vm._s(props.row["avgCombatScore"]))]),_vm._v(" "),_c('b-table-column',{attrs:{"field":"Assists","label":"Assists","sortable":""}},[_vm._v(_vm._s(props.row["kills"]))]),_vm._v(" "),_c('b-table-column',{attrs:{"field":"Rebounds","label":"Rebounds","sortable":""}},[_vm._v(_vm._s(props.row["deaths"]))]),_vm._v(" "),_c('b-table-column',{attrs:{"field":"firstBloods","label":"Steals","sortable":""}},[_vm._v(_vm._s(props.row["assists"]))]),_vm._v(" "),_c('b-table-column',{attrs:{"field":"defuses","label":"Blocks","sortable":""}},[_vm._v(_vm._s(props.row["econRating"]))]),_vm._v(" "),_c('b-table-column',{attrs:{"field":"Fouls","label":"Fouls","sortable":""}},[_vm._v(_vm._s(props.row["firstBloods"]))])]}}],null,false,125604774)})],2),_vm._ssrNode(" "),_vm._ssrNode("<div data-v-25b39971>","</div>",[_vm._ssrNode("<p class=\"subtitle\" style=\"font-weight:bold;margin-left:10px;margin-bottom:0.5rem;margin-top:30px\" data-v-25b39971>"+_vm._ssrEscape(_vm._s(_vm.match.teamTwo.name))+"</p> "),_c('b-table',{key:_vm.viewMap,staticStyle:{"font-size":"14px","cursor":"pointer"},attrs:{"data":_vm.filterTeamPlayers(_vm.map.playerStats,2),"bordered":false,"striped":true,"hoverable":true,"mobile-cards":false,"default-sort":"rating","default-sort-direction":"desc"},on:{"click":_vm.navPlayer},scopedSlots:_vm._u([{key:"default",fn:function(props){return [(_vm.players[props.row.playerId])?_c('b-table-column',{attrs:{"field":"PlayerId","label":"Player"}},[_vm._v("\n                      Player\n                      ")]):_vm._e(),_vm._v(" "),_c('b-table-column',{attrs:{"field":"avgCombatScore","label":"Points","sortable":""}},[_vm._v(_vm._s(props.row["avgCombatScore"]))]),_vm._v(" "),_c('b-table-column',{attrs:{"field":"kills","label":"Assists","sortable":""}},[_vm._v(_vm._s(props.row.kills)+"/"+_vm._s(props.row.deaths)+"/"+_vm._s(props.row.assists))]),_vm._v(" "),_c('b-table-column',{attrs:{"field":"econRating","label":"Rebounds","sortable":""}},[_vm._v(_vm._s(props.row["econRating"]))]),_vm._v(" "),_c('b-table-column',{attrs:{"field":"firstBloods","label":"Steals","sortable":""}},[_vm._v(_vm._s(props.row["firstBloods"]))]),_vm._v(" "),_c('b-table-column',{attrs:{"field":"Blocks","label":"Plants","sortable":""}},[_vm._v(_vm._s(props.row["plants"]))]),_vm._v(" "),_c('b-table-column',{attrs:{"field":"defuses","label":"Fouls","sortable":""}},[_vm._v(_vm._s(props.row["defuses"]))])]}}],null,false,3006877185)})],2)],2)])],2)]):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"columns is-centered\" data-v-25b39971>","</div>",[_vm._ssrNode("<div class=\"column is-narrow\" style=\"text-align:right\" data-v-25b39971>","</div>",[_vm._ssrNode("<div class=\"subtitle\""+(_vm._ssrStyle({"text-align":"left","margin-bottom":"0.5rem"},{width:!_vm.$device.isMobile?'800px':'400px'}, null))+" data-v-25b39971></div> <div class=\"subtitle\" style=\"text-align:left;float:left\" data-v-25b39971>Lineups</div> "),_vm._ssrNode("<div style=\"margin-bottom:1rem\" data-v-25b39971>","</div>",[_vm._ssrNode("<div"+(_vm._ssrStyle(null,{'margin-bottom':!_vm.$device.isMobile?'1.5rem':'0.5rem','padding-bottom':!_vm.$device.isMobile?'':'10px','background':'#1c2431'}, null))+" data-v-25b39971>","</div>",[_vm._ssrNode("<div class=\"subtitle\" style=\"display:flex;justify-content:center;padding-top:10px;margin-bottom:20px\" data-v-25b39971><img"+(_vm._ssrAttr("src",_vm.getImgUrl(_vm.match.teamOne.img)))+" style=\"height:1.3em\" data-v-25b39971>"+_vm._ssrEscape("\n                  "+_vm._s(_vm.match.teamOne.name)+"\n              ")+"</div> "+((_vm.match.teamOne.activePlayerIds.length==0)?("<div"+(_vm._ssrStyle(null,{'margin-bottom':!_vm.$device.isMobile?'':'-40px'}, null))+" data-v-25b39971><div"+(_vm._ssrStyle(null,{width:!_vm.$device.isMobile?'140px':'70px','padding-bottom':'10px','font-size':'13px','margin-left':'41%','margin-bottom':'30px'}, null))+" data-v-25b39971><div class=\"card\""+(_vm._ssrStyle(null,{height:!_vm.$device.isMobile?'175px':'105px','cursor':'pointer'}, null))+" data-v-25b39971><div"+(_vm._ssrStyle(null,{height:!_vm.$device.isMobile?'140px':'70px','width':'100%','display':'flex','overflow':'hidden','justify-content':'center'}, null))+" data-v-25b39971><img src=\"/api/uploads/players/1589730347116-unknown.png\" style=\"max-width:fit-content;max-height: 100%\" data-v-25b39971></div> <footer class=\"card-footer\" style=\"height:35px\" data-v-25b39971><div class=\"card-footer-item\" data-v-25b39971><div style=\"display:flex\" data-v-25b39971>TBD</div></div></footer></div></div></div>"):"<!---->")+" "),_vm._l((_vm.getTeamPlayers(1)),function(player){return _vm._ssrNode("<div"+(_vm._ssrStyle(null,{padding:!_vm.$device.isMobile?'0 10px 10px 10px':'0 2px 2px 2px','display':'inline-block'}, null))+" data-v-25b39971>","</div>",[_vm._ssrNode("<div"+(_vm._ssrStyle(null,{width:!_vm.$device.isMobile?'140px':'70px',height:!_vm.$device.isMobile?'140px':'70px','font-size':'13px'}, null))+" data-v-25b39971>","</div>",[_c('nuxt-link',{attrs:{"to":("/players/" + (player._id))}},[_c('div',{staticClass:"card",style:({height:!_vm.$device.isMobile?'175px':'105px','cursor':'pointer'})},[_c('div',{style:({height:!_vm.$device.isMobile?'140px':'70px','width':'100%','display':'flex','overflow':'hidden','justify-content':'center'})},[_c('img',{staticStyle:{"max-width":"none","max-height":"100%"},attrs:{"src":_vm.getPlayerImg(player.img)}})]),_vm._v(" "),_c('footer',{staticClass:"card-footer",staticStyle:{"height":"35px"}},[_c('div',{staticClass:"card-footer-item"},[(!_vm.$device.isMobile)?_c('div',{staticStyle:{"display":"flex","margin":"-15px"}},[(player.flag !== undefined)?_c('CountryFlag',{attrs:{"country":player.flag,"size":"small"}}):_vm._e(),_vm._v(" "),(player.flag === undefined)?_c('CountryFlag',{staticStyle:{"visibility":"hidden","margin-right":"-20px"},attrs:{"country":"us","size":"small"}}):_vm._e()],1):_vm._e(),_vm._v(" "),_c('div',{staticStyle:{"display":"flex"}},[_vm._v(_vm._s(player.name))])])])])])],1)])})],2),_vm._ssrNode(" "),_vm._ssrNode("<div"+(_vm._ssrStyle(null,{'margin-bottom':!_vm.$device.isMobile?'1rem':'0.5rem','padding-bottom':!_vm.$device.isMobile?'':'10px','background':'#1c2431'}, null))+" data-v-25b39971>","</div>",[_vm._ssrNode("<div class=\"subtitle\" style=\"display:flex;justify-content:center;padding-top:10px;margin-bottom:20px\" data-v-25b39971><img"+(_vm._ssrAttr("src",_vm.getImgUrl(_vm.match.teamTwo.img)))+" style=\"height:1.3em\" data-v-25b39971>"+_vm._ssrEscape("\n                  "+_vm._s(_vm.match.teamTwo.name)+"\n              ")+"</div> "+((_vm.match.teamTwo.activePlayerIds.length==0)?("<div"+(_vm._ssrStyle(null,{'margin-bottom':!_vm.$device.isMobile?'':'-40px'}, null))+" data-v-25b39971><div"+(_vm._ssrStyle(null,{width:!_vm.$device.isMobile?'140px':'70px','padding-bottom':'10px','font-size':'13px','margin-left':'41%','margin-bottom':'30px'}, null))+" data-v-25b39971><div class=\"card\""+(_vm._ssrStyle(null,{height:!_vm.$device.isMobile?'175px':'105px','cursor':'pointer'}, null))+" data-v-25b39971><div"+(_vm._ssrStyle(null,{height:!_vm.$device.isMobile?'140px':'70px','width':'100%','display':'flex','overflow':'hidden','justify-content':'center'}, null))+" data-v-25b39971><img src=\"/api/uploads/players/1589730347116-unknown.png\" style=\"max-width:fit-content;max-height: 100%\" data-v-25b39971></div> <footer class=\"card-footer\" style=\"height:35px\" data-v-25b39971><div class=\"card-footer-item\" data-v-25b39971><div style=\"display:flex\" data-v-25b39971>TBD</div></div></footer></div></div></div>"):"<!---->")+" "),_vm._l((_vm.getTeamPlayers(2)),function(player){return _vm._ssrNode("<div"+(_vm._ssrStyle(null,{padding:!_vm.$device.isMobile?'0 10px 10px 10px':'0 2px 2px 2px','display':'inline-block'}, null))+" data-v-25b39971>","</div>",[_vm._ssrNode("<div"+(_vm._ssrStyle(null,{width:!_vm.$device.isMobile?'140px':'70px',height:!_vm.$device.isMobile?'140px':'70px','font-size':'13px'}, null))+" data-v-25b39971>","</div>",[_c('nuxt-link',{attrs:{"to":("/players/" + (player._id))}},[_c('div',{staticClass:"card",style:({height:!_vm.$device.isMobile?'175px':'105px','cursor':'pointer'})},[_c('div',{style:({height:!_vm.$device.isMobile?'140px':'70px','width':'100%','display':'flex','overflow':'hidden','justify-content':'center'})},[_c('img',{staticStyle:{"max-width":"none","max-height":"100%"},attrs:{"src":_vm.getPlayerImg(player.img)}})]),_vm._v(" "),_c('footer',{staticClass:"card-footer",staticStyle:{"height":"35px"}},[_c('div',{staticClass:"card-footer-item"},[(!_vm.$device.isMobile)?_c('div',{staticStyle:{"display":"flex","margin":"-15px"}},[(player.flag !== undefined)?_c('CountryFlag',{attrs:{"country":player.flag,"size":"small"}}):_vm._e(),_vm._v(" "),(player.flag === undefined)?_c('CountryFlag',{staticStyle:{"visibility":"hidden","margin-right":"-20px"},attrs:{"country":"us","size":"small"}}):_vm._e()],1):_vm._e(),_vm._v(" "),_c('div',{staticStyle:{"display":"flex"}},[_vm._v(_vm._s(player.name))])])])])])],1)])})],2)],2)],2)]),_vm._ssrNode(" <div class=\"columns is-centered\" data-v-25b39971><div class=\"column is-narrow\" data-v-25b39971><div class=\"subtitle\" style=\"text-align:left\" data-v-25b39971>Quarter Winrate</div> <div class=\"card\" style=\"width:800px;margin-bottom:1rem\" data-v-25b39971><div data-v-25b39971><div class=\"columns is-mobile\" data-v-25b39971><div class=\"column is-6\" data-v-25b39971></div> <div class=\"column is-2 subtitle\" style=\"font-size:16px\" data-v-25b39971>"+_vm._ssrEscape(_vm._s(_vm.match.teamOne.name))+"</div> <div class=\"column is-2 subtitle\" style=\"font-size:16px\" data-v-25b39971>"+_vm._ssrEscape(_vm._s(_vm.match.teamTwo.name))+"</div></div> "+(_vm._ssrList((_vm.mapHistory),function(map){return ("<div data-v-25b39971><div class=\"columns is-mobile\" data-v-25b39971><div class=\"column is-6\" data-v-25b39971><img"+(_vm._ssrAttr("src",_vm.getMapImg(map.img)))+" style=\"width:100px;border-radius:10%\" data-v-25b39971> <br data-v-25b39971> <p style=\"font-size:12px\" data-v-25b39971>"+_vm._ssrEscape(_vm._s(map.name))+"</p></div> <div"+(_vm._ssrClass("column is-2",_vm.getMapOutcomeClass(map.teamOneWin/(map.teamOneWin+map.teamOneLoss),map.teamTwoWin/(map.teamTwoWin+map.teamTwoLoss))))+" data-v-25b39971>"+(((map.teamOneWin+map.teamOneLoss)!=0)?("<span data-v-25b39971>"+_vm._ssrEscape(_vm._s(((map.teamOneWin/(map.teamOneWin+map.teamOneLoss))*100).toFixed(2))+"%")+"</span>"):"<!---->")+" "+(((map.teamOneWin+map.teamOneLoss)==0)?("<span data-v-25b39971>0%</span>"):"<!---->")+" <br data-v-25b39971> <p style=\"font-size:12px\" data-v-25b39971>"+_vm._ssrEscape(_vm._s(map.teamOneLoss+map.teamOneWin)+" maps")+"</p></div> <div"+(_vm._ssrClass("column is-2",_vm.getMapOutcomeClass(map.teamTwoWin/(map.teamTwoWin+map.teamTwoLoss),map.teamOneWin/(map.teamOneWin+map.teamOneLoss))))+" data-v-25b39971>"+(((map.teamTwoWin+map.teamTwoLoss)!=0)?("<span data-v-25b39971>"+_vm._ssrEscape(_vm._s(((map.teamTwoWin/(map.teamTwoWin+map.teamTwoLoss))*100).toFixed(2))+"%")+"</span>"):"<!---->")+" "+(((map.teamTwoWin+map.teamTwoLoss)==0)?("<span data-v-25b39971>0%</span>"):"<!---->")+" <br data-v-25b39971> <p style=\"font-size:12px\" data-v-25b39971>"+_vm._ssrEscape(_vm._s(map.teamTwoLoss+map.teamTwoWin)+" maps")+"</p></div></div></div>")}))+"</div></div></div></div> "),_vm._ssrNode("<div class=\"columns is-centered\" data-v-25b39971>","</div>",[_vm._ssrNode("<div class=\"column is-narrow\" data-v-25b39971>","</div>",[_vm._ssrNode("<div class=\"subtitle\" style=\"text-align:left\" data-v-25b39971>Head to head</div> "),_vm._ssrNode("<div class=\"card\" style=\"width:800px\" data-v-25b39971>","</div>",[_vm._ssrNode("<div class=\"columns is-mobile\" data-v-25b39971>"+((!_vm.$device.isMobile)?("<div class=\"column\" data-v-25b39971></div>"):"<!---->")+" <div class=\"column\" style=\"align-self:center;font-size:18px;display:flex\" data-v-25b39971>"+((!_vm.$device.isMobile)?("<img"+(_vm._ssrAttr("src",_vm.getImgUrl(_vm.match.teamOne.img)))+" style=\"height:1.6em\" data-v-25b39971>"):"<!---->")+_vm._ssrEscape("\n                   "+_vm._s(_vm.match.teamOne.name)+"\n              ")+"</div> <div class=\"column\" data-v-25b39971><span style=\"font-weight:bold\" data-v-25b39971>"+_vm._ssrEscape(_vm._s(Math.floor(Math.random() * 5)))+"</span> <br data-v-25b39971> <span style=\"font-size:14px\" data-v-25b39971>"+_vm._ssrEscape(_vm._s(_vm.headToHeadHistory.teamOneWins===1?"Win":"Wins"))+"</span></div> <div class=\"column\" data-v-25b39971><span style=\"font-weight:bold\" data-v-25b39971>"+_vm._ssrEscape(_vm._s(Math.floor(Math.random() * 5)))+"</span> <br data-v-25b39971> <span style=\"font-size:14px\" data-v-25b39971>"+_vm._ssrEscape(_vm._s(_vm.headToHeadHistory.teamTwoWins===1?"Win":"Wins"))+"</span></div> <div class=\"column\" style=\"align-self:center;font-size:18px;display:flex\" data-v-25b39971>"+_vm._ssrEscape("\n                "+_vm._s(_vm.match.teamTwo.name)+"   \n                ")+((!_vm.$device.isMobile)?("<img"+(_vm._ssrAttr("src",_vm.getImgUrl(_vm.match.teamTwo.img)))+" style=\"height:1.6em\" data-v-25b39971>"):"<!---->")+"</div> "+((!_vm.$device.isMobile)?("<div class=\"column\" data-v-25b39971></div>"):"<!---->")+"</div> "),_vm._l((_vm.headToHeadMatches),function(match,index){return _vm._ssrNode("<div"+(_vm._ssrClass("card",_vm.getBkg(index%2===1)))+" style=\"cursor:pointer;margin-top:10px;\" data-v-25b39971>","</div>",[_c('nuxt-link',{staticStyle:{"padding":"0px","color":"white"},attrs:{"to":("/matches/" + (match._id) + "/" + (match.slug))}},[_c('div',{staticClass:"card-content",staticStyle:{"padding-top":"0.5rem","padding-bottom":"0.5rem"}},[_c('div',{staticClass:"columns is-mobile"},[_c('div',{staticClass:"column is-3",staticStyle:{"opacity":"0.6","margin-left":"-10px"}},[_vm._v(_vm._s(_vm.formatDateShortFormat(match.dateTime)))]),_vm._v(" "),_c('div',{staticClass:"column is-4-mobile",staticStyle:{"text-align":"right"}},[_c('div',{staticStyle:{"overflow":"hidden","text-overflow":"ellipsis","display":"inline-block"}},[_vm._v(_vm._s(match.teamOne.name))]),_vm._v(" "),_c('div',{staticStyle:{"width":"25px","height":"25px","overflow":"hidden","display":"inline-block","text-align":"left"}},[_c('img',{attrs:{"src":_vm.getImgUrl(match.teamOne.img),"alt":"Smiley face"}})])]),_vm._v(" "),_c('div',{staticClass:"column is-narrow"},[_c('span',{class:_vm.getOutcomeClass(_vm.getWinnerDetails(match.maps).winner === 0),staticStyle:{"text-align":"center","font-weight":"bold"}},[_vm._v(_vm._s(_vm.getWinnerDetails(match.maps).teamOneScore))]),_vm._v(" "),_c('span',{staticStyle:{"display":"inline-block"}},[_vm._v("-")]),_vm._v(" "),_c('span',{class:_vm.getOutcomeClass(_vm.getWinnerDetails(match.maps).winner === 1),staticStyle:{"text-align":"center","font-weight":"bold","display":"inline-block"}},[_vm._v(_vm._s(_vm.getWinnerDetails(match.maps).teamTwoScore))])]),_vm._v(" "),_c('div',{staticClass:"column is-4-mobile",staticStyle:{"text-align":"left"}},[_c('div',{staticStyle:{"width":"25px","height":"25px","overflow":"hidden","display":"inline-block","text-align":"left"}},[_c('img',{attrs:{"src":_vm.getImgUrl(match.teamTwo.img),"alt":"Smiley face"}})]),_vm._v(" "),_c('div',{staticStyle:{"overflow":"hidden","text-overflow":"ellipsis","display":"inline-block","width":"60%"}},[_vm._v(_vm._s(match.teamTwo.name))])]),_vm._v(" "),(!_vm.$device.isMobile)?_c('div',{staticClass:"column",staticStyle:{"opacity":"0.6","overflow":"hidden","text-overflow":"ellipsis","white-space":"nowrap"}},[_vm._v(_vm._s(_vm.eventNames[match.event]))]):_vm._e()])])])],1)})],2)],2)]),_vm._ssrNode(" "+((_vm.match.maps[0].playerStatIds.length === 0)?("<div class=\"columns is-centered\" data-v-25b39971><div class=\"column is-narrow\" data-v-25b39971><div class=\"card\" style=\"width:800px\" data-v-25b39971><div class=\"card-content\" data-v-25b39971><p data-v-25b39971>No match stats available</p></div></div></div></div>"):"<!---->")+" "),_vm._ssrNode("<div class=\"columns is-centered is-mobile comment-mobile\" style=\"margin-top:10px\" data-v-25b39971>","</div>",[_vm._ssrNode("<div class=\"column is-narrow\" data-v-25b39971>","</div>",[_vm._ssrNode("<div style=\"width:410px\" data-v-25b39971>","</div>",[_c('Comments',{staticStyle:{"font-size":"16px","text-align":"center","width":"800px"},attrs:{"id":_vm.$route.params.id,"pageData":_vm.match,"type":"matches","commentsArray":_vm.match.comments}})],1)])]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"columns is-centered comment-desktop\" style=\"margin-top:10px\" data-v-25b39971>","</div>",[_vm._ssrNode("<div class=\"column is-narrow\" data-v-25b39971>","</div>",[_vm._ssrNode("<div class=\"card\" style=\"width:800px\" data-v-25b39971>","</div>",[_vm._ssrNode("<div class=\"card-content\" data-v-25b39971>","</div>",[_c('Comments',{staticStyle:{"font-size":"16px","padding":"0px"},attrs:{"id":_vm.$route.params.id,"pageData":_vm.match,"type":"matches","commentsArray":_vm.match.comments}})],1)])])])],2)])]):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/matches/_id/_slug.vue?vue&type=template&id=25b39971&scoped=true&

// EXTERNAL MODULE: ./components/Comments/Comments.vue + 10 modules
var Comments = __webpack_require__(81);

// EXTERNAL MODULE: external "vue-country-flag"
var external_vue_country_flag_ = __webpack_require__(55);
var external_vue_country_flag_default = /*#__PURE__*/__webpack_require__.n(external_vue_country_flag_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/matches/_id/_slug.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "Matches",
  props: {
    type: String
  },

  head() {
    if (this.match) {
      return {
        title: this.match.teamOne.name + " vs " + this.match.teamTwo.name,
        meta: [{
          name: "twitter:card",
          content: "summary_large_image"
        }, {
          name: "twitter:title",
          content: this.match.teamOne.name + " vs " + this.match.teamTwo.name
        }, // image must be an absolute path
        {
          name: "twitter:image",
          content: "https://files.cults3d.com/uploaders/15024335/illustration-file/a86d53e4-2bd9-4a8f-9550-986686c3131a/gi0mAjIh_400x400_large.png"
        }]
      };
    }

    return {};
  },

  asyncData({
    params
  }) {
    let match = undefined;
    let score = ["-", "-"];
    let map = undefined;
    let players = {};
    let counter = 0;
    let showTwitch = false;
    let teamOneStats = [];
    let teamTwoStats = [];
    let matchHistory = [];
    let matchEvent = undefined;
    let mapHistory = {};
    let headToHeadMatches = [];
    let headToHeadHistory = {};
    let eventNames = {};
    let viewMap = 0;
    let streamIndex = 0;
    return external_axios_default.a.get(undefined + `api/matches/${params.id}?&populatemaps=true&populatecomments=true&populatematchplayers=true`).then(response => {
      match = response.data;
      return external_axios_default.a.all([external_axios_default.a.get(undefined + `api/gamemaps`), external_axios_default.a.get(undefined + `api/events`), external_axios_default.a.get( // all matches of both teams - with dateTime < match.dateTime
      undefined + `api/matches?active=false&$or[0][$and][0][teamOneId][$in]=${match.teamOne._id}&$or[0][$and][0][teamOneId][$in]=${match.teamTwo._id}&$or[0][$and][1][dateTime][$lt]=${match.dateTime}&$or[1][$and][0][teamTwoId][$in]=${match.teamOne._id}&$or[1][$and][0][teamTwoId][$in]=${match.teamTwo._id}&$or[1][$and][1][dateTime][$lt]=${match.dateTime}&populatemapsonly=true`), external_axios_default.a.get( // only matches of team1 vs team2 (or team2 vs team1) - head to head - with dateTime < match.dateTime
      undefined + `api/matches?active=false&$or[0][$and][0][teamOneId]=${match.teamOne._id}&$or[0][$and][1][teamTwoId]=${match.teamTwo._id}&$or[0][$and][2][dateTime][$lt]=${match.dateTime}&$or[1][$and][0][teamOneId]=${match.teamTwo._id}&$or[1][$and][1][teamTwoId]=${match.teamOne._id}&$or[1][$and][2][dateTime][$lt]=${match.dateTime}&populatemapsonly=true`), external_axios_default.a.get(undefined + `api/teams/${match.teamOneId}`), external_axios_default.a.get(undefined + `api/teams/${match.teamTwoId}`)]).then(external_axios_default.a.spread((gamemapsRaw, eventsRaw, matchStatsRaw, headToHeadStatsRaw, teamOneRaw, teamTwoRaw) => {
        // Event names
        eventsRaw.data.data.forEach(event => {
          eventNames[event._id] = event.name;
        }); // --- Head to Head history ---

        headToHeadMatches = headToHeadStatsRaw.data.data;
        headToHeadHistory.teamOneWins = 0;
        headToHeadHistory.teamTwoWins = 0;

        for (let i = 0; i < headToHeadMatches.length; i++) {
          // Extract match score
          let teamOneScore = 0;
          let teamTwoScore = 0;

          if (headToHeadMatches[i].maps.length === 1) {
            teamOneScore = headToHeadMatches[i].maps[0].teamOneScore;
            teamTwoScore = headToHeadMatches[i].maps[0].teamTwoScore;
          } else {
            for (let j = 0; j < headToHeadMatches[i].maps.length; j++) {
              if (parseInt(headToHeadMatches[i].maps[j].teamOneScore) >= 13 && parseInt(headToHeadMatches[i].maps[j].teamOneScore) > parseInt(headToHeadMatches[i].maps[j].teamTwoScore)) {
                teamOneScore += 1;
              }

              if (parseInt(headToHeadMatches[i].maps[j].teamTwoScore) >= 13 && parseInt(headToHeadMatches[i].maps[j].teamOneScore) < parseInt(headToHeadMatches[i].maps[j].teamTwoScore)) {
                teamTwoScore += 1;
              }
            }
          }

          if (headToHeadMatches[i].teamOneId === match.teamOneId) {
            if (teamOneScore > teamTwoScore) {
              headToHeadHistory.teamOneWins++;
            }

            if (teamOneScore < teamTwoScore) {
              headToHeadHistory.teamTwoWins++;
            }
          }

          if (headToHeadMatches[i].teamOneId === match.teamTwoId) {
            if (teamOneScore > teamTwoScore) {
              headToHeadHistory.teamTwoWins++;
            }

            if (teamOneScore < teamTwoScore) {
              headToHeadHistory.teamOneWins++;
            }
          }
        } // --- Map winrates ---
        //gamemaps fetch


        mapHistory = gamemapsRaw.data.data; //map stats

        matchHistory = matchStatsRaw.data.data;

        for (let k = 0; k < mapHistory.length; k++) {
          mapHistory[k].teamOneWin = 0;
          mapHistory[k].teamTwoWin = 0;
          mapHistory[k].teamTwoLoss = 0;
          mapHistory[k].teamOneLoss = 0;
        }

        for (let i = 0; i < matchHistory.length; i++) {
          for (let j = 0; j < matchHistory[i].maps.length; j++) {
            if (matchHistory[i].teamOneId === match.teamOneId) {
              if (parseInt(matchHistory[i].maps[j].teamOneScore) > parseInt(matchHistory[i].maps[j].teamTwoScore)) {
                for (let k = 0; k < mapHistory.length; k++) {
                  if (matchHistory[i].maps[j] && mapHistory[k]._id === matchHistory[i].maps[j].mapId) {
                    if (mapHistory[k].teamOneWin) {
                      mapHistory[k].teamOneWin += 1;
                    } else {
                      mapHistory[k].teamOneWin = 1;
                    }
                  }
                }
              } else {
                for (let k = 0; k < mapHistory.length; k++) {
                  if (mapHistory[k]._id === matchHistory[i].maps[j].mapId) {
                    if (mapHistory[k].teamOneLoss) {
                      mapHistory[k].teamOneLoss += 1;
                    } else {
                      mapHistory[k].teamOneLoss = 1;
                    }
                  }
                }
              }
            }

            if (matchHistory[i].teamTwoId === match.teamOneId) {
              if (parseInt(matchHistory[i].maps[j].teamTwoScore) > parseInt(matchHistory[i].maps[j].teamOneScore)) {
                for (let k = 0; k < mapHistory.length; k++) {
                  if (mapHistory[k]._id === matchHistory[i].maps[j].mapId) {
                    if (mapHistory[k].teamOneWin) {
                      mapHistory[k].teamOneWin += 1;
                    } else {
                      mapHistory[k].teamOneWin = 1;
                    }
                  }
                }
              } else {
                for (let k = 0; k < mapHistory.length; k++) {
                  if (mapHistory[k]._id === matchHistory[i].maps[j].mapId) {
                    if (mapHistory[k].teamOneLoss) {
                      mapHistory[k].teamOneLoss += 1;
                    } else {
                      mapHistory[k].teamOneLoss = 1;
                    }
                  }
                }
              }
            }

            if (matchHistory[i].teamOneId === match.teamTwoId) {
              if (parseInt(matchHistory[i].maps[j].teamOneScore) > parseInt(matchHistory[i].maps[j].teamTwoScore)) {
                for (let k = 0; k < mapHistory.length; k++) {
                  if (mapHistory[k]._id === matchHistory[i].maps[j].mapId) {
                    if (mapHistory[k].teamTwoWin) {
                      mapHistory[k].teamTwoWin += 1;
                    } else {
                      mapHistory[k].teamTwoWin = 1;
                    }
                  }
                }
              } else {
                for (let k = 0; k < mapHistory.length; k++) {
                  if (mapHistory[k]._id === matchHistory[i].maps[j].mapId) {
                    if (mapHistory[k].teamTwoLoss) {
                      mapHistory[k].teamTwoLoss += 1;
                    } else {
                      mapHistory[k].teamTwoLoss = 1;
                    }
                  }
                }
              }
            }

            if (matchHistory[i].teamTwoId === match.teamTwoId) {
              if (parseInt(matchHistory[i].maps[j].teamTwoScore) > parseInt(matchHistory[i].maps[j].teamOneScore)) {
                for (let k = 0; k < mapHistory.length; k++) {
                  if (mapHistory[k]._id === matchHistory[i].maps[j].mapId) {
                    if (mapHistory[k].teamTwoWin) {
                      mapHistory[k].teamTwoWin += 1;
                    } else {
                      mapHistory[k].teamTwoWin = 1;
                    }
                  }
                }
              } else {
                if (matchHistory[i].maps[j].map.name === "Haven") {// console.log(matchHistory[i].maps[j]);
                }

                for (let k = 0; k < mapHistory.length; k++) {
                  if (mapHistory[k]._id === matchHistory[i].maps[j].mapId) {
                    if (mapHistory[k].teamTwoLoss) {
                      mapHistory[k].teamTwoLoss += 1;
                    } else {
                      mapHistory[k].teamTwoLoss = 1;
                    }
                  }
                }
              }
            }
          }
        } //setting map


        map = match.maps[0]; //team one

        let teamOneData = teamOneRaw.data;
        teamOneData.players.forEach(player => {
          players[player._id] = player;
        }); //team two

        let teamTwoData = teamTwoRaw.data;
        teamTwoData.players.forEach(player => {
          players[player._id] = player;
        });
        counter++; //return data

        return {
          match,
          score,
          map,
          players,
          counter,
          showTwitch,
          teamOneStats,
          teamTwoStats,
          matchHistory,
          mapHistory,
          headToHeadMatches,
          headToHeadHistory,
          eventNames,
          viewMap,
          matchEvent,
          streamIndex
        };
      })).catch(err => console.log(err));
    }).catch(err => console.log(err));
  },

  mounted() {
    this.$axios(undefined + `api/events/${this.match.event}`, {
      method: "get",
      headers: {
        "content-type": "application/json"
      }
    }).then(function (response) {
      return response.data;
    }).then(response => {
      this.matchEvent = response;
    });
  },

  methods: {
    filterTeamPlayers(stats, team) {
      const total = [];

      if (team === 1) {
        for (let i = 0; i < stats.length; i++) {
          if (this.match.teamOne.playerIds.includes(stats[i].playerId)) {
            total.push(stats[i]);
          }
        }
      } else {
        for (let i = 0; i < stats.length; i++) {
          if (this.match.teamTwo.playerIds.includes(stats[i].playerId)) {
            total.push(stats[i]);
          }
        }
      }

      return total;
    },

    getImgUrl(team) {
      return undefined + `api/uploads/teams/${team}`;
    },

    getPlayerImg(id) {
      return undefined + `api/uploads/players/${id}`;
    },

    getMapImg(name) {
      return undefined + `api/uploads/maps/${name}`;
    },

    getBkg(type) {
      if (type) {
        return "light-bkg";
      } else {
        return "dark-bkg";
      }
    },

    getWinnerDetails(maps) {
      const details = {};
      let oneCount = 0;
      let twoCount = 0;

      for (let i = 0; i < maps.length; i++) {
        oneCount += parseInt(maps[i].teamOneScore);
        twoCount += parseInt(maps[i].teamTwoScore);
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

      return details;
    },

    getOutcomeClass(winner) {
      if (!winner) {
        return "loser";
      } else {
        return "winner";
      }
    },

    getLiveOutcomeClass(one, two) {
      if (parseInt(one) > parseInt(two)) {
        return "winner";
      } else if (parseInt(two) > parseInt(one)) {
        return "loser";
      }
    },

    fillTeamsArr() {
      this.$axios(undefined + `api/teams/${this.match.teamOneId}`, {
        method: "get"
      }).then(function (response) {
        return response.data;
      }).then(response => {
        response.players.forEach(player => {
          this.players[player._id] = player;
        });
        this.$axios(undefined + `api/teams/${this.match.teamTwoId}`, {
          method: "get"
        }).then(function (response) {
          return response.data;
        }).then(response => {
          response.players.forEach(player => {
            this.players[player._id] = player;
          });
        });
      });
    },

    formatDate(dateTime) {
      const utc = moment.utc(dateTime);
      var localDate = utc.local();
      return moment(localDate).format("DD-MM-YYYY h:mm a");
    },

    formatDateShortFormat(dateTime) {
      const utc = moment.utc(dateTime);
      var localDate = utc.local();
      return moment(localDate).format("MM/DD h:mm a");
    },

    setMap(index) {
      const total = {};

      if (index === -1) {
        for (let i = 0; i < this.match.maps.length; i++) {
          if (i === 0) {
            total.playerStats = JSON.parse(JSON.stringify(this.match.maps[i].playerStats));
          } else {
            for (let j = 0; j < this.match.maps[i].playerStats.length; j++) {
              for (const key in this.match.maps[i].playerStats[j]) {
                if (key !== "playerId" && key !== "agent") {
                  total.playerStats[j][key] += this.match.maps[i].playerStats[j][key];
                }
              }

              if (i == this.match.maps.length - 1) {
                total.playerStats[j]["avgCombatScore"] = Math.round(total.playerStats[j]["avgCombatScore"] / this.match.maps.length);
                total.playerStats[j]["econRating"] = Math.round(total.playerStats[j]["econRating"] / this.match.maps.length);
                total.playerStats[j]["rating"] = total.playerStats[j]["rating"] / this.match.maps.length;
              }
            }
          }
        }

        this.map = total;
      } else {
        this.map = this.match.maps[index];
      }
    },

    navPlayerPage(id) {
      this.$router.push({
        path: `/players/${id}`
      });
    },

    navPlayer(row) {
      this.$router.push({
        path: `/players/${row.playerId}`
      });
    },

    getStream() {
      return `https://player.twitch.tv/?channel=${this.match.streams[this.streamIndex]}&parent=valorantify.com&muted=true`;
    },

    getTeamPlayers(teamNum) {
      let total = [];

      if (teamNum == 1) {
        for (let i = 0; i < this.match.activePlayers.length; i++) {
          if (this.match.teamOne.playerIds.indexOf(this.match.activePlayers[i]._id) != -1) {
            total.push(this.match.activePlayers[i]);
          }
        }
      }

      if (teamNum == 2) {
        for (let i = 0; i < this.match.activePlayers.length; i++) {
          if (this.match.teamTwo.playerIds.indexOf(this.match.activePlayers[i]._id) != -1) {
            total.push(this.match.activePlayers[i]);
          }
        }
      }

      return total;
    },

    getAgent(img) {
      if (img) {
        return undefined + `api/uploads/agents/${img}`;
      } else {
        return undefined + `api/uploads/agents/unknown.png`;
      }
    },

    processMapHistory() {},

    getMapOutcomeClass(percentOne, percentTwo) {
      if (percentOne < percentTwo) {
        return "map-loser";
      }
    }

  },
  components: {
    Comments: Comments["a" /* default */],
    CountryFlag: external_vue_country_flag_default.a
  }
});
// CONCATENATED MODULE: ./pages/matches/_id/_slug.vue?vue&type=script&lang=js&
 /* harmony default export */ var _id_slugvue_type_script_lang_js_ = (_slugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/matches/_id/_slug.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(205)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  _id_slugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "25b39971",
  "7c1a100b"
  
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