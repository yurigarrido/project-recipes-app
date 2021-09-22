import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

const Footer = () => (
  <div data-testid="footer" className="footer-div">
    <Link
      to="/bebidas"
    >
      <img src={ drinkIcon } data-testid="drinks-bottom-btn" alt="drink icon" />
    </Link>

    <Link
      to="/explorar"
    >
      <img src={ exploreIcon } data-testid="explore-bottom-btn" alt="explore icon" />
    </Link>

    <Link
      to="/comidas"
    >
      <img src={ mealIcon } data-testid="food-bottom-btn" alt="food icon" />
    </Link>
  </div>
);

export default Footer;
