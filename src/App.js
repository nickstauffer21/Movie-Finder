import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import Movie from "./Movie";

import "./App.css";

const NotFound = () => {
  return <h2>404 Not Found</h2>;
};

const App = () => {
  return (
    <Router>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to="/">
          Movie Finder
        </Link>
      </nav>
      <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/movie/:id" component={Movie} />
        <Route component={NotFound} />
      </Routes>
    </Router>
  );
};

export default App;
