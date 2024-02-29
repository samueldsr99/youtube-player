import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Main = styled.main`
  flex: 1;
  padding: ${({ theme }) => theme.spacing(8, 4)};
  max-width: 1800px;
  margin: 0 auto;
`;