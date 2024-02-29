import { DefaultTheme } from "styled-components";
import { colors } from "./colors";
import { typography } from "./typography";
import { breakpoints, media } from "./breakpoints";
import { spacing } from "./spacing";

export const theme = {
  colors,
  typography,
  breakpoints,
  media,
  spacing,
} satisfies DefaultTheme;
