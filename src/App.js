import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from './components/Login';
import Home from './components/Home';
import Stats from './components/Stats';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/stats">
          <Stats />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;