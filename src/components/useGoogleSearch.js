import React, { useEffect, useState } from 'react';
import API_KEY from './Keys';

const CONTEXT_KEY = '0329c85c256a74233';

const useGoogleSearch = (term) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${encodeURIComponent(term)}`
        );
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, [term]);

  return { data };
};

export default useGoogleSearch;
