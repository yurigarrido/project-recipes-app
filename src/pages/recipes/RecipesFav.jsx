import React from 'react';
import { Header } from '../../components';
import FavCard from '../../components/favorite/FavCard';

const RecipesFav = () => (
  <div>
    <Header title="Receitas Favoritas" search={ false } />
    <button type="button" data-testid="filter-by-all-btn">
      All
    </button>
    <button type="button" data-testid="filter-by-food-btn">
      food
    </button>

    <button type="button" data-testid="filter-by-drink-btn">
      drink
    </button>
    <FavCard />
  </div>
);

export default RecipesFav;
