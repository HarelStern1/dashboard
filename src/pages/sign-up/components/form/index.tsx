import { Box, Button } from "@mui/material";
import usePresenter, { SignUpFormProps } from "./presenter";
import { Stepper } from "../../../../components";

const SignUpForm = (props: SignUpFormProps) => {
  const { currentStep, next, back, handleSubmit, isFirst, isLast, onSubmit, step } =
    usePresenter(props);

  return (
    <Box
      sx={{ padding: "100px", width: "400px", height: "800px" }}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
    >
      {currentStep}
      {!isLast && <Button onClick={next}>Next</Button>}
      {!isFirst && <Button onClick={back}>Back</Button>}
      {isLast && (
        <Button variant="contained" type="submit">
          Submit
        </Button>
      )}
      <Box sx={{ marginBottom: "auto" }}>
        <Stepper steps={3} currentStep={step} />
      </Box>
    </Box>
  );
};

export default SignUpForm;
