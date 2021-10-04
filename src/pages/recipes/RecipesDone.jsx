import React, { useState, useEffect } from 'react';
import { Header } from '../../components';
import DoneCard from '../../components/done/DoneCard';

const RecipesDone = () => {
  const [recipesDone, setRecipesDone] = useState(null);
  const [filter, setFilter] = useState('all');
  const [local, setLocal] = useState(null);

  useEffect(() => {
    if (localStorage.doneRecipes) {
      setLocal(JSON.parse(localStorage.doneRecipes));
    }
  }, []);

  useEffect(() => {
    if (local) {
      if (filter === 'all') setRecipesDone(JSON.parse(localStorage.doneRecipes));
      else {
        setRecipesDone(JSON.parse(localStorage.doneRecipes)
          .filter((recipe) => recipe.type === filter));
      }
    }
  }, [local, filter]);

  return (
    <div>
      <Header title="Receitas Feitas" search={ false } />
      <button
        type="button"
        data-testid="filter-by-all-btn"
        onClick={ () => { setFilter('all'); } }
      >
        All
      </button>
      <button
        type="button"
        data-testid="filter-by-food-btn"
        onClick={ () => { setFilter('comida'); } }
      >
        Comidas
      </button>

      <button
        type="button"
        data-testid="filter-by-drink-btn"
        onClick={ () => { setFilter('bebida'); } }
      >
        Bebidas
      </button>
      { recipesDone && <DoneCard recipesDone={ recipesDone } /> }
    </div>
  );
};

export default RecipesDone;
