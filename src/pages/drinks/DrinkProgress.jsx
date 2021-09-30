import React, { useEffect, useState } from 'react';
import useFetchRecipe from '../../hooks/useFetchRecipe';
import { RecipePhoto, ShareButton,
  FavoriteButton, Instructions,
  Video, RecommendationCards } from '../../components/detailsComponents';
import { IngredientsStep, FinishButton } from '../../components/progressComponents';

const DrinkProgress = () => {
  const { request, data } = useFetchRecipe();
  const [drinkDetails, setDrinkDetails] = useState(null);
  const pageId = window.location.pathname.split('/')[2];

  useEffect(() => {
    if (data) {
      const { drinks } = data;
      setDrinkDetails(drinks[0]);
    }
  }, [data]);

  useEffect(() => {
    request(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${pageId}`);
  }, [request, pageId]);

  return (
    <div>
      { drinkDetails && (
        <>
          <RecipePhoto url={ drinkDetails.strDrinkThumb } />
          <h2 data-testid="recipe-title">{ drinkDetails.strDrink }</h2>
          <ShareButton />
          <FavoriteButton data={ drinkDetails } />
          <p data-testid="recipe-category">{ drinkDetails.strCategory }</p>
          <IngredientsStep data={ data } />
          <Instructions inst={ drinkDetails.strInstructions } />
          <Video url={ drinkDetails.strYoutube } />
          <RecommendationCards />
          <FinishButton />
        </>
      ) }
    </div>
  );
};

export default DrinkProgress;
