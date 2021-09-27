import React, { useContext, useEffect } from 'react';
import { GlobalContext } from '../../context/GlobalStorage';
import useFetch from '../../hooks/useFetchRecipe';

const RecommendationCards = () => {
  const GLOBAL = useContext(GlobalContext);
  const { request } = useFetch();

  useEffect(() => {
    const page = window.location.pathname;
    if (page.split('/')[1] === 'comidas') {
      request('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    } else {
      request('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    }
  }, [request]);

  return (
    <div data-testid="0-recomendation-card">
    </div>
  );
};

export default RecommendationCards;
