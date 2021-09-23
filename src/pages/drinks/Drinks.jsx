import React, { useContext, useEffect } from 'react';
import { Header, Footer } from '../../components';
import { GlobalContext } from '../../context/GlobalStorage';

const Drinks = () => {
  const state = useContext(GlobalContext);

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
