import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "./AuthContext";

const ProtectedRoute = ({ children }) => {
  const { isAuth } = useContext(AuthContext);

  return <> {isAuth ? children : <Navigate to="/" />} </>;
};

export default ProtectedRoute;
