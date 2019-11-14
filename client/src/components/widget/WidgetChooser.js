import React from "react";
import { Link } from "react-router-dom";

export default function WidgetChooser() {
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
          <span className="navbar-brand h1 mb-0 ml-4">Choose Widget</span>
        </div>
      </nav>
      <main className="container">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              Header
            </Link>
          </li>
          <li className="list-group-item">
            <a href="!#">Label</a>
          </li>
          <li className="list-group-item">
            <a href="!#">HTML</a>
          </li>
          <li className="list-group-item">
            <a href="!#">Text Input</a>
          </li>
          <li className="list-group-item">
            <a href="!#">Link</a>
          </li>
          <li className="list-group-item">
            <a href="!#">Button</a>
          </li>
          <li className="list-group-item">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              Image
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              YouTube
            </Link>
          </li>
          <li className="list-group-item">
            <a href="!#">Data Table</a>
          </li>
          <li className="list-group-item">
            <a href="!#">Repeater</a>
          </li>
        </ul>
      </main>
      <footer className="navbar navbar-light bg-light fixed-bottom">
        <span />
        <Link to="/user/:uid">
          <i className="fas fa-user" />
        </Link>
      </footer>
    </div>
  );
}
