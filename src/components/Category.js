import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import useFetch from '../hooks/useFetch';

const ifHandle = (request, categoryName, pageName, clicked) => {
  if (pageName === 'comidas') {
    if (categoryName === 'All' || clicked === false) {
      request('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    } else {
      request(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryName}`);
    }
  } else if (pageName === 'bebidas') {
    if (categoryName === 'All' || clicked === false) {
      request('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    } else {
      request(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${categoryName}`);
    }
  }
};

const Category = ({ pageName }) => {
  const [categoryList, setCategoryList] = useState(null);
  const { request, categories } = useFetch();
  const [clicked, setClicked] = useState(false);
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
  }, [categories, pageName]);

  const handleClick = (categoryName) => {
    setClicked(!clicked);
    ifHandle(request, categoryName, pageName, !clicked);
  };

  return (
    <section>
      {
        categoryList !== null && (
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
        categoryList !== null && categoryList.map((category, index) => (
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
