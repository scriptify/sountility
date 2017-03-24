import EffectUnit from 'webaudio-effect-unit';
import Tuna from 'tunajs';

const DEFAULT_RATE = 1.2;
const DEFAULT_DEPTH = 0.3;
const DEFAULT_FEEDBACK = 0.2;
const DEFAULT_STEREOPHASE = 30;
const DEFAULT_BASEMODULATIONFREQUENCY = 700;

export const phaserData = {
  name: 'phaser',
  values: [

    {
      name: 'rate',
      options: {
        type: 'range',
        defaultValue: DEFAULT_RATE,
        min: 0.01,
        max: 8,
        step: 0.01
      },
      set: (effectChain, value) => {
        effectChain.phaser.rate = value;
      }
    },

    {
      name: 'depth',
      options: {
        type: 'range',
        defaultValue: DEFAULT_DEPTH,
        min: 0,
        max: 1,
        step: 0.01
      },
      set: (effectChain, value) => {
        effectChain.phaser.depth = value;
      }
    },

    {
      name: 'feedback',
      options: {
        type: 'range',
        defaultValue: DEFAULT_FEEDBACK,
        min: 0,
        max: 1,
        step: 0.01
      },
      set: (effectChain, value) => {
        effectChain.phaser.feedback = value;
      }
    },

    {
      name: 'stereoPhase',
      options: {
        type: 'range',
        defaultValue: DEFAULT_STEREOPHASE,
        min: 0,
        max: 180,
        step: 0.1
      },
      set: (effectChain, value) => {
        effectChain.phaser.stereoPhase = value;
      }
    },

    {
      name: 'baseModulationFrequency',
      options: {
        type: 'range',
        defaultValue: DEFAULT_BASEMODULATIONFREQUENCY,
        min: 500,
        max: 1500,
        step: 1
      },
      set: (effectChain, value) => {
        effectChain.phaser.baseModulationFrequency = value;
      }
    }

  ]
}

export default function createPhaser(audioCtx, tuna = new Tuna(audioCtx)) {

  // Tuna is optional

  return new EffectUnit({
      ...phaserData,
      effectChain: {
        phaser: new tuna.Phaser({
            rate: 1.2,                     //0.01 to 8 is a decent range, but higher values are possible
            depth: 0.3,                    //0 to 1
            feedback: 0.2,                 //0 to 1+
            stereoPhase: 30,               //0 to 180
            baseModulationFrequency: 700  //500 to 1500
        })
      }
    },
    audioCtx);

}
