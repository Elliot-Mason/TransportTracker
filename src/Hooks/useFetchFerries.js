import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchFerries = (origin, destination) => {
  const [ferries, setFerries] = useState([]);
  const [error, setError] = useState(null);

  const fetchFerries = async (origin, destination) => {
    try {
      const response = await axios.get('http://localhost:5000/api/ferries', {
        params: {
          name_origin: origin,
          name_destination: destination,
        },
      });
      const data = response.data;
      const ferryDepartures = data.slice(0, 5);
      console.log('Fetched ferry data:', ferryDepartures); // Debugging
      setFerries(ferryDepartures);
    } catch (error) {
      console.error('Error fetching ferries:', error); // Debugging
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchFerries(origin, destination);

    const interval = setInterval(() => {
      fetchFerries(origin, destination);
    }, 60000); // 60000 milliseconds = 1 minute

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [origin, destination]);

  return { ferries, error };
};

export default useFetchFerries;