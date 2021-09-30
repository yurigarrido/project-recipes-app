import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../../components';

const Explore = () => (
  <div>
    <Header title="Explorar" search={ false } />
    <Link to="/explorar/comidas">
      <button
        type="button"
        data-testid="explore-food"
      >
        Explorar Comidas
      </button>
    </Link>
    <Link to="/explorar/bebidas">
      <button
        type="button"
        data-testid="explore-drinks"
      >
        Explorar Bebidas
      </button>
    </Link>
    <Footer />
  </div>
);

export default Explore;
