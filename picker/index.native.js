// { "framework": "Vue" }

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["npm/weex-droplet-ui/example/picker/index"] = factory();
	else
		root["npm/weex-droplet-ui/example/picker/index"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 152);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(7);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(54);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(6);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(11)
)

/* script */
__vue_exports__ = __webpack_require__(8)

/* template */
var __vue_template__ = __webpack_require__(13)
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(10)
)

/* script */
__vue_exports__ = __webpack_require__(9)

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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-icon/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-dc895e2c"
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(4);

var _mixins = __webpack_require__(0);

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

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _alias = __webpack_require__(5);

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
            default: function _default() {
                return {};
            }
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

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {
  "icon-font": {
    "fontFamily": "dropletUiIconfont",
    "color": "#666666",
    "fontSize": "32"
  }
}

/***/ }),
/* 11 */
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
/* 12 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["icon-font"],
    style: _vm.iconStyle
  }, [_vm._v(_vm._s(_vm.Icon[_vm.name]))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 13 */
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
/* 14 */
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(19);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(20);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(21);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(27)
)

/* script */
__vue_exports__ = __webpack_require__(22)

/* template */
var __vue_template__ = __webpack_require__(31)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-input/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-1faaec8f"
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(26)
)

/* script */
__vue_exports__ = __webpack_require__(23)

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
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(28)
)

/* script */
__vue_exports__ = __webpack_require__(24)

/* template */
var __vue_template__ = __webpack_require__(32)
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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(29)
)

/* script */
__vue_exports__ = __webpack_require__(25)

/* template */
var __vue_template__ = __webpack_require__(33)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-search/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ce8f844e"
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _props;

var _mixins = __webpack_require__(0);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; } //
//
//
//
//
//
//
//
//
//
//
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
    props: (_props = {
        type: {
            type: String,
            default: 'text'
        },
        icon: {
            type: String
        },
        tail: {
            type: String
        },
        placeholder: {
            type: String
        },
        value: {
            type: String
        },
        disabled: {
            type: Boolean,
            default: false
        },
        autofocus: {
            type: Boolean,
            default: false
        },
        maxlength: {
            type: String
        },
        iconStyle: {
            type: Object
        },
        tailStyle: {
            type: Object
        }
    }, _defineProperty(_props, 'tailStyle', {
        type: Object
    }), _defineProperty(_props, 'width', {
        type: String
    }), _props),
    data: function data() {
        return {
            style: {
                width: this.width
            },
            inputValue: ''
        };
    },

    methods: {
        blur: function blur(e) {
            this.preventDefault(e);
            this.$emit('wxBlur', this.inputValue);
        },
        input: function input(e) {
            this.preventDefault(e);
            this.inputValue = e.value;
            this.$emit('input', e.value);
            this.$emit('wxInput', this.inputValue);
        }
    }
};

/***/ }),
/* 23 */
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
/* 24 */
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
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxIcon = __webpack_require__(1);

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
/* 26 */
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
/* 27 */
/***/ (function(module, exports) {

module.exports = {
  "wx-input": {
    "display": "flex",
    "width": "670",
    "height": "100",
    "backgroundColor": "#f8f8f8",
    "flexDirection": "row"
  },
  "wx-input-icon": {
    "width": "100",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "wx-input-text": {
    "flex": 1
  }
}

/***/ }),
/* 28 */
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
/* 29 */
/***/ (function(module, exports) {

module.exports = {
  "wx-search": {
    "display": "flex",
    "flexDirection": "row",
    "width": "750",
    "height": "88",
    "paddingTop": "16",
    "paddingRight": "20",
    "paddingBottom": "16",
    "paddingLeft": "20"
  },
  "wx-search-inner": {
    "display": "flex",
    "flexDirection": "row",
    "backgroundColor": "#ffffff",
    "paddingTop": "8",
    "paddingRight": "12",
    "paddingBottom": "8",
    "paddingLeft": "12",
    "borderRadius": "4",
    "height": "56"
  },
  "search-input": {
    "height": "38",
    "width": "642"
  },
  "focus": {
    "width": "542"
  },
  "cancel": {
    "width": "100",
    "height": "56",
    "paddingLeft": "20",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "f32": {
    "fontSize": "32"
  }
}

/***/ }),
/* 30 */
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
/* 31 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-input"],
    style: _vm.style
  }, [(_vm.icon) ? _c('div', {
    staticClass: ["wx-input-icon"]
  }, [_c('image', {
    style: _vm.iconStyle,
    attrs: {
      "src": _vm.icon
    }
  })]) : _vm._e(), _vm._t("left"), _c('input', {
    staticClass: ["wx-input-text"],
    attrs: {
      "type": _vm.type,
      "placeholder": _vm.placeholder,
      "value": _vm.value,
      "disabled": _vm.disabled,
      "autofocus": _vm.autofocus,
      "maxlength": _vm.maxlength
    },
    on: {
      "input": _vm.input,
      "blur": _vm.blur
    }
  }), (_vm.tail) ? _c('div', {
    staticClass: ["wx-input-icon"]
  }, [_c('image', {
    style: _vm.tailStyle,
    attrs: {
      "src": _vm.tail
    }
  })]) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 32 */
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
/* 33 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-search"],
    style: _vm.searchStyle
  }, [_c('div', {
    staticClass: ["wx-search-inner"],
    style: _vm.innerStyle
  }, [_c('wx-icon', {
    attrs: {
      "name": "search",
      "styles": _vm.iconSearchStyle
    }
  }), _c('input', {
    ref: "searchInput",
    staticClass: ["search-input"],
    class: [_vm.showCancel ? 'focus' : ''],
    style: {
      'background-color': _vm.innerBgColor
    },
    attrs: {
      "type": "text",
      "placeholder": _vm.placeholder,
      "value": _vm.value
    },
    on: {
      "input": _vm.input,
      "focus": _vm.focus
    }
  })], 1), _c('div', {
    staticClass: ["cancel"],
    on: {
      "click": _vm.handleClickCancel
    }
  }, [(_vm.showCancel) ? _c('text', {
    staticClass: ["f32"],
    style: _vm.cancelStyle
  }, [_vm._v("取消")]) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WxSwitch = exports.WxPicker = exports.WxRange = exports.WxProgress = exports.WxScrollerbar = exports.WxIndexlist = exports.WxIcon = exports.WxSearch = exports.WxLoading = exports.WxActionsheet = exports.WxPopup = exports.WxInput = exports.WxField = exports.WxRadio = exports.WxCheckboxList = exports.WxCheckbox = exports.WxCell = exports.WxTabbar = exports.WxNavbar = exports.WxHeader = exports.WxDialog = exports.WxButton = undefined;

var _wxButton = __webpack_require__(3);

var _wxButton2 = _interopRequireDefault(_wxButton);

var _wxDialog = __webpack_require__(38);

var _wxDialog2 = _interopRequireDefault(_wxDialog);

var _wxHeader = __webpack_require__(40);

var _wxHeader2 = _interopRequireDefault(_wxHeader);

var _wxNavbar = __webpack_require__(42);

var _wxNavbar2 = _interopRequireDefault(_wxNavbar);

var _wxTabbar = __webpack_require__(49);

var _wxTabbar2 = _interopRequireDefault(_wxTabbar);

var _wxCell = __webpack_require__(36);

var _wxCell2 = _interopRequireDefault(_wxCell);

var _wxCheckbox = __webpack_require__(2);

var _wxCheckbox2 = _interopRequireDefault(_wxCheckbox);

var _wxCheckboxList = __webpack_require__(37);

var _wxCheckboxList2 = _interopRequireDefault(_wxCheckboxList);

var _wxRadio = __webpack_require__(45);

var _wxRadio2 = _interopRequireDefault(_wxRadio);

var _wxField = __webpack_require__(39);

var _wxField2 = _interopRequireDefault(_wxField);

var _wxInput = __webpack_require__(14);

var _wxInput2 = _interopRequireDefault(_wxInput);

var _wxPopup = __webpack_require__(44);

var _wxPopup2 = _interopRequireDefault(_wxPopup);

var _wxActionsheet = __webpack_require__(35);

var _wxActionsheet2 = _interopRequireDefault(_wxActionsheet);

var _wxLoading = __webpack_require__(15);

var _wxLoading2 = _interopRequireDefault(_wxLoading);

var _wxSearch = __webpack_require__(17);

var _wxSearch2 = _interopRequireDefault(_wxSearch);

var _wxIcon = __webpack_require__(1);

var _wxIcon2 = _interopRequireDefault(_wxIcon);

var _wxIndexlist = __webpack_require__(41);

var _wxIndexlist2 = _interopRequireDefault(_wxIndexlist);

var _wxScrollerbar = __webpack_require__(47);

var _wxScrollerbar2 = _interopRequireDefault(_wxScrollerbar);

var _wxProgress = __webpack_require__(16);

var _wxProgress2 = _interopRequireDefault(_wxProgress);

var _wxRange = __webpack_require__(46);

var _wxRange2 = _interopRequireDefault(_wxRange);

var _wxPicker = __webpack_require__(43);

var _wxPicker2 = _interopRequireDefault(_wxPicker);

var _wxSwitch = __webpack_require__(48);

var _wxSwitch2 = _interopRequireDefault(_wxSwitch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.WxButton = _wxButton2.default;
exports.WxDialog = _wxDialog2.default;
exports.WxHeader = _wxHeader2.default;
exports.WxNavbar = _wxNavbar2.default;
exports.WxTabbar = _wxTabbar2.default;
exports.WxCell = _wxCell2.default;
exports.WxCheckbox = _wxCheckbox2.default;
exports.WxCheckboxList = _wxCheckboxList2.default;
exports.WxRadio = _wxRadio2.default;
exports.WxField = _wxField2.default;
exports.WxInput = _wxInput2.default;
exports.WxPopup = _wxPopup2.default;
exports.WxActionsheet = _wxActionsheet2.default;
exports.WxLoading = _wxLoading2.default;
exports.WxSearch = _wxSearch2.default;
exports.WxIcon = _wxIcon2.default;
exports.WxIndexlist = _wxIndexlist2.default;
exports.WxScrollerbar = _wxScrollerbar2.default;
exports.WxProgress = _wxProgress2.default;
exports.WxRange = _wxRange2.default;
exports.WxPicker = _wxPicker2.default;
exports.WxSwitch = _wxSwitch2.default;

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(51);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(52);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(53);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(55);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(56);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(57);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(58);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(59);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(60);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(61);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(62);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(63);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(64);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(65);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(66);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var is = {};
is.existy = function (value) {
    return value != null;
};

is.object = function (value) {
    return Object(value) === value;
};

// is a given value Array?
// check native isArray first
is.array = Array.isArray || function (value) {
    return toString.call(value) === '[object Array]';
};

// is a given value empty? Objects, arrays, strings
is.empty = function (value) {
    if (is.array(value)) {
        return value.length == 0;
    } else if (is.object(value)) {
        var length = Object.keys(value).length;
        if (length === 0) {
            return true;
        }
        return false;
    }
    return value === '' || typeof value === 'undefined';
};

exports.default = is;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(86)
)

/* script */
__vue_exports__ = __webpack_require__(67)

/* template */
var __vue_template__ = __webpack_require__(102)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-actionsheet/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-ffa6f924"
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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(95)
)

/* script */
__vue_exports__ = __webpack_require__(68)

/* template */
var __vue_template__ = __webpack_require__(111)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-cell/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-3a9f62da"
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(93)
)

/* script */
__vue_exports__ = __webpack_require__(69)

/* template */
var __vue_template__ = __webpack_require__(109)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-checkbox-list/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0a6c94a6"
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(94)
)

/* script */
__vue_exports__ = __webpack_require__(70)

/* template */
var __vue_template__ = __webpack_require__(110)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-checkbox/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-02c03e98"
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(87)
)

/* script */
__vue_exports__ = __webpack_require__(71)

/* template */
var __vue_template__ = __webpack_require__(103)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-dialog/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-0e12650e"
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(96)
)

/* script */
__vue_exports__ = __webpack_require__(72)

/* template */
var __vue_template__ = __webpack_require__(112)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-field/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-54cf0c82"
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(90)
)

/* script */
__vue_exports__ = __webpack_require__(73)

/* template */
var __vue_template__ = __webpack_require__(106)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-header/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-86c8bf04"
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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(89)
)

/* script */
__vue_exports__ = __webpack_require__(74)

/* template */
var __vue_template__ = __webpack_require__(105)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-indexlist/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-08cd0e96"
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(92)
)

/* script */
__vue_exports__ = __webpack_require__(75)

/* template */
var __vue_template__ = __webpack_require__(108)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-navbar/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-29fe1241"
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(98)
)

/* script */
__vue_exports__ = __webpack_require__(76)

/* template */
var __vue_template__ = __webpack_require__(114)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-picker/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-79e8f93f"
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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(84)
)

/* script */
__vue_exports__ = __webpack_require__(77)

/* template */
var __vue_template__ = __webpack_require__(100)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-popup/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-22f5d2f1"
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(91)
)

/* script */
__vue_exports__ = __webpack_require__(78)

/* template */
var __vue_template__ = __webpack_require__(107)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-radio/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-5d2edf80"
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(97)
)

/* script */
__vue_exports__ = __webpack_require__(79)

/* template */
var __vue_template__ = __webpack_require__(113)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-range/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-640a4b7c"
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
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(88)
)

/* script */
__vue_exports__ = __webpack_require__(80)

/* template */
var __vue_template__ = __webpack_require__(104)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-scrollerbar/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-fb1807c4"
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
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(83)
)

/* script */
__vue_exports__ = __webpack_require__(81)

/* template */
var __vue_template__ = __webpack_require__(99)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-switch/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-53cbdf36"
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
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(85)
)

/* script */
__vue_exports__ = __webpack_require__(82)

/* template */
var __vue_template__ = __webpack_require__(101)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/packages/wx-tabbar/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-63d4f5e2"
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
/* 67 */
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
//
//

var animation = weex.requireModule('animation');

exports.default = {
    props: {
        value: {
            type: Boolean,
            default: false
        },
        closeOnClickMask: {
            type: Boolean,
            default: true
        },
        cancelText: {
            type: String,
            default: '取消'
        },
        titleText: {
            type: String,
            default: '标题'
        },
        actions: {
            type: Array,
            default: function _default() {
                return [];
            }
        },
        actionColor: {
            type: String,
            default: '#0076FF'
        },
        cancelColor: {
            type: String,
            default: '#0076FF'
        },
        actionFontSize: {
            type: String,
            default: '40px'
        },
        cancelFontSize: {
            type: String,
            default: '40px'
        }
    },

    data: function data() {
        return {
            showActionsheet: false,
            mbHeight: 20,
            actionStyle: {},
            cancelStyle: {}
        };
    },


    computed: {
        listStyle: function listStyle() {
            var titleHeight = 92;
            var itemHeight = 114;
            var listHeight = this.actions.length * itemHeight;

            var totalHeight = listHeight + this.mbHeight;
            if (this.titleText) {
                totalHeight += titleHeight;
            }
            if (this.cancelText) {
                totalHeight += itemHeight + this.mbHeight;
            }

            var styleObj = { 'height': totalHeight + 'px', 'bottom': '-' + totalHeight + 'px' };

            return styleObj;
        }
    },

    created: function created() {
        this.setStyle();
    },


    methods: {
        setStyle: function setStyle() {
            this.actionStyle = Object.assign({}, {
                'color': this.actionColor,
                'font-size': this.actionFontSize
            });
            this.cancelStyle = Object.assign({}, {
                'color': this.cancelColor,
                'font-size': this.cancelFontSize
            });
        },
        itemsClass: function itemsClass(index) {
            var classArray = [];

            if (index === this.actions.length - 1) {
                classArray.push('radius-bl-24');
                classArray.push('radius-br-24');
            } else {
                classArray.push('bd-btm');
            }

            if (index === 0 && !this.titleText) {
                classArray.push('radius-tl-24');
                classArray.push('radius-tr-24');
            }

            return classArray;
        },
        close: function close() {
            if (!this.closeOnClickMask) {
                return;
            }
            this.hideSheet();
        },
        itemClick: function itemClick(item, index) {
            if (item.method && typeof item.method === 'function') {
                item.method(item, index);
            }
            this.hideSheet();
        },
        cancel: function cancel() {
            this.hideSheet();
        },
        showSheet: function showSheet() {
            var _this = this;

            this.displaySheetMask(true, function () {
                _this.displaySheetContent(true);
            });
        },
        hideSheet: function hideSheet() {
            var _this2 = this;

            this.displaySheetContent(false, function () {
                _this2.displaySheetMask(false, function () {
                    _this2.showActionsheet = false;
                });
            });
        },
        displaySheetMask: function displaySheetMask(isShow, callback) {
            var maskEl = this.$refs.sheetMask;
            if (!maskEl) {
                return;
            }

            var styles = isShow ? { opacity: 1 } : { opacity: 0 };

            animation.transition(maskEl, {
                styles: styles,
                duration: 150
            }, function () {
                typeof callback === 'function' && callback();
            });
        },
        displaySheetContent: function displaySheetContent(isShow, callback) {
            var contentEl = this.$refs.sheetContent;
            if (!contentEl) {
                return;
            }

            var styles = isShow ? { transform: 'translate(0, -100%)' } : { transform: 'translate(0, 100%)' };
            var timingF = isShow ? 'ease' : 'ease-out';
            var duration = isShow ? 150 : 300;

            animation.transition(contentEl, {
                styles: styles,
                duration: duration,
                timingFunction: timingF
            }, function () {
                typeof callback === 'function' && callback();
            });
        }
    },

    watch: {
        value: function value(val) {
            var _this3 = this;

            if (val) {
                this.showActionsheet = val;
                var timer = setTimeout(function () {
                    _this3.showSheet();
                    clearTimeout(timer);
                }, 40);
            }
        },
        showActionsheet: function showActionsheet(val) {
            !val && this.$emit('input', val);
        }
    }
};

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(0);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_mixins2.default],
    props: {
        width: {
            type: String
        },
        height: {
            type: String,
            default: '100px'
        },
        styles: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        text: {
            type: String,
            default: ''
        },
        icon: {
            type: String,
            default: ''
        },
        hasArrow: {
            type: Boolean,
            default: true
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
            cellStyles: {},
            textStyles: {}
        };
    },
    created: function created() {
        this.setStyle();
    },


    methods: {
        setStyle: function setStyle() {
            var baseCss = {
                height: this.height,
                width: this.width
            };
            this.cellStyles = Object.assign({}, this.styles, baseCss);
            this.textStyles = {
                color: this.textColor,
                fontSize: this.textFontSize
            };
        },
        handleClick: function handleClick(e) {
            this.preventDefault(e);
            this.$emit('wxClick', e);
        }
    }
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

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(0);

var _mixins2 = _interopRequireDefault(_mixins);

var _wxCheckbox = __webpack_require__(2);

var _wxCheckbox2 = _interopRequireDefault(_wxCheckbox);

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
        value: {
            type: Array
        },
        width: {
            width: String,
            default: '750px'
        },
        height: {
            width: String,
            default: '100px'
        },
        padding: {
            width: String,
            default: '20px'
        },
        checkedColor: {
            width: String,
            default: '#027FF3'
        }
    },

    data: function data() {
        return {
            checked: false
        };
    },
    mounted: function mounted() {
        this.checked = this.value;
    },


    methods: {
        handleClick: function handleClick(item) {
            item.checked = !item.checked;
            this.$emit('input', this.value);
            this.$emit('wxChange', this.value);
        }
    },
    components: { WxCheckbox: _wxCheckbox2.default }
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(0);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    mixins: [_mixins2.default],
    props: {
        value: {
            type: Boolean
        },
        disabled: {
            type: Boolean,
            default: false
        },
        text: {
            type: String,
            default: ''
        },
        align: {
            type: String,
            // left or right
            default: 'left'
        },
        checkedColor: {
            type: String,
            default: '#027FF3'
        }
    },

    data: function data() {
        return {
            checked: false,
            boxStyle: {}
        };
    },
    created: function created() {
        this.checked = this.value;
        if (!this.disabled) {
            this.boxStyle = {
                'border-color': this.checked ? this.checkedColor : '#DCDCDC'
            };
        } else {
            this.boxStyle = {
                'border-color': '#DCDCDC',
                'background-color': '#f2f3f4'
            };
        }
    },


    methods: {
        handleClick: function handleClick(e) {
            this.preventDefault(e);
            if (this.disabled) return;
            this.checked = !this.checked;
            this.$emit('wxChange', this.checked);
            this.$emit('input', this.checked);
        }
    },

    watch: {
        value: function value(v) {
            this.checked = v;
        },
        checked: function checked() {
            if (!this.disabled) {
                this.boxStyle = {
                    'border-color': this.checked ? this.checkedColor : '#DCDCDC'
                };
            }
        }
    }
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

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(0);

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
//

var animation = weex.requireModule('animation');
exports.default = {
    mixins: [_mixins2.default],
    props: {
        visible: {
            type: Boolean,
            required: true,
            default: false
        },

        width: {
            type: String,
            default: '574px'
        },

        cancelLabel: {
            type: String,
            default: '取消'
        },
        confirmLabel: {
            type: String,
            default: '确定'
        },
        useDefaultFooter: {
            type: Boolean,
            default: true
        },

        title: {
            type: String,
            default: ''
        },

        clickConfirmHide: {
            type: Boolean,
            default: true
        }
    },

    created: function created() {
        this.setStyles();
    },


    methods: {
        setStyles: function setStyles() {
            var baseCss = {
                width: this.width
            };
            this.dialogContentStyles = Object.assign({}, baseCss);
        },
        cancel: function cancel(e) {
            var _this = this;

            this.preventDefault(e);
            if (this.useDefaultFooter) {
                this.hideDialog(function () {
                    _this.$emit('cancel');
                });
                return;
            }

            this.$emit('cancel');
        },
        confirm: function confirm(e) {
            var _this2 = this;

            this.preventDefault(e);
            if (this.useDefaultFooter && this.clickConfirmHide) {
                this.hideDialog(function () {
                    _this2.$emit('confirm');
                });
                return;
            }

            this.$emit('confirm');
        },
        hideDialog: function hideDialog(callback) {
            var _this3 = this;

            var timer = setTimeout(function () {
                _this3.displayDialog(false, callback);
                clearTimeout(timer);
            }, 40);
        },
        showDialog: function showDialog() {
            var _this4 = this;

            var timer = setTimeout(function () {
                _this4.displayDialog(true);
                clearTimeout(timer);
            }, 40);
        },
        displayDialog: function displayDialog(isShow, callback) {
            var dialogEl = this.$refs.dialog;
            if (!dialogEl) {
                return;
            }
            var styles = isShow ? { opacity: 1 } : { opacity: 0 };
            animation.transition(dialogEl, {
                styles: styles,
                duration: 200
            }, function () {
                typeof callback === 'function' && callback();
            });
        }
    },

    watch: {
        visible: function visible() {
            if (this.visible) {
                this.showDialog();
            }
        }
    }
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(0);

var _mixins2 = _interopRequireDefault(_mixins);

var _wxIcon = __webpack_require__(1);

var _wxIcon2 = _interopRequireDefault(_wxIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var modal = weex.requireModule('modal'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    components: { WxIcon: _wxIcon2.default },
    props: {
        width: {
            type: String,
            default: '750px'
        },
        cliWidth: {
            type: String
        },
        titleWidth: {
            type: String
        },
        height: {
            type: String,
            default: '100px'
        },
        styles: {
            type: Object,
            default: function _default() {
                return {};
            }
        },
        inputStyles: {
            type: Object
        },
        label: {
            type: String,
            default: ''
        },
        labelPosition: {
            type: String,
            default: 'left'
        },
        type: {
            type: String,
            default: 'text'
        },
        maxlength: {
            type: String,
            default: '200'
        },
        autofocus: {
            type: Boolean,
            default: false
        },
        disabled: {
            type: Boolean,
            default: false
        },
        placeholder: {
            type: String,
            default: ''
        },
        unit: {
            type: String
        },
        hasArrow: {
            type: Boolean,
            default: false
        },
        value: {
            type: String
        }
    },

    data: function data() {
        return {
            fieldStyles: {},
            textTitleStyles: {}
        };
    },
    created: function created() {
        this.setStyle();
    },

    watch: {
        'value': function value() {
            if (this.value !== '') {
                this.cliTextStyles.color = '#333333';
            } else {
                this.cliTextStyles.color = '#999999';
            }
        }
    },

    methods: {
        setStyle: function setStyle() {

            // fieldStyles 样式
            var baseCss = {
                height: this.height,
                width: this.width
            };
            this.fieldStyles = Object.assign({}, baseCss, this.styles);

            //                if(this.disabled){
            //                    modal.toast({
            //                        message: this.width.replace('px','') - 26 + 'px'
            //                    })
            //                }

            // cliTextStyles样式
            var width = '';
            if (this.cliWidth != null) {
                width = this.cliWidth;
            } else {
                width = this.width;
            }
            var cliTextCss = {
                width: width.replace('px', '') - 26 + 'px',
                color: this.value === '' ? '#999999' : '#333333'
            };
            this.cliTextStyles = Object.assign({}, cliTextCss);

            if (this.titleWidth) {
                // textTitleStyles 样式
                var titleStyles = {
                    width: this.titleWidth
                };
                this.textTitleStyles = Object.assign({}, titleStyles);
            }
        },
        handleChange: function handleChange(e) {
            this.preventDefault(e);
            this.$emit('input', e.value);
        },
        blur: function blur(e) {
            this.preventDefault(e);
            this.$emit('wxBlur', this.inputValue);
        },
        clickHandler: function clickHandler() {
            if (this.disabled) {
                this.$emit('wxClick');
            } else {
                return;
            }
        }
    }
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(0);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animation = weex.requireModule('animation'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        hasBackIcon: {
            type: Boolean,
            default: true
        },
        text: {
            type: String,
            default: ''
        },
        useDefaultBack: {
            type: Boolean,
            default: true
        },
        hasBottom: {
            type: Boolean,
            default: false
        },

        textColor: {
            type: String,
            default: '#333333'
        },

        textFontSize: {
            type: String,
            default: '44px'
        },

        arrowColor: {
            type: String,
            default: '#4676FF'
        },

        arrowSize: {
            type: String,
            default: '32px'
        }
    },

    created: function created() {},


    methods: {
        getTitleStyle: function getTitleStyle() {
            return {
                color: this.textColor,
                'font-size': this.textFontSize
            };
        },
        getArrowStyle: function getArrowStyle() {
            return {
                'border-right-color': this.arrowColor,
                'border-bottom-color': this.arrowColor,
                width: this.arrowSize,
                height: this.arrowSize
            };
        },
        handleClick: function handleClick(e) {
            this.preventDefault(e);
            this.animated();
        },
        animated: function animated() {
            var _this = this;

            var el = this.$refs.arrow;
            animation.transition(el, {
                styles: {
                    opacity: '0.5'
                },
                duration: 200,
                timingFunction: 'ease-in',
                needLayout: false,
                delay: 0
            }, function () {
                if (_this.useDefaultBack) {
                    _this.$router.back();
                } else {
                    _this.$emit('wxBack');
                }
            });
        }
    }
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(0);

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

var modal = weex.requireModule('modal');
var animation = weex.requireModule('animation');
var dom = weex.requireModule('dom');
exports.default = {
    mixins: [_mixins2.default],
    props: {
        items: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: true
        },
        wxChange: {
            type: Function,
            required: true
        }
    },

    data: function data() {
        return {};
    },
    created: function created() {},


    methods: {
        scrollTo: function scrollTo(text) {
            var el = this.$refs['item' + text][0];
            dom.scrollToElement(el, {});
        },
        handleClick: function handleClick(item) {
            this.$emit('wxChange', item);
        }
    }
};

/***/ }),
/* 75 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        // titleColor默认4D4D4D，titleSize默认32px
        tabItems: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: true
        },

        vif: {
            type: Boolean,
            default: false
        },
        // navbar整体宽度
        width: {
            type: String,
            default: '750px'
        },

        // navbar整体高度
        height: {
            type: String,
            default: '80px'
        },

        hasBottom: {
            type: Boolean,
            default: true
        },

        animated: {
            type: Boolean,
            default: true
        },

        lineStyle: {
            default: function _default() {
                return {};
            }
        }
    },

    data: function data() {
        return {
            selectedTab: { index: 0 },
            translateX: 'translateX(0px)',
            // navbar宽度，该值等于prop width值 
            barWidth: 750,
            left: 0,
            defaultLineStyle: {
                width: '120px',
                'background-color': '#4676FF'
            }
        };
    },
    created: function created() {
        var _this = this;

        // 计算宽度
        this.barWidth = Number(this.width.replace('px', ''));
        // 不适用vif
        if (!this.vif) {
            this.contentTotalWidth = 750 * this.tabItems.length;
            this.setTranslateX();
        }
        // 添加pos属性，提供偏移动画适用
        this.tabItems.forEach(function (item, index) {
            var pos = _this.barWidth / _this.tabItems.length * index;
            item.pos = pos;
        });
        // 初始化line style
        this.setLineStyle();
    },


    methods: {
        setLineStyle: function setLineStyle() {
            var style = {
                top: Number(this.height.replace('px', '')) - 2 + 'px',
                left: this.getLeft() + 'px'
            };
            this.defaultLineStyle = Object.assign(style, this.defaultLineStyle, this.lineStyle);
        },


        /**
         * 获得第一个距离左侧left值
         * @return {Number}
         */
        getLeft: function getLeft() {
            var lineWidth = this.lineStyle.width || this.defaultLineStyle.width;
            var width = Number(lineWidth.replace('px', ''));
            return (this.barWidth / this.tabItems.length - width) / 2;
        },
        changeTab: function changeTab(item) {
            if (item.index === this.selectedTab.index && (!item.hasOwnProperty('multipleTrigger') || !item['multipleTrigger'])) {
                return;
            }
            this.$emit('wxChange', item);
            var transform = 'translateX(' + this.tabItems[item.index].pos + 'px)';
            this.offsetPos(transform);
            this.selectedTab = item;
            this.setTranslateX();
        },
        setTranslateX: function setTranslateX() {
            var x = this.selectedTab.index * 750;
            this.translateX = 'translateX(-' + x + 'px)';
        },


        // 设置偏移位置（是否带动画）
        offsetPos: function offsetPos(transform) {
            if (this.animated) {
                this.lineAnimate(transform);
            } else {
                this.setLineStyle();
            }
        },


        // 选中线的动画
        lineAnimate: function lineAnimate(transform) {
            var selectedLineEl = this.$refs.selectedLine;
            if (!selectedLineEl) {
                return;
            }
            animation.transition(selectedLineEl, {
                styles: {
                    transform: transform,
                    transformOrigin: 'center center'
                },
                duration: 300,
                timingFunction: 'ease-out',
                needLayout: false,
                delay: 0 //ms
            });
        }
    }
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _is = __webpack_require__(50);

var _is2 = _interopRequireDefault(_is);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var animation = weex.requireModule('animation'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var getIndex = function getIndex(list, item) {
    if (list && list.length < 1) {
        return 0;
    }
    var index1 = list.findIndex(function (v) {
        return v === item || v.name && v.name === item.name;
    });
    var index2 = list.indexOf(item);
    var index = Math.max(index1, index2);
    if (index < 0) {
        // throw new Error('list数组中不存在defaultValue');
        return 0;
    }
    return index;
};

exports.default = {
    props: {
        visible: {
            type: Boolean,
            default: false
        },

        data: {
            type: Object,
            default: function _default() {
                return {};
            },
            required: true
        }
    },
    data: function data() {
        return {
            startY: 0,
            endY: 0,
            currentY: 0,
            itemHeight: 72,
            selectedIndex: 0,
            _defaultValue: null
        };
    },
    created: function created() {
        this.selectedIndex = this.getInitialIndex();
    },
    mounted: function mounted() {
        this.initMove();
    },


    methods: {
        getInitialIndex: function getInitialIndex() {
            var index = getIndex(this.data.list, this.data.defaultValue);
            if (!this.data.defaultValue && this.data.list.length > 3) {
                index = Math.floor(this.data.list.length / 2);
            }
            return index;
        },
        initMove: function initMove() {
            this.currentY = 0;
            if (this.selectedIndex > 2) {
                this.currentY = -(this.selectedIndex - 2) * this.itemHeight;
            } else {
                this.currentY = (2 - this.selectedIndex) * this.itemHeight;
            }
            this.move(this.currentY);
        },
        getSelectedClass: function getSelectedClass(index) {
            if (this.selectedIndex === index) {
                return 'picker-item-selected';
            }
            return '';
        },
        ontouchstart: function ontouchstart(e) {
            if (this.data.list.length <= 1) {
                return;
            }
            this.startY = e.changedTouches[0].screenY;
        },
        ontouchmove: function ontouchmove(e) {
            if (this.data.list.length <= 1) {
                return;
            }
            var pageY = e.changedTouches[0].screenY;
            var value = parseInt(pageY - this.startY);
            var y = this.currentY + value;
            this.move(y);
        },
        ontouchend: function ontouchend(e) {
            if (this.data.list.length <= 1) {
                return;
            }
            this.endY = e.changedTouches[0].screenY;
            // 实际滚动距离
            var v = parseInt(this.endY - this.startY);
            var value = v % this.itemHeight;
            // 计算出每次拖动的36px整倍数
            this.currentY += v - value;

            // 正数y最大值
            var max1 = 2 * this.itemHeight;
            // 负数y最小值
            var max2 = (this.data.list.length - 3) * this.itemHeight;

            if (this.currentY > max1) {
                this.currentY = max1;
            } else if (this.currentY > 0 && this.currentY < max1) {
                this.currentY = this.currentY;
            } else if (this.currentY === max1) {
                this.currentY = this.currentY;
            } else if (Math.abs(this.currentY) > max2) {
                this.currentY = -max2;
            }

            this.countListIndex(this.currentY);
            this.move(this.currentY, true);
        },


        // 计算list数组索引
        countListIndex: function countListIndex(pageY) {
            var n = pageY / this.itemHeight;
            n = n > 0 ? 2 - n : Math.abs(n) + 2;
            this.setSelectedValue(n);
        },


        // set选中值
        setSelectedValue: function setSelectedValue(index) {
            var length = this.data.list.length;
            if (length === 0) {
                this.callback(null);
                return;
            }
            if (index < 0 || index > length - 1) {
                throw new Error('滑动取值索引数值出现错误' + index);
            }
            var value = this.data.list[index];
            this.selectedIndex = index;

            this.callback(value);
        },


        // 回调wxChange
        callback: function callback(value) {
            this.data.defaultValue = value;
            this.$emit('wxChange', value);
        },
        move: function move(y, bool) {
            var el = this.$refs.wrapper;
            var obj = {
                styles: {
                    transform: 'translateY(' + y + 'px)',
                    transformOrigin: 'center center'
                },
                needLayout: false,
                delay: 0 //ms
            };
            if (bool) {
                obj.duration = 300;
                obj.timingFunction = 'ease-out';
            }
            animation.transition(el, obj);
        }
    },
    watch: {
        'data.list': function dataList() {
            this.selectedIndex = this.getInitialIndex();
            this.initMove();
        }
    }
};

/***/ }),
/* 77 */
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

var animation = weex.requireModule('animation');
exports.default = {
    props: {
        width: {
            type: String,
            default: '750px'
        },

        height: {
            type: String,
            default: '400px'
        },

        position: {
            type: String,
            default: 'bottom'
        },

        styles: {
            type: Object,
            default: function _default() {
                return {};
            }
        },

        visible: {
            type: Boolean,
            default: false
        },

        duration: {
            type: Number,
            // 300 ms
            default: 300
        },
        hasOverley: {
            type: Boolean,
            default: true
        },

        closeOnClickMask: {
            type: Boolean,
            default: true
        }
    },

    data: function data() {
        return {
            popupStyles: {}
        };
    },
    created: function created() {
        this.setStyle();
        this.overlayAnimate();
    },


    methods: {
        // overlay动画
        overlayAnimate: function overlayAnimate(opacity) {
            if (!this.hasOverley) {
                return;
            }
            var overlayEl = this.$refs.overlay;
            if (!overlayEl) {
                return;
            }
            animation.transition(overlayEl, {
                styles: {
                    opacity: opacity
                },
                duration: this.duration,
                timingFunction: 'ease-out',
                needLayout: false,
                delay: 0 //ms
            });
        },
        setStyle: function setStyle() {
            var baseCss = {
                height: this.height,
                width: this.width
            };
            var style = Object.assign(this.getStyle().position, baseCss, this.styles);
            this.popupStyles = style;
        },
        getStyle: function getStyle(xy) {
            var style = {
                position: {},
                transform: ''
            };
            switch (this.position) {
                case 'top':
                    style.transform = 'translateY(' + (xy || this.height) + ')';
                    style.position = { top: '-' + this.height };
                    break;
                case 'bottom':
                    style.transform = 'translateY(-' + (xy || this.height) + ')';
                    style.position = { bottom: '-' + this.height };
                    break;
                case 'left':
                    style.transform = 'translateX(' + (xy || this.width) + ')';
                    style.position = { left: '-' + this.width, top: '0px' };
                    break;
                case 'right':
                    style.transform = 'translateX(-' + (xy || this.width) + ')';
                    style.position = { right: '-' + this.width, top: '0px' };
                    break;
            }
            return style;
        },


        // popup动画
        popupAnimate: function popupAnimate(xy) {
            var popupEl = this.$refs.popup;
            if (!popupEl) {
                return;
            }
            animation.transition(popupEl, {
                styles: {
                    transform: this.getStyle(xy).transform,
                    transformOrigin: 'center center'
                },
                duration: this.duration,
                timingFunction: 'ease-out',
                needLayout: false,
                delay: 0 //ms
            });
        },
        hide: function hide(fn) {
            var _this = this;

            // 如果是点击事件非函数调用
            if (fn === 'event' && !this.closeOnClickMask) return;
            var tm = setTimeout(function () {
                _this.$emit('wxChange', false);
                clearTimeout(tm);
                fn && fn !== 'event' && fn();
            }, this.duration);
            this.popupAnimate('0px');
            this.overlayAnimate(0);
        }
    },
    watch: {
        visible: function visible() {
            var _this2 = this;

            if (this.visible) {
                var tm = setTimeout(function () {
                    _this2.popupAnimate();
                    _this2.overlayAnimate(1);
                    clearTimeout(tm);
                }, 40);
            }
        }
    }
};

/***/ }),
/* 78 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            default: '750px'
        },
        size: {
            type: String,
            default: '44px'
        },
        align: {
            type: String,
            default: 'left'
        },
        direction: {
            type: String,
            default: 'row'
        },
        options: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: true
        },
        value: {
            type: Object,
            required: true
        },
        checkedColor: {
            type: String,
            default: '#027FF3'
        },
        textColor: {
            type: String,
            default: '#4D4D4D'
        },
        textFontSize: {
            type: String,
            default: '32px'
        }
    },

    data: function data() {
        return {
            checkedStyle: {},
            textStyles: {},
            rowStyle: {}
        };
    },
    created: function created() {
        this.setCheckedStyle();
        this.setTextStyle();
        this.setRowStyle();
    },


    methods: {
        setTextStyle: function setTextStyle() {
            this.textStyles = {
                color: this.textColor,
                fontSize: this.textFontSize
            };
        },
        setRowStyle: function setRowStyle() {
            if (this.direction === 'column') {
                this.rowStyle = {
                    'width': this.width,
                    'justify-content': 'space-between',
                    'padding-top': '24px',
                    'padding-bottom': '24px',
                    'padding-left': '40px',
                    'padding-right': '40px'
                };
            }
        },
        setCheckedStyle: function setCheckedStyle() {
            var value = Number(this.size.replace('px', '')) / 2;
            var size = value + 'px';
            this.checkedStyle = {
                height: size,
                width: size,
                'border-radius': size,
                top: value / 2 + 'px',
                left: value / 2 + 'px'
            };
        },
        getRadioStyle: function getRadioStyle(item) {
            return {
                height: this.size,
                width: this.size,
                'border-radius': this.size,
                'background-color': item.checked ? this.checkedColor : '#fff'
            };
        },
        handleClick: function handleClick(item) {
            if (item.checked) return;
            this.options.forEach(function (el) {
                el.checked = false;
            });
            item.checked = true;
            this.$emit('wxChange', item.value);
            this.$emit('input', item.value);
        }
    }
};

/***/ }),
/* 79 */
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
//
//
//

var animation = weex.requireModule('animation');

exports.default = {
    props: {
        width: {
            type: String,
            default: '750px'
        },
        height: {
            type: String,
            default: '10px'
        },
        circleStyle: {
            type: Object,
            default: function _default() {
                return {};
            }
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
            startX: 0,
            moveX: 0,
            _circleStyle: {},
            _innerStyle: {},
            _outerStyle: {},
            _wrapStyle: {},
            data: {
                width: 0
            },
            circleSize: '60px'
        };
    },
    created: function created() {
        this.initStyle();
    },


    methods: {
        initStyle: function initStyle() {
            this.circleStyle.width = this.circleStyle.width || this.circleSize;
            this.circleStyle.height = this.circleStyle.height || this.circleSize;
            var circleSize = Number(this.circleStyle.width.replace('px', ''));
            var v = circleSize / 2;

            var h = Number(this.height.replace('px', ''));

            // _innerStyle
            var base = { width: this.width, height: this.height, 'margin-top': v - h / 2 + 'px', 'margin-left': v + 'px' };
            this._innerStyle = Object.assign({}, this.innerStyle, base);
            console.log(this._innerStyle);
            this.data.width = Number(this._innerStyle.width.replace('px', ''));

            // _circleStyle
            this._circleStyle = Object.assign({}, this.circleStyle, {
                width: this.circleStyle.width,
                height: this.circleStyle.height,
                'border-radius': v + 'px'
            });

            // _outerStyle
            this._outerStyle = Object.assign({}, this.outerStyle, {
                left: '-' + this._innerStyle.width,
                width: this._innerStyle.width,
                height: this._innerStyle.height
            });
            this._wrapStyle = {
                width: this.data.width + circleSize + 'px',
                height: this._circleStyle.height,
                'background-color': '#fff'
            };
        },


        ontouchstart: function ontouchstart(e) {
            this.startX = e.changedTouches[0].screenX;
        },

        ontouchmove: function ontouchmove(e) {
            var x = Math.floor(e.changedTouches[0].screenX - this.startX);
            if (this.moveX + x > this.data.width) {
                this.move(this.$refs.circle, this.data.width);
                this.move(this.$refs.rangeOuter, this.data.width);
                return;
            }
            if (this.moveX + x < 0) {
                this.move(this.$refs.circle, 0);
                this.move(this.$refs.rangeOuter, 0);
                return;
            }
            this.move(this.$refs.circle, this.moveX + x);
            this.move(this.$refs.rangeOuter, this.moveX + x);
            this.$emit('input', this.getRange(this.moveX + x));
        },

        getRange: function getRange(value) {
            return Math.floor(value / this.data.width * 100);
        },


        ontouchend: function ontouchend(e) {
            // 结束点(即圆圈在x轴移动的距离)
            var endPot = Math.floor(e.changedTouches[0].screenX - this.startX + this.moveX);
            if (endPot <= 0) {
                endPot = 0;
            }
            if (endPot > this.data.width) {
                endPot = this.data.width;
            }
            this.moveX = endPot;
            this.$emit('input', this.getRange(this.moveX));
            this.$emit('wxChange', this.getRange(this.moveX));
            // this.move(endPot);
        },

        move: function move(el, progress) {
            animation.transition(el, {
                styles: {
                    transform: 'translateX(' + progress + 'px)',
                    transformOrigin: 'center center'
                },
                duration: 0,
                needLayout: false,
                delay: 0 //ms
            });
        },


        /**
         * 设置范围
         * @param {Int} range 0-100数字
         */
        setRange: function setRange(range) {
            var x = this.data.width * range / 100;
            if (x <= 0) {
                x = 0;
            }
            if (x > this.data.width) {
                x = this.data.width;
            }
            this.moveX = x;
            this.move(this.$refs.circle, x);
            this.move(this.$refs.rangeOuter, x);
            this.$emit('input', range);
            this.$emit('wxChange', range);
        }
    }
};

/***/ }),
/* 80 */
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

var dom = weex.requireModule('dom');

exports.default = {
    props: {
        // {
        //     index: i,
        //     title: list[i].toString().substring(4) + '月',  
        //     titleColor: '#4d4d4d', 
        //     selectedColor: 'blue',
        //     titleSize: '32px',
        //     selected: false,
        //     bgColor: '#969696', 
        //     selectedBgColor: '#fff',
        // }
        items: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: true
        },
        wxChange: {
            type: Function,
            required: true
        },

        hasBottom: {
            type: Boolean,
            default: false
        },

        hasSelectedBottom: {
            type: Boolean,
            default: false
        },

        height: {
            type: String,
            default: '700px'
        },

        itemWidth: {
            type: String,
            default: '250px'
        },
        itemHeight: {
            type: String,
            default: '100px'
        },

        scrollDirection: {
            type: String,
            default: 'vertical'
        }
    },

    data: function data() {
        return {
            selectIndex: 0,
            count: 0,
            scrollStyle: {},
            data: {
                // parent height child height
                pheight: 0,
                cwidth: 0,
                cheight: 0
            },
            hiddenCount: 0,
            maxHidden: 0
        };
    },
    created: function created() {
        var isVertical = this.getIsVertical();
        this.scrollStyle = {
            width: isVertical ? this.itemWidth : '750px',
            height: this.height,
            'flex-direction': isVertical ? 'column' : 'row'
        };
        this.getData();
        // this.deviceHeight = weex.config.env.deviceHeight
        this.getCount();
        // 最大隐藏个数（共37条，一页10条，能隐藏37-10=27条）
        this.maxHidden = this.items.length - this.count;
    },
    mounted: function mounted() {
        this.changeTab(this.getSelectIndex(), false);
    },


    methods: {
        getData: function getData() {
            this.data = {
                pheight: Number(this.height.replace('px', '')),
                cwidth: Number(this.itemWidth.replace('px', '')),
                cheight: Number(this.itemHeight.replace('px', ''))
            };
        },
        getSelectIndex: function getSelectIndex() {
            var item = this.items.find(function (el) {
                return el.selected;
            }) || this.items[0];
            return item.index;
        },
        getCount: function getCount() {
            if (this.getIsVertical()) {
                this.count = Math.floor(this.data.pheight / this.data.cheight);
            } else {
                this.count = Math.floor(750 / this.data.cwidth);
            }
        },
        getIsVertical: function getIsVertical() {
            return this.scrollDirection === 'vertical';
        },
        changeTab: function changeTab(index) {
            var animated = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

            this.selectIndex = index;
            if (index) {
                var middle = Math.floor(this.count / 2);
                if (index >= middle) {
                    this.hiddenCount = index - middle;
                    this.hiddenCount = this.getCanMoves();
                    this.scrollTo(-this.hiddenCount * this.data.cheight, animated);
                } else {
                    this.hiddenCount = 0;
                    this.scrollTo(0, animated);
                }
                this.items.forEach(function (item) {
                    item.selected = false;
                });
                this.items[index].selected = true;
            }
            this.$emit('wxChange', this.items[index]);
        },


        /**
         * 获取能移动多少条，不能超过总条数
         */
        getCanMoves: function getCanMoves() {
            var bool = this.hiddenCount > this.maxHidden;
            return bool ? this.maxHidden : this.hiddenCount;
        },
        scrollTo: function scrollTo(elHeight, animated) {
            var index = elHeight / this.data.cheight;
            if (index > 0) {
                var itemStr = 'item' + (this.items.length - index);
                var el = this.$refs[itemStr][0];
                dom.scrollToElement(el, { animated: animated });
            } else {
                var _itemStr = 'item' + (0 - index);
                var _el = this.$refs[_itemStr][0];
                dom.scrollToElement(_el, { animated: animated });
            }
        },
        getItemStyle: function getItemStyle(item) {
            var bgColor = (this.selectIndex === item.index ? item.selectedBgColor : item.bgColor) || '#fff';
            return {
                width: this.itemWidth,
                height: this.itemHeight,
                'background-color': bgColor
            };
        },
        getTitleStyle: function getTitleStyle(item) {
            var color = (this.selectIndex === item.index ? item.selectedColor : item.titleColor) || '#4d4d4d';
            return {
                color: color,
                height: this.itemHeight,
                'line-height': this.itemHeight,
                'font-size': item.titleSize || '32px',
                'border-bottom-color': color
            };
        }
    }
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(0);

var _mixins2 = _interopRequireDefault(_mixins);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _animation = weex.requireModule('animation'); //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        value: {
            type: Boolean
        },
        disabled: {
            type: Boolean
        },

        checkedColor: {
            type: String,
            default: '#027FF3'
        }
    },

    data: function data() {
        return {
            checked: false,
            blkStyle: {}
        };
    },
    created: function created() {
        this.initBlkStyle();
    },
    mounted: function mounted() {
        this.checked = this.value;
        this.blkAnimation(true);
        this.animation(true);
    },


    methods: {
        handleClick: function handleClick(e) {
            this.preventDefault(e);
            if (this.disabled) return;
            this.checked = !this.checked;
            this.animation();
            this.blkAnimation();
        },
        animation: function animation() {
            var isInit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var el = this.$refs.switchCore;
            var s = this.checked ? '0' : '1';
            _animation.transition(el, {
                styles: {
                    transform: 'scale(' + s + ')'
                },
                duration: isInit ? 0 : 300,
                timingFunction: 'linear',
                needLayout: false,
                delay: 0
            });
        },
        blkAnimation: function blkAnimation() {
            var _this = this;

            var isInit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

            var el = this.$refs.blk;
            var x = this.checked ? '42px' : '0px';
            _animation.transition(el, {
                styles: {
                    transform: 'translateX(' + x + ')'
                },
                duration: isInit ? 0 : 300,
                timingFunction: 'linear',
                needLayout: false,
                delay: 0
            }, function () {
                _this.$emit('wxChange', _this.checked);
                _this.$emit('input', _this.checked);
            });
        },


        // android不支持阴影
        initBlkStyle: function initBlkStyle() {
            var platform = weex.config.env.platform.toLowerCase();
            if (platform === 'android') {
                this.blkStyle = {
                    'border-width': '1px',
                    'border-style': 'solid',
                    'border-color': '#d9d9d9'
                };
            } else {
                this.blkStyle = {
                    'box-shadow': '0 1px 3px rgba(0,0,0,.4)'
                };
            }
        }
    }
};

/***/ }),
/* 82 */
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
        tabItems: {
            type: Array,
            default: function _default() {
                return [];
            },
            required: true
        },

        styles: {
            type: Object,
            default: function _default() {
                return {};
            },
            required: false
        },

        height: {
            type: String,
            default: '128px'
        }
    },

    data: function data() {
        return {
            selectedTab: { index: 0 },
            translateX: 'translateX(0px)',
            deviceWidth: 750,
            titleStyle: {}
        };
    },
    created: function created() {
        this.totalWidth = this.deviceWidth * this.tabItems.length;
        this.setTranslateX();
    },


    methods: {
        changeTab: function changeTab(item) {
            this.selectedTab = item;
            this.setTranslateX();
            this.$emit('wxChange', item);
        },
        setTranslateX: function setTranslateX() {
            var x = this.selectedTab.index * this.deviceWidth;
            this.translateX = 'translateX(-' + x + 'px)';
        },
        getStyles: function getStyles() {
            var baseStyle = {
                'height': this.height
            };
            return Object.assign({}, baseStyle, this.styles);
        },
        getIconStyle: function getIconStyle(item) {
            return {
                width: item.iconWdith || '38px',
                height: item.iconHeight || '38px'
            };
        },
        getTitleStyle: function getTitleStyle(item) {
            return {
                'font-size': item.fontSize || '28px',
                'color': this.selectedTab.index === item.index ? item.selectedColor : item.titleColor
            };
        }
    }
};

/***/ }),
/* 83 */
/***/ (function(module, exports) {

module.exports = {
  "wx-switch": {
    "position": "relative",
    "width": "104",
    "height": "64",
    "borderRadius": "64",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#dddddd",
    "backgroundColor": "#d9d9d9"
  },
  "blk": {
    "position": "absolute",
    "top": "5",
    "left": "0",
    "zIndex": 100,
    "height": "52",
    "width": "56",
    "backgroundColor": "#ffffff",
    "borderRadius": "52"
  },
  "switch-core": {
    "position": "absolute",
    "top": 0,
    "width": "102",
    "height": "62",
    "backgroundColor": "#fdfdfd",
    "borderRadius": "62"
  }
}

/***/ }),
/* 84 */
/***/ (function(module, exports) {

module.exports = {
  "wx-overlay": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "bottom": 0,
    "right": 0,
    "backgroundColor": "rgba(0,0,0,0.3)",
    "zIndex": 1000
  },
  "wx-popup": {
    "backgroundColor": "#ffffff",
    "position": "fixed",
    "zIndex": 1001
  }
}

/***/ }),
/* 85 */
/***/ (function(module, exports) {

module.exports = {
  "tab-component": {
    "flexDirection": "row",
    "backgroundColor": "#ffffff"
  },
  "tabbar": {
    "flexDirection": "row",
    "width": "750",
    "height": "100",
    "position": "fixed",
    "left": 0,
    "right": 0,
    "bottom": 0,
    "zIndex": 1000,
    "borderTopWidth": "1",
    "borderTopStyle": "solid",
    "borderTopColor": "#D8D8D8",
    "backgroundColor": "#ffffff"
  },
  "tabbar-item": {
    "flex": 1,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "icon": {
    "marginTop": "14",
    "marginBottom": "10",
    "width": "38",
    "height": "38"
  },
  "wx-text": {
    "fontSize": "28",
    "paddingTop": "2",
    "textAlign": "center",
    "color": "#646464"
  }
}

/***/ }),
/* 86 */
/***/ (function(module, exports) {

module.exports = {
  "wx-actionsheet-mask": {
    "backgroundColor": "rgba(0,0,0,0.4)",
    "position": "fixed",
    "left": 0,
    "bottom": 0,
    "top": 0,
    "width": "750",
    "opacity": 0
  },
  "wx-actionsheet-content": {
    "position": "fixed",
    "width": "750",
    "left": 0
  },
  "action-list": {
    "marginBottom": "20",
    "width": "710",
    "marginLeft": "20"
  },
  "action-title": {
    "height": "92",
    "width": "710",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  "action-item": {
    "height": "114",
    "width": "710",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  },
  "bd-btm": {
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "rgba(77,77,77,0.78)"
  },
  "cancel-button": {
    "height": "114",
    "width": "710",
    "marginLeft": "20"
  },
  "c-grey": {
    "color": "#8F8E94"
  },
  "bold": {
    "fontWeight": "bold"
  },
  "f26": {
    "fontSize": "26"
  },
  "radius-24": {
    "borderRadius": "24"
  },
  "radius-tl-24": {
    "borderTopLeftRadius": "24"
  },
  "radius-tr-24": {
    "borderTopRightRadius": "24"
  },
  "radius-bl-24": {
    "borderBottomLeftRadius": "24"
  },
  "radius-br-24": {
    "borderBottomRightRadius": "24"
  }
}

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = {
  "wx-dialog": {
    "backgroundColor": "rgba(0,0,0,0.35)",
    "position": "fixed",
    "left": 0,
    "bottom": 0,
    "top": 0,
    "width": "750",
    "opacity": 0,
    "overflow": "hidden",
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "opacityFull": {
    "opacity": 1
  },
  "dialog-content": {
    "width": "574",
    "backgroundColor": "#ffffff",
    "borderRadius": "6"
  },
  "dialog-default": {
    "width": "574",
    "backgroundColor": "#ffffff",
    "borderRadius": "6"
  },
  "dialog-footer": {
    "flexDirection": "row",
    "height": "80",
    "borderTopWidth": "1",
    "borderTopStyle": "solid",
    "borderTopColor": "#DEDEDE"
  },
  "flex-1": {
    "flex": 1,
    "height": "80",
    "fontSize": "36",
    "lineHeight": "80",
    "textAlign": "center",
    "color": "#4d4d4d"
  },
  "btn-cancel": {
    "borderRightWidth": "1",
    "borderRightStyle": "solid",
    "borderRightColor": "#DEDEDE",
    "color": "#7A818B",
    "fontSize": "36"
  },
  "btn-confirm": {
    "color": "#4676FF",
    "fontSize": "36"
  },
  "title": {
    "width": "574",
    "fontSize": "40",
    "color": "#7A818B",
    "textAlign": "center",
    "paddingTop": "96",
    "paddingBottom": "76",
    "paddingLeft": "40",
    "paddingRight": "40"
  }
}

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = {
  "scroller-bottom-border": {
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#DCDCDC"
  },
  "wx-cell": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "wx-text": {
    "color": "#4d4d4d",
    "fontSize": "32"
  },
  "selected-border": {
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid"
  },
  "select-cell": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  }
}

/***/ }),
/* 89 */
/***/ (function(module, exports) {

module.exports = {
  "wx-indexlist": {
    "width": "750"
  },
  "indexList": {
    "position": "fixed",
    "right": 0,
    "top": 0
  },
  "scroller": {
    "width": "750"
  },
  "category": {
    "color": "#666666",
    "width": "750",
    "height": "60",
    "lineHeight": "60",
    "backgroundColor": "#d3d3d3",
    "fontSize": "36"
  },
  "item-text": {
    "color": "#999999",
    "width": "750",
    "height": "60",
    "lineHeight": "60",
    "fontSize": "32"
  },
  "indexList-right": {
    "color": "#666666",
    "fontSize": "32",
    "paddingLeft": "40",
    "paddingRight": "10"
  }
}

/***/ }),
/* 90 */
/***/ (function(module, exports) {

module.exports = {
  "wx-header": {
    "height": "100",
    "backgroundColor": "#ffffff"
  },
  "bottom-border": {
    "borderBottomWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#DCDCDC"
  },
  "no-border": {
    "borderBottomWidth": "0"
  },
  "header-arrow": {
    "position": "absolute",
    "left": "0",
    "top": "0",
    "zIndex": 100,
    "width": "100",
    "height": "100",
    "justifyContent": "center"
  },
  "icon-arrow-left": {
    "borderRightWidth": "3",
    "borderRightStyle": "solid",
    "borderRightColor": "#4676FF",
    "borderBottomStyle": "solid",
    "borderBottomWidth": "3",
    "borderBottomColor": "#4676FF",
    "transform": "rotate(135deg)",
    "marginLeft": "46"
  },
  "header-title": {
    "width": "750",
    "height": "100"
  },
  "title": {
    "width": "750",
    "fontSize": "44",
    "textAlign": "center",
    "color": "#333333",
    "height": "100",
    "lineHeight": "100"
  }
}

/***/ }),
/* 91 */
/***/ (function(module, exports) {

module.exports = {
  "wx-radio-items": {
    "flexDirection": "row",
    "justifyContent": "space-between"
  },
  "wx-radio-item": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "wx-radio-label-right": {
    "paddingRight": "10"
  },
  "wx-radio-label-left": {
    "paddingLeft": "10"
  },
  "wx-radio": {
    "position": "relative",
    "borderRadius": "40"
  },
  "wx-radio-checked": {
    "borderWidth": "0"
  },
  "wx-radio-nochecked": {
    "backgroundColor": "#ffffff",
    "borderWidth": "2",
    "borderStyle": "solid",
    "borderColor": "#dddddd"
  },
  "checked": {
    "backgroundColor": "#ffffff",
    "position": "absolute",
    "zIndex": 100
  }
}

/***/ }),
/* 92 */
/***/ (function(module, exports) {

module.exports = {
  "wx-tabbar": {
    "backgroundColor": "#ffffff"
  },
  "tab-component": {
    "flexDirection": "row",
    "backgroundColor": "#ffffff"
  },
  "tabbar": {
    "flexDirection": "row",
    "backgroundColor": "#ffffff"
  },
  "tabbar-item": {
    "flex": 1,
    "alignItems": "center",
    "justifyContent": "center"
  },
  "wx-title": {
    "textAlign": "center",
    "fontSize": "32"
  },
  "bottom-1": {
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#FF0000"
  },
  "nobottom": {
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#ffffff"
  },
  "has-bottom-1": {
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#DCDCDC"
  },
  "no-bottom-1": {
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#ffffff"
  },
  "line": {
    "height": "2",
    "position": "absolute",
    "left": 0,
    "zIndex": 100
  }
}

/***/ }),
/* 93 */
/***/ (function(module, exports) {

module.exports = {
  "cell": {
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "space-between",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#DCDCDC"
  }
}

/***/ }),
/* 94 */
/***/ (function(module, exports) {

module.exports = {
  "wx-checkbox": {
    "flexDirection": "row",
    "alignItems": "center"
  },
  "wx-text": {
    "fontSize": "32"
  },
  "align-right": {
    "paddingLeft": "16"
  },
  "align-left": {
    "paddingRight": "16"
  },
  "wx-box": {
    "width": "44",
    "height": "44",
    "borderWidth": "1",
    "borderStyle": "solid",
    "borderColor": "#DCDCDC",
    "backgroundColor": "#ffffff",
    "borderRadius": "4"
  },
  "checked": {
    "position": "absolute",
    "top": "6",
    "left": "14",
    "zIndex": 100,
    "width": "14",
    "height": "24",
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid",
    "borderRightWidth": "2",
    "borderRightStyle": "solid",
    "transform": "rotate(45deg)"
  }
}

/***/ }),
/* 95 */
/***/ (function(module, exports) {

module.exports = {
  "wx-cell": {
    "height": "100",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#DCDCDC",
    "backgroundColor": "#ffffff",
    "flexDirection": "row",
    "alignItems": "center"
  },
  "wx-text": {
    "flex": 1,
    "fontSize": "32"
  },
  "icon": {
    "width": "40",
    "height": "40",
    "marginRight": "20"
  },
  "right-arrow": {
    "width": "22",
    "height": "22",
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#979797",
    "borderRightWidth": "2",
    "borderRightStyle": "solid",
    "borderRightColor": "#979797",
    "marginRight": "4",
    "transform": "rotate(-45deg)"
  }
}

/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports = {
  "wx-field": {
    "width": "750",
    "height": "100",
    "flexDirection": "row",
    "alignItems": "center",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#DCDCDC",
    "flexWrap": "wrap"
  },
  "wx-text": {
    "fontSize": "34",
    "color": "#333333",
    "width": "180",
    "flexWrap": "nowrap"
  },
  "wx-input": {
    "fontSize": "32",
    "color": "#333333",
    "height": "110",
    "lineHeight": "110",
    "flex": 3,
    "textAlign": "left"
  },
  "wx-content": {
    "flexDirection": "row",
    "flex": 1,
    "alignItems": "center"
  },
  "wx-cli-text": {
    "color": "#999999",
    "fontSize": "32",
    "flexWrap": "nowrap"
  },
  "wx-unit": {
    "fontSize": "32",
    "width": "50"
  },
  "right-arrow": {
    "width": "22",
    "height": "22",
    "marginTop": "20",
    "borderBottomWidth": "2",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#DCDCDC",
    "borderRightWidth": "2",
    "borderRightStyle": "solid",
    "borderRightColor": "#DCDCDC",
    "transform": "rotate(-45deg)"
  },
  "wx-text-top": {
    "width": "750",
    "paddingTop": "40",
    "fontSize": "34",
    "color": "#333333"
  }
}

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports = {
  "wx-range": {
    "backgroundColor": "#ffffff",
    "position": "relative"
  },
  "range-inner": {
    "position": "relative",
    "overflow": "hidden",
    "backgroundColor": "#1890ff"
  },
  "range-outer": {
    "position": "absolute",
    "zIndex": 100,
    "backgroundColor": "#1890ff"
  },
  "circle": {
    "backgroundColor": "#f5f5f5",
    "position": "absolute",
    "left": 0,
    "top": 0,
    "zIndex": 100,
    "boxShadow": "0 1px 3px rgba(0,0,0,.4)"
  }
}

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports = {
  "wx-picker-wrapper": {
    "overflow": "hidden",
    "backgroundColor": "#ffffff"
  },
  "wx-picker": {
    "overflow": "hidden",
    "backgroundColor": "#ffffff",
    "height": "432"
  },
  "wrapper": {
    "overflow": "hidden",
    "flexDirection": "column",
    "backgroundColor": "#ffffff",
    "marginTop": "32"
  },
  "picker-item": {
    "flex": 1,
    "textAlign": "center",
    "lineHeight": "72",
    "backgroundColor": "#ffffff",
    "height": "72",
    "color": "#999999",
    "fontSize": "32"
  },
  "picker-item-selected": {
    "color": "#000000"
  },
  "picker-center": {
    "width": "750",
    "height": "72",
    "borderTopWidth": "1",
    "borderTopStyle": "solid",
    "borderTopColor": "#DCDCDC",
    "borderBottomWidth": "1",
    "borderBottomStyle": "solid",
    "borderBottomColor": "#DCDCDC",
    "position": "absolute",
    "top": "180",
    "left": 0,
    "zIndex": 100,
    "justifyContent": "center",
    "alignItems": "center"
  }
}

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-switch"],
    style: {
      'background-color': _vm.checked ? _vm.checkedColor : '#d9d9d9'
    },
    on: {
      "click": _vm.handleClick
    }
  }, [_c('text', {
    ref: "switchCore",
    staticClass: ["switch-core"]
  }), _c('text', {
    ref: "blk",
    staticClass: ["blk"],
    style: _vm.blkStyle
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-container"]
  }, [(_vm.visible && _vm.hasOverley) ? _c('div', {
    ref: "overlay",
    staticClass: ["mask", "wx-overlay"],
    on: {
      "click": function($event) {
        _vm.hide('event')
      }
    }
  }) : _vm._e(), (_vm.visible) ? _c('div', {
    ref: "popup",
    staticClass: ["wx-popup"],
    style: _vm.popupStyles
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-tabbar"]
  }, [_c('div', {
    staticClass: ["tab-component"],
    style: {
      'transform': _vm.translateX,
      width: _vm.totalWidth + 'px'
    }
  }, [_vm._t("default")], 2), _c('div', {
    staticClass: ["tabbar"],
    style: _vm.getStyles()
  }, _vm._l((_vm.tabItems), function(item) {
    return _c('div', {
      staticClass: ["tabbar-item"],
      on: {
        "click": function($event) {
          _vm.changeTab(item)
        }
      }
    }, [(_vm.selectedTab.index === item.index) ? _c('image', {
      staticClass: ["icon"],
      style: _vm.getIconStyle(item),
      attrs: {
        "src": item.selectedImage
      }
    }) : _vm._e(), (_vm.selectedTab.index !== item.index) ? _c('image', {
      staticClass: ["icon"],
      style: _vm.getIconStyle(item),
      attrs: {
        "src": item.image
      }
    }) : _vm._e(), _c('text', {
      staticClass: ["wx-text"],
      style: _vm.getTitleStyle(item)
    }, [_vm._v(_vm._s(item.title))])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-actionsheet"]
  }, [(_vm.showActionsheet) ? _c('div', {
    ref: "sheetMask",
    staticClass: ["wx-actionsheet-mask"],
    on: {
      "click": _vm.close
    }
  }) : _vm._e(), (_vm.showActionsheet) ? _c('div', {
    ref: "sheetContent",
    staticClass: ["wx-actionsheet-content"],
    style: _vm.listStyle
  }, [_c('div', {
    staticClass: ["action-list"]
  }, [(_vm.titleText) ? _c('div', {
    staticClass: ["action-title", "bd-btm", "radius-tl-24", "radius-tr-24"]
  }, [_c('text', {
    staticClass: ["f26", "c-grey"]
  }, [_vm._v(_vm._s(_vm.titleText))])]) : _vm._e(), _vm._l((_vm.actions), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: ["action-item"],
      class: _vm.itemsClass(index),
      on: {
        "click": function($event) {
          _vm.itemClick(item, index)
        }
      }
    }, [_c('text', {
      staticClass: ["bold"],
      style: _vm.actionStyle
    }, [_vm._v(_vm._s(item.name))])])
  })], 2), (_vm.cancelText) ? _c('div', {
    staticClass: ["action-item", "bd-btm", "cancel-button", "radius-24"],
    on: {
      "click": _vm.cancel
    }
  }, [_c('text', {
    style: _vm.cancelStyle
  }, [_vm._v(_vm._s(_vm.cancelText))])]) : _vm._e()]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.visible) ? _c('div', {
    ref: "dialog",
    staticClass: ["wx-dialog"],
    class: [_vm.useDefaultFooter ? '' : 'opacityFull'],
    on: {
      "click": _vm.preventDefault
    }
  }, [_c('div', {
    staticClass: ["dialog-content"],
    style: _vm.dialogContentStyles
  }, [_vm._t("dialog-header"), _vm._t("dialog-body"), _vm._t("dialog-footer"), (_vm.useDefaultFooter) ? _c('div', {
    staticClass: ["dialog-default"]
  }, [(_vm.title) ? _c('text', {
    staticClass: ["title"]
  }, [_vm._v(_vm._s(_vm.title))]) : _vm._e(), _c('div', {
    staticClass: ["dialog-footer"]
  }, [_c('text', {
    staticClass: ["flex-1", "btn-cancel"],
    on: {
      "click": _vm.cancel
    }
  }, [_vm._v(_vm._s(_vm.cancelLabel))]), _c('text', {
    staticClass: ["flex-1", "btn-confirm"],
    on: {
      "click": _vm.confirm
    }
  }, [_vm._v(_vm._s(_vm.confirmLabel))])])]) : _vm._e()], 2), _vm._t("dialog-outer")], 2) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 104 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroller', {
    staticClass: ["wx-scroller"],
    style: _vm.scrollStyle,
    attrs: {
      "scrollDirection": _vm.scrollDirection,
      "showScrollbar": "false"
    }
  }, _vm._l((_vm.items), function(item, index) {
    return _c('div', {
      ref: 'item' + index,
      refInFor: true,
      class: [_vm.hasBottom ? 'scroller-bottom-border' : '', _vm.selectIndex == index ? 'select-cell' : 'wx-cell'],
      style: _vm.getItemStyle(item),
      on: {
        "click": function($event) {
          _vm.changeTab(index)
        }
      }
    }, [_c('text', {
      staticClass: ["wx-text"],
      class: [_vm.selectIndex == index && _vm.hasSelectedBottom ? 'selected-border' : ''],
      style: _vm.getTitleStyle(item)
    }, [_vm._v(_vm._s(item.title || item))])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 105 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-indexlist"]
  }, [_c('scroller', {
    staticClass: ["scroller"],
    style: {
      height: _vm.getPageHeight() + 'px'
    },
    attrs: {
      "showScrollbar": "false"
    }
  }, _vm._l((_vm.items), function(category) {
    return _c('div', {
      staticClass: ["eachCategory"]
    }, [_c('text', {
      ref: 'item' + category.text,
      refInFor: true,
      staticClass: ["category"]
    }, [_vm._v(_vm._s(category.text))]), _vm._l((category.list), function(item) {
      return _c('text', {
        staticClass: ["item-text"],
        on: {
          "click": function($event) {
            _vm.handleClick(item)
          }
        }
      }, [_vm._v(_vm._s(item.text) + "\n            ")])
    })], 2)
  })), _c('div', {
    staticClass: ["indexList"]
  }, _vm._l((_vm.items), function(category) {
    return _c('text', {
      staticClass: ["indexList-right"],
      on: {
        "click": function($event) {
          _vm.scrollTo(category.text)
        }
      }
    }, [_vm._v(_vm._s(category.text))])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 106 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-header"],
    class: [_vm.hasBottom ? 'bottom-border' : 'no-border']
  }, [_vm._t("default", [_c('div', {
    staticClass: ["header-title"]
  }, [_c('text', {
    staticClass: ["title"],
    style: _vm.getTitleStyle()
  }, [_vm._v(_vm._s(_vm.text))])]), (_vm.hasBackIcon) ? _c('div', {
    ref: "arrow",
    staticClass: ["header-arrow"],
    on: {
      "click": _vm.handleClick
    }
  }, [_c('text', {
    staticClass: ["icon-arrow-left"],
    style: _vm.getArrowStyle()
  })]) : _vm._e()]), _vm._t("header-left"), _vm._t("header-center"), _vm._t("header-right")], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 107 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-radio-items"],
    style: {
      'flex-direction': _vm.direction,
      'width': _vm.width
    }
  }, _vm._l((_vm.options), function(item) {
    return _c('div', {
      staticClass: ["wx-radio-item"],
      style: _vm.rowStyle,
      on: {
        "click": function($event) {
          _vm.handleClick(item)
        }
      }
    }, [(_vm.align === 'left') ? _c('text', {
      staticClass: ["wx-radio-label-right"],
      style: _vm.textStyles
    }, [_vm._v(_vm._s(item.title))]) : _vm._e(), _c('div', {
      staticClass: ["wx-radio"],
      class: [item.checked ? 'wx-radio-checked' : 'wx-radio-nochecked'],
      style: _vm.getRadioStyle(item)
    }, [(item.checked) ? _c('text', {
      staticClass: ["checked"],
      style: _vm.checkedStyle
    }) : _vm._e()]), (_vm.align === 'right') ? _c('text', {
      staticClass: ["wx-radio-label-left"],
      style: _vm.textStyles
    }, [_vm._v(_vm._s(item.title))]) : _vm._e()])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-tabbar"],
    style: {
      width: this.width
    }
  }, [_c('div', {
    staticClass: ["tabbar"],
    style: {
      width: this.width,
      height: this.height
    }
  }, _vm._l((_vm.tabItems), function(item) {
    return _c('div', {
      staticClass: ["tabbar-item"],
      class: [_vm.hasBottom ? 'has-bottom-1' : 'no-bottom-1'],
      on: {
        "click": function($event) {
          _vm.changeTab(item)
        }
      }
    }, [_c('text', {
      staticClass: ["wx-title"],
      class: [_vm.selectedTab.index === item.index ? 'selected' : 'noselected'],
      style: {
        color: _vm.selectedTab.index === item.index ? (item.selectedColor || '#4676FF') : (item.titleColor) || '#7A818B',
        'font-size': item.titleSize
      }
    }, [_vm._v(_vm._s(item.title))])])
  })), (!_vm.vif) ? _c('div', {
    staticClass: ["tab-component"],
    style: {
      'transform': _vm.translateX,
      width: _vm.contentTotalWidth + 'px'
    }
  }, [_vm._t("default")], 2) : _vm._e(), (_vm.vif) ? _c('div', [_vm._t("default")], 2) : _vm._e(), _c('text', {
    ref: "selectedLine",
    staticClass: ["line"],
    style: _vm.defaultLineStyle
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-checkbox-list"],
    style: {
      width: _vm.width
    }
  }, _vm._l((_vm.value), function(item) {
    return _c('div', {
      staticClass: ["cell"],
      style: {
        width: _vm.width,
        height: _vm.height
      },
      on: {
        "click": function($event) {
          _vm.handleClick(item)
        }
      }
    }, [_c('text', {
      staticClass: ["wx-text"],
      style: {
        'padding-left': _vm.padding
      }
    }, [_vm._v(_vm._s(item.title))]), _c('wx-checkbox', {
      staticClass: ["checkbox"],
      style: {
        'padding-right': _vm.padding
      },
      attrs: {
        "checkedColor": _vm.checkedColor
      },
      model: {
        value: (item.checked),
        callback: function($$v) {
          _vm.$set(item, "checked", $$v)
        },
        expression: "item.checked"
      }
    })], 1)
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 110 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-checkbox"],
    on: {
      "click": _vm.handleClick
    }
  }, [(_vm.align === 'left') ? _c('text', {
    staticClass: ["wx-text", "align-left"]
  }, [_vm._v(_vm._s(_vm.text))]) : _vm._e(), _c('div', {
    staticClass: ["wx-box"],
    style: _vm.boxStyle
  }, [(_vm.checked) ? _c('div', {
    staticClass: ["checked"],
    style: {
      'border-right-color': _vm.checkedColor,
      'border-bottom-color': _vm.checkedColor
    }
  }) : _vm._e()]), (_vm.align === 'right') ? _c('text', {
    staticClass: ["wx-text", "align-right"]
  }, [_vm._v(_vm._s(_vm.text))]) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 111 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-cell"],
    style: _vm.cellStyles,
    on: {
      "click": _vm.handleClick
    }
  }, [_vm._t("left"), (_vm.icon) ? _c('image', {
    staticClass: ["icon"],
    attrs: {
      "src": _vm.icon
    }
  }) : _vm._e(), _c('text', {
    staticClass: ["wx-text"],
    style: _vm.textStyles
  }, [_vm._v(_vm._s(_vm.text))]), _vm._t("right"), (_vm.hasArrow) ? _c('div', {
    staticClass: ["right-arrow"]
  }) : _vm._e()], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 112 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-field"],
    style: _vm.fieldStyles,
    on: {
      "click": _vm.clickHandler
    }
  }, [_c('text', {
    class: [_vm.labelPosition === 'top' ? 'wx-text-top' : 'wx-text'],
    style: _vm.textTitleStyles
  }, [_vm._v(_vm._s(_vm.label))]), _c('div', {
    staticClass: ["wx-content"]
  }, [(!_vm.disabled) ? _c('input', {
    staticClass: ["wx-input"],
    style: _vm.inputStyles,
    attrs: {
      "type": _vm.type,
      "maxlength": _vm.maxlength,
      "autofocus": _vm.autofocus,
      "disabled": _vm.disabled,
      "value": _vm.value,
      "placeholder": _vm.placeholder
    },
    on: {
      "input": _vm.handleChange,
      "blur": _vm.blur
    }
  }) : _vm._e(), (_vm.disabled) ? _c('text', {
    staticClass: ["wx-input"],
    style: _vm.cliTextStyles
  }, [_vm._v(_vm._s(_vm.value === '' ? _vm.placeholder : _vm.value))]) : _vm._e(), (_vm.unit) ? _c('text', {
    staticClass: ["wx-unit"]
  }, [_vm._v(_vm._s(_vm.unit))]) : _vm._e(), (_vm.hasArrow) ? _c('wx-icon', {
    staticClass: ["wx-enter"],
    attrs: {
      "name": "enter"
    }
  }) : _vm._e()], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 113 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-range"],
    style: _vm._wrapStyle
  }, [_c('div', {
    staticClass: ["range-inner"],
    style: _vm._innerStyle
  }, [_c('div', {
    ref: "rangeOuter",
    staticClass: ["range-outer"],
    style: _vm._outerStyle
  })]), _c('div', {
    ref: "circle",
    staticClass: ["circle"],
    style: _vm._circleStyle,
    on: {
      "panstart": _vm.ontouchstart,
      "panend": _vm.ontouchend,
      "panmove": _vm.ontouchmove
    }
  })])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 114 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.visible) ? _c('div', {
    staticClass: ["wx-picker-wrapper"]
  }, [_c('div', {
    staticClass: ["wx-picker"],
    on: {
      "panstart": _vm.ontouchstart,
      "panend": _vm.ontouchend,
      "panmove": _vm.ontouchmove
    }
  }, [_c('div', {
    ref: "wrapper",
    staticClass: ["wrapper"]
  }, _vm._l((_vm.data.list), function(item, index) {
    return _c('text', {
      staticClass: ["picker-item"],
      class: [_vm.getSelectedClass(index)]
    }, [_vm._v(_vm._s(item.name || item))])
  })), _c('text', {
    staticClass: ["picker-center"]
  })])]) : _vm._e()
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var provins = exports.provins = ['北京市', '天津市', '河北省', '山西省', '内蒙古', '辽宁省', '吉林省', '黑龙江省', '上海市', '江苏省', '浙江省', '安徽省', '福建省', '江西省', '山东省', '河南省', '湖北省', '湖南省', '广东省', '广西', '海南省', '重庆市', '四川省', '贵州省', '云南省', '西藏', '陕西省', '甘肃省', '青海', '宁夏', '新疆'];

var citys = exports.citys = {
  '北京市': ['北京市'],
  '天津市': ['天津市'],
  '河北省': ['石家庄市', '唐山市', '秦皇岛市', '邯郸市', '邢台市', '保定市', '张家口市', '承德市', '沧州市', '廊坊市', '衡水市'],
  '山西省': ['太原市', '大同市', '阳泉市', '长治市', '晋城市', '朔州市', '晋中市', '运城市', '忻州市', '临汾市', '吕梁市'],
  '内蒙古': ['呼和浩特市', '包头市', '乌海市', '赤峰市', '通辽市', '鄂尔多斯市', '呼伦贝尔市', '巴彦淖尔市', '乌兰察布市', '兴安盟', '锡林郭勒盟', '阿拉善盟'],
  '辽宁省': ['沈阳市', '大连市', '鞍山市', '抚顺市', '本溪市', '丹东市', '锦州市', '营口市', '阜新市', '辽阳市', '盘锦市', '铁岭市', '朝阳市', '葫芦岛市'],
  '吉林省': ['长春市', '吉林市', '四平市', '辽源市', '通化市', '白山市', '松原市', '白城市', '延边朝鲜族自治州'],
  '黑龙江省': ['哈尔滨市', '齐齐哈尔市', '鸡西市', '鹤岗市', '双鸭山市', '大庆市', '伊春市', '佳木斯市', '七台河市', '牡丹江市', '黑河市', '绥化市', '大兴安岭地区'],
  '上海市': ['上海市'],
  '江苏省': ['南京市', '无锡市', '徐州市', '常州市', '苏州市', '南通市', '连云港市', '淮安市', '盐城市', '扬州市', '镇江市', '泰州市', '宿迁市'],
  '浙江省': ['杭州市', '宁波市', '温州市', '嘉兴市', '湖州市', '绍兴市', '金华市', '衢州市', '舟山市', '台州市', '丽水市'],
  '安徽省': ['合肥市', '芜湖市', '蚌埠市', '淮南市', '马鞍山市', '淮北市', '铜陵市', '安庆市', '黄山市', '滁州市', '阜阳市', '宿州市', '巢湖市', '六安市', '亳州市', '池州市', '宣城市'],
  '福建省': ['福州市', '厦门市', '莆田市', '三明市', '泉州市', '漳州市', '南平市', '龙岩市', '宁德市'],
  '江西省': ['南昌市', '景德镇市', '萍乡市', '九江市', '新余市', '鹰潭市', '赣州市', '吉安市', '宜春市', '抚州市', '上饶市'],
  '山东省': ['济南市', '青岛市', '淄博市', '枣庄市', '东营市', '烟台市', '潍坊市', '济宁市', '泰安市', '威海市', '日照市', '莱芜市', '临沂市', '德州市', '聊城市', '滨州市', '菏泽市'],
  '河南省': ['郑州市', '开封市', '洛阳市', '平顶山市', '安阳市', '鹤壁市', '新乡市', '焦作市', '濮阳市', '许昌市', '漯河市', '三门峡市', '南阳市', '商丘市', '信阳市', '周口市', '驻马店市'],
  '湖北省': ['武汉市', '黄石市', '十堰市', '宜昌市', '襄樊市', '鄂州市', '荆门市', '孝感市', '荆州市', '黄冈市', '咸宁市', '随州市', '恩施土家族苗族自治州', '直辖行政单位'],
  '湖南省': ['长沙市', '株洲市', '湘潭市', '衡阳市', '邵阳市', '岳阳市', '常德市', '张家界市', '益阳市', '郴州市', '永州市', '怀化市', '娄底市', '湘西土家族苗族自治州'],
  '广东省': ['广州市', '韶关市', '深圳市', '珠海市', '汕头市', '佛山市', '江门市', '湛江市', '茂名市', '肇庆市', '惠州市', '梅州市', '汕尾市', '河源市', '阳江市', '清远市', '东莞市', '中山市', '潮州市', '揭阳市', '云浮市'],
  '广西': ['南宁市', '柳州市', '桂林市', '梧州市', '北海市', '防城港市', '钦州市', '贵港市', '玉林市', '百色市', '贺州市', '河池市', '来宾市', '崇左市'],
  '海南省': ['海口市', '三亚市'],
  '重庆市': ['市辖区', '县'],
  '四川省': ['成都市', '自贡市', '攀枝花市', '泸州市', '德阳市', '绵阳市', '广元市', '遂宁市', '内江市', '乐山市', '南充市', '眉山市', '宜宾市', '广安市', '达州市', '雅安市', '巴中市', '资阳市', '阿坝藏族羌族自治州', '甘孜藏族自治州', '凉山彝族自治州'],
  '贵州省': ['贵阳市', '六盘水市', '遵义市', '安顺市', '铜仁地区', '黔西南布依族苗族自治州', '毕节地区', '黔东南苗族侗族自治州', '黔南布依族苗族自治州'],
  '云南省': ['昆明市', '曲靖市', '玉溪市', '保山市', '昭通市', '丽江市', '思茅市', '临沧市', '楚雄彝族自治州', '红河哈尼族彝族自治州', '文山壮族苗族自治州', '西双版纳傣族自治州', '大理白族自治州', '德宏傣族景颇族自治州', '怒江傈僳族自治州', '迪庆藏族自治州'],
  '西藏': ['拉萨市', '昌都地区', '山南地区', '日喀则地区', '那曲地区', '阿里地区', '林芝地区'],
  '陕西省': ['西安市', '铜川市', '宝鸡市', '咸阳市', '渭南市', '延安市', '汉中市', '榆林市', '安康市', '商洛市'],
  '甘肃省': ['兰州市', '嘉峪关市', '金昌市', '白银市', '天水市', '武威市', '张掖市', '平凉市', '酒泉市', '庆阳市', '定西市', '陇南市', '临夏回族自治州', '甘南藏族自治州'],
  '青海': ['西宁市', '海东地区', '海北藏族自治州', '黄南藏族自治州', '海南藏族自治州', '果洛藏族自治州', '玉树藏族自治州', '海西蒙古族藏族自治州'],
  '宁夏': ['银川市', '石嘴山市', '吴忠市', '固原市', '中卫市'],
  '新疆': ['乌鲁木齐市', '克拉玛依市', '吐鲁番地区', '哈密地区', '昌吉回族自治州', '博尔塔拉蒙古自治州', '巴音郭楞蒙古自治州', '阿克苏地区', '克孜勒苏柯尔克孜自治州', '喀什地区', '和田地区', '伊犁哈萨克', '塔城地区', '阿勒泰地区', '石河子市', '阿拉尔市', '图木舒克市', '五家渠市']
};

var areas = exports.areas = {
  '北京市': ['东城区', '西城区', '崇文区', '宣武区', '朝阳区', '丰台区', '石景山区', '海淀区', '门头沟区', '房山区', '通州区', '顺义区', '昌平区', '大兴区', '怀柔区', '平谷区', '密云县', '延庆县'],
  '天津市': ['和平区', '河东区', '河西区', '南开区', '河北区', '红桥区', '塘沽区', '汉沽区', '大港区', '东丽区', '西青区', '津南区', '北辰区', '武清区', '宝坻区', '宁河县', '静海县', '蓟县'],
  '石家庄市': ['长安区', '桥东区', '桥西区', '新华区', '井陉矿区', '裕华区', '井陉县', '正定县', '栾城县', '行唐县', '灵寿县', '高邑县', '深泽县', '赞皇县', '无极县', '平山县', '元氏县', '赵县', '辛集市', '藁城市', '晋州市', '新乐市', '鹿泉市'],
  '唐山市': ['路南区', '路北区', '古冶区', '开平区', '丰南区', '丰润区', '滦县', '滦南县', '乐亭县', '迁西县', '玉田县', '唐海县', '遵化市', '迁安市'],
  '秦皇岛市': ['海港区', '山海关区', '北戴河区', '青龙满族自治县', '昌黎县', '抚宁县', '卢龙县'],
  '邯郸市': ['邯山区', '丛台区', '复兴区', '峰峰矿区', '邯郸县', '临漳县', '成安县', '大名县', '涉县', '磁县', '肥乡县', '永年县', '邱县', '鸡泽县', '广平县', '馆陶县', '魏县', '曲周县', '武安市'],
  '邢台市': ['桥东区', '桥西区', '邢台县', '临城县', '内丘县', '柏乡县', '隆尧县', '任县', '南和县', '宁晋县', '巨鹿县', '新河县', '广宗县', '平乡县', '威县', '清河县', '临西县', '南宫市', '沙河市'],
  '保定市': ['新市区', '北市区', '南市区', '满城县', '清苑县', '涞水县', '阜平县', '徐水县', '定兴县', '唐县', '高阳县', '容城县', '涞源县', '望都县', '安新县', '易县', '曲阳县', '蠡县', '顺平县', '博野县', '雄县', '涿州市', '定州市', '安国市', '高碑店市'],
  '张家口市': ['桥东区', '桥西区', '宣化区', '下花园区', '宣化县', '张北县', '康保县', '沽源县', '尚义县', '蔚县', '阳原县', '怀安县', '万全县', '怀来县', '涿鹿县', '赤城县', '崇礼县'],
  '承德市': ['双桥区', '双滦区', '鹰手营子矿区', '承德县', '兴隆县', '平泉县', '滦平县', '隆化县', '丰宁满族自治县', '宽城满族自治县', '围场满族蒙古族自治县'],
  '沧州市': ['新华区', '运河区', '沧县', '青县', '东光县', '海兴县', '盐山县', '肃宁县', '南皮县', '吴桥县', '献县', '孟村回族自治县', '泊头市', '任丘市', '黄骅市', '河间市'],
  '廊坊市': ['安次区', '广阳区', '固安县', '永清县', '香河县', '大城县', '文安县', '大厂回族自治县', '霸州市', '三河市'],
  '衡水市': ['桃城区', '枣强县', '武邑县', '武强县', '饶阳县', '安平县', '故城县', '景县', '阜城县', '冀州市', '深州市'],
  '太原市': ['小店区', '迎泽区', '杏花岭区', '尖草坪区', '万柏林区', '晋源区', '清徐县', '阳曲县', '娄烦县', '古交市'],
  '大同市': ['城区', '矿区', '南郊区', '新荣区', '阳高县', '天镇县', '广灵县', '灵丘县', '浑源县', '左云县', '大同县'],
  '阳泉市': ['城区', '矿区', '郊区', '平定县', '盂县'],
  '长治市': ['城区', '郊区', '长治县', '襄垣县', '屯留县', '平顺县', '黎城县', '壶关县', '长子县', '武乡县', '沁县', '沁源县', '潞城市'],
  '晋城市': ['城区', '沁水县', '阳城县', '陵川县', '泽州县', '高平市'],
  '朔州市': ['朔城区', '平鲁区', '山阴县', '应县', '右玉县', '怀仁县'],
  '晋中市': ['榆次区', '榆社县', '左权县', '和顺县', '昔阳县', '寿阳县', '太谷县', '祁县', '平遥县', '灵石县', '介休市'],
  '运城市': ['盐湖区', '临猗县', '万荣县', '闻喜县', '稷山县', '新绛县', '绛县', '垣曲县', '夏县', '平陆县', '芮城县', '永济市', '河津市'],
  '忻州市': ['忻府区', '定襄县', '五台县', '代县', '繁峙县', '宁武县', '静乐县', '神池县', '五寨县', '岢岚县', '河曲县', '保德县', '偏关县', '原平市'],
  '临汾市': ['尧都区', '曲沃县', '翼城县', '襄汾县', '洪洞县', '古县', '安泽县', '浮山县', '吉县', '乡宁县', '大宁县', '隰县', '永和县', '蒲县', '汾西县', '侯马市', '霍州市'],
  '吕梁市': ['离石区', '文水县', '交城县', '兴县', '临县', '柳林县', '石楼县', '岚县', '方山县', '中阳县', '交口县', '孝义市', '汾阳市'],
  '呼和浩特市': ['新城区', '回民区', '玉泉区', '赛罕区', '土默特左旗', '托克托县', '和林格尔县', '清水河县', '武川县'],
  '包头市': ['东河区', '昆都仑区', '青山区', '石拐区', '白云矿区', '九原区', '土默特右旗', '固阳县', '达尔罕茂明安联合旗'],
  '乌海市': ['海勃湾区', '海南区', '乌达区'],
  '赤峰市': ['红山区', '元宝山区', '松山区', '阿鲁科尔沁旗', '巴林左旗', '巴林右旗', '林西县', '克什克腾旗', '翁牛特旗', '喀喇沁旗', '宁城县', '敖汉旗'],
  '通辽市': ['科尔沁区', '科尔沁左翼中旗', '科尔沁左翼后旗', '开鲁县', '库伦旗', '奈曼旗', '扎鲁特旗', '霍林郭勒市'],
  '鄂尔多斯市': ['东胜区', '达拉特旗', '准格尔旗', '鄂托克前旗', '鄂托克旗', '杭锦旗', '乌审旗', '伊金霍洛旗'],
  '呼伦贝尔市': ['海拉尔区', '阿荣旗', '莫力达瓦达斡尔族自治旗', '鄂伦春自治旗', '鄂温克族自治旗', '陈巴尔虎旗', '新巴尔虎左旗', '新巴尔虎右旗', '满洲里市', '牙克石市', '扎兰屯市', '额尔古纳市', '根河市'],
  '巴彦淖尔市': ['临河区', '五原县', '磴口县', '乌拉特前旗', '乌拉特中旗', '乌拉特后旗', '杭锦后旗'],
  '乌兰察布市': ['集宁区', '卓资县', '化德县', '商都县', '兴和县', '凉城县', '察哈尔右翼前旗', '察哈尔右翼中旗', '察哈尔右翼后旗', '四子王旗', '丰镇市'],
  '兴安盟': ['乌兰浩特市', '阿尔山市', '科尔沁右翼前旗', '科尔沁右翼中旗', '扎赉特旗', '突泉县'],
  '锡林郭勒盟': ['二连浩特市', '锡林浩特市', '阿巴嘎旗', '苏尼特左旗', '苏尼特右旗', '东乌珠穆沁旗', '西乌珠穆沁旗', '太仆寺旗', '镶黄旗', '正镶白旗', '正蓝旗', '多伦县'],
  '阿拉善盟': ['阿拉善左旗', '阿拉善右旗', '额济纳旗'],
  '沈阳市': ['和平区', '沈河区', '大东区', '皇姑区', '铁西区', '苏家屯区', '东陵区', '沈北新区', '于洪区', '辽中县', '康平县', '法库县', '新民市'],
  '大连市': ['中山区', '西岗区', '沙河口区', '甘井子区', '旅顺口区', '金州区', '长海县', '瓦房店市', '普兰店市', '庄河市'],
  '鞍山市': ['铁东区', '铁西区', '立山区', '千山区', '台安县', '岫岩满族自治县', '海城市'],
  '抚顺市': ['新抚区', '东洲区', '望花区', '顺城区', '抚顺县', '新宾满族自治县', '清原满族自治县'],
  '本溪市': ['平山区', '溪湖区', '明山区', '南芬区', '本溪满族自治县', '桓仁满族自治县'],
  '丹东市': ['元宝区', '振兴区', '振安区', '宽甸满族自治县', '东港市', '凤城市'],
  '锦州市': ['古塔区', '凌河区', '太和区', '黑山县', '义县', '凌海市', '北镇市'],
  '营口市': ['站前区', '西市区', '鲅鱼圈区', '老边区', '盖州市', '大石桥市'],
  '阜新市': ['海州区', '新邱区', '太平区', '清河门区', '细河区', '阜新蒙古族自治县', '彰武县'],
  '辽阳市': ['白塔区', '文圣区', '宏伟区', '弓长岭区', '太子河区', '辽阳县', '灯塔市'],
  '盘锦市': ['双台子区', '兴隆台区', '大洼县', '盘山县'],
  '铁岭市': ['银州区', '清河区', '铁岭县', '西丰县', '昌图县', '调兵山市', '开原市'],
  '朝阳市': ['双塔区', '龙城区', '朝阳县', '建平县', '喀喇沁左翼蒙古族自治县', '北票市', '凌源市'],
  '葫芦岛市': ['连山区', '龙港区', '南票区', '绥中县', '建昌县', '兴城市'],
  '长春市': ['南关区', '宽城区', '朝阳区', '二道区', '绿园区', '双阳区', '农安县', '九台市', '榆树市', '德惠市'],
  '吉林市': ['昌邑区', '龙潭区', '船营区', '丰满区', '永吉县', '蛟河市', '桦甸市', '舒兰市', '磐石市'],
  '四平市': ['铁西区', '铁东区', '梨树县', '伊通满族自治县', '公主岭市', '双辽市'],
  '辽源市': ['龙山区', '西安区', '东丰县', '东辽县'],
  '通化市': ['东昌区', '二道江区', '通化县', '辉南县', '柳河县', '梅河口市', '集安市'],
  '白山市': ['八道江区', '江源区', '抚松县', '靖宇县', '长白朝鲜族自治县', '临江市'],
  '松原市': ['宁江区', '前郭尔罗斯蒙古族自治县', '长岭县', '乾安县', '扶余县'],
  '白城市': ['洮北区', '镇赉县', '通榆县', '洮南市', '大安市'],
  '延边朝鲜族自治州': ['延吉市', '图们市', '敦化市', '珲春市', '龙井市', '和龙市', '汪清县', '安图县'],
  '哈尔滨市': ['道里区', '南岗区', '道外区', '平房区', '松北区', '香坊区', '呼兰区', '阿城区', '依兰县', '方正县', '宾县', '巴彦县', '木兰县', '通河县', '延寿县', '双城市', '尚志市', '五常市'],
  '齐齐哈尔市': ['龙沙区', '建华区', '铁锋区', '昂昂溪区', '富拉尔基区', '碾子山区', '梅里斯达斡尔族区', '龙江县', '依安县', '泰来县', '甘南县', '富裕县', '克山县', '克东县', '拜泉县', '讷河市'],
  '鸡西市': ['鸡冠区', '恒山区', '滴道区', '梨树区', '城子河区', '麻山区', '鸡东县', '虎林市', '密山市'],
  '鹤岗市': ['向阳区', '工农区', '南山区', '兴安区', '东山区', '兴山区', '萝北县', '绥滨县'],
  '双鸭山市': ['尖山区', '岭东区', '四方台区', '宝山区', '集贤县', '友谊县', '宝清县', '饶河县'],
  '大庆市': ['萨尔图区', '龙凤区', '让胡路区', '红岗区', '大同区', '肇州县', '肇源县', '林甸县', '杜尔伯特蒙古族自治县'],
  '伊春市': ['伊春区', '南岔区', '友好区', '西林区', '翠峦区', '新青区', '美溪区', '金山屯区', '五营区', '乌马河区', '汤旺河区', '带岭区', '乌伊岭区', '红星区', '上甘岭区', '嘉荫县', '铁力市'],
  '佳木斯市': ['向阳区', '前进区', '东风区', '郊区', '桦南县', '桦川县', '汤原县', '抚远县', '同江市', '富锦市'],
  '七台河市': ['新兴区', '桃山区', '茄子河区', '勃利县'],
  '牡丹江市': ['东安区', '阳明区', '爱民区', '西安区', '东宁县', '林口县', '绥芬河市', '海林市', '宁安市', '穆棱市'],
  '黑河市': ['爱辉区', '嫩江县', '逊克县', '孙吴县', '北安市', '五大连池市'],
  '绥化市': ['北林区', '望奎县', '兰西县', '青冈县', '庆安县', '明水县', '绥棱县', '安达市', '肇东市', '海伦市'],
  '大兴安岭地区': ['加格达奇区', '松岭区', '新林区', '呼中区', '呼玛县', '塔河县', '漠河县'],
  '上海市': ['黄浦区', '卢湾区', '徐汇区', '长宁区', '静安区', '普陀区', '闸北区', '虹口区', '杨浦区', '闵行区', '宝山区', '嘉定区', '浦东新区', '金山区', '松江区', '青浦区', '南汇区', '奉贤区', '崇明县'],
  '南京市': ['玄武区', '白下区', '秦淮区', '建邺区', '鼓楼区', '下关区', '浦口区', '栖霞区', '雨花台区', '江宁区', '六合区', '溧水县', '高淳县'],
  '无锡市': ['崇安区', '南长区', '北塘区', '锡山区', '惠山区', '滨湖区', '江阴市', '宜兴市'],
  '徐州市': ['鼓楼区', '云龙区', '九里区', '贾汪区', '泉山区', '丰县', '沛县', '铜山县', '睢宁县', '新沂市', '邳州市'],
  '常州市': ['天宁区', '钟楼区', '戚墅堰区', '新北区', '武进区', '溧阳市', '金坛市'],
  '苏州市': ['沧浪区', '平江区', '金阊区', '虎丘区', '吴中区', '相城区', '常熟市', '张家港市', '昆山市', '吴江市', '太仓市'],
  '南通市': ['崇川区', '港闸区', '海安县', '如东县', '启东市', '如皋市', '通州市', '海门市'],
  '连云港市': ['连云区', '新浦区', '海州区', '赣榆县', '东海县', '灌云县', '灌南县'],
  '淮安市': ['清河区', '楚州区', '淮阴区', '清浦区', '涟水县', '洪泽县', '盱眙县', '金湖县'],
  '盐城市': ['亭湖区', '盐都区', '响水县', '滨海县', '阜宁县', '射阳县', '建湖县', '东台市', '大丰市'],
  '扬州市': ['广陵区', '邗江区', '维扬区', '宝应县', '仪征市', '高邮市', '江都市'],
  '镇江市': ['京口区', '润州区', '丹徒区', '丹阳市', '扬中市', '句容市'],
  '泰州市': ['海陵区', '高港区', '兴化市', '靖江市', '泰兴市', '姜堰市'],
  '宿迁市': ['宿城区', '宿豫区', '沭阳县', '泗阳县', '泗洪县'],
  '杭州市': ['上城区', '下城区', '江干区', '拱墅区', '西湖区', '滨江区', '萧山区', '余杭区', '桐庐县', '淳安县', '建德市', '富阳市', '临安市'],
  '宁波市': ['海曙区', '江东区', '江北区', '北仑区', '镇海区', '鄞州区', '象山县', '宁海县', '余姚市', '慈溪市', '奉化市'],
  '温州市': ['鹿城区', '龙湾区', '瓯海区', '洞头县', '永嘉县', '平阳县', '苍南县', '文成县', '泰顺县', '瑞安市', '乐清市'],
  '嘉兴市': ['秀城区', '秀洲区', '嘉善县', '海盐县', '海宁市', '平湖市', '桐乡市'],
  '湖州市': ['吴兴区', '南浔区', '德清县', '长兴县', '安吉县'],
  '绍兴市': ['越城区', '绍兴县', '新昌县', '诸暨市', '上虞市', '嵊州市'],
  '金华市': ['婺城区', '金东区', '武义县', '浦江县', '磐安县', '兰溪市', '义乌市', '东阳市', '永康市'],
  '衢州市': ['柯城区', '衢江区', '常山县', '开化县', '龙游县', '江山市'],
  '舟山市': ['定海区', '普陀区', '岱山县', '嵊泗县'],
  '台州市': ['椒江区', '黄岩区', '路桥区', '玉环县', '三门县', '天台县', '仙居县', '温岭市', '临海市'],
  '丽水市': ['莲都区', '青田县', '缙云县', '遂昌县', '松阳县', '云和县', '庆元县', '景宁畲族自治县', '龙泉市'],
  '合肥市': ['瑶海区', '庐阳区', '蜀山区', '包河区', '长丰县', '肥东县', '肥西县'],
  '芜湖市': ['镜湖区', '弋江区', '鸠江区', '三山区', '芜湖县', '繁昌县', '南陵县'],
  '蚌埠市': ['龙子湖区', '蚌山区', '禹会区', '淮上区', '怀远县', '五河县', '固镇县'],
  '淮南市': ['大通区', '田家庵区', '谢家集区', '八公山区', '潘集区', '凤台县'],
  '马鞍山市': ['金家庄区', '花山区', '雨山区', '当涂县'],
  '淮北市': ['杜集区', '相山区', '烈山区', '濉溪县'],
  '铜陵市': ['铜官山区', '狮子山区', '郊区', '铜陵县'],
  '安庆市': ['迎江区', '大观区', '宜秀区', '怀宁县', '枞阳县', '潜山县', '太湖县', '宿松县', '望江县', '岳西县', '桐城市'],
  '黄山市': ['屯溪区', '黄山区', '徽州区', '歙县', '休宁县', '黟县', '祁门县'],
  '滁州市': ['琅琊区', '南谯区', '来安县', '全椒县', '定远县', '凤阳县', '天长市', '明光市'],
  '阜阳市': ['颍州区', '颍东区', '颍泉区', '临泉县', '太和县', '阜南县', '颍上县', '颍上县'],
  '宿州市': ['埇桥区', '砀山县', '萧县', '灵璧县', '泗县'],
  '巢湖市': ['居巢区', '庐江县', '无为县', '含山县', '和县'],
  '六安市': ['金安区', '裕安区', '寿县', '霍邱县', '舒城县', '金寨县', '霍山县'],
  '亳州市': ['谯城区', '涡阳县', '蒙城县', '利辛县'],
  '池州市': ['贵池区', '东至县', '石台县', '青阳县'],
  '宣城市': ['宣州区', '郎溪县', '广德县', '泾县', '绩溪县', '旌德县', '宁国市'],
  '福州市': ['鼓楼区', '台江区', '仓山区', '马尾区', '晋安区', '闽侯县', '连江县', '罗源县', '闽清县', '永泰县', '平潭县', '福清市', '长乐市'],
  '厦门市': ['思明区', '海沧区', '湖里区', '集美区', '同安区', '翔安区'],
  '莆田市': ['城厢区', '涵江区', '荔城区', '秀屿区', '仙游县'],
  '三明市': ['梅列区', '三元区', '明溪县', '清流县', '宁化县', '大田县', '尤溪县', '沙县', '将乐县', '泰宁县', '建宁县', '永安市'],
  '泉州市': ['鲤城区', '丰泽区', '洛江区', '泉港区', '惠安县', '安溪县', '永春县', '德化县', '金门县', '石狮市', '晋江市', '南安市'],
  '漳州市': ['芗城区', '龙文区', '云霄县', '漳浦县', '诏安县', '长泰县', '东山县', '南靖县', '平和县', '华安县', '龙海市'],
  '南平市': ['延平区', '顺昌县', '浦城县', '光泽县', '松溪县', '政和县', '邵武市', '武夷山市', '建瓯市', '建阳市'],
  '龙岩市': ['新罗区', '长汀县', '永定县', '上杭县', '武平县', '连城县', '漳平市'],
  '宁德市': ['蕉城区', '霞浦县', '古田县', '屏南县', '寿宁县', '周宁县', '柘荣县', '福安市', '福鼎市'],
  '南昌市': ['东湖区', '西湖区', '青云谱区', '湾里区', '青山湖区', '南昌县', '新建县', '安义县', '进贤县'],
  '景德镇市': ['昌江区', '珠山区', '浮梁县', '乐平市'],
  '萍乡市': ['安源区', '湘东区', '莲花县', '上栗县', '芦溪县'],
  '九江市': ['庐山区', '浔阳区', '九江县', '武宁县', '修水县', '永修县', '德安县', '星子县', '都昌县', '湖口县', '彭泽县', '瑞昌市'],
  '新余市': ['渝水区', '分宜县'],
  '鹰潭市': ['月湖区', '余江县', '贵溪市'],
  '赣州市': ['章贡区', '赣县', '信丰县', '大余县', '上犹县', '崇义县', '安远县', '龙南县', '定南县', '全南县', '宁都县', '于都县', '兴国县', '会昌县', '寻乌县', '石城县', '瑞金市', '南康市'],
  '吉安市': ['吉州区', '青原区', '吉安县', '吉水县', '峡江县', '新干县', '永丰县', '泰和县', '遂川县', '万安县', '安福县', '永新县', '井冈山市'],
  '宜春市': ['袁州区', '奉新县', '万载县', '上高县', '宜丰县', '靖安县', '铜鼓县', '丰城市', '樟树市', '高安市'],
  '抚州市': ['临川区', '南城县', '黎川县', '南丰县', '崇仁县', '乐安县', '宜黄县', '金溪县', '资溪县', '东乡县', '广昌县'],
  '上饶市': ['信州区', '上饶县', '广丰县', '玉山县', '铅山县', '横峰县', '弋阳县', '余干县', '鄱阳县', '万年县', '婺源县', '德兴市'],
  '济南市': ['历下区', '市中区', '槐荫区', '天桥区', '历城区', '长清区', '平阴县', '济阳县', '商河县', '章丘市'],
  '青岛市': ['市南区', '市北区', '四方区', '黄岛区', '崂山区', '李沧区', '城阳区', '胶州市', '即墨市', '平度市', '胶南市', '莱西市'],
  '淄博市': ['淄川区', '张店区', '博山区', '临淄区', '周村区', '桓台县', '高青县', '沂源县'],
  '枣庄市': ['市中区', '薛城区', '峄城区', '台儿庄区', '山亭区', '滕州市'],
  '东营市': ['东营区', '河口区', '垦利县', '利津县', '广饶县'],
  '烟台市': ['芝罘区', '福山区', '牟平区', '莱山区', '长岛县', '龙口市', '莱阳市', '莱州市', '蓬莱市', '招远市', '栖霞市', '海阳市'],
  '潍坊市': ['潍城区', '寒亭区', '坊子区', '奎文区', '临朐县', '昌乐县', '青州市', '诸城市', '寿光市', '安丘市', '高密市', '昌邑市'],
  '济宁市': ['市中区', '任城区', '微山县', '鱼台县', '金乡县', '嘉祥县', '汶上县', '泗水县', '梁山县', '曲阜市', '兖州市', '邹城市'],
  '泰安市': ['泰山区', '岱岳区', '宁阳县', '东平县', '新泰市', '肥城市'],
  '威海市': ['环翠区', '文登市', '荣成市', '乳山市'],
  '日照市': ['东港区', '岚山区', '五莲县', '莒县'],
  '莱芜市': ['莱城区', '钢城区'],
  '临沂市': ['兰山区', '罗庄区', '河东区', '沂南县', '郯城县', '沂水县', '苍山县', '费县', '平邑县', '莒南县', '蒙阴县', '临沭县'],
  '德州市': ['德城区', '陵县', '宁津县', '庆云县', '临邑县', '齐河县', '平原县', '夏津县', '武城县', '乐陵市', '禹城市'],
  '聊城市': ['东昌府区', '阳谷县', '莘县', '茌平县', '东阿县', '冠县', '高唐县', '临清市'],
  '滨州市': ['滨城区', '惠民县', '阳信县', '无棣县', '沾化县', '博兴县', '邹平县'],
  '菏泽市': ['牡丹区', '曹县', '单县', '成武县', '巨野县', '郓城县', '鄄城县', '定陶县', '东明县'],
  '郑州市': ['中原区', '二七区', '管城回族区', '金水区', '上街区', '惠济区', '中牟县', '巩义市', '荥阳市', '新密市', '新郑市', '登封市'],
  '开封市': ['龙亭区', '顺河回族区', '鼓楼区', '禹王台区', '金明区', '杞县', '通许县', '尉氏县', '开封县', '兰考县'],
  '洛阳市': ['老城区', '西工区', '廛河回族区', '涧西区', '吉利区', '洛龙区', '孟津县', '新安县', '栾川县', '嵩县', '汝阳县', '宜阳县', '洛宁县', '伊川县', '偃师市'],
  '平顶山市': ['新华区', '卫东区', '石龙区', '湛河区', '宝丰县', '叶县', '鲁山县', '郏县', '舞钢市', '汝州市'],
  '安阳市': ['文峰区', '北关区', '殷都区', '龙安区', '安阳县', '汤阴县', '滑县', '内黄县', '林州市'],
  '鹤壁市': ['鹤山区', '山城区', '淇滨区', '浚县', '淇县'],
  '新乡市': ['红旗区', '卫滨区', '凤泉区', '牧野区', '新乡县', '获嘉县', '原阳县', '延津县', '封丘县', '长垣县', '卫辉市', '辉县市'],
  '焦作市': ['解放区', '中站区', '马村区', '山阳区', '修武县', '博爱县', '武陟县', '温县', '济源市', '沁阳市', '孟州市'],
  '濮阳市': ['华龙区', '清丰县', '南乐县', '范县', '台前县', '濮阳县'],
  '许昌市': ['魏都区', '许昌县', '鄢陵县', '襄城县', '禹州市', '长葛市'],
  '漯河市': ['源汇区', '郾城区', '召陵区', '舞阳县', '临颍县'],
  '三门峡市': ['湖滨区', '渑池县', '陕县', '卢氏县', '义马市', '灵宝市'],
  '南阳市': ['宛城区', '卧龙区', '南召县', '方城县', '西峡县', '镇平县', '内乡县', '淅川县', '社旗县', '唐河县', '新野县', '桐柏县', '邓州市'],
  '商丘市': ['梁园区', '睢阳区', '民权县', '睢县', '宁陵县', '柘城县', '虞城县', '夏邑县', '永城市'],
  '信阳市': ['浉河区', '平桥区', '罗山县', '光山县', '新县', '商城县', '固始县', '潢川县', '淮滨县', '息县'],
  '周口市': ['川汇区', '扶沟县', '西华县', '商水县', '沈丘县', '郸城县', '淮阳县', '太康县', '鹿邑县', '项城市'],
  '驻马店市': ['驿城区', '西平县', '上蔡县', '平舆县', '正阳县', '确山县', '泌阳县', '汝南县', '遂平县', '新蔡县'],
  '武汉市': ['江岸区', '江汉区', '硚口区', '汉阳区', '武昌区', '青山区', '洪山区', '东西湖区', '汉南区', '蔡甸区', '江夏区', '黄陂区', '新洲区'],
  '黄石市': ['黄石港区', '西塞山区', '下陆区', '铁山区', '阳新县', '大冶市'],
  '十堰市': ['茅箭区', '张湾区', '郧县', '郧西县', '竹山县', '竹溪县', '房县', '丹江口市'],
  '宜昌市': ['西陵区', '伍家岗区', '点军区', '猇亭区', '夷陵区', '远安县', '兴山县', '秭归县', '长阳土家族自治县', '五峰土家族自治县', '宜都市', '当阳市', '枝江市'],
  '襄樊市': ['襄城区', '樊城区', '襄阳区', '南漳县', '谷城县', '保康县', '老河口市', '枣阳市', '宜城市'],
  '鄂州市': ['梁子湖区', '华容区', '鄂城区'],
  '荆门市': ['东宝区', '掇刀区', '京山县', '沙洋县', '钟祥市'],
  '孝感市': ['孝南区', '孝昌县', '大悟县', '云梦县', '应城市', '安陆市', '汉川市'],
  '荆州市': ['沙市区', '荆州区', '公安县', '监利县', '江陵县', '石首市', '洪湖市', '松滋市'],
  '黄冈市': ['黄州区', '团风县', '红安县', '罗田县', '英山县', '浠水县', '蕲春县', '黄梅县', '麻城市', '武穴市'],
  '咸宁市': ['咸安区', '嘉鱼县', '通城县', '崇阳县', '通山县', '赤壁市'],
  '随州市': ['曾都区', '广水市'],
  '恩施土家族苗族自治州': ['恩施市', '利川市', '建始县', '巴东县', '宣恩县', '咸丰县', '来凤县', '鹤峰县'],
  '直辖行政单位': ['仙桃市', '潜江市', '天门市', '神农架林区'],
  '长沙市': ['芙蓉区', '天心区', '岳麓区', '开福区', '雨花区', '长沙县', '望城县', '宁乡县', '浏阳市'],
  '株洲市': ['荷塘区', '芦淞区', '石峰区', '天元区', '株洲县', '攸县', '茶陵县', '炎陵县', '醴陵市'],
  '湘潭市': ['雨湖区', '岳塘区', '湘潭县', '湘乡市', '韶山市'],
  '衡阳市': ['珠晖区', '雁峰区', '石鼓区', '蒸湘区', '南岳区', '衡阳县', '衡南县', '衡山县', '衡东县', '祁东县', '耒阳市', '常宁市'],
  '邵阳市': ['双清区', '大祥区', '北塔区', '邵东县', '新邵县', '邵阳县', '隆回县', '洞口县', '绥宁县', '新宁县', '城步苗族自治县', '武冈市'],
  '岳阳市': ['岳阳楼区', '云溪区', '君山区', '岳阳县', '华容县', '湘阴县', '平江县', '汨罗市', '临湘市'],
  '常德市': ['武陵区', '鼎城区', '安乡县', '汉寿县', '澧县', '临澧县', '桃源县', '石门县', '津市市'],
  '张家界市': ['永定区', '武陵源区', '慈利县', '桑植县'],
  '益阳市': ['资阳区', '赫山区', '南县', '桃江县', '安化县', '沅江市'],
  '郴州市': ['北湖区', '苏仙区', '桂阳县', '宜章县', '永兴县', '嘉禾县', '临武县', '汝城县', '桂东县', '安仁县', '资兴市'],
  '永州市': ['零陵区', '冷水滩区', '祁阳县', '东安县', '双牌县', '道县', '江永县', '宁远县', '蓝山县', '新田县', '江华瑶族自治县'],
  '怀化市': ['鹤城区', '中方县', '沅陵县', '辰溪县', '溆浦县', '会同县', '麻阳苗族自治县', '新晃侗族自治县', '芷江侗族自治县', '靖州苗族侗族自治县', '通道侗族自治县', '洪江市'],
  '娄底市': ['娄星区', '双峰县', '新化县', '冷水江市', '涟源市'],
  '湘西土家族苗族自治州': ['吉首市', '泸溪县', '凤凰县', '花垣县', '保靖县', '古丈县', '永顺县', '龙山县'],
  '广州市': ['荔湾区', '越秀区', '海珠区', '天河区', '白云区', '黄埔区', '番禺区', '花都区', '南沙区', '萝岗区', '增城市', '从化市'],
  '韶关市': ['武江区', '浈江区', '曲江区', '始兴县', '仁化县', '翁源县', '乳源瑶族自治县', '新丰县', '乐昌市', '南雄市'],
  '深圳市': ['罗湖区', '福田区', '南山区', '宝安区', '龙岗区', '盐田区'],
  '珠海市': ['香洲区', '斗门区', '金湾区'],
  '汕头市': ['龙湖区', '金平区', '濠江区', '潮阳区', '潮南区', '澄海区', '南澳县'],
  '佛山市': ['禅城区', '南海区', '顺德区', '三水区', '高明区'],
  '江门市': ['蓬江区', '江海区', '新会区', '台山市', '开平市', '鹤山市', '恩平市'],
  '湛江市': ['赤坎区', '霞山区', '坡头区', '麻章区', '遂溪县', '徐闻县', '廉江市', '雷州市', '吴川市'],
  '茂名市': ['茂南区', '茂港区', '电白县', '高州市', '化州市', '信宜市'],
  '肇庆市': ['端州区', '鼎湖区', '广宁县', '怀集县', '封开县', '德庆县', '高要市', '四会市'],
  '惠州市': ['惠城区', '惠阳区', '博罗县', '惠东县', '龙门县'],
  '梅州市': ['梅江区', '梅县', '大埔县', '丰顺县', '五华县', '平远县', '蕉岭县', '兴宁市'],
  '汕尾市': ['城区', '海丰县', '陆河县', '陆丰市'],
  '河源市': ['源城区', '紫金县', '龙川县', '连平县', '和平县', '东源县'],
  '阳江市': ['江城区', '阳西县', '阳东县', '阳春市'],
  '清远市': ['清城区', '佛冈县', '阳山县', '连山壮族瑶族自治县', '连南瑶族自治县', '清新县', '英德市', '连州市'],
  '东莞市': ['市辖区'],
  '中山市': ['市辖区'],
  '潮州市': ['湘桥区', '潮安县', '饶平县'],
  '揭阳市': ['榕城区', '揭东县', '揭西县', '惠来县', '普宁市'],
  '云浮市': ['云城区', '新兴县', '郁南县', '云安县', '罗定市'],
  '南宁市': ['兴宁区', '青秀区', '江南区', '西乡塘区', '良庆区', '邕宁区', '武鸣县', '隆安县', '马山县', '上林县', '宾阳县', '横县'],
  '柳州市': ['城中区', '鱼峰区', '柳南区', '柳北区', '柳江县', '柳城县', '鹿寨县', '融安县', '融水苗族自治县', '三江侗族自治县'],
  '桂林市': ['秀峰区', '叠彩区', '象山区', '七星区', '雁山区', '阳朔县', '临桂县', '灵川县', '全州县', '兴安县', '永福县', '灌阳县', '龙胜各族自治县', '资源县', '平乐县', '荔蒲县', '恭城瑶族自治县'],
  '梧州市': ['万秀区', '蝶山区', '长洲区', '苍梧县', '藤县', '蒙山县', '岑溪市'],
  '北海市': ['海城区', '银海区', '铁山港区', '合浦县'],
  '防城港市': ['港口区', '防城区', '上思县', '东兴市'],
  '钦州市': ['钦南区', '钦北区', '灵山县', '浦北县'],
  '贵港市': ['港北区', '港南区', '覃塘区', '平南县', '桂平市'],
  '玉林市': ['玉州区', '容县', '陆川县', '博白县', '兴业县', '北流市'],
  '百色市': ['右江区', '田阳县', '田东县', '平果县', '德保县', '靖西县', '那坡县', '凌云县', '乐业县', '田林县', '西林县', '隆林各族自治县'],
  '贺州市': ['八步区', '昭平县', '钟山县', '富川瑶族自治县'],
  '河池市': ['金城江区', '南丹县', '天峨县', '凤山县', '东兰县', '罗城仫佬族自治县', '环江毛南族自治县', '巴马瑶族自治县', '都安瑶族自治县', '大化瑶族自治县', '宜州市'],
  '来宾市': ['兴宾区', '忻城县', '象州县', '武宣县', '金秀瑶族自治县', '合山市'],
  '崇左市': ['江洲区', '扶绥县', '宁明县', '龙州县', '大新县', '天等县', '凭祥市'],
  '海口市': ['秀英区', '龙华区', '琼山区', '美兰区'],
  '三亚市': ['直辖县级行政单位', '五指山市', '琼海市', '儋州市', '文昌市', '万宁市', '东方市', '定安县', '屯昌县', '澄迈县', '临高县', '白沙黎族自治县', '昌江黎族自治县', '乐东黎族自治县', '陵水黎族自治县', '保亭黎族苗族自治县', '琼中黎族苗族自治县', '西沙群岛', '南沙群岛', '中沙群岛的岛礁及其海域'],
  '市辖区': ['万州区', '涪陵区', '渝中区', '大渡口区', '江北区', '沙坪坝区', '九龙坡区', '南岸区', '北碚区', '万盛区', '双桥区', '渝北区', '巴南区', '黔江区', '长寿区', '江津区', '合川区', '永川区', '永川区'],
  '县': ['綦江县', '潼南县', '铜梁县', '大足县', '荣昌县', '璧山县', '梁平县', '城口县', '丰都县', '垫江县', '武隆县', '忠县', '开县', '云阳县', '奉节县', '巫山县', '巫溪县', '石柱土家族自治县', '秀山土家族苗族自治县', '酉阳土家族苗族自治县', '彭水苗族土家族自治县'],
  '成都市': ['锦江区', '青羊区', '金牛区', '武侯区', '成华区', '龙泉驿区', '青白江区', '新都区', '温江区', '金堂县', '双流县', '郫县', '大邑县', '蒲江县', '新津县', '都江堰市', '彭州市', '邛崃市', '崇州市'],
  '自贡市': ['自流井区', '贡井区', '大安区', '沿滩区', '荣县', '富顺县'],
  '攀枝花市': ['东区', '西区', '仁和区', '米易县', '盐边县'],
  '泸州市': ['江阳区', '纳溪区', '龙马潭区', '泸县', '合江县', '叙永县', '古蔺县'],
  '德阳市': ['旌阳区', '中江县', '罗江县', '广汉市', '什邡市', '绵竹市'],
  '绵阳市': ['涪城区', '游仙区', '三台县', '盐亭县', '安县', '梓潼县', '北川羌族自治县', '平武县', '江油市'],
  '广元市': ['市中区', '元坝区', '朝天区', '旺苍县', '青川县', '剑阁县', '苍溪县'],
  '遂宁市': ['船山区', '安居区', '蓬溪县', '射洪县', '大英县'],
  '内江市': ['市中区', '东兴区', '威远县', '资中县', '隆昌县'],
  '乐山市': ['市中区', '沙湾区', '五通桥区', '金口河区', '犍为县', '井研县', '夹江县', '沐川县', '峨边彝族自治县', '马边彝族自治县', '峨眉山市'],
  '南充市': ['顺庆区', '高坪区', '嘉陵区', '南部县', '营山县', '蓬安县', '仪陇县', '西充县', '阆中市'],
  '眉山市': ['东坡区', '仁寿县', '彭山县', '洪雅县', '丹棱县', '青神县'],
  '宜宾市': ['翠屏区', '宜宾县', '南溪县', '江安县', '长宁县', '高县', '珙县', '筠连县', '兴文县', '屏山县'],
  '广安市': ['广安区', '岳池县', '武胜县', '邻水县', '华蓥市'],
  '达州市': ['通川区', '达县', '宣汉县', '开江县', '大竹县', '渠县', '万源市'],
  '雅安市': ['雨城区', '名山县', '荥经县', '汉源县', '石棉县', '天全县', '芦山县', '宝兴县'],
  '巴中市': ['巴州区', '通江县', '南江县', '平昌县'],
  '资阳市': ['雁江区', '安岳县', '乐至县', '简阳市'],
  '阿坝藏族羌族自治州': ['汶川县', '理县', '茂县', '松潘县', '九寨沟县', '金川县', '小金县', '黑水县', '马尔康县', '壤塘县', '阿坝县', '若尔盖县', '红原县'],
  '甘孜藏族自治州': ['康定县', '泸定县', '丹巴县', '九龙县', '雅江县', '道孚县', '炉霍县', '甘孜县', '新龙县', '德格县', '白玉县', '石渠县', '色达县', '理塘县', '巴塘县', '乡城县', '稻城县', '得荣县'],
  '凉山彝族自治州': ['西昌市', '木里藏族自治县', '盐源县', '德昌县', '会理县', '会东县', '宁南县', '普格县', '布拖县', '金阳县', '昭觉县', '喜德县', '冕宁县', '越西县', '甘洛县', '美姑县', '雷波县'],
  '贵阳市': ['南明区', '云岩区', '花溪区', '乌当区', '白云区', '小河区', '开阳县', '息烽县', '修文县', '清镇市'],
  '六盘水市': ['钟山区', '六枝特区', '水城县', '盘县'],
  '遵义市': ['红花岗区', '汇川区', '遵义县', '桐梓县', '绥阳县', '正安县', '道真仡佬族苗族自治县', '务川仡佬族苗族自治县', '凤冈县', '湄潭县', '余庆县', '习水县', '赤水市', '仁怀市'],
  '安顺市': ['西秀区', '平坝县', '普定县', '镇宁布依族苗族自治县', '关岭布依族苗族自治县', '紫云苗族布依族自治县'],
  '铜仁地区': ['铜仁市', '江口县', '玉屏侗族自治县', '石阡县', '思南县', '印江土家族苗族自治县', '德江县', '沿河土家族自治县', '松桃苗族自治县', '万山特区'],
  '黔西南布依族苗族自治州': ['兴义市', '兴仁县', '普安县', '晴隆县', '贞丰县', '望谟县', '册亨县', '安龙县'],
  '毕节地区': ['毕节市', '大方县', '黔西县', '金沙县', '织金县', '纳雍县', '威宁彝族回族苗族自治县', '赫章县'],
  '黔东南苗族侗族自治州': ['凯里市', '黄平县', '施秉县', '三穗县', '镇远县', '岑巩县', '天柱县', '锦屏县', '剑河县', '台江县', '黎平县', '榕江县', '从江县', '雷山县', '麻江县', '丹寨县'],
  '黔南布依族苗族自治州': ['都匀市', '福泉市', '荔波县', '贵定县', '瓮安县', '独山县', '平塘县', '罗甸县', '长顺县', '龙里县', '惠水县', '三都水族自治县'],
  '昆明市': ['五华区', '盘龙区', '官渡区', '西山区', '东川区', '呈贡县', '晋宁县', '富民县', '宜良县', '石林彝族自治县', '嵩明县', '禄劝彝族苗族自治县', '寻甸回族彝族自治县', '安宁市'],
  '曲靖市': ['麒麟区', '马龙县', '陆良县', '师宗县', '罗平县', '富源县', '会泽县', '沾益县', '宣威市'],
  '玉溪市': ['红塔区', '江川县', '澄江县', '通海县', '华宁县', '易门县', '峨山彝族自治县', '新平彝族傣族自治县', '元江哈尼族彝族傣族自治县'],
  '保山市': ['隆阳区', '施甸县', '腾冲县', '龙陵县', '昌宁县'],
  '昭通市': ['昭阳区', '鲁甸县', '巧家县', '盐津县', '大关县', '永善县', '绥江县', '镇雄县', '彝良县', '威信县', '水富县'],
  '丽江市': ['古城区', '玉龙纳西族自治县', '永胜县', '华坪县', '宁蒗彝族自治县'],
  '思茅市': ['翠云区', '普洱哈尼族彝族自治县', '墨江哈尼族自治县', '景东彝族自治县', '景谷傣族彝族自治县', '镇沅彝族哈尼族拉祜族自治县', '江城哈尼族彝族自治县', '孟连傣族拉祜族佤族自治县', '澜沧拉祜族自治县', '西盟佤族自治县'],
  '临沧市': ['临翔区', '凤庆县', '云县', '永德县', '镇康县', '双江拉祜族佤族布朗族傣族自治县', '耿马傣族佤族自治县', '沧源佤族自治县'],
  '楚雄彝族自治州': ['楚雄市', '双柏县', '牟定县', '南华县', '姚安县', '大姚县', '永仁县', '元谋县', '武定县', '禄丰县'],
  '红河哈尼族彝族自治州': ['个旧市', '开远市', '蒙自县', '屏边苗族自治县', '建水县', '石屏县', '弥勒县', '泸西县', '元阳县', '红河县', '金平苗族瑶族傣族自治县', '绿春县', '河口瑶族自治县'],
  '文山壮族苗族自治州': ['文山县', '砚山县', '西畴县', '麻栗坡县', '马关县', '丘北县', '广南县', '富宁县'],
  '西双版纳傣族自治州': ['景洪市', '勐海县', '勐腊县'],
  '大理白族自治州': ['大理市', '漾濞彝族自治县', '祥云县', '宾川县', '弥渡县', '南涧彝族自治县', '巍山彝族回族自治县', '永平县', '云龙县', '洱源县', '剑川县', '鹤庆县'],
  '德宏傣族景颇族自治州': ['瑞丽市', '潞西市', '梁河县', '盈江县', '陇川县'],
  '怒江傈僳族自治州': ['泸水县', '福贡县', '贡山独龙族怒族自治县', '兰坪白族普米族自治县'],
  '迪庆藏族自治州': ['香格里拉县', '德钦县', '维西傈僳族自治县'],
  '拉萨市': ['城关区', '林周县', '当雄县', '尼木县', '曲水县', '堆龙德庆县', '达孜县', '墨竹工卡县'],
  '昌都地区': ['昌都县', '江达县', '贡觉县', '类乌齐县', '丁青县', '察雅县', '八宿县', '左贡县', '芒康县', '洛隆县', '边坝县'],
  '山南地区': ['乃东县', '扎囊县', '贡嘎县', '桑日县', '琼结县', '曲松县', '措美县', '洛扎县', '加查县', '隆子县', '错那县', '浪卡子县'],
  '日喀则地区': ['日喀则市', '南木林县', '江孜县', '定日县', '萨迦县', '拉孜县', '昂仁县', '谢通门县', '白朗县', '仁布县', '康马县', '定结县', '仲巴县', '亚东县', '吉隆县', '聂拉木县', '萨嘎县', '岗巴县'],
  '那曲地区': ['那曲县', '嘉黎县', '比如县', '聂荣县', '安多县', '申扎县', '索县', '班戈县', '巴青县', '尼玛县'],
  '阿里地区': ['普兰县', '札达县', '噶尔县', '日土县', '革吉县', '改则县', '措勤县'],
  '林芝地区': ['林芝县', '工布江达县', '米林县', '墨脱县', '波密县', '察隅县', '朗县'],
  '西安市': ['新城区', '碑林区', '莲湖区', '灞桥区', '未央区', '雁塔区', '阎良区', '临潼区', '长安区', '蓝田县', '周至县', '户县', '高陵县'],
  '铜川市': ['王益区', '印台区', '耀州区', '宜君县'],
  '宝鸡市': ['渭滨区', '金台区', '陈仓区', '凤翔县', '岐山县', '扶风县', '眉县', '陇县', '千阳县', '麟游县', '凤县', '太白县'],
  '咸阳市': ['秦都区', '杨凌区', '渭城区', '三原县', '泾阳县', '乾县', '礼泉县', '永寿县', '彬县', '长武县', '旬邑县', '淳化县', '武功县', '兴平市'],
  '渭南市': ['临渭区', '华县', '潼关县', '大荔县', '合阳县', '澄城县', '蒲城县', '白水县', '富平县', '韩城市', '华阴市'],
  '延安市': ['宝塔区', '延长县', '延川县', '子长县', '安塞县', '志丹县', '吴起县', '甘泉县', '富县', '洛川县', '宜川县', '黄龙县', '黄陵县'],
  '汉中市': ['汉台区', '南郑县', '城固县', '洋县', '西乡县', '勉县', '宁强县', '略阳县', '镇巴县', '留坝县', '佛坪县'],
  '榆林市': ['榆阳区', '神木县', '府谷县', '横山县', '靖边县', '定边县', '绥德县', '米脂县', '佳县', '吴堡县', '清涧县', '子洲县'],
  '安康市': ['汉滨区', '汉阴县', '石泉县', '宁陕县', '紫阳县', '岚皋县', '平利县', '镇坪县', '旬阳县', '白河县'],
  '商洛市': ['商州区', '洛南县', '丹凤县', '商南县', '山阳县', '镇安县', '柞水县'],
  '兰州市': ['城关区', '七里河区', '西固区', '安宁区', '红古区', '永登县', '皋兰县', '榆中县'],
  '嘉峪关市': [''],
  '金昌市': ['金川区', '永昌县'],
  '白银市': ['白银区', '平川区', '靖远县', '会宁县', '景泰县'],
  '天水市': ['秦城区', '北道区', '清水县', '秦安县', '甘谷县', '武山县', '张家川回族自治县'],
  '武威市': ['凉州区', '民勤县', '古浪县', '天祝藏族自治县'],
  '张掖市': ['甘州区', '肃南裕固族自治县', '民乐县', '临泽县', '高台县', '山丹县'],
  '平凉市': ['崆峒区', '泾川县', '灵台县', '崇信县', '华亭县', '庄浪县', '静宁县'],
  '酒泉市': ['肃州区', '金塔县', '瓜州县', '肃北蒙古族自治县', '阿克塞哈萨克族自治县', '玉门市', '敦煌市'],
  '庆阳市': ['西峰区', '庆城县', '环县', '华池县', '合水县', '正宁县', '宁县', '镇原县'],
  '定西市': ['安定区', '通渭县', '陇西县', '渭源县', '临洮县', '漳县', '岷县'],
  '陇南市': ['武都区', '成县', '文县', '宕昌县', '康县', '西和县', '礼县', '徽县', '两当县'],
  '临夏回族自治州': ['临夏市', '临夏县', '康乐县', '永靖县', '广河县', '和政县', '东乡族自治县', '积石山保安族东乡族撒拉族自治县'],
  '甘南藏族自治州': ['合作市', '临潭县', '卓尼县', '舟曲县', '迭部县', '玛曲县', '碌曲县', '夏河县'],
  '西宁市': ['城东区', '城中区', '城西区', '城北区', '大通回族土族自治县', '湟中县', '湟源县'],
  '海东地区': ['平安县', '民和回族土族自治县', '乐都县', '互助土族自治县', '化隆回族自治县', '循化撒拉族自治县'],
  '海北藏族自治州': ['门源回族自治县', '祁连县', '海晏县', '刚察县'],
  '黄南藏族自治州': ['同仁县', '尖扎县', '泽库县', '河南蒙古族自治县'],
  '海南藏族自治州': ['共和县', '同德县', '贵德县', '兴海县', '贵南县'],
  '果洛藏族自治州': ['玛沁县', '班玛县', '甘德县', '达日县', '久治县', '玛多县'],
  '玉树藏族自治州': ['玉树县', '杂多县', '称多县', '治多县', '囊谦县', '曲麻莱县'],
  '海西蒙古族藏族自治州': ['格尔木市', '德令哈市', '乌兰县', '都兰县', '天峻县'],
  '银川市': ['兴庆区', '西夏区', '金凤区', '永宁县', '贺兰县', '灵武市'],
  '石嘴山市': ['大武口区', '惠农区', '平罗县'],
  '吴忠市': ['利通区', '盐池县', '同心县', '青铜峡市'],
  '固原市': ['原州区', '西吉县', '隆德县', '泾源县', '彭阳县'],
  '中卫市': ['沙坡头区', '中宁县', '海原县'],
  '乌鲁木齐市': ['天山区', '沙依巴克区', '新市区', '水磨沟区', '头屯河区', '达坂城区', '东山区', '乌鲁木齐县'],
  '克拉玛依市': ['独山子区', '克拉玛依区', '白碱滩区', '乌尔禾区'],
  '吐鲁番地区': ['吐鲁番市', '鄯善县', '托克逊县'],
  '哈密地区': ['哈密市', '巴里坤哈萨克自治县', '伊吾县'],
  '昌吉回族自治州': ['昌吉市', '阜康市', '米泉市', '呼图壁县', '玛纳斯县', '奇台县', '吉木萨尔县', '木垒哈萨克自治县'],
  '博尔塔拉蒙古自治州': ['博乐市', '精河县', '温泉县'],
  '巴音郭楞蒙古自治州': ['库尔勒市', '轮台县', '尉犁县', '若羌县', '且末县', '焉耆回族自治县', '和静县', '和硕县', '博湖县'],
  '阿克苏地区': ['阿克苏市', '温宿县', '库车县', '沙雅县', '新和县', '拜城县', '乌什县', '阿瓦提县', '柯坪县'],
  '克孜勒苏柯尔克孜自治州': ['阿图什市', '阿克陶县', '阿合奇县', '乌恰县'],
  '喀什地区': ['喀什市', '疏附县', '疏勒县', '英吉沙县', '泽普县', '莎车县', '叶城县', '麦盖提县', '岳普湖县', '伽师县', '巴楚县', '塔什库尔干塔吉克自治县'],
  '和田地区': ['和田市', '和田县', '墨玉县', '皮山县', '洛浦县', '策勒县', '于田县', '民丰县'],
  '伊犁哈萨克': ['伊宁市', '奎屯市', '伊宁县', '察布查尔锡伯自治县', '霍城县', '巩留县', '新源县', '昭苏县', '特克斯县', '尼勒克县'],
  '塔城地区': ['塔城市', '乌苏市', '额敏县', '沙湾县', '托里县', '裕民县', '和布克赛尔蒙古自治县'],
  '阿勒泰地区': ['阿勒泰市', '布尔津县', '富蕴县', '福海县', '哈巴河县', '青河县', '吉木乃县'],
  '石河子市': [''],
  '阿拉尔市': [''],
  '图木舒克市': [''],
  '五家渠市': ['']
};

/***/ }),
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(201)
)

/* script */
__vue_exports__ = __webpack_require__(175)

/* template */
var __vue_template__ = __webpack_require__(224)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/example/picker/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-fc70780c"
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
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var PICKER_DATA = exports.PICKER_DATA = {
    list: [{ name: '2012', value: 0 }, { name: '后天', value: 1 }, { name: '星际穿越', value: 2 }, { name: '星际迷航', value: 3 }, { name: 'X战警', value: 4 }, { name: '盗梦空间', value: 5 }, { name: '源代码', value: 6 }, { name: '黑客帝国', value: 7 }, { name: '超验骇客', value: 8 }, { name: '火星救援', value: 9 }, { name: '阿凡达', value: 10 }, { name: '普罗米修斯', value: 11 }],
    defaultValue: { name: '盗梦空间', value: 6 },
    displayValue: function displayValue(item) {
        return item.name;
    }
};

/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(129);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
exports.default = new Vue(_index2.default);

/***/ }),
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(195)
)

/* script */
__vue_exports__ = __webpack_require__(176)

/* template */
var __vue_template__ = __webpack_require__(216)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/example/picker/picker-3.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-57ca8fbc"
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
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(34);

var _data = __webpack_require__(151);

var _address = __webpack_require__(115);

var _picker = __webpack_require__(161);

var _picker2 = _interopRequireDefault(_picker);

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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            data: _data.PICKER_DATA,
            visible: false,
            visible3: false,
            selectedData: _data.PICKER_DATA.defaultValue,
            address: '',
            defaultAddress: ['湖南省', '长沙市', '开福区']
        };
    },
    created: function created() {
        this.address = this.defaultAddress.join('/');
    },


    methods: {
        handleBottom: function handleBottom(visible) {
            this.visible = visible;
        },
        handleChange: function handleChange(data) {
            this.selectedData = data;
        },
        handleCancel: function handleCancel() {
            this.$refs.wxPopup.hide();
        },
        handleFinish: function handleFinish() {
            this.$refs.wxPopup.hide();
        },
        handleChangeAddress: function handleChangeAddress(address) {
            this.address = address.join('/');
        },
        confirmAddressPicker: function confirmAddressPicker(address) {
            this.visible3 = false;
            this.address = address.join('/');
        },
        cancelAddressPicker: function cancelAddressPicker() {
            this.visible3 = false;
        }
    },
    components: { WxPicker: _index.WxPicker, WxButton: _index.WxButton, WxPopup: _index.WxPopup, Picker3: _picker2.default, WxField: _index.WxField }
};

/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(34);

var _address = __webpack_require__(115);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            visible: false,
            provins: {},
            citys: {},
            areas: {},
            address: []
        };
    },


    props: ['defaultValue', 'visible'],

    created: function created() {
        this.address = this.defaultValue;
        this.initDefaultData();
    },


    methods: {
        initDefaultData: function initDefaultData() {
            this.provins = {
                list: _address.provins,
                defaultValue: this.defaultValue[0],
                displayValue: function displayValue(name) {
                    return name;
                }
            };
            this.citys = {
                list: _address.citys[this.defaultValue[0]],
                defaultValue: this.defaultValue[1],
                displayValue: function displayValue(name) {
                    return name;
                }
            };
            this.areas = {
                list: _address.areas[this.defaultValue[1]],
                defaultValue: this.defaultValue[2],
                displayValue: function displayValue(name) {
                    return name;
                }
            };
        },
        handleChangeProvin: function handleChangeProvin(provin) {
            this.provins = {
                list: _address.provins,
                defaultValue: provin,
                displayValue: function displayValue(name) {
                    return name;
                }
            };
            this.citys = {
                list: _address.citys[provin],
                defaultValue: _address.citys[provin][0],
                displayValue: function displayValue(name) {
                    return name;
                }
            };
            this.areas = {
                list: _address.areas[_address.citys[provin][0]],
                defaultValue: _address.areas[_address.citys[provin][0]][0],
                displayValue: function displayValue(name) {
                    return name;
                }
            };
            this.address = [];
            this.address.push(provin);
            this.address.push(_address.citys[provin][0]);
            this.address.push(_address.areas[_address.citys[provin][0]][0]);
            this.$emit('wxChange', this.address);
        },
        handleChangeCity: function handleChangeCity(city) {
            this.address[1] = city;
            this.address[2] = _address.areas[city][0];
            this.areas = {
                list: _address.areas[city],
                defaultValue: _address.areas[city][0],
                displayValue: function displayValue(name) {
                    return name;
                }
            };
            this.$emit('wxChange', this.address);
        },
        handleChangeArea: function handleChangeArea(area) {
            this.address[2] = area;
            this.$emit('wxChange', this.address);
        },
        handleBottom: function handleBottom() {
            this.$emit('wxCancel');
        },
        handleFinish: function handleFinish() {
            var _this = this;

            this.$refs.wxPopup.hide(function () {
                _this.$emit('wxConfirm', _this.address);
            });
        },
        handleCancel: function handleCancel() {
            var _this2 = this;

            this.$refs.wxPopup.hide(function () {
                _this2.$emit('wxCancel');
            });
        }
    },
    components: { WxPicker: _index.WxPicker, WxButton: _index.WxButton, WxPopup: _index.WxPopup }
};

/***/ }),
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */
/***/ (function(module, exports) {

module.exports = {
  "flex": {
    "flexDirection": "row"
  },
  "flex-1": {
    "flex": 1
  },
  "btn-wrap": {
    "backgroundColor": "#cccccc",
    "height": "88",
    "fontSize": "38",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "btn": {
    "lineHeight": "88",
    "height": "88",
    "width": "100",
    "textAlign": "center",
    "color": "#007aff",
    "fontSize": "32"
  }
}

/***/ }),
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */
/***/ (function(module, exports) {

module.exports = {
  "wrap": {
    "flexDirection": "column",
    "alignItems": "center"
  },
  "button": {
    "marginTop": "60"
  },
  "btn-wrap": {
    "backgroundColor": "#cccccc",
    "height": "88",
    "fontSize": "38",
    "flexDirection": "row",
    "justifyContent": "space-between",
    "alignItems": "center"
  },
  "btn": {
    "lineHeight": "88",
    "height": "88",
    "width": "100",
    "textAlign": "center",
    "color": "#007aff",
    "fontSize": "32"
  }
}

/***/ }),
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-demo"]
  }, [_c('wx-popup', {
    ref: "wxPopup",
    attrs: {
      "visible": _vm.visible,
      "position": "bottom",
      "hasOverley": true,
      "closeOnClickMask": false,
      "height": "488px"
    },
    on: {
      "wxChange": _vm.handleBottom
    }
  }, [_c('div', [_c('div', {
    staticClass: ["btn-wrap"]
  }, [_c('text', {
    staticClass: ["btn"],
    on: {
      "click": _vm.handleCancel
    }
  }, [_vm._v("取消")]), _c('text', {
    staticClass: ["btn"],
    on: {
      "click": _vm.handleFinish
    }
  }, [_vm._v("完成")])]), _c('div', {
    staticClass: ["flex"]
  }, [_c('wx-picker', {
    staticClass: ["flex-1"],
    attrs: {
      "data": _vm.provins,
      "visible": _vm.visible
    },
    on: {
      "wxChange": _vm.handleChangeProvin
    }
  }), _c('wx-picker', {
    staticClass: ["flex-1"],
    attrs: {
      "data": _vm.citys,
      "visible": _vm.visible
    },
    on: {
      "wxChange": _vm.handleChangeCity
    }
  }), _c('wx-picker', {
    staticClass: ["flex-1"],
    attrs: {
      "data": _vm.areas,
      "visible": _vm.visible
    },
    on: {
      "wxChange": _vm.handleChangeArea
    }
  })], 1)])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-demo"]
  }, [_c('wx-popup', {
    ref: "wxPopup",
    attrs: {
      "visible": _vm.visible,
      "position": "bottom",
      "hasOverley": true,
      "height": "488px"
    },
    on: {
      "wxChange": _vm.handleBottom
    }
  }, [_c('div', [_c('div', {
    staticClass: ["btn-wrap"]
  }, [_c('text', {
    staticClass: ["btn"],
    on: {
      "click": _vm.handleCancel
    }
  }, [_vm._v("取消")]), _c('text', {
    staticClass: ["btn"],
    on: {
      "click": _vm.handleFinish
    }
  }, [_vm._v("完成")])]), _c('wx-picker', {
    attrs: {
      "data": _vm.data,
      "visible": _vm.visible
    },
    on: {
      "wxChange": _vm.handleChange
    }
  })], 1)]), _c('Picker3', {
    attrs: {
      "defaultValue": _vm.defaultAddress,
      "visible": _vm.visible3
    },
    on: {
      "wxCancel": _vm.cancelAddressPicker,
      "wxConfirm": _vm.confirmAddressPicker,
      "wxChange": _vm.handleChangeAddress
    }
  }), _c('div', {
    staticClass: ["wrap"]
  }, [_c('wx-field', {
    attrs: {
      "label": "最喜欢的电影",
      "labelPosition": "top",
      "placeholder": "请选择电影",
      "width": "690px",
      "disabled": true,
      "hasArrow": true,
      "height": "200px"
    },
    on: {
      "wxClick": function($event) {
        _vm.visible = true
      }
    },
    model: {
      value: (_vm.selectedData.name),
      callback: function($$v) {
        _vm.$set(_vm.selectedData, "name", $$v)
      },
      expression: "selectedData.name"
    }
  }), _c('wx-field', {
    attrs: {
      "label": "通讯地址",
      "labelPosition": "top",
      "placeholder": "请选择地址",
      "width": "690px",
      "disabled": true,
      "hasArrow": true,
      "height": "200px"
    },
    on: {
      "wxClick": function($event) {
        _vm.visible3 = true
      }
    },
    model: {
      value: (_vm.address),
      callback: function($$v) {
        _vm.address = $$v
      },
      expression: "address"
    }
  })], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.native.js.map