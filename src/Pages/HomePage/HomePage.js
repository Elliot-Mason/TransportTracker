import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SearchForm from '../../Components/SearchForm/SearchForm';
import './HomePage.css'; // Import the CSS file

const HomePage = () => {
  const navigate = useNavigate();
  const [showSearchForm, setShowSearchForm] = useState(false);
  const [searchType, setSearchType] = useState('');
  const [headerColor, setHeaderColor] = useState('');

  const handleSearch = (originId, destinationId) => {
    let path = '';
    switch (searchType) {
      case 'train':
        path = `/TrainDepartures?origin=${originId}&destination=${destinationId}&color=${headerColor}`;
        break;
      case 'bus':
        path = `/BusDepartures?origin=${originId}&destination=${destinationId}&color=${headerColor}`;
        break;
      case 'light-rail':
        path = `/LightRailDepartures?origin=${originId}&destination=${destinationId}&color=${headerColor}`;
        break;
      case 'ferry':
        path = `/FerryDepartures?origin=${originId}&destination=${destinationId}&color=${headerColor}`;
        break;
      case 'metro':
        path = `/MetroDepartures?origin=${originId}&destination=${destinationId}&color=${headerColor}`;
        break;
      default:
        path = `/GeneralSearch?origin=${originId}&destination=${destinationId}&color=${headerColor}`;
    }
    navigate(path);
  };

  const handleButtonClick = (type, color) => {
    setSearchType(type);
    setHeaderColor(color);
    setShowSearchForm(true);
  };

  return (
    <div className="homepage">
      <h1>Welcome to the Transport Departures App</h1>
      <div className="button-group-container">
        <div className="button-group">
          <button className="button general-search" onClick={() => handleButtonClick('general-search', '#4CAF50')}>General Search</button>
          <button className="button train" onClick={() => handleButtonClick('train', '#F99D1C')}>Train</button>
          <button className="button bus" onClick={() => handleButtonClick('bus', '#0098cd')}>Bus</button>
          <button className="button light-rail" onClick={() => handleButtonClick('light-rail', '#DD1E25')}>LightRail</button>
          <button className="button ferry" onClick={() => handleButtonClick('ferry', '#5AB031')}>Ferry</button>
          <button className="button metro" onClick={() => handleButtonClick('metro', '#168388')}>Metro</button>
        </div>
      </div>
      {showSearchForm && <SearchForm onSearch={handleSearch} />}
    </div>
  );
};

export default HomePage;