import { Typography } from "@mui/material";
import SignUpForm from "./components/form";
import StepCard from "./components/step-card";
import usePresenter, { stepCards } from "./presenter";
import S from "./style";

const SignUp = () => {
  const { step, setStep } = usePresenter();

  const cards = stepCards.map((card) => <StepCard key={card.id} card={card} step={step} />);

  return (
    <S.Wrapper>
      <S.Left>
        <Typography variant="h5">Sign Up</Typography>
        <S.StepCards>{cards}</S.StepCards>
      </S.Left>
      <S.Right>
        <SignUpForm setStep={setStep} />
      </S.Right>
    </S.Wrapper>
  );
};

export default SignUp;
