import {useAtom} from "jotai";
import React, {useState} from "react";
import {osc2Range} from "../../store/oscillators";
import {Dial} from "../Dial/Dial";
import {
  DialContainer,
  SectionTitle,
  SubsectionContainer,
} from "../sharedStyles";

export default function Osc2() {
  const [freq2Value, setFreq2Value] = useAtom(osc2Range);
  const [osc2Value, setOsc2Value] = useState(0);
  const [osc3Value, setOsc3Value] = useState(0);

  return (
    <SubsectionContainer>
      <SectionTitle>Osc 2</SectionTitle>
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
          value={freq2Value}
          diameter={180}
          min={0}
          max={2000}
          step={1}
          onValueChange={setFreq2Value}
        >
          <div>Frequency</div>
          <div>{freq2Value}</div>
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
