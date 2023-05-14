import { Box, Button, MenuItem } from "@mui/material";
import { TextField, Select, Autocomplete } from "../../components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    country: yup.string().required(),
    movie: yup.string().required(),
  })
  .required();

type FormData = yup.InferType<typeof schema>;

const countries = [
  {
    label: "Israel",
    value: "israel",
  },
  {
    label: "United States",
    value: "usa",
  },
];

const movies = [
  {
    label: "Pulp Fiction",
    id: "best movie ever",
  },
  {
    label: "Fight Club",
    id: "Dont talk about it",
  },
];

const formFields = [
  { name: "firstName", component: TextField },
  { name: "lastName", component: TextField },
  { name: "country", options: countries, component: Select },
  { name: "movie", options: countries, component: Autocomplete },
];

const Home = () => {
  const { control, handleSubmit } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data: FormData) => console.log(data);

  const fields = formFields.map((field) => {
    const { name, options, component: Component } = field;

    return <Component key={name} name={name} control={control} options={options || []} />;
  });

  return (
    <Box component="form" sx={{ padding: "50px" }} onSubmit={handleSubmit(onSubmit)}>
      {fields}
      <Button type="submit">Submit</Button>
    </Box>
  );
};

export default Home;
