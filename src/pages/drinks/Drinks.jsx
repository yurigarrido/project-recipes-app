import React, { useContext, useEffect } from 'react';
import { Header, Footer } from '../../components';
import { GlobalContext } from '../../context/GlobalStorage';

const Drinks = () => {
  const GLOBAL = useContext(GlobalContext);

  useEffect(() => {
    GLOBAL.setPageName('bebidas');
  }, [GLOBAL]);
  return (
    <div>
      <Header title="Bebidas" />
      <Footer />
    </div>
  );
};

export default Drinks;
