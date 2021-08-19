import * as React from "react";
import { SectionContainer } from "../sharedStyles";
import { Delay } from "./Delay";
import { Reverb } from "./Reverb";


export default function Effects() {
  return (
    <SectionContainer>
      <Reverb />
      <Delay />
    </SectionContainer>
  )
}
