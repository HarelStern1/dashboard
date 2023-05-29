import { useEffect } from "react";
import { Autocomplete, Select, TextField } from "../../../../components";
import { MultiStepFormScheme, useMultistepForm } from "../../../../hooks/useMultistepForm";
import * as yup from "yup";

export const multiStepFormScheme: MultiStepFormScheme = [
  [
    [{ name: "firstName", label: "First Name", component: TextField }],
    [
      {
        name: "lastName",
        label: "Last Name",
        component: Select,
        options: [{ label: "Label1", value: "value1" }],
      },
    ],
    [
      {
        name: "email",
        label: "Email Address",
        component: Autocomplete,
        options: [{ label: "Label1", value: "value1" }],
      },
    ],
  ],
  [
    [{ name: "password", label: "Password", component: TextField }],
    [{ name: "confirmPassword", label: "Confirm Password", component: TextField }],
  ],
  [
    [{ name: "country", label: "Country", component: TextField }],
    [{ name: "movie", label: "Movie", component: TextField }],
  ],
];

export const validationScheme = yup
  .object({
    firstName: yup.string().required(),
    lastName: yup.string().required(),
    email: yup.string().required(),
    password: yup.string().required(),
    confirmPassword: yup.string().required(),
    country: yup.string().required(),
    movie: yup.string().required(),
  })
  .required();

export type FormData = yup.InferType<typeof validationScheme>;

export interface SignUpFormProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const usePresenter = ({ setStep }: SignUpFormProps) => {
  const { currentStep, next, back, handleSubmit, isFirst, isLast, step } = useMultistepForm({
    multiStepFormScheme,
    validationScheme,
  });

  useEffect(() => {
    setStep(step);
  }, [step]);

  const onSubmit = (data: FormData) => console.log(data);

  return {
    currentStep,
    next,
    back,
    handleSubmit,
    isFirst,
    isLast,
    onSubmit,
    step,
  };
};

export default usePresenter;
