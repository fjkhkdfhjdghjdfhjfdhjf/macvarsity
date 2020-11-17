module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		0: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({"1":"pages/About","2":"pages/Admin","3":"pages/Brackets","4":"pages/Login","5":"pages/Maps","6":"pages/Reset","7":"pages/Signup","8":"pages/Verify","9":"pages/Writers","10":"pages/adstest","11":"pages/agents/_name","12":"pages/agents/index","13":"pages/events/_id/_slug","14":"pages/events/_id/bracket","15":"pages/events/index","16":"pages/forums/_id/_slug","17":"pages/forums/create","18":"pages/forums/index","19":"pages/index","20":"pages/matches/_id/_slug","21":"pages/matches/index","22":"pages/mystats/index","23":"pages/mystats/index/_id","24":"pages/news/_id/_slug","25":"pages/news/index","26":"pages/players/_id/_slug","27":"pages/skins/_id","28":"pages/skins/index","29":"pages/skins/media","30":"pages/skins/weapons/_id/_slug","31":"pages/stats/compare/index","32":"pages/stats/events/_id","33":"pages/stats/index","34":"pages/teams/_id","35":"pages/teams/compare","36":"pages/user/_id"}[chunkId]||chunkId) + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/_nuxt/";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, "default", function() { return /* binding */ addStylesServer; });

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/listToStyles.js
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}

// CONCATENATED MODULE: ./node_modules/vue-style-loader/lib/addStylesServer.js


function addStylesServer (parentId, list, isProduction, context) {
  if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
    context = __VUE_SSR_CONTEXT__
  }
  if (context) {
    if (!context.hasOwnProperty('styles')) {
      Object.defineProperty(context, 'styles', {
        enumerable: true,
        get: function() {
          return renderStyles(context._styles)
        }
      })
      // expose renderStyles for vue-server-renderer (vuejs/#6353)
      context._renderStyles = renderStyles
    }

    var styles = context._styles || (context._styles = {})
    list = listToStyles(parentId, list)
    if (isProduction) {
      addStyleProd(styles, list)
    } else {
      addStyleDev(styles, list)
    }
  }
}

// In production, render as few style tags as possible.
// (mostly because IE9 has a limit on number of style tags)
function addStyleProd (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      // group style tags by media types.
      var id = part.media || 'default'
      var style = styles[id]
      if (style) {
        if (style.ids.indexOf(part.id) < 0) {
          style.ids.push(part.id)
          style.css += '\n' + part.css
        }
      } else {
        styles[id] = {
          ids: [part.id],
          css: part.css,
          media: part.media
        }
      }
    }
  }
}

// In dev we use individual style tag for each module for hot-reload
// and source maps.
function addStyleDev (styles, list) {
  for (var i = 0; i < list.length; i++) {
    var parts = list[i].parts
    for (var j = 0; j < parts.length; j++) {
      var part = parts[j]
      styles[part.id] = {
        ids: [part.id],
        css: part.css,
        media: part.media
      }
    }
  }
}

function renderStyles (styles) {
  var css = ''
  for (var key in styles) {
    var style = styles[key]
    css += '<style data-vue-ssr-id="' + style.ids.join(' ') + '"' +
        (style.media ? ( ' media="' + style.media + '"' ) : '') + '>' +
        style.css + '</style>'
  }
  return css
}


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("lodash/debounce");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

// This file is intentionally left empty for noop aliases

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("72daabed", content, true, context)
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(31);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("3191d5ad", content, true, context)
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(39);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("5a2b50a6", content, true, context)
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(41);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("9cb7557c", content, true, context)
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(43);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("40870a65", content, true, context)
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(45);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("36784087", content, true, context)
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(47);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("030c5f61", content, true, context)
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(49);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("84455a9e", content, true, context)
};

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(51);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(3).default
module.exports.__inject__ = function (context) {
  add("732b3e9d", content, true, context)
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("vue-no-ssr");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("vue-client-only");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/logofinal.4b538d6.png";

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("node-fetch");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("vue-meta");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("defu");

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("buefy");

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(52);


/***/ }),
/* 27 */
/***/ (function(module, exports) {

// eslint-disable-next-line no-unused-vars
module.exports = function (app) {// Add your custom middleware here. Remember that
  // in Express, the order matters.
};

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_error_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".__nuxt-error-page{padding:1rem;background:#f7f8fb;color:#47494e;text-align:center;display:flex;justify-content:center;align-items:center;flex-direction:column;font-family:sans-serif;font-weight:100!important;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-webkit-font-smoothing:antialiased;position:absolute;top:0;left:0;right:0;bottom:0}.__nuxt-error-page .error{max-width:450px}.__nuxt-error-page .title{font-size:1.5rem;margin-top:15px;color:#47494e;margin-bottom:8px}.__nuxt-error-page .description{color:#7f828b;line-height:21px;margin-bottom:10px}.__nuxt-error-page a{color:#7f828b!important;text-decoration:none}.__nuxt-error-page .logo{position:fixed;left:12px;bottom:12px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(10);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_3_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_3_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_3_oneOf_1_2_node_modules_vue_loader_lib_index_js_vue_loader_options_nuxt_loading_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;opacity:1;transition:width .1s,opacity .4s;background-color:#fff;z-index:999999}.nuxt-progress.nuxt-progress-notransition{transition:none}.nuxt-progress-failed{background-color:red}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(33);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("797461a0", content, true)

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "/*! Buefy v0.8.20 | MIT License | github.com/buefy/buefy */@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@-webkit-keyframes fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@-webkit-keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}@-webkit-keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}\n/*! bulma.io v0.7.5 | MIT License | github.com/jgthms/bulma */@-webkit-keyframes spinAround{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}@keyframes spinAround{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(359deg);transform:rotate(359deg)}}.b-checkbox.checkbox,.b-radio.radio,.breadcrumb,.button,.carousel,.carousel-list,.delete,.file,.is-unselectable,.modal-close,.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous,.switch,.tabs{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.navbar-link:not(.is-arrowless):after,.select:not(.is-multiple):not(.is-loading):after{border:3px solid transparent;border-radius:2px;border-right:0;border-top:0;content:\" \";display:block;height:.625em;margin-top:-.4375em;pointer-events:none;position:absolute;top:50%;-webkit-transform:rotate(-45deg);transform:rotate(-45deg);-webkit-transform-origin:center;transform-origin:center;width:.625em}.block:not(:last-child),.box:not(:last-child),.breadcrumb:not(:last-child),.content:not(:last-child),.highlight:not(:last-child),.level:not(:last-child),.list:not(:last-child),.message:not(:last-child),.notification:not(:last-child),.progress:not(:last-child),.subtitle:not(:last-child),.table-container:not(:last-child),.table:not(:last-child),.tabs:not(:last-child),.title:not(:last-child){margin-bottom:1.5rem}.delete,.modal-close{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(10,10,10,.2);border:none;border-radius:290486px;cursor:pointer;pointer-events:auto;display:inline-block;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;font-size:0;height:20px;max-height:20px;max-width:20px;min-height:20px;min-width:20px;outline:none;position:relative;vertical-align:top;width:20px}.delete:after,.delete:before,.modal-close:after,.modal-close:before{background-color:#fff;content:\"\";display:block;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;transform-origin:center center}.delete:before,.modal-close:before{height:2px;width:50%}.delete:after,.modal-close:after{height:50%;width:2px}.delete:focus,.delete:hover,.modal-close:focus,.modal-close:hover{background-color:rgba(10,10,10,.3)}.delete:active,.modal-close:active{background-color:rgba(10,10,10,.4)}.is-small.delete,.is-small.modal-close{height:16px;max-height:16px;max-width:16px;min-height:16px;min-width:16px;width:16px}.is-medium.delete,.is-medium.modal-close{height:24px;max-height:24px;max-width:24px;min-height:24px;min-width:24px;width:24px}.is-large.delete,.is-large.modal-close{height:32px;max-height:32px;max-width:32px;min-height:32px;min-width:32px;width:32px}.button.is-loading:after,.control.is-loading:after,.loader,.select.is-loading:after{-webkit-animation:spinAround .5s linear infinite;animation:spinAround .5s linear infinite;border-radius:290486px;border-color:transparent transparent #dbdbdb #dbdbdb;border-style:solid;border-width:2px;content:\"\";display:block;height:1em;position:relative;width:1em}.hero-video,.image.is-1by1 .has-ratio,.image.is-1by1 img,.image.is-1by2 .has-ratio,.image.is-1by2 img,.image.is-1by3 .has-ratio,.image.is-1by3 img,.image.is-2by1 .has-ratio,.image.is-2by1 img,.image.is-2by3 .has-ratio,.image.is-2by3 img,.image.is-3by1 .has-ratio,.image.is-3by1 img,.image.is-3by2 .has-ratio,.image.is-3by2 img,.image.is-3by4 .has-ratio,.image.is-3by4 img,.image.is-3by5 .has-ratio,.image.is-3by5 img,.image.is-4by3 .has-ratio,.image.is-4by3 img,.image.is-4by5 .has-ratio,.image.is-4by5 img,.image.is-5by3 .has-ratio,.image.is-5by3 img,.image.is-5by4 .has-ratio,.image.is-5by4 img,.image.is-9by16 .has-ratio,.image.is-9by16 img,.image.is-16by9 .has-ratio,.image.is-16by9 img,.image.is-square .has-ratio,.image.is-square img,.is-overlay,.modal,.modal-background{bottom:0;left:0;position:absolute;right:0;top:0}.button,.file-cta,.file-name,.input,.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous,.select select,.taginput .taginput-container.is-focusable,.textarea{-moz-appearance:none;-webkit-appearance:none;-webkit-box-align:center;-ms-flex-align:center;align-items:center;border:1px solid transparent;border-radius:4px;-webkit-box-shadow:none;box-shadow:none;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:1rem;height:2.25em;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;line-height:1.5;padding:calc(.375em - 1px) calc(.625em - 1px);position:relative;vertical-align:top}.button:active,.button:focus,.file-cta:active,.file-cta:focus,.file-name:active,.file-name:focus,.input:active,.input:focus,.is-active.button,.is-active.file-cta,.is-active.file-name,.is-active.input,.is-active.pagination-ellipsis,.is-active.pagination-link,.is-active.pagination-next,.is-active.pagination-previous,.is-active.textarea,.is-focused.button,.is-focused.file-cta,.is-focused.file-name,.is-focused.input,.is-focused.pagination-ellipsis,.is-focused.pagination-link,.is-focused.pagination-next,.is-focused.pagination-previous,.is-focused.textarea,.pagination-ellipsis:active,.pagination-ellipsis:focus,.pagination-link:active,.pagination-link:focus,.pagination-next:active,.pagination-next:focus,.pagination-previous:active,.pagination-previous:focus,.select select.is-active,.select select.is-focused,.select select:active,.select select:focus,.taginput .is-active.taginput-container.is-focusable,.taginput .is-focused.taginput-container.is-focusable,.taginput .taginput-container.is-focusable:active,.taginput .taginput-container.is-focusable:focus,.textarea:active,.textarea:focus{outline:none}.button[disabled],.file-cta[disabled],.file-name[disabled],.input[disabled],.pagination-ellipsis[disabled],.pagination-link[disabled],.pagination-next[disabled],.pagination-previous[disabled],.select fieldset[disabled] select,.select select[disabled],.taginput .taginput-container.is-focusable[disabled],.taginput fieldset[disabled] .taginput-container.is-focusable,.textarea[disabled],fieldset[disabled] .button,fieldset[disabled] .file-cta,fieldset[disabled] .file-name,fieldset[disabled] .input,fieldset[disabled] .pagination-ellipsis,fieldset[disabled] .pagination-link,fieldset[disabled] .pagination-next,fieldset[disabled] .pagination-previous,fieldset[disabled] .select select,fieldset[disabled] .taginput .taginput-container.is-focusable,fieldset[disabled] .textarea{cursor:not-allowed}\n/*! minireset.css v0.0.4 | MIT License | github.com/jgthms/minireset.css */blockquote,body,dd,dl,dt,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,html,iframe,legend,li,ol,p,pre,textarea,ul{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}ul{list-style:none}button,input,select,textarea{margin:0}html{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{-webkit-box-sizing:inherit;box-sizing:inherit}embed,iframe,img,object,video{height:auto;max-width:100%}audio{max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}td:not([align]),th:not([align]){text-align:left}html{background-color:#fff;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;min-width:300px;overflow-x:hidden;overflow-y:scroll;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}article,aside,figure,footer,header,hgroup,section{display:block}body,button,input,select,textarea{font-family:BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif}code,pre{-moz-osx-font-smoothing:auto;-webkit-font-smoothing:auto;font-family:monospace}body{color:#4a4a4a;font-size:1em;font-weight:400;line-height:1.5}a{color:#7957d5;cursor:pointer;text-decoration:none}a strong{color:currentColor}a:hover{color:#363636}code{color:#ff3860;font-size:.875em;font-weight:400;padding:.25em .5em}code,hr{background-color:#f5f5f5}hr{border:none;display:block;height:2px;margin:1.5rem 0}img{height:auto;max-width:100%}input[type=checkbox],input[type=radio]{vertical-align:baseline}small{font-size:.875em}span{font-style:inherit;font-weight:inherit}strong{color:#363636;font-weight:700}fieldset{border:none}pre{-webkit-overflow-scrolling:touch;background-color:#f5f5f5;color:#4a4a4a;font-size:.875em;overflow-x:auto;padding:1.25rem 1.5rem;white-space:pre;word-wrap:normal}pre code{background-color:transparent;color:currentColor;font-size:1em;padding:0}table td,table th{vertical-align:top}table td:not([align]),table th:not([align]){text-align:left}table th{color:#363636}.is-clearfix:after{clear:both;content:\" \";display:table}.is-pulled-left{float:left!important}.is-pulled-right{float:right!important}.is-clipped{overflow:hidden!important}.is-size-1{font-size:3rem!important}.is-size-2{font-size:2.5rem!important}.is-size-3{font-size:2rem!important}.is-size-4{font-size:1.5rem!important}.is-size-5{font-size:1.25rem!important}.is-size-6{font-size:1rem!important}.is-size-7{font-size:.75rem!important}@media screen and (max-width:768px){.is-size-1-mobile{font-size:3rem!important}.is-size-2-mobile{font-size:2.5rem!important}.is-size-3-mobile{font-size:2rem!important}.is-size-4-mobile{font-size:1.5rem!important}.is-size-5-mobile{font-size:1.25rem!important}.is-size-6-mobile{font-size:1rem!important}.is-size-7-mobile{font-size:.75rem!important}}@media print,screen and (min-width:769px){.is-size-1-tablet{font-size:3rem!important}.is-size-2-tablet{font-size:2.5rem!important}.is-size-3-tablet{font-size:2rem!important}.is-size-4-tablet{font-size:1.5rem!important}.is-size-5-tablet{font-size:1.25rem!important}.is-size-6-tablet{font-size:1rem!important}.is-size-7-tablet{font-size:.75rem!important}}@media screen and (max-width:1023px){.is-size-1-touch{font-size:3rem!important}.is-size-2-touch{font-size:2.5rem!important}.is-size-3-touch{font-size:2rem!important}.is-size-4-touch{font-size:1.5rem!important}.is-size-5-touch{font-size:1.25rem!important}.is-size-6-touch{font-size:1rem!important}.is-size-7-touch{font-size:.75rem!important}}@media screen and (min-width:1024px){.is-size-1-desktop{font-size:3rem!important}.is-size-2-desktop{font-size:2.5rem!important}.is-size-3-desktop{font-size:2rem!important}.is-size-4-desktop{font-size:1.5rem!important}.is-size-5-desktop{font-size:1.25rem!important}.is-size-6-desktop{font-size:1rem!important}.is-size-7-desktop{font-size:.75rem!important}}@media screen and (min-width:1216px){.is-size-1-widescreen{font-size:3rem!important}.is-size-2-widescreen{font-size:2.5rem!important}.is-size-3-widescreen{font-size:2rem!important}.is-size-4-widescreen{font-size:1.5rem!important}.is-size-5-widescreen{font-size:1.25rem!important}.is-size-6-widescreen{font-size:1rem!important}.is-size-7-widescreen{font-size:.75rem!important}}@media screen and (min-width:1408px){.is-size-1-fullhd{font-size:3rem!important}.is-size-2-fullhd{font-size:2.5rem!important}.is-size-3-fullhd{font-size:2rem!important}.is-size-4-fullhd{font-size:1.5rem!important}.is-size-5-fullhd{font-size:1.25rem!important}.is-size-6-fullhd{font-size:1rem!important}.is-size-7-fullhd{font-size:.75rem!important}}.has-text-centered{text-align:center!important}.has-text-justified{text-align:justify!important}.has-text-left{text-align:left!important}.has-text-right{text-align:right!important}@media screen and (max-width:768px){.has-text-centered-mobile{text-align:center!important}}@media print,screen and (min-width:769px){.has-text-centered-tablet{text-align:center!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-centered-tablet-only{text-align:center!important}}@media screen and (max-width:1023px){.has-text-centered-touch{text-align:center!important}}@media screen and (min-width:1024px){.has-text-centered-desktop{text-align:center!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-centered-desktop-only{text-align:center!important}}@media screen and (min-width:1216px){.has-text-centered-widescreen{text-align:center!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-centered-widescreen-only{text-align:center!important}}@media screen and (min-width:1408px){.has-text-centered-fullhd{text-align:center!important}}@media screen and (max-width:768px){.has-text-justified-mobile{text-align:justify!important}}@media print,screen and (min-width:769px){.has-text-justified-tablet{text-align:justify!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-justified-tablet-only{text-align:justify!important}}@media screen and (max-width:1023px){.has-text-justified-touch{text-align:justify!important}}@media screen and (min-width:1024px){.has-text-justified-desktop{text-align:justify!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-justified-desktop-only{text-align:justify!important}}@media screen and (min-width:1216px){.has-text-justified-widescreen{text-align:justify!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-justified-widescreen-only{text-align:justify!important}}@media screen and (min-width:1408px){.has-text-justified-fullhd{text-align:justify!important}}@media screen and (max-width:768px){.has-text-left-mobile{text-align:left!important}}@media print,screen and (min-width:769px){.has-text-left-tablet{text-align:left!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-left-tablet-only{text-align:left!important}}@media screen and (max-width:1023px){.has-text-left-touch{text-align:left!important}}@media screen and (min-width:1024px){.has-text-left-desktop{text-align:left!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-left-desktop-only{text-align:left!important}}@media screen and (min-width:1216px){.has-text-left-widescreen{text-align:left!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-left-widescreen-only{text-align:left!important}}@media screen and (min-width:1408px){.has-text-left-fullhd{text-align:left!important}}@media screen and (max-width:768px){.has-text-right-mobile{text-align:right!important}}@media print,screen and (min-width:769px){.has-text-right-tablet{text-align:right!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-right-tablet-only{text-align:right!important}}@media screen and (max-width:1023px){.has-text-right-touch{text-align:right!important}}@media screen and (min-width:1024px){.has-text-right-desktop{text-align:right!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-right-desktop-only{text-align:right!important}}@media screen and (min-width:1216px){.has-text-right-widescreen{text-align:right!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-right-widescreen-only{text-align:right!important}}@media screen and (min-width:1408px){.has-text-right-fullhd{text-align:right!important}}.is-capitalized{text-transform:capitalize!important}.is-lowercase{text-transform:lowercase!important}.is-uppercase{text-transform:uppercase!important}.is-italic{font-style:italic!important}.has-text-white{color:#fff!important}a.has-text-white:focus,a.has-text-white:hover{color:#e6e6e6!important}.has-background-white{background-color:#fff!important}.has-text-black{color:#0a0a0a!important}a.has-text-black:focus,a.has-text-black:hover{color:#000!important}.has-background-black{background-color:#0a0a0a!important}.has-text-light{color:#f5f5f5!important}a.has-text-light:focus,a.has-text-light:hover{color:#dbdbdb!important}.has-background-light{background-color:#f5f5f5!important}.has-text-dark{color:#363636!important}a.has-text-dark:focus,a.has-text-dark:hover{color:#1c1c1c!important}.has-background-dark{background-color:#363636!important}.has-text-primary{color:#7957d5!important}a.has-text-primary:focus,a.has-text-primary:hover{color:#5a32c7!important}.has-background-primary{background-color:#7957d5!important}.has-text-link{color:#7957d5!important}a.has-text-link:focus,a.has-text-link:hover{color:#5a32c7!important}.has-background-link{background-color:#7957d5!important}.has-text-info{color:#167df0!important}a.has-text-info:focus,a.has-text-info:hover{color:#0d64c6!important}.has-background-info{background-color:#167df0!important}.has-text-success{color:#23d160!important}a.has-text-success:focus,a.has-text-success:hover{color:#1ca64c!important}.has-background-success{background-color:#23d160!important}.has-text-warning{color:#ffdd57!important}a.has-text-warning:focus,a.has-text-warning:hover{color:#ffd324!important}.has-background-warning{background-color:#ffdd57!important}.has-text-danger{color:#ff3860!important}a.has-text-danger:focus,a.has-text-danger:hover{color:#ff0537!important}.has-background-danger{background-color:#ff3860!important}.has-text-black-bis{color:#121212!important}.has-background-black-bis{background-color:#121212!important}.has-text-black-ter{color:#242424!important}.has-background-black-ter{background-color:#242424!important}.has-text-grey-darker{color:#363636!important}.has-background-grey-darker{background-color:#363636!important}.has-text-grey-dark{color:#4a4a4a!important}.has-background-grey-dark{background-color:#4a4a4a!important}.has-text-grey{color:#7a7a7a!important}.has-background-grey{background-color:#7a7a7a!important}.has-text-grey-light{color:#b5b5b5!important}.has-background-grey-light{background-color:#b5b5b5!important}.has-text-grey-lighter{color:#dbdbdb!important}.has-background-grey-lighter{background-color:#dbdbdb!important}.has-text-white-ter{color:#f5f5f5!important}.has-background-white-ter{background-color:#f5f5f5!important}.has-text-white-bis{color:#fafafa!important}.has-background-white-bis{background-color:#fafafa!important}.has-text-weight-light{font-weight:300!important}.has-text-weight-normal{font-weight:400!important}.has-text-weight-medium{font-weight:500!important}.has-text-weight-semibold{font-weight:600!important}.has-text-weight-bold{font-weight:700!important}.is-family-primary,.is-family-sans-serif,.is-family-secondary{font-family:BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif!important}.is-family-code,.is-family-monospace{font-family:monospace!important}.is-block{display:block!important}@media screen and (max-width:768px){.is-block-mobile{display:block!important}}@media print,screen and (min-width:769px){.is-block-tablet{display:block!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-block-tablet-only{display:block!important}}@media screen and (max-width:1023px){.is-block-touch{display:block!important}}@media screen and (min-width:1024px){.is-block-desktop{display:block!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-block-desktop-only{display:block!important}}@media screen and (min-width:1216px){.is-block-widescreen{display:block!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-block-widescreen-only{display:block!important}}@media screen and (min-width:1408px){.is-block-fullhd{display:block!important}}.is-flex{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}@media screen and (max-width:768px){.is-flex-mobile{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media print,screen and (min-width:769px){.is-flex-tablet{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-flex-tablet-only{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (max-width:1023px){.is-flex-touch{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1024px){.is-flex-desktop{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-flex-desktop-only{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1216px){.is-flex-widescreen{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-flex-widescreen-only{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}@media screen and (min-width:1408px){.is-flex-fullhd{display:-webkit-box!important;display:-ms-flexbox!important;display:flex!important}}.is-inline{display:inline!important}@media screen and (max-width:768px){.is-inline-mobile{display:inline!important}}@media print,screen and (min-width:769px){.is-inline-tablet{display:inline!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-inline-tablet-only{display:inline!important}}@media screen and (max-width:1023px){.is-inline-touch{display:inline!important}}@media screen and (min-width:1024px){.is-inline-desktop{display:inline!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-inline-desktop-only{display:inline!important}}@media screen and (min-width:1216px){.is-inline-widescreen{display:inline!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-inline-widescreen-only{display:inline!important}}@media screen and (min-width:1408px){.is-inline-fullhd{display:inline!important}}.is-inline-block{display:inline-block!important}@media screen and (max-width:768px){.is-inline-block-mobile{display:inline-block!important}}@media print,screen and (min-width:769px){.is-inline-block-tablet{display:inline-block!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-inline-block-tablet-only{display:inline-block!important}}@media screen and (max-width:1023px){.is-inline-block-touch{display:inline-block!important}}@media screen and (min-width:1024px){.is-inline-block-desktop{display:inline-block!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-inline-block-desktop-only{display:inline-block!important}}@media screen and (min-width:1216px){.is-inline-block-widescreen{display:inline-block!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-inline-block-widescreen-only{display:inline-block!important}}@media screen and (min-width:1408px){.is-inline-block-fullhd{display:inline-block!important}}.is-inline-flex{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}@media screen and (max-width:768px){.is-inline-flex-mobile{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media print,screen and (min-width:769px){.is-inline-flex-tablet{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-inline-flex-tablet-only{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (max-width:1023px){.is-inline-flex-touch{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1024px){.is-inline-flex-desktop{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-inline-flex-desktop-only{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1216px){.is-inline-flex-widescreen{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-inline-flex-widescreen-only{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}@media screen and (min-width:1408px){.is-inline-flex-fullhd{display:-webkit-inline-box!important;display:-ms-inline-flexbox!important;display:inline-flex!important}}.is-hidden{display:none!important}.is-sr-only{border:none!important;clip:rect(0,0,0,0)!important;height:.01em!important;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:.01em!important}@media screen and (max-width:768px){.is-hidden-mobile{display:none!important}}@media print,screen and (min-width:769px){.is-hidden-tablet{display:none!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-hidden-tablet-only{display:none!important}}@media screen and (max-width:1023px){.is-hidden-touch{display:none!important}}@media screen and (min-width:1024px){.is-hidden-desktop{display:none!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-hidden-desktop-only{display:none!important}}@media screen and (min-width:1216px){.is-hidden-widescreen{display:none!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-hidden-widescreen-only{display:none!important}}@media screen and (min-width:1408px){.is-hidden-fullhd{display:none!important}}.is-invisible{visibility:hidden!important}@media screen and (max-width:768px){.is-invisible-mobile{visibility:hidden!important}}@media print,screen and (min-width:769px){.is-invisible-tablet{visibility:hidden!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-invisible-tablet-only{visibility:hidden!important}}@media screen and (max-width:1023px){.is-invisible-touch{visibility:hidden!important}}@media screen and (min-width:1024px){.is-invisible-desktop{visibility:hidden!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-invisible-desktop-only{visibility:hidden!important}}@media screen and (min-width:1216px){.is-invisible-widescreen{visibility:hidden!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-invisible-widescreen-only{visibility:hidden!important}}@media screen and (min-width:1408px){.is-invisible-fullhd{visibility:hidden!important}}.is-marginless{margin:0!important}.is-paddingless{padding:0!important}.is-radiusless{border-radius:0!important}.is-shadowless{-webkit-box-shadow:none!important;box-shadow:none!important}.is-relative{position:relative!important}.box{background-color:#fff;border-radius:6px;-webkit-box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);color:#4a4a4a;display:block;padding:1.25rem}a.box:focus,a.box:hover{-webkit-box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px #7957d5;box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px #7957d5}a.box:active{-webkit-box-shadow:inset 0 1px 2px rgba(10,10,10,.2),0 0 0 1px #7957d5;box-shadow:inset 0 1px 2px rgba(10,10,10,.2),0 0 0 1px #7957d5}.button{background-color:#fff;border-color:#dbdbdb;border-width:1px;color:#363636;cursor:pointer;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:calc(.375em - 1px) .75em;text-align:center;white-space:nowrap}.button strong{color:inherit}.button .icon,.button .icon.is-large,.button .icon.is-medium,.button .icon.is-small{height:1.5em;width:1.5em}.button .icon:first-child:not(:last-child){margin-left:calc(-.375em - 1px);margin-right:.1875em}.button .icon:last-child:not(:first-child){margin-left:.1875em;margin-right:calc(-.375em - 1px)}.button .icon:first-child:last-child{margin-left:calc(-.375em - 1px);margin-right:calc(-.375em - 1px)}.button.is-hovered,.button:hover{border-color:#b5b5b5;color:#363636}.button.is-focused,.button:focus{border-color:#7957d5;color:#363636}.button.is-focused:not(:active),.button:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.button.is-active,.button:active{border-color:#4a4a4a;color:#363636}.button.is-text{background-color:transparent;border-color:transparent;color:#4a4a4a;text-decoration:underline}.button.is-text.is-focused,.button.is-text.is-hovered,.button.is-text:focus,.button.is-text:hover{background-color:#f5f5f5;color:#363636}.button.is-text.is-active,.button.is-text:active{background-color:#e8e8e8;color:#363636}.button.is-text[disabled],fieldset[disabled] .button.is-text{background-color:transparent;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-white{background-color:#fff;border-color:transparent;color:#0a0a0a}.button.is-white.is-hovered,.button.is-white:hover{background-color:#f9f9f9;border-color:transparent;color:#0a0a0a}.button.is-white.is-focused,.button.is-white:focus{border-color:transparent;color:#0a0a0a}.button.is-white.is-focused:not(:active),.button.is-white:focus:not(:active){-webkit-box-shadow:0 0 0 .125em hsla(0,0%,100%,.25);box-shadow:0 0 0 .125em hsla(0,0%,100%,.25)}.button.is-white.is-active,.button.is-white:active{background-color:#f2f2f2;border-color:transparent;color:#0a0a0a}.button.is-white[disabled],fieldset[disabled] .button.is-white{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-white.is-inverted{background-color:#0a0a0a;color:#fff}.button.is-white.is-inverted.is-hovered,.button.is-white.is-inverted:hover{background-color:#000}.button.is-white.is-inverted[disabled],fieldset[disabled] .button.is-white.is-inverted{background-color:#0a0a0a;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-white.is-loading:after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-white.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-white.is-outlined.is-focused,.button.is-white.is-outlined.is-hovered,.button.is-white.is-outlined:focus,.button.is-white.is-outlined:hover{background-color:#fff;border-color:#fff;color:#0a0a0a}.button.is-white.is-outlined.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-white.is-outlined.is-loading.is-focused:after,.button.is-white.is-outlined.is-loading.is-hovered:after,.button.is-white.is-outlined.is-loading:focus:after,.button.is-white.is-outlined.is-loading:hover:after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-white.is-outlined[disabled],fieldset[disabled] .button.is-white.is-outlined{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-white.is-inverted.is-outlined{background-color:transparent;border-color:#0a0a0a;color:#0a0a0a}.button.is-white.is-inverted.is-outlined.is-focused,.button.is-white.is-inverted.is-outlined.is-hovered,.button.is-white.is-inverted.is-outlined:focus,.button.is-white.is-inverted.is-outlined:hover{background-color:#0a0a0a;color:#fff}.button.is-white.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-white.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-white.is-inverted.is-outlined.is-loading:focus:after,.button.is-white.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-white.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-white.is-inverted.is-outlined{background-color:transparent;border-color:#0a0a0a;-webkit-box-shadow:none;box-shadow:none;color:#0a0a0a}.button.is-black{background-color:#0a0a0a;border-color:transparent;color:#fff}.button.is-black.is-hovered,.button.is-black:hover{background-color:#040404;border-color:transparent;color:#fff}.button.is-black.is-focused,.button.is-black:focus{border-color:transparent;color:#fff}.button.is-black.is-focused:not(:active),.button.is-black:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(10,10,10,.25);box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.button.is-black.is-active,.button.is-black:active{background-color:#000;border-color:transparent;color:#fff}.button.is-black[disabled],fieldset[disabled] .button.is-black{background-color:#0a0a0a;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-black.is-inverted{background-color:#fff;color:#0a0a0a}.button.is-black.is-inverted.is-hovered,.button.is-black.is-inverted:hover{background-color:#f2f2f2}.button.is-black.is-inverted[disabled],fieldset[disabled] .button.is-black.is-inverted{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#0a0a0a}.button.is-black.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-black.is-outlined{background-color:transparent;border-color:#0a0a0a;color:#0a0a0a}.button.is-black.is-outlined.is-focused,.button.is-black.is-outlined.is-hovered,.button.is-black.is-outlined:focus,.button.is-black.is-outlined:hover{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.button.is-black.is-outlined.is-loading:after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-black.is-outlined.is-loading.is-focused:after,.button.is-black.is-outlined.is-loading.is-hovered:after,.button.is-black.is-outlined.is-loading:focus:after,.button.is-black.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-black.is-outlined[disabled],fieldset[disabled] .button.is-black.is-outlined{background-color:transparent;border-color:#0a0a0a;-webkit-box-shadow:none;box-shadow:none;color:#0a0a0a}.button.is-black.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-black.is-inverted.is-outlined.is-focused,.button.is-black.is-inverted.is-outlined.is-hovered,.button.is-black.is-inverted.is-outlined:focus,.button.is-black.is-inverted.is-outlined:hover{background-color:#fff;color:#0a0a0a}.button.is-black.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-black.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-black.is-inverted.is-outlined.is-loading:focus:after,.button.is-black.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-black.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-black.is-inverted.is-outlined{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-light{background-color:#f5f5f5;border-color:transparent;color:#363636}.button.is-light.is-hovered,.button.is-light:hover{background-color:#eee;border-color:transparent;color:#363636}.button.is-light.is-focused,.button.is-light:focus{border-color:transparent;color:#363636}.button.is-light.is-focused:not(:active),.button.is-light:focus:not(:active){-webkit-box-shadow:0 0 0 .125em hsla(0,0%,96.1%,.25);box-shadow:0 0 0 .125em hsla(0,0%,96.1%,.25)}.button.is-light.is-active,.button.is-light:active{background-color:#e8e8e8;border-color:transparent;color:#363636}.button.is-light[disabled],fieldset[disabled] .button.is-light{background-color:#f5f5f5;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-light.is-inverted{background-color:#363636;color:#f5f5f5}.button.is-light.is-inverted.is-hovered,.button.is-light.is-inverted:hover{background-color:#292929}.button.is-light.is-inverted[disabled],fieldset[disabled] .button.is-light.is-inverted{background-color:#363636;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#f5f5f5}.button.is-light.is-loading:after{border-color:transparent transparent #363636 #363636!important}.button.is-light.is-outlined{background-color:transparent;border-color:#f5f5f5;color:#f5f5f5}.button.is-light.is-outlined.is-focused,.button.is-light.is-outlined.is-hovered,.button.is-light.is-outlined:focus,.button.is-light.is-outlined:hover{background-color:#f5f5f5;border-color:#f5f5f5;color:#363636}.button.is-light.is-outlined.is-loading:after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}.button.is-light.is-outlined.is-loading.is-focused:after,.button.is-light.is-outlined.is-loading.is-hovered:after,.button.is-light.is-outlined.is-loading:focus:after,.button.is-light.is-outlined.is-loading:hover:after{border-color:transparent transparent #363636 #363636!important}.button.is-light.is-outlined[disabled],fieldset[disabled] .button.is-light.is-outlined{background-color:transparent;border-color:#f5f5f5;-webkit-box-shadow:none;box-shadow:none;color:#f5f5f5}.button.is-light.is-inverted.is-outlined{background-color:transparent;border-color:#363636;color:#363636}.button.is-light.is-inverted.is-outlined.is-focused,.button.is-light.is-inverted.is-outlined.is-hovered,.button.is-light.is-inverted.is-outlined:focus,.button.is-light.is-inverted.is-outlined:hover{background-color:#363636;color:#f5f5f5}.button.is-light.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-light.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-light.is-inverted.is-outlined.is-loading:focus:after,.button.is-light.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}.button.is-light.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-light.is-inverted.is-outlined{background-color:transparent;border-color:#363636;-webkit-box-shadow:none;box-shadow:none;color:#363636}.button.is-dark{background-color:#363636;border-color:transparent;color:#f5f5f5}.button.is-dark.is-hovered,.button.is-dark:hover{background-color:#2f2f2f;border-color:transparent;color:#f5f5f5}.button.is-dark.is-focused,.button.is-dark:focus{border-color:transparent;color:#f5f5f5}.button.is-dark.is-focused:not(:active),.button.is-dark:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(54,54,54,.25);box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.button.is-dark.is-active,.button.is-dark:active{background-color:#292929;border-color:transparent;color:#f5f5f5}.button.is-dark[disabled],fieldset[disabled] .button.is-dark{background-color:#363636;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-dark.is-inverted{background-color:#f5f5f5;color:#363636}.button.is-dark.is-inverted.is-hovered,.button.is-dark.is-inverted:hover{background-color:#e8e8e8}.button.is-dark.is-inverted[disabled],fieldset[disabled] .button.is-dark.is-inverted{background-color:#f5f5f5;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#363636}.button.is-dark.is-loading:after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}.button.is-dark.is-outlined{background-color:transparent;border-color:#363636;color:#363636}.button.is-dark.is-outlined.is-focused,.button.is-dark.is-outlined.is-hovered,.button.is-dark.is-outlined:focus,.button.is-dark.is-outlined:hover{background-color:#363636;border-color:#363636;color:#f5f5f5}.button.is-dark.is-outlined.is-loading:after{border-color:transparent transparent #363636 #363636!important}.button.is-dark.is-outlined.is-loading.is-focused:after,.button.is-dark.is-outlined.is-loading.is-hovered:after,.button.is-dark.is-outlined.is-loading:focus:after,.button.is-dark.is-outlined.is-loading:hover:after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}.button.is-dark.is-outlined[disabled],fieldset[disabled] .button.is-dark.is-outlined{background-color:transparent;border-color:#363636;-webkit-box-shadow:none;box-shadow:none;color:#363636}.button.is-dark.is-inverted.is-outlined{background-color:transparent;border-color:#f5f5f5;color:#f5f5f5}.button.is-dark.is-inverted.is-outlined.is-focused,.button.is-dark.is-inverted.is-outlined.is-hovered,.button.is-dark.is-inverted.is-outlined:focus,.button.is-dark.is-inverted.is-outlined:hover{background-color:#f5f5f5;color:#363636}.button.is-dark.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-dark.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-dark.is-inverted.is-outlined.is-loading:focus:after,.button.is-dark.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #363636 #363636!important}.button.is-dark.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-dark.is-inverted.is-outlined{background-color:transparent;border-color:#f5f5f5;-webkit-box-shadow:none;box-shadow:none;color:#f5f5f5}.button.is-primary{background-color:#7957d5;border-color:transparent;color:#fff}.button.is-primary.is-hovered,.button.is-primary:hover{background-color:#714dd2;border-color:transparent;color:#fff}.button.is-primary.is-focused,.button.is-primary:focus{border-color:transparent;color:#fff}.button.is-primary.is-focused:not(:active),.button.is-primary:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.button.is-primary.is-active,.button.is-primary:active{background-color:#6943d0;border-color:transparent;color:#fff}.button.is-primary[disabled],fieldset[disabled] .button.is-primary{background-color:#7957d5;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-primary.is-inverted{background-color:#fff;color:#7957d5}.button.is-primary.is-inverted.is-hovered,.button.is-primary.is-inverted:hover{background-color:#f2f2f2}.button.is-primary.is-inverted[disabled],fieldset[disabled] .button.is-primary.is-inverted{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#7957d5}.button.is-primary.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-primary.is-outlined{background-color:transparent;border-color:#7957d5;color:#7957d5}.button.is-primary.is-outlined.is-focused,.button.is-primary.is-outlined.is-hovered,.button.is-primary.is-outlined:focus,.button.is-primary.is-outlined:hover{background-color:#7957d5;border-color:#7957d5;color:#fff}.button.is-primary.is-outlined.is-loading:after{border-color:transparent transparent #7957d5 #7957d5!important}.button.is-primary.is-outlined.is-loading.is-focused:after,.button.is-primary.is-outlined.is-loading.is-hovered:after,.button.is-primary.is-outlined.is-loading:focus:after,.button.is-primary.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-primary.is-outlined[disabled],fieldset[disabled] .button.is-primary.is-outlined{background-color:transparent;border-color:#7957d5;-webkit-box-shadow:none;box-shadow:none;color:#7957d5}.button.is-primary.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-primary.is-inverted.is-outlined.is-focused,.button.is-primary.is-inverted.is-outlined.is-hovered,.button.is-primary.is-inverted.is-outlined:focus,.button.is-primary.is-inverted.is-outlined:hover{background-color:#fff;color:#7957d5}.button.is-primary.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-primary.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-primary.is-inverted.is-outlined.is-loading:focus:after,.button.is-primary.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #7957d5 #7957d5!important}.button.is-primary.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-primary.is-inverted.is-outlined{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-link{background-color:#7957d5;border-color:transparent;color:#fff}.button.is-link.is-hovered,.button.is-link:hover{background-color:#714dd2;border-color:transparent;color:#fff}.button.is-link.is-focused,.button.is-link:focus{border-color:transparent;color:#fff}.button.is-link.is-focused:not(:active),.button.is-link:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.button.is-link.is-active,.button.is-link:active{background-color:#6943d0;border-color:transparent;color:#fff}.button.is-link[disabled],fieldset[disabled] .button.is-link{background-color:#7957d5;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-link.is-inverted{background-color:#fff;color:#7957d5}.button.is-link.is-inverted.is-hovered,.button.is-link.is-inverted:hover{background-color:#f2f2f2}.button.is-link.is-inverted[disabled],fieldset[disabled] .button.is-link.is-inverted{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#7957d5}.button.is-link.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-link.is-outlined{background-color:transparent;border-color:#7957d5;color:#7957d5}.button.is-link.is-outlined.is-focused,.button.is-link.is-outlined.is-hovered,.button.is-link.is-outlined:focus,.button.is-link.is-outlined:hover{background-color:#7957d5;border-color:#7957d5;color:#fff}.button.is-link.is-outlined.is-loading:after{border-color:transparent transparent #7957d5 #7957d5!important}.button.is-link.is-outlined.is-loading.is-focused:after,.button.is-link.is-outlined.is-loading.is-hovered:after,.button.is-link.is-outlined.is-loading:focus:after,.button.is-link.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-link.is-outlined[disabled],fieldset[disabled] .button.is-link.is-outlined{background-color:transparent;border-color:#7957d5;-webkit-box-shadow:none;box-shadow:none;color:#7957d5}.button.is-link.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-link.is-inverted.is-outlined.is-focused,.button.is-link.is-inverted.is-outlined.is-hovered,.button.is-link.is-inverted.is-outlined:focus,.button.is-link.is-inverted.is-outlined:hover{background-color:#fff;color:#7957d5}.button.is-link.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-link.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-link.is-inverted.is-outlined.is-loading:focus:after,.button.is-link.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #7957d5 #7957d5!important}.button.is-link.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-link.is-inverted.is-outlined{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-info{background-color:#167df0;border-color:transparent;color:#fff}.button.is-info.is-hovered,.button.is-info:hover{background-color:#0f77ea;border-color:transparent;color:#fff}.button.is-info.is-focused,.button.is-info:focus{border-color:transparent;color:#fff}.button.is-info.is-focused:not(:active),.button.is-info:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(22,125,240,.25);box-shadow:0 0 0 .125em rgba(22,125,240,.25)}.button.is-info.is-active,.button.is-info:active{background-color:#0e71de;border-color:transparent;color:#fff}.button.is-info[disabled],fieldset[disabled] .button.is-info{background-color:#167df0;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-info.is-inverted{background-color:#fff;color:#167df0}.button.is-info.is-inverted.is-hovered,.button.is-info.is-inverted:hover{background-color:#f2f2f2}.button.is-info.is-inverted[disabled],fieldset[disabled] .button.is-info.is-inverted{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#167df0}.button.is-info.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-info.is-outlined{background-color:transparent;border-color:#167df0;color:#167df0}.button.is-info.is-outlined.is-focused,.button.is-info.is-outlined.is-hovered,.button.is-info.is-outlined:focus,.button.is-info.is-outlined:hover{background-color:#167df0;border-color:#167df0;color:#fff}.button.is-info.is-outlined.is-loading:after{border-color:transparent transparent #167df0 #167df0!important}.button.is-info.is-outlined.is-loading.is-focused:after,.button.is-info.is-outlined.is-loading.is-hovered:after,.button.is-info.is-outlined.is-loading:focus:after,.button.is-info.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-info.is-outlined[disabled],fieldset[disabled] .button.is-info.is-outlined{background-color:transparent;border-color:#167df0;-webkit-box-shadow:none;box-shadow:none;color:#167df0}.button.is-info.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-info.is-inverted.is-outlined.is-focused,.button.is-info.is-inverted.is-outlined.is-hovered,.button.is-info.is-inverted.is-outlined:focus,.button.is-info.is-inverted.is-outlined:hover{background-color:#fff;color:#167df0}.button.is-info.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-info.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-info.is-inverted.is-outlined.is-loading:focus:after,.button.is-info.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #167df0 #167df0!important}.button.is-info.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-info.is-inverted.is-outlined{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-success{background-color:#23d160;border-color:transparent;color:#fff}.button.is-success.is-hovered,.button.is-success:hover{background-color:#22c65b;border-color:transparent;color:#fff}.button.is-success.is-focused,.button.is-success:focus{border-color:transparent;color:#fff}.button.is-success.is-focused:not(:active),.button.is-success:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(35,209,96,.25);box-shadow:0 0 0 .125em rgba(35,209,96,.25)}.button.is-success.is-active,.button.is-success:active{background-color:#20bc56;border-color:transparent;color:#fff}.button.is-success[disabled],fieldset[disabled] .button.is-success{background-color:#23d160;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-success.is-inverted{background-color:#fff;color:#23d160}.button.is-success.is-inverted.is-hovered,.button.is-success.is-inverted:hover{background-color:#f2f2f2}.button.is-success.is-inverted[disabled],fieldset[disabled] .button.is-success.is-inverted{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#23d160}.button.is-success.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-success.is-outlined{background-color:transparent;border-color:#23d160;color:#23d160}.button.is-success.is-outlined.is-focused,.button.is-success.is-outlined.is-hovered,.button.is-success.is-outlined:focus,.button.is-success.is-outlined:hover{background-color:#23d160;border-color:#23d160;color:#fff}.button.is-success.is-outlined.is-loading:after{border-color:transparent transparent #23d160 #23d160!important}.button.is-success.is-outlined.is-loading.is-focused:after,.button.is-success.is-outlined.is-loading.is-hovered:after,.button.is-success.is-outlined.is-loading:focus:after,.button.is-success.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-success.is-outlined[disabled],fieldset[disabled] .button.is-success.is-outlined{background-color:transparent;border-color:#23d160;-webkit-box-shadow:none;box-shadow:none;color:#23d160}.button.is-success.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-success.is-inverted.is-outlined.is-focused,.button.is-success.is-inverted.is-outlined.is-hovered,.button.is-success.is-inverted.is-outlined:focus,.button.is-success.is-inverted.is-outlined:hover{background-color:#fff;color:#23d160}.button.is-success.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-success.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-success.is-inverted.is-outlined.is-loading:focus:after,.button.is-success.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #23d160 #23d160!important}.button.is-success.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-success.is-inverted.is-outlined{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-warning{background-color:#ffdd57;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-hovered,.button.is-warning:hover{background-color:#ffdb4a;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-focused,.button.is-warning:focus{border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-focused:not(:active),.button.is-warning:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(255,221,87,.25);box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.button.is-warning.is-active,.button.is-warning:active{background-color:#ffd83d;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning[disabled],fieldset[disabled] .button.is-warning{background-color:#ffdd57;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-warning.is-inverted{color:#ffdd57}.button.is-warning.is-inverted,.button.is-warning.is-inverted.is-hovered,.button.is-warning.is-inverted:hover{background-color:rgba(0,0,0,.7)}.button.is-warning.is-inverted[disabled],fieldset[disabled] .button.is-warning.is-inverted{background-color:rgba(0,0,0,.7);border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#ffdd57}.button.is-warning.is-loading:after{border-color:transparent transparent rgba(0,0,0,.7) rgba(0,0,0,.7)!important}.button.is-warning.is-outlined{background-color:transparent;border-color:#ffdd57;color:#ffdd57}.button.is-warning.is-outlined.is-focused,.button.is-warning.is-outlined.is-hovered,.button.is-warning.is-outlined:focus,.button.is-warning.is-outlined:hover{background-color:#ffdd57;border-color:#ffdd57;color:rgba(0,0,0,.7)}.button.is-warning.is-outlined.is-loading:after{border-color:transparent transparent #ffdd57 #ffdd57!important}.button.is-warning.is-outlined.is-loading.is-focused:after,.button.is-warning.is-outlined.is-loading.is-hovered:after,.button.is-warning.is-outlined.is-loading:focus:after,.button.is-warning.is-outlined.is-loading:hover:after{border-color:transparent transparent rgba(0,0,0,.7) rgba(0,0,0,.7)!important}.button.is-warning.is-outlined[disabled],fieldset[disabled] .button.is-warning.is-outlined{background-color:transparent;border-color:#ffdd57;-webkit-box-shadow:none;box-shadow:none;color:#ffdd57}.button.is-warning.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,.7);color:rgba(0,0,0,.7)}.button.is-warning.is-inverted.is-outlined.is-focused,.button.is-warning.is-inverted.is-outlined.is-hovered,.button.is-warning.is-inverted.is-outlined:focus,.button.is-warning.is-inverted.is-outlined:hover{background-color:rgba(0,0,0,.7);color:#ffdd57}.button.is-warning.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-warning.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-warning.is-inverted.is-outlined.is-loading:focus:after,.button.is-warning.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #ffdd57 #ffdd57!important}.button.is-warning.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-warning.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,.7);-webkit-box-shadow:none;box-shadow:none;color:rgba(0,0,0,.7)}.button.is-danger{background-color:#ff3860;border-color:transparent;color:#fff}.button.is-danger.is-hovered,.button.is-danger:hover{background-color:#ff2b56;border-color:transparent;color:#fff}.button.is-danger.is-focused,.button.is-danger:focus{border-color:transparent;color:#fff}.button.is-danger.is-focused:not(:active),.button.is-danger:focus:not(:active){-webkit-box-shadow:0 0 0 .125em rgba(255,56,96,.25);box-shadow:0 0 0 .125em rgba(255,56,96,.25)}.button.is-danger.is-active,.button.is-danger:active{background-color:#ff1f4b;border-color:transparent;color:#fff}.button.is-danger[disabled],fieldset[disabled] .button.is-danger{background-color:#ff3860;border-color:transparent;-webkit-box-shadow:none;box-shadow:none}.button.is-danger.is-inverted{background-color:#fff;color:#ff3860}.button.is-danger.is-inverted.is-hovered,.button.is-danger.is-inverted:hover{background-color:#f2f2f2}.button.is-danger.is-inverted[disabled],fieldset[disabled] .button.is-danger.is-inverted{background-color:#fff;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;color:#ff3860}.button.is-danger.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-danger.is-outlined{background-color:transparent;border-color:#ff3860;color:#ff3860}.button.is-danger.is-outlined.is-focused,.button.is-danger.is-outlined.is-hovered,.button.is-danger.is-outlined:focus,.button.is-danger.is-outlined:hover{background-color:#ff3860;border-color:#ff3860;color:#fff}.button.is-danger.is-outlined.is-loading:after{border-color:transparent transparent #ff3860 #ff3860!important}.button.is-danger.is-outlined.is-loading.is-focused:after,.button.is-danger.is-outlined.is-loading.is-hovered:after,.button.is-danger.is-outlined.is-loading:focus:after,.button.is-danger.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-danger.is-outlined[disabled],fieldset[disabled] .button.is-danger.is-outlined{background-color:transparent;border-color:#ff3860;-webkit-box-shadow:none;box-shadow:none;color:#ff3860}.button.is-danger.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-danger.is-inverted.is-outlined.is-focused,.button.is-danger.is-inverted.is-outlined.is-hovered,.button.is-danger.is-inverted.is-outlined:focus,.button.is-danger.is-inverted.is-outlined:hover{background-color:#fff;color:#ff3860}.button.is-danger.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-danger.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-danger.is-inverted.is-outlined.is-loading:focus:after,.button.is-danger.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #ff3860 #ff3860!important}.button.is-danger.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-danger.is-inverted.is-outlined{background-color:transparent;border-color:#fff;-webkit-box-shadow:none;box-shadow:none;color:#fff}.button.is-small{border-radius:2px;font-size:.75rem}.button.is-normal{font-size:1rem}.button.is-medium{font-size:1.25rem}.button.is-large{font-size:1.5rem}.button[disabled],fieldset[disabled] .button{background-color:#fff;border-color:#dbdbdb;-webkit-box-shadow:none;box-shadow:none;opacity:.5}.button.is-fullwidth{display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}.button.is-loading{color:transparent!important;pointer-events:none}.button.is-loading:after{position:absolute;left:calc(50% - .5em);top:calc(50% - .5em);position:absolute!important}.button.is-static{background-color:#f5f5f5;border-color:#dbdbdb;color:#7a7a7a;-webkit-box-shadow:none;box-shadow:none;pointer-events:none}.button.is-rounded{border-radius:290486px;padding-left:1em;padding-right:1em}.buttons{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.buttons .button{margin-bottom:.5rem}.buttons .button:not(:last-child):not(.is-fullwidth){margin-right:.5rem}.buttons:last-child{margin-bottom:-.5rem}.buttons:not(:last-child){margin-bottom:1rem}.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large){border-radius:2px;font-size:.75rem}.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large){font-size:1.25rem}.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium){font-size:1.5rem}.buttons.has-addons .button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.buttons.has-addons .button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.buttons.has-addons .button:last-child{margin-right:0}.buttons.has-addons .button.is-hovered,.buttons.has-addons .button:hover{z-index:2}.buttons.has-addons .button.is-active,.buttons.has-addons .button.is-focused,.buttons.has-addons .button.is-selected,.buttons.has-addons .button:active,.buttons.has-addons .button:focus{z-index:3}.buttons.has-addons .button.is-active:hover,.buttons.has-addons .button.is-focused:hover,.buttons.has-addons .button.is-selected:hover,.buttons.has-addons .button:active:hover,.buttons.has-addons .button:focus:hover{z-index:4}.buttons.has-addons .button.is-expanded{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.buttons.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth){margin-left:.25rem;margin-right:.25rem}.buttons.is-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.buttons.is-right:not(.has-addons) .button:not(.is-fullwidth){margin-left:.25rem;margin-right:.25rem}.container{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;margin:0 auto;position:relative;width:auto}@media screen and (min-width:1024px){.container{max-width:960px}.container.is-fluid{margin-left:32px;margin-right:32px;max-width:none}}@media screen and (max-width:1215px){.container.is-widescreen{max-width:1152px}}@media screen and (max-width:1407px){.container.is-fullhd{max-width:1344px}}@media screen and (min-width:1216px){.container{max-width:1152px}}@media screen and (min-width:1408px){.container{max-width:1344px}}.content li+li{margin-top:.25em}.content blockquote:not(:last-child),.content dl:not(:last-child),.content ol:not(:last-child),.content p:not(:last-child),.content pre:not(:last-child),.content table:not(:last-child),.content ul:not(:last-child){margin-bottom:1em}.content h1,.content h2,.content h3,.content h4,.content h5,.content h6{color:#363636;font-weight:600;line-height:1.125}.content h1{font-size:2em;margin-bottom:.5em}.content h1:not(:first-child){margin-top:1em}.content h2{font-size:1.75em;margin-bottom:.5714em}.content h2:not(:first-child){margin-top:1.1428em}.content h3{font-size:1.5em;margin-bottom:.6666em}.content h3:not(:first-child){margin-top:1.3333em}.content h4{font-size:1.25em;margin-bottom:.8em}.content h5{font-size:1.125em;margin-bottom:.8888em}.content h6{font-size:1em;margin-bottom:1em}.content blockquote{background-color:#f5f5f5;border-left:5px solid #dbdbdb;padding:1.25em 1.5em}.content ol{list-style-position:outside;margin-left:2em;margin-top:1em}.content ol:not([type]){list-style-type:decimal}.content ol:not([type]).is-lower-alpha{list-style-type:lower-alpha}.content ol:not([type]).is-lower-roman{list-style-type:lower-roman}.content ol:not([type]).is-upper-alpha{list-style-type:upper-alpha}.content ol:not([type]).is-upper-roman{list-style-type:upper-roman}.content ul{list-style:disc outside;margin-left:2em;margin-top:1em}.content ul ul{list-style-type:circle;margin-top:.5em}.content ul ul ul{list-style-type:square}.content dd{margin-left:2em}.content figure{margin-left:2em;margin-right:2em;text-align:center}.content figure:not(:first-child){margin-top:2em}.content figure:not(:last-child){margin-bottom:2em}.content figure img{display:inline-block}.content figure figcaption{font-style:italic}.content pre{-webkit-overflow-scrolling:touch;overflow-x:auto;padding:1.25em 1.5em;white-space:pre;word-wrap:normal}.content sub,.content sup{font-size:75%}.content table{width:100%}.content table td,.content table th{border:solid #dbdbdb;border-width:0 0 1px;padding:.5em .75em;vertical-align:top}.content table th{color:#363636}.content table th:not([align]){text-align:left}.content table thead td,.content table thead th{border-width:0 0 2px;color:#363636}.content table tfoot td,.content table tfoot th{border-width:2px 0 0;color:#363636}.content table tbody tr:last-child td,.content table tbody tr:last-child th{border-bottom-width:0}.content .tabs li+li{margin-top:0}.content.is-small{font-size:.75rem}.content.is-medium{font-size:1.25rem}.content.is-large{font-size:1.5rem}.icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;height:1.5rem;width:1.5rem}.icon.is-small{height:1rem;width:1rem}.icon.is-medium{height:2rem;width:2rem}.icon.is-large{height:3rem;width:3rem}.image{display:block;position:relative}.image img{display:block;height:auto;width:100%}.image img.is-rounded{border-radius:290486px}.image.is-1by1 .has-ratio,.image.is-1by1 img,.image.is-1by2 .has-ratio,.image.is-1by2 img,.image.is-1by3 .has-ratio,.image.is-1by3 img,.image.is-2by1 .has-ratio,.image.is-2by1 img,.image.is-2by3 .has-ratio,.image.is-2by3 img,.image.is-3by1 .has-ratio,.image.is-3by1 img,.image.is-3by2 .has-ratio,.image.is-3by2 img,.image.is-3by4 .has-ratio,.image.is-3by4 img,.image.is-3by5 .has-ratio,.image.is-3by5 img,.image.is-4by3 .has-ratio,.image.is-4by3 img,.image.is-4by5 .has-ratio,.image.is-4by5 img,.image.is-5by3 .has-ratio,.image.is-5by3 img,.image.is-5by4 .has-ratio,.image.is-5by4 img,.image.is-9by16 .has-ratio,.image.is-9by16 img,.image.is-16by9 .has-ratio,.image.is-16by9 img,.image.is-square .has-ratio,.image.is-square img{height:100%;width:100%}.image.is-1by1,.image.is-square{padding-top:100%}.image.is-5by4{padding-top:80%}.image.is-4by3{padding-top:75%}.image.is-3by2{padding-top:66.6666%}.image.is-5by3{padding-top:60%}.image.is-16by9{padding-top:56.25%}.image.is-2by1{padding-top:50%}.image.is-3by1{padding-top:33.3333%}.image.is-4by5{padding-top:125%}.image.is-3by4{padding-top:133.3333%}.image.is-2by3{padding-top:150%}.image.is-3by5{padding-top:166.6666%}.image.is-9by16{padding-top:177.7777%}.image.is-1by2{padding-top:200%}.image.is-1by3{padding-top:300%}.image.is-16x16{height:16px;width:16px}.image.is-24x24{height:24px;width:24px}.image.is-32x32{height:32px;width:32px}.image.is-48x48{height:48px;width:48px}.image.is-64x64{height:64px;width:64px}.image.is-96x96{height:96px;width:96px}.image.is-128x128{height:128px;width:128px}.notification{background-color:#f5f5f5;border-radius:4px;padding:1.25rem 2.5rem 1.25rem 1.5rem;position:relative}.notification a:not(.button):not(.dropdown-item){color:currentColor;text-decoration:underline}.notification strong{color:currentColor}.notification code,.notification pre{background:#fff}.notification pre code{background:transparent}.notification>.delete{position:absolute;right:.5rem;top:.5rem}.notification .content,.notification .subtitle,.notification .title{color:currentColor}.notification.is-white{background-color:#fff;color:#0a0a0a}.notification.is-black{background-color:#0a0a0a;color:#fff}.notification.is-light{background-color:#f5f5f5;color:#363636}.notification.is-dark{background-color:#363636;color:#f5f5f5}.notification.is-link,.notification.is-primary{background-color:#7957d5;color:#fff}.notification.is-info{background-color:#167df0;color:#fff}.notification.is-success{background-color:#23d160;color:#fff}.notification.is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.notification.is-danger{background-color:#ff3860;color:#fff}.progress{-moz-appearance:none;-webkit-appearance:none;border:none;border-radius:290486px;display:block;height:1rem;overflow:hidden;padding:0;width:100%}.progress::-webkit-progress-bar{background-color:#dbdbdb}.progress::-webkit-progress-value{background-color:#4a4a4a}.progress::-moz-progress-bar{background-color:#4a4a4a}.progress::-ms-fill{background-color:#4a4a4a;border:none}.progress.is-white::-webkit-progress-value{background-color:#fff}.progress.is-white::-moz-progress-bar{background-color:#fff}.progress.is-white::-ms-fill{background-color:#fff}.progress.is-white:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#fff),color-stop(30%,#dbdbdb));background-image:linear-gradient(90deg,#fff 30%,#dbdbdb 0)}.progress.is-black::-webkit-progress-value{background-color:#0a0a0a}.progress.is-black::-moz-progress-bar{background-color:#0a0a0a}.progress.is-black::-ms-fill{background-color:#0a0a0a}.progress.is-black:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#0a0a0a),color-stop(30%,#dbdbdb));background-image:linear-gradient(90deg,#0a0a0a 30%,#dbdbdb 0)}.progress.is-light::-webkit-progress-value{background-color:#f5f5f5}.progress.is-light::-moz-progress-bar{background-color:#f5f5f5}.progress.is-light::-ms-fill{background-color:#f5f5f5}.progress.is-light:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#f5f5f5),color-stop(30%,#dbdbdb));background-image:linear-gradient(90deg,#f5f5f5 30%,#dbdbdb 0)}.progress.is-dark::-webkit-progress-value{background-color:#363636}.progress.is-dark::-moz-progress-bar{background-color:#363636}.progress.is-dark::-ms-fill{background-color:#363636}.progress.is-dark:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#363636),color-stop(30%,#dbdbdb));background-image:linear-gradient(90deg,#363636 30%,#dbdbdb 0)}.progress.is-primary::-webkit-progress-value{background-color:#7957d5}.progress.is-primary::-moz-progress-bar{background-color:#7957d5}.progress.is-primary::-ms-fill{background-color:#7957d5}.progress.is-primary:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#7957d5),color-stop(30%,#dbdbdb));background-image:linear-gradient(90deg,#7957d5 30%,#dbdbdb 0)}.progress.is-link::-webkit-progress-value{background-color:#7957d5}.progress.is-link::-moz-progress-bar{background-color:#7957d5}.progress.is-link::-ms-fill{background-color:#7957d5}.progress.is-link:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#7957d5),color-stop(30%,#dbdbdb));background-image:linear-gradient(90deg,#7957d5 30%,#dbdbdb 0)}.progress.is-info::-webkit-progress-value{background-color:#167df0}.progress.is-info::-moz-progress-bar{background-color:#167df0}.progress.is-info::-ms-fill{background-color:#167df0}.progress.is-info:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#167df0),color-stop(30%,#dbdbdb));background-image:linear-gradient(90deg,#167df0 30%,#dbdbdb 0)}.progress.is-success::-webkit-progress-value{background-color:#23d160}.progress.is-success::-moz-progress-bar{background-color:#23d160}.progress.is-success::-ms-fill{background-color:#23d160}.progress.is-success:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#23d160),color-stop(30%,#dbdbdb));background-image:linear-gradient(90deg,#23d160 30%,#dbdbdb 0)}.progress.is-warning::-webkit-progress-value{background-color:#ffdd57}.progress.is-warning::-moz-progress-bar{background-color:#ffdd57}.progress.is-warning::-ms-fill{background-color:#ffdd57}.progress.is-warning:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#ffdd57),color-stop(30%,#dbdbdb));background-image:linear-gradient(90deg,#ffdd57 30%,#dbdbdb 0)}.progress.is-danger::-webkit-progress-value{background-color:#ff3860}.progress.is-danger::-moz-progress-bar{background-color:#ff3860}.progress.is-danger::-ms-fill{background-color:#ff3860}.progress.is-danger:indeterminate{background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#ff3860),color-stop(30%,#dbdbdb));background-image:linear-gradient(90deg,#ff3860 30%,#dbdbdb 0)}.progress:indeterminate{-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:moveIndeterminate;animation-name:moveIndeterminate;-webkit-animation-timing-function:linear;animation-timing-function:linear;background-color:#dbdbdb;background-image:-webkit-gradient(linear,left top,right top,color-stop(30%,#4a4a4a),color-stop(30%,#dbdbdb));background-image:linear-gradient(90deg,#4a4a4a 30%,#dbdbdb 0);background-position:0 0;background-repeat:no-repeat;background-size:150% 150%}.progress:indeterminate::-webkit-progress-bar{background-color:transparent}.progress:indeterminate::-moz-progress-bar{background-color:transparent}.progress.is-small{height:.75rem}.progress.is-medium{height:1.25rem}.progress.is-large{height:1.5rem}@-webkit-keyframes moveIndeterminate{0%{background-position:200% 0}to{background-position:-200% 0}}@keyframes moveIndeterminate{0%{background-position:200% 0}to{background-position:-200% 0}}.table{background-color:#fff;color:#363636}.table td,.table th{border:solid #dbdbdb;border-width:0 0 1px;padding:.5em .75em;vertical-align:top}.table td.is-white,.table th.is-white{background-color:#fff;border-color:#fff;color:#0a0a0a}.table td.is-black,.table th.is-black{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.table td.is-light,.table th.is-light{background-color:#f5f5f5;border-color:#f5f5f5;color:#363636}.table td.is-dark,.table th.is-dark{background-color:#363636;border-color:#363636;color:#f5f5f5}.table td.is-link,.table td.is-primary,.table th.is-link,.table th.is-primary{background-color:#7957d5;border-color:#7957d5;color:#fff}.table td.is-info,.table th.is-info{background-color:#167df0;border-color:#167df0;color:#fff}.table td.is-success,.table th.is-success{background-color:#23d160;border-color:#23d160;color:#fff}.table td.is-warning,.table th.is-warning{background-color:#ffdd57;border-color:#ffdd57;color:rgba(0,0,0,.7)}.table td.is-danger,.table th.is-danger{background-color:#ff3860;border-color:#ff3860;color:#fff}.table td.is-narrow,.table th.is-narrow{white-space:nowrap;width:1%}.table td.is-selected,.table th.is-selected{background-color:#7957d5;color:#fff}.table td.is-selected a,.table td.is-selected strong,.table th.is-selected a,.table th.is-selected strong{color:currentColor}.table th{color:#363636}.table th:not([align]){text-align:left}.table tr.is-selected{background-color:#7957d5;color:#fff}.table tr.is-selected a,.table tr.is-selected strong{color:currentColor}.table tr.is-selected td,.table tr.is-selected th{border-color:#fff;color:currentColor}.table thead{background-color:transparent}.table thead td,.table thead th{border-width:0 0 2px;color:#363636}.table tfoot{background-color:transparent}.table tfoot td,.table tfoot th{border-width:2px 0 0;color:#363636}.table tbody{background-color:transparent}.table tbody tr:last-child td,.table tbody tr:last-child th{border-bottom-width:0}.table.is-bordered td,.table.is-bordered th{border-width:1px}.table.is-bordered tr:last-child td,.table.is-bordered tr:last-child th{border-bottom-width:1px}.table.is-fullwidth{width:100%}.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover,.table.is-hoverable tbody tr:not(.is-selected):hover{background-color:#fafafa}.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(2n){background-color:#f5f5f5}.table.is-narrow td,.table.is-narrow th{padding:.25em .5em}.table.is-striped tbody tr:not(.is-selected):nth-child(2n){background-color:#fafafa}.table-container{-webkit-overflow-scrolling:touch;overflow:auto;overflow-y:hidden;max-width:100%}.tags{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.tags .tag{margin-bottom:.5rem}.tags .tag:not(:last-child){margin-right:.5rem}.tags:last-child{margin-bottom:-.5rem}.tags:not(:last-child){margin-bottom:1rem}.tags.are-medium .tag:not(.is-normal):not(.is-large){font-size:1rem}.tags.are-large .tag:not(.is-normal):not(.is-medium){font-size:1.25rem}.tags.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.tags.is-centered .tag{margin-right:.25rem;margin-left:.25rem}.tags.is-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.tags.is-right .tag:not(:first-child){margin-left:.5rem}.tags.has-addons .tag,.tags.is-right .tag:not(:last-child){margin-right:0}.tags.has-addons .tag:not(:first-child){margin-left:0;border-bottom-left-radius:0;border-top-left-radius:0}.tags.has-addons .tag:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.tag:not(body){-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#f5f5f5;border-radius:4px;color:#4a4a4a;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:.75rem;height:2em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;line-height:1.5;padding-left:.75em;padding-right:.75em;white-space:nowrap}.tag:not(body) .delete{margin-left:.25rem;margin-right:-.375rem}.tag:not(body).is-white{background-color:#fff;color:#0a0a0a}.tag:not(body).is-black{background-color:#0a0a0a;color:#fff}.tag:not(body).is-light{background-color:#f5f5f5;color:#363636}.tag:not(body).is-dark{background-color:#363636;color:#f5f5f5}.tag:not(body).is-link,.tag:not(body).is-primary{background-color:#7957d5;color:#fff}.tag:not(body).is-info{background-color:#167df0;color:#fff}.tag:not(body).is-success{background-color:#23d160;color:#fff}.tag:not(body).is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.tag:not(body).is-danger{background-color:#ff3860;color:#fff}.tag:not(body).is-normal{font-size:.75rem}.tag:not(body).is-medium{font-size:1rem}.tag:not(body).is-large{font-size:1.25rem}.tag:not(body) .icon:first-child:not(:last-child){margin-left:-.375em;margin-right:.1875em}.tag:not(body) .icon:last-child:not(:first-child){margin-left:.1875em;margin-right:-.375em}.tag:not(body) .icon:first-child:last-child{margin-left:-.375em;margin-right:-.375em}.tag:not(body).is-delete{margin-left:1px;padding:0;position:relative;width:2em}.tag:not(body).is-delete:after,.tag:not(body).is-delete:before{background-color:currentColor;content:\"\";display:block;left:50%;position:absolute;top:50%;-webkit-transform:translateX(-50%) translateY(-50%) rotate(45deg);transform:translateX(-50%) translateY(-50%) rotate(45deg);-webkit-transform-origin:center center;transform-origin:center center}.tag:not(body).is-delete:before{height:1px;width:50%}.tag:not(body).is-delete:after{height:50%;width:1px}.tag:not(body).is-delete:focus,.tag:not(body).is-delete:hover{background-color:#e8e8e8}.tag:not(body).is-delete:active{background-color:#dbdbdb}.tag:not(body).is-rounded{border-radius:290486px}a.tag:hover{text-decoration:underline}.subtitle,.title{word-break:break-word}.subtitle em,.subtitle span,.title em,.title span{font-weight:inherit}.subtitle sub,.subtitle sup,.title sub,.title sup{font-size:.75em}.subtitle .tag,.title .tag{vertical-align:middle}.title{color:#363636;font-size:2rem;font-weight:600;line-height:1.125}.title strong{color:inherit;font-weight:inherit}.title+.highlight{margin-top:-.75rem}.title:not(.is-spaced)+.subtitle{margin-top:-1.25rem}.title.is-1{font-size:3rem}.title.is-2{font-size:2.5rem}.title.is-3{font-size:2rem}.title.is-4{font-size:1.5rem}.title.is-5{font-size:1.25rem}.title.is-6{font-size:1rem}.title.is-7{font-size:.75rem}.subtitle{color:#4a4a4a;font-size:1.25rem;font-weight:400;line-height:1.25}.subtitle strong{color:#363636;font-weight:600}.subtitle:not(.is-spaced)+.title{margin-top:-1.25rem}.subtitle.is-1{font-size:3rem}.subtitle.is-2{font-size:2.5rem}.subtitle.is-3{font-size:2rem}.subtitle.is-4{font-size:1.5rem}.subtitle.is-5{font-size:1.25rem}.subtitle.is-6{font-size:1rem}.subtitle.is-7{font-size:.75rem}.heading{display:block;font-size:11px;letter-spacing:1px;margin-bottom:5px;text-transform:uppercase}.highlight{font-weight:400;max-width:100%;overflow:hidden;padding:0}.highlight pre{overflow:auto;max-width:100%}.number{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#f5f5f5;border-radius:290486px;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;font-size:1.25rem;height:2em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:1.5rem;min-width:2.5em;padding:.25rem .5rem;text-align:center;vertical-align:top}.input,.select select,.taginput .taginput-container.is-focusable,.textarea{background-color:#fff;border-color:#dbdbdb;border-radius:4px;color:#363636}.input::-moz-placeholder,.select select::-moz-placeholder,.taginput .taginput-container.is-focusable::-moz-placeholder,.textarea::-moz-placeholder{color:rgba(54,54,54,.3)}.input::-webkit-input-placeholder,.select select::-webkit-input-placeholder,.taginput .taginput-container.is-focusable::-webkit-input-placeholder,.textarea::-webkit-input-placeholder{color:rgba(54,54,54,.3)}.input:-moz-placeholder,.select select:-moz-placeholder,.taginput .taginput-container.is-focusable:-moz-placeholder,.textarea:-moz-placeholder{color:rgba(54,54,54,.3)}.input:-ms-input-placeholder,.select select:-ms-input-placeholder,.taginput .taginput-container.is-focusable:-ms-input-placeholder,.textarea:-ms-input-placeholder{color:rgba(54,54,54,.3)}.input:hover,.is-hovered.input,.is-hovered.textarea,.select select.is-hovered,.select select:hover,.taginput .is-hovered.taginput-container.is-focusable,.taginput .taginput-container.is-focusable:hover,.textarea:hover{border-color:#b5b5b5}.input:active,.input:focus,.is-active.input,.is-active.textarea,.is-focused.input,.is-focused.textarea,.select select.is-active,.select select.is-focused,.select select:active,.select select:focus,.taginput .is-active.taginput-container.is-focusable,.taginput .is-focused.taginput-container.is-focusable,.taginput .taginput-container.is-focusable:active,.taginput .taginput-container.is-focusable:focus,.textarea:active,.textarea:focus{border-color:#7957d5;-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.input[disabled],.select fieldset[disabled] select,.select select[disabled],.taginput .taginput-container.is-focusable[disabled],.taginput fieldset[disabled] .taginput-container.is-focusable,.textarea[disabled],fieldset[disabled] .input,fieldset[disabled] .select select,fieldset[disabled] .taginput .taginput-container.is-focusable,fieldset[disabled] .textarea{background-color:#f5f5f5;border-color:#f5f5f5;-webkit-box-shadow:none;box-shadow:none;color:#7a7a7a}.input[disabled]::-moz-placeholder,.select fieldset[disabled] select::-moz-placeholder,.select select[disabled]::-moz-placeholder,.taginput .taginput-container.is-focusable[disabled]::-moz-placeholder,.taginput fieldset[disabled] .taginput-container.is-focusable::-moz-placeholder,.textarea[disabled]::-moz-placeholder,fieldset[disabled] .input::-moz-placeholder,fieldset[disabled] .select select::-moz-placeholder,fieldset[disabled] .taginput .taginput-container.is-focusable::-moz-placeholder,fieldset[disabled] .textarea::-moz-placeholder{color:hsla(0,0%,47.8%,.3)}.input[disabled]::-webkit-input-placeholder,.select fieldset[disabled] select::-webkit-input-placeholder,.select select[disabled]::-webkit-input-placeholder,.taginput .taginput-container.is-focusable[disabled]::-webkit-input-placeholder,.taginput fieldset[disabled] .taginput-container.is-focusable::-webkit-input-placeholder,.textarea[disabled]::-webkit-input-placeholder,fieldset[disabled] .input::-webkit-input-placeholder,fieldset[disabled] .select select::-webkit-input-placeholder,fieldset[disabled] .taginput .taginput-container.is-focusable::-webkit-input-placeholder,fieldset[disabled] .textarea::-webkit-input-placeholder{color:hsla(0,0%,47.8%,.3)}.input[disabled]:-moz-placeholder,.select fieldset[disabled] select:-moz-placeholder,.select select[disabled]:-moz-placeholder,.taginput .taginput-container.is-focusable[disabled]:-moz-placeholder,.taginput fieldset[disabled] .taginput-container.is-focusable:-moz-placeholder,.textarea[disabled]:-moz-placeholder,fieldset[disabled] .input:-moz-placeholder,fieldset[disabled] .select select:-moz-placeholder,fieldset[disabled] .taginput .taginput-container.is-focusable:-moz-placeholder,fieldset[disabled] .textarea:-moz-placeholder{color:hsla(0,0%,47.8%,.3)}.input[disabled]:-ms-input-placeholder,.select fieldset[disabled] select:-ms-input-placeholder,.select select[disabled]:-ms-input-placeholder,.taginput .taginput-container.is-focusable[disabled]:-ms-input-placeholder,.taginput fieldset[disabled] .taginput-container.is-focusable:-ms-input-placeholder,.textarea[disabled]:-ms-input-placeholder,fieldset[disabled] .input:-ms-input-placeholder,fieldset[disabled] .select select:-ms-input-placeholder,fieldset[disabled] .taginput .taginput-container.is-focusable:-ms-input-placeholder,fieldset[disabled] .textarea:-ms-input-placeholder{color:hsla(0,0%,47.8%,.3)}.input,.taginput .taginput-container.is-focusable,.textarea{-webkit-box-shadow:inset 0 1px 2px rgba(10,10,10,.1);box-shadow:inset 0 1px 2px rgba(10,10,10,.1);max-width:100%;width:100%}.input[readonly],.taginput .taginput-container.is-focusable[readonly],.textarea[readonly]{-webkit-box-shadow:none;box-shadow:none}.is-white.input,.is-white.textarea,.taginput .is-white.taginput-container.is-focusable{border-color:#fff}.is-white.input:active,.is-white.input:focus,.is-white.is-active.input,.is-white.is-active.textarea,.is-white.is-focused.input,.is-white.is-focused.textarea,.is-white.textarea:active,.is-white.textarea:focus,.taginput .is-white.is-active.taginput-container.is-focusable,.taginput .is-white.is-focused.taginput-container.is-focusable,.taginput .is-white.taginput-container.is-focusable:active,.taginput .is-white.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em hsla(0,0%,100%,.25);box-shadow:0 0 0 .125em hsla(0,0%,100%,.25)}.is-black.input,.is-black.textarea,.taginput .is-black.taginput-container.is-focusable{border-color:#0a0a0a}.is-black.input:active,.is-black.input:focus,.is-black.is-active.input,.is-black.is-active.textarea,.is-black.is-focused.input,.is-black.is-focused.textarea,.is-black.textarea:active,.is-black.textarea:focus,.taginput .is-black.is-active.taginput-container.is-focusable,.taginput .is-black.is-focused.taginput-container.is-focusable,.taginput .is-black.taginput-container.is-focusable:active,.taginput .is-black.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em rgba(10,10,10,.25);box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.is-light.input,.is-light.textarea,.taginput .is-light.taginput-container.is-focusable{border-color:#f5f5f5}.is-light.input:active,.is-light.input:focus,.is-light.is-active.input,.is-light.is-active.textarea,.is-light.is-focused.input,.is-light.is-focused.textarea,.is-light.textarea:active,.is-light.textarea:focus,.taginput .is-light.is-active.taginput-container.is-focusable,.taginput .is-light.is-focused.taginput-container.is-focusable,.taginput .is-light.taginput-container.is-focusable:active,.taginput .is-light.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em hsla(0,0%,96.1%,.25);box-shadow:0 0 0 .125em hsla(0,0%,96.1%,.25)}.is-dark.input,.is-dark.textarea,.taginput .is-dark.taginput-container.is-focusable{border-color:#363636}.is-dark.input:active,.is-dark.input:focus,.is-dark.is-active.input,.is-dark.is-active.textarea,.is-dark.is-focused.input,.is-dark.is-focused.textarea,.is-dark.textarea:active,.is-dark.textarea:focus,.taginput .is-dark.is-active.taginput-container.is-focusable,.taginput .is-dark.is-focused.taginput-container.is-focusable,.taginput .is-dark.taginput-container.is-focusable:active,.taginput .is-dark.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em rgba(54,54,54,.25);box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.is-primary.input,.is-primary.textarea,.taginput .is-primary.taginput-container.is-focusable{border-color:#7957d5}.is-primary.input:active,.is-primary.input:focus,.is-primary.is-active.input,.is-primary.is-active.textarea,.is-primary.is-focused.input,.is-primary.is-focused.textarea,.is-primary.textarea:active,.is-primary.textarea:focus,.taginput .is-primary.is-active.taginput-container.is-focusable,.taginput .is-primary.is-focused.taginput-container.is-focusable,.taginput .is-primary.taginput-container.is-focusable:active,.taginput .is-primary.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.is-link.input,.is-link.textarea,.taginput .is-link.taginput-container.is-focusable{border-color:#7957d5}.is-link.input:active,.is-link.input:focus,.is-link.is-active.input,.is-link.is-active.textarea,.is-link.is-focused.input,.is-link.is-focused.textarea,.is-link.textarea:active,.is-link.textarea:focus,.taginput .is-link.is-active.taginput-container.is-focusable,.taginput .is-link.is-focused.taginput-container.is-focusable,.taginput .is-link.taginput-container.is-focusable:active,.taginput .is-link.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.is-info.input,.is-info.textarea,.taginput .is-info.taginput-container.is-focusable{border-color:#167df0}.is-info.input:active,.is-info.input:focus,.is-info.is-active.input,.is-info.is-active.textarea,.is-info.is-focused.input,.is-info.is-focused.textarea,.is-info.textarea:active,.is-info.textarea:focus,.taginput .is-info.is-active.taginput-container.is-focusable,.taginput .is-info.is-focused.taginput-container.is-focusable,.taginput .is-info.taginput-container.is-focusable:active,.taginput .is-info.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em rgba(22,125,240,.25);box-shadow:0 0 0 .125em rgba(22,125,240,.25)}.is-success.input,.is-success.textarea,.taginput .is-success.taginput-container.is-focusable{border-color:#23d160}.is-success.input:active,.is-success.input:focus,.is-success.is-active.input,.is-success.is-active.textarea,.is-success.is-focused.input,.is-success.is-focused.textarea,.is-success.textarea:active,.is-success.textarea:focus,.taginput .is-success.is-active.taginput-container.is-focusable,.taginput .is-success.is-focused.taginput-container.is-focusable,.taginput .is-success.taginput-container.is-focusable:active,.taginput .is-success.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em rgba(35,209,96,.25);box-shadow:0 0 0 .125em rgba(35,209,96,.25)}.is-warning.input,.is-warning.textarea,.taginput .is-warning.taginput-container.is-focusable{border-color:#ffdd57}.is-warning.input:active,.is-warning.input:focus,.is-warning.is-active.input,.is-warning.is-active.textarea,.is-warning.is-focused.input,.is-warning.is-focused.textarea,.is-warning.textarea:active,.is-warning.textarea:focus,.taginput .is-warning.is-active.taginput-container.is-focusable,.taginput .is-warning.is-focused.taginput-container.is-focusable,.taginput .is-warning.taginput-container.is-focusable:active,.taginput .is-warning.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em rgba(255,221,87,.25);box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.is-danger.input,.is-danger.textarea,.taginput .is-danger.taginput-container.is-focusable{border-color:#ff3860}.is-danger.input:active,.is-danger.input:focus,.is-danger.is-active.input,.is-danger.is-active.textarea,.is-danger.is-focused.input,.is-danger.is-focused.textarea,.is-danger.textarea:active,.is-danger.textarea:focus,.taginput .is-danger.is-active.taginput-container.is-focusable,.taginput .is-danger.is-focused.taginput-container.is-focusable,.taginput .is-danger.taginput-container.is-focusable:active,.taginput .is-danger.taginput-container.is-focusable:focus{-webkit-box-shadow:0 0 0 .125em rgba(255,56,96,.25);box-shadow:0 0 0 .125em rgba(255,56,96,.25)}.is-small.input,.is-small.textarea,.taginput .is-small.taginput-container.is-focusable{border-radius:2px;font-size:.75rem}.is-medium.input,.is-medium.textarea,.taginput .is-medium.taginput-container.is-focusable{font-size:1.25rem}.is-large.input,.is-large.textarea,.taginput .is-large.taginput-container.is-focusable{font-size:1.5rem}.is-fullwidth.input,.is-fullwidth.textarea,.taginput .is-fullwidth.taginput-container.is-focusable{display:block;width:100%}.is-inline.input,.is-inline.textarea,.taginput .is-inline.taginput-container.is-focusable{display:inline;width:auto}.input.is-rounded,.taginput .is-rounded.taginput-container.is-focusable{border-radius:290486px;padding-left:1em;padding-right:1em}.input.is-static,.taginput .is-static.taginput-container.is-focusable{background-color:transparent;border-color:transparent;-webkit-box-shadow:none;box-shadow:none;padding-left:0;padding-right:0}.textarea{display:block;max-width:100%;min-width:100%;padding:.625em;resize:vertical}.textarea:not([rows]){max-height:600px;min-height:120px}.textarea[rows]{height:auto}.textarea.has-fixed-size{resize:none}.checkbox,.radio{cursor:pointer;display:inline-block;line-height:1.25;position:relative}.checkbox input,.radio input{cursor:pointer}.checkbox:hover,.radio:hover{color:#363636}.checkbox[disabled],.radio[disabled],fieldset[disabled] .checkbox,fieldset[disabled] .radio{color:#7a7a7a;cursor:not-allowed}.radio+.radio{margin-left:.5em}.select{display:inline-block;max-width:100%;position:relative;vertical-align:top}.select:not(.is-multiple){height:2.25em}.select:not(.is-multiple):not(.is-loading):after{border-color:#7957d5;right:1.125em;z-index:4}.select.is-rounded select{border-radius:290486px;padding-left:1em}.select select{cursor:pointer;display:block;font-size:1em;max-width:100%;outline:none}.select select::-ms-expand{display:none}.select select[disabled]:hover,fieldset[disabled] .select select:hover{border-color:#f5f5f5}.select select:not([multiple]){padding-right:2.5em}.select select[multiple]{height:auto;padding:0}.select select[multiple] option{padding:.5em 1em}.select:not(.is-multiple):not(.is-loading):hover:after{border-color:#363636}.select.is-white:not(:hover):after,.select.is-white select{border-color:#fff}.select.is-white select.is-hovered,.select.is-white select:hover{border-color:#f2f2f2}.select.is-white select.is-active,.select.is-white select.is-focused,.select.is-white select:active,.select.is-white select:focus{-webkit-box-shadow:0 0 0 .125em hsla(0,0%,100%,.25);box-shadow:0 0 0 .125em hsla(0,0%,100%,.25)}.select.is-black:not(:hover):after,.select.is-black select{border-color:#0a0a0a}.select.is-black select.is-hovered,.select.is-black select:hover{border-color:#000}.select.is-black select.is-active,.select.is-black select.is-focused,.select.is-black select:active,.select.is-black select:focus{-webkit-box-shadow:0 0 0 .125em rgba(10,10,10,.25);box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.select.is-light:not(:hover):after,.select.is-light select{border-color:#f5f5f5}.select.is-light select.is-hovered,.select.is-light select:hover{border-color:#e8e8e8}.select.is-light select.is-active,.select.is-light select.is-focused,.select.is-light select:active,.select.is-light select:focus{-webkit-box-shadow:0 0 0 .125em hsla(0,0%,96.1%,.25);box-shadow:0 0 0 .125em hsla(0,0%,96.1%,.25)}.select.is-dark:not(:hover):after,.select.is-dark select{border-color:#363636}.select.is-dark select.is-hovered,.select.is-dark select:hover{border-color:#292929}.select.is-dark select.is-active,.select.is-dark select.is-focused,.select.is-dark select:active,.select.is-dark select:focus{-webkit-box-shadow:0 0 0 .125em rgba(54,54,54,.25);box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.select.is-primary:not(:hover):after,.select.is-primary select{border-color:#7957d5}.select.is-primary select.is-hovered,.select.is-primary select:hover{border-color:#6943d0}.select.is-primary select.is-active,.select.is-primary select.is-focused,.select.is-primary select:active,.select.is-primary select:focus{-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.select.is-link:not(:hover):after,.select.is-link select{border-color:#7957d5}.select.is-link select.is-hovered,.select.is-link select:hover{border-color:#6943d0}.select.is-link select.is-active,.select.is-link select.is-focused,.select.is-link select:active,.select.is-link select:focus{-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.select.is-info:not(:hover):after,.select.is-info select{border-color:#167df0}.select.is-info select.is-hovered,.select.is-info select:hover{border-color:#0e71de}.select.is-info select.is-active,.select.is-info select.is-focused,.select.is-info select:active,.select.is-info select:focus{-webkit-box-shadow:0 0 0 .125em rgba(22,125,240,.25);box-shadow:0 0 0 .125em rgba(22,125,240,.25)}.select.is-success:not(:hover):after,.select.is-success select{border-color:#23d160}.select.is-success select.is-hovered,.select.is-success select:hover{border-color:#20bc56}.select.is-success select.is-active,.select.is-success select.is-focused,.select.is-success select:active,.select.is-success select:focus{-webkit-box-shadow:0 0 0 .125em rgba(35,209,96,.25);box-shadow:0 0 0 .125em rgba(35,209,96,.25)}.select.is-warning:not(:hover):after,.select.is-warning select{border-color:#ffdd57}.select.is-warning select.is-hovered,.select.is-warning select:hover{border-color:#ffd83d}.select.is-warning select.is-active,.select.is-warning select.is-focused,.select.is-warning select:active,.select.is-warning select:focus{-webkit-box-shadow:0 0 0 .125em rgba(255,221,87,.25);box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.select.is-danger:not(:hover):after,.select.is-danger select{border-color:#ff3860}.select.is-danger select.is-hovered,.select.is-danger select:hover{border-color:#ff1f4b}.select.is-danger select.is-active,.select.is-danger select.is-focused,.select.is-danger select:active,.select.is-danger select:focus{-webkit-box-shadow:0 0 0 .125em rgba(255,56,96,.25);box-shadow:0 0 0 .125em rgba(255,56,96,.25)}.select.is-small{border-radius:2px;font-size:.75rem}.select.is-medium{font-size:1.25rem}.select.is-large{font-size:1.5rem}.select.is-disabled:after{border-color:#7a7a7a}.select.is-fullwidth,.select.is-fullwidth select{width:100%}.select.is-loading:after{margin-top:0;position:absolute;right:.625em;top:.625em;-webkit-transform:none;transform:none}.select.is-loading.is-small:after{font-size:.75rem}.select.is-loading.is-medium:after{font-size:1.25rem}.select.is-loading.is-large:after{font-size:1.5rem}.file{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;position:relative}.file.is-white .file-cta{background-color:#fff;border-color:transparent;color:#0a0a0a}.file.is-white.is-hovered .file-cta,.file.is-white:hover .file-cta{background-color:#f9f9f9;border-color:transparent;color:#0a0a0a}.file.is-white.is-focused .file-cta,.file.is-white:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em hsla(0,0%,100%,.25);box-shadow:0 0 .5em hsla(0,0%,100%,.25);color:#0a0a0a}.file.is-white.is-active .file-cta,.file.is-white:active .file-cta{background-color:#f2f2f2;border-color:transparent;color:#0a0a0a}.file.is-black .file-cta{background-color:#0a0a0a;border-color:transparent;color:#fff}.file.is-black.is-hovered .file-cta,.file.is-black:hover .file-cta{background-color:#040404;border-color:transparent;color:#fff}.file.is-black.is-focused .file-cta,.file.is-black:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(10,10,10,.25);box-shadow:0 0 .5em rgba(10,10,10,.25);color:#fff}.file.is-black.is-active .file-cta,.file.is-black:active .file-cta{background-color:#000;border-color:transparent;color:#fff}.file.is-light .file-cta{background-color:#f5f5f5;border-color:transparent;color:#363636}.file.is-light.is-hovered .file-cta,.file.is-light:hover .file-cta{background-color:#eee;border-color:transparent;color:#363636}.file.is-light.is-focused .file-cta,.file.is-light:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em hsla(0,0%,96.1%,.25);box-shadow:0 0 .5em hsla(0,0%,96.1%,.25);color:#363636}.file.is-light.is-active .file-cta,.file.is-light:active .file-cta{background-color:#e8e8e8;border-color:transparent;color:#363636}.file.is-dark .file-cta{background-color:#363636;border-color:transparent;color:#f5f5f5}.file.is-dark.is-hovered .file-cta,.file.is-dark:hover .file-cta{background-color:#2f2f2f;border-color:transparent;color:#f5f5f5}.file.is-dark.is-focused .file-cta,.file.is-dark:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(54,54,54,.25);box-shadow:0 0 .5em rgba(54,54,54,.25);color:#f5f5f5}.file.is-dark.is-active .file-cta,.file.is-dark:active .file-cta{background-color:#292929;border-color:transparent;color:#f5f5f5}.file.is-primary .file-cta{background-color:#7957d5;border-color:transparent;color:#fff}.file.is-primary.is-hovered .file-cta,.file.is-primary:hover .file-cta{background-color:#714dd2;border-color:transparent;color:#fff}.file.is-primary.is-focused .file-cta,.file.is-primary:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(121,87,213,.25);box-shadow:0 0 .5em rgba(121,87,213,.25);color:#fff}.file.is-primary.is-active .file-cta,.file.is-primary:active .file-cta{background-color:#6943d0;border-color:transparent;color:#fff}.file.is-link .file-cta{background-color:#7957d5;border-color:transparent;color:#fff}.file.is-link.is-hovered .file-cta,.file.is-link:hover .file-cta{background-color:#714dd2;border-color:transparent;color:#fff}.file.is-link.is-focused .file-cta,.file.is-link:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(121,87,213,.25);box-shadow:0 0 .5em rgba(121,87,213,.25);color:#fff}.file.is-link.is-active .file-cta,.file.is-link:active .file-cta{background-color:#6943d0;border-color:transparent;color:#fff}.file.is-info .file-cta{background-color:#167df0;border-color:transparent;color:#fff}.file.is-info.is-hovered .file-cta,.file.is-info:hover .file-cta{background-color:#0f77ea;border-color:transparent;color:#fff}.file.is-info.is-focused .file-cta,.file.is-info:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(22,125,240,.25);box-shadow:0 0 .5em rgba(22,125,240,.25);color:#fff}.file.is-info.is-active .file-cta,.file.is-info:active .file-cta{background-color:#0e71de;border-color:transparent;color:#fff}.file.is-success .file-cta{background-color:#23d160;border-color:transparent;color:#fff}.file.is-success.is-hovered .file-cta,.file.is-success:hover .file-cta{background-color:#22c65b;border-color:transparent;color:#fff}.file.is-success.is-focused .file-cta,.file.is-success:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(35,209,96,.25);box-shadow:0 0 .5em rgba(35,209,96,.25);color:#fff}.file.is-success.is-active .file-cta,.file.is-success:active .file-cta{background-color:#20bc56;border-color:transparent;color:#fff}.file.is-warning .file-cta{background-color:#ffdd57;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-warning.is-hovered .file-cta,.file.is-warning:hover .file-cta{background-color:#ffdb4a;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-warning.is-focused .file-cta,.file.is-warning:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(255,221,87,.25);box-shadow:0 0 .5em rgba(255,221,87,.25);color:rgba(0,0,0,.7)}.file.is-warning.is-active .file-cta,.file.is-warning:active .file-cta{background-color:#ffd83d;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-danger .file-cta{background-color:#ff3860;border-color:transparent;color:#fff}.file.is-danger.is-hovered .file-cta,.file.is-danger:hover .file-cta{background-color:#ff2b56;border-color:transparent;color:#fff}.file.is-danger.is-focused .file-cta,.file.is-danger:focus .file-cta{border-color:transparent;-webkit-box-shadow:0 0 .5em rgba(255,56,96,.25);box-shadow:0 0 .5em rgba(255,56,96,.25);color:#fff}.file.is-danger.is-active .file-cta,.file.is-danger:active .file-cta{background-color:#ff1f4b;border-color:transparent;color:#fff}.file.is-small{font-size:.75rem}.file.is-medium{font-size:1.25rem}.file.is-medium .file-icon .fa{font-size:21px}.file.is-large{font-size:1.5rem}.file.is-large .file-icon .fa{font-size:28px}.file.has-name .file-cta{border-bottom-right-radius:0;border-top-right-radius:0}.file.has-name .file-name{border-bottom-left-radius:0;border-top-left-radius:0}.file.has-name.is-empty .file-cta{border-radius:4px}.file.has-name.is-empty .file-name{display:none}.file.is-boxed .file-cta,.file.is-boxed .file-label{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.file.is-boxed .file-cta{height:auto;padding:1em 3em}.file.is-boxed .file-name{border-width:0 1px 1px}.file.is-boxed .file-icon{height:1.5em;width:1.5em}.file.is-boxed .file-icon .fa{font-size:21px}.file.is-boxed.is-small .file-icon .fa{font-size:14px}.file.is-boxed.is-medium .file-icon .fa{font-size:28px}.file.is-boxed.is-large .file-icon .fa{font-size:35px}.file.is-boxed.has-name .file-cta{border-radius:4px 4px 0 0}.file.is-boxed.has-name .file-name{border-radius:0 0 4px 4px;border-width:0 1px 1px}.file.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.file.is-fullwidth .file-label{width:100%}.file.is-fullwidth .file-name{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;max-width:none}.file.is-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.file.is-right .file-cta{border-radius:0 4px 4px 0}.file.is-right .file-name{border-radius:4px 0 0 4px;border-width:1px 0 1px 1px;-webkit-box-ordinal-group:0;-ms-flex-order:-1;order:-1}.file-label{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;cursor:pointer;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;overflow:hidden;position:relative}.file-label:hover .file-cta{background-color:#eee;color:#363636}.file-label:hover .file-name{border-color:#d5d5d5}.file-label:active .file-cta{background-color:#e8e8e8;color:#363636}.file-label:active .file-name{border-color:#cfcfcf}.file-input{height:100%;left:0;opacity:0;outline:none;position:absolute;top:0;width:100%}.file-cta,.file-name{border-color:#dbdbdb;border-radius:4px;font-size:1em;padding-left:1em;padding-right:1em;white-space:nowrap}.file-cta{background-color:#f5f5f5;color:#4a4a4a}.file-name{border:1px solid #dbdbdb;border-left-width:0;display:block;max-width:16em;overflow:hidden;text-align:left;text-overflow:ellipsis}.file-icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;height:1em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-right:.5em;width:1em}.file-icon .fa{font-size:14px}.label{color:#363636;display:block;font-size:1rem;font-weight:600}.label:not(:last-child){margin-bottom:.5em}.label.is-small{font-size:.75rem}.label.is-medium{font-size:1.25rem}.label.is-large{font-size:1.5rem}.help{display:block;font-size:.75rem;margin-top:.25rem}.help.is-white{color:#fff}.help.is-black{color:#0a0a0a}.help.is-light{color:#f5f5f5}.help.is-dark{color:#363636}.help.is-link,.help.is-primary{color:#7957d5}.help.is-info{color:#167df0}.help.is-success{color:#23d160}.help.is-warning{color:#ffdd57}.help.is-danger{color:#ff3860}.field:not(:last-child){margin-bottom:.75rem}.field.has-addons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.field.has-addons .control:not(:last-child){margin-right:-1px}.field.has-addons .control:not(:first-child):not(:last-child) .button,.field.has-addons .control:not(:first-child):not(:last-child) .input,.field.has-addons .control:not(:first-child):not(:last-child) .select select,.field.has-addons .control:not(:first-child):not(:last-child) .taginput .taginput-container.is-focusable,.taginput .field.has-addons .control:not(:first-child):not(:last-child) .taginput-container.is-focusable{border-radius:0}.field.has-addons .control:first-child:not(:only-child) .button,.field.has-addons .control:first-child:not(:only-child) .input,.field.has-addons .control:first-child:not(:only-child) .select select,.field.has-addons .control:first-child:not(:only-child) .taginput .taginput-container.is-focusable,.taginput .field.has-addons .control:first-child:not(:only-child) .taginput-container.is-focusable{border-bottom-right-radius:0;border-top-right-radius:0}.field.has-addons .control:last-child:not(:only-child) .button,.field.has-addons .control:last-child:not(:only-child) .input,.field.has-addons .control:last-child:not(:only-child) .select select,.field.has-addons .control:last-child:not(:only-child) .taginput .taginput-container.is-focusable,.taginput .field.has-addons .control:last-child:not(:only-child) .taginput-container.is-focusable{border-bottom-left-radius:0;border-top-left-radius:0}.field.has-addons .control .button:not([disabled]).is-hovered,.field.has-addons .control .button:not([disabled]):hover,.field.has-addons .control .input:not([disabled]).is-hovered,.field.has-addons .control .input:not([disabled]):hover,.field.has-addons .control .select select:not([disabled]).is-hovered,.field.has-addons .control .select select:not([disabled]):hover,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]).is-hovered,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]):hover,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]).is-hovered,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]):hover{z-index:2}.field.has-addons .control .button:not([disabled]).is-active,.field.has-addons .control .button:not([disabled]).is-focused,.field.has-addons .control .button:not([disabled]):active,.field.has-addons .control .button:not([disabled]):focus,.field.has-addons .control .input:not([disabled]).is-active,.field.has-addons .control .input:not([disabled]).is-focused,.field.has-addons .control .input:not([disabled]):active,.field.has-addons .control .input:not([disabled]):focus,.field.has-addons .control .select select:not([disabled]).is-active,.field.has-addons .control .select select:not([disabled]).is-focused,.field.has-addons .control .select select:not([disabled]):active,.field.has-addons .control .select select:not([disabled]):focus,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]).is-active,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]).is-focused,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]):active,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]):focus,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]).is-active,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]).is-focused,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]):active,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]):focus{z-index:3}.field.has-addons .control .button:not([disabled]).is-active:hover,.field.has-addons .control .button:not([disabled]).is-focused:hover,.field.has-addons .control .button:not([disabled]):active:hover,.field.has-addons .control .button:not([disabled]):focus:hover,.field.has-addons .control .input:not([disabled]).is-active:hover,.field.has-addons .control .input:not([disabled]).is-focused:hover,.field.has-addons .control .input:not([disabled]):active:hover,.field.has-addons .control .input:not([disabled]):focus:hover,.field.has-addons .control .select select:not([disabled]).is-active:hover,.field.has-addons .control .select select:not([disabled]).is-focused:hover,.field.has-addons .control .select select:not([disabled]):active:hover,.field.has-addons .control .select select:not([disabled]):focus:hover,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]).is-active:hover,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]).is-focused:hover,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]):active:hover,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]):focus:hover,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]).is-active:hover,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]).is-focused:hover,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]):active:hover,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]):focus:hover{z-index:4}.field.has-addons .control.is-expanded{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.field.has-addons.has-addons-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.field.has-addons.has-addons-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.field.has-addons.has-addons-fullwidth .control{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0}.field.is-grouped{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.field.is-grouped>.control{-ms-flex-negative:0;flex-shrink:0}.field.is-grouped>.control:not(:last-child){margin-bottom:0;margin-right:.75rem}.field.is-grouped>.control.is-expanded{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.field.is-grouped.is-grouped-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.field.is-grouped.is-grouped-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.field.is-grouped.is-grouped-multiline{-ms-flex-wrap:wrap;flex-wrap:wrap}.field.is-grouped.is-grouped-multiline>.control:last-child,.field.is-grouped.is-grouped-multiline>.control:not(:last-child){margin-bottom:.75rem}.field.is-grouped.is-grouped-multiline:last-child{margin-bottom:-.75rem}.field.is-grouped.is-grouped-multiline:not(:last-child){margin-bottom:0}@media print,screen and (min-width:769px){.field.is-horizontal{display:-webkit-box;display:-ms-flexbox;display:flex}}.field-label .label{font-size:inherit}@media screen and (max-width:768px){.field-label{margin-bottom:.5rem}}@media print,screen and (min-width:769px){.field-label{-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;margin-right:1.5rem;text-align:right}.field-label.is-small{font-size:.75rem;padding-top:.375em}.field-label.is-normal{padding-top:.375em}.field-label.is-medium{font-size:1.25rem;padding-top:.375em}.field-label.is-large{font-size:1.5rem;padding-top:.375em}}.field-body .field .field{margin-bottom:0}@media print,screen and (min-width:769px){.field-body{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:5;-ms-flex-positive:5;flex-grow:5;-ms-flex-negative:1;flex-shrink:1}.field-body .field{margin-bottom:0}.field-body>.field{-ms-flex-negative:1;flex-shrink:1}.field-body>.field:not(.is-narrow){-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.field-body>.field:not(:last-child){margin-right:.75rem}}.control{-webkit-box-sizing:border-box;box-sizing:border-box;clear:both;font-size:1rem;position:relative;text-align:left}.control.has-icons-left .input:focus~.icon,.control.has-icons-left .select:focus~.icon,.control.has-icons-left .taginput .taginput-container.is-focusable:focus~.icon,.control.has-icons-right .input:focus~.icon,.control.has-icons-right .select:focus~.icon,.control.has-icons-right .taginput .taginput-container.is-focusable:focus~.icon,.taginput .control.has-icons-left .taginput-container.is-focusable:focus~.icon,.taginput .control.has-icons-right .taginput-container.is-focusable:focus~.icon{color:#7a7a7a}.control.has-icons-left .input.is-small~.icon,.control.has-icons-left .select.is-small~.icon,.control.has-icons-left .taginput .is-small.taginput-container.is-focusable~.icon,.control.has-icons-right .input.is-small~.icon,.control.has-icons-right .select.is-small~.icon,.control.has-icons-right .taginput .is-small.taginput-container.is-focusable~.icon,.taginput .control.has-icons-left .is-small.taginput-container.is-focusable~.icon,.taginput .control.has-icons-right .is-small.taginput-container.is-focusable~.icon{font-size:.75rem}.control.has-icons-left .input.is-medium~.icon,.control.has-icons-left .select.is-medium~.icon,.control.has-icons-left .taginput .is-medium.taginput-container.is-focusable~.icon,.control.has-icons-right .input.is-medium~.icon,.control.has-icons-right .select.is-medium~.icon,.control.has-icons-right .taginput .is-medium.taginput-container.is-focusable~.icon,.taginput .control.has-icons-left .is-medium.taginput-container.is-focusable~.icon,.taginput .control.has-icons-right .is-medium.taginput-container.is-focusable~.icon{font-size:1.25rem}.control.has-icons-left .input.is-large~.icon,.control.has-icons-left .select.is-large~.icon,.control.has-icons-left .taginput .is-large.taginput-container.is-focusable~.icon,.control.has-icons-right .input.is-large~.icon,.control.has-icons-right .select.is-large~.icon,.control.has-icons-right .taginput .is-large.taginput-container.is-focusable~.icon,.taginput .control.has-icons-left .is-large.taginput-container.is-focusable~.icon,.taginput .control.has-icons-right .is-large.taginput-container.is-focusable~.icon{font-size:1.5rem}.control.has-icons-left .icon,.control.has-icons-right .icon{color:#dbdbdb;height:2.25em;pointer-events:none;position:absolute;top:0;width:2.25em;z-index:4}.control.has-icons-left .input,.control.has-icons-left .select select,.control.has-icons-left .taginput .taginput-container.is-focusable,.taginput .control.has-icons-left .taginput-container.is-focusable{padding-left:2.25em}.control.has-icons-left .icon.is-left{left:0}.control.has-icons-right .input,.control.has-icons-right .select select,.control.has-icons-right .taginput .taginput-container.is-focusable,.taginput .control.has-icons-right .taginput-container.is-focusable{padding-right:2.25em}.control.has-icons-right .icon.is-right{right:0}.control.is-loading:after{position:absolute!important;right:.625em;top:.625em;z-index:4}.control.is-loading.is-small:after{font-size:.75rem}.control.is-loading.is-medium:after{font-size:1.25rem}.control.is-loading.is-large:after{font-size:1.5rem}.breadcrumb{font-size:1rem;white-space:nowrap}.breadcrumb a{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#7957d5;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:0 .75em}.breadcrumb a:hover{color:#363636}.breadcrumb li{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.breadcrumb li:first-child a{padding-left:0}.breadcrumb li.is-active a{color:#363636;cursor:default;pointer-events:none}.breadcrumb li+li:before{color:#b5b5b5;content:\"\\0002f\"}.breadcrumb ol,.breadcrumb ul{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.breadcrumb .icon:first-child{margin-right:.5em}.breadcrumb .icon:last-child{margin-left:.5em}.breadcrumb.is-centered ol,.breadcrumb.is-centered ul{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.breadcrumb.is-right ol,.breadcrumb.is-right ul{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.breadcrumb.is-small{font-size:.75rem}.breadcrumb.is-medium{font-size:1.25rem}.breadcrumb.is-large{font-size:1.5rem}.breadcrumb.has-arrow-separator li+li:before{content:\"\\02192\"}.breadcrumb.has-bullet-separator li+li:before{content:\"\\02022\"}.breadcrumb.has-dot-separator li+li:before{content:\"\\000b7\"}.breadcrumb.has-succeeds-separator li+li:before{content:\"\\0227B\"}.card{background-color:#fff;-webkit-box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);color:#4a4a4a;max-width:100%;position:relative}.card-header{background-color:transparent;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-shadow:0 1px 2px rgba(10,10,10,.1);box-shadow:0 1px 2px rgba(10,10,10,.1)}.card-header,.card-header-title{display:-webkit-box;display:-ms-flexbox;display:flex}.card-header-title{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#363636;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;font-weight:700;padding:.75rem}.card-header-icon,.card-header-title.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.card-header-icon{-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;display:-webkit-box;display:-ms-flexbox;display:flex;padding:.75rem}.card-image{display:block;position:relative}.card-content{background-color:transparent;padding:1.5rem}.card-footer{background-color:transparent;border-top:1px solid #dbdbdb;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.card-footer,.card-footer-item{display:-webkit-box;display:-ms-flexbox;display:flex}.card-footer-item{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:.75rem}.card-footer-item:not(:last-child){border-right:1px solid #dbdbdb}.card .media:not(:last-child){margin-bottom:1.5rem}.dropdown{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;position:relative;vertical-align:top}.dropdown.is-active .dropdown-menu,.dropdown.is-hoverable:hover .dropdown-menu{display:block}.dropdown.is-right .dropdown-menu{left:auto;right:0}.dropdown.is-up .dropdown-menu{bottom:100%;padding-bottom:4px;padding-top:0;top:auto}.dropdown-menu{display:none;left:0;min-width:12rem;padding-top:4px;position:absolute;top:100%;z-index:20}.dropdown-content{background-color:#fff;border-radius:4px;-webkit-box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);padding-bottom:.5rem;padding-top:.5rem}.dropdown-item,.dropdown .dropdown-menu .has-link a{color:#4a4a4a;display:block;font-size:.875rem;line-height:1.5;padding:.375rem 1rem;position:relative}.dropdown .dropdown-menu .has-link a,a.dropdown-item,button.dropdown-item{padding-right:3rem;text-align:left;white-space:nowrap;width:100%}.dropdown .dropdown-menu .has-link a:hover,a.dropdown-item:hover,button.dropdown-item:hover{background-color:#f5f5f5;color:#0a0a0a}.dropdown .dropdown-menu .has-link a.is-active,a.dropdown-item.is-active,button.dropdown-item.is-active{background-color:#7957d5;color:#fff}.dropdown-divider{background-color:#dbdbdb;border:none;display:block;height:1px;margin:.5rem 0}.level{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.level code{border-radius:4px}.level img{display:inline-block;vertical-align:top}.level.is-mobile,.level.is-mobile .level-left,.level.is-mobile .level-right{display:-webkit-box;display:-ms-flexbox;display:flex}.level.is-mobile .level-left+.level-right{margin-top:0}.level.is-mobile .level-item:not(:last-child){margin-bottom:0;margin-right:.75rem}.level.is-mobile .level-item:not(.is-narrow){-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}@media print,screen and (min-width:769px){.level{display:-webkit-box;display:-ms-flexbox;display:flex}.level>.level-item:not(.is-narrow){-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}}.level-item{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.level-item .subtitle,.level-item .title{margin-bottom:0}@media screen and (max-width:768px){.level-item:not(:last-child){margin-bottom:.75rem}}.level-left,.level-right{-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}.level-left .level-item.is-flexible,.level-right .level-item.is-flexible{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}@media print,screen and (min-width:769px){.level-left .level-item:not(:last-child),.level-right .level-item:not(:last-child){margin-right:.75rem}}.level-left{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}@media screen and (max-width:768px){.level-left+.level-right{margin-top:1.5rem}}@media print,screen and (min-width:769px){.level-left{display:-webkit-box;display:-ms-flexbox;display:flex}}.level-right{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}@media print,screen and (min-width:769px){.level-right{display:-webkit-box;display:-ms-flexbox;display:flex}}.list{background-color:#fff;border-radius:4px;-webkit-box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1)}.list-item{display:block;padding:.5em 1em}.list-item:not(a){color:#4a4a4a}.list-item:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.list-item:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.list-item:not(:last-child){border-bottom:1px solid #dbdbdb}.list-item.is-active{background-color:#7957d5;color:#fff}a.list-item{background-color:#f5f5f5;cursor:pointer}.media{-webkit-box-align:start;-ms-flex-align:start;align-items:flex-start;display:-webkit-box;display:-ms-flexbox;display:flex;text-align:left}.media .content:not(:last-child){margin-bottom:.75rem}.media .media{border-top:1px solid hsla(0,0%,85.9%,.5);display:-webkit-box;display:-ms-flexbox;display:flex;padding-top:.75rem}.media .media .content:not(:last-child),.media .media .control:not(:last-child){margin-bottom:.5rem}.media .media .media{padding-top:.5rem}.media .media .media+.media{margin-top:.5rem}.media+.media{border-top:1px solid hsla(0,0%,85.9%,.5);margin-top:1rem;padding-top:1rem}.media.is-large+.media{margin-top:1.5rem;padding-top:1.5rem}.media-left,.media-right{-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}.media-left{margin-right:1rem}.media-right{margin-left:1rem}.media-content{-ms-flex-preferred-size:auto;flex-basis:auto;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;text-align:left}@media screen and (max-width:768px){.media-content{overflow-x:auto}}.menu{font-size:1rem}.menu.is-small{font-size:.75rem}.menu.is-medium{font-size:1.25rem}.menu.is-large{font-size:1.5rem}.menu-list{line-height:1.25}.menu-list a{border-radius:2px;color:#4a4a4a;display:block;padding:.5em .75em}.menu-list a:hover{background-color:#f5f5f5;color:#363636}.menu-list a.is-active{background-color:#7957d5;color:#fff}.menu-list li ul{border-left:1px solid #dbdbdb;margin:.75em;padding-left:.75em}.menu-label{color:#7a7a7a;font-size:.75em;letter-spacing:.1em;text-transform:uppercase}.menu-label:not(:first-child){margin-top:1em}.menu-label:not(:last-child){margin-bottom:1em}.message{background-color:#f5f5f5;border-radius:4px;font-size:1rem}.message strong{color:currentColor}.message a:not(.button):not(.tag):not(.dropdown-item){color:currentColor;text-decoration:underline}.message.is-small{font-size:.75rem}.message.is-medium{font-size:1.25rem}.message.is-large{font-size:1.5rem}.message.is-white{background-color:#fff}.message.is-white .message-header{background-color:#fff;color:#0a0a0a}.message.is-white .message-body{border-color:#fff;color:#4d4d4d}.message.is-black{background-color:#fafafa}.message.is-black .message-header{background-color:#0a0a0a;color:#fff}.message.is-black .message-body{border-color:#0a0a0a;color:#090909}.message.is-light{background-color:#fafafa}.message.is-light .message-header{background-color:#f5f5f5;color:#363636}.message.is-light .message-body{border-color:#f5f5f5;color:#505050}.message.is-dark{background-color:#fafafa}.message.is-dark .message-header{background-color:#363636;color:#f5f5f5}.message.is-dark .message-body{border-color:#363636;color:#2a2a2a}.message.is-primary{background-color:#f8f7fd}.message.is-primary .message-header{background-color:#7957d5;color:#fff}.message.is-primary .message-body{border-color:#7957d5;color:#5534ae}.message.is-link{background-color:#f8f7fd}.message.is-link .message-header{background-color:#7957d5;color:#fff}.message.is-link .message-body{border-color:#7957d5;color:#5534ae}.message.is-info{background-color:#f5fafe}.message.is-info .message-header{background-color:#167df0;color:#fff}.message.is-info .message-body{border-color:#167df0;color:#115199}.message.is-success{background-color:#f6fef9}.message.is-success .message-header{background-color:#23d160;color:#fff}.message.is-success .message-body{border-color:#23d160;color:#0e301a}.message.is-warning{background-color:#fffdf5}.message.is-warning .message-header{background-color:#ffdd57;color:rgba(0,0,0,.7)}.message.is-warning .message-body{border-color:#ffdd57;color:#3b3108}.message.is-danger{background-color:#fff5f7}.message.is-danger .message-header{background-color:#ff3860;color:#fff}.message.is-danger .message-body{border-color:#ff3860;color:#cd0930}.message-header{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#4a4a4a;border-radius:4px 4px 0 0;color:#fff;display:-webkit-box;display:-ms-flexbox;display:flex;font-weight:700;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;line-height:1.25;padding:.75em 1em;position:relative}.message-header .delete{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0;margin-left:.75em}.message-header+.message-body{border-width:0;border-top-left-radius:0;border-top-right-radius:0}.message-body{border-radius:4px;border:solid #dbdbdb;border-width:0 0 0 4px;color:#4a4a4a;padding:1.25em 1.5em}.message-body code,.message-body pre{background-color:#fff}.message-body pre code{background-color:transparent}.modal{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:none;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;position:fixed;z-index:40}.modal.is-active{display:-webkit-box;display:-ms-flexbox;display:flex}.modal-background{background-color:rgba(10,10,10,.86)}.modal-card,.modal-content{margin:0 20px;max-height:calc(100vh - 160px);overflow:auto;position:relative;width:100%}@media print,screen and (min-width:769px){.modal-card,.modal-content{margin:0 auto;max-height:calc(100vh - 40px);width:640px}}.modal-close{background:none;height:40px;position:fixed;right:20px;top:20px;width:40px}.modal-card{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;max-height:calc(100vh - 40px);overflow:hidden;-ms-overflow-y:visible}.modal-card,.modal-card-foot,.modal-card-head{display:-webkit-box;display:-ms-flexbox;display:flex}.modal-card-foot,.modal-card-head{-webkit-box-align:center;-ms-flex-align:center;align-items:center;background-color:#f5f5f5;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:20px;position:relative}.modal-card-head{border-bottom:1px solid #dbdbdb;border-top-left-radius:6px;border-top-right-radius:6px}.modal-card-title{color:#363636;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;font-size:1.5rem;line-height:1}.modal-card-foot{border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:1px solid #dbdbdb}.modal-card-foot .button:not(:last-child){margin-right:.5em}.modal-card-body{-webkit-overflow-scrolling:touch;background-color:#fff;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;overflow:auto;padding:20px}.navbar{background-color:#fff;min-height:3.25rem;position:relative;z-index:30}.navbar.is-white{background-color:#fff;color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link,.navbar.is-white .navbar-brand>.navbar-item{color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link.is-active,.navbar.is-white .navbar-brand .navbar-link:focus,.navbar.is-white .navbar-brand .navbar-link:hover,.navbar.is-white .navbar-brand>a.navbar-item.is-active,.navbar.is-white .navbar-brand>a.navbar-item:focus,.navbar.is-white .navbar-brand>a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link:after{border-color:#0a0a0a}.navbar.is-white .navbar-burger{color:#0a0a0a}@media screen and (min-width:1024px){.navbar.is-white .navbar-end .navbar-link,.navbar.is-white .navbar-end>.navbar-item,.navbar.is-white .navbar-start .navbar-link,.navbar.is-white .navbar-start>.navbar-item{color:#0a0a0a}.navbar.is-white .navbar-end .navbar-link.is-active,.navbar.is-white .navbar-end .navbar-link:focus,.navbar.is-white .navbar-end .navbar-link:hover,.navbar.is-white .navbar-end>a.navbar-item.is-active,.navbar.is-white .navbar-end>a.navbar-item:focus,.navbar.is-white .navbar-end>a.navbar-item:hover,.navbar.is-white .navbar-start .navbar-link.is-active,.navbar.is-white .navbar-start .navbar-link:focus,.navbar.is-white .navbar-start .navbar-link:hover,.navbar.is-white .navbar-start>a.navbar-item.is-active,.navbar.is-white .navbar-start>a.navbar-item:focus,.navbar.is-white .navbar-start>a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-end .navbar-link:after,.navbar.is-white .navbar-start .navbar-link:after{border-color:#0a0a0a}.navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-white .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-white .navbar-item.has-dropdown:hover .navbar-link{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-dropdown a.navbar-item.is-active{background-color:#fff;color:#0a0a0a}}.navbar.is-black{background-color:#0a0a0a;color:#fff}.navbar.is-black .navbar-brand .navbar-link,.navbar.is-black .navbar-brand>.navbar-item{color:#fff}.navbar.is-black .navbar-brand .navbar-link.is-active,.navbar.is-black .navbar-brand .navbar-link:focus,.navbar.is-black .navbar-brand .navbar-link:hover,.navbar.is-black .navbar-brand>a.navbar-item.is-active,.navbar.is-black .navbar-brand>a.navbar-item:focus,.navbar.is-black .navbar-brand>a.navbar-item:hover{background-color:#000;color:#fff}.navbar.is-black .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-black .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-black .navbar-end .navbar-link,.navbar.is-black .navbar-end>.navbar-item,.navbar.is-black .navbar-start .navbar-link,.navbar.is-black .navbar-start>.navbar-item{color:#fff}.navbar.is-black .navbar-end .navbar-link.is-active,.navbar.is-black .navbar-end .navbar-link:focus,.navbar.is-black .navbar-end .navbar-link:hover,.navbar.is-black .navbar-end>a.navbar-item.is-active,.navbar.is-black .navbar-end>a.navbar-item:focus,.navbar.is-black .navbar-end>a.navbar-item:hover,.navbar.is-black .navbar-start .navbar-link.is-active,.navbar.is-black .navbar-start .navbar-link:focus,.navbar.is-black .navbar-start .navbar-link:hover,.navbar.is-black .navbar-start>a.navbar-item.is-active,.navbar.is-black .navbar-start>a.navbar-item:focus,.navbar.is-black .navbar-start>a.navbar-item:hover{background-color:#000;color:#fff}.navbar.is-black .navbar-end .navbar-link:after,.navbar.is-black .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-black .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-black .navbar-item.has-dropdown:hover .navbar-link{background-color:#000;color:#fff}.navbar.is-black .navbar-dropdown a.navbar-item.is-active{background-color:#0a0a0a;color:#fff}}.navbar.is-light{background-color:#f5f5f5;color:#363636}.navbar.is-light .navbar-brand .navbar-link,.navbar.is-light .navbar-brand>.navbar-item{color:#363636}.navbar.is-light .navbar-brand .navbar-link.is-active,.navbar.is-light .navbar-brand .navbar-link:focus,.navbar.is-light .navbar-brand .navbar-link:hover,.navbar.is-light .navbar-brand>a.navbar-item.is-active,.navbar.is-light .navbar-brand>a.navbar-item:focus,.navbar.is-light .navbar-brand>a.navbar-item:hover{background-color:#e8e8e8;color:#363636}.navbar.is-light .navbar-brand .navbar-link:after{border-color:#363636}.navbar.is-light .navbar-burger{color:#363636}@media screen and (min-width:1024px){.navbar.is-light .navbar-end .navbar-link,.navbar.is-light .navbar-end>.navbar-item,.navbar.is-light .navbar-start .navbar-link,.navbar.is-light .navbar-start>.navbar-item{color:#363636}.navbar.is-light .navbar-end .navbar-link.is-active,.navbar.is-light .navbar-end .navbar-link:focus,.navbar.is-light .navbar-end .navbar-link:hover,.navbar.is-light .navbar-end>a.navbar-item.is-active,.navbar.is-light .navbar-end>a.navbar-item:focus,.navbar.is-light .navbar-end>a.navbar-item:hover,.navbar.is-light .navbar-start .navbar-link.is-active,.navbar.is-light .navbar-start .navbar-link:focus,.navbar.is-light .navbar-start .navbar-link:hover,.navbar.is-light .navbar-start>a.navbar-item.is-active,.navbar.is-light .navbar-start>a.navbar-item:focus,.navbar.is-light .navbar-start>a.navbar-item:hover{background-color:#e8e8e8;color:#363636}.navbar.is-light .navbar-end .navbar-link:after,.navbar.is-light .navbar-start .navbar-link:after{border-color:#363636}.navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-light .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-light .navbar-item.has-dropdown:hover .navbar-link{background-color:#e8e8e8;color:#363636}.navbar.is-light .navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#363636}}.navbar.is-dark{background-color:#363636;color:#f5f5f5}.navbar.is-dark .navbar-brand .navbar-link,.navbar.is-dark .navbar-brand>.navbar-item{color:#f5f5f5}.navbar.is-dark .navbar-brand .navbar-link.is-active,.navbar.is-dark .navbar-brand .navbar-link:focus,.navbar.is-dark .navbar-brand .navbar-link:hover,.navbar.is-dark .navbar-brand>a.navbar-item.is-active,.navbar.is-dark .navbar-brand>a.navbar-item:focus,.navbar.is-dark .navbar-brand>a.navbar-item:hover{background-color:#292929;color:#f5f5f5}.navbar.is-dark .navbar-brand .navbar-link:after{border-color:#f5f5f5}.navbar.is-dark .navbar-burger{color:#f5f5f5}@media screen and (min-width:1024px){.navbar.is-dark .navbar-end .navbar-link,.navbar.is-dark .navbar-end>.navbar-item,.navbar.is-dark .navbar-start .navbar-link,.navbar.is-dark .navbar-start>.navbar-item{color:#f5f5f5}.navbar.is-dark .navbar-end .navbar-link.is-active,.navbar.is-dark .navbar-end .navbar-link:focus,.navbar.is-dark .navbar-end .navbar-link:hover,.navbar.is-dark .navbar-end>a.navbar-item.is-active,.navbar.is-dark .navbar-end>a.navbar-item:focus,.navbar.is-dark .navbar-end>a.navbar-item:hover,.navbar.is-dark .navbar-start .navbar-link.is-active,.navbar.is-dark .navbar-start .navbar-link:focus,.navbar.is-dark .navbar-start .navbar-link:hover,.navbar.is-dark .navbar-start>a.navbar-item.is-active,.navbar.is-dark .navbar-start>a.navbar-item:focus,.navbar.is-dark .navbar-start>a.navbar-item:hover{background-color:#292929;color:#f5f5f5}.navbar.is-dark .navbar-end .navbar-link:after,.navbar.is-dark .navbar-start .navbar-link:after{border-color:#f5f5f5}.navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-dark .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link{background-color:#292929;color:#f5f5f5}.navbar.is-dark .navbar-dropdown a.navbar-item.is-active{background-color:#363636;color:#f5f5f5}}.navbar.is-primary{background-color:#7957d5;color:#fff}.navbar.is-primary .navbar-brand .navbar-link,.navbar.is-primary .navbar-brand>.navbar-item{color:#fff}.navbar.is-primary .navbar-brand .navbar-link.is-active,.navbar.is-primary .navbar-brand .navbar-link:focus,.navbar.is-primary .navbar-brand .navbar-link:hover,.navbar.is-primary .navbar-brand>a.navbar-item.is-active,.navbar.is-primary .navbar-brand>a.navbar-item:focus,.navbar.is-primary .navbar-brand>a.navbar-item:hover{background-color:#6943d0;color:#fff}.navbar.is-primary .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-primary .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-primary .navbar-end .navbar-link,.navbar.is-primary .navbar-end>.navbar-item,.navbar.is-primary .navbar-start .navbar-link,.navbar.is-primary .navbar-start>.navbar-item{color:#fff}.navbar.is-primary .navbar-end .navbar-link.is-active,.navbar.is-primary .navbar-end .navbar-link:focus,.navbar.is-primary .navbar-end .navbar-link:hover,.navbar.is-primary .navbar-end>a.navbar-item.is-active,.navbar.is-primary .navbar-end>a.navbar-item:focus,.navbar.is-primary .navbar-end>a.navbar-item:hover,.navbar.is-primary .navbar-start .navbar-link.is-active,.navbar.is-primary .navbar-start .navbar-link:focus,.navbar.is-primary .navbar-start .navbar-link:hover,.navbar.is-primary .navbar-start>a.navbar-item.is-active,.navbar.is-primary .navbar-start>a.navbar-item:focus,.navbar.is-primary .navbar-start>a.navbar-item:hover{background-color:#6943d0;color:#fff}.navbar.is-primary .navbar-end .navbar-link:after,.navbar.is-primary .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-primary .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link{background-color:#6943d0;color:#fff}.navbar.is-primary .navbar-dropdown a.navbar-item.is-active{background-color:#7957d5;color:#fff}}.navbar.is-link{background-color:#7957d5;color:#fff}.navbar.is-link .navbar-brand .navbar-link,.navbar.is-link .navbar-brand>.navbar-item{color:#fff}.navbar.is-link .navbar-brand .navbar-link.is-active,.navbar.is-link .navbar-brand .navbar-link:focus,.navbar.is-link .navbar-brand .navbar-link:hover,.navbar.is-link .navbar-brand>a.navbar-item.is-active,.navbar.is-link .navbar-brand>a.navbar-item:focus,.navbar.is-link .navbar-brand>a.navbar-item:hover{background-color:#6943d0;color:#fff}.navbar.is-link .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-link .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-link .navbar-end .navbar-link,.navbar.is-link .navbar-end>.navbar-item,.navbar.is-link .navbar-start .navbar-link,.navbar.is-link .navbar-start>.navbar-item{color:#fff}.navbar.is-link .navbar-end .navbar-link.is-active,.navbar.is-link .navbar-end .navbar-link:focus,.navbar.is-link .navbar-end .navbar-link:hover,.navbar.is-link .navbar-end>a.navbar-item.is-active,.navbar.is-link .navbar-end>a.navbar-item:focus,.navbar.is-link .navbar-end>a.navbar-item:hover,.navbar.is-link .navbar-start .navbar-link.is-active,.navbar.is-link .navbar-start .navbar-link:focus,.navbar.is-link .navbar-start .navbar-link:hover,.navbar.is-link .navbar-start>a.navbar-item.is-active,.navbar.is-link .navbar-start>a.navbar-item:focus,.navbar.is-link .navbar-start>a.navbar-item:hover{background-color:#6943d0;color:#fff}.navbar.is-link .navbar-end .navbar-link:after,.navbar.is-link .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-link .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-link .navbar-item.has-dropdown:hover .navbar-link{background-color:#6943d0;color:#fff}.navbar.is-link .navbar-dropdown a.navbar-item.is-active{background-color:#7957d5;color:#fff}}.navbar.is-info{background-color:#167df0;color:#fff}.navbar.is-info .navbar-brand .navbar-link,.navbar.is-info .navbar-brand>.navbar-item{color:#fff}.navbar.is-info .navbar-brand .navbar-link.is-active,.navbar.is-info .navbar-brand .navbar-link:focus,.navbar.is-info .navbar-brand .navbar-link:hover,.navbar.is-info .navbar-brand>a.navbar-item.is-active,.navbar.is-info .navbar-brand>a.navbar-item:focus,.navbar.is-info .navbar-brand>a.navbar-item:hover{background-color:#0e71de;color:#fff}.navbar.is-info .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-info .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-info .navbar-end .navbar-link,.navbar.is-info .navbar-end>.navbar-item,.navbar.is-info .navbar-start .navbar-link,.navbar.is-info .navbar-start>.navbar-item{color:#fff}.navbar.is-info .navbar-end .navbar-link.is-active,.navbar.is-info .navbar-end .navbar-link:focus,.navbar.is-info .navbar-end .navbar-link:hover,.navbar.is-info .navbar-end>a.navbar-item.is-active,.navbar.is-info .navbar-end>a.navbar-item:focus,.navbar.is-info .navbar-end>a.navbar-item:hover,.navbar.is-info .navbar-start .navbar-link.is-active,.navbar.is-info .navbar-start .navbar-link:focus,.navbar.is-info .navbar-start .navbar-link:hover,.navbar.is-info .navbar-start>a.navbar-item.is-active,.navbar.is-info .navbar-start>a.navbar-item:focus,.navbar.is-info .navbar-start>a.navbar-item:hover{background-color:#0e71de;color:#fff}.navbar.is-info .navbar-end .navbar-link:after,.navbar.is-info .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-info .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-info .navbar-item.has-dropdown:hover .navbar-link{background-color:#0e71de;color:#fff}.navbar.is-info .navbar-dropdown a.navbar-item.is-active{background-color:#167df0;color:#fff}}.navbar.is-success{background-color:#23d160;color:#fff}.navbar.is-success .navbar-brand .navbar-link,.navbar.is-success .navbar-brand>.navbar-item{color:#fff}.navbar.is-success .navbar-brand .navbar-link.is-active,.navbar.is-success .navbar-brand .navbar-link:focus,.navbar.is-success .navbar-brand .navbar-link:hover,.navbar.is-success .navbar-brand>a.navbar-item.is-active,.navbar.is-success .navbar-brand>a.navbar-item:focus,.navbar.is-success .navbar-brand>a.navbar-item:hover{background-color:#20bc56;color:#fff}.navbar.is-success .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-success .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-success .navbar-end .navbar-link,.navbar.is-success .navbar-end>.navbar-item,.navbar.is-success .navbar-start .navbar-link,.navbar.is-success .navbar-start>.navbar-item{color:#fff}.navbar.is-success .navbar-end .navbar-link.is-active,.navbar.is-success .navbar-end .navbar-link:focus,.navbar.is-success .navbar-end .navbar-link:hover,.navbar.is-success .navbar-end>a.navbar-item.is-active,.navbar.is-success .navbar-end>a.navbar-item:focus,.navbar.is-success .navbar-end>a.navbar-item:hover,.navbar.is-success .navbar-start .navbar-link.is-active,.navbar.is-success .navbar-start .navbar-link:focus,.navbar.is-success .navbar-start .navbar-link:hover,.navbar.is-success .navbar-start>a.navbar-item.is-active,.navbar.is-success .navbar-start>a.navbar-item:focus,.navbar.is-success .navbar-start>a.navbar-item:hover{background-color:#20bc56;color:#fff}.navbar.is-success .navbar-end .navbar-link:after,.navbar.is-success .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-success .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-success .navbar-item.has-dropdown:hover .navbar-link{background-color:#20bc56;color:#fff}.navbar.is-success .navbar-dropdown a.navbar-item.is-active{background-color:#23d160;color:#fff}}.navbar.is-warning{background-color:#ffdd57}.navbar.is-warning,.navbar.is-warning .navbar-brand .navbar-link,.navbar.is-warning .navbar-brand>.navbar-item{color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand .navbar-link.is-active,.navbar.is-warning .navbar-brand .navbar-link:focus,.navbar.is-warning .navbar-brand .navbar-link:hover,.navbar.is-warning .navbar-brand>a.navbar-item.is-active,.navbar.is-warning .navbar-brand>a.navbar-item:focus,.navbar.is-warning .navbar-brand>a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand .navbar-link:after{border-color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-burger{color:rgba(0,0,0,.7)}@media screen and (min-width:1024px){.navbar.is-warning .navbar-end .navbar-link,.navbar.is-warning .navbar-end>.navbar-item,.navbar.is-warning .navbar-start .navbar-link,.navbar.is-warning .navbar-start>.navbar-item{color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-end .navbar-link.is-active,.navbar.is-warning .navbar-end .navbar-link:focus,.navbar.is-warning .navbar-end .navbar-link:hover,.navbar.is-warning .navbar-end>a.navbar-item.is-active,.navbar.is-warning .navbar-end>a.navbar-item:focus,.navbar.is-warning .navbar-end>a.navbar-item:hover,.navbar.is-warning .navbar-start .navbar-link.is-active,.navbar.is-warning .navbar-start .navbar-link:focus,.navbar.is-warning .navbar-start .navbar-link:hover,.navbar.is-warning .navbar-start>a.navbar-item.is-active,.navbar.is-warning .navbar-start>a.navbar-item:focus,.navbar.is-warning .navbar-start>a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-end .navbar-link:after,.navbar.is-warning .navbar-start .navbar-link:after{border-color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-warning .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-dropdown a.navbar-item.is-active{background-color:#ffdd57;color:rgba(0,0,0,.7)}}.navbar.is-danger{background-color:#ff3860;color:#fff}.navbar.is-danger .navbar-brand .navbar-link,.navbar.is-danger .navbar-brand>.navbar-item{color:#fff}.navbar.is-danger .navbar-brand .navbar-link.is-active,.navbar.is-danger .navbar-brand .navbar-link:focus,.navbar.is-danger .navbar-brand .navbar-link:hover,.navbar.is-danger .navbar-brand>a.navbar-item.is-active,.navbar.is-danger .navbar-brand>a.navbar-item:focus,.navbar.is-danger .navbar-brand>a.navbar-item:hover{background-color:#ff1f4b;color:#fff}.navbar.is-danger .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-danger .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-danger .navbar-end .navbar-link,.navbar.is-danger .navbar-end>.navbar-item,.navbar.is-danger .navbar-start .navbar-link,.navbar.is-danger .navbar-start>.navbar-item{color:#fff}.navbar.is-danger .navbar-end .navbar-link.is-active,.navbar.is-danger .navbar-end .navbar-link:focus,.navbar.is-danger .navbar-end .navbar-link:hover,.navbar.is-danger .navbar-end>a.navbar-item.is-active,.navbar.is-danger .navbar-end>a.navbar-item:focus,.navbar.is-danger .navbar-end>a.navbar-item:hover,.navbar.is-danger .navbar-start .navbar-link.is-active,.navbar.is-danger .navbar-start .navbar-link:focus,.navbar.is-danger .navbar-start .navbar-link:hover,.navbar.is-danger .navbar-start>a.navbar-item.is-active,.navbar.is-danger .navbar-start>a.navbar-item:focus,.navbar.is-danger .navbar-start>a.navbar-item:hover{background-color:#ff1f4b;color:#fff}.navbar.is-danger .navbar-end .navbar-link:after,.navbar.is-danger .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-danger .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link{background-color:#ff1f4b;color:#fff}.navbar.is-danger .navbar-dropdown a.navbar-item.is-active{background-color:#ff3860;color:#fff}}.navbar>.container{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;min-height:3.25rem;width:100%}.navbar.has-shadow{-webkit-box-shadow:0 2px 0 0 #f5f5f5;box-shadow:0 2px 0 0 #f5f5f5}.navbar.is-fixed-bottom,.navbar.is-fixed-top{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom{bottom:0}.navbar.is-fixed-bottom.has-shadow{-webkit-box-shadow:0 -2px 0 0 #f5f5f5;box-shadow:0 -2px 0 0 #f5f5f5}.navbar.is-fixed-top{top:0}body.has-navbar-fixed-top,html.has-navbar-fixed-top{padding-top:3.25rem}body.has-navbar-fixed-bottom,html.has-navbar-fixed-bottom{padding-bottom:3.25rem}.navbar-brand,.navbar-tabs{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;min-height:3.25rem}.navbar-brand a.navbar-item:focus,.navbar-brand a.navbar-item:hover{background-color:transparent}.navbar-tabs{-webkit-overflow-scrolling:touch;max-width:100vw;overflow-x:auto;overflow-y:hidden}.navbar-burger{color:#4a4a4a;cursor:pointer;display:block;height:3.25rem;position:relative;width:3.25rem;margin-left:auto}.navbar-burger span{background-color:currentColor;display:block;height:1px;left:calc(50% - 8px);position:absolute;-webkit-transform-origin:center;transform-origin:center;-webkit-transition-duration:86ms;transition-duration:86ms;-webkit-transition-property:background-color,opacity,-webkit-transform;transition-property:background-color,opacity,-webkit-transform;transition-property:background-color,opacity,transform;transition-property:background-color,opacity,transform,-webkit-transform;-webkit-transition-timing-function:ease-out;transition-timing-function:ease-out;width:16px}.navbar-burger span:first-child{top:calc(50% - 6px)}.navbar-burger span:nth-child(2){top:calc(50% - 1px)}.navbar-burger span:nth-child(3){top:calc(50% + 4px)}.navbar-burger:hover{background-color:rgba(0,0,0,.05)}.navbar-burger.is-active span:first-child{-webkit-transform:translateY(5px) rotate(45deg);transform:translateY(5px) rotate(45deg)}.navbar-burger.is-active span:nth-child(2){opacity:0}.navbar-burger.is-active span:nth-child(3){-webkit-transform:translateY(-5px) rotate(-45deg);transform:translateY(-5px) rotate(-45deg)}.navbar-menu{display:none}.navbar-item,.navbar-link{color:#4a4a4a;display:block;line-height:1.5;padding:.5rem .75rem;position:relative}.navbar-item .icon:only-child,.navbar-link .icon:only-child{margin-left:-.25rem;margin-right:-.25rem}.navbar-link,a.navbar-item{cursor:pointer}.navbar-link.is-active,.navbar-link:focus,.navbar-link:hover,.navbar-link[focus-within],a.navbar-item.is-active,a.navbar-item:focus,a.navbar-item:hover,a.navbar-item[focus-within]{background-color:#fafafa;color:#7957d5}.navbar-link.is-active,.navbar-link:focus,.navbar-link:focus-within,.navbar-link:hover,a.navbar-item.is-active,a.navbar-item:focus,a.navbar-item:focus-within,a.navbar-item:hover{background-color:#fafafa;color:#7957d5}.navbar-item{display:block;-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0;-ms-flex-negative:0;flex-shrink:0}.navbar-item img{max-height:1.75rem}.navbar-item.has-dropdown{padding:0}.navbar-item.is-expanded{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.navbar-item.is-tab{border-bottom:1px solid transparent;min-height:3.25rem;padding-bottom:calc(.5rem - 1px)}.navbar-item.is-tab:focus,.navbar-item.is-tab:hover{background-color:transparent;border-bottom-color:#7957d5}.navbar-item.is-tab.is-active{background-color:transparent;border-bottom:3px solid #7957d5;color:#7957d5;padding-bottom:calc(.5rem - 3px)}.navbar-content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.navbar-link:not(.is-arrowless){padding-right:2.5em}.navbar-link:not(.is-arrowless):after{border-color:#7957d5;margin-top:-.375em;right:1.125em}.navbar-dropdown{font-size:.875rem;padding-bottom:.5rem;padding-top:.5rem}.navbar-dropdown .navbar-item{padding-left:1.5rem;padding-right:1.5rem}.navbar-divider{background-color:#f5f5f5;border:none;display:none;height:2px;margin:.5rem 0}@media screen and (max-width:1023px){.navbar>.container{display:block}.navbar-brand .navbar-item,.navbar-tabs .navbar-item{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.navbar-link:after{display:none}.navbar-menu{background-color:#fff;-webkit-box-shadow:0 8px 16px rgba(10,10,10,.1);box-shadow:0 8px 16px rgba(10,10,10,.1);padding:.5rem 0}.navbar-menu.is-active{display:block}.navbar.is-fixed-bottom-touch,.navbar.is-fixed-top-touch{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-touch{bottom:0}.navbar.is-fixed-bottom-touch.has-shadow{-webkit-box-shadow:0 -2px 3px rgba(10,10,10,.1);box-shadow:0 -2px 3px rgba(10,10,10,.1)}.navbar.is-fixed-top-touch{top:0}.navbar.is-fixed-top-touch .navbar-menu,.navbar.is-fixed-top .navbar-menu{-webkit-overflow-scrolling:touch;max-height:calc(100vh - 3.25rem);overflow:auto}body.has-navbar-fixed-top-touch,html.has-navbar-fixed-top-touch{padding-top:3.25rem}body.has-navbar-fixed-bottom-touch,html.has-navbar-fixed-bottom-touch{padding-bottom:3.25rem}}@media screen and (min-width:1024px){.navbar,.navbar-end,.navbar-menu,.navbar-start{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex}.navbar{min-height:3.25rem}.navbar.is-spaced{padding:1rem 2rem}.navbar.is-spaced .navbar-end,.navbar.is-spaced .navbar-start{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.navbar.is-spaced .navbar-link,.navbar.is-spaced a.navbar-item{border-radius:4px}.navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable[focus-within] .navbar-link,.navbar.is-transparent .navbar-link.is-active,.navbar.is-transparent .navbar-link:focus,.navbar.is-transparent .navbar-link:hover,.navbar.is-transparent a.navbar-item.is-active,.navbar.is-transparent a.navbar-item:focus,.navbar.is-transparent a.navbar-item:hover{background-color:transparent!important}.navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus-within .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link{background-color:transparent!important}.navbar.is-transparent .navbar-dropdown a.navbar-item:focus,.navbar.is-transparent .navbar-dropdown a.navbar-item:hover{background-color:#f5f5f5;color:#0a0a0a}.navbar.is-transparent .navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#7957d5}.navbar-burger{display:none}.navbar-item,.navbar-link{-webkit-box-align:center;-ms-flex-align:center;align-items:center}.navbar-item,.navbar-link{display:-webkit-box;display:-ms-flexbox;display:flex}.navbar-item.has-dropdown{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch}.navbar-item.has-dropdown-up .navbar-link:after{-webkit-transform:rotate(135deg) translate(.25em,-.25em);transform:rotate(135deg) translate(.25em,-.25em)}.navbar-item.has-dropdown-up .navbar-dropdown{border-bottom:2px solid #dbdbdb;border-radius:6px 6px 0 0;border-top:none;bottom:100%;-webkit-box-shadow:0 -8px 8px rgba(10,10,10,.1);box-shadow:0 -8px 8px rgba(10,10,10,.1);top:auto}.navbar-item.is-active .navbar-dropdown,.navbar-item.is-hoverable:focus .navbar-dropdown,.navbar-item.is-hoverable:hover .navbar-dropdown,.navbar-item.is-hoverable[focus-within] .navbar-dropdown{display:block}.navbar-item.is-active .navbar-dropdown,.navbar-item.is-hoverable:focus-within .navbar-dropdown,.navbar-item.is-hoverable:focus .navbar-dropdown,.navbar-item.is-hoverable:hover .navbar-dropdown{display:block}.navbar-item.is-active .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed,.navbar-item.is-hoverable[focus-within] .navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-item.is-active .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable[focus-within] .navbar-dropdown{opacity:1;pointer-events:auto;-webkit-transform:translateY(0);transform:translateY(0)}.navbar-item.is-active .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:focus-within .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-item.is-active .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:focus-within .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown{opacity:1;pointer-events:auto;-webkit-transform:translateY(0);transform:translateY(0)}.navbar-menu{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0}.navbar-start{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;margin-right:auto}.navbar-end{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;margin-left:auto}.navbar-dropdown{background-color:#fff;border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:2px solid #dbdbdb;-webkit-box-shadow:0 8px 8px rgba(10,10,10,.1);box-shadow:0 8px 8px rgba(10,10,10,.1);display:none;font-size:.875rem;left:0;min-width:100%;position:absolute;top:100%;z-index:20}.navbar-dropdown .navbar-item{padding:.375rem 1rem;white-space:nowrap}.navbar-dropdown a.navbar-item{padding-right:3rem}.navbar-dropdown a.navbar-item:focus,.navbar-dropdown a.navbar-item:hover{background-color:#f5f5f5;color:#0a0a0a}.navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#7957d5}.navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-dropdown{border-radius:6px;border-top:none;-webkit-box-shadow:0 8px 8px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);box-shadow:0 8px 8px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);display:block;opacity:0;pointer-events:none;top:calc(100% + -4px);-webkit-transform:translateY(-5px);transform:translateY(-5px);-webkit-transition-duration:86ms;transition-duration:86ms;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:opacity,transform;transition-property:opacity,transform,-webkit-transform}.navbar-dropdown.is-right{left:auto;right:0}.navbar-divider{display:block}.container>.navbar .navbar-brand,.navbar>.container .navbar-brand{margin-left:-.75rem}.container>.navbar .navbar-menu,.navbar>.container .navbar-menu{margin-right:-.75rem}.navbar.is-fixed-bottom-desktop,.navbar.is-fixed-top-desktop{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-desktop{bottom:0}.navbar.is-fixed-bottom-desktop.has-shadow{-webkit-box-shadow:0 -2px 3px rgba(10,10,10,.1);box-shadow:0 -2px 3px rgba(10,10,10,.1)}.navbar.is-fixed-top-desktop{top:0}body.has-navbar-fixed-top-desktop,html.has-navbar-fixed-top-desktop{padding-top:3.25rem}body.has-navbar-fixed-bottom-desktop,html.has-navbar-fixed-bottom-desktop{padding-bottom:3.25rem}body.has-spaced-navbar-fixed-top,html.has-spaced-navbar-fixed-top{padding-top:5.25rem}body.has-spaced-navbar-fixed-bottom,html.has-spaced-navbar-fixed-bottom{padding-bottom:5.25rem}.navbar-link.is-active,a.navbar-item.is-active{color:#0a0a0a}.navbar-link.is-active:not(:focus):not(:hover),a.navbar-item.is-active:not(:focus):not(:hover){background-color:transparent}.navbar-item.has-dropdown.is-active .navbar-link,.navbar-item.has-dropdown:focus .navbar-link,.navbar-item.has-dropdown:hover .navbar-link{background-color:#fafafa}}.hero.is-fullheight-with-navbar{min-height:calc(100vh - 3.25rem)}.pagination{font-size:1rem;margin:-.25rem}.pagination.is-small{font-size:.75rem}.pagination.is-medium{font-size:1.25rem}.pagination.is-large{font-size:1.5rem}.pagination.is-rounded .pagination-next,.pagination.is-rounded .pagination-previous{padding-left:1em;padding-right:1em;border-radius:290486px}.pagination.is-rounded .pagination-link{border-radius:290486px}.pagination,.pagination-list{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous{font-size:1em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin:.25rem;padding-left:.5em;padding-right:.5em;text-align:center}.pagination-link,.pagination-next,.pagination-previous{border-color:#dbdbdb;color:#363636;min-width:2.25em}.pagination-link:hover,.pagination-next:hover,.pagination-previous:hover{border-color:#b5b5b5;color:#363636}.pagination-link:focus,.pagination-next:focus,.pagination-previous:focus{border-color:#7957d5}.pagination-link:active,.pagination-next:active,.pagination-previous:active{-webkit-box-shadow:inset 0 1px 2px rgba(10,10,10,.2);box-shadow:inset 0 1px 2px rgba(10,10,10,.2)}.pagination-link[disabled],.pagination-next[disabled],.pagination-previous[disabled]{background-color:#dbdbdb;border-color:#dbdbdb;-webkit-box-shadow:none;box-shadow:none;color:#7a7a7a;opacity:.5}.pagination-next,.pagination-previous{padding-left:.75em;padding-right:.75em;white-space:nowrap}.pagination-link.is-current{background-color:#7957d5;border-color:#7957d5;color:#fff}.pagination-ellipsis{color:#b5b5b5;pointer-events:none}.pagination-list{-ms-flex-wrap:wrap;flex-wrap:wrap}@media screen and (max-width:768px){.pagination{-ms-flex-wrap:wrap;flex-wrap:wrap}.pagination-list li,.pagination-next,.pagination-previous{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}}@media print,screen and (min-width:769px){.pagination-list{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.pagination-previous{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.pagination-next{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.pagination{-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.pagination.is-centered .pagination-previous{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.pagination.is-centered .pagination-list{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.pagination.is-centered .pagination-next{-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}.pagination.is-right .pagination-previous{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.pagination.is-right .pagination-next{-webkit-box-ordinal-group:3;-ms-flex-order:2;order:2}.pagination.is-right .pagination-list{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;-webkit-box-ordinal-group:4;-ms-flex-order:3;order:3}}.panel{font-size:1rem}.panel:not(:last-child){margin-bottom:1.5rem}.panel-block,.panel-heading,.panel-tabs{border-bottom:1px solid #dbdbdb;border-left:1px solid #dbdbdb;border-right:1px solid #dbdbdb}.panel-block:first-child,.panel-heading:first-child,.panel-tabs:first-child{border-top:1px solid #dbdbdb}.panel-heading{background-color:#f5f5f5;border-radius:4px 4px 0 0;color:#363636;font-size:1.25em;font-weight:300;line-height:1.25;padding:.5em .75em}.panel-tabs{-webkit-box-align:end;-ms-flex-align:end;align-items:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:.875em;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.panel-tabs a{border-bottom:1px solid #dbdbdb;margin-bottom:-1px;padding:.5em}.panel-tabs a.is-active{border-bottom-color:#4a4a4a;color:#363636}.panel-list a{color:#4a4a4a}.panel-list a:hover{color:#7957d5}.panel-block{-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#363636;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;padding:.5em .75em}.panel-block input[type=checkbox]{margin-right:.75em}.panel-block>.control{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;width:100%}.panel-block.is-wrapped{-ms-flex-wrap:wrap;flex-wrap:wrap}.panel-block.is-active{border-left-color:#7957d5;color:#363636}.panel-block.is-active .panel-icon{color:#7957d5}a.panel-block,label.panel-block{cursor:pointer}a.panel-block:hover,label.panel-block:hover{background-color:#f5f5f5}.panel-icon{display:inline-block;font-size:14px;height:1em;line-height:1em;text-align:center;vertical-align:top;width:1em;color:#7a7a7a;margin-right:.75em}.panel-icon .fa{font-size:inherit;line-height:inherit}.tabs{-webkit-overflow-scrolling:touch;-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;font-size:1rem;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;overflow:hidden;overflow-x:auto;white-space:nowrap}.tabs,.tabs a{display:-webkit-box;display:-ms-flexbox;display:flex}.tabs a{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #dbdbdb;color:#4a4a4a;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:-1px;padding:.5em 1em;vertical-align:top}.tabs a:hover{border-bottom-color:#363636;color:#363636}.tabs li{display:block}.tabs li.is-active a{border-bottom-color:#7957d5;color:#7957d5}.tabs ul{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-bottom:1px solid #dbdbdb;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.tabs ul.is-center,.tabs ul.is-left{padding-right:.75em}.tabs ul.is-center{-webkit-box-flex:0;-ms-flex:none;flex:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding-left:.75em}.tabs ul.is-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;padding-left:.75em}.tabs .icon:first-child{margin-right:.5em}.tabs .icon:last-child{margin-left:.5em}.tabs.is-centered ul{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.tabs.is-right ul{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.tabs.is-boxed a{border:1px solid transparent;border-radius:4px 4px 0 0}.tabs.is-boxed a:hover{background-color:#f5f5f5;border-bottom-color:#dbdbdb}.tabs.is-boxed li.is-active a{background-color:#fff;border-color:#dbdbdb;border-bottom-color:transparent!important}.tabs.is-fullwidth li{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:0;flex-shrink:0}.tabs.is-toggle a{border:1px solid #dbdbdb;margin-bottom:0;position:relative}.tabs.is-toggle a:hover{background-color:#f5f5f5;border-color:#b5b5b5;z-index:2}.tabs.is-toggle li+li{margin-left:-1px}.tabs.is-toggle li:first-child a{border-radius:4px 0 0 4px}.tabs.is-toggle li:last-child a{border-radius:0 4px 4px 0}.tabs.is-toggle li.is-active a{background-color:#7957d5;border-color:#7957d5;color:#fff;z-index:1}.tabs.is-toggle ul{border-bottom:none}.tabs.is-toggle.is-toggle-rounded li:first-child a{border-bottom-left-radius:290486px;border-top-left-radius:290486px;padding-left:1.25em}.tabs.is-toggle.is-toggle-rounded li:last-child a{border-bottom-right-radius:290486px;border-top-right-radius:290486px;padding-right:1.25em}.tabs.is-small{font-size:.75rem}.tabs.is-medium{font-size:1.25rem}.tabs.is-large{font-size:1.5rem}.column{display:block;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;padding:.75rem}.columns.is-mobile>.column.is-full,.columns.is-mobile>.column.is-narrow{-webkit-box-flex:0;-ms-flex:none;flex:none}.columns.is-mobile>.column.is-full{width:100%}.columns.is-mobile>.column.is-three-quarters{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.columns.is-mobile>.column.is-two-thirds{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.columns.is-mobile>.column.is-half{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.columns.is-mobile>.column.is-one-third{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.columns.is-mobile>.column.is-one-quarter{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.columns.is-mobile>.column.is-one-fifth{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.columns.is-mobile>.column.is-two-fifths{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.columns.is-mobile>.column.is-three-fifths{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.columns.is-mobile>.column.is-four-fifths{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.columns.is-mobile>.column.is-offset-three-quarters{margin-left:75%}.columns.is-mobile>.column.is-offset-two-thirds{margin-left:66.6666%}.columns.is-mobile>.column.is-offset-half{margin-left:50%}.columns.is-mobile>.column.is-offset-one-third{margin-left:33.3333%}.columns.is-mobile>.column.is-offset-one-quarter{margin-left:25%}.columns.is-mobile>.column.is-offset-one-fifth{margin-left:20%}.columns.is-mobile>.column.is-offset-two-fifths{margin-left:40%}.columns.is-mobile>.column.is-offset-three-fifths{margin-left:60%}.columns.is-mobile>.column.is-offset-four-fifths{margin-left:80%}.columns.is-mobile>.column.is-0{-webkit-box-flex:0;-ms-flex:none;flex:none;width:0}.columns.is-mobile>.column.is-offset-0{margin-left:0}.columns.is-mobile>.column.is-1{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.columns.is-mobile>.column.is-offset-1{margin-left:8.33333%}.columns.is-mobile>.column.is-2{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.columns.is-mobile>.column.is-offset-2{margin-left:16.66667%}.columns.is-mobile>.column.is-3{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.columns.is-mobile>.column.is-offset-3{margin-left:25%}.columns.is-mobile>.column.is-4{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.columns.is-mobile>.column.is-offset-4{margin-left:33.33333%}.columns.is-mobile>.column.is-5{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.columns.is-mobile>.column.is-offset-5{margin-left:41.66667%}.columns.is-mobile>.column.is-6{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.columns.is-mobile>.column.is-offset-6{margin-left:50%}.columns.is-mobile>.column.is-7{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.columns.is-mobile>.column.is-offset-7{margin-left:58.33333%}.columns.is-mobile>.column.is-8{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.columns.is-mobile>.column.is-offset-8{margin-left:66.66667%}.columns.is-mobile>.column.is-9{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.columns.is-mobile>.column.is-offset-9{margin-left:75%}.columns.is-mobile>.column.is-10{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.columns.is-mobile>.column.is-offset-10{margin-left:83.33333%}.columns.is-mobile>.column.is-11{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.columns.is-mobile>.column.is-offset-11{margin-left:91.66667%}.columns.is-mobile>.column.is-12{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.columns.is-mobile>.column.is-offset-12{margin-left:100%}@media screen and (max-width:768px){.column.is-full-mobile,.column.is-narrow-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none}.column.is-full-mobile{width:100%}.column.is-three-quarters-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-mobile{margin-left:75%}.column.is-offset-two-thirds-mobile{margin-left:66.6666%}.column.is-offset-half-mobile{margin-left:50%}.column.is-offset-one-third-mobile{margin-left:33.3333%}.column.is-offset-one-quarter-mobile{margin-left:25%}.column.is-offset-one-fifth-mobile{margin-left:20%}.column.is-offset-two-fifths-mobile{margin-left:40%}.column.is-offset-three-fifths-mobile{margin-left:60%}.column.is-offset-four-fifths-mobile{margin-left:80%}.column.is-0-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:0}.column.is-offset-0-mobile{margin-left:0}.column.is-1-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.column.is-offset-1-mobile{margin-left:8.33333%}.column.is-2-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.column.is-offset-2-mobile{margin-left:16.66667%}.column.is-3-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-mobile{margin-left:25%}.column.is-4-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.column.is-offset-4-mobile{margin-left:33.33333%}.column.is-5-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.column.is-offset-5-mobile{margin-left:41.66667%}.column.is-6-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-mobile{margin-left:50%}.column.is-7-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.column.is-offset-7-mobile{margin-left:58.33333%}.column.is-8-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.column.is-offset-8-mobile{margin-left:66.66667%}.column.is-9-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-mobile{margin-left:75%}.column.is-10-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.column.is-offset-10-mobile{margin-left:83.33333%}.column.is-11-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.column.is-offset-11-mobile{margin-left:91.66667%}.column.is-12-mobile{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-mobile{margin-left:100%}}@media print,screen and (min-width:769px){.column.is-full,.column.is-full-tablet,.column.is-narrow,.column.is-narrow-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none}.column.is-full,.column.is-full-tablet{width:100%}.column.is-three-quarters,.column.is-three-quarters-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds,.column.is-two-thirds-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half,.column.is-half-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third,.column.is-one-third-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter,.column.is-one-quarter-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth,.column.is-one-fifth-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths,.column.is-two-fifths-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths,.column.is-three-fifths-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths,.column.is-four-fifths-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters,.column.is-offset-three-quarters-tablet{margin-left:75%}.column.is-offset-two-thirds,.column.is-offset-two-thirds-tablet{margin-left:66.6666%}.column.is-offset-half,.column.is-offset-half-tablet{margin-left:50%}.column.is-offset-one-third,.column.is-offset-one-third-tablet{margin-left:33.3333%}.column.is-offset-one-quarter,.column.is-offset-one-quarter-tablet{margin-left:25%}.column.is-offset-one-fifth,.column.is-offset-one-fifth-tablet{margin-left:20%}.column.is-offset-two-fifths,.column.is-offset-two-fifths-tablet{margin-left:40%}.column.is-offset-three-fifths,.column.is-offset-three-fifths-tablet{margin-left:60%}.column.is-offset-four-fifths,.column.is-offset-four-fifths-tablet{margin-left:80%}.column.is-0,.column.is-0-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:0}.column.is-offset-0,.column.is-offset-0-tablet{margin-left:0}.column.is-1,.column.is-1-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.column.is-offset-1,.column.is-offset-1-tablet{margin-left:8.33333%}.column.is-2,.column.is-2-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.column.is-offset-2,.column.is-offset-2-tablet{margin-left:16.66667%}.column.is-3,.column.is-3-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3,.column.is-offset-3-tablet{margin-left:25%}.column.is-4,.column.is-4-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.column.is-offset-4,.column.is-offset-4-tablet{margin-left:33.33333%}.column.is-5,.column.is-5-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.column.is-offset-5,.column.is-offset-5-tablet{margin-left:41.66667%}.column.is-6,.column.is-6-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6,.column.is-offset-6-tablet{margin-left:50%}.column.is-7,.column.is-7-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.column.is-offset-7,.column.is-offset-7-tablet{margin-left:58.33333%}.column.is-8,.column.is-8-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.column.is-offset-8,.column.is-offset-8-tablet{margin-left:66.66667%}.column.is-9,.column.is-9-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9,.column.is-offset-9-tablet{margin-left:75%}.column.is-10,.column.is-10-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.column.is-offset-10,.column.is-offset-10-tablet{margin-left:83.33333%}.column.is-11,.column.is-11-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.column.is-offset-11,.column.is-offset-11-tablet{margin-left:91.66667%}.column.is-12,.column.is-12-tablet{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12,.column.is-offset-12-tablet{margin-left:100%}}@media screen and (max-width:1023px){.column.is-full-touch,.column.is-narrow-touch{-webkit-box-flex:0;-ms-flex:none;flex:none}.column.is-full-touch{width:100%}.column.is-three-quarters-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-touch{margin-left:75%}.column.is-offset-two-thirds-touch{margin-left:66.6666%}.column.is-offset-half-touch{margin-left:50%}.column.is-offset-one-third-touch{margin-left:33.3333%}.column.is-offset-one-quarter-touch{margin-left:25%}.column.is-offset-one-fifth-touch{margin-left:20%}.column.is-offset-two-fifths-touch{margin-left:40%}.column.is-offset-three-fifths-touch{margin-left:60%}.column.is-offset-four-fifths-touch{margin-left:80%}.column.is-0-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:0}.column.is-offset-0-touch{margin-left:0}.column.is-1-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.column.is-offset-1-touch{margin-left:8.33333%}.column.is-2-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.column.is-offset-2-touch{margin-left:16.66667%}.column.is-3-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-touch{margin-left:25%}.column.is-4-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.column.is-offset-4-touch{margin-left:33.33333%}.column.is-5-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.column.is-offset-5-touch{margin-left:41.66667%}.column.is-6-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-touch{margin-left:50%}.column.is-7-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.column.is-offset-7-touch{margin-left:58.33333%}.column.is-8-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.column.is-offset-8-touch{margin-left:66.66667%}.column.is-9-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-touch{margin-left:75%}.column.is-10-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.column.is-offset-10-touch{margin-left:83.33333%}.column.is-11-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.column.is-offset-11-touch{margin-left:91.66667%}.column.is-12-touch{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-touch{margin-left:100%}}@media screen and (min-width:1024px){.column.is-full-desktop,.column.is-narrow-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none}.column.is-full-desktop{width:100%}.column.is-three-quarters-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-desktop{margin-left:75%}.column.is-offset-two-thirds-desktop{margin-left:66.6666%}.column.is-offset-half-desktop{margin-left:50%}.column.is-offset-one-third-desktop{margin-left:33.3333%}.column.is-offset-one-quarter-desktop{margin-left:25%}.column.is-offset-one-fifth-desktop{margin-left:20%}.column.is-offset-two-fifths-desktop{margin-left:40%}.column.is-offset-three-fifths-desktop{margin-left:60%}.column.is-offset-four-fifths-desktop{margin-left:80%}.column.is-0-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:0}.column.is-offset-0-desktop{margin-left:0}.column.is-1-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.column.is-offset-1-desktop{margin-left:8.33333%}.column.is-2-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.column.is-offset-2-desktop{margin-left:16.66667%}.column.is-3-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-desktop{margin-left:25%}.column.is-4-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.column.is-offset-4-desktop{margin-left:33.33333%}.column.is-5-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.column.is-offset-5-desktop{margin-left:41.66667%}.column.is-6-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-desktop{margin-left:50%}.column.is-7-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.column.is-offset-7-desktop{margin-left:58.33333%}.column.is-8-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.column.is-offset-8-desktop{margin-left:66.66667%}.column.is-9-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-desktop{margin-left:75%}.column.is-10-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.column.is-offset-10-desktop{margin-left:83.33333%}.column.is-11-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.column.is-offset-11-desktop{margin-left:91.66667%}.column.is-12-desktop{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-desktop{margin-left:100%}}@media screen and (min-width:1216px){.column.is-full-widescreen,.column.is-narrow-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none}.column.is-full-widescreen{width:100%}.column.is-three-quarters-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-widescreen{margin-left:75%}.column.is-offset-two-thirds-widescreen{margin-left:66.6666%}.column.is-offset-half-widescreen{margin-left:50%}.column.is-offset-one-third-widescreen{margin-left:33.3333%}.column.is-offset-one-quarter-widescreen{margin-left:25%}.column.is-offset-one-fifth-widescreen{margin-left:20%}.column.is-offset-two-fifths-widescreen{margin-left:40%}.column.is-offset-three-fifths-widescreen{margin-left:60%}.column.is-offset-four-fifths-widescreen{margin-left:80%}.column.is-0-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:0}.column.is-offset-0-widescreen{margin-left:0}.column.is-1-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.column.is-offset-1-widescreen{margin-left:8.33333%}.column.is-2-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.column.is-offset-2-widescreen{margin-left:16.66667%}.column.is-3-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-widescreen{margin-left:25%}.column.is-4-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.column.is-offset-4-widescreen{margin-left:33.33333%}.column.is-5-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.column.is-offset-5-widescreen{margin-left:41.66667%}.column.is-6-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-widescreen{margin-left:50%}.column.is-7-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.column.is-offset-7-widescreen{margin-left:58.33333%}.column.is-8-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.column.is-offset-8-widescreen{margin-left:66.66667%}.column.is-9-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-widescreen{margin-left:75%}.column.is-10-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.column.is-offset-10-widescreen{margin-left:83.33333%}.column.is-11-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.column.is-offset-11-widescreen{margin-left:91.66667%}.column.is-12-widescreen{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-widescreen{margin-left:100%}}@media screen and (min-width:1408px){.column.is-full-fullhd,.column.is-narrow-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none}.column.is-full-fullhd{width:100%}.column.is-three-quarters-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-two-thirds-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.6666%}.column.is-half-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-one-third-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.3333%}.column.is-one-quarter-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-one-fifth-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:20%}.column.is-two-fifths-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:40%}.column.is-three-fifths-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:60%}.column.is-four-fifths-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:80%}.column.is-offset-three-quarters-fullhd{margin-left:75%}.column.is-offset-two-thirds-fullhd{margin-left:66.6666%}.column.is-offset-half-fullhd{margin-left:50%}.column.is-offset-one-third-fullhd{margin-left:33.3333%}.column.is-offset-one-quarter-fullhd{margin-left:25%}.column.is-offset-one-fifth-fullhd{margin-left:20%}.column.is-offset-two-fifths-fullhd{margin-left:40%}.column.is-offset-three-fifths-fullhd{margin-left:60%}.column.is-offset-four-fifths-fullhd{margin-left:80%}.column.is-0-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:0}.column.is-offset-0-fullhd{margin-left:0}.column.is-1-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:8.33333%}.column.is-offset-1-fullhd{margin-left:8.33333%}.column.is-2-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:16.66667%}.column.is-offset-2-fullhd{margin-left:16.66667%}.column.is-3-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:25%}.column.is-offset-3-fullhd{margin-left:25%}.column.is-4-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:33.33333%}.column.is-offset-4-fullhd{margin-left:33.33333%}.column.is-5-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:41.66667%}.column.is-offset-5-fullhd{margin-left:41.66667%}.column.is-6-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:50%}.column.is-offset-6-fullhd{margin-left:50%}.column.is-7-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:58.33333%}.column.is-offset-7-fullhd{margin-left:58.33333%}.column.is-8-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:66.66667%}.column.is-offset-8-fullhd{margin-left:66.66667%}.column.is-9-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:75%}.column.is-offset-9-fullhd{margin-left:75%}.column.is-10-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:83.33333%}.column.is-offset-10-fullhd{margin-left:83.33333%}.column.is-11-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:91.66667%}.column.is-offset-11-fullhd{margin-left:91.66667%}.column.is-12-fullhd{-webkit-box-flex:0;-ms-flex:none;flex:none;width:100%}.column.is-offset-12-fullhd{margin-left:100%}}.columns{margin-left:-.75rem;margin-right:-.75rem;margin-top:-.75rem}.columns:last-child{margin-bottom:-.75rem}.columns:not(:last-child){margin-bottom:.75rem}.columns.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.columns.is-gapless{margin-left:0;margin-right:0;margin-top:0}.columns.is-gapless>.column{margin:0;padding:0!important}.columns.is-gapless:not(:last-child){margin-bottom:1.5rem}.columns.is-gapless:last-child{margin-bottom:0}.columns.is-mobile{display:-webkit-box;display:-ms-flexbox;display:flex}.columns.is-multiline{-ms-flex-wrap:wrap;flex-wrap:wrap}.columns.is-vcentered{-webkit-box-align:center;-ms-flex-align:center;align-items:center}@media print,screen and (min-width:769px){.columns:not(.is-desktop){display:-webkit-box;display:-ms-flexbox;display:flex}}@media screen and (min-width:1024px){.columns.is-desktop{display:-webkit-box;display:-ms-flexbox;display:flex}}.columns.is-variable{--columnGap:0.75rem;margin-left:calc(-1*var(--columnGap));margin-right:calc(-1*var(--columnGap))}.columns.is-variable .column{padding-left:var(--columnGap);padding-right:var(--columnGap)}.columns.is-variable.is-0{--columnGap:0rem}@media screen and (max-width:768px){.columns.is-variable.is-0-mobile{--columnGap:0rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-0-tablet{--columnGap:0rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-0-tablet-only{--columnGap:0rem}}@media screen and (max-width:1023px){.columns.is-variable.is-0-touch{--columnGap:0rem}}@media screen and (min-width:1024px){.columns.is-variable.is-0-desktop{--columnGap:0rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-0-desktop-only{--columnGap:0rem}}@media screen and (min-width:1216px){.columns.is-variable.is-0-widescreen{--columnGap:0rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-0-widescreen-only{--columnGap:0rem}}@media screen and (min-width:1408px){.columns.is-variable.is-0-fullhd{--columnGap:0rem}}.columns.is-variable.is-1{--columnGap:0.25rem}@media screen and (max-width:768px){.columns.is-variable.is-1-mobile{--columnGap:0.25rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-1-tablet{--columnGap:0.25rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-1-tablet-only{--columnGap:0.25rem}}@media screen and (max-width:1023px){.columns.is-variable.is-1-touch{--columnGap:0.25rem}}@media screen and (min-width:1024px){.columns.is-variable.is-1-desktop{--columnGap:0.25rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-1-desktop-only{--columnGap:0.25rem}}@media screen and (min-width:1216px){.columns.is-variable.is-1-widescreen{--columnGap:0.25rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-1-widescreen-only{--columnGap:0.25rem}}@media screen and (min-width:1408px){.columns.is-variable.is-1-fullhd{--columnGap:0.25rem}}.columns.is-variable.is-2{--columnGap:0.5rem}@media screen and (max-width:768px){.columns.is-variable.is-2-mobile{--columnGap:0.5rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-2-tablet{--columnGap:0.5rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-2-tablet-only{--columnGap:0.5rem}}@media screen and (max-width:1023px){.columns.is-variable.is-2-touch{--columnGap:0.5rem}}@media screen and (min-width:1024px){.columns.is-variable.is-2-desktop{--columnGap:0.5rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-2-desktop-only{--columnGap:0.5rem}}@media screen and (min-width:1216px){.columns.is-variable.is-2-widescreen{--columnGap:0.5rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-2-widescreen-only{--columnGap:0.5rem}}@media screen and (min-width:1408px){.columns.is-variable.is-2-fullhd{--columnGap:0.5rem}}.columns.is-variable.is-3{--columnGap:0.75rem}@media screen and (max-width:768px){.columns.is-variable.is-3-mobile{--columnGap:0.75rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-3-tablet{--columnGap:0.75rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-3-tablet-only{--columnGap:0.75rem}}@media screen and (max-width:1023px){.columns.is-variable.is-3-touch{--columnGap:0.75rem}}@media screen and (min-width:1024px){.columns.is-variable.is-3-desktop{--columnGap:0.75rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-3-desktop-only{--columnGap:0.75rem}}@media screen and (min-width:1216px){.columns.is-variable.is-3-widescreen{--columnGap:0.75rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-3-widescreen-only{--columnGap:0.75rem}}@media screen and (min-width:1408px){.columns.is-variable.is-3-fullhd{--columnGap:0.75rem}}.columns.is-variable.is-4{--columnGap:1rem}@media screen and (max-width:768px){.columns.is-variable.is-4-mobile{--columnGap:1rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-4-tablet{--columnGap:1rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-4-tablet-only{--columnGap:1rem}}@media screen and (max-width:1023px){.columns.is-variable.is-4-touch{--columnGap:1rem}}@media screen and (min-width:1024px){.columns.is-variable.is-4-desktop{--columnGap:1rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-4-desktop-only{--columnGap:1rem}}@media screen and (min-width:1216px){.columns.is-variable.is-4-widescreen{--columnGap:1rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-4-widescreen-only{--columnGap:1rem}}@media screen and (min-width:1408px){.columns.is-variable.is-4-fullhd{--columnGap:1rem}}.columns.is-variable.is-5{--columnGap:1.25rem}@media screen and (max-width:768px){.columns.is-variable.is-5-mobile{--columnGap:1.25rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-5-tablet{--columnGap:1.25rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-5-tablet-only{--columnGap:1.25rem}}@media screen and (max-width:1023px){.columns.is-variable.is-5-touch{--columnGap:1.25rem}}@media screen and (min-width:1024px){.columns.is-variable.is-5-desktop{--columnGap:1.25rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-5-desktop-only{--columnGap:1.25rem}}@media screen and (min-width:1216px){.columns.is-variable.is-5-widescreen{--columnGap:1.25rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-5-widescreen-only{--columnGap:1.25rem}}@media screen and (min-width:1408px){.columns.is-variable.is-5-fullhd{--columnGap:1.25rem}}.columns.is-variable.is-6{--columnGap:1.5rem}@media screen and (max-width:768px){.columns.is-variable.is-6-mobile{--columnGap:1.5rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-6-tablet{--columnGap:1.5rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-6-tablet-only{--columnGap:1.5rem}}@media screen and (max-width:1023px){.columns.is-variable.is-6-touch{--columnGap:1.5rem}}@media screen and (min-width:1024px){.columns.is-variable.is-6-desktop{--columnGap:1.5rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-6-desktop-only{--columnGap:1.5rem}}@media screen and (min-width:1216px){.columns.is-variable.is-6-widescreen{--columnGap:1.5rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-6-widescreen-only{--columnGap:1.5rem}}@media screen and (min-width:1408px){.columns.is-variable.is-6-fullhd{--columnGap:1.5rem}}.columns.is-variable.is-7{--columnGap:1.75rem}@media screen and (max-width:768px){.columns.is-variable.is-7-mobile{--columnGap:1.75rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-7-tablet{--columnGap:1.75rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-7-tablet-only{--columnGap:1.75rem}}@media screen and (max-width:1023px){.columns.is-variable.is-7-touch{--columnGap:1.75rem}}@media screen and (min-width:1024px){.columns.is-variable.is-7-desktop{--columnGap:1.75rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-7-desktop-only{--columnGap:1.75rem}}@media screen and (min-width:1216px){.columns.is-variable.is-7-widescreen{--columnGap:1.75rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-7-widescreen-only{--columnGap:1.75rem}}@media screen and (min-width:1408px){.columns.is-variable.is-7-fullhd{--columnGap:1.75rem}}.columns.is-variable.is-8{--columnGap:2rem}@media screen and (max-width:768px){.columns.is-variable.is-8-mobile{--columnGap:2rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-8-tablet{--columnGap:2rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-8-tablet-only{--columnGap:2rem}}@media screen and (max-width:1023px){.columns.is-variable.is-8-touch{--columnGap:2rem}}@media screen and (min-width:1024px){.columns.is-variable.is-8-desktop{--columnGap:2rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-8-desktop-only{--columnGap:2rem}}@media screen and (min-width:1216px){.columns.is-variable.is-8-widescreen{--columnGap:2rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-8-widescreen-only{--columnGap:2rem}}@media screen and (min-width:1408px){.columns.is-variable.is-8-fullhd{--columnGap:2rem}}.tile{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:block;-ms-flex-preferred-size:0;flex-basis:0;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1;min-height:-webkit-min-content;min-height:-moz-min-content;min-height:min-content}.tile.is-ancestor{margin-left:-.75rem;margin-right:-.75rem;margin-top:-.75rem}.tile.is-ancestor:last-child{margin-bottom:-.75rem}.tile.is-ancestor:not(:last-child){margin-bottom:.75rem}.tile.is-child{margin:0!important}.tile.is-parent{padding:.75rem}.tile.is-vertical{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.tile.is-vertical>.tile.is-child:not(:last-child){margin-bottom:1.5rem!important}@media print,screen and (min-width:769px){.tile:not(.is-child){display:-webkit-box;display:-ms-flexbox;display:flex}.tile.is-1{width:8.33333%}.tile.is-1,.tile.is-2{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-2{width:16.66667%}.tile.is-3{width:25%}.tile.is-3,.tile.is-4{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-4{width:33.33333%}.tile.is-5{width:41.66667%}.tile.is-5,.tile.is-6{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-6{width:50%}.tile.is-7{width:58.33333%}.tile.is-7,.tile.is-8{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-8{width:66.66667%}.tile.is-9{width:75%}.tile.is-9,.tile.is-10{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-10{width:83.33333%}.tile.is-11{width:91.66667%}.tile.is-11,.tile.is-12{-webkit-box-flex:0;-ms-flex:none;flex:none}.tile.is-12{width:100%}}.hero{-webkit-box-align:stretch;-ms-flex-align:stretch;align-items:stretch;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between}.hero .navbar{background:none}.hero .tabs ul{border-bottom:none}.hero.is-white{background-color:#fff;color:#0a0a0a}.hero.is-white a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-white strong{color:inherit}.hero.is-white .title{color:#0a0a0a}.hero.is-white .subtitle{color:rgba(10,10,10,.9)}.hero.is-white .subtitle a:not(.button),.hero.is-white .subtitle strong{color:#0a0a0a}@media screen and (max-width:1023px){.hero.is-white .navbar-menu{background-color:#fff}}.hero.is-white .navbar-item,.hero.is-white .navbar-link{color:rgba(10,10,10,.7)}.hero.is-white .navbar-link.is-active,.hero.is-white .navbar-link:hover,.hero.is-white a.navbar-item.is-active,.hero.is-white a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.hero.is-white .tabs a{color:#0a0a0a;opacity:.9}.hero.is-white .tabs a:hover,.hero.is-white .tabs li.is-active a{opacity:1}.hero.is-white .tabs.is-boxed a,.hero.is-white .tabs.is-toggle a{color:#0a0a0a}.hero.is-white .tabs.is-boxed a:hover,.hero.is-white .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-white .tabs.is-boxed li.is-active a,.hero.is-white .tabs.is-boxed li.is-active a:hover,.hero.is-white .tabs.is-toggle li.is-active a,.hero.is-white .tabs.is-toggle li.is-active a:hover{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.hero.is-white.is-bold{background-image:linear-gradient(141deg,#e6e6e6,#fff 71%,#fff)}@media screen and (max-width:768px){.hero.is-white.is-bold .navbar-menu{background-image:linear-gradient(141deg,#e6e6e6,#fff 71%,#fff)}}.hero.is-black{background-color:#0a0a0a;color:#fff}.hero.is-black a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-black strong{color:inherit}.hero.is-black .title{color:#fff}.hero.is-black .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-black .subtitle a:not(.button),.hero.is-black .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-black .navbar-menu{background-color:#0a0a0a}}.hero.is-black .navbar-item,.hero.is-black .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-black .navbar-link.is-active,.hero.is-black .navbar-link:hover,.hero.is-black a.navbar-item.is-active,.hero.is-black a.navbar-item:hover{background-color:#000;color:#fff}.hero.is-black .tabs a{color:#fff;opacity:.9}.hero.is-black .tabs a:hover,.hero.is-black .tabs li.is-active a{opacity:1}.hero.is-black .tabs.is-boxed a,.hero.is-black .tabs.is-toggle a{color:#fff}.hero.is-black .tabs.is-boxed a:hover,.hero.is-black .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-black .tabs.is-boxed li.is-active a,.hero.is-black .tabs.is-boxed li.is-active a:hover,.hero.is-black .tabs.is-toggle li.is-active a,.hero.is-black .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#0a0a0a}.hero.is-black.is-bold{background-image:linear-gradient(141deg,#000,#0a0a0a 71%,#181616)}@media screen and (max-width:768px){.hero.is-black.is-bold .navbar-menu{background-image:linear-gradient(141deg,#000,#0a0a0a 71%,#181616)}}.hero.is-light{background-color:#f5f5f5;color:#363636}.hero.is-light a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-light strong{color:inherit}.hero.is-light .title{color:#363636}.hero.is-light .subtitle{color:rgba(54,54,54,.9)}.hero.is-light .subtitle a:not(.button),.hero.is-light .subtitle strong{color:#363636}@media screen and (max-width:1023px){.hero.is-light .navbar-menu{background-color:#f5f5f5}}.hero.is-light .navbar-item,.hero.is-light .navbar-link{color:rgba(54,54,54,.7)}.hero.is-light .navbar-link.is-active,.hero.is-light .navbar-link:hover,.hero.is-light a.navbar-item.is-active,.hero.is-light a.navbar-item:hover{background-color:#e8e8e8;color:#363636}.hero.is-light .tabs a{color:#363636;opacity:.9}.hero.is-light .tabs a:hover,.hero.is-light .tabs li.is-active a{opacity:1}.hero.is-light .tabs.is-boxed a,.hero.is-light .tabs.is-toggle a{color:#363636}.hero.is-light .tabs.is-boxed a:hover,.hero.is-light .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-light .tabs.is-boxed li.is-active a,.hero.is-light .tabs.is-boxed li.is-active a:hover,.hero.is-light .tabs.is-toggle li.is-active a,.hero.is-light .tabs.is-toggle li.is-active a:hover{background-color:#363636;border-color:#363636;color:#f5f5f5}.hero.is-light.is-bold{background-image:linear-gradient(141deg,#dfd8d9,#f5f5f5 71%,#fff)}@media screen and (max-width:768px){.hero.is-light.is-bold .navbar-menu{background-image:linear-gradient(141deg,#dfd8d9,#f5f5f5 71%,#fff)}}.hero.is-dark{background-color:#363636;color:#f5f5f5}.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-dark strong{color:inherit}.hero.is-dark .title{color:#f5f5f5}.hero.is-dark .subtitle{color:hsla(0,0%,96.1%,.9)}.hero.is-dark .subtitle a:not(.button),.hero.is-dark .subtitle strong{color:#f5f5f5}@media screen and (max-width:1023px){.hero.is-dark .navbar-menu{background-color:#363636}}.hero.is-dark .navbar-item,.hero.is-dark .navbar-link{color:hsla(0,0%,96.1%,.7)}.hero.is-dark .navbar-link.is-active,.hero.is-dark .navbar-link:hover,.hero.is-dark a.navbar-item.is-active,.hero.is-dark a.navbar-item:hover{background-color:#292929;color:#f5f5f5}.hero.is-dark .tabs a{color:#f5f5f5;opacity:.9}.hero.is-dark .tabs a:hover,.hero.is-dark .tabs li.is-active a{opacity:1}.hero.is-dark .tabs.is-boxed a,.hero.is-dark .tabs.is-toggle a{color:#f5f5f5}.hero.is-dark .tabs.is-boxed a:hover,.hero.is-dark .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-dark .tabs.is-boxed li.is-active a,.hero.is-dark .tabs.is-boxed li.is-active a:hover,.hero.is-dark .tabs.is-toggle li.is-active a,.hero.is-dark .tabs.is-toggle li.is-active a:hover{background-color:#f5f5f5;border-color:#f5f5f5;color:#363636}.hero.is-dark.is-bold{background-image:linear-gradient(141deg,#1f191a,#363636 71%,#46403f)}@media screen and (max-width:768px){.hero.is-dark.is-bold .navbar-menu{background-image:linear-gradient(141deg,#1f191a,#363636 71%,#46403f)}}.hero.is-primary{background-color:#7957d5;color:#fff}.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-primary strong{color:inherit}.hero.is-primary .title{color:#fff}.hero.is-primary .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-primary .subtitle a:not(.button),.hero.is-primary .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-primary .navbar-menu{background-color:#7957d5}}.hero.is-primary .navbar-item,.hero.is-primary .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-primary .navbar-link.is-active,.hero.is-primary .navbar-link:hover,.hero.is-primary a.navbar-item.is-active,.hero.is-primary a.navbar-item:hover{background-color:#6943d0;color:#fff}.hero.is-primary .tabs a{color:#fff;opacity:.9}.hero.is-primary .tabs a:hover,.hero.is-primary .tabs li.is-active a{opacity:1}.hero.is-primary .tabs.is-boxed a,.hero.is-primary .tabs.is-toggle a{color:#fff}.hero.is-primary .tabs.is-boxed a:hover,.hero.is-primary .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-primary .tabs.is-boxed li.is-active a,.hero.is-primary .tabs.is-boxed li.is-active a:hover,.hero.is-primary .tabs.is-toggle li.is-active a,.hero.is-primary .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#7957d5}.hero.is-primary.is-bold{background-image:linear-gradient(141deg,#3725d4,#7957d5 71%,#9b67df)}@media screen and (max-width:768px){.hero.is-primary.is-bold .navbar-menu{background-image:linear-gradient(141deg,#3725d4,#7957d5 71%,#9b67df)}}.hero.is-link{background-color:#7957d5;color:#fff}.hero.is-link a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-link strong{color:inherit}.hero.is-link .title{color:#fff}.hero.is-link .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-link .subtitle a:not(.button),.hero.is-link .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-link .navbar-menu{background-color:#7957d5}}.hero.is-link .navbar-item,.hero.is-link .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-link .navbar-link.is-active,.hero.is-link .navbar-link:hover,.hero.is-link a.navbar-item.is-active,.hero.is-link a.navbar-item:hover{background-color:#6943d0;color:#fff}.hero.is-link .tabs a{color:#fff;opacity:.9}.hero.is-link .tabs a:hover,.hero.is-link .tabs li.is-active a{opacity:1}.hero.is-link .tabs.is-boxed a,.hero.is-link .tabs.is-toggle a{color:#fff}.hero.is-link .tabs.is-boxed a:hover,.hero.is-link .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-link .tabs.is-boxed li.is-active a,.hero.is-link .tabs.is-boxed li.is-active a:hover,.hero.is-link .tabs.is-toggle li.is-active a,.hero.is-link .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#7957d5}.hero.is-link.is-bold{background-image:linear-gradient(141deg,#3725d4,#7957d5 71%,#9b67df)}@media screen and (max-width:768px){.hero.is-link.is-bold .navbar-menu{background-image:linear-gradient(141deg,#3725d4,#7957d5 71%,#9b67df)}}.hero.is-info{background-color:#167df0;color:#fff}.hero.is-info a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-info strong{color:inherit}.hero.is-info .title{color:#fff}.hero.is-info .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-info .subtitle a:not(.button),.hero.is-info .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-info .navbar-menu{background-color:#167df0}}.hero.is-info .navbar-item,.hero.is-info .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-info .navbar-link.is-active,.hero.is-info .navbar-link:hover,.hero.is-info a.navbar-item.is-active,.hero.is-info a.navbar-item:hover{background-color:#0e71de;color:#fff}.hero.is-info .tabs a{color:#fff;opacity:.9}.hero.is-info .tabs a:hover,.hero.is-info .tabs li.is-active a{opacity:1}.hero.is-info .tabs.is-boxed a,.hero.is-info .tabs.is-toggle a{color:#fff}.hero.is-info .tabs.is-boxed a:hover,.hero.is-info .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-info .tabs.is-boxed li.is-active a,.hero.is-info .tabs.is-boxed li.is-active a:hover,.hero.is-info .tabs.is-toggle li.is-active a,.hero.is-info .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#167df0}.hero.is-info.is-bold{background-image:linear-gradient(141deg,#0286d1,#167df0 71%,#2868f7)}@media screen and (max-width:768px){.hero.is-info.is-bold .navbar-menu{background-image:linear-gradient(141deg,#0286d1,#167df0 71%,#2868f7)}}.hero.is-success{background-color:#23d160;color:#fff}.hero.is-success a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-success strong{color:inherit}.hero.is-success .title{color:#fff}.hero.is-success .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-success .subtitle a:not(.button),.hero.is-success .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-success .navbar-menu{background-color:#23d160}}.hero.is-success .navbar-item,.hero.is-success .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-success .navbar-link.is-active,.hero.is-success .navbar-link:hover,.hero.is-success a.navbar-item.is-active,.hero.is-success a.navbar-item:hover{background-color:#20bc56;color:#fff}.hero.is-success .tabs a{color:#fff;opacity:.9}.hero.is-success .tabs a:hover,.hero.is-success .tabs li.is-active a{opacity:1}.hero.is-success .tabs.is-boxed a,.hero.is-success .tabs.is-toggle a{color:#fff}.hero.is-success .tabs.is-boxed a:hover,.hero.is-success .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-success .tabs.is-boxed li.is-active a,.hero.is-success .tabs.is-boxed li.is-active a:hover,.hero.is-success .tabs.is-toggle li.is-active a,.hero.is-success .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#23d160}.hero.is-success.is-bold{background-image:linear-gradient(141deg,#12af2f,#23d160 71%,#2ce28a)}@media screen and (max-width:768px){.hero.is-success.is-bold .navbar-menu{background-image:linear-gradient(141deg,#12af2f,#23d160 71%,#2ce28a)}}.hero.is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-warning strong{color:inherit}.hero.is-warning .title{color:rgba(0,0,0,.7)}.hero.is-warning .subtitle{color:rgba(0,0,0,.9)}.hero.is-warning .subtitle a:not(.button),.hero.is-warning .subtitle strong{color:rgba(0,0,0,.7)}@media screen and (max-width:1023px){.hero.is-warning .navbar-menu{background-color:#ffdd57}}.hero.is-warning .navbar-item,.hero.is-warning .navbar-link{color:rgba(0,0,0,.7)}.hero.is-warning .navbar-link.is-active,.hero.is-warning .navbar-link:hover,.hero.is-warning a.navbar-item.is-active,.hero.is-warning a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.hero.is-warning .tabs a{color:rgba(0,0,0,.7);opacity:.9}.hero.is-warning .tabs a:hover,.hero.is-warning .tabs li.is-active a{opacity:1}.hero.is-warning .tabs.is-boxed a,.hero.is-warning .tabs.is-toggle a{color:rgba(0,0,0,.7)}.hero.is-warning .tabs.is-boxed a:hover,.hero.is-warning .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-warning .tabs.is-boxed li.is-active a,.hero.is-warning .tabs.is-boxed li.is-active a:hover,.hero.is-warning .tabs.is-toggle li.is-active a,.hero.is-warning .tabs.is-toggle li.is-active a:hover{background-color:rgba(0,0,0,.7);border-color:rgba(0,0,0,.7);color:#ffdd57}.hero.is-warning.is-bold{background-image:linear-gradient(141deg,#ffaf24,#ffdd57 71%,#fffa70)}@media screen and (max-width:768px){.hero.is-warning.is-bold .navbar-menu{background-image:linear-gradient(141deg,#ffaf24,#ffdd57 71%,#fffa70)}}.hero.is-danger{background-color:#ff3860;color:#fff}.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-danger strong{color:inherit}.hero.is-danger .title{color:#fff}.hero.is-danger .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-danger .subtitle a:not(.button),.hero.is-danger .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-danger .navbar-menu{background-color:#ff3860}}.hero.is-danger .navbar-item,.hero.is-danger .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-danger .navbar-link.is-active,.hero.is-danger .navbar-link:hover,.hero.is-danger a.navbar-item.is-active,.hero.is-danger a.navbar-item:hover{background-color:#ff1f4b;color:#fff}.hero.is-danger .tabs a{color:#fff;opacity:.9}.hero.is-danger .tabs a:hover,.hero.is-danger .tabs li.is-active a{opacity:1}.hero.is-danger .tabs.is-boxed a,.hero.is-danger .tabs.is-toggle a{color:#fff}.hero.is-danger .tabs.is-boxed a:hover,.hero.is-danger .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-danger .tabs.is-boxed li.is-active a,.hero.is-danger .tabs.is-boxed li.is-active a:hover,.hero.is-danger .tabs.is-toggle li.is-active a,.hero.is-danger .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#ff3860}.hero.is-danger.is-bold{background-image:linear-gradient(141deg,#ff0561,#ff3860 71%,#ff5257)}@media screen and (max-width:768px){.hero.is-danger.is-bold .navbar-menu{background-image:linear-gradient(141deg,#ff0561,#ff3860 71%,#ff5257)}}.hero.is-small .hero-body{padding-bottom:1.5rem;padding-top:1.5rem}@media print,screen and (min-width:769px){.hero.is-medium .hero-body{padding-bottom:9rem;padding-top:9rem}}@media print,screen and (min-width:769px){.hero.is-large .hero-body{padding-bottom:18rem;padding-top:18rem}}.hero.is-fullheight-with-navbar .hero-body,.hero.is-fullheight .hero-body,.hero.is-halfheight .hero-body{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.hero.is-fullheight-with-navbar .hero-body>.container,.hero.is-fullheight .hero-body>.container,.hero.is-halfheight .hero-body>.container{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.hero.is-halfheight{min-height:50vh}.hero.is-fullheight{min-height:100vh}.hero-video{overflow:hidden}.hero-video video{left:50%;min-height:100%;min-width:100%;position:absolute;top:50%;-webkit-transform:translate3d(-50%,-50%,0);transform:translate3d(-50%,-50%,0)}.hero-video.is-transparent{opacity:.3}@media screen and (max-width:768px){.hero-video{display:none}}.hero-buttons{margin-top:1.5rem}@media screen and (max-width:768px){.hero-buttons .button{display:-webkit-box;display:-ms-flexbox;display:flex}.hero-buttons .button:not(:last-child){margin-bottom:.75rem}}@media print,screen and (min-width:769px){.hero-buttons{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.hero-buttons .button:not(:last-child){margin-right:1.5rem}}.hero-foot,.hero-head{-webkit-box-flex:0;-ms-flex-positive:0;flex-grow:0}.hero-body,.hero-foot,.hero-head{-ms-flex-negative:0;flex-shrink:0}.hero-body{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.hero-body,.section{padding:3rem 1.5rem}@media screen and (min-width:1024px){.section.is-medium{padding:9rem 1.5rem}.section.is-large{padding:18rem 1.5rem}}.footer{background-color:#fafafa;padding:3rem 1.5rem 6rem}.is-noscroll{position:fixed;overflow-y:hidden;width:100%;bottom:0}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}}.fadeOutDown{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}}.fadeOutUp{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}@keyframes fadeInDown{0%{opacity:0;-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}@keyframes fadeInUp{0%{opacity:0;-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0)}to{opacity:1;-webkit-transform:none;transform:none}}.fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}.fade-enter-active,.fade-leave-active{-webkit-transition:opacity .15s ease-out;transition:opacity .15s ease-out}.fade-enter,.fade-leave-to{opacity:0}.zoom-in-enter-active,.zoom-in-leave-active{-webkit-transition:opacity .15s ease-out;transition:opacity .15s ease-out}.zoom-in-enter-active .animation-content,.zoom-in-leave-active .animation-content{-webkit-transition:-webkit-transform .15s ease-out;transition:-webkit-transform .15s ease-out;transition:transform .15s ease-out;transition:transform .15s ease-out,-webkit-transform .15s ease-out}.zoom-in-enter,.zoom-in-leave-active{opacity:0}.zoom-in-enter .animation-content,.zoom-in-leave-active .animation-content{-webkit-transform:scale(.95);transform:scale(.95)}.zoom-out-enter-active,.zoom-out-leave-active{-webkit-transition:opacity .15s ease-out;transition:opacity .15s ease-out}.zoom-out-enter-active .animation-content,.zoom-out-leave-active .animation-content{-webkit-transition:-webkit-transform .15s ease-out;transition:-webkit-transform .15s ease-out;transition:transform .15s ease-out;transition:transform .15s ease-out,-webkit-transform .15s ease-out}.zoom-out-enter,.zoom-out-leave-active{opacity:0}.zoom-out-enter .animation-content,.zoom-out-leave-active .animation-content{-webkit-transform:scale(1.05);transform:scale(1.05)}.slide-next-enter-active,.slide-next-leave-active,.slide-prev-enter-active,.slide-prev-leave-active{-webkit-transition:-webkit-transform .25s cubic-bezier(.785,.135,.15,.86);transition:-webkit-transform .25s cubic-bezier(.785,.135,.15,.86);transition:transform .25s cubic-bezier(.785,.135,.15,.86);transition:transform .25s cubic-bezier(.785,.135,.15,.86),-webkit-transform .25s cubic-bezier(.785,.135,.15,.86)}.slide-next-enter,.slide-prev-leave-to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0);position:absolute;width:100%}.slide-next-leave-to,.slide-prev-enter{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0);position:absolute;width:100%}.slide-down-enter-active,.slide-down-leave-active,.slide-up-enter-active,.slide-up-leave-active{-webkit-transition:-webkit-transform .25s cubic-bezier(.785,.135,.15,.86);transition:-webkit-transform .25s cubic-bezier(.785,.135,.15,.86);transition:transform .25s cubic-bezier(.785,.135,.15,.86);transition:transform .25s cubic-bezier(.785,.135,.15,.86),-webkit-transform .25s cubic-bezier(.785,.135,.15,.86)}.slide-down-enter,.slide-up-leave-to{-webkit-transform:translate3d(0,-100%,0);transform:translate3d(0,-100%,0);position:absolute;height:100%}.slide-down-leave-to,.slide-up-enter{-webkit-transform:translate3d(0,100%,0);transform:translate3d(0,100%,0);position:absolute;height:100%}.slide-enter-active,.slide-leave-active{-webkit-transition:.15s ease-out;transition:.15s ease-out}.slide-leave-active{-webkit-transition-timing-function:cubic-bezier(0,1,.5,1);transition-timing-function:cubic-bezier(0,1,.5,1)}.slide-enter-to,.slide-leave{max-height:100px;overflow:hidden}.slide-enter,.slide-leave-to{overflow:hidden;max-height:0}.autocomplete{position:relative}.autocomplete .dropdown-menu{display:block;min-width:100%;max-width:100%}.autocomplete .dropdown-menu.is-opened-top{top:auto;bottom:100%}.autocomplete .dropdown-content{overflow:auto;max-height:200px}.autocomplete .dropdown-item,.autocomplete .dropdown .dropdown-menu .has-link a,.dropdown .dropdown-menu .has-link .autocomplete a{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.autocomplete .dropdown-item.is-hovered,.autocomplete .dropdown .dropdown-menu .has-link a.is-hovered,.dropdown .dropdown-menu .has-link .autocomplete a.is-hovered{background:#f5f5f5;color:#0a0a0a}.autocomplete .dropdown-item.is-disabled,.autocomplete .dropdown .dropdown-menu .has-link a.is-disabled,.dropdown .dropdown-menu .has-link .autocomplete a.is-disabled{opacity:.5;cursor:not-allowed}.autocomplete.is-small{border-radius:2px;font-size:.75rem}.autocomplete.is-medium{font-size:1.25rem}.autocomplete.is-large{font-size:1.5rem}.carousel{min-height:120px;position:relative}.carousel.is-overlay{background-color:rgba(10,10,10,.86);-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;display:-webkit-box;display:-ms-flexbox;display:flex;max-height:100vh;position:fixed;z-index:40}.carousel.is-overlay .carousel-item img{cursor:default}.carousel.is-overlay .carousel-indicator.has-background{background:transparent}.carousel .progress{border-radius:2px;height:.25rem;margin-bottom:0}.carousel .carousel-items{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;overflow:hidden;width:100%}@media print,screen and (min-width:769px){.carousel .carousel-items:hover .carousel-arrow.is-hovered{opacity:1}}.carousel .carousel-items .carousel-item{-ms-flex-negative:0;flex-shrink:0;width:100%}.carousel .carousel-pause{pointer-events:none;position:absolute;top:0;right:.15rem;z-index:1}.carousel .carousel-indicator{width:100%;padding:.5rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.carousel .carousel-indicator.has-background{background:rgba(10,10,10,.5)}.carousel .carousel-indicator.has-custom{-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;-webkit-overflow-scrolling:touch;overflow:hidden;overflow-x:auto}.carousel .carousel-indicator.has-custom.is-small .indicator-item{-webkit-box-flex:1;-ms-flex:1 0 10%;flex:1 0 10%}.carousel .carousel-indicator.has-custom.is-medium .indicator-item{-webkit-box-flex:1;-ms-flex:1 0 16.66667%;flex:1 0 16.66667%}.carousel .carousel-indicator.is-inside{position:absolute}.carousel .carousel-indicator.is-inside.is-bottom{bottom:0}.carousel .carousel-indicator.is-inside.is-top{top:0}.carousel .carousel-indicator .indicator-item:not(:last-child){margin-right:.5rem}.carousel .carousel-indicator .indicator-item .indicator-style:hover,.carousel .carousel-indicator .indicator-item.is-active .indicator-style{background:#7957d5;border:1px solid #fff}.carousel .carousel-indicator .indicator-item .indicator-style{display:block;border:1px solid #7957d5;background:#fff;outline:none;-webkit-transition:.15s ease-out;transition:.15s ease-out}.carousel .carousel-indicator .indicator-item .indicator-style.is-boxes{height:10px;width:10px}.carousel .carousel-indicator .indicator-item .indicator-style.is-dots{border-radius:10px;height:10px;width:10px}.carousel .carousel-indicator .indicator-item .indicator-style.is-lines{height:5px;width:25px}.carousel-list{position:relative;overflow:hidden;width:100%}.carousel-list.has-shadow{-webkit-box-shadow:0 0 10px rgba(0,0,0,.25);box-shadow:0 0 10px rgba(0,0,0,.25)}@media print,screen and (min-width:769px){.carousel-list:hover .carousel-arrow.is-hovered{opacity:1}}.carousel-list .carousel-slides{position:relative;display:-webkit-box;display:-ms-flexbox;display:flex;width:100%}.carousel-list .carousel-slides:not(.is-dragging){-webkit-transition:all .25s ease-out 0s;transition:all .25s ease-out 0s}.carousel-list .carousel-slides.has-grayscale .carousel-slide img{-webkit-filter:grayscale(100%);filter:grayscale(100%)}.carousel-list .carousel-slides.has-grayscale .carousel-slide.is-active img{-webkit-filter:grayscale(0);filter:grayscale(0)}.carousel-list .carousel-slides.has-opacity .carousel-slide img{opacity:.25}.carousel-list .carousel-slides.has-opacity .carousel-slide.is-active img{opacity:1}.carousel-list .carousel-slides .carousel-slide{border:2px solid transparent;-ms-flex-negative:0;flex-shrink:0}.carousel-arrow{-webkit-transition:.15s ease-out;transition:.15s ease-out}.carousel-arrow.is-hovered{opacity:0}.carousel-arrow .icon{background:#fff;color:#7957d5;cursor:pointer;border:1px solid #fff;border-radius:290486px;outline:0}.carousel-arrow .icon:hover{border:1px solid #7957d5;opacity:1}.carousel-arrow .icon.has-icons-left,.carousel-arrow .icon.has-icons-right{position:absolute;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);z-index:1}.carousel-arrow .icon.has-icons-left{left:1.5rem}.carousel-arrow .icon.has-icons-right{right:1.5rem}.b-checkbox.checkbox{outline:none;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.b-checkbox.checkbox:not(.button){margin-right:.5em}.b-checkbox.checkbox:not(.button)+.checkbox:last-child{margin-right:0}.b-checkbox.checkbox input[type=checkbox]{position:absolute;left:0;opacity:0;outline:none;z-index:-1}.b-checkbox.checkbox input[type=checkbox]+.check{width:1.25em;height:1.25em;-ms-flex-negative:0;flex-shrink:0;border-radius:4px;border:2px solid #7a7a7a;-webkit-transition:background .15s ease-out;transition:background .15s ease-out;background:transparent}.b-checkbox.checkbox input[type=checkbox]:checked+.check{background:#7957d5 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#7957d5}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-white{background:#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%230a0a0a'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#fff}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-black{background:#0a0a0a url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#0a0a0a}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-light{background:#f5f5f5 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23363636'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#f5f5f5}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-dark{background:#363636 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23f5f5f5'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#363636}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-link,.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-primary{background:#7957d5 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#7957d5}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-info{background:#167df0 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#167df0}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-success{background:#23d160 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#23d160}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-warning{background:#ffdd57 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='rgba(0,0,0,.7)'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#ffdd57}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-danger{background:#ff3860 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#ff3860}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check{background:#7957d5 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#7957d5}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-white{background:#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%230a0a0a' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#fff}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-black{background:#0a0a0a url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#0a0a0a}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-light{background:#f5f5f5 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23363636' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#f5f5f5}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-dark{background:#363636 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23f5f5f5' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#363636}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-primary{background:#7957d5 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#7957d5}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-link{background:#7957d5 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#7957d5}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-info{background:#167df0 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#167df0}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-success{background:#23d160 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#23d160}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-warning{background:#ffdd57 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='rgba(0,0,0,.7)' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#ffdd57}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-danger{background:#ff3860 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#ff3860}.b-checkbox.checkbox input[type=checkbox]:focus+.check{-webkit-box-shadow:0 0 .5em hsla(0,0%,47.8%,.8);box-shadow:0 0 .5em hsla(0,0%,47.8%,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check{-webkit-box-shadow:0 0 .5em rgba(121,87,213,.8);box-shadow:0 0 .5em rgba(121,87,213,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-white{-webkit-box-shadow:0 0 .5em hsla(0,0%,100%,.8);box-shadow:0 0 .5em hsla(0,0%,100%,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-black{-webkit-box-shadow:0 0 .5em rgba(10,10,10,.8);box-shadow:0 0 .5em rgba(10,10,10,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-light{-webkit-box-shadow:0 0 .5em hsla(0,0%,96.1%,.8);box-shadow:0 0 .5em hsla(0,0%,96.1%,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-dark{-webkit-box-shadow:0 0 .5em rgba(54,54,54,.8);box-shadow:0 0 .5em rgba(54,54,54,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-link,.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-primary{-webkit-box-shadow:0 0 .5em rgba(121,87,213,.8);box-shadow:0 0 .5em rgba(121,87,213,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-info{-webkit-box-shadow:0 0 .5em rgba(22,125,240,.8);box-shadow:0 0 .5em rgba(22,125,240,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-success{-webkit-box-shadow:0 0 .5em rgba(35,209,96,.8);box-shadow:0 0 .5em rgba(35,209,96,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-warning{-webkit-box-shadow:0 0 .5em rgba(255,221,87,.8);box-shadow:0 0 .5em rgba(255,221,87,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-danger{-webkit-box-shadow:0 0 .5em rgba(255,56,96,.8);box-shadow:0 0 .5em rgba(255,56,96,.8)}.b-checkbox.checkbox .control-label{padding-left:.5em}.b-checkbox.checkbox.button{display:-webkit-box;display:-ms-flexbox;display:flex}.b-checkbox.checkbox[disabled]{opacity:.5}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check{border-color:#7957d5}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-white{border-color:#fff}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-black{border-color:#0a0a0a}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-light{border-color:#f5f5f5}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-dark{border-color:#363636}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-link,.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-primary{border-color:#7957d5}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-info{border-color:#167df0}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-success{border-color:#23d160}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-warning{border-color:#ffdd57}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-danger{border-color:#ff3860}.b-checkbox.checkbox.is-small{border-radius:2px;font-size:.75rem}.b-checkbox.checkbox.is-medium{font-size:1.25rem}.b-checkbox.checkbox.is-large{font-size:1.5rem}.b-clockpicker .card-header{background-color:#7957d5;color:#fff}.b-clockpicker .b-clockpicker-face:after{background-color:#7957d5}.b-clockpicker .b-clockpicker-face-hand{background-color:#7957d5;border-color:#7957d5}.b-clockpicker .b-clockpicker-face-number.active{background-color:#7957d5;color:#fff}.b-clockpicker.is-white .card-header{background-color:#fff;color:#0a0a0a}.b-clockpicker.is-white .b-clockpicker-face:after{background-color:#fff}.b-clockpicker.is-white .b-clockpicker-face-hand{background-color:#fff;border-color:#fff}.b-clockpicker.is-white .b-clockpicker-face-number.active{background-color:#fff;color:#0a0a0a}.b-clockpicker.is-black .card-header{background-color:#0a0a0a;color:#fff}.b-clockpicker.is-black .b-clockpicker-face:after{background-color:#0a0a0a}.b-clockpicker.is-black .b-clockpicker-face-hand{background-color:#0a0a0a;border-color:#0a0a0a}.b-clockpicker.is-black .b-clockpicker-face-number.active{background-color:#0a0a0a;color:#fff}.b-clockpicker.is-light .card-header{background-color:#f5f5f5;color:#363636}.b-clockpicker.is-light .b-clockpicker-face:after{background-color:#f5f5f5}.b-clockpicker.is-light .b-clockpicker-face-hand{background-color:#f5f5f5;border-color:#f5f5f5}.b-clockpicker.is-light .b-clockpicker-face-number.active{background-color:#f5f5f5;color:#363636}.b-clockpicker.is-dark .card-header{background-color:#363636;color:#f5f5f5}.b-clockpicker.is-dark .b-clockpicker-face:after{background-color:#363636}.b-clockpicker.is-dark .b-clockpicker-face-hand{background-color:#363636;border-color:#363636}.b-clockpicker.is-dark .b-clockpicker-face-number.active{background-color:#363636;color:#f5f5f5}.b-clockpicker.is-primary .card-header{background-color:#7957d5;color:#fff}.b-clockpicker.is-primary .b-clockpicker-face:after{background-color:#7957d5}.b-clockpicker.is-primary .b-clockpicker-face-hand{background-color:#7957d5;border-color:#7957d5}.b-clockpicker.is-link .card-header,.b-clockpicker.is-primary .b-clockpicker-face-number.active{background-color:#7957d5;color:#fff}.b-clockpicker.is-link .b-clockpicker-face:after{background-color:#7957d5}.b-clockpicker.is-link .b-clockpicker-face-hand{background-color:#7957d5;border-color:#7957d5}.b-clockpicker.is-link .b-clockpicker-face-number.active{background-color:#7957d5;color:#fff}.b-clockpicker.is-info .card-header{background-color:#167df0;color:#fff}.b-clockpicker.is-info .b-clockpicker-face:after{background-color:#167df0}.b-clockpicker.is-info .b-clockpicker-face-hand{background-color:#167df0;border-color:#167df0}.b-clockpicker.is-info .b-clockpicker-face-number.active{background-color:#167df0;color:#fff}.b-clockpicker.is-success .card-header{background-color:#23d160;color:#fff}.b-clockpicker.is-success .b-clockpicker-face:after{background-color:#23d160}.b-clockpicker.is-success .b-clockpicker-face-hand{background-color:#23d160;border-color:#23d160}.b-clockpicker.is-success .b-clockpicker-face-number.active{background-color:#23d160;color:#fff}.b-clockpicker.is-warning .card-header{background-color:#ffdd57;color:rgba(0,0,0,.7)}.b-clockpicker.is-warning .b-clockpicker-face:after{background-color:#ffdd57}.b-clockpicker.is-warning .b-clockpicker-face-hand{background-color:#ffdd57;border-color:#ffdd57}.b-clockpicker.is-warning .b-clockpicker-face-number.active{background-color:#ffdd57;color:rgba(0,0,0,.7)}.b-clockpicker.is-danger .card-header{background-color:#ff3860;color:#fff}.b-clockpicker.is-danger .b-clockpicker-face:after{background-color:#ff3860}.b-clockpicker.is-danger .b-clockpicker-face-hand{background-color:#ff3860;border-color:#ff3860}.b-clockpicker.is-danger .b-clockpicker-face-number.active{background-color:#ff3860;color:#fff}.b-clockpicker .dropdown-menu{min-width:0}.b-clockpicker .dropdown,.b-clockpicker .dropdown-trigger{width:100%}.b-clockpicker .dropdown-trigger .input[readonly],.b-clockpicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly],.b-clockpicker .dropdown .input[readonly],.b-clockpicker .dropdown .taginput .taginput-container.is-focusable[readonly],.taginput .b-clockpicker .dropdown-trigger .taginput-container.is-focusable[readonly],.taginput .b-clockpicker .dropdown .taginput-container.is-focusable[readonly]{cursor:pointer;-webkit-box-shadow:inset 0 1px 2px rgba(10,10,10,.1);box-shadow:inset 0 1px 2px rgba(10,10,10,.1)}.b-clockpicker .dropdown-trigger .input[readonly].is-active,.b-clockpicker .dropdown-trigger .input[readonly].is-focused,.b-clockpicker .dropdown-trigger .input[readonly]:active,.b-clockpicker .dropdown-trigger .input[readonly]:focus,.b-clockpicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly].is-active,.b-clockpicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly].is-focused,.b-clockpicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly]:active,.b-clockpicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly]:focus,.b-clockpicker .dropdown .input[readonly].is-active,.b-clockpicker .dropdown .input[readonly].is-focused,.b-clockpicker .dropdown .input[readonly]:active,.b-clockpicker .dropdown .input[readonly]:focus,.b-clockpicker .dropdown .taginput .taginput-container.is-focusable[readonly].is-active,.b-clockpicker .dropdown .taginput .taginput-container.is-focusable[readonly].is-focused,.b-clockpicker .dropdown .taginput .taginput-container.is-focusable[readonly]:active,.b-clockpicker .dropdown .taginput .taginput-container.is-focusable[readonly]:focus,.taginput .b-clockpicker .dropdown-trigger .taginput-container.is-focusable[readonly].is-active,.taginput .b-clockpicker .dropdown-trigger .taginput-container.is-focusable[readonly].is-focused,.taginput .b-clockpicker .dropdown-trigger .taginput-container.is-focusable[readonly]:active,.taginput .b-clockpicker .dropdown-trigger .taginput-container.is-focusable[readonly]:focus,.taginput .b-clockpicker .dropdown .taginput-container.is-focusable[readonly].is-active,.taginput .b-clockpicker .dropdown .taginput-container.is-focusable[readonly].is-focused,.taginput .b-clockpicker .dropdown .taginput-container.is-focusable[readonly]:active,.taginput .b-clockpicker .dropdown .taginput-container.is-focusable[readonly]:focus{-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.b-clockpicker .dropdown-item,.b-clockpicker .dropdown .dropdown-menu .has-link a,.dropdown .dropdown-menu .has-link .b-clockpicker a{font-size:inherit;padding:0}.b-clockpicker .dropdown-content{padding-top:0;padding-bottom:0}.b-clockpicker .card{border-radius:4px}.b-clockpicker .card-header{border-top-left-radius:4px;border-top-right-radius:4px}.b-clockpicker .card-content{padding:12px}.b-clockpicker-btn{cursor:pointer;opacity:.6}.b-clockpicker-btn.active,.b-clockpicker-btn:hover{opacity:1}.b-clockpicker-period .b-clockpicker-btn{font-size:16px;text-transform:uppercase}.b-clockpicker-time span{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.b-clockpicker-header{display:-webkit-box;display:-ms-flexbox;display:flex;line-height:1;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;color:inherit}.b-clockpicker-header .b-clockpicker-time{white-space:nowrap}.b-clockpicker-header .b-clockpicker-time span{height:60px;font-size:60px}.b-clockpicker-header .b-clockpicker-period{-ms-flex-item-align:end;align-self:flex-end;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;margin:8px 0 6px 8px}.b-clockpicker-body{-webkit-transition:.9s cubic-bezier(.25,.8,.5,1);transition:.9s cubic-bezier(.25,.8,.5,1)}.b-clockpicker-body .b-clockpicker-btn{padding:0 8px;border-radius:290486px;margin-bottom:2px}.b-clockpicker-body .b-clockpicker-btn.active,.b-clockpicker-body .b-clockpicker-btn:hover{background-color:#7957d5;color:#fff}.b-clockpicker-body .b-clockpicker-period{position:absolute;top:5px;right:5px}.b-clockpicker-body .b-clockpicker-time{position:absolute;top:5px;left:5px;font-size:16px}.b-clockpicker-body .b-clockpicker-face{border-radius:50%;position:relative;background-color:#dbdbdb;width:100%;height:100%;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.b-clockpicker-body .b-clockpicker-face:after{border-radius:50%;content:\"\";position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);width:12px;height:12px;z-index:10}.b-clockpicker-body .b-clockpicker-face-outer-ring{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:calc(100% - 50px);width:calc(100% - 50px);position:relative;border-radius:50%}.b-clockpicker-body .b-clockpicker-face-number{-webkit-box-align:center;-ms-flex-align:center;align-items:center;border-radius:100%;cursor:default;display:-webkit-box;display:-ms-flexbox;display:flex;font-size:18px;text-align:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;position:absolute;width:40px;height:40px;left:calc(50% - 20px);top:calc(50% - 20px);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.b-clockpicker-body .b-clockpicker-face-number>span{z-index:1}.b-clockpicker-body .b-clockpicker-face-number:after,.b-clockpicker-body .b-clockpicker-face-number:before{content:\"\";height:40px;width:40px;border-radius:100%;position:absolute;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.b-clockpicker-body .b-clockpicker-face-number.active{cursor:default;z-index:2}.b-clockpicker-body .b-clockpicker-face-number.disabled{pointer-events:none;opacity:.25}.b-clockpicker-body .b-clockpicker-face-hand{height:calc(50% - 6px);width:2px;bottom:50%;left:calc(50% - 1px);-webkit-transform-origin:center bottom;transform-origin:center bottom;position:absolute;will-change:transform;z-index:1}.b-clockpicker-body .b-clockpicker-face-hand:before{background:transparent;border:2px solid;border-color:inherit;border-radius:100%;width:12px;height:12px;content:\"\";position:absolute;top:-6px;left:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.b-clockpicker-footer{display:block;padding:12px}.b-clockpicker.is-small{border-radius:2px;font-size:.75rem}.b-clockpicker.is-medium{font-size:1.25rem}.b-clockpicker.is-large{font-size:1.5rem}.collapse .collapse-trigger{display:inline;cursor:pointer}.collapse .collapse-content{display:inherit}.datepicker{font-size:.875rem}.datepicker .dropdown,.datepicker .dropdown-trigger{width:100%}.datepicker .dropdown-trigger .input[readonly],.datepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly],.datepicker .dropdown .input[readonly],.datepicker .dropdown .taginput .taginput-container.is-focusable[readonly],.taginput .datepicker .dropdown-trigger .taginput-container.is-focusable[readonly],.taginput .datepicker .dropdown .taginput-container.is-focusable[readonly]{cursor:pointer;-webkit-box-shadow:inset 0 1px 2px rgba(10,10,10,.1);box-shadow:inset 0 1px 2px rgba(10,10,10,.1)}.datepicker .dropdown-trigger .input[readonly].is-active,.datepicker .dropdown-trigger .input[readonly].is-focused,.datepicker .dropdown-trigger .input[readonly]:active,.datepicker .dropdown-trigger .input[readonly]:focus,.datepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly].is-active,.datepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly].is-focused,.datepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly]:active,.datepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly]:focus,.datepicker .dropdown .input[readonly].is-active,.datepicker .dropdown .input[readonly].is-focused,.datepicker .dropdown .input[readonly]:active,.datepicker .dropdown .input[readonly]:focus,.datepicker .dropdown .taginput .taginput-container.is-focusable[readonly].is-active,.datepicker .dropdown .taginput .taginput-container.is-focusable[readonly].is-focused,.datepicker .dropdown .taginput .taginput-container.is-focusable[readonly]:active,.datepicker .dropdown .taginput .taginput-container.is-focusable[readonly]:focus,.taginput .datepicker .dropdown-trigger .taginput-container.is-focusable[readonly].is-active,.taginput .datepicker .dropdown-trigger .taginput-container.is-focusable[readonly].is-focused,.taginput .datepicker .dropdown-trigger .taginput-container.is-focusable[readonly]:active,.taginput .datepicker .dropdown-trigger .taginput-container.is-focusable[readonly]:focus,.taginput .datepicker .dropdown .taginput-container.is-focusable[readonly].is-active,.taginput .datepicker .dropdown .taginput-container.is-focusable[readonly].is-focused,.taginput .datepicker .dropdown .taginput-container.is-focusable[readonly]:active,.taginput .datepicker .dropdown .taginput-container.is-focusable[readonly]:focus{-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.datepicker .dropdown.is-disabled{opacity:1}.datepicker .dropdown-content{background-color:#fff;border-radius:4px;-webkit-box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1)}.datepicker .dropdown-item,.datepicker .dropdown .dropdown-menu .has-link a,.dropdown .dropdown-menu .has-link .datepicker a{font-size:inherit}.datepicker .datepicker-header{padding-bottom:.875rem;margin-bottom:.875rem;border-bottom:1px solid #dbdbdb}.datepicker .datepicker-footer{margin-top:.875rem;padding-top:.875rem;border-top:1px solid #dbdbdb}.datepicker .datepicker-table{display:table;margin:0 auto}.datepicker .datepicker-table .datepicker-cell{text-align:center;vertical-align:middle;display:table-cell;border-radius:4px;padding:.5rem .75rem}.datepicker .datepicker-table .datepicker-header{display:table-header-group}.datepicker .datepicker-table .datepicker-header .datepicker-cell{color:#7a7a7a;font-weight:600}.datepicker .datepicker-table .datepicker-body{display:table-row-group}.datepicker .datepicker-table .datepicker-body .datepicker-row{display:table-row}.datepicker .datepicker-table .datepicker-body .datepicker-months{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;width:17rem}.datepicker .datepicker-table .datepicker-body .datepicker-months .datepicker-cell{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;width:33.33%;height:2.5rem}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-unselectable{color:#b5b5b5}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-today{border:1px solid rgba(121,87,213,.5)}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable{color:#4a4a4a}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable:focus:not(.is-selected),.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable:hover:not(.is-selected){background-color:#f5f5f5;color:#0a0a0a;cursor:pointer}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable.is-within-hovered-range.is-first-hovered{background-color:#7a7a7a;color:#dbdbdb;border-bottom-right-radius:0;border-top-right-radius:0}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable.is-within-hovered-range.is-within-hovered{background-color:#f5f5f5;color:#0a0a0a;border-radius:0}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable.is-within-hovered-range.is-last-hovered{background-color:#7a7a7a;color:#dbdbdb;border-bottom-left-radius:0;border-top-left-radius:0}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected{background-color:#7957d5;color:#fff}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected.is-first-selected{background-color:#7957d5;color:#fff;border-bottom-right-radius:0;border-top-right-radius:0}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected.is-within-selected{background-color:rgba(121,87,213,.5);border-radius:0}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected.is-last-selected{background-color:#7957d5;color:#fff;border-bottom-left-radius:0;border-top-left-radius:0}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-nearby:not(.is-selected){color:#b5b5b5}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-week-number{cursor:default}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell{padding:.3rem .75rem .75rem}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event{position:relative}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events{bottom:.425rem;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;left:0;padding:0 .35rem;position:absolute;width:100%}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-white{background-color:#fff}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-black{background-color:#0a0a0a}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-light{background-color:#f5f5f5}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-dark{background-color:#363636}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-link,.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-primary{background-color:#7957d5}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-info{background-color:#167df0}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-success{background-color:#23d160}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-warning{background-color:#ffdd57}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-danger{background-color:#ff3860}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event.dots .event{border-radius:50%;height:.35em;margin:0 .1em;width:.35em}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event.bars .event{height:.25em;width:100%}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.is-selected{overflow:hidden}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.is-selected .events .event.is-primary{background-color:#aa94e4}.datepicker.is-small{border-radius:2px;font-size:.75rem}.datepicker.is-medium{font-size:1.25rem}.datepicker.is-large{font-size:1.5rem}@media screen and (min-width:1024px){.datepicker .footer-horizontal-timepicker{border:none;padding-left:10px;margin-left:5px}.datepicker .dropdown-horizonal-timepicker,.datepicker .footer-horizontal-timepicker{display:-webkit-box;display:-ms-flexbox;display:flex}.datepicker .content-horizonal-timepicker{border-right:1px solid #dbdbdb}}.dialog .modal-card{max-width:460px;width:auto}.dialog .modal-card .modal-card-head{font-size:1.25rem;font-weight:600}.dialog .modal-card .modal-card-body .field{margin-top:16px}.dialog .modal-card .modal-card-body.is-titleless{border-top-left-radius:6px;border-top-right-radius:6px}.dialog .modal-card .modal-card-foot{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.dialog .modal-card .modal-card-foot .button{display:inline;min-width:5em;font-weight:600}@media print,screen and (min-width:769px){.dialog .modal-card{min-width:320px}}.dialog.is-small .button,.dialog.is-small .input,.dialog.is-small .modal-card,.dialog.is-small .taginput .taginput-container.is-focusable,.taginput .dialog.is-small .taginput-container.is-focusable{border-radius:2px;font-size:.75rem}.dialog.is-medium .button,.dialog.is-medium .input,.dialog.is-medium .modal-card,.dialog.is-medium .taginput .taginput-container.is-focusable,.taginput .dialog.is-medium .taginput-container.is-focusable{font-size:1.25rem}.dialog.is-large .button,.dialog.is-large .input,.dialog.is-large .modal-card,.dialog.is-large .taginput .taginput-container.is-focusable,.taginput .dialog.is-large .taginput-container.is-focusable{font-size:1.5rem}.dialog.has-custom-container{position:absolute}.dropdown+.dropdown{margin-left:.5em}.dropdown .background{bottom:0;left:0;position:absolute;right:0;top:0;position:fixed;background-color:rgba(10,10,10,.86);z-index:40;cursor:pointer}@media screen and (min-width:1024px){.dropdown .background{display:none}}.dropdown.dropdown-menu-animation .dropdown-menu{display:block}.dropdown .dropdown-menu .dropdown-item.is-disabled,.dropdown .dropdown-menu .has-link a.is-disabled{cursor:not-allowed}.dropdown .dropdown-menu .dropdown-item.is-disabled:hover,.dropdown .dropdown-menu .has-link a.is-disabled:hover{background:inherit;color:inherit}.dropdown .dropdown-menu .has-link a{padding-right:3rem;white-space:nowrap}.dropdown.is-hoverable:not(.is-active) .dropdown-menu{display:none}.dropdown.is-hoverable:hover .dropdown-menu{display:inherit}.dropdown.is-expanded,.dropdown.is-expanded .dropdown-menu,.dropdown.is-expanded .dropdown-trigger{width:100%}.dropdown.is-expanded.is-mobile-modal .dropdown-menu{max-width:100%}.dropdown:not(.is-disabled) .dropdown-menu .dropdown-item.is-disabled,.dropdown:not(.is-disabled) .dropdown-menu .has-link a.is-disabled{opacity:.5}.dropdown .navbar-item{height:100%}.dropdown.is-disabled{opacity:.5;cursor:not-allowed}.dropdown.is-disabled .dropdown-trigger{pointer-events:none}.dropdown.is-inline .dropdown-menu{position:static;display:inline-block;padding:0}.dropdown.is-top-right .dropdown-menu{top:auto;bottom:100%}.dropdown.is-top-left .dropdown-menu{top:auto;bottom:100%;right:0;left:auto}.dropdown.is-bottom-left .dropdown-menu{right:0;left:auto}@media screen and (max-width:1023px){.dropdown.is-mobile-modal>.dropdown-menu{position:fixed!important;width:calc(100vw - 40px);max-width:460px;max-height:calc(100vh - 120px);top:25%!important;left:50%!important;bottom:auto!important;right:auto!important;-webkit-transform:translate3d(-50%,-25%,0);transform:translate3d(-50%,-25%,0);white-space:normal;overflow-y:auto;z-index:50!important}.dropdown .dropdown-menu .has-link .dropdown.is-mobile-modal>.dropdown-menu>.dropdown-content>a,.dropdown.is-mobile-modal>.dropdown-menu>.dropdown-content>.dropdown-item,.dropdown.is-mobile-modal>.dropdown-menu>.dropdown-content>.has-link a{padding:1rem 1.5rem}}.field.is-grouped .field{-ms-flex-negative:0;flex-shrink:0}.field.is-grouped .field:not(:last-child){margin-right:.75rem}.field.is-grouped .field.is-expanded{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.field.has-addons .control:first-child .control .button,.field.has-addons .control:first-child .control .input,.field.has-addons .control:first-child .control .select select,.field.has-addons .control:first-child .control .taginput .taginput-container.is-focusable,.taginput .field.has-addons .control:first-child .control .taginput-container.is-focusable{border-bottom-left-radius:4px;border-top-left-radius:4px}.field.has-addons .control:last-child .control .button,.field.has-addons .control:last-child .control .input,.field.has-addons .control:last-child .control .select select,.field.has-addons .control:last-child .control .taginput .taginput-container.is-focusable,.taginput .field.has-addons .control:last-child .control .taginput-container.is-focusable{border-bottom-right-radius:4px;border-top-right-radius:4px}.field.has-addons .control .control .button,.field.has-addons .control .control .input,.field.has-addons .control .control .select select,.field.has-addons .control .control .taginput .taginput-container.is-focusable,.taginput .field.has-addons .control .control .taginput-container.is-focusable{border-radius:0}.field.has-addons .b-numberinput:not(:first-child) .control:first-child .button,.field.has-addons .b-numberinput:not(:first-child) .control:first-child .input,.field.has-addons .b-numberinput:not(:first-child) .control:first-child .select select,.field.has-addons .b-numberinput:not(:first-child) .control:first-child .taginput .taginput-container.is-focusable,.taginput .field.has-addons .b-numberinput:not(:first-child) .control:first-child .taginput-container.is-focusable{border-bottom-left-radius:0;border-top-left-radius:0}.field.has-addons .b-numberinput:not(:last-child) .control:last-child .button,.field.has-addons .b-numberinput:not(:last-child) .control:last-child .input,.field.has-addons .b-numberinput:not(:last-child) .control:last-child .select select,.field.has-addons .b-numberinput:not(:last-child) .control:last-child .taginput .taginput-container.is-focusable,.taginput .field.has-addons .b-numberinput:not(:last-child) .control:last-child .taginput-container.is-focusable{border-bottom-right-radius:0;border-top-right-radius:0}.field.is-floating-in-label,.field.is-floating-label{position:relative}.field.is-floating-in-label .label,.field.is-floating-label .label{position:absolute;left:1em;font-size:.75rem;background-color:transparent;z-index:5}.field.is-floating-in-label .label.is-small,.field.is-floating-label .label.is-small{font-size:.5625rem}.field.is-floating-in-label .label.is-medium,.field.is-floating-label .label.is-medium{font-size:.9375rem}.field.is-floating-in-label .label.is-large,.field.is-floating-label .label.is-large{font-size:1.125rem}.field.is-floating-in-label .taginput .counter,.field.is-floating-label .taginput .counter{float:none;text-align:right}.field.is-floating-in-label.has-addons>.label+.control .button,.field.is-floating-in-label.has-addons>.label+.control .input,.field.is-floating-in-label.has-addons>.label+.control .select select,.field.is-floating-in-label.has-addons>.label+.control .taginput .taginput-container.is-focusable,.field.is-floating-label.has-addons>.label+.control .button,.field.is-floating-label.has-addons>.label+.control .input,.field.is-floating-label.has-addons>.label+.control .select select,.field.is-floating-label.has-addons>.label+.control .taginput .taginput-container.is-focusable,.taginput .field.is-floating-in-label.has-addons>.label+.control .taginput-container.is-focusable,.taginput .field.is-floating-label.has-addons>.label+.control .taginput-container.is-focusable{border-bottom-left-radius:4px;border-top-left-radius:4px}.field.is-floating-label .label{top:-.775em;padding-left:.125em;padding-right:.125em}.field.is-floating-label .label:before{content:\"\";display:block;position:absolute;top:.775em;left:0;right:0;height:.375em;background-color:#fff;z-index:-1}.field.is-floating-label .input:focus,.field.is-floating-label .select select:focus,.field.is-floating-label .taginput .taginput-container.is-focusable:focus,.field.is-floating-label .textarea:focus,.taginput .field.is-floating-label .taginput-container.is-focusable:focus{-webkit-box-shadow:none;box-shadow:none}.field.is-floating-label .taginput .taginput-container{padding-top:.475em}.field.is-floating-label .taginput .taginput-container.is-focused{-webkit-box-shadow:none;box-shadow:none}.field.is-floating-in-label .label{top:.25em}.field.is-floating-in-label>.datepicker .input,.field.is-floating-in-label>.datepicker .taginput .taginput-container.is-focusable,.field.is-floating-in-label>.timepicker .input,.field.is-floating-in-label>.timepicker .taginput .taginput-container.is-focusable,.field.is-floating-in-label>:not(.datepicker):not(.timepicker):not(.taginput) .input,.field.is-floating-in-label>:not(.datepicker):not(.timepicker):not(.taginput) .taginput .taginput-container.is-focusable,.field.is-floating-in-label>:not(.datepicker):not(.timepicker):not(.taginput) .textarea,.field.is-floating-in-label>:not(.datepicker):not(.timepicker):not(.taginput) select,.taginput .field.is-floating-in-label>.datepicker .taginput-container.is-focusable,.taginput .field.is-floating-in-label>.timepicker .taginput-container.is-focusable,.taginput .field.is-floating-in-label>:not(.datepicker):not(.timepicker):not(.taginput) .taginput-container.is-focusable{padding-top:calc(1.625em - .5625rem);padding-bottom:1px;height:3.25em}.field.is-floating-in-label>:not(.datepicker):not(.timepicker):not(.taginput) .select:not(multiple){height:3.25em}.field.is-floating-in-label>:not(.datepicker):not(.timepicker):not(.taginput) .select:not(multiple).is-loading:after{margin-top:calc(1.625em - .5625rem)}.field.is-floating-in-label>:not(.datepicker):not(.timepicker):not(.taginput) .select:not(multiple):after{margin-top:1px}.field.is-floating-in-label>:not(.taginput) .is-left.icon,.field.is-floating-in-label>:not(.taginput) .is-right.icon{height:3.25em}.field.is-floating-in-label>:not(.taginput) .is-left.icon{padding-top:calc(1.625em - .5625rem)}.field.is-floating-in-label .control.is-loading:after{margin-top:calc(1.625em - .5625rem)}.field.is-floating-in-label .taginput .taginput-container{padding-top:calc(1.625em - .5625rem + .275em - 1px)}.field.is-floating-in-label.has-addons .control .button,.field.is-floating-in-label.has-addons .control .input,.field.is-floating-in-label.has-addons .control .select select,.field.is-floating-in-label.has-addons .control .taginput .taginput-container.is-focusable,.field.is-floating-in-label.has-numberinput .b-numberinput .control .button,.field.is-floating-in-label.is-grouped .control .button,.field.is-floating-in-label.is-grouped .control .input,.field.is-floating-in-label.is-grouped .control .select select,.field.is-floating-in-label.is-grouped .control .taginput .taginput-container.is-focusable,.taginput .field.is-floating-in-label.has-addons .control .taginput-container.is-focusable,.taginput .field.is-floating-in-label.is-grouped .control .taginput-container.is-focusable{height:3.25em}.field.is-floating-in-label.has-numberinput .label,.field.is-floating-label.has-numberinput .label{margin-left:3rem}.field.is-floating-in-label.has-numberinput.has-numberinput-is-small .label,.field.is-floating-label.has-numberinput.has-numberinput-is-small .label{margin-left:2.25rem}.field.is-floating-in-label.has-numberinput.has-numberinput-is-medium .label,.field.is-floating-label.has-numberinput.has-numberinput-is-medium .label{margin-left:3.75rem}.field.is-floating-in-label.has-numberinput.has-numberinput-is-large .label,.field.is-floating-label.has-numberinput.has-numberinput-is-large .label{margin-left:4.5rem}.field.is-floating-in-label.has-numberinput-compact .label,.field.is-floating-label.has-numberinput-compact .label{margin-left:2.25rem}.field.is-floating-in-label.has-numberinput-compact.has-numberinput-is-small .label,.field.is-floating-label.has-numberinput-compact.has-numberinput-is-small .label{margin-left:1.6875rem}.field.is-floating-in-label.has-numberinput-compact.has-numberinput-is-medium .label,.field.is-floating-label.has-numberinput-compact.has-numberinput-is-medium .label{margin-left:2.8125rem}.field.is-floating-in-label.has-numberinput-compact.has-numberinput-is-large .label,.field.is-floating-label.has-numberinput-compact.has-numberinput-is-large .label{margin-left:3.375rem}.field.has-addons-right.is-floating-in-label .label,.field.has-addons-right.is-floating-label .label,.field.is-grouped-right.is-floating-in-label .label,.field.is-grouped-right.is-floating-label .label{position:relative;left:5.25em}.control .help.counter{float:right;margin-left:.5em}.control .icon.is-clickable{pointer-events:auto;cursor:pointer}.icon{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit}.icon svg{background-color:transparent;fill:currentColor;stroke-width:0;stroke:currentColor;pointer-events:none;width:1.5rem;height:1.5rem}.loading-overlay{bottom:0;left:0;position:absolute;right:0;top:0;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:none;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;overflow:hidden;z-index:999}.loading-overlay.is-active{display:-webkit-box;display:-ms-flexbox;display:flex}.loading-overlay.is-full-page{position:fixed}.loading-overlay.is-full-page .loading-icon:after{top:calc(50% - 2.5em);left:calc(50% - 2.5em);width:5em;height:5em}.loading-overlay .loading-background{bottom:0;left:0;position:absolute;right:0;top:0;background:#7f7f7f;background:hsla(0,0%,100%,.5)}.loading-overlay .loading-icon{position:relative}.loading-overlay .loading-icon:after{-webkit-animation:spinAround .5s linear infinite;animation:spinAround .5s linear infinite;border-radius:290486px;content:\"\";display:block;height:1em;position:relative;width:1em;position:absolute;top:calc(50% - 1.5em);left:calc(50% - 1.5em);width:3em;height:3em;border-color:transparent transparent #dbdbdb #dbdbdb;border-style:solid;border-width:.25em}.menu .menu-list li>a.is-disabled{pointer-events:none;cursor:not-allowed;opacity:.5}.message .media,.notification .media{padding-top:0;border:0}.modal.is-full-screen>.animation-content,.modal.is-full-screen>.animation-content>.modal-card{width:100%;height:100%;max-height:100vh;margin:0;background-color:#f5f5f5}.modal .animation-content{margin:0 20px}.modal .animation-content .modal-card{margin:0}@media screen and (max-width:768px){.modal .animation-content{width:100%}}.modal .modal-content{width:100%}.notices{position:fixed;display:-webkit-box;display:-ms-flexbox;display:flex;top:0;bottom:0;left:0;right:0;padding:2em;overflow:hidden;z-index:1000;pointer-events:none}.notices .toast{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-animation-duration:.15s;animation-duration:.15s;margin:.5em 0;text-align:center;-webkit-box-shadow:0 1px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 1px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);border-radius:2em;padding:.75em 1.5em;pointer-events:auto;opacity:.92}.notices .toast.is-white{color:#0a0a0a;background:#fff}.notices .toast.is-black{color:#fff;background:#0a0a0a}.notices .toast.is-light{color:#363636;background:#f5f5f5}.notices .toast.is-dark{color:#f5f5f5;background:#363636}.notices .toast.is-link,.notices .toast.is-primary{color:#fff;background:#7957d5}.notices .toast.is-info{color:#fff;background:#167df0}.notices .toast.is-success{color:#fff;background:#23d160}.notices .toast.is-warning{color:rgba(0,0,0,.7);background:#ffdd57}.notices .toast.is-danger{color:#fff;background:#ff3860}.notices .snackbar{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-pack:distribute;justify-content:space-around;-webkit-animation-duration:.15s;animation-duration:.15s;margin:.5em 0;-webkit-box-shadow:0 1px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);box-shadow:0 1px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);border-radius:4px;pointer-events:auto;background:#363636;color:#f5f5f5;min-height:3em}.notices .snackbar .text{padding:.5em 1em}.notices .snackbar .action{margin-left:auto;padding:.5em .5em .5em 0}.notices .snackbar .action .button{font-weight:600;text-transform:uppercase;background:#363636;border:transparent}.notices .snackbar .action .button:active,.notices .snackbar .action .button:hover{background:#292929}.notices .snackbar .action.is-white .button{color:#fff}.notices .snackbar .action.is-black .button{color:#0a0a0a}.notices .snackbar .action.is-light .button{color:#f5f5f5}.notices .snackbar .action.is-dark .button{color:#363636}.notices .snackbar .action.is-link .button,.notices .snackbar .action.is-primary .button{color:#7957d5}.notices .snackbar .action.is-info .button{color:#167df0}.notices .snackbar .action.is-success .button{color:#23d160}.notices .snackbar .action.is-warning .button{color:#ffdd57}.notices .snackbar .action.is-danger .button{color:#ff3860}@media screen and (max-width:768px){.notices .snackbar{width:100%;margin:0;border-radius:0}}@media print,screen and (min-width:769px){.notices .snackbar{min-width:350px;max-width:600px;overflow:hidden}}.notices .notification{max-width:600px}.notices .notification.is-bottom,.notices .notification.is-top,.notices .snackbar.is-bottom,.notices .snackbar.is-top,.notices .toast.is-bottom,.notices .toast.is-top{-ms-flex-item-align:center;align-self:center}.notices .notification.is-bottom-right,.notices .notification.is-top-right,.notices .snackbar.is-bottom-right,.notices .snackbar.is-top-right,.notices .toast.is-bottom-right,.notices .toast.is-top-right{-ms-flex-item-align:end;align-self:flex-end}.notices .notification.is-bottom-left,.notices .notification.is-top-left,.notices .snackbar.is-bottom-left,.notices .snackbar.is-top-left,.notices .toast.is-bottom-left,.notices .toast.is-top-left{-ms-flex-item-align:start;align-self:flex-start}.notices .notification.is-toast,.notices .snackbar.is-toast,.notices .toast.is-toast{opacity:.92}.notices.is-top{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.notices.is-bottom{-webkit-box-orient:vertical;-webkit-box-direction:reverse;-ms-flex-direction:column-reverse;flex-direction:column-reverse}.notices.is-bottom .notification{margin-bottom:0}.notices.is-bottom .notification:not(:first-child){margin-bottom:1.5rem}.notices.has-custom-container{position:absolute}@media screen and (max-width:768px){.notices{padding:0;position:fixed!important}}.b-numberinput.field{margin-bottom:0}.b-numberinput.field.has-addons.is-expanded,.b-numberinput.field.is-grouped div.control{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-negative:1;flex-shrink:1}.b-numberinput input[type=number]::-webkit-inner-spin-button,.b-numberinput input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none}.b-numberinput input[type=number]{-moz-appearance:textfield;text-align:center}.b-numberinput .button.is-rounded{padding-left:.75em;padding-right:.75em}.pagination .pagination-next,.pagination .pagination-previous{padding-left:.25em;padding-right:.25em}.pagination .pagination-next.is-disabled,.pagination .pagination-previous.is-disabled{pointer-events:none;cursor:not-allowed;opacity:.5}.pagination.is-simple{-webkit-box-pack:normal;-ms-flex-pack:normal;justify-content:normal}.pagination.is-simple.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.pagination.is-simple.is-right{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.pagination .is-current{pointer-events:none;cursor:not-allowed}.progress-wrapper{position:relative;overflow:hidden}.progress-wrapper:not(:last-child){margin-bottom:1.5rem}.progress-wrapper .progress-value{position:absolute;top:0;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);font-size:.66667rem;line-height:1rem;font-weight:700;color:#fff;white-space:nowrap}.progress-wrapper .progress{margin-bottom:0}.progress-wrapper .progress.is-small+.progress-value{font-size:.5rem;line-height:.75rem}.progress-wrapper .progress.is-medium+.progress-value{font-size:.83333rem;line-height:1.25rem}.progress-wrapper .progress.is-large+.progress-value{font-size:1rem;line-height:1.5rem}.progress-wrapper .progress:indeterminate::-ms-fill{animation-name:none}.progress-wrapper .progress::-webkit-progress-value{-webkit-transition:width .5s ease;transition:width .5s ease}.b-radio.radio{outline:none;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.b-radio.radio:not(.button){margin-right:.5em}.b-radio.radio:not(.button)+.radio:last-child{margin-right:0}.b-radio.radio+.radio{margin-left:0}.b-radio.radio input[type=radio]{position:absolute;left:0;opacity:0;outline:none;z-index:-1}.b-radio.radio input[type=radio]+.check{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-negative:0;flex-shrink:0;position:relative;cursor:pointer;width:1.25em;height:1.25em;-webkit-transition:background .15s ease-out;transition:background .15s ease-out;border-radius:50%;border:2px solid #7a7a7a}.b-radio.radio input[type=radio]+.check:before{content:\"\";display:-webkit-box;display:-ms-flexbox;display:flex;position:absolute;left:50%;margin-left:-.625em;bottom:50%;margin-bottom:-.625em;width:1.25em;height:1.25em;-webkit-transition:-webkit-transform .15s ease-out;transition:-webkit-transform .15s ease-out;transition:transform .15s ease-out;transition:transform .15s ease-out,-webkit-transform .15s ease-out;border-radius:50%;-webkit-transform:scale(0);transform:scale(0);background-color:#7957d5}.b-radio.radio input[type=radio]+.check.is-white:before{background:#fff}.b-radio.radio input[type=radio]+.check.is-black:before{background:#0a0a0a}.b-radio.radio input[type=radio]+.check.is-light:before{background:#f5f5f5}.b-radio.radio input[type=radio]+.check.is-dark:before{background:#363636}.b-radio.radio input[type=radio]+.check.is-link:before,.b-radio.radio input[type=radio]+.check.is-primary:before{background:#7957d5}.b-radio.radio input[type=radio]+.check.is-info:before{background:#167df0}.b-radio.radio input[type=radio]+.check.is-success:before{background:#23d160}.b-radio.radio input[type=radio]+.check.is-warning:before{background:#ffdd57}.b-radio.radio input[type=radio]+.check.is-danger:before{background:#ff3860}.b-radio.radio input[type=radio]:checked+.check{border-color:#7957d5}.b-radio.radio input[type=radio]:checked+.check.is-white{border-color:#fff}.b-radio.radio input[type=radio]:checked+.check.is-black{border-color:#0a0a0a}.b-radio.radio input[type=radio]:checked+.check.is-light{border-color:#f5f5f5}.b-radio.radio input[type=radio]:checked+.check.is-dark{border-color:#363636}.b-radio.radio input[type=radio]:checked+.check.is-link,.b-radio.radio input[type=radio]:checked+.check.is-primary{border-color:#7957d5}.b-radio.radio input[type=radio]:checked+.check.is-info{border-color:#167df0}.b-radio.radio input[type=radio]:checked+.check.is-success{border-color:#23d160}.b-radio.radio input[type=radio]:checked+.check.is-warning{border-color:#ffdd57}.b-radio.radio input[type=radio]:checked+.check.is-danger{border-color:#ff3860}.b-radio.radio input[type=radio]:checked+.check:before{-webkit-transform:scale(.5);transform:scale(.5)}.b-radio.radio input[type=radio]:focus+.check{-webkit-box-shadow:0 0 .5em hsla(0,0%,47.8%,.8);box-shadow:0 0 .5em hsla(0,0%,47.8%,.8)}.b-radio.radio input[type=radio]:focus:checked+.check{-webkit-box-shadow:0 0 .5em rgba(121,87,213,.8);box-shadow:0 0 .5em rgba(121,87,213,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-white{-webkit-box-shadow:0 0 .5em hsla(0,0%,100%,.8);box-shadow:0 0 .5em hsla(0,0%,100%,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-black{-webkit-box-shadow:0 0 .5em rgba(10,10,10,.8);box-shadow:0 0 .5em rgba(10,10,10,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-light{-webkit-box-shadow:0 0 .5em hsla(0,0%,96.1%,.8);box-shadow:0 0 .5em hsla(0,0%,96.1%,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-dark{-webkit-box-shadow:0 0 .5em rgba(54,54,54,.8);box-shadow:0 0 .5em rgba(54,54,54,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-link,.b-radio.radio input[type=radio]:focus:checked+.check.is-primary{-webkit-box-shadow:0 0 .5em rgba(121,87,213,.8);box-shadow:0 0 .5em rgba(121,87,213,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-info{-webkit-box-shadow:0 0 .5em rgba(22,125,240,.8);box-shadow:0 0 .5em rgba(22,125,240,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-success{-webkit-box-shadow:0 0 .5em rgba(35,209,96,.8);box-shadow:0 0 .5em rgba(35,209,96,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-warning{-webkit-box-shadow:0 0 .5em rgba(255,221,87,.8);box-shadow:0 0 .5em rgba(255,221,87,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-danger{-webkit-box-shadow:0 0 .5em rgba(255,56,96,.8);box-shadow:0 0 .5em rgba(255,56,96,.8)}.b-radio.radio .control-label{padding-left:.5em}.b-radio.radio.button{display:-webkit-box;display:-ms-flexbox;display:flex}.b-radio.radio[disabled]{opacity:.5}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check{border-color:#7957d5}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-white{border-color:#fff}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-black{border-color:#0a0a0a}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-light{border-color:#f5f5f5}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-dark{border-color:#363636}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-link,.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-primary{border-color:#7957d5}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-info{border-color:#167df0}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-success{border-color:#23d160}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-warning{border-color:#ffdd57}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-danger{border-color:#ff3860}.b-radio.radio.is-small{border-radius:2px;font-size:.75rem}.b-radio.radio.is-medium{font-size:1.25rem}.b-radio.radio.is-large{font-size:1.5rem}.rate{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex}.rate:not(:last-child){margin-bottom:.75rem}.rate.is-spaced .rate-item:not(:last-child){margin-right:.25rem}.rate.is-disabled .rate-item{cursor:auto}.rate.is-disabled .rate-item:hover{-webkit-transform:none;transform:none}.rate.is-rtl .rate-item{-webkit-box-ordinal-group:2;-ms-flex-order:1;order:1}.rate.is-rtl .rate-text{margin-left:0;margin-right:.35rem}.rate .rate-item{cursor:pointer;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;position:relative;-webkit-transition:all .3s;transition:all .3s}.rate .rate-item:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}.rate .rate-item.set-half .is-half,.rate .rate-item.set-on .icon{color:#ffd83d}.rate .rate-item.set-half .is-half{position:absolute;left:0;top:0;overflow:hidden}.rate .icon{color:#dbdbdb;line-height:1;pointer-events:none;width:inherit}.rate .is-half>i{position:absolute;left:0}.rate .rate-text{font-size:.8rem;margin-left:.35rem}.rate .rate-text.is-small{font-size:.6rem}.rate .rate-text.is-medium{font-size:1rem}.rate .rate-text.is-large{font-size:1.2rem}.select select{text-rendering:auto!important;padding-right:2.5em}.select select option{color:#4a4a4a;padding:.25em .5em}.select select option:disabled{cursor:not-allowed;opacity:.5}.select select optgroup{color:#b5b5b5;font-weight:400;font-style:normal;padding:.25em 0}.select.is-empty select{color:hsla(0,0%,47.8%,.7)}.b-skeleton{width:100%}.b-skeleton>.b-skeleton-item{background:-webkit-gradient(linear,left top,right top,color-stop(25%,#dbdbdb),color-stop(50%,hsla(0,0%,85.9%,.5)),color-stop(75%,#dbdbdb));background:linear-gradient(90deg,#dbdbdb 25%,hsla(0,0%,85.9%,.5) 50%,#dbdbdb 75%);background-size:400% 100%;width:100%}.b-skeleton>.b-skeleton-item.is-rounded{border-radius:4px}.b-skeleton>.b-skeleton-item:after{content:\"\\00a0\"}.b-skeleton>.b-skeleton-item+.b-skeleton-item{margin-top:.5rem}.b-skeleton.is-animated>.b-skeleton-item{-webkit-animation:skeleton-loading 1.5s infinite;animation:skeleton-loading 1.5s infinite}.b-skeleton+.b-skeleton{margin-top:.5rem}.b-skeleton>.b-skeleton-item{line-height:1rem}.b-skeleton.is-small>.b-skeleton-item{line-height:.75rem}.b-skeleton.is-medium>.b-skeleton-item{line-height:1.25rem}.b-skeleton.is-large>.b-skeleton-item{line-height:1.5rem}@-webkit-keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}.b-sidebar .sidebar-content{background-color:#f5f5f5;-webkit-box-shadow:5px 0 13px 3px rgba(10,10,10,.1);box-shadow:5px 0 13px 3px rgba(10,10,10,.1);width:260px;z-index:41}.b-sidebar .sidebar-content.is-white{background-color:#fff}.b-sidebar .sidebar-content.is-black{background-color:#0a0a0a}.b-sidebar .sidebar-content.is-light{background-color:#f5f5f5}.b-sidebar .sidebar-content.is-dark{background-color:#363636}.b-sidebar .sidebar-content.is-link,.b-sidebar .sidebar-content.is-primary{background-color:#7957d5}.b-sidebar .sidebar-content.is-info{background-color:#167df0}.b-sidebar .sidebar-content.is-success{background-color:#23d160}.b-sidebar .sidebar-content.is-warning{background-color:#ffdd57}.b-sidebar .sidebar-content.is-danger{background-color:#ff3860}.b-sidebar .sidebar-content.is-fixed{position:fixed;left:0;top:0}.b-sidebar .sidebar-content.is-fixed.is-right{left:auto;right:0}.b-sidebar .sidebar-content.is-absolute{position:absolute;left:0;top:0}.b-sidebar .sidebar-content.is-absolute.is-right{left:auto;right:0}.b-sidebar .sidebar-content.is-mini{width:80px}.b-sidebar .sidebar-content.is-mini.is-mini-expand:hover{-webkit-transition:width .15s ease-out;transition:width .15s ease-out}.b-sidebar .sidebar-content.is-mini.is-mini-expand:hover:not(.is-fullwidth){width:260px}.b-sidebar .sidebar-content.is-mini.is-mini-expand:hover:not(.is-fullwidth).is-mini-expand-fixed{position:fixed}.b-sidebar .sidebar-content.is-static{position:static}.b-sidebar .sidebar-content.is-absolute,.b-sidebar .sidebar-content.is-static{-webkit-transition:width .15s ease-out;transition:width .15s ease-out}.b-sidebar .sidebar-content.is-fullwidth{width:100%;max-width:100%}.b-sidebar .sidebar-content.is-fullheight{height:100%;max-height:100%;overflow:hidden;overflow-y:auto;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-ms-flex-line-pack:stretch;align-content:stretch}@media screen and (max-width:1023px){.b-sidebar .sidebar-content.is-mini-mobile{width:80px}.b-sidebar .sidebar-content.is-mini-mobile.is-mini-expand:hover:not(.is-fullwidth-mobile){width:260px}.b-sidebar .sidebar-content.is-mini-mobile.is-mini-expand:hover:not(.is-fullwidth-mobile).is-mini-expand-fixed{position:fixed}.b-sidebar .sidebar-content.is-hidden-mobile{width:0;height:0;overflow:hidden}.b-sidebar .sidebar-content.is-fullwidth-mobile{width:100%;max-width:100%}}.b-sidebar .sidebar-background{bottom:0;left:0;position:absolute;right:0;top:0;background:rgba(10,10,10,.86);position:fixed;z-index:40}.b-slider{margin:1em 0;background:transparent;width:100%}.b-slider .b-slider-track{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;cursor:pointer;background:#dbdbdb;border-radius:4px}.b-slider .b-slider-fill{position:absolute;height:100%;-webkit-box-shadow:0 0 0 #7a7a7a;box-shadow:0 0 0 #7a7a7a;background:#dbdbdb;border-radius:4px;border:0 solid #7a7a7a;top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.b-slider .b-slider-thumb-wrapper{display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:absolute;cursor:-webkit-grab;cursor:grab;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);top:50%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column}.b-slider .b-slider-thumb-wrapper .b-slider-thumb{-webkit-box-shadow:none;box-shadow:none;border:1px solid #b5b5b5;border-radius:4px;background:#fff}.b-slider .b-slider-thumb-wrapper .b-slider-thumb:focus{-webkit-transform:scale(1.25);transform:scale(1.25)}.b-slider .b-slider-thumb-wrapper.is-dragging{cursor:-webkit-grabbing;cursor:grabbing}.b-slider .b-slider-thumb-wrapper.is-dragging .b-slider-thumb{-webkit-transform:scale(1.25);transform:scale(1.25)}.b-slider.slider-focus{padding-top:20px;padding-bottom:20px;margin-top:-20px;margin-bottom:-20px;cursor:pointer}.b-slider.is-rounded .b-slider-thumb{border-radius:290486px}.b-slider.is-disabled .b-slider-track{cursor:not-allowed;opacity:.5}.b-slider.is-disabled .b-slider-thumb-wrapper{cursor:not-allowed}.b-slider.is-disabled .b-slider-thumb-wrapper .b-slider-thumb{-webkit-transform:scale(1);transform:scale(1)}.b-slider .b-slider-track{height:.5rem}.b-slider .b-slider-thumb{height:1rem;width:1rem}.b-slider .b-slider-tick{height:.25rem}.b-slider .b-slider-tick-label{font-size:.75rem;position:absolute;top:calc(.25rem + 2px);left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.b-slider.is-small .b-slider-track{height:.375rem}.b-slider.is-small .b-slider-thumb{height:.75rem;width:.75rem}.b-slider.is-small .b-slider-tick{height:.1875rem}.b-slider.is-small .b-slider-tick-label{font-size:.75rem;position:absolute;top:calc(.1875rem + 2px);left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.b-slider.is-medium .b-slider-track{height:.625rem}.b-slider.is-medium .b-slider-thumb{height:1.25rem;width:1.25rem}.b-slider.is-medium .b-slider-tick{height:.3125rem}.b-slider.is-medium .b-slider-tick-label{font-size:.75rem;position:absolute;top:calc(.3125rem + 2px);left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.b-slider.is-large .b-slider-track{height:.75rem}.b-slider.is-large .b-slider-thumb{height:1.5rem;width:1.5rem}.b-slider.is-large .b-slider-tick{height:.375rem}.b-slider.is-large .b-slider-tick-label{font-size:.75rem;position:absolute;top:calc(.375rem + 2px);left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.b-slider.is-white .b-slider-fill{background:#fff!important}.b-slider.is-black .b-slider-fill{background:#0a0a0a!important}.b-slider.is-light .b-slider-fill{background:#f5f5f5!important}.b-slider.is-dark .b-slider-fill{background:#363636!important}.b-slider.is-link .b-slider-fill,.b-slider.is-primary .b-slider-fill{background:#7957d5!important}.b-slider.is-info .b-slider-fill{background:#167df0!important}.b-slider.is-success .b-slider-fill{background:#23d160!important}.b-slider.is-warning .b-slider-fill{background:#ffdd57!important}.b-slider.is-danger .b-slider-fill{background:#ff3860!important}.b-slider .b-slider-tick{position:absolute;width:3px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);top:50%;background:#b5b5b5;border-radius:4px}.b-slider .b-slider-tick.is-tick-hidden{background:transparent}.b-steps .steps .step-items{display:-webkit-box;display:-ms-flexbox;display:flex;-ms-flex-wrap:wrap;flex-wrap:wrap}.b-steps .steps .step-items .step-item{margin-top:0;position:relative;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-ms-flex-preferred-size:1em;flex-basis:1em}.b-steps .steps .step-items .step-item .step-link{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;color:#4a4a4a}.b-steps .steps .step-items .step-item .step-link:not(.is-clickable){cursor:not-allowed}.b-steps .steps .step-items .step-item .step-marker{-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-ms-flexbox;display:flex;border-radius:4px;font-weight:700;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;background:#b5b5b5;border:.2em solid #fff;z-index:1;overflow:hidden}.b-steps .steps .step-items .step-item.is-white:after,.b-steps .steps .step-items .step-item.is-white:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#fff));background:linear-gradient(270deg,#dbdbdb 50%,#fff 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-white.is-active .step-marker{background-color:#fff;border-color:#fff;color:#fff}.b-steps .steps .step-items .step-item.is-white.is-active:after,.b-steps .steps .step-items .step-item.is-white.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-white.is-previous .step-marker{color:#0a0a0a;background-color:#fff}.b-steps .steps .step-items .step-item.is-white.is-previous:after,.b-steps .steps .step-items .step-item.is-white.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-black:after,.b-steps .steps .step-items .step-item.is-black:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#0a0a0a));background:linear-gradient(270deg,#dbdbdb 50%,#0a0a0a 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-black.is-active .step-marker{background-color:#fff;border-color:#0a0a0a;color:#0a0a0a}.b-steps .steps .step-items .step-item.is-black.is-active:after,.b-steps .steps .step-items .step-item.is-black.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-black.is-previous .step-marker{color:#fff;background-color:#0a0a0a}.b-steps .steps .step-items .step-item.is-black.is-previous:after,.b-steps .steps .step-items .step-item.is-black.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-light:after,.b-steps .steps .step-items .step-item.is-light:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#f5f5f5));background:linear-gradient(270deg,#dbdbdb 50%,#f5f5f5 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-light.is-active .step-marker{background-color:#fff;border-color:#f5f5f5;color:#f5f5f5}.b-steps .steps .step-items .step-item.is-light.is-active:after,.b-steps .steps .step-items .step-item.is-light.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-light.is-previous .step-marker{color:#363636;background-color:#f5f5f5}.b-steps .steps .step-items .step-item.is-light.is-previous:after,.b-steps .steps .step-items .step-item.is-light.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-dark:after,.b-steps .steps .step-items .step-item.is-dark:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#363636));background:linear-gradient(270deg,#dbdbdb 50%,#363636 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-dark.is-active .step-marker{background-color:#fff;border-color:#363636;color:#363636}.b-steps .steps .step-items .step-item.is-dark.is-active:after,.b-steps .steps .step-items .step-item.is-dark.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-dark.is-previous .step-marker{color:#f5f5f5;background-color:#363636}.b-steps .steps .step-items .step-item.is-dark.is-previous:after,.b-steps .steps .step-items .step-item.is-dark.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-primary:after,.b-steps .steps .step-items .step-item.is-primary:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#7957d5));background:linear-gradient(270deg,#dbdbdb 50%,#7957d5 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-primary.is-active .step-marker{background-color:#fff;border-color:#7957d5;color:#7957d5}.b-steps .steps .step-items .step-item.is-primary.is-active:after,.b-steps .steps .step-items .step-item.is-primary.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-primary.is-previous .step-marker{color:#fff;background-color:#7957d5}.b-steps .steps .step-items .step-item.is-primary.is-previous:after,.b-steps .steps .step-items .step-item.is-primary.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-link:after,.b-steps .steps .step-items .step-item.is-link:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#7957d5));background:linear-gradient(270deg,#dbdbdb 50%,#7957d5 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-link.is-active .step-marker{background-color:#fff;border-color:#7957d5;color:#7957d5}.b-steps .steps .step-items .step-item.is-link.is-active:after,.b-steps .steps .step-items .step-item.is-link.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-link.is-previous .step-marker{color:#fff;background-color:#7957d5}.b-steps .steps .step-items .step-item.is-link.is-previous:after,.b-steps .steps .step-items .step-item.is-link.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-info:after,.b-steps .steps .step-items .step-item.is-info:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#167df0));background:linear-gradient(270deg,#dbdbdb 50%,#167df0 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-info.is-active .step-marker{background-color:#fff;border-color:#167df0;color:#167df0}.b-steps .steps .step-items .step-item.is-info.is-active:after,.b-steps .steps .step-items .step-item.is-info.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-info.is-previous .step-marker{color:#fff;background-color:#167df0}.b-steps .steps .step-items .step-item.is-info.is-previous:after,.b-steps .steps .step-items .step-item.is-info.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-success:after,.b-steps .steps .step-items .step-item.is-success:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#23d160));background:linear-gradient(270deg,#dbdbdb 50%,#23d160 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-success.is-active .step-marker{background-color:#fff;border-color:#23d160;color:#23d160}.b-steps .steps .step-items .step-item.is-success.is-active:after,.b-steps .steps .step-items .step-item.is-success.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-success.is-previous .step-marker{color:#fff;background-color:#23d160}.b-steps .steps .step-items .step-item.is-success.is-previous:after,.b-steps .steps .step-items .step-item.is-success.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-warning:after,.b-steps .steps .step-items .step-item.is-warning:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#ffdd57));background:linear-gradient(270deg,#dbdbdb 50%,#ffdd57 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-warning.is-active .step-marker{background-color:#fff;border-color:#ffdd57;color:#ffdd57}.b-steps .steps .step-items .step-item.is-warning.is-active:after,.b-steps .steps .step-items .step-item.is-warning.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-warning.is-previous .step-marker{color:rgba(0,0,0,.7);background-color:#ffdd57}.b-steps .steps .step-items .step-item.is-warning.is-previous:after,.b-steps .steps .step-items .step-item.is-warning.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-danger:after,.b-steps .steps .step-items .step-item.is-danger:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#ff3860));background:linear-gradient(270deg,#dbdbdb 50%,#ff3860 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-danger.is-active .step-marker{background-color:#fff;border-color:#ff3860;color:#ff3860}.b-steps .steps .step-items .step-item.is-danger.is-active:after,.b-steps .steps .step-items .step-item.is-danger.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-danger.is-previous .step-marker{color:#fff;background-color:#ff3860}.b-steps .steps .step-items .step-item.is-danger.is-previous:after,.b-steps .steps .step-items .step-item.is-danger.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item .step-marker{color:#fff}.b-steps .steps .step-items .step-item .step-details{text-align:center;z-index:1}.b-steps .steps .step-items .step-item:not(:first-child),.b-steps .steps .step-items .step-item:only-child{-ms-flex-negative:1;flex-shrink:1}.b-steps .steps .step-items .step-item:not(:first-child):before,.b-steps .steps .step-items .step-item:only-child:before{content:\" \";display:block;position:absolute;width:100%;bottom:0;left:-50%}.b-steps .steps .step-items .step-item:only-child:after{content:\" \";display:block;position:absolute;height:.2em;bottom:0}.b-steps .steps .step-items .step-item:only-child:after,.b-steps .steps .step-items .step-item:only-child:before{width:25%;left:50%}.b-steps .steps .step-items .step-item:only-child:before{right:50%;left:auto}.b-steps .steps .step-items .step-item:after,.b-steps .steps .step-items .step-item:before{background:-webkit-gradient(linear,right top,left top,color-stop(50%,#dbdbdb),color-stop(50%,#7957d5));background:linear-gradient(270deg,#dbdbdb 50%,#7957d5 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-active .step-link{cursor:default}.b-steps .steps .step-items .step-item.is-active .step-marker{background-color:#fff;border-color:#7957d5;color:#7957d5}.b-steps .steps .step-items .step-item.is-active:after,.b-steps .steps .step-items .step-item.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-previous .step-marker{color:#fff;background-color:#7957d5}.b-steps .steps .step-items .step-item.is-previous:after,.b-steps .steps .step-items .step-item.is-previous:before{background-position:0 100%}.b-steps .steps+.step-content{position:relative;overflow:visible;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:1rem}.b-steps .steps+.step-content .step-item{-ms-flex-negative:0;flex-shrink:0;-ms-flex-preferred-size:auto;flex-basis:auto}.b-steps .steps+.step-content.is-transitioning{overflow:hidden}.b-steps .steps.is-rounded .step-item .step-marker{border-radius:290486px}.b-steps .steps.is-animated .step-item:not(:first-child):before,.b-steps .steps.is-animated .step-item:only-child:before{-webkit-transition:background .15s ease-out;transition:background .15s ease-out}.b-steps .steps.has-label-left .step-items .step-item .step-link,.b-steps .steps.has-label-right .step-items .step-item .step-link{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.b-steps .steps.has-label-left .step-items .step-item .step-link>.step-details,.b-steps .steps.has-label-right .step-items .step-item .step-link>.step-details{background-color:#fff;padding:.2em}.b-steps .steps.has-label-left .step-items .step-item .step-link{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.b-steps .steps{font-size:1rem;min-height:2rem}.b-steps .steps .step-items .step-item .step-marker{height:2rem;width:2rem}.b-steps .steps .step-items .step-item .step-marker .icon *,.b-steps .steps .step-items .step-item .step-marker .icon :before{font-size:1rem}.b-steps .steps .step-items .step-item .step-details .step-title{font-size:1.2rem;font-weight:600;line-height:1rem}.b-steps .steps .step-items .step-item:not(:first-child):before,.b-steps .steps .step-items .step-item:only-child:before{height:.2em;top:1rem}.b-steps .steps .step-items .step-item:only-child:after{top:1rem}@media screen and (max-width:768px){.b-steps .steps .step-items .step-item:after,.b-steps .steps .step-items .step-item:before,.b-steps .steps .step-items .step-item:not(:first-child):before{top:1rem}}.b-steps.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-vertical>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-vertical>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(1rem - .1em)}.b-steps.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-vertical>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-vertical>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(1rem - .1em)}.b-steps.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(1rem - .1em)}.b-steps.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(1rem - .1em)}.b-steps.is-small .steps{font-size:.75rem;min-height:1.5rem}.b-steps.is-small .steps .step-items .step-item .step-marker{height:1.5rem;width:1.5rem}.b-steps.is-small .steps .step-items .step-item .step-marker .icon *,.b-steps.is-small .steps .step-items .step-item .step-marker .icon :before{font-size:.75rem}.b-steps.is-small .steps .step-items .step-item .step-details .step-title{font-size:.9rem;font-weight:600;line-height:.75rem}.b-steps.is-small .steps .step-items .step-item:not(:first-child):before,.b-steps.is-small .steps .step-items .step-item:only-child:before{height:.2em;top:.75rem}.b-steps.is-small .steps .step-items .step-item:only-child:after{top:.75rem}@media screen and (max-width:768px){.b-steps.is-small .steps .step-items .step-item:after,.b-steps.is-small .steps .step-items .step-item:before,.b-steps.is-small .steps .step-items .step-item:not(:first-child):before{top:.75rem}}.b-steps.is-small.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-small.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-small.is-vertical>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-small.is-vertical>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(.75rem - .1em)}.b-steps.is-small.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-small.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-small.is-vertical>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-small.is-vertical>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(.75rem - .1em)}.b-steps.is-small.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-small.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-small.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-small.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(.75rem - .1em)}.b-steps.is-small.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-small.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-small.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-small.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(.75rem - .1em)}.b-steps.is-medium .steps{font-size:1.25rem;min-height:2.5rem}.b-steps.is-medium .steps .step-items .step-item .step-marker{height:2.5rem;width:2.5rem}.b-steps.is-medium .steps .step-items .step-item .step-marker .icon *,.b-steps.is-medium .steps .step-items .step-item .step-marker .icon :before{font-size:1.25rem}.b-steps.is-medium .steps .step-items .step-item .step-details .step-title{font-size:1.5rem;font-weight:600;line-height:1.25rem}.b-steps.is-medium .steps .step-items .step-item:not(:first-child):before,.b-steps.is-medium .steps .step-items .step-item:only-child:before{height:.2em;top:1.25rem}.b-steps.is-medium .steps .step-items .step-item:only-child:after{top:1.25rem}@media screen and (max-width:768px){.b-steps.is-medium .steps .step-items .step-item:after,.b-steps.is-medium .steps .step-items .step-item:before,.b-steps.is-medium .steps .step-items .step-item:not(:first-child):before{top:1.25rem}}.b-steps.is-medium.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-medium.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-medium.is-vertical>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-medium.is-vertical>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(1.25rem - .1em)}.b-steps.is-medium.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-medium.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-medium.is-vertical>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-medium.is-vertical>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(1.25rem - .1em)}.b-steps.is-medium.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-medium.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-medium.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-medium.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(1.25rem - .1em)}.b-steps.is-medium.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-medium.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-medium.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-medium.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(1.25rem - .1em)}.b-steps.is-large .steps{font-size:1.5rem;min-height:3rem}.b-steps.is-large .steps .step-items .step-item .step-marker{height:3rem;width:3rem}.b-steps.is-large .steps .step-items .step-item .step-marker .icon *,.b-steps.is-large .steps .step-items .step-item .step-marker .icon :before{font-size:1.5rem}.b-steps.is-large .steps .step-items .step-item .step-details .step-title{font-size:1.8rem;font-weight:600;line-height:1.5rem}.b-steps.is-large .steps .step-items .step-item:not(:first-child):before,.b-steps.is-large .steps .step-items .step-item:only-child:before{height:.2em;top:1.5rem}.b-steps.is-large .steps .step-items .step-item:only-child:after{top:1.5rem}@media screen and (max-width:768px){.b-steps.is-large .steps .step-items .step-item:after,.b-steps.is-large .steps .step-items .step-item:before,.b-steps.is-large .steps .step-items .step-item:not(:first-child):before{top:1.5rem}}.b-steps.is-large.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-large.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-large.is-vertical>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-large.is-vertical>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(1.5rem - .1em)}.b-steps.is-large.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-large.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-large.is-vertical>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-large.is-vertical>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(1.5rem - .1em)}.b-steps.is-large.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-large.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-large.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-large.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(1.5rem - .1em)}.b-steps.is-large.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-large.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-large.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-large.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(1.5rem - .1em)}.b-steps.is-vertical{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row;-ms-flex-wrap:wrap;flex-wrap:wrap}.b-steps.is-vertical>.steps .step-items{height:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-bottom-color:transparent}.b-steps.is-vertical>.steps .step-items .step-item{width:100%;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;padding:1em 0}.b-steps.is-vertical>.steps .step-items .step-item:after,.b-steps.is-vertical>.steps .step-items .step-item:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#7957d5));background:linear-gradient(0deg,#dbdbdb 50%,#7957d5 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-white:after,.b-steps.is-vertical>.steps .step-items .step-item.is-white:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#fff));background:linear-gradient(0deg,#dbdbdb 50%,#fff 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-black:after,.b-steps.is-vertical>.steps .step-items .step-item.is-black:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#0a0a0a));background:linear-gradient(0deg,#dbdbdb 50%,#0a0a0a 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-light:after,.b-steps.is-vertical>.steps .step-items .step-item.is-light:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#f5f5f5));background:linear-gradient(0deg,#dbdbdb 50%,#f5f5f5 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-dark:after,.b-steps.is-vertical>.steps .step-items .step-item.is-dark:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#363636));background:linear-gradient(0deg,#dbdbdb 50%,#363636 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-link:after,.b-steps.is-vertical>.steps .step-items .step-item.is-link:before,.b-steps.is-vertical>.steps .step-items .step-item.is-primary:after,.b-steps.is-vertical>.steps .step-items .step-item.is-primary:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#7957d5));background:linear-gradient(0deg,#dbdbdb 50%,#7957d5 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-info:after,.b-steps.is-vertical>.steps .step-items .step-item.is-info:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#167df0));background:linear-gradient(0deg,#dbdbdb 50%,#167df0 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-success:after,.b-steps.is-vertical>.steps .step-items .step-item.is-success:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#23d160));background:linear-gradient(0deg,#dbdbdb 50%,#23d160 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-warning:after,.b-steps.is-vertical>.steps .step-items .step-item.is-warning:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#ffdd57));background:linear-gradient(0deg,#dbdbdb 50%,#ffdd57 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-danger:after,.b-steps.is-vertical>.steps .step-items .step-item.is-danger:before{background:-webkit-gradient(linear,left bottom,left top,color-stop(50%,#dbdbdb),color-stop(50%,#ff3860));background:linear-gradient(0deg,#dbdbdb 50%,#ff3860 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item:not(:first-child):before,.b-steps.is-vertical>.steps .step-items .step-item:only-child:before{height:100%;width:.2em;top:-50%;left:calc(50% - .1em)}.b-steps.is-vertical>.steps .step-items .step-item.is-active:after,.b-steps.is-vertical>.steps .step-items .step-item.is-active:before,.b-steps.is-vertical>.steps .step-items .step-item.is-previous:after,.b-steps.is-vertical>.steps .step-items .step-item.is-previous:before{background-position:100% 0}.b-steps.is-vertical>.steps .step-items .step-item:only-child:before{top:50%}.b-steps.is-vertical>.steps .step-items .step-item:only-child:after{width:.2em;top:auto;bottom:50%}.b-steps.is-vertical>.steps .step-items .step-item:only-child:after,.b-steps.is-vertical>.steps .step-items .step-item:only-child:before{height:25%}.b-steps.is-vertical>.steps.has-label-right .step-items .step-item{-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start}.b-steps.is-vertical>.steps.has-label-left .step-items .step-item{-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end}.b-steps.is-vertical>.steps:not(.has-label-right):not(.has-label-left) .step-items .step-item .step-link>.step-details{background-color:#fff}.b-steps.is-vertical>.step-content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.b-steps.is-vertical>.step-navigation{-ms-flex-preferred-size:100%;flex-basis:100%}.b-steps.is-vertical.is-right{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}@media screen and (max-width:768px){.b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:not(.is-active){display:none}.b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:after,.b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:before,.b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:not(:first-child):before{content:\" \";display:block;position:absolute;height:.2em;width:25%;bottom:0;left:50%}.b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:before,.b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:not(:first-child):before{right:50%;left:auto}.b-steps:not(.is-vertical) .steps.mobile-compact .step-items .step-item:not(.is-active) .step-details{display:none}}.switch{cursor:pointer;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;position:relative;margin-right:.5em}.switch+.switch:last-child{margin-right:0}.switch input[type=checkbox]{position:absolute;left:0;opacity:0;outline:none;z-index:-1}.switch input[type=checkbox]+.check{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-negative:0;flex-shrink:0;width:2.75em;height:1.575em;padding:.2em;background:#b5b5b5;border-radius:4px;-webkit-transition:background .15s ease-out,-webkit-box-shadow .15s ease-out;transition:background .15s ease-out,-webkit-box-shadow .15s ease-out;transition:background .15s ease-out,box-shadow .15s ease-out;transition:background .15s ease-out,box-shadow .15s ease-out,-webkit-box-shadow .15s ease-out}.switch input[type=checkbox]+.check.is-white-passive,.switch input[type=checkbox]+.check:hover{background:#fff}.switch input[type=checkbox]+.check.is-black-passive,.switch input[type=checkbox]+.check:hover{background:#0a0a0a}.switch input[type=checkbox]+.check.is-light-passive,.switch input[type=checkbox]+.check:hover{background:#f5f5f5}.switch input[type=checkbox]+.check.is-dark-passive,.switch input[type=checkbox]+.check:hover{background:#363636}.switch input[type=checkbox]+.check.is-link-passive,.switch input[type=checkbox]+.check.is-primary-passive,.switch input[type=checkbox]+.check:hover{background:#7957d5}.switch input[type=checkbox]+.check.is-info-passive,.switch input[type=checkbox]+.check:hover{background:#167df0}.switch input[type=checkbox]+.check.is-success-passive,.switch input[type=checkbox]+.check:hover{background:#23d160}.switch input[type=checkbox]+.check.is-warning-passive,.switch input[type=checkbox]+.check:hover{background:#ffdd57}.switch input[type=checkbox]+.check.is-danger-passive,.switch input[type=checkbox]+.check:hover{background:#ff3860}.switch .taginput input[type=checkbox]+.check.taginput-container.is-focusable[type=checkbox]+.switch input[type=checkbox]+.check.check,.switch input[type=checkbox]+.check.input[type=checkbox]+.switch input[type=checkbox]+.check.check,.taginput .switch input[type=checkbox]+.check.taginput-container.is-focusable[type=checkbox]+.switch input[type=checkbox]+.check.check{background:\"pink\"}.switch input[type=checkbox]+.check:before{content:\"\";display:block;border-radius:4px;width:1.175em;height:1.175em;background:#f5f5f5;-webkit-box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);-webkit-transition:-webkit-transform .15s ease-out;transition:-webkit-transform .15s ease-out;transition:transform .15s ease-out;transition:transform .15s ease-out,-webkit-transform .15s ease-out;will-change:transform;-webkit-transform-origin:left;transform-origin:left}.switch input[type=checkbox]+.check.is-elastic:before{-webkit-transform:scaleX(1.5);transform:scaleX(1.5);border-radius:4px}.switch input[type=checkbox]:checked+.check{background:#7957d5}.switch input[type=checkbox]:checked+.check.is-white{background:#fff}.switch input[type=checkbox]:checked+.check.is-black{background:#0a0a0a}.switch input[type=checkbox]:checked+.check.is-light{background:#f5f5f5}.switch input[type=checkbox]:checked+.check.is-dark{background:#363636}.switch input[type=checkbox]:checked+.check.is-link,.switch input[type=checkbox]:checked+.check.is-primary{background:#7957d5}.switch input[type=checkbox]:checked+.check.is-info{background:#167df0}.switch input[type=checkbox]:checked+.check.is-success{background:#23d160}.switch input[type=checkbox]:checked+.check.is-warning{background:#ffdd57}.switch input[type=checkbox]:checked+.check.is-danger{background:#ff3860}.switch input[type=checkbox]:checked+.check:before{-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.switch input[type=checkbox]:checked+.check.is-elastic:before{-webkit-transform:translate3d(50%,0,0) scaleX(1.5);transform:translate3d(50%,0,0) scaleX(1.5)}.switch input[type=checkbox]:active,.switch input[type=checkbox]:focus{outline:none}.switch input[type=checkbox]:active+.check,.switch input[type=checkbox]:focus+.check{-webkit-box-shadow:0 0 .5em hsla(0,0%,47.8%,.6);box-shadow:0 0 .5em hsla(0,0%,47.8%,.6)}.switch input[type=checkbox]:active+.check.is-white-passive,.switch input[type=checkbox]:focus+.check.is-white-passive{-webkit-box-shadow:0 0 .5em hsla(0,0%,100%,.8);box-shadow:0 0 .5em hsla(0,0%,100%,.8)}.switch input[type=checkbox]:active+.check.is-black-passive,.switch input[type=checkbox]:focus+.check.is-black-passive{-webkit-box-shadow:0 0 .5em rgba(10,10,10,.8);box-shadow:0 0 .5em rgba(10,10,10,.8)}.switch input[type=checkbox]:active+.check.is-light-passive,.switch input[type=checkbox]:focus+.check.is-light-passive{-webkit-box-shadow:0 0 .5em hsla(0,0%,96.1%,.8);box-shadow:0 0 .5em hsla(0,0%,96.1%,.8)}.switch input[type=checkbox]:active+.check.is-dark-passive,.switch input[type=checkbox]:focus+.check.is-dark-passive{-webkit-box-shadow:0 0 .5em rgba(54,54,54,.8);box-shadow:0 0 .5em rgba(54,54,54,.8)}.switch input[type=checkbox]:active+.check.is-link-passive,.switch input[type=checkbox]:active+.check.is-primary-passive,.switch input[type=checkbox]:focus+.check.is-link-passive,.switch input[type=checkbox]:focus+.check.is-primary-passive{-webkit-box-shadow:0 0 .5em rgba(121,87,213,.8);box-shadow:0 0 .5em rgba(121,87,213,.8)}.switch input[type=checkbox]:active+.check.is-info-passive,.switch input[type=checkbox]:focus+.check.is-info-passive{-webkit-box-shadow:0 0 .5em rgba(22,125,240,.8);box-shadow:0 0 .5em rgba(22,125,240,.8)}.switch input[type=checkbox]:active+.check.is-success-passive,.switch input[type=checkbox]:focus+.check.is-success-passive{-webkit-box-shadow:0 0 .5em rgba(35,209,96,.8);box-shadow:0 0 .5em rgba(35,209,96,.8)}.switch input[type=checkbox]:active+.check.is-warning-passive,.switch input[type=checkbox]:focus+.check.is-warning-passive{-webkit-box-shadow:0 0 .5em rgba(255,221,87,.8);box-shadow:0 0 .5em rgba(255,221,87,.8)}.switch input[type=checkbox]:active+.check.is-danger-passive,.switch input[type=checkbox]:focus+.check.is-danger-passive{-webkit-box-shadow:0 0 .5em rgba(255,56,96,.8);box-shadow:0 0 .5em rgba(255,56,96,.8)}.switch input[type=checkbox]:active:checked+.check,.switch input[type=checkbox]:focus:checked+.check{-webkit-box-shadow:0 0 .5em rgba(121,87,213,.8);box-shadow:0 0 .5em rgba(121,87,213,.8)}.switch input[type=checkbox]:active:checked+.check.is-white,.switch input[type=checkbox]:focus:checked+.check.is-white{-webkit-box-shadow:0 0 .5em hsla(0,0%,100%,.8);box-shadow:0 0 .5em hsla(0,0%,100%,.8)}.switch input[type=checkbox]:active:checked+.check.is-black,.switch input[type=checkbox]:focus:checked+.check.is-black{-webkit-box-shadow:0 0 .5em rgba(10,10,10,.8);box-shadow:0 0 .5em rgba(10,10,10,.8)}.switch input[type=checkbox]:active:checked+.check.is-light,.switch input[type=checkbox]:focus:checked+.check.is-light{-webkit-box-shadow:0 0 .5em hsla(0,0%,96.1%,.8);box-shadow:0 0 .5em hsla(0,0%,96.1%,.8)}.switch input[type=checkbox]:active:checked+.check.is-dark,.switch input[type=checkbox]:focus:checked+.check.is-dark{-webkit-box-shadow:0 0 .5em rgba(54,54,54,.8);box-shadow:0 0 .5em rgba(54,54,54,.8)}.switch input[type=checkbox]:active:checked+.check.is-link,.switch input[type=checkbox]:active:checked+.check.is-primary,.switch input[type=checkbox]:focus:checked+.check.is-link,.switch input[type=checkbox]:focus:checked+.check.is-primary{-webkit-box-shadow:0 0 .5em rgba(121,87,213,.8);box-shadow:0 0 .5em rgba(121,87,213,.8)}.switch input[type=checkbox]:active:checked+.check.is-info,.switch input[type=checkbox]:focus:checked+.check.is-info{-webkit-box-shadow:0 0 .5em rgba(22,125,240,.8);box-shadow:0 0 .5em rgba(22,125,240,.8)}.switch input[type=checkbox]:active:checked+.check.is-success,.switch input[type=checkbox]:focus:checked+.check.is-success{-webkit-box-shadow:0 0 .5em rgba(35,209,96,.8);box-shadow:0 0 .5em rgba(35,209,96,.8)}.switch input[type=checkbox]:active:checked+.check.is-warning,.switch input[type=checkbox]:focus:checked+.check.is-warning{-webkit-box-shadow:0 0 .5em rgba(255,221,87,.8);box-shadow:0 0 .5em rgba(255,221,87,.8)}.switch input[type=checkbox]:active:checked+.check.is-danger,.switch input[type=checkbox]:focus:checked+.check.is-danger{-webkit-box-shadow:0 0 .5em rgba(255,56,96,.8);box-shadow:0 0 .5em rgba(255,56,96,.8)}.switch .control-label{padding-left:.5em}.switch:hover input[type=checkbox]+.check{background:hsla(0,0%,71%,.9)}.switch:hover input[type=checkbox]+.check.is-white-passive{background:hsla(0,0%,100%,.9)}.switch:hover input[type=checkbox]+.check.is-black-passive{background:rgba(10,10,10,.9)}.switch:hover input[type=checkbox]+.check.is-light-passive{background:hsla(0,0%,96.1%,.9)}.switch:hover input[type=checkbox]+.check.is-dark-passive{background:rgba(54,54,54,.9)}.switch:hover input[type=checkbox]+.check.is-link-passive,.switch:hover input[type=checkbox]+.check.is-primary-passive{background:rgba(121,87,213,.9)}.switch:hover input[type=checkbox]+.check.is-info-passive{background:rgba(22,125,240,.9)}.switch:hover input[type=checkbox]+.check.is-success-passive{background:rgba(35,209,96,.9)}.switch:hover input[type=checkbox]+.check.is-warning-passive{background:rgba(255,221,87,.9)}.switch:hover input[type=checkbox]+.check.is-danger-passive{background:rgba(255,56,96,.9)}.switch:hover input[type=checkbox]:checked+.check{background:rgba(121,87,213,.9)}.switch:hover input[type=checkbox]:checked+.check.is-white{background:hsla(0,0%,100%,.9)}.switch:hover input[type=checkbox]:checked+.check.is-black{background:rgba(10,10,10,.9)}.switch:hover input[type=checkbox]:checked+.check.is-light{background:hsla(0,0%,96.1%,.9)}.switch:hover input[type=checkbox]:checked+.check.is-dark{background:rgba(54,54,54,.9)}.switch:hover input[type=checkbox]:checked+.check.is-link,.switch:hover input[type=checkbox]:checked+.check.is-primary{background:rgba(121,87,213,.9)}.switch:hover input[type=checkbox]:checked+.check.is-info{background:rgba(22,125,240,.9)}.switch:hover input[type=checkbox]:checked+.check.is-success{background:rgba(35,209,96,.9)}.switch:hover input[type=checkbox]:checked+.check.is-warning{background:rgba(255,221,87,.9)}.switch:hover input[type=checkbox]:checked+.check.is-danger{background:rgba(255,56,96,.9)}.switch.is-rounded input[type=checkbox]+.check,.switch.is-rounded input[type=checkbox]+.check:before{border-radius:290486px}.switch.is-rounded input[type=checkbox].is-elastic:before{-webkit-transform:scaleX(1.5);transform:scaleX(1.5);border-radius:290486px}.switch.is-outlined input[type=checkbox]+.check{background:transparent;border:.1rem solid #b5b5b5}.switch.is-outlined input[type=checkbox]+.check.is-white-passive{border:.1rem solid hsla(0,0%,100%,.9)}.switch.is-outlined input[type=checkbox]+.check.is-white-passive:before{background:#fff}.switch.is-outlined input[type=checkbox]+.check.is-white-passive:hover{border-color:hsla(0,0%,100%,.9)}.switch.is-outlined input[type=checkbox]+.check.is-black-passive{border:.1rem solid rgba(10,10,10,.9)}.switch.is-outlined input[type=checkbox]+.check.is-black-passive:before{background:#0a0a0a}.switch.is-outlined input[type=checkbox]+.check.is-black-passive:hover{border-color:rgba(10,10,10,.9)}.switch.is-outlined input[type=checkbox]+.check.is-light-passive{border:.1rem solid hsla(0,0%,96.1%,.9)}.switch.is-outlined input[type=checkbox]+.check.is-light-passive:before{background:#f5f5f5}.switch.is-outlined input[type=checkbox]+.check.is-light-passive:hover{border-color:hsla(0,0%,96.1%,.9)}.switch.is-outlined input[type=checkbox]+.check.is-dark-passive{border:.1rem solid rgba(54,54,54,.9)}.switch.is-outlined input[type=checkbox]+.check.is-dark-passive:before{background:#363636}.switch.is-outlined input[type=checkbox]+.check.is-dark-passive:hover{border-color:rgba(54,54,54,.9)}.switch.is-outlined input[type=checkbox]+.check.is-primary-passive{border:.1rem solid rgba(121,87,213,.9)}.switch.is-outlined input[type=checkbox]+.check.is-primary-passive:before{background:#7957d5}.switch.is-outlined input[type=checkbox]+.check.is-primary-passive:hover{border-color:rgba(121,87,213,.9)}.switch.is-outlined input[type=checkbox]+.check.is-link-passive{border:.1rem solid rgba(121,87,213,.9)}.switch.is-outlined input[type=checkbox]+.check.is-link-passive:before{background:#7957d5}.switch.is-outlined input[type=checkbox]+.check.is-link-passive:hover{border-color:rgba(121,87,213,.9)}.switch.is-outlined input[type=checkbox]+.check.is-info-passive{border:.1rem solid rgba(22,125,240,.9)}.switch.is-outlined input[type=checkbox]+.check.is-info-passive:before{background:#167df0}.switch.is-outlined input[type=checkbox]+.check.is-info-passive:hover{border-color:rgba(22,125,240,.9)}.switch.is-outlined input[type=checkbox]+.check.is-success-passive{border:.1rem solid rgba(35,209,96,.9)}.switch.is-outlined input[type=checkbox]+.check.is-success-passive:before{background:#23d160}.switch.is-outlined input[type=checkbox]+.check.is-success-passive:hover{border-color:rgba(35,209,96,.9)}.switch.is-outlined input[type=checkbox]+.check.is-warning-passive{border:.1rem solid rgba(255,221,87,.9)}.switch.is-outlined input[type=checkbox]+.check.is-warning-passive:before{background:#ffdd57}.switch.is-outlined input[type=checkbox]+.check.is-warning-passive:hover{border-color:rgba(255,221,87,.9)}.switch.is-outlined input[type=checkbox]+.check.is-danger-passive{border:.1rem solid rgba(255,56,96,.9)}.switch.is-outlined input[type=checkbox]+.check.is-danger-passive:before{background:#ff3860}.switch.is-outlined input[type=checkbox]+.check.is-danger-passive:hover{border-color:rgba(255,56,96,.9)}.switch.is-outlined input[type=checkbox]+.check:before{background:#b5b5b5}.switch.is-outlined input[type=checkbox]:checked+.check{border-color:#7957d5}.switch.is-outlined input[type=checkbox]:checked+.check.is-white{background:transparent;border-color:#fff}.switch.is-outlined input[type=checkbox]:checked+.check.is-white:before{background:#fff}.switch.is-outlined input[type=checkbox]:checked+.check.is-black{background:transparent;border-color:#0a0a0a}.switch.is-outlined input[type=checkbox]:checked+.check.is-black:before{background:#0a0a0a}.switch.is-outlined input[type=checkbox]:checked+.check.is-light{background:transparent;border-color:#f5f5f5}.switch.is-outlined input[type=checkbox]:checked+.check.is-light:before{background:#f5f5f5}.switch.is-outlined input[type=checkbox]:checked+.check.is-dark{background:transparent;border-color:#363636}.switch.is-outlined input[type=checkbox]:checked+.check.is-dark:before{background:#363636}.switch.is-outlined input[type=checkbox]:checked+.check.is-primary{background:transparent;border-color:#7957d5}.switch.is-outlined input[type=checkbox]:checked+.check.is-primary:before{background:#7957d5}.switch.is-outlined input[type=checkbox]:checked+.check.is-link{background:transparent;border-color:#7957d5}.switch.is-outlined input[type=checkbox]:checked+.check.is-link:before{background:#7957d5}.switch.is-outlined input[type=checkbox]:checked+.check.is-info{background:transparent;border-color:#167df0}.switch.is-outlined input[type=checkbox]:checked+.check.is-info:before{background:#167df0}.switch.is-outlined input[type=checkbox]:checked+.check.is-success{background:transparent;border-color:#23d160}.switch.is-outlined input[type=checkbox]:checked+.check.is-success:before{background:#23d160}.switch.is-outlined input[type=checkbox]:checked+.check.is-warning{background:transparent;border-color:#ffdd57}.switch.is-outlined input[type=checkbox]:checked+.check.is-warning:before{background:#ffdd57}.switch.is-outlined input[type=checkbox]:checked+.check.is-danger{background:transparent;border-color:#ff3860}.switch.is-outlined input[type=checkbox]:checked+.check.is-danger:before{background:#ff3860}.switch.is-outlined input[type=checkbox]:checked+.check:before{background:#7957d5}.switch.is-outlined:hover input[type=checkbox]+.check{background:transparent;border-color:hsla(0,0%,71%,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check{background:transparent;border-color:rgba(121,87,213,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-white{border-color:hsla(0,0%,100%,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-black{border-color:rgba(10,10,10,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-light{border-color:hsla(0,0%,96.1%,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-dark{border-color:rgba(54,54,54,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-link,.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-primary{border-color:rgba(121,87,213,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-info{border-color:rgba(22,125,240,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-success{border-color:rgba(35,209,96,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-warning{border-color:rgba(255,221,87,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-danger{border-color:rgba(255,56,96,.9)}.switch.is-small{border-radius:2px;font-size:.75rem}.switch.is-medium{font-size:1.25rem}.switch.is-large{font-size:1.5rem}.switch[disabled]{opacity:.5;cursor:not-allowed;color:#7a7a7a}.table-wrapper .table{margin-bottom:0}.table-wrapper:not(:last-child){margin-bottom:1.5rem}@media screen and (max-width:1023px){.table-wrapper{overflow-x:auto}}.b-table{-webkit-transition:opacity 86ms ease-out;transition:opacity 86ms ease-out}@media print,screen and (min-width:769px){.b-table .table-mobile-sort{display:none}}.b-table .icon{-webkit-transition:opacity 86ms ease-out,-webkit-transform .15s ease-out;transition:opacity 86ms ease-out,-webkit-transform .15s ease-out;transition:transform .15s ease-out,opacity 86ms ease-out;transition:transform .15s ease-out,opacity 86ms ease-out,-webkit-transform .15s ease-out}.b-table .icon.is-desc{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.b-table .icon.is-expanded{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.b-table .table{width:100%;border:1px solid transparent;border-radius:4px;border-collapse:separate}.b-table .table th{font-weight:600}.b-table .table th .th-wrap{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.b-table .table th .th-wrap .icon{margin-left:.5rem;margin-right:0;font-size:1rem}.b-table .table th .th-wrap.is-numeric{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse;text-align:right}.b-table .table th .th-wrap.is-numeric .icon{margin-left:0;margin-right:.5rem}.b-table .table th .th-wrap.is-centered{-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;text-align:center}.b-table .table th.is-current-sort{border-color:#7a7a7a;font-weight:700}.b-table .table th.is-sortable:hover{border-color:#7a7a7a}.b-table .table th.is-sortable,.b-table .table th.is-sortable .th-wrap{cursor:pointer}.b-table .table th .multi-sort-cancel-icon{margin-left:10px}.b-table .table th.is-sticky{position:-webkit-sticky;position:sticky;left:0;z-index:3!important;background:#fff}.b-table .table tr.is-selected .checkbox input:checked+.check{background:#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%237957d5'/%3E%3C/svg%3E\") no-repeat 50%}.b-table .table tr.is-selected .checkbox input+.check{border-color:#fff}.b-table .table tr.is-empty:hover{background-color:transparent}.b-table .table .chevron-cell{vertical-align:middle}.b-table .table .checkbox-cell{width:40px}.b-table .table .checkbox-cell .checkbox{vertical-align:middle}.b-table .table .checkbox-cell .checkbox .check{-webkit-transition:none;transition:none}.b-table .table tr.detail{-webkit-box-shadow:inset 0 1px 3px #dbdbdb;box-shadow:inset 0 1px 3px #dbdbdb;background:#fafafa}.b-table .table tr.detail .detail-container{padding:1rem}.b-table .table:focus{border-color:#7957d5;-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.b-table .table.is-bordered th.is-current-sort,.b-table .table.is-bordered th.is-sortable:hover{border-color:#dbdbdb;background:#f5f5f5}.b-table .table td.is-sticky{position:-webkit-sticky;position:sticky;left:0;z-index:1;background:#fff}.b-table .level:not(.top){padding-bottom:1.5rem}.b-table .table-wrapper.has-sticky-header{height:300px;overflow-y:auto}@media screen and (max-width:768px){.b-table .table-wrapper.has-sticky-header.has-mobile-cards{height:auto!important;overflow-y:visible!important;overflow-y:initial!important}}.b-table .table-wrapper.has-sticky-header tr:first-child th{position:-webkit-sticky;position:sticky;top:0;z-index:2;background:#fff}@media screen and (max-width:768px){.b-table .table-wrapper.has-mobile-cards thead{display:none}.b-table .table-wrapper.has-mobile-cards tfoot th{border:0;display:inherit}.b-table .table-wrapper.has-mobile-cards tr{-webkit-box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);max-width:100%;position:relative;display:block}.b-table .table-wrapper.has-mobile-cards tr td{border:0;display:inherit}.b-table .table-wrapper.has-mobile-cards tr td:last-child{border-bottom:0}.b-table .table-wrapper.has-mobile-cards tr:not(:last-child){margin-bottom:1rem}.b-table .table-wrapper.has-mobile-cards tr:not([class*=is-]){background:inherit}.b-table .table-wrapper.has-mobile-cards tr:not([class*=is-]):hover{background-color:inherit}.b-table .table-wrapper.has-mobile-cards tr.detail{margin-top:-1rem}.b-table .table-wrapper.has-mobile-cards tr:not(.detail):not(.is-empty):not(.table-footer) td{display:-webkit-box;display:-ms-flexbox;display:flex;width:auto;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;text-align:right;border-bottom:1px solid #f5f5f5}.b-table .table-wrapper.has-mobile-cards tr:not(.detail):not(.is-empty):not(.table-footer) td:before{content:attr(data-label);font-weight:600;padding-right:.5em;text-align:left}}.b-table .table-wrapper.is-card-list thead{display:none}.b-table .table-wrapper.is-card-list tfoot th{border:0;display:inherit}.b-table .table-wrapper.is-card-list tr{-webkit-box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);max-width:100%;position:relative;display:block}.b-table .table-wrapper.is-card-list tr td{border:0;display:inherit}.b-table .table-wrapper.is-card-list tr td:last-child{border-bottom:0}.b-table .table-wrapper.is-card-list tr:not(:last-child){margin-bottom:1rem}.b-table .table-wrapper.is-card-list tr:not([class*=is-]){background:inherit}.b-table .table-wrapper.is-card-list tr:not([class*=is-]):hover{background-color:inherit}.b-table .table-wrapper.is-card-list tr.detail{margin-top:-1rem}.b-table .table-wrapper.is-card-list tr:not(.detail):not(.is-empty):not(.table-footer) td{display:-webkit-box;display:-ms-flexbox;display:flex;width:auto;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;text-align:right;border-bottom:1px solid #f5f5f5}.b-table .table-wrapper.is-card-list tr:not(.detail):not(.is-empty):not(.table-footer) td:before{content:attr(data-label);font-weight:600;padding-right:.5em;text-align:left}.b-table.is-loading{position:relative;pointer-events:none;opacity:.5}.b-table.is-loading:after{-webkit-animation:spinAround .5s linear infinite;animation:spinAround .5s linear infinite;border-radius:290486px;content:\"\";display:block;height:1em;position:relative;width:1em;position:absolute;top:4em;left:calc(50% - 2.5em);width:5em;height:5em;border-color:transparent transparent #dbdbdb #dbdbdb;border-style:solid;border-width:.25em}.b-tabs .tabs{margin-bottom:0;-ms-flex-negative:0;flex-shrink:0}.b-tabs .tabs li.is-disabled{pointer-events:none;cursor:not-allowed;opacity:.5}.b-tabs .tab-content{position:relative;overflow:visible;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;padding:1rem}.b-tabs .tab-content .tab-item{-ms-flex-negative:0;flex-shrink:0;-ms-flex-preferred-size:auto;flex-basis:auto}.b-tabs .tab-content.is-transitioning{overflow:hidden}.b-tabs:not(:last-child){margin-bottom:1.5rem}.b-tabs.is-fullwidth{width:100%}.b-tabs.is-vertical{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-ms-flex-direction:row;flex-direction:row}.b-tabs.is-vertical>.tabs ul{-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;border-bottom-color:transparent}.b-tabs.is-vertical>.tabs ul li{width:100%}.b-tabs.is-vertical>.tabs ul li a{-webkit-box-pack:left;-ms-flex-pack:left;justify-content:left}.b-tabs.is-vertical>.tabs.is-boxed li a{border-bottom-color:transparent!important;border-right-color:#dbdbdb!important;border-radius:4px 0 0 4px}.b-tabs.is-vertical>.tabs.is-boxed li.is-active a{border-bottom-color:#dbdbdb!important;border-right-color:transparent!important}.b-tabs.is-vertical>.tabs.is-toggle li+li{margin-left:0}.b-tabs.is-vertical>.tabs.is-toggle li:first-child a{border-radius:4px 4px 0 0}.b-tabs.is-vertical>.tabs.is-toggle li:last-child a{border-radius:0 0 4px 4px}.b-tabs.is-vertical>.tabs.is-fullwidth li a{height:100%}.b-tabs.is-vertical>.tab-content{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1}.b-tabs.is-vertical.is-right,.b-tabs.is-vertical.is-right>.tabs ul a{-webkit-box-orient:horizontal;-webkit-box-direction:reverse;-ms-flex-direction:row-reverse;flex-direction:row-reverse}.b-tabs.is-vertical.is-right>.tabs ul a .icon:first-child{margin-right:0;margin-left:.5em}.b-tabs.is-vertical.is-right>.tabs.is-boxed li a{border-bottom-color:transparent!important;border-right-color:transparent!important;border-left-color:#dbdbdb!important;border-radius:0 4px 4px 0}.b-tabs.is-vertical.is-right>.tabs.is-boxed li.is-active a{border-bottom-color:#dbdbdb!important;border-right-color:#dbdbdb!important;border-left-color:transparent!important}.b-tabs.is-multiline>.tabs ul{-ms-flex-wrap:wrap;flex-wrap:wrap;-ms-flex-negative:1;flex-shrink:1}.tag .has-ellipsis{max-width:10em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tag .delete.is-white,.tag.is-delete.is-white{background:#fff}.tag .delete.is-white:hover,.tag.is-delete.is-white:hover{background-color:#e6e6e6}.tag .delete.is-black,.tag.is-delete.is-black{background:#0a0a0a}.tag .delete.is-black:hover,.tag.is-delete.is-black:hover{background-color:#000}.tag .delete.is-light,.tag.is-delete.is-light{background:#f5f5f5}.tag .delete.is-light:hover,.tag.is-delete.is-light:hover{background-color:#dbdbdb}.tag .delete.is-dark,.tag.is-delete.is-dark{background:#363636}.tag .delete.is-dark:hover,.tag.is-delete.is-dark:hover{background-color:#1c1c1c}.tag .delete.is-primary,.tag.is-delete.is-primary{background:#7957d5}.tag .delete.is-primary:hover,.tag.is-delete.is-primary:hover{background-color:#5a32c7}.tag .delete.is-link,.tag.is-delete.is-link{background:#7957d5}.tag .delete.is-link:hover,.tag.is-delete.is-link:hover{background-color:#5a32c7}.tag .delete.is-info,.tag.is-delete.is-info{background:#167df0}.tag .delete.is-info:hover,.tag.is-delete.is-info:hover{background-color:#0d64c6}.tag .delete.is-success,.tag.is-delete.is-success{background:#23d160}.tag .delete.is-success:hover,.tag.is-delete.is-success:hover{background-color:#1ca64c}.tag .delete.is-warning,.tag.is-delete.is-warning{background:#ffdd57}.tag .delete.is-warning:hover,.tag.is-delete.is-warning:hover{background-color:#ffd324}.tag .delete.is-danger,.tag.is-delete.is-danger{background:#ff3860}.tag .delete.is-danger:hover,.tag.is-delete.is-danger:hover{background-color:#ff0537}.taginput .taginput-container{display:-webkit-box;display:-ms-flexbox;display:flex}.taginput .taginput-container.is-focusable{padding-bottom:0;padding-top:calc(.275em - 1px);padding-left:0;cursor:text}.taginput .taginput-container.is-focusable,.taginput .taginput-container:not(.is-focusable){-webkit-box-align:center;-ms-flex-align:center;align-items:center;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:start;-ms-flex-pack:start;justify-content:flex-start;height:auto}.taginput .taginput-container:not(.is-focusable).is-small{border-radius:2px;font-size:.75rem}.taginput .taginput-container:not(.is-focusable).is-medium{font-size:1.25rem}.taginput .taginput-container:not(.is-focusable).is-large{font-size:1.5rem}.taginput .taginput-container>.tag,.taginput .taginput-container>.tags{margin-left:.275rem;margin-bottom:calc(.275em - 1px);font-size:.9em;height:1.7em}.taginput .taginput-container>.tag .tag,.taginput .taginput-container>.tags .tag{margin-bottom:0;font-size:.9em;height:1.7em}.taginput .taginput-container>.tag .tag.is-delete,.taginput .taginput-container>.tags .tag.is-delete{width:1.7em}.taginput .taginput-container .autocomplete{position:static;-webkit-box-flex:1;-ms-flex:1;flex:1}.taginput .taginput-container .autocomplete input{height:1.7em;margin-bottom:calc(.275em - 1px);padding-top:0;padding-bottom:0;border:none;-webkit-box-shadow:none;box-shadow:none;min-width:8em}.taginput .taginput-container .autocomplete input:focus{-webkit-box-shadow:none!important;box-shadow:none!important}.taginput .taginput-container .autocomplete .icon{height:1.7em}.taginput .taginput-container .autocomplete>.control.is-loading:after{top:.375em}.timepicker .dropdown-menu{min-width:0}.timepicker .dropdown,.timepicker .dropdown-trigger{width:100%}.taginput .timepicker .dropdown-trigger .taginput-container.is-focusable[readonly],.taginput .timepicker .dropdown .taginput-container.is-focusable[readonly],.timepicker .dropdown-trigger .input[readonly],.timepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly],.timepicker .dropdown .input[readonly],.timepicker .dropdown .taginput .taginput-container.is-focusable[readonly]{cursor:pointer;-webkit-box-shadow:inset 0 1px 2px rgba(10,10,10,.1);box-shadow:inset 0 1px 2px rgba(10,10,10,.1)}.taginput .timepicker .dropdown-trigger .taginput-container.is-focusable[readonly].is-active,.taginput .timepicker .dropdown-trigger .taginput-container.is-focusable[readonly].is-focused,.taginput .timepicker .dropdown-trigger .taginput-container.is-focusable[readonly]:active,.taginput .timepicker .dropdown-trigger .taginput-container.is-focusable[readonly]:focus,.taginput .timepicker .dropdown .taginput-container.is-focusable[readonly].is-active,.taginput .timepicker .dropdown .taginput-container.is-focusable[readonly].is-focused,.taginput .timepicker .dropdown .taginput-container.is-focusable[readonly]:active,.taginput .timepicker .dropdown .taginput-container.is-focusable[readonly]:focus,.timepicker .dropdown-trigger .input[readonly].is-active,.timepicker .dropdown-trigger .input[readonly].is-focused,.timepicker .dropdown-trigger .input[readonly]:active,.timepicker .dropdown-trigger .input[readonly]:focus,.timepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly].is-active,.timepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly].is-focused,.timepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly]:active,.timepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly]:focus,.timepicker .dropdown .input[readonly].is-active,.timepicker .dropdown .input[readonly].is-focused,.timepicker .dropdown .input[readonly]:active,.timepicker .dropdown .input[readonly]:focus,.timepicker .dropdown .taginput .taginput-container.is-focusable[readonly].is-active,.timepicker .dropdown .taginput .taginput-container.is-focusable[readonly].is-focused,.timepicker .dropdown .taginput .taginput-container.is-focusable[readonly]:active,.timepicker .dropdown .taginput .taginput-container.is-focusable[readonly]:focus{-webkit-box-shadow:0 0 0 .125em rgba(121,87,213,.25);box-shadow:0 0 0 .125em rgba(121,87,213,.25)}.timepicker .dropdown.is-disabled{opacity:1}.dropdown .dropdown-menu .has-link .timepicker a,.timepicker .dropdown-item,.timepicker .dropdown .dropdown-menu .has-link a{font-size:inherit;padding:0}.timepicker .timepicker-footer{padding:0 .5rem}.timepicker .dropdown-content .control{font-size:1.25em;margin-right:0!important}.timepicker .dropdown-content .control .select select{font-weight:600;padding-right:calc(.625em - 1px);border:0}.timepicker .dropdown-content .control .select select option:disabled{color:hsla(0,0%,47.8%,.7)}.timepicker .dropdown-content .control .select:after{display:none}.timepicker .dropdown-content .control.is-colon{font-size:1.7em}.timepicker.is-small{border-radius:2px;font-size:.75rem}.timepicker.is-medium{font-size:1.25rem}.timepicker.is-large{font-size:1.5rem}.b-tooltip{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.b-tooltip.is-top:after,.b-tooltip.is-top:before{top:auto;right:auto;bottom:calc(100% + 7px);left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.b-tooltip.is-top.is-white:before{border-top:5px solid #fff}.b-tooltip.is-top.is-black:before,.b-tooltip.is-top.is-white:before{border-right:5px solid transparent;border-left:5px solid transparent;bottom:calc(100% + 2px)}.b-tooltip.is-top.is-black:before{border-top:5px solid #0a0a0a}.b-tooltip.is-top.is-light:before{border-top:5px solid #f5f5f5}.b-tooltip.is-top.is-dark:before,.b-tooltip.is-top.is-light:before{border-right:5px solid transparent;border-left:5px solid transparent;bottom:calc(100% + 2px)}.b-tooltip.is-top.is-dark:before{border-top:5px solid #363636}.b-tooltip.is-top.is-link:before,.b-tooltip.is-top.is-primary:before{border-top:5px solid #7957d5;border-right:5px solid transparent;border-left:5px solid transparent;bottom:calc(100% + 2px)}.b-tooltip.is-top.is-info:before{border-top:5px solid #167df0}.b-tooltip.is-top.is-info:before,.b-tooltip.is-top.is-success:before{border-right:5px solid transparent;border-left:5px solid transparent;bottom:calc(100% + 2px)}.b-tooltip.is-top.is-success:before{border-top:5px solid #23d160}.b-tooltip.is-top.is-warning:before{border-top:5px solid #ffdd57}.b-tooltip.is-top.is-danger:before,.b-tooltip.is-top.is-warning:before{border-right:5px solid transparent;border-left:5px solid transparent;bottom:calc(100% + 2px)}.b-tooltip.is-top.is-danger:before{border-top:5px solid #ff3860}.b-tooltip.is-top.is-multiline.is-small:after{width:180px}.b-tooltip.is-top.is-multiline.is-medium:after{width:240px}.b-tooltip.is-top.is-multiline.is-large:after{width:300px}.b-tooltip.is-right:after,.b-tooltip.is-right:before{top:50%;right:auto;bottom:auto;left:calc(100% + 7px);-webkit-transform:translateY(-50%);transform:translateY(-50%)}.b-tooltip.is-right.is-white:before{border-right:5px solid #fff}.b-tooltip.is-right.is-black:before,.b-tooltip.is-right.is-white:before{border-top:5px solid transparent;border-bottom:5px solid transparent;left:calc(100% + 2px)}.b-tooltip.is-right.is-black:before{border-right:5px solid #0a0a0a}.b-tooltip.is-right.is-light:before{border-right:5px solid #f5f5f5}.b-tooltip.is-right.is-dark:before,.b-tooltip.is-right.is-light:before{border-top:5px solid transparent;border-bottom:5px solid transparent;left:calc(100% + 2px)}.b-tooltip.is-right.is-dark:before{border-right:5px solid #363636}.b-tooltip.is-right.is-link:before,.b-tooltip.is-right.is-primary:before{border-top:5px solid transparent;border-right:5px solid #7957d5;border-bottom:5px solid transparent;left:calc(100% + 2px)}.b-tooltip.is-right.is-info:before{border-right:5px solid #167df0}.b-tooltip.is-right.is-info:before,.b-tooltip.is-right.is-success:before{border-top:5px solid transparent;border-bottom:5px solid transparent;left:calc(100% + 2px)}.b-tooltip.is-right.is-success:before{border-right:5px solid #23d160}.b-tooltip.is-right.is-warning:before{border-right:5px solid #ffdd57}.b-tooltip.is-right.is-danger:before,.b-tooltip.is-right.is-warning:before{border-top:5px solid transparent;border-bottom:5px solid transparent;left:calc(100% + 2px)}.b-tooltip.is-right.is-danger:before{border-right:5px solid #ff3860}.b-tooltip.is-right.is-multiline.is-small:after{width:180px}.b-tooltip.is-right.is-multiline.is-medium:after{width:240px}.b-tooltip.is-right.is-multiline.is-large:after{width:300px}.b-tooltip.is-bottom:after,.b-tooltip.is-bottom:before{top:calc(100% + 7px);right:auto;bottom:auto;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%)}.b-tooltip.is-bottom.is-white:before{border-bottom:5px solid #fff}.b-tooltip.is-bottom.is-black:before,.b-tooltip.is-bottom.is-white:before{border-right:5px solid transparent;border-left:5px solid transparent;top:calc(100% + 2px)}.b-tooltip.is-bottom.is-black:before{border-bottom:5px solid #0a0a0a}.b-tooltip.is-bottom.is-light:before{border-bottom:5px solid #f5f5f5}.b-tooltip.is-bottom.is-dark:before,.b-tooltip.is-bottom.is-light:before{border-right:5px solid transparent;border-left:5px solid transparent;top:calc(100% + 2px)}.b-tooltip.is-bottom.is-dark:before{border-bottom:5px solid #363636}.b-tooltip.is-bottom.is-link:before,.b-tooltip.is-bottom.is-primary:before{border-right:5px solid transparent;border-bottom:5px solid #7957d5;border-left:5px solid transparent;top:calc(100% + 2px)}.b-tooltip.is-bottom.is-info:before{border-bottom:5px solid #167df0}.b-tooltip.is-bottom.is-info:before,.b-tooltip.is-bottom.is-success:before{border-right:5px solid transparent;border-left:5px solid transparent;top:calc(100% + 2px)}.b-tooltip.is-bottom.is-success:before{border-bottom:5px solid #23d160}.b-tooltip.is-bottom.is-warning:before{border-bottom:5px solid #ffdd57}.b-tooltip.is-bottom.is-danger:before,.b-tooltip.is-bottom.is-warning:before{border-right:5px solid transparent;border-left:5px solid transparent;top:calc(100% + 2px)}.b-tooltip.is-bottom.is-danger:before{border-bottom:5px solid #ff3860}.b-tooltip.is-bottom.is-multiline.is-small:after{width:180px}.b-tooltip.is-bottom.is-multiline.is-medium:after{width:240px}.b-tooltip.is-bottom.is-multiline.is-large:after{width:300px}.b-tooltip.is-left:after,.b-tooltip.is-left:before{top:50%;right:calc(100% + 7px);bottom:auto;left:auto;-webkit-transform:translateY(-50%);transform:translateY(-50%)}.b-tooltip.is-left.is-white:before{border-left:5px solid #fff}.b-tooltip.is-left.is-black:before,.b-tooltip.is-left.is-white:before{border-top:5px solid transparent;border-bottom:5px solid transparent;right:calc(100% + 2px)}.b-tooltip.is-left.is-black:before{border-left:5px solid #0a0a0a}.b-tooltip.is-left.is-light:before{border-left:5px solid #f5f5f5}.b-tooltip.is-left.is-dark:before,.b-tooltip.is-left.is-light:before{border-top:5px solid transparent;border-bottom:5px solid transparent;right:calc(100% + 2px)}.b-tooltip.is-left.is-dark:before{border-left:5px solid #363636}.b-tooltip.is-left.is-link:before,.b-tooltip.is-left.is-primary:before{border-top:5px solid transparent;border-bottom:5px solid transparent;border-left:5px solid #7957d5;right:calc(100% + 2px)}.b-tooltip.is-left.is-info:before{border-left:5px solid #167df0}.b-tooltip.is-left.is-info:before,.b-tooltip.is-left.is-success:before{border-top:5px solid transparent;border-bottom:5px solid transparent;right:calc(100% + 2px)}.b-tooltip.is-left.is-success:before{border-left:5px solid #23d160}.b-tooltip.is-left.is-warning:before{border-left:5px solid #ffdd57}.b-tooltip.is-left.is-danger:before,.b-tooltip.is-left.is-warning:before{border-top:5px solid transparent;border-bottom:5px solid transparent;right:calc(100% + 2px)}.b-tooltip.is-left.is-danger:before{border-left:5px solid #ff3860}.b-tooltip.is-left.is-multiline.is-small:after{width:180px}.b-tooltip.is-left.is-multiline.is-medium:after{width:240px}.b-tooltip.is-left.is-multiline.is-large:after{width:300px}.b-tooltip:after,.b-tooltip:before{position:absolute;content:\"\";opacity:0;visibility:hidden;pointer-events:none}.b-tooltip:before{z-index:39}.b-tooltip:after{content:attr(data-label);width:auto;padding:.35rem .75rem;border-radius:6px;font-size:.85rem;font-weight:400;-webkit-box-shadow:0 1px 2px 1px rgba(0,1,0,.2);box-shadow:0 1px 2px 1px rgba(0,1,0,.2);z-index:38;white-space:nowrap}.b-tooltip:not([data-label=\"\"]):hover:after,.b-tooltip:not([data-label=\"\"]):hover:before{-webkit-transition-delay:inherit;transition-delay:inherit;opacity:1;visibility:visible}.b-tooltip.is-white:after{background:#fff;color:#0a0a0a}.b-tooltip.is-black:after{background:#0a0a0a;color:#fff}.b-tooltip.is-light:after{background:#f5f5f5;color:#363636}.b-tooltip.is-dark:after{background:#363636;color:#f5f5f5}.b-tooltip.is-link:after,.b-tooltip.is-primary:after{background:#7957d5;color:#fff}.b-tooltip.is-info:after{background:#167df0;color:#fff}.b-tooltip.is-success:after{background:#23d160;color:#fff}.b-tooltip.is-warning:after{background:#ffdd57;color:rgba(0,0,0,.7)}.b-tooltip.is-danger:after{background:#ff3860;color:#fff}.b-tooltip:not([data-label=\"\"]).is-always:after,.b-tooltip:not([data-label=\"\"]).is-always:before{opacity:1;visibility:visible}.b-tooltip.is-multiline:after{display:flex-block;text-align:center;white-space:normal}.b-tooltip.is-dashed{border-bottom:1px dashed #b5b5b5;cursor:default}.b-tooltip.is-square:after{border-radius:0}.b-tooltip.is-animated:after,.b-tooltip.is-animated:before{-webkit-transition:opacity 86ms ease-out,visibility 86ms ease-out;transition:opacity 86ms ease-out,visibility 86ms ease-out}.upload{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex}.upload input[type=file]{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;outline:none;cursor:pointer;z-index:-1}.upload .upload-draggable{cursor:pointer;padding:.25em;border:1px dashed #b5b5b5;border-radius:6px}.upload .upload-draggable.is-disabled{opacity:.5;cursor:not-allowed}.upload .upload-draggable.is-loading{position:relative;pointer-events:none;opacity:.5}.upload .upload-draggable.is-loading:after{-webkit-animation:spinAround .5s linear infinite;animation:spinAround .5s linear infinite;border-radius:290486px;content:\"\";display:block;height:1em;position:relative;width:1em;top:0;left:calc(50% - 1.5em);width:3em;height:3em;border-color:transparent transparent #dbdbdb #dbdbdb;border-style:solid;border-width:.25em}.upload .upload-draggable.is-hovered.is-white,.upload .upload-draggable:hover.is-white{border-color:#fff;background:hsla(0,0%,100%,.05)}.upload .upload-draggable.is-hovered.is-black,.upload .upload-draggable:hover.is-black{border-color:#0a0a0a;background:rgba(10,10,10,.05)}.upload .upload-draggable.is-hovered.is-light,.upload .upload-draggable:hover.is-light{border-color:#f5f5f5;background:hsla(0,0%,96.1%,.05)}.upload .upload-draggable.is-hovered.is-dark,.upload .upload-draggable:hover.is-dark{border-color:#363636;background:rgba(54,54,54,.05)}.upload .upload-draggable.is-hovered.is-link,.upload .upload-draggable.is-hovered.is-primary,.upload .upload-draggable:hover.is-link,.upload .upload-draggable:hover.is-primary{border-color:#7957d5;background:rgba(121,87,213,.05)}.upload .upload-draggable.is-hovered.is-info,.upload .upload-draggable:hover.is-info{border-color:#167df0;background:rgba(22,125,240,.05)}.upload .upload-draggable.is-hovered.is-success,.upload .upload-draggable:hover.is-success{border-color:#23d160;background:rgba(35,209,96,.05)}.upload .upload-draggable.is-hovered.is-warning,.upload .upload-draggable:hover.is-warning{border-color:#ffdd57;background:rgba(255,221,87,.05)}.upload .upload-draggable.is-hovered.is-danger,.upload .upload-draggable:hover.is-danger{border-color:#ff3860;background:rgba(255,56,96,.05)}.upload.is-expanded,.upload .upload-draggable.is-expanded{width:100%}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){.upload input[type=file]{z-index:auto}.upload .upload-draggable+input[type=file]{z-index:-1}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(35);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("4e2cef20", content, true)

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Titillium+Web);"]);
// Module
exports.push([module.i, "@-webkit-keyframes spinAround{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.navbar-item img{max-height:300px!important}.tabs li.is-active a{background-color:#1b2431!important;color:#fff!important}.tabs a:hover{background-color:rgba(255,70,82,.59608)!important}.tabs a:hover,.white-header{color:#fff!important}tr.is-victory{background:#294731}#app{text-align:center;font-family:Titillium Web,sans-serif}.custom-router{background-color:#171e29}.navbar-link{color:#fff!important}\n/*! bulma.io v0.7.5 | MIT License | github.com/jgthms/bulma */@keyframes spinAround{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}.b-checkbox.checkbox,.b-radio.radio,.breadcrumb,.button,.carousel,.carousel-list,.delete,.file,.is-unselectable,.modal-close,.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous,.switch,.tabs{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.navbar-link:not(.is-arrowless):after,.select:not(.is-multiple):not(.is-loading):after{border:3px solid transparent;border-radius:2px;border-right:0;border-top:0;content:\" \";display:block;height:.625em;margin-top:-.4375em;pointer-events:none;position:absolute;top:50%;transform:rotate(-45deg);transform-origin:center;width:.625em}.block:not(:last-child),.box:not(:last-child),.breadcrumb:not(:last-child),.content:not(:last-child),.highlight:not(:last-child),.level:not(:last-child),.list:not(:last-child),.message:not(:last-child),.notification:not(:last-child),.progress:not(:last-child),.subtitle:not(:last-child),.table-container:not(:last-child),.table:not(:last-child),.tabs:not(:last-child),.title:not(:last-child){margin-bottom:1.5rem}.delete,.modal-close{-moz-appearance:none;-webkit-appearance:none;background-color:rgba(10,10,10,.2);border:none;border-radius:290486px;cursor:pointer;pointer-events:auto;display:inline-block;flex-grow:0;flex-shrink:0;font-size:0;height:20px;max-height:20px;max-width:20px;min-height:20px;min-width:20px;outline:none;position:relative;vertical-align:top;width:20px}.delete:after,.delete:before,.modal-close:after,.modal-close:before{background-color:#fff;content:\"\";display:block;left:50%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%) rotate(45deg);transform-origin:center center}.delete:before,.modal-close:before{height:2px;width:50%}.delete:after,.modal-close:after{height:50%;width:2px}.delete:focus,.delete:hover,.modal-close:focus,.modal-close:hover{background-color:rgba(10,10,10,.3)}.delete:active,.modal-close:active{background-color:rgba(10,10,10,.4)}.is-small.delete,.is-small.modal-close{height:16px;max-height:16px;max-width:16px;min-height:16px;min-width:16px;width:16px}.is-medium.delete,.is-medium.modal-close{height:24px;max-height:24px;max-width:24px;min-height:24px;min-width:24px;width:24px}.is-large.delete,.is-large.modal-close{height:32px;max-height:32px;max-width:32px;min-height:32px;min-width:32px;width:32px}.button.is-loading:after,.control.is-loading:after,.loader,.select.is-loading:after{-webkit-animation:spinAround .5s linear infinite;animation:spinAround .5s linear infinite;border-radius:290486px;border-color:transparent transparent #dbdbdb #dbdbdb;border-style:solid;border-width:2px;content:\"\";display:block;height:1em;position:relative;width:1em}.hero-video,.image.is-1by1 .has-ratio,.image.is-1by1 img,.image.is-1by2 .has-ratio,.image.is-1by2 img,.image.is-1by3 .has-ratio,.image.is-1by3 img,.image.is-2by1 .has-ratio,.image.is-2by1 img,.image.is-2by3 .has-ratio,.image.is-2by3 img,.image.is-3by1 .has-ratio,.image.is-3by1 img,.image.is-3by2 .has-ratio,.image.is-3by2 img,.image.is-3by4 .has-ratio,.image.is-3by4 img,.image.is-3by5 .has-ratio,.image.is-3by5 img,.image.is-4by3 .has-ratio,.image.is-4by3 img,.image.is-4by5 .has-ratio,.image.is-4by5 img,.image.is-5by3 .has-ratio,.image.is-5by3 img,.image.is-5by4 .has-ratio,.image.is-5by4 img,.image.is-9by16 .has-ratio,.image.is-9by16 img,.image.is-16by9 .has-ratio,.image.is-16by9 img,.image.is-square .has-ratio,.image.is-square img,.is-overlay,.modal,.modal-background{bottom:0;left:0;position:absolute;right:0;top:0}.button,.file-cta,.file-name,.input,.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous,.select select,.taginput .taginput-container.is-focusable,.textarea{-moz-appearance:none;-webkit-appearance:none;align-items:center;border:1px solid transparent;border-radius:4px;box-shadow:none;display:inline-flex;font-size:1rem;height:2.25em;justify-content:flex-start;line-height:1.5;padding:calc(.375em - 1px) calc(.625em - 1px);position:relative;vertical-align:top}.button:active,.button:focus,.file-cta:active,.file-cta:focus,.file-name:active,.file-name:focus,.input:active,.input:focus,.is-active.button,.is-active.file-cta,.is-active.file-name,.is-active.input,.is-active.pagination-ellipsis,.is-active.pagination-link,.is-active.pagination-next,.is-active.pagination-previous,.is-active.textarea,.is-focused.button,.is-focused.file-cta,.is-focused.file-name,.is-focused.input,.is-focused.pagination-ellipsis,.is-focused.pagination-link,.is-focused.pagination-next,.is-focused.pagination-previous,.is-focused.textarea,.pagination-ellipsis:active,.pagination-ellipsis:focus,.pagination-link:active,.pagination-link:focus,.pagination-next:active,.pagination-next:focus,.pagination-previous:active,.pagination-previous:focus,.select select.is-active,.select select.is-focused,.select select:active,.select select:focus,.taginput .is-active.taginput-container.is-focusable,.taginput .is-focused.taginput-container.is-focusable,.taginput .taginput-container.is-focusable:active,.taginput .taginput-container.is-focusable:focus,.textarea:active,.textarea:focus{outline:none}.button[disabled],.file-cta[disabled],.file-name[disabled],.input[disabled],.pagination-ellipsis[disabled],.pagination-link[disabled],.pagination-next[disabled],.pagination-previous[disabled],.select fieldset[disabled] select,.select select[disabled],.taginput .taginput-container.is-focusable[disabled],.taginput fieldset[disabled] .taginput-container.is-focusable,.textarea[disabled],fieldset[disabled] .button,fieldset[disabled] .file-cta,fieldset[disabled] .file-name,fieldset[disabled] .input,fieldset[disabled] .pagination-ellipsis,fieldset[disabled] .pagination-link,fieldset[disabled] .pagination-next,fieldset[disabled] .pagination-previous,fieldset[disabled] .select select,fieldset[disabled] .taginput .taginput-container.is-focusable,fieldset[disabled] .textarea{cursor:not-allowed}\n/*! minireset.css v0.0.4 | MIT License | github.com/jgthms/minireset.css */blockquote,body,dd,dl,dt,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,html,iframe,legend,li,ol,p,pre,textarea,ul{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:400}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,:after,:before{box-sizing:inherit}embed,iframe,img,object,video{height:auto;max-width:100%}audio{max-width:100%}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0}td:not([align]),th:not([align]){text-align:left}html{background-color:#fff;font-size:16px;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;min-width:300px;overflow-x:hidden;overflow-y:scroll;text-rendering:optimizeLegibility;-webkit-text-size-adjust:100%;-moz-text-size-adjust:100%;-ms-text-size-adjust:100%;text-size-adjust:100%}article,aside,figure,footer,header,hgroup,section{display:block}body,button,input,select,textarea{font-family:BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif}code,pre{-moz-osx-font-smoothing:auto;-webkit-font-smoothing:auto;font-family:monospace}body{color:#fff;font-size:1em;font-weight:400;line-height:1.5}a{color:#ff4653;cursor:pointer;text-decoration:none}a strong{color:currentColor}a:hover{color:#fff}code{background-color:#f5f5f5;color:#ff3860;font-size:.875em;font-weight:400;padding:.25em .5em}hr{background-color:#000;border:none;display:block;height:2px;margin:1.5rem 0}img{height:auto;max-width:100%}input[type=checkbox],input[type=radio]{vertical-align:baseline}small{font-size:.875em}span{font-style:inherit;font-weight:inherit}strong{color:#363636;font-weight:700}fieldset{border:none}pre{-webkit-overflow-scrolling:touch;background-color:#f5f5f5;color:#4a4a4a;font-size:.875em;overflow-x:auto;padding:1.25rem 1.5rem;white-space:pre;word-wrap:normal}pre code{background-color:transparent;color:currentColor;font-size:1em;padding:0}table td,table th{vertical-align:top}table td:not([align]),table th:not([align]){text-align:left}table th{color:#363636}.is-clearfix:after{clear:both;content:\" \";display:table}.is-pulled-left{float:left!important}.is-pulled-right{float:right!important}.is-clipped{overflow:hidden!important}.is-size-1{font-size:3rem!important}.is-size-2{font-size:2.5rem!important}.is-size-3{font-size:2rem!important}.is-size-4{font-size:1.5rem!important}.is-size-5{font-size:1.25rem!important}.is-size-6{font-size:1rem!important}.is-size-7{font-size:.75rem!important}@media screen and (max-width:768px){.is-size-1-mobile{font-size:3rem!important}.is-size-2-mobile{font-size:2.5rem!important}.is-size-3-mobile{font-size:2rem!important}.is-size-4-mobile{font-size:1.5rem!important}.is-size-5-mobile{font-size:1.25rem!important}.is-size-6-mobile{font-size:1rem!important}.is-size-7-mobile{font-size:.75rem!important}}@media print,screen and (min-width:769px){.is-size-1-tablet{font-size:3rem!important}.is-size-2-tablet{font-size:2.5rem!important}.is-size-3-tablet{font-size:2rem!important}.is-size-4-tablet{font-size:1.5rem!important}.is-size-5-tablet{font-size:1.25rem!important}.is-size-6-tablet{font-size:1rem!important}.is-size-7-tablet{font-size:.75rem!important}}@media screen and (max-width:1023px){.is-size-1-touch{font-size:3rem!important}.is-size-2-touch{font-size:2.5rem!important}.is-size-3-touch{font-size:2rem!important}.is-size-4-touch{font-size:1.5rem!important}.is-size-5-touch{font-size:1.25rem!important}.is-size-6-touch{font-size:1rem!important}.is-size-7-touch{font-size:.75rem!important}}@media screen and (min-width:1024px){.is-size-1-desktop{font-size:3rem!important}.is-size-2-desktop{font-size:2.5rem!important}.is-size-3-desktop{font-size:2rem!important}.is-size-4-desktop{font-size:1.5rem!important}.is-size-5-desktop{font-size:1.25rem!important}.is-size-6-desktop{font-size:1rem!important}.is-size-7-desktop{font-size:.75rem!important}}@media screen and (min-width:1216px){.is-size-1-widescreen{font-size:3rem!important}.is-size-2-widescreen{font-size:2.5rem!important}.is-size-3-widescreen{font-size:2rem!important}.is-size-4-widescreen{font-size:1.5rem!important}.is-size-5-widescreen{font-size:1.25rem!important}.is-size-6-widescreen{font-size:1rem!important}.is-size-7-widescreen{font-size:.75rem!important}}@media screen and (min-width:1408px){.is-size-1-fullhd{font-size:3rem!important}.is-size-2-fullhd{font-size:2.5rem!important}.is-size-3-fullhd{font-size:2rem!important}.is-size-4-fullhd{font-size:1.5rem!important}.is-size-5-fullhd{font-size:1.25rem!important}.is-size-6-fullhd{font-size:1rem!important}.is-size-7-fullhd{font-size:.75rem!important}}.has-text-centered{text-align:center!important}.has-text-justified{text-align:justify!important}.has-text-left{text-align:left!important}.has-text-right{text-align:right!important}@media screen and (max-width:768px){.has-text-centered-mobile{text-align:center!important}}@media print,screen and (min-width:769px){.has-text-centered-tablet{text-align:center!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-centered-tablet-only{text-align:center!important}}@media screen and (max-width:1023px){.has-text-centered-touch{text-align:center!important}}@media screen and (min-width:1024px){.has-text-centered-desktop{text-align:center!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-centered-desktop-only{text-align:center!important}}@media screen and (min-width:1216px){.has-text-centered-widescreen{text-align:center!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-centered-widescreen-only{text-align:center!important}}@media screen and (min-width:1408px){.has-text-centered-fullhd{text-align:center!important}}@media screen and (max-width:768px){.has-text-justified-mobile{text-align:justify!important}}@media print,screen and (min-width:769px){.has-text-justified-tablet{text-align:justify!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-justified-tablet-only{text-align:justify!important}}@media screen and (max-width:1023px){.has-text-justified-touch{text-align:justify!important}}@media screen and (min-width:1024px){.has-text-justified-desktop{text-align:justify!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-justified-desktop-only{text-align:justify!important}}@media screen and (min-width:1216px){.has-text-justified-widescreen{text-align:justify!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-justified-widescreen-only{text-align:justify!important}}@media screen and (min-width:1408px){.has-text-justified-fullhd{text-align:justify!important}}@media screen and (max-width:768px){.has-text-left-mobile{text-align:left!important}}@media print,screen and (min-width:769px){.has-text-left-tablet{text-align:left!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-left-tablet-only{text-align:left!important}}@media screen and (max-width:1023px){.has-text-left-touch{text-align:left!important}}@media screen and (min-width:1024px){.has-text-left-desktop{text-align:left!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-left-desktop-only{text-align:left!important}}@media screen and (min-width:1216px){.has-text-left-widescreen{text-align:left!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-left-widescreen-only{text-align:left!important}}@media screen and (min-width:1408px){.has-text-left-fullhd{text-align:left!important}}@media screen and (max-width:768px){.has-text-right-mobile{text-align:right!important}}@media print,screen and (min-width:769px){.has-text-right-tablet{text-align:right!important}}@media screen and (min-width:769px) and (max-width:1023px){.has-text-right-tablet-only{text-align:right!important}}@media screen and (max-width:1023px){.has-text-right-touch{text-align:right!important}}@media screen and (min-width:1024px){.has-text-right-desktop{text-align:right!important}}@media screen and (min-width:1024px) and (max-width:1215px){.has-text-right-desktop-only{text-align:right!important}}@media screen and (min-width:1216px){.has-text-right-widescreen{text-align:right!important}}@media screen and (min-width:1216px) and (max-width:1407px){.has-text-right-widescreen-only{text-align:right!important}}@media screen and (min-width:1408px){.has-text-right-fullhd{text-align:right!important}}.is-capitalized{text-transform:capitalize!important}.is-lowercase{text-transform:lowercase!important}.is-uppercase{text-transform:uppercase!important}.is-italic{font-style:italic!important}.has-text-white{color:#fff!important}a.has-text-white:focus,a.has-text-white:hover{color:#e6e6e6!important}.has-background-white{background-color:#fff!important}.has-text-black{color:#0a0a0a!important}a.has-text-black:focus,a.has-text-black:hover{color:#000!important}.has-background-black{background-color:#0a0a0a!important}.has-text-light{color:#f5f5f5!important}a.has-text-light:focus,a.has-text-light:hover{color:#dbdbdb!important}.has-background-light{background-color:#f5f5f5!important}.has-text-dark{color:#363636!important}a.has-text-dark:focus,a.has-text-dark:hover{color:#1c1c1c!important}.has-background-dark{background-color:#363636!important}.has-text-primary{color:#00d1b2!important}a.has-text-primary:focus,a.has-text-primary:hover{color:#009e86!important}.has-background-primary{background-color:#00d1b2!important}.has-text-link{color:#3273dc!important}a.has-text-link:focus,a.has-text-link:hover{color:#205bbc!important}.has-background-link{background-color:#3273dc!important}.has-text-info{color:#209cee!important}a.has-text-info:focus,a.has-text-info:hover{color:#0f81cc!important}.has-background-info{background-color:#209cee!important}.has-text-success{color:#23d160!important}a.has-text-success:focus,a.has-text-success:hover{color:#1ca64c!important}.has-background-success{background-color:#23d160!important}.has-text-warning{color:#ffdd57!important}a.has-text-warning:focus,a.has-text-warning:hover{color:#ffd324!important}.has-background-warning{background-color:#ffdd57!important}.has-text-danger{color:#ff3860!important}a.has-text-danger:focus,a.has-text-danger:hover{color:#ff0537!important}.has-background-danger{background-color:#ff3860!important}.has-text-black-bis{color:#121212!important}.has-background-black-bis{background-color:#121212!important}.has-text-black-ter{color:#242424!important}.has-background-black-ter{background-color:#242424!important}.has-text-grey-darker{color:#363636!important}.has-background-grey-darker{background-color:#363636!important}.has-text-grey-dark{color:#4a4a4a!important}.has-background-grey-dark{background-color:#4a4a4a!important}.has-text-grey{color:#7a7a7a!important}.has-background-grey{background-color:#7a7a7a!important}.has-text-grey-light{color:#b5b5b5!important}.has-background-grey-light{background-color:#b5b5b5!important}.has-text-grey-lighter{color:#dbdbdb!important}.has-background-grey-lighter{background-color:#dbdbdb!important}.has-text-white-ter{color:#f5f5f5!important}.has-background-white-ter{background-color:#f5f5f5!important}.has-text-white-bis{color:#fafafa!important}.has-background-white-bis{background-color:#fafafa!important}.has-text-weight-light{font-weight:300!important}.has-text-weight-normal{font-weight:400!important}.has-text-weight-medium{font-weight:500!important}.has-text-weight-semibold{font-weight:600!important}.has-text-weight-bold{font-weight:700!important}.is-family-primary,.is-family-sans-serif,.is-family-secondary{font-family:BlinkMacSystemFont,-apple-system,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,Helvetica,Arial,sans-serif!important}.is-family-code,.is-family-monospace{font-family:monospace!important}.is-block{display:block!important}@media screen and (max-width:768px){.is-block-mobile{display:block!important}}@media print,screen and (min-width:769px){.is-block-tablet{display:block!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-block-tablet-only{display:block!important}}@media screen and (max-width:1023px){.is-block-touch{display:block!important}}@media screen and (min-width:1024px){.is-block-desktop{display:block!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-block-desktop-only{display:block!important}}@media screen and (min-width:1216px){.is-block-widescreen{display:block!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-block-widescreen-only{display:block!important}}@media screen and (min-width:1408px){.is-block-fullhd{display:block!important}}.is-flex{display:flex!important}@media screen and (max-width:768px){.is-flex-mobile{display:flex!important}}@media print,screen and (min-width:769px){.is-flex-tablet{display:flex!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-flex-tablet-only{display:flex!important}}@media screen and (max-width:1023px){.is-flex-touch{display:flex!important}}@media screen and (min-width:1024px){.is-flex-desktop{display:flex!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-flex-desktop-only{display:flex!important}}@media screen and (min-width:1216px){.is-flex-widescreen{display:flex!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-flex-widescreen-only{display:flex!important}}@media screen and (min-width:1408px){.is-flex-fullhd{display:flex!important}}.is-inline{display:inline!important}@media screen and (max-width:768px){.is-inline-mobile{display:inline!important}}@media print,screen and (min-width:769px){.is-inline-tablet{display:inline!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-inline-tablet-only{display:inline!important}}@media screen and (max-width:1023px){.is-inline-touch{display:inline!important}}@media screen and (min-width:1024px){.is-inline-desktop{display:inline!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-inline-desktop-only{display:inline!important}}@media screen and (min-width:1216px){.is-inline-widescreen{display:inline!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-inline-widescreen-only{display:inline!important}}@media screen and (min-width:1408px){.is-inline-fullhd{display:inline!important}}.is-inline-block{display:inline-block!important}@media screen and (max-width:768px){.is-inline-block-mobile{display:inline-block!important}}@media print,screen and (min-width:769px){.is-inline-block-tablet{display:inline-block!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-inline-block-tablet-only{display:inline-block!important}}@media screen and (max-width:1023px){.is-inline-block-touch{display:inline-block!important}}@media screen and (min-width:1024px){.is-inline-block-desktop{display:inline-block!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-inline-block-desktop-only{display:inline-block!important}}@media screen and (min-width:1216px){.is-inline-block-widescreen{display:inline-block!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-inline-block-widescreen-only{display:inline-block!important}}@media screen and (min-width:1408px){.is-inline-block-fullhd{display:inline-block!important}}.is-inline-flex{display:inline-flex!important}@media screen and (max-width:768px){.is-inline-flex-mobile{display:inline-flex!important}}@media print,screen and (min-width:769px){.is-inline-flex-tablet{display:inline-flex!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-inline-flex-tablet-only{display:inline-flex!important}}@media screen and (max-width:1023px){.is-inline-flex-touch{display:inline-flex!important}}@media screen and (min-width:1024px){.is-inline-flex-desktop{display:inline-flex!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-inline-flex-desktop-only{display:inline-flex!important}}@media screen and (min-width:1216px){.is-inline-flex-widescreen{display:inline-flex!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-inline-flex-widescreen-only{display:inline-flex!important}}@media screen and (min-width:1408px){.is-inline-flex-fullhd{display:inline-flex!important}}.is-hidden{display:none!important}.is-sr-only{border:none!important;clip:rect(0,0,0,0)!important;height:.01em!important;overflow:hidden!important;padding:0!important;position:absolute!important;white-space:nowrap!important;width:.01em!important}@media screen and (max-width:768px){.is-hidden-mobile{display:none!important}}@media print,screen and (min-width:769px){.is-hidden-tablet{display:none!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-hidden-tablet-only{display:none!important}}@media screen and (max-width:1023px){.is-hidden-touch{display:none!important}}@media screen and (min-width:1024px){.is-hidden-desktop{display:none!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-hidden-desktop-only{display:none!important}}@media screen and (min-width:1216px){.is-hidden-widescreen{display:none!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-hidden-widescreen-only{display:none!important}}@media screen and (min-width:1408px){.is-hidden-fullhd{display:none!important}}.is-invisible{visibility:hidden!important}@media screen and (max-width:768px){.is-invisible-mobile{visibility:hidden!important}}@media print,screen and (min-width:769px){.is-invisible-tablet{visibility:hidden!important}}@media screen and (min-width:769px) and (max-width:1023px){.is-invisible-tablet-only{visibility:hidden!important}}@media screen and (max-width:1023px){.is-invisible-touch{visibility:hidden!important}}@media screen and (min-width:1024px){.is-invisible-desktop{visibility:hidden!important}}@media screen and (min-width:1024px) and (max-width:1215px){.is-invisible-desktop-only{visibility:hidden!important}}@media screen and (min-width:1216px){.is-invisible-widescreen{visibility:hidden!important}}@media screen and (min-width:1216px) and (max-width:1407px){.is-invisible-widescreen-only{visibility:hidden!important}}@media screen and (min-width:1408px){.is-invisible-fullhd{visibility:hidden!important}}.is-marginless{margin:0!important}.is-paddingless{padding:0!important}.is-radiusless{border-radius:0!important}.is-shadowless{box-shadow:none!important}.is-relative{position:relative!important}.box{background-color:#222c3c;border-radius:6px;box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);color:#fff;display:block;padding:1.25rem}a.box:focus,a.box:hover{box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px #ff4653}a.box:active{box-shadow:inset 0 1px 2px rgba(10,10,10,.2),0 0 0 1px #ff4653}.button{background-color:#ff4653;border-color:#ff4653;border-width:1px;color:#fff;cursor:pointer;justify-content:center;padding:calc(.375em - 1px) .75em;text-align:center;white-space:nowrap}.button strong{color:inherit}.button .icon,.button .icon.is-large,.button .icon.is-medium,.button .icon.is-small{height:1.5em;width:1.5em}.button .icon:first-child:not(:last-child){margin-left:calc(-.375em - 1px);margin-right:.1875em}.button .icon:last-child:not(:first-child){margin-left:.1875em;margin-right:calc(-.375em - 1px)}.button .icon:first-child:last-child{margin-left:calc(-.375em - 1px);margin-right:calc(-.375em - 1px)}.button.is-hovered,.button:hover{border-color:#ff4653;color:#fff}.button.is-focused,.button:focus{border-color:#000;color:#363636}.button.is-focused:not(:active),.button:focus:not(:active){box-shadow:0 0 0 .125em rgba(255,70,83,.25)}.button.is-active,.button:active{border-color:#4a4a4a;color:#363636}.button.is-text{background-color:transparent;border-color:transparent;color:#fff;text-decoration:underline}.button.is-text.is-active,.button.is-text.is-focused,.button.is-text.is-hovered,.button.is-text:active,.button.is-text:focus,.button.is-text:hover{background-color:#000;color:#363636}.button.is-text[disabled],fieldset[disabled] .button.is-text{background-color:transparent;border-color:transparent;box-shadow:none}.button.is-white{background-color:#fff;border-color:transparent;color:#0a0a0a}.button.is-white.is-hovered,.button.is-white:hover{background-color:#f9f9f9;border-color:transparent;color:#0a0a0a}.button.is-white.is-focused,.button.is-white:focus{border-color:transparent;color:#0a0a0a}.button.is-white.is-focused:not(:active),.button.is-white:focus:not(:active){box-shadow:0 0 0 .125em hsla(0,0%,100%,.25)}.button.is-white.is-active,.button.is-white:active{background-color:#f2f2f2;border-color:transparent;color:#0a0a0a}.button.is-white[disabled],fieldset[disabled] .button.is-white{background-color:#fff;border-color:transparent;box-shadow:none}.button.is-white.is-inverted{background-color:#0a0a0a;color:#fff}.button.is-white.is-inverted.is-hovered,.button.is-white.is-inverted:hover{background-color:#000}.button.is-white.is-inverted[disabled],fieldset[disabled] .button.is-white.is-inverted{background-color:#0a0a0a;border-color:transparent;box-shadow:none;color:#fff}.button.is-white.is-loading:after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-white.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-white.is-outlined.is-focused,.button.is-white.is-outlined.is-hovered,.button.is-white.is-outlined:focus,.button.is-white.is-outlined:hover{background-color:#fff;border-color:#fff;color:#0a0a0a}.button.is-white.is-outlined.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-white.is-outlined.is-loading.is-focused:after,.button.is-white.is-outlined.is-loading.is-hovered:after,.button.is-white.is-outlined.is-loading:focus:after,.button.is-white.is-outlined.is-loading:hover:after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-white.is-outlined[disabled],fieldset[disabled] .button.is-white.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-white.is-inverted.is-outlined{background-color:transparent;border-color:#0a0a0a;color:#0a0a0a}.button.is-white.is-inverted.is-outlined.is-focused,.button.is-white.is-inverted.is-outlined.is-hovered,.button.is-white.is-inverted.is-outlined:focus,.button.is-white.is-inverted.is-outlined:hover{background-color:#0a0a0a;color:#fff}.button.is-white.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-white.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-white.is-inverted.is-outlined.is-loading:focus:after,.button.is-white.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-white.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-white.is-inverted.is-outlined{background-color:transparent;border-color:#0a0a0a;box-shadow:none;color:#0a0a0a}.button.is-black{background-color:#0a0a0a;border-color:transparent;color:#fff}.button.is-black.is-hovered,.button.is-black:hover{background-color:#040404;border-color:transparent;color:#fff}.button.is-black.is-focused,.button.is-black:focus{border-color:transparent;color:#fff}.button.is-black.is-focused:not(:active),.button.is-black:focus:not(:active){box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.button.is-black.is-active,.button.is-black:active{background-color:#000;border-color:transparent;color:#fff}.button.is-black[disabled],fieldset[disabled] .button.is-black{background-color:#0a0a0a;border-color:transparent;box-shadow:none}.button.is-black.is-inverted{background-color:#fff;color:#0a0a0a}.button.is-black.is-inverted.is-hovered,.button.is-black.is-inverted:hover{background-color:#f2f2f2}.button.is-black.is-inverted[disabled],fieldset[disabled] .button.is-black.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#0a0a0a}.button.is-black.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-black.is-outlined{background-color:transparent;border-color:#0a0a0a;color:#0a0a0a}.button.is-black.is-outlined.is-focused,.button.is-black.is-outlined.is-hovered,.button.is-black.is-outlined:focus,.button.is-black.is-outlined:hover{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.button.is-black.is-outlined.is-loading:after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-black.is-outlined.is-loading.is-focused:after,.button.is-black.is-outlined.is-loading.is-hovered:after,.button.is-black.is-outlined.is-loading:focus:after,.button.is-black.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-black.is-outlined[disabled],fieldset[disabled] .button.is-black.is-outlined{background-color:transparent;border-color:#0a0a0a;box-shadow:none;color:#0a0a0a}.button.is-black.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-black.is-inverted.is-outlined.is-focused,.button.is-black.is-inverted.is-outlined.is-hovered,.button.is-black.is-inverted.is-outlined:focus,.button.is-black.is-inverted.is-outlined:hover{background-color:#fff;color:#0a0a0a}.button.is-black.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-black.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-black.is-inverted.is-outlined.is-loading:focus:after,.button.is-black.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #0a0a0a #0a0a0a!important}.button.is-black.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-black.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-light{background-color:#f5f5f5;border-color:transparent;color:#363636}.button.is-light.is-hovered,.button.is-light:hover{background-color:#eee;border-color:transparent;color:#363636}.button.is-light.is-focused,.button.is-light:focus{border-color:transparent;color:#363636}.button.is-light.is-focused:not(:active),.button.is-light:focus:not(:active){box-shadow:0 0 0 .125em hsla(0,0%,96.1%,.25)}.button.is-light.is-active,.button.is-light:active{background-color:#e8e8e8;border-color:transparent;color:#363636}.button.is-light[disabled],fieldset[disabled] .button.is-light{background-color:#f5f5f5;border-color:transparent;box-shadow:none}.button.is-light.is-inverted{background-color:#363636;color:#f5f5f5}.button.is-light.is-inverted.is-hovered,.button.is-light.is-inverted:hover{background-color:#292929}.button.is-light.is-inverted[disabled],fieldset[disabled] .button.is-light.is-inverted{background-color:#363636;border-color:transparent;box-shadow:none;color:#f5f5f5}.button.is-light.is-loading:after{border-color:transparent transparent #363636 #363636!important}.button.is-light.is-outlined{background-color:transparent;border-color:#f5f5f5;color:#f5f5f5}.button.is-light.is-outlined.is-focused,.button.is-light.is-outlined.is-hovered,.button.is-light.is-outlined:focus,.button.is-light.is-outlined:hover{background-color:#f5f5f5;border-color:#f5f5f5;color:#363636}.button.is-light.is-outlined.is-loading:after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}.button.is-light.is-outlined.is-loading.is-focused:after,.button.is-light.is-outlined.is-loading.is-hovered:after,.button.is-light.is-outlined.is-loading:focus:after,.button.is-light.is-outlined.is-loading:hover:after{border-color:transparent transparent #363636 #363636!important}.button.is-light.is-outlined[disabled],fieldset[disabled] .button.is-light.is-outlined{background-color:transparent;border-color:#f5f5f5;box-shadow:none;color:#f5f5f5}.button.is-light.is-inverted.is-outlined{background-color:transparent;border-color:#363636;color:#363636}.button.is-light.is-inverted.is-outlined.is-focused,.button.is-light.is-inverted.is-outlined.is-hovered,.button.is-light.is-inverted.is-outlined:focus,.button.is-light.is-inverted.is-outlined:hover{background-color:#363636;color:#f5f5f5}.button.is-light.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-light.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-light.is-inverted.is-outlined.is-loading:focus:after,.button.is-light.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}.button.is-light.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-light.is-inverted.is-outlined{background-color:transparent;border-color:#363636;box-shadow:none;color:#363636}.button.is-dark{background-color:#363636;border-color:transparent;color:#f5f5f5}.button.is-dark.is-hovered,.button.is-dark:hover{background-color:#2f2f2f;border-color:transparent;color:#f5f5f5}.button.is-dark.is-focused,.button.is-dark:focus{border-color:transparent;color:#f5f5f5}.button.is-dark.is-focused:not(:active),.button.is-dark:focus:not(:active){box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.button.is-dark.is-active,.button.is-dark:active{background-color:#292929;border-color:transparent;color:#f5f5f5}.button.is-dark[disabled],fieldset[disabled] .button.is-dark{background-color:#363636;border-color:transparent;box-shadow:none}.button.is-dark.is-inverted{background-color:#f5f5f5;color:#363636}.button.is-dark.is-inverted.is-hovered,.button.is-dark.is-inverted:hover{background-color:#e8e8e8}.button.is-dark.is-inverted[disabled],fieldset[disabled] .button.is-dark.is-inverted{background-color:#f5f5f5;border-color:transparent;box-shadow:none;color:#363636}.button.is-dark.is-loading:after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}.button.is-dark.is-outlined{background-color:transparent;border-color:#363636;color:#363636}.button.is-dark.is-outlined.is-focused,.button.is-dark.is-outlined.is-hovered,.button.is-dark.is-outlined:focus,.button.is-dark.is-outlined:hover{background-color:#363636;border-color:#363636;color:#f5f5f5}.button.is-dark.is-outlined.is-loading:after{border-color:transparent transparent #363636 #363636!important}.button.is-dark.is-outlined.is-loading.is-focused:after,.button.is-dark.is-outlined.is-loading.is-hovered:after,.button.is-dark.is-outlined.is-loading:focus:after,.button.is-dark.is-outlined.is-loading:hover:after{border-color:transparent transparent #f5f5f5 #f5f5f5!important}.button.is-dark.is-outlined[disabled],fieldset[disabled] .button.is-dark.is-outlined{background-color:transparent;border-color:#363636;box-shadow:none;color:#363636}.button.is-dark.is-inverted.is-outlined{background-color:transparent;border-color:#f5f5f5;color:#f5f5f5}.button.is-dark.is-inverted.is-outlined.is-focused,.button.is-dark.is-inverted.is-outlined.is-hovered,.button.is-dark.is-inverted.is-outlined:focus,.button.is-dark.is-inverted.is-outlined:hover{background-color:#f5f5f5;color:#363636}.button.is-dark.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-dark.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-dark.is-inverted.is-outlined.is-loading:focus:after,.button.is-dark.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #363636 #363636!important}.button.is-dark.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-dark.is-inverted.is-outlined{background-color:transparent;border-color:#f5f5f5;box-shadow:none;color:#f5f5f5}.button.is-primary{background-color:#00d1b2;border-color:transparent;color:#fff}.button.is-primary.is-hovered,.button.is-primary:hover{background-color:#00c4a7;border-color:transparent;color:#fff}.button.is-primary.is-focused,.button.is-primary:focus{border-color:transparent;color:#fff}.button.is-primary.is-focused:not(:active),.button.is-primary:focus:not(:active){box-shadow:0 0 0 .125em rgba(0,209,178,.25)}.button.is-primary.is-active,.button.is-primary:active{background-color:#00b89c;border-color:transparent;color:#fff}.button.is-primary[disabled],fieldset[disabled] .button.is-primary{background-color:#00d1b2;border-color:transparent;box-shadow:none}.button.is-primary.is-inverted{background-color:#fff;color:#00d1b2}.button.is-primary.is-inverted.is-hovered,.button.is-primary.is-inverted:hover{background-color:#f2f2f2}.button.is-primary.is-inverted[disabled],fieldset[disabled] .button.is-primary.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#00d1b2}.button.is-primary.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-primary.is-outlined{background-color:transparent;border-color:#00d1b2;color:#00d1b2}.button.is-primary.is-outlined.is-focused,.button.is-primary.is-outlined.is-hovered,.button.is-primary.is-outlined:focus,.button.is-primary.is-outlined:hover{background-color:#00d1b2;border-color:#00d1b2;color:#fff}.button.is-primary.is-outlined.is-loading:after{border-color:transparent transparent #00d1b2 #00d1b2!important}.button.is-primary.is-outlined.is-loading.is-focused:after,.button.is-primary.is-outlined.is-loading.is-hovered:after,.button.is-primary.is-outlined.is-loading:focus:after,.button.is-primary.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-primary.is-outlined[disabled],fieldset[disabled] .button.is-primary.is-outlined{background-color:transparent;border-color:#00d1b2;box-shadow:none;color:#00d1b2}.button.is-primary.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-primary.is-inverted.is-outlined.is-focused,.button.is-primary.is-inverted.is-outlined.is-hovered,.button.is-primary.is-inverted.is-outlined:focus,.button.is-primary.is-inverted.is-outlined:hover{background-color:#fff;color:#00d1b2}.button.is-primary.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-primary.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-primary.is-inverted.is-outlined.is-loading:focus:after,.button.is-primary.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #00d1b2 #00d1b2!important}.button.is-primary.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-primary.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-link{background-color:#3273dc;border-color:transparent;color:#fff}.button.is-link.is-hovered,.button.is-link:hover{background-color:#276cda;border-color:transparent;color:#fff}.button.is-link.is-focused,.button.is-link:focus{border-color:transparent;color:#fff}.button.is-link.is-focused:not(:active),.button.is-link:focus:not(:active){box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.button.is-link.is-active,.button.is-link:active{background-color:#2366d1;border-color:transparent;color:#fff}.button.is-link[disabled],fieldset[disabled] .button.is-link{background-color:#3273dc;border-color:transparent;box-shadow:none}.button.is-link.is-inverted{background-color:#fff;color:#3273dc}.button.is-link.is-inverted.is-hovered,.button.is-link.is-inverted:hover{background-color:#f2f2f2}.button.is-link.is-inverted[disabled],fieldset[disabled] .button.is-link.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#3273dc}.button.is-link.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-link.is-outlined{background-color:transparent;border-color:#3273dc;color:#3273dc}.button.is-link.is-outlined.is-focused,.button.is-link.is-outlined.is-hovered,.button.is-link.is-outlined:focus,.button.is-link.is-outlined:hover{background-color:#3273dc;border-color:#3273dc;color:#fff}.button.is-link.is-outlined.is-loading:after{border-color:transparent transparent #3273dc #3273dc!important}.button.is-link.is-outlined.is-loading.is-focused:after,.button.is-link.is-outlined.is-loading.is-hovered:after,.button.is-link.is-outlined.is-loading:focus:after,.button.is-link.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-link.is-outlined[disabled],fieldset[disabled] .button.is-link.is-outlined{background-color:transparent;border-color:#3273dc;box-shadow:none;color:#3273dc}.button.is-link.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-link.is-inverted.is-outlined.is-focused,.button.is-link.is-inverted.is-outlined.is-hovered,.button.is-link.is-inverted.is-outlined:focus,.button.is-link.is-inverted.is-outlined:hover{background-color:#fff;color:#3273dc}.button.is-link.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-link.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-link.is-inverted.is-outlined.is-loading:focus:after,.button.is-link.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #3273dc #3273dc!important}.button.is-link.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-link.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-info{background-color:#209cee;border-color:transparent;color:#fff}.button.is-info.is-hovered,.button.is-info:hover{background-color:#1496ed;border-color:transparent;color:#fff}.button.is-info.is-focused,.button.is-info:focus{border-color:transparent;color:#fff}.button.is-info.is-focused:not(:active),.button.is-info:focus:not(:active){box-shadow:0 0 0 .125em rgba(32,156,238,.25)}.button.is-info.is-active,.button.is-info:active{background-color:#118fe4;border-color:transparent;color:#fff}.button.is-info[disabled],fieldset[disabled] .button.is-info{background-color:#209cee;border-color:transparent;box-shadow:none}.button.is-info.is-inverted{background-color:#fff;color:#209cee}.button.is-info.is-inverted.is-hovered,.button.is-info.is-inverted:hover{background-color:#f2f2f2}.button.is-info.is-inverted[disabled],fieldset[disabled] .button.is-info.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#209cee}.button.is-info.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-info.is-outlined{background-color:transparent;border-color:#209cee;color:#209cee}.button.is-info.is-outlined.is-focused,.button.is-info.is-outlined.is-hovered,.button.is-info.is-outlined:focus,.button.is-info.is-outlined:hover{background-color:#209cee;border-color:#209cee;color:#fff}.button.is-info.is-outlined.is-loading:after{border-color:transparent transparent #209cee #209cee!important}.button.is-info.is-outlined.is-loading.is-focused:after,.button.is-info.is-outlined.is-loading.is-hovered:after,.button.is-info.is-outlined.is-loading:focus:after,.button.is-info.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-info.is-outlined[disabled],fieldset[disabled] .button.is-info.is-outlined{background-color:transparent;border-color:#209cee;box-shadow:none;color:#209cee}.button.is-info.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-info.is-inverted.is-outlined.is-focused,.button.is-info.is-inverted.is-outlined.is-hovered,.button.is-info.is-inverted.is-outlined:focus,.button.is-info.is-inverted.is-outlined:hover{background-color:#fff;color:#209cee}.button.is-info.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-info.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-info.is-inverted.is-outlined.is-loading:focus:after,.button.is-info.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #209cee #209cee!important}.button.is-info.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-info.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-success{background-color:#23d160;border-color:transparent;color:#fff}.button.is-success.is-hovered,.button.is-success:hover{background-color:#22c65b;border-color:transparent;color:#fff}.button.is-success.is-focused,.button.is-success:focus{border-color:transparent;color:#fff}.button.is-success.is-focused:not(:active),.button.is-success:focus:not(:active){box-shadow:0 0 0 .125em rgba(35,209,96,.25)}.button.is-success.is-active,.button.is-success:active{background-color:#20bc56;border-color:transparent;color:#fff}.button.is-success[disabled],fieldset[disabled] .button.is-success{background-color:#23d160;border-color:transparent;box-shadow:none}.button.is-success.is-inverted{background-color:#fff;color:#23d160}.button.is-success.is-inverted.is-hovered,.button.is-success.is-inverted:hover{background-color:#f2f2f2}.button.is-success.is-inverted[disabled],fieldset[disabled] .button.is-success.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#23d160}.button.is-success.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-success.is-outlined{background-color:transparent;border-color:#23d160;color:#23d160}.button.is-success.is-outlined.is-focused,.button.is-success.is-outlined.is-hovered,.button.is-success.is-outlined:focus,.button.is-success.is-outlined:hover{background-color:#23d160;border-color:#23d160;color:#fff}.button.is-success.is-outlined.is-loading:after{border-color:transparent transparent #23d160 #23d160!important}.button.is-success.is-outlined.is-loading.is-focused:after,.button.is-success.is-outlined.is-loading.is-hovered:after,.button.is-success.is-outlined.is-loading:focus:after,.button.is-success.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-success.is-outlined[disabled],fieldset[disabled] .button.is-success.is-outlined{background-color:transparent;border-color:#23d160;box-shadow:none;color:#23d160}.button.is-success.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-success.is-inverted.is-outlined.is-focused,.button.is-success.is-inverted.is-outlined.is-hovered,.button.is-success.is-inverted.is-outlined:focus,.button.is-success.is-inverted.is-outlined:hover{background-color:#fff;color:#23d160}.button.is-success.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-success.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-success.is-inverted.is-outlined.is-loading:focus:after,.button.is-success.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #23d160 #23d160!important}.button.is-success.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-success.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-warning{background-color:#ffdd57;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-hovered,.button.is-warning:hover{background-color:#ffdb4a;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-focused,.button.is-warning:focus{border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning.is-focused:not(:active),.button.is-warning:focus:not(:active){box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.button.is-warning.is-active,.button.is-warning:active{background-color:#ffd83d;border-color:transparent;color:rgba(0,0,0,.7)}.button.is-warning[disabled],fieldset[disabled] .button.is-warning{background-color:#ffdd57;border-color:transparent;box-shadow:none}.button.is-warning.is-inverted{color:#ffdd57}.button.is-warning.is-inverted,.button.is-warning.is-inverted.is-hovered,.button.is-warning.is-inverted:hover{background-color:rgba(0,0,0,.7)}.button.is-warning.is-inverted[disabled],fieldset[disabled] .button.is-warning.is-inverted{background-color:rgba(0,0,0,.7);border-color:transparent;box-shadow:none;color:#ffdd57}.button.is-warning.is-loading:after{border-color:transparent transparent rgba(0,0,0,.7) rgba(0,0,0,.7)!important}.button.is-warning.is-outlined{background-color:transparent;border-color:#ffdd57;color:#ffdd57}.button.is-warning.is-outlined.is-focused,.button.is-warning.is-outlined.is-hovered,.button.is-warning.is-outlined:focus,.button.is-warning.is-outlined:hover{background-color:#ffdd57;border-color:#ffdd57;color:rgba(0,0,0,.7)}.button.is-warning.is-outlined.is-loading:after{border-color:transparent transparent #ffdd57 #ffdd57!important}.button.is-warning.is-outlined.is-loading.is-focused:after,.button.is-warning.is-outlined.is-loading.is-hovered:after,.button.is-warning.is-outlined.is-loading:focus:after,.button.is-warning.is-outlined.is-loading:hover:after{border-color:transparent transparent rgba(0,0,0,.7) rgba(0,0,0,.7)!important}.button.is-warning.is-outlined[disabled],fieldset[disabled] .button.is-warning.is-outlined{background-color:transparent;border-color:#ffdd57;box-shadow:none;color:#ffdd57}.button.is-warning.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,.7);color:rgba(0,0,0,.7)}.button.is-warning.is-inverted.is-outlined.is-focused,.button.is-warning.is-inverted.is-outlined.is-hovered,.button.is-warning.is-inverted.is-outlined:focus,.button.is-warning.is-inverted.is-outlined:hover{background-color:rgba(0,0,0,.7);color:#ffdd57}.button.is-warning.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-warning.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-warning.is-inverted.is-outlined.is-loading:focus:after,.button.is-warning.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #ffdd57 #ffdd57!important}.button.is-warning.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-warning.is-inverted.is-outlined{background-color:transparent;border-color:rgba(0,0,0,.7);box-shadow:none;color:rgba(0,0,0,.7)}.button.is-danger{background-color:#ff3860;border-color:transparent;color:#fff}.button.is-danger.is-hovered,.button.is-danger:hover{background-color:#ff2b56;border-color:transparent;color:#fff}.button.is-danger.is-focused,.button.is-danger:focus{border-color:transparent;color:#fff}.button.is-danger.is-focused:not(:active),.button.is-danger:focus:not(:active){box-shadow:0 0 0 .125em rgba(255,56,96,.25)}.button.is-danger.is-active,.button.is-danger:active{background-color:#ff1f4b;border-color:transparent;color:#fff}.button.is-danger[disabled],fieldset[disabled] .button.is-danger{background-color:#ff3860;border-color:transparent;box-shadow:none}.button.is-danger.is-inverted{background-color:#fff;color:#ff3860}.button.is-danger.is-inverted.is-hovered,.button.is-danger.is-inverted:hover{background-color:#f2f2f2}.button.is-danger.is-inverted[disabled],fieldset[disabled] .button.is-danger.is-inverted{background-color:#fff;border-color:transparent;box-shadow:none;color:#ff3860}.button.is-danger.is-loading:after{border-color:transparent transparent #fff #fff!important}.button.is-danger.is-outlined{background-color:transparent;border-color:#ff3860;color:#ff3860}.button.is-danger.is-outlined.is-focused,.button.is-danger.is-outlined.is-hovered,.button.is-danger.is-outlined:focus,.button.is-danger.is-outlined:hover{background-color:#ff3860;border-color:#ff3860;color:#fff}.button.is-danger.is-outlined.is-loading:after{border-color:transparent transparent #ff3860 #ff3860!important}.button.is-danger.is-outlined.is-loading.is-focused:after,.button.is-danger.is-outlined.is-loading.is-hovered:after,.button.is-danger.is-outlined.is-loading:focus:after,.button.is-danger.is-outlined.is-loading:hover:after{border-color:transparent transparent #fff #fff!important}.button.is-danger.is-outlined[disabled],fieldset[disabled] .button.is-danger.is-outlined{background-color:transparent;border-color:#ff3860;box-shadow:none;color:#ff3860}.button.is-danger.is-inverted.is-outlined{background-color:transparent;border-color:#fff;color:#fff}.button.is-danger.is-inverted.is-outlined.is-focused,.button.is-danger.is-inverted.is-outlined.is-hovered,.button.is-danger.is-inverted.is-outlined:focus,.button.is-danger.is-inverted.is-outlined:hover{background-color:#fff;color:#ff3860}.button.is-danger.is-inverted.is-outlined.is-loading.is-focused:after,.button.is-danger.is-inverted.is-outlined.is-loading.is-hovered:after,.button.is-danger.is-inverted.is-outlined.is-loading:focus:after,.button.is-danger.is-inverted.is-outlined.is-loading:hover:after{border-color:transparent transparent #ff3860 #ff3860!important}.button.is-danger.is-inverted.is-outlined[disabled],fieldset[disabled] .button.is-danger.is-inverted.is-outlined{background-color:transparent;border-color:#fff;box-shadow:none;color:#fff}.button.is-small{border-radius:2px;font-size:.75rem}.button.is-normal{font-size:1rem}.button.is-medium{font-size:1.25rem}.button.is-large{font-size:1.5rem}.button[disabled],fieldset[disabled] .button{background-color:#fff;border-color:#dbdbdb;box-shadow:none;opacity:.5}.button.is-fullwidth{display:flex;width:100%}.button.is-loading{color:transparent!important;pointer-events:none}.button.is-loading:after{position:absolute;left:calc(50% - .5em);top:calc(50% - .5em);position:absolute!important}.button.is-static{background-color:#f5f5f5;border-color:#dbdbdb;color:#7a7a7a;box-shadow:none;pointer-events:none}.button.is-rounded{border-radius:290486px;padding-left:1em;padding-right:1em}.buttons{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start}.buttons .button{margin-bottom:.5rem}.buttons .button:not(:last-child):not(.is-fullwidth){margin-right:.5rem}.buttons:last-child{margin-bottom:-.5rem}.buttons:not(:last-child){margin-bottom:1rem}.buttons.are-small .button:not(.is-normal):not(.is-medium):not(.is-large){border-radius:2px;font-size:.75rem}.buttons.are-medium .button:not(.is-small):not(.is-normal):not(.is-large){font-size:1.25rem}.buttons.are-large .button:not(.is-small):not(.is-normal):not(.is-medium){font-size:1.5rem}.buttons.has-addons .button:not(:first-child){border-bottom-left-radius:0;border-top-left-radius:0}.buttons.has-addons .button:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0;margin-right:-1px}.buttons.has-addons .button:last-child{margin-right:0}.buttons.has-addons .button.is-hovered,.buttons.has-addons .button:hover{z-index:2}.buttons.has-addons .button.is-active,.buttons.has-addons .button.is-focused,.buttons.has-addons .button.is-selected,.buttons.has-addons .button:active,.buttons.has-addons .button:focus{z-index:3}.buttons.has-addons .button.is-active:hover,.buttons.has-addons .button.is-focused:hover,.buttons.has-addons .button.is-selected:hover,.buttons.has-addons .button:active:hover,.buttons.has-addons .button:focus:hover{z-index:4}.buttons.has-addons .button.is-expanded{flex-grow:1;flex-shrink:1}.buttons.is-centered{justify-content:center}.buttons.is-centered:not(.has-addons) .button:not(.is-fullwidth){margin-left:.25rem;margin-right:.25rem}.buttons.is-right{justify-content:flex-end}.buttons.is-right:not(.has-addons) .button:not(.is-fullwidth){margin-left:.25rem;margin-right:.25rem}.container{flex-grow:1;margin:0 auto;position:relative;width:auto}@media screen and (min-width:1024px){.container{max-width:960px}.container.is-fluid{margin-left:32px;margin-right:32px;max-width:none}}@media screen and (max-width:1215px){.container.is-widescreen{max-width:1152px}}@media screen and (max-width:1407px){.container.is-fullhd{max-width:1344px}}@media screen and (min-width:1216px){.container{max-width:1152px}}@media screen and (min-width:1408px){.container{max-width:1344px}}.content li+li{margin-top:.25em}.content blockquote:not(:last-child),.content dl:not(:last-child),.content ol:not(:last-child),.content p:not(:last-child),.content pre:not(:last-child),.content table:not(:last-child),.content ul:not(:last-child){margin-bottom:1em}.content h1,.content h2,.content h3,.content h4,.content h5,.content h6{color:#363636;font-weight:600;line-height:1.125}.content h1{font-size:2em;margin-bottom:.5em}.content h1:not(:first-child){margin-top:1em}.content h2{font-size:1.75em;margin-bottom:.5714em}.content h2:not(:first-child){margin-top:1.1428em}.content h3{font-size:1.5em;margin-bottom:.6666em}.content h3:not(:first-child){margin-top:1.3333em}.content h4{font-size:1.25em;margin-bottom:.8em}.content h5{font-size:1.125em;margin-bottom:.8888em}.content h6{font-size:1em;margin-bottom:1em}.content blockquote{background-color:#222c3c;border-left:5px solid #ff4653;padding:1.25em 1.5em}.content ol{list-style-position:outside;margin-left:2em;margin-top:1em}.content ol:not([type]){list-style-type:decimal}.content ol:not([type]).is-lower-alpha{list-style-type:lower-alpha}.content ol:not([type]).is-lower-roman{list-style-type:lower-roman}.content ol:not([type]).is-upper-alpha{list-style-type:upper-alpha}.content ol:not([type]).is-upper-roman{list-style-type:upper-roman}.content ul{list-style:disc outside;margin-left:2em;margin-top:1em}.content ul ul{list-style-type:circle;margin-top:.5em}.content ul ul ul{list-style-type:square}.content dd{margin-left:2em}.content figure{margin-left:2em;margin-right:2em;text-align:center}.content figure:not(:first-child){margin-top:2em}.content figure:not(:last-child){margin-bottom:2em}.content figure img{display:inline-block}.content figure figcaption{font-style:italic}.content pre{-webkit-overflow-scrolling:touch;overflow-x:auto;padding:1.25em 1.5em;white-space:pre;word-wrap:normal}.content sub,.content sup{font-size:75%}.content table{width:100%}.content table td,.content table th{border:solid #ff4653;border-width:0 0 1px;padding:.5em .75em;vertical-align:top}.content table th{color:#363636}.content table th:not([align]){text-align:left}.content table thead td,.content table thead th{border-width:0 0 2px;color:#363636}.content table tfoot td,.content table tfoot th{border-width:2px 0 0;color:#363636}.content table tbody tr:last-child td,.content table tbody tr:last-child th{border-bottom-width:0}.content .tabs li+li{margin-top:0}.content.is-small{font-size:.75rem}.content.is-medium{font-size:1.25rem}.content.is-large{font-size:1.5rem}.icon{align-items:center;display:inline-flex;justify-content:center;height:1.5rem;width:1.5rem}.icon.is-small{height:1rem;width:1rem}.icon.is-medium{height:2rem;width:2rem}.icon.is-large{height:3rem;width:3rem}.image{display:block;position:relative}.image img{display:block;height:auto;width:100%}.image img.is-rounded{border-radius:290486px}.image.is-1by1 .has-ratio,.image.is-1by1 img,.image.is-1by2 .has-ratio,.image.is-1by2 img,.image.is-1by3 .has-ratio,.image.is-1by3 img,.image.is-2by1 .has-ratio,.image.is-2by1 img,.image.is-2by3 .has-ratio,.image.is-2by3 img,.image.is-3by1 .has-ratio,.image.is-3by1 img,.image.is-3by2 .has-ratio,.image.is-3by2 img,.image.is-3by4 .has-ratio,.image.is-3by4 img,.image.is-3by5 .has-ratio,.image.is-3by5 img,.image.is-4by3 .has-ratio,.image.is-4by3 img,.image.is-4by5 .has-ratio,.image.is-4by5 img,.image.is-5by3 .has-ratio,.image.is-5by3 img,.image.is-5by4 .has-ratio,.image.is-5by4 img,.image.is-9by16 .has-ratio,.image.is-9by16 img,.image.is-16by9 .has-ratio,.image.is-16by9 img,.image.is-square .has-ratio,.image.is-square img{height:100%;width:100%}.image.is-1by1,.image.is-square{padding-top:100%}.image.is-5by4{padding-top:80%}.image.is-4by3{padding-top:75%}.image.is-3by2{padding-top:66.6666%}.image.is-5by3{padding-top:60%}.image.is-16by9{padding-top:56.25%}.image.is-2by1{padding-top:50%}.image.is-3by1{padding-top:33.3333%}.image.is-4by5{padding-top:125%}.image.is-3by4{padding-top:133.3333%}.image.is-2by3{padding-top:150%}.image.is-3by5{padding-top:166.6666%}.image.is-9by16{padding-top:177.7777%}.image.is-1by2{padding-top:200%}.image.is-1by3{padding-top:300%}.image.is-16x16{height:16px;width:16px}.image.is-24x24{height:24px;width:24px}.image.is-32x32{height:32px;width:32px}.image.is-48x48{height:48px;width:48px}.image.is-64x64{height:64px;width:64px}.image.is-96x96{height:96px;width:96px}.image.is-128x128{height:128px;width:128px}.notification{background-color:#000;border-radius:4px;padding:1.25rem 2.5rem 1.25rem 1.5rem;position:relative}.notification a:not(.button):not(.dropdown-item){color:currentColor;text-decoration:underline}.notification strong{color:currentColor}.notification code,.notification pre{background:#fff}.notification pre code{background:transparent}.notification>.delete{position:absolute;right:.5rem;top:.5rem}.notification .content,.notification .subtitle,.notification .title{color:currentColor}.notification.is-white{background-color:#fff;color:#0a0a0a}.notification.is-black{background-color:#0a0a0a;color:#fff}.notification.is-light{background-color:#f5f5f5;color:#363636}.notification.is-dark{background-color:#363636;color:#f5f5f5}.notification.is-primary{background-color:#00d1b2;color:#fff}.notification.is-link{background-color:#3273dc;color:#fff}.notification.is-info{background-color:#209cee;color:#fff}.notification.is-success{background-color:#23d160;color:#fff}.notification.is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.notification.is-danger{background-color:#ff3860;color:#fff}.progress{-moz-appearance:none;-webkit-appearance:none;border:none;border-radius:290486px;display:block;height:1rem;overflow:hidden;padding:0;width:100%}.progress::-webkit-progress-bar{background-color:#ff4653}.progress::-webkit-progress-value{background-color:#fff}.progress::-moz-progress-bar{background-color:#fff}.progress::-ms-fill{background-color:#fff;border:none}.progress.is-white::-webkit-progress-value{background-color:#fff}.progress.is-white::-moz-progress-bar{background-color:#fff}.progress.is-white::-ms-fill{background-color:#fff}.progress.is-white:indeterminate{background-image:linear-gradient(90deg,#fff 30%,#ff4653 0)}.progress.is-black::-webkit-progress-value{background-color:#0a0a0a}.progress.is-black::-moz-progress-bar{background-color:#0a0a0a}.progress.is-black::-ms-fill{background-color:#0a0a0a}.progress.is-black:indeterminate{background-image:linear-gradient(90deg,#0a0a0a 30%,#ff4653 0)}.progress.is-light::-webkit-progress-value{background-color:#f5f5f5}.progress.is-light::-moz-progress-bar{background-color:#f5f5f5}.progress.is-light::-ms-fill{background-color:#f5f5f5}.progress.is-light:indeterminate{background-image:linear-gradient(90deg,#f5f5f5 30%,#ff4653 0)}.progress.is-dark::-webkit-progress-value{background-color:#363636}.progress.is-dark::-moz-progress-bar{background-color:#363636}.progress.is-dark::-ms-fill{background-color:#363636}.progress.is-dark:indeterminate{background-image:linear-gradient(90deg,#363636 30%,#ff4653 0)}.progress.is-primary::-webkit-progress-value{background-color:#00d1b2}.progress.is-primary::-moz-progress-bar{background-color:#00d1b2}.progress.is-primary::-ms-fill{background-color:#00d1b2}.progress.is-primary:indeterminate{background-image:linear-gradient(90deg,#00d1b2 30%,#ff4653 0)}.progress.is-link::-webkit-progress-value{background-color:#3273dc}.progress.is-link::-moz-progress-bar{background-color:#3273dc}.progress.is-link::-ms-fill{background-color:#3273dc}.progress.is-link:indeterminate{background-image:linear-gradient(90deg,#3273dc 30%,#ff4653 0)}.progress.is-info::-webkit-progress-value{background-color:#209cee}.progress.is-info::-moz-progress-bar{background-color:#209cee}.progress.is-info::-ms-fill{background-color:#209cee}.progress.is-info:indeterminate{background-image:linear-gradient(90deg,#209cee 30%,#ff4653 0)}.progress.is-success::-webkit-progress-value{background-color:#23d160}.progress.is-success::-moz-progress-bar{background-color:#23d160}.progress.is-success::-ms-fill{background-color:#23d160}.progress.is-success:indeterminate{background-image:linear-gradient(90deg,#23d160 30%,#ff4653 0)}.progress.is-warning::-webkit-progress-value{background-color:#ffdd57}.progress.is-warning::-moz-progress-bar{background-color:#ffdd57}.progress.is-warning::-ms-fill{background-color:#ffdd57}.progress.is-warning:indeterminate{background-image:linear-gradient(90deg,#ffdd57 30%,#ff4653 0)}.progress.is-danger::-webkit-progress-value{background-color:#ff3860}.progress.is-danger::-moz-progress-bar{background-color:#ff3860}.progress.is-danger::-ms-fill{background-color:#ff3860}.progress.is-danger:indeterminate{background-image:linear-gradient(90deg,#ff3860 30%,#ff4653 0)}.progress:indeterminate{-webkit-animation-duration:1.5s;animation-duration:1.5s;-webkit-animation-iteration-count:infinite;animation-iteration-count:infinite;-webkit-animation-name:moveIndeterminate;animation-name:moveIndeterminate;-webkit-animation-timing-function:linear;animation-timing-function:linear;background-color:#ff4653;background-image:linear-gradient(90deg,#fff 30%,#ff4653 0);background-position:0 0;background-repeat:no-repeat;background-size:150% 150%}.progress:indeterminate::-webkit-progress-bar{background-color:transparent}.progress:indeterminate::-moz-progress-bar{background-color:transparent}.progress.is-small{height:.75rem}.progress.is-medium{height:1.25rem}.progress.is-large{height:1.5rem}@-webkit-keyframes moveIndeterminate{0%{background-position:200% 0}to{background-position:-200% 0}}@keyframes moveIndeterminate{0%{background-position:200% 0}to{background-position:-200% 0}}.table{background-color:#222c3c;color:#fff}.table td,.table th{border:solid #dbdbdb;border-width:0 0 1px;padding:.5em .75em;vertical-align:top}.table td.is-white,.table th.is-white{background-color:#fff;border-color:#fff;color:#0a0a0a}.table td.is-black,.table th.is-black{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.table td.is-light,.table th.is-light{background-color:#f5f5f5;border-color:#f5f5f5;color:#363636}.table td.is-dark,.table th.is-dark{background-color:#363636;border-color:#363636;color:#f5f5f5}.table td.is-primary,.table th.is-primary{background-color:#00d1b2;border-color:#00d1b2;color:#fff}.table td.is-link,.table th.is-link{background-color:#3273dc;border-color:#3273dc;color:#fff}.table td.is-info,.table th.is-info{background-color:#209cee;border-color:#209cee;color:#fff}.table td.is-success,.table th.is-success{background-color:#23d160;border-color:#23d160;color:#fff}.table td.is-warning,.table th.is-warning{background-color:#ffdd57;border-color:#ffdd57;color:rgba(0,0,0,.7)}.table td.is-danger,.table th.is-danger{background-color:#ff3860;border-color:#ff3860;color:#fff}.table td.is-narrow,.table th.is-narrow{white-space:nowrap;width:1%}.table td.is-selected,.table th.is-selected{background-color:#000;color:#00f}.table td.is-selected a,.table td.is-selected strong,.table th.is-selected a,.table th.is-selected strong{color:currentColor}.table th{color:#fff}.table th:not([align]){text-align:left}.table tr.is-selected{background-color:#000;color:#00f}.table tr.is-selected a,.table tr.is-selected strong{color:currentColor}.table tr.is-selected td,.table tr.is-selected th{border-color:#00f;color:currentColor}.table thead{background-color:transparent}.table thead td,.table thead th{border-width:0 0 2px;color:#fff}.table tfoot{background-color:transparent}.table tfoot td,.table tfoot th{border-width:2px 0 0;color:#363636}.table tbody{background-color:#222c3c}.table tbody tr:last-child td,.table tbody tr:last-child th{border-bottom-width:0}.table.is-bordered td,.table.is-bordered th{border-width:1px}.table.is-bordered tr:last-child td,.table.is-bordered tr:last-child th{border-bottom-width:1px}.table.is-fullwidth{width:100%}.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover,.table.is-hoverable tbody tr:not(.is-selected):hover{background-color:#34445d}.table.is-hoverable.is-striped tbody tr:not(.is-selected):hover:nth-child(2n){background-color:#3e506d}.table.is-narrow td,.table.is-narrow th{padding:.25em .5em}.table.is-striped tbody tr:not(.is-selected):nth-child(2n){background-color:#2b384c}.table-container{-webkit-overflow-scrolling:touch;overflow:auto;overflow-y:hidden;max-width:100%}.tags{align-items:center;display:flex;flex-wrap:wrap;justify-content:flex-start}.tags .tag{margin-bottom:.5rem}.tags .tag:not(:last-child){margin-right:.5rem}.tags:last-child{margin-bottom:-.5rem}.tags:not(:last-child){margin-bottom:1rem}.tags.are-medium .tag:not(.is-normal):not(.is-large){font-size:1rem}.tags.are-large .tag:not(.is-normal):not(.is-medium){font-size:1.25rem}.tags.is-centered{justify-content:center}.tags.is-centered .tag{margin-right:.25rem;margin-left:.25rem}.tags.is-right{justify-content:flex-end}.tags.is-right .tag:not(:first-child){margin-left:.5rem}.tags.has-addons .tag,.tags.is-right .tag:not(:last-child){margin-right:0}.tags.has-addons .tag:not(:first-child){margin-left:0;border-bottom-left-radius:0;border-top-left-radius:0}.tags.has-addons .tag:not(:last-child){border-bottom-right-radius:0;border-top-right-radius:0}.tag:not(body){align-items:center;background-color:#000;border-radius:4px;color:#fff;display:inline-flex;font-size:.75rem;height:2em;justify-content:center;line-height:1.5;padding-left:.75em;padding-right:.75em;white-space:nowrap}.tag:not(body) .delete{margin-left:.25rem;margin-right:-.375rem}.tag:not(body).is-white{background-color:#fff;color:#0a0a0a}.tag:not(body).is-black{background-color:#0a0a0a;color:#fff}.tag:not(body).is-light{background-color:#f5f5f5;color:#363636}.tag:not(body).is-dark{background-color:#363636;color:#f5f5f5}.tag:not(body).is-primary{background-color:#00d1b2;color:#fff}.tag:not(body).is-link{background-color:#3273dc;color:#fff}.tag:not(body).is-info{background-color:#209cee;color:#fff}.tag:not(body).is-success{background-color:#23d160;color:#fff}.tag:not(body).is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.tag:not(body).is-danger{background-color:#ff3860;color:#fff}.tag:not(body).is-normal{font-size:.75rem}.tag:not(body).is-medium{font-size:1rem}.tag:not(body).is-large{font-size:1.25rem}.tag:not(body) .icon:first-child:not(:last-child){margin-left:-.375em;margin-right:.1875em}.tag:not(body) .icon:last-child:not(:first-child){margin-left:.1875em;margin-right:-.375em}.tag:not(body) .icon:first-child:last-child{margin-left:-.375em;margin-right:-.375em}.tag:not(body).is-delete{margin-left:1px;padding:0;position:relative;width:2em}.tag:not(body).is-delete:after,.tag:not(body).is-delete:before{background-color:currentColor;content:\"\";display:block;left:50%;position:absolute;top:50%;transform:translateX(-50%) translateY(-50%) rotate(45deg);transform-origin:center center}.tag:not(body).is-delete:before{height:1px;width:50%}.tag:not(body).is-delete:after{height:50%;width:1px}.tag:not(body).is-delete:active,.tag:not(body).is-delete:focus,.tag:not(body).is-delete:hover{background-color:#000}.tag:not(body).is-rounded{border-radius:290486px}a.tag:hover{text-decoration:underline}.subtitle,.title{word-break:break-word}.subtitle em,.subtitle span,.title em,.title span{font-weight:inherit}.subtitle sub,.subtitle sup,.title sub,.title sup{font-size:.75em}.subtitle .tag,.title .tag{vertical-align:middle}.title{color:#fff;font-size:2rem;font-weight:600;line-height:1.125}.title strong{color:inherit;font-weight:inherit}.title+.highlight{margin-top:-.75rem}.title:not(.is-spaced)+.subtitle{margin-top:-1.25rem}.title.is-1{font-size:3rem}.title.is-2{font-size:2.5rem}.title.is-3{font-size:2rem}.title.is-4{font-size:1.5rem}.title.is-5{font-size:1.25rem}.title.is-6{font-size:1rem}.title.is-7{font-size:.75rem}.subtitle{color:#fff;font-size:1.25rem;font-weight:400;line-height:1.25}.subtitle strong{color:#363636;font-weight:600}.subtitle:not(.is-spaced)+.title{margin-top:-1.25rem}.subtitle.is-1{font-size:3rem}.subtitle.is-2{font-size:2.5rem}.subtitle.is-3{font-size:2rem}.subtitle.is-4{font-size:1.5rem}.subtitle.is-5{font-size:1.25rem}.subtitle.is-6{font-size:1rem}.subtitle.is-7{font-size:.75rem}.heading{display:block;font-size:11px;letter-spacing:1px;margin-bottom:5px;text-transform:uppercase}.highlight{font-weight:400;max-width:100%;overflow:hidden;padding:0}.highlight pre{overflow:auto;max-width:100%}.number{align-items:center;background-color:#000;border-radius:290486px;display:inline-flex;font-size:1.25rem;height:2em;justify-content:center;margin-right:1.5rem;min-width:2.5em;padding:.25rem .5rem;text-align:center;vertical-align:top}.input,.select select,.taginput .taginput-container.is-focusable,.textarea{background-color:#222c3c;border-color:#ff4653;border-radius:4px;color:#fff}.input::-moz-placeholder,.select select::-moz-placeholder,.taginput .taginput-container.is-focusable::-moz-placeholder,.textarea::-moz-placeholder{color:hsla(0,0%,100%,.3)}.input::-webkit-input-placeholder,.select select::-webkit-input-placeholder,.taginput .taginput-container.is-focusable::-webkit-input-placeholder,.textarea::-webkit-input-placeholder{color:hsla(0,0%,100%,.3)}.input:-moz-placeholder,.select select:-moz-placeholder,.taginput .taginput-container.is-focusable:-moz-placeholder,.textarea:-moz-placeholder{color:hsla(0,0%,100%,.3)}.input:-ms-input-placeholder,.select select:-ms-input-placeholder,.taginput .taginput-container.is-focusable:-ms-input-placeholder,.textarea:-ms-input-placeholder{color:hsla(0,0%,100%,.3)}.input:hover,.is-hovered.input,.is-hovered.textarea,.select select.is-hovered,.select select:hover,.taginput .is-hovered.taginput-container.is-focusable,.taginput .taginput-container.is-focusable:hover,.textarea:hover{border-color:#ff4653}.input:active,.input:focus,.is-active.input,.is-active.textarea,.is-focused.input,.is-focused.textarea,.select select.is-active,.select select.is-focused,.select select:active,.select select:focus,.taginput .is-active.taginput-container.is-focusable,.taginput .is-focused.taginput-container.is-focusable,.taginput .taginput-container.is-focusable:active,.taginput .taginput-container.is-focusable:focus,.textarea:active,.textarea:focus{border-color:#ff4653;box-shadow:0 0 0 .125em rgba(255,70,83,.25)}.input[disabled],.select fieldset[disabled] select,.select select[disabled],.taginput .taginput-container.is-focusable[disabled],.taginput fieldset[disabled] .taginput-container.is-focusable,.textarea[disabled],fieldset[disabled] .input,fieldset[disabled] .select select,fieldset[disabled] .taginput .taginput-container.is-focusable,fieldset[disabled] .textarea{background-color:#000;border-color:#000;box-shadow:none;color:#7a7a7a}.input[disabled]::-moz-placeholder,.select fieldset[disabled] select::-moz-placeholder,.select select[disabled]::-moz-placeholder,.taginput .taginput-container.is-focusable[disabled]::-moz-placeholder,.taginput fieldset[disabled] .taginput-container.is-focusable::-moz-placeholder,.textarea[disabled]::-moz-placeholder,fieldset[disabled] .input::-moz-placeholder,fieldset[disabled] .select select::-moz-placeholder,fieldset[disabled] .taginput .taginput-container.is-focusable::-moz-placeholder,fieldset[disabled] .textarea::-moz-placeholder{color:hsla(0,0%,47.8%,.3)}.input[disabled]::-webkit-input-placeholder,.select fieldset[disabled] select::-webkit-input-placeholder,.select select[disabled]::-webkit-input-placeholder,.taginput .taginput-container.is-focusable[disabled]::-webkit-input-placeholder,.taginput fieldset[disabled] .taginput-container.is-focusable::-webkit-input-placeholder,.textarea[disabled]::-webkit-input-placeholder,fieldset[disabled] .input::-webkit-input-placeholder,fieldset[disabled] .select select::-webkit-input-placeholder,fieldset[disabled] .taginput .taginput-container.is-focusable::-webkit-input-placeholder,fieldset[disabled] .textarea::-webkit-input-placeholder{color:hsla(0,0%,47.8%,.3)}.input[disabled]:-moz-placeholder,.select fieldset[disabled] select:-moz-placeholder,.select select[disabled]:-moz-placeholder,.taginput .taginput-container.is-focusable[disabled]:-moz-placeholder,.taginput fieldset[disabled] .taginput-container.is-focusable:-moz-placeholder,.textarea[disabled]:-moz-placeholder,fieldset[disabled] .input:-moz-placeholder,fieldset[disabled] .select select:-moz-placeholder,fieldset[disabled] .taginput .taginput-container.is-focusable:-moz-placeholder,fieldset[disabled] .textarea:-moz-placeholder{color:hsla(0,0%,47.8%,.3)}.input[disabled]:-ms-input-placeholder,.select fieldset[disabled] select:-ms-input-placeholder,.select select[disabled]:-ms-input-placeholder,.taginput .taginput-container.is-focusable[disabled]:-ms-input-placeholder,.taginput fieldset[disabled] .taginput-container.is-focusable:-ms-input-placeholder,.textarea[disabled]:-ms-input-placeholder,fieldset[disabled] .input:-ms-input-placeholder,fieldset[disabled] .select select:-ms-input-placeholder,fieldset[disabled] .taginput .taginput-container.is-focusable:-ms-input-placeholder,fieldset[disabled] .textarea:-ms-input-placeholder{color:hsla(0,0%,47.8%,.3)}.input,.taginput .taginput-container.is-focusable,.textarea{box-shadow:inset 0 1px 2px rgba(10,10,10,.1);max-width:100%;width:100%}.input[readonly],.taginput .taginput-container.is-focusable[readonly],.textarea[readonly]{box-shadow:none}.is-white.input,.is-white.textarea,.taginput .is-white.taginput-container.is-focusable{border-color:#fff}.is-white.input:active,.is-white.input:focus,.is-white.is-active.input,.is-white.is-active.textarea,.is-white.is-focused.input,.is-white.is-focused.textarea,.is-white.textarea:active,.is-white.textarea:focus,.taginput .is-white.is-active.taginput-container.is-focusable,.taginput .is-white.is-focused.taginput-container.is-focusable,.taginput .is-white.taginput-container.is-focusable:active,.taginput .is-white.taginput-container.is-focusable:focus{box-shadow:0 0 0 .125em hsla(0,0%,100%,.25)}.is-black.input,.is-black.textarea,.taginput .is-black.taginput-container.is-focusable{border-color:#0a0a0a}.is-black.input:active,.is-black.input:focus,.is-black.is-active.input,.is-black.is-active.textarea,.is-black.is-focused.input,.is-black.is-focused.textarea,.is-black.textarea:active,.is-black.textarea:focus,.taginput .is-black.is-active.taginput-container.is-focusable,.taginput .is-black.is-focused.taginput-container.is-focusable,.taginput .is-black.taginput-container.is-focusable:active,.taginput .is-black.taginput-container.is-focusable:focus{box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.is-light.input,.is-light.textarea,.taginput .is-light.taginput-container.is-focusable{border-color:#f5f5f5}.is-light.input:active,.is-light.input:focus,.is-light.is-active.input,.is-light.is-active.textarea,.is-light.is-focused.input,.is-light.is-focused.textarea,.is-light.textarea:active,.is-light.textarea:focus,.taginput .is-light.is-active.taginput-container.is-focusable,.taginput .is-light.is-focused.taginput-container.is-focusable,.taginput .is-light.taginput-container.is-focusable:active,.taginput .is-light.taginput-container.is-focusable:focus{box-shadow:0 0 0 .125em hsla(0,0%,96.1%,.25)}.is-dark.input,.is-dark.textarea,.taginput .is-dark.taginput-container.is-focusable{border-color:#363636}.is-dark.input:active,.is-dark.input:focus,.is-dark.is-active.input,.is-dark.is-active.textarea,.is-dark.is-focused.input,.is-dark.is-focused.textarea,.is-dark.textarea:active,.is-dark.textarea:focus,.taginput .is-dark.is-active.taginput-container.is-focusable,.taginput .is-dark.is-focused.taginput-container.is-focusable,.taginput .is-dark.taginput-container.is-focusable:active,.taginput .is-dark.taginput-container.is-focusable:focus{box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.is-primary.input,.is-primary.textarea,.taginput .is-primary.taginput-container.is-focusable{border-color:#00d1b2}.is-primary.input:active,.is-primary.input:focus,.is-primary.is-active.input,.is-primary.is-active.textarea,.is-primary.is-focused.input,.is-primary.is-focused.textarea,.is-primary.textarea:active,.is-primary.textarea:focus,.taginput .is-primary.is-active.taginput-container.is-focusable,.taginput .is-primary.is-focused.taginput-container.is-focusable,.taginput .is-primary.taginput-container.is-focusable:active,.taginput .is-primary.taginput-container.is-focusable:focus{box-shadow:0 0 0 .125em rgba(0,209,178,.25)}.is-link.input,.is-link.textarea,.taginput .is-link.taginput-container.is-focusable{border-color:#3273dc}.is-link.input:active,.is-link.input:focus,.is-link.is-active.input,.is-link.is-active.textarea,.is-link.is-focused.input,.is-link.is-focused.textarea,.is-link.textarea:active,.is-link.textarea:focus,.taginput .is-link.is-active.taginput-container.is-focusable,.taginput .is-link.is-focused.taginput-container.is-focusable,.taginput .is-link.taginput-container.is-focusable:active,.taginput .is-link.taginput-container.is-focusable:focus{box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.is-info.input,.is-info.textarea,.taginput .is-info.taginput-container.is-focusable{border-color:#209cee}.is-info.input:active,.is-info.input:focus,.is-info.is-active.input,.is-info.is-active.textarea,.is-info.is-focused.input,.is-info.is-focused.textarea,.is-info.textarea:active,.is-info.textarea:focus,.taginput .is-info.is-active.taginput-container.is-focusable,.taginput .is-info.is-focused.taginput-container.is-focusable,.taginput .is-info.taginput-container.is-focusable:active,.taginput .is-info.taginput-container.is-focusable:focus{box-shadow:0 0 0 .125em rgba(32,156,238,.25)}.is-success.input,.is-success.textarea,.taginput .is-success.taginput-container.is-focusable{border-color:#23d160}.is-success.input:active,.is-success.input:focus,.is-success.is-active.input,.is-success.is-active.textarea,.is-success.is-focused.input,.is-success.is-focused.textarea,.is-success.textarea:active,.is-success.textarea:focus,.taginput .is-success.is-active.taginput-container.is-focusable,.taginput .is-success.is-focused.taginput-container.is-focusable,.taginput .is-success.taginput-container.is-focusable:active,.taginput .is-success.taginput-container.is-focusable:focus{box-shadow:0 0 0 .125em rgba(35,209,96,.25)}.is-warning.input,.is-warning.textarea,.taginput .is-warning.taginput-container.is-focusable{border-color:#ffdd57}.is-warning.input:active,.is-warning.input:focus,.is-warning.is-active.input,.is-warning.is-active.textarea,.is-warning.is-focused.input,.is-warning.is-focused.textarea,.is-warning.textarea:active,.is-warning.textarea:focus,.taginput .is-warning.is-active.taginput-container.is-focusable,.taginput .is-warning.is-focused.taginput-container.is-focusable,.taginput .is-warning.taginput-container.is-focusable:active,.taginput .is-warning.taginput-container.is-focusable:focus{box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.is-danger.input,.is-danger.textarea,.taginput .is-danger.taginput-container.is-focusable{border-color:#ff3860}.is-danger.input:active,.is-danger.input:focus,.is-danger.is-active.input,.is-danger.is-active.textarea,.is-danger.is-focused.input,.is-danger.is-focused.textarea,.is-danger.textarea:active,.is-danger.textarea:focus,.taginput .is-danger.is-active.taginput-container.is-focusable,.taginput .is-danger.is-focused.taginput-container.is-focusable,.taginput .is-danger.taginput-container.is-focusable:active,.taginput .is-danger.taginput-container.is-focusable:focus{box-shadow:0 0 0 .125em rgba(255,56,96,.25)}.is-small.input,.is-small.textarea,.taginput .is-small.taginput-container.is-focusable{border-radius:2px;font-size:.75rem}.is-medium.input,.is-medium.textarea,.taginput .is-medium.taginput-container.is-focusable{font-size:1.25rem}.is-large.input,.is-large.textarea,.taginput .is-large.taginput-container.is-focusable{font-size:1.5rem}.is-fullwidth.input,.is-fullwidth.textarea,.taginput .is-fullwidth.taginput-container.is-focusable{display:block;width:100%}.is-inline.input,.is-inline.textarea,.taginput .is-inline.taginput-container.is-focusable{display:inline;width:auto}.input.is-rounded,.taginput .is-rounded.taginput-container.is-focusable{border-radius:290486px;padding-left:1em;padding-right:1em}.input.is-static,.taginput .is-static.taginput-container.is-focusable{background-color:transparent;border-color:transparent;box-shadow:none;padding-left:0;padding-right:0}.textarea{display:block;max-width:100%;min-width:100%;padding:.625em;resize:vertical}.textarea:not([rows]){max-height:600px;min-height:120px}.textarea[rows]{height:auto}.textarea.has-fixed-size{resize:none}.checkbox,.radio{cursor:pointer;display:inline-block;line-height:1.25;position:relative}.checkbox input,.radio input{cursor:pointer}.checkbox:hover,.radio:hover{color:#363636}.checkbox[disabled],.radio[disabled],fieldset[disabled] .checkbox,fieldset[disabled] .radio{color:#7a7a7a;cursor:not-allowed}.radio+.radio{margin-left:.5em}.select{display:inline-block;max-width:100%;position:relative;vertical-align:top}.select:not(.is-multiple){height:2.25em}.select:not(.is-multiple):not(.is-loading):after{border-color:#ff4653;right:1.125em;z-index:4}.select.is-rounded select{border-radius:290486px;padding-left:1em}.select select{cursor:pointer;display:block;font-size:1em;max-width:100%;outline:none}.select select::-ms-expand{display:none}.select select[disabled]:hover,fieldset[disabled] .select select:hover{border-color:#000}.select select:not([multiple]){padding-right:2.5em}.select select[multiple]{height:auto;padding:0}.select select[multiple] option{padding:.5em 1em}.select:not(.is-multiple):not(.is-loading):hover:after{border-color:#363636}.select.is-white:not(:hover):after,.select.is-white select{border-color:#fff}.select.is-white select.is-hovered,.select.is-white select:hover{border-color:#f2f2f2}.select.is-white select.is-active,.select.is-white select.is-focused,.select.is-white select:active,.select.is-white select:focus{box-shadow:0 0 0 .125em hsla(0,0%,100%,.25)}.select.is-black:not(:hover):after,.select.is-black select{border-color:#0a0a0a}.select.is-black select.is-hovered,.select.is-black select:hover{border-color:#000}.select.is-black select.is-active,.select.is-black select.is-focused,.select.is-black select:active,.select.is-black select:focus{box-shadow:0 0 0 .125em rgba(10,10,10,.25)}.select.is-light:not(:hover):after,.select.is-light select{border-color:#f5f5f5}.select.is-light select.is-hovered,.select.is-light select:hover{border-color:#e8e8e8}.select.is-light select.is-active,.select.is-light select.is-focused,.select.is-light select:active,.select.is-light select:focus{box-shadow:0 0 0 .125em hsla(0,0%,96.1%,.25)}.select.is-dark:not(:hover):after,.select.is-dark select{border-color:#363636}.select.is-dark select.is-hovered,.select.is-dark select:hover{border-color:#292929}.select.is-dark select.is-active,.select.is-dark select.is-focused,.select.is-dark select:active,.select.is-dark select:focus{box-shadow:0 0 0 .125em rgba(54,54,54,.25)}.select.is-primary:not(:hover):after,.select.is-primary select{border-color:#00d1b2}.select.is-primary select.is-hovered,.select.is-primary select:hover{border-color:#00b89c}.select.is-primary select.is-active,.select.is-primary select.is-focused,.select.is-primary select:active,.select.is-primary select:focus{box-shadow:0 0 0 .125em rgba(0,209,178,.25)}.select.is-link:not(:hover):after,.select.is-link select{border-color:#3273dc}.select.is-link select.is-hovered,.select.is-link select:hover{border-color:#2366d1}.select.is-link select.is-active,.select.is-link select.is-focused,.select.is-link select:active,.select.is-link select:focus{box-shadow:0 0 0 .125em rgba(50,115,220,.25)}.select.is-info:not(:hover):after,.select.is-info select{border-color:#209cee}.select.is-info select.is-hovered,.select.is-info select:hover{border-color:#118fe4}.select.is-info select.is-active,.select.is-info select.is-focused,.select.is-info select:active,.select.is-info select:focus{box-shadow:0 0 0 .125em rgba(32,156,238,.25)}.select.is-success:not(:hover):after,.select.is-success select{border-color:#23d160}.select.is-success select.is-hovered,.select.is-success select:hover{border-color:#20bc56}.select.is-success select.is-active,.select.is-success select.is-focused,.select.is-success select:active,.select.is-success select:focus{box-shadow:0 0 0 .125em rgba(35,209,96,.25)}.select.is-warning:not(:hover):after,.select.is-warning select{border-color:#ffdd57}.select.is-warning select.is-hovered,.select.is-warning select:hover{border-color:#ffd83d}.select.is-warning select.is-active,.select.is-warning select.is-focused,.select.is-warning select:active,.select.is-warning select:focus{box-shadow:0 0 0 .125em rgba(255,221,87,.25)}.select.is-danger:not(:hover):after,.select.is-danger select{border-color:#ff3860}.select.is-danger select.is-hovered,.select.is-danger select:hover{border-color:#ff1f4b}.select.is-danger select.is-active,.select.is-danger select.is-focused,.select.is-danger select:active,.select.is-danger select:focus{box-shadow:0 0 0 .125em rgba(255,56,96,.25)}.select.is-small{border-radius:2px;font-size:.75rem}.select.is-medium{font-size:1.25rem}.select.is-large{font-size:1.5rem}.select.is-disabled:after{border-color:#7a7a7a}.select.is-fullwidth,.select.is-fullwidth select{width:100%}.select.is-loading:after{margin-top:0;position:absolute;right:.625em;top:.625em;transform:none}.select.is-loading.is-small:after{font-size:.75rem}.select.is-loading.is-medium:after{font-size:1.25rem}.select.is-loading.is-large:after{font-size:1.5rem}.file{align-items:stretch;display:flex;justify-content:flex-start;position:relative}.file.is-white .file-cta{background-color:#fff;border-color:transparent;color:#0a0a0a}.file.is-white.is-hovered .file-cta,.file.is-white:hover .file-cta{background-color:#f9f9f9;border-color:transparent;color:#0a0a0a}.file.is-white.is-focused .file-cta,.file.is-white:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em hsla(0,0%,100%,.25);color:#0a0a0a}.file.is-white.is-active .file-cta,.file.is-white:active .file-cta{background-color:#f2f2f2;border-color:transparent;color:#0a0a0a}.file.is-black .file-cta{background-color:#0a0a0a;border-color:transparent;color:#fff}.file.is-black.is-hovered .file-cta,.file.is-black:hover .file-cta{background-color:#040404;border-color:transparent;color:#fff}.file.is-black.is-focused .file-cta,.file.is-black:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(10,10,10,.25);color:#fff}.file.is-black.is-active .file-cta,.file.is-black:active .file-cta{background-color:#000;border-color:transparent;color:#fff}.file.is-light .file-cta{background-color:#f5f5f5;border-color:transparent;color:#363636}.file.is-light.is-hovered .file-cta,.file.is-light:hover .file-cta{background-color:#eee;border-color:transparent;color:#363636}.file.is-light.is-focused .file-cta,.file.is-light:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em hsla(0,0%,96.1%,.25);color:#363636}.file.is-light.is-active .file-cta,.file.is-light:active .file-cta{background-color:#e8e8e8;border-color:transparent;color:#363636}.file.is-dark .file-cta{background-color:#363636;border-color:transparent;color:#f5f5f5}.file.is-dark.is-hovered .file-cta,.file.is-dark:hover .file-cta{background-color:#2f2f2f;border-color:transparent;color:#f5f5f5}.file.is-dark.is-focused .file-cta,.file.is-dark:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(54,54,54,.25);color:#f5f5f5}.file.is-dark.is-active .file-cta,.file.is-dark:active .file-cta{background-color:#292929;border-color:transparent;color:#f5f5f5}.file.is-primary .file-cta{background-color:#00d1b2;border-color:transparent;color:#fff}.file.is-primary.is-hovered .file-cta,.file.is-primary:hover .file-cta{background-color:#00c4a7;border-color:transparent;color:#fff}.file.is-primary.is-focused .file-cta,.file.is-primary:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(0,209,178,.25);color:#fff}.file.is-primary.is-active .file-cta,.file.is-primary:active .file-cta{background-color:#00b89c;border-color:transparent;color:#fff}.file.is-link .file-cta{background-color:#3273dc;border-color:transparent;color:#fff}.file.is-link.is-hovered .file-cta,.file.is-link:hover .file-cta{background-color:#276cda;border-color:transparent;color:#fff}.file.is-link.is-focused .file-cta,.file.is-link:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(50,115,220,.25);color:#fff}.file.is-link.is-active .file-cta,.file.is-link:active .file-cta{background-color:#2366d1;border-color:transparent;color:#fff}.file.is-info .file-cta{background-color:#209cee;border-color:transparent;color:#fff}.file.is-info.is-hovered .file-cta,.file.is-info:hover .file-cta{background-color:#1496ed;border-color:transparent;color:#fff}.file.is-info.is-focused .file-cta,.file.is-info:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(32,156,238,.25);color:#fff}.file.is-info.is-active .file-cta,.file.is-info:active .file-cta{background-color:#118fe4;border-color:transparent;color:#fff}.file.is-success .file-cta{background-color:#23d160;border-color:transparent;color:#fff}.file.is-success.is-hovered .file-cta,.file.is-success:hover .file-cta{background-color:#22c65b;border-color:transparent;color:#fff}.file.is-success.is-focused .file-cta,.file.is-success:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(35,209,96,.25);color:#fff}.file.is-success.is-active .file-cta,.file.is-success:active .file-cta{background-color:#20bc56;border-color:transparent;color:#fff}.file.is-warning .file-cta{background-color:#ffdd57;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-warning.is-hovered .file-cta,.file.is-warning:hover .file-cta{background-color:#ffdb4a;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-warning.is-focused .file-cta,.file.is-warning:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(255,221,87,.25);color:rgba(0,0,0,.7)}.file.is-warning.is-active .file-cta,.file.is-warning:active .file-cta{background-color:#ffd83d;border-color:transparent;color:rgba(0,0,0,.7)}.file.is-danger .file-cta{background-color:#ff3860;border-color:transparent;color:#fff}.file.is-danger.is-hovered .file-cta,.file.is-danger:hover .file-cta{background-color:#ff2b56;border-color:transparent;color:#fff}.file.is-danger.is-focused .file-cta,.file.is-danger:focus .file-cta{border-color:transparent;box-shadow:0 0 .5em rgba(255,56,96,.25);color:#fff}.file.is-danger.is-active .file-cta,.file.is-danger:active .file-cta{background-color:#ff1f4b;border-color:transparent;color:#fff}.file.is-small{font-size:.75rem}.file.is-medium{font-size:1.25rem}.file.is-medium .file-icon .fa{font-size:21px}.file.is-large{font-size:1.5rem}.file.is-large .file-icon .fa{font-size:28px}.file.has-name .file-cta{border-bottom-right-radius:0;border-top-right-radius:0}.file.has-name .file-name{border-bottom-left-radius:0;border-top-left-radius:0}.file.has-name.is-empty .file-cta{border-radius:4px}.file.has-name.is-empty .file-name{display:none}.file.is-boxed .file-label{flex-direction:column}.file.is-boxed .file-cta{flex-direction:column;height:auto;padding:1em 3em}.file.is-boxed .file-name{border-width:0 1px 1px}.file.is-boxed .file-icon{height:1.5em;width:1.5em}.file.is-boxed .file-icon .fa{font-size:21px}.file.is-boxed.is-small .file-icon .fa{font-size:14px}.file.is-boxed.is-medium .file-icon .fa{font-size:28px}.file.is-boxed.is-large .file-icon .fa{font-size:35px}.file.is-boxed.has-name .file-cta{border-radius:4px 4px 0 0}.file.is-boxed.has-name .file-name{border-radius:0 0 4px 4px;border-width:0 1px 1px}.file.is-centered{justify-content:center}.file.is-fullwidth .file-label{width:100%}.file.is-fullwidth .file-name{flex-grow:1;max-width:none}.file.is-right{justify-content:flex-end}.file.is-right .file-cta{border-radius:0 4px 4px 0}.file.is-right .file-name{border-radius:4px 0 0 4px;border-width:1px 0 1px 1px;order:-1}.file-label{align-items:stretch;display:flex;cursor:pointer;justify-content:flex-start;overflow:hidden;position:relative}.file-label:hover .file-cta{background-color:#eee;color:#363636}.file-label:hover .file-name{border-color:#ff3947}.file-label:active .file-cta{background-color:#e8e8e8;color:#363636}.file-label:active .file-name{border-color:#ff2d3b}.file-input{height:100%;left:0;opacity:0;outline:none;position:absolute;top:0;width:100%}.file-cta,.file-name{border-color:#ff4653;border-radius:4px;font-size:1em;padding-left:1em;padding-right:1em;white-space:nowrap}.file-cta{background-color:#f5f5f5;color:#4a4a4a}.file-name{border:1px solid #ff4653;border-left-width:0;display:block;max-width:16em;overflow:hidden;text-align:left;text-overflow:ellipsis}.file-icon{align-items:center;display:flex;height:1em;justify-content:center;margin-right:.5em;width:1em}.file-icon .fa{font-size:14px}.label{color:#fff;display:block;font-size:1rem;font-weight:700}.label:not(:last-child){margin-bottom:.5em}.label.is-small{font-size:.75rem}.label.is-medium{font-size:1.25rem}.label.is-large{font-size:1.5rem}.help{display:block;font-size:.75rem;margin-top:.25rem}.help.is-white{color:#fff}.help.is-black{color:#0a0a0a}.help.is-light{color:#f5f5f5}.help.is-dark{color:#363636}.help.is-primary{color:#00d1b2}.help.is-link{color:#3273dc}.help.is-info{color:#209cee}.help.is-success{color:#23d160}.help.is-warning{color:#ffdd57}.help.is-danger{color:#ff3860}.field:not(:last-child){margin-bottom:.75rem}.field.has-addons{display:flex;justify-content:flex-start}.field.has-addons .control:not(:last-child){margin-right:-1px}.field.has-addons .control:not(:first-child):not(:last-child) .button,.field.has-addons .control:not(:first-child):not(:last-child) .input,.field.has-addons .control:not(:first-child):not(:last-child) .select select,.field.has-addons .control:not(:first-child):not(:last-child) .taginput .taginput-container.is-focusable,.taginput .field.has-addons .control:not(:first-child):not(:last-child) .taginput-container.is-focusable{border-radius:0}.field.has-addons .control:first-child:not(:only-child) .button,.field.has-addons .control:first-child:not(:only-child) .input,.field.has-addons .control:first-child:not(:only-child) .select select,.field.has-addons .control:first-child:not(:only-child) .taginput .taginput-container.is-focusable,.taginput .field.has-addons .control:first-child:not(:only-child) .taginput-container.is-focusable{border-bottom-right-radius:0;border-top-right-radius:0}.field.has-addons .control:last-child:not(:only-child) .button,.field.has-addons .control:last-child:not(:only-child) .input,.field.has-addons .control:last-child:not(:only-child) .select select,.field.has-addons .control:last-child:not(:only-child) .taginput .taginput-container.is-focusable,.taginput .field.has-addons .control:last-child:not(:only-child) .taginput-container.is-focusable{border-bottom-left-radius:0;border-top-left-radius:0}.field.has-addons .control .button:not([disabled]).is-hovered,.field.has-addons .control .button:not([disabled]):hover,.field.has-addons .control .input:not([disabled]).is-hovered,.field.has-addons .control .input:not([disabled]):hover,.field.has-addons .control .select select:not([disabled]).is-hovered,.field.has-addons .control .select select:not([disabled]):hover,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]).is-hovered,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]):hover,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]).is-hovered,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]):hover{z-index:2}.field.has-addons .control .button:not([disabled]).is-active,.field.has-addons .control .button:not([disabled]).is-focused,.field.has-addons .control .button:not([disabled]):active,.field.has-addons .control .button:not([disabled]):focus,.field.has-addons .control .input:not([disabled]).is-active,.field.has-addons .control .input:not([disabled]).is-focused,.field.has-addons .control .input:not([disabled]):active,.field.has-addons .control .input:not([disabled]):focus,.field.has-addons .control .select select:not([disabled]).is-active,.field.has-addons .control .select select:not([disabled]).is-focused,.field.has-addons .control .select select:not([disabled]):active,.field.has-addons .control .select select:not([disabled]):focus,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]).is-active,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]).is-focused,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]):active,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]):focus,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]).is-active,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]).is-focused,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]):active,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]):focus{z-index:3}.field.has-addons .control .button:not([disabled]).is-active:hover,.field.has-addons .control .button:not([disabled]).is-focused:hover,.field.has-addons .control .button:not([disabled]):active:hover,.field.has-addons .control .button:not([disabled]):focus:hover,.field.has-addons .control .input:not([disabled]).is-active:hover,.field.has-addons .control .input:not([disabled]).is-focused:hover,.field.has-addons .control .input:not([disabled]):active:hover,.field.has-addons .control .input:not([disabled]):focus:hover,.field.has-addons .control .select select:not([disabled]).is-active:hover,.field.has-addons .control .select select:not([disabled]).is-focused:hover,.field.has-addons .control .select select:not([disabled]):active:hover,.field.has-addons .control .select select:not([disabled]):focus:hover,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]).is-active:hover,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]).is-focused:hover,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]):active:hover,.field.has-addons .control .taginput .taginput-container.is-focusable:not([disabled]):focus:hover,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]).is-active:hover,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]).is-focused:hover,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]):active:hover,.taginput .field.has-addons .control .taginput-container.is-focusable:not([disabled]):focus:hover{z-index:4}.field.has-addons .control.is-expanded{flex-grow:1;flex-shrink:1}.field.has-addons.has-addons-centered{justify-content:center}.field.has-addons.has-addons-right{justify-content:flex-end}.field.has-addons.has-addons-fullwidth .control{flex-grow:1;flex-shrink:0}.field.is-grouped{display:flex;justify-content:flex-start}.field.is-grouped>.control{flex-shrink:0}.field.is-grouped>.control:not(:last-child){margin-bottom:0;margin-right:.75rem}.field.is-grouped>.control.is-expanded{flex-grow:1;flex-shrink:1}.field.is-grouped.is-grouped-centered{justify-content:center}.field.is-grouped.is-grouped-right{justify-content:flex-end}.field.is-grouped.is-grouped-multiline{flex-wrap:wrap}.field.is-grouped.is-grouped-multiline>.control:last-child,.field.is-grouped.is-grouped-multiline>.control:not(:last-child){margin-bottom:.75rem}.field.is-grouped.is-grouped-multiline:last-child{margin-bottom:-.75rem}.field.is-grouped.is-grouped-multiline:not(:last-child){margin-bottom:0}@media print,screen and (min-width:769px){.field.is-horizontal{display:flex}}.field-label .label{font-size:inherit}@media screen and (max-width:768px){.field-label{margin-bottom:.5rem}}@media print,screen and (min-width:769px){.field-label{flex-basis:0;flex-grow:1;flex-shrink:0;margin-right:1.5rem;text-align:right}.field-label.is-small{font-size:.75rem;padding-top:.375em}.field-label.is-normal{padding-top:.375em}.field-label.is-medium{font-size:1.25rem;padding-top:.375em}.field-label.is-large{font-size:1.5rem;padding-top:.375em}}.field-body .field .field{margin-bottom:0}@media print,screen and (min-width:769px){.field-body{display:flex;flex-basis:0;flex-grow:5;flex-shrink:1}.field-body .field{margin-bottom:0}.field-body>.field{flex-shrink:1}.field-body>.field:not(.is-narrow){flex-grow:1}.field-body>.field:not(:last-child){margin-right:.75rem}}.control{box-sizing:border-box;clear:both;font-size:1rem;position:relative;text-align:left}.control.has-icons-left .input:focus~.icon,.control.has-icons-left .select:focus~.icon,.control.has-icons-left .taginput .taginput-container.is-focusable:focus~.icon,.control.has-icons-right .input:focus~.icon,.control.has-icons-right .select:focus~.icon,.control.has-icons-right .taginput .taginput-container.is-focusable:focus~.icon,.taginput .control.has-icons-left .taginput-container.is-focusable:focus~.icon,.taginput .control.has-icons-right .taginput-container.is-focusable:focus~.icon{color:#ff4653}.control.has-icons-left .input.is-small~.icon,.control.has-icons-left .select.is-small~.icon,.control.has-icons-left .taginput .is-small.taginput-container.is-focusable~.icon,.control.has-icons-right .input.is-small~.icon,.control.has-icons-right .select.is-small~.icon,.control.has-icons-right .taginput .is-small.taginput-container.is-focusable~.icon,.taginput .control.has-icons-left .is-small.taginput-container.is-focusable~.icon,.taginput .control.has-icons-right .is-small.taginput-container.is-focusable~.icon{font-size:.75rem}.control.has-icons-left .input.is-medium~.icon,.control.has-icons-left .select.is-medium~.icon,.control.has-icons-left .taginput .is-medium.taginput-container.is-focusable~.icon,.control.has-icons-right .input.is-medium~.icon,.control.has-icons-right .select.is-medium~.icon,.control.has-icons-right .taginput .is-medium.taginput-container.is-focusable~.icon,.taginput .control.has-icons-left .is-medium.taginput-container.is-focusable~.icon,.taginput .control.has-icons-right .is-medium.taginput-container.is-focusable~.icon{font-size:1.25rem}.control.has-icons-left .input.is-large~.icon,.control.has-icons-left .select.is-large~.icon,.control.has-icons-left .taginput .is-large.taginput-container.is-focusable~.icon,.control.has-icons-right .input.is-large~.icon,.control.has-icons-right .select.is-large~.icon,.control.has-icons-right .taginput .is-large.taginput-container.is-focusable~.icon,.taginput .control.has-icons-left .is-large.taginput-container.is-focusable~.icon,.taginput .control.has-icons-right .is-large.taginput-container.is-focusable~.icon{font-size:1.5rem}.control.has-icons-left .icon,.control.has-icons-right .icon{color:#ff4653;height:2.25em;pointer-events:none;position:absolute;top:0;width:2.25em;z-index:4}.control.has-icons-left .input,.control.has-icons-left .select select,.control.has-icons-left .taginput .taginput-container.is-focusable,.taginput .control.has-icons-left .taginput-container.is-focusable{padding-left:2.25em}.control.has-icons-left .icon.is-left{left:0}.control.has-icons-right .input,.control.has-icons-right .select select,.control.has-icons-right .taginput .taginput-container.is-focusable,.taginput .control.has-icons-right .taginput-container.is-focusable{padding-right:2.25em}.control.has-icons-right .icon.is-right{right:0}.control.is-loading:after{position:absolute!important;right:.625em;top:.625em;z-index:4}.control.is-loading.is-small:after{font-size:.75rem}.control.is-loading.is-medium:after{font-size:1.25rem}.control.is-loading.is-large:after{font-size:1.5rem}.breadcrumb{font-size:1rem;white-space:nowrap}.breadcrumb a{align-items:center;color:#ff4653;display:flex;justify-content:center;padding:0 .75em}.breadcrumb a:hover{color:#fff}.breadcrumb li{align-items:center;display:flex}.breadcrumb li:first-child a{padding-left:0}.breadcrumb li.is-active a{color:#363636;cursor:default;pointer-events:none}.breadcrumb li+li:before{color:#b5b5b5;content:\"\\0002f\"}.breadcrumb ol,.breadcrumb ul{align-items:flex-start;display:flex;flex-wrap:wrap;justify-content:flex-start}.breadcrumb .icon:first-child{margin-right:.5em}.breadcrumb .icon:last-child{margin-left:.5em}.breadcrumb.is-centered ol,.breadcrumb.is-centered ul{justify-content:center}.breadcrumb.is-right ol,.breadcrumb.is-right ul{justify-content:flex-end}.breadcrumb.is-small{font-size:.75rem}.breadcrumb.is-medium{font-size:1.25rem}.breadcrumb.is-large{font-size:1.5rem}.breadcrumb.has-arrow-separator li+li:before{content:\"\\02192\"}.breadcrumb.has-bullet-separator li+li:before{content:\"\\02022\"}.breadcrumb.has-dot-separator li+li:before{content:\"\\000b7\"}.breadcrumb.has-succeeds-separator li+li:before{content:\"\\0227B\"}.card{background-color:#222c3c;box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);color:#fff;max-width:100%;position:relative}.card-header{background-color:transparent;align-items:stretch;box-shadow:0 1px 2px rgba(10,10,10,.1);display:flex}.card-header-title{align-items:center;color:#363636;display:flex;flex-grow:1;font-weight:700;padding:.75rem}.card-header-icon,.card-header-title.is-centered{justify-content:center}.card-header-icon{align-items:center;cursor:pointer;display:flex;padding:.75rem}.card-image{display:block;position:relative}.card-content{padding:1.5rem}.card-content,.card-footer{background-color:transparent}.card-footer{border-top:1px solid #ff4653;align-items:stretch;display:flex}.card-footer-item{align-items:center;display:flex;flex-basis:0;flex-grow:1;flex-shrink:0;justify-content:center;padding:.75rem}.card-footer-item:not(:last-child){border-right:1px solid #ff4653}.card .media:not(:last-child){margin-bottom:1.5rem}.dropdown{display:inline-flex;position:relative;vertical-align:top}.dropdown.is-active .dropdown-menu,.dropdown.is-hoverable:hover .dropdown-menu{display:block}.dropdown.is-right .dropdown-menu{left:auto;right:0}.dropdown.is-up .dropdown-menu{bottom:100%;padding-bottom:4px;padding-top:0;top:auto}.dropdown-menu{display:none;left:0;min-width:12rem;padding-top:4px;position:absolute;top:100%;z-index:20}.dropdown-content{background-color:#222c3c;border-radius:4px;box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);padding-bottom:.5rem;padding-top:.5rem}.dropdown-item,.dropdown .dropdown-menu .has-link a{color:#fff;display:block;font-size:.875rem;line-height:1.5;padding:.375rem 1rem;position:relative}.dropdown .dropdown-menu .has-link a,a.dropdown-item,button.dropdown-item{padding-right:3rem;text-align:left;white-space:nowrap;width:100%}.dropdown .dropdown-menu .has-link a:hover,a.dropdown-item:hover,button.dropdown-item:hover{background-color:#171e29;color:#fff}.dropdown .dropdown-menu .has-link a.is-active,a.dropdown-item.is-active,button.dropdown-item.is-active{background-color:#ff4653;color:#fff}.dropdown-divider{background-color:#ff4653;border:none;display:block;height:1px;margin:.5rem 0}.level{align-items:center;justify-content:space-between}.level code{border-radius:4px}.level img{display:inline-block;vertical-align:top}.level.is-mobile,.level.is-mobile .level-left,.level.is-mobile .level-right{display:flex}.level.is-mobile .level-left+.level-right{margin-top:0}.level.is-mobile .level-item:not(:last-child){margin-bottom:0;margin-right:.75rem}.level.is-mobile .level-item:not(.is-narrow){flex-grow:1}@media print,screen and (min-width:769px){.level{display:flex}.level>.level-item:not(.is-narrow){flex-grow:1}}.level-item{align-items:center;display:flex;flex-basis:auto;flex-grow:0;flex-shrink:0;justify-content:center}.level-item .subtitle,.level-item .title{margin-bottom:0}@media screen and (max-width:768px){.level-item:not(:last-child){margin-bottom:.75rem}}.level-left,.level-right{flex-basis:auto;flex-grow:0;flex-shrink:0}.level-left .level-item.is-flexible,.level-right .level-item.is-flexible{flex-grow:1}@media print,screen and (min-width:769px){.level-left .level-item:not(:last-child),.level-right .level-item:not(:last-child){margin-right:.75rem}}.level-left{align-items:center;justify-content:flex-start}@media screen and (max-width:768px){.level-left+.level-right{margin-top:1.5rem}}@media print,screen and (min-width:769px){.level-left{display:flex}}.level-right{align-items:center;justify-content:flex-end}@media print,screen and (min-width:769px){.level-right{display:flex}}.list{background-color:#fff;border-radius:4px;box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1)}.list-item{display:block;padding:.5em 1em}.list-item:not(a){color:#fff}.list-item:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.list-item:last-child{border-bottom-left-radius:4px;border-bottom-right-radius:4px}.list-item:not(:last-child){border-bottom:1px solid #ff4653}.list-item.is-active{background-color:#ff4653;color:#fff}a.list-item{background-color:#000;cursor:pointer}.media{align-items:flex-start;display:flex;text-align:left}.media .content:not(:last-child){margin-bottom:.75rem}.media .media{border-top:1px solid rgba(255,70,83,.5);display:flex;padding-top:.75rem}.media .media .content:not(:last-child),.media .media .control:not(:last-child){margin-bottom:.5rem}.media .media .media{padding-top:.5rem}.media .media .media+.media{margin-top:.5rem}.media+.media{border-top:1px solid rgba(255,70,83,.5);margin-top:1rem;padding-top:1rem}.media.is-large+.media{margin-top:1.5rem;padding-top:1.5rem}.media-left,.media-right{flex-basis:auto;flex-grow:0;flex-shrink:0}.media-left{margin-right:1rem}.media-right{margin-left:1rem}.media-content{flex-basis:auto;flex-grow:1;flex-shrink:1;text-align:left}@media screen and (max-width:768px){.media-content{overflow-x:auto}}.menu{font-size:1rem}.menu.is-small{font-size:.75rem}.menu.is-medium{font-size:1.25rem}.menu.is-large{font-size:1.5rem}.menu-list{line-height:1.25}.menu-list a{border-radius:2px;color:#fff;display:block;padding:.5em .75em}.menu-list a.is-active,.menu-list a:hover{background-color:#34445d;color:#fff}.menu-list li ul{border-left:1px solid #ff4653;margin:.75em;padding-left:.75em}.menu-label{color:#7a7a7a;font-size:.75em;letter-spacing:.1em;text-transform:uppercase}.menu-label:not(:first-child){margin-top:1em}.menu-label:not(:last-child){margin-bottom:1em}.message{background-color:#000;border-radius:4px;font-size:1rem}.message strong{color:currentColor}.message a:not(.button):not(.tag):not(.dropdown-item){color:currentColor;text-decoration:underline}.message.is-small{font-size:.75rem}.message.is-medium{font-size:1.25rem}.message.is-large{font-size:1.5rem}.message.is-white{background-color:#fff}.message.is-white .message-header{background-color:#fff;color:#0a0a0a}.message.is-white .message-body{border-color:#fff;color:#4d4d4d}.message.is-black{background-color:#fafafa}.message.is-black .message-header{background-color:#0a0a0a;color:#fff}.message.is-black .message-body{border-color:#0a0a0a;color:#090909}.message.is-light{background-color:#fafafa}.message.is-light .message-header{background-color:#f5f5f5;color:#363636}.message.is-light .message-body{border-color:#f5f5f5;color:#505050}.message.is-dark{background-color:#fafafa}.message.is-dark .message-header{background-color:#363636;color:#f5f5f5}.message.is-dark .message-body{border-color:#363636;color:#2a2a2a}.message.is-primary{background-color:#f5fffd}.message.is-primary .message-header{background-color:#00d1b2;color:#fff}.message.is-primary .message-body{border-color:#00d1b2;color:#021310}.message.is-link{background-color:#f6f9fe}.message.is-link .message-header{background-color:#3273dc;color:#fff}.message.is-link .message-body{border-color:#3273dc;color:#22509a}.message.is-info{background-color:#f6fbfe}.message.is-info .message-header{background-color:#209cee;color:#fff}.message.is-info .message-body{border-color:#209cee;color:#12537e}.message.is-success{background-color:#f6fef9}.message.is-success .message-header{background-color:#23d160;color:#fff}.message.is-success .message-body{border-color:#23d160;color:#0e301a}.message.is-warning{background-color:#fffdf5}.message.is-warning .message-header{background-color:#ffdd57;color:rgba(0,0,0,.7)}.message.is-warning .message-body{border-color:#ffdd57;color:#3b3108}.message.is-danger{background-color:#fff5f7}.message.is-danger .message-header{background-color:#ff3860;color:#fff}.message.is-danger .message-body{border-color:#ff3860;color:#cd0930}.message-header{align-items:center;background-color:#fff;border-radius:4px 4px 0 0;color:#fff;display:flex;font-weight:700;justify-content:space-between;line-height:1.25;padding:.75em 1em;position:relative}.message-header .delete{flex-grow:0;flex-shrink:0;margin-left:.75em}.message-header+.message-body{border-width:0;border-top-left-radius:0;border-top-right-radius:0}.message-body{border-radius:4px;border:solid #ff4653;border-width:0 0 0 4px;color:#fff;padding:1.25em 1.5em}.message-body code,.message-body pre{background-color:#fff}.message-body pre code{background-color:transparent}.modal{align-items:center;display:none;flex-direction:column;justify-content:center;overflow:hidden;position:fixed;z-index:40}.modal.is-active{display:flex}.modal-background{background-color:rgba(10,10,10,.86)}.modal-card,.modal-content{margin:0 20px;max-height:calc(100vh - 160px);overflow:auto;position:relative;width:100%}@media print,screen and (min-width:769px){.modal-card,.modal-content{margin:0 auto;max-height:calc(100vh - 40px);width:640px}}.modal-close{background:none;height:40px;position:fixed;right:20px;top:20px;width:40px}.modal-card{display:flex;flex-direction:column;max-height:calc(100vh - 40px);overflow:hidden;-ms-overflow-y:visible}.modal-card-foot,.modal-card-head{align-items:center;background-color:#222c3c;display:flex;flex-shrink:0;justify-content:flex-start;padding:20px;position:relative}.modal-card-head{border-bottom:1px solid #ff4653;border-top-left-radius:6px;border-top-right-radius:6px}.modal-card-title{color:#fff;flex-grow:1;flex-shrink:0;font-size:1.5rem;line-height:1}.modal-card-foot{border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:1px solid #ff4653}.modal-card-foot .button:not(:last-child){margin-right:.5em}.modal-card-body{-webkit-overflow-scrolling:touch;background-color:#171e29;flex-grow:1;flex-shrink:1;overflow:auto;padding:20px}.navbar{background-color:#101219;min-height:3.25rem;position:relative;z-index:30}.navbar.is-white{background-color:#fff;color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link,.navbar.is-white .navbar-brand>.navbar-item{color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link.is-active,.navbar.is-white .navbar-brand .navbar-link:focus,.navbar.is-white .navbar-brand .navbar-link:hover,.navbar.is-white .navbar-brand>a.navbar-item.is-active,.navbar.is-white .navbar-brand>a.navbar-item:focus,.navbar.is-white .navbar-brand>a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-brand .navbar-link:after{border-color:#0a0a0a}.navbar.is-white .navbar-burger{color:#0a0a0a}@media screen and (min-width:1024px){.navbar.is-white .navbar-end .navbar-link,.navbar.is-white .navbar-end>.navbar-item,.navbar.is-white .navbar-start .navbar-link,.navbar.is-white .navbar-start>.navbar-item{color:#0a0a0a}.navbar.is-white .navbar-end .navbar-link.is-active,.navbar.is-white .navbar-end .navbar-link:focus,.navbar.is-white .navbar-end .navbar-link:hover,.navbar.is-white .navbar-end>a.navbar-item.is-active,.navbar.is-white .navbar-end>a.navbar-item:focus,.navbar.is-white .navbar-end>a.navbar-item:hover,.navbar.is-white .navbar-start .navbar-link.is-active,.navbar.is-white .navbar-start .navbar-link:focus,.navbar.is-white .navbar-start .navbar-link:hover,.navbar.is-white .navbar-start>a.navbar-item.is-active,.navbar.is-white .navbar-start>a.navbar-item:focus,.navbar.is-white .navbar-start>a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-end .navbar-link:after,.navbar.is-white .navbar-start .navbar-link:after{border-color:#0a0a0a}.navbar.is-white .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-white .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-white .navbar-item.has-dropdown:hover .navbar-link{background-color:#f2f2f2;color:#0a0a0a}.navbar.is-white .navbar-dropdown a.navbar-item.is-active{background-color:#fff;color:#0a0a0a}}.navbar.is-black{background-color:#0a0a0a;color:#fff}.navbar.is-black .navbar-brand .navbar-link,.navbar.is-black .navbar-brand>.navbar-item{color:#fff}.navbar.is-black .navbar-brand .navbar-link.is-active,.navbar.is-black .navbar-brand .navbar-link:focus,.navbar.is-black .navbar-brand .navbar-link:hover,.navbar.is-black .navbar-brand>a.navbar-item.is-active,.navbar.is-black .navbar-brand>a.navbar-item:focus,.navbar.is-black .navbar-brand>a.navbar-item:hover{background-color:#000;color:#fff}.navbar.is-black .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-black .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-black .navbar-end .navbar-link,.navbar.is-black .navbar-end>.navbar-item,.navbar.is-black .navbar-start .navbar-link,.navbar.is-black .navbar-start>.navbar-item{color:#fff}.navbar.is-black .navbar-end .navbar-link.is-active,.navbar.is-black .navbar-end .navbar-link:focus,.navbar.is-black .navbar-end .navbar-link:hover,.navbar.is-black .navbar-end>a.navbar-item.is-active,.navbar.is-black .navbar-end>a.navbar-item:focus,.navbar.is-black .navbar-end>a.navbar-item:hover,.navbar.is-black .navbar-start .navbar-link.is-active,.navbar.is-black .navbar-start .navbar-link:focus,.navbar.is-black .navbar-start .navbar-link:hover,.navbar.is-black .navbar-start>a.navbar-item.is-active,.navbar.is-black .navbar-start>a.navbar-item:focus,.navbar.is-black .navbar-start>a.navbar-item:hover{background-color:#000;color:#fff}.navbar.is-black .navbar-end .navbar-link:after,.navbar.is-black .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-black .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-black .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-black .navbar-item.has-dropdown:hover .navbar-link{background-color:#000;color:#fff}.navbar.is-black .navbar-dropdown a.navbar-item.is-active{background-color:#0a0a0a;color:#fff}}.navbar.is-light{background-color:#f5f5f5;color:#363636}.navbar.is-light .navbar-brand .navbar-link,.navbar.is-light .navbar-brand>.navbar-item{color:#363636}.navbar.is-light .navbar-brand .navbar-link.is-active,.navbar.is-light .navbar-brand .navbar-link:focus,.navbar.is-light .navbar-brand .navbar-link:hover,.navbar.is-light .navbar-brand>a.navbar-item.is-active,.navbar.is-light .navbar-brand>a.navbar-item:focus,.navbar.is-light .navbar-brand>a.navbar-item:hover{background-color:#e8e8e8;color:#363636}.navbar.is-light .navbar-brand .navbar-link:after{border-color:#363636}.navbar.is-light .navbar-burger{color:#363636}@media screen and (min-width:1024px){.navbar.is-light .navbar-end .navbar-link,.navbar.is-light .navbar-end>.navbar-item,.navbar.is-light .navbar-start .navbar-link,.navbar.is-light .navbar-start>.navbar-item{color:#363636}.navbar.is-light .navbar-end .navbar-link.is-active,.navbar.is-light .navbar-end .navbar-link:focus,.navbar.is-light .navbar-end .navbar-link:hover,.navbar.is-light .navbar-end>a.navbar-item.is-active,.navbar.is-light .navbar-end>a.navbar-item:focus,.navbar.is-light .navbar-end>a.navbar-item:hover,.navbar.is-light .navbar-start .navbar-link.is-active,.navbar.is-light .navbar-start .navbar-link:focus,.navbar.is-light .navbar-start .navbar-link:hover,.navbar.is-light .navbar-start>a.navbar-item.is-active,.navbar.is-light .navbar-start>a.navbar-item:focus,.navbar.is-light .navbar-start>a.navbar-item:hover{background-color:#e8e8e8;color:#363636}.navbar.is-light .navbar-end .navbar-link:after,.navbar.is-light .navbar-start .navbar-link:after{border-color:#363636}.navbar.is-light .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-light .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-light .navbar-item.has-dropdown:hover .navbar-link{background-color:#e8e8e8;color:#363636}.navbar.is-light .navbar-dropdown a.navbar-item.is-active{background-color:#f5f5f5;color:#363636}}.navbar.is-dark{background-color:#363636;color:#f5f5f5}.navbar.is-dark .navbar-brand .navbar-link,.navbar.is-dark .navbar-brand>.navbar-item{color:#f5f5f5}.navbar.is-dark .navbar-brand .navbar-link.is-active,.navbar.is-dark .navbar-brand .navbar-link:focus,.navbar.is-dark .navbar-brand .navbar-link:hover,.navbar.is-dark .navbar-brand>a.navbar-item.is-active,.navbar.is-dark .navbar-brand>a.navbar-item:focus,.navbar.is-dark .navbar-brand>a.navbar-item:hover{background-color:#292929;color:#f5f5f5}.navbar.is-dark .navbar-brand .navbar-link:after{border-color:#f5f5f5}.navbar.is-dark .navbar-burger{color:#f5f5f5}@media screen and (min-width:1024px){.navbar.is-dark .navbar-end .navbar-link,.navbar.is-dark .navbar-end>.navbar-item,.navbar.is-dark .navbar-start .navbar-link,.navbar.is-dark .navbar-start>.navbar-item{color:#f5f5f5}.navbar.is-dark .navbar-end .navbar-link.is-active,.navbar.is-dark .navbar-end .navbar-link:focus,.navbar.is-dark .navbar-end .navbar-link:hover,.navbar.is-dark .navbar-end>a.navbar-item.is-active,.navbar.is-dark .navbar-end>a.navbar-item:focus,.navbar.is-dark .navbar-end>a.navbar-item:hover,.navbar.is-dark .navbar-start .navbar-link.is-active,.navbar.is-dark .navbar-start .navbar-link:focus,.navbar.is-dark .navbar-start .navbar-link:hover,.navbar.is-dark .navbar-start>a.navbar-item.is-active,.navbar.is-dark .navbar-start>a.navbar-item:focus,.navbar.is-dark .navbar-start>a.navbar-item:hover{background-color:#292929;color:#f5f5f5}.navbar.is-dark .navbar-end .navbar-link:after,.navbar.is-dark .navbar-start .navbar-link:after{border-color:#f5f5f5}.navbar.is-dark .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-dark .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-dark .navbar-item.has-dropdown:hover .navbar-link{background-color:#292929;color:#f5f5f5}.navbar.is-dark .navbar-dropdown a.navbar-item.is-active{background-color:#363636;color:#f5f5f5}}.navbar.is-primary{background-color:#00d1b2;color:#fff}.navbar.is-primary .navbar-brand .navbar-link,.navbar.is-primary .navbar-brand>.navbar-item{color:#fff}.navbar.is-primary .navbar-brand .navbar-link.is-active,.navbar.is-primary .navbar-brand .navbar-link:focus,.navbar.is-primary .navbar-brand .navbar-link:hover,.navbar.is-primary .navbar-brand>a.navbar-item.is-active,.navbar.is-primary .navbar-brand>a.navbar-item:focus,.navbar.is-primary .navbar-brand>a.navbar-item:hover{background-color:#00b89c;color:#fff}.navbar.is-primary .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-primary .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-primary .navbar-end .navbar-link,.navbar.is-primary .navbar-end>.navbar-item,.navbar.is-primary .navbar-start .navbar-link,.navbar.is-primary .navbar-start>.navbar-item{color:#fff}.navbar.is-primary .navbar-end .navbar-link.is-active,.navbar.is-primary .navbar-end .navbar-link:focus,.navbar.is-primary .navbar-end .navbar-link:hover,.navbar.is-primary .navbar-end>a.navbar-item.is-active,.navbar.is-primary .navbar-end>a.navbar-item:focus,.navbar.is-primary .navbar-end>a.navbar-item:hover,.navbar.is-primary .navbar-start .navbar-link.is-active,.navbar.is-primary .navbar-start .navbar-link:focus,.navbar.is-primary .navbar-start .navbar-link:hover,.navbar.is-primary .navbar-start>a.navbar-item.is-active,.navbar.is-primary .navbar-start>a.navbar-item:focus,.navbar.is-primary .navbar-start>a.navbar-item:hover{background-color:#00b89c;color:#fff}.navbar.is-primary .navbar-end .navbar-link:after,.navbar.is-primary .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-primary .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-primary .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-primary .navbar-item.has-dropdown:hover .navbar-link{background-color:#00b89c;color:#fff}.navbar.is-primary .navbar-dropdown a.navbar-item.is-active{background-color:#00d1b2;color:#fff}}.navbar.is-link{background-color:#3273dc;color:#fff}.navbar.is-link .navbar-brand .navbar-link,.navbar.is-link .navbar-brand>.navbar-item{color:#fff}.navbar.is-link .navbar-brand .navbar-link.is-active,.navbar.is-link .navbar-brand .navbar-link:focus,.navbar.is-link .navbar-brand .navbar-link:hover,.navbar.is-link .navbar-brand>a.navbar-item.is-active,.navbar.is-link .navbar-brand>a.navbar-item:focus,.navbar.is-link .navbar-brand>a.navbar-item:hover{background-color:#2366d1;color:#fff}.navbar.is-link .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-link .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-link .navbar-end .navbar-link,.navbar.is-link .navbar-end>.navbar-item,.navbar.is-link .navbar-start .navbar-link,.navbar.is-link .navbar-start>.navbar-item{color:#fff}.navbar.is-link .navbar-end .navbar-link.is-active,.navbar.is-link .navbar-end .navbar-link:focus,.navbar.is-link .navbar-end .navbar-link:hover,.navbar.is-link .navbar-end>a.navbar-item.is-active,.navbar.is-link .navbar-end>a.navbar-item:focus,.navbar.is-link .navbar-end>a.navbar-item:hover,.navbar.is-link .navbar-start .navbar-link.is-active,.navbar.is-link .navbar-start .navbar-link:focus,.navbar.is-link .navbar-start .navbar-link:hover,.navbar.is-link .navbar-start>a.navbar-item.is-active,.navbar.is-link .navbar-start>a.navbar-item:focus,.navbar.is-link .navbar-start>a.navbar-item:hover{background-color:#2366d1;color:#fff}.navbar.is-link .navbar-end .navbar-link:after,.navbar.is-link .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-link .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-link .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-link .navbar-item.has-dropdown:hover .navbar-link{background-color:#2366d1;color:#fff}.navbar.is-link .navbar-dropdown a.navbar-item.is-active{background-color:#3273dc;color:#fff}}.navbar.is-info{background-color:#209cee;color:#fff}.navbar.is-info .navbar-brand .navbar-link,.navbar.is-info .navbar-brand>.navbar-item{color:#fff}.navbar.is-info .navbar-brand .navbar-link.is-active,.navbar.is-info .navbar-brand .navbar-link:focus,.navbar.is-info .navbar-brand .navbar-link:hover,.navbar.is-info .navbar-brand>a.navbar-item.is-active,.navbar.is-info .navbar-brand>a.navbar-item:focus,.navbar.is-info .navbar-brand>a.navbar-item:hover{background-color:#118fe4;color:#fff}.navbar.is-info .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-info .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-info .navbar-end .navbar-link,.navbar.is-info .navbar-end>.navbar-item,.navbar.is-info .navbar-start .navbar-link,.navbar.is-info .navbar-start>.navbar-item{color:#fff}.navbar.is-info .navbar-end .navbar-link.is-active,.navbar.is-info .navbar-end .navbar-link:focus,.navbar.is-info .navbar-end .navbar-link:hover,.navbar.is-info .navbar-end>a.navbar-item.is-active,.navbar.is-info .navbar-end>a.navbar-item:focus,.navbar.is-info .navbar-end>a.navbar-item:hover,.navbar.is-info .navbar-start .navbar-link.is-active,.navbar.is-info .navbar-start .navbar-link:focus,.navbar.is-info .navbar-start .navbar-link:hover,.navbar.is-info .navbar-start>a.navbar-item.is-active,.navbar.is-info .navbar-start>a.navbar-item:focus,.navbar.is-info .navbar-start>a.navbar-item:hover{background-color:#118fe4;color:#fff}.navbar.is-info .navbar-end .navbar-link:after,.navbar.is-info .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-info .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-info .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-info .navbar-item.has-dropdown:hover .navbar-link{background-color:#118fe4;color:#fff}.navbar.is-info .navbar-dropdown a.navbar-item.is-active{background-color:#209cee;color:#fff}}.navbar.is-success{background-color:#23d160;color:#fff}.navbar.is-success .navbar-brand .navbar-link,.navbar.is-success .navbar-brand>.navbar-item{color:#fff}.navbar.is-success .navbar-brand .navbar-link.is-active,.navbar.is-success .navbar-brand .navbar-link:focus,.navbar.is-success .navbar-brand .navbar-link:hover,.navbar.is-success .navbar-brand>a.navbar-item.is-active,.navbar.is-success .navbar-brand>a.navbar-item:focus,.navbar.is-success .navbar-brand>a.navbar-item:hover{background-color:#20bc56;color:#fff}.navbar.is-success .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-success .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-success .navbar-end .navbar-link,.navbar.is-success .navbar-end>.navbar-item,.navbar.is-success .navbar-start .navbar-link,.navbar.is-success .navbar-start>.navbar-item{color:#fff}.navbar.is-success .navbar-end .navbar-link.is-active,.navbar.is-success .navbar-end .navbar-link:focus,.navbar.is-success .navbar-end .navbar-link:hover,.navbar.is-success .navbar-end>a.navbar-item.is-active,.navbar.is-success .navbar-end>a.navbar-item:focus,.navbar.is-success .navbar-end>a.navbar-item:hover,.navbar.is-success .navbar-start .navbar-link.is-active,.navbar.is-success .navbar-start .navbar-link:focus,.navbar.is-success .navbar-start .navbar-link:hover,.navbar.is-success .navbar-start>a.navbar-item.is-active,.navbar.is-success .navbar-start>a.navbar-item:focus,.navbar.is-success .navbar-start>a.navbar-item:hover{background-color:#20bc56;color:#fff}.navbar.is-success .navbar-end .navbar-link:after,.navbar.is-success .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-success .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-success .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-success .navbar-item.has-dropdown:hover .navbar-link{background-color:#20bc56;color:#fff}.navbar.is-success .navbar-dropdown a.navbar-item.is-active{background-color:#23d160;color:#fff}}.navbar.is-warning{background-color:#ffdd57}.navbar.is-warning,.navbar.is-warning .navbar-brand .navbar-link,.navbar.is-warning .navbar-brand>.navbar-item{color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand .navbar-link.is-active,.navbar.is-warning .navbar-brand .navbar-link:focus,.navbar.is-warning .navbar-brand .navbar-link:hover,.navbar.is-warning .navbar-brand>a.navbar-item.is-active,.navbar.is-warning .navbar-brand>a.navbar-item:focus,.navbar.is-warning .navbar-brand>a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-brand .navbar-link:after{border-color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-burger{color:rgba(0,0,0,.7)}@media screen and (min-width:1024px){.navbar.is-warning .navbar-end .navbar-link,.navbar.is-warning .navbar-end>.navbar-item,.navbar.is-warning .navbar-start .navbar-link,.navbar.is-warning .navbar-start>.navbar-item{color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-end .navbar-link.is-active,.navbar.is-warning .navbar-end .navbar-link:focus,.navbar.is-warning .navbar-end .navbar-link:hover,.navbar.is-warning .navbar-end>a.navbar-item.is-active,.navbar.is-warning .navbar-end>a.navbar-item:focus,.navbar.is-warning .navbar-end>a.navbar-item:hover,.navbar.is-warning .navbar-start .navbar-link.is-active,.navbar.is-warning .navbar-start .navbar-link:focus,.navbar.is-warning .navbar-start .navbar-link:hover,.navbar.is-warning .navbar-start>a.navbar-item.is-active,.navbar.is-warning .navbar-start>a.navbar-item:focus,.navbar.is-warning .navbar-start>a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-end .navbar-link:after,.navbar.is-warning .navbar-start .navbar-link:after{border-color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-warning .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-warning .navbar-item.has-dropdown:hover .navbar-link{background-color:#ffd83d;color:rgba(0,0,0,.7)}.navbar.is-warning .navbar-dropdown a.navbar-item.is-active{background-color:#ffdd57;color:rgba(0,0,0,.7)}}.navbar.is-danger{background-color:#ff3860;color:#fff}.navbar.is-danger .navbar-brand .navbar-link,.navbar.is-danger .navbar-brand>.navbar-item{color:#fff}.navbar.is-danger .navbar-brand .navbar-link.is-active,.navbar.is-danger .navbar-brand .navbar-link:focus,.navbar.is-danger .navbar-brand .navbar-link:hover,.navbar.is-danger .navbar-brand>a.navbar-item.is-active,.navbar.is-danger .navbar-brand>a.navbar-item:focus,.navbar.is-danger .navbar-brand>a.navbar-item:hover{background-color:#ff1f4b;color:#fff}.navbar.is-danger .navbar-brand .navbar-link:after{border-color:#fff}.navbar.is-danger .navbar-burger{color:#fff}@media screen and (min-width:1024px){.navbar.is-danger .navbar-end .navbar-link,.navbar.is-danger .navbar-end>.navbar-item,.navbar.is-danger .navbar-start .navbar-link,.navbar.is-danger .navbar-start>.navbar-item{color:#fff}.navbar.is-danger .navbar-end .navbar-link.is-active,.navbar.is-danger .navbar-end .navbar-link:focus,.navbar.is-danger .navbar-end .navbar-link:hover,.navbar.is-danger .navbar-end>a.navbar-item.is-active,.navbar.is-danger .navbar-end>a.navbar-item:focus,.navbar.is-danger .navbar-end>a.navbar-item:hover,.navbar.is-danger .navbar-start .navbar-link.is-active,.navbar.is-danger .navbar-start .navbar-link:focus,.navbar.is-danger .navbar-start .navbar-link:hover,.navbar.is-danger .navbar-start>a.navbar-item.is-active,.navbar.is-danger .navbar-start>a.navbar-item:focus,.navbar.is-danger .navbar-start>a.navbar-item:hover{background-color:#ff1f4b;color:#fff}.navbar.is-danger .navbar-end .navbar-link:after,.navbar.is-danger .navbar-start .navbar-link:after{border-color:#fff}.navbar.is-danger .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-danger .navbar-item.has-dropdown:focus .navbar-link,.navbar.is-danger .navbar-item.has-dropdown:hover .navbar-link{background-color:#ff1f4b;color:#fff}.navbar.is-danger .navbar-dropdown a.navbar-item.is-active{background-color:#ff3860;color:#fff}}.navbar>.container{align-items:stretch;display:flex;min-height:3.25rem;width:100%}.navbar.has-shadow{box-shadow:0 2px 0 0 #000}.navbar.is-fixed-bottom,.navbar.is-fixed-top{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom{bottom:0}.navbar.is-fixed-bottom.has-shadow{box-shadow:0 -2px 0 0 #000}.navbar.is-fixed-top{top:0}body.has-navbar-fixed-top,html.has-navbar-fixed-top{padding-top:3.25rem}body.has-navbar-fixed-bottom,html.has-navbar-fixed-bottom{padding-bottom:3.25rem}.navbar-brand,.navbar-tabs{align-items:stretch;display:flex;flex-shrink:0;min-height:3.25rem}.navbar-brand a.navbar-item:focus,.navbar-brand a.navbar-item:hover{background-color:transparent}.navbar-tabs{-webkit-overflow-scrolling:touch;max-width:100vw;overflow-x:auto;overflow-y:hidden}.navbar-burger{color:#4a4a4a;cursor:pointer;display:block;height:3.25rem;position:relative;width:3.25rem;margin-left:auto}.navbar-burger span{background-color:currentColor;display:block;height:1px;left:calc(50% - 8px);position:absolute;transform-origin:center;transition-duration:86ms;transition-property:background-color,opacity,transform;transition-timing-function:ease-out;width:16px}.navbar-burger span:first-child{top:calc(50% - 6px)}.navbar-burger span:nth-child(2){top:calc(50% - 1px)}.navbar-burger span:nth-child(3){top:calc(50% + 4px)}.navbar-burger:hover{background-color:rgba(0,0,0,.05)}.navbar-burger.is-active span:first-child{transform:translateY(5px) rotate(45deg)}.navbar-burger.is-active span:nth-child(2){opacity:0}.navbar-burger.is-active span:nth-child(3){transform:translateY(-5px) rotate(-45deg)}.navbar-menu{display:none}.navbar-item,.navbar-link{color:#4a4a4a;display:block;line-height:1.5;padding:.5rem .75rem;position:relative}.navbar-item .icon:only-child,.navbar-link .icon:only-child{margin-left:-.25rem;margin-right:-.25rem}.navbar-link,a.navbar-item{cursor:pointer}.navbar-link.is-active,.navbar-link:focus,.navbar-link:hover,.navbar-link[focus-within],a.navbar-item.is-active,a.navbar-item:focus,a.navbar-item:hover,a.navbar-item[focus-within]{background-color:#101219;color:#ff4653}.navbar-link.is-active,.navbar-link:focus,.navbar-link:focus-within,.navbar-link:hover,a.navbar-item.is-active,a.navbar-item:focus,a.navbar-item:focus-within,a.navbar-item:hover{background-color:#101219;color:#ff4653}.navbar-item{display:block;flex-grow:0;flex-shrink:0}.navbar-item img{max-height:1.75rem}.navbar-item.has-dropdown{padding:0}.navbar-item.is-expanded{flex-grow:1;flex-shrink:1}.navbar-item.is-tab{border-bottom:1px solid transparent;min-height:3.25rem;padding-bottom:calc(.5rem - 1px)}.navbar-item.is-tab:focus,.navbar-item.is-tab:hover{background-color:transparent;border-bottom-color:#ff4653}.navbar-item.is-tab.is-active{background-color:transparent;border-bottom:3px solid #ff4653;color:#ff4653;padding-bottom:calc(.5rem - 3px)}.navbar-content{flex-grow:1;flex-shrink:1}.navbar-link:not(.is-arrowless){padding-right:2.5em}.navbar-link:not(.is-arrowless):after{border-color:#ff4653;margin-top:-.375em;right:1.125em}.navbar-dropdown{font-size:.875rem;padding-bottom:.5rem;padding-top:.5rem}.navbar-dropdown .navbar-item{padding-left:1.5rem;padding-right:1.5rem}.navbar-divider{background-color:#000;border:none;display:none;height:2px;margin:.5rem 0}@media screen and (max-width:1023px){.navbar>.container{display:block}.navbar-brand .navbar-item,.navbar-tabs .navbar-item{align-items:center;display:flex}.navbar-link:after{display:none}.navbar-menu{background-color:#101219;box-shadow:0 8px 16px rgba(10,10,10,.1);padding:.5rem 0}.navbar-menu.is-active{display:block}.navbar.is-fixed-bottom-touch,.navbar.is-fixed-top-touch{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-touch{bottom:0}.navbar.is-fixed-bottom-touch.has-shadow{box-shadow:0 -2px 3px rgba(10,10,10,.1)}.navbar.is-fixed-top-touch{top:0}.navbar.is-fixed-top-touch .navbar-menu,.navbar.is-fixed-top .navbar-menu{-webkit-overflow-scrolling:touch;max-height:calc(100vh - 3.25rem);overflow:auto}body.has-navbar-fixed-top-touch,html.has-navbar-fixed-top-touch{padding-top:3.25rem}body.has-navbar-fixed-bottom-touch,html.has-navbar-fixed-bottom-touch{padding-bottom:3.25rem}}@media screen and (min-width:1024px){.navbar,.navbar-end,.navbar-menu,.navbar-start{align-items:stretch;display:flex}.navbar{min-height:3.25rem}.navbar.is-spaced{padding:1rem 2rem}.navbar.is-spaced .navbar-end,.navbar.is-spaced .navbar-start{align-items:center}.navbar.is-spaced .navbar-link,.navbar.is-spaced a.navbar-item{border-radius:4px}.navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable[focus-within] .navbar-link,.navbar.is-transparent .navbar-link.is-active,.navbar.is-transparent .navbar-link:focus,.navbar.is-transparent .navbar-link:hover,.navbar.is-transparent a.navbar-item.is-active,.navbar.is-transparent a.navbar-item:focus,.navbar.is-transparent a.navbar-item:hover{background-color:transparent!important}.navbar.is-transparent .navbar-item.has-dropdown.is-active .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus-within .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:focus .navbar-link,.navbar.is-transparent .navbar-item.has-dropdown.is-hoverable:hover .navbar-link{background-color:transparent!important}.navbar.is-transparent .navbar-dropdown a.navbar-item:focus,.navbar.is-transparent .navbar-dropdown a.navbar-item:hover{background-color:#000;color:#8c67ef}.navbar.is-transparent .navbar-dropdown a.navbar-item.is-active{background-color:#000;color:#ff4653}.navbar-burger{display:none}.navbar-item,.navbar-link{align-items:center;display:flex}.navbar-item{display:flex}.navbar-item.has-dropdown{align-items:stretch}.navbar-item.has-dropdown-up .navbar-link:after{transform:rotate(135deg) translate(.25em,-.25em)}.navbar-item.has-dropdown-up .navbar-dropdown{border-bottom:2px solid #ff4653;border-radius:6px 6px 0 0;border-top:none;bottom:100%;box-shadow:0 -8px 8px rgba(10,10,10,.1);top:auto}.navbar-item.is-active .navbar-dropdown,.navbar-item.is-hoverable:focus .navbar-dropdown,.navbar-item.is-hoverable:hover .navbar-dropdown,.navbar-item.is-hoverable[focus-within] .navbar-dropdown{display:block}.navbar-item.is-active .navbar-dropdown,.navbar-item.is-hoverable:focus-within .navbar-dropdown,.navbar-item.is-hoverable:focus .navbar-dropdown,.navbar-item.is-hoverable:hover .navbar-dropdown{display:block}.navbar-item.is-active .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed,.navbar-item.is-hoverable[focus-within] .navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-item.is-active .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable[focus-within] .navbar-dropdown{opacity:1;pointer-events:auto;transform:translateY(0)}.navbar-item.is-active .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:focus-within .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:focus .navbar-dropdown.is-boxed,.navbar-item.is-hoverable:hover .navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-item.is-active .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:focus-within .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:focus .navbar-dropdown,.navbar.is-spaced .navbar-item.is-hoverable:hover .navbar-dropdown{opacity:1;pointer-events:auto;transform:translateY(0)}.navbar-menu{flex-grow:1;flex-shrink:0}.navbar-start{justify-content:flex-start;margin-right:auto}.navbar-end{justify-content:flex-end;margin-left:auto}.navbar-dropdown{background-color:#101219;border-bottom-left-radius:6px;border-bottom-right-radius:6px;border-top:2px solid #ff4653;box-shadow:0 8px 8px rgba(10,10,10,.1);display:none;font-size:.875rem;left:0;min-width:100%;position:absolute;top:100%;z-index:20}.navbar-dropdown .navbar-item{padding:.375rem 1rem;white-space:nowrap}.navbar-dropdown a.navbar-item{padding-right:3rem}.navbar-dropdown a.navbar-item:focus,.navbar-dropdown a.navbar-item:hover{background-color:#000;color:#8c67ef}.navbar-dropdown a.navbar-item.is-active{background-color:#000;color:#ff4653}.navbar-dropdown.is-boxed,.navbar.is-spaced .navbar-dropdown{border-radius:6px;border-top:none;box-shadow:0 8px 8px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);display:block;opacity:0;pointer-events:none;top:calc(100% + -4px);transform:translateY(-5px);transition-duration:86ms;transition-property:opacity,transform}.navbar-dropdown.is-right{left:auto;right:0}.navbar-divider{display:block}.container>.navbar .navbar-brand,.navbar>.container .navbar-brand{margin-left:-.75rem}.container>.navbar .navbar-menu,.navbar>.container .navbar-menu{margin-right:-.75rem}.navbar.is-fixed-bottom-desktop,.navbar.is-fixed-top-desktop{left:0;position:fixed;right:0;z-index:30}.navbar.is-fixed-bottom-desktop{bottom:0}.navbar.is-fixed-bottom-desktop.has-shadow{box-shadow:0 -2px 3px rgba(10,10,10,.1)}.navbar.is-fixed-top-desktop{top:0}body.has-navbar-fixed-top-desktop,html.has-navbar-fixed-top-desktop{padding-top:3.25rem}body.has-navbar-fixed-bottom-desktop,html.has-navbar-fixed-bottom-desktop{padding-bottom:3.25rem}body.has-spaced-navbar-fixed-top,html.has-spaced-navbar-fixed-top{padding-top:5.25rem}body.has-spaced-navbar-fixed-bottom,html.has-spaced-navbar-fixed-bottom{padding-bottom:5.25rem}.navbar-link.is-active,a.navbar-item.is-active{color:#0a0a0a}.navbar-link.is-active:not(:focus):not(:hover),a.navbar-item.is-active:not(:focus):not(:hover){background-color:transparent}.navbar-item.has-dropdown.is-active .navbar-link,.navbar-item.has-dropdown:focus .navbar-link,.navbar-item.has-dropdown:hover .navbar-link{background-color:#101219}}.hero.is-fullheight-with-navbar{min-height:calc(100vh - 3.25rem)}.pagination{font-size:1rem;margin:-.25rem}.pagination.is-small{font-size:.75rem}.pagination.is-medium{font-size:1.25rem}.pagination.is-large{font-size:1.5rem}.pagination.is-rounded .pagination-next,.pagination.is-rounded .pagination-previous{padding-left:1em;padding-right:1em;border-radius:290486px}.pagination.is-rounded .pagination-link{border-radius:290486px}.pagination,.pagination-list{align-items:center;display:flex;justify-content:center;text-align:center}.pagination-ellipsis,.pagination-link,.pagination-next,.pagination-previous{font-size:1em;justify-content:center;margin:.25rem;padding-left:.5em;padding-right:.5em;text-align:center}.pagination-link,.pagination-next,.pagination-previous{border-color:#dbdbdb;color:#363636;min-width:2.25em}.pagination-link:hover,.pagination-next:hover,.pagination-previous:hover{border-color:#b5b5b5;color:#fff}.pagination-link:focus,.pagination-next:focus,.pagination-previous:focus{border-color:#000}.pagination-link:active,.pagination-next:active,.pagination-previous:active{box-shadow:inset 0 1px 2px rgba(10,10,10,.2)}.pagination-link[disabled],.pagination-next[disabled],.pagination-previous[disabled]{background-color:#dbdbdb;border-color:#dbdbdb;box-shadow:none;color:#7a7a7a;opacity:.5}.pagination-next,.pagination-previous{padding-left:.75em;padding-right:.75em;white-space:nowrap}.pagination-link.is-current{background-color:#ff4653;border-color:#ff4653;color:#fff}.pagination-ellipsis{color:#b5b5b5;pointer-events:none}.pagination-list{flex-wrap:wrap}@media screen and (max-width:768px){.pagination{flex-wrap:wrap}.pagination-list li,.pagination-next,.pagination-previous{flex-grow:1;flex-shrink:1}}@media print,screen and (min-width:769px){.pagination-list{flex-grow:1;flex-shrink:1;justify-content:flex-start;order:1}.pagination-previous{order:2}.pagination-next{order:3}.pagination{justify-content:space-between}.pagination.is-centered .pagination-previous{order:1}.pagination.is-centered .pagination-list{justify-content:center;order:2}.pagination.is-centered .pagination-next{order:3}.pagination.is-right .pagination-previous{order:1}.pagination.is-right .pagination-next{order:2}.pagination.is-right .pagination-list{justify-content:flex-end;order:3}}.panel{font-size:1rem}.panel:not(:last-child){margin-bottom:1.5rem}.panel-block,.panel-heading,.panel-tabs{border-bottom:1px solid #ff4653;border-left:1px solid #ff4653;border-right:1px solid #ff4653}.panel-block:first-child,.panel-heading:first-child,.panel-tabs:first-child{border-top:1px solid #ff4653}.panel-heading{background-color:#000;border-radius:4px 4px 0 0;color:#363636;font-size:1.25em;font-weight:300;line-height:1.25;padding:.5em .75em}.panel-tabs{align-items:flex-end;display:flex;font-size:.875em;justify-content:center}.panel-tabs a{border-bottom:1px solid #ff4653;margin-bottom:-1px;padding:.5em}.panel-tabs a.is-active{border-bottom-color:#4a4a4a;color:#363636}.panel-list a{color:#fff}.panel-list a:hover{color:#ff4653}.panel-block{align-items:center;color:#363636;display:flex;justify-content:flex-start;padding:.5em .75em}.panel-block input[type=checkbox]{margin-right:.75em}.panel-block>.control{flex-grow:1;flex-shrink:1;width:100%}.panel-block.is-wrapped{flex-wrap:wrap}.panel-block.is-active{border-left-color:#ff4653;color:#363636}.panel-block.is-active .panel-icon{color:#ff4653}a.panel-block,label.panel-block{cursor:pointer}a.panel-block:hover,label.panel-block:hover{background-color:#000}.panel-icon{display:inline-block;font-size:14px;height:1em;line-height:1em;text-align:center;vertical-align:top;width:1em;color:#7a7a7a;margin-right:.75em}.panel-icon .fa{font-size:inherit;line-height:inherit}.tabs{-webkit-overflow-scrolling:touch;align-items:stretch;display:flex;font-size:1rem;justify-content:space-between;overflow:hidden;overflow-x:auto;white-space:nowrap}.tabs a{align-items:center;border-bottom:1px solid #ff4653;color:#fff;display:flex;justify-content:center;margin-bottom:-1px;padding:.5em 1em;vertical-align:top}.tabs a:hover{border-bottom-color:#363636;color:#363636}.tabs li{display:block}.tabs li.is-active a{border-bottom-color:#ff4653;color:#ff4653}.tabs ul{align-items:center;border-bottom:1px solid #ff4653;display:flex;flex-grow:1;flex-shrink:0;justify-content:flex-start}.tabs ul.is-center,.tabs ul.is-left{padding-right:.75em}.tabs ul.is-center{flex:none;justify-content:center;padding-left:.75em}.tabs ul.is-right{justify-content:flex-end;padding-left:.75em}.tabs .icon:first-child{margin-right:.5em}.tabs .icon:last-child{margin-left:.5em}.tabs.is-centered ul{justify-content:center}.tabs.is-right ul{justify-content:flex-end}.tabs.is-boxed a{border:1px solid transparent;border-radius:4px 4px 0 0}.tabs.is-boxed a:hover{background-color:#000;border-bottom-color:#ff4653}.tabs.is-boxed li.is-active a{background-color:#fff;border-color:#ff4653;border-bottom-color:transparent!important}.tabs.is-fullwidth li{flex-grow:1;flex-shrink:0}.tabs.is-toggle a{border:1px solid #ff4653;margin-bottom:0;position:relative}.tabs.is-toggle a:hover{background-color:#000;border-color:#b5b5b5;z-index:2}.tabs.is-toggle li+li{margin-left:-1px}.tabs.is-toggle li:first-child a{border-radius:4px 0 0 4px}.tabs.is-toggle li:last-child a{border-radius:0 4px 4px 0}.tabs.is-toggle li.is-active a{background-color:#ff4653;border-color:#ff4653;color:#fff;z-index:1}.tabs.is-toggle ul{border-bottom:none}.tabs.is-toggle.is-toggle-rounded li:first-child a{border-bottom-left-radius:290486px;border-top-left-radius:290486px;padding-left:1.25em}.tabs.is-toggle.is-toggle-rounded li:last-child a{border-bottom-right-radius:290486px;border-top-right-radius:290486px;padding-right:1.25em}.tabs.is-small{font-size:.75rem}.tabs.is-medium{font-size:1.25rem}.tabs.is-large{font-size:1.5rem}.column{display:block;flex-basis:0;flex-grow:1;flex-shrink:1;padding:.75rem}.columns.is-mobile>.column.is-narrow{flex:none}.columns.is-mobile>.column.is-full{flex:none;width:100%}.columns.is-mobile>.column.is-three-quarters{flex:none;width:75%}.columns.is-mobile>.column.is-two-thirds{flex:none;width:66.6666%}.columns.is-mobile>.column.is-half{flex:none;width:50%}.columns.is-mobile>.column.is-one-third{flex:none;width:33.3333%}.columns.is-mobile>.column.is-one-quarter{flex:none;width:25%}.columns.is-mobile>.column.is-one-fifth{flex:none;width:20%}.columns.is-mobile>.column.is-two-fifths{flex:none;width:40%}.columns.is-mobile>.column.is-three-fifths{flex:none;width:60%}.columns.is-mobile>.column.is-four-fifths{flex:none;width:80%}.columns.is-mobile>.column.is-offset-three-quarters{margin-left:75%}.columns.is-mobile>.column.is-offset-two-thirds{margin-left:66.6666%}.columns.is-mobile>.column.is-offset-half{margin-left:50%}.columns.is-mobile>.column.is-offset-one-third{margin-left:33.3333%}.columns.is-mobile>.column.is-offset-one-quarter{margin-left:25%}.columns.is-mobile>.column.is-offset-one-fifth{margin-left:20%}.columns.is-mobile>.column.is-offset-two-fifths{margin-left:40%}.columns.is-mobile>.column.is-offset-three-fifths{margin-left:60%}.columns.is-mobile>.column.is-offset-four-fifths{margin-left:80%}.columns.is-mobile>.column.is-0{flex:none;width:0}.columns.is-mobile>.column.is-offset-0{margin-left:0}.columns.is-mobile>.column.is-1{flex:none;width:8.33333%}.columns.is-mobile>.column.is-offset-1{margin-left:8.33333%}.columns.is-mobile>.column.is-2{flex:none;width:16.66667%}.columns.is-mobile>.column.is-offset-2{margin-left:16.66667%}.columns.is-mobile>.column.is-3{flex:none;width:25%}.columns.is-mobile>.column.is-offset-3{margin-left:25%}.columns.is-mobile>.column.is-4{flex:none;width:33.33333%}.columns.is-mobile>.column.is-offset-4{margin-left:33.33333%}.columns.is-mobile>.column.is-5{flex:none;width:41.66667%}.columns.is-mobile>.column.is-offset-5{margin-left:41.66667%}.columns.is-mobile>.column.is-6{flex:none;width:50%}.columns.is-mobile>.column.is-offset-6{margin-left:50%}.columns.is-mobile>.column.is-7{flex:none;width:58.33333%}.columns.is-mobile>.column.is-offset-7{margin-left:58.33333%}.columns.is-mobile>.column.is-8{flex:none;width:66.66667%}.columns.is-mobile>.column.is-offset-8{margin-left:66.66667%}.columns.is-mobile>.column.is-9{flex:none;width:75%}.columns.is-mobile>.column.is-offset-9{margin-left:75%}.columns.is-mobile>.column.is-10{flex:none;width:83.33333%}.columns.is-mobile>.column.is-offset-10{margin-left:83.33333%}.columns.is-mobile>.column.is-11{flex:none;width:91.66667%}.columns.is-mobile>.column.is-offset-11{margin-left:91.66667%}.columns.is-mobile>.column.is-12{flex:none;width:100%}.columns.is-mobile>.column.is-offset-12{margin-left:100%}@media screen and (max-width:768px){.column.is-narrow-mobile{flex:none}.column.is-full-mobile{flex:none;width:100%}.column.is-three-quarters-mobile{flex:none;width:75%}.column.is-two-thirds-mobile{flex:none;width:66.6666%}.column.is-half-mobile{flex:none;width:50%}.column.is-one-third-mobile{flex:none;width:33.3333%}.column.is-one-quarter-mobile{flex:none;width:25%}.column.is-one-fifth-mobile{flex:none;width:20%}.column.is-two-fifths-mobile{flex:none;width:40%}.column.is-three-fifths-mobile{flex:none;width:60%}.column.is-four-fifths-mobile{flex:none;width:80%}.column.is-offset-three-quarters-mobile{margin-left:75%}.column.is-offset-two-thirds-mobile{margin-left:66.6666%}.column.is-offset-half-mobile{margin-left:50%}.column.is-offset-one-third-mobile{margin-left:33.3333%}.column.is-offset-one-quarter-mobile{margin-left:25%}.column.is-offset-one-fifth-mobile{margin-left:20%}.column.is-offset-two-fifths-mobile{margin-left:40%}.column.is-offset-three-fifths-mobile{margin-left:60%}.column.is-offset-four-fifths-mobile{margin-left:80%}.column.is-0-mobile{flex:none;width:0}.column.is-offset-0-mobile{margin-left:0}.column.is-1-mobile{flex:none;width:8.33333%}.column.is-offset-1-mobile{margin-left:8.33333%}.column.is-2-mobile{flex:none;width:16.66667%}.column.is-offset-2-mobile{margin-left:16.66667%}.column.is-3-mobile{flex:none;width:25%}.column.is-offset-3-mobile{margin-left:25%}.column.is-4-mobile{flex:none;width:33.33333%}.column.is-offset-4-mobile{margin-left:33.33333%}.column.is-5-mobile{flex:none;width:41.66667%}.column.is-offset-5-mobile{margin-left:41.66667%}.column.is-6-mobile{flex:none;width:50%}.column.is-offset-6-mobile{margin-left:50%}.column.is-7-mobile{flex:none;width:58.33333%}.column.is-offset-7-mobile{margin-left:58.33333%}.column.is-8-mobile{flex:none;width:66.66667%}.column.is-offset-8-mobile{margin-left:66.66667%}.column.is-9-mobile{flex:none;width:75%}.column.is-offset-9-mobile{margin-left:75%}.column.is-10-mobile{flex:none;width:83.33333%}.column.is-offset-10-mobile{margin-left:83.33333%}.column.is-11-mobile{flex:none;width:91.66667%}.column.is-offset-11-mobile{margin-left:91.66667%}.column.is-12-mobile{flex:none;width:100%}.column.is-offset-12-mobile{margin-left:100%}}@media print,screen and (min-width:769px){.column.is-narrow,.column.is-narrow-tablet{flex:none}.column.is-full,.column.is-full-tablet{flex:none;width:100%}.column.is-three-quarters,.column.is-three-quarters-tablet{flex:none;width:75%}.column.is-two-thirds,.column.is-two-thirds-tablet{flex:none;width:66.6666%}.column.is-half,.column.is-half-tablet{flex:none;width:50%}.column.is-one-third,.column.is-one-third-tablet{flex:none;width:33.3333%}.column.is-one-quarter,.column.is-one-quarter-tablet{flex:none;width:25%}.column.is-one-fifth,.column.is-one-fifth-tablet{flex:none;width:20%}.column.is-two-fifths,.column.is-two-fifths-tablet{flex:none;width:40%}.column.is-three-fifths,.column.is-three-fifths-tablet{flex:none;width:60%}.column.is-four-fifths,.column.is-four-fifths-tablet{flex:none;width:80%}.column.is-offset-three-quarters,.column.is-offset-three-quarters-tablet{margin-left:75%}.column.is-offset-two-thirds,.column.is-offset-two-thirds-tablet{margin-left:66.6666%}.column.is-offset-half,.column.is-offset-half-tablet{margin-left:50%}.column.is-offset-one-third,.column.is-offset-one-third-tablet{margin-left:33.3333%}.column.is-offset-one-quarter,.column.is-offset-one-quarter-tablet{margin-left:25%}.column.is-offset-one-fifth,.column.is-offset-one-fifth-tablet{margin-left:20%}.column.is-offset-two-fifths,.column.is-offset-two-fifths-tablet{margin-left:40%}.column.is-offset-three-fifths,.column.is-offset-three-fifths-tablet{margin-left:60%}.column.is-offset-four-fifths,.column.is-offset-four-fifths-tablet{margin-left:80%}.column.is-0,.column.is-0-tablet{flex:none;width:0}.column.is-offset-0,.column.is-offset-0-tablet{margin-left:0}.column.is-1,.column.is-1-tablet{flex:none;width:8.33333%}.column.is-offset-1,.column.is-offset-1-tablet{margin-left:8.33333%}.column.is-2,.column.is-2-tablet{flex:none;width:16.66667%}.column.is-offset-2,.column.is-offset-2-tablet{margin-left:16.66667%}.column.is-3,.column.is-3-tablet{flex:none;width:25%}.column.is-offset-3,.column.is-offset-3-tablet{margin-left:25%}.column.is-4,.column.is-4-tablet{flex:none;width:33.33333%}.column.is-offset-4,.column.is-offset-4-tablet{margin-left:33.33333%}.column.is-5,.column.is-5-tablet{flex:none;width:41.66667%}.column.is-offset-5,.column.is-offset-5-tablet{margin-left:41.66667%}.column.is-6,.column.is-6-tablet{flex:none;width:50%}.column.is-offset-6,.column.is-offset-6-tablet{margin-left:50%}.column.is-7,.column.is-7-tablet{flex:none;width:58.33333%}.column.is-offset-7,.column.is-offset-7-tablet{margin-left:58.33333%}.column.is-8,.column.is-8-tablet{flex:none;width:66.66667%}.column.is-offset-8,.column.is-offset-8-tablet{margin-left:66.66667%}.column.is-9,.column.is-9-tablet{flex:none;width:75%}.column.is-offset-9,.column.is-offset-9-tablet{margin-left:75%}.column.is-10,.column.is-10-tablet{flex:none;width:83.33333%}.column.is-offset-10,.column.is-offset-10-tablet{margin-left:83.33333%}.column.is-11,.column.is-11-tablet{flex:none;width:91.66667%}.column.is-offset-11,.column.is-offset-11-tablet{margin-left:91.66667%}.column.is-12,.column.is-12-tablet{flex:none;width:100%}.column.is-offset-12,.column.is-offset-12-tablet{margin-left:100%}}@media screen and (max-width:1023px){.column.is-narrow-touch{flex:none}.column.is-full-touch{flex:none;width:100%}.column.is-three-quarters-touch{flex:none;width:75%}.column.is-two-thirds-touch{flex:none;width:66.6666%}.column.is-half-touch{flex:none;width:50%}.column.is-one-third-touch{flex:none;width:33.3333%}.column.is-one-quarter-touch{flex:none;width:25%}.column.is-one-fifth-touch{flex:none;width:20%}.column.is-two-fifths-touch{flex:none;width:40%}.column.is-three-fifths-touch{flex:none;width:60%}.column.is-four-fifths-touch{flex:none;width:80%}.column.is-offset-three-quarters-touch{margin-left:75%}.column.is-offset-two-thirds-touch{margin-left:66.6666%}.column.is-offset-half-touch{margin-left:50%}.column.is-offset-one-third-touch{margin-left:33.3333%}.column.is-offset-one-quarter-touch{margin-left:25%}.column.is-offset-one-fifth-touch{margin-left:20%}.column.is-offset-two-fifths-touch{margin-left:40%}.column.is-offset-three-fifths-touch{margin-left:60%}.column.is-offset-four-fifths-touch{margin-left:80%}.column.is-0-touch{flex:none;width:0}.column.is-offset-0-touch{margin-left:0}.column.is-1-touch{flex:none;width:8.33333%}.column.is-offset-1-touch{margin-left:8.33333%}.column.is-2-touch{flex:none;width:16.66667%}.column.is-offset-2-touch{margin-left:16.66667%}.column.is-3-touch{flex:none;width:25%}.column.is-offset-3-touch{margin-left:25%}.column.is-4-touch{flex:none;width:33.33333%}.column.is-offset-4-touch{margin-left:33.33333%}.column.is-5-touch{flex:none;width:41.66667%}.column.is-offset-5-touch{margin-left:41.66667%}.column.is-6-touch{flex:none;width:50%}.column.is-offset-6-touch{margin-left:50%}.column.is-7-touch{flex:none;width:58.33333%}.column.is-offset-7-touch{margin-left:58.33333%}.column.is-8-touch{flex:none;width:66.66667%}.column.is-offset-8-touch{margin-left:66.66667%}.column.is-9-touch{flex:none;width:75%}.column.is-offset-9-touch{margin-left:75%}.column.is-10-touch{flex:none;width:83.33333%}.column.is-offset-10-touch{margin-left:83.33333%}.column.is-11-touch{flex:none;width:91.66667%}.column.is-offset-11-touch{margin-left:91.66667%}.column.is-12-touch{flex:none;width:100%}.column.is-offset-12-touch{margin-left:100%}}@media screen and (min-width:1024px){.column.is-narrow-desktop{flex:none}.column.is-full-desktop{flex:none;width:100%}.column.is-three-quarters-desktop{flex:none;width:75%}.column.is-two-thirds-desktop{flex:none;width:66.6666%}.column.is-half-desktop{flex:none;width:50%}.column.is-one-third-desktop{flex:none;width:33.3333%}.column.is-one-quarter-desktop{flex:none;width:25%}.column.is-one-fifth-desktop{flex:none;width:20%}.column.is-two-fifths-desktop{flex:none;width:40%}.column.is-three-fifths-desktop{flex:none;width:60%}.column.is-four-fifths-desktop{flex:none;width:80%}.column.is-offset-three-quarters-desktop{margin-left:75%}.column.is-offset-two-thirds-desktop{margin-left:66.6666%}.column.is-offset-half-desktop{margin-left:50%}.column.is-offset-one-third-desktop{margin-left:33.3333%}.column.is-offset-one-quarter-desktop{margin-left:25%}.column.is-offset-one-fifth-desktop{margin-left:20%}.column.is-offset-two-fifths-desktop{margin-left:40%}.column.is-offset-three-fifths-desktop{margin-left:60%}.column.is-offset-four-fifths-desktop{margin-left:80%}.column.is-0-desktop{flex:none;width:0}.column.is-offset-0-desktop{margin-left:0}.column.is-1-desktop{flex:none;width:8.33333%}.column.is-offset-1-desktop{margin-left:8.33333%}.column.is-2-desktop{flex:none;width:16.66667%}.column.is-offset-2-desktop{margin-left:16.66667%}.column.is-3-desktop{flex:none;width:25%}.column.is-offset-3-desktop{margin-left:25%}.column.is-4-desktop{flex:none;width:33.33333%}.column.is-offset-4-desktop{margin-left:33.33333%}.column.is-5-desktop{flex:none;width:41.66667%}.column.is-offset-5-desktop{margin-left:41.66667%}.column.is-6-desktop{flex:none;width:50%}.column.is-offset-6-desktop{margin-left:50%}.column.is-7-desktop{flex:none;width:58.33333%}.column.is-offset-7-desktop{margin-left:58.33333%}.column.is-8-desktop{flex:none;width:66.66667%}.column.is-offset-8-desktop{margin-left:66.66667%}.column.is-9-desktop{flex:none;width:75%}.column.is-offset-9-desktop{margin-left:75%}.column.is-10-desktop{flex:none;width:83.33333%}.column.is-offset-10-desktop{margin-left:83.33333%}.column.is-11-desktop{flex:none;width:91.66667%}.column.is-offset-11-desktop{margin-left:91.66667%}.column.is-12-desktop{flex:none;width:100%}.column.is-offset-12-desktop{margin-left:100%}}@media screen and (min-width:1216px){.column.is-narrow-widescreen{flex:none}.column.is-full-widescreen{flex:none;width:100%}.column.is-three-quarters-widescreen{flex:none;width:75%}.column.is-two-thirds-widescreen{flex:none;width:66.6666%}.column.is-half-widescreen{flex:none;width:50%}.column.is-one-third-widescreen{flex:none;width:33.3333%}.column.is-one-quarter-widescreen{flex:none;width:25%}.column.is-one-fifth-widescreen{flex:none;width:20%}.column.is-two-fifths-widescreen{flex:none;width:40%}.column.is-three-fifths-widescreen{flex:none;width:60%}.column.is-four-fifths-widescreen{flex:none;width:80%}.column.is-offset-three-quarters-widescreen{margin-left:75%}.column.is-offset-two-thirds-widescreen{margin-left:66.6666%}.column.is-offset-half-widescreen{margin-left:50%}.column.is-offset-one-third-widescreen{margin-left:33.3333%}.column.is-offset-one-quarter-widescreen{margin-left:25%}.column.is-offset-one-fifth-widescreen{margin-left:20%}.column.is-offset-two-fifths-widescreen{margin-left:40%}.column.is-offset-three-fifths-widescreen{margin-left:60%}.column.is-offset-four-fifths-widescreen{margin-left:80%}.column.is-0-widescreen{flex:none;width:0}.column.is-offset-0-widescreen{margin-left:0}.column.is-1-widescreen{flex:none;width:8.33333%}.column.is-offset-1-widescreen{margin-left:8.33333%}.column.is-2-widescreen{flex:none;width:16.66667%}.column.is-offset-2-widescreen{margin-left:16.66667%}.column.is-3-widescreen{flex:none;width:25%}.column.is-offset-3-widescreen{margin-left:25%}.column.is-4-widescreen{flex:none;width:33.33333%}.column.is-offset-4-widescreen{margin-left:33.33333%}.column.is-5-widescreen{flex:none;width:41.66667%}.column.is-offset-5-widescreen{margin-left:41.66667%}.column.is-6-widescreen{flex:none;width:50%}.column.is-offset-6-widescreen{margin-left:50%}.column.is-7-widescreen{flex:none;width:58.33333%}.column.is-offset-7-widescreen{margin-left:58.33333%}.column.is-8-widescreen{flex:none;width:66.66667%}.column.is-offset-8-widescreen{margin-left:66.66667%}.column.is-9-widescreen{flex:none;width:75%}.column.is-offset-9-widescreen{margin-left:75%}.column.is-10-widescreen{flex:none;width:83.33333%}.column.is-offset-10-widescreen{margin-left:83.33333%}.column.is-11-widescreen{flex:none;width:91.66667%}.column.is-offset-11-widescreen{margin-left:91.66667%}.column.is-12-widescreen{flex:none;width:100%}.column.is-offset-12-widescreen{margin-left:100%}}@media screen and (min-width:1408px){.column.is-narrow-fullhd{flex:none}.column.is-full-fullhd{flex:none;width:100%}.column.is-three-quarters-fullhd{flex:none;width:75%}.column.is-two-thirds-fullhd{flex:none;width:66.6666%}.column.is-half-fullhd{flex:none;width:50%}.column.is-one-third-fullhd{flex:none;width:33.3333%}.column.is-one-quarter-fullhd{flex:none;width:25%}.column.is-one-fifth-fullhd{flex:none;width:20%}.column.is-two-fifths-fullhd{flex:none;width:40%}.column.is-three-fifths-fullhd{flex:none;width:60%}.column.is-four-fifths-fullhd{flex:none;width:80%}.column.is-offset-three-quarters-fullhd{margin-left:75%}.column.is-offset-two-thirds-fullhd{margin-left:66.6666%}.column.is-offset-half-fullhd{margin-left:50%}.column.is-offset-one-third-fullhd{margin-left:33.3333%}.column.is-offset-one-quarter-fullhd{margin-left:25%}.column.is-offset-one-fifth-fullhd{margin-left:20%}.column.is-offset-two-fifths-fullhd{margin-left:40%}.column.is-offset-three-fifths-fullhd{margin-left:60%}.column.is-offset-four-fifths-fullhd{margin-left:80%}.column.is-0-fullhd{flex:none;width:0}.column.is-offset-0-fullhd{margin-left:0}.column.is-1-fullhd{flex:none;width:8.33333%}.column.is-offset-1-fullhd{margin-left:8.33333%}.column.is-2-fullhd{flex:none;width:16.66667%}.column.is-offset-2-fullhd{margin-left:16.66667%}.column.is-3-fullhd{flex:none;width:25%}.column.is-offset-3-fullhd{margin-left:25%}.column.is-4-fullhd{flex:none;width:33.33333%}.column.is-offset-4-fullhd{margin-left:33.33333%}.column.is-5-fullhd{flex:none;width:41.66667%}.column.is-offset-5-fullhd{margin-left:41.66667%}.column.is-6-fullhd{flex:none;width:50%}.column.is-offset-6-fullhd{margin-left:50%}.column.is-7-fullhd{flex:none;width:58.33333%}.column.is-offset-7-fullhd{margin-left:58.33333%}.column.is-8-fullhd{flex:none;width:66.66667%}.column.is-offset-8-fullhd{margin-left:66.66667%}.column.is-9-fullhd{flex:none;width:75%}.column.is-offset-9-fullhd{margin-left:75%}.column.is-10-fullhd{flex:none;width:83.33333%}.column.is-offset-10-fullhd{margin-left:83.33333%}.column.is-11-fullhd{flex:none;width:91.66667%}.column.is-offset-11-fullhd{margin-left:91.66667%}.column.is-12-fullhd{flex:none;width:100%}.column.is-offset-12-fullhd{margin-left:100%}}.columns{margin-left:-.75rem;margin-right:-.75rem;margin-top:-.75rem}.columns:last-child{margin-bottom:-.75rem}.columns:not(:last-child){margin-bottom:.75rem}.columns.is-centered{justify-content:center}.columns.is-gapless{margin-left:0;margin-right:0;margin-top:0}.columns.is-gapless>.column{margin:0;padding:0!important}.columns.is-gapless:not(:last-child){margin-bottom:1.5rem}.columns.is-gapless:last-child{margin-bottom:0}.columns.is-mobile{display:flex}.columns.is-multiline{flex-wrap:wrap}.columns.is-vcentered{align-items:center}@media print,screen and (min-width:769px){.columns:not(.is-desktop){display:flex}}@media screen and (min-width:1024px){.columns.is-desktop{display:flex}}.columns.is-variable{--columnGap:0.75rem;margin-left:calc(-1*var(--columnGap));margin-right:calc(-1*var(--columnGap))}.columns.is-variable .column{padding-left:var(--columnGap);padding-right:var(--columnGap)}.columns.is-variable.is-0{--columnGap:0rem}@media screen and (max-width:768px){.columns.is-variable.is-0-mobile{--columnGap:0rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-0-tablet{--columnGap:0rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-0-tablet-only{--columnGap:0rem}}@media screen and (max-width:1023px){.columns.is-variable.is-0-touch{--columnGap:0rem}}@media screen and (min-width:1024px){.columns.is-variable.is-0-desktop{--columnGap:0rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-0-desktop-only{--columnGap:0rem}}@media screen and (min-width:1216px){.columns.is-variable.is-0-widescreen{--columnGap:0rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-0-widescreen-only{--columnGap:0rem}}@media screen and (min-width:1408px){.columns.is-variable.is-0-fullhd{--columnGap:0rem}}.columns.is-variable.is-1{--columnGap:.25rem}@media screen and (max-width:768px){.columns.is-variable.is-1-mobile{--columnGap:.25rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-1-tablet{--columnGap:.25rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-1-tablet-only{--columnGap:.25rem}}@media screen and (max-width:1023px){.columns.is-variable.is-1-touch{--columnGap:.25rem}}@media screen and (min-width:1024px){.columns.is-variable.is-1-desktop{--columnGap:.25rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-1-desktop-only{--columnGap:.25rem}}@media screen and (min-width:1216px){.columns.is-variable.is-1-widescreen{--columnGap:.25rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-1-widescreen-only{--columnGap:.25rem}}@media screen and (min-width:1408px){.columns.is-variable.is-1-fullhd{--columnGap:.25rem}}.columns.is-variable.is-2{--columnGap:.5rem}@media screen and (max-width:768px){.columns.is-variable.is-2-mobile{--columnGap:.5rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-2-tablet{--columnGap:.5rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-2-tablet-only{--columnGap:.5rem}}@media screen and (max-width:1023px){.columns.is-variable.is-2-touch{--columnGap:.5rem}}@media screen and (min-width:1024px){.columns.is-variable.is-2-desktop{--columnGap:.5rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-2-desktop-only{--columnGap:.5rem}}@media screen and (min-width:1216px){.columns.is-variable.is-2-widescreen{--columnGap:.5rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-2-widescreen-only{--columnGap:.5rem}}@media screen and (min-width:1408px){.columns.is-variable.is-2-fullhd{--columnGap:.5rem}}.columns.is-variable.is-3{--columnGap:.75rem}@media screen and (max-width:768px){.columns.is-variable.is-3-mobile{--columnGap:.75rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-3-tablet{--columnGap:.75rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-3-tablet-only{--columnGap:.75rem}}@media screen and (max-width:1023px){.columns.is-variable.is-3-touch{--columnGap:.75rem}}@media screen and (min-width:1024px){.columns.is-variable.is-3-desktop{--columnGap:.75rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-3-desktop-only{--columnGap:.75rem}}@media screen and (min-width:1216px){.columns.is-variable.is-3-widescreen{--columnGap:.75rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-3-widescreen-only{--columnGap:.75rem}}@media screen and (min-width:1408px){.columns.is-variable.is-3-fullhd{--columnGap:.75rem}}.columns.is-variable.is-4{--columnGap:1rem}@media screen and (max-width:768px){.columns.is-variable.is-4-mobile{--columnGap:1rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-4-tablet{--columnGap:1rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-4-tablet-only{--columnGap:1rem}}@media screen and (max-width:1023px){.columns.is-variable.is-4-touch{--columnGap:1rem}}@media screen and (min-width:1024px){.columns.is-variable.is-4-desktop{--columnGap:1rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-4-desktop-only{--columnGap:1rem}}@media screen and (min-width:1216px){.columns.is-variable.is-4-widescreen{--columnGap:1rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-4-widescreen-only{--columnGap:1rem}}@media screen and (min-width:1408px){.columns.is-variable.is-4-fullhd{--columnGap:1rem}}.columns.is-variable.is-5{--columnGap:1.25rem}@media screen and (max-width:768px){.columns.is-variable.is-5-mobile{--columnGap:1.25rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-5-tablet{--columnGap:1.25rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-5-tablet-only{--columnGap:1.25rem}}@media screen and (max-width:1023px){.columns.is-variable.is-5-touch{--columnGap:1.25rem}}@media screen and (min-width:1024px){.columns.is-variable.is-5-desktop{--columnGap:1.25rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-5-desktop-only{--columnGap:1.25rem}}@media screen and (min-width:1216px){.columns.is-variable.is-5-widescreen{--columnGap:1.25rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-5-widescreen-only{--columnGap:1.25rem}}@media screen and (min-width:1408px){.columns.is-variable.is-5-fullhd{--columnGap:1.25rem}}.columns.is-variable.is-6{--columnGap:1.5rem}@media screen and (max-width:768px){.columns.is-variable.is-6-mobile{--columnGap:1.5rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-6-tablet{--columnGap:1.5rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-6-tablet-only{--columnGap:1.5rem}}@media screen and (max-width:1023px){.columns.is-variable.is-6-touch{--columnGap:1.5rem}}@media screen and (min-width:1024px){.columns.is-variable.is-6-desktop{--columnGap:1.5rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-6-desktop-only{--columnGap:1.5rem}}@media screen and (min-width:1216px){.columns.is-variable.is-6-widescreen{--columnGap:1.5rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-6-widescreen-only{--columnGap:1.5rem}}@media screen and (min-width:1408px){.columns.is-variable.is-6-fullhd{--columnGap:1.5rem}}.columns.is-variable.is-7{--columnGap:1.75rem}@media screen and (max-width:768px){.columns.is-variable.is-7-mobile{--columnGap:1.75rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-7-tablet{--columnGap:1.75rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-7-tablet-only{--columnGap:1.75rem}}@media screen and (max-width:1023px){.columns.is-variable.is-7-touch{--columnGap:1.75rem}}@media screen and (min-width:1024px){.columns.is-variable.is-7-desktop{--columnGap:1.75rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-7-desktop-only{--columnGap:1.75rem}}@media screen and (min-width:1216px){.columns.is-variable.is-7-widescreen{--columnGap:1.75rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-7-widescreen-only{--columnGap:1.75rem}}@media screen and (min-width:1408px){.columns.is-variable.is-7-fullhd{--columnGap:1.75rem}}.columns.is-variable.is-8{--columnGap:2rem}@media screen and (max-width:768px){.columns.is-variable.is-8-mobile{--columnGap:2rem}}@media print,screen and (min-width:769px){.columns.is-variable.is-8-tablet{--columnGap:2rem}}@media screen and (min-width:769px) and (max-width:1023px){.columns.is-variable.is-8-tablet-only{--columnGap:2rem}}@media screen and (max-width:1023px){.columns.is-variable.is-8-touch{--columnGap:2rem}}@media screen and (min-width:1024px){.columns.is-variable.is-8-desktop{--columnGap:2rem}}@media screen and (min-width:1024px) and (max-width:1215px){.columns.is-variable.is-8-desktop-only{--columnGap:2rem}}@media screen and (min-width:1216px){.columns.is-variable.is-8-widescreen{--columnGap:2rem}}@media screen and (min-width:1216px) and (max-width:1407px){.columns.is-variable.is-8-widescreen-only{--columnGap:2rem}}@media screen and (min-width:1408px){.columns.is-variable.is-8-fullhd{--columnGap:2rem}}.tile{align-items:stretch;display:block;flex-basis:0;flex-grow:1;flex-shrink:1;min-height:-webkit-min-content;min-height:-moz-min-content;min-height:min-content}.tile.is-ancestor{margin-left:-.75rem;margin-right:-.75rem;margin-top:-.75rem}.tile.is-ancestor:last-child{margin-bottom:-.75rem}.tile.is-ancestor:not(:last-child){margin-bottom:.75rem}.tile.is-child{margin:0!important}.tile.is-parent{padding:.75rem}.tile.is-vertical{flex-direction:column}.tile.is-vertical>.tile.is-child:not(:last-child){margin-bottom:1.5rem!important}@media print,screen and (min-width:769px){.tile:not(.is-child){display:flex}.tile.is-1{flex:none;width:8.33333%}.tile.is-2{flex:none;width:16.66667%}.tile.is-3{flex:none;width:25%}.tile.is-4{flex:none;width:33.33333%}.tile.is-5{flex:none;width:41.66667%}.tile.is-6{flex:none;width:50%}.tile.is-7{flex:none;width:58.33333%}.tile.is-8{flex:none;width:66.66667%}.tile.is-9{flex:none;width:75%}.tile.is-10{flex:none;width:83.33333%}.tile.is-11{flex:none;width:91.66667%}.tile.is-12{flex:none;width:100%}}.hero{align-items:stretch;display:flex;flex-direction:column;justify-content:space-between}.hero .navbar{background:none}.hero .tabs ul{border-bottom:none}.hero.is-white{background-color:#fff;color:#0a0a0a}.hero.is-white a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-white strong{color:inherit}.hero.is-white .title{color:#0a0a0a}.hero.is-white .subtitle{color:rgba(10,10,10,.9)}.hero.is-white .subtitle a:not(.button),.hero.is-white .subtitle strong{color:#0a0a0a}@media screen and (max-width:1023px){.hero.is-white .navbar-menu{background-color:#fff}}.hero.is-white .navbar-item,.hero.is-white .navbar-link{color:rgba(10,10,10,.7)}.hero.is-white .navbar-link.is-active,.hero.is-white .navbar-link:hover,.hero.is-white a.navbar-item.is-active,.hero.is-white a.navbar-item:hover{background-color:#f2f2f2;color:#0a0a0a}.hero.is-white .tabs a{color:#0a0a0a;opacity:.9}.hero.is-white .tabs a:hover,.hero.is-white .tabs li.is-active a{opacity:1}.hero.is-white .tabs.is-boxed a,.hero.is-white .tabs.is-toggle a{color:#0a0a0a}.hero.is-white .tabs.is-boxed a:hover,.hero.is-white .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-white .tabs.is-boxed li.is-active a,.hero.is-white .tabs.is-boxed li.is-active a:hover,.hero.is-white .tabs.is-toggle li.is-active a,.hero.is-white .tabs.is-toggle li.is-active a:hover{background-color:#0a0a0a;border-color:#0a0a0a;color:#fff}.hero.is-white.is-bold{background-image:linear-gradient(141deg,#e6e6e6,#fff 71%,#fff)}@media screen and (max-width:768px){.hero.is-white.is-bold .navbar-menu{background-image:linear-gradient(141deg,#e6e6e6,#fff 71%,#fff)}}.hero.is-black{background-color:#0a0a0a;color:#fff}.hero.is-black a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-black strong{color:inherit}.hero.is-black .title{color:#fff}.hero.is-black .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-black .subtitle a:not(.button),.hero.is-black .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-black .navbar-menu{background-color:#0a0a0a}}.hero.is-black .navbar-item,.hero.is-black .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-black .navbar-link.is-active,.hero.is-black .navbar-link:hover,.hero.is-black a.navbar-item.is-active,.hero.is-black a.navbar-item:hover{background-color:#000;color:#fff}.hero.is-black .tabs a{color:#fff;opacity:.9}.hero.is-black .tabs a:hover,.hero.is-black .tabs li.is-active a{opacity:1}.hero.is-black .tabs.is-boxed a,.hero.is-black .tabs.is-toggle a{color:#fff}.hero.is-black .tabs.is-boxed a:hover,.hero.is-black .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-black .tabs.is-boxed li.is-active a,.hero.is-black .tabs.is-boxed li.is-active a:hover,.hero.is-black .tabs.is-toggle li.is-active a,.hero.is-black .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#0a0a0a}.hero.is-black.is-bold{background-image:linear-gradient(141deg,#000,#0a0a0a 71%,#181616)}@media screen and (max-width:768px){.hero.is-black.is-bold .navbar-menu{background-image:linear-gradient(141deg,#000,#0a0a0a 71%,#181616)}}.hero.is-light{background-color:#f5f5f5;color:#363636}.hero.is-light a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-light strong{color:inherit}.hero.is-light .title{color:#363636}.hero.is-light .subtitle{color:rgba(54,54,54,.9)}.hero.is-light .subtitle a:not(.button),.hero.is-light .subtitle strong{color:#363636}@media screen and (max-width:1023px){.hero.is-light .navbar-menu{background-color:#f5f5f5}}.hero.is-light .navbar-item,.hero.is-light .navbar-link{color:rgba(54,54,54,.7)}.hero.is-light .navbar-link.is-active,.hero.is-light .navbar-link:hover,.hero.is-light a.navbar-item.is-active,.hero.is-light a.navbar-item:hover{background-color:#e8e8e8;color:#363636}.hero.is-light .tabs a{color:#363636;opacity:.9}.hero.is-light .tabs a:hover,.hero.is-light .tabs li.is-active a{opacity:1}.hero.is-light .tabs.is-boxed a,.hero.is-light .tabs.is-toggle a{color:#363636}.hero.is-light .tabs.is-boxed a:hover,.hero.is-light .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-light .tabs.is-boxed li.is-active a,.hero.is-light .tabs.is-boxed li.is-active a:hover,.hero.is-light .tabs.is-toggle li.is-active a,.hero.is-light .tabs.is-toggle li.is-active a:hover{background-color:#363636;border-color:#363636;color:#f5f5f5}.hero.is-light.is-bold{background-image:linear-gradient(141deg,#dfd8d9,#f5f5f5 71%,#fff)}@media screen and (max-width:768px){.hero.is-light.is-bold .navbar-menu{background-image:linear-gradient(141deg,#dfd8d9,#f5f5f5 71%,#fff)}}.hero.is-dark{background-color:#363636;color:#f5f5f5}.hero.is-dark a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-dark strong{color:inherit}.hero.is-dark .title{color:#f5f5f5}.hero.is-dark .subtitle{color:hsla(0,0%,96.1%,.9)}.hero.is-dark .subtitle a:not(.button),.hero.is-dark .subtitle strong{color:#f5f5f5}@media screen and (max-width:1023px){.hero.is-dark .navbar-menu{background-color:#363636}}.hero.is-dark .navbar-item,.hero.is-dark .navbar-link{color:hsla(0,0%,96.1%,.7)}.hero.is-dark .navbar-link.is-active,.hero.is-dark .navbar-link:hover,.hero.is-dark a.navbar-item.is-active,.hero.is-dark a.navbar-item:hover{background-color:#292929;color:#f5f5f5}.hero.is-dark .tabs a{color:#f5f5f5;opacity:.9}.hero.is-dark .tabs a:hover,.hero.is-dark .tabs li.is-active a{opacity:1}.hero.is-dark .tabs.is-boxed a,.hero.is-dark .tabs.is-toggle a{color:#f5f5f5}.hero.is-dark .tabs.is-boxed a:hover,.hero.is-dark .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-dark .tabs.is-boxed li.is-active a,.hero.is-dark .tabs.is-boxed li.is-active a:hover,.hero.is-dark .tabs.is-toggle li.is-active a,.hero.is-dark .tabs.is-toggle li.is-active a:hover{background-color:#f5f5f5;border-color:#f5f5f5;color:#363636}.hero.is-dark.is-bold{background-image:linear-gradient(141deg,#1f191a,#363636 71%,#46403f)}@media screen and (max-width:768px){.hero.is-dark.is-bold .navbar-menu{background-image:linear-gradient(141deg,#1f191a,#363636 71%,#46403f)}}.hero.is-primary{background-color:#00d1b2;color:#fff}.hero.is-primary a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-primary strong{color:inherit}.hero.is-primary .title{color:#fff}.hero.is-primary .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-primary .subtitle a:not(.button),.hero.is-primary .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-primary .navbar-menu{background-color:#00d1b2}}.hero.is-primary .navbar-item,.hero.is-primary .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-primary .navbar-link.is-active,.hero.is-primary .navbar-link:hover,.hero.is-primary a.navbar-item.is-active,.hero.is-primary a.navbar-item:hover{background-color:#00b89c;color:#fff}.hero.is-primary .tabs a{color:#fff;opacity:.9}.hero.is-primary .tabs a:hover,.hero.is-primary .tabs li.is-active a{opacity:1}.hero.is-primary .tabs.is-boxed a,.hero.is-primary .tabs.is-toggle a{color:#fff}.hero.is-primary .tabs.is-boxed a:hover,.hero.is-primary .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-primary .tabs.is-boxed li.is-active a,.hero.is-primary .tabs.is-boxed li.is-active a:hover,.hero.is-primary .tabs.is-toggle li.is-active a,.hero.is-primary .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#00d1b2}.hero.is-primary.is-bold{background-image:linear-gradient(141deg,#009e6c,#00d1b2 71%,#00e7eb)}@media screen and (max-width:768px){.hero.is-primary.is-bold .navbar-menu{background-image:linear-gradient(141deg,#009e6c,#00d1b2 71%,#00e7eb)}}.hero.is-link{background-color:#3273dc;color:#fff}.hero.is-link a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-link strong{color:inherit}.hero.is-link .title{color:#fff}.hero.is-link .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-link .subtitle a:not(.button),.hero.is-link .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-link .navbar-menu{background-color:#3273dc}}.hero.is-link .navbar-item,.hero.is-link .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-link .navbar-link.is-active,.hero.is-link .navbar-link:hover,.hero.is-link a.navbar-item.is-active,.hero.is-link a.navbar-item:hover{background-color:#2366d1;color:#fff}.hero.is-link .tabs a{color:#fff;opacity:.9}.hero.is-link .tabs a:hover,.hero.is-link .tabs li.is-active a{opacity:1}.hero.is-link .tabs.is-boxed a,.hero.is-link .tabs.is-toggle a{color:#fff}.hero.is-link .tabs.is-boxed a:hover,.hero.is-link .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-link .tabs.is-boxed li.is-active a,.hero.is-link .tabs.is-boxed li.is-active a:hover,.hero.is-link .tabs.is-toggle li.is-active a,.hero.is-link .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#3273dc}.hero.is-link.is-bold{background-image:linear-gradient(141deg,#1577c6,#3273dc 71%,#4366e5)}@media screen and (max-width:768px){.hero.is-link.is-bold .navbar-menu{background-image:linear-gradient(141deg,#1577c6,#3273dc 71%,#4366e5)}}.hero.is-info{background-color:#209cee;color:#fff}.hero.is-info a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-info strong{color:inherit}.hero.is-info .title{color:#fff}.hero.is-info .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-info .subtitle a:not(.button),.hero.is-info .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-info .navbar-menu{background-color:#209cee}}.hero.is-info .navbar-item,.hero.is-info .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-info .navbar-link.is-active,.hero.is-info .navbar-link:hover,.hero.is-info a.navbar-item.is-active,.hero.is-info a.navbar-item:hover{background-color:#118fe4;color:#fff}.hero.is-info .tabs a{color:#fff;opacity:.9}.hero.is-info .tabs a:hover,.hero.is-info .tabs li.is-active a{opacity:1}.hero.is-info .tabs.is-boxed a,.hero.is-info .tabs.is-toggle a{color:#fff}.hero.is-info .tabs.is-boxed a:hover,.hero.is-info .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-info .tabs.is-boxed li.is-active a,.hero.is-info .tabs.is-boxed li.is-active a:hover,.hero.is-info .tabs.is-toggle li.is-active a,.hero.is-info .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#209cee}.hero.is-info.is-bold{background-image:linear-gradient(141deg,#04a6d7,#209cee 71%,#3287f5)}@media screen and (max-width:768px){.hero.is-info.is-bold .navbar-menu{background-image:linear-gradient(141deg,#04a6d7,#209cee 71%,#3287f5)}}.hero.is-success{background-color:#23d160;color:#fff}.hero.is-success a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-success strong{color:inherit}.hero.is-success .title{color:#fff}.hero.is-success .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-success .subtitle a:not(.button),.hero.is-success .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-success .navbar-menu{background-color:#23d160}}.hero.is-success .navbar-item,.hero.is-success .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-success .navbar-link.is-active,.hero.is-success .navbar-link:hover,.hero.is-success a.navbar-item.is-active,.hero.is-success a.navbar-item:hover{background-color:#20bc56;color:#fff}.hero.is-success .tabs a{color:#fff;opacity:.9}.hero.is-success .tabs a:hover,.hero.is-success .tabs li.is-active a{opacity:1}.hero.is-success .tabs.is-boxed a,.hero.is-success .tabs.is-toggle a{color:#fff}.hero.is-success .tabs.is-boxed a:hover,.hero.is-success .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-success .tabs.is-boxed li.is-active a,.hero.is-success .tabs.is-boxed li.is-active a:hover,.hero.is-success .tabs.is-toggle li.is-active a,.hero.is-success .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#23d160}.hero.is-success.is-bold{background-image:linear-gradient(141deg,#12af2f,#23d160 71%,#2ce28a)}@media screen and (max-width:768px){.hero.is-success.is-bold .navbar-menu{background-image:linear-gradient(141deg,#12af2f,#23d160 71%,#2ce28a)}}.hero.is-warning{background-color:#ffdd57;color:rgba(0,0,0,.7)}.hero.is-warning a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-warning strong{color:inherit}.hero.is-warning .title{color:rgba(0,0,0,.7)}.hero.is-warning .subtitle{color:rgba(0,0,0,.9)}.hero.is-warning .subtitle a:not(.button),.hero.is-warning .subtitle strong{color:rgba(0,0,0,.7)}@media screen and (max-width:1023px){.hero.is-warning .navbar-menu{background-color:#ffdd57}}.hero.is-warning .navbar-item,.hero.is-warning .navbar-link{color:rgba(0,0,0,.7)}.hero.is-warning .navbar-link.is-active,.hero.is-warning .navbar-link:hover,.hero.is-warning a.navbar-item.is-active,.hero.is-warning a.navbar-item:hover{background-color:#ffd83d;color:rgba(0,0,0,.7)}.hero.is-warning .tabs a{color:rgba(0,0,0,.7);opacity:.9}.hero.is-warning .tabs a:hover,.hero.is-warning .tabs li.is-active a{opacity:1}.hero.is-warning .tabs.is-boxed a,.hero.is-warning .tabs.is-toggle a{color:rgba(0,0,0,.7)}.hero.is-warning .tabs.is-boxed a:hover,.hero.is-warning .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-warning .tabs.is-boxed li.is-active a,.hero.is-warning .tabs.is-boxed li.is-active a:hover,.hero.is-warning .tabs.is-toggle li.is-active a,.hero.is-warning .tabs.is-toggle li.is-active a:hover{background-color:rgba(0,0,0,.7);border-color:rgba(0,0,0,.7);color:#ffdd57}.hero.is-warning.is-bold{background-image:linear-gradient(141deg,#ffaf24,#ffdd57 71%,#fffa70)}@media screen and (max-width:768px){.hero.is-warning.is-bold .navbar-menu{background-image:linear-gradient(141deg,#ffaf24,#ffdd57 71%,#fffa70)}}.hero.is-danger{background-color:#ff3860;color:#fff}.hero.is-danger a:not(.button):not(.dropdown-item):not(.tag):not(.pagination-link.is-current),.hero.is-danger strong{color:inherit}.hero.is-danger .title{color:#fff}.hero.is-danger .subtitle{color:hsla(0,0%,100%,.9)}.hero.is-danger .subtitle a:not(.button),.hero.is-danger .subtitle strong{color:#fff}@media screen and (max-width:1023px){.hero.is-danger .navbar-menu{background-color:#ff3860}}.hero.is-danger .navbar-item,.hero.is-danger .navbar-link{color:hsla(0,0%,100%,.7)}.hero.is-danger .navbar-link.is-active,.hero.is-danger .navbar-link:hover,.hero.is-danger a.navbar-item.is-active,.hero.is-danger a.navbar-item:hover{background-color:#ff1f4b;color:#fff}.hero.is-danger .tabs a{color:#fff;opacity:.9}.hero.is-danger .tabs a:hover,.hero.is-danger .tabs li.is-active a{opacity:1}.hero.is-danger .tabs.is-boxed a,.hero.is-danger .tabs.is-toggle a{color:#fff}.hero.is-danger .tabs.is-boxed a:hover,.hero.is-danger .tabs.is-toggle a:hover{background-color:rgba(10,10,10,.1)}.hero.is-danger .tabs.is-boxed li.is-active a,.hero.is-danger .tabs.is-boxed li.is-active a:hover,.hero.is-danger .tabs.is-toggle li.is-active a,.hero.is-danger .tabs.is-toggle li.is-active a:hover{background-color:#fff;border-color:#fff;color:#ff3860}.hero.is-danger.is-bold{background-image:linear-gradient(141deg,#ff0561,#ff3860 71%,#ff5257)}@media screen and (max-width:768px){.hero.is-danger.is-bold .navbar-menu{background-image:linear-gradient(141deg,#ff0561,#ff3860 71%,#ff5257)}}.hero.is-small .hero-body{padding-bottom:1.5rem;padding-top:1.5rem}@media print,screen and (min-width:769px){.hero.is-medium .hero-body{padding-bottom:9rem;padding-top:9rem}}@media print,screen and (min-width:769px){.hero.is-large .hero-body{padding-bottom:18rem;padding-top:18rem}}.hero.is-fullheight-with-navbar .hero-body,.hero.is-fullheight .hero-body,.hero.is-halfheight .hero-body{align-items:center;display:flex}.hero.is-fullheight-with-navbar .hero-body>.container,.hero.is-fullheight .hero-body>.container,.hero.is-halfheight .hero-body>.container{flex-grow:1;flex-shrink:1}.hero.is-halfheight{min-height:50vh}.hero.is-fullheight{min-height:100vh}.hero-video{overflow:hidden}.hero-video video{left:50%;min-height:100%;min-width:100%;position:absolute;top:50%;transform:translate3d(-50%,-50%,0)}.hero-video.is-transparent{opacity:.3}@media screen and (max-width:768px){.hero-video{display:none}}.hero-buttons{margin-top:1.5rem}@media screen and (max-width:768px){.hero-buttons .button{display:flex}.hero-buttons .button:not(:last-child){margin-bottom:.75rem}}@media print,screen and (min-width:769px){.hero-buttons{display:flex;justify-content:center}.hero-buttons .button:not(:last-child){margin-right:1.5rem}}.hero-foot,.hero-head{flex-grow:0;flex-shrink:0}.hero-body{flex-grow:1;flex-shrink:0}.hero-body,.section{padding:3rem 1.5rem}@media screen and (min-width:1024px){.section.is-medium{padding:9rem 1.5rem}.section.is-large{padding:18rem 1.5rem}}.footer{background-color:#fafafa;padding:3rem 1.5rem 6rem}.is-noscroll{position:fixed;overflow-y:hidden;width:100%;bottom:0}@-webkit-keyframes fadeOut{0%{opacity:1}to{opacity:0}}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.fadeOut{-webkit-animation-name:fadeOut;animation-name:fadeOut}@-webkit-keyframes fadeOutDown{0%{opacity:1}to{opacity:0;transform:translate3d(0,100%,0)}}@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;transform:translate3d(0,100%,0)}}.fadeOutDown{-webkit-animation-name:fadeOutDown;animation-name:fadeOutDown}@-webkit-keyframes fadeOutUp{0%{opacity:1}to{opacity:0;transform:translate3d(0,-100%,0)}}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;transform:translate3d(0,-100%,0)}}.fadeOutUp{-webkit-animation-name:fadeOutUp;animation-name:fadeOutUp}@-webkit-keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.fadeIn{-webkit-animation-name:fadeIn;animation-name:fadeIn}@-webkit-keyframes fadeInDown{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:none}}@keyframes fadeInDown{0%{opacity:0;transform:translate3d(0,-100%,0)}to{opacity:1;transform:none}}.fadeInDown{-webkit-animation-name:fadeInDown;animation-name:fadeInDown}@-webkit-keyframes fadeInUp{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:none}}@keyframes fadeInUp{0%{opacity:0;transform:translate3d(0,100%,0)}to{opacity:1;transform:none}}.fadeInUp{-webkit-animation-name:fadeInUp;animation-name:fadeInUp}.fade-enter-active,.fade-leave-active{transition:opacity .15s ease-out}.fade-enter,.fade-leave-to{opacity:0}.zoom-in-enter-active,.zoom-in-leave-active{transition:opacity .15s ease-out}.zoom-in-enter-active .animation-content,.zoom-in-leave-active .animation-content{transition:transform .15s ease-out}.zoom-in-enter,.zoom-in-leave-active{opacity:0}.zoom-in-enter .animation-content,.zoom-in-leave-active .animation-content{transform:scale(.95)}.zoom-out-enter-active,.zoom-out-leave-active{transition:opacity .15s ease-out}.zoom-out-enter-active .animation-content,.zoom-out-leave-active .animation-content{transition:transform .15s ease-out}.zoom-out-enter,.zoom-out-leave-active{opacity:0}.zoom-out-enter .animation-content,.zoom-out-leave-active .animation-content{transform:scale(1.05)}.slide-next-enter-active,.slide-next-leave-active,.slide-prev-enter-active,.slide-prev-leave-active{transition:transform .25s cubic-bezier(.785,.135,.15,.86)}.slide-next-enter,.slide-prev-leave-to{transform:translate3d(-100%,0,0);position:absolute;width:100%}.slide-next-leave-to,.slide-prev-enter{transform:translate3d(100%,0,0);position:absolute;width:100%}.slide-down-enter-active,.slide-down-leave-active,.slide-up-enter-active,.slide-up-leave-active{transition:transform .25s cubic-bezier(.785,.135,.15,.86)}.slide-down-enter,.slide-up-leave-to{transform:translate3d(0,-100%,0);position:absolute;height:100%}.slide-down-leave-to,.slide-up-enter{transform:translate3d(0,100%,0);position:absolute;height:100%}.slide-enter-active,.slide-leave-active{transition:.15s ease-out}.slide-leave-active{transition-timing-function:cubic-bezier(0,1,.5,1)}.slide-enter-to,.slide-leave{max-height:100px;overflow:hidden}.slide-enter,.slide-leave-to{overflow:hidden;max-height:0}.autocomplete{position:relative}.autocomplete .dropdown-menu{display:block;min-width:100%;max-width:100%}.autocomplete .dropdown-menu.is-opened-top{top:auto;bottom:100%}.autocomplete .dropdown-content{overflow:auto;max-height:200px}.autocomplete .dropdown-item,.autocomplete .dropdown .dropdown-menu .has-link a,.dropdown .dropdown-menu .has-link .autocomplete a{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.autocomplete .dropdown-item.is-hovered,.autocomplete .dropdown .dropdown-menu .has-link a.is-hovered,.dropdown .dropdown-menu .has-link .autocomplete a.is-hovered{background:#171e29;color:#fff}.autocomplete .dropdown-item.is-disabled,.autocomplete .dropdown .dropdown-menu .has-link a.is-disabled,.dropdown .dropdown-menu .has-link .autocomplete a.is-disabled{opacity:.5;cursor:not-allowed}.autocomplete.is-small{border-radius:2px;font-size:.75rem}.autocomplete.is-medium{font-size:1.25rem}.autocomplete.is-large{font-size:1.5rem}.carousel{min-height:120px;position:relative}.carousel.is-overlay{background-color:rgba(10,10,10,.86);align-items:center;flex-direction:column;justify-content:center;display:flex;max-height:100vh;position:fixed;z-index:40}.carousel.is-overlay .carousel-item img{cursor:default}.carousel.is-overlay .carousel-indicator.has-background{background:transparent}.carousel .progress{border-radius:2px;height:.25rem;margin-bottom:0}.carousel .carousel-items{position:relative;display:flex;overflow:hidden;width:100%}@media print,screen and (min-width:769px){.carousel .carousel-items:hover .carousel-arrow.is-hovered{opacity:1}}.carousel .carousel-items .carousel-item{flex-shrink:0;width:100%}.carousel .carousel-pause{pointer-events:none;position:absolute;top:0;right:.15rem;z-index:1}.carousel .carousel-indicator{width:100%;padding:.5rem;display:flex;align-items:center;justify-content:center}.carousel .carousel-indicator.has-background{background:rgba(10,10,10,.5)}.carousel .carousel-indicator.has-custom{flex-wrap:nowrap;justify-content:flex-start;-webkit-overflow-scrolling:touch;overflow:hidden;overflow-x:auto}.carousel .carousel-indicator.has-custom.is-small .indicator-item{flex:1 0 10%}.carousel .carousel-indicator.has-custom.is-medium .indicator-item{flex:1 0 16.66667%}.carousel .carousel-indicator.is-inside{position:absolute}.carousel .carousel-indicator.is-inside.is-bottom{bottom:0}.carousel .carousel-indicator.is-inside.is-top{top:0}.carousel .carousel-indicator .indicator-item:not(:last-child){margin-right:.5rem}.carousel .carousel-indicator .indicator-item .indicator-style:hover,.carousel .carousel-indicator .indicator-item.is-active .indicator-style{background:#000;border:1px solid #fff}.carousel .carousel-indicator .indicator-item .indicator-style{display:block;border:1px solid #000;background:#fff;outline:none;transition:.15s ease-out}.carousel .carousel-indicator .indicator-item .indicator-style.is-boxes{height:10px;width:10px}.carousel .carousel-indicator .indicator-item .indicator-style.is-dots{border-radius:10px;height:10px;width:10px}.carousel .carousel-indicator .indicator-item .indicator-style.is-lines{height:5px;width:25px}.carousel-list{position:relative;overflow:hidden;width:100%}.carousel-list.has-shadow{box-shadow:0 0 10px rgba(0,0,0,.25)}@media print,screen and (min-width:769px){.carousel-list:hover .carousel-arrow.is-hovered{opacity:1}}.carousel-list .carousel-slides{position:relative;display:flex;width:100%}.carousel-list .carousel-slides:not(.is-dragging){transition:all .25s ease-out 0s}.carousel-list .carousel-slides.has-grayscale .carousel-slide img{-webkit-filter:grayscale(100%);filter:grayscale(100%)}.carousel-list .carousel-slides.has-grayscale .carousel-slide.is-active img{-webkit-filter:grayscale(0);filter:grayscale(0)}.carousel-list .carousel-slides.has-opacity .carousel-slide img{opacity:.25}.carousel-list .carousel-slides.has-opacity .carousel-slide.is-active img{opacity:1}.carousel-list .carousel-slides .carousel-slide{border:2px solid transparent;flex-shrink:0}.carousel-arrow{transition:.15s ease-out}.carousel-arrow.is-hovered{opacity:0}.carousel-arrow .icon{background:#fff;color:#000;cursor:pointer;border:1px solid #fff;border-radius:290486px;outline:0}.carousel-arrow .icon:hover{border:1px solid #000;opacity:1}.carousel-arrow .icon.has-icons-left,.carousel-arrow .icon.has-icons-right{position:absolute;top:50%;transform:translateY(-50%);z-index:1}.carousel-arrow .icon.has-icons-left{left:1.5rem}.carousel-arrow .icon.has-icons-right{right:1.5rem}.b-checkbox.checkbox{outline:none;display:inline-flex;align-items:center}.b-checkbox.checkbox:not(.button){margin-right:.5em}.b-checkbox.checkbox:not(.button)+.checkbox:last-child{margin-right:0}.b-checkbox.checkbox input[type=checkbox]{position:absolute;left:0;opacity:0;outline:none;z-index:-1}.b-checkbox.checkbox input[type=checkbox]+.check{width:1.25em;height:1.25em;flex-shrink:0;border-radius:4px;border:2px solid #7a7a7a;transition:background .15s ease-out;background:transparent}.b-checkbox.checkbox input[type=checkbox]:checked+.check{background:#000 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%2300f'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#000}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-white{background:#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%230a0a0a'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#fff}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-black{background:#0a0a0a url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#0a0a0a}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-light{background:#f5f5f5 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23363636'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#f5f5f5}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-dark{background:#363636 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23f5f5f5'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#363636}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-primary{background:#00d1b2 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#00d1b2}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-link{background:#3273dc url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#3273dc}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-info{background:#209cee url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#209cee}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-success{background:#23d160 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#23d160}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-warning{background:#ffdd57 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='rgba(0,0,0,.7)'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#ffdd57}.b-checkbox.checkbox input[type=checkbox]:checked+.check.is-danger{background:#ff3860 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z' fill='%23fff'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#ff3860}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check{background:#000 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%2300f' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#000}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-white{background:#fff url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%230a0a0a' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#fff}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-black{background:#0a0a0a url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#0a0a0a}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-light{background:#f5f5f5 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23363636' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#f5f5f5}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-dark{background:#363636 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23f5f5f5' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#363636}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-primary{background:#00d1b2 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#00d1b2}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-link{background:#3273dc url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#3273dc}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-info{background:#209cee url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#209cee}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-success{background:#23d160 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#23d160}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-warning{background:#ffdd57 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='rgba(0,0,0,.7)' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#ffdd57}.b-checkbox.checkbox input[type=checkbox]:indeterminate+.check.is-danger{background:#ff3860 url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath fill='%23fff' d='M.15.4h.7v.2h-.7z'/%3E%3C/svg%3E\") no-repeat 50%;border-color:#ff3860}.b-checkbox.checkbox input[type=checkbox]:focus+.check{box-shadow:0 0 .5em hsla(0,0%,47.8%,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check{box-shadow:0 0 .5em rgba(0,0,0,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-white{box-shadow:0 0 .5em hsla(0,0%,100%,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-black{box-shadow:0 0 .5em rgba(10,10,10,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-light{box-shadow:0 0 .5em hsla(0,0%,96.1%,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-dark{box-shadow:0 0 .5em rgba(54,54,54,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-primary{box-shadow:0 0 .5em rgba(0,209,178,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-link{box-shadow:0 0 .5em rgba(50,115,220,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-info{box-shadow:0 0 .5em rgba(32,156,238,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-success{box-shadow:0 0 .5em rgba(35,209,96,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-warning{box-shadow:0 0 .5em rgba(255,221,87,.8)}.b-checkbox.checkbox input[type=checkbox]:focus:checked+.check.is-danger{box-shadow:0 0 .5em rgba(255,56,96,.8)}.b-checkbox.checkbox .control-label{padding-left:.5em}.b-checkbox.checkbox.button{display:flex}.b-checkbox.checkbox[disabled]{opacity:.5}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check{border-color:#000}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-white{border-color:#fff}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-black{border-color:#0a0a0a}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-light{border-color:#f5f5f5}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-dark{border-color:#363636}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-primary{border-color:#00d1b2}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-link{border-color:#3273dc}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-info{border-color:#209cee}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-success{border-color:#23d160}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-warning{border-color:#ffdd57}.b-checkbox.checkbox:hover input[type=checkbox]:not(:disabled)+.check.is-danger{border-color:#ff3860}.b-checkbox.checkbox.is-small{border-radius:2px;font-size:.75rem}.b-checkbox.checkbox.is-medium{font-size:1.25rem}.b-checkbox.checkbox.is-large{font-size:1.5rem}.b-clockpicker .card-header{background-color:#000;color:#00f}.b-clockpicker .b-clockpicker-face:after{background-color:#000}.b-clockpicker .b-clockpicker-face-hand{background-color:#000;border-color:#000}.b-clockpicker .b-clockpicker-face-number.active{background-color:#000;color:#00f}.b-clockpicker.is-white .card-header{background-color:#fff;color:#0a0a0a}.b-clockpicker.is-white .b-clockpicker-face:after{background-color:#fff}.b-clockpicker.is-white .b-clockpicker-face-hand{background-color:#fff;border-color:#fff}.b-clockpicker.is-white .b-clockpicker-face-number.active{background-color:#fff;color:#0a0a0a}.b-clockpicker.is-black .card-header{background-color:#0a0a0a;color:#fff}.b-clockpicker.is-black .b-clockpicker-face:after{background-color:#0a0a0a}.b-clockpicker.is-black .b-clockpicker-face-hand{background-color:#0a0a0a;border-color:#0a0a0a}.b-clockpicker.is-black .b-clockpicker-face-number.active{background-color:#0a0a0a;color:#fff}.b-clockpicker.is-light .card-header{background-color:#f5f5f5;color:#363636}.b-clockpicker.is-light .b-clockpicker-face:after{background-color:#f5f5f5}.b-clockpicker.is-light .b-clockpicker-face-hand{background-color:#f5f5f5;border-color:#f5f5f5}.b-clockpicker.is-light .b-clockpicker-face-number.active{background-color:#f5f5f5;color:#363636}.b-clockpicker.is-dark .card-header{background-color:#363636;color:#f5f5f5}.b-clockpicker.is-dark .b-clockpicker-face:after{background-color:#363636}.b-clockpicker.is-dark .b-clockpicker-face-hand{background-color:#363636;border-color:#363636}.b-clockpicker.is-dark .b-clockpicker-face-number.active{background-color:#363636;color:#f5f5f5}.b-clockpicker.is-primary .card-header{background-color:#00d1b2;color:#fff}.b-clockpicker.is-primary .b-clockpicker-face:after{background-color:#00d1b2}.b-clockpicker.is-primary .b-clockpicker-face-hand{background-color:#00d1b2;border-color:#00d1b2}.b-clockpicker.is-primary .b-clockpicker-face-number.active{background-color:#00d1b2;color:#fff}.b-clockpicker.is-link .card-header{background-color:#3273dc;color:#fff}.b-clockpicker.is-link .b-clockpicker-face:after{background-color:#3273dc}.b-clockpicker.is-link .b-clockpicker-face-hand{background-color:#3273dc;border-color:#3273dc}.b-clockpicker.is-link .b-clockpicker-face-number.active{background-color:#3273dc;color:#fff}.b-clockpicker.is-info .card-header{background-color:#209cee;color:#fff}.b-clockpicker.is-info .b-clockpicker-face:after{background-color:#209cee}.b-clockpicker.is-info .b-clockpicker-face-hand{background-color:#209cee;border-color:#209cee}.b-clockpicker.is-info .b-clockpicker-face-number.active{background-color:#209cee;color:#fff}.b-clockpicker.is-success .card-header{background-color:#23d160;color:#fff}.b-clockpicker.is-success .b-clockpicker-face:after{background-color:#23d160}.b-clockpicker.is-success .b-clockpicker-face-hand{background-color:#23d160;border-color:#23d160}.b-clockpicker.is-success .b-clockpicker-face-number.active{background-color:#23d160;color:#fff}.b-clockpicker.is-warning .card-header{background-color:#ffdd57;color:rgba(0,0,0,.7)}.b-clockpicker.is-warning .b-clockpicker-face:after{background-color:#ffdd57}.b-clockpicker.is-warning .b-clockpicker-face-hand{background-color:#ffdd57;border-color:#ffdd57}.b-clockpicker.is-warning .b-clockpicker-face-number.active{background-color:#ffdd57;color:rgba(0,0,0,.7)}.b-clockpicker.is-danger .card-header{background-color:#ff3860;color:#fff}.b-clockpicker.is-danger .b-clockpicker-face:after{background-color:#ff3860}.b-clockpicker.is-danger .b-clockpicker-face-hand{background-color:#ff3860;border-color:#ff3860}.b-clockpicker.is-danger .b-clockpicker-face-number.active{background-color:#ff3860;color:#fff}.b-clockpicker .dropdown-menu{min-width:0}.b-clockpicker .dropdown,.b-clockpicker .dropdown-trigger{width:100%}.b-clockpicker .dropdown-trigger .input[readonly],.b-clockpicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly],.b-clockpicker .dropdown .input[readonly],.b-clockpicker .dropdown .taginput .taginput-container.is-focusable[readonly],.taginput .b-clockpicker .dropdown-trigger .taginput-container.is-focusable[readonly],.taginput .b-clockpicker .dropdown .taginput-container.is-focusable[readonly]{cursor:pointer;box-shadow:inset 0 1px 2px rgba(10,10,10,.1)}.b-clockpicker .dropdown-trigger .input[readonly].is-active,.b-clockpicker .dropdown-trigger .input[readonly].is-focused,.b-clockpicker .dropdown-trigger .input[readonly]:active,.b-clockpicker .dropdown-trigger .input[readonly]:focus,.b-clockpicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly].is-active,.b-clockpicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly].is-focused,.b-clockpicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly]:active,.b-clockpicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly]:focus,.b-clockpicker .dropdown .input[readonly].is-active,.b-clockpicker .dropdown .input[readonly].is-focused,.b-clockpicker .dropdown .input[readonly]:active,.b-clockpicker .dropdown .input[readonly]:focus,.b-clockpicker .dropdown .taginput .taginput-container.is-focusable[readonly].is-active,.b-clockpicker .dropdown .taginput .taginput-container.is-focusable[readonly].is-focused,.b-clockpicker .dropdown .taginput .taginput-container.is-focusable[readonly]:active,.b-clockpicker .dropdown .taginput .taginput-container.is-focusable[readonly]:focus,.taginput .b-clockpicker .dropdown-trigger .taginput-container.is-focusable[readonly].is-active,.taginput .b-clockpicker .dropdown-trigger .taginput-container.is-focusable[readonly].is-focused,.taginput .b-clockpicker .dropdown-trigger .taginput-container.is-focusable[readonly]:active,.taginput .b-clockpicker .dropdown-trigger .taginput-container.is-focusable[readonly]:focus,.taginput .b-clockpicker .dropdown .taginput-container.is-focusable[readonly].is-active,.taginput .b-clockpicker .dropdown .taginput-container.is-focusable[readonly].is-focused,.taginput .b-clockpicker .dropdown .taginput-container.is-focusable[readonly]:active,.taginput .b-clockpicker .dropdown .taginput-container.is-focusable[readonly]:focus{box-shadow:0 0 0 .125em rgba(255,70,83,.25)}.b-clockpicker .dropdown-item,.b-clockpicker .dropdown .dropdown-menu .has-link a,.dropdown .dropdown-menu .has-link .b-clockpicker a{font-size:inherit;padding:0}.b-clockpicker .dropdown-content{padding-top:0;padding-bottom:0}.b-clockpicker .card{border-radius:4px}.b-clockpicker .card-header{border-top-left-radius:4px;border-top-right-radius:4px}.b-clockpicker .card-content{padding:12px}.b-clockpicker-btn{cursor:pointer;opacity:.6}.b-clockpicker-btn.active,.b-clockpicker-btn:hover{opacity:1}.b-clockpicker-period .b-clockpicker-btn{font-size:16px;text-transform:uppercase}.b-clockpicker-time span{align-items:center;display:inline-flex;justify-content:center}.b-clockpicker-header{display:flex;line-height:1;justify-content:flex-end;color:inherit}.b-clockpicker-header .b-clockpicker-time{white-space:nowrap}.b-clockpicker-header .b-clockpicker-time span{height:60px;font-size:60px}.b-clockpicker-header .b-clockpicker-period{align-self:flex-end;display:flex;flex-direction:column;margin:8px 0 6px 8px}.b-clockpicker-body{transition:.9s cubic-bezier(.25,.8,.5,1)}.b-clockpicker-body .b-clockpicker-btn{padding:0 8px;border-radius:290486px;margin-bottom:2px}.b-clockpicker-body .b-clockpicker-btn.active,.b-clockpicker-body .b-clockpicker-btn:hover{background-color:#000;color:#fff}.b-clockpicker-body .b-clockpicker-period{position:absolute;top:5px;right:5px}.b-clockpicker-body .b-clockpicker-time{position:absolute;top:5px;left:5px;font-size:16px}.b-clockpicker-body .b-clockpicker-face{border-radius:50%;position:relative;background-color:#dbdbdb;width:100%;height:100%;align-items:center;display:flex;justify-content:center}.b-clockpicker-body .b-clockpicker-face:after{border-radius:50%;content:\"\";position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:12px;height:12px;z-index:10}.b-clockpicker-body .b-clockpicker-face-outer-ring{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;height:calc(100% - 50px);width:calc(100% - 50px);position:relative;border-radius:50%}.b-clockpicker-body .b-clockpicker-face-number{align-items:center;border-radius:100%;cursor:default;display:flex;font-size:18px;text-align:center;justify-content:center;position:absolute;width:40px;height:40px;left:calc(50% - 20px);top:calc(50% - 20px);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.b-clockpicker-body .b-clockpicker-face-number>span{z-index:1}.b-clockpicker-body .b-clockpicker-face-number:after,.b-clockpicker-body .b-clockpicker-face-number:before{content:\"\";height:40px;width:40px;border-radius:100%;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%)}.b-clockpicker-body .b-clockpicker-face-number.active{cursor:default;z-index:2}.b-clockpicker-body .b-clockpicker-face-number.disabled{pointer-events:none;opacity:.25}.b-clockpicker-body .b-clockpicker-face-hand{height:calc(50% - 6px);width:2px;bottom:50%;left:calc(50% - 1px);transform-origin:center bottom;position:absolute;will-change:transform;z-index:1}.b-clockpicker-body .b-clockpicker-face-hand:before{background:transparent;border:2px solid;border-color:inherit;border-radius:100%;width:12px;height:12px;content:\"\";position:absolute;top:-6px;left:50%;transform:translate(-50%,-50%)}.b-clockpicker-footer{display:block;padding:12px}.b-clockpicker.is-small{border-radius:2px;font-size:.75rem}.b-clockpicker.is-medium{font-size:1.25rem}.b-clockpicker.is-large{font-size:1.5rem}.collapse .collapse-trigger{display:inline;cursor:pointer}.collapse .collapse-content{display:inherit}.datepicker{font-size:.875rem}.datepicker .dropdown,.datepicker .dropdown-trigger{width:100%}.datepicker .dropdown-trigger .input[readonly],.datepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly],.datepicker .dropdown .input[readonly],.datepicker .dropdown .taginput .taginput-container.is-focusable[readonly],.taginput .datepicker .dropdown-trigger .taginput-container.is-focusable[readonly],.taginput .datepicker .dropdown .taginput-container.is-focusable[readonly]{cursor:pointer;box-shadow:inset 0 1px 2px rgba(10,10,10,.1)}.datepicker .dropdown-trigger .input[readonly].is-active,.datepicker .dropdown-trigger .input[readonly].is-focused,.datepicker .dropdown-trigger .input[readonly]:active,.datepicker .dropdown-trigger .input[readonly]:focus,.datepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly].is-active,.datepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly].is-focused,.datepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly]:active,.datepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly]:focus,.datepicker .dropdown .input[readonly].is-active,.datepicker .dropdown .input[readonly].is-focused,.datepicker .dropdown .input[readonly]:active,.datepicker .dropdown .input[readonly]:focus,.datepicker .dropdown .taginput .taginput-container.is-focusable[readonly].is-active,.datepicker .dropdown .taginput .taginput-container.is-focusable[readonly].is-focused,.datepicker .dropdown .taginput .taginput-container.is-focusable[readonly]:active,.datepicker .dropdown .taginput .taginput-container.is-focusable[readonly]:focus,.taginput .datepicker .dropdown-trigger .taginput-container.is-focusable[readonly].is-active,.taginput .datepicker .dropdown-trigger .taginput-container.is-focusable[readonly].is-focused,.taginput .datepicker .dropdown-trigger .taginput-container.is-focusable[readonly]:active,.taginput .datepicker .dropdown-trigger .taginput-container.is-focusable[readonly]:focus,.taginput .datepicker .dropdown .taginput-container.is-focusable[readonly].is-active,.taginput .datepicker .dropdown .taginput-container.is-focusable[readonly].is-focused,.taginput .datepicker .dropdown .taginput-container.is-focusable[readonly]:active,.taginput .datepicker .dropdown .taginput-container.is-focusable[readonly]:focus{box-shadow:0 0 0 .125em rgba(255,70,83,.25)}.datepicker .dropdown.is-disabled{opacity:1}.datepicker .dropdown-content{background-color:#222c3c;border-radius:4px;box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1)}.datepicker .dropdown-item,.datepicker .dropdown .dropdown-menu .has-link a,.dropdown .dropdown-menu .has-link .datepicker a{font-size:inherit}.datepicker .datepicker-header{padding-bottom:.875rem;margin-bottom:.875rem;border-bottom:1px solid #dbdbdb}.datepicker .datepicker-footer{margin-top:.875rem;padding-top:.875rem;border-top:1px solid #dbdbdb}.datepicker .datepicker-table{display:table;margin:0 auto}.datepicker .datepicker-table .datepicker-cell{text-align:center;vertical-align:middle;display:table-cell;border-radius:4px;padding:.5rem .75rem}.datepicker .datepicker-table .datepicker-header{display:table-header-group}.datepicker .datepicker-table .datepicker-header .datepicker-cell{color:#7a7a7a;font-weight:600}.datepicker .datepicker-table .datepicker-body{display:table-row-group}.datepicker .datepicker-table .datepicker-body .datepicker-row{display:table-row}.datepicker .datepicker-table .datepicker-body .datepicker-months{display:inline-flex;flex-wrap:wrap;flex-direction:row;width:17rem}.datepicker .datepicker-table .datepicker-body .datepicker-months .datepicker-cell{display:flex;align-items:center;justify-content:center;width:33.33%;height:2.5rem}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-unselectable{color:#b5b5b5}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-today{border:1px solid rgba(0,0,0,.5)}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable{color:#4a4a4a}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable:focus:not(.is-selected),.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable:hover:not(.is-selected){background-color:#000;color:#0a0a0a;cursor:pointer}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable.is-within-hovered-range.is-first-hovered{background-color:#7a7a7a;color:#dbdbdb;border-bottom-right-radius:0;border-top-right-radius:0}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable.is-within-hovered-range.is-within-hovered{background-color:#000;color:#0a0a0a;border-radius:0}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selectable.is-within-hovered-range.is-last-hovered{background-color:#7a7a7a;color:#dbdbdb;border-bottom-left-radius:0;border-top-left-radius:0}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected{background-color:#000;color:#00f}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected.is-first-selected{background-color:#000;color:#00f;border-bottom-right-radius:0;border-top-right-radius:0}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected.is-within-selected{background-color:rgba(0,0,0,.5);border-radius:0}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-selected.is-last-selected{background-color:#000;color:#00f;border-bottom-left-radius:0;border-top-left-radius:0}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-nearby:not(.is-selected){color:#b5b5b5}.datepicker .datepicker-table .datepicker-body .datepicker-cell.is-week-number{cursor:default}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell{padding:.3rem .75rem .75rem}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event{position:relative}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events{bottom:.425rem;display:flex;justify-content:center;left:0;padding:0 .35rem;position:absolute;width:100%}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-white{background-color:#fff}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-black{background-color:#0a0a0a}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-light{background-color:#f5f5f5}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-dark{background-color:#363636}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-primary{background-color:#00d1b2}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-link{background-color:#3273dc}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-info{background-color:#209cee}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-success{background-color:#23d160}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-warning{background-color:#ffdd57}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event .events .event.is-danger{background-color:#ff3860}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event.dots .event{border-radius:50%;height:.35em;margin:0 .1em;width:.35em}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.has-event.bars .event{height:.25em;width:100%}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.is-selected{overflow:hidden}.datepicker .datepicker-table .datepicker-body.has-events .datepicker-cell.is-selected .events .event.is-primary{background-color:#262626}.datepicker.is-small{border-radius:2px;font-size:.75rem}.datepicker.is-medium{font-size:1.25rem}.datepicker.is-large{font-size:1.5rem}@media screen and (min-width:1024px){.datepicker .footer-horizontal-timepicker{border:none;padding-left:10px;margin-left:5px;display:flex}.datepicker .dropdown-horizonal-timepicker{display:flex}.datepicker .content-horizonal-timepicker{border-right:1px solid #dbdbdb}}.dialog .modal-card{max-width:460px;width:auto}.dialog .modal-card .modal-card-head{font-size:1.25rem;font-weight:600}.dialog .modal-card .modal-card-body .field{margin-top:16px}.dialog .modal-card .modal-card-body.is-titleless{border-top-left-radius:6px;border-top-right-radius:6px}.dialog .modal-card .modal-card-foot{justify-content:flex-end}.dialog .modal-card .modal-card-foot .button{display:inline;min-width:5em;font-weight:600}@media print,screen and (min-width:769px){.dialog .modal-card{min-width:320px}}.dialog.is-small .button,.dialog.is-small .input,.dialog.is-small .modal-card,.dialog.is-small .taginput .taginput-container.is-focusable,.taginput .dialog.is-small .taginput-container.is-focusable{border-radius:2px;font-size:.75rem}.dialog.is-medium .button,.dialog.is-medium .input,.dialog.is-medium .modal-card,.dialog.is-medium .taginput .taginput-container.is-focusable,.taginput .dialog.is-medium .taginput-container.is-focusable{font-size:1.25rem}.dialog.is-large .button,.dialog.is-large .input,.dialog.is-large .modal-card,.dialog.is-large .taginput .taginput-container.is-focusable,.taginput .dialog.is-large .taginput-container.is-focusable{font-size:1.5rem}.dialog.has-custom-container{position:absolute}.dropdown+.dropdown{margin-left:.5em}.dropdown .background{bottom:0;left:0;position:absolute;right:0;top:0;position:fixed;background-color:rgba(10,10,10,.86);z-index:40;cursor:pointer}@media screen and (min-width:1024px){.dropdown .background{display:none}}.dropdown.dropdown-menu-animation .dropdown-menu{display:block}.dropdown .dropdown-menu .dropdown-item.is-disabled,.dropdown .dropdown-menu .has-link a.is-disabled{cursor:not-allowed}.dropdown .dropdown-menu .dropdown-item.is-disabled:hover,.dropdown .dropdown-menu .has-link a.is-disabled:hover{background:inherit;color:inherit}.dropdown .dropdown-menu .has-link a{padding-right:3rem;white-space:nowrap}.dropdown.is-hoverable:not(.is-active) .dropdown-menu{display:none}.dropdown.is-hoverable:hover .dropdown-menu{display:inherit}.dropdown.is-expanded,.dropdown.is-expanded .dropdown-menu,.dropdown.is-expanded .dropdown-trigger{width:100%}.dropdown.is-expanded.is-mobile-modal .dropdown-menu{max-width:100%}.dropdown:not(.is-disabled) .dropdown-menu .dropdown-item.is-disabled,.dropdown:not(.is-disabled) .dropdown-menu .has-link a.is-disabled{opacity:.5}.dropdown .navbar-item{height:100%}.dropdown.is-disabled{opacity:.5;cursor:not-allowed}.dropdown.is-disabled .dropdown-trigger{pointer-events:none}.dropdown.is-inline .dropdown-menu{position:static;display:inline-block;padding:0}.dropdown.is-top-right .dropdown-menu{top:auto;bottom:100%}.dropdown.is-top-left .dropdown-menu{top:auto;bottom:100%;right:0;left:auto}.dropdown.is-bottom-left .dropdown-menu{right:0;left:auto}@media screen and (max-width:1023px){.dropdown.is-mobile-modal>.dropdown-menu{position:fixed!important;width:calc(100vw - 40px);max-width:460px;max-height:calc(100vh - 120px);top:25%!important;left:50%!important;bottom:auto!important;right:auto!important;transform:translate3d(-50%,-25%,0);white-space:normal;overflow-y:auto;z-index:50!important}.dropdown .dropdown-menu .has-link .dropdown.is-mobile-modal>.dropdown-menu>.dropdown-content>a,.dropdown.is-mobile-modal>.dropdown-menu>.dropdown-content>.dropdown-item,.dropdown.is-mobile-modal>.dropdown-menu>.dropdown-content>.has-link a{padding:1rem 1.5rem}}.field.is-grouped .field{flex-shrink:0}.field.is-grouped .field:not(:last-child){margin-right:.75rem}.field.is-grouped .field.is-expanded{flex-grow:1;flex-shrink:1}.field.has-addons .control:first-child .control .button,.field.has-addons .control:first-child .control .input,.field.has-addons .control:first-child .control .select select,.field.has-addons .control:first-child .control .taginput .taginput-container.is-focusable,.taginput .field.has-addons .control:first-child .control .taginput-container.is-focusable{border-bottom-left-radius:4px;border-top-left-radius:4px}.field.has-addons .control:last-child .control .button,.field.has-addons .control:last-child .control .input,.field.has-addons .control:last-child .control .select select,.field.has-addons .control:last-child .control .taginput .taginput-container.is-focusable,.taginput .field.has-addons .control:last-child .control .taginput-container.is-focusable{border-bottom-right-radius:4px;border-top-right-radius:4px}.field.has-addons .control .control .button,.field.has-addons .control .control .input,.field.has-addons .control .control .select select,.field.has-addons .control .control .taginput .taginput-container.is-focusable,.taginput .field.has-addons .control .control .taginput-container.is-focusable{border-radius:0}.field.has-addons .b-numberinput:not(:first-child) .control:first-child .button,.field.has-addons .b-numberinput:not(:first-child) .control:first-child .input,.field.has-addons .b-numberinput:not(:first-child) .control:first-child .select select,.field.has-addons .b-numberinput:not(:first-child) .control:first-child .taginput .taginput-container.is-focusable,.taginput .field.has-addons .b-numberinput:not(:first-child) .control:first-child .taginput-container.is-focusable{border-bottom-left-radius:0;border-top-left-radius:0}.field.has-addons .b-numberinput:not(:last-child) .control:last-child .button,.field.has-addons .b-numberinput:not(:last-child) .control:last-child .input,.field.has-addons .b-numberinput:not(:last-child) .control:last-child .select select,.field.has-addons .b-numberinput:not(:last-child) .control:last-child .taginput .taginput-container.is-focusable,.taginput .field.has-addons .b-numberinput:not(:last-child) .control:last-child .taginput-container.is-focusable{border-bottom-right-radius:0;border-top-right-radius:0}.field.is-floating-in-label,.field.is-floating-label{position:relative}.field.is-floating-in-label .label,.field.is-floating-label .label{position:absolute;left:1em;font-size:.75rem;background-color:transparent;z-index:5}.field.is-floating-in-label .label.is-small,.field.is-floating-label .label.is-small{font-size:.5625rem}.field.is-floating-in-label .label.is-medium,.field.is-floating-label .label.is-medium{font-size:.9375rem}.field.is-floating-in-label .label.is-large,.field.is-floating-label .label.is-large{font-size:1.125rem}.field.is-floating-in-label .taginput .counter,.field.is-floating-label .taginput .counter{float:none;text-align:right}.field.is-floating-in-label.has-addons>.label+.control .button,.field.is-floating-in-label.has-addons>.label+.control .input,.field.is-floating-in-label.has-addons>.label+.control .select select,.field.is-floating-in-label.has-addons>.label+.control .taginput .taginput-container.is-focusable,.field.is-floating-label.has-addons>.label+.control .button,.field.is-floating-label.has-addons>.label+.control .input,.field.is-floating-label.has-addons>.label+.control .select select,.field.is-floating-label.has-addons>.label+.control .taginput .taginput-container.is-focusable,.taginput .field.is-floating-in-label.has-addons>.label+.control .taginput-container.is-focusable,.taginput .field.is-floating-label.has-addons>.label+.control .taginput-container.is-focusable{border-bottom-left-radius:4px;border-top-left-radius:4px}.field.is-floating-label .label{top:-.775em;padding-left:.125em;padding-right:.125em}.field.is-floating-label .label:before{content:\"\";display:block;position:absolute;top:.775em;left:0;right:0;height:.375em;background-color:#222c3c;z-index:-1}.field.is-floating-label .input:focus,.field.is-floating-label .select select:focus,.field.is-floating-label .taginput .taginput-container.is-focusable:focus,.field.is-floating-label .textarea:focus,.taginput .field.is-floating-label .taginput-container.is-focusable:focus{box-shadow:none}.field.is-floating-label .taginput .taginput-container{padding-top:.475em}.field.is-floating-label .taginput .taginput-container.is-focused{box-shadow:none}.field.is-floating-in-label .label{top:.25em}.field.is-floating-in-label>.datepicker .input,.field.is-floating-in-label>.datepicker .taginput .taginput-container.is-focusable,.field.is-floating-in-label>.timepicker .input,.field.is-floating-in-label>.timepicker .taginput .taginput-container.is-focusable,.field.is-floating-in-label>:not(.datepicker):not(.timepicker):not(.taginput) .input,.field.is-floating-in-label>:not(.datepicker):not(.timepicker):not(.taginput) .taginput .taginput-container.is-focusable,.field.is-floating-in-label>:not(.datepicker):not(.timepicker):not(.taginput) .textarea,.field.is-floating-in-label>:not(.datepicker):not(.timepicker):not(.taginput) select,.taginput .field.is-floating-in-label>.datepicker .taginput-container.is-focusable,.taginput .field.is-floating-in-label>.timepicker .taginput-container.is-focusable,.taginput .field.is-floating-in-label>:not(.datepicker):not(.timepicker):not(.taginput) .taginput-container.is-focusable{padding-top:calc(1.625em - .5625rem);padding-bottom:1px;height:3.25em}.field.is-floating-in-label>:not(.datepicker):not(.timepicker):not(.taginput) .select:not(multiple){height:3.25em}.field.is-floating-in-label>:not(.datepicker):not(.timepicker):not(.taginput) .select:not(multiple).is-loading:after{margin-top:calc(1.625em - .5625rem)}.field.is-floating-in-label>:not(.datepicker):not(.timepicker):not(.taginput) .select:not(multiple):after{margin-top:1px}.field.is-floating-in-label>:not(.taginput) .is-left.icon,.field.is-floating-in-label>:not(.taginput) .is-right.icon{height:3.25em}.field.is-floating-in-label>:not(.taginput) .is-left.icon{padding-top:calc(1.625em - .5625rem)}.field.is-floating-in-label .control.is-loading:after{margin-top:calc(1.625em - .5625rem)}.field.is-floating-in-label .taginput .taginput-container{padding-top:calc(1.625em - .5625rem + .275em - 1px)}.field.is-floating-in-label.has-addons .control .button,.field.is-floating-in-label.has-addons .control .input,.field.is-floating-in-label.has-addons .control .select select,.field.is-floating-in-label.has-addons .control .taginput .taginput-container.is-focusable,.field.is-floating-in-label.has-numberinput .b-numberinput .control .button,.field.is-floating-in-label.is-grouped .control .button,.field.is-floating-in-label.is-grouped .control .input,.field.is-floating-in-label.is-grouped .control .select select,.field.is-floating-in-label.is-grouped .control .taginput .taginput-container.is-focusable,.taginput .field.is-floating-in-label.has-addons .control .taginput-container.is-focusable,.taginput .field.is-floating-in-label.is-grouped .control .taginput-container.is-focusable{height:3.25em}.field.is-floating-in-label.has-numberinput .label,.field.is-floating-label.has-numberinput .label{margin-left:3rem}.field.is-floating-in-label.has-numberinput.has-numberinput-is-small .label,.field.is-floating-label.has-numberinput.has-numberinput-is-small .label{margin-left:2.25rem}.field.is-floating-in-label.has-numberinput.has-numberinput-is-medium .label,.field.is-floating-label.has-numberinput.has-numberinput-is-medium .label{margin-left:3.75rem}.field.is-floating-in-label.has-numberinput.has-numberinput-is-large .label,.field.is-floating-label.has-numberinput.has-numberinput-is-large .label{margin-left:4.5rem}.field.is-floating-in-label.has-numberinput-compact .label,.field.is-floating-label.has-numberinput-compact .label{margin-left:2.25rem}.field.is-floating-in-label.has-numberinput-compact.has-numberinput-is-small .label,.field.is-floating-label.has-numberinput-compact.has-numberinput-is-small .label{margin-left:1.6875rem}.field.is-floating-in-label.has-numberinput-compact.has-numberinput-is-medium .label,.field.is-floating-label.has-numberinput-compact.has-numberinput-is-medium .label{margin-left:2.8125rem}.field.is-floating-in-label.has-numberinput-compact.has-numberinput-is-large .label,.field.is-floating-label.has-numberinput-compact.has-numberinput-is-large .label{margin-left:3.375rem}.field.has-addons-right.is-floating-in-label .label,.field.has-addons-right.is-floating-label .label,.field.is-grouped-right.is-floating-in-label .label,.field.is-grouped-right.is-floating-label .label{position:relative;left:5.25em}.control .help.counter{float:right;margin-left:.5em}.control .icon.is-clickable{pointer-events:auto;cursor:pointer}.icon{-webkit-touch-callout:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:inherit}.icon svg{background-color:transparent;fill:currentColor;stroke-width:0;stroke:currentColor;pointer-events:none;width:1.5rem;height:1.5rem}.loading-overlay{bottom:0;left:0;position:absolute;right:0;top:0;align-items:center;display:none;justify-content:center;overflow:hidden;z-index:999}.loading-overlay.is-active{display:flex}.loading-overlay.is-full-page{position:fixed}.loading-overlay.is-full-page .loading-icon:after{top:calc(50% - 2.5em);left:calc(50% - 2.5em);width:5em;height:5em}.loading-overlay .loading-background{bottom:0;left:0;position:absolute;right:0;top:0;background:#7f7f7f;background:hsla(0,0%,100%,.5)}.loading-overlay .loading-icon{position:relative}.loading-overlay .loading-icon:after{-webkit-animation:spinAround .5s linear infinite;animation:spinAround .5s linear infinite;border-radius:290486px;content:\"\";display:block;height:1em;position:relative;width:1em;position:absolute;top:calc(50% - 1.5em);left:calc(50% - 1.5em);width:3em;height:3em;border-color:transparent transparent #dbdbdb #dbdbdb;border-style:solid;border-width:.25em}.menu .menu-list li>a.is-disabled{pointer-events:none;cursor:not-allowed;opacity:.5}.message .media,.notification .media{padding-top:0;border:0}.modal.is-full-screen>.animation-content,.modal.is-full-screen>.animation-content>.modal-card{width:100%;height:100%;max-height:100vh;margin:0;background-color:#000}.modal .animation-content{margin:0 20px}.modal .animation-content .modal-card{margin:0}@media screen and (max-width:768px){.modal .animation-content{width:100%}}.modal .modal-content{width:100%}.notices{position:fixed;display:flex;top:0;bottom:0;left:0;right:0;padding:2em;overflow:hidden;z-index:1000;pointer-events:none}.notices .toast{display:inline-flex;-webkit-animation-duration:.15s;animation-duration:.15s;margin:.5em 0;text-align:center;box-shadow:0 1px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);border-radius:2em;padding:.75em 1.5em;pointer-events:auto;opacity:.92}.notices .toast.is-white{color:#0a0a0a;background:#fff}.notices .toast.is-black{color:#fff;background:#0a0a0a}.notices .toast.is-light{color:#363636;background:#f5f5f5}.notices .toast.is-dark{color:#f5f5f5;background:#363636}.notices .toast.is-primary{color:#fff;background:#00d1b2}.notices .toast.is-link{color:#fff;background:#3273dc}.notices .toast.is-info{color:#fff;background:#209cee}.notices .toast.is-success{color:#fff;background:#23d160}.notices .toast.is-warning{color:rgba(0,0,0,.7);background:#ffdd57}.notices .toast.is-danger{color:#fff;background:#ff3860}.notices .snackbar{display:inline-flex;align-items:center;justify-content:space-around;-webkit-animation-duration:.15s;animation-duration:.15s;margin:.5em 0;box-shadow:0 1px 4px rgba(0,0,0,.12),0 0 6px rgba(0,0,0,.04);border-radius:4px;pointer-events:auto;background:#363636;color:#f5f5f5;min-height:3em}.notices .snackbar .text{padding:.5em 1em}.notices .snackbar .action{margin-left:auto;padding:.5em .5em .5em 0}.notices .snackbar .action .button{font-weight:600;text-transform:uppercase;background:#363636;border:transparent}.notices .snackbar .action .button:active,.notices .snackbar .action .button:hover{background:#292929}.notices .snackbar .action.is-white .button{color:#fff}.notices .snackbar .action.is-black .button{color:#0a0a0a}.notices .snackbar .action.is-light .button{color:#f5f5f5}.notices .snackbar .action.is-dark .button{color:#363636}.notices .snackbar .action.is-primary .button{color:#00d1b2}.notices .snackbar .action.is-link .button{color:#3273dc}.notices .snackbar .action.is-info .button{color:#209cee}.notices .snackbar .action.is-success .button{color:#23d160}.notices .snackbar .action.is-warning .button{color:#ffdd57}.notices .snackbar .action.is-danger .button{color:#ff3860}@media screen and (max-width:768px){.notices .snackbar{width:100%;margin:0;border-radius:0}}@media print,screen and (min-width:769px){.notices .snackbar{min-width:350px;max-width:600px;overflow:hidden}}.notices .notification{max-width:600px}.notices .notification.is-bottom,.notices .notification.is-top,.notices .snackbar.is-bottom,.notices .snackbar.is-top,.notices .toast.is-bottom,.notices .toast.is-top{align-self:center}.notices .notification.is-bottom-right,.notices .notification.is-top-right,.notices .snackbar.is-bottom-right,.notices .snackbar.is-top-right,.notices .toast.is-bottom-right,.notices .toast.is-top-right{align-self:flex-end}.notices .notification.is-bottom-left,.notices .notification.is-top-left,.notices .snackbar.is-bottom-left,.notices .snackbar.is-top-left,.notices .toast.is-bottom-left,.notices .toast.is-top-left{align-self:flex-start}.notices .notification.is-toast,.notices .snackbar.is-toast,.notices .toast.is-toast{opacity:.92}.notices.is-top{flex-direction:column}.notices.is-bottom{flex-direction:column-reverse}.notices.is-bottom .notification{margin-bottom:0}.notices.is-bottom .notification:not(:first-child){margin-bottom:1.5rem}.notices.has-custom-container{position:absolute}@media screen and (max-width:768px){.notices{padding:0;position:fixed!important}}.b-numberinput.field{margin-bottom:0}.b-numberinput.field.has-addons.is-expanded,.b-numberinput.field.is-grouped div.control{flex-grow:1;flex-shrink:1}.b-numberinput input[type=number]::-webkit-inner-spin-button,.b-numberinput input[type=number]::-webkit-outer-spin-button{-webkit-appearance:none}.b-numberinput input[type=number]{-moz-appearance:textfield;text-align:center}.b-numberinput .button.is-rounded{padding-left:.75em;padding-right:.75em}.pagination .pagination-next,.pagination .pagination-previous{padding-left:.25em;padding-right:.25em}.pagination .pagination-next.is-disabled,.pagination .pagination-previous.is-disabled{pointer-events:none;cursor:not-allowed;opacity:.5}.pagination.is-simple{justify-content:normal}.pagination.is-simple.is-centered{justify-content:center}.pagination.is-simple.is-right{justify-content:flex-end}.pagination .is-current{pointer-events:none;cursor:not-allowed}.progress-wrapper{position:relative;overflow:hidden}.progress-wrapper:not(:last-child){margin-bottom:1.5rem}.progress-wrapper .progress-value{position:absolute;top:0;left:50%;transform:translateX(-50%);font-size:.66667rem;line-height:1rem;font-weight:700;color:#fff;white-space:nowrap}.progress-wrapper .progress{margin-bottom:0}.progress-wrapper .progress.is-small+.progress-value{font-size:.5rem;line-height:.75rem}.progress-wrapper .progress.is-medium+.progress-value{font-size:.83333rem;line-height:1.25rem}.progress-wrapper .progress.is-large+.progress-value{font-size:1rem;line-height:1.5rem}.progress-wrapper .progress:indeterminate::-ms-fill{animation-name:none}.progress-wrapper .progress::-webkit-progress-value{-webkit-transition:width .5s ease;transition:width .5s ease}.b-radio.radio{outline:none;display:inline-flex;align-items:center}.b-radio.radio:not(.button){margin-right:.5em}.b-radio.radio:not(.button)+.radio:last-child{margin-right:0}.b-radio.radio+.radio{margin-left:0}.b-radio.radio input[type=radio]{position:absolute;left:0;opacity:0;outline:none;z-index:-1}.b-radio.radio input[type=radio]+.check{display:flex;flex-shrink:0;position:relative;cursor:pointer;width:1.25em;height:1.25em;transition:background .15s ease-out;border-radius:50%;border:2px solid #7a7a7a}.b-radio.radio input[type=radio]+.check:before{content:\"\";display:flex;position:absolute;left:50%;margin-left:-.625em;bottom:50%;margin-bottom:-.625em;width:1.25em;height:1.25em;transition:transform .15s ease-out;border-radius:50%;transform:scale(0);background-color:#000}.b-radio.radio input[type=radio]+.check.is-white:before{background:#fff}.b-radio.radio input[type=radio]+.check.is-black:before{background:#0a0a0a}.b-radio.radio input[type=radio]+.check.is-light:before{background:#f5f5f5}.b-radio.radio input[type=radio]+.check.is-dark:before{background:#363636}.b-radio.radio input[type=radio]+.check.is-primary:before{background:#00d1b2}.b-radio.radio input[type=radio]+.check.is-link:before{background:#3273dc}.b-radio.radio input[type=radio]+.check.is-info:before{background:#209cee}.b-radio.radio input[type=radio]+.check.is-success:before{background:#23d160}.b-radio.radio input[type=radio]+.check.is-warning:before{background:#ffdd57}.b-radio.radio input[type=radio]+.check.is-danger:before{background:#ff3860}.b-radio.radio input[type=radio]:checked+.check{border-color:#000}.b-radio.radio input[type=radio]:checked+.check.is-white{border-color:#fff}.b-radio.radio input[type=radio]:checked+.check.is-black{border-color:#0a0a0a}.b-radio.radio input[type=radio]:checked+.check.is-light{border-color:#f5f5f5}.b-radio.radio input[type=radio]:checked+.check.is-dark{border-color:#363636}.b-radio.radio input[type=radio]:checked+.check.is-primary{border-color:#00d1b2}.b-radio.radio input[type=radio]:checked+.check.is-link{border-color:#3273dc}.b-radio.radio input[type=radio]:checked+.check.is-info{border-color:#209cee}.b-radio.radio input[type=radio]:checked+.check.is-success{border-color:#23d160}.b-radio.radio input[type=radio]:checked+.check.is-warning{border-color:#ffdd57}.b-radio.radio input[type=radio]:checked+.check.is-danger{border-color:#ff3860}.b-radio.radio input[type=radio]:checked+.check:before{transform:scale(.5)}.b-radio.radio input[type=radio]:focus+.check{box-shadow:0 0 .5em hsla(0,0%,47.8%,.8)}.b-radio.radio input[type=radio]:focus:checked+.check{box-shadow:0 0 .5em rgba(0,0,0,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-white{box-shadow:0 0 .5em hsla(0,0%,100%,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-black{box-shadow:0 0 .5em rgba(10,10,10,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-light{box-shadow:0 0 .5em hsla(0,0%,96.1%,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-dark{box-shadow:0 0 .5em rgba(54,54,54,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-primary{box-shadow:0 0 .5em rgba(0,209,178,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-link{box-shadow:0 0 .5em rgba(50,115,220,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-info{box-shadow:0 0 .5em rgba(32,156,238,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-success{box-shadow:0 0 .5em rgba(35,209,96,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-warning{box-shadow:0 0 .5em rgba(255,221,87,.8)}.b-radio.radio input[type=radio]:focus:checked+.check.is-danger{box-shadow:0 0 .5em rgba(255,56,96,.8)}.b-radio.radio .control-label{padding-left:.5em}.b-radio.radio.button{display:flex}.b-radio.radio[disabled]{opacity:.5}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check{border-color:#000}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-white{border-color:#fff}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-black{border-color:#0a0a0a}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-light{border-color:#f5f5f5}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-dark{border-color:#363636}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-primary{border-color:#00d1b2}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-link{border-color:#3273dc}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-info{border-color:#209cee}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-success{border-color:#23d160}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-warning{border-color:#ffdd57}.b-radio.radio:hover input[type=radio]:not(:disabled)+.check.is-danger{border-color:#ff3860}.b-radio.radio.is-small{border-radius:2px;font-size:.75rem}.b-radio.radio.is-medium{font-size:1.25rem}.b-radio.radio.is-large{font-size:1.5rem}.rate{align-items:center;display:flex}.rate:not(:last-child){margin-bottom:.75rem}.rate.is-spaced .rate-item:not(:last-child){margin-right:.25rem}.rate.is-disabled .rate-item{cursor:auto}.rate.is-disabled .rate-item:hover{transform:none}.rate.is-rtl .rate-item{order:1}.rate.is-rtl .rate-text{margin-left:0;margin-right:.35rem}.rate .rate-item{cursor:pointer;display:inline-flex;position:relative;transition:all .3s}.rate .rate-item:hover{transform:scale(1.1)}.rate .rate-item.set-half .is-half,.rate .rate-item.set-on .icon{color:#ffd83d}.rate .rate-item.set-half .is-half{position:absolute;left:0;top:0;overflow:hidden}.rate .icon{color:#dbdbdb;line-height:1;pointer-events:none;width:inherit}.rate .is-half>i{position:absolute;left:0}.rate .rate-text{font-size:.8rem;margin-left:.35rem}.rate .rate-text.is-small{font-size:.6rem}.rate .rate-text.is-medium{font-size:1rem}.rate .rate-text.is-large{font-size:1.2rem}.select select{text-rendering:auto!important;padding-right:2.5em}.select select option{color:#4a4a4a;padding:.25em .5em}.select select option:disabled{cursor:not-allowed;opacity:.5}.select select optgroup{color:#b5b5b5;font-weight:400;font-style:normal;padding:.25em 0}.select.is-empty select{color:hsla(0,0%,47.8%,.7)}.b-skeleton{width:100%}.b-skeleton>.b-skeleton-item{background:linear-gradient(90deg,#dbdbdb 25%,hsla(0,0%,85.9%,.5) 50%,#dbdbdb 75%);background-size:400% 100%;width:100%}.b-skeleton>.b-skeleton-item.is-rounded{border-radius:4px}.b-skeleton>.b-skeleton-item:after{content:\"\\00a0\"}.b-skeleton>.b-skeleton-item+.b-skeleton-item{margin-top:.5rem}.b-skeleton.is-animated>.b-skeleton-item{-webkit-animation:skeleton-loading 1.5s infinite;animation:skeleton-loading 1.5s infinite}.b-skeleton+.b-skeleton{margin-top:.5rem}.b-skeleton>.b-skeleton-item{line-height:1rem}.b-skeleton.is-small>.b-skeleton-item{line-height:.75rem}.b-skeleton.is-medium>.b-skeleton-item{line-height:1.25rem}.b-skeleton.is-large>.b-skeleton-item{line-height:1.5rem}@-webkit-keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}@keyframes skeleton-loading{0%{background-position:100% 50%}to{background-position:0 50%}}.b-sidebar .sidebar-content{background-color:#000;box-shadow:5px 0 13px 3px rgba(10,10,10,.1);width:260px;z-index:41}.b-sidebar .sidebar-content.is-white{background-color:#fff}.b-sidebar .sidebar-content.is-black{background-color:#0a0a0a}.b-sidebar .sidebar-content.is-light{background-color:#f5f5f5}.b-sidebar .sidebar-content.is-dark{background-color:#363636}.b-sidebar .sidebar-content.is-primary{background-color:#00d1b2}.b-sidebar .sidebar-content.is-link{background-color:#3273dc}.b-sidebar .sidebar-content.is-info{background-color:#209cee}.b-sidebar .sidebar-content.is-success{background-color:#23d160}.b-sidebar .sidebar-content.is-warning{background-color:#ffdd57}.b-sidebar .sidebar-content.is-danger{background-color:#ff3860}.b-sidebar .sidebar-content.is-fixed{position:fixed;left:0;top:0}.b-sidebar .sidebar-content.is-fixed.is-right{left:auto;right:0}.b-sidebar .sidebar-content.is-absolute{position:absolute;left:0;top:0}.b-sidebar .sidebar-content.is-absolute.is-right{left:auto;right:0}.b-sidebar .sidebar-content.is-mini{width:80px}.b-sidebar .sidebar-content.is-mini.is-mini-expand:hover{transition:width .15s ease-out}.b-sidebar .sidebar-content.is-mini.is-mini-expand:hover:not(.is-fullwidth){width:260px}.b-sidebar .sidebar-content.is-mini.is-mini-expand:hover:not(.is-fullwidth).is-mini-expand-fixed{position:fixed}.b-sidebar .sidebar-content.is-static{position:static}.b-sidebar .sidebar-content.is-absolute,.b-sidebar .sidebar-content.is-static{transition:width .15s ease-out}.b-sidebar .sidebar-content.is-fullwidth{width:100%;max-width:100%}.b-sidebar .sidebar-content.is-fullheight{height:100%;max-height:100%;overflow:hidden;overflow-y:auto;display:flex;flex-direction:column;align-content:stretch}@media screen and (max-width:1023px){.b-sidebar .sidebar-content.is-mini-mobile{width:80px}.b-sidebar .sidebar-content.is-mini-mobile.is-mini-expand:hover:not(.is-fullwidth-mobile){width:260px}.b-sidebar .sidebar-content.is-mini-mobile.is-mini-expand:hover:not(.is-fullwidth-mobile).is-mini-expand-fixed{position:fixed}.b-sidebar .sidebar-content.is-hidden-mobile{width:0;height:0;overflow:hidden}.b-sidebar .sidebar-content.is-fullwidth-mobile{width:100%;max-width:100%}}.b-sidebar .sidebar-background{bottom:0;left:0;position:absolute;right:0;top:0;background:rgba(10,10,10,.86);position:fixed;z-index:40}.b-slider{margin:1em 0;background:transparent;width:100%}.b-slider .b-slider-track{display:flex;align-items:center;position:relative;cursor:pointer;background:#dbdbdb;border-radius:4px}.b-slider .b-slider-fill{position:absolute;height:100%;box-shadow:0 0 0 #7a7a7a;background:#dbdbdb;border-radius:4px;border:0 solid #7a7a7a;top:50%;transform:translateY(-50%)}.b-slider .b-slider-thumb-wrapper{display:inline-flex;align-items:center;position:absolute;cursor:-webkit-grab;cursor:grab;transform:translate(-50%,-50%);top:50%;flex-direction:column}.b-slider .b-slider-thumb-wrapper .b-slider-thumb{box-shadow:none;border:1px solid #b5b5b5;border-radius:4px;background:#fff}.b-slider .b-slider-thumb-wrapper .b-slider-thumb:focus{transform:scale(1.25)}.b-slider .b-slider-thumb-wrapper.is-dragging{cursor:-webkit-grabbing;cursor:grabbing}.b-slider .b-slider-thumb-wrapper.is-dragging .b-slider-thumb{transform:scale(1.25)}.b-slider.slider-focus{padding-top:20px;padding-bottom:20px;margin-top:-20px;margin-bottom:-20px;cursor:pointer}.b-slider.is-rounded .b-slider-thumb{border-radius:290486px}.b-slider.is-disabled .b-slider-track{cursor:not-allowed;opacity:.5}.b-slider.is-disabled .b-slider-thumb-wrapper{cursor:not-allowed}.b-slider.is-disabled .b-slider-thumb-wrapper .b-slider-thumb{transform:scale(1)}.b-slider .b-slider-track{height:.5rem}.b-slider .b-slider-thumb{height:1rem;width:1rem}.b-slider .b-slider-tick{height:.25rem}.b-slider .b-slider-tick-label{font-size:.75rem;position:absolute;top:calc(.25rem + 2px);left:50%;transform:translateX(-50%)}.b-slider.is-small .b-slider-track{height:.375rem}.b-slider.is-small .b-slider-thumb{height:.75rem;width:.75rem}.b-slider.is-small .b-slider-tick{height:.1875rem}.b-slider.is-small .b-slider-tick-label{font-size:.75rem;position:absolute;top:calc(.1875rem + 2px);left:50%;transform:translateX(-50%)}.b-slider.is-medium .b-slider-track{height:.625rem}.b-slider.is-medium .b-slider-thumb{height:1.25rem;width:1.25rem}.b-slider.is-medium .b-slider-tick{height:.3125rem}.b-slider.is-medium .b-slider-tick-label{font-size:.75rem;position:absolute;top:calc(.3125rem + 2px);left:50%;transform:translateX(-50%)}.b-slider.is-large .b-slider-track{height:.75rem}.b-slider.is-large .b-slider-thumb{height:1.5rem;width:1.5rem}.b-slider.is-large .b-slider-tick{height:.375rem}.b-slider.is-large .b-slider-tick-label{font-size:.75rem;position:absolute;top:calc(.375rem + 2px);left:50%;transform:translateX(-50%)}.b-slider.is-white .b-slider-fill{background:#fff!important}.b-slider.is-black .b-slider-fill{background:#0a0a0a!important}.b-slider.is-light .b-slider-fill{background:#f5f5f5!important}.b-slider.is-dark .b-slider-fill{background:#363636!important}.b-slider.is-primary .b-slider-fill{background:#00d1b2!important}.b-slider.is-link .b-slider-fill{background:#3273dc!important}.b-slider.is-info .b-slider-fill{background:#209cee!important}.b-slider.is-success .b-slider-fill{background:#23d160!important}.b-slider.is-warning .b-slider-fill{background:#ffdd57!important}.b-slider.is-danger .b-slider-fill{background:#ff3860!important}.b-slider .b-slider-tick{position:absolute;width:3px;transform:translate(-50%,-50%);top:50%;background:#b5b5b5;border-radius:4px}.b-slider .b-slider-tick.is-tick-hidden{background:transparent}.b-steps .steps .step-items{display:flex;flex-wrap:wrap}.b-steps .steps .step-items .step-item{margin-top:0;position:relative;flex-grow:1;flex-basis:1em}.b-steps .steps .step-items .step-item .step-link{display:flex;align-items:center;justify-content:center;flex-direction:column;color:#fff}.b-steps .steps .step-items .step-item .step-link:not(.is-clickable){cursor:not-allowed}.b-steps .steps .step-items .step-item .step-marker{align-items:center;display:flex;border-radius:4px;font-weight:700;justify-content:center;background:#b5b5b5;border:.2em solid #fff;z-index:1;overflow:hidden}.b-steps .steps .step-items .step-item.is-white:after,.b-steps .steps .step-items .step-item.is-white:before{background:linear-gradient(270deg,#dbdbdb 50%,#fff 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-white.is-active .step-marker{background-color:#fff;border-color:#fff;color:#fff}.b-steps .steps .step-items .step-item.is-white.is-active:after,.b-steps .steps .step-items .step-item.is-white.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-white.is-previous .step-marker{color:#0a0a0a;background-color:#fff}.b-steps .steps .step-items .step-item.is-white.is-previous:after,.b-steps .steps .step-items .step-item.is-white.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-black:after,.b-steps .steps .step-items .step-item.is-black:before{background:linear-gradient(270deg,#dbdbdb 50%,#0a0a0a 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-black.is-active .step-marker{background-color:#fff;border-color:#0a0a0a;color:#0a0a0a}.b-steps .steps .step-items .step-item.is-black.is-active:after,.b-steps .steps .step-items .step-item.is-black.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-black.is-previous .step-marker{color:#fff;background-color:#0a0a0a}.b-steps .steps .step-items .step-item.is-black.is-previous:after,.b-steps .steps .step-items .step-item.is-black.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-light:after,.b-steps .steps .step-items .step-item.is-light:before{background:linear-gradient(270deg,#dbdbdb 50%,#f5f5f5 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-light.is-active .step-marker{background-color:#fff;border-color:#f5f5f5;color:#f5f5f5}.b-steps .steps .step-items .step-item.is-light.is-active:after,.b-steps .steps .step-items .step-item.is-light.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-light.is-previous .step-marker{color:#363636;background-color:#f5f5f5}.b-steps .steps .step-items .step-item.is-light.is-previous:after,.b-steps .steps .step-items .step-item.is-light.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-dark:after,.b-steps .steps .step-items .step-item.is-dark:before{background:linear-gradient(270deg,#dbdbdb 50%,#363636 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-dark.is-active .step-marker{background-color:#fff;border-color:#363636;color:#363636}.b-steps .steps .step-items .step-item.is-dark.is-active:after,.b-steps .steps .step-items .step-item.is-dark.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-dark.is-previous .step-marker{color:#f5f5f5;background-color:#363636}.b-steps .steps .step-items .step-item.is-dark.is-previous:after,.b-steps .steps .step-items .step-item.is-dark.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-primary:after,.b-steps .steps .step-items .step-item.is-primary:before{background:linear-gradient(270deg,#dbdbdb 50%,#00d1b2 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-primary.is-active .step-marker{background-color:#fff;border-color:#00d1b2;color:#00d1b2}.b-steps .steps .step-items .step-item.is-primary.is-active:after,.b-steps .steps .step-items .step-item.is-primary.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-primary.is-previous .step-marker{color:#fff;background-color:#00d1b2}.b-steps .steps .step-items .step-item.is-primary.is-previous:after,.b-steps .steps .step-items .step-item.is-primary.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-link:after,.b-steps .steps .step-items .step-item.is-link:before{background:linear-gradient(270deg,#dbdbdb 50%,#3273dc 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-link.is-active .step-marker{background-color:#fff;border-color:#3273dc;color:#3273dc}.b-steps .steps .step-items .step-item.is-link.is-active:after,.b-steps .steps .step-items .step-item.is-link.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-link.is-previous .step-marker{color:#fff;background-color:#3273dc}.b-steps .steps .step-items .step-item.is-link.is-previous:after,.b-steps .steps .step-items .step-item.is-link.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-info:after,.b-steps .steps .step-items .step-item.is-info:before{background:linear-gradient(270deg,#dbdbdb 50%,#209cee 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-info.is-active .step-marker{background-color:#fff;border-color:#209cee;color:#209cee}.b-steps .steps .step-items .step-item.is-info.is-active:after,.b-steps .steps .step-items .step-item.is-info.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-info.is-previous .step-marker{color:#fff;background-color:#209cee}.b-steps .steps .step-items .step-item.is-info.is-previous:after,.b-steps .steps .step-items .step-item.is-info.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-success:after,.b-steps .steps .step-items .step-item.is-success:before{background:linear-gradient(270deg,#dbdbdb 50%,#23d160 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-success.is-active .step-marker{background-color:#fff;border-color:#23d160;color:#23d160}.b-steps .steps .step-items .step-item.is-success.is-active:after,.b-steps .steps .step-items .step-item.is-success.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-success.is-previous .step-marker{color:#fff;background-color:#23d160}.b-steps .steps .step-items .step-item.is-success.is-previous:after,.b-steps .steps .step-items .step-item.is-success.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-warning:after,.b-steps .steps .step-items .step-item.is-warning:before{background:linear-gradient(270deg,#dbdbdb 50%,#ffdd57 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-warning.is-active .step-marker{background-color:#fff;border-color:#ffdd57;color:#ffdd57}.b-steps .steps .step-items .step-item.is-warning.is-active:after,.b-steps .steps .step-items .step-item.is-warning.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-warning.is-previous .step-marker{color:rgba(0,0,0,.7);background-color:#ffdd57}.b-steps .steps .step-items .step-item.is-warning.is-previous:after,.b-steps .steps .step-items .step-item.is-warning.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-danger:after,.b-steps .steps .step-items .step-item.is-danger:before{background:linear-gradient(270deg,#dbdbdb 50%,#ff3860 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-danger.is-active .step-marker{background-color:#fff;border-color:#ff3860;color:#ff3860}.b-steps .steps .step-items .step-item.is-danger.is-active:after,.b-steps .steps .step-items .step-item.is-danger.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-danger.is-previous .step-marker{color:#fff;background-color:#ff3860}.b-steps .steps .step-items .step-item.is-danger.is-previous:after,.b-steps .steps .step-items .step-item.is-danger.is-previous:before{background-position:0 100%}.b-steps .steps .step-items .step-item .step-marker{color:#fff}.b-steps .steps .step-items .step-item .step-details{text-align:center;z-index:1}.b-steps .steps .step-items .step-item:not(:first-child),.b-steps .steps .step-items .step-item:only-child{flex-shrink:1}.b-steps .steps .step-items .step-item:not(:first-child):before,.b-steps .steps .step-items .step-item:only-child:before{content:\" \";display:block;position:absolute;width:100%;bottom:0;left:-50%}.b-steps .steps .step-items .step-item:only-child:after{content:\" \";display:block;position:absolute;height:.2em;bottom:0}.b-steps .steps .step-items .step-item:only-child:after,.b-steps .steps .step-items .step-item:only-child:before{width:25%;left:50%}.b-steps .steps .step-items .step-item:only-child:before{right:50%;left:auto}.b-steps .steps .step-items .step-item:after,.b-steps .steps .step-items .step-item:before{background:linear-gradient(270deg,#dbdbdb 50%,#000 0);background-size:200% 100%;background-position:100% 100%}.b-steps .steps .step-items .step-item.is-active .step-link{cursor:default}.b-steps .steps .step-items .step-item.is-active .step-marker{background-color:#fff;border-color:#000;color:#000}.b-steps .steps .step-items .step-item.is-active:after,.b-steps .steps .step-items .step-item.is-active:before{background-position:0 100%}.b-steps .steps .step-items .step-item.is-previous .step-marker{color:#fff;background-color:#000}.b-steps .steps .step-items .step-item.is-previous:after,.b-steps .steps .step-items .step-item.is-previous:before{background-position:0 100%}.b-steps .steps+.step-content{position:relative;overflow:visible;display:flex;flex-direction:column;padding:1rem}.b-steps .steps+.step-content .step-item{flex-shrink:0;flex-basis:auto}.b-steps .steps+.step-content.is-transitioning{overflow:hidden}.b-steps .steps.is-rounded .step-item .step-marker{border-radius:290486px}.b-steps .steps.is-animated .step-item:not(:first-child):before,.b-steps .steps.is-animated .step-item:only-child:before{transition:background .15s ease-out}.b-steps .steps.has-label-left .step-items .step-item .step-link,.b-steps .steps.has-label-right .step-items .step-item .step-link{flex-direction:row}.b-steps .steps.has-label-left .step-items .step-item .step-link>.step-details,.b-steps .steps.has-label-right .step-items .step-item .step-link>.step-details{background-color:#fff;padding:.2em}.b-steps .steps.has-label-left .step-items .step-item .step-link{flex-direction:row-reverse}.b-steps .steps{font-size:1rem;min-height:2rem}.b-steps .steps .step-items .step-item .step-marker{height:2rem;width:2rem}.b-steps .steps .step-items .step-item .step-marker .icon *,.b-steps .steps .step-items .step-item .step-marker .icon :before{font-size:1rem}.b-steps .steps .step-items .step-item .step-details .step-title{font-size:1.2rem;font-weight:600;line-height:1rem}.b-steps .steps .step-items .step-item:not(:first-child):before,.b-steps .steps .step-items .step-item:only-child:before{height:.2em;top:1rem}.b-steps .steps .step-items .step-item:only-child:after{top:1rem}@media screen and (max-width:768px){.b-steps .steps .step-items .step-item:after,.b-steps .steps .step-items .step-item:before,.b-steps .steps .step-items .step-item:not(:first-child):before{top:1rem}}.b-steps.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-vertical>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-vertical>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(1rem - .1em)}.b-steps.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-vertical>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-vertical>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(1rem - .1em)}.b-steps.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(1rem - .1em)}.b-steps.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(1rem - .1em)}.b-steps.is-small .steps{font-size:.75rem;min-height:1.5rem}.b-steps.is-small .steps .step-items .step-item .step-marker{height:1.5rem;width:1.5rem}.b-steps.is-small .steps .step-items .step-item .step-marker .icon *,.b-steps.is-small .steps .step-items .step-item .step-marker .icon :before{font-size:.75rem}.b-steps.is-small .steps .step-items .step-item .step-details .step-title{font-size:.9rem;font-weight:600;line-height:.75rem}.b-steps.is-small .steps .step-items .step-item:not(:first-child):before,.b-steps.is-small .steps .step-items .step-item:only-child:before{height:.2em;top:.75rem}.b-steps.is-small .steps .step-items .step-item:only-child:after{top:.75rem}@media screen and (max-width:768px){.b-steps.is-small .steps .step-items .step-item:after,.b-steps.is-small .steps .step-items .step-item:before,.b-steps.is-small .steps .step-items .step-item:not(:first-child):before{top:.75rem}}.b-steps.is-small.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-small.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-small.is-vertical>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-small.is-vertical>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(.75rem - .1em)}.b-steps.is-small.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-small.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-small.is-vertical>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-small.is-vertical>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(.75rem - .1em)}.b-steps.is-small.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-small.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-small.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-small.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(.75rem - .1em)}.b-steps.is-small.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-small.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-small.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-small.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(.75rem - .1em)}.b-steps.is-medium .steps{font-size:1.25rem;min-height:2.5rem}.b-steps.is-medium .steps .step-items .step-item .step-marker{height:2.5rem;width:2.5rem}.b-steps.is-medium .steps .step-items .step-item .step-marker .icon *,.b-steps.is-medium .steps .step-items .step-item .step-marker .icon :before{font-size:1.25rem}.b-steps.is-medium .steps .step-items .step-item .step-details .step-title{font-size:1.5rem;font-weight:600;line-height:1.25rem}.b-steps.is-medium .steps .step-items .step-item:not(:first-child):before,.b-steps.is-medium .steps .step-items .step-item:only-child:before{height:.2em;top:1.25rem}.b-steps.is-medium .steps .step-items .step-item:only-child:after{top:1.25rem}@media screen and (max-width:768px){.b-steps.is-medium .steps .step-items .step-item:after,.b-steps.is-medium .steps .step-items .step-item:before,.b-steps.is-medium .steps .step-items .step-item:not(:first-child):before{top:1.25rem}}.b-steps.is-medium.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-medium.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-medium.is-vertical>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-medium.is-vertical>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(1.25rem - .1em)}.b-steps.is-medium.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-medium.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-medium.is-vertical>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-medium.is-vertical>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(1.25rem - .1em)}.b-steps.is-medium.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-medium.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-medium.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-medium.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(1.25rem - .1em)}.b-steps.is-medium.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-medium.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-medium.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-medium.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(1.25rem - .1em)}.b-steps.is-large .steps{font-size:1.5rem;min-height:3rem}.b-steps.is-large .steps .step-items .step-item .step-marker{height:3rem;width:3rem}.b-steps.is-large .steps .step-items .step-item .step-marker .icon *,.b-steps.is-large .steps .step-items .step-item .step-marker .icon :before{font-size:1.5rem}.b-steps.is-large .steps .step-items .step-item .step-details .step-title{font-size:1.8rem;font-weight:600;line-height:1.5rem}.b-steps.is-large .steps .step-items .step-item:not(:first-child):before,.b-steps.is-large .steps .step-items .step-item:only-child:before{height:.2em;top:1.5rem}.b-steps.is-large .steps .step-items .step-item:only-child:after{top:1.5rem}@media screen and (max-width:768px){.b-steps.is-large .steps .step-items .step-item:after,.b-steps.is-large .steps .step-items .step-item:before,.b-steps.is-large .steps .step-items .step-item:not(:first-child):before{top:1.5rem}}.b-steps.is-large.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-large.is-vertical>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-large.is-vertical>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-large.is-vertical>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(1.5rem - .1em)}.b-steps.is-large.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-large.is-vertical>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-large.is-vertical>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-large.is-vertical>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(1.5rem - .1em)}.b-steps.is-large.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):after,.b-steps.is-large.is-vertical.is-right>.steps.has-label-right .step-items .step-item:not(:first-child):before,.b-steps.is-large.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:after,.b-steps.is-large.is-vertical.is-right>.steps.has-label-right .step-items .step-item:only-child:before{left:calc(1.5rem - .1em)}.b-steps.is-large.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):after,.b-steps.is-large.is-vertical.is-right>.steps.has-label-left .step-items .step-item:not(:first-child):before,.b-steps.is-large.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:after,.b-steps.is-large.is-vertical.is-right>.steps.has-label-left .step-items .step-item:only-child:before{left:auto;right:calc(1.5rem - .1em)}.b-steps.is-vertical{display:flex;flex-direction:row;flex-wrap:wrap}.b-steps.is-vertical>.steps .step-items{height:100%;flex-direction:column;border-bottom-color:transparent}.b-steps.is-vertical>.steps .step-items .step-item{width:100%;display:flex;align-items:center;justify-content:center;padding:1em 0}.b-steps.is-vertical>.steps .step-items .step-item:after,.b-steps.is-vertical>.steps .step-items .step-item:before{background:linear-gradient(0deg,#dbdbdb 50%,#000 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-white:after,.b-steps.is-vertical>.steps .step-items .step-item.is-white:before{background:linear-gradient(0deg,#dbdbdb 50%,#fff 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-black:after,.b-steps.is-vertical>.steps .step-items .step-item.is-black:before{background:linear-gradient(0deg,#dbdbdb 50%,#0a0a0a 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-light:after,.b-steps.is-vertical>.steps .step-items .step-item.is-light:before{background:linear-gradient(0deg,#dbdbdb 50%,#f5f5f5 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-dark:after,.b-steps.is-vertical>.steps .step-items .step-item.is-dark:before{background:linear-gradient(0deg,#dbdbdb 50%,#363636 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-primary:after,.b-steps.is-vertical>.steps .step-items .step-item.is-primary:before{background:linear-gradient(0deg,#dbdbdb 50%,#00d1b2 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-link:after,.b-steps.is-vertical>.steps .step-items .step-item.is-link:before{background:linear-gradient(0deg,#dbdbdb 50%,#3273dc 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-info:after,.b-steps.is-vertical>.steps .step-items .step-item.is-info:before{background:linear-gradient(0deg,#dbdbdb 50%,#209cee 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-success:after,.b-steps.is-vertical>.steps .step-items .step-item.is-success:before{background:linear-gradient(0deg,#dbdbdb 50%,#23d160 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-warning:after,.b-steps.is-vertical>.steps .step-items .step-item.is-warning:before{background:linear-gradient(0deg,#dbdbdb 50%,#ffdd57 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item.is-danger:after,.b-steps.is-vertical>.steps .step-items .step-item.is-danger:before{background:linear-gradient(0deg,#dbdbdb 50%,#ff3860 0);background-size:100% 200%;background-position:0 100%}.b-steps.is-vertical>.steps .step-items .step-item:not(:first-child):before,.b-steps.is-vertical>.steps .step-items .step-item:only-child:before{height:100%;width:.2em;top:-50%;left:calc(50% - .1em)}.b-steps.is-vertical>.steps .step-items .step-item.is-active:after,.b-steps.is-vertical>.steps .step-items .step-item.is-active:before,.b-steps.is-vertical>.steps .step-items .step-item.is-previous:after,.b-steps.is-vertical>.steps .step-items .step-item.is-previous:before{background-position:100% 0}.b-steps.is-vertical>.steps .step-items .step-item:only-child:before{top:50%}.b-steps.is-vertical>.steps .step-items .step-item:only-child:after{width:.2em;top:auto;bottom:50%}.b-steps.is-vertical>.steps .step-items .step-item:only-child:after,.b-steps.is-vertical>.steps .step-items .step-item:only-child:before{height:25%}.b-steps.is-vertical>.steps.has-label-right .step-items .step-item{justify-content:flex-start}.b-steps.is-vertical>.steps.has-label-left .step-items .step-item{justify-content:flex-end}.b-steps.is-vertical>.steps:not(.has-label-right):not(.has-label-left) .step-items .step-item .step-link>.step-details{background-color:#fff}.b-steps.is-vertical>.step-content{flex-grow:1}.b-steps.is-vertical>.step-navigation{flex-basis:100%}.b-steps.is-vertical.is-right{flex-direction:row-reverse}@media screen and (max-width:768px){.b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:not(.is-active){display:none}.b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:after,.b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:before,.b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:not(:first-child):before{content:\" \";display:block;position:absolute;height:.2em;width:25%;bottom:0;left:50%}.b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:before,.b-steps:not(.is-vertical) .steps.mobile-minimalist .step-items .step-item:not(:first-child):before{right:50%;left:auto}.b-steps:not(.is-vertical) .steps.mobile-compact .step-items .step-item:not(.is-active) .step-details{display:none}}.switch{cursor:pointer;display:inline-flex;align-items:center;position:relative;margin-right:.5em}.switch+.switch:last-child{margin-right:0}.switch input[type=checkbox]{position:absolute;left:0;opacity:0;outline:none;z-index:-1}.switch input[type=checkbox]+.check{display:flex;align-items:center;flex-shrink:0;width:2.75em;height:1.575em;padding:.2em;background:#b5b5b5;border-radius:4px;transition:background .15s ease-out,box-shadow .15s ease-out}.switch input[type=checkbox]+.check.is-white-passive,.switch input[type=checkbox]+.check:hover{background:#fff}.switch input[type=checkbox]+.check.is-black-passive,.switch input[type=checkbox]+.check:hover{background:#0a0a0a}.switch input[type=checkbox]+.check.is-light-passive,.switch input[type=checkbox]+.check:hover{background:#f5f5f5}.switch input[type=checkbox]+.check.is-dark-passive,.switch input[type=checkbox]+.check:hover{background:#363636}.switch input[type=checkbox]+.check.is-primary-passive,.switch input[type=checkbox]+.check:hover{background:#00d1b2}.switch input[type=checkbox]+.check.is-link-passive,.switch input[type=checkbox]+.check:hover{background:#3273dc}.switch input[type=checkbox]+.check.is-info-passive,.switch input[type=checkbox]+.check:hover{background:#209cee}.switch input[type=checkbox]+.check.is-success-passive,.switch input[type=checkbox]+.check:hover{background:#23d160}.switch input[type=checkbox]+.check.is-warning-passive,.switch input[type=checkbox]+.check:hover{background:#ffdd57}.switch input[type=checkbox]+.check.is-danger-passive,.switch input[type=checkbox]+.check:hover{background:#ff3860}.switch .taginput input[type=checkbox]+.check.taginput-container.is-focusable[type=checkbox]+.switch input[type=checkbox]+.check.check,.switch input[type=checkbox]+.check.input[type=checkbox]+.switch input[type=checkbox]+.check.check,.taginput .switch input[type=checkbox]+.check.taginput-container.is-focusable[type=checkbox]+.switch input[type=checkbox]+.check.check{background:\"pink\"}.switch input[type=checkbox]+.check:before{content:\"\";display:block;border-radius:4px;width:1.175em;height:1.175em;background:#000;box-shadow:0 3px 1px 0 rgba(0,0,0,.05),0 2px 2px 0 rgba(0,0,0,.1),0 3px 3px 0 rgba(0,0,0,.05);transition:transform .15s ease-out;will-change:transform;transform-origin:left}.switch input[type=checkbox]+.check.is-elastic:before{transform:scaleX(1.5);border-radius:4px}.switch input[type=checkbox]:checked+.check{background:#000}.switch input[type=checkbox]:checked+.check.is-white{background:#fff}.switch input[type=checkbox]:checked+.check.is-black{background:#0a0a0a}.switch input[type=checkbox]:checked+.check.is-light{background:#f5f5f5}.switch input[type=checkbox]:checked+.check.is-dark{background:#363636}.switch input[type=checkbox]:checked+.check.is-primary{background:#00d1b2}.switch input[type=checkbox]:checked+.check.is-link{background:#3273dc}.switch input[type=checkbox]:checked+.check.is-info{background:#209cee}.switch input[type=checkbox]:checked+.check.is-success{background:#23d160}.switch input[type=checkbox]:checked+.check.is-warning{background:#ffdd57}.switch input[type=checkbox]:checked+.check.is-danger{background:#ff3860}.switch input[type=checkbox]:checked+.check:before{transform:translate3d(100%,0,0)}.switch input[type=checkbox]:checked+.check.is-elastic:before{transform:translate3d(50%,0,0) scaleX(1.5)}.switch input[type=checkbox]:active,.switch input[type=checkbox]:focus{outline:none}.switch input[type=checkbox]:active+.check,.switch input[type=checkbox]:focus+.check{box-shadow:0 0 .5em hsla(0,0%,47.8%,.6)}.switch input[type=checkbox]:active+.check.is-white-passive,.switch input[type=checkbox]:focus+.check.is-white-passive{box-shadow:0 0 .5em hsla(0,0%,100%,.8)}.switch input[type=checkbox]:active+.check.is-black-passive,.switch input[type=checkbox]:focus+.check.is-black-passive{box-shadow:0 0 .5em rgba(10,10,10,.8)}.switch input[type=checkbox]:active+.check.is-light-passive,.switch input[type=checkbox]:focus+.check.is-light-passive{box-shadow:0 0 .5em hsla(0,0%,96.1%,.8)}.switch input[type=checkbox]:active+.check.is-dark-passive,.switch input[type=checkbox]:focus+.check.is-dark-passive{box-shadow:0 0 .5em rgba(54,54,54,.8)}.switch input[type=checkbox]:active+.check.is-primary-passive,.switch input[type=checkbox]:focus+.check.is-primary-passive{box-shadow:0 0 .5em rgba(0,209,178,.8)}.switch input[type=checkbox]:active+.check.is-link-passive,.switch input[type=checkbox]:focus+.check.is-link-passive{box-shadow:0 0 .5em rgba(50,115,220,.8)}.switch input[type=checkbox]:active+.check.is-info-passive,.switch input[type=checkbox]:focus+.check.is-info-passive{box-shadow:0 0 .5em rgba(32,156,238,.8)}.switch input[type=checkbox]:active+.check.is-success-passive,.switch input[type=checkbox]:focus+.check.is-success-passive{box-shadow:0 0 .5em rgba(35,209,96,.8)}.switch input[type=checkbox]:active+.check.is-warning-passive,.switch input[type=checkbox]:focus+.check.is-warning-passive{box-shadow:0 0 .5em rgba(255,221,87,.8)}.switch input[type=checkbox]:active+.check.is-danger-passive,.switch input[type=checkbox]:focus+.check.is-danger-passive{box-shadow:0 0 .5em rgba(255,56,96,.8)}.switch input[type=checkbox]:active:checked+.check,.switch input[type=checkbox]:focus:checked+.check{box-shadow:0 0 .5em rgba(0,0,0,.8)}.switch input[type=checkbox]:active:checked+.check.is-white,.switch input[type=checkbox]:focus:checked+.check.is-white{box-shadow:0 0 .5em hsla(0,0%,100%,.8)}.switch input[type=checkbox]:active:checked+.check.is-black,.switch input[type=checkbox]:focus:checked+.check.is-black{box-shadow:0 0 .5em rgba(10,10,10,.8)}.switch input[type=checkbox]:active:checked+.check.is-light,.switch input[type=checkbox]:focus:checked+.check.is-light{box-shadow:0 0 .5em hsla(0,0%,96.1%,.8)}.switch input[type=checkbox]:active:checked+.check.is-dark,.switch input[type=checkbox]:focus:checked+.check.is-dark{box-shadow:0 0 .5em rgba(54,54,54,.8)}.switch input[type=checkbox]:active:checked+.check.is-primary,.switch input[type=checkbox]:focus:checked+.check.is-primary{box-shadow:0 0 .5em rgba(0,209,178,.8)}.switch input[type=checkbox]:active:checked+.check.is-link,.switch input[type=checkbox]:focus:checked+.check.is-link{box-shadow:0 0 .5em rgba(50,115,220,.8)}.switch input[type=checkbox]:active:checked+.check.is-info,.switch input[type=checkbox]:focus:checked+.check.is-info{box-shadow:0 0 .5em rgba(32,156,238,.8)}.switch input[type=checkbox]:active:checked+.check.is-success,.switch input[type=checkbox]:focus:checked+.check.is-success{box-shadow:0 0 .5em rgba(35,209,96,.8)}.switch input[type=checkbox]:active:checked+.check.is-warning,.switch input[type=checkbox]:focus:checked+.check.is-warning{box-shadow:0 0 .5em rgba(255,221,87,.8)}.switch input[type=checkbox]:active:checked+.check.is-danger,.switch input[type=checkbox]:focus:checked+.check.is-danger{box-shadow:0 0 .5em rgba(255,56,96,.8)}.switch .control-label{padding-left:.5em}.switch:hover input[type=checkbox]+.check{background:hsla(0,0%,71%,.9)}.switch:hover input[type=checkbox]+.check.is-white-passive{background:hsla(0,0%,100%,.9)}.switch:hover input[type=checkbox]+.check.is-black-passive{background:rgba(10,10,10,.9)}.switch:hover input[type=checkbox]+.check.is-light-passive{background:hsla(0,0%,96.1%,.9)}.switch:hover input[type=checkbox]+.check.is-dark-passive{background:rgba(54,54,54,.9)}.switch:hover input[type=checkbox]+.check.is-primary-passive{background:rgba(0,209,178,.9)}.switch:hover input[type=checkbox]+.check.is-link-passive{background:rgba(50,115,220,.9)}.switch:hover input[type=checkbox]+.check.is-info-passive{background:rgba(32,156,238,.9)}.switch:hover input[type=checkbox]+.check.is-success-passive{background:rgba(35,209,96,.9)}.switch:hover input[type=checkbox]+.check.is-warning-passive{background:rgba(255,221,87,.9)}.switch:hover input[type=checkbox]+.check.is-danger-passive{background:rgba(255,56,96,.9)}.switch:hover input[type=checkbox]:checked+.check{background:rgba(0,0,0,.9)}.switch:hover input[type=checkbox]:checked+.check.is-white{background:hsla(0,0%,100%,.9)}.switch:hover input[type=checkbox]:checked+.check.is-black{background:rgba(10,10,10,.9)}.switch:hover input[type=checkbox]:checked+.check.is-light{background:hsla(0,0%,96.1%,.9)}.switch:hover input[type=checkbox]:checked+.check.is-dark{background:rgba(54,54,54,.9)}.switch:hover input[type=checkbox]:checked+.check.is-primary{background:rgba(0,209,178,.9)}.switch:hover input[type=checkbox]:checked+.check.is-link{background:rgba(50,115,220,.9)}.switch:hover input[type=checkbox]:checked+.check.is-info{background:rgba(32,156,238,.9)}.switch:hover input[type=checkbox]:checked+.check.is-success{background:rgba(35,209,96,.9)}.switch:hover input[type=checkbox]:checked+.check.is-warning{background:rgba(255,221,87,.9)}.switch:hover input[type=checkbox]:checked+.check.is-danger{background:rgba(255,56,96,.9)}.switch.is-rounded input[type=checkbox]+.check,.switch.is-rounded input[type=checkbox]+.check:before{border-radius:290486px}.switch.is-rounded input[type=checkbox].is-elastic:before{transform:scaleX(1.5);border-radius:290486px}.switch.is-outlined input[type=checkbox]+.check{background:transparent;border:.1rem solid #b5b5b5}.switch.is-outlined input[type=checkbox]+.check.is-white-passive{border:.1rem solid hsla(0,0%,100%,.9)}.switch.is-outlined input[type=checkbox]+.check.is-white-passive:before{background:#fff}.switch.is-outlined input[type=checkbox]+.check.is-white-passive:hover{border-color:hsla(0,0%,100%,.9)}.switch.is-outlined input[type=checkbox]+.check.is-black-passive{border:.1rem solid rgba(10,10,10,.9)}.switch.is-outlined input[type=checkbox]+.check.is-black-passive:before{background:#0a0a0a}.switch.is-outlined input[type=checkbox]+.check.is-black-passive:hover{border-color:rgba(10,10,10,.9)}.switch.is-outlined input[type=checkbox]+.check.is-light-passive{border:.1rem solid hsla(0,0%,96.1%,.9)}.switch.is-outlined input[type=checkbox]+.check.is-light-passive:before{background:#f5f5f5}.switch.is-outlined input[type=checkbox]+.check.is-light-passive:hover{border-color:hsla(0,0%,96.1%,.9)}.switch.is-outlined input[type=checkbox]+.check.is-dark-passive{border:.1rem solid rgba(54,54,54,.9)}.switch.is-outlined input[type=checkbox]+.check.is-dark-passive:before{background:#363636}.switch.is-outlined input[type=checkbox]+.check.is-dark-passive:hover{border-color:rgba(54,54,54,.9)}.switch.is-outlined input[type=checkbox]+.check.is-primary-passive{border:.1rem solid rgba(0,209,178,.9)}.switch.is-outlined input[type=checkbox]+.check.is-primary-passive:before{background:#00d1b2}.switch.is-outlined input[type=checkbox]+.check.is-primary-passive:hover{border-color:rgba(0,209,178,.9)}.switch.is-outlined input[type=checkbox]+.check.is-link-passive{border:.1rem solid rgba(50,115,220,.9)}.switch.is-outlined input[type=checkbox]+.check.is-link-passive:before{background:#3273dc}.switch.is-outlined input[type=checkbox]+.check.is-link-passive:hover{border-color:rgba(50,115,220,.9)}.switch.is-outlined input[type=checkbox]+.check.is-info-passive{border:.1rem solid rgba(32,156,238,.9)}.switch.is-outlined input[type=checkbox]+.check.is-info-passive:before{background:#209cee}.switch.is-outlined input[type=checkbox]+.check.is-info-passive:hover{border-color:rgba(32,156,238,.9)}.switch.is-outlined input[type=checkbox]+.check.is-success-passive{border:.1rem solid rgba(35,209,96,.9)}.switch.is-outlined input[type=checkbox]+.check.is-success-passive:before{background:#23d160}.switch.is-outlined input[type=checkbox]+.check.is-success-passive:hover{border-color:rgba(35,209,96,.9)}.switch.is-outlined input[type=checkbox]+.check.is-warning-passive{border:.1rem solid rgba(255,221,87,.9)}.switch.is-outlined input[type=checkbox]+.check.is-warning-passive:before{background:#ffdd57}.switch.is-outlined input[type=checkbox]+.check.is-warning-passive:hover{border-color:rgba(255,221,87,.9)}.switch.is-outlined input[type=checkbox]+.check.is-danger-passive{border:.1rem solid rgba(255,56,96,.9)}.switch.is-outlined input[type=checkbox]+.check.is-danger-passive:before{background:#ff3860}.switch.is-outlined input[type=checkbox]+.check.is-danger-passive:hover{border-color:rgba(255,56,96,.9)}.switch.is-outlined input[type=checkbox]+.check:before{background:#b5b5b5}.switch.is-outlined input[type=checkbox]:checked+.check{border-color:#000}.switch.is-outlined input[type=checkbox]:checked+.check.is-white{background:transparent;border-color:#fff}.switch.is-outlined input[type=checkbox]:checked+.check.is-white:before{background:#fff}.switch.is-outlined input[type=checkbox]:checked+.check.is-black{background:transparent;border-color:#0a0a0a}.switch.is-outlined input[type=checkbox]:checked+.check.is-black:before{background:#0a0a0a}.switch.is-outlined input[type=checkbox]:checked+.check.is-light{background:transparent;border-color:#f5f5f5}.switch.is-outlined input[type=checkbox]:checked+.check.is-light:before{background:#f5f5f5}.switch.is-outlined input[type=checkbox]:checked+.check.is-dark{background:transparent;border-color:#363636}.switch.is-outlined input[type=checkbox]:checked+.check.is-dark:before{background:#363636}.switch.is-outlined input[type=checkbox]:checked+.check.is-primary{background:transparent;border-color:#00d1b2}.switch.is-outlined input[type=checkbox]:checked+.check.is-primary:before{background:#00d1b2}.switch.is-outlined input[type=checkbox]:checked+.check.is-link{background:transparent;border-color:#3273dc}.switch.is-outlined input[type=checkbox]:checked+.check.is-link:before{background:#3273dc}.switch.is-outlined input[type=checkbox]:checked+.check.is-info{background:transparent;border-color:#209cee}.switch.is-outlined input[type=checkbox]:checked+.check.is-info:before{background:#209cee}.switch.is-outlined input[type=checkbox]:checked+.check.is-success{background:transparent;border-color:#23d160}.switch.is-outlined input[type=checkbox]:checked+.check.is-success:before{background:#23d160}.switch.is-outlined input[type=checkbox]:checked+.check.is-warning{background:transparent;border-color:#ffdd57}.switch.is-outlined input[type=checkbox]:checked+.check.is-warning:before{background:#ffdd57}.switch.is-outlined input[type=checkbox]:checked+.check.is-danger{background:transparent;border-color:#ff3860}.switch.is-outlined input[type=checkbox]:checked+.check.is-danger:before{background:#ff3860}.switch.is-outlined input[type=checkbox]:checked+.check:before{background:#000}.switch.is-outlined:hover input[type=checkbox]+.check{background:transparent;border-color:hsla(0,0%,71%,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check{background:transparent;border-color:rgba(0,0,0,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-white{border-color:hsla(0,0%,100%,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-black{border-color:rgba(10,10,10,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-light{border-color:hsla(0,0%,96.1%,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-dark{border-color:rgba(54,54,54,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-primary{border-color:rgba(0,209,178,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-link{border-color:rgba(50,115,220,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-info{border-color:rgba(32,156,238,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-success{border-color:rgba(35,209,96,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-warning{border-color:rgba(255,221,87,.9)}.switch.is-outlined:hover input[type=checkbox]:checked+.check.is-danger{border-color:rgba(255,56,96,.9)}.switch.is-small{border-radius:2px;font-size:.75rem}.switch.is-medium{font-size:1.25rem}.switch.is-large{font-size:1.5rem}.switch[disabled]{opacity:.5;cursor:not-allowed;color:#7a7a7a}.table-wrapper .table{margin-bottom:0}.table-wrapper:not(:last-child){margin-bottom:1.5rem}@media screen and (max-width:1023px){.table-wrapper{overflow-x:auto}}.b-table{transition:opacity 86ms ease-out}@media print,screen and (min-width:769px){.b-table .table-mobile-sort{display:none}}.b-table .icon{transition:transform .15s ease-out,opacity 86ms ease-out}.b-table .icon.is-desc{transform:rotate(180deg)}.b-table .icon.is-expanded{transform:rotate(90deg)}.b-table .table{width:100%;border:1px solid transparent;border-radius:4px;border-collapse:separate}.b-table .table th{font-weight:600}.b-table .table th .th-wrap{display:flex;align-items:center}.b-table .table th .th-wrap .icon{margin-left:.5rem;margin-right:0;font-size:1rem}.b-table .table th .th-wrap.is-numeric{flex-direction:row-reverse;text-align:right}.b-table .table th .th-wrap.is-numeric .icon{margin-left:0;margin-right:.5rem}.b-table .table th .th-wrap.is-centered{justify-content:center;text-align:center}.b-table .table th.is-current-sort{border-color:#7a7a7a;font-weight:700}.b-table .table th.is-sortable:hover{border-color:#7a7a7a}.b-table .table th.is-sortable,.b-table .table th.is-sortable .th-wrap{cursor:pointer}.b-table .table th .multi-sort-cancel-icon{margin-left:10px}.b-table .table th.is-sticky{position:-webkit-sticky;position:sticky;left:0;z-index:3!important;background:#222c3c}.b-table .table tr.is-selected .checkbox input:checked+.check{background:#00f url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'%3E%3Cpath d='M.04.627L.146.52.43.804.323.91zm.177.177L.854.167.96.273.323.91z'/%3E%3C/svg%3E\") no-repeat 50%}.b-table .table tr.is-selected .checkbox input+.check{border-color:#00f}.b-table .table tr.is-empty:hover{background-color:transparent}.b-table .table .chevron-cell{vertical-align:middle}.b-table .table .checkbox-cell{width:40px}.b-table .table .checkbox-cell .checkbox{vertical-align:middle}.b-table .table .checkbox-cell .checkbox .check{transition:none}.b-table .table tr.detail{box-shadow:inset 0 1px 3px #dbdbdb;background:#fafafa}.b-table .table tr.detail .detail-container{padding:1rem}.b-table .table:focus{border-color:#ff4653;box-shadow:0 0 0 .125em rgba(255,70,83,.25)}.b-table .table.is-bordered th.is-current-sort,.b-table .table.is-bordered th.is-sortable:hover{border-color:#dbdbdb;background:#000}.b-table .table td.is-sticky{position:-webkit-sticky;position:sticky;left:0;z-index:1;background:#222c3c}.b-table .level:not(.top){padding-bottom:1.5rem}.b-table .table-wrapper.has-sticky-header{height:300px;overflow-y:auto}@media screen and (max-width:768px){.b-table .table-wrapper.has-sticky-header.has-mobile-cards{height:auto!important;overflow-y:visible!important;overflow-y:initial!important}}.b-table .table-wrapper.has-sticky-header tr:first-child th{position:-webkit-sticky;position:sticky;top:0;z-index:2;background:#222c3c}@media screen and (max-width:768px){.b-table .table-wrapper.has-mobile-cards thead{display:none}.b-table .table-wrapper.has-mobile-cards tfoot th{border:0;display:inherit}.b-table .table-wrapper.has-mobile-cards tr{box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);max-width:100%;position:relative;display:block}.b-table .table-wrapper.has-mobile-cards tr td{border:0;display:inherit}.b-table .table-wrapper.has-mobile-cards tr td:last-child{border-bottom:0}.b-table .table-wrapper.has-mobile-cards tr:not(:last-child){margin-bottom:1rem}.b-table .table-wrapper.has-mobile-cards tr:not([class*=is-]){background:inherit}.b-table .table-wrapper.has-mobile-cards tr:not([class*=is-]):hover{background-color:inherit}.b-table .table-wrapper.has-mobile-cards tr.detail{margin-top:-1rem}.b-table .table-wrapper.has-mobile-cards tr:not(.detail):not(.is-empty):not(.table-footer) td{display:flex;width:auto;justify-content:space-between;text-align:right;border-bottom:1px solid #000}.b-table .table-wrapper.has-mobile-cards tr:not(.detail):not(.is-empty):not(.table-footer) td:before{content:attr(data-label);font-weight:600;padding-right:.5em;text-align:left}}.b-table .table-wrapper.is-card-list thead{display:none}.b-table .table-wrapper.is-card-list tfoot th{border:0;display:inherit}.b-table .table-wrapper.is-card-list tr{box-shadow:0 2px 3px rgba(10,10,10,.1),0 0 0 1px rgba(10,10,10,.1);max-width:100%;position:relative;display:block}.b-table .table-wrapper.is-card-list tr td{border:0;display:inherit}.b-table .table-wrapper.is-card-list tr td:last-child{border-bottom:0}.b-table .table-wrapper.is-card-list tr:not(:last-child){margin-bottom:1rem}.b-table .table-wrapper.is-card-list tr:not([class*=is-]){background:inherit}.b-table .table-wrapper.is-card-list tr:not([class*=is-]):hover{background-color:inherit}.b-table .table-wrapper.is-card-list tr.detail{margin-top:-1rem}.b-table .table-wrapper.is-card-list tr:not(.detail):not(.is-empty):not(.table-footer) td{display:flex;width:auto;justify-content:space-between;text-align:right;border-bottom:1px solid #000}.b-table .table-wrapper.is-card-list tr:not(.detail):not(.is-empty):not(.table-footer) td:before{content:attr(data-label);font-weight:600;padding-right:.5em;text-align:left}.b-table.is-loading{position:relative;pointer-events:none;opacity:.5}.b-table.is-loading:after{-webkit-animation:spinAround .5s linear infinite;animation:spinAround .5s linear infinite;border-radius:290486px;content:\"\";display:block;height:1em;position:relative;width:1em;position:absolute;top:4em;left:calc(50% - 2.5em);width:5em;height:5em;border-color:transparent transparent #dbdbdb #dbdbdb;border-style:solid;border-width:.25em}.b-tabs .tabs{margin-bottom:0;flex-shrink:0}.b-tabs .tabs li.is-disabled{pointer-events:none;cursor:not-allowed;opacity:.5}.b-tabs .tab-content{position:relative;overflow:visible;display:flex;flex-direction:column;padding:1rem}.b-tabs .tab-content .tab-item{flex-shrink:0;flex-basis:auto}.b-tabs .tab-content.is-transitioning{overflow:hidden}.b-tabs:not(:last-child){margin-bottom:1.5rem}.b-tabs.is-fullwidth{width:100%}.b-tabs.is-vertical{display:flex;flex-direction:row}.b-tabs.is-vertical>.tabs ul{flex-direction:column;border-bottom-color:transparent}.b-tabs.is-vertical>.tabs ul li{width:100%}.b-tabs.is-vertical>.tabs ul li a{justify-content:left}.b-tabs.is-vertical>.tabs.is-boxed li a{border-bottom-color:transparent!important;border-right-color:#ff4653!important;border-radius:4px 0 0 4px}.b-tabs.is-vertical>.tabs.is-boxed li.is-active a{border-bottom-color:#ff4653!important;border-right-color:transparent!important}.b-tabs.is-vertical>.tabs.is-toggle li+li{margin-left:0}.b-tabs.is-vertical>.tabs.is-toggle li:first-child a{border-radius:4px 4px 0 0}.b-tabs.is-vertical>.tabs.is-toggle li:last-child a{border-radius:0 0 4px 4px}.b-tabs.is-vertical>.tabs.is-fullwidth li a{height:100%}.b-tabs.is-vertical>.tab-content{flex-grow:1}.b-tabs.is-vertical.is-right,.b-tabs.is-vertical.is-right>.tabs ul a{flex-direction:row-reverse}.b-tabs.is-vertical.is-right>.tabs ul a .icon:first-child{margin-right:0;margin-left:.5em}.b-tabs.is-vertical.is-right>.tabs.is-boxed li a{border-bottom-color:transparent!important;border-right-color:transparent!important;border-left-color:#ff4653!important;border-radius:0 4px 4px 0}.b-tabs.is-vertical.is-right>.tabs.is-boxed li.is-active a{border-bottom-color:#ff4653!important;border-right-color:#ff4653!important;border-left-color:transparent!important}.b-tabs.is-multiline>.tabs ul{flex-wrap:wrap;flex-shrink:1}.tag .has-ellipsis{max-width:10em;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}.tag .delete.is-white,.tag.is-delete.is-white{background:#fff}.tag .delete.is-white:hover,.tag.is-delete.is-white:hover{background-color:#e6e6e6}.tag .delete.is-black,.tag.is-delete.is-black{background:#0a0a0a}.tag .delete.is-black:hover,.tag.is-delete.is-black:hover{background-color:#000}.tag .delete.is-light,.tag.is-delete.is-light{background:#f5f5f5}.tag .delete.is-light:hover,.tag.is-delete.is-light:hover{background-color:#dbdbdb}.tag .delete.is-dark,.tag.is-delete.is-dark{background:#363636}.tag .delete.is-dark:hover,.tag.is-delete.is-dark:hover{background-color:#1c1c1c}.tag .delete.is-primary,.tag.is-delete.is-primary{background:#00d1b2}.tag .delete.is-primary:hover,.tag.is-delete.is-primary:hover{background-color:#009e86}.tag .delete.is-link,.tag.is-delete.is-link{background:#3273dc}.tag .delete.is-link:hover,.tag.is-delete.is-link:hover{background-color:#205bbc}.tag .delete.is-info,.tag.is-delete.is-info{background:#209cee}.tag .delete.is-info:hover,.tag.is-delete.is-info:hover{background-color:#0f81cc}.tag .delete.is-success,.tag.is-delete.is-success{background:#23d160}.tag .delete.is-success:hover,.tag.is-delete.is-success:hover{background-color:#1ca64c}.tag .delete.is-warning,.tag.is-delete.is-warning{background:#ffdd57}.tag .delete.is-warning:hover,.tag.is-delete.is-warning:hover{background-color:#ffd324}.tag .delete.is-danger,.tag.is-delete.is-danger{background:#ff3860}.tag .delete.is-danger:hover,.tag.is-delete.is-danger:hover{background-color:#ff0537}.taginput .taginput-container{display:flex}.taginput .taginput-container.is-focusable{padding-bottom:0;padding-top:calc(.275em - 1px);padding-left:0;cursor:text}.taginput .taginput-container.is-focusable,.taginput .taginput-container:not(.is-focusable){align-items:center;flex-wrap:wrap;justify-content:flex-start;height:auto}.taginput .taginput-container:not(.is-focusable).is-small{border-radius:2px;font-size:.75rem}.taginput .taginput-container:not(.is-focusable).is-medium{font-size:1.25rem}.taginput .taginput-container:not(.is-focusable).is-large{font-size:1.5rem}.taginput .taginput-container>.tag,.taginput .taginput-container>.tags{margin-left:.275rem;margin-bottom:calc(.275em - 1px);font-size:.9em;height:1.7em}.taginput .taginput-container>.tag .tag,.taginput .taginput-container>.tags .tag{margin-bottom:0;font-size:.9em;height:1.7em}.taginput .taginput-container>.tag .tag.is-delete,.taginput .taginput-container>.tags .tag.is-delete{width:1.7em}.taginput .taginput-container .autocomplete{position:static;flex:1}.taginput .taginput-container .autocomplete input{height:1.7em;margin-bottom:calc(.275em - 1px);padding-top:0;padding-bottom:0;border:none;box-shadow:none;min-width:8em}.taginput .taginput-container .autocomplete input:focus{box-shadow:none!important}.taginput .taginput-container .autocomplete .icon{height:1.7em}.taginput .taginput-container .autocomplete>.control.is-loading:after{top:.375em}.timepicker .dropdown-menu{min-width:0}.timepicker .dropdown,.timepicker .dropdown-trigger{width:100%}.taginput .timepicker .dropdown-trigger .taginput-container.is-focusable[readonly],.taginput .timepicker .dropdown .taginput-container.is-focusable[readonly],.timepicker .dropdown-trigger .input[readonly],.timepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly],.timepicker .dropdown .input[readonly],.timepicker .dropdown .taginput .taginput-container.is-focusable[readonly]{cursor:pointer;box-shadow:inset 0 1px 2px rgba(10,10,10,.1)}.taginput .timepicker .dropdown-trigger .taginput-container.is-focusable[readonly].is-active,.taginput .timepicker .dropdown-trigger .taginput-container.is-focusable[readonly].is-focused,.taginput .timepicker .dropdown-trigger .taginput-container.is-focusable[readonly]:active,.taginput .timepicker .dropdown-trigger .taginput-container.is-focusable[readonly]:focus,.taginput .timepicker .dropdown .taginput-container.is-focusable[readonly].is-active,.taginput .timepicker .dropdown .taginput-container.is-focusable[readonly].is-focused,.taginput .timepicker .dropdown .taginput-container.is-focusable[readonly]:active,.taginput .timepicker .dropdown .taginput-container.is-focusable[readonly]:focus,.timepicker .dropdown-trigger .input[readonly].is-active,.timepicker .dropdown-trigger .input[readonly].is-focused,.timepicker .dropdown-trigger .input[readonly]:active,.timepicker .dropdown-trigger .input[readonly]:focus,.timepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly].is-active,.timepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly].is-focused,.timepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly]:active,.timepicker .dropdown-trigger .taginput .taginput-container.is-focusable[readonly]:focus,.timepicker .dropdown .input[readonly].is-active,.timepicker .dropdown .input[readonly].is-focused,.timepicker .dropdown .input[readonly]:active,.timepicker .dropdown .input[readonly]:focus,.timepicker .dropdown .taginput .taginput-container.is-focusable[readonly].is-active,.timepicker .dropdown .taginput .taginput-container.is-focusable[readonly].is-focused,.timepicker .dropdown .taginput .taginput-container.is-focusable[readonly]:active,.timepicker .dropdown .taginput .taginput-container.is-focusable[readonly]:focus{box-shadow:0 0 0 .125em rgba(255,70,83,.25)}.timepicker .dropdown.is-disabled{opacity:1}.dropdown .dropdown-menu .has-link .timepicker a,.timepicker .dropdown-item,.timepicker .dropdown .dropdown-menu .has-link a{font-size:inherit;padding:0}.timepicker .timepicker-footer{padding:0 .5rem}.timepicker .dropdown-content .control{font-size:1.25em;margin-right:0!important}.timepicker .dropdown-content .control .select select{font-weight:600;padding-right:calc(.625em - 1px);border:0}.timepicker .dropdown-content .control .select select option:disabled{color:hsla(0,0%,47.8%,.7)}.timepicker .dropdown-content .control .select:after{display:none}.timepicker .dropdown-content .control.is-colon{font-size:1.7em}.timepicker.is-small{border-radius:2px;font-size:.75rem}.timepicker.is-medium{font-size:1.25rem}.timepicker.is-large{font-size:1.5rem}.b-tooltip{position:relative;display:inline-flex}.b-tooltip.is-top:after,.b-tooltip.is-top:before{top:auto;right:auto;bottom:calc(100% + 7px);left:50%;transform:translateX(-50%)}.b-tooltip.is-top.is-white:before{border-top:5px solid #fff}.b-tooltip.is-top.is-black:before,.b-tooltip.is-top.is-white:before{border-right:5px solid transparent;border-left:5px solid transparent;bottom:calc(100% + 2px)}.b-tooltip.is-top.is-black:before{border-top:5px solid #0a0a0a}.b-tooltip.is-top.is-light:before{border-top:5px solid #f5f5f5}.b-tooltip.is-top.is-dark:before,.b-tooltip.is-top.is-light:before{border-right:5px solid transparent;border-left:5px solid transparent;bottom:calc(100% + 2px)}.b-tooltip.is-top.is-dark:before{border-top:5px solid #363636}.b-tooltip.is-top.is-primary:before{border-top:5px solid #00d1b2}.b-tooltip.is-top.is-link:before,.b-tooltip.is-top.is-primary:before{border-right:5px solid transparent;border-left:5px solid transparent;bottom:calc(100% + 2px)}.b-tooltip.is-top.is-link:before{border-top:5px solid #3273dc}.b-tooltip.is-top.is-info:before{border-top:5px solid #209cee}.b-tooltip.is-top.is-info:before,.b-tooltip.is-top.is-success:before{border-right:5px solid transparent;border-left:5px solid transparent;bottom:calc(100% + 2px)}.b-tooltip.is-top.is-success:before{border-top:5px solid #23d160}.b-tooltip.is-top.is-warning:before{border-top:5px solid #ffdd57}.b-tooltip.is-top.is-danger:before,.b-tooltip.is-top.is-warning:before{border-right:5px solid transparent;border-left:5px solid transparent;bottom:calc(100% + 2px)}.b-tooltip.is-top.is-danger:before{border-top:5px solid #ff3860}.b-tooltip.is-top.is-multiline.is-small:after{width:180px}.b-tooltip.is-top.is-multiline.is-medium:after{width:240px}.b-tooltip.is-top.is-multiline.is-large:after{width:300px}.b-tooltip.is-right:after,.b-tooltip.is-right:before{top:50%;right:auto;bottom:auto;left:calc(100% + 7px);transform:translateY(-50%)}.b-tooltip.is-right.is-white:before{border-right:5px solid #fff}.b-tooltip.is-right.is-black:before,.b-tooltip.is-right.is-white:before{border-top:5px solid transparent;border-bottom:5px solid transparent;left:calc(100% + 2px)}.b-tooltip.is-right.is-black:before{border-right:5px solid #0a0a0a}.b-tooltip.is-right.is-light:before{border-right:5px solid #f5f5f5}.b-tooltip.is-right.is-dark:before,.b-tooltip.is-right.is-light:before{border-top:5px solid transparent;border-bottom:5px solid transparent;left:calc(100% + 2px)}.b-tooltip.is-right.is-dark:before{border-right:5px solid #363636}.b-tooltip.is-right.is-primary:before{border-right:5px solid #00d1b2}.b-tooltip.is-right.is-link:before,.b-tooltip.is-right.is-primary:before{border-top:5px solid transparent;border-bottom:5px solid transparent;left:calc(100% + 2px)}.b-tooltip.is-right.is-link:before{border-right:5px solid #3273dc}.b-tooltip.is-right.is-info:before{border-right:5px solid #209cee}.b-tooltip.is-right.is-info:before,.b-tooltip.is-right.is-success:before{border-top:5px solid transparent;border-bottom:5px solid transparent;left:calc(100% + 2px)}.b-tooltip.is-right.is-success:before{border-right:5px solid #23d160}.b-tooltip.is-right.is-warning:before{border-right:5px solid #ffdd57}.b-tooltip.is-right.is-danger:before,.b-tooltip.is-right.is-warning:before{border-top:5px solid transparent;border-bottom:5px solid transparent;left:calc(100% + 2px)}.b-tooltip.is-right.is-danger:before{border-right:5px solid #ff3860}.b-tooltip.is-right.is-multiline.is-small:after{width:180px}.b-tooltip.is-right.is-multiline.is-medium:after{width:240px}.b-tooltip.is-right.is-multiline.is-large:after{width:300px}.b-tooltip.is-bottom:after,.b-tooltip.is-bottom:before{top:calc(100% + 7px);right:auto;bottom:auto;left:50%;transform:translateX(-50%)}.b-tooltip.is-bottom.is-white:before{border-bottom:5px solid #fff}.b-tooltip.is-bottom.is-black:before,.b-tooltip.is-bottom.is-white:before{border-right:5px solid transparent;border-left:5px solid transparent;top:calc(100% + 2px)}.b-tooltip.is-bottom.is-black:before{border-bottom:5px solid #0a0a0a}.b-tooltip.is-bottom.is-light:before{border-bottom:5px solid #f5f5f5}.b-tooltip.is-bottom.is-dark:before,.b-tooltip.is-bottom.is-light:before{border-right:5px solid transparent;border-left:5px solid transparent;top:calc(100% + 2px)}.b-tooltip.is-bottom.is-dark:before{border-bottom:5px solid #363636}.b-tooltip.is-bottom.is-primary:before{border-bottom:5px solid #00d1b2}.b-tooltip.is-bottom.is-link:before,.b-tooltip.is-bottom.is-primary:before{border-right:5px solid transparent;border-left:5px solid transparent;top:calc(100% + 2px)}.b-tooltip.is-bottom.is-link:before{border-bottom:5px solid #3273dc}.b-tooltip.is-bottom.is-info:before{border-bottom:5px solid #209cee}.b-tooltip.is-bottom.is-info:before,.b-tooltip.is-bottom.is-success:before{border-right:5px solid transparent;border-left:5px solid transparent;top:calc(100% + 2px)}.b-tooltip.is-bottom.is-success:before{border-bottom:5px solid #23d160}.b-tooltip.is-bottom.is-warning:before{border-bottom:5px solid #ffdd57}.b-tooltip.is-bottom.is-danger:before,.b-tooltip.is-bottom.is-warning:before{border-right:5px solid transparent;border-left:5px solid transparent;top:calc(100% + 2px)}.b-tooltip.is-bottom.is-danger:before{border-bottom:5px solid #ff3860}.b-tooltip.is-bottom.is-multiline.is-small:after{width:180px}.b-tooltip.is-bottom.is-multiline.is-medium:after{width:240px}.b-tooltip.is-bottom.is-multiline.is-large:after{width:300px}.b-tooltip.is-left:after,.b-tooltip.is-left:before{top:50%;right:calc(100% + 7px);bottom:auto;left:auto;transform:translateY(-50%)}.b-tooltip.is-left.is-white:before{border-left:5px solid #fff}.b-tooltip.is-left.is-black:before,.b-tooltip.is-left.is-white:before{border-top:5px solid transparent;border-bottom:5px solid transparent;right:calc(100% + 2px)}.b-tooltip.is-left.is-black:before{border-left:5px solid #0a0a0a}.b-tooltip.is-left.is-light:before{border-left:5px solid #f5f5f5}.b-tooltip.is-left.is-dark:before,.b-tooltip.is-left.is-light:before{border-top:5px solid transparent;border-bottom:5px solid transparent;right:calc(100% + 2px)}.b-tooltip.is-left.is-dark:before{border-left:5px solid #363636}.b-tooltip.is-left.is-primary:before{border-left:5px solid #00d1b2}.b-tooltip.is-left.is-link:before,.b-tooltip.is-left.is-primary:before{border-top:5px solid transparent;border-bottom:5px solid transparent;right:calc(100% + 2px)}.b-tooltip.is-left.is-link:before{border-left:5px solid #3273dc}.b-tooltip.is-left.is-info:before{border-left:5px solid #209cee}.b-tooltip.is-left.is-info:before,.b-tooltip.is-left.is-success:before{border-top:5px solid transparent;border-bottom:5px solid transparent;right:calc(100% + 2px)}.b-tooltip.is-left.is-success:before{border-left:5px solid #23d160}.b-tooltip.is-left.is-warning:before{border-left:5px solid #ffdd57}.b-tooltip.is-left.is-danger:before,.b-tooltip.is-left.is-warning:before{border-top:5px solid transparent;border-bottom:5px solid transparent;right:calc(100% + 2px)}.b-tooltip.is-left.is-danger:before{border-left:5px solid #ff3860}.b-tooltip.is-left.is-multiline.is-small:after{width:180px}.b-tooltip.is-left.is-multiline.is-medium:after{width:240px}.b-tooltip.is-left.is-multiline.is-large:after{width:300px}.b-tooltip:after,.b-tooltip:before{position:absolute;content:\"\";opacity:0;visibility:hidden;pointer-events:none}.b-tooltip:before{z-index:39}.b-tooltip:after{content:attr(data-label);width:auto;padding:.35rem .75rem;border-radius:6px;font-size:.85rem;font-weight:400;box-shadow:0 1px 2px 1px rgba(0,1,0,.2);z-index:38;white-space:nowrap}.b-tooltip:not([data-label=\"\"]):hover:after,.b-tooltip:not([data-label=\"\"]):hover:before{transition-delay:inherit;opacity:1;visibility:visible}.b-tooltip.is-white:after{background:#fff;color:#0a0a0a}.b-tooltip.is-black:after{background:#0a0a0a;color:#fff}.b-tooltip.is-light:after{background:#f5f5f5;color:#363636}.b-tooltip.is-dark:after{background:#363636;color:#f5f5f5}.b-tooltip.is-primary:after{background:#00d1b2;color:#fff}.b-tooltip.is-link:after{background:#3273dc;color:#fff}.b-tooltip.is-info:after{background:#209cee;color:#fff}.b-tooltip.is-success:after{background:#23d160;color:#fff}.b-tooltip.is-warning:after{background:#ffdd57;color:rgba(0,0,0,.7)}.b-tooltip.is-danger:after{background:#ff3860;color:#fff}.b-tooltip:not([data-label=\"\"]).is-always:after,.b-tooltip:not([data-label=\"\"]).is-always:before{opacity:1;visibility:visible}.b-tooltip.is-multiline:after{display:flex-block;text-align:center;white-space:normal}.b-tooltip.is-dashed{border-bottom:1px dashed #b5b5b5;cursor:default}.b-tooltip.is-square:after{border-radius:0}.b-tooltip.is-animated:after,.b-tooltip.is-animated:before{transition:opacity 86ms ease-out,visibility 86ms ease-out}.upload{position:relative;display:inline-flex}.upload input[type=file]{position:absolute;top:0;left:0;width:100%;height:100%;opacity:0;outline:none;cursor:pointer;z-index:-1}.upload .upload-draggable{cursor:pointer;padding:.25em;border:1px dashed #b5b5b5;border-radius:6px}.upload .upload-draggable.is-disabled{opacity:.5;cursor:not-allowed}.upload .upload-draggable.is-loading{position:relative;pointer-events:none;opacity:.5}.upload .upload-draggable.is-loading:after{-webkit-animation:spinAround .5s linear infinite;animation:spinAround .5s linear infinite;border-radius:290486px;content:\"\";display:block;height:1em;position:relative;width:1em;top:0;left:calc(50% - 1.5em);width:3em;height:3em;border-color:transparent transparent #dbdbdb #dbdbdb;border-style:solid;border-width:.25em}.upload .upload-draggable.is-hovered.is-white,.upload .upload-draggable:hover.is-white{border-color:#fff;background:hsla(0,0%,100%,.05)}.upload .upload-draggable.is-hovered.is-black,.upload .upload-draggable:hover.is-black{border-color:#0a0a0a;background:rgba(10,10,10,.05)}.upload .upload-draggable.is-hovered.is-light,.upload .upload-draggable:hover.is-light{border-color:#f5f5f5;background:hsla(0,0%,96.1%,.05)}.upload .upload-draggable.is-hovered.is-dark,.upload .upload-draggable:hover.is-dark{border-color:#363636;background:rgba(54,54,54,.05)}.upload .upload-draggable.is-hovered.is-primary,.upload .upload-draggable:hover.is-primary{border-color:#00d1b2;background:rgba(0,209,178,.05)}.upload .upload-draggable.is-hovered.is-link,.upload .upload-draggable:hover.is-link{border-color:#3273dc;background:rgba(50,115,220,.05)}.upload .upload-draggable.is-hovered.is-info,.upload .upload-draggable:hover.is-info{border-color:#209cee;background:rgba(32,156,238,.05)}.upload .upload-draggable.is-hovered.is-success,.upload .upload-draggable:hover.is-success{border-color:#23d160;background:rgba(35,209,96,.05)}.upload .upload-draggable.is-hovered.is-warning,.upload .upload-draggable:hover.is-warning{border-color:#ffdd57;background:rgba(255,221,87,.05)}.upload .upload-draggable.is-hovered.is-danger,.upload .upload-draggable:hover.is-danger{border-color:#ff3860;background:rgba(255,56,96,.05)}.upload.is-expanded,.upload .upload-draggable.is-expanded{width:100%}@media screen and (-ms-high-contrast:active),screen and (-ms-high-contrast:none){.upload input[type=file]{z-index:auto}.upload .upload-draggable+input[type=file]{z-index:-1}}@media screen and (min-width:640px){.home-nav{margin-left:40px}}@media screen and (max-width:640px){.navbar-item.has-dropdown .nv-dropdown{display:none}.navbar-item.has-dropdown.is-active .nv-dropdown{display:block}}body{font-family:Titillium Web,sans-serif;text-align:center}body,html{background-color:#171e29!important}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(37);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
__webpack_require__(3).default("131dc3ec", content, true)

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "div.jQBracket{font-family:Arial;font-size:14px;position:relative}div.jQBracket .tools{position:absolute;top:0;color:#fff}div.jQBracket .tools span{cursor:pointer;margin:5px;display:block;text-align:center;width:18px;height:18px;background-color:#666}div.jQBracket .tools span:hover{background-color:#999}div.jQBracket .finals{float:right;right:0;clear:right;position:relative}div.jQBracket .bracket{float:right;clear:left}div.jQBracket .loserBracket{float:right;clear:left;position:relative}div.jQBracket .round{position:relative;float:left}div.jQBracket .match{position:relative}div.jQBracket .editable{cursor:pointer}div.jQBracket .team{position:relative;z-index:1;float:left;background-color:#eee;cursor:default}div.jQBracket .team:first-child{border-bottom:1px solid #999}div.jQBracket .team input{font-size:14px;padding:0;width:100%;border:0;margin:0;outline:0}div.jQBracket .team div.label{padding:3px;position:absolute;height:22px;white-space:nowrap;overflow:hidden;box-sizing:border-box}div.jQBracket .team div.label[disabled]{cursor:default}div.jQBracket .team div.score{float:right;padding:3px;background-color:hsla(0,0%,100%,.3);text-align:center;box-sizing:border-box}div.jQBracket .team div.score input{text-align:center}div.jQBracket .team div.score[disabled]{color:#999;cursor:default}div.jQBracket .team div.label input.error,div.jQBracket .team div.score input.error{background-color:#fcc}div.jQBracket .team.np{background-color:#666;color:#eee}div.jQBracket .team.na{background-color:#999;color:#ccc}div.jQBracket .team.win{color:#333}div.jQBracket .team.win div.score{color:#060}div.jQBracket .team.lose div.score{color:#900}div.jQBracket .team.lose{background-color:#ddd;color:#999}div.jQBracket .team.tie div.score{color:#00f}div.jQBracket .team.highlightWinner{background-color:#da0;color:#000}div.jQBracket .team.highlightLoser{background-color:#ccc;color:#000}div.jQBracket .team.highlight{background-color:#3c0;color:#000}div.jQBracket .team.bye{background-color:#999;color:#ccc}div.jQBracket .teamContainer{z-index:1;position:relative;float:left}div.jQBracket .connector{border:2px solid #666;border-left-style:none;position:absolute;z-index:1}div.jQBracket .connector div.connector{border:0;border-bottom:2px solid #666;height:0;position:absolute}div.jQBracket .connector.highlightWinner,div.jQBracket .connector div.connector.highlightWinner{border-color:#da0}div.jQBracket .connector.highlightLoser,div.jQBracket .connector div.connector.highlightLoser{border-color:#ccc}div.jQBracket .connector.highlight,div.jQBracket .connector div.connector.highlight{border-color:#0c0}div.jQBracket .np .connector,div.jQBracket .np .connector div.connector{border-color:#999}div.jQBracket .bubble{height:22px;line-height:22px;width:30px;right:-35px;position:absolute;text-align:center;font-size:11px}div.jQBracket .bubble:after{content:\"\";position:absolute;top:6px;width:0;height:0;border:5px solid transparent;left:-5px;border-left:0}div.jQBracket .win .bubble{background-color:#da0;color:#960}div.jQBracket .win .bubble:after{border-right-color:#da0}div.jQBracket .win .bubble.third{background-color:#963;color:#d95}div.jQBracket .win .bubble.third:after{border-right:6px solid #963}div.jQBracket .lose .bubble{background-color:#ccc;color:#333}div.jQBracket .lose .bubble:after{border-right-color:#ccc}div.jQBracket .lose .bubble.fourth{background-color:#678;color:#ccd}div.jQBracket .lose .bubble.fourth:after{border-right:6px solid #678}div.jQBracket.rl .finals{float:left;left:0;clear:left}div.jQBracket.rl .bracket,div.jQBracket.rl .loserBracket{float:left;clear:right}div.jQBracket.rl .round{margin-right:0;float:right}div.jQBracket.rl .team{float:right}div.jQBracket.rl .team div.label{right:0}div.jQBracket.rl .team div.score{float:left}div.jQBracket.rl .teamContainer{float:right}div.jQBracket.rl .connector{border-left-style:solid;border-right-style:none;border-width:2px}div.jQBracket.rl .connector.highlightWinner,div.jQBracket.rl .connector div.connector.highlightWinner{border-color:#da0}div.jQBracket.rl .connector.highlightLoser,div.jQBracket.rl .connector div.connector.highlightLoser{border-color:#ccc}div.jQBracket.rl .connector.highlight,div.jQBracket.rl .connector div.connector.highlight{border-color:#0c0}div.jQBracket.rl .bubble{left:-35px}div.jQBracket.rl .bubble.third{background-color:#963;color:#310}div.jQBracket.rl .bubble.fourth{background-color:#678;color:#ccd}div.jQBracket.rl .bubble:after{left:auto;right:-5px;border-left:5px solid transparent;border-right:0}div.jQBracket.rl .bubble.third:after{border-right:0;border-left:6px solid #963}div.jQBracket.rl .bubble.fourth:after{border-right:0;border-left:6px solid #678}div.jQBracket.rl .highlightWinner .bubble:after{border-left-color:#da0}div.jQBracket.rl .highlightLoser .bubble:after{border-left-color:#ccc}.highlight{margin-bottom:0!important}.connector.highlight{overflow:visible}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_navBarSearch_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_navBarSearch_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_navBarSearch_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_navBarSearch_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_navBarSearch_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_navBarSearch_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Titillium+Web);"]);
// Module
exports.push([module.i, "@-webkit-keyframes spinAround{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@keyframes spinAround{0%{transform:rotate(0deg)}to{transform:rotate(359deg)}}@media screen and (min-width:640px){.home-nav{margin-left:40px}}@media screen and (max-width:640px){.navbar-item.has-dropdown .nv-dropdown{display:none}.navbar-item.has-dropdown.is-active .nv-dropdown{display:block}}.dropdown-content{width:300px}.icon is-right{margin-right:10px}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideForums_vue_vue_type_style_index_0_id_6dd74e8e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(12);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideForums_vue_vue_type_style_index_0_id_6dd74e8e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideForums_vue_vue_type_style_index_0_id_6dd74e8e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideForums_vue_vue_type_style_index_0_id_6dd74e8e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideForums_vue_vue_type_style_index_0_id_6dd74e8e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideForums_vue_vue_type_style_index_0_id_6dd74e8e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".type-button[data-v-6dd74e8e]{width:150px}.button[data-v-6dd74e8e]{margin-top:20px;margin-bottom:20px}.forum-title[data-v-6dd74e8e]{width:93%;display:inline-block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideSocials_vue_vue_type_style_index_0_id_2c2688d1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideSocials_vue_vue_type_style_index_0_id_2c2688d1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideSocials_vue_vue_type_style_index_0_id_2c2688d1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideSocials_vue_vue_type_style_index_0_id_2c2688d1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideSocials_vue_vue_type_style_index_0_id_2c2688d1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideSocials_vue_vue_type_style_index_0_id_2c2688d1_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".type-button[data-v-2c2688d1]{width:150px}.subtitle[data-v-2c2688d1]{margin-bottom:5px;font-size:16px}.button[data-v-2c2688d1]{margin-top:20px;margin-bottom:20px}.forum-title[data-v-2c2688d1]{width:63%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dark-bkg[data-v-2c2688d1]{background-color:#202836}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideEvents_vue_vue_type_style_index_0_id_11b3de70_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideEvents_vue_vue_type_style_index_0_id_11b3de70_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideEvents_vue_vue_type_style_index_0_id_11b3de70_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideEvents_vue_vue_type_style_index_0_id_11b3de70_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideEvents_vue_vue_type_style_index_0_id_11b3de70_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideEvents_vue_vue_type_style_index_0_id_11b3de70_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".type-button[data-v-11b3de70]{width:150px}.subtitle[data-v-11b3de70]{margin-bottom:5px;font-size:16px}.button[data-v-11b3de70]{margin-top:20px;margin-bottom:20px}.forum-title[data-v-11b3de70]{width:63%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.dark-bkg[data-v-11b3de70]{background-color:#202836}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideMatches_vue_vue_type_style_index_0_id_756ce69e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(15);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideMatches_vue_vue_type_style_index_0_id_756ce69e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideMatches_vue_vue_type_style_index_0_id_756ce69e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideMatches_vue_vue_type_style_index_0_id_756ce69e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideMatches_vue_vue_type_style_index_0_id_756ce69e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_SideMatches_vue_vue_type_style_index_0_id_756ce69e_scoped_true_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, ".type-button[data-v-756ce69e]{width:150px}.button[data-v-756ce69e]{margin-top:20px;margin-bottom:20px}.char-card[data-v-756ce69e]{cursor:pointer;padding:10px}.box[data-v-756ce69e]{width:220px;height:266px}@media screen and (max-width:640px){.main[data-v-756ce69e]{height:100%}.hide-img[data-v-756ce69e]{display:none}}@media screen and (min-width:640px){.main[data-v-756ce69e]{height:100vh}}.subtitle[data-v-756ce69e]{margin-bottom:5px;font-size:16px}.loser[data-v-756ce69e]{opacity:.4}.winner-live[data-v-756ce69e]{color:#90ee90}.loser-live[data-v-756ce69e]{color:#ff4500}.regular[data-v-756ce69e]{color:#fff}@media screen and (min-width:640px){.main[data-v-756ce69e]{justify-content:center;align-items:center;height:100vh}}@media screen and (max-width:640px){.main[data-v-756ce69e]{justify-content:center;align-items:center;height:100%}}@media screen and (max-width:769px){.ordered-mobile[data-v-756ce69e]{display:flex;flex-flow:column}.ordered-mobile .fl-1[data-v-756ce69e]{order:1}.ordered-mobile .fl-2[data-v-756ce69e]{order:2}.ordered-mobile .fl-3[data-v-756ce69e]{order:3}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(16);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_default_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media screen and (min-width:640px){.menu-section{border-right:1px solid #59667b}.menu-section.first-section{border-left:1px solid #59667b}.menu-section:hover{background:#313c4f}.menu-section:not(.beta) a{line-height:2.2em}.navbar-brand:hover{background:#313c4f}}.menu-content{display:flex;width:1300px;margin:auto}@media screen and (max-width:769px){.ordered-mobile{display:flex;flex-flow:column}.ordered-mobile .fl-1{order:1}.ordered-mobile .fl-2{order:2}.ordered-mobile .fl-3{order:3}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OnlyNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OnlyNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OnlyNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OnlyNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OnlyNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OnlyNav_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(2);
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "@media screen and (min-width:640px){.menu-section{border-right:1px solid #59667b}.menu-section.first-section{border-left:1px solid #59667b}.menu-section:hover{background:#313c4f}.menu-section:not(.beta) a{line-height:2.2em}.navbar-brand:hover{background:#313c4f}}.menu-content{display:flex;width:1300px;margin:auto}@media screen and (max-width:769px){.ordered-mobile{display:flex;flex-flow:column}.ordered-mobile .fl-1{order:1}.ordered-mobile .fl-2{order:2}.ordered-mobile .fl-3{order:3}}", ""]);
// Exports
module.exports = exports;


/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "querystring"
var external_querystring_ = __webpack_require__(21);

// EXTERNAL MODULE: external "vue"
var external_vue_ = __webpack_require__(0);
var external_vue_default = /*#__PURE__*/__webpack_require__.n(external_vue_);

// EXTERNAL MODULE: external "node-fetch"
var external_node_fetch_ = __webpack_require__(22);
var external_node_fetch_default = /*#__PURE__*/__webpack_require__.n(external_node_fetch_);

// CONCATENATED MODULE: ./.nuxt/middleware.js
const middleware = {};
middleware['index'] = __webpack_require__(27);
middleware['index'] = middleware['index'].default || middleware['index'];
/* harmony default export */ var _nuxt_middleware = (middleware);
// CONCATENATED MODULE: ./.nuxt/utils.js
 // window.{{globals.loadedCallback}} hook
// Useful for jsdom testing or plugins (https://github.com/tmpvar/jsdom#dealing-with-asynchronous-script-loading)

if (false) {}

function empty() {}
function globalHandleError(error) {
  if (external_vue_default.a.config.errorHandler) {
    external_vue_default.a.config.errorHandler(error);
  }
}
function interopDefault(promise) {
  return promise.then(m => m.default || m);
}
function hasFetch(vm) {
  return vm.$options && typeof vm.$options.fetch === 'function' && !vm.$options.fetch.length;
}
function getChildrenComponentInstancesUsingFetch(vm, instances = []) {
  const children = vm.$children || [];

  for (const child of children) {
    if (child.$fetch) {
      instances.push(child);
      continue; // Don't get the children since it will reload the template
    }

    if (child.$children) {
      getChildrenComponentInstancesUsingFetch(child, instances);
    }
  }

  return instances;
}
function applyAsyncData(Component, asyncData) {
  if ( // For SSR, we once all this function without second param to just apply asyncData
  // Prevent doing this for each SSR request
  !asyncData && Component.options.__hasNuxtData) {
    return;
  }

  const ComponentData = Component.options._originDataFn || Component.options.data || function () {
    return {};
  };

  Component.options._originDataFn = ComponentData;

  Component.options.data = function () {
    const data = ComponentData.call(this, this);

    if (this.$ssrContext) {
      asyncData = this.$ssrContext.asyncData[Component.cid];
    }

    return { ...data,
      ...asyncData
    };
  };

  Component.options.__hasNuxtData = true;

  if (Component._Ctor && Component._Ctor.options) {
    Component._Ctor.options.data = Component.options.data;
  }
}
function sanitizeComponent(Component) {
  // If Component already sanitized
  if (Component.options && Component._Ctor === Component) {
    return Component;
  }

  if (!Component.options) {
    Component = external_vue_default.a.extend(Component); // fix issue #6

    Component._Ctor = Component;
  } else {
    Component._Ctor = Component;
    Component.extendOptions = Component.options;
  } // If no component name defined, set file path as name, (also fixes #5703)


  if (!Component.options.name && Component.options.__file) {
    Component.options.name = Component.options.__file;
  }

  return Component;
}
function getMatchedComponents(route, matches = false, prop = 'components') {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m[prop]).map(key => {
      matches && matches.push(index);
      return m[prop][key];
    });
  }));
}
function getMatchedComponentsInstances(route, matches = false) {
  return getMatchedComponents(route, matches, 'instances');
}
function flatMapComponents(route, fn) {
  return Array.prototype.concat.apply([], route.matched.map((m, index) => {
    return Object.keys(m.components).reduce((promises, key) => {
      if (m.components[key]) {
        promises.push(fn(m.components[key], m.instances[key], m, key, index));
      } else {
        delete m.components[key];
      }

      return promises;
    }, []);
  }));
}
function resolveRouteComponents(route, fn) {
  return Promise.all(flatMapComponents(route, async (Component, instance, match, key) => {
    // If component is a function, resolve it
    if (typeof Component === 'function' && !Component.options) {
      Component = await Component();
    }

    match.components[key] = Component = sanitizeComponent(Component);
    return typeof fn === 'function' ? fn(Component, instance, match, key) : Component;
  }));
}
async function getRouteData(route) {
  if (!route) {
    return;
  } // Make sure the components are resolved (code-splitting)


  await resolveRouteComponents(route); // Send back a copy of route with meta based on Component definition

  return { ...route,
    meta: getMatchedComponents(route).map((Component, index) => {
      return { ...Component.options.meta,
        ...(route.matched[index] || {}).meta
      };
    })
  };
}
async function setContext(app, context) {
  // If context not defined, create it
  if (!app.context) {
    app.context = {
      isStatic: false,
      isDev: false,
      isHMR: false,
      app,
      payload: context.payload,
      error: context.error,
      base: '/',
      env: {}
    }; // Only set once

    if ( true && context.req) {
      app.context.req = context.req;
    }

    if ( true && context.res) {
      app.context.res = context.res;
    }

    if (context.ssrContext) {
      app.context.ssrContext = context.ssrContext;
    }

    app.context.redirect = (status, path, query) => {
      if (!status) {
        return;
      }

      app.context._redirected = true; // if only 1 or 2 arguments: redirect('/') or redirect('/', { foo: 'bar' })

      let pathType = typeof path;

      if (typeof status !== 'number' && (pathType === 'undefined' || pathType === 'object')) {
        query = path || {};
        path = status;
        pathType = typeof path;
        status = 302;
      }

      if (pathType === 'object') {
        path = app.router.resolve(path).route.fullPath;
      } // "/absolute/route", "./relative/route" or "../relative/route"


      if (/(^[.]{1,2}\/)|(^\/(?!\/))/.test(path)) {
        app.context.next({
          path,
          query,
          status
        });
      } else {
        path = formatUrl(path, query);

        if (true) {
          app.context.next({
            path,
            status
          });
        }

        if (false) {}
      }
    };

    if (true) {
      app.context.beforeNuxtRender = fn => context.beforeRenderFns.push(fn);
    }

    if (false) {}
  } // Dynamic keys


  const [currentRouteData, fromRouteData] = await Promise.all([getRouteData(context.route), getRouteData(context.from)]);

  if (context.route) {
    app.context.route = currentRouteData;
  }

  if (context.from) {
    app.context.from = fromRouteData;
  }

  app.context.next = context.next;
  app.context._redirected = false;
  app.context._errored = false;
  app.context.isHMR = false;
  app.context.params = app.context.route.params || {};
  app.context.query = app.context.route.query || {};
}
function middlewareSeries(promises, appContext) {
  if (!promises.length || appContext._redirected || appContext._errored) {
    return Promise.resolve();
  }

  return promisify(promises[0], appContext).then(() => {
    return middlewareSeries(promises.slice(1), appContext);
  });
}
function promisify(fn, context) {
  let promise;

  if (fn.length === 2) {
    // fn(context, callback)
    promise = new Promise(resolve => {
      fn(context, function (err, data) {
        if (err) {
          context.error(err);
        }

        data = data || {};
        resolve(data);
      });
    });
  } else {
    promise = fn(context);
  }

  if (promise && promise instanceof Promise && typeof promise.then === 'function') {
    return promise;
  }

  return Promise.resolve(promise);
} // Imported from vue-router

function getLocation(base, mode) {
  let path = decodeURI(window.location.pathname);

  if (mode === 'hash') {
    return window.location.hash.replace(/^#\//, '');
  } // To get matched with sanitized router.base add trailing slash


  if (base && (path.endsWith('/') ? path : path + '/').startsWith(base)) {
    path = path.slice(base.length);
  }

  return (path || '/') + window.location.search + window.location.hash;
} // Imported from path-to-regexp

/**
 * Compile a string to a template function for the path.
 *
 * @param  {string}             str
 * @param  {Object=}            options
 * @return {!function(Object=, Object=)}
 */

function compile(str, options) {
  return tokensToFunction(parse(str, options), options);
}
function getQueryDiff(toQuery, fromQuery) {
  const diff = {};
  const queries = { ...toQuery,
    ...fromQuery
  };

  for (const k in queries) {
    if (String(toQuery[k]) !== String(fromQuery[k])) {
      diff[k] = true;
    }
  }

  return diff;
}
function normalizeError(err) {
  let message;

  if (!(err.message || typeof err === 'string')) {
    try {
      message = JSON.stringify(err, null, 2);
    } catch (e) {
      message = `[${err.constructor.name}]`;
    }
  } else {
    message = err.message || err;
  }

  return { ...err,
    message,
    statusCode: err.statusCode || err.status || err.response && err.response.status || 500
  };
}
/**
 * The main path matching regexp utility.
 *
 * @type {RegExp}
 */

const PATH_REGEXP = new RegExp([// Match escaped characters that would otherwise appear in future matches.
// This allows the user to escape special characters that won't transform.
'(\\\\.)', // Match Express-style parameters and un-named parameters with a prefix
// and optional suffixes. Matches appear as:
//
// "/:test(\\d+)?" => ["/", "test", "\d+", undefined, "?", undefined]
// "/route(\\d+)"  => [undefined, undefined, undefined, "\d+", undefined, undefined]
// "/*"            => ["/", undefined, undefined, undefined, undefined, "*"]
'([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))'].join('|'), 'g');
/**
 * Parse a string for the raw tokens.
 *
 * @param  {string}  str
 * @param  {Object=} options
 * @return {!Array}
 */

function parse(str, options) {
  const tokens = [];
  let key = 0;
  let index = 0;
  let path = '';
  const defaultDelimiter = options && options.delimiter || '/';
  let res;

  while ((res = PATH_REGEXP.exec(str)) != null) {
    const m = res[0];
    const escaped = res[1];
    const offset = res.index;
    path += str.slice(index, offset);
    index = offset + m.length; // Ignore already escaped sequences.

    if (escaped) {
      path += escaped[1];
      continue;
    }

    const next = str[index];
    const prefix = res[2];
    const name = res[3];
    const capture = res[4];
    const group = res[5];
    const modifier = res[6];
    const asterisk = res[7]; // Push the current path onto the tokens.

    if (path) {
      tokens.push(path);
      path = '';
    }

    const partial = prefix != null && next != null && next !== prefix;
    const repeat = modifier === '+' || modifier === '*';
    const optional = modifier === '?' || modifier === '*';
    const delimiter = res[2] || defaultDelimiter;
    const pattern = capture || group;
    tokens.push({
      name: name || key++,
      prefix: prefix || '',
      delimiter,
      optional,
      repeat,
      partial,
      asterisk: Boolean(asterisk),
      pattern: pattern ? escapeGroup(pattern) : asterisk ? '.*' : '[^' + escapeString(delimiter) + ']+?'
    });
  } // Match any characters still remaining.


  if (index < str.length) {
    path += str.substr(index);
  } // If the path exists, push it onto the end.


  if (path) {
    tokens.push(path);
  }

  return tokens;
}
/**
 * Prettier encoding of URI path segments.
 *
 * @param  {string}
 * @return {string}
 */


function encodeURIComponentPretty(str, slashAllowed) {
  const re = slashAllowed ? /[?#]/g : /[/?#]/g;
  return encodeURI(str).replace(re, c => {
    return '%' + c.charCodeAt(0).toString(16).toUpperCase();
  });
}
/**
 * Encode the asterisk parameter. Similar to `pretty`, but allows slashes.
 *
 * @param  {string}
 * @return {string}
 */


function encodeAsterisk(str) {
  return encodeURIComponentPretty(str, true);
}
/**
 * Escape a regular expression string.
 *
 * @param  {string} str
 * @return {string}
 */


function escapeString(str) {
  return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1');
}
/**
 * Escape the capturing group by escaping special characters and meaning.
 *
 * @param  {string} group
 * @return {string}
 */


function escapeGroup(group) {
  return group.replace(/([=!:$/()])/g, '\\$1');
}
/**
 * Expose a method for transforming tokens into the path function.
 */


function tokensToFunction(tokens, options) {
  // Compile all the tokens into regexps.
  const matches = new Array(tokens.length); // Compile all the patterns before compilation.

  for (let i = 0; i < tokens.length; i++) {
    if (typeof tokens[i] === 'object') {
      matches[i] = new RegExp('^(?:' + tokens[i].pattern + ')$', flags(options));
    }
  }

  return function (obj, opts) {
    let path = '';
    const data = obj || {};
    const options = opts || {};
    const encode = options.pretty ? encodeURIComponentPretty : encodeURIComponent;

    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i];

      if (typeof token === 'string') {
        path += token;
        continue;
      }

      const value = data[token.name || 'pathMatch'];
      let segment;

      if (value == null) {
        if (token.optional) {
          // Prepend partial segment prefixes.
          if (token.partial) {
            path += token.prefix;
          }

          continue;
        } else {
          throw new TypeError('Expected "' + token.name + '" to be defined');
        }
      }

      if (Array.isArray(value)) {
        if (!token.repeat) {
          throw new TypeError('Expected "' + token.name + '" to not repeat, but received `' + JSON.stringify(value) + '`');
        }

        if (value.length === 0) {
          if (token.optional) {
            continue;
          } else {
            throw new TypeError('Expected "' + token.name + '" to not be empty');
          }
        }

        for (let j = 0; j < value.length; j++) {
          segment = encode(value[j]);

          if (!matches[i].test(segment)) {
            throw new TypeError('Expected all "' + token.name + '" to match "' + token.pattern + '", but received `' + JSON.stringify(segment) + '`');
          }

          path += (j === 0 ? token.prefix : token.delimiter) + segment;
        }

        continue;
      }

      segment = token.asterisk ? encodeAsterisk(value) : encode(value);

      if (!matches[i].test(segment)) {
        throw new TypeError('Expected "' + token.name + '" to match "' + token.pattern + '", but received "' + segment + '"');
      }

      path += token.prefix + segment;
    }

    return path;
  };
}
/**
 * Get the flags for a regexp from the options.
 *
 * @param  {Object} options
 * @return {string}
 */


function flags(options) {
  return options && options.sensitive ? '' : 'i';
}
/**
 * Format given url, append query to url query string
 *
 * @param  {string} url
 * @param  {string} query
 * @return {string}
 */


function formatUrl(url, query) {
  let protocol;
  const index = url.indexOf('://');

  if (index !== -1) {
    protocol = url.substring(0, index);
    url = url.substring(index + 3);
  } else if (url.startsWith('//')) {
    url = url.substring(2);
  }

  let parts = url.split('/');
  let result = (protocol ? protocol + '://' : '//') + parts.shift();
  let path = parts.join('/');

  if (path === '' && parts.length === 1) {
    result += '/';
  }

  let hash;
  parts = path.split('#');

  if (parts.length === 2) {
    [path, hash] = parts;
  }

  result += path ? '/' + path : '';

  if (query && JSON.stringify(query) !== '{}') {
    result += (url.split('?').length === 2 ? '&' : '?') + formatQuery(query);
  }

  result += hash ? '#' + hash : '';
  return result;
}
/**
 * Transform data object to query string
 *
 * @param  {object} query
 * @return {string}
 */


function formatQuery(query) {
  return Object.keys(query).sort().map(key => {
    const val = query[key];

    if (val == null) {
      return '';
    }

    if (Array.isArray(val)) {
      return val.slice().map(val2 => [key, '=', val2].join('')).join('&');
    }

    return key + '=' + val;
  }).filter(Boolean).join('&');
}

function addLifecycleHook(vm, hook, fn) {
  if (!vm.$options[hook]) {
    vm.$options[hook] = [];
  }

  if (!vm.$options[hook].includes(fn)) {
    vm.$options[hook].push(fn);
  }
}
const urlJoin = function urlJoin() {
  return [].slice.call(arguments).join('/').replace(/\/+/g, '/').replace(':/', '://');
};
// CONCATENATED MODULE: ./.nuxt/mixins/fetch.server.js



async function serverPrefetch() {
  if (!this._fetchOnServer) {
    return;
  } // Call and await on $fetch


  try {
    await this.$options.fetch.call(this);
  } catch (err) {
    if (false) {}

    this.$fetchState.error = normalizeError(err);
  }

  this.$fetchState.pending = false; // Define an ssrKey for hydration

  this._fetchKey = this.$ssrContext.nuxt.fetch.length; // Add data-fetch-key on parent element of Component

  const attrs = this.$vnode.data.attrs = this.$vnode.data.attrs || {};
  attrs['data-fetch-key'] = this._fetchKey; // Add to ssrContext for window.__NUXT__.fetch

  this.$ssrContext.nuxt.fetch.push(this.$fetchState.error ? {
    _error: this.$fetchState.error
  } : this._data);
}

/* harmony default export */ var fetch_server = ({
  created() {
    if (!hasFetch(this)) {
      return;
    }

    if (typeof this.$options.fetchOnServer === 'function') {
      this._fetchOnServer = this.$options.fetchOnServer.call(this) !== false;
    } else {
      this._fetchOnServer = this.$options.fetchOnServer !== false;
    }

    external_vue_default.a.util.defineReactive(this, '$fetchState', {
      pending: true,
      error: null,
      timestamp: Date.now()
    });
    addLifecycleHook(this, 'serverPrefetch', serverPrefetch);
  }

});
// EXTERNAL MODULE: external "vue-meta"
var external_vue_meta_ = __webpack_require__(23);
var external_vue_meta_default = /*#__PURE__*/__webpack_require__.n(external_vue_meta_);

// EXTERNAL MODULE: external "vue-client-only"
var external_vue_client_only_ = __webpack_require__(19);
var external_vue_client_only_default = /*#__PURE__*/__webpack_require__.n(external_vue_client_only_);

// EXTERNAL MODULE: external "vue-no-ssr"
var external_vue_no_ssr_ = __webpack_require__(18);
var external_vue_no_ssr_default = /*#__PURE__*/__webpack_require__.n(external_vue_no_ssr_);

// EXTERNAL MODULE: external "vue-router"
var external_vue_router_ = __webpack_require__(7);
var external_vue_router_default = /*#__PURE__*/__webpack_require__.n(external_vue_router_);

// CONCATENATED MODULE: ./.nuxt/router.scrollBehavior.js


if (false) {}

/* harmony default export */ var router_scrollBehavior = (function (to, from, savedPosition) {
  // if the returned position is falsy or an empty object,
  // will retain current scroll position.
  let position = false; // if no children detected and scrollToTop is not explicitly disabled

  const Pages = getMatchedComponents(to);

  if (Pages.length < 2 && Pages.every(Page => Page.options.scrollToTop !== false)) {
    // scroll to the top of the page
    position = {
      x: 0,
      y: 0
    };
  } else if (Pages.some(Page => Page.options.scrollToTop)) {
    // if one of the children has scrollToTop option set to true
    position = {
      x: 0,
      y: 0
    };
  } // savedPosition is only available for popstate navigations (back button)


  if (savedPosition) {
    position = savedPosition;
  }

  const nuxt = window.$nuxt; // triggerScroll is only fired when a new component is loaded

  if (to.path === from.path && to.hash !== from.hash) {
    nuxt.$nextTick(() => nuxt.$emit('triggerScroll'));
  }

  return new Promise(resolve => {
    // wait for the out transition to complete (if necessary)
    nuxt.$once('triggerScroll', () => {
      // coords will be used if no selector is provided,
      // or if the selector didn't match any element.
      if (to.hash) {
        let hash = to.hash; // CSS.escape() is not supported with IE and Edge.

        if (typeof window.CSS !== 'undefined' && typeof window.CSS.escape !== 'undefined') {
          hash = '#' + window.CSS.escape(hash.substr(1));
        }

        try {
          if (document.querySelector(hash)) {
            // scroll to anchor by returning the selector
            position = {
              selector: hash
            };
          }
        } catch (e) {
          console.warn('Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).');
        }
      }

      resolve(position);
    });
  });
});
// CONCATENATED MODULE: ./.nuxt/router.js





const _782c78d6 = () => interopDefault(__webpack_require__.e(/* import() | pages/About */ 1).then(__webpack_require__.bind(null, 221)));

const _1510f257 = () => interopDefault(__webpack_require__.e(/* import() | pages/Admin */ 2).then(__webpack_require__.bind(null, 217)));

const _3ae5beea = () => interopDefault(__webpack_require__.e(/* import() | pages/adstest */ 10).then(__webpack_require__.bind(null, 222)));

const _6e06802c = () => interopDefault(__webpack_require__.e(/* import() | pages/agents/index */ 12).then(__webpack_require__.bind(null, 223)));

const _3f12081a = () => interopDefault(__webpack_require__.e(/* import() | pages/Brackets */ 3).then(__webpack_require__.bind(null, 128)));

const _2f8c0f7e = () => interopDefault(__webpack_require__.e(/* import() | pages/events/index */ 15).then(__webpack_require__.bind(null, 224)));

const _45868048 = () => interopDefault(__webpack_require__.e(/* import() | pages/forums/index */ 18).then(__webpack_require__.bind(null, 225)));

const _a56d7d1e = () => interopDefault(__webpack_require__.e(/* import() | pages/Login */ 4).then(__webpack_require__.bind(null, 226)));

const _4e5adbbf = () => interopDefault(__webpack_require__.e(/* import() | pages/Maps */ 5).then(__webpack_require__.bind(null, 220)));

const _fef7f472 = () => interopDefault(__webpack_require__.e(/* import() | pages/matches/index */ 21).then(__webpack_require__.bind(null, 227)));

const _19e436f2 = () => interopDefault(__webpack_require__.e(/* import() | pages/mystats/index */ 22).then(__webpack_require__.bind(null, 228)));

const _7c6e6743 = () => interopDefault(__webpack_require__.e(/* import() | pages/mystats/index/_id */ 23).then(__webpack_require__.bind(null, 218)));

const _7f709a47 = () => interopDefault(__webpack_require__.e(/* import() | pages/news/index */ 25).then(__webpack_require__.bind(null, 229)));

const _e737e752 = () => interopDefault(__webpack_require__.e(/* import() | pages/Reset */ 6).then(__webpack_require__.bind(null, 230)));

const _4838d9c0 = () => interopDefault(__webpack_require__.e(/* import() | pages/Signup */ 7).then(__webpack_require__.bind(null, 231)));

const _1040d484 = () => interopDefault(__webpack_require__.e(/* import() | pages/skins/index */ 28).then(__webpack_require__.bind(null, 232)));

const _7dc92a4a = () => interopDefault(__webpack_require__.e(/* import() | pages/stats/index */ 33).then(__webpack_require__.bind(null, 233)));

const _291758a1 = () => interopDefault(__webpack_require__.e(/* import() | pages/Verify */ 8).then(__webpack_require__.bind(null, 248)));

const _0ce8a630 = () => interopDefault(__webpack_require__.e(/* import() | pages/Writers */ 9).then(__webpack_require__.bind(null, 234)));

const _da045914 = () => interopDefault(__webpack_require__.e(/* import() | pages/forums/create */ 17).then(__webpack_require__.bind(null, 235)));

const _04219b8e = () => interopDefault(__webpack_require__.e(/* import() | pages/skins/media */ 29).then(__webpack_require__.bind(null, 215)));

const _6cb3df94 = () => interopDefault(__webpack_require__.e(/* import() | pages/stats/compare/index */ 31).then(__webpack_require__.bind(null, 236)));

const _53d6dd77 = () => interopDefault(__webpack_require__.e(/* import() | pages/teams/compare */ 35).then(__webpack_require__.bind(null, 219)));

const _7d42768a = () => interopDefault(__webpack_require__.e(/* import() | pages/stats/events/_id */ 32).then(__webpack_require__.bind(null, 129)));

const _54305799 = () => interopDefault(__webpack_require__.e(/* import() | pages/skins/weapons/_id/_slug */ 30).then(__webpack_require__.bind(null, 237)));

const _11427ec4 = () => interopDefault(__webpack_require__.e(/* import() | pages/agents/_name */ 11).then(__webpack_require__.bind(null, 238)));

const _2f7bb028 = () => interopDefault(__webpack_require__.e(/* import() | pages/skins/_id */ 27).then(__webpack_require__.bind(null, 239)));

const _609beccc = () => interopDefault(__webpack_require__.e(/* import() | pages/teams/_id */ 34).then(__webpack_require__.bind(null, 240)));

const _bbe68f12 = () => interopDefault(__webpack_require__.e(/* import() | pages/user/_id */ 36).then(__webpack_require__.bind(null, 241)));

const _b4f112e2 = () => interopDefault(__webpack_require__.e(/* import() | pages/events/_id/bracket */ 14).then(__webpack_require__.bind(null, 216)));

const _1964979e = () => interopDefault(__webpack_require__.e(/* import() | pages/events/_id/_slug */ 13).then(__webpack_require__.bind(null, 242)));

const _2488188a = () => interopDefault(__webpack_require__.e(/* import() | pages/forums/_id/_slug */ 16).then(__webpack_require__.bind(null, 243)));

const _0ced2a6b = () => interopDefault(__webpack_require__.e(/* import() | pages/matches/_id/_slug */ 20).then(__webpack_require__.bind(null, 244)));

const _2dad342a = () => interopDefault(__webpack_require__.e(/* import() | pages/news/_id/_slug */ 24).then(__webpack_require__.bind(null, 245)));

const _3e3884ea = () => interopDefault(__webpack_require__.e(/* import() | pages/players/_id/_slug */ 26).then(__webpack_require__.bind(null, 246)));

const _6c2f7e7a = () => interopDefault(__webpack_require__.e(/* import() | pages/index */ 19).then(__webpack_require__.bind(null, 247))); // TODO: remove in Nuxt 3


const emptyFn = () => {};

const originalPush = external_vue_router_default.a.prototype.push;

external_vue_router_default.a.prototype.push = function push(location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort);
};

external_vue_default.a.use(external_vue_router_default.a);
const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior: router_scrollBehavior,
  routes: [{
    path: "/About",
    component: _782c78d6,
    name: "About"
  }, {
    path: "/Admin",
    component: _1510f257,
    name: "Admin"
  }, {
    path: "/adstest",
    component: _3ae5beea,
    name: "adstest"
  }, {
    path: "/agents",
    component: _6e06802c,
    name: "agents"
  }, {
    path: "/Brackets",
    component: _3f12081a,
    name: "Brackets"
  }, {
    path: "/events",
    component: _2f8c0f7e,
    name: "events"
  }, {
    path: "/forums",
    component: _45868048,
    name: "forums"
  }, {
    path: "/Login",
    component: _a56d7d1e,
    name: "Login"
  }, {
    path: "/Maps",
    component: _4e5adbbf,
    name: "Maps"
  }, {
    path: "/matches",
    component: _fef7f472,
    name: "matches"
  }, {
    path: "/mystats",
    component: _19e436f2,
    name: "mystats",
    children: [{
      path: ":id?",
      component: _7c6e6743,
      name: "mystats-index-id"
    }]
  }, {
    path: "/news",
    component: _7f709a47,
    name: "news"
  }, {
    path: "/Reset",
    component: _e737e752,
    name: "Reset"
  }, {
    path: "/Signup",
    component: _4838d9c0,
    name: "Signup"
  }, {
    path: "/skins",
    component: _1040d484,
    name: "skins"
  }, {
    path: "/stats",
    component: _7dc92a4a,
    name: "stats"
  }, {
    path: "/Verify",
    component: _291758a1,
    name: "Verify"
  }, {
    path: "/Writers",
    component: _0ce8a630,
    name: "Writers"
  }, {
    path: "/forums/create",
    component: _da045914,
    name: "forums-create"
  }, {
    path: "/skins/media",
    component: _04219b8e,
    name: "skins-media"
  }, {
    path: "/stats/compare",
    component: _6cb3df94,
    name: "stats-compare"
  }, {
    path: "/teams/compare",
    component: _53d6dd77,
    name: "teams-compare"
  }, {
    path: "/stats/events/:id?",
    component: _7d42768a,
    name: "stats-events-id"
  }, {
    path: "/skins/weapons/:id?/:slug?",
    component: _54305799,
    name: "skins-weapons-id-slug"
  }, {
    path: "/agents/:name",
    component: _11427ec4,
    name: "agents-name"
  }, {
    path: "/skins/:id",
    component: _2f7bb028,
    name: "skins-id"
  }, {
    path: "/teams/:id?",
    component: _609beccc,
    name: "teams-id"
  }, {
    path: "/user/:id?",
    component: _bbe68f12,
    name: "user-id"
  }, {
    path: "/events/:id/bracket",
    component: _b4f112e2,
    name: "events-id-bracket"
  }, {
    path: "/events/:id/:slug?",
    component: _1964979e,
    name: "events-id-slug"
  }, {
    path: "/forums/:id/:slug?",
    component: _2488188a,
    name: "forums-id-slug"
  }, {
    path: "/matches/:id/:slug?",
    component: _0ced2a6b,
    name: "matches-id-slug"
  }, {
    path: "/news/:id/:slug?",
    component: _2dad342a,
    name: "news-id-slug"
  }, {
    path: "/players/:id?/:slug?",
    component: _3e3884ea,
    name: "players-id-slug"
  }, {
    path: "/",
    component: _6c2f7e7a,
    name: "index"
  }],
  fallback: false
};
function createRouter() {
  return new external_vue_router_default.a(routerOptions);
}
// CONCATENATED MODULE: ./.nuxt/components/nuxt-child.js
/* harmony default export */ var nuxt_child = ({
  name: 'NuxtChild',
  functional: true,
  props: {
    nuxtChildKey: {
      type: String,
      default: ''
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    }
  },

  render(_, {
    parent,
    data,
    props
  }) {
    const h = parent.$createElement;
    data.nuxtChild = true;
    const _parent = parent;
    const transitions = parent.$nuxt.nuxt.transitions;
    const defaultTransition = parent.$nuxt.nuxt.defaultTransition;
    let depth = 0;

    while (parent) {
      if (parent.$vnode && parent.$vnode.data.nuxtChild) {
        depth++;
      }

      parent = parent.$parent;
    }

    data.nuxtChildDepth = depth;
    const transition = transitions[depth] || defaultTransition;
    const transitionProps = {};
    transitionsKeys.forEach(key => {
      if (typeof transition[key] !== 'undefined') {
        transitionProps[key] = transition[key];
      }
    });
    const listeners = {};
    listenersKeys.forEach(key => {
      if (typeof transition[key] === 'function') {
        listeners[key] = transition[key].bind(_parent);
      }
    });

    if (false) {} // make sure that leave is called asynchronous (fix #5703)


    if (transition.css === false) {
      const leave = listeners.leave; // only add leave listener when user didnt provide one
      // or when it misses the done argument

      if (!leave || leave.length < 2) {
        listeners.leave = (el, done) => {
          if (leave) {
            leave.call(_parent, el);
          }

          _parent.$nextTick(done);
        };
      }
    }

    let routerView = h('routerView', data);

    if (props.keepAlive) {
      routerView = h('keep-alive', {
        props: props.keepAliveProps
      }, [routerView]);
    }

    return h('transition', {
      props: transitionProps,
      on: listeners
    }, [routerView]);
  }

});
const transitionsKeys = ['name', 'mode', 'appear', 'css', 'type', 'duration', 'enterClass', 'leaveClass', 'appearClass', 'enterActiveClass', 'enterActiveClass', 'leaveActiveClass', 'appearActiveClass', 'enterToClass', 'leaveToClass', 'appearToClass'];
const listenersKeys = ['beforeEnter', 'enter', 'afterEnter', 'enterCancelled', 'beforeLeave', 'leave', 'afterLeave', 'leaveCancelled', 'beforeAppear', 'appear', 'afterAppear', 'appearCancelled'];
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=template&id=39174add&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"__nuxt-error-page"},[_vm._ssrNode("<div class=\"error\">","</div>",[_vm._ssrNode("<svg xmlns=\"http://www.w3.org/2000/svg\" width=\"90\" height=\"90\" fill=\"#DBE1EC\" viewBox=\"0 0 48 48\"><path d=\"M22 30h4v4h-4zm0-16h4v12h-4zm1.99-10C12.94 4 4 12.95 4 24s8.94 20 19.99 20S44 35.05 44 24 35.04 4 23.99 4zM24 40c-8.84 0-16-7.16-16-16S15.16 8 24 8s16 7.16 16 16-7.16 16-16 16z\"></path></svg> <div class=\"title\">"+_vm._ssrEscape(_vm._s(_vm.message))+"</div> "),(_vm.statusCode === 404)?_vm._ssrNode("<p class=\"description\">","</p>",[_c('NuxtLink',{staticClass:"error-link",attrs:{"to":"/"}},[_vm._v("Back to the home page")])],1):_vm._e(),_vm._ssrNode(" <div class=\"logo\"><a href=\"https://nuxtjs.org\" target=\"_blank\" rel=\"noopener\">Nuxt.js</a></div>")],2)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=template&id=39174add&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var nuxt_errorvue_type_script_lang_js_ = ({
  name: 'NuxtError',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  computed: {
    statusCode() {
      return this.error && this.error.statusCode || 500;
    },

    message() {
      return this.error.message || 'Error';
    }

  },

  head() {
    return {
      title: this.message,
      meta: [{
        name: 'viewport',
        content: 'width=device-width,initial-scale=1.0,minimum-scale=1.0'
      }]
    };
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_errorvue_type_script_lang_js_ = (nuxt_errorvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(1);

// CONCATENATED MODULE: ./.nuxt/components/nuxt-error.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(28)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_error_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_errorvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "312d3506"
  
)

/* harmony default export */ var nuxt_error = (nuxt_error_component.exports);
// CONCATENATED MODULE: ./.nuxt/components/nuxt.js




/* harmony default export */ var components_nuxt = ({
  name: 'Nuxt',
  components: {
    NuxtChild: nuxt_child,
    NuxtError: nuxt_error
  },
  props: {
    nuxtChildKey: {
      type: String,
      default: undefined
    },
    keepAlive: Boolean,
    keepAliveProps: {
      type: Object,
      default: undefined
    },
    name: {
      type: String,
      default: 'default'
    }
  },

  errorCaptured(error) {
    // if we receive and error while showing the NuxtError component
    // capture the error and force an immediate update so we re-render
    // without the NuxtError component
    if (this.displayingNuxtError) {
      this.errorFromNuxtError = error;
      this.$forceUpdate();
    }
  },

  computed: {
    routerViewKey() {
      // If nuxtChildKey prop is given or current route has children
      if (typeof this.nuxtChildKey !== 'undefined' || this.$route.matched.length > 1) {
        return this.nuxtChildKey || compile(this.$route.matched[0].path)(this.$route.params);
      }

      const [matchedRoute] = this.$route.matched;

      if (!matchedRoute) {
        return this.$route.path;
      }

      const Component = matchedRoute.components.default;

      if (Component && Component.options) {
        const {
          options
        } = Component;

        if (options.key) {
          return typeof options.key === 'function' ? options.key(this.$route) : options.key;
        }
      }

      const strict = /\/$/.test(matchedRoute.path);
      return strict ? this.$route.path : this.$route.path.replace(/\/$/, '');
    }

  },

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$root.$options.nuxt);
  },

  render(h) {
    // if there is no error
    if (!this.nuxt.err) {
      // Directly return nuxt child
      return h('NuxtChild', {
        key: this.routerViewKey,
        props: this.$props
      });
    } // if an error occurred within NuxtError show a simple
    // error message instead to prevent looping


    if (this.errorFromNuxtError) {
      this.$nextTick(() => this.errorFromNuxtError = false);
      return h('div', {}, [h('h2', 'An error occurred while showing the error page'), h('p', 'Unfortunately an error occurred and while showing the error page another error occurred'), h('p', `Error details: ${this.errorFromNuxtError.toString()}`), h('nuxt-link', {
        props: {
          to: '/'
        }
      }, 'Go back to home')]);
    } // track if we are showing the NuxtError component


    this.displayingNuxtError = true;
    this.$nextTick(() => this.displayingNuxtError = false);
    return h(nuxt_error, {
      props: {
        error: this.nuxt.err
      }
    });
  }

});
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
/* harmony default export */ var nuxt_loadingvue_type_script_lang_js_ = ({
  name: 'NuxtLoading',

  data() {
    return {
      percent: 0,
      show: false,
      canSucceed: true,
      reversed: false,
      skipTimerCount: 0,
      rtl: false,
      throttle: 200,
      duration: 5000,
      continuous: false
    };
  },

  computed: {
    left() {
      if (!this.continuous && !this.rtl) {
        return false;
      }

      return this.rtl ? this.reversed ? '0px' : 'auto' : !this.reversed ? '0px' : 'auto';
    }

  },

  beforeDestroy() {
    this.clear();
  },

  methods: {
    clear() {
      clearInterval(this._timer);
      clearTimeout(this._throttle);
      this._timer = null;
    },

    start() {
      this.clear();
      this.percent = 0;
      this.reversed = false;
      this.skipTimerCount = 0;
      this.canSucceed = true;

      if (this.throttle) {
        this._throttle = setTimeout(() => this.startTimer(), this.throttle);
      } else {
        this.startTimer();
      }

      return this;
    },

    set(num) {
      this.show = true;
      this.canSucceed = true;
      this.percent = Math.min(100, Math.max(0, Math.floor(num)));
      return this;
    },

    get() {
      return this.percent;
    },

    increase(num) {
      this.percent = Math.min(100, Math.floor(this.percent + num));
      return this;
    },

    decrease(num) {
      this.percent = Math.max(0, Math.floor(this.percent - num));
      return this;
    },

    pause() {
      clearInterval(this._timer);
      return this;
    },

    resume() {
      this.startTimer();
      return this;
    },

    finish() {
      this.percent = this.reversed ? 0 : 100;
      this.hide();
      return this;
    },

    hide() {
      this.clear();
      setTimeout(() => {
        this.show = false;
        this.$nextTick(() => {
          this.percent = 0;
          this.reversed = false;
        });
      }, 500);
      return this;
    },

    fail(error) {
      this.canSucceed = false;
      return this;
    },

    startTimer() {
      if (!this.show) {
        this.show = true;
      }

      if (typeof this._cut === 'undefined') {
        this._cut = 10000 / Math.floor(this.duration);
      }

      this._timer = setInterval(() => {
        /**
         * When reversing direction skip one timers
         * so 0, 100 are displayed for two iterations
         * also disable css width transitioning
         * which otherwise interferes and shows
         * a jojo effect
         */
        if (this.skipTimerCount > 0) {
          this.skipTimerCount--;
          return;
        }

        if (this.reversed) {
          this.decrease(this._cut);
        } else {
          this.increase(this._cut);
        }

        if (this.continuous) {
          if (this.percent >= 100) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          } else if (this.percent <= 0) {
            this.skipTimerCount = 1;
            this.reversed = !this.reversed;
          }
        }
      }, 100);
    }

  },

  render(h) {
    let el = h(false);

    if (this.show) {
      el = h('div', {
        staticClass: 'nuxt-progress',
        class: {
          'nuxt-progress-notransition': this.skipTimerCount > 0,
          'nuxt-progress-failed': !this.canSucceed
        },
        style: {
          width: this.percent + '%',
          left: this.left
        }
      });
    }

    return el;
  }

});
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_nuxt_loadingvue_type_script_lang_js_ = (nuxt_loadingvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./.nuxt/components/nuxt-loading.vue
var nuxt_loading_render, nuxt_loading_staticRenderFns


function nuxt_loading_injectStyles (context) {
  
  var style0 = __webpack_require__(30)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var nuxt_loading_component = Object(componentNormalizer["a" /* default */])(
  components_nuxt_loadingvue_type_script_lang_js_,
  nuxt_loading_render,
  nuxt_loading_staticRenderFns,
  false,
  nuxt_loading_injectStyles,
  null,
  "28fcf771"
  
)

/* harmony default export */ var nuxt_loading = (nuxt_loading_component.exports);
// EXTERNAL MODULE: ./node_modules/buefy/dist/buefy.css
var buefy = __webpack_require__(32);

// EXTERNAL MODULE: ./css/main.scss
var main = __webpack_require__(34);

// EXTERNAL MODULE: ./css/jquery.bracket.min.css
var jquery_bracket_min = __webpack_require__(36);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/adminblank.vue?vue&type=template&id=3c56c24c&
var adminblankvue_type_template_id_3c56c24c_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_vm._ssrNode("<div>My blog navigation bar here</div> "),_c('nuxt')],2)}
var adminblankvue_type_template_id_3c56c24c_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/adminblank.vue?vue&type=template&id=3c56c24c&

// CONCATENATED MODULE: ./layouts/adminblank.vue

var script = {}


/* normalize component */

var adminblank_component = Object(componentNormalizer["a" /* default */])(
  script,
  adminblankvue_type_template_id_3c56c24c_render,
  adminblankvue_type_template_id_3c56c24c_staticRenderFns,
  false,
  null,
  null,
  "41972224"
  
)

/* harmony default export */ var adminblank = (adminblank_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=template&id=012d6c08&
var defaultvue_type_template_id_012d6c08_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(!_vm.loading)?_c('b-navbar',{staticStyle:{"text-align":"left"},attrs:{"transparent":"","fixed-top":"","wrapper-class":_vm.$device.isMobile ?'':'menu-content'}},[_c('template',{slot:"brand"},[_c('b-navbar-item',{attrs:{"tag":"router-link","to":{ path: '/' }}},[_c('img',{staticStyle:{"width":"35px"},attrs:{"src":__webpack_require__(20)}})])],1),_vm._v(" "),_c('template',{staticStyle:{"color":"white"},slot:"start"},[_c('nuxt-link',{staticClass:"menu-section first-section",attrs:{"to":"/news"}},[_c('b-navbar-item',{staticStyle:{"color":"white"},attrs:{"dark":""}},[_c('b',[_vm._v("Articles")])])],1),_vm._v(" "),_c('nuxt-link',{staticClass:"menu-section",attrs:{"to":"/forums"}},[_c('b-navbar-item',{staticClass:"is-dark",staticStyle:{"color":"white"},attrs:{"dark":""}},[_c('b',[_vm._v("Forums")])])],1),_vm._v(" "),_c('nuxt-link',{staticClass:"menu-section",attrs:{"to":"/matches"}},[_c('b-navbar-item',{staticClass:"is-dark",staticStyle:{"color":"white"},attrs:{"dark":""}},[_c('b',[_vm._v("Matches")])])],1),_vm._v(" "),_c('nuxt-link',{staticClass:"menu-section",attrs:{"to":"/events"}},[_c('b-navbar-item',{staticClass:"is-dark",staticStyle:{"color":"white"},attrs:{"dark":""}},[_c('b',[_vm._v("Events")])])],1),_vm._v(" "),_c('nuxt-link',{staticClass:"menu-section",attrs:{"to":"/stats"}},[_c('b-navbar-item',{staticClass:"is-dark",staticStyle:{"color":"white"},attrs:{"dark":""}},[_c('b',[_vm._v("Standings")])])],1),_vm._v(" "),_c('nuxt-link',{staticClass:"menu-section",attrs:{"to":"/rankings"}},[_c('b-navbar-item',{staticClass:"is-dark",staticStyle:{"color":"white"},attrs:{"dark":""}},[_c('b',[_vm._v("Stats")])])],1),_vm._v(" "),_c('nuxt-link',{staticClass:"menu-section",attrs:{"to":"/mystats"}},[_c('b-navbar-item',{staticClass:"is-dark",staticStyle:{"color":"white"},attrs:{"dark":""}},[_c('b',[_vm._v("Rosters")])])],1),_vm._v(" "),_c('nuxt-link',{staticClass:"menu-section",attrs:{"to":"/about"}},[_c('b-navbar-item',{staticClass:"is-dark",staticStyle:{"color":"white"}},[_c('b',[_vm._v("About")])])],1)],1),_vm._v(" "),_c('template',{slot:"end"},[_c('b-navbar-item',{attrs:{"tag":"section"}},[_c('section',[_c('navBarSearch')],1)]),_vm._v(" "),_c('b-navbar-item',{attrs:{"tag":"div"}},[(!_vm.user.username)?_c('div',{staticClass:"buttons"},[_c('nuxt-link',{staticStyle:{"margin-right":"0.5em"},attrs:{"to":"/signup"}},[_c('a',{staticClass:"button",staticStyle:{"background-color":"#ff4653"}},[_c('strong',[_vm._v("Sign up")])])]),_vm._v(" "),_c('nuxt-link',{attrs:{"to":"/login"}},[_c('a',{staticClass:"button",staticStyle:{"background-color":"#8c67ef","border-color":"#8c67ef"}},[_vm._v("Log in")])])],1):_vm._e(),_vm._v(" "),(_vm.user.username)?_c('div',{staticClass:"buttons",staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.navUser(_vm.user.id)}}},[_c('p',{staticClass:"subtitle",staticStyle:{"margin-right":"10px","margin-bottom":"15px"}},[_vm._v("\n            User\n            "),(_vm.notifications && Object.keys(_vm.notifications).length!=0)?_c('span',{staticStyle:{"margin-left":"0px","font-size":"15px","vertical-align":"text-top","color":"#ff726f","font-weight":"bold"}},[_vm._v(_vm._s(Object.keys(_vm.notifications).length))]):_vm._e(),_vm._v(" |\n            "),_c('span',{staticStyle:{"cursor":"pointer","color":"#ff726f"},on:{"click":function($event){return _vm.logout()}}},[_vm._v("Logout")])])]):_vm._e()])],1)],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<section>","</section>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"columns is-centered ordered-mobile\">","</div>",[_vm._ssrNode("<div class=\"column is-narrow fl-3\" style=\"margin-top:50px\">","</div>",[_vm._ssrNode("<div"+(_vm._ssrStyle(null,{width:!_vm.$device.isMobile?'200px':'' }, null))+">","</div>",[_c('SideEvents',{staticStyle:{"font-size":"14px"}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column is-narrow fl-1\">","</div>",[_vm._ssrNode("<div"+(_vm._ssrStyle(null,{width:!_vm.$device.isMobile?'800px':'' }, null))+">","</div>",[_c('nuxt')],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column is-narrow fl-2\" style=\"margin-top:50px\">","</div>",[_vm._ssrNode("<div"+(_vm._ssrStyle(null,{width:!_vm.$device.isMobile?'200px':'' }, null))+">","</div>",[_vm._ssrNode("<div class=\"subtitle\" style=\"text-align:left\">Recent Activity</div> "),_vm._ssrNode("<div class=\"card\" style=\"padding:0px\">","</div>",[_vm._ssrNode("<div class=\"card-content\" style=\"padding:0px\">","</div>",[_c('SideForums')],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"card-content\" style=\"padding:0px\">","</div>",[_c('SideMatches',{staticStyle:{"margin-top":"-10px"}})],1)],2)])],2)])])],2)}
var defaultvue_type_template_id_012d6c08_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/default.vue?vue&type=template&id=012d6c08&

// EXTERNAL MODULE: external "lodash/debounce"
var debounce_ = __webpack_require__(5);
var debounce_default = /*#__PURE__*/__webpack_require__.n(debounce_);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/navBarSearch.vue?vue&type=template&id=03ed6669&
var navBarSearchvue_type_template_id_03ed6669_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',[_c('b-field',[_c('b-autocomplete',{staticStyle:{"width":"230px","border-bottom-color":"#171e29","border-bottom-height":"1px"},attrs:{"max-height":"400px","rounded":"","icon":"magnify","data":_vm.playerSearchData,"placeholder":"Search...","field":"name","loading":_vm.fetchingPlayer,"dropdown-position":_vm.$device.isMobile?'top':'bottom'},on:{"typing":function (name){ return _vm.searchFor=='player'?_vm.getPlayerSearchResults(name):_vm.getTeamSearchResults(name); },"select":function (option) {_vm.searchFor=='player'?_vm.navPlayer(option):_vm.navTeam(option)}},nativeOn:{"click":function($event){return _vm.onFocus($event)}},scopedSlots:_vm._u([{key:"default",fn:function(props){return [(_vm.searchFor=='player')?_c('div',[(props.option._id === _vm.playerSearchData[0]._id)?_c('div',[(!_vm.$device.isMobile)?_c('div',{staticClass:"columns is-centered"},[(!_vm.$device.isMobile)?_c('div',{staticClass:"column is-half"},[_c('img',{staticStyle:{"width":"80px","height":"auto","max-width":"80px","max-height":"80px"},attrs:{"src":_vm.getPlayerImgUrl(props.option.img)}})]):_vm._e(),_vm._v(" "),_c('div',{staticClass:"column is-half"},[(props.option.realName.first !== undefined && props.option.realName.first !== '')?_c('div',[_c('p',{staticStyle:{"margin-top":"-5px","font-size":"20px","color":"#ff726f"}},[_c('b',[_vm._v(_vm._s(props.option.name))])]),_vm._v(" "),_c('span',[(props.option.flag !== undefined)?_c('country-flag',{staticStyle:{"vertical-align":"-13.5px","margin-left":"-20px","margin-right":"-15px"},attrs:{"country":props.option.flag,"size":"normal"}}):_vm._e(),_vm._v(" "),(props.option.flag === undefined)?_c('country-flag',{staticStyle:{"vertical-align":"-13.5px","margin-left":"-20px","margin-right":"-15px"},attrs:{"country":"un","size":"normal"}}):_vm._e(),_vm._v("\n                    "+_vm._s(props.option.realName.first + " " + props.option.realName.last)+"\n                  ")],1)]):_vm._e(),_vm._v(" "),(props.option.realName.first === undefined || props.option.realName.first === '')?_c('div',{staticStyle:{"margin-left":"-10px","margin-top":"17px"}},[_c('span',{staticStyle:{"margin-left":"-20px","margin-top":"50px","font-size":"20px","color":"#ff726f"}},[(props.option.flag !== undefined)?_c('country-flag',{staticStyle:{"vertical-align":"-13.5px","margin-left":"-20px","margin-right":"-15px"},attrs:{"country":props.option.flag,"size":"normal"}}):_vm._e(),_vm._v(" "),(props.option.flag === undefined)?_c('country-flag',{staticStyle:{"vertical-align":"-13.5px","margin-left":"-20px","margin-right":"-15px"},attrs:{"country":"un","size":"normal"}}):_vm._e(),_vm._v("\n                    "+_vm._s(props.option.name)+"\n                  ")],1)]):_vm._e()])]):_vm._e(),_vm._v(" "),(_vm.$device.isMobile)?_c('div',[_c('span',[(props.option.flag !== undefined)?_c('country-flag',{staticStyle:{"vertical-align":"-13.5px","margin-left":"-20px","margin-right":"-15px"},attrs:{"country":props.option.flag,"size":"small"}}):_vm._e(),_vm._v(" "),(props.option.flag === undefined)?_c('country-flag',{staticStyle:{"vertical-align":"-13.5px","margin-left":"-20px","margin-right":"-15px"},attrs:{"country":"un","size":"small"}}):_vm._e(),_vm._v(" "),(props.option.realName.first !== '')?_c('div',{staticStyle:{"display":"inline-block"}},[_vm._v("\n                  "+_vm._s(props.option.realName.first)+"\n                  "),_c('span',{staticStyle:{"color":"#ff726f","margin-left":"4px"}},[_vm._v("\""+_vm._s(props.option.name)+"\"")]),_vm._v(" "),_c('span',{staticStyle:{"margin-left":"4px"}},[_vm._v(_vm._s(props.option.realName.last))])]):_vm._e(),_vm._v(" "),(props.option.realName.first == '')?_c('div',{staticStyle:{"display":"inline-block"}},[_vm._v("\n                  "+_vm._s(props.option.realName.first)+"\n                  "),_c('span',{staticStyle:{"color":"#ff726f","margin-left":"4px"}},[_vm._v(_vm._s(props.option.name))]),_vm._v(" "),_c('span',{staticStyle:{"margin-left":"4px"}},[_vm._v(_vm._s(props.option.realName.last))])]):_vm._e()],1)]):_vm._e()]):_vm._e(),_vm._v(" "),(props.option._id !== _vm.playerSearchData[0]._id)?_c('div',[_c('span',[(props.option.flag !== undefined)?_c('country-flag',{staticStyle:{"vertical-align":"-15px","margin-left":"-20px","margin-right":"-15px"},attrs:{"country":props.option.flag,"size":"small"}}):_vm._e(),_vm._v(" "),(props.option.flag === undefined)?_c('country-flag',{staticStyle:{"vertical-align":"-15px","margin-left":"-20px","margin-right":"-15px"},attrs:{"country":"un","size":"small"}}):_vm._e(),_vm._v(" "),(props.option.realName.first !== '')?_c('div',{staticStyle:{"display":"inline-block"}},[_vm._v("\n                "+_vm._s(props.option.realName.first)+"\n                "),_c('span',{staticStyle:{"color":"#ff726f","margin-left":"4px"}},[_vm._v("\""+_vm._s(props.option.name)+"\"")]),_vm._v(" "),_c('span',{staticStyle:{"margin-left":"4px"}},[_vm._v(_vm._s(props.option.realName.last))])]):_vm._e(),_vm._v(" "),(props.option.realName.first == '')?_c('div',{staticStyle:{"display":"inline-block"}},[_vm._v("\n                "+_vm._s(props.option.realName.first)+"\n                "),_c('span',{staticStyle:{"color":"#ff726f","margin-left":"4px"}},[_vm._v(_vm._s(props.option.name))]),_vm._v(" "),_c('span',{staticStyle:{"margin-left":"4px"}},[_vm._v(_vm._s(props.option.realName.last))])]):_vm._e()],1)]):_vm._e()]):_vm._e(),_vm._v(" "),(_vm.searchFor=='team')?_c('div',{staticStyle:{"width":"100%","height":"50px"}},[_c('nuxt-link',{staticStyle:{"width":"100%","height":"40px"},attrs:{"to":("/teams/" + (props.option._id))}},[_c('img',{staticStyle:{"vertical-align":"middle","width":"40px"},attrs:{"src":_vm.getTeamImgUrl(props.option.img)}}),_vm._v(" "),_c('span',{staticStyle:{"margin-left":"80px","color":"white"}},[_vm._v(_vm._s(props.option.name))])])],1):_vm._e()]}}]),model:{value:(_vm.typingData),callback:function ($$v) {_vm.typingData=$$v},expression:"typingData"}},[(!_vm.$device.isMobile)?_c('template',{slot:"header"},[_c('div',{staticStyle:{"text-align":"center","font-size":"20px","cursor":"pointer"}},[_c('span',{staticStyle:{"margin-right":"4px"},style:({'color':_vm.searchFor=='player'?'#ff4653':'white'}),on:{"click":function($event){_vm.searchFor='player';_vm.playerSearchData=[];_vm.getPlayerSearchResults(_vm.typingData)}}},[_vm._v("Players")]),_vm._v(" "),_c('span',{staticStyle:{"margin-right":"4px"}},[_vm._v("|")]),_vm._v(" "),_c('span',{staticStyle:{"margin-left":"4px"},style:({'color':_vm.searchFor=='team'?'#ff4653':'white'}),on:{"click":function($event){_vm.searchFor='team';_vm.playerSearchData=[];_vm.getTeamSearchResults(_vm.typingData)}}},[_vm._v("Teams")])])]):_vm._e(),_vm._v(" "),(_vm.$device.isMobile)?_c('template',{slot:"footer"},[_c('div',{staticStyle:{"text-align":"center","font-size":"20px","cursor":"pointer"}},[_c('span',{staticStyle:{"margin-right":"4px"},style:({'color':_vm.searchFor=='player'?'#ff4653':'white'}),on:{"click":function($event){_vm.searchFor='player';_vm.playerSearchData=[];_vm.getPlayerSearchResults(_vm.typingData)}}},[_vm._v("Players")]),_vm._v(" "),_c('span',{staticStyle:{"margin-right":"4px"}},[_vm._v("|")]),_vm._v(" "),_c('span',{staticStyle:{"margin-left":"4px"},style:({'color':_vm.searchFor=='team'?'#ff4653':'white'}),on:{"click":function($event){_vm.searchFor='team';_vm.playerSearchData=[];_vm.getTeamSearchResults(_vm.typingData)}}},[_vm._v("Teams")])])]):_vm._e(),_vm._v(" "),_vm._v(" "),_c('template',{slot:"empty"},[_vm._v("No results found")])],2)],1)],1)}
var navBarSearchvue_type_template_id_03ed6669_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/navBarSearch.vue?vue&type=template&id=03ed6669&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/navBarSearch.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ var navBarSearchvue_type_script_lang_js_ = ({
  name: "navBarSearch",
  props: [],

  data() {
    return {
      searchFor: "player",
      notifications: undefined,
      playerSearchData: [],
      playerSelected: null,
      fetchingPlayer: false,
      playerName: "",
      selected: null,
      loading: true,
      typingData: ""
    };
  },

  methods: {
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
    getTeamSearchResults: debounce_default()(function (name) {
      if (!name.length) {
        this.playerSearchData = []; // this.playerPage = 1
        // this.totalPlayerPages = 1

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

    getTeamImgUrl(img) {
      return undefined + `api/uploads/teams/${img}`;
    },

    navPlayer(player) {
      if (player) {
        this.$router.push({
          path: `/players/${player._id}`
        });
      }
    },

    navTeam(team) {
      if (team) {
        this.$router.push({
          path: `/teams/${team._id}`
        });
      }
    },

    onFocus(e) {
      e.stopPropagation();
    }

  }
});
// CONCATENATED MODULE: ./layouts/navBarSearch.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_navBarSearchvue_type_script_lang_js_ = (navBarSearchvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/navBarSearch.vue



function navBarSearch_injectStyles (context) {
  
  var style0 = __webpack_require__(38)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var navBarSearch_component = Object(componentNormalizer["a" /* default */])(
  layouts_navBarSearchvue_type_script_lang_js_,
  navBarSearchvue_type_template_id_03ed6669_render,
  navBarSearchvue_type_template_id_03ed6669_staticRenderFns,
  false,
  navBarSearch_injectStyles,
  null,
  "1f96ad37"
  
)

/* harmony default export */ var navBarSearch = (navBarSearch_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Forums/SideForums.vue?vue&type=template&id=6dd74e8e&scoped=true&
var SideForumsvue_type_template_id_6dd74e8e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[(_vm.isForumsReady && _vm.isMatchesReady && _vm.isNewsReady)?_c('b-menu'):_vm._e(),_vm._ssrNode(" "),_c('b-menu',[_c('b-menu-list',[_c('nuxt-link',{staticStyle:{"padding":"0px"},attrs:{"to":'/forums'}},[_c('b-menu-item',{staticStyle:{"text-align":"center","overflow":"hidden","text-overflow":"ellipsis"}},[_c('template',{slot:"label"},[_c('div',{staticStyle:{"color":"#ff726f","cursor":"pointer"}},[_vm._v("View All")])])],2)],1)],1)],1)],2)}
var SideForumsvue_type_template_id_6dd74e8e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Forums/SideForums.vue?vue&type=template&id=6dd74e8e&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Forums/SideForums.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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

/* harmony default export */ var SideForumsvue_type_script_lang_js_ = ({
  name: "Forums",
  props: {
    type: String
  },

  data() {
    return {
      forums: [],
      auth: undefined,
      data: [],
      isForumsReady: false,
      isMatchesReady: false,
      isNewsReady: false
    };
  },

  created() {
    this.$watch(() => {
      return this.isForumsReady;
    }, (newVal, oldVal) => {
      this.data.sort(function (a, b) {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
    }, {
      deep: true
    });
    this.$watch(() => {
      return this.isMatchesReady;
    }, (newVal, oldVal) => {
      this.data.sort(function (a, b) {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
    }, {
      deep: true
    });
    this.$watch(() => {
      return this.isNewsReady;
    }, (newVal, oldVal) => {
      this.data.sort(function (a, b) {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
    }, {
      deep: true
    });
    let auth = undefined;

    if (false) { var authEnc; }

    if (auth) {
      this.auth = auth;
    }

    this.fetchData();
  },

  methods: {
    sortData() {
      const temp = this.data.sort(function (a, b) {
        return new Date(b.updatedAt) - new Date(a.updatedAt);
      });
      return temp;
    },

    fetchData() {
      this.$axios(undefined + `api/forums?$sort[updatedAt]=-1&$limit=5`, {
        method: "get",
        headers: {
          "content-type": "application/json"
        }
      }).then(function (response) {
        return response.data;
      }).then(response => {
        for (let i = 0; i < response.data.length; i++) {
          const temp = response.data[i];
          temp.type = "forums";

          if (temp.commentIds.length !== 0) {
            this.data.push(temp);
          } else {
            this.data.push(temp);
          }

          this.isForumsReady = true;
        }
      });
      this.$axios(undefined + `api/matches?$sort[updatedAt]=-1&$limit=5`, {
        method: "get",
        headers: {
          "content-type": "application/json"
        }
      }).then(function (response) {
        return response.data;
      }).then(response => {
        for (let i = 0; i < response.data.length; i++) {
          const temp = response.data[i];
          temp.type = "matches";

          if (temp.commentIds.length !== 0) {
            this.data.push(temp);
          }

          this.isMatchesReady = true;
        }
      });
      this.$axios(undefined + `api/news?$sort[updatedAt]=-1&$limit=5`, {
        method: "get",
        headers: {
          "content-type": "application/json"
        }
      }).then(function (response) {
        return response.data;
      }).then(response => {
        for (let i = 0; i < response.data.length; i++) {
          const temp = response.data[i];
          temp.type = "news";

          if (temp.commentIds.length !== 0) {
            this.data.push(temp);
          }
        }

        this.isNewsReady = true;
      });
    },

    formatDate(dateTime) {
      const utc = moment.utc(dateTime);
      var localDate = utc.local();
      return moment(localDate).format("DD/MM/YY h:mm a");
    },

    navActivity(type, id, slug) {
      this.$router.push({
        path: `/${type}/${id}/${slug}`
      });
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

    navForums() {
      this.$router.push({
        path: `/forums`
      });
    }

  },
  components: {}
});
// CONCATENATED MODULE: ./components/Forums/SideForums.vue?vue&type=script&lang=js&
 /* harmony default export */ var Forums_SideForumsvue_type_script_lang_js_ = (SideForumsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Forums/SideForums.vue



function SideForums_injectStyles (context) {
  
  var style0 = __webpack_require__(40)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SideForums_component = Object(componentNormalizer["a" /* default */])(
  Forums_SideForumsvue_type_script_lang_js_,
  SideForumsvue_type_template_id_6dd74e8e_scoped_true_render,
  SideForumsvue_type_template_id_6dd74e8e_scoped_true_staticRenderFns,
  false,
  SideForums_injectStyles,
  "6dd74e8e",
  "8cd9c9ce"
  
)

/* harmony default export */ var SideForums = (SideForums_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/Events/SideEvents.vue?vue&type=template&id=11b3de70&scoped=true&
var SideEventsvue_type_template_id_11b3de70_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_vm._ssrNode(((_vm.liveEvents.length>0)?("<div class=\"subtitle\" style=\"text-align:left;\" data-v-11b3de70>Live Events</div>"):"<!---->")+" "),_vm._l((_vm.liveEvents),function(event){return _vm._ssrNode("<div"+(_vm._ssrClass("card",_vm.getBkg(_vm.index%2===0)))+" style=\"margin-top:5px;text-align:left\" data-v-11b3de70>","</div>",[_c('nuxt-link',{attrs:{"to":("/events/" + (event._id) + "/" + (event.slug))}},[_c('div',{staticClass:"card-content",staticStyle:{"padding-top":"0.5rem","padding-bottom":"0.5rem","padding-left":"0"}},[_c('img',{staticStyle:{"width":"15px","height":"15px"},attrs:{"src":event.img}}),_vm._v(" "),_c('country-flag',{attrs:{"country":event.flag,"size":"medium"}}),_vm._v(" "),_c('p',{staticClass:"subtitle forum-title",staticStyle:{"text-align":"left","font-size":"14px","display":"inline-block","margin-bottom":"10px"}},[_vm._v(_vm._s(event.name))])],1)])],1)}),_vm._ssrNode(" "+((_vm.events.length>0)?("<div class=\"subtitle\" style=\"text-align:left;margin-top:20px\" data-v-11b3de70>Upcoming Events</div>"):"<!---->")+" "),_vm._l((_vm.events),function(event,index){return _vm._ssrNode("<div"+(_vm._ssrClass("card",_vm.getBkg(index%2===0)))+" style=\"margin-top:5px;text-align:left\" data-v-11b3de70>","</div>",[_c('nuxt-link',{attrs:{"to":("/events/" + (event._id) + "/" + (event.slug))}},[_c('div',{staticClass:"card-content",staticStyle:{"padding-top":"0.5rem","padding-bottom":"0.5rem","padding-left":"0"}},[_c('country-flag',{attrs:{"country":event.flag,"size":"medium"}}),_vm._v(" "),_c('p',{staticClass:"subtitle forum-title",staticStyle:{"text-align":"left","font-size":"14px","display":"inline-block","margin-bottom":"10px"}},[_vm._v(_vm._s(event.name))])],1)])],1)}),_vm._ssrNode(" "+((_vm.pastEvents.length>0)?("<div class=\"subtitle\" style=\"text-align:left;margin-top:20px\" data-v-11b3de70>Sports</div>"):"<!---->")+" "),_vm._l((_vm.pastEvents),function(event,index){return _vm._ssrNode("<div"+(_vm._ssrClass("card",_vm.getBkg(index%2===0)))+" style=\"text-align:left;margin-top:5px\" data-v-11b3de70>","</div>",[_c('nuxt-link',{attrs:{"to":("/events/" + (event._id) + "/" + (event.slug))}},[_c('div',{staticClass:"card-content",staticStyle:{"padding-left":"10px","margin-bottom":"0px","padding-bottom":"10px"}},[_c('img',{staticStyle:{"width":"20px","height":"20px","margin-bottom":"5px","padding-top":"0px","padding-bottom":"0px"},attrs:{"src":_vm.getImgUrl(event.img)}}),_vm._v(" "),_c('p',{staticClass:"subtitle forum-title",staticStyle:{"text-align":"left","font-size":"14px","display":"inline-block"}},[_vm._v(_vm._s(event.name))])])])],1)}),_vm._ssrNode(" <div class=\"subtitle\" style=\"text-align:left;margin-top:20px\" data-v-11b3de70>Connect with us!</div> "),_c('SideSocials',{staticStyle:{"font-size":"14px","margin-top":"20px"}})],2)}
var SideEventsvue_type_template_id_11b3de70_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/Events/SideEvents.vue?vue&type=template&id=11b3de70&scoped=true&

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/socials/SideSocials.vue?vue&type=template&id=2c2688d1&scoped=true&
var SideSocialsvue_type_template_id_2c2688d1_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"hello"},[_vm._ssrNode("<div class=\"card\" style=\"margin-top:5px;text-align:left\" data-v-2c2688d1>","</div>",[_vm._ssrNode("<div class=\"columns is-centered\" data-v-2c2688d1>","</div>",[_vm._ssrNode("<div class=\"column is-one-third\" style=\"text-align:center\" data-v-2c2688d1>","</div>",[_vm._ssrNode("<a href=\"mailto:valorantify@gmail.com\" data-v-2c2688d1>","</a>",[_c('b-icon',{attrs:{"icon":"email"}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column is-one-third\" style=\"text-align:center\" data-v-2c2688d1>","</div>",[_vm._ssrNode("<a href=\"https://discord.gg/dNDXmju\" data-v-2c2688d1>","</a>",[_c('b-icon',{attrs:{"icon":"discord"}})],1)]),_vm._ssrNode(" "),_vm._ssrNode("<div class=\"column is-one-third\" style=\"text-align:center\" data-v-2c2688d1>","</div>",[_vm._ssrNode("<a href=\"https://twitter.com/valorantify\" data-v-2c2688d1>","</a>",[_c('b-icon',{attrs:{"icon":"twitter"}})],1)])],2)])])}
var SideSocialsvue_type_template_id_2c2688d1_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/socials/SideSocials.vue?vue&type=template&id=2c2688d1&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/socials/SideSocials.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const SideSocialsvue_type_script_lang_js_moment = __webpack_require__(8);

/* harmony default export */ var SideSocialsvue_type_script_lang_js_ = ({
  name: "SideEvents",
  props: {
    type: String
  },

  data() {
    return {};
  },

  created() {},

  methods: {},
  components: {}
});
// CONCATENATED MODULE: ./components/socials/SideSocials.vue?vue&type=script&lang=js&
 /* harmony default export */ var socials_SideSocialsvue_type_script_lang_js_ = (SideSocialsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/socials/SideSocials.vue



function SideSocials_injectStyles (context) {
  
  var style0 = __webpack_require__(42)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SideSocials_component = Object(componentNormalizer["a" /* default */])(
  socials_SideSocialsvue_type_script_lang_js_,
  SideSocialsvue_type_template_id_2c2688d1_scoped_true_render,
  SideSocialsvue_type_template_id_2c2688d1_scoped_true_staticRenderFns,
  false,
  SideSocials_injectStyles,
  "2c2688d1",
  "6c65af3f"
  
)

/* harmony default export */ var SideSocials = (SideSocials_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/Events/SideEvents.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const SideEventsvue_type_script_lang_js_moment = __webpack_require__(8);


/* harmony default export */ var SideEventsvue_type_script_lang_js_ = ({
  name: "SideEvents",
  props: {
    type: String
  },

  data() {
    return {
      events: [],
      pastEvents: [],
      liveEvents: []
    };
  },

  created() {
    this.$axios(undefined + "api/events?$sort[createdAt]=-1&$limit=5", {
      method: "get",
      headers: {
        "content-type": "application/json"
      }
    }).then(function (response) {
      return response.data;
    }).then(response => {
      if (response.code !== undefined) {
        this.$buefy.snackbar.open(response.message);
      } else {
        for (let i = 0; response.data.length; i++) {
          if (SideEventsvue_type_script_lang_js_moment(new Date()).isBetween(SideEventsvue_type_script_lang_js_moment(response.data[i].date.from), SideEventsvue_type_script_lang_js_moment(response.data[i].date.to))) {
            this.liveEvents.push(response.data[i]);
          } else if (SideEventsvue_type_script_lang_js_moment(new Date()).diff(SideEventsvue_type_script_lang_js_moment(response.data[i].date.to)) <= 0) {
            this.events.push(response.data[i]);
          } else {
            this.pastEvents.push(response.data[i]);
          }
        }
      }
    });
  },

  methods: {
    formatDateEvent(dateTime) {
      const utc = SideEventsvue_type_script_lang_js_moment.utc(dateTime);
      var localDate = utc.local();
      return SideEventsvue_type_script_lang_js_moment(localDate).format("MMMM DD, YYYY");
    },

    getImgUrl(img) {
      return undefined + `api/uploads/events/${img}`;
    },

    navEventDetails(id, slug) {
      this.$router.push({
        path: `/events/${id}/${slug}`
      });
    },

    formatDetails(details) {
      if (details.length > 250) {
        return details.slice(0, 250) + "...";
      }

      return details;
    },

    getBkg(type) {
      if (type) {
        return "light-bkg";
      } else {
        return "dark-bkg";
      }
    }

  },
  components: {
    SideSocials: SideSocials
  }
});
// CONCATENATED MODULE: ./components/Events/SideEvents.vue?vue&type=script&lang=js&
 /* harmony default export */ var Events_SideEventsvue_type_script_lang_js_ = (SideEventsvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/Events/SideEvents.vue



function SideEvents_injectStyles (context) {
  
  var style0 = __webpack_require__(44)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SideEvents_component = Object(componentNormalizer["a" /* default */])(
  Events_SideEventsvue_type_script_lang_js_,
  SideEventsvue_type_template_id_11b3de70_scoped_true_render,
  SideEventsvue_type_template_id_11b3de70_scoped_true_staticRenderFns,
  false,
  SideEvents_injectStyles,
  "11b3de70",
  "5b96e68e"
  
)

/* harmony default export */ var SideEvents = (SideEvents_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./components/SideMatches/SideMatches.vue?vue&type=template&id=756ce69e&scoped=true&
var SideMatchesvue_type_template_id_756ce69e_scoped_true_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main"},[_vm._ssrNode("<div class=\"columns is-centered ordered-mobile\" data-v-756ce69e>","</div>",[_vm._ssrNode("<div class=\"column is-narrow fl-2\" data-v-756ce69e>","</div>",[_vm._ssrNode("<div"+(_vm._ssrStyle(null,{width:!_vm.$device.isMobile?'200px':'' }, null))+" data-v-756ce69e>","</div>",[_vm._ssrNode(((_vm.liveMatches && _vm.liveMatches.length!=0)?("<div class=\"subtitle\" style=\"text-align:left;margin-top:20px\" data-v-756ce69e>Live Matches</div>"):"<!---->")+" "),(_vm.liveMatches && _vm.liveMatches.length!=0)?_vm._ssrNode("<div class=\"card\" style=\"padding:0px;\" data-v-756ce69e>","</div>",[_vm._ssrNode("<div class=\"card-content\" style=\"padding:0px;\" data-v-756ce69e>","</div>",[_c('b-menu',_vm._l((_vm.liveMatches),function(match){return _c('b-menu-list',{key:match._id,staticStyle:{"text-align":"left"}},[_c('b-menu-item',{staticStyle:{"text-align":"left","overflow":"hidden","text-overflow":"ellipsis","border-bottom-color":"#171e29","border-bottom-height":"1px","border-bottom-style":"solid"}},[_c('template',{slot:"label"},[_c('nuxt-link',{staticStyle:{"padding":"0px"},attrs:{"to":("/matches/" + (match._id) + "/" + (match.slug))}},[_c('div',{staticClass:"columns is-mobile"},[_c('div',{staticClass:"column is-4",staticStyle:{"padding-right":"0px","margin-right":"0px"}},[_c('img',{staticStyle:{"width":"20px","height":"20px","float":"right","padding-right":"0px","margin-right":"0px"},attrs:{"src":"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Soccerball.svg/1024px-Soccerball.svg.png"}})]),_vm._v(" "),(match._id == '5ef16284df57101c2c72ee2d')?_c('div',{staticClass:"column is-8"},[_c('p',{staticStyle:{"text-align":"left"}},[_vm._v("Girls soccer")])]):_vm._e(),_vm._v(" "),(match._id != '5ef16284df57101c2c72ee2d')?_c('div',{staticClass:"column is-8"},[_c('p',{staticStyle:{"text-align":"left"}},[_vm._v("Boys soccer")])]):_vm._e()]),_vm._v(" "),_c('div',{staticClass:"columns is-mobile"},[_c('div',{staticClass:"column is-6"},[_c('div',[_c('div',{staticStyle:{"width":"20px","height":"20px","overflow":"hidden","display":"inline-block","vertical-align":"middle"}},[_c('img',{attrs:{"src":_vm.getTeamImgUrl(match.teamOne.img),"align":"top"}})]),_vm._v(" "),_c('div',{staticStyle:{"text-align":"left","display":"inline-block","margin-bottom":"10px","margin-left":"5px","width":"50%","white-space":"nowrap"}},[_c('b',{staticStyle:{"font-size":"14px"}},[_vm._v(_vm._s(match.teamOne.name))])])]),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"5px"}},[_c('div',{staticStyle:{"width":"20px","height":"20px","overflow":"hidden","display":"inline-block","vertical-align":"middle"}},[_c('img',{attrs:{"src":_vm.getTeamImgUrl(match.teamTwo.img),"align":"top"}})]),_vm._v(" "),_c('div',{staticStyle:{"text-align":"left","display":"inline-block","margin-left":"5px","width":"50%","white-space":"nowrap"}},[_c('b',{staticStyle:{"font-size":"14px"}},[_vm._v(_vm._s(match.teamTwo.name))])])])]),_vm._v(" "),_c('div',{staticClass:"column"},[_c('div',{staticStyle:{"text-align":"right"}},[_c('div',{class:_vm.getOutcomeClassLive(_vm.getWinnerDetails(match).winner === 0)},[(match.maps && match.maps.length>1)?_c('span',[_vm._v("(")]):_vm._e(),_vm._v("\n                              "+_vm._s(_vm.getWinnerDetails(match).teamOneScore)+"\n                              "),(match.maps && match.maps.length>1)?_c('span',[_vm._v(")")]):_vm._e()]),_vm._v(" "),_c('div',{class:_vm.getOutcomeClassLive(_vm.getWinnerDetails(match).winner === 1),staticStyle:{"margin-top":"10px"}},[(match.maps && match.maps.length>1)?_c('span',[_vm._v("(")]):_vm._e(),_vm._v("\n                              "+_vm._s(_vm.getWinnerDetails(match).teamTwoScore)+"\n                              "),(match.maps && match.maps.length>1)?_c('span',[_vm._v(")")]):_vm._e()])])])])])],1)],2)],1)}),1)],1)]):_vm._e(),_vm._ssrNode(" "+((_vm.matches && _vm.matches.length==0)?("<div class=\"subtitle\" style=\"text-align:left;margin-top:20px\" data-v-756ce69e>No upcoming matches</div>"):"<!---->")+" "+((_vm.matches && _vm.matches.length!=0)?("<div class=\"subtitle\" style=\"text-align:left;margin-top:20px\" data-v-756ce69e>Upcoming Matches</div>"):"<!---->")+" "),(_vm.matches && _vm.matches.length!=0)?_vm._ssrNode("<div class=\"card\" style=\"padding:0px;\" data-v-756ce69e>","</div>",[_vm._ssrNode("<div class=\"card-content\" style=\"padding:0px\" data-v-756ce69e>","</div>",[_c('b-menu',_vm._l((_vm.matches),function(match){return _c('b-menu-list',{key:match._id,staticStyle:{"text-align":"left"}},[_c('b-menu-item',{staticStyle:{"text-align":"left","overflow":"hidden","text-overflow":"ellipsis","border-bottom-color":"#171e29","border-bottom-height":"1px","border-bottom-style":"solid"}},[_c('template',{slot:"label"},[_c('nuxt-link',{staticStyle:{"padding":"0px"},attrs:{"to":("/matches/" + (match._id) + "/" + (match.slug))}},[_c('div',{staticClass:"columns is-mobile"},[_c('div',{staticClass:"column is-8"},[_c('div',{staticStyle:{"text-align":"left"}},[_c('div',{staticStyle:{"width":"20px","height":"20px","overflow":"hidden","display":"inline-block","vertical-align":"middle"}},[_c('img',{attrs:{"src":_vm.getTeamImgUrl(match.teamOne.img),"align":"top"}})]),_vm._v(" "),_c('div',{staticStyle:{"text-align":"left","display":"inline-block","margin-left":"5px","width":"50%","white-space":"nowrap"}},[_c('b',{staticStyle:{"font-size":"14px"}},[_vm._v(_vm._s(match.teamOne.name))])])]),_vm._v(" "),_c('div',{staticStyle:{"margin-top":"10px"}},[_c('div',{staticStyle:{"width":"20px","height":"20px","overflow":"hidden","display":"inline-block","vertical-align":"middle"}},[_c('img',{attrs:{"src":_vm.getTeamImgUrl(match.teamTwo.img),"align":"top"}})]),_vm._v(" "),_c('div',{staticStyle:{"text-align":"left","display":"inline-block","margin-left":"5px","width":"50%","white-space":"nowrap"}},[_c('b',{staticStyle:{"font-size":"14px"}},[_vm._v(_vm._s(match.teamTwo.name))])])])]),_vm._v(" "),_c('div',{staticClass:"column"},[_c('div',{staticStyle:{"text-align":"right","vertical-align":"middle"}},[_c('div',{staticStyle:{"font-size":"13px","margin-top":"5px"}},[_vm._v(_vm._s(_vm.getDay(match.dateTime)))]),_vm._v(" "),_c('div',{staticStyle:{"font-size":"13px","margin-top":"10px"}},[_vm._v(_vm._s(_vm.formatDate(match.dateTime)))])])])])])],1)],2)],1)}),1)],1)]):_vm._e(),_vm._ssrNode(" "+((_vm.finishedMatches && _vm.finishedMatches.length!=0)?("<div class=\"subtitle\" style=\"text-align:left;margin-top:20px\" data-v-756ce69e>Results</div>"):"<!---->")+" "),(_vm.finishedMatches && _vm.finishedMatches.length!=0)?_vm._ssrNode("<div class=\"card\" style=\"padding:0px;\" data-v-756ce69e>","</div>",[_vm._ssrNode("<div class=\"card-content\" style=\"padding:0px;\" data-v-756ce69e>","</div>",[_c('b-menu',_vm._l((_vm.finishedMatches),function(match){return _c('b-menu-list',{key:match._id,staticStyle:{"text-align":"left"}},[_c('b-menu-item',{staticStyle:{"text-align":"left","overflow":"hidden","text-overflow":"ellipsis","border-bottom-color":"#171e29","border-bottom-height":"1px","border-bottom-style":"solid"}},[_c('template',{slot:"label"},[_c('nuxt-link',{staticStyle:{"padding":"0px"},attrs:{"to":("/matches/" + (match._id) + "/" + (match.slug))}},[_c('div',{staticClass:"columns is-mobile"},[_c('div',{staticClass:"column is-two-thirds"},[_c('div',{class:_vm.getOutcomeClass(_vm.getWinnerDetails(match).winner === 0)},[_c('div',{staticStyle:{"width":"20px","height":"20px","overflow":"hidden","display":"inline-block","vertical-align":"middle"}},[_c('img',{attrs:{"src":_vm.getTeamImgUrl(match.teamOne.img),"align":"top"}})]),_vm._v(" "),_c('div',{staticStyle:{"text-align":"left","display":"inline-block","margin-bottom":"10px","margin-left":"5px","width":"50%","white-space":"nowrap"}},[_c('b',{staticStyle:{"font-size":"14px"}},[_vm._v(_vm._s(match.teamOne.name))])])]),_vm._v(" "),_c('div',{class:_vm.getOutcomeClass(_vm.getWinnerDetails(match).winner === 1),staticStyle:{"margin-top":"5px"}},[_c('div',{staticStyle:{"width":"20px","height":"20px","overflow":"hidden","display":"inline-block","vertical-align":"middle"}},[_c('img',{attrs:{"src":_vm.getTeamImgUrl(match.teamTwo.img),"align":"top"}})]),_vm._v(" "),_c('div',{staticStyle:{"text-align":"left","display":"inline-block","margin-left":"5px","width":"50%","white-space":"nowrap"}},[_c('b',{staticStyle:{"font-size":"14px"}},[_vm._v(_vm._s(match.teamTwo.name))])])])]),_vm._v(" "),_c('div',{staticClass:"column"},[_c('div',{staticStyle:{"text-align":"right"}},[_c('div',{class:_vm.getOutcomeClass(_vm.getWinnerDetails(match).winner === 0)},[_vm._v(_vm._s(_vm.getWinnerDetails(match).teamOneScore))]),_vm._v(" "),_c('div',{class:_vm.getOutcomeClass(_vm.getWinnerDetails(match).winner === 1),staticStyle:{"margin-top":"10px"}},[_vm._v(_vm._s(_vm.getWinnerDetails(match).teamTwoScore))])])])])])],1)],2)],1)}),1)],1)]):_vm._e()],2)])])])}
var SideMatchesvue_type_template_id_756ce69e_scoped_true_staticRenderFns = []


// CONCATENATED MODULE: ./components/SideMatches/SideMatches.vue?vue&type=template&id=756ce69e&scoped=true&

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(4);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./components/SideMatches/SideMatches.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
const SideMatchesvue_type_script_lang_js_moment = __webpack_require__(8);


/* harmony default export */ var SideMatchesvue_type_script_lang_js_ = ({
  name: "sidematches",
  props: {
    type: String
  },

  data() {
    return {
      finishedMatches: [],
      liveMatches: [],
      matches: []
    };
  },

  mounted() {
    return external_axios_default.a.all([external_axios_default.a.get(undefined + `api/matches?$sort[dateTime]=1&$limit=10&$skip=0&active=true&teamsDecided=true&populatemapsonly=true`, {
      headers: {
        "content-type": "application/json"
      }
    }), external_axios_default.a.get(undefined + `api/matches?$sort[dateTime]=-1&$limit=5&$skip=0&active=false&teamsDecided=true&populatemapsonly=true`, {
      headers: {
        "content-type": "application/json"
      }
    })]).then(external_axios_default.a.spread((matches, activeMatches) => {
      let oldMatches = [];
      let liveMatches = [];
      let matchData = matches.data.data;

      for (let i = 0; i < matchData.length; i++) {
        if (SideMatchesvue_type_script_lang_js_moment(new Date()).diff(SideMatchesvue_type_script_lang_js_moment(matchData[i].dateTime)) <= 0) {
          oldMatches.push(matchData[i]);
        } else {
          liveMatches.push(matchData[i]);
        }
      }

      this.finishedMatches = activeMatches.data.data;
      this.matches = oldMatches;
      this.liveMatches = liveMatches;
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
      const utc = SideMatchesvue_type_script_lang_js_moment.utc(dateTime);
      var localDate = utc.local();
      return SideMatchesvue_type_script_lang_js_moment(localDate).format("MMM DD");
    },

    formatDate(dateTime) {
      const utc = SideMatchesvue_type_script_lang_js_moment.utc(dateTime);
      var localDate = utc.local();
      return SideMatchesvue_type_script_lang_js_moment(localDate).format("H:mm");
    },

    getTeamImgUrl(teamId) {
      return undefined + `api/uploads/teams/${teamId}`;
    },

    getLastMapScore(maps) {
      let details = {};

      for (let i = 0; i < maps.length; i++) {
        if (maps[i].active === undefined || parseInt(maps[i].teamOneScore) !== 13 && parseInt(maps[i].teamTwoScore) !== 13) {
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
      const utc = SideMatchesvue_type_script_lang_js_moment.utc(dateTime);
      var localDate = utc.local();
      return SideMatchesvue_type_script_lang_js_moment(localDate).format("MMMM DD, YYYY");
    }

  },
  components: {}
});
// CONCATENATED MODULE: ./components/SideMatches/SideMatches.vue?vue&type=script&lang=js&
 /* harmony default export */ var SideMatches_SideMatchesvue_type_script_lang_js_ = (SideMatchesvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./components/SideMatches/SideMatches.vue



function SideMatches_injectStyles (context) {
  
  var style0 = __webpack_require__(46)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var SideMatches_component = Object(componentNormalizer["a" /* default */])(
  SideMatches_SideMatchesvue_type_script_lang_js_,
  SideMatchesvue_type_template_id_756ce69e_scoped_true_render,
  SideMatchesvue_type_template_id_756ce69e_scoped_true_staticRenderFns,
  false,
  SideMatches_injectStyles,
  "756ce69e",
  "d0af553c"
  
)

/* harmony default export */ var SideMatches = (SideMatches_component.exports);
// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/default.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ var defaultvue_type_script_lang_js_ = ({
  layout: "sides",

  created() {
    //  if (process.browser) {
    // var h1 = document.createElement('div');
    //     h1.innerHTML = "";
    //     h1.setAttribute('class', 'vm-placement');
    //     h1.setAttribute('data-id', '5ed9034ba624ae2e71257f73');
    //     document.body.appendChild(h1);
    //  }
    this.$nextTick(function () {
      this.loading = false;
    }); // if (process.browser) {
    //   this.$aes.setKey("SECURE_VAL_PW");
    //   var authEnc = localStorage.getItem("auth");
    //   if (authEnc) {
    //     let auth = undefined;
    //     try {
    //       auth = JSON.parse(this.$aes.decrypt(authEnc));
    //     } catch {
    //       let encrypted = this.$aes.encrypt(authEnc);
    //       localStorage.setItem("auth", encrypted);
    //       window.location.reload();
    //     }
    //     if (auth) {
    //       this.user.username =
    //         auth.user.username.charAt(0).toUpperCase() +
    //         // auth.user.username.slice(1);
    //       this.user.id = auth.user._id;
    //       this.$axios(process.env.baseUrl + `users/${this.user.id}`, {
    //         method: "get",
    //         headers: new Headers({ "content-type": "application/json" })
    //       })
    //         .then(function(response) {
    //           return response.data;
    //         })
    //         .then(res => {
    //           auth.permissions = res.permissions;
    //           this.$aes.setKey("SECURE_VAL_PW");
    //           let encrypted = this.$aes.encrypt(JSON.stringify(auth));
    //           localStorage.setItem("auth", encrypted);
    //           this.$axios.setHeader(
    //             "Authorization",
    //             `Bearer ${auth.accessToken}`
    //           );
    //           this.notifications = res.notifications;
    //         });
    //     }
    //   }
    // }
  },

  data() {
    return {
      items: [{
        title: "Home",
        icon: "home",
        to: {
          name: "index"
        }
      }, {
        title: "Inspire",
        icon: "lightbulb",
        to: {
          name: "inspire"
        }
      }],
      user: {
        email: "",
        password: "",
        username: undefined,
        id: ""
      },
      notifications: undefined,
      playerSearchData: [],
      playerSelected: null,
      fetchingPlayer: false,
      playerName: "",
      selected: null,
      loading: true
    };
  },

  methods: {
    logout() {
      if (false) {}

      window.location.reload();
    },

    navUser(id) {
      this.$router.push({
        path: `/user/${id}`
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
          path: `/players/${player._id}`
        });
      }
    },

    onFocus(e) {
      e.stopPropagation();
    }

  },
  components: {
    navBarSearch: navBarSearch,
    SideEvents: SideEvents,
    SideForums: SideForums,
    SideMatches: SideMatches
  }
});
// CONCATENATED MODULE: ./layouts/default.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_defaultvue_type_script_lang_js_ = (defaultvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/default.vue



function default_injectStyles (context) {
  
  var style0 = __webpack_require__(48)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var default_component = Object(componentNormalizer["a" /* default */])(
  layouts_defaultvue_type_script_lang_js_,
  defaultvue_type_template_id_012d6c08_render,
  defaultvue_type_template_id_012d6c08_staticRenderFns,
  false,
  default_injectStyles,
  null,
  "54a97712"
  
)

/* harmony default export */ var layouts_default = (default_component.exports);
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./layouts/OnlyNav.vue?vue&type=template&id=5595f38e&
var OnlyNavvue_type_template_id_5595f38e_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[(!_vm.loading)?_c('b-navbar',{staticStyle:{"text-align":"left"},attrs:{"transparent":"","fixed-top":"","wrapper-class":_vm.$device.isMobile ?'':'menu-content'}},[_c('template',{slot:"brand"},[_c('b-navbar-item',{attrs:{"tag":"router-link","to":{ path: '/' }}},[_c('img',{staticStyle:{"width":"35px"},attrs:{"src":__webpack_require__(20)}})])],1),_vm._v(" "),_c('template',{staticStyle:{"color":"white"},slot:"start"},[_c('nuxt-link',{staticClass:"menu-section first-section",attrs:{"to":"/news"}},[_c('b-navbar-item',{staticStyle:{"color":"white"},attrs:{"dark":""}},[_c('b',[_vm._v("Articles")])])],1),_vm._v(" "),_c('nuxt-link',{staticClass:"menu-section",attrs:{"to":"/forums"}},[_c('b-navbar-item',{staticClass:"is-dark",staticStyle:{"color":"white"},attrs:{"dark":""}},[_c('b',[_vm._v("Forums")])])],1),_vm._v(" "),_c('nuxt-link',{staticClass:"menu-section",attrs:{"to":"/matches"}},[_c('b-navbar-item',{staticClass:"is-dark",staticStyle:{"color":"white"},attrs:{"dark":""}},[_c('b',[_vm._v("Matches")])])],1),_vm._v(" "),_c('nuxt-link',{staticClass:"menu-section",attrs:{"to":"/events"}},[_c('b-navbar-item',{staticClass:"is-dark",staticStyle:{"color":"white"},attrs:{"dark":""}},[_c('b',[_vm._v("Events")])])],1),_vm._v(" "),_c('nuxt-link',{staticClass:"menu-section",attrs:{"to":"/stats"}},[_c('b-navbar-item',{staticClass:"is-dark",staticStyle:{"color":"white"},attrs:{"dark":""}},[_c('b',[_vm._v("Standings")])])],1),_vm._v(" "),_c('nuxt-link',{staticClass:"menu-section beta",attrs:{"to":"/rankings"}},[_c('b-navbar-item',{staticClass:"is-dark",staticStyle:{"color":"white"},attrs:{"dark":""}},[_c('b',[_vm._v("Stats")])])],1),_vm._v(" "),_c('nuxt-link',{staticClass:"menu-section beta",attrs:{"to":"/mystats"}},[_c('b-navbar-item',{staticClass:"is-dark",staticStyle:{"color":"white"},attrs:{"dark":""}},[_c('b',[_vm._v("Rosters")])])],1),_vm._v(" "),_c('nuxt-link',{staticClass:"menu-section",attrs:{"to":"/about"}},[_c('b-navbar-item',{staticClass:"is-dark",staticStyle:{"color":"white"}},[_c('b',[_vm._v("About")])])],1)],1),_vm._v(" "),_c('template',{slot:"end"},[_c('b-navbar-item',{attrs:{"tag":"section"}},[_c('section',[_c('navBarSearch')],1)]),_vm._v(" "),_c('b-navbar-item',{attrs:{"tag":"div"}},[(!_vm.user.username)?_c('div',{staticClass:"buttons"},[_c('nuxt-link',{staticStyle:{"margin-right":"0.5em"},attrs:{"to":"/signup"}},[_c('a',{staticClass:"button",staticStyle:{"background-color":"#ff4653"}},[_c('strong',[_vm._v("Sign up")])])]),_vm._v(" "),_c('nuxt-link',{attrs:{"to":"/login"}},[_c('a',{staticClass:"button",staticStyle:{"background-color":"#8c67ef","border-color":"#8c67ef"}},[_vm._v("Log in")])])],1):_vm._e(),_vm._v(" "),(_vm.user.username)?_c('div',{staticClass:"buttons",staticStyle:{"cursor":"pointer"},on:{"click":function($event){return _vm.navUser(_vm.user.id)}}},[_c('p',{staticClass:"subtitle",staticStyle:{"margin-right":"10px","margin-bottom":"15px"}},[_vm._v("\n            User\n            "),(_vm.notifications && Object.keys(_vm.notifications).length!=0)?_c('span',{staticStyle:{"margin-left":"0px","font-size":"15px","vertical-align":"text-top","color":"#ff726f","font-weight":"bold"}},[_vm._v(_vm._s(Object.keys(_vm.notifications).length))]):_vm._e(),_vm._v(" |\n            "),_c('span',{staticStyle:{"cursor":"pointer","color":"#ff726f"},on:{"click":function($event){return _vm.logout()}}},[_vm._v("Logout")])])]):_vm._e()])],1)],2):_vm._e(),_vm._ssrNode(" "),_vm._ssrNode("<section>","</section>",[_vm._ssrNode("<div>","</div>",[_vm._ssrNode("<div class=\"columns is-centered ordered-mobile\">","</div>",[_vm._ssrNode("<div class=\"column\">","</div>",[_vm._ssrNode("<div>","</div>",[_c('nuxt')],1)])])])])],2)}
var OnlyNavvue_type_template_id_5595f38e_staticRenderFns = []


// CONCATENATED MODULE: ./layouts/OnlyNav.vue?vue&type=template&id=5595f38e&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./layouts/OnlyNav.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ var OnlyNavvue_type_script_lang_js_ = ({
  layout: "sides",

  created() {
    console.log("Whatsupottret"); //  if (process.browser) {
    // var h1 = document.createElement('div');
    //     h1.innerHTML = "";
    //     h1.setAttribute('class', 'vm-placement');
    //     h1.setAttribute('data-id', '5ed9034ba624ae2e71257f73');
    //     document.body.appendChild(h1);
    //  }

    this.$nextTick(function () {
      this.loading = false;
    }); // if (process.browser) {
    //   this.$aes.setKey("SECURE_VAL_PW");
    //   var authEnc = localStorage.getItem("auth");
    //   if (authEnc) {
    //     let auth = undefined;
    //     try {
    //       auth = JSON.parse(this.$aes.decrypt(authEnc));
    //     } catch {
    //       let encrypted = this.$aes.encrypt(authEnc);
    //       localStorage.setItem("auth", encrypted);
    //       window.location.reload();
    //     }
    //     if (auth) {
    //       this.user.username =
    //         auth.user.username.charAt(0).toUpperCase() +
    //         // auth.user.username.slice(1);
    //       this.user.id = auth.user._id;
    //       this.$axios(process.env.baseUrl + `users/${this.user.id}`, {
    //         method: "get",
    //         headers: new Headers({ "content-type": "application/json" })
    //       })
    //         .then(function(response) {
    //           return response.data;
    //         })
    //         .then(res => {
    //           auth.permissions = res.permissions;
    //           this.$aes.setKey("SECURE_VAL_PW");
    //           let encrypted = this.$aes.encrypt(JSON.stringify(auth));
    //           localStorage.setItem("auth", encrypted);
    //           this.$axios.setHeader(
    //             "Authorization",
    //             `Bearer ${auth.accessToken}`
    //           );
    //           this.notifications = res.notifications;
    //         });
    //     }
    //   }
    // }
  },

  data() {
    return {
      items: [{
        title: "Home",
        icon: "home",
        to: {
          name: "index"
        }
      }, {
        title: "Inspire",
        icon: "lightbulb",
        to: {
          name: "inspire"
        }
      }],
      user: {
        email: "",
        password: "",
        username: undefined,
        id: ""
      },
      notifications: undefined,
      playerSearchData: [],
      playerSelected: null,
      fetchingPlayer: false,
      playerName: "",
      selected: null,
      loading: true
    };
  },

  methods: {
    logout() {
      if (false) {}

      window.location.reload();
    },

    navUser(id) {
      this.$router.push({
        path: `/user/${id}`
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
          path: `/players/${player._id}`
        });
      }
    },

    onFocus(e) {
      e.stopPropagation();
    }

  },
  components: {
    navBarSearch: navBarSearch
  }
});
// CONCATENATED MODULE: ./layouts/OnlyNav.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_OnlyNavvue_type_script_lang_js_ = (OnlyNavvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./layouts/OnlyNav.vue



function OnlyNav_injectStyles (context) {
  
  var style0 = __webpack_require__(50)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var OnlyNav_component = Object(componentNormalizer["a" /* default */])(
  layouts_OnlyNavvue_type_script_lang_js_,
  OnlyNavvue_type_template_id_5595f38e_render,
  OnlyNavvue_type_template_id_5595f38e_staticRenderFns,
  false,
  OnlyNav_injectStyles,
  null,
  "6d1320f0"
  
)

/* harmony default export */ var OnlyNav = (OnlyNav_component.exports);
// CONCATENATED MODULE: ./.nuxt/App.js










const layouts = {
  "_adminblank": sanitizeComponent(adminblank),
  "_default": sanitizeComponent(layouts_default),
  "_navBarSearch": sanitizeComponent(navBarSearch),
  "_OnlyNav": sanitizeComponent(OnlyNav)
};
/* harmony default export */ var App = ({
  render(h, props) {
    const loadingEl = h('NuxtLoading', {
      ref: 'loading'
    });
    const layoutEl = h(this.layout || 'nuxt');
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl]);
    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll');
          });
        }

      }
    }, [templateEl]);
    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, transitionEl]);
  },

  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: '',
    nbFetching: 0
  }),

  beforeCreate() {
    external_vue_default.a.util.defineReactive(this, 'nuxt', this.$options.nuxt);
  },

  created() {
    // Add this.$nuxt in child instances
    external_vue_default.a.prototype.$nuxt = this;

    if (false) {} // Add $nuxt.error()


    this.error = this.nuxt.error; // Add $nuxt.context

    this.context = this.$options.context;
  },

  async mounted() {
    this.$loading = this.$refs.loading;
  },

  watch: {
    'nuxt.err': 'errorChanged'
  },
  computed: {
    isOffline() {
      return !this.isOnline;
    },

    isFetching() {
      return this.nbFetching > 0;
    }

  },
  methods: {
    refreshOnlineStatus() {
      if (false) {}
    },

    async refresh() {
      const pages = getMatchedComponentsInstances(this.$route);

      if (!pages.length) {
        return;
      }

      this.$loading.start();
      const promises = pages.map(page => {
        const p = []; // Old fetch

        if (page.$options.fetch && page.$options.fetch.length) {
          p.push(promisify(page.$options.fetch, this.context));
        }

        if (page.$fetch) {
          p.push(page.$fetch());
        } else {
          // Get all component instance to call $fetch
          for (const component of getChildrenComponentInstancesUsingFetch(page.$vnode.componentInstance)) {
            p.push(component.$fetch());
          }
        }

        if (page.$options.asyncData) {
          p.push(promisify(page.$options.asyncData, this.context).then(newData => {
            for (const key in newData) {
              external_vue_default.a.set(page.$data, key, newData[key]);
            }
          }));
        }

        return Promise.all(p);
      });

      try {
        await Promise.all(promises);
      } catch (error) {
        this.$loading.fail(error);
        globalHandleError(error);
        this.error(error);
      }

      this.$loading.finish();
    },

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) {
          this.$loading.fail(this.nuxt.err);
        }

        if (this.$loading.finish) {
          this.$loading.finish();
        }
      }
    },

    setLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      this.layoutName = layout;
      this.layout = layouts['_' + layout];
      return this.layout;
    },

    loadLayout(layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default';
      }

      return Promise.resolve(layouts['_' + layout]);
    }

  },
  components: {
    NuxtLoading: nuxt_loading
  }
});
// EXTERNAL MODULE: external "defu"
var external_defu_ = __webpack_require__(24);
var external_defu_default = /*#__PURE__*/__webpack_require__.n(external_defu_);

// CONCATENATED MODULE: ./.nuxt/axios.js

 // Axios.prototype cannot be modified

const axiosExtra = {
  setBaseURL(baseURL) {
    this.defaults.baseURL = baseURL;
  },

  setHeader(name, value, scopes = 'common') {
    for (let scope of Array.isArray(scopes) ? scopes : [scopes]) {
      if (!value) {
        delete this.defaults.headers[scope][name];
        return;
      }

      this.defaults.headers[scope][name] = value;
    }
  },

  setToken(token, type, scopes = 'common') {
    const value = !token ? null : (type ? type + ' ' : '') + token;
    this.setHeader('Authorization', value, scopes);
  },

  onRequest(fn) {
    this.interceptors.request.use(config => fn(config) || config);
  },

  onResponse(fn) {
    this.interceptors.response.use(response => fn(response) || response);
  },

  onRequestError(fn) {
    this.interceptors.request.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onResponseError(fn) {
    this.interceptors.response.use(undefined, error => fn(error) || Promise.reject(error));
  },

  onError(fn) {
    this.onRequestError(fn);
    this.onResponseError(fn);
  },

  create(options) {
    return createAxiosInstance(external_defu_default()(options, this.defaults));
  }

}; // Request helpers ($get, $post, ...)

for (let method of ['request', 'delete', 'get', 'head', 'options', 'post', 'put', 'patch']) {
  axiosExtra['$' + method] = function () {
    return this[method].apply(this, arguments).then(res => res && res.data);
  };
}

const extendAxiosInstance = axios => {
  for (let key in axiosExtra) {
    axios[key] = axiosExtra[key].bind(axios);
  }
};

const createAxiosInstance = axiosOptions => {
  // Create new axios instance
  const axios = external_axios_default.a.create(axiosOptions);
  axios.CancelToken = external_axios_default.a.CancelToken;
  axios.isCancel = external_axios_default.a.isCancel; // Extend axios proto

  extendAxiosInstance(axios); // Setup interceptors

  setupProgress(axios);
  return axios;
};

const setupProgress = axios => {
  if (true) {
    return;
  } // A noop loading inteterface for when $nuxt is not yet ready


  const noopLoading = {
    finish: () => {},
    start: () => {},
    fail: () => {},
    set: () => {}
  };

  const $loading = () => {
    const $nuxt = typeof window !== 'undefined' && window['$nuxt'];
    return $nuxt && $nuxt.$loading && $nuxt.$loading.set ? $nuxt.$loading : noopLoading;
  };

  let currentRequests = 0;
  axios.onRequest(config => {
    if (config && config.progress === false) {
      return;
    }

    currentRequests++;
  });
  axios.onResponse(response => {
    if (response && response.config && response.config.progress === false) {
      return;
    }

    currentRequests--;

    if (currentRequests <= 0) {
      currentRequests = 0;
      $loading().finish();
    }
  });
  axios.onError(error => {
    if (error && error.config && error.config.progress === false) {
      return;
    }

    currentRequests--;

    if (external_axios_default.a.isCancel(error)) {
      return;
    }

    $loading().fail();
    $loading().finish();
  });

  const onProgress = e => {
    if (!currentRequests) {
      return;
    }

    const progress = e.loaded * 100 / (e.total * currentRequests);
    $loading().set(Math.min(100, progress));
  };

  axios.defaults.onUploadProgress = onProgress;
  axios.defaults.onDownloadProgress = onProgress;
};

/* harmony default export */ var _nuxt_axios = ((ctx, inject) => {
  // baseURL
  const baseURL =  false ? undefined : process.env._AXIOS_BASE_URL_ || 'http://localhost:3030/'; // Create fresh objects for all default header scopes
  // Axios creates only one which is shared across SSR requests!
  // https://github.com/mzabriskie/axios/blob/master/lib/defaults.js

  const headers = {
    "common": {
      "Accept": "application/json, text/plain, */*"
    },
    "delete": {},
    "get": {},
    "head": {},
    "post": {},
    "put": {},
    "patch": {}
  };
  const axiosOptions = {
    baseURL,
    headers
  }; // Proxy SSR request headers headers

  if ( true && ctx.req && ctx.req.headers) {
    const reqHeaders = { ...ctx.req.headers
    };

    for (let h of ["accept", "host", "cf-ray", "cf-connecting-ip", "content-length", "content-md5", "content-type"]) {
      delete reqHeaders[h];
    }

    axiosOptions.headers.common = { ...reqHeaders,
      ...axiosOptions.headers.common
    };
  }

  if (true) {
    // Don't accept brotli encoding because Node can't parse it
    axiosOptions.headers.common['accept-encoding'] = 'gzip, deflate';
  }

  const axios = createAxiosInstance(axiosOptions); // Inject axios to the context as $axios

  ctx.$axios = axios;
  inject('axios', axios);
});
// CONCATENATED MODULE: ./.nuxt/nuxt-device-detect.plugin.09ef4cac.js
// these regular expressions are borrowed from below page.
// https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
// eslint-disable-next-line
const REGEX_MOBILE1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i; // eslint-disable-next-line

const REGEX_MOBILE2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

function isMobile(a) {
  return REGEX_MOBILE1.test(a) || REGEX_MOBILE2.test(a.substr(0, 4));
} // eslint-disable-next-line


const REGEX_MOBILE_OR_TABLET1 = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i; // eslint-disable-next-line

const REGEX_MOBILE_OR_TABLET2 = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;

function isMobileOrTablet(a) {
  return REGEX_MOBILE_OR_TABLET1.test(a) || REGEX_MOBILE_OR_TABLET2.test(a.substr(0, 4));
}

function isIos(a) {
  return /iPad|iPhone|iPod/.test(a);
}

function isWindows(a) {
  return /Windows/.test(a);
}

function isMacOS(a) {
  return /Mac OS X/.test(a);
}

const DEFAULT_USER_AGENT = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_2) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.39 Safari/537.36';
/* harmony default export */ var nuxt_device_detect_plugin_09ef4cac = (async function (ctx, inject) {
  let userAgent = '';

  if (typeof ctx.req !== 'undefined') {
    userAgent = ctx.req.headers['user-agent'];
  } else if (typeof navigator !== 'undefined') {
    userAgent = navigator.userAgent;
  } else {
    userAgent = DEFAULT_USER_AGENT;
  } // use default user-agent if user-agent header is not sent


  if (!userAgent) {
    userAgent = DEFAULT_USER_AGENT;
  }

  let mobile = null;
  let mobileOrTablet = null;
  let ios = null;
  let windows = false;
  let macOS = true;

  if (userAgent === 'Amazon CloudFront') {
    if (ctx.req.headers['cloudfront-is-mobile-viewer'] === 'true') {
      mobile = true;
      mobileOrTablet = true;
    }

    if (ctx.req.headers['cloudfront-is-tablet-viewer'] === 'true') {
      mobile = false;
      mobileOrTablet = true;
    }
  } else {
    mobile = isMobile(userAgent);
    mobileOrTablet = isMobileOrTablet(userAgent);
    ios = isIos(userAgent);
  }

  windows = isWindows(userAgent);
  macOS = isMacOS(userAgent);
  ctx.isMobile = mobile;
  ctx.isMobileOrTablet = mobileOrTablet;
  ctx.isTablet = !mobile && mobileOrTablet;
  ctx.isDesktop = !mobileOrTablet;
  ctx.isDesktopOrTablet = !mobile;
  ctx.isIos = ios;
  ctx.isWindows = windows;
  ctx.isMacOS = macOS;
  inject('device', {
    isMobile: mobile,
    isMobileOrTablet: mobileOrTablet,
    isTablet: !mobile && mobileOrTablet,
    isDesktop: !mobileOrTablet,
    isIos: ios,
    isWindows: windows,
    isMacOS: macOS,
    isDesktopOrTablet: !mobile
  });
});
// EXTERNAL MODULE: external "buefy"
var external_buefy_ = __webpack_require__(25);
var external_buefy_default = /*#__PURE__*/__webpack_require__.n(external_buefy_);

// CONCATENATED MODULE: ./.nuxt/buefy.js


external_vue_default.a.use(external_buefy_default.a, {
  "css": true,
  "materialDesignIcons": true,
  "materialDesignIconsHRef": "//cdn.materialdesignicons.com/5.0.45/css/materialdesignicons.min.css"
});
// EXTERNAL MODULE: ./.nuxt/empty.js
var _nuxt_empty = __webpack_require__(6);

// CONCATENATED MODULE: ./.nuxt/index.js










/* Plugins */

 // Source: .\\axios.js (mode: 'all')

 // Source: .\\nuxt-device-detect.plugin.09ef4cac.js (mode: 'all')

 // Source: .\\buefy.js (mode: 'all')

 // Source: ..\\plugins\\myplugin.js (mode: 'client')

 // Source: ..\\plugins\\ga.js (mode: 'client')

 // Source: ..\\plugins\\chart (mode: 'client')

 // Source: ..\\plugins\\jquery-bracket (mode: 'client')

 // Source: ..\\plugins\\jsoncsv (mode: 'client')
// Component: <ClientOnly>

external_vue_default.a.component(external_vue_client_only_default.a.name, external_vue_client_only_default.a); // TODO: Remove in Nuxt 3: <NoSsr>

external_vue_default.a.component(external_vue_no_ssr_default.a.name, { ...external_vue_no_ssr_default.a,

  render(h, ctx) {
    if (false) {}

    return external_vue_no_ssr_default.a.render(h, ctx);
  }

}); // Component: <NuxtChild>

external_vue_default.a.component(nuxt_child.name, nuxt_child);
external_vue_default.a.component('NChild', nuxt_child); // Component NuxtLink is imported in server.js or client.js
// Component: <Nuxt>

external_vue_default.a.component(components_nuxt.name, components_nuxt);
external_vue_default.a.use(external_vue_meta_default.a, {
  "keyName": "head",
  "attribute": "data-n-head",
  "ssrAttribute": "data-n-head-ssr",
  "tagIDKeyName": "hid"
});
const defaultTransition = {
  "name": "page",
  "mode": "out-in",
  "appear": false,
  "appearClass": "appear",
  "appearActiveClass": "appear-active",
  "appearToClass": "appear-to"
};

async function createApp(ssrContext, config = {}) {
  const router = await createRouter(ssrContext); // Create Root instance
  // here we inject the router and store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    head: {
      "title": "macvarsity",
      "script": [{
        "src": "https:\u002F\u002Fhb.vntsm.com\u002Fv3\u002Flive\u002Fad-manager.min.js",
        "type": "text\u002Fjavascript",
        "data-site-id": "5ed7746cb519801b8a4d515b",
        "data-mode": "scan",
        "async": "true",
        "data-cfasync": "false"
      }, {
        "src": "https:\u002F\u002Fcode.jquery.com\u002Fjquery-3.3.1.slim.min.js",
        "type": "text\u002Fjavascript"
      }],
      "meta": [{
        "charset": "utf-8"
      }, {
        "name": "viewport",
        "content": "width=device-width, initial-scale=1"
      }, {
        "hid": "description",
        "name": "description",
        "content": "A website that offers the most up to date news, stats, events and matches for anything Valorant related. This includes professional Valorant matches, events and more!"
      }, {
        "hid": "keywords",
        "name": "keywords",
        "content": "valorant, events, statistics, news, pro valorant, riot, operator, odin, valorantwiki, sage"
      }],
      "link": [{
        "rel": "icon",
        "type": "image\u002Fx-icon",
        "href": "\u002Flogofinal.png"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Ffonts.googleapis.com\u002Fcss2?family=Titillium+Web&display=swap"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Fuse.fontawesome.com\u002Freleases\u002Fv5.2.0\u002Fcss\u002Fall.css"
      }, {
        "rel": "stylesheet",
        "href": "https:\u002F\u002Fcdn.materialdesignicons.com\u002F2.5.94\u002Fcss\u002Fmaterialdesignicons.min.css"
      }, {
        "rel": "stylesheet",
        "type": "text\u002Fcss",
        "href": "\u002F\u002Fcdn.materialdesignicons.com\u002F5.0.45\u002Fcss\u002Fmaterialdesignicons.min.css"
      }],
      "style": []
    },
    router,
    nuxt: {
      defaultTransition,
      transitions: [defaultTransition],

      setTransitions(transitions) {
        if (!Array.isArray(transitions)) {
          transitions = [transitions];
        }

        transitions = transitions.map(transition => {
          if (!transition) {
            transition = defaultTransition;
          } else if (typeof transition === 'string') {
            transition = Object.assign({}, defaultTransition, {
              name: transition
            });
          } else {
            transition = Object.assign({}, defaultTransition, transition);
          }

          return transition;
        });
        this.$options.nuxt.transitions = transitions;
        return transitions;
      },

      err: null,
      dateErr: null,

      error(err) {
        err = err || null;
        app.context._errored = Boolean(err);
        err = err ? normalizeError(err) : null;
        let nuxt = app.nuxt; // to work with @vue/composition-api, see https://github.com/nuxt/nuxt.js/issues/6517#issuecomment-573280207

        if (this) {
          nuxt = this.nuxt || this.$options.nuxt;
        }

        nuxt.dateErr = Date.now();
        nuxt.err = err; // Used in src/server.js

        if (ssrContext) {
          ssrContext.nuxt.error = err;
        }

        return err;
      }

    },
    ...App
  };
  const next = ssrContext ? ssrContext.next : location => app.router.push(location); // Resolve route

  let route;

  if (ssrContext) {
    route = router.resolve(ssrContext.url).route;
  } else {
    const path = getLocation(router.options.base, router.options.mode);
    route = router.resolve(path).route;
  } // Set context to app.context


  await setContext(app, {
    route,
    next,
    error: app.nuxt.error.bind(app),
    payload: ssrContext ? ssrContext.payload : undefined,
    req: ssrContext ? ssrContext.req : undefined,
    res: ssrContext ? ssrContext.res : undefined,
    beforeRenderFns: ssrContext ? ssrContext.beforeRenderFns : undefined,
    ssrContext
  });

  function inject(key, value) {
    if (!key) {
      throw new Error('inject(key, value) has no key provided');
    }

    if (value === undefined) {
      throw new Error(`inject('${key}', value) has no value provided`);
    }

    key = '$' + key; // Add into app

    app[key] = value; // Add into context

    if (!app.context[key]) {
      app.context[key] = value;
    } // Check if plugin not already installed


    const installKey = '__nuxt_' + key + '_installed__';

    if (external_vue_default.a[installKey]) {
      return;
    }

    external_vue_default.a[installKey] = true; // Call Vue.use() to install the plugin into vm

    external_vue_default.a.use(() => {
      if (!Object.prototype.hasOwnProperty.call(external_vue_default.a.prototype, key)) {
        Object.defineProperty(external_vue_default.a.prototype, key, {
          get() {
            return this.$root.$options[key];
          }

        });
      }
    });
  } // Inject runtime config as $config


  inject('config', config); // Add enablePreview(previewData = {}) in context for plugins

  if (false) {} // Plugin execution


  if (typeof _nuxt_axios === 'function') {
    await _nuxt_axios(app.context, inject);
  }

  if (typeof nuxt_device_detect_plugin_09ef4cac === 'function') {
    await nuxt_device_detect_plugin_09ef4cac(app.context, inject);
  }

  if (typeof /* Cannot get final name for export "default" in "./.nuxt/buefy.js" (known exports: , known reexports: ) */ undefined === 'function') {
    await /* Cannot get final name for export "default" in "./.nuxt/buefy.js" (known exports: , known reexports: ) */ undefined(app.context, inject);
  }

  if (false) {}

  if (false) {}

  if (false) {}

  if (false) {}

  if (false) {} // Lock enablePreview in context


  if (false) {} // If server-side, wait for async component to be resolved first


  if ( true && ssrContext && ssrContext.url) {
    await new Promise((resolve, reject) => {
      router.push(ssrContext.url, resolve, () => {
        // navigated to a different route in router guard
        const unregister = router.afterEach(async (to, from, next) => {
          ssrContext.url = to.fullPath;
          app.context.route = await getRouteData(to);
          app.context.params = to.params || {};
          app.context.query = to.query || {};
          unregister();
          resolve();
        });
      });
    });
  }

  return {
    app,
    router
  };
}


// CONCATENATED MODULE: ./.nuxt/components/nuxt-link.server.js

/* harmony default export */ var nuxt_link_server = ({
  name: 'NuxtLink',
  extends: external_vue_default.a.component('RouterLink'),
  props: {
    prefetch: {
      type: Boolean,
      default: true
    },
    noPrefetch: {
      type: Boolean,
      default: false
    }
  }
});
// CONCATENATED MODULE: ./.nuxt/server.js







 // should be included after ./index.js
// Update serverPrefetch strategy

external_vue_default.a.config.optionMergeStrategies.serverPrefetch = external_vue_default.a.config.optionMergeStrategies.created; // Fetch mixin

if (!external_vue_default.a.__nuxt__fetch__mixin__) {
  external_vue_default.a.mixin(fetch_server);
  external_vue_default.a.__nuxt__fetch__mixin__ = true;
} // Component: <NuxtLink>


external_vue_default.a.component(nuxt_link_server.name, nuxt_link_server);
external_vue_default.a.component('NLink', nuxt_link_server);

if (!global.fetch) {
  global.fetch = external_node_fetch_default.a;
}

const noopApp = () => new external_vue_default.a({
  render: h => h('div')
});

function server_urlJoin() {
  return Array.prototype.slice.call(arguments).join('/').replace(/\/+/g, '/');
}

const createNext = ssrContext => opts => {
  // If static target, render on client-side
  ssrContext.redirected = opts;

  if (ssrContext.target === 'static' || !ssrContext.res) {
    ssrContext.nuxt.serverRendered = false;
    return;
  }

  opts.query = Object(external_querystring_["stringify"])(opts.query);
  opts.path = opts.path + (opts.query ? '?' + opts.query : '');
  const routerBase = '/';

  if (!opts.path.startsWith('http') && routerBase !== '/' && !opts.path.startsWith(routerBase)) {
    opts.path = server_urlJoin(routerBase, opts.path);
  } // Avoid loop redirect


  if (opts.path === ssrContext.url) {
    ssrContext.redirected = false;
    return;
  }

  ssrContext.res.writeHead(opts.status, {
    Location: opts.path
  });
  ssrContext.res.end();
}; // This exported function will be called by `bundleRenderer`.
// This is where we perform data-prefetching to determine the
// state of our application before actually rendering it.
// Since data fetching is async, this function is expected to
// return a Promise that resolves to the app instance.


/* harmony default export */ var server = __webpack_exports__["default"] = (async ssrContext => {
  // Create ssrContext.next for simulate next() of beforeEach() when wanted to redirect
  ssrContext.redirected = false;
  ssrContext.next = createNext(ssrContext); // Used for beforeNuxtRender({ Components, nuxtState })

  ssrContext.beforeRenderFns = []; // Nuxt object (window.{{globals.context}}, defaults to window.__NUXT__)

  ssrContext.nuxt = {
    layout: 'default',
    data: [],
    fetch: [],
    error: null,
    serverRendered: true,
    routePath: ''
  }; // Remove query from url is static target

  if (false) {} // Public runtime config


  ssrContext.nuxt.config = ssrContext.runtimeConfig.public; // Create the app definition and the instance (created for each request)

  const {
    app,
    router
  } = await createApp(ssrContext, { ...ssrContext.runtimeConfig.public,
    ...ssrContext.runtimeConfig.private
  });

  const _app = new external_vue_default.a(app); // Add ssr route path to nuxt context so we can account for page navigation between ssr and csr


  ssrContext.nuxt.routePath = app.context.route.path; // Add meta infos (used in renderer.js)

  ssrContext.meta = _app.$meta(); // Keep asyncData for each matched component in ssrContext (used in app/utils.js via this.$ssrContext)

  ssrContext.asyncData = {};

  const beforeRender = async () => {
    // Call beforeNuxtRender() methods
    await Promise.all(ssrContext.beforeRenderFns.map(fn => promisify(fn, {
      Components,
      nuxtState: ssrContext.nuxt
    })));
  };

  const renderErrorPage = async () => {
    // Don't server-render the page in static target
    if (ssrContext.target === 'static') {
      ssrContext.nuxt.serverRendered = false;
    } // Load layout for error page


    const layout = (nuxt_error.options || nuxt_error).layout;
    const errLayout = typeof layout === 'function' ? layout.call(nuxt_error, app.context) : layout;
    ssrContext.nuxt.layout = errLayout || 'default';
    await _app.loadLayout(errLayout);

    _app.setLayout(errLayout);

    await beforeRender();
    return _app;
  };

  const render404Page = () => {
    app.context.error({
      statusCode: 404,
      path: ssrContext.url,
      message: 'This page could not be found'
    });
    return renderErrorPage();
  }; // Components are already resolved by setContext -> getRouteData (app/utils.js)


  const Components = getMatchedComponents(router.match(ssrContext.url));
  /*
  ** Call global middleware (nuxt.config.js)
  */

  let midd = [];
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Set layout
  */


  let layout = Components.length ? Components[0].options.layout : nuxt_error.layout;

  if (typeof layout === 'function') {
    layout = layout(app.context);
  }

  await _app.loadLayout(layout);

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }

  layout = _app.setLayout(layout);
  ssrContext.nuxt.layout = _app.layoutName;
  /*
  ** Call middleware (layout + pages)
  */

  midd = [];
  layout = sanitizeComponent(layout);

  if (layout.options.middleware) {
    midd = midd.concat(layout.options.middleware);
  }

  Components.forEach(Component => {
    if (Component.options.middleware) {
      midd = midd.concat(Component.options.middleware);
    }
  });
  midd = midd.map(name => {
    if (typeof name === 'function') {
      return name;
    }

    if (typeof _nuxt_middleware[name] !== 'function') {
      app.context.error({
        statusCode: 500,
        message: 'Unknown middleware ' + name
      });
    }

    return _nuxt_middleware[name];
  });
  await middlewareSeries(midd, app.context); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  }
  /*
  ** Call .validate()
  */


  let isValid = true;

  try {
    for (const Component of Components) {
      if (typeof Component.options.validate !== 'function') {
        continue;
      }

      isValid = await Component.options.validate(app.context);

      if (!isValid) {
        break;
      }
    }
  } catch (validationError) {
    // ...If .validate() threw an error
    app.context.error({
      statusCode: validationError.statusCode || '500',
      message: validationError.message
    });
    return renderErrorPage();
  } // ...If .validate() returned false


  if (!isValid) {
    // Render a 404 error page
    return render404Page();
  } // If no Components found, returns 404


  if (!Components.length) {
    return render404Page();
  } // Call asyncData & fetch hooks on components matched by the route.


  const asyncDatas = await Promise.all(Components.map(Component => {
    const promises = []; // Call asyncData(context)

    if (Component.options.asyncData && typeof Component.options.asyncData === 'function') {
      const promise = promisify(Component.options.asyncData, app.context);
      promise.then(asyncDataResult => {
        ssrContext.asyncData[Component.cid] = asyncDataResult;
        applyAsyncData(Component);
        return asyncDataResult;
      });
      promises.push(promise);
    } else {
      promises.push(null);
    } // Call fetch(context)


    if (Component.options.fetch && Component.options.fetch.length) {
      promises.push(Component.options.fetch(app.context));
    } else {
      promises.push(null);
    }

    return Promise.all(promises);
  })); // datas are the first row of each

  ssrContext.nuxt.data = asyncDatas.map(r => r[0] || {}); // ...If there is a redirect or an error, stop the process

  if (ssrContext.redirected) {
    return noopApp();
  }

  if (ssrContext.nuxt.error) {
    return renderErrorPage();
  } // Call beforeNuxtRender methods & add store state


  await beforeRender();
  return _app;
});

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = require("vue-markdown");

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = require("v-emoji-picker");

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = require("vue-country-flag");

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = require("async");

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = require("vue-image-lightbox");

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map