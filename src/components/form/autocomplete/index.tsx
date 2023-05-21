import { FormControl, FormLabel, Autocomplete as MuiAutocomplete, Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { Control, Controller, FieldValues, Path, PathValue } from "react-hook-form";
import { Option } from "../types";
import S from "./style";

interface AutocompleteProps<T extends FieldValues> {
  control: Control<T>;
  name: Path<T>;
  options: Option[];
}

export const Autocomplete = <T extends FieldValues>(props: AutocompleteProps<T>) => {
  const { control, options, name } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
        return (
          <FormControl>
            <FormLabel>huguy</FormLabel>
            <MuiAutocomplete
              value={value ? options.find((option) => value === option.value) ?? null : null}
              getOptionLabel={(option) => option.label}
              onChange={(_, newValue) => onChange(newValue ? newValue.value : null)}
              options={options}
              renderInput={(params) => <TextField error={!!error} {...params} inputRef={ref} />}
            />
            {error && <S.HelperText error={!!error}>{error.message}</S.HelperText>}
          </FormControl>
        );
      }}
    />
  );
};
