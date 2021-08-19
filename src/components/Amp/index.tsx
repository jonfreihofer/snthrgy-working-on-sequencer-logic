import React, {useState} from "react";
import {Dial} from "../Dial/Dial";
import {SectionContainer, SectionTitle} from "../sharedStyles";

export default function Amp() {
  const [env, setEnvValue] = useState(0);
  const [attack, setAttackValue] = useState(0);
  const [decay, setDecayValue] = useState(0);
  const [sustain, setSustainValue] = useState(0);
  const [release, setReleaseValue] = useState(0);

  return (
    <>
      <SectionTitle>Amp</SectionTitle>
      <SectionContainer>
        <Dial
          value={env}
          diameter={50}
          min={0}
          max={120}
          step={1}
          onValueChange={setEnvValue}
        >
          Env
        </Dial>
        <Dial
          value={attack}
          diameter={50}
          min={0}
          max={120}
          step={1}
          onValueChange={setAttackValue}
        >
          A
        </Dial>
        <Dial
          value={decay}
          diameter={50}
          min={0}
          max={120}
          step={1}
          onValueChange={setDecayValue}
        >
          D
        </Dial>
        <Dial
          value={sustain}
          diameter={50}
          min={0}
          max={120}
          step={1}
          onValueChange={setSustainValue}
        >
          S
        </Dial>
        <Dial
          value={release}
          diameter={50}
          min={0}
          max={120}
          step={1}
          onValueChange={setReleaseValue}
        >
          R
        </Dial>
      </SectionContainer>
    </>
  );
}
