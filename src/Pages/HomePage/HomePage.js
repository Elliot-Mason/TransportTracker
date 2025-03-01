import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchForm from '../../Components/SearchForm/SearchForm';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  const navigate = useNavigate();
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [searchType, setSearchType] = useState('');

  const handleSearch = (originId, destinationId) => {
    let path = '';
    switch (searchType) {
      case 'train':
        path = `/TrainDepartures?origin=${originId}&destination=${destinationId}`;
        break;
      case 'bus':
        path = `/BusDepartures?origin=${originId}&destination=${destinationId}`;
        break;
      case 'light-rail':
        path = `/LightRailDepartures?origin=${originId}&destination=${destinationId}`;
        break;
      case 'ferry':
        path = `/FerryDepartures?origin=${originId}&destination=${destinationId}`;
        break;
      case 'metro':
        path = `/MetroDepartures?origin=${originId}&destination=${destinationId}`;
        break;
      default:
        path = `/GeneralSearch?origin=${originId}&destination=${destinationId}`;
    }
    navigate(path);
  };

  const handleButtonClick = (type) => {
    setSearchType(type);
    setShowSearchForm(true);
  };

  return (
    <div className="homepage">
      <h1>Welcome to the Transport Departures App</h1>
      <div className="button-group-container">
        <div className="button-group">
          <button className="button general-search" onClick={() => handleButtonClick('general-search')}>General Search</button>
          <button className="button train" onClick={() => handleButtonClick('train')}>Train</button>
          <button className="button bus" onClick={() => handleButtonClick('bus')}>Bus</button>
          <button className="button light-rail" onClick={() => handleButtonClick('light-rail')}>LightRail</button>
          <button className="button ferry" onClick={() => handleButtonClick('ferry')}>Ferry</button>
          <button className="button metro" onClick={() => handleButtonClick('metro')}>Metro</button>
        </div>
      </div>
      {showSearchForm && <SearchForm onSearch={handleSearch} />}
    </div>
  );
};

export default HomePage;