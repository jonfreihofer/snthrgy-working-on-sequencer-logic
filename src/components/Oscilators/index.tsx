import React from "react";
import { SectionContainer } from "../sharedStyles";
import Osc1 from "./Osc1";
import Osc2 from "./Osc2";

export default function Oscilators() {
  return (
    <SectionContainer>
      <Osc1 />
      <Osc2 />
    </SectionContainer>
  );
}
