import * as React from "react";
import {Box, CardHeader, Button, CardContent} from "@material-ui/core";
import Slider from "@material-ui/core/Slider";
import styled from "styled-components";
import {useSynth} from "../hooks/useSynth";

// This whole file isn't used. Just keeping it around as notes from my first experiment
const Sound = (): JSX.Element => {
  const {
    started,
    stopSynth,
    startSynth,
    newWave,
    newFreq,
    newPhase,
    freq,
  } = useSynth();

  return (
    <Container className="App">
      <Box>
        {started ? (
          <Button onClick={stopSynth}>Stop</Button>
        ) : (
          <Button onClick={startSynth}>Play</Button>
        )}
      </Box>

      <Box>
        <Button onClick={(): void => newWave("sawtooth")}>Sawtooth</Button>
        <Button onClick={(): void => newWave("sine")}>Sine</Button>
      </Box>

      <Box>
        <CardHeader title="Freq" />
        <Slider defaultValue={440} min={0} max={1200} onChange={newFreq} />
        <CardContent>{freq}</CardContent>
      </Box>

      <Box>
        <CardHeader title="Phase" />
        <Slider defaultValue={20} min={0} max={100} onChange={newPhase} />
      </Box>
    </Container>
  );
};

export default Sound;

const Container = styled("div")`
  border: 2px solid black;
  border-radius: 5px;
  max-width: 20em;
  padding: 10px;
`;
