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

    if(!isFirstTrack && doProcessing) {

      // Prepare buffer!
      const firstTrackBuffer = this.firstTrack.bufferNode.buffer;
      const percentualRatio = Math.ceil( audioBuffer.length / firstTrackBuffer.length );
      const newAudioBuffer = this.audioCtx.createBuffer( audioBuffer.numberOfChannels, firstTrackBuffer.length * percentualRatio, firstTrackBuffer.sampleRate );

      // is this even needed or is it enough to:
      // newAudioBuffer.copyFromChannel(audioBuffer, 2, 0); ????
      for(let channel = 0; channel < newAudioBuffer.numberOfChannels; channel++) {
        const channelDataNew = newAudioBuffer.getChannelData(channel);
        const channelDataCurrent = audioBuffer.getChannelData(channel);
        for(let i = 0; i < channelDataCurrent.length; i++) {
          channelDataNew[i] = channelDataCurrent[i];
        }
      }

      finalAudioBuffer = newAudioBuffer;

    } else {
      finalAudioBuffer = audioBuffer;
    }

    // Create buffersourcenode
    const bufferNode = this.audioCtx.createBufferSource();
    bufferNode.buffer = finalAudioBuffer;
    bufferNode.loop = true;

    let startAt = this.audioCtx.currentTime;

    const track = {
      duration: bufferNode.buffer.duration,
      getCurrentTime: () => {
        return this.audioCtx.currentTime - startAt;
      },
      bufferNode,
      trackAdded // Save for later use!
    };

    this.bufferNodes.set(id, track);

    if(isFirstTrack) {
      this.firstTrack = track;
    } else {
      startAt = this.audioCtx.currentTime + ( this.firstTrack.duration - this.firstTrack.getCurrentTime() );
    }

    bufferNode.start(startAt);

    // Return bufferNode, so user can connect it ecc.
    trackAdded(bufferNode);

  }

  pauseTrack({ id }) {
    if( this.exists(id) ) {
      const track = this.bufferNodes.get(id);
      track.bufferNode.stop();
      this.pausedTracks.set(id, track);
      this.removeTrack({ id });
    }
  }

  playTrack({ id }) {
    if( this.pausedTracks.has(id) ) {
      const { bufferNode: { buffer: audioBuffer }, trackAdded } = this.pausedTracks.get(id);
      const newBufferNode = this.addTrack({ id, audioBuffer, doProcessing: false, trackAdded });
    } else {
      throw new Error(`You tried to pause an inexistent track!`);
    }
  }

  removeTrack({ id }) {
    if( this.exists(id) ) {
      const track = this.bufferNodes.get(id);
      track.bufferNode.stop();
      this.bufferNodes.delete(id);
    }
  }

  getCurrentTime({ id }) {
    if( this.exists(id) ) {
      const track = this.bufferNodes.get(id);
      return track.getCurrentTime();
    }
  }

  exists(id) {

    if(!this.bufferNodes.has(id)) {
      throw new Error(`You tried to access an inexistent track!`);
    }
    return true;

  }

}



/*import Recordy from 'recordy';
import AudioChnl from 'audiochnl';

const audioCtx = new AudioContext();

const recordy = new Recordy(audioCtx);

recordy.getInput()
  .then(hasInput => {
    if(hasInput)
      console.log('Got mic input!');
    else
      console.error('Could not get mic input.');
  });

render(recordy, audioCtx);

function render(recordy, audioCtx) {


  let time1 = 0;
  let time2 = 0;
  let measurements = [];
  let tracks = [];
  let id = 0;
  let count = 0;

  const looper = new AudioLooper(audioCtx);


  const mainDiv = document.createElement('div');
  mainDiv.class = 'main';

  const recordBtn = document.createElement('button');
  const stopRecordBtn = document.createElement('button');

  recordBtn.textContent = 'Start recording';
  stopRecordBtn.textContent = 'Stop recording';

  recordBtn.addEventListener('click', e => {
    recordy.startRecording();
  });

  stopRecordBtn.addEventListener('click', e => {
    recordy.stopRecording() // TRUE == Create audio object, FALSE = return blob
      .then(blob => {

        // create arraybuffer from blob
        const fileReader = new FileReader();
        fileReader.addEventListener('loadend', e => {

          audioCtx.decodeAudioData(fileReader.result)
            .then(audioBuffer => {

              const id = Math.random() * 1000;

              const bufferNode = looper.addTrack({
                id,
                audioBuffer,
                trackAdded: bufferNode => {
                  bufferNode.connect(audioCtx.destination);
                }
              });

              window.setTimeout(() => {
                looper.pauseTrack({ id });
                window.setTimeout(() => {
                  looper.playTrack({ id });
                }, 1000);
              }, 1000);

            });

        });
        fileReader.readAsArrayBuffer(blob);

      });

  });

  mainDiv.appendChild(recordBtn);
  mainDiv.appendChild(stopRecordBtn);

  document.querySelector('body').appendChild(mainDiv);
}*/
