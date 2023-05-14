import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from "react-router-dom";

interface WrapperProps {
  isOpen: boolean;
}

interface IconProps {
  isOpen: boolean;
}

export default {
  Wrapper: styled(Box, {
    shouldForwardProp: (prop) => prop !== "isOpen",
  })<WrapperProps>(({ theme, isOpen }) => ({
    height: `calc(100vh - ${theme.spacing(2)})`,
    width: isOpen ? "140px" : "80px",
    background: theme.palette.primary.dark,
    margin: theme.spacing(1),
    borderRadius: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    transition: "all 0.3s",
  })),
  ChevronLeftIcon: styled(ChevronLeftIcon, {
    shouldForwardProp: (prop) => prop !== "isOpen",
  })<IconProps>(({ theme, isOpen }) => ({
    transition: "all 0.2s",
    transform: isOpen ? "none" : "rotate(180deg)",
  })),
  Container: styled(Box)(({ theme }) => ({
    position: "relative",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    height: "100%",
    gap: theme.spacing(10),
  })),
  Nav: styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: theme.spacing(2),
    padding: theme.spacing(1, 0),
    width: `calc(100% - ${theme.spacing(2)})`,
  })),
  Toggle: styled(Box)(({ theme }) => ({
    position: "absolute",
    top: theme.spacing(2),
    right: `-${theme.spacing(2)}`,
    background: theme.palette.primary.light,
    display: "flex",
    alignItems: "center",
    borderRadius: theme.spacing(10),
    padding: theme.spacing(0.75),
    cursor: "pointer",

    "> svg": {
      color: theme.palette.common.white,
    },
  })),
};
