import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../../context/GlobalStorage';
import { Header, Footer, RecipeCard, Category } from '../../components';
import useFetch from '../../hooks/useFetch';

const Drinks = () => {
  const GLOBAL = useContext(GlobalContext);
  const [isList, setIsList] = useState(false);
  const [drinksArray, setDrinksArray] = useState(null);
  const { request } = useFetch();

  useEffect(() => {
    if (GLOBAL.responseFetch === null) {
      request('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=');
    }
  }, []);

  useEffect(() => {
    if (GLOBAL.responseFetch !== null && GLOBAL.responseFetch !== undefined) {
      const { drinks } = GLOBAL.responseFetch;
      if (drinks !== null) {
        const twelve = 12;
        setDrinksArray(drinks.slice(0, twelve));
        if (drinks.length > 1) {
          setIsList(true);
        }
      }
    }
  }, [GLOBAL]);

  return (
    <div>
      <Header title="Bebidas" />
      <Category pageName="bebidas" />
      { isList && <RecipeCard products={ drinksArray } pageName="bebidas" /> }
      <Footer />
    </div>
  );
};

export default Drinks;
