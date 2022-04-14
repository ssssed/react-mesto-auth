import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isLogin, children }) => {
  return isLogin ? children : <Navigate to='/sign-in' />;
};

export default ProtectedRoute;
