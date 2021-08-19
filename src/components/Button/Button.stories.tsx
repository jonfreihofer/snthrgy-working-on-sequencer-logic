import React from "react";
import {Meta} from "@storybook/react/types-6-0";
import {Button} from "./index";
import {ReactComponent as Arrow} from "../../assets/arrow.svg";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    children: {control: "string"},
  },
} as Meta;

export const ButtonBase = args => <Button {...args} />;
ButtonBase.args = {
  children: "Test",
};

export const ButtonWithArrow = args => <Button {...args} />;
ButtonWithArrow.args = {
  children: <Arrow />,
};
