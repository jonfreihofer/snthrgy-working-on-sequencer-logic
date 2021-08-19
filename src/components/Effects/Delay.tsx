import React, { useState } from 'react';
import { Dial } from '../Dial/Dial';
import { DialContainer, SectionTitle, SubsectionContainer } from '../sharedStyles';

export const Delay = () => {
  const [time, setTime] = useState(0);
  const [decay, setDecay] = useState(0);

  return (
    <SubsectionContainer>
      <SectionTitle>Delay</SectionTitle>
      <DialContainer>
        <Dial
          value={time}
          diameter={50}
          min={0}
          max={120}
          step={1}
          onValueChange={setTime}
        >Time</Dial>
        <Dial
          value={decay}
          diameter={50}
          min={0}
          max={120}
          step={1}
          onValueChange={setDecay}
        >Decay</Dial>
      </DialContainer>
    </SubsectionContainer>
  )
}