# audiolooper - Looping made easy

## What is an audiolooper?

An audiolooper let's you loop your audiotracks in a very simple and intuitive way.
The looping algorithm keeps the tracks automatically in sync.

__This package is a part of the [sountility](../../README.md) collection!__

## How does it work?
The audiolooper tries to loope the tracks you add in a synced manner. It simply loops the tracks according to the first track you added to the looper. This makes looping easier in __most__ cases (not always, don't expect any miracles).
It was a long way until I arrived here. Before I created this package, I tried many different things in order to get a consistent looping (initially, I was using webworkers with setTimeout, but this led to very inconsistent timing and glichtes). This solution is very solid and offers consistent looping by using the webaudio BufferSourceNode objects.

### Looping, explained
Here I try to explain you, how audiolooper loops your tracks in a synced manner.

When the first track is added, it is looped over as is.
All the following tracks will be synced with the first track you added.
The looping algorithm makes the duration of the track you added after the first one a multiple of the first tracks duration. It will always be rounded up until it is a multiple of the first tracks duration.

#### Example #1
- First track duration: 1s
- The tracks duration you add: 0,7s

:arrow_forward: The duration of the track you added becomes __1s__. The track will be looped over now every 1s.

#### Example #2
- First track duration: 1s
- The tracks duration you add: 1,00001s

:arrow_forward: The duration of the track you added becomes __2s__. The track will be looped over now every 2s.

#### Example #3
- First track duration: 5s
- The tracks duration you add: 7s

:arrow_forward: The duration of the track you added becomes __10s__. The track will be looped over now every 10s.

#### Example #4
- First track duration: 5s
- The tracks duration you add: 4,9s

:arrow_forward: The duration of the track you added becomes __5s__. The track will be looped over now every 5s.

__I hope I was able to clarify how the audiolooper works! If you still have probblems understanding how it works, feel free to open an issue!__

## Methods

### Constructor
```javascript
new AudioLooper(audioCtx)
```

To create a new audiolooper instance, you have to pass on parameter to the constructor: A valid _AudioContext_ object.

### Adding a track
```javascript
.addTrack({ id, audioBuffer, trackAdded })
```

To add a track to the looper, use this method.
The method expects one parameter, which has to be an object of the following structure:

```javascript
{
  id: ANY,
  audioBuffer: BufferSourceNode,
  trackAdded: Function
}
```

- __id__: The id can be anything, but you'll need it refer to the tracks for later. I recommend using a library like _uuid_ to generate ids.

- __audioBuffer__: This needs to be a webaudio BufferSourceNode. This one will then be added to the looper and will be looped over.

- __trackAdded__: This field must be a function. It is a callback function which will be executed when the track was added to the looper. This function can accept one parameter, which will be the final BufferSourceNode used by the looper (__ATTENTION!__ The BufferSourceNode actually used by the looper is a different one, not the one you passed into the function).


### Removing a track
```javascript
.removeTrack({ id })
```

To remove a track, simply use this function. It requires an object ad its only parameter which has a field _id_, the id of the track you want to delete (you specified the id before, when you added the track).

__ATTENTION!__ Removing the first track will lead to unexpected behaviour and will be disabled in the near future!

### Pausing a track
```javascript
.pauseTrack({ id })
```

To pause a track, simply use this method. It requires an object as its only parameter which has a field _id_, the id of the track. (you specified the id before, when you added the track).

### Playing a paused track
```javascript
.playTrack({ id })
```

To play a track you paused before, simply use this method. It requires an object as its only parameter which has a field _id_, the id of the track. (you specified the id before, when you added the track).

### Get a tracks time
```javascript
.getCurrentTime({ id })
```

To get the time(seconds) which passed since the track was added, use this method. It requires an object as its only parameter which has a field _id_, the id of the track. (you specified the id before, when you added the track).

### Look, if a specific track exists
```javascript
.exists({ id })
```

To check if a specific track was already added to the audiolooper, use this method. It requires an object as its only parameter which has a field _id_, the id of the track. (you specified the id before, when you added the track).

## Code example

This is a small example which shows how to create a very simple loopstation.

```javascript
import Recordy from 'recordy';
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

render(recordy, audioCtx);
```
