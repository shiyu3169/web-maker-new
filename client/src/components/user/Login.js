import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="container">
      <h1>Login</h1>
      <form>
        <div className="form-group">
          <input type="text" className="form-control" placeholder="Username" />
        </div>
        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <Link className="btn btn-primary btn-block" to="/user/:uid">
          Login
        </Link>
        <Link className="btn btn-success btn-block" to="/register">
          Register
        </Link>
      </form>
    </div>
  );
}
