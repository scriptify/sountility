# webaudio effect unit
Simply create effects or other audio processors with the Web Audio API which can be enabled and disabled.

## Why?
Sometimes you want to include some effects or other audioprocessors in an audio graph which can be enabled and disabled.
E.g. a lowpass which can be toggled by the user.
This is currently not directly possible with the Web Audio API.
So The effect unit does this for you.
Additionally, when you create an audio effect with the EffectUnit, you always define clear interfaces which manipulate the effect. Together with some metadata you provide, this can be very powerful, especially if you have a set of effects and a User Interface where the values of those effects should be editable.
But more on that later.

## How?
It's quite simple.
### Constructor
The constructor of the EffectUnit has the following signature:

    EffectUnit(options: Object, audioCtx: AudioContext)

##### The options object
The options object needs to have the following structure:
```javascript
{
  name: String,
  effectChain: Object,
  values: Array
}
```
The fields of the options-object are clarified in details below.

##### The name field
In the name field, you can specify the name of the EffectUnit you create. This is optional but recommended for a possible identification later on.

##### The effectChain field
Each member of the effectChain-object will be a part of the audio graph, so they need to be a valid AudioNode. Note: You can also specify a function which returns one.
See the example at the bottom for more details.

##### The values field
The values of an EffectUnit represent the values an EffectUnit has and how they can be edited. Besides fixed values which are essential for the effect (e.g. the frequency of a highpass), you can invent your own values (you could e.g. add a isMuted value to a GainNode).

The values field __must__ be an array. This array must contain objects with the following structure:

```javascript

{
  name: String,
  options: {
    type: String
    defaultValue: ANY,
    [...]
  },
  set: function(effectChain, value)
}

```

- __name__: Specify the name of the value
- __options__: With this object, you define the metadata of this value, which can later on be used e.g. by the User Interface. The whole object, with an exception of the __defaultValue__ field, does not impact the functioning of the EffectUnit: It has just a representational value. The __defaultValue__ field is the only field which makes a difference, because the __set__-function will initially be called with the __defaultValue__ as an argument.
- __set__: Here, the actual function, which manipulates the value, gets implemented. This function receives the __effectChain__ as the 1° argument and the value, which needs to be set, as the 2° argument. Based on the __effectChain__-object you created before and the value, implement this function.

#### The AudioContext
As the 3° argument you need to specify the AudioContext you want to be used.

### Methods
Now, there are a few simple methods which can be executed on an EffectUnit-object:

#### Enabling

    .enable()
  Enable the effect unit.

#### Disabling

    .disable()
  Disable the effect unit.

#### Connecting from an EffectUnit

    .connect(node: AudioNode || EffectUnit)
  Connect the EffectUnit to an AudioNode or to another EffectUnit-object.

#### Connecting to an EffectUnit

Ok, good to know. But how can I connect a simple AudioNode to the EffectUnit?
That's also quite simple.
Just use the input field of your EffectUnit-object.

    anAudioNode.connect( anEffectUnit.input  );

#### Disconnecting all outputs

This method let's you disconnect all outgoing connections of an EffectUnit.

    .disconnect();

#### Setting a value

    .setValue(valueName:String, value:ANY)

That's quite easy: If you want to edit a value of an EffectUnit, specify the name you defined before and the value you want to set.

#### Getting the options-object of a value

    .getValueOptions(valueName:String)

Sometimes you want to get the options object of an EffectUnit. That's how to do it!

## Installation
Simple. Just type:

    npm i webaudio-effect-unit -S

## Example
Here a more advanced exampled to clarify everything:

```javascript
import EffectUnit from 'webaudio-effect-unit'; // Import the effect unit

const main = () => {
  const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

  // Create a gain-EffectUnit
  const gainEff = new EffectUnit({
    name: 'gain',
    values: [
      {
        name: 'isMuted',
        options: {
          type: 'single',
          defaultValue: true
        },
        set: (effectChain, val) => {
          effectChain.gain.gain.value = val ? 0 : 0.6;
        }
      },
      {
        name: 'gain',
        options: { // Those values are all just optional metadata for you (e.g. a UI-component could use this to know how to configure the range slider)
          type: 'range',
          defaultValue: 1, // The only value which could be of real interest here: If this field is present, the 'set'-method gets executed once with it's value
          min: 0,
          max: 0.6,
          step: 0.1
        },
        set: (effectChain, val) => {
          effectChain.gain.gain.value = val;
        }
      }
    ],
    effectChain: {
      gain: audioCtx.createGain()
    }
  }, audioCtx);

  const hpEff = new EffectUnit({
    name: 'highpass',
    effectChain: {
      hp: () => {
        /*
          Because some setup is needed to create a highpass-filter, a function,
          which returns a valid AudioNode, can be used.
        */
        const hp = audioCtx.createBiquadFilter();
        hp.type = 'highpass';
        return hp;
      }
    },
    values: [
      {
        name: 'frequency',
        options: {
          type: 'range',
          defaultValue: 0,
          min: 0,
          max: 200,
          step: 10
        },
        set: (effectChain, value) => {
          effectChain.hp.frequency.value = value;
        }
      }
    ]
  }, audioCtx);

  const osci = audioCtx.createOscillator();
  osci.type = 'square';
  osci.frequency.value = 200;
  osci.connect(gainEff.input);

  gainEff.connect( hpEff );
  hpEff.connect( audioCtx.destination );

  osci.start();

  const hpOptions = hpEff.getValueOptions('frequency');
  let currHpFreq = hpOptions.defaultValue;
  let up = true;
  window.setInterval(() => {
    if(up)
      currHpFreq += hpOptions.step;
    else
      currHpFreq -= hpOptions.step;

    if(currHpFreq >= hpOptions.max)
      up = false;

    if(currHpFreq <= hpOptions.min)
      up = true;

  if(currHpFreq % 100 === 0)
    gainEff.setValue('isMuted', true);
  else
    gainEff.setValue('isMuted', false);

    hpEff.setValue('frequency', currHpFreq);
  }, 100);

};

main();
```
