import React, { useState, useEffect } from 'react';
import useFetchRecommendation from '../../hooks/useFetchRecommendation';

import styles from './css/RecommendationCards.module.css';

const RecommendationCards = () => {
  const [recomendationName, setRecomendation] = useState(null);
  const [caroulsel, setCaroulsel] = useState(null);
  const { request, data } = useFetchRecommendation();
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
    if (data !== null && recomendationName !== null) {
      setCaroulsel(data[recomendationName]);
    }
  }, [data, recomendationName, caroulsel]);

  return (
    <div className={ styles.carousel }>
      {
        (caroulsel !== undefined && caroulsel !== null)
        && caroulsel.slice(0, six).map((el, index) => (
          <div
            data-testid={ `${index}-recomendation-card` }
            key={ index }
            className={ styles.card }
          >
            <img
              src={
                recomendationName === 'drinks'
                  ? el.strDrinkThumb
                  : el.strMealThumb
              }
              alt={ recomendationName === 'drinks'
                ? el.strDrink
                : el.strMeal }
            />
            <p data-testid={ `${index}-recomendation-title` }>
              {
                recomendationName === 'drinks'
                  ? el.strDrink
                  : el.strMeal
              }
            </p>
          </div>
        ))
      }
    </div>
  );
};

export default RecommendationCards;
