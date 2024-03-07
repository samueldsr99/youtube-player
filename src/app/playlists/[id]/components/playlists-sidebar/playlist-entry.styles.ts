import { Link } from "react-router-dom";
import styled from "styled-components";

export const Root = styled(Link)<{ $isActive?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2, 4)};

  background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.gray[200] : "transparent")};

  display: flex;
  gap: ${({ theme }) => theme.spacing(2)};

  ${({ theme }) => theme.mixins.textEllipsis}
`;

export const Thumbnail = styled.img`
  width: 100px;
  height: auto;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.spacing(3)};
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.variants.body2};
  margin: ${({ theme }) => theme.spacing(1, 0)};
`;

export const Subtitle = styled.p`
  ${({ theme }) => theme.typography.variants.caption};
  margin: ${({ theme }) => theme.spacing(2, 0)};
  color: ${({ theme }) => theme.colors.gray[500]};
`;
