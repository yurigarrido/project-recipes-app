import React, { useEffect, useState } from 'react';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import { indexOf } from 'lodash';

const FavoreButton = ({ data }) => {
  const category = window.location.pathname.split('/')[1];
  const id = window.location.pathname.split('/')[2];
  const categoryType = category === 'comidas' ? 'comida' : 'bebida';
  const [fav, setFav] = useState(false);

  const handleClick = (() => {
    console.log(data, 'oi');
    const recipeData = {
      id,
      type: categoryType,
      area: categoryType === 'comida' ? data.strArea : '',
      category: data.strCategory,
      alcoholicOrNot: categoryType === 'bebida' ? data.strAlcoholic : '',
      name: categoryType === 'comida' ? data.strMeal : data.strDrink,
      image: categoryType === 'comida' ? data.strMealThumb : data.strDrinkThumb,
    };
    if (!localStorage.favoriteRecipes) {
      localStorage.setItem('favoriteRecipes', JSON.stringify([recipeData]));
      setFav(true);
    } else {
      const local = JSON.parse(localStorage.getItem('favoriteRecipes'));
      if (!fav) {
        localStorage.setItem('favoriteRecipes', JSON.stringify([...local, recipeData]));
        setFav(true);
      } else {
        const index = local.indexOf(recipeData);
        local.splice(index, 1);
        localStorage.setItem('favoriteRecipes', JSON.stringify(local));
        setFav(false);
      }
    }
  });

  useEffect(() => {
    if (localStorage.favoriteRecipes) {
      const local = JSON.parse(localStorage.getItem('favoriteRecipes'));
      local.forEach((recipe) => {
        if (recipe.id === id) {
          setFav(true);
        }
      });
    }
  }, []);

  return (
    <button
      type="button"
      onClick={ () => handleClick() }
    >
      <img
        src={ fav ? blackHeartIcon : whiteHeartIcon }
        alt="drink icon"
        data-testid="favorite-btn"
      />
    </button>
  );
};

export default FavoreButton;
