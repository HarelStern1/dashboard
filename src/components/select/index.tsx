import { Select as MuiSelect } from "@mui/material";
import { PropsWithChildren } from "react";
import { Controller } from "react-hook-form";

interface SelectProps {
  name: string;
  control: any;
  defaultValue: string;
}

export const Select = ({
  name,
  control,
  defaultValue,
  children,
}: PropsWithChildren<SelectProps>) => {
  return (
    <Controller
      control={control}
      name={name}
      defaultValue={defaultValue}
      render={({ field: { value, onChange }, fieldState: { error } }) => (
        <MuiSelect value={value} onChange={onChange} error={!!error}>
          {children}
        </MuiSelect>
      )}
    />
  );
};
