# soundcyclejs - cycle up your sounds
## a pure javascript looping library for the browser

# Why soundcyclejs?
Firstly, I was always on the search for a good software loopstation. But I didn't find any real good one. Secondly, I'm a convinced javascript and web developer. That's why I decided to create __soundcyclejs__.
I combined both my passion for beatboxing and my passion for programming into this library. So I am very passionate about it and motivated to continue development till I think this library reached perfection (so maybe never, nothing and nobody except my girlfriend is perfect).

# How does it work?
soundcyclejs is a looping library which, under the hood, uses a set of modules which could also be used independently. This library is just the product of the combination of those modules.
Here a list with all modules which were developed for this project:
- [AudioLooper](https://github.com/scriptify/AudioLooper)
- [Chnl](https://github.com/scriptify/Chnl)
- [AudioChnl](https://github.com/scriptify/AudioChnl)
- [Recordy](https://github.com/scriptify/Recordy)
- [Wmstr](https://github.com/scriptify/Wmstr)
- [webaudio-effect-unit](https://github.com/scriptify/webaudio-effect-unit)
- [webaudio-effect-units-collection](https://github.com/scriptify/webaudio-effect-units-collection)

If you want to gain a deeper knowledge on how soundcyclejs works, just have a look at those modules listed above.

But essentially, it's dead simple to use it.

# Use soundcyclejs

With soundcyclejs you record tracks and specify how they should be handled. In addition, you can control the overall output of the looper with the [Wmstr](https://github.com/scriptify/Wmstr) module.

You can specify if you want your track to be put in a lane, if you want to create a new lane with it or if you want to use it as a single sequence track. More on that later.

## Understanding lanes

The most important concept to understand here is the concept of lanes (I called them like this and during this document I will continue to do so, but you can invent your own name :sunglasses:).

In this context, a lane is it's own independent looping unit.
To fully understand this chapter, I would recommend you reading the documentation of the [AudioLooper](https://github.com/scriptify/AudioLooper) module.

Now, as you know what an AudioLooper is and how it works, let's continue.
A lane essentially consists of an AudioLooper-object and it's tracks. That's it. Not much magic about it. :sparkles:

## Recording and looping tracks

When you are creating a soundcyclejs-object, you need to construct it as follows:
### Constructing
```javascript
new SoundCycle(audioContext, gotInput)
```

1. __audioContext__: This is the AudioContext object you want to use.
2. __gotInput__: This must be a function and gets executed as soon as the user grants audio input in browser. It can accept one parameter, a __boolean__: If it evaluates to true, the audio input was succesfully retrieved. If it evaluates to false, there was an error.

### Controlling ouput with Wmstr
All output of the loopstation is going through the [Webaudio Master Channel (Wmstr)](https://github.com/scriptify/Wmstr). So you can master all the output and can record whole songs. Just have a look at [Wmstr](https://github.com/scriptify/Wmstr).

To access the master channel, just use the according field (which is a Wmstr - object).

```javascript
soundcycle.master
```

### Recording audio
Now let's talk about the more interesting part: Recording.
Under the hood, soundcyclejs uses the [Recordy](https://github.com/scriptify/Recordy) module.
But the recorder of soundcyclejs has one important extension:
the _.stopRecording_ method. This method now doesn't simply stop the recording and pass an audio object. You decide what you want to do:
1. __Create a new lane with the recorded track__
2. __Add the track to an existing lane__
3. __Create a single sequence track__

Use this method as follows:
```javascript
soundcycle.recorder.stopRecording(MODE, payload)
```
The use of this method gets clarified below.

#### Recording single sequence tracks
Now you will certainly ask: _What the hell are single sequence tracks_:question:

I use this word to clarify that those tracks are recorded with the intention to be just played once in a while (as soon as the user wants it to be played) and not to be looped over.

They could e.g. be used for effects or drums (you could even use them like a launchpad).

And to actually record single sequence tracks, do the following:
```javascript
soundcycle.recorder.stopRecording(soundcycle.recorder.MODES.SINGLE_SEQUENCE, { id: 546 })
```

For the first parameter, pass the SINGLE_SEQUENCE constant (which is contained by the _soundcycle.recorder.MODES_ object).

For the second parameter, you can pass an id. But this is __optional__. If you don't pass an id, a new one will be created.

The method will now return a Promise which resolves with an object of the following structure:

```javascript
{
  MODE,
  audioChnl,
  id
}
```

In this case, the MODE field will have a value of   __soundcycle.recorder.MODES.SINGLE_SEQUENCE__.

The audioChnl field contains an [AudioChnl](https://github.com/scriptify/AudioChnl) object which can now be used.

The id is the id you passed and if you didn't pass an id, this field has a new random id.

Now, you can store the AudioChnl object where ever you want and do with it what you want.


#### Creating a new lane

To create a new lane, use the _.stopRecording_ method as follows:

```javascript
soundcycle.recorder.stopRecording(soundcycle.recorder.MODES.NEW_LANE, {
  onPlay,
  onStop,
  laneId,
  chnlId
})
```

If you have a good understanding on how the [AudioLooper](https://github.com/scriptify/AudioLooper) module works, you can already imagine what those fields are for.

The _onPlay_ field must be a function. This function will be executed as soon a track is played. As you need to store the tracks yourself, you also need to play and stop them yourself. Have a look at the [AudioLooper](https://github.com/scriptify/AudioLooper) module for more details.

The _onStop_ field must be a function and works exactly the same, expect that the track needs to be stopped.

The _laneId_ and the _chnlId_ fields are __optional__.

The method returns a Promise which resolves with an object of the following structure:
```javascript
{
  MODE,
  looper,
  audioChnl,
  chnlId,
  laneId
}
```

The _MODE_ field has a value of _soundcycle.recorder.MODES.NEW_LANE_.

The _looper_ field is the AudioLooper object you can work with.

The _audioChnl_ field is the first track in the looper and is an [AudioChnl](https://github.com/scriptify/AudioChnl) object.

The _laneId_ and the _chnlId_ fields are new generated ids or the ones you specified before.


#### Adding a new track to a lane

To add the recorder track to an existing lane, use the _.stopRecording_ method as follows:

```javascript
soundcycle.recorder.stopRecording(soundcycle.recorder.MODES.ADD_TO_LANE, {
  looper,
  laneId,
  chnlId
})
```

The _looper_ field of the object you pass must be a valid _AudioLooper_ object. You got one before when you created a new lane. The recorded track will automatically be added to this AudioLooper and will be looped over.

The _laneId_ is the id you specified/received before when you created a new lane.

The _chnlId_ is the id which will be assigned to your chnl. Specify one yourself or soundcyclejs will generate one for you.


The method returns a Promise which resolves with an object of the following structure:
```javascript
{
  MODE,
  audioChnl,
  chnlId,
  laneId
}
```
