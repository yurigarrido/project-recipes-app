import React, { useState, useContext } from 'react';
import useFetch from '../hooks/useFetch';
import recipesContext from '../context/recipesContext';

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState('');
  const [option, setOption] = useState('name');
  const { request, data } = useFetch();
  const FIRST_LETTER = 'first-letter';
  const INGREDIENTS = 'ingredients';
  const NAME = 'name';
  const state = useContext(recipesContext);

  const ifHandle = async (op, method) => {
    if (state.pageName === 'comidas') {
      await request(`https://www.themealdb.com/api/json/v1/1/${method}.php?${op}=${searchInput}`);
    } else if (state.pageName === 'bebidas') {
      await request(`https://www.thecocktaildb.com/api/json/v1/1/${method}.php?${op}=${searchInput}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (searchInput.length > 1 && option === FIRST_LETTER) {
      global.alert('Sua busca deve conter somente 1 (um) caracter');
    } else {
      switch (option) {
      case INGREDIENTS:
        ifHandle('i', 'filter');
        break;
      case NAME:
        await ifHandle('s', 'search');
        console.log(data);
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
      />
      <input
        type="radio"
        id="Ingredientes"
        value={ INGREDIENTS }
        data-testid="ingredient-search-radio"
        name="option"
        onClick={ () => setOption(INGREDIENTS) }
      />
      <input
        type="radio"
        id="Name"
        value={ NAME }
        data-testid="name-search-radio"
        name="option"
        onClick={ () => setOption(NAME) }
        defaultChecked
      />
      <input
        type="radio"
        id={ FIRST_LETTER }
        value={ FIRST_LETTER }
        data-testid="first-letter-search-radio"
        name="option"
        onClick={ () => setOption(FIRST_LETTER) }
      />
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
