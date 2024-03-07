import styled from "styled-components";

import BaseMagnifyingGlassIcon from "@/ui/icons/magnifying-glass-icon";
import { media } from "@/ui/theme/breakpoints";

export const Root = styled.form`
  flex: 1;
  margin-left: ${({ theme }) => theme.spacing(4)};
  max-width: 600px;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.white};

  ${media.tablet} {
    margin-left: ${({ theme }) => theme.spacing(24)};
  }
  ${media.laptop} {
    margin-left: ${({ theme }) => theme.spacing(48)};
  }
`;

export const Input = styled.input`
  ${({ theme }) => theme.typography.variants.body1};
  background-color: ${({ theme }) => theme.colors.gray[50]};
  width: 100%;
  padding: ${({ theme }) => theme.spacing(2, 4)};
  border-radius: 20px 0 0 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  height: ${({ theme }) => theme.spacing(10)};

  &:focus {
    outline: none;
  }
`;

export const SearchButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacing(2, 4)};
  border: none;
  border-radius: 0 20px 20px 0;
  cursor: pointer;
  transition: background-color 0.2s;
  height: ${({ theme }) => theme.spacing(10)};

  &:hover {
    background-color: ${({ theme }) => theme.colors.gray[300]};
  }
`;

export const MagnifyingGlassIcon = styled(BaseMagnifyingGlassIcon)`
  width: ${({ theme }) => theme.spacing(6)};
  height: ${({ theme }) => theme.spacing(6)};

  fill: ${({ theme }) => theme.colors.gray[600]};
`;
