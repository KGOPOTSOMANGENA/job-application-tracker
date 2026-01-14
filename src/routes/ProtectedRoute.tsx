import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const user = localStorage.getItem('user');
  const location = useLocation();

  if (!user) {
    // Redirect to login, but remember where user wanted to go
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;


