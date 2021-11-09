import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';

const ifHandle = (values, request, setCategoryAux) => {
  const {
    pageName,
    categoryName,
    categoryAux,
  } = values;

  if (pageName === 'comidas') {
    if (categoryName === 'All' || categoryName === categoryAux) {
      request('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      setCategoryAux(categoryName);
    } else {
      request(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
      setCategoryAux(categoryName);
    }
  } else if (pageName === 'bebidas') {
    if (categoryName === 'All' || categoryName === categoryAux) {
      request('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      setCategoryAux(categoryName);
    } else {
      request(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryName}`);
      setCategoryAux(categoryName);
    }
  }
};

const Category = ({ pageName }) => {
  const [categoryList, setCategoryList] = useState(null);
  const [categoryAux, setCategoryAux] = useState(null);
  const { request, categories } = useFetch();
  const [aux, setAux] = useState(false);

  if (!aux) {
    if (pageName === 'comidas') {
      request('https://www.themealdb.com/api/json/v1/1/list.php?c=list', true);
      setAux(true);
    } else if (pageName === 'bebidas') {
      request('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list', true);
      setAux(true);
    }
  }

  useEffect(() => {
    const five = 5;
    if (categories) {
      if (pageName === 'comidas') setCategoryList(categories.meals.slice(0, five));
      else if (pageName === 'bebidas') setCategoryList(categories.drinks.slice(0, five));
    }
  }, [categories, pageName]);

  const handleClick = (categoryName) => {
    const values = {
      categoryName,
      pageName,
      categoryAux,
    };
    ifHandle(values, request, setCategoryAux);
  };

  return (
    <section>
      {
        categoryList && (
          <button
            data-testid="All-category-filter"
            type="button"
            onClick={ () => handleClick('All') }
          >
            All
          </button>
        )
      }
      {
        categoryList && categoryList.map((category, index) => (
          <button
            key={ index }
            data-testid={ `${category.strCategory}-category-filter` }
            type="button"
            onClick={ () => handleClick(category.strCategory) }
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
