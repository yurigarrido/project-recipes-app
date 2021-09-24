import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';

const Category = ({ pageName }) => {
  const [categoryList, setCategoryList] = useState(null);
  const { request, categories } = useFetch();
  const [aux, setAux] = useState(false);

  if (aux === false) {
    if (pageName === 'comidas' && aux === false) {
      request('https://www.themealdb.com/api/json/v1/1/list.php?c=list', true);
      setAux(true);
    } else if (pageName === 'bebidas' && aux === false) {
      request('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list', true);
      setAux(true);
    }
  }

  useEffect(() => {
    const five = 5;
    if (categories !== null) {
      if (pageName === 'comidas') {
        setCategoryList(categories.meals.slice(0, five));
      } else if (pageName === 'bebidas') {
        setCategoryList(categories.drinks.slice(0, five));
      }
    }
    console.log(categories);
  }, [categories, pageName]);

  return (
    <section>
      {
        categoryList !== null && categoryList.map((category, index) => (
          <button
            key={ index }
            data-testid={ `${category.strCategory}-category-filter` }
            type="button"
            // onClick={ () => 'colocar lógica do fetch' }
          >
            { category.strCategory }
          </button>
        ))
      }
    </section>
  );
};

Category.propTypes = {
  pageName: PropTypes.string.isRequired,
};

export default Category;
