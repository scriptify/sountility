import EffectUnit from 'webaudio-effect-unit';
import Tuna from 'tunajs';

const DEFAULT_INTENSITY = 0.3;
const DEFAULT_RATE = 4;
const DEFAULT_STEREOPHASE = 0;

export const tremoloData = {
  name: 'tremolo',
  values: [

    {
      name: 'intensity',
      options: {
        type: 'range',
        defaultValue: DEFAULT_INTENSITY,
        min: 0,
        max: 1,
        step: 0.01
      },
      set: (effectChain, value) => {
        effectChain.tremolo.intensity = value;
      }
    },

    {
      name: 'rate',
      options: {
        type: 'range',
        defaultValue: DEFAULT_RATE,
        min: 0.001,
        max: 8,
        step: 0.01
      },
      set: (effectChain, value) => {
        effectChain.tremolo.rate = value;
      }
    },

    {
      name: 'stereoPhase',
      options: {
        type: 'range',
        defaultValue: DEFAULT_STEREOPHASE,
        min: 0,
        max: 180,
        step: 1
      },
      set: (effectChain, value) => {
        effectChain.tremolo.stereoPhase = value;
      }
    }

  ]
}

export default function createTremolo(audioCtx, tuna = new Tuna(audioCtx)) {

  // Tuna is optional

  return new EffectUnit({
      ...tremoloData,
      effectChain: {
        tremolo: new tuna.Tremolo({
            intensity: DEFAULT_INTENSITY,    //0 to 1
            rate: DEFAULT_RATE,         //0.001 to 8
            stereoPhase: DEFAULT_STEREOPHASE    //0 to 180
        })
      }
    },
    audioCtx);

}
