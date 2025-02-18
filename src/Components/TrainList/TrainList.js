import React from 'react';
import TrainItem from '../TrainItem/TrainItem';

const TrainList = ({ trains, formatDateTime, getStationAndPlatform }) => {
  return (
    <ul>
      {trains.map((train, index) => (
        <React.Fragment key={index}>
          <TrainItem train={train} formatDateTime={formatDateTime} getStationAndPlatform={getStationAndPlatform} />
          {index < trains.length - 1 && <hr className="solid" />}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default TrainList;