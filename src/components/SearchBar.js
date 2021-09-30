import React, { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import { GlobalContext } from '../context/GlobalStorage';

const FIRST_LETTER = 'first-letter';
const INGREDIENTS = 'ingredients';
const NAME = 'name';

const SearchBar = () => {
  const { request } = useFetch();
  const { responseFetch, setResponseFetch } = useContext(GlobalContext);
  const history = useHistory();
  const [searchInput, setSearchInput] = useState('');
  const [option, setOption] = useState('name');
  const pageName = window.location.pathname.split('/')[1];

  useEffect(() => {
    if (responseFetch && pageName === 'comidas') {
      if (responseFetch.meals === null) {
        setSearchInput('');
        setResponseFetch(null);
        global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      } else if (responseFetch.meals.length === 1) {
        const { idMeal } = responseFetch.meals[0];
        history.push(`comidas/${idMeal}`);
      }
    } else if (responseFetch && pageName === 'bebidas') {
      if (responseFetch.drinks === null) {
        setSearchInput('');
        setResponseFetch(null);
        global.alert('Sinto muito, não encontramos nenhuma receita para esses filtros.');
      } else if (responseFetch.drinks.length === 1) {
        const { idDrink } = responseFetch.drinks[0];
        history.push(`/bebidas/${idDrink}`);
      }
    }
  }, [responseFetch, history, pageName, setResponseFetch]);

  const ifHandle = async (op, method) => {
    if (pageName === 'comidas') {
      await request(`https://www.themealdb.com/api/json/v1/1/${method}.php?${op}=${searchInput}`);
    } else if (pageName === 'bebidas') {
      await request(`https://www.thecocktaildb.com/api/json/v1/1/${method}.php?${op}=${searchInput}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchInput.length > 1 && option === FIRST_LETTER) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
      await setResponseFetch(null);
      setSearchInput('');
    } else {
      switch (option) {
      case INGREDIENTS:
        ifHandle('i', 'filter');
        break;
      case NAME:
        await ifHandle('s', 'search');
        break;
      case FIRST_LETTER:
        ifHandle('f', 'search');
        break;
      default:
        return null;
      }
    }
  };

  return (
    <form onSubmit={ (e) => handleSubmit(e) }>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Buscar Receita"
        onChange={ (e) => setSearchInput(e.target.value) }
        value={ searchInput }
      />
      <label htmlFor="ingredient-search-radio">
        Ingredientes
        <input
          type="radio"
          id="Ingredientes"
          value={ INGREDIENTS }
          data-testid="ingredient-search-radio"
          name="option"
          onClick={ () => setOption(INGREDIENTS) }
        />
      </label>
      <label htmlFor="name-search-radio">
        Nome
        <input
          type="radio"
          id="Name"
          value={ NAME }
          data-testid="name-search-radio"
          name="option"
          onClick={ () => setOption(NAME) }
          defaultChecked
        />
      </label>
      <label htmlFor="first-letter-search-radio">
        Primeira letra
        <input
          type="radio"
          id={ FIRST_LETTER }
          value={ FIRST_LETTER }
          data-testid="first-letter-search-radio"
          name="option"
          onClick={ () => setOption(FIRST_LETTER) }
        />
      </label>
      <button
        type="submit"
        data-testid="exec-search-btn"
      >
        Buscar
      </button>
    </form>
  );
};

export default SearchBar;
