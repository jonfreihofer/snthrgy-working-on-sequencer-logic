import * as React from "react";
import {Story, Meta} from "@storybook/react/types-6-0";
import {Dial, DialProps} from "./Dial";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 100px;

  span {
    font-size: 24px;
  }
`;

export default {
  title: "Dial",
  component: Dial,
  argTypes: {
    max: {control: {type: "range", min: 1, max: 50, step: 1}},
    defaultValue: {control: {type: "number"}},
  },
} as Meta;

export const DialStory: Story = ({max, defaultValue = 0}) => {
  const [value, setValue] = React.useState(defaultValue);

  return (
    <Container>
      <Dial
        diameter={100}
        min={0}
        max={max}
        step={1}
        value={value}
        onValueChange={setValue}
        ariaLabelledBy={"my-label"}
      />
      <span>{value}</span>
    </Container>
  );
};

DialStory.args = {
  max: 25,
  defaultValue: 30,
};
