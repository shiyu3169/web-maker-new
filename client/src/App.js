import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// User Components
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import Profile from "./components/user/Profile";
// Website Components
import WebsiteList from "./components/website/WebsiteList";
import WebsiteNew from "./components/website/WebsiteNew";
import WebsiteEdit from "./components/website/WebsiteEdit";
// Page Components
import PageList from "./components/page/PageList";
import PageNew from "./components/page/PageNew";
import PageEdit from "./components/page/PageEdit";
// Widget Components
import WidgetList from "./components/widget/WidgetList";
import WidgetChooser from "./components/widget/WidgetChooser";
import WidgetEdit from "./components/widget/WidgetEdit";
// Routing components
import PrivateRoute from "./components/routing/PrivateRoute";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
        <PrivateRoute exact path="/user/:uid">
          <Profile />
        </PrivateRoute>
        <PrivateRoute exact path="/user/:uid/website">
          <WebsiteList />
        </PrivateRoute>
        <PrivateRoute exact path="/user/:uid/website/new">
          <WebsiteNew />
        </PrivateRoute>
        <PrivateRoute exact path="/user/:uid/website/:wid">
          <WebsiteEdit />
        </PrivateRoute>
        <Route exact path="/user/:uid/website/:wid/page">
          <PageList />
        </Route>
        <Route exact path="/user/:uid/website/:wid/page/new">
          <PageNew />
        </Route>
        <Route exact path="/user/:uid/website/:wid/page/:pid">
          <PageEdit />
        </Route>
        <Route exact path="/user/:uid/website/:wid/page/:pid/widget">
          <WidgetList />
        </Route>
        <Route exact path="/user/:uid/website/:wid/page/:pid/widget/new">
          <WidgetChooser />
        </Route>
        <Route exact path="/user/:uid/website/:wid/page/:pid/widget/:wgid">
          <WidgetEdit />
        </Route>
        <Route path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
