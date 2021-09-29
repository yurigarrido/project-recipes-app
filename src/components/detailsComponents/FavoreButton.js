import React from 'react';
import whiteHeartIcon from '../../images/whiteHeartIcon.svg';

const FavoreButton = () => {
  const handleClick = (() => {
    console.log('oi');
  });

  return (
    <button
      type="button"
      onClick={ () => handleClick() }
    >
      <img
        src={ whiteHeartIcon }
        alt="drink icon"
        data-testid="favorite-btn"
      />
    </button>
  );
};

export default FavoreButton;
