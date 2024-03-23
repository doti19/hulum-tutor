import { Outlet, Navigate } from "react-router-dom";
import { useInterseptor } from "./Interceptor";
const PrivateRoutes = () => {
  const token = localStorage.getItem("token");
  const { isLoggedIn } = useInterseptor();
  const auth = { token: token ? true : false };

  return auth.token && isLoggedIn ? (
    <Outlet />
  ) : (
    <Navigate to="/takemetomyadmin/login" />
  );
};

export default PrivateRoutes;
