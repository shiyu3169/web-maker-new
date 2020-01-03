import React from "react";
import { Route, useHistory } from "react-router-dom";
import axios from "axios";

export default function PrivateRoute({ component: Component, ...rest }) {
  const history = useHistory();
  const setAuthToken = token => {
    if (token) {
      axios.defaults.headers.common["x-auth-token"] = token;
    } else {
      delete axios.defaults.headers.common["x-auth-token"];
    }
  };

  const loadUser = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      await axios.get("/api/user/load");
    } catch (error) {
      history.push("/login");
    }
  };

  loadUser();

  return (
    <Route
      {...rest}
      render={props => {
        return <Component {...props} />;
      }}
    />
  );
}
