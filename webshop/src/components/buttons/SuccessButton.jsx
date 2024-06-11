import { Link } from 'react-router-dom';

const SuccessButton = ({ text, icon, to, onClick }) => {
  return (
    <Link
      onClick={onClick}
      to={to}
      className={`flex items-center justify-between gap-2 px-4 py-2 font-normal rounded-xl bg-success-surface-default text-success-text-label hover:bg-success-surface-darker hover:text-greyscale-text-negative border border-sucess-border-lighter`}
    >
      {text} {icon}
    </Link>
  );
};

export default SuccessButton;
