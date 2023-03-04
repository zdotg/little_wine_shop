import React from "react";
import WineCard from "./WineCard";
import { Link } from "react-router-dom";

const SparklingWineCard = ({ wine }) => {
  return (
    <Link to={`/sparkling/${wine.id}`}>
      <WineCard wine={wine} category="sparklings" />
    </Link>
  );
};

export default SparklingWineCard;
