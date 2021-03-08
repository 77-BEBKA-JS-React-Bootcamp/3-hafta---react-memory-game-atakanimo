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
import Result from './components/Result/Result';

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
            </Route>
            <Route path="/result">
              <Result />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}