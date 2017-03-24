import EffectUnit from 'webaudio-effect-unit';
import Tuna from 'tunajs';

const DEFAULT_FEEDBACK = 0.45;
const DEFAULT_DELAYTIME = 150;
const DEFAULT_WETLEVEL = 0.25;
const DEFAULT_DRYLEVEL = 1;
const DEFAULT_CUTOFF = 2000;

export const delayData = {
  name: 'delay',
  values: [

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
        effectChain.delay.feedback = value;
      }
    },

    {
      name: 'delayTime',
      options: {
        type: 'range',
        defaultValue: DEFAULT_DELAYTIME,
        min: 1,
        max: 10000,
        step: 1
      },
      set: (effectChain, value) => {
        effectChain.delay.delayTime = value;
      }
    },

    {
      name: 'wetLevel',
      options: {
        type: 'range',
        defaultValue: DEFAULT_WETLEVEL,
        min: 0,
        max: 1,
        step: 0.01
      },
      set: (effectChain, value) => {
        effectChain.delay.wetLevel = value;
      }
    },

    {
      name: 'dryLevel',
      options: {
        type: 'range',
        defaultValue: DEFAULT_DRYLEVEL,
        min: 0,
        max: 1,
        step: 0.01
      },
      set: (effectChain, value) => {
        effectChain.delay.dryLevel = value;
      }
    },

    {
      name: 'cutoff',
      options: {
        type: 'range',
        defaultValue: DEFAULT_CUTOFF,
        min: 20,
        max: 22050,
        step: 1
      },
      set: (effectChain, value) => {
        effectChain.delay.cutoff = value;
      }
    }

  ]
}

export default function createDelay(audioCtx, tuna = new Tuna(audioCtx)) {

  // Tuna is optional

  return new EffectUnit({
      ...delayData,
      effectChain: {
        delay: new tuna.Delay({
            feedback: DEFAULT_FEEDBACK,    //0 to 1+
            delayTime: DEFAULT_DELAYTIME,    //1 to 10000 milliseconds
            wetLevel: DEFAULT_WETLEVEL,    //0 to 1+
            dryLevel: DEFAULT_DRYLEVEL,       //0 to 1+
            cutoff: DEFAULT_CUTOFF      //cutoff frequency of the built in lowpass-filter. 20 to 22050
        })
      }
    },
    audioCtx);

}
