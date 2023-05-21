import { FormLabel, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

interface HelperTextProps {
  error: boolean;
}

export default {
  Label: styled(FormLabel)(({ theme }) => ({
    color: theme.palette.grey[600],
    marginBottom: theme.spacing(1),
  })),
  HelperText: styled(Typography)<HelperTextProps>(({ theme, error }) => ({
    color: error ? theme.palette.error.main : theme.palette.common.black,
    fontSize: theme.typography.body2.fontSize,
    marginTop: theme.spacing(0.5),
  })),
};
