import React from 'react';
import PropTypes from 'prop-types';

const RecipePhoto = ({ url }) => (
  <div>
    <img data-testid="recipe-photo" src={ url } alt="" />
  </div>
);

RecipePhoto.propTypes = {
  url: PropTypes.string,
};

RecipePhoto.defaultProps = {
  url: 'Image Not Found',
};

export default RecipePhoto;
