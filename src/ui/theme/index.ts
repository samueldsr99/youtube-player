import { DefaultTheme } from "styled-components";

import { animations } from "./animations";
import { breakpoints, media } from "./breakpoints";
import { colors } from "./colors";
import { mixins } from "./mixins";
import { spacing } from "./spacing";
import { typography } from "./typography";

export const theme = {
  colors,
  typography,
  breakpoints,
  media,
  spacing,
  mixins,
  animations,
} satisfies DefaultTheme;
