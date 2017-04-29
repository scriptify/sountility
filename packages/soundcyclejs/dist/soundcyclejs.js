(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("soundcyclejs", [], factory);
	else if(typeof exports === 'object')
		exports["soundcyclejs"] = factory();
	else
		root["soundcyclejs"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 73);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(92);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(37)('wks')
  , uid        = __webpack_require__(28)
  , Symbol     = __webpack_require__(4).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EffectUnit = __webpack_require__(74);

var _EffectUnit2 = _interopRequireDefault(_EffectUnit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _EffectUnit2.default;

/* const audioCtx = new AudioContext();
const effect = new EffectUnit({
  name: 'gain',
  effectChain: {
    gain: audioCtx.createGain()
  },
  values: [
    {
      name: 'gain',
      options: {
        defaultValue: 1
      },
      set: (effectChain, val) => {
        effectChain.gain.gain.value = val;
      }
    }
  ]
}, audioCtx);

effect.setValue('gain', 0.8);

const osci = audioCtx.createOscillator();
osci.frequency.value = 600;
osci.connect(effect.input);
effect.connect(audioCtx.destination);
osci.start();

window.setTimeout(() => {
  effect.disconnect();
}, 1000);*/

/***/ }),
/* 3 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

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

/*
    Copyright (c) 2012 DinahMoe AB & Oskar Eriksson

    Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation
    files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy,
    modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software
    is furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
    DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE
    OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
/*global module*/
(function() {

    var userContext,
        userInstance,
        pipe = function(param, val) {
            param.value = val;
        },
        Super = Object.create(null, {
            activate: {
                writable: true,
                value: function(doActivate) {
                    if (doActivate) {
                        this.input.disconnect();
                        this.input.connect(this.activateNode);
                        if (this.activateCallback) {
                            this.activateCallback(doActivate);
                        }
                    } else {
                        this.input.disconnect();
                        this.input.connect(this.output);
                    }
                }
            },
            bypass: {
                get: function() {
                    return this._bypass;
                },
                set: function(value) {
                    if (this._lastBypassValue === value) {
                        return;
                    }
                    this._bypass = value;
                    this.activate(!value);
                    this._lastBypassValue = value;
                }
            },
            connect: {
                value: function(target) {
                    this.output.connect(target);
                }
            },
            disconnect: {
                value: function(target) {
                    this.output.disconnect(target);
                }
            },
            connectInOrder: {
                value: function(nodeArray) {
                    var i = nodeArray.length - 1;
                    while (i--) {
                        if (!nodeArray[i].connect) {
                            return console.error("AudioNode.connectInOrder: TypeError: Not an AudioNode.", nodeArray[i]);
                        }
                        if (nodeArray[i + 1].input) {
                            nodeArray[i].connect(nodeArray[i + 1].input);
                        } else {
                            nodeArray[i].connect(nodeArray[i + 1]);
                        }
                    }
                }
            },
            getDefaults: {
                value: function() {
                    var result = {};
                    for (var key in this.defaults) {
                        result[key] = this.defaults[key].value;
                    }
                    return result;
                }
            },
            automate: {
                value: function(property, value, duration, startTime) {
                    var start = startTime ? ~~(startTime / 1000) : userContext.currentTime,
                        dur = duration ? ~~(duration / 1000) : 0,
                        _is = this.defaults[property],
                        param = this[property],
                        method;

                    if (param) {
                        if (_is.automatable) {
                            if (!duration) {
                                method = "setValueAtTime";
                            } else {
                                method = "linearRampToValueAtTime";
                                param.cancelScheduledValues(start);
                                param.setValueAtTime(param.value, start);
                            }
                            param[method](value, dur + start);
                        } else {
                            param = value;
                        }
                    } else {
                        console.error("Invalid Property for " + this.name);
                    }
                }
            }
        }),
        FLOAT = "float",
        BOOLEAN = "boolean",
        STRING = "string",
        INT = "int";

    if (typeof module !== "undefined" && module.exports) {
        module.exports = Tuna;
    } else if (true) {
        window.define("Tuna", definition);
    } else {
        window.Tuna = Tuna;
    }

    function definition() {
        return Tuna;
    }

    function Tuna(context) {
        if (!(this instanceof Tuna)) {
            return new Tuna(context);
        }

        var _window = typeof window === 'undefined' ? {} : window;

        if (!_window.AudioContext) {
            _window.AudioContext = _window.webkitAudioContext;
        }
        if (!context) {
            console.log("tuna.js: Missing audio context! Creating a new context for you.");
            context = _window.AudioContext && (new _window.AudioContext());
        }
        if (!context) {
            throw new Error("Tuna cannot initialize because this environment does not support web audio.");
        }
        connectify(context);
        userContext = context;
        userInstance = this;
    }

    function connectify(context) {
        if (context.__connectified__ === true) return;

        var gain = context.createGain(),
            proto = Object.getPrototypeOf(Object.getPrototypeOf(gain)),
            oconnect = proto.connect;

        proto.connect = shimConnect;
        context.__connectified__ = true; // Prevent overriding connect more than once

        function shimConnect() {
            var node = arguments[0];
            arguments[0] = Super.isPrototypeOf ? (Super.isPrototypeOf(node) ? node.input : node) : (node.input || node);
            oconnect.apply(this, arguments);
            return node;
        }
    }

    function dbToWAVolume(db) {
        return Math.max(0, Math.round(100 * Math.pow(2, db / 6)) / 100);
    }

    function fmod(x, y) {
        // http://kevin.vanzonneveld.net
        // *     example 1: fmod(5.7, 1.3);
        // *     returns 1: 0.5
        var tmp, tmp2, p = 0,
            pY = 0,
            l = 0.0,
            l2 = 0.0;

        tmp = x.toExponential().match(/^.\.?(.*)e(.+)$/);
        p = parseInt(tmp[2], 10) - (tmp[1] + "").length;
        tmp = y.toExponential().match(/^.\.?(.*)e(.+)$/);
        pY = parseInt(tmp[2], 10) - (tmp[1] + "").length;

        if (pY > p) {
            p = pY;
        }

        tmp2 = (x % y);

        if (p < -100 || p > 20) {
            // toFixed will give an out of bound error so we fix it like this:
            l = Math.round(Math.log(tmp2) / Math.log(10));
            l2 = Math.pow(10, l);

            return (tmp2 / l2).toFixed(l - p) * l2;
        } else {
            return parseFloat(tmp2.toFixed(-p));
        }
    }

    function sign(x) {
        if (x === 0) {
            return 1;
        } else {
            return Math.abs(x) / x;
        }
    }

    function tanh(n) {
        return (Math.exp(n) - Math.exp(-n)) / (Math.exp(n) + Math.exp(-n));
    }

    function initValue(userVal, defaultVal) {
        return userVal === undefined ? defaultVal : userVal;
    }

    Tuna.prototype.Bitcrusher = function(properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.bufferSize = properties.bufferSize || this.defaults.bufferSize.value;

        this.input = userContext.createGain();
        this.activateNode = userContext.createGain();
        this.processor = userContext.createScriptProcessor(this.bufferSize, 1, 1);
        this.output = userContext.createGain();

        this.activateNode.connect(this.processor);
        this.processor.connect(this.output);

        var phaser = 0,
            last = 0,
            input, output, step, i, length;
        this.processor.onaudioprocess = function(e) {
            input = e.inputBuffer.getChannelData(0),
            output = e.outputBuffer.getChannelData(0),
            step = Math.pow(1 / 2, this.bits);
            length = input.length;
            for (i = 0; i < length; i++) {
                phaser += this.normfreq;
                if (phaser >= 1.0) {
                    phaser -= 1.0;
                    last = step * Math.floor(input[i] / step + 0.5);
                }
                output[i] = last;
            }
        };

        this.bits = properties.bits || this.defaults.bits.value;
        this.normfreq = initValue(properties.normfreq, this.defaults.normfreq.value);
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.Bitcrusher.prototype = Object.create(Super, {
        name: {
            value: "Bitcrusher"
        },
        defaults: {
            writable: true,
            value: {
                bits: {
                    value: 4,
                    min: 1,
                    max: 16,
                    automatable: false,
                    type: INT
                },
                bufferSize: {
                    value: 4096,
                    min: 256,
                    max: 16384,
                    automatable: false,
                    type: INT
                },
                bypass: {
                    value: false,
                    automatable: false,
                    type: BOOLEAN
                },
                normfreq: {
                    value: 0.1,
                    min: 0.0001,
                    max: 1.0,
                    automatable: false,
                    type: FLOAT
                }
            }
        },
        bits: {
            enumerable: true,
            get: function() {
                return this.processor.bits;
            },
            set: function(value) {
                this.processor.bits = value;
            }
        },
        normfreq: {
            enumerable: true,
            get: function() {
                return this.processor.normfreq;
            },
            set: function(value) {
                this.processor.normfreq = value;
            }
        }
    });

    Tuna.prototype.Cabinet = function(properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.input = userContext.createGain();
        this.activateNode = userContext.createGain();
        this.convolver = this.newConvolver(properties.impulsePath || "../impulses/impulse_guitar.wav");
        this.makeupNode = userContext.createGain();
        this.output = userContext.createGain();

        this.activateNode.connect(this.convolver.input);
        this.convolver.output.connect(this.makeupNode);
        this.makeupNode.connect(this.output);

        this.makeupGain = initValue(properties.makeupGain, this.defaults.makeupGain);
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.Cabinet.prototype = Object.create(Super, {
        name: {
            value: "Cabinet"
        },
        defaults: {
            writable: true,
            value: {
                makeupGain: {
                    value: 1,
                    min: 0,
                    max: 20,
                    automatable: true,
                    type: FLOAT
                },
                bypass: {
                    value: false,
                    automatable: false,
                    type: BOOLEAN
                }
            }
        },
        makeupGain: {
            enumerable: true,
            get: function() {
                return this.makeupNode.gain;
            },
            set: function(value) {
                this.makeupNode.gain.value = value;
            }
        },
        newConvolver: {
            value: function(impulsePath) {
                return new userInstance.Convolver({
                    impulse: impulsePath,
                    dryLevel: 0,
                    wetLevel: 1
                });
            }
        }
    });

    Tuna.prototype.Chorus = function(properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.input = userContext.createGain();
        this.attenuator = this.activateNode = userContext.createGain();
        this.splitter = userContext.createChannelSplitter(2);
        this.delayL = userContext.createDelay();
        this.delayR = userContext.createDelay();
        this.feedbackGainNodeLR = userContext.createGain();
        this.feedbackGainNodeRL = userContext.createGain();
        this.merger = userContext.createChannelMerger(2);
        this.output = userContext.createGain();

        this.lfoL = new userInstance.LFO({
            target: this.delayL.delayTime,
            callback: pipe
        });
        this.lfoR = new userInstance.LFO({
            target: this.delayR.delayTime,
            callback: pipe
        });

        this.input.connect(this.attenuator);
        this.attenuator.connect(this.output);
        this.attenuator.connect(this.splitter);
        this.splitter.connect(this.delayL, 0);
        this.splitter.connect(this.delayR, 1);
        this.delayL.connect(this.feedbackGainNodeLR);
        this.delayR.connect(this.feedbackGainNodeRL);
        this.feedbackGainNodeLR.connect(this.delayR);
        this.feedbackGainNodeRL.connect(this.delayL);
        this.delayL.connect(this.merger, 0, 0);
        this.delayR.connect(this.merger, 0, 1);
        this.merger.connect(this.output);

        this.feedback = initValue(properties.feedback, this.defaults.feedback.value);
        this.rate = initValue(properties.rate, this.defaults.rate.value);
        this.delay = initValue(properties.delay, this.defaults.delay.value);
        this.depth = initValue(properties.depth, this.defaults.depth.value);
        this.lfoR.phase = Math.PI / 2;
        this.attenuator.gain.value = 0.6934; // 1 / (10 ^ (((20 * log10(3)) / 3) / 20))
        this.lfoL.activate(true);
        this.lfoR.activate(true);
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.Chorus.prototype = Object.create(Super, {
        name: {
            value: "Chorus"
        },
        defaults: {
            writable: true,
            value: {
                feedback: {
                    value: 0.4,
                    min: 0,
                    max: 0.95,
                    automatable: false,
                    type: FLOAT
                },
                delay: {
                    value: 0.0045,
                    min: 0,
                    max: 1,
                    automatable: false,
                    type: FLOAT
                },
                depth: {
                    value: 0.7,
                    min: 0,
                    max: 1,
                    automatable: false,
                    type: FLOAT
                },
                rate: {
                    value: 1.5,
                    min: 0,
                    max: 8,
                    automatable: false,
                    type: FLOAT
                },
                bypass: {
                    value: false,
                    automatable: false,
                    type: BOOLEAN
                }
            }
        },
        delay: {
            enumerable: true,
            get: function() {
                return this._delay;
            },
            set: function(value) {
                this._delay = 0.0002 * (Math.pow(10, value) * 2);
                this.lfoL.offset = this._delay;
                this.lfoR.offset = this._delay;
                this._depth = this._depth;
            }
        },
        depth: {
            enumerable: true,
            get: function() {
                return this._depth;
            },
            set: function(value) {
                this._depth = value;
                this.lfoL.oscillation = this._depth * this._delay;
                this.lfoR.oscillation = this._depth * this._delay;
            }
        },
        feedback: {
            enumerable: true,
            get: function() {
                return this._feedback;
            },
            set: function(value) {
                this._feedback = value;
                this.feedbackGainNodeLR.gain.value = this._feedback;
                this.feedbackGainNodeRL.gain.value = this._feedback;
            }
        },
        rate: {
            enumerable: true,
            get: function() {
                return this._rate;
            },
            set: function(value) {
                this._rate = value;
                this.lfoL.frequency = this._rate;
                this.lfoR.frequency = this._rate;
            }
        }
    });

    Tuna.prototype.Compressor = function(properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.input = userContext.createGain();
        this.compNode = this.activateNode = userContext.createDynamicsCompressor();
        this.makeupNode = userContext.createGain();
        this.output = userContext.createGain();

        this.compNode.connect(this.makeupNode);
        this.makeupNode.connect(this.output);

        this.automakeup = initValue(properties.automakeup, this.defaults.automakeup.value);
        this.makeupGain = initValue(properties.makeupGain, this.defaults.makeupGain.value);
        this.threshold = initValue(properties.threshold, this.defaults.threshold.value);
        this.release = initValue(properties.release, this.defaults.release.value);
        this.attack = initValue(properties.attack, this.defaults.attack.value);
        this.ratio = properties.ratio || this.defaults.ratio.value;
        this.knee = initValue(properties.knee, this.defaults.knee.value);
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.Compressor.prototype = Object.create(Super, {
        name: {
            value: "Compressor"
        },
        defaults: {
            writable: true,
            value: {
                threshold: {
                    value: -20,
                    min: -60,
                    max: 0,
                    automatable: true,
                    type: FLOAT
                },
                release: {
                    value: 250,
                    min: 10,
                    max: 2000,
                    automatable: true,
                    type: FLOAT
                },
                makeupGain: {
                    value: 1,
                    min: 1,
                    max: 100,
                    automatable: true,
                    type: FLOAT
                },
                attack: {
                    value: 1,
                    min: 0,
                    max: 1000,
                    automatable: true,
                    type: FLOAT
                },
                ratio: {
                    value: 4,
                    min: 1,
                    max: 50,
                    automatable: true,
                    type: FLOAT
                },
                knee: {
                    value: 5,
                    min: 0,
                    max: 40,
                    automatable: true,
                    type: FLOAT
                },
                automakeup: {
                    value: false,
                    automatable: false,
                    type: BOOLEAN
                },
                bypass: {
                    value: false,
                    automatable: false,
                    type: BOOLEAN
                }
            }
        },
        computeMakeup: {
            value: function() {
                var magicCoefficient = 4, // raise me if the output is too hot
                    c = this.compNode;
                return -(c.threshold.value - c.threshold.value / c.ratio.value) / magicCoefficient;
            }
        },
        automakeup: {
            enumerable: true,
            get: function() {
                return this._automakeup;
            },
            set: function(value) {
                this._automakeup = value;
                if (this._automakeup) this.makeupGain = this.computeMakeup();
            }
        },
        threshold: {
            enumerable: true,
            get: function() {
                return this.compNode.threshold;
            },
            set: function(value) {
                this.compNode.threshold.value = value;
                if (this._automakeup) this.makeupGain = this.computeMakeup();
            }
        },
        ratio: {
            enumerable: true,
            get: function() {
                return this.compNode.ratio;
            },
            set: function(value) {
                this.compNode.ratio.value = value;
                if (this._automakeup) this.makeupGain = this.computeMakeup();
            }
        },
        knee: {
            enumerable: true,
            get: function() {
                return this.compNode.knee;
            },
            set: function(value) {
                this.compNode.knee.value = value;
                if (this._automakeup) this.makeupGain = this.computeMakeup();
            }
        },
        attack: {
            enumerable: true,
            get: function() {
                return this.compNode.attack;
            },
            set: function(value) {
                this.compNode.attack.value = value / 1000;
            }
        },
        release: {
            enumerable: true,
            get: function() {
                return this.compNode.release;
            },
            set: function(value) {
                this.compNode.release.value = value / 1000;
            }
        },
        makeupGain: {
            enumerable: true,
            get: function() {
                return this.makeupNode.gain;
            },
            set: function(value) {
                this.makeupNode.gain.value = dbToWAVolume(value);
            }
        }
    });

    Tuna.prototype.Convolver = function(properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.input = userContext.createGain();
        this.activateNode = userContext.createGain();
        this.convolver = userContext.createConvolver();
        this.dry = userContext.createGain();
        this.filterLow = userContext.createBiquadFilter();
        this.filterHigh = userContext.createBiquadFilter();
        this.wet = userContext.createGain();
        this.output = userContext.createGain();

        this.activateNode.connect(this.filterLow);
        this.activateNode.connect(this.dry);
        this.filterLow.connect(this.filterHigh);
        this.filterHigh.connect(this.convolver);
        this.convolver.connect(this.wet);
        this.wet.connect(this.output);
        this.dry.connect(this.output);

        this.dryLevel = initValue(properties.dryLevel, this.defaults.dryLevel.value);
        this.wetLevel = initValue(properties.wetLevel, this.defaults.wetLevel.value);
        this.highCut = properties.highCut || this.defaults.highCut.value;
        this.buffer = properties.impulse || "../impulses/ir_rev_short.wav";
        this.lowCut = properties.lowCut || this.defaults.lowCut.value;
        this.level = initValue(properties.level, this.defaults.level.value);
        this.filterHigh.type = "lowpass";
        this.filterLow.type = "highpass";
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.Convolver.prototype = Object.create(Super, {
        name: {
            value: "Convolver"
        },
        defaults: {
            writable: true,
            value: {
                highCut: {
                    value: 22050,
                    min: 20,
                    max: 22050,
                    automatable: true,
                    type: FLOAT
                },
                lowCut: {
                    value: 20,
                    min: 20,
                    max: 22050,
                    automatable: true,
                    type: FLOAT
                },
                dryLevel: {
                    value: 1,
                    min: 0,
                    max: 1,
                    automatable: true,
                    type: FLOAT
                },
                wetLevel: {
                    value: 1,
                    min: 0,
                    max: 1,
                    automatable: true,
                    type: FLOAT
                },
                level: {
                    value: 1,
                    min: 0,
                    max: 1,
                    automatable: true,
                    type: FLOAT
                }
            }
        },
        lowCut: {
            get: function() {
                return this.filterLow.frequency;
            },
            set: function(value) {
                this.filterLow.frequency.value = value;
            }
        },
        highCut: {
            get: function() {
                return this.filterHigh.frequency;
            },
            set: function(value) {
                this.filterHigh.frequency.value = value;
            }
        },
        level: {
            get: function() {
                return this.output.gain;
            },
            set: function(value) {
                this.output.gain.value = value;
            }
        },
        dryLevel: {
            get: function() {
                return this.dry.gain;
            },
            set: function(value) {
                this.dry.gain.value = value;
            }
        },
        wetLevel: {
            get: function() {
                return this.wet.gain;
            },
            set: function(value) {
                this.wet.gain.value = value;
            }
        },
        buffer: {
            enumerable: false,
            get: function() {
                return this.convolver.buffer;
            },
            set: function(impulse) {
                var convolver = this.convolver,
                    xhr = new XMLHttpRequest();
                if (!impulse) {
                    console.log("Tuna.Convolver.setBuffer: Missing impulse path!");
                    return;
                }
                xhr.open("GET", impulse, true);
                xhr.responseType = "arraybuffer";
                xhr.onreadystatechange = function() {
                    if (xhr.readyState === 4) {
                        if (xhr.status < 300 && xhr.status > 199 || xhr.status === 302) {
                            userContext.decodeAudioData(xhr.response, function(buffer) {
                                convolver.buffer = buffer;
                            }, function(e) {
                                if (e) console.log("Tuna.Convolver.setBuffer: Error decoding data" + e);
                            });
                        }
                    }
                };
                xhr.send(null);
            }
        }
    });

    Tuna.prototype.Delay = function(properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.input = userContext.createGain();
        this.activateNode = userContext.createGain();
        this.dry = userContext.createGain();
        this.wet = userContext.createGain();
        this.filter = userContext.createBiquadFilter();
        this.delay = userContext.createDelay(10);
        this.feedbackNode = userContext.createGain();
        this.output = userContext.createGain();

        this.activateNode.connect(this.delay);
        this.activateNode.connect(this.dry);
        this.delay.connect(this.filter);
        this.filter.connect(this.feedbackNode);
        this.feedbackNode.connect(this.delay);
        this.feedbackNode.connect(this.wet);
        this.wet.connect(this.output);
        this.dry.connect(this.output);

        this.delayTime = properties.delayTime || this.defaults.delayTime.value;
        this.feedback = initValue(properties.feedback, this.defaults.feedback.value);
        this.wetLevel = initValue(properties.wetLevel, this.defaults.wetLevel.value);
        this.dryLevel = initValue(properties.dryLevel, this.defaults.dryLevel.value);
        this.cutoff = properties.cutoff || this.defaults.cutoff.value;
        this.filter.type = "lowpass";
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.Delay.prototype = Object.create(Super, {
        name: {
            value: "Delay"
        },
        defaults: {
            writable: true,
            value: {
                delayTime: {
                    value: 100,
                    min: 20,
                    max: 1000,
                    automatable: false,
                    type: FLOAT
                },
                feedback: {
                    value: 0.45,
                    min: 0,
                    max: 0.9,
                    automatable: true,
                    type: FLOAT
                },
                cutoff: {
                    value: 20000,
                    min: 20,
                    max: 20000,
                    automatable: true,
                    type: FLOAT
                },
                wetLevel: {
                    value: 0.5,
                    min: 0,
                    max: 1,
                    automatable: true,
                    type: FLOAT
                },
                dryLevel: {
                    value: 1,
                    min: 0,
                    max: 1,
                    automatable: true,
                    type: FLOAT
                }
            }
        },
        delayTime: {
            enumerable: true,
            get: function() {
                return this.delay.delayTime;
            },
            set: function(value) {
                this.delay.delayTime.value = value / 1000;
            }
        },
        wetLevel: {
            enumerable: true,
            get: function() {
                return this.wet.gain;
            },
            set: function(value) {
                this.wet.gain.value = value;
            }
        },
        dryLevel: {
            enumerable: true,
            get: function() {
                return this.dry.gain;
            },
            set: function(value) {
                this.dry.gain.value = value;
            }
        },
        feedback: {
            enumerable: true,
            get: function() {
                return this.feedbackNode.gain;
            },
            set: function(value) {
                this.feedbackNode.gain.value = value;
            }
        },
        cutoff: {
            enumerable: true,
            get: function() {
                return this.filter.frequency;
            },
            set: function(value) {
                this.filter.frequency.value = value;
            }
        }
    });

    Tuna.prototype.Filter = function(properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.input = userContext.createGain();
        this.activateNode = userContext.createGain();
        this.filter = userContext.createBiquadFilter();
        this.output = userContext.createGain();

        this.activateNode.connect(this.filter);
        this.filter.connect(this.output);

        this.frequency = properties.frequency || this.defaults.frequency.value;
        this.Q = properties.resonance || this.defaults.Q.value;
        this.filterType = initValue(properties.filterType, this.defaults.filterType.value);
        this.gain = initValue(properties.gain, this.defaults.gain.value);
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.Filter.prototype = Object.create(Super, {
        name: {
            value: "Filter"
        },
        defaults: {
            writable: true,
            value: {
                frequency: {
                    value: 800,
                    min: 20,
                    max: 22050,
                    automatable: true,
                    type: FLOAT
                },
                Q: {
                    value: 1,
                    min: 0.001,
                    max: 100,
                    automatable: true,
                    type: FLOAT
                },
                gain: {
                    value: 0,
                    min: -40,
                    max: 40,
                    automatable: true,
                    type: FLOAT
                },
                bypass: {
                    value: false,
                    automatable: false,
                    type: BOOLEAN
                },
                filterType: {
                    value: "lowpass",
                    automatable: false,
                    type: STRING
                }
            }
        },
        filterType: {
            enumerable: true,
            get: function() {
                return this.filter.type;
            },
            set: function(value) {
                this.filter.type = value;
            }
        },
        Q: {
            enumerable: true,
            get: function() {
                return this.filter.Q;
            },
            set: function(value) {
                this.filter.Q.value = value;
            }
        },
        gain: {
            enumerable: true,
            get: function() {
                return this.filter.gain;
            },
            set: function(value) {
                this.filter.gain.value = value;
            }
        },
        frequency: {
            enumerable: true,
            get: function() {
                return this.filter.frequency;
            },
            set: function(value) {
                this.filter.frequency.value = value;
            }
        }
    });

    Tuna.prototype.Gain = function(properties) {
        if (!properties) {
            properties = this.getDefaults();
        }

        this.input = userContext.createGain();
        this.activateNode = userContext.createGain();
        this.gainNode = userContext.createGain();
        this.output = userContext.createGain();

        this.activateNode.connect(this.gainNode);
        this.gainNode.connect(this.output);

        this.gain = initValue(properties.gain, this.defaults.gain.value);
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.Gain.prototype = Object.create(Super, {
        name: {
            value: "Gain"
        },
        defaults: {
            writable: true,
            value: {
                bypass: {
                    value: false,
                    automatable: false,
                    type: BOOLEAN
                },
                gain: {
                    value: 1.0,
                    automatable: true,
                    type: FLOAT
                }
            }
        },
        gain: {
            enumerable: true,
            get: function() {
                return this.gainNode.gain;
            },
            set: function(value) {
                this.gainNode.gain.value = value;
            }
        }
    });

    Tuna.prototype.MoogFilter = function(properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.bufferSize = properties.bufferSize || this.defaults.bufferSize.value;

        this.input = userContext.createGain();
        this.activateNode = userContext.createGain();
        this.processor = userContext.createScriptProcessor(this.bufferSize, 1, 1);
        this.output = userContext.createGain();

        this.activateNode.connect(this.processor);
        this.processor.connect(this.output);

        var in1, in2, in3, in4, out1, out2, out3, out4;
        in1 = in2 = in3 = in4 = out1 = out2 = out3 = out4 = 0.0;
        var input, output, f, fb, i, length, inputFactor;
        this.processor.onaudioprocess = function(e) {
            input = e.inputBuffer.getChannelData(0),
                output = e.outputBuffer.getChannelData(0),
                f = this.cutoff * 1.16,
                inputFactor = 0.35013 * (f * f) * (f * f);
            fb = this.resonance * (1.0 - 0.15 * f * f);
            length = input.length;
            for (i = 0; i < length; i++) {
                input[i] -= out4 * fb;
                input[i] *= inputFactor;
                out1 = input[i] + 0.3 * in1 + (1 - f) * out1; // Pole 1
                in1 = input[i];
                out2 = out1 + 0.3 * in2 + (1 - f) * out2; // Pole 2
                in2 = out1;
                out3 = out2 + 0.3 * in3 + (1 - f) * out3; // Pole 3
                in3 = out2;
                out4 = out3 + 0.3 * in4 + (1 - f) * out4; // Pole 4
                in4 = out3;
                output[i] = out4;
            }
        };

        this.cutoff = initValue(properties.cutoff, this.defaults.cutoff.value);
        this.resonance = initValue(properties.resonance, this.defaults.resonance.value);
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.MoogFilter.prototype = Object.create(Super, {
        name: {
            value: "MoogFilter"
        },
        defaults: {
            writable: true,
            value: {
                bufferSize: {
                    value: 4096,
                    min: 256,
                    max: 16384,
                    automatable: false,
                    type: INT
                },
                bypass: {
                    value: false,
                    automatable: false,
                    type: BOOLEAN
                },
                cutoff: {
                    value: 0.065,
                    min: 0.0001,
                    max: 1.0,
                    automatable: false,
                    type: FLOAT
                },
                resonance: {
                    value: 3.5,
                    min: 0.0,
                    max: 4.0,
                    automatable: false,
                    type: FLOAT
                }
            }
        },
        cutoff: {
            enumerable: true,
            get: function() {
                return this.processor.cutoff;
            },
            set: function(value) {
                this.processor.cutoff = value;
            }
        },
        resonance: {
            enumerable: true,
            get: function() {
                return this.processor.resonance;
            },
            set: function(value) {
                this.processor.resonance = value;
            }
        }
    });

    Tuna.prototype.Overdrive = function(properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.input = userContext.createGain();
        this.activateNode = userContext.createGain();
        this.inputDrive = userContext.createGain();
        this.waveshaper = userContext.createWaveShaper();
        this.outputDrive = userContext.createGain();
        this.output = userContext.createGain();

        this.activateNode.connect(this.inputDrive);
        this.inputDrive.connect(this.waveshaper);
        this.waveshaper.connect(this.outputDrive);
        this.outputDrive.connect(this.output);

        this.ws_table = new Float32Array(this.k_nSamples);
        this.drive = initValue(properties.drive, this.defaults.drive.value);
        this.outputGain = initValue(properties.outputGain, this.defaults.outputGain.value);
        this.curveAmount = initValue(properties.curveAmount, this.defaults.curveAmount.value);
        this.algorithmIndex = initValue(properties.algorithmIndex, this.defaults.algorithmIndex.value);
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.Overdrive.prototype = Object.create(Super, {
        name: {
            value: "Overdrive"
        },
        defaults: {
            writable: true,
            value: {
                drive: {
                    value: 1,
                    min: 0,
                    max: 1,
                    automatable: true,
                    type: FLOAT,
                    scaled: true
                },
                outputGain: {
                    value: 1,
                    min: 0,
                    max: 1,
                    automatable: true,
                    type: FLOAT,
                    scaled: true
                },
                curveAmount: {
                    value: 0.725,
                    min: 0,
                    max: 1,
                    automatable: false,
                    type: FLOAT
                },
                algorithmIndex: {
                    value: 0,
                    min: 0,
                    max: 5,
                    automatable: false,
                    type: INT
                }
            }
        },
        k_nSamples: {
            value: 8192
        },
        drive: {
            get: function() {
                return this.inputDrive.gain;
            },
            set: function(value) {
                this._drive = value;
            }
        },
        curveAmount: {
            get: function() {
                return this._curveAmount;
            },
            set: function(value) {
                this._curveAmount = value;
                if (this._algorithmIndex === undefined) {
                    this._algorithmIndex = 0;
                }
                this.waveshaperAlgorithms[this._algorithmIndex](this._curveAmount, this.k_nSamples, this.ws_table);
                this.waveshaper.curve = this.ws_table;
            }
        },
        outputGain: {
            get: function() {
                return this.outputDrive.gain;
            },
            set: function(value) {
                this._outputGain = dbToWAVolume(value);
            }
        },
        algorithmIndex: {
            get: function() {
                return this._algorithmIndex;
            },
            set: function(value) {
                this._algorithmIndex = value;
                this.curveAmount = this._curveAmount;
            }
        },
        waveshaperAlgorithms: {
            value: [
                function(amount, n_samples, ws_table) {
                    amount = Math.min(amount, 0.9999);
                    var k = 2 * amount / (1 - amount),
                        i, x;
                    for (i = 0; i < n_samples; i++) {
                        x = i * 2 / n_samples - 1;
                        ws_table[i] = (1 + k) * x / (1 + k * Math.abs(x));
                    }
                },
                function(amount, n_samples, ws_table) {
                    var i, x, y;
                    for (i = 0; i < n_samples; i++) {
                        x = i * 2 / n_samples - 1;
                        y = ((0.5 * Math.pow((x + 1.4), 2)) - 1) * y >= 0 ? 5.8 : 1.2;
                        ws_table[i] = tanh(y);
                    }
                },
                function(amount, n_samples, ws_table) {
                    var i, x, y, a = 1 - amount;
                    for (i = 0; i < n_samples; i++) {
                        x = i * 2 / n_samples - 1;
                        y = x < 0 ? -Math.pow(Math.abs(x), a + 0.04) : Math.pow(x, a);
                        ws_table[i] = tanh(y * 2);
                    }
                },
                function(amount, n_samples, ws_table) {
                    var i, x, y, abx, a = 1 - amount > 0.99 ? 0.99 : 1 - amount;
                    for (i = 0; i < n_samples; i++) {
                        x = i * 2 / n_samples - 1;
                        abx = Math.abs(x);
                        if (abx < a) y = abx;
                        else if (abx > a) y = a + (abx - a) / (1 + Math.pow((abx - a) / (1 - a), 2));
                        else if (abx > 1) y = abx;
                        ws_table[i] = sign(x) * y * (1 / ((a + 1) / 2));
                    }
                },
                function(amount, n_samples, ws_table) { // fixed curve, amount doesn't do anything, the distortion is just from the drive
                    var i, x;
                    for (i = 0; i < n_samples; i++) {
                        x = i * 2 / n_samples - 1;
                        if (x < -0.08905) {
                            ws_table[i] = (-3 / 4) * (1 - (Math.pow((1 - (Math.abs(x) - 0.032857)), 12)) + (1 / 3) * (Math.abs(x) - 0.032847)) + 0.01;
                        } else if (x >= -0.08905 && x < 0.320018) {
                            ws_table[i] = (-6.153 * (x * x)) + 3.9375 * x;
                        } else {
                            ws_table[i] = 0.630035;
                        }
                    }
                },
                function(amount, n_samples, ws_table) {
                    var a = 2 + Math.round(amount * 14),
                        // we go from 2 to 16 bits, keep in mind for the UI
                        bits = Math.round(Math.pow(2, a - 1)),
                        // real number of quantization steps divided by 2
                        i, x;
                    for (i = 0; i < n_samples; i++) {
                        x = i * 2 / n_samples - 1;
                        ws_table[i] = Math.round(x * bits) / bits;
                    }
                }
            ]
        }
    });

    Tuna.prototype.Panner = function(properties) {
        if (!properties) {
            properties = this.getDefaults();
        }

        this.input = userContext.createGain();
        this.activateNode = userContext.createGain();
        this.panner = userContext.createStereoPanner();
        this.output = userContext.createGain();

        this.activateNode.connect(this.panner);
        this.panner.connect(this.output);

        this.pan = initValue(properties.pan, this.defaults.pan.value);
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.Panner.prototype = Object.create(Super, {
        name: {
            value: "Panner"
        },
        defaults: {
            writable: true,
            value: {
                bypass: {
                    value: false,
                    automatable: false,
                    type: BOOLEAN
                },
                pan: {
                    value: 0.0,
                    min: -1.0,
                    max: 1.0,
                    automatable: true,
                    type: FLOAT
                }
            }
        },
        pan: {
            enumerable: true,
            get: function() {
                return this.panner.pan;
            },
            set: function(value) {
                this.panner.pan.value = value;
            }
        }
    });

    Tuna.prototype.Phaser = function(properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.input = userContext.createGain();
        this.splitter = this.activateNode = userContext.createChannelSplitter(2);
        this.filtersL = [];
        this.filtersR = [];
        this.feedbackGainNodeL = userContext.createGain();
        this.feedbackGainNodeR = userContext.createGain();
        this.merger = userContext.createChannelMerger(2);
        this.filteredSignal = userContext.createGain();
        this.output = userContext.createGain();
        this.lfoL = new userInstance.LFO({
            target: this.filtersL,
            callback: this.callback
        });
        this.lfoR = new userInstance.LFO({
            target: this.filtersR,
            callback: this.callback
        });

        var i = this.stage;
        while (i--) {
            this.filtersL[i] = userContext.createBiquadFilter();
            this.filtersR[i] = userContext.createBiquadFilter();
            this.filtersL[i].type = "allpass";
            this.filtersR[i].type = "allpass";
        }
        this.input.connect(this.splitter);
        this.input.connect(this.output);
        this.splitter.connect(this.filtersL[0], 0, 0);
        this.splitter.connect(this.filtersR[0], 1, 0);
        this.connectInOrder(this.filtersL);
        this.connectInOrder(this.filtersR);
        this.filtersL[this.stage - 1].connect(this.feedbackGainNodeL);
        this.filtersL[this.stage - 1].connect(this.merger, 0, 0);
        this.filtersR[this.stage - 1].connect(this.feedbackGainNodeR);
        this.filtersR[this.stage - 1].connect(this.merger, 0, 1);
        this.feedbackGainNodeL.connect(this.filtersL[0]);
        this.feedbackGainNodeR.connect(this.filtersR[0]);
        this.merger.connect(this.output);

        this.rate = initValue(properties.rate, this.defaults.rate.value);
        this.baseModulationFrequency = properties.baseModulationFrequency || this.defaults.baseModulationFrequency.value;
        this.depth = initValue(properties.depth, this.defaults.depth.value);
        this.feedback = initValue(properties.feedback, this.defaults.feedback.value);
        this.stereoPhase = initValue(properties.stereoPhase, this.defaults.stereoPhase.value);

        this.lfoL.activate(true);
        this.lfoR.activate(true);
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.Phaser.prototype = Object.create(Super, {
        name: {
            value: "Phaser"
        },
        stage: {
            value: 4
        },
        defaults: {
            writable: true,
            value: {
                rate: {
                    value: 0.1,
                    min: 0,
                    max: 8,
                    automatable: false,
                    type: FLOAT
                },
                depth: {
                    value: 0.6,
                    min: 0,
                    max: 1,
                    automatable: false,
                    type: FLOAT
                },
                feedback: {
                    value: 0.7,
                    min: 0,
                    max: 1,
                    automatable: false,
                    type: FLOAT
                },
                stereoPhase: {
                    value: 40,
                    min: 0,
                    max: 180,
                    automatable: false,
                    type: FLOAT
                },
                baseModulationFrequency: {
                    value: 700,
                    min: 500,
                    max: 1500,
                    automatable: false,
                    type: FLOAT
                }
            }
        },
        callback: {
            value: function(filters, value) {
                for (var stage = 0; stage < 4; stage++) {
                    filters[stage].frequency.value = value;
                }
            }
        },
        depth: {
            get: function() {
                return this._depth;
            },
            set: function(value) {
                this._depth = value;
                this.lfoL.oscillation = this._baseModulationFrequency * this._depth;
                this.lfoR.oscillation = this._baseModulationFrequency * this._depth;
            }
        },
        rate: {
            get: function() {
                return this._rate;
            },
            set: function(value) {
                this._rate = value;
                this.lfoL.frequency = this._rate;
                this.lfoR.frequency = this._rate;
            }
        },
        baseModulationFrequency: {
            enumerable: true,
            get: function() {
                return this._baseModulationFrequency;
            },
            set: function(value) {
                this._baseModulationFrequency = value;
                this.lfoL.offset = this._baseModulationFrequency;
                this.lfoR.offset = this._baseModulationFrequency;
                this._depth = this._depth;
            }
        },
        feedback: {
            get: function() {
                return this._feedback;
            },
            set: function(value) {
                this._feedback = value;
                this.feedbackGainNodeL.gain.value = this._feedback;
                this.feedbackGainNodeR.gain.value = this._feedback;
            }
        },
        stereoPhase: {
            get: function() {
                return this._stereoPhase;
            },
            set: function(value) {
                this._stereoPhase = value;
                var newPhase = this.lfoL._phase + this._stereoPhase * Math.PI / 180;
                newPhase = fmod(newPhase, 2 * Math.PI);
                this.lfoR._phase = newPhase;
            }
        }
    });

    Tuna.prototype.PingPongDelay = function(properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.input = userContext.createGain();
        this.wetLevel = userContext.createGain();
        this.stereoToMonoMix = userContext.createGain();
        this.feedbackLevel = userContext.createGain();
        this.output = userContext.createGain();
        this.delayLeft = userContext.createDelay(10);
        this.delayRight = userContext.createDelay(10);

        this.activateNode = userContext.createGain();
        this.splitter = userContext.createChannelSplitter(2);
        this.merger = userContext.createChannelMerger(2);

        this.activateNode.connect(this.splitter);
        this.splitter.connect(this.stereoToMonoMix, 0, 0);
        this.splitter.connect(this.stereoToMonoMix, 1, 0);
        this.stereoToMonoMix.gain.value = .5;
        this.stereoToMonoMix.connect(this.wetLevel);
        this.wetLevel.connect(this.delayLeft);
        this.feedbackLevel.connect(this.delayLeft);
        this.delayLeft.connect(this.delayRight);
        this.delayRight.connect(this.feedbackLevel);
        this.delayLeft.connect(this.merger, 0, 0);
        this.delayRight.connect(this.merger, 0, 1);
        this.merger.connect(this.output);
        this.activateNode.connect(this.output);

        this.delayTimeLeft = properties.delayTimeLeft !== undefined ? properties.delayTimeLeft : this.defaults.delayTimeLeft.value;
        this.delayTimeRight = properties.delayTimeRight !== undefined ? properties.delayTimeRight : this.defaults.delayTimeRight.value;
        this.feedbackLevel.gain.value = properties.feedback !== undefined ? properties.feedback : this.defaults.feedback.value;
        this.wetLevel.gain.value = properties.wetLevel !== undefined ? properties.wetLevel : this.defaults.wetLevel.value;
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.PingPongDelay.prototype = Object.create(Super, {
        name: {
            value: "PingPongDelay"
        },
        delayTimeLeft: {
            enumerable: true,
            get: function() {
                return this._delayTimeLeft;
            },
            set: function(value) {
                this._delayTimeLeft = value;
                this.delayLeft.delayTime.value = value / 1000;
            }
        },
        delayTimeRight: {
            enumerable: true,
            get: function() {
                return this._delayTimeRight;
            },
            set: function(value) {
                this._delayTimeRight = value;
                this.delayRight.delayTime.value = value / 1000;
            }
        },
        defaults: {
            writable: true,
            value: {
                delayTimeLeft: {
                    value: 200,
                    min: 1,
                    max: 10000,
                    automatable: false,
                    type: INT
                },
                delayTimeRight: {
                    value: 400,
                    min: 1,
                    max: 10000,
                    automatable: false,
                    type: INT
                },
                feedback: {
                    value: 0.3,
                    min: 0,
                    max: 1,
                    automatable: false,
                    type: FLOAT
                },
                wetLevel: {
                    value: 0.5,
                    min: 0,
                    max: 1,
                    automatable: false,
                    type: FLOAT
                }
            }
        }
    });

    Tuna.prototype.Tremolo = function(properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.input = userContext.createGain();
        this.splitter = this.activateNode = userContext.createChannelSplitter(
                2),
            this.amplitudeL = userContext.createGain(),
            this.amplitudeR = userContext.createGain(),
            this.merger = userContext.createChannelMerger(2),
            this.output = userContext.createGain();
        this.lfoL = new userInstance.LFO({
            target: this.amplitudeL.gain,
            callback: pipe
        });
        this.lfoR = new userInstance.LFO({
            target: this.amplitudeR.gain,
            callback: pipe
        });

        this.input.connect(this.splitter);
        this.splitter.connect(this.amplitudeL, 0);
        this.splitter.connect(this.amplitudeR, 1);
        this.amplitudeL.connect(this.merger, 0, 0);
        this.amplitudeR.connect(this.merger, 0, 1);
        this.merger.connect(this.output);

        this.rate = properties.rate || this.defaults.rate.value;
        this.intensity = initValue(properties.intensity, this.defaults.intensity.value);
        this.stereoPhase = initValue(properties.stereoPhase, this.defaults.stereoPhase.value);

        this.lfoL.offset = 1 - (this.intensity / 2);
        this.lfoR.offset = 1 - (this.intensity / 2);
        this.lfoL.phase = this.stereoPhase * Math.PI / 180;

        this.lfoL.activate(true);
        this.lfoR.activate(true);
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.Tremolo.prototype = Object.create(Super, {
        name: {
            value: "Tremolo"
        },
        defaults: {
            writable: true,
            value: {
                intensity: {
                    value: 0.3,
                    min: 0,
                    max: 1,
                    automatable: false,
                    type: FLOAT
                },
                stereoPhase: {
                    value: 0,
                    min: 0,
                    max: 180,
                    automatable: false,
                    type: FLOAT
                },
                rate: {
                    value: 5,
                    min: 0.1,
                    max: 11,
                    automatable: false,
                    type: FLOAT
                }
            }
        },
        intensity: {
            enumerable: true,
            get: function() {
                return this._intensity;
            },
            set: function(value) {
                this._intensity = value;
                this.lfoL.offset = 1 - this._intensity / 2;
                this.lfoR.offset = 1 - this._intensity / 2;
                this.lfoL.oscillation = this._intensity;
                this.lfoR.oscillation = this._intensity;
            }
        },
        rate: {
            enumerable: true,
            get: function() {
                return this._rate;
            },
            set: function(value) {
                this._rate = value;
                this.lfoL.frequency = this._rate;
                this.lfoR.frequency = this._rate;
            }
        },
        stereoPhase: {
            enumerable: true,
            get: function() {
                return this._stereoPhase;
            },
            set: function(value) {
                this._stereoPhase = value;
                var newPhase = this.lfoL._phase + this._stereoPhase * Math.PI / 180;
                newPhase = fmod(newPhase, 2 * Math.PI);
                this.lfoR.phase = newPhase;
            }
        }
    });

    Tuna.prototype.WahWah = function(properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.input = userContext.createGain();
        this.activateNode = userContext.createGain();
        this.envelopeFollower = new userInstance.EnvelopeFollower({
            target: this,
            callback: function(context, value) {
                context.sweep = value;
            }
        });
        this.filterBp = userContext.createBiquadFilter();
        this.filterPeaking = userContext.createBiquadFilter();
        this.output = userContext.createGain();

        //Connect AudioNodes
        this.activateNode.connect(this.filterBp);
        this.filterBp.connect(this.filterPeaking);
        this.filterPeaking.connect(this.output);

        //Set Properties
        this.init();
        this.automode = initValue(properties.automode, this.defaults.automode.value);
        this.resonance = properties.resonance || this.defaults.resonance.value;
        this.sensitivity = initValue(properties.sensitivity, this.defaults.sensitivity.value);
        this.baseFrequency = initValue(properties.baseFrequency, this.defaults.baseFrequency.value);
        this.excursionOctaves = properties.excursionOctaves || this.defaults.excursionOctaves.value;
        this.sweep = initValue(properties.sweep, this.defaults.sweep.value);

        this.activateNode.gain.value = 2;
        this.envelopeFollower.activate(true);
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.WahWah.prototype = Object.create(Super, {
        name: {
            value: "WahWah"
        },
        defaults: {
            writable: true,
            value: {
                automode: {
                    value: true,
                    automatable: false,
                    type: BOOLEAN
                },
                baseFrequency: {
                    value: 0.5,
                    min: 0,
                    max: 1,
                    automatable: false,
                    type: FLOAT
                },
                excursionOctaves: {
                    value: 2,
                    min: 1,
                    max: 6,
                    automatable: false,
                    type: FLOAT
                },
                sweep: {
                    value: 0.2,
                    min: 0,
                    max: 1,
                    automatable: false,
                    type: FLOAT
                },
                resonance: {
                    value: 10,
                    min: 1,
                    max: 100,
                    automatable: false,
                    type: FLOAT
                },
                sensitivity: {
                    value: 0.5,
                    min: -1,
                    max: 1,
                    automatable: false,
                    type: FLOAT
                }
            }
        },
        automode: {
            get: function() {
                return this._automode;
            },
            set: function(value) {
                this._automode = value;
                if (value) {
                    this.activateNode.connect(this.envelopeFollower.input);
                    this.envelopeFollower.activate(true);
                } else {
                    this.envelopeFollower.activate(false);
                    this.activateNode.disconnect();
                    this.activateNode.connect(this.filterBp);
                }
            }
        },
        filterFreqTimeout: {
            value: 0
        },
        setFilterFreq: {
            value: function() {
                try {
                    this.filterBp.frequency.value = Math.min(22050, this._baseFrequency + this._excursionFrequency * this._sweep);
                    this.filterPeaking.frequency.value = Math.min(22050, this._baseFrequency + this._excursionFrequency * this._sweep);
                } catch (e) {
                    clearTimeout(this.filterFreqTimeout);
                    //put on the next cycle to let all init properties be set
                    this.filterFreqTimeout = setTimeout(function() {
                        this.setFilterFreq();
                    }.bind(this), 0);
                }
            }
        },
        sweep: {
            enumerable: true,
            get: function() {
                return this._sweep;
            },
            set: function(value) {
                this._sweep = Math.pow(value > 1 ? 1 : value < 0 ? 0 : value, this._sensitivity);
                this.setFilterFreq();
            }
        },
        baseFrequency: {
            enumerable: true,
            get: function() {
                return this._baseFrequency;
            },
            set: function(value) {
                this._baseFrequency = 50 * Math.pow(10, value * 2);
                this._excursionFrequency = Math.min(userContext.sampleRate / 2, this.baseFrequency * Math.pow(2, this._excursionOctaves));
                this.setFilterFreq();
            }
        },
        excursionOctaves: {
            enumerable: true,
            get: function() {
                return this._excursionOctaves;
            },
            set: function(value) {
                this._excursionOctaves = value;
                this._excursionFrequency = Math.min(userContext.sampleRate / 2, this.baseFrequency * Math.pow(2, this._excursionOctaves));
                this.setFilterFreq();
            }
        },
        sensitivity: {
            enumerable: true,
            get: function() {
                return this._sensitivity;
            },
            set: function(value) {
                this._sensitivity = Math.pow(10, value);
            }
        },
        resonance: {
            enumerable: true,
            get: function() {
                return this._resonance;
            },
            set: function(value) {
                this._resonance = value;
                this.filterPeaking.Q = this._resonance;
            }
        },
        init: {
            value: function() {
                this.output.gain.value = 1;
                this.filterPeaking.type = "peaking";
                this.filterBp.type = "bandpass";
                this.filterPeaking.frequency.value = 100;
                this.filterPeaking.gain.value = 20;
                this.filterPeaking.Q.value = 5;
                this.filterBp.frequency.value = 100;
                this.filterBp.Q.value = 1;
            }
        }
    });

    Tuna.prototype.EnvelopeFollower = function(properties) {
        if (!properties) {
            properties = this.getDefaults();
        }
        this.input = userContext.createGain();
        this.jsNode = this.output = userContext.createScriptProcessor(this.buffersize, 1, 1);

        this.input.connect(this.output);

        this.attackTime = initValue(properties.attackTime, this.defaults.attackTime.value);
        this.releaseTime = initValue(properties.releaseTime, this.defaults.releaseTime.value);
        this._envelope = 0;
        this.target = properties.target || {};
        this.callback = properties.callback || function() {};

        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.EnvelopeFollower.prototype = Object.create(Super, {
        name: {
            value: "EnvelopeFollower"
        },
        defaults: {
            value: {
                attackTime: {
                    value: 0.003,
                    min: 0,
                    max: 0.5,
                    automatable: false,
                    type: FLOAT
                },
                releaseTime: {
                    value: 0.5,
                    min: 0,
                    max: 0.5,
                    automatable: false,
                    type: FLOAT
                }
            }
        },
        buffersize: {
            value: 256
        },
        envelope: {
            value: 0
        },
        sampleRate: {
            value: 44100
        },
        attackTime: {
            enumerable: true,
            get: function() {
                return this._attackTime;
            },
            set: function(value) {
                this._attackTime = value;
                this._attackC = Math.exp(-1 / this._attackTime * this.sampleRate / this.buffersize);
            }
        },
        releaseTime: {
            enumerable: true,
            get: function() {
                return this._releaseTime;
            },
            set: function(value) {
                this._releaseTime = value;
                this._releaseC = Math.exp(-1 / this._releaseTime * this.sampleRate / this.buffersize);
            }
        },
        callback: {
            get: function() {
                return this._callback;
            },
            set: function(value) {
                if (typeof value === "function") {
                    this._callback = value;
                } else {
                    console.error("tuna.js: " + this.name + ": Callback must be a function!");
                }
            }
        },
        target: {
            get: function() {
                return this._target;
            },
            set: function(value) {
                this._target = value;
            }
        },
        activate: {
            value: function(doActivate) {
                this.activated = doActivate;
                if (doActivate) {
                    this.jsNode.connect(userContext.destination);
                    this.jsNode.onaudioprocess = this.returnCompute(this);
                } else {
                    this.jsNode.disconnect();
                    this.jsNode.onaudioprocess = null;
                }
                if (this.activateCallback) {
                    this.activateCallback(doActivate);
                }
            }
        },
        returnCompute: {
            value: function(instance) {
                return function(event) {
                    instance.compute(event);
                };
            }
        },
        compute: {
            value: function(event) {
                var count = event.inputBuffer.getChannelData(0).length,
                    channels = event.inputBuffer.numberOfChannels,
                    current, chan, rms, i;
                chan = rms = i = 0;
                if (channels > 1) { //need to mixdown
                    for (i = 0; i < count; ++i) {
                        for (; chan < channels; ++chan) {
                            current = event.inputBuffer.getChannelData(chan)[i];
                            rms += (current * current) / channels;
                        }
                    }
                } else {
                    for (i = 0; i < count; ++i) {
                        current = event.inputBuffer.getChannelData(0)[i];
                        rms += (current * current);
                    }
                }
                rms = Math.sqrt(rms);

                if (this._envelope < rms) {
                    this._envelope *= this._attackC;
                    this._envelope += (1 - this._attackC) * rms;
                } else {
                    this._envelope *= this._releaseC;
                    this._envelope += (1 - this._releaseC) * rms;
                }
                this._callback(this._target, this._envelope);
            }
        }
    });

    Tuna.prototype.LFO = function(properties) {
        if (!properties) {
            properties = this.getDefaults();
        }

        //Instantiate AudioNode
        this.input = userContext.createGain();
        this.output = userContext.createScriptProcessor(256, 1, 1);
        this.activateNode = userContext.destination;

        //Set Properties
        this.frequency = initValue(properties.frequency, this.defaults.frequency.value);
        this.offset = initValue(properties.offset, this.defaults.offset.value);
        this.oscillation = initValue(properties.oscillation, this.defaults.oscillation.value);
        this.phase = initValue(properties.phase, this.defaults.phase.value);
        this.target = properties.target || {};
        this.output.onaudioprocess = this.callback(properties.callback || function() {});
        this.bypass = properties.bypass || false;
    };
    Tuna.prototype.LFO.prototype = Object.create(Super, {
        name: {
            value: "LFO"
        },
        bufferSize: {
            value: 256
        },
        sampleRate: {
            value: 44100
        },
        defaults: {
            value: {
                frequency: {
                    value: 1,
                    min: 0,
                    max: 20,
                    automatable: false,
                    type: FLOAT
                },
                offset: {
                    value: 0.85,
                    min: 0,
                    max: 22049,
                    automatable: false,
                    type: FLOAT
                },
                oscillation: {
                    value: 0.3,
                    min: -22050,
                    max: 22050,
                    automatable: false,
                    type: FLOAT
                },
                phase: {
                    value: 0,
                    min: 0,
                    max: 2 * Math.PI,
                    automatable: false,
                    type: FLOAT
                }
            }
        },
        frequency: {
            get: function() {
                return this._frequency;
            },
            set: function(value) {
                this._frequency = value;
                this._phaseInc = 2 * Math.PI * this._frequency * this.bufferSize / this.sampleRate;
            }
        },
        offset: {
            get: function() {
                return this._offset;
            },
            set: function(value) {
                this._offset = value;
            }
        },
        oscillation: {
            get: function() {
                return this._oscillation;
            },
            set: function(value) {
                this._oscillation = value;
            }
        },
        phase: {
            get: function() {
                return this._phase;
            },
            set: function(value) {
                this._phase = value;
            }
        },
        target: {
            get: function() {
                return this._target;
            },
            set: function(value) {
                this._target = value;
            }
        },
        activate: {
            value: function(doActivate) {
                if (doActivate) {
                    this.output.connect(userContext.destination);
                    if (this.activateCallback) {
                        this.activateCallback(doActivate);
                    }
                } else {
                    this.output.disconnect();
                }
            }
        },
        callback: {
            value: function(callback) {
                var that = this;
                return function() {
                    that._phase += that._phaseInc;
                    if (that._phase > 2 * Math.PI) {
                        that._phase = 0;
                    }
                    callback(that._target, that._offset + that._oscillation * Math.sin(that._phase));
                };
            }
        }
    });

    Tuna.toString = Tuna.prototype.toString = function() {
        return "Please visit https://github.com/Theodeus/tuna/wiki for instructions on how to use Tuna.js";
    };
})();


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

var _defineProperty = __webpack_require__(94);

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

var anObject       = __webpack_require__(9)
  , IE8_DOM_DEFINE = __webpack_require__(51)
  , toPrimitive    = __webpack_require__(41)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(10) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(16);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(18)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(4)
  , core      = __webpack_require__(3)
  , ctx       = __webpack_require__(15)
  , hide      = __webpack_require__(13)
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
/* 12 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(8)
  , createDesc = __webpack_require__(21);
module.exports = __webpack_require__(10) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(52)
  , defined = __webpack_require__(31);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(30);
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
/* 16 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(59)
  , enumBugKeys = __webpack_require__(33);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 21 */
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
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(99);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _webaudioEffectUnitsCollection = __webpack_require__(88);

var _webaudioEffectUnitsCollection2 = _interopRequireDefault(_webaudioEffectUnitsCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chnl = function () {
  function Chnl(audioCtx) {
    (0, _classCallCheck3.default)(this, Chnl);
    this.currentGraph = [];

    this.context = audioCtx;
    this.input = audioCtx.createGain();
    this.output = audioCtx.createGain();
    this.analyser = audioCtx.createAnalyser();
    this.output.connect(this.analyser);
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
  }, {
    key: 'getAnalyser',
    value: function getAnalyser() {
      return this.analyser;
    }
  }]);
  return Chnl;
}();

/* const audioCtx = new AudioContext();
const audioElem = new Audio(song);
const audioElem2 = new Audio(song);
const audio = audioCtx.createMediaElementSource(audioElem);
const audio2 = audioCtx.createMediaElementSource(audioElem2);
const chnl = new Chnl(audioCtx);
const chnl2 = new Chnl(audioCtx);

audio.connect(chnl);
chnl.connect(audioCtx.destination);
chnl.addEffect(`delay`);

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
chnl.addEffect(`highpass`);
chnl.addEffect(`bitcrusher`);

chnl.effects.gain.setValue(`gain`, 0.2);
chnl.effects.highpass.setValue(`frequency`, 500);
chnl.effects.bitcrusher.setValue(`bits`, 4);

osci.start();
*/


exports.default = Chnl;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(95);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(93);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(47);

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
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(47);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(8).f
  , has = __webpack_require__(12)
  , TAG = __webpack_require__(1)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 29 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 31 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(16)
  , document = __webpack_require__(4).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(9)
  , dPs         = __webpack_require__(122)
  , enumBugKeys = __webpack_require__(33)
  , IE_PROTO    = __webpack_require__(36)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(32)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(50).appendChild(iframe);
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
/* 35 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(37)('keys')
  , uid    = __webpack_require__(28);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(4)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 38 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(38)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(31);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(16);
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
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(4)
  , core           = __webpack_require__(3)
  , LIBRARY        = __webpack_require__(25)
  , wksExt         = __webpack_require__(43)
  , defineProperty = __webpack_require__(8).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(1);

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(129)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(55)(String, 'String', function(iterated){
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
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recorder = __webpack_require__(90);

var _recorder2 = _interopRequireDefault(_recorder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _recorder2.default;

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _promise = __webpack_require__(96);

var _promise2 = _interopRequireDefault(_promise);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (fn) {
  return function () {
    var gen = fn.apply(this, arguments);
    return new _promise2.default(function (resolve, reject) {
      function step(key, arg) {
        try {
          var info = gen[key](arg);
          var value = info.value;
        } catch (error) {
          reject(error);
          return;
        }

        if (info.done) {
          resolve(value);
        } else {
          return _promise2.default.resolve(value).then(function (value) {
            step("next", value);
          }, function (err) {
            step("throw", err);
          });
        }
      }

      return step("next");
    });
  };
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(98);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(97);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(142);


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(17)
  , TAG = __webpack_require__(1)('toStringTag')
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(4).document && document.documentElement;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(10) && !__webpack_require__(18)(function(){
  return Object.defineProperty(__webpack_require__(32)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(17);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(19)
  , ITERATOR   = __webpack_require__(1)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(9);
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(25)
  , $export        = __webpack_require__(11)
  , redefine       = __webpack_require__(60)
  , hide           = __webpack_require__(13)
  , has            = __webpack_require__(12)
  , Iterators      = __webpack_require__(19)
  , $iterCreate    = __webpack_require__(116)
  , setToStringTag = __webpack_require__(27)
  , getPrototypeOf = __webpack_require__(124)
  , ITERATOR       = __webpack_require__(1)('iterator')
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
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(1)('iterator')
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
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(26)
  , createDesc     = __webpack_require__(21)
  , toIObject      = __webpack_require__(14)
  , toPrimitive    = __webpack_require__(41)
  , has            = __webpack_require__(12)
  , IE8_DOM_DEFINE = __webpack_require__(51)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(10) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(59)
  , hiddenKeys = __webpack_require__(33).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(12)
  , toIObject    = __webpack_require__(14)
  , arrayIndexOf = __webpack_require__(110)(false)
  , IE_PROTO     = __webpack_require__(36)('IE_PROTO');

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
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var ctx                = __webpack_require__(15)
  , invoke             = __webpack_require__(114)
  , html               = __webpack_require__(50)
  , cel                = __webpack_require__(32)
  , global             = __webpack_require__(4)
  , process            = global.process
  , setTask            = global.setImmediate
  , clearTask          = global.clearImmediate
  , MessageChannel     = global.MessageChannel
  , counter            = 0
  , queue              = {}
  , ONREADYSTATECHANGE = 'onreadystatechange'
  , defer, channel, port;
var run = function(){
  var id = +this;
  if(queue.hasOwnProperty(id)){
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function(event){
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if(!setTask || !clearTask){
  setTask = function setImmediate(fn){
    var args = [], i = 1;
    while(arguments.length > i)args.push(arguments[i++]);
    queue[++counter] = function(){
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id){
    delete queue[id];
  };
  // Node.js 0.8-
  if(__webpack_require__(17)(process) == 'process'){
    defer = function(id){
      process.nextTick(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if(MessageChannel){
    channel = new MessageChannel;
    port    = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
    defer = function(id){
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if(ONREADYSTATECHANGE in cel('script')){
    defer = function(id){
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function(id){
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set:   setTask,
  clear: clearTask
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(49)
  , ITERATOR  = __webpack_require__(1)('iterator')
  , Iterators = __webpack_require__(19);
module.exports = __webpack_require__(3).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 63 */
/***/ (function(module, exports) {



/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(132);
var global        = __webpack_require__(4)
  , hide          = __webpack_require__(13)
  , Iterators     = __webpack_require__(19)
  , TO_STRING_TAG = __webpack_require__(1)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 65 */
/***/ (function(module, exports) {

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
var byteToHex = [];
for (var i = 0; i < 256; ++i) {
  byteToHex[i] = (i + 0x100).toString(16).substr(1);
}

function bytesToUuid(buf, offset) {
  var i = offset || 0;
  var bth = byteToHex;
  return  bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] + '-' +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]] +
          bth[buf[i++]] + bth[buf[i++]];
}

module.exports = bytesToUuid;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// Unique ID creation requires a high quality random # generator.  In the
// browser this is a little complicated due to unknown quality of Math.random()
// and inconsistent support for the `crypto` API.  We do the best we can via
// feature-detection
var rng;

var crypto = global.crypto || global.msCrypto; // for IE 11
if (crypto && crypto.getRandomValues) {
  // WHATWG crypto RNG - http://wiki.whatwg.org/wiki/Crypto
  var rnds8 = new Uint8Array(16);
  rng = function whatwgRNG() {
    crypto.getRandomValues(rnds8);
    return rnds8;
  };
}

if (!rng) {
  // Math.random()-based (RNG)
  //
  // If all else fails, use Math.random().  It's fast, but is of unspecified
  // quality.
  var  rnds = new Array(16);
  rng = function() {
    for (var i = 0, r; i < 16; i++) {
      if ((i & 0x03) === 0) r = Math.random() * 0x100000000;
      rnds[i] = r >>> ((i & 0x03) << 3) & 0xff;
    }

    return rnds;
  };
}

module.exports = rng;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)))

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(48);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(46);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _recordy = __webpack_require__(72);

var _recordy2 = _interopRequireDefault(_recordy);

var _audiolooper = __webpack_require__(70);

var _audiolooper2 = _interopRequireDefault(_audiolooper);

var _wmstr = __webpack_require__(89);

var _wmstr2 = _interopRequireDefault(_wmstr);

var _audiobufferchnl = __webpack_require__(68);

var _audiobufferchnl2 = _interopRequireDefault(_audiobufferchnl);

var _audiochnl = __webpack_require__(69);

var _audiochnl2 = _interopRequireDefault(_audiochnl);

var _uuid = __webpack_require__(144);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SoundCycle = function () {
  function SoundCycle() {
    var readyCb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
    (0, _classCallCheck3.default)(this, SoundCycle);
    this.MODES = {
      ADD_TO_LANE: 'ADD_TO_LANE',
      NEW_LANE: 'NEW_LANE',
      SINGLE_SEQUENCE: 'SINGLE_SEQUENCE',
      FREE_LOOPING: 'FREE_LOOPING'
    };
    this.tracks = new Map();
    this.loopers = new Map();
    this.currentLane = '';
    this.masterChnlId = 'MASTER_ID';
    this.recorderChnlId = 'RECORDER_ID';

    var audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    this.audioCtx = audioCtx;
    this.recorder = new _recordy2.default(audioCtx);
    this.recorder.getInput().then(readyCb);

    this.wmstr = new _wmstr2.default(audioCtx);
    this.currentMode = this.MODES.NEW_LANE;

    this.tracks.set(this.masterChnlId, this.wmstr);
    this.tracks.set(this.recorderChnlId, this.recorder);

    this.wmstr.connect(this.audioCtx.destination);
  }

  (0, _createClass3.default)(SoundCycle, [{
    key: 'setProjectName',
    value: function setProjectName(name) {
      this.projectName = name;
    }
  }, {
    key: 'getProjectName',
    value: function getProjectName() {
      if (!this.projectName) {
        var date = new Date();
        return 'project-' + date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear() + '.wav';
      }

      return this.projectName + '.wav';
    }
  }, {
    key: 'getModes',
    value: function getModes() {
      return this.MODES;
    }
  }, {
    key: 'getCurrentMode',
    value: function getCurrentMode() {
      return this.currentMode;
    }
  }, {
    key: 'setMode',
    value: function setMode(mode) {
      this.currentMode = mode;
    }
  }, {
    key: 'setCurrentLane',
    value: function setCurrentLane(laneId) {
      this.currentLane = laneId;
    }
  }, {
    key: 'startRecording',
    value: function startRecording() {
      this.recorder.startRecording();
    }
  }, {
    key: 'stopRecording',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var _this = this;

        var newTrackId, looper, audioBuffer, newLooperId, audioObj, audioChnl, _looper, _audioBuffer, _audioBuffer2, bufferNode, channel, channelData, FADE_LENGTH, i, fadeOutPos, audioBufferChnl;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                newTrackId = (0, _uuid.v4)();
                _context.t0 = this.currentMode;
                _context.next = _context.t0 === this.MODES.NEW_LANE ? 4 : _context.t0 === this.MODES.SINGLE_SEQUENCE ? 11 : _context.t0 === this.MODES.ADD_TO_LANE ? 18 : _context.t0 === this.MODES.FREE_LOOPING ? 26 : 38;
                break;

              case 4:
                // Add new looper
                looper = new _audiolooper2.default(this.audioCtx);
                _context.next = 7;
                return this.recorder.stopRecording({ type: 'buffer' });

              case 7:
                audioBuffer = _context.sent;
                newLooperId = (0, _uuid.v4)();


                looper.addTrack({
                  id: newTrackId,
                  audioBuffer: audioBuffer,
                  trackAdded: function trackAdded(bufferSourceNode) {
                    _this.trackAddedToLaneCb(bufferSourceNode, newTrackId, newLooperId);

                    if (!_this.loopers.has(newLooperId)) _this.loopers.set(newLooperId, looper);
                  } });

                return _context.abrupt('return', {
                  chnlId: newTrackId,
                  laneId: newLooperId
                });

              case 11:
                _context.next = 13;
                return this.recorder.stopRecording({ type: 'audio' });

              case 13:
                audioObj = _context.sent;
                audioChnl = new _audiochnl2.default(this.audioCtx, audioObj);

                audioChnl.connect(this.wmstr);

                this.tracks.set(newTrackId, {
                  chnl: audioChnl
                });

                return _context.abrupt('return', {
                  chnlId: newTrackId
                });

              case 18:
                if (this.loopers.has(this.currentLane)) {
                  _context.next = 20;
                  break;
                }

                throw new Error('You tried to access an inexistent lane!');

              case 20:
                _looper = this.loopers.get(this.currentLane);
                _context.next = 23;
                return this.recorder.stopRecording({ type: 'buffer' });

              case 23:
                _audioBuffer = _context.sent;


                _looper.addTrack({
                  id: newTrackId,
                  audioBuffer: _audioBuffer,
                  trackAdded: function trackAdded(bufferSourceNode) {
                    _this.trackAddedToLaneCb(bufferSourceNode, newTrackId, _this.currentLane);
                  } });

                return _context.abrupt('return', {
                  chnlId: newTrackId
                });

              case 26:
                _context.next = 28;
                return this.recorder.stopRecording({ type: 'buffer' });

              case 28:
                _audioBuffer2 = _context.sent;
                bufferNode = this.audioCtx.createBufferSource();

                bufferNode.buffer = _audioBuffer2;
                bufferNode.loop = true;

                // Create fade
                for (channel = 0; channel < _audioBuffer2.numberOfChannels; channel++) {
                  channelData = _audioBuffer2.getChannelData(channel);
                  FADE_LENGTH = 100;

                  for (i = 0; i < FADE_LENGTH && i < channelData.length; i++) {
                    fadeOutPos = channelData.length - i - 1;

                    channelData[i] = channelData[i] * i / FADE_LENGTH;
                    channelData[fadeOutPos] = channelData[fadeOutPos] * i / FADE_LENGTH;
                  }
                }

                audioBufferChnl = new _audiobufferchnl2.default(this.audioCtx, bufferNode);

                audioBufferChnl.connect(this.wmstr);

                bufferNode.start(0);

                this.tracks.set(newTrackId, {
                  chnl: audioBufferChnl
                });

                return _context.abrupt('return', {
                  chnlId: newTrackId
                });

              case 38:
                throw new Error('Invalid method!');

              case 39:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function stopRecording() {
        return _ref.apply(this, arguments);
      }

      return stopRecording;
    }()
  }, {
    key: 'stopTrack',
    value: function stopTrack(_ref2) {
      var id = _ref2.id;

      if (!this.tracks.has(id)) throw new Error('You tried to stop an inexistent track!');

      var track = this.tracks.get(id);

      if (!track.looperId) track.chnl.stop();else {
        var looper = this.loopers.get(track.looperId);
        looper.pauseTrack({ id: id });
      }
    }
  }, {
    key: 'playTrack',
    value: function playTrack(_ref3) {
      var id = _ref3.id;

      if (!this.tracks.has(id)) throw new Error('You tried to play an inexistent track!');

      var track = this.tracks.get(id);

      if (!track.looperId) track.chnl.play();else {
        var looper = this.loopers.get(track.looperId);
        looper.playTrack({ id: id });
      }
    }
  }, {
    key: 'removeTrack',
    value: function removeTrack(_ref4) {
      var id = _ref4.id;

      if (!this.tracks.has(id)) throw new Error('You tried to remove an inexistent track!');

      var track = this.tracks.get(id);
      if (track.looperId) {
        var looper = this.loopers.get(track.looperId);
        looper.removeTrack({ id: id });
      }
      if (track.chnl.bufferSourceNode) track.chnl.bufferSourceNode.stop();

      this.tracks.delete(id);
    }
  }, {
    key: 'removeLane',
    value: function removeLane(_ref5) {
      var _this2 = this;

      var looperId = _ref5.looperId;

      if (!this.loopers.has(looperId)) throw new Error('You tried to remove an inexistent lane!');

      var looper = this.loopers.get(looperId);

      // Search all tracks of looper and delete them
      this.tracks.forEach(function (_ref6, trackId) {
        var trackLooperId = _ref6.looperId;

        if (trackLooperId === looperId) {
          looper.removeTrack({ id: trackId });
          _this2.tracks.delete(trackId);
        }
      });

      this.loopers.delete(looperId);
    }
  }, {
    key: 'enableEffect',
    value: function enableEffect(_ref7) {
      var chnlId = _ref7.chnlId,
          effectName = _ref7.effectName;

      var chnlToEdit = this.getChnlById(chnlId);
      chnlToEdit.addEffect(effectName);
      SoundCycle.getEffectByName(chnlToEdit, effectName).enable();
    }
  }, {
    key: 'disableEffect',
    value: function disableEffect(_ref8) {
      var chnlId = _ref8.chnlId,
          effectName = _ref8.effectName;

      var chnlToEdit = this.getChnlById(chnlId);
      chnlToEdit.removeEffect(effectName);
      SoundCycle.getEffectByName(chnlToEdit, effectName).disable();
    }
  }, {
    key: 'setEffectValue',
    value: function setEffectValue(_ref9) {
      var chnlId = _ref9.chnlId,
          effectName = _ref9.effectName,
          valueType = _ref9.valueType,
          value = _ref9.value;

      var chnlToEdit = this.getChnlById(chnlId);

      SoundCycle.getEffectByName(chnlToEdit, effectName).setValue(valueType, value);
    }
  }, {
    key: 'getMasterChnlId',
    value: function getMasterChnlId() {
      return this.masterChnlId;
    }
  }, {
    key: 'getRecorderChnlId',
    value: function getRecorderChnlId() {
      return this.recorderChnlId;
    }
  }, {
    key: 'startProjectRecording',
    value: function startProjectRecording() {
      this.wmstr.startRecording();
    }
  }, {
    key: 'stopProjectRecording',
    value: function stopProjectRecording() {
      this.wmstr.stopRecording(this.getProjectName());
    }
  }, {
    key: 'getAnalyser',
    value: function getAnalyser(_ref10) {
      var chnlId = _ref10.chnlId;

      return this.getChnlById(chnlId).getAnalyser();
    }

    /* INTERIOR FUNCTIONALITIES */

  }, {
    key: 'getChnlById',
    value: function getChnlById(id) {
      if (id === this.masterChnlId) return this.wmstr;else if (id === this.recorderChnlId) return this.recorder;

      if (!this.tracks.has(id)) throw new Error('You tried to access an inexistent track!');
      return this.tracks.get(id).chnl;
    }
  }, {
    key: 'trackAddedToLaneCb',
    value: function trackAddedToLaneCb(bufferSourceNode, newTrackId, looperId) {
      if (this.tracks.has(newTrackId)) {
        var _tracks$get = this.tracks.get(newTrackId),
            chnl = _tracks$get.chnl;

        chnl.setBufferSourceNode(bufferSourceNode);
      } else {
        var audioBufferChnl = new _audiobufferchnl2.default(this.audioCtx, bufferSourceNode);
        audioBufferChnl.connect(this.wmstr);

        this.tracks.set(newTrackId, {
          chnl: audioBufferChnl,
          looperId: looperId
        });
      }
    }
  }], [{
    key: 'getEffectByName',
    value: function getEffectByName(chnl, effectName) {
      if (chnl.effects[effectName]) return chnl.effects[effectName];

      throw new Error('You tried to access an inexistent effect!');
    }
  }]);
  return SoundCycle;
}();

exports.default = SoundCycle;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(24);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(23);

var _inherits3 = _interopRequireDefault(_inherits2);

var _webaudioChnl = __webpack_require__(22);

var _webaudioChnl2 = _interopRequireDefault(_webaudioChnl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AudioBufferChnl = function (_Chnl) {
  (0, _inherits3.default)(AudioBufferChnl, _Chnl);

  function AudioBufferChnl(audioCtx, bufferSourceNode) {
    (0, _classCallCheck3.default)(this, AudioBufferChnl);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AudioBufferChnl.__proto__ || Object.getPrototypeOf(AudioBufferChnl)).call(this, audioCtx));

    _this.setBufferSourceNode(bufferSourceNode);
    return _this;
  }

  (0, _createClass3.default)(AudioBufferChnl, [{
    key: 'setBufferSourceNode',
    value: function setBufferSourceNode(bufferSourceNode) {
      this.bufferSourceNode = bufferSourceNode;
      this.bufferSourceNode.connect(this);
    }
  }, {
    key: 'stop',
    value: function stop() {
      /* const newAudioBuffer = this.context.createBuffer(this.bufferSourceNode.buffer.numberOfChannels, this.bufferSourceNode.buffer.length, this.bufferSourceNode.buffer.sampleRate);
        for (let channel = 0; channel < newAudioBuffer.numberOfChannels; channel++) {
        const channelDataNew = newAudioBuffer.getChannelData(channel);
        const channelDataCurrent = this.bufferSourceNode.buffer.getChannelData(channel);
        for (let i = 0; i < channelDataCurrent.length; i++)
          channelDataNew[i] = channelDataCurrent[i];
      } */

      var newBufferSource = this.context.createBufferSource();
      newBufferSource.buffer = this.bufferSourceNode.buffer;
      newBufferSource.loop = this.bufferSourceNode.loop;

      this.bufferSourceNode.stop();

      this.setBufferSourceNode(newBufferSource);
    }
  }, {
    key: 'play',
    value: function play() {
      this.bufferSourceNode.start(0);
    }
  }]);
  return AudioBufferChnl;
}(_webaudioChnl2.default);

/* const audioCtx = new AudioContext();
const buffer = audioCtx.createBuffer(2, audioCtx.sampleRate * 2.0, audioCtx.sampleRate);
const sourceNode = audioCtx.createBufferSource();
sourceNode.buffer = buffer;

const bufferChnl = new AudioBufferChnl(sourceNode, audioCtx);
console.log(bufferChnl); */


exports.default = AudioBufferChnl;

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(24);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(23);

var _inherits3 = _interopRequireDefault(_inherits2);

var _webaudioChnl = __webpack_require__(22);

var _webaudioChnl2 = _interopRequireDefault(_webaudioChnl);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AudioChnl = function (_Chnl) {
  (0, _inherits3.default)(AudioChnl, _Chnl);

  function AudioChnl(audioCtx, audioObj) {
    var loaded = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
    (0, _classCallCheck3.default)(this, AudioChnl);

    var _this = (0, _possibleConstructorReturn3.default)(this, (AudioChnl.__proto__ || Object.getPrototypeOf(AudioChnl)).call(this, audioCtx));

    _this.isReady = false;

    _this.audioObj = audioObj;

    _this.audioObj.addEventListener('loadedmetadata', function () {
      _this.isReady = true;
      loaded();
    });

    var mediaSource = audioCtx.createMediaElementSource(audioObj);
    mediaSource.connect(_this);
    return _this;
  }

  (0, _createClass3.default)(AudioChnl, [{
    key: 'start',
    value: function start() {
      this.audioObj.play();
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.audioObj.currentTime = 0;
      this.pause();
    }
  }, {
    key: 'pause',
    value: function pause() {
      this.audioObj.pause();
    }
  }, {
    key: 'seek',
    value: function seek(time) {
      // Time in seconds
      this.audioObj.currentTime = time;
    }
  }]);
  return AudioChnl;
}(_webaudioChnl2.default);

/* const audioCtx = new AudioContext();
const audio = new Audio(song);
const audioChnl = new AudioChnl(audioCtx, audio);
audioChnl.start();
window.setTimeout(() => {
  audioChnl.pause();
  window.setTimeout(() => {
    audioChnl.start();
  }, 4000);
}, 6000); */


exports.default = AudioChnl;

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

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
        // Step 1: fade-in + fade-out
        for (var channel = 0; channel < audioBuffer.numberOfChannels; channel++) {
          var channelData = audioBuffer.getChannelData(channel);
          var FADE_LENGTH = 100;
          for (var i = 0; i < FADE_LENGTH && i < channelData.length; i++) {
            var fadeOutPos = channelData.length - i - 1;
            channelData[i] = channelData[i] * i / FADE_LENGTH;
            channelData[fadeOutPos] = channelData[fadeOutPos] * i / FADE_LENGTH;
          }
        }

        // Step 2: fit it the first track
        var firstTrackBuffer = this.firstTrack.bufferNode.buffer;
        var percentualRatio = Math.ceil(audioBuffer.length / firstTrackBuffer.length);
        var newAudioBuffer = this.audioCtx.createBuffer(audioBuffer.numberOfChannels, firstTrackBuffer.length * percentualRatio, firstTrackBuffer.sampleRate);

        // is this even needed or is it enough to:
        // newAudioBuffer.copyFromChannel(audioBuffer, 2, 0); ????
        for (var _channel = 0; _channel < newAudioBuffer.numberOfChannels; _channel++) {
          var channelDataNew = newAudioBuffer.getChannelData(_channel);
          var channelDataCurrent = audioBuffer.getChannelData(_channel);
          for (var _i = 0; _i < channelDataCurrent.length; _i++) {
            channelDataNew[_i] = channelDataCurrent[_i];
          }
        }

        finalAudioBuffer = newAudioBuffer;
      } else finalAudioBuffer = audioBuffer;

      // Create buffersourcenode
      var bufferNode = this.audioCtx.createBufferSource();
      bufferNode.buffer = finalAudioBuffer;
      bufferNode.loop = true;

      var track = {
        duration: bufferNode.buffer.duration,
        startedAt: this.audioCtx.currentTime,
        getCurrentTime: function getCurrentTime() {
          return _this.audioCtx.currentTime - track.startedAt;
        },
        bufferNode: bufferNode,
        trackAdded: trackAdded // Save for later use!
      };

      this.bufferNodes.set(id, track);

      if (isFirstTrack) this.firstTrack = track;

      var part = this.audioCtx.currentTime - this.firstTrack.startedAt;
      var numParts = Math.floor(part / this.firstTrack.duration);
      var offset = part - numParts * this.firstTrack.duration;

      bufferNode.start(0, offset);

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

        this.addTrack({ id: id, audioBuffer: audioBuffer, doProcessing: false, trackAdded: trackAdded });
      } else throw new Error("You tried to pause an inexistent track!");
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
      throw new Error("You tried to access an inexistent track!");
    }
  }, {
    key: "exists",
    value: function exists(id) {
      if (!this.bufferNodes.has(id)) throw new Error("You tried to access an inexistent track!");

      return true;
    }
  }]);
  return AudioLooper;
}();

exports.default = AudioLooper;

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = getInput;
function getInput() {
  var getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia || navigator.mozGetUserMedia;

  var constraints = {
    audio: {
      mandatory: {
        googEchoCancellation: "false",
        googAutoGainControl: "false",
        googNoiseSuppression: "false",
        googHighpassFilter: "false"
      },
      optional: []
    }
  };

  if (!getUserMedia) Promise.reject(new Error("getUserMedia not supported!"));

  if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) return navigator.mediaDevices.getUserMedia(constraints);

  return new Promise(function (resolve, reject) {
    getUserMedia.call(navigator, constraints, constraints, resolve, reject);
  });
}

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__(48);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = __webpack_require__(46);

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(24);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(23);

var _inherits3 = _interopRequireDefault(_inherits2);

var _webaudioChnl = __webpack_require__(22);

var _webaudioChnl2 = _interopRequireDefault(_webaudioChnl);

var _wrecorder = __webpack_require__(45);

var _wrecorder2 = _interopRequireDefault(_wrecorder);

var _getInput2 = __webpack_require__(71);

var _getInput3 = _interopRequireDefault(_getInput2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Recordy = function (_Chnl) {
  (0, _inherits3.default)(Recordy, _Chnl);

  function Recordy(audioCtx) {
    (0, _classCallCheck3.default)(this, Recordy);

    var _this = (0, _possibleConstructorReturn3.default)(this, (Recordy.__proto__ || Object.getPrototypeOf(Recordy)).call(this, audioCtx));

    _this.recorder = new _wrecorder2.default(_this);

    // Set direct output to speakers
    _this.directOutGain = audioCtx.createGain();
    _this.directOutGain.gain.value = 0;
    _this.connect(_this.directOutGain);
    _this.directOutGain.connect(audioCtx.destination);
    return _this;
  }

  (0, _createClass3.default)(Recordy, [{
    key: 'toSpeaker',
    value: function toSpeaker(val) {
      this.directOutGain.gain.value = val;
    }
  }, {
    key: 'getInput',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var stream, mediaStream;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _getInput3.default)();

              case 2:
                stream = _context.sent;
                mediaStream = this.context.createMediaStreamSource(stream);

                mediaStream.connect(this);
                return _context.abrupt('return', true);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInput() {
        return _ref.apply(this, arguments);
      }

      return getInput;
    }()
  }, {
    key: 'startRecording',
    value: function startRecording() {
      this.recorder.record();
    }
  }, {
    key: 'stopRecording',
    value: function stopRecording() {
      var _this2 = this;

      var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref2$type = _ref2.type,
          type = _ref2$type === undefined ? 'blob' : _ref2$type;

      // type can be -> blob, audio or buffer
      // If asAudioObject evaluates to true, a window.Audio-object will be returned; otherwise, a blob will be returned;
      return new Promise(function (resolve) {
        _this2.recorder.stop();

        _this2.recorder.exportWAV(function (blob) {
          _this2.recorder.clear();

          switch (type) {

            case 'blob':
              resolve(blob);
              break;

            case 'audio':
              {
                var url = URL.createObjectURL(blob);
                var audio = new Audio(url);
                resolve(audio);
                break;
              }

            case 'buffer':
              {
                var fileReader = new FileReader();
                fileReader.addEventListener('loadend', function () {
                  _this2.context.decodeAudioData(fileReader.result).then(resolve);
                });
                fileReader.readAsArrayBuffer(blob);
                break;
              }

            default:
              throw new Error('[Recordy] Invalid type, must be one of those: blob, audio or buffer.');

          }
        });
      });
    }
  }]);
  return Recordy;
}(_webaudioChnl2.default);

/* const audioCtx = new AudioContext();
const r = new Recordy(audioCtx);

r.getInput()
  .then(val => {
    r.startRecording();

    window.setTimeout(() => {
      r.stopRecording({ type: 'audio' })
        .then(audio => {
          audio.play();
        });
    }, 1000);
  });*/


exports.default = Recordy;

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _soundcycle = __webpack_require__(67);

var _soundcycle2 = _interopRequireDefault(_soundcycle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
const soundcycle = new SoundCycle();

soundcycle.startRecording();

window.setTimeout(() => {
  soundcycle.stopRecording()
    .then(res => {
      soundcycle.setCurrentLane(res.laneId);
      soundcycle.setMode(soundcycle.MODES.ADD_TO_LANE);
      soundcycle.startRecording();

      window.setTimeout(() => {
        soundcycle.stopRecording()
          .then(res1 => {
            soundcycle.stopTrack({ id: res.chnlId });
            soundcycle.stopTrack({ id: res1.chnlId });
            window.setTimeout(() => {
              console.log('play again')
              soundcycle.playTrack({ id: res.chnlId });
            }, 1000);
          });
      }, 1000);
    });
}, 1000);*/

exports.default = _soundcycle2.default;

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _util = __webpack_require__(75);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EffectUnit = function () {
  function EffectUnit() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { name: '', effectChain: {}, values: [] };
    var audioCtx = arguments[1];
    (0, _classCallCheck3.default)(this, EffectUnit);
    this.isEffectUnit = true;

    /*
      The options object must have the following structure:
      {
        name: The name of the effect to identify it later
        effectChain: The object which contains the audioprocessors,
        values: An array which contains the available values for this effect and the according methods to edit them
      }
    */

    if (!audioCtx) throw new Error('The AudioContext specified (3\xB0 parameter) is not defined!');

    this.name = name;
    this.audioCtx = audioCtx;
    this.effectChain = (0, _util.functionsToValues)(options.effectChain);

    // Give all 'set'-methods of the specified values the effectChain as the first parameter
    this.values = (0, _util.bindMethodsToValues)(options.values, this.effectChain);

    // Now execute all 'set'-methods of the according values which have a 'defaultValue'-field in their 'options'-object
    this.values.forEach(function (value) {
      if (value.options.defaultValue) value.set(value.options.defaultValue);
    });

    this.setupEffectChain();
  }

  (0, _createClass3.default)(EffectUnit, [{
    key: 'enable',
    value: function enable() {
      this.effectGain.gain.value = 1;
      this.directGain.gain.value = 0;
    }
  }, {
    key: 'disable',
    value: function disable() {
      this.effectGain.gain.value = 0;
      this.directGain.gain.value = 1;
    }
  }, {
    key: 'connect',
    value: function connect(node) {
      if (node.isEffectUnit) this.output.connect(node.input);else {
        // Common audioNode
        this.output.connect(node);
      }
    }
  }, {
    key: 'setValue',
    value: function setValue(valueName, value) {
      (0, _util.filterValue)(this.values, valueName).set(value);
    }
  }, {
    key: 'getValueOptions',
    value: function getValueOptions(valueName) {
      return (0, _util.filterValue)(this.values, valueName).options;
    }
  }, {
    key: 'setupEffectChain',
    value: function setupEffectChain() {
      this.effectGain = this.audioCtx.createGain(); // Set to 1 ==> Effect is on; Set to 0 ==> Effect is off
      this.directGain = this.audioCtx.createGain(); // Set to 0 ==> Effect is on; Set to 1 ==> Effect is off

      this.output = this.audioCtx.createGain();
      this.input = this.audioCtx.createGain();

      this.input.connect(this.effectGain);
      this.input.connect(this.directGain);

      // Connect direct gain to ouput
      this.directGain.connect(this.output);

      // Connect the effectChain
      var effects = (0, _util.objToArray)(this.effectChain);

      // Effect chain not empty?
      if (effects.length >= 1) {
        // Connect effect gain to first effect
        this.effectGain.connect(effects[0]);
        // Connect all other effect to the following effect
        for (var i = 0; i < effects.length - 1; i++) {
          effects[i].connect(effects[i + 1]);
        } // Connect the last effect to the output gain
        effects[effects.length - 1].connect(this.output);
      }

      // Turn on after the effectChain was connected
      this.enable();
    }
  }, {
    key: 'disconnect',
    value: function disconnect() {
      // Disconnect all outgoing connections
      this.output.disconnect();
    }
  }]);
  return EffectUnit;
}();

exports.default = EffectUnit;

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filterValue = exports.objToArray = exports.functionsToValues = exports.bindMethodsToValues = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var bindMethodsToValues = exports.bindMethodsToValues = function bindMethodsToValues(values, param) {
  return values.map(function (value) {
    if (!(typeof value.set === "function")) throw new Error("The specified value for the 'set'-field of the '" + value.name + "' - value is not a function!");

    return (0, _extends3.default)({}, value, {
      set: value.set.bind(undefined, param)
    });
  });
};

var functionsToValues = exports.functionsToValues = function functionsToValues(obj) {
  // If a member of the object (obj) is a function, the return value of this function will be set as the value of this property
  var retObj = Object.assign({}, obj);

  Object.keys(retObj).forEach(function (key) {
    if (typeof retObj[key] === "function") retObj[key] = retObj[key]();
  });

  return retObj;
};

var objToArray = exports.objToArray = function objToArray(obj) {
  var array = [];
  Object.keys(obj).forEach(function (key) {
    array.push(obj[key]);
  });
  return array;
};

var filterValue = exports.filterValue = function filterValue(values, valueName) {
  var filteredValue = values.filter(function (val) {
    return val.name === valueName;
  })[0];

  if (!filteredValue) throw new Error("Tried to access inexistent value '" + valueName + "'.");

  return filteredValue;
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bitcrusherData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createBitcrusher;

var _webaudioEffectUnit = __webpack_require__(2);

var _webaudioEffectUnit2 = _interopRequireDefault(_webaudioEffectUnit);

var _tunajs = __webpack_require__(5);

var _tunajs2 = _interopRequireDefault(_tunajs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_BITS = 4;
var DEFAULT_NORMFREQ = 0.1;

var bitcrusherData = exports.bitcrusherData = {
  name: 'bitcrusher',
  values: [{
    name: 'bits',
    options: {
      type: 'range',
      defaultValue: DEFAULT_BITS,
      min: 1,
      max: 16,
      step: 1
    },
    set: function set(effectChain, value) {
      effectChain.bitcrusher.bits = value;
    }
  }, {
    name: 'normfreq',
    options: {
      type: 'range',
      defaultValue: DEFAULT_NORMFREQ,
      min: 0.1,
      max: 1,
      step: 0.01
    },
    set: function set(effectChain, value) {
      effectChain.bitcrusher.normfreq = value;
    }
  }]
};

function createBitcrusher(audioCtx) {
  var tuna = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _tunajs2.default(audioCtx);

  // Tuna is optional

  return new _webaudioEffectUnit2.default((0, _extends3.default)({}, bitcrusherData, {
    effectChain: {
      bitcrusher: new tuna.Bitcrusher({
        bits: 4, // 1 to 16
        normfreq: 0.1, // 0 to 1
        bufferSize: 4096 // 256 to 16384, NOT INCLUDED AS EDITABLE!
      })
    }
  }), audioCtx);
}

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chorusData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createChorus;

var _webaudioEffectUnit = __webpack_require__(2);

var _webaudioEffectUnit2 = _interopRequireDefault(_webaudioEffectUnit);

var _tunajs = __webpack_require__(5);

var _tunajs2 = _interopRequireDefault(_tunajs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_RATE = 1.5;
var DEFAULT_FEEDBACK = 0.2;
var DEFAULT_DELAY = 0.0045;

var chorusData = exports.chorusData = {
  name: 'chorus',
  values: [{
    name: 'rate',
    options: {
      type: 'range',
      defaultValue: DEFAULT_RATE,
      min: 0.01,
      max: 8,
      step: 0.01
    },
    set: function set(effectChain, value) {
      effectChain.chorus.rate = value;
    }
  }, {
    name: 'feedback',
    options: {
      type: 'range',
      defaultValue: DEFAULT_FEEDBACK,
      min: 0,
      max: 1,
      step: 0.01
    },
    set: function set(effectChain, value) {
      effectChain.chorus.feedback = value;
    }
  }, {
    name: 'delay',
    options: {
      type: 'range',
      defaultValue: DEFAULT_DELAY,
      min: 0,
      max: 1,
      step: 0.01
    },
    set: function set(effectChain, value) {
      effectChain.chorus.delay = value;
    }
  }]
};

function createChorus(audioCtx) {
  var tuna = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _tunajs2.default(audioCtx);

  // Tuna is optional

  return new _webaudioEffectUnit2.default((0, _extends3.default)({}, chorusData, {
    effectChain: {
      chorus: new tuna.Chorus({
        rate: DEFAULT_RATE, // 0.01 - 8
        feedback: DEFAULT_FEEDBACK, // 0 - 1
        delay: DEFAULT_DELAY // 0 - 1
      })
    }
  }), audioCtx);
}

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compressorData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createCompressor;

var _webaudioEffectUnit = __webpack_require__(2);

var _webaudioEffectUnit2 = _interopRequireDefault(_webaudioEffectUnit);

var _tunajs = __webpack_require__(5);

var _tunajs2 = _interopRequireDefault(_tunajs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_THRESHOLD = -1;
var DEFAULT_MAKEUPGAIN = 1;
var DEFAULT_ATTACK = 1;
var DEFAULT_RELEASE = 0;
var DEFAULT_RATIO = 4;
var DEFAULT_KNEE = 5;
var DEFAULT_AUTOMAKEUP = true;

var compressorData = exports.compressorData = {
  name: 'compressor',
  values: [{
    name: 'threshold',
    options: {
      type: 'range',
      defaultValue: DEFAULT_THRESHOLD,
      min: -100,
      max: 0,
      step: 0.1
    },
    set: function set(effectChain, value) {
      effectChain.compressor.threshold = value;
    }
  }, {
    name: 'makeupGain',
    options: {
      type: 'range',
      defaultValue: DEFAULT_MAKEUPGAIN,
      min: 0,
      max: 1,
      step: 0.01
    },
    set: function set(effectChain, value) {
      effectChain.compressor.makeupGain = value;
    }
  }, {
    name: 'attack',
    options: {
      type: 'range',
      defaultValue: DEFAULT_ATTACK,
      min: 0,
      max: 1000,
      step: 1
    },
    set: function set(effectChain, value) {
      effectChain.compressor.attack = value;
    }
  }, {
    name: 'release',
    options: {
      type: 'range',
      defaultValue: DEFAULT_RELEASE,
      min: 0,
      max: 1,
      step: 0.01
    },
    set: function set(effectChain, value) {
      effectChain.compressor.release = value;
    }
  }, {
    name: 'ratio',
    options: {
      type: 'range',
      defaultValue: DEFAULT_RATIO,
      min: 1,
      max: 20,
      step: 1
    },
    set: function set(effectChain, value) {
      effectChain.compressor.ratio = value;
    }
  }, {
    name: 'knee',
    options: {
      type: 'range',
      defaultValue: DEFAULT_KNEE,
      min: 0,
      max: 40,
      step: 1
    },
    set: function set(effectChain, value) {
      effectChain.compressor.knee = value;
    }
  }, {
    name: 'automakeup',
    options: {
      type: 'single',
      defaultValue: DEFAULT_AUTOMAKEUP
    },
    set: function set(effectChain, value) {
      effectChain.compressor.automakeup = value;
    }
  }]
};

function createCompressor(audioCtx) {
  var tuna = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _tunajs2.default(audioCtx);

  // Tuna is optional

  return new _webaudioEffectUnit2.default((0, _extends3.default)({}, compressorData, {
    effectChain: {
      compressor: new tuna.Compressor({
        threshold: DEFAULT_THRESHOLD, // -100 to 0
        makeupGain: DEFAULT_MAKEUPGAIN, // 0 and up
        attack: DEFAULT_ATTACK, // 0 to 1000
        release: DEFAULT_RELEASE, // 0 to 3000
        ratio: DEFAULT_RATIO, // 1 to 20
        knee: DEFAULT_KNEE, // 0 to 40
        automakeup: DEFAULT_AUTOMAKEUP // true/false
      })
    }
  }), audioCtx);
}

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delayData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createDelay;

var _webaudioEffectUnit = __webpack_require__(2);

var _webaudioEffectUnit2 = _interopRequireDefault(_webaudioEffectUnit);

var _tunajs = __webpack_require__(5);

var _tunajs2 = _interopRequireDefault(_tunajs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_FEEDBACK = 0.45;
var DEFAULT_DELAYTIME = 150;
var DEFAULT_WETLEVEL = 0.25;
var DEFAULT_DRYLEVEL = 1;
var DEFAULT_CUTOFF = 2000;

var delayData = exports.delayData = {
  name: 'delay',
  values: [{
    name: 'feedback',
    options: {
      type: 'range',
      defaultValue: DEFAULT_FEEDBACK,
      min: 0,
      max: 1,
      step: 0.01
    },
    set: function set(effectChain, value) {
      effectChain.delay.feedback = value;
    }
  }, {
    name: 'delayTime',
    options: {
      type: 'range',
      defaultValue: DEFAULT_DELAYTIME,
      min: 1,
      max: 4000,
      step: 1
    },
    set: function set(effectChain, value) {
      effectChain.delay.delayTime = value;
    }
  }, {
    name: 'wetLevel',
    options: {
      type: 'range',
      defaultValue: DEFAULT_WETLEVEL,
      min: 0,
      max: 1,
      step: 0.01
    },
    set: function set(effectChain, value) {
      effectChain.delay.wetLevel = value;
    }
  }, {
    name: 'dryLevel',
    options: {
      type: 'range',
      defaultValue: DEFAULT_DRYLEVEL,
      min: 0,
      max: 1,
      step: 0.01
    },
    set: function set(effectChain, value) {
      effectChain.delay.dryLevel = value;
    }
  }, {
    name: 'cutoff',
    options: {
      type: 'range',
      defaultValue: DEFAULT_CUTOFF,
      min: 20,
      max: 22050,
      step: 1
    },
    set: function set(effectChain, value) {
      effectChain.delay.cutoff = value;
    }
  }]
};

function createDelay(audioCtx) {
  var tuna = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _tunajs2.default(audioCtx);

  // Tuna is optional

  return new _webaudioEffectUnit2.default((0, _extends3.default)({}, delayData, {
    effectChain: {
      delay: new tuna.Delay({
        feedback: DEFAULT_FEEDBACK, // 0 to 1+
        delayTime: DEFAULT_DELAYTIME, // 1 to 10000 milliseconds
        wetLevel: DEFAULT_WETLEVEL, // 0 to 1+
        dryLevel: DEFAULT_DRYLEVEL, // 0 to 1+
        cutoff: DEFAULT_CUTOFF // cutoff frequency of the built in lowpass-filter. 20 to 22050
      })
    }
  }), audioCtx);
}

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gainData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createGain;

var _webaudioEffectUnit = __webpack_require__(2);

var _webaudioEffectUnit2 = _interopRequireDefault(_webaudioEffectUnit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var gainData = exports.gainData = {
  name: 'gain',
  values: [{
    name: 'gain',
    options: {
      type: 'range',
      defaultValue: 1,
      min: 0,
      max: 1,
      step: 0.01
    },
    set: function set(effectChain, value) {
      effectChain.gain.gain.value = value;
    }
  }, {
    name: 'muted',
    options: {
      type: 'single',
      defaultValue: false
    },
    set: function set(effectChain, value) {
      effectChain.gain.gain.value = value ? 0 : 1;
    }
  }]
};

function createGain(audioCtx) {
  return new _webaudioEffectUnit2.default((0, _extends3.default)({}, gainData, {
    effectChain: {
      gain: audioCtx.createGain()
    }
  }), audioCtx);
}

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.highpassData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createLowpass;

var _webaudioEffectUnit = __webpack_require__(2);

var _webaudioEffectUnit2 = _interopRequireDefault(_webaudioEffectUnit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_FREQUENCY = 0;

var highpassData = exports.highpassData = {
  name: 'highpass',
  values: [{
    name: 'frequency',
    options: {
      type: 'range',
      defaultValue: DEFAULT_FREQUENCY,
      min: 0,
      max: 20000,
      step: 20
    },
    set: function set(effectChain, value) {
      effectChain.highpass.frequency.value = value;
    }
  }]
};

function createLowpass(audioCtx) {
  return new _webaudioEffectUnit2.default((0, _extends3.default)({}, highpassData, {
    effectChain: {
      highpass: function highpass() {
        var hp = audioCtx.createBiquadFilter();
        hp.type = 'highpass';
        hp.frequency.value = DEFAULT_FREQUENCY;
        return hp;
      }
    }
  }), audioCtx);
}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lowpassData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createLowpass;

var _webaudioEffectUnit = __webpack_require__(2);

var _webaudioEffectUnit2 = _interopRequireDefault(_webaudioEffectUnit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_FREQUENCY = 20000;

var lowpassData = exports.lowpassData = {
  name: 'lowpass',
  values: [{
    name: 'frequency',
    options: {
      type: 'range',
      defaultValue: DEFAULT_FREQUENCY,
      min: 0,
      max: 20000,
      step: 20
    },
    set: function set(effectChain, value) {
      effectChain.lowpass.frequency.value = value;
    }
  }]
};

function createLowpass(audioCtx) {
  return new _webaudioEffectUnit2.default((0, _extends3.default)({}, lowpassData, {
    effectChain: {
      lowpass: function lowpass() {
        var lp = audioCtx.createBiquadFilter();
        lp.type = 'lowpass';
        lp.frequency.value = DEFAULT_FREQUENCY;
        return lp;
      }
    }
  }), audioCtx);
}

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moogData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createMoog;

var _webaudioEffectUnit = __webpack_require__(2);

var _webaudioEffectUnit2 = _interopRequireDefault(_webaudioEffectUnit);

var _tunajs = __webpack_require__(5);

var _tunajs2 = _interopRequireDefault(_tunajs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_CUTOFF = 0.065;
var DEFAULT_RESONANCE = 3.5;

var moogData = exports.moogData = {
  name: 'moog',
  values: [{
    name: 'cutoff',
    options: {
      type: 'range',
      defaultValue: DEFAULT_CUTOFF,
      min: 0,
      max: 1,
      step: 0.01
    },
    set: function set(effectChain, value) {
      effectChain.moog.cutoff = value;
    }
  }, {
    name: 'resonance',
    options: {
      type: 'range',
      defaultValue: DEFAULT_RESONANCE,
      min: 0,
      max: 4,
      step: 0.01
    },
    set: function set(effectChain, value) {
      effectChain.moog.resonance = value;
    }
  }]
};

function createMoog(audioCtx) {
  var tuna = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _tunajs2.default(audioCtx);

  // Tuna is optional

  return new _webaudioEffectUnit2.default((0, _extends3.default)({}, moogData, {
    effectChain: {
      moog: new tuna.MoogFilter({
        cutoff: 0.065, // 0 to 1
        resonance: 3.5, // 0 to 4
        bufferSize: 4096 // 256 to 16384, NOT INCLUDED AS EDITABLE!
      })
    }
  }), audioCtx);
}

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phaserData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createPhaser;

var _webaudioEffectUnit = __webpack_require__(2);

var _webaudioEffectUnit2 = _interopRequireDefault(_webaudioEffectUnit);

var _tunajs = __webpack_require__(5);

var _tunajs2 = _interopRequireDefault(_tunajs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_RATE = 1.2;
var DEFAULT_DEPTH = 0.3;
var DEFAULT_FEEDBACK = 0.2;
var DEFAULT_STEREOPHASE = 30;
var DEFAULT_BASEMODULATIONFREQUENCY = 700;

var phaserData = exports.phaserData = {
  name: 'phaser',
  values: [{
    name: 'rate',
    options: {
      type: 'range',
      defaultValue: DEFAULT_RATE,
      min: 0.01,
      max: 8,
      step: 0.01
    },
    set: function set(effectChain, value) {
      effectChain.phaser.rate = value;
    }
  }, {
    name: 'depth',
    options: {
      type: 'range',
      defaultValue: DEFAULT_DEPTH,
      min: 0,
      max: 1,
      step: 0.01
    },
    set: function set(effectChain, value) {
      effectChain.phaser.depth = value;
    }
  }, {
    name: 'feedback',
    options: {
      type: 'range',
      defaultValue: DEFAULT_FEEDBACK,
      min: 0,
      max: 1,
      step: 0.01
    },
    set: function set(effectChain, value) {
      effectChain.phaser.feedback = value;
    }
  }, {
    name: 'stereoPhase',
    options: {
      type: 'range',
      defaultValue: DEFAULT_STEREOPHASE,
      min: 0,
      max: 180,
      step: 0.1
    },
    set: function set(effectChain, value) {
      effectChain.phaser.stereoPhase = value;
    }
  }, {
    name: 'baseModulationFrequency',
    options: {
      type: 'range',
      defaultValue: DEFAULT_BASEMODULATIONFREQUENCY,
      min: 500,
      max: 1500,
      step: 1
    },
    set: function set(effectChain, value) {
      effectChain.phaser.baseModulationFrequency = value;
    }
  }]
};

function createPhaser(audioCtx) {
  var tuna = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _tunajs2.default(audioCtx);

  // Tuna is optional

  return new _webaudioEffectUnit2.default((0, _extends3.default)({}, phaserData, {
    effectChain: {
      phaser: new tuna.Phaser({
        rate: 1.2, // 0.01 to 8 is a decent range, but higher values are possible
        depth: 0.3, // 0 to 1
        feedback: 0.2, // 0 to 1+
        stereoPhase: 30, // 0 to 180
        baseModulationFrequency: 700 // 500 to 1500
      })
    }
  }), audioCtx);
}

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pingPongDelayData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createPingPongDelay;

var _webaudioEffectUnit = __webpack_require__(2);

var _webaudioEffectUnit2 = _interopRequireDefault(_webaudioEffectUnit);

var _tunajs = __webpack_require__(5);

var _tunajs2 = _interopRequireDefault(_tunajs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_WETLEVEL = 0.5;
var DEFAULT_FEEDBACK = 0.3;
var DEFAULT_DELAYTIMELEFT = 150;
var DEFAULT_DELAYTIMERIGHT = 150;

var pingPongDelayData = exports.pingPongDelayData = {
  name: 'pingPongDelay',
  values: [{
    name: 'wetLevel',
    options: {
      type: 'range',
      defaultValue: DEFAULT_WETLEVEL,
      min: 0,
      max: 1,
      step: 0.01
    },
    set: function set(effectChain, value) {
      effectChain.pingpong.wetLevel = value;
    }
  }, {
    name: 'feedback',
    options: {
      type: 'range',
      defaultValue: DEFAULT_FEEDBACK,
      min: 0,
      max: 1,
      step: 0.01
    },
    set: function set(effectChain, value) {
      effectChain.pingpong.feedback = value;
    }
  }, {
    name: 'delayTimeLeft',
    options: {
      type: 'range',
      defaultValue: DEFAULT_DELAYTIMELEFT,
      min: 1,
      max: 4000,
      step: 1
    },
    set: function set(effectChain, value) {
      effectChain.pingpong.delayTimeLeft = value;
    }
  }, {
    name: 'delayTimeRight',
    options: {
      type: 'range',
      defaultValue: DEFAULT_DELAYTIMERIGHT,
      min: 1,
      max: 4000,
      step: 1
    },
    set: function set(effectChain, value) {
      effectChain.pingpong.DEFAULT_DELAYTIMERIGHT = value;
    }
  }]
};

function createPingPongDelay(audioCtx) {
  var tuna = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _tunajs2.default(audioCtx);

  // Tuna is optional

  return new _webaudioEffectUnit2.default((0, _extends3.default)({}, pingPongDelayData, {
    effectChain: {
      pingpong: new tuna.PingPongDelay({
        wetLevel: 0.5, // 0 to 1
        feedback: 0.3, // 0 to 1
        delayTimeLeft: 150, // 1 to 10000 (milliseconds)
        delayTimeRight: 200 // 1 to 10000 (milliseconds)
      })
    }
  }), audioCtx);
}

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tremoloData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createTremolo;

var _webaudioEffectUnit = __webpack_require__(2);

var _webaudioEffectUnit2 = _interopRequireDefault(_webaudioEffectUnit);

var _tunajs = __webpack_require__(5);

var _tunajs2 = _interopRequireDefault(_tunajs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_INTENSITY = 0.3;
var DEFAULT_RATE = 4;
var DEFAULT_STEREOPHASE = 0;

var tremoloData = exports.tremoloData = {
  name: 'tremolo',
  values: [{
    name: 'intensity',
    options: {
      type: 'range',
      defaultValue: DEFAULT_INTENSITY,
      min: 0,
      max: 1,
      step: 0.01
    },
    set: function set(effectChain, value) {
      effectChain.tremolo.intensity = value;
    }
  }, {
    name: 'rate',
    options: {
      type: 'range',
      defaultValue: DEFAULT_RATE,
      min: 0.001,
      max: 8,
      step: 0.01
    },
    set: function set(effectChain, value) {
      effectChain.tremolo.rate = value;
    }
  }, {
    name: 'stereoPhase',
    options: {
      type: 'range',
      defaultValue: DEFAULT_STEREOPHASE,
      min: 0,
      max: 180,
      step: 1
    },
    set: function set(effectChain, value) {
      effectChain.tremolo.stereoPhase = value;
    }
  }]
};

function createTremolo(audioCtx) {
  var tuna = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _tunajs2.default(audioCtx);

  // Tuna is optional

  return new _webaudioEffectUnit2.default((0, _extends3.default)({}, tremoloData, {
    effectChain: {
      tremolo: new tuna.Tremolo({
        intensity: DEFAULT_INTENSITY, // 0 to 1
        rate: DEFAULT_RATE, // 0.001 to 8
        stereoPhase: DEFAULT_STEREOPHASE // 0 to 180
      })
    }
  }), audioCtx);
}

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wahWahData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createWahWah;

var _webaudioEffectUnit = __webpack_require__(2);

var _webaudioEffectUnit2 = _interopRequireDefault(_webaudioEffectUnit);

var _tunajs = __webpack_require__(5);

var _tunajs2 = _interopRequireDefault(_tunajs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DEFAULT_AUTOMODE = true;
var DEFAULT_BASEFREQUENCY = 0.5;
var DEFAULT_EXCURSIONOCTAVES = 2;
var DEFAULT_SWEEP = 0.2;
var DEFAULT_RESONANCE = 10;
var DEFAULT_SENSITIVITY = 0.5;

var wahWahData = exports.wahWahData = {
  name: 'wahwah',
  values: [{
    name: 'automode',
    options: {
      type: 'single',
      defaultValue: DEFAULT_AUTOMODE
    },
    set: function set(effectChain, value) {
      effectChain.wahwah.automode = value;
    }
  }, {
    name: 'baseFrequency',
    options: {
      type: 'range',
      defaultValue: DEFAULT_BASEFREQUENCY,
      min: 0,
      max: 1,
      step: 0.01
    },
    set: function set(effectChain, value) {
      effectChain.wahwah.baseFrequency = value;
    }
  }, {
    name: 'excursionOctaves',
    options: {
      type: 'range',
      defaultValue: DEFAULT_EXCURSIONOCTAVES,
      min: 0,
      max: 6,
      step: 1
    },
    set: function set(effectChain, value) {
      effectChain.wahwah.excursionOctaves = value;
    }
  }, {
    name: 'sweep',
    options: {
      type: 'range',
      defaultValue: DEFAULT_SWEEP,
      min: 0,
      max: 1,
      step: 0.01
    },
    set: function set(effectChain, value) {
      effectChain.wahwah.sweep = value;
    }
  }, {
    name: 'resonance',
    options: {
      type: 'range',
      defaultValue: DEFAULT_RESONANCE,
      min: 0,
      max: 100,
      step: 1
    },
    set: function set(effectChain, value) {
      effectChain.wahwah.resonance = value;
    }
  }, {
    name: 'sensitivity',
    options: {
      type: 'range',
      defaultValue: DEFAULT_SENSITIVITY,
      min: 0,
      max: 1,
      step: 0.01
    },
    set: function set(effectChain, value) {
      effectChain.wahwah.sensitivity = value;
    }
  }]
};

function createWahWah(audioCtx) {
  var tuna = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _tunajs2.default(audioCtx);

  // Tuna is optional

  return new _webaudioEffectUnit2.default((0, _extends3.default)({}, wahWahData, {
    effectChain: {
      wahwah: new tuna.WahWah({
        automode: DEFAULT_AUTOMODE, // true/false
        baseFrequency: DEFAULT_BASEFREQUENCY, // 0 to 1
        excursionOctaves: DEFAULT_EXCURSIONOCTAVES, // 1 to 6
        sweep: DEFAULT_SWEEP, // 0 to 1
        resonance: DEFAULT_RESONANCE, // 1 to 100
        sensitivity: DEFAULT_SENSITIVITY // -1 to 1
      })
    }
  }), audioCtx);
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EFFECT_DATA = undefined;
exports.default = createEffectCollection;

var _tunajs = __webpack_require__(5);

var _tunajs2 = _interopRequireDefault(_tunajs);

var _gain = __webpack_require__(80);

var _gain2 = _interopRequireDefault(_gain);

var _chorus = __webpack_require__(77);

var _chorus2 = _interopRequireDefault(_chorus);

var _delay = __webpack_require__(79);

var _delay2 = _interopRequireDefault(_delay);

var _phaser = __webpack_require__(84);

var _phaser2 = _interopRequireDefault(_phaser);

var _compressor = __webpack_require__(78);

var _compressor2 = _interopRequireDefault(_compressor);

var _lowpass = __webpack_require__(82);

var _lowpass2 = _interopRequireDefault(_lowpass);

var _highpass = __webpack_require__(81);

var _highpass2 = _interopRequireDefault(_highpass);

var _tremolo = __webpack_require__(86);

var _tremolo2 = _interopRequireDefault(_tremolo);

var _wahwah = __webpack_require__(87);

var _wahwah2 = _interopRequireDefault(_wahwah);

var _bitcrusher = __webpack_require__(76);

var _bitcrusher2 = _interopRequireDefault(_bitcrusher);

var _moog = __webpack_require__(83);

var _moog2 = _interopRequireDefault(_moog);

var _pingPongDelay = __webpack_require__(85);

var _pingPongDelay2 = _interopRequireDefault(_pingPongDelay);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EFFECT_DATA = exports.EFFECT_DATA = [_gain.gainData, _highpass.highpassData, _lowpass.lowpassData, _delay.delayData, _chorus.chorusData, _phaser.phaserData, _compressor.compressorData, _tremolo.tremoloData, _wahwah.wahWahData, _bitcrusher.bitcrusherData, _moog.moogData, _pingPongDelay.pingPongDelayData];

function createEffectCollection(audioCtx) {
  var tuna = new _tunajs2.default(audioCtx);

  return {
    gain: (0, _gain2.default)(audioCtx),
    chorus: (0, _chorus2.default)(audioCtx, tuna),
    delay: (0, _delay2.default)(audioCtx, tuna),
    phaser: (0, _phaser2.default)(audioCtx, tuna),
    compressor: (0, _compressor2.default)(audioCtx, tuna),
    lowpass: (0, _lowpass2.default)(audioCtx),
    highpass: (0, _highpass2.default)(audioCtx),
    tremolo: (0, _tremolo2.default)(audioCtx, tuna),
    wahwah: (0, _wahwah2.default)(audioCtx, tuna),
    bitcrusher: (0, _bitcrusher2.default)(audioCtx, tuna),
    moog: (0, _moog2.default)(audioCtx, tuna),
    pingPongDelay: (0, _pingPongDelay2.default)(audioCtx, tuna)
  };
}

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(24);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(23);

var _inherits3 = _interopRequireDefault(_inherits2);

var _webaudioChnl = __webpack_require__(22);

var _webaudioChnl2 = _interopRequireDefault(_webaudioChnl);

var _wrecorder = __webpack_require__(45);

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

      return new Promise(function (resolve) {
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

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Recorder = undefined;

var _classCallCheck2 = __webpack_require__(6);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(7);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inlineWorker = __webpack_require__(147);

var _inlineWorker2 = _interopRequireDefault(_inlineWorker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Recorder = exports.Recorder = function () {
  function Recorder(source, cfg) {
    var _this = this;

    (0, _classCallCheck3.default)(this, Recorder);
    this.config = {
      bufferLen: 4096,
      numChannels: 2,
      mimeType: 'audio/wav'
    };
    this.recording = false;
    this.callbacks = {
      getBuffer: [],
      exportWAV: []
    };

    Object.assign(this.config, cfg);
    this.context = source.context;
    this.node = (this.context.createScriptProcessor || this.context.createJavaScriptNode).call(this.context, this.config.bufferLen, this.config.numChannels, this.config.numChannels);

    this.node.onaudioprocess = function (e) {
      if (!_this.recording) return;

      var buffer = [];
      for (var channel = 0; channel < _this.config.numChannels; channel++) {
        buffer.push(e.inputBuffer.getChannelData(channel));
      }_this.worker.postMessage({
        command: 'record',
        buffer: buffer
      });
    };

    source.connect(this.node);
    this.node.connect(this.context.destination); // this should not be necessary

    var self = {};
    this.worker = new _inlineWorker2.default(function on() {
      var recLength = 0;
      var recBuffers = [];
      var sampleRate = void 0;
      var numChannels = void 0;

      this.onmessage = function onmsg(e) {
        switch (e.data.command) {
          case 'init':
            init(e.data.config);
            break;
          case 'record':
            record(e.data.buffer);
            break;
          case 'exportWAV':
            exportWAV(e.data.type);
            break;
          case 'getBuffer':
            getBuffer();
            break;
          case 'clear':
            clear();
            break;
          default:
            throw new Error('[wrecorder] Invalid command!');
        }
      };

      function init(config) {
        sampleRate = config.sampleRate;
        numChannels = config.numChannels;
        initBuffers();
      }

      function record(inputBuffer) {
        for (var channel = 0; channel < numChannels; channel++) {
          recBuffers[channel].push(inputBuffer[channel]);
        }recLength += inputBuffer[0].length;
      }

      function exportWAV(type) {
        var buffers = [];
        for (var channel = 0; channel < numChannels; channel++) {
          buffers.push(mergeBuffers(recBuffers[channel], recLength));
        }var interleaved = void 0;
        if (numChannels === 2) interleaved = interleave(buffers[0], buffers[1]);else interleaved = buffers[0];

        var dataview = encodeWAV(interleaved);
        var audioBlob = new Blob([dataview], { type: type });

        this.postMessage({ command: 'exportWAV', data: audioBlob });
      }

      function getBuffer() {
        var buffers = [];
        for (var channel = 0; channel < numChannels; channel++) {
          buffers.push(mergeBuffers(recBuffers[channel], recLength));
        }this.postMessage({ command: 'getBuffer', data: buffers });
      }

      function clear() {
        recLength = 0;
        recBuffers = [];
        initBuffers();
      }

      function initBuffers() {
        for (var channel = 0; channel < numChannels; channel++) {
          recBuffers[channel] = [];
        }
      }

      function mergeBuffers(recBuffers, recLength) {
        var result = new Float32Array(recLength);
        var offset = 0;
        for (var i = 0; i < recBuffers.length; i++) {
          result.set(recBuffers[i], offset);
          offset += recBuffers[i].length;
        }
        return result;
      }

      function interleave(inputL, inputR) {
        var length = inputL.length + inputR.length;
        var result = new Float32Array(length);

        var index = 0;
        var inputIndex = 0;

        while (index < length) {
          result[index++] = inputL[inputIndex];
          result[index++] = inputR[inputIndex];
          inputIndex++;
        }
        return result;
      }

      function floatTo16BitPCM(output, offset, input) {
        for (var i = 0; i < input.length; i++, offset += 2) {
          var s = Math.max(-1, Math.min(1, input[i]));
          output.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
        }
      }

      function writeString(view, offset, string) {
        for (var i = 0; i < string.length; i++) {
          view.setUint8(offset + i, string.charCodeAt(i));
        }
      }

      function encodeWAV(samples) {
        var buffer = new ArrayBuffer(44 + samples.length * 2);
        var view = new DataView(buffer);

        /* RIFF identifier */
        writeString(view, 0, 'RIFF');
        /* RIFF chunk length */
        view.setUint32(4, 36 + samples.length * 2, true);
        /* RIFF type */
        writeString(view, 8, 'WAVE');
        /* format chunk identifier */
        writeString(view, 12, 'fmt ');
        /* format chunk length */
        view.setUint32(16, 16, true);
        /* sample format (raw) */
        view.setUint16(20, 1, true);
        /* channel count */
        view.setUint16(22, numChannels, true);
        /* sample rate */
        view.setUint32(24, sampleRate, true);
        /* byte rate (sample rate * block align) */
        view.setUint32(28, sampleRate * 4, true);
        /* block align (channel count * bytes per sample) */
        view.setUint16(32, numChannels * 2, true);
        /* bits per sample */
        view.setUint16(34, 16, true);
        /* data chunk identifier */
        writeString(view, 36, 'data');
        /* data chunk length */
        view.setUint32(40, samples.length * 2, true);

        floatTo16BitPCM(view, 44, samples);

        return view;
      }
    }, self);

    this.worker.postMessage({
      command: 'init',
      config: {
        sampleRate: this.context.sampleRate,
        numChannels: this.config.numChannels
      }
    });

    this.worker.onmessage = function (e) {
      var cb = _this.callbacks[e.data.command].pop();
      if (typeof cb === 'function') cb(e.data.data);
    };
  }

  (0, _createClass3.default)(Recorder, [{
    key: 'record',
    value: function record() {
      this.recording = true;
    }
  }, {
    key: 'stop',
    value: function stop() {
      this.recording = false;
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.worker.postMessage({ command: 'clear' });
    }
  }, {
    key: 'getBuffer',
    value: function getBuffer(cb) {
      cb = cb || this.config.callback;
      if (!cb) throw new Error('Callback not set');

      this.callbacks.getBuffer.push(cb);

      this.worker.postMessage({ command: 'getBuffer' });
    }
  }, {
    key: 'exportWAV',
    value: function exportWAV(cb, mimeType) {
      mimeType = mimeType || this.config.mimeType;
      cb = cb || this.config.callback;
      if (!cb) throw new Error('Callback not set');

      this.callbacks.exportWAV.push(cb);

      this.worker.postMessage({
        command: 'exportWAV',
        type: mimeType
      });
    }
  }], [{
    key: 'forceDownload',
    value: function forceDownload(blob, filename) {
      var url = (window.URL || window.webkitURL).createObjectURL(blob);
      var link = window.document.createElement('a');
      link.href = url;
      link.download = filename || 'output.wav';
      link.click();
    }
  }]);
  return Recorder;
}(); /* eslint no-use-before-define: 0 */
/* eslint no-shadow: 0 */


exports.default = Recorder;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(100), __esModule: true };

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(101), __esModule: true };

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(102), __esModule: true };

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(103), __esModule: true };

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(104), __esModule: true };

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(105), __esModule: true };

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(106), __esModule: true };

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(107), __esModule: true };

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(91);

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
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(131);
module.exports = __webpack_require__(3).Array.from;

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(133);
module.exports = __webpack_require__(3).Object.assign;

/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(134);
var $Object = __webpack_require__(3).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(135);
var $Object = __webpack_require__(3).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(136);
module.exports = __webpack_require__(3).Object.setPrototypeOf;

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(63);
__webpack_require__(44);
__webpack_require__(64);
__webpack_require__(137);
module.exports = __webpack_require__(3).Promise;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(138);
__webpack_require__(63);
__webpack_require__(139);
__webpack_require__(140);
module.exports = __webpack_require__(3).Symbol;

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(44);
__webpack_require__(64);
module.exports = __webpack_require__(43).f('iterator');

/***/ }),
/* 108 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = function(it, Constructor, name, forbiddenField){
  if(!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)){
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(14)
  , toLength  = __webpack_require__(39)
  , toIndex   = __webpack_require__(130);
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
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(8)
  , createDesc      = __webpack_require__(21);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(20)
  , gOPS    = __webpack_require__(35)
  , pIE     = __webpack_require__(26);
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
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var ctx         = __webpack_require__(15)
  , call        = __webpack_require__(54)
  , isArrayIter = __webpack_require__(53)
  , anObject    = __webpack_require__(9)
  , toLength    = __webpack_require__(39)
  , getIterFn   = __webpack_require__(62)
  , BREAK       = {}
  , RETURN      = {};
var exports = module.exports = function(iterable, entries, fn, that, ITERATOR){
  var iterFn = ITERATOR ? function(){ return iterable; } : getIterFn(iterable)
    , f      = ctx(fn, that, entries ? 2 : 1)
    , index  = 0
    , length, step, iterator, result;
  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if(result === BREAK || result === RETURN)return result;
  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
    result = call(iterator, f, step.value, entries);
    if(result === BREAK || result === RETURN)return result;
  }
};
exports.BREAK  = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 114 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function(fn, args, that){
  var un = that === undefined;
  switch(args.length){
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return              fn.apply(that, args);
};

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(17);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(34)
  , descriptor     = __webpack_require__(21)
  , setToStringTag = __webpack_require__(27)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(13)(IteratorPrototype, __webpack_require__(1)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 117 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(20)
  , toIObject = __webpack_require__(14);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(28)('meta')
  , isObject = __webpack_require__(16)
  , has      = __webpack_require__(12)
  , setDesc  = __webpack_require__(8).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(18)(function(){
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
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(4)
  , macrotask = __webpack_require__(61).set
  , Observer  = global.MutationObserver || global.WebKitMutationObserver
  , process   = global.process
  , Promise   = global.Promise
  , isNode    = __webpack_require__(17)(process) == 'process';

module.exports = function(){
  var head, last, notify;

  var flush = function(){
    var parent, fn;
    if(isNode && (parent = process.domain))parent.exit();
    while(head){
      fn   = head.fn;
      head = head.next;
      try {
        fn();
      } catch(e){
        if(head)notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if(parent)parent.enter();
  };

  // Node.js
  if(isNode){
    notify = function(){
      process.nextTick(flush);
    };
  // browsers with MutationObserver
  } else if(Observer){
    var toggle = true
      , node   = document.createTextNode('');
    new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
    notify = function(){
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if(Promise && Promise.resolve){
    var promise = Promise.resolve();
    notify = function(){
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function(){
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function(fn){
    var task = {fn: fn, next: undefined};
    if(last)last.next = task;
    if(!head){
      head = task;
      notify();
    } last = task;
  };
};

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(20)
  , gOPS     = __webpack_require__(35)
  , pIE      = __webpack_require__(26)
  , toObject = __webpack_require__(40)
  , IObject  = __webpack_require__(52)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(18)(function(){
  var A = {}
    , B = {}
    , S = Symbol()
    , K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function(k){ B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
  var T     = toObject(target)
    , aLen  = arguments.length
    , index = 1
    , getSymbols = gOPS.f
    , isEnum     = pIE.f;
  while(aLen > index){
    var S      = IObject(arguments[index++])
      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
      , length = keys.length
      , j      = 0
      , key;
    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
  } return T;
} : $assign;

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(8)
  , anObject = __webpack_require__(9)
  , getKeys  = __webpack_require__(20);

module.exports = __webpack_require__(10) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(14)
  , gOPN      = __webpack_require__(58).f
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
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(12)
  , toObject    = __webpack_require__(40)
  , IE_PROTO    = __webpack_require__(36)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var hide = __webpack_require__(13);
module.exports = function(target, src, safe){
  for(var key in src){
    if(safe && target[key])target[key] = src[key];
    else hide(target, key, src[key]);
  } return target;
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(16)
  , anObject = __webpack_require__(9);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(15)(Function.call, __webpack_require__(57).f(Object.prototype, '__proto__').set, 2);
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
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global      = __webpack_require__(4)
  , core        = __webpack_require__(3)
  , dP          = __webpack_require__(8)
  , DESCRIPTORS = __webpack_require__(10)
  , SPECIES     = __webpack_require__(1)('species');

module.exports = function(KEY){
  var C = typeof core[KEY] == 'function' ? core[KEY] : global[KEY];
  if(DESCRIPTORS && C && !C[SPECIES])dP.f(C, SPECIES, {
    configurable: true,
    get: function(){ return this; }
  });
};

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject  = __webpack_require__(9)
  , aFunction = __webpack_require__(30)
  , SPECIES   = __webpack_require__(1)('species');
module.exports = function(O, D){
  var C = anObject(O).constructor, S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(38)
  , defined   = __webpack_require__(31);
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
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(38)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(15)
  , $export        = __webpack_require__(11)
  , toObject       = __webpack_require__(40)
  , call           = __webpack_require__(54)
  , isArrayIter    = __webpack_require__(53)
  , toLength       = __webpack_require__(39)
  , createProperty = __webpack_require__(111)
  , getIterFn      = __webpack_require__(62);

$export($export.S + $export.F * !__webpack_require__(56)(function(iter){ Array.from(iter); }), 'Array', {
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
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(108)
  , step             = __webpack_require__(117)
  , Iterators        = __webpack_require__(19)
  , toIObject        = __webpack_require__(14);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(55)(Array, 'Array', function(iterated, kind){
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
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(11);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(121)});

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(11)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(34)});

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(11);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(10), 'Object', {defineProperty: __webpack_require__(8).f});

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(11);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(126).set});

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY            = __webpack_require__(25)
  , global             = __webpack_require__(4)
  , ctx                = __webpack_require__(15)
  , classof            = __webpack_require__(49)
  , $export            = __webpack_require__(11)
  , isObject           = __webpack_require__(16)
  , aFunction          = __webpack_require__(30)
  , anInstance         = __webpack_require__(109)
  , forOf              = __webpack_require__(113)
  , speciesConstructor = __webpack_require__(128)
  , task               = __webpack_require__(61).set
  , microtask          = __webpack_require__(120)()
  , PROMISE            = 'Promise'
  , TypeError          = global.TypeError
  , process            = global.process
  , $Promise           = global[PROMISE]
  , process            = global.process
  , isNode             = classof(process) == 'process'
  , empty              = function(){ /* empty */ }
  , Internal, GenericPromiseCapability, Wrapper;

var USE_NATIVE = !!function(){
  try {
    // correct subclassing with @@species support
    var promise     = $Promise.resolve(1)
      , FakePromise = (promise.constructor = {})[__webpack_require__(1)('species')] = function(exec){ exec(empty, empty); };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch(e){ /* empty */ }
}();

// helpers
var sameConstructor = function(a, b){
  // with library wrapper special case
  return a === b || a === $Promise && b === Wrapper;
};
var isThenable = function(it){
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var newPromiseCapability = function(C){
  return sameConstructor($Promise, C)
    ? new PromiseCapability(C)
    : new GenericPromiseCapability(C);
};
var PromiseCapability = GenericPromiseCapability = function(C){
  var resolve, reject;
  this.promise = new C(function($$resolve, $$reject){
    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject  = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject  = aFunction(reject);
};
var perform = function(exec){
  try {
    exec();
  } catch(e){
    return {error: e};
  }
};
var notify = function(promise, isReject){
  if(promise._n)return;
  promise._n = true;
  var chain = promise._c;
  microtask(function(){
    var value = promise._v
      , ok    = promise._s == 1
      , i     = 0;
    var run = function(reaction){
      var handler = ok ? reaction.ok : reaction.fail
        , resolve = reaction.resolve
        , reject  = reaction.reject
        , domain  = reaction.domain
        , result, then;
      try {
        if(handler){
          if(!ok){
            if(promise._h == 2)onHandleUnhandled(promise);
            promise._h = 1;
          }
          if(handler === true)result = value;
          else {
            if(domain)domain.enter();
            result = handler(value);
            if(domain)domain.exit();
          }
          if(result === reaction.promise){
            reject(TypeError('Promise-chain cycle'));
          } else if(then = isThenable(result)){
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch(e){
        reject(e);
      }
    };
    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if(isReject && !promise._h)onUnhandled(promise);
  });
};
var onUnhandled = function(promise){
  task.call(global, function(){
    var value = promise._v
      , abrupt, handler, console;
    if(isUnhandled(promise)){
      abrupt = perform(function(){
        if(isNode){
          process.emit('unhandledRejection', value, promise);
        } else if(handler = global.onunhandledrejection){
          handler({promise: promise, reason: value});
        } else if((console = global.console) && console.error){
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if(abrupt)throw abrupt.error;
  });
};
var isUnhandled = function(promise){
  if(promise._h == 1)return false;
  var chain = promise._a || promise._c
    , i     = 0
    , reaction;
  while(chain.length > i){
    reaction = chain[i++];
    if(reaction.fail || !isUnhandled(reaction.promise))return false;
  } return true;
};
var onHandleUnhandled = function(promise){
  task.call(global, function(){
    var handler;
    if(isNode){
      process.emit('rejectionHandled', promise);
    } else if(handler = global.onrejectionhandled){
      handler({promise: promise, reason: promise._v});
    }
  });
};
var $reject = function(value){
  var promise = this;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if(!promise._a)promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function(value){
  var promise = this
    , then;
  if(promise._d)return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if(promise === value)throw TypeError("Promise can't be resolved itself");
    if(then = isThenable(value)){
      microtask(function(){
        var wrapper = {_w: promise, _d: false}; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch(e){
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch(e){
    $reject.call({_w: promise, _d: false}, e); // wrap
  }
};

// constructor polyfill
if(!USE_NATIVE){
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor){
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch(err){
      $reject.call(this, err);
    }
  };
  Internal = function Promise(executor){
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(125)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected){
      var reaction    = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok     = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail   = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if(this._a)this._a.push(reaction);
      if(this._s)notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function(onRejected){
      return this.then(undefined, onRejected);
    }
  });
  PromiseCapability = function(){
    var promise  = new Internal;
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject  = ctx($reject, promise, 1);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: $Promise});
__webpack_require__(27)($Promise, PROMISE);
__webpack_require__(127)(PROMISE);
Wrapper = __webpack_require__(3)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r){
    var capability = newPromiseCapability(this)
      , $$reject   = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x){
    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
    if(x instanceof $Promise && sameConstructor(x.constructor, this))return x;
    var capability = newPromiseCapability(this)
      , $$resolve  = capability.resolve;
    $$resolve(x);
    return capability.promise;
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(56)(function(iter){
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , resolve    = capability.resolve
      , reject     = capability.reject;
    var abrupt = perform(function(){
      var values    = []
        , index     = 0
        , remaining = 1;
      forOf(iterable, false, function(promise){
        var $index        = index++
          , alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function(value){
          if(alreadyCalled)return;
          alreadyCalled  = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable){
    var C          = this
      , capability = newPromiseCapability(C)
      , reject     = capability.reject;
    var abrupt = perform(function(){
      forOf(iterable, false, function(promise){
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if(abrupt)reject(abrupt.error);
    return capability.promise;
  }
});

/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(4)
  , has            = __webpack_require__(12)
  , DESCRIPTORS    = __webpack_require__(10)
  , $export        = __webpack_require__(11)
  , redefine       = __webpack_require__(60)
  , META           = __webpack_require__(119).KEY
  , $fails         = __webpack_require__(18)
  , shared         = __webpack_require__(37)
  , setToStringTag = __webpack_require__(27)
  , uid            = __webpack_require__(28)
  , wks            = __webpack_require__(1)
  , wksExt         = __webpack_require__(43)
  , wksDefine      = __webpack_require__(42)
  , keyOf          = __webpack_require__(118)
  , enumKeys       = __webpack_require__(112)
  , isArray        = __webpack_require__(115)
  , anObject       = __webpack_require__(9)
  , toIObject      = __webpack_require__(14)
  , toPrimitive    = __webpack_require__(41)
  , createDesc     = __webpack_require__(21)
  , _create        = __webpack_require__(34)
  , gOPNExt        = __webpack_require__(123)
  , $GOPD          = __webpack_require__(57)
  , $DP            = __webpack_require__(8)
  , $keys          = __webpack_require__(20)
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
  __webpack_require__(58).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(26).f  = $propertyIsEnumerable;
  __webpack_require__(35).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(25)){
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(13)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 139 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42)('asyncIterator');

/***/ }),
/* 140 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(42)('observable');

/***/ }),
/* 141 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 142 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g =
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this;

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(143);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)))

/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
 * additional grant of patent rights can be found in the PATENTS file in
 * the same directory.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    if (typeof process === "object" && process.domain) {
      invoke = process.domain.bind(invoke);
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // Among the various tricks for obtaining a reference to the global
  // object, this seems to be the most reliable technique that does not
  // use indirect eval (which violates Content Security Policy).
  typeof global === "object" ? global :
  typeof window === "object" ? window :
  typeof self === "object" ? self : this
);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29), __webpack_require__(141)))

/***/ }),
/* 144 */
/***/ (function(module, exports, __webpack_require__) {

var v1 = __webpack_require__(145);
var v4 = __webpack_require__(146);

var uuid = v4;
uuid.v1 = v1;
uuid.v4 = v4;

module.exports = uuid;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

// Unique ID creation requires a high quality random # generator.  We feature
// detect to determine the best RNG source, normalizing to a function that
// returns 128-bits of randomness, since that's what's usually required
var rng = __webpack_require__(66);
var bytesToUuid = __webpack_require__(65);

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html

// random #'s we need to init node and clockseq
var _seedBytes = rng();

// Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
var _nodeId = [
  _seedBytes[0] | 0x01,
  _seedBytes[1], _seedBytes[2], _seedBytes[3], _seedBytes[4], _seedBytes[5]
];

// Per 4.2.2, randomize (14 bit) clockseq
var _clockseq = (_seedBytes[6] << 8 | _seedBytes[7]) & 0x3fff;

// Previous uuid creation time
var _lastMSecs = 0, _lastNSecs = 0;

// See https://github.com/broofa/node-uuid for API details
function v1(options, buf, offset) {
  var i = buf && offset || 0;
  var b = buf || [];

  options = options || {};

  var clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq;

  // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.
  var msecs = options.msecs !== undefined ? options.msecs : new Date().getTime();

  // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock
  var nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1;

  // Time since last uuid creation (in msecs)
  var dt = (msecs - _lastMSecs) + (nsecs - _lastNSecs)/10000;

  // Per 4.2.1.2, Bump clockseq on clock regression
  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  }

  // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval
  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  }

  // Per 4.2.1.2 Throw error if too many uuids are requested
  if (nsecs >= 10000) {
    throw new Error('uuid.v1(): Can\'t create more than 10M uuids/sec');
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq;

  // Per 4.1.4 - Convert from unix epoch to Gregorian epoch
  msecs += 12219292800000;

  // `time_low`
  var tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff;

  // `time_mid`
  var tmh = (msecs / 0x100000000 * 10000) & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff;

  // `time_high_and_version`
  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version
  b[i++] = tmh >>> 16 & 0xff;

  // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)
  b[i++] = clockseq >>> 8 | 0x80;

  // `clock_seq_low`
  b[i++] = clockseq & 0xff;

  // `node`
  var node = options.node || _nodeId;
  for (var n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf ? buf : bytesToUuid(b);
}

module.exports = v1;


/***/ }),
/* 146 */
/***/ (function(module, exports, __webpack_require__) {

var rng = __webpack_require__(66);
var bytesToUuid = __webpack_require__(65);

function v4(options, buf, offset) {
  var i = buf && offset || 0;

  if (typeof(options) == 'string') {
    buf = options == 'binary' ? new Array(16) : null;
    options = null;
  }
  options = options || {};

  var rnds = options.random || (options.rng || rng)();

  // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`
  rnds[6] = (rnds[6] & 0x0f) | 0x40;
  rnds[8] = (rnds[8] & 0x3f) | 0x80;

  // Copy bytes to buffer, if provided
  if (buf) {
    for (var ii = 0; ii < 16; ++ii) {
      buf[i + ii] = rnds[ii];
    }
  }

  return buf || bytesToUuid(rnds);
}

module.exports = v4;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var WORKER_ENABLED = !!(global === global.window && global.URL && global.Blob && global.Worker);

function InlineWorker(func, self) {
  var _this = this;
  var functionBody;

  self = self || {};

  if (WORKER_ENABLED) {
    functionBody = func.toString().trim().match(
      /^function\s*\w*\s*\([\w\s,]*\)\s*{([\w\W]*?)}$/
    )[1];

    return new global.Worker(global.URL.createObjectURL(
      new global.Blob([ functionBody ], { type: "text/javascript" })
    ));
  }

  function postMessage(data) {
    setTimeout(function() {
      _this.onmessage({ data: data });
    }, 0);
  }

  this.self = self;
  this.self.postMessage = postMessage;

  setTimeout(func.bind(self, self), 0);
}

InlineWorker.prototype.postMessage = function postMessage(data) {
  var _this = this;

  setTimeout(function() {
    _this.self.onmessage({ data: data });
  }, 0);
};

module.exports = InlineWorker;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(29)))

/***/ })
/******/ ]);
});