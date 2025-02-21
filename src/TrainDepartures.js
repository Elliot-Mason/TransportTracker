import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './TrainDepartures.css'; // Import the CSS file
import StationHeader from './Components/StationHeader/StationHeader';
import SearchForm from './Components/SearchForm/SearchForm';
import TrainList from './Components/TrainList/TrainList';
import useFetchTrains from './Hooks/useFetchTrains';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const TrainDepartures = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const origin = query.get('origin');
  const destination = query.get('destination');
  const { trains, error } = useFetchTrains(origin, destination);

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

  const swapStations = () => {
    navigate(`/departures?origin=${destination}&destination=${origin}`);
  };

  return (
    <div>
      <StationHeader
        origin={trains.length > 0 ? getStationAndPlatform(trains[0].legs[0].origin.name).station : ''}
        destination={trains.length > 0 ? getLastLegDestination(trains[0].legs) : ''}
        swapStations={swapStations}
      />
      <SearchForm onSearch={(originId, destinationId) => {
        window.location.href = `/departures?origin=${originId}&destination=${destinationId}`;
      }} />
      <div style={{ marginTop: '40px' }}></div>
      {error && <p>Error: {error}</p>}
      <TrainList trains={trains} formatDateTime={formatDateTime} getStationAndPlatform={getStationAndPlatform} />
    </div>
  );
};

export default TrainDepartures;
