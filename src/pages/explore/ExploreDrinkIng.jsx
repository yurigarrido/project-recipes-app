import React from 'react';
import { Header, Footer } from '../../components';
import RecipeCardExplore from '../../components/exploreComponents/RecipeCardExplore';

const ExploreDrinkIng = () => (
  <div>
    <Header title="Explorar Ingredientes" search={ false } />
    <RecipeCardExplore />
    <Footer />
  </div>
);

export default ExploreDrinkIng;
