import React from "react";
import Link from "react-router-dom";

export default function WidgetHeading() {
  return (
    <div>
      <nav className="navbar bg-light navbar-light fixed-top">
        <div>
          <Link
            className="text-dark"
            to="/user/:uid/website/:wid/page/:pid/widget"
          >
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand h1 mb-0 ml-4">Edit Widget</span>
        </div>
        <Link
          className="text-dark"
          to="/user/:uid/website/:wid/page/:pid/widget"
        >
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
              placeholder="Enter Widget Name..."
              id="name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Widget Text"
              id="text"
            />
          </div>
          <div className="form-group">
            <label htmlFor="size">Size</label>
            <input
              type="range"
              min={1}
              max={6}
              className="form-control"
              id="size"
            />
          </div>
          <button className="btn btn-danger btn-block">Delete</button>
        </form>
      </main>
      <footer className="navbar navbar-light fixed-bottom">
        <span />
        <Link to="/user/:uid" className="text-dark">
          <i className="fas fa-user" />
        </Link>
      </footer>
    </div>
  );
}
