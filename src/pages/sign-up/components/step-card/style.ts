import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

interface WrapperProps {
  step: number;
  id: number;
}

interface IconProps {
  step: number;
  id: number;
}

export default {
  Wrapper: styled(Box, {
    shouldForwardProp: (prop) => prop !== "step" && prop !== "id",
  })<WrapperProps>(({ theme, step, id }) => ({
    transition: "all 0.2s",
    display: "flex",
    alignItems: "flex-start",
    gap: theme.spacing(2),
    color: step === id ? theme.palette.common.black : "#8f98a6",
  })),
  Icon: styled(TaskAltIcon, {
    shouldForwardProp: (prop) => prop !== "step" && prop !== "id",
  })<IconProps>(({ theme, step, id }) => ({
    color: step === id ? "#1247b9" : id < step ? "rgba(18, 71, 185, 0.5)" : "inherit",
  })),
};
