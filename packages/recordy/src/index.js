import Chnl from 'webaudio-chnl';
import Recorder from 'wrecorder';
import getInput from './getInput';

export default class Recordy extends Chnl {

  recorder;
  directOutGain;

  constructor(audioCtx) {
    super(audioCtx);
    this.recorder = new Recorder(this);

    // Set direct output to speakers
    this.directOutGain = audioCtx.createGain();
    this.directOutGain.gain.value = 0;
    this.connect(this.directOutGain);
    this.directOutGain.connect(audioCtx.destination);
  }

  toSpeaker(val) {
    this.directOutGain.gain.value = val;
  }

  async getInput() {
    const stream = await getInput();
    const mediaStream = this.context.createMediaStreamSource(stream);
    mediaStream.connect(this);
    return true;
  }

  startRecording() {
    this.recorder.record();
  }

  stopRecording({ type = `blob` }) { // type can be -> blob, audio or buffer
    // If asAudioObject evaluates to true, a window.Audio-object will be returned; otherwise, a blob will be returned;
    return new Promise((resolve) => {
      this.recorder.stop();

      this.recorder.exportWAV((blob) => {
        this.recorder.clear();

        switch (type) {

          case `blob`:
            resolve(blob);
            break;

          case `audio`: {
            const url = URL.createObjectURL(blob);
            const audio = new Audio(url);
            resolve(audio);
            break;
          }

          case `buffer`: {
            const fileReader = new FileReader();
            fileReader.addEventListener(`loadend`, () => {
              this.context.decodeAudioData(fileReader.result)
                .then(resolve);
            });
            fileReader.readAsArrayBuffer(blob);
            break;
          }

          default:
            throw new Error(`[Recordy] Invalid type, must be one of those: blob, audio or buffer.`);

        }
      });
    });
  }

}

/* const audioCtx = new AudioContext();
const r = new Recordy(audioCtx);

r.getInput()
  .then(val => {
    r.startRecording();

    window.setTimeout(() => {
      r.stopRecording({ type: 'audio' })
        .then(audio => {
          audio.play();
        });
    }, 1000);
  });*/
