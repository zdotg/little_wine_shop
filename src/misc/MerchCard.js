import React from 'react';
import WineCard from './WineCard';

const MerchCard = ({ merch }) => {
  return (
    <WineCard merch={merch} category="merch" />
  );
};

export default MerchCard;

