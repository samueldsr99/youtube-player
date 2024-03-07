import { styled } from "styled-components";

export const Root = styled.div`
  width: 400px;
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.spacing(4)};
`;

export const Header = styled.div`
  padding: ${({ theme }) => theme.spacing(3, 4)};
`;

export const Title = styled.h2`
  ${({ theme }) => theme.typography.variants.h2};
  margin: ${({ theme }) => theme.spacing(2, 0)};
`;

export const Subtitle = styled.h2`
  ${({ theme }) => theme.typography.variants.caption};
  color: ${({ theme }) => theme.colors.gray[500]};
  margin: 0;
`;

export const VideosList = styled.div`
  overflow-y: auto;
  height: calc(100vh - 210px);
`;
