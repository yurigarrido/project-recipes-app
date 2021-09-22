import React, { useState } from 'react';

const SearchBar = () => {
  console.log(React);
  const [searchInput, setSearchInput] = useState('');
  const [option, setOption] = useState('name');

  const handleSubmit = () => {

  };

  return (
    <form onSubmit={ (e) => handleSubmit(e) }>
      <input
        type="text"
        data-testid="search-input"
        placeholder="Buscar Receita"
        onChange={ setSearchInput }
      />
      <input
        type="radio"
        id="Ingredientes"
        value="ingredients"
        data-testid="ingredient-search-radio"
        name="option"
        onChange={ ({ target: { e } }) => setOption(e.value) }
      />
      <input
        type="radio"
        id="name"
        checked="true"
        value="name"
        data-testid="name-search-radio"
        name="option"
        onChange={ ({ target: { e } }) => setOption(e.value) }
      />
      <input
        type="radio"
        id="first-letter"
        value="first-letter"
        data-testid="first-letter-search-radio"
        name="option"
        onChange={ ({ target: { e } }) => setOption(e.value) }
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
