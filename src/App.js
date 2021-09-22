import React, { useState } from 'react';
import { Switch, Route } from 'react-router';
import recipesContext from './context/recipesContext';

import { Login, Foods, Profile, Drinks, DrinkRecipe,
  FoodRecipe, DrinkProgress, ExploreFood, Explore, ExploreDrink, ExploreFoodIng,
  ExploreFoodArea, ExploreDrinkIng, RecipesDone, RecipesFav } from './pages';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [pageName, setPageName] = useState('oi');

  return (
    <div className="meals">
      <Switch>
        <recipesContext.Provider value={ { pageName, setPageName } }>
          <Route exact path="/" component={ Login } />
          <Route path="/perfil" component={ Profile } />

          {/* Export Foods */}
          <Route exact path="/comidas" component={ Foods } />
          <Route exact path="/comidas/:id" component={ FoodRecipe } />
          <Route path="/comidas/:id/in-progress" component={ FoodRecipe } />

          {/* Export Drinks */}
          <Route exact path="/bebidas" component={ Drinks } />
          <Route exact path="/bebidas/:id" component={ DrinkRecipe } />
          <Route path="/bebidas/:id/in-progress" component={ DrinkProgress } />

          {/* Export Explore */}
          <Route exact path="/explorar" component={ Explore } />
          <Route exact path="/explorar/comidas" component={ ExploreFood } />
          <Route path="/explorar/comidas/ingredientes" component={ ExploreFoodIng } />
          <Route path="/explorar/comidas/area" component={ ExploreFoodArea } />
          <Route exact path="/explorar/bebidas" component={ ExploreDrink } />
          <Route path="/explorar/bebidas/ingredientes" component={ ExploreDrinkIng } />

          {/* Export Recipes */}
          <Route path="/receitas-feitas" component={ RecipesDone } />
          <Route path="/receitas-favoritas" component={ RecipesFav } />
        </recipesContext.Provider>
      </Switch>
    </div>
  );
}

export default App;
