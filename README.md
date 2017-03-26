# sountility
### a collection of useful utility libraries for the webaudio-api

This repository contains many different packages which I created in order to use them in my audio software projects. Initially, those packages were all split and had there own repository. But as you can probably immagine, it's a pain to maintain them in that way. As soon as I realized that, I tried to find a way how I could manage them more easily. And sountility is a good answer for me.

## Packages
### Here's a list of all packages with a short description.
#### webaudio-chnl
I needed something with a LOT of audio effects integrated which can be manipulated in many different aspects. And I needed to use this in many different ways: Every native AudioNode should be able to connect to it as it would be a normal AudioNode, but also other Chnls should be able to connect to another Chnl.
So I could simply and intuitively create audio graphs with a set of effects.
No matter if I connect a song, mic input or even a synthesizer.
#### webaudio-effect-unit
Sometimes you want to include some effects or other audioprocessors in an audio graph which can be enabled and disabled.
E.g. a lowpass which can be toggled by the user.
This is currently not directly possible with the Web Audio API.
So The effect unit does this for you.
Additionally, when you create an audio effect with the EffectUnit, you always define clear interfaces which manipulate the effect. Together with some metadata you provide, this can be very powerful, especially if you have a set of effects and a User Interface where the values of those effects should be editable.
#### webaudio-effect-units-collection
An effects collection based on the webaudio-effect-unit.
#### audiobufferchnl
This package extends the chnl module and adds the possibility to turn a webaudio BufferSourceNode into a chnl.
#### audiochnl
It's an extension of the chnl module: This module is made for playing, pausing, stopping and manipulating Audio-objects.
#### audiolooper
An audiolooper let's you loop your audiotracks in a very simple and intuitive way.
The looping algorithm keeps the tracks automatically in sync.
#### recordy
This module abstracts away the logic needed to record audio in your browser.
Since it's based on the chnl module, a lot of effects can be added to the input.
#### soundcyclejs
This library combines all of the modules of the __sountility__ collection and creates a full-featured looping library.
#### wmstr
The scope of this module is to manage the input of many audio-channels in one instance.
It's just a simple extension of the chnl module, with the only difference that you can record all the input to it and output the recorded data directly to a file.
#### wrecorder
This is a fork of mattdiamonds recorderjs. Due the fact that he dropped support on this project, i forked my own copy to have the possibility to fix bugs and add customizations.
