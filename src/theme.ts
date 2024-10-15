import { extendTheme } from "@mui/joy/styles";

declare module "@mui/joy/styles" {
  // No custom tokens found, you can skip the theme augmentation.
}

const theme = extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          "50": "#f5f2ef",
          "100": "#e2d8cf",
          "200": "#cfbfb0",
          "300": "#bca590",
          "400": "#a98b70",
          "500": "#8f7156",
          "600": "#6f5843",
          "700": "#4f3f30",
          "800": "#30261d",
          "900": "#100d0a",
        },
      },
    },
    dark: {
      palette: {
        primary: {
          "50": "#f5f2ef",
          "100": "#e2d8cf",
          "200": "#cfbfb0",
          "300": "#bca590",
          "400": "#a98b70",
          "500": "#8f7156",
          "600": "#6f5843",
          "700": "#4f3f30",
          "800": "#30261d",
          "900": "#100d0a",
        },
      },
    },
  },
});

export default theme;
