import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../../components';
import SurpriseBtn from '../../components/exploreComponents/SurpriseBtn';

const ExploreFood = () => (
  <div>
    <Header title="Explorar Comidas" search={ false } />
    <Link to="/explorar/comidas/ingredientes">
      <button
        type="button"
        data-testid="explore-by-ingredient"
      >
        Por Ingredientes
      </button>
    </Link>
    <Link to="/explorar/comidas/area">
      <button
        type="button"
        data-testid="explore-by-area"
      >
        Por Local de Origem
      </button>
    </Link>
    <SurpriseBtn />
    <Footer />
  </div>
);

export default ExploreFood;
