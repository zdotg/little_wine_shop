import React from "react";
import WineCard from "./WineCard";
import { Link } from "react-router-dom";

const RedWineCard = ({ wine }) => {
  return (
    <Link to={`/red/${wine.id}`}>
      <WineCard wine={wine} category="reds" />
    </Link>
  );
};

export default RedWineCard;
