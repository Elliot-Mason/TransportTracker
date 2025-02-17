import React, { useState, useEffect } from 'react';
import axios from 'axios';
import trainIcon from './trainIcon.png';
import './TrainDepartures.css'; // Import the CSS file

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

    const interval = setInterval(() => {
      fetchTrains(nameOrigin, nameDestination);
    }, 60000); // 60000 milliseconds = 1 minute

    return () => clearInterval(interval); // Clear interval on component unmount
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

  const getStationAndPlatform = (name) => {
    const parts = name.split(', ');
    const station = parts[0];
    const platform = parts[1];
    return { station, platform };
  };

  return (
    <div>
      <nav className="navbar">
        <div className="station-container">
          <h1 className="station-name">
            {trains.length > 0 && getStationAndPlatform(trains[0].legs[0].origin.name).station}
          </h1>
          <button onClick={swapStations} className="swap-button">
            <img src={trainIcon} alt="Swap Origin and Destination" className="swap-icon" />
          </button>
          <h1 className="station-name">
            {trains.length > 0 && getStationAndPlatform(trains[0].legs[0].destination.name).station}
          </h1>
        </div>
      </nav>
      <div style={
        { marginTop: '40px' }
      }></div>
      {error && <p>Error: {error}</p>}
      <ul>
        {trains.map((train, index) => (
          <React.Fragment key={index}>
            <li>
              <div>
                <strong>Departure Time:</strong> {formatDateTime(train.legs[0].origin.departureTimeEstimated)}  <strong>Departs from:</strong> {getStationAndPlatform(train.legs[0].origin.name).platform}
              </div>
              <div>
                <strong>Arrival Time:</strong> {formatDateTime(train.legs[0].destination.arrivalTimeEstimated)}  <strong>Arrives to:</strong> {getStationAndPlatform(train.legs[0].destination.name).platform}
              </div>
              <div>
                <strong>Train Type:</strong> {train.legs[0].transportation.disassembledName}
              </div>
            </li>
            {index < trains.length - 1 && <hr className="solid" />}
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};

export default TrainDepartures;
