import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ isLoggedIn, children }) => {
  if (!isLoggedIn) {
    console.log("Redirected to login due to not being logged!");
    return <Navigate to="/login" replace />;
  }

  return children;
};
export default ProtectedRoute;
