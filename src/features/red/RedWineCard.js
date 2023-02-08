import React from 'react';
import WineCard from './WineCard';

const RedWineCard = ({ wine }) => {
  return (
    <WineCard wine={wine} category="reds" />
  );
};

export default RedWineCard;
