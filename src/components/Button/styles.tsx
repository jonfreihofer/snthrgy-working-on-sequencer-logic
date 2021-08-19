import styled from "styled-components";
import MaterialButton from "@material-ui/core/Button";
import colors from "../../design/colors";

export const StyledButton = styled(MaterialButton)`
  background-color: white;
  border: 3px solid ${colors.mainBlue};
  border-radius: 12px;
`;
