import React from "react";
import { Link } from "react-router-dom";

export default function PageEdit() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div>
          <Link className="text-dark" to="/user/:uid/website/:wid/page">
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand h1 mb-0 ml-4">Edit Page</span>
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
              id="name"
              className="form-control"
              placeholder="Enter page name..."
              defaultValue="Blog Post"
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter page title..."
            />
          </div>
          <Link
            to="/user/:uid/website/:wid/page"
            className="btn btn-danger btn-block"
          >
            Delete
          </Link>
        </form>
      </main>
      <footer className="navbar navbar-light bg-light fixed-bottom">
        <span />
        <Link to="/user/:uid" className="text-dark">
          <i className="fas fa-user" />
        </Link>
      </footer>
    </div>
  );
}
