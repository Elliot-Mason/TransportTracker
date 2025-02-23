import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchForm from '../../Components/SearchForm/SearchForm';
import './HomePage.css'; // Import the CSS file

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
    <div className="homepage">
      <h1>Welcome to the Train Departures App</h1>
      <div className="button-group-container">
        <div className="button-group">
          <button className="button general-search" onClick={handleTrainClick}>General Search</button>
          <button className="button train" onClick={handleTrainClick}>Train</button>
          <button className="button bus">Bus</button>
          <button className="button light-rail">LightRail</button>
          <button className="button ferry">Ferry</button>
          <button className="button metro">Metro</button>
        </div>
      </div>
      {showSearchForm && <SearchForm onSearch={handleSearch} />}
    </div>
  );
};

export default HomePage;