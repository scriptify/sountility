(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("audiolooper", [], factory);
	else if(typeof exports === 'object')
		exports["audiolooper"] = factory();
	else
		root["audiolooper"] = factory();
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
/******/ 	return __webpack_require__(__webpack_require__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(3)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(11)
  , IE8_DOM_DEFINE = __webpack_require__(16)
  , toPrimitive    = __webpack_require__(18)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(0) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(8);

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(9), __esModule: true };

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(19);
var $Object = __webpack_require__(2).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(10);
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
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(1)
  , document = __webpack_require__(4).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(4)
  , core      = __webpack_require__(2)
  , ctx       = __webpack_require__(12)
  , hide      = __webpack_require__(15)
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
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(5)
  , createDesc = __webpack_require__(17);
module.exports = __webpack_require__(0) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(0) && !__webpack_require__(3)(function(){
  return Object.defineProperty(__webpack_require__(13)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(1);
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
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(14);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(0), 'Object', {defineProperty: __webpack_require__(5).f});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AudioLooper = function () {
  function AudioLooper() {
    var audioCtx = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : new AudioContext();
    (0, _classCallCheck3.default)(this, AudioLooper);
    this.pausedTracks = new Map();
    this.bufferNodes = new Map();

    this.audioCtx = audioCtx;
  }

  (0, _createClass3.default)(AudioLooper, [{
    key: "addTrack",
    value: function addTrack(_ref) {
      var _this = this;

      var id = _ref.id,
          audioBuffer = _ref.audioBuffer,
          _ref$doProcessing = _ref.doProcessing,
          doProcessing = _ref$doProcessing === undefined ? true : _ref$doProcessing,
          _ref$trackAdded = _ref.trackAdded,
          trackAdded = _ref$trackAdded === undefined ? function () {} : _ref$trackAdded;

      var isFirstTrack = this.bufferNodes.size === 0;
      var finalAudioBuffer = void 0;

      if (!isFirstTrack && doProcessing) {

        // Prepare buffer!
        var firstTrackBuffer = this.firstTrack.bufferNode.buffer;
        var percentualRatio = Math.ceil(audioBuffer.length / firstTrackBuffer.length);
        var newAudioBuffer = this.audioCtx.createBuffer(audioBuffer.numberOfChannels, firstTrackBuffer.length * percentualRatio, firstTrackBuffer.sampleRate);

        // is this even needed or is it enough to:
        // newAudioBuffer.copyFromChannel(audioBuffer, 2, 0); ????
        for (var channel = 0; channel < newAudioBuffer.numberOfChannels; channel++) {
          var channelDataNew = newAudioBuffer.getChannelData(channel);
          var channelDataCurrent = audioBuffer.getChannelData(channel);
          for (var i = 0; i < channelDataCurrent.length; i++) {
            channelDataNew[i] = channelDataCurrent[i];
          }
        }

        finalAudioBuffer = newAudioBuffer;
      } else {
        finalAudioBuffer = audioBuffer;
      }

      // Create buffersourcenode
      var bufferNode = this.audioCtx.createBufferSource();
      bufferNode.buffer = finalAudioBuffer;
      bufferNode.loop = true;

      var startAt = this.audioCtx.currentTime;

      var track = {
        duration: bufferNode.buffer.duration,
        getCurrentTime: function getCurrentTime() {
          return _this.audioCtx.currentTime - startAt;
        },
        bufferNode: bufferNode,
        trackAdded: trackAdded // Save for later use!
      };

      this.bufferNodes.set(id, track);

      if (isFirstTrack) {
        this.firstTrack = track;
      } else {
        startAt = this.audioCtx.currentTime + (this.firstTrack.duration - this.firstTrack.getCurrentTime());
      }

      bufferNode.start(startAt);

      // Return bufferNode, so user can connect it ecc.
      trackAdded(bufferNode);
    }
  }, {
    key: "pauseTrack",
    value: function pauseTrack(_ref2) {
      var id = _ref2.id;

      if (this.exists(id)) {
        var track = this.bufferNodes.get(id);
        track.bufferNode.stop();
        this.pausedTracks.set(id, track);
        this.removeTrack({ id: id });
      }
    }
  }, {
    key: "playTrack",
    value: function playTrack(_ref3) {
      var id = _ref3.id;

      if (this.pausedTracks.has(id)) {
        var _pausedTracks$get = this.pausedTracks.get(id),
            audioBuffer = _pausedTracks$get.bufferNode.buffer,
            trackAdded = _pausedTracks$get.trackAdded;

        var newBufferNode = this.addTrack({ id: id, audioBuffer: audioBuffer, doProcessing: false, trackAdded: trackAdded });
      } else {
        throw new Error("You tried to pause an inexistent track!");
      }
    }
  }, {
    key: "removeTrack",
    value: function removeTrack(_ref4) {
      var id = _ref4.id;

      if (this.exists(id)) {
        var track = this.bufferNodes.get(id);
        track.bufferNode.stop();
        this.bufferNodes.delete(id);
      }
    }
  }, {
    key: "getCurrentTime",
    value: function getCurrentTime(_ref5) {
      var id = _ref5.id;

      if (this.exists(id)) {
        var track = this.bufferNodes.get(id);
        return track.getCurrentTime();
      }
    }
  }, {
    key: "exists",
    value: function exists(id) {

      if (!this.bufferNodes.has(id)) {
        throw new Error("You tried to access an inexistent track!");
      }
      return true;
    }
  }]);
  return AudioLooper;
}();

/*import Recordy from 'recordy';
import AudioChnl from 'audiochnl';

const audioCtx = new AudioContext();

const recordy = new Recordy(audioCtx);

recordy.getInput()
  .then(hasInput => {
    if(hasInput)
      console.log('Got mic input!');
    else
      console.error('Could not get mic input.');
  });

render(recordy, audioCtx);

function render(recordy, audioCtx) {


  let time1 = 0;
  let time2 = 0;
  let measurements = [];
  let tracks = [];
  let id = 0;
  let count = 0;

  const looper = new AudioLooper(audioCtx);


  const mainDiv = document.createElement('div');
  mainDiv.class = 'main';

  const recordBtn = document.createElement('button');
  const stopRecordBtn = document.createElement('button');

  recordBtn.textContent = 'Start recording';
  stopRecordBtn.textContent = 'Stop recording';

  recordBtn.addEventListener('click', e => {
    recordy.startRecording();
  });

  stopRecordBtn.addEventListener('click', e => {
    recordy.stopRecording() // TRUE == Create audio object, FALSE = return blob
      .then(blob => {

        // create arraybuffer from blob
        const fileReader = new FileReader();
        fileReader.addEventListener('loadend', e => {

          audioCtx.decodeAudioData(fileReader.result)
            .then(audioBuffer => {

              const id = Math.random() * 1000;

              const bufferNode = looper.addTrack({
                id,
                audioBuffer,
                trackAdded: bufferNode => {
                  bufferNode.connect(audioCtx.destination);
                }
              });

              window.setTimeout(() => {
                looper.pauseTrack({ id });
                window.setTimeout(() => {
                  looper.playTrack({ id });
                }, 1000);
              }, 1000);

            });

        });
        fileReader.readAsArrayBuffer(blob);

      });

  });

  mainDiv.appendChild(recordBtn);
  mainDiv.appendChild(stopRecordBtn);

  document.querySelector('body').appendChild(mainDiv);
}*/


exports.default = AudioLooper;

/***/ })
/******/ ]);
});