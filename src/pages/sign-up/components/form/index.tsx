import { Box, Button } from "@mui/material";
import usePresenter, { SignUpFormProps } from "./presenter";

const SignUpForm = (props: SignUpFormProps) => {
  const { currentStep, next, back, handleSubmit, isFirst, isLast, onSubmit } = usePresenter(props);

  return (
    <Box
      sx={{ padding: "100px", width: "400px" }}
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
    </Box>
  );
};

export default SignUpForm;
