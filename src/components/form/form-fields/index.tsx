import { Box } from "@mui/material";

interface Field {
  name: string;
  label: string;
  component: (...params: any) => JSX.Element;
}

type Row = Field[];

type FormScheme = Row[];

interface FormFieldsProps {
  formScheme: FormScheme;
  control: any;
}

export const FormFields = ({ formScheme, control }: FormFieldsProps) => {
  const renderRow = (row: Row) => {
    const fields = row.map((field) => {
      const { component: Component, ...props } = field;
      return <Component key={props.name} control={control} {...props} />;
    });
    return fields;
  };

  const rows = formScheme.map((row) => renderRow(row));

  return <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>{rows}</Box>;
};
