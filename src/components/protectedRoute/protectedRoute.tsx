import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

type TProtectedRouteProps = {
  user: { id: string; name: string } | null | boolean;
  children?: React.ReactNode;
  redirectPath?: string;
};

const ProtectedRoute: React.FC<TProtectedRouteProps> = ({ user, redirectPath = '/', children }) => {
  if (user) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <>
      {children}|<Outlet />
    </>
  );
};

export default ProtectedRoute;
