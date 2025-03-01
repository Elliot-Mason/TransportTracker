import React from 'react';
import TransportItem from '../TransportItem/TransportItem';

const TransportList = ({ transports, formatDateTime, getStationAndPlatform }) => {
  return (
    <ul>
      {transports.map((transport, index) => (
        <React.Fragment key={index}>
          <TransportItem transport={transport} formatDateTime={formatDateTime} getStationAndPlatform={getStationAndPlatform} />
          {index < transports.length - 1 && <hr className="solid" />}
        </React.Fragment>
      ))}
    </ul>
  );
};

export default TransportList;