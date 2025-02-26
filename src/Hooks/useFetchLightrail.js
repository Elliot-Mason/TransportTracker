import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchLightrail = (origin, destination) => {
  const [lightrail, setLightrail] = useState([]);
  const [error, setError] = useState(null);

  const fetchLightrail = async (origin, destination) => {
    try {
      const response = await axios.get('http://localhost:5000/api/lightrail', {
        params: {
          name_origin: origin,
          name_destination: destination,
        },
      });
      const data = response.data;
      const lightrailDepartures = data.slice(0, 5);
      setLightrail(lightrailDepartures);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchLightrail(origin, destination);

    const interval = setInterval(() => {
      fetchLightrail(origin, destination);
    }, 60000); // 60000 milliseconds = 1 minute

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [origin, destination]);

  return { lightrail, error };
};

export { useFetchLightrail };