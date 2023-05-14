import { Box } from "@mui/material";
import React, { PropsWithChildren } from "react";
import SideBar from "./sidebar";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <Box sx={{ display: "flex" }}>
      <SideBar />
      {children}
    </Box>
  );
};

export default Layout;
