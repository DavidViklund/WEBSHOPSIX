import { Link } from "react-router-dom";

const SecondaryButton = ({ text, icon, to, className }) => {
  return (
    <Link to={to} className={className}>
      {text} {icon}
    </Link>
  );
};

export default SecondaryButton;
