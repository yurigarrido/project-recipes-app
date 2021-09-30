import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './css/ingredient.module.css';

const Ingredients = ({ data }) => {
  const [ingredients, setIngredients] = useState([]);
  const [checkedIng, setCheckedIng] = useState([]);
  const [pageName, setPageName] = useState(null);

  const handleChange = (position) => {
    const updateCheckedIng = checkedIng
      .map((ing, index) => (index === position ? !ing : ing));
    setCheckedIng(updateCheckedIng);
  };

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
    if (data && pageName) {
      const arrayOfIngredients = data[pageName][0];
      const arrayIng = [];
      const arrayMeas = [];
      // source https://stackoverflow.com/a/64509241 obrigado Deus
      Object.keys(arrayOfIngredients).forEach((key) => {
        if (key.includes('strIngredient') && (arrayOfIngredients[key])) {
          arrayIng.push(arrayOfIngredients[key]);
        }
        if (key.includes('strMeasure') && (arrayOfIngredients[key])) {
          arrayMeas.push(arrayOfIngredients[key]);
        }
      });
      const aux = arrayIng.map((ing, index) => {
        if (!arrayMeas[index]) {
          return ing;
        }
        return `${arrayMeas[index]} - ${ing}`;
      });
      setCheckedIng(Array(aux.length).fill(false));
      setIngredients(aux);
    }
  }, [data, pageName]);

  return (
    <div>
      <ul>
        { ingredients.map((ing, index) => (
          <li
            key={ index }
            data-testid={ `${index}-ingredient-step` }
          >
            <input
              id={ `ing-${index}` }
              type="checkbox"
              checked={ checkedIng[index] }
              onChange={ () => handleChange(index) }
            />
            <label
              htmlFor={ `ing-${index}` }
              className={ checkedIng[index] ? styles.checked : '' }
            >
              { ing }
            </label>
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

// Source logic of Checkbox from https://www.freecodecamp.org/news/how-to-work-with-multiple-checkboxes-in-react/
