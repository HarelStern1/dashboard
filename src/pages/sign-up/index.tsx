import { Box, Typography } from "@mui/material";
import SignUpForm from "./components/form";
import StepCard from "./components/step-card";
import usePresenter, { stepCards } from "./presenter";
import S from "./style";
import PanoramaFishEyeIcon from "@mui/icons-material/PanoramaFishEye";

const SignUp = () => {
  const { step, setStep } = usePresenter();

  const cards = stepCards.map((card) => <StepCard key={card.id} card={card} step={step} />);

  return (
    <S.Wrapper>
      <S.Left>
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <PanoramaFishEyeIcon
            sx={{ stroke: "#1247b9", transform: "scale(1.2)", strokeWidth: 1.1 }}
          />
          <Typography variant="h5" fontWeight={600}>
            Sign Up
          </Typography>
        </Box>
        <S.StepCards>{cards}</S.StepCards>
      </S.Left>
      <S.Right>
        <SignUpForm setStep={setStep} />
      </S.Right>
    </S.Wrapper>
  );
};

export default SignUp;
