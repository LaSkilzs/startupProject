import React from "react";
import { Route, Redirect } from "react-router";

const PrivateRoute = ({ component: Component, user, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        user ? <Component {...props} userID={user.uid} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
