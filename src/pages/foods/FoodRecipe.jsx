import React, { useEffect } from 'react';
import useFetchRecipe from '../../hooks/useFetchRecipe';
import { RecipePhoto, ShareButton,
  FavoreButton, Ingredients, Instructions,
  Video, RecommendationCards, StartButton } from '../../components/detailsComponents';

const FoodRecipe = () => {
  const { request, data } = useFetchRecipe();
  const pageId = window.location.pathname.split('/')[2];

  useEffect(() => {
    request(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${pageId}`);
  }, [request, pageId]);

  return (
    <div>
      { data !== null && (
        <>
          <RecipePhoto url={ data.meals[0].strMealThumb } />
          <h2 data-testid="recipe-title">{ data.meals[0].strMeal }</h2>
          <ShareButton />
          <FavoreButton />
          <p data-testid="recipe-category">{ data.meals[0].strCategory }</p>
          <Ingredients data={ data } />
          <Instructions inst={ data.meals[0].strInstructions } />
          <Video url={ data.meals[0].strYoutube } />
          <RecommendationCards />
          <StartButton />
        </>
      ) }
    </div>
  );
};

export default FoodRecipe;
