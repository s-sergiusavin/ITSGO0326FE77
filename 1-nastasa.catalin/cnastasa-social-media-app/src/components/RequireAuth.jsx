import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../redux/selectors";

const RequireAuth = () => {
  const user = useSelector(selectUser);

  return user.isAuthenticated ? <Outlet /> : <Navigate to="/auth" replace />;
};

export default RequireAuth;
