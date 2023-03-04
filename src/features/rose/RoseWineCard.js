import React from "react";
import WineCard from "./WineCard";
import { Link } from "react-router-dom";

const RoseWineCard = ({ wine }) => {
  return (
    <Link to={`/rose/${wine.id}`}>
      <WineCard wine={wine} category="roses" />
    </Link>
  );
};

export default RoseWineCard;
