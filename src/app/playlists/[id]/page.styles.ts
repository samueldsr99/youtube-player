import styled from "styled-components";

export const Root = styled.div``;

export const Title = styled.h2`
  ${({ theme }) => theme.typography.variants.h2};
  margin: ${({ theme }) => theme.spacing(2, 0)};
`;

export const EmptyContainer = styled.div`
  margin-top: ${({ theme }) => theme.spacing(20)};
  display: flex;
  justify-content: center;
`;
