import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchForm from '../../Components/SearchForm/SearchForm';

const HomePage = () => {
  const navigate = useNavigate();
  const [showSearchForm, setShowSearchForm] = useState(false);

  const handleSearch = (originId, destinationId) => {
    navigate(`/TrainDepartures?origin=${originId}&destination=${destinationId}`);
  };

  const handleTrainClick = () => {
    setShowSearchForm((prevShowSearchForm) => !prevShowSearchForm);
  };

  return (
    <div>
      <h1>Welcome to the Train Departures App</h1>
      <div>
      <button onClick={handleSearch}>General Search</button>
      <button onClick={handleTrainClick}> Train </button>
      <button> Bus </button>
      <button> LightRail </button>
      <button> Ferry </button>
      <button> Metro </button>
      </div>
      {showSearchForm && <SearchForm onSearch={handleSearch} />}
    </div>
  );
};

export default HomePage;