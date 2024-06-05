import { Link } from "react-router-dom";

const BasketButton = ({ text, icon, qty, to }) => {
  // Display 0 if qty is not provided or is 0
  const displayQty = qty ? qty : 0;

  return (
    <Link
      to={to}
      className={`flex items-center justify-between px-2 py-2 font-normal rounded-xl bg-greyscale-surface-default text-primary-text-label hover:bg-primary-surface-darker hover:text-greyscale-text-negative  gap-1`}
    >
      {icon} {displayQty}
    </Link>
  );
};

export default BasketButton;
