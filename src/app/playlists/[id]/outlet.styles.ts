import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.spacing(6)};
`;

export const Content = styled.div`
  flex: 1;
`;
