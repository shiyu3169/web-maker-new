import React from "react";
import { Link } from "react-router-dom";

export default function WebsiteEdit() {
  return (
    <div>
      <nav className="navbar navbar-dark bg-primary fixed-top row">
        {/* Left Navbar */}
        <div className="col-lg-3 d-none d-lg-block">
          <div className="navbar">
            <div>
              <Link className="text-light" to="/user/:uid/website">
                <i className="fas fa-chevron-left" />
              </Link>
              <span className="navbar-brand mb-0 h1 ml-4">Websites</span>
            </div>
            <Link className="text-light" to="/user/:uid/website/new">
              <i className="fas fa-plus" />
            </Link>
          </div>
        </div>
        {/* Right Navbar */}
        <div className="col-lg-9 navbar">
          <div>
            <Link className="text-light d-lg-none " to="/user/:uid/website">
              <i className="fas fa-chevron-left" />
            </Link>
            <span className="navbar-brand mb-0 h1 ml-4">Edit Website</span>
          </div>
          <Link className="text-light" to="/user/:uid/website">
            <i className="fas fa-check" />
          </Link>
        </div>
      </nav>
      <div className="row">
        <div className="col-lg-3 d-none d-lg-block">
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
                <Link to="/user/:uid/website/:wid/page">
                  Script Testing App
                </Link>
                <Link className="float-right" to="/user/:uid/website/:wid">
                  <i className="fas fa-cog" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-lg-9">
          <div className="container">
            <form>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  placeholder="Enter website name..."
                  id="name"
                  className="form-control"
                  defaultValue="Blogger"
                />
              </div>
              <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                  className="form-control"
                  placeholder="Enter website description..."
                  rows={5}
                  defaultValue={
                    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, magni! Suscipit fuga illum provident quaerat accusantium aut maxime voluptatibus nesciunt quia rem. Eligendi deserunt aspernatur temporibus impedit saepe, suscipit quod."
                  }
                />
              </div>
              <Link
                to="/user/:uid/website"
                className="btn btn-danger btn-block"
              >
                Delete
              </Link>
            </form>
          </div>
        </div>
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
