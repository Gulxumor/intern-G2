import { Navigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
  const authed = false;
  if (!authed) {
    return <Navigate to={"/login"} />;
  }

  return children;
};

export default RequireAuth;
