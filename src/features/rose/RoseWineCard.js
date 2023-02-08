import React from 'react';
import WineCard from './WineCard';
import { Link } from 'react-router-dom';

const RoseWineCard = ({ id, name, image }) => {
  return (
    <Link to={`/wines/${id}`}>
      <WineCard wineId={id} wineName={name} wineImage={image} />
    </Link>
  );
};

export default RoseWineCard;
