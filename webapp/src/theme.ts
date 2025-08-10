// src/theme.ts
import { extendTheme, ThemeConfig } from "@chakra-ui/react";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const theme = extendTheme({
  config,
  colors: {
    brand: {
      50: "#fffbea",
      100: "#fff3c4",
      200: "#fce588",
      300: "#fadb5f",
      400: "#f7c948",
      500: "#f0b429",
      600: "#de911d",
      700: "#cb6e17",
      800: "#b44d12",
      900: "#8d2b0b",
    },
  },
  fonts: {
    heading: "Inter, sans-serif",
    body: "Inter, sans-serif",
  },
});

export default theme;
