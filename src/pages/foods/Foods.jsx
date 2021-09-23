import React, { useContext, useEffect } from 'react';
import { Header, Footer } from '../../components';
import { GlobalContext } from '../../context/GlobalStorage';

const Foods = () => {
  const state = useContext(GlobalContext);

  useEffect(() => {
    state.setPageName('comidas');
    console.log(state.pageName);
  }, [state]);

  return (
    <div>
      <Header title="Comidas" />
      <Footer />
    </div>
  );
};
export default Foods;
