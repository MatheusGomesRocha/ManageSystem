import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Services from './screens/Services';
import Home from './screens/Home';
import Management from './screens/Management';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/ManageSystem">
          <Home />
        </Route>

        <Route exact path="/ManageSystem/Services">
          <Services />
        </Route>

        <Route exact path="/ManageSystem/Management">
          <Management />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}


export default App;
