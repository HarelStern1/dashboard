import { useState } from "react";

const usePresenter = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, toggleSidebar };
};

export default usePresenter;
