import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchForm from './Components/SearchForm/SearchForm';
import { Button } from '@material-ui/core';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearch = (originId, destinationId) => {
    navigate(`/departures?origin=${originId}&destination=${destinationId}`);
  };

  return (
    <div>
      <h1>Welcome to the Train Departures App</h1>
      <div>
        {/* <Button text='General search '> </Button>
        <Button> Train </Button>
        <Button> Bus </Button>
        <Button> LightRail </Button>
        <Button> Ferry </Button>
        <Button> Metro </Button> */}
      </div>
      <SearchForm onSearch={handleSearch} />
    </div>
  );
};

export default HomePage;