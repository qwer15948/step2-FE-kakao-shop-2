import { Link } from "react-router-dom";
/**
 * 카드 컴포넌트
 */
const Card = ({ to, children }) => {
  const staticServerUri = process.env.REACT_APP_PATH || "";
  return (
    <Link className="card" to={staticServerUri + to}>
      {children}
    </Link>
  );
};

export default Card;
