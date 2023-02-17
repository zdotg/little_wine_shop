import React from 'react';
import WineCard from '../wine/WineCard';

const PetnatWineCard = ({ wine }) => {
  return (
    <WineCard wine={wine} category="petnats" />
  );
};

export default PetnatWineCard;
