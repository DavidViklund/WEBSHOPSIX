//Använd i navbar för varukorg.
import React from "react";
import { Link } from "react-router-dom";

const BasketButton = ({ text, icon, qty, to, flash }) => {
  // Visa 0 om varukorg är tom
  const displayQty = qty ? qty : 0;

  return (
    <Link
      to={to}
      className={`basketButton flex items-center justify-between px-2 py-2 font-normal rounded-xl bg-greyscale-surface-default text-primary-text-label lg:hover:bg-primary-surface-darker lg:hover:text-greyscale-text-negative gap-1 ${
        flash ? "flash" : ""
      }`}
    >
      {icon} {displayQty}
    </Link>
  );
};

export default BasketButton;
