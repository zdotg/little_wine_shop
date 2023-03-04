import React from "react";
import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";

const MerchDetail = ({ merch }) => {
  const { image, name, description, price } = merch;

  return (
    <Col xs={12} sm={8} md={6}>
      <Card>
        <CardImg top width="100%" src={image} alt={name} />
        <CardBody>
          <CardText>{name}</CardText>
          <CardText>{description}</CardText>
          <CardText>{Price}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MerchDetail;
