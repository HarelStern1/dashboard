import { Box, Typography } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import S from "./style";

interface Card {
  id: number;
  title: string;
  subtitle: string;
}

interface StepCardProps {
  card: Card;
  step: number;
}

const StepCard = ({ card, step }: StepCardProps) => {
  return (
    <S.Wrapper step={step} id={card.id as never}>
      <S.Icon step={step} id={card.id as never} />
      <Box>
        <Typography fontWeight={700}>{card.title}</Typography>
        <Typography>{card.subtitle}</Typography>
      </Box>
    </S.Wrapper>
  );
};

export default StepCard;
