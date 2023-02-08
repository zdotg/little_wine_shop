import React from 'react';
import WineCard from './WineCard';

const WhiteWineCard = ({ wine }) => {
  return (
    <WineCard wine={wine} category="whites" />
  );
};

export default WhiteWineCard;

