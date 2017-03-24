import EffectUnit from 'webaudio-effect-unit';
import Tuna from 'tunajs';

const DEFAULT_CUTOFF = 0.065;
const DEFAULT_RESONANCE = 3.5;

export const moogData = {
  name: 'moog',
  values: [

    {
      name: 'cutoff',
      options: {
        type: 'range',
        defaultValue: DEFAULT_CUTOFF,
        min: 0,
        max: 1,
        step: 0.01
      },
      set: (effectChain, value) => {
        effectChain.moog.cutoff = value;
      }
    },

    {
      name: 'resonance',
      options: {
        type: 'range',
        defaultValue: DEFAULT_RESONANCE,
        min: 0,
        max: 4,
        step: 0.01
      },
      set: (effectChain, value) => {
        effectChain.moog.resonance = value;
      }
    }

  ]
}

export default function createMoog(audioCtx, tuna = new Tuna(audioCtx)) {

  // Tuna is optional

  return new EffectUnit({
      ...moogData,
      effectChain: {
        moog: new tuna.MoogFilter({
            cutoff: 0.065,    //0 to 1
            resonance: 3.5,   //0 to 4
            bufferSize: 4096  //256 to 16384, NOT INCLUDED AS EDITABLE!
        })
      }
    },
    audioCtx);

}
