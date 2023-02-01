import React from "react";
import { Navigate, Outlet } from "react-router-dom";

type Props = {
  isAllowed: boolean;
};

const ProtectedRoute = (props: Props) => {
  const { isAllowed } = props;
  const redirectURL = "/";
  return !isAllowed ? <Navigate to={redirectURL} replace /> : <Outlet />;
};

export default ProtectedRoute;