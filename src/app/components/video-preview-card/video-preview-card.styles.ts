import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Root = styled(Link)`
  max-width: ${({ theme }) => theme.spacing(110)};
  display: block;
`;

export const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  border-radius: ${({ theme }) => theme.spacing(3)};
`;

export const Title = styled.h3`
  ${({ theme }) => theme.typography.variants.h3};
  margin: ${({ theme }) => theme.spacing(2, 0)};

  color: ${({ theme }) => theme.colors.gray[800]};

  ${({ theme }) => theme.mixins.textEllipsis}
`;

export const ChannelName = styled.p`
  ${({ theme }) => theme.typography.variants.body2};
  margin: 0;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Views = styled.p`
  ${({ theme }) => theme.typography.variants.caption};
  margin: ${({ theme }) => theme.spacing(1, 0, 0)};
  color: ${({ theme }) => theme.colors.gray[700]};
`;
