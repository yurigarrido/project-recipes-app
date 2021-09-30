import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './css/StartButton.module.css';

const StartButton = () => {
  const category = window.location.pathname.split('/')[1];
  const id = window.location.pathname.split('/')[2];
  const [buttonText, setButtonText] = useState('Iniciar Receita');
  const categoryType = category === 'comidas' ? 'meals' : 'cocktails';

  useEffect(() => {
    if (localStorage.inProgressRecipes) {
      const local = JSON.parse(localStorage.inProgressRecipes);
      if (Object.keys(local[categoryType]).includes(id)) {
        setButtonText('Continuar Receita');
      }
    }
  }, [categoryType, id]);

  const handleClick = () => {
    if (!localStorage.inProgressRecipes) {
      if (category === 'comidas') {
        localStorage.inProgressRecipes = JSON.stringify(
          { cocktails: {}, meals: { [id]: [] } },
        );
      } else {
        localStorage.inProgressRecipes = JSON.stringify(
          { cocktails: { [id]: [] }, meals: {} },
        );
      }
    } else {
      const local = JSON.parse(localStorage.inProgressRecipes);
      localStorage.inProgressRecipes = JSON.stringify(
        {
          ...local,
          [categoryType]: { ...local[categoryType], [id]: [] },
        },
      );
    }
  };

  return (
    <Link to={ `/${category}/${id}/in-progress` }>
      <button
        className={ styles.button }
        type="button"
        data-testid="start-recipe-btn"
        onClick={ handleClick }
      >
        { buttonText }
      </button>
    </Link>
  );
};

export default StartButton;
