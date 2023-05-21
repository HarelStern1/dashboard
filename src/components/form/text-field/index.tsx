import {
  StandardTextFieldProps,
  TextField as MuiTextField,
  FormControl,
  FormLabel,
} from "@mui/material";
import { Control, Controller, FieldValues, Path, PathValue } from "react-hook-form";

interface TextFieldProps<T extends FieldValues> extends StandardTextFieldProps {
  name: Path<T>;
  control: Control<T>;
  label: string;
}

export const TextField = <T extends FieldValues>(props: TextFieldProps<T>) => {
  const { name, control, label } = props;
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <Controller
        control={control}
        name={name}
        defaultValue={"" as PathValue<T, Path<T>>}
        render={({ field: { value, onChange }, fieldState: { error } }) => (
          <MuiTextField
            value={value}
            onChange={onChange}
            error={!!error}
            helperText={error?.message}
          />
        )}
      />
    </FormControl>
  );
};
