(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("chnl", [], factory);
	else if(typeof exports === 'object')
		exports["chnl"] = factory();
	else
		root["chnl"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 60);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(21)('wks')
  , uid        = __webpack_require__(25)
  , Symbol     = __webpack_require__(2).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(19)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(4)
  , IE8_DOM_DEFINE = __webpack_require__(39)
  , toPrimitive    = __webpack_require__(55)
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

var isObject = __webpack_require__(10);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 5 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 6 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(3)
  , createDesc = __webpack_require__(12);
module.exports = __webpack_require__(1) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 8 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(2)
  , core      = __webpack_require__(5)
  , ctx       = __webpack_require__(16)
  , hide      = __webpack_require__(7)
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

module.exports = {};

/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(21)('keys')
  , uid    = __webpack_require__(25);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(34);
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
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(10)
  , document = __webpack_require__(2).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(3).f
  , has = __webpack_require__(6)
  , TAG = __webpack_require__(0)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(2)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(40)
  , defined = __webpack_require__(8);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(14)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(8);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(31);

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
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(30);

var _from2 = _interopRequireDefault(_from);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return (0, _from2.default)(arr);
  }
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,t){ true?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.EffectUnit=t():e.EffectUnit=t()}(this,function(){return function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=new s.default(e);return{gain:(0,r.default)(e),chorus:(0,c.default)(e,t),delay:(0,h.default)(e,t),phaser:(0,d.default)(e,t),overdrive:(0,m.default)(e,t),compressor:(0,b.default)(e,t),lowpass:(0,_.default)(e),highpass:(0,x.default)(e),tremolo:(0,M.default)(e,t),wahwah:(0,L.default)(e,t),bitcrusher:(0,P.default)(e,t),moog:(0,q.default)(e,t),pingPongDelay:(0,F.default)(e,t)}}Object.defineProperty(t,"__esModule",{value:!0}),t.EFFECT_DATA=void 0,t.default=i;var o=a(1),s=n(o),u=a(2),r=n(u),l=a(42),c=n(l),f=a(43),h=n(f),p=a(44),d=n(p),v=a(45),m=n(v),y=a(46),b=n(y),g=a(47),_=n(g),w=a(48),x=n(w),k=a(49),M=n(k),G=a(50),L=n(G),O=a(51),P=n(O),T=a(52),q=n(T),C=a(53),F=n(C);t.EFFECT_DATA=[u.gainData,w.highpassData,g.lowpassData,f.delayData,l.chorusData,p.phaserData,v.overdriveData,y.compressorData,k.tremoloData,G.wahWahData,O.bitcrusherData,T.moogData,C.pingPongDelayData]},function(e,t,a){!function(){function t(){return a}function a(e){if(!(this instanceof a))return new a(e);var t="undefined"==typeof window?{}:window;if(t.AudioContext||(t.AudioContext=t.webkitAudioContext),e||(console.log("tuna.js: Missing audio context! Creating a new context for you."),e=t.AudioContext&&new t.AudioContext),!e)throw new Error("Tuna cannot initialize because this environment does not support web audio.");n(e),l=e,c=this}function n(e){function t(){var e=arguments[0];return arguments[0]=h.isPrototypeOf?h.isPrototypeOf(e)?e.input:e:e.input||e,i.apply(this,arguments),e}if(e.__connectified__!==!0){var a=e.createGain(),n=Object.getPrototypeOf(Object.getPrototypeOf(a)),i=n.connect;n.connect=t,e.__connectified__=!0}}function i(e){return Math.max(0,Math.round(100*Math.pow(2,e/6))/100)}function o(e,t){var a,n,i=0,o=0,s=0,u=0;return a=e.toExponential().match(/^.\.?(.*)e(.+)$/),i=parseInt(a[2],10)-(a[1]+"").length,a=t.toExponential().match(/^.\.?(.*)e(.+)$/),o=parseInt(a[2],10)-(a[1]+"").length,o>i&&(i=o),n=e%t,i<-100||i>20?(s=Math.round(Math.log(n)/Math.log(10)),u=Math.pow(10,s),(n/u).toFixed(s-i)*u):parseFloat(n.toFixed(-i))}function s(e){return 0===e?1:Math.abs(e)/e}function u(e){return(Math.exp(e)-Math.exp(-e))/(Math.exp(e)+Math.exp(-e))}function r(e,t){return void 0===e?t:e}var l,c,f=function(e,t){e.value=t},h=Object.create(null,{activate:{writable:!0,value:function(e){e?(this.input.disconnect(),this.input.connect(this.activateNode),this.activateCallback&&this.activateCallback(e)):(this.input.disconnect(),this.input.connect(this.output))}},bypass:{get:function(){return this._bypass},set:function(e){this._lastBypassValue!==e&&(this._bypass=e,this.activate(!e),this._lastBypassValue=e)}},connect:{value:function(e){this.output.connect(e)}},disconnect:{value:function(e){this.output.disconnect(e)}},connectInOrder:{value:function(e){for(var t=e.length-1;t--;){if(!e[t].connect)return console.error("AudioNode.connectInOrder: TypeError: Not an AudioNode.",e[t]);e[t+1].input?e[t].connect(e[t+1].input):e[t].connect(e[t+1])}}},getDefaults:{value:function(){var e={};for(var t in this.defaults)e[t]=this.defaults[t].value;return e}},automate:{value:function(e,t,a,n){var i,o=n?~~(n/1e3):l.currentTime,s=a?~~(a/1e3):0,u=this.defaults[e],r=this[e];r?u.automatable?(a?(i="linearRampToValueAtTime",r.cancelScheduledValues(o),r.setValueAtTime(r.value,o)):i="setValueAtTime",r[i](t,s+o)):r=t:console.error("Invalid Property for "+this.name)}}}),p="float",d="boolean",v="string",m="int";"undefined"!=typeof e&&e.exports?e.exports=a:window.define("Tuna",t),a.prototype.Bitcrusher=function(e){e||(e=this.getDefaults()),this.bufferSize=e.bufferSize||this.defaults.bufferSize.value,this.input=l.createGain(),this.activateNode=l.createGain(),this.processor=l.createScriptProcessor(this.bufferSize,1,1),this.output=l.createGain(),this.activateNode.connect(this.processor),this.processor.connect(this.output);var t,a,n,i,o,s=0,u=0;this.processor.onaudioprocess=function(e){for(t=e.inputBuffer.getChannelData(0),a=e.outputBuffer.getChannelData(0),n=Math.pow(.5,this.bits),o=t.length,i=0;i<o;i++)s+=this.normfreq,s>=1&&(s-=1,u=n*Math.floor(t[i]/n+.5)),a[i]=u},this.bits=e.bits||this.defaults.bits.value,this.normfreq=r(e.normfreq,this.defaults.normfreq.value),this.bypass=e.bypass||!1},a.prototype.Bitcrusher.prototype=Object.create(h,{name:{value:"Bitcrusher"},defaults:{writable:!0,value:{bits:{value:4,min:1,max:16,automatable:!1,type:m},bufferSize:{value:4096,min:256,max:16384,automatable:!1,type:m},bypass:{value:!1,automatable:!1,type:d},normfreq:{value:.1,min:1e-4,max:1,automatable:!1,type:p}}},bits:{enumerable:!0,get:function(){return this.processor.bits},set:function(e){this.processor.bits=e}},normfreq:{enumerable:!0,get:function(){return this.processor.normfreq},set:function(e){this.processor.normfreq=e}}}),a.prototype.Cabinet=function(e){e||(e=this.getDefaults()),this.input=l.createGain(),this.activateNode=l.createGain(),this.convolver=this.newConvolver(e.impulsePath||"../impulses/impulse_guitar.wav"),this.makeupNode=l.createGain(),this.output=l.createGain(),this.activateNode.connect(this.convolver.input),this.convolver.output.connect(this.makeupNode),this.makeupNode.connect(this.output),this.makeupGain=r(e.makeupGain,this.defaults.makeupGain),this.bypass=e.bypass||!1},a.prototype.Cabinet.prototype=Object.create(h,{name:{value:"Cabinet"},defaults:{writable:!0,value:{makeupGain:{value:1,min:0,max:20,automatable:!0,type:p},bypass:{value:!1,automatable:!1,type:d}}},makeupGain:{enumerable:!0,get:function(){return this.makeupNode.gain},set:function(e){this.makeupNode.gain.value=e}},newConvolver:{value:function(e){return new c.Convolver({impulse:e,dryLevel:0,wetLevel:1})}}}),a.prototype.Chorus=function(e){e||(e=this.getDefaults()),this.input=l.createGain(),this.attenuator=this.activateNode=l.createGain(),this.splitter=l.createChannelSplitter(2),this.delayL=l.createDelay(),this.delayR=l.createDelay(),this.feedbackGainNodeLR=l.createGain(),this.feedbackGainNodeRL=l.createGain(),this.merger=l.createChannelMerger(2),this.output=l.createGain(),this.lfoL=new c.LFO({target:this.delayL.delayTime,callback:f}),this.lfoR=new c.LFO({target:this.delayR.delayTime,callback:f}),this.input.connect(this.attenuator),this.attenuator.connect(this.output),this.attenuator.connect(this.splitter),this.splitter.connect(this.delayL,0),this.splitter.connect(this.delayR,1),this.delayL.connect(this.feedbackGainNodeLR),this.delayR.connect(this.feedbackGainNodeRL),this.feedbackGainNodeLR.connect(this.delayR),this.feedbackGainNodeRL.connect(this.delayL),this.delayL.connect(this.merger,0,0),this.delayR.connect(this.merger,0,1),this.merger.connect(this.output),this.feedback=r(e.feedback,this.defaults.feedback.value),this.rate=r(e.rate,this.defaults.rate.value),this.delay=r(e.delay,this.defaults.delay.value),this.depth=r(e.depth,this.defaults.depth.value),this.lfoR.phase=Math.PI/2,this.attenuator.gain.value=.6934,this.lfoL.activate(!0),this.lfoR.activate(!0),this.bypass=e.bypass||!1},a.prototype.Chorus.prototype=Object.create(h,{name:{value:"Chorus"},defaults:{writable:!0,value:{feedback:{value:.4,min:0,max:.95,automatable:!1,type:p},delay:{value:.0045,min:0,max:1,automatable:!1,type:p},depth:{value:.7,min:0,max:1,automatable:!1,type:p},rate:{value:1.5,min:0,max:8,automatable:!1,type:p},bypass:{value:!1,automatable:!1,type:d}}},delay:{enumerable:!0,get:function(){return this._delay},set:function(e){this._delay=2e-4*(2*Math.pow(10,e)),this.lfoL.offset=this._delay,this.lfoR.offset=this._delay,this._depth=this._depth}},depth:{enumerable:!0,get:function(){return this._depth},set:function(e){this._depth=e,this.lfoL.oscillation=this._depth*this._delay,this.lfoR.oscillation=this._depth*this._delay}},feedback:{enumerable:!0,get:function(){return this._feedback},set:function(e){this._feedback=e,this.feedbackGainNodeLR.gain.value=this._feedback,this.feedbackGainNodeRL.gain.value=this._feedback}},rate:{enumerable:!0,get:function(){return this._rate},set:function(e){this._rate=e,this.lfoL.frequency=this._rate,this.lfoR.frequency=this._rate}}}),a.prototype.Compressor=function(e){e||(e=this.getDefaults()),this.input=l.createGain(),this.compNode=this.activateNode=l.createDynamicsCompressor(),this.makeupNode=l.createGain(),this.output=l.createGain(),this.compNode.connect(this.makeupNode),this.makeupNode.connect(this.output),this.automakeup=r(e.automakeup,this.defaults.automakeup.value),this.makeupGain=r(e.makeupGain,this.defaults.makeupGain.value),this.threshold=r(e.threshold,this.defaults.threshold.value),this.release=r(e.release,this.defaults.release.value),this.attack=r(e.attack,this.defaults.attack.value),this.ratio=e.ratio||this.defaults.ratio.value,this.knee=r(e.knee,this.defaults.knee.value),this.bypass=e.bypass||!1},a.prototype.Compressor.prototype=Object.create(h,{name:{value:"Compressor"},defaults:{writable:!0,value:{threshold:{value:-20,min:-60,max:0,automatable:!0,type:p},release:{value:250,min:10,max:2e3,automatable:!0,type:p},makeupGain:{value:1,min:1,max:100,automatable:!0,type:p},attack:{value:1,min:0,max:1e3,automatable:!0,type:p},ratio:{value:4,min:1,max:50,automatable:!0,type:p},knee:{value:5,min:0,max:40,automatable:!0,type:p},automakeup:{value:!1,automatable:!1,type:d},bypass:{value:!1,automatable:!1,type:d}}},computeMakeup:{value:function(){var e=4,t=this.compNode;return-(t.threshold.value-t.threshold.value/t.ratio.value)/e}},automakeup:{enumerable:!0,get:function(){return this._automakeup},set:function(e){this._automakeup=e,this._automakeup&&(this.makeupGain=this.computeMakeup())}},threshold:{enumerable:!0,get:function(){return this.compNode.threshold},set:function(e){this.compNode.threshold.value=e,this._automakeup&&(this.makeupGain=this.computeMakeup())}},ratio:{enumerable:!0,get:function(){return this.compNode.ratio},set:function(e){this.compNode.ratio.value=e,this._automakeup&&(this.makeupGain=this.computeMakeup())}},knee:{enumerable:!0,get:function(){return this.compNode.knee},set:function(e){this.compNode.knee.value=e,this._automakeup&&(this.makeupGain=this.computeMakeup())}},attack:{enumerable:!0,get:function(){return this.compNode.attack},set:function(e){this.compNode.attack.value=e/1e3}},release:{enumerable:!0,get:function(){return this.compNode.release},set:function(e){this.compNode.release.value=e/1e3}},makeupGain:{enumerable:!0,get:function(){return this.makeupNode.gain},set:function(e){this.makeupNode.gain.value=i(e)}}}),a.prototype.Convolver=function(e){e||(e=this.getDefaults()),this.input=l.createGain(),this.activateNode=l.createGain(),this.convolver=l.createConvolver(),this.dry=l.createGain(),this.filterLow=l.createBiquadFilter(),this.filterHigh=l.createBiquadFilter(),this.wet=l.createGain(),this.output=l.createGain(),this.activateNode.connect(this.filterLow),this.activateNode.connect(this.dry),this.filterLow.connect(this.filterHigh),this.filterHigh.connect(this.convolver),this.convolver.connect(this.wet),this.wet.connect(this.output),this.dry.connect(this.output),this.dryLevel=r(e.dryLevel,this.defaults.dryLevel.value),this.wetLevel=r(e.wetLevel,this.defaults.wetLevel.value),this.highCut=e.highCut||this.defaults.highCut.value,this.buffer=e.impulse||"../impulses/ir_rev_short.wav",this.lowCut=e.lowCut||this.defaults.lowCut.value,this.level=r(e.level,this.defaults.level.value),this.filterHigh.type="lowpass",this.filterLow.type="highpass",this.bypass=e.bypass||!1},a.prototype.Convolver.prototype=Object.create(h,{name:{value:"Convolver"},defaults:{writable:!0,value:{highCut:{value:22050,min:20,max:22050,automatable:!0,type:p},lowCut:{value:20,min:20,max:22050,automatable:!0,type:p},dryLevel:{value:1,min:0,max:1,automatable:!0,type:p},wetLevel:{value:1,min:0,max:1,automatable:!0,type:p},level:{value:1,min:0,max:1,automatable:!0,type:p}}},lowCut:{get:function(){return this.filterLow.frequency},set:function(e){this.filterLow.frequency.value=e}},highCut:{get:function(){return this.filterHigh.frequency},set:function(e){this.filterHigh.frequency.value=e}},level:{get:function(){return this.output.gain},set:function(e){this.output.gain.value=e}},dryLevel:{get:function(){return this.dry.gain},set:function(e){this.dry.gain.value=e}},wetLevel:{get:function(){return this.wet.gain},set:function(e){this.wet.gain.value=e}},buffer:{enumerable:!1,get:function(){return this.convolver.buffer},set:function(e){var t=this.convolver,a=new XMLHttpRequest;return e?(a.open("GET",e,!0),a.responseType="arraybuffer",a.onreadystatechange=function(){4===a.readyState&&(a.status<300&&a.status>199||302===a.status)&&l.decodeAudioData(a.response,function(e){t.buffer=e},function(e){e&&console.log("Tuna.Convolver.setBuffer: Error decoding data"+e)})},void a.send(null)):void console.log("Tuna.Convolver.setBuffer: Missing impulse path!")}}}),a.prototype.Delay=function(e){e||(e=this.getDefaults()),this.input=l.createGain(),this.activateNode=l.createGain(),this.dry=l.createGain(),this.wet=l.createGain(),this.filter=l.createBiquadFilter(),this.delay=l.createDelay(10),this.feedbackNode=l.createGain(),this.output=l.createGain(),this.activateNode.connect(this.delay),this.activateNode.connect(this.dry),this.delay.connect(this.filter),this.filter.connect(this.feedbackNode),this.feedbackNode.connect(this.delay),this.feedbackNode.connect(this.wet),this.wet.connect(this.output),this.dry.connect(this.output),this.delayTime=e.delayTime||this.defaults.delayTime.value,this.feedback=r(e.feedback,this.defaults.feedback.value),this.wetLevel=r(e.wetLevel,this.defaults.wetLevel.value),this.dryLevel=r(e.dryLevel,this.defaults.dryLevel.value),this.cutoff=e.cutoff||this.defaults.cutoff.value,this.filter.type="lowpass",this.bypass=e.bypass||!1},a.prototype.Delay.prototype=Object.create(h,{name:{value:"Delay"},defaults:{writable:!0,value:{delayTime:{value:100,min:20,max:1e3,automatable:!1,type:p},feedback:{value:.45,min:0,max:.9,automatable:!0,type:p},cutoff:{value:2e4,min:20,max:2e4,automatable:!0,type:p},wetLevel:{value:.5,min:0,max:1,automatable:!0,type:p},dryLevel:{value:1,min:0,max:1,automatable:!0,type:p}}},delayTime:{enumerable:!0,get:function(){return this.delay.delayTime},set:function(e){this.delay.delayTime.value=e/1e3}},wetLevel:{enumerable:!0,get:function(){return this.wet.gain},set:function(e){this.wet.gain.value=e}},dryLevel:{enumerable:!0,get:function(){return this.dry.gain},set:function(e){this.dry.gain.value=e}},feedback:{enumerable:!0,get:function(){return this.feedbackNode.gain},set:function(e){this.feedbackNode.gain.value=e}},cutoff:{enumerable:!0,get:function(){return this.filter.frequency},set:function(e){this.filter.frequency.value=e}}}),a.prototype.Filter=function(e){e||(e=this.getDefaults()),this.input=l.createGain(),this.activateNode=l.createGain(),this.filter=l.createBiquadFilter(),this.output=l.createGain(),this.activateNode.connect(this.filter),this.filter.connect(this.output),this.frequency=e.frequency||this.defaults.frequency.value,this.Q=e.resonance||this.defaults.Q.value,this.filterType=r(e.filterType,this.defaults.filterType.value),this.gain=r(e.gain,this.defaults.gain.value),this.bypass=e.bypass||!1},a.prototype.Filter.prototype=Object.create(h,{name:{value:"Filter"},defaults:{writable:!0,value:{frequency:{value:800,min:20,max:22050,automatable:!0,type:p},Q:{value:1,min:.001,max:100,automatable:!0,type:p},gain:{value:0,min:-40,max:40,automatable:!0,type:p},bypass:{value:!1,automatable:!1,type:d},filterType:{value:"lowpass",automatable:!1,type:v}}},filterType:{enumerable:!0,get:function(){return this.filter.type},set:function(e){this.filter.type=e}},Q:{enumerable:!0,get:function(){return this.filter.Q},set:function(e){this.filter.Q.value=e}},gain:{enumerable:!0,get:function(){return this.filter.gain},set:function(e){this.filter.gain.value=e}},frequency:{enumerable:!0,get:function(){return this.filter.frequency},set:function(e){this.filter.frequency.value=e}}}),a.prototype.Gain=function(e){e||(e=this.getDefaults()),this.input=l.createGain(),this.activateNode=l.createGain(),this.gainNode=l.createGain(),this.output=l.createGain(),this.activateNode.connect(this.gainNode),this.gainNode.connect(this.output),this.gain=r(e.gain,this.defaults.gain.value),this.bypass=e.bypass||!1},a.prototype.Gain.prototype=Object.create(h,{name:{value:"Gain"},defaults:{writable:!0,value:{bypass:{value:!1,automatable:!1,type:d},gain:{value:1,automatable:!0,type:p}}},gain:{enumerable:!0,get:function(){return this.gainNode.gain},set:function(e){this.gainNode.gain.value=e}}}),a.prototype.MoogFilter=function(e){e||(e=this.getDefaults()),this.bufferSize=e.bufferSize||this.defaults.bufferSize.value,this.input=l.createGain(),this.activateNode=l.createGain(),this.processor=l.createScriptProcessor(this.bufferSize,1,1),this.output=l.createGain(),this.activateNode.connect(this.processor),this.processor.connect(this.output);var t,a,n,i,o,s,u,c;t=a=n=i=o=s=u=c=0;var f,h,p,d,v,m,y;this.processor.onaudioprocess=function(e){for(f=e.inputBuffer.getChannelData(0),h=e.outputBuffer.getChannelData(0),p=1.16*this.cutoff,y=.35013*(p*p)*(p*p),d=this.resonance*(1-.15*p*p),m=f.length,v=0;v<m;v++)f[v]-=c*d,f[v]*=y,o=f[v]+.3*t+(1-p)*o,t=f[v],s=o+.3*a+(1-p)*s,a=o,u=s+.3*n+(1-p)*u,n=s,c=u+.3*i+(1-p)*c,i=u,h[v]=c},this.cutoff=r(e.cutoff,this.defaults.cutoff.value),this.resonance=r(e.resonance,this.defaults.resonance.value),this.bypass=e.bypass||!1},a.prototype.MoogFilter.prototype=Object.create(h,{name:{value:"MoogFilter"},defaults:{writable:!0,value:{bufferSize:{value:4096,min:256,max:16384,automatable:!1,type:m},bypass:{value:!1,automatable:!1,type:d},cutoff:{value:.065,min:1e-4,max:1,automatable:!1,type:p},resonance:{value:3.5,min:0,max:4,automatable:!1,type:p}}},cutoff:{enumerable:!0,get:function(){return this.processor.cutoff},set:function(e){this.processor.cutoff=e}},resonance:{enumerable:!0,get:function(){return this.processor.resonance},set:function(e){this.processor.resonance=e}}}),a.prototype.Overdrive=function(e){e||(e=this.getDefaults()),this.input=l.createGain(),this.activateNode=l.createGain(),this.inputDrive=l.createGain(),this.waveshaper=l.createWaveShaper(),this.outputDrive=l.createGain(),this.output=l.createGain(),this.activateNode.connect(this.inputDrive),this.inputDrive.connect(this.waveshaper),this.waveshaper.connect(this.outputDrive),this.outputDrive.connect(this.output),this.ws_table=new Float32Array(this.k_nSamples),this.drive=r(e.drive,this.defaults.drive.value),this.outputGain=r(e.outputGain,this.defaults.outputGain.value),this.curveAmount=r(e.curveAmount,this.defaults.curveAmount.value),this.algorithmIndex=r(e.algorithmIndex,this.defaults.algorithmIndex.value),this.bypass=e.bypass||!1},a.prototype.Overdrive.prototype=Object.create(h,{name:{value:"Overdrive"},defaults:{writable:!0,value:{drive:{value:1,min:0,max:1,automatable:!0,type:p,scaled:!0},outputGain:{value:1,min:0,max:1,automatable:!0,type:p,scaled:!0},curveAmount:{value:.725,min:0,max:1,automatable:!1,type:p},algorithmIndex:{value:0,min:0,max:5,automatable:!1,type:m}}},k_nSamples:{value:8192},drive:{get:function(){return this.inputDrive.gain},set:function(e){this._drive=e}},curveAmount:{get:function(){return this._curveAmount},set:function(e){this._curveAmount=e,void 0===this._algorithmIndex&&(this._algorithmIndex=0),this.waveshaperAlgorithms[this._algorithmIndex](this._curveAmount,this.k_nSamples,this.ws_table),this.waveshaper.curve=this.ws_table}},outputGain:{get:function(){return this.outputDrive.gain},set:function(e){this._outputGain=i(e)}},algorithmIndex:{get:function(){return this._algorithmIndex},set:function(e){this._algorithmIndex=e,this.curveAmount=this._curveAmount}},waveshaperAlgorithms:{value:[function(e,t,a){e=Math.min(e,.9999);var n,i,o=2*e/(1-e);for(n=0;n<t;n++)i=2*n/t-1,a[n]=(1+o)*i/(1+o*Math.abs(i))},function(e,t,a){var n,i,o;for(n=0;n<t;n++)i=2*n/t-1,o=(.5*Math.pow(i+1.4,2)-1)*o>=0?5.8:1.2,a[n]=u(o)},function(e,t,a){var n,i,o,s=1-e;for(n=0;n<t;n++)i=2*n/t-1,o=i<0?-Math.pow(Math.abs(i),s+.04):Math.pow(i,s),a[n]=u(2*o)},function(e,t,a){var n,i,o,u,r=1-e>.99?.99:1-e;for(n=0;n<t;n++)i=2*n/t-1,u=Math.abs(i),u<r?o=u:u>r?o=r+(u-r)/(1+Math.pow((u-r)/(1-r),2)):u>1&&(o=u),a[n]=s(i)*o*(1/((r+1)/2))},function(e,t,a){var n,i;for(n=0;n<t;n++)i=2*n/t-1,i<-.08905?a[n]=-.75*(1-Math.pow(1-(Math.abs(i)-.032857),12)+1/3*(Math.abs(i)-.032847))+.01:i>=-.08905&&i<.320018?a[n]=-6.153*(i*i)+3.9375*i:a[n]=.630035},function(e,t,a){var n,i,o=2+Math.round(14*e),s=Math.round(Math.pow(2,o-1));for(n=0;n<t;n++)i=2*n/t-1,a[n]=Math.round(i*s)/s}]}}),a.prototype.Panner=function(e){e||(e=this.getDefaults()),this.input=l.createGain(),this.activateNode=l.createGain(),this.panner=l.createStereoPanner(),this.output=l.createGain(),this.activateNode.connect(this.panner),this.panner.connect(this.output),this.pan=r(e.pan,this.defaults.pan.value),this.bypass=e.bypass||!1},a.prototype.Panner.prototype=Object.create(h,{name:{value:"Panner"},defaults:{writable:!0,value:{bypass:{value:!1,automatable:!1,type:d},pan:{value:0,min:-1,max:1,automatable:!0,type:p}}},pan:{enumerable:!0,get:function(){return this.panner.pan},set:function(e){this.panner.pan.value=e}}}),a.prototype.Phaser=function(e){e||(e=this.getDefaults()),this.input=l.createGain(),this.splitter=this.activateNode=l.createChannelSplitter(2),this.filtersL=[],this.filtersR=[],this.feedbackGainNodeL=l.createGain(),this.feedbackGainNodeR=l.createGain(),this.merger=l.createChannelMerger(2),this.filteredSignal=l.createGain(),this.output=l.createGain(),this.lfoL=new c.LFO({target:this.filtersL,callback:this.callback}),this.lfoR=new c.LFO({target:this.filtersR,callback:this.callback});for(var t=this.stage;t--;)this.filtersL[t]=l.createBiquadFilter(),this.filtersR[t]=l.createBiquadFilter(),this.filtersL[t].type="allpass",this.filtersR[t].type="allpass";this.input.connect(this.splitter),this.input.connect(this.output),this.splitter.connect(this.filtersL[0],0,0),this.splitter.connect(this.filtersR[0],1,0),this.connectInOrder(this.filtersL),this.connectInOrder(this.filtersR),this.filtersL[this.stage-1].connect(this.feedbackGainNodeL),this.filtersL[this.stage-1].connect(this.merger,0,0),this.filtersR[this.stage-1].connect(this.feedbackGainNodeR),this.filtersR[this.stage-1].connect(this.merger,0,1),this.feedbackGainNodeL.connect(this.filtersL[0]),this.feedbackGainNodeR.connect(this.filtersR[0]),this.merger.connect(this.output),this.rate=r(e.rate,this.defaults.rate.value),this.baseModulationFrequency=e.baseModulationFrequency||this.defaults.baseModulationFrequency.value,this.depth=r(e.depth,this.defaults.depth.value),this.feedback=r(e.feedback,this.defaults.feedback.value),this.stereoPhase=r(e.stereoPhase,this.defaults.stereoPhase.value),this.lfoL.activate(!0),this.lfoR.activate(!0),this.bypass=e.bypass||!1},a.prototype.Phaser.prototype=Object.create(h,{name:{value:"Phaser"},stage:{value:4},defaults:{writable:!0,value:{rate:{value:.1,min:0,max:8,automatable:!1,type:p},depth:{value:.6,min:0,max:1,automatable:!1,type:p},feedback:{value:.7,min:0,max:1,automatable:!1,type:p},stereoPhase:{value:40,min:0,max:180,automatable:!1,type:p},baseModulationFrequency:{value:700,min:500,max:1500,automatable:!1,type:p}}},callback:{value:function(e,t){for(var a=0;a<4;a++)e[a].frequency.value=t}},depth:{get:function(){return this._depth},set:function(e){this._depth=e,this.lfoL.oscillation=this._baseModulationFrequency*this._depth,this.lfoR.oscillation=this._baseModulationFrequency*this._depth}},rate:{get:function(){return this._rate},set:function(e){this._rate=e,this.lfoL.frequency=this._rate,this.lfoR.frequency=this._rate}},baseModulationFrequency:{enumerable:!0,get:function(){return this._baseModulationFrequency},set:function(e){this._baseModulationFrequency=e,this.lfoL.offset=this._baseModulationFrequency,this.lfoR.offset=this._baseModulationFrequency,this._depth=this._depth}},feedback:{get:function(){return this._feedback},set:function(e){this._feedback=e,this.feedbackGainNodeL.gain.value=this._feedback,this.feedbackGainNodeR.gain.value=this._feedback}},stereoPhase:{get:function(){return this._stereoPhase},set:function(e){this._stereoPhase=e;var t=this.lfoL._phase+this._stereoPhase*Math.PI/180;t=o(t,2*Math.PI),this.lfoR._phase=t}}}),a.prototype.PingPongDelay=function(e){e||(e=this.getDefaults()),this.input=l.createGain(),this.wetLevel=l.createGain(),this.stereoToMonoMix=l.createGain(),this.feedbackLevel=l.createGain(),this.output=l.createGain(),this.delayLeft=l.createDelay(10),this.delayRight=l.createDelay(10),this.activateNode=l.createGain(),this.splitter=l.createChannelSplitter(2),this.merger=l.createChannelMerger(2),this.activateNode.connect(this.splitter),this.splitter.connect(this.stereoToMonoMix,0,0),this.splitter.connect(this.stereoToMonoMix,1,0),this.stereoToMonoMix.gain.value=.5,this.stereoToMonoMix.connect(this.wetLevel),this.wetLevel.connect(this.delayLeft),this.feedbackLevel.connect(this.delayLeft),this.delayLeft.connect(this.delayRight),this.delayRight.connect(this.feedbackLevel),this.delayLeft.connect(this.merger,0,0),this.delayRight.connect(this.merger,0,1),this.merger.connect(this.output),this.activateNode.connect(this.output),this.delayTimeLeft=void 0!==e.delayTimeLeft?e.delayTimeLeft:this.defaults.delayTimeLeft.value,this.delayTimeRight=void 0!==e.delayTimeRight?e.delayTimeRight:this.defaults.delayTimeRight.value,this.feedbackLevel.gain.value=void 0!==e.feedback?e.feedback:this.defaults.feedback.value,this.wetLevel.gain.value=void 0!==e.wetLevel?e.wetLevel:this.defaults.wetLevel.value,this.bypass=e.bypass||!1},a.prototype.PingPongDelay.prototype=Object.create(h,{name:{value:"PingPongDelay"},delayTimeLeft:{enumerable:!0,get:function(){return this._delayTimeLeft},set:function(e){this._delayTimeLeft=e,this.delayLeft.delayTime.value=e/1e3}},delayTimeRight:{enumerable:!0,get:function(){return this._delayTimeRight},set:function(e){this._delayTimeRight=e,this.delayRight.delayTime.value=e/1e3}},defaults:{writable:!0,value:{delayTimeLeft:{value:200,min:1,max:1e4,automatable:!1,type:m},delayTimeRight:{value:400,min:1,max:1e4,automatable:!1,type:m},feedback:{value:.3,min:0,max:1,automatable:!1,type:p},wetLevel:{value:.5,min:0,max:1,automatable:!1,type:p}}}}),a.prototype.Tremolo=function(e){e||(e=this.getDefaults()),this.input=l.createGain(),this.splitter=this.activateNode=l.createChannelSplitter(2),this.amplitudeL=l.createGain(),this.amplitudeR=l.createGain(),this.merger=l.createChannelMerger(2),this.output=l.createGain(),this.lfoL=new c.LFO({target:this.amplitudeL.gain,callback:f}),this.lfoR=new c.LFO({target:this.amplitudeR.gain,callback:f}),this.input.connect(this.splitter),this.splitter.connect(this.amplitudeL,0),this.splitter.connect(this.amplitudeR,1),this.amplitudeL.connect(this.merger,0,0),this.amplitudeR.connect(this.merger,0,1),this.merger.connect(this.output),this.rate=e.rate||this.defaults.rate.value,this.intensity=r(e.intensity,this.defaults.intensity.value),this.stereoPhase=r(e.stereoPhase,this.defaults.stereoPhase.value),this.lfoL.offset=1-this.intensity/2,this.lfoR.offset=1-this.intensity/2,this.lfoL.phase=this.stereoPhase*Math.PI/180,this.lfoL.activate(!0),this.lfoR.activate(!0),this.bypass=e.bypass||!1},a.prototype.Tremolo.prototype=Object.create(h,{name:{value:"Tremolo"},defaults:{writable:!0,value:{intensity:{value:.3,min:0,max:1,automatable:!1,type:p},stereoPhase:{value:0,min:0,max:180,automatable:!1,type:p},rate:{value:5,min:.1,max:11,automatable:!1,type:p}}},intensity:{enumerable:!0,get:function(){return this._intensity},set:function(e){this._intensity=e,this.lfoL.offset=1-this._intensity/2,this.lfoR.offset=1-this._intensity/2,this.lfoL.oscillation=this._intensity,this.lfoR.oscillation=this._intensity}},rate:{enumerable:!0,get:function(){return this._rate},set:function(e){this._rate=e,this.lfoL.frequency=this._rate,this.lfoR.frequency=this._rate}},stereoPhase:{enumerable:!0,get:function(){return this._stereoPhase},set:function(e){this._stereoPhase=e;var t=this.lfoL._phase+this._stereoPhase*Math.PI/180;t=o(t,2*Math.PI),this.lfoR.phase=t}}}),a.prototype.WahWah=function(e){e||(e=this.getDefaults()),this.input=l.createGain(),this.activateNode=l.createGain(),this.envelopeFollower=new c.EnvelopeFollower({target:this,callback:function(e,t){e.sweep=t}}),this.filterBp=l.createBiquadFilter(),this.filterPeaking=l.createBiquadFilter(),this.output=l.createGain(),this.activateNode.connect(this.filterBp),this.filterBp.connect(this.filterPeaking),this.filterPeaking.connect(this.output),this.init(),this.automode=r(e.automode,this.defaults.automode.value),this.resonance=e.resonance||this.defaults.resonance.value,this.sensitivity=r(e.sensitivity,this.defaults.sensitivity.value),this.baseFrequency=r(e.baseFrequency,this.defaults.baseFrequency.value),this.excursionOctaves=e.excursionOctaves||this.defaults.excursionOctaves.value,this.sweep=r(e.sweep,this.defaults.sweep.value),this.activateNode.gain.value=2,this.envelopeFollower.activate(!0),this.bypass=e.bypass||!1},a.prototype.WahWah.prototype=Object.create(h,{name:{value:"WahWah"},defaults:{writable:!0,value:{automode:{value:!0,automatable:!1,type:d},baseFrequency:{value:.5,min:0,max:1,automatable:!1,type:p},excursionOctaves:{value:2,min:1,max:6,automatable:!1,type:p},sweep:{value:.2,min:0,max:1,automatable:!1,type:p},resonance:{value:10,min:1,max:100,automatable:!1,type:p},sensitivity:{value:.5,min:-1,max:1,automatable:!1,type:p}}},automode:{get:function(){return this._automode},set:function(e){this._automode=e,e?(this.activateNode.connect(this.envelopeFollower.input),this.envelopeFollower.activate(!0)):(this.envelopeFollower.activate(!1),this.activateNode.disconnect(),this.activateNode.connect(this.filterBp))}},filterFreqTimeout:{value:0},setFilterFreq:{value:function(){try{this.filterBp.frequency.value=Math.min(22050,this._baseFrequency+this._excursionFrequency*this._sweep),this.filterPeaking.frequency.value=Math.min(22050,this._baseFrequency+this._excursionFrequency*this._sweep)}catch(e){clearTimeout(this.filterFreqTimeout),this.filterFreqTimeout=setTimeout(function(){this.setFilterFreq()}.bind(this),0)}}},sweep:{enumerable:!0,get:function(){return this._sweep},set:function(e){this._sweep=Math.pow(e>1?1:e<0?0:e,this._sensitivity),this.setFilterFreq()}},baseFrequency:{enumerable:!0,get:function(){return this._baseFrequency},set:function(e){this._baseFrequency=50*Math.pow(10,2*e),this._excursionFrequency=Math.min(l.sampleRate/2,this.baseFrequency*Math.pow(2,this._excursionOctaves)),this.setFilterFreq()}},excursionOctaves:{enumerable:!0,get:function(){return this._excursionOctaves},set:function(e){this._excursionOctaves=e,this._excursionFrequency=Math.min(l.sampleRate/2,this.baseFrequency*Math.pow(2,this._excursionOctaves)),this.setFilterFreq()}},sensitivity:{enumerable:!0,get:function(){return this._sensitivity},set:function(e){this._sensitivity=Math.pow(10,e)}},resonance:{enumerable:!0,get:function(){return this._resonance},set:function(e){this._resonance=e,this.filterPeaking.Q=this._resonance}},init:{value:function(){this.output.gain.value=1,this.filterPeaking.type="peaking",this.filterBp.type="bandpass",this.filterPeaking.frequency.value=100,this.filterPeaking.gain.value=20,this.filterPeaking.Q.value=5,this.filterBp.frequency.value=100,this.filterBp.Q.value=1}}}),a.prototype.EnvelopeFollower=function(e){e||(e=this.getDefaults()),this.input=l.createGain(),this.jsNode=this.output=l.createScriptProcessor(this.buffersize,1,1),this.input.connect(this.output),this.attackTime=r(e.attackTime,this.defaults.attackTime.value),this.releaseTime=r(e.releaseTime,this.defaults.releaseTime.value),this._envelope=0,this.target=e.target||{},this.callback=e.callback||function(){},this.bypass=e.bypass||!1},a.prototype.EnvelopeFollower.prototype=Object.create(h,{
name:{value:"EnvelopeFollower"},defaults:{value:{attackTime:{value:.003,min:0,max:.5,automatable:!1,type:p},releaseTime:{value:.5,min:0,max:.5,automatable:!1,type:p}}},buffersize:{value:256},envelope:{value:0},sampleRate:{value:44100},attackTime:{enumerable:!0,get:function(){return this._attackTime},set:function(e){this._attackTime=e,this._attackC=Math.exp(-1/this._attackTime*this.sampleRate/this.buffersize)}},releaseTime:{enumerable:!0,get:function(){return this._releaseTime},set:function(e){this._releaseTime=e,this._releaseC=Math.exp(-1/this._releaseTime*this.sampleRate/this.buffersize)}},callback:{get:function(){return this._callback},set:function(e){"function"==typeof e?this._callback=e:console.error("tuna.js: "+this.name+": Callback must be a function!")}},target:{get:function(){return this._target},set:function(e){this._target=e}},activate:{value:function(e){this.activated=e,e?(this.jsNode.connect(l.destination),this.jsNode.onaudioprocess=this.returnCompute(this)):(this.jsNode.disconnect(),this.jsNode.onaudioprocess=null),this.activateCallback&&this.activateCallback(e)}},returnCompute:{value:function(e){return function(t){e.compute(t)}}},compute:{value:function(e){var t,a,n,i,o=e.inputBuffer.getChannelData(0).length,s=e.inputBuffer.numberOfChannels;if(a=n=i=0,s>1)for(i=0;i<o;++i)for(;a<s;++a)t=e.inputBuffer.getChannelData(a)[i],n+=t*t/s;else for(i=0;i<o;++i)t=e.inputBuffer.getChannelData(0)[i],n+=t*t;n=Math.sqrt(n),this._envelope<n?(this._envelope*=this._attackC,this._envelope+=(1-this._attackC)*n):(this._envelope*=this._releaseC,this._envelope+=(1-this._releaseC)*n),this._callback(this._target,this._envelope)}}}),a.prototype.LFO=function(e){e||(e=this.getDefaults()),this.input=l.createGain(),this.output=l.createScriptProcessor(256,1,1),this.activateNode=l.destination,this.frequency=r(e.frequency,this.defaults.frequency.value),this.offset=r(e.offset,this.defaults.offset.value),this.oscillation=r(e.oscillation,this.defaults.oscillation.value),this.phase=r(e.phase,this.defaults.phase.value),this.target=e.target||{},this.output.onaudioprocess=this.callback(e.callback||function(){}),this.bypass=e.bypass||!1},a.prototype.LFO.prototype=Object.create(h,{name:{value:"LFO"},bufferSize:{value:256},sampleRate:{value:44100},defaults:{value:{frequency:{value:1,min:0,max:20,automatable:!1,type:p},offset:{value:.85,min:0,max:22049,automatable:!1,type:p},oscillation:{value:.3,min:-22050,max:22050,automatable:!1,type:p},phase:{value:0,min:0,max:2*Math.PI,automatable:!1,type:p}}},frequency:{get:function(){return this._frequency},set:function(e){this._frequency=e,this._phaseInc=2*Math.PI*this._frequency*this.bufferSize/this.sampleRate}},offset:{get:function(){return this._offset},set:function(e){this._offset=e}},oscillation:{get:function(){return this._oscillation},set:function(e){this._oscillation=e}},phase:{get:function(){return this._phase},set:function(e){this._phase=e}},target:{get:function(){return this._target},set:function(e){this._target=e}},activate:{value:function(e){e?(this.output.connect(l.destination),this.activateCallback&&this.activateCallback(e)):this.output.disconnect()}},callback:{value:function(e){var t=this;return function(){t._phase+=t._phaseInc,t._phase>2*Math.PI&&(t._phase=0),e(t._target,t._offset+t._oscillation*Math.sin(t._phase))}}}}),a.toString=a.prototype.toString=function(){return"Please visit https://github.com/Theodeus/tuna/wiki for instructions on how to use Tuna.js"}}()},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){return new r.default((0,s.default)({},l,{effectChain:{gain:e.createGain()}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.gainData=void 0;var o=a(3),s=n(o);t.default=i;var u=a(41),r=n(u),l=t.gainData={name:"gain",values:[{name:"gain",options:{type:"range",defaultValue:1,min:0,max:1,step:.01},set:function(e,t){e.gain.gain.value=t}},{name:"muted",options:{type:"single",defaultValue:!1},set:function(e,t){e.gain.gain.value=t?0:1}}]}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=a(4),o=n(i);t.default=o.default||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}},function(e,t,a){e.exports={default:a(5),__esModule:!0}},function(e,t,a){a(6),e.exports=a(9).Object.assign},function(e,t,a){var n=a(7);n(n.S+n.F,"Object",{assign:a(22)})},function(e,t,a){var n=a(8),i=a(9),o=a(10),s=a(12),u="prototype",r=function(e,t,a){var l,c,f,h=e&r.F,p=e&r.G,d=e&r.S,v=e&r.P,m=e&r.B,y=e&r.W,b=p?i:i[t]||(i[t]={}),g=b[u],_=p?n:d?n[t]:(n[t]||{})[u];p&&(a=t);for(l in a)c=!h&&_&&void 0!==_[l],c&&l in b||(f=c?_[l]:a[l],b[l]=p&&"function"!=typeof _[l]?a[l]:m&&c?o(f,n):y&&_[l]==f?function(e){var t=function(t,a,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,a)}return new e(t,a,n)}return e.apply(this,arguments)};return t[u]=e[u],t}(f):v&&"function"==typeof f?o(Function.call,f):f,v&&((b.virtual||(b.virtual={}))[l]=f,e&r.R&&g&&!g[l]&&s(g,l,f)))};r.F=1,r.G=2,r.S=4,r.P=8,r.B=16,r.W=32,r.U=64,r.R=128,e.exports=r},function(e,t){var a=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=a)},function(e,t){var a=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=a)},function(e,t,a){var n=a(11);e.exports=function(e,t,a){if(n(e),void 0===t)return e;switch(a){case 1:return function(a){return e.call(t,a)};case 2:return function(a,n){return e.call(t,a,n)};case 3:return function(a,n,i){return e.call(t,a,n,i)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,a){var n=a(13),i=a(21);e.exports=a(17)?function(e,t,a){return n.f(e,t,i(1,a))}:function(e,t,a){return e[t]=a,e}},function(e,t,a){var n=a(14),i=a(16),o=a(20),s=Object.defineProperty;t.f=a(17)?Object.defineProperty:function(e,t,a){if(n(e),t=o(t,!0),n(a),i)try{return s(e,t,a)}catch(e){}if("get"in a||"set"in a)throw TypeError("Accessors not supported!");return"value"in a&&(e[t]=a.value),e}},function(e,t,a){var n=a(15);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,a){e.exports=!a(17)&&!a(18)(function(){return 7!=Object.defineProperty(a(19)("div"),"a",{get:function(){return 7}}).a})},function(e,t,a){e.exports=!a(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,a){var n=a(15),i=a(8).document,o=n(i)&&n(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},function(e,t,a){var n=a(15);e.exports=function(e,t){if(!n(e))return e;var a,i;if(t&&"function"==typeof(a=e.toString)&&!n(i=a.call(e)))return i;if("function"==typeof(a=e.valueOf)&&!n(i=a.call(e)))return i;if(!t&&"function"==typeof(a=e.toString)&&!n(i=a.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,a){"use strict";var n=a(23),i=a(38),o=a(39),s=a(40),u=a(27),r=Object.assign;e.exports=!r||a(18)(function(){var e={},t={},a=Symbol(),n="abcdefghijklmnopqrst";return e[a]=7,n.split("").forEach(function(e){t[e]=e}),7!=r({},e)[a]||Object.keys(r({},t)).join("")!=n})?function(e,t){for(var a=s(e),r=arguments.length,l=1,c=i.f,f=o.f;r>l;)for(var h,p=u(arguments[l++]),d=c?n(p).concat(c(p)):n(p),v=d.length,m=0;v>m;)f.call(p,h=d[m++])&&(a[h]=p[h]);return a}:r},function(e,t,a){var n=a(24),i=a(37);e.exports=Object.keys||function(e){return n(e,i)}},function(e,t,a){var n=a(25),i=a(26),o=a(30)(!1),s=a(34)("IE_PROTO");e.exports=function(e,t){var a,u=i(e),r=0,l=[];for(a in u)a!=s&&n(u,a)&&l.push(a);for(;t.length>r;)n(u,a=t[r++])&&(~o(l,a)||l.push(a));return l}},function(e,t){var a={}.hasOwnProperty;e.exports=function(e,t){return a.call(e,t)}},function(e,t,a){var n=a(27),i=a(29);e.exports=function(e){return n(i(e))}},function(e,t,a){var n=a(28);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},function(e,t){var a={}.toString;e.exports=function(e){return a.call(e).slice(8,-1)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,a){var n=a(26),i=a(31),o=a(33);e.exports=function(e){return function(t,a,s){var u,r=n(t),l=i(r.length),c=o(s,l);if(e&&a!=a){for(;l>c;)if(u=r[c++],u!=u)return!0}else for(;l>c;c++)if((e||c in r)&&r[c]===a)return e||c||0;return!e&&-1}}},function(e,t,a){var n=a(32),i=Math.min;e.exports=function(e){return e>0?i(n(e),9007199254740991):0}},function(e,t){var a=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:a)(e)}},function(e,t,a){var n=a(32),i=Math.max,o=Math.min;e.exports=function(e,t){return e=n(e),e<0?i(e+t,0):o(e,t)}},function(e,t,a){var n=a(35)("keys"),i=a(36);e.exports=function(e){return n[e]||(n[e]=i(e))}},function(e,t,a){var n=a(8),i="__core-js_shared__",o=n[i]||(n[i]={});e.exports=function(e){return o[e]||(o[e]={})}},function(e,t){var a=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++a+n).toString(36))}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,a){var n=a(29);e.exports=function(e){return Object(n(e))}},function(e,t,a){!function(t,a){e.exports=a()}(this,function(){return function(e){function t(n){if(a[n])return a[n].exports;var i=a[n]={exports:{},id:n,loaded:!1};return e[n].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var a={};return t.m=e,t.c=a,t.p="",t(0)}([function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(1),o=n(i);t.default=o.default},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(2),o=n(i),s=a(3),u=n(s),r=a(22),l=function(){function e(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{name:"",effectChain:{},values:[]},a=arguments[1];if((0,o.default)(this,e),this.isEffectUnit=!0,!a)throw new Error("The AudioContext specified (3° parameter) is not defined!");this.name=name,this.audioCtx=a,this.effectChain=(0,r.functionsToValues)(t.effectChain),this.values=(0,r.bindMethodsToValues)(t.values,this.effectChain),this.values.forEach(function(e){e.options.defaultValue&&e.set(e.options.defaultValue)}),this.setupEffectChain()}return(0,u.default)(e,[{key:"enable",value:function(){this.effectGain.gain.value=1,this.directGain.gain.value=0}},{key:"disable",value:function(){this.effectGain.gain.value=0,this.directGain.gain.value=1}},{key:"connect",value:function(e){e.isEffectUnit?this.output.connect(e.input):this.output.connect(e)}},{key:"setValue",value:function(e,t){(0,r.filterValue)(this.values,e).set(t)}},{key:"getValueOptions",value:function(e){return(0,r.filterValue)(this.values,e).options}},{key:"setupEffectChain",value:function(){this.effectGain=this.audioCtx.createGain(),this.directGain=this.audioCtx.createGain(),this.output=this.audioCtx.createGain(),this.input=this.audioCtx.createGain(),this.input.connect(this.effectGain),this.input.connect(this.directGain),this.directGain.connect(this.output);var e=(0,r.objToArray)(this.effectChain);if(e.length>=1){this.effectGain.connect(e[0]);for(var t=0;t<e.length-1;t++)e[t].connect(e[t+1]);e[e.length-1].connect(this.output)}this.enable()}},{key:"disconnect",value:function(){this.output.disconnect()}}]),e}();t.default=l},function(e,t){"use strict";t.__esModule=!0,t.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=a(4),o=n(i);t.default=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),(0,o.default)(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}()},function(e,t,a){e.exports={default:a(5),__esModule:!0}},function(e,t,a){a(6);var n=a(9).Object;e.exports=function(e,t,a){return n.defineProperty(e,t,a)}},function(e,t,a){var n=a(7);n(n.S+n.F*!a(17),"Object",{defineProperty:a(13).f})},function(e,t,a){var n=a(8),i=a(9),o=a(10),s=a(12),u="prototype",r=function(e,t,a){var l,c,f,h=e&r.F,p=e&r.G,d=e&r.S,v=e&r.P,m=e&r.B,y=e&r.W,b=p?i:i[t]||(i[t]={}),g=b[u],_=p?n:d?n[t]:(n[t]||{})[u];p&&(a=t);for(l in a)c=!h&&_&&void 0!==_[l],c&&l in b||(f=c?_[l]:a[l],b[l]=p&&"function"!=typeof _[l]?a[l]:m&&c?o(f,n):y&&_[l]==f?function(e){var t=function(t,a,n){if(this instanceof e){switch(arguments.length){case 0:return new e;case 1:return new e(t);case 2:return new e(t,a)}return new e(t,a,n)}return e.apply(this,arguments)};return t[u]=e[u],t}(f):v&&"function"==typeof f?o(Function.call,f):f,v&&((b.virtual||(b.virtual={}))[l]=f,e&r.R&&g&&!g[l]&&s(g,l,f)))};r.F=1,r.G=2,r.S=4,r.P=8,r.B=16,r.W=32,r.U=64,r.R=128,e.exports=r},function(e,t){var a=e.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=a)},function(e,t){var a=e.exports={version:"2.4.0"};"number"==typeof __e&&(__e=a)},function(e,t,a){var n=a(11);e.exports=function(e,t,a){if(n(e),void 0===t)return e;switch(a){case 1:return function(a){return e.call(t,a)};case 2:return function(a,n){return e.call(t,a,n)};case 3:return function(a,n,i){return e.call(t,a,n,i)}}return function(){return e.apply(t,arguments)}}},function(e,t){e.exports=function(e){if("function"!=typeof e)throw TypeError(e+" is not a function!");return e}},function(e,t,a){var n=a(13),i=a(21);e.exports=a(17)?function(e,t,a){return n.f(e,t,i(1,a))}:function(e,t,a){return e[t]=a,e}},function(e,t,a){var n=a(14),i=a(16),o=a(20),s=Object.defineProperty;t.f=a(17)?Object.defineProperty:function(e,t,a){if(n(e),t=o(t,!0),n(a),i)try{return s(e,t,a)}catch(e){}if("get"in a||"set"in a)throw TypeError("Accessors not supported!");return"value"in a&&(e[t]=a.value),e}},function(e,t,a){var n=a(15);e.exports=function(e){if(!n(e))throw TypeError(e+" is not an object!");return e}},function(e,t){e.exports=function(e){return"object"==typeof e?null!==e:"function"==typeof e}},function(e,t,a){e.exports=!a(17)&&!a(18)(function(){return 7!=Object.defineProperty(a(19)("div"),"a",{get:function(){return 7}}).a})},function(e,t,a){e.exports=!a(18)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(e,t){e.exports=function(e){try{return!!e()}catch(e){return!0}}},function(e,t,a){var n=a(15),i=a(8).document,o=n(i)&&n(i.createElement);e.exports=function(e){return o?i.createElement(e):{}}},function(e,t,a){var n=a(15);e.exports=function(e,t){if(!n(e))return e;var a,i;if(t&&"function"==typeof(a=e.toString)&&!n(i=a.call(e)))return i;if("function"==typeof(a=e.valueOf)&&!n(i=a.call(e)))return i;if(!t&&"function"==typeof(a=e.toString)&&!n(i=a.call(e)))return i;throw TypeError("Can't convert object to primitive value")}},function(e,t){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.filterValue=t.objToArray=t.functionsToValues=t.bindMethodsToValues=void 0;var i=a(23),o=n(i);t.bindMethodsToValues=function(e,t){return e.map(function(e){if("function"!=typeof e.set)throw new Error("The specified value for the 'set'-field of the '"+e.name+"' - value is not a function!");return(0,o.default)({},e,{set:e.set.bind(void 0,t)})})},t.functionsToValues=function(e){var t=Object.assign({},e);for(var a in t)"function"==typeof t[a]&&(t[a]=t[a]());return t},t.objToArray=function(e){var t=[];for(var a in e)t.push(e[a]);return t},t.filterValue=function(e,t){var a=e.filter(function(e){return e.name===t})[0];if(!a)throw new Error("Tried to access inexistent value '"+t+"'.");return a}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var i=a(24),o=n(i);t.default=o.default||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}},function(e,t,a){e.exports={default:a(25),__esModule:!0}},function(e,t,a){a(26),e.exports=a(9).Object.assign},function(e,t,a){var n=a(7);n(n.S+n.F,"Object",{assign:a(27)})},function(e,t,a){"use strict";var n=a(28),i=a(43),o=a(44),s=a(45),u=a(32),r=Object.assign;e.exports=!r||a(18)(function(){var e={},t={},a=Symbol(),n="abcdefghijklmnopqrst";return e[a]=7,n.split("").forEach(function(e){t[e]=e}),7!=r({},e)[a]||Object.keys(r({},t)).join("")!=n})?function(e,t){for(var a=s(e),r=arguments.length,l=1,c=i.f,f=o.f;r>l;)for(var h,p=u(arguments[l++]),d=c?n(p).concat(c(p)):n(p),v=d.length,m=0;v>m;)f.call(p,h=d[m++])&&(a[h]=p[h]);return a}:r},function(e,t,a){var n=a(29),i=a(42);e.exports=Object.keys||function(e){return n(e,i)}},function(e,t,a){var n=a(30),i=a(31),o=a(35)(!1),s=a(39)("IE_PROTO");e.exports=function(e,t){var a,u=i(e),r=0,l=[];for(a in u)a!=s&&n(u,a)&&l.push(a);for(;t.length>r;)n(u,a=t[r++])&&(~o(l,a)||l.push(a));return l}},function(e,t){var a={}.hasOwnProperty;e.exports=function(e,t){return a.call(e,t)}},function(e,t,a){var n=a(32),i=a(34);e.exports=function(e){return n(i(e))}},function(e,t,a){var n=a(33);e.exports=Object("z").propertyIsEnumerable(0)?Object:function(e){return"String"==n(e)?e.split(""):Object(e)}},function(e,t){var a={}.toString;e.exports=function(e){return a.call(e).slice(8,-1)}},function(e,t){e.exports=function(e){if(void 0==e)throw TypeError("Can't call method on  "+e);return e}},function(e,t,a){var n=a(31),i=a(36),o=a(38);e.exports=function(e){return function(t,a,s){var u,r=n(t),l=i(r.length),c=o(s,l);if(e&&a!=a){for(;l>c;)if(u=r[c++],u!=u)return!0}else for(;l>c;c++)if((e||c in r)&&r[c]===a)return e||c||0;return!e&&-1}}},function(e,t,a){var n=a(37),i=Math.min;e.exports=function(e){return e>0?i(n(e),9007199254740991):0}},function(e,t){var a=Math.ceil,n=Math.floor;e.exports=function(e){return isNaN(e=+e)?0:(e>0?n:a)(e)}},function(e,t,a){var n=a(37),i=Math.max,o=Math.min;e.exports=function(e,t){return e=n(e),e<0?i(e+t,0):o(e,t)}},function(e,t,a){var n=a(40)("keys"),i=a(41);e.exports=function(e){return n[e]||(n[e]=i(e))}},function(e,t,a){var n=a(8),i="__core-js_shared__",o=n[i]||(n[i]={});e.exports=function(e){return o[e]||(o[e]={})}},function(e,t){var a=0,n=Math.random();e.exports=function(e){return"Symbol(".concat(void 0===e?"":e,")_",(++a+n).toString(36))}},function(e,t){e.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(e,t){t.f=Object.getOwnPropertySymbols},function(e,t){t.f={}.propertyIsEnumerable},function(e,t,a){var n=a(34);e.exports=function(e){return Object(n(e))}}])})},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new c.default(e);return new r.default((0,s.default)({},d,{effectChain:{chorus:new t.Chorus({rate:f,feedback:h,delay:p})}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.chorusData=void 0;var o=a(3),s=n(o);t.default=i;var u=a(41),r=n(u),l=a(1),c=n(l),f=1.5,h=.2,p=.0045,d=t.chorusData={name:"chorus",values:[{name:"rate",options:{type:"range",defaultValue:f,min:.01,max:8,step:.01},set:function(e,t){e.chorus.rate=t}},{name:"feedback",options:{type:"range",defaultValue:h,min:0,max:1,step:.01},set:function(e,t){e.chorus.feedback=t}},{name:"delay",options:{type:"range",defaultValue:p,min:0,max:1,step:.01},set:function(e,t){e.chorus.delay=t}}]}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new c.default(e);return new r.default((0,s.default)({},m,{effectChain:{delay:new t.Delay({feedback:f,delayTime:h,wetLevel:p,dryLevel:d,cutoff:v})}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.delayData=void 0;var o=a(3),s=n(o);t.default=i;var u=a(41),r=n(u),l=a(1),c=n(l),f=.45,h=150,p=.25,d=1,v=2e3,m=t.delayData={name:"delay",values:[{name:"feedback",options:{type:"range",defaultValue:f,min:0,max:1,step:.01},set:function(e,t){e.delay.feedback=t}},{name:"delayTime",options:{type:"range",defaultValue:h,min:1,max:1e4,step:1},set:function(e,t){e.delay.delayTime=t}},{name:"wetLevel",options:{type:"range",defaultValue:p,min:0,max:1,step:.01},set:function(e,t){e.delay.wetLevel=t}},{name:"dryLevel",options:{type:"range",defaultValue:d,min:0,max:1,step:.01},set:function(e,t){e.delay.dryLevel=t}},{name:"cutoff",options:{type:"range",defaultValue:v,min:20,max:22050,step:1},set:function(e,t){e.delay.cutoff=t}}]}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new c.default(e);return new r.default((0,s.default)({},m,{effectChain:{phaser:new t.Phaser({rate:1.2,depth:.3,feedback:.2,stereoPhase:30,baseModulationFrequency:700})}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.phaserData=void 0;var o=a(3),s=n(o);t.default=i;var u=a(41),r=n(u),l=a(1),c=n(l),f=1.2,h=.3,p=.2,d=30,v=700,m=t.phaserData={name:"phaser",values:[{name:"rate",options:{type:"range",defaultValue:f,min:.01,max:8,step:.01},set:function(e,t){e.phaser.rate=t}},{name:"depth",options:{type:"range",defaultValue:h,min:0,max:1,step:.01},set:function(e,t){e.phaser.depth=t}},{name:"feedback",options:{type:"range",defaultValue:p,min:0,max:1,step:.01},set:function(e,t){e.phaser.feedback=t}},{name:"stereoPhase",options:{type:"range",defaultValue:d,min:0,max:180,step:.1},set:function(e,t){e.phaser.stereoPhase=t}},{name:"baseModulationFrequency",options:{type:"range",defaultValue:v,min:500,max:1500,step:1},set:function(e,t){e.phaser.baseModulationFrequency=t}}]}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new c.default(e);return new r.default((0,s.default)({},d,{effectChain:{overdrive:new t.Overdrive({outputGain:f,drive:h,curveAmount:p,algorithmIndex:0})}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.overdriveData=void 0;var o=a(3),s=n(o);t.default=i;var u=a(41),r=n(u),l=a(1),c=n(l),f=.5,h=.7,p=1,d=t.overdriveData={name:"overdrive",values:[{name:"outputGain",options:{type:"range",defaultValue:f,min:0,max:1,step:.01},set:function(e,t){e.overdrive.outputGain=t}}]}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new c.default(e);return new r.default((0,s.default)({},b,{effectChain:{compressor:new t.Compressor({threshold:f,makeupGain:h,attack:p,release:d,ratio:v,knee:m,automakeup:y})}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.compressorData=void 0;var o=a(3),s=n(o);t.default=i;var u=a(41),r=n(u),l=a(1),c=n(l),f=-1,h=1,p=1,d=0,v=4,m=5,y=!0,b=t.compressorData={name:"compressor",values:[{name:"threshold",options:{type:"range",defaultValue:f,min:-100,max:0,step:.1},set:function(e,t){e.compressor.threshold=t}},{name:"makeupGain",options:{type:"range",defaultValue:h,min:0,max:1,step:.01},set:function(e,t){e.compressor.makeupGain=t}},{name:"attack",options:{type:"range",defaultValue:p,min:0,max:1e3,step:1},set:function(e,t){e.compressor.attack=t}},{name:"release",options:{type:"range",defaultValue:d,min:0,max:3e3,step:1},set:function(e,t){e.compressor.release=t}},{name:"ratio",options:{type:"range",defaultValue:v,min:1,max:20,step:1},set:function(e,t){e.compressor.ratio=t}},{name:"knee",options:{type:"range",defaultValue:m,min:0,max:40,step:1},set:function(e,t){e.compressor.knee=t}},{name:"automakeup",options:{type:"single",defaultValue:y},set:function(e,t){e.compressor.automakeup=t}}]}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){return new r.default((0,s.default)({},c,{effectChain:{lowpass:function(){var t=e.createBiquadFilter();return t.type="lowpass",t.frequency.value=800,t}}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.lowpassData=void 0;var o=a(3),s=n(o);t.default=i;var u=a(41),r=n(u),l=800,c=t.lowpassData={name:"lowpass",values:[{name:"frequency",options:{type:"range",defaultValue:l,min:0,max:2e4,step:1},set:function(e,t){e.lowpass.frequency.value=t}}]}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){return new r.default((0,s.default)({},c,{effectChain:{highpass:function(){var t=e.createBiquadFilter();return t.type="highpass",t.frequency.value=l,t}}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.highpassData=void 0;var o=a(3),s=n(o);t.default=i;var u=a(41),r=n(u),l=200,c=t.highpassData={name:"highpass",values:[{name:"frequency",options:{type:"range",defaultValue:l,min:0,max:2e4,step:1},set:function(e,t){e.highpass.frequency.value=t}}]}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new c.default(e);return new r.default((0,s.default)({},d,{effectChain:{tremolo:new t.Tremolo({intensity:f,rate:h,stereoPhase:p})}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.tremoloData=void 0;var o=a(3),s=n(o);t.default=i;var u=a(41),r=n(u),l=a(1),c=n(l),f=.3,h=4,p=0,d=t.tremoloData={name:"tremolo",values:[{name:"intensity",options:{type:"range",defaultValue:f,min:0,max:1,step:.01},set:function(e,t){e.tremolo.intensity=t}},{name:"rate",options:{type:"range",defaultValue:h,min:.001,max:8,step:.01},set:function(e,t){e.tremolo.rate=t}},{name:"stereoPhase",options:{type:"range",defaultValue:p,min:0,max:180,step:1},set:function(e,t){e.tremolo.stereoPhase=t}}]}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new c.default(e);return new r.default((0,s.default)({},y,{effectChain:{wahwah:new t.WahWah({automode:f,baseFrequency:h,excursionOctaves:p,sweep:d,resonance:v,sensitivity:m})}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.wahWahData=void 0;var o=a(3),s=n(o);t.default=i;var u=a(41),r=n(u),l=a(1),c=n(l),f=!0,h=.5,p=2,d=.2,v=10,m=.5,y=t.wahWahData={name:"wahwah",values:[{name:"automode",options:{type:"single",defaultValue:f},set:function(e,t){e.wahwah.automode=t}},{name:"baseFrequency",options:{type:"range",defaultValue:h,min:0,max:1,step:.01},set:function(e,t){e.wahwah.baseFrequency=t}},{name:"excursionOctaves",options:{type:"range",defaultValue:p,min:0,max:6,step:1},set:function(e,t){e.wahwah.excursionOctaves=t}},{name:"sweep",options:{type:"range",defaultValue:d,min:0,max:1,step:.01},set:function(e,t){e.wahwah.sweep=t}},{name:"resonance",options:{type:"range",defaultValue:v,min:0,max:100,step:1},set:function(e,t){e.wahwah.resonance=t}},{name:"sensitivity",options:{type:"range",defaultValue:m,min:0,max:1,step:.01},set:function(e,t){e.wahwah.sensitivity=t}}]}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new c.default(e);return new r.default((0,s.default)({},p,{effectChain:{bitcrusher:new t.Bitcrusher({bits:4,normfreq:.1,bufferSize:4096})}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.bitcrusherData=void 0;var o=a(3),s=n(o);t.default=i;var u=a(41),r=n(u),l=a(1),c=n(l),f=4,h=.1,p=t.bitcrusherData={name:"bitcrusher",values:[{name:"bits",options:{type:"range",defaultValue:f,min:1,max:16,step:1},set:function(e,t){e.bitcrusher.bits=t}},{name:"normfreq",options:{type:"range",defaultValue:h,min:.1,max:1,step:.01},set:function(e,t){e.bitcrusher.normfreq=t}}]}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new c.default(e);return new r.default((0,s.default)({},p,{effectChain:{moog:new t.MoogFilter({cutoff:.065,resonance:3.5,bufferSize:4096})}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.moogData=void 0;var o=a(3),s=n(o);t.default=i;var u=a(41),r=n(u),l=a(1),c=n(l),f=.065,h=3.5,p=t.moogData={name:"moog",values:[{name:"cutoff",options:{type:"range",defaultValue:f,min:0,max:1,step:.01},set:function(e,t){e.moog.cutoff=t}},{name:"resonance",options:{type:"range",defaultValue:h,min:0,max:4,step:.01},set:function(e,t){e.moog.resonance=t}}]}},function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}function i(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:new c.default(e);return new r.default((0,s.default)({},v,{effectChain:{pingpong:new t.PingPongDelay({wetLevel:.5,feedback:.3,delayTimeLeft:150,delayTimeRight:200})}}),e)}Object.defineProperty(t,"__esModule",{value:!0}),t.pingPongDelayData=void 0;var o=a(3),s=n(o);t.default=i;var u=a(41),r=n(u),l=a(1),c=n(l),f=.5,h=.3,p=150,d=150,v=t.pingPongDelayData={name:"pingPongDelay",values:[{name:"wetLevel",options:{type:"range",defaultValue:f,min:0,max:1,step:.01},set:function(e,t){e.pingpong.wetLevel=t}},{name:"feedback",options:{type:"range",defaultValue:h,min:0,max:1,step:.01},set:function(e,t){e.pingpong.feedback=t}},{name:"delayTimeLeft",options:{type:"range",defaultValue:p,min:1,max:1e4,step:1},set:function(e,t){e.pingpong.delayTimeLeft=t}},{name:"delayTimeRight",options:{type:"range",defaultValue:d,min:1,max:1e4,step:1},set:function(e,t){e.pingpong.DEFAULT_DELAYTIMERIGHT=t}}]}}])});

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(32), __esModule: true };

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(33), __esModule: true };

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(59);
__webpack_require__(57);
module.exports = __webpack_require__(5).Array.from;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(58);
var $Object = __webpack_require__(5).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(22)
  , toLength  = __webpack_require__(23)
  , toIndex   = __webpack_require__(54);
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
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(15)
  , TAG = __webpack_require__(0)('toStringTag')
  // ES3 wrong here
  , ARG = cof(function(){ return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function(it, key){
  try {
    return it[key];
  } catch(e){ /* empty */ }
};

module.exports = function(it){
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(3)
  , createDesc      = __webpack_require__(12);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(2).document && document.documentElement;

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(1) && !__webpack_require__(19)(function(){
  return Object.defineProperty(__webpack_require__(17)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(15);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(11)
  , ITERATOR   = __webpack_require__(0)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(4);
module.exports = function(iterator, fn, value, entries){
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch(e){
    var ret = iterator['return'];
    if(ret !== undefined)anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(47)
  , descriptor     = __webpack_require__(12)
  , setToStringTag = __webpack_require__(20)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(7)(IteratorPrototype, __webpack_require__(0)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(46)
  , $export        = __webpack_require__(9)
  , redefine       = __webpack_require__(52)
  , hide           = __webpack_require__(7)
  , has            = __webpack_require__(6)
  , Iterators      = __webpack_require__(11)
  , $iterCreate    = __webpack_require__(43)
  , setToStringTag = __webpack_require__(20)
  , getPrototypeOf = __webpack_require__(49)
  , ITERATOR       = __webpack_require__(0)('iterator')
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(0)('iterator')
  , SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function(){ SAFE_CLOSING = true; };
  Array.from(riter, function(){ throw 2; });
} catch(e){ /* empty */ }

module.exports = function(exec, skipClosing){
  if(!skipClosing && !SAFE_CLOSING)return false;
  var safe = false;
  try {
    var arr  = [7]
      , iter = arr[ITERATOR]();
    iter.next = function(){ return {done: safe = true}; };
    arr[ITERATOR] = function(){ return iter; };
    exec(arr);
  } catch(e){ /* empty */ }
  return safe;
};

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(4)
  , dPs         = __webpack_require__(48)
  , enumBugKeys = __webpack_require__(18)
  , IE_PROTO    = __webpack_require__(13)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(17)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(38).appendChild(iframe);
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
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(3)
  , anObject = __webpack_require__(4)
  , getKeys  = __webpack_require__(51);

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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(6)
  , toObject    = __webpack_require__(24)
  , IE_PROTO    = __webpack_require__(13)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(6)
  , toIObject    = __webpack_require__(22)
  , arrayIndexOf = __webpack_require__(35)(false)
  , IE_PROTO     = __webpack_require__(13)('IE_PROTO');

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
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(50)
  , enumBugKeys = __webpack_require__(18);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(14)
  , defined   = __webpack_require__(8);
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
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(14)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 55 */
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(36)
  , ITERATOR  = __webpack_require__(0)('iterator')
  , Iterators = __webpack_require__(11);
module.exports = __webpack_require__(5).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(16)
  , $export        = __webpack_require__(9)
  , toObject       = __webpack_require__(24)
  , call           = __webpack_require__(42)
  , isArrayIter    = __webpack_require__(41)
  , toLength       = __webpack_require__(23)
  , createProperty = __webpack_require__(37)
  , getIterFn      = __webpack_require__(56);

$export($export.S + $export.F * !__webpack_require__(45)(function(iter){ Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
    var O       = toObject(arrayLike)
      , C       = typeof this == 'function' ? this : Array
      , aLen    = arguments.length
      , mapfn   = aLen > 1 ? arguments[1] : undefined
      , mapping = mapfn !== undefined
      , index   = 0
      , iterFn  = getIterFn(O)
      , length, result, step, iterator;
    if(mapping)mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for(result = new C(length); length > index; index++){
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(9);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(1), 'Object', {defineProperty: __webpack_require__(3).f});

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(53)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(44)(String, 'String', function(iterated){
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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _toConsumableArray2 = __webpack_require__(28);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(26);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(27);

var _createClass3 = _interopRequireDefault(_createClass2);

var _webaudioEffectUnitsCollection = __webpack_require__(29);

var _webaudioEffectUnitsCollection2 = _interopRequireDefault(_webaudioEffectUnitsCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chnl = function () {
  function Chnl(audioCtx) {
    (0, _classCallCheck3.default)(this, Chnl);
    this.currentGraph = [];

    this.context = audioCtx;
    this.input = audioCtx.createGain();
    this.output = audioCtx.createGain();
    this.effects = (0, _webaudioEffectUnitsCollection2.default)(audioCtx);
    // Setup initial graph
    this.setupGraph([this.input, this.effects.gain, this.output]);
  }

  (0, _createClass3.default)(Chnl, [{
    key: 'setupGraph',
    value: function setupGraph(graph) {
      // first of all, clear all connections (all nodes but the output)
      for (var i = 0; i < this.currentGraph.length - 1; i++) {
        var currNode = this.currentGraph[i];
        // Disconnect all outgoing connections
        currNode.disconnect();
      }

      for (var _i = 0; _i < graph.length - 1; _i++) {
        var _currNode = graph[_i];
        var nextNode = graph[_i + 1];
        _currNode.connect(nextNode);
      }

      this.currentGraph = graph;
    }
  }, {
    key: 'addEffect',
    value: function addEffect(name) {
      var _this = this;

      var effect = this.effects[name];

      if (!effect) throw new Error('You tried to add an inexistent effect.');

      if (!effect.name) this.effects[name].name = name;

      // Create new graph: input -> (all effects which are already present in the graph) -> effectToAdd  -> output
      var newGraph = [this.input].concat((0, _toConsumableArray3.default)(this.currentGraph.filter(function (node) {
        return node !== _this.input && node !== _this.output;
      })), [effect, this.output]);

      this.setupGraph(newGraph);
    }
  }, {
    key: 'removeEffect',
    value: function removeEffect(name) {

      this.setupGraph(this.currentGraph.filter(function (node) {
        return node.name !== name;
      }));
    }
  }, {
    key: 'connect',
    value: function connect(node) {
      this.output.connect(node);
    }
  }]);
  return Chnl;
}();

/*const audioCtx = new AudioContext();
const audioElem = new Audio(song);
const audioElem2 = new Audio(song);
const audio = audioCtx.createMediaElementSource(audioElem);
const audio2 = audioCtx.createMediaElementSource(audioElem2);
const chnl = new Chnl(audioCtx);
const chnl2 = new Chnl(audioCtx);

audio.connect(chnl);
chnl.connect(audioCtx.destination);
chnl.addEffect('delay');

audio2.connect(chnl2);
chnl2.connect(audioCtx.destination);

window.setTimeout(() => {
  //audioElem2.play();
}, 500)

audioElem.play();*/

/*
const audioCtx = new AudioContext();
const chnl = new Chnl(audioCtx);

const osci = audioCtx.createOscillator();
osci.frequency.value = 300;

osci.connect(chnl);
chnl.connect(audioCtx.destination);

// Activate effects
chnl.addEffect('highpass');
chnl.addEffect('bitcrusher');

chnl.effects.gain.setValue('gain', 0.2);
chnl.effects.highpass.setValue('frequency', 500);
chnl.effects.bitcrusher.setValue('bits', 4);

osci.start();
*/


exports.default = Chnl;

/***/ })
/******/ ]);
});