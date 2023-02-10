import React from 'react';
import WineCard from './WineCard';

const SparklingWineCard = ({ wine }) => {
  return (
    <WineCard wine={wine} category="sparklings" />
  );
};

export default SparklingWineCard;

