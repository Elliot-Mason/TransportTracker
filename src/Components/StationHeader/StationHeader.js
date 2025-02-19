import React from 'react';
import trainIcon from '../../Assets/trainIcon.png';
import './StationHeader.css';

const StationHeader = ({ origin, destination, swapStations }) => {
  return (
    <nav className="navbar">
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