import { Box, Button } from "@mui/material";
import { FieldValues, useForm } from "react-hook-form";
import { AutocompleteField } from "../../components";

const options = [
  {
    label: "Israel",
    value: "israel",
  },
  {
    label: "United States",
    value: "usa",
  },
];

const Home = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: FieldValues) => console.log(data);

  return (
    <Box>
      <form onSubmit={handleSubmit(onSubmit)}>
        <AutocompleteField
          control={control}
          name={"country"}
          label={"Country"}
          options={options}
          sx={{ width: "300px" }}
        />
        <Button type="submit">submit</Button>
      </form>
    </Box>
  );
};

export default Home;
