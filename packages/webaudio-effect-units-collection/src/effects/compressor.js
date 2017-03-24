import EffectUnit from 'webaudio-effect-unit';
import Tuna from 'tunajs';

const DEFAULT_THRESHOLD = -1;
const DEFAULT_MAKEUPGAIN = 1;
const DEFAULT_ATTACK = 1;
const DEFAULT_RELEASE = 0;
const DEFAULT_RATIO = 4;
const DEFAULT_KNEE = 5;
const DEFAULT_AUTOMAKEUP = true;

export const compressorData = {
  name: 'compressor',
  values: [

    {
      name: 'threshold',
      options: {
        type: 'range',
        defaultValue: DEFAULT_THRESHOLD,
        min: -100,
        max: 0,
        step: 0.1
      },
      set: (effectChain, value) => {
        effectChain.compressor.threshold = value;
      }
    },

    {
      name: 'makeupGain',
      options: {
        type: 'range',
        defaultValue: DEFAULT_MAKEUPGAIN,
        min: 0,
        max: 1,
        step: 0.01
      },
      set: (effectChain, value) => {
        effectChain.compressor.makeupGain = value;
      }
    },

    {
      name: 'attack',
      options: {
        type: 'range',
        defaultValue: DEFAULT_ATTACK,
        min: 0,
        max: 1000,
        step: 1
      },
      set: (effectChain, value) => {
        effectChain.compressor.attack = value;
      }
    },

    {
      name: 'release',
      options: {
        type: 'range',
        defaultValue: DEFAULT_RELEASE,
        min: 0,
        max: 3000,
        step: 1
      },
      set: (effectChain, value) => {
        effectChain.compressor.release = value;
      }
    },

    {
      name: 'ratio',
      options: {
        type: 'range',
        defaultValue: DEFAULT_RATIO,
        min: 1,
        max: 20,
        step: 1
      },
      set: (effectChain, value) => {
        effectChain.compressor.ratio = value;
      }
    },

    {
      name: 'knee',
      options: {
        type: 'range',
        defaultValue: DEFAULT_KNEE,
        min: 0,
        max: 40,
        step: 1
      },
      set: (effectChain, value) => {
        effectChain.compressor.knee = value;
      }
    },

    {
      name: 'automakeup',
      options: {
        type: 'single',
        defaultValue: DEFAULT_AUTOMAKEUP
      },
      set: (effectChain, value) => {
        effectChain.compressor.automakeup = value;
      }
    }

  ]
}

export default function createCompressor(audioCtx, tuna = new Tuna(audioCtx)) {

  // Tuna is optional

  return new EffectUnit({
      ...compressorData,
      effectChain: {
        compressor: new tuna.Compressor({
            threshold: DEFAULT_THRESHOLD,    //-100 to 0
            makeupGain: DEFAULT_MAKEUPGAIN,     //0 and up
            attack: DEFAULT_ATTACK,         //0 to 1000
            release: DEFAULT_RELEASE,        //0 to 3000
            ratio: DEFAULT_RATIO,          //1 to 20
            knee: DEFAULT_KNEE,           //0 to 40
            automakeup: DEFAULT_AUTOMAKEUP  //true/false
        })
      }
    },
    audioCtx);

}
