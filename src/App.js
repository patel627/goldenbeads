import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import  GoldenBead  from './components/GoldenBead';
import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
        <GoldenBead />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
