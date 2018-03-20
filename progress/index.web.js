// { "framework": "Vue" }

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["npm/weex-droplet-ui/example/progress/index"] = factory();
	else
		root["npm/weex-droplet-ui/example/progress/index"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 176);
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

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-button {\n    background-color: #4676FF;\n    /*box-shadow: 0 2px 8px 0 rgba(70,118,255,0.60);*/\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n}\n.wx-text {\n    color: #ffffff;\n    font-size: 0.42667rem;\n}\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-button/index.vue?4b49ffdc"],"names":[],"mappings":";AAQA;IACA,0BAAA;IACA,kDAAA;IACA,0BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,yBAAA;IAAA,gCAAA;YAAA,wBAAA;CACA;AACA;IACA,eAAA;IACA,sBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-button\" @click=\"handleClick\" :style=\"buttonStyles\">\n        <text class=\"wx-text\" :style=\"textStyles\">\n            <slot></slot>\n        </text>\n    </div>\n</template>\n<style>\n    .wx-button {\n        background-color: #4676FF;\n        /*box-shadow: 0 2px 8px 0 rgba(70,118,255,0.60);*/\n        align-items: center;\n        justify-content: center;\n    }\n    .wx-text {\n        color: #ffffff;\n        font-size: 32px;\n    }\n</style>\n<script type=\"text/javascript\">\n    export default {\n        props: {\n            width: {\n                type: String,\n                default: '670px'\n            },\n            height: {\n                type: String,\n                default: '90px'\n            },\n            borderRadius: {\n                type: String,\n                default: '12px'\n            },\n            disabled: {\n                type: Boolean,\n                default: false\n            },\n            styles: {\n                type: Object,\n                default: function () {\n                    return {}\n                }\n            },\n            textColor: {\n                type: String,\n                default: '#ffffff'\n            },\n            textFontSize: {\n                type: String,\n                default: '36px'\n            }\n        },\n        data () {\n            return {\n                buttonStyles: {},\n                textStyles: {},\n            }\n        },\n        created () {\n             this.setStyle();\n        },\n        watch: {\n          'disabled': function () {\n              if(this.disabled){\n                  this.buttonStyles['background-color'] = 'rgba(0, 0, 0, 0.1)'\n              }else{\n                  this.buttonStyles['background-color'] = '#4676FF'\n              }\n          }\n        },\n        methods: {\n            setStyle () {\n                const baseCss = {\n                    height: this.height,\n                    width: this.width,\n                    'border-radius': this.borderRadius,\n                };\n                let style = Object.assign({}, baseCss, this.styles);\n                this.buttonStyles = style;\n                if(this.disabled){\n                    this.buttonStyles['background-color'] = 'rgba(0, 0, 0, 0.1)'\n                }\n                this.textStyles = {\n                    color: this.textColor,\n                    fontSize: this.textFontSize\n                };\n            },\n\n            handleClick (e) {\n                if (this.disabled) return;\n                this.$emit('wxClick', e);\n            },\n        }\n    }\n</script>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(17)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(8),
  /* template */
  __webpack_require__(15),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-button/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-22ec0a4a", Component.options)
  } else {
    hotAPI.reload("data-v-22ec0a4a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 136:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(223)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(156),
  /* template */
  __webpack_require__(204),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-42519091",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/example/progress/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-42519091", Component.options)
  } else {
    hotAPI.reload("data-v-42519091", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wx-button weex-ct",
    style: (_vm._px2rem(_vm.buttonStyles, 75)),
    attrs: {
      "data-evt-click": ""
    },
    on: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        _vm.handleClick($event)
      }
    },
    nativeOn: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        _vm.handleClick($event)
      }
    }
  }, [_c('p', {
    staticClass: "wx-text weex-el weex-text",
    style: (_vm._processExclusiveStyle(_vm.textStyles, 75, 'text')),
    attrs: {}
  }, [_vm._t("default", null, {})], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-22ec0a4a", module.exports)
  }
}

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(21);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(7);

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
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
    data: function data() {
        return {};
    },

    components: {
        WxProgress: _index2.default,
        WxButton: _index4.default
    },
    methods: {}
};

/***/ }),

/***/ 17:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(11);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("64976848", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-22ec0a4a\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-22ec0a4a\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 176:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(136);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
exports.default = new Vue(_index2.default);

/***/ }),

/***/ 188:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.progress[data-v-42519091] {\n    margin-top: 0.8rem;\n}\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/example/progress/index.vue?71d01d73"],"names":[],"mappings":";AAyCA;IACA,mBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div>\n        <wx-progress \n            :outerStyle=\"{'background-color': '#f5f5f5'}\"\n            :innerStyle=\"{'background-color': '#f5222d','border-top-right-radius': '40px','border-bottom-right-radius': '40px'}\"\n            class=\"progress\" \n            :animation=\"true\" \n            :percent=\"100\">\n        </wx-progress>\n        <wx-progress \n            :outerStyle=\"{'background-color': '#f5f5f5'}\"\n            :innerStyle=\"{'background-color': '#1890ff','border-top-right-radius': '40px','border-bottom-right-radius': '40px'}\"\n            class=\"progress\" \n            :animation=\"true\" \n            :percent=\"90\">\n        </wx-progress>\n        <wx-progress class=\"progress\" :animation=\"true\" :percent=\"80\"></wx-progress>\n        <wx-progress class=\"progress\" :animation=\"true\" :percent=\"70\"></wx-progress>\n        <wx-progress class=\"progress\" :animation=\"true\" :percent=\"60\"></wx-progress>\n    </div>\n</template>\n\n<script>\n    import WxProgress from '../../packages/wx-progress/index'\n    import WxButton from '../../packages/wx-button/index'\n\n    export default {\n        data () {\n            return {\n                \n            }\n        },\n        components: {\n            WxProgress,\n            WxButton\n        },\n        methods: {\n        }\n    }\n</script>\n<style type=\"text/css\" scoped>\n    .progress {\n        margin-top: 60px;\n    }\n</style>\n"],"sourceRoot":""}]);

// exports


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

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('wx-progress', {
    staticClass: "progress",
    attrs: {
      "outerStyle": {
        'background-color': '#f5f5f5'
      },
      "innerStyle": {
        'background-color': '#f5222d',
        'border-top-right-radius': '40px',
        'border-bottom-right-radius': '40px'
      },
      "animation": true,
      "percent": 100
    }
  }), _vm._v(" "), _c('wx-progress', {
    staticClass: "progress",
    attrs: {
      "outerStyle": {
        'background-color': '#f5f5f5'
      },
      "innerStyle": {
        'background-color': '#1890ff',
        'border-top-right-radius': '40px',
        'border-bottom-right-radius': '40px'
      },
      "animation": true,
      "percent": 90
    }
  }), _vm._v(" "), _c('wx-progress', {
    staticClass: "progress",
    attrs: {
      "animation": true,
      "percent": 80
    }
  }), _vm._v(" "), _c('wx-progress', {
    staticClass: "progress",
    attrs: {
      "animation": true,
      "percent": 70
    }
  }), _vm._v(" "), _c('wx-progress', {
    staticClass: "progress",
    attrs: {
      "animation": true,
      "percent": 60
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-42519091", module.exports)
  }
}

/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(33);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 223:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(188);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("1a34558c", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42519091\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-42519091\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 25:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var animation = weex.requireModule('animation');

exports.default = {
    props: {
        percent: {
            type: Number,
            default: 0
        },
        width: {
            type: String,
            default: '750px'
        },
        height: {
            type: String,
            default: '40px'
        },
        animation: {
            type: Boolean,
            default: true
        },
        innerStyle: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        outerStyle: {
            type: Object,
            default: function _default() {
                return {};
            }
        }
    },
    data: function data() {
        return {
            progress: '',
            _outerStyle: {},
            _innerStyle: {}
        };
    },
    created: function created() {
        this.initStyle();
        this.progress = this.getProgress();
        if (!this.animation) {
            this.defaultProgress(this.progress);
        }
    },
    mounted: function mounted() {
        if (this.animation) {
            this.animationProgress(this.progress);
        }
    },


    methods: {
        initStyle: function initStyle() {
            var base = {
                width: this.width,
                height: this.height
            };
            this._outerStyle = Object.assign({}, this.outerStyle, base);
            base.left = '-' + this.width;
            this._innerStyle = Object.assign({}, this.innerStyle, base);
        },


        /**
         * 计算百分比对应的实际进度
         * @return {[type]} [description]
         */
        getProgress: function getProgress() {
            var width = Number(this._outerStyle.width.replace('px', ''));
            return width * (this.percent / 100) + 'px';
        },
        defaultProgress: function defaultProgress(progress) {
            this._innerStyle.width = progress;
            this._innerStyle.left = '0px';
        },
        animationProgress: function animationProgress(progress) {
            var el = this.$refs.progressBar;
            animation.transition(el, {
                styles: {
                    transform: 'translateX(' + progress + ')',
                    transformOrigin: 'center center'
                },
                duration: 1000,
                timingFunction: 'ease-out',
                needLayout: false,
                delay: 0 //ms
            });
        }
    },

    watch: {
        percent: function percent() {
            this.animationProgress(this.getProgress());
        }
    }
};

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-progress[data-v-131acc96] {\n    background-color: #1890ff;\n    position: relative;\n    overflow: hidden;\n}\n.progress-bar[data-v-131acc96] {\n    background-color: #52c41a;\n    position: absolute;\n    top: 0;\n    z-index: 10;\n}\n\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-progress/index.vue?7b867c78"],"names":[],"mappings":";AAMA;IACA,0BAAA;IACA,mBAAA;IACA,iBAAA;CACA;AAEA;IACA,0BAAA;IACA,mBAAA;IACA,OAAA;IACA,YAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-progress\" :style=\"_outerStyle\">\n        <text ref=\"progressBar\" class=\"progress-bar\" :style=\"_innerStyle\"></text>\n    </div>\n</template>\n<style scoped>\n    .wx-progress {\n        background-color: #1890ff;\n        position: relative;\n        overflow: hidden;\n    }\n\n    .progress-bar {\n        background-color: #52c41a;\n        position: absolute;\n        top: 0;\n        z-index: 10;\n    }\n\n</style>\n<script>\n    const animation = weex.requireModule('animation');\n\n    export default {\n        props: {\n            percent: {\n                type: Number,\n                default: 0\n            },\n            width: {\n                type: String,\n                default: '750px'\n            },\n            height: {\n                type: String,\n                default: '40px'\n            },\n            animation: {\n                type: Boolean,\n                default: true\n            },\n            innerStyle: {\n                type: Object,\n                default: function () {\n                    return {}\n                }\n            },\n            outerStyle: {\n                type: Object,\n                default: function () {\n                    return {}\n                }\n            },\n        },\n        data(){\n            return {\n                progress: '',\n                _outerStyle: {},\n                _innerStyle: {},\n            }\n        },\n\n        created () {\n            this.initStyle();\n            this.progress = this.getProgress();\n            if (!this.animation) {\n                this.defaultProgress(this.progress);\n            } \n        },\n\n        mounted () {\n            if (this.animation) {\n                this.animationProgress(this.progress);\n            }\n        },\n\n        methods: {\n\n            initStyle () {\n                let base = {\n                    width: this.width, \n                    height: this.height,\n                };\n                this._outerStyle = Object.assign({}, this.outerStyle, base);\n                base.left = '-' + this.width;\n                this._innerStyle = Object.assign({}, this.innerStyle, base);\n            },\n\n            /**\n             * 计算百分比对应的实际进度\n             * @return {[type]} [description]\n             */\n            getProgress () {\n                const width = Number(this._outerStyle.width.replace('px', ''));\n                return width * (this.percent / 100) + 'px';\n            },\n\n            defaultProgress (progress) {\n                this._innerStyle.width =  progress;\n                this._innerStyle.left =  '0px';\n            },\n\n            animationProgress (progress) {\n                let el = this.$refs.progressBar;\n                animation.transition(el, {\n                    styles: {\n                        transform: `translateX(${progress})`,\n                        transformOrigin: 'center center'\n                    },\n                    duration: 1000,\n                    timingFunction: 'ease-out',\n                    needLayout: false,\n                    delay: 0 //ms\n                });\n            }\n        },\n\n        watch: {\n            percent () {\n                this.animationProgress(this.getProgress());\n            }\n        }\n    }\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(40)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(36),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-131acc96",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-progress/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-131acc96", Component.options)
  } else {
    hotAPI.reload("data-v-131acc96", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wx-progress weex-ct",
    style: (_vm._px2rem(_vm._outerStyle, 75)),
    attrs: {}
  }, [_c('p', {
    ref: "progressBar",
    staticClass: "progress-bar weex-el weex-text",
    style: (_vm._processExclusiveStyle(_vm._innerStyle, 75, 'text')),
    attrs: {}
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-131acc96", module.exports)
  }
}

/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(28);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("772247d8", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-131acc96\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-131acc96\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
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

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(13);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//
//
//
//
//
//
//
//
//
//
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
        width: {
            type: String,
            default: '670px'
        },
        height: {
            type: String,
            default: '90px'
        },
        borderRadius: {
            type: String,
            default: '12px'
        },
        disabled: {
            type: Boolean,
            default: false
        },
        styles: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        textColor: {
            type: String,
            default: '#ffffff'
        },
        textFontSize: {
            type: String,
            default: '36px'
        }
    },
    data: function data() {
        return {
            buttonStyles: {},
            textStyles: {}
        };
    },
    created: function created() {
        this.setStyle();
    },

    watch: {
        'disabled': function disabled() {
            if (this.disabled) {
                this.buttonStyles['background-color'] = 'rgba(0, 0, 0, 0.1)';
            } else {
                this.buttonStyles['background-color'] = '#4676FF';
            }
        }
    },
    methods: {
        setStyle: function setStyle() {
            var baseCss = {
                height: this.height,
                width: this.width,
                'border-radius': this.borderRadius
            };
            var style = Object.assign({}, baseCss, this.styles);
            this.buttonStyles = style;
            if (this.disabled) {
                this.buttonStyles['background-color'] = 'rgba(0, 0, 0, 0.1)';
            }
            this.textStyles = {
                color: this.textColor,
                fontSize: this.textFontSize
            };
        },
        handleClick: function handleClick(e) {
            if (this.disabled) return;
            this.$emit('wxClick', e);
        }
    }
};

/***/ })

/******/ });
});
//# sourceMappingURL=index.web.js.map