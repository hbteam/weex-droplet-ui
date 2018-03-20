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
/******/ 	return __webpack_require__(__webpack_require__.s = 130);
/******/ })
/************************************************************************/
/******/ ({

/***/ 10:
/***/ (function(module, exports) {

module.exports = {
  "wx-button": {
    "backgroundColor": "#4676FF",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "wx-text": {
    "color": "#ffffff",
    "fontSize": "32"
  }
}

/***/ }),

/***/ 110:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(150)

/* template */
var __vue_template__ = __webpack_require__(183)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/example/loading/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-button"],
    style: _vm.buttonStyles,
    on: {
      "click": _vm.handleClick
    }
  }, [_c('text', {
    staticClass: ["wx-text"],
    style: _vm.textStyles
  }, [_vm._t("default")], 2)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(110);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
exports.default = new Vue(_index2.default);

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(18);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(14);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(3);

var _index4 = _interopRequireDefault(_index3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(25)
)

/* script */
__vue_exports__ = __webpack_require__(22)

/* template */
var __vue_template__ = __webpack_require__(29)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-loading/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-d41e25fe"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 183:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('wx-button', {
    on: {
      "wxClick": _vm.openLoading
    }
  }, [_vm._v("打开Loading")]), _c('wx-loading', {
    attrs: {
      "opacity": "0.6",
      "visible": _vm.visible,
      "top": "0px"
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 22:
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
            default: 'http://p285sfed1.bkt.clouddn.com/loading.gif'
        }
    },
    data: function data() {
        return {
            style: {
                top: '100px',
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

/***/ 25:
/***/ (function(module, exports) {

module.exports = {
  "loading": {
    "position": "fixed",
    "left": 0,
    "bottom": 0,
    "width": "750",
    "flexDirection": "row",
    "justifyContent": "center"
  },
  "loading-pane": {
    "height": "140",
    "width": "140",
    "alignItems": "center",
    "justifyContent": "center",
    "backgroundColor": "rgba(0,0,0,0.8)",
    "marginTop": "300",
    "borderRadius": "20"
  },
  "icon-loading": {
    "width": "84",
    "height": "84"
  }
}

/***/ }),

/***/ 29:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.visible) ? _c('div', {
    staticClass: ["loading"],
    style: _vm.style
  }, [_c('div', {
    staticClass: ["loading-pane"]
  }, [_c('image', {
    staticClass: ["icon-loading"],
    attrs: {
      "src": _vm.url
    }
  })])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 3:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(5);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 5:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(7)

/* template */
var __vue_template__ = __webpack_require__(12)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-button/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-9429ca3a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 7:
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
//# sourceMappingURL=index.native.js.map