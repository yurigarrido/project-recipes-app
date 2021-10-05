import React, { useEffect, useState } from 'react';
import { Header, Footer, RecipeCard } from '../../components';
import useFetchRandom from '../../hooks/useFetchRandom';
import useFetchRecipe from '../../hooks/useFetchRecipe';

const ExploreFoodArea = () => {
  const [selected, setSelected] = useState('All');
  const [areaList, setAreaList] = useState(null);
  const [products, setProducts] = useState(null);
  const { request: requestArea, data: dataArea } = useFetchRandom();
  const { request: requestProduct, data: dataProduct } = useFetchRecipe();

  useEffect(() => {
    requestArea('https://www.themealdb.com/api/json/v1/1/list.php?a=list');
  }, []);

  useEffect(() => {
    if (dataArea) {
      setAreaList(dataArea.meals);
    }
  }, [dataArea]);

  useEffect(() => {
    if (selected === 'All') {
      requestProduct('https://www.themealdb.com/api/json/v1/1/search.php?s=');
    } else {
      requestProduct(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${selected}`);
    }
  }, [selected]);

  useEffect(() => {
    const twelve = 12;
    if (dataProduct) {
      setProducts(dataProduct.meals.slice(0, twelve));
    }
  }, [dataProduct]);

  return (
    <div>
      <Header title="Explorar Origem" />
      <div>
        <select
          name="select-area"
          id="select-area"
          data-testid="explore-by-area-dropdown"
          value={ selected }
          onChange={ ({ target }) => { setSelected(target.value); } }
        >
          <option
            value="All"
            data-testid="All-option"
          >
            All
          </option>
          {
            areaList && areaList.map((area, index) => (
              <option
                value={ area.strArea }
                key={ index }
                data-testid={ `${area.strArea}-option` }
              >
                { area.strArea }
              </option>
            ))
          }
        </select>
      </div>
      <div>
        { products && <RecipeCard products={ products } pageName="comidas" /> }
      </div>
      <Footer />
    </div>
  );
};

export default ExploreFoodArea;
