import styled from "styled-components";

export const Root = styled.div`
  max-width: ${({ theme }) => theme.spacing(110)};
`;

export const ImgSkeleton = styled.div`
  width: 100%;
  height: 200px;
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.spacing(3)};

  ${({ theme }) => theme.animations.pulse}
`;

export const TitleSkeleton = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.spacing(50)};
  height: ${({ theme }) => theme.spacing(4)};
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.spacing(1)};
  margin: ${({ theme }) => theme.spacing(2, 0)};

  ${({ theme }) => theme.animations.pulse}
`;

export const ChannelSkeleton = styled.div`
  width: 100%;
  max-width: ${({ theme }) => theme.spacing(30)};
  height: ${({ theme }) => theme.spacing(2)};
  background-color: ${({ theme }) => theme.colors.gray[300]};
  border-radius: ${({ theme }) => theme.spacing(1)};
  margin: ${({ theme }) => theme.spacing(1, 0)};

  ${({ theme }) => theme.animations.pulse}
`;
