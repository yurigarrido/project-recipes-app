import React from 'react';
import PropTypes from 'prop-types';
import styles from './css/recipeCard.module.css';

const RecipeCard = ({ products, pageName }) => (
  <section>
    {
      products.map((product, index) => (
        <div
          data-testid={ `${index}-recipe-card` }
          key={ index }
          className={ styles.card }
        >
          <img
            data-testid={ `${index}-card-img` }
            src={ pageName === 'comidas' ? product.strMealThumb : product.strDrinkThumb }
            alt={ pageName === 'comidas' ? product.strMeal : product.strDrink }
          />
          <span data-testid={ `${index}-card-name` }>
            { pageName === 'comidas' ? product.strMeal : product.strDrink }
          </span>
        </div>
      ))
    }
  </section>
);

RecipeCard.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageName: PropTypes.string.isRequired,
};

export default RecipeCard;
