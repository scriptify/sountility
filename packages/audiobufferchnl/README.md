# audiobufferchnl
## audiobufferchnl = BufferSourceNode + chnl

This package extends the chnl module and adds the possibility to turn a webaudio BufferSourceNode into a chnl.
This adds a lot of advantages. For further information, have a look at [chnl](../chnl/README.md).

__audiobufferchnl is a part of the sountility collection!__

## Methods

### Constructor
```javascript
new AudioBufferChnl(audioCtx, bufferSourceNode)
```

To create a new instance, use the constructor like this.
The first parameter _audioCtx_ must be an _AudioContext_ object.
The second parameter _bufferSourceNode_ must be a BufferSourceNode object.

### Change the BufferSourceNode
```javascript
.setBufferSourceNode(bufferSourceNode)
```

## Accessing the BufferSourceNode
To directly gain access the BufferSourceNode object, use the _bufferSourceNode_ field.

```javascript
.bufferSourceNode
```

## Example
```javascript
const audioCtx = new AudioContext();
const buffer = audioCtx.createBuffer(2, audioCtx.sampleRate * 2.0, audioCtx.sampleRate);
const sourceNode = audioCtx.createBufferSource();
sourceNode.buffer = buffer;

const bufferChnl = new AudioBufferChnl(sourceNode, audioCtx);
// Do something with the bufferChnl
```
