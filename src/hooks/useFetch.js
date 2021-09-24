import React, { useContext, useState } from 'react';
import { GlobalContext } from '../context/GlobalStorage';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(null);
  const [categories, setCategories] = useState(null);
  const GLOBAL = useContext(GlobalContext);

  const request = React.useCallback(async (url, category = false) => {
    let response;
    let json;
    try {
      setError(null);
      setLoading(true);
      response = await fetch(url);
      json = await response.json();
      if (response.ok === false) throw new Error(json.message);
    } catch (err) {
      json = null;
      setError(err.message);
    } finally {
      setLoading(false);
      setData(json);
      if (category === false) {
        GLOBAL.setResponseFetch(json);
      } else {
        setCategories(json);
      }
    }
  }, [GLOBAL]);

  return { data, loading, error, request, categories };
};

export default useFetch;

// Utilizando custom hook de https://www.origamid.com/slide/react-completo/#/0306-custom-hooks/2
