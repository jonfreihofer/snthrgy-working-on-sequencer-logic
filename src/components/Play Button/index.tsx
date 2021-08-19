import React from "react";
import {PlayStopIcon} from "./styles";
import {SequencerButton} from "../SequencerButton";
import {useSynth} from "../../hooks/useSynth";
import * as Tone from "tone";

export interface ButtonProps {
  isActive?: boolean;
  selected?: boolean;
  isMuted?: boolean;
  handleClick?: () => void;
}

export const PlayButton: React.FC<ButtonProps> = () => {
  const [isActive, setIsActive] = React.useState(false);
  const {startSynth, stopSynth} = useSynth();

  const handleClick = async () => {
    await Tone.start();
    setIsActive(!isActive);

    // This will change. It only starts the selected synth
    // Will need to start the sequencer in the future
    if (!isActive) {
      startSynth();
    } else {
      stopSynth();
    }
  };

  return (
    <SequencerButton handleClick={handleClick}>
      <PlayStopIcon isActive={isActive} />
    </SequencerButton>
  );
};
