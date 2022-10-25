import { createStitches, createTheme } from "@stitches/react";

export const { styled, globalCss } = createStitches({
  media: {
    tablet: "(max-width: 768px)",
  },

  theme: {
    fonts: {
      roboto: "Roboto, sans-serif",
    },
    fontSizes: {
      12: "0.75rem",
      14: "0.875rem",
      16: "1rem",
      20: "1.25rem",
      24: "1.5rem",
      40: "2.5rem",
    },
    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    colors: {
      gray200: "#D9D9D9",
      gray300: "#808080",
      gray400: "#333333",
      gray500: "#262626",
      gray600: "#1A1A1A",
      gray700: "#0D0D0D",

      blueDark: "#1E6F9F",
      blue: "#4EA8DE",

      purple: "#8284FA",
    },
    space: {
      4: "0.25rem",
      8: "0.5rem",
      16: "1rem",
      32: "2rem",
      64: "4rem",
    },

    radii: {
      2: "2px",
      8: "8px",
      full: "9999px",
    },
  },
});

export const lightTheme = createTheme({
  colors: {
    gray200: "#D9D9D9",
    gray300: "#808080",
    gray400: "#333333",
    gray500: "#262626",
    gray600: "#1A1A1A",
    gray700: "#0D0D0D",

    blueDark: "#1E6F9F",
    blue: "#4EA8DE",

    purple: "#8284FA",
  },
});
