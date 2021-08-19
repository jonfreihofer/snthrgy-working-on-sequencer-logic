import * as React from "react";
import {
  AddTrackButton,
  AddTrackStyles,
  ThickDivider,
  TracksWrapper,
  TrackWrapper,
} from "./styles";
import {Dial} from "../Dial/Dial";
import {tracksAtom, selectedTrackAtom} from "../../store/tracks";
import {useAtom} from "jotai";

const Track = ({track}) => {
  const [, setSelectedTrack] = useAtom(selectedTrackAtom);

  return (
    <TrackWrapper
      onClick={() => setSelectedTrack(track.id)}
      isSelected={track.isSelected}
      key={track.id}
    >
      {track.name}
      <Dial diameter={40} value={1} min={1} max={2} step={1} />
    </TrackWrapper>
  );
};

export default function Tracks() {
  const [tracks] = useAtom(tracksAtom);
  return (
    <TracksWrapper>
      <AddTrackStyles>
        <div>Add track</div>
        <AddTrackButton>+</AddTrackButton>
      </AddTrackStyles>
      <ThickDivider />
      {tracks.map(track => (
        <Track key={track.id} track={track} />
      ))}
      <ThickDivider />
    </TracksWrapper>
  );
}
