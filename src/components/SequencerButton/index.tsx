import React from "react";
import {StyledButton} from "./styles";

export interface ButtonProps {
  isActive?: boolean;
  selected?: boolean;
  isMuted?: boolean;
  handleClick?: () => void;
}

export const SequencerButton: React.FC<ButtonProps> = ({
  isActive,
  selected,
  isMuted,
  handleClick,
  children,
}) => {
  if(children) {
    return (
      <StyledButton
        onClick={handleClick}
        selected={selected}
        isMuted={isMuted}
        isActive={isActive}
      >
        {children}
      </StyledButton>
    
    );
  }
  return <StyledButton />
};
