import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ isLogin, children }) => {
  return isLogin ? React.render(children) : <Navigate to='/sing-in' />;
};

export default ProtectedRoute;
