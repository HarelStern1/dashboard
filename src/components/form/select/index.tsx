import {
  FormControl,
  FormLabel,
  MenuItem,
  Select as MuiSelect,
  SelectProps as MuiSelectProps,
} from "@mui/material";
import { PropsWithChildren } from "react";
import { Control, Controller, FieldValues, Path, PathValue } from "react-hook-form";

interface SelectProps<T extends FieldValues> extends MuiSelectProps {
  name: Path<T>;
  control: Control<T>;
  options: PathValue<T, Path<T>>[];
  label?: string;
}

export const Select = <T extends FieldValues>(props: PropsWithChildren<SelectProps<T>>) => {
  const { name, control, options, label } = props;

  const selectOptions = options.map(({ label, value }) => (
    <MenuItem key={value} value={value}>
      {label}
    </MenuItem>
  ));

  return (
    <Controller
      control={control}
      name={name}
      defaultValue={options[0].value}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <FormControl>
          <FormLabel>{label}</FormLabel>
          <MuiSelect value={value} onChange={onChange} error={!!error}>
            {selectOptions}
          </MuiSelect>
        </FormControl>
      )}
    />
  );
};
