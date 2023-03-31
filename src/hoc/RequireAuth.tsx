import { useLocation, Navigate } from "react-router-dom";
import { useAuth } from "../utils/useAuth";
import { ReactNode } from "react";
import React from "react";

interface IRequireAuth {
  children: ReactNode;
}

const RequireAuth: React.FC<IRequireAuth> = (props) => {
  const { children } = props;
  const location = useLocation();
  const context = useAuth();

  if (!context?.user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{children}</>;
};

export { RequireAuth };
