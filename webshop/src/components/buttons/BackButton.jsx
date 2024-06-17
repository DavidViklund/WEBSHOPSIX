import { Link } from "react-router-dom";

const BackButton = ({ text, icon, to }) => {
  return (
    <Link
      to={to}
      className="flex items-center justify-between gap-2 px-4 py-2 font-normal rounded-xl bg-greyscale-surface-default text-primary-text-label lg:hover:bg-primary-surface-darker lg:hover:text-greyscale-text-negative border border-greyscale-border-darker"
    >
      {icon}
      {text}
    </Link>
  );
};

export default BackButton;
