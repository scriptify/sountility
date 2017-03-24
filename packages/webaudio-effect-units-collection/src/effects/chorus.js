import EffectUnit from 'webaudio-effect-unit';
import Tuna from 'tunajs';

const DEFAULT_RATE = 1.5;
const DEFAULT_FEEDBACK = 0.2;
const DEFAULT_DELAY = 0.0045;

export const chorusData = {
  name: 'chorus',
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
        effectChain.chorus.rate = value;
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
        effectChain.chorus.feedback = value;
      }
    },

    {
      name: 'delay',
      options: {
        type: 'range',
        defaultValue: DEFAULT_DELAY,
        min: 0,
        max: 1,
        step: 0.01
      },
      set: (effectChain, value) => {
        effectChain.chorus.delay = value;
      }
    }

  ]
}

export default function createChorus(audioCtx, tuna = new Tuna(audioCtx)) {

  // Tuna is optional

  return new EffectUnit({
      ...chorusData,
      effectChain: {
        chorus: new tuna.Chorus({
          rate: DEFAULT_RATE, // 0.01 - 8
          feedback: DEFAULT_FEEDBACK, // 0 - 1
          delay: DEFAULT_DELAY // 0 - 1
        })
      }
    },
    audioCtx);

}
