import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({component: Component, ...rest }) => {
  const { loading, isAuthenticated } = useSelector((state) => state.users);

  return (
    <>
      {loading === false && (
         isAuthenticated===true ? <Outlet/> : <Navigate to='/login'/>
        
      )}

     
    </>
  );
};

export default ProtectedRoute;
