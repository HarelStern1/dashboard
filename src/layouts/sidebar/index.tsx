import { Box } from "@mui/material";
import S from "./style";

import usePresenter from "./presenter";

const SideBar = () => {
  const { isOpen, toggleSidebar } = usePresenter();

  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Container>
        <S.Toggle onClick={toggleSidebar}>
          <S.ChevronLeftIcon isOpen={isOpen} />
        </S.Toggle>
        <Box></Box>
        <S.Nav></S.Nav>
      </S.Container>
    </S.Wrapper>
  );
};

export default SideBar;
