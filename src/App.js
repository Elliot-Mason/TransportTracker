import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import TrainDepartures from './Pages/TrainDepartures/TrainDepartures';
import MetroDepartures from './Pages/MetroDepartures/MetroDepartures';
import FerryDepartures from './Pages/FerryDepartures/FerryDepartures';
import LightRailDepartures from './Pages/LightRailDepartures/LightRailDepartures';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/TrainDepartures" element={<TrainDepartures />} />
          <Route path="/MetroDepartures" element={<MetroDepartures />} />
          <Route path="/FerryDepartures" element={<FerryDepartures />} />
          <Route path="//lightRailDepartures" element={<LightRailDepartures />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
