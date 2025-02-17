import React, { useState, useEffect } from 'react';
import axios from 'axios';

const TrainDepartures = () => {
  const [trains, setTrains] = useState([]);
  const [error, setError] = useState(null);
  const [nameOrigin, setNameOrigin] = useState('10101252'); // Penrith Station
  const [nameDestination, setNameDestination] = useState('10101100'); // Central Station

  const fetchTrains = async (origin, destination) => {
    try {
      const response = await axios.get('http://localhost:5000/api/trains', {
        params: {
          name_origin: origin,
          name_destination: destination,
        },
      });
      const data = response.data;
      console.log('Train Data:', data);

      // Access the first 5 train departures
      const trainDepartures = data.slice(0, 5);
      setTrains(trainDepartures);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchTrains(nameOrigin, nameDestination);
  }, [nameOrigin, nameDestination]);

  const swapStations = () => {
    setNameOrigin(nameDestination);
    setNameDestination(nameOrigin);
  };

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  return (
    <div>
      <h1>Next 5 Train Departures</h1>
      {error && <p>Error: {error}</p>}
      <button onClick={swapStations}>Swap Origin and Destination</button>
      <ul>
        {trains.map((train, index) => (
          <li key={index}>
            Origin: {train.legs[0].origin.name} Departure Time: {formatDateTime(train.legs[0].origin.departureTimeEstimated)} - Destination: {train.legs[0].destination.name} Arrival Time: {formatDateTime(train.legs[0].destination.arrivalTimeEstimated)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TrainDepartures;
