import React, { useEffect, useState } from 'react';
import useFetchRecipe from '../../hooks/useFetchRecipe';
import { RecipePhoto, ShareButton,
  FavoriteButton, Ingredients, Instructions,
  Video, RecommendationCards, StartButton } from '../../components/detailsComponents';

const FoodRecipe = () => {
  const { request, data } = useFetchRecipe();
  const [showStartBtn, setShowStartBtn] = useState(true);
  const [foodDetails, setFoodDetails] = useState(null);
  const pageId = window.location.pathname.split('/')[2];

  useEffect(() => {
    if (localStorage.doneRecipes) {
      const local = JSON.parse(localStorage.getItem('doneRecipes'));
      local.forEach((recipe) => {
        if (recipe.id === pageId) {
          setShowStartBtn(false);
        }
      });
    }
  }, [pageId]);

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
          <Ingredients data={ data } />
          <Instructions inst={ foodDetails.strInstructions } />
          <Video url={ foodDetails.strYoutube } />
          <RecommendationCards />
        </>
      ) }
      { showStartBtn && <StartButton />}
    </div>
  );
};

export default FoodRecipe;
