import React from 'react';
import { Header, Footer } from '../../components';
import RecipeCardExplore from '../../components/exploreComponents/RecipeCardExplore';

const ExploreFoodIng = () => (
  <div>
    <Header title="Explorar Ingredientes" search={ false } />
    <RecipeCardExplore />
    <Footer />
  </div>
);

export default ExploreFoodIng;
