import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchForm from './Components/SearchForm/SearchForm';
import { Button } from '@material-ui/core';

const HomePage = () => {
  const navigate = useNavigate();
  const [showSearchForm, setShowSearchForm] = useState(false);

  const handleSearch = (originId, destinationId) => {
    navigate(`/departures?origin=${originId}&destination=${destinationId}`);
  };

  const handleTrainClick = () => {
    setShowSearchForm(true);
  };

  return (
    <div>
      <h1>Welcome to the Train Departures App</h1>
      <div>
      <button onClick={handleSearch}>General Search</button>
      <button onClick={handleTrainClick}> Train </button>
        {/*
        implement these functions later
        
        <Button> Bus </Button>
        <Button> LightRail </Button>
        <Button> Ferry </Button>
        <Button> Metro </Button> */}
      </div>
      {showSearchForm && <SearchForm onSearch={handleSearch} />}
    </div>
  );
};

export default HomePage;