import { baseEffect, isNumber, isInRange, getWetLevel, getDryLevel } from './pizzicato';
import EffectUnit from 'webaudio-effect-unit';

let audioCtx;

const Reverb = function(audioCtxA, options) {
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
		this[key] = (this[key] === undefined || this[key] === null) ? defaults[key] : this[key];
	}

	(buildImpulse.bind(this))();
};

Reverb.prototype = Object.create(baseEffect, {

	mix: {
		enumerable: true,

		get: function() {
			return this.options.mix;
		},

		set: function (mix) {
			if (!isInRange(mix, 0, 1))
				return;

			this.options.mix = mix;
			this.dryGainNode.gain.value = getDryLevel(this.mix);
			this.wetGainNode.gain.value = getWetLevel(this.mix);
		}
	},

	time: {
		enumerable: true,

		get: function () {
			return this.options.time;
		},

		set: function (time) {
			if (!isInRange(time, 0.0001, 10))
				return;

			this.options.time = time;
			(buildImpulse.bind(this))();
		}
	},

	decay: {
		enumerable: true,

		get: function () {
			return this.options.decay;
		},

		set: function (decay) {
			if (!isInRange(decay, 0.0001, 10))
				return;

			this.options.decay = decay;
			(buildImpulse.bind(this))();
		}

	},

	reverse: {
		enumerable: true,

		get: function () {
			return this.options.reverse;
		},

		set: function (reverse) {
			this.options.reverse = reverse;
			(buildImpulse.bind(this))();
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

export const reverbData = {
  name: `reverb`,
  values: [

    {
      name: `mix`,
      options: {
        type: `range`,
        defaultValue: 0.5,
        min: 0,
        max: 1,
        step: 0.01
      },
      set: (effectChain, value) => {
        effectChain.reverb.mix = value;
      }
    },

    {
      name: `time`,
      options: {
        type: `range`,
        defaultValue: 5,
        min: 0.0001,
        max: 10,
        step: 0.001
      },
      set: (effectChain, value) => {
        effectChain.reverb.time = value;
      }
    },

    {
      name: `decay`,
      options: {
        type: `range`,
        defaultValue: 3,
        min: 0.0001,
        max: 10,
        step: 0.001
      },
      set: (effectChain, value) => {
        effectChain.reverb.decay = value;
      }
    },

    {
      name: `reverse`,
      options: {
        type: `switch`,
        defaultValue: false
      },
      set: (effectChain, value) => {
        effectChain.reverse.reverse = value;
      }
    }

  ]
};

export default function createReverbDelay(audioCtx) {
  return new EffectUnit({
    ...reverbData,
    effectChain: {
      reverb: () => new Reverb(audioCtx)
    }
  }, audioCtx);
}
