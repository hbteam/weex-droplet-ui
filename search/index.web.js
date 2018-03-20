// { "framework": "Vue" }

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["npm/weex-droplet-ui/example/search/index"] = factory();
	else
		root["npm/weex-droplet-ui/example/search/index"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 180);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// this module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
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
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate
    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if (item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function (modules, mediaQuery) {
		if (typeof modules === "string") modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for (var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if (typeof id === "number") alreadyImportedModules[id] = true;
		}
		for (i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if (typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if (mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if (mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}

/***/ }),

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    'roundclose': '\uE659',
    'success': '\uE717',
    'search': '\uE7D1',
    'enter': '\uE65D',
    'back': '\uE661'
};

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.icon-font[data-v-7bfc623c] {\n    font-family: dropletUiIconfont;\n    color: #4d4d4d;\n    font-size: 0.42667rem;\n}\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-icon/index.vue?580fdcee"],"names":[],"mappings":";AAIA;IACA,+BAAA;IACA,eAAA;IACA,sBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <text class=\"icon-font\" :style=\"iconStyle\">{{Icon[name]}}</text>\n</template>\n<style scoped>\n    .icon-font {\n        font-family: dropletUiIconfont;\n        color: #4d4d4d;\n        font-size: 32px;\n    }\n</style>\n<script>\n    import Icon from './alias';\n    const dom = weex.requireModule('dom');\n\n    export default {\n        props: {\n            name: {\n                type: String,\n                default: 'success'\n            },\n            styles: {\n                type: Object,\n                default: {}\n            }\n        },\n\n        data () {\n            return {\n                iconStyle: {},\n                Icon: Icon\n            }\n        },\n\n        beforeCreate () {\n            dom.addRule('fontFace', {\n                'fontFamily': \"dropletUiIconfont\",\n                'src': \"url('http://at.alicdn.com/t/font_534309_4czzlr17zdw2vs4i.ttf')\"\n            })\n        },\n\n        created () {\n            this.setStyle();\n        },\n\n        methods: {\n            setStyle () {\n                this.iconStyle = Object.assign({}, this.styles);\n            }\n        }\n    }\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(18)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(9),
  /* template */
  __webpack_require__(16),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-7bfc623c",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-icon/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7bfc623c", Component.options)
  } else {
    hotAPI.reload("data-v-7bfc623c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 140:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(217)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(160),
  /* template */
  __webpack_require__(198),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-29d4a48c",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/example/search/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-29d4a48c", Component.options)
  } else {
    hotAPI.reload("data-v-29d4a48c", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('p', {
    staticClass: "icon-font weex-el weex-text",
    style: (_vm._processExclusiveStyle(_vm.iconStyle, 75, 'text')),
    attrs: {}
  }, [_vm._v(_vm._s(_vm.Icon[_vm.name]))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-7bfc623c", module.exports)
  }
}

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(22);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    data: function data() {
        return {
            searchContent1: '',
            searchContent2: ''
        };
    },


    methods: {},

    components: { WxSearch: _index2.default }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("46f5a80f", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bfc623c\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-7bfc623c\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 180:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(140);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
exports.default = new Vue(_index2.default);

/***/ }),

/***/ 182:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.result[data-v-29d4a48c] {\n    width: 10rem;\n    height: 0.53333rem;\n}\n.m-b-20[data-v-29d4a48c] {\n    margin-bottom: 0.26667rem;\n}\n.f32[data-v-29d4a48c] {\n    font-size: 0.42667rem;\n}\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/example/search/index.vue?5ae72a72"],"names":[],"mappings":";AA0CA;IACA,aAAA;IACA,mBAAA;CACA;AACA;IACA,0BAAA;CACA;AACA;IACA,sBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div>\n        <wx-search\n            v-model=\"searchContent1\">\n        </wx-search>\n        <div class=\"result m-b-20\">\n            <text class=\"f32\">{{searchContent1}}</text>\n        </div>\n\n        <wx-search\n            v-model=\"searchContent2\"\n            placeholder=\"请输入\"\n            :autofocus=\"true\"\n            bgColor=\"#4676FF\"\n            innerBgColor=\"#fff\"\n            cancelColor=\"#fff\">\n        </wx-search>\n        <div class=\"result m-b-20\">\n            <text class=\"f32\">{{searchContent2}}</text>\n        </div>\n    </div>\n</template>\n\n<script>\n    import WxSearch from '../../packages/wx-search/index'\n\n    export default {\n        data () {\n            return {\n                searchContent1: '',\n                searchContent2: ''\n            }\n        },\n\n        methods: {\n\n        },\n\n        components: {WxSearch}\n    }\n</script>\n<style scoped>\n    .result {\n        width: 750px;\n        height: 40px;\n    }\n    .m-b-20 {\n        margin-bottom: 20px;\n    }\n    .f32 {\n        font-size: 32px;\n    }\n</style>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 198:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('wx-search', {
    attrs: {},
    model: {
      value: (_vm.searchContent1),
      callback: function($$v) {
        _vm.searchContent1 = $$v
      },
      expression: "searchContent1"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "result m-b-20 weex-ct",
    attrs: {}
  }, [_c('p', {
    staticClass: "f32 weex-el weex-text",
    attrs: {}
  }, [_vm._v(_vm._s(_vm.searchContent1))])]), _vm._v(" "), _c('wx-search', {
    attrs: {
      "placeholder": "请输入",
      "autofocus": true,
      "bgColor": "#4676FF",
      "innerBgColor": "#fff",
      "cancelColor": "#fff"
    },
    model: {
      value: (_vm.searchContent2),
      callback: function($$v) {
        _vm.searchContent2 = $$v
      },
      expression: "searchContent2"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "result m-b-20 weex-ct",
    attrs: {}
  }, [_c('p', {
    staticClass: "f32 weex-el weex-text",
    attrs: {}
  }, [_vm._v(_vm._s(_vm.searchContent2))])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-29d4a48c", module.exports)
  }
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(6)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 217:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(182);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("c9e0e9e4", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-29d4a48c\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-29d4a48c\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 22:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(34);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxIcon = __webpack_require__(3);

var _wxIcon2 = _interopRequireDefault(_wxIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    props: {
        value: {
            type: String
        },
        autofocus: {
            type: Boolean,
            default: false
        },
        bgColor: {
            type: String,
            default: '#d9d9d9'
        },
        placeholder: {
            type: String,
            default: '搜索'
        },
        cancelColor: {
            type: String,
            default: '#4d4d4d'
        },
        innerBgColor: {
            type: String,
            default: '#fff'
        }
    },

    data: function data() {
        return {
            searchStyle: {},
            showCancel: false,
            iconSearchStyle: {
                'font-size': '32px',
                'color': '#ccc',
                'height': '33px',
                'width': '44px',
                'margin-top': '5px'
            }
        };
    },
    created: function created() {
        this.setStyle();
    },


    methods: {
        setStyle: function setStyle() {
            this.searchStyle = Object.assign({}, { 'background-color': this.bgColor });
            this.cancelStyle = Object.assign({}, { 'color': this.cancelColor });
            this.innerStyle = Object.assign({}, { 'background-color': this.innerBgColor });
        },
        input: function input(e) {
            this.$emit('input', e.value);
        },
        focus: function focus() {
            this.showCancel = true;
        },
        handleClickCancel: function handleClickCancel() {
            this.showCancel = false;
            this.$emit('input', '');
            this.$refs.searchInput.blur();
        }
    },

    mounted: function mounted() {
        this.autofocus && this.$refs.searchInput.focus();
    },


    components: { WxIcon: _wxIcon2.default }
}; //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-search[data-v-5d51c45e] {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    width: 10rem;\n    height: 1.17333rem;\n    padding-top: 0.21333rem;\n    padding-right: 0.26667rem;\n    padding-bottom: 0.21333rem;\n    padding-left: 0.26667rem;\n}\n.wx-search-inner[data-v-5d51c45e] {\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: flex;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    background-color: #fff;\n    padding-top: 0.10667rem;\n    padding-right: 0.16rem;\n    padding-bottom: 0.10667rem;\n    padding-left: 0.16rem;\n    border-radius: 0.05333rem;\n    height: 0.74667rem;\n}\n.search-input[data-v-5d51c45e] {\n    height: 0.50667rem;\n    width: 8.56rem;\n}\n.focus[data-v-5d51c45e] {\n    width: 7.22667rem;\n}\n.cancel[data-v-5d51c45e] {\n    width: 1.33333rem;\n    height: 0.74667rem;\n    padding-left: 0.26667rem;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n}\n.f32[data-v-5d51c45e] { font-size: 0.42667rem;\n}\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-search/index.vue?1e4f1a33"],"names":[],"mappings":";AAqBA;IACA,qBAAA;IAAA,sBAAA;IAAA,cAAA;IACA,+BAAA;IAAA,8BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,aAAA;IACA,mBAAA;IACA,wBAAA;IACA,0BAAA;IACA,2BAAA;IACA,yBAAA;CACA;AAEA;IACA,qBAAA;IAAA,sBAAA;IAAA,cAAA;IACA,+BAAA;IAAA,8BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,uBAAA;IACA,wBAAA;IACA,uBAAA;IACA,2BAAA;IACA,sBAAA;IACA,0BAAA;IACA,mBAAA;CACA;AAEA;IACA,mBAAA;IACA,eAAA;CACA;AAEA;IACA,kBAAA;CACA;AAEA;IACA,kBAAA;IACA,mBAAA;IACA,yBAAA;IACA,yBAAA;IAAA,gCAAA;YAAA,wBAAA;IACA,0BAAA;IAAA,4BAAA;YAAA,oBAAA;CACA;AAEA,wBAAA,sBAAA;CAAA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-search\" :style=\"searchStyle\">\n        <div class=\"wx-search-inner\" :style=\"innerStyle\">\n            <wx-icon name=\"search\" :styles=\"iconSearchStyle\"></wx-icon>\n            <input\n                class=\"search-input\"\n                type=\"text\"\n                :placeholder=\"placeholder\"\n                @input=\"input\"\n                :value=\"value\"\n                @focus=\"focus\"\n                :class=\"[showCancel ? 'focus': '']\"\n                :style=\"{'background-color': innerBgColor}\"\n                ref=\"searchInput\" />\n        </div>\n        <div class=\"cancel\" @click=\"handleClickCancel\">\n            <text class=\"f32\" :style=\"cancelStyle\" v-if=\"showCancel\">取消</text>\n        </div>\n    </div>\n</template>\n<style scoped>\n    .wx-search {\n        display: flex;\n        flex-direction: row;\n        width: 750px;\n        height: 88px;\n        padding-top: 16px;\n        padding-right: 20px;\n        padding-bottom: 16px;\n        padding-left: 20px;\n    }\n\n    .wx-search-inner {\n        display: flex;\n        flex-direction: row;\n        background-color: #fff;\n        padding-top: 8px;\n        padding-right: 12px;\n        padding-bottom: 8px;\n        padding-left: 12px;\n        border-radius: 4px;\n        height: 56px;\n    }\n\n    .search-input {\n        height: 38px;\n        width: 642px;\n    }\n\n    .focus {\n        width: 542px;\n    }\n\n    .cancel {\n        width: 100px;\n        height: 56px;\n        padding-left: 20px;\n        justify-content: center;\n        align-items: center;\n    }\n\n    .f32 { font-size: 32px; }\n</style>\n<script>\n    import WxIcon from '../wx-icon'\n\n    export default {\n        props: {\n            value: {\n                type: String,\n            },\n            autofocus: {\n                type: Boolean,\n                default: false\n            },\n            bgColor: {\n                type: String,\n                default: '#d9d9d9'\n            },\n            placeholder: {\n                type: String,\n                default: '搜索'\n            },\n            cancelColor: {\n                type: String,\n                default: '#4d4d4d'\n            },\n            innerBgColor: {\n                type: String,\n                default: '#fff'\n            }\n        },\n\n        data () {\n            return {\n                searchStyle: {},\n                showCancel: false,\n                iconSearchStyle: {\n                    'font-size': '32px',\n                    'color': '#ccc',\n                    'height': '33px',\n                    'width': '44px',\n                    'margin-top': '5px'\n                }\n            }\n        },\n\n        created () {\n            this.setStyle();\n        },\n\n        methods: {\n            setStyle() {\n                this.searchStyle = Object.assign({}, {'background-color': this.bgColor});\n                this.cancelStyle = Object.assign({}, {'color': this.cancelColor});\n                this.innerStyle = Object.assign({}, {'background-color': this.innerBgColor});\n            },\n\n            input (e) {\n                this.$emit('input', e.value)\n            },\n\n            focus () {\n                this.showCancel = true;\n            },\n\n            handleClickCancel () {\n                this.showCancel = false;\n                this.$emit('input', '');\n                this.$refs.searchInput.blur();\n            }\n        },\n\n        mounted () {\n            this.autofocus && this.$refs.searchInput.focus();\n        },\n\n        components: { WxIcon }\n    }\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(14);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(41)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(26),
  /* template */
  __webpack_require__(37),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-5d51c45e",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-search/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5d51c45e", Component.options)
  } else {
    hotAPI.reload("data-v-5d51c45e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wx-search weex-ct",
    style: (_vm._px2rem(_vm.searchStyle, 75)),
    attrs: {}
  }, [_c('div', {
    staticClass: "wx-search-inner weex-ct",
    style: (_vm._px2rem(_vm.innerStyle, 75)),
    attrs: {}
  }, [_c('wx-icon', {
    attrs: {
      "name": "search",
      "styles": _vm.iconSearchStyle
    }
  }), _vm._v(" "), _c('input', {
    ref: "searchInput",
    staticClass: "search-input",
    class: [_vm.showCancel ? 'focus' : ''],
    style: ({
      'background-color': _vm.innerBgColor
    }),
    attrs: {
      "type": "text",
      "placeholder": _vm.placeholder,
      "data-evt-input": "",
      "data-evt-focus": ""
    },
    domProps: {
      "value": _vm.value
    },
    on: {
      "input": function($event) {
        $event.stopPropagation();
        _vm.input($event)
      },
      "focus": function($event) {
        $event.stopPropagation();
        _vm.focus($event)
      }
    },
    nativeOn: {
      "input": function($event) {
        $event.stopPropagation();
        _vm.input($event)
      },
      "focus": function($event) {
        $event.stopPropagation();
        _vm.focus($event)
      }
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "cancel weex-ct",
    attrs: {
      "data-evt-click": ""
    },
    on: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        _vm.handleClickCancel($event)
      }
    },
    nativeOn: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        _vm.handleClickCancel($event)
      }
    }
  }, [(_vm.showCancel) ? _c('p', {
    staticClass: "f32 weex-el weex-text",
    style: (_vm._processExclusiveStyle(_vm.cancelStyle, 75, 'text')),
    attrs: {}
  }, [_vm._v("取消")]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-5d51c45e", module.exports)
  }
}

/***/ }),

/***/ 41:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("e4f88512", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5d51c45e\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-5d51c45e\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] });
    } else {
      newStyles[id].parts.push(part);
    }
  }
  return styles;
};

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _alias = __webpack_require__(10);

var _alias2 = _interopRequireDefault(_alias);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dom = weex.requireModule('dom'); //
//
//
//
//
//
//
//
//
//

exports.default = {
    props: {
        name: {
            type: String,
            default: 'success'
        },
        styles: {
            type: Object,
            default: {}
        }
    },

    data: function data() {
        return {
            iconStyle: {},
            Icon: _alias2.default
        };
    },
    beforeCreate: function beforeCreate() {
        dom.addRule('fontFace', {
            'fontFamily': "dropletUiIconfont",
            'src': "url('http://at.alicdn.com/t/font_534309_4czzlr17zdw2vs4i.ttf')"
        });
    },
    created: function created() {
        this.setStyle();
    },


    methods: {
        setStyle: function setStyle() {
            this.iconStyle = Object.assign({}, this.styles);
        }
    }
};

/***/ })

/******/ });
});
//# sourceMappingURL=index.web.js.map