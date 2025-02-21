import React, { useState } from 'react';
import StationInformation from '../../Assets/StationInformation.json';

const SearchForm = ({ onSearch }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const handleSearch = () => {
    const findStationId = (name) => {
      const station = StationInformation.records.find((record) =>
        record[3].toLowerCase().includes(name.toLowerCase())
      );
      return station ? station[1] : null;
    };

    const originId = findStationId(origin);
    const destinationId = findStationId(destination);

    if (originId && destinationId) {
      onSearch(originId, destinationId);
    } else {
      alert('Station not found. Please enter a valid station name.');
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter origin station"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter destination station"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default SearchForm;