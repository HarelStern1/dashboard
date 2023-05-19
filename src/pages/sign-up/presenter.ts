import { useState } from "react";

export const stepCards = [
  {
    id: 0,
    title: "Your details",
    subtitle: "Please provide your name and email",
  },
  {
    id: 1,
    title: "Choose password",
    subtitle: "Must be at least 8 characters",
  },
  {
    id: 2,
    title: "Invite your team",
    subtitle: "Some random shit",
  },
];

const usePresenter = () => {
  const [step, setStep] = useState<number>(0);

  return { step, setStep };
};

export default usePresenter;
