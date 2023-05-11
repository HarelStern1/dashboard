import { ThemeProvider as MuiThemeProvider } from "@mui/material";
import { PropsWithChildren } from "react";
import theme from "./theme";

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};

export default ThemeProvider;
