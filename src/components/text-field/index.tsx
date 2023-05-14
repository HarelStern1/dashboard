import { StandardTextFieldProps, TextField as MuiTextField } from "@mui/material";
import { Controller } from "react-hook-form";

interface TextFieldProps extends StandardTextFieldProps {
  name: string;
  control: any;
}

export const TextField = ({ name, control }: TextFieldProps) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue=""
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <MuiTextField
          value={value}
          onChange={onChange}
          error={!!error}
          helperText={error?.message}
        />
      )}
    />
  );
};
