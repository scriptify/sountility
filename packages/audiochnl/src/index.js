import Chnl from 'webaudio-chnl';


export default class AudioChnl extends Chnl {

  audioObj;
  isReady = false;

  constructor(audioCtx, audioObj, loaded = () => {}) {
    super(audioCtx);
    this.audioObj = audioObj;

    this.audioObj.addEventListener('loadedmetadata', e => {
      this.isReady = true;
      loaded();
    });

    const mediaSource = audioCtx.createMediaElementSource(audioObj);
    mediaSource.connect(this);

  }

  start() {
    this.audioObj.play();
  }

  stop() {
    this.audioObj.currentTime = 0;
    this.pause();
  }

  pause() {
    this.audioObj.pause();
  }

  seek(time) {
    // Time in seconds
    this.audioObj.currentTime = time;
  }

}

/*const audioCtx = new AudioContext();
const audio = new Audio(song);
const audioChnl = new AudioChnl(audioCtx, audio);
audioChnl.start();
window.setTimeout(() => {
  audioChnl.pause();
  window.setTimeout(() => {
    audioChnl.start();
  }, 4000);
}, 6000);*/
