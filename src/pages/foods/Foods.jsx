import React, { useContext, useEffect } from 'react';
import { Header, Footer } from '../../components';
import { GlobalContext } from '../../context/GlobalStorage';

const Foods = () => {
  const GLOBAL = useContext(GlobalContext);

  useEffect(() => {
    GLOBAL.setPageName('comidas');
  }, [GLOBAL]);

  return (
    <div>
      <Header title="Comidas" />
      <Footer />
    </div>
  );
};
export default Foods;
