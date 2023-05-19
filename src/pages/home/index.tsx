import { Box, Button, Typography } from "@mui/material";
import { MultiStepScheme, useMultistepForm } from "../../hooks/useMultistepForm";
import { Select, TextField } from "../../components";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const multiStepScheme: MultiStepScheme = [
  [
    [{ name: "firstName", label: "First Name", component: TextField }],
    [{ name: "lastName", label: "Last Name", component: TextField }],
  ],
  [
    [{ name: "country", label: "Country", component: TextField }],
    [{ name: "movie", label: "Movie", component: TextField }],
  ],
];

const validationScheme = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    country: yup.string().required(),
    movie: yup.string().required(),
  })
  .required();

type FormData = yup.InferType<typeof validationScheme>;

const Home = () => {
  const { currentStep, next, back, handleSubmit } = useMultistepForm({
    multiStepScheme,
    validationScheme,
  });

  const onSubmit = (data: FormData) => console.log(data);

  return (
    <Box sx={{ padding: "100px" }} component="form" onSubmit={handleSubmit(onSubmit)}>
      {currentStep}
      <Button onClick={next}>Next</Button>
      <Button onClick={back}>Back</Button>
      <Button variant="contained" type="submit">
        Submit
      </Button>
    </Box>
  );
};

export default Home;
