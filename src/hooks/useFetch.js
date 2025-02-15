import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetch = ({ url, method = 'GET', params = {} }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({ method, url, params });
        setData(response.data);
      } catch {
        setError('Error al cargar los datos');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [url, method, params]);

  return {
    data,
    loading,
    error,
  };
};

export default useFetch;
