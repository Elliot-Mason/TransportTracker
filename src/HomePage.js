import React from 'react';
import { useNavigate } from 'react-router-dom';
import SearchForm from './Components/SearchForm/SearchForm';

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearch = (originId, destinationId) => {
    navigate(`/departures?origin=${originId}&destination=${destinationId}`);
  };

  return (
    <div>
      <h1>Welcome to the Train Departures App</h1>
      <SearchForm onSearch={handleSearch} />
    </div>
  );
};

export default HomePage;