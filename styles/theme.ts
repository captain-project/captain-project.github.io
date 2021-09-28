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
});

export default theme;
