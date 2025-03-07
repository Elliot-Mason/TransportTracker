import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import TrainDepartures from './Pages/TrainDepartures/TrainDepartures';
import MetroDepartures from './Pages/MetroDepartures/MetroDepartures';
import FerryDepartures from './Pages/FerryDepartures/FerryDepartures';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/TrainDepartures" element={<TrainDepartures />} />
          <Route path="/MetroDepartures" element={<MetroDepartures />} />
          <Route path="/FerryDepartures" element={<FerryDepartures />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
