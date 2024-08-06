import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { PrivateRouteI } from '../utils/components';
import { getStorage } from '../services/storage';

export const PrivateRoute: React.FC<PrivateRouteI> = ({ children }) => {
  const location = useLocation();
  const user = getStorage('user');
  if (!user) return <Navigate to="/login" state={location.pathname} />

  return children;
}

export default PrivateRoute;
