import React from 'react';

const TrainItem = ({ train, formatDateTime, getStationAndPlatform }) => {
  return (
    <li>
      <div>
        <strong>Departure Time:</strong> {formatDateTime(train.legs[0].origin.departureTimeEstimated)} - <strong>Platform:</strong> {getStationAndPlatform(train.legs[0].origin.name).platform}
      </div>
      <div>
        <strong>Arrival Time:</strong> {formatDateTime(train.legs[0].destination.arrivalTimeEstimated)} - <strong>Platform:</strong> {getStationAndPlatform(train.legs[0].destination.name).platform}
      </div>
      <div>
        <strong>Route Type:</strong> {train.legs[0].transportation.disassembledName}
      </div>
    </li>
  );
};

export default TrainItem;