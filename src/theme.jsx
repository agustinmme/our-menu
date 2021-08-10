import {extendTheme, theme} from "@chakra-ui/react";
import {mode} from "@chakra-ui/theme-tools";

export default extendTheme({
  styles: {
    global: (props) => ({
      body: {
        backgroundColor: "#f1f5f8",
        padding: {
          base: 0,
          md: 4,
        },
      },
    }),
  }
});