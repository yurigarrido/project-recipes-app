import React, { useContext, useEffect } from 'react';
import { Header, Footer } from '../../components';
import recipesContext from '../../context/recipesContext';

const Foods = () => {
  const state = useContext(recipesContext);

  useEffect(() => {
    console.log(state.setPageName('comidas'));
  }, [state]);

  return (
    <div>
      <Header title="Comidas" />
      <Footer />
    </div>
  );
};
export default Foods;
