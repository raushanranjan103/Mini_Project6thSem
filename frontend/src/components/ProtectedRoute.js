import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { Store } from '../Store';
//state is a built-in React object that is used to contain data or information about the component.
export default function ProtectedRoute({ children }) {
  const { state } = useContext(Store);
  const { userInfo } = state;
  return userInfo ? children : <Navigate to="/signin" />;
}
