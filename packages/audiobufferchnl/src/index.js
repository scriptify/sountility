import Chnl from 'webaudio-chnl';

export default class AudioBufferChnl extends Chnl {

  bufferSourceNode;

  constructor(audioCtx, bufferSourceNode) {
    super(audioCtx);
    this.setBufferSourceNode(bufferSourceNode);
  }

  setBufferSourceNode(bufferSourceNode) {
    this.bufferSourceNode = bufferSourceNode;
    this.bufferSourceNode.connect(this);
  }

  stop() {
    /* const newAudioBuffer = this.context.createBuffer(this.bufferSourceNode.buffer.numberOfChannels, this.bufferSourceNode.buffer.length, this.bufferSourceNode.buffer.sampleRate);

    for (let channel = 0; channel < newAudioBuffer.numberOfChannels; channel++) {
      const channelDataNew = newAudioBuffer.getChannelData(channel);
      const channelDataCurrent = this.bufferSourceNode.buffer.getChannelData(channel);
      for (let i = 0; i < channelDataCurrent.length; i++)
        channelDataNew[i] = channelDataCurrent[i];
    } */

    const newBufferSource = this.context.createBufferSource();
    newBufferSource.buffer = this.bufferSourceNode.buffer;
    newBufferSource.loop = this.bufferSourceNode.loop;

    this.bufferSourceNode.stop();

    this.setBufferSourceNode(newBufferSource);
  }

  play() {
    this.bufferSourceNode.start(0);
  }

}

/* const audioCtx = new AudioContext();
const buffer = audioCtx.createBuffer(2, audioCtx.sampleRate * 2.0, audioCtx.sampleRate);
const sourceNode = audioCtx.createBufferSource();
sourceNode.buffer = buffer;

const bufferChnl = new AudioBufferChnl(sourceNode, audioCtx);
console.log(bufferChnl); */
