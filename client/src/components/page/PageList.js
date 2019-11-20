import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function PageList(props) {
  const params = useParams();

  const [pages, setPages] = useState([]);

  useEffect(() => {
    setPages(props.getPages(params.wid));
  }, [params.wid, props]);

  return (
    <div>
      <nav className="navbar bg-light navbar-light fixed-top">
        <div>
          <Link to={`/user/${params.uid}/website`} className="text-dark">
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand mb-0 h1 ml-4">Pages</span>
        </div>
        <Link
          to={`/user/${params.uid}/website/${params.wid}/page/new`}
          className="text-dark"
        >
          <i className="fas fa-plus" />
        </Link>
      </nav>
      <main className="container">
        <ul className="list-group list-group-flush">
          {pages.map(page => (
            <li className="list-group-item" key={page._id}>
              <Link
                to={`/user/${params.uid}/website/${params.wid}/page/${page._id}/widget`}
              >
                {page.name}
              </Link>
              <Link
                to={`/user/${params.uid}/website/${params.wid}/page/${page._id}`}
                className="float-right"
              >
                <i className="fas fa-cog" />
              </Link>
            </li>
          ))}
        </ul>
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
