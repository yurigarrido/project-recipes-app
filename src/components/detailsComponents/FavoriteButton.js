import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

const recipeDataAux = (data, id, categoryType) => {
  const recipe = {
    id,
    type: categoryType,
    area: categoryType === 'comida' ? data.strArea : '',
    category: data.strCategory,
    alcoholicOrNot: categoryType === 'bebida' ? data.strAlcoholic : '',
    name: categoryType === 'comida' ? data.strMeal : data.strDrink,
    image: categoryType === 'comida' ? data.strMealThumb : data.strDrinkThumb,
  };
  return recipe;
};

const FavoreButton = ({ data }) => {
  const category = window.location.pathname.split('/')[1];
  const id = window.location.pathname.split('/')[2];
  const categoryType = category === 'comidas' ? 'comida' : 'bebida';
  const [fav, setFav] = useState(false);

  const handleClick = (() => {
    const recipeData = recipeDataAux(data, id, categoryType);
    if (!localStorage.favoriteRecipes) {
      localStorage.favoriteRecipes = JSON.stringify([recipeData]);
      setFav(true);
    } else {
      const local = JSON.parse(localStorage.favoriteRecipes);
      if (!fav) {
        localStorage.favoriteRecipes = JSON.stringify([...local, recipeData]);
        setFav(true);
      } else {
        const index = local.findIndex((i) => i.id === id);
        local.splice(index, 1);
        localStorage.favoriteRecipes = JSON.stringify(local);
        setFav(false);
      }
    }
  });

  useEffect(() => {
    if (localStorage.favoriteRecipes) {
      const local = JSON.parse(localStorage.favoriteRecipes);
      local.forEach((recipe) => {
        if (recipe.id === id) {
          setFav(true);
        }
      });
    }
  }, [id]);

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

FavoreButton.propTypes = {
  data: PropTypes.shape({}).isRequired,
};

export default FavoreButton;
