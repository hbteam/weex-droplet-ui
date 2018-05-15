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
/******/ 	return __webpack_require__(__webpack_require__.s = 142);
/******/ })
/************************************************************************/
/******/ ({

/***/ 11:
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

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(186)
)

/* script */
__vue_exports__ = __webpack_require__(165)

/* template */
var __vue_template__ = __webpack_require__(208)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/example/progress/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-120b1299"
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

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(120);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
exports.default = new Vue(_index2.default);

/***/ }),

/***/ 165:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(14);

var _index2 = _interopRequireDefault(_index);

var _index3 = __webpack_require__(2);

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

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(26)
)

/* script */
__vue_exports__ = __webpack_require__(22)

/* template */
var __vue_template__ = __webpack_require__(30)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-progress/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-f297eac4"
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

/***/ 186:
/***/ (function(module, exports) {

module.exports = {
  "progress": {
    "marginTop": "60"
  }
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(4);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 208:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('wx-progress', {
    staticClass: ["progress"],
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
  }), _c('wx-progress', {
    staticClass: ["progress"],
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
  }), _c('wx-progress', {
    staticClass: ["progress"],
    attrs: {
      "animation": true,
      "percent": 80
    }
  }), _c('wx-progress', {
    staticClass: ["progress"],
    attrs: {
      "animation": true,
      "percent": 70
    }
  }), _c('wx-progress', {
    staticClass: ["progress"],
    attrs: {
      "animation": true,
      "percent": 60
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

/***/ 26:
/***/ (function(module, exports) {

module.exports = {
  "wx-progress": {
    "backgroundColor": "#1890ff",
    "position": "relative",
    "overflow": "hidden"
  },
  "progress-bar": {
    "backgroundColor": "#52c41a",
    "position": "absolute",
    "top": 0,
    "zIndex": 10
  }
}

/***/ }),

/***/ 30:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-progress"],
    style: _vm._outerStyle
  }, [_c('text', {
    ref: "progressBar",
    staticClass: ["progress-bar"],
    style: _vm._innerStyle
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(9)
)

/* script */
__vue_exports__ = __webpack_require__(6)

/* template */
var __vue_template__ = __webpack_require__(11)
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

/***/ 6:
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
            default: '36px'
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
            e.stopPropagation();
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

            this.finally();
            this.btnStyle(true);
            _promise.finally(function () {
                _this.btnStyle(false);
            });
        },
        finally: function _finally() {
            Promise.prototype.finally = function (callback) {
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
            };
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

/***/ }),

/***/ 9:
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

/***/ })

/******/ });
});
//# sourceMappingURL=index.native.js.map