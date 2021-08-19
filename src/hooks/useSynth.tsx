import React from "react";
import { useAtom } from "jotai";
import { synthStartedAtom, frequencyAtom, rhythmAtom } from "../store/synth";
import { selectedTrackAtom } from "../store/tracks";
import * as Tone from "tone";
import { osc1Range } from "../store/oscillators";

const useControlSynth = (synth) => {
  const [freq] = useAtom(osc1Range);

  synth.set({ frequency: freq });
};

export const useSynth = () => {
  const [rhythm] = useAtom(rhythmAtom);
  const [selectedTrack] = useAtom(selectedTrackAtom);
  useControlSynth(selectedTrack.synth);

  const [started, setStarted] = useAtom(synthStartedAtom);
  const [freq, setFreq] = useAtom(frequencyAtom);

  const newFreq = (_: React.ChangeEvent<unknown>, value: number): void => {
    selectedTrack.synth.frequency.value = value;
    setFreq(value);
  };

  const newWave = (newType: Tone.ToneOscillatorType): void => {
    selectedTrack.synth.type = newType;
  };

  const startSynth = (): void => {
    const osc = selectedTrack.synth;
    setStarted(true);
    Tone.Transport.start();
    // repeated event every 8th note
    Tone.Transport.scheduleRepeat((time) => {
      // use the callback time to schedule events
      osc.start(time).stop(time + 0.1);
    }, `${rhythm}n`);
    // selectedTrack.synth.start(); commented out just for now, to test out sequencer functionality
  };
  const stopSynth = (): void => {
    setStarted(false);
    Tone.Transport.stop();
    // selectedTrack.synth.stop(); todo: trying to figure out how to connect these events
  };

  return {
    startSynth,
    stopSynth,
    newWave,
    newFreq,
    started,
    freq,
  };
};
