import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Header, Footer } from '../components';

const Profile = () => {
  const [emailProfile, setEmailProfile] = useState(null);

  useEffect(() => {
    if (localStorage.user) {
      const { email } = JSON.parse(localStorage.user);
      setEmailProfile(email);
    }
  }, []);

  return (
    <div>
      <Header title="Perfil" search={ false } />
      <h2 data-testid="profile-email">{ emailProfile }</h2>

      <Link to="/receitas-feitas">
        <button type="button" data-testid="profile-done-btn">Receitas Feitas</button>
      </Link>

      <Link to="/receitas-favoritas">
        <button
          type="button"
          data-testid="profile-favorite-btn"

        >
          Receitas Favoritas
        </button>
      </Link>

      <Link to="/">
        <button
          type="button"
          data-testid="profile-logout-btn"
          onClick={ () => localStorage.clear() }
        >
          Sair
        </button>
      </Link>

      <Footer />
    </div>);
};

export default Profile;
