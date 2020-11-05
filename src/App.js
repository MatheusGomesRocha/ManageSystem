import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Services from './screens/Services';
import Home from './screens/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/services">
          <Services />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}


export default App;
