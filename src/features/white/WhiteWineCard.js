import React from "react";
import WineCard from "./WineCard";
import { Link } from "react-router-dom";

const WhiteWineCard = ({ wine }) => {
  return (
    <Link to={`/white/${wine.id}`}>
      <WineCard wine={wine} category="whites" />
    </Link>
  );
};

export default WhiteWineCard;
