import React, { useContext, useEffect, useState } from 'react';
import { Header, Footer, RecipeCard } from '../../components';
import { GlobalContext } from '../../context/GlobalStorage';

const Foods = () => {
  const GLOBAL = useContext(GlobalContext);
  const [isList, setIsList] = useState(false);
  const [foods, setFoods] = useState(null);

  useEffect(() => {
    if (GLOBAL.responseFetch !== null) {
      const { meals } = GLOBAL.responseFetch;
      const twelve = 12;
      setFoods(meals.slice(0, twelve));
      if (meals.length > 1) {
        setIsList(true);
      }
    }
  }, [GLOBAL]);

  return (
    <div>
      <Header title="Comidas" />
      { isList && <RecipeCard products={ foods } pageName="comidas" /> }
      <Footer />
    </div>
  );
};

export default Foods;
