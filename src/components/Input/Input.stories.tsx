import React from "react";
import styled from "styled-components";
import {Meta} from "@storybook/react/types-6-0";

import {Input, InputProps} from "./index";

export default {
  title: "Input",
  component: Input,
  argTypes: {
    onChange: {action: "changed"},
  },
} as Meta<InputProps>;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 70px;
`;

const Template = args => {
  return (
    <Container>
      <Input {...args} />
    </Container>
  );
};

export const Primary = Template.bind({});
Primary.args = {
  label: "Testing",
};
