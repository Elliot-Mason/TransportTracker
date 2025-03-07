import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchLightRail = (origin, destination) => {
  const [lightRail, setLightRail] = useState([]);
  const [error, setError] = useState(null);

  const fetchLightRail = async (origin, destination) => {
    try {
      const response = await axios.get('http://localhost:5000/api/lightrail', {
        params: {
          name_origin: origin,
          name_destination: destination,
        },
      });
      const data = response.data;
      const lightRailDepartures = data.slice(0, 5);
      setLightRail(lightRailDepartures);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchLightRail(origin, destination);

    const interval = setInterval(() => {
      fetchLightRail(origin, destination);
    }, 60000); // 60000 milliseconds = 1 minute

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [origin, destination]);

  return { lightRail, error };
};

export { useFetchLightRail };