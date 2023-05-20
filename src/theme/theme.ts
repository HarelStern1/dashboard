import { createTheme } from "@mui/material";
import { palette, components, typography } from ".";
import "@fontsource/montserrat/300.css";
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/500.css";
import "@fontsource/montserrat/700.css";

const theme = createTheme({
  palette,
  typography,
  spacing: 8,
  breakpoints: {},
  zIndex: {},
  transitions: {},
  components,
});

export default theme;
