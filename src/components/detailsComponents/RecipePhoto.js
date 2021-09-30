import React from 'react';
import PropTypes from 'prop-types';
import styles from './css/RecipePhoto.module.css';

import imageNotFound from '../../images/imageNotFound.jpg';

const RecipePhoto = ({ url }) => (
  <div className={ styles.image_card }>
    <img data-testid="recipe-photo" src={ url } alt="Recipe" />
  </div>
);

RecipePhoto.propTypes = {
  url: PropTypes.string,
};

RecipePhoto.defaultProps = {
  url: imageNotFound,
};

export default RecipePhoto;
