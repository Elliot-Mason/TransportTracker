import React from 'react';

const TrainItem = ({ train, formatDateTime, getStationAndPlatform }) => {
  const routeType = train.legs[0].transportation.disassembledName;

  const getRouteIcon = (routeType) => {
    const routeMap = {
      'T1': 'line-T1',
      'T2': 'line-T2',
      'T3': 'line-T3',
      'T4': 'line-T4',
      'T5': 'line-T5',
      'T7': 'line-T7',
      'T8': 'line-T8',
      'T9': 'line-T9'
    };
    return routeMap[routeType] || null;
  };

  const routeIconClass = getRouteIcon(routeType);

  return (
    <li>
      <div>
        <strong>Departure Time:</strong> {formatDateTime(train.legs[0].origin.departureTimeEstimated)} - <strong>Platform:</strong> {getStationAndPlatform(train.legs[0].origin.name).platform}
      </div>
      <div>
        <strong>Arrival Time:</strong> {formatDateTime(train.legs[0].destination.arrivalTimeEstimated)} - <strong>Platform:</strong> {getStationAndPlatform(train.legs[0].destination.name).platform}
      </div>
      <div>
        {routeIconClass ? <span className={`icon sydneytrains ${routeIconClass}`}>{routeType}</span> : routeType}
      </div>
    </li>
  );
};

export default TrainItem;