import Recordy from 'recordy';
import AudioLooper from 'audiolooper';
import Wmstr from 'wmstr';
import AudioBufferChnl from 'audiobufferchnl';
import AudioChnl from 'audiochnl';

import { v4 } from 'uuid';

export default class SoundCycle {

  recorder;
  wmstr;
  audioCtx;

  MODES = {
    ADD_TO_LANE: `ADD_TO_LANE`,
    NEW_LANE: `NEW_LANE`,
    SINGLE_SEQUENCE: `SINGLE_SEQUENCE`
  };

  tracks = new Map();
  loopers = new Map();
  currentLane = ``;
  currentMode;
  projectName;

  masterChnlId = `MASTER_ID`;
  recorderChnlId = `RECORDER_ID`;

  constructor(readyCb = () => {}) {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    this.audioCtx = audioCtx;
    this.recorder = new Recordy(audioCtx);
    this.recorder.getInput()
      .then(readyCb);

    this.wmstr = new Wmstr(audioCtx);
    this.currentMode = this.MODES.NEW_LANE;

    this.tracks.set(this.masterChnlId, this.wmstr);
    this.tracks.set(this.recorderChnlId, this.recorder);

    this.wmstr.connect(this.audioCtx.destination);
  }

  setProjectName(name) {
    this.projectName = name;
  }

  getProjectName() {
    if (!this.projectName) {
      const date = new Date();
      return `project-${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}.wav`;
    }

    return `${this.projectName}.wav`;
  }

  getModes() {
    return this.MODES;
  }

  getCurrentMode() {
    return this.currentMode;
  }

  setMode(mode) {
    this.currentMode = mode;
  }

  setCurrentLane(laneId) {
    this.currentLane = laneId;
  }

  startRecording() {
    this.recorder.startRecording();
  }

  async stopRecording() {
    const newTrackId = v4();

    switch (this.currentMode) {

      case this.MODES.NEW_LANE: {
        // Add new looper
        const looper = new AudioLooper(this.audioCtx);
        const audioBuffer = await this.recorder.stopRecording({ type: `buffer` });
        const newLooperId = v4();

        looper.addTrack({
          id: newTrackId,
          audioBuffer,
          trackAdded: (bufferSourceNode) => {
            const audioBufferChnl = new AudioBufferChnl(this.audioCtx, bufferSourceNode);
            audioBufferChnl.connect(this.wmstr);

            this.tracks.set(newTrackId, {
              chnl: audioBufferChnl,
              looperId: newLooperId
            });

            this.loopers.set(newLooperId, looper);
          } });

        return {
          chnlId: newTrackId,
          laneId: newLooperId
        };
      }

      case this.MODES.SINGLE_SEQUENCE: {
        const audioObj = await this.recorder.stopRecording({ type: `audio` });
        const audioChnl = new AudioChnl(this.audioCtx, audioObj);
        audioChnl.connect(this.wmstr);

        this.tracks.set(newTrackId, {
          chnl: audioChnl
        });

        return {
          chnlId: newTrackId
        };
      }

      case this.MODES.ADD_TO_LANE: {
        if (!this.loopers.has(this.currentLane))
          throw new Error(`You tried to access an inexistent lane!`);

        const looper = this.loopers.get(this.currentLane);

        const audioBuffer = await this.recorder.stopRecording({ type: `buffer` });

        looper.addTrack({
          id: newTrackId,
          audioBuffer,
          trackAdded: (bufferSourceNode) => {
            const audioBufferChnl = new AudioBufferChnl(this.audioCtx, bufferSourceNode);
            audioBufferChnl.connect(this.wmstr);

            this.tracks.set(newTrackId, {
              chnl: audioBufferChnl,
              looperId: this.currentLane
            });
          } });

        return {
          chnlId: newTrackId
        };
      }

      default:
        throw new Error(`Invalid method!`);

    }
  }

  stopTrack({ id }) {
    if (!this.tracks.has(id))
      throw new Error(`You tried to stop an inexistent track!`);

    const track = this.tracks.get(id);

    if (!track.looperId)
      track.stop();
    else {
      const looper = this.loopers.get(track.looperId);
      looper.pauseTrack({ id });
    }
  }

  playTrack({ id }) {
    if (!this.tracks.has(id))
      throw new Error(`You tried to play an inexistent track!`);

    const track = this.tracks.get(id);

    if (!track.looperId)
      track.play();
    else {
      const looper = this.loopers.get(track.looperId);
      looper.playTrack({ id });
    }
  }

  removeTrack(id) {
    if (!this.tracks.has(id))
      throw new Error(`You tried to remove an inexistent track!`);

    const track = this.tracks.get(id);
    const looper = this.loopers.get(track.looperId);
    looper.removeTrack({ id });
    this.tracks.delete(id);
  }

  removeLane(looperId) {
    if (!this.loopers.has(looperId))
      throw new Error(`You tried to remove an inexistent lane!`);

    const looper = this.loopers.get(looperId);

    // Search all tracks of looper and delete them
    this.tracks.forEach(({ track, trackId }) => {
      if (track.looperId === looperId) {
        looper.removeTrack({ id: trackId });
        this.tracks.delete(trackId);
      }
    });
  }

  enableEffect({ chnlId, effectName }) {
    const chnlToEdit = this.getChnlById(chnlId);
    chnlToEdit.addEffect(effectName);
    this.getEffectByName(chnlToEdit, effectName).enable();
  }

  disableEffect({ chnlId, effectName }) {
    const chnlToEdit = this.getChnlById(chnlId);
    chnlToEdit.removeEffect(effectName);
    this.getEffectByName(chnlToEdit, effectName).disable();
  }

  setEffectValue({ chnlId, effectName, valueType, value }) {
    const chnlToEdit = this.getChnlById(chnlId);

    this.getEffectByName(chnlToEdit, effectName).setValue(valueType, value);
  }

  getMasterChnlId() {
    return this.masterChnlId;
  }

  getRecorderChnlId() {
    return this.recorderChnlId;
  }

  startProjectRecording() {
    this.wmstr.startRecording();
  }

  stopProjectRecording() {
    this.wmstr.stopRecording(this.getProjectName());
  }

  /* INTERIOR FUNCTIONALITIES */

  getChnlById(id) {
    if (id === this.masterChnlId)
      return this.wmstr;
    else if (id === this.recorderChnlId)
      return this.recorder;

    if (!this.tracks.has(id))
      throw new Error(`You tried to access an inexistent track!`);
    return this.tracks.get(id).chnl;
  }

  static getEffectByName(chnl, effectName) {
    if (chnl.effects[effectName])
      return chnl.effects[effectName];

    throw new Error(`You tried to access an inexistent effect!`);
  }

}
