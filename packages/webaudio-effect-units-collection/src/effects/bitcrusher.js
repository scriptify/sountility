import EffectUnit from 'webaudio-effect-unit';
import Tuna from 'tunajs';

const DEFAULT_BITS = 4;
const DEFAULT_NORMFREQ = 0.1;
const DEFAULT_BUFFERSIZE = 4096;

export const bitcrusherData = {
  name: 'bitcrusher',
  values: [

    {
      name: 'bits',
      options: {
        type: 'range',
        defaultValue: DEFAULT_BITS,
        min: 1,
        max: 16,
        step: 1
      },
      set: (effectChain, value) => {
        effectChain.bitcrusher.bits = value;
      }
    },

    {
      name: 'normfreq',
      options: {
        type: 'range',
        defaultValue: DEFAULT_NORMFREQ,
        min: 0.1,
        max: 1,
        step: 0.01
      },
      set: (effectChain, value) => {
        effectChain.bitcrusher.normfreq = value;
      }
    }

  ]
}

export default function createBitcrusher(audioCtx, tuna = new Tuna(audioCtx)) {

  // Tuna is optional

  return new EffectUnit({
      ...bitcrusherData,
      effectChain: {
        bitcrusher: new tuna.Bitcrusher({
            bits: 4,          //1 to 16
            normfreq: 0.1,    //0 to 1
            bufferSize: 4096  //256 to 16384, NOT INCLUDED AS EDITABLE!
        })
      }
    },
    audioCtx);

}
