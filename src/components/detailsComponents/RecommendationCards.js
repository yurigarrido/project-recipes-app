import React, { useState, useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalStorage';
import useFetch from '../../hooks/useFetch';

import styles from './css/RecommendationCards.module.css';

const RecommendationCards = () => {
  const GLOBAL = useContext(GlobalContext);
  const [recomendationName, setRecomendation] = useState(null);
  const [caroulsel, setCaroulsel] = useState(null);
  const { request } = useFetch();
  const six = 6;

  useEffect(() => {
    const page = window.location.pathname;
    if (page.split('/')[1] === 'comidas') {
      request('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
      setRecomendation('drinks');
    } else {
      request('https://www.themealdb.com/api/json/v1/1/search.php?s=');
      setRecomendation('meals');
    }
  }, []);

  useEffect(() => {
    if (GLOBAL.responseFetch !== null && recomendationName !== null) {
      setCaroulsel(GLOBAL.responseFetch[recomendationName]);
    }
  }, [GLOBAL, recomendationName]);

  return (
    <div>
      {
        caroulsel !== null && caroulsel.slice(0, six).map((el, index) => (
          <div
            data-testid={ `${index}-recomendation-card` }
            key={ index }
            className={ styles.card }
          >
            <img
              src={
                recomendationName === 'drinks' ? el.strDrinkThumb : el.strMealThumb
              }
              alt={ recomendationName === 'drinks' ? el.strDrink : el.strMeal }
            />
          </div>
        ))
      }
    </div>
  );
};

export default RecommendationCards;
