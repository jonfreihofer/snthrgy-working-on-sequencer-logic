import styled from "styled-components";
import colors from "../../design/colors";

export const DashboardContainer = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
`;

export const LeftPanel = styled.div`
  border-right: 2px solid ${colors.grey};
  min-width: 350px;
`;

export const PlayfieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 24px;
`;
