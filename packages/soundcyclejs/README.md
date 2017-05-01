# soundcyclejs - cycle up your sounds
## a javascript looping library for the browser

# Why soundcyclejs?
Firstly, I was always on the search for a good software loopstation. But I didn't find any real good one. Secondly, I'm a convinced javascript and web developer. That's why I decided to create __soundcyclejs__.
I combined both my passion for beatboxing and my passion for programming into this library. So I am very passionate about it and motivated to continue development till I think this library reached perfection (so maybe never, nothing and nobody except my girlfriend is perfect).

## Here's an example of what I was able to create with soundcyclejs
I am beatboxing on the mic and a friend of mine plays the guitar. It's just a short sample which shows what can be done with soundcyclejs with not that much effort.
[Click here to go to the sample](https://scriptify.github.io/files/ohyeaa.wav)

# How does it work?
soundcyclejs is a looping library which, under the hood, uses a set of modules which could also be used independently. This library is just the product of the combination of those modules.
All those modules, including this one, are now part of the __sountility__ collection.
This module uses every single module of the sountility collection.

If you want to gain a deeper knowledge on how soundcyclejs works, just have a look at the __sountility__ collection and its modules.

But essentially, it's dead simple to use it.

# Using soundcyclejs

With soundcyclejs you record tracks and specify how they should be handled. In addition, you can control the overall output of the looper with the [Wmstr](../wmstr/README.md) module.

You can specify if you want your track to be put in a lane, if you want to create a new lane with it or if you want to use it as a single sequence track. More on that later.

## Understanding lanes

The most important concept to understand here is the concept of lanes (I called them like this and during this document I will continue to do so, but you can invent your own name :sunglasses:).

In this context, a lane is it's own independent looping unit.
To fully understand this chapter, I would recommend you reading the documentation of the [AudioLooper](../audiolooper/README.md) module.

Now, as you know what an AudioLooper is and how it works, let's continue.
A lane essentially consists of an AudioLooper-object and it's tracks. That's it. Not much magic about it. :sparkles:

## Recording and looping tracks

When you are creating a soundcyclejs-object, you need to construct it as follows:
### Constructing
```javascript
new SoundCycle(gotInput)
```

1. __gotInput__: This must be a function and gets executed as soon as the user grants audio input in browser. It can accept one parameter, a __boolean__: If it evaluates to true, the audio input was succesfully retrieved. If it evaluates to false, there was an error.

### Recording audio
Now let's talk about the more interesting part: Recording.
Under the hood, soundcyclejs uses the [Recordy](../recordy/README.md) module.
But the recorder of soundcyclejs has one important extension:
the _.stopRecording_ method. This method now doesn't simply stop the recording and pass an audio object to the user of the module. You decide what you want to do:
1. __Create a new lane with the recorded track__
2. __Add the track to an existing lane__
3. __Create a single sequence track__

Use this method as follows:
```javascript
soundcycle.recorder.startRecording()
```
The use of this method gets clarified below.

#### Recording single sequence tracks
Now you will certainly ask: _What the hell are single sequence tracks_:question:

I use this word to clarify that those tracks are recorded with the intention to be just played once in a while (as soon as the user wants it to be played) and not to be looped over.

They could e.g. be used for effects or drums (you could even use them like a launchpad).

An to actually record single sequence tracks, do the following:
```javascript
  mySoundcycleObject.setMode( mySoundcycleObject.getModes().SINGLE_SEQUENCE );
  mySoundcycleObject.stopRecording().then(({ chnlId }) => {
    // Do something with the chnlId, e.g. saving it somewhere for later use
  });
```
Just set the mode to SINGLE_SEQUENCE and stop recording (of course, you started recording before). The stop recording method then returns a promise which resolves to an object containing the id of the track you just created.

#### Creating a new lane

To create a new lane, use the _.stopRecording_ method as follows:

```javascript
mySoundcycleObject.setMode( mySoundcycleObject.getModes().NEW_LANE );
mySoundcycleObject.stopRecording().then(({ chnlId, looperId }) => {
  // Do something with the chnlId and the looperId, e.g. saving them somewhere for later use
});
```
Just set the mode to NEW_LANE and stop recording (of course, you started recording before). The stop recording method then returns a promise which resolves to an object containing the id of the track and the id of the looper you just created.

#### Adding a new track to a lane

To add a track to an existing lane, use the _.stopRecording_ method as follows:

```javascript
mySoundcycleObject.setMode( mySoundcycleObject.getModes().ADD_TO_LANE );
mySoundcycleObject.setCurrentLane(currentLaneId);
mySoundcycleObject.stopRecording().then(({ chnlId }) => {
  // Do something with the chnlId, e.g. saving it somewhere for later use
});
```
Just set it the mode to ADD_TO_LANE and stop recording (of course, you started recording before). The stop recording method then returns a promise which resolves to an object containing the id of the track you just created. But before you stop recording, you have to specify the lane you want to add the track to. To do so, use the _.setCurrentLane_ method. This method expects one parameter: The id of the lane (you got it before when you created the lane).

#### Pausing tracks
```javascript
.stopTrack({ id })
```

To stop any playing track (be it a track of a lane or a single sequence track), use this method. It expects one parameter which has to be an object with a field _id_ (the id of the chnl you got when you stopped recording).

#### Playing tracks
```javascript
.playTrack({ id })
```

To play any track (be it a paused track of a lane or a single sequence track), use this method. It expects one parameter which has to be an object with a field _id_ (the id of the chnl you got when you stopped recording).

#### Removing a track
```javascript
.removeTrack({ id })
```

To remove any track (be it a paused track of a lane or a single sequence track), use this method. It expects one parameter which has to be an object with a field _id_ (the id of the chnl you got when you stopped recording).

#### Removing a lane
```javascript
.removeLane({ looperId })
```

To remove a lane, use this method. It accepts on parameter which must be an object containing the field _looperId_ (the id of the lane you want to delete, you received it when you stopped recording with the __NEW_LANE__ mode).

### Handling effects

#### Enabling effects
```javascript
.enableEffect({ chnlId, effectName })
```
All tracks of soundcycle are based on the chnl module, which offers a great number of effects (for further information and a list of all available effects, have a look at the webaudio-effect-units-collection).

To enable a specific effect, use this method. I accepts one parameter, which must be an object containing the following fields:
1. __chnlId__: The id of the chnl whose effect you want to enable.
2. __effectName__: The name of the effect you want to enable.


#### Disabling effects
```javascript
.disableEffect({ chnlId, effectName })
```

Besides disabling an effects, this method works exactly the same as _.enableEffect_.

#### Setting an effects value
```javascript
.setEffectValue({ chnlId, effectName, valueType, value })
```

This method changes the value of a specific effect. To understand what the fields _effectName_, _valueType_ and _value_ are for, refer to the webaudio-effect-unit documentation (since all effects of the chnl module base on it).

### Manipulating the recorder and the master chnl
All chnls of soundcycle can be controlled through the same interfaces and since the master channel and the recorder channel are chnls too, they can be manipulated with the same methods. To do so, simply use the according ids for them:
```javascript
.getMasterChnlId()
.getRecorderChnlId();
```

### Setting/getting the current projects name
```javascript
.setProjectName(name)
.getProjectName()
```

Use those methods to get/set the projects name. If no project name was set, the projects name will default to the current date.

### The master chnl
All the output soundcycle produces, flows through the master chnl and get redirected to the speakers. This allows you to control the output of to loopstation centrally.

In addition, the master chnl enables you recording its output. With that, you can record whole tracks!
Those methods allow you to record the project:

```javascript
.startProjectRecording()
/* ... */
.stopProjectRecording()
```

When calling the _.stopRecording_ method, a _.wav_ file will automatically be downloaded. The files name will be the projects name.


# Code Example

This example doesn't essentially make sense, it just aims to show the use of soundcyclejs in a simplified way.

```javascript
import SoundCycle from 'soundcyclejs';
const soundcycle = new SoundCycle();

// Start recording. The default mode is NEW_LANE
soundcycle.startRecording();

window.setTimeout(() => {
  // Stop recording after 1s
  soundcycle.stopRecording()
    .then((res) => {
      // Set current lane to the lane which was just created
      soundcycle.setCurrentLane(res.laneId);
      // Set the mode to ADD_TO_LANE; so all newly recorded tracks are added to the current lane
      soundcycle.setMode(soundcycle.getModes().ADD_TO_LANE);
      // Start recording again
      soundcycle.startRecording();

      window.setTimeout(() => {
        // Stop recording after 1s
        soundcycle.stopRecording()
          .then((res1) => {
            // Stop both tracks
            soundcycle.stopTrack({ id: res.chnlId });
            soundcycle.stopTrack({ id: res1.chnlId });
            window.setTimeout(() => {
              // Play the first one again
              soundcycle.playTrack({ id: res.chnlId });
            }, 1000);
          });
      }, 1000);
    });
}, 1000);
```
