import React from 'react';
// import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';

const WineCard = ({ wine }) => {
    const { id, name, image } = wine;

    return (
      <Card>
        <CardImg top src={image} alt={name} />
        <CardImgOverlay>
          <CardTitle>{name}</CardTitle>
        </CardImgOverlay>
      </Card>
    );
  };
  
  export default WineCard;