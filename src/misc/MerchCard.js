import React from "react";
import WineCard from "./WineCard";
import { Link } from "react-router-dom";

const MerchCard = ({ merch }) => {
  return (
    <Link to={`/merch/${merch.id}`}>
      <WineCard merch={merch} category="merch" />
    </Link>
  );
};

export default MerchCard;
