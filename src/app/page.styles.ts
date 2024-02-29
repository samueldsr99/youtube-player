import styled from "styled-components";

import { media } from "@/ui/theme/breakpoints";

export const Root = styled.div``;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));

  gap: ${({ theme }) => theme.spacing(4)};
  margin-top: ${({ theme }) => theme.spacing(4)};

  ${media.tablet} {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  ${media.laptop} {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;
