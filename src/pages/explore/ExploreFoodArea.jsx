import React, { useEffect, useContext } from 'react';
import { Header, Footer } from '../../components';
import { GlobalContext } from '../../context/GlobalStorage';

const ExploreFoodArea = () => {
  const state = useContext(GlobalContext);

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
