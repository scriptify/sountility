# Chnl - one channel, all effects.

## Why would I ever want a _Chnl_?

I needed something with a LOT of audio effects integrated which can be manipulated in many different aspects. And I needed to use this in many different ways: Every native AudioNode should be able to connect to it as it would be a normal AudioNode, but also other Chnls should be able to connect to another Chnl.
So I could simply and intuitively create audio graphs with a set of effects.
No matter if I connect a song, mic input or even a synthesizer.

__Therefore I created _Chnl_.__

__Attention__: Since the [webaudio-effect-unit](https://github.com/scriptify/webaudio-effect-unit) has reached v.1.1.0, the way how the effects work has changed. Have a look at it's repository for more details. Make sure to do this __BEFORE__ you update. If you have difficulties or question, just open an issue! I am always glad if I can help. :smile:
## Installation
Via npm
```
npm i webaudio-chnl -S
```


## Usage
It's really simple. And intuitive.
### Creating a __Chnl__
You can create a new _Chnl_ instance by constructing the _Chnl_-class with your _AudioContext object_ as the 1° parameter.
```javascript
new Channel(audioCtx)
```

### Effects
You have access to __a lot of effects__.
Under the hood, _Chnl_ uses the [webaudio-effect-units-collection](https://github.com/scriptify/webaudio-effect-units-collection) module. So you have access to a lot of effects which can be enabled and disabled.

You can access the effects with the _effects_ property of your _Chnl_ instance.


_Example_
```javascript
const channel = new Chnl(audioCtx);
const {
  gain,
  chorus,
  delay,
  phaser,
  overdrive,
  compressor,
  lowpass,
  highpass,
  tremolo,
  wahwah,
  bitcrusher,
  moog,
  pingPongDelay
} = channel.effects;

gain.setValue('gain', 0.55);

delay.addEffect('delay');
delay.setValue('feedback', 0.2);
```

### Connecting
#### Connect to a Chnl
You can connect any _normal AudioNode_ to a _Chnl_:
```javascript
const channel = new Chnl(audioCtx);
const gain = audioCtx.createGain();
gain.connect(channel);
```
But you can also connect a _Chnl_ to a _normal AudioNode_:
```javascript
const channel = new Chnl(audioCtx);
const gain = audioCtx.createGain();
channel.connect(gain);
```
You can even connect one _Chnl_ to another one:
```javascript
const channel1 = new Chnl(audioCtx);
const channel2 = new Chnl(audioCtx);
channel1.connect(channel2);
```
Have fun connecting!

### Activating an effect (since v0.0.6)
Per default, no effect is connected in the interior audio graph. In previous versions, this was the case. I decided to revise the way how effects are used. Because if all effects are initially actively connected, there's way more needless audio processing (also if the effects are initially turned off). Therefore I decided to connect the effects only if they are explicitly needed.

__TLDR:__ Before using an effect, you need to activate it. When activating an effect, the whole audiograph will be rebuilt.

__Note:__ The 'gain'-effect is already activated by default.

_Example_:
```javascript
const chnl = new Chnl(audioCtx);
chnl.addEffect('delay');
chnl.addEffect('chorus');
chnl.effects.delay.setValue('delayTime', 500);
```

### Disabling an effect (since v0.0.6)
Since you can activate an effect, it's no surprise that you can also disable the same effect. When you disable an effect, it will be removed from the audiograph to prevent needless processing.
_Example_:
```javascript
const chnl = new Chnl(audioCtx);
chnl.addEffect('delay');
chnl.effects.delay.setValue('delayTime', 500);
chnl.removeEffect('chorus');
```

### Final example
This a bit more advanced example, which connects an oscillator to a Chnl and applies some effects.
```javascript
const audioCtx = new AudioContext();
const chnl = new Chnl(audioCtx);

const osci = audioCtx.createOscillator();
osci.frequency.value = 300;

osci.connect(chnl);
chnl.connect(audioCtx.destination);

// Activate effects
chnl.addEffect('highpass');
chnl.addEffect('bitcrusher');

chnl.effects.gain.setValue('gain', 0.2);
chnl.effects.highpass.setValue('frequency', 500);
chnl.effects.bitcrusher.setValue('bits', 4);

osci.start();
```
