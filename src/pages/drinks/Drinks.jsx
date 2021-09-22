import React, { useContext, useEffect } from 'react';
import { Header, Footer } from '../../components';
import recipesContext from '../../context/recipesContext';

const Drinks = () => {
  const state = useContext(recipesContext);

  useEffect(() => {
    console.log(state.setPageName('bebidas'));
  }, [state]);
  return (
    <div>
      <Header title="Bebidas" />
      <Footer />
    </div>
  );
};

export default Drinks;
