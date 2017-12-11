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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 70);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(73);

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

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _EffectUnit = __webpack_require__(53);

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
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var store      = __webpack_require__(31)('wks')
  , uid        = __webpack_require__(21)
  , Symbol     = __webpack_require__(5).Symbol
  , USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function(name){
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 3 */
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
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = {version: '2.4.0'};
if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ }),
/* 5 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var anObject       = __webpack_require__(11)
  , IE8_DOM_DEFINE = __webpack_require__(40)
  , toPrimitive    = __webpack_require__(34)
  , dP             = Object.defineProperty;

exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes){
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
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(13)(function(){
  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global    = __webpack_require__(5)
  , core      = __webpack_require__(4)
  , ctx       = __webpack_require__(23)
  , hide      = __webpack_require__(12)
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
/* 9 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function(it, key){
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(41)
  , defined = __webpack_require__(24);
module.exports = function(it){
  return IObject(defined(it));
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14);
module.exports = function(it){
  if(!isObject(it))throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var dP         = __webpack_require__(6)
  , createDesc = __webpack_require__(17);
module.exports = __webpack_require__(7) ? function(object, key, value){
  return dP.f(object, key, createDesc(1, value));
} : function(object, key, value){
  object[key] = value;
  return object;
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = function(exec){
  try {
    return !!exec();
  } catch(e){
    return true;
  }
};

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = function(it){
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys       = __webpack_require__(45)
  , enumBugKeys = __webpack_require__(25);

module.exports = Object.keys || function keys(O){
  return $keys(O, enumBugKeys);
};

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

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(75);

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
/* 20 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

var id = 0
  , px = Math.random();
module.exports = function(key){
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 22 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function(it){
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(87);
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
/* 24 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function(it){
  if(it == undefined)throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = true;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject    = __webpack_require__(11)
  , dPs         = __webpack_require__(103)
  , enumBugKeys = __webpack_require__(25)
  , IE_PROTO    = __webpack_require__(30)('IE_PROTO')
  , Empty       = function(){ /* empty */ }
  , PROTOTYPE   = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function(){
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(39)('iframe')
    , i      = enumBugKeys.length
    , lt     = '<'
    , gt     = '>'
    , iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(93).appendChild(iframe);
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
/* 28 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(6).f
  , has = __webpack_require__(9)
  , TAG = __webpack_require__(2)('toStringTag');

module.exports = function(it, tag, stat){
  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
};

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(31)('keys')
  , uid    = __webpack_require__(21);
module.exports = function(key){
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(5)
  , SHARED = '__core-js_shared__'
  , store  = global[SHARED] || (global[SHARED] = {});
module.exports = function(key){
  return store[key] || (store[key] = {});
};

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil  = Math.ceil
  , floor = Math.floor;
module.exports = function(it){
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(24);
module.exports = function(it){
  return Object(defined(it));
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(14);
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var global         = __webpack_require__(5)
  , core           = __webpack_require__(4)
  , LIBRARY        = __webpack_require__(26)
  , wksExt         = __webpack_require__(36)
  , defineProperty = __webpack_require__(6).f;
module.exports = function(name){
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if(name.charAt(0) != '_' && !(name in $Symbol))defineProperty($Symbol, name, {value: wksExt.f(name)});
};

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(2);

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isInRange = isInRange;
exports.getWetLevel = getWetLevel;
exports.getDryLevel = getDryLevel;
/* eslint-disable */

var baseEffect = exports.baseEffect = Object.create(null, {

	connect: {
		enumerable: true,

		value: function value(audioNode) {
			this.output.connect(audioNode);
			return this;
		}
	},

	disconnect: {
		enumerable: true,

		value: function value(audioNode) {
			this.output.disconnect(audioNode);
			return this;
		}
	}
});

function isNumber(arg) {
	return toString.call(arg) === '[object Number]' && arg === +arg;
}

function isInRange(arg, min, max) {
	if (!isNumber(arg) || !isNumber(min) || !isNumber(max)) return false;

	return arg >= min && arg <= max;
}

function getWetLevel(mix) {
	if (!isNumber(mix) || mix > 1 || mix < 0) return 0;

	if (mix >= 0.5) return 1;

	return 1 - (0.5 - mix) * 2;
}

function getDryLevel(mix) {
	if (!isNumber(mix) || mix > 1 || mix < 0) return 0;

	if (mix <= 0.5) return 1;

	return 1 - (mix - 0.5) * 2;
}

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _iterator = __webpack_require__(78);

var _iterator2 = _interopRequireDefault(_iterator);

var _symbol = __webpack_require__(77);

var _symbol2 = _interopRequireDefault(_symbol);

var _typeof = typeof _symbol2.default === "function" && typeof _iterator2.default === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = typeof _symbol2.default === "function" && _typeof(_iterator2.default) === "symbol" ? function (obj) {
  return typeof obj === "undefined" ? "undefined" : _typeof(obj);
} : function (obj) {
  return obj && typeof _symbol2.default === "function" && obj.constructor === _symbol2.default && obj !== _symbol2.default.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof(obj);
};

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(14)
  , document = __webpack_require__(5).document
  // in old IE typeof document.createElement is 'object'
  , is = isObject(document) && isObject(document.createElement);
module.exports = function(it){
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(7) && !__webpack_require__(13)(function(){
  return Object.defineProperty(__webpack_require__(39)('div'), 'a', {get: function(){ return 7; }}).a != 7;
});

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(22);
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY        = __webpack_require__(26)
  , $export        = __webpack_require__(8)
  , redefine       = __webpack_require__(46)
  , hide           = __webpack_require__(12)
  , has            = __webpack_require__(9)
  , Iterators      = __webpack_require__(15)
  , $iterCreate    = __webpack_require__(97)
  , setToStringTag = __webpack_require__(29)
  , getPrototypeOf = __webpack_require__(105)
  , ITERATOR       = __webpack_require__(2)('iterator')
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
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var pIE            = __webpack_require__(20)
  , createDesc     = __webpack_require__(17)
  , toIObject      = __webpack_require__(10)
  , toPrimitive    = __webpack_require__(34)
  , has            = __webpack_require__(9)
  , IE8_DOM_DEFINE = __webpack_require__(40)
  , gOPD           = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(7) ? gOPD : function getOwnPropertyDescriptor(O, P){
  O = toIObject(O);
  P = toPrimitive(P, true);
  if(IE8_DOM_DEFINE)try {
    return gOPD(O, P);
  } catch(e){ /* empty */ }
  if(has(O, P))return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys      = __webpack_require__(45)
  , hiddenKeys = __webpack_require__(25).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O){
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var has          = __webpack_require__(9)
  , toIObject    = __webpack_require__(10)
  , arrayIndexOf = __webpack_require__(89)(false)
  , IE_PROTO     = __webpack_require__(30)('IE_PROTO');

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
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(12);

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(32)
  , min       = Math.min;
module.exports = function(it){
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at  = __webpack_require__(107)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(42)(String, 'String', function(iterated){
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
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _toConsumableArray2 = __webpack_require__(79);

var _toConsumableArray3 = _interopRequireDefault(_toConsumableArray2);

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _webaudioEffectUnitsCollection = __webpack_require__(69);

var _webaudioEffectUnitsCollection2 = _interopRequireDefault(_webaudioEffectUnitsCollection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chnl = function () {
  function Chnl(audioCtx) {
    (0, _classCallCheck3.default)(this, Chnl);
    this.isChnl = true;
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
        if (nextNode.isEffectUnit) _currNode.connect(nextNode.input);else _currNode.connect(nextNode);
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
      if (node.isChnl) this.output.connect(node.input);else this.output.connect(node);
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
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _recorder = __webpack_require__(71);

var _recorder2 = _interopRequireDefault(_recorder);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _recorder2.default;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setPrototypeOf = __webpack_require__(76);

var _setPrototypeOf2 = _interopRequireDefault(_setPrototypeOf);

var _create = __webpack_require__(74);

var _create2 = _interopRequireDefault(_create);

var _typeof2 = __webpack_require__(38);

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
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _typeof2 = __webpack_require__(38);

var _typeof3 = _interopRequireDefault(_typeof2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && ((typeof call === "undefined" ? "undefined" : (0, _typeof3.default)(call)) === "object" || typeof call === "function") ? call : self;
};

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _util = __webpack_require__(54);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EffectUnit = function () {
  function EffectUnit() {
    var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { name: '', effectChain: {}, values: [] };
    var audioCtx = arguments[1];
    (0, _classCallCheck3.default)(this, EffectUnit);
    this.isEffectUnit = true;
    this.wasInitialized = false;

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
    this.options = options;

    this.effectGain = this.audioCtx.createGain(); // Set to 1 ==> Effect is on; Set to 0 ==> Effect is off
    this.directGain = this.audioCtx.createGain(); // Set to 0 ==> Effect is on; Set to 1 ==> Effect is off

    this.output = this.audioCtx.createGain();
    this.input = this.audioCtx.createGain();

    this.input.connect(this.effectGain);
    this.input.connect(this.directGain);

    // Connect direct gain to ouput
    this.directGain.connect(this.output);
  }

  (0, _createClass3.default)(EffectUnit, [{
    key: 'init',
    value: function init() {
      if (this.wasInitialized) return;

      this.effectChain = (0, _util.functionsToValues)(this.options.effectChain);

      // Give all 'set'-methods of the specified values the effectChain as the first parameter
      this.values = (0, _util.bindMethodsToValues)(this.options.values, this.effectChain);

      // Now execute all 'set'-methods of the according values which have a 'defaultValue'-field in their 'options'-object
      this.values.forEach(function (value) {
        if (value.options.defaultValue) value.set(value.options.defaultValue);
      });

      this.setupEffectChain();
      this.wasInitialized = true;
    }
  }, {
    key: 'enable',
    value: function enable() {
      this.init();
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
      if (node.isEffectUnit || node.input) this.output.connect(node.input);else {
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
      // Connect the effectChain
      var effects = (0, _util.objToArray)(this.effectChain);

      // Effect chain not empty?
      if (effects.length >= 1) {
        // Connect effect gain to first effect
        EffectUnit.connectNodes(this.effectGain, effects[0]);
        // Connect all other effect to the following effect
        for (var i = 0; i < effects.length - 1; i++) {
          EffectUnit.connectNodes(effects[i], effects[i + 1]);
        } // Connect the last effect to the output gain
        effects[effects.length - 1].connect(this.output);
      }
    }
  }, {
    key: 'disconnect',
    value: function disconnect() {
      // Disconnect all outgoing connections
      this.output.disconnect();
    }
  }], [{
    key: 'connectNodes',
    value: function connectNodes(nodeA, nodeB) {
      if (nodeB.isEffectUnit || nodeB.input) nodeA.connect(nodeB.input);else nodeA.connect(nodeB);
    }
  }]);
  return EffectUnit;
}();

exports.default = EffectUnit;

/***/ }),
/* 54 */
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
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.bitcrusherData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createBitcrusher;

var _webaudioEffectUnit = __webpack_require__(1);

var _webaudioEffectUnit2 = _interopRequireDefault(_webaudioEffectUnit);

var _tunajs = __webpack_require__(3);

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
      bitcrusher: function bitcrusher() {
        return new tuna.Bitcrusher({
          bits: 4, // 1 to 16
          normfreq: 0.1, // 0 to 1
          bufferSize: 4096 // 256 to 16384, NOT INCLUDED AS EDITABLE!
        });
      }
    }
  }), audioCtx);
}

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.chorusData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createChorus;

var _webaudioEffectUnit = __webpack_require__(1);

var _webaudioEffectUnit2 = _interopRequireDefault(_webaudioEffectUnit);

var _tunajs = __webpack_require__(3);

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
      chorus: function chorus() {
        return new tuna.Chorus({
          rate: DEFAULT_RATE, // 0.01 - 8
          feedback: DEFAULT_FEEDBACK, // 0 - 1
          delay: DEFAULT_DELAY // 0 - 1
        });
      }
    }
  }), audioCtx);
}

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compressorData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createCompressor;

var _webaudioEffectUnit = __webpack_require__(1);

var _webaudioEffectUnit2 = _interopRequireDefault(_webaudioEffectUnit);

var _tunajs = __webpack_require__(3);

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
      compressor: function compressor() {
        return new tuna.Compressor({
          threshold: DEFAULT_THRESHOLD, // -100 to 0
          makeupGain: DEFAULT_MAKEUPGAIN, // 0 and up
          attack: DEFAULT_ATTACK, // 0 to 1000
          release: DEFAULT_RELEASE, // 0 to 3000
          ratio: DEFAULT_RATIO, // 1 to 20
          knee: DEFAULT_KNEE, // 0 to 40
          automakeup: DEFAULT_AUTOMAKEUP // true/false
        });
      }
    }
  }), audioCtx);
}

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.delayData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createDelay;

var _webaudioEffectUnit = __webpack_require__(1);

var _webaudioEffectUnit2 = _interopRequireDefault(_webaudioEffectUnit);

var _tunajs = __webpack_require__(3);

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
      delay: function delay() {
        return new tuna.Delay({
          feedback: DEFAULT_FEEDBACK, // 0 to 1+
          delayTime: DEFAULT_DELAYTIME, // 1 to 10000 milliseconds
          wetLevel: DEFAULT_WETLEVEL, // 0 to 1+
          dryLevel: DEFAULT_DRYLEVEL, // 0 to 1+
          cutoff: DEFAULT_CUTOFF // cutoff frequency of the built in lowpass-filter. 20 to 22050
        });
      }
    }
  }), audioCtx);
}

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.dubDelayData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createDubDelay;

var _pizzicato = __webpack_require__(37);

var _webaudioEffectUnit = __webpack_require__(1);

var _webaudioEffectUnit2 = _interopRequireDefault(_webaudioEffectUnit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */

var DubDelay = function DubDelay(audioCtx, options) {

	this.options = {};
	options = options || this.options;

	var defaults = {
		feedback: 0.6,
		time: 0.7,
		mix: 0.5,
		cutoff: 700
	};

	this.input = audioCtx.createGain();
	this.output = audioCtx.createGain();
	this.dryGainNode = audioCtx.createGain();
	this.wetGainNode = audioCtx.createGain();
	this.feedbackGainNode = audioCtx.createGain();
	this.delayNode = audioCtx.createDelay();
	this.bqFilterNode = audioCtx.createBiquadFilter();

	// dry mix
	this.input.connect(this.dryGainNode);
	this.dryGainNode.connect(this.output);

	// wet mix
	this.input.connect(this.wetGainNode);
	this.input.connect(this.feedbackGainNode);

	this.feedbackGainNode.connect(this.bqFilterNode);
	this.bqFilterNode.connect(this.delayNode);
	this.delayNode.connect(this.feedbackGainNode);
	this.delayNode.connect(this.wetGainNode);

	this.wetGainNode.connect(this.output);

	for (var key in defaults) {
		this[key] = options[key];
		this[key] = this[key] === undefined || this[key] === null ? defaults[key] : this[key];
	}
};

DubDelay.prototype = Object.create(_pizzicato.baseEffect, {

	/**
  * Gets and sets the dry/wet mix.
  */
	mix: {
		enumerable: true,

		get: function get() {
			return this.options.mix;
		},

		set: function set(mix) {
			if (!(0, _pizzicato.isInRange)(mix, 0, 1)) return;

			this.options.mix = mix;
			this.dryGainNode.gain.value = (0, _pizzicato.getDryLevel)(this.mix);
			this.wetGainNode.gain.value = (0, _pizzicato.getWetLevel)(this.mix);
		}
	},

	/**
  * Time between each delayed sound
  */
	time: {
		enumerable: true,

		get: function get() {
			return this.options.time;
		},

		set: function set(time) {
			if (!(0, _pizzicato.isInRange)(time, 0, 180)) return;

			this.options.time = time;
			this.delayNode.delayTime.value = time;
		}
	},

	/**
  * Strength of each of the echoed delayed sounds.
  */
	feedback: {
		enumerable: true,

		get: function get() {
			return this.options.feedback;
		},

		set: function set(feedback) {
			if (!(0, _pizzicato.isInRange)(feedback, 0, 1)) return;

			this.options.feedback = parseFloat(feedback, 10);
			this.feedbackGainNode.gain.value = this.feedback;
		}
	},

	/**
  * Frequency on delay repeats
  */
	cutoff: {
		enumerable: true,

		get: function get() {
			return this.options.cutoff;
		},

		set: function set(cutoff) {
			if (!(0, _pizzicato.isInRange)(cutoff, 0, 4000)) return;

			this.options.cutoff = cutoff;
			this.bqFilterNode.frequency.value = this.cutoff;
		}
	}

});

var dubDelayData = exports.dubDelayData = {
	name: 'dubDelay',
	values: [{
		name: 'mix',
		options: {
			type: 'range',
			defaultValue: 0.5,
			min: 0,
			max: 1,
			step: 0.01
		},
		set: function set(effectChain, value) {
			effectChain.dubDelay.mix = value;
		}
	}, {
		name: 'feedback',
		options: {
			type: 'range',
			defaultValue: 0.6,
			min: 0,
			max: 1,
			step: 0.01
		},
		set: function set(effectChain, value) {
			effectChain.dubDelay.feedback = value;
		}
	}, {
		name: 'time',
		options: {
			type: 'range',
			defaultValue: 0.7,
			min: 0,
			max: 180,
			step: 0.01
		},
		set: function set(effectChain, value) {
			effectChain.dubDelay.time = value;
		}
	}, {
		name: 'cutoff',
		options: {
			type: 'range',
			defaultValue: 700,
			min: 0,
			max: 4000,
			step: 100
		},
		set: function set(effectChain, value) {
			effectChain.dubDelay.cutoff = value;
		}
	}]
};

function createDubDelay(audioCtx) {
	return new _webaudioEffectUnit2.default((0, _extends3.default)({}, dubDelayData, {
		effectChain: {
			dubDelay: function dubDelay() {
				return new DubDelay(audioCtx);
			}
		}
	}), audioCtx);
}

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.gainData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createGain;

var _webaudioEffectUnit = __webpack_require__(1);

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
  var gainNode = new _webaudioEffectUnit2.default((0, _extends3.default)({}, gainData, {
    effectChain: {
      gain: function createGainNode() {
        return audioCtx.createGain();
      }
    }
  }), audioCtx);

  gainNode.enable();

  return gainNode;
}

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.highpassData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createLowpass;

var _webaudioEffectUnit = __webpack_require__(1);

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
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.lowpassData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createLowpass;

var _webaudioEffectUnit = __webpack_require__(1);

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
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.moogData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createMoog;

var _webaudioEffectUnit = __webpack_require__(1);

var _webaudioEffectUnit2 = _interopRequireDefault(_webaudioEffectUnit);

var _tunajs = __webpack_require__(3);

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
      moog: function moog() {
        return new tuna.MoogFilter({
          cutoff: 0.065, // 0 to 1
          resonance: 3.5, // 0 to 4
          bufferSize: 4096 // 256 to 16384, NOT INCLUDED AS EDITABLE!
        });
      }
    }
  }), audioCtx);
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.phaserData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createPhaser;

var _webaudioEffectUnit = __webpack_require__(1);

var _webaudioEffectUnit2 = _interopRequireDefault(_webaudioEffectUnit);

var _tunajs = __webpack_require__(3);

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
      phaser: function phaser() {
        return new tuna.Phaser({
          rate: 1.2, // 0.01 to 8 is a decent range, but higher values are possible
          depth: 0.3, // 0 to 1
          feedback: 0.2, // 0 to 1+
          stereoPhase: 30, // 0 to 180
          baseModulationFrequency: 700 // 500 to 1500
        });
      }
    }
  }), audioCtx);
}

/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.pingPongDelayData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createPingPongDelay;

var _webaudioEffectUnit = __webpack_require__(1);

var _webaudioEffectUnit2 = _interopRequireDefault(_webaudioEffectUnit);

var _tunajs = __webpack_require__(3);

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
      pingpong: function pingpong() {
        return new tuna.PingPongDelay({
          wetLevel: 0.5, // 0 to 1
          feedback: 0.3, // 0 to 1
          delayTimeLeft: 150, // 1 to 10000 (milliseconds)
          delayTimeRight: 200 // 1 to 10000 (milliseconds)
        });
      }
    }
  }), audioCtx);
}

/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.reverbData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createReverbDelay;

var _pizzicato = __webpack_require__(37);

var _webaudioEffectUnit = __webpack_require__(1);

var _webaudioEffectUnit2 = _interopRequireDefault(_webaudioEffectUnit);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable */

var audioCtx = void 0;

var Reverb = function Reverb(audioCtxA, options) {
	var self = this;
	audioCtx = audioCtxA;

	this.options = {};
	options = options || this.options;

	var defaults = {
		mix: 0.5,
		time: 0.01,
		decay: 0.01,
		reverse: false
	};

	this.input = audioCtx.createGain();
	this.reverbNode = audioCtx.createConvolver();
	this.output = audioCtx.createGain();
	this.wetGainNode = audioCtx.createGain();
	this.dryGainNode = audioCtx.createGain();

	this.input.connect(this.reverbNode);
	this.reverbNode.connect(this.wetGainNode);
	this.input.connect(this.dryGainNode);
	this.dryGainNode.connect(this.output);
	this.wetGainNode.connect(this.output);

	for (var key in defaults) {
		this[key] = options[key];
		this[key] = this[key] === undefined || this[key] === null ? defaults[key] : this[key];
	}

	buildImpulse.bind(this)();
};

Reverb.prototype = Object.create(_pizzicato.baseEffect, {

	mix: {
		enumerable: true,

		get: function get() {
			return this.options.mix;
		},

		set: function set(mix) {
			if (!(0, _pizzicato.isInRange)(mix, 0, 1)) return;

			this.options.mix = mix;
			this.dryGainNode.gain.value = (0, _pizzicato.getDryLevel)(this.mix);
			this.wetGainNode.gain.value = (0, _pizzicato.getWetLevel)(this.mix);
		}
	},

	time: {
		enumerable: true,

		get: function get() {
			return this.options.time;
		},

		set: function set(time) {
			if (!(0, _pizzicato.isInRange)(time, 0.0001, 10)) return;

			this.options.time = time;
			buildImpulse.bind(this)();
		}
	},

	decay: {
		enumerable: true,

		get: function get() {
			return this.options.decay;
		},

		set: function set(decay) {
			if (!(0, _pizzicato.isInRange)(decay, 0.0001, 10)) return;

			this.options.decay = decay;
			buildImpulse.bind(this)();
		}

	},

	reverse: {
		enumerable: true,

		get: function get() {
			return this.options.reverse;
		},

		set: function set(reverse) {
			this.options.reverse = reverse;
			buildImpulse.bind(this)();
		}
	}

});

function buildImpulse() {

	var length = audioCtx.sampleRate * this.time;
	var impulse = audioCtx.createBuffer(2, length, audioCtx.sampleRate);
	var impulseL = impulse.getChannelData(0);
	var impulseR = impulse.getChannelData(1);
	var n, i;

	for (i = 0; i < length; i++) {
		n = this.reverse ? length - i : i;
		impulseL[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, this.decay);
		impulseR[i] = (Math.random() * 2 - 1) * Math.pow(1 - n / length, this.decay);
	}

	this.reverbNode.buffer = impulse;
}

var reverbData = exports.reverbData = {
	name: 'reverb',
	values: [{
		name: 'mix',
		options: {
			type: 'range',
			defaultValue: 0.5,
			min: 0,
			max: 1,
			step: 0.01
		},
		set: function set(effectChain, value) {
			effectChain.reverb.mix = value;
		}
	}, {
		name: 'time',
		options: {
			type: 'range',
			defaultValue: 5,
			min: 0.0001,
			max: 10,
			step: 0.001
		},
		set: function set(effectChain, value) {
			effectChain.reverb.time = value;
		}
	}, {
		name: 'decay',
		options: {
			type: 'range',
			defaultValue: 3,
			min: 0.0001,
			max: 10,
			step: 0.001
		},
		set: function set(effectChain, value) {
			effectChain.reverb.decay = value;
		}
	}, {
		name: 'reverse',
		options: {
			type: 'switch',
			defaultValue: false
		},
		set: function set(effectChain, value) {
			effectChain.reverse.reverse = value;
		}
	}]
};

function createReverbDelay(audioCtx) {
	return new _webaudioEffectUnit2.default((0, _extends3.default)({}, reverbData, {
		effectChain: {
			reverb: function reverb() {
				return new Reverb(audioCtx);
			}
		}
	}), audioCtx);
}

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.tremoloData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createTremolo;

var _webaudioEffectUnit = __webpack_require__(1);

var _webaudioEffectUnit2 = _interopRequireDefault(_webaudioEffectUnit);

var _tunajs = __webpack_require__(3);

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
      min: 0.0001,
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
      tremolo: function tremolo() {
        return new tuna.Tremolo({
          intensity: DEFAULT_INTENSITY, // 0 to 1
          rate: DEFAULT_RATE, // 0.001 to 8
          stereoPhase: DEFAULT_STEREOPHASE // 0 to 180
        });
      }
    }
  }), audioCtx);
}

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wahWahData = undefined;

var _extends2 = __webpack_require__(0);

var _extends3 = _interopRequireDefault(_extends2);

exports.default = createWahWah;

var _webaudioEffectUnit = __webpack_require__(1);

var _webaudioEffectUnit2 = _interopRequireDefault(_webaudioEffectUnit);

var _tunajs = __webpack_require__(3);

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
      wahwah: function wahwah() {
        return new tuna.WahWah({
          automode: DEFAULT_AUTOMODE, // true/false
          baseFrequency: DEFAULT_BASEFREQUENCY, // 0 to 1
          excursionOctaves: DEFAULT_EXCURSIONOCTAVES, // 1 to 6
          sweep: DEFAULT_SWEEP, // 0 to 1
          resonance: DEFAULT_RESONANCE, // 1 to 100
          sensitivity: DEFAULT_SENSITIVITY // -1 to 1
        });
      }
    }
  }), audioCtx);
}

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.EFFECT_DATA = undefined;
exports.default = createEffectCollection;

var _tunajs = __webpack_require__(3);

var _tunajs2 = _interopRequireDefault(_tunajs);

var _chorus = __webpack_require__(56);

var _chorus2 = _interopRequireDefault(_chorus);

var _delay = __webpack_require__(58);

var _delay2 = _interopRequireDefault(_delay);

var _phaser = __webpack_require__(64);

var _phaser2 = _interopRequireDefault(_phaser);

var _compressor = __webpack_require__(57);

var _compressor2 = _interopRequireDefault(_compressor);

var _tremolo = __webpack_require__(67);

var _tremolo2 = _interopRequireDefault(_tremolo);

var _wahwah = __webpack_require__(68);

var _wahwah2 = _interopRequireDefault(_wahwah);

var _bitcrusher = __webpack_require__(55);

var _bitcrusher2 = _interopRequireDefault(_bitcrusher);

var _moog = __webpack_require__(63);

var _moog2 = _interopRequireDefault(_moog);

var _pingPongDelay = __webpack_require__(65);

var _pingPongDelay2 = _interopRequireDefault(_pingPongDelay);

var _gain = __webpack_require__(60);

var _gain2 = _interopRequireDefault(_gain);

var _lowpass = __webpack_require__(62);

var _lowpass2 = _interopRequireDefault(_lowpass);

var _highpass = __webpack_require__(61);

var _highpass2 = _interopRequireDefault(_highpass);

var _dubDelay = __webpack_require__(59);

var _dubDelay2 = _interopRequireDefault(_dubDelay);

var _reverb = __webpack_require__(66);

var _reverb2 = _interopRequireDefault(_reverb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var EFFECT_DATA = exports.EFFECT_DATA = [_gain.gainData, _highpass.highpassData, _lowpass.lowpassData, _dubDelay.dubDelayData, _reverb.reverbData, _chorus.chorusData, _delay.delayData, _phaser.phaserData, _compressor.compressorData, _tremolo.tremoloData, _wahwah.wahWahData, _bitcrusher.bitcrusherData, _moog.moogData, _pingPongDelay.pingPongDelayData];

function createEffectCollection(audioCtx) {
  var tuna = new _tunajs2.default(audioCtx);

  return {
    gain: (0, _gain2.default)(audioCtx),
    lowpass: (0, _lowpass2.default)(audioCtx),
    highpass: (0, _highpass2.default)(audioCtx),
    dubDelay: (0, _dubDelay2.default)(audioCtx),
    reverb: (0, _reverb2.default)(audioCtx),
    chorus: (0, _chorus2.default)(audioCtx, tuna),
    delay: (0, _delay2.default)(audioCtx, tuna),
    phaser: (0, _phaser2.default)(audioCtx, tuna),
    compressor: (0, _compressor2.default)(audioCtx, tuna),
    tremolo: (0, _tremolo2.default)(audioCtx, tuna),
    wahwah: (0, _wahwah2.default)(audioCtx, tuna),
    bitcrusher: (0, _bitcrusher2.default)(audioCtx, tuna),
    moog: (0, _moog2.default)(audioCtx, tuna),
    pingPongDelay: (0, _pingPongDelay2.default)(audioCtx, tuna)
  };
}

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = __webpack_require__(52);

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = __webpack_require__(51);

var _inherits3 = _interopRequireDefault(_inherits2);

var _webaudioChnl = __webpack_require__(49);

var _webaudioChnl2 = _interopRequireDefault(_webaudioChnl);

var _wrecorder = __webpack_require__(50);

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
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Recorder = undefined;

var _classCallCheck2 = __webpack_require__(18);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(19);

var _createClass3 = _interopRequireDefault(_createClass2);

var _inlineWorker = __webpack_require__(122);

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
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(80), __esModule: true };

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(81), __esModule: true };

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(82), __esModule: true };

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(83), __esModule: true };

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(84), __esModule: true };

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(85), __esModule: true };

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(86), __esModule: true };

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _from = __webpack_require__(72);

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
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
__webpack_require__(110);
module.exports = __webpack_require__(4).Array.from;

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(112);
module.exports = __webpack_require__(4).Object.assign;

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(113);
var $Object = __webpack_require__(4).Object;
module.exports = function create(P, D){
  return $Object.create(P, D);
};

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(114);
var $Object = __webpack_require__(4).Object;
module.exports = function defineProperty(it, key, desc){
  return $Object.defineProperty(it, key, desc);
};

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(115);
module.exports = __webpack_require__(4).Object.setPrototypeOf;

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(117);
__webpack_require__(116);
__webpack_require__(118);
__webpack_require__(119);
module.exports = __webpack_require__(4).Symbol;

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(48);
__webpack_require__(120);
module.exports = __webpack_require__(36).f('iterator');

/***/ }),
/* 87 */
/***/ (function(module, exports) {

module.exports = function(it){
  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 88 */
/***/ (function(module, exports) {

module.exports = function(){ /* empty */ };

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(10)
  , toLength  = __webpack_require__(47)
  , toIndex   = __webpack_require__(108);
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
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(22)
  , TAG = __webpack_require__(2)('toStringTag')
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
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $defineProperty = __webpack_require__(6)
  , createDesc      = __webpack_require__(17);

module.exports = function(object, index, value){
  if(index in object)$defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(16)
  , gOPS    = __webpack_require__(28)
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
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(5).document && document.documentElement;

/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators  = __webpack_require__(15)
  , ITERATOR   = __webpack_require__(2)('iterator')
  , ArrayProto = Array.prototype;

module.exports = function(it){
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(22);
module.exports = Array.isArray || function isArray(arg){
  return cof(arg) == 'Array';
};

/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(11);
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
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create         = __webpack_require__(27)
  , descriptor     = __webpack_require__(17)
  , setToStringTag = __webpack_require__(29)
  , IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(12)(IteratorPrototype, __webpack_require__(2)('iterator'), function(){ return this; });

module.exports = function(Constructor, NAME, next){
  Constructor.prototype = create(IteratorPrototype, {next: descriptor(1, next)});
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR     = __webpack_require__(2)('iterator')
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
/* 99 */
/***/ (function(module, exports) {

module.exports = function(done, value){
  return {value: value, done: !!done};
};

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var getKeys   = __webpack_require__(16)
  , toIObject = __webpack_require__(10);
module.exports = function(object, el){
  var O      = toIObject(object)
    , keys   = getKeys(O)
    , length = keys.length
    , index  = 0
    , key;
  while(length > index)if(O[key = keys[index++]] === el)return key;
};

/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var META     = __webpack_require__(21)('meta')
  , isObject = __webpack_require__(14)
  , has      = __webpack_require__(9)
  , setDesc  = __webpack_require__(6).f
  , id       = 0;
var isExtensible = Object.isExtensible || function(){
  return true;
};
var FREEZE = !__webpack_require__(13)(function(){
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
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys  = __webpack_require__(16)
  , gOPS     = __webpack_require__(28)
  , pIE      = __webpack_require__(20)
  , toObject = __webpack_require__(33)
  , IObject  = __webpack_require__(41)
  , $assign  = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(13)(function(){
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
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var dP       = __webpack_require__(6)
  , anObject = __webpack_require__(11)
  , getKeys  = __webpack_require__(16);

module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties){
  anObject(O);
  var keys   = getKeys(Properties)
    , length = keys.length
    , i = 0
    , P;
  while(length > i)dP.f(O, P = keys[i++], Properties[P]);
  return O;
};

/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(10)
  , gOPN      = __webpack_require__(44).f
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
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has         = __webpack_require__(9)
  , toObject    = __webpack_require__(33)
  , IE_PROTO    = __webpack_require__(30)('IE_PROTO')
  , ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function(O){
  O = toObject(O);
  if(has(O, IE_PROTO))return O[IE_PROTO];
  if(typeof O.constructor == 'function' && O instanceof O.constructor){
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(14)
  , anObject = __webpack_require__(11);
var check = function(O, proto){
  anObject(O);
  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function(test, buggy, set){
      try {
        set = __webpack_require__(23)(Function.call, __webpack_require__(43).f(Object.prototype, '__proto__').set, 2);
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
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32)
  , defined   = __webpack_require__(24);
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
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(32)
  , max       = Math.max
  , min       = Math.min;
module.exports = function(index, length){
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var classof   = __webpack_require__(90)
  , ITERATOR  = __webpack_require__(2)('iterator')
  , Iterators = __webpack_require__(15);
module.exports = __webpack_require__(4).getIteratorMethod = function(it){
  if(it != undefined)return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var ctx            = __webpack_require__(23)
  , $export        = __webpack_require__(8)
  , toObject       = __webpack_require__(33)
  , call           = __webpack_require__(96)
  , isArrayIter    = __webpack_require__(94)
  , toLength       = __webpack_require__(47)
  , createProperty = __webpack_require__(91)
  , getIterFn      = __webpack_require__(109);

$export($export.S + $export.F * !__webpack_require__(98)(function(iter){ Array.from(iter); }), 'Array', {
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
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(88)
  , step             = __webpack_require__(99)
  , Iterators        = __webpack_require__(15)
  , toIObject        = __webpack_require__(10);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(42)(Array, 'Array', function(iterated, kind){
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
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(8);

$export($export.S + $export.F, 'Object', {assign: __webpack_require__(102)});

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8)
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', {create: __webpack_require__(27)});

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(8);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', {defineProperty: __webpack_require__(6).f});

/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(8);
$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(106).set});

/***/ }),
/* 116 */
/***/ (function(module, exports) {



/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// ECMAScript 6 symbols shim
var global         = __webpack_require__(5)
  , has            = __webpack_require__(9)
  , DESCRIPTORS    = __webpack_require__(7)
  , $export        = __webpack_require__(8)
  , redefine       = __webpack_require__(46)
  , META           = __webpack_require__(101).KEY
  , $fails         = __webpack_require__(13)
  , shared         = __webpack_require__(31)
  , setToStringTag = __webpack_require__(29)
  , uid            = __webpack_require__(21)
  , wks            = __webpack_require__(2)
  , wksExt         = __webpack_require__(36)
  , wksDefine      = __webpack_require__(35)
  , keyOf          = __webpack_require__(100)
  , enumKeys       = __webpack_require__(92)
  , isArray        = __webpack_require__(95)
  , anObject       = __webpack_require__(11)
  , toIObject      = __webpack_require__(10)
  , toPrimitive    = __webpack_require__(34)
  , createDesc     = __webpack_require__(17)
  , _create        = __webpack_require__(27)
  , gOPNExt        = __webpack_require__(104)
  , $GOPD          = __webpack_require__(43)
  , $DP            = __webpack_require__(6)
  , $keys          = __webpack_require__(16)
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
  __webpack_require__(44).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(20).f  = $propertyIsEnumerable;
  __webpack_require__(28).f = $getOwnPropertySymbols;

  if(DESCRIPTORS && !__webpack_require__(26)){
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
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(12)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(35)('asyncIterator');

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(35)('observable');

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(111);
var global        = __webpack_require__(5)
  , hide          = __webpack_require__(12)
  , Iterators     = __webpack_require__(15)
  , TO_STRING_TAG = __webpack_require__(2)('toStringTag');

for(var collections = ['NodeList', 'DOMTokenList', 'MediaList', 'StyleSheetList', 'CSSRuleList'], i = 0; i < 5; i++){
  var NAME       = collections[i]
    , Collection = global[NAME]
    , proto      = Collection && Collection.prototype;
  if(proto && !proto[TO_STRING_TAG])hide(proto, TO_STRING_TAG, NAME);
  Iterators[NAME] = Iterators.Array;
}

/***/ }),
/* 121 */
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
/* 122 */
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

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(121)))

/***/ })
/******/ ]);
});