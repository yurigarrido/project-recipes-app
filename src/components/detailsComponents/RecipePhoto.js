import React from 'react';
import PropTypes from 'prop-types';
import styles from './css/RecipePhoto.module.css';

const RecipePhoto = ({ url }) => (
  <div className={ styles.image_card }>
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
