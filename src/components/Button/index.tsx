import React from "react";
import {StyledButton} from "./styles";

export interface ButtonProps {
  onClick: () => void;
}

export const Button: React.FC<ButtonProps> = ({onClick, children}) => {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
};
