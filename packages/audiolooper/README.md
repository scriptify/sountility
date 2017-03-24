# AudioLooper - Looping made easy

## What is an AudioLooper?

An AudioLooper let's you loop your audiotracks (Audio-objects) in a very simple and intuitive way.
The looping algorithm keeps the tracks in sync.
The algorithm is executed in a separate thread(a Web Worker) because of the enhanced performance that it delivers (so the performance is not dependent on the complexity/current state of the UI), which is the most important thing to have for an exact timing.

## How does it work?

The looping algorithm keeps all tracks in sync according to the first added track.
It just works with the durations and ids with the tracks you add, so no information about the actual Audio-object is needed.

The first track you add is the most important one: Based on the duration of it, tracks will be synced and played.

First of all, when the first track gets added, it just gets looped over and over as is.
Since the algorithm works with percentual durations, the first track gets assigned a maximal percentual duration of 1. So from now on, this track is the unit used for all the new tracks added. I know, that doesn't sound very clear until now, but wait for it, it soon will! :sparkles:

Now, if new tracks get added, the magic happens.
When you add a new track, one very important constant gets calculated: The percentual duration of the track __according the the first one__. So the duration of the first track will be 100%. E.g. if the duration of the first track is 1s and the duration of the new track is 1.2s, the new track will have a percentual duration of 120%. This information will later on be used to determine whether a track needs to be played or not.

So now, as a new track was added, the looper will include that one and loop it.
But how does the looper decide if a track needs to be played or not?
That's the heart of the looper, the most important question. Although it's a small piece of code, it was the most complicated part where I also spent most of the time.
__It works as follows:__
The looper always calculates the actual progress of the first track. This progress is expressed percentually. Now, the looper looks at the percentual duration of every added track and determines, if the track can be played now. Here, the looper rounds the percentual duration of the current track to the next bigger integer(e.g. 1.4 becomes 2). Now, if the following condition evaluates to true, the track is played.
```javascript
(firtTrack.percentualProgress % ceil(currentTrack.percentualDuration)) == 0
```

But what does this mean?
This means that the tracks are always played in sync with the first track: If a track's duration is shorter or equal than the first track's duration, it's always played when the first track is played (which, how I said before, always gets looped as is). If a track's duration is greater than the first track's duration, it's always looped in a way so that this track doesn't overlap itself: If it's 2x as long as the first track, it get's played always after the first track has played 2 times. The same would apply to a percentual duration of 1.2, 1.1, 1.999, ... you name it. Also, e.g. if the track is 3x as long as the first track, it's played every third time the first track is played. I think you get it. It's quite a complicated method but I think that it's a reasonble and logic one to automatically sync tracks.

To clarify everything a bit, here's a graphic which explains the method with an example:

![Example](graphic.png?raw=true "Example")

In the image we can see a table where the tracks are listed together with some information: The track-nr to identify the tracks, the duration and when they will be added.

In the second table (the blue one) you can see when the specific tracks are played. If there's a green arrow, it means that this track is played. The black lines with the circle show when the track was added.

### Technical Details

The looping algorithm is executed in a Web Worker. Web Workers can't interact with the DOM APIs, so passing all tracks as direct references to the Audio-object is technically not possible. Therefore, you just pass an id (to identify the tracks) and the duration of the track. The algorithm then just works with these 'virtual' tracks. When a track is played/stopped by the alogrithm, your callbacks get executed. To enhance accuracy, you can call a function which continuously syncs the real track (so the audio-object in your UI-thread) with the virtual track in the other thread. This (as far as I was able to test it) increases accuracy up to over 90%. Still, sometimes there are delays (as far as I was able to test it, the delays had a length of ~2-10ms, so they weren't noticeable).

## Usage

### Creating an AudioLooper
```javascript
new AudioLooper(onPlay, onStop)
```

You can construct a new AudioLooper object with this constructor.
The arguments are:
1. __onPlay: _function___

  This function gets exectued everytime a track needs to be played (according to the algorithm). The function takes 1 argument: The _id_ of the track (you determined it before when you added the track to the looper). In the body of this function you can react accordingly to the play action: Here you would play your 'real' tracks, so the audio-objects you created (which can be identified by an id, which was also determined by you).

2. __onStop: _function___

  This function is comparable to the _onPlay_ - callback. The function takes 1 argument: The _id_ of the track. The only difference is that this function gets called when a track needs to be stopped.


### Adding a track

```javascript
.addTrack( { id, duration } )
```

This method adds a track to the looper, so it can be processed by the algorithm.
__NOTE:__ This method adds the track to the looper, but you need to store your (real) tracks on your own. This has 2 reasons:
1. I wanted this module to store as less state as possible, so that the user can decide how to handle state. Otherwise, there could be some conflicts with a state management library.
2. The looper doesn't work with the real audio objects. That's because everything is run in a separate thread to gain more performance. Therefore, you also have to react on your own to certain events.

It takes on argument, an object with two properties:
- _id:_ The id of the track you want to add. This is needed because later on, if an action is triggred on the track, you need to know which track is really meant. You can decide on your own which id you want to give to your tracks (you could for example use uuid v4).
- _duration_: The duration of the track you want to add in _seconds_. That's the more important part: That's the only information the looper needs to loop your tracks accordingly.

### Removing a track

```javascript
.removeTrack( { id } )
```

This methods removes the track from the looper: So it won't be processed again by the looper. __NOTE:__ It doesn't remove your _real_ track, so you have to remove it by yourself and let the garbage collector do the rest.

It takes one argument, an object with one property:
- _id:_ The id of the track you want to delete. You determined this before when you added the track.

### Playing a track
```javascript
.play( { id } )
```
This method plays a track again if you have stopped it before. __NOTE:__ Per default, a track is played after it's added.

It takes one argument, an object with one property:
- _id:_ The id of the track you want to play. You determined this before when you added the track.

### Stopping a track

```javascript
.stop( { id } )
```
This method prevents a track to be looped again. __NOTE:__ This doesn't mean that if a track is currently playing, that it will be stopped. That's something you have to do on your own.

It takes one argument, an object with one property:
- _id:_ The id of the track you want to prevent from being looped. You determined this before when you added the track.

### Disposing the looper
If you don't need the looper anymore, you should consider disposing it, otherwise the thread will keep running in the background. To do so, just call:

```javascript
.dispose()
```

### Syncing the _virtual_ first track with _real_ first track

That's the more complicated part of this module, it may take some time to understand. But hey: This literally __rocks__ the timing! :musical_note: :fire:

```javascript
.syncFirstTrack(audioObject)
```

- 1. argument:
An Audio-object. For more information read below.

One big problem I encountered during the testing of this module was, unsurprisingly, the timing. There have been latencies up to 300ms. And this problem had two main reasons:
1. The communication between the UI-Thread and the Web Worker instance has been very slow. I read some articles, whereas those two were the ones which helped me most:
  - https://nolanlawson.com/2016/02/29/high-performance-web-worker-messages/
  - https://hacks.mozilla.org/2015/07/how-fast-are-web-workers/

  I fixed this problem by stringifying the message objects I passed between the two threads to JSON and parsing that string at the recipient side. I gained quite a better performance than before, but it was still not acceptable.

2. Over the time, the _real_ first track (so the one in the UI-thread) and the _virtual_ first track (so the one which is used by the looper to sync the tracks) always got out of sync. So the timing couldn't be exact because this parameter is the most important one of the whole looper (have a look at the 'How does it work?' - section). After a good amount of thinking, playing around with different methods and not too less coffee I came up with this idea: Hey, why not syncing them by always passing the actual position of the first track to the Web Worker? And that's what I've done here. You just need to pass the _real_ Audio-object of the first track to this method and the tracks will be kept in sync (as far as it is possible, it reduces the deviation to about ~2-10ms). This method simply uses setInterval to continuously pass the value of the 'currentTime' - property of the Audio-object to the Web Worker. There, this value is used to determine if there's a deviation which will then be corrected.

I hope that now it's clear when and how to use this method.
__NOTE__: Only call this mehod once!
