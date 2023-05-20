import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

export default {
  Wrapper: styled(Box)(({ theme }) => ({
    display: "flex",
    height: "100vh",
  })),
  Left: styled(Box)(({ theme }) => ({
    flex: 0.3,
    background: "#edf1f1",
    padding: theme.spacing(6, 5),
  })),
  StepCards: styled(Box)(({ theme }) => ({
    margin: theme.spacing(12, 0),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(4),
  })),
  Right: styled(Box)(({ theme }) => ({
    flex: 0.7,
    background: theme.palette.common.white,
  })),
};
