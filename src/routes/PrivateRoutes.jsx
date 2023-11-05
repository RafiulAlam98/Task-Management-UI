/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import { authEmail, authKey } from "../components/constant/authKey";
import { getFromLocalStorage } from "../helpers/utils/saveData";

const PrivateRoutes = ({ children }) => {
  const { pathname } = useLocation();
  const token = getFromLocalStorage(authKey);
  const email = getFromLocalStorage(authEmail);
  if (!token && !email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }
  return children;
};

export default PrivateRoutes;
