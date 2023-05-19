import { Box } from "@mui/material";
import { PropsWithChildren } from "react";
import SideBar from "../sidebar";
import S from "./style";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <S.Wrapper>
      <SideBar />
      <S.Main component="main">{children}</S.Main>
    </S.Wrapper>
  );
};

export default Layout;
