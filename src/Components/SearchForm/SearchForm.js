import React, { useState } from 'react';
import Fuse from 'fuse.js';
import StationInformation from '../../Assets/StationInformation.json';

const SearchForm = ({ onSearch }) => {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const fuse = new Fuse(StationInformation.records, {
    keys: ['3'], // diva_common_name_without_locality field
    threshold: 0.3, // Adjust the threshold for fuzzy matching
  });

  const handleSearch = () => {
    const findStationId = (name) => {
      const result = fuse.search(name);
      return result.length > 0 ? result[0].item[1] : null; // diva_efa_id field
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