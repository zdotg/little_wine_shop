import React from "react";
import WineCard from "./WineCard";
import { Link } from "react-router-dom";

const PiquetteWineCard = ({ wine }) => {
  return (
    <Link to={`/piquette/${wine.id}`}>
      <WineCard wine={wine} category="piquettes" />
    </Link>
  );
};

export default PiquetteWineCard;
