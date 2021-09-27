import React from 'react';
import { RecipePhoto, ShareButton,
  FavoreButton, Ingredients, Instructions,
  Video, RecommendationCards, StartButton } from '../../components/detailsComponents';

const DrinkRecipe = () => (
  <div>
    <RecipePhoto />
    <p data-testid="recipe-title" />
    <ShareButton />
    <FavoreButton />
    <p data-testid="recipe-category" />
    <Ingredients />
    <Instructions />
    <Video />
    <RecommendationCards />
    <StartButton />
  </div>
);

export default DrinkRecipe;
