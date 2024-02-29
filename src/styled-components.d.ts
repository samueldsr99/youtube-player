import { breakpoints, media } from "./ui/theme/breakpoints";
import { colors } from "./ui/theme/colors";
import { mixins } from "./ui/theme/mixins";
import { spacing } from "./ui/theme/spacing";
import { typography } from "./ui/theme/typography";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: typeof colors;
    typography: typeof typography;
    breakpoints: typeof breakpoints;
    media: typeof media;
    spacing: typeof spacing;
    mixins: typeof mixins;
  }
}
