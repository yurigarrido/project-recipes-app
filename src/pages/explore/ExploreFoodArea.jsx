import React, { useEffect, useContext } from 'react';
import { Header, Footer } from '../../components';
import { GlobalContext } from '../../context/GlobalStorage';

const ExploreFoodArea = () => {
  const GLOBAL = useContext(GlobalContext);

  useEffect(() => {
    GLOBAL.setPageName('comidas');
  }, [GLOBAL]);

  return (
    <div>
      <Header title="Explorar Origem" />
      <Footer />
    </div>
  );
};

export default ExploreFoodArea;
