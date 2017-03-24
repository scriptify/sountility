import Tuna from 'tunajs';

import createGain, { gainData } from './effects/gain';
import createChorus, { chorusData } from './effects/chorus';
import createDelay, { delayData } from './effects/delay';
import createPhaser, { phaserData } from './effects/phaser';
import createOverdrive, { overdriveData } from './effects/overdrive';
import createCompressor, { compressorData } from './effects/compressor';
import createLowpass, { lowpassData } from './effects/lowpass';
import createHighpass, { highpassData } from './effects/highpass';
import createTremolo, { tremoloData } from './effects/tremolo';
import createWahWah, { wahWahData } from './effects/wahwah';
import createBitcrusher, { bitcrusherData } from './effects/bitcrusher';
import createMoog, { moogData } from './effects/moog';
import createPingPongDelay, { pingPongDelayData } from './effects/pingPongDelay';

export const EFFECT_DATA = [
  gainData,
  highpassData,
  lowpassData,
  delayData,
  chorusData,
  phaserData,
  overdriveData,
  compressorData,
  tremoloData,
  wahWahData,
  bitcrusherData,
  moogData,
  pingPongDelayData
];

export default function createEffectCollection(audioCtx) {

  const tuna = new Tuna(audioCtx);

  return {
    gain: createGain(audioCtx),
    chorus: createChorus(audioCtx, tuna),
    delay: createDelay(audioCtx, tuna),
    phaser: createPhaser(audioCtx, tuna),
    overdrive: createOverdrive(audioCtx, tuna),
    compressor: createCompressor(audioCtx, tuna),
    lowpass: createLowpass(audioCtx),
    highpass: createHighpass(audioCtx),
    tremolo: createTremolo(audioCtx, tuna),
    wahwah: createWahWah(audioCtx, tuna),
    bitcrusher: createBitcrusher(audioCtx, tuna),
    moog: createMoog(audioCtx, tuna),
    pingPongDelay: createPingPongDelay(audioCtx, tuna)
  };
}
