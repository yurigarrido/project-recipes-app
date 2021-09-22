import React, { useEffect, useContext } from 'react';
import { Header, Footer } from '../../components';
import recipesContext from '../../context/recipesContext';

const ExploreFoodArea = () => {
  const state = useContext(recipesContext);

  useEffect(() => {
    console.log(state.setPageName('comidas'));
  }, [state]);

  return (
    <div>
      <Header title="Explorar Origem" />
      <Footer />
    </div>
  );
};

export default ExploreFoodArea;
