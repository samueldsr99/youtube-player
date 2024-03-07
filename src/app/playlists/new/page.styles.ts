import { motion } from "framer-motion";
import styled from "styled-components";

export const Root = styled.div``;

export const MotionCard = styled(motion.div)`
  margin: 0 auto;
  max-width: 600px;
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  padding: ${({ theme }) => theme.spacing(4)};
  border-radius: ${({ theme }) => theme.spacing(3)};

  transition: box-shadow 0.3s;
  &:focus-within {
    box-shadow: 0 1px 2px 2px ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const PageTitle = styled.h1`
  ${({ theme }) => theme.typography.variants.h1}
`;

export const ErrorDescription = styled.p`
  ${({ theme }) => theme.typography.variants.caption};
  color: ${({ theme }) => theme.colors.error.default};
`;

export const FormFields = styled.div`
  margin-top: ${({ theme }) => theme.spacing(4)};
`;

export const FormActions = styled.div`
  margin-top: ${({ theme }) => theme.spacing(8)};

  display: flex;
  justify-content: flex-end;
`;

export const StackedCardsContainer = styled(motion.div)`
  margin-top: ${({ theme }) => theme.spacing(28)};
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const PlaylistMockAnimatedCard = styled(motion.div)<{
  $color: "primary" | "secondary" | "gray" | "purple" | "blue";
  $zIndex?: number;
}>`
  display: grid;
  place-items: center;
  color: white;

  width: 124px;
  height: 190px;
  border-radius: 12px;
  background-color: ${({ theme, $color }) => theme.colors[$color].default};

  position: absolute;
  margin: auto;
  transition: transform 0.3s;
  z-index: ${({ $zIndex }) => $zIndex};

  transform-origin: bottom right;
`;
