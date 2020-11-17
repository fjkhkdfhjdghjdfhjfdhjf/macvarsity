exports.ids = [15];
exports.modules = {

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

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_45a697aa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(93);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_45a697aa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_45a697aa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_45a697aa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_45a697aa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_45a697aa_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 146:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".type-button[data-v-45a697aa]{width:150px}.button[data-v-45a697aa]{margin-top:20px;margin-bottom:20px}", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./pages/events/index.vue?vue&type=template&id=45a697aa&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_vm._ssrNode("<h1 style=\"font-size:50px;margin-bottom:20px\" data-v-45a697aa>Valorant Events &amp; Tournaments</h1> "),_vm._l((_vm.events),function(event){return _vm._ssrNode("<div style=\"display:inline-block;padding:20px\" data-v-45a697aa>","</div>",[_c('EventCard',{staticStyle:{"display":"inline-block"},attrs:{"event":event}})],1)})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./pages/events/index.vue?vue&type=template&id=45a697aa&scoped=true&

// EXTERNAL MODULE: external "vue-markdown"
var external_vue_markdown_ = __webpack_require__(53);
var external_vue_markdown_default = /*#__PURE__*/__webpack_require__.n(external_vue_markdown_);

// EXTERNAL MODULE: ./components/EventCard.vue + 4 modules
var EventCard = __webpack_require__(126);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/events/index.vue?vue&type=script&lang=js&
//
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

/* harmony default export */ var eventsvue_type_script_lang_js_ = ({
  name: "Characters",
  props: {
    type: String
  },

  head() {
    return {
      meta: [{
        hid: "keywords",
        name: "keywords",
        content: "valorant events, valorant event, valorant tournament, valorant tournaments, valorant event stats, valorant event statistics"
      }, {
        hid: "description",
        name: "description",
        content: "Valorant professional event and tournament coverage, match stats, match scores and more!"
      }]
    };
  },

  asyncData({
    $axios
  }) {
    return $axios.get(undefined + "api/events?$sort[date.to]=-1").then(response => {
      return {
        events: response.data.data
      };
    });
  },

  methods: {
    getStatus(event) {
      if (moment(new Date()).isBetween(moment(event.date.from), moment(event.date.to))) {
        return "live";
      } else if (moment(new Date()).diff(moment(event.date.to)) <= 0) {
        return "coming";
      } else {
        return "prev";
      }
    },

    navEventDetails(id, slug) {
      this.$router.push({
        path: `/events/${id}/${slug}`
      });
    },

    formatDateEvent(dateTime) {
      const utc = moment.utc(dateTime);
      var localDate = utc.local();
      return moment(localDate).format("MMMM DD, YYYY");
    },

    getImgUrl(event) {
      return undefined + `api/uploads/events/${event.img}`;
    }

  },
  components: {
    VueMarkdown: external_vue_markdown_default.a,
    EventCard: EventCard["a" /* default */]
  }
});
// CONCATENATED MODULE: ./pages/events/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_eventsvue_type_script_lang_js_ = (eventsvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./pages/events/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(145)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_eventsvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "45a697aa",
  "4a6e4d1a"
  
)

/* harmony default export */ var events = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(146);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("39ede4ce", content, true, context)
};

/***/ })

};;
//# sourceMappingURL=index.js.map