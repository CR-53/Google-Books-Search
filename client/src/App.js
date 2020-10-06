import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Navigation from "./components/Navigation";
import Search from "./components/Search"

function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Search />
      </div>
    </Router>
  );
}

export default App;
