import React, { useEffect, useState } from 'react';
import useFetchRecipe from '../../hooks/useFetchRecipe';
import { RecipePhoto, ShareButton,
  FavoreButton, Ingredients, Instructions,
  Video, RecommendationCards, StartButton } from '../../components/detailsComponents';

const FoodRecipe = () => {
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

  // const doneRecipes = [{
  //   "id": "52771",
  //   "type": "comida",
  //   "area": "Italian",
  //   "category": "Vegetarian",
  //   "alcoholicOrNot": "",
  //   "name": "Spicy Arrabiata Penne",
  //   "image": "https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg",
  //   "doneDate": "22/6/2020",
  //   "tags": ["Pasta", "Curry"]
  // }];

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
          <FavoreButton data={ data.meals[0] } />
          <p data-testid="recipe-category">{ data.meals[0].strCategory }</p>
          <Ingredients data={ data } />
          <Instructions inst={ data.meals[0].strInstructions } />
          <Video url={ data.meals[0].strYoutube } />
          <RecommendationCards />
        </>
      ) }
      { showStartBtn && <StartButton />}
    </div>
  );
};

export default FoodRecipe;
