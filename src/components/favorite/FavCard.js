import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './css/favCard.module.css';
import ShareButton from './ShareButton';
import FavoreButton from './FavButton';

const FavCard = ({ recipes, aux, setAux }) => (
  <div>
    {recipes && recipes.map((recipe, index) => (
      <div
        className={ styles.card }
        key={ index }
      >
        <Link to={ `/${recipe.type}s/${recipe.id}` }>
          <img
            data-testid={ `${index}-horizontal-image` }
            src={ recipe.image }
            alt={ recipe.name }
          />
        </Link>
        <span data-testid={ `${index}-horizontal-top-text` }>
          { recipe.area.length > 0 ? `${recipe.area} - ` : ''}
          { recipe.alcoholicOrNot.length > 0 ? `${recipe.alcoholicOrNot} - ` : ''}
          { recipe.category }
        </span>
        <Link to={ `/${recipe.type}s/${recipe.id}` }>
          <p data-testid={ `${index}-horizontal-name` }>
            { recipe.name }
          </p>
        </Link>
        <ShareButton type={ recipe.type } id={ recipe.id } index={ index } />
        <FavoreButton data={ recipe } aux={ aux } setAux={ setAux } index={ index } />
      </div>
    ))}
  </div>
);

FavCard.propTypes = {
  recipes: PropTypes.shape([]).isRequired,
  aux: PropTypes.bool.isRequired,
  setAux: PropTypes.func.isRequired,
};

export default FavCard;
