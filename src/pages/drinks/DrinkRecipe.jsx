import React, { useEffect, useState } from 'react';
import useFetchRecipe from '../../hooks/useFetchRecipe';
import { RecipePhoto, ShareButton,
  FavoreButton, Ingredients, Instructions,
  RecommendationCards, StartButton } from '../../components/detailsComponents';

const DrinkRecipe = () => {
  const [showStartBtn, setShowStartBtn] = useState(true);
  const { request, data } = useFetchRecipe();
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
  }, []);

  useEffect(() => {
    request(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${pageId}`);
  }, [request, pageId]);
  console.log(data);
  return (
    <div>
      { data && data.drinks && (
        <>
          <RecipePhoto url={ data.drinks[0].strDrinkThumb } />
          <h2 data-testid="recipe-title">{ data.drinks[0].strDrink }</h2>
          <ShareButton />
          <FavoreButton data={ data.drinks[0] } />
          <p data-testid="recipe-category">
            { `${data.drinks[0].strCategory} ${data.drinks[0].strAlcoholic}` }
          </p>
          <Ingredients data={ data } />
          <Instructions inst={ data.drinks[0].strInstructions } />
          <RecommendationCards />
          { showStartBtn && <StartButton />}
        </>
      ) }
    </div>
  );
};

export default DrinkRecipe;
