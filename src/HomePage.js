// filepath: /c:/Users/Elliot/Desktop/Desktop/Dev/Personal/nsw-transport-gtfs-react/src/HomePage.js
import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <div>
      <h1>Welcome to the Train Departures App</h1>
      <Link to="/departures">Go to Train Departures</Link>
    </div>
  );
};

export default HomePage;