(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("wmstr", [], factory);
	else if(typeof exports === 'object')
		exports["wmstr"] = factory();
	else
		root["wmstr"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

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

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 84);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(11)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(8)
  , IE8_DOM_DEFINE = __webpack_require__(32)
  , toPrimitive    = __webpack_require__(25)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes){
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if(IE8_DOM_DEFINE)try {
    return dP(O, P, Attributes);
  } catch(e){ /* empty */ }
  if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
  if('value' in Attributes)O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(60)
  , defined = __webpack_require__(15);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(3)
  , createDesc = __webpack_require__(13);
module.exports = __webpack_require__(1) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(23)('wks')
  , uid        = __webpack_require__(14)
  , Symbol     = __webpack_require__(0).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(0)
  , core      = __webpack_require__(5)
  , ctx       = __webpack_require__(30)
  , hide      = __webpack_require__(6)
  , PROTOTYPE = 'prototype';

var $export = function(type, name, source){
  var IS_FORCED = type & $export.F
    , IS_GLOBAL = type & $export.G
    , IS_STATIC = type & $export.S
    , IS_PROTO  = type & $export.P
    , IS_BIND   = type & $export.B
    , IS_WRAP   = type & $export.W
    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
    , expProto  = exports[PROTOTYPE]
    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE]
    , key, own, out;
  if(IS_GLOBAL)source = name;
  for(key in source){
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if(own && key in exports)continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function(C){
      var F = function(a, b, c){
        if(this instanceof C){
          switch(arguments.length){
            case 0: return new C;
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if(IS_PROTO){
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if(type & $export.R && expProto && !expProto[key])hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library` 
module.exports = $export;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(37)
  , enumBugKeys = __webpack_require__(16);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function(bitmap, value){
  return {
    enumerable  : !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable    : !(bitmap & 4),
    value       : value
  };
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(8)
  , dPs         = __webpack_require__(66)
  , enumBugKeys = __webpack_require__(16)
  , IE_PROTO    = __webpack_require__(22)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(31)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(59).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while(i--)delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties){
  var result;
  if(O !== null){
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty;
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 20 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(3).f
  , has = __webpack_require__(2)
  , TAG = __webpack_require__(7)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(23)('keys')
  , uid    = __webpack_require__(14);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(10);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function(it, S){
  if(!isObject(it))return it;
  var fn, val;
  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(0)
  , core           = __webpack_require__(5)
  , LIBRARY        = __webpack_require__(18)
  , wksExt         = __webpack_require__(27)
  , defineProperty = __webpack_require__(3).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(7);

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(49);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(48);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(55);
module.exports = function(fn, that, length){
  aFunction(fn);
  if(that === undefined)return fn;
  switch(length){
    case 1: return function(a){
      return fn.call(that, a);
    };
    case 2: return function(a, b){
      return fn.call(that, a, b);
    };
    case 3: return function(a, b, c){
      return fn.call(that, a, b, c);
    };
  }
  return function(/* ...args */){
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10)
  , document = __webpack_require__(0).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(1) && !__webpack_require__(11)(function(){
  return Object.defineProperty(__webpack_require__(31)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(18)
  , $export        = __webpack_require__(9)
  , redefine       = __webpack_require__(38)
  , hide           = __webpack_require__(6)
  , has            = __webpack_require__(2)
  , Iterators      = __webpack_require__(17)
  , $iterCreate    = __webpack_require__(62)
  , setToStringTag = __webpack_require__(21)
  , getPrototypeOf = __webpack_require__(68)
  , ITERATOR       = __webpack_require__(7)('iterator')
  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
  , FF_ITERATOR    = '@@iterator'
  , KEYS           = 'keys'
  , VALUES         = 'values';

var returnThis = function(){ return this; };

module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
  $iterCreate(Constructor, NAME, next);
  var getMethod = function(kind){
    if(!BUGGY && kind in proto)return proto[kind];
    switch(kind){
      case KEYS: return function keys(){ return new Constructor(this, kind); };
      case VALUES: return function values(){ return new Constructor(this, kind); };
    } return function entries(){ return new Constructor(this, kind); };
  };
  var TAG        = NAME + ' Iterator'
    , DEF_VALUES = DEFAULT == VALUES
    , VALUES_BUG = false
    , proto      = Base.prototype
    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
    , $default   = $native || getMethod(DEFAULT)
    , $entries   = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined
    , $anyNative = NAME == 'Array' ? proto.entries || $native : $native
    , methods, key, IteratorPrototype;
  // Fix native
  if($anyNative){
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base));
    if(IteratorPrototype !== Object.prototype){
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if(!LIBRARY && !has(IteratorPrototype, ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if(DEF_VALUES && $native && $native.name !== VALUES){
    VALUES_BUG = true;
    $default = function values(){ return $native.call(this); };
  }
  // Define iterator
  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG]  = returnThis;
  if(DEFAULT){
    methods = {
      values:  DEF_VALUES ? $default : getMethod(VALUES),
      keys:    IS_SET     ? $default : getMethod(KEYS),
      entries: $entries
    };
    if(FORCED)for(key in methods){
      if(!(key in proto))redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(20)
  , createDesc     = __webpack_require__(13)
  , toIObject      = __webpack_require__(4)
  , toPrimitive    = __webpack_require__(25)
  , has            = __webpack_require__(2)
  , IE8_DOM_DEFINE = __webpack_require__(32)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(1) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(37)
  , hiddenKeys = __webpack_require__(16).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(2)
  , toIObject    = __webpack_require__(4)
  , arrayIndexOf = __webpack_require__(57)(false)
  , IE_PROTO     = __webpack_require__(22)('IE_PROTO');

module.exports = function(object, names){
  var O      = toIObject(object)
    , i      = 0
    , result = []
    , key;
  for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while(names.length > i)if(has(O, key = names[i++])){
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(46);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(47);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(45);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(28);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : (0, _typeof3.default)(superClass)));
  }

  subClass.prototype = (0, _create2.default)(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf2.default ? (0, _setPrototypeOf2.default)(subClass, superClass) : subClass.__proto__ = superClass;
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(28);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.EffectUnit=t():e.EffectUnit=t()}(this,function(){return function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(1),r=a(i),o=n(55),u=a(o),s=n(56),c=a(s),l=n(60),f=a(l),h=function(){function e(t){(0,u.default)(this,e),this.currentGraph=[],this.context=t,this.input=t.createGain(),this.output=t.createGain(),this.effects=(0,f.default)(t),this.setupGraph([this.input,this.effects.gain,this.output])}return(0,c.default)(e,[{key:"setupGraph",value:function(e){for(var t=0;t<this.currentGraph.length-1;t++){var n=this.currentGraph[t];n.disconnect()}for(var a=0;a<e.length-1;a++){var i=e[a],r=e[a+1];i.connect(r)}this.currentGraph=e}},{key:"addEffect",value:function(e){var t=this,n=this.effects[e];if(!n)throw new Error("You tried to add an inexistent effect.");n.name||(this.effects[e].name=e);var a=[this.input].concat((0,r.default)(this.currentGraph.filter(function(e){return e!==t.input&&e!==t.output})),[n,this.output]);this.setupGraph(a)}},{key:"removeEffect",value:function(e){this.setupGraph(this.currentGraph.filter(function(t){return t.name!==e}))}},{key:"connect",value:function(e){this.output.connect(e)}}]),e}();t.default=h},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n(2),r=a(i);t.default=function(e){if(Array.isArray(e)){for(var t=0,n=Array(e.length);t<e.length;t++)n[t]=e[t];return n}return(0,r.default)(e)}},function(e,t,n){e.exports={default:n(3),__esModule:!0}},function(e,t,n){n(4),n(48),e.exports=n(12).Array.from},function(e,t,n){"use strict";var a=n(5)(!0);n(8)(String,"String",function(e){this._t=String(e),this._i=0},function(){var e,t=this._t,n=this._i;return n>=t.length?{value:void 0,done:!0}:(e=a(t,n),this._i+=e.length,{value:e,done:!1})})},function(e,t,n){var a=n(6),i=n(7);e.exports=function(e){return function(t,n){var r,o,u=String(i(t)),s=a(n),c=u.length;return s<0||s>=c?e?"":void 0:(r=u.charCodeAt(s),r<55296||r>56319||s+1===c||(o=u.charCodeAt(s+1))<56320||o>57343?e?u.charAt(s):r:e?u.slice(s,s+2):(r-55296<<10)+(o-56320)+65536)}}},function(e,t){var n=Math.ceil,a=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?a:n)(e)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){"use strict";var a=n(9),i=n(10),r=n(25),o=n(15),u=n(26),s=n(27),c=n(28),l=n(44),f=n(46),h=n(45)("iterator"),p=!([].keys&&"next"in[].keys()),d="@@iterator",v="keys",m="values",y=function(){return this};e.exports=function(e,t,n,b,g,_,x){c(n,t,b);var w,k,M,O=function(e){if(!p&&e in T)return T[e];switch(e){case v:return function(){return new n(this,e)};case m:return function(){return new n(this,e)}}return function(){return new n(this,e)}},G=t+" Iterator",P=g==m,L=!1,T=e.prototype,j=T[h]||T[d]||g&&T[g],F=j||O(g),C=g?P?O("entries"):F:void 0,q="Array"==t?T.entries||j:j;if(q&&(M=f(q.call(new e)),M!==Object.prototype&&(l(M,G,!0),a||u(M,h)||o(M,h,y))),P&&j&&j.name!==m&&(L=!0,F=function(){return j.call(this)}),a&&!x||!p&&!L&&T[h]||o(T,h,F),s[t]=F,s[G]=y,g)if(w={values:P?F:O(m),keys:_?F:O(v),entries:C},x)for(k in w)k in T||r(T,k,w[k]);else i(i.P+i.F*(p||L),t,w);return w}},function(e,t){e.exports=!0},function(e,t,n){var a=n(11),i=n(12),r=n(13),o=n(15),u="prototype",s=function(e,t,n){var c,l,f,h=e&s.F,p=e&s.G,d=e&s.S,v=e&s.P,m=e&s.B,y=e&s.W,b=p?i:i[t]||(i[t]={}),g=b[u],_=p?a:d?a[t]:(a[t]||{})[u];p&&(n=t);for(c in n)l=!h&&_&&void 0!==_[c],l&&c in b||(f=l?_[c]:n[c],b[c]=p&&"function"!=typeof _[c]?n[c]:m&&l?r(f,a):y&&_[c]==f?function(e){var t=function(t,n,a){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,a)}return e.apply(this,arguments)};return t[u]=e[u],t}(f):v&&"function"==typeof f?r(Function.call,f):f,v&&((b.virtual||(b.virtual={}))[c]=f,e&s.R&&g&&!g[c]&&o(g,c,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){var n=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(e,t,n){var a=n(14);e.exports=function(e,t,n){if(a(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,a){return e.call(t,n,a)};case 3:return function(n,a,i){return e.call(t,n,a,i)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var a=n(16),i=n(24);e.exports=n(20)?function(e,t,n){return a.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var a=n(17),i=n(19),r=n(23),o=Object.defineProperty;t.f=n(20)?Object.defineProperty:function(e,t,n){if(a(e),t=r(t,!0),a(n),i)try{return o(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var a=n(18);e.exports=function(e){if(!a(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){e.exports=!n(20)&&!n(21)(function(){return 7!=Object.defineProperty(n(22)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){e.exports=!n(21)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var a=n(18),i=n(11).document,r=a(i)&&a(i.createElement);e.exports=function(e){return r?i.createElement(e):{}}},function(e,t,n){var a=n(18);e.exports=function(e,t){if(!a(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!a(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!a(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!a(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){e.exports=n(15)},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t){e.exports={}},function(e,t,n){"use strict";var a=n(29),i=n(24),r=n(44),o={};n(15)(o,n(45)("iterator"),function(){return this}),e.exports=function(e,t,n){e.prototype=a(o,{next:i(1,n)}),r(e,t+" Iterator")}},function(e,t,n){var a=n(17),i=n(30),r=n(42),o=n(39)("IE_PROTO"),u=function(){},s="prototype",c=function(){var e,t=n(22)("iframe"),a=r.length,i="<",o=">";for(t.style.display="none",n(43).appendChild(t),t.src="javascript:",e=t.contentWindow.document,e.open(),e.write(i+"script"+o+"document.F=Object"+i+"/script"+o),e.close(),c=e.F;a--;)delete c[s][r[a]];return c()};e.exports=Object.create||function(e,t){var n;return null!==e?(u[s]=a(e),n=new u,u[s]=null,n[o]=e):n=c(),void 0===t?n:i(n,t)}},function(e,t,n){var a=n(16),i=n(17),r=n(31);e.exports=n(20)?Object.defineProperties:function(e,t){i(e);for(var n,o=r(t),u=o.length,s=0;u>s;)a.f(e,n=o[s++],t[n]);return e}},function(e,t,n){var a=n(32),i=n(42);e.exports=Object.keys||function(e){return a(e,i)}},function(e,t,n){var a=n(26),i=n(33),r=n(36)(!1),o=n(39)("IE_PROTO");e.exports=function(e,t){var n,u=i(e),s=0,c=[];for(n in u)n!=o&&a(u,n)&&c.push(n);for(;t.length>s;)a(u,n=t[s++])&&(~r(c,n)||c.push(n));return c}},function(e,t,n){var a=n(34),i=n(7);e.exports=function(e){return a(i(e))}},function(e,t,n){var a=n(35);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==a(e)?e.split(""):Object(e)}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t,n){var a=n(33),i=n(37),r=n(38);e.exports=function(e){return function(t,n,o){var u,s=a(t),c=i(s.length),l=r(o,c);if(e&&n!=n){for(;c>l;)if(u=s[l++],u!=u)return!0}else for(;c>l;l++)if((e||l in s)&&s[l]===n)return e||l||0;return!e&&-1}}},function(e,t,n){var a=n(6),i=Math.min;e.exports=function(e){return e>0?i(a(e),9007199254740991):0}},function(e,t,n){var a=n(6),i=Math.max,r=Math.min;e.exports=function(e,t){return e=a(e),e<0?i(e+t,0):r(e,t)}},function(e,t,n){var a=n(40)("keys"),i=n(41);e.exports=function(e){return a[e]||(a[e]=i(e))}},function(e,t,n){var a=n(11),i="__core-js_shared__",r=a[i]||(a[i]={});e.exports=function(e){return r[e]||(r[e]={})}},function(e,t){var n=0,a=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+a).toString(36))}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t,n){e.exports=n(11).document&&document.documentElement},function(e,t,n){var a=n(16).f,i=n(26),r=n(45)("toStringTag");e.exports=function(e,t,n){e&&!i(e=n?e:e.prototype,r)&&a(e,r,{configurable:!0,value:t})}},function(e,t,n){var a=n(40)("wks"),i=n(41),r=n(11).Symbol,o="function"==typeof r,u=e.exports=function(e){return a[e]||(a[e]=o&&r[e]||(o?r:i)("Symbol."+e))};u.store=a},function(e,t,n){var a=n(26),i=n(47),r=n(39)("IE_PROTO"),o=Object.prototype;e.exports=Object.getPrototypeOf||function(e){return e=i(e),a(e,r)?e[r]:"function"==typeof e.constructor&&e instanceof e.constructor?e.constructor.prototype:e instanceof Object?o:null}},function(e,t,n){var a=n(7);e.exports=function(e){return Object(a(e))}},function(e,t,n){"use strict";var a=n(13),i=n(10),r=n(47),o=n(49),u=n(50),s=n(37),c=n(51),l=n(52);i(i.S+i.F*!n(54)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,i,f,h=r(e),p="function"==typeof this?this:Array,d=arguments.length,v=d>1?arguments[1]:void 0,m=void 0!==v,y=0,b=l(h);if(m&&(v=a(v,d>2?arguments[2]:void 0,2)),void 0==b||p==Array&&u(b))for(t=s(h.length),n=new p(t);t>y;y++)c(n,y,m?v(h[y],y):h[y]);else for(f=b.call(h),n=new p;!(i=f.next()).done;y++)c(n,y,m?o(f,v,[i.value,y],!0):i.value);return n.length=y,n}})},function(e,t,n){var a=n(17);e.exports=function(e,t,n,i){try{return i?t(a(n)[0],n[1]):t(n)}catch(t){var r=e.return;throw void 0!==r&&a(r.call(e)),t}}},function(e,t,n){var a=n(27),i=n(45)("iterator"),r=Array.prototype;e.exports=function(e){return void 0!==e&&(a.Array===e||r[i]===e)}},function(e,t,n){"use strict";var a=n(16),i=n(24);e.exports=function(e,t,n){t in e?a.f(e,t,i(0,n)):e[t]=n}},function(e,t,n){var a=n(53),i=n(45)("iterator"),r=n(27);e.exports=n(12).getIteratorMethod=function(e){if(void 0!=e)return e[i]||e["@@iterator"]||r[a(e)]}},function(e,t,n){var a=n(35),i=n(45)("toStringTag"),r="Arguments"==a(function(){return arguments}()),o=function(e,t){try{return e[t]}catch(e){}};e.exports=function(e){var t,n,u;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=o(t=Object(e),i))?n:r?a(t):"Object"==(u=a(t))&&"function"==typeof t.callee?"Arguments":u}},function(e,t,n){var a=n(45)("iterator"),i=!1;try{var r=[7][a]();r.return=function(){i=!0},Array.from(r,function(){throw 2})}catch(e){}e.exports=function(e,t){if(!t&&!i)return!1;var n=!1;try{var r=[7],o=r[a]();o.next=function(){return{done:n=!0}},r[a]=function(){return o},e(r)}catch(e){}return n}},function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n(57),r=a(i);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,r.default)(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()},function(e,t,n){e.exports={default:n(58),__esModule:!0}},function(e,t,n){n(59);var a=n(12).Object;e.exports=function(e,t,n){return a.defineProperty(e,t,n)}},function(e,t,n){var a=n(10);a(a.S+a.F*!n(20),"Object",{defineProperty:n(16).f})},function(e,t,n){!function(t,n){e.exports=n()}(this,function(){return function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=new o.default(e);return{gain:(0,s.default)(e),chorus:(0,l.default)(e,t),delay:(0,h.default)(e,t),phaser:(0,d.default)(e,t),overdrive:(0,m.default)(e,t),compressor:(0,b.default)(e,t),lowpass:(0,_.default)(e),highpass:(0,w.default)(e),tremolo:(0,M.default)(e,t),wahwah:(0,G.default)(e,t),bitcrusher:(0,L.default)(e,t),moog:(0,j.default)(e,t),pingPongDelay:(0,C.default)(e,t)}}Object.defineProperty(t,"__esModule",{value:!0}),t.EFFECT_DATA=void 0,t.default=i;var r=n(1),o=a(r),u=n(2),s=a(u),c=n(42),l=a(c),f=n(43),h=a(f),p=n(44),d=a(p),v=n(45),m=a(v),y=n(46),b=a(y),g=n(47),_=a(g),x=n(48),w=a(x),k=n(49),M=a(k),O=n(50),G=a(O),P=n(51),L=a(P),T=n(52),j=a(T),F=n(53),C=a(F);t.EFFECT_DATA=[u.gainData,x.highpassData,g.lowpassData,f.delayData,c.chorusData,p.phaserData,v.overdriveData,y.compressorData,k.tremoloData,O.wahWahData,P.bitcrusherData,T.moogData,F.pingPongDelayData]},function(e,t,n){!function(){function t(){return n}function n(e){if(!(this instanceof n))return new n(e);var t="undefined"==typeof window?{}:window;if(t.AudioContext||(t.AudioContext=t.webkitAudioContext),e||(console.log("tuna.js: Missing audio context! Creating a new context for you."),e=t.AudioContext&&new t.AudioContext),!e)throw new Error("Tuna cannot initialize because this environment does not support web audio.");a(e),c=e,l=this}function a(e){function t(){var e=arguments[0];return arguments[0]=h.isPrototypeOf?h.isPrototypeOf(e)?e.input:e:e.input||e,i.apply(this,arguments),e}if(e.__connectified__!==!0){var n=e.createGain(),a=Object.getPrototypeOf(Object.getPrototypeOf(n)),i=a.connect;a.connect=t,e.__connectified__=!0}}function i(e){return Math.max(0,Math.round(100*Math.pow(2,e/6))/100)}function r(e,t){var n,a,i=0,r=0,o=0,u=0;return n=e.toExponential().match(/^.\.?(.*)e(.+)$/),i=parseInt(n[2],10)-(n[1]+"").length,n=t.toExponential().match(/^.\.?(.*)e(.+)$/),r=parseInt(n[2],10)-(n[1]+"").length,r>i&&(i=r),a=e%t,i<-100||i>20?(o=Math.round(Math.log(a)/Math.log(10)),u=Math.pow(10,o),(a/u).toFixed(o-i)*u):parseFloat(a.toFixed(-i))}function o(e){return 0===e?1:Math.abs(e)/e}function u(e){return(Math.exp(e)-Math.exp(-e))/(Math.exp(e)+Math.exp(-e))}function s(e,t){return void 0===e?t:e}var c,l,f=function(e,t){e.value=t},h=Object.create(null,{activate:{writable:!0,value:function(e){e?(this.input.disconnect(),this.input.connect(this.activateNode),this.activateCallback&&this.activateCallback(e)):(this.input.disconnect(),this.input.connect(this.output))}},bypass:{get:function(){return this._bypass},set:function(e){this._lastBypassValue!==e&&(this._bypass=e,this.activate(!e),this._lastBypassValue=e)}},connect:{value:function(e){this.output.connect(e)}},disconnect:{value:function(e){this.output.disconnect(e)}},connectInOrder:{value:function(e){for(var t=e.length-1;t--;){if(!e[t].connect)return console.error("AudioNode.connectInOrder: TypeError: Not an AudioNode.",e[t]);e[t+1].input?e[t].connect(e[t+1].input):e[t].connect(e[t+1])}}},getDefaults:{value:function(){var e={};for(var t in this.defaults)e[t]=this.defaults[t].value;return e}},automate:{value:function(e,t,n,a){var i,r=a?~~(a/1e3):c.currentTime,o=n?~~(n/1e3):0,u=this.defaults[e],s=this[e];s?u.automatable?(n?(i="linearRampToValueAtTime",s.cancelScheduledValues(r),s.setValueAtTime(s.value,r)):i="setValueAtTime",s[i](t,o+r)):s=t:console.error("Invalid Property for "+this.name)}}}),p="float",d="boolean",v="string",m="int";"undefined"!=typeof e&&e.exports?e.exports=n:window.define("Tuna",t),n.prototype.Bitcrusher=function(e){e||(e=this.getDefaults()),this.bufferSize=e.bufferSize||this.defaults.bufferSize.value,this.input=c.createGain(),this.activateNode=c.createGain(),this.processor=c.createScriptProcessor(this.bufferSize,1,1),this.output=c.createGain(),this.activateNode.connect(this.processor),this.processor.connect(this.output);var t,n,a,i,r,o=0,u=0;this.processor.onaudioprocess=function(e){for(t=e.inputBuffer.getChannelData(0),n=e.outputBuffer.getChannelData(0),a=Math.pow(.5,this.bits),r=t.length,i=0;i<r;i++)o+=this.normfreq,o>=1&&(o-=1,u=a*Math.floor(t[i]/a+.5)),n[i]=u},this.bits=e.bits||this.defaults.bits.value,this.normfreq=s(e.normfreq,this.defaults.normfreq.value),this.bypass=e.bypass||!1},n.prototype.Bitcrusher.prototype=Object.create(h,{name:{value:"Bitcrusher"},defaults:{writable:!0,value:{bits:{value:4,min:1,max:16,automatable:!1,type:m},bufferSize:{value:4096,min:256,max:16384,automatable:!1,type:m},bypass:{value:!1,automatable:!1,type:d},normfreq:{value:.1,min:1e-4,max:1,automatable:!1,type:p}}},bits:{enumerable:!0,get:function(){return this.processor.bits},set:function(e){this.processor.bits=e}},normfreq:{enumerable:!0,get:function(){return this.processor.normfreq},set:function(e){this.processor.normfreq=e}}}),n.prototype.Cabinet=function(e){e||(e=this.getDefaults()),this.input=c.createGain(),this.activateNode=c.createGain(),this.convolver=this.newConvolver(e.impulsePath||"../impulses/impulse_guitar.wav"),this.makeupNode=c.createGain(),this.output=c.createGain(),this.activateNode.connect(this.convolver.input),this.convolver.output.connect(this.makeupNode),this.makeupNode.connect(this.output),this.makeupGain=s(e.makeupGain,this.defaults.makeupGain),this.bypass=e.bypass||!1},n.prototype.Cabinet.prototype=Object.create(h,{name:{value:"Cabinet"},defaults:{writable:!0,value:{makeupGain:{value:1,min:0,max:20,automatable:!0,type:p},bypass:{value:!1,automatable:!1,type:d}}},makeupGain:{enumerable:!0,get:function(){return this.makeupNode.gain},set:function(e){this.makeupNode.gain.value=e}},newConvolver:{value:function(e){return new l.Convolver({impulse:e,dryLevel:0,wetLevel:1})}}}),n.prototype.Chorus=function(e){e||(e=this.getDefaults()),this.input=c.createGain(),this.attenuator=this.activateNode=c.createGain(),this.splitter=c.createChannelSplitter(2),this.delayL=c.createDelay(),this.delayR=c.createDelay(),this.feedbackGainNodeLR=c.createGain(),this.feedbackGainNodeRL=c.createGain(),this.merger=c.createChannelMerger(2),this.output=c.createGain(),this.lfoL=new l.LFO({target:this.delayL.delayTime,callback:f}),this.lfoR=new l.LFO({target:this.delayR.delayTime,callback:f}),this.input.connect(this.attenuator),this.attenuator.connect(this.output),this.attenuator.connect(this.splitter),this.splitter.connect(this.delayL,0),this.splitter.connect(this.delayR,1),this.delayL.connect(this.feedbackGainNodeLR),this.delayR.connect(this.feedbackGainNodeRL),this.feedbackGainNodeLR.connect(this.delayR),this.feedbackGainNodeRL.connect(this.delayL),this.delayL.connect(this.merger,0,0),this.delayR.connect(this.merger,0,1),this.merger.connect(this.output),this.feedback=s(e.feedback,this.defaults.feedback.value),this.rate=s(e.rate,this.defaults.rate.value),this.delay=s(e.delay,this.defaults.delay.value),this.depth=s(e.depth,this.defaults.depth.value),this.lfoR.phase=Math.PI/2,this.attenuator.gain.value=.6934,this.lfoL.activate(!0),this.lfoR.activate(!0),this.bypass=e.bypass||!1},n.prototype.Chorus.prototype=Object.create(h,{name:{value:"Chorus"},defaults:{writable:!0,value:{feedback:{value:.4,min:0,max:.95,automatable:!1,type:p},delay:{value:.0045,min:0,max:1,automatable:!1,type:p},depth:{value:.7,min:0,max:1,automatable:!1,type:p},rate:{value:1.5,min:0,max:8,automatable:!1,type:p},bypass:{value:!1,automatable:!1,type:d}}},delay:{enumerable:!0,get:function(){return this._delay},set:function(e){this._delay=2e-4*(2*Math.pow(10,e)),this.lfoL.offset=this._delay,this.lfoR.offset=this._delay,this._depth=this._depth}},depth:{enumerable:!0,get:function(){return this._depth},set:function(e){this._depth=e,this.lfoL.oscillation=this._depth*this._delay,this.lfoR.oscillation=this._depth*this._delay}},feedback:{enumerable:!0,get:function(){return this._feedback},set:function(e){this._feedback=e,this.feedbackGainNodeLR.gain.value=this._feedback,this.feedbackGainNodeRL.gain.value=this._feedback}},rate:{enumerable:!0,get:function(){return this._rate},set:function(e){this._rate=e,this.lfoL.frequency=this._rate,this.lfoR.frequency=this._rate}}}),n.prototype.Compressor=function(e){e||(e=this.getDefaults()),this.input=c.createGain(),this.compNode=this.activateNode=c.createDynamicsCompressor(),this.makeupNode=c.createGain(),this.output=c.createGain(),this.compNode.connect(this.makeupNode),this.makeupNode.connect(this.output),this.automakeup=s(e.automakeup,this.defaults.automakeup.value),this.makeupGain=s(e.makeupGain,this.defaults.makeupGain.value),this.threshold=s(e.threshold,this.defaults.threshold.value),this.release=s(e.release,this.defaults.release.value),this.attack=s(e.attack,this.defaults.attack.value),this.ratio=e.ratio||this.defaults.ratio.value,this.knee=s(e.knee,this.defaults.knee.value),this.bypass=e.bypass||!1},n.prototype.Compressor.prototype=Object.create(h,{name:{value:"Compressor"},defaults:{writable:!0,value:{threshold:{value:-20,min:-60,max:0,automatable:!0,type:p},release:{value:250,min:10,max:2e3,automatable:!0,type:p},makeupGain:{value:1,min:1,max:100,automatable:!0,type:p},attack:{value:1,min:0,max:1e3,automatable:!0,type:p},ratio:{value:4,min:1,max:50,automatable:!0,type:p},knee:{value:5,min:0,max:40,automatable:!0,type:p},automakeup:{value:!1,automatable:!1,type:d},bypass:{value:!1,automatable:!1,type:d}}},computeMakeup:{value:function(){var e=4,t=this.compNode;return-(t.threshold.value-t.threshold.value/t.ratio.value)/e}},automakeup:{enumerable:!0,get:function(){return this._automakeup},set:function(e){this._automakeup=e,this._automakeup&&(this.makeupGain=this.computeMakeup())}},threshold:{enumerable:!0,get:function(){return this.compNode.threshold},set:function(e){this.compNode.threshold.value=e,this._automakeup&&(this.makeupGain=this.computeMakeup())}},ratio:{enumerable:!0,get:function(){return this.compNode.ratio},set:function(e){this.compNode.ratio.value=e,this._automakeup&&(this.makeupGain=this.computeMakeup())}},knee:{enumerable:!0,get:function(){return this.compNode.knee},set:function(e){this.compNode.knee.value=e,this._automakeup&&(this.makeupGain=this.computeMakeup())}},attack:{enumerable:!0,get:function(){return this.compNode.attack},set:function(e){this.compNode.attack.value=e/1e3}},release:{enumerable:!0,get:function(){return this.compNode.release},set:function(e){this.compNode.release.value=e/1e3}},makeupGain:{enumerable:!0,get:function(){return this.makeupNode.gain},set:function(e){this.makeupNode.gain.value=i(e)}}}),n.prototype.Convolver=function(e){e||(e=this.getDefaults()),this.input=c.createGain(),this.activateNode=c.createGain(),this.convolver=c.createConvolver(),this.dry=c.createGain(),this.filterLow=c.createBiquadFilter(),this.filterHigh=c.createBiquadFilter(),this.wet=c.createGain(),this.output=c.createGain(),this.activateNode.connect(this.filterLow),this.activateNode.connect(this.dry),this.filterLow.connect(this.filterHigh),this.filterHigh.connect(this.convolver),this.convolver.connect(this.wet),this.wet.connect(this.output),this.dry.connect(this.output),this.dryLevel=s(e.dryLevel,this.defaults.dryLevel.value),this.wetLevel=s(e.wetLevel,this.defaults.wetLevel.value),this.highCut=e.highCut||this.defaults.highCut.value,this.buffer=e.impulse||"../impulses/ir_rev_short.wav",this.lowCut=e.lowCut||this.defaults.lowCut.value,this.level=s(e.level,this.defaults.level.value),this.filterHigh.type="lowpass",this.filterLow.type="highpass",this.bypass=e.bypass||!1},n.prototype.Convolver.prototype=Object.create(h,{name:{value:"Convolver"},defaults:{writable:!0,value:{highCut:{value:22050,min:20,max:22050,automatable:!0,type:p},lowCut:{value:20,min:20,max:22050,automatable:!0,type:p},dryLevel:{value:1,min:0,max:1,automatable:!0,type:p},wetLevel:{value:1,min:0,max:1,automatable:!0,type:p},level:{value:1,min:0,max:1,automatable:!0,type:p}}},lowCut:{get:function(){return this.filterLow.frequency},set:function(e){this.filterLow.frequency.value=e}},highCut:{get:function(){return this.filterHigh.frequency},set:function(e){this.filterHigh.frequency.value=e}},level:{get:function(){return this.output.gain},set:function(e){this.output.gain.value=e}},dryLevel:{get:function(){return this.dry.gain},set:function(e){this.dry.gain.value=e}},wetLevel:{get:function(){return this.wet.gain},set:function(e){this.wet.gain.value=e}},buffer:{enumerable:!1,get:function(){return this.convolver.buffer},set:function(e){var t=this.convolver,n=new XMLHttpRequest;return e?(n.open("GET",e,!0),n.responseType="arraybuffer",n.onreadystatechange=function(){4===n.readyState&&(n.status<300&&n.status>199||302===n.status)&&c.decodeAudioData(n.response,function(e){t.buffer=e},function(e){e&&console.log("Tuna.Convolver.setBuffer: Error decoding data"+e)})},void n.send(null)):void console.log("Tuna.Convolver.setBuffer: Missing impulse path!")}}}),n.prototype.Delay=function(e){e||(e=this.getDefaults()),this.input=c.createGain(),this.activateNode=c.createGain(),this.dry=c.createGain(),this.wet=c.createGain(),this.filter=c.createBiquadFilter(),this.delay=c.createDelay(10),this.feedbackNode=c.createGain(),this.output=c.createGain(),this.activateNode.connect(this.delay),this.activateNode.connect(this.dry),this.delay.connect(this.filter),this.filter.connect(this.feedbackNode),this.feedbackNode.connect(this.delay),this.feedbackNode.connect(this.wet),this.wet.connect(this.output),this.dry.connect(this.output),this.delayTime=e.delayTime||this.defaults.delayTime.value,this.feedback=s(e.feedback,this.defaults.feedback.value),this.wetLevel=s(e.wetLevel,this.defaults.wetLevel.value),this.dryLevel=s(e.dryLevel,this.defaults.dryLevel.value),this.cutoff=e.cutoff||this.defaults.cutoff.value,this.filter.type="lowpass",this.bypass=e.bypass||!1},n.prototype.Delay.prototype=Object.create(h,{name:{value:"Delay"},defaults:{writable:!0,value:{delayTime:{value:100,min:20,max:1e3,automatable:!1,type:p},feedback:{value:.45,min:0,max:.9,automatable:!0,type:p},cutoff:{value:2e4,min:20,max:2e4,automatable:!0,type:p},wetLevel:{value:.5,min:0,max:1,automatable:!0,type:p},dryLevel:{value:1,min:0,max:1,automatable:!0,type:p}}},delayTime:{enumerable:!0,get:function(){return this.delay.delayTime},set:function(e){this.delay.delayTime.value=e/1e3}},wetLevel:{enumerable:!0,get:function(){return this.wet.gain},set:function(e){this.wet.gain.value=e}},dryLevel:{enumerable:!0,get:function(){return this.dry.gain},set:function(e){this.dry.gain.value=e}},feedback:{enumerable:!0,get:function(){return this.feedbackNode.gain},set:function(e){this.feedbackNode.gain.value=e}},cutoff:{enumerable:!0,get:function(){return this.filter.frequency},set:function(e){this.filter.frequency.value=e}}}),n.prototype.Filter=function(e){e||(e=this.getDefaults()),this.input=c.createGain(),this.activateNode=c.createGain(),this.filter=c.createBiquadFilter(),this.output=c.createGain(),this.activateNode.connect(this.filter),this.filter.connect(this.output),this.frequency=e.frequency||this.defaults.frequency.value,this.Q=e.resonance||this.defaults.Q.value,this.filterType=s(e.filterType,this.defaults.filterType.value),this.gain=s(e.gain,this.defaults.gain.value),this.bypass=e.bypass||!1},n.prototype.Filter.prototype=Object.create(h,{name:{value:"Filter"},defaults:{writable:!0,value:{frequency:{value:800,min:20,max:22050,automatable:!0,type:p},Q:{value:1,min:.001,max:100,automatable:!0,type:p},gain:{value:0,min:-40,max:40,automatable:!0,type:p},bypass:{value:!1,automatable:!1,type:d},filterType:{value:"lowpass",automatable:!1,type:v}}},filterType:{enumerable:!0,get:function(){return this.filter.type},set:function(e){this.filter.type=e}},Q:{enumerable:!0,get:function(){return this.filter.Q},set:function(e){this.filter.Q.value=e}},gain:{enumerable:!0,get:function(){return this.filter.gain},set:function(e){this.filter.gain.value=e}},frequency:{enumerable:!0,get:function(){return this.filter.frequency},set:function(e){this.filter.frequency.value=e}}}),n.prototype.Gain=function(e){e||(e=this.getDefaults()),this.input=c.createGain(),this.activateNode=c.createGain(),this.gainNode=c.createGain(),this.output=c.createGain(),this.activateNode.connect(this.gainNode),this.gainNode.connect(this.output),this.gain=s(e.gain,this.defaults.gain.value),this.bypass=e.bypass||!1},n.prototype.Gain.prototype=Object.create(h,{name:{value:"Gain"},defaults:{writable:!0,value:{bypass:{value:!1,automatable:!1,type:d},gain:{value:1,automatable:!0,type:p}}},gain:{enumerable:!0,get:function(){return this.gainNode.gain},set:function(e){this.gainNode.gain.value=e}}}),n.prototype.MoogFilter=function(e){e||(e=this.getDefaults()),this.bufferSize=e.bufferSize||this.defaults.bufferSize.value,this.input=c.createGain(),this.activateNode=c.createGain(),this.processor=c.createScriptProcessor(this.bufferSize,1,1),this.output=c.createGain(),this.activateNode.connect(this.processor),this.processor.connect(this.output);var t,n,a,i,r,o,u,l;t=n=a=i=r=o=u=l=0;var f,h,p,d,v,m,y;this.processor.onaudioprocess=function(e){for(f=e.inputBuffer.getChannelData(0),h=e.outputBuffer.getChannelData(0),p=1.16*this.cutoff,y=.35013*(p*p)*(p*p),d=this.resonance*(1-.15*p*p),m=f.length,v=0;v<m;v++)f[v]-=l*d,f[v]*=y,r=f[v]+.3*t+(1-p)*r,t=f[v],o=r+.3*n+(1-p)*o,n=r,u=o+.3*a+(1-p)*u,a=o,l=u+.3*i+(1-p)*l,i=u,h[v]=l},this.cutoff=s(e.cutoff,this.defaults.cutoff.value),this.resonance=s(e.resonance,this.defaults.resonance.value),this.bypass=e.bypass||!1},n.prototype.MoogFilter.prototype=Object.create(h,{name:{value:"MoogFilter"},defaults:{writable:!0,value:{bufferSize:{value:4096,min:256,max:16384,automatable:!1,type:m},bypass:{value:!1,automatable:!1,type:d},cutoff:{value:.065,min:1e-4,max:1,automatable:!1,type:p},resonance:{value:3.5,min:0,max:4,automatable:!1,type:p}}},cutoff:{enumerable:!0,get:function(){return this.processor.cutoff},set:function(e){this.processor.cutoff=e}},resonance:{enumerable:!0,get:function(){return this.processor.resonance},set:function(e){this.processor.resonance=e}}}),n.prototype.Overdrive=function(e){e||(e=this.getDefaults()),this.input=c.createGain(),this.activateNode=c.createGain(),this.inputDrive=c.createGain(),this.waveshaper=c.createWaveShaper(),this.outputDrive=c.createGain(),this.output=c.createGain(),this.activateNode.connect(this.inputDrive),this.inputDrive.connect(this.waveshaper),this.waveshaper.connect(this.outputDrive),this.outputDrive.connect(this.output),this.ws_table=new Float32Array(this.k_nSamples),this.drive=s(e.drive,this.defaults.drive.value),this.outputGain=s(e.outputGain,this.defaults.outputGain.value),this.curveAmount=s(e.curveAmount,this.defaults.curveAmount.value),this.algorithmIndex=s(e.algorithmIndex,this.defaults.algorithmIndex.value),this.bypass=e.bypass||!1},n.prototype.Overdrive.prototype=Object.create(h,{name:{value:"Overdrive"},defaults:{writable:!0,value:{drive:{value:1,min:0,max:1,automatable:!0,type:p,scaled:!0},outputGain:{value:1,min:0,max:1,automatable:!0,type:p,scaled:!0},curveAmount:{value:.725,min:0,max:1,automatable:!1,type:p},algorithmIndex:{value:0,min:0,max:5,automatable:!1,type:m}}},k_nSamples:{value:8192},drive:{get:function(){return this.inputDrive.gain},set:function(e){this._drive=e}},curveAmount:{get:function(){return this._curveAmount},set:function(e){this._curveAmount=e,void 0===this._algorithmIndex&&(this._algorithmIndex=0),this.waveshaperAlgorithms[this._algorithmIndex](this._curveAmount,this.k_nSamples,this.ws_table),this.waveshaper.curve=this.ws_table}},outputGain:{get:function(){return this.outputDrive.gain},set:function(e){this._outputGain=i(e)}},algorithmIndex:{get:function(){return this._algorithmIndex},set:function(e){this._algorithmIndex=e,this.curveAmount=this._curveAmount;
}},waveshaperAlgorithms:{value:[function(e,t,n){e=Math.min(e,.9999);var a,i,r=2*e/(1-e);for(a=0;a<t;a++)i=2*a/t-1,n[a]=(1+r)*i/(1+r*Math.abs(i))},function(e,t,n){var a,i,r;for(a=0;a<t;a++)i=2*a/t-1,r=(.5*Math.pow(i+1.4,2)-1)*r>=0?5.8:1.2,n[a]=u(r)},function(e,t,n){var a,i,r,o=1-e;for(a=0;a<t;a++)i=2*a/t-1,r=i<0?-Math.pow(Math.abs(i),o+.04):Math.pow(i,o),n[a]=u(2*r)},function(e,t,n){var a,i,r,u,s=1-e>.99?.99:1-e;for(a=0;a<t;a++)i=2*a/t-1,u=Math.abs(i),u<s?r=u:u>s?r=s+(u-s)/(1+Math.pow((u-s)/(1-s),2)):u>1&&(r=u),n[a]=o(i)*r*(1/((s+1)/2))},function(e,t,n){var a,i;for(a=0;a<t;a++)i=2*a/t-1,i<-.08905?n[a]=-.75*(1-Math.pow(1-(Math.abs(i)-.032857),12)+1/3*(Math.abs(i)-.032847))+.01:i>=-.08905&&i<.320018?n[a]=-6.153*(i*i)+3.9375*i:n[a]=.630035},function(e,t,n){var a,i,r=2+Math.round(14*e),o=Math.round(Math.pow(2,r-1));for(a=0;a<t;a++)i=2*a/t-1,n[a]=Math.round(i*o)/o}]}}),n.prototype.Panner=function(e){e||(e=this.getDefaults()),this.input=c.createGain(),this.activateNode=c.createGain(),this.panner=c.createStereoPanner(),this.output=c.createGain(),this.activateNode.connect(this.panner),this.panner.connect(this.output),this.pan=s(e.pan,this.defaults.pan.value),this.bypass=e.bypass||!1},n.prototype.Panner.prototype=Object.create(h,{name:{value:"Panner"},defaults:{writable:!0,value:{bypass:{value:!1,automatable:!1,type:d},pan:{value:0,min:-1,max:1,automatable:!0,type:p}}},pan:{enumerable:!0,get:function(){return this.panner.pan},set:function(e){this.panner.pan.value=e}}}),n.prototype.Phaser=function(e){e||(e=this.getDefaults()),this.input=c.createGain(),this.splitter=this.activateNode=c.createChannelSplitter(2),this.filtersL=[],this.filtersR=[],this.feedbackGainNodeL=c.createGain(),this.feedbackGainNodeR=c.createGain(),this.merger=c.createChannelMerger(2),this.filteredSignal=c.createGain(),this.output=c.createGain(),this.lfoL=new l.LFO({target:this.filtersL,callback:this.callback}),this.lfoR=new l.LFO({target:this.filtersR,callback:this.callback});for(var t=this.stage;t--;)this.filtersL[t]=c.createBiquadFilter(),this.filtersR[t]=c.createBiquadFilter(),this.filtersL[t].type="allpass",this.filtersR[t].type="allpass";this.input.connect(this.splitter),this.input.connect(this.output),this.splitter.connect(this.filtersL[0],0,0),this.splitter.connect(this.filtersR[0],1,0),this.connectInOrder(this.filtersL),this.connectInOrder(this.filtersR),this.filtersL[this.stage-1].connect(this.feedbackGainNodeL),this.filtersL[this.stage-1].connect(this.merger,0,0),this.filtersR[this.stage-1].connect(this.feedbackGainNodeR),this.filtersR[this.stage-1].connect(this.merger,0,1),this.feedbackGainNodeL.connect(this.filtersL[0]),this.feedbackGainNodeR.connect(this.filtersR[0]),this.merger.connect(this.output),this.rate=s(e.rate,this.defaults.rate.value),this.baseModulationFrequency=e.baseModulationFrequency||this.defaults.baseModulationFrequency.value,this.depth=s(e.depth,this.defaults.depth.value),this.feedback=s(e.feedback,this.defaults.feedback.value),this.stereoPhase=s(e.stereoPhase,this.defaults.stereoPhase.value),this.lfoL.activate(!0),this.lfoR.activate(!0),this.bypass=e.bypass||!1},n.prototype.Phaser.prototype=Object.create(h,{name:{value:"Phaser"},stage:{value:4},defaults:{writable:!0,value:{rate:{value:.1,min:0,max:8,automatable:!1,type:p},depth:{value:.6,min:0,max:1,automatable:!1,type:p},feedback:{value:.7,min:0,max:1,automatable:!1,type:p},stereoPhase:{value:40,min:0,max:180,automatable:!1,type:p},baseModulationFrequency:{value:700,min:500,max:1500,automatable:!1,type:p}}},callback:{value:function(e,t){for(var n=0;n<4;n++)e[n].frequency.value=t}},depth:{get:function(){return this._depth},set:function(e){this._depth=e,this.lfoL.oscillation=this._baseModulationFrequency*this._depth,this.lfoR.oscillation=this._baseModulationFrequency*this._depth}},rate:{get:function(){return this._rate},set:function(e){this._rate=e,this.lfoL.frequency=this._rate,this.lfoR.frequency=this._rate}},baseModulationFrequency:{enumerable:!0,get:function(){return this._baseModulationFrequency},set:function(e){this._baseModulationFrequency=e,this.lfoL.offset=this._baseModulationFrequency,this.lfoR.offset=this._baseModulationFrequency,this._depth=this._depth}},feedback:{get:function(){return this._feedback},set:function(e){this._feedback=e,this.feedbackGainNodeL.gain.value=this._feedback,this.feedbackGainNodeR.gain.value=this._feedback}},stereoPhase:{get:function(){return this._stereoPhase},set:function(e){this._stereoPhase=e;var t=this.lfoL._phase+this._stereoPhase*Math.PI/180;t=r(t,2*Math.PI),this.lfoR._phase=t}}}),n.prototype.PingPongDelay=function(e){e||(e=this.getDefaults()),this.input=c.createGain(),this.wetLevel=c.createGain(),this.stereoToMonoMix=c.createGain(),this.feedbackLevel=c.createGain(),this.output=c.createGain(),this.delayLeft=c.createDelay(10),this.delayRight=c.createDelay(10),this.activateNode=c.createGain(),this.splitter=c.createChannelSplitter(2),this.merger=c.createChannelMerger(2),this.activateNode.connect(this.splitter),this.splitter.connect(this.stereoToMonoMix,0,0),this.splitter.connect(this.stereoToMonoMix,1,0),this.stereoToMonoMix.gain.value=.5,this.stereoToMonoMix.connect(this.wetLevel),this.wetLevel.connect(this.delayLeft),this.feedbackLevel.connect(this.delayLeft),this.delayLeft.connect(this.delayRight),this.delayRight.connect(this.feedbackLevel),this.delayLeft.connect(this.merger,0,0),this.delayRight.connect(this.merger,0,1),this.merger.connect(this.output),this.activateNode.connect(this.output),this.delayTimeLeft=void 0!==e.delayTimeLeft?e.delayTimeLeft:this.defaults.delayTimeLeft.value,this.delayTimeRight=void 0!==e.delayTimeRight?e.delayTimeRight:this.defaults.delayTimeRight.value,this.feedbackLevel.gain.value=void 0!==e.feedback?e.feedback:this.defaults.feedback.value,this.wetLevel.gain.value=void 0!==e.wetLevel?e.wetLevel:this.defaults.wetLevel.value,this.bypass=e.bypass||!1},n.prototype.PingPongDelay.prototype=Object.create(h,{name:{value:"PingPongDelay"},delayTimeLeft:{enumerable:!0,get:function(){return this._delayTimeLeft},set:function(e){this._delayTimeLeft=e,this.delayLeft.delayTime.value=e/1e3}},delayTimeRight:{enumerable:!0,get:function(){return this._delayTimeRight},set:function(e){this._delayTimeRight=e,this.delayRight.delayTime.value=e/1e3}},defaults:{writable:!0,value:{delayTimeLeft:{value:200,min:1,max:1e4,automatable:!1,type:m},delayTimeRight:{value:400,min:1,max:1e4,automatable:!1,type:m},feedback:{value:.3,min:0,max:1,automatable:!1,type:p},wetLevel:{value:.5,min:0,max:1,automatable:!1,type:p}}}}),n.prototype.Tremolo=function(e){e||(e=this.getDefaults()),this.input=c.createGain(),this.splitter=this.activateNode=c.createChannelSplitter(2),this.amplitudeL=c.createGain(),this.amplitudeR=c.createGain(),this.merger=c.createChannelMerger(2),this.output=c.createGain(),this.lfoL=new l.LFO({target:this.amplitudeL.gain,callback:f}),this.lfoR=new l.LFO({target:this.amplitudeR.gain,callback:f}),this.input.connect(this.splitter),this.splitter.connect(this.amplitudeL,0),this.splitter.connect(this.amplitudeR,1),this.amplitudeL.connect(this.merger,0,0),this.amplitudeR.connect(this.merger,0,1),this.merger.connect(this.output),this.rate=e.rate||this.defaults.rate.value,this.intensity=s(e.intensity,this.defaults.intensity.value),this.stereoPhase=s(e.stereoPhase,this.defaults.stereoPhase.value),this.lfoL.offset=1-this.intensity/2,this.lfoR.offset=1-this.intensity/2,this.lfoL.phase=this.stereoPhase*Math.PI/180,this.lfoL.activate(!0),this.lfoR.activate(!0),this.bypass=e.bypass||!1},n.prototype.Tremolo.prototype=Object.create(h,{name:{value:"Tremolo"},defaults:{writable:!0,value:{intensity:{value:.3,min:0,max:1,automatable:!1,type:p},stereoPhase:{value:0,min:0,max:180,automatable:!1,type:p},rate:{value:5,min:.1,max:11,automatable:!1,type:p}}},intensity:{enumerable:!0,get:function(){return this._intensity},set:function(e){this._intensity=e,this.lfoL.offset=1-this._intensity/2,this.lfoR.offset=1-this._intensity/2,this.lfoL.oscillation=this._intensity,this.lfoR.oscillation=this._intensity}},rate:{enumerable:!0,get:function(){return this._rate},set:function(e){this._rate=e,this.lfoL.frequency=this._rate,this.lfoR.frequency=this._rate}},stereoPhase:{enumerable:!0,get:function(){return this._stereoPhase},set:function(e){this._stereoPhase=e;var t=this.lfoL._phase+this._stereoPhase*Math.PI/180;t=r(t,2*Math.PI),this.lfoR.phase=t}}}),n.prototype.WahWah=function(e){e||(e=this.getDefaults()),this.input=c.createGain(),this.activateNode=c.createGain(),this.envelopeFollower=new l.EnvelopeFollower({target:this,callback:function(e,t){e.sweep=t}}),this.filterBp=c.createBiquadFilter(),this.filterPeaking=c.createBiquadFilter(),this.output=c.createGain(),this.activateNode.connect(this.filterBp),this.filterBp.connect(this.filterPeaking),this.filterPeaking.connect(this.output),this.init(),this.automode=s(e.automode,this.defaults.automode.value),this.resonance=e.resonance||this.defaults.resonance.value,this.sensitivity=s(e.sensitivity,this.defaults.sensitivity.value),this.baseFrequency=s(e.baseFrequency,this.defaults.baseFrequency.value),this.excursionOctaves=e.excursionOctaves||this.defaults.excursionOctaves.value,this.sweep=s(e.sweep,this.defaults.sweep.value),this.activateNode.gain.value=2,this.envelopeFollower.activate(!0),this.bypass=e.bypass||!1},n.prototype.WahWah.prototype=Object.create(h,{name:{value:"WahWah"},defaults:{writable:!0,value:{automode:{value:!0,automatable:!1,type:d},baseFrequency:{value:.5,min:0,max:1,automatable:!1,type:p},excursionOctaves:{value:2,min:1,max:6,automatable:!1,type:p},sweep:{value:.2,min:0,max:1,automatable:!1,type:p},resonance:{value:10,min:1,max:100,automatable:!1,type:p},sensitivity:{value:.5,min:-1,max:1,automatable:!1,type:p}}},automode:{get:function(){return this._automode},set:function(e){this._automode=e,e?(this.activateNode.connect(this.envelopeFollower.input),this.envelopeFollower.activate(!0)):(this.envelopeFollower.activate(!1),this.activateNode.disconnect(),this.activateNode.connect(this.filterBp))}},filterFreqTimeout:{value:0},setFilterFreq:{value:function(){try{this.filterBp.frequency.value=Math.min(22050,this._baseFrequency+this._excursionFrequency*this._sweep),this.filterPeaking.frequency.value=Math.min(22050,this._baseFrequency+this._excursionFrequency*this._sweep)}catch(e){clearTimeout(this.filterFreqTimeout),this.filterFreqTimeout=setTimeout(function(){this.setFilterFreq()}.bind(this),0)}}},sweep:{enumerable:!0,get:function(){return this._sweep},set:function(e){this._sweep=Math.pow(e>1?1:e<0?0:e,this._sensitivity),this.setFilterFreq()}},baseFrequency:{enumerable:!0,get:function(){return this._baseFrequency},set:function(e){this._baseFrequency=50*Math.pow(10,2*e),this._excursionFrequency=Math.min(c.sampleRate/2,this.baseFrequency*Math.pow(2,this._excursionOctaves)),this.setFilterFreq()}},excursionOctaves:{enumerable:!0,get:function(){return this._excursionOctaves},set:function(e){this._excursionOctaves=e,this._excursionFrequency=Math.min(c.sampleRate/2,this.baseFrequency*Math.pow(2,this._excursionOctaves)),this.setFilterFreq()}},sensitivity:{enumerable:!0,get:function(){return this._sensitivity},set:function(e){this._sensitivity=Math.pow(10,e)}},resonance:{enumerable:!0,get:function(){return this._resonance},set:function(e){this._resonance=e,this.filterPeaking.Q=this._resonance}},init:{value:function(){this.output.gain.value=1,this.filterPeaking.type="peaking",this.filterBp.type="bandpass",this.filterPeaking.frequency.value=100,this.filterPeaking.gain.value=20,this.filterPeaking.Q.value=5,this.filterBp.frequency.value=100,this.filterBp.Q.value=1}}}),n.prototype.EnvelopeFollower=function(e){e||(e=this.getDefaults()),this.input=c.createGain(),this.jsNode=this.output=c.createScriptProcessor(this.buffersize,1,1),this.input.connect(this.output),this.attackTime=s(e.attackTime,this.defaults.attackTime.value),this.releaseTime=s(e.releaseTime,this.defaults.releaseTime.value),this._envelope=0,this.target=e.target||{},this.callback=e.callback||function(){},this.bypass=e.bypass||!1},n.prototype.EnvelopeFollower.prototype=Object.create(h,{name:{value:"EnvelopeFollower"},defaults:{value:{attackTime:{value:.003,min:0,max:.5,automatable:!1,type:p},releaseTime:{value:.5,min:0,max:.5,automatable:!1,type:p}}},buffersize:{value:256},envelope:{value:0},sampleRate:{value:44100},attackTime:{enumerable:!0,get:function(){return this._attackTime},set:function(e){this._attackTime=e,this._attackC=Math.exp(-1/this._attackTime*this.sampleRate/this.buffersize)}},releaseTime:{enumerable:!0,get:function(){return this._releaseTime},set:function(e){this._releaseTime=e,this._releaseC=Math.exp(-1/this._releaseTime*this.sampleRate/this.buffersize)}},callback:{get:function(){return this._callback},set:function(e){"function"==typeof e?this._callback=e:console.error("tuna.js: "+this.name+": Callback must be a function!")}},target:{get:function(){return this._target},set:function(e){this._target=e}},activate:{value:function(e){this.activated=e,e?(this.jsNode.connect(c.destination),this.jsNode.onaudioprocess=this.returnCompute(this)):(this.jsNode.disconnect(),this.jsNode.onaudioprocess=null),this.activateCallback&&this.activateCallback(e)}},returnCompute:{value:function(e){return function(t){e.compute(t)}}},compute:{value:function(e){var t,n,a,i,r=e.inputBuffer.getChannelData(0).length,o=e.inputBuffer.numberOfChannels;if(n=a=i=0,o>1)for(i=0;i<r;++i)for(;n<o;++n)t=e.inputBuffer.getChannelData(n)[i],a+=t*t/o;else for(i=0;i<r;++i)t=e.inputBuffer.getChannelData(0)[i],a+=t*t;a=Math.sqrt(a),this._envelope<a?(this._envelope*=this._attackC,this._envelope+=(1-this._attackC)*a):(this._envelope*=this._releaseC,this._envelope+=(1-this._releaseC)*a),this._callback(this._target,this._envelope)}}}),n.prototype.LFO=function(e){e||(e=this.getDefaults()),this.input=c.createGain(),this.output=c.createScriptProcessor(256,1,1),this.activateNode=c.destination,this.frequency=s(e.frequency,this.defaults.frequency.value),this.offset=s(e.offset,this.defaults.offset.value),this.oscillation=s(e.oscillation,this.defaults.oscillation.value),this.phase=s(e.phase,this.defaults.phase.value),this.target=e.target||{},this.output.onaudioprocess=this.callback(e.callback||function(){}),this.bypass=e.bypass||!1},n.prototype.LFO.prototype=Object.create(h,{name:{value:"LFO"},bufferSize:{value:256},sampleRate:{value:44100},defaults:{value:{frequency:{value:1,min:0,max:20,automatable:!1,type:p},offset:{value:.85,min:0,max:22049,automatable:!1,type:p},oscillation:{value:.3,min:-22050,max:22050,automatable:!1,type:p},phase:{value:0,min:0,max:2*Math.PI,automatable:!1,type:p}}},frequency:{get:function(){return this._frequency},set:function(e){this._frequency=e,this._phaseInc=2*Math.PI*this._frequency*this.bufferSize/this.sampleRate}},offset:{get:function(){return this._offset},set:function(e){this._offset=e}},oscillation:{get:function(){return this._oscillation},set:function(e){this._oscillation=e}},phase:{get:function(){return this._phase},set:function(e){this._phase=e}},target:{get:function(){return this._target},set:function(e){this._target=e}},activate:{value:function(e){e?(this.output.connect(c.destination),this.activateCallback&&this.activateCallback(e)):this.output.disconnect()}},callback:{value:function(e){var t=this;return function(){t._phase+=t._phaseInc,t._phase>2*Math.PI&&(t._phase=0),e(t._target,t._offset+t._oscillation*Math.sin(t._phase))}}}}),n.toString=n.prototype.toString=function(){return"Please visit https://github.com/Theodeus/tuna/wiki for instructions on how to use Tuna.js"}}()},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return new s.default((0,o.default)({},c,{effectChain:{gain:e.createGain()}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.gainData=void 0;var r=n(3),o=a(r);t.default=i;var u=n(41),s=a(u),c=t.gainData={name:"gain",values:[{name:"gain",options:{type:"range",defaultValue:1,min:0,max:1,step:.01},set:function(e,t){e.gain.gain.value=t}},{name:"muted",options:{type:"single",defaultValue:!1},set:function(e,t){e.gain.gain.value=t?0:1}}]}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n(4),r=a(i);t.default=r.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}},function(e,t,n){e.exports={default:n(5),__esModule:!0}},function(e,t,n){n(6),e.exports=n(9).Object.assign},function(e,t,n){var a=n(7);a(a.S+a.F,"Object",{assign:n(22)})},function(e,t,n){var a=n(8),i=n(9),r=n(10),o=n(12),u="prototype",s=function(e,t,n){var c,l,f,h=e&s.F,p=e&s.G,d=e&s.S,v=e&s.P,m=e&s.B,y=e&s.W,b=p?i:i[t]||(i[t]={}),g=b[u],_=p?a:d?a[t]:(a[t]||{})[u];p&&(n=t);for(c in n)l=!h&&_&&void 0!==_[c],l&&c in b||(f=l?_[c]:n[c],b[c]=p&&"function"!=typeof _[c]?n[c]:m&&l?r(f,a):y&&_[c]==f?function(e){var t=function(t,n,a){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,a)}return e.apply(this,arguments)};return t[u]=e[u],t}(f):v&&"function"==typeof f?r(Function.call,f):f,v&&((b.virtual||(b.virtual={}))[c]=f,e&s.R&&g&&!g[c]&&o(g,c,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){var n=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(e,t,n){var a=n(11);e.exports=function(e,t,n){if(a(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,a){return e.call(t,n,a)};case 3:return function(n,a,i){return e.call(t,n,a,i)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var a=n(13),i=n(21);e.exports=n(17)?function(e,t,n){return a.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var a=n(14),i=n(16),r=n(20),o=Object.defineProperty;t.f=n(17)?Object.defineProperty:function(e,t,n){if(a(e),t=r(t,!0),a(n),i)try{return o(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var a=n(15);e.exports=function(e){if(!a(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){e.exports=!n(17)&&!n(18)(function(){return 7!=Object.defineProperty(n(19)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){e.exports=!n(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var a=n(15),i=n(8).document,r=a(i)&&a(i.createElement);e.exports=function(e){return r?i.createElement(e):{}}},function(e,t,n){var a=n(15);e.exports=function(e,t){if(!a(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!a(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!a(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!a(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){"use strict";var a=n(23),i=n(38),r=n(39),o=n(40),u=n(27),s=Object.assign;e.exports=!s||n(18)(function(){var e={},t={},n=Symbol(),a="abcdefghijklmnopqrst";return e[n]=7,a.split("").forEach(function(e){t[e]=e}),7!=s({},e)[n]||Object.keys(s({},t)).join("")!=a})?function(e,t){for(var n=o(e),s=arguments.length,c=1,l=i.f,f=r.f;s>c;)for(var h,p=u(arguments[c++]),d=l?a(p).concat(l(p)):a(p),v=d.length,m=0;v>m;)f.call(p,h=d[m++])&&(n[h]=p[h]);return n}:s},function(e,t,n){var a=n(24),i=n(37);e.exports=Object.keys||function(e){return a(e,i)}},function(e,t,n){var a=n(25),i=n(26),r=n(30)(!1),o=n(34)("IE_PROTO");e.exports=function(e,t){var n,u=i(e),s=0,c=[];for(n in u)n!=o&&a(u,n)&&c.push(n);for(;t.length>s;)a(u,n=t[s++])&&(~r(c,n)||c.push(n));return c}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var a=n(27),i=n(29);e.exports=function(e){return a(i(e))}},function(e,t,n){var a=n(28);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==a(e)?e.split(""):Object(e)}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){var a=n(26),i=n(31),r=n(33);e.exports=function(e){return function(t,n,o){var u,s=a(t),c=i(s.length),l=r(o,c);if(e&&n!=n){for(;c>l;)if(u=s[l++],u!=u)return!0}else for(;c>l;l++)if((e||l in s)&&s[l]===n)return e||l||0;return!e&&-1}}},function(e,t,n){var a=n(32),i=Math.min;e.exports=function(e){return e>0?i(a(e),9007199254740991):0}},function(e,t){var n=Math.ceil,a=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?a:n)(e)}},function(e,t,n){var a=n(32),i=Math.max,r=Math.min;e.exports=function(e,t){return e=a(e),e<0?i(e+t,0):r(e,t)}},function(e,t,n){var a=n(35)("keys"),i=n(36);e.exports=function(e){return a[e]||(a[e]=i(e))}},function(e,t,n){var a=n(8),i="__core-js_shared__",r=a[i]||(a[i]={});e.exports=function(e){return r[e]||(r[e]={})}},function(e,t){var n=0,a=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+a).toString(36))}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,n){var a=n(29);e.exports=function(e){return Object(a(e))}},function(e,t,n){!function(t,n){e.exports=n()}(this,function(){return function(e){function t(a){if(n[a])return n[a].exports;var i=n[a]={exports:{},id:a,loaded:!1};return e[a].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(1),r=a(i);t.default=r.default},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(2),r=a(i),o=n(3),u=a(o),s=n(22),c=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:"",effectChain:{},values:[]},n=arguments[1];if((0,r.default)(this,e),this.isEffectUnit=!0,!n)throw new Error("The AudioContext specified (3° parameter) is not defined!");this.name=name,this.audioCtx=n,this.effectChain=(0,s.functionsToValues)(t.effectChain),this.values=(0,s.bindMethodsToValues)(t.values,this.effectChain),this.values.forEach(function(e){e.options.defaultValue&&e.set(e.options.defaultValue)}),this.setupEffectChain()}return(0,u.default)(e,[{key:"enable",value:function(){this.effectGain.gain.value=1,this.directGain.gain.value=0}},{key:"disable",value:function(){this.effectGain.gain.value=0,this.directGain.gain.value=1}},{key:"connect",value:function(e){e.isEffectUnit?this.output.connect(e.input):this.output.connect(e)}},{key:"setValue",value:function(e,t){(0,s.filterValue)(this.values,e).set(t)}},{key:"getValueOptions",value:function(e){return(0,s.filterValue)(this.values,e).options}},{key:"setupEffectChain",value:function(){this.effectGain=this.audioCtx.createGain(),this.directGain=this.audioCtx.createGain(),this.output=this.audioCtx.createGain(),this.input=this.audioCtx.createGain(),this.input.connect(this.effectGain),this.input.connect(this.directGain),this.directGain.connect(this.output);var e=(0,s.objToArray)(this.effectChain);if(e.length>=1){this.effectGain.connect(e[0]);for(var t=0;t<e.length-1;t++)e[t].connect(e[t+1]);e[e.length-1].connect(this.output)}this.enable()}},{key:"disconnect",value:function(){this.output.disconnect()}}]),e}();t.default=c},function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n(4),r=a(i);t.default=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),(0,r.default)(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}()},function(e,t,n){e.exports={default:n(5),__esModule:!0}},function(e,t,n){n(6);var a=n(9).Object;e.exports=function(e,t,n){return a.defineProperty(e,t,n)}},function(e,t,n){var a=n(7);a(a.S+a.F*!n(17),"Object",{defineProperty:n(13).f})},function(e,t,n){var a=n(8),i=n(9),r=n(10),o=n(12),u="prototype",s=function(e,t,n){var c,l,f,h=e&s.F,p=e&s.G,d=e&s.S,v=e&s.P,m=e&s.B,y=e&s.W,b=p?i:i[t]||(i[t]={}),g=b[u],_=p?a:d?a[t]:(a[t]||{})[u];p&&(n=t);for(c in n)l=!h&&_&&void 0!==_[c],l&&c in b||(f=l?_[c]:n[c],b[c]=p&&"function"!=typeof _[c]?n[c]:m&&l?r(f,a):y&&_[c]==f?function(e){var t=function(t,n,a){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,n)}return new e(t,n,a)}return e.apply(this,arguments)};return t[u]=e[u],t}(f):v&&"function"==typeof f?r(Function.call,f):f,v&&((b.virtual||(b.virtual={}))[c]=f,e&s.R&&g&&!g[c]&&o(g,c,f)))};s.F=1,s.G=2,s.S=4,s.P=8,s.B=16,s.W=32,s.U=64,s.R=128,e.exports=s},function(e,t){var n=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(e,t){var n=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(e,t,n){var a=n(11);e.exports=function(e,t,n){if(a(e),void 0===t)return e;switch(n){case 1:return function(n){return e.call(t,n)};case 2:return function(n,a){return e.call(t,n,a)};case 3:return function(n,a,i){return e.call(t,n,a,i)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,n){var a=n(13),i=n(21);e.exports=n(17)?function(e,t,n){return a.f(e,t,i(1,n))}:function(e,t,n){return e[t]=n,e}},function(e,t,n){var a=n(14),i=n(16),r=n(20),o=Object.defineProperty;t.f=n(17)?Object.defineProperty:function(e,t,n){if(a(e),t=r(t,!0),a(n),i)try{return o(e,t,n)}catch(e){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(e[t]=n.value),e}},function(e,t,n){var a=n(15);e.exports=function(e){if(!a(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,n){e.exports=!n(17)&&!n(18)(function(){return 7!=Object.defineProperty(n(19)("div"),"a",{get:function(){return 7}}).a})},function(e,t,n){e.exports=!n(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,n){var a=n(15),i=n(8).document,r=a(i)&&a(i.createElement);e.exports=function(e){return r?i.createElement(e):{}}},function(e,t,n){var a=n(15);e.exports=function(e,t){if(!a(e))return e;var n,i;if(t&&"function"==typeof(n=e.toString)&&!a(i=n.call(e)))return i;if("function"==typeof(n=e.valueOf)&&!a(i=n.call(e)))return i;if(!t&&"function"==typeof(n=e.toString)&&!a(i=n.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.filterValue=t.objToArray=t.functionsToValues=t.bindMethodsToValues=void 0;var i=n(23),r=a(i);t.bindMethodsToValues=function(e,t){return e.map(function(e){if("function"!=typeof e.set)throw new Error("The specified value for the 'set'-field of the '"+e.name+"' - value is not a function!");return(0,r.default)({},e,{set:e.set.bind(void 0,t)})})},t.functionsToValues=function(e){var t=Object.assign({},e);for(var n in t)"function"==typeof t[n]&&(t[n]=t[n]());return t},t.objToArray=function(e){var t=[];for(var n in e)t.push(e[n]);return t},t.filterValue=function(e,t){var n=e.filter(function(e){return e.name===t})[0];if(!n)throw new Error("Tried to access inexistent value '"+t+"'.");return n}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=n(24),r=a(i);t.default=r.default||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}},function(e,t,n){e.exports={default:n(25),__esModule:!0}},function(e,t,n){n(26),e.exports=n(9).Object.assign},function(e,t,n){var a=n(7);a(a.S+a.F,"Object",{assign:n(27)})},function(e,t,n){"use strict";var a=n(28),i=n(43),r=n(44),o=n(45),u=n(32),s=Object.assign;e.exports=!s||n(18)(function(){var e={},t={},n=Symbol(),a="abcdefghijklmnopqrst";return e[n]=7,a.split("").forEach(function(e){t[e]=e}),7!=s({},e)[n]||Object.keys(s({},t)).join("")!=a})?function(e,t){for(var n=o(e),s=arguments.length,c=1,l=i.f,f=r.f;s>c;)for(var h,p=u(arguments[c++]),d=l?a(p).concat(l(p)):a(p),v=d.length,m=0;v>m;)f.call(p,h=d[m++])&&(n[h]=p[h]);return n}:s},function(e,t,n){var a=n(29),i=n(42);e.exports=Object.keys||function(e){return a(e,i)}},function(e,t,n){var a=n(30),i=n(31),r=n(35)(!1),o=n(39)("IE_PROTO");e.exports=function(e,t){var n,u=i(e),s=0,c=[];for(n in u)n!=o&&a(u,n)&&c.push(n);for(;t.length>s;)a(u,n=t[s++])&&(~r(c,n)||c.push(n));return c}},function(e,t){var n={}.hasOwnProperty;e.exports=function(e,t){return n.call(e,t)}},function(e,t,n){var a=n(32),i=n(34);e.exports=function(e){return a(i(e))}},function(e,t,n){var a=n(33);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==a(e)?e.split(""):Object(e)}},function(e,t){var n={}.toString;e.exports=function(e){return n.call(e).slice(8,-1)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,n){var a=n(31),i=n(36),r=n(38);e.exports=function(e){return function(t,n,o){var u,s=a(t),c=i(s.length),l=r(o,c);if(e&&n!=n){for(;c>l;)if(u=s[l++],u!=u)return!0}else for(;c>l;l++)if((e||l in s)&&s[l]===n)return e||l||0;return!e&&-1}}},function(e,t,n){var a=n(37),i=Math.min;e.exports=function(e){return e>0?i(a(e),9007199254740991):0}},function(e,t){var n=Math.ceil,a=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?a:n)(e)}},function(e,t,n){var a=n(37),i=Math.max,r=Math.min;e.exports=function(e,t){return e=a(e),e<0?i(e+t,0):r(e,t)}},function(e,t,n){var a=n(40)("keys"),i=n(41);e.exports=function(e){return a[e]||(a[e]=i(e))}},function(e,t,n){var a=n(8),i="__core-js_shared__",r=a[i]||(a[i]={});e.exports=function(e){return r[e]||(r[e]={})}},function(e,t){var n=0,a=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++n+a).toString(36))}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,n){var a=n(34);e.exports=function(e){return Object(a(e))}}])})},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new l.default(e);return new s.default((0,o.default)({},d,{effectChain:{chorus:new t.Chorus({rate:f,feedback:h,delay:p})}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.chorusData=void 0;var r=n(3),o=a(r);t.default=i;var u=n(41),s=a(u),c=n(1),l=a(c),f=1.5,h=.2,p=.0045,d=t.chorusData={name:"chorus",values:[{name:"rate",options:{type:"range",defaultValue:f,min:.01,max:8,step:.01},set:function(e,t){e.chorus.rate=t}},{name:"feedback",options:{type:"range",
defaultValue:h,min:0,max:1,step:.01},set:function(e,t){e.chorus.feedback=t}},{name:"delay",options:{type:"range",defaultValue:p,min:0,max:1,step:.01},set:function(e,t){e.chorus.delay=t}}]}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new l.default(e);return new s.default((0,o.default)({},m,{effectChain:{delay:new t.Delay({feedback:f,delayTime:h,wetLevel:p,dryLevel:d,cutoff:v})}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.delayData=void 0;var r=n(3),o=a(r);t.default=i;var u=n(41),s=a(u),c=n(1),l=a(c),f=.45,h=150,p=.25,d=1,v=2e3,m=t.delayData={name:"delay",values:[{name:"feedback",options:{type:"range",defaultValue:f,min:0,max:1,step:.01},set:function(e,t){e.delay.feedback=t}},{name:"delayTime",options:{type:"range",defaultValue:h,min:1,max:1e4,step:1},set:function(e,t){e.delay.delayTime=t}},{name:"wetLevel",options:{type:"range",defaultValue:p,min:0,max:1,step:.01},set:function(e,t){e.delay.wetLevel=t}},{name:"dryLevel",options:{type:"range",defaultValue:d,min:0,max:1,step:.01},set:function(e,t){e.delay.dryLevel=t}},{name:"cutoff",options:{type:"range",defaultValue:v,min:20,max:22050,step:1},set:function(e,t){e.delay.cutoff=t}}]}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new l.default(e);return new s.default((0,o.default)({},m,{effectChain:{phaser:new t.Phaser({rate:1.2,depth:.3,feedback:.2,stereoPhase:30,baseModulationFrequency:700})}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.phaserData=void 0;var r=n(3),o=a(r);t.default=i;var u=n(41),s=a(u),c=n(1),l=a(c),f=1.2,h=.3,p=.2,d=30,v=700,m=t.phaserData={name:"phaser",values:[{name:"rate",options:{type:"range",defaultValue:f,min:.01,max:8,step:.01},set:function(e,t){e.phaser.rate=t}},{name:"depth",options:{type:"range",defaultValue:h,min:0,max:1,step:.01},set:function(e,t){e.phaser.depth=t}},{name:"feedback",options:{type:"range",defaultValue:p,min:0,max:1,step:.01},set:function(e,t){e.phaser.feedback=t}},{name:"stereoPhase",options:{type:"range",defaultValue:d,min:0,max:180,step:.1},set:function(e,t){e.phaser.stereoPhase=t}},{name:"baseModulationFrequency",options:{type:"range",defaultValue:v,min:500,max:1500,step:1},set:function(e,t){e.phaser.baseModulationFrequency=t}}]}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new l.default(e);return new s.default((0,o.default)({},d,{effectChain:{overdrive:new t.Overdrive({outputGain:f,drive:h,curveAmount:p,algorithmIndex:0})}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.overdriveData=void 0;var r=n(3),o=a(r);t.default=i;var u=n(41),s=a(u),c=n(1),l=a(c),f=.5,h=.7,p=1,d=t.overdriveData={name:"overdrive",values:[{name:"outputGain",options:{type:"range",defaultValue:f,min:0,max:1,step:.01},set:function(e,t){e.overdrive.outputGain=t}}]}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new l.default(e);return new s.default((0,o.default)({},b,{effectChain:{compressor:new t.Compressor({threshold:f,makeupGain:h,attack:p,release:d,ratio:v,knee:m,automakeup:y})}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.compressorData=void 0;var r=n(3),o=a(r);t.default=i;var u=n(41),s=a(u),c=n(1),l=a(c),f=-1,h=1,p=1,d=0,v=4,m=5,y=!0,b=t.compressorData={name:"compressor",values:[{name:"threshold",options:{type:"range",defaultValue:f,min:-100,max:0,step:.1},set:function(e,t){e.compressor.threshold=t}},{name:"makeupGain",options:{type:"range",defaultValue:h,min:0,max:1,step:.01},set:function(e,t){e.compressor.makeupGain=t}},{name:"attack",options:{type:"range",defaultValue:p,min:0,max:1e3,step:1},set:function(e,t){e.compressor.attack=t}},{name:"release",options:{type:"range",defaultValue:d,min:0,max:3e3,step:1},set:function(e,t){e.compressor.release=t}},{name:"ratio",options:{type:"range",defaultValue:v,min:1,max:20,step:1},set:function(e,t){e.compressor.ratio=t}},{name:"knee",options:{type:"range",defaultValue:m,min:0,max:40,step:1},set:function(e,t){e.compressor.knee=t}},{name:"automakeup",options:{type:"single",defaultValue:y},set:function(e,t){e.compressor.automakeup=t}}]}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return new s.default((0,o.default)({},l,{effectChain:{lowpass:function(){var t=e.createBiquadFilter();return t.type="lowpass",t.frequency.value=800,t}}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.lowpassData=void 0;var r=n(3),o=a(r);t.default=i;var u=n(41),s=a(u),c=800,l=t.lowpassData={name:"lowpass",values:[{name:"frequency",options:{type:"range",defaultValue:c,min:0,max:2e4,step:1},set:function(e,t){e.lowpass.frequency.value=t}}]}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return new s.default((0,o.default)({},l,{effectChain:{highpass:function(){var t=e.createBiquadFilter();return t.type="highpass",t.frequency.value=c,t}}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.highpassData=void 0;var r=n(3),o=a(r);t.default=i;var u=n(41),s=a(u),c=200,l=t.highpassData={name:"highpass",values:[{name:"frequency",options:{type:"range",defaultValue:c,min:0,max:2e4,step:1},set:function(e,t){e.highpass.frequency.value=t}}]}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new l.default(e);return new s.default((0,o.default)({},d,{effectChain:{tremolo:new t.Tremolo({intensity:f,rate:h,stereoPhase:p})}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.tremoloData=void 0;var r=n(3),o=a(r);t.default=i;var u=n(41),s=a(u),c=n(1),l=a(c),f=.3,h=4,p=0,d=t.tremoloData={name:"tremolo",values:[{name:"intensity",options:{type:"range",defaultValue:f,min:0,max:1,step:.01},set:function(e,t){e.tremolo.intensity=t}},{name:"rate",options:{type:"range",defaultValue:h,min:.001,max:8,step:.01},set:function(e,t){e.tremolo.rate=t}},{name:"stereoPhase",options:{type:"range",defaultValue:p,min:0,max:180,step:1},set:function(e,t){e.tremolo.stereoPhase=t}}]}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new l.default(e);return new s.default((0,o.default)({},y,{effectChain:{wahwah:new t.WahWah({automode:f,baseFrequency:h,excursionOctaves:p,sweep:d,resonance:v,sensitivity:m})}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.wahWahData=void 0;var r=n(3),o=a(r);t.default=i;var u=n(41),s=a(u),c=n(1),l=a(c),f=!0,h=.5,p=2,d=.2,v=10,m=.5,y=t.wahWahData={name:"wahwah",values:[{name:"automode",options:{type:"single",defaultValue:f},set:function(e,t){e.wahwah.automode=t}},{name:"baseFrequency",options:{type:"range",defaultValue:h,min:0,max:1,step:.01},set:function(e,t){e.wahwah.baseFrequency=t}},{name:"excursionOctaves",options:{type:"range",defaultValue:p,min:0,max:6,step:1},set:function(e,t){e.wahwah.excursionOctaves=t}},{name:"sweep",options:{type:"range",defaultValue:d,min:0,max:1,step:.01},set:function(e,t){e.wahwah.sweep=t}},{name:"resonance",options:{type:"range",defaultValue:v,min:0,max:100,step:1},set:function(e,t){e.wahwah.resonance=t}},{name:"sensitivity",options:{type:"range",defaultValue:m,min:0,max:1,step:.01},set:function(e,t){e.wahwah.sensitivity=t}}]}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new l.default(e);return new s.default((0,o.default)({},p,{effectChain:{bitcrusher:new t.Bitcrusher({bits:4,normfreq:.1,bufferSize:4096})}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.bitcrusherData=void 0;var r=n(3),o=a(r);t.default=i;var u=n(41),s=a(u),c=n(1),l=a(c),f=4,h=.1,p=t.bitcrusherData={name:"bitcrusher",values:[{name:"bits",options:{type:"range",defaultValue:f,min:1,max:16,step:1},set:function(e,t){e.bitcrusher.bits=t}},{name:"normfreq",options:{type:"range",defaultValue:h,min:.1,max:1,step:.01},set:function(e,t){e.bitcrusher.normfreq=t}}]}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new l.default(e);return new s.default((0,o.default)({},p,{effectChain:{moog:new t.MoogFilter({cutoff:.065,resonance:3.5,bufferSize:4096})}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.moogData=void 0;var r=n(3),o=a(r);t.default=i;var u=n(41),s=a(u),c=n(1),l=a(c),f=.065,h=3.5,p=t.moogData={name:"moog",values:[{name:"cutoff",options:{type:"range",defaultValue:f,min:0,max:1,step:.01},set:function(e,t){e.moog.cutoff=t}},{name:"resonance",options:{type:"range",defaultValue:h,min:0,max:4,step:.01},set:function(e,t){e.moog.resonance=t}}]}},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new l.default(e);return new s.default((0,o.default)({},v,{effectChain:{pingpong:new t.PingPongDelay({wetLevel:.5,feedback:.3,delayTimeLeft:150,delayTimeRight:200})}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.pingPongDelayData=void 0;var r=n(3),o=a(r);t.default=i;var u=n(41),s=a(u),c=n(1),l=a(c),f=.5,h=.3,p=150,d=150,v=t.pingPongDelayData={name:"pingPongDelay",values:[{name:"wetLevel",options:{type:"range",defaultValue:f,min:0,max:1,step:.01},set:function(e,t){e.pingpong.wetLevel=t}},{name:"feedback",options:{type:"range",defaultValue:h,min:0,max:1,step:.01},set:function(e,t){e.pingpong.feedback=t}},{name:"delayTimeLeft",options:{type:"range",defaultValue:p,min:1,max:1e4,step:1},set:function(e,t){e.pingpong.delayTimeLeft=t}},{name:"delayTimeRight",options:{type:"range",defaultValue:d,min:1,max:1e4,step:1},set:function(e,t){e.pingpong.DEFAULT_DELAYTIMERIGHT=t}}]}}])})}])});

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,e){ true?module.exports=e():"function"==typeof define&&define.amd?define([],e):"object"==typeof exports?exports.EffectUnit=e():t.EffectUnit=e()}(this,function(){return function(t){function e(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,e),o.loaded=!0,o.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";t.exports=n(1).Recorder},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(e,"__esModule",{value:!0}),e.Recorder=void 0;var o=n(2),i=r(o),c=n(3),a=r(c),u=n(22),f=r(u),s=e.Recorder=function(){function t(e,n){var r=this;(0,i["default"])(this,t),this.config={bufferLen:4096,numChannels:2,mimeType:"audio/wav"},this.recording=!1,this.callbacks={getBuffer:[],exportWAV:[]},Object.assign(this.config,n),this.context=e.context,this.node=(this.context.createScriptProcessor||this.context.createJavaScriptNode).call(this.context,this.config.bufferLen,this.config.numChannels,this.config.numChannels),this.node.onaudioprocess=function(t){if(r.recording){for(var e=[],n=0;n<r.config.numChannels;n++)e.push(t.inputBuffer.getChannelData(n));r.worker.postMessage({command:"record",buffer:e})}},e.connect(this.node),this.node.connect(this.context.destination);var o={};this.worker=new f["default"](function(){function t(t){d=t.sampleRate,h=t.numChannels,i()}function e(t){for(var e=0;e<h;e++)p[e].push(t[e]);l+=t[0].length}function n(t){for(var e=[],n=0;n<h;n++)e.push(c(p[n],l));var r=void 0;r=2===h?a(e[0],e[1]):e[0];var o=s(r),i=new Blob([o],{type:t});this.postMessage({command:"exportWAV",data:i})}function r(){for(var t=[],e=0;e<h;e++)t.push(c(p[e],l));this.postMessage({command:"getBuffer",data:t})}function o(){l=0,p=[],i()}function i(){for(var t=0;t<h;t++)p[t]=[]}function c(t,e){for(var n=new Float32Array(e),r=0,o=0;o<t.length;o++)n.set(t[o],r),r+=t[o].length;return n}function a(t,e){for(var n=t.length+e.length,r=new Float32Array(n),o=0,i=0;o<n;)r[o++]=t[i],r[o++]=e[i],i++;return r}function u(t,e,n){for(var r=0;r<n.length;r++,e+=2){var o=Math.max(-1,Math.min(1,n[r]));t.setInt16(e,o<0?32768*o:32767*o,!0)}}function f(t,e,n){for(var r=0;r<n.length;r++)t.setUint8(e+r,n.charCodeAt(r))}function s(t){var e=new ArrayBuffer(44+2*t.length),n=new DataView(e);return f(n,0,"RIFF"),n.setUint32(4,36+2*t.length,!0),f(n,8,"WAVE"),f(n,12,"fmt "),n.setUint32(16,16,!0),n.setUint16(20,1,!0),n.setUint16(22,h,!0),n.setUint32(24,d,!0),n.setUint32(28,4*d,!0),n.setUint16(32,2*h,!0),n.setUint16(34,16,!0),f(n,36,"data"),n.setUint32(40,2*t.length,!0),u(n,44,t),n}var l=0,p=[],d=void 0,h=void 0;this.onmessage=function(i){switch(i.data.command){case"init":t(i.data.config);break;case"record":e(i.data.buffer);break;case"exportWAV":n(i.data.type);break;case"getBuffer":r();break;case"clear":o()}}},o),this.worker.postMessage({command:"init",config:{sampleRate:this.context.sampleRate,numChannels:this.config.numChannels}}),this.worker.onmessage=function(t){var e=r.callbacks[t.data.command].pop();"function"==typeof e&&e(t.data.data)}}return(0,a["default"])(t,[{key:"record",value:function(){this.recording=!0}},{key:"stop",value:function(){this.recording=!1}},{key:"clear",value:function(){this.worker.postMessage({command:"clear"})}},{key:"getBuffer",value:function(t){if(t=t||this.config.callback,!t)throw new Error("Callback not set");this.callbacks.getBuffer.push(t),this.worker.postMessage({command:"getBuffer"})}},{key:"exportWAV",value:function(t,e){if(e=e||this.config.mimeType,t=t||this.config.callback,!t)throw new Error("Callback not set");this.callbacks.exportWAV.push(t),this.worker.postMessage({command:"exportWAV",type:e})}}],[{key:"forceDownload",value:function(t,e){var n=(window.URL||window.webkitURL).createObjectURL(t),r=window.document.createElement("a");r.href=n,r.download=e||"output.wav",r.click()}}]),t}();e["default"]=s},function(t,e){"use strict";e.__esModule=!0,e["default"]=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}},function(t,e,n){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}e.__esModule=!0;var o=n(4),i=r(o);e["default"]=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),(0,i["default"])(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}()},function(t,e,n){t.exports={"default":n(5),__esModule:!0}},function(t,e,n){n(6);var r=n(9).Object;t.exports=function(t,e,n){return r.defineProperty(t,e,n)}},function(t,e,n){var r=n(7);r(r.S+r.F*!n(17),"Object",{defineProperty:n(13).f})},function(t,e,n){var r=n(8),o=n(9),i=n(10),c=n(12),a="prototype",u=function(t,e,n){var f,s,l,p=t&u.F,d=t&u.G,h=t&u.S,v=t&u.P,g=t&u.B,m=t&u.W,w=d?o:o[e]||(o[e]={}),y=w[a],b=d?r:h?r[e]:(r[e]||{})[a];d&&(n=e);for(f in n)s=!p&&b&&void 0!==b[f],s&&f in w||(l=s?b[f]:n[f],w[f]=d&&"function"!=typeof b[f]?n[f]:g&&s?i(l,r):m&&b[f]==l?function(t){var e=function(e,n,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,r)}return t.apply(this,arguments)};return e[a]=t[a],e}(l):v&&"function"==typeof l?i(Function.call,l):l,v&&((w.virtual||(w.virtual={}))[f]=l,t&u.R&&y&&!y[f]&&c(y,f,l)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},function(t,e){var n=t.exports={version:"2.4.0"};"number"==typeof __e&&(__e=n)},function(t,e,n){var r=n(11);t.exports=function(t,e,n){if(r(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,r){return t.call(e,n,r)};case 3:return function(n,r,o){return t.call(e,n,r,o)}}return function(){return t.apply(e,arguments)}}},function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,e,n){var r=n(13),o=n(21);t.exports=n(17)?function(t,e,n){return r.f(t,e,o(1,n))}:function(t,e,n){return t[e]=n,t}},function(t,e,n){var r=n(14),o=n(16),i=n(20),c=Object.defineProperty;e.f=n(17)?Object.defineProperty:function(t,e,n){if(r(t),e=i(e,!0),r(n),o)try{return c(t,e,n)}catch(a){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},function(t,e,n){var r=n(15);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,e){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,e,n){t.exports=!n(17)&&!n(18)(function(){return 7!=Object.defineProperty(n(19)("div"),"a",{get:function(){return 7}}).a})},function(t,e,n){t.exports=!n(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},function(t,e,n){var r=n(15),o=n(8).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,e,n){var r=n(15);t.exports=function(t,e){if(!r(t))return t;var n,o;if(e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;if("function"==typeof(n=t.valueOf)&&!r(o=n.call(t)))return o;if(!e&&"function"==typeof(n=t.toString)&&!r(o=n.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},function(t,e){(function(e){function n(t,n){function o(t){setTimeout(function(){c.onmessage({data:t})},0)}var i,c=this;return n=n||{},r?(i=t.toString().trim().match(/^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/)[1],new e.Worker(e.URL.createObjectURL(new e.Blob([i],{type:"text/javascript"})))):(this.self=n,this.self.postMessage=o,void setTimeout(t.bind(n,n),0))}var r=!!(e===e.window&&e.URL&&e.Blob&&e.Worker);n.prototype.postMessage=function(t){var e=this;setTimeout(function(){e.self.onmessage({data:t})},0)},t.exports=n}).call(e,function(){return this}())}])});

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(50), __esModule: true };

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(51), __esModule: true };

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(52), __esModule: true };

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(53), __esModule: true };

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(54), __esModule: true };

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(75);
var $Object = __webpack_require__(5).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(76);
var $Object = __webpack_require__(5).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(77);
module.exports = __webpack_require__(5).Object.setPrototypeOf;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(80);
__webpack_require__(78);
__webpack_require__(81);
__webpack_require__(82);
module.exports = __webpack_require__(5).Symbol;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(79);
__webpack_require__(83);
module.exports = __webpack_require__(27).f('iterator');

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(4)
  , toLength  = __webpack_require__(72)
  , toIndex   = __webpack_require__(71);
module.exports = function(IS_INCLUDES){
  return function($this, el, fromIndex){
    var O      = toIObject($this)
      , length = toLength(O.length)
      , index  = toIndex(fromIndex, length)
      , value;
    // Array#includes uses SameValueZero equality algorithm
    if(IS_INCLUDES && el != el)while(length > index){
      value = O[index++];
      if(value != value)return true;
    // Array#toIndex ignores holes, Array#includes - not
    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
      if(O[index] === el)return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(12)
  , gOPS    = __webpack_require__(36)
  , pIE     = __webpack_require__(20);
module.exports = function(it){
  var result     = getKeys(it)
    , getSymbols = gOPS.f;
  if(getSymbols){
    var symbols = getSymbols(it)
      , isEnum  = pIE.f
      , i       = 0
      , key;
    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))result.push(key);
  } return result;
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(0).document && document.documentElement;

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(29);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(29);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(19)
  , descriptor     = __webpack_require__(13)
  , setToStringTag = __webpack_require__(21)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(6)(IteratorPrototype, __webpack_require__(7)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(12)
  , toIObject = __webpack_require__(4);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(14)('meta')
  , isObject = __webpack_require__(10)
  , has      = __webpack_require__(2)
  , setDesc  = __webpack_require__(3).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(11)(function(){
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function(it){
  setDesc(it, META, {value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  }});
};
var fastKey = function(it, create){
  // return primitive with prefix
  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return 'F';
    // not necessary to add metadata
    if(!create)return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function(it, create){
  if(!has(it, META)){
    // can't set metadata to uncaught frozen object
    if(!isExtensible(it))return true;
    // not necessary to add metadata
    if(!create)return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function(it){
  if(FREEZE && meta.NEED && isExtensible(it) && !has(it, META))setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY:      META,
  NEED:     false,
  fastKey:  fastKey,
  getWeak:  getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(3)
  , anObject = __webpack_require__(8)
  , getKeys  = __webpack_require__(12);

module.exports = __webpack_require__(1) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(4)
  , gOPN      = __webpack_require__(35).f
  , toString  = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function(it){
  try {
    return gOPN(it);
  } catch(e){
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it){
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(2)
  , toObject    = __webpack_require__(73)
  , IE_PROTO    = __webpack_require__(22)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(10)
  , anObject = __webpack_require__(8);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(30)(Function.call, __webpack_require__(34).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch(e){ buggy = true; }
      return function setPrototypeOf(O, proto){
        check(O, proto);
        if(buggy)O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(24)
  , defined   = __webpack_require__(15);
// true  -> String#at
// false -> String#codePointAt
module.exports = function(TO_STRING){
  return function(that, pos){
    var s = String(defined(that))
      , i = toInteger(pos)
      , l = s.length
      , a, b;
    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(24)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(24)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(15);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(56)
  , step             = __webpack_require__(63)
  , Iterators        = __webpack_require__(17)
  , toIObject        = __webpack_require__(4);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(33)(Array, 'Array', function(iterated, kind){
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , kind  = this._k
    , index = this._i++;
  if(!O || index >= O.length){
    this._t = undefined;
    return step(1);
  }
  if(kind == 'keys'  )return step(0, index);
  if(kind == 'values')return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(19)});

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(1), 'Object', {defineProperty: __webpack_require__(3).f});

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(9);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(69).set});

/***/ }),
/* 78 */
/***/ (function(module, exports) {



/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(70)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(33)(String, 'String', function(iterated){
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function(){
  var O     = this._t
    , index = this._i
    , point;
  if(index >= O.length)return {value: undefined, done: true};
  point = $at(O, index);
  this._i += point.length;
  return {value: point, done: false};
});

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(0)
  , has            = __webpack_require__(2)
  , DESCRIPTORS    = __webpack_require__(1)
  , $export        = __webpack_require__(9)
  , redefine       = __webpack_require__(38)
  , META           = __webpack_require__(65).KEY
  , $fails         = __webpack_require__(11)
  , shared         = __webpack_require__(23)
  , setToStringTag = __webpack_require__(21)
  , uid            = __webpack_require__(14)
  , wks            = __webpack_require__(7)
  , wksExt         = __webpack_require__(27)
  , wksDefine      = __webpack_require__(26)
  , keyOf          = __webpack_require__(64)
  , enumKeys       = __webpack_require__(58)
  , isArray        = __webpack_require__(61)
  , anObject       = __webpack_require__(8)
  , toIObject      = __webpack_require__(4)
  , toPrimitive    = __webpack_require__(25)
  , createDesc     = __webpack_require__(13)
  , _create        = __webpack_require__(19)
  , gOPNExt        = __webpack_require__(67)
  , $GOPD          = __webpack_require__(34)
  , $DP            = __webpack_require__(3)
  , $keys          = __webpack_require__(12)
  , gOPD           = $GOPD.f
  , dP             = $DP.f
  , gOPN           = gOPNExt.f
  , $Symbol        = global.Symbol
  , $JSON          = global.JSON
  , _stringify     = $JSON && $JSON.stringify
  , PROTOTYPE      = 'prototype'
  , HIDDEN         = wks('_hidden')
  , TO_PRIMITIVE   = wks('toPrimitive')
  , isEnum         = {}.propertyIsEnumerable
  , SymbolRegistry = shared('symbol-registry')
  , AllSymbols     = shared('symbols')
  , OPSymbols      = shared('op-symbols')
  , ObjectProto    = Object[PROTOTYPE]
  , USE_NATIVE     = typeof $Symbol == 'function'
  , QObject        = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function(){
  return _create(dP({}, 'a', {
    get: function(){ return dP(this, 'a', {value: 7}).a; }
  })).a != 7;
}) ? function(it, key, D){
  var protoDesc = gOPD(ObjectProto, key);
  if(protoDesc)delete ObjectProto[key];
  dP(it, key, D);
  if(protoDesc && it !== ObjectProto)dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function(tag){
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it){
  return typeof it == 'symbol';
} : function(it){
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D){
  if(it === ObjectProto)$defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if(has(AllSymbols, key)){
    if(!D.enumerable){
      if(!has(it, HIDDEN))dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
      D = _create(D, {enumerable: createDesc(0, false)});
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P){
  anObject(it);
  var keys = enumKeys(P = toIObject(P))
    , i    = 0
    , l = keys.length
    , key;
  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P){
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key){
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if(this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
  it  = toIObject(it);
  key = toPrimitive(key, true);
  if(it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key))return;
  var D = gOPD(it, key);
  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it){
  var names  = gOPN(toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META)result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
  var IS_OP  = it === ObjectProto
    , names  = gOPN(IS_OP ? OPSymbols : toIObject(it))
    , result = []
    , i      = 0
    , key;
  while(names.length > i){
    if(has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true))result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if(!USE_NATIVE){
  $Symbol = function Symbol(){
    if(this instanceof $Symbol)throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function(value){
      if(this === ObjectProto)$set.call(OPSymbols, value);
      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if(DESCRIPTORS && setter)setSymbolDesc(ObjectProto, tag, {configurable: true, set: $set});
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString(){
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f   = $defineProperty;
  __webpack_require__(35).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(20).f  = $propertyIsEnumerable;
  __webpack_require__(36).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(18)){
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function(name){
    return wrap(wks(name));
  }
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Symbol: $Symbol});

for(var symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), i = 0; symbols.length > i; )wks(symbols[i++]);

for(var symbols = $keys(wks.store), i = 0; symbols.length > i; )wksDefine(symbols[i++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function(key){
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(key){
    if(isSymbol(key))return keyOf(SymbolRegistry, key);
    throw TypeError(key + ' is not a symbol!');
  },
  useSetter: function(){ setter = true; },
  useSimple: function(){ setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function(){
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it){
    if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
    var args = [it]
      , i    = 1
      , replacer, $replacer;
    while(arguments.length > i)args.push(arguments[i++]);
    replacer = args[1];
    if(typeof replacer == 'function')$replacer = replacer;
    if($replacer || !isArray(replacer))replacer = function(key, value){
      if($replacer)value = $replacer.call(this, key, value);
      if(!isSymbol(value))return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(6)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26)('asyncIterator');

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(26)('observable');

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(74);
var global        = __webpack_require__(0)
  , hide          = __webpack_require__(6)
  , Iterators     = __webpack_require__(17)
  , TO_STRING_TAG = __webpack_require__(7)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(39);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(40);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(42);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(41);

var _inherits3 = _interopRequireDefault(_inherits2);

var _webaudioChnl = __webpack_require__(43);

var _webaudioChnl2 = _interopRequireDefault(_webaudioChnl);

var _wrecorder = __webpack_require__(44);

var _wrecorder2 = _interopRequireDefault(_wrecorder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Wmstr = function (_Chnl) {
  (0, _inherits3.default)(Wmstr, _Chnl);

  function Wmstr(audioCtx) {
    var connectToSpeakers = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    (0, _classCallCheck3.default)(this, Wmstr);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Wmstr.__proto__ || Object.getPrototypeOf(Wmstr)).call(this, audioCtx));

    if (connectToSpeakers) _this.connect(audioCtx.destination);

    _this.recorder = new _wrecorder2.default(_this);

    return _this;
  }

  (0, _createClass3.default)(Wmstr, [{
    key: 'startRecording',
    value: function startRecording() {
      this.recorder.record();
    }
  }, {
    key: 'stopRecording',
    value: function stopRecording() {
      var _this2 = this;

      var filename = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      return new Promise(function (resolve, reject) {
        _this2.recorder.stop();

        _this2.recorder.exportWAV(function (blob) {

          if (filename !== '') _wrecorder2.default.forceDownload(blob, filename);

          resolve(blob);
          _this2.recorder.clear();
        });
      });
    }
  }]);
  return Wmstr;
}(_webaudioChnl2.default);

exports.default = Wmstr;

/***/ })
/******/ ]);
});