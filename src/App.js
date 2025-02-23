import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Pages/HomePage/HomePage';
import TrainDepartures from './Pages/TrainDepartures/TrainDepartures';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route path="/departures" element={<TrainDepartures />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
