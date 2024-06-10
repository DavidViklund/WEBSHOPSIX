import { Link } from 'react-router-dom';

const Button = ({ text, icon, to, onClick }) => {
  return to ? (
    <Link
      to={to}
      className={`flex items-center justify-between gap-2  px-4 py-2 font-normal rounded-xl bg-primary-surface-default text-primary-text-label hover:bg-primary-surface-darker hover:text-greyscale-text-negative border border-primary-border-lighter`}
    >
      {text} {icon}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`flex items-center justify-between  gap-2 px-4 py-2 font-normal rounded-xl bg-primary-surface-default text-primary-text-label hover:bg-primary-surface-darker hover:text-greyscale-text-negative border border-primary-border-lighter`}
    >
      {text} {icon}
    </button>
  );
};

export default Button;
