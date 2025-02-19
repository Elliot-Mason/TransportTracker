import React from 'react';

const TrainItem = ({ train, formatDateTime, getStationAndPlatform }) => {
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

  return (
    <li>
      {train.legs.map((leg, index) => {
        const routeType = leg.transportation.disassembledName;
        const routeIconClass = getRouteIcon(routeType);

        return (
          <div key={index} className="leg-container">
            {routeIconClass && (
              <div className={`icon-container ${routeIconClass}`}>
                <span className={`icon sydneytrains ${routeIconClass}`}>{routeType}</span>
              </div>
            )}
            <div className="leg-info">
              <div>
                <strong>Departure Time:</strong> {formatDateTime(leg.origin.departureTimeEstimated)} - <strong>Platform:</strong> {getStationAndPlatform(leg.origin.name).platform}
              </div>
              <div>
                <strong>Arrival Time:</strong> {formatDateTime(leg.destination.arrivalTimeEstimated)} - <strong>Platform:</strong> {getStationAndPlatform(leg.destination.name).platform}
              </div>
              {index < train.legs.length - 1 && (
                <div>
                  <strong>Transfer at:</strong> {getStationAndPlatform(leg.destination.name).station}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </li>
  );
};

export default TrainItem;