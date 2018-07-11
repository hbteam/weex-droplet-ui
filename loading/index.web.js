// { "framework": "Vue" }

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["npm/weex-droplet-ui/example/loading/index"] = factory();
	else
		root["npm/weex-droplet-ui/example/loading/index"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 200);
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


// promise添加finally
var promiseFinallyPolyfill = function () {
    if (Promise.prototype.finally) return;
    Object.defineProperty(Promise.prototype, 'finally', {
        configurable: true,
        writable: true,
        value: function value(callback) {
            var P = this.constructor;
            return this.then(function (value) {
                return P.resolve(callback()).then(function () {
                    return value;
                });
            }, function (reason) {
                return P.resolve(callback()).then(function () {
                    throw reason;
                });
            });
        }
    });
}();

/***/ }),

/***/ 12:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-button {\n    background-color: #4676FF;\n    /*box-shadow: 0 2px 8px 0 rgba(70,118,255,0.60);*/\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n}\n.wx-text {\n    color: #ffffff;\n    font-size: 0.42667rem;\n}\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-button/index.vue?69f0dfa6"],"names":[],"mappings":";AAQA;IACA,0BAAA;IACA,kDAAA;IACA,0BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,yBAAA;IAAA,gCAAA;YAAA,wBAAA;CACA;AACA;IACA,eAAA;IACA,sBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-button\" @click=\"handleClick\" :style=\"buttonStyles\">\n        <text class=\"wx-text\" :style=\"textStyles\">\n            <slot></slot>\n        </text>\n    </div>\n</template>\n<style>\n    .wx-button {\n        background-color: #4676FF;\n        /*box-shadow: 0 2px 8px 0 rgba(70,118,255,0.60);*/\n        align-items: center;\n        justify-content: center;\n    }\n    .wx-text {\n        color: #ffffff;\n        font-size: 32px;\n    }\n</style>\n<script type=\"text/javascript\">\n    import '../utils/finally';\n    import mixins from '../utils/mixins';\n\n    export default {\n        mixins:[mixins],\n        props: {\n            width: {\n                type: String,\n                default: '670px'\n            },\n            height: {\n                type: String,\n                default: '90px'\n            },\n            borderRadius: {\n                type: String,\n                default: '12px'\n            },\n            disabled: {\n                type: Boolean,\n                default: false\n            },\n            disableOnPromise: {\n                type: Function\n            },\n            styles: {\n                type: Object,\n                default: function () {\n                    return {}\n                }\n            },\n            disabledBgColor: {\n                type: String,\n                default: 'rgba(0, 0, 0, 0.1)'\n            },\n            textColor: {\n                type: String,\n                default: '#ffffff'\n            },\n            textFontSize: {\n                type: String,\n                default: '32px'\n            }\n        },\n        data () {\n            return {\n                buttonStyles: {},\n                textStyles: {},\n                promiseDisabled: false,\n                defualtBgColor: '#4676FF',\n            }\n        },\n        created () {\n            this.promiseDisabled = this.disabled;\n            this.setStyle();\n        },\n        watch: {\n            'disabled': function () {\n                this.btnStyle(this.disabled);\n            }\n        },\n        methods: {\n            setStyle () {\n                const baseCss = {\n                    height: this.height,\n                    width: this.width,\n                    'border-radius': this.borderRadius,\n                    'background-color': this.defualtBgColor\n                };\n                let style = Object.assign({}, baseCss, this.styles);\n                this.buttonStyles = style;\n                this.defualtBgColor = this.buttonStyles['background-color'];\n                if(this.disabled){\n                    this.buttonStyles['background-color'] = this.disabledBgColor\n                }\n                this.textStyles = {\n                    color: this.textColor,\n                    fontSize: this.textFontSize\n                };\n            },\n\n            handleClick (e) {\n                this.preventDefault(e);\n                if (this.disabled || this.promiseDisabled) return;\n                if (this.disableOnPromise) {\n                    const _promise = this.disableOnPromise();\n                    this.disablePromise(_promise);\n                } else {\n                    this.$emit('wxClick', e);\n                }\n                \n            },\n\n            disablePromise (_promise) {\n                this.btnStyle(true)\n                _promise.finally(() => {\n                    this.btnStyle(false);\n                });\n            },\n\n            btnStyle (disabled) {\n                this.promiseDisabled = disabled;\n                if(disabled){\n                    this.buttonStyles['background-color'] = this.disabledBgColor\n                }else{\n                    this.buttonStyles['background-color'] = this.defualtBgColor;\n                }\n            },\n        }\n    }\n</script>"],"sourceRoot":""}]);

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
  __webpack_require__(8),
  /* template */
  __webpack_require__(16),
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

/***/ 154:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(260)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(176),
  /* template */
  __webpack_require__(236),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/example/loading/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-28615cae", Component.options)
  } else {
    hotAPI.reload("data-v-28615cae", Component.options)
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
  return _c('div', {
    staticClass: "wx-button weex-ct",
    style: (_vm._px2rem(_vm.buttonStyles, 75)),
    attrs: {
      "data-evt-click": ""
    },
    on: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.handleClick($event)
      }
    },
    nativeOn: {
      "weex$tap": function($event) {
        $event.stopPropagation();
        return _vm.handleClick($event)
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

/***/ 176:
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

exports.default = {
    data: function data() {
        return {
            visible: false
        };
    },

    components: { WxLoading: _index2.default, WxButton: _index4.default },
    methods: {
        openLoading: function openLoading() {
            var _this = this;

            this.visible = true;
            setTimeout(function () {
                _this.visible = false;
            }, 2000);
        }
    }
};

/***/ }),

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(12);
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

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(154);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
exports.default = new Vue(_index2.default);

/***/ }),

/***/ 21:
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

/***/ 212:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.wx-demo {\n    margin-left: 0.4rem;\n    margin-top: 0.8rem;\n}\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/example/loading/index.vue?0d0edfc4"],"names":[],"mappings":";AAQA;IACA,oBAAA;IACA,mBAAA;CACA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"wx-demo\">\n        <wx-button width=\"690px\" class=\"button\" @wxClick=\"openLoading\">打开Loading</wx-button>\n        <wx-loading opacity=\"0.6\" :visible=\"visible\"></wx-loading>\n    </div>\n</template>\n\n<style type=\"text/css\">\n    .wx-demo {\n        margin-left: 30px;\n        margin-top: 60px;\n    }\n</style>\n\n<script>\n    import WxLoading from '../../packages/wx-loading/index'\n    import WxButton from '../../packages/wx-button/index'\n\n    export default {\n        data () {\n            return {\n                visible: false\n            }\n        },\n        components: {WxLoading, WxButton},\n        methods: {\n            openLoading () {\n                this.visible = true\n                setTimeout(() => {\n                    this.visible = false\n                }, 2000)\n            }\n        }\n    }\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 236:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "wx-demo weex-ct",
    attrs: {}
  }, [_c('wx-button', {
    staticClass: "button",
    attrs: {
      "width": "690px",
      "data-evt-wxClick": ""
    },
    on: {
      "wxClick": _vm.openLoading
    },
    nativeOn: {
      "wxClick": _vm.openLoading
    }
  }, [_vm._v("打开Loading")]), _vm._v(" "), _c('wx-loading', {
    attrs: {
      "opacity": "0.6",
      "visible": _vm.visible
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-28615cae", module.exports)
  }
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
//
//
//
//
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
        visible: {
            type: Boolean,
            default: false
        },
        top: {
            type: String
        },
        opacity: {
            type: String
        },
        url: {
            type: String,
            default: 'https://p285sfed1.bkt.clouddn.com/loading.gif'
        }
    },
    data: function data() {
        return {
            style: {
                top: '0px',
                'background-color': 'rgba(0,0,0,0.6)'
            }
        };
    },
    created: function created() {
        if (this.top !== undefined) {
            this.style.top = this.top;
        }
        if (this.opacity !== undefined) {
            this.style['background-color'] = 'rgba(0,0,0,' + this.opacity + ')';
        }
    }
};

/***/ }),

/***/ 260:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(212);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("8c6a6d5a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-28615cae\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-28615cae\",\"scoped\":false,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var width = weex.config.env.deviceWidth;
var height = weex.config.env.deviceHeight;
var platform = weex.config.env.platform.toLowerCase();
var isWeb = platform === 'web';
var appName = weex.config.env.appName;

var mixins = {
    methods: {
        getPageHeight: function getPageHeight() {
            if (platform === 'android') {
                return 750 / width * height;
            }
            return height;
        },
        preventDefault: function preventDefault(e) {
            e.preventDefault && e.preventDefault();
            e.stopPropagation && e.stopPropagation();
        }
    }
};

exports.default = mixins;

/***/ }),

/***/ 32:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(1)(true);
// imports


// module
exports.push([module.i, "\n.loading[data-v-712e0c09] {\n    position: fixed;\n    left: 0;\n    bottom: 0;\n    width: 10rem;\n    -webkit-box-orient: horizontal;\n    -webkit-box-direction: normal;\n    -webkit-flex-direction: row;\n            flex-direction: row;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n}\n.loading-pane[data-v-712e0c09] {\n    height: 1.86667rem;\n    width: 1.86667rem;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n            align-items: center;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n            justify-content: center;\n    background-color: rgba(0, 0, 0, 0.8);\n    margin-top: 4rem;\n    border-radius: 0.26667rem;\n}\n.icon-loading[data-v-712e0c09] {\n    width: 1.12rem;\n    height: 1.12rem;\n}\n", "", {"version":3,"sources":["/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-loading/index.vue?6c95140b"],"names":[],"mappings":";AAQA;IACA,gBAAA;IACA,QAAA;IACA,UAAA;IACA,aAAA;IACA,+BAAA;IAAA,8BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,yBAAA;IAAA,gCAAA;YAAA,wBAAA;CACA;AAEA;IACA,mBAAA;IACA,kBAAA;IACA,0BAAA;IAAA,4BAAA;YAAA,oBAAA;IACA,yBAAA;IAAA,gCAAA;YAAA,wBAAA;IACA,qCAAA;IACA,iBAAA;IACA,0BAAA;CACA;AAEA;IACA,eAAA;IACA,gBAAA;CAEA","file":"index.vue","sourcesContent":["<template>\n    <div class=\"loading\" v-if=\"visible\" :style=\"style\">\n        <div class=\"loading-pane\">\n            <image class=\"icon-loading\" :src=\"url\" />\n        </div>\n    </div>\n</template>\n<style scoped>\n    .loading {\n        position: fixed;\n        left: 0;\n        bottom: 0;\n        width: 750px;\n        flex-direction: row;\n        justify-content: center;\n    }\n\n    .loading-pane {\n        height: 140px;\n        width: 140px;\n        align-items: center;\n        justify-content: center;\n        background-color: rgba(0, 0, 0, 0.8);\n        margin-top: 300px;\n        border-radius: 20px;\n    }\n\n    .icon-loading {\n        width: 84px;\n        height: 84px;\n\n    }\n</style>\n<script>\n    export default {\n        props: {\n            visible: {\n                type: Boolean,\n                default: false\n            },\n            top: {\n                type: String\n            },\n            opacity: {\n                type: String\n            },\n            url: {\n                type: String,\n                default: 'https://p285sfed1.bkt.clouddn.com/loading.gif'\n            }\n        },\n        data(){\n            return {\n                style: {\n                    top:'0px',\n                    'background-color': `rgba(0,0,0,0.6)`\n                }\n            }\n        },\n        created(){\n            if(this.top !== undefined){\n                this.style.top = this.top\n            }\n            if(this.opacity !== undefined){\n                this.style['background-color'] = `rgba(0,0,0,${this.opacity})`\n            }\n        }\n    }\n</script>\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(44)
}
var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(25),
  /* template */
  __webpack_require__(40),
  /* styles */
  injectStyle,
  /* scopeId */
  "data-v-712e0c09",
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-loading/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-712e0c09", Component.options)
  } else {
    hotAPI.reload("data-v-712e0c09", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 40:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.visible) ? _c('div', {
    staticClass: "loading weex-ct",
    style: (_vm._px2rem(_vm.style, 75)),
    attrs: {}
  }, [_c('div', {
    staticClass: "loading-pane weex-ct",
    attrs: {}
  }, [_c('figure', {
    staticClass: "icon-loading weex-el weex-img",
    staticStyle: {
      "background-size": "100%100%"
    },
    attrs: {
      "src": _vm.url,
      "data-img-src": _vm.url
    }
  })])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-712e0c09", module.exports)
  }
}

/***/ }),

/***/ 44:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(32);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(2)("7f676e7a", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-712e0c09\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue", function() {
     var newContent = require("!!../../node_modules/css-loader/index.js?sourceMap!../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-712e0c09\",\"scoped\":true,\"hasInlineConfig\":true}!../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./index.vue");
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

var _index = __webpack_require__(14);

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

__webpack_require__(10);

var _mixins = __webpack_require__(3);

var _mixins2 = _interopRequireDefault(_mixins);

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

exports.default = {
    mixins: [_mixins2.default],
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
        disableOnPromise: {
            type: Function
        },
        styles: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        disabledBgColor: {
            type: String,
            default: 'rgba(0, 0, 0, 0.1)'
        },
        textColor: {
            type: String,
            default: '#ffffff'
        },
        textFontSize: {
            type: String,
            default: '32px'
        }
    },
    data: function data() {
        return {
            buttonStyles: {},
            textStyles: {},
            promiseDisabled: false,
            defualtBgColor: '#4676FF'
        };
    },
    created: function created() {
        this.promiseDisabled = this.disabled;
        this.setStyle();
    },

    watch: {
        'disabled': function disabled() {
            this.btnStyle(this.disabled);
        }
    },
    methods: {
        setStyle: function setStyle() {
            var baseCss = {
                height: this.height,
                width: this.width,
                'border-radius': this.borderRadius,
                'background-color': this.defualtBgColor
            };
            var style = Object.assign({}, baseCss, this.styles);
            this.buttonStyles = style;
            this.defualtBgColor = this.buttonStyles['background-color'];
            if (this.disabled) {
                this.buttonStyles['background-color'] = this.disabledBgColor;
            }
            this.textStyles = {
                color: this.textColor,
                fontSize: this.textFontSize
            };
        },
        handleClick: function handleClick(e) {
            this.preventDefault(e);
            if (this.disabled || this.promiseDisabled) return;
            if (this.disableOnPromise) {
                var _promise = this.disableOnPromise();
                this.disablePromise(_promise);
            } else {
                this.$emit('wxClick', e);
            }
        },
        disablePromise: function disablePromise(_promise) {
            var _this = this;

            this.btnStyle(true);
            _promise.finally(function () {
                _this.btnStyle(false);
            });
        },
        btnStyle: function btnStyle(disabled) {
            this.promiseDisabled = disabled;
            if (disabled) {
                this.buttonStyles['background-color'] = this.disabledBgColor;
            } else {
                this.buttonStyles['background-color'] = this.defualtBgColor;
            }
        }
    }
};

/***/ })

/******/ });
});
//# sourceMappingURL=index.web.js.map