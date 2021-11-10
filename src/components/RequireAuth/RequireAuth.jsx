import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const RequireAuth = ({ children }) => {
  const auth = useSelector((state) => state.authReducer);
  let location = useLocation();

  if (!auth.isAuthenticated) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  return children;
};

export { RequireAuth };
