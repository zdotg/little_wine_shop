import React from 'react';
import WineCard from './WineCard';

const RoseWineCard = ({ wine }) => {
  return (
    <WineCard wine={wine} category="roses" />
  );
};

export default RoseWineCard;

