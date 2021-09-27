import React, { useContext, useEffect, useState } from 'react';
import { Header, Footer, RecipeCard, Category } from '../../components';
import { GlobalContext } from '../../context/GlobalStorage';
import useFetch from '../../hooks/useFetch';

const Foods = () => {
  const GLOBAL = useContext(GlobalContext);
  const [isList, setIsList] = useState(false);
  const [foods, setFoods] = useState(null);
  const { request } = useFetch();

  useEffect(() => {
    if (GLOBAL.responseFetch === null) {
      request('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    }
  });

  useEffect(() => {
    if (GLOBAL.responseFetch !== null) {
      const { meals } = GLOBAL.responseFetch;
      if (meals !== null) {
        const twelve = 12;
        setFoods(meals.slice(0, twelve));
        if (meals.length > 1) {
          setIsList(true);
        }
      }
    }
  }, [GLOBAL]);

  return (
    <div>
      <Header title="Comidas" />
      <Category pageName="comidas" />
      { isList && <RecipeCard products={ foods } pageName="comidas" /> }
      <Footer />
    </div>
  );
};

export default Foods;
