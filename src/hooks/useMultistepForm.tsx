import { useState } from "react";
import { FormFields } from "../components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

interface Field {
  name: string;
  label: string;
  options?: { label: string; value: string }[];
  component: (...params: any) => JSX.Element;
}

type Row = Field[];

type FieldsScheme = Row[];

export type MultiStepScheme = FieldsScheme[];

interface UseMultistepFormProps {
  multiStepScheme: MultiStepScheme;
  validationScheme: any;
}

export const useMultistepForm = ({ multiStepScheme, validationScheme }: UseMultistepFormProps) => {
  const { control, trigger, handleSubmit } = useForm<yup.InferType<typeof validationScheme>>({
    resolver: yupResolver(validationScheme),
    mode: "onChange",
  });
  const [step, setStep] = useState<number>(0);

  const next = async () => {
    const fieldsToTrigger = multiStepScheme[step].flatMap((fieldGroup) =>
      fieldGroup.map((field) => field.name)
    );
    const isSuccess = await trigger(fieldsToTrigger);
    if (!isSuccess) return;
    setStep((prev) => (prev < multiStepScheme.length - 1 ? prev + 1 : prev));
  };

  const back = () => setStep((prev) => (prev > 0 ? prev - 1 : prev));

  return {
    currentStep: <FormFields scheme={multiStepScheme[step]} control={control} />,
    next,
    back,
    handleSubmit,
    isFirst: step === 0,
    isLast: step === multiStepScheme.length - 1,
    step,
  };
};
