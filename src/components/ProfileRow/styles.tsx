import styled from "styled-components";
import colors from "../../design/colors";

export const ProfileRowStyles = styled.div`
  display: grid;
  grid-template-columns: max-content 1fr;
  grid-column-gap: 12px;
  border-bottom: 2px solid ${colors.grey};
  padding: 12px 16px;
  align-items: center;
`;
