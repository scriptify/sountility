import EffectUnit from './EffectUnit';

export default EffectUnit;



/*const audioCtx = new AudioContext();
const effect = new EffectUnit({
  name: 'gain',
  effectChain: {
    gain: audioCtx.createGain()
  },
  values: [
    {
      name: 'gain',
      options: {
        defaultValue: 1
      },
      set: (effectChain, val) => {
        effectChain.gain.gain.value = val;
      }
    }
  ]
}, audioCtx);

effect.setValue('gain', 0.8);

const osci = audioCtx.createOscillator();
osci.frequency.value = 600;
osci.connect(effect.input);
effect.connect(audioCtx.destination);
osci.start();

window.setTimeout(() => {
  effect.disconnect();
}, 1000);*/
