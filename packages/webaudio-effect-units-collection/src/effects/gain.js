import EffectUnit from 'webaudio-effect-unit';

export const gainData = {
  name: 'gain',
  values: [

    {
      name: 'gain',
      options: {
        type: 'range',
        defaultValue: 1,
        min: 0,
        max: 1,
        step: 0.01
      },
      set: (effectChain, value) => {
        effectChain.gain.gain.value = value;
      }
    },

    {
      name: 'muted',
      options: {
        type: 'single',
        defaultValue: false
      },
      set: (effectChain, value) => {
        effectChain.gain.gain.value = value ? 0 : 1;
      }
    }

  ]
};

export default function createGain(audioCtx) {

  return new EffectUnit({
    ...gainData,
    effectChain: {
      gain: audioCtx.createGain()
    }
  }, audioCtx);

}
