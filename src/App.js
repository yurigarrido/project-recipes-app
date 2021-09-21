import React from 'react';
import { Switch, Route } from 'react-router';

import { Login, RecipeList, Profile } from './pages';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="meals">
      <Switch>
        <Route exact path="/" component={ Login } />
        <Route path="/comidas" component={ RecipeList } />
        <Route path="/perfil" component={ Profile } />

      </Switch>
    </div>
  );
}

export default App;
