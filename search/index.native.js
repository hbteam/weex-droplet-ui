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
/******/ 	return __webpack_require__(__webpack_require__.s = 123);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(9);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(155)
)

/* script */
__vue_exports__ = __webpack_require__(141)

/* template */
var __vue_template__ = __webpack_require__(173)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/example/search/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-bed1eed8"
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
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(22)
)

/* script */
__vue_exports__ = __webpack_require__(17)

/* template */
var __vue_template__ = __webpack_require__(27)
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

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(105);

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

var _alias = __webpack_require__(7);

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
            'src': "url('http://at.alicdn.com/t/font_534309_mb4vgu7ttpjve7b9.ttf')"
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

/***/ 141:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _index = __webpack_require__(6);

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

/***/ 155:
/***/ (function(module, exports) {

module.exports = {
  "result": {
    "width": "750",
    "height": "40"
  },
  "m-b-20": {
    "marginBottom": "20"
  },
  "f32": {
    "fontSize": "32"
  }
}

/***/ }),

/***/ 17:
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

/***/ 173:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('wx-search', {
    model: {
      value: (_vm.searchContent1),
      callback: function($$v) {
        _vm.searchContent1 = $$v
      },
      expression: "searchContent1"
    }
  }), _c('div', {
    staticClass: ["result", "m-b-20"]
  }, [_c('text', {
    staticClass: ["f32"]
  }, [_vm._v(_vm._s(_vm.searchContent1))])]), _c('wx-search', {
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
  }), _c('div', {
    staticClass: ["result", "m-b-20"]
  }, [_c('text', {
    staticClass: ["f32"]
  }, [_vm._v(_vm._s(_vm.searchContent2))])])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = {
  "icon-font": {
    "fontFamily": "dropletUiIconfont",
    "color": "#4d4d4d",
    "fontSize": "32"
  }
}

/***/ }),

/***/ 22:
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

/***/ 25:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('text', {
    staticClass: ["icon-font"],
    style: _vm.iconStyle
  }, [_vm._v(_vm._s(_vm.Icon[_vm.name]))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 27:
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

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(12);

Object.defineProperty(exports, 'default', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_index).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = {
    'roundclose': '\uE659',
    'success': '\uE717',
    'search': '\uE7D1'
};

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(20)
)

/* script */
__vue_exports__ = __webpack_require__(14)

/* template */
var __vue_template__ = __webpack_require__(25)
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


/***/ })

/******/ });
});
//# sourceMappingURL=index.native.js.map