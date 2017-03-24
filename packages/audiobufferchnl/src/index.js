import Chnl from 'webaudio-chnl';

export default class AudioBufferChnl extends Chnl {

  bufferSourceNode;

  constructor(audioCtx, bufferSourceNode) {
    super(audioCtx);
    this.bufferSourceNode = bufferSourceNode;
    this.bufferSourceNode.connect(this);
  }

}

/*const audioCtx = new AudioContext();
const buffer = audioCtx.createBuffer(2, audioCtx.sampleRate * 2.0, audioCtx.sampleRate);
const sourceNode = audioCtx.createBufferSource();
sourceNode.buffer = buffer;

const bufferChnl = new AudioBufferChnl(sourceNode, audioCtx);
console.log(bufferChnl);*/
