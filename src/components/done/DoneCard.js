import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './css/doneCard.module.css';
import ShareButton from './ShareButton';

const DoneCard = ({ recipesDone }) => (
  <div>
    {recipesDone && recipesDone.map((recipe, index) => (
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
        <p data-testid={ `${index}-horizontal-done-date` }>{ recipe.doneDate }</p>
        { recipe.tags.map((tag) => (
          <span key={ tag } data-testid={ `${index}-${tag}-horizontal-tag` }>{ tag }</span>
        )) }
        <ShareButton type={ recipe.type } id={ recipe.id } index={ index } />
      </div>
    ))}
  </div>
);

DoneCard.propTypes = {
  recipesDone: PropTypes.shape([]).isRequired,
};

export default DoneCard;
