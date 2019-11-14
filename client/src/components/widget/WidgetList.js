import React from "react";
import { Link } from "react-router-dom";

export default function WidgetList() {
  return (
    <div>
      <nav className="navbar navbar-light bg-light fixed-top">
        <div>
          <Link className="text-dark" to="/user/:uid/website/:wid/page">
            <i className="fas fa-chevron-left" />
          </Link>
          <span className="navbar-brand h1 mb-0 ml-4">Widgets</span>
        </div>
        <Link
          className="text-dark"
          to="/user/:uid/website/:wid/page/:pid/widget/new"
        >
          <i className="fas fa-plus" />
        </Link>
      </nav>
      <main className="container-fluid">
        <section>
          {/* Icons */}
          <div className="position-absolute absolute-right p-1 bg-light rounded-left">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              <i className="fas fa-cog" />
            </Link>
            <i className="fas fa-bars" />
          </div>
          <h1>MSIMBO</h1>
        </section>
        <section>
          {/* Icons */}
          <div className="position-absolute absolute-right p-1 bg-light rounded-left">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              <i className="fas fa-cog" />
            </Link>
            <i className="fas fa-bars" />
          </div>
          <h3>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui,
            impedit?
          </h3>
        </section>
        <section>
          {/* Icons */}
          <div className="position-absolute absolute-right p-1 bg-light rounded-left">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              <i className="fas fa-cog" />
            </Link>
            <i className="fas fa-bars" />
          </div>
          <img
            src="https://www.medicalnewstoday.com/content/images/articles/326/326253/corgi-and-terrier-running.jpg"
            alt="dogs"
            width="100%"
          />
        </section>
        <section>
          {/* Icons */}
          <div className="position-absolute absolute-right p-1 bg-light rounded-left">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              <i className="fas fa-cog" />
            </Link>
            <i className="fas fa-bars" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur
            <a href="https://www.google.com">adipisicing elit. Ab qui</a>
            debitis quo unde reiciendis ratione maiores, commodi voluptates
            totam quia sapiente, beatae rem labore! Rerum nostrum error quia
            quidem quo.
          </p>
        </section>
        <section>
          {/* Icons */}
          <div className="position-absolute absolute-right p-1 bg-light rounded-left">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              <i className="fas fa-cog" />
            </Link>
            <i className="fas fa-bars" />
          </div>
          <h3>Lorem ipsum dolor sit amet.</h3>
        </section>
        <section>
          {/* Icons */}
          <div className="position-absolute absolute-right p-1 bg-light rounded-left front">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              <i className="fas fa-cog" />
            </Link>
            <i className="fas fa-bars" />
          </div>
          <div className="embed-responsive embed-responsive-16by9">
            <iframe
              src="https://www.youtube.com/embed/vjf774RKrLc"
              title="video"
              frameBorder={0}
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </section>
        <section>
          {/* Icons */}
          <div className="position-absolute absolute-right p-1 bg-light rounded-left">
            <Link to="/user/:uid/website/:wid/page/:pid/widget/:wgid">
              <i className="fas fa-cog" />
            </Link>
            <i className="fas fa-bars" />
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
            deserunt ea assumenda quos fugiat, impedit suscipit odit
            repellendus, odio nam quis consectetur numquam eius doloribus?
            Voluptatibus facere eveniet expedita incidunt.
          </p>
        </section>
      </main>
      <nav className="navbar navbar-light bg-light fixed-bottom">
        <div>
          <i className="fas fa-play" />
          <i className="fas fa-eye ml-2" />
        </div>
        <Link className="text-dark" to="/user/:uid">
          <i className="fas fa-user" />
        </Link>
      </nav>
    </div>
  );
}
