import { MenuItem, Select as MuiSelect } from "@mui/material";
import { PropsWithChildren } from "react";
import { Controller } from "react-hook-form";

interface SelectProps {
  name: string;
  control: any;
  options: any[];
}

export const Select = ({ name, control, options }: PropsWithChildren<SelectProps>) => {
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
        <MuiSelect value={value} onChange={onChange} error={!!error}>
          {selectOptions}
        </MuiSelect>
      )}
    />
  );
};
