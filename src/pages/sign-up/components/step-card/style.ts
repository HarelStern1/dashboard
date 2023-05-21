import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

interface WrapperProps {
  step: number;
  cardId: number;
}

interface IconProps {
  step: number;
  cardId: number;
}

export default {
  Wrapper: styled(Box, {
    shouldForwardProp: (prop) => prop !== "step" && prop !== "id",
  })<WrapperProps>(({ theme, step, cardId }) => ({
    transition: "all 0.3s",
    display: "flex",
    alignItems: "flex-start",
    gap: theme.spacing(2),
    color: step === cardId ? theme.palette.common.black : "#8f98a6",
  })),
  Icon: styled(TaskAltIcon, {
    shouldForwardProp: (prop) => prop !== "step" && prop !== "id",
  })<IconProps>(({ theme, step, cardId }) => ({
    color: step === cardId ? "#1247b9" : cardId < step ? "rgba(18, 71, 185, 0.5)" : "inherit",
  })),
};
