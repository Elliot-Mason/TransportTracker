import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './LightRailDepartures.css'; // Import the CSS file
import StationHeader from '../../Components/StationHeader/StationHeader';
import TransportList from '../../Components/TransportList/TransportList';
import { useFetchLightRail } from '../../Hooks/useFetchLightRail'; // Use named import

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const LightRailDepartures = () => {
  const query = useQuery();
  const navigate = useNavigate();
  const origin = query.get('origin');
  const destination = query.get('destination');
  const { lightRail, error } = useFetchLightRail(origin, destination);

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
    navigate(`/LightRailDepartures?origin=${destination}&destination=${origin}`);
  };

  return (
    <div>
      <StationHeader
        origin={lightRail.length > 0 ? getStationAndPlatform(lightRail[0].legs[0].origin.name).station : ''}
        destination={lightRail.length > 0 ? getLastLegDestination(lightRail[0].legs) : ''}
        swapStations={swapStations}
      />
      <div style={{ marginTop: '40px' }}></div>
      {error && <p>Error: {error}</p>}
      <TransportList transports={lightRail} formatDateTime={formatDateTime} getStationAndPlatform={getStationAndPlatform} />
    </div>
  );
};

export default LightRailDepartures;
