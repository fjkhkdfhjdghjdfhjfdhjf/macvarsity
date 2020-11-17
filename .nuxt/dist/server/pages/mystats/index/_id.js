exports.ids = [23];
exports.modules = {

/***/ 100:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sova.d273dae.png";

/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(163);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("7c71c608", content, true, context)
};

/***/ }),

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(169);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("5e625b88", content, true, context)
};

/***/ }),

/***/ 161:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/Iron-1.842e7ad.png";

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestMatches_vue_vue_type_style_index_0_id_afc9dcb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(101);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestMatches_vue_vue_type_style_index_0_id_afc9dcb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestMatches_vue_vue_type_style_index_0_id_afc9dcb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestMatches_vue_vue_type_style_index_0_id_afc9dcb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestMatches_vue_vue_type_style_index_0_id_afc9dcb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LatestMatches_vue_vue_type_style_index_0_id_afc9dcb4_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 163:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".characterImg[data-v-afc9dcb4]{object-fit:contain;-o-object-fit:contain;height:64px}td[data-v-afc9dcb4]{vertical-align:middle!important}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 164:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./bind-map.png": 165,
	"./haven-map.png": 166,
	"./split-map.png": 167
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 164;

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/bind-map.d79b7b2.png";

/***/ }),

/***/ 166:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/haven-map.b2ab3d7.png";

/***/ }),

/***/ 167:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/split-map.6df6f42.png";

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_ab859620_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(102);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_ab859620_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_ab859620_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_ab859620_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_ab859620_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_id_vue_vue_type_style_index_0_id_ab859620_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 169:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".box[data-v-ab859620]{height:100%}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/mystats/index/_id.vue?vue&type=template&id=ab859620&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return (_vm.playerId !== undefined)?_c('div',[_vm._ssrNode("<div class=\"columns is-desktop\" data-v-ab859620>","</div>",[_vm._ssrNode("<div class=\"column\" data-v-ab859620>","</div>",[_vm._ssrNode("<div class=\"box\" data-v-ab859620>","</div>",[_vm._ssrNode("<div class=\"media\" data-v-ab859620>","</div>",[_vm._ssrNode("<div class=\"media-left\" data-v-ab859620><figure class=\"image is-128x128\" data-v-ab859620><img src=\"https://bulma.io/images/placeholders/128x128.png\" alt=\"Image\" data-v-ab859620></figure></div> "),_vm._ssrNode("<div class=\"media-content\" data-v-ab859620>","</div>",[_vm._ssrNode("<div class=\"content\" data-v-ab859620>","</div>",[_vm._ssrNode("<p class=\"title is-5\" data-v-ab859620>"+_vm._ssrEscape(_vm._s(_vm.playerId))+"</p> "),_c('b-button',[_vm._v("Refresh Data")]),_vm._ssrNode(" <small style=\"display: block\" data-v-ab859620>Last Refresh: 22h ago</small>")],2)]),_vm._ssrNode(" "),_c('b-icon',{staticStyle:{"position":"relative","top":"-0.9em","right":"-0.9em"},attrs:{"icon":"star"}})],2)])]),_vm._ssrNode(" <div class=\"column\" data-v-ab859620><div class=\"box\" data-v-ab859620><div class=\"media\" data-v-ab859620><div class=\"media-left\" data-v-ab859620><figure class=\"image is-128x128\" data-v-ab859620><img"+(_vm._ssrAttr("src",__webpack_require__(161)))+" alt=\"Rank Image\" data-v-ab859620></figure></div> <div class=\"media-content\" data-v-ab859620><div class=\"content\" data-v-ab859620><p class=\"title is-5\" data-v-ab859620>Iron III</p> <p data-v-ab859620>Ranked games won: 44</p> <p data-v-ab859620>Ranked games lost: 23</p></div></div></div></div></div>")],2),_vm._ssrNode(" "),_c('b-tabs',{staticClass:"tabsMyStats",attrs:{"type":"is-boxed"}},[_c('b-tab-item',{attrs:{"label":"Summary"}},[_c('div',{staticClass:"columns"},[_c('div',{staticClass:"column"},[_c('div',{staticClass:"box"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title is-4"},[_vm._v("Global KDA")]),_vm._v(" "),_c('chartjs-doughnut',{attrs:{"bind":true,"datasets":_vm.datasets,"labels":_vm.labels,"option":_vm.option}})],1)])]),_vm._v(" "),_c('div',{staticClass:"column"},[_c('div',{staticClass:"box"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title is-4"},[_vm._v("Best Map")]),_vm._v(" "),_c('figure',{staticClass:"image is-3by1",staticStyle:{"margin":"1em"}},[_c('img',{staticStyle:{"border-radius":"6px"},attrs:{"src":_vm.getImgUrl('bind')}})]),_vm._v(" "),_c('p',{staticClass:"title is-5"},[_vm._v("Bind")])])])])]),_vm._v(" "),_c('div',{staticClass:"box"},[_c('div',{staticClass:"content"},[_c('p',{staticClass:"title is-4"},[_vm._v("Latest matches")]),_vm._v(" "),_c('latest-matches')],1)])]),_vm._v(" "),_c('b-tab-item',{attrs:{"label":"Characters"}},[_c('agents-grid')],1),_vm._v(" "),_c('b-tab-item',{attrs:{"label":"Ranked"}})],1)],2):_vm._e()}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/mystats/index/_id.vue?vue&type=template&id=ab859620&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/MyStats/LatestMatches.vue?vue&type=template&id=afc9dcb4&scoped=true&
var LatestMatchesvue_type_template_id_afc9dcb4_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('b-table',{attrs:{"data":_vm.tableDataSimple,"headerClass":"color: white","row-class":function (row) { return row.result === 'Victory' && 'is-victory'; }},scopedSlots:_vm._u([{key:"default",fn:function(props){return [_c('b-table-column',{attrs:{"width":"40","label":"Type","header-class":"white-header"}},[_vm._v(_vm._s(props.row.type))]),_vm._v(" "),_c('b-table-column',{attrs:{"label":"Agent","centered":"","header-class":"white-header"}},[_c('figure',{staticClass:"image is-64x64",staticStyle:{"margin":"auto"}},[_c('img',{staticClass:"characterImg",attrs:{"src":_vm.getImgUrl(props.row.character.toLowerCase()),"alt":"Image"}})])]),_vm._v(" "),_c('b-table-column',{attrs:{"label":"KDA","header-class":"white-header","width":"100px","centered":""}},[_vm._v("\n      "+_vm._s(props.row.KDA)+"\n      "),(props.row.isMvp)?_c('span',{staticClass:"tag is-primary"},[_vm._v("MVP")]):_vm._e()]),_vm._v(" "),_c('b-table-column',{attrs:{"centered":"","label":"Date","header-class":"white-header"}},[_vm._v(_vm._s(new Date(props.row.date).toLocaleDateString()))]),_vm._v(" "),_c('b-table-column',{attrs:{"label":"Result","centered":"","header-class":"white-header"}},[_c('p',{staticClass:"title is-6",staticStyle:{"margin":"0"}},[_vm._v(_vm._s(props.row.result))]),_vm._v(" "),_c('p',{staticStyle:{"margin":"0"}},[_vm._v(_vm._s(props.row.score))])])]}}])})}
var LatestMatchesvue_type_template_id_afc9dcb4_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/MyStats/LatestMatches.vue?vue&type=template&id=afc9dcb4&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MyStats/LatestMatches.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var LatestMatchesvue_type_script_lang_js_ = ({
  methods: {
    getImgUrl(character) {
      if (character === "sova") {
        return __webpack_require__(82)("./" + character + ".webp");
      }

      return __webpack_require__(83)("./" + character + ".png");
    }

  },

  data() {
    const tableDataSimple = [{
      type: "Ranked",
      character: "Sova",
      KDA: "14/0/4",
      date: "2016/10/15 13:43:27",
      result: "Victory",
      isMvp: false,
      score: "13 : 11"
    }, {
      type: "Ranked",
      character: "Raze",
      KDA: "15/10/2",
      date: "2016/12/15 06:00:53",
      result: "Victory",
      isMvp: false,
      score: "13 : 4"
    }, {
      type: "Ranked",
      character: "Jett",
      KDA: "10/3/5",
      date: "2016/04/26 06:26:28",
      result: "Defeat",
      isMvp: false,
      score: "9 : 13"
    }, {
      type: "Ranked",
      character: "Viper",
      KDA: "22/1/2",
      date: "2016/04/10 10:28:46",
      result: "Victory",
      isMvp: true,
      score: "13 : 12"
    }, {
      type: "Ranked",
      character: "Omen",
      KDA: "5/4/15",
      date: "2016/12/06 14:38:38",
      result: "Victory",
      isMvp: false,
      score: "13 : 1"
    }];
    return {
      tableDataSimple,
      isCustom: false
    };
  }

});
// CONCATENATED MODULE: ./components/MyStats/LatestMatches.vue?vue&type=script&lang=js&
 /* harmony default export */ var MyStats_LatestMatchesvue_type_script_lang_js_ = (LatestMatchesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./components/MyStats/LatestMatches.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(162)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  MyStats_LatestMatchesvue_type_script_lang_js_,
  LatestMatchesvue_type_template_id_afc9dcb4_scoped_true_render,
  LatestMatchesvue_type_template_id_afc9dcb4_scoped_true_staticRenderFns,
  false,
  injectStyles,
  "afc9dcb4",
  "48e5512e"
  
)

/* harmony default export */ var LatestMatches = (component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/MyStats/AgentsGrid.vue?vue&type=template&id=234b992e&
var AgentsGridvue_type_template_id_234b992e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"columns is-multiline is-centered"},[_vm._ssrNode((_vm._ssrList((_vm.agents),function(agent){return ("<div class=\"column is-4\"><figure class=\"image is-96x96\" style=\"margin: auto\"><img"+(_vm._ssrAttr("src",_vm.getImgUrl(agent.name.toLowerCase())))+" alt=\"Placeholder image\"></figure> <div class=\"card\"><div class=\"card-content\"><p class=\"title is-4\">"+_vm._ssrEscape(_vm._s(agent.name))+"</p> <p class=\"title is-5\" style=\"margin: 0\">KDA</p> <p class=\"title is-5\">"+_vm._ssrEscape(_vm._s(agent.KDA))+"</p> <div class=\"columns is-mobile\"><div class=\"column\"><p>Played</p> <p>"+_vm._ssrEscape(_vm._s(agent.gamesPlayed))+"</p></div> <div class=\"column\"><p>Won</p> <p>"+_vm._ssrEscape(_vm._s(agent.won))+"</p></div> <div class=\"column\"><p>Lost</p> <p>"+_vm._ssrEscape(_vm._s(agent.lost))+"</p></div></div> <div class=\"columns is-mobile\"><div class=\"column\"><p>Kills</p> <p>"+_vm._ssrEscape(_vm._s(agent.kills))+"</p></div> <div class=\"column\"><p>Deaths</p> <p>"+_vm._ssrEscape(_vm._s(agent.deaths))+"</p></div> <div class=\"column\"><p>Assists</p> <p>"+_vm._ssrEscape(_vm._s(agent.assists))+"</p></div></div></div></div></div>")})))])}
var AgentsGridvue_type_template_id_234b992e_staticRenderFns = []


// CONCATENATED MODULE: ./components/MyStats/AgentsGrid.vue?vue&type=template&id=234b992e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/MyStats/AgentsGrid.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var AgentsGridvue_type_script_lang_js_ = ({
  methods: {
    getImgUrl(character) {
      if (character === "sova") {
        return __webpack_require__(82)("./" + character + ".webp");
      }

      return __webpack_require__(83)("./" + character + ".png");
    }

  },

  data() {
    return {
      agents: [{
        name: 'Breach',
        gamesPlayed: 23,
        won: 19,
        lost: 5,
        kills: 20,
        deaths: 5,
        assists: 0,
        KDA: 4
      }, {
        name: 'Brimstone',
        gamesPlayed: 23,
        won: 19,
        lost: 5,
        kills: 20,
        deaths: 5,
        assists: 0,
        KDA: 4
      }, {
        name: 'Cypher',
        gamesPlayed: 23,
        won: 19,
        lost: 5,
        kills: 20,
        deaths: 5,
        assists: 0,
        KDA: 4
      }, {
        name: 'Jett',
        gamesPlayed: 23,
        won: 19,
        lost: 5,
        kills: 20,
        deaths: 5,
        assists: 0,
        KDA: 4
      }, {
        name: 'Viper',
        gamesPlayed: 23,
        won: 19,
        lost: 5,
        kills: 20,
        deaths: 5,
        assists: 0,
        KDA: 4
      }, {
        name: 'Omen',
        gamesPlayed: 23,
        won: 19,
        lost: 5,
        kills: 20,
        deaths: 5,
        assists: 0,
        KDA: 4
      }, {
        name: 'Phoenix',
        gamesPlayed: 23,
        won: 19,
        lost: 5,
        kills: 20,
        deaths: 5,
        assists: 0,
        KDA: 4
      }, {
        name: 'Raze',
        gamesPlayed: 23,
        won: 19,
        lost: 5,
        kills: 20,
        deaths: 5,
        assists: 0,
        KDA: 4
      }, {
        name: 'Sage',
        gamesPlayed: 23,
        won: 19,
        lost: 5,
        kills: 20,
        deaths: 5,
        assists: 0,
        KDA: 4
      }, {
        name: 'Sova',
        gamesPlayed: 23,
        won: 19,
        lost: 5,
        kills: 20,
        deaths: 5,
        assists: 0,
        KDA: 4
      }]
    };
  }

});
// CONCATENATED MODULE: ./components/MyStats/AgentsGrid.vue?vue&type=script&lang=js&
 /* harmony default export */ var MyStats_AgentsGridvue_type_script_lang_js_ = (AgentsGridvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/MyStats/AgentsGrid.vue



function AgentsGrid_injectStyles (context) {
  
  
}

/* normalize component */

var AgentsGrid_component = Object(componentNormalizer["a" /* default */])(
  MyStats_AgentsGridvue_type_script_lang_js_,
  AgentsGridvue_type_template_id_234b992e_render,
  AgentsGridvue_type_template_id_234b992e_staticRenderFns,
  false,
  AgentsGrid_injectStyles,
  null,
  "8214cbf2"
  
)

/* harmony default export */ var AgentsGrid = (AgentsGrid_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/mystats/index/_id.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var _idvue_type_script_lang_js_ = ({
  components: {
    LatestMatches: LatestMatches,
    AgentsGrid: AgentsGrid
  },

  asyncData({
    params
  }) {
    if (params.id === undefined) return {
      playerId: undefined
    }; // Api request here...

    return {
      playerId: params.id
    };
  },

  data() {
    return {
      datasets: [{
        data: [182, 70, 240],
        backgroundColor: ["#f36e60", "#185190", "#ffdb3b"],
        hoverBackgroundColor: ["#fbd2cd", "#fef5c9", "#d1e3f7"]
      }],
      labels: ["Kills", "Deaths", "Assists"],
      option: {
        legend: {
          labels: {
            fontColor: "white"
          },
          position: 'bottom'
        }
      }
    };
  },

  methods: {
    getImgUrl(map) {
      return __webpack_require__(164)("./" + map + "-map.png");
    }

  }
});
// CONCATENATED MODULE: ./pages/mystats/index/_id.vue?vue&type=script&lang=js&
 /* harmony default export */ var index_idvue_type_script_lang_js_ = (_idvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./pages/mystats/index/_id.vue



function _id_injectStyles (context) {
  
  var style0 = __webpack_require__(168)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var _id_component = Object(componentNormalizer["a" /* default */])(
  index_idvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  _id_injectStyles,
  "ab859620",
  "3506e3da"
  
)

/* harmony default export */ var _id = __webpack_exports__["default"] = (_id_component.exports);

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/reyna.e3a8623.png";

/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sage.8f93a1f.png";

/***/ }),

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/breach.46d22b6.png";

/***/ }),

/***/ 69:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/brimstone.d1a65cc.png";

/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/cypher.ad3f545.png";

/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/jett.6c48861.png";

/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/omen.16f4170.png";

/***/ }),

/***/ 73:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/phoenix.b0202e8.png";

/***/ }),

/***/ 74:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/viper.ace7eee.png";

/***/ }),

/***/ 75:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/sova.4831eea.webp";

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/raze.3abeb50.webp";

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./raze.webp": 76,
	"./sova.webp": 75
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 82;

/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./breach.png": 68,
	"./brimstone.png": 69,
	"./cypher.png": 70,
	"./jett.png": 71,
	"./omen.png": 72,
	"./phoenix.png": 73,
	"./raze.png": 99,
	"./reyna.png": 66,
	"./sage.png": 67,
	"./sova.png": 100,
	"./viper.png": 74
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 83;

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/raze.98f4e2c.png";

/***/ })

};;
//# sourceMappingURL=_id.js.map