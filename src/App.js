import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import  HomePage  from './components/HomePage';
import  PegBoard  from './components/PegBoard';
import  StampGame  from './components/StampGame';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/peg-board">
          <PegBoard />
        </Route>
        <Route path="/stamp-game">
          <StampGame />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
