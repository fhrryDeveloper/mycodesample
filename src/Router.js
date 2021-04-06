import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Register from './pages/Register/register';
import Signin from './pages/Signin/signin';

export default function App() {
  return (
    <Router>
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <Register />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/signin">
            <Signin />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
