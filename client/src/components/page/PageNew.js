import React from "react";
import { Link } from "react-router-dom";

export default function PageNew() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div>
          <Link to="/user/:uid/website/:wid/page" className="text-dark">
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand h1 ml-4 mb-0">New Page</span>
        </div>
        <Link className="text-dark" to="/user/:uid/website/:wid/page">
          <i className="fas fa-check" />
        </Link>
      </nav>
      <main className="container">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter page name..."
              id="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter page title..."
              id="title"
            />
          </div>
        </form>
      </main>
      <span className="navbar navbar-light bg-light fixed-bottom">
        <span />
        <Link to="/user/:uid">
          <i className="fas fa-user" />
        </Link>
      </span>
    </div>
  );
}
