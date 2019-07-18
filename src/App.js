import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";

// import logo from './logo.svg';
import ResponsiveDrawer from "./components/ResponsiveDrawer";
import Test from "./components/Test";
import CoursesPage from "./components/CoursesPage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={ResponsiveDrawer} />
          <Route path="/test/:id" component={Test} />
          <Route path="/courses" component={CoursesPage} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={SignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
