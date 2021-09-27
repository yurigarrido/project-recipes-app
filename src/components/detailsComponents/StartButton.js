import React from 'react';
import styles from './css/StartButton.module.css';

const StartButton = () => (
  <button className={ styles.button } type="button" data-testid="start-recipe-btn">
    Iniciar Receita
  </button>
);

export default StartButton;
