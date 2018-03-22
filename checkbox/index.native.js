// { "framework": "Vue" }

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["npm/weex-droplet-ui/example/checkbox/index"] = factory();
	else
		root["npm/weex-droplet-ui/example/checkbox/index"] = factory();
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
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(2);

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var width = weex.config.env.deviceWidth;
var height = weex.config.env.deviceHeight;
var platform = weex.config.env.platform.toLowerCase();
var appName = weex.config.env.appName;

var mixins = {
    methods: {
        getPageHeight: function getPageHeight() {
            if (platform === 'android') {
                return 750 / width * height;
            }
            return height;
        },


        /**
         * ios和安卓的定位不同，所以导致定位位置不一样
         * @return {Object} top and bottom
         */
        getPosition: function getPosition() {

            var isProd = platform === 'ios' && appName !== 'WeexDemo';
            return {
                top: isProd ? '-40px' : '0px',
                bottom: isProd ? '36px' : '0px'
            };
        }
    }
};
Vue.mixin(mixins);

/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(9)
)

/* script */
__vue_exports__ = __webpack_require__(8)

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
/* 7 */
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

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _alias = __webpack_require__(4);

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

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = {
  "icon-font": {
    "fontFamily": "dropletUiIconfont",
    "color": "#4d4d4d",
    "fontSize": "32"
  }
}

/***/ }),
/* 10 */
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
/* 11 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["icon-font"],
    style: _vm.iconStyle
  }, [_vm._v(_vm._s(_vm.Icon[_vm.name]))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(17);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(26)
)

/* script */
__vue_exports__ = __webpack_require__(21)

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
/* 18 */
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(27)
)

/* script */
__vue_exports__ = __webpack_require__(23)

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _props;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
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
        blur: function blur() {
            this.$emit('wxBlur', this.inputValue);
        },
        input: function input(e) {
            this.inputValue = e.value;
            this.$emit('input', e.value);
            this.$emit('wxInput', this.inputValue);
        }
    }
};

/***/ }),
/* 22 */
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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _wxIcon = __webpack_require__(0);

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
/* 25 */
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
/* 26 */
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
/* 27 */
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
/* 28 */
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
/* 29 */
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
/* 30 */
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
/* 31 */
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
/* 32 */
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
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.WxPicker = exports.WxRange = exports.WxProgress = exports.WxScrollerbar = exports.WxIndexlist = exports.WxIcon = exports.WxSearch = exports.WxLoading = exports.WxActionsheet = exports.WxPopup = exports.WxInput = exports.WxField = exports.WxRadio = exports.WxCheckbox = exports.WxCell = exports.WxTabbar = exports.WxNavbar = exports.WxHeader = exports.WxDialog = exports.WxButton = undefined;

var _wxButton = __webpack_require__(3);

var _wxButton2 = _interopRequireDefault(_wxButton);

var _wxDialog = __webpack_require__(37);

var _wxDialog2 = _interopRequireDefault(_wxDialog);

var _wxHeader = __webpack_require__(39);

var _wxHeader2 = _interopRequireDefault(_wxHeader);

var _wxNavbar = __webpack_require__(41);

var _wxNavbar2 = _interopRequireDefault(_wxNavbar);

var _wxTabbar = __webpack_require__(47);

var _wxTabbar2 = _interopRequireDefault(_wxTabbar);

var _wxCell = __webpack_require__(35);

var _wxCell2 = _interopRequireDefault(_wxCell);

var _wxCheckbox = __webpack_require__(36);

var _wxCheckbox2 = _interopRequireDefault(_wxCheckbox);

var _wxRadio = __webpack_require__(44);

var _wxRadio2 = _interopRequireDefault(_wxRadio);

var _wxField = __webpack_require__(38);

var _wxField2 = _interopRequireDefault(_wxField);

var _wxInput = __webpack_require__(13);

var _wxInput2 = _interopRequireDefault(_wxInput);

var _wxPopup = __webpack_require__(43);

var _wxPopup2 = _interopRequireDefault(_wxPopup);

var _wxActionsheet = __webpack_require__(34);

var _wxActionsheet2 = _interopRequireDefault(_wxActionsheet);

var _wxLoading = __webpack_require__(14);

var _wxLoading2 = _interopRequireDefault(_wxLoading);

var _wxSearch = __webpack_require__(16);

var _wxSearch2 = _interopRequireDefault(_wxSearch);

var _wxIcon = __webpack_require__(0);

var _wxIcon2 = _interopRequireDefault(_wxIcon);

var _wxIndexlist = __webpack_require__(40);

var _wxIndexlist2 = _interopRequireDefault(_wxIndexlist);

var _wxScrollerbar = __webpack_require__(46);

var _wxScrollerbar2 = _interopRequireDefault(_wxScrollerbar);

var _wxProgress = __webpack_require__(15);

var _wxProgress2 = _interopRequireDefault(_wxProgress);

var _wxRange = __webpack_require__(45);

var _wxRange2 = _interopRequireDefault(_wxRange);

var _wxPicker = __webpack_require__(42);

var _wxPicker2 = _interopRequireDefault(_wxPicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.WxButton = _wxButton2.default;
exports.WxDialog = _wxDialog2.default;
exports.WxHeader = _wxHeader2.default;
exports.WxNavbar = _wxNavbar2.default;
exports.WxTabbar = _wxTabbar2.default;
exports.WxCell = _wxCell2.default;
exports.WxCheckbox = _wxCheckbox2.default;
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

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(49);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(50);

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

var _index = __webpack_require__(51);

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

var _index = __webpack_require__(52);

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

var _index = __webpack_require__(53);

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

var _index = __webpack_require__(54);

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

var _index = __webpack_require__(55);

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

var _index = __webpack_require__(56);

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

var _index = __webpack_require__(57);

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

var _index = __webpack_require__(58);

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

var _index = __webpack_require__(59);

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

var _index = __webpack_require__(60);

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

var _index = __webpack_require__(61);

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

var _index = __webpack_require__(62);

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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(79)
)

/* script */
__vue_exports__ = __webpack_require__(63)

/* template */
var __vue_template__ = __webpack_require__(93)
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(87)
)

/* script */
__vue_exports__ = __webpack_require__(64)

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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(86)
)

/* script */
__vue_exports__ = __webpack_require__(65)

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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(80)
)

/* script */
__vue_exports__ = __webpack_require__(66)

/* template */
var __vue_template__ = __webpack_require__(94)
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
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(88)
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(83)
)

/* script */
__vue_exports__ = __webpack_require__(68)

/* template */
var __vue_template__ = __webpack_require__(97)
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(82)
)

/* script */
__vue_exports__ = __webpack_require__(69)

/* template */
var __vue_template__ = __webpack_require__(96)
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(85)
)

/* script */
__vue_exports__ = __webpack_require__(70)

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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(90)
)

/* script */
__vue_exports__ = __webpack_require__(71)

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
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(77)
)

/* script */
__vue_exports__ = __webpack_require__(72)

/* template */
var __vue_template__ = __webpack_require__(91)
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
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(84)
)

/* script */
__vue_exports__ = __webpack_require__(73)

/* template */
var __vue_template__ = __webpack_require__(98)
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(89)
)

/* script */
__vue_exports__ = __webpack_require__(74)

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
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(81)
)

/* script */
__vue_exports__ = __webpack_require__(75)

/* template */
var __vue_template__ = __webpack_require__(95)
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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(78)
)

/* script */
__vue_exports__ = __webpack_require__(76)

/* template */
var __vue_template__ = __webpack_require__(92)
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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(1);

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

            var posBottom = Number(this.getPosition().bottom.replace('px', ''));
            var styleObj = { 'height': totalHeight + 'px', 'bottom': '-' + (totalHeight - posBottom) + 'px' };

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
/* 64 */
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

exports.default = {
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
            this.$emit('wxClick', e);
        }
    }
};

/***/ }),
/* 65 */
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

exports.default = {
    props: {
        defaultChecked: {
            type: Boolean,
            default: false
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
            checked: false
        };
    },
    created: function created() {
        this.checked = this.defaultChecked;
    },


    methods: {
        handleClick: function handleClick() {
            if (this.disabled) return;
            this.checked = !this.checked;
            this.$emit('input', this.checked);
            this.$emit('wxChange', this.checked);
        }
    }
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

__webpack_require__(1);

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

exports.default = {
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
        cancel: function cancel() {
            var _this = this;

            if (this.useDefaultFooter) {
                this.hideDialog(function () {
                    _this.$emit('cancel');
                });
                return;
            }

            this.$emit('cancel');
        },
        confirm: function confirm() {
            var _this2 = this;

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
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mixins = __webpack_require__(2);

var _mixins2 = _interopRequireDefault(_mixins);

var _wxIcon = __webpack_require__(0);

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
            fieldStyles: {}
        };
    },
    created: function created() {
        this.setStyle();
    },

    watch: {
        'value': function value() {
            if (this.value != '') {
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
                color: this.value == '' ? '#999999' : '#333333'
            };
            this.cliTextStyles = Object.assign({}, cliTextCss);

            if (this.titleWidth != null) {
                // textTitleStyles 样式
                var titleStyles = {
                    width: this.titleWidth
                };
                this.textTitleStyles = Object.assign({}, titleStyles);
            }
        },
        handleChange: function handleChange(e) {
            this.$emit('input', e.value);
        },
        blur: function blur() {
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
/* 68 */
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

exports.default = {
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
        handleClick: function handleClick() {
            if (this.useDefaultBack) {
                this.$router.back();
            } else {
                this.$emit('wxBack');
            }
        }
    }
};

/***/ }),
/* 69 */
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

var modal = weex.requireModule('modal');
var animation = weex.requireModule('animation');
var dom = weex.requireModule('dom');

exports.default = {
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
/* 70 */
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
            if (item.index === this.selectedTab.index) {
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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _is = __webpack_require__(48);

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
/* 72 */
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
        hide: function hide() {
            var _this = this;

            var tm = setTimeout(function () {
                _this.$emit('wxChange', false);
                clearTimeout(tm);
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
/* 73 */
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

exports.default = {
    props: {
        size: {
            type: String,
            default: '50px'
        },
        align: {
            type: String,
            default: 'left'
        },
        items: {
            type: Array,
            default: function _default() {
                return [];
            },
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
            textStyles: {}
        };
    },
    created: function created() {
        this.setCheckedStyle();
        this.setTextStyle();
    },


    methods: {
        setTextStyle: function setTextStyle() {
            this.textStyles = {
                color: this.textColor,
                fontSize: this.textFontSize
            };
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
            this.items.forEach(function (el) {
                el.checked = false;
            });
            item.checked = true;
            this.$emit('wxChange', item);
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            data: {
                width: 0
            },
            circleSize: '60px'
        };
    },
    created: function created() {
        this.initStyle();
        this.data.width = Number(this._innerStyle.width.replace('px', ''));
    },


    methods: {
        initStyle: function initStyle() {
            // _innerStyle
            var base = { width: this.width, height: this.height };
            this._innerStyle = Object.assign({}, this.innerStyle, base);
            console.log(this._innerStyle);

            // _circleStyle
            this.circleStyle.width = this.circleStyle.width || this.circleSize;
            this.circleStyle.height = this.circleStyle.height || this.circleSize;
            var circleSize = Number(this.circleStyle.width.replace('px', ''));
            var h = Number(this._innerStyle.height.replace('px', ''));
            var v = circleSize / 2;
            this._circleStyle = Object.assign({}, this.circleStyle, {
                left: -v + 'px',
                top: -(v - h / 2) + 'px',
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

var dom = weex.requireModule('dom');

exports.default = {
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
        this.scrollStyle = {
            width: this.getIsVertical() ? this.itemWidth : '750px',
            height: this.height
        };
        this.getData();
        // this.deviceHeight = weex.config.env.deviceHeight
        this.getCount();
        // 最大隐藏个数（共37条，一页10条，能隐藏37-10条）
        this.maxHidden = this.items.length - this.count;
    },


    methods: {
        getData: function getData() {
            this.data = {
                pheight: Number(this.height.replace('px', '')),
                cwidth: Number(this.itemWidth.replace('px', '')),
                cheight: Number(this.itemHeight.replace('px', ''))
            };
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
            this.selectIndex = index;
            if (!index) return;
            var middle = Math.floor(this.count / 2);
            if (index >= middle) {
                this.hiddenCount = index - middle;
                this.hiddenCount = this.getCanMoves();
                this.scrollTo(-this.hiddenCount * this.data.cheight);
            } else {
                this.hiddenCount = 0;
                this.scrollTo(0);
            }
            this.$emit('wxChange', this.items[index]);
        },


        /**
         * 获取能移动多少条，不能超过总条数
         */
        getCanMoves: function getCanMoves() {
            return this.hiddenCount > this.maxHidden ? this.maxHidden : this.hiddenCount;
        },
        scrollTo: function scrollTo(elHeight) {
            var index = elHeight / this.data.cheight;
            if (index > 0) {
                var el = this.$refs['item' + (13 - index)][0];
                dom.scrollToElement(el, {});
            } else {
                var _el = this.$refs['item' + (0 - index)][0];
                dom.scrollToElement(_el, {});
            }
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

__webpack_require__(1);

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
                'bottom': this.getPosition().bottom,
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

/***/ }),
/* 77 */
/***/ (function(module, exports) {

module.exports = {
  "wx-overlay": {
    "position": "fixed",
    "top": 0,
    "left": 0,
    "bottom": 0,
    "right": 0,
    "zIndex": 1000,
    "backgroundColor": "rgba(0,0,0,0.3)"
  },
  "wx-popup": {
    "backgroundColor": "#ffffff",
    "position": "fixed",
    "zIndex": 1001
  }
}

/***/ }),
/* 78 */
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
/* 79 */
/***/ (function(module, exports) {

module.exports = {
  "wx-actionsheet-mask": {
    "backgroundColor": "rgba(0,0,0,0.4)",
    "position": "fixed",
    "left": 0,
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
/* 80 */
/***/ (function(module, exports) {

module.exports = {
  "wx-dialog": {
    "backgroundColor": "rgba(0,0,0,0.35)",
    "position": "fixed",
    "left": 0,
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
/* 81 */
/***/ (function(module, exports) {

module.exports = {
  "wx-scroller": {
    "backgroundColor": "#969696"
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
  "select-cell": {
    "flexDirection": "row",
    "justifyContent": "center",
    "alignItems": "center",
    "backgroundColor": "#ffffff"
  }
}

/***/ }),
/* 82 */
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
/* 83 */
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
/* 84 */
/***/ (function(module, exports) {

module.exports = {
  "wx-radio-items": {
    "flexDirection": "row"
  },
  "wx-radio-item": {
    "flexDirection": "row",
    "alignItems": "center",
    "paddingRight": "20"
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
/* 85 */
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
/* 86 */
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
/* 87 */
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
    "width": "36",
    "height": "34",
    "paddingLeft": "20"
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
/* 88 */
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
    "flex": 1
  },
  "wx-cli-text": {
    "color": "#999999",
    "fontSize": "32",
    "flexWrap": "nowrap",
    "paddingTop": "30"
  },
  "wx-unit": {
    "fontSize": "32",
    "width": "50"
  },
  "wx-enter": {
    "color": "#7A818B",
    "fontSize": "32",
    "marginTop": "30"
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
  },
  "iconfont": {
    "fontFamily": "iconfont"
  }
}

/***/ }),
/* 89 */
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
    "zIndex": 100,
    "boxShadow": "0 1px 3px rgba(0,0,0,.4)"
  }
}

/***/ }),
/* 90 */
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
/* 91 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-container"]
  }, [(_vm.visible && _vm.hasOverley) ? _c('div', {
    ref: "overlay",
    staticClass: ["wx-overlay"],
    on: {
      "click": _vm.hide
    }
  }) : _vm._e(), (_vm.visible) ? _c('div', {
    ref: "popup",
    staticClass: ["wx-popup"],
    style: _vm.popupStyles
  }, [_vm._t("default")], 2) : _vm._e()])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 92 */
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
/* 93 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-actionsheet"]
  }, [(_vm.showActionsheet) ? _c('div', {
    ref: "sheetMask",
    staticClass: ["wx-actionsheet-mask"],
    style: _vm.getPosition(),
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
/* 94 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.visible) ? _c('div', {
    ref: "dialog",
    staticClass: ["wx-dialog"],
    class: [_vm.useDefaultFooter ? '' : 'opacityFull'],
    style: _vm.getPosition()
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
/* 95 */
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
      class: [_vm.selectIndex == index ? 'select-cell' : 'wx-cell'],
      style: {
        width: _vm.itemWidth,
        height: _vm.itemHeight
      },
      on: {
        "click": function($event) {
          _vm.changeTab(index)
        }
      }
    }, [_c('text', {
      staticClass: ["wx-text"]
    }, [_vm._v(_vm._s(item))])])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 96 */
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
/* 97 */
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
/* 98 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-radio-items"]
  }, _vm._l((_vm.items), function(item) {
    return _c('div', {
      staticClass: ["wx-radio-item"],
      on: {
        "click": function($event) {
          _vm.handleClick(item)
        }
      }
    }, [(_vm.align === 'left') ? _c('text', {
      staticClass: ["wx-radio-label-right"],
      style: _vm.textStyles
    }, [_vm._v(_vm._s(item.label))]) : _vm._e(), _c('div', {
      staticClass: ["wx-radio"],
      class: [item.checked ? 'wx-radio-checked' : 'wx-radio-nochecked'],
      style: _vm.getRadioStyle(item)
    }, [(item.checked) ? _c('text', {
      staticClass: ["checked"],
      style: _vm.checkedStyle
    }) : _vm._e()]), (_vm.align === 'right') ? _c('text', {
      staticClass: ["wx-radio-label-left"],
      style: _vm.textStyles
    }, [_vm._v(_vm._s(item.label))]) : _vm._e()])
  }))
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 99 */
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
/* 100 */
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
    style: {
      'border-color': _vm.checked ? _vm.checkedColor : '#DCDCDC'
    }
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
/* 101 */
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
/* 102 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-field"],
    style: _vm.fieldStyles,
    on: {
      "click": _vm.clickHandler
    }
  }, [_c('text', {
    class: [_vm.labelPosition == 'top' ? 'wx-text-top' : 'wx-text'],
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
    staticClass: ["wx-cli-text"],
    style: _vm.cliTextStyles
  }, [_vm._v(_vm._s(_vm.value == '' ? _vm.placeholder : _vm.value))]) : _vm._e(), (_vm.unit) ? _c('text', {
    staticClass: ["wx-unit"]
  }, [_vm._v(_vm._s(_vm.unit))]) : _vm._e(), (_vm.hasArrow) ? _c('wx-icon', {
    staticClass: ["iconfont", "wx-enter"],
    attrs: {
      "name": "enter"
    }
  }) : _vm._e()], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-range"]
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
/* 104 */
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
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* script */
__vue_exports__ = __webpack_require__(153)

/* template */
var __vue_template__ = __webpack_require__(193)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/example/checkbox/index.vue"
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
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
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
/* 129 */,
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(109);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
exports.default = new Vue(_index2.default);

/***/ }),
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
/* 151 */,
/* 152 */,
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(33);

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

exports.default = {
    components: {
        WxCheckbox: _index.WxCheckbox
    },
    data: function data() {
        return {
            checked: false,
            wxchange: false
        };
    },
    created: function created() {},

    methods: {
        handleChange: function handleChange(checked) {
            console.log(checked);
        }
    }
};

/***/ }),
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
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
/* 175 */,
/* 176 */,
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
/* 193 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wx-demo"],
    staticStyle: {
      marginTop: "100px",
      marginLeft: "100px"
    }
  }, [_c('wx-checkbox', {
    attrs: {
      "text": "我已阅读《xxx》",
      "checkedColor": "#027FF3",
      "defaultChecked": _vm.checked,
      "align": "left",
      "disabled": false
    },
    on: {
      "wxChange": _vm.handleChange
    },
    model: {
      value: (_vm.checked),
      callback: function($$v) {
        _vm.checked = $$v
      },
      expression: "checked"
    }
  }), _c('text', [_vm._v("value：" + _vm._s(_vm.checked))])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })
/******/ ]);
});
//# sourceMappingURL=index.native.js.map