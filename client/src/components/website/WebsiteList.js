import React from "react";
import { Link } from "react-router-dom";

export default function WebsiteList() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary fixed-top">
        <div>
          <Link className="text-light" to="/user/:uid">
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand mb-0 h1 ml-4">Websites</span>
        </div>
        <Link className="text-light" to="/user/:uid/website/new">
          <i className="fas fa-plus" />
        </Link>
      </nav>
      <div className="container">
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
            <Link to="/user/:uid/website/:wid/page">Address Book App</Link>
            <Link className="float-right" to="/user/:uid/website/:wid">
              <i className="fas fa-cog" />
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/user/:uid/website/:wid/page">Blogger</Link>
            <Link className="float-right" to="/user/:uid/website/:wid">
              <i className="fas fa-cog" />
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/user/:uid/website/:wid/page">Blogging App</Link>
            <Link className="float-right" to="/user/:uid/website/:wid">
              <i className="fas fa-cog" />
            </Link>
          </li>
          <li className="list-group-item">
            <Link to="/user/:uid/website/:wid/page">Script Testing App</Link>
            <Link to="/user/:uid/website/:wid" className="float-right">
              <i className="fas fa-cog" />
            </Link>
          </li>
        </ul>
      </div>
      <nav className="navbar navbar-dark bg-primary fixed-bottom">
        <span />
        <Link className="text-light" to="/user/:uid">
          <i className="fas fa-user" />
        </Link>
      </nav>
    </div>
  );
}
