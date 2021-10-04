import React, { useState, useEffect } from 'react';
import { Header } from '../../components';
import FavCard from '../../components/favorite/FavCard';

const RecipesFav = () => {
  const [aux, setAux] = useState(false);
  const [recipes, setRecipes] = useState(null);
  const [filter, setFilter] = useState('all');
  const [local, setLocal] = useState(null);

  useEffect(() => {
    if (localStorage.favoriteRecipes) {
      setLocal(JSON.parse(localStorage.favoriteRecipes));
    }
  }, [aux]);

  useEffect(() => {
    if (local) {
      if (filter === 'all') setRecipes(JSON.parse(localStorage.favoriteRecipes));
      else {
        setRecipes(JSON.parse(localStorage.favoriteRecipes)
          .filter((recipe) => recipe.type === filter));
      }
    }
  }, [local, filter]);

  return (
    <div>
      <Header title="Receitas Favoritas" search={ false } />
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
      { recipes && <FavCard recipes={ recipes } aux={ aux } setAux={ setAux } /> }
    </div>
  );
};

export default RecipesFav;
