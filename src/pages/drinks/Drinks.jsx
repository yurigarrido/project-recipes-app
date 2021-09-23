import React, { useContext, useEffect, useState } from 'react';
import { Header, Footer, RecipeCard } from '../../components';
import { GlobalContext } from '../../context/GlobalStorage';

const Drinks = () => {
  const GLOBAL = useContext(GlobalContext);
  const [isList, setIsList] = useState(false);
  const [drinksArray, setDrinksArray] = useState(null);

  useEffect(() => {
    if (GLOBAL.responseFetch !== null) {
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
      { isList && <RecipeCard products={ drinksArray } pageName="bebidas" /> }
      <Footer />
    </div>
  );
};

export default Drinks;
