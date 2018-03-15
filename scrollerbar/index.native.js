// { "framework": "Vue" }

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["npm/weex-droplet-ui/example/scrollerbar/index"] = factory();
	else
		root["npm/weex-droplet-ui/example/scrollerbar/index"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 122);
/******/ })
/************************************************************************/
/******/ ({

/***/ 104:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(148)
)

/* script */
__vue_exports__ = __webpack_require__(140)

/* template */
var __vue_template__ = __webpack_require__(163)
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
__vue_options__.__file = "/Users/yangquan/Documents/workspace/github/weex-droplet-ui/example/scrollerbar/index.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-b144a37a"
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

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(104);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_index2.default.el = '#root';
exports.default = new Vue(_index2.default);

/***/ }),

/***/ 140:
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

var dom = weex.requireModule('dom');
var animation = weex.requireModule('animation');
exports.default = {
    data: function data() {
        return {
            items: ['保单信息1', '保单信息2', '保单信息3', '保单信息4', '保单信息5', '保单信息6', '保单信息7', '保单信息8', '保单信息9', '保单信息10', '保单信息11', '保单信息12'],
            selectIndex: 0,
            bottom: 1,
            top: 1
        };
    },

    methods: {
        changeTab: function changeTab(index) {
            var _this = this;

            this.selectIndex = index;

            var c = this.deviceHeight / 2,
                m = 125;
            var selectItemRef = this.$refs['cell'][index];
            dom.getComponentRect(selectItemRef, function (item) {
                var selectItemTop = item.size.top;

                if (selectItemTop > c) {
                    dom.getComponentRect(_this.$refs['cell'][_this.items.length - 1], function (option) {
                        var listBottom = option.size.bottom;
                        if (listBottom - 64 > _this.deviceHeight) {
                            var q = listBottom - _this.deviceHeight;
                            _this.triggerAnimation(q - c);
                        }
                    });
                } else {
                    dom.getComponentRect(_this.$refs['cell'][0], function (option) {
                        var listBottom = option.size.bottom - 150;
                        console.log('listBottom:', listBottom);
                        console.log('selectItemTop:', selectItemTop);
                        if (listBottom + selectItemTop <= 0) {
                            _this.triggerAnimation(listBottom + selectItemTop);
                        }
                    });
                }
            });
        },
        scroller: function scroller(index) {
            var mid = this.deviceHeight / 2;
            var move = 125;
            //                let q =
            var selectItemRef = this.$refs['item'][index];
            dom.getComponentRect(selectItemRef, function (option) {
                var selectItemTop = option.size.top;
            });
        },
        triggerAnimation: function triggerAnimation(top) {
            var el = this.$refs['list'];
            animation.transition(el, {
                styles: {
                    transform: 'translateY(' + top + 'px)',
                    transformOrigin: 'center center'
                },
                duration: 300,
                timingFunction: 'ease-out',
                needLayout: false,
                delay: 0 //ms
            });
        }
    },
    created: function created() {
        this.deviceHeight = weex.config.env.deviceHeight;
    }
};

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

module.exports = {
  "wxs-list": {
    "width": "250",
    "backgroundColor": "#969696"
  },
  "wxs-cell": {
    "height": "150",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "wxs-text": {
    "color": "#ffffff",
    "fontSize": "32"
  },
  "select-cell": {
    "backgroundColor": "#ffffff"
  },
  "select-cell-no": {
    "backgroundColor": "#969696"
  },
  "select-text": {
    "color": "#ff8800"
  },
  "select-text-no": {
    "color": "#ffffff"
  }
}

/***/ }),

/***/ 163:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('list', {
    ref: "list",
    staticClass: ["wxs-list"]
  }, _vm._l((_vm.items), function(item, index) {
    return _c('cell', {
      ref: "cell",
      refInFor: true,
      class: ['wxs-cell', _vm.selectIndex == index ? 'select-cell' : 'select-cell-no'],
      appendAsTree: true,
      attrs: {
        "append": "tree"
      },
      on: {
        "click": function($event) {
          _vm.changeTab(index)
        }
      }
    }, [_c('div', {
      staticClass: ["wxs-div"]
    }, [_c('text', {
      class: ['wxs-text', _vm.selectIndex == index ? 'select-text' : 'select-text-no']
    }, [_vm._v(_vm._s(item))])])])
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ })

/******/ });
});
//# sourceMappingURL=index.native.js.map