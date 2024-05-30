import { useState } from "react";
import { Link } from "react-router-dom";

const Button = ({ text, icon }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveState = () => {
    setIsActive(!isActive);
  };

  return (
    <div className="inline-flex justify-center items-center bg-gray-100 min-h-screen">
      <Link
        className={`flex items-center justify-between px-8 py-4 font-normal rounded-[20px] text-primary-text-label font-montserrat text-sm ${
          isActive
            ? "bg-primary-surface-default hover:bg-primary-surface-darker"
            : "bg-greyscale-surface-disabled text-greyscale-text-disabled border-greyscale-border-disabled"
        }`}
        onClick={toggleActiveState}
      >
        {text} {icon}
        {isActive ? "Active" : "Inactive"}
      </Link>
    </div>
  );
};

export default Button;
