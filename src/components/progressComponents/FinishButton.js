import React from 'react';
import { Link } from 'react-router-dom';

const FinishButton = () => (
  <div>
    <Link to="/receitas-feitas">
      <button
        data-testid="finish-recipe-btn"
        type="button"
        disabled={ false }
      >
        Finish
      </button>
    </Link>
  </div>
);

export default FinishButton;
