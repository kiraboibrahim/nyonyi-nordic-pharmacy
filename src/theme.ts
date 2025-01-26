
import { extendTheme } from '@mui/joy/styles';


declare module '@mui/joy/styles' {
  // No custom tokens found, you can skip the theme augmentation.
}


const theme = extendTheme({
  "colorSchemes": {
    "light": {
      "palette": {
        "primary": {
          "50": "#f1f8e9",
          "100": "#dcedc8",
          "200": "#c5e1a5",
          "300": "#aed581",
          "400": "#9ccc65",
          "500": "#8bc34a",
          "600": "#7cb342",
          "700": "#689f38",
          "800": "#558b2f",
          "900": "#33691e"
        }
      }
    },
    "dark": {
      "palette": {
        "primary": {
          "50": "#f1f8e9",
          "100": "#dcedc8",
          "200": "#c5e1a5",
          "300": "#aed581",
          "400": "#9ccc65",
          "500": "#8bc34a",
          "600": "#7cb342",
          "700": "#689f38",
          "800": "#558b2f",
          "900": "#33691e"
        }
      }
    }
  }
})

export default theme;