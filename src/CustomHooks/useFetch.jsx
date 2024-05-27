import { useState, useEffect } from 'react';

// En custom hook som hanterar hämtningen av data från db.json, kräver endast en endpoint-url som parameter. 

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;