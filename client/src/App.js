import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route, Switch } from 'react-router-dom'
import './App.css';
import Navigation from "./components/Navigation";
import Header from "./components/Header"
import Search from "./components/Search"
import Saved from "./components/Saved"


function App() {
  return (
    <Router>
      <div>
        <Navigation />
        <Header />
        <Switch>
          <Route exact path="/" component={Search} />
          <Route path="/search" component={Search} />
          <Route path="/saved" component={Saved} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
