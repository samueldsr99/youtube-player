import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Main = styled.main`
  max-height: 100vh;
  overflow: auto;
  flex: 1;
  max-width: 1800px;
  margin: 0 auto;
`;

export const Content = styled.div`
  padding: ${({ theme }) => theme.spacing(8, 4)};
`;

export const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  padding: ${({ theme }) => theme.spacing(2, 4)};
  background-color: ${({ theme }) => theme.colors.white};
`;
