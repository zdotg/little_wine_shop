import React from 'react';
import WineCard from './WineCard';

const PiquetteWineCard = ({ wine }) => {
  return (
    <WineCard wine={wine} category="piquettes" />
  );
};

export default PiquetteWineCard;
