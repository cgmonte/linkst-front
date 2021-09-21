import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ChakraProvider, Text } from '@chakra-ui/react';

import { Login } from './components/Login';
import Home from './components/Home';

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/text">
            <Text>
              Foi
            </Text>
          </Route>
        </Switch>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;