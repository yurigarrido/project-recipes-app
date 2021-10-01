import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import useFetchRandom from '../../hooks/useFetchRandom';
import useFetch from '../../hooks/useFetch';

const RecipeCardExplore = () => {
  const category = window.location.pathname.split('/')[2];
  const categoryName = category === 'comidas' ? 'meals' : 'drinks';
  const db = category === 'bebidas' ? 'thecocktaildb' : 'themealdb';
  const [list, setList] = useState(null);
  const { request: requestIng, data: dataIng } = useFetchRandom();
  const { request, data } = useFetch();
  const history = useHistory();

  useEffect(() => {
    requestIng(`https://www.${db}.com/api/json/v1/1/list.php?i=list`);
  }, [category]);

  useEffect(() => {
    const twelve = 12;
    if (dataIng) {
      if (category === 'comidas') {
        setList(
          dataIng[categoryName].slice(0, twelve).map((ing) => ing.strIngredient),
        );
      } else {
        setList(
          dataIng[categoryName].slice(0, twelve).map((ing) => ing.strIngredient1),
        );
      }
    }
  }, [dataIng, categoryName, category]);

  useEffect(() => {
    if (data) {
      history.push(`/${category}`);
    }
  }, [data, history, category]);

  const handleOnClick = (el) => {
    el.replace(' ', '_');
    request(`https://www.${db}.com/api/json/v1/1/filter.php?i=${el}`);
  };

  return (
    <div>
      {
        list && list.map((el, index) => (
          <button
            type="button"
            onClick={ () => handleOnClick(el) }
            key={ index }
            data-testid={ `${index}-ingredient-card` }
          >
            <span
              data-testid={ `${index}-card-name` }
            >
              {el}
            </span>
            <img
              data-testid={ `${index}-card-img` }
              src={ `https://www.${db}.com/images/ingredients/${el}-Small.png` }
              alt={ el }
            />
          </button>
        ))
      }
    </div>
  );
};

export default RecipeCardExplore;
