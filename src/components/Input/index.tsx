import React, {ChangeEvent, ReactElement} from "react";
import {StyledTextField} from "./styles";
export interface InputProps {
  label?: string;
  type?: string;
  onChange?: (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export function Input({label, type, onChange}: InputProps): ReactElement {
  return (
    <StyledTextField
      type={type}
      onChange={onChange}
      label={label}
      variant="outlined"
    />
  );
}
