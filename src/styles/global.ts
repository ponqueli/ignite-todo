import { globalCss } from "./theme";

export const globalStyles = globalCss({
  "*, *::before, *::after": {
    boxSizing: "border-box",
    margin: 0,
    padding: 0,
  },

  ":focus": {
    outline: "1px solid $blue",
  },

  html: {
    "@tablet": {
      fontSize: "87.5%",
    },
  },

  "#body": {
    WebkitFontSmoothing: "antialiased",
    minHeight: "100vh",
    backgroundColor: "$gray700",
    color: "$gray300",
  },

  "body, input, textarea, button": {
    fontFamily: "$roboto",
    fontWeight: "$regular",
  },
});
