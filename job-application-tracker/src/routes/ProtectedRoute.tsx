import React from 'react';
import { Navigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const ProtectedRoute: React.FC<Props> = ({ children }) => {
  const isLoggedIn = localStorage.getItem('user');
  return isLoggedIn ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoute;
