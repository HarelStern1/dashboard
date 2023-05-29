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

export type MultiStepFormScheme = FieldsScheme[];

interface UseMultistepFormProps {
  multiStepFormScheme: MultiStepFormScheme;
  validationScheme: any;
}

export const useMultistepForm = ({
  multiStepFormScheme,
  validationScheme,
}: UseMultistepFormProps) => {
  const { control, trigger, handleSubmit } = useForm<yup.InferType<typeof validationScheme>>({
    resolver: yupResolver(validationScheme),
    mode: "onChange",
  });
  const [step, setStep] = useState<number>(0);

  const next = async () => {
    const fieldsToTrigger = multiStepFormScheme[step].flatMap((fieldGroup) =>
      fieldGroup.map((field) => field.name)
    );
    const isSuccess = await trigger(fieldsToTrigger);
    if (!isSuccess) return;
    setStep((prev) => (prev < multiStepFormScheme.length - 1 ? prev + 1 : prev));
  };

  const back = () => setStep((prev) => (prev > 0 ? prev - 1 : prev));

  return {
    currentStep: <FormFields formScheme={multiStepFormScheme[step]} control={control} />,
    next,
    back,
    handleSubmit,
    isFirst: step === 0,
    isLast: step === multiStepFormScheme.length - 1,
    step,
  };
};
