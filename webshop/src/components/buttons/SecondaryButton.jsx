import { Link } from "react-router-dom";

const SecondaryButton = ({ text, icon, to, onClick }) => {
  return to ? (
    <Link
      to={to}
      className="flex items-center justify-between gap-2 px-8 py-4 font-normal rounded-xl bg-greyscale-surface-default text-primary-text-label hover:bg-primary-surface-darker hover:text-greyscale-text-negative border border-greyscale-border-darker"
    >
      {text} {icon}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`flex items-center justify-between gap-2 px-8 py-4 font-normal rounded-xl bg-greyscale-surface-default text-primary-text-label hover:bg-primary-surface-darker hover:text-greyscale-text-negative border border-greyscale-border-darker"`}
    >
      {text} {icon}
    </button>
  );
};

export default SecondaryButton;
