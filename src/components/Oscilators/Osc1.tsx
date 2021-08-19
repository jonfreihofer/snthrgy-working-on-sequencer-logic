import {useAtom} from "jotai";
import React, {useState} from "react";
import {osc1Range} from "../../store/oscillators";
import {Dial} from "../Dial/Dial";
import {
  DialContainer,
  SectionTitle,
  SubsectionContainer,
} from "../sharedStyles";

export default function Osc1() {
  // Move states into atoms
  const [freq1Value, setFreq1Value] = useAtom(osc1Range);
  const [osc2Value, setOsc2Value] = useState(0);
  const [osc3Value, setOsc3Value] = useState(0);

  return (
    <SubsectionContainer>
      <SectionTitle>Osc 1</SectionTitle>
      <DialContainer>
        <Dial
          value={osc2Value}
          diameter={50}
          min={0}
          max={120}
          step={1}
          onValueChange={setOsc2Value}
        >
          Wave
        </Dial>
        <Dial
          value={freq1Value}
          diameter={180}
          min={0}
          max={2000}
          step={1}
          onValueChange={setFreq1Value}
        >
          <div>Frequency</div>
          <div>{freq1Value}</div>
        </Dial>
        <Dial
          value={osc3Value}
          diameter={50}
          min={0}
          max={120}
          step={1}
          onValueChange={setOsc3Value}
        >
          Pan
        </Dial>
      </DialContainer>
    </SubsectionContainer>
  );
}
