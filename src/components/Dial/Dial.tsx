import React from "react";
import Knob, {KnobProps, composeTwo, useAngleUpdater} from "react-dial-knob";
import {ReactComponent as DialSvg} from "../../assets/dial.svg";
import {Container} from "./styles";

export interface DialProps extends KnobProps {
  style?: React.CSSProperties;
}

export const Dial = (props: DialProps): JSX.Element => {
  const [angle, setAngle] = useAngleUpdater(props.value);
  const angleChangeHandler = composeTwo<number>(setAngle, props.onAngleChange);

  return (
    <Container>
      <Knob
        diameter={props.diameter}
        value={props.value}
        min={props.min}
        max={props.max}
        step={props.step}
        spaceMaxFromZero={props.spaceMaxFromZero}
        ariaLabelledBy={props.ariaLabelledBy}
        ariaValueText={props.ariaValueText}
        knobStyle={{cursor: "pointer", margin: "8px", ...props.knobStyle}}
        onAngleChange={angleChangeHandler}
        onInteractionChange={props.onInteractionChange}
        onValueChange={props.onValueChange}
      >
        <DialSvg
          transform={`rotate(${angle})`}
          style={{transform: `rotate(${angle}deg)`}}
        />
      </Knob>
      {props.children}
    </Container>
  );
};
