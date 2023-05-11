import { Controller, Control } from "react-hook-form";
import { Autocomplete, TextField, AutocompleteProps as MuiAutocompleteProps } from "@mui/material";

interface AutocompleteOption {
  label: string;
  value: string;
}

interface AutocompleteProps extends Omit<MuiAutocompleteProps<any, any, any, any>, "renderInput"> {
  control: Control<any>;
  name: string;
  label: string;
  options: AutocompleteOption[];
}

export const AutocompleteField = ({
  control,
  name,
  label,
  options,
  ...props
}: AutocompleteProps) => {
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Autocomplete
          options={options}
          getOptionLabel={(option) => option.label}
          onChange={(_, newValue) => onChange(newValue?.value || "")}
          value={options.find((option) => option.value === value) || null}
          renderInput={(params) => <TextField {...params} label={label} variant="outlined" />}
          {...props}
        />
      )}
    />
  );
};
