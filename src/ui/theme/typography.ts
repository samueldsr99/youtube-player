const fontSizes = {
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "3xl": "1.875rem",
};

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  extrabold: 800,
};

const variants = {
  h1: {
    fontSize: fontSizes["3xl"],
    fontWeight: fontWeights.bold,
  },
  h2: {
    fontSize: fontSizes["2xl"],
    fontWeight: fontWeights.bold,
  },
  h3: {
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.bold,
  },
  h4: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.bold,
  },
  h5: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.semibold,
  },
  h6: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.medium,
  },
  body1: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.regular,
  },
  body2: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.medium,
  },
  button: {
    fontSize: "1rem",
    fontWeight: fontWeights.semibold,
  },
  caption: {
    fontSize: "0.75rem",
    fontWeight: fontWeights.regular,
  },
};

export const typography = {
  fontFamily: "Roboto, sans-serif",
  fontSizes,
  fontWeights,
  variants,
};
