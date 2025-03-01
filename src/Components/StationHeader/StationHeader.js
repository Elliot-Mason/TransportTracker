import React from 'react';
import { useNavigate } from 'react-router-dom';
import trainIcon from '../../Assets/trainIcon.png';
import './StationHeader.css';

const StationHeader = ({ origin, destination, swapStations, color }) => {
  const navigate = useNavigate();

  return (
    <nav className="navbar" style={{ backgroundColor: color }}>
      <button onClick={() => navigate('/')} className="home-button">
        Home
      </button>
      <div className="station-container">
        <div className="station-name-container">
          <h1 className="station-name">{origin}</h1>
        </div>
        <button onClick={swapStations} className="swap-button">
          <img src={trainIcon} alt="Swap Origin and Destination" className="swap-icon" />
        </button>
        <div className="station-name-container">
          <h1 className="station-name">{destination}</h1>
        </div>
      </div>
    </nav>
  );
};

export default StationHeader;