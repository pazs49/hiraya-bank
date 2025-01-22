import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      404 Not Found
      <Link to={"/"} className="btn">
        Home
      </Link>
    </div>
  );
};
export default NotFoundPage;
