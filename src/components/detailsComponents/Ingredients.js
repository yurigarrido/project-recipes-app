import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Ingredients = ({ data }) => {
  const [ingredients, setIngredients] = useState([]);
  const [pageName, setPageName] = useState(null);

  useEffect(() => {
    const page = window.location.pathname;
    if (pageName === null) {
      if (page.split('/')[1] === 'comidas') {
        setPageName('meals');
      } else {
        setPageName('drinks');
      }
    }
  }, [pageName]);

  useEffect(() => {
    if (data !== null && pageName !== null) {
      const arrayIng = [];
      const arrayMeas = [];

      // source https://stackoverflow.com/a/64509241 obrigado Deus
      Object.keys(data[pageName][0]).forEach((key) => {
        if (key.includes('strIngredient') && (data[pageName][0][key] !== null
          && data[pageName][0][key] !== '' && data[pageName][0][key] !== undefined)) {
          arrayIng.push(data[pageName][0][key]);
        }
        if (key.includes('strMeasure') && (data[pageName][0][key] !== null
          && data[pageName][0][key] !== '' && data[pageName][0][key] !== undefined)) {
          arrayMeas.push(data[pageName][0][key]);
        }
      });

      const aux = arrayIng.map((ing, index) => {
        if (arrayMeas[index] === undefined) {
          return ing;
        }
        return `${arrayMeas[index]} - ${ing}`;
      });

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
};

export default Ingredients;
