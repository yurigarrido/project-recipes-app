import React from 'react';
import { Switch, Route } from 'react-router';

import { Login, RecipeList } from './pages';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/comidas" component={ RecipeList } />
      </Switch>
    </div>
  );
}

export default App;
