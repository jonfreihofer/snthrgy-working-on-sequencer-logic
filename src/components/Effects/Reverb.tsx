import React, { useState } from 'react';
import { Dial } from '../Dial/Dial';
import { DialContainer, SectionTitle, SubsectionContainer } from '../sharedStyles';

export const Reverb = () => {
  const [mix, setMix] = useState(0);
  const [delay, setDelay] = useState(0);
  return (
    <SubsectionContainer>
      <SectionTitle>Reverb</SectionTitle>
      <DialContainer>
        <Dial
          value={mix}
          diameter={50}
          min={0}
          max={120}
          step={1}
          onValueChange={setMix}
        >Mix</Dial>
        <Dial
          value={delay}
          diameter={50}
          min={0}
          max={120}
          step={1}
          onValueChange={setDelay}
        >Delay</Dial>
      </DialContainer>
    </SubsectionContainer>
  )
}