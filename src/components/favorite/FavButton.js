import React from 'react';
import PropTypes from 'prop-types';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

const FavoreButton = ({ data, aux, setAux, index }) => {
  const { id } = data;

  const handleClick = (() => {
    const local = JSON.parse(localStorage.favoriteRecipes);
    const ind = local.findIndex((i) => i.id === id);
    local.splice(ind, 1);
    localStorage.favoriteRecipes = JSON.stringify(local);
    setAux(!aux);
  });

  return (
    <button
      type="button"
      onClick={ () => handleClick() }
    >
      <img
        data-testid={ `${index}-horizontal-favorite-btn` }
        src={ blackHeartIcon }
        alt="drink icon"
      />
    </button>
  );
};

FavoreButton.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
  aux: PropTypes.bool.isRequired,
  setAux: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default FavoreButton;
