import React, { useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
import axios from "axios";

export default function PageNew(props) {
  const history = useHistory();
  const params = useParams();

  const [name, setName] = useState("");
  const [title, setTitle] = useState("");

  const submit = async e => {
    e.preventDefault();
    const newPage = {
      name: name,
      title: title,
      websiteId: params.wid
    };
    await axios.post("/api/page", newPage);
    history.push(`/user/${params.uid}/website/${params.wid}/page`);
  };

  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div>
          <Link
            to={`/user/${params.uid}/website/${params.wid}/page`}
            className="text-dark"
          >
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand h1 ml-4 mb-0">New Page</span>
        </div>
        <button className="text-dark btn" form="pageForm">
          <i className="fas fa-check" />
        </button>
      </nav>
      <main className="container">
        <form id="pageForm" onSubmit={submit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter page name..."
              id="name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter page title..."
              id="title"
              value={title}
              onChange={e => setTitle(e.target.value)}
            />
          </div>
        </form>
      </main>
      <span className="navbar navbar-light bg-light fixed-bottom">
        <span />
        <Link to={`/user/${params.uid}`}>
          <i className="fas fa-user" />
        </Link>
      </span>
    </div>
  );
}
