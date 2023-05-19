import { Box } from "@mui/material";
import { useForm } from "react-hook-form";

interface Field {
  name: string;
  label: string;
  component: (...params: any) => JSX.Element;
}

type Row = Field[];

type Scheme = Row[];

interface FormFieldsProps {
  scheme: Scheme;
  control: any;
}

export const FormFields = ({ scheme, control }: FormFieldsProps) => {
  const renderRow = (row: Row) => {
    const fields = row.map((field) => {
      const { component: Component, ...props } = field;
      return <Component key={props.name} control={control} {...props} />;
    });
    return fields;
  };

  const rows = scheme.map((row) => renderRow(row));

  return <Box sx={{ display: "flex", flexDirection: "column", gap: "20px" }}>{rows}</Box>;
};
