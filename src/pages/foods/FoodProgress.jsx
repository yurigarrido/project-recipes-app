import React, { useEffect, useState } from 'react';
import useFetchRecipe from '../../hooks/useFetchRecipe';
import { RecipePhoto, ShareButton,
  FavoriteButton, Instructions,
  Video, RecommendationCards } from '../../components/detailsComponents';
import { IngredientsStep, FinishButton } from '../../components/progressComponents';

const FoodProgress = () => {
  const { request, data } = useFetchRecipe();
  const [foodDetails, setFoodDetails] = useState(null);
  const pageId = window.location.pathname.split('/')[2];

  useEffect(() => {
    if (data) {
      const { meals } = data;
      setFoodDetails(meals[0]);
    }
  }, [data]);

  useEffect(() => {
    request(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${pageId}`);
  }, [request, pageId]);

  return (
    <div>
      { foodDetails && (
        <>
          <RecipePhoto url={ foodDetails.strMealThumb } />
          <h2 data-testid="recipe-title">{ foodDetails.strMeal }</h2>
          <ShareButton />
          <FavoriteButton data={ foodDetails } />
          <p data-testid="recipe-category">{ foodDetails.strCategory }</p>
          <IngredientsStep data={ data } />
          <Instructions inst={ foodDetails.strInstructions } />
          <Video url={ foodDetails.strYoutube } />
          <RecommendationCards />
          <FinishButton />
        </>
      ) }
    </div>
  );
};

export default FoodProgress;
