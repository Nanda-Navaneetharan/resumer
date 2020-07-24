import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Landing from './components/Landing/Landing';
import Home from './components/Home/Home';
import { ProtectedRoute } from './Routing/ProtectedRoute'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <ProtectedRoute exact path="/home" component={Home} />
          <Route exact path="*" component={() => "404 Not found"} />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
