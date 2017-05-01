import SoundCycle from './soundcycle';
/*
const soundcycle = new SoundCycle();

soundcycle.startRecording();

window.setTimeout(() => {
  soundcycle.stopRecording()
    .then(res => {
      soundcycle.setCurrentLane(res.laneId);
      soundcycle.setMode(soundcycle.MODES.ADD_TO_LANE);
      soundcycle.startRecording();

      window.setTimeout(() => {
        soundcycle.stopRecording()
          .then(res1 => {
            soundcycle.stopTrack({ id: res.chnlId });
            soundcycle.stopTrack({ id: res1.chnlId });
            window.setTimeout(() => {
              console.log('play again')
              soundcycle.playTrack({ id: res.chnlId });
            }, 1000);
          });
      }, 1000);
    });
}, 1000);*/

export default SoundCycle;
