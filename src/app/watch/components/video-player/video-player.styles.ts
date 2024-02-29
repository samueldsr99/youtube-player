import styled from "styled-components";

export const Root = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Iframe = styled.iframe`
  border: none;
  width: 100%;
  aspect-ratio: 16 / 9;

  border-radius: ${({ theme }) => theme.spacing(6)};
`;
