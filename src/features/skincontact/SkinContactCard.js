import React from "react";
import WineCard from "./WineCard";
import { Link } from "react-router-dom";

const SkinContactCard = ({ wine }) => {
  return (
    <Link to={`/skincontact/${wine.id}`}>
      <WineCard wine={wine} category="skincontacts" />
    </Link>
  );
};

export default SkinContactCard;
