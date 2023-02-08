import React from 'react';
import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const WineDetailPage = ({ wine }) => {
  return (
    <Col xs={12} sm={8} md={6}>
      <Card>
        <CardImg top width="100%" src={wine.image} alt={wine.name} />
        <CardBody>
          <CardText>
            <b>Name:</b> {wine.name}
            <br />
            <b>Type:</b> {wine.type}
            <br />
            <b>Description:</b> {wine.description}
            <br />
            <b>Price:</b> {wine.price}
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WineDetailPage;
