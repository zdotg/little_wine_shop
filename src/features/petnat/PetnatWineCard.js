import React from "react";
import WineCard from "../wine/WineCard";
import { Link } from "react-router-dom";

const PetnatWineCard = ({ wine }) => {
  return (
    <Link to={`/petnat/${petnat.id}`}>
      <WineCard wine={wine} category="petnats" />
    </Link>
  );
};

export default PetnatWineCard;
