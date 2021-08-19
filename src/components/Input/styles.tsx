import TextField from "@material-ui/core/TextField";
import colors from "../../design/colors";
import styled from "styled-components";

export const StyledTextField = styled(TextField)`
  label.Mui-focused {
    color: ${colors.mainBlue};
  }

  .MuiInput-underline:after {
    border-bottom-color: ${colors.mainBlue};
  }

  .MuiOutlinedInput-root {
    margin-bottom: 40px;
    width: 300px;
    border-width: 3px !important;

    fieldset {
      border-color: ${colors.mainBlue} !important ;
      border-width: 3px !important;
    }
    &:hover fieldset {
      border-color: ${colors.mainBlue};
    }
    .Mui-focused fieldset {
      border-color: ${colors.mainBlue};
    }
  }
`;
