import theme from "./theme";

export const components = {
  MuiButton: {
    styleOverrides: {
      root: {
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },
      },
    },
    defaultProps: {
      disableRipple: true,
    },
  },
  MuiTextField: {
    styleOverrides: {
      root: {
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderWidth: "1px",
          },
        },
      },
    },
  },
  MuiAutocomplete: {
    defaultProps: {
      slotProps: { paper: { sx: { background: "#fff" } } },
      disableClearable: true,
    },
  },
  MuiMenu: {
    styleOverrides: {
      root: {
        "& .MuiMenu-paper": {
          backgroundColor: "#fff",
        },
      },
    },
  },
  MuiFormHelperText: {
    styleOverrides: {
      root: {
        margin: "4px 0 0 0",
        fontSize: "14px",
      },
    },
  },
  MuiFormLabel: {
    styleOverrides: {
      root: {
        margin: "0 0 8px 0",
      },
    },
  },
};
