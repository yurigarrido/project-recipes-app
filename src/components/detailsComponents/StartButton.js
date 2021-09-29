import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './css/StartButton.module.css';

const StartButton = () => {
  const [progress, setProgress] = useState({ cocktails: {}, meals: {} });
  // const [showButton, setShowButton] = useState(true);

  const category = window.location.pathname.split('/')[1];
  const id = window.location.pathname.split('/')[2];

  const handleClick = () => {
    const categoryType = category === 'comidas' ? 'meals' : 'cocktails';
    // precisamos fazer verificação se o localstorage existe e adicionar novos ids
    setProgress({ ...progress, ...progress[categoryType][id] = [] });
    localStorage.setItem('inProgressRecipes', JSON.stringify(progress));
  };

  return (
    <Link to={ `/${category}/${id}/in-progress` }>
      <button
        className={ styles.button }
        type="button"
        data-testid="start-recipe-btn"
        onClick={ handleClick }
      >
        Iniciar Receita
      </button>
    </Link>
  );
};

export default StartButton;
