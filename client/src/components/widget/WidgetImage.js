import React from "react";
import { Link } from "react-router-dom";

export default function WidgetImage() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div>
          <Link
            to="/user/:uid/website/:wid/page/:pid/widget"
            className="text-dark"
          >
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand h1 mb-0 ml-4">Edit Widget</span>
        </div>
        <Link
          to="/user/:uid/website/:wid/page/:pid/widget"
          className="text-dark"
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
              id="name"
              placeholder="Enter widget name..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              className="form-control"
              id="text"
              placeholder="Enter Widget text..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="url">URL</label>
            <input
              type="text"
              className="form-control"
              id="url"
              placeholder="Enter image address..."
            />
          </div>
          <div className="form-group">
            <label htmlFor="width">Width</label>
            <input
              type="range"
              className="form-control"
              min={1}
              max={100}
              id="width"
            />
          </div>
          <div className="form-group">
            <label htmlFor="upload">Upload</label>
            <input type="file" className="form-control" id="upload" />
          </div>
          <button className="btn btn-primary btn-block">Upload Image</button>
          <Link
            to="/user/:uid/website/:wid/page/:pid/widget"
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
