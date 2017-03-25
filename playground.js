/* eslint import/no-extraneous-dependencies: 0 */
/* eslint import/no-unresolved: 0 */
/* eslint import/extensions: 0 */

/* import Recordy from 'recordy';
import AudioLooper from 'audiolooper';

const audioCtx = new AudioContext();

const recordy = new Recordy(audioCtx);

recordy.getInput()
  .then((hasInput) => {
    if (hasInput)
      console.log(`Got mic input!`);
    else
      console.error(`Could not get mic input.`);
  });

function render() {
  const looper = new AudioLooper(audioCtx);


  const mainDiv = document.createElement(`div`);
  mainDiv.class = `main`;

  const recordBtn = document.createElement(`button`);
  const stopRecordBtn = document.createElement(`button`);

  recordBtn.textContent = `Start recording`;
  stopRecordBtn.textContent = `Stop recording`;

  recordBtn.addEventListener(`click`, () => {
    recordy.startRecording();
  });

  stopRecordBtn.addEventListener(`click`, () => {
    recordy.stopRecording() // TRUE == Create audio object, FALSE = return blob
      .then((blob) => {
        // create arraybuffer from blob
        const fileReader = new FileReader();
        fileReader.addEventListener(`loadend`, () => {
          audioCtx.decodeAudioData(fileReader.result)
            .then((audioBuffer) => {
              const id = Math.random() * 1000;

              looper.addTrack({
                id,
                audioBuffer,
                trackAdded: (bufferNode) => {
                  bufferNode.connect(audioCtx.destination);
                }
              });
            });
        });
        fileReader.readAsArrayBuffer(blob);
      });
  });

  mainDiv.appendChild(recordBtn);
  mainDiv.appendChild(stopRecordBtn);

  document.querySelector(`body`).appendChild(mainDiv);
}

render(recordy, audioCtx); */
