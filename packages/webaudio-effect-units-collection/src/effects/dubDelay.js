import { baseEffect, isNumber, isInRange, getWetLevel, getDryLevel } from './pizzicato';
import EffectUnit from 'webaudio-effect-unit';

let DubDelay = function(audioCtx, options) {

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
		this[key] = (this[key] === undefined || this[key] === null) ? defaults[key] : this[key];
	}
};

DubDelay.prototype = Object.create(baseEffect, {

	/**
	 * Gets and sets the dry/wet mix.
	 */
	mix: {
		enumerable: true,

		get: function() {
			return this.options.mix	;
		},

		set: function(mix) {
			if (!isInRange(mix, 0, 1))
				return;

			this.options.mix = mix;
			this.dryGainNode.gain.value = getDryLevel(this.mix);
			this.wetGainNode.gain.value = getWetLevel(this.mix);
		}
	},

	/**
	 * Time between each delayed sound
	 */
	time: {
		enumerable: true,

		get: function() {
			return this.options.time;
		},

		set: function(time) {
			if (!isInRange(time, 0, 180))
				return;

			this.options.time = time;
			this.delayNode.delayTime.value = time;
		}
	},

	/**
	 * Strength of each of the echoed delayed sounds.
	 */
	feedback: {
		enumerable: true,

		get: function() {
			return this.options.feedback;
		},

		set: function(feedback) {
			if (!isInRange(feedback, 0, 1))
				return;

			this.options.feedback = parseFloat(feedback, 10);
			this.feedbackGainNode.gain.value = this.feedback;
		}
	},

	/**
	 * Frequency on delay repeats
	 */
	cutoff: {
		enumerable: true,

		get: function() {
			return this.options.cutoff;
		},

		set: function(cutoff) {
			if (!isInRange(cutoff, 0, 4000))
				return;

			this.options.cutoff = cutoff;
			this.bqFilterNode.frequency.value = this.cutoff;
		}
	}

});

export const dubDelayData = {
  name: `dubDelay`,
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
        effectChain.dubDelay.mix = value;
      }
    },

    {
      name: `feedback`,
      options: {
        type: `range`,
        defaultValue: 0.6,
        min: 0,
        max: 1,
        step: 0.01
      },
      set: (effectChain, value) => {
        effectChain.dubDelay.feedback = value;
      }
    },

    {
      name: `time`,
      options: {
        type: `range`,
        defaultValue: 0.7,
        min: 0,
        max: 180,
        step: 0.01
      },
      set: (effectChain, value) => {
        effectChain.dubDelay.time = value;
      }
    },

    {
      name: `cutoff`,
      options: {
        type: `range`,
        defaultValue: 700,
        min: 0,
        max: 4000,
        step: 100
      },
      set: (effectChain, value) => {
        effectChain.dubDelay.cutoff = value;
      }
    }

  ]
};

export default function createDubDelay(audioCtx) {
  return new EffectUnit({
    ...dubDelayData,
    effectChain: {
      dubDelay: () => new DubDelay(audioCtx)
    }
  }, audioCtx);
}
