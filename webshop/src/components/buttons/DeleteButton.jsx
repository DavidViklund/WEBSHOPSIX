import { Link } from "react-router-dom";

const DeleteButton = ({ text, icon, to, onClick }) => {
  return (
    <Link
      onClick={onClick}
      to={to}
      className="flex items-center justify-between gap-2 px-8 py-2 font-normal rounded-xl border border-error-border-default bg-greyscale-surface-subtle text-error-text-label hover:bg-error-surface-default hover:text-greyscale-text-negative "
    >
      {text} {icon}
    </Link>
  );
};

export default DeleteButton;
