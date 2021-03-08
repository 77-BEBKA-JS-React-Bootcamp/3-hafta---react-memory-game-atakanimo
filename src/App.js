import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.scss';

import CardGame from './components/CardGame/CardGame';
import Home from './components/Home/Home';

export default function App() {
  return (
    <div className="App1">
      <Router>
        <div className="Nav">
          <nav>
            <button><Link to="/">Home</Link></button>
            <button><Link to="/play">Play Anonymously</Link></button>
          </nav>

          <Switch>
            <Route path="/play">
              <CardGame />
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}
