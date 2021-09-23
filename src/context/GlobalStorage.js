import React, { useState } from 'react';
import PropTypes from 'prop-types';

export const GlobalContext = React.createContext();

const GlobalStorage = ({ children }) => {
  const [pageName, setPageName] = useState('');

  const value = { pageName, setPageName };

  return (
    <GlobalContext.Provider value={ value }>
      {children}
    </GlobalContext.Provider>
  );
};

GlobalStorage.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GlobalStorage;

// Componente para GlobalStorage baseado em https://www.origamid.com/slide/react-completo/#/0305-usecontext/5
