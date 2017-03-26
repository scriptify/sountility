export default class AudioLooper {

  pausedTracks = new Map();
  bufferNodes = new Map();
  audioCtx;
  firstTrack;

  constructor(audioCtx = new AudioContext()) {
    this.audioCtx = audioCtx;
  }

  addTrack({ id, audioBuffer, doProcessing = true, trackAdded = () => {} }) {
    const isFirstTrack = (this.bufferNodes.size === 0);
    let finalAudioBuffer;

    if (!isFirstTrack && doProcessing) {
      // Prepare buffer!
      // Step 1: fade-in + fade-out
      for (let channel = 0; channel < audioBuffer.numberOfChannels; channel++) {
        const channelData = audioBuffer.getChannelData(channel);
        const FADE_LENGTH = 100;
        for (let i = 0; i < FADE_LENGTH && i < channelData.length; i++) {
          const fadeOutPos = channelData.length - i - 1;
          channelData[i] = (channelData[i] * i) / FADE_LENGTH;
          channelData[fadeOutPos] = (channelData[fadeOutPos] * i) / FADE_LENGTH;
        }
      }

      // Step 2: fit it the first track
      const firstTrackBuffer = this.firstTrack.bufferNode.buffer;
      const percentualRatio = Math.ceil(audioBuffer.length / firstTrackBuffer.length);
      const newAudioBuffer = this.audioCtx.createBuffer(audioBuffer.numberOfChannels, firstTrackBuffer.length * percentualRatio, firstTrackBuffer.sampleRate);

      // is this even needed or is it enough to:
      // newAudioBuffer.copyFromChannel(audioBuffer, 2, 0); ????
      for (let channel = 0; channel < newAudioBuffer.numberOfChannels; channel++) {
        const channelDataNew = newAudioBuffer.getChannelData(channel);
        const channelDataCurrent = audioBuffer.getChannelData(channel);
        for (let i = 0; i < channelDataCurrent.length; i++)
          channelDataNew[i] = channelDataCurrent[i];
      }

      finalAudioBuffer = newAudioBuffer;
    } else
      finalAudioBuffer = audioBuffer;

    // Create buffersourcenode
    const bufferNode = this.audioCtx.createBufferSource();
    bufferNode.buffer = finalAudioBuffer;
    bufferNode.loop = true;

    const track = {
      duration: bufferNode.buffer.duration,
      startedAt: this.audioCtx.currentTime,
      getCurrentTime: () => this.audioCtx.currentTime - track.startedAt,
      bufferNode,
      trackAdded // Save for later use!
    };

    this.bufferNodes.set(id, track);

    if (isFirstTrack)
      this.firstTrack = track;

    const part = this.audioCtx.currentTime - this.firstTrack.startedAt;
    const numParts = Math.floor(part / this.firstTrack.duration);
    const offset = part - (numParts * this.firstTrack.duration);

    bufferNode.start(0, offset);

    // Return bufferNode, so user can connect it ecc.
    trackAdded(bufferNode);
  }

  pauseTrack({ id }) {
    if (this.exists(id)) {
      const track = this.bufferNodes.get(id);
      track.bufferNode.stop();
      this.pausedTracks.set(id, track);
      this.removeTrack({ id });
    }
  }

  playTrack({ id }) {
    if (this.pausedTracks.has(id)) {
      const { bufferNode: { buffer: audioBuffer }, trackAdded } = this.pausedTracks.get(id);
      this.addTrack({ id, audioBuffer, doProcessing: false, trackAdded });
    } else
      throw new Error(`You tried to pause an inexistent track!`);
  }

  removeTrack({ id }) {
    if (this.exists(id)) {
      const track = this.bufferNodes.get(id);
      track.bufferNode.stop();
      this.bufferNodes.delete(id);
    }
  }

  getCurrentTime({ id }) {
    if (this.exists(id)) {
      const track = this.bufferNodes.get(id);
      return track.getCurrentTime();
    }
    throw new Error(`You tried to access an inexistent track!`);
  }

  exists(id) {
    if (!this.bufferNodes.has(id))
      throw new Error(`You tried to access an inexistent track!`);

    return true;
  }

}
