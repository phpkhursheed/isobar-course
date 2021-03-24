import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Courses from "./Courses";
import Login from "./Login";

export default function Navigation() {
  return (
    <div>
      <div>
        {/* <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
           
          </ul>
        </nav> */}

        {/* Route components are rendered if the path prop matches the current URL */}
        <Route path="/" exact>
          <Courses />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </div>
    </div>
  );
}
