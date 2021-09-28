import React, { useState, useEffect } from 'react';
import styles from './css/StartButton.module.css';

const StartButton = () => {
  const [showButton, setShowButton] = useState(true);
  const [nameButton, setNameButton] = useState('Iniciar Receita');
  const [dataLocalStorage, setDataLocalStorage] = useState(null);

  useEffect(() => {
    const category = window.location.pathname.split('/')[1];
    const id = window.location.pathname.split('/')[2];
    if (localStorage[category]) {
      const localData = JSON.parse(localStorage[category]);
      const test = localData.find((data) => {
        return data === id;
      });
      console.log(test);
    }
  }, []);

  const handleClick = () => {
    const category = window.location.pathname.split('/')[1];
    const id = window.location.pathname.split('/')[2];
    if (localStorage[category]) {
      const localData = JSON.parse(localStorage[category]);
      const localUpdate = [...localData, id];
      localStorage[category] = JSON.stringify(localUpdate);
    } else {
      localStorage[category] = JSON.stringify([id]);
    }
  };

  return (
    <button
      className={ styles.button }
      type="button"
      data-testid="start-recipe-btn"
      onClick={ handleClick }
    >
      {nameButton}
    </button>
  );
};

// localStorage.setItem('category', 'id');
// localStorage.getItem('category');

export default StartButton;
