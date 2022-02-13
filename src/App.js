import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/home";

function App() {
  return (
    <Router>
      <Navbar />
      <Route path = "/">
        <Home />
      </Route>
    </Router>
  );
}

export default App;
