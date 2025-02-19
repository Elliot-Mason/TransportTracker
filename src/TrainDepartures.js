import React, { useState } from 'react';
import './TrainDepartures.css'; // Import the CSS file
import StationHeader from './Components/StationHeader/StationHeader';
import TrainList from './Components/TrainList/TrainList';
import useFetchTrains from './Hooks/useFetchTrains';

const TrainDepartures = () => {
  const [nameOrigin, setNameOrigin] = useState('10101252'); // Penrith Station
  const [nameDestination, setNameDestination] = useState('10101109'); // Central Station
  const { trains, error } = useFetchTrains(nameOrigin, nameDestination);

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

  const getLastLegDestination = (legs) => {
    const lastLeg = legs[legs.length - 1];
    return getStationAndPlatform(lastLeg.destination.name).station;
  };

  return (
    <div>
      <StationHeader
        origin={trains.length > 0 ? getStationAndPlatform(trains[0].legs[0].origin.name).station : ''}
        destination={trains.length > 0 ? getLastLegDestination(trains[0].legs) : ''}
        swapStations={swapStations}
      />
      <div style={{ marginTop: '40px' }}></div>
      {error && <p>Error: {error}</p>}
      <TrainList trains={trains} formatDateTime={formatDateTime} getStationAndPlatform={getStationAndPlatform} />
    </div>
  );
};

export default TrainDepartures;
