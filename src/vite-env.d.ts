import { breakpoints, media } from "./ui/theme/breakpoints";
import { colors } from "./ui/theme/colors";
import { spacing } from "./ui/theme/spacing";
import { typography } from "./ui/theme/typography";

/// <reference types="vite/client" />

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof colors;
    typography: typeof typography;
    breakpoints: typeof breakpoints;
    media: typeof media;
    spacing: typeof spacing;
  }
}