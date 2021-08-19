import styled from "styled-components";

export const SectionContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 5px 24px;
`;

export const DialContainer = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-auto-flow: column;
  grid-column-gap: 32px;
`;

export const SectionTitle = styled.h4`
  text-align: center;
`;

export const SubsectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
