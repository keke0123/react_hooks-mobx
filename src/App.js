import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
//
// import Home from "./page/Home";
// import About from "./page/About";
import Todo from "./page/Todo";
//
import "./App.scss";

function App() {
  return (
    <div className={`app-container`}>
      <Router>
        <Switch>
          <Route exact path="/">
            <Todo />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
