import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Ingredients = ({ data }) => {
  const [ingredients, setIngredients] = useState([]);
  const pageName = window.location.pathname.split('/')[1];

  useEffect(() => {
    if (data !== null) {
      const arrayIng = [];
      const arrayMeas = [];

      // source https://stackoverflow.com/a/64509241 obrigado Deus
      switch (pageName) {
      case 'comidas':
        Object.keys(data.meals[0]).forEach((key) => {
          if (key.includes('strIngredient') && data.meals[0][key] !== null) {
            arrayIng.push(data.meals[0][key]);
          }
          if (key.includes('strMeasure') && data.meals[0][key] !== '') {
            arrayMeas.push(data.meals[0][key]);
          }
        });
        break;
      case 'bebidas':
        Object.keys(data.drinks[0]).forEach((key) => {
          if (key.includes('strIngredient') && (data.drinks[0][key] !== '' && data.drinks[0][key] !== null)) {
            arrayIng.push(data.drinks[0][key]);
          }
          if (key.includes('strMeasure') && (data.drinks[0][key] !== '' && data.drinks[0][key] !== null)) {
            arrayMeas.push(data.drinks[0][key]);
          }
        });
        break;
      default:
        break;
      }

      const aux = arrayMeas.map((measure, index) => `${measure} - ${arrayIng[index]}`);

      setIngredients(aux);
    }
  }, [data, pageName]);
  return (
    <div>
      <ul>
        { ingredients.map((ing, index) => (
          <li key={ index } data-testid={ `${index}-ingredient-name-and-measure` }>
            { ing }
          </li>
        )) }
      </ul>
    </div>
  );
};

Ingredients.propTypes = {
  data: PropTypes.objectOf(PropTypes.array).isRequired,
  meals: PropTypes.objectOf(PropTypes.object),
};

Ingredients.defaultProps = {
  meals: {},
};

export default Ingredients;
