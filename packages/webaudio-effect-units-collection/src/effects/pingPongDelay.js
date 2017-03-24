import EffectUnit from 'webaudio-effect-unit';
import Tuna from 'tunajs';

const DEFAULT_WETLEVEL = 0.5;
const DEFAULT_FEEDBACK = 0.3;
const DEFAULT_DELAYTIMELEFT = 150;
const DEFAULT_DELAYTIMERIGHT = 150;

export const pingPongDelayData = {
  name: 'pingPongDelay',
  values: [

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
        effectChain.pingpong.wetLevel = value;
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
        effectChain.pingpong.feedback = value;
      }
    },

    {
      name: 'delayTimeLeft',
      options: {
        type: 'range',
        defaultValue: DEFAULT_DELAYTIMELEFT,
        min: 1,
        max: 10000,
        step: 1
      },
      set: (effectChain, value) => {
        effectChain.pingpong.delayTimeLeft = value;
      }
    },

    {
      name: 'delayTimeRight',
      options: {
        type: 'range',
        defaultValue: DEFAULT_DELAYTIMERIGHT,
        min: 1,
        max: 10000,
        step: 1
      },
      set: (effectChain, value) => {
        effectChain.pingpong.DEFAULT_DELAYTIMERIGHT = value;
      }
    }

  ]
}

export default function createPingPongDelay(audioCtx, tuna = new Tuna(audioCtx)) {

  // Tuna is optional

  return new EffectUnit({
      ...pingPongDelayData,
      effectChain: {
        pingpong: new tuna.PingPongDelay({
            wetLevel: 0.5, //0 to 1
            feedback: 0.3, //0 to 1
            delayTimeLeft: 150, //1 to 10000 (milliseconds)
            delayTimeRight: 200 //1 to 10000 (milliseconds)
        })
      }
    },
    audioCtx);

}
