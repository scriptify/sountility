import createEffects from 'webaudio-effect-units-collection';

export default class Chnl {
  input;
  output;
  effects;

  currentGraph = [];

  constructor(audioCtx) {
    this.context = audioCtx;
    this.input = audioCtx.createGain();
    this.output = audioCtx.createGain();
    this.effects = createEffects(audioCtx);
    // Setup initial graph
    this.setupGraph([this.input, this.effects.gain, this.output]);
  }

  setupGraph(graph) {
    // first of all, clear all connections (all nodes but the output)
    for(let i = 0; i < (this.currentGraph.length - 1); i++) {
      const currNode = this.currentGraph[i];
      // Disconnect all outgoing connections
      currNode.disconnect();
    }

    for(let i = 0; i < (graph.length - 1); i++) {
      const currNode = graph[i];
      const nextNode = graph[i + 1];
      currNode.connect(nextNode);
    }

    this.currentGraph = graph;

  }

  addEffect(name) {
    const effect = this.effects[name];

    if(!effect)
      throw new Error(`You tried to add an inexistent effect.`)


    if(!effect.name)
      this.effects[name].name = name;

    // Create new graph: input -> (all effects which are already present in the graph) -> effectToAdd  -> output
    const newGraph = [
      this.input,
      ...this.currentGraph.filter(node => ( node !== this.input && node !== this.output )),
      effect,
      this.output
    ];

    this.setupGraph(newGraph);
  }

  removeEffect(name) {

    this.setupGraph( this.currentGraph.filter( node => node.name !== name ) );

  }

  connect(node) {
    this.output.connect(node);
  }

}

/*const audioCtx = new AudioContext();
const audioElem = new Audio(song);
const audioElem2 = new Audio(song);
const audio = audioCtx.createMediaElementSource(audioElem);
const audio2 = audioCtx.createMediaElementSource(audioElem2);
const chnl = new Chnl(audioCtx);
const chnl2 = new Chnl(audioCtx);

audio.connect(chnl);
chnl.connect(audioCtx.destination);
chnl.addEffect('delay');

audio2.connect(chnl2);
chnl2.connect(audioCtx.destination);

window.setTimeout(() => {
  //audioElem2.play();
}, 500)

audioElem.play();*/

/*
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
*/
