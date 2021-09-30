import React, { useEffect, useState } from 'react';
import useFetchRecipe from '../../hooks/useFetchRecipe';
import { RecipePhoto, ShareButton,
  FavoriteButton, Ingredients, Instructions,
  RecommendationCards, StartButton } from '../../components/detailsComponents';

const DrinkRecipe = () => {
  const [showStartBtn, setShowStartBtn] = useState(true);
  const [drinksDetails, setDrinksDetails] = useState(null);
  const { request, data } = useFetchRecipe();
  const pageId = window.location.pathname.split('/')[2];

  const renderDrinkDetails = () => {
    const arrayDetails = drinksDetails.drinks[0];

    return (
      <>
        <RecipePhoto url={ arrayDetails.strDrinkThumb } />
        <h2 data-testid="recipe-title">{ arrayDetails.strDrink }</h2>
        <ShareButton />
        <FavoriteButton data={ arrayDetails } />
        <p data-testid="recipe-category">
          { `${arrayDetails.strCategory} ${arrayDetails.strAlcoholic}` }
        </p>
        <Ingredients data={ data } />
        <Instructions inst={ arrayDetails.strInstructions } />
        <RecommendationCards />
        { showStartBtn && <StartButton />}
      </>
    );
  };

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
      setDrinksDetails(data);
    }
  }, [data]);

  useEffect(() => {
    request(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${pageId}`);
  }, [request, pageId]);

  return (
    <div>
      { drinksDetails && drinksDetails.drinks && renderDrinkDetails() }
    </div>
  );
};

export default DrinkRecipe;
