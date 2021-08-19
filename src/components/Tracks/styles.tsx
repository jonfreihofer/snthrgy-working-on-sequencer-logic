import styled from "styled-components";
import {Button, Divider} from "@material-ui/core";

export const TracksWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AddTrackStyles = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 16px;
`;

export const TrackWrapper = styled.div<{isSelected?: boolean}>`
  display: flex;
  justify-content: space-between;
  padding: 16px 24px 16px 16px;
  border: ${({isSelected}) => (isSelected ? "2px solid pink" : null)};
`;

export const ThickDivider = styled(Divider)`
  height: 2px;
`;

export const AddTrackButton = styled(Button)`
  font-size: 20px;
`;
