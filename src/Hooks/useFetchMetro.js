import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchMetro = (origin, destination) => {
  const [metro, setMetro] = useState([]);
  const [error, setError] = useState(null);

  const fetchMetro = async (origin, destination) => {
    try {
      const response = await axios.get('http://localhost:5000/api/metro', {
        params: {
          name_origin: origin,
          name_destination: destination,
        },
      });
      const data = response.data;
      const metroDepartures = data.slice(0, 5);
      setMetro(metroDepartures);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchMetro(origin, destination);

    const interval = setInterval(() => {
      fetchMetro(origin, destination);
    }, 60000); // 60000 milliseconds = 1 minute

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [origin, destination]);

  return { metro, error };
};

export default useFetchMetro ; // Ensure named export