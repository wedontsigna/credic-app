import { extendTheme } from "native-base";

const theme = extendTheme({
  colors: {
    // Add new color
    primary: {
      50: "#E3F2F9",
      100: "#C5E4F3",
      200: "#A2D4EC",
      300: "#7AC1E4",
      400: "#47A9DA",
      500: "#54d2d2",
      600: "#007AB8",
      700: "#006BA1",
      800: "#005885",
      900: "#1a2948",
    },
    secondary: {
      500: "#1a2948",
    },
  },
  components: {
    Button: {
      variants: {
        rounded: ({ colorScheme }: any) => {
          return {
            bg: `${colorScheme}.500`,
            rounded: "full",
          };
        },
      },
    },
  },
});

export default theme;
