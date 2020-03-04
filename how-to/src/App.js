import React from "react";
import HomePage from "./components/HomePage";
import Navigation from "./components/Navigation";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Route exact path="/">
          <HomePage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
