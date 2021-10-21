import { Component } from "react";
import { Redirect, Route } from "react-router";

const ProtectedRoute = ({is_auth:is_auth,components:components,...rest}) => {
    return ( 
        <Route {...rest} render={(props)=>{
            is_auth ? <Component /> : (
                <Redirect
                  to={{
                    pathname: "/login",
                  }}
                />
              )
        }} />
        
     );
}
 
export default ProtectedRoute;