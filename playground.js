/* eslint import/no-extraneous-dependencies: 0 */
/* eslint import/no-unresolved: 0 */
/* eslint import/extensions: 0 */

import Chnl from 'webaudio-chnl';
import Recordy from 'recordy';

const audioCtx = new AudioContext();
const recordy = new Recordy(audioCtx);


const chnl = new Chnl(audioCtx);
const analyser = chnl.getAnalyser();
const data = new Uint8Array(analyser.frequencyBinCount);

recordy.getInput()
  .then(() => recordy.connect(chnl));

/* const osci = audioCtx.createOscillator();
osci.frequency.value = 20;

osci.connect(chnl);*/
chnl.connect(analyser);
analyser.connect(audioCtx.destination);
// chnl.connect(audioCtx.destination);

// Activate effects
chnl.addEffect(`pingPongDelay`);
chnl.addEffect(`tremolo`);

// osci.start();

const body = document.querySelector(`body`);
body.setAttribute(`style`, `padding: 0; margin: 0;`);

function draw() {
  analyser.getByteFrequencyData(data);
  const divW = window.innerWidth / data.length;
  body.innerHTML = ``;
  data.forEach((val) => {
    const div = document.createElement(`div`);
    div.setAttribute(`style`, `width: ${divW}px; height: ${window.innerHeight}px; display: inline-block; background: rgb(${val - 100},${val - 50},${val - 12});`);
    body.appendChild(div);
  });
  window.requestAnimationFrame(draw);
  /* if (osci.frequency.value <= 1000)
    osci.frequency.value += 20;
  else {
    const multi = (Math.random() >= 0.5) ? 1 : -1;
    osci.frequency.value += Math.random() * 10 * multi;
  }*/
}

window.requestAnimationFrame(draw);
