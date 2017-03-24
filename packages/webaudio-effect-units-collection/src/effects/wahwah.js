import EffectUnit from 'webaudio-effect-unit';
import Tuna from 'tunajs';

const DEFAULT_AUTOMODE = true;
const DEFAULT_BASEFREQUENCY = 0.5;
const DEFAULT_EXCURSIONOCTAVES = 2;
const DEFAULT_SWEEP = 0.2;
const DEFAULT_RESONANCE = 10;
const DEFAULT_SENSITIVITY = 0.5;

export const wahWahData = {
  name: 'wahwah',
  values: [

    {
      name: 'automode',
      options: {
        type: 'single',
        defaultValue: DEFAULT_AUTOMODE
      },
      set: (effectChain, value) => {
        effectChain.wahwah.automode = value;
      }
    },

    {
      name: 'baseFrequency',
      options: {
        type: 'range',
        defaultValue: DEFAULT_BASEFREQUENCY,
        min: 0,
        max: 1,
        step: 0.01
      },
      set: (effectChain, value) => {
        effectChain.wahwah.baseFrequency = value;
      }
    },

    {
      name: 'excursionOctaves',
      options: {
        type: 'range',
        defaultValue: DEFAULT_EXCURSIONOCTAVES,
        min: 0,
        max: 6,
        step: 1
      },
      set: (effectChain, value) => {
        effectChain.wahwah.excursionOctaves = value;
      }
    },

    {
      name: 'sweep',
      options: {
        type: 'range',
        defaultValue: DEFAULT_SWEEP,
        min: 0,
        max: 1,
        step: 0.01
      },
      set: (effectChain, value) => {
        effectChain.wahwah.sweep = value;
      }
    },

    {
      name: 'resonance',
      options: {
        type: 'range',
        defaultValue: DEFAULT_RESONANCE,
        min: 0,
        max: 100,
        step: 1
      },
      set: (effectChain, value) => {
        effectChain.wahwah.resonance = value;
      }
    },

    {
      name: 'sensitivity',
      options: {
        type: 'range',
        defaultValue: DEFAULT_SENSITIVITY,
        min: 0,
        max: 1,
        step: 0.01
      },
      set: (effectChain, value) => {
        effectChain.wahwah.sensitivity = value;
      }
    }

  ]
}

export default function createWahWah(audioCtx, tuna = new Tuna(audioCtx)) {

  // Tuna is optional

  return new EffectUnit({
      ...wahWahData,
      effectChain: {
        wahwah: new tuna.WahWah({
            automode: DEFAULT_AUTOMODE,                //true/false
            baseFrequency: DEFAULT_BASEFREQUENCY,            //0 to 1
            excursionOctaves: DEFAULT_EXCURSIONOCTAVES,           //1 to 6
            sweep: DEFAULT_SWEEP,                    //0 to 1
            resonance: DEFAULT_RESONANCE,                 //1 to 100
            sensitivity: DEFAULT_SENSITIVITY              //-1 to 1
        })
      }
    },
    audioCtx);

}
