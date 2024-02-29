export const breakpoints = {
  laptop: "1440px",
  tablet: "768px",
  phone: "375px",
};

export const media = {
  laptop: `@media (min-width: ${breakpoints.laptop})`,
  tablet: `@media (min-width: ${breakpoints.tablet})`,
  phone: `@media (min-width: ${breakpoints.phone})`,
};
