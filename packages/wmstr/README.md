# Wmstr - Webaudio Master Channel

## What is Wmstr?
The scope of this module is to manage the input of many audio-channels in one instance.
It's just a simple extension of the [Chnl](https://github.com/scriptify/Chnl) module, with the only difference that you can record all the input to it and output the recorded data directly to a file.

__Attention__: Since the [webaudio-effect-unit](https://github.com/scriptify/webaudio-effect-unit) has reached v.1.1.0, the way how the effects work has changed. Have a look at it's repository for more details. Make sure to do this BEFORE you update. If you have difficulties or questions, just open an issue! I am always glad if I can help. :smile:

## Installation
The package is hosted on npm. You can consume it with any package manager supporting npm packages.
```bash
npm i wmstr
```

## Usage
### Constructing
```javascript
new Wmstr(audioCtx, connectToSpeakers)
```

There are exactly tow arguments.
The first one has to be an AudioContext-object.
The second one is optional, as it has a default value of _true_. I this parameter evaluates to true, this channel will automatically connect to the speakers(audioCtx.destination). If it evaluates to false, the channel won't be connected to the speakers.

Now, you can use this object like a normal Chnl-object and use the extra methods.

### Start recording
```javascript
.startRecording()
```

Simply starts recording the output of this channel.

### Stop recording
```javascript
.stopRecording(filename)
```

This method stops the recording you previously started.
You can pass one parameter, which is __optional__.
If it has a value, the recorded audio gets automatically downloaded with the specified filename.

The method returns a Promise which returns the recorder audio as binary data(blob).
