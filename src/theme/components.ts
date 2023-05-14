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
};
