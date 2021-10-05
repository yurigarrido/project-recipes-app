import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useFetchRandom from '../../hooks/useFetchRandom';

const SurpriseBtn = () => {
  const { request, data } = useFetchRandom();
  const [randomId, setRandomId] = useState(null);
  const category = window.location.pathname.split('/')[2];

  useEffect(() => {
    if (category === 'comidas') {
      request('https://www.themealdb.com/api/json/v1/1/random.php');
    } else {
      request('https://www.thecocktaildb.com/api/json/v1/1/random.php');
    }
  }, [category, request]);

  useEffect(() => {
    if (data && category === 'comidas') {
      setRandomId(data.meals[0].idMeal);
    }
    if (data && category === 'bebidas') {
      setRandomId(data.drinks[0].idDrink);
    }
    console.log(data);
  }, [data, category]);

  return (
    <div>
      {
        randomId && (
          <Link to={ `/${category}/${randomId}` }>
            <button
              type="button"
              data-testid="explore-surprise"
            >
              Me Surpreenda!
            </button>
          </Link>
        )
      }
    </div>
  );
};

export default SurpriseBtn;
