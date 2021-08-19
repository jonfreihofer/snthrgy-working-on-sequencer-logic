import React from "react";
import {Story, Meta} from "@storybook/react/types-6-0";
import {SequencerButton, ButtonProps} from "./index";

export default {
  title: "SequencerButton",
  component: SequencerButton,
  argTypes: {
    children: {control: "string"},
    selected: {control: "boolean"},
    isActive: {control: "boolean"},
  },
} as Meta;

const Template: Story<ButtonProps> = args => <SequencerButton {...args} />;

export const ButtonBase = Template.bind({});
ButtonBase.args = {
  children: <div>"string"</div>,
  selected: "boolean",
  isActive: "boolean",
  isMuted: "boolean",
};
