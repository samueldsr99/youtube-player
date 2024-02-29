import { CSSObject } from "styled-components";

const textEllipsis: CSSObject = {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
};

export const mixins = {
  textEllipsis,
};
