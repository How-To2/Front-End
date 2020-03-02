import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';

import Login from './components/Login';
import Navigation from './components/Navigation';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Login />
    </div>
  );
}

export default App;
