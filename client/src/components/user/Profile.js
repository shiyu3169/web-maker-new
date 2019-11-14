import React from "react";
import { Link } from "react-router-dom";

export default function Profile() {
  return (
    <div>
      <nav className="navbar bg-primary navbar-dark fixed-top">
        <span className="navbar-brand h1 mb-0">Profile</span>
        <i className="fas fa-check text-light" />
      </nav>
      <div className="container">
        <form>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              className="form-control"
              id="username"
              placeholder="Enter username here..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email here..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder="Enter your first name..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder="Enter your last name..."
            />
          </div>
        </form>
        <Link to="/user/:uid/website" className="btn btn-primary btn-block">
          Websites
        </Link>
        <Link className="btn btn-danger btn-block" to="/login">
          Logout
        </Link>
      </div>
      <nav className="navbar bg-primary fixed-bottom">
        <span />
        <Link className="text-light" to="/user/:uid">
          <i className="fas fa-user" />
        </Link>
      </nav>
    </div>
  );
}
