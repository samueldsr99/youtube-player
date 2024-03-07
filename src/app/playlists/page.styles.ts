import styled from "styled-components";

export const Root = styled.div``;

export const PageTitle = styled.h1`
  ${({ theme }) => theme.typography.variants.h1};
`;

export const PlaylistsList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  & > * + * {
    margin-top: ${({ theme }) => theme.spacing(2)};
  }
`;

export const PlaylistItem = styled.li`
  ${({ theme }) => theme.typography.variants.body1};
`;

export const EmptyState = styled.div`
  margin-top: ${({ theme }) => theme.spacing(12)};
  ${({ theme }) => theme.typography.variants.body1};
  text-align: center;

  color: ${({ theme }) => theme.colors.gray[600]};
`;
