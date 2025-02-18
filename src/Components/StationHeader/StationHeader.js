import React from 'react';
import trainIcon from '../../Assets/trainIcon.png';

const StationHeader = ({ origin, destination, swapStations }) => {
  return (
    <nav className="navbar">
      <div className="station-container">
        <h1 className="station-name">{origin}</h1>
        <button onClick={swapStations} className="swap-button">
          <img src={trainIcon} alt="Swap Origin and Destination" className="swap-icon" />
        </button>
        <h1 className="station-name">{destination}</h1>
      </div>
    </nav>
  );
};

export default StationHeader;