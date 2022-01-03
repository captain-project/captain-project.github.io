import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme({
  components: {
    Text: {
      baseStyle: (props: any) => ({
        color: mode("gray.600", "whiteAlpha.900")(props),
      }),
    },
    Heading: {
      baseStyle: (props: any) => ({
        color: mode("gray.600", "whiteAlpha.900")(props),
      }),
    },
  },
  styles: {
    global: {
      a: {
        color: "green.600",
        transition: "color 0.2s linear",
        _hover: {
          color: "green.500",
        },
        _active: {
          color: "green.400",
        },
      },
    },
  },
});

export default theme;
