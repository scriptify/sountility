# Webaudio effect units collection

Effects for everyone!

All effects of this collection are based on the [webaudio-effect-unit](https://github.com/scriptify/webaudio-effect-unit) module.
If you want to gain a deeper knowledge on how you can use those effects, have a look at this repository.

__Attention__: Since the [webaudio-effect-unit](https://github.com/scriptify/webaudio-effect-unit) module has reached v1.1.0, the way how to use the effects of the package has changed. Have a look at it's repository for more details!

Here a list of all the effects included in this package:

* Gain
* Chorus
* Delay
* Phaser
* Overdrive
* Compressor
* Lowpass
* Highpass
* Tremolo
* Wahwah
* Bitcrusher
* Moog
* PingPongDelay

## Installation
Through npm:
`npm i webaudio-effect-units-collection -S`

## Module usage
#### Default export
Per default, the module exports the following function:
```
createEffectCollection(audioCtx)
```
_Example_
```javascript
import createEffectCollection from 'webaudio-effect-units-collection';
const audioCtx = new AudioContext();
const { gain, chorus, delay, phaser } = createEffectCollection(audioCtx)
```

This function requires an AudioContext object as its 1° argument.
It returns an object with all effects contained by this package. The property names of this object are equivalent to the effect names.

#### Effect data
If you are using this package, it is likely that you want to include a possiblity to manipulate them via an User Interface.
Therefore, the needed information to accordingly represent those effects in an UI is exported manually (so you could seamlessly integrate it in the application state, if needed).

An array with the name 'EFFECT_DATA' is exported for this purpose.

To understand the following, you should have read the documentation of the [webaudio-effect-unit](https://github.com/scriptify/webaudio-effect-unit) module.

Here's an example of an object contained by this array:

```javascript
{
  name: 'chorus',
  values: [

    {
      name: 'rate',
      options: {
        type: 'range',
        defaultValue: 1.5,
        min: 0.01,
        max: 8,
        step: 0.01
      },
      set: (effectChain, value) => {
        effectChain.chorus.rate = value;
      }
    },

    {
      name: 'feedback',
      options: {
        type: 'range',
        defaultValue: 0.2,
        min: 0,
        max: 1,
        step: 0.01
      },
      set: (effectChain, value) => {
        effectChain.chorus.feedback = value;
      }
    },

    {
      name: 'delay',
      options: {
        type: 'range',
        defaultValue: 0.0045,
        min: 0,
        max: 1,
        step: 0.01
      },
      set: (effectChain, value) => {
        effectChain.chorus.delay = value;
      }
    }

  ]
}
```

If you correctly understood the [webaudio-effect-unit](https://github.com/scriptify/webaudio-effect-unit) module, you should have got it. If it's to unclear, please feel free to open an issue with questions! I am glad if I can help you. :smile:

#### Use just single effects
If you don't want to import all effects, you can also only import single ones. The effect-files are contained in the 'effects' directory.

The exported function to create the EffectUnit follows the following pattern:
__create{EffectName}(audioCtx: AudioContext)__

To just import the data for an effect, the following pattern applies:
__{EffectName}Data__

_Example_
```javascript
import gainData from 'webaudio-effect-units-collection/effects/gain';
import createGain from 'webaudio-effect-units-collection/effects/gain';

const audioCtx = new AudioContext();
const gainEffect = createGain(audioCtx);

gainEffect.setValue('gain', 0.4);

```
