import { FormHelperText, FormLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

interface HelperTextProps {
  error: boolean;
}

export default {
  HelperText: styled(FormHelperText)<HelperTextProps>(({ theme, error }) => ({
    color: error ? theme.palette.error.main : theme.palette.common.black,
    fontSize: theme.typography.body2.fontSize,
    marginTop: theme.spacing(0.5),
  })),
};
