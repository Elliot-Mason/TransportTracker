import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchTrains = (origin, destination) => {
  const [trains, setTrains] = useState([]);
  const [error, setError] = useState(null);

  const fetchTrains = async (origin, destination) => {
    try {
      const response = await axios.get('http://localhost:5000/api/trains', {
        params: {
          name_origin: origin,
          name_destination: destination,
        },
      });
      const data = response.data;
      const trainDepartures = data.slice(0, 5);
      setTrains(trainDepartures);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchTrains(origin, destination);

    const interval = setInterval(() => {
      fetchTrains(origin, destination);
    }, 60000);

    return () => clearInterval(interval);
  }, [origin, destination]);

  return { trains, error };
};

export default useFetchTrains;