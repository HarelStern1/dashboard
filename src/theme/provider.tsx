import { ThemeProvider as MuiThemeProvider, CssBaseline, GlobalStyles } from "@mui/material";
import { PropsWithChildren } from "react";
import theme from "./theme";

const styles = {
  "*": {
    boxSizing: "border-box",
  },
};

const ThemeProvider = ({ children }: PropsWithChildren) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles styles={styles} />
      {children}
    </MuiThemeProvider>
  );
};

export default ThemeProvider;
