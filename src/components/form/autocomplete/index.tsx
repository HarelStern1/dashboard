import { FormControl, Autocomplete as MuiAutocomplete, TextField } from "@mui/material";
import { Control, Controller, FieldValues, Path } from "react-hook-form";
import { Option } from "../types";
import S from "./style";

interface AutocompleteProps<T extends FieldValues> {
  name: Path<T>;
  control: Control<T>;
  options: Option[];
  label?: string;
}

export const Autocomplete = <T extends FieldValues>(props: AutocompleteProps<T>) => {
  const { name, control, options, label } = props;
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value, ref }, fieldState: { error } }) => {
        return (
          <FormControl>
            <S.Label>{label}</S.Label>
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
