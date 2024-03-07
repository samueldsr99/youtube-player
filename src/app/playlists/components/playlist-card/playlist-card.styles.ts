import { Link } from "react-router-dom";
import { styled } from "styled-components";

import BaseXIcon from "@/ui/icons/x-icon";

export const Root = styled.div`
  max-width: 600px;
  border-radius: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(4)};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};

  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: ${({ theme }) => theme.spacing(2)};
`;

export const Name = styled.h2`
  ${({ theme }) => theme.typography.variants.h2};
  margin: 0;
`;

export const PlayAllLink = styled(Link)`
  ${({ theme }) => theme.typography.variants.caption};

  color: ${({ theme }) => theme.colors.primary.default};
`;

export const XIcon = styled(BaseXIcon)`
  width: ${({ theme }) => theme.spacing(4)};
  height: ${({ theme }) => theme.spacing(4)};
`;
