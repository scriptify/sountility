import { functionsToValues, bindMethodsToValues, objToArray, filterValue } from './util';


class EffectUnit {

  audioCtx;
  name;
  effectChain;
  values;
  isEffectUnit = true;
  wasInitialized = false;

  effectGain;
  directGain;

  output;
  input;

  options;

  constructor(options = { name: ``, effectChain: {}, values: [] }, audioCtx) {
    /*
      The options object must have the following structure:
      {
        name: The name of the effect to identify it later
        effectChain: The object which contains the audioprocessors,
        values: An array which contains the available values for this effect and the according methods to edit them
      }
    */

    if (!audioCtx)
      throw new Error(`The AudioContext specified (3° parameter) is not defined!`);

    this.name = name;
    this.audioCtx = audioCtx;
    this.options = options;

    this.effectGain = this.audioCtx.createGain(); // Set to 1 ==> Effect is on; Set to 0 ==> Effect is off
    this.directGain = this.audioCtx.createGain(); // Set to 0 ==> Effect is on; Set to 1 ==> Effect is off

    this.output = this.audioCtx.createGain();
    this.input = this.audioCtx.createGain();

    this.input.connect(this.effectGain);
    this.input.connect(this.directGain);

    // Connect direct gain to ouput
    this.directGain.connect(this.output);
  }

  static connectNodes(nodeA, nodeB) {
    if (nodeB.isEffectUnit || nodeB.input)
      nodeA.connect(nodeB.input);
    else
      nodeA.connect(nodeB);
  }

  init() {
    if (this.wasInitialized)
      return;

    this.effectChain = functionsToValues(this.options.effectChain);

    // Give all 'set'-methods of the specified values the effectChain as the first parameter
    this.values = bindMethodsToValues(this.options.values, this.effectChain);

    // Now execute all 'set'-methods of the according values which have a 'defaultValue'-field in their 'options'-object
    this.values.forEach((value) => {
      if (value.options.defaultValue)
        value.set(value.options.defaultValue);
    });

    this.setupEffectChain();
    this.wasInitialized = true;
  }

  enable() {
    this.init();
    this.effectGain.gain.value = 1;
    this.directGain.gain.value = 0;
  }

  disable() {
    this.effectGain.gain.value = 0;
    this.directGain.gain.value = 1;
  }

  connect(node) {
    if (node.isEffectUnit || node.input)
      this.output.connect(node.input);
    else {
      // Common audioNode
      this.output.connect(node);
    }
  }

  setValue(valueName, value) {
    filterValue(this.values, valueName).set(value);
  }

  getValueOptions(valueName) {
    return filterValue(this.values, valueName).options;
  }

  setupEffectChain() {
    // Connect the effectChain
    const effects = objToArray(this.effectChain);

    // Effect chain not empty?
    if (effects.length >= 1) {
      // Connect effect gain to first effect
      EffectUnit.connectNodes(this.effectGain, effects[0]);
      // Connect all other effect to the following effect
      for (let i = 0; i < (effects.length - 1); i++)
        EffectUnit.connectNodes(effects[i], effects[i + 1]);

      // Connect the last effect to the output gain
      effects[effects.length - 1].connect(this.output);
    }
  }

  disconnect() {
    // Disconnect all outgoing connections
    this.output.disconnect();
  }

}

export default EffectUnit;
