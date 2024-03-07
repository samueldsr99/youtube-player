import { Link } from "react-router-dom";
import styled from "styled-components";

import BaseXIcon from "@/ui/icons/x-icon";

export const Root = styled.div<{ $isActive?: boolean }>`
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2, 4)};

  background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.gray[200] : "transparent")};

  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(4)};

  transition: background-color 0.2s;
  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[100]};
  }
`;

export const Thumbnail = styled.img`
  width: 100px;
  height: auto;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.spacing(3)};
`;

export const Data = styled(Link)`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
  flex: 1;
`;

export const Title = styled.p`
  ${({ theme }) => theme.typography.variants.body2};
  margin: ${({ theme }) => theme.spacing(1, 0)};

  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Subtitle = styled.p`
  ${({ theme }) => theme.typography.variants.caption};
  margin: ${({ theme }) => theme.spacing(2, 0)};
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const IconButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${({ theme }) => theme.spacing(1)};
  color: ${({ theme }) => theme.colors.gray[500]};
  transition: color 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`;

export const XIcon = styled(BaseXIcon)`
  width: ${({ theme }) => theme.spacing(4)};
  height: ${({ theme }) => theme.spacing(4)};
`;
