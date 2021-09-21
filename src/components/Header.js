import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <Link
      to="/perfil"
      data-testid="profile-top-btn"
    >
      Profile
    </Link>
    <h1 data-testid="page-title">Recipes</h1>
    <button type="button" data-testid="search-top-btn">Search</button>
  </header>
);

export default Header;
