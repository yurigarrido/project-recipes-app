import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { GlobalContext } from '../context/GlobalStorage';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import '../App.css';

const Footer = () => {
  const { setResponseFetch } = useContext(GlobalContext);
  const handleClick = () => {
    setResponseFetch(null);
  };

  return (
    <div data-testid="footer" className="footer-div">
      <Link
        to="/bebidas"
      >
        <button type="button" onClick={ () => handleClick() }>
          <img src={ drinkIcon } data-testid="drinks-bottom-btn" alt="drink icon" />
        </button>
      </Link>

      <Link
        to="/explorar"
      >
        <button type="button" onClick={ () => handleClick() }>
          <img src={ exploreIcon } data-testid="explore-bottom-btn" alt="explore icon" />
        </button>
      </Link>

      <Link
        to="/comidas"
      >
        <button type="button" onClick={ () => handleClick() }>
          <img src={ mealIcon } data-testid="food-bottom-btn" alt="food icon" />
        </button>
      </Link>
    </div>
  );
};

export default Footer;
