import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './FerryDepartures.css'; // Import the CSS file
import StationHeader from '../../Components/StationHeader/StationHeader';
import TransportList from '../../Components/TransportList/TransportList';
import useFetchFerries from '../../Hooks/useFetchFerries';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const FerryDepartures = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const origin = query.get('origin');
  const destination = query.get('destination');
  const { ferries, error } = useFetchFerries(origin, destination);

  console.log('Ferry data:', ferries); // Debugging
  console.log('Error:', error); // Debugging

  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  };

  const getStationAndWharf = (name) => {
    const parts = name.split(', ');
    const station = parts[0];
    const wharf = parts[1];
    return { station, wharf };
  };

  const getLastLegDestination = (legs) => {
    const lastLeg = legs[legs.length - 1];
    return getStationAndWharf(lastLeg.destination.name).station;
  };

  const swapStations = () => {
    navigate(`/FerryDepartures?origin=${destination}&destination=${origin}`);
  };

  return (
    <div>
      <StationHeader
        origin={ferries.length > 0 ? getStationAndWharf(ferries[0].legs[0].origin.name).station : ''}
        destination={ferries.length > 0 ? getLastLegDestination(ferries[0].legs) : ''}
        swapStations={swapStations}
      />
      <div style={{ marginTop: '40px' }}></div>
      {error && <p>Error: {error}</p>}
      <TransportList transports={ferries} formatDateTime={formatDateTime} getStationAndPlatform={getStationAndWharf} />
    </div>
  );
};

export default FerryDepartures;
