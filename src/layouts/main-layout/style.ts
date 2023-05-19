import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import { Link } from "react-router-dom";

export default {
  Wrapper: styled(Box)(({ theme }) => ({
    display: "flex",
  })),
  Main: styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.common.white,
    width: "100%",
    height: `calc(100vh - ${theme.spacing(2)})`,
    margin: theme.spacing(1, 1, 1, 0),
    borderRadius: theme.spacing(2),
  })),
};
