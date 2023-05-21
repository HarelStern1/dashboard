import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface HelperTextProps {
  error: boolean;
}

export default {
  HelperText: styled(Typography)<HelperTextProps>(({ theme, error }) => ({
    color: error ? theme.palette.error.main : theme.palette.common.black,
    fontSize: theme.typography.body2.fontSize,
  })),
};
