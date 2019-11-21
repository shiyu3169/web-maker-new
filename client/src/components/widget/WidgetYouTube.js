import React from "react";
import { Link, useParams } from "react-router-dom";

export default function WidgetYouTube(props) {
  const params = useParams();

  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div>
          <Link
            to={`/user/${params.uid}/website/${params.wid}/page/${params.pid}/widget`}
            className="text-dark"
          >
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand h1 mb-0 ml-4">Edit Widget</span>
        </div>
        <button className="text-dark btn" form="widgetForm">
          <i className="fas fa-check" />
        </button>
      </nav>
      <main className="container">
        <form id="widgetForm" onSubmit={props.update}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter widget name..."
              name="name"
              value={props.widget.name?props.widget.name: ""}
              onChange={props.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="text">Text</label>
            <input
              type="text"
              className="form-control"
              id="text"
              placeholder="Enter Widget text..."
              name="text"
              value={props.widget.text?props.widget.text: ""}
              onChange={props.onChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="url">URL</label>
            <input
              type="text"
              className="form-control"
              id="url"
              placeholder="Enter image address..."
              name="url"
              value={props.widget.url?props.widget.url: ""}
              onChange={props.onChange}
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
              name="width"
              value={props.widget.width?props.widget.width: "100%"}
              onChange={props.onChange}
            />
          </div>
          <button
            onClick={props.remove}
            type="button"
            className="btn btn-danger btn-block"
          >
            Delete
          </button>
        </form>
      </main>
      <footer className="navbar navbar-light bg-light fixed-bottom">
        <span />
        <Link to={`/user/${params.uid}`} className="text-dark">
          <i className="fas fa-user" />
        </Link>
      </footer>
    </div>
  );
}
