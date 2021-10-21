import { Component } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

const ProtectedRoute = ({component: Component, ...rest }) => {
  
  const auth = useSelector(state => state.auth.is_auth)
  return ( 
      <Route
      {...rest}
      render={() => (
        auth ? (<Component  />):(<Redirect to="/login" />)
          
      )}
    />
     );
}
 
export default ProtectedRoute;