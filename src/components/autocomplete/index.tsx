import { Controller, Control, Path, FieldValues } from "react-hook-form";
import TextField from "@mui/material/TextField";
import { Autocomplete as MuiAutocomplete } from "@mui/material";

interface AutocompleteProps<
  O extends { value: string; label: string },
  TField extends FieldValues
> {
  control: Control<any>;
  name: string;
  options: O[];
  placeholder?: string;
}

export const Autocomplete = <
  O extends { value: string; label: string },
  TField extends FieldValues
>(
  props: AutocompleteProps<O, TField>
) => {
  const { control, options, name } = props;
  return (
    <Controller
      name={name}
      control={control}
      defaultValue={options[0].value}
      render={({ field, fieldState: { error } }) => {
        const { onChange, value, ref } = field;
        console.log(error);
        return (
          <MuiAutocomplete
            value={
              value
                ? options.find((option) => {
                    return value === option.value;
                  }) ?? null
                : null
            }
            getOptionLabel={(option) => {
              return option.label;
            }}
            onChange={(_: any, newValue) => {
              onChange(newValue ? newValue.value : null);
            }}
            options={options}
            renderInput={(params) => (
              <TextField {...params} label={props.placeholder} inputRef={ref} />
            )}
          />
        );
      }}
    />
  );
};
