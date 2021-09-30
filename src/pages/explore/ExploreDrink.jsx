import React from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../../components';
import SurpriseBtn from '../../components/exploreComponents/SurpriseBtn';

const ExploreDrink = () => (
  <div>
    <Header title="Explorar Bebidas" search={ false } />
    <Link to="/explorar/bebidas/ingredientes">
      <button
        type="button"
        data-testid="explore-by-ingredient"
      >
        Por Ingredientes
      </button>
    </Link>
    <SurpriseBtn />
    <Footer />
  </div>
);

export default ExploreDrink;
