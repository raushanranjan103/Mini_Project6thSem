import React, { useContext } from 'react';//here we have imported the react ;
import { Navigate } from 'react-router-dom';//here imported the react router dom
import { Store } from '../Store';//here we have imported store

export default function AdminRoute({ children }) {
  const { state } = useContext(Store);
  const { userInfo } = state;
  return userInfo && userInfo.isAdmin ? children : <Navigate to="/signin" />;
}
