import { css, keyframes } from "styled-components";

const pulseKeyframe = keyframes`
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: .5;
  }
`;

const pulse = css`
  animation: ${pulseKeyframe} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
`;

export const animations = {
  pulse,
};
