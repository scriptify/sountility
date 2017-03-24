import EffectUnit from 'webaudio-effect-unit';
import Tuna from 'tunajs';

const DEFAULT_OUTPUTGAIN = 0.5;
const DEFAULT_DRIVE = 0.7;
const DEFAULT_CURVEAMOUNT = 1;


export const overdriveData = {
  name: 'overdrive',
  values: [

    {
      name: 'outputGain',
      options: {
        type: 'range',
        defaultValue: DEFAULT_OUTPUTGAIN,
        min: 0,
        max: 1,
        step: 0.01
      },
      set: (effectChain, value) => {
        effectChain.overdrive.outputGain = value;
      }
    }

  ]
}

export default function createOverdrive(audioCtx, tuna = new Tuna(audioCtx)) {

  // Tuna is optional

  return new EffectUnit({
      ...overdriveData,
      effectChain: {
        overdrive: new tuna.Overdrive({
            outputGain: DEFAULT_OUTPUTGAIN,         //0 to 1+
            drive: DEFAULT_DRIVE,              //0 to 1
            curveAmount: DEFAULT_CURVEAMOUNT,          //0 to 1
            algorithmIndex: 0       //0 to 5, selects one of our drive algorithms, RIGHT NOW DISABLED!
        })
      }
    },
    audioCtx);

}
